/**
 * @description 新建联系人
 * @summary Request data types
 * @url [ post ] /api/contacts/{pid}
 * @bizName orgsBiz
 */
export type PostContactsPidReqTypeByOrgs = {
    pid: string;
    'X-version'?: string;
    id?: string;
    name: string;
    account: string;
    password: string;
    description?: string;
    gender?: number;
    birthday?: string;
    photo?: string;
    department?: string;
    title?: string;
    relatedId?: string;
    phones?: Array<{
        type: string;
        number: string;
    }>;
    callInformation?: {
        qq: string;
        weixin: string;
        weibo: string;
        mail: string;
        address: string;
    };
    departmentIds?: Array<string>;
    extension?: string;
    areaCode?: string;
    identityKey?: string;
    contactTypeId?: string;
};

/**
 * @description 新建联系人
 * @summary Response data types
 * @url [ post ] /api/contacts/{pid}
 * @bizName orgsBiz
 */
export type PostContactsPidResTypeByOrgs = {
    department: string;
    parentId: string;
    departmentIds: Array<string>;
    memberOf: Array<string>;
    departmentPaths: Array<{
        departmentId: string;
        path: string;
        rootPath: any;
        departmentIDs: Array<string>;
        pathInfoItems: Array<Record<string, any>>;
        isContainPresetDepartment: boolean;
        nearestTypologyNodeId: string;
        nearestTypologyNodeName: string;
        pathInfoItemsCount: number;
    }>;
    photo: string;
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
        qq: string;
        weixin: string;
        weibo: string;
        mail: string;
        address: string;
    };
    resourceId: string;
    platformId: string;
    platformName: string;
    relatedId: string;
    accountState: number;
    photoPath: string;
    extension: string;
    areaCode: string;
    identityKey: string;
    contactTypeId: string;
};

/**
 * @description 查询联系人详情
 * @summary Request data types
 * @url [ get ] /api/contacts/{id}
 * @bizName orgsBiz
 */
export type GetContactsIdReqTypeByOrgs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询联系人详情
 * @summary Response data types
 * @url [ get ] /api/contacts/{id}
 * @bizName orgsBiz
 */
export type GetContactsIdResTypeByOrgs = {
    department: string;
    parentId: string;
    departmentIds: Array<string>;
    memberOf: Array<string>;
    departmentPaths: Array<{
        departmentId: string;
        path: string;
        rootPath: any;
        departmentIDs: Array<string>;
        pathInfoItems: Array<Record<string, any>>;
        isContainPresetDepartment: boolean;
        nearestTypologyNodeId: string;
        nearestTypologyNodeName: string;
        pathInfoItemsCount: number;
    }>;
    photo: string;
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
        qq: string;
        weixin: string;
        weibo: string;
        mail: string;
        address: string;
    };
    resourceId: string;
    platformId: string;
    platformName: string;
    relatedId: string;
    accountState: number;
    photoPath: string;
    extension: string;
    areaCode: string;
    identityKey: string;
    contactTypeId: string;
};

/**
 * @description 编辑联系人
 * @summary Request data types
 * @url [ put ] /api/contacts/{id}
 * @bizName orgsBiz
 */
export type PutContactsIdReqTypeByOrgs = {
    id: string;
    'X-version'?: string;
    name?: string;
    description?: string;
    gender?: number;
    birthday?: string;
    photo?: string;
    department?: string;
    title?: string;
    phones?: Array<{
        type: string;
        number: string;
    }>;
    callInformation?: {
        qq: string;
        weixin: string;
        weibo: string;
        mail: string;
        address: string;
    };
    relatedId?: string;
    extension?: string;
    areaCode?: string;
    identityKey?: string;
    contactTypeId?: string;
};

/**
 * @description 删除联系人
 * @summary Request data types
 * @url [ delete ] /api/contacts/{id}
 * @bizName orgsBiz
 */
export type DeleteContactsIdReqTypeByOrgs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 变更密码
 * @summary Request data types
 * @url [ put ] /api/contacts/{id}/password
 * @bizName orgsBiz
 */
export type PutContactsIdPasswordReqTypeByOrgs = {
    id: string;
    'X-version'?: string;
    oldPassword: string;
    newPassword: string;
};

/**
 * @description 密码重置
 * @summary Request data types
 * @url [ put ] /api/contacts/{id}/password/reset
 * @bizName orgsBiz
 */
export type PutContactsIdPasswordResetReqTypeByOrgs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询联系人详情
 * @summary Request data types
 * @url [ post ] /api/contacts/detail
 * @bizName orgsBiz
 */
export type PostContactsDetailReqTypeByOrgs = {
    'X-version'?: string;
    uniqueId: string;
};

/**
 * @description 查询联系人详情
 * @summary Response data types
 * @url [ post ] /api/contacts/detail
 * @bizName orgsBiz
 */
export type PostContactsDetailResTypeByOrgs = {
    department: string;
    parentId: string;
    departmentIds: Array<string>;
    memberOf: Array<string>;
    departmentPaths: Array<{
        departmentId: string;
        path: string;
        rootPath: any;
        departmentIDs: Array<string>;
        pathInfoItems: Array<Record<string, any>>;
        isContainPresetDepartment: boolean;
        nearestTypologyNodeId: string;
        nearestTypologyNodeName: string;
        pathInfoItemsCount: number;
    }>;
    photo: string;
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
        qq: string;
        weixin: string;
        weibo: string;
        mail: string;
        address: string;
    };
    resourceId: string;
    platformId: string;
    platformName: string;
    relatedId: string;
    accountState: number;
    photoPath: string;
    extension: string;
    areaCode: string;
    identityKey: string;
    contactTypeId: string;
};

/**
 * @description Xls组织架构文件导入
 * @summary Request data types
 * @url [ post ] /api/Import/ImportXlsOrganization
 * @bizName orgsBiz
 */
export type PostImportImportXlsOrganizationReqTypeByOrgs = {
    pid?: string;
    workSheet?: string;
    syncResourceChanged?: boolean;
    'X-version'?: string;
};

/**
 * @description 导出组织架构
 * @summary Request data types
 * @url [ post ] /api/Export/Organization/{pid}
 * @bizName orgsBiz
 */
export type PostExportOrganizationPidReqTypeByOrgs = {
    pid: string;
    exportFileType?: number;
    'X-version'?: string;
};

/**
 * @description 导出组织架构
 * @summary Response data types
 * @url [ post ] /api/Export/Organization/{pid}
 * @bizName orgsBiz
 */
export type PostExportOrganizationPidResTypeByOrgs = {
    id: string;
    status: any;
    type: any;
    descriptor: any;
    createTimestamp: number;
    exportFileSuffix: string;
    exportFilePath: string;
    errorMessage: string;
};

/**
 * @description 导出预案组
 * @summary Request data types
 * @url [ post ] /api/Export/PlanGroup
 * @bizName orgsBiz
 */
export type PostExportPlanGroupReqTypeByOrgs = {
    exportFileType?: number;
    groupId?: string;
    'X-version'?: string;
};

/**
 * @description 导出预案组
 * @summary Response data types
 * @url [ post ] /api/Export/PlanGroup
 * @bizName orgsBiz
 */
export type PostExportPlanGroupResTypeByOrgs = {
    id: string;
    status: any;
    type: any;
    descriptor: any;
    createTimestamp: number;
    exportFileSuffix: string;
    exportFilePath: string;
    errorMessage: string;
};

/**
 * @description 获取导出任务
 * @summary Request data types
 * @url [ get ] /api/Export/Task/{taskId}
 * @bizName orgsBiz
 */
export type GetExportTaskTaskIdReqTypeByOrgs = {
    taskId: string;
    'X-version'?: string;
};

/**
 * @description 获取导出任务
 * @summary Response data types
 * @url [ get ] /api/Export/Task/{taskId}
 * @bizName orgsBiz
 */
export type GetExportTaskTaskIdResTypeByOrgs = {
    id: string;
    status: any;
    type: any;
    descriptor: any;
    createTimestamp: number;
    exportFileSuffix: string;
    exportFilePath: string;
    errorMessage: string;
};

