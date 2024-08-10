/**
 * @description 查询告警
 * @summary Request data types
 * @url [ get ] /api/AlertRecords
 * @bizName alertsPlatformBiz
 */
export type GetAlertRecordsReqTypeByAps = {
    TypeId?: string;
    SourceTypeId?: string;
    StartTime: string;
    EndTime: string;
    Keyword?: string;
    Level?: number;
    Status?: Array<number>;
    PlatformId?: string;
    IgnoreOtherPlatform?: boolean;
    AreaCode?: string;
    IncludeSubTypes?: boolean;
    SortType?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 查询告警
 * @summary Response data types
 * @url [ get ] /api/AlertRecords
 * @bizName alertsPlatformBiz
 */
export type GetAlertRecordsResTypeByAps = {
    totalCount: number;
    records: Array<{
        id: number;
        name: string;
        description: string;
        typeId: string;
        typeName: string;
        typeIdPath: string;
        typeNamePath: string;
        level: number;
        status: 0 | 1 | 2;
        resolverId: string;
        resolverName: string;
        resolveMessage: string;
        sourceTypeId: string;
        sourceTypeName: string;
        source: {
            instance: string;
            processorUrl: string;
        };
        assetId: string;
        assetName: string;
        createTime: string;
        updateTime: string;
        startTime: string;
        endTime: string;
        resourceId: string;
        platformId: string;
        platformName: string;
        longitude: number;
        latitude: number;
        areaCode: string;
        extension: any;
    }>;
};

/**
 * @description 创建告警记录
 * @summary Request data types
 * @url [ post ] /api/AlertRecords
 * @bizName alertsPlatformBiz
 */
export type PostAlertRecordsReqTypeByAps = {
    name?: string;
    description?: string;
    typeId?: string;
    typeName?: string;
    level?: 1 | 2 | 4 | 8;
    levelName?: string;
    status?: 0 | 1 | 2;
    sourceTypeId?: string;
    sourceTypeName?: string;
    source?: {
        instance: string;
        processorUrl: string;
    };
    assetId?: string;
    assetName?: string;
    startTime?: string;
    endTime?: string;
    longitude?: number;
    latitude?: number;
    areaCode?: string;
    extension?: any;
    resourceId?: string;
};

/**
 * @description 创建告警记录
 * @summary Response data types
 * @url [ post ] /api/AlertRecords
 * @bizName alertsPlatformBiz
 */
export type PostAlertRecordsResTypeByAps = {
    id: number;
    name: string;
    description: string;
    typeId: string;
    typeName: string;
    typeIdPath: string;
    typeNamePath: string;
    level: number;
    status: 0 | 1 | 2;
    resolverId: string;
    resolverName: string;
    resolveMessage: string;
    sourceTypeId: string;
    sourceTypeName: string;
    source: {
        instance: string;
        processorUrl: string;
    };
    assetId: string;
    assetName: string;
    createTime: string;
    updateTime: string;
    startTime: string;
    endTime: string;
    resourceId: string;
    platformId: string;
    platformName: string;
    longitude: number;
    latitude: number;
    areaCode: string;
    extension: any;
};

/**
 * @description 高级搜索接口
 * @summary Request data types
 * @url [ post ] /api/AlertRecords/search
 * @bizName alertsPlatformBiz
 */
export type PostAlertRecordsSearchReqTypeByAps = {
    pageIndex?: number;
    pageSize?: number;
    keyword?: string;
    level?: number;
    status?: Array<number>;
    platformId?: string;
    ignoreOtherPlatform?: boolean;
    areaCode?: string;
    includeSubTypes?: boolean;
    sortType?: 0 | 1;
    startTime?: string;
    endTime?: string;
    typeIds?: Array<string>;
    sourceTypeIds?: Array<string>;
    assetIds?: Array<string>;
    upLeft?: {
        longitude: number;
        latitude: number;
    };
    bottomRight?: {
        longitude: number;
        latitude: number;
    };
    prefixAreaCodes?: Array<string>;
    isMatchNullAreaCode?: boolean;
};

/**
 * @description 高级搜索接口
 * @summary Response data types
 * @url [ post ] /api/AlertRecords/search
 * @bizName alertsPlatformBiz
 */
export type PostAlertRecordsSearchResTypeByAps = {
    totalCount: number;
    records: Array<{
        id: number;
        name: string;
        description: string;
        typeId: string;
        typeName: string;
        typeIdPath: string;
        typeNamePath: string;
        level: number;
        status: 0 | 1 | 2;
        resolverId: string;
        resolverName: string;
        resolveMessage: string;
        sourceTypeId: string;
        sourceTypeName: string;
        source: {
            instance: string;
            processorUrl: string;
        };
        assetId: string;
        assetName: string;
        createTime: string;
        updateTime: string;
        startTime: string;
        endTime: string;
        resourceId: string;
        platformId: string;
        platformName: string;
        longitude: number;
        latitude: number;
        areaCode: string;
        extension: any;
    }>;
};

/**
 * @description 根据 id 获取告警详情
 * @summary Request data types
 * @url [ get ] /api/AlertRecords/{id}
 * @bizName alertsPlatformBiz
 */
export type GetAlertRecordsIdReqTypeByAps = {
    id: number;
};

/**
 * @description 根据 id 获取告警详情
 * @summary Response data types
 * @url [ get ] /api/AlertRecords/{id}
 * @bizName alertsPlatformBiz
 */
export type GetAlertRecordsIdResTypeByAps = {
    id: number;
    name: string;
    description: string;
    typeId: string;
    typeName: string;
    typeIdPath: string;
    typeNamePath: string;
    level: number;
    status: 0 | 1 | 2;
    resolverId: string;
    resolverName: string;
    resolveMessage: string;
    sourceTypeId: string;
    sourceTypeName: string;
    source: {
        instance: string;
        processorUrl: string;
    };
    assetId: string;
    assetName: string;
    createTime: string;
    updateTime: string;
    startTime: string;
    endTime: string;
    resourceId: string;
    platformId: string;
    platformName: string;
    longitude: number;
    latitude: number;
    areaCode: string;
    extension: any;
};

/**
 * @description 告警消除
 * @summary Request data types
 * @url [ put ] /api/AlertRecords/{id}/resolve
 * @bizName alertsPlatformBiz
 */
export type PutAlertRecordsIdResolveReqTypeByAps = {
    id: number;
    resolverName?: string;
    resolveMessage?: string;
};

/**
 * @description 运维所有告警记录行政区划（历史数据补全运维接口）
 * @summary Request data types
 * @url [ put ] /api/AlertRecords/operation/areacode
 * @bizName alertsPlatformBiz
 */
export type PutAlertRecordsOperationAreacodeReqTypeByAps = {
    defaultAreaCode?: string;
    isOnlyQueryAreaCodeEmpty?: boolean;
};

/**
 * @description 查询告警源类型
 * @summary Request data types
 * @url [ get ] /api/AlertSourceTypes
 * @bizName alertsPlatformBiz
 */
export type GetAlertSourceTypesReqTypeByAps = {
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 查询告警源类型
 * @summary Response data types
 * @url [ get ] /api/AlertSourceTypes
 * @bizName alertsPlatformBiz
 */
export type GetAlertSourceTypesResTypeByAps = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        createTime: string;
        updateTime: string;
    }>;
};

