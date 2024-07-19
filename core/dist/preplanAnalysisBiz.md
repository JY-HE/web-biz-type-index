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
 * 设施实体
 * @params resourceId {string} 资源Id
 * @params layerId {string} 图层Id
 * @params layerDetail {LayerEntityOutCommonType} 图层信息
 * @params description {string} 详情
 * @params owner {string} 设施负责人
 * @params number {string} 联系电话
 * @params geoFilePath {string} 重点区域的资源文件路径
 * @params address {string} 设施地址
 * @params extension {any} 扩展项
 * @params areaCode {string} 行政区域代码
 * @params platformId {string} 资源所属平台Id
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params id {string} ID
 * @params name {string} 名称
 */
type FacilityOutCommonType = {
    resourceId?: string;
    layerId?: string;
    layerDetail?: LayerEntityOutCommonType;
    description?: string;
    owner?: string;
    number?: string;
    geoFilePath?: string;
    address?: string;
    extension?: any;
    areaCode?: string;
    platformId?: string;
    longitude?: number;
    latitude?: number;
    id?: string;
    name?: string;
};

/**
 * 告警设施输出
 * @params facilityOut {FacilityOutCommonType} 设施实体
 * @params distance {number} 与告警距离
 */
type PreplanFacilityOutCommonType = {
    facilityOut?: FacilityOutCommonType;
    distance?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {PreplanFacilityOutCommonType[]} 记录
 */
type PreplanFacilityOutReqCommonType = {
    totalCount?: number;
    records?: PreplanFacilityOutCommonType[];
};

/**
 * 坐标点
 * @params longitude {number} 经度（正:东经 负:西经）
 * @params latitude {number} 纬度（正:北纬 负:南纬）
 */
type CoordinateCommonType = {
    longitude?: number;
    latitude?: number;
};

/**
 * 事件预案分析图层统计结果
 * @params layerId {string} 图层id
 * @params layerName {string} 图层名称
 * @params facilitiesTotal {number} 图层对应的设施资源总数
 * @params subordinateLayersTotal {number} 下级图层总数
 * @params bottomRight {CoordinateCommonType} 左上角经纬度
 * @params upLeft {CoordinateCommonType} 右下角经纬度
 * @params subordinateLayers {EventFacilitiesStatisticsOutCommonType[]} 下级图层信息
 */
type EventFacilitiesStatisticsOutCommonType = {
    layerId?: string;
    layerName?: string;
    facilitiesTotal?: number;
    subordinateLayersTotal?: number;
    bottomRight?: CoordinateCommonType;
    upLeft?: CoordinateCommonType;
    subordinateLayers?: EventFacilitiesStatisticsOutCommonType[];
};

/**
 * 告警预案分析图层统计结果
 * @params layerId {string} 图层id
 * @params layerName {string} 图层名称
 * @params facilitiesTotal {number} 图层对应的设施资源总数
 * @params subordinateLayersTotal {number} 下级图层总数
 * @params bottomRight {CoordinateCommonType} 左上角经纬度
 * @params upLeft {CoordinateCommonType} 右下角经纬度
 * @params subordinateLayers {EventFacilitiesStatisticsOutCommonType[]} 下级图层信息
 */
type AlarmFacilitiesStatisticsOutCommonType = {
    layerId?: string;
    layerName?: string;
    facilitiesTotal?: number;
    subordinateLayersTotal?: number;
    bottomRight?: CoordinateCommonType;
    upLeft?: CoordinateCommonType;
    subordinateLayers?: EventFacilitiesStatisticsOutCommonType[];
};

/**
 * 模型预案分析统计
 * @params points {CoordinateCommonType[]} 多边形经纬度
 * @params eventId {string} 事件ID
 * @params radius {number} 半径范围
 * @params layerName {string} 图层名称
 */
type ModelEventFacilitesStatisticsInCommonType = {
    points?: CoordinateCommonType[];
    eventId: string;
    radius?: number;
    layerName: string;
};

----

/**
 * 获取危险设施——请求参数类型定义
 * @params AlarmId {string} 告警ID （必填）
 * @params Radius {number} 半径范围
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetDangerousSourcesByAlarmIdReqType = {
    AlarmId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * 获取危险设施——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PreplanFacilityOutCommonType[]} 记录
 */
export type GetDangerousSourcesByAlarmIdResType = {
    totalCount: number;
    records: PreplanFacilityOutCommonType[];
};

/**
 * 获取重点保护对象——请求参数类型定义
 * @params AlarmId {string} 告警ID （必填）
 * @params Radius {number} 半径范围
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetKeyProtectionsByAlarmIdReqType = {
    AlarmId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * 获取重点保护对象——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PreplanFacilityOutCommonType[]} 记录
 */
export type GetKeyProtectionsByAlarmIdResType = {
    totalCount: number;
    records: PreplanFacilityOutCommonType[];
};

/**
 * 获取避难场所——请求参数类型定义
 * @params AlarmId {string} 告警ID （必填）
 * @params Radius {number} 半径范围
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetSheltersByAlarmIdReqType = {
    AlarmId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * 获取避难场所——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PreplanFacilityOutCommonType[]} 记录
 */
export type GetSheltersByAlarmIdResType = {
    totalCount: number;
    records: PreplanFacilityOutCommonType[];
};

/**
 * 获取应急物资——请求参数类型定义
 * @params AlarmId {string} 告警ID （必填）
 * @params Radius {number} 半径范围
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetWarehousesByAlarmIdReqType = {
    AlarmId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * 获取应急物资——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PreplanFacilityOutCommonType[]} 记录
 */
export type GetWarehousesByAlarmIdResType = {
    totalCount: number;
    records: PreplanFacilityOutCommonType[];
};

/**
 * 获取应急设施——请求参数类型定义
 * @params AlarmId {string} 告警ID （必填）
 * @params Radius {number} 半径范围
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetEmergencyFacilitiesByAlarmIdReqType = {
    AlarmId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * 获取应急设施——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PreplanFacilityOutCommonType[]} 记录
 */
export type GetEmergencyFacilitiesByAlarmIdResType = {
    totalCount: number;
    records: PreplanFacilityOutCommonType[];
};

/**
 * 获取人力资源——请求参数类型定义
 * @params AlarmId {string} 告警ID （必填）
 * @params Radius {number} 半径范围
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetManpowerResourcesByAlarmIdReqType = {
    AlarmId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * 获取人力资源——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PreplanFacilityOutCommonType[]} 记录
 */
export type GetManpowerResourcesByAlarmIdResType = {
    totalCount: number;
    records: PreplanFacilityOutCommonType[];
};

/**
 * 获取医疗资源——请求参数类型定义
 * @params AlarmId {string} 告警ID （必填）
 * @params Radius {number} 半径范围
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetMedicalResourcesByAlarmIdReqType = {
    AlarmId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * 获取医疗资源——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PreplanFacilityOutCommonType[]} 记录
 */
export type GetMedicalResourcesByAlarmIdResType = {
    totalCount: number;
    records: PreplanFacilityOutCommonType[];
};

/**
 * 获取污染源——请求参数类型定义
 * @params AlarmId {string} 告警ID （必填）
 * @params Radius {number} 半径范围
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetPollutionSourcesByAlarmIdReqType = {
    AlarmId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * 获取污染源——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PreplanFacilityOutCommonType[]} 记录
 */
export type GetPollutionSourcesByAlarmIdResType = {
    totalCount: number;
    records: PreplanFacilityOutCommonType[];
};

/**
 * 通过GroupKey获取告警周边资源——请求参数类型定义
 * @params groupKey {string}  （必填）
 * @params AlarmId {string} 告警ID （必填）
 * @params Radius {number} 半径范围
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetAlarmFacilitiesByGroupKeyReqType = {
    groupKey: string;
    AlarmId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * 通过GroupKey获取告警周边资源——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PreplanFacilityOutCommonType[]} 记录
 */
export type GetAlarmFacilitiesByGroupKeyResType = {
    totalCount: number;
    records: PreplanFacilityOutCommonType[];
};

/**
 * 根据前缀名称匹配到对应预案的图层信息返回树结构——请求参数类型定义
 * @params AlarmId {string} 告警Id （必填）
 * @params Radius {number} 半径范围
 * @params LayerName {string} 图层名称 （必填）
 */
export type GetAlarmFacilitiesStatisticsReqType = {
    AlarmId: string;
    Radius?: number;
    LayerName: string;
};

/**
 * 根据前缀名称匹配到对应预案的图层信息返回树结构——响应参数类型定义
 * @params layerId {string} 图层id
 * @params layerName {string} 图层名称
 * @params facilitiesTotal {number} 图层对应的设施资源总数
 * @params subordinateLayersTotal {number} 下级图层总数
 * @params bottomRight {CoordinateCommonType} 左上角经纬度
 * @params upLeft {CoordinateCommonType} 右下角经纬度
 * @params subordinateLayers {EventFacilitiesStatisticsOutCommonType[]} 下级图层信息
 */
export type GetAlarmFacilitiesStatisticsResType = {
    layerId: string;
    layerName: string;
    facilitiesTotal: number;
    subordinateLayersTotal: number;
    bottomRight: CoordinateCommonType;
    upLeft: CoordinateCommonType;
    subordinateLayers: EventFacilitiesStatisticsOutCommonType[];
};

/**
 * 根据GroupKey查询事件设施——请求参数类型定义
 * @params groupKey {string}  （必填）
 * @params EventId {string} 事件ID （必填）
 * @params Radius {number} 半径范围
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetEventFacilitiesByGroupKeyReqType = {
    groupKey: string;
    EventId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * 根据GroupKey查询事件设施——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PreplanFacilityOutCommonType[]} 记录
 */
export type GetEventFacilitiesByGroupKeyResType = {
    totalCount: number;
    records: PreplanFacilityOutCommonType[];
};

/**
 * DangerousSources——请求参数类型定义
 * @params EventId {string} 事件ID （必填）
 * @params Radius {number} 半径范围
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetDangerousSourcesReqType = {
    EventId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * DangerousSources——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PreplanFacilityOutCommonType[]} 记录
 */
export type GetDangerousSourcesResType = {
    totalCount: number;
    records: PreplanFacilityOutCommonType[];
};

/**
 * KeyProtections——请求参数类型定义
 * @params EventId {string} 事件ID （必填）
 * @params Radius {number} 半径范围
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetKeyProtectionsReqType = {
    EventId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * KeyProtections——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PreplanFacilityOutCommonType[]} 记录
 */
export type GetKeyProtectionsResType = {
    totalCount: number;
    records: PreplanFacilityOutCommonType[];
};

/**
 * Shelters——请求参数类型定义
 * @params EventId {string} 事件ID （必填）
 * @params Radius {number} 半径范围
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetSheltersReqType = {
    EventId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * Shelters——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PreplanFacilityOutCommonType[]} 记录
 */
export type GetSheltersResType = {
    totalCount: number;
    records: PreplanFacilityOutCommonType[];
};

/**
 * Warehouses——请求参数类型定义
 * @params EventId {string} 事件ID （必填）
 * @params Radius {number} 半径范围
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetWarehousesReqType = {
    EventId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * Warehouses——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PreplanFacilityOutCommonType[]} 记录
 */
export type GetWarehousesResType = {
    totalCount: number;
    records: PreplanFacilityOutCommonType[];
};

/**
 * EmergencyFacilities——请求参数类型定义
 * @params EventId {string} 事件ID （必填）
 * @params Radius {number} 半径范围
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetEmergencyFacilitiesReqType = {
    EventId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * EmergencyFacilities——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PreplanFacilityOutCommonType[]} 记录
 */
export type GetEmergencyFacilitiesResType = {
    totalCount: number;
    records: PreplanFacilityOutCommonType[];
};

/**
 * ManpowerResources——请求参数类型定义
 * @params EventId {string} 事件ID （必填）
 * @params Radius {number} 半径范围
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetManpowerResourcesReqType = {
    EventId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * ManpowerResources——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PreplanFacilityOutCommonType[]} 记录
 */
export type GetManpowerResourcesResType = {
    totalCount: number;
    records: PreplanFacilityOutCommonType[];
};

/**
 * MedicalResources——请求参数类型定义
 * @params EventId {string} 事件ID （必填）
 * @params Radius {number} 半径范围
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetMedicalResourcesReqType = {
    EventId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * MedicalResources——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PreplanFacilityOutCommonType[]} 记录
 */
export type GetMedicalResourcesResType = {
    totalCount: number;
    records: PreplanFacilityOutCommonType[];
};

/**
 * 根据前缀名称匹配到对应预案的图层信息返回树结构——请求参数类型定义
 * @params EventId {string} 事件ID （必填）
 * @params Radius {number} 半径范围
 * @params LayerName {string} 图层名称 （必填）
 */
export type GetEventFacilitiesStatisticsReqType = {
    EventId: string;
    Radius?: number;
    LayerName: string;
};

/**
 * 根据前缀名称匹配到对应预案的图层信息返回树结构——响应参数类型定义
 * @params layerId {string} 图层id
 * @params layerName {string} 图层名称
 * @params facilitiesTotal {number} 图层对应的设施资源总数
 * @params subordinateLayersTotal {number} 下级图层总数
 * @params bottomRight {CoordinateCommonType} 左上角经纬度
 * @params upLeft {CoordinateCommonType} 右下角经纬度
 * @params subordinateLayers {EventFacilitiesStatisticsOutCommonType[]} 下级图层信息
 */
export type GetEventFacilitiesStatisticsResType = {
    layerId: string;
    layerName: string;
    facilitiesTotal: number;
    subordinateLayersTotal: number;
    bottomRight: CoordinateCommonType;
    upLeft: CoordinateCommonType;
    subordinateLayers: EventFacilitiesStatisticsOutCommonType[];
};

/**
 * 根据前缀名称匹配到对应预案的图层信息返回树结构排除掉模型分析的区域设施数量——请求参数类型定义
 * @params points {CoordinateCommonType[]} 多边形经纬度
 * @params eventId {string} 事件ID （必填）
 * @params radius {number} 半径范围
 * @params layerName {string} 图层名称 （必填）
 */
export type QueryEventFacilitiesStatisticsReqType = {
    points?: CoordinateCommonType[];
    eventId: string;
    radius?: number;
    layerName: string;
};

/**
 * 根据前缀名称匹配到对应预案的图层信息返回树结构排除掉模型分析的区域设施数量——响应参数类型定义
 * @params layerId {string} 图层id
 * @params layerName {string} 图层名称
 * @params facilitiesTotal {number} 图层对应的设施资源总数
 * @params subordinateLayersTotal {number} 下级图层总数
 * @params bottomRight {CoordinateCommonType} 左上角经纬度
 * @params upLeft {CoordinateCommonType} 右下角经纬度
 * @params subordinateLayers {EventFacilitiesStatisticsOutCommonType[]} 下级图层信息
 */
export type QueryEventFacilitiesStatisticsResType = {
    layerId: string;
    layerName: string;
    facilitiesTotal: number;
    subordinateLayersTotal: number;
    bottomRight: CoordinateCommonType;
    upLeft: CoordinateCommonType;
    subordinateLayers: EventFacilitiesStatisticsOutCommonType[];
};
