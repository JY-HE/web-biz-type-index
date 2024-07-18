
/**
 * 坐标
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
*/
type CoordinateCommonType = {
    longitude: number;
    latitude: number;
}


/**
* 坐标系类型
* 1-WGS84LL
* 3-GCJ02LL
* 5-BD09LL
*/
type CoordinateTypeCommonType =  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 ;


/**
* 上报GPS数据
* @params coordinate {CoordinateCommonType} 坐标
* @params metersPerSecond {number} 速度(米/秒)
* @params direction {number} 方向(取值0-360, 以正北为参考基准)
* @params altitude {number} 海拔高度
* @params address {string} 地址
* @params reportTime {string} 上报时间(UTC)
* @params sourceCoordinateType {CoordinateTypeCommonType} 上报点位坐标系类型1-WGS84LL3-GCJ02LL5-BD09LL
* @params uploadSourceType {number} 上报源类型（0:人员上报类型(默认值)；1:终端资产类型）
*/
type ReportGpsDataCommonType = {
    coordinate: CoordinateCommonType;
    metersPerSecond: number;
    direction: number;
    altitude: number;
    address?: string;
    reportTime?: string;
    sourceCoordinateType?: CoordinateTypeCommonType;
    uploadSourceType?: number;
}


/**
* 异常记录消息结构
* @params id {string} 异常记录ID
* @params text {string} 异常描述文本
* @params happenTime {string} 调用时间
*/
type ExceptionRecordCommonType = {
    id: string;
    text: string;
    happenTime: string;
}


/**
* GPS数据
* @params coordinate {CoordinateCommonType} 坐标
* @params metersPerSecond {number} 速度(米/秒)
* @params direction {number} 方向(取值0-360, 以正北为参考基准)
* @params altitude {number} 海拔高度
* @params address {string} 地址
*/
type GpsDataCommonType = {
    coordinate: CoordinateCommonType;
    metersPerSecond: number;
    direction: number;
    altitude: number;
    address?: string;
}


/**
* 活跃点
* @params deviceId {string} 设备Id
* @params gps {GpsDataCommonType} 设备位置
* @params reportTime {string} 上报时间
* @params uploadSourceType {number} 上报源类型
*/
type ActiveItemCommonType = {
    deviceId: string;
    gps: GpsDataCommonType;
    reportTime: string;
    uploadSourceType: number;
}


/**
* 分页查询响应
* @params totalCount {number} 符合条件的结果总量
* @params items {ActiveItemCommonType[]} 结果集
*/
type ActiveItemResCommonType = {
    totalCount: number;
    items: ActiveItemCommonType[];
}


/**
* 
* @params longitude {number} 经度
* @params latitude {number} 纬度
*/
type HistoryCoordinateCommonType = {
    longitude: number;
    latitude: number;
}


/**
* 
* @params coordinate {HistoryCoordinateCommonType} 坐标
* @params metersPerSecond {number} 速度(米/秒)
* @params direction {number} 方向(取值0-360, 以正北为参考基准)
* @params altitude {number} 海拔高度
* @params address {string} 地址
*/
type HistoryGpsDataCommonType = {
    coordinate: HistoryCoordinateCommonType;
    metersPerSecond: number;
    direction: number;
    altitude: number;
    address?: string;
}


/**
* 历史点
* @params deviceId {string} 设备Id
* @params gps {HistoryGpsDataCommonType} 设备位置
* @params reportTime {string} 上报时间
* @params uploadSourceType {number} 上报源类型
*/
type HistoryItemCommonType = {
    deviceId: string;
    gps: HistoryGpsDataCommonType;
    reportTime: string;
    uploadSourceType: number;
}


/**
* 分页查询响应
* @params totalCount {number} 符合条件的结果总量
* @params items {HistoryItemCommonType[]} 结果集
*/
type HistoryItemResCommonType = {
    totalCount: number;
    items: HistoryItemCommonType[];
}


/**
* 分页查询响应
* @params totalCount {number} 符合条件的结果总量
* @params items {any[]} 结果集
*/
type StringResCommonType = {
    totalCount: number;
    items: any[];
}


/**
* GPS历史轨迹补全请求
* @params deviceId {string} 设备ID
* @params gps {GpsDataCommonType} GPS数据
* @params historyTime {string} 该点应该上报的历史时间
* @params currentTime {string} 客户端当前时间
* @params uploadSourceType {number} 上报源类型0：人员上报类型（默认值），1：资产终端类型
*/
type HistoryGpsUpdateRequestCommonType = {
    deviceId: string;
    gps: GpsDataCommonType;
    historyTime: string;
    currentTime: string;
    uploadSourceType?: number;
}


