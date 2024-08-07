/**
 * @description 获取告警的信息
 * @summary Request data types
 * @url [ post ] /api/Alarms/GetAlarmInfo
 * @bizName aggsBiz
 */
export type PostAlarmsGetAlarmInfoReqTypeByAggs = {
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
};

/**
 * @description 获取告警的信息
 * @summary Response data types
 * @url [ post ] /api/Alarms/GetAlarmInfo
 * @bizName aggsBiz
 */
export type PostAlarmsGetAlarmInfoResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        alarmSourceId: string;
        alarmSourceName: string;
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
    }>;
};

/**
 * @description 根据行政区域id列表查询告警数据
 * @summary Request data types
 * @url [ get ] /api/Alarms/GetAlarmsByDistrictIds
 * @bizName aggsBiz
 */
export type GetAlarmsGetAlarmsByDistrictIdsReqTypeByAggs = {
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
 * @url [ get ] /api/Alarms/GetAlarmsByDistrictIds
 * @bizName aggsBiz
 */
export type GetAlarmsGetAlarmsByDistrictIdsResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        alarmSourceId: string;
        alarmSourceName: string;
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
    }>;
};

/**
 * @description 高级搜索告警记录
 * @summary Request data types
 * @url [ post ] /api/AlertRecords/search
 * @bizName aggsBiz
 */
export type PostAlertRecordsSearchReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    keyword?: string;
    level?: number;
    status?: Array<number>;
    platformId?: string;
    ignoreOtherPlatform?: boolean;
    areaCode?: string;
    includeSubTypes?: boolean;
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
    sortType?: 0 | 1;
};

/**
 * @description 高级搜索告警记录
 * @summary Response data types
 * @url [ post ] /api/AlertRecords/search
 * @bizName aggsBiz
 */
export type PostAlertRecordsSearchResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: number;
        name: string;
        typeId: string;
        typeName: string;
        typeIdPath: string;
        typeNamePath: string;
        level: number;
        sourceTypeId: string;
        sourceTypeName: string;
        status: 0 | 1 | 2;
        startTime: string;
        endTime: string;
        assetId: string;
        description: string;
        resolverId: string;
        resolverName: string;
        resolveMessage: string;
        assetName: string;
        createTime: string;
        updateTime: string;
        resourceId: string;
        platformId: string;
        platformName: string;
        longitude: number;
        latitude: number;
        areaCode: string;
        source: {
            instance: string;
            processorUrl: string;
        };
        extension: any;
        contact: {
            id: string;
            name: string;
            phone: string;
            department: string;
            title: string;
        };
        isConvertEvent: boolean;
    }>;
};

/**
 * @description 告警记录详情接口
 * @summary Request data types
 * @url [ get ] /api/AlertRecords/{id}
 * @bizName aggsBiz
 */
export type GetAlertRecordsIdReqTypeByAggs = {
    id: number;
    'X-version'?: string;
};

/**
 * @description 告警记录详情接口
 * @summary Response data types
 * @url [ get ] /api/AlertRecords/{id}
 * @bizName aggsBiz
 */
export type GetAlertRecordsIdResTypeByAggs = {
    id: number;
    name: string;
    typeId: string;
    typeName: string;
    typeIdPath: string;
    typeNamePath: string;
    level: number;
    sourceTypeId: string;
    sourceTypeName: string;
    status: 0 | 1 | 2;
    startTime: string;
    endTime: string;
    assetId: string;
    description: string;
    resolverId: string;
    resolverName: string;
    resolveMessage: string;
    assetName: string;
    createTime: string;
    updateTime: string;
    resourceId: string;
    platformId: string;
    platformName: string;
    longitude: number;
    latitude: number;
    areaCode: string;
    source: {
        instance: string;
        processorUrl: string;
    };
    extension: any;
    contact: {
        id: string;
        name: string;
        phone: string;
        department: string;
        title: string;
    };
    isConvertEvent: boolean;
};

/**
 * @description 告警转事件
 * @summary Request data types
 * @url [ post ] /api/AlertRecords/converter/event
 * @bizName aggsBiz
 */
export type PostAlertRecordsConverterEventReqTypeByAggs = {
    'X-version'?: string;
    alertId: number;
    eventTypeId: string;
    eventName?: string;
    eventDescription?: string;
    eventPriority?: 1 | 2 | 4 | 8 | 16;
};

/**
 * @description 告警转事件
 * @summary Response data types
 * @url [ post ] /api/AlertRecords/converter/event
 * @bizName aggsBiz
 */
export type PostAlertRecordsConverterEventResTypeByAggs = {
    id: string;
    name: string;
    priority: number;
    state: number;
    longitude: number;
    latitude: number;
    eventType: {
        name: string;
        description: string;
        value: number;
        isEffective: boolean;
        code: string;
        platformId: string;
        resourceId: string;
        id: string;
    };
    createdTime: string;
    areaCode: string;
    updateTime: string;
    description: string;
    group: {
        description: string;
        id: string;
        name: string;
    };
    sceneGroup: {
        description: string;
        id: string;
        name: string;
    };
    happenedTime: string;
    finishedTime: string;
    address: string;
    submitUnit: {
        id: string;
        name: string;
        path: string;
        unitType: 0 | 1 | 2;
    };
    unit: {
        id: string;
        name: string;
        path: string;
        unitType: 0 | 1 | 2;
    };
    source: {
        id: string;
        name: string;
        sourceType: 0 | 1 | 2;
    };
    extension: string;
    typeID: string;
    expectStartedTime: string;
    expectFinishedTime: string;
    isMock: boolean;
    totalTaskCount: number;
    noStatedTaskCount: number;
    finishedTaskCount: number;
    isDeleted: boolean;
    responseLevel: {
        preplanId: string;
        enableResponseLevelId: string;
    };
    associatePreplanId: string;
    resourceId: string;
};

/**
 * @description 获取资产详情
 * @summary Request data types
 * @url [ get ] /api/Assets/{id}
 * @bizName aggsBiz
 */
export type GetAssetsIdReqTypeByAggs = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 获取资产详情
 * @summary Response data types
 * @url [ get ] /api/Assets/{id}
 * @bizName aggsBiz
 */
export type GetAssetsIdResTypeByAggs = {
    assetType: 0 | 1 | 2 | 3 | 4 | 5;
    id: string;
    resourceId: string;
    areaCode: string;
    areaName: string;
    alertLevel: number;
    alertTime: string;
    assetMetrics: Array<{
        metricsId: string;
        name: string;
        metricsStatus: 0 | 1;
        metricsValue: string;
        alertTypeId: string;
        alertType: {
            id: string;
            name: string;
            description: string;
            parentId: string;
            createTime: string;
            updateTime: string;
            resourceId: string;
            platformId: string;
        };
        jobMetaName: string;
        resourceId: string;
        alertLevel: number;
        alertTime: string;
        alertRecords: Array<{
            id: number;
            name: string;
            typeId: string;
            typeName: string;
            typeIdPath: string;
            typeNamePath: string;
            level: number;
            sourceTypeId: string;
            sourceTypeName: string;
            status: 0 | 1 | 2;
            startTime: string;
            endTime: string;
            assetId: string;
            description: string;
            resolverId: string;
            resolverName: string;
            resolveMessage: string;
            assetName: string;
            createTime: string;
            updateTime: string;
            resourceId: string;
            platformId: string;
            platformName: string;
            longitude: number;
            latitude: number;
            areaCode: string;
            source: {
                instance: string;
                processorUrl: string;
            };
            extension: any;
        }>;
    }>;
    alertRecords: Array<{
        id: number;
        name: string;
        typeId: string;
        typeName: string;
        typeIdPath: string;
        typeNamePath: string;
        level: number;
        sourceTypeId: string;
        sourceTypeName: string;
        status: 0 | 1 | 2;
        startTime: string;
        endTime: string;
        assetId: string;
        description: string;
        resolverId: string;
        resolverName: string;
        resolveMessage: string;
        assetName: string;
        createTime: string;
        updateTime: string;
        resourceId: string;
        platformId: string;
        platformName: string;
        longitude: number;
        latitude: number;
        areaCode: string;
        source: {
            instance: string;
            processorUrl: string;
        };
        extension: any;
    }>;
};

/**
 * @description 搜索资产
 * @summary Request data types
 * @url [ post ] /api/Assets
 * @bizName aggsBiz
 */
export type PostAssetsReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: Array<string>;
    keyword?: string;
    prefixAreaCodes?: Array<string>;
    isMatchNullAreaCode?: boolean;
    assetType?: 0 | 1 | 2 | 3 | 4 | 5;
    secondaryAssetType?: number;
    relateTypeId?: string;
    relateTypeIds?: Array<string>;
    center?: {
        longitude: number;
        latitude: number;
    };
    radius?: number;
    isAlertAsset?: boolean;
    alertSortType?: 0 | 1;
};

/**
 * @description 搜索资产
 * @summary Response data types
 * @url [ post ] /api/Assets
 * @bizName aggsBiz
 */
export type PostAssetsResTypeByAggs = {
    totalCount: number;
    records: Array<{
        assetType: 0 | 1 | 2 | 3 | 4 | 5;
        id: string;
        resourceId: string;
        areaCode: string;
        areaName: string;
        alertLevel: number;
        alertTime: string;
        assetMetrics: Array<{
            metricsId: string;
            name: string;
            metricsStatus: 0 | 1;
            metricsValue: string;
            alertTypeId: string;
            alertType: {
                id: string;
                name: string;
                description: string;
                parentId: string;
                createTime: string;
                updateTime: string;
                resourceId: string;
                platformId: string;
            };
            jobMetaName: string;
            resourceId: string;
            alertLevel: number;
            alertTime: string;
            alertRecords: Array<{
                id: number;
                name: string;
                typeId: string;
                typeName: string;
                typeIdPath: string;
                typeNamePath: string;
                level: number;
                sourceTypeId: string;
                sourceTypeName: string;
                status: 0 | 1 | 2;
                startTime: string;
                endTime: string;
                assetId: string;
                description: string;
                resolverId: string;
                resolverName: string;
                resolveMessage: string;
                assetName: string;
                createTime: string;
                updateTime: string;
                resourceId: string;
                platformId: string;
                platformName: string;
                longitude: number;
                latitude: number;
                areaCode: string;
                source: {
                    instance: string;
                    processorUrl: string;
                };
                extension: any;
            }>;
        }>;
        alertRecords: Array<{
            id: number;
            name: string;
            typeId: string;
            typeName: string;
            typeIdPath: string;
            typeNamePath: string;
            level: number;
            sourceTypeId: string;
            sourceTypeName: string;
            status: 0 | 1 | 2;
            startTime: string;
            endTime: string;
            assetId: string;
            description: string;
            resolverId: string;
            resolverName: string;
            resolveMessage: string;
            assetName: string;
            createTime: string;
            updateTime: string;
            resourceId: string;
            platformId: string;
            platformName: string;
            longitude: number;
            latitude: number;
            areaCode: string;
            source: {
                instance: string;
                processorUrl: string;
            };
            extension: any;
        }>;
    }>;
};

/**
 * @description 周边资产
 * @summary Request data types
 * @url [ post ] /api/Assets/circle_area
 * @bizName aggsBiz
 */
export type PostAssetsCircleAreaReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: Array<string>;
    keyword?: string;
    prefixAreaCodes?: Array<string>;
    isMatchNullAreaCode?: boolean;
    assetType?: 0 | 1 | 2 | 3 | 4 | 5;
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
 * @description 周边资产
 * @summary Response data types
 * @url [ post ] /api/Assets/circle_area
 * @bizName aggsBiz
 */
export type PostAssetsCircleAreaResTypeByAggs = {
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
 * @description 周边告警资产
 * @summary Request data types
 * @url [ post ] /api/Assets/circle_area/Alert
 * @bizName aggsBiz
 */
export type PostAssetsCircleAreaAlertReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: Array<string>;
    keyword?: string;
    prefixAreaCodes?: Array<string>;
    isMatchNullAreaCode?: boolean;
    assetType?: 0 | 1 | 2 | 3 | 4 | 5;
    secondaryAssetType?: number;
    relateTypeId?: string;
    isSearchNullRelateType?: boolean;
    relateTypeIds?: Array<string>;
    assetTypeIds?: Array<string>;
    alert?: {
        startTime: string;
        endTime: string;
    };
    assetSortRule?: 0 | 1 | 2;
    center: {
        longitude: number;
        latitude: number;
    };
    radius: number;
};

/**
 * @description 周边告警资产
 * @summary Response data types
 * @url [ post ] /api/Assets/circle_area/Alert
 * @bizName aggsBiz
 */
export type PostAssetsCircleAreaAlertResTypeByAggs = {
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
        alertCount: number;
    }>;
};

/**
 * @description 通用搜索
 * @summary Request data types
 * @url [ post ] /api/Assets/search
 * @bizName aggsBiz
 */
export type PostAssetsSearchReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    assetIds?: Array<string>;
    keyword?: string;
    prefixAreaCodes?: Array<string>;
    isMatchNullAreaCode?: boolean;
    assetType?: 0 | 1 | 2 | 3 | 4 | 5;
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
 * @bizName aggsBiz
 */
export type PostAssetsSearchResTypeByAggs = {
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
        relateCameraIds: Array<string>;
    }>;
};

/**
 * @description 获取事件关联的通话数据
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/communications
 * @bizName aggsBiz
 */
export type GetEventsEventIdCommunicationsReqTypeByAggs = {
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 获取事件关联的通话数据
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/communications
 * @bizName aggsBiz
 */
export type GetEventsEventIdCommunicationsResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        eventId: string;
        eventName: string;
        createdTime: string;
        communicationId: string;
        callerName: string;
        callerNumber: string;
        calledName: string;
        calledNumber: string;
        startTime: string;
        endTime: string;
        hasAnswered: boolean;
        taskInfos: Array<{
            id: string;
            name: string;
        }>;
        type: 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512;
        recordId: string;
        fileRecord: {
            id: string;
            guid: string;
            userName: string;
            fileType: 0 | 1 | 2 | 3 | 4;
            fileName: string;
            filePath: string;
            fileGenTime: string;
            fileUploadTime: string;
            fileSize: number;
        };
        logId: string;
        duration: number;
    }>;
};

/**
 * @description 根据Id获取通话项
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/communications/{id}
 * @bizName aggsBiz
 */
export type GetEventsEventIdCommunicationsIdReqTypeByAggs = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 根据Id获取通话项
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/communications/{id}
 * @bizName aggsBiz
 */
export type GetEventsEventIdCommunicationsIdResTypeByAggs = {
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    communicationId: string;
    callerName: string;
    callerNumber: string;
    calledName: string;
    calledNumber: string;
    startTime: string;
    endTime: string;
    hasAnswered: boolean;
    taskInfos: Array<{
        id: string;
        name: string;
    }>;
    type: 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512;
    recordId: string;
    fileRecord: {
        id: string;
        guid: string;
        userName: string;
        fileType: 0 | 1 | 2 | 3 | 4;
        fileName: string;
        filePath: string;
        fileGenTime: string;
        fileUploadTime: string;
        fileSize: number;
    };
    logId: string;
    duration: number;
};

/**
 * @description 获取事件关联的文件数据
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/files
 * @bizName aggsBiz
 */
export type GetEventsEventIdFilesReqTypeByAggs = {
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 获取事件关联的文件数据
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/files
 * @bizName aggsBiz
 */
export type GetEventsEventIdFilesResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        eventId: string;
        eventName: string;
        createdTime: string;
        fileRecordID: string;
        fileRecord: {
            id: string;
            name: string;
            fileId: string;
            path: string;
            fullPath: string;
            thumbnailPath: string;
            convertedFiles: Record<string, any>;
            length: number;
            fileType: 0 | 1 | 2 | 3 | 4;
            contentType: string;
            directoryInfo: {
                id: string;
                name: string;
                parentId: string;
                isPublic: boolean;
                createTime: string;
                updateTime: string;
                useStatus: 0 | 1 | 2;
                isLeafGroup: boolean;
                isLeaf: boolean;
            };
            storageKind: 0 | 1 | 2;
            isOldSsFile: boolean;
            userId: string;
            userName: string;
            uploadTime: string;
            createTime: string;
            updateTime: string;
            expireTime: string;
            isExpired: boolean;
            extension: any;
            duration: string;
        };
    }>;
};

/**
 * @description 根据Id获取文件项
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/files/{id}
 * @bizName aggsBiz
 */
