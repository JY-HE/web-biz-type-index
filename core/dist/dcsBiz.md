
/**
 * 行业数据
 * @params id {string} 
 * @params name {string} 
 * @params resourceId {string} 
 * @params parentId {string} 父行业Id
 * @params description {string} 行业描述
 * @params totalMetadataCount {number} 
*/
type BusinessOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    parentId?: string;
    description?: string;
    totalMetadataCount?: number;
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {BusinessOutCommonType[]} 记录
*/
type BusinessOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: BusinessOutCommonType[];
}


/**
* 排序类型,0创建时间升序，1创建时间降序，2更新时间升序，3更新时间降序
*/
type SortTypeCommonType =  0 | 1 | 2 | 3 ;


/**
* 数据项描述
* @params title {string} 标题
* @params name {string} 名称
* @params description {string} 描述
* @params type {string} 类型
* @params defaultValue {string} 默认值（与type相匹配）
* @params length {string} 长度
* @params isRequired {boolean} 是否必填项
* @params isPrimaryKey {boolean} 是否是主键
* @params checkRulesIds {any[]} 检测规则Id列表
*/
type DataItemDescriptionCommonType = {
    title?: string;
    name?: string;
    description?: string;
    type?: string;
    defaultValue?: string;
    length?: string;
    isRequired?: boolean;
    isPrimaryKey?: boolean;
    checkRulesIds?: any[];
}


/**
* 校验规则关联元数据信息
* @params metadataId {string} 关联的元数据Id
* @params dataItemDescription {DataItemDescriptionCommonType} 关联的字段信息
*/
type CheckRuleRelationMetadataCommonType = {
    metadataId?: string;
    dataItemDescription?: DataItemDescriptionCommonType;
}


/**
* 规则类型
*/
type RuleTypeCommonType =  0 | 1 | 2 ;


/**
* 校验规则类型
* @params id {string} ID
* @params name {string} 名称
* @params resourceId {string} 
* @params createTime {string} 创建时间
* @params updateTime {string} 修改时间
* @params creator {string} 创建者
* @params updater {string} 更新者
* @params ruleType {RuleTypeCommonType} 规则类型
* @params configTemplate {string} 配置模板
* @params description {string} 描述
*/
type CheckRuleTypeCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    createTime?: string;
    updateTime?: string;
    creator?: string;
    updater?: string;
    ruleType?: RuleTypeCommonType;
    configTemplate?: string;
    description?: string;
}


/**
* 检查规则
* @params id {string} ID
* @params name {string} 名称
* @params resourceId {string} 资源Id
* @params createTime {string} 创建时间
* @params updateTime {string} 修改时间
* @params creator {string} 创建者
* @params updater {string} 更新者
* @params note {string} 规则备注
* @params ruleConfig {string} 规则配置
* @params ruleTypeId {string} 关联的规则Id
* @params relationMetadataIds {any[]} 关联的元数据列表
* @params checkRuleRelationMetadatas {CheckRuleRelationMetadataCommonType[]} 关联的字段信息
* @params checkRuleType {CheckRuleTypeCommonType} 校验规则类型
*/
type CheckRuleOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    createTime?: string;
    updateTime?: string;
    creator?: string;
    updater?: string;
    note?: string;
    ruleConfig?: string;
    ruleTypeId?: string;
    relationMetadataIds?: any[];
    checkRuleRelationMetadatas?: CheckRuleRelationMetadataCommonType[];
    checkRuleType?: CheckRuleTypeCommonType;
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {CheckRuleOutCommonType[]} 记录
*/
type CheckRuleOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: CheckRuleOutCommonType[];
}


/**
* 标签类型
*/
type TagTypeCommonType =  0 | 1 | 2 ;


/**
* 标签信息
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params color {string} 颜色
* @params definition {string} 描述
* @params updater {string} 更新人
* @params updateTime {string} 标签更新时间
* @params tagType {TagTypeCommonType} 标签类型
*/
type TagsOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    color?: string;
    definition?: string;
    updater?: string;
    updateTime?: string;
    tagType?: TagTypeCommonType;
}


/**
* 质检规则元数据输出
* @params id {string} Id
* @params resourceId {string} 资源Id
* @params name {string} 元数据名称
* @params tags {TagsOutCommonType[]} 标签名
* @params note {string} 备注
*/
type CheckRuleRelationMetadataOutCommonType = {
    id?: string;
    resourceId?: string;
    name?: string;
    tags?: TagsOutCommonType[];
    note?: string;
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {CheckRuleRelationMetadataOutCommonType[]} 记录
*/
type CheckRuleRelationMetadataOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: CheckRuleRelationMetadataOutCommonType[];
}


/**
* 质检规则添加模型
* @params name {string} 名称
* @params creator {string} 创建者
* @params updater {string} 更新者
* @params note {string} 规则备注
* @params ruleConfig {string} 规则配置
* @params ruleTypeId {string} 关联的规则Id
* @params relationMetadataIds {any[]} 关联的元数据列表
*/
type CheckRuleAddRequestCommonType = {
    name: string;
    creator?: string;
    updater?: string;
    note?: string;
    ruleConfig: string;
    ruleTypeId: string;
    relationMetadataIds?: any[];
}


/**
* 
* @params type {string} 
* @params title {string} 
* @params status {number} 
* @params detail {string} 
* @params instance {string} 
*/
type ProblemDetailsCommonType = {
    type?: string;
    title?: string;
    status?: number;
    detail?: string;
    instance?: string;
}


/**
* 质检规则请求
* @params id {string} Id
* @params name {string} 名称
* @params createTime {string} 创建时间
* @params updateTime {string} 修改时间
* @params creator {string} 创建者
* @params updater {string} 更新者
* @params note {string} 规则备注
* @params ruleConfig {string} 规则配置
* @params ruleTypeId {string} 关联的规则Id
* @params relationMetadataIds {any[]} 关联的元数据列表
*/
type CheckRuleRequestCommonType = {
    id: string;
    name: string;
    createTime?: string;
    updateTime?: string;
    creator?: string;
    updater?: string;
    note?: string;
    ruleConfig: string;
    ruleTypeId: string;
    relationMetadataIds?: any[];
}


/**
* 质检规则类型
* @params id {string} ID
* @params name {string} 名称
* @params resourceId {string} 资源Id
* @params createTime {string} 创建时间
* @params updateTime {string} 修改时间
* @params creator {string} 创建者
* @params updater {string} 更新者
* @params ruleType {RuleTypeCommonType} 规则类型
* @params configTemplate {string} 配置模板
* @params description {string} 描述
*/
type CheckRuleTypeOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    createTime?: string;
    updateTime?: string;
    creator?: string;
    updater?: string;
    ruleType?: RuleTypeCommonType;
    configTemplate?: string;
    description?: string;
}


/**
* 执行状态枚举
*/
type ExecuteStatusCommonType =  0 | 1 | 2 ;


/**
* 检查任务信息
* @params id {string} ID
* @params name {string} 名称
* @params resourceId {string} 资源ID
* @params createTime {string} 创建时间
* @params updateTime {string} 修改时间
* @params creator {string} 创建者
* @params updater {string} 更新者
* @params checkMetadataId {string} 质检元数据对象Id
* @params checkMetadataName {string} 检测对象名称
* @params cronExpression {string} Cron表达式
* @params note {string} 备注
* @params allCheckDataCount {number} 检测数据总量
* @params allCheckErrorDataCount {number} 检测失败总量
* @params allCheckCount {number} 检查数量
* @params lastCheckDataCount {number} 上一次检查数量
* @params checkAvgRating {number} 检测平均评分
* @params lastCheckTime {string} 最近一次检测时间
* @params timeConsuming {number} 耗时
* @params isErrors {boolean} 是否出错
*/
type CheckTaskInfoOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    createTime?: string;
    updateTime?: string;
    creator?: string;
    updater?: string;
    checkMetadataId?: string;
    checkMetadataName?: string;
    cronExpression?: string;
    note?: string;
    allCheckDataCount?: number;
    allCheckErrorDataCount?: number;
    allCheckCount?: number;
    lastCheckDataCount?: number;
    checkAvgRating?: number;
    lastCheckTime?: string;
    timeConsuming?: number;
    isErrors?: boolean;
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {CheckTaskInfoOutCommonType[]} 记录
*/
type CheckTaskInfoOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: CheckTaskInfoOutCommonType[];
}


/**
* 检测执行记录
* @params id {string} 检查记录ID
* @params checkTaskId {string} 检查任务Id
* @params checkRowCount {number} 检查行数
* @params checkErrorCount {number} 检查错误数
* @params checkRating {number} 质检评分
* @params startTime {string} 开始时间
* @params endTime {string} 结束时间
* @params timeConsumer {number} 耗时
* @params checkMetadaName {string} 检查的元数据名称
* @params isErrors {boolean} 是否执行错误
*/
type CheckTaskExecuteRecordOutCommonType = {
    id?: string;
    checkTaskId?: string;
    checkRowCount?: number;
    checkErrorCount?: number;
    checkRating?: number;
    startTime?: string;
    endTime?: string;
    timeConsumer?: number;
    checkMetadaName?: string;
    isErrors?: boolean;
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {CheckTaskExecuteRecordOutCommonType[]} 记录
*/
type CheckTaskExecuteRecordOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: CheckTaskExecuteRecordOutCommonType[];
}


/**
* 检测作业执行记录详情
* @params checkTaskExecuteRecordId {string} 质检任务Id
* @params id {string} 流水Id
* @params ruleType {RuleTypeCommonType} 规则类型代码
* @params ruleName {string} 规则名称
* @params checkStartTime {string} 开始时间
* @params checkEndTime {string} 结束时间
* @params primaryKey {string} 主键值
* @params fieldName {string} 字段名
* @params fieldTitle {string} 字段名称
* @params fieldValue {string} 检测字段的值
* @params configInfo {string} 检测规则的配置信息
* @params isCheckSuccess {boolean} 1代表检测达标；0代表检测不达标
*/
type CheckTaskExecuteRecordDetailOutCommonType = {
    checkTaskExecuteRecordId?: string;
    id?: string;
    ruleType?: RuleTypeCommonType;
    ruleName?: string;
    checkStartTime?: string;
    checkEndTime?: string;
    primaryKey?: string;
    fieldName?: string;
    fieldTitle?: string;
    fieldValue?: string;
    configInfo?: string;
    isCheckSuccess?: boolean;
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {CheckTaskExecuteRecordDetailOutCommonType[]} 记录
*/
type CheckTaskExecuteRecordDetailOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: CheckTaskExecuteRecordDetailOutCommonType[];
}


/**
* 数据源类型
*/
type DatabaseTypeCommonType =  0 | 1 | 2 | 3 | 4 | 5 ;


/**
* 数据源输出信息
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params host {string} 域名
* @params port {number} 端口
* @params account {string} 账号
* @params password {string} 密码
* @params schema {string} 模式名
* @params dbType {DatabaseTypeCommonType} 数据源类型
* @params updateTIme {string} 更新时间
*/
type DataSourceOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    host?: string;
    port?: number;
    account?: string;
    password?: string;
    schema?: string;
    dbType?: DatabaseTypeCommonType;
    updateTIme?: string;
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {DataSourceOutCommonType[]} 记录
*/
type DataSourceOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: DataSourceOutCommonType[];
}


/**
* 数据源请求体
* @params name {string} 数据源名称
* @params host {string} 域名
* @params port {number} 端口
* @params account {string} 账号
* @params password {string} 密码
* @params schema {string} 模式名
* @params dbType {DatabaseTypeCommonType} 数据源类型
* @params resourceId {string} 数据源id
*/
type DataSourceCreateRequestCommonType = {
    name: string;
    host: string;
    port: number;
    account: string;
    password: string;
    schema?: string;
    dbType?: DatabaseTypeCommonType;
    resourceId?: string;
}


/**
* 数据源请求体
* @params name {string} 数据源名称
* @params host {string} 域名
* @params port {number} 端口
* @params account {string} 账号
* @params password {string} 密码
* @params schema {string} 模式名
* @params dbType {DatabaseTypeCommonType} 数据源类型
*/
type DataSourceRequestCommonType = {
    name: string;
    host: string;
    port: number;
    account: string;
    password: string;
    schema?: string;
    dbType?: DatabaseTypeCommonType;
}


/**
* 
* @params schema {string} 模式
* @params tables {any[]} 表名称列表
*/
type DbInfoOutCommonType = {
    schema?: string;
    tables?: any[];
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {DbInfoOutCommonType[]} 记录
*/
type DbInfoOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: DbInfoOutCommonType[];
}


/**
* 数据库信息请求
* @params schema {string} 模式
* @params tables {any[]} 表名称列表
*/
type DbInfoRequestCommonType = {
    schema?: string;
    tables?: any[];
}


/**
* 开放方式
*/
type DevelopmentModeCommonType =  0 ;


/**
* 更新频率
*/
type UpdateFrequencyCommonType =  0 | 1 | 2 | 3 | 4 | 5 | 6 ;


/**
* 资源格式
*/
type ResourceTypeCommonType =  0 ;


/**
* 资源状态
*/
type ResourceStatusCommonType =  0 | 1 | 2 ;


/**
* 开放级别
*/
type OpenLevelCommonType =  0 ;


/**
* 展示字段信息
* @params name {string} 名称
* @params enableEdit {boolean} 是否可编辑
*/
type DisplayDataItemDescriptionCommonType = {
    name?: string;
    enableEdit?: boolean;
}


/**
* 服务数据
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params parentId {string} 父Id
* @params description {string} 服务描述
* @params totalMetadataCount {number} 
*/
type ServiceOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    parentId?: string;
    description?: string;
    totalMetadataCount?: number;
}


/**
* 领域数据
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params parentId {string} 父主题Id
* @params description {string} 领域描述
* @params totalMetadataCount {number} 
*/
type DomainOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    parentId?: string;
    description?: string;
    totalMetadataCount?: number;
}


/**
* 部门数据
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params parentId {string} 父Id
* @params description {string} 部门描述
* @params address {string} 部门地址
* @params areaCode {string} 行政区划
* @params totalMetadataCount {number} 
*/
type DepartmentOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    parentId?: string;
    description?: string;
    address?: string;
    areaCode?: string;
    totalMetadataCount?: number;
}


/**
* 区域数据
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params parentId {string} 父区域Id
* @params description {string} 区域描述
* @params code {string} 区域代码
* @params totalMetadataCount {number} 
*/
type DistrictOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    parentId?: string;
    description?: string;
    code?: string;
    totalMetadataCount?: number;
}


/**
* 主题数据
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params parentId {string} 父主题Id
* @params description {string} 主题描述
* @params code {string} 主题编码
* @params totalMetadataCount {number} 
* @params projectId {string} 所属项目Id
*/
type ThemeOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    parentId?: string;
    description?: string;
    code?: string;
    totalMetadataCount?: number;
    projectId?: string;
}


/**
* 对接状态
*/
type DockStatusCommonType =  0 | 1 | 2 | 3 ;


/**
* 对接信息
* @params dockStatus {DockStatusCommonType} 对接状态
* @params logs {any[]} 对接日志
*/
type DockInfoCommonType = {
    dockStatus?: DockStatusCommonType;
    logs?: any[];
}


/**
* 对接项目
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params description {string} 项目描述
*/
type ProjectInfoCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    description?: string;
}


