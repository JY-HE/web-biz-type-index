/**
 * 告警时间查询类型
 * 产生时间=0
 * 确认时间=1
 * 删除时间=2
 */
type AlarmTimeQueryTypeCommonType = 0 | 1 | 2;

/**
 * 告警查询类型
 * All = 0
 * Confirmed = 1
 * NotConfirm = 2
 */
type AlarmQueryTypeCommonType = 0 | 1 | 2;

/**
 * 查询告警信息请求
 * @params keyword {string} 模糊匹配关键字
 * @params timeQueryType {AlarmTimeQueryTypeCommonType} 时间查询类型, 产生时间=0，确认时间=1，删除时间=2
 * @params pageIndex {number} 页码,从1开始
 * @params pageSize {number} 页容量, [1,1024]
 * @params beginTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params districtIds {any[]} 前缀区域码列表
 * @params prefixDistrictIds {any[]} 前缀区域码，传入完整的区域码也会处理为前缀区域码
 * @params queryType {AlarmQueryTypeCommonType} All = 0,Confirmed = 1,NotConfirm = 2
 * @params types {any[]} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测
 * @params alarmSourceIds {any[]} 告警源Id列表
 * @params alarmLevels {any[]} 告警级别
 * @params organizationIds {any[]} 所属组织架构ID列表
 */
type AlarmInfoRequestInCommonType = {
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
};

/**
 * 告警响应包对象
 * @params id {string} Id
 * @params alarmSourceId {string} 告警源ID
 * @params alarmSourceName {string} 告警源名称
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
 */
type AlarmEntityOutCommonType = {
    id?: string;
    alarmSourceId?: string;
    alarmSourceName?: string;
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
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {AlarmEntityOutCommonType[]} 记录
 */
type AlarmEntityOutReqCommonType = {
    totalCount?: number;
    records?: AlarmEntityOutCommonType[];
};

/**
 * 坐标
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 */
type CoordinateCommonType = {
    longitude?: number;
    latitude?: number;
};

/**
 * 告警排序
 * 0:Default
 * 1:StatusSort
 */
type SortTypeForAlertCommonType = 0 | 1;

/**
 * 高级搜索参数
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params keyword {string} 关键字
 * @params level {number} 告警等级，1-一般 | 2-较大 | 4-重大 | 8-特大
 * @params status {any[]} 告警状态，0-告警中|1-已解决|2-手动解决
 * @params platformId {string} 平台 Id
 * @params ignoreOtherPlatform {boolean} 查询结果是否忽略其他平台数据。
 * @params areaCode {string} 行政区域码
 * @params includeSubTypes {boolean} 是否包含子类型记录。true 时包含子告警类型记录，否则只查当前告警类型记录
 * @params startTime {string} 开始时间（基于告警产生时间查询）
 * @params endTime {string} 结束时间（基于告警产生时间查询）
 * @params typeIds {any[]} 类型 Id
 * @params sourceTypeIds {any[]} 源类型 Id
 * @params assetIds {any[]} 资产 Id
 * @params upLeft {CoordinateCommonType} 左上角坐标
 * @params bottomRight {CoordinateCommonType} 右下角坐标
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 * @params sortType {SortTypeForAlertCommonType} 排序类型。0：默认排序，1按照未处理、 已处理排序，相同状态按照时间降序排序
 */
type AlertRecordAdvanceQueryRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    keyword?: string;
    level?: number;
    status?: any[];
    platformId?: string;
    ignoreOtherPlatform?: boolean;
    areaCode?: string;
    includeSubTypes?: boolean;
    startTime?: string;
    endTime?: string;
    typeIds?: any[];
    sourceTypeIds?: any[];
    assetIds?: any[];
    upLeft?: CoordinateCommonType;
    bottomRight?: CoordinateCommonType;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
    sortType?: SortTypeForAlertCommonType;
};

/**
 * 告警状态
 * 0:Firing
 * 1:Resolve
 * 2:ManualResolve
 */
type AlertStatusCommonType = 0 | 1 | 2;

/**
 * 告警源
 * @params instance {string} 实例
 * @params processorUrl {string} 处理平台 Url
 */
type AlertSourceCommonType = {
    instance?: string;
    processorUrl?: string;
};

/**
 * 联系人
 * @params id {string} 联系人ID
 * @params name {string} 名称
 * @params phone {string} 联系人电话
 * @params department {string} 部门（非组织架构内，外部数据）
 * @params title {string} 职位（非组织架构内，外部数据）
 */
type ContactCommonType = {
    id?: string;
    name?: string;
    phone?: string;
    department?: string;
    title?: string;
};

/**
 * 告警记录返回值
 * @params id {number} Id
 * @params name {string} 告警名称
 * @params typeId {string} 告警类型 Id
 * @params typeName {string} 告警类型名称
 * @params typeIdPath {string} 告警类型IdPath
 * @params typeNamePath {string} 告警类型名字Path
 * @params level {number} 告警级别
 * @params sourceTypeId {string} 告警源类型 Id
 * @params sourceTypeName {string} 告警源类型名称
 * @params status {AlertStatusCommonType} 告警状态
 * @params startTime {string} 告警产生时间
 * @params endTime {string} 告警消除时间
 * @params assetId {string} 资产 Id
 * @params description {string} 告警描述
 * @params resolverId {string} 告警消除人 Id
 * @params resolverName {string} 告警消除人名称
 * @params resolveMessage {string} 处置信息
 * @params assetName {string} 资产名
 * @params createTime {string} 服务创建记录时间
 * @params updateTime {string} 服务更新记录时间
 * @params resourceId {string} 资源 Id
 * @params platformId {string} 平台 Id
 * @params platformName {string} 平台名称
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params areaCode {string} 行政区域码
 * @params source {AlertSourceCommonType} 告警源
 * @params extension {undefined} 扩展信息
 * @params contact {ContactCommonType} 联系人
 * @params isConvertEvent {boolean} 是否已转成事件
 */
type AlertRecordDetailOutCommonType = {
    id?: number;
    name?: string;
    typeId?: string;
    typeName?: string;
    typeIdPath?: string;
    typeNamePath?: string;
    level?: number;
    sourceTypeId?: string;
    sourceTypeName?: string;
    status?: AlertStatusCommonType;
    startTime?: string;
    endTime?: string;
    assetId?: string;
    description?: string;
    resolverId?: string;
    resolverName?: string;
    resolveMessage?: string;
    assetName?: string;
    createTime?: string;
    updateTime?: string;
    resourceId?: string;
    platformId?: string;
    platformName?: string;
    longitude?: number;
    latitude?: number;
    areaCode?: string;
    source?: AlertSourceCommonType;
    extension?: undefined;
    contact?: ContactCommonType;
    isConvertEvent?: boolean;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {AlertRecordDetailOutCommonType[]} 记录
 */
type AlertRecordDetailOutReqCommonType = {
    totalCount?: number;
    records?: AlertRecordDetailOutCommonType[];
};

/**
 * 事件等级
 * 1-未定级
 * 2-IV级(一般)
 * 4-III级(较大)
 * 8-II级(重大)
 * 16-I级(特大)
 */
type EventPriorityCommonType = 1 | 2 | 4 | 8 | 16;

/**
 * 告警转事件请求
 * @params alertId {number} 告警ID（apts告警Id）
 * @params eventTypeId {string} 事件类型Id
 * @params eventName {string} 告警名称
 * @params eventDescription {string} 事件描述
 * @params eventPriority {EventPriorityCommonType} 事件优先级,默认III级(较大)
 */
type AlertConverterEventRequestCommonType = {
    alertId: number;
    eventTypeId: string;
    eventName?: string;
    eventDescription?: string;
    eventPriority?: EventPriorityCommonType;
};

/**
 * 事件类型
 * @params name {string} 事件类型名称
 * @params description {string} 事件类型描述
 * @params value {number} 事件类型值
 * @params isEffective {boolean} 事件类型是否可用
 * @params code {string} 事件类型编码
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params id {string} 主键ID
 */
type EventTypeCommonType = {
    name?: string;
    description?: string;
    value?: number;
    isEffective?: boolean;
    code?: string;
    platformId?: string;
    resourceId?: string;
    id?: string;
};

/**
 * 组信息
 * @params description {string} 组信息描述
 * @params id {string} ID
 * @params name {string} 名称
 */
type GroupInfoCommonType = {
    description?: string;
    id?: string;
    name?: string;
};

/**
 * 归属单位类型
 * 0-未知
 * 1-组织架构
 * 2-普通用户组
 */
type UnitTypeCommonType = 0 | 1 | 2;

/**
 * 事件归属单位
 * @params id {string} ID
 * @params name {string} 归属单位名称
 * @params path {string} 组织架构路径
 * @params unitType {UnitTypeCommonType} 归属单位类型             0-未知             1-组织架构             2-普通用户组
 */
type EventUnitCommonType = {
    id?: string;
    name?: string;
    path?: string;
    unitType?: UnitTypeCommonType;
};

/**
 * 来源类型
 * 0-未知
 * 1-事件任务
 * 2-普通用户组
 */
type SourceTypeCommonType = 0 | 1 | 2;

/**
 * 事件来源
 * @params id {string} ID
 * @params name {string} 来源名称
 * @params sourceType {SourceTypeCommonType} 来源类型             0-未知             1-事件任务             2-普通用户组
 */
type EventSourceCommonType = {
    id?: string;
    name?: string;
    sourceType?: SourceTypeCommonType;
};

/**
 * 事件绑定的响应等级
 * @params preplanId {string} 预案Id，用于关联预案的响应类型
 * @params enableResponseLevelId {string} 启动的响应等级Id
 */
type EventResponseLevelCommonType = {
    preplanId?: string;
    enableResponseLevelId?: string;
};

/**
 * 事件V1版本实体
 * @params id {string} Id
 * @params name {string} 事件名称
 * @params priority {number} 事件优先级
 * @params state {number} 事件状态
 * @params longitude {number} 事件发生地经度
 * @params latitude {number} 事件发生地纬度
 * @params eventType {EventTypeCommonType} 事件类型
 * @params createdTime {string} 事件创建时间
 * @params areaCode {string} 行政区域码
 * @params updateTime {string} 更新时间
 * @params description {string} 事件描述
 * @params group {GroupInfoCommonType} 事件组
 * @params sceneGroup {GroupInfoCommonType} 现场指挥组
 * @params happenedTime {string} 事件发生时间
 * @params finishedTime {string} 时间完成时间
 * @params address {string} 事件发生地址
 * @params submitUnit {EventUnitCommonType} 报送单位
 * @params unit {EventUnitCommonType} 事件归属单位
 * @params source {EventSourceCommonType} 事件源
 * @params extension {string} 事件扩展字段，用于存项目额外信息
 * @params typeID {string} 事件类型 Id
 * @params expectStartedTime {string} 事件期望发生时间
 * @params expectFinishedTime {string} 事件期望结束时间
 * @params isMock {boolean} 是否模拟事件
 * @params totalTaskCount {number} 任务总数（父任务）
 * @params noStatedTaskCount {number} 未开始的任务总数（父任务）
 * @params finishedTaskCount {number} 已结束的任务总数（父任务）
 * @params isDeleted {boolean} 是否已被删除
 * @params responseLevel {EventResponseLevelCommonType} 事件的响应等级
 * @params associatePreplanId {string} 事件绑定的预案id
 * @params resourceId {string} 资源Id
 */
type EventEntityOutV1CommonType = {
    id?: string;
    name?: string;
    priority?: number;
    state?: number;
    longitude?: number;
    latitude?: number;
    eventType?: EventTypeCommonType;
    createdTime?: string;
    areaCode?: string;
    updateTime?: string;
    description?: string;
    group?: GroupInfoCommonType;
    sceneGroup?: GroupInfoCommonType;
    happenedTime?: string;
    finishedTime?: string;
    address?: string;
    submitUnit?: EventUnitCommonType;
    unit?: EventUnitCommonType;
    source?: EventSourceCommonType;
    extension?: string;
    typeID?: string;
    expectStartedTime?: string;
    expectFinishedTime?: string;
    isMock?: boolean;
    totalTaskCount?: number;
    noStatedTaskCount?: number;
    finishedTaskCount?: number;
    isDeleted?: boolean;
    responseLevel?: EventResponseLevelCommonType;
    associatePreplanId?: string;
    resourceId?: string;
};

/**
 * 资产类型
 * 0:Device,设备
 * 1:Client,客户端
 * 2:Terminal,终端
 * 3:Network,网络
 * 4:ThirdPlatform,第三方平台
 * 5:PositionEquipment,定位装备
 */
type AssetTypeCommonType = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * 指标状态（静态，静态）
 * 0:Static,静态
 * 1:Dynamic,静态
 */
type MetricsStatusCommonType = 0 | 1;

/**
 * 告警类型返回对象
 * @params id {string} ID
 * @params name {string} 名称
 * @params description {string} 描述
 * @params parentId {string} 父类型 Id
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params resourceId {string} 资源 Id
 * @params platformId {string} 平台 Id
 */
type AlertTypeOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
    parentId?: string;
    createTime?: string;
    updateTime?: string;
    resourceId?: string;
    platformId?: string;
};

/**
 * 告警信息
 * @params id {number} Id
 * @params name {string} 告警名称
 * @params typeId {string} 告警类型 Id
 * @params typeName {string} 告警类型名称
 * @params typeIdPath {string} 告警类型IdPath
 * @params typeNamePath {string} 告警类型名字Path
 * @params level {number} 告警级别
 * @params sourceTypeId {string} 告警源类型 Id
 * @params sourceTypeName {string} 告警源类型名称
 * @params status {AlertStatusCommonType} 告警状态
 * @params startTime {string} 告警产生时间
 * @params endTime {string} 告警消除时间
 * @params assetId {string} 资产 Id
 * @params description {string} 告警描述
 * @params resolverId {string} 告警消除人 Id
 * @params resolverName {string} 告警消除人名称
 * @params resolveMessage {string} 处置信息
 * @params assetName {string} 资产名
 * @params createTime {string} 服务创建记录时间
 * @params updateTime {string} 服务更新记录时间
 * @params resourceId {string} 资源 Id
 * @params platformId {string} 平台 Id
 * @params platformName {string} 平台名称
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params areaCode {string} 行政区域码
 * @params source {AlertSourceCommonType} 告警源
 * @params extension {undefined} 扩展信息
 */
type AlertRecordOutCommonType = {
    id?: number;
    name?: string;
    typeId?: string;
    typeName?: string;
    typeIdPath?: string;
    typeNamePath?: string;
    level?: number;
    sourceTypeId?: string;
    sourceTypeName?: string;
    status?: AlertStatusCommonType;
    startTime?: string;
    endTime?: string;
    assetId?: string;
    description?: string;
    resolverId?: string;
    resolverName?: string;
    resolveMessage?: string;
    assetName?: string;
    createTime?: string;
    updateTime?: string;
    resourceId?: string;
    platformId?: string;
    platformName?: string;
    longitude?: number;
    latitude?: number;
    areaCode?: string;
    source?: AlertSourceCommonType;
    extension?: undefined;
};

/**
 * 资产指标
 * @params metricsId {string} 指标ID
 * @params name {string} 指标名称
 * @params metricsStatus {MetricsStatusCommonType} 指标状态
 * @params metricsValue {string} 静态指标值
 * @params alertTypeId {string} 告警类型
 * @params alertType {AlertTypeOutCommonType} 告警类型
 * @params jobMetaName {string} 动态指标元数据名称
 * @params resourceId {string} 来源ID
 * @params alertLevel {number} 告警等级
 * @params alertTime {string} 告警时间
 * @params alertRecords {AlertRecordOutCommonType[]} 告警列表
 */
type AssetMetricsOutCommonType = {
    metricsId?: string;
    name?: string;
    metricsStatus?: MetricsStatusCommonType;
    metricsValue?: string;
    alertTypeId?: string;
    alertType?: AlertTypeOutCommonType;
    jobMetaName?: string;
    resourceId?: string;
    alertLevel?: number;
    alertTime?: string;
    alertRecords?: AlertRecordOutCommonType[];
};

/**
 * 资产输出基类
 * @params id {string} 标识
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params alertRecords {AlertRecordOutCommonType[]} 告警记录
 * @params areaCode {string} 行政区域码
 * @params areaName {string} 行政区域名称
 * @params alertLevel {number} 告警等级
 * @params alertTime {string} 告警时间
 * @params resourceId {string} 来源Id
 */
type IAssetBaseOutCommonType = {
    id?: string;
    assetType?: AssetTypeCommonType;
    assetMetrics?: AssetMetricsOutCommonType[];
    alertRecords?: AlertRecordOutCommonType[];
    areaCode?: string;
    areaName?: string;
    alertLevel?: number;
    alertTime?: string;
    resourceId?: string;
};

/**
 * 告警排序规则
 * 0:None,不处理排序
 * 1:LevelThenStartTimeDesc,等级再开始时间倒序排
 */
type AlertSortTypeCommonType = 0 | 1;

/**
 * 告警资产搜索
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params assetIds {any[]} 资产ID
 * @params keyword {string} 关键词
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params secondaryAssetType {number} 二级资产类型（依赖一级资产类型）
 * @params relateTypeId {string} 关联类型ID
 * @params relateTypeIds {any[]} 关联类型ID集合查询
 * @params center {CoordinateCommonType} 圆心【与Radius配合使用】
 * @params radius {number} 半径（单位米）
 * @params isAlertAsset {boolean} 是否只查告警资产
 * @params alertSortType {AlertSortTypeCommonType} 告警排序类型
 */
type AssetSearchInCommonType = {
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: any[];
    keyword?: string;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
    assetType?: AssetTypeCommonType;
    secondaryAssetType?: number;
    relateTypeId?: string;
    relateTypeIds?: any[];
    center?: CoordinateCommonType;
    radius?: number;
    isAlertAsset?: boolean;
    alertSortType?: AlertSortTypeCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {IAssetBaseOutCommonType[]} 记录
 */
type IAssetBaseOutReqCommonType = {
    totalCount?: number;
    records?: IAssetBaseOutCommonType[];
};

/**
 * 排序类型
 * 0:AscendingByDistance,距离升序
 * 1:DescendingByDistance,距离降序
 */
type SortRuleCommonType = 0 | 1;

/**
 * 周边资产查询
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params assetIds {any[]} 资产ID
 * @params keyword {string} 关键词
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params secondaryAssetType {number} 二级资产类型（依赖一级资产类型）
 * @params relateTypeId {string} 关联类型ID
 * @params isSearchNullRelateType {boolean} 是否查询空关联类型
 * @params relateTypeIds {any[]} 关联类型ID集合查询
 * @params assetTypeIds {any[]} 批量资产类型ID集合
 * @params center {CoordinateCommonType} 圆心
 * @params radius {number} 半径（单位米）
 * @params sortRule {SortRuleCommonType} 排序类型
 */
type CircleAreaAssetQueryRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: any[];
    keyword?: string;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
    assetType?: AssetTypeCommonType;
    secondaryAssetType?: number;
    relateTypeId?: string;
    isSearchNullRelateType?: boolean;
    relateTypeIds?: any[];
    assetTypeIds?: any[];
    center: CoordinateCommonType;
    radius: number;
    sortRule?: SortRuleCommonType;
};

/**
 * 连接状态
 * 1:Online,在线
 * 2:UnOnline,不在线
 */
type AssetStatusCommonType = 1 | 2;

/**
 * 资产带距离
 * @params id {string} 资产Id
 * @params name {string} 资产名称
 * @params ip {string} IP(辅助通过IP查资产、可能为空)
 * @params number {string} 号码
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params secondaryAssetType {number} 二级资产类型（依赖一级资产类型，无法枚举）
 * @params contactID {string} 联系人ID
 * @params contactName {string} 联系人名称
 * @params contactPhone {string} 联系人电话
 * @params contactTitle {string} 联系人职位
 * @params contactDepartment {string} 联系人部门
 * @params resourceId {string} 资源关系ID
 * @params areaCode {string} 行政区域码
 * @params relateTypeId {string} 关联类型
 * @params relateCameraId {string} 关联监控ID
 * @params networkID {string} 网络ID
 * @params status {AssetStatusCommonType} 状态
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params distance {number} 距离
 */
