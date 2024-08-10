/**
 * @description Token交换
 * @summary Request data types
 * @url [ post ] /api/authentications/exchangetoken
 * @bizName authBiz
 */
export type PostAuthenticationsExchangetokenReqTypeByAus = {
    clientId: string;
    clientSecret: string;
    externalToken: string;
    credentials?: string;
    grantType?: string;
};

/**
 * @description Token交换
 * @summary Response data types
 * @url [ post ] /api/authentications/exchangetoken
 * @bizName authBiz
 */
export type PostAuthenticationsExchangetokenResTypeByAus = {
    accessToken: string;
    expiresIn: string;
    refreshToken: string;
    scope: string;
};

/**
 * @description 获取所有业务客户端配置信息
 * @summary Response data types
 * @url [ get ] /api/clients
 * @bizName authBiz
 */
export type GetClientsResTypeByAus = {
    id: string;
    name: string;
    description: string;
    uri: string;
    logoUri: string;
    downloadLink: string;
    allowedScopes: Array<string>;
    allowedGrantTypes: Array<string>;
    accessTokenLifetimeHours: number;
    clientType: number;
    clientIndex: number;
    showConsent: boolean;
    port: number;
};

/**
 * @description 获取指定的客户端信息
 * @summary Request data types
 * @url [ get ] /api/clients/{client}
 * @bizName authBiz
 */
export type GetClientsClientReqTypeByAus = {
    client: string;
};

/**
 * @description 获取指定的客户端信息
 * @summary Response data types
 * @url [ get ] /api/clients/{client}
 * @bizName authBiz
 */
export type GetClientsClientResTypeByAus = {
    id: string;
    name: string;
    description: string;
    uri: string;
    logoUri: string;
    downloadLink: string;
    allowedScopes: Array<string>;
    allowedGrantTypes: Array<string>;
    accessTokenLifetimeHours: number;
    clientType: number;
    clientIndex: number;
    showConsent: boolean;
    port: number;
};

/**
 * @description 新增客户端
 * @summary Request data types
 * @url [ post ] /api/clients/config
 * @bizName authBiz
 */
export type PostClientsConfigReqTypeByAus = {
    id?: string;
    clientName: string;
    description?: string;
    port?: number;
    logoUri?: string;
    downloadLink?: string;
    host?: string;
    schema?: string;
    requireConsent?: boolean;
    clientSecrets?: Array<string>;
    path?: string;
    allowedGrantTypes?: Array<string>;
    accessTokenLifetimeHours?: number;
    redirectUris?: Array<string>;
    postLogoutRedirectUris?: Array<string>;
    clientType?: number;
    index?: number;
    showConsent?: boolean;
    isUseGatewayAddress?: boolean;
    allowOfflineAccess?: boolean;
};

/**
 * @description 新增客户端
 * @summary Response data types
 * @url [ post ] /api/clients/config
 * @bizName authBiz
 */
export type PostClientsConfigResTypeByAus = {
    id: string;
    clientName: string;
    description: string;
    port: number;
    logoUri: string;
    downloadLink: string;
    host: string;
    schema: string;
    requireConsent: boolean;
    clientSecrets: Array<string>;
    path: string;
    allowedGrantTypes: Array<string>;
    accessTokenLifetimeHours: number;
    redirectUris: Array<string>;
    postLogoutRedirectUris: Array<string>;
    clientType: number;
    index: number;
    showConsent: boolean;
    isUseGatewayAddress: boolean;
    allowOfflineAccess: boolean;
};

/**
 * @description 获取客户端详情列表
 * @summary Request data types
 * @url [ get ] /api/clients/config
 * @bizName authBiz
 */
export type GetClientsConfigReqTypeByAus = {
    pageSize?: number;
    pageIndex?: number;
};

/**
 * @description 获取客户端详情列表
 * @summary Response data types
 * @url [ get ] /api/clients/config
 * @bizName authBiz
 */