export type GetEventsEventIdFilesIdReqTypeByAggs = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 根据Id获取文件项
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/files/{id}
 * @bizName aggsBiz
 */
export type GetEventsEventIdFilesIdResTypeByAggs = {
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    fileRecordID: string;
    fileRecord: {
        id: string;
        name: string;
        fileId: string;
        path: string;
        fullPath: string;
        thumbnailPath: string;
        convertedFiles: Record<string, any>;
        length: number;
        fileType: 0 | 1 | 2 | 3 | 4;
        contentType: string;
        directoryInfo: {
            id: string;
            name: string;
            parentId: string;
            isPublic: boolean;
            createTime: string;
            updateTime: string;
            useStatus: 0 | 1 | 2;
            isLeafGroup: boolean;
            isLeaf: boolean;
        };
        storageKind: 0 | 1 | 2;
        isOldSsFile: boolean;
        userId: string;
        userName: string;
        uploadTime: string;
        createTime: string;
        updateTime: string;
        expireTime: string;
        isExpired: boolean;
        extension: any;
        duration: string;
    };
};

/**
 * @description 获取事件关联的拍传数据
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/multimediatransfers
 * @bizName aggsBiz
 */
export type GetEventsEventIdMultimediatransfersReqTypeByAggs = {
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 获取事件关联的拍传数据
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/multimediatransfers
 * @bizName aggsBiz
 */
export type GetEventsEventIdMultimediatransfersResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        eventId: string;
        eventName: string;
        createdTime: string;
        recordId: string;
        multimediaTransferDetail: {
            id: string;
            name: string;
            templateId: string;
            longitude: number;
            latitude: number;
            address: string;
            fileGroupId: string;
            fileCount: number;
            userId: string;
            userName: string;
            organizationId: string;
            organizationName: string;
            uploadTime: string;
            fileRecords: Array<{
                id: string;
                name: string;
                fileId: string;
                path: string;
                fullPath: string;
                thumbnailPath: string;
                convertedFiles: Record<string, any>;
                length: number;
                fileType: 0 | 1 | 2 | 3 | 4;
                contentType: string;
                directoryInfo: {
                    id: string;
                    name: string;
                    parentId: string;
                    isPublic: boolean;
                    createTime: string;
                    updateTime: string;
                    useStatus: 0 | 1 | 2;
                    isLeafGroup: boolean;
                    isLeaf: boolean;
                };
                storageKind: 0 | 1 | 2;
                isOldSsFile: boolean;
                userId: string;
                userName: string;
                uploadTime: string;
                createTime: string;
                updateTime: string;
                expireTime: string;
                isExpired: boolean;
                extension: any;
                duration: string;
            }>;
        };
        taskInfos: Array<{
            id: string;
            name: string;
        }>;
    }>;
};

/**
 * @description 根据Id获取拍传项
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/multimediatransfers/{id}
 * @bizName aggsBiz
 */
export type GetEventsEventIdMultimediatransfersIdReqTypeByAggs = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 根据Id获取拍传项
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/multimediatransfers/{id}
 * @bizName aggsBiz
 */
export type GetEventsEventIdMultimediatransfersIdResTypeByAggs = {
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    recordId: string;
    multimediaTransferDetail: {
        id: string;
        name: string;
        templateId: string;
        longitude: number;
        latitude: number;
        address: string;
        fileGroupId: string;
        fileCount: number;
        userId: string;
        userName: string;
        organizationId: string;
        organizationName: string;
        uploadTime: string;
        fileRecords: Array<{
            id: string;
            name: string;
            fileId: string;
            path: string;
            fullPath: string;
            thumbnailPath: string;
            convertedFiles: Record<string, any>;
            length: number;
            fileType: 0 | 1 | 2 | 3 | 4;
            contentType: string;
            directoryInfo: {
                id: string;
                name: string;
                parentId: string;
                isPublic: boolean;
                createTime: string;
                updateTime: string;
                useStatus: 0 | 1 | 2;
                isLeafGroup: boolean;
                isLeaf: boolean;
            };
            storageKind: 0 | 1 | 2;
            isOldSsFile: boolean;
            userId: string;
            userName: string;
            uploadTime: string;
            createTime: string;
            updateTime: string;
            expireTime: string;
            isExpired: boolean;
            extension: any;
            duration: string;
        }>;
    };
    taskInfos: Array<{
        id: string;
        name: string;
    }>;
};

/**
 * @description 获取事件关联的图片数据
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/pictures
 * @bizName aggsBiz
 */
export type GetEventsEventIdPicturesReqTypeByAggs = {
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 获取事件关联的图片数据
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/pictures
 * @bizName aggsBiz
 */
export type GetEventsEventIdPicturesResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        eventId: string;
        eventName: string;
        createdTime: string;
        fileRecordId: string;
        fileRecord: {
            id: string;
            name: string;
            fileId: string;
            path: string;
            fullPath: string;
            thumbnailPath: string;
            convertedFiles: Record<string, any>;
            length: number;
            fileType: 0 | 1 | 2 | 3 | 4;
            contentType: string;
            directoryInfo: {
                id: string;
                name: string;
                parentId: string;
                isPublic: boolean;
                createTime: string;
                updateTime: string;
                useStatus: 0 | 1 | 2;
                isLeafGroup: boolean;
                isLeaf: boolean;
            };
            storageKind: 0 | 1 | 2;
            isOldSsFile: boolean;
            userId: string;
            userName: string;
            uploadTime: string;
            createTime: string;
            updateTime: string;
            expireTime: string;
            isExpired: boolean;
            extension: any;
            duration: string;
        };
        taskInfos: Array<{
            id: string;
            name: string;
        }>;
        associatedUserID: string;
        associatedUserName: string;
    }>;
};

/**
 * @description 根据Id获取图片项
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/pictures/{id}
 * @bizName aggsBiz
 */
export type GetEventsEventIdPicturesIdReqTypeByAggs = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 根据Id获取图片项
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/pictures/{id}
 * @bizName aggsBiz
 */
export type GetEventsEventIdPicturesIdResTypeByAggs = {
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    fileRecordId: string;
    fileRecord: {
        id: string;
        name: string;
        fileId: string;
        path: string;
        fullPath: string;
        thumbnailPath: string;
        convertedFiles: Record<string, any>;
        length: number;
        fileType: 0 | 1 | 2 | 3 | 4;
        contentType: string;
        directoryInfo: {
            id: string;
            name: string;
            parentId: string;
            isPublic: boolean;
            createTime: string;
            updateTime: string;
            useStatus: 0 | 1 | 2;
            isLeafGroup: boolean;
            isLeaf: boolean;
        };
        storageKind: 0 | 1 | 2;
        isOldSsFile: boolean;
        userId: string;
        userName: string;
        uploadTime: string;
        createTime: string;
        updateTime: string;
        expireTime: string;
        isExpired: boolean;
        extension: any;
        duration: string;
    };
    taskInfos: Array<{
        id: string;
        name: string;
    }>;
    associatedUserID: string;
    associatedUserName: string;
};

/**
 * @description 获取事件关联的视频数据
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/videos
 * @bizName aggsBiz
 */
export type GetEventsEventIdVideosReqTypeByAggs = {
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 获取事件关联的视频数据
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/videos
 * @bizName aggsBiz
 */
export type GetEventsEventIdVideosResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        eventId: string;
        eventName: string;
        createdTime: string;
        fileRecordId: string;
        fileRecord: {
            id: string;
            name: string;
            fileId: string;
            path: string;
            fullPath: string;
            thumbnailPath: string;
            convertedFiles: Record<string, any>;
            length: number;
            fileType: 0 | 1 | 2 | 3 | 4;
            contentType: string;
            directoryInfo: {
                id: string;
                name: string;
                parentId: string;
                isPublic: boolean;
                createTime: string;
                updateTime: string;
                useStatus: 0 | 1 | 2;
                isLeafGroup: boolean;
                isLeaf: boolean;
            };
            storageKind: 0 | 1 | 2;
            isOldSsFile: boolean;
            userId: string;
            userName: string;
            uploadTime: string;
            createTime: string;
            updateTime: string;
            expireTime: string;
            isExpired: boolean;
            extension: any;
            duration: string;
        };
        taskInfos: Array<{
            id: string;
            name: string;
        }>;
    }>;
};

/**
 * @description 根据Id获取视频项
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/videos/{id}
 * @bizName aggsBiz
 */
export type GetEventsEventIdVideosIdReqTypeByAggs = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 根据Id获取视频项
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/videos/{id}
 * @bizName aggsBiz
 */
export type GetEventsEventIdVideosIdResTypeByAggs = {
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    fileRecordId: string;
    fileRecord: {
        id: string;
        name: string;
        fileId: string;
        path: string;
        fullPath: string;
        thumbnailPath: string;
        convertedFiles: Record<string, any>;
        length: number;
        fileType: 0 | 1 | 2 | 3 | 4;
        contentType: string;
        directoryInfo: {
            id: string;
            name: string;
            parentId: string;
            isPublic: boolean;
            createTime: string;
            updateTime: string;
            useStatus: 0 | 1 | 2;
            isLeafGroup: boolean;
            isLeaf: boolean;
        };
        storageKind: 0 | 1 | 2;
        isOldSsFile: boolean;
        userId: string;
        userName: string;
        uploadTime: string;
        createTime: string;
        updateTime: string;
        expireTime: string;
        isExpired: boolean;
        extension: any;
        duration: string;
    };
    taskInfos: Array<{
        id: string;
        name: string;
    }>;
};

/**
 * @description 获取全部的分组列表。
 * @summary Request data types
 * @url [ get ] /api/Camera/groups
 * @bizName aggsBiz
 */
export type GetCameraGroupsReqTypeByAggs = {
    GroupType?: number;
    'X-version'?: string;
};

/**
 * @description 获取全部的分组列表。
 * @summary Response data types
 * @url [ get ] /api/Camera/groups
 * @bizName aggsBiz
 */
export type GetCameraGroupsResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        groupType: number;
        cameraCount: number;
        cameraOnlineCount: number;
        selfCameraCount: number;
        selfCameraOnlineCount: number;
        order: number;
        principalOut: Array<{
            id: string;
            name: string;
        }>;
        isLeaf: boolean;
    }>;
};

/**
 * @description 搜索监控
 * @summary Request data types
 * @url [ post ] /api/Camera
 * @bizName aggsBiz
 */
export type PostCameraReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    prefixAreaCodes?: Array<string>;
    labelIds?: Array<number>;
    online?: boolean;
    keyword?: string;
    resourceRelationship?: {
        mainResources: Array<{
            resourceId: string;
            type: string;
        }>;
        dataHandleType: 0 | 1;
    };
    isContainMainResource?: boolean;
};

/**
 * @description 搜索监控
 * @summary Response data types
 * @url [ post ] /api/Camera
 * @bizName aggsBiz
 */
export type PostCameraResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        longitude: number;
        latitude: number;
        status: 1 | 2 | 3 | 4;
        quality: 0 | 1 | 2 | 3 | 4;
        areaCode: string;
        thumbnailID: string;
        labels: Array<{
            id: number;
            title: string;
            color: string;
            description: string;
        }>;
        mainResources: Array<{
            resourceId: string;
            type: string;
        }>;
    }>;
};

/**
 * @description 周边监控
 * @summary Request data types
 * @url [ post ] /api/Camera/circle_area
 * @bizName aggsBiz
 */
export type PostCameraCircleAreaReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    center: {
        longitude: number;
        latitude: number;
    };
    radius: number;
    labelIds?: Array<number>;
    sortRule?: 0 | 1;
};

/**
 * @description 周边监控
 * @summary Response data types
 * @url [ post ] /api/Camera/circle_area
 * @bizName aggsBiz
 */
export type PostCameraCircleAreaResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        status: 1 | 2 | 3 | 4;
        quality: 0 | 1 | 2 | 3 | 4;
        areaCode: string;
        thumbnailID: string;
        longitude: number;
        latitude: number;
        playUrl: {
            playUrlType: 0 | 1 | 2;
            rtspUrl: string;
            flvUrl: string;
            wsUrl: string;
            rtmpUrl: string;
            webRtc: string;
        };
        videoEncoder: 0 | 1;
        resolution: 0 | 1 | 2 | 3;
        audio: boolean;
        result: 0 | 1 | 2 | 3 | 4;
        resultDetail: {
            imageQuality: number;
            brightness: number;
            color: number;
            contrast: number;
            blur: number;
            noiseInterference: number;
            scrolling: number;
            shade: number;
            screenFreezing: number;
            snr: number;
            psnr: number;
            imageDistortion: number;
            blackScreen: number;
            specialFlowerScreen: number;
        };
        namePath: string;
        idPath: string;
        order: number;
        detectionCount: number;
        faultDetail: number;
        isManual: boolean;
        labels: Array<{
            id: number;
            title: string;
            color: string;
            description: string;
        }>;
        audioEncodingFormat: string;
        isSupportPTZ: boolean;
        distance: number;
    }>;
};

/**
 * @description 添加监控终端
 * @summary Request data types
 * @url [ post ] /api/Camera/custom
 * @bizName aggsBiz
 */
export type PostCameraCustomReqTypeByAggs = {
    'X-version'?: string;
    name: string;
    latitude?: number;
    longitude?: number;
    parentId?: string;
    aliasName?: string;
    quality?: 0 | 1 | 2 | 3 | 4;
    isManual?: boolean;
    labelIds?: Array<number>;
    areaCode?: string;
    type?: 0 | 1 | 2 | 3;
    extension: any;
};

/**
 * @description 添加监控终端
 * @summary Response data types
 * @url [ post ] /api/Camera/custom
 * @bizName aggsBiz
 */
export type PostCameraCustomResTypeByAggs = {
    id: string;
    name: string;
    status: 1 | 2 | 3 | 4;
    quality: 0 | 1 | 2 | 3 | 4;
    areaCode: string;
    thumbnailID: string;
    longitude: number;
    latitude: number;
    playUrl: {
        playUrlType: 0 | 1 | 2;
        rtspUrl: string;
        flvUrl: string;
        wsUrl: string;
        rtmpUrl: string;
        webRtc: string;
    };
    videoEncoder: 0 | 1;
    resolution: 0 | 1 | 2 | 3;
    audio: boolean;
    result: 0 | 1 | 2 | 3 | 4;
    resultDetail: {
        imageQuality: number;
        brightness: number;
        color: number;
        contrast: number;
        blur: number;
        noiseInterference: number;
        scrolling: number;
        shade: number;
        screenFreezing: number;
        snr: number;
        psnr: number;
        imageDistortion: number;
        blackScreen: number;
        specialFlowerScreen: number;
    };
    namePath: string;
    idPath: string;
    order: number;
    detectionCount: number;
    faultDetail: number;
    isManual: boolean;
    labels: Array<{
        id: number;
        title: string;
        color: string;
        description: string;
    }>;
    audioEncodingFormat: string;
    isSupportPTZ: boolean;
};

/**
 * @description 修改监控终端
 * @summary Request data types
 * @url [ put ] /api/Camera/custom/{id}
 * @bizName aggsBiz
 */
export type PutCameraCustomIdReqTypeByAggs = {
    id: string;
    'X-version'?: string;
    name: string;
    latitude?: number;
    longitude?: number;
    parentId?: string;
    aliasName?: string;
    quality?: 0 | 1 | 2 | 3 | 4;
    isManual?: boolean;
    labelIds?: Array<number>;
    areaCode?: string;
    type?: 0 | 1 | 2 | 3;
    extension: any;
};

/**
 * @description 搜索客户端
 * @summary Request data types
 * @url [ post ] /api/Clients
 * @bizName aggsBiz
 */
export type PostClientsReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    clientIds?: Array<string>;
    keyword?: string;
    networkId?: string;
    status?: 1 | 2;
    clientType?: 0 | 1 | 2;
    prefixAreaCodes?: Array<string>;
    isMatchNullAreaCode?: boolean;
};

/**
 * @description 搜索客户端
 * @summary Response data types
 * @url [ post ] /api/Clients
 * @bizName aggsBiz
 */
