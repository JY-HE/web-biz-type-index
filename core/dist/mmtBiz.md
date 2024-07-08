
// 获取业务指标记录信息
methodName: (params, config) => this._getConfig(`/api/BusinessMetrics`, "undefined", params, config), 
// 分级调度操作
methodName: (params, config) => this._getConfig(`/api/GradingDispatch`, "undefined", params, config), 
// 查询拍传
methodName: (params, config) => this._getConfig(`/api/MultimediaTransfers`, "undefined", params, config), 
// 创建拍传
methodName: (params, config) => this._getConfig(`/api/MultimediaTransfers`, "undefined", params, config), 
// 查询拍传
methodName: (params, config) => this._getConfig(`/api/MultimediaTransfers/search`, "undefined", params, config), 
// 通过拍传ID获取拍传
methodName: (params, config) => this._getConfig(`/api/MultimediaTransfers/${params.id}`, "undefined", params, config), 
// 删除拍传
methodName: (params, config) => this._getConfig(`/api/MultimediaTransfers/${params.id}`, "undefined", params, config), 
// 拍传数据补全
methodName: (params, config) => this._getConfig(`/api/MultimediaTransfers/data_completion`, "undefined", params, config), 
// 按条件查询拍传模板
methodName: (params, config) => this._getConfig(`/api/Templates`, "undefined", params, config), 
// 创建拍传模板
methodName: (params, config) => this._getConfig(`/api/Templates`, "undefined", params, config), 
// 通过拍传模板ID获取拍传模板
methodName: (params, config) => this._getConfig(`/api/Templates/${params.id}`, "undefined", params, config), 
// 更新拍传模板
methodName: (params, config) => this._getConfig(`/api/Templates/${params.id}`, "undefined", params, config), 
// 删除拍传模板
methodName: (params, config) => this._getConfig(`/api/Templates/${params.id}`, "undefined", params, config), 

----

