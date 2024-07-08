
// 获取服务结点Id
methodName: (params, config) => this._getConfig(`/BusinessMetrics`, "undefined", params, config), 
// 获取条件配置
methodName: (params, config) => this._getConfig(`/api/ConditionTemplates/${params.id}`, "undefined", params, config), 
// 更新条件配置
methodName: (params, config) => this._getConfig(`/api/ConditionTemplates/${params.id}`, "undefined", params, config), 
// 删除条件配置
methodName: (params, config) => this._getConfig(`/api/ConditionTemplates/${params.id}`, "undefined", params, config), 
// 搜索条件配置
methodName: (params, config) => this._getConfig(`/api/ConditionTemplates`, "undefined", params, config), 
// 新增条件配置
methodName: (params, config) => this._getConfig(`/api/ConditionTemplates`, "undefined", params, config), 
// 获取i18n
methodName: (params, config) => this._getConfig(`/api/I18NConfigs/${params.id}`, "undefined", params, config), 
// 更新i18n
methodName: (params, config) => this._getConfig(`/api/I18NConfigs/${params.id}`, "undefined", params, config), 
// 删除i18n
methodName: (params, config) => this._getConfig(`/api/I18NConfigs/${params.id}`, "undefined", params, config), 
// 搜索i18n
methodName: (params, config) => this._getConfig(`/api/I18NConfigs`, "undefined", params, config), 
// 新增i18n
methodName: (params, config) => this._getConfig(`/api/I18NConfigs`, "undefined", params, config), 
// 获取服务结点Id
methodName: (params, config) => this._getConfig(`/api/node`, "undefined", params, config), 
// 获取通知配置
methodName: (params, config) => this._getConfig(`/api/NotifyConfigs/${params.id}`, "undefined", params, config), 
// 更新通知配置
methodName: (params, config) => this._getConfig(`/api/NotifyConfigs/${params.id}`, "undefined", params, config), 
// 删除通知配置
methodName: (params, config) => this._getConfig(`/api/NotifyConfigs/${params.id}`, "undefined", params, config), 
// 搜索通知配置
methodName: (params, config) => this._getConfig(`/api/NotifyConfigs`, "undefined", params, config), 
// 新增通知配置
methodName: (params, config) => this._getConfig(`/api/NotifyConfigs`, "undefined", params, config), 
// 获取全部通知类型
methodName: (params, config) => this._getConfig(`/api/NotifyConfigs/types`, "undefined", params, config), 
// 启用通知配置
methodName: (params, config) => this._getConfig(`/api/NotifyConfigs/${params.id}/enable`, "undefined", params, config), 
// 获取通知记录
methodName: (params, config) => this._getConfig(`/api/NotifyRecords/${params.id}`, "undefined", params, config), 
// 搜索通知记录
methodName: (params, config) => this._getConfig(`/api/NotifyRecords`, "undefined", params, config), 
// 获取占位符
methodName: (params, config) => this._getConfig(`/api/Placeholders/${params.id}`, "undefined", params, config), 
// 更新占位符
methodName: (params, config) => this._getConfig(`/api/Placeholders/${params.id}`, "undefined", params, config), 
// 删除占位符
methodName: (params, config) => this._getConfig(`/api/Placeholders/${params.id}`, "undefined", params, config), 
// 搜索占位符
methodName: (params, config) => this._getConfig(`/api/Placeholders`, "undefined", params, config), 
// 新增占位符
methodName: (params, config) => this._getConfig(`/api/Placeholders`, "undefined", params, config), 
// 获取Scene
methodName: (params, config) => this._getConfig(`/api/Scenes/${params.id}`, "undefined", params, config), 
// 获取场景
methodName: (params, config) => this._getConfig(`/api/Scenes`, "undefined", params, config), 
// 新增场景
methodName: (params, config) => this._getConfig(`/api/Scenes`, "undefined", params, config), 
// 获取scheme
methodName: (params, config) => this._getConfig(`/api/Schemes/${params.id}`, "undefined", params, config), 
// 更新scheme
methodName: (params, config) => this._getConfig(`/api/Schemes/${params.id}`, "undefined", params, config), 
// 删除scheme
methodName: (params, config) => this._getConfig(`/api/Schemes/${params.id}`, "undefined", params, config), 
// 搜索scheme
methodName: (params, config) => this._getConfig(`/api/Schemes`, "undefined", params, config), 
// 新增scheme
methodName: (params, config) => this._getConfig(`/api/Schemes`, "undefined", params, config), 
// 获取模板
methodName: (params, config) => this._getConfig(`/api/Templates/${params.id}`, "undefined", params, config), 
// 更新模板
methodName: (params, config) => this._getConfig(`/api/Templates/${params.id}`, "undefined", params, config), 
// 删除模板
methodName: (params, config) => this._getConfig(`/api/Templates/${params.id}`, "undefined", params, config), 
// 搜索模板
methodName: (params, config) => this._getConfig(`/api/Templates`, "undefined", params, config), 
// 新增模板
methodName: (params, config) => this._getConfig(`/api/Templates`, "undefined", params, config), 
// 通知
methodName: (params, config) => this._getConfig(`/api/WebHooks`, "undefined", params, config), 

