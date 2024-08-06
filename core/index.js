const createTsFile = require('./jsonToTsFile');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const { readJson } = require('fs-extra');
const { argv } = require('process');
const swaggerJSON = require('./swaggerMap');

class Initializer {
    /**
     * swagger转json并生成markdown
     * @param {number} buildType {0:打印全部，1：打印没有入库的方法，2：打印入库了的方法}
     */
    constructor(buildType = 0) {
        this.buildType = buildType;
        // biz请求配置
        this.requestConfig = {};
        // 模型数据，用于写入json文件
        this.schemaDataJson = {};
        // swagger文档地址列表
        this.swaggerList = {};
        // 正则表达式，用于处理接口描述
        this.descReg = /\r|\n|;\"|(<.+\/?>)/g;
        // 已有的类型定义数据
        this.warehouseTypes = {};
        // 过滤忽略的接口
        this.ignorePaths = {};
        this.getJsonFileData();
        this.init();
    }

    /**
     * 获取相关json文件数据
     */
    async getJsonFileData() {
        this.warehouseTypes = await readJson(path.join(__dirname, './warehouseTypes.json'));
        this.ignorePaths = await readJson(path.join(__dirname, './ignoreTypes.json'));
    }

    async init() {
        await this.getSwaggerList();
        const swaggerData = await this.getSwaggerData();
        // 解析 swagger 文档接口数据
        swaggerData.map(async (bizRes, index) => {
            try {
                const {
                    paths,
                    components: { schemas },
                } = bizRes.data;
                // 当前处理的 biz 名称
                let bizName = Object.keys(this.swaggerList)[index];
                console.log('开始处理' + bizName);
                // 当前处理的 biz 版本
                let version = 'v1';
                if (bizName.includes('-v')) {
                    const [n, v] = bizName.split('-');
                    bizName = n;
                    version = v;
                }
                // 解析 schema 模型
                const schemaData = this.schemaDataHandler(schemas);
                this.schemaDataJson = { ...this.schemaDataJson, [bizName]: schemaData };
                // 处理 paths 路径数据
                const ignorePathList = [...this.ignorePaths.common, ...(this.ignorePaths[bizName] || [])];
                Object.keys(paths)
                    .filter((url) => !ignorePathList.includes(url))
                    .forEach((url) => {
                        Object.entries(paths[url]).forEach(([methodType, value]) => {
                            const { operationId, tags, summary, parameters, requestBody, responses } = value;
                            // 分类
                            const tag = tags?.at(0) || '';
                            // 过滤回调型接口
                            if (tag === 'Callbacks') return;
                            const transformParams = this.apiParamsHandler(parameters, schemaData);
                            const transformRequestBody = this.apiRequestBodyHandler(requestBody, schemaData);
                            const transformResponses = this.apiResponsesHandler(responses, schemaData);
                            /**
                             * 处理 requestConfig 请求配置
                             */
                            const warehouseTypesDataInfo = this.warehouseTypes[bizName]?.[`${methodType}&${url}${version != 'v1' ? '&' + version : ''}`];
                            const requestTypeName = warehouseTypesDataInfo?.requestTypeName || this.getNameFromUrl(1, parameters, requestBody, transformResponses, url, methodType, version);
                            const responsesTypeName = warehouseTypesDataInfo?.responsesTypeName || this.getNameFromUrl(2, parameters, requestBody, transformResponses, url, methodType, version);
                            // 已有的接口不再入库
                            const canSave = this.buildType == 0 || (this.buildType == 1 && !warehouseTypesDataInfo) || (this.buildType == 2 && !!warehouseTypesDataInfo);
                            canSave &&
                                this.requestConfig[bizName].push({
                                    url,
                                    tag,
                                    method: methodType,
                                    summary,
                                    version,
                                    requestTypeName,
                                    responsesTypeName,
                                    operationId,
                                    parameters: transformParams,
                                    responses: transformResponses,
                                    requestBody: transformRequestBody,
                                });
                        });
                    });
            } catch (error) {
                throw error;
            }
        });

        // 将 schemaData 写入json文件
        await fs.writeFileSync(path.join(__dirname, `/dist/schema.json`), JSON.stringify(this.schemaDataJson, null, '\t'), 'utf8');

        this.writeBizJson();

        if (this.buildType == 2) {
            console.log('json转化成功，开始生成markdown文件');
            // markdown模板生成;
            for (const key in this.requestConfig) {
                await createTsFile.startup(key, this.requestConfig[key]);
            }
        }
    }

