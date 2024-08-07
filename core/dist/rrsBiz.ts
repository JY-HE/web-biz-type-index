/**
 * @description 按条件查询主资源
 * @summary Request data types
 * @url [ get ] /api/MainResources
 * @bizName rrsBiz
 */
export type GetMainResourcesReqTypeByRrs = {
    type?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 按条件查询主资源
 * @summary Response data types
 * @url [ get ] /api/MainResources
 * @bizName rrsBiz
 */
export type GetMainResourcesResTypeByRrs = {
    totalCount: number;
    records: Array<{
        id: string;
        type: string;
        resourceId: string;
    }>;
};

/**
 * @description 创建主资源
 * @summary Request data types
 * @url [ post ] /api/MainResources
 * @bizName rrsBiz
 */
export type PostMainResourcesReqTypeByRrs = {
    type: string;
    resourceId: string;
};

/**
 * @description 创建主资源
 * @summary Response data types
 * @url [ post ] /api/MainResources
 * @bizName rrsBiz
 */
export type PostMainResourcesResTypeByRrs = {
    id: string;
    type: string;
    resourceId: string;
};

/**
 * @description 通过主资源ID获取主资源
 * @summary Request data types
 * @url [ get ] /api/MainResources/{id}
 * @bizName rrsBiz
 */
export type GetMainResourcesIdReqTypeByRrs = {
    id: string;
};

/**
 * @description 通过主资源ID获取主资源
 * @summary Response data types
 * @url [ get ] /api/MainResources/{id}
 * @bizName rrsBiz
 */
export type GetMainResourcesIdResTypeByRrs = {
    id: string;
    type: string;
    resourceId: string;
};

/**
 * @description 更新主资源
 * @summary Request data types
 * @url [ put ] /api/MainResources/{id}
 * @bizName rrsBiz
 */
export type PutMainResourcesIdReqTypeByRrs = {
    id: string;
    type: string;
    resourceId: string;
};

/**
 * @description 删除主资源
 * @summary Request data types
 * @url [ delete ] /api/MainResources/{id}
 * @bizName rrsBiz
 */
export type DeleteMainResourcesIdReqTypeByRrs = {
    id: string;
};

/**
 * @description 获取主体下所有资源
 * @summary Request data types
 * @url [ post ] /api/ResourceRelationships/resource
 * @bizName rrsBiz
 */
export type PostResourceRelationshipsResourceReqTypeByRrs = {
    pageIndex?: number;
    pageSize?: number;
    mainResource: any;
};

/**
 * @description 获取主体下所有资源
 * @summary Response data types
 * @url [ post ] /api/ResourceRelationships/resource
 * @bizName rrsBiz
 */
export type PostResourceRelationshipsResourceResTypeByRrs = {
    totalCount: number;
    records: Array<{
        id: string;
        resourceId: string;
        type: string;
    }>;
};

/**
 * @description 更新主体下资源关系
 * @summary Request data types
 * @url [ put ] /api/ResourceRelationships/resource
 * @bizName rrsBiz
 */
export type PutResourceRelationshipsResourceReqTypeByRrs = {
    resources: Array<{
        type: string;
        resourceIds: Array<string>;
    }>;
    mainResource: {
        type: string;
        resourceId: string;
    };
};

/**
 * @description 更新主体下资源关系
 * @summary Response data types
 * @url [ put ] /api/ResourceRelationships/resource
 * @bizName rrsBiz
 */
export type PutResourceRelationshipsResourceResTypeByRrs = {
    totalCount: number;
    records: Array<{
        id: string;
        resourceId: string;
        type: string;
    }>;
};

/**
 * @description 资源查询
 * @summary Request data types
 * @url [ post ] /api/ResourceRelationships/resource/single
 * @bizName rrsBiz
 */
export type PostResourceRelationshipsResourceSingleReqTypeByRrs = {
    pageIndex?: number;
    pageSize?: number;
    mainResources: Array<{
        resourceId: string;
        type: string;
    }>;
    type: string;
    dataHandleType?: 0 | 1;
};

/**
 * @description 资源查询
 * @summary Response data types
 * @url [ post ] /api/ResourceRelationships/resource/single
 * @bizName rrsBiz
 */
export type PostResourceRelationshipsResourceSingleResTypeByRrs = {
    totalCount: number;
    records: Array<{
        id: string;
        resourceId: string;
    }>;
};

/**
 * @description 批量获取资源详情（带关联主体）
 * @summary Request data types
 * @url [ post ] /api/ResourceRelationships/resource/details
 * @bizName rrsBiz
 */
export type PostResourceRelationshipsResourceDetailsReqTypeByRrs = {
    resources: Array<{
        resourceId: string;
        type: string;
    }>;
    type?: string;
};

/**
 * @description 批量获取资源详情（带关联主体）
 * @summary Response data types
 * @url [ post ] /api/ResourceRelationships/resource/details
 * @bizName rrsBiz
 */
export type PostResourceRelationshipsResourceDetailsResTypeByRrs = {
    totalCount: number;
    records: Array<{
        type: string;
        resourceId: string;
        mainResources: Array<{
            resourceId: string;
            type: string;
        }>;
    }>;
};

/**
 * @description 批量获取主体资源详情（带关联下资源）
 * @summary Request data types
 * @url [ post ] /api/ResourceRelationships/main/details
 * @bizName rrsBiz
 */
export type PostResourceRelationshipsMainDetailsReqTypeByRrs = {
    mainResources?: Array<{
        resourceId: string;
        type: string;
    }>;
    type?: string;
};

/**
 * @description 批量获取主体资源详情（带关联下资源）
 * @summary Response data types
 * @url [ post ] /api/ResourceRelationships/main/details
 * @bizName rrsBiz
 */
export type PostResourceRelationshipsMainDetailsResTypeByRrs = {
    totalCount: number;
    records: Array<{
        type: string;
        resourceId: string;
        resources: Array<Record<string, any>>;
    }>;
};

/**
 * @description 绑定资源关系
 * @summary Request data types
 * @url [ put ] /api/ResourceRelationships
 * @bizName rrsBiz
 */
export type PutResourceRelationshipsReqTypeByRrs = {
    resources: Array<{
        type: string;
        resourceIds: Array<string>;
    }>;
    mainResource: {
        type: string;
        resourceId: string;
    };
};

/**
 * @description 解绑资源关系
 * @summary Request data types
 * @url [ post ] /api/ResourceRelationships
 * @bizName rrsBiz
 */
export type PostResourceRelationshipsReqTypeByRrs = {
    resources: Array<{
        type: string;
        resourceIds: Array<string>;
    }>;
    mainResource: {
        type: string;
        resourceId: string;
    };
};

/**
 * @description 按条件查询资源
 * @summary Request data types
 * @url [ get ] /api/Resources
 * @bizName rrsBiz
 */
export type GetResourcesReqTypeByRrs = {
    type?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 按条件查询资源
 * @summary Response data types
 * @url [ get ] /api/Resources
 * @bizName rrsBiz
 */
export type GetResourcesResTypeByRrs = {
    totalCount: number;
    records: Array<{
        id: string;
        resourceId: string;
        type: string;
    }>;
};

/**
 * @description 创建资源
 * @summary Request data types
 * @url [ post ] /api/Resources
 * @bizName rrsBiz
 */
export type PostResourcesReqTypeByRrs = {
    type: string;
    resourceId: string;
};

/**
 * @description 创建资源
 * @summary Response data types
 * @url [ post ] /api/Resources
 * @bizName rrsBiz
 */
export type PostResourcesResTypeByRrs = {
    id: string;
    resourceId: string;
    type: string;
};

/**
 * @description 通过资源ID获取资源
 * @summary Request data types
 * @url [ get ] /api/Resources/{id}
 * @bizName rrsBiz
 */
export type GetResourcesIdReqTypeByRrs = {
    id: string;
};

/**
 * @description 通过资源ID获取资源
 * @summary Response data types
 * @url [ get ] /api/Resources/{id}
 * @bizName rrsBiz
 */
export type GetResourcesIdResTypeByRrs = {
    id: string;
    resourceId: string;
    type: string;
};

/**
 * @description 更新资源
 * @summary Request data types
 * @url [ put ] /api/Resources/{id}
 * @bizName rrsBiz
 */
export type PutResourcesIdReqTypeByRrs = {
    id: string;
    type: string;
    resourceId: string;
};

/**
 * @description 删除资源
 * @summary Request data types
 * @url [ delete ] /api/Resources/{id}
 * @bizName rrsBiz
 */
export type DeleteResourcesIdReqTypeByRrs = {
    id: string;
};

/**
 * @description 按条件查询资源类型
 * @summary Request data types
 * @url [ get ] /api/ResourceTypes
 * @bizName rrsBiz
 */
export type GetResourceTypesReqTypeByRrs = {
    keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 按条件查询资源类型
 * @summary Response data types
 * @url [ get ] /api/ResourceTypes
 * @bizName rrsBiz
 */
export type GetResourceTypesResTypeByRrs = {
    totalCount: number;
    records: Array<{
        id: string;
        type: string;
        source: 1 | 2 | 3;
    }>;
};

/**
 * @description 创建资源类型
 * @summary Request data types
 * @url [ post ] /api/ResourceTypes
 * @bizName rrsBiz
 */
export type PostResourceTypesReqTypeByRrs = {
    type: string;
    source: 1 | 2 | 3;
};

/**
 * @description 创建资源类型
 * @summary Response data types
 * @url [ post ] /api/ResourceTypes
 * @bizName rrsBiz
 */
export type PostResourceTypesResTypeByRrs = {
    id: string;
    type: string;
    source: 1 | 2 | 3;
};

/**
 * @description 通过资源类型ID获取资源类型
 * @summary Request data types
 * @url [ get ] /api/ResourceTypes/{id}
 * @bizName rrsBiz
 */
export type GetResourceTypesIdReqTypeByRrs = {
    id: string;
};

/**
 * @description 通过资源类型ID获取资源类型
 * @summary Response data types
 * @url [ get ] /api/ResourceTypes/{id}
 * @bizName rrsBiz
 */
export type GetResourceTypesIdResTypeByRrs = {
    id: string;
    type: string;
    source: 1 | 2 | 3;
};