/**
* 元数据数据
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params code {string} 元数据信息资源编码
* @params description {string} 元数据描述(摘要)
* @params keyWords {string} 关键字
* @params developmentMode {DevelopmentModeCommonType} 开发方式
* @params updateFrequency {UpdateFrequencyCommonType} 更新频率
* @params createTime {string} 创建日期
* @params updateTime {string} 更新日期
* @params publishTime {string} 发布日期
* @params resourceType {ResourceTypeCommonType} 资源格式
* @params administrativeMatters {string} 所属行政事项
* @params resourceStatus {ResourceStatusCommonType} 资源状态
* @params language {string} 语种
* @params onlineResourceLink {string} 在线资源链接
* @params sourceSystem {string} 来源系统
* @params spaceScope {string} 空间（地域）范围
* @params timeScope {string} 时间范围
* @params openLevel {OpenLevelCommonType} 开放级别
* @params dataItemDescriptions {DataItemDescriptionCommonType[]} 数据项
* @params displayDataItemDescriptions {DisplayDataItemDescriptionCommonType[]} 可展示字段
* @params tagIds {any[]} 标签ID列表
* @params kettleJobIds {any[]} 关联的作业
* @params businessOut {BusinessOutCommonType} 行业分类
* @params serviceOut {ServiceOutCommonType} 服务分类
* @params domainOut {DomainOutCommonType} 数据领域
* @params departmentOut {DepartmentOutCommonType} 行政单位
* @params districtOut {DistrictOutCommonType} 行政区域
* @params themeOut {ThemeOutCommonType} 主题分类
* @params dockInfo {DockInfoCommonType} 对接信息(对接状态|方式|说明)
* @params projectInfo {ProjectInfoCommonType} 项目信息
* @params totalDownloads {number} 下载量
* @params totalViews {number} 浏览量
* @params totalDataItems {number} 记录条数
* @params fileSize {number} 文件大小(bytes)
* @params fileCount {number} 文件数量(份)
* @params dataSize {number} 数据量(条)
* @params checkErrorDataCount {number} 检查错误的数据数量
* @params dataRating {number} 数据评分
* @params bindTable {string} 绑定的库表
* @params bindSchema {string} 绑定的模式
* @params dasJobName {string} das job name
* @params dataSourceId {string} 数据源DataSource的id
* @params selectDataItems {any} 外部数据筛选类型数据
*/
type MetadataOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    code?: string;
    description?: string;
    keyWords?: string;
    developmentMode?: DevelopmentModeCommonType;
    updateFrequency?: UpdateFrequencyCommonType;
    createTime?: string;
    updateTime?: string;
    publishTime?: string;
    resourceType?: ResourceTypeCommonType;
    administrativeMatters?: string;
    resourceStatus?: ResourceStatusCommonType;
    language?: string;
    onlineResourceLink?: string;
    sourceSystem?: string;
    spaceScope?: string;
    timeScope?: string;
    openLevel?: OpenLevelCommonType;
    dataItemDescriptions?: DataItemDescriptionCommonType[];
    displayDataItemDescriptions?: DisplayDataItemDescriptionCommonType[];
    tagIds?: any[];
    kettleJobIds?: any[];
    businessOut?: BusinessOutCommonType;
    serviceOut?: ServiceOutCommonType;
    domainOut?: DomainOutCommonType;
    departmentOut?: DepartmentOutCommonType;
    districtOut?: DistrictOutCommonType;
    themeOut?: ThemeOutCommonType;
    dockInfo?: DockInfoCommonType;
    projectInfo?: ProjectInfoCommonType;
    totalDownloads?: number;
    totalViews?: number;
    totalDataItems?: number;
    fileSize?: number;
    fileCount?: number;
    dataSize?: number;
    checkErrorDataCount?: number;
    dataRating?: number;
    bindTable?: string;
    bindSchema?: string;
    dasJobName?: string;
    dataSourceId?: string;
    selectDataItems?: any;
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {DepartmentOutCommonType[]} 记录
*/
type DepartmentOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: DepartmentOutCommonType[];
}


/**
* 部门入参
* @params name {string} 名称
* @params parentId {string} 部门父Id
* @params description {string} 描述
* @params address {string} 地址
* @params resourceId {string} 资源Id
* @params areaCode {string} 行政区划
*/
type DepartmentInCommonType = {
    name: string;
    parentId?: string;
    description?: string;
    address?: string;
    resourceId?: string;
    areaCode?: string;
}


/**
* 批量Id查询参数
* @params pageIndex {number} 页码, 从1开始
* @params pageSize {number} 页容量, [1, 128]
* @params ids {any[]} Id集合
*/
type IdsRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    ids?: any[];
}


/**
* 部门导入导出实体
* @params name {string} 名称
* @params parentId {string} 部门父Id
* @params description {string} 描述
* @params address {string} 地址
* @params resourceId {string} 资源Id
* @params areaCode {string} 行政区划
* @params id {string} Id
*/
type DepartmentItemCommonType = {
    name: string;
    parentId?: string;
    description?: string;
    address?: string;
    resourceId?: string;
    areaCode?: string;
    id?: string;
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {DepartmentItemCommonType[]} 记录
*/
type DepartmentItemPageableQueryResultCommonType = {
    totalCount?: number;
    records?: DepartmentItemCommonType[];
}


/**
* 行政部门导入入参
* @params importDepartments {DepartmentItemCommonType[]} 行政部门
*/
type DepartmentImportCommonType = {
    importDepartments: DepartmentItemCommonType[];
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {DistrictOutCommonType[]} 记录
*/
type DistrictOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: DistrictOutCommonType[];
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {DomainOutCommonType[]} 记录
*/
type DomainOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: DomainOutCommonType[];
}


/**
* 领域入参
* @params name {string} 领域名称
* @params resourceId {string} 资源Id
* @params description {string} 描述
* @params parentId {string} 父Id
*/
type DomainInCommonType = {
    name: string;
    resourceId?: string;
    description?: string;
    parentId?: string;
}


/**
* 领域导入实体
* @params name {string} 领域名称
* @params resourceId {string} 资源Id
* @params description {string} 描述
* @params parentId {string} 父Id
* @params id {string} Id
*/
type DomainItemCommonType = {
    name: string;
    resourceId?: string;
    description?: string;
    parentId?: string;
    id?: string;
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {DomainItemCommonType[]} 记录
*/
type DomainItemPageableQueryResultCommonType = {
    totalCount?: number;
    records?: DomainItemCommonType[];
}


/**
* 领域导入入参
* @params importDomains {DomainItemCommonType[]} 领域
*/
type DomainImportCommonType = {
    importDomains: DomainItemCommonType[];
}


/**
* kettle作业源类型
*/
type SourceTypeCommonType =  0 | 1 | 2 | 3 ;


/**
* 关联元数据
* @params metadataId {string} 元数据ID
* @params database {string} 数据库
* @params table {string} 表
* @params description {string} 表描述
*/
type RelateMetadataCommonType = {
    metadataId?: string;
    database?: string;
    table?: string;
    description?: string;
}


/**
* Etl的作业实体Out数据
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params source {string} 来源端信息
* @params sourceType {SourceTypeCommonType} 源端类型
* @params relateSources {RelateMetadataCommonType[]} 关联元数据
* @params destination {string} 目标库信息
* @params relateDestinations {RelateMetadataCommonType[]} 目标库元数据
* @params description {string} 描述
* @params createTime {string} 作业创建时间
* @params updateTime {string} 作业修改时间
* @params startTime {string} 开始时间
* @params lastSyncTime {string} 上一次同步时间
* @params syncMetadata {string} 同步的元数据
* @params syncMetadataId {string} 同步的元数据ID
* @params timeConsuming {number} 耗时
* @params errors {number} 错误行数
* @params cronExpression {string} Cron表达式信息
* @params syncDataCount {number} 同步数据量
* @params isRun {boolean} 是否运行
* @params fileInfos {any[]} 文件信息列表
* @params tags {any[]} 分类标签
*/
type KettleJobOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    source?: string;
    sourceType?: SourceTypeCommonType;
    relateSources?: RelateMetadataCommonType[];
    destination?: string;
    relateDestinations?: RelateMetadataCommonType[];
    description?: string;
    createTime?: string;
    updateTime?: string;
    startTime?: string;
    lastSyncTime?: string;
    syncMetadata?: string;
    syncMetadataId?: string;
    timeConsuming?: number;
    errors?: number;
    cronExpression?: string;
    syncDataCount?: number;
    isRun?: boolean;
    fileInfos?: any[];
    tags?: any[];
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {KettleJobOutCommonType[]} 记录
*/
type KettleJobOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: KettleJobOutCommonType[];
}


/**
* ETL作业请求Body
* @params name {string} 作业名称
* @params resourceId {string} 资源Id
* @params description {string} 描述
* @params cron {string} 执行Cron表达式
* @params isRun {boolean} 是否运行
* @params tags {any[]} 标签列表
*/
type KettleJobRequestCommonType = {
    name?: string;
    resourceId?: string;
    description?: string;
    cron?: string;
    isRun?: boolean;
    tags?: any[];
}


/**
* 排序规则枚举,0-更新时间降序,1-更新时间升序,2-数据同步量降序,3-数据同步量升序,4-耗时降序,5-耗时升序
*/
type OrderRuleCommonType =  0 | 1 | 2 | 3 | 4 | 5 ;


/**
* ETL任务详情
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params source {string} 来源端信息
* @params sourceType {SourceTypeCommonType} 源端类型
* @params relateSources {RelateMetadataCommonType[]} 关联元数据
* @params destination {string} 目标库信息
* @params relateDestinations {RelateMetadataCommonType[]} 目标库元数据
* @params description {string} 描述
* @params createTime {string} 作业创建时间
* @params updateTime {string} 作业修改时间
* @params startTime {string} 开始时间
* @params lastSyncTime {string} 上一次同步时间
* @params syncMetadata {string} 同步的元数据
* @params syncMetadataId {string} 同步的元数据ID
* @params timeConsuming {number} 耗时
* @params errors {number} 错误行数
* @params cronExpression {string} Cron表达式信息
* @params syncDataCount {number} 同步数据量
* @params isRun {boolean} 是否运行
* @params fileInfos {any[]} 文件信息列表
* @params tags {any[]} 分类标签
* @params executeCount {number} 执行数量
* @params creator {string} 创建者
* @params updater {string} 更新者
* @params syncAllDataCount {number} 总数据量
*/
type KettleJobDetailOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    source?: string;
    sourceType?: SourceTypeCommonType;
    relateSources?: RelateMetadataCommonType[];
    destination?: string;
    relateDestinations?: RelateMetadataCommonType[];
    description?: string;
    createTime?: string;
    updateTime?: string;
    startTime?: string;
    lastSyncTime?: string;
    syncMetadata?: string;
    syncMetadataId?: string;
    timeConsuming?: number;
    errors?: number;
    cronExpression?: string;
    syncDataCount?: number;
    isRun?: boolean;
    fileInfos?: any[];
    tags?: any[];
    executeCount?: number;
    creator?: string;
    updater?: string;
    syncAllDataCount?: number;
}


/**
* ETL执行记录
* @params idJob {string} 运行ID
* @params channelId {string} 通道ID
* @params jobName {string} 运行的Job名称
* @params status {string} 运行状态
* @params linesRead {number} 读取的行数
* @params linesWritten {number} 写入流的行数
* @params linesUpdated {number} 更新行数
* @params linesInput {number} 输入行数
* @params linesOutput {number} 输出行数
* @params linesRejected {number} 忽略同步的数量
* @params errors {number} 错误的行数
* @params startDate {string} 开始时间
* @params endDate {string} 结束时间
* @params logDate {string} 日志时间
* @params depDate {string} 依赖时间
* @params replayDate {string} 替换时间
* @params executingServer {string} 执行的服务器
* @params executingUser {string} 执行用户
* @params startJobEntry {string} 开始作业信息
* @params client {string} 运行客户端
* @params timeConsuming {number} 耗时
*/
type EtlExecuteRecordOutCommonType = {
    idJob?: string;
    channelId?: string;
    jobName?: string;
    status?: string;
    linesRead?: number;
    linesWritten?: number;
    linesUpdated?: number;
    linesInput?: number;
    linesOutput?: number;
    linesRejected?: number;
    errors?: number;
    startDate?: string;
    endDate?: string;
    logDate?: string;
    depDate?: string;
    replayDate?: string;
    executingServer?: string;
    executingUser?: string;
    startJobEntry?: string;
    client?: string;
    timeConsuming?: number;
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {EtlExecuteRecordOutCommonType[]} 记录
*/
type EtlExecuteRecordOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: EtlExecuteRecordOutCommonType[];
}


/**
* 标签列表
* @params tags {any[]} 标签列表
*/
type KettleJobTagsOutCommonType = {
    tags?: any[];
}


/**
* 导出请求体
* @params fileName {string} 导出文件名
* @params tags {any[]} 导出标签
*/
type KettleExportRequestCommonType = {
    fileName?: string;
    tags: any[];
}


/**
* 元数据入参
* @params name {string} 名称
* @params resourceId {string} 资源id
* @params parentId {string} 父元数据Id
* @params code {string} 元数据信息资源编码
* @params description {string} 元数据描述(摘要)
* @params keyWords {string} 关键字
* @params developmentMode {DevelopmentModeCommonType} 开发方式
* @params updateFrequency {UpdateFrequencyCommonType} 更新频率
* @params createTime {string} 创建日期
* @params updateTime {string} 更新日期
* @params publishTime {string} 发布日期
* @params resourceType {ResourceTypeCommonType} 资源格式
* @params administrativeMatters {string} 所属行政事项
* @params resourceStatus {ResourceStatusCommonType} 资源状态
* @params language {string} 语种
* @params onlineResourceLink {string} 在线资源链接
* @params sourceSystem {string} 来源系统
* @params spaceScope {string} 空间（地域）范围
* @params timeScope {string} 时间范围
* @params openLevel {OpenLevelCommonType} 开放级别
* @params dataItemDescriptions {DataItemDescriptionCommonType[]} 数据项
* @params displayDataItemDescriptions {DisplayDataItemDescriptionCommonType[]} 可展示字段
* @params tagIds {any[]} 标签ID列表
* @params kettleJobIds {any[]} 关联的作业
* @params businessResourceId {string} 行业分类资源Id
* @params serviceResourceId {string} 服务分类资源Id
* @params domainResourceId {string} 数据领域资源Id
* @params departmentResourceId {string} 行政单位资源Id
* @params districtResourceId {string} 行政区域资源Id
* @params themeResourceId {string} 主题分类资源Id
* @params dockInfo {DockInfoCommonType} 对接信息(对接状态|方式|说明)
* @params projectInfo {ProjectInfoCommonType} 项目信息
* @params totalDownloads {number} 下载量
* @params totalViews {number} 浏览量
* @params totalDataItems {number} 记录条数
* @params fileSize {number} 文件大小(bytes)
* @params fileCount {number} 文件数量(份)
* @params dataSize {number} 数据量(条)
* @params checkErrorDataCount {number} 检查错误的数据数量
* @params dataRating {number} 数据评分
* @params bindTable {string} 绑定的库表
* @params bindSchema {string} 绑定的模式
* @params dasJobName {string} das job name
* @params dataSourceId {string} 数据源DataSource的id
*/
type MetadataInCommonType = {
    name?: string;
    resourceId?: string;
    parentId?: string;
    code?: string;
    description?: string;
    keyWords?: string;
    developmentMode?: DevelopmentModeCommonType;
    updateFrequency?: UpdateFrequencyCommonType;
    createTime?: string;
    updateTime?: string;
    publishTime?: string;
    resourceType?: ResourceTypeCommonType;
    administrativeMatters?: string;
    resourceStatus?: ResourceStatusCommonType;
    language?: string;
    onlineResourceLink?: string;
    sourceSystem?: string;
    spaceScope?: string;
    timeScope?: string;
    openLevel?: OpenLevelCommonType;
    dataItemDescriptions?: DataItemDescriptionCommonType[];
    displayDataItemDescriptions?: DisplayDataItemDescriptionCommonType[];
    tagIds?: any[];
    kettleJobIds?: any[];
    businessResourceId?: string;
    serviceResourceId?: string;
    domainResourceId?: string;
    departmentResourceId?: string;
    districtResourceId?: string;
    themeResourceId?: string;
    dockInfo?: DockInfoCommonType;
    projectInfo?: ProjectInfoCommonType;
    totalDownloads?: number;
    totalViews?: number;
    totalDataItems?: number;
    fileSize?: number;
    fileCount?: number;
    dataSize?: number;
    checkErrorDataCount?: number;
    dataRating?: number;
    bindTable?: string;
    bindSchema?: string;
    dasJobName?: string;
    dataSourceId?: string;
}


/**
* 元数据对接状态
* @params notStart {number} 未对接
* @params inProgress {number} 对接中
* @params finished {number} 对接完成
* @params closed {number} 对接关闭
*/
type DockInfoItemsCommonType = {
    notStart?: number;
    inProgress?: number;
    finished?: number;
    closed?: number;
}


/**
* 元数据对接统计
* @params dockInfoItems {DockInfoItemsCommonType} 统计项
*/
type MetadataDockInfoOutCommonType = {
    dockInfoItems?: DockInfoItemsCommonType;
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {MetadataOutCommonType[]} 记录
*/
type MetadataOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: MetadataOutCommonType[];
}


/**
* 添加标签的查询实现
* @params pageIndex {number} 页码, 从1开始
* @params pageSize {number} 页容量, [1, 128]
* @params keyWord {string} 关键字
* @params domainResourceId {string} 领域
* @params themeResourceId {string} 主题分类
* @params businessResourceId {string} 行业分类
* @params departmentResourceId {string} 行政单位
* @params districtResourceId {string} 行政区域
* @params serviceResourceId {string} 服务分类
* @params updateTimeBegin {string} 更新时间起始点
* @params updateTimeEnd {string} 更新时间终点
* @params tagIds {any[]} 标签ID列表
*/
type MetadataQueryRequestExCommonType = {
    pageIndex?: number;
    pageSize?: number;
    keyWord?: string;
    domainResourceId?: string;
    themeResourceId?: string;
    businessResourceId?: string;
    departmentResourceId?: string;
    districtResourceId?: string;
    serviceResourceId?: string;
    updateTimeBegin?: string;
    updateTimeEnd?: string;
    tagIds?: any[];
}


