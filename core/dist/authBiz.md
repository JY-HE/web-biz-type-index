/**
 * 认证Token
 * @params accessToken {string} access_token
 * @params expiresIn {string} expires_in
 * @params refreshToken {string} refresh_token
 * @params scope {string} scope
 */
type AuthenticationTokenCommonType = {
    accessToken?: string;
    expiresIn?: string;
    refreshToken?: string;
    scope?: string;
};

/**
 * 指定用户有权访问的应用实体
 * @params id {string} 应用Id
 * @params name {string} 应用名称
 * @params description {string} 应用描述
 * @params uri {string} 访问地址
 * @params logoUri {string} 图像地址
 * @params downloadLink {string} 下载地址
 * @params allowedScopes {any[]} Scopes
 * @params allowedGrantTypes {any[]} 支持的授权类型
 * @params accessTokenLifetimeHours {number} AccessToken 有效时长
 * @params clientType {number} 客户端类型"0,  pc端业务，需要验证是否安装客户端，并提供DownloadLink下载安装包链接"1,  后台管理业务，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"2,  产品应用，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"3,  需要带上token的应用平台
 * @params clientIndex {number} 客户端索引(65535：无效值)
 * @params showConsent {boolean} 同意展示（前端使用）
 * @params port {number} 端口
 */
type ClientOutCommonType = {
    id: string;
    name?: string;
    description?: string;
    uri: string;
    logoUri?: string;
    downloadLink?: string;
    allowedScopes?: any[];
    allowedGrantTypes?: any[];
    accessTokenLifetimeHours?: number;
    clientType?: number;
    clientIndex?: number;
    showConsent?: boolean;
    port?: number;
};

/**
 * 配置客户端输入
 * @params id {string} 客户端Key
 * @params clientName {string} 客户端名称
 * @params description {string} 描述
 * @params port {number} 客户端端口
 * @params logoUri {string} LogUri例子："/images/erds.png"
 * @params downloadLink {string} 下载链接地址
 * @params host {string} 主机名
 * @params schema {string} 客户端协议头有特殊要求则指定，否则输入空，则以 GlobalConfig.UseHttps ? "https" : "http";
 * @params requireConsent {boolean} 允许同意返回当前客户端(权限判断)默认是 true，false(不做权限判断)
 * @params clientSecrets {any[]} 客户端密钥
 * @params path {string} 客户端Uri路径
 * @params allowedGrantTypes {any[]} 允许的授权类型
 * @params accessTokenLifetimeHours {number} access token存活时间0表示2分钟，其他则为小时
 * @params redirectUris {any[]} 重定向URI以‘;’进行分隔存储
 * @params postLogoutRedirectUris {any[]} 登出后跳转的路径时以‘;’进行分隔存储，若无指定使用默认的
 * @params clientType {number} 客户端类型"0,  pc端业务，需要验证是否安装客户端，并提供DownloadLink下载安装包链接"1,  后台管理业务，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"2,  产品应用，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"3,  需要带上token的应用平台
 * @params index {number} 应用索引（前端使用）
 * @params showConsent {boolean} 同意展示（前端使用）
 * @params isUseGatewayAddress {boolean} 是否使用网关地址
 * @params allowOfflineAccess {boolean} 默认允许静默刷新token
 */
type ConfigClientInCommonType = {
    id?: string;
    clientName: string;
    description?: string;
    port?: number;
    logoUri?: string;
    downloadLink?: string;
    host?: string;
    schema?: string;
    requireConsent?: boolean;
    clientSecrets?: any[];
    path?: string;
    allowedGrantTypes?: any[];
    accessTokenLifetimeHours?: number;
    redirectUris?: any[];
    postLogoutRedirectUris?: any[];
    clientType?: number;
    index?: number;
    showConsent?: boolean;
    isUseGatewayAddress?: boolean;
    allowOfflineAccess?: boolean;
};

/**
 *
 * @params type {string}
 * @params title {string}
 * @params status {number}
 * @params detail {string}
 * @params instance {string}
 */
type ProblemDetailsCommonType = {
    type?: string;
    title?: string;
    status?: number;
    detail?: string;
    instance?: string;
};

/**
 * 配置客户端输出
 * @params id {string} 客户端Key
 * @params clientName {string} 客户端名称
 * @params description {string} 描述
 * @params port {number} 客户端端口若为0，则表示未指定
 * @params logoUri {string} LogUri例子："/images/erds.png"
 * @params downloadLink {string} 下载链接地址
 * @params host {string} 主机名
 * @params schema {string} 客户端协议头若为空，则以 GlobalConfig.UseHttps ? "https" : "http";
 * @params requireConsent {boolean} 允许同意返回当前客户端(权限判断)默认是 true，false(不做权限判断)
 * @params clientSecrets {any[]} 客户端密钥
 * @params path {string} 客户端Uri路径
 * @params allowedGrantTypes {any[]} 允许的授权类型
 * @params accessTokenLifetimeHours {number} access token存活时间0表示2分钟，其他则为小时
 * @params redirectUris {any[]} 重定向URI以‘;’进行分隔存储
 * @params postLogoutRedirectUris {any[]} 登出后跳转的路径时以‘;’进行分隔存储，若无指定使用默认的
 * @params clientType {number} 客户端类型"0,  pc端业务，需要验证是否安装客户端，并提供DownloadLink下载安装包链接"1,  后台管理业务，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"2,  产品应用，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"3,  需要带上token的应用平台
 * @params index {number} 应用索引（前端使用）
 * @params showConsent {boolean} 同意展示（前端使用）
 * @params isUseGatewayAddress {boolean} 是否使用网关地址
 * @params allowOfflineAccess {boolean} 默认允许静默刷新token
 */
type ConfigClientOutCommonType = {
    id?: string;
    clientName?: string;
    description?: string;
    port?: number;
    logoUri?: string;
    downloadLink?: string;
    host?: string;
    schema?: string;
    requireConsent?: boolean;
    clientSecrets?: any[];
    path?: string;
    allowedGrantTypes?: any[];
    accessTokenLifetimeHours?: number;
    redirectUris?: any[];
    postLogoutRedirectUris?: any[];
    clientType?: number;
    index?: number;
    showConsent?: boolean;
    isUseGatewayAddress?: boolean;
    allowOfflineAccess?: boolean;
};

/**
 * 分页查询结果
 * @params totalCount {number} 符合条件的总记录数
 * @params items {ConfigClientOutCommonType[]} 数据项
 */
