/**
 * 泄露方式
 */
type LeakageMethodCommonType = 0 | 1;

/**
 * 泄露点方式
 */
type LeakPointTypeCommonType = 0 | 1 | 2 | 3;

/**
 * 模型请求参数
 * @params time {string} 时间点
 * @params hour {number} 时间范围
 * @params gasResourceId {string} 气体ID
 * @params leakageMethod {LeakageMethodCommonType} 泄露方式
 * @params leakPointType {LeakPointTypeCommonType} 泄露点方式
 * @params containerPressure {number} 容器压力  KPA
 * @params containerTemperature {number} 容器温度 °C
 * @params containerLeakageDiameter {number} 泄漏点直径单位米
 * @params radius {number} 计算半径单位：KM
 * @params resolution {number} 分辨率大小
 * @params view {number} 基本描述：决定模型要计算的切面、是否要使用pyplot画简易结果图。默认值为NO_PLOT。PLAN_VIEW=1： 计算x-y面(横切面),并将每小时的输出画图,储存在output文件夹。HEIGHT_SLICE=2: 计算y-z面(纵切面)，并将每小时的输出画图,储存在output文件夹。SURFACE_TIME=3: 计算某个点(x, y)的时序数据。NO_PLOT=4: 计算x-y面(横切面),且不画图。
 * @params windSource {number} 何种方式获取风速数据CONSTANT_WIND=1FLUCTUATING_WIND=2PREVAILING_WIND=3REAL_WIND=4SHOW_WIND=5
 * @params stabilitySource {number} 何种方式获取大气稳定性CONSTANT_STABILITY = 1ANNUAL_CYCLE = 2REAL_STABILITY = 3
 * @params verticalStability {number} 大气稳定性的取值VERY_UNSTABLE = 1MODERATELY_UNSTABLE =2SLIGHTLY_UNSTABLE =3NEUTRAL= 4MODERATELY_STABLE = 5VERY_STABLE = 6REAL_VERTICAL_STABILITY = 7
 * @params stackNumber {number} 要计算的储罐数量,目前服务端写死为1
 * @params stackX {any[]} 每个储罐的相对坐标x, 用list传入, 例如：[0.0,1000.0,-200.0],目前服务端写死
 * @params stackY {any[]} 每个储罐的相对坐标x, 用list传入, 例如：[0., 250., -500.],目前服务端写死
 * @params stackH {any[]} 储罐的高度,单位m,服务端暂时写死。后续要通过读取预案等方式获取数据
 * @params humidify {number} 湿度情况DRY_AEROSOL=1HUMIDIFY=2
 * @params radiusZ {number} 计算空间的z轴高度,Z轴坐标范围为0~radius_z
 * @params xSlice {number} 目前不支持通过矢状面计算! 目前服务端写死。使用矢状面模式(view=HEIGHT_SLICE)计算时，矢状面切入的x坐标。理论上，对x_slice = x[i]进行遍历计算，可得该时间点的三维浓度数据
 * @params zSlice {number} 输出面的高度。目前服务端写死等于储罐高度(stack_H)。使用横切面模式(view=PLAN_VIEW 或 NO_PLOT)时，决定输出横切面的z坐标。
 * @params resolutionZ {number} y-z空间的分辨率。决定y-z平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。目前没有使用此参数。
 * @params resolutionXy {number} x-y空间的分辨率。决定x-y平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。当前方案采用15000,由前端传参
 * @params startIndex {number} 开始索引
 * @params endIndex {number} 结束索引
 * @params isClearZero {boolean} 是否清除value为0的值
 */
type AnalysisGaussianPlumeRequestCommonType = {
    time?: string;
    hour: number;
    gasResourceId?: string;
    leakageMethod?: LeakageMethodCommonType;
    leakPointType?: LeakPointTypeCommonType;
    containerPressure?: number;
    containerTemperature?: number;
    containerLeakageDiameter?: number;
    radius: number;
    resolution?: number;
    view?: number;
    windSource?: number;
    stabilitySource?: number;
    verticalStability?: number;
    stackNumber?: number;
    stackX?: any[];
    stackY?: any[];
    stackH?: any[];
    humidify?: number;
    radiusZ?: number;
    xSlice?: number;
    zSlice?: number;
    resolutionZ?: number;
    resolutionXy?: number;
    startIndex?: number;
    endIndex?: number;
    isClearZero?: boolean;
};