/**
* 更新元数据计数请求
* @params schema {string} 数据库模式
* @params table {string} 数据库表
* @params dataSize {number} 数据量(条)
* @params checkErrorDataCount {number} 检查错误的数据数量
* @params dataRating {number} 数据评分
*/
type UpdateMetadataCountRequestCommonType = {
    schema?: string;
    table?: string;
    dataSize?: number;
    checkErrorDataCount?: number;
    dataRating?: number;
}


/**
* 关键字查询请求
* @params pageIndex {number} 页码, 从1开始
* @params pageSize {number} 页容量, [1, 128]
* @params keyword {string} 模糊匹配关键字
* @params selectDataItems {any} 查询条件
*/
type QueryRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    keyword?: string;
    selectDataItems?: any;
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {any[]} 记录
*/
type StringObjectIDictionaryPageableQueryResultCommonType = {
    totalCount?: number;
    records?: any[];
}


/**
* 专题详情
* @params id {string} Id
* @params name {string} 名称
*/
type ProjectThemeDetailCommonType = {
    id?: string;
    name?: string;
}


/**
* 项目
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params parentId {string} 父Id
* @params totalMetadataCount {number} 元数据统计总数
* @params description {string} 项目描述
* @params themes {ProjectThemeDetailCommonType[]} 项目专题列表
*/
type ProjectOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    parentId?: string;
    totalMetadataCount?: number;
    description?: string;
    themes?: ProjectThemeDetailCommonType[];
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {ProjectOutCommonType[]} 记录
*/
type ProjectOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: ProjectOutCommonType[];
}


/**
* 项目入参
* @params name {string} 项目名称
* @params resourceId {string} 资源Id
* @params description {string} 描述
* @params parentId {string} 父Id
*/
type ProjectInCommonType = {
    name: string;
    resourceId?: string;
    description?: string;
    parentId?: string;
}


/**
* 专题详情（导入导出专用）
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params parentId {string} 父Id
* @params description {string} 项目描述
* @params projectId {string} 所属项目Id
*/
type ThemeDetailItemCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    parentId?: string;
    description?: string;
    projectId?: string;
}


/**
* 项目详情（导入导出专用）
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params themes {ThemeDetailItemCommonType[]} 项目专题列表
* @params parentId {string} 父Id
* @params description {string} 项目描述
*/
type ProjectDetailItemCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    themes?: ThemeDetailItemCommonType[];
    parentId?: string;
    description?: string;
}


/**
* 项目导入入参
* @params importProjects {ProjectDetailItemCommonType[]} 项目
*/
type ProjectImportCommonType = {
    importProjects: ProjectDetailItemCommonType[];
}


/**
* 数据类型，1:资源库分组，2：资源库  3：元数据分组 4：元数据
*/
type DataTypeCommonType =  1 | 2 ;


/**
* 节点类型，0：非叶子节点，1：叶子节点
*/
type NodeTypeCommonType =  0 | 1 ;


/**
* 树节点
* @params id {string} 对应数据类型的主键id
* @params name {string} 节点名称
* @params parentId {string} 父节点id，为空时表示根节点
* @params index {number} 排序编号
* @params dataType {DataTypeCommonType} 节点数据类型,1:资源库分组，2：资源库
* @params nodeType {NodeTypeCommonType} 节点类型，0：非叶子节点，1：叶子节点
* @params resourceId {string} 数据源id
* @params number {string} GDS图层id信息
* @params productId {string} ProductId
*/
type NodeTreeOutCommonType = {
    id?: string;
    name?: string;
    parentId?: string;
    index?: number;
    dataType?: DataTypeCommonType;
    nodeType?: NodeTypeCommonType;
    resourceId?: string;
    number?: string;
    productId?: string;
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {NodeTreeOutCommonType[]} 记录
*/
type NodeTreeOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: NodeTreeOutCommonType[];
}


/**
* 资源类型
*/
type ResourceDbTypeCommonType =  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 ;


/**
* 元数据信息
* @params metadataId {string} 元数据id
* @params metadataName {string} 元数据名称
* @params metadataDescription {string} 元数据描述信息
* @params layerId {string} GDS图层id
*/
type RelationshipCommonType = {
    metadataId?: string;
    metadataName?: string;
    metadataDescription?: string;
    layerId?: string;
}


/**
* 资源库
* @params id {string} id
* @params name {string} 名称
* @params resourceId {string} 资源id（数据同步使用）
* @params parentName {string} 父名称
* @params parentId {string} 父Id
* @params resourceDbType {ResourceDbTypeCommonType} 资源类型
* @params relationship {RelationshipCommonType} 元数据信息
* @params extension {string} 拓展信息(资源库的筛选拓展信息)
* @params productId {string} ProductId
*/
type ResourceDbOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    parentName?: string;
    parentId?: string;
    resourceDbType?: ResourceDbTypeCommonType;
    relationship?: RelationshipCommonType;
    extension?: string;
    productId?: string;
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {ResourceDbOutCommonType[]} 记录
*/
type ResourceDbOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: ResourceDbOutCommonType[];
}


/**
* 资源库
* @params name {string} 名称
* @params resourceId {string} 
* @params parentId {string} 父Id
* @params resourceDbType {ResourceDbTypeCommonType} 资源类型
* @params relationship {RelationshipCommonType} 关联的信息
* @params extension {string} 拓展信息
* @params productId {string} ProductId
*/
type ResourceDbInCommonType = {
    name?: string;
    resourceId?: string;
    parentId?: string;
    resourceDbType?: ResourceDbTypeCommonType;
    relationship?: RelationshipCommonType;
    extension?: string;
    productId?: string;
}


/**
* 资源库批量查询入参
* @params pageIndex {number} 页码, 从1开始
* @params pageSize {number} 页容量, [1, 128]
* @params ids {any[]} Id集合
* @params productId {string} 项目Id
*/
type BatchResourceDbRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    ids?: any[];
    productId?: string;
}


/**
* 数据源导出导入实体
* @params name {string} 名称
* @params resourceId {string} 
* @params host {string} 域名
* @params port {number} 端口
* @params account {string} 账号
* @params password {string} 密码
* @params schema {string} 模式名
* @params dbType {DatabaseTypeCommonType} 数据源类型
* @params updateTIme {string} 更新时间
* @params id {string} ID
*/
type DataSourceItemCommonType = {
    name?: string;
    resourceId?: string;
    host?: string;
    port?: number;
    account?: string;
    password?: string;
    schema?: string;
    dbType?: DatabaseTypeCommonType;
    updateTIme?: string;
    id?: string;
}


/**
* 元数据导出导入实体
* @params name {string} 名称
* @params resourceId {string} 资源id
* @params parentId {string} 父元数据Id
* @params code {string} 元数据信息资源编码
* @params description {string} 元数据描述(摘要)
* @params keyWords {string} 关键字
* @params developmentMode {DevelopmentModeCommonType} 开发方式
* @params updateFrequency {UpdateFrequencyCommonType} 更新频率
* @params createTime {string} 创建日期
* @params updateTime {string} 更新日期
* @params publishTime {string} 发布日期
* @params resourceType {ResourceTypeCommonType} 资源格式
* @params administrativeMatters {string} 所属行政事项
* @params resourceStatus {ResourceStatusCommonType} 资源状态
* @params language {string} 语种
* @params onlineResourceLink {string} 在线资源链接
* @params sourceSystem {string} 来源系统
* @params spaceScope {string} 空间（地域）范围
* @params timeScope {string} 时间范围
* @params openLevel {OpenLevelCommonType} 开放级别
* @params dataItemDescriptions {DataItemDescriptionCommonType[]} 数据项
* @params displayDataItemDescriptions {DisplayDataItemDescriptionCommonType[]} 可展示字段
* @params tagIds {any[]} 标签ID列表
* @params kettleJobIds {any[]} 关联的作业
* @params businessResourceId {string} 行业分类资源Id
* @params serviceResourceId {string} 服务分类资源Id
* @params domainResourceId {string} 数据领域资源Id
* @params departmentResourceId {string} 行政单位资源Id
* @params districtResourceId {string} 行政区域资源Id
* @params themeResourceId {string} 主题分类资源Id
* @params dockInfo {DockInfoCommonType} 对接信息(对接状态|方式|说明)
* @params projectInfo {ProjectInfoCommonType} 项目信息
* @params totalDownloads {number} 下载量
* @params totalViews {number} 浏览量
* @params totalDataItems {number} 记录条数
* @params fileSize {number} 文件大小(bytes)
* @params fileCount {number} 文件数量(份)
* @params dataSize {number} 数据量(条)
* @params checkErrorDataCount {number} 检查错误的数据数量
* @params dataRating {number} 数据评分
* @params bindTable {string} 绑定的库表
* @params bindSchema {string} 绑定的模式
* @params dasJobName {string} das job name
* @params dataSourceId {string} 数据源DataSource的id
* @params id {string} ID
* @params dataSource {DataSourceItemCommonType} 数据源
*/
type MetadataItemCommonType = {
    name?: string;
    resourceId?: string;
    parentId?: string;
    code?: string;
    description?: string;
    keyWords?: string;
    developmentMode?: DevelopmentModeCommonType;
    updateFrequency?: UpdateFrequencyCommonType;
    createTime?: string;
    updateTime?: string;
    publishTime?: string;
    resourceType?: ResourceTypeCommonType;
    administrativeMatters?: string;
    resourceStatus?: ResourceStatusCommonType;
    language?: string;
    onlineResourceLink?: string;
    sourceSystem?: string;
    spaceScope?: string;
    timeScope?: string;
    openLevel?: OpenLevelCommonType;
    dataItemDescriptions?: DataItemDescriptionCommonType[];
    displayDataItemDescriptions?: DisplayDataItemDescriptionCommonType[];
    tagIds?: any[];
    kettleJobIds?: any[];
    businessResourceId?: string;
    serviceResourceId?: string;
    domainResourceId?: string;
    departmentResourceId?: string;
    districtResourceId?: string;
    themeResourceId?: string;
    dockInfo?: DockInfoCommonType;
    projectInfo?: ProjectInfoCommonType;
    totalDownloads?: number;
    totalViews?: number;
    totalDataItems?: number;
    fileSize?: number;
    fileCount?: number;
    dataSize?: number;
    checkErrorDataCount?: number;
    dataRating?: number;
    bindTable?: string;
    bindSchema?: string;
    dasJobName?: string;
    dataSourceId?: string;
    id?: string;
    dataSource?: DataSourceItemCommonType;
}


/**
* 关系导出导入实体
* @params metadata {MetadataItemCommonType} 元数据详情（带数据源）
* @params metadataName {string} 元数据名称
* @params metadataDescription {string} 元数据描述信息
* @params layerId {string} GDS图层id
*/
type RelationshipItemCommonType = {
    metadata?: MetadataItemCommonType;
    metadataName?: string;
    metadataDescription?: string;
    layerId?: string;
}


/**
* 资源库导出导入实体
* @params id {string} ID
* @params resourceId {string} 资源Id
* @params name {string} 名称
* @params parentId {string} 父Id
* @params resourceDbType {ResourceDbTypeCommonType} 资源类型
* @params relationship {RelationshipItemCommonType} 关联的数据信息
* @params extension {string} 拓展信息
* @params productId {string} ProductId
*/
type ResourceDbItemCommonType = {
    id?: string;
    resourceId?: string;
    name?: string;
    parentId?: string;
    resourceDbType?: ResourceDbTypeCommonType;
    relationship?: RelationshipItemCommonType;
    extension?: string;
    productId?: string;
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {ResourceDbItemCommonType[]} 记录
*/
type ResourceDbItemPageableQueryResultCommonType = {
    totalCount?: number;
    records?: ResourceDbItemCommonType[];
}


/**
* 资源库查询
* @params pageIndex {number} 页码, 从1开始
* @params pageSize {number} 页容量, [1, 128]
* @params productId {string} 产品Id
*/
type ResourceDbQueryCommonType = {
    pageIndex?: number;
    pageSize?: number;
    productId?: string;
}


/**
* 资源库导出请求
* @params productId {string} 产品Id
*/
type ExportResourceDbRequestCommonType = {
    productId?: string;
}


/**
* 资源库导入入参
* @params importResourceDbs {ResourceDbItemCommonType[]} 导入资源库列表
*/
type ResourceDbImportCommonType = {
    importResourceDbs?: ResourceDbItemCommonType[];
}


/**
* 资源库树节点返回类型
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params number {string} Number(图层Id)
* @params idPath {string} Id 路径
* @params namePath {string} 名字路径
* @params isLeaf {boolean} 是否为叶子节点
*/
type ResourceDbTreeNodeOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    number?: string;
    idPath?: string;
    namePath?: string;
    isLeaf?: boolean;
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {ResourceDbTreeNodeOutCommonType[]} 记录
*/
type ResourceDbTreeNodeOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: ResourceDbTreeNodeOutCommonType[];
}


/**
* 外部资源统计
* @params id {string} 资源库id
* @params parentId {string} 父id
* @params name {string} 资源名称
* @params amount {number} 统计数量
* @params isLeaf {boolean} 是否为叶子节点
*/
type ResourceDbStatisticOutCommonType = {
    id?: string;
    parentId?: string;
    name?: string;
    amount?: number;
    isLeaf?: boolean;
}


/**
* 外部数据对象
* @params externalResourceObject {any} 外部资源数据项(key，value)集合(修改时需带主键信息)
*/
type ExternalResourceObjectInCommonType = {
    externalResourceObject: any;
}


/**
* 外部数据删除请求
* @params primaryKey {string} 主键key
* @params primaryValue {string} 主键value
*/
type ExternalResourceDeletedRequestCommonType = {
    primaryKey: string;
    primaryValue: string;
}


/**
* 资源库条目导出请求
* @params productId {string} 产品Id
* @params resourceDbId {string} 资源库Id
*/
type ExportExternalDataEntryRequestCommonType = {
    productId?: string;
    resourceDbId?: string;
}


/**
* 资源库条目
* @params id {string} 元数据Id
* @params dataSourceId {string} 数据源DataSource的id
* @params externalResourceObjects {ExternalResourceObjectInCommonType[]} 外部资源数据项(key，value)集合(修改时需带主键信息)
*/
type ExportExternalDataEntryOutCommonType = {
    id?: string;
    dataSourceId?: string;
    externalResourceObjects?: ExternalResourceObjectInCommonType[];
}


/**
* 资源库导出实体
* @params id {string} ID
* @params name {string} 名称
* @params resourceId {string} 
* @params parentId {string} 父Id
* @params resourceDbType {ResourceDbTypeCommonType} 资源类型
* @params relationship {RelationshipCommonType} 关联的数据信息
* @params extension {string} 拓展信息
* @params productId {string} ProductId
*/
type ExportResourceDbOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    parentId?: string;
    resourceDbType?: ResourceDbTypeCommonType;
    relationship?: RelationshipCommonType;
    extension?: string;
    productId?: string;
}