type AssetWithDistanceCommonType = {
    id?: string;
    name?: string;
    ip?: string;
    number?: string;
    assetType?: AssetTypeCommonType;
    secondaryAssetType?: number;
    contactID?: string;
    contactName?: string;
    contactPhone?: string;
    contactTitle?: string;
    contactDepartment?: string;
    resourceId?: string;
    areaCode?: string;
    relateTypeId?: string;
    relateCameraId?: string;
    networkID?: string;
    status?: AssetStatusCommonType;
    longitude?: number;
    latitude?: number;
    distance?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {AssetWithDistanceCommonType[]} 记录
 */
type AssetWithDistanceReqCommonType = {
    totalCount?: number;
    records?: AssetWithDistanceCommonType[];
};

/**
 * 告警筛选
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 */
type AlertFilterCommonType = {
    startTime?: string;
    endTime?: string;
};

/**
 * 资产排序规则
 * 0:AscendingByDistance,距离升序
 * 1:DescendingByDistance,距离降序
 * 2:DescendingByAlertCount,告警数降序
 */
type AssetSortRuleCommonType = 0 | 1 | 2;

/**
 * 周边资产
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params assetIds {any[]} 资产ID
 * @params keyword {string} 关键词
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params secondaryAssetType {number} 二级资产类型（依赖一级资产类型）
 * @params relateTypeId {string} 关联类型ID
 * @params isSearchNullRelateType {boolean} 是否查询空关联类型
 * @params relateTypeIds {any[]} 关联类型ID集合查询
 * @params assetTypeIds {any[]} 批量资产类型ID集合
 * @params alert {AlertFilterCommonType} 告警过滤
 * @params assetSortRule {AssetSortRuleCommonType} 排序类型
 * @params center {CoordinateCommonType} 圆心
 * @params radius {number} 半径（单位米）
 */
type CircleAreaAssetQuerySearchInCommonType = {
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: any[];
    keyword?: string;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
    assetType?: AssetTypeCommonType;
    secondaryAssetType?: number;
    relateTypeId?: string;
    isSearchNullRelateType?: boolean;
    relateTypeIds?: any[];
    assetTypeIds?: any[];
    alert?: AlertFilterCommonType;
    assetSortRule?: AssetSortRuleCommonType;
    center: CoordinateCommonType;
    radius: number;
};

/**
 * 资产详情
 * @params id {string} 资产Id
 * @params name {string} 资产名称
 * @params ip {string} IP(辅助通过IP查资产、可能为空)
 * @params number {string} 号码
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params secondaryAssetType {number} 二级资产类型（依赖一级资产类型，无法枚举）
 * @params contactID {string} 联系人ID
 * @params contactName {string} 联系人名称
 * @params contactPhone {string} 联系人电话
 * @params contactTitle {string} 联系人职位
 * @params contactDepartment {string} 联系人部门
 * @params resourceId {string} 资源关系ID
 * @params areaCode {string} 行政区域码
 * @params relateTypeId {string} 关联类型
 * @params relateCameraId {string} 关联监控ID
 * @params networkID {string} 网络ID
 * @params status {AssetStatusCommonType} 状态
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params distance {number} 距离
 * @params alertCount {number} 距离
 */
type AssetDetailCommonType = {
    id?: string;
    name?: string;
    ip?: string;
    number?: string;
    assetType?: AssetTypeCommonType;
    secondaryAssetType?: number;
    contactID?: string;
    contactName?: string;
    contactPhone?: string;
    contactTitle?: string;
    contactDepartment?: string;
    resourceId?: string;
    areaCode?: string;
    relateTypeId?: string;
    relateCameraId?: string;
    networkID?: string;
    status?: AssetStatusCommonType;
    longitude?: number;
    latitude?: number;
    distance?: number;
    alertCount?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {AssetDetailCommonType[]} 记录
 */
type AssetDetailReqCommonType = {
    totalCount?: number;
    records?: AssetDetailCommonType[];
};

/**
 * 资产通用搜索
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params assetIds {any[]} 资产ID
 * @params keyword {string} 关键词
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params secondaryAssetType {number} 二级资产类型（依赖一级资产类型）
 * @params relateTypeId {string} 关联类型ID
 * @params isSearchNullRelateType {boolean} 是否查询空关联类型
 * @params relateTypeIds {any[]} 关联类型ID集合查询
 * @params assetTypeIds {any[]} 批量资产类型ID集合
 */
type AssetCommonSearchInCommonType = {
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: any[];
    keyword?: string;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
    assetType?: AssetTypeCommonType;
    secondaryAssetType?: number;
    relateTypeId?: string;
    isSearchNullRelateType?: boolean;
    relateTypeIds?: any[];
    assetTypeIds?: any[];
};

/**
 * 资产带关联监控
 * @params id {string} 资产Id
 * @params name {string} 资产名称
 * @params ip {string} IP(辅助通过IP查资产、可能为空)
 * @params number {string} 号码
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params secondaryAssetType {number} 二级资产类型（依赖一级资产类型，无法枚举）
 * @params contactID {string} 联系人ID
 * @params contactName {string} 联系人名称
 * @params contactPhone {string} 联系人电话
 * @params contactTitle {string} 联系人职位
 * @params contactDepartment {string} 联系人部门
 * @params resourceId {string} 资源关系ID
 * @params areaCode {string} 行政区域码
 * @params relateTypeId {string} 关联类型
 * @params relateCameraId {string} 关联监控ID
 * @params networkID {string} 网络ID
 * @params status {AssetStatusCommonType} 状态
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params relateCameraIds {any[]} 关联监控ID集合
 */
type AssetWithCameraCommonType = {
    id?: string;
    name?: string;
    ip?: string;
    number?: string;
    assetType?: AssetTypeCommonType;
    secondaryAssetType?: number;
    contactID?: string;
    contactName?: string;
    contactPhone?: string;
    contactTitle?: string;
    contactDepartment?: string;
    resourceId?: string;
    areaCode?: string;
    relateTypeId?: string;
    relateCameraId?: string;
    networkID?: string;
    status?: AssetStatusCommonType;
    longitude?: number;
    latitude?: number;
    relateCameraIds?: any[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {AssetWithCameraCommonType[]} 记录
 */
type AssetWithCameraReqCommonType = {
    totalCount?: number;
    records?: AssetWithCameraCommonType[];
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
 * 任务基本信息
 * @params id {string} ID
 * @params name {string} 名称
 */
type TaskInfoCommonType = {
    id?: string;
    name?: string;
};

/**
 * 通话记录类型
 * 1:_1
 * 2:_2
 * 4:_4
 * 8:_8
 * 16:_16
 * 32:_32
 * 64:_64
 * 128:_128
 * 256:_256
 * 512:_512
 */
type CallRecordTypeCommonType = 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512;

/**
 * ss文件类型
 * 0-未知
 * 1-图片文件
 * 2-视频文件
 * 3-音频文件
 * 4-文本文件
 */
type FileTypeCommonType = 0 | 1 | 2 | 3 | 4;

/**
 * 文件记录
 * @params id {string} Fss 服务的文件 Id
 * @params guid {string} Fss 服务的文件组 Id
 * @params userName {string} Fss 服务的文件名
 * @params fileType {FileTypeCommonType} Fss 服务的文件类型
 * @params fileName {string} Fss 服务的文件名
 * @params filePath {string} Fss 服务的文件路径
 * @params fileGenTime {string} Fss 服务的文件创建时间
 * @params fileUploadTime {string} Fss 服务的文件上传时间
 * @params fileSize {number} Fss 服务的文件大小
 */
type FileRecordCommonType = {
    id?: string;
    guid?: string;
    userName?: string;
    fileType?: FileTypeCommonType;
    fileName?: string;
    filePath?: string;
    fileGenTime?: string;
    fileUploadTime?: string;
    fileSize?: number;
};

/**
 * 通话数据
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params communicationId {string} 通话信息Id
 * @params callerName {string} 主叫名称
 * @params callerNumber {string} 主叫号码
 * @params calledName {string} 被叫名称
 * @params calledNumber {string} 被叫号码
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params hasAnswered {boolean} 是否接听
 * @params taskInfos {TaskInfoCommonType[]} 任务基本信息
 * @params type {CallRecordTypeCommonType} 通话记录类型 1-普通通话 2-队列通话 4-会议通话 8-广播通话 16-视频会议通话 32-录音通知通话
 * @params recordId {string} 录音记录 Id
 * @params fileRecord {FileRecordCommonType} 录音通知文件记录
 * @params logId {string} 日志记录id
 * @params duration {number} 时长（单位：秒）
 */
type CommunicationDataOutCommonType = {
    id?: string;
    eventId?: string;
    eventName?: string;
    createdTime?: string;
    communicationId?: string;
    callerName?: string;
    callerNumber?: string;
    calledName?: string;
    calledNumber?: string;
    startTime?: string;
    endTime?: string;
    hasAnswered?: boolean;
    taskInfos?: TaskInfoCommonType[];
    type?: CallRecordTypeCommonType;
    recordId?: string;
    fileRecord?: FileRecordCommonType;
    logId?: string;
    duration?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {CommunicationDataOutCommonType[]} 记录
 */
type CommunicationDataOutReqCommonType = {
    totalCount?: number;
    records?: CommunicationDataOutCommonType[];
};

/**
 * 文件类型
 * 0:未知|Unknown
 * 1:图片文件|Picture
 * 2:视频文件|Video
 * 3:音频文件|Audio
 * 4:文本文件|Text
 */
type FileEntityTypeCommonType = 0 | 1 | 2 | 3 | 4;

/**
 * 节点选中状态
 * 0:_0
 * 1:_1
 * 2:_2
 */
type UseStatusTypeCommonType = 0 | 1 | 2;

/**
 * 目录实体
 * @params id {string} 目录ID
 * @params name {string} 目录名称
 * @params parentId {string} 父目录Id
 * @params isPublic {boolean} 是否为公共目录
 * @params createTime {string}
 * @params updateTime {string}
 * @params useStatus {UseStatusTypeCommonType} 是否选中            0-未选中            1-部分选中            2-全选
 * @params isLeafGroup {boolean} 是否是叶子节点组            true 表示叶子节点，不会有子节点
 * @params isLeaf {boolean} 是否为叶子节点            true 表示叶子节点，不会有子节点
 */
type DirectoryEntityOutCommonType = {
    id?: string;
    name?: string;
    parentId?: string;
    isPublic?: boolean;
    createTime?: string;
    updateTime?: string;
    useStatus?: UseStatusTypeCommonType;
    isLeafGroup?: boolean;
    isLeaf?: boolean;
};

/**
 * 储存类型
 * 0:公共|Public
 * 1:私有|Private
 * 2:组|Group
 */
type StorageKindCommonType = 0 | 1 | 2;

/**
 * 文件实体
 * @params id {string} 文件ID
 * @params name {string} 文件名
 * @params fileId {string} 文件Id
 * @params path {string} 路径
 * @params fullPath {string} 访问全路径
 * @params thumbnailPath {string} 缩略图路径
 * @params convertedFiles {any} 文件路径字典
 * @params length {number} 文件大小(单位bytes)
 * @params fileType {FileEntityTypeCommonType} 文件类型
 * @params contentType {string} 内容类型
 * @params directoryInfo {DirectoryEntityOutCommonType} 目录信息
 * @params storageKind {StorageKindCommonType} 储存类型
 * @params isOldSsFile {boolean} 是否为旧版ss文件
 * @params userId {string} 上传用户Id
 * @params userName {string} 上传用户名称
 * @params uploadTime {string} 上传时间
 * @params createTime {string}
 * @params updateTime {string}
 * @params expireTime {string} 超期时间
 * @params isExpired {boolean} 是否已过期
 * @params extension {undefined} 扩展字段
 * @params duration {string} 时长单位秒
 */
type FileEntityOutCommonType = {
    id?: string;
    name?: string;
    fileId?: string;
    path?: string;
    fullPath?: string;
    thumbnailPath?: string;
    convertedFiles?: any;
    length?: number;
    fileType?: FileEntityTypeCommonType;
    contentType?: string;
    directoryInfo?: DirectoryEntityOutCommonType;
    storageKind?: StorageKindCommonType;
    isOldSsFile?: boolean;
    userId?: string;
    userName?: string;
    uploadTime?: string;
    createTime?: string;
    updateTime?: string;
    expireTime?: string;
    isExpired?: boolean;
    extension?: undefined;
    duration?: string;
};

/**
 * 关联文件数据
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params fileRecordID {string} 文件记录ID
 * @params fileRecord {FileEntityOutCommonType} 文件记录
 */
type FileDataOutCommonType = {
    id?: string;
    eventId?: string;
    eventName?: string;
    createdTime?: string;
    fileRecordID?: string;
    fileRecord?: FileEntityOutCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {FileDataOutCommonType[]} 记录
 */
type FileDataOutReqCommonType = {
    totalCount?: number;
    records?: FileDataOutCommonType[];
};

/**
 * 拍传数据
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params recordId {string} 拍传记录Id
 * @params multimediaTransferDetail {MultimediaTransferDetailOutCommonType} 拍传详情
 * @params taskInfos {TaskInfoCommonType[]} 任务基本信息
 */
type MultimediaTransferDataOutCommonType = {
    id?: string;
    eventId?: string;
    eventName?: string;
    createdTime?: string;
    recordId?: string;
    multimediaTransferDetail?: MultimediaTransferDetailOutCommonType;
    taskInfos?: TaskInfoCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {MultimediaTransferDataOutCommonType[]} 记录
 */
type MultimediaTransferDataOutReqCommonType = {
    totalCount?: number;
    records?: MultimediaTransferDataOutCommonType[];
};

/**
 * 图片数据
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params fileRecordId {string} 图片记录Id
 * @params fileRecord {FileEntityOutCommonType} 图片记录
 * @params taskInfos {TaskInfoCommonType[]} 任务基本信息
 * @params associatedUserID {string} 关联操作人ID
 * @params associatedUserName {string} 关联操作人名称
 */
type PictureDataOutCommonType = {
    id?: string;
    eventId?: string;
    eventName?: string;
    createdTime?: string;
    fileRecordId?: string;
    fileRecord?: FileEntityOutCommonType;
    taskInfos?: TaskInfoCommonType[];
    associatedUserID?: string;
    associatedUserName?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {PictureDataOutCommonType[]} 记录
 */
type PictureDataOutReqCommonType = {
    totalCount?: number;
    records?: PictureDataOutCommonType[];
};

/**
 * 视频数据
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params fileRecordId {string} 视频记录Id
 * @params fileRecord {FileEntityOutCommonType} 视频记录
 * @params taskInfos {TaskInfoCommonType[]} 任务基本信息
 */
type VideoDataOutCommonType = {
    id?: string;
    eventId?: string;
    eventName?: string;
    createdTime?: string;
    fileRecordId?: string;
    fileRecord?: FileEntityOutCommonType;
    taskInfos?: TaskInfoCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {VideoDataOutCommonType[]} 记录
 */
type VideoDataOutReqCommonType = {
    totalCount?: number;
    records?: VideoDataOutCommonType[];
};

/**
 * 类型组：0-监控组，1-预案组 2-自定义组
 * 0:Gb
 * 1:Reserve
 * 2:Custom
 * -1:All
 */
type GroupTypeCommonType = 0 | 1 | 2 | -1;

/**
 * 联系人
 * @params id {string} 联系人id
 * @params name {string} 联系人名称
 */
type PrincipalCommonType = {
    id?: string;
    name?: string;
};

/**
 * 监控组实体
 * @params id {string} 分组Id
 * @params name {string} 分组名
 * @params description {string} 组信息描述
 * @params parentId {string} 父级Id
 * @params groupType {number} 分组类型
 * @params cameraCount {number} 摄像头总数包含下级分组的摄像头数量
 * @params cameraOnlineCount {number} 在线摄像头总数包含下级分组的摄像头数量
 * @params selfCameraCount {number} 自身组的摄像头总数
 * @params selfCameraOnlineCount {number} 自身在线摄像头总数
 * @params order {number} 排序字段
 * @params principalOut {PrincipalCommonType[]} 监控负责人信息
 * @params isLeaf {boolean} 是否叶子节点
 */
type CameraGroupCommonType = {
    id?: string;
    name?: string;
    description?: string;
    parentId?: string;
    groupType?: number;
    cameraCount?: number;
    cameraOnlineCount?: number;
    selfCameraCount?: number;
    selfCameraOnlineCount?: number;
    order?: number;
    principalOut?: PrincipalCommonType[];
    isLeaf?: boolean;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {CameraGroupCommonType[]} 记录
 */
type CameraGroupReqCommonType = {
    totalCount?: number;
    records?: CameraGroupCommonType[];
};

/**
 * 查询资源
 * @params resourceId {string} 主体资源ID
 * @params type {string} 主体资源类型
 */
type ResourceInfoCommonType = {
    resourceId: string;
    type?: string;
};

/**
 * 数据类型
 * 0:Union,并集
 * 1:Intersect,交集
 */
type DataHandleTypeCommonType = 0 | 1;

/**
 * 资源关系查询(不带分页)
 * @params mainResources {ResourceInfoCommonType[]} 主体资源集合
 * @params dataHandleType {DataHandleTypeCommonType} 数据处理类型
 */
type ResourceRelationshipQueryCommonType = {
    mainResources: ResourceInfoCommonType[];
    dataHandleType?: DataHandleTypeCommonType;
};

/**
 * 监控搜索
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params labelIds {any[]} 标签
 * @params online {boolean} 是否在线
 * @params keyword {string} 关键词
 * @params resourceRelationship {ResourceRelationshipQueryCommonType} 资源关系
 * @params isContainMainResource {boolean} 返回结果是否包含主体资源
 */
type PrefixAreaCodeCameraRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    prefixAreaCodes?: any[];
    labelIds?: any[];
    online?: boolean;
    keyword?: string;
    resourceRelationship?: ResourceRelationshipQueryCommonType;
    isContainMainResource?: boolean;
};

/**
 * 监控状态
 * 1:Offline
 * 2:Online
 * 3:SipServerOffline
 * 4:Record
 */
type CameraStatusCommonType = 1 | 2 | 3 | 4;

/**
 * 图片质量类型
 * 0:UnDetected
 * 1:Bad
 * 2:Excellent
 * 3:Good
 * 4:Fault
 */
type QualityCommonType = 0 | 1 | 2 | 3 | 4;

/**
 * 监控标签
 * @params id {number} id
 * @params title {string} 名称
 * @params color {string} 颜色
 * @params description {string} 标签说明
 */
type LabelOutCommonType = {
    id?: number;
    title?: string;
    color?: string;
    description?: string;
};

/**
 * 资源信息
 * @params resourceId {string} 资源ID
 * @params type {string} 资源类型
 */
type ResourceBaseOutCommonType = {
    resourceId?: string;
    type?: string;
};

/**
 * 监控简单数据
 * @params id {string} ID
 * @params name {string} 名称
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params status {CameraStatusCommonType} 监控状态1-离线2-在线
 * @params quality {QualityCommonType} 监控质量0-未检测1-差2-优3-良4-故障
 * @params areaCode {string} 行政区域码
 * @params thumbnailID {string} 图片id
 * @params labels {LabelOutCommonType[]} 监控标签
 * @params mainResources {ResourceBaseOutCommonType[]} 主体资源
 */
type AreaCodeCameraOutCommonType = {
    id?: string;
    name?: string;
    longitude?: number;
    latitude?: number;
    status?: CameraStatusCommonType;
    quality?: QualityCommonType;
    areaCode?: string;
    thumbnailID?: string;
    labels?: LabelOutCommonType[];
    mainResources?: ResourceBaseOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {AreaCodeCameraOutCommonType[]} 记录
 */
type AreaCodeCameraOutReqCommonType = {
    totalCount?: number;
    records?: AreaCodeCameraOutCommonType[];
};

/**
 * 监控圆形区域查询
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params center {CoordinateCommonType} 圆心
 * @params radius {number} 半径（单位米）
 * @params labelIds {any[]} 监控标签集合
 * @params sortRule {SortRuleCommonType} 是否按距离升序排序，默认升序
 */
type CircleAreaCameraQueryRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    center: CoordinateCommonType;
    radius: number;
    labelIds?: any[];
    sortRule?: SortRuleCommonType;
};

/**
 * 监控状态
 * 1:_1
 * 2:_2
 * 3:_3
 * 4:_4
 */
type EnumTypes_CameraStatusCommonType = 1 | 2 | 3 | 4;

/**
 * 图片质量类型
 * 0:_0
 * 1:_1
 * 2:_2
 * 3:_3
 * 4:_4
 */
type EnumTypes_QualityCommonType = 0 | 1 | 2 | 3 | 4;

/**
 * Url对应的实体类型
 * 0:Live
 * 1:Camera
 * 2:Other
 */
type PlayUrlTypeCommonType = 0 | 1 | 2;

/**
 * 播放地址
 * @params playUrlType {PlayUrlTypeCommonType} 类型 0直播，1监控
 * @params rtspUrl {string} rtsp播放地址
 * @params flvUrl {string} flv播放地址
 * @params wsUrl {string} Ws 协议播放地址
 * @params rtmpUrl {string} rtmp 的协议播放地址
 * @params webRtc {string} wbertc播放地址
 */
type PlayUrlOutCommonType = {
    playUrlType?: PlayUrlTypeCommonType;
    rtspUrl?: string;
    flvUrl?: string;
    wsUrl?: string;
    rtmpUrl?: string;
    webRtc?: string;
};

/**
 * 视频编码类型
 * 0:H264
 * 1:H265
 */
type VideoEncoderCommonType = 0 | 1;

/**
 * 分辨率
 * 0:HD
 * 1:SD
 * 2:FullHd
 * 3:UHD
 */
type ResolutionCommonType = 0 | 1 | 2 | 3;

/**
 * 图片质量详情
 * @params imageQuality {number} 图像质量
 * @params brightness {number} 亮度
 * @params color {number} 颜色
 * @params contrast {number} 对比度
 * @params blur {number} 模糊
 * @params noiseInterference {number} 噪声干扰
 * @params scrolling {number} 滚屏
 * @params shade {number} 遮挡
 * @params screenFreezing {number} 画面冻结
 * @params snr {number} 信噪比
 * @params psnr {number} 峰值信噪比
 * @params imageDistortion {number} 图像畸变
 * @params blackScreen {number} 黑屏
 * @params specialFlowerScreen {number} 特殊花屏
 */
type VideoQualityDetailCommonType = {
    imageQuality?: number;
    brightness?: number;
    color?: number;
    contrast?: number;
    blur?: number;
    noiseInterference?: number;
    scrolling?: number;
    shade?: number;
    screenFreezing?: number;
    snr?: number;
    psnr?: number;
    imageDistortion?: number;
    blackScreen?: number;
    specialFlowerScreen?: number;
};

/**
 * 带有距离的返回监控数据实体
 * @params id {string} ID
 * @params name {string} 名称
 * @params status {EnumTypes_CameraStatusCommonType} 监控状态1-离线2-在线
 * @params quality {EnumTypes_QualityCommonType} 监控质量0-未检测1-差2-优3-良4-故障
 * @params areaCode {string} 行政区域码
 * @params thumbnailID {string} 图片id
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params playUrl {PlayUrlOutCommonType} 播放地址
 * @params videoEncoder {VideoEncoderCommonType} 视频编码类型:0为H264，1为H265
 * @params resolution {ResolutionCommonType} 分辨率
 * @params audio {boolean} 是否有音频
 * @params result {QualityCommonType} 质量
 * @params resultDetail {VideoQualityDetailCommonType} 质量详情
 * @params namePath {string} 监控名字路径
 * @params idPath {string} 监控ID路径
 * @params order {number} 排序字段
 * @params detectionCount {number} 巡检的次数
 * @params faultDetail {number} 质量故障的错误码：http://git.rdapp.com/product/knowledge-planet/issues/818
 * @params isManual {boolean} 是否是手动设置
 * @params labels {LabelOutCommonType[]} 标签
 * @params audioEncodingFormat {string} 音频编码属性
 * @params isSupportPTZ {boolean} 是否可以进行云台控制
 * @params distance {number} 距离某个坐标的距离
 */
type CameraWithDistanceCommonType = {
    id?: string;
    name?: string;
    status?: EnumTypes_CameraStatusCommonType;
    quality?: EnumTypes_QualityCommonType;
    areaCode?: string;
    thumbnailID?: string;
    longitude?: number;
    latitude?: number;
    playUrl?: PlayUrlOutCommonType;
    videoEncoder?: VideoEncoderCommonType;
    resolution?: ResolutionCommonType;
    audio?: boolean;
    result?: QualityCommonType;
    resultDetail?: VideoQualityDetailCommonType;
    namePath?: string;
    idPath?: string;
    order?: number;
    detectionCount?: number;
    faultDetail?: number;
    isManual?: boolean;
    labels?: LabelOutCommonType[];
    audioEncodingFormat?: string;
    isSupportPTZ?: boolean;
    distance?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {CameraWithDistanceCommonType[]} 记录
 */
type CameraWithDistanceReqCommonType = {
    totalCount?: number;
    records?: CameraWithDistanceCommonType[];
};

/**
 * 监控终端类型
 * 0:Gb 国标
 * 1:VideoPull 视频拉流终端
 * 2:VideoPush 视频推流终端
 * 3:VideoFile 视频文件终端
 */
type CameraTerminalTypeCommonType = 0 | 1 | 2 | 3;

/**
 * 监控终端入参
 * @params name {string} 名称
 * @params latitude {number} 纬度
 * @params longitude {number} 经度
 * @params parentId {string} 监控组 Id
 * @params aliasName {string} 监控别名
 * @params quality {QualityCommonType} 监控质量
 * @params isManual {boolean} True手动检测/ false智能检测，可为null，为null表示不修改
 * @params labelIds {any[]} 监控标签id
 * @params areaCode {string} 行政区域码
 * @params type {CameraTerminalTypeCommonType} 终端类型. 0:国标 1:视频拉流终端 2:视频推流终端 3:视频文件终端
 * @params extension {undefined} 扩展字段, 根据不同的终端类型需要传对应的字段
 */
type CameraTerminalInCommonType = {
    name: string;
    latitude?: number;
    longitude?: number;
    parentId?: string;
    aliasName?: string;
    quality?: QualityCommonType;
    isManual?: boolean;
    labelIds?: any[];
    areaCode?: string;
    type?: CameraTerminalTypeCommonType;
    extension: undefined;
};

/**
 * 返回监控数据实体
 * @params id {string} ID
 * @params name {string} 名称
 * @params status {EnumTypes_CameraStatusCommonType} 监控状态1-离线2-在线
 * @params quality {EnumTypes_QualityCommonType} 监控质量0-未检测1-差2-优3-良4-故障
 * @params areaCode {string} 行政区域码
 * @params thumbnailID {string} 图片id
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params playUrl {PlayUrlOutCommonType} 播放地址
 * @params videoEncoder {VideoEncoderCommonType} 视频编码类型:0为H264，1为H265
 * @params resolution {ResolutionCommonType} 分辨率
 * @params audio {boolean} 是否有音频
 * @params result {QualityCommonType} 质量
 * @params resultDetail {VideoQualityDetailCommonType} 质量详情
 * @params namePath {string} 监控名字路径
 * @params idPath {string} 监控ID路径
 * @params order {number} 排序字段
 * @params detectionCount {number} 巡检的次数
 * @params faultDetail {number} 质量故障的错误码：http://git.rdapp.com/product/knowledge-planet/issues/818
 * @params isManual {boolean} 是否是手动设置
 * @params labels {LabelOutCommonType[]} 标签
 * @params audioEncodingFormat {string} 音频编码属性
 * @params isSupportPTZ {boolean} 是否可以进行云台控制
 */
type CameraOutCommonType = {
    id?: string;
    name?: string;
    status?: EnumTypes_CameraStatusCommonType;
    quality?: EnumTypes_QualityCommonType;
    areaCode?: string;
    thumbnailID?: string;
    longitude?: number;
    latitude?: number;
    playUrl?: PlayUrlOutCommonType;
    videoEncoder?: VideoEncoderCommonType;
    resolution?: ResolutionCommonType;
    audio?: boolean;
    result?: QualityCommonType;
    resultDetail?: VideoQualityDetailCommonType;
    namePath?: string;
    idPath?: string;
    order?: number;
    detectionCount?: number;
    faultDetail?: number;
    isManual?: boolean;
    labels?: LabelOutCommonType[];
    audioEncodingFormat?: string;
    isSupportPTZ?: boolean;
};

/**
 * 修改监控终端入参
 * @params name {string} 名称
 * @params latitude {number} 纬度
 * @params longitude {number} 经度
 * @params parentId {string} 监控组 Id
 * @params aliasName {string} 监控别名
 * @params quality {QualityCommonType} 监控质量
 * @params isManual {boolean} True手动检测/ false智能检测，可为null，为null表示不修改
 * @params labelIds {any[]} 监控标签id
 * @params areaCode {string} 行政区域码
 * @params type {CameraTerminalTypeCommonType} 终端类型. 0:国标 1:视频拉流终端 2:视频推流终端 3:视频文件终端
 * @params extension {undefined} 扩展字段, 根据不同的终端类型需要传对应的字段
 */
type UpdateCameraTerminalInCommonType = {
    name: string;
    latitude?: number;
    longitude?: number;
    parentId?: string;
    aliasName?: string;
    quality?: QualityCommonType;
    isManual?: boolean;
    labelIds?: any[];
    areaCode?: string;
    type?: CameraTerminalTypeCommonType;
    extension: undefined;
};

/**
 * 定时任务的模式（1-定时|2-手动）
 * 1:Timing
 * 2:Manual
 */
type JobModeCommonType = 1 | 2;

/**
 * Qts的状态(0-正常|1-已停止|2-完成|3-错误|4-已有任务执行中|5-触发器不存在)
 * 0:Normal
 * 1:Stopped
 * 2:Completed
 * 3:Error
 * 4:Executing
 * 5:TriggerNoExist
 */
type JobStatusCommonType = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * 巡检任务状态(0-巡检中|1-巡检结束|2-巡检取消|3-巡检暂停|4-未巡检)
 * 0:Detecting
 * 1:DetectingFinish
 * 2:DetectionCancel
 * 3:DetectionPause
 * 4:NoneDetection
 */
type DetectionTaskStateCommonType = 0 | 1 | 2 | 3 | 4;

/**
 * 巡检类型 0 - 监控组， 1 - 标签
 * 0:CameraGroup
 * 1:CameraLabel
 */
type DetectionTypeCommonType = 0 | 1;

/**
 * 责任人类型
 * 0:Orgs
 * 1:Other
 */
type OwnerTypeCommonType = 0 | 1;

/**
 * 通知人
 * @params id {string} 用户id
 * @params name {string} 联系人名称
 * @params phone {string} 手机号码
 * @params email {string} 邮件
 * @params ownerType {OwnerTypeCommonType} 责任人类型 0-组织架构，1-非组织架构
 */
type OwnerCommonType = {
    id?: string;
    name?: string;
    phone?: string;
    email?: string;
    ownerType?: OwnerTypeCommonType;
};

/**
 * 巡检任务的返回实体
 * @params jobId {string} QTS 的任务 Id
 * @params jobName {string} QTS 的任务名
 * @params jobGroup {string} QTS 的任务组
 * @params jobMode {JobModeCommonType} 定时任务的模式（1-定时|2-手动）
 * @params jobBeginTime {string} QTS 定时任务开始时间
 * @params jobEndTime {string} QTS 定时任务结束时间
 * @params nextExecuteTime {string} 下次执行时间
 * @params jobStatus {JobStatusCommonType} Qts的状态(0-正常|1-已停止|2-完成|3-错误|4-已有任务执行中|5-触发器不存在)
 * @params jobCron {string} QTS 定时任务的Cron表达式
 * @params detectCameraGroupId {string} 巡检的监控组 Id
 * @params detectCameraGroupName {string} 巡检的监控组名称
 * @params isPicture {boolean} 巡检任务是否截图
 * @params isRecord {boolean} 巡检任务是否录像
 * @params taskId {string} VFS 巡检任务 Id
 * @params taskBeginTime {string} VFS 巡检任务开始时间
 * @params taskExecutedCount {number} 该定时任务已执行次数
 * @params cameraDetectedCount {number} 巡检任务已巡检的监控数
 * @params remainingDuration {string} 剩余时长
 * @params taskStatus {DetectionTaskStateCommonType} 巡检任务状态(0-巡检中|1-巡检结束|2-巡检取消|3-巡检暂停|4-未巡检)
 * @params cameraAmount {number} 监控总数
 * @params excellentCameraAmount {number} 质量优的监控总数
 * @params goodCameraAmount {number} 质量良的监控总数
 * @params badCameraAmount {number} 质量差的监控总数
 * @params faultCameraAmount {number} 故障监控总数
 * @params isSendNotifications {boolean} 是否发送巡检通知
 * @params detectionType {DetectionTypeCommonType} 巡检类型 0 - 监控组， 1 - 标签
 * @params isSendEmail {boolean} 是否发送邮件
 * @params owners {OwnerCommonType[]} 通知人
 * @params progress {number} 进度
 */
type DetectionTaskOutCommonType = {
    jobId?: string;
    jobName?: string;
    jobGroup?: string;
    jobMode?: JobModeCommonType;
    jobBeginTime?: string;
    jobEndTime?: string;
    nextExecuteTime?: string;
    jobStatus?: JobStatusCommonType;
    jobCron?: string;
    detectCameraGroupId?: string;
    detectCameraGroupName?: string;
    isPicture?: boolean;
    isRecord?: boolean;
    taskId?: string;
    taskBeginTime?: string;
    taskExecutedCount?: number;
    cameraDetectedCount?: number;
    remainingDuration?: string;
    taskStatus?: DetectionTaskStateCommonType;
    cameraAmount?: number;
    excellentCameraAmount?: number;
    goodCameraAmount?: number;
    badCameraAmount?: number;
    faultCameraAmount?: number;
    isSendNotifications?: boolean;
    detectionType?: DetectionTypeCommonType;
    isSendEmail?: boolean;
    owners?: OwnerCommonType[];
    progress?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {DetectionTaskOutCommonType[]} 记录
 */
type DetectionTaskOutReqCommonType = {
    totalCount?: number;
    records?: DetectionTaskOutCommonType[];
};

/**
 * 行政区域权限数据
 * @params areaCodes {any[]} 行政区域码
 */
type PermissionAreaCodesInCommonType = {
    areaCodes?: any[];
};

/**
 * 行政区域数据权限
 * @params hasPermission {boolean} 是否具备数据权限
 * @params areaCode {string} 行政区域码
 */
type DistrictDataPermissionOutCommonType = {
    hasPermission?: boolean;
    areaCode?: string;
};

/**
 * 行政区域
 * @params id {string} ID
 * @params name {string} 名称
 * @params resourceId {string} 资源Id
 * @params englishName {string} 英文名
 * @params coordinate {CoordinateCommonType} 区域坐标点
 * @params areaCode {string} 邮编
 * @params parentId {string} 父级行政区域 Id
 * @params parentIdPath {string} 行政区域父级ID路径
 * @params parentNamePath {string} 行政区域父级名称路径
 * @params geoFilePath {string} 对应 Geo 相关配置文件路径
 * @params platformId {string} 资源所属平台Id
 * @params order {number} 排序
 */
type DistrictOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    englishName?: string;
    coordinate?: CoordinateCommonType;
    areaCode?: string;
    parentId?: string;
    parentIdPath?: string;
    parentNamePath?: string;
    geoFilePath?: string;
    platformId?: string;
    order?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {DistrictOutCommonType[]} 记录
 */
type DistrictOutReqCommonType = {
    totalCount?: number;
    records?: DistrictOutCommonType[];
};

/**
 * 事件数据
 * @params id {string} Id
 * @params name {string} 事件名称
 * @params priority {number} 事件优先级
 * @params state {number} 事件状态
 * @params longitude {number} 事件发生地经度
 * @params latitude {number} 事件发生地纬度
 * @params eventType {EventTypeCommonType} 事件类型
 * @params createdTime {string} 事件创建时间
 * @params areaCode {string} 行政区域码
 * @params updateTime {string} 更新时间
 * @params resourceId {string} 外部资源唯一Id
 * @params isAudited {boolean} 是否已审核
 * @params description {string} 事件描述
 * @params group {GroupInfoCommonType} 事件组
 * @params sceneGroup {GroupInfoCommonType} 现场指挥组
 * @params happenedTime {string} 事件发生时间
 * @params finishedTime {string} 时间完成时间
 * @params address {string} 事件发生地址
 * @params submitUnit {EventUnitCommonType} 报送单位
 * @params unit {EventUnitCommonType} 事件归属单位
 * @params source {EventSourceCommonType} 事件源
 * @params extension {string} 事件扩展字段，用于存项目额外信息
 * @params typeID {string} 事件类型 Id
 * @params expectStartedTime {string} 事件期望发生时间
 * @params expectFinishedTime {string} 事件期望结束时间
 * @params isMock {boolean} 是否模拟事件
 * @params totalTaskCount {number} 任务总数（父任务）
 * @params noStatedTaskCount {number} 未开始的任务总数（父任务）
 * @params finishedTaskCount {number} 已结束的任务总数（父任务）
 * @params confirmedTaskCount {number} 已确认的任务总数（父任务）
 * @params inProcessTaskCount {number} 进行中的任务总数（父任务）
 * @params pausedTaskCount {number} 暂停中的任务总数（父任务）
 * @params isDeleted {boolean} 是否已被删除
 * @params responseLevel {EventResponseLevelCommonType} 事件的响应等级
 * @params associatePreplanId {string} 事件绑定的预案id
 */
type EventEntityOutCommonType = {
    id?: string;
    name?: string;
    priority?: number;
    state?: number;
    longitude?: number;
    latitude?: number;
    eventType?: EventTypeCommonType;
    createdTime?: string;
    areaCode?: string;
    updateTime?: string;
    resourceId?: string;
    isAudited?: boolean;
    description?: string;
    group?: GroupInfoCommonType;
    sceneGroup?: GroupInfoCommonType;
    happenedTime?: string;
    finishedTime?: string;
    address?: string;
    submitUnit?: EventUnitCommonType;
    unit?: EventUnitCommonType;
    source?: EventSourceCommonType;
    extension?: string;
    typeID?: string;
    expectStartedTime?: string;
    expectFinishedTime?: string;
    isMock?: boolean;
    totalTaskCount?: number;
    noStatedTaskCount?: number;
    finishedTaskCount?: number;
    confirmedTaskCount?: number;
    inProcessTaskCount?: number;
    pausedTaskCount?: number;
    isDeleted?: boolean;
    responseLevel?: EventResponseLevelCommonType;
    associatePreplanId?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {EventEntityOutCommonType[]} 记录
 */
type EventEntityOutReqCommonType = {
    totalCount?: number;
    records?: EventEntityOutCommonType[];
};

/**
 * 事件排序类型
 * 0:Default
 * 1:StatusAndTimeDesc
 * 2:HappenedTimeDesc
 */
type EventSortTypeCommonType = 0 | 1 | 2;

/**
 * 事件资源post查询
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params status {any[]} 事件状态
 * @params upLeft {CoordinateCommonType} 左上经纬度
 * @params bottomRight {CoordinateCommonType} 右下经纬度
 * @params isSorted {boolean} 是否排序
 * @params isAudited {boolean} 是否已审核
 * @params resourceId {string} 资源Id
 * @params keyword {string} 模糊匹配关键字
 * @params groupIds {any[]} 事件组
 * @params sourceId {string} 事件源Id
 * @params eventTypes {any[]} 事件类型ID集合
 * @params priorities {any[]} 事件优先级集合
 * @params areaCodes {any[]} 行政区域码集合
 * @params prefixAreaCodes {any[]} 行政区域码前缀集合
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params sortType {EventSortTypeCommonType} 排序类型：0默认，IsSorted字段生效，1：处置中、未开始、已结束排序再创建时间倒序，2按发生时间降序
 * @params resourceRelationship {ResourceRelationshipQueryCommonType} 资源关系
 */
type EventResourceQueryRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    status?: any[];
    upLeft?: CoordinateCommonType;
    bottomRight?: CoordinateCommonType;
    isSorted?: boolean;
    isAudited?: boolean;
    resourceId?: string;
    keyword?: string;
    groupIds?: any[];
    sourceId?: string;
    eventTypes?: any[];
    priorities?: any[];
    areaCodes?: any[];
    prefixAreaCodes?: any[];
    startTime?: string;
    endTime?: string;
    sortType?: EventSortTypeCommonType;
    resourceRelationship?: ResourceRelationshipQueryCommonType;
};

/**
 * 事件数据
 * @params id {string} Id
 * @params name {string} 事件名称
 * @params priority {number} 事件优先级
 * @params state {number} 事件状态
 * @params longitude {number} 事件发生地经度
 * @params latitude {number} 事件发生地纬度
 * @params eventType {EventTypeCommonType} 事件类型
 * @params createdTime {string} 事件创建时间
 * @params areaCode {string} 行政区域码
 * @params updateTime {string} 更新时间
 * @params resourceId {string} 外部资源唯一Id
 * @params isAudited {boolean} 是否已审核
 */
type EventBaseEntityOutCommonType = {
    id?: string;
    name?: string;
    priority?: number;
    state?: number;
    longitude?: number;
    latitude?: number;
    eventType?: EventTypeCommonType;
    createdTime?: string;
    areaCode?: string;
    updateTime?: string;
    resourceId?: string;
    isAudited?: boolean;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {EventBaseEntityOutCommonType[]} 记录
 */
type EventBaseEntityOutReqCommonType = {
    totalCount?: number;
    records?: EventBaseEntityOutCommonType[];
};

/**
 * 事件响应等级返回实体
 * @params isEnable {boolean} 是否启用
 * @params id {string} 响应级别的 Id
 * @params name {string} 响应等级名称
 * @params content {string} 响应内容
 * @params condition {string} 响应条件
 */
type EventResponseLevelOutCommonType = {
    isEnable?: boolean;
    id?: string;
    name?: string;
    content?: string;
    condition?: string;
};

/**
 * 事件类型
 * @params description {string} 事件类型描述
 * @params id {string} ID
 * @params name {string} 名称
 */
type EventTypeInfoCommonType = {
    description?: string;
    id?: string;
    name?: string;
};

/**
 * 事件实体（拥有推荐预案）
 * @params id {string} Id
 * @params name {string} 事件名称
 * @params priority {number} 事件优先级
 * @params state {number} 事件状态
 * @params longitude {number} 事件发生地经度
 * @params latitude {number} 事件发生地纬度
 * @params eventType {EventTypeCommonType} 事件类型
 * @params createdTime {string} 事件创建时间
 * @params areaCode {string} 行政区域码
 * @params updateTime {string} 更新时间
 * @params resourceId {string} 外部资源唯一Id
 * @params isAudited {boolean} 是否已审核
 * @params description {string} 事件描述
 * @params group {GroupInfoCommonType} 事件组
 * @params sceneGroup {GroupInfoCommonType} 现场指挥组
 * @params happenedTime {string} 事件发生时间
 * @params finishedTime {string} 时间完成时间
 * @params address {string} 事件发生地址
 * @params submitUnit {EventUnitCommonType} 报送单位
 * @params unit {EventUnitCommonType} 事件归属单位
 * @params source {EventSourceCommonType} 事件源
 * @params extension {string} 事件扩展字段，用于存项目额外信息
 * @params typeID {string} 事件类型 Id
 * @params expectStartedTime {string} 事件期望发生时间
 * @params expectFinishedTime {string} 事件期望结束时间
 * @params isMock {boolean} 是否模拟事件
 * @params totalTaskCount {number} 任务总数（父任务）
 * @params noStatedTaskCount {number} 未开始的任务总数（父任务）
 * @params finishedTaskCount {number} 已结束的任务总数（父任务）
 * @params confirmedTaskCount {number} 已确认的任务总数（父任务）
 * @params inProcessTaskCount {number} 进行中的任务总数（父任务）
 * @params pausedTaskCount {number} 暂停中的任务总数（父任务）
 * @params isDeleted {boolean} 是否已被删除
 * @params responseLevel {EventResponseLevelCommonType} 事件的响应等级
 * @params associatePreplanId {string} 事件绑定的预案id
 * @params firstResponseLevel {EventResponseLevelOutCommonType} 一级响应级别
 * @params secondResponseLevel {EventResponseLevelOutCommonType} 二级响应级别
 * @params thirdResponseLevel {EventResponseLevelOutCommonType} 三级响应级别
 * @params fourthResponseLevel {EventResponseLevelOutCommonType} 四级响应级别
 * @params associatePreplanName {string} 事件绑定的预案的名字
 * @params isHasRecommendPreplan {boolean} 是否拥有推荐预案
 * @params recommendPreplan {PreplanBaseOutCommonType} 推荐预案
 */
type EventHasRecommendPreplanEntityOutCommonType = {
    id?: string;
    name?: string;
    priority?: number;
    state?: number;
    longitude?: number;
    latitude?: number;
    eventType?: EventTypeCommonType;
    createdTime?: string;
    areaCode?: string;
    updateTime?: string;
    resourceId?: string;
    isAudited?: boolean;
    description?: string;
    group?: GroupInfoCommonType;
    sceneGroup?: GroupInfoCommonType;
    happenedTime?: string;
    finishedTime?: string;
    address?: string;
    submitUnit?: EventUnitCommonType;
    unit?: EventUnitCommonType;
    source?: EventSourceCommonType;
    extension?: string;
    typeID?: string;
    expectStartedTime?: string;
    expectFinishedTime?: string;
    isMock?: boolean;
    totalTaskCount?: number;
    noStatedTaskCount?: number;
    finishedTaskCount?: number;
    confirmedTaskCount?: number;
    inProcessTaskCount?: number;
    pausedTaskCount?: number;
    isDeleted?: boolean;
    responseLevel?: EventResponseLevelCommonType;
    associatePreplanId?: string;
    firstResponseLevel?: EventResponseLevelOutCommonType;
    secondResponseLevel?: EventResponseLevelOutCommonType;
    thirdResponseLevel?: EventResponseLevelOutCommonType;
    fourthResponseLevel?: EventResponseLevelOutCommonType;
    associatePreplanName?: string;
    isHasRecommendPreplan?: boolean;
    recommendPreplan?: PreplanBaseOutCommonType;
};

/**
 * 事件关联数据类型
 * 0:TaskFeedback,任务反馈
 * 1:EventFeedback,事件反馈
 * 2:EventLog,事件日志
 * 3:Video,视频
 * 4:File,文件
 * 5:Mmt,拍传
 * 6:Communication,通话
 * 7:TextMessage,短信
 * 8:Fax,传真
 * 9:Picture,图片
 */
type EventAssociatedTypeCommonType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/**
 * 事件关联数据汇总输出
 * @params recordData {undefined} 关联数据
 * @params updateTime {string} 数据更新时间
 * @params eventAssociatedDataType {EventAssociatedTypeCommonType} 事件关联数据类型
 */
type EventAssociatedDataCollectOutCommonType = {
    recordData?: undefined;
    updateTime?: string;
    eventAssociatedDataType?: EventAssociatedTypeCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {EventAssociatedDataCollectOutCommonType[]} 记录
 */
type EventAssociatedDataCollectOutReqCommonType = {
    totalCount?: number;
    records?: EventAssociatedDataCollectOutCommonType[];
};

/**
 * 联系人电话信息
 * @params type {string} 电话类型telephoneNumber：办公电话，ipPhone：IP话机，homePhone：家庭电话，facsimileTelephoneNumber：传真号码mobile：手机
 * @params number {string} 号码
 */
type PhoneDataCommonType = {
    type?: string;
    number?: string;
};

/**
 * 事件所关联的所有成员（指挥部成员、任务组成员）
 * @params id {string} 成员Id
 * @params name {string} 成员名
 * @params phones {PhoneDataCommonType[]} 成员联系信息
 * @params photo {string} 头像
 */
type MemberOutCommonType = {
    id?: string;
    name?: string;
    phones?: PhoneDataCommonType[];
    photo?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {MemberOutCommonType[]} 记录
 */
type MemberOutReqCommonType = {
    totalCount?: number;
    records?: MemberOutCommonType[];
};

/**
 * 多条件查询设施请求
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params keyWord {string} 关键字
 * @params layerIds {any[]} 图层Id
 * @params layerName {string} 图层名,可模糊匹配
 * @params areaCodes {any[]} 行政区域代码
 * @params prefixAreaCodes {any[]} 行政区域前缀代码,传入完整区域码也会被处理为前缀区域码
 * @params querySubordinateFacility {boolean} 是否查询下级行政区域设施
 * @params resourceRelationship {ResourceRelationshipQueryCommonType} 资源关系
 * @params isShowAlert {boolean} 是否显示告警【默认不聚合设施告警】
 */
type SearchFacilityRequestInCommonType = {
    pageIndex?: number;
    pageSize?: number;
    keyWord?: string;
    layerIds?: any[];
    layerName?: string;
    areaCodes?: any[];
    prefixAreaCodes?: any[];
    querySubordinateFacility: boolean;
    resourceRelationship?: ResourceRelationshipQueryCommonType;
    isShowAlert?: boolean;
};

/**
 * 图层实体
 * @params id {string} 图层Id
 * @params name {string} 图层名称
 * @params number {string} ResourceId
 * @params description {string} 图层详情
 * @params iconUrl {string} 图层图标
 * @params group {string} 图层分组
 * @params groupKey {string} 图层分组Key
 * @params productId {string} 产品id
 */
type LayerEntityOutCommonType = {
    id?: string;
    name?: string;
    number?: string;
    description?: string;
    iconUrl?: string;
    group?: string;
    groupKey?: string;
    productId?: string;
};

/**
 * 面、线几何数据输出
 * @params coordinates {any[]} 几何数据集合
 * @params type {string} Type
 */
type GeometryOutCommonType = {
    coordinates?: any[];
    type?: string;
};

/**
 * 面、线数据输出
 * @params type {string} Type
 * @params properties {undefined} Properties
 * @params geometry {GeometryOutCommonType} Geometry
 */
type GeometryDataOutCommonType = {
    type?: string;
    properties?: undefined;
    geometry?: GeometryOutCommonType;
};

/**
 * 设施带告警信息
 * @params id {string} ID
 * @params name {string} 名称
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params resourceId {string} 资源Id
 * @params layerId {string} 图层Id
 * @params layerDetail {LayerEntityOutCommonType} 图层信息
 * @params description {string} 详情
 * @params owner {string} 设施负责人
 * @params number {string} 联系电话
 * @params geoFilePath {string} 重点区域的资源文件路径
 * @params address {string} 设施地址
 * @params extension {undefined} 扩展项
 * @params areaCode {string} 行政区域代码
 * @params height {number} 设施高度
 * @params geometryData {GeometryDataOutCommonType} 线面数据
 * @params platformId {string} 资源所属平台Id
 * @params facilityState {string} 设施状态
 * @params alertLevel {number} 告警等级,0无告警，1,2,4,8参考apts告警等级
 */
type FacilityWithAlertCommonType = {
    id?: string;
    name?: string;
    longitude?: number;
    latitude?: number;
    resourceId?: string;
    layerId?: string;
    layerDetail?: LayerEntityOutCommonType;
    description?: string;
    owner?: string;
    number?: string;
    geoFilePath?: string;
    address?: string;
    extension?: undefined;
    areaCode?: string;
    height?: number;
    geometryData?: GeometryDataOutCommonType;
    platformId?: string;
    facilityState?: string;
    alertLevel?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {FacilityWithAlertCommonType[]} 记录
 */
type FacilityWithAlertReqCommonType = {
    totalCount?: number;
    records?: FacilityWithAlertCommonType[];
};

/**
 * 设施数据
 * @params id {string} ID
 * @params name {string} 名称
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params resourceId {string} 资源Id
 * @params layerId {string} 图层Id
 * @params layerDetail {LayerEntityOutCommonType} 图层信息
 * @params description {string} 详情
 * @params owner {string} 设施负责人
 * @params number {string} 联系电话
 * @params geoFilePath {string} 重点区域的资源文件路径
 * @params address {string} 设施地址
 * @params extension {undefined} 扩展项
 * @params areaCode {string} 行政区域代码
 * @params height {number} 设施高度
 * @params geometryData {GeometryDataOutCommonType} 线面数据
 * @params platformId {string} 资源所属平台Id
 * @params facilityState {string} 设施状态
 */
type FacilityEntityOutCommonType = {
    id?: string;
    name?: string;
    longitude?: number;
    latitude?: number;
    resourceId?: string;
    layerId?: string;
    layerDetail?: LayerEntityOutCommonType;
    description?: string;
    owner?: string;
    number?: string;
    geoFilePath?: string;
    address?: string;
    extension?: undefined;
    areaCode?: string;
    height?: number;
    geometryData?: GeometryDataOutCommonType;
    platformId?: string;
    facilityState?: string;
};

/**
 * 事件设施
 * @params facilityOut {FacilityEntityOutCommonType} 设施
 * @params distance {number} 设施与事件的距离
 */
type EventFacilityOutCommonType = {
    facilityOut?: FacilityEntityOutCommonType;
    distance?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {EventFacilityOutCommonType[]} 记录
 */
type EventFacilityOutReqCommonType = {
    totalCount?: number;
    records?: EventFacilityOutCommonType[];
};

/**
 * 设施统计信息请求体
 * @params resourceRelationship {ResourceRelationshipQueryCommonType} 资源关系
 * @params radius {number} 半径范围(单位米)
 */
type FacilitiesStatisticsRequestInCommonType = {
    resourceRelationship: ResourceRelationshipQueryCommonType;
    radius?: number;
};

/**
 * 事件设施统计
 * @params layerId {string} 图层id
 * @params layerName {string} 图层名称
 * @params facilitiesTotal {number} 图层对应的设施资源总数
 * @params subordinateLayersTotal {number} 下级图层总数
 * @params subordinateLayers {EventFacilityStatisticsOutCommonType[]} 下级图层信息
 */
type EventFacilityStatisticsOutCommonType = {
    layerId?: string;
    layerName?: string;
    facilitiesTotal?: number;
    subordinateLayersTotal?: number;
    subordinateLayers?: EventFacilityStatisticsOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {EventFacilityStatisticsOutCommonType[]} 记录
 */
type EventFacilityStatisticsOutReqCommonType = {
    totalCount?: number;
    records?: EventFacilityStatisticsOutCommonType[];
};

/**
 * 设施圆形区域查询
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params layerIds {any[]} 图层Id列表
 * @params keyword {string} 关键字
 * @params center {CoordinateCommonType} 圆心
 * @params radius {number} 半径（单位米）
 * @params sortRule {SortRuleCommonType} 是否按距离升序排序，默认升序
 */
type CircleAreaFacilityQueryRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    layerIds: any[];
    keyword?: string;
    center: CoordinateCommonType;
    radius: number;
    sortRule?: SortRuleCommonType;
};

/**
 * 带有距离的返回设施数据实体
 * @params id {string} ID
 * @params name {string} 名称
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params resourceId {string} 资源Id
 * @params layerId {string} 图层Id
 * @params layerDetail {LayerEntityOutCommonType} 图层信息
 * @params description {string} 详情
 * @params owner {string} 设施负责人
 * @params number {string} 联系电话
 * @params geoFilePath {string} 重点区域的资源文件路径
 * @params address {string} 设施地址
 * @params extension {undefined} 扩展项
 * @params areaCode {string} 行政区域代码
 * @params height {number} 设施高度
 * @params geometryData {GeometryDataOutCommonType} 线面数据
 * @params platformId {string} 资源所属平台Id
 * @params facilityState {string} 设施状态
 * @params distance {number} 距离某个坐标的距离
 */
type FacilityWithDistanceCommonType = {
    id?: string;
    name?: string;
    longitude?: number;
    latitude?: number;
    resourceId?: string;
    layerId?: string;
    layerDetail?: LayerEntityOutCommonType;
    description?: string;
    owner?: string;
    number?: string;
    geoFilePath?: string;
    address?: string;
    extension?: undefined;
    areaCode?: string;
    height?: number;
    geometryData?: GeometryDataOutCommonType;
    platformId?: string;
    facilityState?: string;
    distance?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {FacilityWithDistanceCommonType[]} 记录
 */
type FacilityWithDistanceReqCommonType = {
    totalCount?: number;
    records?: FacilityWithDistanceCommonType[];
};

/**
 * 设施指标查询
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params keyWord {string} 关键字
 * @params layerIds {any[]} 图层Id
 * @params layerName {string} 图层名,可模糊匹配
 * @params areaCodes {any[]} 行政区域代码
 * @params prefixAreaCodes {any[]} 行政区域前缀代码,传入完整区域码也会被处理为前缀区域码
 * @params querySubordinateFacility {boolean} 是否查询下级行政区域设施
 * @params relateTypeId {string} 监测设备类型ID
 * @params alertTypeId {string} 告警类型ID
 */
type FacilityMetricsRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    keyWord?: string;
    layerIds?: any[];
    layerName?: string;
    areaCodes?: any[];
    prefixAreaCodes?: any[];
    querySubordinateFacility: boolean;
    relateTypeId?: string;
    alertTypeId?: string;
};

/**
 * 设施指标输出
 * @params id {string} ID
 * @params name {string} 名称
 * @params alertLevel {number} 告警等级
 * @params metricsValue {number} 指标值
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 */
type FacilityMetricsOutCommonType = {
    id?: string;
    name?: string;
    alertLevel?: number;
    metricsValue?: number;
    longitude?: number;
    latitude?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {FacilityMetricsOutCommonType[]} 记录
 */
type FacilityMetricsOutReqCommonType = {
    totalCount?: number;
    records?: FacilityMetricsOutCommonType[];
};

/**
 * 目录实体
 * @params id {string} 目录ID
 * @params name {string} 目录名称
 * @params parentId {string} 父目录Id
 * @params isPublic {boolean} 是否为公共目录
 * @params createTime {string}
 * @params updateTime {string}
 */
type DirectoryOutCommonType = {
    id?: string;
    name?: string;
    parentId?: string;
    isPublic?: boolean;
    createTime?: string;
    updateTime?: string;
};

/**
 * 文件实体
 * @params id {string} 文件ID
 * @params name {string} 文件名
 * @params fileId {string} 文件Id
 * @params path {string} 路径
 * @params fullPath {string} 访问全路径
 * @params thumbnailPath {string} 缩略图路径
 * @params convertedFiles {any} 文件路径字典
 * @params length {number} 文件大小(单位bytes)
 * @params fileType {FileEntityTypeCommonType} 文件类型
 * @params contentType {string} 内容类型
 * @params directoryInfo {DirectoryOutCommonType} 目录信息
 * @params storageKind {StorageKindCommonType} 储存类型
 * @params isOldSsFile {boolean} 是否为旧版ss文件
 * @params userId {string} 上传用户Id
 * @params userName {string} 上传用户名称(用户账号)
 * @params nickName {string} 用户姓名
 * @params uploadTime {string} 上传时间
 * @params createTime {string}
 * @params updateTime {string}
 * @params duration {string} 时长单位秒
 */
type FileOutCommonType = {
    id?: string;
    name?: string;
    fileId?: string;
    path?: string;
    fullPath?: string;
    thumbnailPath?: string;
    convertedFiles?: any;
    length?: number;
    fileType?: FileEntityTypeCommonType;
    contentType?: string;
    directoryInfo?: DirectoryOutCommonType;
    storageKind?: StorageKindCommonType;
    isOldSsFile?: boolean;
    userId?: string;
    userName?: string;
    nickName?: string;
    uploadTime?: string;
    createTime?: string;
    updateTime?: string;
    duration?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {FileOutCommonType[]} 记录
 */
type FileOutReqCommonType = {
    totalCount?: number;
    records?: FileOutCommonType[];
};

/**
 * 同步状态
 * 1:Syncing
 * 2:SyncCompleted
 * 3:Applying
 * 4:ApplyCompleted
 */
type SyncStatusCommonType = 1 | 2 | 3 | 4;

/**
 * 国标下级域返回
 * @params jobId {string} QTS 的任务 Id
 * @params regionId {string} 下级域Id
 * @params jobName {string} QTS 的任务名
 * @params jobGroup {string} QTS 的任务组
 * @params jobMode {JobModeCommonType} 定时任务的模式（1-定时|2-手动）
 * @params jobBeginTime {string} QTS 定时任务开始时间
 * @params jobEndTime {string} QTS 定时任务结束时间
 * @params nextExecuteTime {string} 下次执行时间
 * @params jobStatus {JobStatusCommonType} Qts的状态(0-正常|1-已停止|2-完成|3-错误|4-已有任务执行中|5-触发器不存在)
 * @params jobCron {string} QTS 定时任务的Cron表达式
 * @params name {string} 下级域名称
 * @params status {number} 状态，1：设备离线    2：设备在线
 * @params ip {string} Ip
 * @params port {number} 端口
 * @params type {number} 用户代理类型，常见类型，            IPC:131            NVR:118            Platform(国标平台):2            Encoder:113            Decoder:114
 * @params taskStatus {SyncStatusCommonType} 同步任务状态未开始 0进行中 1 同步完成 2应用中 3 应用完成 4
 * @params timeRemaining {number} 同步剩余时间，单位/毫秒
 * @params progress {number} 同步进度，百分比
 * @params cameraOnlineCount {number} 摄像头在线数量
 * @params actualCatalogsNum {number} 实际同步目录数量
 * @params catalogsNum {number} 信令同步目录数量
 * @params endTime {string} 任务结束时间
 * @params startTime {string} 开始时间
 * @params duration {number} 耗时
 * @params result {number} 同步结果
 * @params syncNum {number} 同步中的数量
 * @params expiredCameraCount {number} 过期监控数量
 * @params hasConflictData {boolean} 是否有冲突数据
 * @params stateDuration {string} 在线/离线时长
 * @params lastStateChangedTime {string} 最后一次状态变更时间
 */
type GbLowerDomainDataOutCommonType = {
    jobId?: string;
    regionId?: string;
    jobName?: string;
    jobGroup?: string;
    jobMode?: JobModeCommonType;
    jobBeginTime?: string;
    jobEndTime?: string;
    nextExecuteTime?: string;
    jobStatus?: JobStatusCommonType;
    jobCron?: string;
    name?: string;
    status?: number;
    ip?: string;
    port?: number;
    type?: number;
    taskStatus?: SyncStatusCommonType;
    timeRemaining?: number;
    progress?: number;
    cameraOnlineCount?: number;
    actualCatalogsNum?: number;
    catalogsNum?: number;
    endTime?: string;
    startTime?: string;
    duration?: number;
    result?: number;
    syncNum?: number;
    expiredCameraCount?: number;
    hasConflictData?: boolean;
    stateDuration?: string;
    lastStateChangedTime?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {GbLowerDomainDataOutCommonType[]} 记录
 */
type GbLowerDomainDataOutReqCommonType = {
    totalCount?: number;
    records?: GbLowerDomainDataOutCommonType[];
};

/**
 * 下级域网络
 * 1:IntranetNetwork
 * 2:PublicNetwork
 */
type SipServiceNetworkTypeCommonType = 1 | 2;

/**
 * 下级域状态
 * 1:Onlive
 * 2:Offline
 */
type SipServiceStatusCommonType = 1 | 2;

/**
 * 用户代理类型
 * 2:Platform
 * 113:Encoder
 * 114:Decoder
 * 118:NVR
 * 131:IPC
 * 300:VCE
 */
type DomainTypeCommonType = 2 | 113 | 114 | 118 | 131 | 300;

/**
 * 国标流媒体收流协议
 * 0:UDP
 * 1:TCPPassive
 * 2:TCPProactive
 */
type RtpRecvTypeCommonType = 0 | 1 | 2;

/**
 * 国标流媒体向下级发流协议
 * 0:UDP
 * 1:TCPPassive
 * 2:TCPProactive
 */
type RtpSendTypeCommonType = 0 | 1 | 2;

/**
 * SIP传输协议类型
 * 0:UDP
 * 1:TCP
 */
type SipTransProtocolCommonType = 0 | 1;

/**
 * 定时任务
 * @params beginTime {string} 任务开始时间
 * @params endTime {string} 任务结束时间
 * @params cron {string} cron表达式
 * @params description {string} 任务描述
 * @params mode {JobModeCommonType} 模式 1-定时 2-手动
 */
type ScheduleTaskCommonType = {
    beginTime?: string;
    endTime?: string;
    cron: string;
    description?: string;
    mode?: JobModeCommonType;
};

/**
 * 创建国标下级域请求
 * @params activeRegister {boolean} 是否主动注册
 * @params civilcode {string} 区域编码
 * @params gbId {string} 下级域的国标id
 * @params heartbeadCycle {number} 心跳周期
 * @params heartbeadTimeoutCount {number} 心跳超时次数
 * @params ip {string} 下级域的SIP信令IP地址
 * @params manufacturer {number} 厂商，可为空
 * @params model {string} 型号，可为空
 * @params name {string} 下级域的名称
 * @params needAuth {boolean} 是否需要认证
 * @params password {string} 认证密码
 * @params needMapping {boolean} 启用映射
 * @params sipMappedAddress {string} 信令映射地址
 * @params mediaMappedAddress {string} 流媒体映射地址
 * @params networkType {SipServiceNetworkTypeCommonType} 对接网络类型，1：内网，2：公网默认内网
 * @params sipPort {number} 下级域的SIP信令端口号
 * @params status {SipServiceStatusCommonType} 下级域状态（1：设备离线，2：设备在线）默认离线
 * @params type {DomainTypeCommonType} 用户代理类型，IPC:131 国标摄像头NVR:118  国标NVRPlatform(国标平台) :2Encoder:113  国标编码器Decoder:114 国标解码器VCE:300 非标服务视频
 * @params userName {string} 登录的用户名，认证时需要
 * @params rtpRecvType {RtpRecvTypeCommonType} 国标流媒体收流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params rtpSendType {RtpSendTypeCommonType} 国标流媒体向下级发流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params sipTransProtocol {SipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params extension {undefined} 扩展字段
 * @params scheduleTask {ScheduleTaskCommonType} 定时任务
 */
type CreateGbLowerDomainRequestCommonType = {
    activeRegister?: boolean;
    civilcode?: string;
    gbId: string;
    heartbeadCycle?: number;
    heartbeadTimeoutCount?: number;
    ip: string;
    manufacturer?: number;
    model?: string;
    name: string;
    needAuth?: boolean;
    password?: string;
    needMapping?: boolean;
    sipMappedAddress?: string;
    mediaMappedAddress?: string;
    networkType?: SipServiceNetworkTypeCommonType;
    sipPort: number;
    status?: SipServiceStatusCommonType;
    type?: DomainTypeCommonType;
    userName?: string;
    rtpRecvType?: RtpRecvTypeCommonType;
    rtpSendType?: RtpSendTypeCommonType;
    sipTransProtocol?: SipTransProtocolCommonType;
    extension?: undefined;
    scheduleTask?: ScheduleTaskCommonType;
};

/**
 * 下级域信息
 * @params jobId {string} 定时任务的Id
 * @params jobName {string} 定时任务名称
 * @params name {string} 下级域名称
 * @params ip {string} 下级域ip地址
 * @params type {number} 用户代理类型，常见类型，            IPC:131            NVR:118            Platform(国标平台):2            Encoder:113            Decoder:114
 * @params gbId {string} 下级域标识
 * @params sipPort {number} 端口
 * @params heartBeadCycle {number} 心跳周期
 * @params heartBeadTimeoutCount {number} 心跳超时次数
 * @params needAuth {boolean} 是否需要认证
 * @params password {string} 认证密码
 * @params networkType {number} 网络类型（1：内网，2：公网）
 * @params jobMode {JobModeCommonType} 定时任务模式
 * @params cron {string} Cron表达式
 * @params nextExecuteTime {string} 下次执行时间
 * @params beginTime {string} 定时任务开始时间
 * @params endTime {string} 定时任务结束时间
 * @params status {number} 在线状态1-离线2-在线
 * @params taskStatus {SyncStatusCommonType} 同步任务状态未开始 0进行中 1 同步完成 2应用中 3 应用完成 4
 * @params timeRemaining {number} 同步剩余时间，单位/毫秒
 * @params progress {number} 同步进度，百分比
 * @params catalogsNum {number} 信令同步目录数量值
 * @params actualCatalogsNum {number} 实际同步目录数量
 * @params rtpRecvType {RtpRecvTypeCommonType} 国标流媒体收流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params rtpSendType {RtpSendTypeCommonType} 国标流媒体向下级发流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params sipTransProtocol {SipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params extension {undefined} 扩展字段
 * @params stateDuration {string} 在线/离线时长
 * @params lastStateChangedTime {string} 最后一次状态变更时间
 * @params needMapping {boolean} 启用映射
 * @params sipMappedAddress {string} 信令映射地址
 * @params mediaMappedAddress {string} 流媒体映射地址
 */
type GbLowerDomainOutCommonType = {
    jobId?: string;
    jobName?: string;
    name?: string;
    ip?: string;
    type?: number;
    gbId?: string;
    sipPort?: number;
    heartBeadCycle?: number;
    heartBeadTimeoutCount?: number;
    needAuth?: boolean;
    password?: string;
    networkType?: number;
    jobMode?: JobModeCommonType;
    cron?: string;
    nextExecuteTime?: string;
    beginTime?: string;
    endTime?: string;
    status?: number;
    taskStatus?: SyncStatusCommonType;
    timeRemaining?: number;
    progress?: number;
    catalogsNum?: number;
    actualCatalogsNum?: number;
    rtpRecvType?: RtpRecvTypeCommonType;
    rtpSendType?: RtpSendTypeCommonType;
    sipTransProtocol?: SipTransProtocolCommonType;
    extension?: undefined;
    stateDuration?: string;
    lastStateChangedTime?: string;
    needMapping?: boolean;
    sipMappedAddress?: string;
    mediaMappedAddress?: string;
};

/**
 * 修改定时任务参数
 * @params description {string} 定时任务描述
 * @params mode {JobModeCommonType} 定时任务的模式（1-定时|2-手动）
 * @params beginTime {string} 定时任务开始时间
 * @params endTime {string} 定时任务结束时间
 * @params cron {string} 定时任务的 Cron 表达式
 */
type UpdateJobInCommonType = {
    description?: string;
    mode?: JobModeCommonType;
    beginTime?: string;
    endTime?: string;
    cron: string;
};

/**
 * 修改国标下级域配置入参
 * @params heartbeadCycle {number} 心跳周期
 * @params heartbeadTimeoutCount {number} 心跳超时次数
 * @params ip {string} 下级域的SIP信令IP地址
 * @params name {string} 下级域的名称
 * @params needAuth {boolean} 是否需要认证
 * @params password {string} 认证密码
 * @params needMapping {boolean} 启用映射
 * @params sipMappedAddress {string} 信令映射地址
 * @params mediaMappedAddress {string} 流媒体映射地址
 * @params networkType {SipServiceNetworkTypeCommonType} 对接网络类型，1：内网，2：公网默认内网
 * @params sipPort {number} 下级域的SIP信令端口号
 * @params userName {string} 用户名,建议同gbid
 * @params rtpRecvType {RtpRecvTypeCommonType} 国标流媒体收流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params rtpSendType {RtpSendTypeCommonType} 国标流媒体向下级发流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params sipTransProtocol {SipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params extension {undefined} 扩展字段
 * @params updateJobIn {UpdateJobInCommonType} 修改定时任务参数
 */
type GbLowerLevelDomainUpdateInCommonType = {
    heartbeadCycle?: number;
    heartbeadTimeoutCount?: number;
    ip: string;
    name: string;
    needAuth?: boolean;
    password?: string;
    needMapping?: boolean;
    sipMappedAddress?: string;
    mediaMappedAddress?: string;
    networkType?: SipServiceNetworkTypeCommonType;
    sipPort: number;
    userName?: string;
    rtpRecvType?: RtpRecvTypeCommonType;
    rtpSendType?: RtpSendTypeCommonType;
    sipTransProtocol?: SipTransProtocolCommonType;
    extension?: undefined;
    updateJobIn?: UpdateJobInCommonType;
};

/**
 * 多条件查询设施请求
 * @params keyWord {string} 关键字
 * @params maxCount {number} 最大返回值
 * @params locations {CoordinateCommonType[]} 点位集合
 * @params areaCodes {any[]} 行政区域代码
 * @params prefixAreaCodes {any[]} 行政区域前缀代码,传入完整区域码也会被处理为前缀区域码
 */
type SearchGoodRequestInCommonType = {
    keyWord?: string;
    maxCount?: number;
    locations?: CoordinateCommonType[];
    areaCodes?: any[];
    prefixAreaCodes?: any[];
};

/**
 * 设施基本信息
 * @params id {string} 设施 Id
 * @params name {string} 设施名
 * @params address {string} 地址
 * @params description {string} 描述
 */
type FacilityInfoCommonType = {
    id?: string;
    name?: string;
    address?: string;
    description?: string;
};

/**
 * 物资返回实体
 * @params id {string} ID
 * @params name {string} 名称
 * @params resourceId {string} 资源Id
 * @params description {string} 详情
 * @params organization {string} 权属单位
 * @params owner {string} 负责人
 * @params number {string} 联系电话
 * @params amount {number} 数量
 * @params unit {string} 单位
 * @params subType {string} 子类型
 * @params mainType {string} 主类型
 * @params entryTime {string} 入库时间
 * @params platformId {string} 资源所属平台Id
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params facility {FacilityInfoCommonType} 所在仓库
 */
type GoodEntityDetailOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    description?: string;
    organization?: string;
    owner?: string;
    number?: string;
    amount?: number;
    unit?: string;
    subType?: string;
    mainType?: string;
    entryTime?: string;
    platformId?: string;
    longitude?: number;
    latitude?: number;
    facility?: FacilityInfoCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {GoodEntityDetailOutCommonType[]} 记录
 */
type GoodEntityDetailOutReqCommonType = {
    totalCount?: number;
    records?: GoodEntityDetailOutCommonType[];
};

/**
 * ORGS 联系人详情
 * @params id {string} 人员ID
 * @params name {string} 人员姓名
 * @params account {string} 人员账号
 * @params title {string} 职位
 * @params department {string} 部门
 * @params phones {PhoneDataCommonType[]} 人员电话
 * @params mail {string} 邮箱
 * @params address {string} 地址
 * @params relatedId {string} 关联ID
 * @params photoPath {string} 头像路径
 * @params photo {string} 头像
 * @params contactTypeId {string} 关联类型ID
 * @params paths {any[]} 路径
 */
type ContactV2OutCommonType = {
    id?: string;
    name?: string;
    account?: string;
    title?: string;
    department?: string;
    phones?: PhoneDataCommonType[];
    mail?: string;
    address?: string;
    relatedId?: string;
    photoPath?: string;
    photo?: string;
    contactTypeId?: string;
    paths?: any[];
};

/**
 * 上报源类型
 * 0:Person
 * 1:Terminal
 */
type UploadSourceTypeCommonType = 0 | 1;

/**
 * 终端类型
 * 0:LawEnforcementInstrument,执法记录仪
 * 1:ControlTheBall4G,4G布控球
 * 2:VideoConferenceTerminal,视频会议终端
 * 3:MobileClusterVehicleStation,移动集群车载台
 * 4:Other,其他终端
 * 5:MonitorDevice,监测设备终端
 * 6:Uav,无人机
 * 7:IntercomTerminal,对讲终端
 */
type TerminalTypeCommonType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

/**
 * 配置类型
 * 0:MonitorDevice,监测设备终端
 * 1:IntercomTerminal,对讲终端
 */
type ConfigTypeCommonType = 0 | 1;

/**
 * 类型配置
 * @params id {string} ID
 * @params name {string} 名称
 * @params resourceId {string} 资源id
 * @params type {ConfigTypeCommonType} 配置类型
 */
type TypeConfigOutCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    type?: ConfigTypeCommonType;
};

/**
 * 终端信息
 * @params id {string} 标识
 * @params name {string} 名称
 * @params number {string} 号码
 * @params description {string} 描述信息
 * @params resourceId {string} 资源ID
 * @params terminalType {TerminalTypeCommonType} 终端类型
 * @params areaCode {string} 行政区域码
 * @params areaName {string} 行政区域名称
 * @params status {AssetStatusCommonType} 资产状态1在线，2不在线
 * @params relateType {TypeConfigOutCommonType} 关联类型
 * @params contact {ContactCommonType} 联系人
 */
type TerminalBaseOutCommonType = {
    id?: string;
    name?: string;
    number?: string;
    description?: string;
    resourceId?: string;
    terminalType?: TerminalTypeCommonType;
    areaCode?: string;
    areaName?: string;
    status?: AssetStatusCommonType;
    relateType?: TypeConfigOutCommonType;
    contact?: ContactCommonType;
};

/**
 * 点位搜索返回结果
 * @params id {string} 设备ID
 * @params reportTime {string} 上报时间
 * @params userInfo {ContactV2OutCommonType} 联系人
 * @params coordinate {CoordinateCommonType} 坐标
 * @params metersPerSecond {number} 速度(米/秒)
 * @params direction {number} 方向(取值0-360, 以正北为参考基准)
 * @params altitude {number} 海拔高度
 * @params address {string} 地址
 * @params uploadSourceType {UploadSourceTypeCommonType} 上报源类型（0:人员上报；1:资产终端类型）
 * @params terminalInfo {TerminalBaseOutCommonType} 终端信息
 */
type PointSearchOutCommonType = {
    id?: string;
    reportTime?: string;
    userInfo?: ContactV2OutCommonType;
    coordinate?: CoordinateCommonType;
    metersPerSecond?: number;
    direction?: number;
    altitude?: number;
    address?: string;
    uploadSourceType?: UploadSourceTypeCommonType;
    terminalInfo?: TerminalBaseOutCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {PointSearchOutCommonType[]} 记录
 */
type PointSearchOutReqCommonType = {
    totalCount?: number;
    records?: PointSearchOutCommonType[];
};

/**
 * GPS数据
 * @params coordinate {CoordinateCommonType} 坐标
 * @params metersPerSecond {number} 速度(米/秒)
 * @params direction {number} 方向(取值0-360, 以正北为参考基准)
 * @params altitude {number} 海拔高度
 * @params address {string} 地址
 */
type GpsDataCommonType = {
    coordinate?: CoordinateCommonType;
    metersPerSecond?: number;
    direction?: number;
    altitude?: number;
    address?: string;
};

/**
 * 激活点位
 * @params deviceId {string} 设备Id
 * @params gps {GpsDataCommonType} 设备位置
 * @params reportTime {string} 上报时间
 * @params uploadSourceType {UploadSourceTypeCommonType} 上报源类型
 */
type ActiveItemOutCommonType = {
    deviceId?: string;
    gps?: GpsDataCommonType;
    reportTime?: string;
    uploadSourceType?: UploadSourceTypeCommonType;
};

/**
 * 设备
 * @params device {string} 设备Id单次最多100个设备
 * @params uploadSourceType {UploadSourceTypeCommonType} 上报源
 */
type DeviceItemCommonType = {
    device: string;
    uploadSourceType: UploadSourceTypeCommonType;
};

/**
 * 设备最新点位查询条件
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params devices {DeviceItemCommonType[]} 设备Id:上报源类型，用 "," 分开多个
 */
type LastDeviceActiveItemQueryConditionInCommonType = {
    pageIndex?: number;
    pageSize?: number;
    devices?: DeviceItemCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ActiveItemOutCommonType[]} 记录
 */
type ActiveItemOutReqCommonType = {
    totalCount?: number;
    records?: ActiveItemOutCommonType[];
};

/**
 * 历史点
 * @params deviceId {string} 设备Id
 * @params gps {GpsDataCommonType} 设备位置
 * @params reportTime {string} 上报时间
 * @params uploadSourceType {UploadSourceTypeCommonType} 上报源类型
 */
type HistoryItemOutCommonType = {
    deviceId?: string;
    gps?: GpsDataCommonType;
    reportTime?: string;
    uploadSourceType?: UploadSourceTypeCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {HistoryItemOutCommonType[]} 记录
 */
type HistoryItemOutReqCommonType = {
    totalCount?: number;
    records?: HistoryItemOutCommonType[];
};

/**
 * 播放url显示类型
 * 0:FullUrl
 * 1:Native
 */
type PlayUrlShowTypeCommonType = 0 | 1;

/**
 * 监控
 * @params id {string} ID
 * @params name {string} 名称
 * @params status {EnumTypes_CameraStatusCommonType} 监控状态1-离线2-在线
 * @params quality {EnumTypes_QualityCommonType} 监控质量0-未检测1-差2-优3-良4-故障
 * @params areaCode {string} 行政区域码
 * @params thumbnailID {string} 图片id
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params playUrl {PlayUrlOutCommonType} 播放地址
 */
type SimpleCameraOutCommonType = {
    id?: string;
    name?: string;
    status?: EnumTypes_CameraStatusCommonType;
    quality?: EnumTypes_QualityCommonType;
    areaCode?: string;
    thumbnailID?: string;
    longitude?: number;
    latitude?: number;
    playUrl?: PlayUrlOutCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {SimpleCameraOutCommonType[]} 记录
 */
type SimpleCameraOutReqCommonType = {
    totalCount?: number;
    records?: SimpleCameraOutCommonType[];
};

/**
 * 通讯数据
 * @params mail {string} 邮箱
 * @params address {string} 地址
 * @params weixin {string} 微信
 * @params weibo {string} 微博
 */
type CallDataCommonType = {
    mail?: string;
    address?: string;
    weixin?: string;
    weibo?: string;
};

/**
 * 组成员状态
 * 1:Online
 * 2:Offline
 */
type GroupMemberStatusCommonType = 1 | 2;

/**
 * 监控质量
 * 0:UnDetected
 * 1:Bad
 * 2:Excellent
 * 3:Good
 * 4:Fault
 */
type VideoQualityCommonType = 0 | 1 | 2 | 3 | 4;

/**
 * 组成员响应
 * @params id {string} 标识
 * @params name {string} 名称
 * @params account {string} 账号
 * @params description {string} 描述
 * @params gender {number} 性别
 * @params birthday {string} 生日
 * @params title {string} 职位
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params phones {PhoneDataCommonType[]} 电话列表
 * @params callInformation {CallDataCommonType} 通讯信息
 * @params resourceId {string} 分级调度外部资源Id
 * @params platformId {string} 分级调度平台Id
 * @params platformName {string} 分级调度平台名称
 * @params relatedId {string} 关联ID（可选）
 * @params photo {string} 头像
 * @params type {number} 联系人类型：1-人员，2-监控，4-会议终端
 * @params status {GroupMemberStatusCommonType} 在线状态：1-在线，2-离线
 * @params videoQuality {VideoQualityCommonType} 监控质量
 * @params isDelete {boolean} 是否已删除
 * @params photoPath {string} 头像路径
 */
type GroupMemberOutCommonType = {
    id?: string;
    name?: string;
    account?: string;
    description?: string;
    gender?: number;
    birthday?: string;
    title?: string;
    createTime?: string;
    updateTime?: string;
    phones?: PhoneDataCommonType[];
    callInformation?: CallDataCommonType;
    resourceId?: string;
    platformId?: string;
    platformName?: string;
    relatedId?: string;
    photo?: string;
    type?: number;
    status?: GroupMemberStatusCommonType;
    videoQuality?: VideoQualityCommonType;
    isDelete?: boolean;
    photoPath?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {GroupMemberOutCommonType[]} 记录
 */
type GroupMemberOutReqCommonType = {
    totalCount?: number;
    records?: GroupMemberOutCommonType[];
};

/**
 * 组搜索
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params resourceRelationship {ResourceRelationshipQueryCommonType} 资源关系
 * @params keyword {string} 关键词
 */
type GroupResourceQueryRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    resourceRelationship: ResourceRelationshipQueryCommonType;
    keyword?: string;
};

/**
 * 组详情无具体联系人
 * @params id {string} 标识
 * @params name {string} 名称
 * @params description {string} 描述
 * @params parentId {string} 父节点Id
 * @params members {any[]} 组成员Id集合
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params owner {string} 拥有者
 * @params type {number} 组类型
 */
type GroupDetailNoContactDetailOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
    parentId?: string;
    members?: any[];
    createTime?: string;
    updateTime?: string;
    owner?: string;
    type?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {GroupDetailNoContactDetailOutCommonType[]} 记录
 */
type GroupDetailNoContactDetailOutReqCommonType = {
    totalCount?: number;
    records?: GroupDetailNoContactDetailOutCommonType[];
};

/**
 * 组和联系人搜索
 * @params resourceRelationship {ResourceRelationshipQueryCommonType} 资源关系
 * @params keyword {string} 关键词
 * @params limit {number} 最大获取条数
 */
type GroupAndContactResourceQueryRequestCommonType = {
    resourceRelationship: ResourceRelationshipQueryCommonType;
    keyword?: string;
    limit?: number;
};

/**
 * 联系人
 * @params id {string} 标识
 * @params name {string} 名称
 * @params account {string} 账号
 * @params parentId {string} 父节点
 * @params description {string} 描述
 * @params gender {number} 性别 0:男,1:女（可选）
 * @params title {string} 职位
 * @params photoPath {string} 图像
 * @params phones {PhoneDataCommonType[]} 电话列表
 * @params memberOf {any[]} 所属组
 * @params paths {any[]} 所属目录
 * @params platformId {string} 平台Id
 * @params resourceId {string} 资源ID
 */
type ContactOutCommonType = {
    id?: string;
    name?: string;
    account?: string;
    parentId?: string;
    description?: string;
    gender?: number;
    title?: string;
    photoPath?: string;
    phones?: PhoneDataCommonType[];
    memberOf?: any[];
    paths?: any[];
    platformId?: string;
    resourceId?: string;
};

/**
 * 组详情
 * @params id {string} 标识
 * @params name {string} 名称
 * @params description {string} 描述
 * @params parentId {string} 父节点Id
 * @params type {number} 组类型(个人组：2，预案组类型：3，临时组：4)
 * @params path {string} 路径
 * @params owner {string} 拥有者
 * @params memberCount {number} 成员数量
 * @params contactCount {number} 联系人数量
 * @params isLeaf {boolean} 是否叶子节点
 */
type GroupOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
    parentId?: string;
    type?: number;
    path?: string;
    owner?: string;
    memberCount?: number;
    contactCount?: number;
    isLeaf?: boolean;
};

/**
 * 组和联系人
 * @params contacts {ContactOutCommonType[]} 联系人列表
 * @params groups {GroupOutCommonType[]} 用户组列表
 */
type SearchResultOutCommonType = {
    contacts?: ContactOutCommonType[];
    groups?: GroupOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {SearchResultOutCommonType} 记录
 */
type SearchResultOutReqCommonType = {
    totalCount?: number;
    records?: SearchResultOutCommonType;
};

/**
 * 图层请求返回参数
 * @params layerId {string} 图层id
 * @params layerName {string} 图层名称
 * @params subordinateLayersTotal {number} 图层总数
 * @params facilitiesTotal {number} 设施总数
 * @params subordinateLayers {LayerNodeOutCommonType[]} 下级图层资源
 */
type LayerNodeOutCommonType = {
    layerId?: string;
    layerName?: string;
    subordinateLayersTotal?: number;
    facilitiesTotal?: number;
    subordinateLayers?: LayerNodeOutCommonType[];
};

/**
 * 图层请求返回参数
 * @params layerId {string} 图层id
 * @params layerName {string} 图层名称
 * @params subordinateLayersTotal {number} 图层总数
 * @params facilitiesTotal {number} 设施总数
 * @params subordinateLayers {LayerNodeOutCommonType[]} 下级图层资源
 * @params areaCode {string} 区域码
 */
type LayerNodeWithAreaCodeOutCommonType = {
    layerId?: string;
    layerName?: string;
    subordinateLayersTotal?: number;
    facilitiesTotal?: number;
    subordinateLayers?: LayerNodeOutCommonType[];
    areaCode?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {LayerNodeWithAreaCodeOutCommonType[]} 记录
 */
type LayerNodeWithAreaCodeOutReqCommonType = {
    totalCount?: number;
    records?: LayerNodeWithAreaCodeOutCommonType[];
};

/**
 * 拍传数据
 * @params id {string} 拍传ID
 * @params name {string} 拍传名称
 * @params templateId {string} 拍传模板Id
 * @params templateName {string} 拍传模板名称
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params address {string} 地址
 * @params fileGroupId {string} 文件组Id
 * @params fileCount {number} 文件数量
 * @params userId {string} 拍传用户id
 * @params userName {string} 用户名称
 * @params organizationId {string} 组织机构Id
 * @params organizationName {string} 组织机构名称
 * @params uploadTime {string} 上传时间
 * @params company {string} 单位名称
 * @params companyAddress {string} 单位地址
 * @params resourceId {string} 资源ID
 * @params platformId {string} 平台Id
 * @params areaCode {string} 行政区域码
 * @params districtName {string} 行政区域名
 * @params fileRecords {FileEntityOutCommonType[]} 文件记录
 */
type MultimediaTransferDetailOutCommonType = {
    id?: string;
    name?: string;
    templateId?: string;
    templateName?: string;
    longitude?: number;
    latitude?: number;
    address?: string;
    fileGroupId?: string;
    fileCount?: number;
    userId?: string;
    userName?: string;
    organizationId?: string;
    organizationName?: string;
    uploadTime?: string;
    company?: string;
    companyAddress?: string;
    resourceId?: string;
    platformId?: string;
    areaCode?: string;
    districtName?: string;
    fileRecords?: FileEntityOutCommonType[];
};

/**
 * 查询拍传入参
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params beginTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params templateId {string} 模板Id
 * @params keyWord {string} 关键字模糊查询
 * @params organizationId {string} 组织机构Id
 * @params userId {string} 用户Id
 * @params resourceId {string} 资源ID
 * @params platformId {string} 平台 ID
 * @params prefixAreaCodes {any[]} 行政区域码前缀
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域
 */
type MultimediaTransferQueryCommonType = {
    pageIndex?: number;
    pageSize?: number;
    beginTime?: string;
    endTime?: string;
    templateId?: string;
    keyWord?: string;
    organizationId?: string;
    userId?: string;
    resourceId?: string;
    platformId?: string;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
};

/**
 * 拍传出参
 * @params id {string} 拍传ID
 * @params name {string} 拍传名称
 * @params templateId {string} 拍传模板Id
 * @params templateName {string} 拍传模板名称
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params address {string} 地址
 * @params fileGroupId {string} 文件组Id
 * @params fileCount {number} 文件数量
 * @params userId {string} 拍传用户id
 * @params userName {string} 用户名称
 * @params organizationId {string} 组织机构Id
 * @params organizationName {string} 组织机构名称
 * @params uploadTime {string} 上传时间
 * @params company {string} 单位名称
 * @params companyAddress {string} 单位地址
 * @params resourceId {string} 资源ID
 * @params platformId {string} 平台Id
 * @params areaCode {string} 行政区域码
 * @params districtName {string} 行政区域名
 */
type MultimediaTransferOutCommonType = {
    id?: string;
    name?: string;
    templateId?: string;
    templateName?: string;
    longitude?: number;
    latitude?: number;
    address?: string;
    fileGroupId?: string;
    fileCount?: number;
    userId?: string;
    userName?: string;
    organizationId?: string;
    organizationName?: string;
    uploadTime?: string;
    company?: string;
    companyAddress?: string;
    resourceId?: string;
    platformId?: string;
    areaCode?: string;
    districtName?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {MultimediaTransferOutCommonType[]} 记录
 */
type MultimediaTransferOutReqCommonType = {
    totalCount?: number;
    records?: MultimediaTransferOutCommonType[];
};

/**
 * 平台资源搜索
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params resourceRelationship {ResourceRelationshipQueryCommonType} 资源关系
 * @params platformIds {any[]} 平台ID
 * @params keyword {string} 关键词
 * @params networkId {string} 网络环境id
 * @params status {AssetStatusCommonType} 资产状态 1已连接，2未连接
 * @params prefixAreaCodes {any[]} 行政区域码前缀集合
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 * @params isContainMainResource {boolean} 返回结果是否包含主体资源
 */
type PlatformResourceSearchInCommonType = {
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    resourceRelationship?: ResourceRelationshipQueryCommonType;
    platformIds?: any[];
    keyword?: string;
    networkId?: string;
    status?: AssetStatusCommonType;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
    isContainMainResource?: boolean;
};

/**
 * 网络基础信息
 * @params id {string} ID
 * @params name {string} 名称
 */
type NetworkBaseOutCommonType = {
    id?: string;
    name?: string;
};

/**
 * 终端位置信息
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params address {string} 地址
 * @params directionAngle {number} 方向角
 * @params pitchAngle {number} 俯仰角
 * @params zoom {number} 缩放等级
 * @params extension {undefined} 拓展
 */
type LocationOutCommonType = {
    longitude?: number;
    latitude?: number;
    address?: string;
    directionAngle?: number;
    pitchAngle?: number;
    zoom?: number;
    extension?: undefined;
};

/**
 * 检修周期类型
 * 0:Adaptive,自适应周期，基于上一次检修时间自动调整
 * 1:Fixed,固定周期
 */
type MaintenancePeriodTypeCommonType = 0 | 1;

/**
 * 检修状态
 * 0:Normal,正常
 * 1:Pending,待检修
 * 2:Delayed,超期未检修
 */
type MaintenanceStatusCommonType = 0 | 1 | 2;

/**
 * 资产检修
 * @params cron {string} 检修表达式
 * @params advanceRemindDays {number} 提前提醒天数
 * @params lastMaintenanceTime {string} 最近一次检修时间
 * @params startUseTime {string} 开始使用时间
 * @params lifetime {number} 生命周期（天）
 * @params maintenancePeriodType {MaintenancePeriodTypeCommonType} 检修周期类型
 * @params status {MaintenanceStatusCommonType} 检修状态
 * @params expiryTime {string} 设备使用到期时间
 */
type MaintenanceOutCommonType = {
    cron?: string;
    advanceRemindDays?: number;
    lastMaintenanceTime?: string;
    startUseTime?: string;
    lifetime?: number;
    maintenancePeriodType?: MaintenancePeriodTypeCommonType;
    status?: MaintenanceStatusCommonType;
    expiryTime?: string;
};

/**
 * 第三方平台
 * @params id {string} ID
 * @params name {string} 名称
 * @params ipAddress {string} 接入IP
 * @params managerAddress {string} 平台管理地址
 * @params description {string} 描述
 * @params status {AssetStatusCommonType} 资产状态1在线，2不在线
 * @params account {string} 账号
 * @params password {string} 密码
 * @params areaCode {string} 行政区域码
 * @params areaName {string} 行政区域名称
 * @params department {string} 所属部门
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params accessMethod {string} 接入方式
 * @params resourceId {string} 资源ID
 * @params createTime {string} 添加时间
 * @params network {NetworkBaseOutCommonType} 所属网络
 * @params location {LocationOutCommonType} 位置信息
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params maintenance {MaintenanceOutCommonType} 检修
 * @params mainResources {ResourceBaseOutCommonType[]} 主体资源
 */
type ThirdPlatformDetailsOutCommonType = {
    id?: string;
    name?: string;
    ipAddress?: string;
    managerAddress?: string;
    description?: string;
    status?: AssetStatusCommonType;
    account?: string;
    password?: string;
    areaCode?: string;
    areaName?: string;
    department?: string;
    extension?: undefined;
    contact?: ContactCommonType;
    accessMethod?: string;
    resourceId?: string;
    createTime?: string;
    network?: NetworkBaseOutCommonType;
    location?: LocationOutCommonType;
    assetMetrics?: AssetMetricsOutCommonType[];
    maintenance?: MaintenanceOutCommonType;
    mainResources?: ResourceBaseOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ThirdPlatformDetailsOutCommonType[]} 记录
 */
type ThirdPlatformDetailsOutReqCommonType = {
    totalCount?: number;
    records?: ThirdPlatformDetailsOutCommonType[];
};

/**
 * 组详情
 * @params id {string} 标识
 * @params name {string} 名称
 * @params description {string} 描述
 * @params parentId {string} 父节点Id
 * @params members {ContactOutCommonType[]} 组成员Id集合
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params owner {string} 拥有者
 * @params type {number} 组类型
 */
type GroupDetailOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
    parentId?: string;
    members?: ContactOutCommonType[];
    createTime?: string;
    updateTime?: string;
    owner?: string;
    type?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {GroupDetailOutCommonType[]} 记录
 */
type GroupDetailOutReqCommonType = {
    totalCount?: number;
    records?: GroupDetailOutCommonType[];
};

/**
 * 预案查询入参
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params keyword {string} 模糊匹配关键字
 * @params eventTypeIds {any[]} 事件类型ID集合,Empty为所有类型
 * @params eventPriorities {any[]} 事件优先级值集合,Empty为所有类型
 * @params areaCodes {any[]} 区域码集合，Empty为所有
 * @params prefixAreaCodes {any[]} 区域码前缀集合，当AreaCodes不为空时，以AreaCodes为准，Empty为所有
 */
type PagePrePlanQueryRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    keyword?: string;
    eventTypeIds?: any[];
    eventPriorities?: any[];
    areaCodes?: any[];
    prefixAreaCodes?: any[];
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
 * 任务模板简略信息
 * @params id {string} ID
 * @params name {string} 名称
 */
type TaskTemplateInfoCommonType = {
    id?: string;
    name?: string;
};

/**
 * 响应级别
 * @params id {string} 响应级别的 Id
 * @params name {string} 响应等级名称
 * @params content {string} 响应内容
 * @params condition {string} 响应条件
 */
type ResponseLevelOutCommonType = {
    id?: string;
    name?: string;
    content?: string;
    condition?: string;
};

/**
 * 监控标签
 * @params id {number} 标签Id
 * @params name {string} 标签名
 */
type CameraLabelCommonType = {
    id?: number;
    name?: string;
};

/**
 * 视频会议终端
 * @params id {string} 视频会议终端Id
 * @params name {string} 视频会议终端名
 */
type VideoConferenceTerminalCommonType = {
    id?: string;
    name?: string;
};

/**
 * 预案
 * @params id {string} ID
 * @params name {string} 名称
 * @params eventType {EventTypeInfoCommonType} 适用于哪种事件类型ID
 * @params eventPriority {number} 适用于哪种事件优先级
 * @params areaCode {string} 行政区域码
 * @params districtIdPath {string} 行政区域IDPath
 * @params districtNamePath {string} 行政区域NamePath
 * @params eventAffectRadius {number} 事件影响半径
 * @params dangerousSources {ResourceCommonType[]} 危险源
 * @params keyProtections {ResourceCommonType[]} 重点防护目标
 * @params shelters {ResourceCommonType[]} 避难场所
 * @params warehouses {ResourceCommonType[]} 仓库
 * @params emergencyFacilities {ResourceCommonType[]} 应急设备
 * @params manpowerResources {ResourceCommonType[]} 人力资源
 * @params medicalResources {ResourceCommonType[]} 医疗资源
 * @params pollutionSources {ResourceCommonType[]} 污染源
 * @params textTemplate {string} 文本模板
 * @params sceneParameters {any[]} 情景参数
 * @params directoryRecordId {string} 预案文档储存文件夹ID
 * @params taskTemplate {TaskTemplateInfoCommonType} 关联的任务模板
 * @params associatedGroup {GroupInfoCommonType} 关联的指挥组
 * @params sceneGroup {GroupInfoCommonType} 关联的现场指挥组
 * @params firstResponseLevel {ResponseLevelOutCommonType} 一级响应级别
 * @params secondResponseLevel {ResponseLevelOutCommonType} 二级响应级别
 * @params thirdResponseLevel {ResponseLevelOutCommonType} 三级响应级别
 * @params fourthResponseLevel {ResponseLevelOutCommonType} 四级响应级别
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params cameraLabels {CameraLabelCommonType[]} 监控标签
 * @params preplanGroups {GroupInfoCommonType[]} 预案组
 * @params videoConferenceTerminals {VideoConferenceTerminalCommonType[]} 视频会议终端
 */
type PreplanOutCommonType = {
    id?: string;
    name?: string;
    eventType?: EventTypeInfoCommonType;
    eventPriority?: number;
    areaCode?: string;
    districtIdPath?: string;
    districtNamePath?: string;
    eventAffectRadius?: number;
    dangerousSources?: ResourceCommonType[];
    keyProtections?: ResourceCommonType[];
    shelters?: ResourceCommonType[];
    warehouses?: ResourceCommonType[];
    emergencyFacilities?: ResourceCommonType[];
    manpowerResources?: ResourceCommonType[];
    medicalResources?: ResourceCommonType[];
    pollutionSources?: ResourceCommonType[];
    textTemplate?: string;
    sceneParameters?: any[];
    directoryRecordId?: string;
    taskTemplate?: TaskTemplateInfoCommonType;
    associatedGroup?: GroupInfoCommonType;
    sceneGroup?: GroupInfoCommonType;
    firstResponseLevel?: ResponseLevelOutCommonType;
    secondResponseLevel?: ResponseLevelOutCommonType;
    thirdResponseLevel?: ResponseLevelOutCommonType;
    fourthResponseLevel?: ResponseLevelOutCommonType;
    platformId?: string;
    resourceId?: string;
    cameraLabels?: CameraLabelCommonType[];
    preplanGroups?: GroupInfoCommonType[];
    videoConferenceTerminals?: VideoConferenceTerminalCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {PreplanOutCommonType[]} 记录
 */
type PreplanOutReqCommonType = {
    totalCount?: number;
    records?: PreplanOutCommonType[];
};

/**
 * 推荐预案查询入参
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params eventTypeId {string} 事件类型ID集合,Empty为所有类型
 * @params eventPriority {number} 事件优先级
 * @params areaCode {string} 区域码
 * @params isMatchNullAreaCode {boolean} 是否匹配空区域码的预案
 */
type PagePreplanRecommendQueryRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    eventTypeId?: string;
    eventPriority?: number;
    areaCode?: string;
    isMatchNullAreaCode?: boolean;
};

/**
 * 预案基本实体输出
 * @params id {string} 预案ID
 * @params name {string} 预案名称
 * @params eventType {EventTypeInfoCommonType} 适用于哪种事件类型ID
 * @params eventPriority {number} 适用于哪种事件优先级
 * @params areaCode {string} 行政区域码
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 */
type PreplanBaseOutCommonType = {
    id?: string;
    name?: string;
    eventType?: EventTypeInfoCommonType;
    eventPriority?: number;
    areaCode?: string;
    platformId?: string;
    resourceId?: string;
};

/**
 * 预案分组数据输出实体
 * @params recommendsData {PreplanBaseOutCommonType[]} 推荐预案列表
 * @params othersData {PreplanBaseOutCommonType[]} 其他预案列表
 */
type PreplanGroupingOutCommonType = {
    recommendsData?: PreplanBaseOutCommonType[];
    othersData?: PreplanBaseOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {PreplanGroupingOutCommonType} 记录
 */
type PreplanGroupingOutReqCommonType = {
    totalCount?: number;
    records?: PreplanGroupingOutCommonType;
};

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
};

/**
 * 专题详情
 * @params id {string} Id
 * @params name {string} 名称
 */
type ProjectThemeDetailCommonType = {
    id?: string;
    name?: string;
};

/**
 * 项目out
 * @params id {string} ID
 * @params name {string} 名称
 * @params parentId {string} 父Id
 * @params totalMetadataCount {number} 元数据统计总数
 * @params description {string} 项目描述
 * @params themes {ProjectThemeDetailCommonType[]} 项目专题列表
 * @params resourceId {string} ResourceId
 */
type ProjectOutCommonType = {
    id?: string;
    name?: string;
    parentId?: string;
    totalMetadataCount?: number;
    description?: string;
    themes?: ProjectThemeDetailCommonType[];
    resourceId?: string;
};

/**
 * 专题详情
 * @params id {string} ID
 * @params name {string} 名称
 * @params resourceId {string} 资源id
 * @params parentId {string} 父级ID
 * @params description {string} 描述
 */
type ThemeDetailItemCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    parentId?: string;
    description?: string;
};

/**
 * 资源基类
 * @params resourceType {string} 资源类型
 */
type IResourceBaseCommonType = {
    resourceType?: string;
};

/**
 * 专题关系详情
 * @params id {string} ID
 * @params name {string} 名称
 * @params resourceId {string} 资源id
 * @params parentId {string} 父级ID
 * @params description {string} 描述
 * @params relationshipResources {IResourceBaseCommonType[]} 关联资源
 */
type ThemeRelationshipDetailCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    parentId?: string;
    description?: string;
    relationshipResources?: IResourceBaseCommonType[];
};

/**
 * 项目关系详情
 * @params id {string} ID
 * @params name {string} 名称
 * @params resourceId {string} 资源ID
 * @params themes {ThemeRelationshipDetailCommonType[]} 专题
 * @params parentId {string} 父级ID
 * @params description {string} 描述
 */
type ProjectRelationshipDetailCommonType = {
    id?: string;
    name?: string;
    resourceId?: string;
    themes?: ThemeRelationshipDetailCommonType[];
    parentId?: string;
    description?: string;
};

/**
 * 导出项目数据类型
 * 0:All
 * 1:LayoutData
 */
type ExportProjectDataTypeCommonType = 0 | 1;

/**
 * 所有资源查询
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params mainResource {ResourceInfoCommonType} 主体资源
 * @params productId {string} 产品ID
 */
type AllResourceQueryRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    mainResource: ResourceInfoCommonType;
    productId?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {IResourceBaseCommonType[]} 记录
 */
type IResourceBaseReqCommonType = {
    totalCount?: number;
    records?: IResourceBaseCommonType[];
};

/**
 * 单一资源查询
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params mainResources {ResourceInfoCommonType[]} 主体资源集合
 * @params type {string} 资源类型
 * @params dataHandleType {DataHandleTypeCommonType} 数据处理类型
 * @params productId {string} 产品ID
 */
type ResourceRelationshipQueryRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    mainResources: ResourceInfoCommonType[];
    type: string;
    dataHandleType?: DataHandleTypeCommonType;
    productId?: string;
};

/**
 * 资源搜索
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params mainResources {ResourceInfoCommonType[]} 主体资源集合
 * @params type {string} 资源类型
 * @params dataHandleType {DataHandleTypeCommonType} 数据处理类型
 * @params productId {string} 产品ID
 * @params keyword {string} 资源类型
 * @params prefixAreaCodes {any[]} 行政区域码前缀集合
 */
type ResourceSearchQueryRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    mainResources: ResourceInfoCommonType[];
    type: string;
    dataHandleType?: DataHandleTypeCommonType;
    productId?: string;
    keyword?: string;
    prefixAreaCodes?: any[];
};

/**
 * 主体
 * @params type {string} 资源类型
 * @params resourceId {string} 资源ID
 */
type MainResourceInCommonType = {
    type: string;
    resourceId: string;
};

/**
 * 资源关系处理类型
 * 0:Bind,绑定
 * 1:UnBind,解绑
 */
type RelationshipHandleTypeCommonType = 0 | 1;

/**
 * 事件类型组关系
 * @params eventTypeGroupId {string} 事件类型组ID集合
 * @params relationshipHandleType {RelationshipHandleTypeCommonType} 资源关系处理方式绑定或者解绑
 */
type EventTypeGroupRelationshipCommonType = {
    eventTypeGroupId: string;
    relationshipHandleType?: RelationshipHandleTypeCommonType;
};

/**
 * 事件类型组资源关系入参
 * @params mainResource {MainResourceInCommonType} 主体资源【不存在主体资源会自动创建】
 * @params eventTypeGroupRelationships {EventTypeGroupRelationshipCommonType[]} 事件类型组操作集合
 */
type EventTypeGroupRelationshipInCommonType = {
    mainResource: MainResourceInCommonType;
    eventTypeGroupRelationships?: EventTypeGroupRelationshipCommonType[];
};

/**
 * 告警类型关系
 * @params alarmTypeId {string} 告警类型ID
 * @params relationshipHandleType {RelationshipHandleTypeCommonType} 资源关系处理方式绑定或者解绑
 * @params isLeaf {boolean} 是否是叶子结点
 */
type AlarmTypeRelationshipCommonType = {
    alarmTypeId: string;
    relationshipHandleType?: RelationshipHandleTypeCommonType;
    isLeaf: boolean;
};

/**
 * 告警类型资源关系入参
 * @params mainResource {MainResourceInCommonType} 主体资源【不存在主体资源会自动创建】
 * @params alarmTypeRelationships {AlarmTypeRelationshipCommonType[]} 告警类型操作集合
 */
type AlarmTypeRelationshipInCommonType = {
    mainResource: MainResourceInCommonType;
    alarmTypeRelationships?: AlarmTypeRelationshipCommonType[];
};

/**
 * 角色成员信息
 * @params id {string} ID
 * @params name {string} 名称
 * @params isDataValid {boolean} 数据是否有效无效可能是不存在或者无权限
 * @params isDataFalsify {boolean} 数据是否被篡改
 * @params account {string} 账号
 * @params title {string} 职位
 * @params phones {PhoneDataCommonType[]} 电话列表
 * @params relatedId {string} 外键ID
 */
type RoleMemberOutCommonType = {
    id?: string;
    name?: string;
    isDataValid?: boolean;
    isDataFalsify?: boolean;
    account?: string;
    title?: string;
    phones?: PhoneDataCommonType[];
    relatedId?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {RoleMemberOutCommonType[]} 记录
 */
type RoleMemberOutReqCommonType = {
    totalCount?: number;
    records?: RoleMemberOutCommonType[];
};

/**
 * 组织架构信息
 * @params id {string} ID
 * @params name {string} 名称
 * @params isDataValid {boolean} 数据是否有效无效可能是不存在或者无权限
 * @params isDataFalsify {boolean} 数据是否被篡改
 * @params description {string} 描述
 * @params owner {string} 部门负责人
 */
type RoleOrganizationOutCommonType = {
    id?: string;
    name?: string;
    isDataValid?: boolean;
    isDataFalsify?: boolean;
    description?: string;
    owner?: string;
};

/**
 * 数据权限分页请求
 * @params totalCount {number} 总数
 * @params records {RoleOrganizationOutCommonType[]} 记录
 * @params hasAllDataPermission {boolean} 是否有数据全权限
 * @params isAllDataPermissionFalsify {boolean} 全权限数据是否被篡改(当为全权限时有效)
 */
type RoleOrganizationOutReqCommonType = {
    totalCount?: number;
    records?: RoleOrganizationOutCommonType[];
    hasAllDataPermission?: boolean;
    isAllDataPermissionFalsify?: boolean;
};

/**
 * 行政区划信息
 * @params id {string} ID
 * @params name {string} 名称
 * @params isDataValid {boolean} 数据是否有效无效可能是不存在或者无权限
 * @params isDataFalsify {boolean} 数据是否被篡改
 * @params resourceId {string} 资源Id
 * @params englishName {string} 英文名
 */
type RoleDistrictOutCommonType = {
    id?: string;
    name?: string;
    isDataValid?: boolean;
    isDataFalsify?: boolean;
    resourceId?: string;
    englishName?: string;
};

/**
 * 数据权限分页请求
 * @params totalCount {number} 总数
 * @params records {RoleDistrictOutCommonType[]} 记录
 * @params hasAllDataPermission {boolean} 是否有数据全权限
 * @params isAllDataPermissionFalsify {boolean} 全权限数据是否被篡改(当为全权限时有效)
 */
type RoleDistrictOutReqCommonType = {
    totalCount?: number;
    records?: RoleDistrictOutCommonType[];
    hasAllDataPermission?: boolean;
    isAllDataPermissionFalsify?: boolean;
};

/**
 * 监控组信息
 * @params id {string} ID
 * @params name {string} 名称
 * @params isDataValid {boolean} 数据是否有效无效可能是不存在或者无权限
 * @params isDataFalsify {boolean} 数据是否被篡改
 * @params groupType {number} 类型
 */
type RoleCameraGroupsOutCommonType = {
    id?: string;
    name?: string;
    isDataValid?: boolean;
    isDataFalsify?: boolean;
    groupType?: number;
};

/**
 * 数据权限分页请求
 * @params totalCount {number} 总数
 * @params records {RoleCameraGroupsOutCommonType[]} 记录
 * @params hasAllDataPermission {boolean} 是否有数据全权限
 * @params isAllDataPermissionFalsify {boolean} 全权限数据是否被篡改(当为全权限时有效)
 */
type RoleCameraGroupsOutReqCommonType = {
    totalCount?: number;
    records?: RoleCameraGroupsOutCommonType[];
    hasAllDataPermission?: boolean;
    isAllDataPermissionFalsify?: boolean;
};

/**
 * 批量绑定角色输入参数对象定义
 * @params memberIds {any[]} 成员Id集合
 * @params departmentIds {any[]} 部门成员Id集合
 */
type BatchParticipatorsRoleInCommonType = {
    memberIds: any[];
    departmentIds: any[];
};

/**
 * 字段类型【int,string,dateTime】
 * 0:Int,数值类型
 * 1:String,字符串类型
 * 2:DateTime,时间类型
 */
type FieldTypeCommonType = 0 | 1 | 2;

/**
 * 操作符类型
 * 1:Equals,相等
 * 2:NoEquals,不相等
 * 4:SmallerThan,小于;
 * 8:GreaterThan,大于
 * 16:SmallerThanOrEqual,小于等于
 * 32:GreaterThanOrEqual,大于等于
 * 64:Contains,包含
 * 128:NoContains,不包含
 * 256:AnyOne,等于其中任一
 * 512:NoAny,不等于其中任一
 */
type OperatorTypesCommonType = 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512;

/**
 * 解析类型
 * 0:Ordinary
 * 1:I18N
 */
type AnalysisTypeCommonType = 0 | 1;

/**
 * 协议范围值
 * @params id {string} ID
 * @params name {string} 名称
 */
type RangeValueCommonType = {
    id?: string;
    name?: string;
};

/**
 * 操作符信息
 * @params operator {OperatorTypesCommonType} 类型
 * @params name {string} 名称
 * @params isMultipleSelected {boolean} 当前操作符是否支持多选
 */
type OperatorTypeInfoCommonType = {
    operator?: OperatorTypesCommonType;
    name?: string;
    isMultipleSelected?: boolean;
};

/**
 * 协议拓展类
 * @params id {string} id
 * @params scene {string} 场景
 * @params key {string} 支持字段键名
 * @params type {FieldTypeCommonType} 字段类型
 * @params allowNull {boolean} 是否允许为空
 * @params example {string} 样例数据
 * @params operator {OperatorTypesCommonType} 过滤操作符
 * @params analysisType {AnalysisTypeCommonType} 解析类型
 * @params description {string} 描述
 * @params isDynamicRangeValue {boolean} 是否动态的值范围
 * @params rangeValues {RangeValueCommonType[]} 协议的范围值
 * @params operatorTypes {OperatorTypeInfoCommonType[]} 操作符集合
 */
type SchemeExtensionOutCommonType = {
    id?: string;
    scene?: string;
    key?: string;
    type?: FieldTypeCommonType;
    allowNull?: boolean;
    example?: string;
    operator?: OperatorTypesCommonType;
    analysisType?: AnalysisTypeCommonType;
    description?: string;
    isDynamicRangeValue?: boolean;
    rangeValues?: RangeValueCommonType[];
    operatorTypes?: OperatorTypeInfoCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {SchemeExtensionOutCommonType[]} 记录
 */
type SchemeExtensionOutReqCommonType = {
    totalCount?: number;
    records?: SchemeExtensionOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {RangeValueCommonType[]} 记录
 */
type RangeValueReqCommonType = {
    totalCount?: number;
    records?: RangeValueCommonType[];
};

/**
 * 视频会议终端
 * @params id {string} 用户ID，即staffId
 * @params name {string} 名称
 * @params type {number} 终端类型
 * @params parentID {string} 所属分组ID
 * @params parentName {string} 所属分组名称
 * @params number {string} 号码
 * @params isOnline {boolean} 是否在线
 * @params paths {GroupInfoCommonType[]} path
 */
type TerminalOutCommonType = {
    id?: string;
    name?: string;
    type?: number;
    parentID?: string;
    parentName?: string;
    number?: string;
    isOnline?: boolean;
    paths?: GroupInfoCommonType[];
};

/**
 * 资产通用输出
 * @params id {string} 资产Id
 * @params name {string} 资产名称
 * @params ip {string} IP(辅助通过IP查资产、可能为空)
 * @params number {string} 号码
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params secondaryAssetType {number} 二级资产类型（依赖一级资产类型，无法枚举）
 * @params contactID {string} 联系人ID
 * @params contactName {string} 联系人名称
 * @params contactPhone {string} 联系人电话
 * @params contactTitle {string} 联系人职位
 * @params contactDepartment {string} 联系人部门
 * @params resourceId {string} 资源关系ID
 * @params areaCode {string} 行政区域码
 * @params relateTypeId {string} 关联类型
 * @params relateCameraId {string} 关联监控ID
 * @params networkID {string} 网络ID
 * @params status {AssetStatusCommonType} 状态
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 */
type AssetCommonOutCommonType = {
    id?: string;
    name?: string;
    ip?: string;
    number?: string;
    assetType?: AssetTypeCommonType;
    secondaryAssetType?: number;
    contactID?: string;
    contactName?: string;
    contactPhone?: string;
    contactTitle?: string;
    contactDepartment?: string;
    resourceId?: string;
    areaCode?: string;
    relateTypeId?: string;
    relateCameraId?: string;
    networkID?: string;
    status?: AssetStatusCommonType;
    longitude?: number;
    latitude?: number;
};

/**
 * 单一资源
 * @params contacts {ContactOutCommonType[]} 联系人列表
 * @params cameras {CameraOutCommonType[]} 监控列表
 * @params terminals {TerminalOutCommonType[]} 视频会议终端列表
 * @params assets {AssetCommonOutCommonType[]} 资产列表
 */
type SingleResourceOutCommonType = {
    contacts?: ContactOutCommonType[];
    cameras?: CameraOutCommonType[];
    terminals?: TerminalOutCommonType[];
    assets?: AssetCommonOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {SingleResourceOutCommonType} 记录
 */
type SingleResourceOutReqCommonType = {
    totalCount?: number;
    records?: SingleResourceOutCommonType;
};

/**
 * 终端
 * @params id {string} ID
 * @params name {string} 名称
 * @params parentID {string} 上级组织架构ID
 * @params index {number} 序号
 * @params isLeaf {boolean} 是否叶子节点
 * @params totalCount {number} 子终端数量（统计子子孙孙节点数量）
 */
type TerminalGroupOutCommonType = {
    id?: string;
    name?: string;
    parentID?: string;
    index?: number;
    isLeaf?: boolean;
    totalCount?: number;
};

/**
 * 组资源
 * @params departmentGroups {GroupOutCommonType[]} 用户组列表
 * @params groups {GroupOutCommonType[]} 用户组列表
 * @params cameraGroups {CameraGroupCommonType[]} 监控组列表
 * @params terminalGroups {TerminalGroupOutCommonType[]} 视频会议终端组列表
 */
type GroupResourceOutCommonType = {
    departmentGroups?: GroupOutCommonType[];
    groups?: GroupOutCommonType[];
    cameraGroups?: CameraGroupCommonType[];
    terminalGroups?: TerminalGroupOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {GroupResourceOutCommonType} 记录
 */
type GroupResourceOutReqCommonType = {
    totalCount?: number;
    records?: GroupResourceOutCommonType;
};

/**
 * 搜索资源
 * @params resources {SingleResourceOutReqCommonType} 人员列表
 * @params resourceGroups {GroupResourceOutReqCommonType} 组列表
 */
type SearchResourceOutCommonType = {
    resources?: SingleResourceOutReqCommonType;
    resourceGroups?: GroupResourceOutReqCommonType;
};

/**
 *
 * @params todayFinishedEventCount {string} 今日已完成事件
 * @params finishedEventCount {string} 结束事件
 * @params notStartedEventCount {string} 未开始事件
 * @params processingEventCount {string} 处理中事件
 */
type EventStateCountOutCommonType = {
    todayFinishedEventCount?: string;
    finishedEventCount?: string;
    notStartedEventCount?: string;
    processingEventCount?: string;
};

/**
 * 监测设备终端统计出参
 * @params relateTypeId {string} 关联类型ID
 * @params totalCount {number} 总数
 */
type MonitorDeviceCountOutCommonType = {
    relateTypeId?: string;
    totalCount?: number;
};

/**
 * 资源总数
 * @params alarmAmount {number} 告警数量
 * @params cameraAmount {number} 监控数量
 * @params eventAmount {number} 事件数量
 * @params multimediaTransferAmount {number} 拍传数量
 * @params alertAmount {number} APTS 告警数量
 * @params monitorDeviceCounts {MonitorDeviceCountOutCommonType[]} 监测设备终端统计
 */
type ResourcesAmountOutCommonType = {
    alarmAmount?: number;
    cameraAmount?: number;
    eventAmount?: number;
    multimediaTransferAmount?: number;
    alertAmount?: number;
    monitorDeviceCounts?: MonitorDeviceCountOutCommonType[];
};

/**
 * 终端行政区域统计【包含下级】
 * @params areaCodes {any[]} 行政区域【包含下级】
 * @params terminalType {TerminalTypeCommonType} 终端类型
 */
type TerminalAreaCodeStatisticsInCommonType = {
    areaCodes: any[];
    terminalType?: TerminalTypeCommonType;
};

/**
 * 行政区域前缀统计输出
 * @params prefixAreaCode {string} 行政区域码
 * @params count {number} 数量
 */
type AreaCodeStatisticsOutCommonType = {
    prefixAreaCode?: string;
    count?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {AreaCodeStatisticsOutCommonType[]} 记录
 */
type AreaCodeStatisticsOutReqCommonType = {
    totalCount?: number;
    records?: AreaCodeStatisticsOutCommonType[];
};

/**
 * 行政区域统计【包含下级】
 * @params areaCodes {any[]} 行政区域【包含下级】
 */
type AreaCodeStatisticsInCommonType = {
    areaCodes: any[];
};

/**
 * 总览搜索
 * @params platformId {string} 分级id
 * @params prefixAreaCodes {any[]} 行政区域码前缀
 * @params ignoreOtherPlatform {string} 告警：忽略其他平台
 */
type OverviewSearchInCommonType = {
    platformId?: string;
    prefixAreaCodes?: any[];
    ignoreOtherPlatform?: string;
};

/**
 * 资产总览类型
 * 0:Device,设备
 * 1:Client,客户端
 * 2:Terminal,终端
 * 3:Network,网络
 * 4:ThirdPlatform,第三方平台
 * 5:AudioAndVideo,录音录像
 * 6:PositionEquipment,定位装备
 * 7:AssetAlarm,资产告警
 */
type AssetOverviewTypeCommonType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

/**
 * 录音录像
 * @params totalCount {number} 总数
 * @params audioCount {number} 录音文件数量
 * @params videoCount {number} 录像文件数量
 * @params days {number} 统计天数
 */
type AudioAndVideoCountCommonType = {
    totalCount?: number;
    audioCount?: number;
    videoCount?: number;
    days?: number;
};

/**
 * 资产告警数量
 * @params totalCount {number} 资产告警总数
 * @params processedCount {number} 已处理数量
 * @params unProcessedCount {number} 未处理数量
 */
type AssetAlarmCountCommonType = {
    totalCount?: number;
    processedCount?: number;
    unProcessedCount?: number;
};

/**
 * 资产总览
 * @params assetType {AssetOverviewTypeCommonType} 资产类型:0设备,1客户端,2终端,3网络,4第三方平台,5录音录像,6定位装备,7资产告警
 * @params totalCount {number} 总数
 * @params onlineCount {number} 在线数量
 * @params audioAndVideo {AudioAndVideoCountCommonType} 录音录像文件
 * @params assetAlarm {AssetAlarmCountCommonType} 资产告警
 */
type OverviewOutCommonType = {
    assetType?: AssetOverviewTypeCommonType;
    totalCount?: number;
    onlineCount?: number;
    audioAndVideo?: AudioAndVideoCountCommonType;
    assetAlarm?: AssetAlarmCountCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {OverviewOutCommonType[]} 记录
 */
type OverviewOutReqCommonType = {
    totalCount?: number;
    records?: OverviewOutCommonType[];
};

/**
 * 总览搜索基类
 * @params platformId {string} 分级id
 * @params prefixAreaCodes {any[]} 行政区域码前缀
 */
type OverviewSearchBaseInCommonType = {
    platformId?: string;
    prefixAreaCodes?: any[];
};

/**
 * 客户端类型
 * 0:CommandDispatchClient,指挥调度客户端
 * 1:MobileCommandDispatchIntegratedBox,移动指挥调度一体箱
 * 2:LeadDecisionCommandClient,领导决策指挥客户端
 */
type ClientTypeCommonType = 0 | 1 | 2;

/**
 * 客户端总览
 * @params clientType {ClientTypeCommonType} 客户端类型:0指挥调度客户端,1移动指挥调度一体箱,2领导决策指挥客户端
 * @params totalCount {number} 总数
 * @params onlineCount {number} 在线数量
 */
type ClientOverviewOutCommonType = {
    clientType?: ClientTypeCommonType;
    totalCount?: number;
    onlineCount?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ClientOverviewOutCommonType[]} 记录
 */
type ClientOverviewOutReqCommonType = {
    totalCount?: number;
    records?: ClientOverviewOutCommonType[];
};

/**
 * 终端总览
 * @params terminalType {TerminalTypeCommonType} 客户端类型
 * @params totalCount {number} 总数
 * @params onlineCount {number} 在线数量
 */
type TerminalOverviewOutCommonType = {
    terminalType?: TerminalTypeCommonType;
    totalCount?: number;
    onlineCount?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {TerminalOverviewOutCommonType[]} 记录
 */
type TerminalOverviewOutReqCommonType = {
    totalCount?: number;
    records?: TerminalOverviewOutCommonType[];
};

/**
 * 聚合图层统计入参
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params layerIds {any[]} 图层ID
 * @params center {CoordinateCommonType} 圆心
 * @params radius {number} 半径（单位米）
 */
type MergenceLayerStatisticsRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    layerIds?: any[];
    center: CoordinateCommonType;
    radius: number;
};

/**
 * 聚合图层统计
 * @params layerName {string} 图层名称
 * @params facilitiesTotal {number} 设施总数
 */
type MergenceLayerStatisticsOutCommonType = {
    layerName?: string;
    facilitiesTotal?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {MergenceLayerStatisticsOutCommonType[]} 记录
 */
type MergenceLayerStatisticsOutReqCommonType = {
    totalCount?: number;
    records?: MergenceLayerStatisticsOutCommonType[];
};

/**
 * 图层资源数量统计
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params productId {string} 产品ID（项目）
 * @params path {string} 路径，默认根节点
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params prefixAreaCodes {any[]} 行政区域码前缀，查询包括下级的统计
 */
type LayerResourceStatisticsRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    productId?: string;
    path?: string;
    startTime?: string;
    endTime?: string;
    prefixAreaCodes?: any[];
};

/**
 * 图标类型
 * 0:Static
 * 1:Unicode
 * 2:Dynamic
 */
type IconTypeCommonType = 0 | 1 | 2;

/**
 * 图标
 * @params iconType {IconTypeCommonType} 图标类型
 * @params iconName {string} 图标Name
 * @params iconValue {string} 图标unicode/fileId
 */
type IconInfoCommonType = {
    iconType?: IconTypeCommonType;
    iconName?: string;
    iconValue?: string;
};

/**
 * 图层资源统计出参【map在配置】
 * @params id {string} ID
 * @params name {string} 名称
 * @params description {string} 图层详情
 * @params iconUrl {string} 图层图标
 * @params group {string} 图层分组
 * @params groupKey {string} 图层分组Key
 * @params productId {string} 产品id
 * @params number {string} number
 * @params isChecked {boolean} 是否选中
 * @params path {string} 图层路径
 * @params icon {IconInfoCommonType} 图层图标
 * @params resourceTotalCount {number} 资源数
 * @params subLayerTotalCount {number} 下级图层数
 */
type LayerResourceStatisticsOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
    iconUrl?: string;
    group?: string;
    groupKey?: string;
    productId?: string;
    number?: string;
    isChecked?: boolean;
    path?: string;
    icon?: IconInfoCommonType;
    resourceTotalCount?: number;
    subLayerTotalCount?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {LayerResourceStatisticsOutCommonType[]} 记录
 */
type LayerResourceStatisticsOutReqCommonType = {
    totalCount?: number;
    records?: LayerResourceStatisticsOutCommonType[];
};

/**
 * 批量图层资源数量统计（支持资源关系）
 * @params productId {string} 产品ID（项目）
 * @params paths {any[]} 批量节点路径
 * @params minResource {MainResourceInCommonType} 主体资源
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params prefixAreaCodes {any[]} 行政区域码前缀，查询包括下级的统计
 */
type BatchLayerResourceStatisticsRequestCommonType = {
    productId?: string;
    paths?: any[];
    minResource?: MainResourceInCommonType;
    startTime?: string;
    endTime?: string;
    prefixAreaCodes?: any[];
};

/**
 * 周边设施按图层统计
 * @params productId {string} 项目id
 * @params groupKey {string} 分类
 * @params layerIds {any[]} 图层Id列表
 * @params keyword {string} 关键字
 * @params center {CoordinateCommonType} 圆心
 * @params radius {number} 半径（单位米）
 */
type CircleAreaFacilityStatisticRequestCommonType = {
    productId: string;
    groupKey?: string;
    layerIds?: any[];
    keyword?: string;
    center: CoordinateCommonType;
    radius: number;
};

/**
 * 图层信息
 * @params layerId {string} 图层id
 * @params layerName {string} 图层名称
 * @params facilitiesTotal {number} 图层对应的设施资源总数
 * @params subordinateLayersTotal {number} 下级图层总数
 * @params subordinateLayers {EventFacilityStatisticsOutCommonType[]} 下级图层信息
 */
type FacilityStatisticsOutCommonType = {
    layerId?: string;
    layerName?: string;
    facilitiesTotal?: number;
    subordinateLayersTotal?: number;
    subordinateLayers?: EventFacilityStatisticsOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {FacilityStatisticsOutCommonType[]} 记录
 */
type FacilityStatisticsOutReqCommonType = {
    totalCount?: number;
    records?: FacilityStatisticsOutCommonType[];
};

/**
 * 资产功能分类
 * 1:Normal,普通
 * 2:GPS,定位
 * 4:Camera,监控
 * 8:Number,号码
 */
type AssetFunctionTypesCommonType = 1 | 2 | 4 | 8;

/**
 * 资产类型统计
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params functionTypes {AssetFunctionTypesCommonType} 功能分类
 * @params assetType {AssetTypeCommonType} 一级类型
 * @params parentId {string} 父级ID
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 * @params isIncludeConferenceTerminal {boolean} 是否包含视频会议终端
 */
type AssetTypeStatisticsInCommonType = {
    prefixAreaCodes?: any[];
    functionTypes?: AssetFunctionTypesCommonType;
    assetType?: AssetTypeCommonType;
    parentId?: string;
    isMatchNullAreaCode?: boolean;
    isIncludeConferenceTerminal?: boolean;
};

/**
 * 聚合类型统计
 * @params id {string} ID
 * @params name {string} 类型名
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params secondaryAssetType {number} 二级资产类型
 * @params relateTypeId {string} 三级类型
 * @params totalCount {number} 总数
 * @params onlineTotalCount {number} 在线总数
 * @params isLeaf {boolean} 是否叶子
 * @params isLeafType {boolean} 是否有叶子类型
 */
type AggregateTypeCountOutCommonType = {
    id?: string;
    name?: string;
    assetType?: AssetTypeCommonType;
    secondaryAssetType?: number;
    relateTypeId?: string;
    totalCount?: number;
    onlineTotalCount?: number;
    isLeaf?: boolean;
    isLeafType?: boolean;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {AggregateTypeCountOutCommonType[]} 记录
 */
type AggregateTypeCountOutReqCommonType = {
    totalCount?: number;
    records?: AggregateTypeCountOutCommonType[];
};

/**
 * 添加保活定时任务请求参数
 * @params jobName {string} 定时任务Name
 * @params businessId {string} 需要保活的组Id
 * @params type {DetectionTypeCommonType} 类型0-监控1-标签
 * @params keepAliveTime {string} 保活时长 单位分钟
 * @params isRecording {boolean} 是否录像
 * @params owners {OwnerCommonType[]} 负责人
 * @params notificationType {number} 通知类型
 * @params scheduleTask {ScheduleTaskCommonType} 定时任务
 */
type StreamKeepAliveJobInCommonType = {
    jobName: string;
    businessId: string;
    type?: DetectionTypeCommonType;
    keepAliveTime: string;
    isRecording?: boolean;
    owners?: OwnerCommonType[];
    notificationType: number;
    scheduleTask: ScheduleTaskCommonType;
};

/**
 * 保活任务状态
 * 0:NotStarted
 * 1:InProgress
 * 2:Ended
 */
type StreamKeepAliveJobStatusCommonType = 0 | 1 | 2;

/**
 * 保活定时任务返回参数
 * @params jobId {string} 定时任务Id
 * @params status {StreamKeepAliveJobStatusCommonType} 状态0-未运行1-运行中2-已结束
 * @params jobName {string} 任务名称
 * @params businessId {string} 业务名称监控组Id或者标签Id
 * @params businessName {string} 业务名称
 * @params cameraTotal {number} 监控数量,保活的监控数量
 * @params createTime {string} 创建时间
 * @params modifyTime {string} 修改时间
 * @params jobMode {JobModeCommonType} 定时任务模式
 * @params cron {string} Cron表达式
 * @params nextExecuteTime {string} 下次执行时间
 * @params beginTime {string} 定时任务开始时间
 * @params endTime {string} 定时任务结束时间
 * @params owners {OwnerCommonType[]} 负责人
 * @params notificationType {number} 通知类型
 * @params keepAliveTime {string} 保活时长
 * @params isRecording {boolean} 是否录制
 * @params executionsTotal {number} 执行总数
 * @params retryTotal {number} 重试总数
 * @params successesTotal {number} 保活成功监控总数
 * @params failTotal {number} 保活失败监控总数
 * @params type {DetectionTypeCommonType} 类型0-监控1-标签
 */
type StreamKeepAliveJobDetailOutCommonType = {
    jobId?: string;
    status?: StreamKeepAliveJobStatusCommonType;
    jobName?: string;
    businessId?: string;
    businessName?: string;
    cameraTotal?: number;
    createTime?: string;
    modifyTime?: string;
    jobMode?: JobModeCommonType;
    cron?: string;
    nextExecuteTime?: string;
    beginTime?: string;
    endTime?: string;
    owners?: OwnerCommonType[];
    notificationType?: number;
    keepAliveTime?: string;
    isRecording?: boolean;
    executionsTotal?: number;
    retryTotal?: number;
    successesTotal?: number;
    failTotal?: number;
    type?: DetectionTypeCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {StreamKeepAliveJobDetailOutCommonType[]} 记录
 */
type StreamKeepAliveJobDetailOutReqCommonType = {
    totalCount?: number;
    records?: StreamKeepAliveJobDetailOutCommonType[];
};

/**
 * 任务类型
 * 1-类型1
 * 2-类型2
 * 4-类型3
 * 8-类型4
 */
type TaskTypeCommonType = 1 | 2 | 4 | 8;

/**
 * 任务状态
 * 1-未开始
 * 2-已确认
 * 4-进行中
 * 8-暂停中
 * 16-已完成
 */
type TaskStateCommonType = 1 | 2 | 4 | 8 | 16;

/**
 * 联系人详情
 * @params id {string} ID
 * @params name {string} Name
 * @params phones {PhoneDataCommonType[]} 电话列表
 * @params title {string} 职位
 * @params account {string} 账号
 * @params callInformation {CallDataCommonType} 通讯信息
 */
type ContactDetailInfoCommonType = {
    id?: string;
    name?: string;
    phones?: PhoneDataCommonType[];
    title?: string;
    account?: string;
    callInformation?: CallDataCommonType;
};

/**
 * 任务目的地
 * @params name {string} 目的地名
 * @params longitude {string} 目的地经度
 * @params latitude {string} 目的地纬度
 */
type TaskDestinationCommonType = {
    name?: string;
    longitude?: string;
    latitude?: string;
};

/**
 * 任务数据
 * @params id {string} 任务Id
 * @params name {string} 任务名
 * @params description {string} 任务详情
 * @params associateEventId {string} 任务关联事件
 * @params parentId {string} 父任务 Id
 * @params type {TaskTypeCommonType} 任务类型
 * @params state {TaskStateCommonType} 任务状态
 * @params group {GroupInfoCommonType} 组对象
 * @params groupMembers {ContactDetailInfoCommonType[]} 任务组成员
 * @params destination {TaskDestinationCommonType} 任务目的地
 * @params expectStartedTime {string} 预计开始时间
 * @params actualStartedTime {string} 实际开始时间
 * @params expectFinishedTime {string} 预计结束时间
 * @params actualFinishedTime {string} 实际结束时间
 * @params createdTime {string} 任务创建时间
 * @params order {number} 任务顺序
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params updateTime {string} 更新时间
 */
type TaskEntityOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
    associateEventId?: string;
    parentId?: string;
    type?: TaskTypeCommonType;
    state?: TaskStateCommonType;
    group?: GroupInfoCommonType;
    groupMembers?: ContactDetailInfoCommonType[];
    destination?: TaskDestinationCommonType;
    expectStartedTime?: string;
    actualStartedTime?: string;
    expectFinishedTime?: string;
    actualFinishedTime?: string;
    createdTime?: string;
    order?: number;
    platformId?: string;
    resourceId?: string;
    updateTime?: string;
};

/**
 * 任务关联数据类型
 * 0:TaskFeedback,任务反馈
 * 1:Mmt,拍传
 * 2:Communication,通话
 */
type TaskAssociatedTypeCommonType = 0 | 1 | 2;

/**
 * 任务关联数据实体输出
 * @params recordData {undefined} 关联数据
 * @params updateTime {string} 数据更新时间
 * @params taskAssociatedType {TaskAssociatedTypeCommonType} 任务关联数据类型
 */
type TaskAssociatedDataCollectOutCommonType = {
    recordData?: undefined;
    updateTime?: string;
    taskAssociatedType?: TaskAssociatedTypeCommonType;
};

/**
 * 任务详情
 * @params id {string} 任务Id
 * @params name {string} 任务名
 * @params description {string} 任务详情
 * @params associateEventId {string} 任务关联事件
 * @params parentId {string} 父任务 Id
 * @params type {TaskTypeCommonType} 任务类型
 * @params state {TaskStateCommonType} 任务状态
 * @params group {GroupInfoCommonType} 组对象
 * @params groupMembers {ContactDetailInfoCommonType[]} 任务组成员
 * @params destination {TaskDestinationCommonType} 任务目的地
 * @params expectStartedTime {string} 预计开始时间
 * @params actualStartedTime {string} 实际开始时间
 * @params expectFinishedTime {string} 预计结束时间
 * @params actualFinishedTime {string} 实际结束时间
 * @params createdTime {string} 任务创建时间
 * @params order {number} 任务顺序
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params updateTime {string} 更新时间
 * @params latestProgressRecord {TaskAssociatedDataCollectOutCommonType} 最新任务进展
 * @params progressCount {number} 任务进展总数
 */
type TaskDetailOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
    associateEventId?: string;
    parentId?: string;
    type?: TaskTypeCommonType;
    state?: TaskStateCommonType;
    group?: GroupInfoCommonType;
    groupMembers?: ContactDetailInfoCommonType[];
    destination?: TaskDestinationCommonType;
    expectStartedTime?: string;
    actualStartedTime?: string;
    expectFinishedTime?: string;
    actualFinishedTime?: string;
    createdTime?: string;
    order?: number;
    platformId?: string;
    resourceId?: string;
    updateTime?: string;
    latestProgressRecord?: TaskAssociatedDataCollectOutCommonType;
    progressCount?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {TaskDetailOutCommonType[]} 记录
 */
type TaskDetailOutReqCommonType = {
    totalCount?: number;
    records?: TaskDetailOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {TaskEntityOutCommonType[]} 记录
 */
type TaskEntityOutReqCommonType = {
    totalCount?: number;
    records?: TaskEntityOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {TaskAssociatedDataCollectOutCommonType[]} 记录
 */
type TaskAssociatedDataCollectOutReqCommonType = {
    totalCount?: number;
    records?: TaskAssociatedDataCollectOutCommonType[];
};

/**
 * 资源关系类型查询(不带分页)
 * @params mainResources {ResourceInfoCommonType[]} 主体资源集合
 * @params dataHandleType {DataHandleTypeCommonType} 数据处理类型
 * @params type {string} 资源类型
 */
type ResourceRelationshipTypeQueryCommonType = {
    mainResources: ResourceInfoCommonType[];
    dataHandleType?: DataHandleTypeCommonType;
    type: string;
};

/**
 * 终端资源搜索
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params resourceRelationship {ResourceRelationshipTypeQueryCommonType} 资源关系
 * @params terminalIds {any[]} 终端ID
 * @params keyword {string} 关键词
 * @params terminalType {TerminalTypeCommonType} 终端类型
 * @params status {AssetStatusCommonType} 资产状态 1已连接，2未连接
 * @params networkID {string} 所属网络
 * @params relateTypeId {string} 关联类型ID
 * @params relateTypeIds {any[]} 关联类型ID集合查询
 * @params sourceId {string} 来源ID
 * @params groupId {string} 组ID
 * @params isContainMainResource {boolean} 返回结果是否包含主体资源
 * @params prefixAreaCodes {any[]} 行政区域码前缀集合
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 */
type TerminalResourceSearchInCommonType = {
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    resourceRelationship?: ResourceRelationshipTypeQueryCommonType;
    terminalIds?: any[];
    keyword?: string;
    terminalType?: TerminalTypeCommonType;
    status?: AssetStatusCommonType;
    networkID?: string;
    relateTypeId?: string;
    relateTypeIds?: any[];
    sourceId?: string;
    groupId?: string;
    isContainMainResource?: boolean;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
};

/**
 * 关联平台基础输出
 * @params id {string} ID
 * @params name {string} 名称
 */
type RelatePlatformBaseOutCommonType = {
    id?: string;
    name?: string;
};

/**
 * 终端组信息
 * @params id {string} ID
 * @params name {string} 名称
 */
type TerminalGroupInfoCommonType = {
    id?: string;
    name?: string;
};

/**
 * 终端来源
 * @params id {string} ID
 * @params name {string} 名称
 */
type TerminalSourceOutCommonType = {
    id?: string;
    name?: string;
};

/**
 * 终端详情
 * @params id {string} ID
 * @params name {string} 名称
 * @params ip {string} ip
 * @params port {string} 端口
 * @params number {string} 号码
 * @params description {string} 描述信息
 * @params account {string} 账号
 * @params password {string} 密码
 * @params resourceId {string} 资源ID
 * @params terminalType {TerminalTypeCommonType} 终端类型
 * @params areaCode {string} 行政区域码
 * @params areaName {string} 行政区域名称
 * @params protocolType {string} 协议
 * @params relatePlatform {RelatePlatformBaseOutCommonType} 关联平台
 * @params extension {undefined} 拓展
 * @params relateCameraId {string} 关联监控ID
 * @params contact {ContactCommonType} 联系人
 * @params status {AssetStatusCommonType} 资产状态1在线，2不在线
 * @params relateType {TypeConfigOutCommonType} 关联类型
 * @params terminalGroup {TerminalGroupInfoCommonType} 终端组信息
 * @params network {NetworkBaseOutCommonType} 所属网络
 * @params terminalLocation {LocationOutCommonType} 位置信息
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params source {TerminalSourceOutCommonType} 来源
 * @params maintenance {MaintenanceOutCommonType} 检修
 * @params mainResources {ResourceBaseOutCommonType[]} 主体资源
 */
type TerminalDetailsOutCommonType = {
    id?: string;
    name?: string;
    ip?: string;
    port?: string;
    number?: string;
    description?: string;
    account?: string;
    password?: string;
    resourceId?: string;
    terminalType?: TerminalTypeCommonType;
    areaCode?: string;
    areaName?: string;
    protocolType?: string;
    relatePlatform?: RelatePlatformBaseOutCommonType;
    extension?: undefined;
    relateCameraId?: string;
    contact?: ContactCommonType;
    status?: AssetStatusCommonType;
    relateType?: TypeConfigOutCommonType;
    terminalGroup?: TerminalGroupInfoCommonType;
    network?: NetworkBaseOutCommonType;
    terminalLocation?: LocationOutCommonType;
    assetMetrics?: AssetMetricsOutCommonType[];
    source?: TerminalSourceOutCommonType;
    maintenance?: MaintenanceOutCommonType;
    mainResources?: ResourceBaseOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {TerminalDetailsOutCommonType[]} 记录
 */
type TerminalDetailsOutReqCommonType = {
    totalCount?: number;
    records?: TerminalDetailsOutCommonType[];
};

/**
 * 监控终端详情
 * @params id {string} ID
 * @params name {string} 名称
 * @params ip {string} ip
 * @params port {string} 端口
 * @params number {string} 号码
 * @params description {string} 描述信息
 * @params account {string} 账号
 * @params password {string} 密码
 * @params resourceId {string} 资源ID
 * @params terminalType {TerminalTypeCommonType} 终端类型
 * @params areaCode {string} 行政区域码
 * @params areaName {string} 行政区域名称
 * @params protocolType {string} 协议
 * @params relatePlatform {RelatePlatformBaseOutCommonType} 关联平台
 * @params extension {undefined} 拓展
 * @params relateCameraId {string} 关联监控ID
 * @params contact {ContactCommonType} 联系人
 * @params status {AssetStatusCommonType} 资产状态1在线，2不在线
 * @params relateType {TypeConfigOutCommonType} 关联类型
 * @params terminalGroup {TerminalGroupInfoCommonType} 终端组信息
 * @params network {NetworkBaseOutCommonType} 所属网络
 * @params terminalLocation {LocationOutCommonType} 位置信息
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params source {TerminalSourceOutCommonType} 来源
 * @params maintenance {MaintenanceOutCommonType} 检修
 * @params mainResources {ResourceBaseOutCommonType[]} 主体资源
 * @params relateCameraCount {number} 关联监控数量
 */
type CameraTerminalDetailsOutCommonType = {
    id?: string;
    name?: string;
    ip?: string;
    port?: string;
    number?: string;
    description?: string;
    account?: string;
    password?: string;
    resourceId?: string;
    terminalType?: TerminalTypeCommonType;
    areaCode?: string;
    areaName?: string;
    protocolType?: string;
    relatePlatform?: RelatePlatformBaseOutCommonType;
    extension?: undefined;
    relateCameraId?: string;
    contact?: ContactCommonType;
    status?: AssetStatusCommonType;
    relateType?: TypeConfigOutCommonType;
    terminalGroup?: TerminalGroupInfoCommonType;
    network?: NetworkBaseOutCommonType;
    terminalLocation?: LocationOutCommonType;
    assetMetrics?: AssetMetricsOutCommonType[];
    source?: TerminalSourceOutCommonType;
    maintenance?: MaintenanceOutCommonType;
    mainResources?: ResourceBaseOutCommonType[];
    relateCameraCount?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {CameraTerminalDetailsOutCommonType[]} 记录
 */
type CameraTerminalDetailsOutReqCommonType = {
    totalCount?: number;
    records?: CameraTerminalDetailsOutCommonType[];
};

/**
 * 告警基础信息
 * @params id {number} Id
 * @params name {string} 告警名称
 * @params typeId {string} 告警类型 Id
 * @params typeName {string} 告警类型名称
 * @params typeIdPath {string} 告警类型IdPath
 * @params typeNamePath {string} 告警类型名字Path
 * @params level {number} 告警级别
 * @params sourceTypeId {string} 告警源类型 Id
 * @params sourceTypeName {string} 告警源类型名称
 * @params status {AlertStatusCommonType} 告警状态
 * @params startTime {string} 告警产生时间
 * @params endTime {string} 告警消除时间
 * @params assetId {string} 资产 Id
 */
type AlertRecordBaseOutCommonType = {
    id?: number;
    name?: string;
    typeId?: string;
    typeName?: string;
    typeIdPath?: string;
    typeNamePath?: string;
    level?: number;
    sourceTypeId?: string;
    sourceTypeName?: string;
    status?: AlertStatusCommonType;
    startTime?: string;
    endTime?: string;
    assetId?: string;
};

/**
 * 拓扑节点
 * @params id {string} id
 * @params nodeId {string} id【IsAssetResource=true：资产ID】
 * @params isAssetResource {boolean} 是否资产资源
 * @params name {string} 名称
 * @params typeName {string} 类型名
 * @params color {string} 颜色
 * @params height {number} 高
 * @params width {number} 宽
 * @params coordinateX {number} X坐标
 * @params coordinateY {number} Y坐标
 * @params status {AssetStatusCommonType} 资产状态
 * @params alertRecords {AlertRecordBaseOutCommonType[]} 告警记录
 */
type TopologyNodeOutCommonType = {
    id?: string;
    nodeId?: string;
    isAssetResource?: boolean;
    name?: string;
    typeName?: string;
    color?: string;
    height?: number;
    width?: number;
    coordinateX?: number;
    coordinateY?: number;
    status?: AssetStatusCommonType;
    alertRecords?: AlertRecordBaseOutCommonType[];
};

/**
 * 拓扑节点关系
 * @params startNodeId {string} 开始节点
 * @params endNodeId {string} 结束节点
 */
type TopologyRelationshipCommonType = {
    startNodeId?: string;
    endNodeId?: string;
};

/**
 * 拓扑信息
 * @params id {string} id
 * @params height {number} 高
 * @params width {number} 宽
 * @params topologyNodes {TopologyNodeOutCommonType[]} 拓扑节点
 * @params topologyRelationships {TopologyRelationshipCommonType[]} 节点关系
 */
type TopologyOutCommonType = {
    id?: string;
    height?: number;
    width?: number;
    topologyNodes?: TopologyNodeOutCommonType[];
    topologyRelationships?: TopologyRelationshipCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {TopologyOutCommonType[]} 记录
 */
type TopologyOutReqCommonType = {
    totalCount?: number;
    records?: TopologyOutCommonType[];
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
 * 获取告警的信息——请求参数类型定义
 * @headers X-version {string}
 * @params keyword {string} 模糊匹配关键字
 * @params timeQueryType {AlarmTimeQueryTypeCommonType} 时间查询类型, 产生时间=0，确认时间=1，删除时间=2
 * @params pageIndex {number} 页码,从1开始
 * @params pageSize {number} 页容量, [1,1024]
 * @params beginTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params districtIds {any[]} 前缀区域码列表
 * @params prefixDistrictIds {any[]} 前缀区域码，传入完整的区域码也会处理为前缀区域码
 * @params queryType {AlarmQueryTypeCommonType} All = 0,Confirmed = 1,NotConfirm = 2
 * @params types {any[]} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测
 * @params alarmSourceIds {any[]} 告警源Id列表
 * @params alarmLevels {any[]} 告警级别
 * @params organizationIds {any[]} 所属组织架构ID列表
 */
export type AggsGetAlarmInfoReqType = {
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
};

/**
 * 获取告警的信息——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AlarmEntityOutCommonType[]} 记录
 */
export type AggsGetAlarmInfoResType = {
    totalCount: number;
    records: AlarmEntityOutCommonType[];
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
export type AggsGetAlarmsByDistrictIdsReqType = {
    beginTime?: string;
    endTime?: string;
    districtIds?: any[];
    prefixDistrictIds?: any[];
    queryType?: number;
    'X-version'?: string;
};

/**
 * 根据行政区域id列表查询告警数据——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AlarmEntityOutCommonType[]} 记录
 */
export type AggsGetAlarmsByDistrictIdsResType = {
    totalCount: number;
    records: AlarmEntityOutCommonType[];
};

/**
 * 高级搜索告警记录——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params keyword {string} 关键字
 * @params level {number} 告警等级，1-一般 | 2-较大 | 4-重大 | 8-特大
 * @params status {any[]} 告警状态，0-告警中|1-已解决|2-手动解决
 * @params platformId {string} 平台 Id
 * @params ignoreOtherPlatform {boolean} 查询结果是否忽略其他平台数据。
 * @params areaCode {string} 行政区域码
 * @params includeSubTypes {boolean} 是否包含子类型记录。true 时包含子告警类型记录，否则只查当前告警类型记录
 * @params startTime {string} 开始时间（基于告警产生时间查询）
 * @params endTime {string} 结束时间（基于告警产生时间查询）
 * @params typeIds {any[]} 类型 Id
 * @params sourceTypeIds {any[]} 源类型 Id
 * @params assetIds {any[]} 资产 Id
 * @params upLeft {CoordinateCommonType} 左上角坐标
 * @params bottomRight {CoordinateCommonType} 右下角坐标
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 * @params sortType {SortTypeForAlertCommonType} 排序类型。0：默认排序，1按照未处理、 已处理排序，相同状态按照时间降序排序
 */
export type SearchAlertRecordReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    keyword?: string;
    level?: number;
    status?: any[];
    platformId?: string;
    ignoreOtherPlatform?: boolean;
    areaCode?: string;
    includeSubTypes?: boolean;
    startTime?: string;
    endTime?: string;
    typeIds?: any[];
    sourceTypeIds?: any[];
    assetIds?: any[];
    upLeft?: CoordinateCommonType;
    bottomRight?: CoordinateCommonType;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
    sortType?: SortTypeForAlertCommonType;
};

/**
 * 高级搜索告警记录——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AlertRecordDetailOutCommonType[]} 记录
 */
export type SearchAlertRecordResType = {
    totalCount: number;
    records: AlertRecordDetailOutCommonType[];
};

/**
 * 告警记录详情接口——请求参数类型定义
 * @params id {number} id （必填）
 * @headers X-version {string}
 */
export type AggsGetAlertRecordByIdReqType = {
    id: number;
    'X-version'?: string;
};

/**
 * 告警记录详情接口——响应参数类型定义
 * @params id {number} Id
 * @params name {string} 告警名称
 * @params typeId {string} 告警类型 Id
 * @params typeName {string} 告警类型名称
 * @params typeIdPath {string} 告警类型IdPath
 * @params typeNamePath {string} 告警类型名字Path
 * @params level {number} 告警级别
 * @params sourceTypeId {string} 告警源类型 Id
 * @params sourceTypeName {string} 告警源类型名称
 * @params status {AlertStatusCommonType} 告警状态
 * @params startTime {string} 告警产生时间
 * @params endTime {string} 告警消除时间
 * @params assetId {string} 资产 Id
 * @params description {string} 告警描述
 * @params resolverId {string} 告警消除人 Id
 * @params resolverName {string} 告警消除人名称
 * @params resolveMessage {string} 处置信息
 * @params assetName {string} 资产名
 * @params createTime {string} 服务创建记录时间
 * @params updateTime {string} 服务更新记录时间
 * @params resourceId {string} 资源 Id
 * @params platformId {string} 平台 Id
 * @params platformName {string} 平台名称
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params areaCode {string} 行政区域码
 * @params source {AlertSourceCommonType} 告警源
 * @params extension {undefined} 扩展信息
 * @params contact {ContactCommonType} 联系人
 * @params isConvertEvent {boolean} 是否已转成事件
 */
export type AggsGetAlertRecordByIdResType = {
    id: number;
    name: string;
    typeId: string;
    typeName: string;
    typeIdPath: string;
    typeNamePath: string;
    level: number;
    sourceTypeId: string;
    sourceTypeName: string;
    status: AlertStatusCommonType;
    startTime: string;
    endTime: string;
    assetId: string;
    description: string;
    resolverId: string;
    resolverName: string;
    resolveMessage: string;
    assetName: string;
    createTime: string;
    updateTime: string;
    resourceId: string;
    platformId: string;
    platformName: string;
    longitude: number;
    latitude: number;
    areaCode: string;
    source: AlertSourceCommonType;
    extension: undefined;
    contact: ContactCommonType;
    isConvertEvent: boolean;
};

/**
 * 告警转事件——请求参数类型定义
 * @headers X-version {string}
 * @params alertId {number} 告警ID（apts告警Id） （必填）
 * @params eventTypeId {string} 事件类型Id （必填）
 * @params eventName {string} 告警名称
 * @params eventDescription {string} 事件描述
 * @params eventPriority {EventPriorityCommonType} 事件优先级,默认III级(较大)
 */
export type AlarmToEventReqType = {
    'X-version'?: string;
    alertId: number;
    eventTypeId: string;
    eventName?: string;
    eventDescription?: string;
    eventPriority?: EventPriorityCommonType;
};

/**
 * 告警转事件——响应参数类型定义
 * @params id {string} Id
 * @params name {string} 事件名称
 * @params priority {number} 事件优先级
 * @params state {number} 事件状态
 * @params longitude {number} 事件发生地经度
 * @params latitude {number} 事件发生地纬度
 * @params eventType {EventTypeCommonType} 事件类型
 * @params createdTime {string} 事件创建时间
 * @params areaCode {string} 行政区域码
 * @params updateTime {string} 更新时间
 * @params description {string} 事件描述
 * @params group {GroupInfoCommonType} 事件组
 * @params sceneGroup {GroupInfoCommonType} 现场指挥组
 * @params happenedTime {string} 事件发生时间
 * @params finishedTime {string} 时间完成时间
 * @params address {string} 事件发生地址
 * @params submitUnit {EventUnitCommonType} 报送单位
 * @params unit {EventUnitCommonType} 事件归属单位
 * @params source {EventSourceCommonType} 事件源
 * @params extension {string} 事件扩展字段，用于存项目额外信息
 * @params typeID {string} 事件类型 Id
 * @params expectStartedTime {string} 事件期望发生时间
 * @params expectFinishedTime {string} 事件期望结束时间
 * @params isMock {boolean} 是否模拟事件
 * @params totalTaskCount {number} 任务总数（父任务）
 * @params noStatedTaskCount {number} 未开始的任务总数（父任务）
 * @params finishedTaskCount {number} 已结束的任务总数（父任务）
 * @params isDeleted {boolean} 是否已被删除
 * @params responseLevel {EventResponseLevelCommonType} 事件的响应等级
 * @params associatePreplanId {string} 事件绑定的预案id
 * @params resourceId {string} 资源Id
 */
export type AlarmToEventResType = {
    id: string;
    name: string;
    priority: number;
    state: number;
    longitude: number;
    latitude: number;
    eventType: EventTypeCommonType;
    createdTime: string;
    areaCode: string;
    updateTime: string;
    description: string;
    group: GroupInfoCommonType;
    sceneGroup: GroupInfoCommonType;
    happenedTime: string;
    finishedTime: string;
    address: string;
    submitUnit: EventUnitCommonType;
    unit: EventUnitCommonType;
    source: EventSourceCommonType;
    extension: string;
    typeID: string;
    expectStartedTime: string;
    expectFinishedTime: string;
    isMock: boolean;
    totalTaskCount: number;
    noStatedTaskCount: number;
    finishedTaskCount: number;
    isDeleted: boolean;
    responseLevel: EventResponseLevelCommonType;
    associatePreplanId: string;
    resourceId: string;
};

/**
 * 获取资产详情——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} platformId
 * @headers X-version {string}
 */
export type GetAssetsByIdReqType = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * 获取资产详情——响应参数类型定义
 * @params id {string} 标识
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params alertRecords {AlertRecordOutCommonType[]} 告警记录
 * @params areaCode {string} 行政区域码
 * @params areaName {string} 行政区域名称
 * @params alertLevel {number} 告警等级
 * @params alertTime {string} 告警时间
 * @params resourceId {string} 来源Id
 */
export type GetAssetsByIdResType = {
    id: string;
    assetType: AssetTypeCommonType;
    assetMetrics: AssetMetricsOutCommonType[];
    alertRecords: AlertRecordOutCommonType[];
    areaCode: string;
    areaName: string;
    alertLevel: number;
    alertTime: string;
    resourceId: string;
};

/**
 * 搜索资产——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params assetIds {any[]} 资产ID
 * @params keyword {string} 关键词
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params secondaryAssetType {number} 二级资产类型（依赖一级资产类型）
 * @params relateTypeId {string} 关联类型ID
 * @params relateTypeIds {any[]} 关联类型ID集合查询
 * @params center {CoordinateCommonType} 圆心【与Radius配合使用】
 * @params radius {number} 半径（单位米）
 * @params isAlertAsset {boolean} 是否只查告警资产
 * @params alertSortType {AlertSortTypeCommonType} 告警排序类型
 */
export type AggsSearchAssetsReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: any[];
    keyword?: string;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
    assetType?: AssetTypeCommonType;
    secondaryAssetType?: number;
    relateTypeId?: string;
    relateTypeIds?: any[];
    center?: CoordinateCommonType;
    radius?: number;
    isAlertAsset?: boolean;
    alertSortType?: AlertSortTypeCommonType;
};

/**
 * 搜索资产——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {IAssetBaseOutCommonType[]} 记录
 */
export type AggsSearchAssetsResType = {
    totalCount: number;
    records: IAssetBaseOutCommonType[];
};

/**
 * 周边资产——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params assetIds {any[]} 资产ID
 * @params keyword {string} 关键词
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params secondaryAssetType {number} 二级资产类型（依赖一级资产类型）
 * @params relateTypeId {string} 关联类型ID
 * @params isSearchNullRelateType {boolean} 是否查询空关联类型
 * @params relateTypeIds {any[]} 关联类型ID集合查询
 * @params assetTypeIds {any[]} 批量资产类型ID集合
 * @params center {CoordinateCommonType} 圆心 （必填）
 * @params radius {number} 半径（单位米） （必填）
 * @params sortRule {SortRuleCommonType} 排序类型
 */
export type GetNearAssetsReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: any[];
    keyword?: string;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
    assetType?: AssetTypeCommonType;
    secondaryAssetType?: number;
    relateTypeId?: string;
    isSearchNullRelateType?: boolean;
    relateTypeIds?: any[];
    assetTypeIds?: any[];
    center: CoordinateCommonType;
    radius: number;
    sortRule?: SortRuleCommonType;
};

/**
 * 周边资产——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AssetWithDistanceCommonType[]} 记录
 */
export type GetNearAssetsResType = {
    totalCount: number;
    records: AssetWithDistanceCommonType[];
};

/**
 * 周边告警资产——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params assetIds {any[]} 资产ID
 * @params keyword {string} 关键词
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params secondaryAssetType {number} 二级资产类型（依赖一级资产类型）
 * @params relateTypeId {string} 关联类型ID
 * @params isSearchNullRelateType {boolean} 是否查询空关联类型
 * @params relateTypeIds {any[]} 关联类型ID集合查询
 * @params assetTypeIds {any[]} 批量资产类型ID集合
 * @params alert {AlertFilterCommonType} 告警过滤
 * @params assetSortRule {AssetSortRuleCommonType} 排序类型
 * @params center {CoordinateCommonType} 圆心 （必填）
 * @params radius {number} 半径（单位米） （必填）
 */
export type GetNearAlertsReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: any[];
    keyword?: string;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
    assetType?: AssetTypeCommonType;
    secondaryAssetType?: number;
    relateTypeId?: string;
    isSearchNullRelateType?: boolean;
    relateTypeIds?: any[];
    assetTypeIds?: any[];
    alert?: AlertFilterCommonType;
    assetSortRule?: AssetSortRuleCommonType;
    center: CoordinateCommonType;
    radius: number;
};

/**
 * 周边告警资产——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AssetDetailCommonType[]} 记录
 */
export type GetNearAlertsResType = {
    totalCount: number;
    records: AssetDetailCommonType[];
};

/**
 * 通用搜索——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params assetIds {any[]} 资产ID
 * @params keyword {string} 关键词
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params secondaryAssetType {number} 二级资产类型（依赖一级资产类型）
 * @params relateTypeId {string} 关联类型ID
 * @params isSearchNullRelateType {boolean} 是否查询空关联类型
 * @params relateTypeIds {any[]} 关联类型ID集合查询
 * @params assetTypeIds {any[]} 批量资产类型ID集合
 */
export type AggsCommonAssetSearchReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: any[];
    keyword?: string;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
    assetType?: AssetTypeCommonType;
    secondaryAssetType?: number;
    relateTypeId?: string;
    isSearchNullRelateType?: boolean;
    relateTypeIds?: any[];
    assetTypeIds?: any[];
};

/**
 * 通用搜索——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AssetWithCameraCommonType[]} 记录
 */
export type AggsCommonAssetSearchResType = {
    totalCount: number;
    records: AssetWithCameraCommonType[];
};

/**
 * 获取事件关联的通话数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetCommunicationByEventIdReqType = {
    eventId: string;
    'X-version'?: string;
};

/**
 * 获取事件关联的通话数据——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {CommunicationDataOutCommonType[]} 记录
 */
export type GetCommunicationByEventIdResType = {
    totalCount: number;
    records: CommunicationDataOutCommonType[];
};

/**
 * 根据Id获取通话项——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetCommunicationByIdReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 根据Id获取通话项——响应参数类型定义
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params communicationId {string} 通话信息Id
 * @params callerName {string} 主叫名称
 * @params callerNumber {string} 主叫号码
 * @params calledName {string} 被叫名称
 * @params calledNumber {string} 被叫号码
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params hasAnswered {boolean} 是否接听
 * @params taskInfos {TaskInfoCommonType[]} 任务基本信息
 * @params type {CallRecordTypeCommonType} 通话记录类型 1-普通通话 2-队列通话 4-会议通话 8-广播通话 16-视频会议通话 32-录音通知通话
 * @params recordId {string} 录音记录 Id
 * @params fileRecord {FileRecordCommonType} 录音通知文件记录
 * @params logId {string} 日志记录id
 * @params duration {number} 时长（单位：秒）
 */
export type GetCommunicationByIdResType = {
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    communicationId: string;
    callerName: string;
    callerNumber: string;
    calledName: string;
    calledNumber: string;
    startTime: string;
    endTime: string;
    hasAnswered: boolean;
    taskInfos: TaskInfoCommonType[];
    type: CallRecordTypeCommonType;
    recordId: string;
    fileRecord: FileRecordCommonType;
    logId: string;
    duration: number;
};

/**
 * 获取事件关联的文件数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetAggsFilesByEventIdReqType = {
    eventId: string;
    'X-version'?: string;
};

/**
 * 获取事件关联的文件数据——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {FileDataOutCommonType[]} 记录
 */
export type GetAggsFilesByEventIdResType = {
    totalCount: number;
    records: FileDataOutCommonType[];
};

/**
 * 根据Id获取文件项——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetAggsFilesByIdReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 根据Id获取文件项——响应参数类型定义
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params fileRecordID {string} 文件记录ID
 * @params fileRecord {FileEntityOutCommonType} 文件记录
 */
export type GetAggsFilesByIdResType = {
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    fileRecordID: string;
    fileRecord: FileEntityOutCommonType;
};

/**
 * 获取事件关联的拍传数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetMultimediaTransfersByEventIdReqType = {
    eventId: string;
    'X-version'?: string;
};

/**
 * 获取事件关联的拍传数据——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {MultimediaTransferDataOutCommonType[]} 记录
 */
export type GetMultimediaTransfersByEventIdResType = {
    totalCount: number;
    records: MultimediaTransferDataOutCommonType[];
};

/**
 * 根据Id获取拍传项——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetAggsMultimediaTransfersByIdReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 根据Id获取拍传项——响应参数类型定义
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params recordId {string} 拍传记录Id
 * @params multimediaTransferDetail {MultimediaTransferDetailOutCommonType} 拍传详情
 * @params taskInfos {TaskInfoCommonType[]} 任务基本信息
 */
export type GetAggsMultimediaTransfersByIdResType = {
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    recordId: string;
    multimediaTransferDetail: MultimediaTransferDetailOutCommonType;
    taskInfos: TaskInfoCommonType[];
};

/**
 * 获取事件关联的图片数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetEventPicturesReqType = {
    eventId: string;
    'X-version'?: string;
};

/**
 * 获取事件关联的图片数据——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PictureDataOutCommonType[]} 记录
 */
export type GetEventPicturesResType = {
    totalCount: number;
    records: PictureDataOutCommonType[];
};

/**
 * 根据Id获取图片项——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetEventPictureByIdReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 根据Id获取图片项——响应参数类型定义
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params fileRecordId {string} 图片记录Id
 * @params fileRecord {FileEntityOutCommonType} 图片记录
 * @params taskInfos {TaskInfoCommonType[]} 任务基本信息
 * @params associatedUserID {string} 关联操作人ID
 * @params associatedUserName {string} 关联操作人名称
 */
export type GetEventPictureByIdResType = {
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    fileRecordId: string;
    fileRecord: FileEntityOutCommonType;
    taskInfos: TaskInfoCommonType[];
    associatedUserID: string;
    associatedUserName: string;
};

/**
 * 获取事件关联的视频数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetEventVideosReqType = {
    eventId: string;
    'X-version'?: string;
};

/**
 * 获取事件关联的视频数据——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {VideoDataOutCommonType[]} 记录
 */
export type GetEventVideosResType = {
    totalCount: number;
    records: VideoDataOutCommonType[];
};

/**
 * 根据Id获取视频项——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetEventVideoByIdReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 根据Id获取视频项——响应参数类型定义
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params fileRecordId {string} 视频记录Id
 * @params fileRecord {FileEntityOutCommonType} 视频记录
 * @params taskInfos {TaskInfoCommonType[]} 任务基本信息
 */
export type GetEventVideoByIdResType = {
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    fileRecordId: string;
    fileRecord: FileEntityOutCommonType;
    taskInfos: TaskInfoCommonType[];
};

/**
 * 获取全部的分组列表。——请求参数类型定义
 * @params GroupType {number} -1：全部(默认)；0：监控组 1：预案组 2：自定义组
 * @headers X-version {string}
 */
export type GetAllCameraGroupsReqType = {
    GroupType?: number;
    'X-version'?: string;
};

/**
 * 获取全部的分组列表。——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {CameraGroupCommonType[]} 记录
 */
export type GetAllCameraGroupsResType = {
    totalCount: number;
    records: CameraGroupCommonType[];
};

/**
 * 搜索监控——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params labelIds {any[]} 标签
 * @params online {boolean} 是否在线
 * @params keyword {string} 关键词
 * @params resourceRelationship {ResourceRelationshipQueryCommonType} 资源关系
 * @params isContainMainResource {boolean} 返回结果是否包含主体资源
 */
export type AggsSearchCamerasReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    prefixAreaCodes?: any[];
    labelIds?: any[];
    online?: boolean;
    keyword?: string;
    resourceRelationship?: ResourceRelationshipQueryCommonType;
    isContainMainResource?: boolean;
};

/**
 * 搜索监控——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AreaCodeCameraOutCommonType[]} 记录
 */
export type AggsSearchCamerasResType = {
    totalCount: number;
    records: AreaCodeCameraOutCommonType[];
};

/**
 * 周边监控——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params center {CoordinateCommonType} 圆心 （必填）
 * @params radius {number} 半径（单位米） （必填）
 * @params labelIds {any[]} 监控标签集合
 * @params sortRule {SortRuleCommonType} 是否按距离升序排序，默认升序
 */
export type GetNearCamerasReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    center: CoordinateCommonType;
    radius: number;
    labelIds?: any[];
    sortRule?: SortRuleCommonType;
};

/**
 * 周边监控——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {CameraWithDistanceCommonType[]} 记录
 */
export type GetNearCamerasResType = {
    totalCount: number;
    records: CameraWithDistanceCommonType[];
};

/**
 * 添加监控终端——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 名称 （必填）
 * @params latitude {number} 纬度
 * @params longitude {number} 经度
 * @params parentId {string} 监控组 Id
 * @params aliasName {string} 监控别名
 * @params quality {QualityCommonType} 监控质量
 * @params isManual {boolean} True手动检测/ false智能检测，可为null，为null表示不修改
 * @params labelIds {any[]} 监控标签id
 * @params areaCode {string} 行政区域码
 * @params type {CameraTerminalTypeCommonType} 终端类型. 0:国标 1:视频拉流终端 2:视频推流终端 3:视频文件终端
 * @params extension {undefined} 扩展字段, 根据不同的终端类型需要传对应的字段 （必填）
 */
export type AddCameraTerminalReqType = {
    'X-version'?: string;
    name: string;
    latitude?: number;
    longitude?: number;
    parentId?: string;
    aliasName?: string;
    quality?: QualityCommonType;
    isManual?: boolean;
    labelIds?: any[];
    areaCode?: string;
    type?: CameraTerminalTypeCommonType;
    extension: undefined;
};

/**
 * 添加监控终端——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 名称
 * @params status {EnumTypes_CameraStatusCommonType} 监控状态1-离线2-在线
 * @params quality {EnumTypes_QualityCommonType} 监控质量0-未检测1-差2-优3-良4-故障
 * @params areaCode {string} 行政区域码
 * @params thumbnailID {string} 图片id
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params playUrl {PlayUrlOutCommonType} 播放地址
 * @params videoEncoder {VideoEncoderCommonType} 视频编码类型:0为H264，1为H265
 * @params resolution {ResolutionCommonType} 分辨率
 * @params audio {boolean} 是否有音频
 * @params result {QualityCommonType} 质量
 * @params resultDetail {VideoQualityDetailCommonType} 质量详情
 * @params namePath {string} 监控名字路径
 * @params idPath {string} 监控ID路径
 * @params order {number} 排序字段
 * @params detectionCount {number} 巡检的次数
 * @params faultDetail {number} 质量故障的错误码：http://git.rdapp.com/product/knowledge-planet/issues/818
 * @params isManual {boolean} 是否是手动设置
 * @params labels {LabelOutCommonType[]} 标签
 * @params audioEncodingFormat {string} 音频编码属性
 * @params isSupportPTZ {boolean} 是否可以进行云台控制
 */
export type AddCameraTerminalResType = {
    id: string;
    name: string;
    status: EnumTypes_CameraStatusCommonType;
    quality: EnumTypes_QualityCommonType;
    areaCode: string;
    thumbnailID: string;
    longitude: number;
    latitude: number;
    playUrl: PlayUrlOutCommonType;
    videoEncoder: VideoEncoderCommonType;
    resolution: ResolutionCommonType;
    audio: boolean;
    result: QualityCommonType;
    resultDetail: VideoQualityDetailCommonType;
    namePath: string;
    idPath: string;
    order: number;
    detectionCount: number;
    faultDetail: number;
    isManual: boolean;
    labels: LabelOutCommonType[];
    audioEncodingFormat: string;
    isSupportPTZ: boolean;
};

/**
 * 修改监控终端——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 名称 （必填）
 * @params latitude {number} 纬度
 * @params longitude {number} 经度
 * @params parentId {string} 监控组 Id
 * @params aliasName {string} 监控别名
 * @params quality {QualityCommonType} 监控质量
 * @params isManual {boolean} True手动检测/ false智能检测，可为null，为null表示不修改
 * @params labelIds {any[]} 监控标签id
 * @params areaCode {string} 行政区域码
 * @params type {CameraTerminalTypeCommonType} 终端类型. 0:国标 1:视频拉流终端 2:视频推流终端 3:视频文件终端
 * @params extension {undefined} 扩展字段, 根据不同的终端类型需要传对应的字段 （必填）
 */
export type EditCameraTerminalReqType = {
    id: string;
    'X-version'?: string;
    name: string;
    latitude?: number;
    longitude?: number;
    parentId?: string;
    aliasName?: string;
    quality?: QualityCommonType;
    isManual?: boolean;
    labelIds?: any[];
    areaCode?: string;
    type?: CameraTerminalTypeCommonType;
    extension: undefined;
};

/**
 * 获取巡检任务列表——请求参数类型定义
 * @params Keyword {string} 关键字搜索
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type AggsGetDetectionTasksReqType = {
    Keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取巡检任务列表——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {DetectionTaskOutCommonType[]} 记录
 */
export type AggsGetDetectionTasksResType = {
    totalCount: number;
    records: DetectionTaskOutCommonType[];
};

/**
 * 获取指定巡检任务详情——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetDetectionTaskByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取指定巡检任务详情——响应参数类型定义
 * @params jobId {string} QTS 的任务 Id
 * @params jobName {string} QTS 的任务名
 * @params jobGroup {string} QTS 的任务组
 * @params jobMode {JobModeCommonType} 定时任务的模式（1-定时|2-手动）
 * @params jobBeginTime {string} QTS 定时任务开始时间
 * @params jobEndTime {string} QTS 定时任务结束时间
 * @params nextExecuteTime {string} 下次执行时间
 * @params jobStatus {JobStatusCommonType} Qts的状态(0-正常|1-已停止|2-完成|3-错误|4-已有任务执行中|5-触发器不存在)
 * @params jobCron {string} QTS 定时任务的Cron表达式
 * @params detectCameraGroupId {string} 巡检的监控组 Id
 * @params detectCameraGroupName {string} 巡检的监控组名称
 * @params isPicture {boolean} 巡检任务是否截图
 * @params isRecord {boolean} 巡检任务是否录像
 * @params taskId {string} VFS 巡检任务 Id
 * @params taskBeginTime {string} VFS 巡检任务开始时间
 * @params taskExecutedCount {number} 该定时任务已执行次数
 * @params cameraDetectedCount {number} 巡检任务已巡检的监控数
 * @params remainingDuration {string} 剩余时长
 * @params taskStatus {DetectionTaskStateCommonType} 巡检任务状态(0-巡检中|1-巡检结束|2-巡检取消|3-巡检暂停|4-未巡检)
 * @params cameraAmount {number} 监控总数
 * @params excellentCameraAmount {number} 质量优的监控总数
 * @params goodCameraAmount {number} 质量良的监控总数
 * @params badCameraAmount {number} 质量差的监控总数
 * @params faultCameraAmount {number} 故障监控总数
 * @params isSendNotifications {boolean} 是否发送巡检通知
 * @params detectionType {DetectionTypeCommonType} 巡检类型 0 - 监控组， 1 - 标签
 * @params isSendEmail {boolean} 是否发送邮件
 * @params owners {OwnerCommonType[]} 通知人
 * @params progress {number} 进度
 */
export type GetDetectionTaskByIdResType = {
    jobId: string;
    jobName: string;
    jobGroup: string;
    jobMode: JobModeCommonType;
    jobBeginTime: string;
    jobEndTime: string;
    nextExecuteTime: string;
    jobStatus: JobStatusCommonType;
    jobCron: string;
    detectCameraGroupId: string;
    detectCameraGroupName: string;
    isPicture: boolean;
    isRecord: boolean;
    taskId: string;
    taskBeginTime: string;
    taskExecutedCount: number;
    cameraDetectedCount: number;
    remainingDuration: string;
    taskStatus: DetectionTaskStateCommonType;
    cameraAmount: number;
    excellentCameraAmount: number;
    goodCameraAmount: number;
    badCameraAmount: number;
    faultCameraAmount: number;
    isSendNotifications: boolean;
    detectionType: DetectionTypeCommonType;
    isSendEmail: boolean;
    owners: OwnerCommonType[];
    progress: number;
};

/**
 * 指定人是否具备对应的行政区域权限——请求参数类型定义
 * @params userId {string} 指定人用户id （必填）
 * @headers X-version {string}
 * @params areaCodes {any[]} 行政区域码
 */
export type JudgeAreaCodePermissionReqType = {
    userId: string;
    'X-version'?: string;
    areaCodes?: any[];
};

/**
 * 指定人是否具备对应的行政区域权限——响应参数类型定义
 * @params hasPermission {boolean} 是否具备数据权限
 * @params areaCode {string} 行政区域码
 */
export type JudgeAreaCodePermissionResType = {
    hasPermission: boolean;
    areaCode: string;
};

/**
 * 通过经纬度获取行政区域列表集合（国家、省、市、县）——请求参数类型定义
 * @params Longitude {number} 经度
 * @params Latitude {number} 纬度
 * @headers X-version {string}
 */
export type GetDistrictByCoordinateReqType = {
    Longitude?: number;
    Latitude?: number;
    'X-version'?: string;
};

/**
 * 通过经纬度获取行政区域列表集合（国家、省、市、县）——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {DistrictOutCommonType[]} 记录
 */
export type GetDistrictByCoordinateResType = {
    totalCount: number;
    records: DistrictOutCommonType[];
};

/**
 * 获取符合查询条件的事件实体——请求参数类型定义
 * @params status {any[]} 事件状态
 * @params up_left.Longitude {number} 经度
 * @params up_left.Latitude {number} 纬度
 * @params bottom_right.Longitude {number} 经度
 * @params bottom_right.Latitude {number} 纬度
 * @params is_sort {boolean} 是否排序
 * @params keyword {string} 模糊匹配关键字
 * @params eventTypes {string} 事件类型，使用英文","隔开
 * @params priorities {string} 事件优先级，使用英文","隔开
 * @params areaCodes {string} 行政区域码，使用英文","隔开
 * @params prefixAreaCodes {string} 行政区域码前缀查询，使用英文","隔开，传入完整的行政区域码也会分割处理为区域码前缀
 * @params groupIds {any[]} 事件组
 * @params sourceId {string} 事件源Id
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetAggsEventsReqType = {
    status?: any[];
    up_left?: UpLeftCommonType;
    bottom_right?: BottomRightCommonType;
    is_sort?: boolean;
    keyword?: string;
    eventTypes?: string;
    priorities?: string;
    areaCodes?: string;
    prefixAreaCodes?: string;
    groupIds?: any[];
    sourceId?: string;
    startTime?: string;
    endTime?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取符合查询条件的事件实体——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {EventEntityOutCommonType[]} 记录
 */
export type GetAggsEventsResType = {
    totalCount: number;
    records: EventEntityOutCommonType[];
};

/**
 * 支持关系资源的事件搜索——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params status {any[]} 事件状态
 * @params upLeft {CoordinateCommonType} 左上经纬度
 * @params bottomRight {CoordinateCommonType} 右下经纬度
 * @params isSorted {boolean} 是否排序
 * @params isAudited {boolean} 是否已审核
 * @params resourceId {string} 资源Id
 * @params keyword {string} 模糊匹配关键字
 * @params groupIds {any[]} 事件组
 * @params sourceId {string} 事件源Id
 * @params eventTypes {any[]} 事件类型ID集合
 * @params priorities {any[]} 事件优先级集合
 * @params areaCodes {any[]} 行政区域码集合
 * @params prefixAreaCodes {any[]} 行政区域码前缀集合
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params sortType {EventSortTypeCommonType} 排序类型：0默认，IsSorted字段生效，1：处置中、未开始、已结束排序再创建时间倒序，2按发生时间降序
 * @params resourceRelationship {ResourceRelationshipQueryCommonType} 资源关系
 */
export type SearchEventsReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    status?: any[];
    upLeft?: CoordinateCommonType;
    bottomRight?: CoordinateCommonType;
    isSorted?: boolean;
    isAudited?: boolean;
    resourceId?: string;
    keyword?: string;
    groupIds?: any[];
    sourceId?: string;
    eventTypes?: any[];
    priorities?: any[];
    areaCodes?: any[];
    prefixAreaCodes?: any[];
    startTime?: string;
    endTime?: string;
    sortType?: EventSortTypeCommonType;
    resourceRelationship?: ResourceRelationshipQueryCommonType;
};

/**
 * 支持关系资源的事件搜索——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {EventEntityOutCommonType[]} 记录
 */
export type SearchEventsResType = {
    totalCount: number;
    records: EventEntityOutCommonType[];
};

/**
 * 获取符合查询条件的基础事件实体——请求参数类型定义
 * @params status {any[]} 事件状态
 * @params up_left.Longitude {number} 经度
 * @params up_left.Latitude {number} 纬度
 * @params bottom_right.Longitude {number} 经度
 * @params bottom_right.Latitude {number} 纬度
 * @params is_sort {boolean} 是否排序
 * @params keyword {string} 模糊匹配关键字
 * @params eventTypes {string} 事件类型，使用英文","隔开
 * @params priorities {string} 事件优先级，使用英文","隔开
 * @params areaCodes {string} 行政区域码，使用英文","隔开
 * @params prefixAreaCodes {string} 行政区域码前缀查询，使用英文","隔开，传入完整的行政区域码也会分割处理为区域码前缀
 * @params groupIds {any[]} 事件组
 * @params sourceId {string} 事件源Id
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetBaseEventsReqType = {
    status?: any[];
    up_left?: UpLeftCommonType;
    bottom_right?: BottomRightCommonType;
    is_sort?: boolean;
    keyword?: string;
    eventTypes?: string;
    priorities?: string;
    areaCodes?: string;
    prefixAreaCodes?: string;
    groupIds?: any[];
    sourceId?: string;
    startTime?: string;
    endTime?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取符合查询条件的基础事件实体——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {EventBaseEntityOutCommonType[]} 记录
 */
export type GetBaseEventsResType = {
    totalCount: number;
    records: EventBaseEntityOutCommonType[];
};

/**
 * 获取指定id的事件实体——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetEventInfoReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取指定id的事件实体——响应参数类型定义
 * @params id {string} Id
 * @params name {string} 事件名称
 * @params priority {number} 事件优先级
 * @params state {number} 事件状态
 * @params longitude {number} 事件发生地经度
 * @params latitude {number} 事件发生地纬度
 * @params eventType {EventTypeCommonType} 事件类型
 * @params createdTime {string} 事件创建时间
 * @params areaCode {string} 行政区域码
 * @params updateTime {string} 更新时间
 * @params resourceId {string} 外部资源唯一Id
 * @params isAudited {boolean} 是否已审核
 * @params description {string} 事件描述
 * @params group {GroupInfoCommonType} 事件组
 * @params sceneGroup {GroupInfoCommonType} 现场指挥组
 * @params happenedTime {string} 事件发生时间
 * @params finishedTime {string} 时间完成时间
 * @params address {string} 事件发生地址
 * @params submitUnit {EventUnitCommonType} 报送单位
 * @params unit {EventUnitCommonType} 事件归属单位
 * @params source {EventSourceCommonType} 事件源
 * @params extension {string} 事件扩展字段，用于存项目额外信息
 * @params typeID {string} 事件类型 Id
 * @params expectStartedTime {string} 事件期望发生时间
 * @params expectFinishedTime {string} 事件期望结束时间
 * @params isMock {boolean} 是否模拟事件
 * @params totalTaskCount {number} 任务总数（父任务）
 * @params noStatedTaskCount {number} 未开始的任务总数（父任务）
 * @params finishedTaskCount {number} 已结束的任务总数（父任务）
 * @params confirmedTaskCount {number} 已确认的任务总数（父任务）
 * @params inProcessTaskCount {number} 进行中的任务总数（父任务）
 * @params pausedTaskCount {number} 暂停中的任务总数（父任务）
 * @params isDeleted {boolean} 是否已被删除
 * @params responseLevel {EventResponseLevelCommonType} 事件的响应等级
 * @params associatePreplanId {string} 事件绑定的预案id
 * @params firstResponseLevel {EventResponseLevelOutCommonType} 一级响应级别
 * @params secondResponseLevel {EventResponseLevelOutCommonType} 二级响应级别
 * @params thirdResponseLevel {EventResponseLevelOutCommonType} 三级响应级别
 * @params fourthResponseLevel {EventResponseLevelOutCommonType} 四级响应级别
 * @params associatePreplanName {string} 事件绑定的预案的名字
 * @params isHasRecommendPreplan {boolean} 是否拥有推荐预案
 * @params recommendPreplan {PreplanBaseOutCommonType} 推荐预案
 */
export type GetEventInfoResType = {
    id: string;
    name: string;
    priority: number;
    state: number;
    longitude: number;
    latitude: number;
    eventType: EventTypeCommonType;
    createdTime: string;
    areaCode: string;
    updateTime: string;
    resourceId: string;
    isAudited: boolean;
    description: string;
    group: GroupInfoCommonType;
    sceneGroup: GroupInfoCommonType;
    happenedTime: string;
    finishedTime: string;
    address: string;
    submitUnit: EventUnitCommonType;
    unit: EventUnitCommonType;
    source: EventSourceCommonType;
    extension: string;
    typeID: string;
    expectStartedTime: string;
    expectFinishedTime: string;
    isMock: boolean;
    totalTaskCount: number;
    noStatedTaskCount: number;
    finishedTaskCount: number;
    confirmedTaskCount: number;
    inProcessTaskCount: number;
    pausedTaskCount: number;
    isDeleted: boolean;
    responseLevel: EventResponseLevelCommonType;
    associatePreplanId: string;
    firstResponseLevel: EventResponseLevelOutCommonType;
    secondResponseLevel: EventResponseLevelOutCommonType;
    thirdResponseLevel: EventResponseLevelOutCommonType;
    fourthResponseLevel: EventResponseLevelOutCommonType;
    associatePreplanName: string;
    isHasRecommendPreplan: boolean;
    recommendPreplan: PreplanBaseOutCommonType;
};

/**
 * 获取状态为`未开始`、`处理中`的事件实体——请求参数类型定义
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @params keyword {string} 模糊匹配关键字
 * @params eventTypes {string} 事件类型，使用英文","隔开
 * @params priorities {string} 事件优先级，使用英文","隔开
 * @params areaCodes {string} 行政区域码，使用英文","隔开
 * @params prefixAreaCodes {string} 行政区域码前缀查询，使用英文","隔开，传入完整的行政区域码也会分割处理为区域码前缀
 * @params groupIds {any[]} 事件组
 * @params sourceId {string} 事件源Id
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @headers X-version {string}
 */
export type GetAggsRunningEventsReqType = {
    page?: number;
    per_page?: number;
    keyword?: string;
    eventTypes?: string;
    priorities?: string;
    areaCodes?: string;
    prefixAreaCodes?: string;
    groupIds?: any[];
    sourceId?: string;
    startTime?: string;
    endTime?: string;
    'X-version'?: string;
};

/**
 * 获取状态为`未开始`、`处理中`的事件实体——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {EventEntityOutCommonType[]} 记录
 */
export type GetAggsRunningEventsResType = {
    totalCount: number;
    records: EventEntityOutCommonType[];
};

/**
 * 获取状态为`已结束`的事件实体——请求参数类型定义
 * @params isDelete {boolean} 是否被删除
 * @params keyword {string} 模糊匹配关键字
 * @params eventTypes {string} 事件类型，使用英文","隔开
 * @params priorities {string} 事件优先级，使用英文","隔开
 * @params areaCodes {string} 行政区域码，使用英文","隔开
 * @params prefixAreaCodes {string} 行政区域码前缀查询，使用英文","隔开，传入完整的行政区域码也会分割处理为区域码前缀
 * @params groupIds {any[]} 事件组
 * @params sourceId {string} 事件源Id
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetAggsEventsHistoryReqType = {
    isDelete?: boolean;
    keyword?: string;
    eventTypes?: string;
    priorities?: string;
    areaCodes?: string;
    prefixAreaCodes?: string;
    groupIds?: any[];
    sourceId?: string;
    startTime?: string;
    endTime?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取状态为`已结束`的事件实体——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {EventEntityOutCommonType[]} 记录
 */
export type GetAggsEventsHistoryResType = {
    totalCount: number;
    records: EventEntityOutCommonType[];
};

/**
 * 获取事件关联相关数据——请求参数类型定义
 * @params id {string} id （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetEventsAssociateDataReqType = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取事件关联相关数据——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {EventAssociatedDataCollectOutCommonType[]} 记录
 */
export type GetEventsAssociateDataResType = {
    totalCount: number;
    records: EventAssociatedDataCollectOutCommonType[];
};

/**
 * 根据事件id获取当前事件所关联的所有成员（指挥部成员、任务组成员）——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetEventsMembersReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 根据事件id获取当前事件所关联的所有成员（指挥部成员、任务组成员）——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {MemberOutCommonType[]} 记录
 */
export type GetEventsMembersResType = {
    totalCount: number;
    records: MemberOutCommonType[];
};

/**
 * 多条件查询设施信息——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params keyWord {string} 关键字
 * @params layerIds {any[]} 图层Id
 * @params layerName {string} 图层名,可模糊匹配
 * @params areaCodes {any[]} 行政区域代码
 * @params prefixAreaCodes {any[]} 行政区域前缀代码,传入完整区域码也会被处理为前缀区域码
 * @params querySubordinateFacility {boolean} 是否查询下级行政区域设施 （必填）
 * @params resourceRelationship {ResourceRelationshipQueryCommonType} 资源关系
 * @params isShowAlert {boolean} 是否显示告警【默认不聚合设施告警】
 */
export type AggsQueryFacilitiesReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    keyWord?: string;
    layerIds?: any[];
    layerName?: string;
    areaCodes?: any[];
    prefixAreaCodes?: any[];
    querySubordinateFacility: boolean;
    resourceRelationship?: ResourceRelationshipQueryCommonType;
    isShowAlert?: boolean;
};

/**
 * 多条件查询设施信息——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {FacilityWithAlertCommonType[]} 记录
 */
export type AggsQueryFacilitiesResType = {
    totalCount: number;
    records: FacilityWithAlertCommonType[];
};

/**
 * 获取资源关系下图层的基于事件周边设施——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params keyWord {string} 关键字
 * @params layerIds {any[]} 图层Id
 * @params layerName {string} 图层名,可模糊匹配
 * @params areaCodes {any[]} 行政区域代码
 * @params prefixAreaCodes {any[]} 行政区域前缀代码,传入完整区域码也会被处理为前缀区域码
 * @params querySubordinateFacility {boolean} 是否查询下级行政区域设施 （必填）
 * @params resourceRelationship {ResourceRelationshipQueryCommonType} 资源关系
 * @params isShowAlert {boolean} 是否显示告警【默认不聚合设施告警】
 */
export type SearchFacilitiesByEventIdReqType = {
    eventId: string;
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    keyWord?: string;
    layerIds?: any[];
    layerName?: string;
    areaCodes?: any[];
    prefixAreaCodes?: any[];
    querySubordinateFacility: boolean;
    resourceRelationship?: ResourceRelationshipQueryCommonType;
    isShowAlert?: boolean;
};

/**
 * 获取资源关系下图层的基于事件周边设施——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {EventFacilityOutCommonType[]} 记录
 */
export type SearchFacilitiesByEventIdResType = {
    totalCount: number;
    records: EventFacilityOutCommonType[];
};

/**
 * 获取资源关系下图层基于事件周边的统计信息——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 * @params resourceRelationship {ResourceRelationshipQueryCommonType} 资源关系 （必填）
 * @params radius {number} 半径范围(单位米)
 */
export type SearchFacilityTotalByEventIdReqType = {
    eventId: string;
    'X-version'?: string;
    resourceRelationship: ResourceRelationshipQueryCommonType;
    radius?: number;
};

/**
 * 获取资源关系下图层基于事件周边的统计信息——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {EventFacilityStatisticsOutCommonType[]} 记录
 */
export type SearchFacilityTotalByEventIdResType = {
    totalCount: number;
    records: EventFacilityStatisticsOutCommonType[];
};

/**
 * 周边设施——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params layerIds {any[]} 图层Id列表 （必填）
 * @params keyword {string} 关键字
 * @params center {CoordinateCommonType} 圆心 （必填）
 * @params radius {number} 半径（单位米） （必填）
 * @params sortRule {SortRuleCommonType} 是否按距离升序排序，默认升序
 */
export type GetNearFacilitiesReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    layerIds: any[];
    keyword?: string;
    center: CoordinateCommonType;
    radius: number;
    sortRule?: SortRuleCommonType;
};

/**
 * 周边设施——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {FacilityWithDistanceCommonType[]} 记录
 */
export type GetNearFacilitiesResType = {
    totalCount: number;
    records: FacilityWithDistanceCommonType[];
};

/**
 * 通过告警ID匹配所属设施——请求参数类型定义
 * @params alertId {number} alertId （必填）
 * @headers X-version {string}
 */
export type GetFacilitiesByAlertIdReqType = {
    alertId: number;
    'X-version'?: string;
};

/**
 * 通过告警ID匹配所属设施——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 名称
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params resourceId {string} 资源Id
 * @params layerId {string} 图层Id
 * @params layerDetail {LayerEntityOutCommonType} 图层信息
 * @params description {string} 详情
 * @params owner {string} 设施负责人
 * @params number {string} 联系电话
 * @params geoFilePath {string} 重点区域的资源文件路径
 * @params address {string} 设施地址
 * @params extension {undefined} 扩展项
 * @params areaCode {string} 行政区域代码
 * @params height {number} 设施高度
 * @params geometryData {GeometryDataOutCommonType} 线面数据
 * @params platformId {string} 资源所属平台Id
 * @params facilityState {string} 设施状态
 */
export type GetFacilitiesByAlertIdResType = {
    id: string;
    name: string;
    longitude: number;
    latitude: number;
    resourceId: string;
    layerId: string;
    layerDetail: LayerEntityOutCommonType;
    description: string;
    owner: string;
    number: string;
    geoFilePath: string;
    address: string;
    extension: undefined;
    areaCode: string;
    height: number;
    geometryData: GeometryDataOutCommonType;
    platformId: string;
    facilityState: string;
};

/**
 * 设施关联告警、指标实时值查询——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params keyWord {string} 关键字
 * @params layerIds {any[]} 图层Id
 * @params layerName {string} 图层名,可模糊匹配
 * @params areaCodes {any[]} 行政区域代码
 * @params prefixAreaCodes {any[]} 行政区域前缀代码,传入完整区域码也会被处理为前缀区域码
 * @params querySubordinateFacility {boolean} 是否查询下级行政区域设施 （必填）
 * @params relateTypeId {string} 监测设备类型ID
 * @params alertTypeId {string} 告警类型ID
 */
export type GetFacilityMetricsReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    keyWord?: string;
    layerIds?: any[];
    layerName?: string;
    areaCodes?: any[];
    prefixAreaCodes?: any[];
    querySubordinateFacility: boolean;
    relateTypeId?: string;
    alertTypeId?: string;
};

/**
 * 设施关联告警、指标实时值查询——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {FacilityMetricsOutCommonType[]} 记录
 */
export type GetFacilityMetricsResType = {
    totalCount: number;
    records: FacilityMetricsOutCommonType[];
};

/**
 * 获取目录下的文件——请求参数类型定义
 * @params directoryId {string} 目录id （必填）
 * @params storageKind {number} 储存类型 （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetAggsFilesReqType = {
    directoryId: string;
    storageKind: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取目录下的文件——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {FileOutCommonType[]} 记录
 */
export type GetAggsFilesResType = {
    totalCount: number;
    records: FileOutCommonType[];
};

/**
 * 分页查询国标下级域列表接口——请求参数类型定义
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetGbLowerDomainsReqType = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 分页查询国标下级域列表接口——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {GbLowerDomainDataOutCommonType[]} 记录
 */
export type GetGbLowerDomainsResType = {
    totalCount: number;
    records: GbLowerDomainDataOutCommonType[];
};

/**
 * 创建下级域信息包含下级域定时任务——请求参数类型定义
 * @headers X-version {string}
 * @params activeRegister {boolean} 是否主动注册
 * @params civilcode {string} 区域编码
 * @params gbId {string} 下级域的国标id （必填）
 * @params heartbeadCycle {number} 心跳周期
 * @params heartbeadTimeoutCount {number} 心跳超时次数
 * @params ip {string} 下级域的SIP信令IP地址 （必填）
 * @params manufacturer {number} 厂商，可为空
 * @params model {string} 型号，可为空
 * @params name {string} 下级域的名称 （必填）
 * @params needAuth {boolean} 是否需要认证
 * @params password {string} 认证密码
 * @params needMapping {boolean} 启用映射
 * @params sipMappedAddress {string} 信令映射地址
 * @params mediaMappedAddress {string} 流媒体映射地址
 * @params networkType {SipServiceNetworkTypeCommonType} 对接网络类型，1：内网，2：公网默认内网
 * @params sipPort {number} 下级域的SIP信令端口号 （必填）
 * @params status {SipServiceStatusCommonType} 下级域状态（1：设备离线，2：设备在线）默认离线
 * @params type {DomainTypeCommonType} 用户代理类型，IPC:131 国标摄像头NVR:118  国标NVRPlatform(国标平台) :2Encoder:113  国标编码器Decoder:114 国标解码器VCE:300 非标服务视频
 * @params userName {string} 登录的用户名，认证时需要
 * @params rtpRecvType {RtpRecvTypeCommonType} 国标流媒体收流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params rtpSendType {RtpSendTypeCommonType} 国标流媒体向下级发流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params sipTransProtocol {SipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params extension {undefined} 扩展字段
 * @params scheduleTask {ScheduleTaskCommonType} 定时任务
 */
export type AddGbLowerDomainsReqType = {
    'X-version'?: string;
    activeRegister?: boolean;
    civilcode?: string;
    gbId: string;
    heartbeadCycle?: number;
    heartbeadTimeoutCount?: number;
    ip: string;
    manufacturer?: number;
    model?: string;
    name: string;
    needAuth?: boolean;
    password?: string;
    needMapping?: boolean;
    sipMappedAddress?: string;
    mediaMappedAddress?: string;
    networkType?: SipServiceNetworkTypeCommonType;
    sipPort: number;
    status?: SipServiceStatusCommonType;
    type?: DomainTypeCommonType;
    userName?: string;
    rtpRecvType?: RtpRecvTypeCommonType;
    rtpSendType?: RtpSendTypeCommonType;
    sipTransProtocol?: SipTransProtocolCommonType;
    extension?: undefined;
    scheduleTask?: ScheduleTaskCommonType;
};

/**
 * 创建下级域信息包含下级域定时任务——响应参数类型定义
 * @params jobId {string} 定时任务的Id
 * @params jobName {string} 定时任务名称
 * @params name {string} 下级域名称
 * @params ip {string} 下级域ip地址
 * @params type {number} 用户代理类型，常见类型，            IPC:131            NVR:118            Platform(国标平台):2            Encoder:113            Decoder:114
 * @params gbId {string} 下级域标识
 * @params sipPort {number} 端口
 * @params heartBeadCycle {number} 心跳周期
 * @params heartBeadTimeoutCount {number} 心跳超时次数
 * @params needAuth {boolean} 是否需要认证
 * @params password {string} 认证密码
 * @params networkType {number} 网络类型（1：内网，2：公网）
 * @params jobMode {JobModeCommonType} 定时任务模式
 * @params cron {string} Cron表达式
 * @params nextExecuteTime {string} 下次执行时间
 * @params beginTime {string} 定时任务开始时间
 * @params endTime {string} 定时任务结束时间
 * @params status {number} 在线状态1-离线2-在线
 * @params taskStatus {SyncStatusCommonType} 同步任务状态未开始 0进行中 1 同步完成 2应用中 3 应用完成 4
 * @params timeRemaining {number} 同步剩余时间，单位/毫秒
 * @params progress {number} 同步进度，百分比
 * @params catalogsNum {number} 信令同步目录数量值
 * @params actualCatalogsNum {number} 实际同步目录数量
 * @params rtpRecvType {RtpRecvTypeCommonType} 国标流媒体收流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params rtpSendType {RtpSendTypeCommonType} 国标流媒体向下级发流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params sipTransProtocol {SipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params extension {undefined} 扩展字段
 * @params stateDuration {string} 在线/离线时长
 * @params lastStateChangedTime {string} 最后一次状态变更时间
 * @params needMapping {boolean} 启用映射
 * @params sipMappedAddress {string} 信令映射地址
 * @params mediaMappedAddress {string} 流媒体映射地址
 */
export type AddGbLowerDomainsResType = {
    jobId: string;
    jobName: string;
    name: string;
    ip: string;
    type: number;
    gbId: string;
    sipPort: number;
    heartBeadCycle: number;
    heartBeadTimeoutCount: number;
    needAuth: boolean;
    password: string;
    networkType: number;
    jobMode: JobModeCommonType;
    cron: string;
    nextExecuteTime: string;
    beginTime: string;
    endTime: string;
    status: number;
    taskStatus: SyncStatusCommonType;
    timeRemaining: number;
    progress: number;
    catalogsNum: number;
    actualCatalogsNum: number;
    rtpRecvType: RtpRecvTypeCommonType;
    rtpSendType: RtpSendTypeCommonType;
    sipTransProtocol: SipTransProtocolCommonType;
    extension: undefined;
    stateDuration: string;
    lastStateChangedTime: string;
    needMapping: boolean;
    sipMappedAddress: string;
    mediaMappedAddress: string;
};

/**
 * 根据下级域id获取下级域详细信息接口——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetGbLowerDomainsByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 根据下级域id获取下级域详细信息接口——响应参数类型定义
 * @params jobId {string} 定时任务的Id
 * @params jobName {string} 定时任务名称
 * @params name {string} 下级域名称
 * @params ip {string} 下级域ip地址
 * @params type {number} 用户代理类型，常见类型，            IPC:131            NVR:118            Platform(国标平台):2            Encoder:113            Decoder:114
 * @params gbId {string} 下级域标识
 * @params sipPort {number} 端口
 * @params heartBeadCycle {number} 心跳周期
 * @params heartBeadTimeoutCount {number} 心跳超时次数
 * @params needAuth {boolean} 是否需要认证
 * @params password {string} 认证密码
 * @params networkType {number} 网络类型（1：内网，2：公网）
 * @params jobMode {JobModeCommonType} 定时任务模式
 * @params cron {string} Cron表达式
 * @params nextExecuteTime {string} 下次执行时间
 * @params beginTime {string} 定时任务开始时间
 * @params endTime {string} 定时任务结束时间
 * @params status {number} 在线状态1-离线2-在线
 * @params taskStatus {SyncStatusCommonType} 同步任务状态未开始 0进行中 1 同步完成 2应用中 3 应用完成 4
 * @params timeRemaining {number} 同步剩余时间，单位/毫秒
 * @params progress {number} 同步进度，百分比
 * @params catalogsNum {number} 信令同步目录数量值
 * @params actualCatalogsNum {number} 实际同步目录数量
 * @params rtpRecvType {RtpRecvTypeCommonType} 国标流媒体收流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params rtpSendType {RtpSendTypeCommonType} 国标流媒体向下级发流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params sipTransProtocol {SipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params extension {undefined} 扩展字段
 * @params stateDuration {string} 在线/离线时长
 * @params lastStateChangedTime {string} 最后一次状态变更时间
 * @params needMapping {boolean} 启用映射
 * @params sipMappedAddress {string} 信令映射地址
 * @params mediaMappedAddress {string} 流媒体映射地址
 */
export type GetGbLowerDomainsByIdResType = {
    jobId: string;
    jobName: string;
    name: string;
    ip: string;
    type: number;
    gbId: string;
    sipPort: number;
    heartBeadCycle: number;
    heartBeadTimeoutCount: number;
    needAuth: boolean;
    password: string;
    networkType: number;
    jobMode: JobModeCommonType;
    cron: string;
    nextExecuteTime: string;
    beginTime: string;
    endTime: string;
    status: number;
    taskStatus: SyncStatusCommonType;
    timeRemaining: number;
    progress: number;
    catalogsNum: number;
    actualCatalogsNum: number;
    rtpRecvType: RtpRecvTypeCommonType;
    rtpSendType: RtpSendTypeCommonType;
    sipTransProtocol: SipTransProtocolCommonType;
    extension: undefined;
    stateDuration: string;
    lastStateChangedTime: string;
    needMapping: boolean;
    sipMappedAddress: string;
    mediaMappedAddress: string;
};

/**
 * 删除指定下级域——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteGbLowerDomainsReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 修改下级域信息——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params heartbeadCycle {number} 心跳周期
 * @params heartbeadTimeoutCount {number} 心跳超时次数
 * @params ip {string} 下级域的SIP信令IP地址 （必填）
 * @params name {string} 下级域的名称 （必填）
 * @params needAuth {boolean} 是否需要认证
 * @params password {string} 认证密码
 * @params needMapping {boolean} 启用映射
 * @params sipMappedAddress {string} 信令映射地址
 * @params mediaMappedAddress {string} 流媒体映射地址
 * @params networkType {SipServiceNetworkTypeCommonType} 对接网络类型，1：内网，2：公网默认内网
 * @params sipPort {number} 下级域的SIP信令端口号 （必填）
 * @params userName {string} 用户名,建议同gbid
 * @params rtpRecvType {RtpRecvTypeCommonType} 国标流媒体收流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params rtpSendType {RtpSendTypeCommonType} 国标流媒体向下级发流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params sipTransProtocol {SipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params extension {undefined} 扩展字段
 * @params updateJobIn {UpdateJobInCommonType} 修改定时任务参数
 */
export type EditGbLowerDomainsReqType = {
    id: string;
    'X-version'?: string;
    heartbeadCycle?: number;
    heartbeadTimeoutCount?: number;
    ip: string;
    name: string;
    needAuth?: boolean;
    password?: string;
    needMapping?: boolean;
    sipMappedAddress?: string;
    mediaMappedAddress?: string;
    networkType?: SipServiceNetworkTypeCommonType;
    sipPort: number;
    userName?: string;
    rtpRecvType?: RtpRecvTypeCommonType;
    rtpSendType?: RtpSendTypeCommonType;
    sipTransProtocol?: SipTransProtocolCommonType;
    extension?: undefined;
    updateJobIn?: UpdateJobInCommonType;
};

/**
 * 模糊查询物资（分权分域）——请求参数类型定义
 * @headers X-version {string}
 * @params keyWord {string} 关键字
 * @params maxCount {number} 最大返回值
 * @params locations {CoordinateCommonType[]} 点位集合
 * @params areaCodes {any[]} 行政区域代码
 * @params prefixAreaCodes {any[]} 行政区域前缀代码,传入完整区域码也会被处理为前缀区域码
 */
export type AggsSearchGoodsReqType = {
    'X-version'?: string;
    keyWord?: string;
    maxCount?: number;
    locations?: CoordinateCommonType[];
    areaCodes?: any[];
    prefixAreaCodes?: any[];
};

/**
 * 模糊查询物资（分权分域）——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {GoodEntityDetailOutCommonType[]} 记录
 */
export type AggsSearchGoodsResType = {
    totalCount: number;
    records: GoodEntityDetailOutCommonType[];
};

/**
 * GPS点位搜索——请求参数类型定义
 * @params up_left.Longitude {number} 经度 （必填）
 * @params up_left.Latitude {number} 纬度 （必填）
 * @params bottom_right.Longitude {number} 经度 （必填）
 * @params bottom_right.Latitude {number} 纬度 （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetGpsReqType = {
    up_left: UpLeftCommonType;
    bottom_right: BottomRightCommonType;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * GPS点位搜索——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PointSearchOutCommonType[]} 记录
 */
export type GetGpsResType = {
    totalCount: number;
    records: PointSearchOutCommonType[];
};

/**
 * 查询指定设备的最新活跃点位——请求参数类型定义
 * @params device {string} 设备Id （必填）
 * @params upload_source_type {number} 上报源类型（0:人员上报类型(默认值)；1:终端资产类型） （必填）
 * @headers X-version {string}
 */
export type GetDeviceGpsReqType = {
    device: string;
    upload_source_type: number;
    'X-version'?: string;
};

/**
 * 查询指定设备的最新活跃点位——响应参数类型定义
 * @params deviceId {string} 设备Id
 * @params gps {GpsDataCommonType} 设备位置
 * @params reportTime {string} 上报时间
 * @params uploadSourceType {UploadSourceTypeCommonType} 上报源类型
 */
export type GetDeviceGpsResType = {
    deviceId: string;
    gps: GpsDataCommonType;
    reportTime: string;
    uploadSourceType: UploadSourceTypeCommonType;
};

/**
 * 查询多个指定设备的最新活跃点位——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params devices {DeviceItemCommonType[]} 设备Id:上报源类型，用 "," 分开多个
 */
export type SearchDevicesGpsReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    devices?: DeviceItemCommonType[];
};

/**
 * 查询多个指定设备的最新活跃点位——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ActiveItemOutCommonType[]} 记录
 */
export type SearchDevicesGpsResType = {
    totalCount: number;
    records: ActiveItemOutCommonType[];
};

/**
 * 查询设备GPS历史轨迹——请求参数类型定义
 * @params device {string} 设备ID （必填）
 * @params start_time {string} 起始时间 （必填）
 * @params end_time {string} 结束时间 （必填）
 * @params upload_source_type {number} 上报源类型（0:人员上报类型(默认值)；1:终端资产类型）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetDeviceGpsHistoryReqType = {
    device: string;
    start_time: string;
    end_time: string;
    upload_source_type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 查询设备GPS历史轨迹——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {HistoryItemOutCommonType[]} 记录
 */
export type GetDeviceGpsHistoryResType = {
    totalCount: number;
    records: HistoryItemOutCommonType[];
};

/**
 * 获取设备最后的Gps点位——请求参数类型定义
 * @params day_intervals {number} 最近多少天内 默认：1
 * @params device {string} 设备Id （必填）
 * @params upload_source_type {number} 上报源类型（0:人员上报类型(默认值)；1:终端资产类型） （必填）
 * @headers X-version {string}
 */
export type GetDeviceLatestGpsReqType = {
    day_intervals?: number;
    device: string;
    upload_source_type: number;
    'X-version'?: string;
};

/**
 * 获取设备最后的Gps点位——响应参数类型定义
 * @params deviceId {string} 设备Id
 * @params gps {GpsDataCommonType} 设备位置
 * @params reportTime {string} 上报时间
 * @params uploadSourceType {UploadSourceTypeCommonType} 上报源类型
 */
export type GetDeviceLatestGpsResType = {
    deviceId: string;
    gps: GpsDataCommonType;
    reportTime: string;
    uploadSourceType: UploadSourceTypeCommonType;
};

/**
 * 通过GPS设备ID查询关联监控——请求参数类型定义
 * @params deviceId {string} 设备Id （必填）
 * @params PlayUrlShowType {number} 0完整地址，1相对地址
 * @headers X-version {string}
 */
export type GetRelateCamerasReqType = {
    deviceId: string;
    PlayUrlShowType?: number;
    'X-version'?: string;
};

/**
 * 通过GPS设备ID查询关联监控——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {SimpleCameraOutCommonType[]} 记录
 */
export type GetRelateCamerasResType = {
    totalCount: number;
    records: SimpleCameraOutCommonType[];
};

/**
 * 分页查询组成员——请求参数类型定义
 * @params id {string} id （必填）
 * @params Type {number} 查询成员类型
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetGroupMemberReqType = {
    id: string;
    Type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 分页查询组成员——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {GroupMemberOutCommonType[]} 记录
 */
export type GetGroupMemberResType = {
    totalCount: number;
    records: GroupMemberOutCommonType[];
};

/**
 * 搜索资源关系下预案组——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params resourceRelationship {ResourceRelationshipQueryCommonType} 资源关系 （必填）
 * @params keyword {string} 关键词
 */
export type GetGroupsReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    resourceRelationship: ResourceRelationshipQueryCommonType;
    keyword?: string;
};

/**
 * 搜索资源关系下预案组——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {GroupDetailNoContactDetailOutCommonType[]} 记录
 */
export type GetGroupsResType = {
    totalCount: number;
    records: GroupDetailNoContactDetailOutCommonType[];
};

/**
 * 搜索资源关系下预案组组和联系人——请求参数类型定义
 * @headers X-version {string}
 * @params resourceRelationship {ResourceRelationshipQueryCommonType} 资源关系 （必填）
 * @params keyword {string} 关键词
 * @params limit {number} 最大获取条数
 */
export type SearchGroupsReqType = {
    'X-version'?: string;
    resourceRelationship: ResourceRelationshipQueryCommonType;
    keyword?: string;
    limit?: number;
};

/**
 * 搜索资源关系下预案组组和联系人——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {SearchResultOutCommonType} 记录
 */
export type SearchGroupsResType = {
    totalCount: number;
    records: SearchResultOutCommonType;
};

/**
 * 获取根图层的下级图层的资源统计信息——请求参数类型定义
 * @params LayerName {string} 根图层名称(完全匹配) （必填）
 * @params Keywords {string} 该关键字用于搜索带有关键字的图层
 * @params AreaCode {string} 行政区域码，查指定区域的统计（不包含下级），如AreaCode只查深圳的统计（不包含下级南山统计）
 * @params ProductId {string} 产品Id
 * @params PrefixAreaCodes {any[]} 行政区域码，查询包括下级的统计，AreaCode，PrefixAreaCodes都传以AreaCode为准
 * @headers X-version {string}
 */
export type GetLayerStatisticsTotalReqType = {
    LayerName: string;
    Keywords?: string;
    AreaCode?: string;
    ProductId?: string;
    PrefixAreaCodes?: any[];
    'X-version'?: string;
};

/**
 * 获取根图层的下级图层的资源统计信息——响应参数类型定义
 * @params layerId {string} 图层id
 * @params layerName {string} 图层名称
 * @params subordinateLayersTotal {number} 图层总数
 * @params facilitiesTotal {number} 设施总数
 * @params subordinateLayers {LayerNodeOutCommonType[]} 下级图层资源
 */
export type GetLayerStatisticsTotalResType = {
    layerId: string;
    layerName: string;
    subordinateLayersTotal: number;
    facilitiesTotal: number;
    subordinateLayers: LayerNodeOutCommonType[];
};

/**
 * 批量获取多个区域的根图层下级图层的资源统计信息——请求参数类型定义
 * @params LayerName {string} 根图层名称(完全匹配) （必填）
 * @params ProductId {string} 产品Id
 * @params AreaCodes {any[]} 行政区域码列表，查指定区域的统计（不包含下级），如AreaCode只查深圳的统计（不包含下级南山统计）
 * @params PrefixAreaCodes {any[]} 完整区域码，查询包括下级的统计，AreaCode，PrefixAreaCodes都传以AreaCode为准
 * @headers X-version {string}
 */
export type GetRootLayerStatisticsTotalReqType = {
    LayerName: string;
    ProductId?: string;
    AreaCodes?: any[];
    PrefixAreaCodes?: any[];
    'X-version'?: string;
};

/**
 * 批量获取多个区域的根图层下级图层的资源统计信息——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayerNodeWithAreaCodeOutCommonType[]} 记录
 */
export type GetRootLayerStatisticsTotalResType = {
    totalCount: number;
    records: LayerNodeWithAreaCodeOutCommonType[];
};

/**
 * 查询拍传详情——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetMultimediaTransferDetailsReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 查询拍传详情——响应参数类型定义
 * @params id {string} 拍传ID
 * @params name {string} 拍传名称
 * @params templateId {string} 拍传模板Id
 * @params templateName {string} 拍传模板名称
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params address {string} 地址
 * @params fileGroupId {string} 文件组Id
 * @params fileCount {number} 文件数量
 * @params userId {string} 拍传用户id
 * @params userName {string} 用户名称
 * @params organizationId {string} 组织机构Id
 * @params organizationName {string} 组织机构名称
 * @params uploadTime {string} 上传时间
 * @params company {string} 单位名称
 * @params companyAddress {string} 单位地址
 * @params resourceId {string} 资源ID
 * @params platformId {string} 平台Id
 * @params areaCode {string} 行政区域码
 * @params districtName {string} 行政区域名
 * @params fileRecords {FileEntityOutCommonType[]} 文件记录
 */
export type GetMultimediaTransferDetailsResType = {
    id: string;
    name: string;
    templateId: string;
    templateName: string;
    longitude: number;
    latitude: number;
    address: string;
    fileGroupId: string;
    fileCount: number;
    userId: string;
    userName: string;
    organizationId: string;
    organizationName: string;
    uploadTime: string;
    company: string;
    companyAddress: string;
    resourceId: string;
    platformId: string;
    areaCode: string;
    districtName: string;
    fileRecords: FileEntityOutCommonType[];
};

/**
 * 查询拍传——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params beginTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params templateId {string} 模板Id
 * @params keyWord {string} 关键字模糊查询
 * @params organizationId {string} 组织机构Id
 * @params userId {string} 用户Id
 * @params resourceId {string} 资源ID
 * @params platformId {string} 平台 ID
 * @params prefixAreaCodes {any[]} 行政区域码前缀
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域
 */
export type SearchAggsMultimediaTransfersReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    beginTime?: string;
    endTime?: string;
    templateId?: string;
    keyWord?: string;
    organizationId?: string;
    userId?: string;
    resourceId?: string;
    platformId?: string;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
};

/**
 * 查询拍传——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {MultimediaTransferOutCommonType[]} 记录
 */
export type SearchAggsMultimediaTransfersResType = {
    totalCount: number;
    records: MultimediaTransferOutCommonType[];
};

/**
 * 搜索第三方平台——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params resourceRelationship {ResourceRelationshipQueryCommonType} 资源关系
 * @params platformIds {any[]} 平台ID
 * @params keyword {string} 关键词
 * @params networkId {string} 网络环境id
 * @params status {AssetStatusCommonType} 资产状态 1已连接，2未连接
 * @params prefixAreaCodes {any[]} 行政区域码前缀集合
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 * @params isContainMainResource {boolean} 返回结果是否包含主体资源
 */
export type AggsGetPlatformsReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    resourceRelationship?: ResourceRelationshipQueryCommonType;
    platformIds?: any[];
    keyword?: string;
    networkId?: string;
    status?: AssetStatusCommonType;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
    isContainMainResource?: boolean;
};

/**
 * 搜索第三方平台——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ThirdPlatformDetailsOutCommonType[]} 记录
 */
export type AggsGetPlatformsResType = {
    totalCount: number;
    records: ThirdPlatformDetailsOutCommonType[];
};

/**
 * 搜索——请求参数类型定义
 * @params id {string} id （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type SearchPreplanGroupsReqType = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 搜索——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {GroupDetailOutCommonType[]} 记录
 */
export type SearchPreplanGroupsResType = {
    totalCount: number;
    records: GroupDetailOutCommonType[];
};

/**
 * 按条件查询预案——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params keyword {string} 模糊匹配关键字
 * @params eventTypeIds {any[]} 事件类型ID集合,Empty为所有类型
 * @params eventPriorities {any[]} 事件优先级值集合,Empty为所有类型
 * @params areaCodes {any[]} 区域码集合，Empty为所有
 * @params prefixAreaCodes {any[]} 区域码前缀集合，当AreaCodes不为空时，以AreaCodes为准，Empty为所有
 */
export type AggsSearchPreplansReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    keyword?: string;
    eventTypeIds?: any[];
    eventPriorities?: any[];
    areaCodes?: any[];
    prefixAreaCodes?: any[];
};

/**
 * 按条件查询预案——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PreplanOutCommonType[]} 记录
 */
export type AggsSearchPreplansResType = {
    totalCount: number;
    records: PreplanOutCommonType[];
};

/**
 * 通过事件ID匹配预案——请求参数类型定义
 * @params eventId {string} 事件对象内的associatePreplanId预案 > RRS资源关系下的预案 > 同一事件类型同一优先级的预案 > 同一事件类型下未定级预案 >同一事件类型其他优先级的预案 （必填）
 * @headers X-version {string}
 */
export type GetPreplansByEventIdReqType = {
    eventId: string;
    'X-version'?: string;
};

/**
 * 通过事件ID匹配预案——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 名称
 * @params eventType {EventTypeInfoCommonType} 适用于哪种事件类型ID
 * @params eventPriority {number} 适用于哪种事件优先级
 * @params areaCode {string} 行政区域码
 * @params districtIdPath {string} 行政区域IDPath
 * @params districtNamePath {string} 行政区域NamePath
 * @params eventAffectRadius {number} 事件影响半径
 * @params dangerousSources {ResourceCommonType[]} 危险源
 * @params keyProtections {ResourceCommonType[]} 重点防护目标
 * @params shelters {ResourceCommonType[]} 避难场所
 * @params warehouses {ResourceCommonType[]} 仓库
 * @params emergencyFacilities {ResourceCommonType[]} 应急设备
 * @params manpowerResources {ResourceCommonType[]} 人力资源
 * @params medicalResources {ResourceCommonType[]} 医疗资源
 * @params pollutionSources {ResourceCommonType[]} 污染源
 * @params textTemplate {string} 文本模板
 * @params sceneParameters {any[]} 情景参数
 * @params directoryRecordId {string} 预案文档储存文件夹ID
 * @params taskTemplate {TaskTemplateInfoCommonType} 关联的任务模板
 * @params associatedGroup {GroupInfoCommonType} 关联的指挥组
 * @params sceneGroup {GroupInfoCommonType} 关联的现场指挥组
 * @params firstResponseLevel {ResponseLevelOutCommonType} 一级响应级别
 * @params secondResponseLevel {ResponseLevelOutCommonType} 二级响应级别
 * @params thirdResponseLevel {ResponseLevelOutCommonType} 三级响应级别
 * @params fourthResponseLevel {ResponseLevelOutCommonType} 四级响应级别
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params cameraLabels {CameraLabelCommonType[]} 监控标签
 * @params preplanGroups {GroupInfoCommonType[]} 预案组
 * @params videoConferenceTerminals {VideoConferenceTerminalCommonType[]} 视频会议终端
 */
export type GetPreplansByEventIdResType = {
    id: string;
    name: string;
    eventType: EventTypeInfoCommonType;
    eventPriority: number;
    areaCode: string;
    districtIdPath: string;
    districtNamePath: string;
    eventAffectRadius: number;
    dangerousSources: ResourceCommonType[];
    keyProtections: ResourceCommonType[];
    shelters: ResourceCommonType[];
    warehouses: ResourceCommonType[];
    emergencyFacilities: ResourceCommonType[];
    manpowerResources: ResourceCommonType[];
    medicalResources: ResourceCommonType[];
    pollutionSources: ResourceCommonType[];
    textTemplate: string;
    sceneParameters: any[];
    directoryRecordId: string;
    taskTemplate: TaskTemplateInfoCommonType;
    associatedGroup: GroupInfoCommonType;
    sceneGroup: GroupInfoCommonType;
    firstResponseLevel: ResponseLevelOutCommonType;
    secondResponseLevel: ResponseLevelOutCommonType;
    thirdResponseLevel: ResponseLevelOutCommonType;
    fourthResponseLevel: ResponseLevelOutCommonType;
    platformId: string;
    resourceId: string;
    cameraLabels: CameraLabelCommonType[];
    preplanGroups: GroupInfoCommonType[];
    videoConferenceTerminals: VideoConferenceTerminalCommonType[];
};

/**
 * 按条件查询分组的预案（分组包括（推荐预案列表、其他预案列表））——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params eventTypeId {string} 事件类型ID集合,Empty为所有类型
 * @params eventPriority {number} 事件优先级
 * @params areaCode {string} 区域码
 * @params isMatchNullAreaCode {boolean} 是否匹配空区域码的预案
 */
export type AggsSearchPreplanGroupReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    eventTypeId?: string;
    eventPriority?: number;
    areaCode?: string;
    isMatchNullAreaCode?: boolean;
};

/**
 * 按条件查询分组的预案（分组包括（推荐预案列表、其他预案列表））——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PreplanGroupingOutCommonType} 记录
 */
export type AggsSearchPreplanGroupResType = {
    totalCount: number;
    records: PreplanGroupingOutCommonType;
};

/**
 * 新增项目——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 项目名称 （必填）
 * @params resourceId {string} 资源Id
 * @params description {string} 描述
 * @params parentId {string} 父Id
 */
export type AddAggsProjectReqType = {
    'X-version'?: string;
    name: string;
    resourceId?: string;
    description?: string;
    parentId?: string;
};

/**
 * 新增项目——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 名称
 * @params parentId {string} 父Id
 * @params totalMetadataCount {number} 元数据统计总数
 * @params description {string} 项目描述
 * @params themes {ProjectThemeDetailCommonType[]} 项目专题列表
 * @params resourceId {string} ResourceId
 */
export type AddAggsProjectResType = {
    id: string;
    name: string;
    parentId: string;
    totalMetadataCount: number;
    description: string;
    themes: ProjectThemeDetailCommonType[];
    resourceId: string;
};

/**
 * 获取项目——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetAggsProjectByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取项目——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 名称
 * @params resourceId {string} 资源ID
 * @params themes {ThemeRelationshipDetailCommonType[]} 专题
 * @params parentId {string} 父级ID
 * @params description {string} 描述
 */
export type GetAggsProjectByIdResType = {
    id: string;
    name: string;
    resourceId: string;
    themes: ThemeRelationshipDetailCommonType[];
    parentId: string;
    description: string;
};

/**
 * 删除项目——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteAggsProjectReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 导出——请求参数类型定义
 * @params id {string} id （必填）
 * @params DataType {number} 数据类型:默认全部数据，1布局数据
 * @headers X-version {string}
 */
export type AggsExportProjectReqType = {
    id: string;
    DataType?: number;
    'X-version'?: string;
};

/**
 * 导入——请求参数类型定义
 * @headers X-version {string}
 */
export type AggsImportProjectReqType = {
    'X-version'?: string;
};

/**
 * 导出地图全局配置——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type ExportMapConfigReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 导入地图全局配置——请求参数类型定义
 * @headers X-version {string}
 */
export type ImportMapConfigReqType = {
    'X-version'?: string;
};

/**
 * 导出资源库条目——请求参数类型定义
 * @params id {string} id （必填）
 * @params resourceDbId {string} resourceDbId
 * @headers X-version {string}
 */
export type ExportResourceDbsByIdReqType = {
    id: string;
    resourceDbId?: string;
    'X-version'?: string;
};

/**
 * 导入资源库条目——请求参数类型定义
 * @headers X-version {string}
 */
export type AggsImportResourceDbsReqType = {
    'X-version'?: string;
};

/**
 * 查询主体下全部类型资源——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params mainResource {ResourceInfoCommonType} 主体资源 （必填）
 * @params productId {string} 产品ID
 */
export type GetMainResourceReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    mainResource: ResourceInfoCommonType;
    productId?: string;
};

/**
 * 查询主体下全部类型资源——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {IResourceBaseCommonType[]} 记录
 */
export type GetMainResourceResType = {
    totalCount: number;
    records: IResourceBaseCommonType[];
};

/**
 * 查询主体下资源——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params mainResources {ResourceInfoCommonType[]} 主体资源集合 （必填）
 * @params type {string} 资源类型 （必填）
 * @params dataHandleType {DataHandleTypeCommonType} 数据处理类型
 * @params productId {string} 产品ID
 */
export type GetSingleResourceReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    mainResources: ResourceInfoCommonType[];
    type: string;
    dataHandleType?: DataHandleTypeCommonType;
    productId?: string;
};

/**
 * 查询主体下资源——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {IResourceBaseCommonType[]} 记录
 */
export type GetSingleResourceResType = {
    totalCount: number;
    records: IResourceBaseCommonType[];
};

/**
 * 资源搜索——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params mainResources {ResourceInfoCommonType[]} 主体资源集合 （必填）
 * @params type {string} 资源类型 （必填）
 * @params dataHandleType {DataHandleTypeCommonType} 数据处理类型
 * @params productId {string} 产品ID
 * @params keyword {string} 资源类型
 * @params prefixAreaCodes {any[]} 行政区域码前缀集合
 */
export type SearchResourceReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    mainResources: ResourceInfoCommonType[];
    type: string;
    dataHandleType?: DataHandleTypeCommonType;
    productId?: string;
    keyword?: string;
    prefixAreaCodes?: any[];
};

/**
 * 资源搜索——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {IResourceBaseCommonType[]} 记录
 */
export type SearchResourceResType = {
    totalCount: number;
    records: IResourceBaseCommonType[];
};

/**
 * 主体绑定事件类型组——请求参数类型定义
 * @headers X-version {string}
 * @params mainResource {MainResourceInCommonType} 主体资源【不存在主体资源会自动创建】 （必填）
 * @params eventTypeGroupRelationships {EventTypeGroupRelationshipCommonType[]} 事件类型组操作集合
 */
export type BindEventTypeGroupReqType = {
    'X-version'?: string;
    mainResource: MainResourceInCommonType;
    eventTypeGroupRelationships?: EventTypeGroupRelationshipCommonType[];
};

/**
 * 主体绑定告警类型——请求参数类型定义
 * @headers X-version {string}
 * @params mainResource {MainResourceInCommonType} 主体资源【不存在主体资源会自动创建】 （必填）
 * @params alarmTypeRelationships {AlarmTypeRelationshipCommonType[]} 告警类型操作集合
 */
export type BindAlarmTypeReqType = {
    'X-version'?: string;
    mainResource: MainResourceInCommonType;
    alarmTypeRelationships?: AlarmTypeRelationshipCommonType[];
};

/**
 * 资源关系修正——请求参数类型定义
 * @headers X-version {string}
 */
export type FixRelationshipDataReqType = {
    'X-version'?: string;
};

/**
 * 获取指定角色Id权限角色成员数据列表——请求参数类型定义
 * @params role {string} 角色Id （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetMembersByRoleReqType = {
    role: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取指定角色Id权限角色成员数据列表——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {RoleMemberOutCommonType[]} 记录
 */
export type GetMembersByRoleResType = {
    totalCount: number;
    records: RoleMemberOutCommonType[];
};

/**
 * 获取指定角色Id权限组织架构数据列表——请求参数类型定义
 * @params role {string} 角色Id （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetOrganizationsByRoleReqType = {
    role: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取指定角色Id权限组织架构数据列表——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {RoleOrganizationOutCommonType[]} 记录
 * @params hasAllDataPermission {boolean} 是否有数据全权限
 * @params isAllDataPermissionFalsify {boolean} 全权限数据是否被篡改(当为全权限时有效)
 */
export type GetOrganizationsByRoleResType = {
    totalCount: number;
    records: RoleOrganizationOutCommonType[];
    hasAllDataPermission: boolean;
    isAllDataPermissionFalsify: boolean;
};

/**
 * 获取指定角色Id权限行政区划数据列表——请求参数类型定义
 * @params role {string} 角色Id （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetDistrictsByRoleReqType = {
    role: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取指定角色Id权限行政区划数据列表——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {RoleDistrictOutCommonType[]} 记录
 * @params hasAllDataPermission {boolean} 是否有数据全权限
 * @params isAllDataPermissionFalsify {boolean} 全权限数据是否被篡改(当为全权限时有效)
 */
export type GetDistrictsByRoleResType = {
    totalCount: number;
    records: RoleDistrictOutCommonType[];
    hasAllDataPermission: boolean;
    isAllDataPermissionFalsify: boolean;
};

/**
 * 获取指定角色Id权限监控组数据列表——请求参数类型定义
 * @params role {string} 角色Id （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetCameraGroupsByRoleReqType = {
    role: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取指定角色Id权限监控组数据列表——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {RoleCameraGroupsOutCommonType[]} 记录
 * @params hasAllDataPermission {boolean} 是否有数据全权限
 * @params isAllDataPermissionFalsify {boolean} 全权限数据是否被篡改(当为全权限时有效)
 */
export type GetCameraGroupsByRoleResType = {
    totalCount: number;
    records: RoleCameraGroupsOutCommonType[];
    hasAllDataPermission: boolean;
    isAllDataPermissionFalsify: boolean;
};

/**
 * 绑定批量组织架构下用户到指定的角色——请求参数类型定义
 * @params role {string}  （必填）
 * @headers X-version {string}
 * @params memberIds {any[]} 成员Id集合 （必填）
 * @params departmentIds {any[]} 部门成员Id集合 （必填）
 */
export type BatchAddRoleReqType = {
    role: string;
    'X-version'?: string;
    memberIds: any[];
    departmentIds: any[];
};

/**
 * 搜索协议——请求参数类型定义
 * @params scene {string} 场景 （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetAggsSchemesReqType = {
    scene: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 搜索协议——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {SchemeExtensionOutCommonType[]} 记录
 */
export type GetAggsSchemesResType = {
    totalCount: number;
    records: SchemeExtensionOutCommonType[];
};

/**
 * 协议key范围值查询——请求参数类型定义
 * @params Key {string} 协议Key （必填）
 * @params keyword {string} 关键词搜索
 * @params scene {string} 场景 （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetRangeValuesReqType = {
    Key: string;
    keyword?: string;
    scene: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 协议key范围值查询——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {RangeValueCommonType[]} 记录
 */
export type GetRangeValuesResType = {
    totalCount: number;
    records: RangeValueCommonType[];
};

/**
 * 搜索（联系人、组、监控、视频会议终端、设备终端）——请求参数类型定义
 * @params Keyword {string} 关键词 （必填）
 * @params AssetTypeIds {any[]} 查询资产类型ID集合
 * @params Limit {number} 搜索数量范围(单一资源和群组资源数量不共享) 默认：100
 * @headers X-version {string}
 */
export type QueryResourceReqType = {
    Keyword: string;
    AssetTypeIds?: any[];
    Limit?: number;
    'X-version'?: string;
};

/**
 * 搜索（联系人、组、监控、视频会议终端、设备终端）——响应参数类型定义
 * @params resources {SingleResourceOutReqCommonType} 人员列表
 * @params resourceGroups {GroupResourceOutReqCommonType} 组列表
 */
export type QueryResourceResType = {
    resources: SingleResourceOutReqCommonType;
    resourceGroups: GroupResourceOutReqCommonType;
};

/**
 * 获取所有状态下的事件总数——请求参数类型定义
 * @headers X-version {string}
 */
export type GetEventCountReqType = {
    'X-version'?: string;
};

/**
 * 获取所有状态下的事件总数——响应参数类型定义
 * @params todayFinishedEventCount {string} 今日已完成事件
 * @params finishedEventCount {string} 结束事件
 * @params notStartedEventCount {string} 未开始事件
 * @params processingEventCount {string} 处理中事件
 */
export type GetEventCountResType = {
    todayFinishedEventCount: string;
    finishedEventCount: string;
    notStartedEventCount: string;
    processingEventCount: string;
};

/**
 * 获取资源统计数量——请求参数类型定义
 * @params BeginTime {string} 开始时间
 * @params EndTime {string} 结束时间
 * @params AreaCode {string} 行政区域码，查指定区域的统计（不包含下级），如AreaCode只查深圳的统计（不包含下级南山统计）
 * @params PrefixAreaCodes {any[]} 行政区域码前缀，查询包括下级的统计，AreaCode，PrefixAreaCodes都传以AreaCode为准
 * @headers X-version {string}
 */
export type GetResourceCountReqType = {
    BeginTime?: string;
    EndTime?: string;
    AreaCode?: string;
    PrefixAreaCodes?: any[];
    'X-version'?: string;
};

/**
 * 获取资源统计数量——响应参数类型定义
 * @params alarmAmount {number} 告警数量
 * @params cameraAmount {number} 监控数量
 * @params eventAmount {number} 事件数量
 * @params multimediaTransferAmount {number} 拍传数量
 * @params alertAmount {number} APTS 告警数量
 * @params monitorDeviceCounts {MonitorDeviceCountOutCommonType[]} 监测设备终端统计
 */
export type GetResourceCountResType = {
    alarmAmount: number;
    cameraAmount: number;
    eventAmount: number;
    multimediaTransferAmount: number;
    alertAmount: number;
    monitorDeviceCounts: MonitorDeviceCountOutCommonType[];
};

/**
 * 按行政区域统计终端——请求参数类型定义
 * @headers X-version {string}
 * @params areaCodes {any[]} 行政区域【包含下级】 （必填）
 * @params terminalType {TerminalTypeCommonType} 终端类型
 */
export type AggsGetTerminalByAreaReqType = {
    'X-version'?: string;
    areaCodes: any[];
    terminalType?: TerminalTypeCommonType;
};

/**
 * 按行政区域统计终端——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AreaCodeStatisticsOutCommonType[]} 记录
 */
export type AggsGetTerminalByAreaResType = {
    totalCount: number;
    records: AreaCodeStatisticsOutCommonType[];
};

/**
 * 按行政区域统计第三方平台——请求参数类型定义
 * @headers X-version {string}
 * @params areaCodes {any[]} 行政区域【包含下级】 （必填）
 */
export type AggsGetPlatformByAreaReqType = {
    'X-version'?: string;
    areaCodes: any[];
};

/**
 * 按行政区域统计第三方平台——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AreaCodeStatisticsOutCommonType[]} 记录
 */
export type AggsGetPlatformByAreaResType = {
    totalCount: number;
    records: AreaCodeStatisticsOutCommonType[];
};

/**
 * 资产总览——请求参数类型定义
 * @headers X-version {string}
 * @params platformId {string} 分级id
 * @params prefixAreaCodes {any[]} 行政区域码前缀
 * @params ignoreOtherPlatform {string} 告警：忽略其他平台
 */
export type GetAssetOverviewReqType = {
    'X-version'?: string;
    platformId?: string;
    prefixAreaCodes?: any[];
    ignoreOtherPlatform?: string;
};

/**
 * 资产总览——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {OverviewOutCommonType[]} 记录
 */
export type GetAssetOverviewResType = {
    totalCount: number;
    records: OverviewOutCommonType[];
};

/**
 * 客户端总览——请求参数类型定义
 * @headers X-version {string}
 * @params platformId {string} 分级id
 * @params prefixAreaCodes {any[]} 行政区域码前缀
 */
export type AggsGetClientOverviewReqType = {
    'X-version'?: string;
    platformId?: string;
    prefixAreaCodes?: any[];
};

/**
 * 客户端总览——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ClientOverviewOutCommonType[]} 记录
 */
export type AggsGetClientOverviewResType = {
    totalCount: number;
    records: ClientOverviewOutCommonType[];
};

/**
 * 终端总览——请求参数类型定义
 * @headers X-version {string}
 * @params platformId {string} 分级id
 * @params prefixAreaCodes {any[]} 行政区域码前缀
 */
export type GetTerminalOverviewReqType = {
    'X-version'?: string;
    platformId?: string;
    prefixAreaCodes?: any[];
};

/**
 * 终端总览——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TerminalOverviewOutCommonType[]} 记录
 */
export type GetTerminalOverviewResType = {
    totalCount: number;
    records: TerminalOverviewOutCommonType[];
};

/**
 * 周边设施按根图层聚合统计——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params layerIds {any[]} 图层ID
 * @params center {CoordinateCommonType} 圆心 （必填）
 * @params radius {number} 半径（单位米） （必填）
 */
export type GetSurroundFacilitiesTotalReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    layerIds?: any[];
    center: CoordinateCommonType;
    radius: number;
};

/**
 * 周边设施按根图层聚合统计——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {MergenceLayerStatisticsOutCommonType[]} 记录
 */
export type GetSurroundFacilitiesTotalResType = {
    totalCount: number;
    records: MergenceLayerStatisticsOutCommonType[];
};

/**
 * 图层资源统计——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params productId {string} 产品ID（项目）
 * @params path {string} 路径，默认根节点
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params prefixAreaCodes {any[]} 行政区域码前缀，查询包括下级的统计
 */
export type GetLayerResourceTotalReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    productId?: string;
    path?: string;
    startTime?: string;
    endTime?: string;
    prefixAreaCodes?: any[];
};

/**
 * 图层资源统计——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayerResourceStatisticsOutCommonType[]} 记录
 */
export type GetLayerResourceTotalResType = {
    totalCount: number;
    records: LayerResourceStatisticsOutCommonType[];
};

/**
 * 批量查询图层资源统计（支持资源关系）——请求参数类型定义
 * @headers X-version {string}
 * @params productId {string} 产品ID（项目）
 * @params paths {any[]} 批量节点路径
 * @params minResource {MainResourceInCommonType} 主体资源
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params prefixAreaCodes {any[]} 行政区域码前缀，查询包括下级的统计
 */
export type BatchGetResourceStatisticalReqType = {
    'X-version'?: string;
    productId?: string;
    paths?: any[];
    minResource?: MainResourceInCommonType;
    startTime?: string;
    endTime?: string;
    prefixAreaCodes?: any[];
};

/**
 * 批量查询图层资源统计（支持资源关系）——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayerResourceStatisticsOutCommonType[]} 记录
 */
export type BatchGetResourceStatisticalResType = {
    totalCount: number;
    records: LayerResourceStatisticsOutCommonType[];
};

/**
 * 周边设施按图层层级统计——请求参数类型定义
 * @headers X-version {string}
 * @params productId {string} 项目id （必填）
 * @params groupKey {string} 分类
 * @params layerIds {any[]} 图层Id列表
 * @params keyword {string} 关键字
 * @params center {CoordinateCommonType} 圆心 （必填）
 * @params radius {number} 半径（单位米） （必填）
 */
export type GetAreaLayersTotalReqType = {
    'X-version'?: string;
    productId: string;
    groupKey?: string;
    layerIds?: any[];
    keyword?: string;
    center: CoordinateCommonType;
    radius: number;
};

/**
 * 周边设施按图层层级统计——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {FacilityStatisticsOutCommonType[]} 记录
 */
export type GetAreaLayersTotalResType = {
    totalCount: number;
    records: FacilityStatisticsOutCommonType[];
};

/**
 * 根据行政区域获取监控统计数据——请求参数类型定义
 * @headers X-version {string}
 * @params areaCodes {any[]} 行政区域【包含下级】 （必填）
 */
export type AggsGetCameraStatisticsByAreaReqType = {
    'X-version'?: string;
    areaCodes: any[];
};

/**
 * 根据行政区域获取监控统计数据——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AreaCodeStatisticsOutCommonType[]} 记录
 */
export type AggsGetCameraStatisticsByAreaResType = {
    totalCount: number;
    records: AreaCodeStatisticsOutCommonType[];
};

/**
 * 资产类型统计——请求参数类型定义
 * @headers X-version {string}
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params functionTypes {AssetFunctionTypesCommonType} 功能分类
 * @params assetType {AssetTypeCommonType} 一级类型
 * @params parentId {string} 父级ID
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 * @params isIncludeConferenceTerminal {boolean} 是否包含视频会议终端
 */
export type AggsGetAssetTypeStatisticsReqType = {
    'X-version'?: string;
    prefixAreaCodes?: any[];
    functionTypes?: AssetFunctionTypesCommonType;
    assetType?: AssetTypeCommonType;
    parentId?: string;
    isMatchNullAreaCode?: boolean;
    isIncludeConferenceTerminal?: boolean;
};

/**
 * 资产类型统计——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AggregateTypeCountOutCommonType[]} 记录
 */
export type AggsGetAssetTypeStatisticsResType = {
    totalCount: number;
    records: AggregateTypeCountOutCommonType[];
};

/**
 * 创建定时保活任务——请求参数类型定义
 * @headers X-version {string}
 * @params jobName {string} 定时任务Name （必填）
 * @params businessId {string} 需要保活的组Id （必填）
 * @params type {DetectionTypeCommonType} 类型0-监控1-标签
 * @params keepAliveTime {string} 保活时长 单位分钟 （必填）
 * @params isRecording {boolean} 是否录像
 * @params owners {OwnerCommonType[]} 负责人
 * @params notificationType {number} 通知类型 （必填）
 * @params scheduleTask {ScheduleTaskCommonType} 定时任务 （必填）
 */
export type AddStreamKeepAliveJobsReqType = {
    'X-version'?: string;
    jobName: string;
    businessId: string;
    type?: DetectionTypeCommonType;
    keepAliveTime: string;
    isRecording?: boolean;
    owners?: OwnerCommonType[];
    notificationType: number;
    scheduleTask: ScheduleTaskCommonType;
};

/**
 * 创建定时保活任务——响应参数类型定义
 * @params jobId {string} 定时任务Id
 * @params status {StreamKeepAliveJobStatusCommonType} 状态0-未运行1-运行中2-已结束
 * @params jobName {string} 任务名称
 * @params businessId {string} 业务名称监控组Id或者标签Id
 * @params businessName {string} 业务名称
 * @params cameraTotal {number} 监控数量,保活的监控数量
 * @params createTime {string} 创建时间
 * @params modifyTime {string} 修改时间
 * @params jobMode {JobModeCommonType} 定时任务模式
 * @params cron {string} Cron表达式
 * @params nextExecuteTime {string} 下次执行时间
 * @params beginTime {string} 定时任务开始时间
 * @params endTime {string} 定时任务结束时间
 * @params owners {OwnerCommonType[]} 负责人
 * @params notificationType {number} 通知类型
 * @params keepAliveTime {string} 保活时长
 * @params isRecording {boolean} 是否录制
 * @params executionsTotal {number} 执行总数
 * @params retryTotal {number} 重试总数
 * @params successesTotal {number} 保活成功监控总数
 * @params failTotal {number} 保活失败监控总数
 * @params type {DetectionTypeCommonType} 类型0-监控1-标签
 */
export type AddStreamKeepAliveJobsResType = {
    jobId: string;
    status: StreamKeepAliveJobStatusCommonType;
    jobName: string;
    businessId: string;
    businessName: string;
    cameraTotal: number;
    createTime: string;
    modifyTime: string;
    jobMode: JobModeCommonType;
    cron: string;
    nextExecuteTime: string;
    beginTime: string;
    endTime: string;
    owners: OwnerCommonType[];
    notificationType: number;
    keepAliveTime: string;
    isRecording: boolean;
    executionsTotal: number;
    retryTotal: number;
    successesTotal: number;
    failTotal: number;
    type: DetectionTypeCommonType;
};

/**
 * 获取保活任务列表——请求参数类型定义
 * @params Keyword {string} 关键字，作业的名称
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type AggsGetStreamKeepAliveJobsReqType = {
    Keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取保活任务列表——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {StreamKeepAliveJobDetailOutCommonType[]} 记录
 */
export type AggsGetStreamKeepAliveJobsResType = {
    totalCount: number;
    records: StreamKeepAliveJobDetailOutCommonType[];
};

/**
 * 获取指定保活任务——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type AggsGetStreamKeepAliveJobByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取指定保活任务——响应参数类型定义
 * @params jobId {string} 定时任务Id
 * @params status {StreamKeepAliveJobStatusCommonType} 状态0-未运行1-运行中2-已结束
 * @params jobName {string} 任务名称
 * @params businessId {string} 业务名称监控组Id或者标签Id
 * @params businessName {string} 业务名称
 * @params cameraTotal {number} 监控数量,保活的监控数量
 * @params createTime {string} 创建时间
 * @params modifyTime {string} 修改时间
 * @params jobMode {JobModeCommonType} 定时任务模式
 * @params cron {string} Cron表达式
 * @params nextExecuteTime {string} 下次执行时间
 * @params beginTime {string} 定时任务开始时间
 * @params endTime {string} 定时任务结束时间
 * @params owners {OwnerCommonType[]} 负责人
 * @params notificationType {number} 通知类型
 * @params keepAliveTime {string} 保活时长
 * @params isRecording {boolean} 是否录制
 * @params executionsTotal {number} 执行总数
 * @params retryTotal {number} 重试总数
 * @params successesTotal {number} 保活成功监控总数
 * @params failTotal {number} 保活失败监控总数
 * @params type {DetectionTypeCommonType} 类型0-监控1-标签
 */
export type AggsGetStreamKeepAliveJobByIdResType = {
    jobId: string;
    status: StreamKeepAliveJobStatusCommonType;
    jobName: string;
    businessId: string;
    businessName: string;
    cameraTotal: number;
    createTime: string;
    modifyTime: string;
    jobMode: JobModeCommonType;
    cron: string;
    nextExecuteTime: string;
    beginTime: string;
    endTime: string;
    owners: OwnerCommonType[];
    notificationType: number;
    keepAliveTime: string;
    isRecording: boolean;
    executionsTotal: number;
    retryTotal: number;
    successesTotal: number;
    failTotal: number;
    type: DetectionTypeCommonType;
};

/**
 * 修改定时保活任务——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params jobName {string} 定时任务Name （必填）
 * @params businessId {string} 需要保活的组Id （必填）
 * @params type {DetectionTypeCommonType} 类型0-监控1-标签
 * @params keepAliveTime {string} 保活时长 单位分钟 （必填）
 * @params isRecording {boolean} 是否录像
 * @params owners {OwnerCommonType[]} 负责人
 * @params notificationType {number} 通知类型 （必填）
 * @params scheduleTask {ScheduleTaskCommonType} 定时任务 （必填）
 */
export type AggsEditStreamKeepAliveJobReqType = {
    id: string;
    'X-version'?: string;
    jobName: string;
    businessId: string;
    type?: DetectionTypeCommonType;
    keepAliveTime: string;
    isRecording?: boolean;
    owners?: OwnerCommonType[];
    notificationType: number;
    scheduleTask: ScheduleTaskCommonType;
};

/**
 * 删除定时保活任务——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type AggsDeleteStreamKeepAliveJobReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 删除定时保活任务——响应参数类型定义
 * @params jobId {string} 定时任务Id
 * @params status {StreamKeepAliveJobStatusCommonType} 状态0-未运行1-运行中2-已结束
 * @params jobName {string} 任务名称
 * @params businessId {string} 业务名称监控组Id或者标签Id
 * @params businessName {string} 业务名称
 * @params cameraTotal {number} 监控数量,保活的监控数量
 * @params createTime {string} 创建时间
 * @params modifyTime {string} 修改时间
 * @params jobMode {JobModeCommonType} 定时任务模式
 * @params cron {string} Cron表达式
 * @params nextExecuteTime {string} 下次执行时间
 * @params beginTime {string} 定时任务开始时间
 * @params endTime {string} 定时任务结束时间
 * @params owners {OwnerCommonType[]} 负责人
 * @params notificationType {number} 通知类型
 * @params keepAliveTime {string} 保活时长
 * @params isRecording {boolean} 是否录制
 * @params executionsTotal {number} 执行总数
 * @params retryTotal {number} 重试总数
 * @params successesTotal {number} 保活成功监控总数
 * @params failTotal {number} 保活失败监控总数
 * @params type {DetectionTypeCommonType} 类型0-监控1-标签
 */
export type AggsDeleteStreamKeepAliveJobResType = {
    jobId: string;
    status: StreamKeepAliveJobStatusCommonType;
    jobName: string;
    businessId: string;
    businessName: string;
    cameraTotal: number;
    createTime: string;
    modifyTime: string;
    jobMode: JobModeCommonType;
    cron: string;
    nextExecuteTime: string;
    beginTime: string;
    endTime: string;
    owners: OwnerCommonType[];
    notificationType: number;
    keepAliveTime: string;
    isRecording: boolean;
    executionsTotal: number;
    retryTotal: number;
    successesTotal: number;
    failTotal: number;
    type: DetectionTypeCommonType;
};

/**
 * 通过任务Id获取任务——请求参数类型定义
 * @params id {string} 任务Id （必填）
 * @headers X-version {string}
 */
export type AggsGetTasksByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 通过任务Id获取任务——响应参数类型定义
 * @params id {string} 任务Id
 * @params name {string} 任务名
 * @params description {string} 任务详情
 * @params associateEventId {string} 任务关联事件
 * @params parentId {string} 父任务 Id
 * @params type {TaskTypeCommonType} 任务类型
 * @params state {TaskStateCommonType} 任务状态
 * @params group {GroupInfoCommonType} 组对象
 * @params groupMembers {ContactDetailInfoCommonType[]} 任务组成员
 * @params destination {TaskDestinationCommonType} 任务目的地
 * @params expectStartedTime {string} 预计开始时间
 * @params actualStartedTime {string} 实际开始时间
 * @params expectFinishedTime {string} 预计结束时间
 * @params actualFinishedTime {string} 实际结束时间
 * @params createdTime {string} 任务创建时间
 * @params order {number} 任务顺序
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params updateTime {string} 更新时间
 */
export type AggsGetTasksByIdResType = {
    id: string;
    name: string;
    description: string;
    associateEventId: string;
    parentId: string;
    type: TaskTypeCommonType;
    state: TaskStateCommonType;
    group: GroupInfoCommonType;
    groupMembers: ContactDetailInfoCommonType[];
    destination: TaskDestinationCommonType;
    expectStartedTime: string;
    actualStartedTime: string;
    expectFinishedTime: string;
    actualFinishedTime: string;
    createdTime: string;
    order: number;
    platformId: string;
    resourceId: string;
    updateTime: string;
};

/**
 * 通过事件ID查询所有任务——请求参数类型定义
 * @params eventId {string} 事件ID （必填）
 * @params isRoot {number} 是否查父节点，0为查出所有，1为查出父任务，默认为0
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type AggsGetTasksByEventIdReqType = {
    eventId: string;
    isRoot?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 通过事件ID查询所有任务——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TaskDetailOutCommonType[]} 记录
 */
export type AggsGetTasksByEventIdResType = {
    totalCount: number;
    records: TaskDetailOutCommonType[];
};

/**
 * 模糊查询任务——请求参数类型定义
 * @params keyword {string} 模糊匹配关键字
 * @params EventId {string} 事件ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type QueryTasksReqType = {
    keyword?: string;
    EventId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 模糊查询任务——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TaskEntityOutCommonType[]} 记录
 */
export type QueryTasksResType = {
    totalCount: number;
    records: TaskEntityOutCommonType[];
};

/**
 * 通过父任务ID查询子任务——请求参数类型定义
 * @params id {string} 父任务ID （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetChildrenTasksByIdReqType = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 通过父任务ID查询子任务——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TaskEntityOutCommonType[]} 记录
 */
export type GetChildrenTasksByIdResType = {
    totalCount: number;
    records: TaskEntityOutCommonType[];
};

/**
 * 获取任务关联相关数据——请求参数类型定义
 * @params id {string} id （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetTaskAssociateDataReqType = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取任务关联相关数据——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TaskAssociatedDataCollectOutCommonType[]} 记录
 */
export type GetTaskAssociateDataResType = {
    totalCount: number;
    records: TaskAssociatedDataCollectOutCommonType[];
};

/**
 * 搜索终端——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params resourceRelationship {ResourceRelationshipTypeQueryCommonType} 资源关系
 * @params terminalIds {any[]} 终端ID
 * @params keyword {string} 关键词
 * @params terminalType {TerminalTypeCommonType} 终端类型
 * @params status {AssetStatusCommonType} 资产状态 1已连接，2未连接
 * @params networkID {string} 所属网络
 * @params relateTypeId {string} 关联类型ID
 * @params relateTypeIds {any[]} 关联类型ID集合查询
 * @params sourceId {string} 来源ID
 * @params groupId {string} 组ID
 * @params isContainMainResource {boolean} 返回结果是否包含主体资源
 * @params prefixAreaCodes {any[]} 行政区域码前缀集合
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 */
export type AggsSearchTerminalsReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    resourceRelationship?: ResourceRelationshipTypeQueryCommonType;
    terminalIds?: any[];
    keyword?: string;
    terminalType?: TerminalTypeCommonType;
    status?: AssetStatusCommonType;
    networkID?: string;
    relateTypeId?: string;
    relateTypeIds?: any[];
    sourceId?: string;
    groupId?: string;
    isContainMainResource?: boolean;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
};

/**
 * 搜索终端——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TerminalDetailsOutCommonType[]} 记录
 */
export type AggsSearchTerminalsResType = {
    totalCount: number;
    records: TerminalDetailsOutCommonType[];
};

/**
 * 搜索带监控终端——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params resourceRelationship {ResourceRelationshipTypeQueryCommonType} 资源关系
 * @params terminalIds {any[]} 终端ID
 * @params keyword {string} 关键词
 * @params terminalType {TerminalTypeCommonType} 终端类型
 * @params status {AssetStatusCommonType} 资产状态 1已连接，2未连接
 * @params networkID {string} 所属网络
 * @params relateTypeId {string} 关联类型ID
 * @params relateTypeIds {any[]} 关联类型ID集合查询
 * @params sourceId {string} 来源ID
 * @params groupId {string} 组ID
 * @params isContainMainResource {boolean} 返回结果是否包含主体资源
 * @params prefixAreaCodes {any[]} 行政区域码前缀集合
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 */
export type SearchCameraTerminalsReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    resourceRelationship?: ResourceRelationshipTypeQueryCommonType;
    terminalIds?: any[];
    keyword?: string;
    terminalType?: TerminalTypeCommonType;
    status?: AssetStatusCommonType;
    networkID?: string;
    relateTypeId?: string;
    relateTypeIds?: any[];
    sourceId?: string;
    groupId?: string;
    isContainMainResource?: boolean;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
};

/**
 * 搜索带监控终端——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {CameraTerminalDetailsOutCommonType[]} 记录
 */
export type SearchCameraTerminalsResType = {
    totalCount: number;
    records: CameraTerminalDetailsOutCommonType[];
};

/**
 * 获取资产拓扑——请求参数类型定义
 * @params platformId {string} 分级平台ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type AggsGetTopologyReqType = {
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取资产拓扑——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TopologyOutCommonType[]} 记录
 */
export type AggsGetTopologyResType = {
    totalCount: number;
    records: TopologyOutCommonType[];
};