/**
 * 气体浓度输出
 * @params x {number} 坐标轴X
 * @params y {number} 坐标轴Y
 * @params value {number} 数值
 */
type GasConcentrationCommonType = {
    x?: number;
    y?: number;
    value?: number;
};

/**
 *
 * @params time {string} 时间点
 * @params hour {number} 时间范围
 * @params gasResourceId {string} 气体ID
 * @params leakageMethod {LeakageMethodCommonType} 泄露方式
 * @params leakPointType {LeakPointTypeCommonType} 泄露点方式
 * @params containerPressure {number} 容器压力  KPA
 * @params containerTemperature {number} 容器温度 °C
 * @params containerLeakageDiameter {number} 泄漏点直径单位米
 * @params radius {number} 计算半径单位：KM
 * @params resolution {number} 分辨率大小
 * @params view {number} 基本描述：决定模型要计算的切面、是否要使用pyplot画简易结果图。默认值为NO_PLOT。PLAN_VIEW=1： 计算x-y面(横切面),并将每小时的输出画图,储存在output文件夹。HEIGHT_SLICE=2: 计算y-z面(纵切面)，并将每小时的输出画图,储存在output文件夹。SURFACE_TIME=3: 计算某个点(x, y)的时序数据。NO_PLOT=4: 计算x-y面(横切面),且不画图。
 * @params windSource {number} 何种方式获取风速数据CONSTANT_WIND=1FLUCTUATING_WIND=2PREVAILING_WIND=3REAL_WIND=4SHOW_WIND=5
 * @params stabilitySource {number} 何种方式获取大气稳定性CONSTANT_STABILITY = 1ANNUAL_CYCLE = 2REAL_STABILITY = 3
 * @params verticalStability {number} 大气稳定性的取值VERY_UNSTABLE = 1MODERATELY_UNSTABLE =2SLIGHTLY_UNSTABLE =3NEUTRAL= 4MODERATELY_STABLE = 5VERY_STABLE = 6REAL_VERTICAL_STABILITY = 7
 * @params stackNumber {number} 要计算的储罐数量,目前服务端写死为1
 * @params stackX {any[]} 每个储罐的相对坐标x, 用list传入, 例如：[0.0,1000.0,-200.0],目前服务端写死
 * @params stackY {any[]} 每个储罐的相对坐标x, 用list传入, 例如：[0., 250., -500.],目前服务端写死
 * @params stackH {any[]} 储罐的高度,单位m,服务端暂时写死。后续要通过读取预案等方式获取数据
 * @params humidify {number} 湿度情况DRY_AEROSOL=1HUMIDIFY=2
 * @params radiusZ {number} 计算空间的z轴高度,Z轴坐标范围为0~radius_z
 * @params xSlice {number} 目前不支持通过矢状面计算! 目前服务端写死。使用矢状面模式(view=HEIGHT_SLICE)计算时，矢状面切入的x坐标。理论上，对x_slice = x[i]进行遍历计算，可得该时间点的三维浓度数据
 * @params zSlice {number} 输出面的高度。目前服务端写死等于储罐高度(stack_H)。使用横切面模式(view=PLAN_VIEW 或 NO_PLOT)时，决定输出横切面的z坐标。
 * @params resolutionZ {number} y-z空间的分辨率。决定y-z平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。目前没有使用此参数。
 * @params resolutionXy {number} x-y空间的分辨率。决定x-y平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。当前方案采用15000,由前端传参
 * @params startIndex {number} 开始索引
 * @params endIndex {number} 结束索引
 * @params isClearZero {boolean} 是否清除value为0的值
 * @params nowHour {number} 当前小时
 * @params lastHour {number} 上次的小时
 */
