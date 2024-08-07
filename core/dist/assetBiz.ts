/**
 * @description 通过IP获取资产信息
 * @summary Request data types
 * @url [ get ] /api/Assets/{type}/ip/{ip}
 * @bizName assetBiz
 */
export type GetAssetsTypeIpIpReqTypeByAts = {
    ip: string;
    type: number;
    'X-version'?: string;
};

/**
 * @description 通过IP获取资产信息
 * @summary Response data types
 * @url [ get ] /api/Assets/{type}/ip/{ip}
 * @bizName assetBiz
 */
export type GetAssetsTypeIpIpResTypeByAts = {
    id: string;
    name: string;
    ip: string;
    number: string;
    assetType: any;
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
    detectInfo: any;
    networkID: string;
    longitude: number;
    latitude: number;
};

/**
 * @description 资产状态上报
 * @summary Request data types
 * @url [ post ] /api/Assets/{id}/status/report
 * @bizName assetBiz
 */
export type PostAssetsIdStatusReportReqTypeByAts = {
    id: string;
    'X-version'?: string;
    assetType: 0 | 1 | 2 | 3 | 4 | 5;
    assetStatus: 1 | 2;
};

/**
 * @description 获取资产详情
 * @summary Request data types
 * @url [ get ] /api/Assets/{id}
 * @bizName assetBiz
 */
export type GetAssetsIdReqTypeByAts = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 搜索资产
 * @summary Request data types
 * @url [ post ] /api/Assets
 * @bizName assetBiz
 */
export type PostAssetsReqTypeByAts = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: Array<string>;
    keyword?: string;
    prefixAreaCodes?: Array<string>;
    isMatchNullAreaCode?: boolean;
    assetType: 0 | 1 | 2 | 3 | 4 | 5;
    secondaryAssetType?: number;
    relateTypeId?: string;
    isSearchNullRelateType?: boolean;
    relateTypeIds?: Array<string>;
};

/**
 * @description 搜索资产
 * @summary Response data types
 * @url [ post ] /api/Assets
 * @bizName assetBiz
 */
export type PostAssetsResTypeByAts = {
    totalCount: number;
    records: Array<any>;
};

/**
 * @description 周边资产搜索
 * @summary Request data types
 * @url [ post ] /api/Assets/circle_area
 * @bizName assetBiz
 */
export type PostAssetsCircleAreaReqTypeByAts = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: Array<string>;
    keyword?: string;
    prefixAreaCodes?: Array<string>;
    isMatchNullAreaCode?: boolean;
    assetType: 0 | 1 | 2 | 3 | 4 | 5;
    secondaryAssetType?: number;
    relateTypeId?: string;
    isSearchNullRelateType?: boolean;
    relateTypeIds?: Array<string>;
    assetTypeIds?: Array<string>;
    center: {
        longitude: number;
        latitude: number;
    };
    radius: number;
    sortRule?: 0 | 1;
};

/**
 * @description 周边资产搜索
 * @summary Response data types
 * @url [ post ] /api/Assets/circle_area
 * @bizName assetBiz
 */
export type PostAssetsCircleAreaResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        ip: string;
        number: string;
        assetType: 0 | 1 | 2 | 3 | 4 | 5;
        secondaryAssetType: number;
        contactID: string;
        contactName: string;
        contactPhone: string;
        contactTitle: string;
        contactDepartment: string;
        resourceId: string;
        areaCode: string;
        relateTypeId: string;
        relateCameraId: string;
        networkID: string;
        status: 1 | 2;
        longitude: number;
        latitude: number;
        distance: number;
    }>;
};

/**
 * @description 通用搜索
 * @summary Request data types
 * @url [ post ] /api/Assets/search
 * @bizName assetBiz
 */
export type PostAssetsSearchReqTypeByAts = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: Array<string>;
    keyword?: string;
    prefixAreaCodes?: Array<string>;
    isMatchNullAreaCode?: boolean;
    assetType: 0 | 1 | 2 | 3 | 4 | 5;
    secondaryAssetType?: number;
    relateTypeId?: string;
    isSearchNullRelateType?: boolean;
    relateTypeIds?: Array<string>;
    assetTypeIds?: Array<string>;
};

/**
 * @description 通用搜索
 * @summary Response data types
 * @url [ post ] /api/Assets/search
 * @bizName assetBiz
 */
export type PostAssetsSearchResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        ip: string;
        number: string;
        assetType: 0 | 1 | 2 | 3 | 4 | 5;
        secondaryAssetType: number;
        contactID: string;
        contactName: string;
        contactPhone: string;
        contactTitle: string;
        contactDepartment: string;
        resourceId: string;
        areaCode: string;
        relateTypeId: string;
        relateCameraId: string;
        networkID: string;
        status: 1 | 2;
        longitude: number;
        latitude: number;
    }>;
};

/**
 * @description 批量获取资产联系人
 * @summary Request data types
 * @url [ post ] /api/Assets/contacts
 * @bizName assetBiz
 */
export type PostAssetsContactsReqTypeByAts = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: Array<string>;
};

/**
 * @description 批量获取资产联系人
 * @summary Response data types
 * @url [ post ] /api/Assets/contacts
 * @bizName assetBiz
 */
export type PostAssetsContactsResTypeByAts = {
    totalCount: number;
    records: Array<{
        assetId: string;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
    }>;
};

/**
 * @description 状态记录查询
 * @summary Request data types
 * @url [ get ] /api/Assets/{id}/status/record
 * @bizName assetBiz
 */
export type GetAssetsIdStatusRecordReqTypeByAts = {
    id: string;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 状态记录查询
 * @summary Response data types
 * @url [ get ] /api/Assets/{id}/status/record
 * @bizName assetBiz
 */
export type GetAssetsIdStatusRecordResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        assetId: string;
        status: 1 | 2;
        createTime: string;
    }>;
};

/**
 * @description 重载资产缓存
 * @summary Request data types
 * @url [ put ] /api/Assets/ReloadCache
 * @bizName assetBiz
 */
export type PutAssetsReloadCacheReqTypeByAts = {
    'X-version'?: string;
};

/**
 * @description 获取
 * @summary Request data types
 * @url [ get ] /api/AssetTypes/{id}
 * @bizName assetBiz
 */
export type GetAssetTypesIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取
 * @summary Response data types
 * @url [ get ] /api/AssetTypes/{id}
 * @bizName assetBiz
 */
export type GetAssetTypesIdResTypeByAts = {
    id: string;
    name: string;
    assetType: 0 | 1 | 2 | 3 | 4 | 5;
    secondaryAssetType: number;
    functionTypes: 1 | 2 | 4 | 8;
    configType: 0 | 1 | 2;
    isSubType: boolean;
};

/**
 * @description 更新
 * @summary Request data types
 * @url [ put ] /api/AssetTypes/{id}
 * @bizName assetBiz
 */
export type PutAssetTypesIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
    name?: string;
    assetType?: 0 | 1 | 2 | 3 | 4 | 5;
    secondaryAssetType?: number;
    functionTypes?: 1 | 2 | 4 | 8;
    configType?: 0 | 1 | 2;
};

/**
 * @description 删除
 * @summary Request data types
 * @url [ delete ] /api/AssetTypes/{id}
 * @bizName assetBiz
 */
export type DeleteAssetTypesIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 搜索
 * @summary Request data types
 * @url [ post ] /api/AssetTypes/search
 * @bizName assetBiz
 */
export type PostAssetTypesSearchReqTypeByAts = {
    'X-version'?: string;
    functionTypes?: 1 | 2 | 4 | 8;
    assetType?: 0 | 1 | 2 | 3 | 4 | 5;
    ids?: Array<string>;
};

/**
 * @description 搜索
 * @summary Response data types
 * @url [ post ] /api/AssetTypes/search
 * @bizName assetBiz
 */
export type PostAssetTypesSearchResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        assetType: 0 | 1 | 2 | 3 | 4 | 5;
        secondaryAssetType: number;
        functionTypes: 1 | 2 | 4 | 8;
        configType: 0 | 1 | 2;
        isSubType: boolean;
    }>;
};

/**
 * @description 新增
 * @summary Request data types
 * @url [ post ] /api/AssetTypes
 * @bizName assetBiz
 */
export type PostAssetTypesReqTypeByAts = {
    'X-version'?: string;
    name?: string;
    assetType?: 0 | 1 | 2 | 3 | 4 | 5;
    secondaryAssetType?: number;
    functionTypes?: 1 | 2 | 4 | 8;
    configType?: 0 | 1 | 2;
};

/**
 * @description 新增
 * @summary Response data types
 * @url [ post ] /api/AssetTypes
 * @bizName assetBiz
 */
export type PostAssetTypesResTypeByAts = {
    id: string;
    name: string;
    assetType: 0 | 1 | 2 | 3 | 4 | 5;
    secondaryAssetType: number;
    functionTypes: 1 | 2 | 4 | 8;
    configType: 0 | 1 | 2;
    isSubType: boolean;
};

/**
 * @description 获取客户端总览
 * @summary Request data types
 * @url [ put ] /api/Client
 * @bizName assetBiz
 */
export type PutClientReqTypeByAts = {
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 获取客户端总览
 * @summary Response data types
 * @url [ put ] /api/Client
 * @bizName assetBiz
 */
export type PutClientResTypeByAts = {
    name: string;
    description: string;
    totalCount: number;
    onlineCount: number;
    isHaveOnlineState: boolean;
    onlinePercent: number;
    group: Array<{
        name: string;
        description: string;
        totalCount: number;
        onlineCount: number;
        isHaveOnlineState: boolean;
        onlinePercent: number;
        group: Array<Record<string, any>>;
        managerAddress: string;
    }>;
    managerAddress: string;
};

/**
 * @description 搜索客户端
 * @summary Request data types
 * @url [ get ] /api/Client
 * @bizName assetBiz
 */
export type GetClientReqTypeByAts = {
    keyword?: string;
    networkID?: string;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 搜索客户端
 * @summary Response data types
 * @url [ get ] /api/Client
 * @bizName assetBiz
 */
export type GetClientResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        ip: string;
        mac: string;
        model: string;
        os: string;
        description: string;
        extension: any;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        clientType: 0 | 1 | 2;
        resourceId: string;
        createTime: string;
        network: any;
        status: 1 | 2;
        areaCode: string;
        location: any;
        assetMetrics: Array<{
            metricsId: string;
            name: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            alertTypeId: string;
            jobMetaName: string;
            resourceId: string;
        }>;
        maintenance: any;
    }>;
};

