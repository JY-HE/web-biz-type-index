/**
 * @description 获取目录
 * @summary Request data types
 * @url [ get ] /api/Directories
 * @bizName fileStorageBiz
 */
export type GetDirectoriesReqTypeByFss = {
    StorageKind: number;
    ParentId?: string;
    SelectedIds?: Array<string>;
    page?: number;
    per_page?: number;
};

/**
 * @description 获取目录
 * @summary Response data types
 * @url [ get ] /api/Directories
 * @bizName fileStorageBiz
 */
export type GetDirectoriesResTypeByFss = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        parentId: string;
        isPublic: boolean;
        createTime: string;
        updateTime: string;
        useStatus: 0 | 1 | 2;
        isLeafGroup: boolean;
        isLeaf: boolean;
        storageKind: 0 | 1 | 2;
        sourceId: string;
    }>;
};

/**
 * @description 创建目录
 * @summary Request data types
 * @url [ post ] /api/Directories
 * @bizName fileStorageBiz
 */
export type PostDirectoriesReqTypeByFss = {
    storageKind?: number;
    name: string;
    parentId?: string;
};

/**
 * @description 创建目录
 * @summary Response data types
 * @url [ post ] /api/Directories
 * @bizName fileStorageBiz
 */
export type PostDirectoriesResTypeByFss = {
    id: string;
    name: string;
    parentId: string;
    isPublic: boolean;
    createTime: string;
    updateTime: string;
    useStatus: 0 | 1 | 2;
    isLeafGroup: boolean;
    isLeaf: boolean;
    storageKind: 0 | 1 | 2;
    sourceId: string;
};

/**
 * @description 获取目录(根目录)
 * @summary Request data types
 * @url [ get ] /api/Directories/root
 * @bizName fileStorageBiz
 */
export type GetDirectoriesRootReqTypeByFss = {
    storageKind?: number;
};

/**
 * @description 获取目录(根目录)
 * @summary Response data types
 * @url [ get ] /api/Directories/root
 * @bizName fileStorageBiz
 */
export type GetDirectoriesRootResTypeByFss = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        parentId: string;
        isPublic: boolean;
        createTime: string;
        updateTime: string;
        useStatus: 0 | 1 | 2;
        isLeafGroup: boolean;
        isLeaf: boolean;
        storageKind: 0 | 1 | 2;
        sourceId: string;
    }>;
};

/**
 * @description 获取子目录
 * @summary Request data types
 * @url [ get ] /api/Directories/{parentId}/children
 * @bizName fileStorageBiz
 */
export type GetDirectoriesParentIdChildrenReqTypeByFss = {
    parentId: string;
    storageKind?: number;
};

/**
 * @description 获取子目录
 * @summary Response data types
 * @url [ get ] /api/Directories/{parentId}/children
 * @bizName fileStorageBiz
 */
export type GetDirectoriesParentIdChildrenResTypeByFss = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        parentId: string;
        isPublic: boolean;
        createTime: string;
        updateTime: string;
        useStatus: 0 | 1 | 2;
        isLeafGroup: boolean;
        isLeaf: boolean;
        storageKind: 0 | 1 | 2;
        sourceId: string;
    }>;
};

/**
 * @description 通过Id获取目录
 * @summary Request data types
 * @url [ get ] /api/Directories/{id}
 * @bizName fileStorageBiz
 */
export type GetDirectoriesIdReqTypeByFss = {
    id: string;
    storageKind?: number;
};

/**
 * @description 通过Id获取目录
 * @summary Response data types
 * @url [ get ] /api/Directories/{id}
 * @bizName fileStorageBiz
 */
export type GetDirectoriesIdResTypeByFss = {
    id: string;
    name: string;
    parentId: string;
    isPublic: boolean;
    createTime: string;
    updateTime: string;
    useStatus: 0 | 1 | 2;
    isLeafGroup: boolean;
    isLeaf: boolean;
    storageKind: 0 | 1 | 2;
    sourceId: string;
};

/**
 * @description 更新目录
 * @summary Request data types
 * @url [ put ] /api/Directories/{id}
 * @bizName fileStorageBiz
 */
export type PutDirectoriesIdReqTypeByFss = {
    id: string;
    storageKind?: number;
    name: string;
    parentId?: string;
};

/**
 * @description 删除目录
 * @summary Request data types
 * @url [ delete ] /api/Directories/{id}
 * @bizName fileStorageBiz
 */
export type DeleteDirectoriesIdReqTypeByFss = {
    id: string;
    storageKind?: number;
};

/**
 * @description 获取目录下的文件
 * @summary Request data types
 * @url [ get ] /api/Files
 * @bizName fileStorageBiz
 */