type ConfigClientOutPagedResponseCommonType = {
    totalCount?: number;
    items?: ConfigClientOutCommonType[];
};

/**
 * 配置客户端更新输入
 * @params clientName {string} 客户端名称
 * @params description {string} 描述
 * @params port {number} 客户端端口
 * @params logoUri {string} LogUri例子："/images/erds.png"
 * @params downloadLink {string} 下载链接地址
 * @params host {string} 主机名
 * @params schema {string} 客户端协议头有特殊要求则指定，否则输入空，则以 GlobalConfig.UseHttps ? "https" : "http";
 * @params requireConsent {boolean} 允许同意返回当前客户端(权限判断)默认是 true，false(不做权限判断)
 * @params clientSecrets {any[]} 客户端密钥
 * @params path {string} 客户端Uri路径
 * @params allowedGrantTypes {any[]} 允许的授权类型
 * @params accessTokenLifetimeHours {number} access token存活时间0表示2分钟，其他则为小时
 * @params redirectUris {any[]} 重定向URI以‘;’进行分隔存储
 * @params postLogoutRedirectUris {any[]} 登出后跳转的路径时以‘;’进行分隔存储，若无指定使用默认的
 * @params clientType {number} 客户端类型"0,  pc端业务，需要验证是否安装客户端，并提供DownloadLink下载安装包链接"1,  后台管理业务，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"2,  产品应用，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"3,  需要带上token的应用平台
 * @params index {number} 应用索引（前端使用）
 * @params showConsent {boolean} 同意展示（前端使用）
 * @params isUseGatewayAddress {boolean} 是否使用网关地址
 * @params allowOfflineAccess {boolean} 默认允许静默刷新token
 */
type ConfigClientUpdateInCommonType = {
    clientName: string;
    description?: string;
    port?: number;
    logoUri?: string;
    downloadLink?: string;
    host?: string;
    schema?: string;
    requireConsent?: boolean;
    clientSecrets?: any[];
    path?: string;
    allowedGrantTypes?: any[];
    accessTokenLifetimeHours?: number;
    redirectUris?: any[];
    postLogoutRedirectUris?: any[];
    clientType?: number;
    index?: number;
    showConsent?: boolean;
    isUseGatewayAddress?: boolean;
    allowOfflineAccess?: boolean;
};

/**
 * 同步状态
 */
type SyncStateCommonType = 1 | 2 | 3;

/**
 * 同步进度
 * @params sessionId {string} 会话Id
 * @params syncState {SyncStateCommonType} 同步状态
 * @params totalCount {number} 总数量
 * @params syncCount {number} 已经同步数量
 */
type SyncProgressCommonType = {
    sessionId?: string;
    syncState?: SyncStateCommonType;
    totalCount?: number;
    syncCount?: number;
};

/**
 * undefined
 */
type DataTypeCommonType = 0 | 1 | 2 | 3 | 4;

/**
 * 分页查询结果
 * @params totalCount {number} 符合条件的总记录数
 * @params items {any[]} 数据项
 */
type GuidPagedResponseCommonType = {
    totalCount?: number;
    items?: any[];
};

/**
 * 数据权限
 * @params id {string} 授权Id
 * @params roleId {string} 角色ID
 * @params data {string} 权限数据
 * @params type {DataTypeCommonType}
 */
type DataPermissionOutCommonType = {
    id?: string;
    roleId?: string;
    data?: string;
    type?: DataTypeCommonType;
};

/**
 * 路径数据权限数据
 * @params hasAllDataPermission {boolean} 是否有数据全权限
 * @params dataPermissionsOut {DataPermissionOutCommonType[]} 数据权限集合输出
 */
type DataPathPermissionOutCommonType = {
    hasAllDataPermission?: boolean;
    dataPermissionsOut?: DataPermissionOutCommonType[];
};

/**
 * 数据权限分页请求
 * @params hasAllDataPermission {boolean} 是否有数据全权限
 * @params totalCount {number} 符合条件的总记录数
 * @params items {DataPermissionOutCommonType[]} 数据项
 */
type DataPermissionOutDataPermissionPagedResponseCommonType = {
    hasAllDataPermission?: boolean;
    totalCount?: number;
    items?: DataPermissionOutCommonType[];
};

/**
 * 数据权限接口入参
 * @params data {string} 权限数据
 * @params type {number} 数据类型0：组织架构数据，1：预置组数据，2:视频监控数据，3：行政区域数据,4：数据权限
 */
type DataPermissionInCommonType = {
    data: string;
    type?: number;
};

/**
 * 批量数据权限接口入参
 * @params type {number} 数据类型0：组织架构数据，1：预置组数据，2:视频监控数据，3：行政区域数据,4:功能模块数据
 * @params hasAllDataPermission {boolean} 是否有数据全权限
 * @params dataPermissionIns {DataPermissionInCommonType[]} 数据权限集合
 */
type BatchDataPermissionInCommonType = {
    type?: number;
    hasAllDataPermission: boolean;
    dataPermissionIns: DataPermissionInCommonType[];
};

/**
 * 失败结果信息
 * @params data {string} 关键数据
 * @params failureMessage {string} 失败信息
 */
type FailureResultMessageCommonType = {
    data?: string;
    failureMessage?: string;
};

/**
 * 批量失败结果
 * @params count {number} 失败条数
 * @params failureResults {FailureResultMessageCommonType[]} 失败结果
 */
type BatchFailureResultCommonType = {
    count?: number;
    failureResults?: FailureResultMessageCommonType[];
};

/**
 * 批量结果
 * @params hasAllPermission {boolean} 是否拥有所有权限
 * @params normalResults {DataPermissionOutCommonType[]} 批量正常结果
 * @params failureResult {BatchFailureResultCommonType} 批量失败结果
 */
type DataPermissionOutBatchResultCommonType = {
    hasAllPermission?: boolean;
    normalResults?: DataPermissionOutCommonType[];
    failureResult?: BatchFailureResultCommonType;
};

/**
 * 批量删除数据权限
 * @params type {number} 数据类型0：组织架构数据，2:视频监控数据，3：行政区域数据
 * @params dataIds {any[]} 数据权限集合
 */
type BatchDeleteDataPermissionInCommonType = {
    type?: number;
    dataIds: any[];
};

