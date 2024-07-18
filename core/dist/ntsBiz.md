
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
* undefined
*/
type JTokenCommonType = 'array'



/**
* 筛选条件
* @params key {string} 键
* @params value {string} 值
* @params operator {OperatorTypeCommonType} 操作类型
*/
type ConditionCommonType = {
    key?: string;
    value?: string;
    operator?: OperatorTypeCommonType;
}


/**
* 通知结果
* @params taskId {string} 任务id
* @params message {string} Message
* @params success {boolean} 是否成功
*/
type NotifyResultCommonType = {
    taskId?: string;
    message?: string;
    success?: boolean;
}


/**
* 值范围
* @params id {string} ID
* @params name {string} 名称
*/
type RangeValueCommonType = {
    id?: string;
    name?: string;
}


/**
* 替换表达式
* @params operator {OperatorTypeCommonType} 操作类型
* @params value {string} 比较值
* @params replaceValue {string} 替换值
*/
type ReplaceExpressionCommonType = {
    operator?: OperatorTypeCommonType;
    value?: string;
    replaceValue?: string;
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {ConditionTemplateOutCommonType[]} 记录
*/
type ConditionTemplateOutReqCommonType = {
    totalCount?: number;
    records?: ConditionTemplateOutCommonType[];
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {I18NConfigOutCommonType[]} 记录
*/
type I18NConfigOutReqCommonType = {
    totalCount?: number;
    records?: I18NConfigOutCommonType[];
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {NotifyConfigOutCommonType[]} 记录
*/
type NotifyConfigOutReqCommonType = {
    totalCount?: number;
    records?: NotifyConfigOutCommonType[];
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {NotifyRecordOutCommonType[]} 记录
*/
type NotifyRecordOutReqCommonType = {
    totalCount?: number;
    records?: NotifyRecordOutCommonType[];
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {NotifyTypeInfoCommonType[]} 记录
*/
type NotifyTypeInfoReqCommonType = {
    totalCount?: number;
    records?: NotifyTypeInfoCommonType[];
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {PlaceholderOutCommonType[]} 记录
*/
type PlaceholderOutReqCommonType = {
    totalCount?: number;
    records?: PlaceholderOutCommonType[];
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {SceneOutCommonType[]} 记录
*/
type SceneOutReqCommonType = {
    totalCount?: number;
    records?: SceneOutCommonType[];
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {SchemeOutCommonType[]} 记录
*/
type SchemeOutReqCommonType = {
    totalCount?: number;
    records?: SchemeOutCommonType[];
}


/**
* 分页查询结果
* @params totalCount {number} 总数
* @params records {TemplateOutCommonType[]} 记录
*/
type TemplateOutReqCommonType = {
    totalCount?: number;
    records?: TemplateOutCommonType[];
}


/**
* 解析类型
*/
type AnalysisTypeCommonType =  0 | 1 ;


/**
* 字段类型【int,string,dateTime】
*/
type FieldTypeCommonType =  0 | 1 | 2 ;


/**
* i18n支持语言类型
*/
type LanguageTypeCommonType =  0 | 1 ;


/**
* 发送状态
*/
type NotifyStatusCommonType =  0 | 1 | 2 ;


/**
* 通知类型
*/
type NotifyTypesCommonType =  1 | 2 | 4 | 8 | 16 | 32 ;


/**
* 操作符类型
*/
type OperatorTypeCommonType =  1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 ;


/**
* 占位符类型
*/
type PlaceHolderTypeCommonType =  0 ;


/**
* 通知源(新)
* @params scene {string} 运用场景
* @params notifyType {NotifyTypesCommonType} 通知类型，支持多种类型
* @params notifyContent {any} 通知内容
* @params recipients {RecipientCommonType[]} 接收人
* @params jumpUrl {string} 跳转地址
* @params title {string} 标题
* @params data {any} 业务对象
* @params id {string} 标识ID
* @params source {string} 业务来源
*/
type NotifySourceCommonType = {
    scene?: string;
    notifyType?: NotifyTypesCommonType;
    notifyContent?: any;
    recipients?: RecipientCommonType[];
    jumpUrl?: string;
    title?: string;
    data?: any;
    id?: string;
    source?: string;
}


/**
* 通知接收人
* @params name {string} 通知对象名称
* @params userId {string} 用户id
* @params mobile {string} 电话
* @params mail {string} 邮件
* @params groupId {string} 组ID
*/
type RecipientCommonType = {
    name?: string;
    userId?: string;
    mobile?: string;
    mail?: string;
    groupId?: string;
}


/**
* 条件模板输入
* @params name {string} 名称
* @params scene {string} 场景
* @params conditions {ConditionCommonType[]} 筛选条件
* @params templateIds {any[]} 模板id（逗号分割的多个ID）
*/
type ConditionTemplateInCommonType = {
    name?: string;
    scene?: string;
    conditions?: ConditionCommonType[];
    templateIds?: any[];
}


/**
* 是否启用更新
* @params isEnable {boolean} 是否启用
*/
type EnableNotifyConfigInCommonType = {
    isEnable?: boolean;
}


/**
* i18n配置
* @params key {string} 键
* @params languageType {LanguageTypeCommonType} 语言类型
* @params value {any} 值对象
*/
type I18NConfigInCommonType = {
    key?: string;
    languageType?: LanguageTypeCommonType;
    value?: any;
}


/**
* 通知配置
* @params name {string} 通知策略名称
* @params scene {string} 场景
* @params type {NotifyTypesCommonType} 通知类型
* @params conditions {ConditionCommonType[]} 筛选条件
* @params isEnable {boolean} 是否启用
* @params templates {TemplateContentInCommonType[]} 模版
* @params recipients {RecipientCommonType[]} 模板默认接收人
*/
type NotifyConfigInCommonType = {
    name?: string;
    scene?: string;
    type?: NotifyTypesCommonType;
    conditions?: ConditionCommonType[];
    isEnable?: boolean;
    templates?: TemplateContentInCommonType[];
    recipients?: RecipientCommonType[];
}


/**
* 占位符
* @params name {string} 占位符名称
* @params type {PlaceHolderTypeCommonType} 类型
* @params key {string} 键
* @params value {string} 值
* @params isEnableExpression {boolean} 是否启用表达式替换
* @params replaceExpressions {ReplaceExpressionCommonType[]} 替换表达式
*/
type PlaceholderInCommonType = {
    name: string;
    type?: PlaceHolderTypeCommonType;
    key?: string;
    value?: string;
    isEnableExpression?: boolean;
    replaceExpressions?: ReplaceExpressionCommonType[];
}


/**
* 场景
* @params id {string} ID
* @params name {string} 名称
* @params tips {string} 提示：若未设置触发条件，则发生告警时自动通知
* @params recipientTips {string} 接收对象提示：设备联系人
* @params notifyExample {string} 通知样例
*/
type SceneInCommonType = {
    id?: string;
    name?: string;
    tips?: string;
    recipientTips?: string;
    notifyExample?: string;
}


/**
* SchemeIn
* @params scene {string} 场景
* @params key {string} 支持字段键名
* @params type {FieldTypeCommonType} 字段类型
* @params allowNull {boolean} 是否允许为空
* @params description {string} 描述
* @params example {string} 样例数据
* @params operator {OperatorTypeCommonType} 过滤操作符
* @params isDynamicRangeValue {boolean} 是否动态的值范围
* @params rangeValue {undefined} 静态值范围-动态从对应接口获取
*/
type SchemeInCommonType = {
    scene?: string;
    key?: string;
    type?: FieldTypeCommonType;
    allowNull?: boolean;
    description?: string;
    example?: string;
    operator?: OperatorTypeCommonType;
    isDynamicRangeValue?: boolean;
    rangeValue?: undefined;
}


/**
* 模版内容
* @params notifyType {NotifyTypesCommonType} 通知类型
* @params content {string} 通知内容模板
* @params defaultWebHookUrl {string} 默认webHookUrl
* @params title {string} 标题(主题)
* @params secondTitle {string} 副标题（第二标题）
* @params jumpUrl {string} 跳转地址
* @params priorityPhoneType {string} 优先电话类型
*/
type TemplateContentInCommonType = {
    notifyType?: NotifyTypesCommonType;
    content: string;
    defaultWebHookUrl?: string;
    title?: string;
    secondTitle?: string;
    jumpUrl?: string;
    priorityPhoneType?: string;
}


/**
* 模板入参
* @params scene {string} 场景
* @params notifyType {NotifyTypesCommonType} 通知类型
* @params content {string} 通知内容模板
* @params isEnable {boolean} 是否可用
* @params isDefault {boolean} 是否默认通知模板
* @params sender {string} 发送者
* @params defaultWebHookUrl {string} 默认webHookUrl
* @params title {string} 标题(主题)
* @params secondTitle {string} 副标题（第二标题）
* @params jumpUrl {string} 跳转地址
* @params recipients {RecipientCommonType[]} 模板默认接收人
* @params priorityPhoneType {string} 优先电话类型
*/
type TemplateInCommonType = {
    scene: string;
    notifyType?: NotifyTypesCommonType;
    content: string;
    isEnable?: boolean;
    isDefault?: boolean;
    sender?: string;
    defaultWebHookUrl?: string;
    title?: string;
    secondTitle?: string;
    jumpUrl?: string;
    recipients?: RecipientCommonType[];
    priorityPhoneType?: string;
}


/**
* 条件模板
* @params id {string} id
* @params name {string} 名称
* @params scene {string} 场景
* @params conditions {ConditionCommonType[]} 筛选条件
* @params templateIds {any[]} 模板id（逗号分割的多个ID）
*/
type ConditionTemplateOutCommonType = {
    id?: string;
    name?: string;
    scene?: string;
    conditions?: ConditionCommonType[];
    templateIds?: any[];
}


/**
* i18n配置
* @params id {string} id
* @params key {string} 键
* @params languageType {LanguageTypeCommonType} 语言类型
* @params value {any} 值对象
*/
type I18NConfigOutCommonType = {
    id?: string;
    key?: string;
    languageType?: LanguageTypeCommonType;
    value?: any;
}


/**
* 通知配置
* @params id {string} id
* @params name {string} 名称
* @params scene {string} 场景
* @params type {NotifyTypesCommonType} 通知类型
* @params conditions {ConditionCommonType[]} 筛选条件
* @params isEnable {boolean} 是否启用
* @params createTime {string} 创建时间
* @params updateTime {string} 更新时间
* @params notifyTypes {NotifyTypeInfoCommonType[]} 通知方式
* @params templates {TemplateContentOutCommonType[]} 模版
* @params recipients {RecipientCommonType[]} 模板默认接收人
*/
type NotifyConfigDetailOutCommonType = {
    id?: string;
    name?: string;
    scene?: string;
    type?: NotifyTypesCommonType;
    conditions?: ConditionCommonType[];
    isEnable?: boolean;
    createTime?: string;
    updateTime?: string;
    notifyTypes?: NotifyTypeInfoCommonType[];
    templates?: TemplateContentOutCommonType[];
    recipients?: RecipientCommonType[];
}


/**
* 通知配置
* @params id {string} id
* @params name {string} 名称
* @params scene {string} 场景
* @params type {NotifyTypesCommonType} 通知类型
* @params conditions {ConditionCommonType[]} 筛选条件
* @params isEnable {boolean} 是否启用
* @params createTime {string} 创建时间
* @params updateTime {string} 更新时间
* @params notifyTypes {NotifyTypeInfoCommonType[]} 通知方式
*/
type NotifyConfigOutCommonType = {
    id?: string;
    name?: string;
    scene?: string;
    type?: NotifyTypesCommonType;
    conditions?: ConditionCommonType[];
    isEnable?: boolean;
    createTime?: string;
    updateTime?: string;
    notifyTypes?: NotifyTypeInfoCommonType[];
}


/**
* 通知记录
* @params id {string} id
* @params content {string} 发送内容
* @params type {NotifyTypesCommonType} 类型
* @params sender {string} 发送者
* @params webHookUrl {string} 发送地址
* @params title {string} 主题
* @params scene {string} 场景
* @params recipient {string} 接收人
* @params traceId {string} 流水号
* @params resultDescription {string} 结果描述
* @params status {NotifyStatusCommonType} 发送状态
* @params arrivalTime {string} 送达时间
* @params createTime {string} 创建时间
*/
type NotifyRecordOutCommonType = {
    id?: string;
    content?: string;
    type?: NotifyTypesCommonType;
    sender?: string;
    webHookUrl?: string;
    title?: string;
    scene?: string;
    recipient?: string;
    traceId?: string;
    resultDescription?: string;
    status?: NotifyStatusCommonType;
    arrivalTime?: string;
    createTime?: string;
}


/**
* 通知类型信息
* @params type {NotifyTypesCommonType} 类型
* @params name {string} 名称
*/
type NotifyTypeInfoCommonType = {
    type?: NotifyTypesCommonType;
    name?: string;
}


/**
* 占位符
* @params id {string} 占位符Id
* @params name {string} 名称
* @params type {PlaceHolderTypeCommonType} 类型
* @params key {string} 键
* @params value {string} 值
* @params isEnableExpression {boolean} 是否启用表达式替换
* @params replaceExpressions {ReplaceExpressionCommonType[]} 替换表达式
*/
type PlaceholderOutCommonType = {
    id?: string;
    name?: string;
    type?: PlaceHolderTypeCommonType;
    key?: string;
    value?: string;
    isEnableExpression?: boolean;
    replaceExpressions?: ReplaceExpressionCommonType[];
}


/**
* 场景
* @params id {string} ID
* @params name {string} 名称
* @params tips {string} 提示：若未设置触发条件，则发生告警时自动通知
* @params recipientTips {string} 接收对象提示：设备联系人
* @params notifyExample {string} 通知样例
*/
type SceneOutCommonType = {
    id?: string;
    name?: string;
    tips?: string;
    recipientTips?: string;
    notifyExample?: string;
}


/**
* SchemeOut
* @params id {string} id
* @params scene {string} 场景
* @params key {string} 支持字段键名
* @params type {FieldTypeCommonType} 字段类型
* @params allowNull {boolean} 是否允许为空
* @params example {string} 样例数据
* @params operator {OperatorTypeCommonType} 过滤操作符
* @params analysisType {AnalysisTypeCommonType} 解析类型
* @params isDynamicRangeValue {boolean} 是否动态的值范围
* @params rangeValues {RangeValueCommonType[]} 静态值范围-动态从对应接口获取
* @params description {string} 描述
*/
type SchemeOutCommonType = {
    id?: string;
    scene?: string;
    key?: string;
    type?: FieldTypeCommonType;
    allowNull?: boolean;
    example?: string;
    operator?: OperatorTypeCommonType;
    analysisType?: AnalysisTypeCommonType;
    isDynamicRangeValue?: boolean;
    rangeValues?: RangeValueCommonType[];
    description?: string;
}


/**
* 模版内容
* @params id {string} 模版ID
* @params notifyType {NotifyTypesCommonType} 通知类型
* @params content {string} 通知内容模板
* @params defaultWebHookUrl {string} 默认webHookUrl
* @params title {string} 标题(主题)
* @params secondTitle {string} 副标题（第二标题）
* @params jumpUrl {string} 跳转地址
* @params priorityPhoneType {string} 优先电话类型
*/
type TemplateContentOutCommonType = {
    id?: string;
    notifyType?: NotifyTypesCommonType;
    content?: string;
    defaultWebHookUrl?: string;
    title?: string;
    secondTitle?: string;
    jumpUrl?: string;
    priorityPhoneType?: string;
}


/**
* 模板
* @params id {string} 模板ID
* @params scene {string} 场景
* @params notifyType {NotifyTypesCommonType} 通知类型
* @params content {string} 通知内容模板
* @params isEnable {boolean} 是否可用
* @params isDefault {boolean} 是否默认通知模板
* @params sender {string} 发送者
* @params defaultWebHookUrl {string} 默认webHookUrl
* @params title {string} 标题(主题)
* @params secondTitle {string} 副标题（第二标题）
* @params jumpUrl {string} 跳转地址
* @params recipients {RecipientCommonType[]} 模板默认接收人
* @params priorityPhoneType {string} 优先电话类型
*/
type TemplateOutCommonType = {
    id?: string;
    scene?: string;
    notifyType?: NotifyTypesCommonType;
    content?: string;
    isEnable?: boolean;
    isDefault?: boolean;
    sender?: string;
    defaultWebHookUrl?: string;
    title?: string;
    secondTitle?: string;
    jumpUrl?: string;
    recipients?: RecipientCommonType[];
    priorityPhoneType?: string;
}


----

/**
* 获取条件配置——请求参数类型定义
* @params id {string} id （必填）
*/
export type GetConditionTemplateByIdReqType = {
    id: string;
}


/**
* 获取条件配置——响应参数类型定义
* @params id {string} id
* @params name {string} 名称
* @params scene {string} 场景
* @params conditions {ConditionCommonType[]} 筛选条件
* @params templateIds {any[]} 模板id（逗号分割的多个ID）
*/
export type GetConditionTemplateByIdResType = {
    id: string;
    name: string;
    scene: string;
    conditions: ConditionCommonType[];
    templateIds: any[];
}


/**
* 更新条件配置——请求参数类型定义
* @params id {string} id （必填）
* @params name {string} 名称 
* @params scene {string} 场景 
* @params conditions {ConditionCommonType[]} 筛选条件 
* @params templateIds {any[]} 模板id（逗号分割的多个ID） 
*/
export type EditConditionTemplateReqType = {
    id: string;
    name?: string;
    scene?: string;
    conditions?: ConditionCommonType[];
    templateIds?: any[];
}


/**
* 删除条件配置——请求参数类型定义
* @params id {string} id （必填）
*/
export type DeleteConditionTemplateReqType = {
    id: string;
}


/**
* 搜索条件配置——请求参数类型定义
* @params keyword {string} 模糊匹配关键字 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetConditionTemplatesReqType = {
    keyword?: string;
    page?: number;
    per_page?: number;
}


/**
* 搜索条件配置——响应参数类型定义
* @params totalCount {number} 总数
* @params records {ConditionTemplateOutCommonType[]} 记录
*/
export type GetConditionTemplatesResType = {
    totalCount: number;
    records: ConditionTemplateOutCommonType[];
}


/**
* 新增条件配置——请求参数类型定义
* @params name {string} 名称 
* @params scene {string} 场景 
* @params conditions {ConditionCommonType[]} 筛选条件 
* @params templateIds {any[]} 模板id（逗号分割的多个ID） 
*/
export type AddConditionTemplateReqType = {
    name?: string;
    scene?: string;
    conditions?: ConditionCommonType[];
    templateIds?: any[];
}


/**
* 新增条件配置——响应参数类型定义
* @params id {string} id
* @params name {string} 名称
* @params scene {string} 场景
* @params conditions {ConditionCommonType[]} 筛选条件
* @params templateIds {any[]} 模板id（逗号分割的多个ID）
*/
export type AddConditionTemplateResType = {
    id: string;
    name: string;
    scene: string;
    conditions: ConditionCommonType[];
    templateIds: any[];
}


/**
* 获取i18n——请求参数类型定义
* @params id {string} id （必填）
*/
export type GetI18NConfigByIdReqType = {
    id: string;
}


/**
* 获取i18n——响应参数类型定义
* @params id {string} id
* @params key {string} 键
* @params languageType {LanguageTypeCommonType} 语言类型
* @params value {any} 值对象
*/
export type GetI18NConfigByIdResType = {
    id: string;
    key: string;
    languageType: LanguageTypeCommonType;
    value: any;
}


/**
* 更新i18n——请求参数类型定义
* @params id {string} id （必填）
* @params key {string} 键 
* @params languageType {LanguageTypeCommonType} 语言类型 
* @params value {any} 值对象 
*/
export type EditI18NConfigReqType = {
    id: string;
    key?: string;
    languageType?: LanguageTypeCommonType;
    value?: any;
}


/**
* 删除i18n——请求参数类型定义
* @params id {string} id （必填）
*/
export type DeleteI18NConfigReqType = {
    id: string;
}


/**
* 搜索i18n——请求参数类型定义
* @params keyword {string} 模糊匹配关键字 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetI18NConfigsReqType = {
    keyword?: string;
    page?: number;
    per_page?: number;
}


/**
* 搜索i18n——响应参数类型定义
* @params totalCount {number} 总数
* @params records {I18NConfigOutCommonType[]} 记录
*/
export type GetI18NConfigsResType = {
    totalCount: number;
    records: I18NConfigOutCommonType[];
}


/**
* 新增i18n——请求参数类型定义
* @params key {string} 键 
* @params languageType {LanguageTypeCommonType} 语言类型 
* @params value {any} 值对象 
*/
export type AddI18NConfigReqType = {
    key?: string;
    languageType?: LanguageTypeCommonType;
    value?: any;
}


/**
* 新增i18n——响应参数类型定义
* @params id {string} id
* @params key {string} 键
* @params languageType {LanguageTypeCommonType} 语言类型
* @params value {any} 值对象
*/
export type AddI18NConfigResType = {
    id: string;
    key: string;
    languageType: LanguageTypeCommonType;
    value: any;
}


/**
* 获取通知配置——请求参数类型定义
* @params id {string} id （必填）
*/
export type GetNotifyConfigByIdReqType = {
    id: string;
}


/**
* 获取通知配置——响应参数类型定义
* @params id {string} id
* @params name {string} 名称
* @params scene {string} 场景
* @params type {NotifyTypesCommonType} 通知类型
* @params conditions {ConditionCommonType[]} 筛选条件
* @params isEnable {boolean} 是否启用
* @params createTime {string} 创建时间
* @params updateTime {string} 更新时间
* @params notifyTypes {NotifyTypeInfoCommonType[]} 通知方式
* @params templates {TemplateContentOutCommonType[]} 模版
* @params recipients {RecipientCommonType[]} 模板默认接收人
*/
export type GetNotifyConfigByIdResType = {
    id: string;
    name: string;
    scene: string;
    type: NotifyTypesCommonType;
    conditions: ConditionCommonType[];
    isEnable: boolean;
    createTime: string;
    updateTime: string;
    notifyTypes: NotifyTypeInfoCommonType[];
    templates: TemplateContentOutCommonType[];
    recipients: RecipientCommonType[];
}


/**
* 更新通知配置——请求参数类型定义
* @params id {string} id （必填）
* @params name {string} 通知策略名称 
* @params scene {string} 场景 
* @params type {NotifyTypesCommonType} 通知类型 
* @params conditions {ConditionCommonType[]} 筛选条件 
* @params isEnable {boolean} 是否启用 
* @params templates {TemplateContentInCommonType[]} 模版 
* @params recipients {RecipientCommonType[]} 模板默认接收人 
*/
export type EditNotifyConfigReqType = {
    id: string;
    name?: string;
    scene?: string;
    type?: NotifyTypesCommonType;
    conditions?: ConditionCommonType[];
    isEnable?: boolean;
    templates?: TemplateContentInCommonType[];
    recipients?: RecipientCommonType[];
}


/**
* 删除通知配置——请求参数类型定义
* @params id {string} id （必填）
*/
export type DeleteNotifyConfigReqType = {
    id: string;
}


/**
* 搜索通知配置——请求参数类型定义
* @params keyword {string} 模糊匹配关键字 
* @params scene {string} 场景 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetNotifyConfigsReqType = {
    keyword?: string;
    scene?: string;
    page?: number;
    per_page?: number;
}


/**
* 搜索通知配置——响应参数类型定义
* @params totalCount {number} 总数
* @params records {NotifyConfigOutCommonType[]} 记录
*/
export type GetNotifyConfigsResType = {
    totalCount: number;
    records: NotifyConfigOutCommonType[];
}


/**
* 新增通知配置——请求参数类型定义
* @params name {string} 通知策略名称 
* @params scene {string} 场景 
* @params type {NotifyTypesCommonType} 通知类型 
* @params conditions {ConditionCommonType[]} 筛选条件 
* @params isEnable {boolean} 是否启用 
* @params templates {TemplateContentInCommonType[]} 模版 
* @params recipients {RecipientCommonType[]} 模板默认接收人 
*/
export type AddNotifyConfigReqType = {
    name?: string;
    scene?: string;
    type?: NotifyTypesCommonType;
    conditions?: ConditionCommonType[];
    isEnable?: boolean;
    templates?: TemplateContentInCommonType[];
    recipients?: RecipientCommonType[];
}


/**
* 新增通知配置——响应参数类型定义
* @params id {string} id
* @params name {string} 名称
* @params scene {string} 场景
* @params type {NotifyTypesCommonType} 通知类型
* @params conditions {ConditionCommonType[]} 筛选条件
* @params isEnable {boolean} 是否启用
* @params createTime {string} 创建时间
* @params updateTime {string} 更新时间
* @params notifyTypes {NotifyTypeInfoCommonType[]} 通知方式
* @params templates {TemplateContentOutCommonType[]} 模版
* @params recipients {RecipientCommonType[]} 模板默认接收人
*/
export type AddNotifyConfigResType = {
    id: string;
    name: string;
    scene: string;
    type: NotifyTypesCommonType;
    conditions: ConditionCommonType[];
    isEnable: boolean;
    createTime: string;
    updateTime: string;
    notifyTypes: NotifyTypeInfoCommonType[];
    templates: TemplateContentOutCommonType[];
    recipients: RecipientCommonType[];
}


/**
* 获取全部通知类型——响应参数类型定义
* @params totalCount {number} 总数
* @params records {NotifyTypeInfoCommonType[]} 记录
*/
export type GetNotifyConfigTypesResType = {
    totalCount: number;
    records: NotifyTypeInfoCommonType[];
}


/**
* 启用通知配置——请求参数类型定义
* @params id {string} id （必填）
* @params isEnable {boolean} 是否启用 
*/
export type OpenNotifyConfigReqType = {
    id: string;
    isEnable?: boolean;
}


/**
* 获取通知记录——请求参数类型定义
* @params id {string} id （必填）
*/
export type GetNotifyRecordByIdReqType = {
    id: string;
}


/**
* 获取通知记录——响应参数类型定义
* @params id {string} id
* @params content {string} 发送内容
* @params type {NotifyTypesCommonType} 类型
* @params sender {string} 发送者
* @params webHookUrl {string} 发送地址
* @params title {string} 主题
* @params scene {string} 场景
* @params recipient {string} 接收人
* @params traceId {string} 流水号
* @params resultDescription {string} 结果描述
* @params status {NotifyStatusCommonType} 发送状态
* @params arrivalTime {string} 送达时间
* @params createTime {string} 创建时间
*/
export type GetNotifyRecordByIdResType = {
    id: string;
    content: string;
    type: NotifyTypesCommonType;
    sender: string;
    webHookUrl: string;
    title: string;
    scene: string;
    recipient: string;
    traceId: string;
    resultDescription: string;
    status: NotifyStatusCommonType;
    arrivalTime: string;
    createTime: string;
}


/**
* 搜索通知记录——请求参数类型定义
* @params keyword {string} 模糊匹配关键字 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetNotifyRecordsReqType = {
    keyword?: string;
    page?: number;
    per_page?: number;
}


/**
* 搜索通知记录——响应参数类型定义
* @params totalCount {number} 总数
* @params records {NotifyRecordOutCommonType[]} 记录
*/
export type GetNotifyRecordsResType = {
    totalCount: number;
    records: NotifyRecordOutCommonType[];
}


/**
* 获取占位符——请求参数类型定义
* @params id {string} id （必填）
*/
export type GetPlaceholderByIdReqType = {
    id: string;
}


/**
* 获取占位符——响应参数类型定义
* @params id {string} 占位符Id
* @params name {string} 名称
* @params type {PlaceHolderTypeCommonType} 类型
* @params key {string} 键
* @params value {string} 值
* @params isEnableExpression {boolean} 是否启用表达式替换
* @params replaceExpressions {ReplaceExpressionCommonType[]} 替换表达式
*/
export type GetPlaceholderByIdResType = {
    id: string;
    name: string;
    type: PlaceHolderTypeCommonType;
    key: string;
    value: string;
    isEnableExpression: boolean;
    replaceExpressions: ReplaceExpressionCommonType[];
}


/**
* 更新占位符——请求参数类型定义
* @params id {string} id （必填）
* @params name {string} 占位符名称 （必填）
* @params type {PlaceHolderTypeCommonType} 类型 
* @params key {string} 键 
* @params value {string} 值 
* @params isEnableExpression {boolean} 是否启用表达式替换 
* @params replaceExpressions {ReplaceExpressionCommonType[]} 替换表达式 
*/
export type EditPlaceholderReqType = {
    id: string;
    name: string;
    type?: PlaceHolderTypeCommonType;
    key?: string;
    value?: string;
    isEnableExpression?: boolean;
    replaceExpressions?: ReplaceExpressionCommonType[];
}


/**
* 删除占位符——请求参数类型定义
* @params id {string} id （必填）
*/
export type DeletePlaceholderReqType = {
    id: string;
}


/**
* 搜索占位符——请求参数类型定义
* @params keyword {string} 模糊匹配关键字 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetPlaceholdersReqType = {
    keyword?: string;
    page?: number;
    per_page?: number;
}


/**
* 搜索占位符——响应参数类型定义
* @params totalCount {number} 总数
* @params records {PlaceholderOutCommonType[]} 记录
*/
export type GetPlaceholdersResType = {
    totalCount: number;
    records: PlaceholderOutCommonType[];
}


/**
* 新增占位符——请求参数类型定义
* @params name {string} 占位符名称 （必填）
* @params type {PlaceHolderTypeCommonType} 类型 
* @params key {string} 键 
* @params value {string} 值 
* @params isEnableExpression {boolean} 是否启用表达式替换 
* @params replaceExpressions {ReplaceExpressionCommonType[]} 替换表达式 
*/
export type AddPlaceholderReqType = {
    name: string;
    type?: PlaceHolderTypeCommonType;
    key?: string;
    value?: string;
    isEnableExpression?: boolean;
    replaceExpressions?: ReplaceExpressionCommonType[];
}


/**
* 新增占位符——响应参数类型定义
* @params id {string} 占位符Id
* @params name {string} 名称
* @params type {PlaceHolderTypeCommonType} 类型
* @params key {string} 键
* @params value {string} 值
* @params isEnableExpression {boolean} 是否启用表达式替换
* @params replaceExpressions {ReplaceExpressionCommonType[]} 替换表达式
*/
export type AddPlaceholderResType = {
    id: string;
    name: string;
    type: PlaceHolderTypeCommonType;
    key: string;
    value: string;
    isEnableExpression: boolean;
    replaceExpressions: ReplaceExpressionCommonType[];
}


/**
* 获取Scene——请求参数类型定义
* @params id {string} id （必填）
*/
export type GetSceneByIdReqType = {
    id: string;
}


/**
* 获取Scene——响应参数类型定义
* @params id {string} ID
* @params name {string} 名称
* @params tips {string} 提示：若未设置触发条件，则发生告警时自动通知
* @params recipientTips {string} 接收对象提示：设备联系人
* @params notifyExample {string} 通知样例
*/
export type GetSceneByIdResType = {
    id: string;
    name: string;
    tips: string;
    recipientTips: string;
    notifyExample: string;
}


/**
* 获取场景——响应参数类型定义
* @params totalCount {number} 总数
* @params records {SceneOutCommonType[]} 记录
*/
export type GetScenesResType = {
    totalCount: number;
    records: SceneOutCommonType[];
}


/**
* 新增场景——请求参数类型定义
* @params id {string} ID 
* @params name {string} 名称 
* @params tips {string} 提示：若未设置触发条件，则发生告警时自动通知 
* @params recipientTips {string} 接收对象提示：设备联系人 
* @params notifyExample {string} 通知样例 
*/
export type AddSceneReqType = {
    id?: string;
    name?: string;
    tips?: string;
    recipientTips?: string;
    notifyExample?: string;
}


/**
* 新增场景——响应参数类型定义
* @params id {string} ID
* @params name {string} 名称
* @params tips {string} 提示：若未设置触发条件，则发生告警时自动通知
* @params recipientTips {string} 接收对象提示：设备联系人
* @params notifyExample {string} 通知样例
*/
export type AddSceneResType = {
    id: string;
    name: string;
    tips: string;
    recipientTips: string;
    notifyExample: string;
}


/**
* 获取scheme——请求参数类型定义
* @params id {string} id （必填）
*/
export type GetSchemeReqType = {
    id: string;
}


/**
* 获取scheme——响应参数类型定义
* @params id {string} id
* @params scene {string} 场景
* @params key {string} 支持字段键名
* @params type {FieldTypeCommonType} 字段类型
* @params allowNull {boolean} 是否允许为空
* @params example {string} 样例数据
* @params operator {OperatorTypeCommonType} 过滤操作符
* @params analysisType {AnalysisTypeCommonType} 解析类型
* @params isDynamicRangeValue {boolean} 是否动态的值范围
* @params rangeValues {RangeValueCommonType[]} 静态值范围-动态从对应接口获取
* @params description {string} 描述
*/
export type GetSchemeResType = {
    id: string;
    scene: string;
    key: string;
    type: FieldTypeCommonType;
    allowNull: boolean;
    example: string;
    operator: OperatorTypeCommonType;
    analysisType: AnalysisTypeCommonType;
    isDynamicRangeValue: boolean;
    rangeValues: RangeValueCommonType[];
    description: string;
}


/**
* 更新scheme——请求参数类型定义
* @params id {string} id （必填）
* @params scene {string} 场景 
* @params key {string} 支持字段键名 
* @params type {FieldTypeCommonType} 字段类型 
* @params allowNull {boolean} 是否允许为空 
* @params description {string} 描述 
* @params example {string} 样例数据 
* @params operator {OperatorTypeCommonType} 过滤操作符 
* @params isDynamicRangeValue {boolean} 是否动态的值范围 
* @params rangeValue {undefined} 静态值范围-动态从对应接口获取 
*/
export type EditSchemeReqType = {
    id: string;
    scene?: string;
    key?: string;
    type?: FieldTypeCommonType;
    allowNull?: boolean;
    description?: string;
    example?: string;
    operator?: OperatorTypeCommonType;
    isDynamicRangeValue?: boolean;
    rangeValue?: undefined;
}


/**
* 删除scheme——请求参数类型定义
* @params id {string} id （必填）
*/
export type DeleteSchemeReqType = {
    id: string;
}


/**
* 搜索scheme——请求参数类型定义
* @params scene {string} 场景 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetSchemesReqType = {
    scene?: string;
    page?: number;
    per_page?: number;
}


/**
* 搜索scheme——响应参数类型定义
* @params totalCount {number} 总数
* @params records {SchemeOutCommonType[]} 记录
*/
export type GetSchemesResType = {
    totalCount: number;
    records: SchemeOutCommonType[];
}


/**
* 新增scheme——请求参数类型定义
* @params scene {string} 场景 
* @params key {string} 支持字段键名 
* @params type {FieldTypeCommonType} 字段类型 
* @params allowNull {boolean} 是否允许为空 
* @params description {string} 描述 
* @params example {string} 样例数据 
* @params operator {OperatorTypeCommonType} 过滤操作符 
* @params isDynamicRangeValue {boolean} 是否动态的值范围 
* @params rangeValue {undefined} 静态值范围-动态从对应接口获取 
*/
export type AddSchemeReqType = {
    scene?: string;
    key?: string;
    type?: FieldTypeCommonType;
    allowNull?: boolean;
    description?: string;
    example?: string;
    operator?: OperatorTypeCommonType;
    isDynamicRangeValue?: boolean;
    rangeValue?: undefined;
}


/**
* 新增scheme——响应参数类型定义
* @params id {string} id
* @params scene {string} 场景
* @params key {string} 支持字段键名
* @params type {FieldTypeCommonType} 字段类型
* @params allowNull {boolean} 是否允许为空
* @params example {string} 样例数据
* @params operator {OperatorTypeCommonType} 过滤操作符
* @params analysisType {AnalysisTypeCommonType} 解析类型
* @params isDynamicRangeValue {boolean} 是否动态的值范围
* @params rangeValues {RangeValueCommonType[]} 静态值范围-动态从对应接口获取
* @params description {string} 描述
*/
export type AddSchemeResType = {
    id: string;
    scene: string;
    key: string;
    type: FieldTypeCommonType;
    allowNull: boolean;
    example: string;
    operator: OperatorTypeCommonType;
    analysisType: AnalysisTypeCommonType;
    isDynamicRangeValue: boolean;
    rangeValues: RangeValueCommonType[];
    description: string;
}


/**
* 获取模板——请求参数类型定义
* @params id {string} id （必填）
*/
export type GetTemplateByIdReqType = {
    id: string;
}


/**
* 获取模板——响应参数类型定义
* @params id {string} 模板ID
* @params scene {string} 场景
* @params notifyType {NotifyTypesCommonType} 通知类型
* @params content {string} 通知内容模板
* @params isEnable {boolean} 是否可用
* @params isDefault {boolean} 是否默认通知模板
* @params sender {string} 发送者
* @params defaultWebHookUrl {string} 默认webHookUrl
* @params title {string} 标题(主题)
* @params secondTitle {string} 副标题（第二标题）
* @params jumpUrl {string} 跳转地址
* @params recipients {RecipientCommonType[]} 模板默认接收人
* @params priorityPhoneType {string} 优先电话类型
*/
export type GetTemplateByIdResType = {
    id: string;
    scene: string;
    notifyType: NotifyTypesCommonType;
    content: string;
    isEnable: boolean;
    isDefault: boolean;
    sender: string;
    defaultWebHookUrl: string;
    title: string;
    secondTitle: string;
    jumpUrl: string;
    recipients: RecipientCommonType[];
    priorityPhoneType: string;
}


/**
* 更新模板——请求参数类型定义
* @params id {string} id （必填）
* @params scene {string} 场景 （必填）
* @params notifyType {NotifyTypesCommonType} 通知类型 
* @params content {string} 通知内容模板 （必填）
* @params isEnable {boolean} 是否可用 
* @params isDefault {boolean} 是否默认通知模板 
* @params sender {string} 发送者 
* @params defaultWebHookUrl {string} 默认webHookUrl 
* @params title {string} 标题(主题) 
* @params secondTitle {string} 副标题（第二标题） 
* @params jumpUrl {string} 跳转地址 
* @params recipients {RecipientCommonType[]} 模板默认接收人 
* @params priorityPhoneType {string} 优先电话类型 
*/
export type EditTemplateReqType = {
    id: string;
    scene: string;
    notifyType?: NotifyTypesCommonType;
    content: string;
    isEnable?: boolean;
    isDefault?: boolean;
    sender?: string;
    defaultWebHookUrl?: string;
    title?: string;
    secondTitle?: string;
    jumpUrl?: string;
    recipients?: RecipientCommonType[];
    priorityPhoneType?: string;
}


/**
* 删除模板——请求参数类型定义
* @params id {string} id （必填）
*/
export type DeleteTemplateReqType = {
    id: string;
}


/**
* 搜索模板——请求参数类型定义
* @params keyword {string} 模糊匹配关键字 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetTemplatesReqType = {
    keyword?: string;
    page?: number;
    per_page?: number;
}


/**
* 搜索模板——响应参数类型定义
* @params totalCount {number} 总数
* @params records {TemplateOutCommonType[]} 记录
*/
export type GetTemplatesResType = {
    totalCount: number;
    records: TemplateOutCommonType[];
}


/**
* 新增模板——请求参数类型定义
* @params scene {string} 场景 （必填）
* @params notifyType {NotifyTypesCommonType} 通知类型 
* @params content {string} 通知内容模板 （必填）
* @params isEnable {boolean} 是否可用 
* @params isDefault {boolean} 是否默认通知模板 
* @params sender {string} 发送者 
* @params defaultWebHookUrl {string} 默认webHookUrl 
* @params title {string} 标题(主题) 
* @params secondTitle {string} 副标题（第二标题） 
* @params jumpUrl {string} 跳转地址 
* @params recipients {RecipientCommonType[]} 模板默认接收人 
* @params priorityPhoneType {string} 优先电话类型 
*/
export type AddTemplateReqType = {
    scene: string;
    notifyType?: NotifyTypesCommonType;
    content: string;
    isEnable?: boolean;
    isDefault?: boolean;
    sender?: string;
    defaultWebHookUrl?: string;
    title?: string;
    secondTitle?: string;
    jumpUrl?: string;
    recipients?: RecipientCommonType[];
    priorityPhoneType?: string;
}


/**
* 新增模板——响应参数类型定义
* @params id {string} 模板ID
* @params scene {string} 场景
* @params notifyType {NotifyTypesCommonType} 通知类型
* @params content {string} 通知内容模板
* @params isEnable {boolean} 是否可用
* @params isDefault {boolean} 是否默认通知模板
* @params sender {string} 发送者
* @params defaultWebHookUrl {string} 默认webHookUrl
* @params title {string} 标题(主题)
* @params secondTitle {string} 副标题（第二标题）
* @params jumpUrl {string} 跳转地址
* @params recipients {RecipientCommonType[]} 模板默认接收人
* @params priorityPhoneType {string} 优先电话类型
*/
export type AddTemplateResType = {
    id: string;
    scene: string;
    notifyType: NotifyTypesCommonType;
    content: string;
    isEnable: boolean;
    isDefault: boolean;
    sender: string;
    defaultWebHookUrl: string;
    title: string;
    secondTitle: string;
    jumpUrl: string;
    recipients: RecipientCommonType[];
    priorityPhoneType: string;
}


/**
* 通知——请求参数类型定义
* @params scene {string} 运用场景 
* @params notifyType {NotifyTypesCommonType} 通知类型，支持多种类型 
* @params notifyContent {any} 通知内容 
* @params recipients {RecipientCommonType[]} 接收人 
* @params jumpUrl {string} 跳转地址 
* @params title {string} 标题 
* @params data {any} 业务对象 
* @params id {string} 标识ID 
* @params source {string} 业务来源 
*/
export type PostNotificationReqType = {
    scene?: string;
    notifyType?: NotifyTypesCommonType;
    notifyContent?: any;
    recipients?: RecipientCommonType[];
    jumpUrl?: string;
    title?: string;
    data?: any;
    id?: string;
    source?: string;
}


/**
* 通知——响应参数类型定义
* @params taskId {string} 任务id
* @params message {string} Message
* @params success {boolean} 是否成功
*/
export type PostNotificationResType = {
    taskId: string;
    message: string;
    success: boolean;
}