/**
 * @description 获取导出文件
 * @summary Request data types
 * @url [ get ] /api/Export/Download/{taskId}
 * @bizName orgsBiz
 */
export type GetExportDownloadTaskIdReqTypeByOrgs = {
    taskId: string;
    'X-version'?: string;
};

/**
 * @description 获取导出文件
 * @summary Response data types
 * @url [ get ] /api/Export/Download/{taskId}
 * @bizName orgsBiz
 */
export type GetExportDownloadTaskIdResTypeByOrgs = {
    id: string;
    status: any;
    type: any;
    descriptor: any;
    createTimestamp: number;
    exportFileSuffix: string;
    exportFilePath: string;
    errorMessage: string;
};

/**
 * @description 预案组文件导入
 * @summary Request data types
 * @url [ post ] /api/Import/ImportPlanGroup/{pid}
 * @bizName orgsBiz
 */
export type PostImportImportPlanGroupPidReqTypeByOrgs = {
    pid: string;
    importFileType?: number;
    workSheet?: string;
    'X-version'?: string;
};

/**
 * @description 添加收藏夹
 * @summary Request data types
 * @url [ post ] /api/favorites
 * @bizName orgsBiz
 */
export type PostFavoritesReqTypeByOrgs = {
    'X-version'?: string;
    id?: string;
    name: string;
    description?: string;
    members?: Array<string>;
    relatedId?: string;
};

/**
 * @description 添加收藏夹
 * @summary Response data types
 * @url [ post ] /api/favorites
 * @bizName orgsBiz
 */
export type PostFavoritesResTypeByOrgs = {
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
        photo: string;
        phones: Array<Record<string, any>>;
        memberOf: Array<string>;
        platformId: string;
        resourceId: string;
        departmentIds: Array<string>;
        mail: string;
        accountState: number;
        extension: string;
        createTime: string;
        updateTime: string;
        areaCode: string;
        identityKey: string;
        contactTypeId: string;
    }>;
    createTime: string;
    updateTime: string;
    owner: string;
    type: number;
    relatedId: string;
};

/**
 * @description 获取当前用户收藏夹
 * @summary Request data types
 * @url [ get ] /api/favorites
 * @bizName orgsBiz
 */
export type GetFavoritesReqTypeByOrgs = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取当前用户收藏夹
 * @summary Response data types
 * @url [ get ] /api/favorites
 * @bizName orgsBiz
 */
export type GetFavoritesResTypeByOrgs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        members: Array<string>;
        type: number;
        owner: string;
        relatedId: string;
    }>;
};

/**
 * @description 删除收藏夹
 * @summary Request data types
 * @url [ delete ] /api/favorites/{favoriteId}
 * @bizName orgsBiz
 */
export type DeleteFavoritesFavoriteIdReqTypeByOrgs = {
    favoriteId: string;
    'X-version'?: string;
};

/**
 * @description 更新收藏夹(收藏夹联系人以此次更新为主,不带成员不变更)
 * @summary Request data types
 * @url [ put ] /api/favorites/{favoriteId}
 * @bizName orgsBiz
 */
export type PutFavoritesFavoriteIdReqTypeByOrgs = {
    favoriteId: string;
    'X-version'?: string;
    name?: string;
    description?: string;
    members?: Array<string>;
    relatedId?: string;
};

/**
 * @description 查询收藏夹详情
 * @summary Request data types
 * @url [ get ] /api/favorites/{favoriteId}
 * @bizName orgsBiz
 */
export type GetFavoritesFavoriteIdReqTypeByOrgs = {
    favoriteId: string;
    'X-version'?: string;
};

/**
 * @description 查询收藏夹详情
 * @summary Response data types
 * @url [ get ] /api/favorites/{favoriteId}
 * @bizName orgsBiz
 */
export type GetFavoritesFavoriteIdResTypeByOrgs = {
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
        photo: string;
        phones: Array<Record<string, any>>;
        memberOf: Array<string>;
        platformId: string;
        resourceId: string;
        departmentIds: Array<string>;
        mail: string;
        accountState: number;
        extension: string;
        createTime: string;
        updateTime: string;
        areaCode: string;
        identityKey: string;
        contactTypeId: string;
    }>;
    createTime: string;
    updateTime: string;
    owner: string;
    type: number;
    relatedId: string;
};

/**
 * @description 添加收藏夹联系人
 * @summary Request data types
 * @url [ post ] /api/favorites/{favoriteId}/contacts
 * @bizName orgsBiz
 */
export type PostFavoritesFavoriteIdContactsReqTypeByOrgs = {
    favoriteId: string;
    'X-version'?: string;
};

/**
 * @description 添加收藏夹联系人
 * @summary Response data types
 * @url [ post ] /api/favorites/{favoriteId}/contacts
 * @bizName orgsBiz
 */
export type PostFavoritesFavoriteIdContactsResTypeByOrgs = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    members: Array<string>;
    type: number;
    owner: string;
    relatedId: string;
};

/**
 * @description 更新收藏夹联系人(收藏夹联系人以此次更新为主)
 * @summary Request data types
 * @url [ put ] /api/favorites/{favoriteId}/contacts
 * @bizName orgsBiz
 */
export type PutFavoritesFavoriteIdContactsReqTypeByOrgs = {
    favoriteId: string;
    'X-version'?: string;
};

/**
 * @description 查询收藏夹联系人
 * @summary Request data types
 * @url [ get ] /api/favorites/{favoriteId}/contacts
 * @bizName orgsBiz
 */
export type GetFavoritesFavoriteIdContactsReqTypeByOrgs = {
    favoriteId: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 查询收藏夹联系人
 * @summary Response data types
 * @url [ get ] /api/favorites/{favoriteId}/contacts
 * @bizName orgsBiz
 */
export type GetFavoritesFavoriteIdContactsResTypeByOrgs = {
    totalCount: number;
    records: Array<{
        photo: string;
        id: string;
        name: string;
        account: string;
        description: string;
        gender: number;
        birthday: string;
        title: string;
        createTime: string;
        updateTime: string;
        phones: Array<Record<string, any>>;
        callInformation: {
            qq: string;
            weixin: string;
            weibo: string;
            mail: string;
            address: string;
        };
        resourceId: string;
        platformId: string;
        platformName: string;
        relatedId: string;
        accountState: number;
        photoPath: string;
        extension: string;
        areaCode: string;
        identityKey: string;
        contactTypeId: string;
    }>;
};

/**
 * @description 新建组
 * @summary Request data types
 * @url [ post ] /api/groups/{pid}
 * @bizName orgsBiz
 */
export type PostGroupsPidReqTypeByOrgs = {
    pid: string;
    'X-version'?: string;
    id?: string;
    name: string;
    description?: string;
    members?: Array<string>;
    type?: number;
    owner?: string;
    relatedId?: string;
};

/**
 * @description 新建组
 * @summary Response data types
 * @url [ post ] /api/groups/{pid}
 * @bizName orgsBiz
 */
export type PostGroupsPidResTypeByOrgs = {
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
        photo: string;
        phones: Array<Record<string, any>>;
        memberOf: Array<string>;
        platformId: string;
        resourceId: string;
        departmentIds: Array<string>;
        mail: string;
        accountState: number;
        extension: string;
        createTime: string;
        updateTime: string;
        areaCode: string;
        identityKey: string;
        contactTypeId: string;
    }>;
    createTime: string;
    updateTime: string;
    owner: string;
    type: number;
    relatedId: string;
};

/**
 * @description 删除组
 * @summary Request data types
 * @url [ delete ] /api/groups/{id}
 * @bizName orgsBiz
 */
export type DeleteGroupsIdReqTypeByOrgs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 更新组
 * @summary Request data types
 * @url [ put ] /api/groups/{id}
 * @bizName orgsBiz
 */
export type PutGroupsIdReqTypeByOrgs = {
    id: string;
    'X-version'?: string;
    name?: string;
    description?: string;
    members?: Array<string>;
    owner?: string;
    relatedId?: string;
};

