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
 * 建筑属性
 * @params id {string} 唯一标识符
 * @params smId {string} 唯一标识符
 * @params smsDriW {string} 西方向经纬度
 * @params smsDriN {string} 北方向经纬度
 * @params smsDriE {string} 东方向经纬度
 * @params smsDriS {string} 南方向经纬度
 * @params smUserid {string} 用户 Id
 * @params smArea {string} 面积
 * @params smpPerimeter {string} 周长
 * @params smGeometrySize {string} 尺寸
 * @params smGeoPosition {string} 地理位置
 * @params height {string} 建筑高度
 * @params z {string} z 轴
 */
type PropertiesCommonType = {
    id?: string;
    smId?: string;
    smsDriW?: string;
    smsDriN?: string;
    smsDriE?: string;
    smsDriS?: string;
    smUserid?: string;
    smArea?: string;
    smpPerimeter?: string;
    smGeometrySize?: string;
    smGeoPosition?: string;
    height?: string;
    z?: string;
};

/**
 * 建筑面数据
 * @params type {string} 类型
 * @params coordinates {any[]} 经纬度
 */
type GeometryCommonType = {
    type?: string;
    coordinates?: any[];
};

/**
 * 建筑返回实体
 * @params id {string} Id
 * @params type {string} 类型
 * @params properties {PropertiesCommonType} 属性
 * @params geometry {GeometryCommonType} 图形
 * @params center {any[]} 中心点
 * @params maxRadius {number} 最大半径
 */
type BuildingsOutCommonType = {
    id?: string;
    type?: string;
    properties?: PropertiesCommonType;
    geometry?: GeometryCommonType;
    center?: any[];
    maxRadius?: number;
};

/**
 * 坐标点
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 */
type CoordinateCommonType = {
    longitude?: number;
    latitude?: number;
};

/**
 * 地理编码返回结果
 * @params location {CoordinateCommonType} 经纬度坐标
 * @params precise {number} 位置的附加信息，是否精确查找。1为精确查找，即准确打点；0为不精确，即模糊打点。
 * @params confidence {number} 描述打点绝对精度（即坐标点的误差范围）
 * @params level {string} 能精确理解的地址类型 包含：UNKNOWN、国家、省、城市、区县、乡镇、村庄、道路、地产小区、商务大厦、   政府机构、交叉路口、商圈、生活服务、休闲娱乐、餐饮、宾馆、购物、金融、教育、   医疗 、工业园区 、旅游景点 、汽车服务、火车站、长途汽车站、桥 、停车场/停车区、港口/码头、收费区/收费站、飞机场 、机场 、收费处/收费站 、加油站、绿地、门址
 */
type GeocoderOutCommonType = {
    location?: CoordinateCommonType;
    precise?: number;
    confidence?: number;
    level?: string;
};

/**
 * 地址
 * @params country {string} 国家
 * @params province {string} 省名
 * @params city {string} 城市名
 * @params district {string} 区县名
 * @params street {string} 街道名
 * @params streetNumber {string} 街道门牌号
 * @params adcode {string} 行政区划代码
 * @params countryCode {string} 国家代码
 * @params direction {string} 和当前坐标点的方向，当有门牌号的时候返回数据
 * @params distance {string} 和当前坐标点的距离，当有门牌号的时候返回数据
 */
type AddressCommonType = {
    country?: string;
    province?: string;
    city?: string;
    district?: string;
    street?: string;
    streetNumber?: string;
    adcode?: string;
    countryCode?: string;
    direction?: string;
    distance?: string;
};

/**
 * 坐标点
 * @params x {string} X坐标
 * @params y {string} Y坐标
 */
type PointCommonType = {
    x?: string;
    y?: string;
};

