/**
 * @description 获取危险设施
 * @summary Request data types
 * @url [ get ] /Alarm/DangerousSources
 * @bizName preplanAnalysisBiz
 */
export type GetAlarmDangerousSourcesReqTypeByPas = {
    AlarmId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 获取危险设施
 * @summary Response data types
 * @url [ get ] /Alarm/DangerousSources
 * @bizName preplanAnalysisBiz
 */
export type GetAlarmDangerousSourcesResTypeByPas = {
    totalCount: number;
    records: Array<{
        facilityOut: {
            resourceId: string;
            layerId: string;
            layerDetail: {
                id: string;
                name: string;
                number: string;
                description: string;
                iconUrl: string;
                group: string;
                groupKey: string;
                productId: string;
            };
            description: string;
            owner: string;
            number: string;
            geoFilePath: string;
            address: string;
            extension: Record<string, any>;
            areaCode: string;
            platformId: string;
            longitude: number;
            latitude: number;
            id: string;
            name: string;
        };
        distance: number;
    }>;
};

/**
 * @description 获取重点保护对象
 * @summary Request data types
 * @url [ get ] /Alarm/KeyProtections
 * @bizName preplanAnalysisBiz
 */
export type GetAlarmKeyProtectionsReqTypeByPas = {
    AlarmId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 获取重点保护对象
 * @summary Response data types
 * @url [ get ] /Alarm/KeyProtections
 * @bizName preplanAnalysisBiz
 */
export type GetAlarmKeyProtectionsResTypeByPas = {
    totalCount: number;
    records: Array<{
        facilityOut: {
            resourceId: string;
            layerId: string;
            layerDetail: {
                id: string;
                name: string;
                number: string;
                description: string;
                iconUrl: string;
                group: string;
                groupKey: string;
                productId: string;
            };
            description: string;
            owner: string;
            number: string;
            geoFilePath: string;
            address: string;
            extension: Record<string, any>;
            areaCode: string;
            platformId: string;
            longitude: number;
            latitude: number;
            id: string;
            name: string;
        };
        distance: number;
    }>;
};

/**
 * @description 获取避难场所
 * @summary Request data types
 * @url [ get ] /Alarm/Shelters
 * @bizName preplanAnalysisBiz
 */
export type GetAlarmSheltersReqTypeByPas = {
    AlarmId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 获取避难场所
 * @summary Response data types
 * @url [ get ] /Alarm/Shelters
 * @bizName preplanAnalysisBiz
 */
export type GetAlarmSheltersResTypeByPas = {
    totalCount: number;
    records: Array<{
        facilityOut: {
            resourceId: string;
            layerId: string;
            layerDetail: {
                id: string;
                name: string;
                number: string;
                description: string;
                iconUrl: string;
                group: string;
                groupKey: string;
                productId: string;
            };
            description: string;
            owner: string;
            number: string;
            geoFilePath: string;
            address: string;
            extension: Record<string, any>;
            areaCode: string;
            platformId: string;
            longitude: number;
            latitude: number;
            id: string;
            name: string;
        };
        distance: number;
    }>;
};

/**
 * @description 获取应急物资
 * @summary Request data types
 * @url [ get ] /Alarm/Warehouses
 * @bizName preplanAnalysisBiz
 */
export type GetAlarmWarehousesReqTypeByPas = {
    AlarmId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 获取应急物资
 * @summary Response data types
 * @url [ get ] /Alarm/Warehouses
 * @bizName preplanAnalysisBiz
 */
export type GetAlarmWarehousesResTypeByPas = {
    totalCount: number;
    records: Array<{
        facilityOut: {
            resourceId: string;
            layerId: string;
            layerDetail: {
                id: string;
                name: string;
                number: string;
                description: string;
                iconUrl: string;
                group: string;
                groupKey: string;
                productId: string;
            };
            description: string;
            owner: string;
            number: string;
            geoFilePath: string;
            address: string;
            extension: Record<string, any>;
            areaCode: string;
            platformId: string;
            longitude: number;
            latitude: number;
            id: string;
            name: string;
        };
        distance: number;
    }>;
};

/**
 * @description 获取应急设施
 * @summary Request data types
 * @url [ get ] /Alarm/EmergencyFacilities
 * @bizName preplanAnalysisBiz
 */
export type GetAlarmEmergencyFacilitiesReqTypeByPas = {
    AlarmId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 获取应急设施
 * @summary Response data types
 * @url [ get ] /Alarm/EmergencyFacilities
 * @bizName preplanAnalysisBiz
 */
export type GetAlarmEmergencyFacilitiesResTypeByPas = {
    totalCount: number;
    records: Array<{
        facilityOut: {
            resourceId: string;
            layerId: string;
            layerDetail: {
                id: string;
                name: string;
                number: string;
                description: string;
                iconUrl: string;
                group: string;
                groupKey: string;
                productId: string;
            };
            description: string;
            owner: string;
            number: string;
            geoFilePath: string;
            address: string;
            extension: Record<string, any>;
            areaCode: string;
            platformId: string;
            longitude: number;
            latitude: number;
            id: string;
            name: string;
        };
        distance: number;
    }>;
};

/**
 * @description 获取人力资源
 * @summary Request data types
 * @url [ get ] /Alarm/ManpowerResources
 * @bizName preplanAnalysisBiz
 */
export type GetAlarmManpowerResourcesReqTypeByPas = {
    AlarmId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 获取人力资源
 * @summary Response data types
 * @url [ get ] /Alarm/ManpowerResources
 * @bizName preplanAnalysisBiz
 */
export type GetAlarmManpowerResourcesResTypeByPas = {
    totalCount: number;
    records: Array<{
        facilityOut: {
            resourceId: string;
            layerId: string;
            layerDetail: {
                id: string;
                name: string;
                number: string;
                description: string;
                iconUrl: string;
                group: string;
                groupKey: string;
                productId: string;
            };
            description: string;
            owner: string;
            number: string;
            geoFilePath: string;
            address: string;
            extension: Record<string, any>;
            areaCode: string;
            platformId: string;
            longitude: number;
            latitude: number;
            id: string;
            name: string;
        };
        distance: number;
    }>;
};

/**
 * @description 获取医疗资源
 * @summary Request data types
 * @url [ get ] /Alarm/MedicalResources
 * @bizName preplanAnalysisBiz
 */
export type GetAlarmMedicalResourcesReqTypeByPas = {
    AlarmId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 获取医疗资源
 * @summary Response data types
 * @url [ get ] /Alarm/MedicalResources
 * @bizName preplanAnalysisBiz
 */
export type GetAlarmMedicalResourcesResTypeByPas = {
    totalCount: number;
    records: Array<{
        facilityOut: {
            resourceId: string;
            layerId: string;
            layerDetail: {
                id: string;
                name: string;
                number: string;
                description: string;
                iconUrl: string;
                group: string;
                groupKey: string;
                productId: string;
            };
            description: string;
            owner: string;
            number: string;
            geoFilePath: string;
            address: string;
            extension: Record<string, any>;
            areaCode: string;
            platformId: string;
            longitude: number;
            latitude: number;
            id: string;
            name: string;
        };
        distance: number;
    }>;
};

/**
 * @description 获取污染源
 * @summary Request data types
 * @url [ get ] /Alarm/PollutionSources
 * @bizName preplanAnalysisBiz
 */
export type GetAlarmPollutionSourcesReqTypeByPas = {
    AlarmId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 获取污染源
 * @summary Response data types
 * @url [ get ] /Alarm/PollutionSources
 * @bizName preplanAnalysisBiz
 */
export type GetAlarmPollutionSourcesResTypeByPas = {
    totalCount: number;
    records: Array<{
        facilityOut: {
            resourceId: string;
            layerId: string;
            layerDetail: {
                id: string;
                name: string;
                number: string;
                description: string;
                iconUrl: string;
                group: string;
                groupKey: string;
                productId: string;
            };
            description: string;
            owner: string;
            number: string;
            geoFilePath: string;
            address: string;
            extension: Record<string, any>;
            areaCode: string;
            platformId: string;
            longitude: number;
            latitude: number;
            id: string;
            name: string;
        };
        distance: number;
    }>;
};

/**
 * @description 通过GroupKey获取告警周边资源
 * @summary Request data types
 * @url [ get ] /api/AlarmFacilities
 * @bizName preplanAnalysisBiz
 */
export type GetAlarmFacilitiesReqTypeByPas = {
    groupKey: string;
    AlarmId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 通过GroupKey获取告警周边资源
 * @summary Response data types
 * @url [ get ] /api/AlarmFacilities
 * @bizName preplanAnalysisBiz
 */
export type GetAlarmFacilitiesResTypeByPas = {
    totalCount: number;
    records: Array<{
        facilityOut: {
            resourceId: string;
            layerId: string;
            layerDetail: {
                id: string;
                name: string;
                number: string;
                description: string;
                iconUrl: string;
                group: string;
                groupKey: string;
                productId: string;
            };
            description: string;
            owner: string;
            number: string;
            geoFilePath: string;
            address: string;
            extension: Record<string, any>;
            areaCode: string;
            platformId: string;
            longitude: number;
            latitude: number;
            id: string;
            name: string;
        };
        distance: number;
    }>;
};

/**
 * @description 根据前缀名称匹配到对应预案的图层信息返回树结构
 * @summary Request data types
 * @url [ get ] /api/AlarmFacilitiesStatistics
 * @bizName preplanAnalysisBiz
 */
export type GetAlarmFacilitiesStatisticsReqTypeByPas = {
    AlarmId: string;
    Radius?: number;
    LayerName: string;
};

/**
 * @description 根据前缀名称匹配到对应预案的图层信息返回树结构
 * @summary Response data types
 * @url [ get ] /api/AlarmFacilitiesStatistics
 * @bizName preplanAnalysisBiz
 */
export type GetAlarmFacilitiesStatisticsResTypeByPas = {
    layerId: string;
    layerName: string;
    facilitiesTotal: number;
    subordinateLayersTotal: number;
    bottomRight: {
        longitude: number;
        latitude: number;
    };
    upLeft: {
        longitude: number;
        latitude: number;
    };
    subordinateLayers: Array<{
        layerId: string;
        layerName: string;
        facilitiesTotal: number;
        subordinateLayersTotal: number;
        bottomRight: {
            longitude: number;
            latitude: number;
        };
        upLeft: {
            longitude: number;
            latitude: number;
        };
        subordinateLayers: Array<Record<string, any>>;
    }>;
};

/**
 * @description 根据GroupKey查询事件设施
 * @summary Request data types
 * @url [ get ] /api/EventFacilities
 * @bizName preplanAnalysisBiz
 */
export type GetEventFacilitiesReqTypeByPas = {
    groupKey: string;
    EventId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 根据GroupKey查询事件设施
 * @summary Response data types
 * @url [ get ] /api/EventFacilities
 * @bizName preplanAnalysisBiz
 */
export type GetEventFacilitiesResTypeByPas = {
    totalCount: number;
    records: Array<{
        facilityOut: {
            resourceId: string;
            layerId: string;
            layerDetail: {
                id: string;
                name: string;
                number: string;
                description: string;
                iconUrl: string;
                group: string;
                groupKey: string;
                productId: string;
            };
            description: string;
            owner: string;
            number: string;
            geoFilePath: string;
            address: string;
            extension: Record<string, any>;
            areaCode: string;
            platformId: string;
            longitude: number;
            latitude: number;
            id: string;
            name: string;
        };
        distance: number;
    }>;
};

/**
 * @description DangerousSources
 * @summary Request data types
 * @url [ get ] /DangerousSources
 * @bizName preplanAnalysisBiz
 */
export type GetDangerousSourcesReqTypeByPas = {
    EventId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description DangerousSources
 * @summary Response data types
 * @url [ get ] /DangerousSources
 * @bizName preplanAnalysisBiz
 */
export type GetDangerousSourcesResTypeByPas = {
    totalCount: number;
    records: Array<{
        facilityOut: {
            resourceId: string;
            layerId: string;
            layerDetail: {
                id: string;
                name: string;
                number: string;
                description: string;
                iconUrl: string;
                group: string;
                groupKey: string;
                productId: string;
            };
            description: string;
            owner: string;
            number: string;
            geoFilePath: string;
            address: string;
            extension: Record<string, any>;
            areaCode: string;
            platformId: string;
            longitude: number;
            latitude: number;
            id: string;
            name: string;
        };
        distance: number;
    }>;
};

/**
 * @description KeyProtections
 * @summary Request data types
 * @url [ get ] /KeyProtections
 * @bizName preplanAnalysisBiz
 */
export type GetKeyProtectionsReqTypeByPas = {
    EventId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description KeyProtections
 * @summary Response data types
 * @url [ get ] /KeyProtections
 * @bizName preplanAnalysisBiz
 */
export type GetKeyProtectionsResTypeByPas = {
    totalCount: number;
    records: Array<{
        facilityOut: {
            resourceId: string;
            layerId: string;
            layerDetail: {
                id: string;
                name: string;
                number: string;
                description: string;
                iconUrl: string;
                group: string;
                groupKey: string;
                productId: string;
            };
            description: string;
            owner: string;
            number: string;
            geoFilePath: string;
            address: string;
            extension: Record<string, any>;
            areaCode: string;
            platformId: string;
            longitude: number;
            latitude: number;
            id: string;
            name: string;
        };
        distance: number;
    }>;
};

/**
 * @description Shelters
 * @summary Request data types
 * @url [ get ] /Shelters
 * @bizName preplanAnalysisBiz
 */
export type GetSheltersReqTypeByPas = {
    EventId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description Shelters
 * @summary Response data types
 * @url [ get ] /Shelters
 * @bizName preplanAnalysisBiz
 */
export type GetSheltersResTypeByPas = {
    totalCount: number;
    records: Array<{
        facilityOut: {
            resourceId: string;
            layerId: string;
            layerDetail: {
                id: string;
                name: string;
                number: string;
                description: string;
                iconUrl: string;
                group: string;
                groupKey: string;
                productId: string;
            };
            description: string;
            owner: string;
            number: string;
            geoFilePath: string;
            address: string;
            extension: Record<string, any>;
            areaCode: string;
            platformId: string;
            longitude: number;
            latitude: number;
            id: string;
            name: string;
        };
        distance: number;
    }>;
};

/**
 * @description Warehouses
 * @summary Request data types
 * @url [ get ] /Warehouses
 * @bizName preplanAnalysisBiz
 */
export type GetWarehousesReqTypeByPas = {
    EventId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description Warehouses
 * @summary Response data types
 * @url [ get ] /Warehouses
 * @bizName preplanAnalysisBiz
 */
export type GetWarehousesResTypeByPas = {
    totalCount: number;
    records: Array<{
        facilityOut: {
            resourceId: string;
            layerId: string;
            layerDetail: {
                id: string;
                name: string;
                number: string;
                description: string;
                iconUrl: string;
                group: string;
                groupKey: string;
                productId: string;
            };
            description: string;
            owner: string;
            number: string;
            geoFilePath: string;
            address: string;
            extension: Record<string, any>;
            areaCode: string;
            platformId: string;
            longitude: number;
            latitude: number;
            id: string;
            name: string;
        };
        distance: number;
    }>;
};

/**
 * @description EmergencyFacilities
 * @summary Request data types
 * @url [ get ] /EmergencyFacilities
 * @bizName preplanAnalysisBiz
 */
export type GetEmergencyFacilitiesReqTypeByPas = {
    EventId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description EmergencyFacilities
 * @summary Response data types
 * @url [ get ] /EmergencyFacilities
 * @bizName preplanAnalysisBiz
 */
export type GetEmergencyFacilitiesResTypeByPas = {
    totalCount: number;
    records: Array<{
        facilityOut: {
            resourceId: string;
            layerId: string;
            layerDetail: {
                id: string;
                name: string;
                number: string;
                description: string;
                iconUrl: string;
                group: string;
                groupKey: string;
                productId: string;
            };
            description: string;
            owner: string;
            number: string;
            geoFilePath: string;
            address: string;
            extension: Record<string, any>;
            areaCode: string;
            platformId: string;
            longitude: number;
            latitude: number;
            id: string;
            name: string;
        };
        distance: number;
    }>;
};

/**
 * @description ManpowerResources
 * @summary Request data types
 * @url [ get ] /ManpowerResources
 * @bizName preplanAnalysisBiz
 */
export type GetManpowerResourcesReqTypeByPas = {
    EventId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description ManpowerResources
 * @summary Response data types
 * @url [ get ] /ManpowerResources
 * @bizName preplanAnalysisBiz
 */
export type GetManpowerResourcesResTypeByPas = {
    totalCount: number;
    records: Array<{
        facilityOut: {
            resourceId: string;
            layerId: string;
            layerDetail: {
                id: string;
                name: string;
                number: string;
                description: string;
                iconUrl: string;
                group: string;
                groupKey: string;
                productId: string;
            };
            description: string;
            owner: string;
            number: string;
            geoFilePath: string;
            address: string;
            extension: Record<string, any>;
            areaCode: string;
            platformId: string;
            longitude: number;
            latitude: number;
            id: string;
            name: string;
        };
        distance: number;
    }>;
};

/**
 * @description MedicalResources
 * @summary Request data types
 * @url [ get ] /MedicalResources
 * @bizName preplanAnalysisBiz
 */
export type GetMedicalResourcesReqTypeByPas = {
    EventId: string;
    Radius?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description MedicalResources
 * @summary Response data types
 * @url [ get ] /MedicalResources
 * @bizName preplanAnalysisBiz
 */
export type GetMedicalResourcesResTypeByPas = {
    totalCount: number;
    records: Array<{
        facilityOut: {
            resourceId: string;
            layerId: string;
            layerDetail: {
                id: string;
                name: string;
                number: string;
                description: string;
                iconUrl: string;
                group: string;
                groupKey: string;
                productId: string;
            };
            description: string;
            owner: string;
            number: string;
            geoFilePath: string;
            address: string;
            extension: Record<string, any>;
            areaCode: string;
            platformId: string;
            longitude: number;
            latitude: number;
            id: string;
            name: string;
        };
        distance: number;
    }>;
};

/**
 * @description 根据前缀名称匹配到对应预案的图层信息返回树结构
 * @summary Request data types
 * @url [ get ] /api/EventFacilitiesStatistics
 * @bizName preplanAnalysisBiz
 */
export type GetEventFacilitiesStatisticsReqTypeByPas = {
    EventId: string;
    Radius?: number;
    LayerName: string;
};

/**
 * @description 根据前缀名称匹配到对应预案的图层信息返回树结构
 * @summary Response data types
 * @url [ get ] /api/EventFacilitiesStatistics
 * @bizName preplanAnalysisBiz
 */
export type GetEventFacilitiesStatisticsResTypeByPas = {
    layerId: string;
    layerName: string;
    facilitiesTotal: number;
    subordinateLayersTotal: number;
    bottomRight: {
        longitude: number;
        latitude: number;
    };
    upLeft: {
        longitude: number;
        latitude: number;
    };
    subordinateLayers: Array<{
        layerId: string;
        layerName: string;
        facilitiesTotal: number;
        subordinateLayersTotal: number;
        bottomRight: {
            longitude: number;
            latitude: number;
        };
        upLeft: {
            longitude: number;
            latitude: number;
        };
        subordinateLayers: Array<Record<string, any>>;
    }>;
};

/**
 * @description 根据前缀名称匹配到对应预案的图层信息返回树结构排除掉模型分析的区域设施数量
 * @summary Request data types
 * @url [ post ] /api/EventFacilitiesStatistics
 * @bizName preplanAnalysisBiz
 */
export type PostEventFacilitiesStatisticsReqTypeByPas = {
    points?: Array<{
        longitude: number;
        latitude: number;
    }>;
    eventId: string;
    radius?: number;
    layerName: string;
};

/**
 * @description 根据前缀名称匹配到对应预案的图层信息返回树结构排除掉模型分析的区域设施数量
 * @summary Response data types
 * @url [ post ] /api/EventFacilitiesStatistics
 * @bizName preplanAnalysisBiz
 */
export type PostEventFacilitiesStatisticsResTypeByPas = {
    layerId: string;
    layerName: string;
    facilitiesTotal: number;
    subordinateLayersTotal: number;
    bottomRight: {
        longitude: number;
        latitude: number;
    };
    upLeft: {
        longitude: number;
        latitude: number;
    };
    subordinateLayers: Array<{
        layerId: string;
        layerName: string;
        facilitiesTotal: number;
        subordinateLayersTotal: number;
        bottomRight: {
            longitude: number;
            latitude: number;
        };
        upLeft: {
            longitude: number;
            latitude: number;
        };
        subordinateLayers: Array<Record<string, any>>;
    }>;
};