export type PostClientsResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        areaCode: string;
        areaName: string;
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
        network: {
            id: string;
            name: string;
        };
        status: 1 | 2;
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
            alertType: {
                id: string;
                name: string;
                description: string;
                parentId: string;
                createTime: string;
                updateTime: string;
                resourceId: string;
                platformId: string;
            };
            jobMetaName: string;
            resourceId: string;
            alertLevel: number;
            alertTime: string;
            alertRecords: Array<{
                id: number;
                name: string;
                typeId: string;
                typeName: string;
                typeIdPath: string;
                typeNamePath: string;
                level: number;
                sourceTypeId: string;
                sourceTypeName: string;
                status: 0 | 1 | 2;
                startTime: string;
                endTime: string;
                assetId: string;
                description: string;
                resolverId: string;
                resolverName: string;
                resolveMessage: string;
                assetName: string;
                createTime: string;
                updateTime: string;
                resourceId: string;
                platformId: string;
                platformName: string;
                longitude: number;
                latitude: number;
                areaCode: string;
                source: {
                    instance: string;
                    processorUrl: string;
                };
                extension: any;
            }>;
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
 * @description 获取巡检任务列表
 * @summary Request data types
 * @url [ get ] /api/DetectionTasks
 * @bizName aggsBiz
 */
export type GetDetectionTasksReqTypeByAggs = {
    Keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取巡检任务列表
 * @summary Response data types
 * @url [ get ] /api/DetectionTasks
 * @bizName aggsBiz
 */
export type GetDetectionTasksResTypeByAggs = {
    totalCount: number;
    records: Array<{
        jobId: string;
        jobName: string;
        jobGroup: string;
        jobMode: 1 | 2;
        jobBeginTime: string;
        jobEndTime: string;
        nextExecuteTime: string;
        jobStatus: 0 | 1 | 2 | 3 | 4 | 5;
        jobCron: string;
        detectCameraGroupId: string;
        detectCameraGroupName: string;
        isPicture: boolean;
        isRecord: boolean;
        taskId: string;
        taskBeginTime: string;
        taskExecutedCount: number;
        cameraDetectedCount: number;
        remainingDuration: string;
        taskStatus: 0 | 1 | 2 | 3 | 4;
        cameraAmount: number;
        excellentCameraAmount: number;
        goodCameraAmount: number;
        badCameraAmount: number;
        faultCameraAmount: number;
        isSendNotifications: boolean;
        detectionType: 0 | 1;
        isSendEmail: boolean;
        owners: Array<{
            id: string;
            name: string;
            phone: string;
            email: string;
            ownerType: 0 | 1;
        }>;
        progress: number;
    }>;
};

/**
 * @description 获取指定巡检任务详情
 * @summary Request data types
 * @url [ get ] /api/DetectionTasks/{id}
 * @bizName aggsBiz
 */
export type GetDetectionTasksIdReqTypeByAggs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取指定巡检任务详情
 * @summary Response data types
 * @url [ get ] /api/DetectionTasks/{id}
 * @bizName aggsBiz
 */
export type GetDetectionTasksIdResTypeByAggs = {
    jobId: string;
    jobName: string;
    jobGroup: string;
    jobMode: 1 | 2;
    jobBeginTime: string;
    jobEndTime: string;
    nextExecuteTime: string;
    jobStatus: 0 | 1 | 2 | 3 | 4 | 5;
    jobCron: string;
    detectCameraGroupId: string;
    detectCameraGroupName: string;
    isPicture: boolean;
    isRecord: boolean;
    taskId: string;
    taskBeginTime: string;
    taskExecutedCount: number;
    cameraDetectedCount: number;
    remainingDuration: string;
    taskStatus: 0 | 1 | 2 | 3 | 4;
    cameraAmount: number;
    excellentCameraAmount: number;
    goodCameraAmount: number;
    badCameraAmount: number;
    faultCameraAmount: number;
    isSendNotifications: boolean;
    detectionType: 0 | 1;
    isSendEmail: boolean;
    owners: Array<{
        id: string;
        name: string;
        phone: string;
        email: string;
        ownerType: 0 | 1;
    }>;
    progress: number;
};

/**
 * @description 搜索设备
 * @summary Request data types
 * @url [ post ] /api/Devices
 * @bizName aggsBiz
 */
export type PostDevicesReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    deviceIds?: Array<string>;
    keyword?: string;
    networkId?: string;
    status?: 1 | 2;
    deviceType?: 0 | 1 | 2 | 3;
    prefixAreaCodes?: Array<string>;
    isMatchNullAreaCode?: boolean;
};

/**
 * @description 搜索设备
 * @summary Response data types
 * @url [ post ] /api/Devices
 * @bizName aggsBiz
 */
export type PostDevicesResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        areaCode: string;
        areaName: string;
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
            alertType: {
                id: string;
                name: string;
                description: string;
                parentId: string;
                createTime: string;
                updateTime: string;
                resourceId: string;
                platformId: string;
            };
            jobMetaName: string;
            resourceId: string;
            alertLevel: number;
            alertTime: string;
            alertRecords: Array<{
                id: number;
                name: string;
                typeId: string;
                typeName: string;
                typeIdPath: string;
                typeNamePath: string;
                level: number;
                sourceTypeId: string;
                sourceTypeName: string;
                status: 0 | 1 | 2;
                startTime: string;
                endTime: string;
                assetId: string;
                description: string;
                resolverId: string;
                resolverName: string;
                resolveMessage: string;
                assetName: string;
                createTime: string;
                updateTime: string;
                resourceId: string;
                platformId: string;
                platformName: string;
                longitude: number;
                latitude: number;
                areaCode: string;
                source: {
                    instance: string;
                    processorUrl: string;
                };
                extension: any;
            }>;
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
 * @description 指定人是否具备对应的行政区域权限
 * @summary Request data types
 * @url [ post ] /api/Districts/{userId}
 * @bizName aggsBiz
 */
export type PostDistrictsUserIdReqTypeByAggs = {
    userId: string;
    'X-version'?: string;
    areaCodes?: Array<string>;
};

/**
 * @description 指定人是否具备对应的行政区域权限
 * @summary Response data types
 * @url [ post ] /api/Districts/{userId}
 * @bizName aggsBiz
 */
export type PostDistrictsUserIdResTypeByAggs = {
    hasPermission: boolean;
    areaCode: string;
};

/**
 * @description 通过经纬度获取行政区域列表集合（国家、省、市、县）
 * @summary Request data types
 * @url [ get ] /api/Districts/Coordinate
 * @bizName aggsBiz
 */
export type GetDistrictsCoordinateReqTypeByAggs = {
    Longitude?: number;
    Latitude?: number;
    'X-version'?: string;
};

/**
 * @description 通过经纬度获取行政区域列表集合（国家、省、市、县）
 * @summary Response data types
 * @url [ get ] /api/Districts/Coordinate
 * @bizName aggsBiz
 */
export type GetDistrictsCoordinateResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        resourceId: string;
        englishName: string;
        coordinate: {
            longitude: number;
            latitude: number;
        };
        areaCode: string;
        parentId: string;
        parentIdPath: string;
        parentNamePath: string;
        geoFilePath: string;
        platformId: string;
        order: number;
    }>;
};

/**
 * @description 获取符合查询条件的事件实体
 * @summary Request data types
 * @url [ get ] /api/Events
 * @bizName aggsBiz
 */
export type GetEventsReqTypeByAggs = {
    status?: Array<number>;
    'up_left.Longitude'?: number;
    'up_left.Latitude'?: number;
    'bottom_right.Longitude'?: number;
    'bottom_right.Latitude'?: number;
    is_sort?: boolean;
    keyword?: string;
    eventTypes?: string;
    priorities?: string;
    areaCodes?: string;
    prefixAreaCodes?: string;
    groupIds?: Array<string>;
    sourceId?: string;
    startTime?: string;
    endTime?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取符合查询条件的事件实体
 * @summary Response data types
 * @url [ get ] /api/Events
 * @bizName aggsBiz
 */
export type GetEventsResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        priority: number;
        state: number;
        longitude: number;
        latitude: number;
        eventType: {
            name: string;
            description: string;
            value: number;
            isEffective: boolean;
            code: string;
            platformId: string;
            resourceId: string;
            id: string;
        };
        createdTime: string;
        areaCode: string;
        updateTime: string;
        resourceId: string;
        isAudited: boolean;
        description: string;
        group: {
            id: string;
            name: string;
            description: string;
        };
        sceneGroup: {
            id: string;
            name: string;
            description: string;
        };
        happenedTime: string;
        finishedTime: string;
        address: string;
        submitUnit: {
            id: string;
            name: string;
            path: string;
            unitType: 0 | 1 | 2;
        };
        unit: {
            id: string;
            name: string;
            path: string;
            unitType: 0 | 1 | 2;
        };
        source: {
            id: string;
            name: string;
            sourceType: 0 | 1 | 2;
        };
        extension: string;
        typeID: string;
        expectStartedTime: string;
        expectFinishedTime: string;
        isMock: boolean;
        totalTaskCount: number;
        noStatedTaskCount: number;
        finishedTaskCount: number;
        confirmedTaskCount: number;
        inProcessTaskCount: number;
        pausedTaskCount: number;
        isDeleted: boolean;
        responseLevel: {
            preplanId: string;
            enableResponseLevelId: string;
        };
        associatePreplanId: string;
    }>;
};

/**
 * @description 支持关系资源的事件搜索
 * @summary Request data types
 * @url [ post ] /api/Events
 * @bizName aggsBiz
 */
export type PostEventsReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    status?: Array<number>;
    upLeft?: {
        longitude: number;
        latitude: number;
    };
    bottomRight?: {
        longitude: number;
        latitude: number;
    };
    isSorted?: boolean;
    isAudited?: boolean;
    resourceId?: string;
    keyword?: string;
    groupIds?: Array<string>;
    sourceId?: string;
    eventTypes?: Array<string>;
    priorities?: Array<string>;
    areaCodes?: Array<string>;
    prefixAreaCodes?: Array<string>;
    startTime?: string;
    endTime?: string;
    sortType?: 0 | 1 | 2;
    resourceRelationship?: {
        mainResources: Array<{
            resourceId: string;
            type: string;
        }>;
        dataHandleType: 0 | 1;
    };
};

/**
 * @description 支持关系资源的事件搜索
 * @summary Response data types
 * @url [ post ] /api/Events
 * @bizName aggsBiz
 */
export type PostEventsResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        priority: number;
        state: number;
        longitude: number;
        latitude: number;
        eventType: {
            name: string;
            description: string;
            value: number;
            isEffective: boolean;
            code: string;
            platformId: string;
            resourceId: string;
            id: string;
        };
        createdTime: string;
        areaCode: string;
        updateTime: string;
        resourceId: string;
        isAudited: boolean;
        description: string;
        group: {
            id: string;
            name: string;
            description: string;
        };
        sceneGroup: {
            id: string;
            name: string;
            description: string;
        };
        happenedTime: string;
        finishedTime: string;
        address: string;
        submitUnit: {
            id: string;
            name: string;
            path: string;
            unitType: 0 | 1 | 2;
        };
        unit: {
            id: string;
            name: string;
            path: string;
            unitType: 0 | 1 | 2;
        };
        source: {
            id: string;
            name: string;
            sourceType: 0 | 1 | 2;
        };
        extension: string;
        typeID: string;
        expectStartedTime: string;
        expectFinishedTime: string;
        isMock: boolean;
        totalTaskCount: number;
        noStatedTaskCount: number;
        finishedTaskCount: number;
        confirmedTaskCount: number;
        inProcessTaskCount: number;
        pausedTaskCount: number;
        isDeleted: boolean;
        responseLevel: {
            preplanId: string;
            enableResponseLevelId: string;
        };
        associatePreplanId: string;
    }>;
};

/**
 * @description 获取符合查询条件的基础事件实体
 * @summary Request data types
 * @url [ get ] /api/Events/base
 * @bizName aggsBiz
 */
export type GetEventsBaseReqTypeByAggs = {
    status?: Array<number>;
    'up_left.Longitude'?: number;
    'up_left.Latitude'?: number;
    'bottom_right.Longitude'?: number;
    'bottom_right.Latitude'?: number;
    is_sort?: boolean;
    keyword?: string;
    eventTypes?: string;
    priorities?: string;
    areaCodes?: string;
    prefixAreaCodes?: string;
    groupIds?: Array<string>;
    sourceId?: string;
    startTime?: string;
    endTime?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取符合查询条件的基础事件实体
 * @summary Response data types
 * @url [ get ] /api/Events/base
 * @bizName aggsBiz
 */
export type GetEventsBaseResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        priority: number;
        state: number;
        longitude: number;
        latitude: number;
        eventType: {
            name: string;
            description: string;
            value: number;
            isEffective: boolean;
            code: string;
            platformId: string;
            resourceId: string;
            id: string;
        };
        createdTime: string;
        areaCode: string;
        updateTime: string;
        resourceId: string;
        isAudited: boolean;
    }>;
};

/**
 * @description 获取指定id的事件实体
 * @summary Request data types
 * @url [ get ] /api/Events/{id}
 * @bizName aggsBiz
 */
export type GetEventsIdReqTypeByAggs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取指定id的事件实体
 * @summary Response data types
 * @url [ get ] /api/Events/{id}
 * @bizName aggsBiz
 */
export type GetEventsIdResTypeByAggs = {
    id: string;
    name: string;
    priority: number;
    state: number;
    longitude: number;
    latitude: number;
    eventType: {
        name: string;
        description: string;
        value: number;
        isEffective: boolean;
        code: string;
        platformId: string;
        resourceId: string;
        id: string;
    };
    createdTime: string;
    areaCode: string;
    updateTime: string;
    resourceId: string;
    isAudited: boolean;
    description: string;
    group: {
        id: string;
        name: string;
        description: string;
    };
    sceneGroup: {
        id: string;
        name: string;
        description: string;
    };
    happenedTime: string;
    finishedTime: string;
    address: string;
    submitUnit: {
        id: string;
        name: string;
        path: string;
        unitType: 0 | 1 | 2;
    };
    unit: {
        id: string;
        name: string;
        path: string;
        unitType: 0 | 1 | 2;
    };
    source: {
        id: string;
        name: string;
        sourceType: 0 | 1 | 2;
    };
    extension: string;
    typeID: string;
    expectStartedTime: string;
    expectFinishedTime: string;
    isMock: boolean;
    totalTaskCount: number;
    noStatedTaskCount: number;
    finishedTaskCount: number;
    confirmedTaskCount: number;
    inProcessTaskCount: number;
    pausedTaskCount: number;
    isDeleted: boolean;
    responseLevel: {
        preplanId: string;
        enableResponseLevelId: string;
    };
    associatePreplanId: string;
    firstResponseLevel: {
        isEnable: boolean;
        id: string;
        name: string;
        content: string;
        condition: string;
    };
    secondResponseLevel: {
        isEnable: boolean;
        id: string;
        name: string;
        content: string;
        condition: string;
    };
    thirdResponseLevel: {
        isEnable: boolean;
        id: string;
        name: string;
        content: string;
        condition: string;
    };
    fourthResponseLevel: {
        isEnable: boolean;
        id: string;
        name: string;
        content: string;
        condition: string;
    };
    associatePreplanName: string;
    isHasRecommendPreplan: boolean;
    recommendPreplan: {
        id: string;
        name: string;
        eventType: {
            description: string;
            id: string;
            name: string;
        };
        eventPriority: number;
        areaCode: string;
    };
};

/**
 * @description 获取状态为`未开始`、`处理中`的事件实体
 * @summary Request data types
 * @url [ get ] /api/Events/running
 * @bizName aggsBiz
 */
export type GetEventsRunningReqTypeByAggs = {
    keyword?: string;
    eventTypes?: string;
    priorities?: string;
    areaCodes?: string;
    prefixAreaCodes?: string;
    groupIds?: Array<string>;
    sourceId?: string;
    startTime?: string;
    endTime?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取状态为`未开始`、`处理中`的事件实体
 * @summary Response data types
 * @url [ get ] /api/Events/running
 * @bizName aggsBiz
 */
export type GetEventsRunningResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        priority: number;
        state: number;
        longitude: number;
        latitude: number;
        eventType: {
            name: string;
            description: string;
            value: number;
            isEffective: boolean;
            code: string;
            platformId: string;
            resourceId: string;
            id: string;
        };
        createdTime: string;
        areaCode: string;
        updateTime: string;
        resourceId: string;
        isAudited: boolean;
        description: string;
        group: {
            id: string;
            name: string;
            description: string;
        };
        sceneGroup: {
            id: string;
            name: string;
            description: string;
        };
        happenedTime: string;
        finishedTime: string;
        address: string;
        submitUnit: {
            id: string;
            name: string;
            path: string;
            unitType: 0 | 1 | 2;
        };
        unit: {
            id: string;
            name: string;
            path: string;
            unitType: 0 | 1 | 2;
        };
        source: {
            id: string;
            name: string;
            sourceType: 0 | 1 | 2;
        };
        extension: string;
        typeID: string;
        expectStartedTime: string;
        expectFinishedTime: string;
        isMock: boolean;
        totalTaskCount: number;
        noStatedTaskCount: number;
        finishedTaskCount: number;
        confirmedTaskCount: number;
        inProcessTaskCount: number;
        pausedTaskCount: number;
        isDeleted: boolean;
        responseLevel: {
            preplanId: string;
            enableResponseLevelId: string;
        };
        associatePreplanId: string;
    }>;
};