type AnalysisDiffusionAreaRequestCommonType = {
    time?: string;
    hour: number;
    gasResourceId?: string;
    leakageMethod?: LeakageMethodCommonType;
    leakPointType?: LeakPointTypeCommonType;
    containerPressure?: number;
    containerTemperature?: number;
    containerLeakageDiameter?: number;
    radius: number;
    resolution?: number;
    view?: number;
    windSource?: number;
    stabilitySource?: number;
    verticalStability?: number;
    stackNumber?: number;
    stackX?: any[];
    stackY?: any[];
    stackH?: any[];
    humidify?: number;
    radiusZ?: number;
    xSlice?: number;
    zSlice?: number;
    resolutionZ?: number;
    resolutionXy?: number;
    startIndex?: number;
    endIndex?: number;
    isClearZero?: boolean;
    nowHour: number;
    lastHour: number;
};

/**
 * 扩散面积输出
 * @params lowerArea {any[]} 低影响面积
 * @params middleArea {any[]} 低影响面积
 * @params heightArea {any[]} 低影响面积
 */
type DiffusionAreaOutCommonType = {
    lowerArea?: any[];
    middleArea?: any[];
    heightArea?: any[];
};

/**
 * 蒸汽云爆炸模型请求参数
 * @params totalFuelMass {number} 燃料总质量
 * @params combustibleGasesCombustionHeat {number} 可燃气体燃烧热
 * @params groundExplosionFactor {number} 地面爆炸系数
 * @params tntEquivalentFactor {number} TNT当量系数
 * @params tntExplosiveHeat {number} TNT爆热
 * @params environmentalPressure {number} 环境压力
 * @params degreeBuildingDamage {number} 建筑破坏程度
 */
type VaporCloudExplosionRequestCommonType = {
    totalFuelMass?: number;
    combustibleGasesCombustionHeat?: number;
    groundExplosionFactor?: number;
    tntEquivalentFactor?: number;
    tntExplosiveHeat?: number;
    environmentalPressure?: number;
    degreeBuildingDamage?: number;
};

/**
 * 蒸汽云爆炸模型结果
 * @params deathRadius {number} 死亡区半径
 * @params severeWoundRadius {number} 重伤区半径
 * @params slightWoundRadius {number} 轻伤区半径
 * @params buildingDamageRadius {number} 建筑受损半径
 */
type VaporCloudExplosionOutCommonType = {
    deathRadius?: number;
    severeWoundRadius?: number;
    slightWoundRadius?: number;
    buildingDamageRadius?: number;
};

/**
 * 气体输出数据
 * @params id {string} ID
 * @params resourceId {string} 资源ID
 * @params name {string} 名称
 * @params chemicalName {string} 化学名称
 * @params gasCharacteristic {any[]} 化学性质
 * @params concentrations {any[]} 浓度范围
 */