/**
 * @description 通过 id 获取告警源类型
 * @summary Request data types
 * @url [ get ] /api/AlertSourceTypes/{id}
 * @bizName alertsPlatformBiz
 */
export type GetAlertSourceTypesIdReqTypeByAps = {
    id: string;
};

/**
 * @description 通过 id 获取告警源类型
 * @summary Response data types
 * @url [ get ] /api/AlertSourceTypes/{id}
 * @bizName alertsPlatformBiz
 */
export type GetAlertSourceTypesIdResTypeByAps = {
    id: string;
    name: string;
    createTime: string;
    updateTime: string;
};

/**
 * @description 更新告警源类型
 * @summary Request data types
 * @url [ put ] /api/AlertSourceTypes/{id}
 * @bizName alertsPlatformBiz
 */
export type PutAlertSourceTypesIdReqTypeByAps = {
    id: string;
    name?: string;
};

/**
 * @description 查询告警类型
 * @summary Request data types
 * @url [ get ] /api/AlertTypes
 * @bizName alertsPlatformBiz
 */
export type GetAlertTypesReqTypeByAps = {
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 查询告警类型
 * @summary Response data types
 * @url [ get ] /api/AlertTypes
 * @bizName alertsPlatformBiz
 */
export type GetAlertTypesResTypeByAps = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        createTime: string;
        updateTime: string;
        resourceId: string;
        platformId: string;
        idPath: string;
        namePath: string;
        isLeaf: boolean;
    }>;
};