export type GetClientsConfigResTypeByAus = {
    totalCount: number;
    items: Array<{
        id: string;
        clientName: string;
        description: string;
        port: number;
        logoUri: string;
        downloadLink: string;
        host: string;
        schema: string;
        requireConsent: boolean;
        clientSecrets: Array<string>;
        path: string;
        allowedGrantTypes: Array<string>;
        accessTokenLifetimeHours: number;
        redirectUris: Array<string>;
        postLogoutRedirectUris: Array<string>;
        clientType: number;
        index: number;
        showConsent: boolean;
        isUseGatewayAddress: boolean;
        allowOfflineAccess: boolean;
    }>;
};

/**
 * @description 更新客户端详情
 * @summary Request data types
 * @url [ put ] /api/clients/config/{clientId}
 * @bizName authBiz
 */
export type PutClientsConfigClientIdReqTypeByAus = {
    clientId: string;
    clientName: string;
    description?: string;
    port?: number;
    logoUri?: string;
    downloadLink?: string;
    host?: string;
    schema?: string;
    requireConsent?: boolean;
    clientSecrets?: Array<string>;
    path?: string;
    allowedGrantTypes?: Array<string>;
    accessTokenLifetimeHours?: number;
    redirectUris?: Array<string>;
    postLogoutRedirectUris?: Array<string>;
    clientType?: number;
    index?: number;
    showConsent?: boolean;
    isUseGatewayAddress?: boolean;
    allowOfflineAccess?: boolean;
};

/**
 * @description 删除客户端
 * @summary Request data types
 * @url [ delete ] /api/clients/config/{clientId}
 * @bizName authBiz
 */
export type DeleteClientsConfigClientIdReqTypeByAus = {
    clientId: string;
};

/**
 * @description 获取指定客户端的详情
 * @summary Request data types
 * @url [ get ] /api/clients/config/{clientId}
 * @bizName authBiz
 */
export type GetClientsConfigClientIdReqTypeByAus = {
    clientId: string;
};

/**
 * @description 获取指定客户端的详情
 * @summary Response data types
 * @url [ get ] /api/clients/config/{clientId}
 * @bizName authBiz
 */
export type GetClientsConfigClientIdResTypeByAus = {
    id: string;
    clientName: string;
    description: string;
    port: number;
    logoUri: string;
    downloadLink: string;
    host: string;
    schema: string;
    requireConsent: boolean;
    clientSecrets: Array<string>;
    path: string;
    allowedGrantTypes: Array<string>;
    accessTokenLifetimeHours: number;
    redirectUris: Array<string>;
    postLogoutRedirectUris: Array<string>;
    clientType: number;
    index: number;
    showConsent: boolean;
    isUseGatewayAddress: boolean;
    allowOfflineAccess: boolean;
};

/**
 * @description 获取同步Clients数据进度
 * @summary Request data types
 * @url [ get ] /api/clients/data/sync/{sessionId}/progress
 * @bizName authBiz
 */
export type GetClientsDataSyncSessionIdProgressReqTypeByAus = {
    sessionId: string;
};

/**
 * @description 获取同步Clients数据进度
 * @summary Response data types
 * @url [ get ] /api/clients/data/sync/{sessionId}/progress
 * @bizName authBiz
 */
export type GetClientsDataSyncSessionIdProgressResTypeByAus = {
    sessionId: string;
    syncState: any;
    totalCount: number;
    syncCount: number;
};

/**
 * @description 获取指定权限数据的角色列表
 * @summary Request data types
 * @url [ get ] /api/permissionDatas/{data}/roles
 * @bizName authBiz
 */
export type GetPermissionDatasDataRolesReqTypeByAus = {
    data: string;
    type?: number;
    pageSize?: number;
    pageIndex?: number;
};

/**
 * @description 获取指定权限数据的角色列表
 * @summary Response data types
 * @url [ get ] /api/permissionDatas/{data}/roles
 * @bizName authBiz
 */
export type GetPermissionDatasDataRolesResTypeByAus = {
    totalCount: number;
    items: Array<string>;
};

/**
 * @description 获取指定路径的数据权限
 * @summary Request data types
 * @url [ get ] /api/permissionDatas
 * @bizName authBiz
 */