/**
 * @description 查询组详情
 * @summary Request data types
 * @url [ get ] /api/groups/{id}
 * @bizName orgsBiz
 */
export type GetGroupsIdReqTypeByOrgs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询组详情
 * @summary Response data types
 * @url [ get ] /api/groups/{id}
 * @bizName orgsBiz
 */
export type GetGroupsIdResTypeByOrgs = {
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
        photo: string;
        phones: Array<Record<string, any>>;
        memberOf: Array<string>;
        platformId: string;
        resourceId: string;
        departmentIds: Array<string>;
        mail: string;
        accountState: number;
        extension: string;
        createTime: string;
        updateTime: string;
        areaCode: string;
        identityKey: string;
        contactTypeId: string;
    }>;
    createTime: string;
    updateTime: string;
    owner: string;
    type: number;
    relatedId: string;
};

/**
 * @description 查询所有组
 * @summary Request data types
 * @url [ get ] /api/groups
 * @bizName orgsBiz
 */
export type GetGroupsReqTypeByOrgs = {
    Type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 查询所有组
 * @summary Response data types
 * @url [ get ] /api/groups
 * @bizName orgsBiz
 */
export type GetGroupsResTypeByOrgs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        members: Array<string>;
        type: number;
        owner: string;
        relatedId: string;
    }>;
};

/**
 * @description 查询组详情
 * @summary Request data types
 * @url [ get ] /api/groups/NoContactDetail/{id}
 * @bizName orgsBiz
 */
export type GetGroupsNoContactDetailIdReqTypeByOrgs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询组详情
 * @summary Response data types
 * @url [ get ] /api/groups/NoContactDetail/{id}
 * @bizName orgsBiz
 */
export type GetGroupsNoContactDetailIdResTypeByOrgs = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    members: Array<string>;
    createTime: string;
    updateTime: string;
    owner: string;
    type: number;
    relatedId: string;
};

/**
 * @description 添加组成员
 * @summary Request data types
 * @url [ post ] /api/groups/{groupId}/members
 * @bizName orgsBiz
 */
export type PostGroupsGroupIdMembersReqTypeByOrgs = {
    groupId: string;
    'X-version'?: string;
};

/**
 * @description 添加组成员
 * @summary Response data types
 * @url [ post ] /api/groups/{groupId}/members
 * @bizName orgsBiz
 */
export type PostGroupsGroupIdMembersResTypeByOrgs = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    members: Array<string>;
    type: number;
    owner: string;
    relatedId: string;
};

/**
 * @description 更新组成员
 * @summary Request data types
 * @url [ put ] /api/groups/{groupId}/members
 * @bizName orgsBiz
 */
export type PutGroupsGroupIdMembersReqTypeByOrgs = {
    groupId: string;
    'X-version'?: string;
};

/**
 * @description 查询组成员
 * @summary Request data types
 * @url [ get ] /api/groups/{groupId}/members
 * @bizName orgsBiz
 */
export type GetGroupsGroupIdMembersReqTypeByOrgs = {
    groupId: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 查询组成员
 * @summary Response data types
 * @url [ get ] /api/groups/{groupId}/members
 * @bizName orgsBiz
 */
export type GetGroupsGroupIdMembersResTypeByOrgs = {
    totalCount: number;
    records: Array<{
        photo: string;
        id: string;
        name: string;
        account: string;
        description: string;
        gender: number;
        birthday: string;
        title: string;
        createTime: string;
        updateTime: string;
        phones: Array<Record<string, any>>;
        callInformation: {
            qq: string;
            weixin: string;
            weibo: string;
            mail: string;
            address: string;
        };
        resourceId: string;
        platformId: string;
        platformName: string;
        relatedId: string;
        accountState: number;
        photoPath: string;
        extension: string;
        areaCode: string;
        identityKey: string;
        contactTypeId: string;
    }>;
};

/**
 * @description 新建部门
 * @summary Request data types
 * @url [ post ] /api/organizations/{pid}
 * @bizName orgsBiz
 */
export type PostOrganizationsPidReqTypeByOrgs = {
    pid: string;
    'X-version'?: string;
    id?: string;
    name: string;
    description?: string;
    owner?: string;
    typologyNodeId?: string;
    typologyNodeExtra?: Record<string, any>;
    relatedId?: string;
};

/**
 * @description 新建部门
 * @summary Response data types
 * @url [ post ] /api/organizations/{pid}
 * @bizName orgsBiz
 */
export type PostOrganizationsPidResTypeByOrgs = {
    synchronizeableRequired: boolean;
    sourceType: 1 | 2 | 3 | 4;
    typologyNodeId: string;
    isTyplogyNode: boolean;
    fromPlatformId: string;
    level: number;
    typologyNodeExtra: Record<string, any>;
    id: string;
    name: string;
    description: string;
    parentId: string;
    createTime: string;
    updateTime: string;
    owner: string;
    platformId: string;
    resourceId: string;
    relatedId: string;
};

/**
 * @description 删除部门
 * @summary Request data types
 * @url [ delete ] /api/organizations/{id}
 * @bizName orgsBiz
 */
export type DeleteOrganizationsIdReqTypeByOrgs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 更新部门
 * @summary Request data types
 * @url [ put ] /api/organizations/{id}
 * @bizName orgsBiz
 */
export type PutOrganizationsIdReqTypeByOrgs = {
    id: string;
    'X-version'?: string;
    name: string;
    description?: string;
    owner?: string;
    relatedId?: string;
};

/**
 * @description 查询部门详情
 * @summary Request data types
 * @url [ get ] /api/organizations/{id}
 * @bizName orgsBiz
 */
export type GetOrganizationsIdReqTypeByOrgs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询部门详情
 * @summary Response data types
 * @url [ get ] /api/organizations/{id}
 * @bizName orgsBiz
 */
export type GetOrganizationsIdResTypeByOrgs = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    createTime: string;
    updateTime: string;
    owner: string;
    platformId: string;
    resourceId: string;
    relatedId: string;
};

/**
 * @description 删除部门下所以节点
 * @summary Request data types
 * @url [ delete ] /api/organizations/{id}/All
 * @bizName orgsBiz
 */
export type DeleteOrganizationsIdAllReqTypeByOrgs = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询Root部门
 * @summary Request data types
 * @url [ get ] /api/organizations
 * @bizName orgsBiz
 */
export type GetOrganizationsReqTypeByOrgs = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 查询Root部门
 * @summary Response data types
 * @url [ get ] /api/organizations
 * @bizName orgsBiz
 */
export type GetOrganizationsResTypeByOrgs = {
    totalCount: number;
    records: Array<{
        isLeaf: boolean;
        isLeafGroup: boolean;
        synchronizeableRequired: boolean;
        sourceType: any;
        typologyNodeId: string;
        isTyplogyNode: boolean;
        fromPlatformId: string;
        level: number;
        typologyNodeExtra: Record<string, any>;
        id: string;
        name: string;
        description: string;
        parentId: string;
        createTime: string;
        updateTime: string;
        owner: string;
        platformId: string;
        resourceId: string;
        relatedId: string;
    }>;
};

/**
 * @description 分页查询部门及成员
 * @summary Request data types
 * @url [ get ] /api/organizations/{pid}/members
 * @bizName orgsBiz
 */