/**
 * POI点详细信息
 * @params addr {string} 地址信息
 * @params cp {string} 数据来源
 * @params direction {string} 和当前坐标点的方向
 * @params distance {string} 离坐标点距离
 * @params name {string} poi名称
 * @params poiType {string} poi类型
 * @params point {PointCommonType} poi坐标{x,y}
 * @params tel {string} 电话
 * @params uid {string} poi唯一标识
 * @params zip {string} 邮编
 * @params parentPoi {PoiCommonType} 该poi对应的主点poi（如，海底捞的主点为上地华联，该字段则为上地华联的poi信息。如无，该字段为空），包含子字段和poi基础召回字段相同。
 */
type PoiCommonType = {
    addr?: string;
    cp?: string;
    direction?: string;
    distance?: string;
    name?: string;
    poiType?: string;
    point?: PointCommonType;
    tel?: string;
    uid?: string;
    zip?: string;
    parentPoi?: PoiCommonType;
};

/**
 * 命中区域信息接口
 * @params directionDesc {string} 命中区域面与坐标位置关系
 * @params name {string} 命中区域面名称
 * @params tag {string} 命中区域面类型
 */
type PoiRegionCommonType = {
    directionDesc?: string;
    name?: string;
    tag?: string;
};

/**
 * 道路详细信息
 * @params name {string} 道路名称
 * @params distance {string} 道路相对坐标点的距离。
 */
type RoadCommonType = {
    name?: string;
    distance?: string;
};

/**
 * 逆地理编码返回实体
 * @params location {CoordinateCommonType} 经纬度坐标
 * @params formattedAddress {string} 结构化地址信息 如：北京市海淀区中关村大街27号1101-08室
 * @params business {string} 坐标所在商圈信息 如 "人民大学,中关村,苏州街"。最多返回3个。
 * @params cityCode {string} 城市id
 * @params addressComponent {AddressCommonType} 地址成分
 * @params pois {PoiCommonType[]} 周边poi
 * @params poiRegions {PoiRegionCommonType[]} Poi 区域信息
 * @params roads {RoadCommonType[]} 周边道路
 * @params sematicDescription {string} 当前位置结合POI的语义化结果描述。如：中关村大厦内,中国建设银行(中关村支行)附近31米
 */
type ReverseGeocoderOutCommonType = {
    location?: CoordinateCommonType;
    formattedAddress?: string;
    business?: string;
    cityCode?: string;
    addressComponent?: AddressCommonType;
    pois?: PoiCommonType[];
    poiRegions?: PoiRegionCommonType[];
    roads?: RoadCommonType[];
    sematicDescription?: string;
};

/**
 * 路况详情
 * @params status {number} 路况
 * @params geoCnt {number} 路段数
 */
type TrafficConditionDetailEntityCommonType = {
    status?: number;
    geoCnt?: number;
};

/**
 * 驾车路径分段
 * @params legIndex {number} 途径点序号为从0开始的整数，用于标识step所属的途径点路段 如：若该step属于起点至第一个途径中的路段，则其leg_index为0
 * @params turn {number} 机动转向点，包括基准八个方向、环岛、分歧等 代表的含义是：        0：无效         1：直行        2：右前方转弯    3：右转         4：右后方转弯   5：掉头        6：左后方转弯   7：左转        8：左前方转弯   9：左侧         10：右侧        11：分歧-左     12：分歧中央    13：分歧右      14：环岛       15：进渡口      16：出渡口
 * @params roadType {number} 分段的道路类型 road_types取值范围： 0：高速路            1：城市高速路        2: 国道              3：省道              4：县道              5：乡镇村道          6：其他道路          7：九级路            8：航线(轮渡)        9：行人道路
 * @params roadTypes {string} 路段途径的道路类型列表 若途经多个路段类别，将用英文逗号","分隔，如： - 该路段依次途经国道和省道两种道路类型，则road_types:"2,3" road_types取值范围： 0：高速路             1：城市高速路         2: 国道               3：省道               4：县道               5：乡镇村道           6：其他道路           7：九级路             8：航线(轮渡)         9：行人道路
 * @params trafficCondition {TrafficConditionDetailEntityCommonType[]} 该路段的路况详情
 * @params direction {number} 进入道路的角度
 * @params distance {string} 路段距离(米)
 * @params duration {string} 路段耗时(秒)
 * @params instructions {string} 路段描述
 * @params path {string} 路段位置坐标描述
 * @params startLocation {CoordinateCommonType} 路段起点经纬度
 * @params endLocation {CoordinateCommonType} 路段终点经纬度
 */
