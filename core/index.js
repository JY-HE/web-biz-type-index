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
        // bizName 映射
        this.bizNameAbbreviation = new Map([
            ['gcsBiz', 'Gcs'],
            ['cgsBiz', 'Cgs'],
            ['mmtBiz', 'Mmts'],
            ['aggsBiz', 'Aggs'],
            ['authBiz', 'Aus'],
            ['edmsBiz', 'Edms'],
            ['orgsBiz', 'Orgs'],
            ['eventBiz', 'Ets'],
            ['viscsBiz', 'Vss'],
            ['alarmBiz', 'Als'],
            ['quartzBiz', 'Qts'],
            ['geoDataBiz', 'Gds'],
            ['fileStorageBiz', 'Fss'],
            ['geoAnalysisBiz', 'Gas'],
            ['preplanAnalysisBiz', 'Pas'],
            ['modelAnalysisBiz', 'Mas'],
            ['videoFusionServiceBiz', 'Vfs'],
            ['vcsBiz', 'Vcs'],
            ['auditBiz', 'Ads'],
            ['assetBiz', 'Ats'],
            ['alertsPlatformBiz', 'Aps'],
            ['facilityBiz', 'Fas'],
            ['scheduleBiz', 'Scs'],
            ['rrsBiz', 'Rrs'],
            ['dcsBiz', 'Dcs'],
            ['ntsBiz', 'Nts'],
            ['wxBiz', 'Wxs'],
        ]);
        // 缓存未处理好的schema
        this.seenSchemas = new Set();
        this.getJsonFileData();
        this.init();
    }

    /**
     * 获取相关json文件数据
     * @returns void
     */
    async getJsonFileData() {
        this.warehouseTypes = await readJson(path.join(__dirname, './warehouseTypes.json'));
        this.ignorePaths = await readJson(path.join(__dirname, './ignoreTypes.json'));
    }

    /**
     * 初始化主方法
     * @returns void
     */
    async init() {
        this.swaggerList = await this.getSwaggerList();
        const swaggerData = await this.getSwaggerData();
        // 解析 swagger 文档接口数据
        await Promise.all(
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
                    this.requestConfig[bizName] = [];
                    // 解析 schema 模型
                    let schemaData = {};
                    schemaData = await this.schemaDataHandler(schemas);
                    // 处理未解析成功的 schema 模型
                    if (this.seenSchemas.size) {
                        schemaData = await this.seenSchemasHandler(schemaData, schemas);
                    }
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
                                const requestTypeName = warehouseTypesDataInfo?.requestTypeName || this.getNameFromUrl(1, parameters, requestBody, transformResponses, url, methodType, version, bizName);
                                const responsesTypeName = warehouseTypesDataInfo?.responsesTypeName || this.getNameFromUrl(2, parameters, requestBody, transformResponses, url, methodType, version, bizName);
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
            })
        );

        // 将 schemaData 写入json文件
        await fs.writeFileSync(path.join(__dirname, `/dist/schema.json`), JSON.stringify(this.schemaDataJson, null, '\t'), 'utf8');

        this.writeBizJson();

        // 创建Typescript文件
        if (this.buildType == 2) {
            console.log('json转化成功，开始生成Typescript文件');
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
     * @param {string} bizName 业务名称
     * @returns {string} 创建好的requestTypeName或responsesTypeName
     */
    getNameFromUrl(type, parameters, requestBody, responses, url, methodType, version, bizName) {
        const urls = url
            .split('/')
            .filter((item) => item !== 'api')
            .map((item) => this.capitalizeFirstLetter(item));
        if (type === 1) {
            if (!parameters && !requestBody) {
                return 'CommonReqType';
            }
            return `${this.capitalizeFirstLetter(methodType)}${urls.join('')}ReqTypeBy${this.bizNameAbbreviation.get(bizName) || ''}${version === 'v1' ? '' : this.capitalizeFirstLetter(version)}`;
        } else {
            if (!responses) {
                return 'CommonResType';
            }
            return `${this.capitalizeFirstLetter(methodType)}${urls.join('')}ResTypeBy${this.bizNameAbbreviation.get(bizName) || ''}${version === 'v1' ? '' : this.capitalizeFirstLetter(version)}`;
        }
    }

    /**
     * 处理字符串转换为PascalCase格式
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
     * @returns Promise
     */
    getSwaggerList() {
        return new Promise((resolve, reject) => {
            try {
                const res = {};
                Object.entries(swaggerJSON).forEach(([bizName, swaggerDataConfig]) => {
                    const { primaryName, address, port, url } = swaggerDataConfig;
                    const headers = primaryName ? { 'X-Service-Address': address, 'X-Service-Port': port } : {};
                    if (typeof url === 'string') {
                        res[bizName] = { url, headers, params: { ip: address, port } };
                    } else {
                        Object.keys(url).forEach((version) => {
                            res[`${bizName}-${version}`] = { url: url[version], headers, params: { ip: address, port } };
                        });
                    }
                    this.requestConfig[bizName] = [];
                });
                resolve(res);
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
            throw errorMsg;
        });
        swaggerData.forEach((item) => console.log(item.config.url, item.status === 200 ? `success` : 'fail'));

        return swaggerData;
    }

    /**
     * schema 模型处理
     * @param {object} schemas 原始模型数据
     * @returns {object} 处理后的模型数据
     */
    async schemaDataHandler(schemas) {
        return new Promise((resolve, reject) => {
            try {
                const resultSchema = Object.entries(schemas).reduce((pre, [curSchemaName, curSchemaData]) => {
                    if (curSchemaData.type === 'object') {
                        const { type, properties = {}, description = '', required = [] } = curSchemaData;
                        const params = Object.entries(properties).map(([key, value]) => {
                            return this.schemaPropertiesHandler(pre, key, value, required, curSchemaName);
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
                resolve(resultSchema);
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * 处理 schema 模型中的 properties
     * @param {object} processedSchemas 已处理好的数据
     * @param {string} key 属性名
     * @param {object} value 属性值
     * @param {array} requiredList 必填属性集合
     * @param {string} curSchemaName 当前处理的 schema 名称
     */
    schemaPropertiesHandler(processedSchemas, key, value, requiredList = [], curSchemaName = '') {
        const { type = '', description = '', items = {}, allOf = [], properties = {} } = value || {};
        const cleanDescription = description ? description.replace(this.descReg, '') : '';
        const isRequired = requiredList.includes(key);

        const processSimpleType = (type) => ({
            key,
            type: type === 'integer' ? 'number' : type,
            description: cleanDescription,
            required: isRequired,
            details: value?.enum || null,
        });

        const processArrayType = (itemsType) => ({
            key,
            type: `Array<${itemsType === 'integer' ? 'number' : itemsType}>`,
            description: cleanDescription,
            required: isRequired,
        });

        const processComplexType = (refName) => {
            const refObj = processedSchemas[refName] || null;
            let details = [];
            // 如果在处理好的数据中获取到对应的数据
            if (refObj) {
                if (Array.isArray(refObj?.properties)) {
                    details = [...refObj.properties];
                } else {
                    details = Object.entries(refObj?.properties || [])?.map(([itemKey, itemValue]) => {
                        return this.schemaPropertiesHandler(processedSchemas, itemKey, itemValue, requiredList, curSchemaName);
                    });
                }
            } else {
                // 缓存数据，等 schemas 处理完后，再处理缓存的数据
                this.seenSchemas.add(curSchemaName);
            }
            return {
                key,
                type: details.length ? 'Array<object>' : 'Array<Record<string, any>>',
                description: cleanDescription,
                required: isRequired,
                details: details.length ? details : null,
            };
        };

        if (['number', 'integer', 'string', 'boolean'].includes(type)) {
            return processSimpleType(type);
        }

        if (type === 'array') {
            if (['number', 'integer', 'string', 'boolean'].includes(items?.type)) {
                return processArrayType(items.type);
            }
            if (items?.$ref) {
                const refName = items.$ref.split('/').pop();
                return processComplexType(refName);
            }
            return {
                key,
                type: 'Array<any>',
                description: cleanDescription,
                required: isRequired,
            };
        }

        if (type === 'object') {
            const details = Object.entries(properties).map(([propKey, propValue]) => this.schemaPropertiesHandler(processedSchemas, propKey, propValue, requiredList, curSchemaName));
            if (details.length > 0) {
                return {
                    key,
                    type: 'object',
                    description: cleanDescription,
                    required: isRequired,
                    details,
                };
            }
            if (allOf.length > 0) {
                const refName = allOf[0].$ref.split('/').pop();
                return processComplexType(refName);
            }
            return {
                key,
                type: 'Record<string, any>',
                description: cleanDescription,
                required: isRequired,
            };
        }

        const refName = allOf[0]?.$ref.split('/').pop();
        const refObj = processedSchemas[refName] || {};
        return {
            key,
            type: refObj.type || 'any',
            description: cleanDescription,
            required: isRequired,
            details: refObj.details || refObj.properties || null,
        };
    }

    /**
     * 处理未解析成功并缓存的schema数据
     * @param {object} processedSchemas 已处理好的数据
     * @param {object} schemas 源数据
     */
    async seenSchemasHandler(processedSchemas, schemas) {
        return new Promise((resolve, reject) => {
            try {
                for (const item of this.seenSchemas.values()) {
                    const schemaData = schemas[item] || null;
                    if (schemaData) {
                        if (schemaData.type === 'object') {
                            const { type, properties = {}, description = '', required = [] } = schemaData;
                            const params = Object.entries(properties).map(([key, value]) => {
                                return this.schemaPropertiesHandler(processedSchemas, key, value, required);
                            });
                            processedSchemas[item] = { type, description: description.replace(this.descReg, ''), properties: params };
                        } else {
                            processedSchemas[item] = {
                                type: schemaData.type === 'integer' ? 'number' : schemaData.type,
                                description: schemaData.description,
                                details: schemaData.enum || null,
                            };
                        }
                        this.seenSchemas.delete(item);
                    }
                }
                resolve(processedSchemas);
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * 处理接口 params 参数
     * @param {array} parameters 接口对象的 parameters 数组
     * @param {object} schemaData 模型数据
     * @returns {array} 处理后的 params 参数数组
     */
    apiParamsHandler(parameters, schemaData) {
        const getType = (schema) => {
            const { type = '', items = {} } = schema || {};
            if (type === 'array') {
                return `Array<${items.type ? (items.type === 'integer' ? 'number' : items.type) : 'any'}>`;
            }
            return type === 'integer' ? 'number' : type;
        };
        try {
            return !Array.isArray(parameters)
                ? null
                : parameters.map((item) => {
                      // 基本参数
                      let paramInfo = {
                          key: item.name,
                          type: getType(item.schema),
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