/**
* 元数据导出实体
* @params id {string} ID
* @params name {string} 名称
* @params resourceId {string} 
* @params parentId {string} 父元数据Id
* @params code {string} 元数据信息资源编码
* @params description {string} 元数据描述(摘要)
* @params keyWords {string} 关键字
* @params developmentMode {DevelopmentModeCommonType} 开发方式
* @params updateFrequency {UpdateFrequencyCommonType} 更新频率
* @params createTime {string} 创建日期
* @params updateTime {string} 更新日期
* @params publishTime {string} 发布日期
* @params resourceType {ResourceTypeCommonType} 资源格式
* @params administrativeMatters {string} 所属行政事项
* @params resourceStatus {ResourceStatusCommonType} 资源状态
* @params language {string} 语种
* @params onlineResourceLink {string} 在线资源链接
* @params sourceSystem {string} 来源系统
* @params spaceScope {string} 空间（地域）范围
* @params timeScope {string} 时间范围
* @params openLevel {OpenLevelCommonType} 开放级别
* @params dataItemDescriptions {DataItemDescriptionCommonType[]} 数据项
* @params displayDataItemDescriptions {DisplayDataItemDescriptionCommonType[]} 可展示字段
* @params tagIds {any[]} 标签ID列表
* @params kettleJobIds {any[]} 关联的作业
* @params businessResourceId {string} 行业分类资源Id
* @params serviceResourceId {string} 服务分类资源Id
* @params domainResourceId {string} 数据领域资源Id
* @params departmentResourceId {string} 行政单位资源Id
* @params districtResourceId {string} 行政区域资源Id
* @params themeResourceId {string} 主题分类资源Id
* @params dockInfo {DockInfoCommonType} 对接信息(对接状态|方式|说明)
* @params projectInfo {ProjectInfoCommonType} 项目信息
* @params totalDownloads {number} 下载量
* @params totalViews {number} 浏览量
* @params totalDataItems {number} 记录条数
* @params fileSize {number} 文件大小(bytes)
* @params fileCount {number} 文件数量(份)
* @params dataSize {number} 数据量(条)
* @params checkErrorDataCount {number} 检查错误的数据数量
* @params dataRating {number} 数据评分
* @params bindTable {string} 绑定的库表
* @params bindSchema {string} 绑定的模式
* @params dasJobName {string} das job name
* @params dataSourceId {string} 数据源DataSource的id
*/
type ExportMetadataOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    parentId?: string;
    code?: string;
    description?: string;
    keyWords?: string;
    developmentMode?: DevelopmentModeCommonType;
    updateFrequency?: UpdateFrequencyCommonType;
    createTime?: string;
    updateTime?: string;
    publishTime?: string;
    resourceType?: ResourceTypeCommonType;
    administrativeMatters?: string;
    resourceStatus?: ResourceStatusCommonType;
    language?: string;
    onlineResourceLink?: string;
    sourceSystem?: string;
    spaceScope?: string;
    timeScope?: string;
    openLevel?: OpenLevelCommonType;
    dataItemDescriptions?: DataItemDescriptionCommonType[];
    displayDataItemDescriptions?: DisplayDataItemDescriptionCommonType[];
    tagIds?: any[];
    kettleJobIds?: any[];
    businessResourceId?: string;
    serviceResourceId?: string;
    domainResourceId?: string;
    departmentResourceId?: string;
    districtResourceId?: string;
    themeResourceId?: string;
    dockInfo?: DockInfoCommonType;
    projectInfo?: ProjectInfoCommonType;
    totalDownloads?: number;
    totalViews?: number;
    totalDataItems?: number;
    fileSize?: number;
    fileCount?: number;
    dataSize?: number;
    checkErrorDataCount?: number;
    dataRating?: number;
    bindTable?: string;
    bindSchema?: string;
    dasJobName?: string;
    dataSourceId?: string;
}


/**
* 数据源导出实体
* @params id {string} ID
* @params name {string} 名称
* @params resourceId {string} 
* @params host {string} 域名
* @params port {number} 端口
* @params account {string} 账号
* @params password {string} 密码
* @params schema {string} 模式名
* @params dbType {DatabaseTypeCommonType} 数据源类型
* @params updateTIme {string} 更新时间
*/
type ExportDataSourceOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    host?: string;
    port?: number;
    account?: string;
    password?: string;
    schema?: string;
    dbType?: DatabaseTypeCommonType;
    updateTIme?: string;
}


/**
* 资源库条目导出实体
* @params externalDataEntries {ExportExternalDataEntryOutCommonType[]} 资源库条目导出实体集合
* @params resourceDbs {ExportResourceDbOutCommonType[]} 资源库导出实体集合
* @params metadatas {ExportMetadataOutCommonType[]} 元数据导出实体集合
* @params dataSources {ExportDataSourceOutCommonType[]} 数据源导出实体集合
*/
type ExportExternalDataEntryModelCommonType = {
    externalDataEntries?: ExportExternalDataEntryOutCommonType[];
    resourceDbs?: ExportResourceDbOutCommonType[];
    metadatas?: ExportMetadataOutCommonType[];
    dataSources?: ExportDataSourceOutCommonType[];
}


/**
* 资源库条目导入实体
* @params id {string} 元数据Id
* @params dataSourceId {string} 数据源DataSource的id
* @params externalResourceObjects {ExternalResourceObjectInCommonType[]} 外部资源数据项(key，value)集合(修改时需带主键信息)
*/
type ImportExternalDataEntryInCommonType = {
    id?: string;
    dataSourceId?: string;
    externalResourceObjects?: ExternalResourceObjectInCommonType[];
}


/**
* 资源库导入实体
* @params id {string} ID
* @params name {string} 名称
* @params resourceId {string} 
* @params parentId {string} 父Id
* @params resourceDbType {ResourceDbTypeCommonType} 资源类型
* @params relationship {RelationshipCommonType} 关联的数据信息
* @params extension {string} 拓展信息
* @params productId {string} ProductId
*/
type ImportResourceDbInCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    parentId?: string;
    resourceDbType?: ResourceDbTypeCommonType;
    relationship?: RelationshipCommonType;
    extension?: string;
    productId?: string;
}


/**
* 元数据导入实体
* @params id {string} ID
* @params name {string} 名称
* @params resourceId {string} 
* @params parentId {string} 父元数据Id
* @params code {string} 元数据信息资源编码
* @params description {string} 元数据描述(摘要)
* @params keyWords {string} 关键字
* @params developmentMode {DevelopmentModeCommonType} 开发方式
* @params updateFrequency {UpdateFrequencyCommonType} 更新频率
* @params createTime {string} 创建日期
* @params updateTime {string} 更新日期
* @params publishTime {string} 发布日期
* @params resourceType {ResourceTypeCommonType} 资源格式
* @params administrativeMatters {string} 所属行政事项
* @params resourceStatus {ResourceStatusCommonType} 资源状态
* @params language {string} 语种
* @params onlineResourceLink {string} 在线资源链接
* @params sourceSystem {string} 来源系统
* @params spaceScope {string} 空间（地域）范围
* @params timeScope {string} 时间范围
* @params openLevel {OpenLevelCommonType} 开放级别
* @params dataItemDescriptions {DataItemDescriptionCommonType[]} 数据项
* @params displayDataItemDescriptions {DisplayDataItemDescriptionCommonType[]} 可展示字段
* @params tagIds {any[]} 标签ID列表
* @params kettleJobIds {any[]} 关联的作业
* @params businessResourceId {string} 行业分类资源Id
* @params serviceResourceId {string} 服务分类资源Id
* @params domainResourceId {string} 数据领域资源Id
* @params departmentResourceId {string} 行政单位资源Id
* @params districtResourceId {string} 行政区域资源Id
* @params themeResourceId {string} 主题分类资源Id
* @params dockInfo {DockInfoCommonType} 对接信息(对接状态|方式|说明)
* @params projectInfo {ProjectInfoCommonType} 项目信息
* @params totalDownloads {number} 下载量
* @params totalViews {number} 浏览量
* @params totalDataItems {number} 记录条数
* @params fileSize {number} 文件大小(bytes)
* @params fileCount {number} 文件数量(份)
* @params dataSize {number} 数据量(条)
* @params checkErrorDataCount {number} 检查错误的数据数量
* @params dataRating {number} 数据评分
* @params bindTable {string} 绑定的库表
* @params bindSchema {string} 绑定的模式
* @params dasJobName {string} das job name
* @params dataSourceId {string} 数据源DataSource的id
*/
type ImportMetadataInCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    parentId?: string;
    code?: string;
    description?: string;
    keyWords?: string;
    developmentMode?: DevelopmentModeCommonType;
    updateFrequency?: UpdateFrequencyCommonType;
    createTime?: string;
    updateTime?: string;
    publishTime?: string;
    resourceType?: ResourceTypeCommonType;
    administrativeMatters?: string;
    resourceStatus?: ResourceStatusCommonType;
    language?: string;
    onlineResourceLink?: string;
    sourceSystem?: string;
    spaceScope?: string;
    timeScope?: string;
    openLevel?: OpenLevelCommonType;
    dataItemDescriptions?: DataItemDescriptionCommonType[];
    displayDataItemDescriptions?: DisplayDataItemDescriptionCommonType[];
    tagIds?: any[];
    kettleJobIds?: any[];
    businessResourceId?: string;
    serviceResourceId?: string;
    domainResourceId?: string;
    departmentResourceId?: string;
    districtResourceId?: string;
    themeResourceId?: string;
    dockInfo?: DockInfoCommonType;
    projectInfo?: ProjectInfoCommonType;
    totalDownloads?: number;
    totalViews?: number;
    totalDataItems?: number;
    fileSize?: number;
    fileCount?: number;
    dataSize?: number;
    checkErrorDataCount?: number;
    dataRating?: number;
    bindTable?: string;
    bindSchema?: string;
    dasJobName?: string;
    dataSourceId?: string;
}


/**
* 数据源导入实体
* @params id {string} ID
* @params name {string} 名称
* @params resourceId {string} 
* @params host {string} 域名
* @params port {number} 端口
* @params account {string} 账号
* @params password {string} 密码
* @params schema {string} 模式名
* @params dbType {DatabaseTypeCommonType} 数据源类型
* @params updateTIme {string} 更新时间
*/
type ImportDataSourceInCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    host?: string;
    port?: number;
    account?: string;
    password?: string;
    schema?: string;
    dbType?: DatabaseTypeCommonType;
    updateTIme?: string;
}


/**
* 资源库条目导入实体
* @params externalDataEntries {ImportExternalDataEntryInCommonType[]} 资源库条目导入实体集合
* @params resourceDbs {ImportResourceDbInCommonType[]} 资源库导入实体集合
* @params metadatas {ImportMetadataInCommonType[]} 元数据导入实体集合
* @params dataSources {ImportDataSourceInCommonType[]} 数据源导入实体集合
*/
type ImportExternalDataEntryModelCommonType = {
    externalDataEntries?: ImportExternalDataEntryInCommonType[];
    resourceDbs?: ImportResourceDbInCommonType[];
    metadatas?: ImportMetadataInCommonType[];
    dataSources?: ImportDataSourceInCommonType[];
}


/**
* 外部数据删除请求
* @params primaryKey {string} 主键key
* @params primaryValues {any[]} 主键值集合
*/
type ExternalResourcesDeletedRequestCommonType = {
    primaryKey: string;
    primaryValues: any[];
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {ServiceOutCommonType[]} 记录
*/
type ServiceOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: ServiceOutCommonType[];
}


/**
* 时间值计算类
* @params category {string} 时间值计算类
* @params value {number} 数值
*/
type TimeValueCalculateOutCommonType = {
    category?: string;
    value?: number;
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {TimeValueCalculateOutCommonType[]} 记录
*/
type TimeValueCalculateOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: TimeValueCalculateOutCommonType[];
}


/**
* 源信息
* @params source {any[]} 字段信息
*/
type SourceInfoCommonType = {
    source?: any[];
}


/**
* 元数据统计数
* @params categories {number} 总数
* @params yesterday {number} 昨天的总数
* @params today {number} 今天的总数
*/
type MetaDataCountOutCommonType = {
    categories?: number;
    yesterday?: number;
    today?: number;
}


/**
* 元数据执行枚举
*/
type MetadataActivityDayCommonType =  0 | 1 ;


/**
* 
* @params category {string} 元数据名称
* @params value {undefined} 
*/
type MetadataActivityCommonType = {
    category?: string;
    value?: undefined;
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {TagsOutCommonType[]} 记录
*/
type TagsOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: TagsOutCommonType[];
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {ThemeOutCommonType[]} 记录
*/
type ThemeOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: ThemeOutCommonType[];
}


/**
* 专题入参
* @params name {string} 专题名称
* @params resourceId {string} 资源Id
* @params description {string} 描述
* @params parentId {string} 父Id
* @params code {string} 主题编码
* @params projectId {string} 所属项目Id
*/
type ThemeInCommonType = {
    name: string;
    resourceId?: string;
    description?: string;
    parentId?: string;
    code?: string;
    projectId?: string;
}


----

/**
* 获取行业分类列表——响应参数类型定义
* @params totalCount {number} 总数
* @params records {BusinessOutCommonType[]} 记录
*/
export type GetBusinessesResType = {
    totalCount: number;
    records: BusinessOutCommonType[];
}


/**
* 查询质检规则——请求参数类型定义
* @params Name {string} 名称 
* @params TypeId {string} 类型Id 
* @params UpdateTimeBegin {string} 更新时间左端点 
* @params UpdateTimeEnd {string} 更新时间右端点 
* @params Updater {string} 更新人 
* @params Sort {number} 排序,0创建时间升序，1创建时间降序，2更新时间升序，3更新时间降序 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type SearchCheckRuleReqType = {
    Name?: string;
    TypeId?: string;
    UpdateTimeBegin?: string;
    UpdateTimeEnd?: string;
    Updater?: string;
    Sort?: number;
    page?: number;
    per_page?: number;
}


/**
* 查询质检规则——响应参数类型定义
* @params totalCount {number} 总数
* @params records {CheckRuleOutCommonType[]} 记录
*/
export type SearchCheckRuleResType = {
    totalCount: number;
    records: CheckRuleOutCommonType[];
}


/**
* 查询质检规则的关联元数据信息——请求参数类型定义
* @params resourceId {string} resourceId （必填）
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetCheckRuleRelatedMetadataReqType = {
    resourceId: string;
    page?: number;
    per_page?: number;
}


/**
* 查询质检规则的关联元数据信息——响应参数类型定义
* @params totalCount {number} 总数
* @params records {CheckRuleRelationMetadataOutCommonType[]} 记录
*/
export type GetCheckRuleRelatedMetadataResType = {
    totalCount: number;
    records: CheckRuleRelationMetadataOutCommonType[];
}


/**
* 添加质检规则——请求参数类型定义
* @params name {string} 名称 （必填）
* @params creator {string} 创建者 
* @params updater {string} 更新者 
* @params note {string} 规则备注 
* @params ruleConfig {string} 规则配置 （必填）
* @params ruleTypeId {string} 关联的规则Id （必填）
* @params relationMetadataIds {any[]} 关联的元数据列表 
*/
export type AddCheckRuleReqType = {
    name: string;
    creator?: string;
    updater?: string;
    note?: string;
    ruleConfig: string;
    ruleTypeId: string;
    relationMetadataIds?: any[];
}


/**
* 添加质检规则——响应参数类型定义
* @params id {string} ID
* @params name {string} 名称
* @params resourceId {string} 资源Id
* @params createTime {string} 创建时间
* @params updateTime {string} 修改时间
* @params creator {string} 创建者
* @params updater {string} 更新者
* @params note {string} 规则备注
* @params ruleConfig {string} 规则配置
* @params ruleTypeId {string} 关联的规则Id
* @params relationMetadataIds {any[]} 关联的元数据列表
* @params checkRuleRelationMetadatas {CheckRuleRelationMetadataCommonType[]} 关联的字段信息
* @params checkRuleType {CheckRuleTypeCommonType} 校验规则类型
*/
export type AddCheckRuleResType = {
    id: string;
    name: string;
    resourceId: string;
    createTime: string;
    updateTime: string;
    creator: string;
    updater: string;
    note: string;
    ruleConfig: string;
    ruleTypeId: string;
    relationMetadataIds: any[];
    checkRuleRelationMetadatas: CheckRuleRelationMetadataCommonType[];
    checkRuleType: CheckRuleTypeCommonType;
}


/**
* 修改质检规则——请求参数类型定义
* @params resourceId {string} resourceId （必填）
* @params id {string} Id （必填）
* @params name {string} 名称 （必填）
* @params createTime {string} 创建时间 
* @params updateTime {string} 修改时间 
* @params creator {string} 创建者 
* @params updater {string} 更新者 
* @params note {string} 规则备注 
* @params ruleConfig {string} 规则配置 （必填）
* @params ruleTypeId {string} 关联的规则Id （必填）
* @params relationMetadataIds {any[]} 关联的元数据列表 
*/
export type EditCheckRuleReqType = {
    resourceId: string;
    id: string;
    name: string;
    createTime?: string;
    updateTime?: string;
    creator?: string;
    updater?: string;
    note?: string;
    ruleConfig: string;
    ruleTypeId: string;
    relationMetadataIds?: any[];
}


/**
* 删除质检规则——请求参数类型定义
* @params resourceId {string} resourceId （必填）
*/
export type DeleteCheckRuleReqType = {
    resourceId: string;
}


/**
* 获取质检规则——响应参数类型定义
* @params id {string} ID
* @params name {string} 名称
* @params resourceId {string} 资源Id
* @params createTime {string} 创建时间
* @params updateTime {string} 修改时间
* @params creator {string} 创建者
* @params updater {string} 更新者
* @params ruleType {RuleTypeCommonType} 规则类型
* @params configTemplate {string} 配置模板
* @params description {string} 描述
*/
export type GetCheckRuleTypeResType = {
    id: string;
    name: string;
    resourceId: string;
    createTime: string;
    updateTime: string;
    creator: string;
    updater: string;
    ruleType: RuleTypeCommonType;
    configTemplate: string;
    description: string;
}