/**
 * 获取业务指标记录信息
 * @headers X-version {string}  
 * @returns
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ methodName', error);
    }
}


/**
 * 分级调度操作
 * @headers X-version {string}  
 * @params version {string} 请求版本 （必填）
 * @params id {string} Id （必填）
 * @params bizName {string} 业务名称 （必填）
 * @params bizData {undefined} 业务数据 （必填）
 * @params sourceId {string} 源平台 Id （必填）
 * @params destinationId {string} 目标平台 Id （必填）
 * @params type {integer} 业务类型：1-Erds|2-Vfs|3-Rms （必填）
 * @params timeout {integer} 请求超时设置(单位：秒) （必填）
 * @returns
*/
async methodName({ version, id, bizName, bizData, sourceId, destinationId, type, timeout  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({version, id, bizName, bizData, sourceId, destinationId, type, timeout,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ methodName', error);
    }
}


/**
 * 查询拍传
 * @params BeginTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params TemplateId {string} 模板Id 
 * @params KeyWord {string} 关键字模糊查询 
 * @params OrganizationId {string} 组织机构Id 
 * @params UserId {string} 用户Id 
 * @params ResourceId {string} 资源ID 
 * @params PlatformId {string} 平台 ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量，最小为1 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ methodName', error);
    }
}


/**
 * 创建拍传
 * @headers X-version {string}  
 * @params name {string} 拍传名称 （必填）
 * @params templateId {string} 拍传模板Id 
 * @params longitude {number} 经度 （必填）
 * @params latitude {number} 纬度 （必填）
 * @params address {string} 地址 
 * @params fileGroupId {string} 文件组Id （必填）
 * @params uploadTime {string} 文件上传时间 （必填）
 * @params fileCount {integer} 文件数量 （必填）
 * @params company {string} 单位名称 
 * @params companyAddress {string} 单位地址 
 * @returns
 *    @id {string} 拍传ID
 *    @name {string} 拍传名称
 *    @templateId {string} 拍传模板Id
 *    @templateName {string} 拍传模板名称
 *    @longitude {number} 经度
 *    @latitude {number} 纬度
 *    @address {string} 地址
 *    @fileGroupId {string} 文件组Id
 *    @fileCount {integer} 文件数量
 *    @userId {string} 拍传用户id
 *    @userName {string} 用户名称
 *    @organizationId {string} 组织机构Id
 *    @organizationName {string} 组织机构名称
 *    @uploadTime {string} 上传时间
 *    @company {string} 单位名称
 *    @companyAddress {string} 单位地址
 *    @resourceId {string} 资源ID
 *    @platformId {string} 平台Id
 *    @areaCode {string} 行政区域码
 *    @districtName {string} 行政区域名
*/
async methodName({ name, longitude, latitude, fileGroupId, uploadTime, fileCount  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({name, longitude, latitude, fileGroupId, uploadTime, fileCount,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ methodName', error);
    }
}


/**
 * 查询拍传
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量，最小为1 
 * @params beginTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params templateId {string} 模板Id 
 * @params keyWord {string} 关键字模糊查询 
 * @params organizationId {string} 组织机构Id 
 * @params userId {string} 用户Id 
 * @params resourceId {string} 资源ID 
 * @params platformId {string} 平台 ID 
 * @params organizationIds {array} 组织机构Id集合 
 * @params prefixAreaCodes {array} 行政区域码前缀 
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ methodName', error);
    }
}


/**
 * 通过拍传ID获取拍传
 * @params id {string} id （必填）
 * @params platformId {string} platformId 
 * @headers X-version {string}  
 * @returns
 *    @id {string} 拍传ID
 *    @name {string} 拍传名称
 *    @templateId {string} 拍传模板Id
 *    @templateName {string} 拍传模板名称
 *    @longitude {number} 经度
 *    @latitude {number} 纬度
 *    @address {string} 地址
 *    @fileGroupId {string} 文件组Id
 *    @fileCount {integer} 文件数量
 *    @userId {string} 拍传用户id
 *    @userName {string} 用户名称
 *    @organizationId {string} 组织机构Id
 *    @organizationName {string} 组织机构名称
 *    @uploadTime {string} 上传时间
 *    @company {string} 单位名称
 *    @companyAddress {string} 单位地址
 *    @resourceId {string} 资源ID
 *    @platformId {string} 平台Id
 *    @areaCode {string} 行政区域码
 *    @districtName {string} 行政区域名
 *    @fileRecords {array} 文件记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ methodName', error);
    }
}


/**
 * 删除拍传
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ methodName', error);
    }
}


/**
 * 拍传数据补全
 * @headers X-version {string}  
 * @params beginTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @returns
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ methodName', error);
    }
}


/**
 * 按条件查询拍传模板
 * @params keyword {string} 模糊匹配关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量，最小为1 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ methodName', error);
    }
}


/**
 * 创建拍传模板
 * @headers X-version {string}  
 * @params name {string} 拍传模板名称 （必填）
 * @params description {string} 描述 
 * @params title {string} 标题 （必填）
 * @params placeHolders {array} 模板占位符 
 * @returns
 *    @id {string} 拍传模板ID
 *    @name {string} 拍传模板名称
 *    @description {string} 描述
 *    @title {string} 标题
 *    @placeHolders {array} 模板占位符
 *    @resourceId {string} 资源ID
 *    @platformId {string} 平台Id
*/
async methodName({ name, title  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({name, title,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ methodName', error);
    }
}


/**
 * 通过拍传模板ID获取拍传模板
 * @params id {string} id （必填）
 * @params platformId {string} platformId 
 * @headers X-version {string}  
 * @returns
 *    @id {string} 拍传模板ID
 *    @name {string} 拍传模板名称
 *    @description {string} 描述
 *    @title {string} 标题
 *    @placeHolders {array} 模板占位符
 *    @resourceId {string} 资源ID
 *    @platformId {string} 平台Id
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ methodName', error);
    }
}


/**
 * 更新拍传模板
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 拍传模板名称 （必填）
 * @params description {string} 描述 
 * @params title {string} 标题 （必填）
 * @params placeHolders {array} 模板占位符 
 * @returns
*/
async methodName({ id, name, title  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id, name, title,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ methodName', error);
    }
}


/**
 * 删除拍传模板
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ methodName', error);
    }
}

