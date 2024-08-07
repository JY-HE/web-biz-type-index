/**
 * @description 移除目录
 * @summary Request data types
 * @url [ delete ] /api/CameraGroups/{id}
 * @bizName videoFusionServiceBiz
 */
export type DeleteCameraGroupsIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    parentId: string;
    currentPath: string;
    operateGroupType?: 0 | 1 | 2;
};

/**
 * @description 修改目录
 * @summary Request data types
 * @url [ put ] /api/CameraGroups/{id}
 * @bizName videoFusionServiceBiz
 */
export type PutCameraGroupsIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    name?: string;
    description?: string;
    owners?: Array<{
        id: string;
        name: string;
        phone: string;
        email: string;
        ownerType: 0 | 1;
        job: string;
    }>;
    operateGroupType?: 0 | 1 | 2;
};

/**
 * @description 移动目录
 * @summary Request data types
 * @url [ put ] /api/CameraGroups/parent/{id}
 * @bizName videoFusionServiceBiz
 */
export type PutCameraGroupsParentIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    currentPath: string;
    parentPath: string;
    parentId: string;
    operateGroupType?: 0 | 1 | 2;
};

/**
 * @description 挂载目录
 * @summary Request data types
 * @url [ post ] /api/CameraGroups/parent/{id}
 * @bizName videoFusionServiceBiz
 */
export type PostCameraGroupsParentIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    parentPath: string;
    groupIds?: Array<string>;
    operateGroupType?: 0 | 1 | 2;
};

/**
 * @description 挂载目录
 * @summary Response data types
 * @url [ post ] /api/CameraGroups/parent/{id}
 * @bizName videoFusionServiceBiz
 */
export type PostCameraGroupsParentIdResTypeByVfs = {
    id: string;
    name: string;
    parentId: string;
    groupType: number;
    description: string;
    lastSyncTime: string;
    comeFrom: string;
    aliasName: string;
    operate: 0 | 1 | 2;
    position: number;
};

/**
 * @description 添加监控
 * @summary Request data types
 * @url [ post ] /api/CameraGroups/camera/parent/{id}
 * @bizName videoFusionServiceBiz
 */
export type PostCameraGroupsCameraParentIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    cameraIds?: Array<string>;
    parentPath: string;
    operateGroupType?: 0 | 1 | 2;
};

/**
 * @description 移动监控
 * @summary Request data types
 * @url [ put ] /api/CameraGroups/camera/parent/{id}
 * @bizName videoFusionServiceBiz
 */
export type PutCameraGroupsCameraParentIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    cameraIds?: Array<string>;
    groupId: string;
    parentPath: string;
    currentPath: string;
    operateGroupType?: 0 | 1 | 2;
};

/**
 * @description 删除监控
 * @summary Request data types
 * @url [ delete ] /api/CameraGroups/{id}/camera
 * @bizName videoFusionServiceBiz
 */
export type DeleteCameraGroupsIdCameraReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    parentPath: string;
    cameraIds?: Array<string>;
    operateGroupType?: 0 | 1 | 2;
};

/**
 * @description 获取目录下所有子节点（目录）
数仓使用 
 * @summary Request data types 
 * @url [ get ] /api/CameraGroups/{id}/group_children 
 * @bizName videoFusionServiceBiz 
 */
export type GetCameraGroupsIdGroupChildrenReqTypeByVfs = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取目录下所有子节点（目录）
数仓使用 
 * @summary Response data types 
 * @url [ get ] /api/CameraGroups/{id}/group_children 
 * @bizName videoFusionServiceBiz 
 */
export type GetCameraGroupsIdGroupChildrenResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        parentId: string;
        groupType: number;
        description: string;
        lastSyncTime: string;
        comeFrom: string;
        aliasName: string;
        operate: 0 | 1 | 2;
        position: number;
    }>;
};

/**
 * @description 获取目录下所有叶子节点（监控）
数仓使用 
 * @summary Request data types 
 * @url [ get ] /api/CameraGroups/{id}/camera_children 
 * @bizName videoFusionServiceBiz 
 */
export type GetCameraGroupsIdCameraChildrenReqTypeByVfs = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取目录下所有叶子节点（监控）
数仓使用 
 * @summary Response data types 
 * @url [ get ] /api/CameraGroups/{id}/camera_children 
 * @bizName videoFusionServiceBiz 
 */
export type GetCameraGroupsIdCameraChildrenResTypeByVfs = {
    totalCount: number;
    records: Array<{
        groups: Array<{
            id: string;
            name: string;
            parentId: string;
            groupType: number;
            description: string;
            lastSyncTime: string;
            comeFrom: string;
            aliasName: string;
            operate: 0 | 1 | 2;
            position: number;
        }>;
        labels: Array<{
            id: number;
            title: string;
            color: string;
            description: string;
        }>;
        aliasName: string;
        originalName: string;
        status: 1 | 2 | 3 | 4;
        quality: 0 | 1 | 2 | 3 | 4;
        areaCode: string;
        thumbnailID: string;
        playUrl: {
            playUrlType: 0 | 1 | 2;
            rtspUrl: string;
            flvUrl: string;
            wsUrl: string;
            rtmpUrl: string;
            webRtc: string;
        };
        longitude: number;
        latitude: number;
        id: string;
        name: string;
    }>;
};

/**
 * @description 获取分组列表
 * @summary Request data types
 * @url [ get ] /api/CameraGroups
 * @bizName videoFusionServiceBiz
 */
export type GetCameraGroupsReqTypeByVfs = {
    GroupType?: number;
    OperateGroupType?: number;
    ParentId?: string;
    PathPrefix?: string;
    SelectedIds?: Array<string>;
    UnSelectedIds?: Array<string>;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取分组列表
 * @summary Response data types
 * @url [ get ] /api/CameraGroups
 * @bizName videoFusionServiceBiz
 */
export type GetCameraGroupsResTypeByVfs = {
    sipServiceId: string;
    syncStatus: 0 | 1 | 2 | 3 | 4;
    sipServerStatus: 1 | 2;
    useStatus: 0 | 1 | 2;
    isLeafGroup: boolean;
    isLeaf: boolean;
    cameraCount: number;
    cameraOnlineCount: number;
    selfCameraCount: number;
    selfCameraOnlineCount: number;
    order: number;
    relatedParentId: string;
    principalOut: Array<{
        id: string;
    }>;
    owners: Array<{
        id: string;
        name: string;
        phone: string;
        email: string;
        ownerType: 0 | 1;
        job: string;
    }>;
    idPath: string;
    namePath: string;
    isUserDefined: number;
    cameraQualityStatistics: {
        unDetectedCount: number;
        badCount: number;
        excellentCount: number;
        goodCount: number;
        faultCount: number;
    };
    selfCameraQualityStatistics: {
        unDetectedCount: number;
        badCount: number;
        excellentCount: number;
        goodCount: number;
        faultCount: number;
    };
    cameraResolutionStatistics: {
        hdCount: number;
        sdCount: number;
        fullHdCount: number;
        uhdCount: number;
    };
    selfCameraResolutionStatistics: {
        hdCount: number;
        sdCount: number;
        fullHdCount: number;
        uhdCount: number;
    };
    id: string;
    name: string;
    parentId: string;
    groupType: number;
    description: string;
    lastSyncTime: string;
    comeFrom: string;
    aliasName: string;
    operate: 0 | 1 | 2;
    position: number;
};

/**
 * @description 添加目录
 * @summary Request data types
 * @url [ post ] /api/CameraGroups
 * @bizName videoFusionServiceBiz
 */
export type PostCameraGroupsReqTypeByVfs = {
    'X-version'?: string;
    name: string;
    type?: 0 | 1 | 2;
    parentPath: string;
    parentId?: string;
    description?: string;
    owners?: Array<{
        id: string;
        name: string;
        phone: string;
        email: string;
        ownerType: 0 | 1;
        job: string;
    }>;
    operateGroupType?: 0 | 1 | 2;
};

/**
 * @description 添加目录
 * @summary Response data types
 * @url [ post ] /api/CameraGroups
 * @bizName videoFusionServiceBiz
 */
export type PostCameraGroupsResTypeByVfs = {
    id: string;
    name: string;
    parentId: string;
    groupType: number;
    description: string;
    lastSyncTime: string;
    comeFrom: string;
    aliasName: string;
    operate: 0 | 1 | 2;
    position: number;
};

/**
 * @description 获取监控和目录集合
 * @summary Request data types
 * @url [ get ] /api/CameraGroups/children
 * @bizName videoFusionServiceBiz
 */
export type GetCameraGroupsChildrenReqTypeByVfs = {
    GroupType?: number;
    OperateGroupType?: number;
    ParentId?: string;
    PathPrefix?: string;
    SelectedIds?: Array<string>;
    UnSelectedIds?: Array<string>;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取监控和目录集合
 * @summary Response data types
 * @url [ get ] /api/CameraGroups/children
 * @bizName videoFusionServiceBiz
 */
export type GetCameraGroupsChildrenResTypeByVfs = {
    totalCount: number;
    records: Array<{
        type: 1 | 2;
        parentId: string;
        useStatus: 0 | 1 | 2;
        idPath: string;
        namePath: string;
        id: string;
        name: string;
    }>;
};

/**
 * @description 批量查询监控组信息接口
 * @summary Request data types
 * @url [ post ] /api/CameraGroups/batch
 * @bizName videoFusionServiceBiz
 */
export type PostCameraGroupsBatchReqTypeByVfs = {
    'X-version'?: string;
};

/**
 * @description 批量查询监控组信息接口
 * @summary Response data types
 * @url [ post ] /api/CameraGroups/batch
 * @bizName videoFusionServiceBiz
 */
export type PostCameraGroupsBatchResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        groupType: number;
    }>;
};

/**
 * @description 同级监控组移动
 * @summary Request data types
 * @url [ put ] /api/CameraGroups/{id}/move
 * @bizName videoFusionServiceBiz
 */
export type PutCameraGroupsIdMoveReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    groupId: string;
    afterGroupId?: string;
    beforeGroupId?: string;
};

/**
 * @description 根据父Id获取监控组
 * @summary Request data types
 * @url [ get ] /api/CameraGroups/{id}/children
 * @bizName videoFusionServiceBiz
 */
export type GetCameraGroupsIdChildrenReqTypeByVfs = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 根据父Id获取监控组
 * @summary Response data types
 * @url [ get ] /api/CameraGroups/{id}/children
 * @bizName videoFusionServiceBiz
 */
export type GetCameraGroupsIdChildrenResTypeByVfs = {
    sipServiceId: string;
    syncStatus: 0 | 1 | 2 | 3 | 4;
    sipServerStatus: 1 | 2;
    useStatus: 0 | 1 | 2;
    isLeafGroup: boolean;
    isLeaf: boolean;
    cameraCount: number;
    cameraOnlineCount: number;
    selfCameraCount: number;
    selfCameraOnlineCount: number;
    order: number;
    relatedParentId: string;
    principalOut: Array<{
        id: string;
    }>;
    owners: Array<{
        id: string;
        name: string;
        phone: string;
        email: string;
        ownerType: 0 | 1;
        job: string;
    }>;
    idPath: string;
    namePath: string;
    isUserDefined: number;
    cameraQualityStatistics: {
        unDetectedCount: number;
        badCount: number;
        excellentCount: number;
        goodCount: number;
        faultCount: number;
    };
    selfCameraQualityStatistics: {
        unDetectedCount: number;
        badCount: number;
        excellentCount: number;
        goodCount: number;
        faultCount: number;
    };
    cameraResolutionStatistics: {
        hdCount: number;
        sdCount: number;
        fullHdCount: number;
        uhdCount: number;
    };
    selfCameraResolutionStatistics: {
        hdCount: number;
        sdCount: number;
        fullHdCount: number;
        uhdCount: number;
    };
    id: string;
    name: string;
    parentId: string;
    groupType: number;
    description: string;
    lastSyncTime: string;
    comeFrom: string;
    aliasName: string;
    operate: 0 | 1 | 2;
    position: number;
};

/**
 * @description 批量添加监控组/监控到下级资源组/预案组/自定义组
 * @summary Request data types
 * @url [ put ] /api/CameraGroups/{id}/children
 * @bizName videoFusionServiceBiz
 */
export type PutCameraGroupsIdChildrenReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    groupIds?: Array<string>;
    cameraIds?: Array<string>;
};

/**
 * @description 批量添加监控到预案组或自定义组
 * @summary Request data types
 * @url [ put ] /api/CameraGroups/camera/batch
 * @bizName videoFusionServiceBiz
 */
export type PutCameraGroupsCameraBatchReqTypeByVfs = {
    'X-version'?: string;
    cameraIds: Array<string>;
    groupId: string;
    groupType?: 0 | 1 | 2;
};

/**
 * @description 监控组搜索
 * @summary Request data types
 * @url [ get ] /api/CameraGroups/Search
 * @bizName videoFusionServiceBiz
 */
export type GetCameraGroupsSearchReqTypeByVfs = {
    Keyword: string;
    GroupType?: number;
    PathPrefix?: string;
    SelectedIds?: Array<string>;
    UnSelectedIds?: Array<string>;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 监控组搜索
 * @summary Response data types
 * @url [ get ] /api/CameraGroups/Search
 * @bizName videoFusionServiceBiz
 */
export type GetCameraGroupsSearchResTypeByVfs = {
    totalCount: number;
    records: Array<{
        namePath: string;
        useStatus: 0 | 1 | 2;
        idPath: string;
        groupType: number;
        isLeafGroup: boolean;
        isLeaf: boolean;
        owners: Array<{
            id: string;
            name: string;
            phone: string;
            email: string;
            ownerType: 0 | 1;
            job: string;
        }>;
        cameraOnlineCount: number;
        cameraCount: number;
        id: string;
        name: string;
        parentId: string;
        description: string;
        lastSyncTime: string;
        comeFrom: string;
        aliasName: string;
        operate: 0 | 1 | 2;
        position: number;
    }>;
};

/**
 * @description 监控组和监控搜索
 * @summary Request data types
 * @url [ get ] /api/CameraGroups/advance_search
 * @bizName videoFusionServiceBiz
 */
export type GetCameraGroupsAdvanceSearchReqTypeByVfs = {
    Keyword?: string;
    GroupType?: number;
    PathPrefix?: string;
    SelectedIds?: Array<string>;
    UnSelectedIds?: Array<string>;
    Status?: number;
    Quality?: Array<number>;
    Resolution?: Array<number>;
    Encode?: Array<number>;
    Audio?: boolean;
    LabelIds?: Array<number>;
    IsSupportPTZ?: boolean;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 监控组和监控搜索
 * @summary Response data types
 * @url [ get ] /api/CameraGroups/advance_search
 * @bizName videoFusionServiceBiz
 */
export type GetCameraGroupsAdvanceSearchResTypeByVfs = {
    searchGroupOut: {
        totalCount: number;
        records: Array<{
            namePath: string;
            useStatus: 0 | 1 | 2;
            idPath: string;
            groupType: number;
            isLeafGroup: boolean;
            isLeaf: boolean;
            owners: Array<{
                id: string;
                name: string;
                phone: string;
                email: string;
                ownerType: 0 | 1;
                job: string;
            }>;
            cameraOnlineCount: number;
            cameraCount: number;
            id: string;
            name: string;
            parentId: string;
            description: string;
            lastSyncTime: string;
            comeFrom: string;
            aliasName: string;
            operate: 0 | 1 | 2;
            position: number;
        }>;
    };
    searchCameraOut: {
        totalCount: number;
        records: Array<{
            id: string;
            name: string;
            aliasName: string;
            originalName: string;
            useStatus: 0 | 1 | 2;
            status: 1 | 2 | 3 | 4;
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
            labels: Array<{
                id: number;
                title: string;
                color: string;
                description: string;
            }>;
            latitude: number;
            longitude: number;
            parentId: string;
            idPath: string;
            namePath: string;
        }>;
    };
};

/**
 * @description 组内移动监控
 * @summary Request data types
 * @url [ put ] /api/CameraGroups/{id}/camera/move
 * @bizName videoFusionServiceBiz
 */
export type PutCameraGroupsIdCameraMoveReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    cameraId: string;
    afterCameraId?: string;
    beforeCameraId?: string;
};

/**
 * @description 组内监控置顶
 * @summary Request data types
 * @url [ put ] /api/CameraGroups/{id}/camera/top
 * @bizName videoFusionServiceBiz
 */
export type PutCameraGroupsIdCameraTopReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    cameraId: string;
};

/**
 * @description 移除预案组下得下级资源组/预案组/自定义组
 * @summary Request data types
 * @url [ delete ] /api/CameraGroups/{id}/children/{subGroupId}
 * @bizName videoFusionServiceBiz
 */
export type DeleteCameraGroupsIdChildrenSubGroupIdReqTypeByVfs = {
    id: string;
    subGroupId: string;
    'X-version'?: string;
};

/**
 * @description 下级资源添加组并挂载未分配目录资源
 * @summary Request data types
 * @url [ post ] /api/CameraGroups/group
 * @bizName videoFusionServiceBiz
 */
export type PostCameraGroupsGroupReqTypeByVfs = {
    'X-version'?: string;
    groupIds?: Array<string>;
    cameraIds?: Array<string>;
    name: string;
    parentId: string;
    description?: string;
    type?: 0 | 1 | 2;
    owners?: Array<{
        id: string;
        name: string;
        phone: string;
        email: string;
        ownerType: 0 | 1;
        job: string;
    }>;
};

/**
 * @description 下级资源添加组并挂载未分配目录资源
 * @summary Response data types
 * @url [ post ] /api/CameraGroups/group
 * @bizName videoFusionServiceBiz
 */
export type PostCameraGroupsGroupResTypeByVfs = {
    sipServiceId: string;
    syncStatus: 0 | 1 | 2 | 3 | 4;
    sipServerStatus: 1 | 2;
    useStatus: 0 | 1 | 2;
    isLeafGroup: boolean;
    isLeaf: boolean;
    cameraCount: number;
    cameraOnlineCount: number;
    selfCameraCount: number;
    selfCameraOnlineCount: number;
    order: number;
    relatedParentId: string;
    principalOut: Array<{
        id: string;
    }>;
    owners: Array<{
        id: string;
        name: string;
        phone: string;
        email: string;
        ownerType: 0 | 1;
        job: string;
    }>;
    idPath: string;
    namePath: string;
    isUserDefined: number;
    cameraQualityStatistics: {
        unDetectedCount: number;
        badCount: number;
        excellentCount: number;
        goodCount: number;
        faultCount: number;
    };
    selfCameraQualityStatistics: {
        unDetectedCount: number;
        badCount: number;
        excellentCount: number;
        goodCount: number;
        faultCount: number;
    };
    cameraResolutionStatistics: {
        hdCount: number;
        sdCount: number;
        fullHdCount: number;
        uhdCount: number;
    };
    selfCameraResolutionStatistics: {
        hdCount: number;
        sdCount: number;
        fullHdCount: number;
        uhdCount: number;
    };
    id: string;
    name: string;
    parentId: string;
    groupType: number;
    description: string;
    lastSyncTime: string;
    comeFrom: string;
    aliasName: string;
    operate: 0 | 1 | 2;
    position: number;
};

/**
 * @description 获取监控组下监控（包含子组监控）
 * @summary Request data types
 * @url [ post ] /api/CameraGroups/subordinates
 * @bizName videoFusionServiceBiz
 */
export type PostCameraGroupsSubordinatesReqTypeByVfs = {
    'X-version'?: string;
    ids: Array<string>;
};

/**
 * @description 获取监控组下监控（包含子组监控）
 * @summary Response data types
 * @url [ post ] /api/CameraGroups/subordinates
 * @bizName videoFusionServiceBiz
 */
export type PostCameraGroupsSubordinatesResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        url: string;
    }>;
};

/**
 * @description 批量添加监控到预案组中（我的资源）
 * @summary Request data types
 * @url [ post ] /api/CameraGroups/{id}/cameras/batch
 * @bizName videoFusionServiceBiz
 */
export type PostCameraGroupsIdCamerasBatchReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    groupIds: Array<string>;
    excludeGroupIds: Array<string>;
    cameraIds: Array<string>;
    excludeCameraIds: Array<string>;
    parentPath: string;
};

/**
 * @description 批量添加目录
 * @summary Request data types
 * @url [ post ] /api/CameraGroups/bath
 * @bizName videoFusionServiceBiz
 */
export type PostCameraGroupsBathReqTypeByVfs = {
    'X-version'?: string;
    name: string;
    type?: 0 | 1 | 2;
    parentPath: string;
    parentId?: string;
    description?: string;
    owners?: Array<{
        id: string;
        name: string;
        phone: string;
        email: string;
        ownerType: 0 | 1;
        job: string;
    }>;
    operateGroupType?: 0 | 1 | 2;
};

/**
 * @description 批量添加目录
 * @summary Response data types
 * @url [ post ] /api/CameraGroups/bath
 * @bizName videoFusionServiceBiz
 */
export type PostCameraGroupsBathResTypeByVfs = {
    id: string;
    name: string;
    parentId: string;
    groupType: number;
    description: string;
    lastSyncTime: string;
    comeFrom: string;
    aliasName: string;
    operate: 0 | 1 | 2;
    position: number;
};

