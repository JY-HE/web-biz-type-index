
/**
 * undefined
*/
type EntityOperationCommonType =  0 | 1 | 2 ;


/**
 * 拍传实体回调基类
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 * @params bizName {string} 
 * @params resourceId {string} ResourceId
*/
type MultimediaTransferCallbackCommonType = {
      id?: string;
      name?: string;
      operation?: EntityOperationCommonType;
      bizName?: string;
      resourceId?: string;
}


/**
 * 分级调度抽象对象
 * @params version {string} 请求版本
 * @params id {string} Id
 * @params bizName {string} 业务名称
 * @params bizData {undefined} 业务数据
 * @params sourceId {string} 源平台 Id
 * @params destinationId {string} 目标平台 Id
 * @params type {number} 业务类型：1-Erds|2-Vfs|3-Rms
 * @params timeout {number} 请求超时设置(单位：秒)
*/
type GradingDispatchInCommonType = {
      version: string;
      id: string;
      bizName: string;
      bizData: undefined;
      sourceId: string;
      destinationId: string;
      type: number;
      timeout: number;
}


/**
 * 拍传数据
 * @params id {string} 拍传ID
 * @params name {string} 拍传名称
 * @params templateId {string} 拍传模板Id
 * @params templateName {string} 拍传模板名称
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params address {string} 地址
 * @params fileGroupId {string} 文件组Id
 * @params fileCount {number} 文件数量
 * @params userId {string} 拍传用户id
 * @params userName {string} 用户名称
 * @params organizationId {string} 组织机构Id
 * @params organizationName {string} 组织机构名称
 * @params uploadTime {string} 上传时间
 * @params company {string} 单位名称
 * @params companyAddress {string} 单位地址
 * @params resourceId {string} 资源ID
 * @params platformId {string} 平台Id
 * @params areaCode {string} 行政区域码
 * @params districtName {string} 行政区域名
*/
type MultimediaTransferOutCommonType = {
      id?: string;
      name?: string;
      templateId?: string;
      templateName?: string;
      longitude?: number;
      latitude?: number;
      address?: string;
      fileGroupId?: string;
      fileCount?: number;
      userId?: string;
      userName?: string;
      organizationId?: string;
      organizationName?: string;
      uploadTime?: string;
      company?: string;
      companyAddress?: string;
      resourceId?: string;
      platformId?: string;
      areaCode?: string;
      districtName?: string;
}


/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {MultimediaTransferOutCommonType[]} 记录
*/
type MultimediaTransferOutPageableQueryResultCommonType = {
      totalCount?: number;
      records?: MultimediaTransferOutCommonType[];
}


/**
 * 拍传
 * @params name {string} 拍传名称
 * @params templateId {string} 拍传模板Id
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params address {string} 地址
 * @params fileGroupId {string} 文件组Id
 * @params uploadTime {string} 文件上传时间
 * @params fileCount {number} 文件数量
 * @params company {string} 单位名称
 * @params companyAddress {string} 单位地址
*/
type MultimediaTransferInCommonType = {
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
}


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
}


/**
 * 分权分域查询
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量，最小为1
 * @params beginTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params templateId {string} 模板Id
 * @params keyWord {string} 关键字模糊查询
 * @params organizationId {string} 组织机构Id
 * @params userId {string} 用户Id
 * @params resourceId {string} 资源ID
 * @params platformId {string} 平台 ID
 * @params organizationIds {any[]} 组织机构Id集合
 * @params prefixAreaCodes {any[]} 行政区域码前缀
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域
*/
type MultimediaTransferRequestCommonType = {
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
      organizationIds?: any[];
      prefixAreaCodes?: any[];
      isMatchNullAreaCode?: boolean;
}


/**
 * 文件类型
            <remarks>0:未知|Unknown 1:图片文件|Picture 2:视频文件|Video 3:音频文件|Audio 4:文本文件|Text</remarks>
*/
type FileEntityTypeCommonType =  0 | 1 | 2 | 3 | 4 ;


/**
 * 目录实体
 * @params id {string} 目录ID
 * @params name {string} 目录名称
 * @params parentId {string} 父目录Id
 * @params isPublic {boolean} 是否为公共目录
 * @params createTime {string} 
 * @params updateTime {string} 
*/
type DirectoryEntityOutCommonType = {
      id?: string;
      name?: string;
      parentId?: string;
      isPublic?: boolean;
      createTime?: string;
      updateTime?: string;
}


/**
 * 储存类型
            <remarks>0:公共|Public 1:私有|Private 2:组|Group</remarks>
*/
type StorageKindCommonType =  0 | 1 | 2 ;