export type GetOrganizationsPidMembersReqTypeByOrgs = {
    pid: string;
    Type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页查询部门及成员
 * @summary Response data types
 * @url [ get ] /api/organizations/{pid}/members
 * @bizName orgsBiz
 */
export type GetOrganizationsPidMembersResTypeByOrgs = {
    totalCount: number;
    records: {
        departmentsData: Array<{
            synchronizeableRequired: boolean;
            sourceType: 1 | 2 | 3 | 4;
            typologyNodeId: string;
            isTyplogyNode: boolean;
            fromPlatformId: string;
            level: number;
            typologyNodeExtra: Record<string, any>;
            id: string;
            name: string;
            description: string;
            parentId: string;
            createTime: string;
            updateTime: string;
            owner: string;
            platformId: string;
            resourceId: string;
            relatedId: string;
        }>;
        contactsData: Array<{
            id: string;
            name: string;
            account: string;
            parentId: string;
            description: string;
            gender: number;
            title: string;
            photoPath: string;
            photo: string;
            phones: Array<Record<string, any>>;
            memberOf: Array<string>;
            platformId: string;
            resourceId: string;
            departmentIds: Array<string>;
            mail: string;
            accountState: number;
            extension: string;
            createTime: string;
            updateTime: string;
            areaCode: string;
            identityKey: string;
            contactTypeId: string;
        }>;
    };
};

/**
 * @description 分页查询部门
 * @summary Request data types
 * @url [ get ] /api/organizations/departments
 * @bizName orgsBiz
 */
export type GetOrganizationsDepartmentsReqTypeByOrgs = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页查询部门
 * @summary Response data types
 * @url [ get ] /api/organizations/departments
 * @bizName orgsBiz
 */
export type GetOrganizationsDepartmentsResTypeByOrgs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        owner: string;
        platformId: string;
        resourceId: string;
        typologyNodeId: string;
        relatedId: string;
        createTime: string;
        updateTime: string;
    }>;
};

/**
 * @description 分页查询联系人
 * @summary Request data types
 * @url [ get ] /api/organizations/contacts
 * @bizName orgsBiz
 */
export type GetOrganizationsContactsReqTypeByOrgs = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页查询联系人
 * @summary Response data types
 * @url [ get ] /api/organizations/contacts
 * @bizName orgsBiz
 */
export type GetOrganizationsContactsResTypeByOrgs = {
    totalCount: number;
    records: Array<{
        parentId: string;
        departmentIds: Array<string>;
        departments: Array<Record<string, any>>;
        id: string;
        name: string;
        account: string;
        description: string;
        gender: number;
        birthday: string;
        title: string;
        createTime: string;
        updateTime: string;
        phones: Array<Record<string, any>>;
        callInformation: {
            qq: string;
            weixin: string;
            weibo: string;
            mail: string;
            address: string;
        };
        resourceId: string;
        platformId: string;
        platformName: string;
        relatedId: string;
        accountState: number;
        photoPath: string;
        extension: string;
        areaCode: string;
        identityKey: string;
        contactTypeId: string;
    }>;
};

/**
 * @description 生成签名的密钥
 * @summary Request data types
 * @url [ post ] /api/keys/generateKeyPair
 * @bizName orgsBiz
 */
export type PostKeysGenerateKeyPairReqTypeByOrgs = {
    'X-version'?: string;
};

/**
 * @description 生成签名的密钥
 * @summary Response data types
 * @url [ post ] /api/keys/generateKeyPair
 * @bizName orgsBiz
 */
export type PostKeysGenerateKeyPairResTypeByOrgs = {
    keyPairId: string;
    keyPairVersion: number;
    pubKey: string;
    p10: string;
    transId: string;
};

/**
 * @description 生成加密解密的主密钥
 * @summary Request data types
 * @url [ post ] /api/keys/generateMainKey
 * @bizName orgsBiz
 */
export type PostKeysGenerateMainKeyReqTypeByOrgs = {
    'X-version'?: string;
};

/**
 * @description 联系人密文转换
 * @summary Request data types
 * @url [ post ] /api/keys/contactDataSwitch
 * @bizName orgsBiz
 */
export type PostKeysContactDataSwitchReqTypeByOrgs = {
    'X-version'?: string;
};

/**
 * @description 搜索
 * @summary Request data types
 * @url [ get ] /api/search
 * @bizName orgsBiz
 */
