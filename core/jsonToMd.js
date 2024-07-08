const path = require('path');
const fs = require('fs');

async function createMarkdown(bizName, data) {
    const typeMdTemplate = data.reduce((pre, item) => {
        /**
         * 处理请求参数类型定义
         */
        let formatParamsData = item.methods === 'get' ? item.parameters || [] : [].concat(item.parameters || [], item.requestBody || []) || [];
        const formatRequestParamsStr = formatParamsData.reduce((str, i) => {
            return `${str} * @${i?.in === 'header' ? 'headers' : 'params'} ${i.key} {${i.type}} ${i.description}${i.default ? ' 默认：' + i.default : ''} ${i.required ? '（必填）' : ''}\n`;
        }, '');
        const formatRequestTypeStr = formatParamsData.reduce((str, i) => {
            return `${str}      ${i.key}${!i.required ? '?:' : ':'} ${i.type};\n`;
        }, '');

        /**
         * 处理响应参数类型定义
         */
        const formatResponsesData = item.responses || [];
        const formatResponsesParamsStr = formatResponsesData.reduce((str, i) => {
            return `${str} * ${i.key} {${i.type}} ${i.description}\n`;
        }, '');
        const formatResponsesTypeStr = formatResponsesData.reduce((str, i) => {
            return `${str}      ${i.key}: ${i.type};\n`;
        }, '');

        return (
            pre +
            `${formatParamsData.length > 0 ? `\n/**\n * ${item.summary} 请求参数类型定义\n${formatRequestParamsStr}*/\n type ${item.requestTypeName} = {\n${formatRequestTypeStr}}\n\n` : ''}` +
            `${item.responses ? `\n/**\n * ${item.summary} 响应参数类型定义\n${formatResponsesParamsStr}*/\n type ${item.responsesTypeName} = {\n${formatResponsesTypeStr}}\n\n` : ''}`
        );
    }, '');

    await fs.writeFileSync(path.join(__dirname, `/dist/${bizName}.md`), typeMdTemplate, 'utf8');
}

module.exports = {
    createMarkdown,
};
