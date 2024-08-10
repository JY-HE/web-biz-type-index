/**
 * @description 返回单个id
 * @summary Request data types
 * @url [ get ] /api/alarms/{id}
 * @bizName alarmBiz
 */
export type GetAlarmsIdReqTypeByAls = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 返回单个id
 * @summary Response data types
 * @url [ get ] /api/alarms/{id}
 * @bizName alarmBiz
 */
export type GetAlarmsIdResTypeByAls = {
    alarmSourceId: string;
    alarmSourceName: string;
    alarmSourceType: number;
    alarmProcessUrl: string;
    alarmDescription: string;
    alarmTypeId: number;
    alarmTypeName: string;
    alarmName: string;
    level: number;
    aroseTime: string;
    longitude: string;
    latitude: string;
    address: string;
    isConfirmed: boolean;
    confirmTime: string;
    extension: string;
    districtId: string;
    districtName: string;
    organizationId: string;
    organizationName: string;
    affirmantId: string;
    affirmantName: string;
    deleteTime: string;
    id: string;
};

/**
 * @description 消除告警
 * @summary Request data types
 * @url [ delete ] /api/alarms/{id}
 * @bizName alarmBiz
 */
export type DeleteAlarmsIdReqTypeByAls = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 分页查找告警
 * @summary Request data types
 * @url [ get ] /api/alarms
 * @bizName alarmBiz
 */