/**
* 按照条件查询质检任务列表——请求参数类型定义
* @params Name {string} 名称 
* @params MetadataName {string} 元数据名称 
* @params UpdateTimeBegin {string} 更新时间起点 
* @params UpdateTimeEnd {string} 更新时间终点 
* @params ExecuteStatus {number} 执行状态 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetCheckTaskInfoReqType = {
    Name?: string;
    MetadataName?: string;
    UpdateTimeBegin?: string;
    UpdateTimeEnd?: string;
    ExecuteStatus?: number;
    page?: number;
    per_page?: number;
}


/**
* 按照条件查询质检任务列表——响应参数类型定义
* @params totalCount {number} 总数
* @params records {CheckTaskInfoOutCommonType[]} 记录
*/
export type GetCheckTaskInfoResType = {
    totalCount: number;
    records: CheckTaskInfoOutCommonType[];
}


/**
* 按照Id查询质检任务详情信息——请求参数类型定义
* @params id {string} id （必填）
*/
export type GetCheckTaskInfoByIdReqType = {
    id: string;
}


/**
* 按照Id查询质检任务详情信息——响应参数类型定义
* @params id {string} ID
* @params name {string} 名称
* @params resourceId {string} 资源ID
* @params createTime {string} 创建时间
* @params updateTime {string} 修改时间
* @params creator {string} 创建者
* @params updater {string} 更新者
* @params checkMetadataId {string} 质检元数据对象Id
* @params checkMetadataName {string} 检测对象名称
* @params cronExpression {string} Cron表达式
* @params note {string} 备注
* @params allCheckDataCount {number} 检测数据总量
* @params allCheckErrorDataCount {number} 检测失败总量
* @params allCheckCount {number} 检查数量
* @params lastCheckDataCount {number} 上一次检查数量
* @params checkAvgRating {number} 检测平均评分
* @params lastCheckTime {string} 最近一次检测时间
* @params timeConsuming {number} 耗时
* @params isErrors {boolean} 是否出错
*/
export type GetCheckTaskInfoByIdResType = {
    id: string;
    name: string;
    resourceId: string;
    createTime: string;
    updateTime: string;
    creator: string;
    updater: string;
    checkMetadataId: string;
    checkMetadataName: string;
    cronExpression: string;
    note: string;
    allCheckDataCount: number;
    allCheckErrorDataCount: number;
    allCheckCount: number;
    lastCheckDataCount: number;
    checkAvgRating: number;
    lastCheckTime: string;
    timeConsuming: number;
    isErrors: boolean;
}


/**
* 立即执行作业——请求参数类型定义
* @params id {string} id （必填）
*/
export type RunCheckTaskReqType = {
    id: string;
}


/**
* 按照条件查询质检任务执行记录列表——请求参数类型定义
* @params id {string} id （必填）
* @params MetadataId {string} 元数据Id 
* @params StartTimeBegin {string} 开始时间起点 
* @params StartTimeEnd {string} 开始时间终点 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type SearchCheckTaskInfoReqType = {
    id: string;
    MetadataId?: string;
    StartTimeBegin?: string;
    StartTimeEnd?: string;
    page?: number;
    per_page?: number;
}


/**
* 按照条件查询质检任务执行记录列表——响应参数类型定义
* @params totalCount {number} 总数
* @params records {CheckTaskExecuteRecordOutCommonType[]} 记录
*/
export type SearchCheckTaskInfoResType = {
    totalCount: number;
    records: CheckTaskExecuteRecordOutCommonType[];
}


/**
* 查询质检任务执行记录单个信息——请求参数类型定义
* @params id {string} id （必填）
*/
export type GetCheckTaskExecuteRecordByIdReqType = {
    id: string;
}


/**
* 查询质检任务执行记录单个信息——响应参数类型定义
* @params id {string} 检查记录ID
* @params checkTaskId {string} 检查任务Id
* @params checkRowCount {number} 检查行数
* @params checkErrorCount {number} 检查错误数
* @params checkRating {number} 质检评分
* @params startTime {string} 开始时间
* @params endTime {string} 结束时间
* @params timeConsumer {number} 耗时
* @params checkMetadaName {string} 检查的元数据名称
* @params isErrors {boolean} 是否执行错误
*/
export type GetCheckTaskExecuteRecordByIdResType = {
    id: string;
    checkTaskId: string;
    checkRowCount: number;
    checkErrorCount: number;
    checkRating: number;
    startTime: string;
    endTime: string;
    timeConsumer: number;
    checkMetadaName: string;
    isErrors: boolean;
}


/**
* 查询质检任务搜索执行记录——请求参数类型定义
* @params MetadataId {string} 元数据Id 
* @params StartTimeBegin {string} 开始时间起点 
* @params StartTimeEnd {string} 开始时间终点 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetCheckTaskExecuteRecordReqType = {
    MetadataId?: string;
    StartTimeBegin?: string;
    StartTimeEnd?: string;
    page?: number;
    per_page?: number;
}


/**
* 查询质检任务搜索执行记录——响应参数类型定义
* @params id {string} 检查记录ID
* @params checkTaskId {string} 检查任务Id
* @params checkRowCount {number} 检查行数
* @params checkErrorCount {number} 检查错误数
* @params checkRating {number} 质检评分
* @params startTime {string} 开始时间
* @params endTime {string} 结束时间
* @params timeConsumer {number} 耗时
* @params checkMetadaName {string} 检查的元数据名称
* @params isErrors {boolean} 是否执行错误
*/
export type GetCheckTaskExecuteRecordResType = {
    id: string;
    checkTaskId: string;
    checkRowCount: number;
    checkErrorCount: number;
    checkRating: number;
    startTime: string;
    endTime: string;
    timeConsumer: number;
    checkMetadaName: string;
    isErrors: boolean;
}


/**
* 分页查询质检任务检测详情出错的数据列表——请求参数类型定义
* @params id {string} id （必填）
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetCheckTaskExecuteRecordErrorsReqType = {
    id: string;
    page?: number;
    per_page?: number;
}


/**
* 分页查询质检任务检测详情出错的数据列表——响应参数类型定义
* @params totalCount {number} 总数
* @params records {CheckTaskExecuteRecordDetailOutCommonType[]} 记录
*/
export type GetCheckTaskExecuteRecordErrorsResType = {
    totalCount: number;
    records: CheckTaskExecuteRecordDetailOutCommonType[];
}


/**
* ——请求参数类型定义
* @params DataSourceName {string} 数据源名称 
* @params DatabaseName {string} 数据库名称 
* @params Ip {string} 数据库Ip 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetDataSourceReqType = {
    DataSourceName?: string;
    DatabaseName?: string;
    Ip?: string;
    page?: number;
    per_page?: number;
}


/**
* ——响应参数类型定义
* @params totalCount {number} 总数
* @params records {DataSourceOutCommonType[]} 记录
*/
export type GetDataSourceResType = {
    totalCount: number;
    records: DataSourceOutCommonType[];
}


/**
* 添加数据源——请求参数类型定义
* @params name {string} 数据源名称 （必填）
* @params host {string} 域名 （必填）
* @params port {number} 端口 （必填）
* @params account {string} 账号 （必填）
* @params password {string} 密码 （必填）
* @params schema {string} 模式名 
* @params dbType {DatabaseTypeCommonType} 数据源类型 
* @params resourceId {string} 数据源id 
*/
export type AddDataSourceReqType = {
    name: string;
    host: string;
    port: number;
    account: string;
    password: string;
    schema?: string;
    dbType?: DatabaseTypeCommonType;
    resourceId?: string;
}


/**
* 添加数据源——响应参数类型定义
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params host {string} 域名
* @params port {number} 端口
* @params account {string} 账号
* @params password {string} 密码
* @params schema {string} 模式名
* @params dbType {DatabaseTypeCommonType} 数据源类型
* @params updateTIme {string} 更新时间
*/
export type AddDataSourceResType = {
    id: string;
    name: string;
    resourceId: string;
    host: string;
    port: number;
    account: string;
    password: string;
    schema: string;
    dbType: DatabaseTypeCommonType;
    updateTIme: string;
}


/**
* 修改数据源——请求参数类型定义
* @params resourceId {string} resourceId （必填）
* @params name {string} 数据源名称 （必填）
* @params host {string} 域名 （必填）
* @params port {number} 端口 （必填）
* @params account {string} 账号 （必填）
* @params password {string} 密码 （必填）
* @params schema {string} 模式名 
* @params dbType {DatabaseTypeCommonType} 数据源类型 
*/
export type EditDataSourceReqType = {
    resourceId: string;
    name: string;
    host: string;
    port: number;
    account: string;
    password: string;
    schema?: string;
    dbType?: DatabaseTypeCommonType;
}


/**
* 删除数据源——请求参数类型定义
* @params resourceId {string} resourceId （必填）
*/
export type DeleteDataSourceReqType = {
    resourceId: string;
}


/**
* 提供数据库信息——请求参数类型定义
* @params resourceId {string} resourceId （必填）
*/
export type GetDbInfosByResourceIdReqType = {
    resourceId: string;
}


/**
* 提供数据库信息——响应参数类型定义
* @params totalCount {number} 总数
* @params records {DbInfoOutCommonType[]} 记录
*/
export type GetDbInfosByResourceIdResType = {
    totalCount: number;
    records: DbInfoOutCommonType[];
}


/**
* 抓取数据源提供的元数据——请求参数类型定义
* @params resourceId {string} resourceId （必填）
*/
export type SearchMetadataInfoByResourceIdReqType = {
    resourceId: string;
}


/**
* 抓取数据源提供的元数据——响应参数类型定义
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params code {string} 元数据信息资源编码
* @params description {string} 元数据描述(摘要)
* @params keyWords {string} 关键字
* @params developmentMode {DevelopmentModeCommonType} 开发方式
* @params updateFrequency {UpdateFrequencyCommonType} 更新频率
* @params createTime {string} 创建日期
* @params updateTime {string} 更新日期
* @params publishTime {string} 发布日期
* @params resourceType {ResourceTypeCommonType} 资源格式
* @params administrativeMatters {string} 所属行政事项
* @params resourceStatus {ResourceStatusCommonType} 资源状态
* @params language {string} 语种
* @params onlineResourceLink {string} 在线资源链接
* @params sourceSystem {string} 来源系统
* @params spaceScope {string} 空间（地域）范围
* @params timeScope {string} 时间范围
* @params openLevel {OpenLevelCommonType} 开放级别
* @params dataItemDescriptions {DataItemDescriptionCommonType[]} 数据项
* @params displayDataItemDescriptions {DisplayDataItemDescriptionCommonType[]} 可展示字段
* @params tagIds {any[]} 标签ID列表
* @params kettleJobIds {any[]} 关联的作业
* @params businessOut {BusinessOutCommonType} 行业分类
* @params serviceOut {ServiceOutCommonType} 服务分类
* @params domainOut {DomainOutCommonType} 数据领域
* @params departmentOut {DepartmentOutCommonType} 行政单位
* @params districtOut {DistrictOutCommonType} 行政区域
* @params themeOut {ThemeOutCommonType} 主题分类
* @params dockInfo {DockInfoCommonType} 对接信息(对接状态|方式|说明)
* @params projectInfo {ProjectInfoCommonType} 项目信息
* @params totalDownloads {number} 下载量
* @params totalViews {number} 浏览量
* @params totalDataItems {number} 记录条数
* @params fileSize {number} 文件大小(bytes)
* @params fileCount {number} 文件数量(份)
* @params dataSize {number} 数据量(条)
* @params checkErrorDataCount {number} 检查错误的数据数量
* @params dataRating {number} 数据评分
* @params bindTable {string} 绑定的库表
* @params bindSchema {string} 绑定的模式
* @params dasJobName {string} das job name
* @params dataSourceId {string} 数据源DataSource的id
* @params selectDataItems {any} 外部数据筛选类型数据
*/
export type SearchMetadataInfoByResourceIdResType = {
    id: string;
    name: string;
    resourceId: string;
    code: string;
    description: string;
    keyWords: string;
    developmentMode: DevelopmentModeCommonType;
    updateFrequency: UpdateFrequencyCommonType;
    createTime: string;
    updateTime: string;
    publishTime: string;
    resourceType: ResourceTypeCommonType;
    administrativeMatters: string;
    resourceStatus: ResourceStatusCommonType;
    language: string;
    onlineResourceLink: string;
    sourceSystem: string;
    spaceScope: string;
    timeScope: string;
    openLevel: OpenLevelCommonType;
    dataItemDescriptions: DataItemDescriptionCommonType[];
    displayDataItemDescriptions: DisplayDataItemDescriptionCommonType[];
    tagIds: any[];
    kettleJobIds: any[];
    businessOut: BusinessOutCommonType;
    serviceOut: ServiceOutCommonType;
    domainOut: DomainOutCommonType;
    departmentOut: DepartmentOutCommonType;
    districtOut: DistrictOutCommonType;
    themeOut: ThemeOutCommonType;
    dockInfo: DockInfoCommonType;
    projectInfo: ProjectInfoCommonType;
    totalDownloads: number;
    totalViews: number;
    totalDataItems: number;
    fileSize: number;
    fileCount: number;
    dataSize: number;
    checkErrorDataCount: number;
    dataRating: number;
    bindTable: string;
    bindSchema: string;
    dasJobName: string;
    dataSourceId: string;
    selectDataItems: any;
}


/**
* 分页获取行政部门列表——请求参数类型定义
* @params keyword {string} 关键词 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetDepartmentsReqType = {
    keyword?: string;
    page?: number;
    per_page?: number;
}


/**
* 分页获取行政部门列表——响应参数类型定义
* @params totalCount {number} 总数
* @params records {DepartmentOutCommonType[]} 记录
*/
export type GetDepartmentsResType = {
    totalCount: number;
    records: DepartmentOutCommonType[];
}


/**
* 新增行政部门——请求参数类型定义
* @params name {string} 名称 （必填）
* @params parentId {string} 部门父Id 
* @params description {string} 描述 
* @params address {string} 地址 
* @params resourceId {string} 资源Id 
* @params areaCode {string} 行政区划 
*/
export type AddDepartmentsReqType = {
    name: string;
    parentId?: string;
    description?: string;
    address?: string;
    resourceId?: string;
    areaCode?: string;
}


/**
* 新增行政部门——响应参数类型定义
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params parentId {string} 父Id
* @params description {string} 部门描述
* @params address {string} 部门地址
* @params areaCode {string} 行政区划
* @params totalMetadataCount {number} 
*/
export type AddDepartmentsResType = {
    id: string;
    name: string;
    resourceId: string;
    parentId: string;
    description: string;
    address: string;
    areaCode: string;
    totalMetadataCount: number;
}


/**
* 获取行政部门详情（支持资源Id）——请求参数类型定义
* @params id {string} id （必填）
*/
export type GetDepartmentByIdReqType = {
    id: string;
}


/**
* 获取行政部门详情（支持资源Id）——响应参数类型定义
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params parentId {string} 父Id
* @params description {string} 部门描述
* @params address {string} 部门地址
* @params areaCode {string} 行政区划
* @params totalMetadataCount {number} 
*/
export type GetDepartmentByIdResType = {
    id: string;
    name: string;
    resourceId: string;
    parentId: string;
    description: string;
    address: string;
    areaCode: string;
    totalMetadataCount: number;
}


/**
* 修改行政部门——请求参数类型定义
* @params id {string} id （必填）
* @params name {string} 名称 （必填）
* @params parentId {string} 部门父Id 
* @params description {string} 描述 
* @params address {string} 地址 
* @params resourceId {string} 资源Id 
* @params areaCode {string} 行政区划 
*/
export type EditDepartmentReqType = {
    id: string;
    name: string;
    parentId?: string;
    description?: string;
    address?: string;
    resourceId?: string;
    areaCode?: string;
}


/**
* 删除行政部门——请求参数类型定义
* @params id {string} id （必填）
*/
export type DeleteDepartmentReqType = {
    id: string;
}


/**
* 批量Ids/ResourceIDs获取部门集合——请求参数类型定义
* @params pageIndex {number} 页码, 从1开始 
* @params pageSize {number} 页容量, [1, 128] 
* @params ids {any[]} Id集合 
*/
export type GetDepartmentsByIdsReqType = {
    pageIndex?: number;
    pageSize?: number;
    ids?: any[];
}


/**
* 批量Ids/ResourceIDs获取部门集合——响应参数类型定义
* @params totalCount {number} 总数
* @params records {DepartmentItemCommonType[]} 记录
*/
export type GetDepartmentsByIdsResType = {
    totalCount: number;
    records: DepartmentItemCommonType[];
}


/**
* 导入行政部门——请求参数类型定义
* @params importDepartments {DepartmentItemCommonType[]} 行政部门 （必填）
*/
export type ImportDepartmentsReqType = {
    importDepartments: DepartmentItemCommonType[];
}


/**
* 获取行政区域列表——响应参数类型定义
* @params totalCount {number} 总数
* @params records {DistrictOutCommonType[]} 记录
*/
export type GetDistrictsResType = {
    totalCount: number;
    records: DistrictOutCommonType[];
}


