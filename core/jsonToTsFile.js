const path = require('path');
const fs = require('fs');

class CreateTsFile {
    async startup(bizName, data) {
        const apiTypeMdTemplate = this.getApiType(bizName, data);
        await fs.writeFileSync(
            path.join(__dirname, `../src/types/${bizName}.ts`),
            apiTypeMdTemplate,
            'utf8'
        );
    }

    /**
     * 根据给定的类型对象和类型名称映射获取类型字符串
     * @param {object} options 包含类型和类型名称映射的对象
     * @param {string} options.type 字符串类型，表示基础数据类型，如 'array', 'object', 'integer' 等
     * @param {string} options.details 复杂类型的具体字段内容
     * @returns {string} 处理好的数据
     */
    getType({ type, details }) {
        if (type === 'Array<object>' && details) {
            const res = details.reduce((str, item) => {
                return `${str}      ${item.key}: ${this.getType(item)};\n`;
            }, '');
            return `Array<{\n${res}}>`;
        }
        if (type === 'object' && details) {
            const res = details.reduce((str, item) => {
                return `${str}      ${item.key}: ${this.getType(item)};\n`;
            }, '');
            return `{\n${res}}`;
        }
        if (type === 'number' && details) {
            let res = '';
            for (let i = 0; i < details.length; i += 1) {
                res = res + ` ${details[i]} ${i === details.length - 1 ? '' : '|'}`;
            }
            return res;
        }
        return type;
    }

    /**
     * 获取API类型定义
     * @param {string} bizName 业务名称
     * @param {array} bizData 业务数据
     * @returns {string} 返回API类型定义字符串
     */
    getApiType(bizName, bizData) {
        try {
            return bizData.reduce((pre, item) => {
                // 处理请求参数类型定义
                const formatParamsData =
                    item.methods === 'get'
                        ? item.parameters || []
                        : [].concat(item.parameters || [], item.requestBody || []) || [];
                // 请求类型定义头注释
                const formatReqDescStr = `/**\n * @description ${item.summary} \n * @summary Request data types \n * @url [ ${item.method} ] ${item.url} \n * @bizName ${bizName} \n */`;
                // 请求类型定义
                const formatRequestTypeStr = formatParamsData.reduce((str, i) => {
                    return `${str}      ${
                        i.key.includes('-') || i.key.includes('_') || i.key.includes('.')
                            ? `'${i.key}'`
                            : i.key
                    }${!i.required ? '?:' : ':'} ${this.getType(i)};\n`;
                }, '');

                // 处理响应参数类型定义
                const formatResponsesData = item.responses || [];
                // 响应类型头注释
                const formatResDescStr = `/**\n * @description ${item.summary} \n * @summary Response data types \n * @url [ ${item.method} ] ${item.url} \n * @bizName ${bizName} \n */`;
                // 响应类型定义
                const formatResponsesTypeStr = formatResponsesData.reduce((str, i) => {
                    return `${str}      ${i.key}: ${this.getType(i)};\n`;
                }, '');

                return (
                    pre +
                    `${
                        formatParamsData.length > 0
                            ? `${formatReqDescStr}\nexport type ${item.requestTypeName} = {\n${formatRequestTypeStr}}\n\n`
                            : ''
                    }` +
                    `${
                        item.responses
                            ? `${formatResDescStr}\nexport type ${item.responsesTypeName} = {\n${formatResponsesTypeStr}}\n\n`
                            : ''
                    }`
                );
            }, '');
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new CreateTsFile();
