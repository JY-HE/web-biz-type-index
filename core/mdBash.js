const path = require('path');
const fs = require('fs');
const createTsFile = require('./jsonToTsFile');
const requestConfig = require('./dist/biz.json');

const newMethods = {};
let changeLogTemplate = '';

(async () => {
    // 处理warehouseMethods内容生成
    for (const key in requestConfig) {
        await createTsFile.startup(key, requestConfig[key]);
        changeLogTemplate += `\n### ${key}\n\n|requestTypeName|responsesTypeName|url|methodType|describe|version|\n| --------- | --------- | --------- | --------- | --------- | --------- |\n`;
        newMethods[key] = requestConfig[key].reduce((obj, item) => {
            if (item.requestTypeName || item.responsesTypeName) {
                changeLogTemplate += '|`' + item.requestTypeName + '`|`' + item.responsesTypeName + '`|`' + item.url + '`|' + item.method + '|' + item.summary + '|' + item.version + '|\n';
            }
            return {
                ...obj,
                [`${item.method}&${item.url}`]: {
                    requestTypeName: item.requestTypeName,
                    responsesTypeName: item.responsesTypeName,
                },
            };
        }, {});
    }
    const template = `${changeLogTemplate}`;
    await fs.writeFileSync(path.join(__dirname, `/dist/changeLog.md`), template, 'utf8');
})();