type GasOutCommonType = {
    id?: string;
    resourceId?: string;
    name?: string;
    chemicalName?: string;
    gasCharacteristic?: any[];
    concentrations?: any[];
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

----

/**
 * 计算高斯烟羽模型——请求参数类型定义
 * @headers X-version {string}
 * @params time {string} 时间点
 * @params hour {number} 时间范围 （必填）
 * @params gasResourceId {string} 气体ID
 * @params leakageMethod {LeakageMethodCommonType} 泄露方式
 * @params leakPointType {LeakPointTypeCommonType} 泄露点方式
 * @params containerPressure {number} 容器压力  KPA
 * @params containerTemperature {number} 容器温度 °C
 * @params containerLeakageDiameter {number} 泄漏点直径单位米
 * @params radius {number} 计算半径单位：KM （必填）
 * @params resolution {number} 分辨率大小
 * @params view {number} 基本描述：决定模型要计算的切面、是否要使用pyplot画简易结果图。默认值为NO_PLOT。PLAN_VIEW=1： 计算x-y面(横切面),并将每小时的输出画图,储存在output文件夹。HEIGHT_SLICE=2: 计算y-z面(纵切面)，并将每小时的输出画图,储存在output文件夹。SURFACE_TIME=3: 计算某个点(x, y)的时序数据。NO_PLOT=4: 计算x-y面(横切面),且不画图。
 * @params windSource {number} 何种方式获取风速数据CONSTANT_WIND=1FLUCTUATING_WIND=2PREVAILING_WIND=3REAL_WIND=4SHOW_WIND=5
 * @params stabilitySource {number} 何种方式获取大气稳定性CONSTANT_STABILITY = 1ANNUAL_CYCLE = 2REAL_STABILITY = 3
 * @params verticalStability {number} 大气稳定性的取值VERY_UNSTABLE = 1MODERATELY_UNSTABLE =2SLIGHTLY_UNSTABLE =3NEUTRAL= 4MODERATELY_STABLE = 5VERY_STABLE = 6REAL_VERTICAL_STABILITY = 7
 * @params stackNumber {number} 要计算的储罐数量,目前服务端写死为1
 * @params stackX {any[]} 每个储罐的相对坐标x, 用list传入, 例如：[0.0,1000.0,-200.0],目前服务端写死
 * @params stackY {any[]} 每个储罐的相对坐标x, 用list传入, 例如：[0., 250., -500.],目前服务端写死
 * @params stackH {any[]} 储罐的高度,单位m,服务端暂时写死。后续要通过读取预案等方式获取数据
 * @params humidify {number} 湿度情况DRY_AEROSOL=1HUMIDIFY=2
 * @params radiusZ {number} 计算空间的z轴高度,Z轴坐标范围为0~radius_z
 * @params xSlice {number} 目前不支持通过矢状面计算! 目前服务端写死。使用矢状面模式(view=HEIGHT_SLICE)计算时，矢状面切入的x坐标。理论上，对x_slice = x[i]进行遍历计算，可得该时间点的三维浓度数据
 * @params zSlice {number} 输出面的高度。目前服务端写死等于储罐高度(stack_H)。使用横切面模式(view=PLAN_VIEW 或 NO_PLOT)时，决定输出横切面的z坐标。
 * @params resolutionZ {number} y-z空间的分辨率。决定y-z平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。目前没有使用此参数。
 * @params resolutionXy {number} x-y空间的分辨率。决定x-y平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。当前方案采用15000,由前端传参
 * @params startIndex {number} 开始索引
 * @params endIndex {number} 结束索引
 * @params isClearZero {boolean} 是否清除value为0的值
 */
export type GetAnalysisGaussianPlumeDataReqType = {
    'X-version'?: string;
    time?: string;
    hour: number;
    gasResourceId?: string;
    leakageMethod?: LeakageMethodCommonType;
    leakPointType?: LeakPointTypeCommonType;
    containerPressure?: number;
    containerTemperature?: number;
    containerLeakageDiameter?: number;
    radius: number;
    resolution?: number;
    view?: number;
    windSource?: number;
    stabilitySource?: number;
    verticalStability?: number;
    stackNumber?: number;
    stackX?: any[];
    stackY?: any[];
    stackH?: any[];
    humidify?: number;
    radiusZ?: number;
    xSlice?: number;
    zSlice?: number;
    resolutionZ?: number;
    resolutionXy?: number;
    startIndex?: number;
    endIndex?: number;
    isClearZero?: boolean;
};

/**
 * 计算影响面积——请求参数类型定义
 * @headers X-version {string}
 * @params time {string} 时间点
 * @params hour {number} 时间范围 （必填）
 * @params gasResourceId {string} 气体ID
 * @params leakageMethod {LeakageMethodCommonType} 泄露方式
 * @params leakPointType {LeakPointTypeCommonType} 泄露点方式
 * @params containerPressure {number} 容器压力  KPA
 * @params containerTemperature {number} 容器温度 °C
 * @params containerLeakageDiameter {number} 泄漏点直径单位米
 * @params radius {number} 计算半径单位：KM （必填）
 * @params resolution {number} 分辨率大小
 * @params view {number} 基本描述：决定模型要计算的切面、是否要使用pyplot画简易结果图。默认值为NO_PLOT。PLAN_VIEW=1： 计算x-y面(横切面),并将每小时的输出画图,储存在output文件夹。HEIGHT_SLICE=2: 计算y-z面(纵切面)，并将每小时的输出画图,储存在output文件夹。SURFACE_TIME=3: 计算某个点(x, y)的时序数据。NO_PLOT=4: 计算x-y面(横切面),且不画图。
 * @params windSource {number} 何种方式获取风速数据CONSTANT_WIND=1FLUCTUATING_WIND=2PREVAILING_WIND=3REAL_WIND=4SHOW_WIND=5
 * @params stabilitySource {number} 何种方式获取大气稳定性CONSTANT_STABILITY = 1ANNUAL_CYCLE = 2REAL_STABILITY = 3
 * @params verticalStability {number} 大气稳定性的取值VERY_UNSTABLE = 1MODERATELY_UNSTABLE =2SLIGHTLY_UNSTABLE =3NEUTRAL= 4MODERATELY_STABLE = 5VERY_STABLE = 6REAL_VERTICAL_STABILITY = 7
 * @params stackNumber {number} 要计算的储罐数量,目前服务端写死为1
 * @params stackX {any[]} 每个储罐的相对坐标x, 用list传入, 例如：[0.0,1000.0,-200.0],目前服务端写死
 * @params stackY {any[]} 每个储罐的相对坐标x, 用list传入, 例如：[0., 250., -500.],目前服务端写死
 * @params stackH {any[]} 储罐的高度,单位m,服务端暂时写死。后续要通过读取预案等方式获取数据
 * @params humidify {number} 湿度情况DRY_AEROSOL=1HUMIDIFY=2
 * @params radiusZ {number} 计算空间的z轴高度,Z轴坐标范围为0~radius_z
 * @params xSlice {number} 目前不支持通过矢状面计算! 目前服务端写死。使用矢状面模式(view=HEIGHT_SLICE)计算时，矢状面切入的x坐标。理论上，对x_slice = x[i]进行遍历计算，可得该时间点的三维浓度数据
 * @params zSlice {number} 输出面的高度。目前服务端写死等于储罐高度(stack_H)。使用横切面模式(view=PLAN_VIEW 或 NO_PLOT)时，决定输出横切面的z坐标。
 * @params resolutionZ {number} y-z空间的分辨率。决定y-z平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。目前没有使用此参数。
 * @params resolutionXy {number} x-y空间的分辨率。决定x-y平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。当前方案采用15000,由前端传参
 * @params startIndex {number} 开始索引
 * @params endIndex {number} 结束索引
 * @params isClearZero {boolean} 是否清除value为0的值
 * @params nowHour {number} 当前小时 （必填）
 * @params lastHour {number} 上次的小时 （必填）
 */
export type GetAnalysisDiffusionAreaReqType = {
    'X-version'?: string;
    time?: string;
    hour: number;
    gasResourceId?: string;
    leakageMethod?: LeakageMethodCommonType;
    leakPointType?: LeakPointTypeCommonType;
    containerPressure?: number;
    containerTemperature?: number;
    containerLeakageDiameter?: number;
    radius: number;
    resolution?: number;
    view?: number;
    windSource?: number;
    stabilitySource?: number;
    verticalStability?: number;
    stackNumber?: number;
    stackX?: any[];
    stackY?: any[];
    stackH?: any[];
    humidify?: number;
    radiusZ?: number;
    xSlice?: number;
    zSlice?: number;
    resolutionZ?: number;
    resolutionXy?: number;
    startIndex?: number;
    endIndex?: number;
    isClearZero?: boolean;
    nowHour: number;
    lastHour: number;
};

/**
 * 计算影响面积——响应参数类型定义
 * @params lowerArea {any[]} 低影响面积
 * @params middleArea {any[]} 低影响面积
 * @params heightArea {any[]} 低影响面积
 */
export type GetAnalysisDiffusionAreaResType = {
    lowerArea: any[];
    middleArea: any[];
    heightArea: any[];
};

/**
 * 计算扩散趋势——请求参数类型定义
 * @headers X-version {string}
 * @params time {string} 时间点
 * @params hour {number} 时间范围 （必填）
 * @params gasResourceId {string} 气体ID
 * @params leakageMethod {LeakageMethodCommonType} 泄露方式
 * @params leakPointType {LeakPointTypeCommonType} 泄露点方式
 * @params containerPressure {number} 容器压力  KPA
 * @params containerTemperature {number} 容器温度 °C
 * @params containerLeakageDiameter {number} 泄漏点直径单位米
 * @params radius {number} 计算半径单位：KM （必填）
 * @params resolution {number} 分辨率大小
 * @params view {number} 基本描述：决定模型要计算的切面、是否要使用pyplot画简易结果图。默认值为NO_PLOT。PLAN_VIEW=1： 计算x-y面(横切面),并将每小时的输出画图,储存在output文件夹。HEIGHT_SLICE=2: 计算y-z面(纵切面)，并将每小时的输出画图,储存在output文件夹。SURFACE_TIME=3: 计算某个点(x, y)的时序数据。NO_PLOT=4: 计算x-y面(横切面),且不画图。
 * @params windSource {number} 何种方式获取风速数据CONSTANT_WIND=1FLUCTUATING_WIND=2PREVAILING_WIND=3REAL_WIND=4SHOW_WIND=5
 * @params stabilitySource {number} 何种方式获取大气稳定性CONSTANT_STABILITY = 1ANNUAL_CYCLE = 2REAL_STABILITY = 3
 * @params verticalStability {number} 大气稳定性的取值VERY_UNSTABLE = 1MODERATELY_UNSTABLE =2SLIGHTLY_UNSTABLE =3NEUTRAL= 4MODERATELY_STABLE = 5VERY_STABLE = 6REAL_VERTICAL_STABILITY = 7
 * @params stackNumber {number} 要计算的储罐数量,目前服务端写死为1
 * @params stackX {any[]} 每个储罐的相对坐标x, 用list传入, 例如：[0.0,1000.0,-200.0],目前服务端写死
 * @params stackY {any[]} 每个储罐的相对坐标x, 用list传入, 例如：[0., 250., -500.],目前服务端写死
 * @params stackH {any[]} 储罐的高度,单位m,服务端暂时写死。后续要通过读取预案等方式获取数据
 * @params humidify {number} 湿度情况DRY_AEROSOL=1HUMIDIFY=2
 * @params radiusZ {number} 计算空间的z轴高度,Z轴坐标范围为0~radius_z
 * @params xSlice {number} 目前不支持通过矢状面计算! 目前服务端写死。使用矢状面模式(view=HEIGHT_SLICE)计算时，矢状面切入的x坐标。理论上，对x_slice = x[i]进行遍历计算，可得该时间点的三维浓度数据
 * @params zSlice {number} 输出面的高度。目前服务端写死等于储罐高度(stack_H)。使用横切面模式(view=PLAN_VIEW 或 NO_PLOT)时，决定输出横切面的z坐标。
 * @params resolutionZ {number} y-z空间的分辨率。决定y-z平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。目前没有使用此参数。
 * @params resolutionXy {number} x-y空间的分辨率。决定x-y平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。当前方案采用15000,由前端传参
 * @params startIndex {number} 开始索引
 * @params endIndex {number} 结束索引
 * @params isClearZero {boolean} 是否清除value为0的值
 */
export type GetAnalysisDiffusionTrendReqType = {
    'X-version'?: string;
    time?: string;
    hour: number;
    gasResourceId?: string;
    leakageMethod?: LeakageMethodCommonType;
    leakPointType?: LeakPointTypeCommonType;
    containerPressure?: number;
    containerTemperature?: number;
    containerLeakageDiameter?: number;
    radius: number;
    resolution?: number;
    view?: number;
    windSource?: number;
    stabilitySource?: number;
    verticalStability?: number;
    stackNumber?: number;
    stackX?: any[];
    stackY?: any[];
    stackH?: any[];
    humidify?: number;
    radiusZ?: number;
    xSlice?: number;
    zSlice?: number;
    resolutionZ?: number;
    resolutionXy?: number;
    startIndex?: number;
    endIndex?: number;
    isClearZero?: boolean;
};

/**
 * 计算扩散趋势——响应参数类型定义
 * @params lowerArea {any[]} 低影响面积
 * @params middleArea {any[]} 低影响面积
 * @params heightArea {any[]} 低影响面积
 */
export type GetAnalysisDiffusionTrendResType = {
    lowerArea: any[];
    middleArea: any[];
    heightArea: any[];
};

/**
 * 计算蒸汽云爆炸模型的爆炸范围——请求参数类型定义
 * @headers X-version {string}
 * @params totalFuelMass {number} 燃料总质量
 * @params combustibleGasesCombustionHeat {number} 可燃气体燃烧热
 * @params groundExplosionFactor {number} 地面爆炸系数
 * @params tntEquivalentFactor {number} TNT当量系数
 * @params tntExplosiveHeat {number} TNT爆热
 * @params environmentalPressure {number} 环境压力
 * @params degreeBuildingDamage {number} 建筑破坏程度
 */
export type GetAnalysisVaporCloudExplosionReqType = {
    'X-version'?: string;
    totalFuelMass?: number;
    combustibleGasesCombustionHeat?: number;
    groundExplosionFactor?: number;
    tntEquivalentFactor?: number;
    tntExplosiveHeat?: number;
    environmentalPressure?: number;
    degreeBuildingDamage?: number;
};

/**
 * 计算蒸汽云爆炸模型的爆炸范围——响应参数类型定义
 * @params deathRadius {number} 死亡区半径
 * @params severeWoundRadius {number} 重伤区半径
 * @params slightWoundRadius {number} 轻伤区半径
 * @params buildingDamageRadius {number} 建筑受损半径
 */
export type GetAnalysisVaporCloudExplosionResType = {
    deathRadius: number;
    severeWoundRadius: number;
    slightWoundRadius: number;
    buildingDamageRadius: number;
};

/**
 * 演示CustomValidationException——请求参数类型定义
 * @params resourceId {string} resourceId （必填）
 * @headers X-version {string}
 */
export type ShowCustomValidationExceptionReqType = {
    resourceId: string;
    'X-version'?: string;
};

/**
 * 演示UnHandleException——请求参数类型定义
 * @params resourceId {string} resourceId （必填）
 * @headers X-version {string}
 */
export type ShowUnHandleExceptionReqType = {
    resourceId: string;
    'X-version'?: string;
};

/**
 * 演示ForbiddenException——请求参数类型定义
 * @params resourceId {string} resourceId （必填）
 * @headers X-version {string}
 */
export type ShowForbiddenExceptionReqType = {
    resourceId: string;
    'X-version'?: string;
};

/**
 * 分页请求气体信息数据——请求参数类型定义
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetGasV2ReqType = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 分页请求气体信息数据——响应参数类型定义
 * @params id {string} ID
 * @params resourceId {string} 资源ID
 * @params name {string} 名称
 * @params chemicalName {string} 化学名称
 * @params gasCharacteristic {any[]} 化学性质
 * @params concentrations {any[]} 浓度范围
 */
export type GetGasV2ResType = {
    id: string;
    resourceId: string;
    name: string;
    chemicalName: string;
    gasCharacteristic: any[];
    concentrations: any[];
};

/**
 * 根据资源Id返回单个气体信息——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetGasByIdV2ReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 根据资源Id返回单个气体信息——响应参数类型定义
 * @params id {string} ID
 * @params resourceId {string} 资源ID
 * @params name {string} 名称
 * @params chemicalName {string} 化学名称
 * @params gasCharacteristic {any[]} 化学性质
 * @params concentrations {any[]} 浓度范围
 */
export type GetGasByIdV2ResType = {
    id: string;
    resourceId: string;
    name: string;
    chemicalName: string;
    gasCharacteristic: any[];
    concentrations: any[];
};

/**
 * 根据气体名称返回单个气体信息——请求参数类型定义
 * @params name {string}  （必填）
 * @headers X-version {string}
 */
export type GetGasByNameReqType = {
    name: string;
    'X-version'?: string;
};

/**
 * 根据气体名称返回单个气体信息——响应参数类型定义
 * @params id {string} ID
 * @params resourceId {string} 资源ID
 * @params name {string} 名称
 * @params chemicalName {string} 化学名称
 * @params gasCharacteristic {any[]} 化学性质
 * @params concentrations {any[]} 浓度范围
 */
export type GetGasByNameResType = {
    id: string;
    resourceId: string;
    name: string;
    chemicalName: string;
    gasCharacteristic: any[];
    concentrations: any[];
};