export type GetPermissionDatasReqTypeByAus = {
    type?: number;
    dataPath?: string;
};

/**
 * @description 获取指定路径的数据权限
 * @summary Response data types
 * @url [ get ] /api/permissionDatas
 * @bizName authBiz
 */
export type GetPermissionDatasResTypeByAus = {
    hasAllDataPermission: boolean;
    dataPermissionsOut: Array<{
        id: string;
        roleId: string;
        data: string;
        type: any;
    }>;
};

/**
 * @description 获取当前用户绑定角色下的数据权限
 * @summary Request data types
 * @url [ get ] /api/roles/permissionDatas
 * @bizName authBiz
 */
export type GetRolesPermissionDatasReqTypeByAus = {
    type?: number;
    pageSize?: number;
    pageIndex?: number;
};

/**
 * @description 获取当前用户绑定角色下的数据权限
 * @summary Response data types
 * @url [ get ] /api/roles/permissionDatas
 * @bizName authBiz
 */
export type GetRolesPermissionDatasResTypeByAus = {
    hasAllDataPermission: boolean;
    totalCount: number;
    items: Array<{
        id: string;
        roleId: string;
        data: string;
        type: any;
    }>;
};

/**
 * @description 获取指定角色Id权限数据列表
 * @summary Request data types
 * @url [ get ] /api/roles/{role}/permissionDatas
 * @bizName authBiz
 */
export type GetRolesRolePermissionDatasReqTypeByAus = {
    role: string;
    type?: number;
    pageSize?: number;
    pageIndex?: number;
};

/**
 * @description 获取指定角色Id权限数据列表
 * @summary Response data types
 * @url [ get ] /api/roles/{role}/permissionDatas
 * @bizName authBiz
 */
export type GetRolesRolePermissionDatasResTypeByAus = {
    hasAllDataPermission: boolean;
    totalCount: number;
    items: Array<{
        id: string;
        roleId: string;
        data: string;
        type: any;
    }>;
};

/**
 * @description 绑定数据到指定角色
 * @summary Request data types
 * @url [ post ] /api/roles/{role}/permissionDatas
 * @bizName authBiz
 */
export type PostRolesRolePermissionDatasReqTypeByAus = {
    role: string;
    data: string;
    type?: number;
};

/**
 * @description 移除指定数据权限关系
 * @summary Request data types
 * @url [ delete ] /api/roles/{role}/permissionDatas
 * @bizName authBiz
 */
export type DeleteRolesRolePermissionDatasReqTypeByAus = {
    role: string;
    type?: number;
    data: string;
};

/**
 * @description 移除全数据权限关系
 * @summary Request data types
 * @url [ delete ] /api/roles/{role}/allPermissionDatas
 * @bizName authBiz
 */
export type DeleteRolesRoleAllPermissionDatasReqTypeByAus = {
    role: string;
    type: number;
};

/**
 * @description 批量绑定数据到指定角色
 * @summary Request data types
 * @url [ post ] /api/roles/{role}/batchPermissionDatas
 * @bizName authBiz
 */
export type PostRolesRoleBatchPermissionDatasReqTypeByAus = {
    role: string;
    type?: number;
    hasAllDataPermission: boolean;
    dataPermissionIns: Array<{
        data: string;
        type: number;
    }>;
};

/**
 * @description 批量绑定数据到指定角色
 * @summary Response data types
 * @url [ post ] /api/roles/{role}/batchPermissionDatas
 * @bizName authBiz
 */
export type PostRolesRoleBatchPermissionDatasResTypeByAus = {
    hasAllPermission: boolean;
    normalResults: Array<{
        id: string;
        roleId: string;
        data: string;
        type: any;
    }>;
    failureResult: any;
};

/**
 * @description 批量变更绑定数据到指定角色
 * @summary Request data types
 * @url [ put ] /api/roles/{role}/batchPermissionDatas
 * @bizName authBiz
 */
