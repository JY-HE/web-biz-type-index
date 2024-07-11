
/**
 * 
 * type {string} 
 * title {string} 
 * status {number} 
 * detail {string} 
 * instance {string} 
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
type JTokenCommonType = array



/**
 * 筛选条件
 * key {string} 键
 * value {string} 值
 * operator {OperatorTypeCommonType} 操作类型
*/
type ConditionCommonType = {
       key?: string;
      value?: string;
      operator?: OperatorTypeCommonType;
}


/**
 * 通知结果
 * taskId {string} 任务id
 * message {string} Message
 * success {boolean} 是否成功
*/
type NotifyResultCommonType = {
       taskId?: string;
      message?: string;
      success?: boolean;
}


/**
 * 值范围
 * id {string} ID
 * name {string} 名称
*/
type RangeValueCommonType = {
       id?: string;
      name?: string;
}


/**
 * 替换表达式
 * operator {OperatorTypeCommonType} 操作类型
 * value {string} 比较值
 * replaceValue {string} 替换值
*/
type ReplaceExpressionCommonType = {
       operator?: OperatorTypeCommonType;
      value?: string;
      replaceValue?: string;
}


/**
 * 分页查询结果
 * totalCount {number} 总数
 * records {ConditionTemplateOutCommonType[]} 记录
*/
type ConditionTemplateOut]CommonType = {
       totalCount?: number;
      records?: ConditionTemplateOutCommonType[];
}


/**
 * 分页查询结果
 * totalCount {number} 总数
 * records {I18NConfigOutCommonType[]} 记录
*/
type I18NConfigOut]CommonType = {
       totalCount?: number;
      records?: I18NConfigOutCommonType[];
}


/**
 * 分页查询结果
 * totalCount {number} 总数
 * records {NotifyConfigOutCommonType[]} 记录
*/
type NotifyConfigOut]CommonType = {
       totalCount?: number;
      records?: NotifyConfigOutCommonType[];
}


/**
 * 分页查询结果
 * totalCount {number} 总数
 * records {NotifyRecordOutCommonType[]} 记录
*/
type NotifyRecordOut]CommonType = {
       totalCount?: number;
      records?: NotifyRecordOutCommonType[];
}


/**
 * 分页查询结果
 * totalCount {number} 总数
 * records {NotifyTypeInfoCommonType[]} 记录
*/
type NotifyTypeInfo]CommonType = {
       totalCount?: number;
      records?: NotifyTypeInfoCommonType[];
}


/**
 * 分页查询结果
 * totalCount {number} 总数
 * records {PlaceholderOutCommonType[]} 记录
*/
type PlaceholderOut]CommonType = {
       totalCount?: number;
      records?: PlaceholderOutCommonType[];
}


/**
 * 分页查询结果
 * totalCount {number} 总数
 * records {SceneOutCommonType[]} 记录
*/
type SceneOut]CommonType = {
       totalCount?: number;
      records?: SceneOutCommonType[];
}


/**
 * 分页查询结果
 * totalCount {number} 总数
 * records {SchemeOutCommonType[]} 记录
*/
type SchemeOut]CommonType = {
       totalCount?: number;
      records?: SchemeOutCommonType[];
}