/**
 * @description 新增客户端
 * @summary Request data types
 * @url [ post ] /api/Client
 * @bizName assetBiz
 */
export type PostClientReqTypeByAts = {
    'X-version'?: string;
    name: string;
    ip: string;
    mac?: string;
    model?: string;
    os?: string;
    description?: string;
    extension?: any;
    contact?: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    clientType?: 0 | 1 | 2;
    networkID?: string;
    resourceId?: string;
    areaCode?: string;
    location?: any;
    assetMetrics?: Array<{
        metricsId: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        jobMetaName: string;
    }>;
    maintenance?: any;
};

/**
 * @description 新增客户端
 * @summary Response data types
 * @url [ post ] /api/Client
 * @bizName assetBiz
 */
export type PostClientResTypeByAts = {
    id: string;
    name: string;
    ip: string;
    mac: string;
    model: string;
    os: string;
    description: string;
    extension: any;
    contact: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    clientType: 0 | 1 | 2;
    resourceId: string;
    createTime: string;
    network: any;
    status: 1 | 2;
    areaCode: string;
    location: any;
    assetMetrics: Array<{
        metricsId: string;
        name: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        alertTypeId: string;
        jobMetaName: string;
        resourceId: string;
    }>;
    maintenance: any;
};

/**
 * @description 通过ID获取客户端
 * @summary Request data types
 * @url [ get ] /api/Client/{id}
 * @bizName assetBiz
 */
export type GetClientIdReqTypeByAts = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 通过ID获取客户端
 * @summary Response data types
 * @url [ get ] /api/Client/{id}
 * @bizName assetBiz
 */
export type GetClientIdResTypeByAts = {
    id: string;
    name: string;
    ip: string;
    mac: string;
    model: string;
    os: string;
    description: string;
    extension: any;
    contact: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    clientType: 0 | 1 | 2;
    resourceId: string;
    createTime: string;
    network: any;
    status: 1 | 2;
    areaCode: string;
    location: any;
    assetMetrics: Array<{
        metricsId: string;
        name: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        alertTypeId: string;
        jobMetaName: string;
        resourceId: string;
    }>;
    maintenance: any;
};

/**
 * @description 更新客户端
 * @summary Request data types
 * @url [ put ] /api/Client/{id}
 * @bizName assetBiz
 */
export type PutClientIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
    name: string;
    ip: string;
    mac?: string;
    model?: string;
    os?: string;
    description?: string;
    extension?: any;
    contact?: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    clientType?: 0 | 1 | 2;
    networkID?: string;
    resourceId?: string;
    areaCode?: string;
    location?: any;
    assetMetrics?: Array<{
        metricsId: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        jobMetaName: string;
    }>;
    maintenance?: any;
};

/**
 * @description 删除客户端
 * @summary Request data types
 * @url [ delete ] /api/Client/{id}
 * @bizName assetBiz
 */
export type DeleteClientIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description POST查询客户端集合
 * @summary Request data types
 * @url [ post ] /api/Client/search
 * @bizName assetBiz
 */
export type PostClientSearchReqTypeByAts = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    keyword?: string;
    networkID?: string;
    prefixAreaCodes?: Array<string>;
    isMatchNullAreaCode?: boolean;
    clientType?: 0 | 1 | 2;
    clientIds?: Array<string>;
    status?: 1 | 2;
};

/**
 * @description POST查询客户端集合
 * @summary Response data types
 * @url [ post ] /api/Client/search
 * @bizName assetBiz
 */
export type PostClientSearchResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        ip: string;
        mac: string;
        model: string;
        os: string;
        description: string;
        extension: any;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        clientType: 0 | 1 | 2;
        resourceId: string;
        createTime: string;
        network: any;
        status: 1 | 2;
        areaCode: string;
        location: any;
        assetMetrics: Array<{
            metricsId: string;
            name: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            alertTypeId: string;
            jobMetaName: string;
            resourceId: string;
        }>;
        maintenance: any;
    }>;
};

/**
 * @description 导入客户端
 * @summary Request data types
 * @url [ post ] /api/Client/import
 * @bizName assetBiz
 */
export type PostClientImportReqTypeByAts = {
    'X-version'?: string;
    importClients: Array<{
        name: string;
        ip: string;
        mac: string;
        model: string;
        os: string;
        description: string;
        extension: any;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        clientType: 0 | 1 | 2;
        networkID: string;
        resourceId: string;
        areaCode: string;
        location: any;
        assetMetrics: Array<{
            metricsId: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            jobMetaName: string;
        }>;
        maintenance: any;
    }>;
};

/**
 * @description 获取设备总览
 * @summary Request data types
 * @url [ put ] /api/Device
 * @bizName assetBiz
 */
export type PutDeviceReqTypeByAts = {
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 获取设备总览
 * @summary Response data types
 * @url [ put ] /api/Device
 * @bizName assetBiz
 */
export type PutDeviceResTypeByAts = {
    name: string;
    description: string;
    totalCount: number;
    onlineCount: number;
    isHaveOnlineState: boolean;
    onlinePercent: number;
    group: Array<{
        name: string;
        description: string;
        totalCount: number;
        onlineCount: number;
        isHaveOnlineState: boolean;
        onlinePercent: number;
        group: Array<Record<string, any>>;
        managerAddress: string;
    }>;
    managerAddress: string;
};

/**
 * @description 设备搜索
 * @summary Request data types
 * @url [ get ] /api/Device
 * @bizName assetBiz
 */
export type GetDeviceReqTypeByAts = {
    keyword?: string;
    networkID?: string;
    deviceType?: number;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 设备搜索
 * @summary Response data types
 * @url [ get ] /api/Device
 * @bizName assetBiz
 */
export type GetDeviceResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        netInfos: Array<{
            ipAddress: string;
            mac: string;
        }>;
        description: string;
        os: string;
        extension: any;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        account: string;
        password: string;
        resourceId: string;
        status: 1 | 2;
        createTime: string;
        deviceType: 0 | 1 | 2 | 3;
        network: any;
        areaCode: string;
        location: any;
        assetMetrics: Array<{
            metricsId: string;
            name: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            alertTypeId: string;
            jobMetaName: string;
            resourceId: string;
        }>;
        maintenance: any;
    }>;
};

/**
 * @description 新增设备
 * @summary Request data types
 * @url [ post ] /api/Device
 * @bizName assetBiz
 */
export type PostDeviceReqTypeByAts = {
    'X-version'?: string;
    name: string;
    netInfos?: Array<{
        ipAddress: string;
        mac: string;
    }>;
    description?: string;
    os?: string;
    extension?: any;
    contact?: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    account?: string;
    password?: string;
    deviceType?: 0 | 1 | 2 | 3;
    networkID?: string;
    resourceId?: string;
    areaCode?: string;
    location?: any;
    assetMetrics?: Array<{
        metricsId: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        jobMetaName: string;
    }>;
    maintenance?: any;
};

/**
 * @description 新增设备
 * @summary Response data types
 * @url [ post ] /api/Device
 * @bizName assetBiz
 */
export type PostDeviceResTypeByAts = {
    id: string;
    name: string;
    netInfos: Array<{
        ipAddress: string;
        mac: string;
    }>;
    description: string;
    os: string;
    extension: any;
    contact: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    account: string;
    password: string;
    resourceId: string;
    status: 1 | 2;
    createTime: string;
    deviceType: 0 | 1 | 2 | 3;
    network: any;
    areaCode: string;
    location: any;
    assetMetrics: Array<{
        metricsId: string;
        name: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        alertTypeId: string;
        jobMetaName: string;
        resourceId: string;
    }>;
    maintenance: any;
};

/**
 * @description 获取设备
 * @summary Request data types
 * @url [ get ] /api/Device/{id}
 * @bizName assetBiz
 */
export type GetDeviceIdReqTypeByAts = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 获取设备
 * @summary Response data types
 * @url [ get ] /api/Device/{id}
 * @bizName assetBiz
 */
export type GetDeviceIdResTypeByAts = {
    id: string;
    name: string;
    netInfos: Array<{
        ipAddress: string;
        mac: string;
    }>;
    description: string;
    os: string;
    extension: any;
    contact: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    account: string;
    password: string;
    resourceId: string;
    status: 1 | 2;
    createTime: string;
    deviceType: 0 | 1 | 2 | 3;
    network: any;
    areaCode: string;
    location: any;
    assetMetrics: Array<{
        metricsId: string;
        name: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        alertTypeId: string;
        jobMetaName: string;
        resourceId: string;
    }>;
    maintenance: any;
};

/**
 * @description 更新设备
 * @summary Request data types
 * @url [ put ] /api/Device/{id}
 * @bizName assetBiz
 */
export type PutDeviceIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
    name: string;
    netInfos?: Array<{
        ipAddress: string;
        mac: string;
    }>;
    description?: string;
    os?: string;
    extension?: any;
    contact?: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    account?: string;
    password?: string;
    deviceType?: 0 | 1 | 2 | 3;
    networkID?: string;
    resourceId?: string;
    areaCode?: string;
    location?: any;
    assetMetrics?: Array<{
        metricsId: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        jobMetaName: string;
    }>;
    maintenance?: any;
};

/**
 * @description 删除设备
 * @summary Request data types
 * @url [ delete ] /api/Device/{id}
 * @bizName assetBiz
 */
export type DeleteDeviceIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description POST查询设备集合
 * @summary Request data types
 * @url [ post ] /api/Device/search
 * @bizName assetBiz
 */
export type PostDeviceSearchReqTypeByAts = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    keyword?: string;
    networkID?: string;
    deviceType?: 0 | 1 | 2 | 3;
    prefixAreaCodes?: Array<string>;
    isMatchNullAreaCode?: boolean;
    deviceIds?: Array<string>;
    status?: 1 | 2;
};

/**
 * @description POST查询设备集合
 * @summary Response data types
 * @url [ post ] /api/Device/search
 * @bizName assetBiz
 */
export type PostDeviceSearchResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        netInfos: Array<{
            ipAddress: string;
            mac: string;
        }>;
        description: string;
        os: string;
        extension: any;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        account: string;
        password: string;
        resourceId: string;
        status: 1 | 2;
        createTime: string;
        deviceType: 0 | 1 | 2 | 3;
        network: any;
        areaCode: string;
        location: any;
        assetMetrics: Array<{
            metricsId: string;
            name: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            alertTypeId: string;
            jobMetaName: string;
            resourceId: string;
        }>;
        maintenance: any;
    }>;
};

/**
 * @description 导入设备（创建NC和MCU不支持指定resourceId）
 * @summary Request data types
 * @url [ post ] /api/Device/import
 * @bizName assetBiz
 */