/**
 * 功能模块
 * @params id {string} 标识
 * @params parentId {string} 父节点标识
 * @params name {string} 名称
 * @params isRelationLicense {boolean} 是否关联授权License
 */
type FunctionModuleOutCommonType = {
    id?: string;
    parentId?: string;
    name?: string;
    isRelationLicense?: boolean;
};

/**
 * 分页查询结果
 * @params totalCount {number} 符合条件的总记录数
 * @params items {FunctionModuleOutCommonType[]} 数据项
 */
type FunctionModuleOutPagedResponseCommonType = {
    totalCount?: number;
    items?: FunctionModuleOutCommonType[];
};

/**
 * 功能模块
 * @params name {string} 名称
 */
type FunctionModuleInCommonType = {
    name: string;
};

/**
 * 授权文件授权的功能模块信息
 * @params id {string} 标识
 * @params parentId {string} 父节点标识
 * @params name {string} 名称
 */
type LicenseFunctionOutCommonType = {
    id?: string;
    parentId?: string;
    name?: string;
};

/**
 * Participation Write-In Structure
 * @params userId {string} The ldap id of user
 */
type ParticipatorInCommonType = {
    userId?: string;
};

/**
 * Participation Read-Out Structure
 * @params id {string} Participation Id
 * @params user {string} The Name of Role
 */
