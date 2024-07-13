const path = require('path');
const fs = require('fs');
const { readJson } = require('fs-extra');

class CreateMarkdown {
    async startup(bizName, data) {
        const commonTypeMdTemplate = await this.getCommonType(bizName);
        const apiTypeMdTemplate = this.getApiType(data);
        const templateFormat = commonTypeMdTemplate + '\n----\n' + apiTypeMdTemplate;

        await fs.writeFileSync(path.join(__dirname, `/dist/${bizName}.md`), templateFormat, 'utf8');
    }

    /**
     * 根据给定的类型对象和类型名称映射获取类型字符串
     * @param {object} options 包含类型和类型名称映射的对象
     * @param {string} options.type 字符串类型，表示基础数据类型，如 'array', 'object', 'integer' 等
     * @param {string} options.typeNameMap 字符串类型，表示自定义类型名称映射
     * @returns {string} 返回字符串类型的类型名称，若存在自定义类型名称映射，则返回映射后的名称；否则返回基础数据类型的名称
     */
    getType({ type, typeNameMap }) {
        if (typeNameMap) {
            return type === 'array' ? `${typeNameMap}[]` : typeNameMap;
        }
        const baseType = type === 'array' ? 'any[]' : type === 'object' ? 'any' : type;
        return baseType === 'integer' ? 'number' : baseType;
    }

    /**
     * 根据给定的bizName来获取schema.json中的数据，处理该业务数据下的所有的公共类型定义
     * @param {string} bizName 业务名称
     * @returns {string} 处理好的公共类型定义字符串
     */
    async getCommonType(bizName) {
        try {
            const schemaData = await readJson(path.join(__dirname, './dist/schema.json'));
            const bizNameSchemaData = schemaData[bizName];
            if (!bizNameSchemaData) {
                return '';
            }
            const commonTypeStr = Object.entries(bizNameSchemaData).reduce((pre, [name, data]) => {
                let formatParamsStr = '';
                let formatTypesStr = '';
                if (data.type === 'object') {
                    formatParamsStr = data.properties.reduce((str, property) => {
                        return `${str} * @params ${property.key} {${this.getType(property)}} ${property.description}\n`;
                    }, '');
                    formatTypesStr = data.properties.reduce((str, property) => {
                        return `${str}      ${property.key}${!property.required ? '?:' : ':'} ${this.getType(property)};\n`;
                    }, '');
                    formatTypesStr = `type ${data.commonTypeName} = {\n${formatTypesStr}}`;
                } else {
                    if (data.type === 'integer' && data.enum) {
                        for (let i = 0; i < data.enum.length; i += 1) {
                            formatTypesStr = formatTypesStr + ` ${data.enum[i]} ${i === data.enum.length - 1 ? ';' : '|'}`;
                        }
                        formatTypesStr = `type ${data.commonTypeName} = ${formatTypesStr}`;
                    } else {
                        formatTypesStr = `type ${data.commonTypeName} = ${data.type === 'integer' ? 'number' : data.type}\n`;
                    }
                }
                return pre + '\n/**\n * ' + data.description + '\n' + formatParamsStr + '*/\n' + formatTypesStr + '\n\n';
            }, '');
            return commonTypeStr;
        } catch (error) {
            throw error;
        }
    }

    /**
     * 获取API类型定义
     * @param {array} bizData 业务数据
     * @returns {string} 返回API类型定义字符串
     */
    getApiType(bizData) {
        try {
            return bizData.reduce((pre, item) => {
                // 处理请求参数类型定义
                let formatParamsData = item.methods === 'get' ? item.parameters || [] : [].concat(item.parameters || [], item.requestBody || []) || [];
                const formatRequestParamsStr = formatParamsData.reduce((str, i) => {
                    return `${str} * @${i?.in === 'header' ? 'headers' : 'params'} ${i.key} {${this.getType(i)}} ${i.description}${i.default ? ' 默认：' + i.default : ''} ${i.required ? '（必填）' : ''}\n`;
                }, '');
                const formatRequestTypeStr = formatParamsData.reduce((str, i) => {
                    return `${str}      ${i.key}${!i.required ? '?:' : ':'} ${this.getType(i)};\n`;
                }, '');

                // 处理响应参数类型定义
                const formatResponsesData = item.responses || [];
                const formatResponsesParamsStr = formatResponsesData.reduce((str, i) => {
                    return `${str} * @params ${i.key} {${this.getType(i)}} ${i.description}\n`;
                }, '');
                const formatResponsesTypeStr = formatResponsesData.reduce((str, i) => {
                    return `${str}      ${i.key}: ${this.getType(i)};\n`;
                }, '');

                return (
                    pre +
                    `${formatParamsData.length > 0 ? `\n/**\n * ${item.summary}——请求参数类型定义\n${formatRequestParamsStr}*/\nexport type ${item.requestTypeName} = {\n${formatRequestTypeStr}}\n\n` : ''}` +
                    `${item.responses ? `\n/**\n * ${item.summary}——响应参数类型定义\n${formatResponsesParamsStr}*/\nexport type ${item.responsesTypeName} = {\n${formatResponsesTypeStr}}\n\n` : ''}`
                );
            }, '');
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new CreateMarkdown();