export type PostDeviceImportReqTypeByAts = {
    'X-version'?: string;
    importDevices: Array<{
        name: string;
        netInfos: Array<{
            ipAddress: string;
            mac: string;
        }>;
        description: string;
        os: string;
        extension: any;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        account: string;
        password: string;
        deviceType: 0 | 1 | 2 | 3;
        networkID: string;
        resourceId: string;
        areaCode: string;
        location: any;
        assetMetrics: Array<{
            metricsId: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            jobMetaName: string;
        }>;
        maintenance: any;
    }>;
};

/**
 * @description 搜索服务器
 * @summary Request data types
 * @url [ get ] /api/Machines
 * @bizName assetBiz
 */
export type GetMachinesReqTypeByAts = {
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 搜索服务器
 * @summary Response data types
 * @url [ get ] /api/Machines
 * @bizName assetBiz
 */
export type GetMachinesResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        netInfos: Array<{
            ipAddress: string;
            mac: string;
        }>;
        description: string;
        os: string;
        extension: any;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        account: string;
        password: string;
        resourceId: string;
        status: 1 | 2;
        createTime: string;
        deviceType: 0 | 1 | 2 | 3;
        network: any;
        areaCode: string;
        location: any;
        assetMetrics: Array<{
            metricsId: string;
            name: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            alertTypeId: string;
            jobMetaName: string;
            resourceId: string;
        }>;
        maintenance: any;
    }>;
};

/**
 * @description 新增服务器
 * @summary Request data types
 * @url [ post ] /api/Machines
 * @bizName assetBiz
 */
export type PostMachinesReqTypeByAts = {
    'X-version'?: string;
    name: string;
    netInfos?: Array<{
        ipAddress: string;
        mac: string;
    }>;
    description?: string;
    os?: string;
    extension?: any;
    contact?: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    account?: string;
    password?: string;
    deviceType?: 0 | 1 | 2 | 3;
    networkID?: string;
    resourceId?: string;
    areaCode?: string;
    location?: any;
    assetMetrics?: Array<{
        metricsId: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        jobMetaName: string;
    }>;
    maintenance?: any;
};

/**
 * @description 新增服务器
 * @summary Response data types
 * @url [ post ] /api/Machines
 * @bizName assetBiz
 */
export type PostMachinesResTypeByAts = {
    id: string;
    name: string;
    netInfos: Array<{
        ipAddress: string;
        mac: string;
    }>;
    description: string;
    os: string;
    extension: any;
    contact: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    account: string;
    password: string;
    resourceId: string;
    status: 1 | 2;
    createTime: string;
    deviceType: 0 | 1 | 2 | 3;
    network: any;
    areaCode: string;
    location: any;
    assetMetrics: Array<{
        metricsId: string;
        name: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        alertTypeId: string;
        jobMetaName: string;
        resourceId: string;
    }>;
    maintenance: any;
};

/**
 * @description 通过ID获取服务器
 * @summary Request data types
 * @url [ get ] /api/Machines/{id}
 * @bizName assetBiz
 */
export type GetMachinesIdReqTypeByAts = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 通过ID获取服务器
 * @summary Response data types
 * @url [ get ] /api/Machines/{id}
 * @bizName assetBiz
 */
export type GetMachinesIdResTypeByAts = {
    id: string;
    name: string;
    netInfos: Array<{
        ipAddress: string;
        mac: string;
    }>;
    description: string;
    os: string;
    extension: any;
    contact: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    account: string;
    password: string;
    resourceId: string;
    status: 1 | 2;
    createTime: string;
    deviceType: 0 | 1 | 2 | 3;
    network: any;
    areaCode: string;
    location: any;
    assetMetrics: Array<{
        metricsId: string;
        name: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        alertTypeId: string;
        jobMetaName: string;
        resourceId: string;
    }>;
    maintenance: any;
};

/**
 * @description 更新服务器
 * @summary Request data types
 * @url [ put ] /api/Machines/{id}
 * @bizName assetBiz
 */
export type PutMachinesIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
    name: string;
    netInfos?: Array<{
        ipAddress: string;
        mac: string;
    }>;
    description?: string;
    os?: string;
    extension?: any;
    contact?: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    account?: string;
    password?: string;
    deviceType?: 0 | 1 | 2 | 3;
    networkID?: string;
    resourceId?: string;
    areaCode?: string;
    location?: any;
    assetMetrics?: Array<{
        metricsId: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        jobMetaName: string;
    }>;
    maintenance?: any;
};

/**
 * @description 删除服务器
 * @summary Request data types
 * @url [ delete ] /api/Machines/{id}
 * @bizName assetBiz
 */
export type DeleteMachinesIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取平台接入MCU
 * @summary Request data types
 * @url [ get ] /api/MCU
 * @bizName assetBiz
 */
export type GetMCUReqTypeByAts = {
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取平台接入MCU
 * @summary Response data types
 * @url [ get ] /api/MCU
 * @bizName assetBiz
 */
export type GetMCUResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        type: number;
        name: string;
        accessKeyID: string;
        accessKeySecret: string;
        domain: string;
        description: string;
        extension: any;
    }>;
};

/**
 * @description 根据ID获取MCU
 * @summary Request data types
 * @url [ get ] /api/MCU/{id}
 * @bizName assetBiz
 */
export type GetMCUIdReqTypeByAts = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 根据ID获取MCU
 * @summary Response data types
 * @url [ get ] /api/MCU/{id}
 * @bizName assetBiz
 */
export type GetMCUIdResTypeByAts = {
    id: string;
    type: number;
    name: string;
    accessKeyID: string;
    accessKeySecret: string;
    domain: string;
    description: string;
    extension: any;
};

/**
 * @description 获取符合查询条件的终端
 * @summary Request data types
 * @url [ get ] /api/MCU/terminal
 * @bizName assetBiz
 */
export type GetMCUTerminalReqTypeByAts = {
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
 * @description 获取符合查询条件的终端
 * @summary Response data types
 * @url [ get ] /api/MCU/terminal
 * @bizName assetBiz
 */
export type GetMCUTerminalResTypeByAts = {
    totalCount: number;
    records: Array<{
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
        terminalType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        areaCode: string;
        protocolType: string;
        relatePlatform: {
            id: string;
            name: string;
        };
        extension: any;
        relateCameraId: string;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        status: 1 | 2;
        relateType: any;
        terminalGroup: {
            id: string;
            name: string;
        };
        network: {
            id: string;
            name: string;
        };
        terminalLocation: {
            longitude: number;
            latitude: number;
            address: string;
            directionAngle: number;
            pitchAngle: number;
            zoom: number;
            extension: any;
        };
        assetMetrics: Array<{
            metricsId: string;
            name: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            alertTypeId: string;
            jobMetaName: string;
            resourceId: string;
        }>;
        source: any;
        maintenance: {
            cron: string;
            advanceRemindDays: number;
            lastMaintenanceTime: string;
            startUseTime: string;
            lifetime: number;
            maintenancePeriodType: 0 | 1;
            status: 0 | 1 | 2;
            expiryTime: string;
        };
    }>;
};

/**
 * @description 获取指标
 * @summary Request data types
 * @url [ get ] /api/Metrics/{id}
 * @bizName assetBiz
 */
export type GetMetricsIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取指标
 * @summary Response data types
 * @url [ get ] /api/Metrics/{id}
 * @bizName assetBiz
 */
export type GetMetricsIdResTypeByAts = {
    id: string;
    name: string;
    alertTypeId: string;
    resourceId: string;
};

/**
 * @description 更新指标
 * @summary Request data types
 * @url [ put ] /api/Metrics/{id}
 * @bizName assetBiz
 */
export type PutMetricsIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
    name: string;
    alertTypeId?: string;
    resourceId?: string;
};

/**
 * @description 删除指标
 * @summary Request data types
 * @url [ delete ] /api/Metrics/{id}
 * @bizName assetBiz
 */
export type DeleteMetricsIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 搜索指标
 * @summary Request data types
 * @url [ get ] /api/Metrics
 * @bizName assetBiz
 */
export type GetMetricsReqTypeByAts = {
    keyword?: string;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 搜索指标
 * @summary Response data types
 * @url [ get ] /api/Metrics
 * @bizName assetBiz
 */
export type GetMetricsResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        alertTypeId: string;
        resourceId: string;
    }>;
};

/**
 * @description 新增指标
 * @summary Request data types
 * @url [ post ] /api/Metrics
 * @bizName assetBiz
 */
export type PostMetricsReqTypeByAts = {
    'X-version'?: string;
    name: string;
    alertTypeId?: string;
    resourceId?: string;
};

/**
 * @description 新增指标
 * @summary Response data types
 * @url [ post ] /api/Metrics
 * @bizName assetBiz
 */
export type PostMetricsResTypeByAts = {
    id: string;
    name: string;
    alertTypeId: string;
    resourceId: string;
};

/**
 * @description 导入指标
 * @summary Request data types
 * @url [ post ] /api/Metrics/import
 * @bizName assetBiz
 */
export type PostMetricsImportReqTypeByAts = {
    'X-version'?: string;
    importMetrics?: Array<{
        id: string;
        name: string;
        alertTypeId: string;
        resourceId: string;
        createTime: string;
    }>;
};

/**
 * @description 获取平台接入NC
 * @summary Request data types
 * @url [ get ] /api/Nc
 * @bizName assetBiz
 */
export type GetNcReqTypeByAts = {
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取平台接入NC
 * @summary Response data types
 * @url [ get ] /api/Nc
 * @bizName assetBiz
 */
export type GetNcResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        connectionState: number;
        description: string;
        prefix: string;
        isKeepAlive: boolean;
        timeInterval: number;
        masterNCDevice: {
            id: string;
            ip: string;
            port: number;
            userName: string;
            password: string;
            isSupportDualMode: boolean;
            isSupportTrunkUser: boolean;
        };
        slaveNCDevice: {
            id: string;
            ip: string;
            port: number;
            userName: string;
            password: string;
            isSupportDualMode: boolean;
            isSupportTrunkUser: boolean;
        };
        longitude: number;
        latitude: number;
    }>;
};

/**
 * @description 获取NC通过ID
 * @summary Request data types
 * @url [ get ] /api/Nc/{id}
 * @bizName assetBiz
 */
export type GetNcIdReqTypeByAts = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 获取NC通过ID
 * @summary Response data types
 * @url [ get ] /api/Nc/{id}
 * @bizName assetBiz
 */