/**
 * 分页查询结果
 * totalCount {number} 总数
 * records {TemplateOutCommonType[]} 记录
*/
type TemplateOut]CommonType = {
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
 * scene {string} 运用场景
 * notifyType {NotifyTypesCommonType} 通知类型，支持多种类型
 * notifyContent {any} 通知内容
 * recipients {RecipientCommonType[]} 接收人
 * jumpUrl {string} 跳转地址
 * title {string} 标题
 * data {any} 业务对象
 * id {string} 标识ID
 * source {string} 业务来源
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
 * name {string} 通知对象名称
 * userId {string} 用户id
 * mobile {string} 电话
 * mail {string} 邮件
 * groupId {string} 组ID
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
 * name {string} 名称
 * scene {string} 场景
 * conditions {ConditionCommonType[]} 筛选条件
 * templateIds {any[]} 模板id（逗号分割的多个ID）
*/
type ConditionTemplateInCommonType = {
       name?: string;
      scene?: string;
      conditions?: ConditionCommonType[];
      templateIds?: any[];
}


/**
 * 是否启用更新
 * isEnable {boolean} 是否启用
*/
type EnableNotifyConfigInCommonType = {
       isEnable?: boolean;
}


/**
 * i18n配置
 * key {string} 键
 * languageType {LanguageTypeCommonType} 语言类型
 * value {any} 值对象
*/
type I18NConfigInCommonType = {
       key?: string;
      languageType?: LanguageTypeCommonType;
      value?: any;
}


/**
 * 通知配置
 * name {string} 通知策略名称
 * scene {string} 场景
 * type {NotifyTypesCommonType} 通知类型
 * conditions {ConditionCommonType[]} 筛选条件
 * isEnable {boolean} 是否启用
 * templates {TemplateContentInCommonType[]} 模版
 * recipients {RecipientCommonType[]} 模板默认接收人
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
 * name {string} 占位符名称
 * type {PlaceHolderTypeCommonType} 类型
 * key {string} 键
 * value {string} 值
 * isEnableExpression {boolean} 是否启用表达式替换
 * replaceExpressions {ReplaceExpressionCommonType[]} 替换表达式
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
 * id {string} ID
 * name {string} 名称
 * tips {string} 提示：若未设置触发条件，则发生告警时自动通知
 * recipientTips {string} 接收对象提示：设备联系人
 * notifyExample {string} 通知样例
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
 * scene {string} 场景
 * key {string} 支持字段键名
 * type {FieldTypeCommonType} 字段类型
 * allowNull {boolean} 是否允许为空
 * description {string} 描述
 * example {string} 样例数据
 * operator {OperatorTypeCommonType} 过滤操作符
 * isDynamicRangeValue {boolean} 是否动态的值范围
 * rangeValue {undefined} 静态值范围-动态从对应接口获取
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
 * notifyType {NotifyTypesCommonType} 通知类型
 * content {string} 通知内容模板
 * defaultWebHookUrl {string} 默认webHookUrl
 * title {string} 标题(主题)
 * secondTitle {string} 副标题（第二标题）
 * jumpUrl {string} 跳转地址
 * priorityPhoneType {string} 优先电话类型
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
 * scene {string} 场景
 * notifyType {NotifyTypesCommonType} 通知类型
 * content {string} 通知内容模板
 * isEnable {boolean} 是否可用
 * isDefault {boolean} 是否默认通知模板
 * sender {string} 发送者
 * defaultWebHookUrl {string} 默认webHookUrl
 * title {string} 标题(主题)
 * secondTitle {string} 副标题（第二标题）
 * jumpUrl {string} 跳转地址
 * recipients {RecipientCommonType[]} 模板默认接收人
 * priorityPhoneType {string} 优先电话类型
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
 * id {string} id
 * name {string} 名称
 * scene {string} 场景
 * conditions {ConditionCommonType[]} 筛选条件
 * templateIds {any[]} 模板id（逗号分割的多个ID）
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
 * id {string} id
 * key {string} 键
 * languageType {LanguageTypeCommonType} 语言类型
 * value {any} 值对象
*/
type I18NConfigOutCommonType = {
       id?: string;
      key?: string;
      languageType?: LanguageTypeCommonType;
      value?: any;
}


/**
 * 通知配置
 * id {string} id
 * name {string} 名称
 * scene {string} 场景
 * type {NotifyTypesCommonType} 通知类型
 * conditions {ConditionCommonType[]} 筛选条件
 * isEnable {boolean} 是否启用
 * createTime {string} 创建时间
 * updateTime {string} 更新时间
 * notifyTypes {NotifyTypeInfoCommonType[]} 通知方式
 * templates {TemplateContentOutCommonType[]} 模版
 * recipients {RecipientCommonType[]} 模板默认接收人
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
 * id {string} id
 * name {string} 名称
 * scene {string} 场景
 * type {NotifyTypesCommonType} 通知类型
 * conditions {ConditionCommonType[]} 筛选条件
 * isEnable {boolean} 是否启用
 * createTime {string} 创建时间
 * updateTime {string} 更新时间
 * notifyTypes {NotifyTypeInfoCommonType[]} 通知方式
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
 * id {string} id
 * content {string} 发送内容
 * type {NotifyTypesCommonType} 类型
 * sender {string} 发送者
 * webHookUrl {string} 发送地址
 * title {string} 主题
 * scene {string} 场景
 * recipient {string} 接收人
 * traceId {string} 流水号
 * resultDescription {string} 结果描述
 * status {NotifyStatusCommonType} 发送状态
 * arrivalTime {string} 送达时间
 * createTime {string} 创建时间
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
 * type {NotifyTypesCommonType} 类型
 * name {string} 名称
*/
type NotifyTypeInfoCommonType = {
       type?: NotifyTypesCommonType;
      name?: string;
}


/**
 * 占位符
 * id {string} 占位符Id
 * name {string} 名称
 * type {PlaceHolderTypeCommonType} 类型
 * key {string} 键
 * value {string} 值
 * isEnableExpression {boolean} 是否启用表达式替换
 * replaceExpressions {ReplaceExpressionCommonType[]} 替换表达式
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
 * id {string} ID
 * name {string} 名称
 * tips {string} 提示：若未设置触发条件，则发生告警时自动通知
 * recipientTips {string} 接收对象提示：设备联系人
 * notifyExample {string} 通知样例
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
 * id {string} id
 * scene {string} 场景
 * key {string} 支持字段键名
 * type {FieldTypeCommonType} 字段类型
 * allowNull {boolean} 是否允许为空
 * example {string} 样例数据
 * operator {OperatorTypeCommonType} 过滤操作符
 * analysisType {AnalysisTypeCommonType} 解析类型
 * isDynamicRangeValue {boolean} 是否动态的值范围
 * rangeValues {RangeValueCommonType[]} 静态值范围-动态从对应接口获取
 * description {string} 描述
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
 * id {string} 模版ID
 * notifyType {NotifyTypesCommonType} 通知类型
 * content {string} 通知内容模板
 * defaultWebHookUrl {string} 默认webHookUrl
 * title {string} 标题(主题)
 * secondTitle {string} 副标题（第二标题）
 * jumpUrl {string} 跳转地址
 * priorityPhoneType {string} 优先电话类型
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
 * id {string} 模板ID
 * scene {string} 场景
 * notifyType {NotifyTypesCommonType} 通知类型
 * content {string} 通知内容模板
 * isEnable {boolean} 是否可用
 * isDefault {boolean} 是否默认通知模板
 * sender {string} 发送者
 * defaultWebHookUrl {string} 默认webHookUrl
 * title {string} 标题(主题)
 * secondTitle {string} 副标题（第二标题）
 * jumpUrl {string} 跳转地址
 * recipients {RecipientCommonType[]} 模板默认接收人
 * priorityPhoneType {string} 优先电话类型
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
 type GetConTemByIdReqType = {
      id: string;
}


/**
 * 获取条件配置——响应参数类型定义
 * id {string} id
 * name {string} 名称
 * scene {string} 场景
 * conditions {ConditionCommonType[]} 筛选条件
 * templateIds {any[]} 模板id（逗号分割的多个ID）
*/
 type GetConTemByIdResType = {
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
 type UpdateConfTemByIdReqType = {
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
 type DeleteConfTemByIdReqType = {
      id: string;
}


/**
 * 搜索条件配置——请求参数类型定义
 * @params keyword {string} 模糊匹配关键字 
 * @params page {number} 页码, 从1开始 默认：1 
 * @params per_page {number} 页容量, [1, 128] 默认：100 
*/
 type GetConfTemReqType = {
      keyword?: string;
      page?: number;
      per_page?: number;
}


/**
 * 搜索条件配置——响应参数类型定义
 * totalCount {number} 总数
 * records {ConditionTemplateOutCommonType[]} 记录
*/
 type GetConfTemResType = {
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
 type AddConfTemReqType = {
      name?: string;
      scene?: string;
      conditions?: ConditionCommonType[];
      templateIds?: any[];
}


/**
 * 新增条件配置——响应参数类型定义
 * id {string} id
 * name {string} 名称
 * scene {string} 场景
 * conditions {ConditionCommonType[]} 筛选条件
 * templateIds {any[]} 模板id（逗号分割的多个ID）
*/
 type AddConfTemResType = {
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
 type GetI18NConfByIdReqType = {
      id: string;
}


/**
 * 获取i18n——响应参数类型定义
 * id {string} id
 * key {string} 键
 * languageType {LanguageTypeCommonType} 语言类型
 * value {any} 值对象
*/
 type GetI18NConfByIdResType = {
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
 type UpdateI18NConfByIdReqType = {
      id: string;
      key?: string;
      languageType?: LanguageTypeCommonType;
      value?: any;
}


/**
 * 删除i18n——请求参数类型定义
 * @params id {string} id （必填）
*/
 type DeleteI18NConfByIdReqType = {
      id: string;
}


/**
 * 搜索i18n——请求参数类型定义
 * @params keyword {string} 模糊匹配关键字 
 * @params page {number} 页码, 从1开始 默认：1 
 * @params per_page {number} 页容量, [1, 128] 默认：100 
*/
 type GetI18NConfReqType = {
      keyword?: string;
      page?: number;
      per_page?: number;
}


/**
 * 搜索i18n——响应参数类型定义
 * totalCount {number} 总数
 * records {I18NConfigOutCommonType[]} 记录
*/
 type GetI18NConfResType = {
      totalCount: number;
      records: I18NConfigOutCommonType[];
}


/**
 * 新增i18n——请求参数类型定义
 * @params key {string} 键 
 * @params languageType {LanguageTypeCommonType} 语言类型 
 * @params value {any} 值对象 
*/
 type AddI18NConfReqType = {
      key?: string;
      languageType?: LanguageTypeCommonType;
      value?: any;
}


/**
 * 新增i18n——响应参数类型定义
 * id {string} id
 * key {string} 键
 * languageType {LanguageTypeCommonType} 语言类型
 * value {any} 值对象
*/
 type AddI18NConfResType = {
      id: string;
      key: string;
      languageType: LanguageTypeCommonType;
      value: any;
}


/**
 * 获取通知配置——请求参数类型定义
 * @params id {string} id （必填）
*/
 type GetNotifyConfByIdReqType = {
      id: string;
}


/**
 * 获取通知配置——响应参数类型定义
 * id {string} id
 * name {string} 名称
 * scene {string} 场景
 * type {NotifyTypesCommonType} 通知类型
 * conditions {ConditionCommonType[]} 筛选条件
 * isEnable {boolean} 是否启用
 * createTime {string} 创建时间
 * updateTime {string} 更新时间
 * notifyTypes {NotifyTypeInfoCommonType[]} 通知方式
 * templates {TemplateContentOutCommonType[]} 模版
 * recipients {RecipientCommonType[]} 模板默认接收人
*/
 type GetNotifyConfByIdResType = {
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
 type UpdateNotifyConfByIdReqType = {
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
 type DeleteNotifyConfByIdReqType = {
      id: string;
}


/**
 * 搜索通知配置——请求参数类型定义
 * @params keyword {string} 模糊匹配关键字 
 * @params scene {string} 场景 
 * @params page {number} 页码, 从1开始 默认：1 
 * @params per_page {number} 页容量, [1, 128] 默认：100 
*/
 type GetNotifyConfReqType = {
      keyword?: string;
      scene?: string;
      page?: number;
      per_page?: number;
}


/**
 * 搜索通知配置——响应参数类型定义
 * totalCount {number} 总数
 * records {NotifyConfigOutCommonType[]} 记录
*/
 type GetNotifyConfResType = {
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
 type AddNotifyConfReqType = {
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
 * id {string} id
 * name {string} 名称
 * scene {string} 场景
 * type {NotifyTypesCommonType} 通知类型
 * conditions {ConditionCommonType[]} 筛选条件
 * isEnable {boolean} 是否启用
 * createTime {string} 创建时间
 * updateTime {string} 更新时间
 * notifyTypes {NotifyTypeInfoCommonType[]} 通知方式
 * templates {TemplateContentOutCommonType[]} 模版
 * recipients {RecipientCommonType[]} 模板默认接收人
*/
 type AddNotifyConfResType = {
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
 * totalCount {number} 总数
 * records {NotifyTypeInfoCommonType[]} 记录
*/
 type GetNotifyConfTypesResType = {
      totalCount: number;
      records: NotifyTypeInfoCommonType[];
}


/**
 * 启用通知配置——请求参数类型定义
 * @params id {string} id （必填）
 * @params isEnable {boolean} 是否启用 
*/
 type EnableNotifyConfByIdReqType = {
      id: string;
      isEnable?: boolean;
}


/**
 * 获取通知记录——请求参数类型定义
 * @params id {string} id （必填）
*/
 type GetNotifyRecordByIdReqType = {
      id: string;
}


/**
 * 获取通知记录——响应参数类型定义
 * id {string} id
 * content {string} 发送内容
 * type {NotifyTypesCommonType} 类型
 * sender {string} 发送者
 * webHookUrl {string} 发送地址
 * title {string} 主题
 * scene {string} 场景
 * recipient {string} 接收人
 * traceId {string} 流水号
 * resultDescription {string} 结果描述
 * status {NotifyStatusCommonType} 发送状态
 * arrivalTime {string} 送达时间
 * createTime {string} 创建时间
*/
 type GetNotifyRecordByIdResType = {
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
 type GetNotifyRecordReqType = {
      keyword?: string;
      page?: number;
      per_page?: number;
}


/**
 * 搜索通知记录——响应参数类型定义
 * totalCount {number} 总数
 * records {NotifyRecordOutCommonType[]} 记录
*/
 type GetNotifyRecordResType = {
      totalCount: number;
      records: NotifyRecordOutCommonType[];
}


/**
 * 获取占位符——请求参数类型定义
 * @params id {string} id （必填）
*/
 type GetPlaceholderByIdReqType = {
      id: string;
}


/**
 * 获取占位符——响应参数类型定义
 * id {string} 占位符Id
 * name {string} 名称
 * type {PlaceHolderTypeCommonType} 类型
 * key {string} 键
 * value {string} 值
 * isEnableExpression {boolean} 是否启用表达式替换
 * replaceExpressions {ReplaceExpressionCommonType[]} 替换表达式
*/
 type GetPlaceholderByIdResType = {
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
 type UpdatePlaceholderByIdReqType = {
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
 type DeletePlaceholderByIdReqType = {
      id: string;
}


/**
 * 搜索占位符——请求参数类型定义
 * @params keyword {string} 模糊匹配关键字 
 * @params page {number} 页码, 从1开始 默认：1 
 * @params per_page {number} 页容量, [1, 128] 默认：100 
*/
 type GetPlaceholdersReqType = {
      keyword?: string;
      page?: number;
      per_page?: number;
}


/**
 * 搜索占位符——响应参数类型定义
 * totalCount {number} 总数
 * records {PlaceholderOutCommonType[]} 记录
*/
 type GetPlaceholdersResType = {
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
 type AddPlaceholdersReqType = {
      name: string;
      type?: PlaceHolderTypeCommonType;
      key?: string;
      value?: string;
      isEnableExpression?: boolean;
      replaceExpressions?: ReplaceExpressionCommonType[];
}


/**
 * 新增占位符——响应参数类型定义
 * id {string} 占位符Id
 * name {string} 名称
 * type {PlaceHolderTypeCommonType} 类型
 * key {string} 键
 * value {string} 值
 * isEnableExpression {boolean} 是否启用表达式替换
 * replaceExpressions {ReplaceExpressionCommonType[]} 替换表达式
*/
 type AddPlaceholdersResType = {
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
 type GetSceneByIdReqType = {
      id: string;
}


/**
 * 获取Scene——响应参数类型定义
 * id {string} ID
 * name {string} 名称
 * tips {string} 提示：若未设置触发条件，则发生告警时自动通知
 * recipientTips {string} 接收对象提示：设备联系人
 * notifyExample {string} 通知样例
*/
 type GetSceneByIdResType = {
      id: string;
      name: string;
      tips: string;
      recipientTips: string;
      notifyExample: string;
}


/**
 * 获取场景——响应参数类型定义
 * totalCount {number} 总数
 * records {SceneOutCommonType[]} 记录
*/
 type GetScenesResType = {
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
 type AddScenesReqType = {
      id?: string;
      name?: string;
      tips?: string;
      recipientTips?: string;
      notifyExample?: string;
}


/**
 * 新增场景——响应参数类型定义
 * id {string} ID
 * name {string} 名称
 * tips {string} 提示：若未设置触发条件，则发生告警时自动通知
 * recipientTips {string} 接收对象提示：设备联系人
 * notifyExample {string} 通知样例
*/
 type AddScenesResType = {
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
 type GetSchemeByIdReqType = {
      id: string;
}


/**
 * 获取scheme——响应参数类型定义
 * id {string} id
 * scene {string} 场景
 * key {string} 支持字段键名
 * type {FieldTypeCommonType} 字段类型
 * allowNull {boolean} 是否允许为空
 * example {string} 样例数据
 * operator {OperatorTypeCommonType} 过滤操作符
 * analysisType {AnalysisTypeCommonType} 解析类型
 * isDynamicRangeValue {boolean} 是否动态的值范围
 * rangeValues {RangeValueCommonType[]} 静态值范围-动态从对应接口获取
 * description {string} 描述
*/
 type GetSchemeByIdResType = {
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
 type UpdateSchemeByIdReqType = {
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
 type DeleteSchemeByIdReqType = {
      id: string;
}


/**
 * 搜索scheme——请求参数类型定义
 * @params scene {string} 场景 
 * @params page {number} 页码, 从1开始 默认：1 
 * @params per_page {number} 页容量, [1, 128] 默认：100 
*/
 type GetSchemesReqType = {
      scene?: string;
      page?: number;
      per_page?: number;
}


/**
 * 搜索scheme——响应参数类型定义
 * totalCount {number} 总数
 * records {SchemeOutCommonType[]} 记录
*/
 type GetSchemesResType = {
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
 type AddSchemesReqType = {
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
 * id {string} id
 * scene {string} 场景
 * key {string} 支持字段键名
 * type {FieldTypeCommonType} 字段类型
 * allowNull {boolean} 是否允许为空
 * example {string} 样例数据
 * operator {OperatorTypeCommonType} 过滤操作符
 * analysisType {AnalysisTypeCommonType} 解析类型
 * isDynamicRangeValue {boolean} 是否动态的值范围
 * rangeValues {RangeValueCommonType[]} 静态值范围-动态从对应接口获取
 * description {string} 描述
*/
 type AddSchemesResType = {
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
 type GetTemplateByIdReqType = {
      id: string;
}


/**
 * 获取模板——响应参数类型定义
 * id {string} 模板ID
 * scene {string} 场景
 * notifyType {NotifyTypesCommonType} 通知类型
 * content {string} 通知内容模板
 * isEnable {boolean} 是否可用
 * isDefault {boolean} 是否默认通知模板
 * sender {string} 发送者
 * defaultWebHookUrl {string} 默认webHookUrl
 * title {string} 标题(主题)
 * secondTitle {string} 副标题（第二标题）
 * jumpUrl {string} 跳转地址
 * recipients {RecipientCommonType[]} 模板默认接收人
 * priorityPhoneType {string} 优先电话类型
*/
 type GetTemplateByIdResType = {
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
 type UpdateTemplateByIdReqType = {
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
 type DeleteTemplateByIdReqType = {
      id: string;
}


/**
 * 搜索模板——请求参数类型定义
 * @params keyword {string} 模糊匹配关键字 
 * @params page {number} 页码, 从1开始 默认：1 
 * @params per_page {number} 页容量, [1, 128] 默认：100 
*/
 type GetTemplatesReqType = {
      keyword?: string;
      page?: number;
      per_page?: number;
}


/**
 * 搜索模板——响应参数类型定义
 * totalCount {number} 总数
 * records {TemplateOutCommonType[]} 记录
*/
 type GetTemplatesResType = {
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
 type AddTemplatesReqType = {
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
 * id {string} 模板ID
 * scene {string} 场景
 * notifyType {NotifyTypesCommonType} 通知类型
 * content {string} 通知内容模板
 * isEnable {boolean} 是否可用
 * isDefault {boolean} 是否默认通知模板
 * sender {string} 发送者
 * defaultWebHookUrl {string} 默认webHookUrl
 * title {string} 标题(主题)
 * secondTitle {string} 副标题（第二标题）
 * jumpUrl {string} 跳转地址
 * recipients {RecipientCommonType[]} 模板默认接收人
 * priorityPhoneType {string} 优先电话类型
*/
 type AddTemplatesResType = {
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
 type WebHooksReqType = {
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
 * taskId {string} 任务id
 * message {string} Message
 * success {boolean} 是否成功
*/
 type WebHooksResType = {
      taskId: string;
      message: string;
      success: boolean;
}