type DrivingStepEntityCommonType = {
    legIndex?: number;
    turn?: number;
    roadType?: number;
    roadTypes?: string;
    trafficCondition?: TrafficConditionDetailEntityCommonType[];
    direction?: number;
    distance?: string;
    duration?: string;
    instructions?: string;
    path?: string;
    startLocation?: CoordinateCommonType;
    endLocation?: CoordinateCommonType;
};

/**
 * 驾车路径规划
 * @params toll {number} 过路费
 * @params trafficCondition {number} 路线的整体路况评价 取值范围 0： 无路况 1： 畅通 2： 缓行 3： 拥堵 4： 严重拥堵
 * @params steps {DrivingStepEntityCommonType[]} 步骤
 * @params distance {number} 方案距离(米)
 * @params duration {number} 线路耗时(秒)
 */
type DrivingRoutesEntityCommonType = {
    toll?: number;
    trafficCondition?: number;
    steps?: DrivingStepEntityCommonType[];
    distance?: number;
    duration?: number;
};

/**
 * 驾车路径导航返回实体
 * @params origin {CoordinateCommonType} 起点城市信息
 * @params destination {CoordinateCommonType} 终点城市信息
 * @params routes {DrivingRoutesEntityCommonType[]} 路径
 */
type DrivingNavigationOutCommonType = {
    origin?: CoordinateCommonType;
    destination?: CoordinateCommonType;
    routes?: DrivingRoutesEntityCommonType[];
};

/**
 * 步行路径规划分段
 * @params direction {number} 进入道路的角度
 * @params distance {string} 路段距离(米)
 * @params duration {string} 路段耗时(秒)
 * @params instructions {string} 路段描述
 * @params path {string} 路段位置坐标描述
 * @params startLocation {CoordinateCommonType} 路段起点经纬度
 * @params endLocation {CoordinateCommonType} 路段终点经纬度
 */
type WalkingStepEntityCommonType = {
    direction?: number;
    distance?: string;
    duration?: string;
    instructions?: string;
    path?: string;
    startLocation?: CoordinateCommonType;
    endLocation?: CoordinateCommonType;
};

/**
 * 步行路径规划路线
 * @params steps {WalkingStepEntityCommonType[]} 步骤
 * @params distance {number} 方案距离(米)
 * @params duration {number} 线路耗时(秒)
 */
type WalkingRoutesEntityCommonType = {
    steps?: WalkingStepEntityCommonType[];
    distance?: number;
    duration?: number;
};

/**
 * 步行路径规划返回实体
 * @params origin {CoordinateCommonType} 起点坐标点
 * @params destination {CoordinateCommonType} 终点坐标点
 * @params routes {WalkingRoutesEntityCommonType[]} 路径
 */
type WalkingNavigationOutCommonType = {
    origin?: CoordinateCommonType;
    destination?: CoordinateCommonType;
    routes?: WalkingRoutesEntityCommonType[];
};

/**
 * 骑行路径规划路线分段
 * @params name {string} 道路名称
 * @params turnType {string} 行驶转向方向
 * @params direction {number} 进入道路的角度
 * @params distance {string} 路段距离(米)
 * @params duration {string} 路段耗时(秒)
 * @params instructions {string} 路段描述
 * @params path {string} 路段位置坐标描述
 * @params startLocation {CoordinateCommonType} 路段起点经纬度
 * @params endLocation {CoordinateCommonType} 路段终点经纬度
 */