export type GetNcIdResTypeByAts = {
    id: string;
    name: string;
    connectionState: number;
    description: string;
    prefix: string;
    isKeepAlive: boolean;
    timeInterval: number;
    masterNCDevice: {
        id: string;
        ip: string;
        port: number;
        userName: string;
        password: string;
        isSupportDualMode: boolean;
        isSupportTrunkUser: boolean;
    };
    slaveNCDevice: {
        id: string;
        ip: string;
        port: number;
        userName: string;
        password: string;
        isSupportDualMode: boolean;
        isSupportTrunkUser: boolean;
    };
    longitude: number;
    latitude: number;
};

/**
 * @description 获取指定VNC下的号码列表
 * @summary Request data types
 * @url [ get ] /api/Nc/{id}/phones
 * @bizName assetBiz
 */
export type GetNcIdPhonesReqTypeByAts = {
    id: string;
    Keyword?: string;
    IsPhoneLine?: boolean;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取指定VNC下的号码列表
 * @summary Response data types
 * @url [ get ] /api/Nc/{id}/phones
 * @bizName assetBiz
 */
export type GetNcIdPhonesResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        number: string;
        state: number;
        usn: string;
        level: number;
        callRegion: number;
        connectionState: number;
        protocol: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 24 | 25 | 254 | 255;
        configStatus: number;
        usageType: string;
        isPhoneLine: boolean;
        owner: {
            id: string;
            name: string;
            title: string;
            platformId: string;
            platformName: string;
        };
    }>;
};

/**
 * @description 获取对应VNC设备的中继群配置
 * @summary Request data types
 * @url [ get ] /api/Nc/{id}/trunk_group_configs
 * @bizName assetBiz
 */
export type GetNcIdTrunkGroupConfigsReqTypeByAts = {
    id: string;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取对应VNC设备的中继群配置
 * @summary Response data types
 * @url [ get ] /api/Nc/{id}/trunk_group_configs
 * @bizName assetBiz
 */
export type GetNcIdTrunkGroupConfigsResTypeByAts = {
    totalCount: number;
    records: Array<{
        trunkGroupNumber: number;
        trunkGroupDescription: string;
        dualSystemAttribute: boolean;
        callAreaInHost: number;
        trunkGroupType: number;
        callPriority: number;
        maxCall: number;
        effectiveDate: number;
        effectiveTime: string;
        physicalState: number;
        isEnable: boolean;
    }>;
};

/**
 * @description 获取网络总览
 * @summary Request data types
 * @url [ put ] /api/Networks
 * @bizName assetBiz
 */
export type PutNetworksReqTypeByAts = {
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 获取网络总览
 * @summary Response data types
 * @url [ put ] /api/Networks
 * @bizName assetBiz
 */
export type PutNetworksResTypeByAts = {
    name: string;
    description: string;
    totalCount: number;
    onlineCount: number;
    isHaveOnlineState: boolean;
    onlinePercent: number;
    group: Array<{
        name: string;
        description: string;
        totalCount: number;
        onlineCount: number;
        isHaveOnlineState: boolean;
        onlinePercent: number;
        group: Array<Record<string, any>>;
        managerAddress: string;
    }>;
    managerAddress: string;
};

/**
 * @description 获取所有网络
 * @summary Request data types
 * @url [ get ] /api/Networks
 * @bizName assetBiz
 */
export type GetNetworksReqTypeByAts = {
    keyword?: string;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取所有网络
 * @summary Response data types
 * @url [ get ] /api/Networks
 * @bizName assetBiz
 */
export type GetNetworksResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        networkInterface: string;
        boundWidth: number;
        description: string;
        networkType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
        extension: any;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        resourceId: string;
        createTime: string;
        status: 1 | 2;
        areaCode: string;
        location: {
            longitude: number;
            latitude: number;
            address: string;
            directionAngle: number;
            pitchAngle: number;
            zoom: number;
            extension: any;
        };
        assetMetrics: Array<{
            metricsId: string;
            name: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            alertTypeId: string;
            jobMetaName: string;
            resourceId: string;
        }>;
        maintenance: {
            cron: string;
            advanceRemindDays: number;
            lastMaintenanceTime: string;
            startUseTime: string;
            lifetime: number;
            maintenancePeriodType: 0 | 1;
            status: 0 | 1 | 2;
            expiryTime: string;
        };
        proxyIp: string;
        proxyPort: number;
    }>;
};

/**
 * @description 增加网络
 * @summary Request data types
 * @url [ post ] /api/Networks
 * @bizName assetBiz
 */
export type PostNetworksReqTypeByAts = {
    'X-version'?: string;
    name: string;
    networkInterface: string;
    boundWidth?: number;
    description?: string;
    networkType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    extension?: any;
    contact?: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    resourceId?: string;
    areaCode?: string;
    location?: {
        longitude: number;
        latitude: number;
        address: string;
        directionAngle: number;
        pitchAngle: number;
        zoom: number;
        extension: any;
    };
    assetMetrics?: Array<{
        metricsId: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        jobMetaName: string;
    }>;
    maintenance?: {
        cron: string;
        advanceRemindDays: number;
        lastMaintenanceTime: string;
        startUseTime: string;
        lifetime: number;
        maintenancePeriodType: 0 | 1;
    };
    proxyIp?: string;
    proxyPort?: number;
};

/**
 * @description 增加网络
 * @summary Response data types
 * @url [ post ] /api/Networks
 * @bizName assetBiz
 */
export type PostNetworksResTypeByAts = {
    id: string;
    name: string;
    networkInterface: string;
    boundWidth: number;
    description: string;
    networkType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    extension: any;
    contact: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    resourceId: string;
    createTime: string;
    status: 1 | 2;
    areaCode: string;
    location: {
        longitude: number;
        latitude: number;
        address: string;
        directionAngle: number;
        pitchAngle: number;
        zoom: number;
        extension: any;
    };
    assetMetrics: Array<{
        metricsId: string;
        name: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        alertTypeId: string;
        jobMetaName: string;
        resourceId: string;
    }>;
    maintenance: {
        cron: string;
        advanceRemindDays: number;
        lastMaintenanceTime: string;
        startUseTime: string;
        lifetime: number;
        maintenancePeriodType: 0 | 1;
        status: 0 | 1 | 2;
        expiryTime: string;
    };
    proxyIp: string;
    proxyPort: number;
};

/**
 * @description 通过ID获取网络
 * @summary Request data types
 * @url [ get ] /api/Networks/{id}
 * @bizName assetBiz
 */
export type GetNetworksIdReqTypeByAts = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 通过ID获取网络
 * @summary Response data types
 * @url [ get ] /api/Networks/{id}
 * @bizName assetBiz
 */
export type GetNetworksIdResTypeByAts = {
    id: string;
    name: string;
    networkInterface: string;
    boundWidth: number;
    description: string;
    networkType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    extension: any;
    contact: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    resourceId: string;
    createTime: string;
    status: 1 | 2;
    areaCode: string;
    location: {
        longitude: number;
        latitude: number;
        address: string;
        directionAngle: number;
        pitchAngle: number;
        zoom: number;
        extension: any;
    };
    assetMetrics: Array<{
        metricsId: string;
        name: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        alertTypeId: string;
        jobMetaName: string;
        resourceId: string;
    }>;
    maintenance: {
        cron: string;
        advanceRemindDays: number;
        lastMaintenanceTime: string;
        startUseTime: string;
        lifetime: number;
        maintenancePeriodType: 0 | 1;
        status: 0 | 1 | 2;
        expiryTime: string;
    };
    proxyIp: string;
    proxyPort: number;
};

/**
 * @description 更新网络
 * @summary Request data types
 * @url [ put ] /api/Networks/{id}
 * @bizName assetBiz
 */
export type PutNetworksIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
    name: string;
    networkInterface: string;
    boundWidth?: number;
    description?: string;
    networkType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    extension?: any;
    contact?: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    resourceId?: string;
    areaCode?: string;
    location?: {
        longitude: number;
        latitude: number;
        address: string;
        directionAngle: number;
        pitchAngle: number;
        zoom: number;
        extension: any;
    };
    assetMetrics?: Array<{
        metricsId: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        jobMetaName: string;
    }>;
    maintenance?: {
        cron: string;
        advanceRemindDays: number;
        lastMaintenanceTime: string;
        startUseTime: string;
        lifetime: number;
        maintenancePeriodType: 0 | 1;
    };
    proxyIp?: string;
    proxyPort?: number;
};

/**
 * @description 删除网络
 * @summary Request data types
 * @url [ delete ] /api/Networks/{id}
 * @bizName assetBiz
 */
export type DeleteNetworksIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description POST查询网络集合
 * @summary Request data types
 * @url [ post ] /api/Networks/search
 * @bizName assetBiz
 */
export type PostNetworksSearchReqTypeByAts = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    keyword?: string;
    prefixAreaCodes?: Array<string>;
    isMatchNullAreaCode?: boolean;
    networkIds?: Array<string>;
    status?: 1 | 2;
};

/**
 * @description POST查询网络集合
 * @summary Response data types
 * @url [ post ] /api/Networks/search
 * @bizName assetBiz
 */
export type PostNetworksSearchResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        networkInterface: string;
        boundWidth: number;
        description: string;
        networkType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
        extension: any;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        resourceId: string;
        createTime: string;
        status: 1 | 2;
        areaCode: string;
        location: {
            longitude: number;
            latitude: number;
            address: string;
            directionAngle: number;
            pitchAngle: number;
            zoom: number;
            extension: any;
        };
        assetMetrics: Array<{
            metricsId: string;
            name: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            alertTypeId: string;
            jobMetaName: string;
            resourceId: string;
        }>;
        maintenance: {
            cron: string;
            advanceRemindDays: number;
            lastMaintenanceTime: string;
            startUseTime: string;
            lifetime: number;
            maintenancePeriodType: 0 | 1;
            status: 0 | 1 | 2;
            expiryTime: string;
        };
        proxyIp: string;
        proxyPort: number;
    }>;
};

/**
 * @description 网络导入
 * @summary Request data types
 * @url [ post ] /api/Networks/import
 * @bizName assetBiz
 */
export type PostNetworksImportReqTypeByAts = {
    'X-version'?: string;
    importNetworks: Array<{
        name: string;
        networkInterface: string;
        boundWidth: number;
        description: string;
        networkType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
        extension: any;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        resourceId: string;
        areaCode: string;
        location: {
            longitude: number;
            latitude: number;
            address: string;
            directionAngle: number;
            pitchAngle: number;
            zoom: number;
            extension: any;
        };
        assetMetrics: Array<{
            metricsId: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            jobMetaName: string;
        }>;
        maintenance: {
            cron: string;
            advanceRemindDays: number;
            lastMaintenanceTime: string;
            startUseTime: string;
            lifetime: number;
            maintenancePeriodType: 0 | 1;
        };
        proxyIp: string;
        proxyPort: number;
    }>;
};

