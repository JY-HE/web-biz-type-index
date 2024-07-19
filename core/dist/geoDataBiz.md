/**
 * 边界实体
 * @params resourceId {string} 资源Id
 * @params name {string} 边界名称
 * @params layerId {string} 图层Id
 * @params data {any} 边界数据
 */
type BoundaryInCommonType = {
    resourceId?: string;
    name?: string;
    layerId?: string;
    data?: any;
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
* 地图类型 <br /><remarks>
0-电子 <br />
1-卫星 <br />
2-科幻
</remarks>
*/
type MapTypeCommonType = 0 | 1 | 2;

/**
 * 坐标点
 * @params longitude {number} 经度（正:东经 负:西经）
 * @params latitude {number} 纬度（正:北纬 负:南纬）
 */
type CoordinateCommonType = {
    longitude: number;
    latitude: number;
};

/**
 * 地址坐标
 * @params coordinate {CoordinateCommonType} 坐标
 * @params address {string} 地址
 * @params zoom {number} 地图层级
 */
type AddressCoordinateCommonType = {
    coordinate?: CoordinateCommonType;
    address?: string;
    zoom?: number;
};

/**
 * 可视范围
 * @params leftBottomView {CoordinateCommonType} 左下角经纬度
 * @params rightUpView {CoordinateCommonType} 右上角经纬度
 */
type MapVisualScopeCommonType = {
    leftBottomView?: CoordinateCommonType;
    rightUpView?: CoordinateCommonType;
};

/**
 * 图层大小
 * @params minZoom {number} 最小图层
 * @params maxZoom {number} 最大图层
 */
type MapZoomCommonType = {
    minZoom: number;
    maxZoom: number;
};

/**
 * 近、中、远景实体
 * @params zoom {MapZoomCommonType} 层级区间
 * @params defaultZoom {number} 默认层级
 * @params defaultPitch {number} 默认角度
 */
type ViewPointCommonType = {
    zoom?: MapZoomCommonType;
    defaultZoom?: number;
    defaultPitch?: number;
};

/**
 * 地图遮罩效果
 * @params isShow {boolean} 是否开启
 * @params opacity {number} 不透明度
 */
type MapMaskEffectCommonType = {
    isShow?: boolean;
    opacity?: number;
};

/**
 * 形状
 * @params line {boolean} 线
 * @params polygon {boolean} 面
 * @params highlightPolygon {boolean} 高亮面
 */
type ShapeCommonType = {
    line?: boolean;
    polygon?: boolean;
    highlightPolygon?: boolean;
};

/**
 * 自定义行政区划边界效果配置
 * @params minZoom {number} 最小图层
 * @params maxZoom {number} 最大图层
 * @params line {boolean} 线
 * @params polygon {boolean} 面
 * @params highlightPolygon {boolean} 高亮面
 */
type CustomDistrictLayerCommonType = {
    minZoom?: number;
    maxZoom?: number;
    line?: boolean;
    polygon?: boolean;
    highlightPolygon?: boolean;
};

/**
 * 行政区划边界效果配置
 * @params isShow {boolean} 是否开启行政区划边界效果
 * @params lowViewDistrict {ShapeCommonType} 近景地图层级
 * @params middleViewDistrict {ShapeCommonType} 中景地图层级
 * @params highViewDistrict {ShapeCommonType} 远景地图层级
 * @params customViewDistrict {CustomDistrictLayerCommonType} 自定义地图层级
 */
type AreaBoundaryEffectConfigCommonType = {
    isShow?: boolean;
    lowViewDistrict?: ShapeCommonType;
    middleViewDistrict?: ShapeCommonType;
    highViewDistrict?: ShapeCommonType;
    customViewDistrict?: CustomDistrictLayerCommonType;
};

/**
 * 图层配置实体
 * @params id {string} 图层Id
 * @params productId {string} 产品类型
 * @params mapType {MapTypeCommonType} Map类型
 * @params mapSourceType {string} 地图类型
 * @params defaultMapServerType {string} 初始地图服务类型
 * @params mapServerTypes {any[]} 产品选中的地图服务类型集合
 * @params defaultLayerEffectConfig {string} 初始图层效果配置
 * @params layerEffectConfigs {any[]} 产品选中的图层效果配置集合
 * @params clusterStyle {string} 聚合样式
 * @params minPitch {number} 最小仰俯角
 * @params maxPitch {number} 最大仰俯角
 * @params center {AddressCoordinateCommonType} 默认中心点
 * @params isEnableMapCenter {boolean} 是否开启自定义中心点
 * @params viewBox {MapVisualScopeCommonType} 可视范围
 * @params useFakeMapSdk {boolean} 是否使用SDK
 * @params lowViewPoint {ViewPointCommonType} 近景
 * @params middleViewPoint {ViewPointCommonType} 中景
 * @params highViewPoint {ViewPointCommonType} 远景
 * @params maxiMinZoom {MapZoomCommonType} 地图最大最小层级
 * @params mapMaskEffect {MapMaskEffectCommonType} 地图遮罩效果
 * @params areaBoundaryEffectConfig {AreaBoundaryEffectConfigCommonType} 行政区划边界效果配置
 */
type GeoConfigOutCommonType = {
    id?: string;
    productId?: string;
    mapType?: MapTypeCommonType;
    mapSourceType?: string;
    defaultMapServerType?: string;
    mapServerTypes?: any[];
    defaultLayerEffectConfig?: string;
    layerEffectConfigs?: any[];
    clusterStyle?: string;
    minPitch?: number;
    maxPitch?: number;
    center?: AddressCoordinateCommonType;
    isEnableMapCenter?: boolean;
    viewBox?: MapVisualScopeCommonType;
    useFakeMapSdk?: boolean;
    lowViewPoint?: ViewPointCommonType;
    middleViewPoint?: ViewPointCommonType;
    highViewPoint?: ViewPointCommonType;
    maxiMinZoom?: MapZoomCommonType;
    mapMaskEffect?: MapMaskEffectCommonType;
    areaBoundaryEffectConfig?: AreaBoundaryEffectConfigCommonType;
};

/**
 * 边界实体
 * @params id {string} 边界Id
 * @params resourceId {string} 资源Id
 * @params name {string} 边界名称
 * @params layerId {string} 图层Id
 * @params data {string} 边界数据
 */
type BoundaryOutCommonType = {
    id?: string;
    resourceId?: string;
    name?: string;
    layerId?: string;
    data?: string;
};

/**
 * 多条件查询边界数据请求
 * @params keyWord {string} 关键字
 * @params layerIds {any[]} 图层Id
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, int.MaxValue]
 */
type SearchBoundaryRequestCommonType = {
    keyWord?: string;
    layerIds?: any[];
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {BoundaryOutCommonType[]} 记录
 */
type BoundaryOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: BoundaryOutCommonType[];
};

/**
* 标绘关联类型 <br /><remarks>
0-用户标绘 <br />
1-事件标绘
2-专题标绘
</remarks>
*/
type PlotAssociatedTypeCommonType = 0 | 1 | 2;

/**
 * undefined
 */
type EntityOperationCommonType = 0 | 1 | 2;

/**
 * 标绘回调实体
 * @params bizName {string}
 * @params associatedId {string} 关联Id，如事件Id、用户Id
 * @params plotAssociatedType {PlotAssociatedTypeCommonType} 标绘关联类型，0表示用户标绘，1表示事件标绘
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 */
type PlotEntityCallbackCommonType = {
    bizName?: string;
    associatedId?: string;
    plotAssociatedType?: PlotAssociatedTypeCommonType;
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
};

/**
 * 坐标系入参
 * @params id {string} 坐标系编码
 * @params name {string} 坐标系名称
 */
type CoordinateInCommonType = {
    id?: string;
    name?: string;
};

/**
 * 坐标系响应
 * @params id {string} 坐标系编码
 * @params name {string} 坐标系名称
 */
type CoordinateOutCommonType = {
    id?: string;
    name?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {CoordinateOutCommonType[]} 记录
 */
type CoordinateOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: CoordinateOutCommonType[];
};

/**
 * 行政区域码类型枚举,1:通用,2:自定义,3:设施
 */
type AreaCodeTypeCommonType = 0 | 1 | 2;

/**
 * 区域
 * @params resourceId {string} 资源Id
 * @params englishName {string} 英文名
 * @params coordinate {CoordinateCommonType} 区域坐标点
 * @params areaCode {string} 邮编
 * @params parentId {string} 父级行政区域 Id
 * @params parentPath {string} 树结构父Id路径（不包含自身）
 * @params parentIdPath {string} 树结构父Id路径（包含自身）
 * @params parentNamePath {string} 树结构父名称路径（包含自身）
 * @params geoFilePath {string} 对应 Geo 相关配置文件路径
 * @params platformId {string} 资源所属平台Id
 * @params order {number} 排序
 * @params type {AreaCodeTypeCommonType} 行政区域码类型
 * @params idPath {string} Id 路径
 * @params namePath {string} 名字路径
 * @params isLeaf {boolean} 是否为叶子节点
 * @params id {string} ID
 * @params name {string} 名称
 */
type DistrictOutCommonType = {
    resourceId?: string;
    englishName?: string;
    coordinate?: CoordinateCommonType;
    areaCode?: string;
    parentId?: string;
    parentPath?: string;
    parentIdPath?: string;
    parentNamePath?: string;
    geoFilePath?: string;
    platformId?: string;
    order?: number;
    type?: AreaCodeTypeCommonType;
    idPath?: string;
    namePath?: string;
    isLeaf?: boolean;
    id?: string;
    name?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {DistrictOutCommonType[]} 记录
 */
type DistrictOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: DistrictOutCommonType[];
};

/**
 * 区域
 * @params name {string} 区域名
 * @params englishName {string} 英文名
 * @params coordinate {CoordinateCommonType} 区域坐标点
 * @params areaCode {string} 邮编
 * @params geoFilePath {string} 对应 Geo 相关配置文件路径
 * @params type {AreaCodeTypeCommonType} 行政区域码类型
 */
type DistrictInCommonType = {
    name?: string;
    englishName?: string;
    coordinate: CoordinateCommonType;
    areaCode?: string;
    geoFilePath?: string;
    type?: AreaCodeTypeCommonType;
};

/**
 * 批量查询行政区域请求
 * @params ids {any[]} id/areaCode 集合
 */
type DistrictQueryRequestCommonType = {
    ids?: any[];
};

/**
 * 导入行政区域数据
 * @params id {string} Id
 * @params name {string} 区域名
 * @params englishName {string} 区域英文名
 * @params coordinate {CoordinateCommonType} 行政区域中心点
 * @params areaCode {string} 邮编
 * @params parentId {string} 父级行政区域
 * @params geoFilePath {string} 对应 Geo 相关配置文件路径
 * @params order {number} 排序
 * @params type {AreaCodeTypeCommonType} 行政区域码类型
 */
type DistrictItemCommonType = {
    id: string;
    name?: string;
    englishName?: string;
    coordinate?: CoordinateCommonType;
    areaCode?: string;
    parentId?: string;
    geoFilePath?: string;
    order?: number;
    type?: AreaCodeTypeCommonType;
};

/**
 * 导入行政区域数据请求
 * @params isReload {boolean} 是否导入后重新加载缓存，默认加载
 * @params districtItems {DistrictItemCommonType[]} 导入行政区域数据
 */
type DistrictImportRequestCommonType = {
    isReload?: boolean;
    districtItems?: DistrictItemCommonType[];
};

/**
 * 行政区域聚合请求
 * @params ids {any[]} id/areaCode 集合
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, int.MaxValue]
 */
type DistrictMergeRequestCommonType = {
    ids: any[];
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 行政区域树节点返回类型
 * @params coordinate {CoordinateCommonType} 区域坐标点
 * @params englishName {string} 英文名
 * @params areaCode {string} 区域码
 * @params createTime {string} 创建时间
 * @params order {number} 排序Order
 * @params platformId {string} 资源所属平台Id
 * @params type {AreaCodeTypeCommonType} 行政区域码类型
 * @params geoFilePath {string} 对应 Geo 相关配置文件路径
 * @params parentPath {string} 父级IdPath
 * @params resourceId {string} 资源 Id
 * @params idPath {string} Id 路径
 * @params namePath {string} 名字路径
 * @params isLeaf {boolean} 是否为叶子节点
 * @params id {string} ID
 * @params name {string} 名称
 */
type DistrictTreeNodeOutCommonType = {
    coordinate?: CoordinateCommonType;
    englishName?: string;
    areaCode?: string;
    createTime?: string;
    order?: number;
    platformId?: string;
    type?: AreaCodeTypeCommonType;
    geoFilePath?: string;
    parentPath?: string;
    resourceId?: string;
    idPath?: string;
    namePath?: string;
    isLeaf?: boolean;
    id?: string;
    name?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {DistrictTreeNodeOutCommonType[]} 记录
 */
type DistrictTreeNodeOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: DistrictTreeNodeOutCommonType[];
};

/**
 * 行政区划选中筛选
 * @params parentId {string} 父级ID
 * @params selectedIds {any[]} 选择的行政区划id
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, int.MaxValue]
 */
type DistrictSelectRequestCommonType = {
    parentId?: string;
    selectedIds?: any[];
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 使用状态
 */
type UseStatusCommonType = 0 | 1 | 2;

/**
 * 行政区域选中状态返回类型
 * @params useStatus {UseStatusCommonType} 使用状态
 * @params resourceId {string} 资源Id
 * @params englishName {string} 英文名
 * @params coordinate {CoordinateCommonType} 区域坐标点
 * @params areaCode {string} 邮编
 * @params parentId {string} 父级行政区域 Id
 * @params parentPath {string} 树结构父Id路径（不包含自身）
 * @params parentIdPath {string} 树结构父Id路径（包含自身）
 * @params parentNamePath {string} 树结构父名称路径（包含自身）
 * @params geoFilePath {string} 对应 Geo 相关配置文件路径
 * @params platformId {string} 资源所属平台Id
 * @params order {number} 排序
 * @params type {AreaCodeTypeCommonType} 行政区域码类型
 * @params idPath {string} Id 路径
 * @params namePath {string} 名字路径
 * @params isLeaf {boolean} 是否为叶子节点
 * @params id {string} ID
 * @params name {string} 名称
 */
type DistrictUseStatusOutCommonType = {
    useStatus?: UseStatusCommonType;
    resourceId?: string;
    englishName?: string;
    coordinate?: CoordinateCommonType;
    areaCode?: string;
    parentId?: string;
    parentPath?: string;
    parentIdPath?: string;
    parentNamePath?: string;
    geoFilePath?: string;
    platformId?: string;
    order?: number;
    type?: AreaCodeTypeCommonType;
    idPath?: string;
    namePath?: string;
    isLeaf?: boolean;
    id?: string;
    name?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {DistrictUseStatusOutCommonType[]} 记录
 */
type DistrictUseStatusOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: DistrictUseStatusOutCommonType[];
};

/**
 * 行政区域点位入参
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 */
type DistrictCoordinateInCommonType = {
    longitude?: number;
    latitude?: number;
};

/**
 * 行政区域解析入参
 * @params address {string} 地址
 * @params coordinate {DistrictCoordinateInCommonType} 坐标点
 * @params useDefaultUserDistrict {boolean} 是否使用默认的用户行政区域（用户区域权限内的最高层级权限）
 * @params isVerifyPermission {boolean} 是否开启用户行政区域权限控制
 */
type DistrictParseQueryRequestCommonType = {
    address?: string;
    coordinate?: DistrictCoordinateInCommonType;
    useDefaultUserDistrict?: boolean;
    isVerifyPermission?: boolean;
};

/**
 * 地址解析出参
 * @params districts {DistrictOutCommonType[]} 所属行政区域列表
 * @params address {string} 地址信息
 */
type AnalysisAddressOutCommonType = {
    districts?: DistrictOutCommonType[];
    address?: string;
};

/**
 * 导出行政区域请求
 * @params ids {any[]} Id集合
 * @params type {AreaCodeTypeCommonType} 行政区域码类型,1:通用,2:自定义,3:设施
 */
type ExportDistrictRequestCommonType = {
    ids?: any[];
    type?: AreaCodeTypeCommonType;
};

/**
 * 行政区域导出实体
 * @params id {string} Id
 * @params resourceId {string} 用于导入时的
 * @params name {string} 区域名
 * @params englishName {string} 区域英文名
 * @params coordinate {CoordinateCommonType} 行政区域中心点
 * @params areaCode {string} 邮编
 * @params parentId {string} 父级行政区域
 * @params geoFilePath {string} 对应 Geo 相关配置文件路径
 * @params createdTime {string} 创建时间
 * @params parentPath {string} 树结构父路径路径
 * @params platformId {string} 资源所属平台Id
 * @params order {number} 排序
 * @params type {AreaCodeTypeCommonType} 行政区域码类型
 */
type ExportDistrictOutCommonType = {
    id?: string;
    resourceId?: string;
    name?: string;
    englishName?: string;
    coordinate?: CoordinateCommonType;
    areaCode?: string;
    parentId?: string;
    geoFilePath?: string;
    createdTime?: string;
    parentPath?: string;
    platformId?: string;
    order?: number;
    type?: AreaCodeTypeCommonType;
};

/**
 * 行政区域导出出参
 * @params districts {ExportDistrictOutCommonType[]} 行政区域集合
 */
type ExportDistrictModelCommonType = {
    districts?: ExportDistrictOutCommonType[];
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
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {LayerEntityOutCommonType[]} 记录
 */
type LayerEntityOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: LayerEntityOutCommonType[];
};

/**
 * 图层项
 * @params id {string} Id
 * @params number {string} 编号
 * @params name {string} 名称
 * @params description {string} 描述
 * @params iconUrl {string} Icon
 * @params productId {string} 产品id
 * @params order {number} 排序字段
 */
type LayerItemCommonType = {
    id?: string;
    number?: string;
    name?: string;
    description?: string;
    iconUrl?: string;
    productId?: string;
    order?: number;
};

/**
 * 图层组
 * @params groupName {string} 组名称
 * @params groupKey {string} 组key
 * @params children {LayerItemCommonType[]} 图层集合
 */
type GroupItemCommonType = {
    groupName?: string;
    groupKey?: string;
    children?: LayerItemCommonType[];
};

/**
 * 图层导入请求
 * @params isReload {boolean} 是否导入后重新加载缓存，默认加载
 * @params groupItems {GroupItemCommonType[]} 图层组
 */
type LayerImportRequestCommonType = {
    isReload?: boolean;
    groupItems?: GroupItemCommonType[];
};

/**
 * 点位集合
 * @params coordinates {any[]} Coordinates
 * @params type {string} Type
 */
type GeometryInCommonType = {
    coordinates?: any[];
    type?: string;
};

/**
 * 代表线、面、多线、多面数据
 * @params type {string} Type
 * @params properties {any} Properties
 * @params geometry {GeometryInCommonType} Geometry
 */
type GeometryDataInCommonType = {
    type?: string;
    properties?: any;
    geometry?: GeometryInCommonType;
};

/**
 * 设施导入实体
 * @params name {string}
 * @params resourceId {string}
 * @params groupName {string}
 * @params layerName {string}
 * @params productId {string} 产品Id
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params owner {string}
 * @params number {string}
 * @params description {string}
 * @params address {string} 设施地址
 * @params geoFilePath {string} 重点区域的资源文件路径
 * @params extension {any}
 * @params areaCode {string} 行政区域号码（非 Id）
 * @params createTime {string} 创建时间
 * @params order {number} 排序号
 * @params platformId {string} 平台资源Id
 * @params height {number} 设施高度
 * @params geometryData {GeometryDataInCommonType} 线面数据
 * @params facilityState {string} 设施状态
 */
type FacilityItemCommonType = {
    name?: string;
    resourceId?: string;
    groupName?: string;
    layerName?: string;
    productId: string;
    longitude?: number;
    latitude?: number;
    owner?: string;
    number?: string;
    description?: string;
    address?: string;
    geoFilePath?: string;
    extension?: any;
    areaCode?: string;
    createTime?: string;
    order?: number;
    platformId?: string;
    height?: number;
    geometryData?: GeometryDataInCommonType;
    facilityState?: string;
};

/**
 * 设施导入请求
 * @params isReload {boolean} 是否导入后重新加载缓存，默认加载
 * @params facilityItems {FacilityItemCommonType[]} 设施导入实体
 */
type FacilityImportRequestCommonType = {
    isReload?: boolean;
    facilityItems?: FacilityItemCommonType[];
};

/**
 *
 * @params name {string} 名称
 * @params resourceId {string} 资源Id
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params description {string} 详情
 * @params organization {string} 权属单位
 * @params owner {string} 负责人
 * @params number {string} 联系电话
 * @params amount {number} 数量
 * @params unit {string} 单位
 * @params subType {string} 子类型
 * @params mainType {string} 主类型
 * @params entryTime {string} 入库时间
 * @params facilityId {string} 所属设施Id
 */
type GoodItemCommonType = {
    name?: string;
    resourceId?: string;
    longitude?: number;
    latitude?: number;
    description?: string;
    organization?: string;
    owner?: string;
    number?: string;
    amount?: number;
    unit?: string;
    subType?: string;
    mainType?: string;
    entryTime?: string;
    facilityId?: string;
};

/**
 * 设施导入请求
 * @params goodItems {GoodItemCommonType[]}
 */
type GoodImportRequestCommonType = {
    goodItems?: GoodItemCommonType[];
};

/**
 * 物资主要类型信息
 * @params name {string} 物资类型名
 * @params total {number} 物资总数
 */
type GoodTypeInfoCommonType = {
    name?: string;
    total?: number;
};

/**
 * 标签实体
 * @params id {string} Id
 * @params title {string} 标题
 * @params color {string} 颜色
 * @params createdTime {string} 创建时间
 * @params modifyTime {string} 修改时间
 * @params resourceId {string} 资源ID
 * @params description {string} 描述
 */
type LabelEntityCommonType = {
    id?: string;
    title?: string;
    color?: string;
    createdTime?: string;
    modifyTime?: string;
    resourceId?: string;
    description?: string;
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
 * @params properties {any} Properties
 * @params geometry {GeometryOutCommonType} Geometry
 */
type GeometryDataOutCommonType = {
    type?: string;
    properties?: any;
    geometry?: GeometryOutCommonType;
};

/**
 * 设施详情
 * @params medias {any[]} 媒体信息(关联的多媒体信息,如视频、图片等)
 * @params goodMainTypes {GoodTypeInfoCommonType[]} 物资主类型
 * @params labelDetail {LabelEntityCommonType[]} 标签详情
 * @params layerDetail {LayerEntityOutCommonType} 图层信息
 * @params resourceId {string} 资源Id
 * @params layerId {string} 图层Id
 * @params description {string} 详情
 * @params owner {string} 设施负责人
 * @params number {string} 联系电话
 * @params geoFilePath {string} 重点区域的资源文件路径
 * @params address {string} 设施地址
 * @params extension {any} 扩展项
 * @params areaCode {string} 行政区域代码
 * @params platformId {string} 资源所属平台Id
 * @params createTime {string} 创建时间
 * @params order {number} 排序号
 * @params state {number} 状态
 * @params height {number} 设施高度
 * @params geometryData {GeometryDataOutCommonType} 线面数据
 * @params facilityState {string} 设施状态
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params id {string} ID
 * @params name {string} 名称
 */
type FacilityDetailOutCommonType = {
    medias?: any[];
    goodMainTypes?: GoodTypeInfoCommonType[];
    labelDetail?: LabelEntityCommonType[];
    layerDetail?: LayerEntityOutCommonType;
    resourceId?: string;
    layerId?: string;
    description?: string;
    owner?: string;
    number?: string;
    geoFilePath?: string;
    address?: string;
    extension?: any;
    areaCode?: string;
    platformId?: string;
    createTime?: string;
    order?: number;
    state?: number;
    height?: number;
    geometryData?: GeometryDataOutCommonType;
    facilityState?: string;
    longitude?: number;
    latitude?: number;
    id?: string;
    name?: string;
};

/**
 * 返回设施数据实体
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
 * @params areaCode {string} 区域码代码
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params id {string} ID
 * @params name {string} 名称
 */
type GoodOutCommonType = {
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
    areaCode?: string;
    longitude?: number;
    latitude?: number;
    id?: string;
    name?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {GoodOutCommonType[]} 记录
 */
type GoodOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: GoodOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {GoodTypeInfoCommonType[]} 记录
 */
type GoodTypeInfoPageableQueryResultCommonType = {
    totalCount?: number;
    records?: GoodTypeInfoCommonType[];
};

/**
 * 过滤类型
 */
type SetFilterTypeCommonType = 0 | 1;

/**
 * 图层区域数据请求
 * @params upLeft {CoordinateCommonType} 左上角坐标
 * @params bottomRight {CoordinateCommonType} 右下角坐标
 * @params layerIds {any[]} 图层Id列表
 * @params points {CoordinateCommonType[]} 多边形经纬度
 * @params setFilterType {SetFilterTypeCommonType} 过滤方式0:差集1:交集
 * @params keyword {string} 关键字
 * @params isDesc {boolean} 是否排序，默认为true-降序
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, int.MaxValue]
 */
type LayerDataAreaQueryRequestCommonType = {
    upLeft: CoordinateCommonType;
    bottomRight: CoordinateCommonType;
    layerIds: any[];
    points?: CoordinateCommonType[];
    setFilterType?: SetFilterTypeCommonType;
    keyword?: string;
    isDesc?: boolean;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 返回设施数据实体
 * @params layerDetail {LayerEntityOutCommonType} 图层信息
 * @params resourceId {string} 资源Id
 * @params layerId {string} 图层Id
 * @params description {string} 详情
 * @params owner {string} 设施负责人
 * @params number {string} 联系电话
 * @params geoFilePath {string} 重点区域的资源文件路径
 * @params address {string} 设施地址
 * @params extension {any} 扩展项
 * @params areaCode {string} 行政区域代码
 * @params platformId {string} 资源所属平台Id
 * @params createTime {string} 创建时间
 * @params order {number} 排序号
 * @params state {number} 状态
 * @params height {number} 设施高度
 * @params geometryData {GeometryDataOutCommonType} 线面数据
 * @params facilityState {string} 设施状态
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params id {string} ID
 * @params name {string} 名称
 */
type FacilityOutCommonType = {
    layerDetail?: LayerEntityOutCommonType;
    resourceId?: string;
    layerId?: string;
    description?: string;
    owner?: string;
    number?: string;
    geoFilePath?: string;
    address?: string;
    extension?: any;
    areaCode?: string;
    platformId?: string;
    createTime?: string;
    order?: number;
    state?: number;
    height?: number;
    geometryData?: GeometryDataOutCommonType;
    facilityState?: string;
    longitude?: number;
    latitude?: number;
    id?: string;
    name?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {FacilityOutCommonType[]} 记录
 */
type FacilityOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: FacilityOutCommonType[];
};

/**
 * 排序规则
 */
type SortRuleCommonType = 0 | 1;

/**
 * 设施圆形区域查询
 * @params layerIds {any[]} 图层Id列表
 * @params keyword {string} 关键字
 * @params center {CoordinateCommonType} 圆心
 * @params radius {number} 半径（单位米）
 * @params sortRule {SortRuleCommonType} 是否按距离升序排序，默认升序
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, int.MaxValue]
 */
type CircleAreaFacilityQueryRequestCommonType = {
    layerIds: any[];
    keyword?: string;
    center: CoordinateCommonType;
    radius: number;
    sortRule?: SortRuleCommonType;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 带有距离的返回设施数据实体
 * @params distance {number} 距离某个坐标的距离
 * @params layerDetail {LayerEntityOutCommonType} 图层信息
 * @params resourceId {string} 资源Id
 * @params layerId {string} 图层Id
 * @params description {string} 详情
 * @params owner {string} 设施负责人
 * @params number {string} 联系电话
 * @params geoFilePath {string} 重点区域的资源文件路径
 * @params address {string} 设施地址
 * @params extension {any} 扩展项
 * @params areaCode {string} 行政区域代码
 * @params platformId {string} 资源所属平台Id
 * @params createTime {string} 创建时间
 * @params order {number} 排序号
 * @params state {number} 状态
 * @params height {number} 设施高度
 * @params geometryData {GeometryDataOutCommonType} 线面数据
 * @params facilityState {string} 设施状态
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params id {string} ID
 * @params name {string} 名称
 */
type FacilityWithDistanceCommonType = {
    distance?: number;
    layerDetail?: LayerEntityOutCommonType;
    resourceId?: string;
    layerId?: string;
    description?: string;
    owner?: string;
    number?: string;
    geoFilePath?: string;
    address?: string;
    extension?: any;
    areaCode?: string;
    platformId?: string;
    createTime?: string;
    order?: number;
    state?: number;
    height?: number;
    geometryData?: GeometryDataOutCommonType;
    facilityState?: string;
    longitude?: number;
    latitude?: number;
    id?: string;
    name?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {FacilityWithDistanceCommonType[]} 记录
 */
type FacilityWithDistancePageableQueryResultCommonType = {
    totalCount?: number;
    records?: FacilityWithDistanceCommonType[];
};

/**
 * 图层数据请求
 * @params keyword {string} 关键字
 * @params maxCount {number} 最大返回数据的数量
 * @params layerIds {any[]} 图层Id列表
 * @params isDesc {boolean} 是否排序，默认为true-降序
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, int.MaxValue]
 */
type LayerDataSearchRequestCommonType = {
    keyword: string;
    maxCount?: number;
    layerIds: any[];
    isDesc?: boolean;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
type StringPageableQueryResultCommonType = {
    totalCount?: number;
    records?: any[];
};

/**
 * 设施监控组
 * @params facilityResourceId {string} 设施 Id
 * @params cameraGroupIds {any[]} 监控组 Id
 */
type FacilityCameraGroupItemCommonType = {
    facilityResourceId?: string;
    cameraGroupIds?: any[];
};

/**
 * 导入设施监控组导入请求参数
 * @params facilityCameraGroupItems {FacilityCameraGroupItemCommonType[]} 设施关联监控组
 */
type FacilityCameraGroupsImportRequestCommonType = {
    facilityCameraGroupItems?: FacilityCameraGroupItemCommonType[];
};

/**
 * 设施监控组响应结果
 * @params facilityId {string} 设施 Id
 * @params cameraGroupIds {any[]} 监控组 Id
 * @params platformId {string} 资源所属平台Id
 * @params resourceId {string} 标识该资源为非本平台资源
 */
type FacilityCameraGroupsOutCommonType = {
    facilityId?: string;
    cameraGroupIds?: any[];
    platformId?: string;
    resourceId?: string;
};

/**
 * 物资查询接口参数
 * @params upLeft {CoordinateCommonType} 左上角坐标
 * @params bottomRight {CoordinateCommonType} 右下角坐标
 * @params keyword {string} 模糊查询关键字(搜索物资名称)
 * @params goodsSubType {string} 物资类型
 * @params maxCount {number} 最大返回值GoodsDataSearchLocations
 */
type GoodsDataSearchRequestCommonType = {
    upLeft: CoordinateCommonType;
    bottomRight: CoordinateCommonType;
    keyword?: string;
    goodsSubType?: string;
    maxCount?: number;
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
 * 物资详情，包括所在仓库
 * @params facility {FacilityInfoCommonType} 所在仓库
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
 * @params areaCode {string} 区域码代码
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params id {string} ID
 * @params name {string} 名称
 */
type GoodDetailOutCommonType = {
    facility?: FacilityInfoCommonType;
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
    areaCode?: string;
    longitude?: number;
    latitude?: number;
    id?: string;
    name?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {GoodDetailOutCommonType[]} 记录
 */
type GoodDetailOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: GoodDetailOutCommonType[];
};

/**
 * 查询设施数据请求
 * @params keyWord {string} 关键字
 * @params layerIds {any[]} 图层Id
 * @params layerName {string} 图层名,可模糊匹配
 * @params areaCodes {any[]} 行政区域代码
 * @params prefixAreaCodes {any[]} 行政区域前缀代码
 * @params querySubordinateFacility {boolean} 是否查询下级行政区域设施
 * @params resourceIds {any[]} 标签Id
 * @params isDesc {boolean} 是否排序，默认为true-降序
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, int.MaxValue]
 */
type SearchFacilityRequestCommonType = {
    keyWord?: string;
    layerIds?: any[];
    layerName?: string;
    areaCodes?: any[];
    prefixAreaCodes?: any[];
    querySubordinateFacility: boolean;
    resourceIds?: any[];
    isDesc?: boolean;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 更改设施标签请求
 * @params resourceIds {any[]} 标签ResourceId
 */
type UpdateFacilityLabelsRequestCommonType = {
    resourceIds?: any[];
};

/**
 * 设施状态
 */
type FacilityStateCommonType = 0 | 1;

/**
 * 更新设施状态请求
 * @params state {FacilityStateCommonType} 设施状态,0-故障，1-正常
 */
type UpdateStateRequestCommonType = {
    state: FacilityStateCommonType;
};

/**
 * 批量删除基类
 * @params ids {any[]} Id 集合
 */
type BatchDeleteRequestCommonType = {
    ids: any[];
};

/**
 * 三维信息数据（视点数据）
 * @params center {any[]} 中心点
 * @params bearing {number} 方向角
 * @params pitch {number} 俯仰角
 * @params zoom {number} 缩放等级
 */
type CameraOptionCommonType = {
    center?: any[];
    bearing?: number;
    pitch?: number;
    zoom?: number;
};

/**
 * 模型场景响应
 * @params id {string} Id
 * @params resourceId {string} 资源Id
 * @params facilityId {string} 设施Id
 * @params areaCode {string} 区域码
 * @params name {string} 场景名称
 * @params sceneName {string} 场景对应的英文名
 * @params isIndoorScene {boolean} 是否室内场景
 * @params showModelList {any[]} 场景模型列表
 * @params cameraOption {CameraOptionCommonType} 三维信息数据（视点数据）
 */
type SceneOutCommonType = {
    id?: string;
    resourceId?: string;
    facilityId?: string;
    areaCode?: string;
    name?: string;
    sceneName?: string;
    isIndoorScene?: boolean;
    showModelList?: any[];
    cameraOption?: CameraOptionCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {SceneOutCommonType[]} 记录
 */
type SceneOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: SceneOutCommonType[];
};

/**
 * 设施id集合请求参数
 * @params ids {any[]} 图层Id集合
 */
type FacilityQueryByIdsRequestCommonType = {
    ids: any[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {FacilityDetailOutCommonType[]} 记录
 */
type FacilityDetailOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: FacilityDetailOutCommonType[];
};

/**
 * 图层配置实体
 * @params productId {string} 产品Id
 * @params mapType {MapTypeCommonType} Map类型 0-电子，1-卫星，2-科幻
 * @params mapSourceType {string} 地图类型
 * @params defaultMapServerType {string} 初始地图服务类型
 * @params mapServerTypes {any[]} 产品选中的地图服务类型集合
 * @params defaultLayerEffectConfig {string} 初始图层效果配置
 * @params layerEffectConfigs {any[]} 产品选中的图层效果配置集合
 * @params clusterStyle {string} 聚合样式
 * @params minPitch {number} 最小仰俯角
 * @params maxPitch {number} 最大仰俯角
 * @params center {AddressCoordinateCommonType} 默认中心点
 * @params isEnableMapCenter {boolean} 是否开启自定义中心点
 * @params viewBox {MapVisualScopeCommonType} 可视范围
 * @params useFakeMapSdk {boolean} 是否使用SDK
 * @params lowViewPoint {ViewPointCommonType} 近景
 * @params middleViewPoint {ViewPointCommonType} 中景
 * @params highViewPoint {ViewPointCommonType} 远景
 * @params mapMaskEffect {MapMaskEffectCommonType} 地图遮罩效果
 * @params areaBoundaryEffectConfig {AreaBoundaryEffectConfigCommonType} 行政区划边界效果配置
 */
type GeoConfigInCommonType = {
    productId?: string;
    mapType?: MapTypeCommonType;
    mapSourceType?: string;
    defaultMapServerType?: string;
    mapServerTypes?: any[];
    defaultLayerEffectConfig?: string;
    layerEffectConfigs?: any[];
    clusterStyle?: string;
    minPitch?: number;
    maxPitch?: number;
    center?: AddressCoordinateCommonType;
    isEnableMapCenter?: boolean;
    viewBox?: MapVisualScopeCommonType;
    useFakeMapSdk?: boolean;
    lowViewPoint?: ViewPointCommonType;
    middleViewPoint?: ViewPointCommonType;
    highViewPoint?: ViewPointCommonType;
    mapMaskEffect?: MapMaskEffectCommonType;
    areaBoundaryEffectConfig?: AreaBoundaryEffectConfigCommonType;
};

/**
 * 倾斜摄影
 * @params maxDistance {number} 最大加载范围
 * @params opacity {number} 透明度，可选范围0~1
 * @params sateliteProvideType {string} 卫星地图源
 * @params baseUrl {string} 地图地址
 * @params projectionType {string} 投影方式
 * @params maxZoom {number} 最大层级
 * @params viewBox {MapVisualScopeCommonType} 可视范围
 */
type TiltPhotographyCommonType = {
    maxDistance?: number;
    opacity?: number;
    sateliteProvideType?: string;
    baseUrl?: string;
    projectionType?: string;
    maxZoom?: number;
    viewBox?: MapVisualScopeCommonType;
};

/**
 * 地图效果实体
 * @params showDistrictBoundary {boolean} 是否显示区域边界
 * @params isShow3DTiles {boolean} 是否加载倾斜摄影
 * @params tiltPhotography {TiltPhotographyCommonType} 倾斜摄影数据
 * @params showBuilding {boolean} 是否显示建筑
 * @params showRoad {boolean} 是否显示路网
 * @params showTerrin {boolean} 是否显示地形
 * @params showWater {boolean} 是否显示水系
 * @params showModels {boolean} 是否显示精模
 * @params showIndoorModels {boolean} 是否显示室内建模渲染
 */
type MapEffectEntityCommonType = {
    showDistrictBoundary?: boolean;
    isShow3DTiles?: boolean;
    tiltPhotography?: TiltPhotographyCommonType;
    showBuilding?: boolean;
    showRoad?: boolean;
    showTerrin?: boolean;
    showWater?: boolean;
    showModels?: boolean;
    showIndoorModels?: boolean;
};

/**
 * 地图效果配置
 * @params id {string} Id
 * @params productId {string} 产品Id
 * @params mapType {MapTypeCommonType} Map类型
 * @params isShowEffect {boolean} 是否展示效果
 * @params antiAlias {boolean} 抗锯齿
 * @params needBloom {boolean} 自发光
 * @params lowViewPoint {ViewPointCommonType} 近景
 * @params middleViewPoint {ViewPointCommonType} 中景
 * @params highViewPoint {ViewPointCommonType} 远景
 * @params maxiMinZoom {MapZoomCommonType} 地图最大最小层级
 * @params lowViewPointEffect {MapEffectEntityCommonType} 近景地图效果
 * @params middleViewPointEffect {MapEffectEntityCommonType} 中景地图效果
 * @params highViewPointEffect {MapEffectEntityCommonType} 远景地图效果
 */
type GeoEffectConfigOutCommonType = {
    id?: string;
    productId?: string;
    mapType?: MapTypeCommonType;
    isShowEffect?: boolean;
    antiAlias?: boolean;
    needBloom?: boolean;
    lowViewPoint?: ViewPointCommonType;
    middleViewPoint?: ViewPointCommonType;
    highViewPoint?: ViewPointCommonType;
    maxiMinZoom?: MapZoomCommonType;
    lowViewPointEffect?: MapEffectEntityCommonType;
    middleViewPointEffect?: MapEffectEntityCommonType;
    highViewPointEffect?: MapEffectEntityCommonType;
};

/**
 * 图标类型
 */
type IconTypeCommonType = 0 | 1 | 2;

/**
 * 图层图标
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
 * 地图视点
 * @params lowViewPoint {ViewPointCommonType} 近景视点
 * @params middleViewPoint {ViewPointCommonType} 中景视点
 * @params highViewPoint {ViewPointCommonType} 远景视点
 */
type ViewPointZoomCommonType = {
    lowViewPoint?: ViewPointCommonType;
    middleViewPoint?: ViewPointCommonType;
    highViewPoint?: ViewPointCommonType;
};

/**
 * 图层Zoom输出
 * @params type {number} Zoom类型,0-默认，1-自定义
 * @params defaultZoom {ViewPointZoomCommonType} 图层视点
 * @params customZoom {MapZoomCommonType} 自定义地图Zoom
 */
type LayerZoomOutCommonType = {
    type?: number;
    defaultZoom?: ViewPointZoomCommonType;
    customZoom?: MapZoomCommonType;
};

/**
 * 点位聚合规则
 * @params selectType {number} 选中的聚合规则，0-行政区域，1-距离，2-散点
 * @params value {string} 聚合值
 */
type PointClusterCommonType = {
    selectType?: number;
    value?: string;
};

/**
 * 线发光材质
 * @params color {string} 线发光的颜色（默认颜色为白色，中心颜色为白色）
 * @params glowPower {number} 发光的长度，值为线宽的百分比0 ~ 1（默认为：0.25）
 * @params taperPower {number} 发光颜色渐变效果的强度，以占总线条长度的百分比表示。（默认为1.0）
 */
type PolyLineGlowMaterialPropertyCommonType = {
    color?: string;
    glowPower?: number;
    taperPower?: number;
};

/**
 * 线的外边线材质
 * @params color {string} 线的颜色（默认颜色为白色）
 * @params outlineColor {string} 线的外边线颜色（默认颜色为黑色，对应mapbox中的"fill-outline-color"）
 * @params outlineWidth {number} 线的外边线宽度（默认为1.0）
 */
type PolyLineOutlineMaterialPropertyCommonType = {
    color?: string;
    outlineColor?: string;
    outlineWidth?: number;
};

/**
 * 线的材质
 * @params polyLineGlowMaterialProperty {PolyLineGlowMaterialPropertyCommonType} 线发光材质
 * @params polyLineOutlineMaterialProperty {PolyLineOutlineMaterialPropertyCommonType} 线的外边线材质
 */
type LineMaterialCommonType = {
    polyLineGlowMaterialProperty?: PolyLineGlowMaterialPropertyCommonType;
    polyLineOutlineMaterialProperty?: PolyLineOutlineMaterialPropertyCommonType;
};

/**
 * 线配置
 * @params color {string} 线颜色
 * @params opacity {number} 线颜色透明度
 * @params width {number} 线宽度
 * @params isUseDataHeight {boolean} 是否使用数据中的高度
 * @params height {number} 线高度（如果不用数据中的地表高度，可通过参数设置统一的距离地表高度）
 * @params isDynamic {boolean} 是否是动态线
 * @params dynamicStyleUrl {string} 动态线样式图片地址
 * @params dynamicSpeed {number} 动态线流动速度
 * @params clampToGround {boolean} 线是否贴地（可选，默认为false）
 * @params duration {number} 动态线动画速度（可选，默认值为3000）
 * @params lineType {string} 线的类型（可选"dash"，默认为"solid"（实线））
 * @params dashLength {any[]} 虚线的破折号部分和间隔的长度（可选，默认值为 [30,30]）
 * @params pattern {string} 线用的图案（可选，这里填写在 sprite 雪碧图中图标名称。为了图案能无缝填充，图标的高宽需要是 2 的倍数）
 * @params gapWidth {number} 线的外部间距宽度（可选，值 >= 0，默认值为 0，单位：像素。用来在线的外部再绘制一部分，此值表示内间距）
 * @params offset {number} 线的偏移（可选，默认值为 0，单位：像素。对于单线，则是向右的偏移量；对于多边形，正值为内缩 inset，负值为外突 outset
 * @params blur {number} 线的模糊度（可选，值 >= 0，默认值为 0，单位：像素）
 * @params gradient {string} 线的渐变色（可选。如果设置了 dashLength，则gradient 将无效）
 * @params material {LineMaterialCommonType} 线的材质（默认为颜色材质ColorMaterialProperty，颜色为Cesium.Color.WHITE）
 * @params extension {any} 扩展项
 */
type LineConfigCommonType = {
    color?: string;
    opacity?: number;
    width?: number;
    isUseDataHeight?: boolean;
    height?: number;
    isDynamic?: boolean;
    dynamicStyleUrl?: string;
    dynamicSpeed?: number;
    clampToGround?: boolean;
    duration?: number;
    lineType?: string;
    dashLength?: any[];
    pattern?: string;
    gapWidth?: number;
    offset?: number;
    blur?: number;
    gradient?: string;
    material?: LineMaterialCommonType;
    extension?: any;
};

/**
 * 边界线配置
 * @params isDisplay {boolean} 边界线是否显示
 * @params color {string} 边界线颜色
 * @params width {number} 边界线宽度
 * @params opacity {number} 边界线透明度
 */
type BoundaryConfigCommonType = {
    isDisplay?: boolean;
    color?: string;
    width?: number;
    opacity?: number;
};

/**
 * 颜色材质对象
 * @params color {string} 颜色材质对象的颜色属性
 */
type ColorMaterialPropertyCommonType = {
    color?: string;
};

/**
 * 图片材质
 * @params image {string} 图片地址（字符串类型）
 * @params color {string} 线的底色（Cesium颜色对象， 默认位Cesium.Color.BLACK）
 * @params repeat {string} 指定图片在每个方向上的重复次数
 * @params transparent {boolean} 图片是否有透明度（默认为false， 当图片有透明度时改为true）
 */
type ImageMaterialPropertyCommonType = {
    image?: string;
    color?: string;
    repeat?: string;
    transparent?: boolean;
};

/**
 * 棋盘材质
 * @params evenColor {string} 棋盘的第一个颜色（Cesium颜色对象， 默认为Cesium.Color.WHITE）
 * @params oddColor {string} 棋盘的第二个颜色（Cesium颜色对象， 默认位Cesium.Color.BLACK）
 * @params repeat {string} 棋盘格子在每个方向上重复的次数（二维笛卡尔坐标，默认为new Cartesian2(2.0, 2.0)）
 */
type CheckerboardMaterialPropertyCommonType = {
    evenColor?: string;
    oddColor?: string;
    repeat?: string;
};

/**
 * 条纹材质
 * @params evenColor {string} 条纹的第一个颜色（Cesium颜色对象，默认为Cesium.Color.WHITE）
 * @params oddColor {string} 条纹的第二个颜色（Cesium颜色对象，默认为Cesium.Color.BLACK）
 * @params repeat {number} 条纹的重复次数（默认为1）
 * @params offset {number} 条纹的偏移量（默认为0）
 * @params orientation {string} 水平条纹或垂直条纹（默认为水平）
 */
type StripeMaterialPropertyCommonType = {
    evenColor?: string;
    oddColor?: string;
    repeat?: number;
    offset?: number;
    orientation?: string;
};

/**
 * 网格材质
 * @params color {string} 网格颜色（Cesium颜色对象，默认为Cesium.Color.WHITE）
 * @params cellAlpha {number} 单元格透明度（默认为0.1）
 * @params lineCount {string} 行列个数（默认为二位笛卡尔8*8坐标 new Cesium.Cartesian2(8, 8)，即8行8列）
 * @params lineThickness {string} 线的粗细（默认为二位笛卡尔2*2坐标 new Cesium.Cartesian2(2, 2)，即2px）
 * @params lineOffset {string} 网格线的偏移量（默认为二位笛卡尔2*2坐标 new Cesium.Cartesian2(0, 0)，即不偏移）
 */
type GridMaterialPropertyCommonType = {
    color?: string;
    cellAlpha?: number;
    lineCount?: string;
    lineThickness?: string;
    lineOffset?: string;
};

/**
 * 面的材质
 * @params colorMaterialProperty {ColorMaterialPropertyCommonType} 颜色材质对象，参数（默认为Cesium.Color.WHITE）
 * @params imageMaterialProperty {ImageMaterialPropertyCommonType} 图片材质
 * @params checkerboardMaterialProperty {CheckerboardMaterialPropertyCommonType} 棋盘材质
 * @params stripeMaterialProperty {StripeMaterialPropertyCommonType} 条纹材质
 * @params gridMaterialProperty {GridMaterialPropertyCommonType} 网格材质
 */
type PolygonMaterialCommonType = {
    colorMaterialProperty?: ColorMaterialPropertyCommonType;
    imageMaterialProperty?: ImageMaterialPropertyCommonType;
    checkerboardMaterialProperty?: CheckerboardMaterialPropertyCommonType;
    stripeMaterialProperty?: StripeMaterialPropertyCommonType;
    gridMaterialProperty?: GridMaterialPropertyCommonType;
};

/**
 * 面配置
 * @params color {string} 填充颜色
 * @params opacity {number} 填充颜色透明度
 * @params boundaryConfig {BoundaryConfigCommonType} 边界线配置
 * @params isUseDataHeight {boolean} 是否使用数据中的高度
 * @params height {number} 面高度（如果不用数据中的地表高度，可通过参数设置统一的距离地表高度）
 * @params extrusionHeight {number} 面拉伸高度（基于地表高度的拉伸高度）
 * @params fill {boolean} 面是否填充（是否显示面的填充）（可选， 默认为true）
 * @params outline {boolean} 是否显示面的边线（可选，默认为false）
 * @params outlineWidth {number} 面的边线宽度（可选，默认为2）
 * @params outlineColor {string} 面的边线颜色（可选，默认为'#000000'）
 * @params outlineColorOpacity {number} 面的边线颜色透明度（可选0 ~ 1，默认为1）
 * @params outlineHeight {number} 面的边线的离地高度（可选，默认为50）
 * @params colorFieldName {number} 根据颜色属性渲染面的颜色
 * @params clampToGround {boolean} 面是否贴地（可选，默认为false）
 * @params filterFieldName {string} 面数据过滤的字段名称（可选，默认为""， 过滤时需配置"filterFieldValue"属性）
 * @params filterFieldValue {string} 面数据过滤的字段值（可选，默认为""， 过滤时需配置"filterFieldName"属性）
 * @params fillImageUrl {string} 面填图片的地址
 * @params antialias {boolean} 填充时是否反锯齿（可选，默认值为 true）
 * @params pattern {string} 填充用的图案（可选，这里填写在 sprite 雪碧图中图标名称。为了图案能无缝填充，图标的高宽需要是 2 的倍数）
 * @params translate {any[]} 填充的平移（可选，通过平移 [x, y] 达到一定的偏移量。默认值为 [0, 0]，单位：像素。）
 * @params material {PolygonMaterialCommonType} 面的材质（默认为颜色材质ColorMaterialProperty）
 */
type PolygonConfigCommonType = {
    color?: string;
    opacity?: number;
    boundaryConfig?: BoundaryConfigCommonType;
    isUseDataHeight?: boolean;
    height?: number;
    extrusionHeight?: number;
    fill?: boolean;
    outline?: boolean;
    outlineWidth?: number;
    outlineColor?: string;
    outlineColorOpacity?: number;
    outlineHeight?: number;
    colorFieldName?: number;
    clampToGround?: boolean;
    filterFieldName?: string;
    filterFieldValue?: string;
    fillImageUrl?: string;
    antialias?: boolean;
    pattern?: string;
    translate?: any[];
    material?: PolygonMaterialCommonType;
};

/**
 * 区划配置参数
 * @params fill {boolean} 是否填充区划面颜色
 * @params fillColor {string} 区划的填充颜色
 * @params fillColorOpacity {number} 区划填充颜色的透明度
 * @params extrudedHeight {number} 区划的拉伸高度(单位：m)
 * @params clampToGround {boolean} 区划是否贴地
 * @params lineColor {string} 区划边线颜色
 * @params lineColorOpacity {number} 区划边线颜色透明度
 * @params isShowLine {boolean} 是否显示区划边线
 * @params lineWidth {number} 区划边线宽度(单位：像素)
 */
type AreaConfigCommonType = {
    fill?: boolean;
    fillColor?: string;
    fillColorOpacity?: number;
    extrudedHeight?: number;
    clampToGround?: boolean;
    lineColor?: string;
    lineColorOpacity?: number;
    isShowLine?: boolean;
    lineWidth?: number;
};

/**
 * 文字配置
 * @params color {string} 文字颜色
 * @params font {string} 字体大小类型
 * @params isShowBackground {boolean} 是否显示字体背景颜色
 * @params background {string} 字体背景颜色
 * @params backgroundOpacity {number} 字体背景颜色透明度
 * @params isShowLine {boolean} 字体外边线
 * @params lineColor {string} 字体外边线颜色
 * @params lineWidth {number} 字体外边线宽度(单位：像素)
 * @params scale {number} 字体大小比例
 */
type TextConfigCommonType = {
    color?: string;
    font?: string;
    isShowBackground?: boolean;
    background?: string;
    backgroundOpacity?: number;
    isShowLine?: boolean;
    lineColor?: string;
    lineWidth?: number;
    scale?: number;
};

/**
 * 柱图配置
 * @params color {string} 柱子填充颜色
 * @params colorOpacity {number} 柱子填充颜色透明度
 * @params clampToGround {boolean} 柱子是否贴地
 * @params radius {number} 柱子的半径(单位：m)
 * @params barHeight {number} 柱子的拉伸高度(单位：m)
 * @params entityHeight {number} 柱子离地高度(单位：m)
 * @params isShowText {boolean} 是否显示文字
 * @params textConfig {TextConfigCommonType} 文字配置
 */
type BarConfigCommonType = {
    color?: string;
    colorOpacity?: number;
    clampToGround?: boolean;
    radius?: number;
    barHeight?: number;
    entityHeight?: number;
    isShowText?: boolean;
    textConfig?: TextConfigCommonType;
};

/**
 * 标牌配置参数
 * @params image {boolean} 标牌背景图片
 * @params color {string} 标牌背景颜色
 * @params opacity {boolean} 标牌的透明度
 */
type SignageConfigCommonType = {
    image?: boolean;
    color?: string;
    opacity?: boolean;
};

/**
 * 图层配置实体
 * @params id {string} 配置Id
 * @params productId {string} 产品Id
 * @params name {string} 图层名称
 * @params path {string} 图层路径
 * @params parentId {string} 父节点Id
 * @params group {string} Group
 * @params groupKey {string} groupKey
 * @params layerIcon {IconInfoCommonType} 图层图标
 * @params layerIconBackground {IconInfoCommonType} 图标背景
 * @params pointIcon {IconInfoCommonType} 点位图标
 * @params clusterIcon {IconInfoCommonType} 聚合图标
 * @params isChecked {boolean} 是否勾选图层
 * @params isShow {boolean} 是否显示图层
 * @params isShowLabel {boolean} 是否显示点位标签
 * @params isShowAlert {boolean} 是否显示点位告警
 * @params hasChildren {boolean} 是否有子节点
 * @params zoom {LayerZoomOutCommonType} 图层Zoom
 * @params lowViewPointCluster {PointClusterCommonType} 近景聚合规则
 * @params middleViewPointCluster {PointClusterCommonType} 中景聚合规则
 * @params highViewPointCluster {PointClusterCommonType} 远景聚合规则
 * @params customViewPointCluster {PointClusterCommonType} 自定义视点聚合规则
 * @params layerType {string} 图层类型：点、线、面、区划、标牌、柱图
 * @params lineConfig {LineConfigCommonType} 线配置
 * @params polygonConfig {PolygonConfigCommonType} 面配置
 * @params areaConfig {AreaConfigCommonType} 区划配置
 * @params barConfig {BarConfigCommonType} 柱图配置
 * @params signageConfig {SignageConfigCommonType} 标牌配置
 */
type LayerConfigOutCommonType = {
    id?: string;
    productId?: string;
    name?: string;
    path?: string;
    parentId?: string;
    group?: string;
    groupKey?: string;
    layerIcon?: IconInfoCommonType;
    layerIconBackground?: IconInfoCommonType;
    pointIcon?: IconInfoCommonType;
    clusterIcon?: IconInfoCommonType;
    isChecked?: boolean;
    isShow?: boolean;
    isShowLabel?: boolean;
    isShowAlert?: boolean;
    hasChildren?: boolean;
    zoom?: LayerZoomOutCommonType;
    lowViewPointCluster?: PointClusterCommonType;
    middleViewPointCluster?: PointClusterCommonType;
    highViewPointCluster?: PointClusterCommonType;
    customViewPointCluster?: PointClusterCommonType;
    layerType?: string;
    lineConfig?: LineConfigCommonType;
    polygonConfig?: PolygonConfigCommonType;
    areaConfig?: AreaConfigCommonType;
    barConfig?: BarConfigCommonType;
    signageConfig?: SignageConfigCommonType;
};

/**
 * 地图配置响应（基础配置、图层配置、效果配置）
 * @params geoConfig {GeoConfigOutCommonType} 地图基础配置
 * @params geoEffectConfigs {GeoEffectConfigOutCommonType[]} 地图效果配置
 * @params layerConfigs {LayerConfigOutCommonType[]} 地图图层配置
 */
type MapConfigOutCommonType = {
    geoConfig?: GeoConfigOutCommonType;
    geoEffectConfigs?: GeoEffectConfigOutCommonType[];
    layerConfigs?: LayerConfigOutCommonType[];
};

/**
 * 地图效果配置入参
 * @params productId {string} 产品Id
 * @params mapType {MapTypeCommonType} 地图类型0-电子 1-卫星 2-科幻
 * @params isShowEffect {boolean} 是否展示效果
 * @params antiAlias {boolean} 抗锯齿
 * @params needBloom {boolean} 自发光
 * @params lowViewPoint {ViewPointCommonType} 近景
 * @params middleViewPoint {ViewPointCommonType} 中景
 * @params highViewPoint {ViewPointCommonType} 远景
 * @params lowViewPointEffect {MapEffectEntityCommonType} 近景地图效果
 * @params middleViewPointEffect {MapEffectEntityCommonType} 中景地图效果
 * @params highViewPointEffect {MapEffectEntityCommonType} 远景地图效果
 */
type GeoEffectConfigInCommonType = {
    productId: string;
    mapType: MapTypeCommonType;
    isShowEffect?: boolean;
    antiAlias?: boolean;
    needBloom?: boolean;
    lowViewPoint?: ViewPointCommonType;
    middleViewPoint?: ViewPointCommonType;
    highViewPoint?: ViewPointCommonType;
    lowViewPointEffect?: MapEffectEntityCommonType;
    middleViewPointEffect?: MapEffectEntityCommonType;
    highViewPointEffect?: MapEffectEntityCommonType;
};

/**
 * 地图视点远中近枚举
 */
type ViewPointItemCommonType = 0 | 1 | 2;

/**
 * 图层Zoom
 * @params type {number} Zoom类型,0-默认，1-自定义
 * @params defaultZoom {ViewPointItemCommonType[]} 默认地图视点Zoom
 * @params customZoom {MapZoomCommonType} 自定义地图Zoom
 */
type LayerZoomCommonType = {
    type?: number;
    defaultZoom?: ViewPointItemCommonType[];
    customZoom?: MapZoomCommonType;
};

/**
 * 地图图层配置实体
 * @params productId {string} 产品Id
 * @params mapType {MapTypeCommonType} 地图类型 0-电子，1-卫星，2-科幻
 * @params name {string} 图层名称
 * @params path {string} 图层路径
 * @params layerIcon {IconInfoCommonType} 图层图标
 * @params layerIconBackground {IconInfoCommonType} 图标背景
 * @params pointIcon {IconInfoCommonType} 点位图标
 * @params clusterIcon {IconInfoCommonType} 聚合图标
 * @params isChecked {boolean} 是否勾选图层
 * @params isShow {boolean} 是否显示图层
 * @params isShowLabel {boolean} 是否显示点位标签
 * @params isShowAlert {boolean} 是否显示点位告警
 * @params zoom {LayerZoomCommonType} 图层Zoom
 * @params lowViewPointCluster {PointClusterCommonType} 近景聚合规则
 * @params middleViewPointCluster {PointClusterCommonType} 中景聚合规则
 * @params highViewPointCluster {PointClusterCommonType} 远景聚合规则
 * @params customViewPointCluster {PointClusterCommonType} 自定义视点聚合规则
 * @params layerType {string} 图层类型：点、线、面、区划、标牌、柱图
 * @params lineConfig {LineConfigCommonType} 线配置
 * @params polygonConfig {PolygonConfigCommonType} 面配置
 * @params areaConfig {AreaConfigCommonType} 区划配置
 * @params barConfig {BarConfigCommonType} 柱图配置
 * @params signageConfig {SignageConfigCommonType} 标牌配置
 */
type LayerConfigInCommonType = {
    productId?: string;
    mapType?: MapTypeCommonType;
    name?: string;
    path?: string;
    layerIcon?: IconInfoCommonType;
    layerIconBackground?: IconInfoCommonType;
    pointIcon?: IconInfoCommonType;
    clusterIcon?: IconInfoCommonType;
    isChecked?: boolean;
    isShow?: boolean;
    isShowLabel?: boolean;
    isShowAlert?: boolean;
    zoom?: LayerZoomCommonType;
    lowViewPointCluster?: PointClusterCommonType;
    middleViewPointCluster?: PointClusterCommonType;
    highViewPointCluster?: PointClusterCommonType;
    customViewPointCluster?: PointClusterCommonType;
    layerType?: string;
    lineConfig?: LineConfigCommonType;
    polygonConfig?: PolygonConfigCommonType;
    areaConfig?: AreaConfigCommonType;
    barConfig?: BarConfigCommonType;
    signageConfig?: SignageConfigCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {LayerConfigOutCommonType[]} 记录
 */
type LayerConfigOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: LayerConfigOutCommonType[];
};

/**
 * 同层配置统计信息
 * @params layerId {string} 图层Id
 * @params number {string} 外部ID
 * @params subLayerTotal {number} 下级图层统计
 * @params facilitiesTotal {number} 下级设施统计
 * @params id {string} 配置Id
 * @params productId {string} 产品Id
 * @params name {string} 图层名称
 * @params path {string} 图层路径
 * @params parentId {string} 父节点Id
 * @params group {string} Group
 * @params groupKey {string} groupKey
 * @params layerIcon {IconInfoCommonType} 图层图标
 * @params layerIconBackground {IconInfoCommonType} 图标背景
 * @params pointIcon {IconInfoCommonType} 点位图标
 * @params clusterIcon {IconInfoCommonType} 聚合图标
 * @params isChecked {boolean} 是否勾选图层
 * @params isShow {boolean} 是否显示图层
 * @params isShowLabel {boolean} 是否显示点位标签
 * @params isShowAlert {boolean} 是否显示点位告警
 * @params hasChildren {boolean} 是否有子节点
 * @params zoom {LayerZoomOutCommonType} 图层Zoom
 * @params lowViewPointCluster {PointClusterCommonType} 近景聚合规则
 * @params middleViewPointCluster {PointClusterCommonType} 中景聚合规则
 * @params highViewPointCluster {PointClusterCommonType} 远景聚合规则
 * @params customViewPointCluster {PointClusterCommonType} 自定义视点聚合规则
 * @params layerType {string} 图层类型：点、线、面、区划、标牌、柱图
 * @params lineConfig {LineConfigCommonType} 线配置
 * @params polygonConfig {PolygonConfigCommonType} 面配置
 * @params areaConfig {AreaConfigCommonType} 区划配置
 * @params barConfig {BarConfigCommonType} 柱图配置
 * @params signageConfig {SignageConfigCommonType} 标牌配置
 */
type LayerStatisticalConfigOutCommonType = {
    layerId?: string;
    number?: string;
    subLayerTotal?: number;
    facilitiesTotal?: number;
    id?: string;
    productId?: string;
    name?: string;
    path?: string;
    parentId?: string;
    group?: string;
    groupKey?: string;
    layerIcon?: IconInfoCommonType;
    layerIconBackground?: IconInfoCommonType;
    pointIcon?: IconInfoCommonType;
    clusterIcon?: IconInfoCommonType;
    isChecked?: boolean;
    isShow?: boolean;
    isShowLabel?: boolean;
    isShowAlert?: boolean;
    hasChildren?: boolean;
    zoom?: LayerZoomOutCommonType;
    lowViewPointCluster?: PointClusterCommonType;
    middleViewPointCluster?: PointClusterCommonType;
    highViewPointCluster?: PointClusterCommonType;
    customViewPointCluster?: PointClusterCommonType;
    layerType?: string;
    lineConfig?: LineConfigCommonType;
    polygonConfig?: PolygonConfigCommonType;
    areaConfig?: AreaConfigCommonType;
    barConfig?: BarConfigCommonType;
    signageConfig?: SignageConfigCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {LayerStatisticalConfigOutCommonType[]} 记录
 */
type LayerStatisticalConfigOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: LayerStatisticalConfigOutCommonType[];
};

/**
 * 图层配置导入实体
 * @params resourceId {string} 资源ID
 * @params productId {string} 产品Id
 * @params mapType {MapTypeCommonType} 地图类型 0-电子，1-卫星，2-科幻
 * @params name {string} 图层名称
 * @params path {string} 图层路径
 * @params layerIcon {IconInfoCommonType} 图层图标
 * @params layerIconBackground {IconInfoCommonType} 图标背景
 * @params pointIcon {IconInfoCommonType} 点位图标
 * @params clusterIcon {IconInfoCommonType} 聚合图标
 * @params isChecked {boolean} 是否勾选图层
 * @params isShow {boolean} 是否显示图层
 * @params isShowLabel {boolean} 是否显示点位标签
 * @params isShowAlert {boolean} 是否显示点位告警
 * @params zoom {LayerZoomCommonType} 图层Zoom
 * @params lowViewPointCluster {PointClusterCommonType} 近景聚合规则
 * @params middleViewPointCluster {PointClusterCommonType} 中景聚合规则
 * @params highViewPointCluster {PointClusterCommonType} 远景聚合规则
 * @params customViewPointCluster {PointClusterCommonType} 自定义视点聚合规则
 * @params layerType {string} 图层类型：点、线、面、区划、标牌、柱图
 * @params lineConfig {LineConfigCommonType} 线配置
 * @params polygonConfig {PolygonConfigCommonType} 面配置
 * @params areaConfig {AreaConfigCommonType} 区划配置
 * @params barConfig {BarConfigCommonType} 柱图配置
 * @params signageConfig {SignageConfigCommonType} 标牌配置
 */
type LayerConfigItemCommonType = {
    resourceId: string;
    productId: string;
    mapType?: MapTypeCommonType;
    name?: string;
    path?: string;
    layerIcon?: IconInfoCommonType;
    layerIconBackground?: IconInfoCommonType;
    pointIcon?: IconInfoCommonType;
    clusterIcon?: IconInfoCommonType;
    isChecked?: boolean;
    isShow?: boolean;
    isShowLabel?: boolean;
    isShowAlert?: boolean;
    zoom?: LayerZoomCommonType;
    lowViewPointCluster?: PointClusterCommonType;
    middleViewPointCluster?: PointClusterCommonType;
    highViewPointCluster?: PointClusterCommonType;
    customViewPointCluster?: PointClusterCommonType;
    layerType?: string;
    lineConfig?: LineConfigCommonType;
    polygonConfig?: PolygonConfigCommonType;
    areaConfig?: AreaConfigCommonType;
    barConfig?: BarConfigCommonType;
    signageConfig?: SignageConfigCommonType;
};

/**
 * 图层配置导入请求
 * @params layerConfigItems {LayerConfigItemCommonType[]} 图层配置集合
 */
type LayerConfigImportRequestCommonType = {
    layerConfigItems?: LayerConfigItemCommonType[];
};

/**
 * 错误信息对象
 * @params hasError {boolean} 是否有错误
 * @params errorMessage {string} 错误信息
 */
type ValidateResultCommonType = {
    hasError?: boolean;
    errorMessage?: string;
};

/**
 * 覆盖自图层配置请求
 * @params path {string} 图层配置路径
 * @params productId {string} 产品Id
 */
type CoveringChildrenLayerConfigRequestCommonType = {
    path: string;
    productId: string;
};

/**
 * 物资查询接口参数（支持多点位）
 * @params locations {CoordinateCommonType[]} 点位集合
 * @params areaCodes {any[]} 行政区域代码
 * @params prefixAreaCodes {any[]} 行政区域前缀代码
 * @params keyword {string} 模糊查询关键字(搜索物资名称)
 * @params goodsSubType {string} 物资类型
 * @params maxCount {number} 最大返回值GoodsDataSearchLocations
 */
type GoodsDataSearchLocationsRequestCommonType = {
    locations?: CoordinateCommonType[];
    areaCodes?: any[];
    prefixAreaCodes?: any[];
    keyword?: string;
    goodsSubType?: string;
    maxCount?: number;
};

/**
 * 标签输出
 * @params id {string} Id
 * @params title {string} 标题
 * @params color {string} 颜色
 * @params createdTime {string} 创建时间
 * @params modifyTime {string} 修改时间
 * @params resourceId {string} 资源ID
 * @params description {string} 描述
 */
type LabelsOutCommonType = {
    id?: string;
    title?: string;
    color?: string;
    createdTime?: string;
    modifyTime?: string;
    resourceId?: string;
    description?: string;
};

/**
 * 更新label请求
 * @params title {string} 标题
 * @params color {string} 颜色
 * @params description {string} 描述
 */
type UpdateLabelRequestCommonType = {
    title?: string;
    color?: string;
    description?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {LabelsOutCommonType[]} 记录
 */
type LabelsOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: LabelsOutCommonType[];
};

/**
 * 添加标签请求
 * @params title {string} 标题
 * @params color {string} 颜色
 * @params description {string} 描述
 */
type AddLabelRequestCommonType = {
    title?: string;
    color?: string;
    description?: string;
};

/**
 * 添加标签请求
 * @params title {string} 标题
 * @params color {string} 颜色
 * @params description {string} 描述
 * @params resourceId {string} 资源id
 */
type ImportRequestCommonType = {
    title?: string;
    color?: string;
    description?: string;
    resourceId?: string;
};

/**
 * 标签导入请求
 * @params addLabelRequests {ImportRequestCommonType[]} 标签请求
 */
type LabelsImportRequestCommonType = {
    addLabelRequests?: ImportRequestCommonType[];
};

/**
 * 图层效果配置出参
 * @params id {string} Id
 * @params resourceId {string} 自定义Id
 * @params name {string} 名称
 * @params effectType {string} 图层效果配置类型
 * @params url {string} 地址
 * @params needProxy {boolean} 是否需要网络代理
 * @params proxyNetworkId {string} 代理网络id
 * @params proxyIp {string} 代理ip
 * @params proxyPort {number} 代理端口
 * @params thumbnail {string} 地图缩略图base64，前端截取地图后压缩保存至GDS
 * @params urlFormat {string} 服务处理后地址
 * @params loadOptions {any} 扩展字段
 */
type LayerEffectConfigOutCommonType = {
    id?: string;
    resourceId?: string;
    name?: string;
    effectType?: string;
    url?: string;
    needProxy?: boolean;
    proxyNetworkId?: string;
    proxyIp?: string;
    proxyPort?: number;
    thumbnail?: string;
    urlFormat?: string;
    loadOptions?: any;
};

/**
 * 图层效果配置入参
 * @params resourceId {string} 自定义Id
 * @params name {string} 名称
 * @params effectType {string} 图层效果配置类型
 * @params url {string} 地址
 * @params thumbnail {string} 地图缩略图base64，前端截取地图后压缩保存至GDS
 * @params needProxy {boolean} 是否需要网络代理
 * @params proxyNetworkId {string} 代理网络id
 * @params proxyIp {string} 代理ip
 * @params proxyPort {number} 代理端口
 * @params loadOptions {any} 扩展字段
 */
type LayerEffectConfigInCommonType = {
    resourceId?: string;
    name?: string;
    effectType?: string;
    url?: string;
    thumbnail?: string;
    needProxy?: boolean;
    proxyNetworkId?: string;
    proxyIp?: string;
    proxyPort?: number;
    loadOptions?: any;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {LayerEffectConfigOutCommonType[]} 记录
 */
type LayerEffectConfigOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: LayerEffectConfigOutCommonType[];
};

/**
 * 地图图层
 * @params isChecked {boolean} 是否选中图层
 * @params subLayerTotal {number} 下级图层统计
 * @params facilitiesTotal {number} 下级设施统计
 * @params layerId {string} 图层Id
 * @params path {string} 图层路径
 * @params layerIcon {IconInfoCommonType} 图层图标
 * @params id {string} 图层Id
 * @params name {string} 图层名称
 * @params number {string} ResourceId
 * @params description {string} 图层详情
 * @params iconUrl {string} 图层图标
 * @params group {string} 图层分组
 * @params groupKey {string} 图层分组Key
 * @params productId {string} 产品id
 */
type LayerResponseCommonType = {
    isChecked?: boolean;
    subLayerTotal?: number;
    facilitiesTotal?: number;
    layerId?: string;
    path?: string;
    layerIcon?: IconInfoCommonType;
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
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {LayerResponseCommonType[]} 记录
 */
type LayerResponsePageableQueryResultCommonType = {
    totalCount?: number;
    records?: LayerResponseCommonType[];
};

/**
 * 地图图层
 * @params layerId {string} 图层Id
 * @params path {string} 图层路径
 * @params layerIcon {IconInfoCommonType} 图层图标
 * @params id {string} 图层Id
 * @params name {string} 图层名称
 * @params number {string} ResourceId
 * @params description {string} 图层详情
 * @params iconUrl {string} 图层图标
 * @params group {string} 图层分组
 * @params groupKey {string} 图层分组Key
 * @params productId {string} 产品id
 */
type LayerBaseResponseCommonType = {
    layerId?: string;
    path?: string;
    layerIcon?: IconInfoCommonType;
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
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {LayerBaseResponseCommonType[]} 记录
 */
type LayerBaseResponsePageableQueryResultCommonType = {
    totalCount?: number;
    records?: LayerBaseResponseCommonType[];
};

/**
 * 图层类型（GroupKey）出参
 * @params groupKey {string} 图层类型（GroupKey）
 * @params groupName {string} 图层类型名称（Group）
 */
type LayerGroupOutCommonType = {
    groupKey?: string;
    groupName?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {LayerGroupOutCommonType[]} 记录
 */
type LayerGroupOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: LayerGroupOutCommonType[];
};

/**
 * 图层id集合请求参数
 * @params ids {any[]} 图层Id集合
 */
type LayerQueryByIdsRequestCommonType = {
    ids: any[];
};

/**
 * 图层批量查询入参
 * @params paths {any[]} 图层路径集合
 * @params areaCodes {any[]} 行政区域【用于筛选设施】
 * @params productId {string} ProductId
 */
type LayerBatchRequestCommonType = {
    paths?: any[];
    areaCodes?: any[];
    productId: string;
};

/**
 * 图层响应实体（Name不分层）
 * @params number {string} 编号
 * @params order {number} 排序号
 * @params id {string} 图层Id
 * @params name {string} 图层名称
 * @params description {string} 图层详情
 * @params iconUrl {string} 图层图标
 * @params group {string} 图层分组
 * @params groupKey {string} 图层分组Key
 * @params productId {string} 产品id
 */
type LayerImportOutCommonType = {
    number?: string;
    order?: number;
    id?: string;
    name?: string;
    description?: string;
    iconUrl?: string;
    group?: string;
    groupKey?: string;
    productId?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {LayerImportOutCommonType[]} 记录
 */
type LayerImportOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: LayerImportOutCommonType[];
};

/**
 * 导出图层请求
 * @params productId {string} 产品Id
 */
type ExportLayerRequestCommonType = {
    productId?: string;
};

/**
 * 图层导出实体
 * @params id {string} 图层Id
 * @params number {string} 编号
 * @params name {string} 图层名称
 * @params description {string} 图层详情
 * @params iconUrl {string} 图层图标
 * @params group {string} 图层分组
 * @params groupKey {string} 图层分组Key
 * @params productId {string} 产品id
 * @params order {number} 排序号
 */
type ExportLayerOutCommonType = {
    id?: string;
    number?: string;
    name?: string;
    description?: string;
    iconUrl?: string;
    group?: string;
    groupKey?: string;
    productId?: string;
    order?: number;
};

/**
 * 图层配置导出实体
 * @params id {string} 配置Id
 * @params productId {string} 产品Id
 * @params mapType {MapTypeCommonType} 地图类型 0-电子，1-卫星，2-科幻
 * @params name {string} 图层名称
 * @params path {string} 图层路径
 * @params layerIcon {IconInfoCommonType} 图层图标
 * @params layerIconBackground {IconInfoCommonType} 图标背景
 * @params pointIcon {IconInfoCommonType} 点位图标
 * @params clusterIcon {IconInfoCommonType} 聚合图标
 * @params isChecked {boolean} 是否勾选图层
 * @params isShow {boolean} 是否显示图层
 * @params isShowLabel {boolean} 是否显示点位标签
 * @params isShowAlert {boolean} 是否显示点位告警
 * @params zoom {LayerZoomCommonType} 图层Zoom
 * @params lowViewPointCluster {PointClusterCommonType} 近景聚合规则
 * @params middleViewPointCluster {PointClusterCommonType} 中景聚合规则
 * @params highViewPointCluster {PointClusterCommonType} 远景聚合规则
 * @params customViewPointCluster {PointClusterCommonType} 自定义视点聚合规则
 * @params layerType {string} 图层类型：点、线、面、区划、标牌、柱图
 * @params lineConfig {LineConfigCommonType} 线配置
 * @params polygonConfig {PolygonConfigCommonType} 面配置
 * @params areaConfig {AreaConfigCommonType} 区划配置
 * @params barConfig {BarConfigCommonType} 柱图配置
 * @params signageConfig {SignageConfigCommonType} 标牌配置
 * @params resourceId {string} 资源ID
 */
type ExportLayerConfigOutCommonType = {
    id?: string;
    productId?: string;
    mapType?: MapTypeCommonType;
    name?: string;
    path?: string;
    layerIcon?: IconInfoCommonType;
    layerIconBackground?: IconInfoCommonType;
    pointIcon?: IconInfoCommonType;
    clusterIcon?: IconInfoCommonType;
    isChecked?: boolean;
    isShow?: boolean;
    isShowLabel?: boolean;
    isShowAlert?: boolean;
    zoom?: LayerZoomCommonType;
    lowViewPointCluster?: PointClusterCommonType;
    middleViewPointCluster?: PointClusterCommonType;
    highViewPointCluster?: PointClusterCommonType;
    customViewPointCluster?: PointClusterCommonType;
    layerType?: string;
    lineConfig?: LineConfigCommonType;
    polygonConfig?: PolygonConfigCommonType;
    areaConfig?: AreaConfigCommonType;
    barConfig?: BarConfigCommonType;
    signageConfig?: SignageConfigCommonType;
    resourceId?: string;
};

/**
 * 地图配置导出实体
 * @params resourceId {string} 资源ID
 * @params id {string} 图层Id
 * @params productId {string} 产品Id
 * @params mapType {MapTypeCommonType} Map类型
 * @params mapSourceType {string} 地图类型
 * @params defaultMapServerType {string} 初始地图服务类型
 * @params mapServerTypes {any[]} 产品选中的地图服务类型集合
 * @params defaultLayerEffectConfig {string} 初始图层效果配置
 * @params layerEffectConfigs {any[]} 产品选中的图层效果配置集合
 * @params clusterStyle {string} 聚合样式
 * @params minPitch {number} 最小仰俯角
 * @params maxPitch {number} 最大仰俯角
 * @params center {AddressCoordinateCommonType} 默认中心点
 * @params viewBox {MapVisualScopeCommonType} 可视范围
 * @params useFakeMapSdk {boolean} 是否使用SDK(地图渲染)
 * @params lowViewPoint {ViewPointCommonType} 近景
 * @params middleViewPoint {ViewPointCommonType} 中景
 * @params highViewPoint {ViewPointCommonType} 远景
 * @params mapMaskEffect {MapMaskEffectCommonType} 地图遮罩效果
 * @params areaBoundaryEffectConfig {AreaBoundaryEffectConfigCommonType} 行政区划边界效果配置
 */
type ExportGeoConfigOutCommonType = {
    resourceId?: string;
    id?: string;
    productId?: string;
    mapType?: MapTypeCommonType;
    mapSourceType?: string;
    defaultMapServerType?: string;
    mapServerTypes?: any[];
    defaultLayerEffectConfig?: string;
    layerEffectConfigs?: any[];
    clusterStyle?: string;
    minPitch?: number;
    maxPitch?: number;
    center?: AddressCoordinateCommonType;
    viewBox?: MapVisualScopeCommonType;
    useFakeMapSdk?: boolean;
    lowViewPoint?: ViewPointCommonType;
    middleViewPoint?: ViewPointCommonType;
    highViewPoint?: ViewPointCommonType;
    mapMaskEffect?: MapMaskEffectCommonType;
    areaBoundaryEffectConfig?: AreaBoundaryEffectConfigCommonType;
};

/**
 * 地图服务类型导出实体
 * @params id {string} mongoId
 * @params resourceId {string} 自定义Id
 * @params name {string} 类型名称
 * @params coordinate {any[]} 中心点
 * @params zoom {number} 地图层级
 * @params epsg {string} 坐标系
 * @params thumbnail {string} 地图缩略图base64，前端截取地图后压缩保存至GDS
 */
type ExportMapServerTypeOutCommonType = {
    id?: string;
    resourceId?: string;
    name?: string;
    coordinate?: any[];
    zoom?: number;
    epsg?: string;
    thumbnail?: string;
};

/**
 * 地图服务底图图层导出实体
 * @params id {string} mongoId
 * @params name {string} 图层名称
 * @params typeId {string} MapServerTypes表Id
 * @params resourceId {string} 自定义id
 * @params serviceType {string} 服务类型
 * @params url {string} 地址
 * @params isStandard {boolean} 是否标准服务
 * @params needProxy {boolean} 是否需要网络代理
 * @params proxyNetworkId {string} 代理网络id
 * @params proxyIp {string} 代理ip
 * @params proxyPort {number} 代理端口
 * @params order {number} 排序字段
 * @params loadOptions {any} 图层配置参数，json字符串，每个不同的服务类型不同参数
 */
type ExportMapTypeOverlayOutCommonType = {
    id?: string;
    name?: string;
    typeId?: string;
    resourceId?: string;
    serviceType?: string;
    url?: string;
    isStandard?: boolean;
    needProxy?: boolean;
    proxyNetworkId?: string;
    proxyIp?: string;
    proxyPort?: number;
    order?: number;
    loadOptions?: any;
};

/**
 * 图层导出出参
 * @params layers {ExportLayerOutCommonType[]} 图层集合
 * @params layerConfigs {ExportLayerConfigOutCommonType[]} 图层配置集合
 * @params geoConfigs {ExportGeoConfigOutCommonType[]} 地图配置集合
 * @params mapServerTypes {ExportMapServerTypeOutCommonType[]} 地图服务类型集合
 * @params mapTypeOverlays {ExportMapTypeOverlayOutCommonType[]} 地图服务底图图层集合
 */
type ExportLayerModelCommonType = {
    layers?: ExportLayerOutCommonType[];
    layerConfigs?: ExportLayerConfigOutCommonType[];
    geoConfigs?: ExportGeoConfigOutCommonType[];
    mapServerTypes?: ExportMapServerTypeOutCommonType[];
    mapTypeOverlays?: ExportMapTypeOverlayOutCommonType[];
};

/**
 * 图层导入实体
 * @params id {string} 图层Id
 * @params number {string} 编号
 * @params name {string} 图层名称
 * @params description {string} 图层详情
 * @params iconUrl {string} 图层图标
 * @params group {string} 图层分组
 * @params groupKey {string} 图层分组Key
 * @params productId {string} 产品id
 * @params order {number} 排序号
 */
type ImportLayerInCommonType = {
    id?: string;
    number?: string;
    name?: string;
    description?: string;
    iconUrl?: string;
    group?: string;
    groupKey?: string;
    productId?: string;
    order?: number;
};

/**
 * 图层配置导入实体
 * @params id {string} 配置Id
 * @params productId {string} 产品Id
 * @params mapType {MapTypeCommonType} 地图类型 0-电子，1-卫星，2-科幻
 * @params name {string} 图层名称
 * @params path {string} 图层路径
 * @params layerIcon {IconInfoCommonType} 图层图标
 * @params layerIconBackground {IconInfoCommonType} 图标背景
 * @params pointIcon {IconInfoCommonType} 点位图标
 * @params clusterIcon {IconInfoCommonType} 聚合图标
 * @params isChecked {boolean} 是否勾选图层
 * @params isShow {boolean} 是否显示图层
 * @params isShowLabel {boolean} 是否显示点位标签
 * @params isShowAlert {boolean} 是否显示点位告警
 * @params zoom {LayerZoomCommonType} 图层Zoom
 * @params lowViewPointCluster {PointClusterCommonType} 近景聚合规则
 * @params middleViewPointCluster {PointClusterCommonType} 中景聚合规则
 * @params highViewPointCluster {PointClusterCommonType} 远景聚合规则
 * @params customViewPointCluster {PointClusterCommonType} 自定义视点聚合规则
 * @params layerType {string} 图层类型：点、线、面、区划、标牌、柱图
 * @params lineConfig {LineConfigCommonType} 线配置
 * @params polygonConfig {PolygonConfigCommonType} 面配置
 * @params areaConfig {AreaConfigCommonType} 区划配置
 * @params barConfig {BarConfigCommonType} 柱图配置
 * @params signageConfig {SignageConfigCommonType} 标牌配置
 * @params resourceId {string} 资源ID
 */
type ImportLayerConfigInCommonType = {
    id?: string;
    productId?: string;
    mapType?: MapTypeCommonType;
    name?: string;
    path?: string;
    layerIcon?: IconInfoCommonType;
    layerIconBackground?: IconInfoCommonType;
    pointIcon?: IconInfoCommonType;
    clusterIcon?: IconInfoCommonType;
    isChecked?: boolean;
    isShow?: boolean;
    isShowLabel?: boolean;
    isShowAlert?: boolean;
    zoom?: LayerZoomCommonType;
    lowViewPointCluster?: PointClusterCommonType;
    middleViewPointCluster?: PointClusterCommonType;
    highViewPointCluster?: PointClusterCommonType;
    customViewPointCluster?: PointClusterCommonType;
    layerType?: string;
    lineConfig?: LineConfigCommonType;
    polygonConfig?: PolygonConfigCommonType;
    areaConfig?: AreaConfigCommonType;
    barConfig?: BarConfigCommonType;
    signageConfig?: SignageConfigCommonType;
    resourceId?: string;
};

/**
 * 地图配置导入实体
 * @params resourceId {string} 资源ID
 * @params id {string} 图层Id
 * @params productId {string} 产品Id
 * @params mapType {MapTypeCommonType} Map类型
 * @params mapSourceType {string} 地图类型
 * @params defaultMapServerType {string} 初始地图服务类型
 * @params mapServerTypes {any[]} 产品选中的地图服务类型集合
 * @params defaultLayerEffectConfig {string} 初始图层效果配置
 * @params layerEffectConfigs {any[]} 产品选中的图层效果配置集合
 * @params clusterStyle {string} 聚合样式
 * @params minPitch {number} 最小仰俯角
 * @params maxPitch {number} 最大仰俯角
 * @params center {AddressCoordinateCommonType} 默认中心点
 * @params viewBox {MapVisualScopeCommonType} 可视范围
 * @params useFakeMapSdk {boolean} 是否使用SDK(地图渲染)
 * @params lowViewPoint {ViewPointCommonType} 近景
 * @params middleViewPoint {ViewPointCommonType} 中景
 * @params highViewPoint {ViewPointCommonType} 远景
 * @params mapMaskEffect {MapMaskEffectCommonType} 地图遮罩效果
 * @params areaBoundaryEffectConfig {AreaBoundaryEffectConfigCommonType} 行政区划边界效果配置
 */
type ImportGeoConfigInCommonType = {
    resourceId?: string;
    id?: string;
    productId?: string;
    mapType?: MapTypeCommonType;
    mapSourceType?: string;
    defaultMapServerType?: string;
    mapServerTypes?: any[];
    defaultLayerEffectConfig?: string;
    layerEffectConfigs?: any[];
    clusterStyle?: string;
    minPitch?: number;
    maxPitch?: number;
    center?: AddressCoordinateCommonType;
    viewBox?: MapVisualScopeCommonType;
    useFakeMapSdk?: boolean;
    lowViewPoint?: ViewPointCommonType;
    middleViewPoint?: ViewPointCommonType;
    highViewPoint?: ViewPointCommonType;
    mapMaskEffect?: MapMaskEffectCommonType;
    areaBoundaryEffectConfig?: AreaBoundaryEffectConfigCommonType;
};

/**
 * 地图服务类型导入实体
 * @params id {string} mongoId
 * @params resourceId {string} 自定义Id
 * @params name {string} 类型名称
 * @params coordinate {any[]} 中心点
 * @params zoom {number} 地图层级
 * @params epsg {string} 坐标系
 * @params thumbnail {string} 地图缩略图base64，前端截取地图后压缩保存至GDS
 */
type ImportMapServerTypeInCommonType = {
    id?: string;
    resourceId?: string;
    name?: string;
    coordinate?: any[];
    zoom?: number;
    epsg?: string;
    thumbnail?: string;
};

/**
 * 地图服务底图图层导入实体
 * @params id {string} mongoId
 * @params name {string} 图层名称
 * @params typeId {string} MapServerTypes表Id
 * @params resourceId {string} 自定义id
 * @params serviceType {string} 服务类型
 * @params url {string} 地址
 * @params isStandard {boolean} 是否标准服务
 * @params needProxy {boolean} 是否需要网络代理
 * @params proxyNetworkId {string} 代理网络id
 * @params proxyIp {string} 代理ip
 * @params proxyPort {number} 代理端口
 * @params order {number} 排序字段
 * @params loadOptions {any} 图层配置参数，json字符串，每个不同的服务类型不同参数
 */
type ImportMapTypeOverlayInCommonType = {
    id?: string;
    name?: string;
    typeId?: string;
    resourceId?: string;
    serviceType?: string;
    url?: string;
    isStandard?: boolean;
    needProxy?: boolean;
    proxyNetworkId?: string;
    proxyIp?: string;
    proxyPort?: number;
    order?: number;
    loadOptions?: any;
};

/**
 * 图层导入入参
 * @params isReload {boolean} 是否刷新缓存
 * @params layers {ImportLayerInCommonType[]} 图层集合
 * @params layerConfigs {ImportLayerConfigInCommonType[]} 图层配置集合
 * @params geoConfigs {ImportGeoConfigInCommonType[]} 地图配置集合
 * @params mapServerTypes {ImportMapServerTypeInCommonType[]} 地图服务类型集合
 * @params mapTypeOverlays {ImportMapTypeOverlayInCommonType[]} 地图服务底图图层集合
 */
type ImportLayerModelCommonType = {
    isReload?: boolean;
    layers?: ImportLayerInCommonType[];
    layerConfigs?: ImportLayerConfigInCommonType[];
    geoConfigs?: ImportGeoConfigInCommonType[];
    mapServerTypes?: ImportMapServerTypeInCommonType[];
    mapTypeOverlays?: ImportMapTypeOverlayInCommonType[];
};

/**
 * 图层基础信息响应
 * @params id {string} Id
 * @params productId {string} 产品Id
 * @params name {string} 图层名称
 * @params path {string} 图层路径
 * @params layerIcon {IconInfoCommonType} 图层图标
 * @params layerIconBackground {IconInfoCommonType} 图标背景
 * @params isChecked {boolean} 是否勾选图层
 * @params isShow {boolean} 是否显示图层
 * @params isShowLabel {boolean} 是否显示点位标签
 * @params isShowAlert {boolean} 是否显示点位告警
 * @params layerType {string} 图层类型：点、线、面、区划、标牌、柱图
 * @params resourceId {string} 资源ID
 */
type LayerConfigBaseOutCommonType = {
    id?: string;
    productId?: string;
    name?: string;
    path?: string;
    layerIcon?: IconInfoCommonType;
    layerIconBackground?: IconInfoCommonType;
    isChecked?: boolean;
    isShow?: boolean;
    isShowLabel?: boolean;
    isShowAlert?: boolean;
    layerType?: string;
    resourceId?: string;
};

/**
 * 图层响应，包含基础图层配置
 * @params layerConfig {LayerConfigBaseOutCommonType} 图层配置
 * @params children {LayerNodeBaseResponseCommonType[]} 子节点
 * @params name {string} 图层名字
 * @params number {string} ResourceId
 * @params group {string} 图层分组
 * @params groupKey {string} 图层分组Key
 * @params productId {string} 产品Id
 * @params isDeepestNode {boolean} 是否为最深的节点
 * @params path {string} 图层树的路径
 * @params layerId {string} 图层的ID，只有层级最深的节点才会赋值
 */
type LayerNodeBaseResponseCommonType = {
    layerConfig?: LayerConfigBaseOutCommonType;
    children?: LayerNodeBaseResponseCommonType[];
    name?: string;
    number?: string;
    group?: string;
    groupKey?: string;
    productId?: string;
    isDeepestNode?: boolean;
    path?: string;
    layerId?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {LayerNodeBaseResponseCommonType[]} 记录
 */
type LayerNodeBaseResponsePageableQueryResultCommonType = {
    totalCount?: number;
    records?: LayerNodeBaseResponseCommonType[];
};

/**
 * 图层树请求参数
 * @params selectIds {any[]} 选中Id集合
 * @params productId {string} 产品id
 */
type LayerTreeRequestCommonType = {
    selectIds?: any[];
    productId: string;
};

/**
 * 图层带选中状态
 * @params children {LayerUseStatusOutCommonType[]} 子节点
 * @params useStatus {UseStatusCommonType} 使用状态
 * @params name {string} 图层名字
 * @params number {string} ResourceId
 * @params group {string} 图层分组
 * @params groupKey {string} 图层分组Key
 * @params productId {string} 产品Id
 * @params isDeepestNode {boolean} 是否为最深的节点
 * @params path {string} 图层树的路径
 * @params layerId {string} 图层的ID，只有层级最深的节点才会赋值
 */
type LayerUseStatusOutCommonType = {
    children?: LayerUseStatusOutCommonType[];
    useStatus?: UseStatusCommonType;
    name?: string;
    number?: string;
    group?: string;
    groupKey?: string;
    productId?: string;
    isDeepestNode?: boolean;
    path?: string;
    layerId?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {LayerUseStatusOutCommonType[]} 记录
 */
type LayerUseStatusOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: LayerUseStatusOutCommonType[];
};

/**
 * 图层响应，包含全量图层配置
 * @params layerConfig {LayerConfigOutCommonType} 图层配置
 * @params name {string} 图层名字
 * @params number {string} ResourceId
 * @params group {string} 图层分组
 * @params groupKey {string} 图层分组Key
 * @params productId {string} 产品Id
 * @params isDeepestNode {boolean} 是否为最深的节点
 * @params path {string} 图层树的路径
 * @params layerId {string} 图层的ID，只有层级最深的节点才会赋值
 */
type LayerNodeResponseCommonType = {
    layerConfig?: LayerConfigOutCommonType;
    name?: string;
    number?: string;
    group?: string;
    groupKey?: string;
    productId?: string;
    isDeepestNode?: boolean;
    path?: string;
    layerId?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {LayerNodeResponseCommonType[]} 记录
 */
type LayerNodeResponsePageableQueryResultCommonType = {
    totalCount?: number;
    records?: LayerNodeResponseCommonType[];
};

/**
 * 地图中心点出参
 * @params id {string} Id
 * @params productId {string} 产品Id
 * @params areaCode {string} 行政区域码
 * @params areaCodeName {string} 行政区域名称
 * @params coordinate {CoordinateCommonType} 坐标
 * @params address {string} 地址
 * @params zoom {number} 地图层级
 */
type MapCenterOutCommonType = {
    id?: string;
    productId?: string;
    areaCode?: string;
    areaCodeName?: string;
    coordinate?: CoordinateCommonType;
    address?: string;
    zoom?: number;
};

/**
 * 地图中心点入参
 * @params productId {string} 产品Id
 * @params areaCode {string} 行政区域码
 * @params areaCodeName {string} 行政区域名称
 * @params coordinate {CoordinateCommonType} 坐标
 * @params address {string} 地址
 * @params zoom {number} 地图层级
 */
type MapCenterInCommonType = {
    productId?: string;
    areaCode?: string;
    areaCodeName?: string;
    coordinate?: CoordinateCommonType;
    address?: string;
    zoom?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {MapCenterOutCommonType[]} 记录
 */
type MapCenterOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: MapCenterOutCommonType[];
};

/**
 * 开启/关闭地图中心点请求
 * @params productId {string} 产品Id
 * @params isOpen {boolean} 是否开启
 */
type MapCenterSwitchRequestCommonType = {
    productId?: string;
    isOpen?: boolean;
};

/**
 * 地图服务类型响应
 * @params id {string} mongoId
 * @params resourceId {string} 自定义Id
 * @params name {string} 类型名称
 * @params coordinate {any[]} 中心点
 * @params zoom {number} 地图层级
 * @params epsg {string} 坐标系
 * @params thumbnail {string} 地图缩略图base64，前端截取地图后压缩保存至GDS
 */
type MapServerTypeOutCommonType = {
    id?: string;
    resourceId?: string;
    name?: string;
    coordinate?: any[];
    zoom?: number;
    epsg?: string;
    thumbnail?: string;
};

/**
 * 地图服务类型入参
 * @params resourceId {string} 自定义Id
 * @params name {string} 类型名称
 * @params coordinate {any[]} 中心点
 * @params zoom {number} 地图层级
 * @params epsg {string} 坐标系
 * @params thumbnail {string} 地图缩略图base64，前端截取地图后压缩保存至GDS
 */
type MapServerTypeInCommonType = {
    resourceId?: string;
    name?: string;
    coordinate?: any[];
    zoom?: number;
    epsg?: string;
    thumbnail?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {MapServerTypeOutCommonType[]} 记录
 */
type MapServerTypeOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: MapServerTypeOutCommonType[];
};

/**
 * 地图服务底图图层
 * @params id {string} mongoId
 * @params name {string} 图层名称
 * @params typeId {string} MapServerTypes表Id
 * @params resourceId {string} 自定义id
 * @params serviceType {string} 服务类型
 * @params url {string} 地址
 * @params urlFormat {string} 转换成地图网关的地址
 * @params isStandard {boolean} 是否标准服务
 * @params needProxy {boolean} 是否需要网络代理
 * @params proxyNetworkId {string} 代理网络id
 * @params proxyIp {string} 代理ip
 * @params proxyPort {number} 代理端口
 * @params order {number} 排序字段
 * @params loadOptions {any} 图层配置参数，json字符串，每个不同的服务类型不同参数
 */
type MapTypeOverlayOutCommonType = {
    id?: string;
    name?: string;
    typeId?: string;
    resourceId?: string;
    serviceType?: string;
    url?: string;
    urlFormat?: string;
    isStandard?: boolean;
    needProxy?: boolean;
    proxyNetworkId?: string;
    proxyIp?: string;
    proxyPort?: number;
    order?: number;
    loadOptions?: any;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {MapTypeOverlayOutCommonType[]} 记录
 */
type MapTypeOverlayOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: MapTypeOverlayOutCommonType[];
};

/**
 * 地图服务底图图层
 * @params name {string} 图层名称
 * @params typeId {string} MapServerTypes表Id
 * @params resourceId {string} 自定义id
 * @params serviceType {string} 服务类型
 * @params url {string} 地址
 * @params isStandard {boolean} 是否标准服务
 * @params needProxy {boolean} 是否需要网络代理
 * @params proxyNetworkId {string} 代理网络id
 * @params proxyIp {string} 代理ip
 * @params proxyPort {number} 代理端口
 * @params order {number} 排序字段
 * @params loadOptions {any} 图层配置参数，json字符串，每个不同的服务类型不同参数
 */
type MapTypeOverlayInCommonType = {
    name?: string;
    typeId?: string;
    resourceId?: string;
    serviceType?: string;
    url?: string;
    isStandard?: boolean;
    needProxy?: boolean;
    proxyNetworkId?: string;
    proxyIp?: string;
    proxyPort?: number;
    order?: number;
    loadOptions?: any;
};

/**
 * 地图服务类型底层图层地址格式化出参
 * @params urlFormat {string} 格式化后的url地址
 */
type MapOverlayUrlFormatOutCommonType = {
    urlFormat?: string;
};

/**
 * 标绘出参
 * @params id {string} 标绘Id
 * @params associatedId {string} 标绘关联Id，如事件Id、用户Id
 * @params plotAssociatedType {PlotAssociatedTypeCommonType} 标绘关联类型，0表示用户标绘，1表示事件标绘
 * @params type {string} 标绘数据
 * @params properties {string} 标绘属性
 * @params geometry {string} 几何信息
 */
type PlotOutCommonType = {
    id?: string;
    associatedId?: string;
    plotAssociatedType?: PlotAssociatedTypeCommonType;
    type?: string;
    properties?: string;
    geometry?: string;
};

/**
 * 标绘入参
 * @params type {string} 标绘数据
 * @params properties {any} 标绘属性
 * @params geometry {any} 几何信息
 */
type UpdatePlotInCommonType = {
    type?: string;
    properties?: any;
    geometry?: any;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {PlotOutCommonType[]} 记录
 */
type PlotOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: PlotOutCommonType[];
};

/**
 * 事件标绘入参
 * @params eventId {string} 事件Id
 * @params id {string} 标绘Id
 * @params type {string} 标绘数据
 * @params properties {any} 标绘属性
 * @params geometry {any} 几何信息
 */
type EventPlotInCommonType = {
    eventId: string;
    id?: string;
    type?: string;
    properties?: any;
    geometry?: any;
};

/**
 * 标绘入参
 * @params id {string} 标绘Id
 * @params type {string} 标绘数据
 * @params properties {any} 标绘属性
 * @params geometry {any} 几何信息
 */
type PlotInCommonType = {
    id?: string;
    type?: string;
    properties?: any;
    geometry?: any;
};

/**
 * 关联标绘入参
 * @params associatedId {string} 关联Id
 * @params plotAssociatedType {PlotAssociatedTypeCommonType} 关联类型，0-用户，1-事件，2-专题
 * @params id {string} 标绘Id
 * @params type {string} 标绘数据
 * @params properties {any} 标绘属性
 * @params geometry {any} 几何信息
 */
type AssociatedPlotInCommonType = {
    associatedId: string;
    plotAssociatedType?: PlotAssociatedTypeCommonType;
    id?: string;
    type?: string;
    properties?: any;
    geometry?: any;
};

/**
 * 用户常用的标绘类型出参
 * @params id {string} 标绘类型Id
 * @params type {string} 标绘类型
 * @params name {string} 标绘类型名称
 * @params dirName {string} 目录名称
 * @params fileName {string} 文件名称
 * @params editType {string} 编辑类型
 * @params userId {string} 用户Id
 */
type PlotTypeOutCommonType = {
    id?: string;
    type?: string;
    name?: string;
    dirName?: string;
    fileName?: string;
    editType?: string;
    userId?: string;
};

/**
 * 用户常用的标绘类型出参
 * @params id {string} 标绘类型Id
 * @params type {string} 标绘类型
 * @params name {string} 标绘类型名称
 * @params dirName {string} 目录名称
 * @params fileName {string} 文件名称
 * @params editType {string} 编辑类型
 */
type TypeWithoutUserIdOutCommonType = {
    id?: string;
    type?: string;
    name?: string;
    dirName?: string;
    fileName?: string;
    editType?: string;
};

/**
 * 标绘类型结果集
 * @params totalCount {number} 总数
 * @params userId {string} 用户Id
 * @params plotTypes {TypeWithoutUserIdOutCommonType[]} 标绘类型集合
 */
type TypeWithoutUserIdOutPlotTypeResultCommonType = {
    totalCount?: number;
    userId?: string;
    plotTypes?: TypeWithoutUserIdOutCommonType[];
};

/**
 * 用户常用的标绘类型入参
 * @params id {string} 地图标绘类型Id
 * @params type {string} 标绘类型
 * @params name {string} 标绘类型名称
 * @params dirName {string} 目录名称
 * @params fileName {string} 文件名称
 * @params editType {string} 编辑类型
 */
type PlotTypeInCommonType = {
    id?: string;
    type?: string;
    name?: string;
    dirName?: string;
    fileName?: string;
    editType?: string;
};

/**
 * 模型场景入参
 * @params resourceId {string} 资源Id
 * @params facilityId {string} 设施Id
 * @params areaCode {string} 区域码
 * @params name {string} 场景名称
 * @params sceneName {string} 场景对应的英文名
 * @params isIndoorScene {boolean} 是否室内场景
 * @params showModelList {any[]} 场景模型列表
 * @params cameraOption {CameraOptionCommonType} 三维信息数据（视点数据）
 */
type SceneInCommonType = {
    resourceId?: string;
    facilityId?: string;
    areaCode?: string;
    name?: string;
    sceneName?: string;
    isIndoorScene?: boolean;
    showModelList?: any[];
    cameraOption?: CameraOptionCommonType;
};

/**
 * 图层统计数据
 * @params facilityAmount {number} 设施总数
 * @params id {string} 图层Id
 * @params name {string} 图层名称
 * @params number {string} ResourceId
 * @params description {string} 图层详情
 * @params iconUrl {string} 图层图标
 * @params group {string} 图层分组
 * @params groupKey {string} 图层分组Key
 * @params productId {string} 产品id
 */
type LayerStatisticalOutCommonType = {
    facilityAmount?: number;
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
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {LayerStatisticalOutCommonType[]} 记录
 */
type LayerStatisticalOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: LayerStatisticalOutCommonType[];
};

/**
 * 图层树统计入参
 * @params rootLayerName {string} 根图层名
 * @params keyword {string} 关键词
 * @params productId {string} 产品Id
 * @params prefixAreaCodes {any[]} 行政区域码，查询包括下级的统计，AreaCode，PrefixAreaCodes都传以AreaCode为准
 */
type LayerTreeStatisticInCommonType = {
    rootLayerName: string;
    keyword?: string;
    productId?: string;
    prefixAreaCodes?: any[];
};

/**
 * 图层统计（树结构）
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
 * 根据区域和图层查询设施统计请求
 * @params layerIds {any[]} 需统计的图层ID
 * @params upLeft {CoordinateCommonType} 左上坐标
 * @params bottomRight {CoordinateCommonType} 右上坐标
 */
type LayersFacilityStatisticRequestCommonType = {
    layerIds: any[];
    upLeft: CoordinateCommonType;
    bottomRight: CoordinateCommonType;
};

/**
 *
 * @params layerId {string} 图层id
 * @params totalCount {number} 设施总数
 */
type LayersFacilityStatisticOutCommonType = {
    layerId?: string;
    totalCount?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {LayersFacilityStatisticOutCommonType[]} 记录
 */
type LayersFacilityStatisticOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: LayersFacilityStatisticOutCommonType[];
};

/**
 * 根据圆形区域和图层统计设施请求
 * @params layerIds {any[]} 需统计的图层ID
 * @params center {CoordinateCommonType} 圆心
 * @params radius {number} 半径（单位米）
 */
type LayerFacilityCircleStatisticRequestCommonType = {
    layerIds: any[];
    center: CoordinateCommonType;
    radius: number;
};

----

/**
 * 添加边界——请求参数类型定义
 * @headers X-version {string}
 * @params resourceId {string} 资源Id
 * @params name {string} 边界名称
 * @params layerId {string} 图层Id
 * @params data {any} 边界数据
 */
export type AddBoundariesReqType = {
    'X-version'?: string;
    resourceId?: string;
    name?: string;
    layerId?: string;
    data?: any;
};

/**
 * 添加边界——响应参数类型定义
 * @params id {string} 图层Id
 * @params productId {string} 产品类型
 * @params mapType {MapTypeCommonType} Map类型
 * @params mapSourceType {string} 地图类型
 * @params defaultMapServerType {string} 初始地图服务类型
 * @params mapServerTypes {any[]} 产品选中的地图服务类型集合
 * @params defaultLayerEffectConfig {string} 初始图层效果配置
 * @params layerEffectConfigs {any[]} 产品选中的图层效果配置集合
 * @params clusterStyle {string} 聚合样式
 * @params minPitch {number} 最小仰俯角
 * @params maxPitch {number} 最大仰俯角
 * @params center {AddressCoordinateCommonType} 默认中心点
 * @params isEnableMapCenter {boolean} 是否开启自定义中心点
 * @params viewBox {MapVisualScopeCommonType} 可视范围
 * @params useFakeMapSdk {boolean} 是否使用SDK
 * @params lowViewPoint {ViewPointCommonType} 近景
 * @params middleViewPoint {ViewPointCommonType} 中景
 * @params highViewPoint {ViewPointCommonType} 远景
 * @params maxiMinZoom {MapZoomCommonType} 地图最大最小层级
 * @params mapMaskEffect {MapMaskEffectCommonType} 地图遮罩效果
 * @params areaBoundaryEffectConfig {AreaBoundaryEffectConfigCommonType} 行政区划边界效果配置
 */
export type AddBoundariesResType = {
    id: string;
    productId: string;
    mapType: MapTypeCommonType;
    mapSourceType: string;
    defaultMapServerType: string;
    mapServerTypes: any[];
    defaultLayerEffectConfig: string;
    layerEffectConfigs: any[];
    clusterStyle: string;
    minPitch: number;
    maxPitch: number;
    center: AddressCoordinateCommonType;
    isEnableMapCenter: boolean;
    viewBox: MapVisualScopeCommonType;
    useFakeMapSdk: boolean;
    lowViewPoint: ViewPointCommonType;
    middleViewPoint: ViewPointCommonType;
    highViewPoint: ViewPointCommonType;
    maxiMinZoom: MapZoomCommonType;
    mapMaskEffect: MapMaskEffectCommonType;
    areaBoundaryEffectConfig: AreaBoundaryEffectConfigCommonType;
};

/**
 * 修改边界——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params resourceId {string} 资源Id
 * @params name {string} 边界名称
 * @params layerId {string} 图层Id
 * @params data {any} 边界数据
 */
export type UpdateBoundariesReqType = {
    id: string;
    'X-version'?: string;
    resourceId?: string;
    name?: string;
    layerId?: string;
    data?: any;
};

/**
 * 删除边界——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteBoundariesReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 根据id查询边界数据——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetBoundariesByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 根据id查询边界数据——响应参数类型定义
 * @params id {string} 边界Id
 * @params resourceId {string} 资源Id
 * @params name {string} 边界名称
 * @params layerId {string} 图层Id
 * @params data {string} 边界数据
 */
export type GetBoundariesByIdResType = {
    id: string;
    resourceId: string;
    name: string;
    layerId: string;
    data: string;
};

/**
 * 多条件查询边界数据——请求参数类型定义
 * @headers X-version {string}
 * @params keyWord {string} 关键字
 * @params layerIds {any[]} 图层Id
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, int.MaxValue]
 */
export type SearchBoundariesReqType = {
    'X-version'?: string;
    keyWord?: string;
    layerIds?: any[];
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 多条件查询边界数据——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {BoundaryOutCommonType[]} 记录
 */
export type SearchBoundariesResType = {
    totalCount: number;
    records: BoundaryOutCommonType[];
};

/**
 * 添加坐标系——请求参数类型定义
 * @headers X-version {string}
 * @params id {string} 坐标系编码
 * @params name {string} 坐标系名称
 */
export type AddCoordinateReqType = {
    'X-version'?: string;
    id?: string;
    name?: string;
};

/**
 * 添加坐标系——响应参数类型定义
 * @params id {string} 坐标系编码
 * @params name {string} 坐标系名称
 */
export type AddCoordinateResType = {
    id: string;
    name: string;
};

/**
 * 获取坐标系集合——请求参数类型定义
 * @headers X-version {string}
 */
export type GetCoordinatesReqType = {
    'X-version'?: string;
};

/**
 * 获取坐标系集合——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {CoordinateOutCommonType[]} 记录
 */
export type GetCoordinatesResType = {
    totalCount: number;
    records: CoordinateOutCommonType[];
};

/**
 * 删除坐标系——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteCoordinateReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取指定人的有权限行政区域——请求参数类型定义
 * @params userId {string} 指定人Id，空为本用户
 * @headers X-version {string}
 */
export type GetGdsDistrictsReqType = {
    userId?: string;
    'X-version'?: string;
};

/**
 * 获取指定人的有权限行政区域——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {DistrictOutCommonType[]} 记录
 */
export type GetGdsDistrictsResType = {
    totalCount: number;
    records: DistrictOutCommonType[];
};

/**
 * 创建行政区域——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 区域名
 * @params englishName {string} 英文名
 * @params coordinate {CoordinateCommonType} 区域坐标点 （必填）
 * @params areaCode {string} 邮编
 * @params geoFilePath {string} 对应 Geo 相关配置文件路径
 * @params type {AreaCodeTypeCommonType} 行政区域码类型
 */
export type AddDistrictsReqType = {
    'X-version'?: string;
    name?: string;
    englishName?: string;
    coordinate: CoordinateCommonType;
    areaCode?: string;
    geoFilePath?: string;
    type?: AreaCodeTypeCommonType;
};

/**
 * 创建行政区域——响应参数类型定义
 * @params resourceId {string} 资源Id
 * @params englishName {string} 英文名
 * @params coordinate {CoordinateCommonType} 区域坐标点
 * @params areaCode {string} 邮编
 * @params parentId {string} 父级行政区域 Id
 * @params parentPath {string} 树结构父Id路径（不包含自身）
 * @params parentIdPath {string} 树结构父Id路径（包含自身）
 * @params parentNamePath {string} 树结构父名称路径（包含自身）
 * @params geoFilePath {string} 对应 Geo 相关配置文件路径
 * @params platformId {string} 资源所属平台Id
 * @params order {number} 排序
 * @params type {AreaCodeTypeCommonType} 行政区域码类型
 * @params idPath {string} Id 路径
 * @params namePath {string} 名字路径
 * @params isLeaf {boolean} 是否为叶子节点
 * @params id {string} ID
 * @params name {string} 名称
 */
export type AddDistrictsResType = {
    resourceId: string;
    englishName: string;
    coordinate: CoordinateCommonType;
    areaCode: string;
    parentId: string;
    parentPath: string;
    parentIdPath: string;
    parentNamePath: string;
    geoFilePath: string;
    platformId: string;
    order: number;
    type: AreaCodeTypeCommonType;
    idPath: string;
    namePath: string;
    isLeaf: boolean;
    id: string;
    name: string;
};

/**
 * 根据 Id 获取行政区域——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetDistrictsByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 根据 Id 获取行政区域——响应参数类型定义
 * @params resourceId {string} 资源Id
 * @params englishName {string} 英文名
 * @params coordinate {CoordinateCommonType} 区域坐标点
 * @params areaCode {string} 邮编
 * @params parentId {string} 父级行政区域 Id
 * @params parentPath {string} 树结构父Id路径（不包含自身）
 * @params parentIdPath {string} 树结构父Id路径（包含自身）
 * @params parentNamePath {string} 树结构父名称路径（包含自身）
 * @params geoFilePath {string} 对应 Geo 相关配置文件路径
 * @params platformId {string} 资源所属平台Id
 * @params order {number} 排序
 * @params type {AreaCodeTypeCommonType} 行政区域码类型
 * @params idPath {string} Id 路径
 * @params namePath {string} 名字路径
 * @params isLeaf {boolean} 是否为叶子节点
 * @params id {string} ID
 * @params name {string} 名称
 */
export type GetDistrictsByIdResType = {
    resourceId: string;
    englishName: string;
    coordinate: CoordinateCommonType;
    areaCode: string;
    parentId: string;
    parentPath: string;
    parentIdPath: string;
    parentNamePath: string;
    geoFilePath: string;
    platformId: string;
    order: number;
    type: AreaCodeTypeCommonType;
    idPath: string;
    namePath: string;
    isLeaf: boolean;
    id: string;
    name: string;
};

/**
 * 修改行政区域信息——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 区域名
 * @params englishName {string} 英文名
 * @params coordinate {CoordinateCommonType} 区域坐标点 （必填）
 * @params areaCode {string} 邮编
 * @params geoFilePath {string} 对应 Geo 相关配置文件路径
 * @params type {AreaCodeTypeCommonType} 行政区域码类型
 */
export type UpdateDistrictsReqType = {
    id: string;
    'X-version'?: string;
    name?: string;
    englishName?: string;
    coordinate: CoordinateCommonType;
    areaCode?: string;
    geoFilePath?: string;
    type?: AreaCodeTypeCommonType;
};

/**
 * 删除行政区域——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteDistrictsReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 根据Id集合或者行政区域码集合获取行政区域列表——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} id/areaCode 集合
 */
export type GetDistrictsByIdsReqType = {
    'X-version'?: string;
    ids?: any[];
};

/**
 * 根据Id集合或者行政区域码集合获取行政区域列表——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {DistrictOutCommonType[]} 记录
 */
export type GetDistrictsByIdsResType = {
    totalCount: number;
    records: DistrictOutCommonType[];
};

/**
 * 导入行政区域数据接口——请求参数类型定义
 * @headers X-version {string}
 * @params isReload {boolean} 是否导入后重新加载缓存，默认加载
 * @params districtItems {DistrictItemCommonType[]} 导入行政区域数据
 */
export type ImportDistrictsReqType = {
    'X-version'?: string;
    isReload?: boolean;
    districtItems?: DistrictItemCommonType[];
};

/**
 * 根据父级行政区域 Id 获取子行政区域——请求参数类型定义
 * @params parentId {string} 父级行政区域 （必填）
 * @headers X-version {string}
 */
export type GetSubDistrictsReqType = {
    parentId: string;
    'X-version'?: string;
};

/**
 * 根据父级行政区域 Id 获取子行政区域——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {DistrictOutCommonType[]} 记录
 */
export type GetSubDistrictsResType = {
    totalCount: number;
    records: DistrictOutCommonType[];
};

/**
 * 创建子行政区域——请求参数类型定义
 * @params parentId {string} parentId （必填）
 * @headers X-version {string}
 * @params name {string} 区域名
 * @params englishName {string} 英文名
 * @params coordinate {CoordinateCommonType} 区域坐标点 （必填）
 * @params areaCode {string} 邮编
 * @params geoFilePath {string} 对应 Geo 相关配置文件路径
 * @params type {AreaCodeTypeCommonType} 行政区域码类型
 */
export type AddSubDistrictsReqType = {
    parentId: string;
    'X-version'?: string;
    name?: string;
    englishName?: string;
    coordinate: CoordinateCommonType;
    areaCode?: string;
    geoFilePath?: string;
    type?: AreaCodeTypeCommonType;
};

/**
 * 创建子行政区域——响应参数类型定义
 * @params resourceId {string} 资源Id
 * @params englishName {string} 英文名
 * @params coordinate {CoordinateCommonType} 区域坐标点
 * @params areaCode {string} 邮编
 * @params parentId {string} 父级行政区域 Id
 * @params parentPath {string} 树结构父Id路径（不包含自身）
 * @params parentIdPath {string} 树结构父Id路径（包含自身）
 * @params parentNamePath {string} 树结构父名称路径（包含自身）
 * @params geoFilePath {string} 对应 Geo 相关配置文件路径
 * @params platformId {string} 资源所属平台Id
 * @params order {number} 排序
 * @params type {AreaCodeTypeCommonType} 行政区域码类型
 * @params idPath {string} Id 路径
 * @params namePath {string} 名字路径
 * @params isLeaf {boolean} 是否为叶子节点
 * @params id {string} ID
 * @params name {string} 名称
 */
export type AddSubDistrictsResType = {
    resourceId: string;
    englishName: string;
    coordinate: CoordinateCommonType;
    areaCode: string;
    parentId: string;
    parentPath: string;
    parentIdPath: string;
    parentNamePath: string;
    geoFilePath: string;
    platformId: string;
    order: number;
    type: AreaCodeTypeCommonType;
    idPath: string;
    namePath: string;
    isLeaf: boolean;
    id: string;
    name: string;
};

/**
 * 根据行政区域 Id 获取所有父级区域——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetParentDistrictsByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 根据行政区域 Id 获取所有父级区域——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {DistrictOutCommonType[]} 记录
 */
export type GetParentDistrictsByIdResType = {
    totalCount: number;
    records: DistrictOutCommonType[];
};

/**
 * 获取指定行政区域树——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetDistrictTreeByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取指定行政区域树——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {DistrictOutCommonType[]} 记录
 */
export type GetDistrictTreeByIdResType = {
    totalCount: number;
    records: DistrictOutCommonType[];
};

/**
 * 根据名字集合获取行政区域列表——请求参数类型定义
 * @params Names {any[]} 行政区域名集合
 * @headers X-version {string}
 */
export type GetDistrictsByNamesReqType = {
    Names?: any[];
    'X-version'?: string;
};

/**
 * 根据名字集合获取行政区域列表——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {DistrictOutCommonType[]} 记录
 */
export type GetDistrictsByNamesResType = {
    totalCount: number;
    records: DistrictOutCommonType[];
};

/**
 * 聚合子行政区域为父级行政区域——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} id/areaCode 集合 （必填）
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, int.MaxValue]
 */
export type MergeDistrictsReqType = {
    'X-version'?: string;
    ids: any[];
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 聚合子行政区域为父级行政区域——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {DistrictTreeNodeOutCommonType[]} 记录
 */
export type MergeDistrictsResType = {
    totalCount: number;
    records: DistrictTreeNodeOutCommonType[];
};

/**
 * 查询子行政区域(父级id不传默认查询自身权限下根节点)——请求参数类型定义
 * @headers X-version {string}
 * @params parentId {string} 父级ID
 * @params selectedIds {any[]} 选择的行政区划id
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, int.MaxValue]
 */
export type GetChildDistrictsReqType = {
    'X-version'?: string;
    parentId?: string;
    selectedIds?: any[];
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 查询子行政区域(父级id不传默认查询自身权限下根节点)——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {DistrictUseStatusOutCommonType[]} 记录
 */
export type GetChildDistrictsResType = {
    totalCount: number;
    records: DistrictUseStatusOutCommonType[];
};

/**
 * 批量查询行政区域下级接口（包含子孙级行政区域）——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} id/areaCode 集合 （必填）
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, int.MaxValue]
 */
export type SearchSubDistrictsReqType = {
    'X-version'?: string;
    ids: any[];
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 批量查询行政区域下级接口（包含子孙级行政区域）——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {DistrictOutCommonType[]} 记录
 */
export type SearchSubDistrictsResType = {
    totalCount: number;
    records: DistrictOutCommonType[];
};

/**
 * 根据条件分析获取对应行政区域——请求参数类型定义
 * @headers X-version {string}
 * @params address {string} 地址
 * @params coordinate {DistrictCoordinateInCommonType} 坐标点
 * @params useDefaultUserDistrict {boolean} 是否使用默认的用户行政区域（用户区域权限内的最高层级权限）
 * @params isVerifyPermission {boolean} 是否开启用户行政区域权限控制
 */
export type GetDistrictsByAnalysisReqType = {
    'X-version'?: string;
    address?: string;
    coordinate?: DistrictCoordinateInCommonType;
    useDefaultUserDistrict?: boolean;
    isVerifyPermission?: boolean;
};

/**
 * 根据条件分析获取对应行政区域——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {DistrictOutCommonType[]} 记录
 */
export type GetDistrictsByAnalysisResType = {
    totalCount: number;
    records: DistrictOutCommonType[];
};

/**
 * 通过经纬度分析地址——请求参数类型定义
 * @params coordinate.Longitude {number} 经度
 * @params coordinate.Latitude {number} 纬度
 * @headers X-version {string}
 */
export type AnalysisAddressReqType = {
    coordinate?: CoordinateCommonType;
    'X-version'?: string;
};

/**
 * 通过经纬度分析地址——响应参数类型定义
 * @params districts {DistrictOutCommonType[]} 所属行政区域列表
 * @params address {string} 地址信息
 */
export type AnalysisAddressResType = {
    districts: DistrictOutCommonType[];
    address: string;
};

/**
 * 导出行政区域——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} Id集合
 * @params type {AreaCodeTypeCommonType} 行政区域码类型,1:通用,2:自定义,3:设施
 */
export type ExportDistrictsReqType = {
    'X-version'?: string;
    ids?: any[];
    type?: AreaCodeTypeCommonType;
};

/**
 * 导出行政区域——响应参数类型定义
 * @params districts {ExportDistrictOutCommonType[]} 行政区域集合
 */
export type ExportDistrictsResType = {
    districts: ExportDistrictOutCommonType[];
};

/**
 * 获取设施图层——请求参数类型定义
 * @headers X-version {string}
 */
export type GetFacilityLayersReqType = {
    'X-version'?: string;
};

/**
 * 获取设施图层——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayerEntityOutCommonType[]} 记录
 */
export type GetFacilityLayersResType = {
    totalCount: number;
    records: LayerEntityOutCommonType[];
};

/**
 * 导入设施图层——请求参数类型定义
 * @headers X-version {string}
 * @params isReload {boolean} 是否导入后重新加载缓存，默认加载
 * @params groupItems {GroupItemCommonType[]} 图层组
 */
export type ImportFacilityLayersReqType = {
    'X-version'?: string;
    isReload?: boolean;
    groupItems?: GroupItemCommonType[];
};

/**
 * 导入设施——请求参数类型定义
 * @headers X-version {string}
 * @params isReload {boolean} 是否导入后重新加载缓存，默认加载
 * @params facilityItems {FacilityItemCommonType[]} 设施导入实体
 */
export type ImportFacilitiesReqType = {
    'X-version'?: string;
    isReload?: boolean;
    facilityItems?: FacilityItemCommonType[];
};

/**
 * 导入物资——请求参数类型定义
 * @headers X-version {string}
 * @params goodItems {GoodItemCommonType[]}
 */
export type ImportFacilityGoodsReqType = {
    'X-version'?: string;
    goodItems?: GoodItemCommonType[];
};

/**
 * 获取详情——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetFacilitiesByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取详情——响应参数类型定义
 * @params medias {any[]} 媒体信息(关联的多媒体信息,如视频、图片等)
 * @params goodMainTypes {GoodTypeInfoCommonType[]} 物资主类型
 * @params labelDetail {LabelEntityCommonType[]} 标签详情
 * @params layerDetail {LayerEntityOutCommonType} 图层信息
 * @params resourceId {string} 资源Id
 * @params layerId {string} 图层Id
 * @params description {string} 详情
 * @params owner {string} 设施负责人
 * @params number {string} 联系电话
 * @params geoFilePath {string} 重点区域的资源文件路径
 * @params address {string} 设施地址
 * @params extension {any} 扩展项
 * @params areaCode {string} 行政区域代码
 * @params platformId {string} 资源所属平台Id
 * @params createTime {string} 创建时间
 * @params order {number} 排序号
 * @params state {number} 状态
 * @params height {number} 设施高度
 * @params geometryData {GeometryDataOutCommonType} 线面数据
 * @params facilityState {string} 设施状态
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params id {string} ID
 * @params name {string} 名称
 */
export type GetFacilitiesByIdResType = {
    medias: any[];
    goodMainTypes: GoodTypeInfoCommonType[];
    labelDetail: LabelEntityCommonType[];
    layerDetail: LayerEntityOutCommonType;
    resourceId: string;
    layerId: string;
    description: string;
    owner: string;
    number: string;
    geoFilePath: string;
    address: string;
    extension: any;
    areaCode: string;
    platformId: string;
    createTime: string;
    order: number;
    state: number;
    height: number;
    geometryData: GeometryDataOutCommonType;
    facilityState: string;
    longitude: number;
    latitude: number;
    id: string;
    name: string;
};

/**
 * 获取设施关联的物资信息(一般为仓库)——请求参数类型定义
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字
 * @params GoodsSubType {string} 物资类型
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, int.MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetFacilityGoodsReqType = {
    id: string;
    Keyword?: string;
    GoodsSubType?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取设施关联的物资信息(一般为仓库)——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {GoodOutCommonType[]} 记录
 */
export type GetFacilityGoodsResType = {
    totalCount: number;
    records: GoodOutCommonType[];
};

/**
 * 区域查询资源——请求参数类型定义
 * @headers X-version {string}
 * @params upLeft {CoordinateCommonType} 左上角坐标 （必填）
 * @params bottomRight {CoordinateCommonType} 右下角坐标 （必填）
 * @params layerIds {any[]} 图层Id列表 （必填）
 * @params points {CoordinateCommonType[]} 多边形经纬度
 * @params setFilterType {SetFilterTypeCommonType} 过滤方式0:差集1:交集
 * @params keyword {string} 关键字
 * @params isDesc {boolean} 是否排序，默认为true-降序
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, int.MaxValue]
 */
export type GetFacilityAreaQueryReqType = {
    'X-version'?: string;
    upLeft: CoordinateCommonType;
    bottomRight: CoordinateCommonType;
    layerIds: any[];
    points?: CoordinateCommonType[];
    setFilterType?: SetFilterTypeCommonType;
    keyword?: string;
    isDesc?: boolean;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 区域查询资源——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {FacilityOutCommonType[]} 记录
 */
export type GetFacilityAreaQueryResType = {
    totalCount: number;
    records: FacilityOutCommonType[];
};

/**
 * 圆形区域设施查询——请求参数类型定义
 * @headers X-version {string}
 * @params layerIds {any[]} 图层Id列表 （必填）
 * @params keyword {string} 关键字
 * @params center {CoordinateCommonType} 圆心 （必填）
 * @params radius {number} 半径（单位米） （必填）
 * @params sortRule {SortRuleCommonType} 是否按距离升序排序，默认升序
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, int.MaxValue]
 */
export type QueryFacilitiesByCircleAreaReqType = {
    'X-version'?: string;
    layerIds: any[];
    keyword?: string;
    center: CoordinateCommonType;
    radius: number;
    sortRule?: SortRuleCommonType;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 圆形区域设施查询——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {FacilityWithDistanceCommonType[]} 记录
 */
export type QueryFacilitiesByCircleAreaResType = {
    totalCount: number;
    records: FacilityWithDistanceCommonType[];
};

/**
 * 搜索资源——请求参数类型定义
 * @headers X-version {string}
 * @params keyword {string} 关键字 （必填）
 * @params maxCount {number} 最大返回数据的数量
 * @params layerIds {any[]} 图层Id列表 （必填）
 * @params isDesc {boolean} 是否排序，默认为true-降序
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, int.MaxValue]
 */
export type SearchFacilitiesReqType = {
    'X-version'?: string;
    keyword: string;
    maxCount?: number;
    layerIds: any[];
    isDesc?: boolean;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 搜索资源——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {FacilityOutCommonType[]} 记录
 */
export type SearchFacilitiesResType = {
    totalCount: number;
    records: FacilityOutCommonType[];
};

/**
 * 生成静态资源——请求参数类型定义
 * @headers X-version {string}
 */
export type GenerateFacilitiesReqType = {
    'X-version'?: string;
};

/**
 * 获取静态资源文件名——请求参数类型定义
 * @headers X-version {string}
 */
export type GetGenerateFilesNameReqType = {
    'X-version'?: string;
};

/**
 * 获取静态资源文件名——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetGenerateFilesNameResType = {
    totalCount: number;
    records: any[];
};

/**
 * 导入设施监控组——请求参数类型定义
 * @headers X-version {string}
 * @params facilityCameraGroupItems {FacilityCameraGroupItemCommonType[]} 设施关联监控组
 */
export type ImportFacilityCameraGroupsReqType = {
    'X-version'?: string;
    facilityCameraGroupItems?: FacilityCameraGroupItemCommonType[];
};

/**
 * 获取设施监控组——请求参数类型定义
 * @params id {string} 设施 Id （必填）
 * @headers X-version {string}
 */
export type GetFacilityCameraGroupsReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取设施监控组——响应参数类型定义
 * @params facilityId {string} 设施 Id
 * @params cameraGroupIds {any[]} 监控组 Id
 * @params platformId {string} 资源所属平台Id
 * @params resourceId {string} 标识该资源为非本平台资源
 */
export type GetFacilityCameraGroupsResType = {
    facilityId: string;
    cameraGroupIds: any[];
    platformId: string;
    resourceId: string;
};

/**
 * 物资搜索（用于前端模糊搜索）——请求参数类型定义
 * @headers X-version {string}
 * @params upLeft {CoordinateCommonType} 左上角坐标 （必填）
 * @params bottomRight {CoordinateCommonType} 右下角坐标 （必填）
 * @params keyword {string} 模糊查询关键字(搜索物资名称)
 * @params goodsSubType {string} 物资类型
 * @params maxCount {number} 最大返回值GoodsDataSearchLocations
 */
export type SearchFacilityGoodsReqType = {
    'X-version'?: string;
    upLeft: CoordinateCommonType;
    bottomRight: CoordinateCommonType;
    keyword?: string;
    goodsSubType?: string;
    maxCount?: number;
};

/**
 * 物资搜索（用于前端模糊搜索）——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {GoodDetailOutCommonType[]} 记录
 */
export type SearchFacilityGoodsResType = {
    totalCount: number;
    records: GoodDetailOutCommonType[];
};

/**
 * 多条件查询设施信息——请求参数类型定义
 * @headers X-version {string}
 * @params keyWord {string} 关键字
 * @params layerIds {any[]} 图层Id
 * @params layerName {string} 图层名,可模糊匹配
 * @params areaCodes {any[]} 行政区域代码
 * @params prefixAreaCodes {any[]} 行政区域前缀代码
 * @params querySubordinateFacility {boolean} 是否查询下级行政区域设施 （必填）
 * @params resourceIds {any[]} 标签Id
 * @params isDesc {boolean} 是否排序，默认为true-降序
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, int.MaxValue]
 */
export type QueryFacilitiesReqType = {
    'X-version'?: string;
    keyWord?: string;
    layerIds?: any[];
    layerName?: string;
    areaCodes?: any[];
    prefixAreaCodes?: any[];
    querySubordinateFacility: boolean;
    resourceIds?: any[];
    isDesc?: boolean;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 多条件查询设施信息——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {FacilityOutCommonType[]} 记录
 */
export type QueryFacilitiesResType = {
    totalCount: number;
    records: FacilityOutCommonType[];
};

/**
 * 更改设施标签——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params resourceIds {any[]} 标签ResourceId
 */
export type EditFacilityLabelsReqType = {
    id: string;
    'X-version'?: string;
    resourceIds?: any[];
};

/**
 * 更新设施状态(能源设备状态)——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params state {FacilityStateCommonType} 设施状态,0-故障，1-正常 （必填）
 */
export type UpdateFacilityStatusReqType = {
    id: string;
    'X-version'?: string;
    state: FacilityStateCommonType;
};

/**
 * 根据Id或resourceId批量删除设施——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} Id 集合 （必填）
 */
export type MultDeleteFacilitiesReqType = {
    'X-version'?: string;
    ids: any[];
};

/**
 * 根据设施id或resourceId获取设施模型场景——请求参数类型定义
 * @params id {string} id （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, int.MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetGdsScenesReqType = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 根据设施id或resourceId获取设施模型场景——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {SceneOutCommonType[]} 记录
 */
export type GetGdsScenesResType = {
    totalCount: number;
    records: SceneOutCommonType[];
};

/**
 * 根据设施id集合批量获取设施信息——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} 图层Id集合 （必填）
 */
export type GetFacilitiesByIdsReqType = {
    'X-version'?: string;
    ids: any[];
};

/**
 * 根据设施id集合批量获取设施信息——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {FacilityDetailOutCommonType[]} 记录
 */
export type GetFacilitiesByIdsResType = {
    totalCount: number;
    records: FacilityDetailOutCommonType[];
};

/**
 * 根据 productId 查询设施集合——请求参数类型定义
 * @params productId {string} productId （必填）
 * @params IsDesc {boolean} 是否按创建时间降序（默认不传不排序）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, int.MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetFacilitiesByProductIdReqType = {
    productId: string;
    IsDesc?: boolean;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 根据 productId 查询设施集合——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {FacilityOutCommonType[]} 记录
 */
export type GetFacilitiesByProductIdResType = {
    totalCount: number;
    records: FacilityOutCommonType[];
};

/**
 * 根据id查询地图配置——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetGeoConfigByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 根据id查询地图配置——响应参数类型定义
 * @params id {string} 图层Id
 * @params productId {string} 产品类型
 * @params mapType {MapTypeCommonType} Map类型
 * @params mapSourceType {string} 地图类型
 * @params defaultMapServerType {string} 初始地图服务类型
 * @params mapServerTypes {any[]} 产品选中的地图服务类型集合
 * @params defaultLayerEffectConfig {string} 初始图层效果配置
 * @params layerEffectConfigs {any[]} 产品选中的图层效果配置集合
 * @params clusterStyle {string} 聚合样式
 * @params minPitch {number} 最小仰俯角
 * @params maxPitch {number} 最大仰俯角
 * @params center {AddressCoordinateCommonType} 默认中心点
 * @params isEnableMapCenter {boolean} 是否开启自定义中心点
 * @params viewBox {MapVisualScopeCommonType} 可视范围
 * @params useFakeMapSdk {boolean} 是否使用SDK
 * @params lowViewPoint {ViewPointCommonType} 近景
 * @params middleViewPoint {ViewPointCommonType} 中景
 * @params highViewPoint {ViewPointCommonType} 远景
 * @params maxiMinZoom {MapZoomCommonType} 地图最大最小层级
 * @params mapMaskEffect {MapMaskEffectCommonType} 地图遮罩效果
 * @params areaBoundaryEffectConfig {AreaBoundaryEffectConfigCommonType} 行政区划边界效果配置
 */
export type GetGeoConfigByIdResType = {
    id: string;
    productId: string;
    mapType: MapTypeCommonType;
    mapSourceType: string;
    defaultMapServerType: string;
    mapServerTypes: any[];
    defaultLayerEffectConfig: string;
    layerEffectConfigs: any[];
    clusterStyle: string;
    minPitch: number;
    maxPitch: number;
    center: AddressCoordinateCommonType;
    isEnableMapCenter: boolean;
    viewBox: MapVisualScopeCommonType;
    useFakeMapSdk: boolean;
    lowViewPoint: ViewPointCommonType;
    middleViewPoint: ViewPointCommonType;
    highViewPoint: ViewPointCommonType;
    maxiMinZoom: MapZoomCommonType;
    mapMaskEffect: MapMaskEffectCommonType;
    areaBoundaryEffectConfig: AreaBoundaryEffectConfigCommonType;
};

/**
 * 修改地图配置——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params productId {string} 产品Id
 * @params mapType {MapTypeCommonType} Map类型 0-电子，1-卫星，2-科幻
 * @params mapSourceType {string} 地图类型
 * @params defaultMapServerType {string} 初始地图服务类型
 * @params mapServerTypes {any[]} 产品选中的地图服务类型集合
 * @params defaultLayerEffectConfig {string} 初始图层效果配置
 * @params layerEffectConfigs {any[]} 产品选中的图层效果配置集合
 * @params clusterStyle {string} 聚合样式
 * @params minPitch {number} 最小仰俯角
 * @params maxPitch {number} 最大仰俯角
 * @params center {AddressCoordinateCommonType} 默认中心点
 * @params isEnableMapCenter {boolean} 是否开启自定义中心点
 * @params viewBox {MapVisualScopeCommonType} 可视范围
 * @params useFakeMapSdk {boolean} 是否使用SDK
 * @params lowViewPoint {ViewPointCommonType} 近景
 * @params middleViewPoint {ViewPointCommonType} 中景
 * @params highViewPoint {ViewPointCommonType} 远景
 * @params mapMaskEffect {MapMaskEffectCommonType} 地图遮罩效果
 * @params areaBoundaryEffectConfig {AreaBoundaryEffectConfigCommonType} 行政区划边界效果配置
 */
export type UpdateGeoConfigByIdReqType = {
    id: string;
    'X-version'?: string;
    productId?: string;
    mapType?: MapTypeCommonType;
    mapSourceType?: string;
    defaultMapServerType?: string;
    mapServerTypes?: any[];
    defaultLayerEffectConfig?: string;
    layerEffectConfigs?: any[];
    clusterStyle?: string;
    minPitch?: number;
    maxPitch?: number;
    center?: AddressCoordinateCommonType;
    isEnableMapCenter?: boolean;
    viewBox?: MapVisualScopeCommonType;
    useFakeMapSdk?: boolean;
    lowViewPoint?: ViewPointCommonType;
    middleViewPoint?: ViewPointCommonType;
    highViewPoint?: ViewPointCommonType;
    mapMaskEffect?: MapMaskEffectCommonType;
    areaBoundaryEffectConfig?: AreaBoundaryEffectConfigCommonType;
};

/**
 * 条件查询地图配置——请求参数类型定义
 * @params productId {string} productId （必填）
 * @headers X-version {string}
 */
export type GetGeoConfigsReqType = {
    productId: string;
    'X-version'?: string;
};

/**
 * 条件查询地图配置——响应参数类型定义
 * @params id {string} 图层Id
 * @params productId {string} 产品类型
 * @params mapType {MapTypeCommonType} Map类型
 * @params mapSourceType {string} 地图类型
 * @params defaultMapServerType {string} 初始地图服务类型
 * @params mapServerTypes {any[]} 产品选中的地图服务类型集合
 * @params defaultLayerEffectConfig {string} 初始图层效果配置
 * @params layerEffectConfigs {any[]} 产品选中的图层效果配置集合
 * @params clusterStyle {string} 聚合样式
 * @params minPitch {number} 最小仰俯角
 * @params maxPitch {number} 最大仰俯角
 * @params center {AddressCoordinateCommonType} 默认中心点
 * @params isEnableMapCenter {boolean} 是否开启自定义中心点
 * @params viewBox {MapVisualScopeCommonType} 可视范围
 * @params useFakeMapSdk {boolean} 是否使用SDK
 * @params lowViewPoint {ViewPointCommonType} 近景
 * @params middleViewPoint {ViewPointCommonType} 中景
 * @params highViewPoint {ViewPointCommonType} 远景
 * @params maxiMinZoom {MapZoomCommonType} 地图最大最小层级
 * @params mapMaskEffect {MapMaskEffectCommonType} 地图遮罩效果
 * @params areaBoundaryEffectConfig {AreaBoundaryEffectConfigCommonType} 行政区划边界效果配置
 */
export type GetGeoConfigsResType = {
    id: string;
    productId: string;
    mapType: MapTypeCommonType;
    mapSourceType: string;
    defaultMapServerType: string;
    mapServerTypes: any[];
    defaultLayerEffectConfig: string;
    layerEffectConfigs: any[];
    clusterStyle: string;
    minPitch: number;
    maxPitch: number;
    center: AddressCoordinateCommonType;
    isEnableMapCenter: boolean;
    viewBox: MapVisualScopeCommonType;
    useFakeMapSdk: boolean;
    lowViewPoint: ViewPointCommonType;
    middleViewPoint: ViewPointCommonType;
    highViewPoint: ViewPointCommonType;
    maxiMinZoom: MapZoomCommonType;
    mapMaskEffect: MapMaskEffectCommonType;
    areaBoundaryEffectConfig: AreaBoundaryEffectConfigCommonType;
};

/**
 * 添加地图配置——请求参数类型定义
 * @headers X-version {string}
 * @params productId {string} 产品Id
 * @params mapType {MapTypeCommonType} Map类型 0-电子，1-卫星，2-科幻
 * @params mapSourceType {string} 地图类型
 * @params defaultMapServerType {string} 初始地图服务类型
 * @params mapServerTypes {any[]} 产品选中的地图服务类型集合
 * @params defaultLayerEffectConfig {string} 初始图层效果配置
 * @params layerEffectConfigs {any[]} 产品选中的图层效果配置集合
 * @params clusterStyle {string} 聚合样式
 * @params minPitch {number} 最小仰俯角
 * @params maxPitch {number} 最大仰俯角
 * @params center {AddressCoordinateCommonType} 默认中心点
 * @params isEnableMapCenter {boolean} 是否开启自定义中心点
 * @params viewBox {MapVisualScopeCommonType} 可视范围
 * @params useFakeMapSdk {boolean} 是否使用SDK
 * @params lowViewPoint {ViewPointCommonType} 近景
 * @params middleViewPoint {ViewPointCommonType} 中景
 * @params highViewPoint {ViewPointCommonType} 远景
 * @params mapMaskEffect {MapMaskEffectCommonType} 地图遮罩效果
 * @params areaBoundaryEffectConfig {AreaBoundaryEffectConfigCommonType} 行政区划边界效果配置
 */
export type AddGeoConfigsReqType = {
    'X-version'?: string;
    productId?: string;
    mapType?: MapTypeCommonType;
    mapSourceType?: string;
    defaultMapServerType?: string;
    mapServerTypes?: any[];
    defaultLayerEffectConfig?: string;
    layerEffectConfigs?: any[];
    clusterStyle?: string;
    minPitch?: number;
    maxPitch?: number;
    center?: AddressCoordinateCommonType;
    isEnableMapCenter?: boolean;
    viewBox?: MapVisualScopeCommonType;
    useFakeMapSdk?: boolean;
    lowViewPoint?: ViewPointCommonType;
    middleViewPoint?: ViewPointCommonType;
    highViewPoint?: ViewPointCommonType;
    mapMaskEffect?: MapMaskEffectCommonType;
    areaBoundaryEffectConfig?: AreaBoundaryEffectConfigCommonType;
};

/**
 * 添加地图配置——响应参数类型定义
 * @params id {string} 图层Id
 * @params productId {string} 产品类型
 * @params mapType {MapTypeCommonType} Map类型
 * @params mapSourceType {string} 地图类型
 * @params defaultMapServerType {string} 初始地图服务类型
 * @params mapServerTypes {any[]} 产品选中的地图服务类型集合
 * @params defaultLayerEffectConfig {string} 初始图层效果配置
 * @params layerEffectConfigs {any[]} 产品选中的图层效果配置集合
 * @params clusterStyle {string} 聚合样式
 * @params minPitch {number} 最小仰俯角
 * @params maxPitch {number} 最大仰俯角
 * @params center {AddressCoordinateCommonType} 默认中心点
 * @params isEnableMapCenter {boolean} 是否开启自定义中心点
 * @params viewBox {MapVisualScopeCommonType} 可视范围
 * @params useFakeMapSdk {boolean} 是否使用SDK
 * @params lowViewPoint {ViewPointCommonType} 近景
 * @params middleViewPoint {ViewPointCommonType} 中景
 * @params highViewPoint {ViewPointCommonType} 远景
 * @params maxiMinZoom {MapZoomCommonType} 地图最大最小层级
 * @params mapMaskEffect {MapMaskEffectCommonType} 地图遮罩效果
 * @params areaBoundaryEffectConfig {AreaBoundaryEffectConfigCommonType} 行政区划边界效果配置
 */
export type AddGeoConfigsResType = {
    id: string;
    productId: string;
    mapType: MapTypeCommonType;
    mapSourceType: string;
    defaultMapServerType: string;
    mapServerTypes: any[];
    defaultLayerEffectConfig: string;
    layerEffectConfigs: any[];
    clusterStyle: string;
    minPitch: number;
    maxPitch: number;
    center: AddressCoordinateCommonType;
    isEnableMapCenter: boolean;
    viewBox: MapVisualScopeCommonType;
    useFakeMapSdk: boolean;
    lowViewPoint: ViewPointCommonType;
    middleViewPoint: ViewPointCommonType;
    highViewPoint: ViewPointCommonType;
    maxiMinZoom: MapZoomCommonType;
    mapMaskEffect: MapMaskEffectCommonType;
    areaBoundaryEffectConfig: AreaBoundaryEffectConfigCommonType;
};

/**
 * 根据产品Id获取地图默认配置（基础配置、图层配置、效果配置）——请求参数类型定义
 * @params productId {string} productId （必填）
 * @headers X-version {string}
 */
export type GetMapConfigByProductIdReqType = {
    productId: string;
    'X-version'?: string;
};

/**
 * 根据产品Id获取地图默认配置（基础配置、图层配置、效果配置）——响应参数类型定义
 * @params geoConfig {GeoConfigOutCommonType} 地图基础配置
 * @params geoEffectConfigs {GeoEffectConfigOutCommonType[]} 地图效果配置
 * @params layerConfigs {LayerConfigOutCommonType[]} 地图图层配置
 */
export type GetMapConfigByProductIdResType = {
    geoConfig: GeoConfigOutCommonType;
    geoEffectConfigs: GeoEffectConfigOutCommonType[];
    layerConfigs: LayerConfigOutCommonType[];
};

/**
 * 根据条件获取地图效果配置列表——请求参数类型定义
 * @params productId {string} 产品ID
 * @params mapType {number} 地图配置,可选;0-电子、1-卫星、2-科幻
 * @headers X-version {string}
 */
export type GetGeoEffectConfigsReqType = {
    productId?: string;
    mapType?: number;
    'X-version'?: string;
};

/**
 * 创建地图效果配置——请求参数类型定义
 * @headers X-version {string}
 * @params productId {string} 产品Id （必填）
 * @params mapType {MapTypeCommonType} 地图类型0-电子 1-卫星 2-科幻 （必填）
 * @params isShowEffect {boolean} 是否展示效果
 * @params antiAlias {boolean} 抗锯齿
 * @params needBloom {boolean} 自发光
 * @params lowViewPoint {ViewPointCommonType} 近景
 * @params middleViewPoint {ViewPointCommonType} 中景
 * @params highViewPoint {ViewPointCommonType} 远景
 * @params lowViewPointEffect {MapEffectEntityCommonType} 近景地图效果
 * @params middleViewPointEffect {MapEffectEntityCommonType} 中景地图效果
 * @params highViewPointEffect {MapEffectEntityCommonType} 远景地图效果
 */
export type AddGeoEffectConfigsReqType = {
    'X-version'?: string;
    productId: string;
    mapType: MapTypeCommonType;
    isShowEffect?: boolean;
    antiAlias?: boolean;
    needBloom?: boolean;
    lowViewPoint?: ViewPointCommonType;
    middleViewPoint?: ViewPointCommonType;
    highViewPoint?: ViewPointCommonType;
    lowViewPointEffect?: MapEffectEntityCommonType;
    middleViewPointEffect?: MapEffectEntityCommonType;
    highViewPointEffect?: MapEffectEntityCommonType;
};

/**
 * 修改地图效果配置——请求参数类型定义
 * @headers X-version {string}
 * @params productId {string} 产品Id （必填）
 * @params mapType {MapTypeCommonType} 地图类型0-电子 1-卫星 2-科幻 （必填）
 * @params isShowEffect {boolean} 是否展示效果
 * @params antiAlias {boolean} 抗锯齿
 * @params needBloom {boolean} 自发光
 * @params lowViewPoint {ViewPointCommonType} 近景
 * @params middleViewPoint {ViewPointCommonType} 中景
 * @params highViewPoint {ViewPointCommonType} 远景
 * @params lowViewPointEffect {MapEffectEntityCommonType} 近景地图效果
 * @params middleViewPointEffect {MapEffectEntityCommonType} 中景地图效果
 * @params highViewPointEffect {MapEffectEntityCommonType} 远景地图效果
 */
export type EditGeoEffectConfigsReqType = {
    'X-version'?: string;
    productId: string;
    mapType: MapTypeCommonType;
    isShowEffect?: boolean;
    antiAlias?: boolean;
    needBloom?: boolean;
    lowViewPoint?: ViewPointCommonType;
    middleViewPoint?: ViewPointCommonType;
    highViewPoint?: ViewPointCommonType;
    lowViewPointEffect?: MapEffectEntityCommonType;
    middleViewPointEffect?: MapEffectEntityCommonType;
    highViewPointEffect?: MapEffectEntityCommonType;
};

/**
 * 添加地图图层配置——请求参数类型定义
 * @headers X-version {string}
 * @params productId {string} 产品Id
 * @params mapType {MapTypeCommonType} 地图类型 0-电子，1-卫星，2-科幻
 * @params name {string} 图层名称
 * @params path {string} 图层路径
 * @params layerIcon {IconInfoCommonType} 图层图标
 * @params layerIconBackground {IconInfoCommonType} 图标背景
 * @params pointIcon {IconInfoCommonType} 点位图标
 * @params clusterIcon {IconInfoCommonType} 聚合图标
 * @params isChecked {boolean} 是否勾选图层
 * @params isShow {boolean} 是否显示图层
 * @params isShowLabel {boolean} 是否显示点位标签
 * @params isShowAlert {boolean} 是否显示点位告警
 * @params zoom {LayerZoomCommonType} 图层Zoom
 * @params lowViewPointCluster {PointClusterCommonType} 近景聚合规则
 * @params middleViewPointCluster {PointClusterCommonType} 中景聚合规则
 * @params highViewPointCluster {PointClusterCommonType} 远景聚合规则
 * @params customViewPointCluster {PointClusterCommonType} 自定义视点聚合规则
 * @params layerType {string} 图层类型：点、线、面、区划、标牌、柱图
 * @params lineConfig {LineConfigCommonType} 线配置
 * @params polygonConfig {PolygonConfigCommonType} 面配置
 * @params areaConfig {AreaConfigCommonType} 区划配置
 * @params barConfig {BarConfigCommonType} 柱图配置
 * @params signageConfig {SignageConfigCommonType} 标牌配置
 */
export type AddGeoLayerConfigsReqType = {
    'X-version'?: string;
    productId?: string;
    mapType?: MapTypeCommonType;
    name?: string;
    path?: string;
    layerIcon?: IconInfoCommonType;
    layerIconBackground?: IconInfoCommonType;
    pointIcon?: IconInfoCommonType;
    clusterIcon?: IconInfoCommonType;
    isChecked?: boolean;
    isShow?: boolean;
    isShowLabel?: boolean;
    isShowAlert?: boolean;
    zoom?: LayerZoomCommonType;
    lowViewPointCluster?: PointClusterCommonType;
    middleViewPointCluster?: PointClusterCommonType;
    highViewPointCluster?: PointClusterCommonType;
    customViewPointCluster?: PointClusterCommonType;
    layerType?: string;
    lineConfig?: LineConfigCommonType;
    polygonConfig?: PolygonConfigCommonType;
    areaConfig?: AreaConfigCommonType;
    barConfig?: BarConfigCommonType;
    signageConfig?: SignageConfigCommonType;
};

/**
 * 添加地图图层配置——响应参数类型定义
 * @params id {string} 配置Id
 * @params productId {string} 产品Id
 * @params name {string} 图层名称
 * @params path {string} 图层路径
 * @params parentId {string} 父节点Id
 * @params group {string} Group
 * @params groupKey {string} groupKey
 * @params layerIcon {IconInfoCommonType} 图层图标
 * @params layerIconBackground {IconInfoCommonType} 图标背景
 * @params pointIcon {IconInfoCommonType} 点位图标
 * @params clusterIcon {IconInfoCommonType} 聚合图标
 * @params isChecked {boolean} 是否勾选图层
 * @params isShow {boolean} 是否显示图层
 * @params isShowLabel {boolean} 是否显示点位标签
 * @params isShowAlert {boolean} 是否显示点位告警
 * @params hasChildren {boolean} 是否有子节点
 * @params zoom {LayerZoomOutCommonType} 图层Zoom
 * @params lowViewPointCluster {PointClusterCommonType} 近景聚合规则
 * @params middleViewPointCluster {PointClusterCommonType} 中景聚合规则
 * @params highViewPointCluster {PointClusterCommonType} 远景聚合规则
 * @params customViewPointCluster {PointClusterCommonType} 自定义视点聚合规则
 * @params layerType {string} 图层类型：点、线、面、区划、标牌、柱图
 * @params lineConfig {LineConfigCommonType} 线配置
 * @params polygonConfig {PolygonConfigCommonType} 面配置
 * @params areaConfig {AreaConfigCommonType} 区划配置
 * @params barConfig {BarConfigCommonType} 柱图配置
 * @params signageConfig {SignageConfigCommonType} 标牌配置
 */
export type AddGeoLayerConfigsResType = {
    id: string;
    productId: string;
    name: string;
    path: string;
    parentId: string;
    group: string;
    groupKey: string;
    layerIcon: IconInfoCommonType;
    layerIconBackground: IconInfoCommonType;
    pointIcon: IconInfoCommonType;
    clusterIcon: IconInfoCommonType;
    isChecked: boolean;
    isShow: boolean;
    isShowLabel: boolean;
    isShowAlert: boolean;
    hasChildren: boolean;
    zoom: LayerZoomOutCommonType;
    lowViewPointCluster: PointClusterCommonType;
    middleViewPointCluster: PointClusterCommonType;
    highViewPointCluster: PointClusterCommonType;
    customViewPointCluster: PointClusterCommonType;
    layerType: string;
    lineConfig: LineConfigCommonType;
    polygonConfig: PolygonConfigCommonType;
    areaConfig: AreaConfigCommonType;
    barConfig: BarConfigCommonType;
    signageConfig: SignageConfigCommonType;
};

/**
 * 根据路径查询地图图层配置——请求参数类型定义
 * @params Path {string} 图层路径 （必填）
 * @params ProductId {string} 产品Id （必填）
 * @params MapType {number} 地图类型 0-电子，1-卫星，2-科幻
 * @headers X-version {string}
 */
export type GetGeoLayerConfigsReqType = {
    Path: string;
    ProductId: string;
    MapType?: number;
    'X-version'?: string;
};

/**
 * 更新地图图层配置——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params productId {string} 产品Id
 * @params mapType {MapTypeCommonType} 地图类型 0-电子，1-卫星，2-科幻
 * @params name {string} 图层名称
 * @params path {string} 图层路径
 * @params layerIcon {IconInfoCommonType} 图层图标
 * @params layerIconBackground {IconInfoCommonType} 图标背景
 * @params pointIcon {IconInfoCommonType} 点位图标
 * @params clusterIcon {IconInfoCommonType} 聚合图标
 * @params isChecked {boolean} 是否勾选图层
 * @params isShow {boolean} 是否显示图层
 * @params isShowLabel {boolean} 是否显示点位标签
 * @params isShowAlert {boolean} 是否显示点位告警
 * @params zoom {LayerZoomCommonType} 图层Zoom
 * @params lowViewPointCluster {PointClusterCommonType} 近景聚合规则
 * @params middleViewPointCluster {PointClusterCommonType} 中景聚合规则
 * @params highViewPointCluster {PointClusterCommonType} 远景聚合规则
 * @params customViewPointCluster {PointClusterCommonType} 自定义视点聚合规则
 * @params layerType {string} 图层类型：点、线、面、区划、标牌、柱图
 * @params lineConfig {LineConfigCommonType} 线配置
 * @params polygonConfig {PolygonConfigCommonType} 面配置
 * @params areaConfig {AreaConfigCommonType} 区划配置
 * @params barConfig {BarConfigCommonType} 柱图配置
 * @params signageConfig {SignageConfigCommonType} 标牌配置
 */
export type UpdateGeoLayerConfigsReqType = {
    id: string;
    'X-version'?: string;
    productId?: string;
    mapType?: MapTypeCommonType;
    name?: string;
    path?: string;
    layerIcon?: IconInfoCommonType;
    layerIconBackground?: IconInfoCommonType;
    pointIcon?: IconInfoCommonType;
    clusterIcon?: IconInfoCommonType;
    isChecked?: boolean;
    isShow?: boolean;
    isShowLabel?: boolean;
    isShowAlert?: boolean;
    zoom?: LayerZoomCommonType;
    lowViewPointCluster?: PointClusterCommonType;
    middleViewPointCluster?: PointClusterCommonType;
    highViewPointCluster?: PointClusterCommonType;
    customViewPointCluster?: PointClusterCommonType;
    layerType?: string;
    lineConfig?: LineConfigCommonType;
    polygonConfig?: PolygonConfigCommonType;
    areaConfig?: AreaConfigCommonType;
    barConfig?: BarConfigCommonType;
    signageConfig?: SignageConfigCommonType;
};

/**
 * 根据Id删除图层配置——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteLayerConfigReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 分页查询地图图层根节点配置——请求参数类型定义
 * @params ProductId {string} 产品id
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, int.MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetRootLayerConfigReqType = {
    ProductId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 分页查询地图图层根节点配置——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayerConfigOutCommonType[]} 记录
 */
export type GetRootLayerConfigResType = {
    totalCount: number;
    records: LayerConfigOutCommonType[];
};

/**
 * 分页查询地图图层子节点配置——请求参数类型定义
 * @params Path {string} 图层路径 （必填）
 * @params ProductId {string} 产品Id （必填）
 * @params MapType {number} 地图类型 0-电子，1-卫星，2-科幻
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, int.MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetGeoLayerChildrenConfigsReqType = {
    Path: string;
    ProductId: string;
    MapType?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 分页查询地图图层子节点配置——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayerConfigOutCommonType[]} 记录
 */
export type GetGeoLayerChildrenConfigsResType = {
    totalCount: number;
    records: LayerConfigOutCommonType[];
};

/**
 * 分页查询地图图层底层节点配置——请求参数类型定义
 * @params Path {string} 图层路径 （必填）
 * @params ProductId {string} 产品Id （必填）
 * @params MapType {number} 地图类型 0-电子，1-卫星，2-科幻
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, int.MaxValue] 默认：100
 * @params areaCodes {string} 行政区域码
 * @headers X-version {string}
 */
export type GetGeoLayerFloorsConfigsReqType = {
    Path: string;
    ProductId: string;
    MapType?: number;
    page?: number;
    per_page?: number;
    areaCodes?: string;
    'X-version'?: string;
};

/**
 * 分页查询地图图层底层节点配置——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayerStatisticalConfigOutCommonType[]} 记录
 */
export type GetGeoLayerFloorsConfigsResType = {
    totalCount: number;
    records: LayerStatisticalConfigOutCommonType[];
};

/**
 * 导入地图图层配置——请求参数类型定义
 * @headers X-version {string}
 * @params layerConfigItems {LayerConfigItemCommonType[]} 图层配置集合
 */
export type ImportLayerConfigReqType = {
    'X-version'?: string;
    layerConfigItems?: LayerConfigItemCommonType[];
};

/**
 * 导入地图图层配置——响应参数类型定义
 * @params hasError {boolean} 是否有错误
 * @params errorMessage {string} 错误信息
 */
export type ImportLayerConfigResType = {
    hasError: boolean;
    errorMessage: string;
};

/**
 * 覆盖子图层配置——请求参数类型定义
 * @headers X-version {string}
 * @params path {string} 图层配置路径 （必填）
 * @params productId {string} 产品Id （必填）
 */
export type CoverChildrenLayerConfigsReqType = {
    'X-version'?: string;
    path: string;
    productId: string;
};

/**
 * 根据 Id 获取物资——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetGoodsByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 根据 Id 获取物资——响应参数类型定义
 * @params facility {FacilityInfoCommonType} 所在仓库
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
 * @params areaCode {string} 区域码代码
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params id {string} ID
 * @params name {string} 名称
 */
export type GetGoodsByIdResType = {
    facility: FacilityInfoCommonType;
    resourceId: string;
    description: string;
    organization: string;
    owner: string;
    number: string;
    amount: number;
    unit: string;
    subType: string;
    mainType: string;
    entryTime: string;
    platformId: string;
    areaCode: string;
    longitude: number;
    latitude: number;
    id: string;
    name: string;
};

/**
 * 根据物资类型查询物资名称——请求参数类型定义
 * @params SubType {string} 物资子类型
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, int.MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetNameByTypeReqType = {
    SubType?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 根据物资类型查询物资名称——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {GoodTypeInfoCommonType[]} 记录
 */
export type GetNameByTypeResType = {
    totalCount: number;
    records: GoodTypeInfoCommonType[];
};

/**
 * 模糊查找设施物资——请求参数类型定义
 * @headers X-version {string}
 * @params locations {CoordinateCommonType[]} 点位集合
 * @params areaCodes {any[]} 行政区域代码
 * @params prefixAreaCodes {any[]} 行政区域前缀代码
 * @params keyword {string} 模糊查询关键字(搜索物资名称)
 * @params goodsSubType {string} 物资类型
 * @params maxCount {number} 最大返回值GoodsDataSearchLocations
 */
export type SearchGoodsReqType = {
    'X-version'?: string;
    locations?: CoordinateCommonType[];
    areaCodes?: any[];
    prefixAreaCodes?: any[];
    keyword?: string;
    goodsSubType?: string;
    maxCount?: number;
};

/**
 * 模糊查找设施物资——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {GoodDetailOutCommonType[]} 记录
 */
export type SearchGoodsResType = {
    totalCount: number;
    records: GoodDetailOutCommonType[];
};

/**
 * 同步物资的设施Id和AreaCode——请求参数类型定义
 * @headers X-version {string}
 */
export type SyncGoodsReqType = {
    'X-version'?: string;
};

/**
 * 根据Id或resourceId批量删除物资——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} Id 集合 （必填）
 */
export type MultDeleteGoodsReqType = {
    'X-version'?: string;
    ids: any[];
};

/**
 * 根据Id查找标签——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetLabelsByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 根据Id查找标签——响应参数类型定义
 * @params id {string} Id
 * @params title {string} 标题
 * @params color {string} 颜色
 * @params createdTime {string} 创建时间
 * @params modifyTime {string} 修改时间
 * @params resourceId {string} 资源ID
 * @params description {string} 描述
 */
export type GetLabelsByIdResType = {
    id: string;
    title: string;
    color: string;
    createdTime: string;
    modifyTime: string;
    resourceId: string;
    description: string;
};

/**
 * 根据Id删除标签——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteLabelsReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 根据Id更新标签——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params title {string} 标题
 * @params color {string} 颜色
 * @params description {string} 描述
 */
export type EditLabelsReqType = {
    id: string;
    'X-version'?: string;
    title?: string;
    color?: string;
    description?: string;
};

/**
 * 多条件查询标签——请求参数类型定义
 * @params Keyword {string} 关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, int.MaxValue] 默认：100
 * @headers X-version {string}
 */
export type SearchLabelsReqType = {
    Keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 多条件查询标签——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LabelsOutCommonType[]} 记录
 */
export type SearchLabelsResType = {
    totalCount: number;
    records: LabelsOutCommonType[];
};

/**
 * 添加新标签——请求参数类型定义
 * @headers X-version {string}
 * @params title {string} 标题
 * @params color {string} 颜色
 * @params description {string} 描述
 */
export type GdsAddLabelsReqType = {
    'X-version'?: string;
    title?: string;
    color?: string;
    description?: string;
};

/**
 * 导入标签——请求参数类型定义
 * @headers X-version {string}
 * @params addLabelRequests {ImportRequestCommonType[]} 标签请求
 */
export type GdsImportLabelsReqType = {
    'X-version'?: string;
    addLabelRequests?: ImportRequestCommonType[];
};

/**
 * 查询图层效果配置——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetLayerEffectConfigByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 查询图层效果配置——响应参数类型定义
 * @params id {string} Id
 * @params resourceId {string} 自定义Id
 * @params name {string} 名称
 * @params effectType {string} 图层效果配置类型
 * @params url {string} 地址
 * @params needProxy {boolean} 是否需要网络代理
 * @params proxyNetworkId {string} 代理网络id
 * @params proxyIp {string} 代理ip
 * @params proxyPort {number} 代理端口
 * @params thumbnail {string} 地图缩略图base64，前端截取地图后压缩保存至GDS
 * @params urlFormat {string} 服务处理后地址
 * @params loadOptions {any} 扩展字段
 */
export type GetLayerEffectConfigByIdResType = {
    id: string;
    resourceId: string;
    name: string;
    effectType: string;
    url: string;
    needProxy: boolean;
    proxyNetworkId: string;
    proxyIp: string;
    proxyPort: number;
    thumbnail: string;
    urlFormat: string;
    loadOptions: any;
};

/**
 * 修改图层效果配置——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params resourceId {string} 自定义Id
 * @params name {string} 名称
 * @params effectType {string} 图层效果配置类型
 * @params url {string} 地址
 * @params thumbnail {string} 地图缩略图base64，前端截取地图后压缩保存至GDS
 * @params needProxy {boolean} 是否需要网络代理
 * @params proxyNetworkId {string} 代理网络id
 * @params proxyIp {string} 代理ip
 * @params proxyPort {number} 代理端口
 * @params loadOptions {any} 扩展字段
 */
export type EditLayerEffectConfigReqType = {
    id: string;
    'X-version'?: string;
    resourceId?: string;
    name?: string;
    effectType?: string;
    url?: string;
    thumbnail?: string;
    needProxy?: boolean;
    proxyNetworkId?: string;
    proxyIp?: string;
    proxyPort?: number;
    loadOptions?: any;
};

/**
 * 删除图层效果配置——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteLayerEffectConfigReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 添加图层效果配置——请求参数类型定义
 * @headers X-version {string}
 * @params resourceId {string} 自定义Id
 * @params name {string} 名称
 * @params effectType {string} 图层效果配置类型
 * @params url {string} 地址
 * @params thumbnail {string} 地图缩略图base64，前端截取地图后压缩保存至GDS
 * @params needProxy {boolean} 是否需要网络代理
 * @params proxyNetworkId {string} 代理网络id
 * @params proxyIp {string} 代理ip
 * @params proxyPort {number} 代理端口
 * @params loadOptions {any} 扩展字段
 */
export type AddLayerEffectConfigReqType = {
    'X-version'?: string;
    resourceId?: string;
    name?: string;
    effectType?: string;
    url?: string;
    thumbnail?: string;
    needProxy?: boolean;
    proxyNetworkId?: string;
    proxyIp?: string;
    proxyPort?: number;
    loadOptions?: any;
};

/**
 * 添加图层效果配置——响应参数类型定义
 * @params id {string} Id
 * @params resourceId {string} 自定义Id
 * @params name {string} 名称
 * @params effectType {string} 图层效果配置类型
 * @params url {string} 地址
 * @params needProxy {boolean} 是否需要网络代理
 * @params proxyNetworkId {string} 代理网络id
 * @params proxyIp {string} 代理ip
 * @params proxyPort {number} 代理端口
 * @params thumbnail {string} 地图缩略图base64，前端截取地图后压缩保存至GDS
 * @params urlFormat {string} 服务处理后地址
 * @params loadOptions {any} 扩展字段
 */
export type AddLayerEffectConfigResType = {
    id: string;
    resourceId: string;
    name: string;
    effectType: string;
    url: string;
    needProxy: boolean;
    proxyNetworkId: string;
    proxyIp: string;
    proxyPort: number;
    thumbnail: string;
    urlFormat: string;
    loadOptions: any;
};

/**
 * 分页查询图层效果配置集合——请求参数类型定义
 * @params ReturnThumbnail {boolean} 是否返回缩略图,默认返回
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, int.MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetLayerEffectConfigReqType = {
    ReturnThumbnail?: boolean;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 分页查询图层效果配置集合——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayerEffectConfigOutCommonType[]} 记录
 */
export type GetLayerEffectConfigResType = {
    totalCount: number;
    records: LayerEffectConfigOutCommonType[];
};

/**
 * 重新加载图层的缓存——请求参数类型定义
 * @headers X-version {string}
 */
export type ReloadLayersReqType = {
    'X-version'?: string;
};

/**
 * 重新加载图层的缓存——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayerResponseCommonType[]} 记录
 */
export type ReloadLayersResType = {
    totalCount: number;
    records: LayerResponseCommonType[];
};

/**
 * 获取设施图层根节点——请求参数类型定义
 * @params productId {string} 产品Id
 * @params mapType {number} 地图类型
 * @params areaCode {string} 区域
 * @headers X-version {string}
 */
export type GetRootLayersReqType = {
    productId?: string;
    mapType?: number;
    areaCode?: string;
    'X-version'?: string;
};

/**
 * 获取设施图层根节点——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayerResponseCommonType[]} 记录
 */
export type GetRootLayersResType = {
    totalCount: number;
    records: LayerResponseCommonType[];
};

/**
 * 获取设施图层子节点——请求参数类型定义
 * @params Path {string} 节点路径 （必填）
 * @params ProductId {string} 产品Id
 * @params MapType {number} Map类型 0-电子，1-卫星，2-科幻
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, int.MaxValue] 默认：100
 * @params areaCode {string} 区域
 * @headers X-version {string}
 */
export type GetChildrenLayersReqType = {
    Path: string;
    ProductId?: string;
    MapType?: number;
    page?: number;
    per_page?: number;
    areaCode?: string;
    'X-version'?: string;
};

/**
 * 获取设施图层子节点——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayerResponseCommonType[]} 记录
 */
export type GetChildrenLayersResType = {
    totalCount: number;
    records: LayerResponseCommonType[];
};

/**
 * 模糊查询图层——请求参数类型定义
 * @params ProductId {string} 产品Id
 * @params keyword {string} 模糊匹配关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, int.MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetLayersReqType = {
    ProductId?: string;
    keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 模糊查询图层——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayerBaseResponseCommonType[]} 记录
 */
export type GetLayersResType = {
    totalCount: number;
    records: LayerBaseResponseCommonType[];
};

/**
 * 查询全部图层类型（GroupKey）——请求参数类型定义
 * @params ProductId {string} 产品Id
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, int.MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetGroupKeysReqType = {
    ProductId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 查询全部图层类型（GroupKey）——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayerGroupOutCommonType[]} 记录
 */
export type GetGroupKeysResType = {
    totalCount: number;
    records: LayerGroupOutCommonType[];
};

/**
 * 根据图层id集合批量获取图层信息——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} 图层Id集合 （必填）
 */
export type GetLayerInfoByIdsReqType = {
    'X-version'?: string;
    ids: any[];
};

/**
 * 根据图层id集合批量获取图层信息——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayerEntityOutCommonType[]} 记录
 */
export type GetLayerInfoByIdsResType = {
    totalCount: number;
    records: LayerEntityOutCommonType[];
};

/**
 * 根据Id集合或number集合批量删除图层——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} Id 集合 （必填）
 */
export type DeleteLayersByIdsReqType = {
    'X-version'?: string;
    ids: any[];
};

/**
 * 批量图层路径查询图层节点——请求参数类型定义
 * @headers X-version {string}
 * @params paths {any[]} 图层路径集合
 * @params areaCodes {any[]} 行政区域【用于筛选设施】
 * @params productId {string} ProductId （必填）
 */
export type BatchGetLayerNodesReqType = {
    'X-version'?: string;
    paths?: any[];
    areaCodes?: any[];
    productId: string;
};

/**
 * 批量图层路径查询图层节点——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayerResponseCommonType[]} 记录
 */
export type BatchGetLayerNodesResType = {
    totalCount: number;
    records: LayerResponseCommonType[];
};

/**
 * 条件查询图层（不分层，仅用于IES导出）——请求参数类型定义
 * @params ProductId {string} 产品Id
 * @params keyword {string} 模糊匹配关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, int.MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetBaseLayersReqType = {
    ProductId?: string;
    keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 条件查询图层（不分层，仅用于IES导出）——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayerImportOutCommonType[]} 记录
 */
export type GetBaseLayersResType = {
    totalCount: number;
    records: LayerImportOutCommonType[];
};

/**
 * 导出图层——请求参数类型定义
 * @headers X-version {string}
 * @params productId {string} 产品Id
 */
export type ExportLayersReqType = {
    'X-version'?: string;
    productId?: string;
};

/**
 * 导出图层——响应参数类型定义
 * @params layers {ExportLayerOutCommonType[]} 图层集合
 * @params layerConfigs {ExportLayerConfigOutCommonType[]} 图层配置集合
 * @params geoConfigs {ExportGeoConfigOutCommonType[]} 地图配置集合
 * @params mapServerTypes {ExportMapServerTypeOutCommonType[]} 地图服务类型集合
 * @params mapTypeOverlays {ExportMapTypeOverlayOutCommonType[]} 地图服务底图图层集合
 */
export type ExportLayersResType = {
    layers: ExportLayerOutCommonType[];
    layerConfigs: ExportLayerConfigOutCommonType[];
    geoConfigs: ExportGeoConfigOutCommonType[];
    mapServerTypes: ExportMapServerTypeOutCommonType[];
    mapTypeOverlays: ExportMapTypeOverlayOutCommonType[];
};

/**
 * 导入图层——请求参数类型定义
 * @headers X-version {string}
 * @params isReload {boolean} 是否刷新缓存
 * @params layers {ImportLayerInCommonType[]} 图层集合
 * @params layerConfigs {ImportLayerConfigInCommonType[]} 图层配置集合
 * @params geoConfigs {ImportGeoConfigInCommonType[]} 地图配置集合
 * @params mapServerTypes {ImportMapServerTypeInCommonType[]} 地图服务类型集合
 * @params mapTypeOverlays {ImportMapTypeOverlayInCommonType[]} 地图服务底图图层集合
 */
export type ImportLayersReqType = {
    'X-version'?: string;
    isReload?: boolean;
    layers?: ImportLayerInCommonType[];
    layerConfigs?: ImportLayerConfigInCommonType[];
    geoConfigs?: ImportGeoConfigInCommonType[];
    mapServerTypes?: ImportMapServerTypeInCommonType[];
    mapTypeOverlays?: ImportMapTypeOverlayInCommonType[];
};

/**
 * 获取图层集合包含图层配置数据（树结构）——请求参数类型定义
 * @params ProductId {string} 产品id （必填）
 * @headers X-version {string}
 */
export type GetLayerTreesReqType = {
    ProductId: string;
    'X-version'?: string;
};

/**
 * 获取图层集合包含图层配置数据（树结构）——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayerNodeBaseResponseCommonType[]} 记录
 */
export type GetLayerTreesResType = {
    totalCount: number;
    records: LayerNodeBaseResponseCommonType[];
};

/**
 * 获取图层集合（树结构，包含选中状态）——请求参数类型定义
 * @headers X-version {string}
 * @params selectIds {any[]} 选中Id集合
 * @params productId {string} 产品id （必填）
 */
export type GetLayerTreesWithStatusReqType = {
    'X-version'?: string;
    selectIds?: any[];
    productId: string;
};

/**
 * 获取图层集合（树结构，包含选中状态）——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayerUseStatusOutCommonType[]} 记录
 */
export type GetLayerTreesWithStatusResType = {
    totalCount: number;
    records: LayerUseStatusOutCommonType[];
};

/**
 * 获取图层集合包含图层配置数据(平铺结构)——请求参数类型定义
 * @params ProductId {string} 产品id （必填）
 * @headers X-version {string}
 */
export type GetFlatLayersReqType = {
    ProductId: string;
    'X-version'?: string;
};

/**
 * 获取图层集合包含图层配置数据(平铺结构)——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayerNodeResponseCommonType[]} 记录
 */
export type GetFlatLayersResType = {
    totalCount: number;
    records: LayerNodeResponseCommonType[];
};

/**
 * Id获取地图中心点——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetMapCenterByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * Id获取地图中心点——响应参数类型定义
 * @params id {string} Id
 * @params productId {string} 产品Id
 * @params areaCode {string} 行政区域码
 * @params areaCodeName {string} 行政区域名称
 * @params coordinate {CoordinateCommonType} 坐标
 * @params address {string} 地址
 * @params zoom {number} 地图层级
 */
export type GetMapCenterByIdResType = {
    id: string;
    productId: string;
    areaCode: string;
    areaCodeName: string;
    coordinate: CoordinateCommonType;
    address: string;
    zoom: number;
};

/**
 * 修改地图中心点——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params productId {string} 产品Id
 * @params areaCode {string} 行政区域码
 * @params areaCodeName {string} 行政区域名称
 * @params coordinate {CoordinateCommonType} 坐标
 * @params address {string} 地址
 * @params zoom {number} 地图层级
 */
export type EditMapCenterByIdReqType = {
    id: string;
    'X-version'?: string;
    productId?: string;
    areaCode?: string;
    areaCodeName?: string;
    coordinate?: CoordinateCommonType;
    address?: string;
    zoom?: number;
};

/**
 * 根据Id删除中心点配置——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteMapCenterReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * ProductId分页获取地图中心点集合——请求参数类型定义
 * @params ProductId {string} 产品id
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, int.MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetMapCentersByProductIdReqType = {
    ProductId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * ProductId分页获取地图中心点集合——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {MapCenterOutCommonType[]} 记录
 */
export type GetMapCentersByProductIdResType = {
    totalCount: number;
    records: MapCenterOutCommonType[];
};

/**
 * 创建地图中心点——请求参数类型定义
 * @headers X-version {string}
 * @params productId {string} 产品Id
 * @params areaCode {string} 行政区域码
 * @params areaCodeName {string} 行政区域名称
 * @params coordinate {CoordinateCommonType} 坐标
 * @params address {string} 地址
 * @params zoom {number} 地图层级
 */
export type AddMapCenterReqType = {
    'X-version'?: string;
    productId?: string;
    areaCode?: string;
    areaCodeName?: string;
    coordinate?: CoordinateCommonType;
    address?: string;
    zoom?: number;
};

/**
 * 创建地图中心点——响应参数类型定义
 * @params id {string} Id
 * @params productId {string} 产品Id
 * @params areaCode {string} 行政区域码
 * @params areaCodeName {string} 行政区域名称
 * @params coordinate {CoordinateCommonType} 坐标
 * @params address {string} 地址
 * @params zoom {number} 地图层级
 */
export type AddMapCenterResType = {
    id: string;
    productId: string;
    areaCode: string;
    areaCodeName: string;
    coordinate: CoordinateCommonType;
    address: string;
    zoom: number;
};

/**
 * 开启/关闭中心点配置——请求参数类型定义
 * @headers X-version {string}
 * @params productId {string} 产品Id
 * @params isOpen {boolean} 是否开启
 */
export type SwitchCenterReqType = {
    'X-version'?: string;
    productId?: string;
    isOpen?: boolean;
};

/**
 * 查询地图服务类型——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetMapServerTypeReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 查询地图服务类型——响应参数类型定义
 * @params id {string} mongoId
 * @params resourceId {string} 自定义Id
 * @params name {string} 类型名称
 * @params coordinate {any[]} 中心点
 * @params zoom {number} 地图层级
 * @params epsg {string} 坐标系
 * @params thumbnail {string} 地图缩略图base64，前端截取地图后压缩保存至GDS
 */
export type GetMapServerTypeResType = {
    id: string;
    resourceId: string;
    name: string;
    coordinate: any[];
    zoom: number;
    epsg: string;
    thumbnail: string;
};

/**
 * 修改地图服务类型——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params resourceId {string} 自定义Id
 * @params name {string} 类型名称
 * @params coordinate {any[]} 中心点
 * @params zoom {number} 地图层级
 * @params epsg {string} 坐标系
 * @params thumbnail {string} 地图缩略图base64，前端截取地图后压缩保存至GDS
 */
export type EditMapServerTypeReqType = {
    id: string;
    'X-version'?: string;
    resourceId?: string;
    name?: string;
    coordinate?: any[];
    zoom?: number;
    epsg?: string;
    thumbnail?: string;
};

/**
 * 删除地图服务类型——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteMapServerTypeReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 添加地图服务类型——请求参数类型定义
 * @headers X-version {string}
 * @params resourceId {string} 自定义Id
 * @params name {string} 类型名称
 * @params coordinate {any[]} 中心点
 * @params zoom {number} 地图层级
 * @params epsg {string} 坐标系
 * @params thumbnail {string} 地图缩略图base64，前端截取地图后压缩保存至GDS
 */
export type AddMapServerTypeReqType = {
    'X-version'?: string;
    resourceId?: string;
    name?: string;
    coordinate?: any[];
    zoom?: number;
    epsg?: string;
    thumbnail?: string;
};

/**
 * 添加地图服务类型——响应参数类型定义
 * @params id {string} mongoId
 * @params resourceId {string} 自定义Id
 * @params name {string} 类型名称
 * @params coordinate {any[]} 中心点
 * @params zoom {number} 地图层级
 * @params epsg {string} 坐标系
 * @params thumbnail {string} 地图缩略图base64，前端截取地图后压缩保存至GDS
 */
export type AddMapServerTypeResType = {
    id: string;
    resourceId: string;
    name: string;
    coordinate: any[];
    zoom: number;
    epsg: string;
    thumbnail: string;
};

/**
 * 分页查询地图服务类型集合——请求参数类型定义
 * @params ReturnThumbnail {boolean} 是否返回缩略图,默认返回
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, int.MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetMapServerTypesReqType = {
    ReturnThumbnail?: boolean;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 分页查询地图服务类型集合——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {MapServerTypeOutCommonType[]} 记录
 */
export type GetMapServerTypesResType = {
    totalCount: number;
    records: MapServerTypeOutCommonType[];
};

/**
 * 根据id分页查询地图服务底图图层集合——请求参数类型定义
 * @params id {string} id （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, int.MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetMapTypeOverlaysReqType = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 根据id分页查询地图服务底图图层集合——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {MapTypeOverlayOutCommonType[]} 记录
 */
export type GetMapTypeOverlaysResType = {
    totalCount: number;
    records: MapTypeOverlayOutCommonType[];
};

/**
 * 查询地图服务底图图层——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetMapTypeOverlayByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 查询地图服务底图图层——响应参数类型定义
 * @params id {string} mongoId
 * @params name {string} 图层名称
 * @params typeId {string} MapServerTypes表Id
 * @params resourceId {string} 自定义id
 * @params serviceType {string} 服务类型
 * @params url {string} 地址
 * @params urlFormat {string} 转换成地图网关的地址
 * @params isStandard {boolean} 是否标准服务
 * @params needProxy {boolean} 是否需要网络代理
 * @params proxyNetworkId {string} 代理网络id
 * @params proxyIp {string} 代理ip
 * @params proxyPort {number} 代理端口
 * @params order {number} 排序字段
 * @params loadOptions {any} 图层配置参数，json字符串，每个不同的服务类型不同参数
 */
export type GetMapTypeOverlayByIdResType = {
    id: string;
    name: string;
    typeId: string;
    resourceId: string;
    serviceType: string;
    url: string;
    urlFormat: string;
    isStandard: boolean;
    needProxy: boolean;
    proxyNetworkId: string;
    proxyIp: string;
    proxyPort: number;
    order: number;
    loadOptions: any;
};

/**
 * 修改地图服务底图图层——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 图层名称
 * @params typeId {string} MapServerTypes表Id
 * @params resourceId {string} 自定义id
 * @params serviceType {string} 服务类型
 * @params url {string} 地址
 * @params isStandard {boolean} 是否标准服务
 * @params needProxy {boolean} 是否需要网络代理
 * @params proxyNetworkId {string} 代理网络id
 * @params proxyIp {string} 代理ip
 * @params proxyPort {number} 代理端口
 * @params order {number} 排序字段
 * @params loadOptions {any} 图层配置参数，json字符串，每个不同的服务类型不同参数
 */
export type EditMapTypeOverlayReqType = {
    id: string;
    'X-version'?: string;
    name?: string;
    typeId?: string;
    resourceId?: string;
    serviceType?: string;
    url?: string;
    isStandard?: boolean;
    needProxy?: boolean;
    proxyNetworkId?: string;
    proxyIp?: string;
    proxyPort?: number;
    order?: number;
    loadOptions?: any;
};

/**
 * 添加地图服务底图图层——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 图层名称
 * @params typeId {string} MapServerTypes表Id
 * @params resourceId {string} 自定义id
 * @params serviceType {string} 服务类型
 * @params url {string} 地址
 * @params isStandard {boolean} 是否标准服务
 * @params needProxy {boolean} 是否需要网络代理
 * @params proxyNetworkId {string} 代理网络id
 * @params proxyIp {string} 代理ip
 * @params proxyPort {number} 代理端口
 * @params order {number} 排序字段
 * @params loadOptions {any} 图层配置参数，json字符串，每个不同的服务类型不同参数
 */
export type AddMapTypeOverlayReqType = {
    'X-version'?: string;
    name?: string;
    typeId?: string;
    resourceId?: string;
    serviceType?: string;
    url?: string;
    isStandard?: boolean;
    needProxy?: boolean;
    proxyNetworkId?: string;
    proxyIp?: string;
    proxyPort?: number;
    order?: number;
    loadOptions?: any;
};

/**
 * 添加地图服务底图图层——响应参数类型定义
 * @params id {string} mongoId
 * @params name {string} 图层名称
 * @params typeId {string} MapServerTypes表Id
 * @params resourceId {string} 自定义id
 * @params serviceType {string} 服务类型
 * @params url {string} 地址
 * @params urlFormat {string} 转换成地图网关的地址
 * @params isStandard {boolean} 是否标准服务
 * @params needProxy {boolean} 是否需要网络代理
 * @params proxyNetworkId {string} 代理网络id
 * @params proxyIp {string} 代理ip
 * @params proxyPort {number} 代理端口
 * @params order {number} 排序字段
 * @params loadOptions {any} 图层配置参数，json字符串，每个不同的服务类型不同参数
 */
export type AddMapTypeOverlayResType = {
    id: string;
    name: string;
    typeId: string;
    resourceId: string;
    serviceType: string;
    url: string;
    urlFormat: string;
    isStandard: boolean;
    needProxy: boolean;
    proxyNetworkId: string;
    proxyIp: string;
    proxyPort: number;
    order: number;
    loadOptions: any;
};

/**
 * 批量删除地图服务底图图层——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} Id 集合 （必填）
 */
export type DeleteMapTypeOverlaysReqType = {
    'X-version'?: string;
    ids: any[];
};

/**
 * 获取地图服务转换后的地址——请求参数类型定义
 * @params Url {string} url地址 （必填）
 * @params NeedProxy {boolean} 是否需要网络代理
 * @params ProxyIp {string} 代理Ip
 * @params ProxyPort {number} 代理端口
 * @headers X-version {string}
 */
export type GetUrlFormatReqType = {
    Url: string;
    NeedProxy?: boolean;
    ProxyIp?: string;
    ProxyPort?: number;
    'X-version'?: string;
};

/**
 * 获取地图服务转换后的地址——响应参数类型定义
 * @params urlFormat {string} 格式化后的url地址
 */
export type GetUrlFormatResType = {
    urlFormat: string;
};

/**
 * 根据标绘id查找标绘——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetPlotsByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 根据标绘id查找标绘——响应参数类型定义
 * @params id {string} 标绘Id
 * @params associatedId {string} 标绘关联Id，如事件Id、用户Id
 * @params plotAssociatedType {PlotAssociatedTypeCommonType} 标绘关联类型，0表示用户标绘，1表示事件标绘
 * @params type {string} 标绘数据
 * @params properties {string} 标绘属性
 * @params geometry {string} 几何信息
 */
export type GetPlotsByIdResType = {
    id: string;
    associatedId: string;
    plotAssociatedType: PlotAssociatedTypeCommonType;
    type: string;
    properties: string;
    geometry: string;
};

/**
 * 根据标绘id修改标绘——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params type {string} 标绘数据
 * @params properties {any} 标绘属性
 * @params geometry {any} 几何信息
 */
export type ModifyPlotsByIdReqType = {
    id: string;
    'X-version'?: string;
    type?: string;
    properties?: any;
    geometry?: any;
};

/**
 * 根据标绘id删除标绘——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeletePlotsByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 查找事件标绘——请求参数类型定义
 * @params EventId {string} 事件Id （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, int.MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetEventPlotsReqType = {
    EventId: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 查找事件标绘——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PlotOutCommonType[]} 记录
 */
export type GetEventPlotsResType = {
    totalCount: number;
    records: PlotOutCommonType[];
};

/**
 * 添加事件标绘——请求参数类型定义
 * @headers X-version {string}
 * @params eventId {string} 事件Id （必填）
 * @params id {string} 标绘Id
 * @params type {string} 标绘数据
 * @params properties {any} 标绘属性
 * @params geometry {any} 几何信息
 */
export type AddEventPlotsReqType = {
    'X-version'?: string;
    eventId: string;
    id?: string;
    type?: string;
    properties?: any;
    geometry?: any;
};

/**
 * 添加事件标绘——响应参数类型定义
 * @params id {string} 标绘Id
 * @params associatedId {string} 标绘关联Id，如事件Id、用户Id
 * @params plotAssociatedType {PlotAssociatedTypeCommonType} 标绘关联类型，0表示用户标绘，1表示事件标绘
 * @params type {string} 标绘数据
 * @params properties {string} 标绘属性
 * @params geometry {string} 几何信息
 */
export type AddEventPlotsResType = {
    id: string;
    associatedId: string;
    plotAssociatedType: PlotAssociatedTypeCommonType;
    type: string;
    properties: string;
    geometry: string;
};

/**
 * 查找用户标绘——请求参数类型定义
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, int.MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetUserPlotsReqType = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 查找用户标绘——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PlotOutCommonType[]} 记录
 */
export type GetUserPlotsResType = {
    totalCount: number;
    records: PlotOutCommonType[];
};

/**
 * 添加用户标绘——请求参数类型定义
 * @headers X-version {string}
 * @params id {string} 标绘Id
 * @params type {string} 标绘数据
 * @params properties {any} 标绘属性
 * @params geometry {any} 几何信息
 */
export type AddUserPlotsReqType = {
    'X-version'?: string;
    id?: string;
    type?: string;
    properties?: any;
    geometry?: any;
};

/**
 * 添加用户标绘——响应参数类型定义
 * @params id {string} 标绘Id
 * @params associatedId {string} 标绘关联Id，如事件Id、用户Id
 * @params plotAssociatedType {PlotAssociatedTypeCommonType} 标绘关联类型，0表示用户标绘，1表示事件标绘
 * @params type {string} 标绘数据
 * @params properties {string} 标绘属性
 * @params geometry {string} 几何信息
 */
export type AddUserPlotsResType = {
    id: string;
    associatedId: string;
    plotAssociatedType: PlotAssociatedTypeCommonType;
    type: string;
    properties: string;
    geometry: string;
};

/**
 * 查找标绘——请求参数类型定义
 * @params AssociatedId {string} 关联Id （必填）
 * @params PlotAssociatedType {number} 关联类型，0-用户，1-事件，2-专题 （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, int.MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetPlotsReqType = {
    AssociatedId: string;
    PlotAssociatedType: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 查找标绘——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PlotOutCommonType[]} 记录
 */
export type GetPlotsResType = {
    totalCount: number;
    records: PlotOutCommonType[];
};

/**
 * 添加标绘——请求参数类型定义
 * @headers X-version {string}
 * @params associatedId {string} 关联Id （必填）
 * @params plotAssociatedType {PlotAssociatedTypeCommonType} 关联类型，0-用户，1-事件，2-专题
 * @params id {string} 标绘Id
 * @params type {string} 标绘数据
 * @params properties {any} 标绘属性
 * @params geometry {any} 几何信息
 */
export type AddPlotsReqType = {
    'X-version'?: string;
    associatedId: string;
    plotAssociatedType?: PlotAssociatedTypeCommonType;
    id?: string;
    type?: string;
    properties?: any;
    geometry?: any;
};

/**
 * 添加标绘——响应参数类型定义
 * @params id {string} 标绘Id
 * @params associatedId {string} 标绘关联Id，如事件Id、用户Id
 * @params plotAssociatedType {PlotAssociatedTypeCommonType} 标绘关联类型，0表示用户标绘，1表示事件标绘
 * @params type {string} 标绘数据
 * @params properties {string} 标绘属性
 * @params geometry {string} 几何信息
 */
export type AddPlotsResType = {
    id: string;
    associatedId: string;
    plotAssociatedType: PlotAssociatedTypeCommonType;
    type: string;
    properties: string;
    geometry: string;
};

/**
 * 根据id查找用户常用标绘类型——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetUserPlotTypesByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 根据id查找用户常用标绘类型——响应参数类型定义
 * @params id {string} 标绘类型Id
 * @params type {string} 标绘类型
 * @params name {string} 标绘类型名称
 * @params dirName {string} 目录名称
 * @params fileName {string} 文件名称
 * @params editType {string} 编辑类型
 * @params userId {string} 用户Id
 */
export type GetUserPlotTypesByIdResType = {
    id: string;
    type: string;
    name: string;
    dirName: string;
    fileName: string;
    editType: string;
    userId: string;
};

/**
 * 根据id删除标绘类型——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeletePlotTypesByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 查找用户常用标绘类型——请求参数类型定义
 * @headers X-version {string}
 */
export type GetUserPlotTypesReqType = {
    'X-version'?: string;
};

/**
 * 查找用户常用标绘类型——响应参数类型定义
 * @params totalCount {number} 总数
 * @params userId {string} 用户Id
 * @params plotTypes {TypeWithoutUserIdOutCommonType[]} 标绘类型集合
 */
export type GetUserPlotTypesResType = {
    totalCount: number;
    userId: string;
    plotTypes: TypeWithoutUserIdOutCommonType[];
};

/**
 * 添加用户常用标绘类型——请求参数类型定义
 * @headers X-version {string}
 * @params id {string} 地图标绘类型Id
 * @params type {string} 标绘类型
 * @params name {string} 标绘类型名称
 * @params dirName {string} 目录名称
 * @params fileName {string} 文件名称
 * @params editType {string} 编辑类型
 */
export type AddUserPlotTypesReqType = {
    'X-version'?: string;
    id?: string;
    type?: string;
    name?: string;
    dirName?: string;
    fileName?: string;
    editType?: string;
};

/**
 * 添加用户常用标绘类型——响应参数类型定义
 * @params id {string} 标绘Id
 * @params associatedId {string} 标绘关联Id，如事件Id、用户Id
 * @params plotAssociatedType {PlotAssociatedTypeCommonType} 标绘关联类型，0表示用户标绘，1表示事件标绘
 * @params type {string} 标绘数据
 * @params properties {string} 标绘属性
 * @params geometry {string} 几何信息
 */
export type AddUserPlotTypesResType = {
    id: string;
    associatedId: string;
    plotAssociatedType: PlotAssociatedTypeCommonType;
    type: string;
    properties: string;
    geometry: string;
};

/**
 * 添加模型场景——请求参数类型定义
 * @headers X-version {string}
 * @params resourceId {string} 资源Id
 * @params facilityId {string} 设施Id
 * @params areaCode {string} 区域码
 * @params name {string} 场景名称
 * @params sceneName {string} 场景对应的英文名
 * @params isIndoorScene {boolean} 是否室内场景
 * @params showModelList {any[]} 场景模型列表
 * @params cameraOption {CameraOptionCommonType} 三维信息数据（视点数据）
 */
export type AddScenesReqType = {
    'X-version'?: string;
    resourceId?: string;
    facilityId?: string;
    areaCode?: string;
    name?: string;
    sceneName?: string;
    isIndoorScene?: boolean;
    showModelList?: any[];
    cameraOption?: CameraOptionCommonType;
};

/**
 * 添加模型场景——响应参数类型定义
 * @params id {string} Id
 * @params resourceId {string} 资源Id
 * @params facilityId {string} 设施Id
 * @params areaCode {string} 区域码
 * @params name {string} 场景名称
 * @params sceneName {string} 场景对应的英文名
 * @params isIndoorScene {boolean} 是否室内场景
 * @params showModelList {any[]} 场景模型列表
 * @params cameraOption {CameraOptionCommonType} 三维信息数据（视点数据）
 */
export type AddScenesResType = {
    id: string;
    resourceId: string;
    facilityId: string;
    areaCode: string;
    name: string;
    sceneName: string;
    isIndoorScene: boolean;
    showModelList: any[];
    cameraOption: CameraOptionCommonType;
};

/**
 * 修改模型场景——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params resourceId {string} 资源Id
 * @params facilityId {string} 设施Id
 * @params areaCode {string} 区域码
 * @params name {string} 场景名称
 * @params sceneName {string} 场景对应的英文名
 * @params isIndoorScene {boolean} 是否室内场景
 * @params showModelList {any[]} 场景模型列表
 * @params cameraOption {CameraOptionCommonType} 三维信息数据（视点数据）
 */
export type EditSceneReqType = {
    id: string;
    'X-version'?: string;
    resourceId?: string;
    facilityId?: string;
    areaCode?: string;
    name?: string;
    sceneName?: string;
    isIndoorScene?: boolean;
    showModelList?: any[];
    cameraOption?: CameraOptionCommonType;
};

/**
 * 删除模型场景——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteSceneReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 根据id查询模型场景——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetGdsSceneByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 根据id查询模型场景——响应参数类型定义
 * @params id {string} Id
 * @params resourceId {string} 资源Id
 * @params facilityId {string} 设施Id
 * @params areaCode {string} 区域码
 * @params name {string} 场景名称
 * @params sceneName {string} 场景对应的英文名
 * @params isIndoorScene {boolean} 是否室内场景
 * @params showModelList {any[]} 场景模型列表
 * @params cameraOption {CameraOptionCommonType} 三维信息数据（视点数据）
 */
export type GetGdsSceneByIdResType = {
    id: string;
    resourceId: string;
    facilityId: string;
    areaCode: string;
    name: string;
    sceneName: string;
    isIndoorScene: boolean;
    showModelList: any[];
    cameraOption: CameraOptionCommonType;
};

/**
 * 通过区域码获取模型场景——请求参数类型定义
 * @params areaCode {string}  （必填）
 * @headers X-version {string}
 */
export type GetSceneByAreaCodeReqType = {
    areaCode: string;
    'X-version'?: string;
};

/**
 * 通过区域码获取模型场景——响应参数类型定义
 * @params id {string} Id
 * @params resourceId {string} 资源Id
 * @params facilityId {string} 设施Id
 * @params areaCode {string} 区域码
 * @params name {string} 场景名称
 * @params sceneName {string} 场景对应的英文名
 * @params isIndoorScene {boolean} 是否室内场景
 * @params showModelList {any[]} 场景模型列表
 * @params cameraOption {CameraOptionCommonType} 三维信息数据（视点数据）
 */
export type GetSceneByAreaCodeResType = {
    id: string;
    resourceId: string;
    facilityId: string;
    areaCode: string;
    name: string;
    sceneName: string;
    isIndoorScene: boolean;
    showModelList: any[];
    cameraOption: CameraOptionCommonType;
};

/**
 * 多条件查询模型场景——请求参数类型定义
 * @params Keyword {string} 关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, int.MaxValue] 默认：100
 * @headers X-version {string}
 */
export type SearchScenesReqType = {
    Keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 多条件查询模型场景——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {SceneOutCommonType[]} 记录
 */
export type SearchScenesResType = {
    totalCount: number;
    records: SceneOutCommonType[];
};

/**
 * 获取图层的统计数据——请求参数类型定义
 * @params LayerName {string} 图层名 （必填）
 * @params AreaCode {string} 行政区域码，指查指定区域的统计（不包含下级），如AreaCode只查深圳的统计（不包含下级南山统计）
 * @params ProductId {string} 产品Id
 * @params PrefixAreaCodes {any[]} 行政区域码，查询包括下级的统计，AreaCode，PrefixAreaCodes都传以AreaCode为准
 * @headers X-version {string}
 */
export type GetLayersStatisticalReqType = {
    LayerName: string;
    AreaCode?: string;
    ProductId?: string;
    PrefixAreaCodes?: any[];
    'X-version'?: string;
};

/**
 * 获取图层的统计数据——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayerStatisticalOutCommonType[]} 记录
 */
export type GetLayersStatisticalResType = {
    totalCount: number;
    records: LayerStatisticalOutCommonType[];
};

/**
 * 根据根图层查询下级图层及设施统计——请求参数类型定义
 * @headers X-version {string}
 * @params rootLayerName {string} 根图层名 （必填）
 * @params keyword {string} 关键词
 * @params productId {string} 产品Id
 * @params prefixAreaCodes {any[]} 行政区域码，查询包括下级的统计，AreaCode，PrefixAreaCodes都传以AreaCode为准
 */
export type SearchLayersTreeReqType = {
    'X-version'?: string;
    rootLayerName: string;
    keyword?: string;
    productId?: string;
    prefixAreaCodes?: any[];
};

/**
 * 根据根图层查询下级图层及设施统计——响应参数类型定义
 * @params layerId {string} 图层id
 * @params layerName {string} 图层名称
 * @params subordinateLayersTotal {number} 图层总数
 * @params facilitiesTotal {number} 设施总数
 * @params subordinateLayers {LayerNodeOutCommonType[]} 下级图层资源
 */
export type SearchLayersTreeResType = {
    layerId: string;
    layerName: string;
    subordinateLayersTotal: number;
    facilitiesTotal: number;
    subordinateLayers: LayerNodeOutCommonType[];
};

/**
 * 根据区域和图层查询设施统计——请求参数类型定义
 * @headers X-version {string}
 * @params layerIds {any[]} 需统计的图层ID （必填）
 * @params upLeft {CoordinateCommonType} 左上坐标 （必填）
 * @params bottomRight {CoordinateCommonType} 右上坐标 （必填）
 */
export type QueryFacilityByAreaLayerReqType = {
    'X-version'?: string;
    layerIds: any[];
    upLeft: CoordinateCommonType;
    bottomRight: CoordinateCommonType;
};

/**
 * 根据区域和图层查询设施统计——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayersFacilityStatisticOutCommonType[]} 记录
 */
export type QueryFacilityByAreaLayerResType = {
    totalCount: number;
    records: LayersFacilityStatisticOutCommonType[];
};

/**
 * 根据圆形区域图层统计设施——请求参数类型定义
 * @headers X-version {string}
 * @params layerIds {any[]} 需统计的图层ID （必填）
 * @params center {CoordinateCommonType} 圆心 （必填）
 * @params radius {number} 半径（单位米） （必填）
 */
export type GetFacilitiesCountByCircleAreaReqType = {
    'X-version'?: string;
    layerIds: any[];
    center: CoordinateCommonType;
    radius: number;
};

/**
 * 根据圆形区域图层统计设施——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {LayersFacilityStatisticOutCommonType[]} 记录
 */
export type GetFacilitiesCountByCircleAreaResType = {
    totalCount: number;
    records: LayersFacilityStatisticOutCommonType[];
};