/**
 * @description 获取删除记录
 * @summary Request data types
 * @url [ get ] /api/CameraOrGroupDeleteRecords
 * @bizName videoFusionServiceBiz
 */
export type GetCameraOrGroupDeleteRecordsReqTypeByVfs = {
    SipServiceId?: string;
    SyncTaskId?: string;
    Keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取删除记录
 * @summary Response data types
 * @url [ get ] /api/CameraOrGroupDeleteRecords
 * @bizName videoFusionServiceBiz
 */
export type GetCameraOrGroupDeleteRecordsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: number;
        deviceId: string;
        name: string;
        type: 0 | 1 | 2;
        parentId: string;
        rawId: string;
        comefrom: string;
        longitude: number;
        latitude: number;
        lastSyncTime: string;
        createTime: string;
        groupType: 0 | 1 | 2 | -1;
        syncTaskId: string;
        user: string;
        userName: string;
        operationSource: 1 | 2;
    }>;
};

/**
 * @description 获取全部的分组列表。
 * @summary Request data types
 * @url [ get ] /api/Cameras/groups
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasGroupsReqTypeByVfs = {
    GroupType?: number;
    OperateGroupType?: number;
    ParentId?: string;
    PathPrefix?: string;
    SelectedIds?: Array<string>;
    UnSelectedIds?: Array<string>;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取全部的分组列表。
 * @summary Response data types
 * @url [ get ] /api/Cameras/groups
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasGroupsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        sipServiceId: string;
        syncStatus: 0 | 1 | 2 | 3 | 4;
        sipServerStatus: 1 | 2;
        useStatus: 0 | 1 | 2;
        isLeafGroup: boolean;
        isLeaf: boolean;
        cameraCount: number;
        cameraOnlineCount: number;
        selfCameraCount: number;
        selfCameraOnlineCount: number;
        order: number;
        relatedParentId: string;
        principalOut: Array<{
            id: string;
        }>;
        owners: Array<{
            id: string;
            name: string;
            phone: string;
            email: string;
            ownerType: 0 | 1;
            job: string;
        }>;
        idPath: string;
        namePath: string;
        isUserDefined: number;
        cameraQualityStatistics: {
            unDetectedCount: number;
            badCount: number;
            excellentCount: number;
            goodCount: number;
            faultCount: number;
        };
        selfCameraQualityStatistics: {
            unDetectedCount: number;
            badCount: number;
            excellentCount: number;
            goodCount: number;
            faultCount: number;
        };
        cameraResolutionStatistics: {
            hdCount: number;
            sdCount: number;
            fullHdCount: number;
            uhdCount: number;
        };
        selfCameraResolutionStatistics: {
            hdCount: number;
            sdCount: number;
            fullHdCount: number;
            uhdCount: number;
        };
        id: string;
        name: string;
        parentId: string;
        groupType: number;
        description: string;
        lastSyncTime: string;
        comeFrom: string;
        aliasName: string;
        operate: 0 | 1 | 2;
        position: number;
    }>;
};

/**
 * @description 创建组(预案组/自定义组)
 * @summary Request data types
 * @url [ post ] /api/Cameras/groups
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasGroupsReqTypeByVfs = {
    'X-version'?: string;
    name: string;
    parentId: string;
    description?: string;
    type?: 0 | 1 | 2;
    owners?: Array<{
        id: string;
        name: string;
        phone: string;
        email: string;
        ownerType: 0 | 1;
        job: string;
    }>;
};

/**
 * @description 创建组(预案组/自定义组)
 * @summary Response data types
 * @url [ post ] /api/Cameras/groups
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasGroupsResTypeByVfs = {
    sipServiceId: string;
    syncStatus: 0 | 1 | 2 | 3 | 4;
    sipServerStatus: 1 | 2;
    useStatus: 0 | 1 | 2;
    isLeafGroup: boolean;
    isLeaf: boolean;
    cameraCount: number;
    cameraOnlineCount: number;
    selfCameraCount: number;
    selfCameraOnlineCount: number;
    order: number;
    relatedParentId: string;
    principalOut: Array<{
        id: string;
    }>;
    owners: Array<{
        id: string;
        name: string;
        phone: string;
        email: string;
        ownerType: 0 | 1;
        job: string;
    }>;
    idPath: string;
    namePath: string;
    isUserDefined: number;
    cameraQualityStatistics: {
        unDetectedCount: number;
        badCount: number;
        excellentCount: number;
        goodCount: number;
        faultCount: number;
    };
    selfCameraQualityStatistics: {
        unDetectedCount: number;
        badCount: number;
        excellentCount: number;
        goodCount: number;
        faultCount: number;
    };
    cameraResolutionStatistics: {
        hdCount: number;
        sdCount: number;
        fullHdCount: number;
        uhdCount: number;
    };
    selfCameraResolutionStatistics: {
        hdCount: number;
        sdCount: number;
        fullHdCount: number;
        uhdCount: number;
    };
    id: string;
    name: string;
    parentId: string;
    groupType: number;
    description: string;
    lastSyncTime: string;
    comeFrom: string;
    aliasName: string;
    operate: 0 | 1 | 2;
    position: number;
};

/**
 * @description 分页获取分组下的监控列表
 * @summary Request data types
 * @url [ get ] /api/Cameras/groups/{groupId}
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasGroupsGroupIdReqTypeByVfs = {
    groupId: string;
    KeyWord?: string;
    Online?: boolean;
    Quality?: Array<number>;
    Resolution?: Array<number>;
    VideoEncoder?: Array<number>;
    Audio?: boolean;
    LabelIds?: Array<number>;
    IsSupportPTZ?: boolean;
    PathPrefix?: string;
    OperateGroupType?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页获取分组下的监控列表
 * @summary Response data types
 * @url [ get ] /api/Cameras/groups/{groupId}
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasGroupsGroupIdResTypeByVfs = {
    totalCount: number;
    records: Array<{
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
        aliasName: string;
        originalName: string;
        status: 1 | 2 | 3 | 4;
        quality: 0 | 1 | 2 | 3 | 4;
        areaCode: string;
        thumbnailID: string;
        playUrl: {
            playUrlType: 0 | 1 | 2;
            rtspUrl: string;
            flvUrl: string;
            wsUrl: string;
            rtmpUrl: string;
            webRtc: string;
        };
        longitude: number;
        latitude: number;
        id: string;
        name: string;
    }>;
};

/**
 * @description 获取监控flv/rtsp播放地址
 * @summary Request data types
 * @url [ get ] /api/Cameras/{id}/playUrls
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasIdPlayUrlsReqTypeByVfs = {
    id: string;
    PlayUrlShowType?: number;
    PathPrefix?: string;
    'X-version'?: string;
};

/**
 * @description 获取监控flv/rtsp播放地址
 * @summary Response data types
 * @url [ get ] /api/Cameras/{id}/playUrls
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasIdPlayUrlsResTypeByVfs = {
    playUrlType: 0 | 1 | 2;
    rtspUrl: string;
    flvUrl: string;
    wsUrl: string;
    rtmpUrl: string;
    webRtc: string;
};

/**
 * @description 周边监控查询
 * @summary Request data types
 * @url [ post ] /api/Cameras/circle_area
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasCircleAreaReqTypeByVfs = {
    'X-version'?: string;
    center: {
        longitude: number;
        latitude: number;
    };
    radius: number;
    labelIds?: Array<number>;
    sortRule?: 0 | 1;
    upLeft: {
        longitude: number;
        latitude: number;
    };
    bottomRight: {
        longitude: number;
        latitude: number;
    };
    pageIndex?: number;
    pageSize?: number;
};

/**
 * @description 周边监控查询
 * @summary Response data types
 * @url [ post ] /api/Cameras/circle_area
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasCircleAreaResTypeByVfs = {
    totalCount: number;
    records: Array<{
        distance: number;
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
        aliasName: string;
        originalName: string;
        status: 1 | 2 | 3 | 4;
        quality: 0 | 1 | 2 | 3 | 4;
        areaCode: string;
        thumbnailID: string;
        playUrl: {
            playUrlType: 0 | 1 | 2;
            rtspUrl: string;
            flvUrl: string;
            wsUrl: string;
            rtmpUrl: string;
            webRtc: string;
        };
        longitude: number;
        latitude: number;
        id: string;
        name: string;
    }>;
};

/**
 * @description 获取监控详情
 * @summary Request data types
 * @url [ get ] /api/Cameras/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasIdReqTypeByVfs = {
    id: string;
    PlayUrlShowType?: number;
    PathPrefix?: string;
    'X-version'?: string;
};

/**
 * @description 获取监控详情
 * @summary Response data types
 * @url [ get ] /api/Cameras/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasIdResTypeByVfs = {
    extension: Record<string, any>;
    type: 0 | 1 | 2 | 3;
    groupType: 0 | 1 | 2 | -1;
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
    aliasName: string;
    originalName: string;
    status: 1 | 2 | 3 | 4;
    quality: 0 | 1 | 2 | 3 | 4;
    areaCode: string;
    thumbnailID: string;
    playUrl: {
        playUrlType: 0 | 1 | 2;
        rtspUrl: string;
        flvUrl: string;
        wsUrl: string;
        rtmpUrl: string;
        webRtc: string;
    };
    longitude: number;
    latitude: number;
    id: string;
    name: string;
};

/**
 * @description 修改监控
 * @summary Request data types
 * @url [ put ] /api/Cameras/{id}
 * @bizName videoFusionServiceBiz
 */
export type PutCamerasIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    aliasName?: string;
    quality?: 0 | 1 | 2 | 3 | 4;
    isManual?: boolean;
    labelIds: Array<number>;
    isSupportPTZ?: boolean;
    longitude: number;
    latitude: number;
    areaCode?: string;
};

/**
 * @description 监控搜索（区域搜索）
 * @summary Request data types
 * @url [ get ] /api/Cameras/area_query
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasAreaQueryReqTypeByVfs = {
    'UpLeft.Longitude'?: number;
    'UpLeft.Latitude'?: number;
    UpLeft?: {
        Longitude: number;
        Latitude: number;
    };
    'BottomRight.Longitude'?: number;
    'BottomRight.Latitude'?: number;
    BottomRight?: {
        Longitude: number;
        Latitude: number;
    };
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 监控搜索（区域搜索）
 * @summary Response data types
 * @url [ get ] /api/Cameras/area_query
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasAreaQueryResTypeByVfs = {
    totalCount: number;
    records: Array<{
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
        aliasName: string;
        originalName: string;
        status: 1 | 2 | 3 | 4;
        quality: 0 | 1 | 2 | 3 | 4;
        areaCode: string;
        thumbnailID: string;
        playUrl: {
            playUrlType: 0 | 1 | 2;
            rtspUrl: string;
            flvUrl: string;
            wsUrl: string;
            rtmpUrl: string;
            webRtc: string;
        };
        longitude: number;
        latitude: number;
        id: string;
        name: string;
    }>;
};

/**
 * @description 监控搜索（关键字搜索）
 * @summary Request data types
 * @url [ get ] /api/Cameras/search
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasSearchReqTypeByVfs = {
    Keyword: string;
    GroupType?: number;
    MaxCount: number;
    'X-version'?: string;
};

/**
 * @description 监控搜索（关键字搜索）
 * @summary Response data types
 * @url [ get ] /api/Cameras/search
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasSearchResTypeByVfs = {
    totalCount: number;
    records: Array<{
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
        aliasName: string;
        originalName: string;
        status: 1 | 2 | 3 | 4;
        quality: 0 | 1 | 2 | 3 | 4;
        areaCode: string;
        thumbnailID: string;
        playUrl: {
            playUrlType: 0 | 1 | 2;
            rtspUrl: string;
            flvUrl: string;
            wsUrl: string;
            rtmpUrl: string;
            webRtc: string;
        };
        longitude: number;
        latitude: number;
        id: string;
        name: string;
    }>;
};

/**
 * @description 生成监控静态数据cameras.json.gz
 * @summary Request data types
 * @url [ post ] /api/Cameras/statics/genarate
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasStaticsGenarateReqTypeByVfs = {
    'X-version'?: string;
};

/**
 * @description 获取静态资源文件名
 * @summary Request data types
 * @url [ get ] /api/Cameras/statics/files
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasStaticsFilesReqTypeByVfs = {
    'X-version'?: string;
};

/**
 * @description 获取静态资源文件名
 * @summary Response data types
 * @url [ get ] /api/Cameras/statics/files
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasStaticsFilesResTypeByVfs = {
    totalCount: number;
    records: Array<string>;
};

/**
 * @description 修改组,监控组支持修改联系人不支持修改名称和描述，预案组和自定义组支持修改名称和描述不支持修改联系人
 * @summary Request data types
 * @url [ put ] /api/Cameras/groups/{id}
 * @bizName videoFusionServiceBiz
 */
export type PutCamerasGroupsIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    name?: string;
    description?: string;
    owners?: Array<{
        id: string;
        name: string;
        phone: string;
        email: string;
        ownerType: 0 | 1;
        job: string;
    }>;
    operateGroupType?: 0 | 1 | 2;
};

/**
 * @description 删除组(预案组/自定义组)
 * @summary Request data types
 * @url [ delete ] /api/Cameras/groups/{id}
 * @bizName videoFusionServiceBiz
 */
export type DeleteCamerasGroupsIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 移动监控项(监控或预案组)到指定预案组
 * @summary Request data types
 * @url [ put ] /api/Cameras/groups/{id}/children
 * @bizName videoFusionServiceBiz
 */
export type PutCamerasGroupsIdChildrenReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    type: 1 | 2;
    sourceItemId: string;
    targetGroupId: string;
};

/**
 * @description 预案分组排序接口
 * @summary Request data types
 * @url [ put ] /api/Cameras/groups/{id}/order
 * @bizName videoFusionServiceBiz
 */
export type PutCamerasGroupsIdOrderReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    orderBy: Array<{
        id: string;
        order: number;
        type: 1 | 2;
    }>;
};

/**
 * @description 提供能够通过监控组直接将组下监控放到预案组中
 * @summary Request data types
 * @url [ post ] /api/Cameras/groups/children
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasGroupsChildrenReqTypeByVfs = {
    'X-version'?: string;
    type?: 1 | 2;
    id: string;
    groupId: string;
};

/**
 * @description 删除预案组/自定义组下的某个监控
 * @summary Request data types
 * @url [ delete ] /api/Cameras/groups/{groupId}/children/{cameraId}
 * @bizName videoFusionServiceBiz
 */
export type DeleteCamerasGroupsGroupIdChildrenCameraIdReqTypeByVfs = {
    groupId: string;
    cameraId: string;
    'X-version'?: string;
};

/**
 * @description 获取预案组下被收藏的监控
 * @summary Request data types
 * @url [ get ] /api/Cameras/groups/{id}/preplan_cameras
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasGroupsIdPreplanCamerasReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取预案组下被收藏的监控
 * @summary Response data types
 * @url [ get ] /api/Cameras/groups/{id}/preplan_cameras
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasGroupsIdPreplanCamerasResTypeByVfs = {
    totalCount: number;
    records: Array<any>;
};

/**
 * @description 获取监控所在的预案组
 * @summary Request data types
 * @url [ get ] /api/Cameras/{id}/preplan_groups
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasIdPreplanGroupsReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取监控所在的预案组
 * @summary Response data types
 * @url [ get ] /api/Cameras/{id}/preplan_groups
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasIdPreplanGroupsResTypeByVfs = {
    totalCount: number;
    records: Array<any>;
};

/**
 * @description 监控详情-获取监控历史巡检记录
 * @summary Request data types
 * @url [ get ] /api/Cameras/{id}/detection_records
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasIdDetectionRecordsReqTypeByVfs = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 监控详情-获取监控历史巡检记录
 * @summary Response data types
 * @url [ get ] /api/Cameras/{id}/detection_records
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasIdDetectionRecordsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: string;
        cameraId: string;
        cameraName: string;
        status: 1 | 2 | 3 | 4;
        videoEncoder: 0 | 1;
        audio: boolean;
        resolution: 0 | 1 | 2 | 3;
        startTime: string;
        endTime: string;
        duration: number;
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
        imageFileIds: Array<string>;
        videoFileId: string;
        detectionStatus: 1 | 2 | 3 | 4 | 5;
        faultDetail: number;
        audioEncodingFormat: string;
    }>;
};

/**
 * @description 监控资源-高级搜索
 * @summary Request data types
 * @url [ get ] /api/Cameras/advance_search
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasAdvanceSearchReqTypeByVfs = {
    MaxCountCameraGroup?: number;
    MaxCountCamera?: number;
    KeyWord?: string;
    Online?: boolean;
    Quality?: Array<number>;
    Resolution?: Array<number>;
    Encode?: Array<number>;
    Audio?: boolean;
    LabelIds?: Array<number>;
    IsSupportPTZ?: boolean;
    'X-version'?: string;
};

/**
 * @description 监控资源-高级搜索
 * @summary Response data types
 * @url [ get ] /api/Cameras/advance_search
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasAdvanceSearchResTypeByVfs = {
    cameraGroupSearchOuts: Array<{
        id: string;
        name: string;
        groupType: number;
        parentId: string;
        namePath: string;
        idPath: string;
        cameraCount: number;
        cameraOnlineCount: number;
    }>;
    cameraSearchOuts: Array<{
        id: string;
        parentGroupType: number;
        name: string;
        status: 1 | 2 | 3 | 4;
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
        cameraGroup: {
            sipServiceId: string;
            syncStatus: 0 | 1 | 2 | 3 | 4;
            sipServerStatus: 1 | 2;
            useStatus: 0 | 1 | 2;
            isLeafGroup: boolean;
            isLeaf: boolean;
            cameraCount: number;
            cameraOnlineCount: number;
            selfCameraCount: number;
            selfCameraOnlineCount: number;
            order: number;
            relatedParentId: string;
            principalOut: Array<{
                id: string;
            }>;
            owners: Array<{
                id: string;
                name: string;
                phone: string;
                email: string;
                ownerType: 0 | 1;
                job: string;
            }>;
            idPath: string;
            namePath: string;
            isUserDefined: number;
            cameraQualityStatistics: {
                unDetectedCount: number;
                badCount: number;
                excellentCount: number;
                goodCount: number;
                faultCount: number;
            };
            selfCameraQualityStatistics: {
                unDetectedCount: number;
                badCount: number;
                excellentCount: number;
                goodCount: number;
                faultCount: number;
            };
            cameraResolutionStatistics: {
                hdCount: number;
                sdCount: number;
                fullHdCount: number;
                uhdCount: number;
            };
            selfCameraResolutionStatistics: {
                hdCount: number;
                sdCount: number;
                fullHdCount: number;
                uhdCount: number;
            };
            id: string;
            name: string;
            parentId: string;
            groupType: number;
            description: string;
            lastSyncTime: string;
            comeFrom: string;
            aliasName: string;
            operate: 0 | 1 | 2;
            position: number;
        };
        labels: Array<{
            id: number;
            title: string;
            color: string;
            description: string;
        }>;
    }>;
};

/**
 * @description 控制云台
 * @summary Request data types
 * @url [ put ] /api/Cameras/{id}/control
 * @bizName videoFusionServiceBiz
 */
export type PutCamerasIdControlReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    cmdType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22;
    speed?: number;
    stop?: boolean;
};

/**
 * @description 下级录像回放控制
 * @summary Request data types
 * @url [ put ] /api/Cameras/{id}/playback_control
 * @bizName videoFusionServiceBiz
 */
export type PutCamerasIdPlaybackControlReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    cmdType?: 0 | 1 | 2 | 3;
    multiple?: number;
    seekTime?: number;
    streamSessionId?: number;
};

/**
 * @description 监控录像开始
 * @summary Request data types
 * @url [ put ] /api/Cameras/{id}/videos/start
 * @bizName videoFusionServiceBiz
 */
export type PutCamerasIdVideosStartReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 监控录像结束
 * @summary Request data types
 * @url [ put ] /api/Cameras/{id}/videos/stop
 * @bizName videoFusionServiceBiz
 */
export type PutCamerasIdVideosStopReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 监控截图
 * @summary Request data types
 * @url [ put ] /api/Cameras/{id}/pictures
 * @bizName videoFusionServiceBiz
 */
export type PutCamerasIdPicturesReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    picturesTotal?: number;
    interval?: number;
};