export type GetAlarmsReqTypeByAls = {
    Keyword?: string;
    BeginTime?: string;
    EndTime?: string;
    'bottom_right.Longitude'?: number;
    'bottom_right.Latitude'?: number;
    'up_left.Longitude'?: number;
    'up_left.Latitude'?: number;
    Type?: number;
    IsConfirmed?: boolean;
    AlarmSourceTypes?: Array<number>;
    DistrictIds?: Array<string>;
    PrefixDistrictIds?: Array<string>;
    IsSort?: boolean;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页查找告警
 * @summary Response data types
 * @url [ get ] /api/alarms
 * @bizName alarmBiz
 */
export type GetAlarmsResTypeByAls = {
    totalCount: number;
    records: Array<{
        alarmSourceId: string;
        alarmSourceName: string;
        alarmSourceType: number;
        alarmProcessUrl: string;
        alarmDescription: string;
        alarmTypeId: number;
        alarmTypeName: string;
        alarmName: string;
        level: number;
        aroseTime: string;
        longitude: string;
        latitude: string;
        address: string;
        isConfirmed: boolean;
        confirmTime: string;
        extension: string;
        districtId: string;
        districtName: string;
        organizationId: string;
        organizationName: string;
        affirmantId: string;
        affirmantName: string;
        deleteTime: string;
        id: string;
    }>;
};

/**
 * @description 获取所有告警
 * @summary Request data types
 * @url [ get ] /api/alarms/GetAll
 * @bizName alarmBiz
 */
export type GetAlarmsGetAllReqTypeByAls = {
    'X-version'?: string;
};

/**
 * @description 获取所有告警
 * @summary Response data types
 * @url [ get ] /api/alarms/GetAll
 * @bizName alarmBiz
 */
export type GetAlarmsGetAllResTypeByAls = {
    totalCount: number;
    records: Array<{
        alarmSourceId: string;
        alarmSourceName: string;
        alarmSourceType: number;
        alarmProcessUrl: string;
        alarmDescription: string;
        alarmTypeId: number;
        alarmTypeName: string;
        alarmName: string;
        level: number;
        aroseTime: string;
        longitude: string;
        latitude: string;
        address: string;
        isConfirmed: boolean;
        confirmTime: string;
        extension: string;
        districtId: string;
        districtName: string;
        organizationId: string;
        organizationName: string;
        affirmantId: string;
        affirmantName: string;
        deleteTime: string;
        id: string;
    }>;
};

/**
 * @description 获取告警的信息
 * @summary Request data types
 * @url [ post ] /api/alarms/GetAlarmInfo
 * @bizName alarmBiz
 */
export type PostAlarmsGetAlarmInfoReqTypeByAls = {
    'X-version'?: string;
    keyword?: string;
    timeQueryType?: 0 | 1 | 2;
    pageIndex?: number;
    pageSize?: number;
    beginTime?: string;
    endTime?: string;
    districtIds?: Array<string>;
    prefixDistrictIds?: Array<string>;
    queryType?: 0 | 1 | 2;
    types?: Array<number>;
    alarmSourceIds?: Array<string>;
    alarmLevels?: Array<number>;
    organizationIds?: Array<string>;
    alarmSourceTypes?: Array<number>;
};

/**
 * @description 获取告警的信息
 * @summary Response data types
 * @url [ post ] /api/alarms/GetAlarmInfo
 * @bizName alarmBiz
 */
export type PostAlarmsGetAlarmInfoResTypeByAls = {
    totalCount: number;
    records: Array<{
        alarmSourceId: string;
        alarmSourceName: string;
        alarmSourceType: number;
        alarmProcessUrl: string;
        alarmDescription: string;
        alarmTypeId: number;
        alarmTypeName: string;
        alarmName: string;
        level: number;
        aroseTime: string;
        longitude: string;
        latitude: string;
        address: string;
        isConfirmed: boolean;
        confirmTime: string;
        extension: string;
        districtId: string;
        districtName: string;
        organizationId: string;
        organizationName: string;
        affirmantId: string;
        affirmantName: string;
        deleteTime: string;
        id: string;
    }>;
};

/**
 * @description 根据时间段查询告警通知数据
 * @summary Request data types
 * @url [ get ] /api/alarms/GetAlarmByTypeIds
 * @bizName alarmBiz
 */
export type GetAlarmsGetAlarmByTypeIdsReqTypeByAls = {
    beginTime?: string;
    endTime?: string;
    queryType?: number;
    typeIds?: Array<number>;
    alarmLevels?: Array<number>;
    'X-version'?: string;
};

/**
 * @description 根据时间段查询告警通知数据
 * @summary Response data types
 * @url [ get ] /api/alarms/GetAlarmByTypeIds
 * @bizName alarmBiz
 */
export type GetAlarmsGetAlarmByTypeIdsResTypeByAls = {
    totalCount: number;
    records: Array<{
        alarmSourceId: string;
        alarmSourceName: string;
        alarmSourceType: number;
        alarmProcessUrl: string;
        alarmDescription: string;
        alarmTypeId: number;
        alarmTypeName: string;
        alarmName: string;
        level: number;
        aroseTime: string;
        longitude: string;
        latitude: string;
        address: string;
        isConfirmed: boolean;
        confirmTime: string;
        extension: string;
        districtId: string;
        districtName: string;
        organizationId: string;
        organizationName: string;
        affirmantId: string;
        affirmantName: string;
        deleteTime: string;
        id: string;
    }>;
};

/**
 * @description 根据行政区域id列表查询告警数据
 * @summary Request data types
 * @url [ get ] /api/alarms/GetAlarmsByDistrictIds
 * @bizName alarmBiz
 */
export type GetAlarmsGetAlarmsByDistrictIdsReqTypeByAls = {
    beginTime?: string;
    endTime?: string;
    districtIds?: Array<string>;
    prefixDistrictIds?: Array<string>;
    queryType?: number;
    'X-version'?: string;
};

/**
 * @description 根据行政区域id列表查询告警数据
 * @summary Response data types
 * @url [ get ] /api/alarms/GetAlarmsByDistrictIds
 * @bizName alarmBiz
 */
export type GetAlarmsGetAlarmsByDistrictIdsResTypeByAls = {
    totalCount: number;
    records: Array<{
        alarmSourceId: string;
        alarmSourceName: string;
        alarmSourceType: number;
        alarmProcessUrl: string;
        alarmDescription: string;
        alarmTypeId: number;
        alarmTypeName: string;
        alarmName: string;
        level: number;
        aroseTime: string;
        longitude: string;
        latitude: string;
        address: string;
        isConfirmed: boolean;
        confirmTime: string;
        extension: string;
        districtId: string;
        districtName: string;
        organizationId: string;
        organizationName: string;
        affirmantId: string;
        affirmantName: string;
        deleteTime: string;
        id: string;
    }>;
};

/**
 * @description 根据行政区域id列表查询告警总数
 * @summary Request data types
 * @url [ get ] /api/alarms/GetAlarmCounterByDistrictId
 * @bizName alarmBiz
 */
export type GetAlarmsGetAlarmCounterByDistrictIdReqTypeByAls = {
    beginTime?: string;
    endTime?: string;
    districtId?: string;
    queryType?: number;
    'X-version'?: string;
};

/**
 * @description 根据行政区域id列表查询告警总数
 * @summary Response data types
 * @url [ get ] /api/alarms/GetAlarmCounterByDistrictId
 * @bizName alarmBiz
 */
export type GetAlarmsGetAlarmCounterByDistrictIdResTypeByAls = {
    districtId: string;
    districtName: string;
    count: number;
};

/**
 * @description 根据时间段统计告警类型
 * @summary Request data types
 * @url [ get ] /api/alarms/GetAlarmTypeCounterByTime
 * @bizName alarmBiz
 */
export type GetAlarmsGetAlarmTypeCounterByTimeReqTypeByAls = {
    beginTime?: string;
    endTime?: string;
    queryType?: number;
    districtIds?: Array<string>;
    'X-version'?: string;
};

/**
 * @description 根据时间段统计告警类型
 * @summary Response data types
 * @url [ get ] /api/alarms/GetAlarmTypeCounterByTime
 * @bizName alarmBiz
 */
export type GetAlarmsGetAlarmTypeCounterByTimeResTypeByAls = {
    totalCount: number;
    records: Array<{
        typeId: number;
        typeName: string;
        count: number;
    }>;
};

/**
 * @description 根据时间段统计告警总数
 * @summary Request data types
 * @url [ get ] /api/alarms/GetAlarmCounterByTime
 * @bizName alarmBiz
 */
export type GetAlarmsGetAlarmCounterByTimeReqTypeByAls = {
    timeType?: number;
    beginTime?: string;
    endTime?: string;
    queryType?: number;
    'X-version'?: string;
};

/**
 * @description 根据时间段统计告警总数
 * @summary Response data types
 * @url [ get ] /api/alarms/GetAlarmCounterByTime
 * @bizName alarmBiz
 */
export type GetAlarmsGetAlarmCounterByTimeResTypeByAls = {
    totalCount: number;
    records: Array<{
        timeSpan: string;
        count: number;
        typeName: string;
    }>;
};

/**
 * @description 根据时间段统计告警各行政区域总数
 * @summary Request data types
 * @url [ get ] /api/alarms/GetAlarmDistrictCounterByTime
 * @bizName alarmBiz
 */
export type GetAlarmsGetAlarmDistrictCounterByTimeReqTypeByAls = {
    beginTime?: string;
    endTime?: string;
    queryType?: number;
    'X-version'?: string;
};

/**
 * @description 根据时间段统计告警各行政区域总数
 * @summary Response data types
 * @url [ get ] /api/alarms/GetAlarmDistrictCounterByTime
 * @bizName alarmBiz
 */
export type GetAlarmsGetAlarmDistrictCounterByTimeResTypeByAls = {
    totalCount: number;
    records: Array<{
        districtId: string;
        districtName: string;
        count: number;
    }>;
};

/**
 * @description 添加告警
 * @summary Request data types
 * @url [ post ] /api/alarms/Add
 * @bizName alarmBiz
 */
export type PostAlarmsAddReqTypeByAls = {
    'X-version'?: string;
    alarmSyncId: string;
    alarmSourceId?: string;
    alarmSourceName?: string;
    alarmSourceType?: number;
    alarmProcessUrl?: string;
    alarmDescription?: string;
    alarmTypeId?: number;
    alarmTypeName?: string;
    alarmName?: string;
    level?: number;
    aroseTime?: string;
    longitude?: string;
    latitude?: string;
    address?: string;
    isConfirmed?: boolean;
    confirmTime?: string;
    extension?: string;
    districtId?: string;
    districtName?: string;
    organizationId?: string;
    organizationName?: string;
    affirmantId?: string;
    affirmantName?: string;
};

/**
 * @description 添加告警
 * @summary Response data types
 * @url [ post ] /api/alarms/Add
 * @bizName alarmBiz
 */
export type PostAlarmsAddResTypeByAls = {
    alarmSourceId: string;
    alarmSourceName: string;
    alarmSourceType: number;
    alarmProcessUrl: string;
    alarmDescription: string;
    alarmTypeId: number;
    alarmTypeName: string;
    alarmName: string;
    level: number;
    aroseTime: string;
    longitude: string;
    latitude: string;
    address: string;
    isConfirmed: boolean;
    confirmTime: string;
    extension: string;
    districtId: string;
    districtName: string;
    organizationId: string;
    organizationName: string;
    affirmantId: string;
    affirmantName: string;
    deleteTime: string;
    id: string;
};

/**
 * @description 更新告警数据
 * @summary Request data types
 * @url [ put ] /api/alarms/Update
 * @bizName alarmBiz
 */
export type PutAlarmsUpdateReqTypeByAls = {
    id?: string;
    'X-version'?: string;
    alarmSyncId: string;
    alarmSourceId?: string;
    alarmSourceName?: string;
    alarmSourceType?: number;
    alarmProcessUrl?: string;
    alarmDescription?: string;
    alarmTypeId?: number;
    alarmTypeName?: string;
    alarmName?: string;
    level?: number;
    aroseTime?: string;
    longitude?: string;
    latitude?: string;
    address?: string;
    isConfirmed?: boolean;
    confirmTime?: string;
    extension?: string;
    districtId?: string;
    districtName?: string;
    organizationId?: string;
    organizationName?: string;
    affirmantId?: string;
    affirmantName?: string;
};

/**
 * @description 确认告警
 * @summary Request data types
 * @url [ put ] /api/alarms/ConfirmAlarm
 * @bizName alarmBiz
 */
export type PutAlarmsConfirmAlarmReqTypeByAls = {
    id?: string;
    'X-version'?: string;
    alarmId: string;
    confirmTime: string;
    affirmantId?: string;
    affirmantName?: string;
};

/**
 * @description 按条件查询预案
 * @summary Request data types
 * @url [ get ] /api/Preplans
 * @bizName alarmBiz
 */
export type GetPreplansReqTypeByAls = {
    Keyword?: string;
    AlarmLevel?: number;
    AlarmType?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 按条件查询预案
 * @summary Response data types
 * @url [ get ] /api/Preplans
 * @bizName alarmBiz
 */
export type GetPreplansResTypeByAls = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        alarmTypeId: number;
        alarmTypeName: string;
        alarmLevel: number;
        dangerousSources: Array<{
            name: string;
            distance: number;
        }>;
        keyProtections: Array<{
            name: string;
            distance: number;
        }>;
        shelters: Array<{
            name: string;
            distance: number;
        }>;
        warehouses: Array<{
            name: string;
            distance: number;
        }>;
        emergencyFacilities: Array<{
            name: string;
            distance: number;
        }>;
        manpowerResources: Array<{
            name: string;
            distance: number;
        }>;
        medicalResources: Array<{
            name: string;
            distance: number;
        }>;
        pollutionSources: Array<{
            name: string;
            distance: number;
        }>;
        customResources: Record<string, any>;
    }>;
};