/**
 * 文件实体
 * @params id {string} 文件ID
 * @params name {string} 文件名
 * @params fileId {string} 文件Id
 * @params path {string} 路径
 * @params fullPath {string} 访问全路径            
 * @params thumbnailPath {string} 缩略图路径
 * @params convertedFiles {any} 文件路径字典
 * @params length {number} 文件大小(单位bytes)
 * @params fileType {FileEntityTypeCommonType} 文件类型
 * @params contentType {string} 内容类型
 * @params directoryInfo {DirectoryEntityOutCommonType} 目录信息
 * @params storageKind {StorageKindCommonType} 储存类型
 * @params isOldSsFile {boolean} 是否为旧版ss文件
 * @params userId {string} 上传用户Id
 * @params userName {string} 上传用户名称
 * @params uploadTime {string} 上传时间
 * @params createTime {string} 
 * @params updateTime {string} 
 * @params expireTime {string} 超期时间
 * @params isExpired {boolean} 是否已过期
*/
type FileEntityOutCommonType = {
      id?: string;
      name?: string;
      fileId?: string;
      path?: string;
      fullPath?: string;
      thumbnailPath?: string;
      convertedFiles?: any;
      length?: number;
      fileType?: FileEntityTypeCommonType;
      contentType?: string;
      directoryInfo?: DirectoryEntityOutCommonType;
      storageKind?: StorageKindCommonType;
      isOldSsFile?: boolean;
      userId?: string;
      userName?: string;
      uploadTime?: string;
      createTime?: string;
      updateTime?: string;
      expireTime?: string;
      isExpired?: boolean;
}


/**
 * 拍传数据
 * @params id {string} 拍传ID
 * @params name {string} 拍传名称
 * @params templateId {string} 拍传模板Id
 * @params templateName {string} 拍传模板名称
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params address {string} 地址
 * @params fileGroupId {string} 文件组Id
 * @params fileCount {number} 文件数量
 * @params userId {string} 拍传用户id
 * @params userName {string} 用户名称
 * @params organizationId {string} 组织机构Id
 * @params organizationName {string} 组织机构名称
 * @params uploadTime {string} 上传时间
 * @params company {string} 单位名称
 * @params companyAddress {string} 单位地址
 * @params resourceId {string} 资源ID
 * @params platformId {string} 平台Id
 * @params areaCode {string} 行政区域码
 * @params districtName {string} 行政区域名
 * @params fileRecords {FileEntityOutCommonType[]} 文件记录
*/
type MultimediaTransferDetailOutCommonType = {
      id?: string;
      name?: string;
      templateId?: string;
      templateName?: string;
      longitude?: number;
      latitude?: number;
      address?: string;
      fileGroupId?: string;
      fileCount?: number;
      userId?: string;
      userName?: string;
      organizationId?: string;
      organizationName?: string;
      uploadTime?: string;
      company?: string;
      companyAddress?: string;
      resourceId?: string;
      platformId?: string;
      areaCode?: string;
      districtName?: string;
      fileRecords?: FileEntityOutCommonType[];
}


/**
 * 数据补全入参
 * @params beginTime {string} 开始时间
 * @params endTime {string} 结束时间
*/
type DataCompletionInCommonType = {
      beginTime?: string;
      endTime?: string;
}


/**
 * 文件类型
<remarks>0:Image|1:Video|2:Voice|3:Text</remarks>
*/
type DataTypeCommonType =  0 | 1 | 2 | 3 ;


/**
 * 占位符
 * @params dataType {DataTypeCommonType} 类型
 * @params description {string} 描述
*/
type PlaceHolderCommonType = {
      dataType?: DataTypeCommonType;
      description?: string;
}


/**
 * 拍传模板数据
 * @params id {string} 拍传模板ID
 * @params name {string} 拍传模板名称
 * @params description {string} 描述
 * @params title {string} 标题
 * @params placeHolders {PlaceHolderCommonType[]} 模板占位符
 * @params resourceId {string} 资源ID
 * @params platformId {string} 平台Id
*/
type TemplateOutCommonType = {
      id?: string;
      name?: string;
      description?: string;
      title?: string;
      placeHolders?: PlaceHolderCommonType[];
      resourceId?: string;
      platformId?: string;
}


/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {TemplateOutCommonType[]} 记录
*/
type TemplateOutPageableQueryResultCommonType = {
      totalCount?: number;
      records?: TemplateOutCommonType[];
}


/**
 * 拍传模板
 * @params name {string} 拍传模板名称
 * @params description {string} 描述
 * @params title {string} 标题
 * @params placeHolders {PlaceHolderCommonType[]} 模板占位符
*/
type TemplateInCommonType = {
      name: string;
      description?: string;
      title: string;
      placeHolders?: PlaceHolderCommonType[];
}