/**
 * @description 条件查询监控录像列表
 * @summary Request data types
 * @url [ get ] /api/Cameras/mediarecords
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasMediarecordsReqTypeByVfs = {
    KeyWord?: string;
    CameraId?: string;
    FileEntityType?: number;
    StartTime?: string;
    EndTime?: string;
    UserId?: string;
    IsUnderway?: boolean;
    FileRecordIds?: Array<string>;
    PlatformId?: string;
    AppName?: string;
    AssociationId?: string;
    VideoPictureResult?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 条件查询监控录像列表
 * @summary Response data types
 * @url [ get ] /api/Cameras/mediarecords
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasMediarecordsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        cameraId: string;
        cameraName: string;
        messages: Array<string>;
        isSucceed: boolean;
        appName: string;
        fileSize: number;
        pullUrls: {
            rtspUrl: string;
            flvUrl: string;
            wsUrl: string;
            rtmpUrl: string;
            webRtc: string;
            relateWebRtcUrl: string;
            relateFlvUrl: string;
            relateWsUrl: string;
        };
        downloadUrl: {
            mp4Url: string;
            tsUrl: string;
        };
        name: string;
        recordId: number;
        createTime: string;
        fileId: Array<string>;
        type: 0 | 1 | 2 | 3 | 4;
        endTime: string;
    }>;
};

/**
 * @description 当前用户是否对监控录像中
 * @summary Request data types
 * @url [ get ] /api/Cameras/{id}/isvideoing
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasIdIsvideoingReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 当前用户监控录像信息
<remarks>如果用户对监控没有在录像中，则返回404，否则返回具体的录像信息</remarks> 
 * @summary Request data types 
 * @url [ get ] /api/Cameras/{id}/recordingInfo 
 * @bizName videoFusionServiceBiz 
 */
export type GetCamerasIdRecordingInfoReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 当前用户监控录像信息
<remarks>如果用户对监控没有在录像中，则返回404，否则返回具体的录像信息</remarks> 
 * @summary Response data types 
 * @url [ get ] /api/Cameras/{id}/recordingInfo 
 * @bizName videoFusionServiceBiz 
 */
export type GetCamerasIdRecordingInfoResTypeByVfs = {
    id: number;
    streamId: string;
    associationId: string;
    createTime: string;
    status: 0 | 1 | 2 | 3;
    createTimeOffset: number;
};

/**
 * @description 获取监控所在的所有收藏组
 * @summary Request data types
 * @url [ get ] /api/Cameras/{id}/favorite_groups
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasIdFavoriteGroupsReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取监控所在的所有收藏组
 * @summary Response data types
 * @url [ get ] /api/Cameras/{id}/favorite_groups
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasIdFavoriteGroupsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: string;
        cameraId: string;
        cameraStatus: 1 | 2 | 3 | 4;
        status: 1 | 2 | 3 | 4;
        name: string;
        originalName: string;
        aliasName: string;
        parentId: string;
        type: 1 | 2;
        subType: string;
        labels: Array<{
            id: number;
            title: string;
            color: string;
            description: string;
        }>;
        selfCameraCount: number;
        selfCameraOnlineCount: number;
        cameraCount: number;
        cameraOnlineCount: number;
        idPath: string;
        namePath: string;
        parentName: string;
        result: 0 | 1 | 2 | 3 | 4;
        resolution: 0 | 1 | 2 | 3;
        audio: boolean;
        audioEncodingFormat: string;
        videoEncoder: 0 | 1;
    }>;
};

/**
 * @description 添加监控设备
 * @summary Request data types
 * @url [ post ] /api/Cameras
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasReqTypeByVfs = {
    'X-version'?: string;
    accessType?: number;
    address?: string;
    block?: string;
    businessgroupid?: string;
    certifiable?: number;
    certnum?: string;
    channelId?: number;
    civilcode?: string;
    comefrom?: string;
    connectType?: number;
    directiontype?: number;
    downloadspeed?: string;
    endtime?: string;
    errcode?: number;
    highDefinition?: number;
    ipaddress?: string;
    isCollection?: number;
    isPublicnNetwork?: number;
    latitude?: number;
    longitude?: number;
    mainSubStream?: string;
    manufacture?: string;
    model?: string;
    name: string;
    onvifAddress: string;
    orderby?: string;
    owner?: string;
    parental: number;
    parentid?: string;
    password?: string;
    port?: string;
    positiontype?: number;
    ptztype?: number;
    regionId?: string;
    registerway?: number;
    resolution?: string;
    rights?: number;
    roomtype?: number;
    safetyway?: number;
    secrecy?: number;
    status?: number;
    streamId?: number;
    streamPacketType?: number;
    supplylighttype?: number;
    svcspacesupportmode?: number;
    userName?: string;
    usetype?: number;
    idType: 131 | 132 | 200 | 202 | 203 | 215 | 600;
    isSupportPTZ?: boolean;
};

/**
 * @description 添加监控设备
 * @summary Response data types
 * @url [ post ] /api/Cameras
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasResTypeByVfs = {
    cameraId: string;
    accessType: number;
    address: string;
    block: string;
    businessgroupid: string;
    certifiable: number;
    certnum: string;
    channelId: number;
    civilcode: string;
    comefrom: string;
    connectType: number;
    directiontype: number;
    downloadspeed: string;
    endtime: string;
    errcode: number;
    highDefinition: number;
    ipaddress: string;
    isCollection: number;
    isPublicnNetwork: number;
    latitude: number;
    longitude: number;
    mainSubStream: string;
    manufacture: string;
    model: string;
    name: string;
    onvifAddress: string;
    orderby: string;
    owner: string;
    parental: number;
    parentid: string;
    password: string;
    port: string;
    positiontype: number;
    ptztype: number;
    regionId: string;
    registerway: number;
    resolution: string;
    rights: number;
    roomtype: number;
    safetyway: number;
    secrecy: number;
    status: number;
    streamId: number;
    streamPacketType: number;
    supplylighttype: number;
    svcspacesupportmode: number;
    userName: string;
    usetype: number;
};

/**
 * @description 监控位置变更
 * @summary Request data types
 * @url [ put ] /api/Cameras/{id}/location
 * @bizName videoFusionServiceBiz
 */
export type PutCamerasIdLocationReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    longitude?: number;
    latitude?: number;
};

/**
 * @description 根据标签Id查找监控
 * @summary Request data types
 * @url [ post ] /api/Cameras/search/label
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasSearchLabelReqTypeByVfs = {
    'X-version'?: string;
    labelIds?: Array<number>;
    keyword?: string;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * @description 根据标签Id查找监控
 * @summary Response data types
 * @url [ post ] /api/Cameras/search/label
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasSearchLabelResTypeByVfs = {
    totalCount: number;
    records: Array<{
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
        aliasName: string;
        originalName: string;
        status: 1 | 2 | 3 | 4;
        quality: 0 | 1 | 2 | 3 | 4;
        areaCode: string;
        thumbnailID: string;
        playUrl: {
            playUrlType: 0 | 1 | 2;
            rtspUrl: string;
            flvUrl: string;
            wsUrl: string;
            rtmpUrl: string;
            webRtc: string;
        };
        longitude: number;
        latitude: number;
        id: string;
        name: string;
    }>;
};

/**
 * @description 导入监控（仅支持对经纬度的修改,导入后重新加载静态文件）
 * @summary Request data types
 * @url [ post ] /api/Cameras/import
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasImportReqTypeByVfs = {
    'X-version'?: string;
    importCameraLocations: Array<{
        id: string;
        latitude: number;
        longitude: number;
    }>;
};

/**
 * @description 根据监控Id集合获取监控信息
 * @summary Request data types
 * @url [ post ] /api/Cameras/batch
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasBatchReqTypeByVfs = {
    'X-version'?: string;
    ids: Array<string>;
    playUrlShowType?: 0 | 1;
};

/**
 * @description 根据监控Id集合获取监控信息
 * @summary Response data types
 * @url [ post ] /api/Cameras/batch
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasBatchResTypeByVfs = {
    totalCount: number;
    records: Array<{
        aliasName: string;
        originalName: string;
        status: 1 | 2 | 3 | 4;
        quality: 0 | 1 | 2 | 3 | 4;
        areaCode: string;
        thumbnailID: string;
        playUrl: {
            playUrlType: 0 | 1 | 2;
            rtspUrl: string;
            flvUrl: string;
            wsUrl: string;
            rtmpUrl: string;
            webRtc: string;
        };
        longitude: number;
        latitude: number;
        id: string;
        name: string;
    }>;
};

/**
 * @description 批量获取监控截图文件信息接口
 * @summary Request data types
 * @url [ post ] /api/Cameras/images/batch
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasImagesBatchReqTypeByVfs = {
    'X-version'?: string;
    ids: Array<string>;
};

/**
 * @description 批量获取监控截图文件信息接口
 * @summary Response data types
 * @url [ post ] /api/Cameras/images/batch
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasImagesBatchResTypeByVfs = {
    totalCount: number;
    records: Array<{
        imageId: string;
        id: string;
        name: string;
    }>;
};

/**
 * @description 批量设置监控行政区域码
 * @summary Request data types
 * @url [ put ] /api/Cameras/areaCode/batch
 * @bizName videoFusionServiceBiz
 */
export type PutCamerasAreaCodeBatchReqTypeByVfs = {
    'X-version'?: string;
    areaCode: string;
    cameraIds?: Array<string>;
};

/**
 * @description 获取行政区域下面的监控
 * @summary Request data types
 * @url [ get ] /api/Cameras/areaCode/{areaCode}
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasAreaCodeAreaCodeReqTypeByVfs = {
    areaCode: string;
    PlayUrlShowType?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取行政区域下面的监控
 * @summary Response data types
 * @url [ get ] /api/Cameras/areaCode/{areaCode}
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasAreaCodeAreaCodeResTypeByVfs = {
    totalCount: number;
    records: Array<{
        labels: Array<{
            id: number;
            title: string;
            color: string;
            description: string;
        }>;
        aliasName: string;
        originalName: string;
        status: 1 | 2 | 3 | 4;
        quality: 0 | 1 | 2 | 3 | 4;
        areaCode: string;
        thumbnailID: string;
        playUrl: {
            playUrlType: 0 | 1 | 2;
            rtspUrl: string;
            flvUrl: string;
            wsUrl: string;
            rtmpUrl: string;
            webRtc: string;
        };
        longitude: number;
        latitude: number;
        id: string;
        name: string;
    }>;
};

/**
 * @description 搜索行政区域下的监控
 * @summary Request data types
 * @url [ post ] /api/Cameras/areaCode/search
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasAreaCodeSearchReqTypeByVfs = {
    'X-version'?: string;
    prefixAreaCodes?: Array<string>;
    labelIds?: Array<number>;
    online?: boolean;
    keyword?: string;
    playUrlShowType?: 0 | 1;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * @description 搜索行政区域下的监控
 * @summary Response data types
 * @url [ post ] /api/Cameras/areaCode/search
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasAreaCodeSearchResTypeByVfs = {
    totalCount: number;
    records: Array<{
        labels: Array<{
            id: number;
            title: string;
            color: string;
            description: string;
        }>;
        aliasName: string;
        originalName: string;
        status: 1 | 2 | 3 | 4;
        quality: 0 | 1 | 2 | 3 | 4;
        areaCode: string;
        thumbnailID: string;
        playUrl: {
            playUrlType: 0 | 1 | 2;
            rtspUrl: string;
            flvUrl: string;
            wsUrl: string;
            rtmpUrl: string;
            webRtc: string;
        };
        longitude: number;
        latitude: number;
        id: string;
        name: string;
    }>;
};

/**
 * @description 获取下级监控录像
 * @summary Request data types
 * @url [ get ] /api/Cameras/{id}/videos
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasIdVideosReqTypeByVfs = {
    id: string;
    StartTime?: string;
    EndTime?: string;
    Limit?: number;
    'X-version'?: string;
};

/**
 * @description 获取下级监控录像
 * @summary Response data types
 * @url [ get ] /api/Cameras/{id}/videos
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasIdVideosResTypeByVfs = {
    totalCount: number;
    records: Array<{
        startTime: string;
        endTime: string;
        fileSize: number;
        pullStreamId: number;
        pullUrls: {
            rtspUrl: string;
            flvUrl: string;
            wsUrl: string;
            rtmpUrl: string;
            webRtc: string;
            relateWebRtcUrl: string;
            relateFlvUrl: string;
            relateWsUrl: string;
        };
        downloadStreamId: number;
        downloadUrl: {
            mp4Url: string;
            tsUrl: string;
        };
        id: string;
        name: string;
    }>;
};

/**
 * @description 条件查询监控状态变更记录
 * @summary Request data types
 * @url [ get ] /api/Cameras/state/records
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasStateRecordsReqTypeByVfs = {
    LowerDomainId?: string;
    Online?: boolean;
    StateSource?: number;
    StartTime?: string;
    EndTime?: string;
    Keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 条件查询监控状态变更记录
 * @summary Response data types
 * @url [ get ] /api/Cameras/state/records
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasStateRecordsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: number;
        cameraId: string;
        name: string;
        status: 1 | 2 | 3 | 4;
        statusSource: 0 | 1 | 2;
        lowerId: string;
        lowerName: string;
        createTime: string;
        stateDuration: string;
    }>;
};

/**
 * @description 查询监控预置点位列表
 * @summary Request data types
 * @url [ get ] /api/Cameras/{id}/points
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasIdPointsReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询监控预置点位列表
 * @summary Response data types
 * @url [ get ] /api/Cameras/{id}/points
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasIdPointsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: number;
        name: string;
    }>;
};

/**
 * @description 添加监控预置点位
 * @summary Request data types
 * @url [ post ] /api/Cameras/points
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasPointsReqTypeByVfs = {
    'X-version'?: string;
    cameraId: string;
    presetId: number;
    presetName: string;
};

/**
 * @description 添加监控预置点位
 * @summary Response data types
 * @url [ post ] /api/Cameras/points
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasPointsResTypeByVfs = {
    id: number;
    name: string;
};

/**
 * @description 删除监控预置点位
 * @summary Request data types
 * @url [ delete ] /api/Cameras/{cameraId}/points/{id}
 * @bizName videoFusionServiceBiz
 */
export type DeleteCamerasCameraIdPointsIdReqTypeByVfs = {
    cameraId: string;
    id: number;
    'X-version'?: string;
};

/**
 * @description 运行监控到预置点位
 * @summary Request data types
 * @url [ get ] /api/Cameras/{cameraId}/points/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasCameraIdPointsIdReqTypeByVfs = {
    cameraId: string;
    id: number;
    'X-version'?: string;
};

/**
 * @description 运行监控到预置点位
 * @summary Response data types
 * @url [ get ] /api/Cameras/{cameraId}/points/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasCameraIdPointsIdResTypeByVfs = {
    id: number;
    name: string;
};

/**
 * @description 监控/运维/行政区域
 * @summary Request data types
 * @url [ post ] /api/Cameras/operation/areacode
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasOperationAreacodeReqTypeByVfs = {
    'X-version'?: string;
    groupIds?: Array<string>;
};

/**
 * @description 监控录像开始
 * @summary Request data types
 * @url [ post ] /api/CameraVideos
 * @bizName videoFusionServiceBiz
 */
export type PostCameraVideosReqTypeByVfs = {
    'X-version'?: string;
    cameraId: string;
    subId: string;
};

/**
 * @description 监控录像开始
 * @summary Response data types
 * @url [ post ] /api/CameraVideos
 * @bizName videoFusionServiceBiz
 */
export type PostCameraVideosResTypeByVfs = {
    cameraId: string;
    cameraName: string;
    messages: Array<string>;
    isSucceed: boolean;
    appName: string;
    fileSize: number;
    pullUrls: {
        rtspUrl: string;
        flvUrl: string;
        wsUrl: string;
        rtmpUrl: string;
        webRtc: string;
        relateWebRtcUrl: string;
        relateFlvUrl: string;
        relateWsUrl: string;
    };
    downloadUrl: {
        mp4Url: string;
        tsUrl: string;
    };
    name: string;
    recordId: number;
    createTime: string;
    fileId: Array<string>;
    type: 0 | 1 | 2 | 3 | 4;
    endTime: string;
};

/**
 * @description 监控录像结束
 * @summary Request data types
 * @url [ put ] /api/CameraVideos/{id}/stop
 * @bizName videoFusionServiceBiz
 */
export type PutCameraVideosIdStopReqTypeByVfs = {
    id: number;
    'X-version'?: string;
};

/**
 * @description 获取国标本级域信息
 * @summary Request data types
 * @url [ get ] /api/CurrentDomains
 * @bizName videoFusionServiceBiz
 */
export type GetCurrentDomainsReqTypeByVfs = {
    'X-version'?: string;
};

/**
 * @description 获取国标本级域信息
 * @summary Response data types
 * @url [ get ] /api/CurrentDomains
 * @bizName videoFusionServiceBiz
 */
export type GetCurrentDomainsResTypeByVfs = {
    gbId: string;
    serverIp: string;
    sipPort: number;
    sipProtocolType: number;
    httpPort: number;
    publicNetworkIp: string;
};

/**
 * @description 暂停巡检
 * @summary Request data types
 * @url [ put ] /api/DetectionTasks/{id}/pause
 * @bizName videoFusionServiceBiz
 */
export type PutDetectionTasksIdPauseReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 恢复巡检
 * @summary Request data types
 * @url [ put ] /api/DetectionTasks/{id}/resume
 * @bizName videoFusionServiceBiz
 */
export type PutDetectionTasksIdResumeReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 取消巡检
 * @summary Request data types
 * @url [ put ] /api/DetectionTasks/{id}/stop
 * @bizName videoFusionServiceBiz
 */
export type PutDetectionTasksIdStopReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取指定巡检任务的所有记录
 * @summary Request data types
 * @url [ get ] /api/DetectionTasks/{id}/records
 * @bizName videoFusionServiceBiz
 */
export type GetDetectionTasksIdRecordsReqTypeByVfs = {
    id: string;
    Keyword?: string;
    Quality?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取指定巡检任务的所有记录
 * @summary Response data types
 * @url [ get ] /api/DetectionTasks/{id}/records
 * @bizName videoFusionServiceBiz
 */
export type GetDetectionTasksIdRecordsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: string;
        cameraId: string;
        cameraName: string;
        status: 1 | 2 | 3 | 4;
        videoEncoder: 0 | 1;
        audio: boolean;
        resolution: 0 | 1 | 2 | 3;
        startTime: string;
        endTime: string;
        duration: number;
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
        imageFileIds: Array<string>;
        videoFileId: string;
        detectionStatus: 1 | 2 | 3 | 4 | 5;
        faultDetail: number;
        audioEncodingFormat: string;
    }>;
};

/**
 * @description 获取巡检任务详情
 * @summary Request data types
 * @url [ get ] /api/DetectionTasks/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetDetectionTasksIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取巡检任务详情
 * @summary Response data types
 * @url [ get ] /api/DetectionTasks/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetDetectionTasksIdResTypeByVfs = {
    id: string;
    jobId: string;
    beginTime: string;
    endTime: string;
    detectionCameraGroupId: string;
    pullStreamDuration: number;
    duration: string;
    remainingDuration: string;
    taskStatus: 0 | 1 | 2 | 3 | 4;
    taskExecutedCount: number;
    cameraDetectedCount: number;
    cameraAmount: number;
    imageAmount: number;
    excellentCameraAmount: number;
    goodCameraAmount: number;
    badCameraAmount: number;
    faultCameraAmount: number;
    unDetectionCameraAmount: number;
    progress: number;
};

/**
 * @description 获取所有巡检任务执行情况，可通过 JobId 过滤
 * @summary Request data types
 * @url [ get ] /api/DetectionTasks
 * @bizName videoFusionServiceBiz
 */
export type GetDetectionTasksReqTypeByVfs = {
    JobId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取所有巡检任务执行情况，可通过 JobId 过滤
 * @summary Response data types
 * @url [ get ] /api/DetectionTasks
 * @bizName videoFusionServiceBiz
 */
export type GetDetectionTasksResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: string;
        jobId: string;
        beginTime: string;
        endTime: string;
        detectionCameraGroupId: string;
        pullStreamDuration: number;
        duration: string;
        remainingDuration: string;
        taskStatus: 0 | 1 | 2 | 3 | 4;
        taskExecutedCount: number;
        cameraDetectedCount: number;
        cameraAmount: number;
        imageAmount: number;
        excellentCameraAmount: number;
        goodCameraAmount: number;
        badCameraAmount: number;
        faultCameraAmount: number;
        unDetectionCameraAmount: number;
        progress: number;
    }>;
};

/**
 * @description 获取最新有效的巡检任务（不是重复执行的任务）
 * @summary Request data types
 * @url [ get ] /api/DetectionTasks/newest_effective
 * @bizName videoFusionServiceBiz
 */
export type GetDetectionTasksNewestEffectiveReqTypeByVfs = {
    JobId?: string;
    CameraId?: string;
    DetectionType?: number;
    'X-version'?: string;
};

/**
 * @description 获取最新有效的巡检任务（不是重复执行的任务）
 * @summary Response data types
 * @url [ get ] /api/DetectionTasks/newest_effective
 * @bizName videoFusionServiceBiz
 */