/**
 * @description 创建告警预案
 * @summary Request data types
 * @url [ post ] /api/Preplans
 * @bizName alarmBiz
 */
export type PostPreplansReqTypeByAls = {
    'X-version'?: string;
    name?: string;
    alarmTypeId?: number;
    alarmLevel?: number;
    dangerousSources?: Array<{
        name: string;
        distance: number;
    }>;
    keyProtections?: Array<{
        name: string;
        distance: number;
    }>;
    shelters?: Array<{
        name: string;
        distance: number;
    }>;
    warehouses?: Array<{
        name: string;
        distance: number;
    }>;
    emergencyFacilities?: Array<{
        name: string;
        distance: number;
    }>;
    manpowerResources?: Array<{
        name: string;
        distance: number;
    }>;
    medicalResources?: Array<{
        name: string;
        distance: number;
    }>;
    pollutionSources?: Array<{
        name: string;
        distance: number;
    }>;
    customResources?: Record<string, any>;
};

/**
 * @description 创建告警预案
 * @summary Response data types
 * @url [ post ] /api/Preplans
 * @bizName alarmBiz
 */
export type PostPreplansResTypeByAls = {
    id: string;
    name: string;
    alarmTypeId: number;
    alarmTypeName: string;
    alarmLevel: number;
    dangerousSources: Array<{
        name: string;
        distance: number;
    }>;
    keyProtections: Array<{
        name: string;
        distance: number;
    }>;
    shelters: Array<{
        name: string;
        distance: number;
    }>;
    warehouses: Array<{
        name: string;
        distance: number;
    }>;
    emergencyFacilities: Array<{
        name: string;
        distance: number;
    }>;
    manpowerResources: Array<{
        name: string;
        distance: number;
    }>;
    medicalResources: Array<{
        name: string;
        distance: number;
    }>;
    pollutionSources: Array<{
        name: string;
        distance: number;
    }>;
    customResources: Record<string, any>;
};