/**
 * @description 获取状态为`已结束`的事件实体
 * @summary Request data types
 * @url [ get ] /api/Events/history
 * @bizName aggsBiz
 */
export type GetEventsHistoryReqTypeByAggs = {
    isDelete?: boolean;
    keyword?: string;
    eventTypes?: string;
    priorities?: string;
    areaCodes?: string;
    prefixAreaCodes?: string;
    groupIds?: Array<string>;
    sourceId?: string;
    startTime?: string;
    endTime?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取状态为`已结束`的事件实体
 * @summary Response data types
 * @url [ get ] /api/Events/history
 * @bizName aggsBiz
 */
export type GetEventsHistoryResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        priority: number;
        state: number;
        longitude: number;
        latitude: number;
        eventType: {
            name: string;
            description: string;
            value: number;
            isEffective: boolean;
            code: string;
            platformId: string;
            resourceId: string;
            id: string;
        };
        createdTime: string;
        areaCode: string;
        updateTime: string;
        resourceId: string;
        isAudited: boolean;
        description: string;
        group: {
            id: string;
            name: string;
            description: string;
        };
        sceneGroup: {
            id: string;
            name: string;
            description: string;
        };
        happenedTime: string;
        finishedTime: string;
        address: string;
        submitUnit: {
            id: string;
            name: string;
            path: string;
            unitType: 0 | 1 | 2;
        };
        unit: {
            id: string;
            name: string;
            path: string;
            unitType: 0 | 1 | 2;
        };
        source: {
            id: string;
            name: string;
            sourceType: 0 | 1 | 2;
        };
        extension: string;
        typeID: string;
        expectStartedTime: string;
        expectFinishedTime: string;
        isMock: boolean;
        totalTaskCount: number;
        noStatedTaskCount: number;
        finishedTaskCount: number;
        confirmedTaskCount: number;
        inProcessTaskCount: number;
        pausedTaskCount: number;
        isDeleted: boolean;
        responseLevel: {
            preplanId: string;
            enableResponseLevelId: string;
        };
        associatePreplanId: string;
    }>;
};

/**
 * @description 获取事件关联相关数据
 * @summary Request data types
 * @url [ get ] /api/Events/AssociateData
 * @bizName aggsBiz
 */
export type GetEventsAssociateDataReqTypeByAggs = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取事件关联相关数据
 * @summary Response data types
 * @url [ get ] /api/Events/AssociateData
 * @bizName aggsBiz
 */
export type GetEventsAssociateDataResTypeByAggs = {
    totalCount: number;
    records: Array<{
        recordData: any;
        updateTime: string;
        eventAssociatedDataType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    }>;
};

/**
 * @description 根据事件id获取当前事件所关联的所有成员（指挥部成员、任务组成员）
 * @summary Request data types
 * @url [ get ] /api/Events/{id}/Members
 * @bizName aggsBiz
 */
export type GetEventsIdMembersReqTypeByAggs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 根据事件id获取当前事件所关联的所有成员（指挥部成员、任务组成员）
 * @summary Response data types
 * @url [ get ] /api/Events/{id}/Members
 * @bizName aggsBiz
 */
export type GetEventsIdMembersResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        phones: Array<{
            type: string;
            number: string;
        }>;
        photo: string;
    }>;
};

/**
 * @description 多条件查询设施信息
 * @summary Request data types
 * @url [ post ] /api/Facilities/condition_query
 * @bizName aggsBiz
 */
export type PostFacilitiesConditionQueryReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    keyWord?: string;
    layerIds?: Array<string>;
    layerName?: string;
    areaCodes?: Array<string>;
    prefixAreaCodes?: Array<string>;
    querySubordinateFacility: boolean;
    resourceRelationship?: {
        mainResources: Array<{
            resourceId: string;
            type: string;
        }>;
        dataHandleType: 0 | 1;
    };
    isShowAlert?: boolean;
};

/**
 * @description 多条件查询设施信息
 * @summary Response data types
 * @url [ post ] /api/Facilities/condition_query
 * @bizName aggsBiz
 */
export type PostFacilitiesConditionQueryResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        longitude: number;
        latitude: number;
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
        extension: any;
        areaCode: string;
        height: number;
        geometryData: {
            type: string;
            properties: any;
            geometry: {
                coordinates: Array<any>;
                type: string;
            };
        };
        platformId: string;
        facilityState: string;
        alertLevel: number;
    }>;
};

/**
 * @description 获取资源关系下图层的基于事件周边设施
 * @summary Request data types
 * @url [ post ] /api/Facilities/event/{eventId}
 * @bizName aggsBiz
 */
export type PostFacilitiesEventEventIdReqTypeByAggs = {
    eventId: string;
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    keyWord?: string;
    layerIds?: Array<string>;
    layerName?: string;
    areaCodes?: Array<string>;
    prefixAreaCodes?: Array<string>;
    querySubordinateFacility: boolean;
    resourceRelationship?: {
        mainResources: Array<{
            resourceId: string;
            type: string;
        }>;
        dataHandleType: 0 | 1;
    };
    isShowAlert?: boolean;
};

/**
 * @description 获取资源关系下图层的基于事件周边设施
 * @summary Response data types
 * @url [ post ] /api/Facilities/event/{eventId}
 * @bizName aggsBiz
 */
export type PostFacilitiesEventEventIdResTypeByAggs = {
    totalCount: number;
    records: Array<{
        facilityOut: {
            id: string;
            name: string;
            longitude: number;
            latitude: number;
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
            extension: any;
            areaCode: string;
            height: number;
            geometryData: {
                type: string;
                properties: any;
                geometry: {
                    coordinates: Array<any>;
                    type: string;
                };
            };
            platformId: string;
            facilityState: string;
        };
        distance: number;
    }>;
};

/**
 * @description 获取资源关系下图层基于事件周边的统计信息
 * @summary Request data types
 * @url [ post ] /api/Facilities/event/{eventId}/statistics
 * @bizName aggsBiz
 */
export type PostFacilitiesEventEventIdStatisticsReqTypeByAggs = {
    eventId: string;
    'X-version'?: string;
    resourceRelationship: {
        mainResources: Array<{
            resourceId: string;
            type: string;
        }>;
        dataHandleType: 0 | 1;
    };
    radius?: number;
};

/**
 * @description 获取资源关系下图层基于事件周边的统计信息
 * @summary Response data types
 * @url [ post ] /api/Facilities/event/{eventId}/statistics
 * @bizName aggsBiz
 */
export type PostFacilitiesEventEventIdStatisticsResTypeByAggs = {
    totalCount: number;
    records: Array<{
        layerId: string;
        layerName: string;
        facilitiesTotal: number;
        subordinateLayersTotal: number;
        subordinateLayers: Array<Record<string, any>>;
    }>;
};

/**
 * @description 周边设施
 * @summary Request data types
 * @url [ post ] /api/Facilities/circle_area
 * @bizName aggsBiz
 */
export type PostFacilitiesCircleAreaReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    layerIds: Array<string>;
    keyword?: string;
    center: {
        longitude: number;
        latitude: number;
    };
    radius: number;
    sortRule?: 0 | 1;
};

/**
 * @description 周边设施
 * @summary Response data types
 * @url [ post ] /api/Facilities/circle_area
 * @bizName aggsBiz
 */
export type PostFacilitiesCircleAreaResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        longitude: number;
        latitude: number;
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
        extension: any;
        areaCode: string;
        height: number;
        geometryData: {
            type: string;
            properties: any;
            geometry: {
                coordinates: Array<any>;
                type: string;
            };
        };
        platformId: string;
        facilityState: string;
        distance: number;
    }>;
};

/**
 * @description 通过告警ID匹配所属设施
 * @summary Request data types
 * @url [ get ] /api/Facilities/{alertId}/Match
 * @bizName aggsBiz
 */
export type GetFacilitiesAlertIdMatchReqTypeByAggs = {
    alertId: number;
    'X-version'?: string;
};

/**
 * @description 通过告警ID匹配所属设施
 * @summary Response data types
 * @url [ get ] /api/Facilities/{alertId}/Match
 * @bizName aggsBiz
 */
export type GetFacilitiesAlertIdMatchResTypeByAggs = {
    id: string;
    name: string;
    longitude: number;
    latitude: number;
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
    extension: any;
    areaCode: string;
    height: number;
    geometryData: {
        type: string;
        properties: any;
        geometry: {
            coordinates: Array<any>;
            type: string;
        };
    };
    platformId: string;
    facilityState: string;
};

/**
 * @description 设施关联告警、指标实时值查询
 * @summary Request data types
 * @url [ post ] /api/Facilities/metrics
 * @bizName aggsBiz
 */
export type PostFacilitiesMetricsReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    keyWord?: string;
    layerIds?: Array<string>;
    layerName?: string;
    areaCodes?: Array<string>;
    prefixAreaCodes?: Array<string>;
    querySubordinateFacility: boolean;
    relateTypeId?: string;
    alertTypeId?: string;
};

/**
 * @description 设施关联告警、指标实时值查询
 * @summary Response data types
 * @url [ post ] /api/Facilities/metrics
 * @bizName aggsBiz
 */
export type PostFacilitiesMetricsResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        alertLevel: number;
        metricsValue: number;
        longitude: number;
        latitude: number;
    }>;
};

/**
 * @description 获取目录下的文件
 * @summary Request data types
 * @url [ get ] /api/Files
 * @bizName aggsBiz
 */
export type GetFilesReqTypeByAggs = {
    directoryId: string;
    storageKind: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取目录下的文件
 * @summary Response data types
 * @url [ get ] /api/Files
 * @bizName aggsBiz
 */
export type GetFilesResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        fileId: string;
        path: string;
        fullPath: string;
        thumbnailPath: string;
        convertedFiles: Record<string, any>;
        length: number;
        fileType: 0 | 1 | 2 | 3 | 4;
        contentType: string;
        directoryInfo: {
            id: string;
            name: string;
            parentId: string;
            isPublic: boolean;
            createTime: string;
            updateTime: string;
        };
        storageKind: 0 | 1 | 2;
        isOldSsFile: boolean;
        userId: string;
        userName: string;
        nickName: string;
        uploadTime: string;
        createTime: string;
        updateTime: string;
        duration: string;
    }>;
};

/**
 * @description 分页查询国标下级域列表接口
 * @summary Request data types
 * @url [ get ] /api/GbLowerDomains
 * @bizName aggsBiz
 */
export type GetGbLowerDomainsReqTypeByAggs = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页查询国标下级域列表接口
 * @summary Response data types
 * @url [ get ] /api/GbLowerDomains
 * @bizName aggsBiz
 */
export type GetGbLowerDomainsResTypeByAggs = {
    totalCount: number;
    records: Array<{
        jobId: string;
        regionId: string;
        jobName: string;
        jobGroup: string;
        jobMode: 1 | 2;
        jobBeginTime: string;
        jobEndTime: string;
        nextExecuteTime: string;
        jobStatus: 0 | 1 | 2 | 3 | 4 | 5;
        jobCron: string;
        name: string;
        status: number;
        ip: string;
        port: number;
        type: number;
        taskStatus: 1 | 2 | 3 | 4;
        timeRemaining: number;
        progress: number;
        cameraOnlineCount: number;
        actualCatalogsNum: number;
        catalogsNum: number;
        endTime: string;
        startTime: string;
        duration: number;
        result: number;
        syncNum: number;
        expiredCameraCount: number;
        hasConflictData: boolean;
        stateDuration: string;
        lastStateChangedTime: string;
    }>;
};

/**
 * @description 创建下级域信息包含下级域定时任务
 * @summary Request data types
 * @url [ post ] /api/GbLowerDomains
 * @bizName aggsBiz
 */
export type PostGbLowerDomainsReqTypeByAggs = {
    'X-version'?: string;
    activeRegister?: boolean;
    civilcode?: string;
    gbId: string;
    heartbeadCycle?: number;
    heartbeadTimeoutCount?: number;
    ip: string;
    manufacturer?: number;
    model?: string;
    name: string;
    needAuth?: boolean;
    password?: string;
    needMapping?: boolean;
    sipMappedAddress?: string;
    mediaMappedAddress?: string;
    networkType?: 1 | 2;
    sipPort: number;
    status?: 1 | 2;
    type?: 2 | 113 | 114 | 118 | 131 | 300;
    userName?: string;
    rtpRecvType?: 0 | 1 | 2;
    rtpSendType?: 0 | 1 | 2;
    sipTransProtocol?: 0 | 1;
    extension?: any;
    fullSyncRetainCount?: number;
    dirSyncRetainCount?: number;
    incrementSyncRetainCount?: number;
    gbProtocolVersion?: 0 | 1;
    enableRtpSinglePort?: boolean;
    enableRealmAddress?: boolean;
    enableSsrcCheck?: boolean;
    scheduleTask?: {
        beginTime: string;
        endTime: string;
        cron: string;
        description: string;
        mode: 1 | 2;
    };
};

/**
 * @description 创建下级域信息包含下级域定时任务
 * @summary Response data types
 * @url [ post ] /api/GbLowerDomains
 * @bizName aggsBiz
 */
export type PostGbLowerDomainsResTypeByAggs = {
    jobId: string;
    jobName: string;
    name: string;
    ip: string;
    type: number;
    gbId: string;
    sipPort: number;
    heartBeadCycle: number;
    heartBeadTimeoutCount: number;
    needAuth: boolean;
    password: string;
    networkType: number;
    jobMode: 1 | 2;
    cron: string;
    nextExecuteTime: string;
    beginTime: string;
    endTime: string;
    status: number;
    taskStatus: 1 | 2 | 3 | 4;
    timeRemaining: number;
    progress: number;
    catalogsNum: number;
    actualCatalogsNum: number;
    rtpRecvType: 0 | 1 | 2;
    rtpSendType: 0 | 1 | 2;
    sipTransProtocol: 0 | 1;
    extension: any;
    fullSyncRetainCount: number;
    dirSyncRetainCount: number;
    incrementSyncRetainCount: number;
    gbProtocolVersion: 0 | 1;
    enableRtpSinglePort: boolean;
    enableRealmAddress: boolean;
    enableSsrcCheck: boolean;
    stateDuration: string;
    lastStateChangedTime: string;
    needMapping: boolean;
    sipMappedAddress: string;
    mediaMappedAddress: string;
};

/**
 * @description 根据下级域id获取下级域详细信息接口
 * @summary Request data types
 * @url [ get ] /api/GbLowerDomains/{id}
 * @bizName aggsBiz
 */
export type GetGbLowerDomainsIdReqTypeByAggs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 根据下级域id获取下级域详细信息接口
 * @summary Response data types
 * @url [ get ] /api/GbLowerDomains/{id}
 * @bizName aggsBiz
 */
export type GetGbLowerDomainsIdResTypeByAggs = {
    jobId: string;
    jobName: string;
    name: string;
    ip: string;
    type: number;
    gbId: string;
    sipPort: number;
    heartBeadCycle: number;
    heartBeadTimeoutCount: number;
    needAuth: boolean;
    password: string;
    networkType: number;
    jobMode: 1 | 2;
    cron: string;
    nextExecuteTime: string;
    beginTime: string;
    endTime: string;
    status: number;
    taskStatus: 1 | 2 | 3 | 4;
    timeRemaining: number;
    progress: number;
    catalogsNum: number;
    actualCatalogsNum: number;
    rtpRecvType: 0 | 1 | 2;
    rtpSendType: 0 | 1 | 2;
    sipTransProtocol: 0 | 1;
    extension: any;
    fullSyncRetainCount: number;
    dirSyncRetainCount: number;
    incrementSyncRetainCount: number;
    gbProtocolVersion: 0 | 1;
    enableRtpSinglePort: boolean;
    enableRealmAddress: boolean;
    enableSsrcCheck: boolean;
    stateDuration: string;
    lastStateChangedTime: string;
    needMapping: boolean;
    sipMappedAddress: string;
    mediaMappedAddress: string;
};