export type GetDetectionTasksNewestEffectiveResTypeByVfs = {
    cameraGroupOut: {
        sipServiceId: string;
        syncStatus: 0 | 1 | 2 | 3 | 4;
        sipServerStatus: 1 | 2;
        useStatus: 0 | 1 | 2;
        isLeafGroup: boolean;
        isLeaf: boolean;
        cameraCount: number;
        cameraOnlineCount: number;
        selfCameraCount: number;
        selfCameraOnlineCount: number;
        order: number;
        relatedParentId: string;
        principalOut: Array<{
            id: string;
        }>;
        owners: Array<{
            id: string;
            name: string;
            phone: string;
            email: string;
            ownerType: 0 | 1;
            job: string;
        }>;
        idPath: string;
        namePath: string;
        isUserDefined: number;
        cameraQualityStatistics: {
            unDetectedCount: number;
            badCount: number;
            excellentCount: number;
            goodCount: number;
            faultCount: number;
        };
        selfCameraQualityStatistics: {
            unDetectedCount: number;
            badCount: number;
            excellentCount: number;
            goodCount: number;
            faultCount: number;
        };
        cameraResolutionStatistics: {
            hdCount: number;
            sdCount: number;
            fullHdCount: number;
            uhdCount: number;
        };
        selfCameraResolutionStatistics: {
            hdCount: number;
            sdCount: number;
            fullHdCount: number;
            uhdCount: number;
        };
        id: string;
        name: string;
        parentId: string;
        groupType: number;
        description: string;
        lastSyncTime: string;
        comeFrom: string;
        aliasName: string;
        operate: 0 | 1 | 2;
        position: number;
    };
    detectionTaskOut: {
        id: string;
        jobId: string;
        beginTime: string;
        endTime: string;
        detectionCameraGroupId: string;
        pullStreamDuration: number;
        duration: string;
        remainingDuration: string;
        taskStatus: 0 | 1 | 2 | 3 | 4;
        taskExecutedCount: number;
        cameraDetectedCount: number;
        cameraAmount: number;
        imageAmount: number;
        excellentCameraAmount: number;
        goodCameraAmount: number;
        badCameraAmount: number;
        faultCameraAmount: number;
        unDetectionCameraAmount: number;
        progress: number;
    };
};

/**
 * @description 获取最新有效的巡检任务（不是重复执行的任务）
 * @summary Request data types
 * @url [ post ] /api/DetectionTasks/newest_effectives
 * @bizName videoFusionServiceBiz
 */
export type PostDetectionTasksNewestEffectivesReqTypeByVfs = {
    'X-version'?: string;
};

/**
 * @description 获取最新有效的巡检任务（不是重复执行的任务）
 * @summary Response data types
 * @url [ post ] /api/DetectionTasks/newest_effectives
 * @bizName videoFusionServiceBiz
 */
export type PostDetectionTasksNewestEffectivesResTypeByVfs = {
    cameraGroupOut: {
        sipServiceId: string;
        syncStatus: 0 | 1 | 2 | 3 | 4;
        sipServerStatus: 1 | 2;
        useStatus: 0 | 1 | 2;
        isLeafGroup: boolean;
        isLeaf: boolean;
        cameraCount: number;
        cameraOnlineCount: number;
        selfCameraCount: number;
        selfCameraOnlineCount: number;
        order: number;
        relatedParentId: string;
        principalOut: Array<{
            id: string;
        }>;
        owners: Array<{
            id: string;
            name: string;
            phone: string;
            email: string;
            ownerType: 0 | 1;
            job: string;
        }>;
        idPath: string;
        namePath: string;
        isUserDefined: number;
        cameraQualityStatistics: {
            unDetectedCount: number;
            badCount: number;
            excellentCount: number;
            goodCount: number;
            faultCount: number;
        };
        selfCameraQualityStatistics: {
            unDetectedCount: number;
            badCount: number;
            excellentCount: number;
            goodCount: number;
            faultCount: number;
        };
        cameraResolutionStatistics: {
            hdCount: number;
            sdCount: number;
            fullHdCount: number;
            uhdCount: number;
        };
        selfCameraResolutionStatistics: {
            hdCount: number;
            sdCount: number;
            fullHdCount: number;
            uhdCount: number;
        };
        id: string;
        name: string;
        parentId: string;
        groupType: number;
        description: string;
        lastSyncTime: string;
        comeFrom: string;
        aliasName: string;
        operate: 0 | 1 | 2;
        position: number;
    };
    detectionTaskOut: {
        id: string;
        jobId: string;
        beginTime: string;
        endTime: string;
        detectionCameraGroupId: string;
        pullStreamDuration: number;
        duration: string;
        remainingDuration: string;
        taskStatus: 0 | 1 | 2 | 3 | 4;
        taskExecutedCount: number;
        cameraDetectedCount: number;
        cameraAmount: number;
        imageAmount: number;
        excellentCameraAmount: number;
        goodCameraAmount: number;
        badCameraAmount: number;
        faultCameraAmount: number;
        unDetectionCameraAmount: number;
        progress: number;
    };
};

/**
 * @description 重新巡检
 * @summary Request data types
 * @url [ put ] /api/DetectionTasks/records/{id}
 * @bizName videoFusionServiceBiz
 */
export type PutDetectionTasksRecordsIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    qualities?: Array<Record<string, any>>;
};

/**
 * @description 导出巡检记录
 * @summary Request data types
 * @url [ put ] /api/DetectionTasks/{id}/export
 * @bizName videoFusionServiceBiz
 */
export type PutDetectionTasksIdExportReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    qualities?: Array<Record<string, any>>;
    fileName?: string;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * @description 导入收藏监控，一般用于设施收藏监控
 * @summary Request data types
 * @url [ post ] /api/FavoriteCameraItems/import
 * @bizName videoFusionServiceBiz
 */
export type PostFavoriteCameraItemsImportReqTypeByVfs = {
    'X-version'?: string;
    favoriteCameraImportItems?: Array<{
        subId: string;
        cameraId: string;
        subType: string;
    }>;
};

/**
 * @description 创建收藏项，包括收藏组和收藏监控. 收藏类型：1-收藏组 2-收藏监控
 * @summary Request data types
 * @url [ post ] /api/FavoriteCameraItems
 * @bizName videoFusionServiceBiz
 */
export type PostFavoriteCameraItemsReqTypeByVfs = {
    'X-version'?: string;
    nameOrId?: string;
    parentId?: string;
    type?: 1 | 2;
};

/**
 * @description 创建收藏项，包括收藏组和收藏监控. 收藏类型：1-收藏组 2-收藏监控
 * @summary Response data types
 * @url [ post ] /api/FavoriteCameraItems
 * @bizName videoFusionServiceBiz
 */
export type PostFavoriteCameraItemsResTypeByVfs = {
    id: string;
    cameraId: string;
    cameraStatus: 1 | 2 | 3 | 4;
    status: 1 | 2 | 3 | 4;
    name: string;
    originalName: string;
    aliasName: string;
    parentId: string;
    type: 1 | 2;
    subType: string;
    labels: Array<{
        id: number;
        title: string;
        color: string;
        description: string;
    }>;
    selfCameraCount: number;
    selfCameraOnlineCount: number;
    cameraCount: number;
    cameraOnlineCount: number;
    idPath: string;
    namePath: string;
    parentName: string;
    result: 0 | 1 | 2 | 3 | 4;
    resolution: 0 | 1 | 2 | 3;
    audio: boolean;
    audioEncodingFormat: string;
    videoEncoder: 0 | 1;
};

/**
 * @description 条件查询收藏项
 * @summary Request data types
 * @url [ get ] /api/FavoriteCameraItems
 * @bizName videoFusionServiceBiz
 */
export type GetFavoriteCameraItemsReqTypeByVfs = {
    Sub?: string;
    Type?: number;
    SubType?: string;
    Keyword?: string;
    LabelIds?: Array<number>;
    PlatformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 条件查询收藏项
 * @summary Response data types
 * @url [ get ] /api/FavoriteCameraItems
 * @bizName videoFusionServiceBiz
 */
export type GetFavoriteCameraItemsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: string;
        cameraId: string;
        cameraStatus: 1 | 2 | 3 | 4;
        status: 1 | 2 | 3 | 4;
        name: string;
        originalName: string;
        aliasName: string;
        parentId: string;
        type: 1 | 2;
        subType: string;
        labels: Array<{
            id: number;
            title: string;
            color: string;
            description: string;
        }>;
        selfCameraCount: number;
        selfCameraOnlineCount: number;
        cameraCount: number;
        cameraOnlineCount: number;
        idPath: string;
        namePath: string;
        parentName: string;
        result: 0 | 1 | 2 | 3 | 4;
        resolution: 0 | 1 | 2 | 3;
        audio: boolean;
        audioEncodingFormat: string;
        videoEncoder: 0 | 1;
    }>;
};

/**
 * @description 为设施、专题等非人创建收藏监控
 * @summary Request data types
 * @url [ post ] /api/FavoriteCameraItems/sub
 * @bizName videoFusionServiceBiz
 */
export type PostFavoriteCameraItemsSubReqTypeByVfs = {
    'X-version'?: string;
    cameraId: string;
    subId: string;
    subType?: string;
};

/**
 * @description 为设施、专题等非人创建收藏监控
 * @summary Response data types
 * @url [ post ] /api/FavoriteCameraItems/sub
 * @bizName videoFusionServiceBiz
 */
export type PostFavoriteCameraItemsSubResTypeByVfs = {
    id: string;
    cameraId: string;
    cameraStatus: 1 | 2 | 3 | 4;
    status: 1 | 2 | 3 | 4;
    name: string;
    originalName: string;
    aliasName: string;
    parentId: string;
    type: 1 | 2;
    subType: string;
    labels: Array<{
        id: number;
        title: string;
        color: string;
        description: string;
    }>;
    selfCameraCount: number;
    selfCameraOnlineCount: number;
    cameraCount: number;
    cameraOnlineCount: number;
    idPath: string;
    namePath: string;
    parentName: string;
    result: 0 | 1 | 2 | 3 | 4;
    resolution: 0 | 1 | 2 | 3;
    audio: boolean;
    audioEncodingFormat: string;
    videoEncoder: 0 | 1;
};

/**
 * @description 获取根收藏项
 * @summary Request data types
 * @url [ get ] /api/FavoriteCameraItems/root
 * @bizName videoFusionServiceBiz
 */
export type GetFavoriteCameraItemsRootReqTypeByVfs = {
    'X-version'?: string;
};

/**
 * @description 获取根收藏项
 * @summary Response data types
 * @url [ get ] /api/FavoriteCameraItems/root
 * @bizName videoFusionServiceBiz
 */
export type GetFavoriteCameraItemsRootResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: string;
        cameraId: string;
        cameraStatus: 1 | 2 | 3 | 4;
        status: 1 | 2 | 3 | 4;
        name: string;
        originalName: string;
        aliasName: string;
        parentId: string;
        type: 1 | 2;
        subType: string;
        labels: Array<{
            id: number;
            title: string;
            color: string;
            description: string;
        }>;
        selfCameraCount: number;
        selfCameraOnlineCount: number;
        cameraCount: number;
        cameraOnlineCount: number;
        idPath: string;
        namePath: string;
        parentName: string;
        result: 0 | 1 | 2 | 3 | 4;
        resolution: 0 | 1 | 2 | 3;
        audio: boolean;
        audioEncodingFormat: string;
        videoEncoder: 0 | 1;
    }>;
};

/**
 * @description 获取子收藏项
 * @summary Request data types
 * @url [ get ] /api/FavoriteCameraItems/{parentId}/children
 * @bizName videoFusionServiceBiz
 */
export type GetFavoriteCameraItemsParentIdChildrenReqTypeByVfs = {
    parentId: string;
    type?: number;
    'X-version'?: string;
};

/**
 * @description 获取子收藏项
 * @summary Response data types
 * @url [ get ] /api/FavoriteCameraItems/{parentId}/children
 * @bizName videoFusionServiceBiz
 */
export type GetFavoriteCameraItemsParentIdChildrenResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: string;
        cameraId: string;
        cameraStatus: 1 | 2 | 3 | 4;
        status: 1 | 2 | 3 | 4;
        name: string;
        originalName: string;
        aliasName: string;
        parentId: string;
        type: 1 | 2;
        subType: string;
        labels: Array<{
            id: number;
            title: string;
            color: string;
            description: string;
        }>;
        selfCameraCount: number;
        selfCameraOnlineCount: number;
        cameraCount: number;
        cameraOnlineCount: number;
        idPath: string;
        namePath: string;
        parentName: string;
        result: 0 | 1 | 2 | 3 | 4;
        resolution: 0 | 1 | 2 | 3;
        audio: boolean;
        audioEncodingFormat: string;
        videoEncoder: 0 | 1;
    }>;
};

/**
 * @description 修改收藏项（监控不能修改名称）
 * @summary Request data types
 * @url [ put ] /api/FavoriteCameraItems/{id}
 * @bizName videoFusionServiceBiz
 */
export type PutFavoriteCameraItemsIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    name?: string;
    parentId?: string;
    cameraIds?: Array<string>;
    type?: 1 | 2;
};

/**
 * @description 删除收藏组或收藏监控
 * @summary Request data types
 * @url [ delete ] /api/FavoriteCameraItemTypes/{type}/FavoriteCameraItems/{id}
 * @bizName videoFusionServiceBiz
 */
export type DeleteFavoriteCameraItemTypesTypeFavoriteCameraItemsIdReqTypeByVfs = {
    type: number;
    id: string;
    'X-version'?: string;
};

/**
 * @description 批量绑定收藏监控，subId为绑定 Id，subType为收藏主体类型，如收藏主体类型为电话填写phone，则subId为电话号码
 * @summary Request data types
 * @url [ put ] /api/FavoriteCameraItems/{subType}/{subId}/batch
 * @bizName videoFusionServiceBiz
 */
export type PutFavoriteCameraItemsSubTypeSubIdBatchReqTypeByVfs = {
    subId: string;
    subType: string;
    'X-version'?: string;
    cameraIds?: Array<string>;
};

/**
 * @description 同步国标下级域
 * @summary Request data types
 * @url [ post ] /api/GbConfigs/sync_domain
 * @bizName videoFusionServiceBiz
 */
export type PostGbConfigsSyncDomainReqTypeByVfs = {
    'X-version'?: string;
    regionId: string;
    groupId?: string;
};

/**
 * @description 修改国标下级域
 * @summary Request data types
 * @url [ put ] /api/GbConfigs/domains/{id}
 * @bizName videoFusionServiceBiz
 */
export type PutGbConfigsDomainsIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    heartbeadCycle?: number;
    heartbeadTimeoutCount?: number;
    ip: string;
    name: string;
    needAuth?: number;
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
    isStateNotifyFromDomain?: boolean;
    extension?: Record<string, any>;
    fullSyncRetainCount?: number;
    dirSyncRetainCount?: number;
    incrementSyncRetainCount?: number;
    gbProtocolVersion?: 0 | 1;
    enableRtpSinglePort?: boolean;
    enableRealmAddress?: boolean;
    enableSsrcCheck?: boolean;
};

/**
 * @description 查询国标下级域详情
 * @summary Request data types
 * @url [ get ] /api/GbConfigs/domains/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetGbConfigsDomainsIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询国标下级域详情
 * @summary Response data types
 * @url [ get ] /api/GbConfigs/domains/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetGbConfigsDomainsIdResTypeByVfs = {
    activeRegister: boolean;
    civilCode: string;
    gbId: string;
    heartBeadCycle: number;
    heartBeadTimeoutCount: number;
    ip: string;
    manufacturer: number;
    model: string;
    name: string;
    needAuth: number;
    networkType: number;
    password: string;
    sipPort: number;
    status: number;
    type: number;
    userName: string;
    taskStatus: 0 | 1 | 2 | 3 | 4;
    timeRemaining: number;
    progress: number;
    catalogsNum: number;
    actualCatalogsNum: number;
    rtpRecvType: 0 | 1 | 2;
    rtpSendType: 0 | 1 | 2;
    sipTransProtocol: 0 | 1;
    isStateNotifyFromDomain: boolean;
    stateDuration: string;
    lastStateChangedTime: string;
    extension: Record<string, any>;
    needMapping: boolean;
    sipMappedAddress: string;
    mediaMappedAddress: string;
    fullSyncRetainCount: number;
    dirSyncRetainCount: number;
    incrementSyncRetainCount: number;
    gbProtocolVersion: 0 | 1;
    enableRtpSinglePort: boolean;
    enableRealmAddress: boolean;
    enableSsrcCheck: boolean;
};

/**
 * @description 分页查询下级域（同步的详细信息）
 * @summary Request data types
 * @url [ get ] /api/GbConfigs/domains
 * @bizName videoFusionServiceBiz
 */
export type GetGbConfigsDomainsReqTypeByVfs = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页查询下级域（同步的详细信息）
 * @summary Response data types
 * @url [ get ] /api/GbConfigs/domains
 * @bizName videoFusionServiceBiz
 */
export type GetGbConfigsDomainsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        jobId: string;
        gbId: string;
        ip: string;
        name: string;
        sipPort: number;
        status: number;
        type: number;
        endTime: string;
        startTime: string;
        syncStatus: 0 | 1 | 2 | 3 | 4;
        timeRemaining: number;
        progress: number;
        result: number;
        onlineNum: number;
        catalogsNum: number;
        actualCatalogsNum: number;
        syncNum: number;
        expiredCameraCount: number;
        hasConflictData: boolean;
        stateDuration: string;
        lastStateChangedTime: string;
    }>;
};

/**
 * @description 添加下级域接口
 * @summary Request data types
 * @url [ post ] /api/GbConfigs/domains
 * @bizName videoFusionServiceBiz
 */
export type PostGbConfigsDomainsReqTypeByVfs = {
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
    needAuth?: number;
    password?: string;
    needMapping?: boolean;
    sipMappedAddress?: string;
    mediaMappedAddress?: string;
    networkType?: 1 | 2;
    sipPort: number;
    type?: 2 | 113 | 114 | 118 | 131 | 300;
    userName?: string;
    rtpRecvType?: 0 | 1 | 2;
    rtpSendType?: 0 | 1 | 2;
    sipTransProtocol?: 0 | 1;
    isStateNotifyFromDomain?: boolean;
    extension?: Record<string, any>;
    fullSyncRetainCount?: number;
    dirSyncRetainCount?: number;
    incrementSyncRetainCount?: number;
    gbProtocolVersion?: 0 | 1;
    enableRtpSinglePort?: boolean;
    enableRealmAddress?: boolean;
    enableSsrcCheck?: boolean;
};

/**
 * @description 添加下级域接口
 * @summary Response data types
 * @url [ post ] /api/GbConfigs/domains
 * @bizName videoFusionServiceBiz
 */
export type PostGbConfigsDomainsResTypeByVfs = {
    activeRegister: boolean;
    civilCode: string;
    gbId: string;
    heartBeadCycle: number;
    heartBeadTimeoutCount: number;
    ip: string;
    manufacturer: number;
    model: string;
    name: string;
    needAuth: number;
    networkType: number;
    password: string;
    sipPort: number;
    status: number;
    type: number;
    userName: string;
    taskStatus: 0 | 1 | 2 | 3 | 4;
    timeRemaining: number;
    progress: number;
    catalogsNum: number;
    actualCatalogsNum: number;
    rtpRecvType: 0 | 1 | 2;
    rtpSendType: 0 | 1 | 2;
    sipTransProtocol: 0 | 1;
    isStateNotifyFromDomain: boolean;
    stateDuration: string;
    lastStateChangedTime: string;
    extension: Record<string, any>;
    needMapping: boolean;
    sipMappedAddress: string;
    mediaMappedAddress: string;
    fullSyncRetainCount: number;
    dirSyncRetainCount: number;
    incrementSyncRetainCount: number;
    gbProtocolVersion: 0 | 1;
    enableRtpSinglePort: boolean;
    enableRealmAddress: boolean;
    enableSsrcCheck: boolean;
};

/**
 * @description 获取未管理的下级域
 * @summary Request data types
 * @url [ get ] /api/GbConfigs/unused_domains
 * @bizName videoFusionServiceBiz
 */
export type GetGbConfigsUnusedDomainsReqTypeByVfs = {
    'X-version'?: string;
};

/**
 * @description 获取未管理的下级域
 * @summary Response data types
 * @url [ get ] /api/GbConfigs/unused_domains
 * @bizName videoFusionServiceBiz
 */
export type GetGbConfigsUnusedDomainsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        gbId: string;
        serverIp: string;
        serverPort: string;
    }>;
};

/**
 * @description 批量删除国标下级域
 * @summary Request data types
 * @url [ post ] /api/GbConfigs/domains/batch
 * @bizName videoFusionServiceBiz
 */
export type PostGbConfigsDomainsBatchReqTypeByVfs = {
    'X-version'?: string;
    gbIds?: Array<string>;
};

/**
 * @description 清空下级域所有数据
 * @summary Request data types
 * @url [ delete ] /api/GbConfigs/domains/{id}/data
 * @bizName videoFusionServiceBiz
 */
export type DeleteGbConfigsDomainsIdDataReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 同步历史记录分页查询
 * @summary Request data types
 * @url [ get ] /api/GbConfigs/domains/{id}/syncTaskHistories
 * @bizName videoFusionServiceBiz
 */