export type GetSearchReqTypeByOrgs = {
    ParentId?: string;
    KeyWord?: string;
    Type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 搜索
 * @summary Response data types
 * @url [ get ] /api/search
 * @bizName orgsBiz
 */
export type GetSearchResTypeByOrgs = {
    totalCount: number;
    records: {
        departmentsData: Array<{
            id: string;
            name: string;
            description: string;
            parentId: string;
            owner: string;
            platformId: string;
            resourceId: string;
            typologyNodeId: string;
            relatedId: string;
            createTime: string;
            updateTime: string;
        }>;
        contactsData: Array<{
            id: string;
            name: string;
            account: string;
            parentId: string;
            description: string;
            gender: number;
            title: string;
            photoPath: string;
            photo: string;
            phones: Array<Record<string, any>>;
            memberOf: Array<string>;
            platformId: string;
            resourceId: string;
            departmentIds: Array<string>;
            mail: string;
            accountState: number;
            extension: string;
            createTime: string;
            updateTime: string;
            areaCode: string;
            identityKey: string;
            contactTypeId: string;
        }>;
    };
};

/**
 * @description 同级移动联系人
 * @summary Request data types
 * @url [ put ] /api/contacts/{id}/move
 * @bizName orgsBiz
 */
export type PutContactsIdMoveReqTypeByOrgsV2 = {
    id: string;
    'X-version'?: string;
    beforeContactId?: string;
    afterContactId?: string;
    departmentId?: string;
};

/**
 * @description 置顶联系人
 * @summary Request data types
 * @url [ put ] /api/contacts/{id}/top
 * @bizName orgsBiz
 */
export type PutContactsIdTopReqTypeByOrgsV2 = {
    id: string;
    'X-version'?: string;
    departmentId?: string;
};

/**
 * @description 查询指定联系人所属部门的路径（当前用户）
 * @summary Request data types
 * @url [ get ] /api/contacts/{id}/departmentPaths
 * @bizName orgsBiz
 */
export type GetContactsIdDepartmentPathsReqTypeByOrgsV2 = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询指定联系人所属部门的路径（当前用户）
 * @summary Response data types
 * @url [ get ] /api/contacts/{id}/departmentPaths
 * @bizName orgsBiz
 */
export type GetContactsIdDepartmentPathsResTypeByOrgsV2 = {
    pathInfoItems: Array<{
        id: string;
        name: string;
        typologyNodeId: string;
    }>;
};

/**
 * @description 查询指定联系人所属部门的路径（指定调用者）
 * @summary Request data types
 * @url [ get ] /api/contacts/{id}/{callerUserId}/departmentPaths
 * @bizName orgsBiz
 */
export type GetContactsIdCallerUserIdDepartmentPathsReqTypeByOrgsV2 = {
    id: string;
    callerUserId: string;
    'X-version'?: string;
};

/**
 * @description 查询指定联系人所属部门的路径（指定调用者）
 * @summary Response data types
 * @url [ get ] /api/contacts/{id}/{callerUserId}/departmentPaths
 * @bizName orgsBiz
 */
export type GetContactsIdCallerUserIdDepartmentPathsResTypeByOrgsV2 = {
    pathInfoItems: Array<{
        id: string;
        name: string;
        typologyNodeId: string;
    }>;
};

/**
 * @description 更新联系人所属部门
 * @summary Request data types
 * @url [ put ] /api/contacts/{id}/department/change
 * @bizName orgsBiz
 */
export type PutContactsIdDepartmentChangeReqTypeByOrgsV2 = {
    id: string;
    'X-version'?: string;
    departmentIds: Array<string>;
};

/**
 * @description 查询当前用户指定部门下有权限的部门列表，不传表示查询全部有权限的部门列表
 * @summary Request data types
 * @url [ get ] /api/contacts/permission/departments
 * @bizName orgsBiz
 */
export type GetContactsPermissionDepartmentsReqTypeByOrgsV2 = {
    id?: string;
    'X-version'?: string;
};

/**
 * @description 查询当前用户指定部门下有权限的部门列表，不传表示查询全部有权限的部门列表
 * @summary Response data types
 * @url [ get ] /api/contacts/permission/departments
 * @bizName orgsBiz
 */
export type GetContactsPermissionDepartmentsResTypeByOrgsV2 = {
    hasAllPermission: boolean;
    items: Array<{
        id: string;
        name: string;
        parentId: string;
        relatedId: string;
    }>;
};

/**
 * @description 联系人账号状态变更
 * @summary Request data types
 * @url [ put ] /api/contacts/{id}/state
 * @bizName orgsBiz
 */
export type PutContactsIdStateReqTypeByOrgsV2 = {
    id: string;
    accountState: number;
    'X-version'?: string;
};

/**
 * @description 更新所有联系人拼音和缩写信息（联系人历史数据补全）
 * @summary Request data types
 * @url [ put ] /api/contacts/pinyinAndInitials
 * @bizName orgsBiz
 */
export type PutContactsPinyinAndInitialsReqTypeByOrgsV2 = {
    'X-version'?: string;
};

/**
 * @description 上传当前联系人头像
 * @summary Request data types
 * @url [ post ] /api/upload/photo
 * @bizName orgsBiz
 */
export type PostUploadPhotoReqTypeByOrgsV2 = {
    'X-version'?: string;
};

/**
 * @description 上传当前联系人头像
 * @summary Response data types
 * @url [ post ] /api/upload/photo
 * @bizName orgsBiz
 */
export type PostUploadPhotoResTypeByOrgsV2 = {
    id: string;
    photoPath: string;
};

/**
 * @description 更新所有联系人头像信息（联系人历史数据补全）
 * @summary Request data types
 * @url [ put ] /api/contacts/photos
 * @bizName orgsBiz
 */
export type PutContactsPhotosReqTypeByOrgsV2 = {
    'X-version'?: string;
};

/**
 * @description 更新所有联系人行政区划（联系人历史数据补全）
 * @summary Request data types
 * @url [ put ] /api/contacts/districts
 * @bizName orgsBiz
 */
export type PutContactsDistrictsReqTypeByOrgsV2 = {
    defaultAreaCode?: string;
    isUpdateAreaCodeEmpty: boolean;
    'X-version'?: string;
};

/**
 * @description 新建用户类型
 * @summary Request data types
 * @url [ post ] /api/contactTypes
 * @bizName orgsBiz
 */
export type PostContactTypesReqTypeByOrgsV2 = {
    'X-version'?: string;
    id?: string;
    name: string;
    description?: string;
};

/**
 * @description 新建用户类型
 * @summary Response data types
 * @url [ post ] /api/contactTypes
 * @bizName orgsBiz
 */
export type PostContactTypesResTypeByOrgsV2 = {
    id: string;
    name: string;
    description: string;
};

/**
 * @description 查询所有的用户类型
 * @summary Request data types
 * @url [ get ] /api/contactTypes
 * @bizName orgsBiz
 */
export type GetContactTypesReqTypeByOrgsV2 = {
    'X-version'?: string;
};

/**
 * @description 查询所有的用户类型
 * @summary Response data types
 * @url [ get ] /api/contactTypes
 * @bizName orgsBiz
 */
export type GetContactTypesResTypeByOrgsV2 = {
    id: string;
    name: string;
    description: string;
};

/**
 * @description 编辑用户类型
 * @summary Request data types
 * @url [ put ] /api/contactTypes/{id}
 * @bizName orgsBiz
 */
export type PutContactTypesIdReqTypeByOrgsV2 = {
    id: string;
    'X-version'?: string;
    name?: string;
    description?: string;
};

/**
 * @description 删除用户类型
 * @summary Request data types
 * @url [ delete ] /api/contactTypes/{id}
 * @bizName orgsBiz
 */
export type DeleteContactTypesIdReqTypeByOrgsV2 = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询用户类型详情
 * @summary Request data types
 * @url [ get ] /api/contactTypes/{id}
 * @bizName orgsBiz
 */
export type GetContactTypesIdReqTypeByOrgsV2 = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询用户类型详情
 * @summary Response data types
 * @url [ get ] /api/contactTypes/{id}
 * @bizName orgsBiz
 */
export type GetContactTypesIdResTypeByOrgsV2 = {
    id: string;
    name: string;
    description: string;
};

/**
 * @description 导入组织架构
 * @summary Request data types
 * @url [ post ] /api/import/data/organization
 * @bizName orgsBiz
 */
export type PostImportDataOrganizationReqTypeByOrgsV2 = {
    ImportDataMode: number;
    ImportNodeType: number;
    ParentId: string;
    WorkSheet?: string;
    'X-version'?: string;
};

/**
 * @description 导入组织架构
 * @summary Response data types
 * @url [ post ] /api/import/data/organization
 * @bizName orgsBiz
 */
export type PostImportDataOrganizationResTypeByOrgsV2 = {
    id: string;
    importTaskStatus: any;
    importTaskType: any;
    descriptor: any;
    createTaskTime: string;
    endTaskTime: string;
    dataProgress: number;
    importDataSummary: {
        importDataTotal: number;
        importDataSuccessTotal: number;
        successDataSummary: {
            importDataAdd: number;
            importDataUpdate: number;
            importDataDelete: number;
        };
    };
};

/**
 * @description 执行数据校验任务
 * @summary Request data types
 * @url [ put ] /api/import/data/validation
 * @bizName orgsBiz
 */
export type PutImportDataValidationReqTypeByOrgsV2 = {
    importTaskId: string;
    'X-version'?: string;
};

/**
 * @description 取消执行数据校验任务
 * @summary Request data types
 * @url [ delete ] /api/import/data/validation
 * @bizName orgsBiz
 */
export type DeleteImportDataValidationReqTypeByOrgsV2 = {
    importTaskId: string;
    'X-version'?: string;
};

/**
 * @description 执行数据导入任务
 * @summary Request data types
 * @url [ put ] /api/import/data
 * @bizName orgsBiz
 */
export type PutImportDataReqTypeByOrgsV2 = {
    importTaskId: string;
    'X-version'?: string;
};

/**
 * @description 取消执行数据导入任务
 * @summary Request data types
 * @url [ delete ] /api/import/data
 * @bizName orgsBiz
 */
export type DeleteImportDataReqTypeByOrgsV2 = {
    importTaskId: string;
    'X-version'?: string;
};

/**
 * @description 分页查询校验数据
 * @summary Request data types
 * @url [ get ] /api/import/organization/validation
 * @bizName orgsBiz
 */
export type GetImportOrganizationValidationReqTypeByOrgsV2 = {
    importTaskId: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页查询校验数据
 * @summary Response data types
 * @url [ get ] /api/import/organization/validation
 * @bizName orgsBiz
 */
export type GetImportOrganizationValidationResTypeByOrgsV2 = {
    totalCount: number;
    addTotalCount: number;
    updateTotalCount: number;
    deleteTotalCount: number;
    records: Array<{
        department: any;
        account: any;
        name: any;
        ipPhone: any;
        mobilePhone: any;
        faxPhone: any;
        workPhone: any;
        homePhone: any;
        gender: any;
        mail: any;
        address: any;
        title: any;
        weiXin: any;
        weiBo: any;
        id: any;
        relatedId: any;
        birthDay: any;
        describe: any;
        extension: any;
        areaCode: any;
        identityKey: any;
        contactTypeId: any;
        isDataCorrect: boolean;
        dataChangeType: any;
    }>;
};

/**
 * @description 查询任务进度
 * @summary Request data types
 * @url [ get ] /api/import/task/progress
 * @bizName orgsBiz
 */
export type GetImportTaskProgressReqTypeByOrgsV2 = {
    importTaskId: string;
    'X-version'?: string;
};

/**
 * @description 查询任务进度
 * @summary Response data types
 * @url [ get ] /api/import/task/progress
 * @bizName orgsBiz
 */
export type GetImportTaskProgressResTypeByOrgsV2 = {
    id: string;
    importTaskStatus: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    createTaskTime: string;
    endTaskTime: string;
    fileName: string;
    fileSize: number;
    importDataMode: 0 | 1;
    dataProgress: number;
    importDataSummary: {
        importDataTotal: number;
        importDataSuccessTotal: number;
        successDataSummary: {
            importDataAdd: number;
            importDataUpdate: number;
            importDataDelete: number;
        };
    };
};

/**
 * @description 下载导入组织架构模板文件
 * @summary Request data types
 * @url [ get ] /api/templateFiles/organization
 * @bizName orgsBiz
 */
export type GetTemplateFilesOrganizationReqTypeByOrgsV2 = {
    'X-version'?: string;
};

/**
 * @description 查询正在执行的导入任务
 * @summary Request data types
 * @url [ get ] /api/import/task/running
 * @bizName orgsBiz
 */
export type GetImportTaskRunningReqTypeByOrgsV2 = {
    'X-version'?: string;
};

/**
 * @description 查询正在执行的导入任务
 * @summary Response data types
 * @url [ get ] /api/import/task/running
 * @bizName orgsBiz
 */
export type GetImportTaskRunningResTypeByOrgsV2 = {
    id: string;
    importTaskStatus: any;
    importTaskType: any;
    descriptor: any;
    createTaskTime: string;
    endTaskTime: string;
    dataProgress: number;
    importDataSummary: {
        importDataTotal: number;
        importDataSuccessTotal: number;
        successDataSummary: {
            importDataAdd: number;
            importDataUpdate: number;
            importDataDelete: number;
        };
    };
};

/**
 * @description 同步数据:LDAP -> MySQL
 * @summary Request data types
 * @url [ post ] /api/datasync
 * @bizName orgsBiz
 */
export type PostDatasyncReqTypeByOrgsV2 = {
    'X-version'?: string;
};

/**
 * @description 获取同步进度
 * @summary Request data types
 * @url [ get ] /progress
 * @bizName orgsBiz
 */
export type GetProgressReqTypeByOrgsV2 = {
    'X-version'?: string;
};

/**
 * @description 获取同步进度
 * @summary Request data types
 * @url [ get ] /progress/{sessionId}
 * @bizName orgsBiz
 */
export type GetProgressSessionIdReqTypeByOrgsV2 = {
    sessionId: string;
    'X-version'?: string;
};

/**
 * @description 获取同步进度
 * @summary Response data types
 * @url [ get ] /progress/{sessionId}
 * @bizName orgsBiz
 */
export type GetProgressSessionIdResTypeByOrgsV2 = {
    state: any;
    departmentsCount: number;
    contactsCount: number;
    groupsCount: number;
    departmentsData: Record<string, any>;
    contactsData: Record<string, any>;
    groupsData: Record<string, any>;
};

/**
 * @description 全量上报资源数据(用于数据初始化及全量补偿)
 * @summary Request data types
 * @url [ post ] /report
 * @bizName orgsBiz
 */
export type PostReportReqTypeByOrgsV2 = {
    'X-version'?: string;
    resourceType?: any;
};

/**
 * @description 当个上报资源数据(用于测试及单个补偿)
 * @summary Request data types
 * @url [ post ] /report/{rid}
 * @bizName orgsBiz
 */
export type PostReportRidReqTypeByOrgsV2 = {
    rid: string;
    'X-version'?: string;
    resourceType?: any;
};

/**
 * @description 移除收藏夹成员
 * @summary Request data types
 * @url [ put ] /api/favorites/{favoriteId}/members
 * @bizName orgsBiz
 */
export type PutFavoritesFavoriteIdMembersReqTypeByOrgsV2 = {
    favoriteId: string;
    'X-version'?: string;
};

/**
 * @description 移除组成员
 * @summary Request data types
 * @url [ put ] /api/groups/{id}/members
 * @bizName orgsBiz
 */
export type PutGroupsIdMembersReqTypeByOrgsV2 = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 移除组成员(包含设备)
 * @summary Request data types
 * @url [ delete ] /api/groups/{id}/members
 * @bizName orgsBiz
 */
export type DeleteGroupsIdMembersReqTypeByOrgsV2 = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 分页查询组成员
 * @summary Request data types
 * @url [ get ] /api/groups/{id}/members
 * @bizName orgsBiz
 */
export type GetGroupsIdMembersReqTypeByOrgsV2 = {
    id: string;
    Type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页查询组成员
 * @summary Response data types
 * @url [ get ] /api/groups/{id}/members
 * @bizName orgsBiz
 */
export type GetGroupsIdMembersResTypeByOrgsV2 = {
    totalCount: number;
    records: Array<{
        type: number;
        photo: string;
        id: string;
        name: string;
        account: string;
        description: string;
        gender: number;
        birthday: string;
        title: string;
        createTime: string;
        updateTime: string;
        phones: Array<Record<string, any>>;
        callInformation: {
            qq: string;
            weixin: string;
            weibo: string;
            mail: string;
            address: string;
        };
        resourceId: string;
        platformId: string;
        platformName: string;
        relatedId: string;
        accountState: number;
        photoPath: string;
        extension: string;
        areaCode: string;
        identityKey: string;
        contactTypeId: string;
    }>;
};

/**
 * @description 添加组成员
 * @summary Request data types
 * @url [ post ] /api/groups/{id}/members
 * @bizName orgsBiz
 */
export type PostGroupsIdMembersReqTypeByOrgsV2 = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 添加组成员
 * @summary Response data types
 * @url [ post ] /api/groups/{id}/members
 * @bizName orgsBiz
 */
export type PostGroupsIdMembersResTypeByOrgsV2 = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    members: Array<{
        type: number;
        photo: string;
        id: string;
        name: string;
        account: string;
        description: string;
        gender: number;
        birthday: string;
        title: string;
        createTime: string;
        updateTime: string;
        phones: Array<Record<string, any>>;
        callInformation: {
            qq: string;
            weixin: string;
            weibo: string;
            mail: string;
            address: string;
        };
        resourceId: string;
        platformId: string;
        platformName: string;
        relatedId: string;
        accountState: number;
        photoPath: string;
        extension: string;
        areaCode: string;
        identityKey: string;
        contactTypeId: string;
    }>;
    createTime: string;
    updateTime: string;
    owner: string;
    type: number;
    relatedId: string;
};

/**
 * @description 查询所有包含当前用户的组列表（不包含组成员信息）
 * @summary Request data types
 * @url [ get ] /api/groups/self/groups
 * @bizName orgsBiz
 */
export type GetGroupsSelfGroupsReqTypeByOrgsV2 = {
    Type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 查询所有包含当前用户的组列表（不包含组成员信息）
 * @summary Response data types
 * @url [ get ] /api/groups/self/groups
 * @bizName orgsBiz
 */
export type GetGroupsSelfGroupsResTypeByOrgsV2 = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        members: Array<string>;
        type: number;
        owner: string;
        relatedId: string;
    }>;
};

/**
 * @description 组内移动成员
 * @summary Request data types
 * @url [ put ] /api/groups/{id}/move
 * @bizName orgsBiz
 */
export type PutGroupsIdMoveReqTypeByOrgsV2 = {
    id: string;
    'X-version'?: string;
    beforeMemberId?: string;
    afterMemberId?: string;
    groupId?: string;
};

/**
 * @description 组内置顶成员
 * @summary Request data types
 * @url [ put ] /api/groups/{id}/top
 * @bizName orgsBiz
 */
export type PutGroupsIdTopReqTypeByOrgsV2 = {
    id: string;
    'X-version'?: string;
    groupId?: string;
};

/**
 * @description 同级移动同类型的组
 * @summary Request data types
 * @url [ put ] /api/groups/{id}/move/group
 * @bizName orgsBiz
 */
export type PutGroupsIdMoveGroupReqTypeByOrgsV2 = {
    id: string;
    'X-version'?: string;
    beforeGroupId?: string;
    afterGroupId?: string;
};

/**
 * @description 新建组
 * @summary Request data types
 * @url [ post ] /api/groups/{pid}
 * @bizName orgsBiz
 */
export type PostGroupsPidReqTypeByOrgsV2 = {
    pid: string;
    'X-version'?: string;
    id?: string;
    name: string;
    description?: string;
    members?: Array<{
        id: string;
        name: string;
        memberType: any;
    }>;
    type?: number;
    owner?: string;
    relatedId?: string;
};

/**
 * @description 新建组
 * @summary Response data types
 * @url [ post ] /api/groups/{pid}
 * @bizName orgsBiz
 */
export type PostGroupsPidResTypeByOrgsV2 = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    members: Array<{
        type: number;
        photo: string;
        id: string;
        name: string;
        account: string;
        description: string;
        gender: number;
        birthday: string;
        title: string;
        createTime: string;
        updateTime: string;
        phones: Array<Record<string, any>>;
        callInformation: {
            qq: string;
            weixin: string;
            weibo: string;
            mail: string;
            address: string;
        };
        resourceId: string;
        platformId: string;
        platformName: string;
        relatedId: string;
        accountState: number;
        photoPath: string;
        extension: string;
        areaCode: string;
        identityKey: string;
        contactTypeId: string;
    }>;
    createTime: string;
    updateTime: string;
    owner: string;
    type: number;
    relatedId: string;
};