type RidingStepEntityCommonType = {
    name?: string;
    turnType?: string;
    direction?: number;
    distance?: string;
    duration?: string;
    instructions?: string;
    path?: string;
    startLocation?: CoordinateCommonType;
    endLocation?: CoordinateCommonType;
};

/**
 * 骑行路径规划返回结果集
 * @params steps {RidingStepEntityCommonType[]} 返回的方案集
 * @params distance {number} 方案距离(米)
 * @params duration {number} 线路耗时(秒)
 */
type RidingRoutesEntityCommonType = {
    steps?: RidingStepEntityCommonType[];
    distance?: number;
    duration?: number;
};

/**
 * 骑行路径规划返回实体
 * @params origin {CoordinateCommonType} 起点坐标点
 * @params destination {CoordinateCommonType} 终点坐标点
 * @params routes {RidingRoutesEntityCommonType[]} 路径
 */
type RidingNavigationOutCommonType = {
    origin?: CoordinateCommonType;
    destination?: CoordinateCommonType;
    routes?: RidingRoutesEntityCommonType[];
};

/**
 * POI点检索详细信息接口
 * @params distance {string} 距离中心点的距离，圆形区域检索时返回
 * @params type {string} 所属分类
 * @params tag {string} 标签
 * @params detailUrl {string} poi的详情页
 * @params naviLocation {CoordinateCommonType} poi的导航点坐标（一般为出入口）
 * @params price {string} poi商户的价格
 * @params shopHours {string} 营业时间
 * @params overallRating {string} 总体评分
 * @params tasteRating {string} 口味评分
 * @params serviceRating {string} 服务评分
 * @params environmentRating {string} 环境评分
 * @params facilityRating {string} 星级（设备）评分
 * @params hygieneRating {string} 卫生评分
 * @params technologyRating {string} 技术评分
 * @params imageNum {string} 图片数
 * @params grouponNum {string} 团购数
 * @params discountNum {string} 优惠数
 * @params commentNum {string} 评论数
 * @params favoriteNum {string} 收藏数
 * @params checkinNum {string} 签到数
 */
type DetailInfoCommonType = {
    distance?: string;
    type?: string;
    tag?: string;
    detailUrl?: string;
    naviLocation?: CoordinateCommonType;
    price?: string;
    shopHours?: string;
    overallRating?: string;
    tasteRating?: string;
    serviceRating?: string;
    environmentRating?: string;
    facilityRating?: string;
    hygieneRating?: string;
    technologyRating?: string;
    imageNum?: string;
    grouponNum?: string;
    discountNum?: string;
    commentNum?: string;
    favoriteNum?: string;
    checkinNum?: string;
};

/**
 * 矩形区域 Poi 返回实体
 * @params name {string} poi名称
 * @params location {CoordinateCommonType} poi经纬度坐标
 * @params province {string} 省
 * @params city {string} 市
 * @params address {string} poi地址信息
 * @params telephone {string} poi电话信息
 * @params uid {string} poi的唯一标示
 * @params streetId {string} 街景图id
 * @params detail {string} 是否有详情页
 * @params detailInfo {DetailInfoCommonType} poi的扩展信息，仅当scope=2时，显示该字段，不同的poi类型，显示的detail_info字段不同。
 */
type RectanglePoiOutCommonType = {
    name?: string;
    location?: CoordinateCommonType;
    province?: string;
    city?: string;
    address?: string;
    telephone?: string;
    uid?: string;
    streetId?: string;
    detail?: string;
    detailInfo?: DetailInfoCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {RectanglePoiOutCommonType[]} 记录
 */
type RectanglePoiOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: RectanglePoiOutCommonType[];
};

/**
 * 地点输入提示返回实体
 * @params name {string} poi名称
 * @params location {CoordinateCommonType} poi经纬度坐标
 * @params uid {string} poi的唯一标示，ID
 * @params city {string} 城市
 * @params district {string} 区县
 * @params business {string} 商业区
 */