export type GetGbConfigsDomainsIdSyncTaskHistoriesReqTypeByVfs = {
    id: string;
    SyncType?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 同步历史记录分页查询
 * @summary Response data types
 * @url [ get ] /api/GbConfigs/domains/{id}/syncTaskHistories
 * @bizName videoFusionServiceBiz
 */
export type GetGbConfigsDomainsIdSyncTaskHistoriesResTypeByVfs = {
    totalCount: number;
    records: Array<{
        taskId: string;
        startTime: string;
        endTime: string;
        status: 0 | 1 | 2 | 3 | 4;
        result: number;
        sipServerId: string;
        name: string;
        syncType: 0 | 1 | 2;
        hasConflictData: boolean;
    }>;
};

/**
 * @description 同步记录数据多条件查询,传入id为同步任务的id
 * @summary Request data types
 * @url [ get ] /api/GbConfigs/domains/syncTaskHistories/{id}/records
 * @bizName videoFusionServiceBiz
 */
export type GetGbConfigsDomainsSyncTaskHistoriesIdRecordsReqTypeByVfs = {
    id: string;
    Keyword?: string;
    UpdateStatus?: number;
    Type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 同步记录数据多条件查询,传入id为同步任务的id
 * @summary Response data types
 * @url [ get ] /api/GbConfigs/domains/syncTaskHistories/{id}/records
 * @bizName videoFusionServiceBiz
 */
export type GetGbConfigsDomainsSyncTaskHistoriesIdRecordsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: number;
        deviceId: string;
        cameraId: string;
        name: string;
        originalName: string;
        aliasName: string;
        manufacture: string;
        model: string;
        owner: string;
        civilCode: string;
        block: string;
        address: string;
        parental: number;
        parentId: string;
        parentName: string;
        type: 0 | 1;
        safetyWay: number;
        registerWay: number;
        certNum: string;
        certifiable: number;
        errCode: number;
        endTime: string;
        secrecy: number;
        ipAddress: string;
        port: number;
        password: string;
        status: number;
        longitude: number;
        latitude: number;
        ptzType: number;
        positionType: number;
        roomType: number;
        useType: number;
        supplyLightType: number;
        directionType: number;
        resolution: string;
        businessGroupId: string;
        downloadSpeed: string;
        svcSpaceSupportMode: number;
        svcTimeSupportMode: number;
        comeFrom: string;
        userName: string;
        taskId: string;
        updateStatus: 0 | 1 | 2 | 3;
        conflictType: number;
    }>;
};

/**
 * @description 查询过期监控与监控组
 * @summary Request data types
 * @url [ get ] /api/GbConfigs/domains/{id}/expired
 * @bizName videoFusionServiceBiz
 */
export type GetGbConfigsDomainsIdExpiredReqTypeByVfs = {
    id: string;
    Type?: number;
    StartTime?: string;
    EndTime?: string;
    Keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 查询过期监控与监控组
 * @summary Response data types
 * @url [ get ] /api/GbConfigs/domains/{id}/expired
 * @bizName videoFusionServiceBiz
 */
export type GetGbConfigsDomainsIdExpiredResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: string;
        gbId: string;
        name: string;
        type: 0 | 1;
        groupName: string;
        lastSyncTime: string;
    }>;
};

/**
 * @description 删除过期监控与监控组
 * @summary Request data types
 * @url [ post ] /api/GbConfigs/domains/{id}/expired/batch
 * @bizName videoFusionServiceBiz
 */
export type PostGbConfigsDomainsIdExpiredBatchReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    type?: 0 | 1 | 2;
    records?: Array<{
        id: string;
        type: 0 | 1;
    }>;
    timeRange?: number;
};

/**
 * @description 解决同步冲突
 * @summary Request data types
 * @url [ put ] /api/GbConfigs/domains/{id}/ResolveConflict
 * @bizName videoFusionServiceBiz
 */
export type PutGbConfigsDomainsIdResolveConflictReqTypeByVfs = {
    id: number;
    'X-version'?: string;
    conflictType?: number;
};

/**
 * @description 分级调度操作
 * @summary Request data types
 * @url [ post ] /api/GradingDispatch
 * @bizName videoFusionServiceBiz
 */
export type PostGradingDispatchReqTypeByVfs = {
    'X-version'?: string;
    version: string;
    id: string;
    bizName: string;
    bizData: Record<string, any>;
    sourceId: string;
    destinationId: string;
    type: number;
    timeout: number;
};

/**
 * @description 条件查询视频历史拉流数据
 * @summary Request data types
 * @url [ get ] /api/HistoryCameraPulls/search
 * @bizName videoFusionServiceBiz
 */
export type GetHistoryCameraPullsSearchReqTypeByVfs = {
    Keyword?: string;
    TraceId?: string;
    BusinessName?: string;
    IsSuccess?: boolean;
    StartTime?: string;
    EndTime?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 条件查询视频历史拉流数据
 * @summary Response data types
 * @url [ get ] /api/HistoryCameraPulls/search
 * @bizName videoFusionServiceBiz
 */
export type GetHistoryCameraPullsSearchResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: number;
        businessName: string;
        streamId: string;
        startTime: string;
        endTime: string;
        deviceId: string;
        deviceName: string;
        mediaServerId: string;
        mediaServerName: string;
        firstPullTime: number;
        isSuccess: boolean;
        failReason: number;
        endReason: string;
        videoEncoder: 0 | 1;
        client: string;
        terminal: string;
        traceId: string;
        areaCode: string;
        userId: string;
        userName: string;
    }>;
};

/**
 * @description 获取指定历史拉流记录的详细信息
 * @summary Request data types
 * @url [ get ] /api/HistoryCameraPulls/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetHistoryCameraPullsIdReqTypeByVfs = {
    id: string;
    Date?: string;
    'X-version'?: string;
};

/**
 * @description 获取指定历史拉流记录的详细信息
 * @summary Response data types
 * @url [ get ] /api/HistoryCameraPulls/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetHistoryCameraPullsIdResTypeByVfs = {
    fps: number;
    resolution: 0 | 1 | 2 | 3;
    audioFormat: 0 | 1 | 2 | 3 | 4 | 5;
    client: string;
    localSdpInfo: string;
    remoteSdpInfo: string;
    sdpDescription: string;
    playUrl: {
        rtspUrl: string;
        flvUrl: string;
        wsUrl: string;
        rtmpUrl: string;
        webRtc: string;
        relateWebRtcUrl: string;
        relateFlvUrl: string;
        relateWsUrl: string;
    };
    files: Array<{
        name: string;
        recordId: number;
        createTime: string;
        fileId: Array<string>;
        type: 0 | 1 | 2 | 3 | 4;
        endTime: string;
    }>;
    mediaReceiveIp: string;
    mediaReceivePort: number;
    reStreamId: number;
    responseInviteTime: number;
    terminalIp: string;
    terminalPort: number;
    terminalType: number;
    videoRequestFlowRecords: Array<{
        component: string;
        desc: string;
        isException: boolean;
        time: string;
        traceId: string;
    }>;
    failStreamPath: 0 | 1 | 2 | 3;
    id: number;
    businessName: string;
    streamId: string;
    startTime: string;
    endTime: string;
    deviceId: string;
    deviceName: string;
    mediaServerId: string;
    mediaServerName: string;
    firstPullTime: number;
    isSuccess: boolean;
    failReason: number;
    endReason: string;
    videoEncoder: 0 | 1;
    terminal: string;
    traceId: string;
    areaCode: string;
    userId: string;
    userName: string;
};

/**
 * @description 条件查询视频历史拉流数据
 * @summary Request data types
 * @url [ get ] /api/HistoryCameraPulls
 * @bizName videoFusionServiceBiz
 */
export type GetHistoryCameraPullsReqTypeByVfs = {
    StartTime: string;
    StopTime: string;
    StreamId?: number;
    DeviceId?: string;
    Keyword?: string;
    ClientAddress?: string;
    ReceiveAddress?: string;
    ForwardAddress?: string;
    Result?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 条件查询视频历史拉流数据
 * @summary Response data types
 * @url [ get ] /api/HistoryCameraPulls
 * @bizName videoFusionServiceBiz
 */
export type GetHistoryCameraPullsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        deviceId: string;
        deviceName: string;
        streamId: number;
        clientAddress: string;
        clientPort: number;
        receiveAddress: string;
        receivePort: number;
        forwardAddress: string;
        forwardPort: number;
        startTime: string;
        stopTime: string;
        stopReason: string;
        result: number;
        errorInfo: string;
    }>;
};

/**
 * @description 获取所有的标签
 * @summary Request data types
 * @url [ get ] /api/Label
 * @bizName videoFusionServiceBiz
 */
export type GetLabelReqTypeByVfs = {
    keyWord?: string;
    'X-version'?: string;
};

/**
 * @description 获取所有的标签
 * @summary Response data types
 * @url [ get ] /api/Label
 * @bizName videoFusionServiceBiz
 */
export type GetLabelResTypeByVfs = {
    totalCount: number;
    records: Array<{
        cameraTotal: number;
        onlineCameraTotal: number;
        createdTime: string;
        id: number;
        title: string;
        color: string;
        description: string;
    }>;
};

/**
 * @description 创建新标签
 * @summary Request data types
 * @url [ post ] /api/Label
 * @bizName videoFusionServiceBiz
 */
export type PostLabelReqTypeByVfs = {
    'X-version'?: string;
    title: string;
    color: string;
    description?: string;
};

/**
 * @description 创建新标签
 * @summary Response data types
 * @url [ post ] /api/Label
 * @bizName videoFusionServiceBiz
 */
export type PostLabelResTypeByVfs = {
    id: number;
    title: string;
    color: string;
    description: string;
};

/**
 * @description 修改指定标签
 * @summary Request data types
 * @url [ put ] /api/Label/{id}
 * @bizName videoFusionServiceBiz
 */
export type PutLabelIdReqTypeByVfs = {
    id: number;
    'X-version'?: string;
    title?: string;
    color?: string;
    description?: string;
};

/**
 * @description 删除指定标签
 * @summary Request data types
 * @url [ delete ] /api/Label/{id}
 * @bizName videoFusionServiceBiz
 */
export type DeleteLabelIdReqTypeByVfs = {
    id: number;
    'X-version'?: string;
};

/**
 * @description 批量删除标签
 * @summary Request data types
 * @url [ delete ] /api/Label/batch
 * @bizName videoFusionServiceBiz
 */
export type DeleteLabelBatchReqTypeByVfs = {
    'X-version'?: string;
    ids: Array<number>;
};

/**
 * @description 批量设置监控或监控组下监控的标签
 * @summary Request data types
 * @url [ post ] /api/Label/camera/batch
 * @bizName videoFusionServiceBiz
 */
export type PostLabelCameraBatchReqTypeByVfs = {
    'X-version'?: string;
    labelIds: Array<number>;
    groupIds?: Array<string>;
    cameraIds?: Array<string>;
};

/**
 * @description 批量删除监控或监控组下监控的标签
 * @summary Request data types
 * @url [ delete ] /api/Label/camera/batch
 * @bizName videoFusionServiceBiz
 */
export type DeleteLabelCameraBatchReqTypeByVfs = {
    'X-version'?: string;
    labelIds: Array<number>;
    groupIds?: Array<string>;
    cameraIds?: Array<string>;
};

/**
 * @description 导出标签
 * @summary Request data types
 * @url [ post ] /api/Label/export
 * @bizName videoFusionServiceBiz
 */
export type PostLabelExportReqTypeByVfs = {
    'X-version'?: string;
    ids: Array<string>;
};

/**
 * @description 导出标签
 * @summary Response data types
 * @url [ post ] /api/Label/export
 * @bizName videoFusionServiceBiz
 */
export type PostLabelExportResTypeByVfs = {
    label: Array<{
        id: number;
        title: string;
        color: string;
        description: string;
    }>;
};

/**
 * @description 导入标签
 * @summary Request data types
 * @url [ post ] /api/Label/import
 * @bizName videoFusionServiceBiz
 */
export type PostLabelImportReqTypeByVfs = {
    'X-version'?: string;
    label?: Array<{
        id: number;
        title: string;
        color: string;
        description: string;
    }>;
};

/**
 * @description 分页查询直播列表
 * @summary Request data types
 * @url [ get ] /api/Lives
 * @bizName videoFusionServiceBiz
 */
export type GetLivesReqTypeByVfs = {
    ContactId?: string;
    LiveStatus?: number;
    KeyWord?: string;
    PlayUrlShowType?: number;
    AppName?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页查询直播列表
 * @summary Response data types
 * @url [ get ] /api/Lives
 * @bizName videoFusionServiceBiz
 */
export type GetLivesResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: string;
        stream: string;
        status: 0 | 1 | 2 | 3;
        liveType: 0 | 1;
        title: string;
        description: string;
        userId: string;
        userAccount: string;
        userName: string;
        createTime: string;
        rtmpUrl: string;
        flvUrl: string;
        rtspUrl: string;
        wsUrl: string;
        webRtcUrl: string;
        relateWsUrl: string;
        relateFlvUrl: string;
        relateWebRtcUrl: string;
        isGradingDispatch: boolean;
        appointment: string;
    }>;
};

/**
 * @description 主动打开联系人直播
 * @summary Request data types
 * @url [ put ] /api/Lives
 * @bizName videoFusionServiceBiz
 */
export type PutLivesReqTypeByVfs = {
    contactId: string;
    'X-version'?: string;
};

/**
 * @description 主动打开联系人直播
 * @summary Response data types
 * @url [ put ] /api/Lives
 * @bizName videoFusionServiceBiz
 */
export type PutLivesResTypeByVfs = {
    id: string;
    stream: string;
    status: 0 | 1 | 2 | 3;
    liveType: 0 | 1;
    title: string;
    description: string;
    userId: string;
    userAccount: string;
    userName: string;
    createTime: string;
    rtmpUrl: string;
    flvUrl: string;
    rtspUrl: string;
    wsUrl: string;
    webRtcUrl: string;
    relateWsUrl: string;
    relateFlvUrl: string;
    relateWebRtcUrl: string;
    isGradingDispatch: boolean;
    appointment: string;
};

/**
 * @description 创建直播
 * @summary Request data types
 * @url [ post ] /api/Lives
 * @bizName videoFusionServiceBiz
 */
export type PostLivesReqTypeByVfs = {
    'X-version'?: string;
    groupId?: string;
    appointment?: string;
    contactName?: string;
    contactId?: string;
    description: string;
    title: string;
    appName?: string;
};

/**
 * @description 创建直播
 * @summary Response data types
 * @url [ post ] /api/Lives
 * @bizName videoFusionServiceBiz
 */
export type PostLivesResTypeByVfs = {
    id: string;
    stream: string;
    status: 0 | 1 | 2 | 3;
    liveType: 0 | 1;
    title: string;
    description: string;
    userId: string;
    userAccount: string;
    userName: string;
    createTime: string;
    rtmpUrl: string;
    flvUrl: string;
    rtspUrl: string;
    wsUrl: string;
    webRtcUrl: string;
    relateWsUrl: string;
    relateFlvUrl: string;
    relateWebRtcUrl: string;
    isGradingDispatch: boolean;
    appointment: string;
};

/**
 * @description 主动打开联系人直播，可传入直播标题和描述等信息
 * @summary Request data types
 * @url [ put ] /api/Lives/open
 * @bizName videoFusionServiceBiz
 */
export type PutLivesOpenReqTypeByVfs = {
    contactId: string;
    'X-version'?: string;
    title?: string;
    description?: string;
};

/**
 * @description 主动打开联系人直播，可传入直播标题和描述等信息
 * @summary Response data types
 * @url [ put ] /api/Lives/open
 * @bizName videoFusionServiceBiz
 */
export type PutLivesOpenResTypeByVfs = {
    id: string;
    stream: string;
    status: 0 | 1 | 2 | 3;
    liveType: 0 | 1;
    title: string;
    description: string;
    userId: string;
    userAccount: string;
    userName: string;
    createTime: string;
    rtmpUrl: string;
    flvUrl: string;
    rtspUrl: string;
    wsUrl: string;
    webRtcUrl: string;
    relateWsUrl: string;
    relateFlvUrl: string;
    relateWebRtcUrl: string;
    isGradingDispatch: boolean;
    appointment: string;
};

/**
 * @description 向指定的直播用户发送互动语音
 * @summary Request data types
 * @url [ post ] /api/Lives/{stream}
 * @bizName videoFusionServiceBiz
 */
export type PostLivesStreamReqTypeByVfs = {
    stream: string;
    'X-version'?: string;
    base64StrAudio?: string;
};

/**
 * @description 获取指定的直播信息
 * @summary Request data types
 * @url [ get ] /api/Lives/{stream}
 * @bizName videoFusionServiceBiz
 */
export type GetLivesStreamReqTypeByVfs = {
    stream: string;
    'X-version'?: string;
};

/**
 * @description 获取指定的直播信息
 * @summary Response data types
 * @url [ get ] /api/Lives/{stream}
 * @bizName videoFusionServiceBiz
 */
export type GetLivesStreamResTypeByVfs = {
    id: string;
    stream: string;
    status: 0 | 1 | 2 | 3;
    liveType: 0 | 1;
    title: string;
    description: string;
    userId: string;
    userAccount: string;
    userName: string;
    createTime: string;
    rtmpUrl: string;
    flvUrl: string;
    rtspUrl: string;
    wsUrl: string;
    webRtcUrl: string;
    relateWsUrl: string;
    relateFlvUrl: string;
    relateWebRtcUrl: string;
    isGradingDispatch: boolean;
    appointment: string;
};

/**
 * @description 关闭指定流 Id 的直播
 * @summary Request data types
 * @url [ delete ] /api/Lives/{stream}
 * @bizName videoFusionServiceBiz
 */
export type DeleteLivesStreamReqTypeByVfs = {
    stream: string;
    'X-version'?: string;
};

/**
 * @description 获取历史直播的录屏信息
 * @summary Request data types
 * @url [ get ] /api/Lives/{stream}/video_records
 * @bizName videoFusionServiceBiz
 */
export type GetLivesStreamVideoRecordsReqTypeByVfs = {
    stream: string;
    'X-version'?: string;
};

/**
 * @description 获取历史直播的录屏信息
 * @summary Response data types
 * @url [ get ] /api/Lives/{stream}/video_records
 * @bizName videoFusionServiceBiz
 */
export type GetLivesStreamVideoRecordsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        baseMrl: string;
        endTime: number;
        startTime: number;
        stream: string;
        status: number;
        path: string;
        lbIndex: number;
        id: number;
    }>;
};

/**
 * @description 同步国标下级域
 * @summary Request data types
 * @url [ post ] /api/LowerDomains/sync
 * @bizName videoFusionServiceBiz
 */
export type PostLowerDomainsSyncReqTypeByVfs = {
    'X-version'?: string;
    regionId: string;
    groupId?: string;
};

/**
 * @description 修改国标下级域
 * @summary Request data types
 * @url [ put ] /api/LowerDomains/{id}
 * @bizName videoFusionServiceBiz
 */
export type PutLowerDomainsIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    heartbeadCycle?: number;
    heartbeadTimeoutCount?: number;
    ip: string;
    name: string;
    needAuth?: number;
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
    isStateNotifyFromDomain?: boolean;
    extension?: Record<string, any>;
    fullSyncRetainCount?: number;
    dirSyncRetainCount?: number;
    incrementSyncRetainCount?: number;
    gbProtocolVersion?: 0 | 1;
    enableRtpSinglePort?: boolean;
    enableRealmAddress?: boolean;
    enableSsrcCheck?: boolean;
};

/**
 * @description 查询国标下级域详情
 * @summary Request data types
 * @url [ get ] /api/LowerDomains/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetLowerDomainsIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询国标下级域详情
 * @summary Response data types
 * @url [ get ] /api/LowerDomains/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetLowerDomainsIdResTypeByVfs = {
    activeRegister: boolean;
    civilCode: string;
    gbId: string;
    heartBeadCycle: number;
    heartBeadTimeoutCount: number;
    ip: string;
    manufacturer: number;
    model: string;
    name: string;
    needAuth: number;
    networkType: number;
    password: string;
    sipPort: number;
    status: number;
    type: number;
    userName: string;
    taskStatus: 0 | 1 | 2 | 3 | 4;
    timeRemaining: number;
    progress: number;
    catalogsNum: number;
    actualCatalogsNum: number;
    rtpRecvType: 0 | 1 | 2;
    rtpSendType: 0 | 1 | 2;
    sipTransProtocol: 0 | 1;
    isStateNotifyFromDomain: boolean;
    stateDuration: string;
    lastStateChangedTime: string;
    extension: Record<string, any>;
    needMapping: boolean;
    sipMappedAddress: string;
    mediaMappedAddress: string;
    fullSyncRetainCount: number;
    dirSyncRetainCount: number;
    incrementSyncRetainCount: number;
    gbProtocolVersion: 0 | 1;
    enableRtpSinglePort: boolean;
    enableRealmAddress: boolean;
    enableSsrcCheck: boolean;
};

/**
 * @description 分页查询下级域（同步的详细信息）
 * @summary Request data types
 * @url [ get ] /api/LowerDomains
 * @bizName videoFusionServiceBiz
 */
export type GetLowerDomainsReqTypeByVfs = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页查询下级域（同步的详细信息）
 * @summary Response data types
 * @url [ get ] /api/LowerDomains
 * @bizName videoFusionServiceBiz
 */