/**
 * @description 更新组
 * @summary Request data types
 * @url [ put ] /api/groups/{id}
 * @bizName orgsBiz
 */
export type PutGroupsIdReqTypeByOrgsV2 = {
    id: string;
    'X-version'?: string;
    name?: string;
    description?: string;
    members?: Array<{
        id: string;
        name: string;
        memberType: any;
    }>;
    owner?: string;
    relatedId?: string;
};

/**
 * @description 查询所有组
 * @summary Request data types
 * @url [ get ] /api/groups
 * @bizName orgsBiz
 */
export type GetGroupsReqTypeByOrgsV2 = {
    Type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 查询所有组
 * @summary Response data types
 * @url [ get ] /api/groups
 * @bizName orgsBiz
 */
export type GetGroupsResTypeByOrgsV2 = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        type: number;
        relatedId: string;
        owner: string;
        members: Array<{
            type: number;
            id: string;
        }>;
        membersTotal: number;
        statisticsMembers: Array<Record<string, any>>;
    }>;
};

/**
 * @description 根据关键字分页搜索组内联系人成员接口（含组下联系人的统计）
 * @summary Request data types
 * @url [ get ] /api/groups/{id}/contacts
 * @bizName orgsBiz
 */
export type GetGroupsIdContactsReqTypeByOrgsV2 = {
    id: string;
    keyword?: string;
    phone_type?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 根据关键字分页搜索组内联系人成员接口（含组下联系人的统计）
 * @summary Response data types
 * @url [ get ] /api/groups/{id}/contacts
 * @bizName orgsBiz
 */
export type GetGroupsIdContactsResTypeByOrgsV2 = {
    totalCount: number;
    currentRecords: {
        totalCount: number;
        records: Array<{
            id: string;
            name: string;
            account: string;
            description: string;
            gender: number;
            title: string;
            photo: string;
            photoPath: string;
            phones: Array<Record<string, any>>;
            paths: Array<string>;
            memberOf: Array<string>;
            relatedId: string;
            mail: string;
            type: number;
            accountState: number;
            extension: string;
            areaCode: string;
            identityKey: string;
            contactTypeId: string;
        }>;
    };
    statistics: Array<{
        contactTotal: number;
        phoneType: string;
        isCurrentPhoneType: boolean;
    }>;
};

/**
 * @description 查询部门详情
 * @summary Request data types
 * @url [ get ] /api/organizations/{id}
 * @bizName orgsBiz
 */
export type GetOrganizationsIdReqTypeByOrgsV2 = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询部门详情
 * @summary Response data types
 * @url [ get ] /api/organizations/{id}
 * @bizName orgsBiz
 */
export type GetOrganizationsIdResTypeByOrgsV2 = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    createTime: string;
    updateTime: string;
    owner: {
        id: string;
        name: string;
        account: string;
        description: string;
        gender: number;
        title: string;
        photo: string;
        photoPath: string;
        phones: Array<Record<string, any>>;
        paths: Array<string>;
        memberOf: Array<string>;
        relatedId: string;
        mail: string;
        type: number;
        accountState: number;
        extension: string;
        areaCode: string;
        identityKey: string;
        contactTypeId: string;
    };
    summary: any;
    departmentPath: any;
    relatedId: string;
    level: number;
    isLeaf: boolean;
    isLeafGroup: boolean;
    platformId: string;
    fromPlatformId: string;
    resourceId: string;
    typologyNodeId: string;
    isTyplogyNode: boolean;
    typologyNodeExtra: Record<string, any>;
};