/**
 * @description 通过预案ID获取预案
 * @summary Request data types
 * @url [ get ] /api/Preplans/{id}
 * @bizName alarmBiz
 */
export type GetPreplansIdReqTypeByAls = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 通过预案ID获取预案
 * @summary Response data types
 * @url [ get ] /api/Preplans/{id}
 * @bizName alarmBiz
 */
export type GetPreplansIdResTypeByAls = {
    id: string;
    name: string;
    alarmTypeId: number;
    alarmTypeName: string;
    alarmLevel: number;
    dangerousSources: Array<{
        name: string;
        distance: number;
    }>;
    keyProtections: Array<{
        name: string;
        distance: number;
    }>;
    shelters: Array<{
        name: string;
        distance: number;
    }>;
    warehouses: Array<{
        name: string;
        distance: number;
    }>;
    emergencyFacilities: Array<{
        name: string;
        distance: number;
    }>;
    manpowerResources: Array<{
        name: string;
        distance: number;
    }>;
    medicalResources: Array<{
        name: string;
        distance: number;
    }>;
    pollutionSources: Array<{
        name: string;
        distance: number;
    }>;
    customResources: Record<string, any>;
};

/**
 * @description 更新告警预案
 * @summary Request data types
 * @url [ put ] /api/Preplans/{id}
 * @bizName alarmBiz
 */
