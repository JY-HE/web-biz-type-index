
/**
 * 储存类型
<remarks>0:公共|Public 1:私有|Private 2:组|Group</remarks>
*/
type StorageKindCommonType =  0 | 1 | 2 ;


/**
 * 节点选中状态
*/
type UseStatusTypeCommonType =  0 | 1 | 2 ;


/**
 * 目录实体
 * @params id {string} 目录ID
 * @params name {string} 目录名称
 * @params parentId {string} 父目录Id
 * @params isPublic {boolean} 是否为公共目录
 * @params createTime {string} 
 * @params updateTime {string} 
 * @params useStatus {UseStatusTypeCommonType} 是否选中0-未选中1-部分选中2-全选
 * @params isLeafGroup {boolean} 是否是叶子节点组true 表示叶子节点，不会有子节点
 * @params isLeaf {boolean} 是否为叶子节点true 表示叶子节点，不会有子节点
 * @params storageKind {StorageKindCommonType} 文件夹类型0-公共文件夹1-私有文件夹2-组文件夹
 * @params sourceId {string} 目录原始id
*/
type DirectoryEntityOutCommonType = {
      id?: string;
      name?: string;
      parentId?: string;
      isPublic?: boolean;
      createTime?: string;
      updateTime?: string;
      useStatus?: UseStatusTypeCommonType;
      isLeafGroup?: boolean;
      isLeaf?: boolean;
      storageKind?: StorageKindCommonType;
      sourceId?: string;
}


/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {DirectoryEntityOutCommonType[]} 记录
*/
type DirectoryEntityOutPageableQueryResultCommonType = {
      totalCount?: number;
      records?: DirectoryEntityOutCommonType[];
}


/**
 * 目录
 * @params name {string} 目录名称
 * @params parentId {string} 父目录Id
*/
type DirectoryEntityInCommonType = {
      name: string;
      parentId?: string;
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
 * 文件类型
<remarks>0:未知|Unknown 1:图片文件|Picture 2:视频文件|Video 3:音频文件|Audio 4:文本文件|Text</remarks>
*/
type FileEntityTypeCommonType =  0 | 1 | 2 | 3 | 4 ;


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
 * @params extension {undefined} 扩展字段
 * @params duration {string} 时长单位秒
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
      extension?: undefined;
      duration?: string;
}


/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {FileEntityOutCommonType[]} 记录
*/
type FileEntityOutPageableQueryResultCommonType = {
      totalCount?: number;
      records?: FileEntityOutCommonType[];
}


/**
 * 文件返回数据
 * @params id {string} ID
 * @params name {string} 文件名
 * @params fileId {string} 文件Id
 * @params storageKind {StorageKindCommonType} 储存类型0 公共1 私有2 组
 * @params idPath {string} 文件所在目录的id全路径
 * @params namePath {string} 文件所在目录的name全路径
 * @params duration {string} 时长单位秒
*/
type FileOutCommonType = {
      id?: string;
      name?: string;
      fileId?: string;
      storageKind?: StorageKindCommonType;
      idPath?: string;
      namePath?: string;
      duration?: string;
}


/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {FileOutCommonType[]} 记录
*/
type FileOutPageableQueryResultCommonType = {
      totalCount?: number;
      records?: FileOutCommonType[];
}


/**
 * 文件更新条件
 * @params fileName {string} 文件名
 * @params newDirectoryId {string} 新目录id
*/
type UpdateFileRequestCommonType = {
      fileName?: string;
      newDirectoryId?: string;
}


/**
 * Ss文件记录
 * @params id {string} 主键Id
 * @params fileGroupId {string} 文件组id
 * @params userName {string} 用户名
 * @params fileType {number} 文件类型
 * @params fileName {string} 文件名
 * @params filePath {string} 文件路径
 * @params fileSize {number} 文件大小
 * @params createTime {string} 生成时间
*/
type SsFileRecordCommonType = {
      id: string;
      fileGroupId?: string;
      userName?: string;
      fileType?: number;
      fileName: string;
      filePath: string;
      fileSize: number;
      createTime: string;
}