export type GetLowerDomainsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        jobId: string;
        gbId: string;
        ip: string;
        name: string;
        sipPort: number;
        status: number;
        type: number;
        endTime: string;
        startTime: string;
        syncStatus: 0 | 1 | 2 | 3 | 4;
        timeRemaining: number;
        progress: number;
        result: number;
        onlineNum: number;
        catalogsNum: number;
        actualCatalogsNum: number;
        syncNum: number;
        expiredCameraCount: number;
        hasConflictData: boolean;
        stateDuration: string;
        lastStateChangedTime: string;
    }>;
};

/**
 * @description 添加下级域接口
 * @summary Request data types
 * @url [ post ] /api/LowerDomains
 * @bizName videoFusionServiceBiz
 */
export type PostLowerDomainsReqTypeByVfs = {
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
    needAuth?: number;
    password?: string;
    needMapping?: boolean;
    sipMappedAddress?: string;
    mediaMappedAddress?: string;
    networkType?: 1 | 2;
    sipPort: number;
    type?: 2 | 113 | 114 | 118 | 131 | 300;
    userName?: string;
    rtpRecvType?: 0 | 1 | 2;
    rtpSendType?: 0 | 1 | 2;
    sipTransProtocol?: 0 | 1;
    isStateNotifyFromDomain?: boolean;
    extension?: Record<string, any>;
    fullSyncRetainCount?: number;
    dirSyncRetainCount?: number;
    incrementSyncRetainCount?: number;
    gbProtocolVersion?: 0 | 1;
    enableRtpSinglePort?: boolean;
    enableRealmAddress?: boolean;
    enableSsrcCheck?: boolean;
};

/**
 * @description 添加下级域接口
 * @summary Response data types
 * @url [ post ] /api/LowerDomains
 * @bizName videoFusionServiceBiz
 */
export type PostLowerDomainsResTypeByVfs = {
    activeRegister: boolean;
    civilCode: string;
    gbId: string;
    heartBeadCycle: number;
    heartBeadTimeoutCount: number;
    ip: string;
    manufacturer: number;
    model: string;
    name: string;
    needAuth: number;
    networkType: number;
    password: string;
    sipPort: number;
    status: number;
    type: number;
    userName: string;
    taskStatus: 0 | 1 | 2 | 3 | 4;
    timeRemaining: number;
    progress: number;
    catalogsNum: number;
    actualCatalogsNum: number;
    rtpRecvType: 0 | 1 | 2;
    rtpSendType: 0 | 1 | 2;
    sipTransProtocol: 0 | 1;
    isStateNotifyFromDomain: boolean;
    stateDuration: string;
    lastStateChangedTime: string;
    extension: Record<string, any>;
    needMapping: boolean;
    sipMappedAddress: string;
    mediaMappedAddress: string;
    fullSyncRetainCount: number;
    dirSyncRetainCount: number;
    incrementSyncRetainCount: number;
    gbProtocolVersion: 0 | 1;
    enableRtpSinglePort: boolean;
    enableRealmAddress: boolean;
    enableSsrcCheck: boolean;
};

/**
 * @description 获取未管理的下级域
 * @summary Request data types
 * @url [ get ] /api/LowerDomains/unused_domains
 * @bizName videoFusionServiceBiz
 */
export type GetLowerDomainsUnusedDomainsReqTypeByVfs = {
    'X-version'?: string;
};

/**
 * @description 获取未管理的下级域
 * @summary Response data types
 * @url [ get ] /api/LowerDomains/unused_domains
 * @bizName videoFusionServiceBiz
 */
export type GetLowerDomainsUnusedDomainsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        gbId: string;
        serverIp: string;
        serverPort: string;
    }>;
};

/**
 * @description 同步历史记录分页查询
 * @summary Request data types
 * @url [ get ] /api/LowerDomains/{id}/syncTaskHistories
 * @bizName videoFusionServiceBiz
 */
export type GetLowerDomainsIdSyncTaskHistoriesReqTypeByVfs = {
    id: string;
    SyncType?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 同步历史记录分页查询
 * @summary Response data types
 * @url [ get ] /api/LowerDomains/{id}/syncTaskHistories
 * @bizName videoFusionServiceBiz
 */
export type GetLowerDomainsIdSyncTaskHistoriesResTypeByVfs = {
    totalCount: number;
    records: Array<{
        taskId: string;
        startTime: string;
        endTime: string;
        status: 0 | 1 | 2 | 3 | 4;
        result: number;
        sipServerId: string;
        name: string;
        syncType: 0 | 1 | 2;
        hasConflictData: boolean;
    }>;
};

/**
 * @description 批量删除国标下级域
 * @summary Request data types
 * @url [ post ] /api/LowerDomains/batch
 * @bizName videoFusionServiceBiz
 */
export type PostLowerDomainsBatchReqTypeByVfs = {
    'X-version'?: string;
    gbIds?: Array<string>;
};

/**
 * @description 清空下级域所有数据
 * @summary Request data types
 * @url [ delete ] /api/LowerDomains/{id}/data
 * @bizName videoFusionServiceBiz
 */
export type DeleteLowerDomainsIdDataReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询指定同步历史记录
 * @summary Request data types
 * @url [ get ] /api/LowerDomains/syncTaskHistories/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetLowerDomainsSyncTaskHistoriesIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询指定同步历史记录
 * @summary Response data types
 * @url [ get ] /api/LowerDomains/syncTaskHistories/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetLowerDomainsSyncTaskHistoriesIdResTypeByVfs = {
    catalogsNum: number;
    actualCatalogsNum: number;
    addNum: number;
    updateNum: number;
    deleteNum: number;
    conflictNum: number;
    time: string;
    offlineNum: number;
    onlineNum: number;
    cameraTotal: number;
    groupTotal: number;
    groupId: string;
    groupName: string;
    cameraAddNum: number;
    cameraUpdateNum: number;
    cameraConflictNum: number;
    groupAddNum: number;
    groupUpdateNum: number;
    groupConflictNum: number;
    groupDeleteNum: number;
    cameraDeleteNum: number;
    timeRemaining: number;
    progress: number;
    taskId: string;
    startTime: string;
    endTime: string;
    status: 0 | 1 | 2 | 3 | 4;
    result: number;
    sipServerId: string;
    name: string;
    syncType: 0 | 1 | 2;
    hasConflictData: boolean;
};

/**
 * @description 同步记录数据多条件查询,传入id为同步任务的id
 * @summary Request data types
 * @url [ get ] /api/LowerDomains/syncTaskHistories/{id}/records
 * @bizName videoFusionServiceBiz
 */
export type GetLowerDomainsSyncTaskHistoriesIdRecordsReqTypeByVfs = {
    id: string;
    Keyword?: string;
    UpdateStatus?: number;
    Type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 同步记录数据多条件查询,传入id为同步任务的id
 * @summary Response data types
 * @url [ get ] /api/LowerDomains/syncTaskHistories/{id}/records
 * @bizName videoFusionServiceBiz
 */
export type GetLowerDomainsSyncTaskHistoriesIdRecordsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: number;
        deviceId: string;
        cameraId: string;
        name: string;
        originalName: string;
        aliasName: string;
        manufacture: string;
        model: string;
        owner: string;
        civilCode: string;
        block: string;
        address: string;
        parental: number;
        parentId: string;
        parentName: string;
        type: 0 | 1;
        safetyWay: number;
        registerWay: number;
        certNum: string;
        certifiable: number;
        errCode: number;
        endTime: string;
        secrecy: number;
        ipAddress: string;
        port: number;
        password: string;
        status: number;
        longitude: number;
        latitude: number;
        ptzType: number;
        positionType: number;
        roomType: number;
        useType: number;
        supplyLightType: number;
        directionType: number;
        resolution: string;
        businessGroupId: string;
        downloadSpeed: string;
        svcSpaceSupportMode: number;
        svcTimeSupportMode: number;
        comeFrom: string;
        userName: string;
        taskId: string;
        updateStatus: 0 | 1 | 2 | 3;
        conflictType: number;
    }>;
};

/**
 * @description 查询过期监控与监控组
 * @summary Request data types
 * @url [ get ] /api/LowerDomains/{id}/expired
 * @bizName videoFusionServiceBiz
 */
export type GetLowerDomainsIdExpiredReqTypeByVfs = {
    id: string;
    Type?: number;
    StartTime?: string;
    EndTime?: string;
    Keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 查询过期监控与监控组
 * @summary Response data types
 * @url [ get ] /api/LowerDomains/{id}/expired
 * @bizName videoFusionServiceBiz
 */
export type GetLowerDomainsIdExpiredResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: string;
        gbId: string;
        name: string;
        type: 0 | 1;
        groupName: string;
        lastSyncTime: string;
    }>;
};

/**
 * @description 重新计算过期数据
 * @summary Request data types
 * @url [ put ] /api/LowerDomains/{id}/expired
 * @bizName videoFusionServiceBiz
 */
export type PutLowerDomainsIdExpiredReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 删除过期监控与监控组
 * @summary Request data types
 * @url [ post ] /api/LowerDomains/{id}/expired/batch
 * @bizName videoFusionServiceBiz
 */
export type PostLowerDomainsIdExpiredBatchReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    type?: 0 | 1 | 2;
    records?: Array<{
        id: string;
        type: 0 | 1;
    }>;
    timeRange?: number;
};

/**
 * @description 解决同步冲突
 * @summary Request data types
 * @url [ put ] /api/LowerDomains/{id}/Conflict
 * @bizName videoFusionServiceBiz
 */
export type PutLowerDomainsIdConflictReqTypeByVfs = {
    id: number;
    'X-version'?: string;
    conflictType?: number;
};

/**
 * @description 分页获取下级域状态变更记录
 * @summary Request data types
 * @url [ get ] /api/LowerDomains/{id}/state/records
 * @bizName videoFusionServiceBiz
 */
export type GetLowerDomainsIdStateRecordsReqTypeByVfs = {
    id: string;
    Online?: boolean;
    StartTime?: string;
    EndTime?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页获取下级域状态变更记录
 * @summary Response data types
 * @url [ get ] /api/LowerDomains/{id}/state/records
 * @bizName videoFusionServiceBiz
 */
export type GetLowerDomainsIdStateRecordsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: number;
        gbId: string;
        status: 1 | 2;
        reason: string;
        createTime: string;
    }>;
};

/**
 * @description 获取全部媒体服务
 * @summary Request data types
 * @url [ get ] /api/MediaServers
 * @bizName videoFusionServiceBiz
 */
export type GetMediaServersReqTypeByVfs = {
    'X-version'?: string;
};

/**
 * @description 获取全部媒体服务
 * @summary Response data types
 * @url [ get ] /api/MediaServers
 * @bizName videoFusionServiceBiz
 */
export type GetMediaServersResTypeByVfs = {
    totalCount: number;
    records: Array<{
        cpu: number;
        httpPort: number;
        interactProtocol: string;
        mediaId: string;
        mem: number;
        name: string;
        network: number;
        networkSpace: string;
        rtmpPort: number;
        rtspPort: number;
        selfHttpIp: string;
        selfHttpPort: number;
        serverId: string;
        serverIp: string;
        sessionCount: number;
        streamCount: number;
        webCodecsPort: number;
        webrtcPort: number;
        webrtcTcpPort: number;
        rtpSendPortRange: string;
        rtpReceivePortRange: string;
        memTotal: number;
        networkTx: number;
        networkRx: number;
        selfCpu: number;
        selfMem: number;
        status: number;
    }>;
};

/**
 * @description 查询某个流媒体实时拉流记录
 * @summary Request data types
 * @url [ get ] /api/MediaSessions
 * @bizName videoFusionServiceBiz
 */
export type GetMediaSessionsReqTypeByVfs = {
    MediaServerId?: string;
    Keyword?: string;
    VideoEncoder?: number;
    Resolution?: number;
    BusinessName?: string;
    AudioFormat?: number;
    Order?: string;
    Desc?: boolean;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 查询某个流媒体实时拉流记录
 * @summary Response data types
 * @url [ get ] /api/MediaSessions
 * @bizName videoFusionServiceBiz
 */
export type GetMediaSessionsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        averageBitRate: number;
        bitRate: number;
        business: number;
        clientId: string;
        clientIp: string;
        clientPort: number;
        clientType: number;
        createTime: string;
        description: string;
        devName: string;
        devType: number;
        devIp: string;
        lossRate: number;
        mCid: number;
        mediaRecvIp: string;
        mediaRecvPort: number;
        mediaSendIp: string;
        mediaSendPort: number;
        recvStreamType: number;
        recvTransType: number;
        sendStreamType: number;
        snedTransType: number;
        sessionStatus: number;
        codeType: number;
        audioFormat: number;
    }>;
};

/**
 * @description 结束拉流
 * @summary Request data types
 * @url [ delete ] /api/MediaSessions
 * @bizName videoFusionServiceBiz
 */
export type DeleteMediaSessionsReqTypeByVfs = {
    'X-version'?: string;
    streamId: string;
    mediaServerId: string;
};

/**
 * @description 查询具体流id的实时拉流详情信息
 * @summary Request data types
 * @url [ get ] /api/MediaSessions/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetMediaSessionsIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询具体流id的实时拉流详情信息
 * @summary Response data types
 * @url [ get ] /api/MediaSessions/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetMediaSessionsIdResTypeByVfs = {
    description: string;
    terminalType: number;
    terminalIp: string;
    terminalPort: number;
    mediaReceiveIp: string;
    mediaReceivePort: number;
    receiveStreamType: number;
    receiveTransType: number;
    sessionStatus: number;
    localSdpInfo: string;
    remoteSdpInfo: string;
    sdpDescription: string;
    fps: number;
    playUrl: {
        rtspUrl: string;
        flvUrl: string;
        wsUrl: string;
        rtmpUrl: string;
        webRtc: string;
        relateWebRtcUrl: string;
        relateFlvUrl: string;
        relateWsUrl: string;
    };
    businessName: string;
    bitRate: number;
    startTime: string;
    deviceName: string;
    deviceId: string;
    lossPackets: number;
    receivedPackets: number;
    cId: string;
    videoEncoder: 0 | 1;
    audioFormat: 0 | 1 | 2 | 3 | 4 | 5;
    totalReaderCount: number;
    mediaServerId: string;
    mediaServerName: string;
    resolution: 0 | 1 | 2 | 3;
    clients: Array<{
        clientId: string;
        clientIp: string;
        clientPort: number;
        clientType: number;
        mediaSendIp: string;
        mediaSendPort: number;
        sendStreamType: number;
        sendTransType: number;
        failStreamPath: 0 | 1 | 2 | 3;
        userId: string;
        userName: string;
    }>;
    terminal: string;
    stream: string;
};

/**
 * @description 实时拉流记录统计
 * @summary Request data types
 * @url [ get ] /api/MediaSessions/statistics
 * @bizName videoFusionServiceBiz
 */
export type GetMediaSessionsStatisticsReqTypeByVfs = {
    'X-version'?: string;
};

/**
 * @description 实时拉流记录统计
 * @summary Response data types
 * @url [ get ] /api/MediaSessions/statistics
 * @bizName videoFusionServiceBiz
 */
export type GetMediaSessionsStatisticsResTypeByVfs = {
    appLiveCount: number;
    cameraCount: number;
    meetLiveCount: number;
    onlinePeopleCount: number;
    pullStreamCount: number;
    eventReportCount: number;
};

/**
 * @description 流录制接口
 * @summary Request data types
 * @url [ post ] /api/Recording
 * @bizName videoFusionServiceBiz
 */
export type PostRecordingReqTypeByVfs = {
    'X-version'?: string;
    streamId: string;
    name?: string;
    associationId?: string;
};

/**
 * @description 流录制接口
 * @summary Response data types
 * @url [ post ] /api/Recording
 * @bizName videoFusionServiceBiz
 */
export type PostRecordingResTypeByVfs = {
    id: string;
    streamId: string;
    startTime: string;
    endTime: string;
    userId: string;
    files: Array<string>;
};

/**
 * @description 获取当前的流的录制信息状态
 * @summary Request data types
 * @url [ get ] /api/Recording
 * @bizName videoFusionServiceBiz
 */
export type GetRecordingReqTypeByVfs = {
    StreamId: string;
    'X-version'?: string;
};

/**
 * @description 获取当前的流的录制信息状态
 * @summary Response data types
 * @url [ get ] /api/Recording
 * @bizName videoFusionServiceBiz
 */
export type GetRecordingResTypeByVfs = {
    id: number;
    streamId: string;
    associationId: string;
    createTime: string;
    status: 0 | 1 | 2 | 3;
    createTimeOffset: number;
};

/**
 * @description 录制状态修改
 * @summary Request data types
 * @url [ put ] /api/Recording/{streamId}/status
 * @bizName videoFusionServiceBiz
 */
export type PutRecordingStreamIdStatusReqTypeByVfs = {
    streamId: string;
    'X-version'?: string;
    status: 0 | 1 | 2 | 3;
};

/**
 * @description 删除指定id的记录
 * @summary Request data types
 * @url [ delete ] /api/Recording/{id}
 * @bizName videoFusionServiceBiz
 */
export type DeleteRecordingIdReqTypeByVfs = {
    id: number;
    'X-version'?: string;
};

/**
 * @description 批量删除
 * @summary Request data types
 * @url [ post ] /api/Recording/batch/delete
 * @bizName videoFusionServiceBiz
 */
export type PostRecordingBatchDeleteReqTypeByVfs = {
    'X-version'?: string;
    deleteOperationType?: 0 | 1;
    ids: Array<number>;
    time?: number;
};

/**
 * @description 搜索录像截图操作记录以及文件信息
 * @summary Request data types
 * @url [ get ] /api/Recording/search
 * @bizName videoFusionServiceBiz
 */
