/**
 * @description 查询风场、云场、浪场实时geo json
 * @summary Request data types
 * @url [ post ] /api/MapJsonDatas/real
 * @bizName wxBiz
 */
export type PostMapJsonDatasRealReqTypeByWxs = {
    mapPlace?: 0 | 1 | 2;
};

/**
 * @description 查询风场、云场、浪场实时geo json
 * @summary Response data types
 * @url [ post ] /api/MapJsonDatas/real
 * @bizName wxBiz
 */
export type PostMapJsonDatasRealResTypeByWxs = {
    id: string;
    resourceId: string;
    statTime: string;
    jsonData: string;
    mainType: 0 | 1 | 2;
    subType: string;
    extension: string;
    dataSource: string;
    createdTime: string;
    updatedTime: string;
};

/**
 * @description 按照开始时间、结束时间查询风场、云场、浪场实时geo json
 * @summary Request data types
 * @url [ post ] /api/MapJsonDatas
 * @bizName wxBiz
 */
export type PostMapJsonDatasReqTypeByWxs = {
    pageIndex?: number;
    pageSize?: number;
    startTime?: string;
    endTime?: string;
    mapPlace?: 0 | 1 | 2;
};

/**
 * @description 按照开始时间、结束时间查询风场、云场、浪场实时geo json
 * @summary Response data types
 * @url [ post ] /api/MapJsonDatas
 * @bizName wxBiz
 */
export type PostMapJsonDatasResTypeByWxs = {
    totalCount: number;
    records: Array<object>;
};

/**
 * @description 查询当前云图、雷达图、降雨量热力图路径url
 * @summary Request data types
 * @url [ post ] /api/MapPictures/real
 * @bizName wxBiz
 */
export type PostMapPicturesRealReqTypeByWxs = {
    mapPicture?: 0 | 1 | 2;
};

/**
 * @description 查询当前云图、雷达图、降雨量热力图路径url
 * @summary Response data types
 * @url [ post ] /api/MapPictures/real
 * @bizName wxBiz
 */
export type PostMapPicturesRealResTypeByWxs = {
    id: string;
    resourceId: string;
    name: string;
    mainType: 0 | 1 | 2;
    subType: string;
    url: string;
    fssPath: string;
    statTime: string;
    extension: string;
    dataSource: string;
    createdTime: string;
    updatedTime: string;
};

/**
 * @description 按照开始时间、结束时间查询云图、雷达图、降雨量热力图路径url
 * @summary Request data types
 * @url [ post ] /api/MapPictures
 * @bizName wxBiz
 */
export type PostMapPicturesReqTypeByWxs = {
    pageIndex?: number;
    pageSize?: number;
    startTime?: string;
    endTime?: string;
    mapPicture?: 0 | 1 | 2;
};

/**
 * @description 按照开始时间、结束时间查询云图、雷达图、降雨量热力图路径url
 * @summary Response data types
 * @url [ post ] /api/MapPictures
 * @bizName wxBiz
 */
export type PostMapPicturesResTypeByWxs = {
    totalCount: number;
    records: Array<object>;
};

/**
 * @description 查询台风最新快报
 * @summary Request data types
 * @url [ post ] /api/TyphoonExpresses
 * @bizName wxBiz
 */
export type PostTyphoonExpressesReqTypeByWxs = {
    typhoonCode: string;
};

/**
 * @description 查询台风最新快报
 * @summary Response data types
 * @url [ post ] /api/TyphoonExpresses
 * @bizName wxBiz
 */
export type PostTyphoonExpressesResTypeByWxs = {
    id: string;
    resourceId: string;
    title: string;
    source: string;
    time: string;
    name: string;
    forecastConclusion: string;
    createdTime: string;
    updatedTime: string;
};

/**
 * @description 根据台风编号/Id查询发展趋势
 * @summary Request data types
 * @url [ post ] /api/TyphoonPaths/trend
 * @bizName wxBiz
 */
export type PostTyphoonPathsTrendReqTypeByWxs = {
    typhoonCode: string;
};

/**
 * @description 根据台风编号/Id查询发展趋势
 * @summary Response data types
 * @url [ post ] /api/TyphoonPaths/trend
 * @bizName wxBiz
 */