/**
 * @description 获取平台总览
 * @summary Request data types
 * @url [ put ] /api/Platforms
 * @bizName assetBiz
 */
export type PutPlatformsReqTypeByAts = {
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 获取平台总览
 * @summary Response data types
 * @url [ put ] /api/Platforms
 * @bizName assetBiz
 */
export type PutPlatformsResTypeByAts = {
    name: string;
    description: string;
    totalCount: number;
    onlineCount: number;
    isHaveOnlineState: boolean;
    onlinePercent: number;
    group: Array<{
        name: string;
        description: string;
        totalCount: number;
        onlineCount: number;
        isHaveOnlineState: boolean;
        onlinePercent: number;
        group: Array<Record<string, any>>;
        managerAddress: string;
    }>;
    managerAddress: string;
};

/**
 * @description 搜索第三方平台
 * @summary Request data types
 * @url [ get ] /api/Platforms
 * @bizName assetBiz
 */
export type GetPlatformsReqTypeByAts = {
    keyword?: string;
    platformIds?: Array<string>;
    prefixAreaCode?: string;
    networkID?: string;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 搜索第三方平台
 * @summary Response data types
 * @url [ get ] /api/Platforms
 * @bizName assetBiz
 */
export type GetPlatformsResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        ipAddress: string;
        managerAddress: string;
        name: string;
        description: string;
        status: 1 | 2;
        account: string;
        password: string;
        areaCode: string;
        department: string;
        extension: any;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        accessMethod: string;
        resourceId: string;
        createTime: string;
        network: {
            id: string;
            name: string;
        };
        location: {
            longitude: number;
            latitude: number;
            address: string;
            directionAngle: number;
            pitchAngle: number;
            zoom: number;
            extension: any;
        };
        assetMetrics: Array<{
            metricsId: string;
            name: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            alertTypeId: string;
            jobMetaName: string;
            resourceId: string;
        }>;
        maintenance: {
            cron: string;
            advanceRemindDays: number;
            lastMaintenanceTime: string;
            startUseTime: string;
            lifetime: number;
            maintenancePeriodType: 0 | 1;
            status: 0 | 1 | 2;
            expiryTime: string;
        };
    }>;
};

/**
 * @description 增加平台
 * @summary Request data types
 * @url [ post ] /api/Platforms
 * @bizName assetBiz
 */
export type PostPlatformsReqTypeByAts = {
    'X-version'?: string;
    name: string;
    description?: string;
    ipAddress?: string;
    managerAddress: string;
    account?: string;
    password?: string;
    areaCode?: string;
    department?: string;
    extension?: any;
    contact?: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    accessMethod?: string;
    networkID?: string;
    resourceId?: string;
    location?: {
        longitude: number;
        latitude: number;
        address: string;
        directionAngle: number;
        pitchAngle: number;
        zoom: number;
        extension: any;
    };
    assetMetrics?: Array<{
        metricsId: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        jobMetaName: string;
    }>;
    maintenance?: {
        cron: string;
        advanceRemindDays: number;
        lastMaintenanceTime: string;
        startUseTime: string;
        lifetime: number;
        maintenancePeriodType: 0 | 1;
    };
};

/**
 * @description 增加平台
 * @summary Response data types
 * @url [ post ] /api/Platforms
 * @bizName assetBiz
 */
export type PostPlatformsResTypeByAts = {
    id: string;
    ipAddress: string;
    managerAddress: string;
    name: string;
    description: string;
    status: 1 | 2;
    account: string;
    password: string;
    areaCode: string;
    department: string;
    extension: any;
    contact: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    accessMethod: string;
    resourceId: string;
    createTime: string;
    network: {
        id: string;
        name: string;
    };
    location: {
        longitude: number;
        latitude: number;
        address: string;
        directionAngle: number;
        pitchAngle: number;
        zoom: number;
        extension: any;
    };
    assetMetrics: Array<{
        metricsId: string;
        name: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        alertTypeId: string;
        jobMetaName: string;
        resourceId: string;
    }>;
    maintenance: {
        cron: string;
        advanceRemindDays: number;
        lastMaintenanceTime: string;
        startUseTime: string;
        lifetime: number;
        maintenancePeriodType: 0 | 1;
        status: 0 | 1 | 2;
        expiryTime: string;
    };
};

/**
 * @description POST查询平台集合
 * @summary Request data types
 * @url [ post ] /api/Platforms/search
 * @bizName assetBiz
 */
export type PostPlatformsSearchReqTypeByAts = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    platformIds?: Array<string>;
    keyword?: string;
    prefixAreaCodes?: Array<string>;
    networkId?: string;
    status?: 1 | 2;
    isMatchNullAreaCode?: boolean;
};

/**
 * @description POST查询平台集合
 * @summary Response data types
 * @url [ post ] /api/Platforms/search
 * @bizName assetBiz
 */
export type PostPlatformsSearchResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        ipAddress: string;
        managerAddress: string;
        name: string;
        description: string;
        status: 1 | 2;
        account: string;
        password: string;
        areaCode: string;
        department: string;
        extension: any;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        accessMethod: string;
        resourceId: string;
        createTime: string;
        network: {
            id: string;
            name: string;
        };
        location: {
            longitude: number;
            latitude: number;
            address: string;
            directionAngle: number;
            pitchAngle: number;
            zoom: number;
            extension: any;
        };
        assetMetrics: Array<{
            metricsId: string;
            name: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            alertTypeId: string;
            jobMetaName: string;
            resourceId: string;
        }>;
        maintenance: {
            cron: string;
            advanceRemindDays: number;
            lastMaintenanceTime: string;
            startUseTime: string;
            lifetime: number;
            maintenancePeriodType: 0 | 1;
            status: 0 | 1 | 2;
            expiryTime: string;
        };
    }>;
};

/**
 * @description 获取平台
 * @summary Request data types
 * @url [ get ] /api/Platforms/{id}
 * @bizName assetBiz
 */
export type GetPlatformsIdReqTypeByAts = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 获取平台
 * @summary Response data types
 * @url [ get ] /api/Platforms/{id}
 * @bizName assetBiz
 */
export type GetPlatformsIdResTypeByAts = {
    id: string;
    ipAddress: string;
    managerAddress: string;
    name: string;
    description: string;
    status: 1 | 2;
    account: string;
    password: string;
    areaCode: string;
    department: string;
    extension: any;
    contact: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    accessMethod: string;
    resourceId: string;
    createTime: string;
    network: {
        id: string;
        name: string;
    };
    location: {
        longitude: number;
        latitude: number;
        address: string;
        directionAngle: number;
        pitchAngle: number;
        zoom: number;
        extension: any;
    };
    assetMetrics: Array<{
        metricsId: string;
        name: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        alertTypeId: string;
        jobMetaName: string;
        resourceId: string;
    }>;
    maintenance: {
        cron: string;
        advanceRemindDays: number;
        lastMaintenanceTime: string;
        startUseTime: string;
        lifetime: number;
        maintenancePeriodType: 0 | 1;
        status: 0 | 1 | 2;
        expiryTime: string;
    };
};

/**
 * @description 更新平台
 * @summary Request data types
 * @url [ put ] /api/Platforms/{id}
 * @bizName assetBiz
 */
export type PutPlatformsIdReqTypeByAts = {
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
    extension?: any;
    contact?: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    accessMethod?: string;
    networkID?: string;
    resourceId?: string;
    location?: {
        longitude: number;
        latitude: number;
        address: string;
        directionAngle: number;
        pitchAngle: number;
        zoom: number;
        extension: any;
    };
    assetMetrics?: Array<{
        metricsId: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        jobMetaName: string;
    }>;
    maintenance?: {
        cron: string;
        advanceRemindDays: number;
        lastMaintenanceTime: string;
        startUseTime: string;
        lifetime: number;
        maintenancePeriodType: 0 | 1;
    };
};

/**
 * @description 删除平台
 * @summary Request data types
 * @url [ delete ] /api/Platforms/{id}
 * @bizName assetBiz
 */
export type DeletePlatformsIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 批量删除
 * @summary Request data types
 * @url [ delete ] /api/Platforms/Batch
 * @bizName assetBiz
 */
export type DeletePlatformsBatchReqTypeByAts = {
    'X-version'?: string;
    ids: Array<string>;
};

/**
 * @description 第三方平台导入
 * @summary Request data types
 * @url [ post ] /api/Platforms/import
 * @bizName assetBiz
 */
export type PostPlatformsImportReqTypeByAts = {
    'X-version'?: string;
    importThirdPlatforms: Array<{
        name: string;
        description: string;
        ipAddress: string;
        managerAddress: string;
        account: string;
        password: string;
        areaCode: string;
        department: string;
        extension: any;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        accessMethod: string;
        networkID: string;
        resourceId: string;
        location: {
            longitude: number;
            latitude: number;
            address: string;
            directionAngle: number;
            pitchAngle: number;
            zoom: number;
            extension: any;
        };
        assetMetrics: Array<{
            metricsId: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            jobMetaName: string;
        }>;
        maintenance: {
            cron: string;
            advanceRemindDays: number;
            lastMaintenanceTime: string;
            startUseTime: string;
            lifetime: number;
            maintenancePeriodType: 0 | 1;
        };
    }>;
};

/**
 * @description 搜索定点装备
 * @summary Request data types
 * @url [ get ] /api/PositionEquipment
 * @bizName assetBiz
 */
export type GetPositionEquipmentReqTypeByAts = {
    keyword?: string;
    networkID?: string;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 搜索定点装备
 * @summary Response data types
 * @url [ get ] /api/PositionEquipment
 * @bizName assetBiz
 */
export type GetPositionEquipmentResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        equipmentType: 0 | 1 | 2;
        collectionCycle: number;
        description: string;
        status: 1 | 2;
        network: {
            id: string;
            name: string;
        };
        areaCode: string;
        resourceId: string;
        location: {
            longitude: number;
            latitude: number;
            address: string;
            directionAngle: number;
            pitchAngle: number;
            zoom: number;
            extension: any;
        };
        assetMetrics: Array<{
            metricsId: string;
            name: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            alertTypeId: string;
            jobMetaName: string;
            resourceId: string;
        }>;
        maintenance: {
            cron: string;
            advanceRemindDays: number;
            lastMaintenanceTime: string;
            startUseTime: string;
            lifetime: number;
            maintenancePeriodType: 0 | 1;
            status: 0 | 1 | 2;
            expiryTime: string;
        };
    }>;
};