export type PutPreplansIdReqTypeByAls = {
    id: string;
    'X-version'?: string;
    name?: string;
    alarmTypeId?: number;
    alarmLevel?: number;
    dangerousSources?: Array<{
        name: string;
        distance: number;
    }>;
    keyProtections?: Array<{
        name: string;
        distance: number;
    }>;
    shelters?: Array<{
        name: string;
        distance: number;
    }>;
    warehouses?: Array<{
        name: string;
        distance: number;
    }>;
    emergencyFacilities?: Array<{
        name: string;
        distance: number;
    }>;
    manpowerResources?: Array<{
        name: string;
        distance: number;
    }>;
    medicalResources?: Array<{
        name: string;
        distance: number;
    }>;
    pollutionSources?: Array<{
        name: string;
        distance: number;
    }>;
    customResources?: Record<string, any>;
};

/**
 * @description 删除告警预案
 * @summary Request data types
 * @url [ delete ] /api/Preplans/{id}
 * @bizName alarmBiz
 */
export type DeletePreplansIdReqTypeByAls = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 根据行政区域id列表查询告警总数
 * @summary Request data types
 * @url [ post ] /api/statisticians/GetAlarmCounterByDistrictIds
 * @bizName alarmBiz
 */
export type PostStatisticiansGetAlarmCounterByDistrictIdsReqTypeByAls = {
    'X-version'?: string;
    beginTime?: string;
    endTime?: string;
    districtIds?: Array<string>;
    prefixDistrictIds?: Array<string>;
    queryType?: 0 | 1 | 2;
    types?: Array<number>;
    alarmSourceIds?: Array<string>;
    alarmLevels?: Array<number>;
    organizationIds?: Array<string>;
    alarmSourceTypes?: Array<number>;
};