/**
 * 录音通知文件更新条件
 * @params fileNameWithoutExtension {string} 文件名
*/
type RecordnotifyRequestCommonType = {
      fileNameWithoutExtension: string;
}


/**
 * 演练文件记录请求
 * @params fileName {string} 文件名
 * @params isMultimediaTransfer {boolean} 是否为拍传文件
*/
type WtsFileRequestCommonType = {
      fileName?: string;
      isMultimediaTransfer?: boolean;
}


/**
 * 导出文件入参
 * @params fileIds {any[]} 文件Id列表
*/
type ExportFileInCommonType = {
      fileIds: any[];
}


/**
 * 导出文件响应实体
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
 * @params extension {undefined} 扩展字段
 * @params duration {string} 时长单位秒
 * @params content {string} 文件内容，Base64编码
*/
type ExportFileOutCommonType = {
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
      extension?: undefined;
      duration?: string;
      content?: string;
}


/**
 * 导出文件
 * @params files {ExportFileOutCommonType[]} 文件
*/
type ExportFileModelCommonType = {
      files?: ExportFileOutCommonType[];
}


/**
 * 导入文件
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
 * @params extension {undefined} 扩展字段
 * @params content {string} 文件内容，Base64编码
*/
type ImportFileInCommonType = {
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
      extension?: undefined;
      content?: string;
}


/**
 * 导入文件
 * @params files {ImportFileInCommonType[]} 文件
*/
type ImportFileModelCommonType = {
      files: ImportFileInCommonType[];
}


----

/**
 * 获取目录——请求参数类型定义
 * @params StorageKind {number} 目录类型0-公共1-私有2-组 （必填）
 * @params ParentId {string} 父id 
 * @params SelectedIds {any[]} 被选中的节点 
 * @params page {number} 页码, 从1开始 默认：1 
 * @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetDirectoriesReqType = {
      StorageKind: number;
      ParentId?: string;
      SelectedIds?: any[];
      page?: number;
      per_page?: number;
}


/**
 * 获取目录——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {DirectoryEntityOutCommonType[]} 记录
*/
export type GetDirectoriesResType = {
      totalCount: number;
      records: DirectoryEntityOutCommonType[];
}


/**
 * 创建目录——请求参数类型定义
 * @params storageKind {number}  
 * @params name {string} 目录名称 （必填）
 * @params parentId {string} 父目录Id 
*/
export type AddDirectoriesReqType = {
      storageKind?: number;
      name: string;
      parentId?: string;
}


/**
 * 创建目录——响应参数类型定义
 * @params id {string} 目录ID
 * @params name {string} 目录名称
 * @params parentId {string} 父目录Id
 * @params isPublic {boolean} 是否为公共目录
 * @params createTime {string} 
 * @params updateTime {string} 
 * @params useStatus {UseStatusTypeCommonType} 是否选中0-未选中1-部分选中2-全选
 * @params isLeafGroup {boolean} 是否是叶子节点组true 表示叶子节点，不会有子节点
 * @params isLeaf {boolean} 是否为叶子节点true 表示叶子节点，不会有子节点
 * @params storageKind {StorageKindCommonType} 文件夹类型0-公共文件夹1-私有文件夹2-组文件夹
 * @params sourceId {string} 目录原始id
*/
export type AddDirectoriesResType = {
      id: string;
      name: string;
      parentId: string;
      isPublic: boolean;
      createTime: string;
      updateTime: string;
      useStatus: UseStatusTypeCommonType;
      isLeafGroup: boolean;
      isLeaf: boolean;
      storageKind: StorageKindCommonType;
      sourceId: string;
}


/**
 * 获取目录(根目录)——请求参数类型定义
 * @params storageKind {number}  
*/
export type GetDirectoriesRootReqType = {
      storageKind?: number;
}


/**
 * 获取目录(根目录)——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {DirectoryEntityOutCommonType[]} 记录
*/
export type GetDirectoriesRootResType = {
      totalCount: number;
      records: DirectoryEntityOutCommonType[];
}


/**
 * 获取子目录——请求参数类型定义
 * @params parentId {string} parentId （必填）
 * @params storageKind {number}  
*/
export type GetDirectoriesChildrenReqType = {
      parentId: string;
      storageKind?: number;
}