/**
 * @description 增加定点装备
 * @summary Request data types
 * @url [ post ] /api/PositionEquipment
 * @bizName assetBiz
 */
export type PostPositionEquipmentReqTypeByAts = {
    'X-version'?: string;
    name: string;
    contact?: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    equipmentType?: 0 | 1 | 2;
    collectionCycle?: number;
    description?: string;
    networkID?: string;
    areaCode?: string;
    resourceId?: string;
    location?: {
        longitude: number;
        latitude: number;
        address: string;
        directionAngle: number;
        pitchAngle: number;
        zoom: number;
        extension: any;
    };
    assetMetrics?: Array<{
        metricsId: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        jobMetaName: string;
    }>;
    maintenance?: {
        cron: string;
        advanceRemindDays: number;
        lastMaintenanceTime: string;
        startUseTime: string;
        lifetime: number;
        maintenancePeriodType: 0 | 1;
    };
};

/**
 * @description 增加定点装备
 * @summary Response data types
 * @url [ post ] /api/PositionEquipment
 * @bizName assetBiz
 */
export type PostPositionEquipmentResTypeByAts = {
    id: string;
    name: string;
    contact: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    equipmentType: 0 | 1 | 2;
    collectionCycle: number;
    description: string;
    status: 1 | 2;
    network: {
        id: string;
        name: string;
    };
    areaCode: string;
    resourceId: string;
    location: {
        longitude: number;
        latitude: number;
        address: string;
        directionAngle: number;
        pitchAngle: number;
        zoom: number;
        extension: any;
    };
    assetMetrics: Array<{
        metricsId: string;
        name: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        alertTypeId: string;
        jobMetaName: string;
        resourceId: string;
    }>;
    maintenance: {
        cron: string;
        advanceRemindDays: number;
        lastMaintenanceTime: string;
        startUseTime: string;
        lifetime: number;
        maintenancePeriodType: 0 | 1;
        status: 0 | 1 | 2;
        expiryTime: string;
    };
};

/**
 * @description 通过ID获取定点装备
 * @summary Request data types
 * @url [ get ] /api/PositionEquipment/{id}
 * @bizName assetBiz
 */
export type GetPositionEquipmentIdReqTypeByAts = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 通过ID获取定点装备
 * @summary Response data types
 * @url [ get ] /api/PositionEquipment/{id}
 * @bizName assetBiz
 */
export type GetPositionEquipmentIdResTypeByAts = {
    id: string;
    name: string;
    contact: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    equipmentType: 0 | 1 | 2;
    collectionCycle: number;
    description: string;
    status: 1 | 2;
    network: {
        id: string;
        name: string;
    };
    areaCode: string;
    resourceId: string;
    location: {
        longitude: number;
        latitude: number;
        address: string;
        directionAngle: number;
        pitchAngle: number;
        zoom: number;
        extension: any;
    };
    assetMetrics: Array<{
        metricsId: string;
        name: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        alertTypeId: string;
        jobMetaName: string;
        resourceId: string;
    }>;
    maintenance: {
        cron: string;
        advanceRemindDays: number;
        lastMaintenanceTime: string;
        startUseTime: string;
        lifetime: number;
        maintenancePeriodType: 0 | 1;
        status: 0 | 1 | 2;
        expiryTime: string;
    };
};

/**
 * @description 更新定点装备
 * @summary Request data types
 * @url [ put ] /api/PositionEquipment/{id}
 * @bizName assetBiz
 */
export type PutPositionEquipmentIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
    name: string;
    contact?: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    equipmentType?: 0 | 1 | 2;
    collectionCycle?: number;
    description?: string;
    networkID?: string;
    areaCode?: string;
    resourceId?: string;
    location?: {
        longitude: number;
        latitude: number;
        address: string;
        directionAngle: number;
        pitchAngle: number;
        zoom: number;
        extension: any;
    };
    assetMetrics?: Array<{
        metricsId: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        jobMetaName: string;
    }>;
    maintenance?: {
        cron: string;
        advanceRemindDays: number;
        lastMaintenanceTime: string;
        startUseTime: string;
        lifetime: number;
        maintenancePeriodType: 0 | 1;
    };
};

/**
 * @description 删除定点装备
 * @summary Request data types
 * @url [ delete ] /api/PositionEquipment/{id}
 * @bizName assetBiz
 */
export type DeletePositionEquipmentIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 定位装备导入
 * @summary Request data types
 * @url [ post ] /api/PositionEquipment/import
 * @bizName assetBiz
 */
export type PostPositionEquipmentImportReqTypeByAts = {
    'X-version'?: string;
    importPositionEquipments: Array<{
        name: string;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        equipmentType: 0 | 1 | 2;
        collectionCycle: number;
        description: string;
        networkID: string;
        areaCode: string;
        resourceId: string;
        location: {
            longitude: number;
            latitude: number;
            address: string;
            directionAngle: number;
            pitchAngle: number;
            zoom: number;
            extension: any;
        };
        assetMetrics: Array<{
            metricsId: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            jobMetaName: string;
        }>;
        maintenance: {
            cron: string;
            advanceRemindDays: number;
            lastMaintenanceTime: string;
            startUseTime: string;
            lifetime: number;
            maintenancePeriodType: 0 | 1;
        };
    }>;
};

/**
 * @description 总览
 * @summary Request data types
 * @url [ get ] /api/Statistics/Overview
 * @bizName assetBiz
 */