/**
 * @description 分页查询部门及成员
 * @summary Request data types
 * @url [ get ] /api/organizations/{pid}/members
 * @bizName orgsBiz
 */
export type GetOrganizationsPidMembersReqTypeByOrgsV2 = {
    pid: string;
    Type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页查询部门及成员
 * @summary Response data types
 * @url [ get ] /api/organizations/{pid}/members
 * @bizName orgsBiz
 */
export type GetOrganizationsPidMembersResTypeByOrgsV2 = {
    totalCount: number;
    records: {
        departmentsData: Array<{
            id: string;
            name: string;
            description: string;
            parentId: string;
            createTime: string;
            updateTime: string;
            owner: {
                id: string;
                name: string;
                account: string;
                description: string;
                gender: number;
                title: string;
                photo: string;
                photoPath: string;
                phones: Array<Record<string, any>>;
                paths: Array<string>;
                memberOf: Array<string>;
                relatedId: string;
                mail: string;
                type: number;
                accountState: number;
                extension: string;
                areaCode: string;
                identityKey: string;
                contactTypeId: string;
            };
            summary: any;
            departmentPath: any;
            relatedId: string;
            level: number;
            isLeaf: boolean;
            isLeafGroup: boolean;
            platformId: string;
            fromPlatformId: string;
            resourceId: string;
            typologyNodeId: string;
            isTyplogyNode: boolean;
            typologyNodeExtra: Record<string, any>;
        }>;
        contactsData: Array<{
            id: string;
            name: string;
            account: string;
            description: string;
            gender: number;
            title: string;
            photo: string;
            photoPath: string;
            phones: Array<Record<string, any>>;
            paths: Array<string>;
            memberOf: Array<string>;
            relatedId: string;
            mail: string;
            type: number;
            accountState: number;
            extension: string;
            areaCode: string;
            identityKey: string;
            contactTypeId: string;
        }>;
    };
};

/**
 * @description 同级移动部门
 * @summary Request data types
 * @url [ put ] /api/organizations/{id}/move
 * @bizName orgsBiz
 */
export type PutOrganizationsIdMoveReqTypeByOrgsV2 = {
    id: string;
    'X-version'?: string;
    beforeDepartmentId?: string;
    afterDepartmentId?: string;
};

/**
 * @description 查询指定部门所属的路径
 * @summary Request data types
 * @url [ get ] /api/organizations/{id}/departmentPaths
 * @bizName orgsBiz
 */
export type GetOrganizationsIdDepartmentPathsReqTypeByOrgsV2 = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询指定部门所属的路径
 * @summary Response data types
 * @url [ get ] /api/organizations/{id}/departmentPaths
 * @bizName orgsBiz
 */
export type GetOrganizationsIdDepartmentPathsResTypeByOrgsV2 = {
    pathInfoItems: Array<{
        id: string;
        name: string;
        typologyNodeId: string;
    }>;
};

/**
 * @description 分页查询部门下的成员列表（包含子孙成员）
 * @summary Request data types
 * @url [ get ] /api/organizations/{pid}/descendant/members
 * @bizName orgsBiz
 */
export type GetOrganizationsPidDescendantMembersReqTypeByOrgsV2 = {
    pid: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页查询部门下的成员列表（包含子孙成员）
 * @summary Response data types
 * @url [ get ] /api/organizations/{pid}/descendant/members
 * @bizName orgsBiz
 */
export type GetOrganizationsPidDescendantMembersResTypeByOrgsV2 = {
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
        phones: Array<Record<string, any>>;
        callInformation: {
            qq: string;
            weixin: string;
            weibo: string;
            mail: string;
            address: string;
        };
        resourceId: string;
        platformId: string;
        platformName: string;
        relatedId: string;
        accountState: number;
        photoPath: string;
        extension: string;
        areaCode: string;
        identityKey: string;
        contactTypeId: string;
    }>;
};

/**
 * @description 查询Root部门（带统计成员）
 * @summary Request data types
 * @url [ get ] /api/organizations
 * @bizName orgsBiz
 */
export type GetOrganizationsReqTypeByOrgsV2 = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 查询Root部门（带统计成员）
 * @summary Response data types
 * @url [ get ] /api/organizations
 * @bizName orgsBiz
 */
export type GetOrganizationsResTypeByOrgsV2 = {
    totalCount: number;
    records: Array<{
        summary: any;
        isLeaf: boolean;
        isLeafGroup: boolean;
        synchronizeableRequired: boolean;
        sourceType: 1 | 2 | 3 | 4;
        typologyNodeId: string;
        isTyplogyNode: boolean;
        fromPlatformId: string;
        level: number;
        typologyNodeExtra: Record<string, any>;
        id: string;
        name: string;
        description: string;
        parentId: string;
        createTime: string;
        updateTime: string;
        owner: string;
        platformId: string;
        resourceId: string;
        relatedId: string;
    }>;
};

/**
 * @description 搜索
 * @summary Request data types
 * @url [ get ] /api/search
 * @bizName orgsBiz
 */
export type GetSearchReqTypeByOrgsV2 = {
    keyword: string;
    type?: number;
    limit?: number;
    'X-version'?: string;
};

/**
 * @description 搜索
 * @summary Response data types
 * @url [ get ] /api/search
 * @bizName orgsBiz
 */
export type GetSearchResTypeByOrgsV2 = {
    totalCount: number;
    records: {
        departments: Array<{
            description: string;
            platformId: string;
            resourceId: string;
            path: string;
            id: string;
            name: string;
            parentId: string;
            relatedId: string;
        }>;
        contacts: Array<{
            id: string;
            name: string;
            account: string;
            description: string;
            gender: number;
            title: string;
            photo: string;
            photoPath: string;
            phones: Array<Record<string, any>>;
            paths: Array<string>;
            memberOf: Array<string>;
            relatedId: string;
            mail: string;
            type: number;
            accountState: number;
            extension: string;
            areaCode: string;
            identityKey: string;
            contactTypeId: string;
        }>;
        groups: Array<{
            id: string;
            name: string;
            description: string;
            parentId: string;
            type: number;
            path: string;
            owner: string;
            relatedId: string;
        }>;
    };
};

/**
 * @description 按照电话集合查找联系人
 * @summary Request data types
 * @url [ post ] /api/search/ContactByPhones
 * @bizName orgsBiz
 */
export type PostSearchContactByPhonesReqTypeByOrgsV2 = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
    phones?: Array<string>;
};