----

/**
 * 分级调度操作——请求参数类型定义
 * @headers X-version {string}  
 * @params version {string} 请求版本 （必填）
 * @params id {string} Id （必填）
 * @params bizName {string} 业务名称 （必填）
 * @params bizData {undefined} 业务数据 （必填）
 * @params sourceId {string} 源平台 Id （必填）
 * @params destinationId {string} 目标平台 Id （必填）
 * @params type {number} 业务类型：1-Erds|2-Vfs|3-Rms （必填）
 * @params timeout {number} 请求超时设置(单位：秒) （必填）
*/
export type GradingDispatchReqType = {
      X-version?: string;
      version: string;
      id: string;
      bizName: string;
      bizData: undefined;
      sourceId: string;
      destinationId: string;
      type: number;
      timeout: number;
}


/**
 * 查询拍传——请求参数类型定义
 * @params BeginTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params TemplateId {string} 模板Id 
 * @params KeyWord {string} 关键字模糊查询 
 * @params OrganizationId {string} 组织机构Id 
 * @params UserId {string} 用户Id 
 * @params ResourceId {string} 资源ID 
 * @params PlatformId {string} 平台 ID 
 * @params page {number} 页码, 从1开始 默认：1 
 * @params per_page {number} 页容量，最小为1 默认：100 
 * @headers X-version {string}  
*/
export type GetMultimediaTransfersReqType = {
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
      X-version?: string;
}


/**
 * 查询拍传——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {MultimediaTransferOutCommonType[]} 记录
*/
export type GetMultimediaTransfersResType = {
      totalCount: number;
      records: MultimediaTransferOutCommonType[];
}


/**
 * 创建拍传——请求参数类型定义
 * @headers X-version {string}  
 * @params name {string} 拍传名称 （必填）
 * @params templateId {string} 拍传模板Id 
 * @params longitude {number} 经度 （必填）
 * @params latitude {number} 纬度 （必填）
 * @params address {string} 地址 
 * @params fileGroupId {string} 文件组Id （必填）
 * @params uploadTime {string} 文件上传时间 （必填）
 * @params fileCount {number} 文件数量 （必填）
 * @params company {string} 单位名称 
 * @params companyAddress {string} 单位地址 
*/
export type AddMultimediaTransfersReqType = {
      X-version?: string;
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
}


/**
 * 创建拍传——响应参数类型定义
 * @params id {string} 拍传ID
 * @params name {string} 拍传名称
 * @params templateId {string} 拍传模板Id
 * @params templateName {string} 拍传模板名称
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params address {string} 地址
 * @params fileGroupId {string} 文件组Id
 * @params fileCount {number} 文件数量
 * @params userId {string} 拍传用户id
 * @params userName {string} 用户名称
 * @params organizationId {string} 组织机构Id
 * @params organizationName {string} 组织机构名称
 * @params uploadTime {string} 上传时间
 * @params company {string} 单位名称
 * @params companyAddress {string} 单位地址
 * @params resourceId {string} 资源ID
 * @params platformId {string} 平台Id
 * @params areaCode {string} 行政区域码
 * @params districtName {string} 行政区域名
*/
export type AddMultimediaTransfersResType = {
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
}


/**
 * 查询拍传——请求参数类型定义
 * @headers X-version {string}  
 * @params pageIndex {number} 页码, 从1开始 
 * @params pageSize {number} 页容量，最小为1 
 * @params beginTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params templateId {string} 模板Id 
 * @params keyWord {string} 关键字模糊查询 
 * @params organizationId {string} 组织机构Id 
 * @params userId {string} 用户Id 
 * @params resourceId {string} 资源ID 
 * @params platformId {string} 平台 ID 
 * @params organizationIds {any[]} 组织机构Id集合 
 * @params prefixAreaCodes {any[]} 行政区域码前缀 
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域 
*/
export type SearchMultimediaTransfersReqType = {
      X-version?: string;
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
      organizationIds?: any[];
      prefixAreaCodes?: any[];
      isMatchNullAreaCode?: boolean;
}


/**
 * 查询拍传——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {MultimediaTransferOutCommonType[]} 记录
*/
export type SearchMultimediaTransfersResType = {
      totalCount: number;
      records: MultimediaTransferOutCommonType[];
}


/**
 * 通过拍传ID获取拍传——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} platformId 
 * @headers X-version {string}  
*/
export type GetMultimediaTransfersByIdReqType = {
      id: string;
      platformId?: string;
      X-version?: string;
}


