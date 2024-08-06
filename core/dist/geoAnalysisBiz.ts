/**
 * @description 获取Buildings数据
 * @summary Request data types
 * @url [ get ] /api/Buildings
 * @bizName geoAnalysisBiz
 */
export type GetBuildingsReqTypeByGas = {
    Longitude: number;
    Latitude: number;
    CityCode: string;
    MaxDistance: number;
};

/**
 * @description 获取Buildings数据
 * @summary Response data types
 * @url [ get ] /api/Buildings
 * @bizName geoAnalysisBiz
 */
export type GetBuildingsResTypeByGas = {
    id: string;
    type: string;
    properties: {
        id: string;
        smId: string;
        smsDriW: string;
        smsDriN: string;
        smsDriE: string;
        smsDriS: string;
        smUserid: string;
        smArea: string;
        smpPerimeter: string;
        smGeometrySize: string;
        smGeoPosition: string;
        height: string;
        z: string;
    };
    geometry: {
        type: string;
        coordinates: Array<any>;
    };
    center: Array<number>;
    maxRadius: number;
};

/**
 * @description 获取地理编码数据
 * @summary Request data types
 * @url [ get ] /api/Geocoder/geocoding
 * @bizName geoAnalysisBiz
 */
export type GetGeocoderGeocodingReqTypeByGas = {
    Address: string;
    City?: string;
};

/**
 * @description 获取地理编码数据
 * @summary Response data types
 * @url [ get ] /api/Geocoder/geocoding
 * @bizName geoAnalysisBiz
 */
export type GetGeocoderGeocodingResTypeByGas = {
    location: {
        longitude: number;
        latitude: number;
    };
    precise: number;
    confidence: number;
    level: string;
};

/**
 * @description 获取逆地理编码数据
 * @summary Request data types
 * @url [ get ] /api/Geocoder/reverse_geocoding
 * @bizName geoAnalysisBiz
 */
export type GetGeocoderReverseGeocodingReqTypeByGas = {
    'Location.Longitude'?: number;
    'Location.Latitude'?: number;
    Location?: {
        Longitude: number;
        Latitude: number;
    };
    ExtensionsPoi?: string;
    ExtensionsRoad?: string;
    ExtensionTown?: string;
    PoiTypes?: string;
    Radius?: string;
};

/**
 * @description 获取逆地理编码数据
 * @summary Response data types
 * @url [ get ] /api/Geocoder/reverse_geocoding
 * @bizName geoAnalysisBiz
 */
export type GetGeocoderReverseGeocodingResTypeByGas = {
    location: {
        longitude: number;
        latitude: number;
    };
    formattedAddress: string;
    business: string;
    cityCode: string;
    addressComponent: {
        country: string;
        province: string;
        city: string;
        district: string;
        street: string;
        streetNumber: string;
        adcode: string;
        countryCode: string;
        direction: string;
        distance: string;
    };
    pois: Array<{
        addr: string;
        cp: string;
        direction: string;
        distance: string;
        name: string;
        poiType: string;
        point: {
            x: string;
            y: string;
        };
        tel: string;
        uid: string;
        zip: string;
        parentPoi: any;
    }>;
    poiRegions: Array<{
        directionDesc: string;
        name: string;
        tag: string;
    }>;
    roads: Array<{
        name: string;
        distance: string;
    }>;
    sematicDescription: string;
};

/**
 * @description 驾车路线规划
 * @summary Request data types
 * @url [ get ] /api/Navigation/driving
 * @bizName geoAnalysisBiz
 */
export type GetNavigationDrivingReqTypeByGas = {
    WayPoints?: string;
    Tactics?: number;
    GpsDirection?: number;
    Radius?: number;
    Speed?: number;
    'OriginLocation.Longitude'?: number;
    ' OriginLocation.Latitude'?: number;
    OriginLocation?: {
        Longitude: number;
        Latitude: number;
    };
    'DestinationLocation.Longitude'?: number;
    'DestinationLocation.Latitude'?: number;
    DestinationLocation?: {
        Longitude: number;
        Latitude: number;
    };
};

/**
 * @description 驾车路线规划
 * @summary Response data types
 * @url [ get ] /api/Navigation/driving
 * @bizName geoAnalysisBiz
 */
export type GetNavigationDrivingResTypeByGas = {
    origin: {
        longitude: number;
        latitude: number;
    };
    destination: {
        longitude: number;
        latitude: number;
    };
    routes: Array<{
        toll: number;
        trafficCondition: number;
        steps: Array<{
            legIndex: number;
            turn: number;
            roadType: number;
            roadTypes: string;
            trafficCondition: Array<{
                status: number;
                geoCnt: number;
            }>;
            direction: number;
            distance: string;
            duration: string;
            instructions: string;
            path: string;
            startLocation: {
                longitude: number;
                latitude: number;
            };
            endLocation: {
                longitude: number;
                latitude: number;
            };
        }>;
        distance: number;
        duration: number;
    }>;
};

/**
 * @description 步行路线规划
 * @summary Request data types
 * @url [ get ] /api/Navigation/walking
 * @bizName geoAnalysisBiz
 */