export type GetStatisticsOverviewReqTypeByAts = {
    ignoreOtherPlatform?: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 总览
 * @summary Response data types
 * @url [ get ] /api/Statistics/Overview
 * @bizName assetBiz
 */
export type GetStatisticsOverviewResTypeByAts = {
    totalCount: number;
    records: Array<{
        assetType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        totalCount: number;
        onlineCount: number;
        audioAndVideo: {
            totalCount: number;
            audioCount: number;
            videoCount: number;
            days: number;
        };
        assetAlarm: {
            totalCount: number;
            processedCount: number;
            unProcessedCount: number;
        };
    }>;
};

/**
 * @description 支持行政区域前缀获取总览
 * @summary Request data types
 * @url [ post ] /api/Statistics/Overview/Search
 * @bizName assetBiz
 */
export type PostStatisticsOverviewSearchReqTypeByAts = {
    'X-version'?: string;
    platformId?: string;
    ignoreOtherPlatform?: string;
    prefixAreaCodes?: Array<string>;
};

/**
 * @description 支持行政区域前缀获取总览
 * @summary Response data types
 * @url [ post ] /api/Statistics/Overview/Search
 * @bizName assetBiz
 */
export type PostStatisticsOverviewSearchResTypeByAts = {
    totalCount: number;
    records: Array<{
        assetType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        totalCount: number;
        onlineCount: number;
        audioAndVideo: {
            totalCount: number;
            audioCount: number;
            videoCount: number;
            days: number;
        };
        assetAlarm: {
            totalCount: number;
            processedCount: number;
            unProcessedCount: number;
        };
    }>;
};

/**
 * @description 客户端总览
 * @summary Request data types
 * @url [ get ] /api/Statistics/Overview/Client
 * @bizName assetBiz
 */
export type GetStatisticsOverviewClientReqTypeByAts = {
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 客户端总览
 * @summary Response data types
 * @url [ get ] /api/Statistics/Overview/Client
 * @bizName assetBiz
 */
export type GetStatisticsOverviewClientResTypeByAts = {
    totalCount: number;
    records: Array<{
        clientType: 0 | 1 | 2;
        totalCount: number;
        onlineCount: number;
    }>;
};

/**
 * @description 支持行政区域前缀获取客户端总览
 * @summary Request data types
 * @url [ post ] /api/Statistics/Overview/Client/Search
 * @bizName assetBiz
 */
export type PostStatisticsOverviewClientSearchReqTypeByAts = {
    'X-version'?: string;
    platformId?: string;
    prefixAreaCodes?: Array<string>;
};

/**
 * @description 支持行政区域前缀获取客户端总览
 * @summary Response data types
 * @url [ post ] /api/Statistics/Overview/Client/Search
 * @bizName assetBiz
 */
export type PostStatisticsOverviewClientSearchResTypeByAts = {
    totalCount: number;
    records: Array<{
        clientType: 0 | 1 | 2;
        totalCount: number;
        onlineCount: number;
    }>;
};

/**
 * @description 终端总览
 * @summary Request data types
 * @url [ get ] /api/Statistics/Overview/Terminal
 * @bizName assetBiz
 */
export type GetStatisticsOverviewTerminalReqTypeByAts = {
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 终端总览
 * @summary Response data types
 * @url [ get ] /api/Statistics/Overview/Terminal
 * @bizName assetBiz
 */
export type GetStatisticsOverviewTerminalResTypeByAts = {
    totalCount: number;
    records: Array<{
        terminalType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        totalCount: number;
        onlineCount: number;
    }>;
};

/**
 * @description 支持行政区域前缀获取终端总览
 * @summary Request data types
 * @url [ post ] /api/Statistics/Overview/Terminal/Search
 * @bizName assetBiz
 */
export type PostStatisticsOverviewTerminalSearchReqTypeByAts = {
    'X-version'?: string;
    platformId?: string;
    prefixAreaCodes?: Array<string>;
};

/**
 * @description 支持行政区域前缀获取终端总览
 * @summary Response data types
 * @url [ post ] /api/Statistics/Overview/Terminal/Search
 * @bizName assetBiz
 */
export type PostStatisticsOverviewTerminalSearchResTypeByAts = {
    totalCount: number;
    records: Array<{
        terminalType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        totalCount: number;
        onlineCount: number;
    }>;
};

/**
 * @description 按行政区域统计终端
 * @summary Request data types
 * @url [ post ] /api/Statistics/Area/Terminal
 * @bizName assetBiz
 */
export type PostStatisticsAreaTerminalReqTypeByAts = {
    'X-version'?: string;
    prefixAreaCodes?: Array<string>;
    terminalType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};

/**
 * @description 按行政区域统计终端
 * @summary Response data types
 * @url [ post ] /api/Statistics/Area/Terminal
 * @bizName assetBiz
 */
export type PostStatisticsAreaTerminalResTypeByAts = {
    totalCount: number;
    records: Array<{
        prefixAreaCode: string;
        count: number;
    }>;
};

/**
 * @description 按行政区域统计第三方平台
 * @summary Request data types
 * @url [ post ] /api/Statistics/Area/Platform
 * @bizName assetBiz
 */
export type PostStatisticsAreaPlatformReqTypeByAts = {
    'X-version'?: string;
    prefixAreaCodes?: Array<string>;
};

/**
 * @description 按行政区域统计第三方平台
 * @summary Response data types
 * @url [ post ] /api/Statistics/Area/Platform
 * @bizName assetBiz
 */
export type PostStatisticsAreaPlatformResTypeByAts = {
    totalCount: number;
    records: Array<{
        prefixAreaCode: string;
        count: number;
    }>;
};

/**
 * @description 获取监测设备终端分类统计
 * @summary Request data types
 * @url [ post ] /api/Statistics/MonitorDevice
 * @bizName assetBiz
 */
export type PostStatisticsMonitorDeviceReqTypeByAts = {
    'X-version'?: string;
    prefixAreaCodes?: Array<string>;
};

/**
 * @description 获取监测设备终端分类统计
 * @summary Response data types
 * @url [ post ] /api/Statistics/MonitorDevice
 * @bizName assetBiz
 */
export type PostStatisticsMonitorDeviceResTypeByAts = {
    totalCount: number;
    records: Array<{
        relateTypeId: string;
        totalCount: number;
    }>;
};

/**
 * @description 资产类型统计
 * @summary Request data types
 * @url [ post ] /api/Statistics/AssetType
 * @bizName assetBiz
 */
export type PostStatisticsAssetTypeReqTypeByAts = {
    'X-version'?: string;
    prefixAreaCodes?: Array<string>;
    functionTypes?: 1 | 2 | 4 | 8;
    assetType?: 0 | 1 | 2 | 3 | 4 | 5;
    parentId?: string;
    isMatchNullAreaCode?: boolean;
};

/**
 * @description 资产类型统计
 * @summary Response data types
 * @url [ post ] /api/Statistics/AssetType
 * @bizName assetBiz
 */
export type PostStatisticsAssetTypeResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        assetType: 0 | 1 | 2 | 3 | 4 | 5;
        secondaryAssetType: number;
        relateTypeId: string;
        totalCount: number;
        onlineTotalCount: number;
        isLeaf: boolean;
        isLeafType: boolean;
    }>;
};

/**
 * @description 获取终端总览
 * @summary Request data types
 * @url [ put ] /api/Terminals
 * @bizName assetBiz
 */
export type PutTerminalsReqTypeByAts = {
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 获取终端总览
 * @summary Response data types
 * @url [ put ] /api/Terminals
 * @bizName assetBiz
 */
export type PutTerminalsResTypeByAts = {
    name: string;
    description: string;
    totalCount: number;
    onlineCount: number;
    isHaveOnlineState: boolean;
    onlinePercent: number;
    group: Array<{
        name: string;
        description: string;
        totalCount: number;
        onlineCount: number;
        isHaveOnlineState: boolean;
        onlinePercent: number;
        group: Array<Record<string, any>>;
        managerAddress: string;
    }>;
    managerAddress: string;
};

/**
 * @description 终端搜索
 * @summary Request data types
 * @url [ get ] /api/Terminals
 * @bizName assetBiz
 */
export type GetTerminalsReqTypeByAts = {
    keyword?: string;
    terminalIds?: Array<string>;
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
 * @description 终端搜索
 * @summary Response data types
 * @url [ get ] /api/Terminals
 * @bizName assetBiz
 */
export type GetTerminalsResTypeByAts = {
    totalCount: number;
    records: Array<{
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
        terminalType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        areaCode: string;
        protocolType: string;
        relatePlatform: {
            id: string;
            name: string;
        };
        extension: any;
        relateCameraId: string;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        status: 1 | 2;
        relateType: any;
        terminalGroup: {
            id: string;
            name: string;
        };
        network: {
            id: string;
            name: string;
        };
        terminalLocation: {
            longitude: number;
            latitude: number;
            address: string;
            directionAngle: number;
            pitchAngle: number;
            zoom: number;
            extension: any;
        };
        assetMetrics: Array<{
            metricsId: string;
            name: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            alertTypeId: string;
            jobMetaName: string;
            resourceId: string;
        }>;
        source: any;
        maintenance: {
            cron: string;
            advanceRemindDays: number;
            lastMaintenanceTime: string;
            startUseTime: string;
            lifetime: number;
            maintenancePeriodType: 0 | 1;
            status: 0 | 1 | 2;
            expiryTime: string;
        };
    }>;
};

/**
 * @description 新增终端
 * @summary Request data types
 * @url [ post ] /api/Terminals
 * @bizName assetBiz
 */
export type PostTerminalsReqTypeByAts = {
    'X-version'?: string;
    name: string;
    ip?: string;
    port?: string;
    number?: string;
    description?: string;
    account?: string;
    password?: string;
    terminalType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    areaCode?: string;
    protocolType?: string;
    relatePlatformId?: string;
    extension?: any;
    contact?: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    groupId?: string;
    networkID?: string;
    resourceId?: string;
    relateTypeId?: string;
    terminalLocation?: {
        longitude: number;
        latitude: number;
        address: string;
        directionAngle: number;
        pitchAngle: number;
        zoom: number;
        extension: any;
    };
    assetMetrics?: Array<{
        metricsId: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        jobMetaName: string;
    }>;
    sourceId?: string;
    relateCameraId?: string;
    maintenance?: {
        cron: string;
        advanceRemindDays: number;
        lastMaintenanceTime: string;
        startUseTime: string;
        lifetime: number;
        maintenancePeriodType: 0 | 1;
    };
};

/**
 * @description 新增终端
 * @summary Response data types
 * @url [ post ] /api/Terminals
 * @bizName assetBiz
 */
export type PostTerminalsResTypeByAts = {
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
    terminalType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    areaCode: string;
    protocolType: string;
    relatePlatform: {
        id: string;
        name: string;
    };
    extension: any;
    relateCameraId: string;
    contact: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    status: 1 | 2;
    relateType: any;
    terminalGroup: {
        id: string;
        name: string;
    };
    network: {
        id: string;
        name: string;
    };
    terminalLocation: {
        longitude: number;
        latitude: number;
        address: string;
        directionAngle: number;
        pitchAngle: number;
        zoom: number;
        extension: any;
    };
    assetMetrics: Array<{
        metricsId: string;
        name: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        alertTypeId: string;
        jobMetaName: string;
        resourceId: string;
    }>;
    source: any;
    maintenance: {
        cron: string;
        advanceRemindDays: number;
        lastMaintenanceTime: string;
        startUseTime: string;
        lifetime: number;
        maintenancePeriodType: 0 | 1;
        status: 0 | 1 | 2;
        expiryTime: string;
    };
};

/**
 * @description POST查询终端集合
 * @summary Request data types
 * @url [ post ] /api/Terminals/search
 * @bizName assetBiz
 */
export type PostTerminalsSearchReqTypeByAts = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    terminalIds?: Array<string>;
    keyword?: string;
    prefixAreaCodes?: Array<string>;
    terminalType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    status?: 1 | 2;
    networkID?: string;
    relateTypeId?: string;
    isSearchNullRelateType?: boolean;
    relateTypeIds?: Array<string>;
    sourceId?: string;
    groupId?: string;
    isMatchNullAreaCode?: boolean;
};

/**
 * @description POST查询终端集合
 * @summary Response data types
 * @url [ post ] /api/Terminals/search
 * @bizName assetBiz
 */
export type PostTerminalsSearchResTypeByAts = {
    totalCount: number;
    records: Array<{
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
        terminalType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        areaCode: string;
        protocolType: string;
        relatePlatform: {
            id: string;
            name: string;
        };
        extension: any;
        relateCameraId: string;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        status: 1 | 2;
        relateType: any;
        terminalGroup: {
            id: string;
            name: string;
        };
        network: {
            id: string;
            name: string;
        };
        terminalLocation: {
            longitude: number;
            latitude: number;
            address: string;
            directionAngle: number;
            pitchAngle: number;
            zoom: number;
            extension: any;
        };
        assetMetrics: Array<{
            metricsId: string;
            name: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            alertTypeId: string;
            jobMetaName: string;
            resourceId: string;
        }>;
        source: any;
        maintenance: {
            cron: string;
            advanceRemindDays: number;
            lastMaintenanceTime: string;
            startUseTime: string;
            lifetime: number;
            maintenancePeriodType: 0 | 1;
            status: 0 | 1 | 2;
            expiryTime: string;
        };
    }>;
};

/**
 * @description 获取终端
 * @summary Request data types
 * @url [ get ] /api/Terminals/{id}
 * @bizName assetBiz
 */
export type GetTerminalsIdReqTypeByAts = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 获取终端
 * @summary Response data types
 * @url [ get ] /api/Terminals/{id}
 * @bizName assetBiz
 */
export type GetTerminalsIdResTypeByAts = {
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
    terminalType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    areaCode: string;
    protocolType: string;
    relatePlatform: {
        id: string;
        name: string;
    };
    extension: any;
    relateCameraId: string;
    contact: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    status: 1 | 2;
    relateType: any;
    terminalGroup: {
        id: string;
        name: string;
    };
    network: {
        id: string;
        name: string;
    };
    terminalLocation: {
        longitude: number;
        latitude: number;
        address: string;
        directionAngle: number;
        pitchAngle: number;
        zoom: number;
        extension: any;
    };
    assetMetrics: Array<{
        metricsId: string;
        name: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        alertTypeId: string;
        jobMetaName: string;
        resourceId: string;
    }>;
    source: any;
    maintenance: {
        cron: string;
        advanceRemindDays: number;
        lastMaintenanceTime: string;
        startUseTime: string;
        lifetime: number;
        maintenancePeriodType: 0 | 1;
        status: 0 | 1 | 2;
        expiryTime: string;
    };
};

/**
 * @description 更新终端
 * @summary Request data types
 * @url [ put ] /api/Terminals/{id}
 * @bizName assetBiz
 */
export type PutTerminalsIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
    name: string;
    ip?: string;
    port?: string;
    number?: string;
    description?: string;
    account?: string;
    password?: string;
    terminalType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    areaCode?: string;
    protocolType?: string;
    relatePlatformId?: string;
    extension?: any;
    contact?: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    groupId?: string;
    networkID?: string;
    resourceId?: string;
    relateTypeId?: string;
    terminalLocation?: {
        longitude: number;
        latitude: number;
        address: string;
        directionAngle: number;
        pitchAngle: number;
        zoom: number;
        extension: any;
    };
    assetMetrics?: Array<{
        metricsId: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        jobMetaName: string;
    }>;
    sourceId?: string;
    relateCameraId?: string;
    maintenance?: {
        cron: string;
        advanceRemindDays: number;
        lastMaintenanceTime: string;
        startUseTime: string;
        lifetime: number;
        maintenancePeriodType: 0 | 1;
    };
};

/**
 * @description 删除终端
 * @summary Request data types
 * @url [ delete ] /api/Terminals/{id}
 * @bizName assetBiz
 */
export type DeleteTerminalsIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 批量删除
 * @summary Request data types
 * @url [ delete ] /api/Terminals/Batch
 * @bizName assetBiz
 */
export type DeleteTerminalsBatchReqTypeByAts = {
    'X-version'?: string;
    ids: Array<string>;
};

/**
 * @description 同步VCS视频会议终端
 * @summary Request data types
 * @url [ put ] /api/Terminals/SyncVcsTerminal
 * @bizName assetBiz
 */
export type PutTerminalsSyncVcsTerminalReqTypeByAts = {
    'X-version'?: string;
};

/**
 * @description 导入终端（创建视频会议终端不支持指定resourceId）
 * @summary Request data types
 * @url [ post ] /api/Terminals/import
 * @bizName assetBiz
 */
export type PostTerminalsImportReqTypeByAts = {
    'X-version'?: string;
    importTerminals: Array<{
        name: string;
        ip: string;
        port: string;
        number: string;
        description: string;
        account: string;
        password: string;
        terminalType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        areaCode: string;
        protocolType: string;
        relatePlatformId: string;
        extension: any;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        groupId: string;
        networkID: string;
        resourceId: string;
        relateTypeId: string;
        terminalLocation: {
            longitude: number;
            latitude: number;
            address: string;
            directionAngle: number;
            pitchAngle: number;
            zoom: number;
            extension: any;
        };
        assetMetrics: Array<{
            metricsId: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            jobMetaName: string;
        }>;
        sourceId: string;
        relateCameraId: string;
        maintenance: {
            cron: string;
            advanceRemindDays: number;
            lastMaintenanceTime: string;
            startUseTime: string;
            lifetime: number;
            maintenancePeriodType: 0 | 1;
        };
    }>;
};

/**
 * @description 获取来源
 * @summary Request data types
 * @url [ get ] /api/Terminals/source
 * @bizName assetBiz
 */
export type GetTerminalsSourceReqTypeByAts = {
    TerminalType: number;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取来源
 * @summary Response data types
 * @url [ get ] /api/Terminals/source
 * @bizName assetBiz
 */
export type GetTerminalsSourceResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
    }>;
};