/**
* 分页获取领域列表——请求参数类型定义
* @params keyword {string} 关键词 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetDomainsReqType = {
    keyword?: string;
    page?: number;
    per_page?: number;
}


/**
* 分页获取领域列表——响应参数类型定义
* @params totalCount {number} 总数
* @params records {DomainOutCommonType[]} 记录
*/
export type GetDomainsResType = {
    totalCount: number;
    records: DomainOutCommonType[];
}


/**
* 新增领域——请求参数类型定义
* @params name {string} 领域名称 （必填）
* @params resourceId {string} 资源Id 
* @params description {string} 描述 
* @params parentId {string} 父Id 
*/
export type AddDomainReqType = {
    name: string;
    resourceId?: string;
    description?: string;
    parentId?: string;
}


/**
* 新增领域——响应参数类型定义
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params parentId {string} 父主题Id
* @params description {string} 领域描述
* @params totalMetadataCount {number} 
*/
export type AddDomainResType = {
    id: string;
    name: string;
    resourceId: string;
    parentId: string;
    description: string;
    totalMetadataCount: number;
}


/**
* 获取领域详情（支持资源Id）——请求参数类型定义
* @params id {string} id （必填）
*/
export type GetDomainByIdReqType = {
    id: string;
}


/**
* 获取领域详情（支持资源Id）——响应参数类型定义
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params parentId {string} 父主题Id
* @params description {string} 领域描述
* @params totalMetadataCount {number} 
*/
export type GetDomainByIdResType = {
    id: string;
    name: string;
    resourceId: string;
    parentId: string;
    description: string;
    totalMetadataCount: number;
}


/**
* 修改领域——请求参数类型定义
* @params id {string} id （必填）
* @params name {string} 领域名称 （必填）
* @params resourceId {string} 资源Id 
* @params description {string} 描述 
* @params parentId {string} 父Id 
*/
export type EditDomainReqType = {
    id: string;
    name: string;
    resourceId?: string;
    description?: string;
    parentId?: string;
}


/**
* 删除领域——请求参数类型定义
* @params id {string} id （必填）
*/
export type DeleteDomainReqType = {
    id: string;
}


/**
* 批量Ids/ResourceIDs获取领域集合——请求参数类型定义
* @params pageIndex {number} 页码, 从1开始 
* @params pageSize {number} 页容量, [1, 128] 
* @params ids {any[]} Id集合 
*/
export type GetDomainsByIdsReqType = {
    pageIndex?: number;
    pageSize?: number;
    ids?: any[];
}


/**
* 批量Ids/ResourceIDs获取领域集合——响应参数类型定义
* @params totalCount {number} 总数
* @params records {DomainItemCommonType[]} 记录
*/
export type GetDomainsByIdsResType = {
    totalCount: number;
    records: DomainItemCommonType[];
}


/**
* 导入行政部门——请求参数类型定义
* @params importDomains {DomainItemCommonType[]} 领域 （必填）
*/
export type ImportDomainsReqType = {
    importDomains: DomainItemCommonType[];
}


/**
* 导出数据需求目录——请求参数类型定义
* @params projectTagId {string} projectTagId （必填）
*/
export type ExportDataRequestCategoryReqType = {
    projectTagId: string;
}


/**
* 获取ETLJob的实体列表——请求参数类型定义
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetKettleJobsReqType = {
    page?: number;
    per_page?: number;
}


/**
* 获取ETLJob的实体列表——响应参数类型定义
* @params totalCount {number} 总数
* @params records {KettleJobOutCommonType[]} 记录
*/
export type GetKettleJobsResType = {
    totalCount: number;
    records: KettleJobOutCommonType[];
}


/**
* 添加EtlJob——请求参数类型定义
* @params name {string} 作业名称 
* @params resourceId {string} 资源Id 
* @params description {string} 描述 
* @params cron {string} 执行Cron表达式 
* @params isRun {boolean} 是否运行 
* @params tags {any[]} 标签列表 
*/
export type AddKettleJobsReqType = {
    name?: string;
    resourceId?: string;
    description?: string;
    cron?: string;
    isRun?: boolean;
    tags?: any[];
}


/**
* 添加EtlJob——响应参数类型定义
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params source {string} 来源端信息
* @params sourceType {SourceTypeCommonType} 源端类型
* @params relateSources {RelateMetadataCommonType[]} 关联元数据
* @params destination {string} 目标库信息
* @params relateDestinations {RelateMetadataCommonType[]} 目标库元数据
* @params description {string} 描述
* @params createTime {string} 作业创建时间
* @params updateTime {string} 作业修改时间
* @params startTime {string} 开始时间
* @params lastSyncTime {string} 上一次同步时间
* @params syncMetadata {string} 同步的元数据
* @params syncMetadataId {string} 同步的元数据ID
* @params timeConsuming {number} 耗时
* @params errors {number} 错误行数
* @params cronExpression {string} Cron表达式信息
* @params syncDataCount {number} 同步数据量
* @params isRun {boolean} 是否运行
* @params fileInfos {any[]} 文件信息列表
* @params tags {any[]} 分类标签
*/
export type AddKettleJobsResType = {
    id: string;
    name: string;
    resourceId: string;
    source: string;
    sourceType: SourceTypeCommonType;
    relateSources: RelateMetadataCommonType[];
    destination: string;
    relateDestinations: RelateMetadataCommonType[];
    description: string;
    createTime: string;
    updateTime: string;
    startTime: string;
    lastSyncTime: string;
    syncMetadata: string;
    syncMetadataId: string;
    timeConsuming: number;
    errors: number;
    cronExpression: string;
    syncDataCount: number;
    isRun: boolean;
    fileInfos: any[];
    tags: any[];
}


/**
* 更新EtlJob——请求参数类型定义
* @params resourceId {string} resourceId （必填）
* @params name {string} 作业名称 
* @params resourceId {string} 资源Id 
* @params description {string} 描述 
* @params cron {string} 执行Cron表达式 
* @params isRun {boolean} 是否运行 
* @params tags {any[]} 标签列表 
*/
export type EditKettleJobsReqType = {
    name?: string;
    resourceId?: string;
    description?: string;
    cron?: string;
    isRun?: boolean;
    tags?: any[];
}


/**
* 删除EtlJob——请求参数类型定义
* @params resourceId {string} resourceId （必填）
*/
export type DeleteKettleJobsReqType = {
    resourceId: string;
}


/**
* 查询ETLJob的实体列表——请求参数类型定义
* @params KettleJobName {string} 作业名称 
* @params Source {string} 源端 
* @params Destination {string} 对端 
* @params ExecuteStatus {number} 执行状态枚举 0=所有 1=返回执行成功的作业数 2=返回执行失败作业数 
* @params OrderRule {number} 排序规则,0-更新时间降序,1-更新时间升序,2-数据同步量降序,3-数据同步量升序,4-耗时降序,5-耗时升序 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type SearchKettleJobsReqType = {
    KettleJobName?: string;
    Source?: string;
    Destination?: string;
    ExecuteStatus?: number;
    OrderRule?: number;
    page?: number;
    per_page?: number;
}


/**
* 查询ETLJob的实体列表——响应参数类型定义
* @params totalCount {number} 总数
* @params records {KettleJobOutCommonType[]} 记录
*/
export type SearchKettleJobsResType = {
    totalCount: number;
    records: KettleJobOutCommonType[];
}


/**
* Etl具体信息——请求参数类型定义
* @params id {string} id （必填）
*/
export type GetKettleJobByIdReqType = {
    id: string;
}


/**
* Etl具体信息——响应参数类型定义
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params source {string} 来源端信息
* @params sourceType {SourceTypeCommonType} 源端类型
* @params relateSources {RelateMetadataCommonType[]} 关联元数据
* @params destination {string} 目标库信息
* @params relateDestinations {RelateMetadataCommonType[]} 目标库元数据
* @params description {string} 描述
* @params createTime {string} 作业创建时间
* @params updateTime {string} 作业修改时间
* @params startTime {string} 开始时间
* @params lastSyncTime {string} 上一次同步时间
* @params syncMetadata {string} 同步的元数据
* @params syncMetadataId {string} 同步的元数据ID
* @params timeConsuming {number} 耗时
* @params errors {number} 错误行数
* @params cronExpression {string} Cron表达式信息
* @params syncDataCount {number} 同步数据量
* @params isRun {boolean} 是否运行
* @params fileInfos {any[]} 文件信息列表
* @params tags {any[]} 分类标签
* @params executeCount {number} 执行数量
* @params creator {string} 创建者
* @params updater {string} 更新者
* @params syncAllDataCount {number} 总数据量
*/
export type GetKettleJobByIdResType = {
    id: string;
    name: string;
    resourceId: string;
    source: string;
    sourceType: SourceTypeCommonType;
    relateSources: RelateMetadataCommonType[];
    destination: string;
    relateDestinations: RelateMetadataCommonType[];
    description: string;
    createTime: string;
    updateTime: string;
    startTime: string;
    lastSyncTime: string;
    syncMetadata: string;
    syncMetadataId: string;
    timeConsuming: number;
    errors: number;
    cronExpression: string;
    syncDataCount: number;
    isRun: boolean;
    fileInfos: any[];
    tags: any[];
    executeCount: number;
    creator: string;
    updater: string;
    syncAllDataCount: number;
}


/**
* 返回执行记录列表——请求参数类型定义
* @params id {string} id （必填）
* @params StartTimeBegin {string} 开始时间起始点 
* @params StartTimeEnd {string} 开始时间终点 
* @params ExecuteStatus {number} 执行状态枚举 0=所有 1=返回执行成功的作业数 2=返回执行失败作业数 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetKettleJobRecordsReqType = {
    id: string;
    StartTimeBegin?: string;
    StartTimeEnd?: string;
    ExecuteStatus?: number;
    page?: number;
    per_page?: number;
}


/**
* 返回执行记录列表——响应参数类型定义
* @params totalCount {number} 总数
* @params records {EtlExecuteRecordOutCommonType[]} 记录
*/
export type GetKettleJobRecordsResType = {
    totalCount: number;
    records: EtlExecuteRecordOutCommonType[];
}


/**
* 根据元数据ID返回ETL执行记录——请求参数类型定义
* @params MetadataId {string} 元数据id 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetKettleJobRecordsByMetadataIdReqType = {
    MetadataId?: string;
    page?: number;
    per_page?: number;
}


/**
* 根据元数据ID返回ETL执行记录——响应参数类型定义
* @params totalCount {number} 总数
* @params records {EtlExecuteRecordOutCommonType[]} 记录
*/
export type GetKettleJobRecordsByMetadataIdResType = {
    totalCount: number;
    records: EtlExecuteRecordOutCommonType[];
}


/**
* 获取ETL作业的标签——响应参数类型定义
* @params tags {any[]} 标签列表
*/
export type GetKettleJobsTagsResType = {
    tags: any[];
}


/**
* 导出所有资源库的json数据——请求参数类型定义
* @params fileName {string} 导出文件名 
* @params tags {any[]} 导出标签 （必填）
*/
export type ExportKettleJobsReqType = {
    fileName?: string;
    tags: any[];
}


/**
* 运行作业——请求参数类型定义
* @params id {string} id （必填）
*/
export type RunJobsReqType = {
    id: string;
}


/**
* 停止作业——请求参数类型定义
* @params id {string} id （必填）
*/
export type StopJobsReqType = {
    id: string;
}


/**
* 立即执行作业——请求参数类型定义
* @params id {string} id （必填）
*/
export type SingleExecJobsReqType = {
    id: string;
}


/**
* 导出某个ETL作业的前10条执行日志记录——请求参数类型定义
* @params id {string} id （必填）
*/
export type ExportTop10JobsReqType = {
    id: string;
}


/**
* 导出ETL执行记录的日志记录——请求参数类型定义
* @params id {string} id （必填）
*/
export type ExportETLJobRecordsReqType = {
    id: string;
}


/**
* 获取元数据详情——请求参数类型定义
* @params id {string} id （必填）
*/
export type GetMetadataByIdReqType = {
    id: string;
}


/**
* 获取元数据详情——响应参数类型定义
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params code {string} 元数据信息资源编码
* @params description {string} 元数据描述(摘要)
* @params keyWords {string} 关键字
* @params developmentMode {DevelopmentModeCommonType} 开发方式
* @params updateFrequency {UpdateFrequencyCommonType} 更新频率
* @params createTime {string} 创建日期
* @params updateTime {string} 更新日期
* @params publishTime {string} 发布日期
* @params resourceType {ResourceTypeCommonType} 资源格式
* @params administrativeMatters {string} 所属行政事项
* @params resourceStatus {ResourceStatusCommonType} 资源状态
* @params language {string} 语种
* @params onlineResourceLink {string} 在线资源链接
* @params sourceSystem {string} 来源系统
* @params spaceScope {string} 空间（地域）范围
* @params timeScope {string} 时间范围
* @params openLevel {OpenLevelCommonType} 开放级别
* @params dataItemDescriptions {DataItemDescriptionCommonType[]} 数据项
* @params displayDataItemDescriptions {DisplayDataItemDescriptionCommonType[]} 可展示字段
* @params tagIds {any[]} 标签ID列表
* @params kettleJobIds {any[]} 关联的作业
* @params businessOut {BusinessOutCommonType} 行业分类
* @params serviceOut {ServiceOutCommonType} 服务分类
* @params domainOut {DomainOutCommonType} 数据领域
* @params departmentOut {DepartmentOutCommonType} 行政单位
* @params districtOut {DistrictOutCommonType} 行政区域
* @params themeOut {ThemeOutCommonType} 主题分类
* @params dockInfo {DockInfoCommonType} 对接信息(对接状态|方式|说明)
* @params projectInfo {ProjectInfoCommonType} 项目信息
* @params totalDownloads {number} 下载量
* @params totalViews {number} 浏览量
* @params totalDataItems {number} 记录条数
* @params fileSize {number} 文件大小(bytes)
* @params fileCount {number} 文件数量(份)
* @params dataSize {number} 数据量(条)
* @params checkErrorDataCount {number} 检查错误的数据数量
* @params dataRating {number} 数据评分
* @params bindTable {string} 绑定的库表
* @params bindSchema {string} 绑定的模式
* @params dasJobName {string} das job name
* @params dataSourceId {string} 数据源DataSource的id
* @params selectDataItems {any} 外部数据筛选类型数据
*/
export type GetMetadataByIdResType = {
    id: string;
    name: string;
    resourceId: string;
    code: string;
    description: string;
    keyWords: string;
    developmentMode: DevelopmentModeCommonType;
    updateFrequency: UpdateFrequencyCommonType;
    createTime: string;
    updateTime: string;
    publishTime: string;
    resourceType: ResourceTypeCommonType;
    administrativeMatters: string;
    resourceStatus: ResourceStatusCommonType;
    language: string;
    onlineResourceLink: string;
    sourceSystem: string;
    spaceScope: string;
    timeScope: string;
    openLevel: OpenLevelCommonType;
    dataItemDescriptions: DataItemDescriptionCommonType[];
    displayDataItemDescriptions: DisplayDataItemDescriptionCommonType[];
    tagIds: any[];
    kettleJobIds: any[];
    businessOut: BusinessOutCommonType;
    serviceOut: ServiceOutCommonType;
    domainOut: DomainOutCommonType;
    departmentOut: DepartmentOutCommonType;
    districtOut: DistrictOutCommonType;
    themeOut: ThemeOutCommonType;
    dockInfo: DockInfoCommonType;
    projectInfo: ProjectInfoCommonType;
    totalDownloads: number;
    totalViews: number;
    totalDataItems: number;
    fileSize: number;
    fileCount: number;
    dataSize: number;
    checkErrorDataCount: number;
    dataRating: number;
    bindTable: string;
    bindSchema: string;
    dasJobName: string;
    dataSourceId: string;
    selectDataItems: any;
}


