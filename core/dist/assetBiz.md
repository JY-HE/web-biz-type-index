/**
 * 资产状态回调
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 * @params bizName {string}
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params assetStatus {AssetStatusCommonType} 资产状态
 */
type AssetStatusCallbackCommonType = {
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
    bizName?: string;
    assetType?: AssetTypeCommonType;
    assetStatus?: AssetStatusCommonType;
};

/**
 * 资产信息
 * @params id {string} 资产ID
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
 * @params isRealAsset {boolean} 是否真实资产【对讲组不是真实资产】
 * @params relateTypeId {string} 关联类型
 * @params relateCameraId {string} 关联监控ID
 * @params detectInfo {DetectInfoCommonType} 检测信息【用于探测服务使用】
 * @params networkID {string} 网络ID【用于探测的网络筛选】
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 */
type AssetInfoCommonType = {
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
    isRealAsset?: boolean;
    relateTypeId?: string;
    relateCameraId?: string;
    detectInfo?: DetectInfoCommonType;
    networkID?: string;
    longitude?: number;
    latitude?: number;
};

/**
 * 联系人
 * @params id {string} 联系人ID
 * @params name {string} 名称
 * @params phone {string} 联系人电话
 * @params department {string} 联系人部门
 * @params title {string} 联系人职位
 */
type ContactCommonType = {
    id?: string;
    name?: string;
    phone?: string;
    department?: string;
    title?: string;
};

/**
 * 坐标点
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 */
type CoordinateCommonType = {
    longitude: number;
    latitude: number;
};

/**
 * 检测信息
 * @params detectType {DetectTypesCommonType} 检测类型
 * @params detectValue {string} 检测值
 * @params defaultValue {AssetStatusCommonType} 默认值
 */
type DetectInfoCommonType = {
    detectType?: DetectTypesCommonType;
    detectValue?: string;
    defaultValue?: AssetStatusCommonType;
};

/**
 * 网络信息
 * @params ipAddress {string} IP
 * @params mac {string} MAC
 */
type NetInfoCommonType = {
    ipAddress?: string;
    mac?: string;
};

/**
* 排序规则<br/>
0:AscendingByDistance; <br/>
1:DescendingByDistance; 
*/
type SortRuleCommonType = 0 | 1;

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
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {AssetCommonOutCommonType[]} 记录
 */
