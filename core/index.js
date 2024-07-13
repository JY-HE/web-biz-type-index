const { createMarkdown } = require('./jsonToMd');
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
                            // 已有的接口不再入库
                            const canSave = this.buildType == 0 || (this.buildType == 1 && !warehouseTypesDataInfo) || (this.buildType == 2 && !!warehouseTypesDataInfo);
                            canSave &&
                                this.requestConfig[bizName].push({
                                    url,
                                    tag,
                                    method: methodType,
                                    summary,
                                    version,
                                    requestTypeName: warehouseTypesDataInfo?.requestTypeName || '',
                                    responsesTypeName: warehouseTypesDataInfo?.responsesTypeName || '',
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
                await createMarkdown(key, this.requestConfig[key]);
            }
        }
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
                    // 解析接口响应参数
                    const params = Object.entries(properties).map(([key, value]) => {
                        if (value.$ref || value.allOf || value.items?.$ref) {
                            // 存在 $ref 说明是引用了常量字段参数
                            let refName = '';
                            if (value.$ref) {
                                refName = value.$ref.split('/')?.at(-1);
                            } else if (value.allOf) {
                                refName = value.allOf.at(0)?.$ref.split('/')?.at(-1);
                            } else if (value.items?.$ref) {
                                refName = value.items.$ref.split('/')?.at(-1);
                            }
                            // 在常量字段参数对象中查找
                            const refObj = pre[refName] || {};
                            // 如果常量字段是一个对象或者数组对象
                            const details = refObj.properties ? [...refObj.properties] : null;
                            return {
                                key,
                                type: value.type || refObj.type,
                                description: value.description ? value.description.replace(this.descReg, '') : refObj.description ? refObj.description.replace(this.descReg, '') : '',
                                required: required.includes(key),
                                // details: details,
                                // 映射的公共type名称
                                typeNameMap: refObj.commonTypeName || refName ? `${refName.split('.')?.at(-1)}CommonType` : '',
                            };
                        } else {
                            return {
                                key,
                                type: value.type,
                                description: value.description ? value.description.replace(this.descReg, '') : '',
                                required: required.includes(key),
                            };
                        }
                    });
                    return { ...pre, [curSchemaName]: { type, description: description.replace(this.descReg, ''), properties: params, commonTypeName: `${curSchemaName.split('.')?.at(-1)}CommonType` } };
                } else {
                    return { ...pre, [curSchemaName]: { ...curSchemaData, commonTypeName: `${curSchemaName.split('.')?.at(-1)}CommonType` } };
                }
            }, {});
        } catch (error) {
            throw error;
        }
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