export type PutRolesRoleBatchPermissionDatasReqTypeByAus = {
    role: string;
    type?: number;
    hasAllDataPermission: boolean;
    dataPermissionIns: Array<{
        data: string;
        type: number;
    }>;
};

/**
 * @description 批量移除绑定数据到指定角色
 * @summary Request data types
 * @url [ delete ] /api/roles/{role}/batchPermissionDatas
 * @bizName authBiz
 */
export type DeleteRolesRoleBatchPermissionDatasReqTypeByAus = {
    role: string;
    type?: number;
    dataIds: Array<string>;
};

/**
 * @description 获取指定用户绑定角色下的数据权限
 * @summary Request data types
 * @url [ get ] /api/users/{user}/permissionDatas
 * @bizName authBiz
 */
export type GetUsersUserPermissionDatasReqTypeByAus = {
    user: string;
    type?: number;
    pageSize?: number;
    pageIndex?: number;
};

/**
 * @description 获取指定用户绑定角色下的数据权限
 * @summary Response data types
 * @url [ get ] /api/users/{user}/permissionDatas
 * @bizName authBiz
 */
export type GetUsersUserPermissionDatasResTypeByAus = {
    hasAllDataPermission: boolean;
    totalCount: number;
    items: Array<{
        id: string;
        roleId: string;
        data: string;
        type: any;
    }>;
};

/**
 * @description 移除指定功能权限类型的数据权限关系
 * @summary Request data types
 * @url [ delete ] /api/roles/{role}/permissionDatas/functionModule
 * @bizName authBiz
 */
export type DeleteRolesRolePermissionDatasFunctionModuleReqTypeByAus = {
    role: string;
    data: string;
};

/**
 * @description 绑定指定功能权限类型的数据权限关系
 * @summary Request data types
 * @url [ post ] /api/roles/{role}/permissionDatas/functionModule
 * @bizName authBiz
 */
export type PostRolesRolePermissionDatasFunctionModuleReqTypeByAus = {
    role: string;
};

/**
 * @description 新增移除全部功能权限类型的数据权限关系
 * @summary Request data types
 * @url [ delete ] /api/roles/{role}/permissionDatas/functionModule/all
 * @bizName authBiz
 */
export type DeleteRolesRolePermissionDatasFunctionModuleAllReqTypeByAus = {
    role: string;
};

/**
 * @description 查询根功能模块
 * @summary Request data types
 * @url [ get ] /api/functions/root
 * @bizName authBiz
 */
export type GetFunctionsRootReqTypeByAus = {
    pageSize?: number;
    pageIndex?: number;
};

/**
 * @description 查询根功能模块
 * @summary Response data types
 * @url [ get ] /api/functions/root
 * @bizName authBiz
 */
export type GetFunctionsRootResTypeByAus = {
    totalCount: number;
    items: Array<{
        id: string;
        parentId: string;
        name: string;
        isRelationLicense: boolean;
    }>;
};

/**
 * @description 获取功能模块详情列表
 * @summary Request data types
 * @url [ get ] /api/functions
 * @bizName authBiz
 */
export type GetFunctionsReqTypeByAus = {
    pageSize?: number;
    pageIndex?: number;
};

/**
 * @description 获取功能模块详情列表
 * @summary Response data types
 * @url [ get ] /api/functions
 * @bizName authBiz
 */
export type GetFunctionsResTypeByAus = {
    totalCount: number;
    items: Array<{
        id: string;
        parentId: string;
        name: string;
        isRelationLicense: boolean;
    }>;
};

/**
 * @description 新增一个功能项
 * @summary Request data types
 * @url [ post ] /api/functions
 * @bizName authBiz
 */
export type PostFunctionsReqTypeByAus = {
    pid?: string;
    name: string;
};

/**
 * @description 新增一个功能项
 * @summary Response data types
 * @url [ post ] /api/functions
 * @bizName authBiz
 */
export type PostFunctionsResTypeByAus = {
    id: string;
    parentId: string;
    name: string;
    isRelationLicense: boolean;
};