/**
* 设备项
* @params deviceId {string} 设备Id
* @params uploadSourceType {number} 设备源类型 （0:人员上报源；1:资产终端上报源）0：
*/
type DeviceItemCommonType = {
    deviceId?: string;
    uploadSourceType?: number;
}


/**
* 分页查询响应
* @params totalCount {number} 符合条件的结果总量
* @params items {DeviceItemCommonType[]} 结果集
*/
type DeviceItemResCommonType = {
    totalCount: number;
    items: DeviceItemCommonType[];
}

type UpLeftCommonType = {
    longitude:number;
    latitude:number;
}

type BottomRightCommonType = {
    longitude:number;
    latitude:number;
}

----

/**
* 上报GPS点位——请求参数类型定义
* @params device {string}  （必填）
* @params coordinate {CoordinateCommonType} 坐标 （必填）
* @params metersPerSecond {number} 速度(米/秒) （必填）
* @params direction {number} 方向(取值0-360, 以正北为参考基准) （必填）
* @params altitude {number} 海拔高度 （必填）
* @params address {string} 地址 
* @params reportTime {string} 上报时间(UTC) 
* @params sourceCoordinateType {CoordinateTypeCommonType} 上报点位坐标系类型1-WGS84LL3-GCJ02LL5-BD09LL 
* @params uploadSourceType {number} 上报源类型（0:人员上报类型(默认值)；1:终端资产类型） 
*/
export type UpdateDeviceReqType = {
    device: string;
    coordinate: CoordinateCommonType;
    metersPerSecond: number;
    direction: number;
    altitude: number;
    address?: string;
    reportTime?: string;
    sourceCoordinateType?: CoordinateTypeCommonType;
    uploadSourceType?: number;
}


/**
* 查询可视区域内的设备活跃点——请求参数类型定义
* @params up_left.longitude {number} 经度 （必填）
* @params up_left.latitude {number} 纬度 （必填）
* @params bottom_right.longitude {number} 经度 （必填）
* @params bottom_right.latitude {number} 纬度 （必填）
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, 从1开始 默认：100 
*/
export type GetActiveGpsReqType = {
    up_left:UpLeftCommonType;
    bottom_right:BottomRightCommonType;
    page?: number;
    per_page?: number;
}


/**
* 查询可视区域内的设备活跃点——响应参数类型定义
* @params totalCount {number} 符合条件的结果总量
* @params items {ActiveItemCommonType[]} 结果集
*/
export type GetActiveGpsResType = {
    totalCount: number;
    items: ActiveItemCommonType[];
}


/**
* 查询指定设备的最新活跃点位——请求参数类型定义
* @params device {string}  （必填）
* @params upload_source_type {number} 上报源类型（0:人员上报（默认值），1:终端上报类型） 
*/
export type GetActiveGpsByDeviceReqType = {
    device: string;
    upload_source_type?: number;
}


/**
* 查询指定设备的最新活跃点位——响应参数类型定义
* @params deviceId {string} 设备Id
* @params gps {GpsDataCommonType} 设备位置
* @params reportTime {string} 上报时间
* @params uploadSourceType {number} 上报源类型
*/
export type GetActiveGpsByDeviceResType = {
    deviceId: string;
    gps: GpsDataCommonType;
    reportTime: string;
    uploadSourceType: number;
}


/**
* 查询多个指定设备的最新活跃点位——请求参数类型定义
* @params Devices {string} 设备Id:上报源类型，用 "," 分开多个 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, 从1开始 默认：100 
*/
export type GetActiveGpsDevicesLatestReqType = {
    Devices?: string;
    page?: number;
    per_page?: number;
}


/**
* 查询多个指定设备的最新活跃点位——响应参数类型定义
* @params totalCount {number} 符合条件的结果总量
* @params items {ActiveItemCommonType[]} 结果集
*/
export type GetActiveGpsDevicesLatestResType = {
    totalCount: number;
    items: ActiveItemCommonType[];
}