/**
 * 获取子目录——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {DirectoryEntityOutCommonType[]} 记录
*/
export type GetDirectoriesChildrenResType = {
      totalCount: number;
      records: DirectoryEntityOutCommonType[];
}


/**
 * 通过Id获取目录——请求参数类型定义
 * @params id {string} id （必填）
 * @params storageKind {number}  
*/
export type GetDirectoriesByIdReqType = {
      id: string;
      storageKind?: number;
}


/**
 * 通过Id获取目录——响应参数类型定义
 * @params id {string} 目录ID
 * @params name {string} 目录名称
 * @params parentId {string} 父目录Id
 * @params isPublic {boolean} 是否为公共目录
 * @params createTime {string} 
 * @params updateTime {string} 
 * @params useStatus {UseStatusTypeCommonType} 是否选中0-未选中1-部分选中2-全选
 * @params isLeafGroup {boolean} 是否是叶子节点组true 表示叶子节点，不会有子节点
 * @params isLeaf {boolean} 是否为叶子节点true 表示叶子节点，不会有子节点
 * @params storageKind {StorageKindCommonType} 文件夹类型0-公共文件夹1-私有文件夹2-组文件夹
 * @params sourceId {string} 目录原始id
*/
export type GetDirectoriesByIdResType = {
      id: string;
      name: string;
      parentId: string;
      isPublic: boolean;
      createTime: string;
      updateTime: string;
      useStatus: UseStatusTypeCommonType;
      isLeafGroup: boolean;
      isLeaf: boolean;
      storageKind: StorageKindCommonType;
      sourceId: string;
}


/**
 * 更新目录——请求参数类型定义
 * @params id {string} id （必填）
 * @params storageKind {number}  
 * @params name {string} 目录名称 （必填）
 * @params parentId {string} 父目录Id 
*/
export type UpdateDirectoriesReqType = {
      id: string;
      storageKind?: number;
      name: string;
      parentId?: string;
}


/**
 * 删除目录——请求参数类型定义
 * @params id {string} id （必填）
 * @params storageKind {number}  
*/
export type DeleteDirectoriesReqType = {
      id: string;
      storageKind?: number;
}


/**
 * 获取目录下的文件——请求参数类型定义
 * @params directoryId {string} 目录id （必填）
 * @params storageKind {number} 储存类型 
 * @params validate {boolean} 是否校验物理文件存在 
 * @params page {number} 页码, 从1开始 默认：1 
 * @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetFilesReqType = {
      directoryId: string;
      storageKind?: number;
      validate?: boolean;
      page?: number;
      per_page?: number;
}


/**
 * 获取目录下的文件——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {FileEntityOutCommonType[]} 记录
*/
export type GetFilesResType = {
      totalCount: number;
      records: FileEntityOutCommonType[];
}


/**
 * 搜索文件——请求参数类型定义
 * @params Keyword {string} 关键字 （必填）
 * @params Limit {number} 搜索返回的个人文件夹和公共文件夹文件数量默认各20条 
*/
export type SearchFilesReqType = {
      Keyword: string;
      Limit?: number;
}


/**
 * 搜索文件——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {FileOutCommonType[]} 记录
*/
export type SearchFilesResType = {
      totalCount: number;
      records: FileOutCommonType[];
}


/**
 * 获取文件——请求参数类型定义
 * @params fileId {string} fileId （必填）
 * @params platformId {string} platformId 
 * @params validate {boolean}  
*/
export type GetFssFilesByIdReqType = {
      fileId: string;
      platformId?: string;
      validate?: boolean;
}


/**
 * 获取文件——响应参数类型定义
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
 * @params extension {undefined} 扩展字段
 * @params duration {string} 时长单位秒
*/
export type GetFssFilesByIdResType = {
      id: string;
      name: string;
      fileId: string;
      path: string;
      fullPath: string;
      thumbnailPath: string;
      convertedFiles: any;
      length: number;
      fileType: FileEntityTypeCommonType;
      contentType: string;
      directoryInfo: DirectoryEntityOutCommonType;
      storageKind: StorageKindCommonType;
      isOldSsFile: boolean;
      userId: string;
      userName: string;
      uploadTime: string;
      createTime: string;
      updateTime: string;
      expireTime: string;
      isExpired: boolean;
      extension: undefined;
      duration: string;
}