export type GetFilesReqTypeByFss = {
    directoryId: string;
    storageKind?: number;
    validate?: boolean;
    page?: number;
    per_page?: number;
};

/**
 * @description 获取目录下的文件
 * @summary Response data types
 * @url [ get ] /api/Files
 * @bizName fileStorageBiz
 */
export type GetFilesResTypeByFss = {
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
            useStatus: 0 | 1 | 2;
            isLeafGroup: boolean;
            isLeaf: boolean;
            storageKind: 0 | 1 | 2;
            sourceId: string;
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

/**
 * @description 搜索文件
 * @summary Request data types
 * @url [ get ] /api/Files/search
 * @bizName fileStorageBiz
 */
export type GetFilesSearchReqTypeByFss = {
    Keyword: string;
    Limit?: number;
};

/**
 * @description 搜索文件
 * @summary Response data types
 * @url [ get ] /api/Files/search
 * @bizName fileStorageBiz
 */
export type GetFilesSearchResTypeByFss = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        fileId: string;
        storageKind: 0 | 1 | 2;
        idPath: string;
        namePath: string;
        duration: string;
    }>;
};

/**
 * @description 获取文件
 * @summary Request data types
 * @url [ get ] /api/Files/{fileId}
 * @bizName fileStorageBiz
 */
export type GetFilesFileIdReqTypeByFss = {
    fileId: string;
    platformId?: string;
    validate?: boolean;
};

/**
 * @description 获取文件
 * @summary Response data types
 * @url [ get ] /api/Files/{fileId}
 * @bizName fileStorageBiz
 */
export type GetFilesFileIdResTypeByFss = {
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
        storageKind: 0 | 1 | 2;
        sourceId: string;
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

/**
 * @description 更新文件
 * @summary Request data types
 * @url [ put ] /api/Files/{fileId}
 * @bizName fileStorageBiz
 */
export type PutFilesFileIdReqTypeByFss = {
    fileId: string;
    fileName?: string;
    newDirectoryId?: string;
};

/**
 * @description 删除文件
 * @summary Request data types
 * @url [ delete ] /api/Files/{fileId}
 * @bizName fileStorageBiz
 */
export type DeleteFilesFileIdReqTypeByFss = {
    fileId: string;
};

/**
 * @description ss文件创建接口
 * @summary Request data types
 * @url [ post ] /api/Files/ss
 * @bizName fileStorageBiz
 */
export type PostFilesSsReqTypeByFss = {
    id: string;
    fileGroupId?: string;
    userName?: string;
    fileType?: number;
    fileName: string;
    filePath: string;
    fileSize: number;
    createTime: string;
};

/**
 * @description ss文件创建接口
 * @summary Response data types
 * @url [ post ] /api/Files/ss
 * @bizName fileStorageBiz
 */
export type PostFilesSsResTypeByFss = {
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
        storageKind: 0 | 1 | 2;
        sourceId: string;
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

/**
 * @description 更新录音通知文件
 * @summary Request data types
 * @url [ put ] /api/Files/recordnotify/{fileId}
 * @bizName fileStorageBiz
 */
export type PutFilesRecordnotifyFileIdReqTypeByFss = {
    fileId: string;
    fileNameWithoutExtension: string;
};

/**
 * @description wts文件创建/获取接口
 * @summary Request data types
 * @url [ post ] /api/Files/wts
 * @bizName fileStorageBiz
 */
export type PostFilesWtsReqTypeByFss = {
    fileName?: string;
    isMultimediaTransfer?: boolean;
};

/**
 * @description wts文件创建/获取接口
 * @summary Response data types
 * @url [ post ] /api/Files/wts
 * @bizName fileStorageBiz
 */
export type PostFilesWtsResTypeByFss = {
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
        storageKind: 0 | 1 | 2;
        sourceId: string;
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

/**
 * @description 导出文件接口
 * @summary Request data types
 * @url [ post ] /api/Files/export/icon
 * @bizName fileStorageBiz
 */
export type PostFilesExportIconReqTypeByFss = {
    fileIds: Array<string>;
};

/**
 * @description 导出文件接口
 * @summary Response data types
 * @url [ post ] /api/Files/export/icon
 * @bizName fileStorageBiz
 */
export type PostFilesExportIconResTypeByFss = {
    files: Array<{
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
            storageKind: 0 | 1 | 2;
            sourceId: string;
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
        content: string;
    }>;
};

/**
 * @description 导入文件接口
 * @summary Request data types
 * @url [ post ] /api/Files/import/icon
 * @bizName fileStorageBiz
 */
export type PostFilesImportIconReqTypeByFss = {
    files: Array<{
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
            storageKind: 0 | 1 | 2;
            sourceId: string;
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
        content: string;
    }>;
};