/**
 * @description 删除指定下级域
 * @summary Request data types
 * @url [ delete ] /api/GbLowerDomains/{id}
 * @bizName aggsBiz
 */
export type DeleteGbLowerDomainsIdReqTypeByAggs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 修改下级域信息
 * @summary Request data types
 * @url [ put ] /api/GbLowerDomains/{id}
 * @bizName aggsBiz
 */
export type PutGbLowerDomainsIdReqTypeByAggs = {
    id: string;
    'X-version'?: string;
    heartbeadCycle?: number;
    heartbeadTimeoutCount?: number;
    ip: string;
    name: string;
    needAuth?: boolean;
    password?: string;
    needMapping?: boolean;
    sipMappedAddress?: string;
    mediaMappedAddress?: string;
    networkType?: 1 | 2;
    sipPort: number;
    userName?: string;
    rtpRecvType?: 0 | 1 | 2;
    rtpSendType?: 0 | 1 | 2;
    sipTransProtocol?: 0 | 1;
    extension?: any;
    fullSyncRetainCount?: number;
    dirSyncRetainCount?: number;
    incrementSyncRetainCount?: number;
    gbProtocolVersion?: 0 | 1;
    enableRtpSinglePort?: boolean;
    enableRealmAddress?: boolean;
    enableSsrcCheck?: boolean;
    updateJobIn?: {
        description: string;
        mode: 1 | 2;
        beginTime: string;
        endTime: string;
        cron: string;
    };
};

/**
 * @description 模糊查询物资（分权分域）
 * @summary Request data types
 * @url [ post ] /api/Goods/search
 * @bizName aggsBiz
 */
export type PostGoodsSearchReqTypeByAggs = {
    'X-version'?: string;
    keyWord?: string;
    maxCount?: number;
    locations?: Array<{
        longitude: number;
        latitude: number;
    }>;
    areaCodes?: Array<string>;
    prefixAreaCodes?: Array<string>;
};

/**
 * @description 模糊查询物资（分权分域）
 * @summary Response data types
 * @url [ post ] /api/Goods/search
 * @bizName aggsBiz
 */
export type PostGoodsSearchResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
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
        longitude: number;
        latitude: number;
        facility: {
            id: string;
            name: string;
            address: string;
            description: string;
        };
    }>;
};

/**
 * @description GPS点位搜索
 * @summary Request data types
 * @url [ get ] /api/GpsSearch
 * @bizName aggsBiz
 */
export type GetGpsSearchReqTypeByAggs = {
    'up_left.Longitude': number;
    'up_left.Latitude': number;
    'bottom_right.Longitude': number;
    'bottom_right.Latitude': number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description GPS点位搜索
 * @summary Response data types
 * @url [ get ] /api/GpsSearch
 * @bizName aggsBiz
 */
export type GetGpsSearchResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        reportTime: string;
        userInfo: {
            id: string;
            name: string;
            account: string;
            title: string;
            department: string;
            phones: Array<{
                type: string;
                number: string;
            }>;
            mail: string;
            address: string;
            relatedId: string;
            photoPath: string;
            photo: string;
            contactTypeId: string;
            paths: Array<string>;
        };
        coordinate: {
            longitude: number;
            latitude: number;
        };
        metersPerSecond: number;
        direction: number;
        altitude: number;
        address: string;
        uploadSourceType: 0 | 1;
        terminalInfo: {
            id: string;
            name: string;
            number: string;
            description: string;
            resourceId: string;
            terminalType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
            areaCode: string;
            areaName: string;
            status: 1 | 2;
            relateType: {
                id: string;
                name: string;
                resourceId: string;
                type: 0 | 1;
            };
            contact: {
                id: string;
                name: string;
                phone: string;
                department: string;
                title: string;
            };
        };
    }>;
};

/**
 * @description 查询指定设备的最新活跃点位
 * @summary Request data types
 * @url [ get ] /api/GpsSearch/active/{device}/latest
 * @bizName aggsBiz
 */
export type GetGpsSearchActiveDeviceLatestReqTypeByAggs = {
    device: string;
    upload_source_type: number;
    'X-version'?: string;
};

/**
 * @description 查询指定设备的最新活跃点位
 * @summary Response data types
 * @url [ get ] /api/GpsSearch/active/{device}/latest
 * @bizName aggsBiz
 */
export type GetGpsSearchActiveDeviceLatestResTypeByAggs = {
    deviceId: string;
    gps: {
        coordinate: {
            longitude: number;
            latitude: number;
        };
        metersPerSecond: number;
        direction: number;
        altitude: number;
        address: string;
    };
    reportTime: string;
    uploadSourceType: 0 | 1;
};

/**
 * @description 查询多个指定设备的最新活跃点位
 * @summary Request data types
 * @url [ post ] /api/GpsSearch/active/devices/latest
 * @bizName aggsBiz
 */
export type PostGpsSearchActiveDevicesLatestReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    devices?: Array<{
        device: string;
        uploadSourceType: 0 | 1;
    }>;
};

/**
 * @description 查询多个指定设备的最新活跃点位
 * @summary Response data types
 * @url [ post ] /api/GpsSearch/active/devices/latest
 * @bizName aggsBiz
 */
export type PostGpsSearchActiveDevicesLatestResTypeByAggs = {
    totalCount: number;
    records: Array<{
        deviceId: string;
        gps: {
            coordinate: {
                longitude: number;
                latitude: number;
            };
            metersPerSecond: number;
            direction: number;
            altitude: number;
            address: string;
        };
        reportTime: string;
        uploadSourceType: 0 | 1;
    }>;
};

/**
 * @description 查询设备GPS历史轨迹
 * @summary Request data types
 * @url [ get ] /api/GpsSearch/history/{device}
 * @bizName aggsBiz
 */
export type GetGpsSearchHistoryDeviceReqTypeByAggs = {
    device: string;
    start_time: string;
    end_time: string;
    upload_source_type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 查询设备GPS历史轨迹
 * @summary Response data types
 * @url [ get ] /api/GpsSearch/history/{device}
 * @bizName aggsBiz
 */
export type GetGpsSearchHistoryDeviceResTypeByAggs = {
    totalCount: number;
    records: Array<{
        deviceId: string;
        gps: {
            coordinate: {
                longitude: number;
                latitude: number;
            };
            metersPerSecond: number;
            direction: number;
            altitude: number;
            address: string;
        };
        reportTime: string;
        uploadSourceType: 0 | 1;
    }>;
};

/**
 * @description 获取设备最后的Gps点位
 * @summary Request data types
 * @url [ get ] /api/GpsSearch/history/{device}/latest
 * @bizName aggsBiz
 */
export type GetGpsSearchHistoryDeviceLatestReqTypeByAggs = {
    day_intervals?: number;
    device: string;
    upload_source_type: number;
    'X-version'?: string;
};

/**
 * @description 获取设备最后的Gps点位
 * @summary Response data types
 * @url [ get ] /api/GpsSearch/history/{device}/latest
 * @bizName aggsBiz
 */
export type GetGpsSearchHistoryDeviceLatestResTypeByAggs = {
    deviceId: string;
    gps: {
        coordinate: {
            longitude: number;
            latitude: number;
        };
        metersPerSecond: number;
        direction: number;
        altitude: number;
        address: string;
    };
    reportTime: string;
    uploadSourceType: 0 | 1;
};

/**
 * @description 通过GPS设备ID查询关联监控
 * @summary Request data types
 * @url [ get ] /api/GpsSearch/{deviceId}/camera
 * @bizName aggsBiz
 */
export type GetGpsSearchDeviceIdCameraReqTypeByAggs = {
    deviceId: string;
    PlayUrlShowType?: number;
    'X-version'?: string;
};

/**
 * @description 通过GPS设备ID查询关联监控
 * @summary Response data types
 * @url [ get ] /api/GpsSearch/{deviceId}/camera
 * @bizName aggsBiz
 */
export type GetGpsSearchDeviceIdCameraResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        status: 1 | 2 | 3 | 4;
        quality: 0 | 1 | 2 | 3 | 4;
        areaCode: string;
        thumbnailID: string;
        longitude: number;
        latitude: number;
        playUrl: {
            playUrlType: 0 | 1 | 2;
            rtspUrl: string;
            flvUrl: string;
            wsUrl: string;
            rtmpUrl: string;
            webRtc: string;
        };
    }>;
};

/**
 * @description 分页查询组成员
 * @summary Request data types
 * @url [ get ] /api/Groups/{id}/members
 * @bizName aggsBiz
 */
export type GetGroupsIdMembersReqTypeByAggs = {
    id: string;
    Type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页查询组成员
 * @summary Response data types
 * @url [ get ] /api/Groups/{id}/members
 * @bizName aggsBiz
 */
export type GetGroupsIdMembersResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        account: string;
        description: string;
        gender: number;
        birthday: string;
        title: string;
        createTime: string;
        updateTime: string;
        phones: Array<{
            type: string;
            number: string;
        }>;
        callInformation: {
            mail: string;
            address: string;
            weixin: string;
            weibo: string;
        };
        resourceId: string;
        platformId: string;
        platformName: string;
        relatedId: string;
        photo: string;
        type: number;
        status: 1 | 2;
        videoQuality: 0 | 1 | 2 | 3 | 4;
        isDelete: boolean;
        photoPath: string;
    }>;
};

/**
 * @description 搜索资源关系下预案组
 * @summary Request data types
 * @url [ post ] /api/Groups
 * @bizName aggsBiz
 */
export type PostGroupsReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    resourceRelationship: {
        mainResources: Array<{
            resourceId: string;
            type: string;
        }>;
        dataHandleType: 0 | 1;
    };
    keyword?: string;
};

/**
 * @description 搜索资源关系下预案组
 * @summary Response data types
 * @url [ post ] /api/Groups
 * @bizName aggsBiz
 */
export type PostGroupsResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        members: Array<string>;
        createTime: string;
        updateTime: string;
        owner: string;
        type: number;
    }>;
};

/**
 * @description 搜索资源关系下预案组组和联系人
 * @summary Request data types
 * @url [ post ] /api/Groups/search
 * @bizName aggsBiz
 */
export type PostGroupsSearchReqTypeByAggs = {
    'X-version'?: string;
    resourceRelationship: {
        mainResources: Array<{
            resourceId: string;
            type: string;
        }>;
        dataHandleType: 0 | 1;
    };
    keyword?: string;
    limit?: number;
};

/**
 * @description 搜索资源关系下预案组组和联系人
 * @summary Response data types
 * @url [ post ] /api/Groups/search
 * @bizName aggsBiz
 */
export type PostGroupsSearchResTypeByAggs = {
    totalCount: number;
    records: {
        contacts: Array<{
            id: string;
            name: string;
            account: string;
            parentId: string;
            description: string;
            gender: number;
            title: string;
            photoPath: string;
            phones: Array<{
                type: string;
                number: string;
            }>;
            memberOf: Array<string>;
            paths: Array<string>;
            platformId: string;
            resourceId: string;
        }>;
        groups: Array<{
            id: string;
            name: string;
            description: string;
            parentId: string;
            type: number;
            path: string;
            owner: string;
            memberCount: number;
            contactCount: number;
            isLeaf: boolean;
        }>;
    };
};

/**
 * @description 获取根图层的下级图层的资源统计信息
 * @summary Request data types
 * @url [ get ] /api/Layers/statistics/root_layers
 * @bizName aggsBiz
 */
export type GetLayersStatisticsRootLayersReqTypeByAggs = {
    LayerName: string;
    Keywords?: string;
    AreaCode?: string;
    ProductId?: string;
    PrefixAreaCodes?: Array<string>;
    'X-version'?: string;
};

/**
 * @description 获取根图层的下级图层的资源统计信息
 * @summary Response data types
 * @url [ get ] /api/Layers/statistics/root_layers
 * @bizName aggsBiz
 */
export type GetLayersStatisticsRootLayersResTypeByAggs = {
    layerId: string;
    layerName: string;
    subordinateLayersTotal: number;
    facilitiesTotal: number;
    subordinateLayers: Array<{
        layerId: string;
        layerName: string;
        subordinateLayersTotal: number;
        facilitiesTotal: number;
        subordinateLayers: Array<Record<string, any>>;
    }>;
};

/**
 * @description 批量获取多个区域的根图层下级图层的资源统计信息
 * @summary Request data types
 * @url [ get ] /api/Layers/statistics/batch_layers
 * @bizName aggsBiz
 */
export type GetLayersStatisticsBatchLayersReqTypeByAggs = {
    LayerName: string;
    ProductId?: string;
    AreaCodes?: Array<string>;
    PrefixAreaCodes?: Array<string>;
    'X-version'?: string;
};

/**
 * @description 批量获取多个区域的根图层下级图层的资源统计信息
 * @summary Response data types
 * @url [ get ] /api/Layers/statistics/batch_layers
 * @bizName aggsBiz
 */
export type GetLayersStatisticsBatchLayersResTypeByAggs = {
    totalCount: number;
    records: Array<{
        layerId: string;
        layerName: string;
        subordinateLayersTotal: number;
        facilitiesTotal: number;
        subordinateLayers: Array<{
            layerId: string;
            layerName: string;
            subordinateLayersTotal: number;
            facilitiesTotal: number;
            subordinateLayers: Array<Record<string, any>>;
        }>;
        areaCode: string;
    }>;
};

/**
 * @description 查询拍传详情
 * @summary Request data types
 * @url [ get ] /api/MultimediaTransfers/{id}
 * @bizName aggsBiz
 */
export type GetMultimediaTransfersIdReqTypeByAggs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询拍传详情
 * @summary Response data types
 * @url [ get ] /api/MultimediaTransfers/{id}
 * @bizName aggsBiz
 */
export type GetMultimediaTransfersIdResTypeByAggs = {
    id: string;
    name: string;
    templateId: string;
    templateName: string;
    longitude: number;
    latitude: number;
    address: string;
    fileGroupId: string;
    fileCount: number;
    userId: string;
    userName: string;
    organizationId: string;
    organizationName: string;
    uploadTime: string;
    company: string;
    companyAddress: string;
    resourceId: string;
    platformId: string;
    areaCode: string;
    districtName: string;
    fileRecords: Array<{
        id: string;
        name: string;
        fileId: string;
        path: string;
        fullPath: string;
        thumbnailPath: string;
        convertedFiles: Record<string, any>;
        length: number;
        fileType: 0 | 1 | 2 | 3 | 4;
        contentType: string;
        directoryInfo: {
            id: string;
            name: string;
            parentId: string;
            isPublic: boolean;
            createTime: string;
            updateTime: string;
        };
        storageKind: 0 | 1 | 2;
        isOldSsFile: boolean;
        userId: string;
        userName: string;
        uploadTime: string;
        createTime: string;
        updateTime: string;
        expireTime: string;
        isExpired: boolean;
    }>;
};

/**
 * @description 查询拍传
 * @summary Request data types
 * @url [ post ] /api/MultimediaTransfers
 * @bizName aggsBiz
 */
export type PostMultimediaTransfersReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    beginTime?: string;
    endTime?: string;
    templateId?: string;
    keyWord?: string;
    organizationId?: string;
    userId?: string;
    resourceId?: string;
    platformId?: string;
    prefixAreaCodes?: Array<string>;
    isMatchNullAreaCode?: boolean;
};

/**
 * @description 查询拍传
 * @summary Response data types
 * @url [ post ] /api/MultimediaTransfers
 * @bizName aggsBiz
 */
export type PostMultimediaTransfersResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        templateId: string;
        templateName: string;
        longitude: number;
        latitude: number;
        address: string;
        fileGroupId: string;
        fileCount: number;
        userId: string;
        userName: string;
        organizationId: string;
        organizationName: string;
        uploadTime: string;
        company: string;
        companyAddress: string;
        resourceId: string;
        platformId: string;
        areaCode: string;
        districtName: string;
    }>;
};

/**
 * @description 搜索网络
 * @summary Request data types
 * @url [ post ] /api/Networks
 * @bizName aggsBiz
 */
export type PostNetworksReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    networkIds?: Array<string>;
    keyword?: string;
    status?: 1 | 2;
    prefixAreaCodes?: Array<string>;
    isMatchNullAreaCode?: boolean;
};