/**
 * @description 创建告警类型
 * @summary Request data types
 * @url [ post ] /api/AlertTypes
 * @bizName alertsPlatformBiz
 */
export type PostAlertTypesReqTypeByAps = {
    name?: string;
    description?: string;
    parentId?: string;
};

/**
 * @description 创建告警类型
 * @summary Response data types
 * @url [ post ] /api/AlertTypes
 * @bizName alertsPlatformBiz
 */
export type PostAlertTypesResTypeByAps = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    createTime: string;
    updateTime: string;
    resourceId: string;
    platformId: string;
    idPath: string;
    namePath: string;
    isLeaf: boolean;
};

/**
 * @description 获取根告警类型
 * @summary Request data types
 * @url [ get ] /api/AlertTypes/root
 * @bizName alertsPlatformBiz
 */
export type GetAlertTypesRootReqTypeByAps = {
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 获取根告警类型
 * @summary Response data types
 * @url [ get ] /api/AlertTypes/root
 * @bizName alertsPlatformBiz
 */
export type GetAlertTypesRootResTypeByAps = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        createTime: string;
        updateTime: string;
        resourceId: string;
        platformId: string;
        idPath: string;
        namePath: string;
        isLeaf: boolean;
    }>;
};

/**
 * @description 获取子告警类型
 * @summary Request data types
 * @url [ get ] /api/AlertTypes/{id}/children
 * @bizName alertsPlatformBiz
 */
export type GetAlertTypesIdChildrenReqTypeByAps = {
    id: string;
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 获取子告警类型
 * @summary Response data types
 * @url [ get ] /api/AlertTypes/{id}/children
 * @bizName alertsPlatformBiz
 */
export type GetAlertTypesIdChildrenResTypeByAps = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        createTime: string;
        updateTime: string;
        resourceId: string;
        platformId: string;
        idPath: string;
        namePath: string;
        isLeaf: boolean;
    }>;
};

/**
 * @description 通过 ID 集合批量获取告警类型
 * @summary Request data types
 * @url [ post ] /api/AlertTypes/batch
 * @bizName alertsPlatformBiz
 */
export type PostAlertTypesBatchReqTypeByAps = {
    ids: Array<string>;
};

/**
 * @description 通过 ID 集合批量获取告警类型
 * @summary Response data types
 * @url [ post ] /api/AlertTypes/batch
 * @bizName alertsPlatformBiz
 */
export type PostAlertTypesBatchResTypeByAps = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        createTime: string;
        updateTime: string;
        resourceId: string;
        platformId: string;
        idPath: string;
        namePath: string;
        isLeaf: boolean;
    }>;
};

/**
 * @description 根据类型 Id 获取告警类型
 * @summary Request data types
 * @url [ get ] /api/AlertTypes/{id}
 * @bizName alertsPlatformBiz
 */
export type GetAlertTypesIdReqTypeByAps = {
    id: string;
};

/**
 * @description 根据类型 Id 获取告警类型
 * @summary Response data types
 * @url [ get ] /api/AlertTypes/{id}
 * @bizName alertsPlatformBiz
 */
export type GetAlertTypesIdResTypeByAps = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    createTime: string;
    updateTime: string;
    resourceId: string;
    platformId: string;
    idPath: string;
    namePath: string;
    isLeaf: boolean;
};

/**
 * @description 聚合告警类型为父级类型
 * @summary Request data types
 * @url [ post ] /api/AlertTypes/children/mergence
 * @bizName alertsPlatformBiz
 */