/**
 * 更新文件——请求参数类型定义
 * @params fileId {string} fileId （必填）
 * @params fileName {string} 文件名 
 * @params newDirectoryId {string} 新目录id 
*/
export type UpdateFilesReqType = {
      fileId: string;
      fileName?: string;
      newDirectoryId?: string;
}


/**
 * 删除文件——请求参数类型定义
 * @params fileId {string} fileId （必填）
*/
export type DeleteFilesReqType = {
      fileId: string;
}


/**
 * ss文件创建接口——请求参数类型定义
 * @params id {string} 主键Id （必填）
 * @params fileGroupId {string} 文件组id 
 * @params userName {string} 用户名 
 * @params fileType {number} 文件类型 
 * @params fileName {string} 文件名 （必填）
 * @params filePath {string} 文件路径 （必填）
 * @params fileSize {number} 文件大小 （必填）
 * @params createTime {string} 生成时间 （必填）
*/
export type AddSSReqType = {
      id: string;
      fileGroupId?: string;
      userName?: string;
      fileType?: number;
      fileName: string;
      filePath: string;
      fileSize: number;
      createTime: string;
}


/**
 * ss文件创建接口——响应参数类型定义
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
 * @params extension {undefined} 扩展字段
 * @params duration {string} 时长单位秒
*/
export type AddSSResType = {
      id: string;
      name: string;
      fileId: string;
      path: string;
      fullPath: string;
      thumbnailPath: string;
      convertedFiles: any;
      length: number;
      fileType: FileEntityTypeCommonType;
      contentType: string;
      directoryInfo: DirectoryEntityOutCommonType;
      storageKind: StorageKindCommonType;
      isOldSsFile: boolean;
      userId: string;
      userName: string;
      uploadTime: string;
      createTime: string;
      updateTime: string;
      expireTime: string;
      isExpired: boolean;
      extension: undefined;
      duration: string;
}


/**
 * 更新录音通知文件——请求参数类型定义
 * @params fileId {string} fileId （必填）
 * @params fileNameWithoutExtension {string} 文件名 （必填）
*/
export type UpdateRecordFilesReqType = {
      fileId: string;
      fileNameWithoutExtension: string;
}


/**
 * wts文件创建/获取接口——请求参数类型定义
 * @params fileName {string} 文件名 
 * @params isMultimediaTransfer {boolean} 是否为拍传文件 
*/
export type AddWTSReqType = {
      fileName?: string;
      isMultimediaTransfer?: boolean;
}


/**
 * wts文件创建/获取接口——响应参数类型定义
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
 * @params extension {undefined} 扩展字段
 * @params duration {string} 时长单位秒
*/
export type AddWTSResType = {
      id: string;
      name: string;
      fileId: string;
      path: string;
      fullPath: string;
      thumbnailPath: string;
      convertedFiles: any;
      length: number;
      fileType: FileEntityTypeCommonType;
      contentType: string;
      directoryInfo: DirectoryEntityOutCommonType;
      storageKind: StorageKindCommonType;
      isOldSsFile: boolean;
      userId: string;
      userName: string;
      uploadTime: string;
      createTime: string;
      updateTime: string;
      expireTime: string;
      isExpired: boolean;
      extension: undefined;
      duration: string;
}


/**
 * 导出文件接口——请求参数类型定义
 * @params fileIds {any[]} 文件Id列表 （必填）
*/
export type ExportIconFilesReqType = {
      fileIds: any[];
}


/**
 * 导出文件接口——响应参数类型定义
 * @params files {ExportFileOutCommonType[]} 文件
*/
export type ExportIconFilesResType = {
      files: ExportFileOutCommonType[];
}


/**
 * 导入文件接口——请求参数类型定义
 * @params files {ImportFileInCommonType[]} 文件 （必填）
*/
export type ImportIconFilesReqType = {
      files: ImportFileInCommonType[];
}

