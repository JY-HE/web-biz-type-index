/**
 * @description 获取事件关联的通话数据
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/communications
 * @bizName eventBiz
 */
export type GetEventsEventIdCommunicationsReqTypeByEts = {
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 获取事件关联的通话数据
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/communications
 * @bizName eventBiz
 */
export type GetEventsEventIdCommunicationsResTypeByEts = {
    totalCount: number;
    records: Array<{
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
        id: string;
        eventId: string;
        eventName: string;
        createdTime: string;
        platformId: string;
        resourceId: string;
        associtedDataId: string;
    }>;
};

/**
 * @description 关联通话数据
 * @summary Request data types
 * @url [ post ] /api/events/{eventId}/communications
 * @bizName eventBiz
 */
export type PostEventsEventIdCommunicationsReqTypeByEts = {
    eventId: string;
    'X-version'?: string;
    communicationId: string;
    callerName?: string;
    callerNumber?: string;
    calledName?: string;
    calledNumber?: string;
    startTime?: string;
    endTime?: string;
    hasAnswered?: boolean;
    type?: 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512;
    recordId?: string;
    logId?: string;
    duration?: number;
};

/**
 * @description 关联通话数据
 * @summary Response data types
 * @url [ post ] /api/events/{eventId}/communications
 * @bizName eventBiz
 */
export type PostEventsEventIdCommunicationsResTypeByEts = {
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
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * @description 根据Id获取通话项
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/communications/{id}
 * @bizName eventBiz
 */
export type GetEventsEventIdCommunicationsIdReqTypeByEts = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 根据Id获取通话项
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/communications/{id}
 * @bizName eventBiz
 */
export type GetEventsEventIdCommunicationsIdResTypeByEts = {
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
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * @description 取消关联
 * @summary Request data types
 * @url [ delete ] /api/events/{eventId}/communications/{id}
 * @bizName eventBiz
 */
export type DeleteEventsEventIdCommunicationsIdReqTypeByEts = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 获取事件关联的标绘数据
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/draws
 * @bizName eventBiz
 */
export type GetEventsEventIdDrawsReqTypeByEts = {
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 获取事件关联的标绘数据
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/draws
 * @bizName eventBiz
 */
export type GetEventsEventIdDrawsResTypeByEts = {
    totalCount: number;
    records: Array<{
        drawId: string;
        name: string;
        coordinates: string;
        type: string;
        markerType: string;
        properties: string;
        id: string;
        eventId: string;
        eventName: string;
        createdTime: string;
        platformId: string;
        resourceId: string;
        associtedDataId: string;
    }>;
};

/**
 * @description 关联标绘数据
 * @summary Request data types
 * @url [ post ] /api/events/{eventId}/draws
 * @bizName eventBiz
 */
export type PostEventsEventIdDrawsReqTypeByEts = {
    eventId: string;
    'X-version'?: string;
    drawId: string;
    name?: string;
    coordinates?: string;
    type?: string;
    markerType?: string;
    properties?: string;
};

/**
 * @description 关联标绘数据
 * @summary Response data types
 * @url [ post ] /api/events/{eventId}/draws
 * @bizName eventBiz
 */
export type PostEventsEventIdDrawsResTypeByEts = {
    drawId: string;
    name: string;
    coordinates: string;
    type: string;
    markerType: string;
    properties: string;
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * @description 根据Id获取标绘项
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/draws/{id}
 * @bizName eventBiz
 */
export type GetEventsEventIdDrawsIdReqTypeByEts = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 根据Id获取标绘项
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/draws/{id}
 * @bizName eventBiz
 */
export type GetEventsEventIdDrawsIdResTypeByEts = {
    drawId: string;
    name: string;
    coordinates: string;
    type: string;
    markerType: string;
    properties: string;
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * @description 取消关联
 * @summary Request data types
 * @url [ delete ] /api/events/{eventId}/draws/{id}
 * @bizName eventBiz
 */
export type DeleteEventsEventIdDrawsIdReqTypeByEts = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 根据事件 Id 获取对应的事件日志
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/logs
 * @bizName eventBiz
 */
export type GetEventsEventIdLogsReqTypeByEts = {
    eventId: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 根据事件 Id 获取对应的事件日志
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/logs
 * @bizName eventBiz
 */
export type GetEventsEventIdLogsResTypeByEts = {
    totalCount: number;
    records: Array<{
        content: string;
        user: {
            id: string;
            name: string;
        };
        createTime: string;
        id: string;
        eventId: string;
        eventName: string;
        createdTime: string;
        platformId: string;
        resourceId: string;
        associtedDataId: string;
    }>;
};

/**
 * @description 获取事件关联的传真数据
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/faxes
 * @bizName eventBiz
 */
export type GetEventsEventIdFaxesReqTypeByEts = {
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 获取事件关联的传真数据
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/faxes
 * @bizName eventBiz
 */
export type GetEventsEventIdFaxesResTypeByEts = {
    totalCount: number;
    records: Array<{
        faxId: string;
        faxTitle: string;
        internationalCode: string;
        faxNumber: string;
        receiverId: string;
        receiver: string;
        receiverTitle: string;
        receiveCompany: string;
        senderId: string;
        sender: string;
        senderTitle: string;
        sendCompany: string;
        status: number;
        faxFiles: Array<{
            id: string;
            name: string;
            fullPath: string;
            length: number;
        }>;
        id: string;
        eventId: string;
        eventName: string;
        createdTime: string;
        platformId: string;
        resourceId: string;
        associtedDataId: string;
    }>;
};

/**
 * @description 关联传真数据
 * @summary Request data types
 * @url [ post ] /api/events/{eventId}/faxes
 * @bizName eventBiz
 */
export type PostEventsEventIdFaxesReqTypeByEts = {
    eventId: string;
    'X-version'?: string;
    faxId?: string;
    faxTitle?: string;
    internationalCode?: string;
    faxNumber?: string;
    receiverId?: string;
    receiver?: string;
    receiverTitle?: string;
    receiveCompany?: string;
    senderId?: string;
    sender?: string;
    senderTitle?: string;
    sendCompany?: string;
    status?: number;
    faxFiles?: Array<{
        id: string;
        name: string;
        fullPath: string;
        length: number;
    }>;
};

/**
 * @description 关联传真数据
 * @summary Response data types
 * @url [ post ] /api/events/{eventId}/faxes
 * @bizName eventBiz
 */
export type PostEventsEventIdFaxesResTypeByEts = {
    faxId: string;
    faxTitle: string;
    internationalCode: string;
    faxNumber: string;
    receiverId: string;
    receiver: string;
    receiverTitle: string;
    receiveCompany: string;
    senderId: string;
    sender: string;
    senderTitle: string;
    sendCompany: string;
    status: number;
    faxFiles: Array<{
        id: string;
        name: string;
        fullPath: string;
        length: number;
    }>;
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * @description 根据Id获取传真项
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/faxes/{id}
 * @bizName eventBiz
 */
export type GetEventsEventIdFaxesIdReqTypeByEts = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 根据Id获取传真项
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/faxes/{id}
 * @bizName eventBiz
 */
export type GetEventsEventIdFaxesIdResTypeByEts = {
    faxId: string;
    faxTitle: string;
    internationalCode: string;
    faxNumber: string;
    receiverId: string;
    receiver: string;
    receiverTitle: string;
    receiveCompany: string;
    senderId: string;
    sender: string;
    senderTitle: string;
    sendCompany: string;
    status: number;
    faxFiles: Array<{
        id: string;
        name: string;
        fullPath: string;
        length: number;
    }>;
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * @description 取消关联
 * @summary Request data types
 * @url [ delete ] /api/events/{eventId}/faxes/{id}
 * @bizName eventBiz
 */
export type DeleteEventsEventIdFaxesIdReqTypeByEts = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 获取事件关联的文件数据
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/files
 * @bizName eventBiz
 */
export type GetEventsEventIdFilesReqTypeByEts = {
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 获取事件关联的文件数据
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/files
 * @bizName eventBiz
 */
export type GetEventsEventIdFilesResTypeByEts = {
    totalCount: number;
    records: Array<{
        fileRecordID: string;
        fileRecord: {
            id: string;
            name: string;
            fileId: string;
            path: string;
            fullPath: string;
            thumbnailPath: string;
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
        };
        id: string;
        eventId: string;
        eventName: string;
        createdTime: string;
        platformId: string;
        resourceId: string;
        associtedDataId: string;
    }>;
};

/**
 * @description 关联文件数据
 * @summary Request data types
 * @url [ post ] /api/events/{eventId}/files
 * @bizName eventBiz
 */
export type PostEventsEventIdFilesReqTypeByEts = {
    eventId: string;
    'X-version'?: string;
    fileRecordID?: string;
};

/**
 * @description 关联文件数据
 * @summary Response data types
 * @url [ post ] /api/events/{eventId}/files
 * @bizName eventBiz
 */
export type PostEventsEventIdFilesResTypeByEts = {
    fileRecordID: string;
    fileRecord: {
        id: string;
        name: string;
        fileId: string;
        path: string;
        fullPath: string;
        thumbnailPath: string;
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
    };
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * @description 根据Id获取文件项
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/files/{id}
 * @bizName eventBiz
 */
export type GetEventsEventIdFilesIdReqTypeByEts = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 根据Id获取文件项
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/files/{id}
 * @bizName eventBiz
 */
export type GetEventsEventIdFilesIdResTypeByEts = {
    fileRecordID: string;
    fileRecord: {
        id: string;
        name: string;
        fileId: string;
        path: string;
        fullPath: string;
        thumbnailPath: string;
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
    };
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * @description 取消关联
 * @summary Request data types
 * @url [ delete ] /api/events/{eventId}/files/{id}
 * @bizName eventBiz
 */
export type DeleteEventsEventIdFilesIdReqTypeByEts = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 获取事件关联的拍传数据
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/multimediatransfers
 * @bizName eventBiz
 */
export type GetEventsEventIdMultimediatransfersReqTypeByEts = {
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 获取事件关联的拍传数据
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/multimediatransfers
 * @bizName eventBiz
 */
export type GetEventsEventIdMultimediatransfersResTypeByEts = {
    totalCount: number;
    records: Array<{
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
            }>;
        };
        taskInfos: Array<{
            id: string;
            name: string;
        }>;
        id: string;
        eventId: string;
        eventName: string;
        createdTime: string;
        platformId: string;
        resourceId: string;
        associtedDataId: string;
    }>;
};

/**
 * @description 关联拍传数据
 * @summary Request data types
 * @url [ post ] /api/events/{eventId}/multimediatransfers
 * @bizName eventBiz
 */
export type PostEventsEventIdMultimediatransfersReqTypeByEts = {
    eventId: string;
    'X-version'?: string;
    recordId?: string;
};

/**
 * @description 关联拍传数据
 * @summary Response data types
 * @url [ post ] /api/events/{eventId}/multimediatransfers
 * @bizName eventBiz
 */
export type PostEventsEventIdMultimediatransfersResTypeByEts = {
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
        }>;
    };
    taskInfos: Array<{
        id: string;
        name: string;
    }>;
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * @description 根据Id获取拍传项
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/multimediatransfers/{id}
 * @bizName eventBiz
 */
export type GetEventsEventIdMultimediatransfersIdReqTypeByEts = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 根据Id获取拍传项
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/multimediatransfers/{id}
 * @bizName eventBiz
 */
export type GetEventsEventIdMultimediatransfersIdResTypeByEts = {
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
        }>;
    };
    taskInfos: Array<{
        id: string;
        name: string;
    }>;
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * @description 取消关联
 * @summary Request data types
 * @url [ delete ] /api/events/{eventId}/multimediatransfers/{id}
 * @bizName eventBiz
 */
export type DeleteEventsEventIdMultimediatransfersIdReqTypeByEts = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 获取事件关联的图片数据
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/pictures
 * @bizName eventBiz
 */
export type GetEventsEventIdPicturesReqTypeByEts = {
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 获取事件关联的图片数据
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/pictures
 * @bizName eventBiz
 */
export type GetEventsEventIdPicturesResTypeByEts = {
    totalCount: number;
    records: Array<{
        fileRecordID: string;
        fileRecord: {
            id: string;
            name: string;
            fileId: string;
            path: string;
            fullPath: string;
            thumbnailPath: string;
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
        };
        id: string;
        eventId: string;
        eventName: string;
        createdTime: string;
        platformId: string;
        resourceId: string;
        associtedDataId: string;
    }>;
};

/**
 * @description 关联图片数据
 * @summary Request data types
 * @url [ post ] /api/events/{eventId}/pictures
 * @bizName eventBiz
 */
export type PostEventsEventIdPicturesReqTypeByEts = {
    eventId: string;
    'X-version'?: string;
    fileRecordID?: string;
};

/**
 * @description 关联图片数据
 * @summary Response data types
 * @url [ post ] /api/events/{eventId}/pictures
 * @bizName eventBiz
 */
export type PostEventsEventIdPicturesResTypeByEts = {
    fileRecordID: string;
    fileRecord: {
        id: string;
        name: string;
        fileId: string;
        path: string;
        fullPath: string;
        thumbnailPath: string;
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
    };
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * @description 根据Id获取图片项
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/pictures/{id}
 * @bizName eventBiz
 */
export type GetEventsEventIdPicturesIdReqTypeByEts = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 根据Id获取图片项
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/pictures/{id}
 * @bizName eventBiz
 */
export type GetEventsEventIdPicturesIdResTypeByEts = {
    fileRecordID: string;
    fileRecord: {
        id: string;
        name: string;
        fileId: string;
        path: string;
        fullPath: string;
        thumbnailPath: string;
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
    };
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * @description 取消关联
 * @summary Request data types
 * @url [ delete ] /api/events/{eventId}/pictures/{id}
 * @bizName eventBiz
 */
export type DeleteEventsEventIdPicturesIdReqTypeByEts = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 获取事件关联的短信消息数据
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/textmessages
 * @bizName eventBiz
 */
export type GetEventsEventIdTextmessagesReqTypeByEts = {
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 获取事件关联的短信消息数据
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/textmessages
 * @bizName eventBiz
 */
export type GetEventsEventIdTextmessagesResTypeByEts = {
    totalCount: number;
    records: Array<{
        textMessageId: string;
        receiver: string;
        receiverNumber: string;
        sender: string;
        senderNumber: string;
        content: string;
        sendTime: string;
        taskInfos: Array<{
            id: string;
            name: string;
        }>;
        id: string;
        eventId: string;
        eventName: string;
        createdTime: string;
        platformId: string;
        resourceId: string;
        associtedDataId: string;
    }>;
};

/**
 * @description 关联短信消息数据
 * @summary Request data types
 * @url [ post ] /api/events/{eventId}/textmessages
 * @bizName eventBiz
 */
export type PostEventsEventIdTextmessagesReqTypeByEts = {
    eventId: string;
    'X-version'?: string;
    textMessageId?: string;
    receiver?: string;
    receiverNumber?: string;
    sender?: string;
    senderNumber?: string;
    content?: string;
    sendTime?: string;
};

/**
 * @description 关联短信消息数据
 * @summary Response data types
 * @url [ post ] /api/events/{eventId}/textmessages
 * @bizName eventBiz
 */
export type PostEventsEventIdTextmessagesResTypeByEts = {
    textMessageId: string;
    receiver: string;
    receiverNumber: string;
    sender: string;
    senderNumber: string;
    content: string;
    sendTime: string;
    taskInfos: Array<{
        id: string;
        name: string;
    }>;
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * @description 根据Id获取短信消息项
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/textmessages/{id}
 * @bizName eventBiz
 */
export type GetEventsEventIdTextmessagesIdReqTypeByEts = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 根据Id获取短信消息项
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/textmessages/{id}
 * @bizName eventBiz
 */
export type GetEventsEventIdTextmessagesIdResTypeByEts = {
    textMessageId: string;
    receiver: string;
    receiverNumber: string;
    sender: string;
    senderNumber: string;
    content: string;
    sendTime: string;
    taskInfos: Array<{
        id: string;
        name: string;
    }>;
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * @description 取消关联
 * @summary Request data types
 * @url [ delete ] /api/events/{eventId}/textmessages/{id}
 * @bizName eventBiz
 */
export type DeleteEventsEventIdTextmessagesIdReqTypeByEts = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 获取事件关联的视频数据
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/videos
 * @bizName eventBiz
 */
export type GetEventsEventIdVideosReqTypeByEts = {
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 获取事件关联的视频数据
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/videos
 * @bizName eventBiz
 */
export type GetEventsEventIdVideosResTypeByEts = {
    totalCount: number;
    records: Array<{
        fileRecordID: string;
        fileRecord: {
            id: string;
            name: string;
            fileId: string;
            path: string;
            fullPath: string;
            thumbnailPath: string;
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
        };
        id: string;
        eventId: string;
        eventName: string;
        createdTime: string;
        platformId: string;
        resourceId: string;
        associtedDataId: string;
    }>;
};

/**
 * @description 关联视频数据
 * @summary Request data types
 * @url [ post ] /api/events/{eventId}/videos
 * @bizName eventBiz
 */
export type PostEventsEventIdVideosReqTypeByEts = {
    eventId: string;
    'X-version'?: string;
    fileRecordID?: string;
};

/**
 * @description 关联视频数据
 * @summary Response data types
 * @url [ post ] /api/events/{eventId}/videos
 * @bizName eventBiz
 */
export type PostEventsEventIdVideosResTypeByEts = {
    fileRecordID: string;
    fileRecord: {
        id: string;
        name: string;
        fileId: string;
        path: string;
        fullPath: string;
        thumbnailPath: string;
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
    };
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * @description 根据Id获取视频项
 * @summary Request data types
 * @url [ get ] /api/events/{eventId}/videos/{id}
 * @bizName eventBiz
 */
export type GetEventsEventIdVideosIdReqTypeByEts = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 根据Id获取视频项
 * @summary Response data types
 * @url [ get ] /api/events/{eventId}/videos/{id}
 * @bizName eventBiz
 */
export type GetEventsEventIdVideosIdResTypeByEts = {
    fileRecordID: string;
    fileRecord: {
        id: string;
        name: string;
        fileId: string;
        path: string;
        fullPath: string;
        thumbnailPath: string;
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
    };
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * @description 取消关联
 * @summary Request data types
 * @url [ delete ] /api/events/{eventId}/videos/{id}
 * @bizName eventBiz
 */
export type DeleteEventsEventIdVideosIdReqTypeByEts = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * @description 创建事件反馈接口
 * @summary Request data types
 * @url [ post ] /api/EventFeedbacks
 * @bizName eventBiz
 */
export type PostEventFeedbacksReqTypeByEts = {
    'X-version'?: string;
    eventId?: string;
    title?: string;
    content?: string;
    fileGroupId?: string;
    reporter?: string;
    createdTime?: string;
    resourceId?: string;
};

/**
 * @description 创建事件反馈接口
 * @summary Response data types
 * @url [ post ] /api/EventFeedbacks
 * @bizName eventBiz
 */
export type PostEventFeedbacksResTypeByEts = {
    id: string;
    taskId: string;
    taskName: string;
    taskState: 1 | 2 | 4 | 8 | 16;
    content: string;
    createdTime: string;
    user: {
        id: string;
        name: string;
    };
    group: {
        description: string;
        id: string;
        name: string;
    };
    platformId: string;
    resourceId: string;
    type: 1 | 2;
    fileGroupId: string;
};

/**
 * @description 获取指定事件的反馈的接口
 * @summary Request data types
 * @url [ get ] /api/EventFeedbacks/{eventId}/feedback
 * @bizName eventBiz
 */
export type GetEventFeedbacksEventIdFeedbackReqTypeByEts = {
    eventId: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取指定事件的反馈的接口
 * @summary Response data types
 * @url [ get ] /api/EventFeedbacks/{eventId}/feedback
 * @bizName eventBiz
 */
export type GetEventFeedbacksEventIdFeedbackResTypeByEts = {
    totalCount: number;
    records: Array<{
        id: string;
        eventId: string;
        eventName: string;
        type: 1 | 2 | 3;
        createdTime: string;
        title: string;
        content: string;
        fileGroupId: string;
        userId: string;
        reporter: string;
        platformId: string;
        resourceId: string;
    }>;
};

/**
 * @description 获取指定反馈的接口
 * @summary Request data types
 * @url [ get ] /api/EventFeedbacks/{id}
 * @bizName eventBiz
 */
export type GetEventFeedbacksIdReqTypeByEts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取指定反馈的接口
 * @summary Response data types
 * @url [ get ] /api/EventFeedbacks/{id}
 * @bizName eventBiz
 */
export type GetEventFeedbacksIdResTypeByEts = {
    id: string;
    eventId: string;
    eventName: string;
    type: 1 | 2 | 3;
    createdTime: string;
    title: string;
    content: string;
    fileGroupId: string;
    userId: string;
    reporter: string;
    platformId: string;
    resourceId: string;
};

/**
 * @description 获取符合查询条件的事件实体
 * @summary Request data types
 * @url [ get ] /api/Events
 * @bizName eventBiz
 */
export type GetEventsReqTypeByEts = {
    status?: Array<number>;
    'up_left.Longitude'?: number;
    'up_left.Latitude'?: number;
    'bottom_right.Longitude'?: number;
    'bottom_right.Latitude'?: number;
    is_sort?: boolean;
    IsAudited?: boolean;
    resourceId?: string;
    SortType?: number;
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
 * @bizName eventBiz
 */
export type GetEventsResTypeByEts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
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
        priority: number;
        state: number;
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
        longitude: number;
        latitude: number;
        typeID: string;
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
        expectStartedTime: string;
        expectFinishedTime: string;
        createdTime: string;
        isMock: boolean;
        totalTaskCount: number;
        noStatedTaskCount: number;
        finishedTaskCount: number;
        confirmedTaskCount: number;
        inProcessTaskCount: number;
        pausedTaskCount: number;
        areaCode: string;
        isDeleted: boolean;
        responseLevel: {
            preplanId: string;
            enableResponseLevelId: string;
        };
        associatePreplanId: string;
        platformId: string;
        resourceId: string;
        updateTime: string;
        principal: Array<{
            id: string;
            name: string;
            position: string;
            number: string;
        }>;
        disposer: Array<{
            id: string;
            name: string;
            position: string;
            number: string;
        }>;
        serialNumber: number;
        disposalInstruction: string;
        notifyType: 0 | 1 | 2 | 4;
        isAudited: boolean;
    }>;
};

/**
 * @description 创建事件实体
 * @summary Request data types
 * @url [ post ] /api/Events
 * @bizName eventBiz
 */
export type PostEventsReqTypeByEts = {
    'X-version'?: string;
    priority?: 1 | 2 | 4 | 8 | 16;
    name: string;
    description?: string;
    groupId?: string;
    sceneGroupId?: string;
    happenedTime?: string;
    address?: string;
    submitUnit?: {
        id: string;
        name: string;
        path: string;
        unitType: 0 | 1 | 2;
    };
    unit?: {
        id: string;
        name: string;
        path: string;
        unitType: 0 | 1 | 2;
    };
    source?: {
        id: string;
        name: string;
        sourceType: 0 | 1 | 2;
    };
    extension?: string;
    longitude?: number;
    latitude?: number;
    typeId: string;
    expectStartedTime?: string;
    expectFinishedTime?: string;
    isMock?: boolean;
    areaCode?: string;
    responseLevel?: {
        preplanId: string;
        enableResponseLevelId: string;
    };
    principal?: Array<{
        id: string;
        name: string;
        position: string;
        number: string;
    }>;
    disposer?: Array<{
        id: string;
        name: string;
        position: string;
        number: string;
    }>;
    disposalInstruction?: string;
    notifyType?: 0 | 1 | 2 | 4;
    associatePreplanId?: string;
    resourceId?: string;
    isAudited?: boolean;
};

/**
 * @description 创建事件实体
 * @summary Response data types
 * @url [ post ] /api/Events
 * @bizName eventBiz
 */
export type PostEventsResTypeByEts = {
    id: string;
    name: string;
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
    priority: number;
    state: number;
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
    longitude: number;
    latitude: number;
    typeID: string;
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
    expectStartedTime: string;
    expectFinishedTime: string;
    createdTime: string;
    isMock: boolean;
    totalTaskCount: number;
    noStatedTaskCount: number;
    finishedTaskCount: number;
    confirmedTaskCount: number;
    inProcessTaskCount: number;
    pausedTaskCount: number;
    areaCode: string;
    isDeleted: boolean;
    responseLevel: {
        preplanId: string;
        enableResponseLevelId: string;
    };
    associatePreplanId: string;
    platformId: string;
    resourceId: string;
    updateTime: string;
    principal: Array<{
        id: string;
        name: string;
        position: string;
        number: string;
    }>;
    disposer: Array<{
        id: string;
        name: string;
        position: string;
        number: string;
    }>;
    serialNumber: number;
    disposalInstruction: string;
    notifyType: 0 | 1 | 2 | 4;
    isAudited: boolean;
};

/**
 * @description 获取指定id的事件实体详情
 * @summary Request data types
 * @url [ get ] /api/Events/{id}
 * @bizName eventBiz
 */
export type GetEventsIdReqTypeByEts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取指定id的事件实体详情
 * @summary Response data types
 * @url [ get ] /api/Events/{id}
 * @bizName eventBiz
 */
export type GetEventsIdResTypeByEts = {
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
    id: string;
    name: string;
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
    priority: number;
    state: number;
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
    longitude: number;
    latitude: number;
    typeID: string;
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
    expectStartedTime: string;
    expectFinishedTime: string;
    createdTime: string;
    isMock: boolean;
    totalTaskCount: number;
    noStatedTaskCount: number;
    finishedTaskCount: number;
    confirmedTaskCount: number;
    inProcessTaskCount: number;
    pausedTaskCount: number;
    areaCode: string;
    isDeleted: boolean;
    responseLevel: {
        preplanId: string;
        enableResponseLevelId: string;
    };
    associatePreplanId: string;
    platformId: string;
    resourceId: string;
    updateTime: string;
    principal: Array<{
        id: string;
        name: string;
        position: string;
        number: string;
    }>;
    disposer: Array<{
        id: string;
        name: string;
        position: string;
        number: string;
    }>;
    serialNumber: number;
    disposalInstruction: string;
    notifyType: 0 | 1 | 2 | 4;
    isAudited: boolean;
};

/**
 * @description 更新事件实体
 * @summary Request data types
 * @url [ put ] /api/Events/{id}
 * @bizName eventBiz
 */
export type PutEventsIdReqTypeByEts = {
    id: string;
    'X-version'?: string;
    name: string;
    description?: string;
    groupId?: string;
    sceneGroupId?: string;
    happenedTime?: string;
    address?: string;
    submitUnit?: {
        id: string;
        name: string;
        path: string;
        unitType: 0 | 1 | 2;
    };
    unit?: {
        id: string;
        name: string;
        path: string;
        unitType: 0 | 1 | 2;
    };
    source?: {
        id: string;
        name: string;
        sourceType: 0 | 1 | 2;
    };
    extension?: string;
    longitude?: number;
    latitude?: number;
    typeId: string;
    expectStartedTime?: string;
    expectFinishedTime?: string;
    isMock?: boolean;
    areaCode?: string;
    responseLevel?: {
        preplanId: string;
        enableResponseLevelId: string;
    };
    principal?: Array<{
        id: string;
        name: string;
        position: string;
        number: string;
    }>;
    disposer?: Array<{
        id: string;
        name: string;
        position: string;
        number: string;
    }>;
    disposalInstruction?: string;
    notifyType?: 0 | 1 | 2 | 4;
    associatePreplanId?: string;
    resourceId?: string;
    isAudited?: boolean;
};

/**
 * @description 删除事件实体
 * @summary Request data types
 * @url [ delete ] /api/Events/{id}
 * @bizName eventBiz
 */
export type DeleteEventsIdReqTypeByEts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取状态为`未开始`、`处理中`的事件实体
 * @summary Request data types
 * @url [ get ] /api/Events/running
 * @bizName eventBiz
 */
export type GetEventsRunningReqTypeByEts = {
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
 * @bizName eventBiz
 */
export type GetEventsRunningResTypeByEts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
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
        priority: number;
        state: number;
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
        longitude: number;
        latitude: number;
        typeID: string;
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
        expectStartedTime: string;
        expectFinishedTime: string;
        createdTime: string;
        isMock: boolean;
        totalTaskCount: number;
        noStatedTaskCount: number;
        finishedTaskCount: number;
        confirmedTaskCount: number;
        inProcessTaskCount: number;
        pausedTaskCount: number;
        areaCode: string;
        isDeleted: boolean;
        responseLevel: {
            preplanId: string;
            enableResponseLevelId: string;
        };
        associatePreplanId: string;
        platformId: string;
        resourceId: string;
        updateTime: string;
        principal: Array<{
            id: string;
            name: string;
            position: string;
            number: string;
        }>;
        disposer: Array<{
            id: string;
            name: string;
            position: string;
            number: string;
        }>;
        serialNumber: number;
        disposalInstruction: string;
        notifyType: 0 | 1 | 2 | 4;
        isAudited: boolean;
    }>;
};

/**
 * @description 获取状态为`已结束`的事件实体
 * @summary Request data types
 * @url [ get ] /api/Events/history
 * @bizName eventBiz
 */
export type GetEventsHistoryReqTypeByEts = {
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
 * @bizName eventBiz
 */
export type GetEventsHistoryResTypeByEts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
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
        priority: number;
        state: number;
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
        longitude: number;
        latitude: number;
        typeID: string;
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
        expectStartedTime: string;
        expectFinishedTime: string;
        createdTime: string;
        isMock: boolean;
        totalTaskCount: number;
        noStatedTaskCount: number;
        finishedTaskCount: number;
        confirmedTaskCount: number;
        inProcessTaskCount: number;
        pausedTaskCount: number;
        areaCode: string;
        isDeleted: boolean;
        responseLevel: {
            preplanId: string;
            enableResponseLevelId: string;
        };
        associatePreplanId: string;
        platformId: string;
        resourceId: string;
        updateTime: string;
        principal: Array<{
            id: string;
            name: string;
            position: string;
            number: string;
        }>;
        disposer: Array<{
            id: string;
            name: string;
            position: string;
            number: string;
        }>;
        serialNumber: number;
        disposalInstruction: string;
        notifyType: 0 | 1 | 2 | 4;
        isAudited: boolean;
    }>;
};

/**
 * @description 获取自身相关事件
 * @summary Request data types
 * @url [ get ] /api/Events/owner
 * @bizName eventBiz
 */
export type GetEventsOwnerReqTypeByEts = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取自身相关事件
 * @summary Response data types
 * @url [ get ] /api/Events/owner
 * @bizName eventBiz
 */
export type GetEventsOwnerResTypeByEts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
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
        priority: number;
        state: number;
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
        longitude: number;
        latitude: number;
        typeID: string;
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
        expectStartedTime: string;
        expectFinishedTime: string;
        createdTime: string;
        isMock: boolean;
        totalTaskCount: number;
        noStatedTaskCount: number;
        finishedTaskCount: number;
        confirmedTaskCount: number;
        inProcessTaskCount: number;
        pausedTaskCount: number;
        areaCode: string;
        isDeleted: boolean;
        responseLevel: {
            preplanId: string;
            enableResponseLevelId: string;
        };
        associatePreplanId: string;
        platformId: string;
        resourceId: string;
        updateTime: string;
        principal: Array<{
            id: string;
            name: string;
            position: string;
            number: string;
        }>;
        disposer: Array<{
            id: string;
            name: string;
            position: string;
            number: string;
        }>;
        serialNumber: number;
        disposalInstruction: string;
        notifyType: 0 | 1 | 2 | 4;
        isAudited: boolean;
    }>;
};

/**
 * @description 更新事件实体的优先级
 * @summary Request data types
 * @url [ put ] /api/Events/{id}/priority
 * @bizName eventBiz
 */
export type PutEventsIdPriorityReqTypeByEts = {
    id: string;
    'X-version'?: string;
    value: 1 | 2 | 4 | 8 | 16;
    taskResetType?: 0 | 1 | 2;
};

/**
 * @description 更新事件实体的状态
 * @summary Request data types
 * @url [ put ] /api/Events/{id}/state
 * @bizName eventBiz
 */
export type PutEventsIdStateReqTypeByEts = {
    id: string;
    'X-version'?: string;
    value: number;
};

/**
 * @description 修改事件预案接口
 * @summary Request data types
 * @url [ put ] /api/Events/{id}/preplan
 * @bizName eventBiz
 */
export type PutEventsIdPreplanReqTypeByEts = {
    id: string;
    'X-version'?: string;
    preplanId?: string;
    isResetTask?: boolean;
};

/**
 * @description 导入事件
 * @summary Request data types
 * @url [ post ] /api/Events/import
 * @bizName eventBiz
 */
export type PostEventsImportReqTypeByEts = {
    'X-version'?: string;
    importEvents: Array<{
        priority: 1 | 2 | 4 | 8 | 16;
        resourceId: string;
        platformId: string;
        typeId: string;
        createdTime: string;
        totalTaskCount: number;
        noStatedTaskCount: number;
        finishedTaskCount: number;
        confirmedTaskCount: number;
        inProcessTaskCount: number;
        pausedTaskCount: number;
        state: number;
        name: string;
        description: string;
        groupId: string;
        sceneGroupId: string;
        happenedTime: string;
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
        longitude: number;
        latitude: number;
        expectStartedTime: string;
        expectFinishedTime: string;
        isMock: boolean;
        areaCode: string;
        responseLevel: {
            preplanId: string;
            enableResponseLevelId: string;
        };
        principal: Array<{
            id: string;
            name: string;
            position: string;
            number: string;
        }>;
        disposer: Array<{
            id: string;
            name: string;
            position: string;
            number: string;
        }>;
        disposalInstruction: string;
        notifyType: 0 | 1 | 2 | 4;
        associatePreplanId: string;
        isAudited: boolean;
    }>;
};

/**
 * @description 移除异常事件
 * @summary Request data types
 * @url [ delete ] /api/Events/remove
 * @bizName eventBiz
 */
export type DeleteEventsRemoveReqTypeByEts = {
    'X-version'?: string;
};

/**
 * @description 通过 Id 获取事件类型组
 * @summary Request data types
 * @url [ get ] /api/EventTypeGroups/{id}
 * @bizName eventBiz
 */
export type GetEventTypeGroupsIdReqTypeByEts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 通过 Id 获取事件类型组
 * @summary Response data types
 * @url [ get ] /api/EventTypeGroups/{id}
 * @bizName eventBiz
 */
export type GetEventTypeGroupsIdResTypeByEts = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    eventTypes: Array<{
        description: string;
        id: string;
        name: string;
    }>;
    childEventTypeGroupInfos: Array<{
        description: string;
        id: string;
        name: string;
    }>;
    extension: string;
    platformId: string;
    resourceId: string;
};

/**
 * @description 更新事件类型组
 * @summary Request data types
 * @url [ put ] /api/EventTypeGroups/{id}
 * @bizName eventBiz
 */
export type PutEventTypeGroupsIdReqTypeByEts = {
    id: string;
    'X-version'?: string;
    name: string;
    description?: string;
    extension?: string;
};

/**
 * @description 删除事件类型组
 * @summary Request data types
 * @url [ delete ] /api/EventTypeGroups/{id}
 * @bizName eventBiz
 */
export type DeleteEventTypeGroupsIdReqTypeByEts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取所有事件类型组(可通过参数只获取根事件类型组)
 * @summary Request data types
 * @url [ get ] /api/EventTypeGroups
 * @bizName eventBiz
 */
export type GetEventTypeGroupsReqTypeByEts = {
    Keyword?: string;
    EventTypeId?: string;
    Root?: boolean;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取所有事件类型组(可通过参数只获取根事件类型组)
 * @summary Response data types
 * @url [ get ] /api/EventTypeGroups
 * @bizName eventBiz
 */
export type GetEventTypeGroupsResTypeByEts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        eventTypes: Array<{
            description: string;
            id: string;
            name: string;
        }>;
        childEventTypeGroupInfos: Array<{
            description: string;
            id: string;
            name: string;
        }>;
        extension: string;
        platformId: string;
        resourceId: string;
    }>;
};

/**
 * @description 创建事件类型组
 * @summary Request data types
 * @url [ post ] /api/EventTypeGroups
 * @bizName eventBiz
 */
export type PostEventTypeGroupsReqTypeByEts = {
    'X-version'?: string;
    name: string;
    description?: string;
    extension?: string;
};

/**
 * @description 创建事件类型组
 * @summary Response data types
 * @url [ post ] /api/EventTypeGroups
 * @bizName eventBiz
 */
export type PostEventTypeGroupsResTypeByEts = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    eventTypes: Array<{
        description: string;
        id: string;
        name: string;
    }>;
    childEventTypeGroupInfos: Array<{
        description: string;
        id: string;
        name: string;
    }>;
    extension: string;
    platformId: string;
    resourceId: string;
};

/**
 * @description 通过父级 Id 获取子事件任务组
 * @summary Request data types
 * @url [ get ] /api/EventTypeGroups/{id}/children
 * @bizName eventBiz
 */
export type GetEventTypeGroupsIdChildrenReqTypeByEts = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 通过父级 Id 获取子事件任务组
 * @summary Response data types
 * @url [ get ] /api/EventTypeGroups/{id}/children
 * @bizName eventBiz
 */
export type GetEventTypeGroupsIdChildrenResTypeByEts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        eventTypes: Array<{
            description: string;
            id: string;
            name: string;
        }>;
        childEventTypeGroupInfos: Array<{
            description: string;
            id: string;
            name: string;
        }>;
        extension: string;
        platformId: string;
        resourceId: string;
    }>;
};

/**
 * @description 创建子事件类型组
 * @summary Request data types
 * @url [ post ] /api/EventTypeGroups/parent/{id}
 * @bizName eventBiz
 */
export type PostEventTypeGroupsParentIdReqTypeByEts = {
    id: string;
    'X-version'?: string;
    name: string;
    description?: string;
    extension?: string;
};

/**
 * @description 创建子事件类型组
 * @summary Response data types
 * @url [ post ] /api/EventTypeGroups/parent/{id}
 * @bizName eventBiz
 */
export type PostEventTypeGroupsParentIdResTypeByEts = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    eventTypes: Array<{
        description: string;
        id: string;
        name: string;
    }>;
    childEventTypeGroupInfos: Array<{
        description: string;
        id: string;
        name: string;
    }>;
    extension: string;
    platformId: string;
    resourceId: string;
};

/**
 * @description 根据事件类型组id分页获取事件类型
 * @summary Request data types
 * @url [ get ] /api/EventTypeGroups/{id}/EventTypes
 * @bizName eventBiz
 */
export type GetEventTypeGroupsIdEventTypesReqTypeByEts = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 根据事件类型组id分页获取事件类型
 * @summary Response data types
 * @url [ get ] /api/EventTypeGroups/{id}/EventTypes
 * @bizName eventBiz
 */
export type GetEventTypeGroupsIdEventTypesResTypeByEts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        value: number;
        isEffective: boolean;
        code: string;
        platformId: string;
        resourceId: string;
    }>;
};

/**
 * @description 用户可根据类型组名称，事件类型搜索对应的事件类型组和事件类型
 * @summary Request data types
 * @url [ get ] /api/EventTypeGroups/search
 * @bizName eventBiz
 */
export type GetEventTypeGroupsSearchReqTypeByEts = {
    Keyword: string;
    Limit?: number;
    'X-version'?: string;
};

/**
 * @description 用户可根据类型组名称，事件类型搜索对应的事件类型组和事件类型
 * @summary Response data types
 * @url [ get ] /api/EventTypeGroups/search
 * @bizName eventBiz
 */
export type GetEventTypeGroupsSearchResTypeByEts = {
    eventTypeGroups: {
        totalCount: number;
        records: Array<{
            id: string;
            name: string;
            idPath: string;
            namePath: string;
        }>;
    };
    eventTypes: {
        totalCount: number;
        records: Array<{
            id: string;
            name: string;
            idPath: string;
            namePath: string;
        }>;
    };
};

/**
 * @description 导入事件类型组
 * @summary Request data types
 * @url [ post ] /api/EventTypeGroups/import
 * @bizName eventBiz
 */
export type PostEventTypeGroupsImportReqTypeByEts = {
    'X-version'?: string;
    importEventTypeGroups?: Array<{
        name: string;
        description: string;
        extension: string;
        resourceId: string;
        parentId: string;
        platformId: string;
    }>;
};

/**
 * @description 获取事件类型子组【父级ID不传默认查询根级组】
 * @summary Request data types
 * @url [ post ] /api/EventTypeGroups/children
 * @bizName eventBiz
 */
export type PostEventTypeGroupsChildrenReqTypeByEts = {
    'X-version'?: string;
    parentId?: string;
    selectedIds?: Array<string>;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * @description 获取事件类型子组【父级ID不传默认查询根级组】
 * @summary Response data types
 * @url [ post ] /api/EventTypeGroups/children
 * @bizName eventBiz
 */
export type PostEventTypeGroupsChildrenResTypeByEts = {
    totalCount: number;
    records: Array<{
        useStatus: 0 | 1 | 2;
        isLeaf: boolean;
        isLeafGroup: boolean;
        id: string;
        name: string;
        description: string;
        parentId: string;
        eventTypes: Array<{
            description: string;
            id: string;
            name: string;
        }>;
        childEventTypeGroupInfos: Array<{
            description: string;
            id: string;
            name: string;
        }>;
        extension: string;
        platformId: string;
        resourceId: string;
    }>;
};

/**
 * @description 将事件类型ID集合合并为对应的事件类型组
 * @summary Request data types
 * @url [ post ] /api/EventTypeGroups/children/mergence
 * @bizName eventBiz
 */
export type PostEventTypeGroupsChildrenMergenceReqTypeByEts = {
    'X-version'?: string;
    ids?: Array<string>;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * @description 将事件类型ID集合合并为对应的事件类型组
 * @summary Response data types
 * @url [ post ] /api/EventTypeGroups/children/mergence
 * @bizName eventBiz
 */
export type PostEventTypeGroupsChildrenMergenceResTypeByEts = {
    totalCount: number;
    records: Array<{
        idPath: string;
        namePath: string;
        isLeaf: boolean;
        parentId: string;
        isEventTypeGroup: boolean;
        isLeafGroup: boolean;
        id: string;
        name: string;
    }>;
};

/**
 * @description 批量事件类型组ID获取事件类型【包含下级事件类型】
 * @summary Request data types
 * @url [ post ] /api/EventTypeGroups/subordinates
 * @bizName eventBiz
 */
export type PostEventTypeGroupsSubordinatesReqTypeByEts = {
    'X-version'?: string;
    ids?: Array<string>;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * @description 批量事件类型组ID获取事件类型【包含下级事件类型】
 * @summary Response data types
 * @url [ post ] /api/EventTypeGroups/subordinates
 * @bizName eventBiz
 */
export type PostEventTypeGroupsSubordinatesResTypeByEts = {
    totalCount: number;
    records: Array<{
        idPath: string;
        namePath: string;
        isLeaf: boolean;
        parentId: string;
        isEventTypeGroup: boolean;
        isLeafGroup: boolean;
        id: string;
        name: string;
    }>;
};

/**
 * @description 获取所有事件类型
 * @summary Request data types
 * @url [ get ] /api/EventTypes
 * @bizName eventBiz
 */
export type GetEventTypesReqTypeByEts = {
    Keyword?: string;
    'X-version'?: string;
};

/**
 * @description 获取所有事件类型
 * @summary Response data types
 * @url [ get ] /api/EventTypes
 * @bizName eventBiz
 */
export type GetEventTypesResTypeByEts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        value: number;
        isEffective: boolean;
        code: string;
        platformId: string;
        resourceId: string;
    }>;
};

/**
 * @description 根据事件类型 Id 获取事件类型
 * @summary Request data types
 * @url [ get ] /api/EventTypes/{id}
 * @bizName eventBiz
 */
export type GetEventTypesIdReqTypeByEts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 根据事件类型 Id 获取事件类型
 * @summary Response data types
 * @url [ get ] /api/EventTypes/{id}
 * @bizName eventBiz
 */
export type GetEventTypesIdResTypeByEts = {
    id: string;
    name: string;
    description: string;
    value: number;
    isEffective: boolean;
    code: string;
    platformId: string;
    resourceId: string;
};

/**
 * @description 更新事件类型
 * @summary Request data types
 * @url [ put ] /api/EventTypes/{id}
 * @bizName eventBiz
 */
export type PutEventTypesIdReqTypeByEts = {
    id: string;
    'X-version'?: string;
    name: string;
    description?: string;
    value: number;
    code?: string;
};

/**
 * @description 删除事件类型
 * @summary Request data types
 * @url [ delete ] /api/EventTypes/{id}
 * @bizName eventBiz
 */
export type DeleteEventTypesIdReqTypeByEts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取事件类型的组路径
 * @summary Request data types
 * @url [ get ] /api/EventTypes/{id}/path
 * @bizName eventBiz
 */
export type GetEventTypesIdPathReqTypeByEts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取事件类型的组路径
 * @summary Response data types
 * @url [ get ] /api/EventTypes/{id}/path
 * @bizName eventBiz
 */
export type GetEventTypesIdPathResTypeByEts = {
    idPath: string;
    namePath: string;
};

/**
 * @description 批量Ids/ResourceIDs获取事件类型集合
 * @summary Request data types
 * @url [ post ] /api/EventTypes/batch
 * @bizName eventBiz
 */
export type PostEventTypesBatchReqTypeByEts = {
    'X-version'?: string;
    ids: Array<string>;
};

/**
 * @description 批量Ids/ResourceIDs获取事件类型集合
 * @summary Response data types
 * @url [ post ] /api/EventTypes/batch
 * @bizName eventBiz
 */
export type PostEventTypesBatchResTypeByEts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        value: number;
        isEffective: boolean;
        code: string;
        platformId: string;
        resourceId: string;
    }>;
};

/**
 * @description 导入事件类型
 * @summary Request data types
 * @url [ post ] /api/EventTypes/import
 * @bizName eventBiz
 */
export type PostEventTypesImportReqTypeByEts = {
    'X-version'?: string;
    groupingItems?: Array<{
        catalog: string;
        grouping: string;
        type: Array<string>;
        resourceId: string;
    }>;
};

/**
 * @description 导入事件类型
 * @summary Response data types
 * @url [ post ] /api/EventTypes/import
 * @bizName eventBiz
 */
export type PostEventTypesImportResTypeByEts = {
    id: string;
    name: string;
    description: string;
    value: number;
    isEffective: boolean;
    code: string;
    platformId: string;
    resourceId: string;
};

/**
 * @description 创建事件类型
 * @summary Request data types
 * @url [ post ] /api/EventTypeGroups/{eventTypeGroupId}/EventTypes
 * @bizName eventBiz
 */
export type PostEventTypeGroupsEventTypeGroupIdEventTypesReqTypeByEts = {
    eventTypeGroupId: string;
    'X-version'?: string;
    name: string;
    description?: string;
    value: number;
    code?: string;
};

/**
 * @description 创建事件类型
 * @summary Response data types
 * @url [ post ] /api/EventTypeGroups/{eventTypeGroupId}/EventTypes
 * @bizName eventBiz
 */
export type PostEventTypeGroupsEventTypeGroupIdEventTypesResTypeByEts = {
    id: string;
    name: string;
    description: string;
    value: number;
    isEffective: boolean;
    code: string;
    platformId: string;
    resourceId: string;
};

/**
 * @description 导出事件类型(包含组)
 * @summary Request data types
 * @url [ post ] /api/EventTypes/export/relationship
 * @bizName eventBiz
 */
export type PostEventTypesExportRelationshipReqTypeByEts = {
    'X-version'?: string;
    ids: Array<string>;
};

/**
 * @description 导出事件类型(包含组)
 * @summary Response data types
 * @url [ post ] /api/EventTypes/export/relationship
 * @bizName eventBiz
 */
export type PostEventTypesExportRelationshipResTypeByEts = {
    eventType: Array<{
        groupId: string;
        name: string;
        description: string;
        value: number;
        isEffective: boolean;
        code: string;
        platformId: string;
        resourceId: string;
        id: string;
    }>;
    eventTypeGroup: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        extension: string;
        platformId: string;
        resourceId: string;
    }>;
};

/**
 * @description 导入事件类型(包含组)【此接口适用于export/relationship导出的数据】
 * @summary Request data types
 * @url [ post ] /api/EventTypes/import/relationship
 * @bizName eventBiz
 */
export type PostEventTypesImportRelationshipReqTypeByEts = {
    'X-version'?: string;
    eventType?: Array<{
        groupId: string;
        name: string;
        description: string;
        value: number;
        isEffective: boolean;
        code: string;
        platformId: string;
        resourceId: string;
        id: string;
    }>;
    eventTypeGroup?: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        extension: string;
        platformId: string;
        resourceId: string;
    }>;
};

/**
 * @description 按条件查询预案
 * @summary Request data types
 * @url [ get ] /api/Preplans
 * @bizName eventBiz
 */
export type GetPreplansReqTypeByEts = {
    event_type_id?: string;
    event_priority?: string;
    areaCode?: string;
    prefixAreaCode?: string;
    keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 按条件查询预案
 * @summary Response data types
 * @url [ get ] /api/Preplans
 * @bizName eventBiz
 */
export type GetPreplansResTypeByEts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        eventType: {
            description: string;
            id: string;
            name: string;
        };
        areaCode: string;
        eventPriority: number;
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
        thirdPlatforms: Array<{
            id: string;
            name: string;
        }>;
        customResources: Record<string, any>;
    }>;
};

/**
 * @description 通过预案ID获取预案
 * @summary Request data types
 * @url [ get ] /api/Preplans/{id}
 * @bizName eventBiz
 */
export type GetPreplansIdReqTypeByEts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 通过预案ID获取预案
 * @summary Response data types
 * @url [ get ] /api/Preplans/{id}
 * @bizName eventBiz
 */
export type GetPreplansIdResTypeByEts = {
    id: string;
    name: string;
    eventType: {
        description: string;
        id: string;
        name: string;
    };
    areaCode: string;
    eventPriority: number;
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
    thirdPlatforms: Array<{
        id: string;
        name: string;
    }>;
    customResources: Record<string, any>;
};

/**
 * @description 更新预案
 * @summary Request data types
 * @url [ put ] /api/Preplans/{id}
 * @bizName eventBiz
 */
export type PutPreplansIdReqTypeByEts = {
    id: string;
    'X-version'?: string;
    name?: string;
    eventPriority?: number;
    areaCode?: string;
    eventAffectRadius?: number;
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
    textTemplate?: string;
    sceneParameters?: Array<string>;
    directoryRecordId?: string;
    taskTemplateId?: string;
    associatedGroup?: {
        description: string;
        id: string;
        name: string;
    };
    sceneGroup?: {
        description: string;
        id: string;
        name: string;
    };
    firstResponseLevel?: {
        name: string;
        content: string;
        condition: string;
    };
    secondResponseLevel?: {
        name: string;
        content: string;
        condition: string;
    };
    thirdResponseLevel?: {
        name: string;
        content: string;
        condition: string;
    };
    fourthResponseLevel?: {
        name: string;
        content: string;
        condition: string;
    };
    cameraLabels?: Array<{
        id: number;
        name: string;
    }>;
    preplanGroups?: Array<{
        description: string;
        id: string;
        name: string;
    }>;
    videoConferenceTerminals?: Array<{
        id: string;
        name: string;
    }>;
    thirdPlatforms?: Array<{
        id: string;
        name: string;
    }>;
    customResources?: Record<string, any>;
};

/**
 * @description 删除预案
 * @summary Request data types
 * @url [ delete ] /api/Preplans/{id}
 * @bizName eventBiz
 */
export type DeletePreplansIdReqTypeByEts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 批量Ids/ResourceIDs获取预案集合
 * @summary Request data types
 * @url [ post ] /api/Preplans/batch
 * @bizName eventBiz
 */
export type PostPreplansBatchReqTypeByEts = {
    'X-version'?: string;
    ids: Array<string>;
};

/**
 * @description 批量Ids/ResourceIDs获取预案集合
 * @summary Response data types
 * @url [ post ] /api/Preplans/batch
 * @bizName eventBiz
 */
export type PostPreplansBatchResTypeByEts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        eventType: {
            description: string;
            id: string;
            name: string;
        };
        areaCode: string;
        eventPriority: number;
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
        thirdPlatforms: Array<{
            id: string;
            name: string;
        }>;
        customResources: Record<string, any>;
    }>;
};

/**
 * @description 创建预案
 * @summary Request data types
 * @url [ post ] /api/{eventTypeId}/Preplans
 * @bizName eventBiz
 */
export type PostEventTypeIdPreplansReqTypeByEts = {
    eventTypeId: string;
    'X-version'?: string;
    name?: string;
    eventPriority?: number;
    areaCode?: string;
    eventAffectRadius?: number;
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
    textTemplate?: string;
    sceneParameters?: Array<string>;
    directoryRecordId?: string;
    taskTemplateId?: string;
    associatedGroup?: {
        description: string;
        id: string;
        name: string;
    };
    sceneGroup?: {
        description: string;
        id: string;
        name: string;
    };
    firstResponseLevel?: {
        name: string;
        content: string;
        condition: string;
    };
    secondResponseLevel?: {
        name: string;
        content: string;
        condition: string;
    };
    thirdResponseLevel?: {
        name: string;
        content: string;
        condition: string;
    };
    fourthResponseLevel?: {
        name: string;
        content: string;
        condition: string;
    };
    cameraLabels?: Array<{
        id: number;
        name: string;
    }>;
    preplanGroups?: Array<{
        description: string;
        id: string;
        name: string;
    }>;
    videoConferenceTerminals?: Array<{
        id: string;
        name: string;
    }>;
    thirdPlatforms?: Array<{
        id: string;
        name: string;
    }>;
    customResources?: Record<string, any>;
};

/**
 * @description 创建预案
 * @summary Response data types
 * @url [ post ] /api/{eventTypeId}/Preplans
 * @bizName eventBiz
 */
export type PostEventTypeIdPreplansResTypeByEts = {
    id: string;
    name: string;
    eventType: {
        description: string;
        id: string;
        name: string;
    };
    areaCode: string;
    eventPriority: number;
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
    thirdPlatforms: Array<{
        id: string;
        name: string;
    }>;
    customResources: Record<string, any>;
};

/**
 * @description 导入预案
 * @summary Request data types
 * @url [ post ] /api/Preplans/import
 * @bizName eventBiz
 */
export type PostPreplansImportReqTypeByEts = {
    'X-version'?: string;
    preplanItems: Array<{
        resourceId: string;
        name: string;
        eventPriority: number;
        eventTypeId: string;
        areaCode: string;
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
        taskTemplateId: string;
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
        thirdPlatforms: Array<{
            id: string;
            name: string;
        }>;
        customResources: Record<string, any>;
        platformId: string;
    }>;
};

/**
 * @description 获取预案模板
 * @summary Request data types
 * @url [ get ] /api/Preplans/template
 * @bizName eventBiz
 */
export type GetPreplansTemplateReqTypeByEts = {
    'X-version'?: string;
};

/**
 * @description 按条件获取分组预案集合（分组包括（推荐、其他））
 * @summary Request data types
 * @url [ post ] /api/Preplans/grouping
 * @bizName eventBiz
 */
export type PostPreplansGroupingReqTypeByEts = {
    'X-version'?: string;
    eventTypeId?: string;
    eventPriority?: number;
    areaCode?: string;
    prefixAreaCodes?: Array<string>;
    isMatchNullAreaCode?: boolean;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * @description 按条件获取分组预案集合（分组包括（推荐、其他））
 * @summary Response data types
 * @url [ post ] /api/Preplans/grouping
 * @bizName eventBiz
 */
export type PostPreplansGroupingResTypeByEts = {
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
 * @description 通过事件ID推荐预案
 * @summary Request data types
 * @url [ get ] /api/Preplans/Recommend
 * @bizName eventBiz
 */
export type GetPreplansRecommendReqTypeByEts = {
    EventId: string;
    'X-version'?: string;
};

/**
 * @description 通过事件ID推荐预案
 * @summary Response data types
 * @url [ get ] /api/Preplans/Recommend
 * @bizName eventBiz
 */
export type GetPreplansRecommendResTypeByEts = {
    id: string;
    name: string;
    eventType: {
        description: string;
        id: string;
        name: string;
    };
    areaCode: string;
    eventPriority: number;
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
    thirdPlatforms: Array<{
        id: string;
        name: string;
    }>;
    customResources: Record<string, any>;
};

/**
 * @description 通过反馈Id/反馈资源Id获取任务反馈
 * @summary Request data types
 * @url [ get ] /api/tasks/{taskId}/feedbacks/{id}
 * @bizName eventBiz
 */
export type GetTasksTaskIdFeedbacksIdReqTypeByEts = {
    id: string;
    taskId: string;
    'X-version'?: string;
};

/**
 * @description 通过反馈Id/反馈资源Id获取任务反馈
 * @summary Response data types
 * @url [ get ] /api/tasks/{taskId}/feedbacks/{id}
 * @bizName eventBiz
 */
export type GetTasksTaskIdFeedbacksIdResTypeByEts = {
    id: string;
    taskId: string;
    taskName: string;
    taskState: 1 | 2 | 4 | 8 | 16;
    content: string;
    createdTime: string;
    user: {
        id: string;
        name: string;
    };
    group: {
        description: string;
        id: string;
        name: string;
    };
    platformId: string;
    resourceId: string;
    type: 1 | 2;
    fileGroupId: string;
};

/**
 * @description 获取任务下所有反馈
 * @summary Request data types
 * @url [ get ] /api/tasks/{taskId}/feedbacks
 * @bizName eventBiz
 */
export type GetTasksTaskIdFeedbacksReqTypeByEts = {
    taskId: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取任务下所有反馈
 * @summary Response data types
 * @url [ get ] /api/tasks/{taskId}/feedbacks
 * @bizName eventBiz
 */
export type GetTasksTaskIdFeedbacksResTypeByEts = {
    totalCount: number;
    records: Array<{
        id: string;
        taskId: string;
        taskName: string;
        taskState: 1 | 2 | 4 | 8 | 16;
        content: string;
        createdTime: string;
        user: {
            id: string;
            name: string;
        };
        group: {
            description: string;
            id: string;
            name: string;
        };
        platformId: string;
        resourceId: string;
        type: 1 | 2;
        fileGroupId: string;
    }>;
};

/**
 * @description 创建任务反馈
 * @summary Request data types
 * @url [ post ] /api/tasks/{taskId}/feedbacks
 * @bizName eventBiz
 */
export type PostTasksTaskIdFeedbacksReqTypeByEts = {
    taskId: string;
    'X-version'?: string;
    content: string;
    fileGroupId?: string;
};

/**
 * @description 创建任务反馈
 * @summary Response data types
 * @url [ post ] /api/tasks/{taskId}/feedbacks
 * @bizName eventBiz
 */
export type PostTasksTaskIdFeedbacksResTypeByEts = {
    id: string;
    taskId: string;
    taskName: string;
    taskState: 1 | 2 | 4 | 8 | 16;
    content: string;
    createdTime: string;
    user: {
        id: string;
        name: string;
    };
    group: {
        description: string;
        id: string;
        name: string;
    };
    platformId: string;
    resourceId: string;
    type: 1 | 2;
    fileGroupId: string;
};

/**
 * @description 导入任务反馈
 * @summary Request data types
 * @url [ post ] /api/taskFeedback/import
 * @bizName eventBiz
 */
export type PostTaskFeedbackImportReqTypeByEts = {
    'X-version'?: string;
    taskFeedbackItems: Array<{
        resourceId: string;
        taskId: string;
        taskName: string;
        taskState: 1 | 2 | 4 | 8 | 16;
        user: {
            id: string;
            name: string;
        };
        group: {
            description: string;
            id: string;
            name: string;
        };
        content: string;
        createdTime: string;
        extension: string;
        platformId: string;
        type: 1 | 2;
    }>;
};

/**
 * @description 通过任务Id获取任务
 * @summary Request data types
 * @url [ get ] /api/Tasks/{id}
 * @bizName eventBiz
 */
export type GetTasksIdReqTypeByEts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 通过任务Id获取任务
 * @summary Response data types
 * @url [ get ] /api/Tasks/{id}
 * @bizName eventBiz
 */
export type GetTasksIdResTypeByEts = {
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
 * @description 更新指定任务
 * @summary Request data types
 * @url [ put ] /api/Tasks/{id}
 * @bizName eventBiz
 */
export type PutTasksIdReqTypeByEts = {
    id: string;
    'X-version'?: string;
    name: string;
    description?: string;
    groupId?: string;
    destination?: {
        name: string;
        longitude: string;
        latitude: string;
    };
    expectStartedTime?: string;
    expectFinishedTime?: string;
};

/**
 * @description 删除指定任务,如果是父任务会连同子任务一起删除
 * @summary Request data types
 * @url [ delete ] /api/Tasks/{id}
 * @bizName eventBiz
 */
export type DeleteTasksIdReqTypeByEts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 通过事件ID查询所有任务
 * @summary Request data types
 * @url [ get ] /api/event/{eventId}/Tasks
 * @bizName eventBiz
 */
export type GetEventEventIdTasksReqTypeByEts = {
    eventId: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 通过事件ID查询所有任务
 * @summary Response data types
 * @url [ get ] /api/event/{eventId}/Tasks
 * @bizName eventBiz
 */
export type GetEventEventIdTasksResTypeByEts = {
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
 * @description 创建新的父任务
 * @summary Request data types
 * @url [ post ] /api/event/{eventId}/Tasks
 * @bizName eventBiz
 */
export type PostEventEventIdTasksReqTypeByEts = {
    eventId: string;
    'X-version'?: string;
    name: string;
    description?: string;
    groupId?: string;
    destination?: {
        name: string;
        longitude: string;
        latitude: string;
    };
    expectStartedTime?: string;
    expectFinishedTime?: string;
};

/**
 * @description 创建新的父任务
 * @summary Response data types
 * @url [ post ] /api/event/{eventId}/Tasks
 * @bizName eventBiz
 */
export type PostEventEventIdTasksResTypeByEts = {
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
 * @description 模糊查询任务
 * @summary Request data types
 * @url [ get ] /api/Tasks
 * @bizName eventBiz
 */
export type GetTasksReqTypeByEts = {
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
 * @bizName eventBiz
 */
export type GetTasksResTypeByEts = {
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
 * @bizName eventBiz
 */
export type GetTasksIdChildrenReqTypeByEts = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 通过父任务ID查询子任务
 * @summary Response data types
 * @url [ get ] /api/Tasks/{id}/children
 * @bizName eventBiz
 */
export type GetTasksIdChildrenResTypeByEts = {
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
 * @description 获取自身相关任务
 * @summary Request data types
 * @url [ get ] /api/Tasks/owner
 * @bizName eventBiz
 */
export type GetTasksOwnerReqTypeByEts = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取自身相关任务
 * @summary Response data types
 * @url [ get ] /api/Tasks/owner
 * @bizName eventBiz
 */
export type GetTasksOwnerResTypeByEts = {
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
 * @description 导入任务
 * @summary Request data types
 * @url [ post ] /api/Tasks/import
 * @bizName eventBiz
 */
export type PostTasksImportReqTypeByEts = {
    'X-version'?: string;
    importTasks: Array<{
        resourceId: string;
        name: string;
        description: string;
        state: 1 | 2 | 4 | 8 | 16;
        parentId: string;
        associateEventId: string;
        destination: {
            name: string;
            longitude: string;
            latitude: string;
        };
        groupId: string;
        createdTime: string;
        expectStartedTime: string;
        actualStartedTime: string;
        expectFinishedTime: string;
        actualFinishedTime: string;
        platformId: string;
    }>;
};

/**
 * @description 创建新的子任务
 * @summary Request data types
 * @url [ post ] /api/Tasks/{parentId}/children
 * @bizName eventBiz
 */
export type PostTasksParentIdChildrenReqTypeByEts = {
    parentId: string;
    'X-version'?: string;
    name: string;
    description?: string;
    groupId?: string;
    destination?: {
        name: string;
        longitude: string;
        latitude: string;
    };
    expectStartedTime?: string;
    expectFinishedTime?: string;
};

/**
 * @description 创建新的子任务
 * @summary Response data types
 * @url [ post ] /api/Tasks/{parentId}/children
 * @bizName eventBiz
 */
export type PostTasksParentIdChildrenResTypeByEts = {
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
 * @description 更新任务状态
 * @summary Request data types
 * @url [ put ] /api/Tasks/{taskId}/state/{state}
 * @bizName eventBiz
 */
export type PutTasksTaskIdStateStateReqTypeByEts = {
    taskId: string;
    state: number;
    'X-version'?: string;
};

/**
 * @description 更改任务的排序，需要提交整个事件全部任务的排序，序号由0开始
 * @summary Request data types
 * @url [ put ] /api/events/{eventId}/Tasks/order
 * @bizName eventBiz
 */
export type PutEventsEventIdTasksOrderReqTypeByEts = {
    eventId: string;
    'X-version'?: string;
    taskOrderInfos: Array<{
        taskId: string;
        parentTaskId: string;
        taskOrder: string;
    }>;
};

/**
 * @description 通过任务模板Id获取任务模板
 * @summary Request data types
 * @url [ get ] /api/TaskTemplates/{id}
 * @bizName eventBiz
 */
export type GetTaskTemplatesIdReqTypeByEts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 通过任务模板Id获取任务模板
 * @summary Response data types
 * @url [ get ] /api/TaskTemplates/{id}
 * @bizName eventBiz
 */
export type GetTaskTemplatesIdResTypeByEts = {
    id: string;
    name: string;
    description: string;
    parentTaskTempInfos: Array<{
        name: string;
        description: string;
        group: {
            description: string;
            id: string;
            name: string;
        };
        expectStartTime: string;
        expectEndTime: string;
        childTaskTempInfos: Array<{
            name: string;
            description: string;
            groupId: string;
            expectStartTime: string;
            expectEndTime: string;
            childTaskTempInfos: Array<Record<string, any>>;
            platformId: string;
            resourceId: string;
        }>;
        platformId: string;
        resourceId: string;
    }>;
    platformId: string;
    resourceId: string;
};

/**
 * @description 更新指定任务模板
 * @summary Request data types
 * @url [ put ] /api/TaskTemplates/{id}
 * @bizName eventBiz
 */
export type PutTaskTemplatesIdReqTypeByEts = {
    id: string;
    'X-version'?: string;
    name: string;
    description?: string;
    parentTaskTempInfos?: Array<{
        name: string;
        description: string;
        groupId: string;
        expectStartTime: string;
        expectEndTime: string;
        childTaskTempInfos: Array<Record<string, any>>;
        platformId: string;
        resourceId: string;
    }>;
};

/**
 * @description 删除指定任务模板
 * @summary Request data types
 * @url [ delete ] /api/TaskTemplates/{id}
 * @bizName eventBiz
 */
export type DeleteTaskTemplatesIdReqTypeByEts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 条件查询任务模板，不带条件时返回所有任务模板
 * @summary Request data types
 * @url [ get ] /api/TaskTemplates
 * @bizName eventBiz
 */
export type GetTaskTemplatesReqTypeByEts = {
    keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 条件查询任务模板，不带条件时返回所有任务模板
 * @summary Response data types
 * @url [ get ] /api/TaskTemplates
 * @bizName eventBiz
 */
export type GetTaskTemplatesResTypeByEts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        parentTaskTempInfos: Array<{
            name: string;
            description: string;
            group: {
                description: string;
                id: string;
                name: string;
            };
            expectStartTime: string;
            expectEndTime: string;
            childTaskTempInfos: Array<{
                name: string;
                description: string;
                groupId: string;
                expectStartTime: string;
                expectEndTime: string;
                childTaskTempInfos: Array<Record<string, any>>;
                platformId: string;
                resourceId: string;
            }>;
            platformId: string;
            resourceId: string;
        }>;
        platformId: string;
        resourceId: string;
    }>;
};

/**
 * @description 创建任务模板
 * @summary Request data types
 * @url [ post ] /api/TaskTemplates
 * @bizName eventBiz
 */
export type PostTaskTemplatesReqTypeByEts = {
    'X-version'?: string;
    name: string;
    description?: string;
    parentTaskTempInfos?: Array<{
        name: string;
        description: string;
        groupId: string;
        expectStartTime: string;
        expectEndTime: string;
        childTaskTempInfos: Array<Record<string, any>>;
        platformId: string;
        resourceId: string;
    }>;
};

/**
 * @description 创建任务模板
 * @summary Response data types
 * @url [ post ] /api/TaskTemplates
 * @bizName eventBiz
 */
export type PostTaskTemplatesResTypeByEts = {
    id: string;
    name: string;
    description: string;
    parentTaskTempInfos: Array<{
        name: string;
        description: string;
        group: {
            description: string;
            id: string;
            name: string;
        };
        expectStartTime: string;
        expectEndTime: string;
        childTaskTempInfos: Array<{
            name: string;
            description: string;
            groupId: string;
            expectStartTime: string;
            expectEndTime: string;
            childTaskTempInfos: Array<Record<string, any>>;
            platformId: string;
            resourceId: string;
        }>;
        platformId: string;
        resourceId: string;
    }>;
    platformId: string;
    resourceId: string;
};

/**
 * @description 导入任务模板
 * @summary Request data types
 * @url [ post ] /api/TaskTemplates/import
 * @bizName eventBiz
 */
export type PostTaskTemplatesImportReqTypeByEts = {
    'X-version'?: string;
    taskTemplates?: Array<{
        id: string;
        createdTime: string;
        platformId: string;
        resourceId: string;
        name: string;
        description: string;
        parentTaskTempInfos: Array<{
            name: string;
            description: string;
            groupId: string;
            expectStartTime: string;
            expectEndTime: string;
            childTaskTempInfos: Array<Record<string, any>>;
            platformId: string;
            resourceId: string;
        }>;
    }>;
};