/**
 * @description 搜索网络
 * @summary Response data types
 * @url [ post ] /api/Networks
 * @bizName aggsBiz
 */
export type PostNetworksResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        areaCode: string;
        areaName: string;
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
            alertType: {
                id: string;
                name: string;
                description: string;
                parentId: string;
                createTime: string;
                updateTime: string;
                resourceId: string;
                platformId: string;
            };
            jobMetaName: string;
            resourceId: string;
            alertLevel: number;
            alertTime: string;
            alertRecords: Array<{
                id: number;
                name: string;
                typeId: string;
                typeName: string;
                typeIdPath: string;
                typeNamePath: string;
                level: number;
                sourceTypeId: string;
                sourceTypeName: string;
                status: 0 | 1 | 2;
                startTime: string;
                endTime: string;
                assetId: string;
                description: string;
                resolverId: string;
                resolverName: string;
                resolveMessage: string;
                assetName: string;
                createTime: string;
                updateTime: string;
                resourceId: string;
                platformId: string;
                platformName: string;
                longitude: number;
                latitude: number;
                areaCode: string;
                source: {
                    instance: string;
                    processorUrl: string;
                };
                extension: any;
            }>;
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
 * @description 搜索第三方平台
 * @summary Request data types
 * @url [ post ] /api/Platforms
 * @bizName aggsBiz
 */
export type PostPlatformsReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    resourceRelationship?: {
        mainResources: Array<{
            resourceId: string;
            type: string;
        }>;
        dataHandleType: 0 | 1;
    };
    platformIds?: Array<string>;
    keyword?: string;
    networkId?: string;
    status?: 1 | 2;
    prefixAreaCodes?: Array<string>;
    isMatchNullAreaCode?: boolean;
    isContainMainResource?: boolean;
};

/**
 * @description 搜索第三方平台
 * @summary Response data types
 * @url [ post ] /api/Platforms
 * @bizName aggsBiz
 */
export type PostPlatformsResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        areaCode: string;
        areaName: string;
        ipAddress: string;
        managerAddress: string;
        description: string;
        status: 1 | 2;
        account: string;
        password: string;
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
            alertType: {
                id: string;
                name: string;
                description: string;
                parentId: string;
                createTime: string;
                updateTime: string;
                resourceId: string;
                platformId: string;
            };
            jobMetaName: string;
            resourceId: string;
            alertLevel: number;
            alertTime: string;
            alertRecords: Array<{
                id: number;
                name: string;
                typeId: string;
                typeName: string;
                typeIdPath: string;
                typeNamePath: string;
                level: number;
                sourceTypeId: string;
                sourceTypeName: string;
                status: 0 | 1 | 2;
                startTime: string;
                endTime: string;
                assetId: string;
                description: string;
                resolverId: string;
                resolverName: string;
                resolveMessage: string;
                assetName: string;
                createTime: string;
                updateTime: string;
                resourceId: string;
                platformId: string;
                platformName: string;
                longitude: number;
                latitude: number;
                areaCode: string;
                source: {
                    instance: string;
                    processorUrl: string;
                };
                extension: any;
            }>;
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
        mainResources: Array<{
            resourceId: string;
            type: string;
        }>;
    }>;
};

/**
 * @description 搜索
 * @summary Request data types
 * @url [ get ] /api/Preplans/{id}/group
 * @bizName aggsBiz
 */
export type GetPreplansIdGroupReqTypeByAggs = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 搜索
 * @summary Response data types
 * @url [ get ] /api/Preplans/{id}/group
 * @bizName aggsBiz
 */
export type GetPreplansIdGroupResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        members: Array<{
            id: string;
            name: string;
            account: string;
            parentId: string;
            description: string;
            gender: number;
            title: string;
            photoPath: string;
            phones: Array<{
                type: string;
                number: string;
            }>;
            memberOf: Array<string>;
            paths: Array<string>;
            platformId: string;
            resourceId: string;
        }>;
        createTime: string;
        updateTime: string;
        owner: string;
        type: number;
    }>;
};

/**
 * @description 按条件查询预案
 * @summary Request data types
 * @url [ post ] /api/Preplans
 * @bizName aggsBiz
 */
export type PostPreplansReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    keyword?: string;
    eventTypeIds?: Array<string>;
    eventPriorities?: Array<string>;
    areaCodes?: Array<string>;
    prefixAreaCodes?: Array<string>;
};

/**
 * @description 按条件查询预案
 * @summary Response data types
 * @url [ post ] /api/Preplans
 * @bizName aggsBiz
 */
export type PostPreplansResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        eventType: {
            description: string;
            id: string;
            name: string;
        };
        eventPriority: number;
        areaCode: string;
        districtIdPath: string;
        districtNamePath: string;
        eventAffectRadius: number;
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
        textTemplate: string;
        sceneParameters: Array<string>;
        directoryRecordId: string;
        taskTemplate: {
            id: string;
            name: string;
        };
        associatedGroup: {
            description: string;
            id: string;
            name: string;
        };
        sceneGroup: {
            description: string;
            id: string;
            name: string;
        };
        firstResponseLevel: {
            id: string;
            name: string;
            content: string;
            condition: string;
        };
        secondResponseLevel: {
            id: string;
            name: string;
            content: string;
            condition: string;
        };
        thirdResponseLevel: {
            id: string;
            name: string;
            content: string;
            condition: string;
        };
        fourthResponseLevel: {
            id: string;
            name: string;
            content: string;
            condition: string;
        };
        platformId: string;
        resourceId: string;
        cameraLabels: Array<{
            id: number;
            name: string;
        }>;
        preplanGroups: Array<{
            description: string;
            id: string;
            name: string;
        }>;
        videoConferenceTerminals: Array<{
            id: string;
            name: string;
        }>;
    }>;
};

/**
 * @description 通过事件ID匹配预案
 * @summary Request data types
 * @url [ get ] /api/Preplans/{eventId}/match
 * @bizName aggsBiz
 */
export type GetPreplansEventIdMatchReqTypeByAggs = {
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 通过事件ID匹配预案
 * @summary Response data types
 * @url [ get ] /api/Preplans/{eventId}/match
 * @bizName aggsBiz
 */
export type GetPreplansEventIdMatchResTypeByAggs = {
    id: string;
    name: string;
    eventType: {
        description: string;
        id: string;
        name: string;
    };
    eventPriority: number;
    areaCode: string;
    districtIdPath: string;
    districtNamePath: string;
    eventAffectRadius: number;
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
    textTemplate: string;
    sceneParameters: Array<string>;
    directoryRecordId: string;
    taskTemplate: {
        id: string;
        name: string;
    };
    associatedGroup: {
        description: string;
        id: string;
        name: string;
    };
    sceneGroup: {
        description: string;
        id: string;
        name: string;
    };
    firstResponseLevel: {
        id: string;
        name: string;
        content: string;
        condition: string;
    };
    secondResponseLevel: {
        id: string;
        name: string;
        content: string;
        condition: string;
    };
    thirdResponseLevel: {
        id: string;
        name: string;
        content: string;
        condition: string;
    };
    fourthResponseLevel: {
        id: string;
        name: string;
        content: string;
        condition: string;
    };
    platformId: string;
    resourceId: string;
    cameraLabels: Array<{
        id: number;
        name: string;
    }>;
    preplanGroups: Array<{
        description: string;
        id: string;
        name: string;
    }>;
    videoConferenceTerminals: Array<{
        id: string;
        name: string;
    }>;
};

/**
 * @description 按条件查询分组的预案（分组包括（推荐预案列表、其他预案列表））
 * @summary Request data types
 * @url [ post ] /api/Preplans/grouping
 * @bizName aggsBiz
 */
export type PostPreplansGroupingReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    eventTypeId?: string;
    eventPriority?: number;
    areaCode?: string;
    isMatchNullAreaCode?: boolean;
};

/**
 * @description 按条件查询分组的预案（分组包括（推荐预案列表、其他预案列表））
 * @summary Response data types
 * @url [ post ] /api/Preplans/grouping
 * @bizName aggsBiz
 */
export type PostPreplansGroupingResTypeByAggs = {
    totalCount: number;
    records: {
        recommendsData: Array<{
            id: string;
            name: string;
            eventType: {
                description: string;
                id: string;
                name: string;
            };
            eventPriority: number;
            areaCode: string;
            platformId: string;
            resourceId: string;
        }>;
        othersData: Array<{
            id: string;
            name: string;
            eventType: {
                description: string;
                id: string;
                name: string;
            };
            eventPriority: number;
            areaCode: string;
            platformId: string;
            resourceId: string;
        }>;
    };
};

/**
 * @description 新增项目
 * @summary Request data types
 * @url [ post ] /api/Projects
 * @bizName aggsBiz
 */
export type PostProjectsReqTypeByAggs = {
    'X-version'?: string;
    name: string;
    resourceId?: string;
    description?: string;
    parentId?: string;
};

/**
 * @description 新增项目
 * @summary Response data types
 * @url [ post ] /api/Projects
 * @bizName aggsBiz
 */
export type PostProjectsResTypeByAggs = {
    id: string;
    name: string;
    parentId: string;
    totalMetadataCount: number;
    description: string;
    themes: Array<{
        id: string;
        name: string;
    }>;
    resourceId: string;
};

/**
 * @description 获取项目
 * @summary Request data types
 * @url [ get ] /api/Projects/{id}
 * @bizName aggsBiz
 */
export type GetProjectsIdReqTypeByAggs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取项目
 * @summary Response data types
 * @url [ get ] /api/Projects/{id}
 * @bizName aggsBiz
 */
export type GetProjectsIdResTypeByAggs = {
    id: string;
    name: string;
    resourceId: string;
    themes: Array<{
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        relationshipResources: Array<{
            resourceType: string;
        }>;
    }>;
    parentId: string;
    description: string;
};

/**
 * @description 删除项目
 * @summary Request data types
 * @url [ delete ] /api/Projects/{id}
 * @bizName aggsBiz
 */
export type DeleteProjectsIdReqTypeByAggs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 导出
 * @summary Request data types
 * @url [ get ] /api/Projects/{id}/export
 * @bizName aggsBiz
 */
export type GetProjectsIdExportReqTypeByAggs = {
    id: string;
    DataType?: number;
    'X-version'?: string;
};

/**
 * @description 导入
 * @summary Request data types
 * @url [ post ] /api/Projects/import
 * @bizName aggsBiz
 */
export type PostProjectsImportReqTypeByAggs = {
    'X-version'?: string;
};

/**
 * @description 导出地图全局配置
 * @summary Request data types
 * @url [ get ] /api/Projects/{id}/export/LayerConfig
 * @bizName aggsBiz
 */
export type GetProjectsIdExportLayerConfigReqTypeByAggs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 导入地图全局配置
 * @summary Request data types
 * @url [ post ] /api/Projects/import/LayerConfig
 * @bizName aggsBiz
 */
export type PostProjectsImportLayerConfigReqTypeByAggs = {
    'X-version'?: string;
};

/**
 * @description 导出资源库条目
 * @summary Request data types
 * @url [ get ] /api/Projects/{id}/export/ResourceDbs
 * @bizName aggsBiz
 */
export type GetProjectsIdExportResourceDbsReqTypeByAggs = {
    id: string;
    resourceDbId?: string;
    'X-version'?: string;
};

/**
 * @description 导入资源库条目
 * @summary Request data types
 * @url [ post ] /api/Projects/import/ResourceDbs
 * @bizName aggsBiz
 */
export type PostProjectsImportResourceDbsReqTypeByAggs = {
    'X-version'?: string;
};

/**
 * @description 查询主体下全部类型资源
 * @summary Request data types
 * @url [ post ] /api/ResourceRelationships/resource
 * @bizName aggsBiz
 */
export type PostResourceRelationshipsResourceReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    mainResource: {
        resourceId: string;
        type: string;
    };
    productId?: string;
};

/**
 * @description 查询主体下全部类型资源
 * @summary Response data types
 * @url [ post ] /api/ResourceRelationships/resource
 * @bizName aggsBiz
 */
export type PostResourceRelationshipsResourceResTypeByAggs = {
    totalCount: number;
    records: Array<{
        resourceType: string;
    }>;
};

/**
 * @description 查询主体下资源
 * @summary Request data types
 * @url [ post ] /api/ResourceRelationships/resource/single
 * @bizName aggsBiz
 */
export type PostResourceRelationshipsResourceSingleReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    mainResources: Array<{
        resourceId: string;
        type: string;
    }>;
    type: string;
    dataHandleType?: 0 | 1;
    productId?: string;
};

/**
 * @description 查询主体下资源
 * @summary Response data types
 * @url [ post ] /api/ResourceRelationships/resource/single
 * @bizName aggsBiz
 */
export type PostResourceRelationshipsResourceSingleResTypeByAggs = {
    totalCount: number;
    records: Array<{
        resourceType: string;
    }>;
};

/**
 * @description 资源搜索
 * @summary Request data types
 * @url [ post ] /api/ResourceRelationships/resource/search
 * @bizName aggsBiz
 */
export type PostResourceRelationshipsResourceSearchReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    mainResources: Array<{
        resourceId: string;
        type: string;
    }>;
    type: string;
    dataHandleType?: 0 | 1;
    productId?: string;
    keyword?: string;
    prefixAreaCodes?: Array<string>;
};

/**
 * @description 资源搜索
 * @summary Response data types
 * @url [ post ] /api/ResourceRelationships/resource/search
 * @bizName aggsBiz
 */
export type PostResourceRelationshipsResourceSearchResTypeByAggs = {
    totalCount: number;
    records: Array<{
        resourceType: string;
    }>;
};

/**
 * @description 主体绑定事件类型组
 * @summary Request data types
 * @url [ post ] /api/ResourceRelationships/eventTypeGroup
 * @bizName aggsBiz
 */
export type PostResourceRelationshipsEventTypeGroupReqTypeByAggs = {
    'X-version'?: string;
    mainResource: {
        type: string;
        resourceId: string;
    };
    eventTypeGroupRelationships?: Array<{
        eventTypeGroupId: string;
        relationshipHandleType: 0 | 1;
    }>;
};

/**
 * @description 主体绑定告警类型
 * @summary Request data types
 * @url [ post ] /api/ResourceRelationships/alarmType
 * @bizName aggsBiz
 */
export type PostResourceRelationshipsAlarmTypeReqTypeByAggs = {
    'X-version'?: string;
    mainResource: {
        type: string;
        resourceId: string;
    };
    alarmTypeRelationships?: Array<{
        alarmTypeId: string;
        relationshipHandleType: 0 | 1;
        isLeaf: boolean;
    }>;
};

/**
 * @description 资源关系修正
 * @summary Request data types
 * @url [ put ] /api/ResourceRelationships/fix
 * @bizName aggsBiz
 */
export type PutResourceRelationshipsFixReqTypeByAggs = {
    'X-version'?: string;
};

/**
 * @description 获取指定角色Id权限角色成员数据列表
 * @summary Request data types
 * @url [ get ] /api/Roles/{role}/members
 * @bizName aggsBiz
 */
export type GetRolesRoleMembersReqTypeByAggs = {
    role: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取指定角色Id权限角色成员数据列表
 * @summary Response data types
 * @url [ get ] /api/Roles/{role}/members
 * @bizName aggsBiz
 */
export type GetRolesRoleMembersResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        isDataValid: boolean;
        isDataFalsify: boolean;
        account: string;
        title: string;
        phones: Array<{
            type: string;
            number: string;
        }>;
        relatedId: string;
    }>;
};

/**
 * @description 获取指定角色Id权限组织架构数据列表
 * @summary Request data types
 * @url [ get ] /api/Roles/{role}/organizations
 * @bizName aggsBiz
 */
export type GetRolesRoleOrganizationsReqTypeByAggs = {
    role: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取指定角色Id权限组织架构数据列表
 * @summary Response data types
 * @url [ get ] /api/Roles/{role}/organizations
 * @bizName aggsBiz
 */
export type GetRolesRoleOrganizationsResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        isDataValid: boolean;
        isDataFalsify: boolean;
        description: string;
        owner: string;
    }>;
    hasAllDataPermission: boolean;
    isAllDataPermissionFalsify: boolean;
};

/**
 * @description 获取指定角色Id权限行政区划数据列表
 * @summary Request data types
 * @url [ get ] /api/Roles/{role}/districts
 * @bizName aggsBiz
 */