type AssetCommonOutReqCommonType = {
    totalCount?: number;
    records?: AssetCommonOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {AssetContactOutCommonType[]} 记录
 */
type AssetContactOutReqCommonType = {
    totalCount?: number;
    records?: AssetContactOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {AssetStatusRecordOutCommonType[]} 记录
 */
type AssetStatusRecordOutReqCommonType = {
    totalCount?: number;
    records?: AssetStatusRecordOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {AssetTypeOutCommonType[]} 记录
 */
type AssetTypeOutReqCommonType = {
    totalCount?: number;
    records?: AssetTypeOutCommonType[];
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
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ClientOutCommonType[]} 记录
 */
type ClientOutReqCommonType = {
    totalCount?: number;
    records?: ClientOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ClientOverviewCommonType[]} 记录
 */
type ClientOverviewReqCommonType = {
    totalCount?: number;
    records?: ClientOverviewCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {DeviceOutCommonType[]} 记录
 */
type DeviceOutReqCommonType = {
    totalCount?: number;
    records?: DeviceOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {MCUDataOutCommonType[]} 记录
 */
type MCUDataOutReqCommonType = {
    totalCount?: number;
    records?: MCUDataOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {MetricsOutCommonType[]} 记录
 */
type MetricsOutReqCommonType = {
    totalCount?: number;
    records?: MetricsOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {MonitorDeviceCountOutCommonType[]} 记录
 */
type MonitorDeviceCountOutReqCommonType = {
    totalCount?: number;
    records?: MonitorDeviceCountOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {NetworkOutCommonType[]} 记录
 */
type NetworkOutReqCommonType = {
    totalCount?: number;
    records?: NetworkOutCommonType[];
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
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {PhoneOutCommonType[]} 记录
 */
type PhoneOutReqCommonType = {
    totalCount?: number;
    records?: PhoneOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {PositionEquipmentOutCommonType[]} 记录
 */
type PositionEquipmentOutReqCommonType = {
    totalCount?: number;
    records?: PositionEquipmentOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {PrefixAreaCodeStatisticsOutCommonType[]} 记录
 */
type PrefixAreaCodeStatisticsOutReqCommonType = {
    totalCount?: number;
    records?: PrefixAreaCodeStatisticsOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {TerminalOutCommonType[]} 记录
 */
type TerminalOutReqCommonType = {
    totalCount?: number;
    records?: TerminalOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {TerminalOverviewCommonType[]} 记录
 */
type TerminalOverviewReqCommonType = {
    totalCount?: number;
    records?: TerminalOverviewCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {TerminalSourceOutCommonType[]} 记录
 */
type TerminalSourceOutReqCommonType = {
    totalCount?: number;
    records?: TerminalSourceOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ThirdPlatformOutCommonType[]} 记录
 */
type ThirdPlatformOutReqCommonType = {
    totalCount?: number;
    records?: ThirdPlatformOutCommonType[];
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

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {TrunkGroupConfigOutCommonType[]} 记录
 */
type TrunkGroupConfigOutReqCommonType = {
    totalCount?: number;
    records?: TrunkGroupConfigOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {TypeConfigOutCommonType[]} 记录
 */
type TypeConfigOutReqCommonType = {
    totalCount?: number;
    records?: TypeConfigOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {VirtualNCDeviceOutCommonType[]} 记录
 */
type VirtualNCDeviceOutReqCommonType = {
    totalCount?: number;
    records?: VirtualNCDeviceOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
type ObjectReqCommonType = {
    totalCount?: number;
    records?: any[];
};

/**
* 资产功能分类<br/>
1:Normal,普通; <br/>
2:GPS,定位; <br/>
4:Camera,监控; <br/>
8:Number,号码; 
*/
type AssetFunctionTypesCommonType = 1 | 2 | 4 | 8;

/**
* 资产总览类型<br/>
0:Device,设备; <br/>
1:Client,客户端; <br/>
2:Terminal,终端; <br/>
3:Network,网络; <br/>
4:ThirdPlatform,第三方平台; <br/>
5:AudioAndVideo,录音录像; <br/>
6:PositionEquipment,定位装备; <br/>
7:AssetAlarm,资产告警; 
*/
type AssetOverviewTypeCommonType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

/**
* 连接状态 1已连接，2未连接<br/>
1:Online,在线; <br/>
2:UnOnline,不在线; 
*/
type AssetStatusCommonType = 1 | 2;

/**
* 资产类型<br/>
0:Device,设备; <br/>
1:Client,客户端; <br/>
2:Terminal,终端; <br/>
3:Network,网络; <br/>
4:ThirdPlatform,第三方平台; <br/>
5:PositionEquipment,定位装备; 
*/
type AssetTypeCommonType = 0 | 1 | 2 | 3 | 4 | 5;

/**
* 客户端类型<br/>
0:CommandDispatchClient,指挥调度客户端; <br/>
1:MobileCommandDispatchIntegratedBox,移动指挥调度一体箱; <br/>
2:LeadDecisionCommandClient,领导决策指挥客户端; 
*/
type ClientTypeCommonType = 0 | 1 | 2;

/**
* 配置类型<br/>
0:MonitorDevice,监测设备终端; <br/>
1:IntercomTerminal,对讲终端; <br/>
2:OtherTerminal,其他终端; 
*/
type ConfigTypeCommonType = 0 | 1 | 2;

/**
* 检测类型<br/>
1:IP; <br/>
2:Url; <br/>
4:Camera; <br/>
8:GPSDevice; <br/>
16:TcpPort; <br/>
32:Nc; 
*/
type DetectTypesCommonType = 1 | 2 | 4 | 8 | 16 | 32;

/**
* 设备类型<br/>
0:MCU,MCU; <br/>
1:NC,NC; <br/>
2:Machine,服务器; <br/>
3:SBC,SBC; 
*/
type DeviceTypeCommonType = 0 | 1 | 2 | 3;

/**
* 装备类型<br/>
0:IndividualSoldier,单兵; <br/>
1:ControlTheBall,布控球; <br/>
2:UAV,无人机; 
*/
type EquipmentTypeCommonType = 0 | 1 | 2;

/**
* 检修周期类型<br/>
0:Adaptive,自适应周期，基于上一次检修时间自动调整; <br/>
1:Fixed,固定周期; 
*/
type MaintenancePeriodTypeCommonType = 0 | 1;

/**
* 检修状态<br/>
0:Normal,正常; <br/>
1:Pending,待检修; <br/>
2:Delayed,超期未检修; 
*/
type MaintenanceStatusCommonType = 0 | 1 | 2;

/**
* 指标状态（静态，静态）<br/>
0:Static; <br/>
1:Dynamic; 
*/
type MetricsStatusCommonType = 0 | 1;

/**
* 网络类型<br/>
0:ClusterNetwork,集群网; <br/>
1:PoliceNetwork,公安网; <br/>
2:GovernmentIntranet,政务内网; <br/>
3:GovernmentExtranet,政务外网; <br/>
4:VideoPrivateNetwork,视频专网; <br/>
5:WiredAndWireless,有线/无线; <br/>
6:Network4_5G,4G/5G; <br/>
7:LocalAreaNetwork,局域网; <br/>
8:NarrowBandNetwork,窄带网; <br/>
9:E1,E1; <br/>
10:Other,其他网络; 
*/
type NetworkTypeCommonType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/**
* 号码协议<br/>
0:Simulation; <br/>
1:AT0; <br/>
2:E1; <br/>
3:MGCP; <br/>
4:H248; <br/>
5:H323; <br/>
6:SIP; <br/>
7:PHS; <br/>
8:MS; <br/>
9:PLS; <br/>
10:EMTrunk; <br/>
11:EM; <br/>
12:AnalogTrunkUser; <br/>
13:AnalogTrunkGroupUser; <br/>
14:DigitalTrunkUser; <br/>
15:DigitalTrunkGroupUser; <br/>
16:DigitalTrunkDynamicGroup; <br/>
24:WIFI; <br/>
25:Virtual; <br/>
254:SimpleTrunkPhone; <br/>
255:Others; 
*/
type PhoneProtocolCommonType =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 24
    | 25
    | 254
    | 255;

/**
* 终端类型<br/>
0:LawEnforcementInstrument,执法记录仪; <br/>
1:ControlTheBall4G,4G布控球; <br/>
2:VideoConferenceTerminal,视频会议终端; <br/>
3:MobileClusterVehicleStation,移动集群车载台; <br/>
4:Other,其他终端; <br/>
5:MonitorDevice,监测设备终端; <br/>
6:Uav,无人机; <br/>
7:IntercomTerminal,对讲终端; 
*/
type TerminalTypeCommonType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

/**
 * 支持行政区域码总览筛选
 * @params platformId {string} 分级平台ID
 * @params ignoreOtherPlatform {string} 告警：忽略其他平台
 * @params prefixAreaCodes {any[]} 行政区域码前缀
 */
type AreaCodeOverviewSearchInCommonType = {
    platformId?: string;
    ignoreOtherPlatform?: string;
    prefixAreaCodes?: any[];
};

/**
 * 资产通用搜索入参
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
type AssetCommonSearchRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: any[];
    keyword?: string;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
    assetType: AssetTypeCommonType;
    secondaryAssetType?: number;
    relateTypeId?: string;
    isSearchNullRelateType?: boolean;
    relateTypeIds?: any[];
    assetTypeIds?: any[];
};

/**
 * 资产指标
 * @params metricsId {string} 指标ID
 * @params metricsStatus {MetricsStatusCommonType} 指标状态
 * @params metricsValue {string} 静态指标值
 * @params jobMetaName {string} 动态指标元数据名称
 */
type AssetMetricsInCommonType = {
    metricsId?: string;
    metricsStatus?: MetricsStatusCommonType;
    metricsValue?: string;
    jobMetaName?: string;
};

/**
 * 资产搜索
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
 */
type AssetSearchInCommonType = {
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: any[];
    keyword?: string;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
    assetType: AssetTypeCommonType;
    secondaryAssetType?: number;
    relateTypeId?: string;
    isSearchNullRelateType?: boolean;
    relateTypeIds?: any[];
};

/**
 * 资产类型
 * @params name {string} 类型名
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params secondaryAssetType {number} 二级资产类型
 * @params functionTypes {AssetFunctionTypesCommonType} 功能分类
 * @params configType {ConfigTypeCommonType} 三级类型分类【非必有】
 */
type AssetTypeInCommonType = {
    name?: string;
    assetType?: AssetTypeCommonType;
    secondaryAssetType?: number;
    functionTypes?: AssetFunctionTypesCommonType;
    configType?: ConfigTypeCommonType;
};

/**
 * 类型搜索
 * @params functionTypes {AssetFunctionTypesCommonType} 功能分类【默认查询全部】
 * @params assetType {AssetTypeCommonType} 一级类型
 * @params ids {any[]} id集合查询
 */
type AssetTypeSearchInCommonType = {
    functionTypes?: AssetFunctionTypesCommonType;
    assetType?: AssetTypeCommonType;
    ids?: any[];
};

/**
 * 资产类型统计
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params functionTypes {AssetFunctionTypesCommonType} 功能分类
 * @params assetType {AssetTypeCommonType} 一级类型
 * @params parentId {string} 父级ID
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 */
type AssetTypeStatisticsInCommonType = {
    prefixAreaCodes?: any[];
    functionTypes?: AssetFunctionTypesCommonType;
    assetType?: AssetTypeCommonType;
    parentId?: string;
    isMatchNullAreaCode?: boolean;
};

/**
 * 批量删除入参
 * @params ids {any[]} id
 */
type BatchDeleteInCommonType = {
    ids: any[];
};

/**
 * 圆形搜索入参
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
 * @params sortRule {SortRuleCommonType} 是否按距离升序排序，默认升序
 */
type CircleAreaAssetQueryRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: any[];
    keyword?: string;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
    assetType: AssetTypeCommonType;
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
 * 客户端
 * @params name {string} 名称
 * @params ip {string} IP
 * @params mac {string} MAC
 * @params model {string} 型号
 * @params os {string} 操作系统
 * @params description {string} 描述信息
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params clientType {ClientTypeCommonType} 客户端类型
 * @params networkID {string} 所属网络ID
 * @params resourceId {string} 资源ID
 * @params areaCode {string} 行政区域码
 * @params location {LocationInCommonType} 位置信息
 * @params assetMetrics {AssetMetricsInCommonType[]} 指标
 * @params maintenance {MaintenanceInCommonType} 检修
 */
type ClientInCommonType = {
    name: string;
    ip: string;
    mac?: string;
    model?: string;
    os?: string;
    description?: string;
    extension?: undefined;
    contact?: ContactCommonType;
    clientType?: ClientTypeCommonType;
    networkID?: string;
    resourceId?: string;
    areaCode?: string;
    location?: LocationInCommonType;
    assetMetrics?: AssetMetricsInCommonType[];
    maintenance?: MaintenanceInCommonType;
};

/**
 * 联系人搜索
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params assetIds {any[]} 资产ID集合
 */
type ContactSearchInCommonType = {
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: any[];
};

/**
 * 服务器
 * @params name {string} 服务器名称
 * @params netInfos {NetInfoCommonType[]} 网络信息
 * @params description {string} 描述
 * @params os {string} 操作系统
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params account {string} 账号
 * @params password {string} 密码
 * @params deviceType {DeviceTypeCommonType} 设备类型
 * @params networkID {string} 所属网络ID
 * @params resourceId {string} 资源ID
 * @params areaCode {string} 行政区域码
 * @params location {LocationInCommonType} 位置信息
 * @params assetMetrics {AssetMetricsInCommonType[]} 指标
 * @params maintenance {MaintenanceInCommonType} 检修
 */
type DeviceInCommonType = {
    name: string;
    netInfos?: NetInfoCommonType[];
    description?: string;
    os?: string;
    extension?: undefined;
    contact?: ContactCommonType;
    account?: string;
    password?: string;
    deviceType?: DeviceTypeCommonType;
    networkID?: string;
    resourceId?: string;
    areaCode?: string;
    location?: LocationInCommonType;
    assetMetrics?: AssetMetricsInCommonType[];
    maintenance?: MaintenanceInCommonType;
};

/**
 * Ids查询
 * @params ids {any[]} id集合
 */
type IdsSearchInCommonType = {
    ids?: any[];
};

/**
 * 导入指标
 * @params id {string} 主键
 * @params name {string} 指标名称
 * @params alertTypeId {string} 告警类型ID
 * @params resourceId {string} 来源ID
 * @params createTime {string} 添加时间
 */
type ImportMetricsInCommonType = {
    id?: string;
    name?: string;
    alertTypeId?: string;
    resourceId?: string;
    createTime?: string;
};

/**
 * 类型配置导入
 * @params id {string} 主键
 * @params name {string} 名称
 * @params resourceId {string} 外部资源id
 * @params type {ConfigTypeCommonType} 配置类型
 * @params createTime {string} 添加时间
 */
type ImportTypeConfigInCommonType = {
    id?: string;
    name: string;
    resourceId?: string;
    type: ConfigTypeCommonType;
    createTime?: string;
};

/**
 * 客户端导入请求
 * @params importClients {ClientInCommonType[]} 客户端
 */
type ImportClientRequestCommonType = {
    importClients: ClientInCommonType[];
};

/**
 * 设备导入请求
 * @params importDevices {DeviceInCommonType[]} 设备
 */
type ImportDeviceRequestCommonType = {
    importDevices: DeviceInCommonType[];
};

/**
 * 指标导入入参
 * @params importMetrics {ImportMetricsInCommonType[]} 指标
 */
type ImportMetricRequestCommonType = {
    importMetrics?: ImportMetricsInCommonType[];
};

/**
 * 网络导入请求
 * @params importNetworks {NetworkInCommonType[]} 网络
 */
type ImportNetworkRequestCommonType = {
    importNetworks: NetworkInCommonType[];
};

/**
 * 定位装备导入请求
 * @params importPositionEquipments {PositionEquipmentInCommonType[]} 定位装备
 */
type ImportPositionEquipmentRequestCommonType = {
    importPositionEquipments: PositionEquipmentInCommonType[];
};

/**
 * 终端导入请求
 * @params importTerminals {TerminalInCommonType[]} 终端
 */
type ImportTerminalRequestCommonType = {
    importTerminals: TerminalInCommonType[];
};

/**
 * 第三方平台导入请求
 * @params importThirdPlatforms {ThirdPlatformInCommonType[]} 第三方平台
 */
type ImportThirdPlatformRequestCommonType = {
    importThirdPlatforms: ThirdPlatformInCommonType[];
};

/**
 * 类型配置导入入参
 * @params importTypeConfigs {ImportTypeConfigInCommonType[]} 类型配置
 */
type ImportTypeConfigRequestCommonType = {
    importTypeConfigs?: ImportTypeConfigInCommonType[];
};

/**
 * 位置信息
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params address {string} 地址
 * @params directionAngle {number} 方向角
 * @params pitchAngle {number} 俯仰角
 * @params zoom {number} 缩放等级
 * @params extension {undefined} 拓展
 */
type LocationInCommonType = {
    longitude?: number;
    latitude?: number;
    address?: string;
    directionAngle?: number;
    pitchAngle?: number;
    zoom?: number;
    extension?: undefined;
};

/**
 * 检测信息
 * @params cron {string} 检修表达式
 * @params advanceRemindDays {number} 提前提醒天数
 * @params lastMaintenanceTime {string} 最近一次检修时间
 * @params startUseTime {string} 开始使用时间
 * @params lifetime {number} 生命周期（天）
 * @params maintenancePeriodType {MaintenancePeriodTypeCommonType} 检修周期类型
 */
type MaintenanceInCommonType = {
    cron?: string;
    advanceRemindDays?: number;
    lastMaintenanceTime?: string;
    startUseTime?: string;
    lifetime?: number;
    maintenancePeriodType?: MaintenancePeriodTypeCommonType;
};

/**
 * 指标入参
 * @params name {string} 名称
 * @params alertTypeId {string} 告警类型ID
 * @params resourceId {string} 来源ID
 */
type MetricsInCommonType = {
    name: string;
    alertTypeId?: string;
    resourceId?: string;
};

/**
 * 网络
 * @params name {string} 网络名称
 * @params networkInterface {string} 接入网段
 * @params boundWidth {number} 带宽
 * @params description {string} 描述
 * @params networkType {NetworkTypeCommonType} 网络类型
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params resourceId {string} 资源ID
 * @params areaCode {string} 行政区域码
 * @params location {LocationInCommonType} 位置信息
 * @params assetMetrics {AssetMetricsInCommonType[]} 指标
 * @params maintenance {MaintenanceInCommonType} 检修
 * @params proxyIp {string} 代理IP
 * @params proxyPort {number} 代理端口
 */
type NetworkInCommonType = {
    name: string;
    networkInterface: string;
    boundWidth?: number;
    description?: string;
    networkType?: NetworkTypeCommonType;
    extension?: undefined;
    contact?: ContactCommonType;
    resourceId?: string;
    areaCode?: string;
    location?: LocationInCommonType;
    assetMetrics?: AssetMetricsInCommonType[];
    maintenance?: MaintenanceInCommonType;
    proxyIp?: string;
    proxyPort?: number;
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
 * 定点装备
 * @params name {string} 装备名称
 * @params contact {ContactCommonType} 联系人
 * @params equipmentType {EquipmentTypeCommonType} 装备类型
 * @params collectionCycle {number} 采集周期
 * @params description {string} 描述
 * @params networkID {string} 所属网络ID
 * @params areaCode {string} 行政区域码
 * @params resourceId {string} 资源id
 * @params location {LocationInCommonType} 位置信息
 * @params assetMetrics {AssetMetricsInCommonType[]} 指标
 * @params maintenance {MaintenanceInCommonType} 检修
 */
type PositionEquipmentInCommonType = {
    name: string;
    contact?: ContactCommonType;
    equipmentType?: EquipmentTypeCommonType;
    collectionCycle?: number;
    description?: string;
    networkID?: string;
    areaCode?: string;
    resourceId?: string;
    location?: LocationInCommonType;
    assetMetrics?: AssetMetricsInCommonType[];
    maintenance?: MaintenanceInCommonType;
};

/**
 * 行政区域前缀统计
 * @params prefixAreaCodes {any[]} 行政区域前缀
 */
type PrefixAreaCodeStatisticsInCommonType = {
    prefixAreaCodes?: any[];
};

/**
 * 状态上报
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params assetStatus {AssetStatusCommonType} 资产状态
 */
type StatusReportInCommonType = {
    assetType: AssetTypeCommonType;
    assetStatus: AssetStatusCommonType;
};

/**
 * 终端Post搜索
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params terminalIds {any[]} 终端ID列表,同时支持资源ID(resourceId)查询
 * @params keyword {string} 关键词
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params terminalType {TerminalTypeCommonType} 终端类型
 * @params status {AssetStatusCommonType} 资产状态 1已连接，2未连接
 * @params networkID {string} 所属网络
 * @params relateTypeId {string} 关联类型ID
 * @params isSearchNullRelateType {boolean} 是否查询空关联类型
 * @params relateTypeIds {any[]} 关联类型ID集合查询
 * @params sourceId {string} 来源ID
 * @params groupId {string} 组ID
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 */
type TerminalIDSearchInCommonType = {
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    terminalIds?: any[];
    keyword?: string;
    prefixAreaCodes?: any[];
    terminalType?: TerminalTypeCommonType;
    status?: AssetStatusCommonType;
    networkID?: string;
    relateTypeId?: string;
    isSearchNullRelateType?: boolean;
    relateTypeIds?: any[];
    sourceId?: string;
    groupId?: string;
    isMatchNullAreaCode?: boolean;
};

/**
 * 终端
 * @params name {string} 名称
 * @params ip {string} ip
 * @params port {string} 端口
 * @params number {string} 号码
 * @params description {string} 描述信息
 * @params account {string} 账号
 * @params password {string} 密码
 * @params terminalType {TerminalTypeCommonType} 终端类型
 * @params areaCode {string} 行政区域码
 * @params protocolType {string} 协议类型:H323,SFB,SIP,RTSP,RTMP
 * @params relatePlatformId {string} 关联平台ID
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params groupId {string} 终端组id
 * @params networkID {string} 所属网络ID
 * @params resourceId {string} 资源ID
 * @params relateTypeId {string} 关联类型ID
 * @params terminalLocation {LocationInCommonType} 位置信息
 * @params assetMetrics {AssetMetricsInCommonType[]} 指标
 * @params sourceId {string} 来源ID
 * @params relateCameraId {string} 关联监控ID
 * @params maintenance {MaintenanceInCommonType} 检修
 */
type TerminalInCommonType = {
    name: string;
    ip?: string;
    port?: string;
    number?: string;
    description?: string;
    account?: string;
    password?: string;
    terminalType?: TerminalTypeCommonType;
    areaCode?: string;
    protocolType?: string;
    relatePlatformId?: string;
    extension?: undefined;
    contact?: ContactCommonType;
    groupId?: string;
    networkID?: string;
    resourceId?: string;
    relateTypeId?: string;
    terminalLocation?: LocationInCommonType;
    assetMetrics?: AssetMetricsInCommonType[];
    sourceId?: string;
    relateCameraId?: string;
    maintenance?: MaintenanceInCommonType;
};

/**
 * 终端区域前缀统计
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params terminalType {TerminalTypeCommonType} 终端类型
 */
type TerminalPrefixAreaCodeStatisticsInCommonType = {
    prefixAreaCodes?: any[];
    terminalType?: TerminalTypeCommonType;
};

/**
 * 第三方平台ID搜索
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params platformIds {any[]} 第三方平台ID列表,同时支持资源ID(resourceId)查询
 * @params keyword {string} 关键词
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params networkId {string} 网络id
 * @params status {AssetStatusCommonType} 资产状态 1已连接，2未连接
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 */
type ThirdPlatformIDSearchInCommonType = {
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    platformIds?: any[];
    keyword?: string;
    prefixAreaCodes?: any[];
    networkId?: string;
    status?: AssetStatusCommonType;
    isMatchNullAreaCode?: boolean;
};

/**
 * 第三方平台
 * @params name {string} 名称
 * @params description {string} 描述
 * @params ipAddress {string} 接入IP
 * @params managerAddress {string} 平台管理地址
 * @params account {string} 账号
 * @params password {string} 密码
 * @params areaCode {string} 行政区域码
 * @params department {string} 所属部门
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params accessMethod {string} 接入方式
 * @params networkID {string} 所属网络ID
 * @params resourceId {string} 资源ID
 * @params location {LocationInCommonType} 位置信息
 * @params assetMetrics {AssetMetricsInCommonType[]} 指标
 * @params maintenance {MaintenanceInCommonType} 检修
 */
type ThirdPlatformInCommonType = {
    name: string;
    description?: string;
    ipAddress?: string;
    managerAddress: string;
    account?: string;
    password?: string;
    areaCode?: string;
    department?: string;
    extension?: undefined;
    contact?: ContactCommonType;
    accessMethod?: string;
    networkID?: string;
    resourceId?: string;
    location?: LocationInCommonType;
    assetMetrics?: AssetMetricsInCommonType[];
    maintenance?: MaintenanceInCommonType;
};

/**
 * 拓扑信息
 * @params height {number} 高
 * @params width {number} 宽
 * @params topologyNodes {TopologyNodeInCommonType[]} 拓扑节点
 * @params topologyRelationships {TopologyRelationshipCommonType[]} 节点关系
 */
type TopologyInCommonType = {
    height?: number;
    width?: number;
    topologyNodes?: TopologyNodeInCommonType[];
    topologyRelationships?: TopologyRelationshipCommonType[];
};

/**
 * 拓扑节点
 * @params nodeId {string} id【IsAssetResource=true：资产ID】
 * @params isAssetResource {boolean} 是否资产资源
 * @params name {string} 名称
 * @params typeName {string} 类型名
 * @params color {string} 颜色
 * @params height {number} 高
 * @params width {number} 宽
 * @params coordinateX {number} X坐标
 * @params coordinateY {number} Y坐标
 */
type TopologyNodeInCommonType = {
    nodeId?: string;
    isAssetResource?: boolean;
    name?: string;
    typeName?: string;
    color?: string;
    height?: number;
    width?: number;
    coordinateX?: number;
    coordinateY?: number;
};

/**
 * 类型配置批量Id查询
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params keyword {string} 关键词
 * @params type {ConfigTypeCommonType} 配置类型
 * @params ids {any[]} Id集合
 */
type TypeConfigIdsSearchInCommonType = {
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    keyword?: string;
    type?: ConfigTypeCommonType;
    ids?: any[];
};

/**
 * 类型配置
 * @params name {string} 名称
 * @params resourceId {string} 资源id
 * @params type {ConfigTypeCommonType} 配置类型
 */
type TypeConfigInCommonType = {
    name: string;
    resourceId?: string;
    type: ConfigTypeCommonType;
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
 * 资产通用输出
 * @params id {string} 资产ID
 * @params name {string} 资产名称
 * @params ip {string} IP
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
 * 资产联系人
 * @params assetId {string} 资产ID
 * @params contact {ContactCommonType} 联系人
 */
type AssetContactOutCommonType = {
    assetId?: string;
    contact?: ContactCommonType;
};

/**
 * 资产指标
 * @params metricsId {string} 指标ID
 * @params name {string} 指标名称
 * @params metricsStatus {MetricsStatusCommonType} 指标状态
 * @params metricsValue {string} 静态指标值
 * @params alertTypeId {string} 告警类型ID
 * @params jobMetaName {string} 动态指标元数据名称
 * @params resourceId {string} 来源ID
 */
type AssetMetricsOutCommonType = {
    metricsId?: string;
    name?: string;
    metricsStatus?: MetricsStatusCommonType;
    metricsValue?: string;
    alertTypeId?: string;
    jobMetaName?: string;
    resourceId?: string;
};

/**
 * 资产总览基类
 * @params name {string} 资产名称
 * @params description {string} 资源描述
 * @params totalCount {number} 总数
 * @params onlineCount {number} 在线资产数量
 * @params isHaveOnlineState {boolean} 是否存在在线状态
 * @params onlinePercent {number} 在线率
 * @params group {AssetsOverviewBaseCommonType[]} 子分类
 * @params managerAddress {string} 资产管理地址
 */
type AssetsOverviewBaseCommonType = {
    name?: string;
    description?: string;
    totalCount?: number;
    onlineCount?: number;
    isHaveOnlineState?: boolean;
    onlinePercent?: number;
    group?: AssetsOverviewBaseCommonType[];
    managerAddress?: string;
};

/**
 * 资产状态记录
 * @params id {string} 记录ID
 * @params assetId {string} 资产ID
 * @params status {AssetStatusCommonType} 状态
 * @params createTime {string} 添加时间
 */
type AssetStatusRecordOutCommonType = {
    id?: string;
    assetId?: string;
    status?: AssetStatusCommonType;
    createTime?: string;
};

/**
 * 资产类型输出
 * @params id {string} ID
 * @params name {string} 类型名
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params secondaryAssetType {number} 二级资产类型
 * @params functionTypes {AssetFunctionTypesCommonType} 功能分类
 * @params configType {ConfigTypeCommonType} 三级类型分类【非必有】
 * @params isSubType {boolean} 是否有子级类型
 */
type AssetTypeOutCommonType = {
    id?: string;
    name?: string;
    assetType?: AssetTypeCommonType;
    secondaryAssetType?: number;
    functionTypes?: AssetFunctionTypesCommonType;
    configType?: ConfigTypeCommonType;
    isSubType?: boolean;
};

/**
 * 带距离的资产
 * @params id {string} 资产ID
 * @params name {string} 资产名称
 * @params ip {string} IP
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
 * 客户端
 * @params id {string} 标识
 * @params name {string} 名称
 * @params ip {string} IP
 * @params mac {string} MAC
 * @params model {string} 型号
 * @params os {string} 操作系统
 * @params description {string} 描述信息
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params clientType {ClientTypeCommonType} 客户端
 * @params resourceId {string} 资源ID
 * @params createTime {string} 添加时间
 * @params network {NetworkBaseOutCommonType} 所属网络
 * @params status {AssetStatusCommonType} 资产状态
 * @params areaCode {string} 行政区域码
 * @params location {LocationOutCommonType} 位置信息
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params maintenance {MaintenanceOutCommonType} 检修
 */
type ClientOutCommonType = {
    id?: string;
    name?: string;
    ip?: string;
    mac?: string;
    model?: string;
    os?: string;
    description?: string;
    extension?: undefined;
    contact?: ContactCommonType;
    clientType?: ClientTypeCommonType;
    resourceId?: string;
    createTime?: string;
    network?: NetworkBaseOutCommonType;
    status?: AssetStatusCommonType;
    areaCode?: string;
    location?: LocationOutCommonType;
    assetMetrics?: AssetMetricsOutCommonType[];
    maintenance?: MaintenanceOutCommonType;
};

/**
 * 客户端总览
 * @params clientType {ClientTypeCommonType} 客户端类型:0指挥调度客户端,1移动指挥调度一体箱,2领导决策指挥客户端
 * @params totalCount {number} 总数
 * @params onlineCount {number} 在线数量
 */
type ClientOverviewCommonType = {
    clientType?: ClientTypeCommonType;
    totalCount?: number;
    onlineCount?: number;
};

/**
 * 设备
 * @params id {string} 标识
 * @params name {string} 服务器名称
 * @params netInfos {NetInfoCommonType[]} 网络信息
 * @params description {string} 描述
 * @params os {string} 操作系统
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params account {string} 账号
 * @params password {string} 密码
 * @params resourceId {string} 资源ID
 * @params status {AssetStatusCommonType} 资产状态
 * @params createTime {string} 添加时间
 * @params deviceType {DeviceTypeCommonType} 设备类型
 * @params network {NetworkBaseOutCommonType} 所属网络
 * @params areaCode {string} 行政区域码
 * @params location {LocationOutCommonType} 位置信息
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params maintenance {MaintenanceOutCommonType} 检修
 */
type DeviceOutCommonType = {
    id?: string;
    name?: string;
    netInfos?: NetInfoCommonType[];
    description?: string;
    os?: string;
    extension?: undefined;
    contact?: ContactCommonType;
    account?: string;
    password?: string;
    resourceId?: string;
    status?: AssetStatusCommonType;
    createTime?: string;
    deviceType?: DeviceTypeCommonType;
    network?: NetworkBaseOutCommonType;
    areaCode?: string;
    location?: LocationOutCommonType;
    assetMetrics?: AssetMetricsOutCommonType[];
    maintenance?: MaintenanceOutCommonType;
};

/**
 * 导出类型配置
 * @params typeConfigs {ExportTypeConfigOutCommonType[]} 类型配置
 */
type ExportTypeConfigModelCommonType = {
    typeConfigs?: ExportTypeConfigOutCommonType[];
};

/**
 * 类型配置导出
 * @params id {string} 主键
 * @params name {string} 名称
 * @params resourceId {string} 外部资源id
 * @params type {ConfigTypeCommonType} 配置类型
 * @params createTime {string} 添加时间
 */
type ExportTypeConfigOutCommonType = {
    id?: string;
    name: string;
    resourceId?: string;
    type: ConfigTypeCommonType;
    createTime?: string;
};

/**
 * 位置信息
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
 * 检修信息
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
 * MCU数据
 * @params id {string} 标识
 * @params type {number} 平台类型
 * @params name {string} MCU名称
 * @params accessKeyID {string} 授权码
 * @params accessKeySecret {string} 秘钥
 * @params domain {string} IP地址
 * @params description {string} 描述
 * @params extension {undefined} 拓展信息
 */
type MCUDataOutCommonType = {
    id?: string;
    type?: number;
    name?: string;
    accessKeyID?: string;
    accessKeySecret?: string;
    domain?: string;
    description?: string;
    extension?: undefined;
};

/**
 * 指标输出
 * @params id {string} id
 * @params name {string} 名称
 * @params alertTypeId {string} 告警类型ID
 * @params resourceId {string} 来源ID
 */
type MetricsOutCommonType = {
    id?: string;
    name?: string;
    alertTypeId?: string;
    resourceId?: string;
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
 * NC联系人
 * @params id {string} ID
 * @params name {string} 名称
 * @params title {string} Title
 * @params platformId {string} PlatformId
 * @params platformName {string} PlatformName
 */
type NcContactCommonType = {
    id?: string;
    name?: string;
    title?: string;
    platformId?: string;
    platformName?: string;
};

/**
 * NC设备数据
 * @params id {string}
 * @params ip {string} 设备IP
 * @params port {number} 端口
 * @params userName {string} 设备授权用户名
 * @params password {string} 设备授权密码
 * @params isSupportDualMode {boolean} 是否支持双模电话
 * @params isSupportTrunkUser {boolean} 是否支持中继用户
 */
type NCDeviceOutCommonType = {
    id?: string;
    ip?: string;
    port?: number;
    userName?: string;
    password?: string;
    isSupportDualMode?: boolean;
    isSupportTrunkUser?: boolean;
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
 * 网络信息
 * @params id {string} ID
 * @params name {string} 网络名称
 * @params networkInterface {string} 接入网段
 * @params boundWidth {number} 带宽
 * @params description {string} 描述
 * @params networkType {NetworkTypeCommonType} 网络类型
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params resourceId {string} 资源ID
 * @params createTime {string} 添加时间
 * @params status {AssetStatusCommonType} 连接状态
 * @params areaCode {string} 行政区域码
 * @params location {LocationOutCommonType} 位置信息
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params maintenance {MaintenanceOutCommonType} 检修
 * @params proxyIp {string} 代理IP
 * @params proxyPort {number} 代理端口
 */
type NetworkOutCommonType = {
    id?: string;
    name?: string;
    networkInterface?: string;
    boundWidth?: number;
    description?: string;
    networkType?: NetworkTypeCommonType;
    extension?: undefined;
    contact?: ContactCommonType;
    resourceId?: string;
    createTime?: string;
    status?: AssetStatusCommonType;
    areaCode?: string;
    location?: LocationOutCommonType;
    assetMetrics?: AssetMetricsOutCommonType[];
    maintenance?: MaintenanceOutCommonType;
    proxyIp?: string;
    proxyPort?: number;
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
 * 电话数据
 * @params id {string} ID
 * @params number {string} 电话号码
 * @params state {number} 电话状态
 * @params usn {string} USN
 * @params level {number} 电话级别
 * @params callRegion {number} 呼叫区
 * @params connectionState {number} 连接状态
 * @params protocol {PhoneProtocolCommonType} 电话类型
 * @params configStatus {number} 电话配置状态
 * @params usageType {string} 使用类型
 * @params isPhoneLine {boolean} 是否为线路
 * @params owner {NcContactCommonType} 电话拥有者
 */
type PhoneOutCommonType = {
    id?: string;
    number?: string;
    state?: number;
    usn?: string;
    level?: number;
    callRegion?: number;
    connectionState?: number;
    protocol?: PhoneProtocolCommonType;
    configStatus?: number;
    usageType?: string;
    isPhoneLine?: boolean;
    owner?: NcContactCommonType;
};

/**
 * 定点装备
 * @params id {string} 装备标识
 * @params name {string} 装备名称
 * @params contact {ContactCommonType} 联系人
 * @params equipmentType {EquipmentTypeCommonType} 装备类型
 * @params collectionCycle {number} 采集周期
 * @params description {string} 描述
 * @params status {AssetStatusCommonType} 资产状态1在线，2不在线
 * @params network {NetworkBaseOutCommonType} 所属网络
 * @params areaCode {string} 行政区域码
 * @params resourceId {string} 资源id
 * @params location {LocationOutCommonType} 位置信息
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params maintenance {MaintenanceOutCommonType} 检修
 */
type PositionEquipmentOutCommonType = {
    id?: string;
    name?: string;
    contact?: ContactCommonType;
    equipmentType?: EquipmentTypeCommonType;
    collectionCycle?: number;
    description?: string;
    status?: AssetStatusCommonType;
    network?: NetworkBaseOutCommonType;
    areaCode?: string;
    resourceId?: string;
    location?: LocationOutCommonType;
    assetMetrics?: AssetMetricsOutCommonType[];
    maintenance?: MaintenanceOutCommonType;
};

/**
 * 行政区域前缀统计输出
 * @params prefixAreaCode {string} 行政区域码
 * @params count {number} 数量
 */
type PrefixAreaCodeStatisticsOutCommonType = {
    prefixAreaCode?: string;
    count?: number;
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
 * 终端组
 * @params id {string} ID
 * @params name {string} 名称
 */
type TerminalGroupOutCommonType = {
    id?: string;
    name?: string;
};

/**
 * 终端数据
 * @params id {string} 标识
 * @params name {string} 名称
 * @params ip {string} ip
 * @params port {string} 端口
 * @params number {string} 号码
 * @params description {string} 描述信息
 * @params account {string} 账号
 * @params password {string} 密码
 * @params resourceId {string} 资源ID
 * @params createTime {string} 添加时间
 * @params terminalType {TerminalTypeCommonType} 终端类型
 * @params areaCode {string} 行政区域码
 * @params protocolType {string} 协议
 * @params relatePlatform {RelatePlatformBaseOutCommonType} 关联平台
 * @params extension {undefined} 拓展
 * @params relateCameraId {string} 关联监控ID
 * @params contact {ContactCommonType} 联系人
 * @params status {AssetStatusCommonType} 资产状态1在线，2不在线
 * @params relateType {TypeConfigOutCommonType} 关联类型
 * @params terminalGroup {TerminalGroupOutCommonType} 终端组信息
 * @params network {NetworkBaseOutCommonType} 所属网络
 * @params terminalLocation {LocationOutCommonType} 位置信息
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params source {TerminalSourceOutCommonType} 来源
 * @params maintenance {MaintenanceOutCommonType} 检修
 */
type TerminalOutCommonType = {
    id?: string;
    name?: string;
    ip?: string;
    port?: string;
    number?: string;
    description?: string;
    account?: string;
    password?: string;
    resourceId?: string;
    createTime?: string;
    terminalType?: TerminalTypeCommonType;
    areaCode?: string;
    protocolType?: string;
    relatePlatform?: RelatePlatformBaseOutCommonType;
    extension?: undefined;
    relateCameraId?: string;
    contact?: ContactCommonType;
    status?: AssetStatusCommonType;
    relateType?: TypeConfigOutCommonType;
    terminalGroup?: TerminalGroupOutCommonType;
    network?: NetworkBaseOutCommonType;
    terminalLocation?: LocationOutCommonType;
    assetMetrics?: AssetMetricsOutCommonType[];
    source?: TerminalSourceOutCommonType;
    maintenance?: MaintenanceOutCommonType;
};

/**
 * 终端总览
 * @params terminalType {TerminalTypeCommonType} 客户端类型:0固定电话,1对讲终端,2视频会议终端,3监控终端,4执法仪,5布控球,6移动集群车载台
 * @params totalCount {number} 总数
 * @params onlineCount {number} 在线数量
 */
type TerminalOverviewCommonType = {
    terminalType?: TerminalTypeCommonType;
    totalCount?: number;
    onlineCount?: number;
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
 * 第三方平台
 * @params id {string} Id
 * @params ipAddress {string} 接入IP
 * @params managerAddress {string} 平台管理地址
 * @params name {string} 名称
 * @params description {string} 描述
 * @params status {AssetStatusCommonType} 资产状态1在线，2不在线
 * @params account {string} 账号
 * @params password {string} 密码
 * @params areaCode {string} 行政区域码
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
 */
type ThirdPlatformOutCommonType = {
    id?: string;
    ipAddress?: string;
    managerAddress?: string;
    name?: string;
    description?: string;
    status?: AssetStatusCommonType;
    account?: string;
    password?: string;
    areaCode?: string;
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
 * 拓扑节点关系
 * @params startNodeId {string} 开始节点
 * @params endNodeId {string} 结束节点
 */
type TopologyRelationshipCommonType = {
    startNodeId?: string;
    endNodeId?: string;
};

/**
 * 中继群配置
 * @params trunkGroupNumber {number} 中继群号
 * @params trunkGroupDescription {string} 中继群描述
 * @params dualSystemAttribute {boolean} 双机设备属性
 * @params callAreaInHost {number} 呼叫区
 * @params trunkGroupType {number} 中继群类型
 * @params callPriority {number} 优先级
 * @params maxCall {number} 最大呼叫并发数
 * @params effectiveDate {number} 有效日期(8Bit日，7Bit一，6Bit二， 5Bit三， 4Bit四， 3Bit五， 2Bit六， 1Bit未定义)
 * @params effectiveTime {string} 有效时间
 * @params physicalState {number} 物理状态
 * @params isEnable {boolean} 是否启用
 */
type TrunkGroupConfigOutCommonType = {
    trunkGroupNumber?: number;
    trunkGroupDescription?: string;
    dualSystemAttribute?: boolean;
    callAreaInHost?: number;
    trunkGroupType?: number;
    callPriority?: number;
    maxCall?: number;
    effectiveDate?: number;
    effectiveTime?: string;
    physicalState?: number;
    isEnable?: boolean;
};

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
 * NC设备
 * @params id {string} ID
 * @params name {string} 名称
 * @params connectionState {number} 连接状态，0:无效,1:已连接,2:未连接
 * @params description {string} 描述
 * @params prefix {string} VNC字冠
 * @params isKeepAlive {boolean} 是否开启心跳
 * @params timeInterval {number} 心跳时长
 * @params masterNCDevice {NCDeviceOutCommonType} 主NC设备
 * @params slaveNCDevice {NCDeviceOutCommonType} 从NC设备
 * @params longitude {number} 经度
 * @params latitude {number} 维度
 */
type VirtualNCDeviceOutCommonType = {
    id?: string;
    name?: string;
    connectionState?: number;
    description?: string;
    prefix?: string;
    isKeepAlive?: boolean;
    timeInterval?: number;
    masterNCDevice?: NCDeviceOutCommonType;
    slaveNCDevice?: NCDeviceOutCommonType;
    longitude?: number;
    latitude?: number;
};

/**
* <br/>

*/
type EntityOperationCommonType = 0 | 1 | 2;

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

----

/**
 * 通过IP获取资产信息——请求参数类型定义
 * @params ip {string}  （必填）
 * @params type {number}  （必填）
 * @headers X-version {string}
 */
export type GetAssetsByIpReqType = {
    ip: string;
    type: number;
    'X-version'?: string;
};

/**
 * 通过IP获取资产信息——响应参数类型定义
 * @params id {string} 资产ID
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
 * @params isRealAsset {boolean} 是否真实资产【对讲组不是真实资产】
 * @params relateTypeId {string} 关联类型
 * @params relateCameraId {string} 关联监控ID
 * @params detectInfo {DetectInfoCommonType} 检测信息【用于探测服务使用】
 * @params networkID {string} 网络ID【用于探测的网络筛选】
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 */
export type GetAssetsByIpResType = {
    id: string;
    name: string;
    ip: string;
    number: string;
    assetType: AssetTypeCommonType;
    secondaryAssetType: number;
    contactID: string;
    contactName: string;
    contactPhone: string;
    contactTitle: string;
    contactDepartment: string;
    resourceId: string;
    areaCode: string;
    isRealAsset: boolean;
    relateTypeId: string;
    relateCameraId: string;
    detectInfo: DetectInfoCommonType;
    networkID: string;
    longitude: number;
    latitude: number;
};

/**
 * 资产状态上报——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params assetType {AssetTypeCommonType} 资产类型 （必填）
 * @params assetStatus {AssetStatusCommonType} 资产状态 （必填）
 */
export type ReportAssetsStatusReqType = {
    id: string;
    'X-version'?: string;
    assetType: AssetTypeCommonType;
    assetStatus: AssetStatusCommonType;
};

/**
 * 获取资产详情——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} platformId
 * @headers X-version {string}
 */
export type GetAssetByIdReqType = {
    id: string;
    platformId?: string;
    'X-version'?: string;
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
 * @params assetType {AssetTypeCommonType} 资产类型 （必填）
 * @params secondaryAssetType {number} 二级资产类型（依赖一级资产类型）
 * @params relateTypeId {string} 关联类型ID
 * @params isSearchNullRelateType {boolean} 是否查询空关联类型
 * @params relateTypeIds {any[]} 关联类型ID集合查询
 */
export type SearchAssetsReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: any[];
    keyword?: string;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
    assetType: AssetTypeCommonType;
    secondaryAssetType?: number;
    relateTypeId?: string;
    isSearchNullRelateType?: boolean;
    relateTypeIds?: any[];
};

/**
 * 搜索资产——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type SearchAssetsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 周边资产搜索——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params assetIds {any[]} 资产ID
 * @params keyword {string} 关键词
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 * @params assetType {AssetTypeCommonType} 资产类型 （必填）
 * @params secondaryAssetType {number} 二级资产类型（依赖一级资产类型）
 * @params relateTypeId {string} 关联类型ID
 * @params isSearchNullRelateType {boolean} 是否查询空关联类型
 * @params relateTypeIds {any[]} 关联类型ID集合查询
 * @params assetTypeIds {any[]} 批量资产类型ID集合
 * @params center {CoordinateCommonType} 圆心 （必填）
 * @params radius {number} 半径（单位米） （必填）
 * @params sortRule {SortRuleCommonType} 是否按距离升序排序，默认升序
 */
export type SearchCircleAreaAssetReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: any[];
    keyword?: string;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
    assetType: AssetTypeCommonType;
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
 * 周边资产搜索——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AssetWithDistanceCommonType[]} 记录
 */
export type SearchCircleAreaAssetResType = {
    totalCount: number;
    records: AssetWithDistanceCommonType[];
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
 * @params assetType {AssetTypeCommonType} 资产类型 （必填）
 * @params secondaryAssetType {number} 二级资产类型（依赖一级资产类型）
 * @params relateTypeId {string} 关联类型ID
 * @params isSearchNullRelateType {boolean} 是否查询空关联类型
 * @params relateTypeIds {any[]} 关联类型ID集合查询
 * @params assetTypeIds {any[]} 批量资产类型ID集合
 */
export type CommonAssetSearchReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: any[];
    keyword?: string;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
    assetType: AssetTypeCommonType;
    secondaryAssetType?: number;
    relateTypeId?: string;
    isSearchNullRelateType?: boolean;
    relateTypeIds?: any[];
    assetTypeIds?: any[];
};

/**
 * 通用搜索——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AssetCommonOutCommonType[]} 记录
 */
export type CommonAssetSearchResType = {
    totalCount: number;
    records: AssetCommonOutCommonType[];
};

/**
 * 批量获取资产联系人——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params assetIds {any[]} 资产ID集合
 */
export type AtsSearchContactsReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: any[];
};

/**
 * 批量获取资产联系人——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AssetContactOutCommonType[]} 记录
 */
export type AtsSearchContactsResType = {
    totalCount: number;
    records: AssetContactOutCommonType[];
};

/**
 * 重载资产缓存——请求参数类型定义
 * @headers X-version {string}
 */
export type ReloadCacheReqType = {
    'X-version'?: string;
};

/**
 * 获取——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetAssetTypeByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 类型名
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params secondaryAssetType {number} 二级资产类型
 * @params functionTypes {AssetFunctionTypesCommonType} 功能分类
 * @params configType {ConfigTypeCommonType} 三级类型分类【非必有】
 * @params isSubType {boolean} 是否有子级类型
 */
export type GetAssetTypeByIdResType = {
    id: string;
    name: string;
    assetType: AssetTypeCommonType;
    secondaryAssetType: number;
    functionTypes: AssetFunctionTypesCommonType;
    configType: ConfigTypeCommonType;
    isSubType: boolean;
};

/**
 * 更新——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 类型名
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params secondaryAssetType {number} 二级资产类型
 * @params functionTypes {AssetFunctionTypesCommonType} 功能分类
 * @params configType {ConfigTypeCommonType} 三级类型分类【非必有】
 */
export type EditAssetTypeReqType = {
    id: string;
    'X-version'?: string;
    name?: string;
    assetType?: AssetTypeCommonType;
    secondaryAssetType?: number;
    functionTypes?: AssetFunctionTypesCommonType;
    configType?: ConfigTypeCommonType;
};

/**
 * 删除——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteAssetTypeReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 搜索——请求参数类型定义
 * @headers X-version {string}
 * @params functionTypes {AssetFunctionTypesCommonType} 功能分类【默认查询全部】
 * @params assetType {AssetTypeCommonType} 一级类型
 * @params ids {any[]} id集合查询
 */
export type AtsSearchAssetTypesReqType = {
    'X-version'?: string;
    functionTypes?: AssetFunctionTypesCommonType;
    assetType?: AssetTypeCommonType;
    ids?: any[];
};

/**
 * 搜索——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AssetTypeOutCommonType[]} 记录
 */
export type AtsSearchAssetTypesResType = {
    totalCount: number;
    records: AssetTypeOutCommonType[];
};

/**
 * 新增——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 类型名
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params secondaryAssetType {number} 二级资产类型
 * @params functionTypes {AssetFunctionTypesCommonType} 功能分类
 * @params configType {ConfigTypeCommonType} 三级类型分类【非必有】
 */
export type AddAssetTypeReqType = {
    'X-version'?: string;
    name?: string;
    assetType?: AssetTypeCommonType;
    secondaryAssetType?: number;
    functionTypes?: AssetFunctionTypesCommonType;
    configType?: ConfigTypeCommonType;
};

/**
 * 新增——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 类型名
 * @params assetType {AssetTypeCommonType} 资产类型
 * @params secondaryAssetType {number} 二级资产类型
 * @params functionTypes {AssetFunctionTypesCommonType} 功能分类
 * @params configType {ConfigTypeCommonType} 三级类型分类【非必有】
 * @params isSubType {boolean} 是否有子级类型
 */
export type AddAssetTypeResType = {
    id: string;
    name: string;
    assetType: AssetTypeCommonType;
    secondaryAssetType: number;
    functionTypes: AssetFunctionTypesCommonType;
    configType: ConfigTypeCommonType;
    isSubType: boolean;
};

/**
 * 获取客户端总览——请求参数类型定义
 * @params platformId {string} platformId
 * @headers X-version {string}
 */
export type GetClientOverviewReqType = {
    platformId?: string;
    'X-version'?: string;
};

/**
 * 获取客户端总览——响应参数类型定义
 * @params name {string} 资产名称
 * @params description {string} 资源描述
 * @params totalCount {number} 总数
 * @params onlineCount {number} 在线资产数量
 * @params isHaveOnlineState {boolean} 是否存在在线状态
 * @params onlinePercent {number} 在线率
 * @params group {AssetsOverviewBaseCommonType[]} 子分类
 * @params managerAddress {string} 资产管理地址
 */
export type GetClientOverviewResType = {
    name: string;
    description: string;
    totalCount: number;
    onlineCount: number;
    isHaveOnlineState: boolean;
    onlinePercent: number;
    group: AssetsOverviewBaseCommonType[];
    managerAddress: string;
};

/**
 * 搜索客户端——请求参数类型定义
 * @params keyword {string} 关键词
 * @params networkID {string} 所属网络ID
 * @params platformId {string} 分级平台ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetClientsReqType = {
    keyword?: string;
    networkID?: string;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 搜索客户端——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ClientOutCommonType[]} 记录
 */
export type GetClientsResType = {
    totalCount: number;
    records: ClientOutCommonType[];
};

/**
 * 新增客户端——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 名称 （必填）
 * @params ip {string} IP （必填）
 * @params mac {string} MAC
 * @params model {string} 型号
 * @params os {string} 操作系统
 * @params description {string} 描述信息
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params clientType {ClientTypeCommonType} 客户端类型
 * @params networkID {string} 所属网络ID
 * @params resourceId {string} 资源ID
 * @params areaCode {string} 行政区域码
 * @params location {LocationInCommonType} 位置信息
 * @params assetMetrics {AssetMetricsInCommonType[]} 指标
 * @params maintenance {MaintenanceInCommonType} 检修
 */
export type AtsAddClientReqType = {
    'X-version'?: string;
    name: string;
    ip: string;
    mac?: string;
    model?: string;
    os?: string;
    description?: string;
    extension?: undefined;
    contact?: ContactCommonType;
    clientType?: ClientTypeCommonType;
    networkID?: string;
    resourceId?: string;
    areaCode?: string;
    location?: LocationInCommonType;
    assetMetrics?: AssetMetricsInCommonType[];
    maintenance?: MaintenanceInCommonType;
};

/**
 * 新增客户端——响应参数类型定义
 * @params id {string} 标识
 * @params name {string} 名称
 * @params ip {string} IP
 * @params mac {string} MAC
 * @params model {string} 型号
 * @params os {string} 操作系统
 * @params description {string} 描述信息
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params clientType {ClientTypeCommonType} 客户端
 * @params resourceId {string} 资源ID
 * @params createTime {string} 添加时间
 * @params network {NetworkBaseOutCommonType} 所属网络
 * @params status {AssetStatusCommonType} 资产状态
 * @params areaCode {string} 行政区域码
 * @params location {LocationOutCommonType} 位置信息
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params maintenance {MaintenanceOutCommonType} 检修
 */
export type AtsAddClientResType = {
    id: string;
    name: string;
    ip: string;
    mac: string;
    model: string;
    os: string;
    description: string;
    extension: undefined;
    contact: ContactCommonType;
    clientType: ClientTypeCommonType;
    resourceId: string;
    createTime: string;
    network: NetworkBaseOutCommonType;
    status: AssetStatusCommonType;
    areaCode: string;
    location: LocationOutCommonType;
    assetMetrics: AssetMetricsOutCommonType[];
    maintenance: MaintenanceOutCommonType;
};

/**
 * 通过ID获取客户端——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} platformId
 * @headers X-version {string}
 */
export type GetClientsByIdReqType = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * 通过ID获取客户端——响应参数类型定义
 * @params id {string} 标识
 * @params name {string} 名称
 * @params ip {string} IP
 * @params mac {string} MAC
 * @params model {string} 型号
 * @params os {string} 操作系统
 * @params description {string} 描述信息
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params clientType {ClientTypeCommonType} 客户端
 * @params resourceId {string} 资源ID
 * @params createTime {string} 添加时间
 * @params network {NetworkBaseOutCommonType} 所属网络
 * @params status {AssetStatusCommonType} 资产状态
 * @params areaCode {string} 行政区域码
 * @params location {LocationOutCommonType} 位置信息
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params maintenance {MaintenanceOutCommonType} 检修
 */
export type GetClientsByIdResType = {
    id: string;
    name: string;
    ip: string;
    mac: string;
    model: string;
    os: string;
    description: string;
    extension: undefined;
    contact: ContactCommonType;
    clientType: ClientTypeCommonType;
    resourceId: string;
    createTime: string;
    network: NetworkBaseOutCommonType;
    status: AssetStatusCommonType;
    areaCode: string;
    location: LocationOutCommonType;
    assetMetrics: AssetMetricsOutCommonType[];
    maintenance: MaintenanceOutCommonType;
};

/**
 * 更新客户端——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 名称 （必填）
 * @params ip {string} IP （必填）
 * @params mac {string} MAC
 * @params model {string} 型号
 * @params os {string} 操作系统
 * @params description {string} 描述信息
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params clientType {ClientTypeCommonType} 客户端类型
 * @params networkID {string} 所属网络ID
 * @params resourceId {string} 资源ID
 * @params areaCode {string} 行政区域码
 * @params location {LocationInCommonType} 位置信息
 * @params assetMetrics {AssetMetricsInCommonType[]} 指标
 * @params maintenance {MaintenanceInCommonType} 检修
 */
export type EditClientReqType = {
    id: string;
    'X-version'?: string;
    name: string;
    ip: string;
    mac?: string;
    model?: string;
    os?: string;
    description?: string;
    extension?: undefined;
    contact?: ContactCommonType;
    clientType?: ClientTypeCommonType;
    networkID?: string;
    resourceId?: string;
    areaCode?: string;
    location?: LocationInCommonType;
    assetMetrics?: AssetMetricsInCommonType[];
    maintenance?: MaintenanceInCommonType;
};

/**
 * 删除客户端——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteClientReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 导入客户端——请求参数类型定义
 * @headers X-version {string}
 * @params importClients {ClientInCommonType[]} 客户端 （必填）
 */
export type ImportClientReqType = {
    'X-version'?: string;
    importClients: ClientInCommonType[];
};

/**
 * 获取设备总览——请求参数类型定义
 * @params platformId {string} platformId
 * @headers X-version {string}
 */
export type GetDeviceOverviewReqType = {
    platformId?: string;
    'X-version'?: string;
};

/**
 * 获取设备总览——响应参数类型定义
 * @params name {string} 资产名称
 * @params description {string} 资源描述
 * @params totalCount {number} 总数
 * @params onlineCount {number} 在线资产数量
 * @params isHaveOnlineState {boolean} 是否存在在线状态
 * @params onlinePercent {number} 在线率
 * @params group {AssetsOverviewBaseCommonType[]} 子分类
 * @params managerAddress {string} 资产管理地址
 */
export type GetDeviceOverviewResType = {
    name: string;
    description: string;
    totalCount: number;
    onlineCount: number;
    isHaveOnlineState: boolean;
    onlinePercent: number;
    group: AssetsOverviewBaseCommonType[];
    managerAddress: string;
};

/**
 * 设备搜索——请求参数类型定义
 * @params keyword {string} 关键词
 * @params networkID {string} 所属网络ID
 * @params deviceType {number} 类型
 * @params platformId {string} 分级平台ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetDeviceReqType = {
    keyword?: string;
    networkID?: string;
    deviceType?: number;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 设备搜索——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {DeviceOutCommonType[]} 记录
 */
export type GetDeviceResType = {
    totalCount: number;
    records: DeviceOutCommonType[];
};

/**
 * 新增设备——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 服务器名称 （必填）
 * @params netInfos {NetInfoCommonType[]} 网络信息
 * @params description {string} 描述
 * @params os {string} 操作系统
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params account {string} 账号
 * @params password {string} 密码
 * @params deviceType {DeviceTypeCommonType} 设备类型
 * @params networkID {string} 所属网络ID
 * @params resourceId {string} 资源ID
 * @params areaCode {string} 行政区域码
 * @params location {LocationInCommonType} 位置信息
 * @params assetMetrics {AssetMetricsInCommonType[]} 指标
 * @params maintenance {MaintenanceInCommonType} 检修
 */
export type AddDeviceReqType = {
    'X-version'?: string;
    name: string;
    netInfos?: NetInfoCommonType[];
    description?: string;
    os?: string;
    extension?: undefined;
    contact?: ContactCommonType;
    account?: string;
    password?: string;
    deviceType?: DeviceTypeCommonType;
    networkID?: string;
    resourceId?: string;
    areaCode?: string;
    location?: LocationInCommonType;
    assetMetrics?: AssetMetricsInCommonType[];
    maintenance?: MaintenanceInCommonType;
};

/**
 * 新增设备——响应参数类型定义
 * @params id {string} 标识
 * @params name {string} 服务器名称
 * @params netInfos {NetInfoCommonType[]} 网络信息
 * @params description {string} 描述
 * @params os {string} 操作系统
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params account {string} 账号
 * @params password {string} 密码
 * @params resourceId {string} 资源ID
 * @params status {AssetStatusCommonType} 资产状态
 * @params createTime {string} 添加时间
 * @params deviceType {DeviceTypeCommonType} 设备类型
 * @params network {NetworkBaseOutCommonType} 所属网络
 * @params areaCode {string} 行政区域码
 * @params location {LocationOutCommonType} 位置信息
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params maintenance {MaintenanceOutCommonType} 检修
 */
export type AddDeviceResType = {
    id: string;
    name: string;
    netInfos: NetInfoCommonType[];
    description: string;
    os: string;
    extension: undefined;
    contact: ContactCommonType;
    account: string;
    password: string;
    resourceId: string;
    status: AssetStatusCommonType;
    createTime: string;
    deviceType: DeviceTypeCommonType;
    network: NetworkBaseOutCommonType;
    areaCode: string;
    location: LocationOutCommonType;
    assetMetrics: AssetMetricsOutCommonType[];
    maintenance: MaintenanceOutCommonType;
};

/**
 * 获取设备——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} platformId
 * @headers X-version {string}
 */
export type GetDeviceByIdReqType = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * 获取设备——响应参数类型定义
 * @params id {string} 标识
 * @params name {string} 服务器名称
 * @params netInfos {NetInfoCommonType[]} 网络信息
 * @params description {string} 描述
 * @params os {string} 操作系统
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params account {string} 账号
 * @params password {string} 密码
 * @params resourceId {string} 资源ID
 * @params status {AssetStatusCommonType} 资产状态
 * @params createTime {string} 添加时间
 * @params deviceType {DeviceTypeCommonType} 设备类型
 * @params network {NetworkBaseOutCommonType} 所属网络
 * @params areaCode {string} 行政区域码
 * @params location {LocationOutCommonType} 位置信息
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params maintenance {MaintenanceOutCommonType} 检修
 */
export type GetDeviceByIdResType = {
    id: string;
    name: string;
    netInfos: NetInfoCommonType[];
    description: string;
    os: string;
    extension: undefined;
    contact: ContactCommonType;
    account: string;
    password: string;
    resourceId: string;
    status: AssetStatusCommonType;
    createTime: string;
    deviceType: DeviceTypeCommonType;
    network: NetworkBaseOutCommonType;
    areaCode: string;
    location: LocationOutCommonType;
    assetMetrics: AssetMetricsOutCommonType[];
    maintenance: MaintenanceOutCommonType;
};

/**
 * 更新设备——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 服务器名称 （必填）
 * @params netInfos {NetInfoCommonType[]} 网络信息
 * @params description {string} 描述
 * @params os {string} 操作系统
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params account {string} 账号
 * @params password {string} 密码
 * @params deviceType {DeviceTypeCommonType} 设备类型
 * @params networkID {string} 所属网络ID
 * @params resourceId {string} 资源ID
 * @params areaCode {string} 行政区域码
 * @params location {LocationInCommonType} 位置信息
 * @params assetMetrics {AssetMetricsInCommonType[]} 指标
 * @params maintenance {MaintenanceInCommonType} 检修
 */
export type EditDeviceReqType = {
    id: string;
    'X-version'?: string;
    name: string;
    netInfos?: NetInfoCommonType[];
    description?: string;
    os?: string;
    extension?: undefined;
    contact?: ContactCommonType;
    account?: string;
    password?: string;
    deviceType?: DeviceTypeCommonType;
    networkID?: string;
    resourceId?: string;
    areaCode?: string;
    location?: LocationInCommonType;
    assetMetrics?: AssetMetricsInCommonType[];
    maintenance?: MaintenanceInCommonType;
};

/**
 * 删除设备——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteDeviceReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 导入设备（创建NC和MCU不支持指定resourceId）——请求参数类型定义
 * @headers X-version {string}
 * @params importDevices {DeviceInCommonType[]} 设备 （必填）
 */
export type ImportDeviceReqType = {
    'X-version'?: string;
    importDevices: DeviceInCommonType[];
};

/**
 * 搜索服务器——请求参数类型定义
 * @params platformId {string} 分级平台ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetMachinesReqType = {
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 搜索服务器——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {DeviceOutCommonType[]} 记录
 */
export type GetMachinesResType = {
    totalCount: number;
    records: DeviceOutCommonType[];
};

/**
 * 新增服务器——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 服务器名称 （必填）
 * @params netInfos {NetInfoCommonType[]} 网络信息
 * @params description {string} 描述
 * @params os {string} 操作系统
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params account {string} 账号
 * @params password {string} 密码
 * @params deviceType {DeviceTypeCommonType} 设备类型
 * @params networkID {string} 所属网络ID
 * @params resourceId {string} 资源ID
 * @params areaCode {string} 行政区域码
 * @params location {LocationInCommonType} 位置信息
 * @params assetMetrics {AssetMetricsInCommonType[]} 指标
 * @params maintenance {MaintenanceInCommonType} 检修
 */
export type AddMachinesReqType = {
    'X-version'?: string;
    name: string;
    netInfos?: NetInfoCommonType[];
    description?: string;
    os?: string;
    extension?: undefined;
    contact?: ContactCommonType;
    account?: string;
    password?: string;
    deviceType?: DeviceTypeCommonType;
    networkID?: string;
    resourceId?: string;
    areaCode?: string;
    location?: LocationInCommonType;
    assetMetrics?: AssetMetricsInCommonType[];
    maintenance?: MaintenanceInCommonType;
};

/**
 * 新增服务器——响应参数类型定义
 * @params id {string} 标识
 * @params name {string} 服务器名称
 * @params netInfos {NetInfoCommonType[]} 网络信息
 * @params description {string} 描述
 * @params os {string} 操作系统
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params account {string} 账号
 * @params password {string} 密码
 * @params resourceId {string} 资源ID
 * @params status {AssetStatusCommonType} 资产状态
 * @params createTime {string} 添加时间
 * @params deviceType {DeviceTypeCommonType} 设备类型
 * @params network {NetworkBaseOutCommonType} 所属网络
 * @params areaCode {string} 行政区域码
 * @params location {LocationOutCommonType} 位置信息
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params maintenance {MaintenanceOutCommonType} 检修
 */
export type AddMachinesResType = {
    id: string;
    name: string;
    netInfos: NetInfoCommonType[];
    description: string;
    os: string;
    extension: undefined;
    contact: ContactCommonType;
    account: string;
    password: string;
    resourceId: string;
    status: AssetStatusCommonType;
    createTime: string;
    deviceType: DeviceTypeCommonType;
    network: NetworkBaseOutCommonType;
    areaCode: string;
    location: LocationOutCommonType;
    assetMetrics: AssetMetricsOutCommonType[];
    maintenance: MaintenanceOutCommonType;
};

/**
 * 通过ID获取服务器——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} platformId
 * @headers X-version {string}
 */
export type GetMachineByIdReqType = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * 通过ID获取服务器——响应参数类型定义
 * @params id {string} 标识
 * @params name {string} 服务器名称
 * @params netInfos {NetInfoCommonType[]} 网络信息
 * @params description {string} 描述
 * @params os {string} 操作系统
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params account {string} 账号
 * @params password {string} 密码
 * @params resourceId {string} 资源ID
 * @params status {AssetStatusCommonType} 资产状态
 * @params createTime {string} 添加时间
 * @params deviceType {DeviceTypeCommonType} 设备类型
 * @params network {NetworkBaseOutCommonType} 所属网络
 * @params areaCode {string} 行政区域码
 * @params location {LocationOutCommonType} 位置信息
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params maintenance {MaintenanceOutCommonType} 检修
 */
export type GetMachineByIdResType = {
    id: string;
    name: string;
    netInfos: NetInfoCommonType[];
    description: string;
    os: string;
    extension: undefined;
    contact: ContactCommonType;
    account: string;
    password: string;
    resourceId: string;
    status: AssetStatusCommonType;
    createTime: string;
    deviceType: DeviceTypeCommonType;
    network: NetworkBaseOutCommonType;
    areaCode: string;
    location: LocationOutCommonType;
    assetMetrics: AssetMetricsOutCommonType[];
    maintenance: MaintenanceOutCommonType;
};

/**
 * 更新服务器——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 服务器名称 （必填）
 * @params netInfos {NetInfoCommonType[]} 网络信息
 * @params description {string} 描述
 * @params os {string} 操作系统
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params account {string} 账号
 * @params password {string} 密码
 * @params deviceType {DeviceTypeCommonType} 设备类型
 * @params networkID {string} 所属网络ID
 * @params resourceId {string} 资源ID
 * @params areaCode {string} 行政区域码
 * @params location {LocationInCommonType} 位置信息
 * @params assetMetrics {AssetMetricsInCommonType[]} 指标
 * @params maintenance {MaintenanceInCommonType} 检修
 */
export type EditMachineReqType = {
    id: string;
    'X-version'?: string;
    name: string;
    netInfos?: NetInfoCommonType[];
    description?: string;
    os?: string;
    extension?: undefined;
    contact?: ContactCommonType;
    account?: string;
    password?: string;
    deviceType?: DeviceTypeCommonType;
    networkID?: string;
    resourceId?: string;
    areaCode?: string;
    location?: LocationInCommonType;
    assetMetrics?: AssetMetricsInCommonType[];
    maintenance?: MaintenanceInCommonType;
};

/**
 * 删除服务器——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteMachineReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取平台接入MCU——请求参数类型定义
 * @params platformId {string} 分级平台ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetMcuReqType = {
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取平台接入MCU——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {MCUDataOutCommonType[]} 记录
 */
export type GetMcuResType = {
    totalCount: number;
    records: MCUDataOutCommonType[];
};

/**
 * 根据ID获取MCU——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} platformId
 * @headers X-version {string}
 */
export type GetMcuByIdReqType = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * 根据ID获取MCU——响应参数类型定义
 * @params id {string} 标识
 * @params type {number} 平台类型
 * @params name {string} MCU名称
 * @params accessKeyID {string} 授权码
 * @params accessKeySecret {string} 秘钥
 * @params domain {string} IP地址
 * @params description {string} 描述
 * @params extension {undefined} 拓展信息
 */
export type GetMcuByIdResType = {
    id: string;
    type: number;
    name: string;
    accessKeyID: string;
    accessKeySecret: string;
    domain: string;
    description: string;
    extension: undefined;
};

/**
 * 获取符合查询条件的终端——请求参数类型定义
 * @params keyword {string} 模糊匹配关键字
 * @params type {number} 查找的终端类型
 * @params organization {string} 所属组织架构
 * @params id {string} MCU ID
 * @params platformId {string} 分级平台ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetMcuTerminalReqType = {
    keyword?: string;
    type?: number;
    organization?: string;
    id?: string;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取符合查询条件的终端——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TerminalOutCommonType[]} 记录
 */
export type GetMcuTerminalResType = {
    totalCount: number;
    records: TerminalOutCommonType[];
};

/**
 * 获取指标——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetMetricsByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取指标——响应参数类型定义
 * @params id {string} id
 * @params name {string} 名称
 * @params alertTypeId {string} 告警类型ID
 * @params resourceId {string} 来源ID
 */
export type GetMetricsByIdResType = {
    id: string;
    name: string;
    alertTypeId: string;
    resourceId: string;
};

/**
 * 更新指标——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 名称 （必填）
 * @params alertTypeId {string} 告警类型ID
 * @params resourceId {string} 来源ID
 */
export type EditMetricsReqType = {
    id: string;
    'X-version'?: string;
    name: string;
    alertTypeId?: string;
    resourceId?: string;
};

/**
 * 删除指标——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteMetricsReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 搜索指标——请求参数类型定义
 * @params keyword {string} 关键词
 * @params platformId {string} 分级平台ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetMetricsReqType = {
    keyword?: string;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 搜索指标——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {MetricsOutCommonType[]} 记录
 */
export type GetMetricsResType = {
    totalCount: number;
    records: MetricsOutCommonType[];
};

/**
 * 新增指标——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 名称 （必填）
 * @params alertTypeId {string} 告警类型ID
 * @params resourceId {string} 来源ID
 */
export type AddMetricsReqType = {
    'X-version'?: string;
    name: string;
    alertTypeId?: string;
    resourceId?: string;
};

/**
 * 新增指标——响应参数类型定义
 * @params id {string} id
 * @params name {string} 名称
 * @params alertTypeId {string} 告警类型ID
 * @params resourceId {string} 来源ID
 */
export type AddMetricsResType = {
    id: string;
    name: string;
    alertTypeId: string;
    resourceId: string;
};

/**
 * 导入指标——请求参数类型定义
 * @headers X-version {string}
 * @params importMetrics {ImportMetricsInCommonType[]} 指标
 */
export type ImportMetricsReqType = {
    'X-version'?: string;
    importMetrics?: ImportMetricsInCommonType[];
};

/**
 * 获取平台接入NC——请求参数类型定义
 * @params platformId {string} 分级平台ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetNcReqType = {
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取平台接入NC——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {VirtualNCDeviceOutCommonType[]} 记录
 */
export type GetNcResType = {
    totalCount: number;
    records: VirtualNCDeviceOutCommonType[];
};

/**
 * 获取NC通过ID——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} platformId
 * @headers X-version {string}
 */
export type GetNcByIdReqType = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * 获取NC通过ID——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 名称
 * @params connectionState {number} 连接状态，0:无效,1:已连接,2:未连接
 * @params description {string} 描述
 * @params prefix {string} VNC字冠
 * @params isKeepAlive {boolean} 是否开启心跳
 * @params timeInterval {number} 心跳时长
 * @params masterNCDevice {NCDeviceOutCommonType} 主NC设备
 * @params slaveNCDevice {NCDeviceOutCommonType} 从NC设备
 * @params longitude {number} 经度
 * @params latitude {number} 维度
 */
export type GetNcByIdResType = {
    id: string;
    name: string;
    connectionState: number;
    description: string;
    prefix: string;
    isKeepAlive: boolean;
    timeInterval: number;
    masterNCDevice: NCDeviceOutCommonType;
    slaveNCDevice: NCDeviceOutCommonType;
    longitude: number;
    latitude: number;
};

/**
 * 获取指定VNC下的号码列表——请求参数类型定义
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字查询
 * @params IsPhoneLine {boolean} 是否电话线路
 * @params platformId {string} 分级平台ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetNcPhonesReqType = {
    id: string;
    Keyword?: string;
    IsPhoneLine?: boolean;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取指定VNC下的号码列表——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PhoneOutCommonType[]} 记录
 */
export type GetNcPhonesResType = {
    totalCount: number;
    records: PhoneOutCommonType[];
};

/**
 * 获取对应VNC设备的中继群配置——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} 分级平台ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetNcTrunkGroupConfigsReqType = {
    id: string;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取对应VNC设备的中继群配置——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TrunkGroupConfigOutCommonType[]} 记录
 */
export type GetNcTrunkGroupConfigsResType = {
    totalCount: number;
    records: TrunkGroupConfigOutCommonType[];
};

/**
 * 获取网络总览——请求参数类型定义
 * @params platformId {string} platformId
 * @headers X-version {string}
 */
export type GetNetworksOverviewReqType = {
    platformId?: string;
    'X-version'?: string;
};

/**
 * 获取网络总览——响应参数类型定义
 * @params name {string} 资产名称
 * @params description {string} 资源描述
 * @params totalCount {number} 总数
 * @params onlineCount {number} 在线资产数量
 * @params isHaveOnlineState {boolean} 是否存在在线状态
 * @params onlinePercent {number} 在线率
 * @params group {AssetsOverviewBaseCommonType[]} 子分类
 * @params managerAddress {string} 资产管理地址
 */
export type GetNetworksOverviewResType = {
    name: string;
    description: string;
    totalCount: number;
    onlineCount: number;
    isHaveOnlineState: boolean;
    onlinePercent: number;
    group: AssetsOverviewBaseCommonType[];
    managerAddress: string;
};

/**
 * 获取所有网络——请求参数类型定义
 * @params keyword {string} 关键词
 * @params platformId {string} 分级平台ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetNetworksReqType = {
    keyword?: string;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取所有网络——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {NetworkOutCommonType[]} 记录
 */
export type GetNetworksResType = {
    totalCount: number;
    records: NetworkOutCommonType[];
};

/**
 * 增加网络——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 网络名称 （必填）
 * @params networkInterface {string} 接入网段 （必填）
 * @params boundWidth {number} 带宽
 * @params description {string} 描述
 * @params networkType {NetworkTypeCommonType} 网络类型
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params resourceId {string} 资源ID
 * @params areaCode {string} 行政区域码
 * @params location {LocationInCommonType} 位置信息
 * @params assetMetrics {AssetMetricsInCommonType[]} 指标
 * @params maintenance {MaintenanceInCommonType} 检修
 * @params proxyIp {string} 代理IP
 * @params proxyPort {number} 代理端口
 */
export type AddNetworksReqType = {
    'X-version'?: string;
    name: string;
    networkInterface: string;
    boundWidth?: number;
    description?: string;
    networkType?: NetworkTypeCommonType;
    extension?: undefined;
    contact?: ContactCommonType;
    resourceId?: string;
    areaCode?: string;
    location?: LocationInCommonType;
    assetMetrics?: AssetMetricsInCommonType[];
    maintenance?: MaintenanceInCommonType;
    proxyIp?: string;
    proxyPort?: number;
};

/**
 * 增加网络——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 网络名称
 * @params networkInterface {string} 接入网段
 * @params boundWidth {number} 带宽
 * @params description {string} 描述
 * @params networkType {NetworkTypeCommonType} 网络类型
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params resourceId {string} 资源ID
 * @params createTime {string} 添加时间
 * @params status {AssetStatusCommonType} 连接状态
 * @params areaCode {string} 行政区域码
 * @params location {LocationOutCommonType} 位置信息
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params maintenance {MaintenanceOutCommonType} 检修
 * @params proxyIp {string} 代理IP
 * @params proxyPort {number} 代理端口
 */
export type AddNetworksResType = {
    id: string;
    name: string;
    networkInterface: string;
    boundWidth: number;
    description: string;
    networkType: NetworkTypeCommonType;
    extension: undefined;
    contact: ContactCommonType;
    resourceId: string;
    createTime: string;
    status: AssetStatusCommonType;
    areaCode: string;
    location: LocationOutCommonType;
    assetMetrics: AssetMetricsOutCommonType[];
    maintenance: MaintenanceOutCommonType;
    proxyIp: string;
    proxyPort: number;
};

/**
 * 通过ID获取网络——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} platformId
 * @headers X-version {string}
 */
export type GetNetworkByIdReqType = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * 通过ID获取网络——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 网络名称
 * @params networkInterface {string} 接入网段
 * @params boundWidth {number} 带宽
 * @params description {string} 描述
 * @params networkType {NetworkTypeCommonType} 网络类型
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params resourceId {string} 资源ID
 * @params createTime {string} 添加时间
 * @params status {AssetStatusCommonType} 连接状态
 * @params areaCode {string} 行政区域码
 * @params location {LocationOutCommonType} 位置信息
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params maintenance {MaintenanceOutCommonType} 检修
 * @params proxyIp {string} 代理IP
 * @params proxyPort {number} 代理端口
 */
export type GetNetworkByIdResType = {
    id: string;
    name: string;
    networkInterface: string;
    boundWidth: number;
    description: string;
    networkType: NetworkTypeCommonType;
    extension: undefined;
    contact: ContactCommonType;
    resourceId: string;
    createTime: string;
    status: AssetStatusCommonType;
    areaCode: string;
    location: LocationOutCommonType;
    assetMetrics: AssetMetricsOutCommonType[];
    maintenance: MaintenanceOutCommonType;
    proxyIp: string;
    proxyPort: number;
};

/**
 * 更新网络——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 网络名称 （必填）
 * @params networkInterface {string} 接入网段 （必填）
 * @params boundWidth {number} 带宽
 * @params description {string} 描述
 * @params networkType {NetworkTypeCommonType} 网络类型
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params resourceId {string} 资源ID
 * @params areaCode {string} 行政区域码
 * @params location {LocationInCommonType} 位置信息
 * @params assetMetrics {AssetMetricsInCommonType[]} 指标
 * @params maintenance {MaintenanceInCommonType} 检修
 * @params proxyIp {string} 代理IP
 * @params proxyPort {number} 代理端口
 */
export type EditNetworkReqType = {
    id: string;
    'X-version'?: string;
    name: string;
    networkInterface: string;
    boundWidth?: number;
    description?: string;
    networkType?: NetworkTypeCommonType;
    extension?: undefined;
    contact?: ContactCommonType;
    resourceId?: string;
    areaCode?: string;
    location?: LocationInCommonType;
    assetMetrics?: AssetMetricsInCommonType[];
    maintenance?: MaintenanceInCommonType;
    proxyIp?: string;
    proxyPort?: number;
};

/**
 * 删除网络——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteNetworkReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 网络导入——请求参数类型定义
 * @headers X-version {string}
 * @params importNetworks {NetworkInCommonType[]} 网络 （必填）
 */
export type ImportNetworksReqType = {
    'X-version'?: string;
    importNetworks: NetworkInCommonType[];
};

/**
 * 获取平台总览——请求参数类型定义
 * @params platformId {string} platformId
 * @headers X-version {string}
 */
export type GetPlatformsOverviewReqType = {
    platformId?: string;
    'X-version'?: string;
};

/**
 * 获取平台总览——响应参数类型定义
 * @params name {string} 资产名称
 * @params description {string} 资源描述
 * @params totalCount {number} 总数
 * @params onlineCount {number} 在线资产数量
 * @params isHaveOnlineState {boolean} 是否存在在线状态
 * @params onlinePercent {number} 在线率
 * @params group {AssetsOverviewBaseCommonType[]} 子分类
 * @params managerAddress {string} 资产管理地址
 */
export type GetPlatformsOverviewResType = {
    name: string;
    description: string;
    totalCount: number;
    onlineCount: number;
    isHaveOnlineState: boolean;
    onlinePercent: number;
    group: AssetsOverviewBaseCommonType[];
    managerAddress: string;
};

/**
 * 搜索第三方平台——请求参数类型定义
 * @params keyword {string} 关键词
 * @params platformIds {any[]} 第三方平台ID列表,同时支持resourceId查询
 * @params prefixAreaCode {string} 行政区域码前缀查询，使用英文","隔开，传入完整的行政区域码也会分割处理为区域码前缀
 * @params networkID {string} 所属网络ID
 * @params platformId {string} 分级平台ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type AtsGetPlatformsReqType = {
    keyword?: string;
    platformIds?: any[];
    prefixAreaCode?: string;
    networkID?: string;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 搜索第三方平台——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ThirdPlatformOutCommonType[]} 记录
 */
export type AtsGetPlatformsResType = {
    totalCount: number;
    records: ThirdPlatformOutCommonType[];
};

/**
 * 增加平台——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 名称 （必填）
 * @params description {string} 描述
 * @params ipAddress {string} 接入IP
 * @params managerAddress {string} 平台管理地址 （必填）
 * @params account {string} 账号
 * @params password {string} 密码
 * @params areaCode {string} 行政区域码
 * @params department {string} 所属部门
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params accessMethod {string} 接入方式
 * @params networkID {string} 所属网络ID
 * @params resourceId {string} 资源ID
 * @params location {LocationInCommonType} 位置信息
 * @params assetMetrics {AssetMetricsInCommonType[]} 指标
 * @params maintenance {MaintenanceInCommonType} 检修
 */
export type AddPlatformReqType = {
    'X-version'?: string;
    name: string;
    description?: string;
    ipAddress?: string;
    managerAddress: string;
    account?: string;
    password?: string;
    areaCode?: string;
    department?: string;
    extension?: undefined;
    contact?: ContactCommonType;
    accessMethod?: string;
    networkID?: string;
    resourceId?: string;
    location?: LocationInCommonType;
    assetMetrics?: AssetMetricsInCommonType[];
    maintenance?: MaintenanceInCommonType;
};

/**
 * 增加平台——响应参数类型定义
 * @params id {string} Id
 * @params ipAddress {string} 接入IP
 * @params managerAddress {string} 平台管理地址
 * @params name {string} 名称
 * @params description {string} 描述
 * @params status {AssetStatusCommonType} 资产状态1在线，2不在线
 * @params account {string} 账号
 * @params password {string} 密码
 * @params areaCode {string} 行政区域码
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
 */
export type AddPlatformResType = {
    id: string;
    ipAddress: string;
    managerAddress: string;
    name: string;
    description: string;
    status: AssetStatusCommonType;
    account: string;
    password: string;
    areaCode: string;
    department: string;
    extension: undefined;
    contact: ContactCommonType;
    accessMethod: string;
    resourceId: string;
    createTime: string;
    network: NetworkBaseOutCommonType;
    location: LocationOutCommonType;
    assetMetrics: AssetMetricsOutCommonType[];
    maintenance: MaintenanceOutCommonType;
};

/**
 * POST查询平台集合——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params platformIds {any[]} 第三方平台ID列表,同时支持资源ID(resourceId)查询
 * @params keyword {string} 关键词
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params networkId {string} 网络id
 * @params status {AssetStatusCommonType} 资产状态 1已连接，2未连接
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 */
export type SearchPlatformsByIdReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    platformIds?: any[];
    keyword?: string;
    prefixAreaCodes?: any[];
    networkId?: string;
    status?: AssetStatusCommonType;
    isMatchNullAreaCode?: boolean;
};

/**
 * POST查询平台集合——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ThirdPlatformOutCommonType[]} 记录
 */
export type SearchPlatformsByIdResType = {
    totalCount: number;
    records: ThirdPlatformOutCommonType[];
};

/**
 * 获取平台——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} platformId
 * @headers X-version {string}
 */
export type GetPlatformByIdReqType = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * 获取平台——响应参数类型定义
 * @params id {string} Id
 * @params ipAddress {string} 接入IP
 * @params managerAddress {string} 平台管理地址
 * @params name {string} 名称
 * @params description {string} 描述
 * @params status {AssetStatusCommonType} 资产状态1在线，2不在线
 * @params account {string} 账号
 * @params password {string} 密码
 * @params areaCode {string} 行政区域码
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
 */
export type GetPlatformByIdResType = {
    id: string;
    ipAddress: string;
    managerAddress: string;
    name: string;
    description: string;
    status: AssetStatusCommonType;
    account: string;
    password: string;
    areaCode: string;
    department: string;
    extension: undefined;
    contact: ContactCommonType;
    accessMethod: string;
    resourceId: string;
    createTime: string;
    network: NetworkBaseOutCommonType;
    location: LocationOutCommonType;
    assetMetrics: AssetMetricsOutCommonType[];
    maintenance: MaintenanceOutCommonType;
};

/**
 * 更新平台——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 名称 （必填）
 * @params description {string} 描述
 * @params ipAddress {string} 接入IP
 * @params managerAddress {string} 平台管理地址 （必填）
 * @params account {string} 账号
 * @params password {string} 密码
 * @params areaCode {string} 行政区域码
 * @params department {string} 所属部门
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params accessMethod {string} 接入方式
 * @params networkID {string} 所属网络ID
 * @params resourceId {string} 资源ID
 * @params location {LocationInCommonType} 位置信息
 * @params assetMetrics {AssetMetricsInCommonType[]} 指标
 * @params maintenance {MaintenanceInCommonType} 检修
 */
export type EditPlatformReqType = {
    id: string;
    'X-version'?: string;
    name: string;
    description?: string;
    ipAddress?: string;
    managerAddress: string;
    account?: string;
    password?: string;
    areaCode?: string;
    department?: string;
    extension?: undefined;
    contact?: ContactCommonType;
    accessMethod?: string;
    networkID?: string;
    resourceId?: string;
    location?: LocationInCommonType;
    assetMetrics?: AssetMetricsInCommonType[];
    maintenance?: MaintenanceInCommonType;
};

/**
 * 删除平台——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeletePlatformReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 批量删除——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} id （必填）
 */
export type DeletePlatformsReqType = {
    'X-version'?: string;
    ids: any[];
};

/**
 * 第三方平台导入——请求参数类型定义
 * @headers X-version {string}
 * @params importThirdPlatforms {ThirdPlatformInCommonType[]} 第三方平台 （必填）
 */
export type ImportPlatformsReqType = {
    'X-version'?: string;
    importThirdPlatforms: ThirdPlatformInCommonType[];
};

/**
 * 搜索定点装备——请求参数类型定义
 * @params keyword {string} 关键词
 * @params networkID {string} 所属网络ID
 * @params platformId {string} 分级平台ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetPositionEquipmentReqType = {
    keyword?: string;
    networkID?: string;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 搜索定点装备——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PositionEquipmentOutCommonType[]} 记录
 */
export type GetPositionEquipmentResType = {
    totalCount: number;
    records: PositionEquipmentOutCommonType[];
};

/**
 * 增加定点装备——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 装备名称 （必填）
 * @params contact {ContactCommonType} 联系人
 * @params equipmentType {EquipmentTypeCommonType} 装备类型
 * @params collectionCycle {number} 采集周期
 * @params description {string} 描述
 * @params networkID {string} 所属网络ID
 * @params areaCode {string} 行政区域码
 * @params resourceId {string} 资源id
 * @params location {LocationInCommonType} 位置信息
 * @params assetMetrics {AssetMetricsInCommonType[]} 指标
 * @params maintenance {MaintenanceInCommonType} 检修
 */
export type AddPositionEquipmentReqType = {
    'X-version'?: string;
    name: string;
    contact?: ContactCommonType;
    equipmentType?: EquipmentTypeCommonType;
    collectionCycle?: number;
    description?: string;
    networkID?: string;
    areaCode?: string;
    resourceId?: string;
    location?: LocationInCommonType;
    assetMetrics?: AssetMetricsInCommonType[];
    maintenance?: MaintenanceInCommonType;
};

/**
 * 增加定点装备——响应参数类型定义
 * @params id {string} 装备标识
 * @params name {string} 装备名称
 * @params contact {ContactCommonType} 联系人
 * @params equipmentType {EquipmentTypeCommonType} 装备类型
 * @params collectionCycle {number} 采集周期
 * @params description {string} 描述
 * @params status {AssetStatusCommonType} 资产状态1在线，2不在线
 * @params network {NetworkBaseOutCommonType} 所属网络
 * @params areaCode {string} 行政区域码
 * @params resourceId {string} 资源id
 * @params location {LocationOutCommonType} 位置信息
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params maintenance {MaintenanceOutCommonType} 检修
 */
export type AddPositionEquipmentResType = {
    id: string;
    name: string;
    contact: ContactCommonType;
    equipmentType: EquipmentTypeCommonType;
    collectionCycle: number;
    description: string;
    status: AssetStatusCommonType;
    network: NetworkBaseOutCommonType;
    areaCode: string;
    resourceId: string;
    location: LocationOutCommonType;
    assetMetrics: AssetMetricsOutCommonType[];
    maintenance: MaintenanceOutCommonType;
};

/**
 * 通过ID获取定点装备——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} platformId
 * @headers X-version {string}
 */
export type GetPositionEquipmentByIdReqType = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * 通过ID获取定点装备——响应参数类型定义
 * @params id {string} 装备标识
 * @params name {string} 装备名称
 * @params contact {ContactCommonType} 联系人
 * @params equipmentType {EquipmentTypeCommonType} 装备类型
 * @params collectionCycle {number} 采集周期
 * @params description {string} 描述
 * @params status {AssetStatusCommonType} 资产状态1在线，2不在线
 * @params network {NetworkBaseOutCommonType} 所属网络
 * @params areaCode {string} 行政区域码
 * @params resourceId {string} 资源id
 * @params location {LocationOutCommonType} 位置信息
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params maintenance {MaintenanceOutCommonType} 检修
 */
export type GetPositionEquipmentByIdResType = {
    id: string;
    name: string;
    contact: ContactCommonType;
    equipmentType: EquipmentTypeCommonType;
    collectionCycle: number;
    description: string;
    status: AssetStatusCommonType;
    network: NetworkBaseOutCommonType;
    areaCode: string;
    resourceId: string;
    location: LocationOutCommonType;
    assetMetrics: AssetMetricsOutCommonType[];
    maintenance: MaintenanceOutCommonType;
};

/**
 * 更新定点装备——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 装备名称 （必填）
 * @params contact {ContactCommonType} 联系人
 * @params equipmentType {EquipmentTypeCommonType} 装备类型
 * @params collectionCycle {number} 采集周期
 * @params description {string} 描述
 * @params networkID {string} 所属网络ID
 * @params areaCode {string} 行政区域码
 * @params resourceId {string} 资源id
 * @params location {LocationInCommonType} 位置信息
 * @params assetMetrics {AssetMetricsInCommonType[]} 指标
 * @params maintenance {MaintenanceInCommonType} 检修
 */
export type EditPositionEquipmentReqType = {
    id: string;
    'X-version'?: string;
    name: string;
    contact?: ContactCommonType;
    equipmentType?: EquipmentTypeCommonType;
    collectionCycle?: number;
    description?: string;
    networkID?: string;
    areaCode?: string;
    resourceId?: string;
    location?: LocationInCommonType;
    assetMetrics?: AssetMetricsInCommonType[];
    maintenance?: MaintenanceInCommonType;
};

/**
 * 删除定点装备——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeletePositionEquipmentReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 定位装备导入——请求参数类型定义
 * @headers X-version {string}
 * @params importPositionEquipments {PositionEquipmentInCommonType[]} 定位装备 （必填）
 */
export type ImportPositionEquipmentReqType = {
    'X-version'?: string;
    importPositionEquipments: PositionEquipmentInCommonType[];
};

/**
 * 总览——请求参数类型定义
 * @params ignoreOtherPlatform {string} 告警：忽略其他平台
 * @params platformId {string} 分级平台ID
 * @headers X-version {string}
 */
export type GetStatisticsOverviewReqType = {
    ignoreOtherPlatform?: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * 总览——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {OverviewOutCommonType[]} 记录
 */
export type GetStatisticsOverviewResType = {
    totalCount: number;
    records: OverviewOutCommonType[];
};

/**
 * 支持行政区域前缀获取总览——请求参数类型定义
 * @headers X-version {string}
 * @params platformId {string} 分级平台ID
 * @params ignoreOtherPlatform {string} 告警：忽略其他平台
 * @params prefixAreaCodes {any[]} 行政区域码前缀
 */
export type OverviewByPrefixAreaCodesReqType = {
    'X-version'?: string;
    platformId?: string;
    ignoreOtherPlatform?: string;
    prefixAreaCodes?: any[];
};

/**
 * 支持行政区域前缀获取总览——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {OverviewOutCommonType[]} 记录
 */
export type OverviewByPrefixAreaCodesResType = {
    totalCount: number;
    records: OverviewOutCommonType[];
};

/**
 * 客户端总览——请求参数类型定义
 * @params platformId {string} 分级平台ID
 * @headers X-version {string}
 */
export type GetStatisticsClientOverviewReqType = {
    platformId?: string;
    'X-version'?: string;
};

/**
 * 客户端总览——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ClientOverviewCommonType[]} 记录
 */
export type GetStatisticsClientOverviewResType = {
    totalCount: number;
    records: ClientOverviewCommonType[];
};

/**
 * 支持行政区域前缀获取客户端总览——请求参数类型定义
 * @headers X-version {string}
 * @params platformId {string} 分级id
 * @params prefixAreaCodes {any[]} 行政区域码前缀
 */
export type ClientOverviewByPrefixAreaCodesReqType = {
    'X-version'?: string;
    platformId?: string;
    prefixAreaCodes?: any[];
};

/**
 * 支持行政区域前缀获取客户端总览——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ClientOverviewCommonType[]} 记录
 */
export type ClientOverviewByPrefixAreaCodesResType = {
    totalCount: number;
    records: ClientOverviewCommonType[];
};

/**
 * 终端总览——请求参数类型定义
 * @params platformId {string} 分级平台ID
 * @headers X-version {string}
 */
export type GetStatisticsTerminalOverviewReqType = {
    platformId?: string;
    'X-version'?: string;
};

/**
 * 终端总览——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TerminalOverviewCommonType[]} 记录
 */
export type GetStatisticsTerminalOverviewResType = {
    totalCount: number;
    records: TerminalOverviewCommonType[];
};

/**
 * 支持行政区域前缀获取终端总览——请求参数类型定义
 * @headers X-version {string}
 * @params platformId {string} 分级id
 * @params prefixAreaCodes {any[]} 行政区域码前缀
 */
export type TerminalOverviewByPrefixAreaCodesReqType = {
    'X-version'?: string;
    platformId?: string;
    prefixAreaCodes?: any[];
};

/**
 * 支持行政区域前缀获取终端总览——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TerminalOverviewCommonType[]} 记录
 */
export type TerminalOverviewByPrefixAreaCodesResType = {
    totalCount: number;
    records: TerminalOverviewCommonType[];
};

/**
 * 按行政区域统计终端——请求参数类型定义
 * @headers X-version {string}
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params terminalType {TerminalTypeCommonType} 终端类型
 */
export type GetTerminalByAreaReqType = {
    'X-version'?: string;
    prefixAreaCodes?: any[];
    terminalType?: TerminalTypeCommonType;
};

/**
 * 按行政区域统计终端——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PrefixAreaCodeStatisticsOutCommonType[]} 记录
 */
export type GetTerminalByAreaResType = {
    totalCount: number;
    records: PrefixAreaCodeStatisticsOutCommonType[];
};

/**
 * 按行政区域统计第三方平台——请求参数类型定义
 * @headers X-version {string}
 * @params prefixAreaCodes {any[]} 行政区域前缀
 */
export type GetPlatformByAreaReqType = {
    'X-version'?: string;
    prefixAreaCodes?: any[];
};

/**
 * 按行政区域统计第三方平台——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PrefixAreaCodeStatisticsOutCommonType[]} 记录
 */
export type GetPlatformByAreaResType = {
    totalCount: number;
    records: PrefixAreaCodeStatisticsOutCommonType[];
};

/**
 * 获取监测设备终端分类统计——请求参数类型定义
 * @headers X-version {string}
 * @params prefixAreaCodes {any[]} 行政区域前缀
 */
export type GetMonitorDeviceStatisticsReqType = {
    'X-version'?: string;
    prefixAreaCodes?: any[];
};

/**
 * 获取监测设备终端分类统计——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {MonitorDeviceCountOutCommonType[]} 记录
 */
export type GetMonitorDeviceStatisticsResType = {
    totalCount: number;
    records: MonitorDeviceCountOutCommonType[];
};

/**
 * 资产类型统计——请求参数类型定义
 * @headers X-version {string}
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params functionTypes {AssetFunctionTypesCommonType} 功能分类
 * @params assetType {AssetTypeCommonType} 一级类型
 * @params parentId {string} 父级ID
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 */
export type GetAssetTypeStatisticsReqType = {
    'X-version'?: string;
    prefixAreaCodes?: any[];
    functionTypes?: AssetFunctionTypesCommonType;
    assetType?: AssetTypeCommonType;
    parentId?: string;
    isMatchNullAreaCode?: boolean;
};

/**
 * 资产类型统计——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AggregateTypeCountOutCommonType[]} 记录
 */
export type GetAssetTypeStatisticsResType = {
    totalCount: number;
    records: AggregateTypeCountOutCommonType[];
};

/**
 * 获取终端总览——请求参数类型定义
 * @params platformId {string} platformId
 * @headers X-version {string}
 */
export type GetTerminalsReqType = {
    platformId?: string;
    'X-version'?: string;
};

/**
 * 获取终端总览——响应参数类型定义
 * @params name {string} 资产名称
 * @params description {string} 资源描述
 * @params totalCount {number} 总数
 * @params onlineCount {number} 在线资产数量
 * @params isHaveOnlineState {boolean} 是否存在在线状态
 * @params onlinePercent {number} 在线率
 * @params group {AssetsOverviewBaseCommonType[]} 子分类
 * @params managerAddress {string} 资产管理地址
 */
export type GetTerminalsResType = {
    name: string;
    description: string;
    totalCount: number;
    onlineCount: number;
    isHaveOnlineState: boolean;
    onlinePercent: number;
    group: AssetsOverviewBaseCommonType[];
    managerAddress: string;
};

/**
 * 终端搜索——请求参数类型定义
 * @params keyword {string} 关键词
 * @params terminalIds {any[]} 终端ID列表,同时支持resourceId查询
 * @params terminalType {number} 终端类型
 * @params prefixAreaCode {string} 行政区域码前缀查询，使用英文","隔开，传入完整的行政区域码也会分割处理为区域码前缀
 * @params status {number} 状态 1已连接，2未连接
 * @params networkID {string} 所属网络ID
 * @params RelateTypeId {string} 关联类型ID
 * @params platformId {string} 分级平台ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type SearchTerminalsReqType = {
    keyword?: string;
    terminalIds?: any[];
    terminalType?: number;
    prefixAreaCode?: string;
    status?: number;
    networkID?: string;
    RelateTypeId?: string;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 终端搜索——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TerminalOutCommonType[]} 记录
 */
export type SearchTerminalsResType = {
    totalCount: number;
    records: TerminalOutCommonType[];
};

/**
 * 新增终端——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 名称 （必填）
 * @params ip {string} ip
 * @params port {string} 端口
 * @params number {string} 号码
 * @params description {string} 描述信息
 * @params account {string} 账号
 * @params password {string} 密码
 * @params terminalType {TerminalTypeCommonType} 终端类型
 * @params areaCode {string} 行政区域码
 * @params protocolType {string} 协议类型:H323,SFB,SIP,RTSP,RTMP
 * @params relatePlatformId {string} 关联平台ID
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params groupId {string} 终端组id
 * @params networkID {string} 所属网络ID
 * @params resourceId {string} 资源ID
 * @params relateTypeId {string} 关联类型ID
 * @params terminalLocation {LocationInCommonType} 位置信息
 * @params assetMetrics {AssetMetricsInCommonType[]} 指标
 * @params sourceId {string} 来源ID
 * @params relateCameraId {string} 关联监控ID
 * @params maintenance {MaintenanceInCommonType} 检修
 */
export type AtsAddTerminalsReqType = {
    'X-version'?: string;
    name: string;
    ip?: string;
    port?: string;
    number?: string;
    description?: string;
    account?: string;
    password?: string;
    terminalType?: TerminalTypeCommonType;
    areaCode?: string;
    protocolType?: string;
    relatePlatformId?: string;
    extension?: undefined;
    contact?: ContactCommonType;
    groupId?: string;
    networkID?: string;
    resourceId?: string;
    relateTypeId?: string;
    terminalLocation?: LocationInCommonType;
    assetMetrics?: AssetMetricsInCommonType[];
    sourceId?: string;
    relateCameraId?: string;
    maintenance?: MaintenanceInCommonType;
};

/**
 * 新增终端——响应参数类型定义
 * @params id {string} 标识
 * @params name {string} 名称
 * @params ip {string} ip
 * @params port {string} 端口
 * @params number {string} 号码
 * @params description {string} 描述信息
 * @params account {string} 账号
 * @params password {string} 密码
 * @params resourceId {string} 资源ID
 * @params createTime {string} 添加时间
 * @params terminalType {TerminalTypeCommonType} 终端类型
 * @params areaCode {string} 行政区域码
 * @params protocolType {string} 协议
 * @params relatePlatform {RelatePlatformBaseOutCommonType} 关联平台
 * @params extension {undefined} 拓展
 * @params relateCameraId {string} 关联监控ID
 * @params contact {ContactCommonType} 联系人
 * @params status {AssetStatusCommonType} 资产状态1在线，2不在线
 * @params relateType {TypeConfigOutCommonType} 关联类型
 * @params terminalGroup {TerminalGroupOutCommonType} 终端组信息
 * @params network {NetworkBaseOutCommonType} 所属网络
 * @params terminalLocation {LocationOutCommonType} 位置信息
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params source {TerminalSourceOutCommonType} 来源
 * @params maintenance {MaintenanceOutCommonType} 检修
 */
export type AtsAddTerminalsResType = {
    id: string;
    name: string;
    ip: string;
    port: string;
    number: string;
    description: string;
    account: string;
    password: string;
    resourceId: string;
    createTime: string;
    terminalType: TerminalTypeCommonType;
    areaCode: string;
    protocolType: string;
    relatePlatform: RelatePlatformBaseOutCommonType;
    extension: undefined;
    relateCameraId: string;
    contact: ContactCommonType;
    status: AssetStatusCommonType;
    relateType: TypeConfigOutCommonType;
    terminalGroup: TerminalGroupOutCommonType;
    network: NetworkBaseOutCommonType;
    terminalLocation: LocationOutCommonType;
    assetMetrics: AssetMetricsOutCommonType[];
    source: TerminalSourceOutCommonType;
    maintenance: MaintenanceOutCommonType;
};

/**
 * POST查询终端集合——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params terminalIds {any[]} 终端ID列表,同时支持资源ID(resourceId)查询
 * @params keyword {string} 关键词
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params terminalType {TerminalTypeCommonType} 终端类型
 * @params status {AssetStatusCommonType} 资产状态 1已连接，2未连接
 * @params networkID {string} 所属网络
 * @params relateTypeId {string} 关联类型ID
 * @params isSearchNullRelateType {boolean} 是否查询空关联类型
 * @params relateTypeIds {any[]} 关联类型ID集合查询
 * @params sourceId {string} 来源ID
 * @params groupId {string} 组ID
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 */
export type SearchTerminalsByIdReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    terminalIds?: any[];
    keyword?: string;
    prefixAreaCodes?: any[];
    terminalType?: TerminalTypeCommonType;
    status?: AssetStatusCommonType;
    networkID?: string;
    relateTypeId?: string;
    isSearchNullRelateType?: boolean;
    relateTypeIds?: any[];
    sourceId?: string;
    groupId?: string;
    isMatchNullAreaCode?: boolean;
};

/**
 * POST查询终端集合——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TerminalOutCommonType[]} 记录
 */
export type SearchTerminalsByIdResType = {
    totalCount: number;
    records: TerminalOutCommonType[];
};

/**
 * 获取终端——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} platformId
 * @headers X-version {string}
 */
export type GetTerminalByIdReqType = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * 获取终端——响应参数类型定义
 * @params id {string} 标识
 * @params name {string} 名称
 * @params ip {string} ip
 * @params port {string} 端口
 * @params number {string} 号码
 * @params description {string} 描述信息
 * @params account {string} 账号
 * @params password {string} 密码
 * @params resourceId {string} 资源ID
 * @params createTime {string} 添加时间
 * @params terminalType {TerminalTypeCommonType} 终端类型
 * @params areaCode {string} 行政区域码
 * @params protocolType {string} 协议
 * @params relatePlatform {RelatePlatformBaseOutCommonType} 关联平台
 * @params extension {undefined} 拓展
 * @params relateCameraId {string} 关联监控ID
 * @params contact {ContactCommonType} 联系人
 * @params status {AssetStatusCommonType} 资产状态1在线，2不在线
 * @params relateType {TypeConfigOutCommonType} 关联类型
 * @params terminalGroup {TerminalGroupOutCommonType} 终端组信息
 * @params network {NetworkBaseOutCommonType} 所属网络
 * @params terminalLocation {LocationOutCommonType} 位置信息
 * @params assetMetrics {AssetMetricsOutCommonType[]} 指标
 * @params source {TerminalSourceOutCommonType} 来源
 * @params maintenance {MaintenanceOutCommonType} 检修
 */
export type GetTerminalByIdResType = {
    id: string;
    name: string;
    ip: string;
    port: string;
    number: string;
    description: string;
    account: string;
    password: string;
    resourceId: string;
    createTime: string;
    terminalType: TerminalTypeCommonType;
    areaCode: string;
    protocolType: string;
    relatePlatform: RelatePlatformBaseOutCommonType;
    extension: undefined;
    relateCameraId: string;
    contact: ContactCommonType;
    status: AssetStatusCommonType;
    relateType: TypeConfigOutCommonType;
    terminalGroup: TerminalGroupOutCommonType;
    network: NetworkBaseOutCommonType;
    terminalLocation: LocationOutCommonType;
    assetMetrics: AssetMetricsOutCommonType[];
    source: TerminalSourceOutCommonType;
    maintenance: MaintenanceOutCommonType;
};

/**
 * 更新终端——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 名称 （必填）
 * @params ip {string} ip
 * @params port {string} 端口
 * @params number {string} 号码
 * @params description {string} 描述信息
 * @params account {string} 账号
 * @params password {string} 密码
 * @params terminalType {TerminalTypeCommonType} 终端类型
 * @params areaCode {string} 行政区域码
 * @params protocolType {string} 协议类型:H323,SFB,SIP,RTSP,RTMP
 * @params relatePlatformId {string} 关联平台ID
 * @params extension {undefined} 拓展
 * @params contact {ContactCommonType} 联系人
 * @params groupId {string} 终端组id
 * @params networkID {string} 所属网络ID
 * @params resourceId {string} 资源ID
 * @params relateTypeId {string} 关联类型ID
 * @params terminalLocation {LocationInCommonType} 位置信息
 * @params assetMetrics {AssetMetricsInCommonType[]} 指标
 * @params sourceId {string} 来源ID
 * @params relateCameraId {string} 关联监控ID
 * @params maintenance {MaintenanceInCommonType} 检修
 */
export type EditTerminalReqType = {
    id: string;
    'X-version'?: string;
    name: string;
    ip?: string;
    port?: string;
    number?: string;
    description?: string;
    account?: string;
    password?: string;
    terminalType?: TerminalTypeCommonType;
    areaCode?: string;
    protocolType?: string;
    relatePlatformId?: string;
    extension?: undefined;
    contact?: ContactCommonType;
    groupId?: string;
    networkID?: string;
    resourceId?: string;
    relateTypeId?: string;
    terminalLocation?: LocationInCommonType;
    assetMetrics?: AssetMetricsInCommonType[];
    sourceId?: string;
    relateCameraId?: string;
    maintenance?: MaintenanceInCommonType;
};

/**
 * 删除终端——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteTerminalReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 批量删除——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} id （必填）
 */
export type DeleteTerminalsReqType = {
    'X-version'?: string;
    ids: any[];
};

/**
 * 同步VCS视频会议终端——请求参数类型定义
 * @headers X-version {string}
 */
export type SyncVcsTerminalReqType = {
    'X-version'?: string;
};

/**
 * 导入终端（创建视频会议终端不支持指定resourceId）——请求参数类型定义
 * @headers X-version {string}
 * @params importTerminals {TerminalInCommonType[]} 终端 （必填）
 */
export type ImportTerminalsReqType = {
    'X-version'?: string;
    importTerminals: TerminalInCommonType[];
};

/**
 * 获取来源——请求参数类型定义
 * @params TerminalType {number} 终端类型 （必填）
 * @params platformId {string} 分级平台ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetTerminalSourceReqType = {
    TerminalType: number;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取来源——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TerminalSourceOutCommonType[]} 记录
 */
export type GetTerminalSourceResType = {
    totalCount: number;
    records: TerminalSourceOutCommonType[];
};

/**
 * 通过终端号码获取该终端来源——请求参数类型定义
 * @params TerminalType {number} 终端类型
 * @params Number {string} 号码
 * @params platformId {string} 分级平台ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetTerminalSourceByNumberReqType = {
    TerminalType?: number;
    Number?: string;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 通过终端号码获取该终端来源——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TerminalOutCommonType[]} 记录
 */
export type GetTerminalSourceByNumberResType = {
    totalCount: number;
    records: TerminalOutCommonType[];
};

/**
 * 升级关联监控——请求参数类型定义
 * @headers X-version {string}
 */
export type UpgradeRelateCameraReqType = {
    'X-version'?: string;
};

/**
 * 升级关联监控——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TerminalOutCommonType[]} 记录
 */
export type UpgradeRelateCameraResType = {
    totalCount: number;
    records: TerminalOutCommonType[];
};

/**
 * 更新资产拓扑——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params height {number} 高
 * @params width {number} 宽
 * @params topologyNodes {TopologyNodeInCommonType[]} 拓扑节点
 * @params topologyRelationships {TopologyRelationshipCommonType[]} 节点关系
 */
export type EditTopologyReqType = {
    id: string;
    'X-version'?: string;
    height?: number;
    width?: number;
    topologyNodes?: TopologyNodeInCommonType[];
    topologyRelationships?: TopologyRelationshipCommonType[];
};

/**
 * 获取资产拓扑——请求参数类型定义
 * @params platformId {string} 分级平台ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetTopologyReqType = {
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
export type GetTopologyResType = {
    totalCount: number;
    records: TopologyOutCommonType[];
};

/**
 * 获取类型配置——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetTypeConfigReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取类型配置——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 名称
 * @params resourceId {string} 资源id
 * @params type {ConfigTypeCommonType} 配置类型
 */
export type GetTypeConfigResType = {
    id: string;
    name: string;
    resourceId: string;
    type: ConfigTypeCommonType;
};

/**
 * 更新类型配置——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 名称 （必填）
 * @params resourceId {string} 资源id
 * @params type {ConfigTypeCommonType} 配置类型 （必填）
 */
export type EditTypeConfigReqType = {
    id: string;
    'X-version'?: string;
    name: string;
    resourceId?: string;
    type: ConfigTypeCommonType;
};

/**
 * 删除类型配置——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteTypeConfigReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 搜索类型配置——请求参数类型定义
 * @params keyword {string} 关键词
 * @params Type {number} 配置类型
 * @params platformId {string} 分级平台ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetTypeConfigsReqType = {
    keyword?: string;
    Type?: number;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 搜索类型配置——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TypeConfigOutCommonType[]} 记录
 */
export type GetTypeConfigsResType = {
    totalCount: number;
    records: TypeConfigOutCommonType[];
};

/**
 * 新增类型配置——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 名称 （必填）
 * @params resourceId {string} 资源id
 * @params type {ConfigTypeCommonType} 配置类型 （必填）
 */
export type AddTypeConfigReqType = {
    'X-version'?: string;
    name: string;
    resourceId?: string;
    type: ConfigTypeCommonType;
};

/**
 * 新增类型配置——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 名称
 * @params resourceId {string} 资源id
 * @params type {ConfigTypeCommonType} 配置类型
 */
export type AddTypeConfigResType = {
    id: string;
    name: string;
    resourceId: string;
    type: ConfigTypeCommonType;
};

/**
 * 搜索类型配置——请求参数类型定义
 * @headers X-version {string}
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params platformId {string} 分级平台ID
 * @params keyword {string} 关键词
 * @params type {ConfigTypeCommonType} 配置类型
 * @params ids {any[]} Id集合
 */
export type SearchTypeConfigsReqType = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    keyword?: string;
    type?: ConfigTypeCommonType;
    ids?: any[];
};

/**
 * 搜索类型配置——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TypeConfigOutCommonType[]} 记录
 */
export type SearchTypeConfigsResType = {
    totalCount: number;
    records: TypeConfigOutCommonType[];
};

/**
 * 类型配置导出——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} id集合
 */
export type ExportTypeConfigsReqType = {
    'X-version'?: string;
    ids?: any[];
};

/**
 * 类型配置导出——响应参数类型定义
 * @params typeConfigs {ExportTypeConfigOutCommonType[]} 类型配置
 */
export type ExportTypeConfigsResType = {
    typeConfigs: ExportTypeConfigOutCommonType[];
};

/**
 * 类型配置导入——请求参数类型定义
 * @headers X-version {string}
 * @params importTypeConfigs {ImportTypeConfigInCommonType[]} 类型配置
 */
export type ImportTypeConfigsReqType = {
    'X-version'?: string;
    importTypeConfigs?: ImportTypeConfigInCommonType[];
};