export type GetRecordingSearchReqTypeByVfs = {
    KeyWord?: string;
    CameraId?: string;
    FileEntityType?: number;
    StartTime?: string;
    EndTime?: string;
    UserId?: string;
    IsUnderway?: boolean;
    FileRecordIds?: Array<string>;
    PlatformId?: string;
    AppName?: string;
    AssociationId?: string;
    VideoPictureResult?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 搜索录像截图操作记录以及文件信息
 * @summary Response data types
 * @url [ get ] /api/Recording/search
 * @bizName videoFusionServiceBiz
 */
export type GetRecordingSearchResTypeByVfs = {
    totalCount: number;
    records: Array<{
        cameraId: string;
        cameraName: string;
        messages: Array<string>;
        isSucceed: boolean;
        appName: string;
        fileSize: number;
        pullUrls: {
            rtspUrl: string;
            flvUrl: string;
            wsUrl: string;
            rtmpUrl: string;
            webRtc: string;
            relateWebRtcUrl: string;
            relateFlvUrl: string;
            relateWsUrl: string;
        };
        downloadUrl: {
            mp4Url: string;
            tsUrl: string;
        };
        name: string;
        recordId: number;
        createTime: string;
        fileId: Array<string>;
        type: 0 | 1 | 2 | 3 | 4;
        endTime: string;
    }>;
};

/**
 * @description 获取信令
 * @summary Request data types
 * @url [ get ] /api/Signals
 * @bizName videoFusionServiceBiz
 */
export type GetSignalsReqTypeByVfs = {
    'X-version'?: string;
};

/**
 * @description 获取信令
 * @summary Response data types
 * @url [ get ] /api/Signals
 * @bizName videoFusionServiceBiz
 */
export type GetSignalsResTypeByVfs = {
    isCivilCodeForParent: number;
    isServerIpFromConfigFile: number;
    dbHost: string;
    dbPassword: string;
    dbPort: number;
    dbSchema: string;
    dbUserName: string;
    gbDeviceType: number;
    gbHeartbeatInterval: number;
    gbHeartbeatTimeoutTimes: number;
    gbPassword: string;
    gbServerId: string;
    gbServerIp: string;
    gbServerPort: number;
    httpPort: number;
    isAuth: number;
    localCivilCode: string;
    sipProtocolTransportType: string;
    threadPoolSize: number;
    websocketPort: number;
};

/**
 * @description 修改信令
 * @summary Request data types
 * @url [ put ] /api/Signals
 * @bizName videoFusionServiceBiz
 */
export type PutSignalsReqTypeByVfs = {
    'X-version'?: string;
    gbServerId?: string;
    gbServerIp?: string;
    gbServerPort?: number;
    sipProtocolTransportType?: string;
};

/**
 * @description 统计监控总数（包括所有监控总数、质量优、良、差、故障的总数）
 * @summary Request data types
 * @url [ get ] /api/Statistics/cameras
 * @bizName videoFusionServiceBiz
 */
export type GetStatisticsCamerasReqTypeByVfs = {
    'X-version'?: string;
};

/**
 * @description 统计监控总数（包括所有监控总数、质量优、良、差、故障的总数）
 * @summary Response data types
 * @url [ get ] /api/Statistics/cameras
 * @bizName videoFusionServiceBiz
 */
export type GetStatisticsCamerasResTypeByVfs = {
    amount: number;
    excellent: number;
    good: number;
    bad: number;
    fault: number;
    online: number;
};

/**
 * @description 统计故障监控的总数（包括故障类型统计）
 * @summary Request data types
 * @url [ get ] /api/Statistics/cameras/fault
 * @bizName videoFusionServiceBiz
 */
export type GetStatisticsCamerasFaultReqTypeByVfs = {
    'X-version'?: string;
};

/**
 * @description 统计故障监控的总数（包括故障类型统计）
 * @summary Response data types
 * @url [ get ] /api/Statistics/cameras/fault
 * @bizName videoFusionServiceBiz
 */
export type GetStatisticsCamerasFaultResTypeByVfs = {
    amount: number;
    noFlow: number;
    noResponse: number;
    internalError: number;
};

/**
 * @description 统计质量差的监控总数（包括质量差类型统计）
 * @summary Request data types
 * @url [ get ] /api/Statistics/cameras/bad
 * @bizName videoFusionServiceBiz
 */
export type GetStatisticsCamerasBadReqTypeByVfs = {
    'X-version'?: string;
};

/**
 * @description 统计质量差的监控总数（包括质量差类型统计）
 * @summary Response data types
 * @url [ get ] /api/Statistics/cameras/bad
 * @bizName videoFusionServiceBiz
 */
export type GetStatisticsCamerasBadResTypeByVfs = {
    amount: number;
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

/**
 * @description 统计不同分辨率的监控总数
 * @summary Request data types
 * @url [ get ] /api/Statistics/cameras/resolution
 * @bizName videoFusionServiceBiz
 */
export type GetStatisticsCamerasResolutionReqTypeByVfs = {
    'X-version'?: string;
};

/**
 * @description 统计不同分辨率的监控总数
 * @summary Response data types
 * @url [ get ] /api/Statistics/cameras/resolution
 * @bizName videoFusionServiceBiz
 */
export type GetStatisticsCamerasResolutionResTypeByVfs = {
    amount: number;
    hd: number;
    fullHd: number;
    sd: number;
    uhd: number;
};

/**
 * @description 统计巡检历史走势
 * @summary Request data types
 * @url [ get ] /api/Statistics/detectionTasks/history
 * @bizName videoFusionServiceBiz
 */
export type GetStatisticsDetectionTasksHistoryReqTypeByVfs = {
    JobId?: string;
    BeginTime: string;
    EndTime: string;
    'X-version'?: string;
};

/**
 * @description 统计巡检历史走势
 * @summary Response data types
 * @url [ get ] /api/Statistics/detectionTasks/history
 * @bizName videoFusionServiceBiz
 */
export type GetStatisticsDetectionTasksHistoryResTypeByVfs = {
    totalCount: number;
    records: Array<{
        excellent: number;
        good: number;
        bad: number;
        fault: number;
        time: string;
    }>;
};

/**
 * @description 统计质量差的监控总数（包括质量差类型统计）
 * @summary Request data types
 * @url [ get ] /api/Statistics/detectionTasks/{jobId}/quality
 * @bizName videoFusionServiceBiz
 */
export type GetStatisticsDetectionTasksJobIdQualityReqTypeByVfs = {
    jobId: string;
    'X-version'?: string;
};

/**
 * @description 统计质量差的监控总数（包括质量差类型统计）
 * @summary Response data types
 * @url [ get ] /api/Statistics/detectionTasks/{jobId}/quality
 * @bizName videoFusionServiceBiz
 */
export type GetStatisticsDetectionTasksJobIdQualityResTypeByVfs = {
    amount: number;
    excellent: number;
    good: number;
    bad: number;
    fault: number;
    online: number;
};

/**
 * @description 统计质量差的监控总数（包括质量差类型统计）
 * @summary Request data types
 * @url [ get ] /api/Statistics/detectionTasks/{jobId}/bad
 * @bizName videoFusionServiceBiz
 */
export type GetStatisticsDetectionTasksJobIdBadReqTypeByVfs = {
    jobId: string;
    'X-version'?: string;
};

/**
 * @description 统计质量差的监控总数（包括质量差类型统计）
 * @summary Response data types
 * @url [ get ] /api/Statistics/detectionTasks/{jobId}/bad
 * @bizName videoFusionServiceBiz
 */
export type GetStatisticsDetectionTasksJobIdBadResTypeByVfs = {
    amount: number;
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

/**
 * @description 统计巡检详情不同故障类型监控数量
 * @summary Request data types
 * @url [ get ] /api/Statistics/detectionTasks/{jobId}/fault
 * @bizName videoFusionServiceBiz
 */
export type GetStatisticsDetectionTasksJobIdFaultReqTypeByVfs = {
    jobId: string;
    'X-version'?: string;
};

/**
 * @description 统计巡检详情不同故障类型监控数量
 * @summary Response data types
 * @url [ get ] /api/Statistics/detectionTasks/{jobId}/fault
 * @bizName videoFusionServiceBiz
 */
export type GetStatisticsDetectionTasksJobIdFaultResTypeByVfs = {
    amount: number;
    noFlow: number;
    noResponse: number;
    internalError: number;
};

/**
 * @description 该接口提供收藏夹总数(包括子收藏夹)
 * @summary Request data types
 * @url [ get ] /api/Statistics/favoriteCameraGroup
 * @bizName videoFusionServiceBiz
 */
export type GetStatisticsFavoriteCameraGroupReqTypeByVfs = {
    'X-version'?: string;
};

/**
 * @description 该接口提供收藏夹总数(包括子收藏夹)
 * @summary Response data types
 * @url [ get ] /api/Statistics/favoriteCameraGroup
 * @bizName videoFusionServiceBiz
 */
export type GetStatisticsFavoriteCameraGroupResTypeByVfs = {
    favoriteCameraGroupCount: number;
};

/**
 * @description 查询指定job的巡检走势记录
 * @summary Request data types
 * @url [ get ] /api/Statistics/detectionTasks/{jobId}/history
 * @bizName videoFusionServiceBiz
 */
export type GetStatisticsDetectionTasksJobIdHistoryReqTypeByVfs = {
    jobId: string;
    Limit?: number;
    'X-version'?: string;
};

/**
 * @description 查询指定job的巡检走势记录
 * @summary Response data types
 * @url [ get ] /api/Statistics/detectionTasks/{jobId}/history
 * @bizName videoFusionServiceBiz
 */
export type GetStatisticsDetectionTasksJobIdHistoryResTypeByVfs = {
    totalCount: number;
    records: Array<{
        excellent: number;
        good: number;
        bad: number;
        fault: number;
        time: string;
    }>;
};

/**
 * @description 根据行政区域前缀获取监控统计数据
 * @summary Request data types
 * @url [ post ] /api/Statistics/camera/prefixAreaCode
 * @bizName videoFusionServiceBiz
 */
export type PostStatisticsCameraPrefixAreaCodeReqTypeByVfs = {
    'X-version'?: string;
    prefixAreaCodes: Array<string>;
};

/**
 * @description 根据行政区域前缀获取监控统计数据
 * @summary Response data types
 * @url [ post ] /api/Statistics/camera/prefixAreaCode
 * @bizName videoFusionServiceBiz
 */
export type PostStatisticsCameraPrefixAreaCodeResTypeByVfs = {
    prefixAreaCode: string;
    count: number;
};

/**
 * @description 创建监控保活作业
 * @summary Request data types
 * @url [ post ] /api/StreamKeepAliveJobs
 * @bizName videoFusionServiceBiz
 */
export type PostStreamKeepAliveJobsReqTypeByVfs = {
    'X-version'?: string;
    jobId: string;
    type?: 0 | 1;
    taskName: string;
    businessId: string;
    owners?: Array<{
        id: string;
        name: string;
        phone: string;
        email: string;
        ownerType: 0 | 1;
        job: string;
    }>;
    notificationType: number;
};

/**
 * @description 创建监控保活作业
 * @summary Response data types
 * @url [ post ] /api/StreamKeepAliveJobs
 * @bizName videoFusionServiceBiz
 */
export type PostStreamKeepAliveJobsResTypeByVfs = {
    jobId: string;
    status: 0 | 1 | 2;
    businessName: string;
    businessId: string;
    cameraTotal: number;
    type: 0 | 1;
    createTime: string;
    modifyTime: string;
    owners: Array<{
        id: string;
        name: string;
        phone: string;
        email: string;
        ownerType: 0 | 1;
        job: string;
    }>;
    notificationType: number;
    retryTotal: number;
    successesTotal: number;
    failTotal: number;
    executionsTotal: number;
    taskName: string;
};

/**
 * @description 按条件查询保活作业列表
 * @summary Request data types
 * @url [ get ] /api/StreamKeepAliveJobs
 * @bizName videoFusionServiceBiz
 */
export type GetStreamKeepAliveJobsReqTypeByVfs = {
    JobIds?: Array<string>;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 按条件查询保活作业列表
 * @summary Response data types
 * @url [ get ] /api/StreamKeepAliveJobs
 * @bizName videoFusionServiceBiz
 */
export type GetStreamKeepAliveJobsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        jobId: string;
        status: 0 | 1 | 2;
        businessName: string;
        businessId: string;
        cameraTotal: number;
        type: 0 | 1;
        createTime: string;
        modifyTime: string;
        owners: Array<{
            id: string;
            name: string;
            phone: string;
            email: string;
            ownerType: 0 | 1;
            job: string;
        }>;
        notificationType: number;
        retryTotal: number;
        successesTotal: number;
        failTotal: number;
        executionsTotal: number;
        taskName: string;
    }>;
};

/**
 * @description 获取指定保活作业
 * @summary Request data types
 * @url [ get ] /api/StreamKeepAliveJobs/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetStreamKeepAliveJobsIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取指定保活作业
 * @summary Response data types
 * @url [ get ] /api/StreamKeepAliveJobs/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetStreamKeepAliveJobsIdResTypeByVfs = {
    jobId: string;
    status: 0 | 1 | 2;
    businessName: string;
    businessId: string;
    cameraTotal: number;
    type: 0 | 1;
    createTime: string;
    modifyTime: string;
    owners: Array<{
        id: string;
        name: string;
        phone: string;
        email: string;
        ownerType: 0 | 1;
        job: string;
    }>;
    notificationType: number;
    retryTotal: number;
    successesTotal: number;
    failTotal: number;
    executionsTotal: number;
    taskName: string;
};

/**
 * @description 删除保活作业
 * @summary Request data types
 * @url [ delete ] /api/StreamKeepAliveJobs/{id}
 * @bizName videoFusionServiceBiz
 */
export type DeleteStreamKeepAliveJobsIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 修改保活作业
 * @summary Request data types
 * @url [ put ] /api/StreamKeepAliveJobs/{id}
 * @bizName videoFusionServiceBiz
 */
export type PutStreamKeepAliveJobsIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    businessId: string;
    type?: 0 | 1;
    taskName: string;
    owners?: Array<{
        id: string;
        name: string;
        phone: string;
        email: string;
        ownerType: 0 | 1;
        job: string;
    }>;
    notificationType: number;
};

/**
 * @description 修改保活作业的状态
 * @summary Request data types
 * @url [ put ] /api/StreamKeepAliveJobs/{id}/status
 * @bizName videoFusionServiceBiz
 */
export type PutStreamKeepAliveJobsIdStatusReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    status?: 0 | 1 | 2;
};

/**
 * @description 获取保活作业的执行任务
 * @summary Request data types
 * @url [ get ] /api/StreamKeepAliveJobs/{id}/task
 * @bizName videoFusionServiceBiz
 */
export type GetStreamKeepAliveJobsIdTaskReqTypeByVfs = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取保活作业的执行任务
 * @summary Response data types
 * @url [ get ] /api/StreamKeepAliveJobs/{id}/task
 * @bizName videoFusionServiceBiz
 */
export type GetStreamKeepAliveJobsIdTaskResTypeByVfs = {
    totalCount: number;
    records: Array<{
        taskId: string;
        jobId: string;
        startTime: string;
        endTime: string;
        groupId: string;
        keepAliveTime: string;
        status: number;
        cameraTotal: number;
        failTotal: number;
        successesTotal: number;
        retryTotal: number;
    }>;
};

/**
 * @description 获取保活作业指定任务的保活记录
 * @summary Request data types
 * @url [ get ] /api/StreamKeepAliveJobs/{id}/record
 * @bizName videoFusionServiceBiz
 */
export type GetStreamKeepAliveJobsIdRecordReqTypeByVfs = {
    id: string;
    TaskID: string;
    CameraName?: string;
    Result?: boolean;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取保活作业指定任务的保活记录
 * @summary Response data types
 * @url [ get ] /api/StreamKeepAliveJobs/{id}/record
 * @bizName videoFusionServiceBiz
 */
export type GetStreamKeepAliveJobsIdRecordResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: number;
        taskId: string;
        result: number;
        startTime: string;
        endTime: string;
        cameraId: string;
        cameraName: string;
        retryTotal: number;
        errorCode: 404;
        keepAliveTime: string;
    }>;
};

/**
 * @description 停止拉流
 * @summary Request data types
 * @url [ get ] /api/Tests/camera/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetTestsCameraIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 流保活接口，测试用接口
 * @summary Request data types
 * @url [ put ] /api/Tests/StreamKeepAliveJobs/{jobId}
 * @bizName videoFusionServiceBiz
 */
export type PutTestsStreamKeepAliveJobsJobIdReqTypeByVfs = {
    jobId: string;
    'X-version'?: string;
    taskId: string;
    cameraGroupId: string;
    keepAliveTime: number;
};

/**
 * @description 开始同步自动化测试接口
 * @summary Request data types
 * @url [ post ] /api/Tests/Sync
 * @bizName videoFusionServiceBiz
 */
export type PostTestsSyncReqTypeByVfs = {
    id?: string;
    'X-version'?: string;
};

/**
 * @description 推送下级同步数据
 * @summary Request data types
 * @url [ post ] /api/Tests/SyncCatalog
 * @bizName videoFusionServiceBiz
 */
export type PostTestsSyncCatalogReqTypeByVfs = {
    'X-version'?: string;
    cmdType?: string;
    taskId?: string;
    sumNum?: string;
    sn?: string;
    deviceId?: string;
    deviceList?: Array<{
        syncCatalog: Record<string, any>;
    }>;
};

/**
 * @description 推送下级同步数据
 * @summary Request data types
 * @url [ post ] /api/Tests/IncrementSyncCatalog
 * @bizName videoFusionServiceBiz
 */
export type PostTestsIncrementSyncCatalogReqTypeByVfs = {
    'X-version'?: string;
    cmdType?: string;
    taskId?: string;
    sumNum?: string;
    sn?: string;
    deviceId?: string;
    deviceList?: Array<{
        syncCatalog: Record<string, any>;
    }>;
};

/**
 * @description 添加上级域接口
 * @summary Request data types
 * @url [ post ] /api/UpperDomains
 * @bizName videoFusionServiceBiz
 */
export type PostUpperDomainsReqTypeByVfs = {
    'X-version'?: string;
    upperId: string;
    name: string;
    ip: string;
    port: number;
    sipTransProtocol?: 0 | 1;
    status?: 1 | 2;
    isAuth?: boolean;
    username?: string;
    password?: string;
    heartbeatCycle?: number;
    heartbeatTimeoutCount?: number;
    isPublicNetwork?: 1 | 2;
    sendCatalogTransProtocol?: 0 | 1;
    sendCatalogOnceCount?: number;
    roleId?: string;
    isRepeat?: boolean;
    isExpired?: boolean;
    fullSyncRetainCount?: number;
    dirSyncRetainCount?: number;
    incrementSyncRetainCount?: number;
    isUseDbSync?: boolean;
    isNeedPushFromDomain?: boolean;
    dbIp?: string;
    dbPort?: number;
    dbName?: string;
    dbUser?: string;
    dbPassword?: string;
    dbTableName?: string;
    dbIncrementTableName?: string;
    gbProtocolVersion?: 0 | 1;
    enableRtpSinglePort?: boolean;
    enableRealmAddress?: boolean;
    enableSsrcCheck?: boolean;
};

/**
 * @description 添加上级域接口
 * @summary Response data types
 * @url [ post ] /api/UpperDomains
 * @bizName videoFusionServiceBiz
 */
export type PostUpperDomainsResTypeByVfs = {
    upperId: string;
    name: string;
    ip: string;
    port: number;
    sipTransProtocol: 0 | 1;
    status: 1 | 2;
    isAuth: boolean;
    username: string;
    password: string;
    heartbeatCycle: number;
    heartbeatTimeoutCount: number;
    isPublicNetwork: 1 | 2;
    sendCatalogTransProtocol: 0 | 1;
    sendCatalogOnceCount: number;
    roleId: string;
    roleName: string;
    taskStatus: 0 | 1 | 2 | 3 | 4;
    isRepeat: boolean;
    isExpired: boolean;
    result: number;
    stateDuration: string;
    lastStateChangedTime: string;
    fullSyncRetainCount: number;
    dirSyncRetainCount: number;
    isUseDbSync: boolean;
    isNeedPushFromDomain: boolean;
    dbIp: string;
    dbPort: number;
    dbName: string;
    dbUser: string;
    dbPassword: string;
    dbTableName: string;
    dbIncrementTableName: string;
    lastSyncActualNum: number;
    lastSyncCatalogsNum: number;
    timeRemaining: number;
    progress: number;
    gbProtocolVersion: 0 | 1;
    enableRtpSinglePort: boolean;
    enableRealmAddress: boolean;
    enableSsrcCheck: boolean;
};

/**
 * @description 分页查询上级域
 * @summary Request data types
 * @url [ get ] /api/UpperDomains
 * @bizName videoFusionServiceBiz
 */
export type GetUpperDomainsReqTypeByVfs = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页查询上级域
 * @summary Response data types
 * @url [ get ] /api/UpperDomains
 * @bizName videoFusionServiceBiz
 */
export type GetUpperDomainsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        upperId: string;
        name: string;
        ip: string;
        port: number;
        sipTransProtocol: 0 | 1;
        status: 1 | 2;
        isAuth: boolean;
        username: string;
        password: string;
        heartbeatCycle: number;
        heartbeatTimeoutCount: number;
        isPublicNetwork: 1 | 2;
        sendCatalogTransProtocol: 0 | 1;
        sendCatalogOnceCount: number;
        roleId: string;
        roleName: string;
        taskStatus: 0 | 1 | 2 | 3 | 4;
        isRepeat: boolean;
        isExpired: boolean;
        result: number;
        stateDuration: string;
        lastStateChangedTime: string;
        fullSyncRetainCount: number;
        dirSyncRetainCount: number;
        isUseDbSync: boolean;
        isNeedPushFromDomain: boolean;
        dbIp: string;
        dbPort: number;
        dbName: string;
        dbUser: string;
        dbPassword: string;
        dbTableName: string;
        dbIncrementTableName: string;
        lastSyncActualNum: number;
        lastSyncCatalogsNum: number;
        timeRemaining: number;
        progress: number;
        gbProtocolVersion: 0 | 1;
        enableRtpSinglePort: boolean;
        enableRealmAddress: boolean;
        enableSsrcCheck: boolean;
    }>;
};

/**
 * @description 修改国标上级域
 * @summary Request data types
 * @url [ put ] /api/UpperDomains/{id}
 * @bizName videoFusionServiceBiz
 */
export type PutUpperDomainsIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
    name: string;
    ip: string;
    port: number;
    sipTransProtocol?: 0 | 1;
    status?: 1 | 2;
    isAuth?: boolean;
    username?: string;
    password?: string;
    heartbeatCycle?: number;
    heartbeatTimeoutCount?: number;
    isPublicNetwork?: 1 | 2;
    sendCatalogTransProtocol?: 0 | 1;
    sendCatalogOnceCount?: number;
    roleId?: string;
    isRepeat?: boolean;
    isExpired?: boolean;
    syncRecordSavedCount?: number;
    fullSyncRetainCount?: number;
    dirSyncRetainCount?: number;
    incrementSyncRetainCount?: number;
    isUseDbSync?: boolean;
    isNeedPushFromDomain?: boolean;
    dbIp?: string;
    dbPort?: number;
    dbName?: string;
    dbUser?: string;
    dbPassword?: string;
    dbTableName?: string;
    dbIncrementTableName?: string;
    gbProtocolVersion?: 0 | 1;
    enableRtpSinglePort?: boolean;
    enableRealmAddress?: boolean;
    enableSsrcCheck?: boolean;
};

/**
 * @description 删除上级域
 * @summary Request data types
 * @url [ delete ] /api/UpperDomains/{id}
 * @bizName videoFusionServiceBiz
 */
export type DeleteUpperDomainsIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询上级域详情
 * @summary Request data types
 * @url [ get ] /api/UpperDomains/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetUpperDomainsIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询上级域详情
 * @summary Response data types
 * @url [ get ] /api/UpperDomains/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetUpperDomainsIdResTypeByVfs = {
    lastReportTime: string;
    upperId: string;
    name: string;
    ip: string;
    port: number;
    sipTransProtocol: 0 | 1;
    status: 1 | 2;
    isAuth: boolean;
    username: string;
    password: string;
    heartbeatCycle: number;
    heartbeatTimeoutCount: number;
    isPublicNetwork: 1 | 2;
    sendCatalogTransProtocol: 0 | 1;
    sendCatalogOnceCount: number;
    roleId: string;
    roleName: string;
    taskStatus: 0 | 1 | 2 | 3 | 4;
    isRepeat: boolean;
    isExpired: boolean;
    result: number;
    stateDuration: string;
    lastStateChangedTime: string;
    fullSyncRetainCount: number;
    dirSyncRetainCount: number;
    isUseDbSync: boolean;
    isNeedPushFromDomain: boolean;
    dbIp: string;
    dbPort: number;
    dbName: string;
    dbUser: string;
    dbPassword: string;
    dbTableName: string;
    dbIncrementTableName: string;
    lastSyncActualNum: number;
    lastSyncCatalogsNum: number;
    timeRemaining: number;
    progress: number;
    gbProtocolVersion: 0 | 1;
    enableRtpSinglePort: boolean;
    enableRealmAddress: boolean;
    enableSsrcCheck: boolean;
};