export type GetRolesRoleDistrictsReqTypeByAggs = {
    role: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取指定角色Id权限行政区划数据列表
 * @summary Response data types
 * @url [ get ] /api/Roles/{role}/districts
 * @bizName aggsBiz
 */
export type GetRolesRoleDistrictsResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        isDataValid: boolean;
        isDataFalsify: boolean;
        resourceId: string;
        englishName: string;
    }>;
    hasAllDataPermission: boolean;
    isAllDataPermissionFalsify: boolean;
};

/**
 * @description 获取指定角色Id权限监控组数据列表
 * @summary Request data types
 * @url [ get ] /api/Roles/{role}/camera/groups
 * @bizName aggsBiz
 */
export type GetRolesRoleCameraGroupsReqTypeByAggs = {
    role: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取指定角色Id权限监控组数据列表
 * @summary Response data types
 * @url [ get ] /api/Roles/{role}/camera/groups
 * @bizName aggsBiz
 */
export type GetRolesRoleCameraGroupsResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        isDataValid: boolean;
        isDataFalsify: boolean;
        groupType: number;
    }>;
    hasAllDataPermission: boolean;
    isAllDataPermissionFalsify: boolean;
};

/**
 * @description 绑定批量组织架构下用户到指定的角色
 * @summary Request data types
 * @url [ put ] /api/Roles/{role}/participators/batch
 * @bizName aggsBiz
 */
export type PutRolesRoleParticipatorsBatchReqTypeByAggs = {
    role: string;
    'X-version'?: string;
    memberIds: Array<string>;
    departmentIds: Array<string>;
};

/**
 * @description 搜索协议
 * @summary Request data types
 * @url [ get ] /api/Schemes
 * @bizName aggsBiz
 */
export type GetSchemesReqTypeByAggs = {
    scene: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 搜索协议
 * @summary Response data types
 * @url [ get ] /api/Schemes
 * @bizName aggsBiz
 */
export type GetSchemesResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        scene: string;
        key: string;
        type: 0 | 1 | 2;
        allowNull: boolean;
        example: string;
        operator: 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512;
        analysisType: 0 | 1;
        description: string;
        isDynamicRangeValue: boolean;
        rangeValues: Array<{
            id: string;
            name: string;
        }>;
        operatorTypes: Array<{
            operator: 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512;
            name: string;
            isMultipleSelected: boolean;
        }>;
    }>;
};

/**
 * @description 协议key范围值查询
 * @summary Request data types
 * @url [ get ] /api/Schemes/range_value
 * @bizName aggsBiz
 */
export type GetSchemesRangeValueReqTypeByAggs = {
    Key: string;
    keyword?: string;
    scene: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 协议key范围值查询
 * @summary Response data types
 * @url [ get ] /api/Schemes/range_value
 * @bizName aggsBiz
 */
export type GetSchemesRangeValueResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
    }>;
};

/**
 * @description 搜索（联系人、组、监控、视频会议终端、设备终端）
 * @summary Request data types
 * @url [ get ] /api/search/resource
 * @bizName aggsBiz
 */
export type GetSearchResourceReqTypeByAggs = {
    Keyword: string;
    AssetTypeIds?: Array<string>;
    Limit?: number;
    'X-version'?: string;
};

/**
 * @description 搜索（联系人、组、监控、视频会议终端、设备终端）
 * @summary Response data types
 * @url [ get ] /api/search/resource
 * @bizName aggsBiz
 */
export type GetSearchResourceResTypeByAggs = {
    resources: {
        totalCount: number;
        records: {
            contacts: Array<{
                id: string;
                name: string;
                account: string;
                parentId: string;
                description: string;
                gender: number;
                title: string;
                photoPath: string;
                phones: Array<{
                    type: string;
                    number: string;
                }>;
                memberOf: Array<string>;
                paths: Array<string>;
                platformId: string;
                resourceId: string;
            }>;
            cameras: Array<{
                id: string;
                name: string;
                status: 1 | 2 | 3 | 4;
                quality: 0 | 1 | 2 | 3 | 4;
                areaCode: string;
                thumbnailID: string;
                longitude: number;
                latitude: number;
                playUrl: {
                    playUrlType: 0 | 1 | 2;
                    rtspUrl: string;
                    flvUrl: string;
                    wsUrl: string;
                    rtmpUrl: string;
                    webRtc: string;
                };
                videoEncoder: 0 | 1;
                resolution: 0 | 1 | 2 | 3;
                audio: boolean;
                result: 0 | 1 | 2 | 3 | 4;
                resultDetail: {
                    imageQuality: number;
                    brightness: number;
                    color: number;
                    contrast: number;
                    blur: number;
                    noiseInterference: number;
                    scrolling: number;
                    shade: number;
                    screenFreezing: number;
                    snr: number;
                    psnr: number;
                    imageDistortion: number;
                    blackScreen: number;
                    specialFlowerScreen: number;
                };
                namePath: string;
                idPath: string;
                order: number;
                detectionCount: number;
                faultDetail: number;
                isManual: boolean;
                labels: Array<{
                    id: number;
                    title: string;
                    color: string;
                    description: string;
                }>;
                audioEncodingFormat: string;
                isSupportPTZ: boolean;
            }>;
            terminals: Array<{
                id: string;
                name: string;
                type: number;
                parentID: string;
                parentName: string;
                number: string;
                isOnline: boolean;
                paths: Array<{
                    id: string;
                    name: string;
                    description: string;
                }>;
            }>;
            assets: Array<{
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
    };
    resourceGroups: {
        totalCount: number;
        records: {
            departmentGroups: Array<{
                id: string;
                name: string;
                description: string;
                parentId: string;
                type: number;
                path: string;
                owner: string;
                memberCount: number;
                contactCount: number;
                isLeaf: boolean;
            }>;
            groups: Array<{
                id: string;
                name: string;
                description: string;
                parentId: string;
                type: number;
                path: string;
                owner: string;
                memberCount: number;
                contactCount: number;
                isLeaf: boolean;
            }>;
            cameraGroups: Array<{
                id: string;
                name: string;
                description: string;
                parentId: string;
                groupType: number;
                cameraCount: number;
                cameraOnlineCount: number;
                selfCameraCount: number;
                selfCameraOnlineCount: number;
                order: number;
                principalOut: Array<{
                    id: string;
                    name: string;
                }>;
                isLeaf: boolean;
            }>;
            terminalGroups: Array<{
                id: string;
                name: string;
                parentID: string;
                index: number;
                isLeaf: boolean;
                totalCount: number;
            }>;
        };
    };
};

/**
 * @description 获取所有状态下的事件总数
 * @summary Request data types
 * @url [ get ] /api/Statistical/events
 * @bizName aggsBiz
 */
export type GetStatisticalEventsReqTypeByAggs = {
    'X-version'?: string;
};

/**
 * @description 获取所有状态下的事件总数
 * @summary Response data types
 * @url [ get ] /api/Statistical/events
 * @bizName aggsBiz
 */
export type GetStatisticalEventsResTypeByAggs = {
    todayFinishedEventCount: string;
    finishedEventCount: string;
    notStartedEventCount: string;
    processingEventCount: string;
};

/**
 * @description 获取资源统计数量
 * @summary Request data types
 * @url [ get ] /api/Statistical/resources
 * @bizName aggsBiz
 */
export type GetStatisticalResourcesReqTypeByAggs = {
    BeginTime?: string;
    EndTime?: string;
    AreaCode?: string;
    PrefixAreaCodes?: Array<string>;
    'X-version'?: string;
};

/**
 * @description 获取资源统计数量
 * @summary Response data types
 * @url [ get ] /api/Statistical/resources
 * @bizName aggsBiz
 */
export type GetStatisticalResourcesResTypeByAggs = {
    alarmAmount: number;
    cameraAmount: number;
    eventAmount: number;
    multimediaTransferAmount: number;
    alertAmount: number;
    monitorDeviceCounts: Array<{
        relateTypeId: string;
        totalCount: number;
    }>;
};

/**
 * @description 按行政区域统计终端
 * @summary Request data types
 * @url [ post ] /api/Statistical/Area/Terminal
 * @bizName aggsBiz
 */
export type PostStatisticalAreaTerminalReqTypeByAggs = {
    'X-version'?: string;
    areaCodes: Array<string>;
    terminalType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};

/**
 * @description 按行政区域统计终端
 * @summary Response data types
 * @url [ post ] /api/Statistical/Area/Terminal
 * @bizName aggsBiz
 */
export type PostStatisticalAreaTerminalResTypeByAggs = {
    totalCount: number;
    records: Array<{
        prefixAreaCode: string;
        count: number;
    }>;
};

/**
 * @description 按行政区域统计第三方平台
 * @summary Request data types
 * @url [ post ] /api/Statistical/Area/Platform
 * @bizName aggsBiz
 */
export type PostStatisticalAreaPlatformReqTypeByAggs = {
    'X-version'?: string;
    areaCodes: Array<string>;
};

/**
 * @description 按行政区域统计第三方平台
 * @summary Response data types
 * @url [ post ] /api/Statistical/Area/Platform
 * @bizName aggsBiz
 */
export type PostStatisticalAreaPlatformResTypeByAggs = {
    totalCount: number;
    records: Array<{
        prefixAreaCode: string;
        count: number;
    }>;
};

/**
 * @description 资产总览
 * @summary Request data types
 * @url [ post ] /api/Statistical/overview/asset
 * @bizName aggsBiz
 */
export type PostStatisticalOverviewAssetReqTypeByAggs = {
    'X-version'?: string;
    platformId?: string;
    prefixAreaCodes?: Array<string>;
    ignoreOtherPlatform?: string;
};

/**
 * @description 资产总览
 * @summary Response data types
 * @url [ post ] /api/Statistical/overview/asset
 * @bizName aggsBiz
 */
export type PostStatisticalOverviewAssetResTypeByAggs = {
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
 * @url [ post ] /api/Statistical/overview/client
 * @bizName aggsBiz
 */
export type PostStatisticalOverviewClientReqTypeByAggs = {
    'X-version'?: string;
    platformId?: string;
    prefixAreaCodes?: Array<string>;
};

/**
 * @description 客户端总览
 * @summary Response data types
 * @url [ post ] /api/Statistical/overview/client
 * @bizName aggsBiz
 */
export type PostStatisticalOverviewClientResTypeByAggs = {
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
 * @url [ post ] /api/Statistical/overview/terminal
 * @bizName aggsBiz
 */
export type PostStatisticalOverviewTerminalReqTypeByAggs = {
    'X-version'?: string;
    platformId?: string;
    prefixAreaCodes?: Array<string>;
};

/**
 * @description 终端总览
 * @summary Response data types
 * @url [ post ] /api/Statistical/overview/terminal
 * @bizName aggsBiz
 */
export type PostStatisticalOverviewTerminalResTypeByAggs = {
    totalCount: number;
    records: Array<{
        terminalType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        totalCount: number;
        onlineCount: number;
    }>;
};

/**
 * @description 周边设施按根图层聚合统计
 * @summary Request data types
 * @url [ post ] /api/Statistical/facilities/circle_area/mergence
 * @bizName aggsBiz
 */
export type PostStatisticalFacilitiesCircleAreaMergenceReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    layerIds?: Array<string>;
    center: {
        longitude: number;
        latitude: number;
    };
    radius: number;
};

/**
 * @description 周边设施按根图层聚合统计
 * @summary Response data types
 * @url [ post ] /api/Statistical/facilities/circle_area/mergence
 * @bizName aggsBiz
 */
export type PostStatisticalFacilitiesCircleAreaMergenceResTypeByAggs = {
    totalCount: number;
    records: Array<{
        layerName: string;
        facilitiesTotal: number;
    }>;
};

/**
 * @description 图层资源统计
 * @summary Request data types
 * @url [ post ] /api/Statistical/Layers/resource
 * @bizName aggsBiz
 */
export type PostStatisticalLayersResourceReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    productId?: string;
    path?: string;
    startTime?: string;
    endTime?: string;
    prefixAreaCodes?: Array<string>;
};

/**
 * @description 图层资源统计
 * @summary Response data types
 * @url [ post ] /api/Statistical/Layers/resource
 * @bizName aggsBiz
 */
export type PostStatisticalLayersResourceResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        iconUrl: string;
        group: string;
        groupKey: string;
        productId: string;
        number: string;
        isChecked: boolean;
        path: string;
        icon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        resourceTotalCount: number;
        subLayerTotalCount: number;
    }>;
};

/**
 * @description 批量查询图层资源统计（支持资源关系）
 * @summary Request data types
 * @url [ post ] /api/Statistical/Layers/resource/batch
 * @bizName aggsBiz
 */
export type PostStatisticalLayersResourceBatchReqTypeByAggs = {
    'X-version'?: string;
    productId?: string;
    paths?: Array<string>;
    minResource?: {
        type: string;
        resourceId: string;
    };
    startTime?: string;
    endTime?: string;
    prefixAreaCodes?: Array<string>;
};

/**
 * @description 批量查询图层资源统计（支持资源关系）
 * @summary Response data types
 * @url [ post ] /api/Statistical/Layers/resource/batch
 * @bizName aggsBiz
 */
export type PostStatisticalLayersResourceBatchResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        iconUrl: string;
        group: string;
        groupKey: string;
        productId: string;
        number: string;
        isChecked: boolean;
        path: string;
        icon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        resourceTotalCount: number;
        subLayerTotalCount: number;
    }>;
};

/**
 * @description 周边设施按图层层级统计
 * @summary Request data types
 * @url [ post ] /api/Statistical/Layers/circle_area
 * @bizName aggsBiz
 */
export type PostStatisticalLayersCircleAreaReqTypeByAggs = {
    'X-version'?: string;
    productId: string;
    groupKey?: string;
    layerIds?: Array<string>;
    keyword?: string;
    center: {
        longitude: number;
        latitude: number;
    };
    radius: number;
};

/**
 * @description 周边设施按图层层级统计
 * @summary Response data types
 * @url [ post ] /api/Statistical/Layers/circle_area
 * @bizName aggsBiz
 */
export type PostStatisticalLayersCircleAreaResTypeByAggs = {
    totalCount: number;
    records: Array<{
        layerId: string;
        layerName: string;
        facilitiesTotal: number;
        subordinateLayersTotal: number;
        subordinateLayers: Array<{
            layerId: string;
            layerName: string;
            facilitiesTotal: number;
            subordinateLayersTotal: number;
            subordinateLayers: Array<Record<string, any>>;
        }>;
    }>;
};

/**
 * @description 根据行政区域获取监控统计数据
 * @summary Request data types
 * @url [ post ] /api/Statistical/Area/camera
 * @bizName aggsBiz
 */
export type PostStatisticalAreaCameraReqTypeByAggs = {
    'X-version'?: string;
    areaCodes: Array<string>;
};

/**
 * @description 根据行政区域获取监控统计数据
 * @summary Response data types
 * @url [ post ] /api/Statistical/Area/camera
 * @bizName aggsBiz
 */
export type PostStatisticalAreaCameraResTypeByAggs = {
    totalCount: number;
    records: Array<{
        prefixAreaCode: string;
        count: number;
    }>;
};

/**
 * @description 资产类型统计
 * @summary Request data types
 * @url [ post ] /api/Statistical/AssetType
 * @bizName aggsBiz
 */
export type PostStatisticalAssetTypeReqTypeByAggs = {
    'X-version'?: string;
    prefixAreaCodes?: Array<string>;
    functionTypes?: 1 | 2 | 4 | 8;
    assetType?: 0 | 1 | 2 | 3 | 4 | 5;
    parentId?: string;
    isMatchNullAreaCode?: boolean;
    isIncludeConferenceTerminal?: boolean;
};

/**
 * @description 资产类型统计
 * @summary Response data types
 * @url [ post ] /api/Statistical/AssetType
 * @bizName aggsBiz
 */