export type PostAlertTypesChildrenMergenceReqTypeByAps = {
    pageIndex?: number;
    pageSize?: number;
    ids?: Array<string>;
};

/**
 * @description 聚合告警类型为父级类型
 * @summary Response data types
 * @url [ post ] /api/AlertTypes/children/mergence
 * @bizName alertsPlatformBiz
 */
export type PostAlertTypesChildrenMergenceResTypeByAps = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        idPath: string;
        namePath: string;
        isLeaf: boolean;
    }>;
};

/**
 * @description 批量获取所有子告警类型接口（包含子孙级告警类型）
 * @summary Request data types
 * @url [ post ] /api/AlertTypes/subordinates
 * @bizName alertsPlatformBiz
 */
export type PostAlertTypesSubordinatesReqTypeByAps = {
    pageIndex?: number;
    pageSize?: number;
    ids?: Array<string>;
};

/**
 * @description 批量获取所有子告警类型接口（包含子孙级告警类型）
 * @summary Response data types
 * @url [ post ] /api/AlertTypes/subordinates
 * @bizName alertsPlatformBiz
 */
export type PostAlertTypesSubordinatesResTypeByAps = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        createTime: string;
        updateTime: string;
        resourceId: string;
        platformId: string;
        idPath: string;
        namePath: string;
        isLeaf: boolean;
    }>;
};

/**
 * @description 查询子告警类型（父级Id不传默认查父级）
 * @summary Request data types
 * @url [ post ] /api/AlertTypes/children
 * @bizName alertsPlatformBiz
 */
export type PostAlertTypesChildrenReqTypeByAps = {
    pageIndex?: number;
    pageSize?: number;
    parentId?: string;
    selectedIds?: Array<string>;
};

/**
 * @description 查询子告警类型（父级Id不传默认查父级）
 * @summary Response data types
 * @url [ post ] /api/AlertTypes/children
 * @bizName alertsPlatformBiz
 */
export type PostAlertTypesChildrenResTypeByAps = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        createTime: string;
        updateTime: string;
        resourceId: string;
        platformId: string;
        idPath: string;
        namePath: string;
        isLeaf: boolean;
        useStatus: 0 | 1 | 2;
    }>;
};

/**
 * @description 导出告警类型
 * @summary Request data types
 * @url [ post ] /api/AlertTypes/export
 * @bizName alertsPlatformBiz
 */
export type PostAlertTypesExportReqTypeByAps = {
    ids?: Array<string>;
};

/**
 * @description 导出告警类型
 * @summary Response data types
 * @url [ post ] /api/AlertTypes/export
 * @bizName alertsPlatformBiz
 */
export type PostAlertTypesExportResTypeByAps = {
    alertTypes: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        path: string;
        createTime: string;
        updateTime: string;
        isDelete: boolean;
        resourceId: string;
        platformId: string;
    }>;
};

/**
 * @description 导入接口(导入后会重新刷新缓存)
 * @summary Request data types
 * @url [ post ] /api/AlertTypes/import
 * @bizName alertsPlatformBiz
 */
export type PostAlertTypesImportReqTypeByAps = {
    alertTypes?: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        path: string;
        createTime: string;
        updateTime: string;
        isDelete: boolean;
        resourceId: string;
        platformId: string;
    }>;
};

/**
 * @description Webhook 接口
 * @summary Request data types
 * @url [ post ] /api/WebHooks
 * @bizName alertsPlatformBiz
 */
export type PostWebHooksReqTypeByAps = {
    alerts?: Array<{
        name: string;
        description: string;
        typeId: string;
        typeName: string;
        level: 1 | 2 | 4 | 8;
        levelName: string;
        status: 0 | 1 | 2;
        sourceTypeId: string;
        sourceTypeName: string;
        source: {
            instance: string;
            processorUrl: string;
        };
        assetId: string;
        assetName: string;
        startTime: string;
        endTime: string;
        longitude: number;
        latitude: number;
        areaCode: string;
        extension: any;
        resourceId: string;
    }>;
};