/**
 * @description 根据同步记录id查询上级域历史同步记录
 * @summary Request data types
 * @url [ get ] /api/UpperDomains/syncTaskHistories/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetUpperDomainsSyncTaskHistoriesIdReqTypeByVfs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 根据同步记录id查询上级域历史同步记录
 * @summary Response data types
 * @url [ get ] /api/UpperDomains/syncTaskHistories/{id}
 * @bizName videoFusionServiceBiz
 */
export type GetUpperDomainsSyncTaskHistoriesIdResTypeByVfs = {
    catalogsNum: number;
    actualCatalogsNum: number;
    addNum: number;
    updateNum: number;
    deleteNum: number;
    conflictNum: number;
    time: string;
    offlineNum: number;
    onlineNum: number;
    cameraTotal: number;
    groupTotal: number;
    groupId: string;
    groupName: string;
    cameraAddNum: number;
    cameraUpdateNum: number;
    cameraConflictNum: number;
    groupAddNum: number;
    groupUpdateNum: number;
    groupConflictNum: number;
    groupDeleteNum: number;
    cameraDeleteNum: number;
    timeRemaining: number;
    progress: number;
    taskId: string;
    startTime: string;
    endTime: string;
    status: 0 | 1 | 2 | 3 | 4;
    result: number;
    sipServerId: string;
    name: string;
    syncType: 0 | 1 | 2;
    hasConflictData: boolean;
};

/**
 * @description 上级域同步历史记录分页查询
 * @summary Request data types
 * @url [ get ] /api/UpperDomains/{id}/syncTaskHistories
 * @bizName videoFusionServiceBiz
 */
export type GetUpperDomainsIdSyncTaskHistoriesReqTypeByVfs = {
    id: string;
    SyncType?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 上级域同步历史记录分页查询
 * @summary Response data types
 * @url [ get ] /api/UpperDomains/{id}/syncTaskHistories
 * @bizName videoFusionServiceBiz
 */
export type GetUpperDomainsIdSyncTaskHistoriesResTypeByVfs = {
    totalCount: number;
    records: Array<{
        catalogsNum: number;
        actualCatalogsNum: number;
        addNum: number;
        updateNum: number;
        deleteNum: number;
        conflictNum: number;
        time: string;
        offlineNum: number;
        onlineNum: number;
        cameraTotal: number;
        groupTotal: number;
        groupId: string;
        groupName: string;
        cameraAddNum: number;
        cameraUpdateNum: number;
        cameraConflictNum: number;
        groupAddNum: number;
        groupUpdateNum: number;
        groupConflictNum: number;
        groupDeleteNum: number;
        cameraDeleteNum: number;
        timeRemaining: number;
        progress: number;
        taskId: string;
        startTime: string;
        endTime: string;
        status: 0 | 1 | 2 | 3 | 4;
        result: number;
        sipServerId: string;
        name: string;
        syncType: 0 | 1 | 2;
        hasConflictData: boolean;
    }>;
};

/**
 * @description 上级域同步记录数据多条件查询,传入id为同步任务的id
 * @summary Request data types
 * @url [ get ] /api/UpperDomains/syncTaskHistories/{id}/records
 * @bizName videoFusionServiceBiz
 */
export type GetUpperDomainsSyncTaskHistoriesIdRecordsReqTypeByVfs = {
    id: string;
    Keyword?: string;
    UpdateStatus?: number;
    Type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 上级域同步记录数据多条件查询,传入id为同步任务的id
 * @summary Response data types
 * @url [ get ] /api/UpperDomains/syncTaskHistories/{id}/records
 * @bizName videoFusionServiceBiz
 */
export type GetUpperDomainsSyncTaskHistoriesIdRecordsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: number;
        deviceId: string;
        name: string;
        manufacture: string;
        model: string;
        owner: string;
        civilCode: string;
        parental: number;
        parentId: string;
        parentName: string;
        type: 0 | 1;
        certNum: string;
        certifiable: number;
        ipAddress: string;
        port: number;
        status: number;
        longitude: number;
        latitude: number;
        ptzType: number;
        useType: number;
        taskId: string;
        syncStatus: number;
        regionId: string;
        videoTag: string;
        areaCode: string;
    }>;
};

/**
 * @description 分页获取上级域状态变更记录
 * @summary Request data types
 * @url [ get ] /api/UpperDomains/{id}/state/records
 * @bizName videoFusionServiceBiz
 */
export type GetUpperDomainsIdStateRecordsReqTypeByVfs = {
    id: string;
    Online?: boolean;
    StartTime?: string;
    EndTime?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页获取上级域状态变更记录
 * @summary Response data types
 * @url [ get ] /api/UpperDomains/{id}/state/records
 * @bizName videoFusionServiceBiz
 */
export type GetUpperDomainsIdStateRecordsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: number;
        gbId: string;
        status: 1 | 2;
        reason: string;
        createTime: string;
    }>;
};

/**
 * @description 同步目录给上级(自动化测试用)
 * @summary Request data types
 * @url [ post ] /api/UpperDomains/{id}/synchronization
 * @bizName videoFusionServiceBiz
 */
export type PostUpperDomainsIdSynchronizationReqTypeByVfs = {
    id: string;
    groupId?: string;
    'X-version'?: string;
};

/**
 * @description 条件查询监控状态变更上报记录
 * @summary Request data types
 * @url [ get ] /api/UpperDomains/cameras/state/records
 * @bizName videoFusionServiceBiz
 */
export type GetUpperDomainsCamerasStateRecordsReqTypeByVfs = {
    UpperId?: string;
    Online?: boolean;
    ReportResult?: boolean;
    StartTime?: string;
    EndTime?: string;
    Keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 条件查询监控状态变更上报记录
 * @summary Response data types
 * @url [ get ] /api/UpperDomains/cameras/state/records
 * @bizName videoFusionServiceBiz
 */
export type GetUpperDomainsCamerasStateRecordsResTypeByVfs = {
    totalCount: number;
    records: Array<{
        id: number;
        upperId: string;
        upperName: string;
        cameraId: string;
        name: string;
        status: 1 | 2 | 3 | 4;
        reportStatus: 1 | 2;
        failReason: string;
        createTime: string;
        stateDuration: string;
    }>;
};

/**
 * @description 上报监控状态到上级域
 * @summary Request data types
 * @url [ post ] /api/UpperDomains/cameras/state/report
 * @bizName videoFusionServiceBiz
 */
export type PostUpperDomainsCamerasStateReportReqTypeByVfs = {
    'X-version'?: string;
    upperId?: string;
};

/**
 * @description 获取视频会议列表(无法实现)
 * @summary Request data types
 * @url [ get ] /api/VideoConferences
 * @bizName videoFusionServiceBiz
 */
export type GetVideoConferencesReqTypeByVfs = {
    'X-version'?: string;
};

/**
 * @description 获取视频会议列表(无法实现)
 * @summary Response data types
 * @url [ get ] /api/VideoConferences
 * @bizName videoFusionServiceBiz
 */
export type GetVideoConferencesResTypeByVfs = {
    totalCount: number;
    records: Array<Record<string, any>>;
};

/**
 * @description 邀请/取消 摄像头 摄像头ID+会议室号
 * @summary Request data types
 * @url [ put ] /api/VideoConferences/{conferenceNumber}/invite_camera
 * @bizName videoFusionServiceBiz
 */
export type PutVideoConferencesConferenceNumberInviteCameraReqTypeByVfs = {
    conferenceNumber: string;
    cameraId: string;
    isInvite: boolean;
    'X-version'?: string;
};

/**
 * @description 邀请/取消 直播 联系人ID+会议室号
 * @summary Request data types
 * @url [ put ] /api/VideoConferences/{conferenceNumber}/invite_live
 * @bizName videoFusionServiceBiz
 */
export type PutVideoConferencesConferenceNumberInviteLiveReqTypeByVfs = {
    conferenceNumber: string;
    contactId: string;
    isInvite: boolean;
    'X-version'?: string;
};

/**
 * @description 会议直播 推流/取消 会议室号
 * @summary Request data types
 * @url [ put ] /api/VideoConferences/{conferenceNumber}/to_live
 * @bizName videoFusionServiceBiz
 */
export type PutVideoConferencesConferenceNumberToLiveReqTypeByVfs = {
    conferenceNumber: string;
    isToLive: boolean;
    'X-version'?: string;
};

/**
 * @description 获取会议直播直播
 * @summary Request data types
 * @url [ get ] /api/VideoConferences/live/{conferenceNumber}
 * @bizName videoFusionServiceBiz
 */
export type GetVideoConferencesLiveConferenceNumberReqTypeByVfs = {
    conferenceNumber: string;
    'X-version'?: string;
};

/**
 * @description 获取会议直播直播
 * @summary Response data types
 * @url [ get ] /api/VideoConferences/live/{conferenceNumber}
 * @bizName videoFusionServiceBiz
 */
export type GetVideoConferencesLiveConferenceNumberResTypeByVfs = {
    id: string;
    stream: string;
    status: 0 | 1 | 2 | 3;
    liveType: 0 | 1;
    title: string;
    description: string;
    userId: string;
    userAccount: string;
    userName: string;
    createTime: string;
    rtmpUrl: string;
    flvUrl: string;
    rtspUrl: string;
    wsUrl: string;
    webRtcUrl: string;
    relateWsUrl: string;
    relateFlvUrl: string;
    relateWebRtcUrl: string;
    isGradingDispatch: boolean;
    appointment: string;
};

/**
 * @description 推流接口
 * @summary Request data types
 * @url [ put ] /api/Videos/push
 * @bizName videoFusionServiceBiz
 */
export type PutVideosPushReqTypeByVfs = {
    'X-version'?: string;
    targets: Array<{
        id: string;
        type: 1 | 2;
    }>;
    videos: Array<{
        id: string;
        type: 1 | 2 | 3;
    }>;
    operationType: 1 | 2;
};

/**
 * @description 监控搜索
 * @summary Request data types
 * @url [ get ] /api/Cameras/Search
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasSearchReqTypeByVfsV2 = {
    GroupType?: number;
    Status?: number;
    PathPrefix?: string;
    SelectedIds?: Array<string>;
    UnSelectedIds?: Array<string>;
    Keyword: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 监控搜索
 * @summary Response data types
 * @url [ get ] /api/Cameras/Search
 * @bizName videoFusionServiceBiz
 */
export type GetCamerasSearchResTypeByVfsV2 = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        aliasName: string;
        useStatus: 0 | 1 | 2;
        originalName: string;
        parentId: string;
        namePath: string;
        idPath: string;
        status: 1 | 2 | 3 | 4;
        groupType: number;
        labels: Array<{
            id: number;
            title: string;
            color: string;
            description: string;
        }>;
        latitude: number;
        longitude: number;
    }>;
};

/**
 * @description 监控高级搜索
 * @summary Request data types
 * @url [ post ] /api/Cameras/advance_search
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasAdvanceSearchReqTypeByVfsV2 = {
    'X-version'?: string;
    keyword?: string;
    status?: number;
    quality?: Array<number>;
    resolution?: Array<number>;
    encode?: Array<number>;
    audio?: boolean;
    labelIds?: Array<number>;
    isSupportPTZ?: boolean;
    groupType?: number;
    areaCode?: string;
    pathPrefix?: string;
    selectedIds?: Array<string>;
    unSelectedIds?: Array<string>;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * @description 监控高级搜索
 * @summary Response data types
 * @url [ post ] /api/Cameras/advance_search
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasAdvanceSearchResTypeByVfsV2 = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        aliasName: string;
        originalName: string;
        useStatus: 0 | 1 | 2;
        status: 1 | 2 | 3 | 4;
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
        labels: Array<{
            id: number;
            title: string;
            color: string;
            description: string;
        }>;
        latitude: number;
        longitude: number;
        parentId: string;
        idPath: string;
        namePath: string;
    }>;
};

/**
 * @description 添加国标监控终端
 * @summary Request data types
 * @url [ post ] /api/Cameras
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasReqTypeByVfsV2 = {
    'X-version'?: string;
    lowerDomainId: string;
    videoChannelId: string;
    ipAddress: string;
    port: number;
    password?: string;
    heartbeatCycle?: number;
    maxHeartbeatTimeoutCount?: number;
    sipTransProtocol?: 0 | 1;
    rtpSendType?: 0 | 1 | 2;
    rtpRecvType?: 0 | 1 | 2;
    isPublicNetwork?: boolean;
    isAuth?: boolean;
    name: string;
    parentId: string;
    aliasName?: string;
    quality?: 0 | 1 | 2 | 3 | 4;
    isManual?: boolean;
    labelIds: Array<number>;
    isSupportPTZ?: boolean;
    longitude: number;
    latitude: number;
    areaCode?: string;
};

/**
 * @description 添加国标监控终端
 * @summary Response data types
 * @url [ post ] /api/Cameras
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasResTypeByVfsV2 = {
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
    aliasName: string;
    originalName: string;
    status: 1 | 2 | 3 | 4;
    quality: 0 | 1 | 2 | 3 | 4;
    areaCode: string;
    thumbnailID: string;
    playUrl: {
        playUrlType: 0 | 1 | 2;
        rtspUrl: string;
        flvUrl: string;
        wsUrl: string;
        rtmpUrl: string;
        webRtc: string;
    };
    longitude: number;
    latitude: number;
    id: string;
    name: string;
};

/**
 * @description 更新国标监控终端
 * @summary Request data types
 * @url [ put ] /api/Cameras/{id}
 * @bizName videoFusionServiceBiz
 */
export type PutCamerasIdReqTypeByVfsV2 = {
    id: string;
    'X-version'?: string;
    ipAddress: string;
    port: number;
    password?: string;
    heartbeatCycle?: number;
    maxHeartbeatTimeoutCount?: number;
    sipTransProtocol?: 0 | 1;
    rtpSendType?: 0 | 1 | 2;
    rtpRecvType?: 0 | 1 | 2;
    isPublicNetwork?: boolean;
    isAuth?: boolean;
    name: string;
    parentId: string;
    aliasName?: string;
    quality?: 0 | 1 | 2 | 3 | 4;
    isManual?: boolean;
    labelIds: Array<number>;
    isSupportPTZ?: boolean;
    longitude: number;
    latitude: number;
    areaCode?: string;
};

/**
 * @description 添加非标终端(包括视频推/拉流两种类型)
 * @summary Request data types
 * @url [ post ] /api/Cameras/nonstandard
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasNonstandardReqTypeByVfsV2 = {
    'X-version'?: string;
    pullAddress?: string;
    name: string;
    parentId: string;
    aliasName?: string;
    quality?: 0 | 1 | 2 | 3 | 4;
    isManual?: boolean;
    labelIds: Array<number>;
    isSupportPTZ?: boolean;
    longitude: number;
    latitude: number;
    areaCode?: string;
};

/**
 * @description 添加非标终端(包括视频推/拉流两种类型)
 * @summary Response data types
 * @url [ post ] /api/Cameras/nonstandard
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasNonstandardResTypeByVfsV2 = {
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
    aliasName: string;
    originalName: string;
    status: 1 | 2 | 3 | 4;
    quality: 0 | 1 | 2 | 3 | 4;
    areaCode: string;
    thumbnailID: string;
    playUrl: {
        playUrlType: 0 | 1 | 2;
        rtspUrl: string;
        flvUrl: string;
        wsUrl: string;
        rtmpUrl: string;
        webRtc: string;
    };
    longitude: number;
    latitude: number;
    id: string;
    name: string;
};

/**
 * @description 更新非标监控终端
 * @summary Request data types
 * @url [ put ] /api/Cameras/nonstandard/{id}
 * @bizName videoFusionServiceBiz
 */
export type PutCamerasNonstandardIdReqTypeByVfsV2 = {
    id: string;
    'X-version'?: string;
    pullAddress?: string;
    name: string;
    parentId: string;
    aliasName?: string;
    quality?: 0 | 1 | 2 | 3 | 4;
    isManual?: boolean;
    labelIds: Array<number>;
    isSupportPTZ?: boolean;
    longitude: number;
    latitude: number;
    areaCode?: string;
};

/**
 * @description 添加视频文件虚拟终端
 * @summary Request data types
 * @url [ post ] /api/Cameras/virtual
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasVirtualReqTypeByVfsV2 = {
    'X-version'?: string;
    fileUrl: string;
    name: string;
    parentId: string;
    aliasName?: string;
    quality?: 0 | 1 | 2 | 3 | 4;
    isManual?: boolean;
    labelIds: Array<number>;
    isSupportPTZ?: boolean;
    longitude: number;
    latitude: number;
    areaCode?: string;
};

/**
 * @description 添加视频文件虚拟终端
 * @summary Response data types
 * @url [ post ] /api/Cameras/virtual
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasVirtualResTypeByVfsV2 = {
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
    aliasName: string;
    originalName: string;
    status: 1 | 2 | 3 | 4;
    quality: 0 | 1 | 2 | 3 | 4;
    areaCode: string;
    thumbnailID: string;
    playUrl: {
        playUrlType: 0 | 1 | 2;
        rtspUrl: string;
        flvUrl: string;
        wsUrl: string;
        rtmpUrl: string;
        webRtc: string;
    };
    longitude: number;
    latitude: number;
    id: string;
    name: string;
};

/**
 * @description 更新虚拟终端
 * @summary Request data types
 * @url [ put ] /api/Cameras/virtual/{id}
 * @bizName videoFusionServiceBiz
 */
export type PutCamerasVirtualIdReqTypeByVfsV2 = {
    id: string;
    'X-version'?: string;
    fileUrl: string;
    name: string;
    parentId: string;
    aliasName?: string;
    quality?: 0 | 1 | 2 | 3 | 4;
    isManual?: boolean;
    labelIds: Array<number>;
    isSupportPTZ?: boolean;
    longitude: number;
    latitude: number;
    areaCode?: string;
};

/**
 * @description 生成国标 Id
 * @summary Request data types
 * @url [ post ] /api/Cameras/id
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasIdReqTypeByVfsV2 = {
    'X-version'?: string;
    type?: 0 | 1 | 2;
};

/**
 * @description 生成国标 Id
 * @summary Response data types
 * @url [ post ] /api/Cameras/id
 * @bizName videoFusionServiceBiz
 */
export type PostCamerasIdResTypeByVfsV2 = {
    gbId: string;
};

/**
 * @description 分页查询标签列表
 * @summary Request data types
 * @url [ get ] /api/Label
 * @bizName videoFusionServiceBiz
 */
export type GetLabelReqTypeByVfsV2 = {
    Keyword?: string;
    Order?: string;
    Desc?: boolean;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页查询标签列表
 * @summary Response data types
 * @url [ get ] /api/Label
 * @bizName videoFusionServiceBiz
 */
export type GetLabelResTypeByVfsV2 = {
    totalCount: number;
    records: Array<{
        cameraTotal: number;
        onlineCameraTotal: number;
        createdTime: string;
        id: number;
        title: string;
        color: string;
        description: string;
    }>;
};

/**
 * @description 查询实时拉流记录
 * @summary Request data types
 * @url [ get ] /api/MediaSessions
 * @bizName videoFusionServiceBiz
 */
export type GetMediaSessionsReqTypeByVfsV2 = {
    MediaServerId?: string;
    Keyword?: string;
    VideoEncoder?: number;
    Resolution?: number;
    BusinessName?: string;
    AudioFormat?: number;
    Order?: string;
    Desc?: boolean;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 查询实时拉流记录
 * @summary Response data types
 * @url [ get ] /api/MediaSessions
 * @bizName videoFusionServiceBiz
 */
export type GetMediaSessionsResTypeByVfsV2 = {
    totalCount: number;
    records: Array<{
        businessName: string;
        bitRate: number;
        startTime: string;
        deviceName: string;
        deviceId: string;
        lossPackets: number;
        receivedPackets: number;
        cId: string;
        videoEncoder: 0 | 1;
        audioFormat: 0 | 1 | 2 | 3 | 4 | 5;
        totalReaderCount: number;
        mediaServerId: string;
        mediaServerName: string;
        resolution: 0 | 1 | 2 | 3;
        clients: Array<{
            clientId: string;
            clientIp: string;
            clientPort: number;
            clientType: number;
            mediaSendIp: string;
            mediaSendPort: number;
            sendStreamType: number;
            sendTransType: number;
            failStreamPath: 0 | 1 | 2 | 3;
            userId: string;
            userName: string;
        }>;
        terminal: string;
        stream: string;
    }>;
};