/**
* 获取设备最后的Gps点位——请求参数类型定义
* @params device {string} 设备Id （必填）
* @params day_intervals {number} 最近多少天内 默认：1 
* @params upload_source_type {number} 上报源类型 
*/
export type GetHistoryGpsDeviceLatestReqType = {
    device: string;
    day_intervals?: number;
    upload_source_type?: number;
}


/**
* 获取设备最后的Gps点位——响应参数类型定义
* @params deviceId {string} 设备Id
* @params gps {HistoryGpsDataCommonType} 设备位置
* @params reportTime {string} 上报时间
* @params uploadSourceType {number} 上报源类型
*/
export type GetHistoryGpsDeviceLatestResType = {
    deviceId: string;
    gps: HistoryGpsDataCommonType;
    reportTime: string;
    uploadSourceType: number;
}


/**
* 查询设备GPS历史轨迹——请求参数类型定义
* @params device {string} 设备ID （必填）
* @params start_time {string} 起始时间 （必填）
* @params end_time {string} 结束时间 （必填）
* @params upload_source_type {number} 上报源类型（0:人员上报类型(默认值)；1:终端资产类型） 
* @params dilution_factor {number} 抽稀因子，默认结果点位在1000个以上就默认10个点抽1个点 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, 从1开始 默认：100 
*/
export type GetHistoryGpsByDeviceReqType = {
    device: string;
    start_time: string;
    end_time: string;
    upload_source_type?: number;
    dilution_factor?: number;
    page?: number;
    per_page?: number;
}


/**
* 查询设备GPS历史轨迹——响应参数类型定义
* @params totalCount {number} 符合条件的结果总量
* @params items {HistoryItemCommonType[]} 结果集
*/
export type GetHistoryGpsByDeviceResType = {
    totalCount: number;
    items: HistoryItemCommonType[];
}


/**
* 查询某区域在某个时段内的所有途经设备——请求参数类型定义
* @params up_left.Longitude {number} 经度 （必填）
* @params up_left.Latitude {number} 纬度 （必填）
* @params bottom_right.Longitude {number} 经度 （必填）
* @params bottom_right.Latitude {number} 纬度 （必填）
* @params start_time {string} 起始时间 （必填）
* @params minute_intervals {number} 区间 默认：10 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, 从1开始 默认：100 
*/
export type GetHistoryGpsReqType = {
    up_left:UpLeftCommonType;
    bottom_right:BottomRightCommonType;
    start_time: string;
    minute_intervals?: number;
    page?: number;
    per_page?: number;
}


/**
* 查询某区域在某个时段内的所有途经设备——响应参数类型定义
* @params totalCount {number} 符合条件的结果总量
* @params items {any[]} 结果集
*/
export type GetHistoryGpsResType = {
    totalCount: number;
    items: any[];
}


/**
* 历史点补全——请求参数类型定义
* @params deviceId {string} 设备ID （必填）
* @params gps {GpsDataCommonType} GPS数据 （必填）
* @params historyTime {string} 该点应该上报的历史时间 （必填）
* @params currentTime {string} 客户端当前时间 （必填）
* @params uploadSourceType {number} 上报源类型0：人员上报类型（默认值），1：资产终端类型 
*/
export type UpdateHistoryGpsReqType = {
    deviceId: string;
    gps: GpsDataCommonType;
    historyTime: string;
    currentTime: string;
    uploadSourceType?: number;
}


/**
* 查询某区域在某个时段内的所有途经设备（返回设备Id带类型）——请求参数类型定义
* @params up_left.Longitude {number} 经度 （必填）
* @params up_left.Latitude {number} 纬度 （必填）
* @params bottom_right.Longitude {number} 经度 （必填）
* @params bottom_right.Latitude {number} 纬度 （必填）
* @params start_time {string} 起始时间 （必填）
* @params minute_intervals {number} 区间 默认：10 
* @params page {number} 页码, 从1开始 默认：1 
* @params per_page {number} 页容量, 从1开始 默认：100 
*/
export type GetDevicesHistoryReqType = {
    up_left:UpLeftCommonType;
    bottom_right:BottomRightCommonType;
    start_time: string;
    minute_intervals?: number;
    page?: number;
    per_page?: number;
}


/**
* 查询某区域在某个时段内的所有途经设备（返回设备Id带类型）——响应参数类型定义
* @params totalCount {number} 符合条件的结果总量
* @params items {DeviceItemCommonType[]} 结果集
*/
export type GetDevicesHistoryResType = {
    totalCount: number;
    items: DeviceItemCommonType[];
}