/**
 * @description 分页获取功能模块详情列表
 * @summary Request data types
 * @url [ get ] /api/functions/{pid}/paging
 * @bizName authBiz
 */
export type GetFunctionsPidPagingReqTypeByAus = {
    pid: string;
    pageSize?: number;
    pageIndex?: number;
};

/**
 * @description 分页获取功能模块详情列表
 * @summary Response data types
 * @url [ get ] /api/functions/{pid}/paging
 * @bizName authBiz
 */
export type GetFunctionsPidPagingResTypeByAus = {
    totalCount: number;
    items: Array<{
        id: string;
        parentId: string;
        name: string;
        isRelationLicense: boolean;
    }>;
};

/**
 * @description 获取指定功能项的详情
 * @summary Request data types
 * @url [ get ] /api/functions/{id}
 * @bizName authBiz
 */
export type GetFunctionsIdReqTypeByAus = {
    id: string;
};

/**
 * @description 获取指定功能项的详情
 * @summary Response data types
 * @url [ get ] /api/functions/{id}
 * @bizName authBiz
 */
export type GetFunctionsIdResTypeByAus = {
    id: string;
    parentId: string;
    name: string;
    isRelationLicense: boolean;
};

/**
 * @description 更新功能项详情
 * @summary Request data types
 * @url [ put ] /api/functions/{id}
 * @bizName authBiz
 */
export type PutFunctionsIdReqTypeByAus = {
    id: string;
    name: string;
};

/**
 * @description 更新功能项详情
 * @summary Response data types
 * @url [ put ] /api/functions/{id}
 * @bizName authBiz
 */
export type PutFunctionsIdResTypeByAus = {
    id: string;
    parentId: string;
    name: string;
    isRelationLicense: boolean;
};

/**
 * @description 删除一个功能模块
 * @summary Request data types
 * @url [ delete ] /api/functions/{id}
 * @bizName authBiz
 */
export type DeleteFunctionsIdReqTypeByAus = {
    id: string;
};

/**
 * @description 获取string类型License业务控制参数的值
 * @summary Request data types
 * @url [ get ] /api/licenses/{bizControlKey}/string
 * @bizName authBiz
 */
export type GetLicensesBizControlKeyStringReqTypeByAus = {
    bizControlKey: string;
};

/**
 * @description 获取bool类型License业务控制参数的值
 * @summary Request data types
 * @url [ get ] /api/licenses/{bizControlKey}/bool
 * @bizName authBiz
 */
export type GetLicensesBizControlKeyBoolReqTypeByAus = {
    bizControlKey: string;
};

/**
 * @description 获取int类型License业务控制参数的值
 * @summary Request data types
 * @url [ get ] /api/licenses/{bizControlKey}/int
 * @bizName authBiz
 */
export type GetLicensesBizControlKeyIntReqTypeByAus = {
    bizControlKey: string;
};

/**
 * @description 获取License授权功能模块
 * @summary Response data types
 * @url [ get ] /api/licenses/authorization/functions
 * @bizName authBiz
 */
export type GetLicensesAuthorizationFunctionsResTypeByAus = {
    id: string;
    parentId: string;
    name: string;
};

/**
 * @description 绑定用户到指定角色
 * @summary Request data types
 * @url [ post ] /api/roles/{role}/participators
 * @bizName authBiz
 */
export type PostRolesRoleParticipatorsReqTypeByAus = {
    role: string;
    userId?: string;
};

/**
 * @description 绑定用户到指定角色
 * @summary Response data types
 * @url [ post ] /api/roles/{role}/participators
 * @bizName authBiz
 */
export type PostRolesRoleParticipatorsResTypeByAus = {
    id: string;
    user: string;
};

/**
 * @description 获取指定角色的用户列表
 * @summary Request data types
 * @url [ get ] /api/roles/{role}/participators
 * @bizName authBiz
 */
export type GetRolesRoleParticipatorsReqTypeByAus = {
    role: string;
    pageSize?: number;
    pageIndex?: number;
};