type ParticipatorOutCommonType = {
    id?: string;
    user?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 符合条件的总记录数
 * @params items {ParticipatorOutCommonType[]} 数据项
 */
type ParticipatorOutPagedResponseCommonType = {
    totalCount?: number;
    items?: ParticipatorOutCommonType[];
};

/**
 * Participating Read-Out Structure
 * @params id {string} Participation Id
 * @params roleId {string} The Id of Role
 * @params roleName {string} The Name of Role
 */
type ParticipatingOutCommonType = {
    id?: string;
    roleId?: string;
    roleName?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 符合条件的总记录数
 * @params items {ParticipatingOutCommonType[]} 数据项
 */
type ParticipatingOutPagedResponseCommonType = {
    totalCount?: number;
    items?: ParticipatingOutCommonType[];
};

/**
 * 授权
 * @params permissionId {string} 授权Id
 * @params clientId {string} 客户端Id
 */
type PermissionOutCommonType = {
    permissionId?: string;
    clientId?: string;
};

/**
 * 授权
 * @params clientId {string} 客户端Id
 */
type PermissionInCommonType = {
    clientId: string;
};

/**
 * 指定用户有权访问的应用实体
 * @params id {string} 应用Id
 * @params name {string} 应用名称
 * @params description {string} 应用描述
 * @params uri {string} 访问地址
 * @params logoUri {string} 图像地址
 * @params downloadLink {string} 下载地址
 * @params canAccess {boolean} 是否有权访问此应用
 * @params type {number} 客户端类型"0,  pc端业务，需要验证是否安装客户端，并提供DownloadLink下载安装包链接"1,  后台管理业务，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"2,  产品应用，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"3,  需要带上token的应用平台
 * @params index {number} 客户端索引(65535：无效值)
 * @params showConsent {boolean} 同意展示（前端使用）
 */
type UserClientOutCommonType = {
    id: string;
    name?: string;
    description?: string;
    uri: string;
    logoUri?: string;
    downloadLink?: string;
    canAccess: boolean;
    type?: number;
    index?: number;
    showConsent?: boolean;
};

/**
 * 角色
 * @params id {string} Id
 * @params name {string} 名称
 * @params description {string} 描述
 */
type RoleOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 符合条件的总记录数
 * @params items {RoleOutCommonType[]} 数据项
 */
type RoleOutPagedResponseCommonType = {
    totalCount?: number;
    items?: RoleOutCommonType[];
};

/**
 * 角色
 * @params name {string} 名称
 * @params description {string} 描述
 */
type RoleInCommonType = {
    name: string;
    description?: string;
};

----

/**
 * Token交换——请求参数类型定义
 * @headers clientId {string} clientId （必填）
 * @headers clientSecret {string}  （必填）
 * @headers externalToken {string}  （必填）
 * @headers credentials {string}
 * @headers grantType {string}
 */
export type AuthenticationsReqType = {
    clientId: string;
    clientSecret: string;
    externalToken: string;
    credentials?: string;
    grantType?: string;
};

/**
 * Token交换——响应参数类型定义
 * @params accessToken {string} access_token
 * @params expiresIn {string} expires_in
 * @params refreshToken {string} refresh_token
 * @params scope {string} scope
 */
export type AuthenticationsResType = {
    accessToken: string;
    expiresIn: string;
    refreshToken: string;
    scope: string;
};

/**
 * 获取所有业务客户端配置信息——响应参数类型定义
 * @params id {string} 应用Id
 * @params name {string} 应用名称
 * @params description {string} 应用描述
 * @params uri {string} 访问地址
 * @params logoUri {string} 图像地址
 * @params downloadLink {string} 下载地址
 * @params allowedScopes {any[]} Scopes
 * @params allowedGrantTypes {any[]} 支持的授权类型
 * @params accessTokenLifetimeHours {number} AccessToken 有效时长
 * @params clientType {number} 客户端类型"0,  pc端业务，需要验证是否安装客户端，并提供DownloadLink下载安装包链接"1,  后台管理业务，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"2,  产品应用，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"3,  需要带上token的应用平台
 * @params clientIndex {number} 客户端索引(65535：无效值)
 * @params showConsent {boolean} 同意展示（前端使用）
 * @params port {number} 端口
 */
export type IdsGetClientsResType = {
    id: string;
    name: string;
    description: string;
    uri: string;
    logoUri: string;
    downloadLink: string;
    allowedScopes: any[];
    allowedGrantTypes: any[];
    accessTokenLifetimeHours: number;
    clientType: number;
    clientIndex: number;
    showConsent: boolean;
    port: number;
};

/**
 * 获取指定的客户端信息——请求参数类型定义
 * @params client {string}  （必填）
 */
export type GetClientInfoReqType = {
    client: string;
};

/**
 * 获取指定的客户端信息——响应参数类型定义
 * @params id {string} 应用Id
 * @params name {string} 应用名称
 * @params description {string} 应用描述
 * @params uri {string} 访问地址
 * @params logoUri {string} 图像地址
 * @params downloadLink {string} 下载地址
 * @params allowedScopes {any[]} Scopes
 * @params allowedGrantTypes {any[]} 支持的授权类型
 * @params accessTokenLifetimeHours {number} AccessToken 有效时长
 * @params clientType {number} 客户端类型"0,  pc端业务，需要验证是否安装客户端，并提供DownloadLink下载安装包链接"1,  后台管理业务，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"2,  产品应用，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"3,  需要带上token的应用平台
 * @params clientIndex {number} 客户端索引(65535：无效值)
 * @params showConsent {boolean} 同意展示（前端使用）
 * @params port {number} 端口
 */
export type GetClientInfoResType = {
    id: string;
    name: string;
    description: string;
    uri: string;
    logoUri: string;
    downloadLink: string;
    allowedScopes: any[];
    allowedGrantTypes: any[];
    accessTokenLifetimeHours: number;
    clientType: number;
    clientIndex: number;
    showConsent: boolean;
    port: number;
};

/**
 * 新增客户端——请求参数类型定义
 * @params id {string} 客户端Key
 * @params clientName {string} 客户端名称 （必填）
 * @params description {string} 描述
 * @params port {number} 客户端端口
 * @params logoUri {string} LogUri例子："/images/erds.png"
 * @params downloadLink {string} 下载链接地址
 * @params host {string} 主机名
 * @params schema {string} 客户端协议头有特殊要求则指定，否则输入空，则以 GlobalConfig.UseHttps ? "https" : "http";
 * @params requireConsent {boolean} 允许同意返回当前客户端(权限判断)默认是 true，false(不做权限判断)
 * @params clientSecrets {any[]} 客户端密钥
 * @params path {string} 客户端Uri路径
 * @params allowedGrantTypes {any[]} 允许的授权类型
 * @params accessTokenLifetimeHours {number} access token存活时间0表示2分钟，其他则为小时
 * @params redirectUris {any[]} 重定向URI以‘;’进行分隔存储
 * @params postLogoutRedirectUris {any[]} 登出后跳转的路径时以‘;’进行分隔存储，若无指定使用默认的
 * @params clientType {number} 客户端类型"0,  pc端业务，需要验证是否安装客户端，并提供DownloadLink下载安装包链接"1,  后台管理业务，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"2,  产品应用，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"3,  需要带上token的应用平台
 * @params index {number} 应用索引（前端使用）
 * @params showConsent {boolean} 同意展示（前端使用）
 * @params isUseGatewayAddress {boolean} 是否使用网关地址
 * @params allowOfflineAccess {boolean} 默认允许静默刷新token
 */
export type IdsAddClientReqType = {
    id?: string;
    clientName: string;
    description?: string;
    port?: number;
    logoUri?: string;
    downloadLink?: string;
    host?: string;
    schema?: string;
    requireConsent?: boolean;
    clientSecrets?: any[];
    path?: string;
    allowedGrantTypes?: any[];
    accessTokenLifetimeHours?: number;
    redirectUris?: any[];
    postLogoutRedirectUris?: any[];
    clientType?: number;
    index?: number;
    showConsent?: boolean;
    isUseGatewayAddress?: boolean;
    allowOfflineAccess?: boolean;
};

/**
 * 新增客户端——响应参数类型定义
 * @params id {string} 客户端Key
 * @params clientName {string} 客户端名称
 * @params description {string} 描述
 * @params port {number} 客户端端口若为0，则表示未指定
 * @params logoUri {string} LogUri例子："/images/erds.png"
 * @params downloadLink {string} 下载链接地址
 * @params host {string} 主机名
 * @params schema {string} 客户端协议头若为空，则以 GlobalConfig.UseHttps ? "https" : "http";
 * @params requireConsent {boolean} 允许同意返回当前客户端(权限判断)默认是 true，false(不做权限判断)
 * @params clientSecrets {any[]} 客户端密钥
 * @params path {string} 客户端Uri路径
 * @params allowedGrantTypes {any[]} 允许的授权类型
 * @params accessTokenLifetimeHours {number} access token存活时间0表示2分钟，其他则为小时
 * @params redirectUris {any[]} 重定向URI以‘;’进行分隔存储
 * @params postLogoutRedirectUris {any[]} 登出后跳转的路径时以‘;’进行分隔存储，若无指定使用默认的
 * @params clientType {number} 客户端类型"0,  pc端业务，需要验证是否安装客户端，并提供DownloadLink下载安装包链接"1,  后台管理业务，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"2,  产品应用，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"3,  需要带上token的应用平台
 * @params index {number} 应用索引（前端使用）
 * @params showConsent {boolean} 同意展示（前端使用）
 * @params isUseGatewayAddress {boolean} 是否使用网关地址
 * @params allowOfflineAccess {boolean} 默认允许静默刷新token
 */
export type IdsAddClientResType = {
    id: string;
    clientName: string;
    description: string;
    port: number;
    logoUri: string;
    downloadLink: string;
    host: string;
    schema: string;
    requireConsent: boolean;
    clientSecrets: any[];
    path: string;
    allowedGrantTypes: any[];
    accessTokenLifetimeHours: number;
    redirectUris: any[];
    postLogoutRedirectUris: any[];
    clientType: number;
    index: number;
    showConsent: boolean;
    isUseGatewayAddress: boolean;
    allowOfflineAccess: boolean;
};

/**
 * 获取客户端详情列表——请求参数类型定义
 * @params pageSize {number} 页大小, 默认：200
 * @params pageIndex {number} 页下标 默认：1
 */
export type GetClientConfigReqType = {
    pageSize?: number;
    pageIndex?: number;
};

/**
 * 获取客户端详情列表——响应参数类型定义
 * @params totalCount {number} 符合条件的总记录数
 * @params items {ConfigClientOutCommonType[]} 数据项
 */
export type GetClientConfigResType = {
    totalCount: number;
    items: ConfigClientOutCommonType[];
};

/**
 * 更新客户端详情——请求参数类型定义
 * @params clientId {string} clientId （必填）
 * @params clientName {string} 客户端名称 （必填）
 * @params description {string} 描述
 * @params port {number} 客户端端口
 * @params logoUri {string} LogUri例子："/images/erds.png"
 * @params downloadLink {string} 下载链接地址
 * @params host {string} 主机名
 * @params schema {string} 客户端协议头有特殊要求则指定，否则输入空，则以 GlobalConfig.UseHttps ? "https" : "http";
 * @params requireConsent {boolean} 允许同意返回当前客户端(权限判断)默认是 true，false(不做权限判断)
 * @params clientSecrets {any[]} 客户端密钥
 * @params path {string} 客户端Uri路径
 * @params allowedGrantTypes {any[]} 允许的授权类型
 * @params accessTokenLifetimeHours {number} access token存活时间0表示2分钟，其他则为小时
 * @params redirectUris {any[]} 重定向URI以‘;’进行分隔存储
 * @params postLogoutRedirectUris {any[]} 登出后跳转的路径时以‘;’进行分隔存储，若无指定使用默认的
 * @params clientType {number} 客户端类型"0,  pc端业务，需要验证是否安装客户端，并提供DownloadLink下载安装包链接"1,  后台管理业务，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"2,  产品应用，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"3,  需要带上token的应用平台
 * @params index {number} 应用索引（前端使用）
 * @params showConsent {boolean} 同意展示（前端使用）
 * @params isUseGatewayAddress {boolean} 是否使用网关地址
 * @params allowOfflineAccess {boolean} 默认允许静默刷新token
 */
export type EditClientConfigReqType = {
    clientId: string;
    clientName: string;
    description?: string;
    port?: number;
    logoUri?: string;
    downloadLink?: string;
    host?: string;
    schema?: string;
    requireConsent?: boolean;
    clientSecrets?: any[];
    path?: string;
    allowedGrantTypes?: any[];
    accessTokenLifetimeHours?: number;
    redirectUris?: any[];
    postLogoutRedirectUris?: any[];
    clientType?: number;
    index?: number;
    showConsent?: boolean;
    isUseGatewayAddress?: boolean;
    allowOfflineAccess?: boolean;
};

/**
 * 删除客户端——请求参数类型定义
 * @params clientId {string} clientId （必填）
 */
export type DeleteClientConfigReqType = {
    clientId: string;
};

/**
 * 获取指定客户端的详情——请求参数类型定义
 * @params clientId {string} clientId （必填）
 */
export type GetClientConfigByIdReqType = {
    clientId: string;
};

/**
 * 获取指定客户端的详情——响应参数类型定义
 * @params id {string} 客户端Key
 * @params clientName {string} 客户端名称
 * @params description {string} 描述
 * @params port {number} 客户端端口若为0，则表示未指定
 * @params logoUri {string} LogUri例子："/images/erds.png"
 * @params downloadLink {string} 下载链接地址
 * @params host {string} 主机名
 * @params schema {string} 客户端协议头若为空，则以 GlobalConfig.UseHttps ? "https" : "http";
 * @params requireConsent {boolean} 允许同意返回当前客户端(权限判断)默认是 true，false(不做权限判断)
 * @params clientSecrets {any[]} 客户端密钥
 * @params path {string} 客户端Uri路径
 * @params allowedGrantTypes {any[]} 允许的授权类型
 * @params accessTokenLifetimeHours {number} access token存活时间0表示2分钟，其他则为小时
 * @params redirectUris {any[]} 重定向URI以‘;’进行分隔存储
 * @params postLogoutRedirectUris {any[]} 登出后跳转的路径时以‘;’进行分隔存储，若无指定使用默认的
 * @params clientType {number} 客户端类型"0,  pc端业务，需要验证是否安装客户端，并提供DownloadLink下载安装包链接"1,  后台管理业务，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"2,  产品应用，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"3,  需要带上token的应用平台
 * @params index {number} 应用索引（前端使用）
 * @params showConsent {boolean} 同意展示（前端使用）
 * @params isUseGatewayAddress {boolean} 是否使用网关地址
 * @params allowOfflineAccess {boolean} 默认允许静默刷新token
 */
export type GetClientConfigByIdResType = {
    id: string;
    clientName: string;
    description: string;
    port: number;
    logoUri: string;
    downloadLink: string;
    host: string;
    schema: string;
    requireConsent: boolean;
    clientSecrets: any[];
    path: string;
    allowedGrantTypes: any[];
    accessTokenLifetimeHours: number;
    redirectUris: any[];
    postLogoutRedirectUris: any[];
    clientType: number;
    index: number;
    showConsent: boolean;
    isUseGatewayAddress: boolean;
    allowOfflineAccess: boolean;
};

/**
 * 获取同步Clients数据进度——请求参数类型定义
 * @params sessionId {string} sessionId （必填）
 */
export type IdsGetProgressBySessionIdReqType = {
    sessionId: string;
};

/**
 * 获取同步Clients数据进度——响应参数类型定义
 * @params sessionId {string} 会话Id
 * @params syncState {SyncStateCommonType} 同步状态
 * @params totalCount {number} 总数量
 * @params syncCount {number} 已经同步数量
 */
export type IdsGetProgressBySessionIdResType = {
    sessionId: string;
    syncState: SyncStateCommonType;
    totalCount: number;
    syncCount: number;
};

/**
 * 获取指定权限数据的角色列表——请求参数类型定义
 * @params data {string} 权限数据 （必填）
 * @params type {number} 数据类型 0：组织架构数据，1：预案组数据，2:视频监控数据，3：行政区域数据，4：功能模块
 * @params pageSize {number} 页大小, 默认：200
 * @params pageIndex {number} 页下标 默认：1
 */
export type GetRolesByPermissionReqType = {
    data: string;
    type?: number;
    pageSize?: number;
    pageIndex?: number;
};

/**
 * 获取指定权限数据的角色列表——响应参数类型定义
 * @params totalCount {number} 符合条件的总记录数
 * @params items {any[]} 数据项
 */
export type GetRolesByPermissionResType = {
    totalCount: number;
    items: any[];
};

/**
 * 获取指定路径的数据权限——请求参数类型定义
 * @params type {number} 数据类型 0：组织架构数据，1：预案组数据，2:视频监控数据，3：行政区域数据，4：功能模块
 * @params dataPath {string} 数据树路径，格式：一级节点ID,二级节点ID
 */
export type GetPermissionDataByPathReqType = {
    type?: number;
    dataPath?: string;
};

/**
 * 获取指定路径的数据权限——响应参数类型定义
 * @params hasAllDataPermission {boolean} 是否有数据全权限
 * @params dataPermissionsOut {DataPermissionOutCommonType[]} 数据权限集合输出
 */
export type GetPermissionDataByPathResType = {
    hasAllDataPermission: boolean;
    dataPermissionsOut: DataPermissionOutCommonType[];
};

/**
 * 获取当前用户绑定角色下的数据权限——请求参数类型定义
 * @params type {number}
 * @params pageSize {number} 页大小, 默认：200
 * @params pageIndex {number} 页下标 默认：1
 */
export type GetPermissionDataReqType = {
    type?: number;
    pageSize?: number;
    pageIndex?: number;
};

/**
 * 获取当前用户绑定角色下的数据权限——响应参数类型定义
 * @params hasAllDataPermission {boolean} 是否有数据全权限
 * @params totalCount {number} 符合条件的总记录数
 * @params items {DataPermissionOutCommonType[]} 数据项
 */
export type GetPermissionDataResType = {
    hasAllDataPermission: boolean;
    totalCount: number;
    items: DataPermissionOutCommonType[];
};

/**
 * 获取指定角色Id权限数据列表——请求参数类型定义
 * @params role {string} 角色Id （必填）
 * @params type {number} 数据类型 0：组织架构数据，1：预案组数据，2:视频监控数据，3：行政区域数据，4：功能模块
 * @params pageSize {number} 页大小, 默认：200
 * @params pageIndex {number} 页下标 默认：1
 */
export type GetPermissionDataByRoleReqType = {
    role: string;
    type?: number;
    pageSize?: number;
    pageIndex?: number;
};

/**
 * 获取指定角色Id权限数据列表——响应参数类型定义
 * @params hasAllDataPermission {boolean} 是否有数据全权限
 * @params totalCount {number} 符合条件的总记录数
 * @params items {DataPermissionOutCommonType[]} 数据项
 */
export type GetPermissionDataByRoleResType = {
    hasAllDataPermission: boolean;
    totalCount: number;
    items: DataPermissionOutCommonType[];
};

/**
 * 绑定数据到指定角色——请求参数类型定义
 * @params role {string} 角色Id （必填）
 * @params data {string} 权限数据 （必填）
 * @params type {number} 数据类型0：组织架构数据，1：预置组数据，2:视频监控数据，3：行政区域数据,4：数据权限
 */
export type AddPermissionDataToRoleReqType = {
    role: string;
    data: string;
    type?: number;
};

/**
 * 移除指定数据权限关系——请求参数类型定义
 * @params role {string} 角色Id （必填）
 * @params type {number} 数据类型
 * @params data {string} 权限数据 （必填）
 */
export type DeletePermissionDataRoleReqType = {
    role: string;
    type?: number;
    data: string;
};

/**
 * 移除全数据权限关系——请求参数类型定义
 * @params role {string} 角色Id （必填）
 * @params type {number} 数据类型 （必填）
 */
export type DeleteAllPermissionDataReqType = {
    role: string;
    type: number;
};

/**
 * 批量绑定数据到指定角色——请求参数类型定义
 * @params role {string} 角色Id （必填）
 * @params type {number} 数据类型0：组织架构数据，1：预置组数据，2:视频监控数据，3：行政区域数据,4:功能模块数据
 * @params hasAllDataPermission {boolean} 是否有数据全权限 （必填）
 * @params dataPermissionIns {DataPermissionInCommonType[]} 数据权限集合 （必填）
 */
export type BatchAddPermissionDataToRoleReqType = {
    role: string;
    type?: number;
    hasAllDataPermission: boolean;
    dataPermissionIns: DataPermissionInCommonType[];
};

/**
 * 批量绑定数据到指定角色——响应参数类型定义
 * @params hasAllPermission {boolean} 是否拥有所有权限
 * @params normalResults {DataPermissionOutCommonType[]} 批量正常结果
 * @params failureResult {BatchFailureResultCommonType} 批量失败结果
 */
export type BatchAddPermissionDataToRoleResType = {
    hasAllPermission: boolean;
    normalResults: DataPermissionOutCommonType[];
    failureResult: BatchFailureResultCommonType;
};

/**
 * 批量变更绑定数据到指定角色——请求参数类型定义
 * @params role {string} 角色Id （必填）
 * @params type {number} 数据类型0：组织架构数据，1：预置组数据，2:视频监控数据，3：行政区域数据,4:功能模块数据
 * @params hasAllDataPermission {boolean} 是否有数据全权限 （必填）
 * @params dataPermissionIns {DataPermissionInCommonType[]} 数据权限集合 （必填）
 */
export type BatchUpdatePermissionDataToRoleReqType = {
    role: string;
    type?: number;
    hasAllDataPermission: boolean;
    dataPermissionIns: DataPermissionInCommonType[];
};

/**
 * 批量移除绑定数据到指定角色——请求参数类型定义
 * @params role {string}  （必填）
 * @params type {number} 数据类型0：组织架构数据，2:视频监控数据，3：行政区域数据
 * @params dataIds {any[]} 数据权限集合 （必填）
 */
export type DeletePermissionDatasReqType = {
    role: string;
    type?: number;
    dataIds: any[];
};

/**
 * 获取指定用户绑定角色下的数据权限——请求参数类型定义
 * @params user {string} 用户Id （必填）
 * @params type {number} 数据类型 0：组织架构数据，1：预案组数据，2:视频监控数据，3：行政区域数据，4：功能模块
 * @params pageSize {number} 页大小, 默认：200
 * @params pageIndex {number} 页下标 默认：1
 */
export type GetPermissionDataByUserReqType = {
    user: string;
    type?: number;
    pageSize?: number;
    pageIndex?: number;
};

/**
 * 获取指定用户绑定角色下的数据权限——响应参数类型定义
 * @params hasAllDataPermission {boolean} 是否有数据全权限
 * @params totalCount {number} 符合条件的总记录数
 * @params items {DataPermissionOutCommonType[]} 数据项
 */
export type GetPermissionDataByUserResType = {
    hasAllDataPermission: boolean;
    totalCount: number;
    items: DataPermissionOutCommonType[];
};

/**
 * 移除指定功能权限类型的数据权限关系——请求参数类型定义
 * @params role {string} 角色Id （必填）
 * @params data {string} 权限数据 （必填）
 */
export type UnbindPermissionDataReqType = {
    role: string;
    data: string;
};

/**
 * 绑定指定功能权限类型的数据权限关系——请求参数类型定义
 * @params role {string} 角色Id （必填）
 */
export type BindPermissionDataReqType = {
    role: string;
};

/**
 * 新增移除全部功能权限类型的数据权限关系——请求参数类型定义
 * @params role {string} 角色Id （必填）
 */
export type UnbindAllPermissionDataReqType = {
    role: string;
};

/**
 * 查询根功能模块——请求参数类型定义
 * @params pageSize {number} 页大小, 默认：200
 * @params pageIndex {number} 页下标 默认：1
 */
export type GetRootFunctionsReqType = {
    pageSize?: number;
    pageIndex?: number;
};

/**
 * 查询根功能模块——响应参数类型定义
 * @params totalCount {number} 符合条件的总记录数
 * @params items {FunctionModuleOutCommonType[]} 数据项
 */
export type GetRootFunctionsResType = {
    totalCount: number;
    items: FunctionModuleOutCommonType[];
};

/**
 * 获取功能模块详情列表——请求参数类型定义
 * @params pageSize {number} 页大小, 默认：200
 * @params pageIndex {number} 页下标 默认：1
 */
export type GetFunctionsReqType = {
    pageSize?: number;
    pageIndex?: number;
};

/**
 * 获取功能模块详情列表——响应参数类型定义
 * @params totalCount {number} 符合条件的总记录数
 * @params items {FunctionModuleOutCommonType[]} 数据项
 */
export type GetFunctionsResType = {
    totalCount: number;
    items: FunctionModuleOutCommonType[];
};

/**
 * 新增一个功能项——请求参数类型定义
 * @params pid {string} pid
 * @params name {string} 名称 （必填）
 */
export type AddFunctionsReqType = {
    pid?: string;
    name: string;
};

/**
 * 新增一个功能项——响应参数类型定义
 * @params id {string} 标识
 * @params parentId {string} 父节点标识
 * @params name {string} 名称
 * @params isRelationLicense {boolean} 是否关联授权License
 */
export type AddFunctionsResType = {
    id: string;
    parentId: string;
    name: string;
    isRelationLicense: boolean;
};

/**
 * 分页获取功能模块详情列表——请求参数类型定义
 * @params pid {string} pid （必填）
 * @params pageSize {number} 页大小, 默认：200
 * @params pageIndex {number} 页下标 默认：1
 */
export type GetFunctionsByPidReqType = {
    pid: string;
    pageSize?: number;
    pageIndex?: number;
};

/**
 * 分页获取功能模块详情列表——响应参数类型定义
 * @params totalCount {number} 符合条件的总记录数
 * @params items {FunctionModuleOutCommonType[]} 数据项
 */
export type GetFunctionsByPidResType = {
    totalCount: number;
    items: FunctionModuleOutCommonType[];
};

/**
 * 获取指定功能项的详情——请求参数类型定义
 * @params id {string} id （必填）
 */
export type GetFunctionsByIdReqType = {
    id: string;
};

/**
 * 获取指定功能项的详情——响应参数类型定义
 * @params id {string} 标识
 * @params parentId {string} 父节点标识
 * @params name {string} 名称
 * @params isRelationLicense {boolean} 是否关联授权License
 */
export type GetFunctionsByIdResType = {
    id: string;
    parentId: string;
    name: string;
    isRelationLicense: boolean;
};

/**
 * 更新功能项详情——请求参数类型定义
 * @params id {string} id （必填）
 * @params name {string} 名称 （必填）
 */
export type UpdateFunctionsReqType = {
    id: string;
    name: string;
};

/**
 * 更新功能项详情——响应参数类型定义
 * @params id {string} 标识
 * @params parentId {string} 父节点标识
 * @params name {string} 名称
 * @params isRelationLicense {boolean} 是否关联授权License
 */
export type UpdateFunctionsResType = {
    id: string;
    parentId: string;
    name: string;
    isRelationLicense: boolean;
};

/**
 * 删除一个功能模块——请求参数类型定义
 * @params id {string} 模块Id （必填）
 */
export type DeleteFunctionsReqType = {
    id: string;
};

/**
 * 获取string类型License业务控制参数的值——请求参数类型定义
 * @params bizControlKey {string} License业务控制Key （必填）
 */
export type GetStringLicenseReqType = {
    bizControlKey: string;
};

/**
 * 获取bool类型License业务控制参数的值——请求参数类型定义
 * @params bizControlKey {string} License业务控制Key （必填）
 */
export type GetBoolLicenseReqType = {
    bizControlKey: string;
};

/**
 * 获取int类型License业务控制参数的值——请求参数类型定义
 * @params bizControlKey {string} License业务控制Key （必填）
 */
export type GetIntLicenseReqType = {
    bizControlKey: string;
};

/**
 * 获取License授权功能模块——响应参数类型定义
 * @params id {string} 标识
 * @params parentId {string} 父节点标识
 * @params name {string} 名称
 */
export type GetFunctionsLicenseResType = {
    id: string;
    parentId: string;
    name: string;
};

/**
 * 绑定用户到指定角色——请求参数类型定义
 * @params role {string}  （必填）
 * @params userId {string} The ldap id of user
 */
export type AddUserToRoleReqType = {
    role: string;
    userId?: string;
};

/**
 * 绑定用户到指定角色——响应参数类型定义
 * @params id {string} Participation Id
 * @params user {string} The Name of Role
 */
export type AddUserToRoleResType = {
    id: string;
    user: string;
};

/**
 * 获取指定角色的用户列表——请求参数类型定义
 * @params role {string}  （必填）
 * @params pageSize {number} 页大小, 默认：200
 * @params pageIndex {number} 页下标 默认：1
 */
export type GetRoleUsersReqType = {
    role: string;
    pageSize?: number;
    pageIndex?: number;
};

/**
 * 获取指定角色的用户列表——响应参数类型定义
 * @params totalCount {number} 符合条件的总记录数
 * @params items {ParticipatorOutCommonType[]} 数据项
 */
export type GetRoleUsersResType = {
    totalCount: number;
    items: ParticipatorOutCommonType[];
};

/**
 * 绑定批量用户到指定角色——请求参数类型定义
 * @params role {string}  （必填）
 */
export type AddUsersToRoleReqType = {
    role: string;
};

/**
 * 变更角色绑定的用户，角色用户绑定以当前带过来的用户集合为主——请求参数类型定义
 * @params role {string}  （必填）
 */
export type ChangeRoleUsersReqType = {
    role: string;
};

/**
 * 批量删除指定角色的用户绑定关系——请求参数类型定义
 * @params role {string}  （必填）
 */
export type DeleteRoleUsersReqType = {
    role: string;
};

/**
 * 删除指定的绑定关系——请求参数类型定义
 * @params role {string} 角色Id （必填）
 * @params user {string} 用户Id （必填）
 */
export type DeleteRoleUserReqType = {
    role: string;
    user: string;
};

/**
 * 获取指定用户的角色列表——请求参数类型定义
 * @params user {string}  （必填）
 * @params pageSize {number} 页大小, 默认：200
 * @params pageIndex {number} 页下标 默认：1
 * @params user {string}  （必填）
 */
export type GetRolesByUserReqType = {
    user: string;
    pageSize?: number;
    pageIndex?: number;
};

/**
 * 获取指定用户的角色列表——响应参数类型定义
 * @params totalCount {number} 符合条件的总记录数
 * @params items {ParticipatingOutCommonType[]} 数据项
 */
export type GetRolesByUserResType = {
    totalCount: number;
    items: ParticipatingOutCommonType[];
};

/**
 * 获取当前用户的角色列表——请求参数类型定义
 * @params pageSize {number} 页大小, 默认：200
 * @params pageIndex {number} 页下标 默认：1
 */
export type GetUserRolesReqType = {
    pageSize?: number;
    pageIndex?: number;
};

/**
 * 获取当前用户的角色列表——响应参数类型定义
 * @params totalCount {number} 符合条件的总记录数
 * @params items {ParticipatingOutCommonType[]} 数据项
 */
export type GetUserRolesResType = {
    totalCount: number;
    items: ParticipatingOutCommonType[];
};

/**
 * 用户批量变更绑定的角色——请求参数类型定义
 * @params user {string}  （必填）
 */
export type BatchChangeRoleUsersReqType = {
    user: string;
};

/**
 * 获取指定角色的所有应用授权——请求参数类型定义
 * @params role {string} 角色Id （必填）
 */
export type GetPermissionByRoleReqType = {
    role: string;
};

/**
 * 获取指定角色的所有应用授权——响应参数类型定义
 * @params permissionId {string} 授权Id
 * @params clientId {string} 客户端Id
 */
export type GetPermissionByRoleResType = {
    permissionId: string;
    clientId: string;
};

/**
 * 为指定角色添加应用授权——请求参数类型定义
 * @params role {string} 角色Id （必填）
 * @params clientId {string} 客户端Id （必填）
 */
export type AddPermissionToRoleReqType = {
    role: string;
    clientId: string;
};

/**
 * 为指定角色添加应用授权——响应参数类型定义
 * @params permissionId {string} 授权Id
 * @params clientId {string} 客户端Id
 */
export type AddPermissionToRoleResType = {
    permissionId: string;
    clientId: string;
};

/**
 * 为指定角色批量添加应用授权——请求参数类型定义
 * @params role {string}  （必填）
 */
export type AddPermissionToRolesReqType = {
    role: string;
};

/**
 * 变更角色绑定应用权限，角色应用权限绑定以当前带过来的应用集合为主——请求参数类型定义
 * @params role {string}  （必填）
 */
export type UpdateRolePermissionsReqType = {
    role: string;
};

/**
 * 删除指定角色的某个应用授权——请求参数类型定义
 * @params role {string} 角色Id （必填）
 * @params client {string} 客户端Id （必填）
 */
export type DeleteRolePermissionReqType = {
    role: string;
    client: string;
};

/**
 * 获取指定用户的可访问应用列表——请求参数类型定义
 * @params user {string}  （必填）
 */
export type GetUserPermissionsReqType = {
    user: string;
};

/**
 * 获取当前用户的可访问应用列表——请求参数类型定义
 * @params availableOnly {boolean} 是否仅获取被允许访问的应用列表 默认：true
 */
export type GetPermissionsReqType = {
    availableOnly?: boolean;
};

/**
 * 获取当前用户的可访问应用列表——响应参数类型定义
 * @params id {string} 应用Id
 * @params name {string} 应用名称
 * @params description {string} 应用描述
 * @params uri {string} 访问地址
 * @params logoUri {string} 图像地址
 * @params downloadLink {string} 下载地址
 * @params canAccess {boolean} 是否有权访问此应用
 * @params type {number} 客户端类型"0,  pc端业务，需要验证是否安装客户端，并提供DownloadLink下载安装包链接"1,  后台管理业务，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"2,  产品应用，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"3,  需要带上token的应用平台
 * @params index {number} 客户端索引(65535：无效值)
 * @params showConsent {boolean} 同意展示（前端使用）
 */
export type GetPermissionsResType = {
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
 * 获取系统中定义的角色详情列表——请求参数类型定义
 * @params pageSize {number} 页大小, 默认：200
 * @params pageIndex {number} 页下标 默认：1
 */
export type GetRolesReqType = {
    pageSize?: number;
    pageIndex?: number;
};

/**
 * 获取系统中定义的角色详情列表——响应参数类型定义
 * @params totalCount {number} 符合条件的总记录数
 * @params items {RoleOutCommonType[]} 数据项
 */
export type GetRolesResType = {
    totalCount: number;
    items: RoleOutCommonType[];
};

/**
 * 新增一个角色项——请求参数类型定义
 * @params name {string} 名称 （必填）
 * @params description {string} 描述
 */
export type AddRolesReqType = {
    name: string;
    description?: string;
};

/**
 * 新增一个角色项——响应参数类型定义
 * @params id {string} Id
 * @params name {string} 名称
 * @params description {string} 描述
 */
export type AddRolesResType = {
    id: string;
    name: string;
    description: string;
};

/**
 * 获取指定角色的详情——请求参数类型定义
 * @params id {string} id （必填）
 */
export type AddRolesByIdReqType = {
    id: string;
};

/**
 * 获取指定角色的详情——响应参数类型定义
 * @params id {string} Id
 * @params name {string} 名称
 * @params description {string} 描述
 */
export type AddRolesByIdResType = {
    id: string;
    name: string;
    description: string;
};

/**
 * 更新角色详情——请求参数类型定义
 * @params id {string} id （必填）
 * @params name {string} 名称 （必填）
 * @params description {string} 描述
 */
export type UpdateRolesReqType = {
    id: string;
    name: string;
    description?: string;
};

/**
 * 更新角色详情——响应参数类型定义
 * @params id {string} Id
 * @params name {string} 名称
 * @params description {string} 描述
 */
export type UpdateRolesResType = {
    id: string;
    name: string;
    description: string;
};

/**
 * 删除系统中一个角色——请求参数类型定义
 * @params id {string} 角色Id （必填）
 */
export type DeleteRolesReqType = {
    id: string;
};