/**
 * @description 按照电话集合查找联系人
 * @summary Response data types
 * @url [ post ] /api/search/ContactByPhones
 * @bizName orgsBiz
 */
export type PostSearchContactByPhonesResTypeByOrgsV2 = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        account: string;
        description: string;
        gender: number;
        title: string;
        photo: string;
        photoPath: string;
        phones: Array<Record<string, any>>;
        paths: Array<string>;
        memberOf: Array<string>;
        relatedId: string;
        mail: string;
        type: number;
        accountState: number;
        extension: string;
        areaCode: string;
        identityKey: string;
        contactTypeId: string;
    }>;
};

/**
 * @description 根据部门集合批量查询部门信息
 * @summary Request data types
 * @url [ post ] /api/search/departments/batch
 * @bizName orgsBiz
 */
export type PostSearchDepartmentsBatchReqTypeByOrgsV2 = {
    'X-version'?: string;
};

/**
 * @description 根据部门集合批量查询部门信息
 * @summary Response data types
 * @url [ post ] /api/search/departments/batch
 * @bizName orgsBiz
 */
export type PostSearchDepartmentsBatchResTypeByOrgsV2 = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        owner: string;
        platformId: string;
        resourceId: string;
        typologyNodeId: string;
        relatedId: string;
        createTime: string;
        updateTime: string;
    }>;
};

/**
 * @description 根据联系人集合批量查询联系人信息
 * @summary Request data types
 * @url [ post ] /api/search/contacts/batch
 * @bizName orgsBiz
 */
export type PostSearchContactsBatchReqTypeByOrgsV2 = {
    'X-version'?: string;
};

/**
 * @description 根据联系人集合批量查询联系人信息
 * @summary Response data types
 * @url [ post ] /api/search/contacts/batch
 * @bizName orgsBiz
 */
export type PostSearchContactsBatchResTypeByOrgsV2 = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        account: string;
        description: string;
        gender: number;
        title: string;
        photo: string;
        photoPath: string;
        phones: Array<Record<string, any>>;
        paths: Array<string>;
        memberOf: Array<string>;
        relatedId: string;
        mail: string;
        type: number;
        accountState: number;
        extension: string;
        areaCode: string;
        identityKey: string;
        contactTypeId: string;
    }>;
};

/**
 * @description 根据组集合批量查询组信息
 * @summary Request data types
 * @url [ post ] /api/search/groups/batch
 * @bizName orgsBiz
 */
export type PostSearchGroupsBatchReqTypeByOrgsV2 = {
    'X-version'?: string;
};

/**
 * @description 根据组集合批量查询组信息
 * @summary Response data types
 * @url [ post ] /api/search/groups/batch
 * @bizName orgsBiz
 */
export type PostSearchGroupsBatchResTypeByOrgsV2 = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        parentId: string;
        type: number;
        relatedId: string;
        owner: string;
        members: Array<{
            type: number;
            id: string;
        }>;
        membersTotal: number;
        statisticsMembers: Array<Record<string, any>>;
    }>;
};

/**
 * @description 搜索（带部门或组下成员的统计）
 * @summary Request data types
 * @url [ get ] /api/search/statistics
 * @bizName orgsBiz
 */
export type GetSearchStatisticsReqTypeByOrgsV2 = {
    keyword: string;
    type?: number;
    limit?: number;
    'X-version'?: string;
};

/**
 * @description 搜索（带部门或组下成员的统计）
 * @summary Response data types
 * @url [ get ] /api/search/statistics
 * @bizName orgsBiz
 */
export type GetSearchStatisticsResTypeByOrgsV2 = {
    totalCount: number;
    records: {
        departmentCount: number;
        contactCount: number;
        groupCount: number;
        departments: Array<{
            memberCount: number;
            description: string;
            platformId: string;
            resourceId: string;
            path: string;
            id: string;
            name: string;
            parentId: string;
            relatedId: string;
        }>;
        contacts: Array<{
            id: string;
            name: string;
            account: string;
            description: string;
            gender: number;
            title: string;
            photo: string;
            photoPath: string;
            phones: Array<Record<string, any>>;
            paths: Array<string>;
            memberOf: Array<string>;
            relatedId: string;
            mail: string;
            type: number;
            accountState: number;
            extension: string;
            areaCode: string;
            identityKey: string;
            contactTypeId: string;
        }>;
        groups: Array<{
            memberCount: number;
            contactCount: number;
            id: string;
            name: string;
            description: string;
            parentId: string;
            type: number;
            path: string;
            owner: string;
            relatedId: string;
        }>;
    };
};

/**
 * @description 更新指定用户个人配置
 * @summary Request data types
 * @url [ put ] /api/userconfigs/{userId}
 * @bizName orgsBiz
 */
export type PutUserconfigsUserIdReqTypeByOrgsV2 = {
    userId: string;
    'X-version'?: string;
    configType: number;
    configInfo: any;
};

/**
 * @description 更新当前用户个人配置
 * @summary Request data types
 * @url [ put ] /api/userconfigs
 * @bizName orgsBiz
 */
export type PutUserconfigsReqTypeByOrgsV2 = {
    'X-version'?: string;
    configType: number;
    configInfo: any;
};

/**
 * @description 按条件查询用户配置列表
 * @summary Request data types
 * @url [ get ] /api/userconfigs
 * @bizName orgsBiz
 */
export type GetUserconfigsReqTypeByOrgsV2 = {
    UserID: string;
    Type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 按条件查询用户配置列表
 * @summary Response data types
 * @url [ get ] /api/userconfigs
 * @bizName orgsBiz
 */
export type GetUserconfigsResTypeByOrgsV2 = {
    totalCount: number;
    records: Array<{
        contactId: string;
        configType: number;
        configInfo: any;
    }>;
};