/**
 * @description 根据行政区域id列表查询告警总数
 * @summary Response data types
 * @url [ post ] /api/statisticians/GetAlarmCounterByDistrictIds
 * @bizName alarmBiz
 */
export type PostStatisticiansGetAlarmCounterByDistrictIdsResTypeByAls = {
    districtId: string;
    districtName: string;
    count: number;
};

/**
 * @description 提供按类型ID分组的告警总数
 * @summary Request data types
 * @url [ post ] /api/statisticians/GetAlarmCounterByTypes
 * @bizName alarmBiz
 */
export type PostStatisticiansGetAlarmCounterByTypesReqTypeByAls = {
    'X-version'?: string;
    beginTime?: string;
    endTime?: string;
    districtIds?: Array<string>;
    prefixDistrictIds?: Array<string>;
    queryType?: 0 | 1 | 2;
    types?: Array<number>;
    alarmSourceIds?: Array<string>;
    alarmLevels?: Array<number>;
    organizationIds?: Array<string>;
    alarmSourceTypes?: Array<number>;
};

/**
 * @description 提供按类型ID分组的告警总数
 * @summary Response data types
 * @url [ post ] /api/statisticians/GetAlarmCounterByTypes
 * @bizName alarmBiz
 */
export type PostStatisticiansGetAlarmCounterByTypesResTypeByAls = {
    districtId: string;
    districtName: string;
    count: number;
};

/**
 * @description 提供按告警源ID分组的告警总数
 * @summary Request data types
 * @url [ post ] /api/statisticians/GetAlarmCounterByAlarmSourceIds
 * @bizName alarmBiz
 */
export type PostStatisticiansGetAlarmCounterByAlarmSourceIdsReqTypeByAls = {
    'X-version'?: string;
    beginTime?: string;
    endTime?: string;
    districtIds?: Array<string>;
    prefixDistrictIds?: Array<string>;
    queryType?: 0 | 1 | 2;
    types?: Array<number>;
    alarmSourceIds?: Array<string>;
    alarmLevels?: Array<number>;
    organizationIds?: Array<string>;
    alarmSourceTypes?: Array<number>;
};

/**
 * @description 提供按告警源ID分组的告警总数
 * @summary Response data types
 * @url [ post ] /api/statisticians/GetAlarmCounterByAlarmSourceIds
 * @bizName alarmBiz
 */
export type PostStatisticiansGetAlarmCounterByAlarmSourceIdsResTypeByAls = {
    districtId: string;
    districtName: string;
    count: number;
};

/**
 * @description 提供按级别分组的告警总数
 * @summary Request data types
 * @url [ post ] /api/statisticians/GetAlarmCounterByLevel
 * @bizName alarmBiz
 */
export type PostStatisticiansGetAlarmCounterByLevelReqTypeByAls = {
    'X-version'?: string;
    beginTime?: string;
    endTime?: string;
    districtIds?: Array<string>;
    prefixDistrictIds?: Array<string>;
    queryType?: 0 | 1 | 2;
    types?: Array<number>;
    alarmSourceIds?: Array<string>;
    alarmLevels?: Array<number>;
    organizationIds?: Array<string>;
    alarmSourceTypes?: Array<number>;
};

/**
 * @description 提供按级别分组的告警总数
 * @summary Response data types
 * @url [ post ] /api/statisticians/GetAlarmCounterByLevel
 * @bizName alarmBiz
 */