type PlaceSuggestionOutCommonType = {
    name?: string;
    location?: CoordinateCommonType;
    uid?: string;
    city?: string;
    district?: string;
    business?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {PlaceSuggestionOutCommonType[]} 记录
 */
type PlaceSuggestionOutPageableQueryResultCommonType = {
    totalCount?: number;
    records?: PlaceSuggestionOutCommonType[];
};

----

/**
 * 获取Buildings数据——请求参数类型定义
 * @params Longitude {number} 经度 （必填）
 * @params Latitude {number} 纬度 （必填）
 * @params CityCode {string} 城市代号 默认：518000 （必填）
 * @params MaxDistance {number} 最大距离(米) 默认：50 （必填）
 */
export type GetBuildingsReqType = {
    Longitude: number;
    Latitude: number;
    CityCode: string;
    MaxDistance: number;
};

/**
 * 获取Buildings数据——响应参数类型定义
 * @params id {string} Id
 * @params type {string} 类型
 * @params properties {PropertiesCommonType} 属性
 * @params geometry {GeometryCommonType} 图形
 * @params center {any[]} 中心点
 * @params maxRadius {number} 最大半径
 */
export type GetBuildingsResType = {
    id: string;
    type: string;
    properties: PropertiesCommonType;
    geometry: GeometryCommonType;
    center: any[];
    maxRadius: number;
};

/**
 * 获取地理编码数据——请求参数类型定义
 * @params Address {string} 待解析的地址 最多支持84个字节。可以输入两种样式的值，分别是：  1、标准的结构化地址信息，如北京市海淀区上地十街十号 【推荐，地址结构越完整，解析精度越高】2、支持“*路与*路交叉口”描述方式，如北一环路和阜阳路的交叉路口 第二种方式并不总是有返回结果，只有当地址库中存在该地址描述时才有返回。 （必填）
 * @params City {string} 地址所在的城市名 用于指定上述地址所在的城市，当多个城市都有上述地址时，该参数起到过滤作用，但不限制坐标召回城市。
 */
export type GetGeocodingReqType = {
    Address: string;
    City?: string;
};

/**
 * 获取地理编码数据——响应参数类型定义
 * @params location {CoordinateCommonType} 经纬度坐标
 * @params precise {number} 位置的附加信息，是否精确查找。1为精确查找，即准确打点；0为不精确，即模糊打点。
 * @params confidence {number} 描述打点绝对精度（即坐标点的误差范围）
 * @params level {string} 能精确理解的地址类型 包含：UNKNOWN、国家、省、城市、区县、乡镇、村庄、道路、地产小区、商务大厦、   政府机构、交叉路口、商圈、生活服务、休闲娱乐、餐饮、宾馆、购物、金融、教育、   医疗 、工业园区 、旅游景点 、汽车服务、火车站、长途汽车站、桥 、停车场/停车区、港口/码头、收费区/收费站、飞机场 、机场 、收费处/收费站 、加油站、绿地、门址
 */
export type GetGeocodingResType = {
    location: CoordinateCommonType;
    precise: number;
    confidence: number;
    level: string;
};

/**
 * 获取逆地理编码数据——请求参数类型定义
 * @params Location.Longitude {number} 经度
 * @params Location.Latitude {number} 纬度
 * @params ExtensionsPoi {string} 底层调用poi开关 extensions_poi=0，不召回pois数据。 extensions_poi=1，返回pois数据，默认显示周边1000米内的poi。
 * @params ExtensionsRoad {string} 取值为true时召回坐标周围最近3条道路数据
 * @params ExtensionTown {string} 当取值为true时，行政区划返回乡镇级数据（仅国内召回乡镇数据）。默认不访问。
 * @params PoiTypes {string} 可以选择poi类型召回不同类型的poi，例如poi_types=酒店，如想召回多个POI类型数据，可以‘|’分割
 * @params Radius {string} poi召回半径poi召回半径，允许设置区间为0-1000米
 */
export type GetGeocodingReverseReqType = {
    Location?: CoordinateCommonType;
    ExtensionsPoi?: string;
    ExtensionsRoad?: string;
    ExtensionTown?: string;
    PoiTypes?: string;
    Radius?: string;
};

/**
 * 获取逆地理编码数据——响应参数类型定义
 * @params location {CoordinateCommonType} 经纬度坐标
 * @params formattedAddress {string} 结构化地址信息 如：北京市海淀区中关村大街27号1101-08室
 * @params business {string} 坐标所在商圈信息 如 "人民大学,中关村,苏州街"。最多返回3个。
 * @params cityCode {string} 城市id
 * @params addressComponent {AddressCommonType} 地址成分
 * @params pois {PoiCommonType[]} 周边poi
 * @params poiRegions {PoiRegionCommonType[]} Poi 区域信息
 * @params roads {RoadCommonType[]} 周边道路
 * @params sematicDescription {string} 当前位置结合POI的语义化结果描述。如：中关村大厦内,中国建设银行(中关村支行)附近31米
 */
export type GetGeocodingReverseResType = {
    location: CoordinateCommonType;
    formattedAddress: string;
    business: string;
    cityCode: string;
    addressComponent: AddressCommonType;
    pois: PoiCommonType[];
    poiRegions: PoiRegionCommonType[];
    roads: RoadCommonType[];
    sematicDescription: string;
};

/**
 * 驾车路线规划——请求参数类型定义
 * @params WayPoints {string} 途径点. 支持5个以内的有序途径点（纬度,经度）。多个途径点坐标按顺序以英文竖线符号分隔。如：40.465,116.314|40.232,116.352|40.121,116.453
 * @params Tactics {number} 导航策略 0：常规路线，即多数用户常走的一条经验路线，满足大多数场景需求，是较推荐的一个策略 1：不走高速 2：躲避拥堵 3：距离较短
 * @params GpsDirection {number} 起点的定位方向 【EGIS无效】车头方向为与正北方向顺时针夹角，取值范围[0,359]。该参数用于辅助判断起点所在正逆向车道，提高算路准确率。当speed>1.5米/秒且gps_direction存在时，采用该方向。gps_direction并不代表需填写从gps获取的方向，可以填入校正后的方向。请填写尽量准确的方向，其准确性很大程度决定了计算的精度。
 * @params Radius {number} 起点的定位精度 【EGIS无效】配合gps_direction字段使用，取值范围[0,2000]
 * @params Speed {number} 起点车辆的行驶速度 【EGIS无效】配合gps_direction字段使用，单位：米/秒 当speed>1.5米/秒且gps_direction存在时，采用gps_direction的方向
 * @params OriginLocation.Longitude {number} 经度
 * @params OriginLocation.Latitude {number} 纬度
 * @params DestinationLocation.Longitude {number} 经度
 * @params DestinationLocation.Latitude {number} 纬度
 */
export type GetDrivingNavigationReqType = {
    WayPoints?: string;
    Tactics?: number;
    GpsDirection?: number;
    Radius?: number;
    Speed?: number;
    OriginLocation?: CoordinateCommonType;
    DestinationLocation?: CoordinateCommonType;
};

/**
 * 驾车路线规划——响应参数类型定义
 * @params origin {CoordinateCommonType} 起点城市信息
 * @params destination {CoordinateCommonType} 终点城市信息
 * @params routes {DrivingRoutesEntityCommonType[]} 路径
 */
export type GetDrivingNavigationResType = {
    origin: CoordinateCommonType;
    destination: CoordinateCommonType;
    routes: DrivingRoutesEntityCommonType[];
};

/**
 * 步行路线规划——请求参数类型定义
 * @params OriginLocation.Longitude {number} 经度
 * @params OriginLocation.Latitude {number} 纬度
 * @params DestinationLocation.Longitude {number} 经度
 * @params DestinationLocation.Latitude {number} 纬度
 */
export type GetWalkingNavigationReqType = {
    OriginLocation?: CoordinateCommonType;
    DestinationLocation?: CoordinateCommonType;
};

/**
 * 步行路线规划——响应参数类型定义
 * @params origin {CoordinateCommonType} 起点坐标点
 * @params destination {CoordinateCommonType} 终点坐标点
 * @params routes {WalkingRoutesEntityCommonType[]} 路径
 */
export type GetWalkingNavigationResType = {
    origin: CoordinateCommonType;
    destination: CoordinateCommonType;
    routes: WalkingRoutesEntityCommonType[];
};

/**
 * 骑行路径规划——请求参数类型定义
 * @params RidingType {number} 骑行类型0：普通自行车，默认为普通自行车1：电动自行车
 * @params OriginLocation.Longitude {number} 经度
 * @params OriginLocation.Latitude {number} 纬度
 * @params DestinationLocation.Longitude {number} 经度
 * @params DestinationLocation.Latitude {number} 纬度
 */
export type GetRidingNavigationReqType = {
    RidingType?: number;
    OriginLocation?: CoordinateCommonType;
    DestinationLocation?: CoordinateCommonType;
};

/**
 * 骑行路径规划——响应参数类型定义
 * @params origin {CoordinateCommonType} 起点坐标点
 * @params destination {CoordinateCommonType} 终点坐标点
 * @params routes {RidingRoutesEntityCommonType[]} 路径
 */
export type GetRidingNavigationResType = {
    origin: CoordinateCommonType;
    destination: CoordinateCommonType;
    routes: RidingRoutesEntityCommonType[];
};

/**
 * 获取Poi数据(经纬度范围默认全国)——请求参数类型定义
 * @params LeftBottomLocation.Longitude {number} 经度
 * @params LeftBottomLocation.Latitude {number} 纬度
 * @params RightTopLocation.Longitude {number} 经度
 * @params RightTopLocation.Latitude {number} 纬度
 * @params Query {string} 检索关键字，多个分类以","分隔。 如：天安门,美食 （必填）
 * @params Tag {string} 标签项，多个分类以","分隔。如：美食,酒店【EGIS无效】
 * @params Scope {number} 检索结果详细程度，取值为1，则返回基本信息；取值为2，返回检索POI详细信息 默认：1 （必填）
 * @params Filter {string} 检索过滤条件取值为1 或空，则返回基本信息；取值为2，返回检索POI详细信息【EGIS无效】
 * @params page {number} 页码, 从1开始。多关键字检索时，返回的记录数为关键字个数*page_size。 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetPoiReqType = {
    LeftBottomLocation?: CoordinateCommonType;
    RightTopLocation?: CoordinateCommonType;
    Query: string;
    Tag?: string;
    Scope: number;
    Filter?: string;
    page?: number;
    per_page?: number;
};

/**
 * 获取Poi数据(经纬度范围默认全国)——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {RectanglePoiOutCommonType[]} 记录
 */
export type GetPoiResType = {
    totalCount: number;
    records: RectanglePoiOutCommonType[];
};

/**
 * 获取地理输入建议——请求参数类型定义
 * @params Query {string} 检索关键字 如：上地、天安、中关、shanghai （必填）
 * @params Region {string} 全国、省、城市及对应百度编码  如：全国、北京市、131、江苏省等  （必填）
 * @params CityLimit {string} 是否只对 region 中的城市进行检索取值为"true"，仅返回region中指定城市检索结果；取值为"false"或为空时，返回region中指定城市及其外检索结果
 * @params Location.Longitude {number} 经度
 * @params Location.Latitude {number} 纬度
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetPlaceSuggestionReqType = {
    Query: string;
    Region: string;
    CityLimit?: string;
    Location?: CoordinateCommonType;
    page?: number;
    per_page?: number;
};

/**
 * 获取地理输入建议——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PlaceSuggestionOutCommonType[]} 记录
 */
export type GetPlaceSuggestionResType = {
    totalCount: number;
    records: PlaceSuggestionOutCommonType[];
};