----

/**
 * 获取服务结点Id
 * @returns
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 获取条件配置
 * @params id {string} id （必填）
 * @returns
 *    @id {string} id
 *    @name {string} 名称
 *    @scene {string} 场景
 *    @conditions {array} 筛选条件
 *    @templateIds {array} 模板id（逗号分割的多个ID）
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 更新条件配置
 * @params id {string} id （必填）
 * @params name {string} 名称 
 * @params scene {string} 场景 
 * @params conditions {array} 筛选条件 
 * @params templateIds {array} 模板id（逗号分割的多个ID） 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 删除条件配置
 * @params id {string} id （必填）
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 搜索条件配置
 * @params keyword {string} 模糊匹配关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 新增条件配置
 * @params name {string} 名称 
 * @params scene {string} 场景 
 * @params conditions {array} 筛选条件 
 * @params templateIds {array} 模板id（逗号分割的多个ID） 
 * @returns
 *    @id {string} id
 *    @name {string} 名称
 *    @scene {string} 场景
 *    @conditions {array} 筛选条件
 *    @templateIds {array} 模板id（逗号分割的多个ID）
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 获取i18n
 * @params id {string} id （必填）
 * @returns
 *    @id {string} id
 *    @key {string} 键
 *    @languageType {integer} i18n支持语言类型
 *    @value {object} 值对象
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 更新i18n
 * @params id {string} id （必填）
 * @params key {string} 键 
 * @params languageType {integer} i18n支持语言类型 
 * @params value {object} 值对象 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 删除i18n
 * @params id {string} id （必填）
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 搜索i18n
 * @params keyword {string} 模糊匹配关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 新增i18n
 * @params key {string} 键 
 * @params languageType {integer} i18n支持语言类型 
 * @params value {object} 值对象 
 * @returns
 *    @id {string} id
 *    @key {string} 键
 *    @languageType {integer} i18n支持语言类型
 *    @value {object} 值对象
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 获取服务结点Id
 * @returns
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 获取通知配置
 * @params id {string} id （必填）
 * @returns
 *    @id {string} id
 *    @name {string} 名称
 *    @scene {string} 场景
 *    @type {integer} 通知类型
 *    @conditions {array} 筛选条件
 *    @isEnable {boolean} 是否启用
 *    @createTime {string} 创建时间
 *    @updateTime {string} 更新时间
 *    @notifyTypes {array} 通知方式
 *    @templates {array} 模版
 *    @recipients {array} 模板默认接收人
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 更新通知配置
 * @params id {string} id （必填）
 * @params name {string} 通知策略名称 
 * @params scene {string} 场景 
 * @params type {integer} 通知类型 
 * @params conditions {array} 筛选条件 
 * @params isEnable {boolean} 是否启用 
 * @params templates {array} 模版 
 * @params recipients {array} 模板默认接收人 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 删除通知配置
 * @params id {string} id （必填）
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 搜索通知配置
 * @params keyword {string} 模糊匹配关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 新增通知配置
 * @params name {string} 通知策略名称 
 * @params scene {string} 场景 
 * @params type {integer} 通知类型 
 * @params conditions {array} 筛选条件 
 * @params isEnable {boolean} 是否启用 
 * @params templates {array} 模版 
 * @params recipients {array} 模板默认接收人 
 * @returns
 *    @id {string} id
 *    @name {string} 名称
 *    @scene {string} 场景
 *    @type {integer} 通知类型
 *    @conditions {array} 筛选条件
 *    @isEnable {boolean} 是否启用
 *    @createTime {string} 创建时间
 *    @updateTime {string} 更新时间
 *    @notifyTypes {array} 通知方式
 *    @templates {array} 模版
 *    @recipients {array} 模板默认接收人
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 获取全部通知类型
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 启用通知配置
 * @params id {string} id （必填）
 * @params isEnable {boolean} 是否启用 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 获取通知记录
 * @params id {string} id （必填）
 * @returns
 *    @id {string} id
 *    @content {string} 发送内容
 *    @type {integer} 通知类型
 *    @sender {string} 发送者
 *    @webHookUrl {string} 发送地址
 *    @title {string} 主题
 *    @scene {string} 场景
 *    @recipient {string} 接收人
 *    @traceId {string} 流水号
 *    @resultDescription {string} 结果描述
 *    @status {integer} 发送状态
 *    @arrivalTime {string} 送达时间
 *    @createTime {string} 创建时间
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 搜索通知记录
 * @params keyword {string} 模糊匹配关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 获取占位符
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 占位符Id
 *    @name {string} 名称
 *    @type {integer} 占位符类型
 *    @key {string} 键
 *    @value {string} 值
 *    @isEnableExpression {boolean} 是否启用表达式替换
 *    @replaceExpressions {array} 替换表达式
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 更新占位符
 * @params id {string} id （必填）
 * @params name {string} 占位符名称 （必填）
 * @params type {integer} 占位符类型 
 * @params key {string} 键 
 * @params value {string} 值 
 * @params isEnableExpression {boolean} 是否启用表达式替换 
 * @params replaceExpressions {array} 替换表达式 
 * @returns
*/
async methodName({ id, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 删除占位符
 * @params id {string} id （必填）
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 搜索占位符
 * @params keyword {string} 模糊匹配关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 新增占位符
 * @params name {string} 占位符名称 （必填）
 * @params type {integer} 占位符类型 
 * @params key {string} 键 
 * @params value {string} 值 
 * @params isEnableExpression {boolean} 是否启用表达式替换 
 * @params replaceExpressions {array} 替换表达式 
 * @returns
 *    @id {string} 占位符Id
 *    @name {string} 名称
 *    @type {integer} 占位符类型
 *    @key {string} 键
 *    @value {string} 值
 *    @isEnableExpression {boolean} 是否启用表达式替换
 *    @replaceExpressions {array} 替换表达式
*/
async methodName({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 获取Scene
 * @params id {string} id （必填）
 * @returns
 *    @id {string} ID
 *    @name {string} 名称
 *    @tips {string} 提示：若未设置触发条件，则发生告警时自动通知
 *    @recipientTips {string} 接收对象提示：设备联系人
 *    @notifyExample {string} 通知样例
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 获取场景
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 新增场景
 * @params id {string} ID 
 * @params name {string} 名称 
 * @params tips {string} 提示：若未设置触发条件，则发生告警时自动通知 
 * @params recipientTips {string} 接收对象提示：设备联系人 
 * @params notifyExample {string} 通知样例 
 * @returns
 *    @id {string} ID
 *    @name {string} 名称
 *    @tips {string} 提示：若未设置触发条件，则发生告警时自动通知
 *    @recipientTips {string} 接收对象提示：设备联系人
 *    @notifyExample {string} 通知样例
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 获取scheme
 * @params id {string} id （必填）
 * @returns
 *    @id {string} id
 *    @scene {string} 场景
 *    @key {string} 支持字段键名
 *    @type {integer} 字段类型【int,string,dateTime】
 *    @allowNull {boolean} 是否允许为空
 *    @example {string} 样例数据
 *    @operator {integer} 操作符类型
 *    @isDynamicRangeValue {boolean} 是否动态的值范围
 *    @rangeValues {array} 静态值范围-动态从对应接口获取
 *    @description {string} 描述
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 更新scheme
 * @params id {string} id （必填）
 * @params scene {string} 场景 
 * @params key {string} 支持字段键名 
 * @params type {integer} 字段类型【int,string,dateTime】 
 * @params allowNull {boolean} 是否允许为空 
 * @params description {string} 描述 
 * @params example {string} 样例数据 
 * @params operator {integer} 操作符类型 
 * @params isDynamicRangeValue {boolean} 是否动态的值范围 
 * @params rangeValue {undefined} 静态值范围-动态从对应接口获取 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 删除scheme
 * @params id {string} id （必填）
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 搜索scheme
 * @params scene {string} 场景 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 新增scheme
 * @params scene {string} 场景 
 * @params key {string} 支持字段键名 
 * @params type {integer} 字段类型【int,string,dateTime】 
 * @params allowNull {boolean} 是否允许为空 
 * @params description {string} 描述 
 * @params example {string} 样例数据 
 * @params operator {integer} 操作符类型 
 * @params isDynamicRangeValue {boolean} 是否动态的值范围 
 * @params rangeValue {undefined} 静态值范围-动态从对应接口获取 
 * @returns
 *    @id {string} id
 *    @scene {string} 场景
 *    @key {string} 支持字段键名
 *    @type {integer} 字段类型【int,string,dateTime】
 *    @allowNull {boolean} 是否允许为空
 *    @example {string} 样例数据
 *    @operator {integer} 操作符类型
 *    @isDynamicRangeValue {boolean} 是否动态的值范围
 *    @rangeValues {array} 静态值范围-动态从对应接口获取
 *    @description {string} 描述
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 获取模板
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 模板ID
 *    @scene {string} 场景
 *    @notifyType {integer} 通知类型
 *    @content {string} 通知内容模板
 *    @isEnable {boolean} 是否可用
 *    @isDefault {boolean} 是否默认通知模板
 *    @sender {string} 发送者
 *    @defaultWebHookUrl {string} 默认webHookUrl
 *    @title {string} 标题(主题)
 *    @secondTitle {string} 副标题（第二标题）
 *    @jumpUrl {string} 跳转地址
 *    @recipients {array} 模板默认接收人
 *    @priorityPhoneType {string} 优先电话类型
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 更新模板
 * @params id {string} id （必填）
 * @params scene {string} 场景 （必填）
 * @params notifyType {integer} 通知类型 
 * @params content {string} 通知内容模板 （必填）
 * @params isEnable {boolean} 是否可用 
 * @params isDefault {boolean} 是否默认通知模板 
 * @params sender {string} 发送者 
 * @params defaultWebHookUrl {string} 默认webHookUrl 
 * @params title {string} 标题(主题) 
 * @params secondTitle {string} 副标题（第二标题） 
 * @params jumpUrl {string} 跳转地址 
 * @params recipients {array} 模板默认接收人 
 * @params priorityPhoneType {string} 优先电话类型 
 * @returns
*/
async methodName({ id, scene, content  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id, scene, content,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 删除模板
 * @params id {string} id （必填）
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 搜索模板
 * @params keyword {string} 模糊匹配关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 新增模板
 * @params scene {string} 场景 （必填）
 * @params notifyType {integer} 通知类型 
 * @params content {string} 通知内容模板 （必填）
 * @params isEnable {boolean} 是否可用 
 * @params isDefault {boolean} 是否默认通知模板 
 * @params sender {string} 发送者 
 * @params defaultWebHookUrl {string} 默认webHookUrl 
 * @params title {string} 标题(主题) 
 * @params secondTitle {string} 副标题（第二标题） 
 * @params jumpUrl {string} 跳转地址 
 * @params recipients {array} 模板默认接收人 
 * @params priorityPhoneType {string} 优先电话类型 
 * @returns
 *    @id {string} 模板ID
 *    @scene {string} 场景
 *    @notifyType {integer} 通知类型
 *    @content {string} 通知内容模板
 *    @isEnable {boolean} 是否可用
 *    @isDefault {boolean} 是否默认通知模板
 *    @sender {string} 发送者
 *    @defaultWebHookUrl {string} 默认webHookUrl
 *    @title {string} 标题(主题)
 *    @secondTitle {string} 副标题（第二标题）
 *    @jumpUrl {string} 跳转地址
 *    @recipients {array} 模板默认接收人
 *    @priorityPhoneType {string} 优先电话类型
*/
async methodName({ scene, content  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({scene, content,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}


/**
 * 通知
 * @params scene {string} 运用场景 
 * @params notifyType {integer} 通知类型 
 * @params notifyContent {object} 通知内容 
 * @params recipients {array} 接收人 
 * @params jumpUrl {string} 跳转地址 
 * @params title {string} 标题 
 * @params data {object} 业务对象 
 * @params id {string} 标识ID 
 * @params source {string} 业务来源 
 * @returns
 *    @taskId {string} 任务id
 *    @message {string} Message
 *    @success {boolean} 是否成功
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('ntsBiz ~ methodName', error);
    }
}