    /**
     * 解析 url 获取类型定义名称
     * @param {number} type 1-requestTypeName 2-responsesTypeName
     * @param {object} parameters api参数对象
     * @param {object} requestBody api请求体对象
     * @param {object} responses api响应对象
     * @param {string} url Api Url
     * @param {string} methodType 请求方式
     * @param {string} version 版本
     * @returns {string} 创建好的requestTypeName或responsesTypeName
     */
    getNameFromUrl(type, parameters, requestBody, responses, url, methodType, version) {
        const urls = url.split('/').map((item) => this.capitalizeFirstLetter(item));
        if (type === 1) {
            if (!parameters && !requestBody) {
                return 'CommonReqType';
            }
            return `${urls.join('')}ReqTypeBy${this.capitalizeFirstLetter(methodType)}${version === 'v1' ? '' : this.capitalizeFirstLetter(version)}`;
        } else {
            if (!responses) {
                return 'CommonResType';
            }
            return `${urls.join('')}ResTypeBy${this.capitalizeFirstLetter(methodType)}${version === 'v1' ? '' : this.capitalizeFirstLetter(version)}`;
        }
    }

    /**
     * 字符串首字母大写
     * @param {string} str
     * @returns {string} 转换后的字符串
     */
    capitalizeFirstLetter(str) {
        let res = str || '';
        if (res.includes('{')) {
            res = res.replace(/[{}]/g, '');
        }
        if (res.includes('_')) {
            return res.replace(/(?:^|_)([a-z])/g, function (_, p1) {
                return p1.toUpperCase();
            });
        }
        return res ? res.replace(/^\w/, (c) => c.toUpperCase()) : '';
    }