/**
* 修改元数据——请求参数类型定义
* @params id {string} id （必填）
* @params name {string} 名称 
* @params resourceId {string} 资源id 
* @params parentId {string} 父元数据Id 
* @params code {string} 元数据信息资源编码 
* @params description {string} 元数据描述(摘要) 
* @params keyWords {string} 关键字 
* @params developmentMode {DevelopmentModeCommonType} 开发方式 
* @params updateFrequency {UpdateFrequencyCommonType} 更新频率 
* @params createTime {string} 创建日期 
* @params updateTime {string} 更新日期 
* @params publishTime {string} 发布日期 
* @params resourceType {ResourceTypeCommonType} 资源格式 
* @params administrativeMatters {string} 所属行政事项 
* @params resourceStatus {ResourceStatusCommonType} 资源状态 
* @params language {string} 语种 
* @params onlineResourceLink {string} 在线资源链接 
* @params sourceSystem {string} 来源系统 
* @params spaceScope {string} 空间（地域）范围 
* @params timeScope {string} 时间范围 
* @params openLevel {OpenLevelCommonType} 开放级别 
* @params dataItemDescriptions {DataItemDescriptionCommonType[]} 数据项 
* @params displayDataItemDescriptions {DisplayDataItemDescriptionCommonType[]} 可展示字段 
* @params tagIds {any[]} 标签ID列表 
* @params kettleJobIds {any[]} 关联的作业 
* @params businessResourceId {string} 行业分类资源Id 
* @params serviceResourceId {string} 服务分类资源Id 
* @params domainResourceId {string} 数据领域资源Id 
* @params departmentResourceId {string} 行政单位资源Id 
* @params districtResourceId {string} 行政区域资源Id 
* @params themeResourceId {string} 主题分类资源Id 
* @params dockInfo {DockInfoCommonType} 对接信息(对接状态|方式|说明) 
* @params projectInfo {ProjectInfoCommonType} 项目信息 
* @params totalDownloads {number} 下载量 
* @params totalViews {number} 浏览量 
* @params totalDataItems {number} 记录条数 
* @params fileSize {number} 文件大小(bytes) 
* @params fileCount {number} 文件数量(份) 
* @params dataSize {number} 数据量(条) 
* @params checkErrorDataCount {number} 检查错误的数据数量 
* @params dataRating {number} 数据评分 
* @params bindTable {string} 绑定的库表 
* @params bindSchema {string} 绑定的模式 
* @params dasJobName {string} das job name 
* @params dataSourceId {string} 数据源DataSource的id 
*/
export type EditMetadataReqType = {
    id: string;
    name?: string;
    resourceId?: string;
    parentId?: string;
    code?: string;
    description?: string;
    keyWords?: string;
    developmentMode?: DevelopmentModeCommonType;
    updateFrequency?: UpdateFrequencyCommonType;
    createTime?: string;
    updateTime?: string;
    publishTime?: string;
    resourceType?: ResourceTypeCommonType;
    administrativeMatters?: string;
    resourceStatus?: ResourceStatusCommonType;
    language?: string;
    onlineResourceLink?: string;
    sourceSystem?: string;
    spaceScope?: string;
    timeScope?: string;
    openLevel?: OpenLevelCommonType;
    dataItemDescriptions?: DataItemDescriptionCommonType[];
    displayDataItemDescriptions?: DisplayDataItemDescriptionCommonType[];
    tagIds?: any[];
    kettleJobIds?: any[];
    businessResourceId?: string;
    serviceResourceId?: string;
    domainResourceId?: string;
    departmentResourceId?: string;
    districtResourceId?: string;
    themeResourceId?: string;
    dockInfo?: DockInfoCommonType;
    projectInfo?: ProjectInfoCommonType;
    totalDownloads?: number;
    totalViews?: number;
    totalDataItems?: number;
    fileSize?: number;
    fileCount?: number;
    dataSize?: number;
    checkErrorDataCount?: number;
    dataRating?: number;
    bindTable?: string;
    bindSchema?: string;
    dasJobName?: string;
    dataSourceId?: string;
}


/**
* 删除元数据——请求参数类型定义
* @params id {string} id （必填）
*/
export type DeleteMetadataReqType = {
    id: string;
}


/**
* 元数据对接统计——响应参数类型定义
* @params dockInfoItems {DockInfoItemsCommonType} 统计项
*/
export type GetMetadataDockInfoResType = {
    dockInfoItems: DockInfoItemsCommonType;
}


/**
* 根据（领域、主题、行业、服务、部门、行政区域）查询元数据（分页）——请求参数类型定义
* @params TagIds {any[]} 标签ID列表 
* @params KeyWord {string} 关键字 
* @params DomainResourceId {string} 领域 
* @params ThemeResourceId {string} 主题分类 
* @params BusinessResourceId {string} 行业分类 
* @params DepartmentResourceId {string} 行政单位 
* @params DistrictResourceId {string} 行政区域 
* @params ServiceResourceId {string} 服务分类 
* @params UpdateTimeBegin {string} 更新时间起始点 
* @params UpdateTimeEnd {string} 更新时间终点 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetMetadataReqType = {
    TagIds?: any[];
    KeyWord?: string;
    DomainResourceId?: string;
    ThemeResourceId?: string;
    BusinessResourceId?: string;
    DepartmentResourceId?: string;
    DistrictResourceId?: string;
    ServiceResourceId?: string;
    UpdateTimeBegin?: string;
    UpdateTimeEnd?: string;
    page?: number;
    per_page?: number;
}


/**
* 根据（领域、主题、行业、服务、部门、行政区域）查询元数据（分页）——响应参数类型定义
* @params totalCount {number} 总数
* @params records {MetadataOutCommonType[]} 记录
*/
export type GetMetadataResType = {
    totalCount: number;
    records: MetadataOutCommonType[];
}


/**
* 添加元数据——请求参数类型定义
* @params name {string} 名称 
* @params resourceId {string} 资源id 
* @params parentId {string} 父元数据Id 
* @params code {string} 元数据信息资源编码 
* @params description {string} 元数据描述(摘要) 
* @params keyWords {string} 关键字 
* @params developmentMode {DevelopmentModeCommonType} 开发方式 
* @params updateFrequency {UpdateFrequencyCommonType} 更新频率 
* @params createTime {string} 创建日期 
* @params updateTime {string} 更新日期 
* @params publishTime {string} 发布日期 
* @params resourceType {ResourceTypeCommonType} 资源格式 
* @params administrativeMatters {string} 所属行政事项 
* @params resourceStatus {ResourceStatusCommonType} 资源状态 
* @params language {string} 语种 
* @params onlineResourceLink {string} 在线资源链接 
* @params sourceSystem {string} 来源系统 
* @params spaceScope {string} 空间（地域）范围 
* @params timeScope {string} 时间范围 
* @params openLevel {OpenLevelCommonType} 开放级别 
* @params dataItemDescriptions {DataItemDescriptionCommonType[]} 数据项 
* @params displayDataItemDescriptions {DisplayDataItemDescriptionCommonType[]} 可展示字段 
* @params tagIds {any[]} 标签ID列表 
* @params kettleJobIds {any[]} 关联的作业 
* @params businessResourceId {string} 行业分类资源Id 
* @params serviceResourceId {string} 服务分类资源Id 
* @params domainResourceId {string} 数据领域资源Id 
* @params departmentResourceId {string} 行政单位资源Id 
* @params districtResourceId {string} 行政区域资源Id 
* @params themeResourceId {string} 主题分类资源Id 
* @params dockInfo {DockInfoCommonType} 对接信息(对接状态|方式|说明) 
* @params projectInfo {ProjectInfoCommonType} 项目信息 
* @params totalDownloads {number} 下载量 
* @params totalViews {number} 浏览量 
* @params totalDataItems {number} 记录条数 
* @params fileSize {number} 文件大小(bytes) 
* @params fileCount {number} 文件数量(份) 
* @params dataSize {number} 数据量(条) 
* @params checkErrorDataCount {number} 检查错误的数据数量 
* @params dataRating {number} 数据评分 
* @params bindTable {string} 绑定的库表 
* @params bindSchema {string} 绑定的模式 
* @params dasJobName {string} das job name 
* @params dataSourceId {string} 数据源DataSource的id 
*/
export type AddMetadataReqType = {
    name?: string;
    resourceId?: string;
    parentId?: string;
    code?: string;
    description?: string;
    keyWords?: string;
    developmentMode?: DevelopmentModeCommonType;
    updateFrequency?: UpdateFrequencyCommonType;
    createTime?: string;
    updateTime?: string;
    publishTime?: string;
    resourceType?: ResourceTypeCommonType;
    administrativeMatters?: string;
    resourceStatus?: ResourceStatusCommonType;
    language?: string;
    onlineResourceLink?: string;
    sourceSystem?: string;
    spaceScope?: string;
    timeScope?: string;
    openLevel?: OpenLevelCommonType;
    dataItemDescriptions?: DataItemDescriptionCommonType[];
    displayDataItemDescriptions?: DisplayDataItemDescriptionCommonType[];
    tagIds?: any[];
    kettleJobIds?: any[];
    businessResourceId?: string;
    serviceResourceId?: string;
    domainResourceId?: string;
    departmentResourceId?: string;
    districtResourceId?: string;
    themeResourceId?: string;
    dockInfo?: DockInfoCommonType;
    projectInfo?: ProjectInfoCommonType;
    totalDownloads?: number;
    totalViews?: number;
    totalDataItems?: number;
    fileSize?: number;
    fileCount?: number;
    dataSize?: number;
    checkErrorDataCount?: number;
    dataRating?: number;
    bindTable?: string;
    bindSchema?: string;
    dasJobName?: string;
    dataSourceId?: string;
}


/**
* 根据（领域、主题、行业、服务、部门、行政区域、标签）查询元数据——请求参数类型定义
* @params pageIndex {number} 页码, 从1开始 
* @params pageSize {number} 页容量, [1, 128] 
* @params keyWord {string} 关键字 
* @params domainResourceId {string} 领域 
* @params themeResourceId {string} 主题分类 
* @params businessResourceId {string} 行业分类 
* @params departmentResourceId {string} 行政单位 
* @params districtResourceId {string} 行政区域 
* @params serviceResourceId {string} 服务分类 
* @params updateTimeBegin {string} 更新时间起始点 
* @params updateTimeEnd {string} 更新时间终点 
* @params tagIds {any[]} 标签ID列表 
*/
export type SearchMetadataReqType = {
    pageIndex?: number;
    pageSize?: number;
    keyWord?: string;
    domainResourceId?: string;
    themeResourceId?: string;
    businessResourceId?: string;
    departmentResourceId?: string;
    districtResourceId?: string;
    serviceResourceId?: string;
    updateTimeBegin?: string;
    updateTimeEnd?: string;
    tagIds?: any[];
}


/**
* 根据（领域、主题、行业、服务、部门、行政区域、标签）查询元数据——响应参数类型定义
* @params totalCount {number} 总数
* @params records {MetadataOutCommonType[]} 记录
*/
export type SearchMetadataResType = {
    totalCount: number;
    records: MetadataOutCommonType[];
}


/**
* 分页获取项目列表——请求参数类型定义
* @params keyword {string} 关键词 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetProjectsReqType = {
    keyword?: string;
    page?: number;
    per_page?: number;
}


/**
* 分页获取项目列表——响应参数类型定义
* @params totalCount {number} 总数
* @params records {ProjectOutCommonType[]} 记录
*/
export type GetProjectsResType = {
    totalCount: number;
    records: ProjectOutCommonType[];
}


/**
* 新增项目——请求参数类型定义
* @params name {string} 项目名称 （必填）
* @params resourceId {string} 资源Id 
* @params description {string} 描述 
* @params parentId {string} 父Id 
*/
export type AddProjectReqType = {
    name: string;
    resourceId?: string;
    description?: string;
    parentId?: string;
}


/**
* 新增项目——响应参数类型定义
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params parentId {string} 父Id
* @params totalMetadataCount {number} 元数据统计总数
* @params description {string} 项目描述
* @params themes {ProjectThemeDetailCommonType[]} 项目专题列表
*/
export type AddProjectResType = {
    id: string;
    name: string;
    resourceId: string;
    parentId: string;
    totalMetadataCount: number;
    description: string;
    themes: ProjectThemeDetailCommonType[];
}


/**
* 获取项目（支持资源Id）——请求参数类型定义
* @params id {string} id （必填）
*/
export type GetProjectByIdReqType = {
    id: string;
}


/**
* 获取项目（支持资源Id）——响应参数类型定义
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params parentId {string} 父Id
* @params totalMetadataCount {number} 元数据统计总数
* @params description {string} 项目描述
* @params themes {ProjectThemeDetailCommonType[]} 项目专题列表
*/
export type GetProjectByIdResType = {
    id: string;
    name: string;
    resourceId: string;
    parentId: string;
    totalMetadataCount: number;
    description: string;
    themes: ProjectThemeDetailCommonType[];
}


/**
* 修改项目——请求参数类型定义
* @params id {string} id （必填）
* @params name {string} 项目名称 （必填）
* @params resourceId {string} 资源Id 
* @params description {string} 描述 
* @params parentId {string} 父Id 
*/
export type EditProjectReqType = {
    id: string;
    name: string;
    resourceId?: string;
    description?: string;
    parentId?: string;
}


/**
* 删除项目——请求参数类型定义
* @params id {string} id （必填）
*/
export type DeleteProjectReqType = {
    id: string;
}


/**
* 获取项目详情（支持资源Id）——请求参数类型定义
* @params id {string} id （必填）
*/
export type GetProjectDetailByIdReqType = {
    id: string;
}


/**
* 获取项目详情（支持资源Id）——响应参数类型定义
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params themes {ThemeDetailItemCommonType[]} 项目专题列表
* @params parentId {string} 父Id
* @params description {string} 项目描述
*/
export type GetProjectDetailByIdResType = {
    id: string;
    name: string;
    resourceId: string;
    themes: ThemeDetailItemCommonType[];
    parentId: string;
    description: string;
}


/**
* 导入项目专题——请求参数类型定义
* @params importProjects {ProjectDetailItemCommonType[]} 项目 （必填）
*/
export type ImportProjectsReqType = {
    importProjects: ProjectDetailItemCommonType[];
}


/**
* 根据项目Id创建模板资源库——请求参数类型定义
* @params id {string} id （必填）
*/
export type AddResourceDbsByProjectIdReqType = {
    id: string;
}


/**
* 查询资源库树——请求参数类型定义
* @params ProductId {string} ProductId 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetResourceDbTreeReqType = {
    ProductId?: string;
    page?: number;
    per_page?: number;
}


/**
* 查询资源库树——响应参数类型定义
* @params totalCount {number} 总数
* @params records {NodeTreeOutCommonType[]} 记录
*/
export type GetResourceDbTreeResType = {
    totalCount: number;
    records: NodeTreeOutCommonType[];
}


/**
* 查询符合条件的资源库——请求参数类型定义
* @params keyword {string} 模糊匹配关键字 
* @params SelectDataItems {any} 查询条件 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetResourceDbReqType = {
    keyword?: string;
    SelectDataItems?: any;
    page?: number;
    per_page?: number;
}


/**
* 查询符合条件的资源库——响应参数类型定义
* @params totalCount {number} 总数
* @params records {ResourceDbOutCommonType[]} 记录
*/
export type GetResourceDbResType = {
    totalCount: number;
    records: ResourceDbOutCommonType[];
}


/**
* 添加资源库——请求参数类型定义
* @params name {string} 名称 
* @params resourceId {string}  
* @params parentId {string} 父Id 
* @params resourceDbType {ResourceDbTypeCommonType} 资源类型 
* @params relationship {RelationshipCommonType} 关联的信息 
* @params extension {string} 拓展信息 
* @params productId {string} ProductId 
*/
export type AddResourceDbReqType = {
    name?: string;
    resourceId?: string;
    parentId?: string;
    resourceDbType?: ResourceDbTypeCommonType;
    relationship?: RelationshipCommonType;
    extension?: string;
    productId?: string;
}


/**
* 查询资源库详情——请求参数类型定义
* @params id {string} id （必填）
*/
export type GetResourceDbByIdReqType = {
    id: string;
}


/**
* 查询资源库详情——响应参数类型定义
* @params id {string} id
* @params name {string} 名称
* @params resourceId {string} 资源id（数据同步使用）
* @params parentName {string} 父名称
* @params parentId {string} 父Id
* @params resourceDbType {ResourceDbTypeCommonType} 资源类型
* @params relationship {RelationshipCommonType} 元数据信息
* @params extension {string} 拓展信息(资源库的筛选拓展信息)
* @params productId {string} ProductId
*/
export type GetResourceDbByIdResType = {
    id: string;
    name: string;
    resourceId: string;
    parentName: string;
    parentId: string;
    resourceDbType: ResourceDbTypeCommonType;
    relationship: RelationshipCommonType;
    extension: string;
    productId: string;
}


/**
* 修改资源库——请求参数类型定义
* @params id {string} id （必填）
* @params name {string} 名称 
* @params resourceId {string}  
* @params parentId {string} 父Id 
* @params resourceDbType {ResourceDbTypeCommonType} 资源类型 
* @params relationship {RelationshipCommonType} 关联的信息 
* @params extension {string} 拓展信息 
* @params productId {string} ProductId 
*/
export type EditResourceDbReqType = {
    id: string;
    name?: string;
    resourceId?: string;
    parentId?: string;
    resourceDbType?: ResourceDbTypeCommonType;
    relationship?: RelationshipCommonType;
    extension?: string;
    productId?: string;
}


/**
* 删除资源库——请求参数类型定义
* @params id {string} id （必填）
*/
export type DeleteResourceDbReqType = {
    id: string;
}


