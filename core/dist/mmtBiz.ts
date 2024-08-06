/**
 * @description 分级调度操作
 * @summary Request data types
 * @url [ post ] /api/GradingDispatch
 * @bizName mmtBiz
 */
export type PostGradingDispatchReqTypeByMmts = {
    'X-version'?: string;
    version: string;
    id: string;
    bizName: string;
    bizData: any;
    sourceId: string;
    destinationId: string;
    type: number;
    timeout: number;
};

/**
 * @description 查询拍传
 * @summary Request data types
 * @url [ get ] /api/MultimediaTransfers
 * @bizName mmtBiz
 */
export type GetMultimediaTransfersReqTypeByMmts = {
    BeginTime?: string;
    EndTime?: string;
    TemplateId?: string;
    KeyWord?: string;
    OrganizationId?: string;
    UserId?: string;
    ResourceId?: string;
    PlatformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 查询拍传
 * @summary Response data types
 * @url [ get ] /api/MultimediaTransfers
 * @bizName mmtBiz
 */
export type GetMultimediaTransfersResTypeByMmts = {
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
 * @description 创建拍传
 * @summary Request data types
 * @url [ post ] /api/MultimediaTransfers
 * @bizName mmtBiz
 */
export type PostMultimediaTransfersReqTypeByMmts = {
    'X-version'?: string;
    name: string;
    templateId?: string;
    longitude: number;
    latitude: number;
    address?: string;
    fileGroupId: string;
    uploadTime: string;
    fileCount: number;
    company?: string;
    companyAddress?: string;
};

/**
 * @description 创建拍传
 * @summary Response data types
 * @url [ post ] /api/MultimediaTransfers
 * @bizName mmtBiz
 */
export type PostMultimediaTransfersResTypeByMmts = {
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
};

/**
 * @description 查询拍传
 * @summary Request data types
 * @url [ post ] /api/MultimediaTransfers/search
 * @bizName mmtBiz
 */
export type PostMultimediaTransfersSearchReqTypeByMmts = {
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
    organizationIds?: Array<string>;
    prefixAreaCodes?: Array<string>;
    isMatchNullAreaCode?: boolean;
};

/**
 * @description 查询拍传
 * @summary Response data types
 * @url [ post ] /api/MultimediaTransfers/search
 * @bizName mmtBiz
 */
export type PostMultimediaTransfersSearchResTypeByMmts = {
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
 * @description 通过拍传ID获取拍传
 * @summary Request data types
 * @url [ get ] /api/MultimediaTransfers/{id}
 * @bizName mmtBiz
 */
export type GetMultimediaTransfersIdReqTypeByMmts = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 通过拍传ID获取拍传
 * @summary Response data types
 * @url [ get ] /api/MultimediaTransfers/{id}
 * @bizName mmtBiz
 */
export type GetMultimediaTransfersIdResTypeByMmts = {
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
 * @description 删除拍传
 * @summary Request data types
 * @url [ delete ] /api/MultimediaTransfers/{id}
 * @bizName mmtBiz
 */
export type DeleteMultimediaTransfersIdReqTypeByMmts = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 拍传数据补全
 * @summary Request data types
 * @url [ post ] /api/MultimediaTransfers/data_completion
 * @bizName mmtBiz
 */
export type PostMultimediaTransfersDataCompletionReqTypeByMmts = {
    'X-version'?: string;
    beginTime?: string;
    endTime?: string;
};

/**
 * @description 按条件查询拍传模板
 * @summary Request data types
 * @url [ get ] /api/Templates
 * @bizName mmtBiz
 */
export type GetTemplatesReqTypeByMmts = {
    keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 按条件查询拍传模板
 * @summary Response data types
 * @url [ get ] /api/Templates
 * @bizName mmtBiz
 */
export type GetTemplatesResTypeByMmts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        title: string;
        placeHolders: Array<{
            dataType: 0 | 1 | 2 | 3;
            description: string;
        }>;
        resourceId: string;
        platformId: string;
    }>;
};

/**
 * @description 创建拍传模板
 * @summary Request data types
 * @url [ post ] /api/Templates
 * @bizName mmtBiz
 */
export type PostTemplatesReqTypeByMmts = {
    'X-version'?: string;
    name: string;
    description?: string;
    title: string;
    placeHolders?: Array<{
        dataType: 0 | 1 | 2 | 3;
        description: string;
    }>;
};

/**
 * @description 创建拍传模板
 * @summary Response data types
 * @url [ post ] /api/Templates
 * @bizName mmtBiz
 */
export type PostTemplatesResTypeByMmts = {
    id: string;
    name: string;
    description: string;
    title: string;
    placeHolders: Array<{
        dataType: 0 | 1 | 2 | 3;
        description: string;
    }>;
    resourceId: string;
    platformId: string;
};

/**
 * @description 通过拍传模板ID获取拍传模板
 * @summary Request data types
 * @url [ get ] /api/Templates/{id}
 * @bizName mmtBiz
 */
export type GetTemplatesIdReqTypeByMmts = {
    id: string;
    platformId?: string;
    'X-version'?: string;
};

/**
 * @description 通过拍传模板ID获取拍传模板
 * @summary Response data types
 * @url [ get ] /api/Templates/{id}
 * @bizName mmtBiz
 */
export type GetTemplatesIdResTypeByMmts = {
    id: string;
    name: string;
    description: string;
    title: string;
    placeHolders: Array<{
        dataType: 0 | 1 | 2 | 3;
        description: string;
    }>;
    resourceId: string;
    platformId: string;
};

/**
 * @description 更新拍传模板
 * @summary Request data types
 * @url [ put ] /api/Templates/{id}
 * @bizName mmtBiz
 */
export type PutTemplatesIdReqTypeByMmts = {
    id: string;
    'X-version'?: string;
    name: string;
    description?: string;
    title: string;
    placeHolders?: Array<{
        dataType: 0 | 1 | 2 | 3;
        description: string;
    }>;
};

/**
 * @description 删除拍传模板
 * @summary Request data types
 * @url [ delete ] /api/Templates/{id}
 * @bizName mmtBiz
 */
export type DeleteTemplatesIdReqTypeByMmts = {
    id: string;
    'X-version'?: string;
};