/**
 * @description 通过终端号码获取该终端来源
 * @summary Request data types
 * @url [ get ] /api/Terminals/source/number
 * @bizName assetBiz
 */
export type GetTerminalsSourceNumberReqTypeByAts = {
    TerminalType?: number;
    Number?: string;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 通过终端号码获取该终端来源
 * @summary Response data types
 * @url [ get ] /api/Terminals/source/number
 * @bizName assetBiz
 */
export type GetTerminalsSourceNumberResTypeByAts = {
    totalCount: number;
    records: Array<{
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
        terminalType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        areaCode: string;
        protocolType: string;
        relatePlatform: {
            id: string;
            name: string;
        };
        extension: any;
        relateCameraId: string;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        status: 1 | 2;
        relateType: any;
        terminalGroup: {
            id: string;
            name: string;
        };
        network: {
            id: string;
            name: string;
        };
        terminalLocation: {
            longitude: number;
            latitude: number;
            address: string;
            directionAngle: number;
            pitchAngle: number;
            zoom: number;
            extension: any;
        };
        assetMetrics: Array<{
            metricsId: string;
            name: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            alertTypeId: string;
            jobMetaName: string;
            resourceId: string;
        }>;
        source: any;
        maintenance: {
            cron: string;
            advanceRemindDays: number;
            lastMaintenanceTime: string;
            startUseTime: string;
            lifetime: number;
            maintenancePeriodType: 0 | 1;
            status: 0 | 1 | 2;
            expiryTime: string;
        };
    }>;
};

/**
 * @description 升级关联监控
 * @summary Request data types
 * @url [ get ] /api/Terminals/camera/upgrade
 * @bizName assetBiz
 */
export type GetTerminalsCameraUpgradeReqTypeByAts = {
    'X-version'?: string;
};

/**
 * @description 升级关联监控
 * @summary Response data types
 * @url [ get ] /api/Terminals/camera/upgrade
 * @bizName assetBiz
 */
export type GetTerminalsCameraUpgradeResTypeByAts = {
    totalCount: number;
    records: Array<{
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
        terminalType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        areaCode: string;
        protocolType: string;
        relatePlatform: {
            id: string;
            name: string;
        };
        extension: any;
        relateCameraId: string;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        status: 1 | 2;
        relateType: any;
        terminalGroup: {
            id: string;
            name: string;
        };
        network: {
            id: string;
            name: string;
        };
        terminalLocation: {
            longitude: number;
            latitude: number;
            address: string;
            directionAngle: number;
            pitchAngle: number;
            zoom: number;
            extension: any;
        };
        assetMetrics: Array<{
            metricsId: string;
            name: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            alertTypeId: string;
            jobMetaName: string;
            resourceId: string;
        }>;
        source: any;
        maintenance: {
            cron: string;
            advanceRemindDays: number;
            lastMaintenanceTime: string;
            startUseTime: string;
            lifetime: number;
            maintenancePeriodType: 0 | 1;
            status: 0 | 1 | 2;
            expiryTime: string;
        };
    }>;
};

/**
 * @description 更新资产拓扑
 * @summary Request data types
 * @url [ put ] /api/Topologys/{id}
 * @bizName assetBiz
 */
export type PutTopologysIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
    height?: number;
    width?: number;
    topologyNodes?: Array<{
        nodeId: string;
        isAssetResource: boolean;
        name: string;
        typeName: string;
        color: string;
        height: number;
        width: number;
        coordinateX: number;
        coordinateY: number;
    }>;
    topologyRelationships?: Array<{
        startNodeId: string;
        endNodeId: string;
    }>;
};

/**
 * @description 获取资产拓扑
 * @summary Request data types
 * @url [ get ] /api/Topologys
 * @bizName assetBiz
 */
export type GetTopologysReqTypeByAts = {
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取资产拓扑
 * @summary Response data types
 * @url [ get ] /api/Topologys
 * @bizName assetBiz
 */
export type GetTopologysResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        height: number;
        width: number;
        topologyNodes: Array<{
            id: string;
            nodeId: string;
            isAssetResource: boolean;
            name: string;
            typeName: string;
            color: string;
            height: number;
            width: number;
            coordinateX: number;
            coordinateY: number;
            status: 1 | 2;
        }>;
        topologyRelationships: Array<Record<string, any>>;
    }>;
};

/**
 * @description 获取类型配置
 * @summary Request data types
 * @url [ get ] /api/TypeConfigs/{id}
 * @bizName assetBiz
 */
export type GetTypeConfigsIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取类型配置
 * @summary Response data types
 * @url [ get ] /api/TypeConfigs/{id}
 * @bizName assetBiz
 */
export type GetTypeConfigsIdResTypeByAts = {
    id: string;
    name: string;
    resourceId: string;
    type: 0 | 1 | 2;
};

/**
 * @description 更新类型配置
 * @summary Request data types
 * @url [ put ] /api/TypeConfigs/{id}
 * @bizName assetBiz
 */
export type PutTypeConfigsIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
    name: string;
    resourceId?: string;
    type: 0 | 1 | 2;
};

/**
 * @description 删除类型配置
 * @summary Request data types
 * @url [ delete ] /api/TypeConfigs/{id}
 * @bizName assetBiz
 */
export type DeleteTypeConfigsIdReqTypeByAts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 搜索类型配置
 * @summary Request data types
 * @url [ get ] /api/TypeConfigs
 * @bizName assetBiz
 */
export type GetTypeConfigsReqTypeByAts = {
    keyword?: string;
    Type?: number;
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 搜索类型配置
 * @summary Response data types
 * @url [ get ] /api/TypeConfigs
 * @bizName assetBiz
 */
export type GetTypeConfigsResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        resourceId: string;
        type: 0 | 1 | 2;
    }>;
};

/**
 * @description 新增类型配置
 * @summary Request data types
 * @url [ post ] /api/TypeConfigs
 * @bizName assetBiz
 */
export type PostTypeConfigsReqTypeByAts = {
    'X-version'?: string;
    name: string;
    resourceId?: string;
    type: 0 | 1 | 2;
};

/**
 * @description 新增类型配置
 * @summary Response data types
 * @url [ post ] /api/TypeConfigs
 * @bizName assetBiz
 */
export type PostTypeConfigsResTypeByAts = {
    id: string;
    name: string;
    resourceId: string;
    type: 0 | 1 | 2;
};

/**
 * @description 搜索类型配置
 * @summary Request data types
 * @url [ post ] /api/TypeConfigs/search
 * @bizName assetBiz
 */
export type PostTypeConfigsSearchReqTypeByAts = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    keyword?: string;
    type?: 0 | 1 | 2;
    ids?: Array<string>;
};

/**
 * @description 搜索类型配置
 * @summary Response data types
 * @url [ post ] /api/TypeConfigs/search
 * @bizName assetBiz
 */
export type PostTypeConfigsSearchResTypeByAts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        resourceId: string;
        type: 0 | 1 | 2;
    }>;
};

/**
 * @description 类型配置导出
 * @summary Request data types
 * @url [ post ] /api/TypeConfigs/export
 * @bizName assetBiz
 */
export type PostTypeConfigsExportReqTypeByAts = {
    'X-version'?: string;
    ids?: Array<string>;
};

/**
 * @description 类型配置导出
 * @summary Response data types
 * @url [ post ] /api/TypeConfigs/export
 * @bizName assetBiz
 */
export type PostTypeConfigsExportResTypeByAts = {
    typeConfigs: Array<{
        id: string;
        name: string;
        resourceId: string;
        type: 0 | 1 | 2;
        createTime: string;
    }>;
};

/**
 * @description 类型配置导入
 * @summary Request data types
 * @url [ post ] /api/TypeConfigs/import
 * @bizName assetBiz
 */
export type PostTypeConfigsImportReqTypeByAts = {
    'X-version'?: string;
    importTypeConfigs?: Array<{
        id: string;
        name: string;
        resourceId: string;
        type: 0 | 1 | 2;
        createTime: string;
    }>;
};
