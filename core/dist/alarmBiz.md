/**
 * 告警响应包对象
 * @params alarmSourceId {string} 告警源ID
 * @params alarmSourceName {string} 告警源名称
 * @params alarmSourceType {number} 告警源类型
 * @params alarmProcessUrl {string} 告警处置 URL
 * @params alarmDescription {string} 告警描述
 * @params alarmTypeId {number} 告警类型
 * @params alarmTypeName {string} 告警类型名称
 * @params alarmName {string} 告警名称
 * @params level {number} 告警等级
 * @params aroseTime {string} 告警产生时间
 * @params longitude {string} 经度
 * @params latitude {string} 纬度
 * @params address {string} 地址
 * @params isConfirmed {boolean} 是否被确认
 * @params confirmTime {string} 确认时间
 * @params extension {string} 拓展字段
 * @params districtId {string} 告警关联的行政区域ID
 * @params districtName {string} 告警关联的行政区域名称
 * @params organizationId {string} 告警关联的组织架构ID
 * @params organizationName {string} 告警关联的组织架构名称
 * @params affirmantId {string} 确认者Id
 * @params affirmantName {string} 确认者名称
 * @params deleteTime {string} 告警消除时间
 * @params id {string} Mongo流水编号
 */
type AlarmEntityResponseCommonType = {
    alarmSourceId?: string;
    alarmSourceName?: string;
    alarmSourceType?: number;
    alarmProcessUrl?: string;
    alarmDescription?: string;
    alarmTypeId?: number;
    alarmTypeName?: string;
    alarmName?: string;
    level?: number;
    aroseTime?: string;
    longitude?: string;
    latitude?: string;
    address?: string;
    isConfirmed?: boolean;
    confirmTime?: string;
    extension?: string;
    districtId?: string;
    districtName?: string;
    organizationId?: string;
    organizationName?: string;
    affirmantId?: string;
    affirmantName?: string;
    deleteTime?: string;
    id?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {AlarmEntityResponseCommonType[]} 数据记录
 */
type AlarmEntityResponseReqCommonType = {
    totalCount?: number;
    records?: AlarmEntityResponseCommonType[];
};

/**
* 告警时间查询类型
产生时间=0，确认时间=1，删除时间=2
*/
type AlarmTimeQueryTypeCommonType = 0 | 1 | 2;

/**
* 告警查询类型
All = 0,Confirmed = 1,NotConfirm = 2
*/
type AlarmQueryTypeCommonType = 0 | 1 | 2;

/**
 * 告警信息数据请求接口
 * @params keyword {string} 模糊匹配关键字
 * @params timeQueryType {AlarmTimeQueryTypeCommonType} 时间查询类型, 产生时间=0，确认时间=1，删除时间=2
 * @params pageIndex {number} 页码,从1开始
 * @params pageSize {number} 页容量, [1,1024]
 * @params beginTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params districtIds {any[]} 行政区域ID列表
 * @params prefixDistrictIds {any[]} 行政区域ID前缀列表
 * @params queryType {AlarmQueryTypeCommonType} All = 0,Confirmed = 1,NotConfirm = 2
 * @params types {any[]} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测
 * @params alarmSourceIds {any[]} 告警源Id列表
 * @params alarmLevels {any[]} 告警级别
 * @params organizationIds {any[]} 所属组织架构ID列表
 * @params alarmSourceTypes {any[]} 告警源类型列表10000000-设备 20000000-网关 30000000-服务器 40000000-平台
 */
type AlarmInfoRequestCommonType = {
    keyword?: string;
    timeQueryType?: AlarmTimeQueryTypeCommonType;
    pageIndex?: number;
    pageSize?: number;
    beginTime?: string;
    endTime?: string;
    districtIds?: any[];
    prefixDistrictIds?: any[];
    queryType?: AlarmQueryTypeCommonType;
    types?: any[];
    alarmSourceIds?: any[];
    alarmLevels?: any[];
    organizationIds?: any[];
    alarmSourceTypes?: any[];
};

/**
 * 告警按行政区域统计对象
 * @params districtId {string} 行政区域id
 * @params districtName {string} 行政区域名称
 * @params count {number} 总数
 */
type AlarmDistrictCounterCommonType = {
    districtId?: string;
    districtName?: string;
    count?: number;
};

/**
 * 告警类型统计对象
 * @params typeId {number} 类型Id
 * @params typeName {string} 类型名称
 * @params count {number} 总数
 */
type AlarmTypeCounterCommonType = {
    typeId?: number;
    typeName?: string;
    count?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {AlarmTypeCounterCommonType[]} 数据记录
 */
type AlarmTypeCounterReqCommonType = {
    totalCount?: number;
    records?: AlarmTypeCounterCommonType[];
};

/**
 * 时间状态枚举
 */
type TimeTypeCommonType = 0 | 1 | 2 | 3 | 4;

/**
 * 告警按时间统计对象
 * @params timeSpan {string} 时间点
 * @params count {number} 数量
 * @params typeName {string} 类型名称
 */
type AlarmTimeCounterCommonType = {
    timeSpan?: string;
    count?: number;
    typeName?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {AlarmTimeCounterCommonType[]} 数据记录
 */
type AlarmTimeCounterReqCommonType = {
    totalCount?: number;
    records?: AlarmTimeCounterCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {AlarmDistrictCounterCommonType[]} 数据记录
 */
type AlarmDistrictCounterReqCommonType = {
    totalCount?: number;
    records?: AlarmDistrictCounterCommonType[];
};

/**
 * 告警请求对象
 * @params alarmSyncId {string} 告警同步Id
 * @params alarmSourceId {string} 告警源ID
 * @params alarmSourceName {string} 告警源名称
 * @params alarmSourceType {number} 告警源类型
 * @params alarmProcessUrl {string} 告警处置 URL
 * @params alarmDescription {string} 告警描述
 * @params alarmTypeId {number} 告警类型
 * @params alarmTypeName {string} 告警类型
 * @params alarmName {string} 告警名称
 * @params level {number} 告警等级
 * @params aroseTime {string} 告警产生时间
 * @params longitude {string} 经度
 * @params latitude {string} 纬度
 * @params address {string} 地址
 * @params isConfirmed {boolean} 是否被确认
 * @params confirmTime {string} 确认时间
 * @params extension {string} 拓展字段
 * @params districtId {string} 告警关联的行政区域ID
 * @params districtName {string} 告警关联的行政区域名称
 * @params organizationId {string} 告警关联的组织架构ID
 * @params organizationName {string} 告警关联的组织架构名称
 * @params affirmantId {string} 确认者Id
 * @params affirmantName {string} 确认者名称
 */
type AlarmRequestEntityCommonType = {
    alarmSyncId: string;
    alarmSourceId?: string;
    alarmSourceName?: string;
    alarmSourceType?: number;
    alarmProcessUrl?: string;
    alarmDescription?: string;
    alarmTypeId?: number;
    alarmTypeName?: string;
    alarmName?: string;
    level?: number;
    aroseTime?: string;
    longitude?: string;
    latitude?: string;
    address?: string;
    isConfirmed?: boolean;
    confirmTime?: string;
    extension?: string;
    districtId?: string;
    districtName?: string;
    organizationId?: string;
    organizationName?: string;
    affirmantId?: string;
    affirmantName?: string;
};

/**
 * 确认告警请求实体
 * @params alarmId {string} 告警ID
 * @params confirmTime {string} 确认时间
 * @params affirmantId {string} 确认者Id
 * @params affirmantName {string} 确认者名称
 */
type ConfirmAlarmRequestEntityCommonType = {
    alarmId: string;
    confirmTime: string;
    affirmantId?: string;
    affirmantName?: string;
};

/**
 * undefined
 */
type EntityOperationCommonType = 0 | 1 | 2;

/**
 * 告警实体回调
 * @params bizName {string} 业务名称
 * @params areaCode {string} 行政区域码
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 */
type AlarmEntityCallbackCommonType = {
    bizName?: string;
    areaCode?: string;
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
};

/**
 * 资源信息
 * @params name {string} 资源名称
 * @params distance {number} 资源匹配的最大距离
 */
type ResourceCommonType = {
    name?: string;
    distance?: number;
};

/**
 * 告警预案资源响应对象
 * @params id {string} 告警图层ID
 * @params name {string} 告警图层名称
 * @params alarmTypeId {number} 告警类型ID
 * @params alarmTypeName {string} 告警类型名称
 * @params alarmLevel {number} 告警级别
 * @params dangerousSources {ResourceCommonType[]} 危险源
 * @params keyProtections {ResourceCommonType[]} 重点防护目标
 * @params shelters {ResourceCommonType[]} 避难场所
 * @params warehouses {ResourceCommonType[]} 仓库
 * @params emergencyFacilities {ResourceCommonType[]} 应急设备
 * @params manpowerResources {ResourceCommonType[]} 人力资源
 * @params medicalResources {ResourceCommonType[]} 医疗资源
 * @params pollutionSources {ResourceCommonType[]} 污染源
 * @params customResources {any} 自定义类型
 */
type PreplanOutCommonType = {
    id?: string;
    name?: string;
    alarmTypeId?: number;
    alarmTypeName?: string;
    alarmLevel?: number;
    dangerousSources?: ResourceCommonType[];
    keyProtections?: ResourceCommonType[];
    shelters?: ResourceCommonType[];
    warehouses?: ResourceCommonType[];
    emergencyFacilities?: ResourceCommonType[];
    manpowerResources?: ResourceCommonType[];
    medicalResources?: ResourceCommonType[];
    pollutionSources?: ResourceCommonType[];
    customResources?: any;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {PreplanOutCommonType[]} 数据记录
 */
type PreplanOutReqCommonType = {
    totalCount?: number;
    records?: PreplanOutCommonType[];
};

/**
 * 告警预案资源请求对象
 * @params name {string} 告警图层名称
 * @params alarmTypeId {number} 告警类型ID
 * @params alarmLevel {number} 告警级别
 * @params dangerousSources {ResourceCommonType[]} 危险源
 * @params keyProtections {ResourceCommonType[]} 重点防护目标
 * @params shelters {ResourceCommonType[]} 避难场所
 * @params warehouses {ResourceCommonType[]} 仓库
 * @params emergencyFacilities {ResourceCommonType[]} 应急设备
 * @params manpowerResources {ResourceCommonType[]} 人力资源
 * @params medicalResources {ResourceCommonType[]} 医疗资源
 * @params pollutionSources {ResourceCommonType[]} 污染源
 * @params customResources {any} 自定义类型
 */
type PreplanInCommonType = {
    name?: string;
    alarmTypeId?: number;
    alarmLevel?: number;
    dangerousSources?: ResourceCommonType[];
    keyProtections?: ResourceCommonType[];
    shelters?: ResourceCommonType[];
    warehouses?: ResourceCommonType[];
    emergencyFacilities?: ResourceCommonType[];
    manpowerResources?: ResourceCommonType[];
    medicalResources?: ResourceCommonType[];
    pollutionSources?: ResourceCommonType[];
    customResources?: any;
};

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
};

/**
 *
 * @params beginTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params districtIds {any[]} 行政区域ID列表
 * @params prefixDistrictIds {any[]} 行政区域ID前缀列表
 * @params queryType {AlarmQueryTypeCommonType} All = 0,Confirmed = 1,NotConfirm = 2
 * @params types {any[]} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测
 * @params alarmSourceIds {any[]} 告警源Id列表
 * @params alarmLevels {any[]} 告警级别
 * @params organizationIds {any[]} 所属组织架构ID列表
 * @params alarmSourceTypes {any[]} 告警源类型列表10000000-设备 20000000-网关 30000000-服务器 40000000-平台
 */
type AlarmCounterRequestCommonType = {
    beginTime?: string;
    endTime?: string;
    districtIds?: any[];
    prefixDistrictIds?: any[];
    queryType?: AlarmQueryTypeCommonType;
    types?: any[];
    alarmSourceIds?: any[];
    alarmLevels?: any[];
    organizationIds?: any[];
    alarmSourceTypes?: any[];
};

/**
 * 告警数量统计
 * @params count {number} 数量
 */
type AlarmCounterCommonType = {
    count?: number;
};

/**
 * 按时间统计的请求
 * @params span {number} 时间分隔数
 * @params typeName {string} 当前请求的类型名称
 * @params beginTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params districtIds {any[]} 行政区域ID列表
 * @params prefixDistrictIds {any[]} 行政区域ID前缀列表
 * @params queryType {AlarmQueryTypeCommonType} All = 0,Confirmed = 1,NotConfirm = 2
 * @params types {any[]} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测
 * @params alarmSourceIds {any[]} 告警源Id列表
 * @params alarmLevels {any[]} 告警级别
 * @params organizationIds {any[]} 所属组织架构ID列表
 * @params alarmSourceTypes {any[]} 告警源类型列表10000000-设备 20000000-网关 30000000-服务器 40000000-平台
 */
type AlarmCounterTimeSpanRequestCommonType = {
    span?: number;
    typeName?: string;
    beginTime?: string;
    endTime?: string;
    districtIds?: any[];
    prefixDistrictIds?: any[];
    queryType?: AlarmQueryTypeCommonType;
    types?: any[];
    alarmSourceIds?: any[];
    alarmLevels?: any[];
    organizationIds?: any[];
    alarmSourceTypes?: any[];
};

/**
 * 按照时间类型统计请求
 * @params groupByKey {string} 分组格式%Y  Year (4 digits, zero padded)    0000-9999%m Month(2 digits, zero padded)   01-12%d Day of Month(2 digits, zero padded)    01-31%H Hour(2 digits, zero padded, 24-hour clock) 00-23%M Minute(2 digits, zero padded)  00-59%S Second(2 digits, zero padded)  00-60%L Millisecond(3 digits, zero padded) 000-999%j Day of year(3 digits, zero padded) 001-366%w Day of week(1-Sunday, 7-Saturday)  1-7%U Week of year(2 digits, zero padded)    00-53%%  Percent Character as a Literal  %如按年月分组%Y%m，按所有的天分组%d
 * @params timeFormat {string} 时间格式化
 * @params typeName {string} 返回系列名称
 * @params beginTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params districtIds {any[]} 行政区域ID列表
 * @params prefixDistrictIds {any[]} 行政区域ID前缀列表
 * @params queryType {AlarmQueryTypeCommonType} All = 0,Confirmed = 1,NotConfirm = 2
 * @params types {any[]} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测
 * @params alarmSourceIds {any[]} 告警源Id列表
 * @params alarmLevels {any[]} 告警级别
 * @params organizationIds {any[]} 所属组织架构ID列表
 * @params alarmSourceTypes {any[]} 告警源类型列表10000000-设备 20000000-网关 30000000-服务器 40000000-平台
 */
type AlarmCounterTimeRequestCommonType = {
    groupByKey?: string;
    timeFormat?: string;
    typeName?: string;
    beginTime?: string;
    endTime?: string;
    districtIds?: any[];
    prefixDistrictIds?: any[];
    queryType?: AlarmQueryTypeCommonType;
    types?: any[];
    alarmSourceIds?: any[];
    alarmLevels?: any[];
    organizationIds?: any[];
    alarmSourceTypes?: any[];
};

/**
 * 对外开放的创建告警参数
 * @params alarmSourceId {string} 测点编号
 * @params alarmSourceName {string} 测点名称
 * @params alarmSourceType {number} 异常类型Id
 * @params alarmSourceTypeName {string} 异常类型名称
 * @params alarmDescription {string} 告警描述
 * @params alarmName {string} 告警名称
 * @params aroseTime {string} 告警产生时间
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params deleteTime {string} 告警消除时间
 * @params alarmTypeId {number} 告警类型Id
 */
type AlarmMessageInCommonType = {
    alarmSourceId: string;
    alarmSourceName: string;
    alarmSourceType?: number;
    alarmSourceTypeName?: string;
    alarmDescription?: string;
    alarmName?: string;
    aroseTime: string;
    longitude?: number;
    latitude?: number;
    deleteTime?: string;
    alarmTypeId: number;
};

type UpLeftCommonType = {
    longitude: number;
    latitude: number;
};

type BottomRightCommonType = {
    longitude: number;
    latitude: number;
};

----

/**
 * 返回单个id——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetAlarmsByIDReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 返回单个id——响应参数类型定义
 * @params alarmSourceId {string} 告警源ID
 * @params alarmSourceName {string} 告警源名称
 * @params alarmSourceType {number} 告警源类型
 * @params alarmProcessUrl {string} 告警处置 URL
 * @params alarmDescription {string} 告警描述
 * @params alarmTypeId {number} 告警类型
 * @params alarmTypeName {string} 告警类型名称
 * @params alarmName {string} 告警名称
 * @params level {number} 告警等级
 * @params aroseTime {string} 告警产生时间
 * @params longitude {string} 经度
 * @params latitude {string} 纬度
 * @params address {string} 地址
 * @params isConfirmed {boolean} 是否被确认
 * @params confirmTime {string} 确认时间
 * @params extension {string} 拓展字段
 * @params districtId {string} 告警关联的行政区域ID
 * @params districtName {string} 告警关联的行政区域名称
 * @params organizationId {string} 告警关联的组织架构ID
 * @params organizationName {string} 告警关联的组织架构名称
 * @params affirmantId {string} 确认者Id
 * @params affirmantName {string} 确认者名称
 * @params deleteTime {string} 告警消除时间
 * @params id {string} Mongo流水编号
 */
export type GetAlarmsByIDResType = {
    alarmSourceId: string;
    alarmSourceName: string;
    alarmSourceType: number;
    alarmProcessUrl: string;
    alarmDescription: string;
    alarmTypeId: number;
    alarmTypeName: string;
    alarmName: string;
    level: number;
    aroseTime: string;
    longitude: string;
    latitude: string;
    address: string;
    isConfirmed: boolean;
    confirmTime: string;
    extension: string;
    districtId: string;
    districtName: string;
    organizationId: string;
    organizationName: string;
    affirmantId: string;
    affirmantName: string;
    deleteTime: string;
    id: string;
};

/**
 * 消除告警——请求参数类型定义
 * @params id {string} 告警 Id （必填）
 * @headers X-version {string}
 */
export type ClearAlarmReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 分页查找告警——请求参数类型定义
 * @params Keyword {string} 关键字
 * @params BeginTime {string} 开始时间（作用于告警产生时间）
 * @params EndTime {string} 结束时间（作用于告警产生时间）
 * @params bottom_right.Longitude {number} 经度
 * @params bottom_right.Latitude {number} 纬度
 * @params up_left.Longitude {number} 经度
 * @params up_left.Latitude {number} 纬度
 * @params Type {number} 告警类型
 * @params IsConfirmed {boolean} 状态
 * @params AlarmSourceTypes {any[]} 告警源类型列表10000000-设备 20000000-网关 30000000-服务器 40000000-平台
 * @params DistrictIds {any[]} 行政区域ID
 * @params PrefixDistrictIds {any[]} 行政区域ID前缀过滤
 * @params IsSort {boolean} 是否排序
 * @params page {number} 页码,从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetAlarmsByPageReqType = {
    Keyword?: string;
    BeginTime?: string;
    EndTime?: string;
    bottom_right?: BottomRightCommonType;
    up_left?: UpLeftCommonType;
    Type?: number;
    IsConfirmed?: boolean;
    AlarmSourceTypes?: any[];
    DistrictIds?: any[];
    PrefixDistrictIds?: any[];
    IsSort?: boolean;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 分页查找告警——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {AlarmEntityResponseCommonType[]} 数据记录
 */
export type GetAlarmsByPageResType = {
    totalCount: number;
    records: AlarmEntityResponseCommonType[];
};

/**
 * 获取所有告警——请求参数类型定义
 * @headers X-version {string}
 */
export type GetAllAlarmsReqType = {
    'X-version'?: string;
};

/**
 * 获取所有告警——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {AlarmEntityResponseCommonType[]} 数据记录
 */
export type GetAllAlarmsResType = {
    totalCount: number;
    records: AlarmEntityResponseCommonType[];
};

/**
 * 获取告警的信息——请求参数类型定义
 * @headers X-version {string}
 * @params keyword {string} 模糊匹配关键字
 * @params timeQueryType {AlarmTimeQueryTypeCommonType} 时间查询类型, 产生时间=0，确认时间=1，删除时间=2
 * @params pageIndex {number} 页码,从1开始
 * @params pageSize {number} 页容量, [1,1024]
 * @params beginTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params districtIds {any[]} 行政区域ID列表
 * @params prefixDistrictIds {any[]} 行政区域ID前缀列表
 * @params queryType {AlarmQueryTypeCommonType} All = 0,Confirmed = 1,NotConfirm = 2
 * @params types {any[]} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测
 * @params alarmSourceIds {any[]} 告警源Id列表
 * @params alarmLevels {any[]} 告警级别
 * @params organizationIds {any[]} 所属组织架构ID列表
 * @params alarmSourceTypes {any[]} 告警源类型列表10000000-设备 20000000-网关 30000000-服务器 40000000-平台
 */
export type GetAlarmInfoReqType = {
    'X-version'?: string;
    keyword?: string;
    timeQueryType?: AlarmTimeQueryTypeCommonType;
    pageIndex?: number;
    pageSize?: number;
    beginTime?: string;
    endTime?: string;
    districtIds?: any[];
    prefixDistrictIds?: any[];
    queryType?: AlarmQueryTypeCommonType;
    types?: any[];
    alarmSourceIds?: any[];
    alarmLevels?: any[];
    organizationIds?: any[];
    alarmSourceTypes?: any[];
};

/**
 * 获取告警的信息——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {AlarmEntityResponseCommonType[]} 数据记录
 */
export type GetAlarmInfoResType = {
    totalCount: number;
    records: AlarmEntityResponseCommonType[];
};

/**
 * 根据时间段查询告警通知数据——请求参数类型定义
 * @params beginTime {string}
 * @params endTime {string}
 * @params queryType {number} All = 0,Confirmed = 1,NotConfirm = 2
 * @params typeIds {any[]} 告警ID类型，目前暂定EquipmentAlarm = 0,PeopleAlarm = 1,TyphoonAlarm = 2
 * @params alarmLevels {any[]} 告警级别列表
 * @headers X-version {string}
 */
export type GetAlarmByTypeIdsReqType = {
    beginTime?: string;
    endTime?: string;
    queryType?: number;
    typeIds?: any[];
    alarmLevels?: any[];
    'X-version'?: string;
};

/**
 * 根据时间段查询告警通知数据——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {AlarmEntityResponseCommonType[]} 数据记录
 */
export type GetAlarmByTypeIdsResType = {
    totalCount: number;
    records: AlarmEntityResponseCommonType[];
};

/**
 * 根据行政区域id列表查询告警数据——请求参数类型定义
 * @params beginTime {string} 查询开始时间
 * @params endTime {string} 查询结束时间
 * @params districtIds {any[]} 行政区域Id列表
 * @params prefixDistrictIds {any[]} 前缀行政区域Id列表
 * @params queryType {number} 查询类型
 * @headers X-version {string}
 */
export type GetAlarmsByDistrictIdsReqType = {
    beginTime?: string;
    endTime?: string;
    districtIds?: any[];
    prefixDistrictIds?: any[];
    queryType?: number;
    'X-version'?: string;
};

/**
 * 根据行政区域id列表查询告警数据——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {AlarmEntityResponseCommonType[]} 数据记录
 */
export type GetAlarmsByDistrictIdsResType = {
    totalCount: number;
    records: AlarmEntityResponseCommonType[];
};

/**
 * 根据行政区域id列表查询告警总数——请求参数类型定义
 * @params beginTime {string}
 * @params endTime {string}
 * @params districtId {string} districtId
 * @params queryType {number} All = 0,Confirmed = 1,NotConfirm = 2
 * @headers X-version {string}
 */
export type GetAlarmCounterByDistrictIdReqType = {
    beginTime?: string;
    endTime?: string;
    districtId?: string;
    queryType?: number;
    'X-version'?: string;
};

/**
 * 根据行政区域id列表查询告警总数——响应参数类型定义
 * @params districtId {string} 行政区域id
 * @params districtName {string} 行政区域名称
 * @params count {number} 总数
 */
export type GetAlarmCounterByDistrictIdResType = {
    districtId: string;
    districtName: string;
    count: number;
};

/**
 * 根据时间段统计告警类型——请求参数类型定义
 * @params beginTime {string} 结束时间
 * @params endTime {string} 开始时间
 * @params queryType {number} All = 0,Confirmed = 1,NotConfirm = 2
 * @params districtIds {any[]}
 * @headers X-version {string}
 */
export type GetAlarmTypeCounterByTimeReqType = {
    beginTime?: string;
    endTime?: string;
    queryType?: number;
    districtIds?: any[];
    'X-version'?: string;
};

/**
 * 根据时间段统计告警类型——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {AlarmTypeCounterCommonType[]} 数据记录
 */
export type GetAlarmTypeCounterByTimeResType = {
    totalCount: number;
    records: AlarmTypeCounterCommonType[];
};

/**
 * 根据时间段统计告警总数——请求参数类型定义
 * @params timeType {number} Hour = 0,Day = 1,Month = 2,Year = 3
 * @params beginTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params queryType {number} All = 0,Confirmed = 1,NotConfirm = 2
 * @headers X-version {string}
 */
export type GetAlarmCounterByTimeReqType = {
    timeType?: number;
    beginTime?: string;
    endTime?: string;
    queryType?: number;
    'X-version'?: string;
};

/**
 * 根据时间段统计告警总数——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {AlarmTimeCounterCommonType[]} 数据记录
 */
export type GetAlarmCounterByTimeResType = {
    totalCount: number;
    records: AlarmTimeCounterCommonType[];
};

/**
 * 根据时间段统计告警各行政区域总数——请求参数类型定义
 * @params beginTime {string} 结束时间
 * @params endTime {string} 开始时间
 * @params queryType {number} All = 0,Confirmed = 1,NotConfirm = 2
 * @headers X-version {string}
 */
export type GetAlarmDistrictCounterByTimeReqType = {
    beginTime?: string;
    endTime?: string;
    queryType?: number;
    'X-version'?: string;
};

/**
 * 根据时间段统计告警各行政区域总数——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {AlarmDistrictCounterCommonType[]} 数据记录
 */
export type GetAlarmDistrictCounterByTimeResType = {
    totalCount: number;
    records: AlarmDistrictCounterCommonType[];
};

/**
 * 添加告警——请求参数类型定义
 * @headers X-version {string}
 * @params alarmSyncId {string} 告警同步Id （必填）
 * @params alarmSourceId {string} 告警源ID
 * @params alarmSourceName {string} 告警源名称
 * @params alarmSourceType {number} 告警源类型
 * @params alarmProcessUrl {string} 告警处置 URL
 * @params alarmDescription {string} 告警描述
 * @params alarmTypeId {number} 告警类型
 * @params alarmTypeName {string} 告警类型
 * @params alarmName {string} 告警名称
 * @params level {number} 告警等级
 * @params aroseTime {string} 告警产生时间
 * @params longitude {string} 经度
 * @params latitude {string} 纬度
 * @params address {string} 地址
 * @params isConfirmed {boolean} 是否被确认
 * @params confirmTime {string} 确认时间
 * @params extension {string} 拓展字段
 * @params districtId {string} 告警关联的行政区域ID
 * @params districtName {string} 告警关联的行政区域名称
 * @params organizationId {string} 告警关联的组织架构ID
 * @params organizationName {string} 告警关联的组织架构名称
 * @params affirmantId {string} 确认者Id
 * @params affirmantName {string} 确认者名称
 */
export type AddAlarmReqType = {
    'X-version'?: string;
    alarmSyncId: string;
    alarmSourceId?: string;
    alarmSourceName?: string;
    alarmSourceType?: number;
    alarmProcessUrl?: string;
    alarmDescription?: string;
    alarmTypeId?: number;
    alarmTypeName?: string;
    alarmName?: string;
    level?: number;
    aroseTime?: string;
    longitude?: string;
    latitude?: string;
    address?: string;
    isConfirmed?: boolean;
    confirmTime?: string;
    extension?: string;
    districtId?: string;
    districtName?: string;
    organizationId?: string;
    organizationName?: string;
    affirmantId?: string;
    affirmantName?: string;
};

/**
 * 添加告警——响应参数类型定义
 * @params alarmSourceId {string} 告警源ID
 * @params alarmSourceName {string} 告警源名称
 * @params alarmSourceType {number} 告警源类型
 * @params alarmProcessUrl {string} 告警处置 URL
 * @params alarmDescription {string} 告警描述
 * @params alarmTypeId {number} 告警类型
 * @params alarmTypeName {string} 告警类型名称
 * @params alarmName {string} 告警名称
 * @params level {number} 告警等级
 * @params aroseTime {string} 告警产生时间
 * @params longitude {string} 经度
 * @params latitude {string} 纬度
 * @params address {string} 地址
 * @params isConfirmed {boolean} 是否被确认
 * @params confirmTime {string} 确认时间
 * @params extension {string} 拓展字段
 * @params districtId {string} 告警关联的行政区域ID
 * @params districtName {string} 告警关联的行政区域名称
 * @params organizationId {string} 告警关联的组织架构ID
 * @params organizationName {string} 告警关联的组织架构名称
 * @params affirmantId {string} 确认者Id
 * @params affirmantName {string} 确认者名称
 * @params deleteTime {string} 告警消除时间
 * @params id {string} Mongo流水编号
 */
export type AddAlarmResType = {
    alarmSourceId: string;
    alarmSourceName: string;
    alarmSourceType: number;
    alarmProcessUrl: string;
    alarmDescription: string;
    alarmTypeId: number;
    alarmTypeName: string;
    alarmName: string;
    level: number;
    aroseTime: string;
    longitude: string;
    latitude: string;
    address: string;
    isConfirmed: boolean;
    confirmTime: string;
    extension: string;
    districtId: string;
    districtName: string;
    organizationId: string;
    organizationName: string;
    affirmantId: string;
    affirmantName: string;
    deleteTime: string;
    id: string;
};

/**
 * 更新告警数据——请求参数类型定义
 * @params id {string} id
 * @headers X-version {string}
 * @params alarmSyncId {string} 告警同步Id （必填）
 * @params alarmSourceId {string} 告警源ID
 * @params alarmSourceName {string} 告警源名称
 * @params alarmSourceType {number} 告警源类型
 * @params alarmProcessUrl {string} 告警处置 URL
 * @params alarmDescription {string} 告警描述
 * @params alarmTypeId {number} 告警类型
 * @params alarmTypeName {string} 告警类型
 * @params alarmName {string} 告警名称
 * @params level {number} 告警等级
 * @params aroseTime {string} 告警产生时间
 * @params longitude {string} 经度
 * @params latitude {string} 纬度
 * @params address {string} 地址
 * @params isConfirmed {boolean} 是否被确认
 * @params confirmTime {string} 确认时间
 * @params extension {string} 拓展字段
 * @params districtId {string} 告警关联的行政区域ID
 * @params districtName {string} 告警关联的行政区域名称
 * @params organizationId {string} 告警关联的组织架构ID
 * @params organizationName {string} 告警关联的组织架构名称
 * @params affirmantId {string} 确认者Id
 * @params affirmantName {string} 确认者名称
 */
export type EditAlarmsReqType = {
    id?: string;
    'X-version'?: string;
    alarmSyncId: string;
    alarmSourceId?: string;
    alarmSourceName?: string;
    alarmSourceType?: number;
    alarmProcessUrl?: string;
    alarmDescription?: string;
    alarmTypeId?: number;
    alarmTypeName?: string;
    alarmName?: string;
    level?: number;
    aroseTime?: string;
    longitude?: string;
    latitude?: string;
    address?: string;
    isConfirmed?: boolean;
    confirmTime?: string;
    extension?: string;
    districtId?: string;
    districtName?: string;
    organizationId?: string;
    organizationName?: string;
    affirmantId?: string;
    affirmantName?: string;
};

/**
 * 确认告警——请求参数类型定义
 * @params id {string} id
 * @headers X-version {string}
 * @params alarmId {string} 告警ID （必填）
 * @params confirmTime {string} 确认时间 （必填）
 * @params affirmantId {string} 确认者Id
 * @params affirmantName {string} 确认者名称
 */
export type ConfirmAlarmReqType = {
    id?: string;
    'X-version'?: string;
    alarmId: string;
    confirmTime: string;
    affirmantId?: string;
    affirmantName?: string;
};

/**
 * 按条件查询预案——请求参数类型定义
 * @params Keyword {string} 关键字
 * @params AlarmLevel {number} 告警级别
 * @params AlarmType {number} 告警类型TypeNumber
 * @params page {number} 页码,从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetPreplansReqType = {
    Keyword?: string;
    AlarmLevel?: number;
    AlarmType?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 按条件查询预案——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {PreplanOutCommonType[]} 数据记录
 */
export type GetPreplansResType = {
    totalCount: number;
    records: PreplanOutCommonType[];
};

/**
 * 创建告警预案——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 告警图层名称
 * @params alarmTypeId {number} 告警类型ID
 * @params alarmLevel {number} 告警级别
 * @params dangerousSources {ResourceCommonType[]} 危险源
 * @params keyProtections {ResourceCommonType[]} 重点防护目标
 * @params shelters {ResourceCommonType[]} 避难场所
 * @params warehouses {ResourceCommonType[]} 仓库
 * @params emergencyFacilities {ResourceCommonType[]} 应急设备
 * @params manpowerResources {ResourceCommonType[]} 人力资源
 * @params medicalResources {ResourceCommonType[]} 医疗资源
 * @params pollutionSources {ResourceCommonType[]} 污染源
 * @params customResources {any} 自定义类型
 */
export type AddPreplansReqType = {
    'X-version'?: string;
    name?: string;
    alarmTypeId?: number;
    alarmLevel?: number;
    dangerousSources?: ResourceCommonType[];
    keyProtections?: ResourceCommonType[];
    shelters?: ResourceCommonType[];
    warehouses?: ResourceCommonType[];
    emergencyFacilities?: ResourceCommonType[];
    manpowerResources?: ResourceCommonType[];
    medicalResources?: ResourceCommonType[];
    pollutionSources?: ResourceCommonType[];
    customResources?: any;
};

/**
 * 创建告警预案——响应参数类型定义
 * @params id {string} 告警图层ID
 * @params name {string} 告警图层名称
 * @params alarmTypeId {number} 告警类型ID
 * @params alarmTypeName {string} 告警类型名称
 * @params alarmLevel {number} 告警级别
 * @params dangerousSources {ResourceCommonType[]} 危险源
 * @params keyProtections {ResourceCommonType[]} 重点防护目标
 * @params shelters {ResourceCommonType[]} 避难场所
 * @params warehouses {ResourceCommonType[]} 仓库
 * @params emergencyFacilities {ResourceCommonType[]} 应急设备
 * @params manpowerResources {ResourceCommonType[]} 人力资源
 * @params medicalResources {ResourceCommonType[]} 医疗资源
 * @params pollutionSources {ResourceCommonType[]} 污染源
 * @params customResources {any} 自定义类型
 */
export type AddPreplansResType = {
    id: string;
    name: string;
    alarmTypeId: number;
    alarmTypeName: string;
    alarmLevel: number;
    dangerousSources: ResourceCommonType[];
    keyProtections: ResourceCommonType[];
    shelters: ResourceCommonType[];
    warehouses: ResourceCommonType[];
    emergencyFacilities: ResourceCommonType[];
    manpowerResources: ResourceCommonType[];
    medicalResources: ResourceCommonType[];
    pollutionSources: ResourceCommonType[];
    customResources: any;
};

/**
 * 通过预案ID获取预案——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetPreplanByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 通过预案ID获取预案——响应参数类型定义
 * @params id {string} 告警图层ID
 * @params name {string} 告警图层名称
 * @params alarmTypeId {number} 告警类型ID
 * @params alarmTypeName {string} 告警类型名称
 * @params alarmLevel {number} 告警级别
 * @params dangerousSources {ResourceCommonType[]} 危险源
 * @params keyProtections {ResourceCommonType[]} 重点防护目标
 * @params shelters {ResourceCommonType[]} 避难场所
 * @params warehouses {ResourceCommonType[]} 仓库
 * @params emergencyFacilities {ResourceCommonType[]} 应急设备
 * @params manpowerResources {ResourceCommonType[]} 人力资源
 * @params medicalResources {ResourceCommonType[]} 医疗资源
 * @params pollutionSources {ResourceCommonType[]} 污染源
 * @params customResources {any} 自定义类型
 */
export type GetPreplanByIdResType = {
    id: string;
    name: string;
    alarmTypeId: number;
    alarmTypeName: string;
    alarmLevel: number;
    dangerousSources: ResourceCommonType[];
    keyProtections: ResourceCommonType[];
    shelters: ResourceCommonType[];
    warehouses: ResourceCommonType[];
    emergencyFacilities: ResourceCommonType[];
    manpowerResources: ResourceCommonType[];
    medicalResources: ResourceCommonType[];
    pollutionSources: ResourceCommonType[];
    customResources: any;
};

/**
 * 更新告警预案——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 告警图层名称
 * @params alarmTypeId {number} 告警类型ID
 * @params alarmLevel {number} 告警级别
 * @params dangerousSources {ResourceCommonType[]} 危险源
 * @params keyProtections {ResourceCommonType[]} 重点防护目标
 * @params shelters {ResourceCommonType[]} 避难场所
 * @params warehouses {ResourceCommonType[]} 仓库
 * @params emergencyFacilities {ResourceCommonType[]} 应急设备
 * @params manpowerResources {ResourceCommonType[]} 人力资源
 * @params medicalResources {ResourceCommonType[]} 医疗资源
 * @params pollutionSources {ResourceCommonType[]} 污染源
 * @params customResources {any} 自定义类型
 */
export type UpdatePreplanReqType = {
    id: string;
    'X-version'?: string;
    name?: string;
    alarmTypeId?: number;
    alarmLevel?: number;
    dangerousSources?: ResourceCommonType[];
    keyProtections?: ResourceCommonType[];
    shelters?: ResourceCommonType[];
    warehouses?: ResourceCommonType[];
    emergencyFacilities?: ResourceCommonType[];
    manpowerResources?: ResourceCommonType[];
    medicalResources?: ResourceCommonType[];
    pollutionSources?: ResourceCommonType[];
    customResources?: any;
};

/**
 * 删除告警预案——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeletePreplanReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 根据行政区域id列表查询告警总数——请求参数类型定义
 * @headers X-version {string}
 * @params beginTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params districtIds {any[]} 行政区域ID列表
 * @params prefixDistrictIds {any[]} 行政区域ID前缀列表
 * @params queryType {AlarmQueryTypeCommonType} All = 0,Confirmed = 1,NotConfirm = 2
 * @params types {any[]} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测
 * @params alarmSourceIds {any[]} 告警源Id列表
 * @params alarmLevels {any[]} 告警级别
 * @params organizationIds {any[]} 所属组织架构ID列表
 * @params alarmSourceTypes {any[]} 告警源类型列表10000000-设备 20000000-网关 30000000-服务器 40000000-平台
 */
export type GetAlarmCounterByDistrictIdsReqType = {
    'X-version'?: string;
    beginTime?: string;
    endTime?: string;
    districtIds?: any[];
    prefixDistrictIds?: any[];
    queryType?: AlarmQueryTypeCommonType;
    types?: any[];
    alarmSourceIds?: any[];
    alarmLevels?: any[];
    organizationIds?: any[];
    alarmSourceTypes?: any[];
};

/**
 * 根据行政区域id列表查询告警总数——响应参数类型定义
 * @params districtId {string} 行政区域id
 * @params districtName {string} 行政区域名称
 * @params count {number} 总数
 */
export type GetAlarmCounterByDistrictIdsResType = {
    districtId: string;
    districtName: string;
    count: number;
};

/**
 * 提供按类型ID分组的告警总数——请求参数类型定义
 * @headers X-version {string}
 * @params beginTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params districtIds {any[]} 行政区域ID列表
 * @params prefixDistrictIds {any[]} 行政区域ID前缀列表
 * @params queryType {AlarmQueryTypeCommonType} All = 0,Confirmed = 1,NotConfirm = 2
 * @params types {any[]} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测
 * @params alarmSourceIds {any[]} 告警源Id列表
 * @params alarmLevels {any[]} 告警级别
 * @params organizationIds {any[]} 所属组织架构ID列表
 * @params alarmSourceTypes {any[]} 告警源类型列表10000000-设备 20000000-网关 30000000-服务器 40000000-平台
 */
export type GetAlarmCounterByTypesReqType = {
    'X-version'?: string;
    beginTime?: string;
    endTime?: string;
    districtIds?: any[];
    prefixDistrictIds?: any[];
    queryType?: AlarmQueryTypeCommonType;
    types?: any[];
    alarmSourceIds?: any[];
    alarmLevels?: any[];
    organizationIds?: any[];
    alarmSourceTypes?: any[];
};

/**
 * 提供按类型ID分组的告警总数——响应参数类型定义
 * @params districtId {string} 行政区域id
 * @params districtName {string} 行政区域名称
 * @params count {number} 总数
 */
export type GetAlarmCounterByTypesResType = {
    districtId: string;
    districtName: string;
    count: number;
};

/**
 * 提供按告警源ID分组的告警总数——请求参数类型定义
 * @headers X-version {string}
 * @params beginTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params districtIds {any[]} 行政区域ID列表
 * @params prefixDistrictIds {any[]} 行政区域ID前缀列表
 * @params queryType {AlarmQueryTypeCommonType} All = 0,Confirmed = 1,NotConfirm = 2
 * @params types {any[]} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测
 * @params alarmSourceIds {any[]} 告警源Id列表
 * @params alarmLevels {any[]} 告警级别
 * @params organizationIds {any[]} 所属组织架构ID列表
 * @params alarmSourceTypes {any[]} 告警源类型列表10000000-设备 20000000-网关 30000000-服务器 40000000-平台
 */
export type GetAlarmCounterByAlarmSourceIdsReqType = {
    'X-version'?: string;
    beginTime?: string;
    endTime?: string;
    districtIds?: any[];
    prefixDistrictIds?: any[];
    queryType?: AlarmQueryTypeCommonType;
    types?: any[];
    alarmSourceIds?: any[];
    alarmLevels?: any[];
    organizationIds?: any[];
    alarmSourceTypes?: any[];
};

/**
 * 提供按告警源ID分组的告警总数——响应参数类型定义
 * @params districtId {string} 行政区域id
 * @params districtName {string} 行政区域名称
 * @params count {number} 总数
 */
export type GetAlarmCounterByAlarmSourceIdsResType = {
    districtId: string;
    districtName: string;
    count: number;
};

/**
 * 提供按级别分组的告警总数——请求参数类型定义
 * @headers X-version {string}
 * @params beginTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params districtIds {any[]} 行政区域ID列表
 * @params prefixDistrictIds {any[]} 行政区域ID前缀列表
 * @params queryType {AlarmQueryTypeCommonType} All = 0,Confirmed = 1,NotConfirm = 2
 * @params types {any[]} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测
 * @params alarmSourceIds {any[]} 告警源Id列表
 * @params alarmLevels {any[]} 告警级别
 * @params organizationIds {any[]} 所属组织架构ID列表
 * @params alarmSourceTypes {any[]} 告警源类型列表10000000-设备 20000000-网关 30000000-服务器 40000000-平台
 */
export type GetAlarmCounterByLevelReqType = {
    'X-version'?: string;
    beginTime?: string;
    endTime?: string;
    districtIds?: any[];
    prefixDistrictIds?: any[];
    queryType?: AlarmQueryTypeCommonType;
    types?: any[];
    alarmSourceIds?: any[];
    alarmLevels?: any[];
    organizationIds?: any[];
    alarmSourceTypes?: any[];
};

/**
 * 提供按级别分组的告警总数——响应参数类型定义
 * @params districtId {string} 行政区域id
 * @params districtName {string} 行政区域名称
 * @params count {number} 总数
 */
export type GetAlarmCounterByLevelResType = {
    districtId: string;
    districtName: string;
    count: number;
};

/**
 * 提供按所属组织架构分组的告警总数——请求参数类型定义
 * @headers X-version {string}
 * @params beginTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params districtIds {any[]} 行政区域ID列表
 * @params prefixDistrictIds {any[]} 行政区域ID前缀列表
 * @params queryType {AlarmQueryTypeCommonType} All = 0,Confirmed = 1,NotConfirm = 2
 * @params types {any[]} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测
 * @params alarmSourceIds {any[]} 告警源Id列表
 * @params alarmLevels {any[]} 告警级别
 * @params organizationIds {any[]} 所属组织架构ID列表
 * @params alarmSourceTypes {any[]} 告警源类型列表10000000-设备 20000000-网关 30000000-服务器 40000000-平台
 */
export type GetAlarmCounterByOrganizationReqType = {
    'X-version'?: string;
    beginTime?: string;
    endTime?: string;
    districtIds?: any[];
    prefixDistrictIds?: any[];
    queryType?: AlarmQueryTypeCommonType;
    types?: any[];
    alarmSourceIds?: any[];
    alarmLevels?: any[];
    organizationIds?: any[];
    alarmSourceTypes?: any[];
};

/**
 * 提供按所属组织架构分组的告警总数——响应参数类型定义
 * @params districtId {string} 行政区域id
 * @params districtName {string} 行政区域名称
 * @params count {number} 总数
 */
export type GetAlarmCounterByOrganizationResType = {
    districtId: string;
    districtName: string;
    count: number;
};

/**
 * 提供告警总数的统计——请求参数类型定义
 * @headers X-version {string}
 * @params beginTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params districtIds {any[]} 行政区域ID列表
 * @params prefixDistrictIds {any[]} 行政区域ID前缀列表
 * @params queryType {AlarmQueryTypeCommonType} All = 0,Confirmed = 1,NotConfirm = 2
 * @params types {any[]} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测
 * @params alarmSourceIds {any[]} 告警源Id列表
 * @params alarmLevels {any[]} 告警级别
 * @params organizationIds {any[]} 所属组织架构ID列表
 * @params alarmSourceTypes {any[]} 告警源类型列表10000000-设备 20000000-网关 30000000-服务器 40000000-平台
 */
export type GetAlarmCounterReqType = {
    'X-version'?: string;
    beginTime?: string;
    endTime?: string;
    districtIds?: any[];
    prefixDistrictIds?: any[];
    queryType?: AlarmQueryTypeCommonType;
    types?: any[];
    alarmSourceIds?: any[];
    alarmLevels?: any[];
    organizationIds?: any[];
    alarmSourceTypes?: any[];
};

/**
 * 提供告警总数的统计——响应参数类型定义
 * @params count {number} 数量
 */
export type GetAlarmCounterResType = {
    count: number;
};

/**
 * 提供按时间分组的告警总数——请求参数类型定义
 * @headers X-version {string}
 */
export type GetAlarmCounterByMinuteReqType = {
    'X-version'?: string;
};

/**
 * 提供按时间分组的告警总数——响应参数类型定义
 * @params timeSpan {string} 时间点
 * @params count {number} 数量
 * @params typeName {string} 类型名称
 */
export type GetAlarmCounterByMinuteResType = {
    timeSpan: string;
    count: number;
    typeName: string;
};

/**
 * 提供按时间分组的告警总数——请求参数类型定义
 * @headers X-version {string}
 */
export type QueryAlarmCounterByTimeReqType = {
    'X-version'?: string;
};

/**
 * 提供按时间分组的告警总数——响应参数类型定义
 * @params timeSpan {string} 时间点
 * @params count {number} 数量
 * @params typeName {string} 类型名称
 */
export type QueryAlarmCounterByTimeResType = {
    timeSpan: string;
    count: number;
    typeName: string;
};

/**
 * 创建告警信息——请求参数类型定义
 * @headers X-version {string}
 * @params alarmSourceId {string} 测点编号 （必填）
 * @params alarmSourceName {string} 测点名称 （必填）
 * @params alarmSourceType {number} 异常类型Id
 * @params alarmSourceTypeName {string} 异常类型名称
 * @params alarmDescription {string} 告警描述
 * @params alarmName {string} 告警名称
 * @params aroseTime {string} 告警产生时间 （必填）
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params deleteTime {string} 告警消除时间
 * @params alarmTypeId {number} 告警类型Id （必填）
 */
export type AddThirdAlarmsReqType = {
    'X-version'?: string;
    alarmSourceId: string;
    alarmSourceName: string;
    alarmSourceType?: number;
    alarmSourceTypeName?: string;
    alarmDescription?: string;
    alarmName?: string;
    aroseTime: string;
    longitude?: number;
    latitude?: number;
    deleteTime?: string;
    alarmTypeId: number;
};