export type GetNavigationWalkingReqTypeByGas = {
    'OriginLocation.Longitude'?: number;
    'OriginLocation.Latitude'?: number;
    OriginLocation?: {
        Longitude: number;
        Latitude: number;
    };
    'DestinationLocation.Longitude'?: number;
    'DestinationLocation.Latitude'?: number;
    DestinationLocation?: {
        Longitude: number;
        Latitude: number;
    };
};

/**
 * @description 步行路线规划
 * @summary Response data types
 * @url [ get ] /api/Navigation/walking
 * @bizName geoAnalysisBiz
 */
export type GetNavigationWalkingResTypeByGas = {
    origin: {
        longitude: number;
        latitude: number;
    };
    destination: {
        longitude: number;
        latitude: number;
    };
    routes: Array<{
        steps: Array<{
            direction: number;
            distance: string;
            duration: string;
            instructions: string;
            path: string;
            startLocation: {
                longitude: number;
                latitude: number;
            };
            endLocation: {
                longitude: number;
                latitude: number;
            };
        }>;
        distance: number;
        duration: number;
    }>;
};

/**
 * @description 骑行路径规划
 * @summary Request data types
 * @url [ get ] /api/Navigation/riding
 * @bizName geoAnalysisBiz
 */
export type GetNavigationRidingReqTypeByGas = {
    RidingType?: number;
    'OriginLocation.Longitude'?: number;
    'OriginLocation.Latitude'?: number;
    OriginLocation?: {
        Longitude: number;
        Latitude: number;
    };
    'DestinationLocation.Longitude'?: number;
    'DestinationLocation.Latitude'?: number;
    DestinationLocation?: {
        Longitude: number;
        Latitude: number;
    };
};

/**
 * @description 骑行路径规划
 * @summary Response data types
 * @url [ get ] /api/Navigation/riding
 * @bizName geoAnalysisBiz
 */
export type GetNavigationRidingResTypeByGas = {
    origin: {
        longitude: number;
        latitude: number;
    };
    destination: {
        longitude: number;
        latitude: number;
    };
    routes: Array<{
        steps: Array<{
            name: string;
            turnType: string;
            direction: number;
            distance: string;
            duration: string;
            instructions: string;
            path: string;
            startLocation: {
                longitude: number;
                latitude: number;
            };
            endLocation: {
                longitude: number;
                latitude: number;
            };
        }>;
        distance: number;
        duration: number;
    }>;
};

/**
 * @description 获取Poi数据(经纬度范围默认全国)
 * @summary Request data types
 * @url [ get ] /api/Poi
 * @bizName geoAnalysisBiz
 */
export type GetPoiReqTypeByGas = {
    'LeftBottomLocation.Longitude'?: number;
    'LeftBottomLocation.Latitude'?: number;
    LeftBottomLocation?: {
        Longitude: number;
        Latitude: number;
    };
    'RightTopLocation.Longitude'?: number;
    'RightTopLocation.Latitude'?: number;
    RightTopLocation?: {
        Longitude: number;
        Latitude: number;
    };
    Query: string;
    Tag?: string;
    Scope: number;
    Filter?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 获取Poi数据(经纬度范围默认全国)
 * @summary Response data types
 * @url [ get ] /api/Poi
 * @bizName geoAnalysisBiz
 */
export type GetPoiResTypeByGas = {
    totalCount: number;
    records: Array<{
        name: string;
        location: {
            longitude: number;
            latitude: number;
        };
        province: string;
        city: string;
        address: string;
        telephone: string;
        uid: string;
        streetId: string;
        detail: string;
        detailInfo: {
            distance: string;
            type: string;
            tag: string;
            detailUrl: string;
            naviLocation: {
                longitude: number;
                latitude: number;
            };
            price: string;
            shopHours: string;
            overallRating: string;
            tasteRating: string;
            serviceRating: string;
            environmentRating: string;
            facilityRating: string;
            hygieneRating: string;
            technologyRating: string;
            imageNum: string;
            grouponNum: string;
            discountNum: string;
            commentNum: string;
            favoriteNum: string;
            checkinNum: string;
        };
    }>;
};

/**
 * @description 获取地理输入建议
 * @summary Request data types
 * @url [ get ] /api/Poi/place_suggestion
 * @bizName geoAnalysisBiz
 */
export type GetPoiPlaceSuggestionReqTypeByGas = {
    Query: string;
    Region: string;
    CityLimit?: string;
    'Location.Longitude'?: number;
    'Location.Latitude'?: number;
    Location?: {
        Longitude: number;
        Latitude: number;
    };
    page?: number;
    per_page?: number;
};

/**
 * @description 获取地理输入建议
 * @summary Response data types
 * @url [ get ] /api/Poi/place_suggestion
 * @bizName geoAnalysisBiz
 */
export type GetPoiPlaceSuggestionResTypeByGas = {
    totalCount: number;
    records: Array<{
        name: string;
        location: {
            longitude: number;
            latitude: number;
        };
        uid: string;
        city: string;
        district: string;
        business: string;
    }>;
};
