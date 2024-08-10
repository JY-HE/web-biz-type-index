/**
 * @description 计算高斯烟羽模型
 * @summary Request data types
 * @url [ post ] /api/Analysis/GetAnalysisGaussianPlumeData
 * @bizName modelAnalysisBiz
 */
export type PostAnalysisGetAnalysisGaussianPlumeDataReqTypeByMas = {
    'X-version'?: string;
    time?: string;
    hour: number;
    gasResourceId?: string;
    leakageMethod?: any;
    leakPointType?: any;
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
    stackX?: Array<number>;
    stackY?: Array<number>;
    stackH?: Array<number>;
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
 * @description 计算影响面积
 * @summary Request data types
 * @url [ post ] /api/Analysis/GetAnalysisDiffusionArea
 * @bizName modelAnalysisBiz
 */
export type PostAnalysisGetAnalysisDiffusionAreaReqTypeByMas = {
    'X-version'?: string;
    time?: string;
    hour: number;
    gasResourceId?: string;
    leakageMethod?: any;
    leakPointType?: any;
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
    stackX?: Array<number>;
    stackY?: Array<number>;
    stackH?: Array<number>;
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
 * @description 计算影响面积
 * @summary Response data types
 * @url [ post ] /api/Analysis/GetAnalysisDiffusionArea
 * @bizName modelAnalysisBiz
 */
export type PostAnalysisGetAnalysisDiffusionAreaResTypeByMas = {
    lowerArea: Array<number>;
    middleArea: Array<number>;
    heightArea: Array<number>;
};

/**
 * @description 计算扩散趋势
 * @summary Request data types
 * @url [ post ] /api/Analysis/GetAnalysisDiffusionTrend
 * @bizName modelAnalysisBiz
 */
export type PostAnalysisGetAnalysisDiffusionTrendReqTypeByMas = {
    'X-version'?: string;
    time?: string;
    hour: number;
    gasResourceId?: string;
    leakageMethod?: any;
    leakPointType?: any;
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
    stackX?: Array<number>;
    stackY?: Array<number>;
    stackH?: Array<number>;
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
 * @description 计算扩散趋势
 * @summary Response data types
 * @url [ post ] /api/Analysis/GetAnalysisDiffusionTrend
 * @bizName modelAnalysisBiz
 */
export type PostAnalysisGetAnalysisDiffusionTrendResTypeByMas = {
    lowerArea: Array<number>;
    middleArea: Array<number>;
    heightArea: Array<number>;
};

/**
 * @description 计算蒸汽云爆炸模型的爆炸范围
 * @summary Request data types
 * @url [ post ] /api/Analysis/AnalysisVaporCloudExplosion
 * @bizName modelAnalysisBiz
 */
export type PostAnalysisAnalysisVaporCloudExplosionReqTypeByMas = {
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
 * @description 计算蒸汽云爆炸模型的爆炸范围
 * @summary Response data types
 * @url [ post ] /api/Analysis/AnalysisVaporCloudExplosion
 * @bizName modelAnalysisBiz
 */
export type PostAnalysisAnalysisVaporCloudExplosionResTypeByMas = {
    deathRadius: number;
    severeWoundRadius: number;
    slightWoundRadius: number;
    buildingDamageRadius: number;
};

/**
 * @description 演示CustomValidationException
 * @summary Request data types
 * @url [ get ] /api/ExceptionDemo/{resourceId}
 * @bizName modelAnalysisBiz
 */
export type GetExceptionDemoResourceIdReqTypeByMas = {
    resourceId: string;
    'X-version'?: string;
};

/**
 * @description 演示UnHandleException
 * @summary Request data types
 * @url [ delete ] /api/ExceptionDemo/{resourceId}
 * @bizName modelAnalysisBiz
 */
export type DeleteExceptionDemoResourceIdReqTypeByMas = {
    resourceId: string;
    'X-version'?: string;
};

/**
 * @description 演示ForbiddenException
 * @summary Request data types
 * @url [ post ] /api/ExceptionDemo
 * @bizName modelAnalysisBiz
 */
export type PostExceptionDemoReqTypeByMas = {
    resourceId: string;
    'X-version'?: string;
};

/**
 * @description 分页请求气体信息数据
 * @summary Request data types
 * @url [ get ] /api/Gas
 * @bizName modelAnalysisBiz
 */
export type GetGasReqTypeByMas = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页请求气体信息数据
 * @summary Response data types
 * @url [ get ] /api/Gas
 * @bizName modelAnalysisBiz
 */
export type GetGasResTypeByMas = {
    id: string;
    resourceId: string;
    name: string;
    chemicalName: string;
    gasCharacteristic: Array<string>;
    concentrations: Array<number>;
};

/**
 * @description 根据资源Id返回单个气体信息
 * @summary Request data types
 * @url [ get ] /api/Gas/{id}
 * @bizName modelAnalysisBiz
 */
export type GetGasIdReqTypeByMas = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 根据资源Id返回单个气体信息
 * @summary Response data types
 * @url [ get ] /api/Gas/{id}
 * @bizName modelAnalysisBiz
 */
export type GetGasIdResTypeByMas = {
    id: string;
    resourceId: string;
    name: string;
    chemicalName: string;
    gasCharacteristic: Array<string>;
    concentrations: Array<number>;
};

/**
 * @description 根据气体名称返回单个气体信息
 * @summary Request data types
 * @url [ get ] /api/Gas/Name/{name}
 * @bizName modelAnalysisBiz
 */
export type GetGasNameNameReqTypeByMas = {
    name: string;
    'X-version'?: string;
};

/**
 * @description 根据气体名称返回单个气体信息
 * @summary Response data types
 * @url [ get ] /api/Gas/Name/{name}
 * @bizName modelAnalysisBiz
 */
export type GetGasNameNameResTypeByMas = {
    id: string;
    resourceId: string;
    name: string;
    chemicalName: string;
    gasCharacteristic: Array<string>;
    concentrations: Array<number>;
};

/**
 * @description 计算高斯烟羽模型
 * @summary Request data types
 * @url [ post ] /api/Analysis/gaussian_plume
 * @bizName modelAnalysisBiz
 */
export type PostAnalysisGaussianPlumeReqTypeByMasV2 = {
    'X-version'?: string;
    time?: string;
    hour: number;
    gasResourceId?: string;
    leakageMethod?: any;
    leakPointType?: any;
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
    stackX?: Array<number>;
    stackY?: Array<number>;
    stackH?: Array<number>;
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
 * @description 计算影响面积
 * @summary Request data types
 * @url [ post ] /api/Analysis/gaussian_plume/area
 * @bizName modelAnalysisBiz
 */
export type PostAnalysisGaussianPlumeAreaReqTypeByMasV2 = {
    'X-version'?: string;
    time?: string;
    hour: number;
    gasResourceId?: string;
    leakageMethod?: any;
    leakPointType?: any;
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
    stackX?: Array<number>;
    stackY?: Array<number>;
    stackH?: Array<number>;
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
 * @description 计算影响面积
 * @summary Response data types
 * @url [ post ] /api/Analysis/gaussian_plume/area
 * @bizName modelAnalysisBiz
 */
export type PostAnalysisGaussianPlumeAreaResTypeByMasV2 = {
    lowerArea: Array<number>;
    middleArea: Array<number>;
    heightArea: Array<number>;
};

/**
 * @description 计算扩散趋势
 * @summary Request data types
 * @url [ post ] /api/Analysis/gaussian_plume/trend
 * @bizName modelAnalysisBiz
 */
export type PostAnalysisGaussianPlumeTrendReqTypeByMasV2 = {
    'X-version'?: string;
    time?: string;
    hour: number;
    gasResourceId?: string;
    leakageMethod?: any;
    leakPointType?: any;
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
    stackX?: Array<number>;
    stackY?: Array<number>;
    stackH?: Array<number>;
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
 * @description 计算扩散趋势
 * @summary Response data types
 * @url [ post ] /api/Analysis/gaussian_plume/trend
 * @bizName modelAnalysisBiz
 */
export type PostAnalysisGaussianPlumeTrendResTypeByMasV2 = {
    lowerArea: Array<number>;
    middleArea: Array<number>;
    heightArea: Array<number>;
};

/**
 * @description 计算蒸汽云爆炸模型的爆炸范围
 * @summary Request data types
 * @url [ post ] /api/Analysis/vapor_cloud_explosion
 * @bizName modelAnalysisBiz
 */
export type PostAnalysisVaporCloudExplosionReqTypeByMasV2 = {
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
 * @description 计算蒸汽云爆炸模型的爆炸范围
 * @summary Response data types
 * @url [ post ] /api/Analysis/vapor_cloud_explosion
 * @bizName modelAnalysisBiz
 */
export type PostAnalysisVaporCloudExplosionResTypeByMasV2 = {
    deathRadius: number;
    severeWoundRadius: number;
    slightWoundRadius: number;
    buildingDamageRadius: number;
};

/**
 * @description 分页请求气体信息数据
 * @summary Request data types
 * @url [ get ] /api/Gas
 * @bizName modelAnalysisBiz
 */
export type GetGasReqTypeByMasV2 = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页请求气体信息数据
 * @summary Response data types
 * @url [ get ] /api/Gas
 * @bizName modelAnalysisBiz
 */
export type GetGasResTypeByMasV2 = {
    id: string;
    resourceId: string;
    name: string;
    chemicalName: string;
    gasCharacteristic: Array<string>;
    concentrations: Array<number>;
};

/**
 * @description 根据资源Id返回单个气体信息
 * @summary Request data types
 * @url [ get ] /api/Gas/{id}
 * @bizName modelAnalysisBiz
 */
export type GetGasIdReqTypeByMasV2 = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 根据资源Id返回单个气体信息
 * @summary Response data types
 * @url [ get ] /api/Gas/{id}
 * @bizName modelAnalysisBiz
 */
export type GetGasIdResTypeByMasV2 = {
    id: string;
    resourceId: string;
    name: string;
    chemicalName: string;
    gasCharacteristic: Array<string>;
    concentrations: Array<number>;
};

/**
 * @description 根据气体名称返回单个气体信息
 * @summary Request data types
 * @url [ get ] /api/Gas/name
 * @bizName modelAnalysisBiz
 */
export type GetGasNameReqTypeByMasV2 = {
    name: string;
    'X-version'?: string;
};

/**
 * @description 根据气体名称返回单个气体信息
 * @summary Response data types
 * @url [ get ] /api/Gas/name
 * @bizName modelAnalysisBiz
 */
export type GetGasNameResTypeByMasV2 = {
    id: string;
    resourceId: string;
    name: string;
    chemicalName: string;
    gasCharacteristic: Array<string>;
    concentrations: Array<number>;
};