export type PostStatisticiansGetAlarmCounterByLevelResTypeByAls = {
    districtId: string;
    districtName: string;
    count: number;
};

/**
 * @description 提供按所属组织架构分组的告警总数
 * @summary Request data types
 * @url [ post ] /api/statisticians/GetAlarmCounterByOrganization
 * @bizName alarmBiz
 */
export type PostStatisticiansGetAlarmCounterByOrganizationReqTypeByAls = {
    'X-version'?: string;
    beginTime?: string;
    endTime?: string;
    districtIds?: Array<string>;
    prefixDistrictIds?: Array<string>;
    queryType?: 0 | 1 | 2;
    types?: Array<number>;
    alarmSourceIds?: Array<string>;
    alarmLevels?: Array<number>;
    organizationIds?: Array<string>;
    alarmSourceTypes?: Array<number>;
};

/**
 * @description 提供按所属组织架构分组的告警总数
 * @summary Response data types
 * @url [ post ] /api/statisticians/GetAlarmCounterByOrganization
 * @bizName alarmBiz
 */
export type PostStatisticiansGetAlarmCounterByOrganizationResTypeByAls = {
    districtId: string;
    districtName: string;
    count: number;
};

/**
 * @description 提供告警总数的统计
 * @summary Request data types
 * @url [ post ] /api/statisticians/AlarmCounter
 * @bizName alarmBiz
 */
export type PostStatisticiansAlarmCounterReqTypeByAls = {
    'X-version'?: string;
    beginTime?: string;
    endTime?: string;
    districtIds?: Array<string>;
    prefixDistrictIds?: Array<string>;
    queryType?: 0 | 1 | 2;
    types?: Array<number>;
    alarmSourceIds?: Array<string>;
    alarmLevels?: Array<number>;
    organizationIds?: Array<string>;
    alarmSourceTypes?: Array<number>;
};

/**
 * @description 提供告警总数的统计
 * @summary Response data types
 * @url [ post ] /api/statisticians/AlarmCounter
 * @bizName alarmBiz
 */
export type PostStatisticiansAlarmCounterResTypeByAls = {
    count: number;
};

/**
 * @description 提供按时间分组的告警总数
 * @summary Request data types
 * @url [ post ] /api/statisticians/AlarmCounterByMinute
 * @bizName alarmBiz
 */
export type PostStatisticiansAlarmCounterByMinuteReqTypeByAls = {
    'X-version'?: string;
};

/**
 * @description 提供按时间分组的告警总数
 * @summary Response data types
 * @url [ post ] /api/statisticians/AlarmCounterByMinute
 * @bizName alarmBiz
 */
export type PostStatisticiansAlarmCounterByMinuteResTypeByAls = {
    timeSpan: string;
    count: number;
    typeName: string;
};

/**
 * @description 提供按时间分组的告警总数
 * @summary Request data types
 * @url [ post ] /api/statisticians/AlarmCounterByTime
 * @bizName alarmBiz
 */
export type PostStatisticiansAlarmCounterByTimeReqTypeByAls = {
    'X-version'?: string;
};

/**
 * @description 提供按时间分组的告警总数
 * @summary Response data types
 * @url [ post ] /api/statisticians/AlarmCounterByTime
 * @bizName alarmBiz
 */
export type PostStatisticiansAlarmCounterByTimeResTypeByAls = {
    timeSpan: string;
    count: number;
    typeName: string;
};

/**
 * @description 创建告警信息
 * @summary Request data types
 * @url [ post ] /api/ThirdAlarms
 * @bizName alarmBiz
 */
export type PostThirdAlarmsReqTypeByAls = {
    'X-version'?: string;
    alarmSourceId: string;
    alarmSourceName: string;
    alarmSourceType?: number;
    alarmSourceTypeName?: string;
    alarmDescription?: string;
    alarmName?: string;
    aroseTime: string;
    longitude?: number;
    latitude?: number;
    deleteTime?: string;
    alarmTypeId: number;
};