/**
 * 通过拍传ID获取拍传——响应参数类型定义
 * @params id {string} 拍传ID
 * @params name {string} 拍传名称
 * @params templateId {string} 拍传模板Id
 * @params templateName {string} 拍传模板名称
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params address {string} 地址
 * @params fileGroupId {string} 文件组Id
 * @params fileCount {number} 文件数量
 * @params userId {string} 拍传用户id
 * @params userName {string} 用户名称
 * @params organizationId {string} 组织机构Id
 * @params organizationName {string} 组织机构名称
 * @params uploadTime {string} 上传时间
 * @params company {string} 单位名称
 * @params companyAddress {string} 单位地址
 * @params resourceId {string} 资源ID
 * @params platformId {string} 平台Id
 * @params areaCode {string} 行政区域码
 * @params districtName {string} 行政区域名
 * @params fileRecords {FileEntityOutCommonType[]} 文件记录
*/
export type GetMultimediaTransfersByIdResType = {
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
      fileRecords: FileEntityOutCommonType[];
}


/**
 * 删除拍传——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}  
*/
export type DeleteMultimediaTransfersReqType = {
      id: string;
      X-version?: string;
}


/**
 * 拍传数据补全——请求参数类型定义
 * @headers X-version {string}  
 * @params beginTime {string} 开始时间 
 * @params endTime {string} 结束时间 
*/
export type CompleteMultimediaTransfersReqType = {
      X-version?: string;
      beginTime?: string;
      endTime?: string;
}


/**
 * 按条件查询拍传模板——请求参数类型定义
 * @params keyword {string} 模糊匹配关键字 
 * @params page {number} 页码, 从1开始 默认：1 
 * @params per_page {number} 页容量，最小为1 默认：100 
 * @headers X-version {string}  
*/
export type GetMultimediaTemplatesReqType = {
      keyword?: string;
      page?: number;
      per_page?: number;
      X-version?: string;
}


/**
 * 按条件查询拍传模板——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TemplateOutCommonType[]} 记录
*/
export type GetMultimediaTemplatesResType = {
      totalCount: number;
      records: TemplateOutCommonType[];
}


/**
 * 创建拍传模板——请求参数类型定义
 * @headers X-version {string}  
 * @params name {string} 拍传模板名称 （必填）
 * @params description {string} 描述 
 * @params title {string} 标题 （必填）
 * @params placeHolders {PlaceHolderCommonType[]} 模板占位符 
*/
export type AddMultimediaTemplatesReqType = {
      X-version?: string;
      name: string;
      description?: string;
      title: string;
      placeHolders?: PlaceHolderCommonType[];
}


/**
 * 创建拍传模板——响应参数类型定义
 * @params id {string} 拍传模板ID
 * @params name {string} 拍传模板名称
 * @params description {string} 描述
 * @params title {string} 标题
 * @params placeHolders {PlaceHolderCommonType[]} 模板占位符
 * @params resourceId {string} 资源ID
 * @params platformId {string} 平台Id
*/
export type AddMultimediaTemplatesResType = {
      id: string;
      name: string;
      description: string;
      title: string;
      placeHolders: PlaceHolderCommonType[];
      resourceId: string;
      platformId: string;
}


/**
 * 通过拍传模板ID获取拍传模板——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} platformId 
 * @headers X-version {string}  
*/
export type GetTemplatesByIdReqType = {
      id: string;
      platformId?: string;
      X-version?: string;
}


/**
 * 通过拍传模板ID获取拍传模板——响应参数类型定义
 * @params id {string} 拍传模板ID
 * @params name {string} 拍传模板名称
 * @params description {string} 描述
 * @params title {string} 标题
 * @params placeHolders {PlaceHolderCommonType[]} 模板占位符
 * @params resourceId {string} 资源ID
 * @params platformId {string} 平台Id
*/
export type GetTemplatesByIdResType = {
      id: string;
      name: string;
      description: string;
      title: string;
      placeHolders: PlaceHolderCommonType[];
      resourceId: string;
      platformId: string;
}


/**
 * 更新拍传模板——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 拍传模板名称 （必填）
 * @params description {string} 描述 
 * @params title {string} 标题 （必填）
 * @params placeHolders {PlaceHolderCommonType[]} 模板占位符 
*/
export type EditTemplatesReqType = {
      id: string;
      X-version?: string;
      name: string;
      description?: string;
      title: string;
      placeHolders?: PlaceHolderCommonType[];
}


/**
 * 删除拍传模板——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}  
*/
export type DeleteTemplatesReqType = {
      id: string;
      X-version?: string;
}