/**
* 批量Ids/ResourceIDs/Numbers获取资源库集合（带元数据和数据源,ps:Number为图层LayerId）——请求参数类型定义
* @params pageIndex {number} 页码, 从1开始 
* @params pageSize {number} 页容量, [1, 128] 
* @params ids {any[]} Id集合 
* @params productId {string} 项目Id 
*/
export type GetResourceDbsByIdsReqType = {
    pageIndex?: number;
    pageSize?: number;
    ids?: any[];
    productId?: string;
}


/**
* 批量Ids/ResourceIDs/Numbers获取资源库集合（带元数据和数据源,ps:Number为图层LayerId）——响应参数类型定义
* @params totalCount {number} 总数
* @params records {ResourceDbItemCommonType[]} 记录
*/
export type GetResourceDbsByIdsResType = {
    totalCount: number;
    records: ResourceDbItemCommonType[];
}


/**
* 通过productId获取资源库集合（带元数据和数据源）——请求参数类型定义
* @params pageIndex {number} 页码, 从1开始 
* @params pageSize {number} 页容量, [1, 128] 
* @params productId {string} 产品Id 
*/
export type GetResourceDbsByIdReqType = {
    pageIndex?: number;
    pageSize?: number;
    productId?: string;
}


/**
* 通过productId获取资源库集合（带元数据和数据源）——响应参数类型定义
* @params totalCount {number} 总数
* @params records {ResourceDbItemCommonType[]} 记录
*/
export type GetResourceDbsByIdResType = {
    totalCount: number;
    records: ResourceDbItemCommonType[];
}


/**
* 导出资源库——请求参数类型定义
* @params productId {string} 产品Id 
*/
export type ExportResourceDbsReqType = {
    productId?: string;
}


/**
* 导出资源库——响应参数类型定义
* @params totalCount {number} 总数
* @params records {ResourceDbItemCommonType[]} 记录
*/
export type ExportResourceDbsResType = {
    totalCount: number;
    records: ResourceDbItemCommonType[];
}


/**
* 导入资源库（带元数据和数据源）——请求参数类型定义
* @params importResourceDbs {ResourceDbItemCommonType[]} 导入资源库列表 
*/
export type ImportResourceDbsReqType = {
    importResourceDbs?: ResourceDbItemCommonType[];
}


/**
* 聚合资源库为父级——请求参数类型定义
* @params pageIndex {number} 页码, 从1开始 
* @params pageSize {number} 页容量, [1, 128] 
* @params ids {any[]} Id集合 
* @params productId {string} 项目Id 
*/
export type MergeResourceDbReqType = {
    pageIndex?: number;
    pageSize?: number;
    ids?: any[];
    productId?: string;
}


/**
* 聚合资源库为父级——响应参数类型定义
* @params totalCount {number} 总数
* @params records {ResourceDbTreeNodeOutCommonType[]} 记录
*/
export type MergeResourceDbResType = {
    totalCount: number;
    records: ResourceDbTreeNodeOutCommonType[];
}


/**
* 查询资源库关联的元数据——请求参数类型定义
* @params id {string} id （必填）
*/
export type GetMetadataByResourceDbReqType = {
    id: string;
}


/**
* 查询资源库关联的元数据——响应参数类型定义
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params code {string} 元数据信息资源编码
* @params description {string} 元数据描述(摘要)
* @params keyWords {string} 关键字
* @params developmentMode {DevelopmentModeCommonType} 开发方式
* @params updateFrequency {UpdateFrequencyCommonType} 更新频率
* @params createTime {string} 创建日期
* @params updateTime {string} 更新日期
* @params publishTime {string} 发布日期
* @params resourceType {ResourceTypeCommonType} 资源格式
* @params administrativeMatters {string} 所属行政事项
* @params resourceStatus {ResourceStatusCommonType} 资源状态
* @params language {string} 语种
* @params onlineResourceLink {string} 在线资源链接
* @params sourceSystem {string} 来源系统
* @params spaceScope {string} 空间（地域）范围
* @params timeScope {string} 时间范围
* @params openLevel {OpenLevelCommonType} 开放级别
* @params dataItemDescriptions {DataItemDescriptionCommonType[]} 数据项
* @params displayDataItemDescriptions {DisplayDataItemDescriptionCommonType[]} 可展示字段
* @params tagIds {any[]} 标签ID列表
* @params kettleJobIds {any[]} 关联的作业
* @params businessOut {BusinessOutCommonType} 行业分类
* @params serviceOut {ServiceOutCommonType} 服务分类
* @params domainOut {DomainOutCommonType} 数据领域
* @params departmentOut {DepartmentOutCommonType} 行政单位
* @params districtOut {DistrictOutCommonType} 行政区域
* @params themeOut {ThemeOutCommonType} 主题分类
* @params dockInfo {DockInfoCommonType} 对接信息(对接状态|方式|说明)
* @params projectInfo {ProjectInfoCommonType} 项目信息
* @params totalDownloads {number} 下载量
* @params totalViews {number} 浏览量
* @params totalDataItems {number} 记录条数
* @params fileSize {number} 文件大小(bytes)
* @params fileCount {number} 文件数量(份)
* @params dataSize {number} 数据量(条)
* @params checkErrorDataCount {number} 检查错误的数据数量
* @params dataRating {number} 数据评分
* @params bindTable {string} 绑定的库表
* @params bindSchema {string} 绑定的模式
* @params dasJobName {string} das job name
* @params dataSourceId {string} 数据源DataSource的id
* @params selectDataItems {any} 外部数据筛选类型数据
*/
export type GetMetadataByResourceDbResType = {
    id: string;
    name: string;
    resourceId: string;
    code: string;
    description: string;
    keyWords: string;
    developmentMode: DevelopmentModeCommonType;
    updateFrequency: UpdateFrequencyCommonType;
    createTime: string;
    updateTime: string;
    publishTime: string;
    resourceType: ResourceTypeCommonType;
    administrativeMatters: string;
    resourceStatus: ResourceStatusCommonType;
    language: string;
    onlineResourceLink: string;
    sourceSystem: string;
    spaceScope: string;
    timeScope: string;
    openLevel: OpenLevelCommonType;
    dataItemDescriptions: DataItemDescriptionCommonType[];
    displayDataItemDescriptions: DisplayDataItemDescriptionCommonType[];
    tagIds: any[];
    kettleJobIds: any[];
    businessOut: BusinessOutCommonType;
    serviceOut: ServiceOutCommonType;
    domainOut: DomainOutCommonType;
    departmentOut: DepartmentOutCommonType;
    districtOut: DistrictOutCommonType;
    themeOut: ThemeOutCommonType;
    dockInfo: DockInfoCommonType;
    projectInfo: ProjectInfoCommonType;
    totalDownloads: number;
    totalViews: number;
    totalDataItems: number;
    fileSize: number;
    fileCount: number;
    dataSize: number;
    checkErrorDataCount: number;
    dataRating: number;
    bindTable: string;
    bindSchema: string;
    dasJobName: string;
    dataSourceId: string;
    selectDataItems: any;
}


/**
* 查询外部数据——请求参数类型定义
* @params id {string} id （必填）
* @params pageIndex {number} 页码, 从1开始 
* @params pageSize {number} 页容量, [1, 128] 
* @params keyword {string} 模糊匹配关键字 
* @params selectDataItems {any} 查询条件 
*/
export type SearchExternalResourceReqType = {
    id: string;
    pageIndex?: number;
    pageSize?: number;
    keyword?: string;
    selectDataItems?: any;
}


/**
* 查询外部数据——响应参数类型定义
* @params totalCount {number} 总数
* @params records {any[]} 记录
*/
export type SearchExternalResourceResType = {
    totalCount: number;
    records: any[];
}


/**
* 统计资源库子项对应的外部数据总量——请求参数类型定义
* @params id {string} id （必填）
* @params areaCode {string} 行政区域码 
*/
export type GetExternalResourceAmountReqType = {
    id: string;
    areaCode?: string;
}


/**
* 统计资源库子项对应的外部数据总量——响应参数类型定义
* @params id {string} 资源库id
* @params parentId {string} 父id
* @params name {string} 资源名称
* @params amount {number} 统计数量
* @params isLeaf {boolean} 是否为叶子节点
*/
export type GetExternalResourceAmountResType = {
    id: string;
    parentId: string;
    name: string;
    amount: number;
    isLeaf: boolean;
}


/**
* 新增外部数据——请求参数类型定义
* @params id {string} id （必填）
* @params externalResourceObject {any} 外部资源数据项(key，value)集合(修改时需带主键信息) （必填）
*/
export type AddExternalResourceReqType = {
    id: string;
    externalResourceObject: any;
}


/**
* 修改外部数据——请求参数类型定义
* @params id {string} id （必填）
* @params externalResourceObject {any} 外部资源数据项(key，value)集合(修改时需带主键信息) （必填）
*/
export type EditExternalResourceReqType = {
    id: string;
    externalResourceObject: any;
}


/**
* 删除外部数据——请求参数类型定义
* @params id {string} id （必填）
* @params primaryKey {string} 主键key （必填）
* @params primaryValue {string} 主键value （必填）
*/
export type DeleteExternalResourceReqType = {
    id: string;
    primaryKey: string;
    primaryValue: string;
}


/**
* 导出资源库条目——请求参数类型定义
* @params productId {string} 产品Id 
* @params resourceDbId {string} 资源库Id 
*/
export type ExportExternalDataEntryReqType = {
    productId?: string;
    resourceDbId?: string;
}


/**
* 导出资源库条目——响应参数类型定义
* @params externalDataEntries {ExportExternalDataEntryOutCommonType[]} 资源库条目导出实体集合
* @params resourceDbs {ExportResourceDbOutCommonType[]} 资源库导出实体集合
* @params metadatas {ExportMetadataOutCommonType[]} 元数据导出实体集合
* @params dataSources {ExportDataSourceOutCommonType[]} 数据源导出实体集合
*/
export type ExportExternalDataEntryResType = {
    externalDataEntries: ExportExternalDataEntryOutCommonType[];
    resourceDbs: ExportResourceDbOutCommonType[];
    metadatas: ExportMetadataOutCommonType[];
    dataSources: ExportDataSourceOutCommonType[];
}


/**
* 导入资源库条目——请求参数类型定义
* @params externalDataEntries {ImportExternalDataEntryInCommonType[]} 资源库条目导入实体集合 
* @params resourceDbs {ImportResourceDbInCommonType[]} 资源库导入实体集合 
* @params metadatas {ImportMetadataInCommonType[]} 元数据导入实体集合 
* @params dataSources {ImportDataSourceInCommonType[]} 数据源导入实体集合 
*/
export type ImportExternalDataEntryReqType = {
    externalDataEntries?: ImportExternalDataEntryInCommonType[];
    resourceDbs?: ImportResourceDbInCommonType[];
    metadatas?: ImportMetadataInCommonType[];
    dataSources?: ImportDataSourceInCommonType[];
}


/**
* 导出资源库条目Excel模版——请求参数类型定义
* @params id {string} id （必填）
*/
export type ExportExternalDataEntryExcelTemplateReqType = {
    id: string;
}


/**
* Excel导入资源库条目——请求参数类型定义
* @params id {string} id （必填）
*/
export type ImportExcelExternalDataEntryReqType = {
    id: string;
}


/**
* 批量删除外部数据——请求参数类型定义
* @params id {string} id （必填）
* @params primaryKey {string} 主键key （必填）
* @params primaryValues {any[]} 主键值集合 （必填）
*/
export type BatchDeleteExternalResourceReqType = {
    id: string;
    primaryKey: string;
    primaryValues: any[];
}


/**
* 获取服务分类列表——响应参数类型定义
* @params totalCount {number} 总数
* @params records {ServiceOutCommonType[]} 记录
*/
export type GetServicesResType = {
    totalCount: number;
    records: ServiceOutCommonType[];
}


/**
* 返回近30天的同步记录信息——请求参数类型定义
* @params id {string} id （必填）
*/
export type GetThirtyEtlJobWriteCountReqType = {
    id: string;
}


/**
* 返回近30天的同步记录信息——响应参数类型定义
* @params totalCount {number} 总数
* @params records {TimeValueCalculateOutCommonType[]} 记录
*/
export type GetThirtyEtlJobWriteCountResType = {
    totalCount: number;
    records: TimeValueCalculateOutCommonType[];
}


/**
* 返回近30天的执行记录信息——请求参数类型定义
* @params id {string} id 
*/
export type GetLastThirtyTimesRecordReqType = {
    id?: string;
}


/**
* 返回近30天的执行记录信息——响应参数类型定义
* @params source {any[]} 字段信息
*/
export type GetLastThirtyTimesRecordResType = {
    source: any[];
}


/**
* 返回近30天的执行评分信息——请求参数类型定义
* @params id {string} id 
*/
export type GetLastThirtyTimesRaiseReqType = {
    id?: string;
}


/**
* 返回近30天的执行评分信息——响应参数类型定义
* @params source {any[]} 字段信息
*/
export type GetLastThirtyTimesRaiseResType = {
    source: any[];
}


/**
* 统计元数据数量——响应参数类型定义
* @params categories {number} 总数
* @params yesterday {number} 昨天的总数
* @params today {number} 今天的总数
*/
export type GetMetadataCountResType = {
    categories: number;
    yesterday: number;
    today: number;
}


/**
* 统计规则数量——响应参数类型定义
* @params categories {number} 总数
* @params yesterday {number} 昨天的总数
* @params today {number} 今天的总数
*/
export type GetCheckRuleCountResType = {
    categories: number;
    yesterday: number;
    today: number;
}


/**
* 统计元数据的活跃度——请求参数类型定义
* @params timeType {number}  （必填）
*/
export type GetMetadataActivityReqType = {
    timeType: number;
}


/**
* 统计元数据的活跃度——响应参数类型定义
* @params category {string} 元数据名称
* @params value {undefined} 
*/
export type GetMetadataActivityResType = {
    category: string;
    value: undefined;
}


/**
* 获取标签列表——响应参数类型定义
* @params totalCount {number} 总数
* @params records {TagsOutCommonType[]} 记录
*/
export type GetTagsResType = {
    totalCount: number;
    records: TagsOutCommonType[];
}


/**
* 分页获取专题列表——请求参数类型定义
* @params keyword {string} 关键词 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetThemesReqType = {
    keyword?: string;
    page?: number;
    per_page?: number;
}


/**
* 分页获取专题列表——响应参数类型定义
* @params totalCount {number} 总数
* @params records {ThemeOutCommonType[]} 记录
*/
export type GetThemesResType = {
    totalCount: number;
    records: ThemeOutCommonType[];
}


/**
* 新增专题——请求参数类型定义
* @params name {string} 专题名称 （必填）
* @params resourceId {string} 资源Id 
* @params description {string} 描述 
* @params parentId {string} 父Id 
* @params code {string} 主题编码 
* @params projectId {string} 所属项目Id 
*/
export type AddThemeReqType = {
    name: string;
    resourceId?: string;
    description?: string;
    parentId?: string;
    code?: string;
    projectId?: string;
}


/**
* 新增专题——响应参数类型定义
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params parentId {string} 父主题Id
* @params description {string} 主题描述
* @params code {string} 主题编码
* @params totalMetadataCount {number} 
* @params projectId {string} 所属项目Id
*/
export type AddThemeResType = {
    id: string;
    name: string;
    resourceId: string;
    parentId: string;
    description: string;
    code: string;
    totalMetadataCount: number;
    projectId: string;
}


/**
* 获取专题（支持资源Id）——请求参数类型定义
* @params id {string} id （必填）
*/
export type GetThemeByIdReqType = {
    id: string;
}


/**
* 获取专题（支持资源Id）——响应参数类型定义
* @params id {string} 
* @params name {string} 
* @params resourceId {string} 
* @params parentId {string} 父主题Id
* @params description {string} 主题描述
* @params code {string} 主题编码
* @params totalMetadataCount {number} 
* @params projectId {string} 所属项目Id
*/
export type GetThemeByIdResType = {
    id: string;
    name: string;
    resourceId: string;
    parentId: string;
    description: string;
    code: string;
    totalMetadataCount: number;
    projectId: string;
}


/**
* 修改专题——请求参数类型定义
* @params id {string} id （必填）
* @params name {string} 专题名称 （必填）
* @params resourceId {string} 资源Id 
* @params description {string} 描述 
* @params parentId {string} 父Id 
* @params code {string} 主题编码 
* @params projectId {string} 所属项目Id 
*/
export type EditThemeReqType = {
    id: string;
    name: string;
    resourceId?: string;
    description?: string;
    parentId?: string;
    code?: string;
    projectId?: string;
}


/**
* 删除专题——请求参数类型定义
* @params id {string} id （必填）
*/
export type DeleteThemeReqType = {
    id: string;
}