export type PostStatisticalAssetTypeResTypeByAggs = {
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
 * @description 创建定时保活任务
 * @summary Request data types
 * @url [ post ] /api/StreamKeepAliveJobs
 * @bizName aggsBiz
 */
export type PostStreamKeepAliveJobsReqTypeByAggs = {
    'X-version'?: string;
    jobName: string;
    businessId: string;
    type?: 0 | 1;
    keepAliveTime: string;
    isRecording?: boolean;
    owners?: Array<{
        id: string;
        name: string;
        phone: string;
        email: string;
        ownerType: 0 | 1;
    }>;
    notificationType: number;
    scheduleTask: {
        beginTime: string;
        endTime: string;
        cron: string;
        description: string;
        mode: 1 | 2;
    };
};

/**
 * @description 创建定时保活任务
 * @summary Response data types
 * @url [ post ] /api/StreamKeepAliveJobs
 * @bizName aggsBiz
 */
export type PostStreamKeepAliveJobsResTypeByAggs = {
    jobId: string;
    status: 0 | 1 | 2;
    jobName: string;
    businessId: string;
    businessName: string;
    cameraTotal: number;
    createTime: string;
    modifyTime: string;
    jobMode: 1 | 2;
    cron: string;
    nextExecuteTime: string;
    beginTime: string;
    endTime: string;
    owners: Array<{
        id: string;
        name: string;
        phone: string;
        email: string;
        ownerType: 0 | 1;
    }>;
    notificationType: number;
    keepAliveTime: string;
    isRecording: boolean;
    executionsTotal: number;
    retryTotal: number;
    successesTotal: number;
    failTotal: number;
    type: 0 | 1;
};

/**
 * @description 获取保活任务列表
 * @summary Request data types
 * @url [ get ] /api/StreamKeepAliveJobs
 * @bizName aggsBiz
 */
export type GetStreamKeepAliveJobsReqTypeByAggs = {
    Keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取保活任务列表
 * @summary Response data types
 * @url [ get ] /api/StreamKeepAliveJobs
 * @bizName aggsBiz
 */
export type GetStreamKeepAliveJobsResTypeByAggs = {
    totalCount: number;
    records: Array<{
        jobId: string;
        status: 0 | 1 | 2;
        jobName: string;
        businessId: string;
        businessName: string;
        cameraTotal: number;
        createTime: string;
        modifyTime: string;
        jobMode: 1 | 2;
        cron: string;
        nextExecuteTime: string;
        beginTime: string;
        endTime: string;
        owners: Array<{
            id: string;
            name: string;
            phone: string;
            email: string;
            ownerType: 0 | 1;
        }>;
        notificationType: number;
        keepAliveTime: string;
        isRecording: boolean;
        executionsTotal: number;
        retryTotal: number;
        successesTotal: number;
        failTotal: number;
        type: 0 | 1;
    }>;
};

/**
 * @description 获取指定保活任务
 * @summary Request data types
 * @url [ get ] /api/StreamKeepAliveJobs/{id}
 * @bizName aggsBiz
 */
export type GetStreamKeepAliveJobsIdReqTypeByAggs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取指定保活任务
 * @summary Response data types
 * @url [ get ] /api/StreamKeepAliveJobs/{id}
 * @bizName aggsBiz
 */
export type GetStreamKeepAliveJobsIdResTypeByAggs = {
    jobId: string;
    status: 0 | 1 | 2;
    jobName: string;
    businessId: string;
    businessName: string;
    cameraTotal: number;
    createTime: string;
    modifyTime: string;
    jobMode: 1 | 2;
    cron: string;
    nextExecuteTime: string;
    beginTime: string;
    endTime: string;
    owners: Array<{
        id: string;
        name: string;
        phone: string;
        email: string;
        ownerType: 0 | 1;
    }>;
    notificationType: number;
    keepAliveTime: string;
    isRecording: boolean;
    executionsTotal: number;
    retryTotal: number;
    successesTotal: number;
    failTotal: number;
    type: 0 | 1;
};

/**
 * @description 修改定时保活任务
 * @summary Request data types
 * @url [ put ] /api/StreamKeepAliveJobs/{id}
 * @bizName aggsBiz
 */
export type PutStreamKeepAliveJobsIdReqTypeByAggs = {
    id: string;
    'X-version'?: string;
    jobName: string;
    businessId: string;
    type?: 0 | 1;
    keepAliveTime: string;
    isRecording?: boolean;
    owners?: Array<{
        id: string;
        name: string;
        phone: string;
        email: string;
        ownerType: 0 | 1;
    }>;
    notificationType: number;
    scheduleTask: {
        beginTime: string;
        endTime: string;
        cron: string;
        description: string;
        mode: 1 | 2;
    };
};

/**
 * @description 删除定时保活任务
 * @summary Request data types
 * @url [ delete ] /api/StreamKeepAliveJobs/{id}
 * @bizName aggsBiz
 */
export type DeleteStreamKeepAliveJobsIdReqTypeByAggs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 删除定时保活任务
 * @summary Response data types
 * @url [ delete ] /api/StreamKeepAliveJobs/{id}
 * @bizName aggsBiz
 */
export type DeleteStreamKeepAliveJobsIdResTypeByAggs = {
    jobId: string;
    status: 0 | 1 | 2;
    jobName: string;
    businessId: string;
    businessName: string;
    cameraTotal: number;
    createTime: string;
    modifyTime: string;
    jobMode: 1 | 2;
    cron: string;
    nextExecuteTime: string;
    beginTime: string;
    endTime: string;
    owners: Array<{
        id: string;
        name: string;
        phone: string;
        email: string;
        ownerType: 0 | 1;
    }>;
    notificationType: number;
    keepAliveTime: string;
    isRecording: boolean;
    executionsTotal: number;
    retryTotal: number;
    successesTotal: number;
    failTotal: number;
    type: 0 | 1;
};

/**
 * @description 通过任务Id获取任务
 * @summary Request data types
 * @url [ get ] /api/Tasks/{id}
 * @bizName aggsBiz
 */
export type GetTasksIdReqTypeByAggs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 通过任务Id获取任务
 * @summary Response data types
 * @url [ get ] /api/Tasks/{id}
 * @bizName aggsBiz
 */
export type GetTasksIdResTypeByAggs = {
    id: string;
    name: string;
    description: string;
    associateEventId: string;
    parentId: string;
    type: 1 | 2 | 4 | 8;
    state: 1 | 2 | 4 | 8 | 16;
    group: {
        description: string;
        id: string;
        name: string;
    };
    groupMembers: Array<{
        id: string;
        name: string;
        phones: Array<{
            type: string;
            number: string;
        }>;
        title: string;
        account: string;
        callInformation: {
            mail: string;
            address: string;
            weixin: string;
            weibo: string;
        };
    }>;
    destination: {
        name: string;
        longitude: string;
        latitude: string;
    };
    expectStartedTime: string;
    actualStartedTime: string;
    expectFinishedTime: string;
    actualFinishedTime: string;
    createdTime: string;
    order: number;
    platformId: string;
    resourceId: string;
    updateTime: string;
};

/**
 * @description 通过事件ID查询所有任务
 * @summary Request data types
 * @url [ get ] /api/event/{eventId}/Tasks
 * @bizName aggsBiz
 */
export type GetEventEventIdTasksReqTypeByAggs = {
    eventId: string;
    isRoot?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 通过事件ID查询所有任务
 * @summary Response data types
 * @url [ get ] /api/event/{eventId}/Tasks
 * @bizName aggsBiz
 */
export type GetEventEventIdTasksResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        associateEventId: string;
        parentId: string;
        type: 1 | 2 | 4 | 8;
        state: 1 | 2 | 4 | 8 | 16;
        group: {
            description: string;
            id: string;
            name: string;
        };
        groupMembers: Array<{
            id: string;
            name: string;
            phones: Array<{
                type: string;
                number: string;
            }>;
            title: string;
            account: string;
            callInformation: {
                mail: string;
                address: string;
                weixin: string;
                weibo: string;
            };
        }>;
        destination: {
            name: string;
            longitude: string;
            latitude: string;
        };
        expectStartedTime: string;
        actualStartedTime: string;
        expectFinishedTime: string;
        actualFinishedTime: string;
        createdTime: string;
        order: number;
        platformId: string;
        resourceId: string;
        updateTime: string;
        latestProgressRecord: {
            recordData: any;
            updateTime: string;
            taskAssociatedType: 0 | 1 | 2;
        };
        progressCount: number;
    }>;
};

/**
 * @description 模糊查询任务
 * @summary Request data types
 * @url [ get ] /api/Tasks
 * @bizName aggsBiz
 */
export type GetTasksReqTypeByAggs = {
    keyword?: string;
    EventId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 模糊查询任务
 * @summary Response data types
 * @url [ get ] /api/Tasks
 * @bizName aggsBiz
 */
export type GetTasksResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        associateEventId: string;
        parentId: string;
        type: 1 | 2 | 4 | 8;
        state: 1 | 2 | 4 | 8 | 16;
        group: {
            description: string;
            id: string;
            name: string;
        };
        groupMembers: Array<{
            id: string;
            name: string;
            phones: Array<{
                type: string;
                number: string;
            }>;
            title: string;
            account: string;
            callInformation: {
                mail: string;
                address: string;
                weixin: string;
                weibo: string;
            };
        }>;
        destination: {
            name: string;
            longitude: string;
            latitude: string;
        };
        expectStartedTime: string;
        actualStartedTime: string;
        expectFinishedTime: string;
        actualFinishedTime: string;
        createdTime: string;
        order: number;
        platformId: string;
        resourceId: string;
        updateTime: string;
    }>;
};

/**
 * @description 通过父任务ID查询子任务
 * @summary Request data types
 * @url [ get ] /api/Tasks/{id}/children
 * @bizName aggsBiz
 */
export type GetTasksIdChildrenReqTypeByAggs = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 通过父任务ID查询子任务
 * @summary Response data types
 * @url [ get ] /api/Tasks/{id}/children
 * @bizName aggsBiz
 */
export type GetTasksIdChildrenResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        associateEventId: string;
        parentId: string;
        type: 1 | 2 | 4 | 8;
        state: 1 | 2 | 4 | 8 | 16;
        group: {
            description: string;
            id: string;
            name: string;
        };
        groupMembers: Array<{
            id: string;
            name: string;
            phones: Array<{
                type: string;
                number: string;
            }>;
            title: string;
            account: string;
            callInformation: {
                mail: string;
                address: string;
                weixin: string;
                weibo: string;
            };
        }>;
        destination: {
            name: string;
            longitude: string;
            latitude: string;
        };
        expectStartedTime: string;
        actualStartedTime: string;
        expectFinishedTime: string;
        actualFinishedTime: string;
        createdTime: string;
        order: number;
        platformId: string;
        resourceId: string;
        updateTime: string;
    }>;
};

/**
 * @description 获取任务关联相关数据
 * @summary Request data types
 * @url [ get ] /api/Tasks/AssociateData
 * @bizName aggsBiz
 */
export type GetTasksAssociateDataReqTypeByAggs = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取任务关联相关数据
 * @summary Response data types
 * @url [ get ] /api/Tasks/AssociateData
 * @bizName aggsBiz
 */
export type GetTasksAssociateDataResTypeByAggs = {
    totalCount: number;
    records: Array<{
        recordData: any;
        updateTime: string;
        taskAssociatedType: 0 | 1 | 2;
    }>;
};

/**
 * @description 搜索终端
 * @summary Request data types
 * @url [ post ] /api/Terminals
 * @bizName aggsBiz
 */
export type PostTerminalsReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    resourceRelationship?: {
        mainResources: Array<{
            resourceId: string;
            type: string;
        }>;
        dataHandleType: 0 | 1;
        type: string;
    };
    terminalIds?: Array<string>;
    keyword?: string;
    terminalType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    status?: 1 | 2;
    networkID?: string;
    relateTypeId?: string;
    relateTypeIds?: Array<string>;
    sourceId?: string;
    groupId?: string;
    isContainMainResource?: boolean;
    prefixAreaCodes?: Array<string>;
    isMatchNullAreaCode?: boolean;
};

/**
 * @description 搜索终端
 * @summary Response data types
 * @url [ post ] /api/Terminals
 * @bizName aggsBiz
 */
export type PostTerminalsResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        areaCode: string;
        areaName: string;
        ip: string;
        port: string;
        number: string;
        description: string;
        account: string;
        password: string;
        resourceId: string;
        terminalType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
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
        relateType: {
            id: string;
            name: string;
            resourceId: string;
            type: 0 | 1;
        };
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
            alertType: {
                id: string;
                name: string;
                description: string;
                parentId: string;
                createTime: string;
                updateTime: string;
                resourceId: string;
                platformId: string;
            };
            jobMetaName: string;
            resourceId: string;
            alertLevel: number;
            alertTime: string;
            alertRecords: Array<{
                id: number;
                name: string;
                typeId: string;
                typeName: string;
                typeIdPath: string;
                typeNamePath: string;
                level: number;
                sourceTypeId: string;
                sourceTypeName: string;
                status: 0 | 1 | 2;
                startTime: string;
                endTime: string;
                assetId: string;
                description: string;
                resolverId: string;
                resolverName: string;
                resolveMessage: string;
                assetName: string;
                createTime: string;
                updateTime: string;
                resourceId: string;
                platformId: string;
                platformName: string;
                longitude: number;
                latitude: number;
                areaCode: string;
                source: {
                    instance: string;
                    processorUrl: string;
                };
                extension: any;
            }>;
        }>;
        source: {
            id: string;
            name: string;
        };
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
        mainResources: Array<{
            resourceId: string;
            type: string;
        }>;
    }>;
};

/**
 * @description 搜索带监控终端
 * @summary Request data types
 * @url [ post ] /api/Terminals/Camera
 * @bizName aggsBiz
 */
export type PostTerminalsCameraReqTypeByAggs = {
    'X-version'?: string;
    pageIndex?: number;
    pageSize?: number;
    platformId?: string;
    resourceRelationship?: {
        mainResources: Array<{
            resourceId: string;
            type: string;
        }>;
        dataHandleType: 0 | 1;
        type: string;
    };
    terminalIds?: Array<string>;
    keyword?: string;
    terminalType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    status?: 1 | 2;
    networkID?: string;
    relateTypeId?: string;
    relateTypeIds?: Array<string>;
    sourceId?: string;
    groupId?: string;
    isContainMainResource?: boolean;
    prefixAreaCodes?: Array<string>;
    isMatchNullAreaCode?: boolean;
};

/**
 * @description 搜索带监控终端
 * @summary Response data types
 * @url [ post ] /api/Terminals/Camera
 * @bizName aggsBiz
 */
export type PostTerminalsCameraResTypeByAggs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        areaCode: string;
        areaName: string;
        ip: string;
        port: string;
        number: string;
        description: string;
        account: string;
        password: string;
        resourceId: string;
        terminalType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
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
        relateType: {
            id: string;
            name: string;
            resourceId: string;
            type: 0 | 1;
        };
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
            alertType: {
                id: string;
                name: string;
                description: string;
                parentId: string;
                createTime: string;
                updateTime: string;
                resourceId: string;
                platformId: string;
            };
            jobMetaName: string;
            resourceId: string;
            alertLevel: number;
            alertTime: string;
            alertRecords: Array<{
                id: number;
                name: string;
                typeId: string;
                typeName: string;
                typeIdPath: string;
                typeNamePath: string;
                level: number;
                sourceTypeId: string;
                sourceTypeName: string;
                status: 0 | 1 | 2;
                startTime: string;
                endTime: string;
                assetId: string;
                description: string;
                resolverId: string;
                resolverName: string;
                resolveMessage: string;
                assetName: string;
                createTime: string;
                updateTime: string;
                resourceId: string;
                platformId: string;
                platformName: string;
                longitude: number;
                latitude: number;
                areaCode: string;
                source: {
                    instance: string;
                    processorUrl: string;
                };
                extension: any;
            }>;
        }>;
        source: {
            id: string;
            name: string;
        };
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
        mainResources: Array<{
            resourceId: string;
            type: string;
        }>;
        relateCameraCount: number;
    }>;
};

/**
 * @description 获取资产拓扑
 * @summary Request data types
 * @url [ get ] /api/Topologys
 * @bizName aggsBiz
 */
export type GetTopologysReqTypeByAggs = {
    platformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取资产拓扑
 * @summary Response data types
 * @url [ get ] /api/Topologys
 * @bizName aggsBiz
 */
export type GetTopologysResTypeByAggs = {
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
            alertRecords: Array<{
                id: number;
                name: string;
                typeId: string;
                typeName: string;
                typeIdPath: string;
                typeNamePath: string;
                level: number;
                sourceTypeId: string;
                sourceTypeName: string;
                status: 0 | 1 | 2;
                startTime: string;
                endTime: string;
                assetId: string;
            }>;
        }>;
        topologyRelationships: Array<{
            startNodeId: string;
            endNodeId: string;
        }>;
    }>;
};