/**
 * @description 获取指定角色的用户列表
 * @summary Response data types
 * @url [ get ] /api/roles/{role}/participators
 * @bizName authBiz
 */
export type GetRolesRoleParticipatorsResTypeByAus = {
    totalCount: number;
    items: Array<{
        id: string;
        user: string;
    }>;
};

/**
 * @description 绑定批量用户到指定角色
 * @summary Request data types
 * @url [ post ] /api/roles/{role}/batchParticipators
 * @bizName authBiz
 */
export type PostRolesRoleBatchParticipatorsReqTypeByAus = {
    role: string;
};

/**
 * @description 变更角色绑定的用户，角色用户绑定以当前带过来的用户集合为主
 * @summary Request data types
 * @url [ put ] /api/roles/{role}/batchParticipators
 * @bizName authBiz
 */
export type PutRolesRoleBatchParticipatorsReqTypeByAus = {
    role: string;
};

/**
 * @description 批量删除指定角色的用户绑定关系
 * @summary Request data types
 * @url [ delete ] /api/roles/{role}/batchParticipators
 * @bizName authBiz
 */
export type DeleteRolesRoleBatchParticipatorsReqTypeByAus = {
    role: string;
};

/**
 * @description 删除指定的绑定关系
 * @summary Request data types
 * @url [ delete ] /api/roles/{role}/participators/{user}
 * @bizName authBiz
 */
export type DeleteRolesRoleParticipatorsUserReqTypeByAus = {
    role: string;
    user: string;
};

/**
 * @description 获取指定用户的角色列表
 * @summary Request data types
 * @url [ get ] /api/users/{user}/participating
 * @bizName authBiz
 */
export type GetUsersUserParticipatingReqTypeByAus = {
    user: string;
    pageSize?: number;
    pageIndex?: number;
};

/**
 * @description 获取指定用户的角色列表
 * @summary Response data types
 * @url [ get ] /api/users/{user}/participating
 * @bizName authBiz
 */
export type GetUsersUserParticipatingResTypeByAus = {
    totalCount: number;
    items: Array<{
        id: string;
        roleId: string;
        roleName: string;
    }>;
};

/**
 * @description 获取当前用户的角色列表
 * @summary Request data types
 * @url [ get ] /api/user/participating
 * @bizName authBiz
 */
export type GetUserParticipatingReqTypeByAus = {
    pageSize?: number;
    pageIndex?: number;
};

/**
 * @description 获取当前用户的角色列表
 * @summary Response data types
 * @url [ get ] /api/user/participating
 * @bizName authBiz
 */
export type GetUserParticipatingResTypeByAus = {
    totalCount: number;
    items: Array<{
        id: string;
        roleId: string;
        roleName: string;
    }>;
};

/**
 * @description 用户批量变更绑定的角色
 * @summary Request data types
 * @url [ put ] /api/users/{user}/batchParticipators
 * @bizName authBiz
 */
export type PutUsersUserBatchParticipatorsReqTypeByAus = {
    user: string;
};

/**
 * @description 获取指定角色的所有应用授权
 * @summary Request data types
 * @url [ get ] /api/roles/{role}/visiting
 * @bizName authBiz
 */
export type GetRolesRoleVisitingReqTypeByAus = {
    role: string;
};

/**
 * @description 获取指定角色的所有应用授权
 * @summary Response data types
 * @url [ get ] /api/roles/{role}/visiting
 * @bizName authBiz
 */
export type GetRolesRoleVisitingResTypeByAus = {
    permissionId: string;
    clientId: string;
};

/**
 * @description 为指定角色添加应用授权
 * @summary Request data types
 * @url [ post ] /api/roles/{role}/visiting
 * @bizName authBiz
 */
export type PostRolesRoleVisitingReqTypeByAus = {
    role: string;
    clientId: string;
};

/**
 * @description 为指定角色添加应用授权
 * @summary Response data types
 * @url [ post ] /api/roles/{role}/visiting
 * @bizName authBiz
 */
export type PostRolesRoleVisitingResTypeByAus = {
    permissionId: string;
    clientId: string;
};