    /**
     * 获取 swagger 文档地址列表
     */
    getSwaggerList() {
        return new Promise((resolve, reject) => {
            try {
                Object.entries(swaggerJSON).forEach(([bizName, swaggerDataConfig]) => {
                    const { primaryName, address, port, url } = swaggerDataConfig;
                    const headers = primaryName ? { 'X-Service-Address': address, 'X-Service-Port': port } : {};
                    if (typeof url === 'string') {
                        this.swaggerList[bizName] = { url, headers, params: { ip: address, port } };
                    } else {
                        Object.keys(url).forEach((version) => {
                            this.swaggerList[`${bizName}-${version}`] = { url: url[version], headers, params: { ip: address, port } };
                        });
                    }
                    this.requestConfig[bizName] = [];
                });
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * 获取 swagger 文档数据
     * @returns {array} 获取到的所有文档数据
     */
    async getSwaggerData() {
        console.log('请求拼装成功，开始请求swagger文档接口数据');
        const swaggerData = await Promise.all(
            Object.values(this.swaggerList).map((item) => {
                let requestUrl = item.url;
                if (item.params.ip && item.params.port) {
                    requestUrl = `${requestUrl}?ip=${item.params.ip}&port=${item.params.port}`;
                }
                return axios.get(requestUrl, { headers: item.headers });
            })
        ).catch((error) => {
            const errorMsg = `请求错误,错误码:${error.code}，请求url:${error.config.url}`;
            throw new Error(errorMsg);
        });
        swaggerData.forEach((item) => console.log(item.config.url, item.status === 200 ? `success` : 'fail'));

        return swaggerData;
    }

    /**
     * schema 模型处理
     * @param {object} schemas 原始模型数据
     * @returns {object} 处理后的模型数据
     */
    schemaDataHandler(schemas) {
        try {
            return Object.entries(schemas).reduce((pre, [curSchemaName, curSchemaData]) => {
                if (curSchemaData.type === 'object') {
                    const { type, properties = {}, description = '', required = [] } = curSchemaData;
                    const params = Object.entries(properties).map(([key, value]) => {
                        return this.schemaPropertiesHandler(pre, key, value, required);
                    });
                    return { ...pre, [curSchemaName]: { type, description: description.replace(this.descReg, ''), properties: params } };
                } else {
                    return {
                        ...pre,
                        [curSchemaName]: {
                            type: curSchemaData.type === 'integer' ? 'number' : curSchemaData.type,
                            description: curSchemaData.description,
                            details: curSchemaData.enum || null,
                        },
                    };
                }
            }, {});
        } catch (error) {
            throw error;
        }
    }

    /**
     * 处理 schema 模型中的 properties
     * @param {object} processedSchemas 已处理好的数据
     * @param {string} key 属性名
     * @param {object} value 属性值
     * @param {array} requiredList 必填属性集合
     */
    schemaPropertiesHandler(processedSchemas, key, value, requiredList) {
        const { type = '', description = '', items = {} } = value || {};
        // 简单类型
        if (['number', 'integer', 'string', 'boolean'].includes(type)) {
            return {
                key,
                type: type === 'integer' ? 'number' : type,
                description: description ? description.replace(this.descReg, '') : '',
                required: requiredList.includes(key),
                details: value?.enum ? value.enum : null,
            };
        }
        // 数组类型
        if (type === 'array') {
            // 简单类型
            if (['number', 'integer', 'string', 'boolean'].includes(items?.type)) {
                return {
                    key,
                    type: `Array<${items.type === 'integer' ? 'number' : items.type}>`,
                    description: description ? description.replace(this.descReg, '') : '',
                    required: requiredList.includes(key),
                };
            }
            // 复杂类型
            if (items?.$ref) {
                const refName = items.$ref.split('/')?.at(-1);
                const refObj = processedSchemas[refName] || {};
                const details = (refObj?.properties ? [...refObj.properties] : []).map((item) => {
                    if (item.allOf || item.items) {
                        console.log('🚀 ~ index.js:269 ~ item:', item);
                        return this.schemaPropertiesHandler(processedSchemas, item.key, item, requiredList);
                    }
                    return item;
                });
                return {
                    key,
                    type: 'Array<object>',
                    description: description ? description.replace(this.descReg, '') : '',
                    required: requiredList.includes(key),
                    details: details.length > 0 ? details : null,
                };
            }
            return {
                key,
                type: `Array<any>`,
                description: description ? description.replace(this.descReg, '') : '',
                required: requiredList.includes(key),
            };
        }
        // 对象类型
        if (type === 'object') {
            const { properties = {}, allOf = [] } = value || {};
            let details = [];
            const result = {
                key,
                type: 'Record<string, any>',
                description: description ? description.replace(this.descReg, '') : '',
                required: requiredList.includes(key),
            };
            if (Object.keys(properties).length) {
                details = Object.entries(properties).map(([proKey, proValue]) => {
                    return this.schemaPropertiesHandler(processedSchemas, proKey, proValue, requiredList);
                });
                result.type = 'object';
                result.details = details.length > 0 ? details : null;
            } else if (allOf.length) {
                const refName = value.allOf?.at(0)?.$ref.split('/')?.at(-1);
                const refObj = processedSchemas[refName] || {};
                details = (refObj?.properties ? [...refObj.properties] : []).map((item) => {
                    if (item.allOf || item.items) {
                        console.log('🚀 ~ index.js:310 ~ item:', item);
                        return this.schemaPropertiesHandler(processedSchemas, item.key, item, requiredList);
                    }
                    return item;
                });
                result.type = 'object';
                result.details = details.length > 0 ? details : null;
            }
            return result;
        }
        // 未知类型
        const refName = value.allOf?.at(0)?.$ref.split('/')?.at(-1);
        const refObj = processedSchemas[refName] || {};
        return {
            key,
            type: refObj.type || 'any',
            description: description ? description.replace(this.descReg, '') : '',
            required: requiredList.includes(key),
            details: refObj.details || refObj.properties || null,
        };
    }

    /**
     * 处理接口 params 参数
     * @param {array} parameters 接口对象的 parameters 数组
     * @param {object} schemaData 模型数据
     * @returns {array} 处理后的 params 参数数组
     */
    apiParamsHandler(parameters, schemaData) {
        try {
            return !Array.isArray(parameters)
                ? null
                : parameters.map((item) => {
                      // 基本参数
                      let paramInfo = {
                          key: item.name,
                          type: item.schema?.type,
                          description: item.description ? item.description.replace(this.descReg, '') : /id$/i.test(item.name) ? item.name : '',
                          required: item.required,
                          default: item.schema?.default || null,
                          in: item.in,
                      };
                      // 走 schema 模型的参数
                      if (!item.type && (item.schema?.$ref || item.schema?.allOf)) {
                          const refName = item.schema.$ref ? item.schema.$ref.split('/')?.at(-1) : item.schema?.allOf?.at(0)?.$ref.split('/')?.at(-1);
                          const refData = schemaData?.[refName] || {};
                          paramInfo.type = refData?.type;
                      }
                      // 请求头参数
                      if (item.in === 'header') {
                          paramInfo.in = 'header';
                          paramInfo.type = item?.schema?.type ?? 'string';
                      }
                      return paramInfo;
                  });
        } catch (error) {
            throw error;
        }
    }

    /**
     * 处理接口 requestBody 参数
     * @param {object} requestBody 接口对象的 requestBody 对象
     * @param {object} schemaData 模型数据
     * @returns {array} 处理后的 requestBody 参数数组
     */
    apiRequestBodyHandler(requestBody, schemaData) {
        try {
            if (requestBody) {
                const schemaWrap = requestBody.content['application/json']?.schema ?? {};
                const schemaRef = schemaWrap?.$ref || schemaWrap?.allOf?.at(0)?.$ref || '';
                const schemaName = schemaRef.split('/').at(-1);
                const schema = schemaData[schemaName] || {};
                return schema.properties?.map((i) => ({ ...i, in: 'requestBody' })) || [];
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    /**
     * 处理接口 responses 参数
     * @param {object} responses 接口对象的 responses 对象
     * @param {object} schemaData 模型数据
     * @returns {array} 处理后的 responses 参数数组
     */
    apiResponsesHandler(responses, schemaData) {
        try {
            const responsesData = responses['200'] || responses['201'] || responses['204'] || {};
            if (responsesData?.content) {
                const schemaObj = responsesData.content['application/json']?.schema || {};
                const responseSchemaRef = schemaObj?.$ref || schemaObj?.items?.$ref || '';
                const responseSchemaName = responseSchemaRef.split('/').at(-1) || '';
                const transformSchema = schemaData[responseSchemaName] || {};
                return transformSchema.properties || null;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    /**
     * 将 requestConfig 写入biz.json文件
     */
    writeBizJson() {
        try {
            // 对空的biz模块进行移除
            Reflect.ownKeys(this.requestConfig).forEach((key) => {
                if (this.requestConfig[key].length === 0 || key === 'facilityBiz') {
                    Reflect.deleteProperty(this.requestConfig, key);
                } else {
                    this.buildType == 1 && key !== 'facilityBiz' && console.log(`${key} 新增接口${this.requestConfig[key].length}个`);
                }
            });
            fs.writeFileSync(path.join(__dirname, `/dist/biz.json`), JSON.stringify(this.requestConfig, null, '\t'), 'utf8');
        } catch (error) {
            throw error;
        }
    }
}

new Initializer(argv[2]);