export type PostTyphoonPathsTrendResTypeByWxs = {
    id: string;
    resourceId: string;
    typhoonCode: string;
    name: string;
    level: string;
    windSpeed: number;
    moveSpeed: number;
    moveDirection: string;
    windCircleRadius: Array<{
        level: number;
        radiusMaxWindSpeed: number;
        northeast: number;
        southeast: number;
        southwest: number;
        northwest: number;
    }>;
    predictions: Array<{
        predictionAgency: string;
        time: string;
        longitude: number;
        latitude: number;
        maxWindSpeed: number;
        centerAirPressure: number;
        type: string;
    }>;
    longitude: number;
    latitude: number;
    centralPressure: number;
    createdTime: string;
    publishedTime: string;
    updatedTime: string;
    source: string;
};

/**
 * @description 根据台风编号/Id查询台风路径
 * @summary Request data types
 * @url [ post ] /api/TyphoonPaths
 * @bizName wxBiz
 */
export type PostTyphoonPathsReqTypeByWxs = {
    typhoonCode: string;
};

/**
 * @description 根据台风编号/Id查询台风路径
 * @summary Response data types
 * @url [ post ] /api/TyphoonPaths
 * @bizName wxBiz
 */
export type PostTyphoonPathsResTypeByWxs = {
    totalCount: number;
    records: Array<object>;
};

/**
 * @description 按年份查询台风列表
 * @summary Request data types
 * @url [ post ] /api/Typhoons
 * @bizName wxBiz
 */
export type PostTyphoonsReqTypeByWxs = {
    pageIndex?: number;
    pageSize?: number;
    year?: number;
};

/**
 * @description 按年份查询台风列表
 * @summary Response data types
 * @url [ post ] /api/Typhoons
 * @bizName wxBiz
 */
export type PostTyphoonsResTypeByWxs = {
    totalCount: number;
    records: Array<object>;
};

/**
 * @description 按地区返回天气预警
 * @summary Request data types
 * @url [ post ] /api/WeatherAlarms
 * @bizName wxBiz
 */
export type PostWeatherAlarmsReqTypeByWxs = {
    areaCode?: string;
};

/**
 * @description 按地区返回天气预警
 * @summary Response data types
 * @url [ post ] /api/WeatherAlarms
 * @bizName wxBiz
 */
export type PostWeatherAlarmsResTypeByWxs = {
    id: string;
    resourceId: string;
    areaCode: string;
    areaName: string;
    title: string;
    startTime: string;
    endTime: string;
    isEffective: boolean;
    level: string;
    type: string;
    typeName: string;
    content: string;
    source: string;
    publishedTime: string;
    createdTime: string;
    updatedTime: string;
};

/**
 * @description 按地区返回一周天气预报
 * @summary Request data types
 * @url [ post ] /api/WeatherForecasts
 * @bizName wxBiz
 */
export type PostWeatherForecastsReqTypeByWxs = {
    areaCode?: string;
    dayCount?: number;
};

/**
 * @description 按地区返回一周天气预报
 * @summary Response data types
 * @url [ post ] /api/WeatherForecasts
 * @bizName wxBiz
 */
export type PostWeatherForecastsResTypeByWxs = {
    totalCount: number;
    records: Array<object>;
};

/**
 * @description 按地区返回实时天气
 * @summary Request data types
 * @url [ post ] /api/WeatherRealtimes
 * @bizName wxBiz
 */
export type PostWeatherRealtimesReqTypeByWxs = {
    areaCode?: string;
};

/**
 * @description 按地区返回实时天气
 * @summary Response data types
 * @url [ post ] /api/WeatherRealtimes
 * @bizName wxBiz
 */
export type PostWeatherRealtimesResTypeByWxs = {
    id: string;
    resourceId: string;
    weather: string;
    areaCode: string;
    areaName: string;
    windDirection: number;
    windSpeed: number;
    windSpeedLevel: string;
    temperature: number;
    rainfallOneHour: number;
    humidity: number;
    pressure: number;
    createdTime: string;
    publishedTime: string;
    updatedTime: string;
};