/**
 * @description 为指定角色批量添加应用授权
 * @summary Request data types
 * @url [ post ] /api/roles/{role}/BatchVisiting
 * @bizName authBiz
 */
export type PostRolesRoleBatchVisitingReqTypeByAus = {
    role: string;
};

/**
 * @description 变更角色绑定应用权限，角色应用权限绑定以当前带过来的应用集合为主
 * @summary Request data types
 * @url [ put ] /api/roles/{role}/BatchVisiting
 * @bizName authBiz
 */
export type PutRolesRoleBatchVisitingReqTypeByAus = {
    role: string;
};

/**
 * @description 删除指定角色的某个应用授权
 * @summary Request data types
 * @url [ delete ] /api/roles/{role}/visiting/{client}
 * @bizName authBiz
 */
export type DeleteRolesRoleVisitingClientReqTypeByAus = {
    role: string;
    client: string;
};

/**
 * @description 获取指定用户的可访问应用列表
 * @summary Request data types
 * @url [ get ] /api/users/{user}/visiting
 * @bizName authBiz
 */
export type GetUsersUserVisitingReqTypeByAus = {
    user: string;
};

/**
 * @description 获取当前用户的可访问应用列表
 * @summary Request data types
 * @url [ get ] /api/user/visiting
 * @bizName authBiz
 */
export type GetUserVisitingReqTypeByAus = {
    availableOnly?: boolean;
};

/**
 * @description 获取当前用户的可访问应用列表
 * @summary Response data types
 * @url [ get ] /api/user/visiting
 * @bizName authBiz
 */
export type GetUserVisitingResTypeByAus = {
    id: string;
    name: string;
    description: string;
    uri: string;
    logoUri: string;
    downloadLink: string;
    canAccess: boolean;
    type: number;
    index: number;
    showConsent: boolean;
};

/**
 * @description 获取系统中定义的角色详情列表
 * @summary Request data types
 * @url [ get ] /api/roles
 * @bizName authBiz
 */
export type GetRolesReqTypeByAus = {
    pageSize?: number;
    pageIndex?: number;
};

/**
 * @description 获取系统中定义的角色详情列表
 * @summary Response data types
 * @url [ get ] /api/roles
 * @bizName authBiz
 */
export type GetRolesResTypeByAus = {
    totalCount: number;
    items: Array<{
        id: string;
        name: string;
        description: string;
    }>;
};

/**
 * @description 新增一个角色项
 * @summary Request data types
 * @url [ post ] /api/roles
 * @bizName authBiz
 */
export type PostRolesReqTypeByAus = {
    name: string;
    description?: string;
};

/**
 * @description 新增一个角色项
 * @summary Response data types
 * @url [ post ] /api/roles
 * @bizName authBiz
 */
export type PostRolesResTypeByAus = {
    id: string;
    name: string;
    description: string;
};

/**
 * @description 获取指定角色的详情
 * @summary Request data types
 * @url [ get ] /api/roles/{id}
 * @bizName authBiz
 */
export type GetRolesIdReqTypeByAus = {
    id: string;
};

/**
 * @description 获取指定角色的详情
 * @summary Response data types
 * @url [ get ] /api/roles/{id}
 * @bizName authBiz
 */
export type GetRolesIdResTypeByAus = {
    id: string;
    name: string;
    description: string;
};

/**
 * @description 更新角色详情
 * @summary Request data types
 * @url [ put ] /api/roles/{id}
 * @bizName authBiz
 */
export type PutRolesIdReqTypeByAus = {
    id: string;
    name: string;
    description?: string;
};

/**
 * @description 更新角色详情
 * @summary Response data types
 * @url [ put ] /api/roles/{id}
 * @bizName authBiz
 */
export type PutRolesIdResTypeByAus = {
    id: string;
    name: string;
    description: string;
};

/**
 * @description 删除系统中一个角色
 * @summary Request data types
 * @url [ delete ] /api/roles/{id}
 * @bizName authBiz
 */
export type DeleteRolesIdReqTypeByAus = {
    id: string;
};
