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
 * 任务基本信息
 * @params id {string} ID
 * @params name {string} 名称
 */
type TaskInfoCommonType = {
    id?: string;
    name?: string;
};

/**
 * 通话记录类型
 */
type CallRecordTypeCommonType = 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512;

/**
* ss文件类型
0-未知
1-图片文件
2-视频文件
3-音频文件
4-文本文件
*/
type FileTypeCommonType = 0 | 1 | 2 | 3 | 4;

/**
 * 文件记录
 * @params id {string} Fss 服务的文件 Id
 * @params guid {string} Fss 服务的文件组 Id
 * @params userName {string} Fss 服务的文件名
 * @params fileType {FileTypeCommonType} Fss 服务的文件类型
 * @params fileName {string} Fss 服务的文件名
 * @params filePath {string} Fss 服务的文件路径
 * @params fileGenTime {string} Fss 服务的文件创建时间
 * @params fileUploadTime {string} Fss 服务的文件上传时间
 * @params fileSize {number} Fss 服务的文件大小
 */
type FileRecordCommonType = {
    id?: string;
    guid?: string;
    userName?: string;
    fileType?: FileTypeCommonType;
    fileName?: string;
    filePath?: string;
    fileGenTime?: string;
    fileUploadTime?: string;
    fileSize?: number;
};

/**
 * 通话数据
 * @params communicationId {string} 通话信息Id
 * @params callerName {string} 主叫名称
 * @params callerNumber {string} 主叫号码
 * @params calledName {string} 被叫名称
 * @params calledNumber {string} 被叫号码
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params hasAnswered {boolean} 是否接听
 * @params taskInfos {TaskInfoCommonType[]} 任务基本信息
 * @params type {CallRecordTypeCommonType} 通话记录类型 1-普通通话 2-队列通话 4-会议通话 8-广播通话 16-视频会议通话 32-录音通知通话
 * @params recordId {string} 录音记录 Id
 * @params fileRecord {FileRecordCommonType} 录音通知文件记录
 * @params logId {string} 唯一记录id
 * @params duration {number} 时长
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
type CommunicationDataOutCommonType = {
    communicationId?: string;
    callerName?: string;
    callerNumber?: string;
    calledName?: string;
    calledNumber?: string;
    startTime?: string;
    endTime?: string;
    hasAnswered?: boolean;
    taskInfos?: TaskInfoCommonType[];
    type?: CallRecordTypeCommonType;
    recordId?: string;
    fileRecord?: FileRecordCommonType;
    logId?: string;
    duration?: number;
    id?: string;
    eventId?: string;
    eventName?: string;
    createdTime?: string;
    platformId?: string;
    resourceId?: string;
    associtedDataId?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {CommunicationDataOutCommonType[]} 数据记录
 */
type CommunicationDataOutReqCommonType = {
    totalCount?: number;
    records?: CommunicationDataOutCommonType[];
};

/**
 * 通话信息
 * @params communicationId {string} 通话信息Id
 * @params callerName {string} 主叫名称
 * @params callerNumber {string} 主叫号码
 * @params calledName {string} 被叫名称
 * @params calledNumber {string} 被叫号码
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params hasAnswered {boolean} 是否接听
 * @params type {CallRecordTypeCommonType} 通话记录类型 1-普通通话 2-队列通话 4-会议通话 8-广播通话 16-视频会议通话 32-录音通知通话
 * @params recordId {string} 录音文件 Id
 * @params logId {string} 唯一记录id
 * @params duration {number} 时长
 */
type CommunicationDataInCommonType = {
    communicationId: string;
    callerName?: string;
    callerNumber?: string;
    calledName?: string;
    calledNumber?: string;
    startTime?: string;
    endTime?: string;
    hasAnswered?: boolean;
    type?: CallRecordTypeCommonType;
    recordId?: string;
    logId?: string;
    duration?: number;
};

/**
 * 标绘数据
 * @params drawId {string} 标绘 Id
 * @params name {string} 标绘名称
 * @params coordinates {string} 标绘坐标点
 * @params type {string} 标绘类型
 * @params markerType {string} 标志类型
 * @params properties {string} 扩展属性
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
type DrawDataOutCommonType = {
    drawId?: string;
    name?: string;
    coordinates?: string;
    type?: string;
    markerType?: string;
    properties?: string;
    id?: string;
    eventId?: string;
    eventName?: string;
    createdTime?: string;
    platformId?: string;
    resourceId?: string;
    associtedDataId?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {DrawDataOutCommonType[]} 数据记录
 */
type DrawDataOutReqCommonType = {
    totalCount?: number;
    records?: DrawDataOutCommonType[];
};

/**
 * 标绘数据
 * @params drawId {string} 标绘 Id
 * @params name {string} 标绘名称
 * @params coordinates {string} 标绘坐标点
 * @params type {string} 标绘类型
 * @params markerType {string} 标志类型
 * @params properties {string} 扩展属性
 */
type DrawDataInCommonType = {
    drawId: string;
    name?: string;
    coordinates?: string;
    type?: string;
    markerType?: string;
    properties?: string;
};

/**
 * 用户响应信息
 * @params id {string} 用户Id
 * @params name {string} 用户名称
 */
type UserInfoCommonType = {
    id?: string;
    name?: string;
};

/**
 * 事件日志数据
 * @params content {string} 日志内容
 * @params user {UserInfoCommonType} 操作用户
 * @params createTime {string} 日志创建时间
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
type EventLogsOutCommonType = {
    content?: string;
    user?: UserInfoCommonType;
    createTime?: string;
    id?: string;
    eventId?: string;
    eventName?: string;
    createdTime?: string;
    platformId?: string;
    resourceId?: string;
    associtedDataId?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {EventLogsOutCommonType[]} 数据记录
 */
type EventLogsOutReqCommonType = {
    totalCount?: number;
    records?: EventLogsOutCommonType[];
};

/**
 * 传真文件
 * @params id {string} 文件id
 * @params name {string} 文件名
 * @params fullPath {string} 全路径
 * @params length {number} 长度
 */
type FaxFileCommonType = {
    id?: string;
    name?: string;
    fullPath?: string;
    length?: number;
};

/**
 * 传真数据
 * @params faxId {string} 传真 Id
 * @params faxTitle {string} 传真记录主题
 * @params internationalCode {string} 国际区号
 * @params faxNumber {string} 传真号码
 * @params receiverId {string} 收件人Id
 * @params receiver {string} 收件人
 * @params receiverTitle {string} 收件人职位
 * @params receiveCompany {string} 收件人公司
 * @params senderId {string} 发件人Id
 * @params sender {string} 发件人
 * @params senderTitle {string} 发件人职位
 * @params sendCompany {string} 发件人公司
 * @params status {number} 发送状态
 * @params faxFiles {FaxFileCommonType[]} 文件列表
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
type FaxDataOutCommonType = {
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
    faxFiles?: FaxFileCommonType[];
    id?: string;
    eventId?: string;
    eventName?: string;
    createdTime?: string;
    platformId?: string;
    resourceId?: string;
    associtedDataId?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {FaxDataOutCommonType[]} 数据记录
 */
type FaxDataOutReqCommonType = {
    totalCount?: number;
    records?: FaxDataOutCommonType[];
};

/**
 * 传真数据
 * @params faxId {string} 传真 Id
 * @params faxTitle {string} 传真记录主题
 * @params internationalCode {string} 国际区号
 * @params faxNumber {string} 传真号码
 * @params receiverId {string} 收件人Id
 * @params receiver {string} 收件人
 * @params receiverTitle {string} 收件人职位
 * @params receiveCompany {string} 收件人公司
 * @params senderId {string} 发件人Id
 * @params sender {string} 发件人
 * @params senderTitle {string} 发件人职位
 * @params sendCompany {string} 发件人公司
 * @params status {number} 发送状态
 * @params faxFiles {FaxFileCommonType[]} 文件列表
 */
type FaxDataInCommonType = {
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
    faxFiles?: FaxFileCommonType[];
};

/**
 * 文件类型
 */
type FileEntityTypeCommonType = 0 | 1 | 2 | 3 | 4;

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
};

/**
 * 储存类型
 */
type StorageKindCommonType = 0 | 1 | 2;

/**
 * 文件实体
 * @params id {string} 文件ID
 * @params name {string} 文件名
 * @params fileId {string} 文件Id
 * @params path {string} 路径
 * @params fullPath {string} 访问全路径
 * @params thumbnailPath {string} 缩略图路径
 * @params length {number} 文件大小(单位bytes)
 * @params fileType {FileEntityTypeCommonType} 文件类型
 * @params contentType {string} 内容类型
 * @params directoryInfo {DirectoryEntityOutCommonType} 目录实体
 * @params storageKind {StorageKindCommonType} 储存类型
 * @params isOldSsFile {boolean} 是否为旧版ss文件
 * @params userId {string} 上传用户Id
 * @params userName {string} 上传用户名称
 * @params uploadTime {string} 上传时间
 * @params createTime {string}
 * @params updateTime {string}
 */
type FileEntityOutCommonType = {
    id?: string;
    name?: string;
    fileId?: string;
    path?: string;
    fullPath?: string;
    thumbnailPath?: string;
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
};

/**
 * 关联文件数据
 * @params fileRecordID {string} 文件记录ID
 * @params fileRecord {FileEntityOutCommonType} 文件记录
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
type FileDataOutCommonType = {
    fileRecordID?: string;
    fileRecord?: FileEntityOutCommonType;
    id?: string;
    eventId?: string;
    eventName?: string;
    createdTime?: string;
    platformId?: string;
    resourceId?: string;
    associtedDataId?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {FileDataOutCommonType[]} 数据记录
 */
type FileDataOutReqCommonType = {
    totalCount?: number;
    records?: FileDataOutCommonType[];
};

/**
 * 关联文件数据
 * @params fileRecordID {string} 文件记录ID
 */
type FileDataInCommonType = {
    fileRecordID?: string;
};

/**
 * 拍传数据
 * @params id {string} 拍传ID
 * @params name {string} 拍传名称
 * @params templateId {string} 拍传模板Id
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
 * @params fileRecords {FileEntityOutCommonType[]} 文件记录
 */
type MultimediaTransferDetailOutCommonType = {
    id?: string;
    name?: string;
    templateId?: string;
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
    fileRecords?: FileEntityOutCommonType[];
};

/**
 * 拍传数据
 * @params recordId {string} 拍传记录Id
 * @params multimediaTransferDetail {MultimediaTransferDetailOutCommonType} 拍传详情
 * @params taskInfos {TaskInfoCommonType[]} 任务基本信息
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
type MultimediaTransferDataOutCommonType = {
    recordId?: string;
    multimediaTransferDetail?: MultimediaTransferDetailOutCommonType;
    taskInfos?: TaskInfoCommonType[];
    id?: string;
    eventId?: string;
    eventName?: string;
    createdTime?: string;
    platformId?: string;
    resourceId?: string;
    associtedDataId?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {MultimediaTransferDataOutCommonType[]} 数据记录
 */
type MultimediaTransferDataOutReqCommonType = {
    totalCount?: number;
    records?: MultimediaTransferDataOutCommonType[];
};

/**
 * 拍传数据
 * @params recordId {string} 拍传记录Id
 */
type MultimediaTransferDataInCommonType = {
    recordId?: string;
};

/**
 * 图片数据
 * @params fileRecordID {string} 文件记录ID
 * @params fileRecord {FileEntityOutCommonType} 文件记录
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
type PictureDataOutCommonType = {
    fileRecordID?: string;
    fileRecord?: FileEntityOutCommonType;
    id?: string;
    eventId?: string;
    eventName?: string;
    createdTime?: string;
    platformId?: string;
    resourceId?: string;
    associtedDataId?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {PictureDataOutCommonType[]} 数据记录
 */
type PictureDataOutReqCommonType = {
    totalCount?: number;
    records?: PictureDataOutCommonType[];
};

/**
 * 图片数据
 * @params fileRecordID {string} 文件记录ID
 */
type PictureDataInCommonType = {
    fileRecordID?: string;
};

/**
 * 短信消息
 * @params textMessageId {string} 短信 Id
 * @params receiver {string} 短信接收者
 * @params receiverNumber {string} 接收号码
 * @params sender {string} 短信发送者
 * @params senderNumber {string} 发送号码
 * @params content {string} 短信内容
 * @params sendTime {string} 发送时间
 * @params taskInfos {TaskInfoCommonType[]} 任务基本信息
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
type TextMessageDataOutCommonType = {
    textMessageId?: string;
    receiver?: string;
    receiverNumber?: string;
    sender?: string;
    senderNumber?: string;
    content?: string;
    sendTime?: string;
    taskInfos?: TaskInfoCommonType[];
    id?: string;
    eventId?: string;
    eventName?: string;
    createdTime?: string;
    platformId?: string;
    resourceId?: string;
    associtedDataId?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {TextMessageDataOutCommonType[]} 数据记录
 */
type TextMessageDataOutReqCommonType = {
    totalCount?: number;
    records?: TextMessageDataOutCommonType[];
};

/**
 * 短信消息
 * @params textMessageId {string} 短信 Id
 * @params receiver {string} 短信接收者
 * @params receiverNumber {string} 接收号码
 * @params sender {string} 短信发送者
 * @params senderNumber {string} 发送号码
 * @params content {string} 短信内容
 * @params sendTime {string} 发送时间
 */
type TextMessageDataInCommonType = {
    textMessageId?: string;
    receiver?: string;
    receiverNumber?: string;
    sender?: string;
    senderNumber?: string;
    content?: string;
    sendTime?: string;
};

/**
 * 视频数据
 * @params fileRecordID {string} 文件记录ID
 * @params fileRecord {FileEntityOutCommonType} 文件记录
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
type VideoDataOutCommonType = {
    fileRecordID?: string;
    fileRecord?: FileEntityOutCommonType;
    id?: string;
    eventId?: string;
    eventName?: string;
    createdTime?: string;
    platformId?: string;
    resourceId?: string;
    associtedDataId?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {VideoDataOutCommonType[]} 数据记录
 */
type VideoDataOutReqCommonType = {
    totalCount?: number;
    records?: VideoDataOutCommonType[];
};

/**
 * 视频数据
 * @params fileRecordID {string} 文件记录ID
 */
type VideoDataInCommonType = {
    fileRecordID?: string;
};

/**
 * undefined
 */
type EntityOperationCommonType = 0 | 1 | 2;

/**
 *
 * @params bizName {string}
 * @params areaCode {string} 行政区域码
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 */
type EventEntityCallbackCommonType = {
    bizName?: string;
    areaCode?: string;
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
};

/**
 * 事件关联数据回调
 * @params eventId {string} 事件 Id
 * @params bizName {string}
 * @params associtedDataId {string} 数据记录Id
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 */
type EventAssociatedDataCallbackCommonType = {
    eventId?: string;
    bizName?: string;
    associtedDataId?: string;
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
};

/**
 * 事件优先级回调
 * @params bizName {string}
 * @params areaCode {string} 行政区域码
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 */
type EventPriorityCallbackCommonType = {
    bizName?: string;
    areaCode?: string;
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
};

/**
 * 事件状态回调
 * @params bizName {string}
 * @params areaCode {string} 行政区域码
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 */
type EventStateCallbackCommonType = {
    bizName?: string;
    areaCode?: string;
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
};

/**
 * 事件类型组回调
 * @params bizName {string}
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 */
type EventTypeGroupCallbackCommonType = {
    bizName?: string;
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
};

/**
 * 事件类型回调
 * @params bizName {string}
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 */
type EventTypeCallbackCommonType = {
    bizName?: string;
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
};

/**
 * 任务回调
 * @params eventId {string} 事件 Id
 * @params bizName {string}
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 */
type TaskEntityCallbackCommonType = {
    eventId?: string;
    bizName?: string;
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
};

/**
 * 任务状态回调
 * @params eventId {string} 事件 Id
 * @params bizName {string}
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 */
type TaskStateEntityCallbackCommonType = {
    eventId?: string;
    bizName?: string;
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
};

/**
 * 任务反馈
 * @params taskId {string} 任务 Id
 * @params eventId {string} 事件 Id
 * @params resourceId {string} 资源Id
 * @params bizName {string}
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 */
type TaskFeedbackEntityCallbackCommonType = {
    taskId?: string;
    eventId?: string;
    resourceId?: string;
    bizName?: string;
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
};

/**
 * 任务模板回调
 * @params bizName {string}
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 */
type TaskTempEntityCallbackCommonType = {
    bizName?: string;
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
};

/**
 * 任务排序回调
 * @params bizName {string}
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 */
type TaskOrdersEntityCallbackCommonType = {
    bizName?: string;
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
};

/**
 *
 * @params bizName {string}
 * @params eventId {string} EventId
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 */
type EventFeedbackCallbackCommonType = {
    bizName?: string;
    eventId?: string;
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
};

/**
 * 事件实体
 * @params eventId {string} 事件Id
 * @params title {string} 标题
 * @params content {string} 内容
 * @params fileGroupId {string} 文件组Id
 * @params reporter {string} 反馈人名
 * @params createdTime {string} 创建时间【不传默认当前时间】
 * @params resourceId {string} 外部资源唯一Id
 */
type EventFeedbackEntityInCommonType = {
    eventId?: string;
    title?: string;
    content?: string;
    fileGroupId?: string;
    reporter?: string;
    createdTime?: string;
    resourceId?: string;
};

/**
* 任务状态 <br /><remarks>
1-未开始 <br />
2-已确认 <br />
4-进行中 <br />
8-暂停中 <br />
16-已完成
</remarks>
*/
type TaskStateCommonType = 1 | 2 | 4 | 8 | 16;

/**
 * 组信息
 * @params description {string} 组信息描述
 * @params id {string} ID
 * @params name {string} 名称
 */
type GroupInfoCommonType = {
    description?: string;
    id?: string;
    name?: string;
};

/**
 * 任务反馈类型，1-用户反馈|2-系统反馈
 */
type TaskFeedbackEntityTypeCommonType = 1 | 2;

/**
 * 任务反馈
 * @params id {string} 反馈Id
 * @params taskId {string} 任务Id
 * @params taskName {string} 任务名
 * @params taskState {TaskStateCommonType} 任务状态
 * @params content {string} 反馈内容
 * @params createdTime {string} 反馈时间
 * @params user {UserInfoCommonType} 反馈用户
 * @params group {GroupInfoCommonType} 反馈用户的组
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params type {TaskFeedbackEntityTypeCommonType} 任务反馈类型, 1-用户反馈|2-系统反馈
 * @params fileGroupId {string} 文件组Id
 */
type TaskFeedbackOutCommonType = {
    id?: string;
    taskId?: string;
    taskName?: string;
    taskState?: TaskStateCommonType;
    content?: string;
    createdTime?: string;
    user?: UserInfoCommonType;
    group?: GroupInfoCommonType;
    platformId?: string;
    resourceId?: string;
    type?: TaskFeedbackEntityTypeCommonType;
    fileGroupId?: string;
};

/**
 * 反馈类型。1-用户反馈信息，2-启动响应，3-取消响应
 */
type EventFeedbackEntityTypeCommonType = 1 | 2 | 3;

/**
 * 事件实体
 * @params id {string} 事件 Id
 * @params eventId {string} 事件Id
 * @params eventName {string} 事件名
 * @params type {EventFeedbackEntityTypeCommonType} 反馈类型。1-用户反馈信息，2-启动响应，3-取消响应
 * @params createdTime {string} 创建时间
 * @params title {string} 标题
 * @params content {string} 内容
 * @params fileGroupId {string} 文件组Id
 * @params userId {string} 用户Id
 * @params reporter {string} 反馈人名
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 */
type EventFeedbackEntityOutCommonType = {
    id?: string;
    eventId?: string;
    eventName?: string;
    type?: EventFeedbackEntityTypeCommonType;
    createdTime?: string;
    title?: string;
    content?: string;
    fileGroupId?: string;
    userId?: string;
    reporter?: string;
    platformId?: string;
    resourceId?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {EventFeedbackEntityOutCommonType[]} 数据记录
 */
type EventFeedbackEntityOutReqCommonType = {
    totalCount?: number;
    records?: EventFeedbackEntityOutCommonType[];
};

/**
 * 事件排序类型
 */
type EventSortTypeCommonType = 0 | 1 | 2;

/**
* 归属单位类型 <br /><remarks>
0-未知 <br />
1-组织架构 <br />
2-普通用户组
</remarks>
*/
type UnitTypeCommonType = 0 | 1 | 2;

/**
 * 事件归属单位
 * @params id {string} ID
 * @params name {string} 归属单位名称
 * @params path {string} 组织架构路径
 * @params unitType {UnitTypeCommonType} 归属单位类型 0-未知 1-组织架构 2-普通用户组
 */
type EventUnitCommonType = {
    id?: string;
    name?: string;
    path?: string;
    unitType?: UnitTypeCommonType;
};

/**
* 来源类型 <br />
0-未知 <br />
1-事件任务 <br />
2-普通用户组
*/
type SourceTypeCommonType = 0 | 1 | 2;

/**
 * 事件来源
 * @params id {string} ID
 * @params name {string} 来源名称
 * @params sourceType {SourceTypeCommonType} 来源类型 0-未知 1-事件任务 2-普通用户组
 */
type EventSourceCommonType = {
    id?: string;
    name?: string;
    sourceType?: SourceTypeCommonType;
};

/**
 * 事件类型
 * @params name {string} 事件类型名称
 * @params description {string} 事件类型描述
 * @params value {number} 事件类型值
 * @params isEffective {boolean} 事件类型是否可用
 * @params code {string} 事件类型编码
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params id {string} 主键ID
 */
type EventTypeCommonType = {
    name?: string;
    description?: string;
    value?: number;
    isEffective?: boolean;
    code?: string;
    platformId?: string;
    resourceId?: string;
    id?: string;
};

/**
 * 事件绑定的响应等级
 * @params preplanId {string} 预案Id，用于关联预案的响应类型
 * @params enableResponseLevelId {string} 启动的响应等级Id
 */
type EventResponseLevelCommonType = {
    preplanId?: string;
    enableResponseLevelId?: string;
};

/**
 * 人员信息
 * @params id {string} 标识
 * @params name {string} 名称
 * @params position {string} 职位
 * @params number {string} 号码
 */
type PersonInfoCommonType = {
    id?: string;
    name?: string;
    position?: string;
    number?: string;
};

/**
 * 事件通知方式
 */
type EventNotifyTypeCommonType = 0 | 1 | 2 | 4;

/**
 * 事件数据
 * @params id {string} Id
 * @params name {string} 事件名称
 * @params description {string} 事件描述
 * @params group {GroupInfoCommonType} 事件组
 * @params sceneGroup {GroupInfoCommonType} 事件现场指挥组
 * @params happenedTime {string} 事件发生时间
 * @params finishedTime {string} 时间完成时间
 * @params priority {number} 事件优先级
 * @params state {number} 事件状态
 * @params address {string} 事件发生地址
 * @params submitUnit {EventUnitCommonType} 报送单位
 * @params unit {EventUnitCommonType} 事件归属单位
 * @params source {EventSourceCommonType} 事件源
 * @params extension {string} 事件扩展字段，用于存项目额外信息
 * @params longitude {number} 事件发生地经度
 * @params latitude {number} 事件发生地纬度
 * @params typeID {string} 事件类型 Id
 * @params eventType {EventTypeCommonType} 事件类型
 * @params expectStartedTime {string} 事件期望发生时间
 * @params expectFinishedTime {string} 事件期望结束时间
 * @params createdTime {string} 事件创建时间
 * @params isMock {boolean} 是否模拟事件
 * @params totalTaskCount {number} 任务总数（父任务）
 * @params noStatedTaskCount {number} 未开始的任务总数（父任务）
 * @params finishedTaskCount {number} 已结束的任务总数（父任务）
 * @params confirmedTaskCount {number} 已确认的任务总数（父任务）
 * @params inProcessTaskCount {number} 进行中的任务总数（父任务）
 * @params pausedTaskCount {number} 暂停中的任务总数（父任务）
 * @params areaCode {string} 行政区域码
 * @params isDeleted {boolean} 是否已被删除
 * @params responseLevel {EventResponseLevelCommonType} 事件的响应等级
 * @params associatePreplanId {string} 匹配的预案id
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params updateTime {string} 最新修改时间
 * @params principal {PersonInfoCommonType[]} 负责人
 * @params disposer {PersonInfoCommonType[]} 处置人
 * @params serialNumber {number} 编号
 * @params disposalInstruction {string} 处置说明
 * @params notifyType {EventNotifyTypeCommonType} 通知方式
 * @params isAudited {boolean} 是否已审核
 */
type EventEntityOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
    group?: GroupInfoCommonType;
    sceneGroup?: GroupInfoCommonType;
    happenedTime?: string;
    finishedTime?: string;
    priority?: number;
    state?: number;
    address?: string;
    submitUnit?: EventUnitCommonType;
    unit?: EventUnitCommonType;
    source?: EventSourceCommonType;
    extension?: string;
    longitude?: number;
    latitude?: number;
    typeID?: string;
    eventType?: EventTypeCommonType;
    expectStartedTime?: string;
    expectFinishedTime?: string;
    createdTime?: string;
    isMock?: boolean;
    totalTaskCount?: number;
    noStatedTaskCount?: number;
    finishedTaskCount?: number;
    confirmedTaskCount?: number;
    inProcessTaskCount?: number;
    pausedTaskCount?: number;
    areaCode?: string;
    isDeleted?: boolean;
    responseLevel?: EventResponseLevelCommonType;
    associatePreplanId?: string;
    platformId?: string;
    resourceId?: string;
    updateTime?: string;
    principal?: PersonInfoCommonType[];
    disposer?: PersonInfoCommonType[];
    serialNumber?: number;
    disposalInstruction?: string;
    notifyType?: EventNotifyTypeCommonType;
    isAudited?: boolean;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {EventEntityOutCommonType[]} 数据记录
 */
type EventEntityOutReqCommonType = {
    totalCount?: number;
    records?: EventEntityOutCommonType[];
};

/**
* 事件等级 <br /><remarks>
1-未定级 <br />
2-IV级(一般) <br />
4-III级(较大) <br />
8-II级(重大) <br />
16-I级(特大)
</remarks>
*/
type EventPriorityCommonType = 1 | 2 | 4 | 8 | 16;

/**
 * 事件数据
 * @params priority {EventPriorityCommonType} 事件优先级 1-未定级 2-IV级(一般) 4-III级(较大) 8-II级(重大) 16-I级(特大)
 * @params name {string} 事件名称
 * @params description {string} 事件详情
 * @params groupId {string} 关联组 Id
 * @params sceneGroupId {string} 事件现场指挥组
 * @params happenedTime {string} 发生时间
 * @params address {string} 事件发生地址
 * @params submitUnit {EventUnitCommonType} 报送单位
 * @params unit {EventUnitCommonType} 事件归属单位
 * @params source {EventSourceCommonType} 事件源
 * @params extension {string} 扩展字段，用于项目中存放额外的信息
 * @params longitude {number} 事件发生地址经度
 * @params latitude {number} 事件发生地址纬度
 * @params typeId {string} 事件类型Id
 * @params expectStartedTime {string} 事件预期开始时间
 * @params expectFinishedTime {string} 事件预期结束时间
 * @params isMock {boolean} 是否为模拟事件
 * @params areaCode {string} 行政区域码
 * @params responseLevel {EventResponseLevelCommonType} 响应等级
 * @params principal {PersonInfoCommonType[]} 负责人
 * @params disposer {PersonInfoCommonType[]} 处置人
 * @params disposalInstruction {string} 处置说明
 * @params notifyType {EventNotifyTypeCommonType} 通知方式
 * @params associatePreplanId {string} 关联预案ID
 * @params resourceId {string} 外部资源唯一Id
 * @params isAudited {boolean} 是否已审核
 */
type EventEntityInCommonType = {
    priority?: EventPriorityCommonType;
    name: string;
    description?: string;
    groupId?: string;
    sceneGroupId?: string;
    happenedTime?: string;
    address?: string;
    submitUnit?: EventUnitCommonType;
    unit?: EventUnitCommonType;
    source?: EventSourceCommonType;
    extension?: string;
    longitude?: number;
    latitude?: number;
    typeId: string;
    expectStartedTime?: string;
    expectFinishedTime?: string;
    isMock?: boolean;
    areaCode?: string;
    responseLevel?: EventResponseLevelCommonType;
    principal?: PersonInfoCommonType[];
    disposer?: PersonInfoCommonType[];
    disposalInstruction?: string;
    notifyType?: EventNotifyTypeCommonType;
    associatePreplanId?: string;
    resourceId?: string;
    isAudited?: boolean;
};

/**
 * 事件响应等级返回实体
 * @params isEnable {boolean} 是否启用
 * @params id {string} 响应级别的 Id
 * @params name {string} 响应等级名称
 * @params content {string} 响应内容
 * @params condition {string} 响应条件
 */
type EventResponseLevelOutCommonType = {
    isEnable?: boolean;
    id?: string;
    name?: string;
    content?: string;
    condition?: string;
};

/**
 * 事件详情返回数据
 * @params firstResponseLevel {EventResponseLevelOutCommonType} 一级响应级别
 * @params secondResponseLevel {EventResponseLevelOutCommonType} 二级响应级别
 * @params thirdResponseLevel {EventResponseLevelOutCommonType} 三级响应级别
 * @params fourthResponseLevel {EventResponseLevelOutCommonType} 四级响应级别
 * @params id {string} Id
 * @params name {string} 事件名称
 * @params description {string} 事件描述
 * @params group {GroupInfoCommonType} 事件组
 * @params sceneGroup {GroupInfoCommonType} 事件现场指挥组
 * @params happenedTime {string} 事件发生时间
 * @params finishedTime {string} 时间完成时间
 * @params priority {number} 事件优先级
 * @params state {number} 事件状态
 * @params address {string} 事件发生地址
 * @params submitUnit {EventUnitCommonType} 报送单位
 * @params unit {EventUnitCommonType} 事件归属单位
 * @params source {EventSourceCommonType} 事件源
 * @params extension {string} 事件扩展字段，用于存项目额外信息
 * @params longitude {number} 事件发生地经度
 * @params latitude {number} 事件发生地纬度
 * @params typeID {string} 事件类型 Id
 * @params eventType {EventTypeCommonType} 事件类型
 * @params expectStartedTime {string} 事件期望发生时间
 * @params expectFinishedTime {string} 事件期望结束时间
 * @params createdTime {string} 事件创建时间
 * @params isMock {boolean} 是否模拟事件
 * @params totalTaskCount {number} 任务总数（父任务）
 * @params noStatedTaskCount {number} 未开始的任务总数（父任务）
 * @params finishedTaskCount {number} 已结束的任务总数（父任务）
 * @params confirmedTaskCount {number} 已确认的任务总数（父任务）
 * @params inProcessTaskCount {number} 进行中的任务总数（父任务）
 * @params pausedTaskCount {number} 暂停中的任务总数（父任务）
 * @params areaCode {string} 行政区域码
 * @params isDeleted {boolean} 是否已被删除
 * @params responseLevel {EventResponseLevelCommonType} 事件的响应等级
 * @params associatePreplanId {string} 匹配的预案id
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params updateTime {string} 最新修改时间
 * @params principal {PersonInfoCommonType[]} 负责人
 * @params disposer {PersonInfoCommonType[]} 处置人
 * @params serialNumber {number} 编号
 * @params disposalInstruction {string} 处置说明
 * @params notifyType {EventNotifyTypeCommonType} 通知方式
 * @params isAudited {boolean} 是否已审核
 */
type EventDetailEntityOutCommonType = {
    firstResponseLevel?: EventResponseLevelOutCommonType;
    secondResponseLevel?: EventResponseLevelOutCommonType;
    thirdResponseLevel?: EventResponseLevelOutCommonType;
    fourthResponseLevel?: EventResponseLevelOutCommonType;
    id?: string;
    name?: string;
    description?: string;
    group?: GroupInfoCommonType;
    sceneGroup?: GroupInfoCommonType;
    happenedTime?: string;
    finishedTime?: string;
    priority?: number;
    state?: number;
    address?: string;
    submitUnit?: EventUnitCommonType;
    unit?: EventUnitCommonType;
    source?: EventSourceCommonType;
    extension?: string;
    longitude?: number;
    latitude?: number;
    typeID?: string;
    eventType?: EventTypeCommonType;
    expectStartedTime?: string;
    expectFinishedTime?: string;
    createdTime?: string;
    isMock?: boolean;
    totalTaskCount?: number;
    noStatedTaskCount?: number;
    finishedTaskCount?: number;
    confirmedTaskCount?: number;
    inProcessTaskCount?: number;
    pausedTaskCount?: number;
    areaCode?: string;
    isDeleted?: boolean;
    responseLevel?: EventResponseLevelCommonType;
    associatePreplanId?: string;
    platformId?: string;
    resourceId?: string;
    updateTime?: string;
    principal?: PersonInfoCommonType[];
    disposer?: PersonInfoCommonType[];
    serialNumber?: number;
    disposalInstruction?: string;
    notifyType?: EventNotifyTypeCommonType;
    isAudited?: boolean;
};

/**
 * 编辑事件数据入参
 * @params name {string} 事件名称
 * @params description {string} 事件详情
 * @params groupId {string} 关联组 Id
 * @params sceneGroupId {string} 事件现场指挥组
 * @params happenedTime {string} 发生时间
 * @params address {string} 事件发生地址
 * @params submitUnit {EventUnitCommonType} 报送单位
 * @params unit {EventUnitCommonType} 事件归属单位
 * @params source {EventSourceCommonType} 事件源
 * @params extension {string} 扩展字段，用于项目中存放额外的信息
 * @params longitude {number} 事件发生地址经度
 * @params latitude {number} 事件发生地址纬度
 * @params typeId {string} 事件类型Id
 * @params expectStartedTime {string} 事件预期开始时间
 * @params expectFinishedTime {string} 事件预期结束时间
 * @params isMock {boolean} 是否为模拟事件
 * @params areaCode {string} 行政区域码
 * @params responseLevel {EventResponseLevelCommonType} 响应等级
 * @params principal {PersonInfoCommonType[]} 负责人
 * @params disposer {PersonInfoCommonType[]} 处置人
 * @params disposalInstruction {string} 处置说明
 * @params notifyType {EventNotifyTypeCommonType} 通知方式
 * @params associatePreplanId {string} 关联预案ID
 * @params resourceId {string} 外部资源唯一Id
 * @params isAudited {boolean} 是否已审核
 */
type EditEventEntityInCommonType = {
    name: string;
    description?: string;
    groupId?: string;
    sceneGroupId?: string;
    happenedTime?: string;
    address?: string;
    submitUnit?: EventUnitCommonType;
    unit?: EventUnitCommonType;
    source?: EventSourceCommonType;
    extension?: string;
    longitude?: number;
    latitude?: number;
    typeId: string;
    expectStartedTime?: string;
    expectFinishedTime?: string;
    isMock?: boolean;
    areaCode?: string;
    responseLevel?: EventResponseLevelCommonType;
    principal?: PersonInfoCommonType[];
    disposer?: PersonInfoCommonType[];
    disposalInstruction?: string;
    notifyType?: EventNotifyTypeCommonType;
    associatePreplanId?: string;
    resourceId?: string;
    isAudited?: boolean;
};

/**
 * 任务处重置方式
 */
type TaskResetTypeCommonType = 0 | 1 | 2;

/**
 * 事件优先级
 * @params value {EventPriorityCommonType} 事件优先级值1-未定级 2-IV级(一般) 4-III级(较大) 8-II级(重大) 16-I级(特大)
 * @params taskResetType {TaskResetTypeCommonType} 任务重置方式0 不处理，1暂停并匹配新任务，2 删除并匹配新任务
 */
type EventPriorityInCommonType = {
    value: EventPriorityCommonType;
    taskResetType?: TaskResetTypeCommonType;
};

/**
 * 事件状态
 * @params value {number} 事件状态值 0-未开始 1-处理中 2-结束
 */
type EventStateInCommonType = {
    value: number;
};

/**
 * 修改事件预案参数
 * @params preplanId {string} 预案id
 * @params isResetTask {boolean} 是否重置事件任务
 */
type UpdateEventPreplanInCommonType = {
    preplanId?: string;
    isResetTask?: boolean;
};

/**
 * 事件数据
 * @params priority {EventPriorityCommonType} 事件优先级 1-未定级 2-IV级(一般) 4-III级(较大) 8-II级(重大) 16-I级(特大)
 * @params resourceId {string} 资源ID
 * @params platformId {string} 平台来源ID
 * @params typeId {string} 事件类型ResourceId
 * @params createdTime {string} 创建时间
 * @params totalTaskCount {number} 任务总数（父任务）
 * @params noStatedTaskCount {number} 未开始的任务总数（父任务）
 * @params finishedTaskCount {number} 已结束的任务总数（父任务）
 * @params confirmedTaskCount {number} 已确认的任务总数（父任务）
 * @params inProcessTaskCount {number} 进行中的任务总数（父任务）
 * @params pausedTaskCount {number} 暂停中的任务总数（父任务）
 * @params state {number} 状态（未开始 = 0，进行中 = 1，已完成 = 2）
 * @params name {string} 事件名称
 * @params description {string} 事件详情
 * @params groupId {string} 关联组 Id
 * @params sceneGroupId {string} 事件现场指挥组
 * @params happenedTime {string} 发生时间
 * @params address {string} 事件发生地址
 * @params submitUnit {EventUnitCommonType} 报送单位
 * @params unit {EventUnitCommonType} 事件归属单位
 * @params source {EventSourceCommonType} 事件源
 * @params extension {string} 扩展字段，用于项目中存放额外的信息
 * @params longitude {number} 事件发生地址经度
 * @params latitude {number} 事件发生地址纬度
 * @params expectStartedTime {string} 事件预期开始时间
 * @params expectFinishedTime {string} 事件预期结束时间
 * @params isMock {boolean} 是否为模拟事件
 * @params areaCode {string} 行政区域码
 * @params responseLevel {EventResponseLevelCommonType} 响应等级
 * @params principal {PersonInfoCommonType[]} 负责人
 * @params disposer {PersonInfoCommonType[]} 处置人
 * @params disposalInstruction {string} 处置说明
 * @params notifyType {EventNotifyTypeCommonType} 通知方式
 * @params associatePreplanId {string} 关联预案ID
 * @params isAudited {boolean} 是否已审核
 */
type ImportEventCommonType = {
    priority?: EventPriorityCommonType;
    resourceId: string;
    platformId?: string;
    typeId: string;
    createdTime?: string;
    totalTaskCount?: number;
    noStatedTaskCount?: number;
    finishedTaskCount?: number;
    confirmedTaskCount?: number;
    inProcessTaskCount?: number;
    pausedTaskCount?: number;
    state?: number;
    name: string;
    description?: string;
    groupId?: string;
    sceneGroupId?: string;
    happenedTime?: string;
    address?: string;
    submitUnit?: EventUnitCommonType;
    unit?: EventUnitCommonType;
    source?: EventSourceCommonType;
    extension?: string;
    longitude?: number;
    latitude?: number;
    expectStartedTime?: string;
    expectFinishedTime?: string;
    isMock?: boolean;
    areaCode?: string;
    responseLevel?: EventResponseLevelCommonType;
    principal?: PersonInfoCommonType[];
    disposer?: PersonInfoCommonType[];
    disposalInstruction?: string;
    notifyType?: EventNotifyTypeCommonType;
    associatePreplanId?: string;
    isAudited?: boolean;
};

/**
 * 事件导入请求
 * @params importEvents {ImportEventCommonType[]} 事件
 */
type ImportEventRequestCommonType = {
    importEvents: ImportEventCommonType[];
};

/**
 * 事件类型信息
 * @params description {string} 事件类型描述
 * @params id {string} ID
 * @params name {string} 名称
 */
type EventTypeInfoCommonType = {
    description?: string;
    id?: string;
    name?: string;
};

/**
 * 事件类型组信息
 * @params description {string} 事件类型描述
 * @params id {string} ID
 * @params name {string} 名称
 */
type EventTypeGroupInfoCommonType = {
    description?: string;
    id?: string;
    name?: string;
};

/**
 * 事件类型组
 * @params id {string} 事件类型组 Id
 * @params name {string} 事件类型组名
 * @params description {string} 事件类型组描述
 * @params parentId {string} 父级事件类型组 Id
 * @params eventTypes {EventTypeInfoCommonType[]} 事件类型
 * @params childEventTypeGroupInfos {EventTypeGroupInfoCommonType[]} 子事件类型组
 * @params extension {string} 扩展
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 */
type EventTypeGroupOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
    parentId?: string;
    eventTypes?: EventTypeInfoCommonType[];
    childEventTypeGroupInfos?: EventTypeGroupInfoCommonType[];
    extension?: string;
    platformId?: string;
    resourceId?: string;
};

/**
 * 事件类型组
 * @params name {string} 事件类型组名
 * @params description {string} 事件类型组描述
 * @params extension {string} 扩展
 */
type EventTypeGroupInCommonType = {
    name: string;
    description?: string;
    extension?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {EventTypeGroupOutCommonType[]} 数据记录
 */
type EventTypeGroupOutReqCommonType = {
    totalCount?: number;
    records?: EventTypeGroupOutCommonType[];
};

/**
 * 事件类型
 * @params id {string} 事件类型 Id
 * @params name {string} 事件类型名称
 * @params description {string} 事件类型描述
 * @params value {number} 事件类型值
 * @params isEffective {boolean} 事件类型是否有效
 * @params code {string} 事件类型编码
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 */
type EventTypeOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
    value?: number;
    isEffective?: boolean;
    code?: string;
    platformId?: string;
    resourceId?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {EventTypeOutCommonType[]} 数据记录
 */
type EventTypeOutReqCommonType = {
    totalCount?: number;
    records?: EventTypeOutCommonType[];
};

/**
 * 事件类型组和事件类型返回对象
 * @params id {string} id标识
 * @params name {string} 名称
 * @params idPath {string} id路径
 * @params namePath {string} 名称路径
 */
type EventTypeTreeNodeOutCommonType = {
    id?: string;
    name?: string;
    idPath?: string;
    namePath?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {EventTypeTreeNodeOutCommonType[]} 数据记录
 */
type EventTypeTreeNodeOutReqCommonType = {
    totalCount?: number;
    records?: EventTypeTreeNodeOutCommonType[];
};

/**
 * 事件类型和事件类型组搜索返回对象
 * @params eventTypeGroups {EventTypeTreeNodeOutReqCommonType} 事件类型组
 * @params eventTypes {EventTypeTreeNodeOutReqCommonType} 事件类型
 */
type EventTypeTreeOutCommonType = {
    eventTypeGroups?: EventTypeTreeNodeOutReqCommonType;
    eventTypes?: EventTypeTreeNodeOutReqCommonType;
};

/**
 * 事件类型组数据
 * @params name {string} 事件类型组名
 * @params description {string} 事件类型组描述
 * @params extension {string} 扩展
 * @params resourceId {string} 外部资源唯一Id
 * @params parentId {string} 事件组父ResourceId
 * @params platformId {string} 平台来源ID
 */
type ImportEventTypeGroupCommonType = {
    name: string;
    description?: string;
    extension?: string;
    resourceId: string;
    parentId?: string;
    platformId?: string;
};

/**
 *
 * @params importEventTypeGroups {ImportEventTypeGroupCommonType[]} 事件类型组
 */
type ImportEventTypeGroupRequestCommonType = {
    importEventTypeGroups?: ImportEventTypeGroupCommonType[];
};

/**
 * 事件类型组选中筛选
 * @params parentId {string} 父级ID
 * @params selectedIds {any[]} 选择中Id
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量
 */
type EventTypeGroupSelectRequestCommonType = {
    parentId?: string;
    selectedIds?: any[];
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 使用状态
 */
type UseStatusCommonType = 0 | 1 | 2;

/**
 * 事件类型组选中输出
 * @params useStatus {UseStatusCommonType} 使用状态
 * @params isLeaf {boolean} 是否叶子（最后一级）
 * @params isLeafGroup {boolean} 是否叶子组（最后一级子组）
 * @params id {string} 事件类型组 Id
 * @params name {string} 事件类型组名
 * @params description {string} 事件类型组描述
 * @params parentId {string} 父级事件类型组 Id
 * @params eventTypes {EventTypeInfoCommonType[]} 事件类型
 * @params childEventTypeGroupInfos {EventTypeGroupInfoCommonType[]} 子事件类型组
 * @params extension {string} 扩展
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 */
type EventTypeGroupUseStatusOutCommonType = {
    useStatus?: UseStatusCommonType;
    isLeaf?: boolean;
    isLeafGroup?: boolean;
    id?: string;
    name?: string;
    description?: string;
    parentId?: string;
    eventTypes?: EventTypeInfoCommonType[];
    childEventTypeGroupInfos?: EventTypeGroupInfoCommonType[];
    extension?: string;
    platformId?: string;
    resourceId?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {EventTypeGroupUseStatusOutCommonType[]} 数据记录
 */
type EventTypeGroupUseStatusOutReqCommonType = {
    totalCount?: number;
    records?: EventTypeGroupUseStatusOutCommonType[];
};

/**
 * 事件类型组合并请求
 * @params ids {any[]} 事件类型ID
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量
 */
type EventTypeGroupMergeRequestCommonType = {
    ids?: any[];
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 事件类型(组)节点
 * @params idPath {string} ID路径
 * @params namePath {string} 名称路径
 * @params isLeaf {boolean} 是否叶子节点
 * @params parentId {string} 父级ID
 * @params isEventTypeGroup {boolean} 是否事件类型组
 * @params isLeafGroup {boolean} 是否叶子组
 * @params id {string} ID
 * @params name {string} 名称
 */
type EventTypeGroupNodeOutCommonType = {
    idPath?: string;
    namePath?: string;
    isLeaf?: boolean;
    parentId?: string;
    isEventTypeGroup?: boolean;
    isLeafGroup?: boolean;
    id?: string;
    name?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {EventTypeGroupNodeOutCommonType[]} 数据记录
 */
type EventTypeGroupNodeOutReqCommonType = {
    totalCount?: number;
    records?: EventTypeGroupNodeOutCommonType[];
};

/**
 * 事件类型组搜索
 * @params ids {any[]} 事件类型组ID集合
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量
 */
type EventTypeGroupSearchRequestCommonType = {
    ids?: any[];
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 事件类型
 * @params name {string} 事件类型名称
 * @params description {string} 事件类型详情
 * @params value {number} 事件类型值
 * @params code {string} 事件类型编码
 */
type EventTypeInCommonType = {
    name: string;
    description?: string;
    value: number;
    code?: string;
};

/**
 * Id Name全路径的出参
 * @params idPath {string} ID的路径
 * @params namePath {string} 名称的路径
 */
type IdNamePathOutCommonType = {
    idPath?: string;
    namePath?: string;
};

/**
 * 事件类型Id集合查询
 * @params ids {any[]} 事件类型ID查询
 */
type EventTypeIdsRequestCommonType = {
    ids: any[];
};

/**
 * 导入事件类型
 * @params catalog {string} 事件类型组
 * @params grouping {string} 子事件类型组
 * @params type {any[]} 事件类型
 * @params resourceId {string} 资源Id
 */
type GroupingItemCommonType = {
    catalog?: string;
    grouping?: string;
    type?: any[];
    resourceId?: string;
};

/**
 * 事件类型导入请求
 * @params groupingItems {GroupingItemCommonType[]} 事件类型
 */
type EventTypeImportRequestCommonType = {
    groupingItems?: GroupingItemCommonType[];
};

/**
 * 事件类型导出
 * @params groupId {string} 事件类型组ID
 * @params name {string} 事件类型名称
 * @params description {string} 事件类型描述
 * @params value {number} 事件类型值
 * @params isEffective {boolean} 事件类型是否可用
 * @params code {string} 事件类型编码
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params id {string} 主键ID
 */
type EventTypeExportCommonType = {
    groupId?: string;
    name?: string;
    description?: string;
    value?: number;
    isEffective?: boolean;
    code?: string;
    platformId?: string;
    resourceId?: string;
    id?: string;
};

/**
 * 事件类型组导出
 * @params id {string} id
 * @params name {string} 事件类型名称
 * @params description {string} 事件类型描述
 * @params parentId {string} 父级事件类型组 Id
 * @params extension {string} 扩展
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 */
type EventTypeGroupExportCommonType = {
    id?: string;
    name?: string;
    description?: string;
    parentId?: string;
    extension?: string;
    platformId?: string;
    resourceId?: string;
};

/**
 * 事件类型导出数据
 * @params eventType {EventTypeExportCommonType[]} 事件类型
 * @params eventTypeGroup {EventTypeGroupExportCommonType[]} 事件类型组
 */
type ExportEventTypeResultCommonType = {
    eventType?: EventTypeExportCommonType[];
    eventTypeGroup?: EventTypeGroupExportCommonType[];
};

/**
 * 资源信息
 * @params name {string} 资源名称
 * @params distance {number} 资源匹配的最大距离
 */
type ResourceCommonType = {
    name?: string;
    distance?: number;
};

/**
 * 任务模板简略信息
 * @params id {string} ID
 * @params name {string} 名称
 */
type TaskTemplateInfoCommonType = {
    id?: string;
    name?: string;
};

/**
 * 响应级别
 * @params id {string} 响应级别的 Id
 * @params name {string} 响应等级名称
 * @params content {string} 响应内容
 * @params condition {string} 响应条件
 */
type ResponseLevelCommonType = {
    id?: string;
    name?: string;
    content?: string;
    condition?: string;
};

/**
 * 监控标签
 * @params id {number} 标签Id
 * @params name {string} 标签名
 */
type CameraLabelCommonType = {
    id?: number;
    name?: string;
};

/**
 * 视频会议终端
 * @params id {string} 视频会议终端Id
 * @params name {string} 视频会议终端名
 */
type VideoConferenceTerminalCommonType = {
    id?: string;
    name?: string;
};

/**
 * 业务系统
 * @params id {string} id
 * @params name {string} 名字
 */
type ThirdPlatformCommonType = {
    id?: string;
    name?: string;
};

/**
 * 预案数据
 * @params id {string} 预案ID
 * @params name {string} 预案名称
 * @params eventType {EventTypeInfoCommonType} 适用于哪种事件类型ID
 * @params areaCode {string} 区域码
 * @params eventPriority {number} 适用于哪种事件优先级
 * @params eventAffectRadius {number} 事件影响半径
 * @params dangerousSources {ResourceCommonType[]} 危险源
 * @params keyProtections {ResourceCommonType[]} 重点防护目标
 * @params shelters {ResourceCommonType[]} 避难场所
 * @params warehouses {ResourceCommonType[]} 仓库
 * @params emergencyFacilities {ResourceCommonType[]} 应急设备
 * @params manpowerResources {ResourceCommonType[]} 人力资源
 * @params medicalResources {ResourceCommonType[]} 医疗资源
 * @params pollutionSources {ResourceCommonType[]} 污染源
 * @params textTemplate {string} 文本模板
 * @params sceneParameters {any[]} 情景参数
 * @params directoryRecordId {string} 预案文档储存文件夹ID
 * @params taskTemplate {TaskTemplateInfoCommonType} 关联的任务模板
 * @params associatedGroup {GroupInfoCommonType} 关联的指挥组
 * @params sceneGroup {GroupInfoCommonType} 关联的现场指挥组
 * @params firstResponseLevel {ResponseLevelCommonType} 一级响应级别
 * @params secondResponseLevel {ResponseLevelCommonType} 二级响应级别
 * @params thirdResponseLevel {ResponseLevelCommonType} 三级响应级别
 * @params fourthResponseLevel {ResponseLevelCommonType} 四级响应级别
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params cameraLabels {CameraLabelCommonType[]} 监控标签
 * @params preplanGroups {GroupInfoCommonType[]} 预案组
 * @params videoConferenceTerminals {VideoConferenceTerminalCommonType[]} 视频会议终端
 * @params thirdPlatforms {ThirdPlatformCommonType[]} 业务系统
 * @params customResources {any} 自定义类型
 */
type PreplanOutCommonType = {
    id?: string;
    name?: string;
    eventType?: EventTypeInfoCommonType;
    areaCode?: string;
    eventPriority?: number;
    eventAffectRadius?: number;
    dangerousSources?: ResourceCommonType[];
    keyProtections?: ResourceCommonType[];
    shelters?: ResourceCommonType[];
    warehouses?: ResourceCommonType[];
    emergencyFacilities?: ResourceCommonType[];
    manpowerResources?: ResourceCommonType[];
    medicalResources?: ResourceCommonType[];
    pollutionSources?: ResourceCommonType[];
    textTemplate?: string;
    sceneParameters?: any[];
    directoryRecordId?: string;
    taskTemplate?: TaskTemplateInfoCommonType;
    associatedGroup?: GroupInfoCommonType;
    sceneGroup?: GroupInfoCommonType;
    firstResponseLevel?: ResponseLevelCommonType;
    secondResponseLevel?: ResponseLevelCommonType;
    thirdResponseLevel?: ResponseLevelCommonType;
    fourthResponseLevel?: ResponseLevelCommonType;
    platformId?: string;
    resourceId?: string;
    cameraLabels?: CameraLabelCommonType[];
    preplanGroups?: GroupInfoCommonType[];
    videoConferenceTerminals?: VideoConferenceTerminalCommonType[];
    thirdPlatforms?: ThirdPlatformCommonType[];
    customResources?: any;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {PreplanOutCommonType[]} 数据记录
 */
type PreplanOutReqCommonType = {
    totalCount?: number;
    records?: PreplanOutCommonType[];
};

/**
 * 响应级别
 * @params name {string} 响应等级名称
 * @params content {string} 响应内容
 * @params condition {string} 响应条件
 */
type ResponseLevelInCommonType = {
    name?: string;
    content?: string;
    condition?: string;
};

/**
 * 预案
 * @params name {string} 预案名称
 * @params eventPriority {number} 适用于哪种事件优先级
 * @params areaCode {string} 区域码
 * @params eventAffectRadius {number} 事件影响半径
 * @params dangerousSources {ResourceCommonType[]} 危险源
 * @params keyProtections {ResourceCommonType[]} 重点防护目标
 * @params shelters {ResourceCommonType[]} 避难场所
 * @params warehouses {ResourceCommonType[]} 仓库
 * @params emergencyFacilities {ResourceCommonType[]} 应急设备
 * @params manpowerResources {ResourceCommonType[]} 人力资源
 * @params medicalResources {ResourceCommonType[]} 医疗资源
 * @params pollutionSources {ResourceCommonType[]} 污染源
 * @params textTemplate {string} 文本模板
 * @params sceneParameters {any[]} 情景参数
 * @params directoryRecordId {string} 预案文档储存文件夹ID
 * @params taskTemplateId {string} 关联的任务模板Id
 * @params associatedGroup {GroupInfoCommonType} 关联的指挥组
 * @params sceneGroup {GroupInfoCommonType} 关联的现场指挥组
 * @params firstResponseLevel {ResponseLevelInCommonType} 一级响应级别
 * @params secondResponseLevel {ResponseLevelInCommonType} 二级响应级别
 * @params thirdResponseLevel {ResponseLevelInCommonType} 三级响应级别
 * @params fourthResponseLevel {ResponseLevelInCommonType} 四级响应级别
 * @params cameraLabels {CameraLabelCommonType[]} 监控标签
 * @params preplanGroups {GroupInfoCommonType[]} 预案组
 * @params videoConferenceTerminals {VideoConferenceTerminalCommonType[]} 视频会议终端
 * @params thirdPlatforms {ThirdPlatformCommonType[]} 业务系统
 * @params customResources {any} 自定义类型
 */
type PreplanInCommonType = {
    name?: string;
    eventPriority?: number;
    areaCode?: string;
    eventAffectRadius?: number;
    dangerousSources?: ResourceCommonType[];
    keyProtections?: ResourceCommonType[];
    shelters?: ResourceCommonType[];
    warehouses?: ResourceCommonType[];
    emergencyFacilities?: ResourceCommonType[];
    manpowerResources?: ResourceCommonType[];
    medicalResources?: ResourceCommonType[];
    pollutionSources?: ResourceCommonType[];
    textTemplate?: string;
    sceneParameters?: any[];
    directoryRecordId?: string;
    taskTemplateId?: string;
    associatedGroup?: GroupInfoCommonType;
    sceneGroup?: GroupInfoCommonType;
    firstResponseLevel?: ResponseLevelInCommonType;
    secondResponseLevel?: ResponseLevelInCommonType;
    thirdResponseLevel?: ResponseLevelInCommonType;
    fourthResponseLevel?: ResponseLevelInCommonType;
    cameraLabels?: CameraLabelCommonType[];
    preplanGroups?: GroupInfoCommonType[];
    videoConferenceTerminals?: VideoConferenceTerminalCommonType[];
    thirdPlatforms?: ThirdPlatformCommonType[];
    customResources?: any;
};

/**
 * 预案ID批量查询
 * @params ids {any[]} ID/ResourceID集合
 */
type PreplanIdsQueryRequestCommonType = {
    ids: any[];
};

/**
 * 响应级别导入实体
 * @params id {string} 响应级别的 Id
 * @params name {string} 响应等级名称
 * @params content {string} 响应内容
 * @params condition {string} 响应条件
 */
type ImportResponseLevelCommonType = {
    id?: string;
    name?: string;
    content?: string;
    condition?: string;
};

/**
 * 预案导入单元
 * @params resourceId {string} ResourceId
 * @params name {string} 预案名称
 * @params eventPriority {number} 适用于哪种事件优先级
 * @params eventTypeId {string} 事件类型ID
 * @params areaCode {string} 区域码
 * @params eventAffectRadius {number} 事件影响半径
 * @params dangerousSources {ResourceCommonType[]} 危险源
 * @params keyProtections {ResourceCommonType[]} 重点防护目标
 * @params shelters {ResourceCommonType[]} 避难场所
 * @params warehouses {ResourceCommonType[]} 仓库
 * @params emergencyFacilities {ResourceCommonType[]} 应急设备
 * @params manpowerResources {ResourceCommonType[]} 人力资源
 * @params medicalResources {ResourceCommonType[]} 医疗资源
 * @params pollutionSources {ResourceCommonType[]} 污染源
 * @params textTemplate {string} 文本模板
 * @params sceneParameters {any[]} 情景参数
 * @params directoryRecordId {string} 预案文档储存文件夹ID
 * @params taskTemplateId {string} 关联的任务模板Id
 * @params associatedGroup {GroupInfoCommonType} 关联的指挥组
 * @params sceneGroup {GroupInfoCommonType} 关联的现场指挥组
 * @params firstResponseLevel {ImportResponseLevelCommonType} 一级响应级别
 * @params secondResponseLevel {ImportResponseLevelCommonType} 二级响应级别
 * @params thirdResponseLevel {ImportResponseLevelCommonType} 三级响应级别
 * @params fourthResponseLevel {ImportResponseLevelCommonType} 四级响应级别
 * @params cameraLabels {CameraLabelCommonType[]} 监控标签
 * @params preplanGroups {GroupInfoCommonType[]} 预案组
 * @params videoConferenceTerminals {VideoConferenceTerminalCommonType[]} 视频会议终端
 * @params thirdPlatforms {ThirdPlatformCommonType[]} 业务系统
 * @params customResources {any} 自定义类型
 * @params platformId {string} PlatformId
 */
type PreplanItemCommonType = {
    resourceId: string;
    name?: string;
    eventPriority?: number;
    eventTypeId?: string;
    areaCode?: string;
    eventAffectRadius?: number;
    dangerousSources?: ResourceCommonType[];
    keyProtections?: ResourceCommonType[];
    shelters?: ResourceCommonType[];
    warehouses?: ResourceCommonType[];
    emergencyFacilities?: ResourceCommonType[];
    manpowerResources?: ResourceCommonType[];
    medicalResources?: ResourceCommonType[];
    pollutionSources?: ResourceCommonType[];
    textTemplate?: string;
    sceneParameters?: any[];
    directoryRecordId?: string;
    taskTemplateId?: string;
    associatedGroup?: GroupInfoCommonType;
    sceneGroup?: GroupInfoCommonType;
    firstResponseLevel?: ImportResponseLevelCommonType;
    secondResponseLevel?: ImportResponseLevelCommonType;
    thirdResponseLevel?: ImportResponseLevelCommonType;
    fourthResponseLevel?: ImportResponseLevelCommonType;
    cameraLabels?: CameraLabelCommonType[];
    preplanGroups?: GroupInfoCommonType[];
    videoConferenceTerminals?: VideoConferenceTerminalCommonType[];
    thirdPlatforms?: ThirdPlatformCommonType[];
    customResources?: any;
    platformId?: string;
};

/**
 * 预案导入请求
 * @params preplanItems {PreplanItemCommonType[]} 预案导入集合
 */
type ImportPreplanRequestCommonType = {
    preplanItems: PreplanItemCommonType[];
};

/**
 * 推荐预案查询入参
 * @params eventTypeId {string} 事件类型ID,Empty为所有类型
 * @params eventPriority {number} 事件优先级值,Empty为所有类型
 * @params areaCode {string} 区域码，Empty为所有
 * @params prefixAreaCodes {any[]} 区域码前缀集合，集合不空，以该集合为准，配合“IsContainCurrentAreCodePreplan”
 * @params isMatchNullAreaCode {boolean} 是否匹配空区域码的预案
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量
 */
type PagePreplanRecommendQueryRequestCommonType = {
    eventTypeId?: string;
    eventPriority?: number;
    areaCode?: string;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 预案基本实体输出
 * @params id {string} 预案ID
 * @params name {string} 预案名称
 * @params eventType {EventTypeInfoCommonType} 适用于哪种事件类型ID
 * @params eventPriority {number} 适用于哪种事件优先级
 * @params areaCode {string} 行政区域码
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 */
type PreplanBaseOutCommonType = {
    id?: string;
    name?: string;
    eventType?: EventTypeInfoCommonType;
    eventPriority?: number;
    areaCode?: string;
    platformId?: string;
    resourceId?: string;
};

/**
 * 预案分组数据输出实体
 * @params recommendsData {PreplanBaseOutCommonType[]} 推荐预案列表
 * @params othersData {PreplanBaseOutCommonType[]} 其他预案列表
 */
type PreplanGroupingOutCommonType = {
    recommendsData?: PreplanBaseOutCommonType[];
    othersData?: PreplanBaseOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {PreplanGroupingOutCommonType} 记录
 */
type PreplanGroupingOutReqCommonType = {
    totalCount?: number;
    records?: PreplanGroupingOutCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {TaskFeedbackOutCommonType[]} 数据记录
 */
type TaskFeedbackOutReqCommonType = {
    totalCount?: number;
    records?: TaskFeedbackOutCommonType[];
};

/**
 * 任务反馈
 * @params content {string} 任务反馈内容
 * @params fileGroupId {string} 文件组Id
 */
type TaskFeedbackInCommonType = {
    content: string;
    fileGroupId?: string;
};

/**
 * 任务反馈导入单元
 * @params resourceId {string} ResourceId
 * @params taskId {string} 任务 Id
 * @params taskName {string} 任务名
 * @params taskState {TaskStateCommonType} 任务状态
 * @params user {UserInfoCommonType} 用户
 * @params group {GroupInfoCommonType} 该任务的组信息
 * @params content {string} 反馈内容
 * @params createdTime {string} 创建时间
 * @params extension {string} 扩展信息
 * @params platformId {string} 平台来源ID
 * @params type {TaskFeedbackEntityTypeCommonType} 任务反馈类型
 */
type TaskFeedbackItemCommonType = {
    resourceId: string;
    taskId: string;
    taskName?: string;
    taskState?: TaskStateCommonType;
    user?: UserInfoCommonType;
    group?: GroupInfoCommonType;
    content?: string;
    createdTime?: string;
    extension?: string;
    platformId?: string;
    type?: TaskFeedbackEntityTypeCommonType;
};

/**
 * 任务反馈导入请求
 * @params taskFeedbackItems {TaskFeedbackItemCommonType[]} 任务反馈导入集合
 */
type ImportTaskFeedbackRequestCommonType = {
    taskFeedbackItems: TaskFeedbackItemCommonType[];
};

/**
* 任务类型 <br /><remarks>
1-类型1 <br />
2-类型2 <br />
4-类型3 <br />
8-类型4
</remarks>
*/
type TaskTypeCommonType = 1 | 2 | 4 | 8;

/**
 * 任务目的地
 * @params name {string} 目的地名
 * @params longitude {string} 目的地经度
 * @params latitude {string} 目的地纬度
 */
type TaskDestinationCommonType = {
    name?: string;
    longitude?: string;
    latitude?: string;
};

/**
 * 任务
 * @params id {string} 任务Id
 * @params name {string} 任务名
 * @params description {string} 任务详情
 * @params associateEventId {string} 任务关联事件
 * @params parentId {string} 父任务 Id
 * @params type {TaskTypeCommonType} 任务类型
 * @params state {TaskStateCommonType} 任务状态
 * @params group {GroupInfoCommonType} 组对象
 * @params groupMembers {UserInfoCommonType[]} 任务组成员
 * @params destination {TaskDestinationCommonType} 任务目的地
 * @params expectStartedTime {string} 预计开始时间
 * @params actualStartedTime {string} 实际开始时间
 * @params expectFinishedTime {string} 预计结束时间
 * @params actualFinishedTime {string} 实际结束时间
 * @params createdTime {string} 任务创建时间
 * @params order {number} 任务顺序
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params updateTime {string} 最新修改时间
 */
type TaskEntityOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
    associateEventId?: string;
    parentId?: string;
    type?: TaskTypeCommonType;
    state?: TaskStateCommonType;
    group?: GroupInfoCommonType;
    groupMembers?: UserInfoCommonType[];
    destination?: TaskDestinationCommonType;
    expectStartedTime?: string;
    actualStartedTime?: string;
    expectFinishedTime?: string;
    actualFinishedTime?: string;
    createdTime?: string;
    order?: number;
    platformId?: string;
    resourceId?: string;
    updateTime?: string;
};

/**
 * 任务
 * @params name {string} 任务名
 * @params description {string} 任务描述
 * @params groupId {string} 组Id
 * @params destination {TaskDestinationCommonType} 任务目的地
 * @params expectStartedTime {string} 预计开始时间
 * @params expectFinishedTime {string} 预计结束时间
 */
type TaskEntityInCommonType = {
    name: string;
    description?: string;
    groupId?: string;
    destination?: TaskDestinationCommonType;
    expectStartedTime?: string;
    expectFinishedTime?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {TaskEntityOutCommonType[]} 数据记录
 */
type TaskEntityOutReqCommonType = {
    totalCount?: number;
    records?: TaskEntityOutCommonType[];
};

/**
 * 任务数据
 * @params resourceId {string} 资源ID
 * @params name {string} 任务名称
 * @params description {string} 任务详情
 * @params state {TaskStateCommonType} 任务状态
 * @params parentId {string} 父任务Id
 * @params associateEventId {string} 任务关联事件
 * @params destination {TaskDestinationCommonType} 任务目的地
 * @params groupId {string} 组Id
 * @params createdTime {string} 创建时间
 * @params expectStartedTime {string} 预期开始时间
 * @params actualStartedTime {string} 实际开始时间
 * @params expectFinishedTime {string} 预期结束时间
 * @params actualFinishedTime {string} 实际结束时间
 * @params platformId {string} 平台来源ID
 */
type ImportTaskCommonType = {
    resourceId: string;
    name?: string;
    description?: string;
    state?: TaskStateCommonType;
    parentId?: string;
    associateEventId?: string;
    destination?: TaskDestinationCommonType;
    groupId?: string;
    createdTime?: string;
    expectStartedTime?: string;
    actualStartedTime?: string;
    expectFinishedTime?: string;
    actualFinishedTime?: string;
    platformId?: string;
};

/**
 * 事件导入请求
 * @params importTasks {ImportTaskCommonType[]} 任务
 */
type ImportTaskRequestCommonType = {
    importTasks: ImportTaskCommonType[];
};

/**
 * 任务排序信息
 * @params taskId {string} 任务 Id
 * @params parentTaskId {string} 父任务 Id
 * @params taskOrder {string} 任务序号
 */
type TaskOrderInfoInCommonType = {
    taskId: string;
    parentTaskId?: string;
    taskOrder: string;
};

/**
 * 更新任务的顺序请求参数
 * @params taskOrderInfos {TaskOrderInfoInCommonType[]} 任务排序的信息
 */
type TaskOrderInCommonType = {
    taskOrderInfos: TaskOrderInfoInCommonType[];
};

/**
 * 任务模板信息
 * @params name {string} 任务名称
 * @params description {string} 任务描述
 * @params groupId {string} 组 Id
 * @params expectStartTime {string} 期望开始时间
 * @params expectEndTime {string} 期望结束时间
 * @params childTaskTempInfos {TaskTempInfoCommonType[]} 子任务模板
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 */
type TaskTempInfoCommonType = {
    name?: string;
    description?: string;
    groupId?: string;
    expectStartTime?: string;
    expectEndTime?: string;
    childTaskTempInfos?: TaskTempInfoCommonType[];
    platformId?: string;
    resourceId?: string;
};

/**
 * 任务模板信息返回
 * @params name {string} 任务名称
 * @params description {string} 任务描述
 * @params group {GroupInfoCommonType} 组
 * @params expectStartTime {string} 期望开始时间
 * @params expectEndTime {string} 期望结束时间
 * @params childTaskTempInfos {TaskTempInfoCommonType[]} 子任务模板
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 */
type TaskTempInfoOutCommonType = {
    name?: string;
    description?: string;
    group?: GroupInfoCommonType;
    expectStartTime?: string;
    expectEndTime?: string;
    childTaskTempInfos?: TaskTempInfoCommonType[];
    platformId?: string;
    resourceId?: string;
};

/**
 * 任务模板
 * @params id {string} 模板Id
 * @params name {string} 模板名称
 * @params description {string} 任务模板描述
 * @params parentTaskTempInfos {TaskTempInfoOutCommonType[]} 任务模板信息
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 */
type TaskTempOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
    parentTaskTempInfos?: TaskTempInfoOutCommonType[];
    platformId?: string;
    resourceId?: string;
};

/**
 * 任务模板
 * @params name {string} 任务名称
 * @params description {string} 任务详情
 * @params parentTaskTempInfos {TaskTempInfoCommonType[]} 任务模板信息
 */
type TaskTempInCommonType = {
    name: string;
    description?: string;
    parentTaskTempInfos?: TaskTempInfoCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {TaskTempOutCommonType[]} 数据记录
 */
type TaskTempOutReqCommonType = {
    totalCount?: number;
    records?: TaskTempOutCommonType[];
};

/**
 * 任务模板导入实体
 * @params id {string} id
 * @params createdTime {string} 模板创建时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params name {string} 任务名称
 * @params description {string} 任务详情
 * @params parentTaskTempInfos {TaskTempInfoCommonType[]} 任务模板信息
 */
type ImportTaskTemplateInCommonType = {
    id?: string;
    createdTime?: string;
    platformId?: string;
    resourceId?: string;
    name: string;
    description?: string;
    parentTaskTempInfos?: TaskTempInfoCommonType[];
};

/**
 * 任务模板导入请求
 * @params taskTemplates {ImportTaskTemplateInCommonType[]} 导入任务模板列表
 */
type ImportTaskTemplateModelCommonType = {
    taskTemplates?: ImportTaskTemplateInCommonType[];
};

type UpLeftCommonType = {
    longitude: number;
    latitude: number;
};

type BottomRightCommonType = {
    longitude: number;
    latitude: number;
};

----

/**
 * 获取事件关联的通话数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetCommunicationsReqType = {
    eventId: string;
    'X-version'?: string;
};

/**
 * 获取事件关联的通话数据——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {CommunicationDataOutCommonType[]} 数据记录
 */
export type GetCommunicationsResType = {
    totalCount: number;
    records: CommunicationDataOutCommonType[];
};

/**
 * 关联通话数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 * @params communicationId {string} 通话信息Id （必填）
 * @params callerName {string} 主叫名称
 * @params callerNumber {string} 主叫号码
 * @params calledName {string} 被叫名称
 * @params calledNumber {string} 被叫号码
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params hasAnswered {boolean} 是否接听
 * @params type {CallRecordTypeCommonType} 通话记录类型 1-普通通话 2-队列通话 4-会议通话 8-广播通话 16-视频会议通话 32-录音通知通话
 * @params recordId {string} 录音文件 Id
 * @params logId {string} 唯一记录id
 * @params duration {number} 时长
 */
export type ConnectCommunicationsReqType = {
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
    type?: CallRecordTypeCommonType;
    recordId?: string;
    logId?: string;
    duration?: number;
};

/**
 * 关联通话数据——响应参数类型定义
 * @params communicationId {string} 通话信息Id
 * @params callerName {string} 主叫名称
 * @params callerNumber {string} 主叫号码
 * @params calledName {string} 被叫名称
 * @params calledNumber {string} 被叫号码
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params hasAnswered {boolean} 是否接听
 * @params taskInfos {TaskInfoCommonType[]} 任务基本信息
 * @params type {CallRecordTypeCommonType} 通话记录类型 1-普通通话 2-队列通话 4-会议通话 8-广播通话 16-视频会议通话 32-录音通知通话
 * @params recordId {string} 录音记录 Id
 * @params fileRecord {FileRecordCommonType} 录音通知文件记录
 * @params logId {string} 唯一记录id
 * @params duration {number} 时长
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
export type ConnectCommunicationsResType = {
    communicationId: string;
    callerName: string;
    callerNumber: string;
    calledName: string;
    calledNumber: string;
    startTime: string;
    endTime: string;
    hasAnswered: boolean;
    taskInfos: TaskInfoCommonType[];
    type: CallRecordTypeCommonType;
    recordId: string;
    fileRecord: FileRecordCommonType;
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
 * 根据Id获取通话项——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetCommunicationsByIdReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 根据Id获取通话项——响应参数类型定义
 * @params communicationId {string} 通话信息Id
 * @params callerName {string} 主叫名称
 * @params callerNumber {string} 主叫号码
 * @params calledName {string} 被叫名称
 * @params calledNumber {string} 被叫号码
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params hasAnswered {boolean} 是否接听
 * @params taskInfos {TaskInfoCommonType[]} 任务基本信息
 * @params type {CallRecordTypeCommonType} 通话记录类型 1-普通通话 2-队列通话 4-会议通话 8-广播通话 16-视频会议通话 32-录音通知通话
 * @params recordId {string} 录音记录 Id
 * @params fileRecord {FileRecordCommonType} 录音通知文件记录
 * @params logId {string} 唯一记录id
 * @params duration {number} 时长
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
export type GetCommunicationsByIdResType = {
    communicationId: string;
    callerName: string;
    callerNumber: string;
    calledName: string;
    calledNumber: string;
    startTime: string;
    endTime: string;
    hasAnswered: boolean;
    taskInfos: TaskInfoCommonType[];
    type: CallRecordTypeCommonType;
    recordId: string;
    fileRecord: FileRecordCommonType;
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
 * 取消关联——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type CancelConnectCommunicationsReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 获取事件关联的标绘数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetDrawsReqType = {
    eventId: string;
    'X-version'?: string;
};

/**
 * 获取事件关联的标绘数据——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {DrawDataOutCommonType[]} 数据记录
 */
export type GetDrawsResType = {
    totalCount: number;
    records: DrawDataOutCommonType[];
};

/**
 * 关联标绘数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 * @params drawId {string} 标绘 Id （必填）
 * @params name {string} 标绘名称
 * @params coordinates {string} 标绘坐标点
 * @params type {string} 标绘类型
 * @params markerType {string} 标志类型
 * @params properties {string} 扩展属性
 */
export type ConnectDrawsReqType = {
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
 * 关联标绘数据——响应参数类型定义
 * @params drawId {string} 标绘 Id
 * @params name {string} 标绘名称
 * @params coordinates {string} 标绘坐标点
 * @params type {string} 标绘类型
 * @params markerType {string} 标志类型
 * @params properties {string} 扩展属性
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
export type ConnectDrawsResType = {
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
 * 根据Id获取标绘项——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetDrawsByIdReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 根据Id获取标绘项——响应参数类型定义
 * @params drawId {string} 标绘 Id
 * @params name {string} 标绘名称
 * @params coordinates {string} 标绘坐标点
 * @params type {string} 标绘类型
 * @params markerType {string} 标志类型
 * @params properties {string} 扩展属性
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
export type GetDrawsByIdResType = {
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
 * 取消关联——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type CancelConnectDrawsReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 根据事件 Id 获取对应的事件日志——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetEventLogsReqType = {
    eventId: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 根据事件 Id 获取对应的事件日志——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {EventLogsOutCommonType[]} 数据记录
 */
export type GetEventLogsResType = {
    totalCount: number;
    records: EventLogsOutCommonType[];
};

/**
 * 获取事件关联的传真数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetFaxesReqType = {
    eventId: string;
    'X-version'?: string;
};

/**
 * 获取事件关联的传真数据——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {FaxDataOutCommonType[]} 数据记录
 */
export type GetFaxesResType = {
    totalCount: number;
    records: FaxDataOutCommonType[];
};

/**
 * 关联传真数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 * @params faxId {string} 传真 Id
 * @params faxTitle {string} 传真记录主题
 * @params internationalCode {string} 国际区号
 * @params faxNumber {string} 传真号码
 * @params receiverId {string} 收件人Id
 * @params receiver {string} 收件人
 * @params receiverTitle {string} 收件人职位
 * @params receiveCompany {string} 收件人公司
 * @params senderId {string} 发件人Id
 * @params sender {string} 发件人
 * @params senderTitle {string} 发件人职位
 * @params sendCompany {string} 发件人公司
 * @params status {number} 发送状态
 * @params faxFiles {FaxFileCommonType[]} 文件列表
 */
export type ConnectFaxesReqType = {
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
    faxFiles?: FaxFileCommonType[];
};

/**
 * 关联传真数据——响应参数类型定义
 * @params faxId {string} 传真 Id
 * @params faxTitle {string} 传真记录主题
 * @params internationalCode {string} 国际区号
 * @params faxNumber {string} 传真号码
 * @params receiverId {string} 收件人Id
 * @params receiver {string} 收件人
 * @params receiverTitle {string} 收件人职位
 * @params receiveCompany {string} 收件人公司
 * @params senderId {string} 发件人Id
 * @params sender {string} 发件人
 * @params senderTitle {string} 发件人职位
 * @params sendCompany {string} 发件人公司
 * @params status {number} 发送状态
 * @params faxFiles {FaxFileCommonType[]} 文件列表
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
export type ConnectFaxesResType = {
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
    faxFiles: FaxFileCommonType[];
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * 根据Id获取传真项——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetFaxesByIdReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 根据Id获取传真项——响应参数类型定义
 * @params faxId {string} 传真 Id
 * @params faxTitle {string} 传真记录主题
 * @params internationalCode {string} 国际区号
 * @params faxNumber {string} 传真号码
 * @params receiverId {string} 收件人Id
 * @params receiver {string} 收件人
 * @params receiverTitle {string} 收件人职位
 * @params receiveCompany {string} 收件人公司
 * @params senderId {string} 发件人Id
 * @params sender {string} 发件人
 * @params senderTitle {string} 发件人职位
 * @params sendCompany {string} 发件人公司
 * @params status {number} 发送状态
 * @params faxFiles {FaxFileCommonType[]} 文件列表
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
export type GetFaxesByIdResType = {
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
    faxFiles: FaxFileCommonType[];
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * 取消关联——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type CancelConnectFaxesReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 获取事件关联的文件数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetEtsFilesByEventIdReqType = {
    eventId: string;
    'X-version'?: string;
};

/**
 * 获取事件关联的文件数据——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {FileDataOutCommonType[]} 数据记录
 */
export type GetEtsFilesByEventIdResType = {
    totalCount: number;
    records: FileDataOutCommonType[];
};

/**
 * 关联文件数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 * @params fileRecordID {string} 文件记录ID
 */
export type ConnectFilesReqType = {
    eventId: string;
    'X-version'?: string;
    fileRecordID?: string;
};

/**
 * 关联文件数据——响应参数类型定义
 * @params fileRecordID {string} 文件记录ID
 * @params fileRecord {FileEntityOutCommonType} 文件记录
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
export type ConnectFilesResType = {
    fileRecordID: string;
    fileRecord: FileEntityOutCommonType;
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * 根据Id获取文件项——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetEtsFilesByIdReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 根据Id获取文件项——响应参数类型定义
 * @params fileRecordID {string} 文件记录ID
 * @params fileRecord {FileEntityOutCommonType} 文件记录
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
export type GetEtsFilesByIdResType = {
    fileRecordID: string;
    fileRecord: FileEntityOutCommonType;
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * 取消关联——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type CancelConnectFilesReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 获取事件关联的拍传数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetMultimediatransfersReqType = {
    eventId: string;
    'X-version'?: string;
};

/**
 * 获取事件关联的拍传数据——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {MultimediaTransferDataOutCommonType[]} 数据记录
 */
export type GetMultimediatransfersResType = {
    totalCount: number;
    records: MultimediaTransferDataOutCommonType[];
};

/**
 * 关联拍传数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 * @params recordId {string} 拍传记录Id
 */
export type ConnectMultimediatransfersReqType = {
    eventId: string;
    'X-version'?: string;
    recordId?: string;
};

/**
 * 关联拍传数据——响应参数类型定义
 * @params recordId {string} 拍传记录Id
 * @params multimediaTransferDetail {MultimediaTransferDetailOutCommonType} 拍传详情
 * @params taskInfos {TaskInfoCommonType[]} 任务基本信息
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
export type ConnectMultimediatransfersResType = {
    recordId: string;
    multimediaTransferDetail: MultimediaTransferDetailOutCommonType;
    taskInfos: TaskInfoCommonType[];
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * 根据Id获取拍传项——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetEtsMultimediatransfersByIdReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 根据Id获取拍传项——响应参数类型定义
 * @params recordId {string} 拍传记录Id
 * @params multimediaTransferDetail {MultimediaTransferDetailOutCommonType} 拍传详情
 * @params taskInfos {TaskInfoCommonType[]} 任务基本信息
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
export type GetEtsMultimediatransfersByIdResType = {
    recordId: string;
    multimediaTransferDetail: MultimediaTransferDetailOutCommonType;
    taskInfos: TaskInfoCommonType[];
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * 取消关联——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type CancelConnectMultimediatransfersReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 获取事件关联的图片数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetPicturesReqType = {
    eventId: string;
    'X-version'?: string;
};

/**
 * 获取事件关联的图片数据——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {PictureDataOutCommonType[]} 数据记录
 */
export type GetPicturesResType = {
    totalCount: number;
    records: PictureDataOutCommonType[];
};

/**
 * 关联图片数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 * @params fileRecordID {string} 文件记录ID
 */
export type ConnectPicturesReqType = {
    eventId: string;
    'X-version'?: string;
    fileRecordID?: string;
};

/**
 * 关联图片数据——响应参数类型定义
 * @params fileRecordID {string} 文件记录ID
 * @params fileRecord {FileEntityOutCommonType} 文件记录
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
export type ConnectPicturesResType = {
    fileRecordID: string;
    fileRecord: FileEntityOutCommonType;
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * 根据Id获取图片项——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetPicturesByIdReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 根据Id获取图片项——响应参数类型定义
 * @params fileRecordID {string} 文件记录ID
 * @params fileRecord {FileEntityOutCommonType} 文件记录
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
export type GetPicturesByIdResType = {
    fileRecordID: string;
    fileRecord: FileEntityOutCommonType;
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * 取消关联——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type CancelConnectPicturesReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 获取事件关联的短信消息数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetTextmessagesReqType = {
    eventId: string;
    'X-version'?: string;
};

/**
 * 获取事件关联的短信消息数据——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {TextMessageDataOutCommonType[]} 数据记录
 */
export type GetTextmessagesResType = {
    totalCount: number;
    records: TextMessageDataOutCommonType[];
};

/**
 * 关联短信消息数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 * @params textMessageId {string} 短信 Id
 * @params receiver {string} 短信接收者
 * @params receiverNumber {string} 接收号码
 * @params sender {string} 短信发送者
 * @params senderNumber {string} 发送号码
 * @params content {string} 短信内容
 * @params sendTime {string} 发送时间
 */
export type ConnectTextmessagesReqType = {
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
 * 关联短信消息数据——响应参数类型定义
 * @params textMessageId {string} 短信 Id
 * @params receiver {string} 短信接收者
 * @params receiverNumber {string} 接收号码
 * @params sender {string} 短信发送者
 * @params senderNumber {string} 发送号码
 * @params content {string} 短信内容
 * @params sendTime {string} 发送时间
 * @params taskInfos {TaskInfoCommonType[]} 任务基本信息
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
export type ConnectTextmessagesResType = {
    textMessageId: string;
    receiver: string;
    receiverNumber: string;
    sender: string;
    senderNumber: string;
    content: string;
    sendTime: string;
    taskInfos: TaskInfoCommonType[];
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * 根据Id获取短信消息项——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetTextmessagesByIdReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 根据Id获取短信消息项——响应参数类型定义
 * @params textMessageId {string} 短信 Id
 * @params receiver {string} 短信接收者
 * @params receiverNumber {string} 接收号码
 * @params sender {string} 短信发送者
 * @params senderNumber {string} 发送号码
 * @params content {string} 短信内容
 * @params sendTime {string} 发送时间
 * @params taskInfos {TaskInfoCommonType[]} 任务基本信息
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
export type GetTextmessagesByIdResType = {
    textMessageId: string;
    receiver: string;
    receiverNumber: string;
    sender: string;
    senderNumber: string;
    content: string;
    sendTime: string;
    taskInfos: TaskInfoCommonType[];
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * 取消关联——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type CancelConnectTextmessagesReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 获取事件关联的视频数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type GetVideosReqType = {
    eventId: string;
    'X-version'?: string;
};

/**
 * 获取事件关联的视频数据——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {VideoDataOutCommonType[]} 数据记录
 */
export type GetVideosResType = {
    totalCount: number;
    records: VideoDataOutCommonType[];
};

/**
 * 关联视频数据——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 * @params fileRecordID {string} 文件记录ID
 */
export type ConnectVideosReqType = {
    eventId: string;
    'X-version'?: string;
    fileRecordID?: string;
};

/**
 * 关联视频数据——响应参数类型定义
 * @params fileRecordID {string} 文件记录ID
 * @params fileRecord {FileEntityOutCommonType} 文件记录
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
export type ConnectVideosResType = {
    fileRecordID: string;
    fileRecord: FileEntityOutCommonType;
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * 根据Id获取视频项——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type EtsGetVideosByIdReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 根据Id获取视频项——响应参数类型定义
 * @params fileRecordID {string} 文件记录ID
 * @params fileRecord {FileEntityOutCommonType} 文件记录
 * @params id {string} 数据Id
 * @params eventId {string} 关联事件Id
 * @params eventName {string} 事件名称
 * @params createdTime {string} 创建事件关联时间
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params associtedDataId {string} 数据记录 Id
 */
export type EtsGetVideosByIdResType = {
    fileRecordID: string;
    fileRecord: FileEntityOutCommonType;
    id: string;
    eventId: string;
    eventName: string;
    createdTime: string;
    platformId: string;
    resourceId: string;
    associtedDataId: string;
};

/**
 * 取消关联——请求参数类型定义
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 */
export type CancelConnectVideosReqType = {
    id: string;
    eventId: string;
    'X-version'?: string;
};

/**
 * 创建事件反馈接口——请求参数类型定义
 * @headers X-version {string}
 * @params eventId {string} 事件Id
 * @params title {string} 标题
 * @params content {string} 内容
 * @params fileGroupId {string} 文件组Id
 * @params reporter {string} 反馈人名
 * @params createdTime {string} 创建时间【不传默认当前时间】
 * @params resourceId {string} 外部资源唯一Id
 */
export type AddEventFeedBacksReqType = {
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
 * 创建事件反馈接口——响应参数类型定义
 * @params id {string} 反馈Id
 * @params taskId {string} 任务Id
 * @params taskName {string} 任务名
 * @params taskState {TaskStateCommonType} 任务状态
 * @params content {string} 反馈内容
 * @params createdTime {string} 反馈时间
 * @params user {UserInfoCommonType} 反馈用户
 * @params group {GroupInfoCommonType} 反馈用户的组
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params type {TaskFeedbackEntityTypeCommonType} 任务反馈类型, 1-用户反馈|2-系统反馈
 * @params fileGroupId {string} 文件组Id
 */
export type AddEventFeedBacksResType = {
    id: string;
    taskId: string;
    taskName: string;
    taskState: TaskStateCommonType;
    content: string;
    createdTime: string;
    user: UserInfoCommonType;
    group: GroupInfoCommonType;
    platformId: string;
    resourceId: string;
    type: TaskFeedbackEntityTypeCommonType;
    fileGroupId: string;
};

/**
 * 获取指定事件的反馈的接口——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetEventFeedBackByEventIdReqType = {
    eventId: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取指定事件的反馈的接口——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {EventFeedbackEntityOutCommonType[]} 数据记录
 */
export type GetEventFeedBackByEventIdResType = {
    totalCount: number;
    records: EventFeedbackEntityOutCommonType[];
};

/**
 * 获取指定反馈的接口——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetEventFeedBackByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取指定反馈的接口——响应参数类型定义
 * @params id {string} 事件 Id
 * @params eventId {string} 事件Id
 * @params eventName {string} 事件名
 * @params type {EventFeedbackEntityTypeCommonType} 反馈类型。1-用户反馈信息，2-启动响应，3-取消响应
 * @params createdTime {string} 创建时间
 * @params title {string} 标题
 * @params content {string} 内容
 * @params fileGroupId {string} 文件组Id
 * @params userId {string} 用户Id
 * @params reporter {string} 反馈人名
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 */
export type GetEventFeedBackByIdResType = {
    id: string;
    eventId: string;
    eventName: string;
    type: EventFeedbackEntityTypeCommonType;
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
 * 获取符合查询条件的事件实体——请求参数类型定义
 * @params status {any[]} 事件状态
 * @params up_left.Longitude {number} 经度
 * @params up_left.Latitude {number} 纬度
 * @params bottom_right.Longitude {number} 经度
 * @params bottom_right.Latitude {number} 纬度
 * @params is_sort {boolean} 是否排序
 * @params IsAudited {boolean} 是否已审核
 * @params resourceId {string} 资源Id
 * @params SortType {number} 排序类型：0默认，IsSorted字段生效，1：处置中、未开始、已结束排序，2按发生时间降序
 * @params keyword {string} 模糊匹配关键字
 * @params eventTypes {string} 事件类型，使用英文","隔开
 * @params priorities {string} 事件优先级，使用英文","隔开
 * @params areaCodes {string} 行政区域码，使用英文","隔开
 * @params prefixAreaCodes {string} 行政区域码前缀查询，使用英文","隔开
 * @params groupIds {any[]} 事件组
 * @params sourceId {string} 事件源Id
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetEtsEventsReqType = {
    status?: any[];
    up_left?: UpLeftCommonType;
    bottom_right?: BottomRightCommonType;
    is_sort?: boolean;
    IsAudited?: boolean;
    resourceId?: string;
    SortType?: number;
    keyword?: string;
    eventTypes?: string;
    priorities?: string;
    areaCodes?: string;
    prefixAreaCodes?: string;
    groupIds?: any[];
    sourceId?: string;
    startTime?: string;
    endTime?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取符合查询条件的事件实体——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {EventEntityOutCommonType[]} 数据记录
 */
export type GetEtsEventsResType = {
    totalCount: number;
    records: EventEntityOutCommonType[];
};

/**
 * 创建事件实体——请求参数类型定义
 * @headers X-version {string}
 * @params priority {EventPriorityCommonType} 事件优先级 1-未定级 2-IV级(一般) 4-III级(较大) 8-II级(重大) 16-I级(特大)
 * @params name {string} 事件名称 （必填）
 * @params description {string} 事件详情
 * @params groupId {string} 关联组 Id
 * @params sceneGroupId {string} 事件现场指挥组
 * @params happenedTime {string} 发生时间
 * @params address {string} 事件发生地址
 * @params submitUnit {EventUnitCommonType} 报送单位
 * @params unit {EventUnitCommonType} 事件归属单位
 * @params source {EventSourceCommonType} 事件源
 * @params extension {string} 扩展字段，用于项目中存放额外的信息
 * @params longitude {number} 事件发生地址经度
 * @params latitude {number} 事件发生地址纬度
 * @params typeId {string} 事件类型Id （必填）
 * @params expectStartedTime {string} 事件预期开始时间
 * @params expectFinishedTime {string} 事件预期结束时间
 * @params isMock {boolean} 是否为模拟事件
 * @params areaCode {string} 行政区域码
 * @params responseLevel {EventResponseLevelCommonType} 响应等级
 * @params principal {PersonInfoCommonType[]} 负责人
 * @params disposer {PersonInfoCommonType[]} 处置人
 * @params disposalInstruction {string} 处置说明
 * @params notifyType {EventNotifyTypeCommonType} 通知方式
 * @params associatePreplanId {string} 关联预案ID
 * @params resourceId {string} 外部资源唯一Id
 * @params isAudited {boolean} 是否已审核
 */
export type AddEventsReqType = {
    'X-version'?: string;
    priority?: EventPriorityCommonType;
    name: string;
    description?: string;
    groupId?: string;
    sceneGroupId?: string;
    happenedTime?: string;
    address?: string;
    submitUnit?: EventUnitCommonType;
    unit?: EventUnitCommonType;
    source?: EventSourceCommonType;
    extension?: string;
    longitude?: number;
    latitude?: number;
    typeId: string;
    expectStartedTime?: string;
    expectFinishedTime?: string;
    isMock?: boolean;
    areaCode?: string;
    responseLevel?: EventResponseLevelCommonType;
    principal?: PersonInfoCommonType[];
    disposer?: PersonInfoCommonType[];
    disposalInstruction?: string;
    notifyType?: EventNotifyTypeCommonType;
    associatePreplanId?: string;
    resourceId?: string;
    isAudited?: boolean;
};

/**
 * 创建事件实体——响应参数类型定义
 * @params id {string} Id
 * @params name {string} 事件名称
 * @params description {string} 事件描述
 * @params group {GroupInfoCommonType} 事件组
 * @params sceneGroup {GroupInfoCommonType} 事件现场指挥组
 * @params happenedTime {string} 事件发生时间
 * @params finishedTime {string} 时间完成时间
 * @params priority {number} 事件优先级
 * @params state {number} 事件状态
 * @params address {string} 事件发生地址
 * @params submitUnit {EventUnitCommonType} 报送单位
 * @params unit {EventUnitCommonType} 事件归属单位
 * @params source {EventSourceCommonType} 事件源
 * @params extension {string} 事件扩展字段，用于存项目额外信息
 * @params longitude {number} 事件发生地经度
 * @params latitude {number} 事件发生地纬度
 * @params typeID {string} 事件类型 Id
 * @params eventType {EventTypeCommonType} 事件类型
 * @params expectStartedTime {string} 事件期望发生时间
 * @params expectFinishedTime {string} 事件期望结束时间
 * @params createdTime {string} 事件创建时间
 * @params isMock {boolean} 是否模拟事件
 * @params totalTaskCount {number} 任务总数（父任务）
 * @params noStatedTaskCount {number} 未开始的任务总数（父任务）
 * @params finishedTaskCount {number} 已结束的任务总数（父任务）
 * @params confirmedTaskCount {number} 已确认的任务总数（父任务）
 * @params inProcessTaskCount {number} 进行中的任务总数（父任务）
 * @params pausedTaskCount {number} 暂停中的任务总数（父任务）
 * @params areaCode {string} 行政区域码
 * @params isDeleted {boolean} 是否已被删除
 * @params responseLevel {EventResponseLevelCommonType} 事件的响应等级
 * @params associatePreplanId {string} 匹配的预案id
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params updateTime {string} 最新修改时间
 * @params principal {PersonInfoCommonType[]} 负责人
 * @params disposer {PersonInfoCommonType[]} 处置人
 * @params serialNumber {number} 编号
 * @params disposalInstruction {string} 处置说明
 * @params notifyType {EventNotifyTypeCommonType} 通知方式
 * @params isAudited {boolean} 是否已审核
 */
export type AddEventsResType = {
    id: string;
    name: string;
    description: string;
    group: GroupInfoCommonType;
    sceneGroup: GroupInfoCommonType;
    happenedTime: string;
    finishedTime: string;
    priority: number;
    state: number;
    address: string;
    submitUnit: EventUnitCommonType;
    unit: EventUnitCommonType;
    source: EventSourceCommonType;
    extension: string;
    longitude: number;
    latitude: number;
    typeID: string;
    eventType: EventTypeCommonType;
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
    responseLevel: EventResponseLevelCommonType;
    associatePreplanId: string;
    platformId: string;
    resourceId: string;
    updateTime: string;
    principal: PersonInfoCommonType[];
    disposer: PersonInfoCommonType[];
    serialNumber: number;
    disposalInstruction: string;
    notifyType: EventNotifyTypeCommonType;
    isAudited: boolean;
};

/**
 * 获取指定id的事件实体详情——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetEventsByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取指定id的事件实体详情——响应参数类型定义
 * @params firstResponseLevel {EventResponseLevelOutCommonType} 一级响应级别
 * @params secondResponseLevel {EventResponseLevelOutCommonType} 二级响应级别
 * @params thirdResponseLevel {EventResponseLevelOutCommonType} 三级响应级别
 * @params fourthResponseLevel {EventResponseLevelOutCommonType} 四级响应级别
 * @params id {string} Id
 * @params name {string} 事件名称
 * @params description {string} 事件描述
 * @params group {GroupInfoCommonType} 事件组
 * @params sceneGroup {GroupInfoCommonType} 事件现场指挥组
 * @params happenedTime {string} 事件发生时间
 * @params finishedTime {string} 时间完成时间
 * @params priority {number} 事件优先级
 * @params state {number} 事件状态
 * @params address {string} 事件发生地址
 * @params submitUnit {EventUnitCommonType} 报送单位
 * @params unit {EventUnitCommonType} 事件归属单位
 * @params source {EventSourceCommonType} 事件源
 * @params extension {string} 事件扩展字段，用于存项目额外信息
 * @params longitude {number} 事件发生地经度
 * @params latitude {number} 事件发生地纬度
 * @params typeID {string} 事件类型 Id
 * @params eventType {EventTypeCommonType} 事件类型
 * @params expectStartedTime {string} 事件期望发生时间
 * @params expectFinishedTime {string} 事件期望结束时间
 * @params createdTime {string} 事件创建时间
 * @params isMock {boolean} 是否模拟事件
 * @params totalTaskCount {number} 任务总数（父任务）
 * @params noStatedTaskCount {number} 未开始的任务总数（父任务）
 * @params finishedTaskCount {number} 已结束的任务总数（父任务）
 * @params confirmedTaskCount {number} 已确认的任务总数（父任务）
 * @params inProcessTaskCount {number} 进行中的任务总数（父任务）
 * @params pausedTaskCount {number} 暂停中的任务总数（父任务）
 * @params areaCode {string} 行政区域码
 * @params isDeleted {boolean} 是否已被删除
 * @params responseLevel {EventResponseLevelCommonType} 事件的响应等级
 * @params associatePreplanId {string} 匹配的预案id
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params updateTime {string} 最新修改时间
 * @params principal {PersonInfoCommonType[]} 负责人
 * @params disposer {PersonInfoCommonType[]} 处置人
 * @params serialNumber {number} 编号
 * @params disposalInstruction {string} 处置说明
 * @params notifyType {EventNotifyTypeCommonType} 通知方式
 * @params isAudited {boolean} 是否已审核
 */
export type GetEventsByIdResType = {
    firstResponseLevel: EventResponseLevelOutCommonType;
    secondResponseLevel: EventResponseLevelOutCommonType;
    thirdResponseLevel: EventResponseLevelOutCommonType;
    fourthResponseLevel: EventResponseLevelOutCommonType;
    id: string;
    name: string;
    description: string;
    group: GroupInfoCommonType;
    sceneGroup: GroupInfoCommonType;
    happenedTime: string;
    finishedTime: string;
    priority: number;
    state: number;
    address: string;
    submitUnit: EventUnitCommonType;
    unit: EventUnitCommonType;
    source: EventSourceCommonType;
    extension: string;
    longitude: number;
    latitude: number;
    typeID: string;
    eventType: EventTypeCommonType;
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
    responseLevel: EventResponseLevelCommonType;
    associatePreplanId: string;
    platformId: string;
    resourceId: string;
    updateTime: string;
    principal: PersonInfoCommonType[];
    disposer: PersonInfoCommonType[];
    serialNumber: number;
    disposalInstruction: string;
    notifyType: EventNotifyTypeCommonType;
    isAudited: boolean;
};

/**
 * 更新事件实体——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 事件名称 （必填）
 * @params description {string} 事件详情
 * @params groupId {string} 关联组 Id
 * @params sceneGroupId {string} 事件现场指挥组
 * @params happenedTime {string} 发生时间
 * @params address {string} 事件发生地址
 * @params submitUnit {EventUnitCommonType} 报送单位
 * @params unit {EventUnitCommonType} 事件归属单位
 * @params source {EventSourceCommonType} 事件源
 * @params extension {string} 扩展字段，用于项目中存放额外的信息
 * @params longitude {number} 事件发生地址经度
 * @params latitude {number} 事件发生地址纬度
 * @params typeId {string} 事件类型Id （必填）
 * @params expectStartedTime {string} 事件预期开始时间
 * @params expectFinishedTime {string} 事件预期结束时间
 * @params isMock {boolean} 是否为模拟事件
 * @params areaCode {string} 行政区域码
 * @params responseLevel {EventResponseLevelCommonType} 响应等级
 * @params principal {PersonInfoCommonType[]} 负责人
 * @params disposer {PersonInfoCommonType[]} 处置人
 * @params disposalInstruction {string} 处置说明
 * @params notifyType {EventNotifyTypeCommonType} 通知方式
 * @params associatePreplanId {string} 关联预案ID
 * @params resourceId {string} 外部资源唯一Id
 * @params isAudited {boolean} 是否已审核
 */
export type UpdateEventsReqType = {
    id: string;
    'X-version'?: string;
    name: string;
    description?: string;
    groupId?: string;
    sceneGroupId?: string;
    happenedTime?: string;
    address?: string;
    submitUnit?: EventUnitCommonType;
    unit?: EventUnitCommonType;
    source?: EventSourceCommonType;
    extension?: string;
    longitude?: number;
    latitude?: number;
    typeId: string;
    expectStartedTime?: string;
    expectFinishedTime?: string;
    isMock?: boolean;
    areaCode?: string;
    responseLevel?: EventResponseLevelCommonType;
    principal?: PersonInfoCommonType[];
    disposer?: PersonInfoCommonType[];
    disposalInstruction?: string;
    notifyType?: EventNotifyTypeCommonType;
    associatePreplanId?: string;
    resourceId?: string;
    isAudited?: boolean;
};

/**
 * 删除事件实体——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteEventsReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取状态为`未开始`、`处理中`的事件实体——请求参数类型定义
 * @params keyword {string} 模糊匹配关键字
 * @params eventTypes {string} 事件类型，使用英文","隔开
 * @params priorities {string} 事件优先级，使用英文","隔开
 * @params areaCodes {string} 行政区域码，使用英文","隔开
 * @params prefixAreaCodes {string} 行政区域码前缀查询，使用英文","隔开
 * @params groupIds {any[]} 事件组
 * @params sourceId {string} 事件源Id
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetEtsRunningEventsReqType = {
    keyword?: string;
    eventTypes?: string;
    priorities?: string;
    areaCodes?: string;
    prefixAreaCodes?: string;
    groupIds?: any[];
    sourceId?: string;
    startTime?: string;
    endTime?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取状态为`未开始`、`处理中`的事件实体——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {EventEntityOutCommonType[]} 数据记录
 */
export type GetEtsRunningEventsResType = {
    totalCount: number;
    records: EventEntityOutCommonType[];
};

/**
 * 获取状态为`已结束`的事件实体——请求参数类型定义
 * @params isDelete {boolean} 是否被删除
 * @params keyword {string} 模糊匹配关键字
 * @params eventTypes {string} 事件类型，使用英文","隔开
 * @params priorities {string} 事件优先级，使用英文","隔开
 * @params areaCodes {string} 行政区域码，使用英文","隔开
 * @params prefixAreaCodes {string} 行政区域码前缀查询，使用英文","隔开
 * @params groupIds {any[]} 事件组
 * @params sourceId {string} 事件源Id
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetEtsEventsHistoryReqType = {
    isDelete?: boolean;
    keyword?: string;
    eventTypes?: string;
    priorities?: string;
    areaCodes?: string;
    prefixAreaCodes?: string;
    groupIds?: any[];
    sourceId?: string;
    startTime?: string;
    endTime?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取状态为`已结束`的事件实体——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {EventEntityOutCommonType[]} 数据记录
 */
export type GetEtsEventsHistoryResType = {
    totalCount: number;
    records: EventEntityOutCommonType[];
};

/**
 * 获取自身相关事件——请求参数类型定义
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetOwnerEventsReqType = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取自身相关事件——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {EventEntityOutCommonType[]} 数据记录
 */
export type GetOwnerEventsResType = {
    totalCount: number;
    records: EventEntityOutCommonType[];
};

/**
 * 更新事件实体的优先级——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params value {EventPriorityCommonType} 事件优先级值1-未定级 2-IV级(一般) 4-III级(较大) 8-II级(重大) 16-I级(特大) （必填）
 * @params taskResetType {TaskResetTypeCommonType} 任务重置方式0 不处理，1暂停并匹配新任务，2 删除并匹配新任务
 */
export type UpdateEventsPriorityReqType = {
    id: string;
    'X-version'?: string;
    value: EventPriorityCommonType;
    taskResetType?: TaskResetTypeCommonType;
};

/**
 * 更新事件实体的状态——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params value {number} 事件状态值 0-未开始 1-处理中 2-结束 （必填）
 */
export type UpdateEventsStateReqType = {
    id: string;
    'X-version'?: string;
    value: number;
};

/**
 * 修改事件预案接口——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params preplanId {string} 预案id
 * @params isResetTask {boolean} 是否重置事件任务
 */
export type UpdateEventPreplanReqType = {
    id: string;
    'X-version'?: string;
    preplanId?: string;
    isResetTask?: boolean;
};

/**
 * 导入事件——请求参数类型定义
 * @headers X-version {string}
 * @params importEvents {ImportEventCommonType[]} 事件 （必填）
 */
export type ImportEventsReqType = {
    'X-version'?: string;
    importEvents: ImportEventCommonType[];
};

/**
 * 移除异常事件——请求参数类型定义
 * @headers X-version {string}
 */
export type DeleteExceptionEventsReqType = {
    'X-version'?: string;
};

/**
 * 通过 Id 获取事件类型组——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetEventTypeGroupsByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 通过 Id 获取事件类型组——响应参数类型定义
 * @params id {string} 事件类型组 Id
 * @params name {string} 事件类型组名
 * @params description {string} 事件类型组描述
 * @params parentId {string} 父级事件类型组 Id
 * @params eventTypes {EventTypeInfoCommonType[]} 事件类型
 * @params childEventTypeGroupInfos {EventTypeGroupInfoCommonType[]} 子事件类型组
 * @params extension {string} 扩展
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 */
export type GetEventTypeGroupsByIdResType = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    eventTypes: EventTypeInfoCommonType[];
    childEventTypeGroupInfos: EventTypeGroupInfoCommonType[];
    extension: string;
    platformId: string;
    resourceId: string;
};

/**
 * 更新事件类型组——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 事件类型组名 （必填）
 * @params description {string} 事件类型组描述
 * @params extension {string} 扩展
 */
export type UpdateEventTypeGroupsReqType = {
    id: string;
    'X-version'?: string;
    name: string;
    description?: string;
    extension?: string;
};

/**
 * 删除事件类型组——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteEventTypeGroupsReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取所有事件类型组(可通过参数只获取根事件类型组)——请求参数类型定义
 * @params Keyword {string} 关键字
 * @params EventTypeId {string} 事件类型
 * @params Root {boolean} 是否只获取根事件类型组
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetEventTypeGroupsReqType = {
    Keyword?: string;
    EventTypeId?: string;
    Root?: boolean;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取所有事件类型组(可通过参数只获取根事件类型组)——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {EventTypeGroupOutCommonType[]} 数据记录
 */
export type GetEventTypeGroupsResType = {
    totalCount: number;
    records: EventTypeGroupOutCommonType[];
};

/**
 * 创建事件类型组——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 事件类型组名 （必填）
 * @params description {string} 事件类型组描述
 * @params extension {string} 扩展
 */
export type AddEventTypeGroupsReqType = {
    'X-version'?: string;
    name: string;
    description?: string;
    extension?: string;
};

/**
 * 创建事件类型组——响应参数类型定义
 * @params id {string} 事件类型组 Id
 * @params name {string} 事件类型组名
 * @params description {string} 事件类型组描述
 * @params parentId {string} 父级事件类型组 Id
 * @params eventTypes {EventTypeInfoCommonType[]} 事件类型
 * @params childEventTypeGroupInfos {EventTypeGroupInfoCommonType[]} 子事件类型组
 * @params extension {string} 扩展
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 */
export type AddEventTypeGroupsResType = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    eventTypes: EventTypeInfoCommonType[];
    childEventTypeGroupInfos: EventTypeGroupInfoCommonType[];
    extension: string;
    platformId: string;
    resourceId: string;
};

/**
 * 通过父级 Id 获取子事件任务组——请求参数类型定义
 * @params id {string} id （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetEventTypeGroupsChildrenReqType = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 通过父级 Id 获取子事件任务组——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {EventTypeGroupOutCommonType[]} 数据记录
 */
export type GetEventTypeGroupsChildrenResType = {
    totalCount: number;
    records: EventTypeGroupOutCommonType[];
};

/**
 * 创建子事件类型组——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 事件类型组名 （必填）
 * @params description {string} 事件类型组描述
 * @params extension {string} 扩展
 */
export type AddEventTypeGroupsChildrenReqType = {
    id: string;
    'X-version'?: string;
    name: string;
    description?: string;
    extension?: string;
};

/**
 * 创建子事件类型组——响应参数类型定义
 * @params id {string} 事件类型组 Id
 * @params name {string} 事件类型组名
 * @params description {string} 事件类型组描述
 * @params parentId {string} 父级事件类型组 Id
 * @params eventTypes {EventTypeInfoCommonType[]} 事件类型
 * @params childEventTypeGroupInfos {EventTypeGroupInfoCommonType[]} 子事件类型组
 * @params extension {string} 扩展
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 */
export type AddEventTypeGroupsChildrenResType = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    eventTypes: EventTypeInfoCommonType[];
    childEventTypeGroupInfos: EventTypeGroupInfoCommonType[];
    extension: string;
    platformId: string;
    resourceId: string;
};

/**
 * 根据事件类型组id分页获取事件类型——请求参数类型定义
 * @params id {string} id （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetEventTypesByGroupIdReqType = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 根据事件类型组id分页获取事件类型——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {EventTypeOutCommonType[]} 数据记录
 */
export type GetEventTypesByGroupIdResType = {
    totalCount: number;
    records: EventTypeOutCommonType[];
};

/**
 * 用户可根据类型组名称，事件类型搜索对应的事件类型组和事件类型——请求参数类型定义
 * @params Keyword {string} 关键字"类型组名称，事件类型" （必填）
 * @params Limit {number} 最大查询返回数量
 * @headers X-version {string}
 */
export type SearchEventTypeGroupsReqType = {
    Keyword: string;
    Limit?: number;
    'X-version'?: string;
};

/**
 * 用户可根据类型组名称，事件类型搜索对应的事件类型组和事件类型——响应参数类型定义
 * @params eventTypeGroups {EventTypeTreeNodeOutReqCommonType} 事件类型组
 * @params eventTypes {EventTypeTreeNodeOutReqCommonType} 事件类型
 */
export type SearchEventTypeGroupsResType = {
    eventTypeGroups: EventTypeTreeNodeOutReqCommonType;
    eventTypes: EventTypeTreeNodeOutReqCommonType;
};

/**
 * 导入事件类型组——请求参数类型定义
 * @headers X-version {string}
 * @params importEventTypeGroups {ImportEventTypeGroupCommonType[]} 事件类型组
 */
export type ImportEventTypeGroupsReqType = {
    'X-version'?: string;
    importEventTypeGroups?: ImportEventTypeGroupCommonType[];
};

/**
 * 获取事件类型子组【父级ID不传默认查询根级组】——请求参数类型定义
 * @headers X-version {string}
 * @params parentId {string} 父级ID
 * @params selectedIds {any[]} 选择中Id
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量
 */
export type GetChildEventTypeGroupsReqType = {
    'X-version'?: string;
    parentId?: string;
    selectedIds?: any[];
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 获取事件类型子组【父级ID不传默认查询根级组】——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {EventTypeGroupUseStatusOutCommonType[]} 数据记录
 */
export type GetChildEventTypeGroupsResType = {
    totalCount: number;
    records: EventTypeGroupUseStatusOutCommonType[];
};

/**
 * 将事件类型ID集合合并为对应的事件类型组——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} 事件类型ID
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量
 */
export type MergeEventTypeGroupReqType = {
    'X-version'?: string;
    ids?: any[];
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 将事件类型ID集合合并为对应的事件类型组——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {EventTypeGroupNodeOutCommonType[]} 数据记录
 */
export type MergeEventTypeGroupResType = {
    totalCount: number;
    records: EventTypeGroupNodeOutCommonType[];
};

/**
 * 批量事件类型组ID获取事件类型【包含下级事件类型】——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} 事件类型组ID集合
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量
 */
export type GetEventTypeGroupsByIdsReqType = {
    'X-version'?: string;
    ids?: any[];
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 批量事件类型组ID获取事件类型【包含下级事件类型】——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {EventTypeGroupNodeOutCommonType[]} 数据记录
 */
export type GetEventTypeGroupsByIdsResType = {
    totalCount: number;
    records: EventTypeGroupNodeOutCommonType[];
};

/**
 * 获取所有事件类型——请求参数类型定义
 * @params Keyword {string} 关键字
 * @headers X-version {string}
 */
export type GetEventTypesReqType = {
    Keyword?: string;
    'X-version'?: string;
};

/**
 * 获取所有事件类型——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {EventTypeOutCommonType[]} 数据记录
 */
export type GetEventTypesResType = {
    totalCount: number;
    records: EventTypeOutCommonType[];
};

/**
 * 根据事件类型 Id 获取事件类型——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetEventTypesByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 根据事件类型 Id 获取事件类型——响应参数类型定义
 * @params id {string} 事件类型 Id
 * @params name {string} 事件类型名称
 * @params description {string} 事件类型描述
 * @params value {number} 事件类型值
 * @params isEffective {boolean} 事件类型是否有效
 * @params code {string} 事件类型编码
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 */
export type GetEventTypesByIdResType = {
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
 * 更新事件类型——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 事件类型名称 （必填）
 * @params description {string} 事件类型详情
 * @params value {number} 事件类型值 （必填）
 * @params code {string} 事件类型编码
 */
export type UpdateEventTypesReqType = {
    id: string;
    'X-version'?: string;
    name: string;
    description?: string;
    value: number;
    code?: string;
};

/**
 * 删除事件类型——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteEventTypesReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取事件类型的组路径——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetEventTypePathReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取事件类型的组路径——响应参数类型定义
 * @params idPath {string} ID的路径
 * @params namePath {string} 名称的路径
 */
export type GetEventTypePathResType = {
    idPath: string;
    namePath: string;
};

/**
 * 批量Ids/ResourceIDs获取事件类型集合——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} 事件类型ID查询 （必填）
 */
export type SearchEventTypesReqType = {
    'X-version'?: string;
    ids: any[];
};

/**
 * 批量Ids/ResourceIDs获取事件类型集合——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {EventTypeOutCommonType[]} 数据记录
 */
export type SearchEventTypesResType = {
    totalCount: number;
    records: EventTypeOutCommonType[];
};

/**
 * 导入事件类型——请求参数类型定义
 * @headers X-version {string}
 * @params groupingItems {GroupingItemCommonType[]} 事件类型
 */
export type ImportEventTypesReqType = {
    'X-version'?: string;
    groupingItems?: GroupingItemCommonType[];
};

/**
 * 导入事件类型——响应参数类型定义
 * @params id {string} 事件类型 Id
 * @params name {string} 事件类型名称
 * @params description {string} 事件类型描述
 * @params value {number} 事件类型值
 * @params isEffective {boolean} 事件类型是否有效
 * @params code {string} 事件类型编码
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 */
export type ImportEventTypesResType = {
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
 * 创建事件类型——请求参数类型定义
 * @params eventTypeGroupId {string} eventTypeGroupId （必填）
 * @headers X-version {string}
 * @params name {string} 事件类型名称 （必填）
 * @params description {string} 事件类型详情
 * @params value {number} 事件类型值 （必填）
 * @params code {string} 事件类型编码
 */
export type AddEventTypesReqType = {
    eventTypeGroupId: string;
    'X-version'?: string;
    name: string;
    description?: string;
    value: number;
    code?: string;
};

/**
 * 创建事件类型——响应参数类型定义
 * @params id {string} 事件类型 Id
 * @params name {string} 事件类型名称
 * @params description {string} 事件类型描述
 * @params value {number} 事件类型值
 * @params isEffective {boolean} 事件类型是否有效
 * @params code {string} 事件类型编码
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 */
export type AddEventTypesResType = {
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
 * 导出事件类型(包含组)——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} 事件类型ID查询 （必填）
 */
export type ExportEventTypeReqType = {
    'X-version'?: string;
    ids: any[];
};

/**
 * 导出事件类型(包含组)——响应参数类型定义
 * @params eventType {EventTypeExportCommonType[]} 事件类型
 * @params eventTypeGroup {EventTypeGroupExportCommonType[]} 事件类型组
 */
export type ExportEventTypeResType = {
    eventType: EventTypeExportCommonType[];
    eventTypeGroup: EventTypeGroupExportCommonType[];
};

/**
 * 导入事件类型(包含组)【此接口适用于export/relationship导出的数据】——请求参数类型定义
 * @headers X-version {string}
 * @params eventType {EventTypeExportCommonType[]} 事件类型
 * @params eventTypeGroup {EventTypeGroupExportCommonType[]} 事件类型组
 */
export type ImportEventTypeReqType = {
    'X-version'?: string;
    eventType?: EventTypeExportCommonType[];
    eventTypeGroup?: EventTypeGroupExportCommonType[];
};

/**
 * 按条件查询预案——请求参数类型定义
 * @params event_type_id {string} 事件类型ID,Empty为所有类型,"type_id1,type_id2,type_id3……"
 * @params event_priority {string} 事件优先级值,Empty为所有类型,"priority1,priority2,priority3……"
 * @params areaCode {string} 区域码，Empty为所有,格式："areaCode1,areaCode2,areaCode3……"
 * @params prefixAreaCode {string} 区域码前缀，当AreaCode不为空时，以AreaCode为准，Empty为所有,格式："prefixAreaCode1,prefixAreaCode2,prefixAreaCode3……"
 * @params keyword {string} 模糊匹配关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetEtsPreplansReqType = {
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
 * 按条件查询预案——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {PreplanOutCommonType[]} 数据记录
 */
export type GetEtsPreplansResType = {
    totalCount: number;
    records: PreplanOutCommonType[];
};

/**
 * 通过预案ID获取预案——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetPreplansByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 通过预案ID获取预案——响应参数类型定义
 * @params id {string} 预案ID
 * @params name {string} 预案名称
 * @params eventType {EventTypeInfoCommonType} 适用于哪种事件类型ID
 * @params areaCode {string} 区域码
 * @params eventPriority {number} 适用于哪种事件优先级
 * @params eventAffectRadius {number} 事件影响半径
 * @params dangerousSources {ResourceCommonType[]} 危险源
 * @params keyProtections {ResourceCommonType[]} 重点防护目标
 * @params shelters {ResourceCommonType[]} 避难场所
 * @params warehouses {ResourceCommonType[]} 仓库
 * @params emergencyFacilities {ResourceCommonType[]} 应急设备
 * @params manpowerResources {ResourceCommonType[]} 人力资源
 * @params medicalResources {ResourceCommonType[]} 医疗资源
 * @params pollutionSources {ResourceCommonType[]} 污染源
 * @params textTemplate {string} 文本模板
 * @params sceneParameters {any[]} 情景参数
 * @params directoryRecordId {string} 预案文档储存文件夹ID
 * @params taskTemplate {TaskTemplateInfoCommonType} 关联的任务模板
 * @params associatedGroup {GroupInfoCommonType} 关联的指挥组
 * @params sceneGroup {GroupInfoCommonType} 关联的现场指挥组
 * @params firstResponseLevel {ResponseLevelCommonType} 一级响应级别
 * @params secondResponseLevel {ResponseLevelCommonType} 二级响应级别
 * @params thirdResponseLevel {ResponseLevelCommonType} 三级响应级别
 * @params fourthResponseLevel {ResponseLevelCommonType} 四级响应级别
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params cameraLabels {CameraLabelCommonType[]} 监控标签
 * @params preplanGroups {GroupInfoCommonType[]} 预案组
 * @params videoConferenceTerminals {VideoConferenceTerminalCommonType[]} 视频会议终端
 * @params thirdPlatforms {ThirdPlatformCommonType[]} 业务系统
 * @params customResources {any} 自定义类型
 */
export type GetPreplansByIdResType = {
    id: string;
    name: string;
    eventType: EventTypeInfoCommonType;
    areaCode: string;
    eventPriority: number;
    eventAffectRadius: number;
    dangerousSources: ResourceCommonType[];
    keyProtections: ResourceCommonType[];
    shelters: ResourceCommonType[];
    warehouses: ResourceCommonType[];
    emergencyFacilities: ResourceCommonType[];
    manpowerResources: ResourceCommonType[];
    medicalResources: ResourceCommonType[];
    pollutionSources: ResourceCommonType[];
    textTemplate: string;
    sceneParameters: any[];
    directoryRecordId: string;
    taskTemplate: TaskTemplateInfoCommonType;
    associatedGroup: GroupInfoCommonType;
    sceneGroup: GroupInfoCommonType;
    firstResponseLevel: ResponseLevelCommonType;
    secondResponseLevel: ResponseLevelCommonType;
    thirdResponseLevel: ResponseLevelCommonType;
    fourthResponseLevel: ResponseLevelCommonType;
    platformId: string;
    resourceId: string;
    cameraLabels: CameraLabelCommonType[];
    preplanGroups: GroupInfoCommonType[];
    videoConferenceTerminals: VideoConferenceTerminalCommonType[];
    thirdPlatforms: ThirdPlatformCommonType[];
    customResources: any;
};

/**
 * 更新预案——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 预案名称
 * @params eventPriority {number} 适用于哪种事件优先级
 * @params areaCode {string} 区域码
 * @params eventAffectRadius {number} 事件影响半径
 * @params dangerousSources {ResourceCommonType[]} 危险源
 * @params keyProtections {ResourceCommonType[]} 重点防护目标
 * @params shelters {ResourceCommonType[]} 避难场所
 * @params warehouses {ResourceCommonType[]} 仓库
 * @params emergencyFacilities {ResourceCommonType[]} 应急设备
 * @params manpowerResources {ResourceCommonType[]} 人力资源
 * @params medicalResources {ResourceCommonType[]} 医疗资源
 * @params pollutionSources {ResourceCommonType[]} 污染源
 * @params textTemplate {string} 文本模板
 * @params sceneParameters {any[]} 情景参数
 * @params directoryRecordId {string} 预案文档储存文件夹ID
 * @params taskTemplateId {string} 关联的任务模板Id
 * @params associatedGroup {GroupInfoCommonType} 关联的指挥组
 * @params sceneGroup {GroupInfoCommonType} 关联的现场指挥组
 * @params firstResponseLevel {ResponseLevelInCommonType} 一级响应级别
 * @params secondResponseLevel {ResponseLevelInCommonType} 二级响应级别
 * @params thirdResponseLevel {ResponseLevelInCommonType} 三级响应级别
 * @params fourthResponseLevel {ResponseLevelInCommonType} 四级响应级别
 * @params cameraLabels {CameraLabelCommonType[]} 监控标签
 * @params preplanGroups {GroupInfoCommonType[]} 预案组
 * @params videoConferenceTerminals {VideoConferenceTerminalCommonType[]} 视频会议终端
 * @params thirdPlatforms {ThirdPlatformCommonType[]} 业务系统
 * @params customResources {any} 自定义类型
 */
export type UpdatePreplansReqType = {
    id: string;
    'X-version'?: string;
    name?: string;
    eventPriority?: number;
    areaCode?: string;
    eventAffectRadius?: number;
    dangerousSources?: ResourceCommonType[];
    keyProtections?: ResourceCommonType[];
    shelters?: ResourceCommonType[];
    warehouses?: ResourceCommonType[];
    emergencyFacilities?: ResourceCommonType[];
    manpowerResources?: ResourceCommonType[];
    medicalResources?: ResourceCommonType[];
    pollutionSources?: ResourceCommonType[];
    textTemplate?: string;
    sceneParameters?: any[];
    directoryRecordId?: string;
    taskTemplateId?: string;
    associatedGroup?: GroupInfoCommonType;
    sceneGroup?: GroupInfoCommonType;
    firstResponseLevel?: ResponseLevelInCommonType;
    secondResponseLevel?: ResponseLevelInCommonType;
    thirdResponseLevel?: ResponseLevelInCommonType;
    fourthResponseLevel?: ResponseLevelInCommonType;
    cameraLabels?: CameraLabelCommonType[];
    preplanGroups?: GroupInfoCommonType[];
    videoConferenceTerminals?: VideoConferenceTerminalCommonType[];
    thirdPlatforms?: ThirdPlatformCommonType[];
    customResources?: any;
};

/**
 * 删除预案——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeletePreplansReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 批量Ids/ResourceIDs获取预案集合——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} ID/ResourceID集合 （必填）
 */
export type EtsSearchPreplansReqType = {
    'X-version'?: string;
    ids: any[];
};

/**
 * 批量Ids/ResourceIDs获取预案集合——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {PreplanOutCommonType[]} 数据记录
 */
export type EtsSearchPreplansResType = {
    totalCount: number;
    records: PreplanOutCommonType[];
};

/**
 * 创建预案——请求参数类型定义
 * @params eventTypeId {string} eventTypeId （必填）
 * @headers X-version {string}
 * @params name {string} 预案名称
 * @params eventPriority {number} 适用于哪种事件优先级
 * @params areaCode {string} 区域码
 * @params eventAffectRadius {number} 事件影响半径
 * @params dangerousSources {ResourceCommonType[]} 危险源
 * @params keyProtections {ResourceCommonType[]} 重点防护目标
 * @params shelters {ResourceCommonType[]} 避难场所
 * @params warehouses {ResourceCommonType[]} 仓库
 * @params emergencyFacilities {ResourceCommonType[]} 应急设备
 * @params manpowerResources {ResourceCommonType[]} 人力资源
 * @params medicalResources {ResourceCommonType[]} 医疗资源
 * @params pollutionSources {ResourceCommonType[]} 污染源
 * @params textTemplate {string} 文本模板
 * @params sceneParameters {any[]} 情景参数
 * @params directoryRecordId {string} 预案文档储存文件夹ID
 * @params taskTemplateId {string} 关联的任务模板Id
 * @params associatedGroup {GroupInfoCommonType} 关联的指挥组
 * @params sceneGroup {GroupInfoCommonType} 关联的现场指挥组
 * @params firstResponseLevel {ResponseLevelInCommonType} 一级响应级别
 * @params secondResponseLevel {ResponseLevelInCommonType} 二级响应级别
 * @params thirdResponseLevel {ResponseLevelInCommonType} 三级响应级别
 * @params fourthResponseLevel {ResponseLevelInCommonType} 四级响应级别
 * @params cameraLabels {CameraLabelCommonType[]} 监控标签
 * @params preplanGroups {GroupInfoCommonType[]} 预案组
 * @params videoConferenceTerminals {VideoConferenceTerminalCommonType[]} 视频会议终端
 * @params thirdPlatforms {ThirdPlatformCommonType[]} 业务系统
 * @params customResources {any} 自定义类型
 */
export type AddEtsPreplansReqType = {
    eventTypeId: string;
    'X-version'?: string;
    name?: string;
    eventPriority?: number;
    areaCode?: string;
    eventAffectRadius?: number;
    dangerousSources?: ResourceCommonType[];
    keyProtections?: ResourceCommonType[];
    shelters?: ResourceCommonType[];
    warehouses?: ResourceCommonType[];
    emergencyFacilities?: ResourceCommonType[];
    manpowerResources?: ResourceCommonType[];
    medicalResources?: ResourceCommonType[];
    pollutionSources?: ResourceCommonType[];
    textTemplate?: string;
    sceneParameters?: any[];
    directoryRecordId?: string;
    taskTemplateId?: string;
    associatedGroup?: GroupInfoCommonType;
    sceneGroup?: GroupInfoCommonType;
    firstResponseLevel?: ResponseLevelInCommonType;
    secondResponseLevel?: ResponseLevelInCommonType;
    thirdResponseLevel?: ResponseLevelInCommonType;
    fourthResponseLevel?: ResponseLevelInCommonType;
    cameraLabels?: CameraLabelCommonType[];
    preplanGroups?: GroupInfoCommonType[];
    videoConferenceTerminals?: VideoConferenceTerminalCommonType[];
    thirdPlatforms?: ThirdPlatformCommonType[];
    customResources?: any;
};

/**
 * 创建预案——响应参数类型定义
 * @params id {string} 预案ID
 * @params name {string} 预案名称
 * @params eventType {EventTypeInfoCommonType} 适用于哪种事件类型ID
 * @params areaCode {string} 区域码
 * @params eventPriority {number} 适用于哪种事件优先级
 * @params eventAffectRadius {number} 事件影响半径
 * @params dangerousSources {ResourceCommonType[]} 危险源
 * @params keyProtections {ResourceCommonType[]} 重点防护目标
 * @params shelters {ResourceCommonType[]} 避难场所
 * @params warehouses {ResourceCommonType[]} 仓库
 * @params emergencyFacilities {ResourceCommonType[]} 应急设备
 * @params manpowerResources {ResourceCommonType[]} 人力资源
 * @params medicalResources {ResourceCommonType[]} 医疗资源
 * @params pollutionSources {ResourceCommonType[]} 污染源
 * @params textTemplate {string} 文本模板
 * @params sceneParameters {any[]} 情景参数
 * @params directoryRecordId {string} 预案文档储存文件夹ID
 * @params taskTemplate {TaskTemplateInfoCommonType} 关联的任务模板
 * @params associatedGroup {GroupInfoCommonType} 关联的指挥组
 * @params sceneGroup {GroupInfoCommonType} 关联的现场指挥组
 * @params firstResponseLevel {ResponseLevelCommonType} 一级响应级别
 * @params secondResponseLevel {ResponseLevelCommonType} 二级响应级别
 * @params thirdResponseLevel {ResponseLevelCommonType} 三级响应级别
 * @params fourthResponseLevel {ResponseLevelCommonType} 四级响应级别
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params cameraLabels {CameraLabelCommonType[]} 监控标签
 * @params preplanGroups {GroupInfoCommonType[]} 预案组
 * @params videoConferenceTerminals {VideoConferenceTerminalCommonType[]} 视频会议终端
 * @params thirdPlatforms {ThirdPlatformCommonType[]} 业务系统
 * @params customResources {any} 自定义类型
 */
export type AddEtsPreplansResType = {
    id: string;
    name: string;
    eventType: EventTypeInfoCommonType;
    areaCode: string;
    eventPriority: number;
    eventAffectRadius: number;
    dangerousSources: ResourceCommonType[];
    keyProtections: ResourceCommonType[];
    shelters: ResourceCommonType[];
    warehouses: ResourceCommonType[];
    emergencyFacilities: ResourceCommonType[];
    manpowerResources: ResourceCommonType[];
    medicalResources: ResourceCommonType[];
    pollutionSources: ResourceCommonType[];
    textTemplate: string;
    sceneParameters: any[];
    directoryRecordId: string;
    taskTemplate: TaskTemplateInfoCommonType;
    associatedGroup: GroupInfoCommonType;
    sceneGroup: GroupInfoCommonType;
    firstResponseLevel: ResponseLevelCommonType;
    secondResponseLevel: ResponseLevelCommonType;
    thirdResponseLevel: ResponseLevelCommonType;
    fourthResponseLevel: ResponseLevelCommonType;
    platformId: string;
    resourceId: string;
    cameraLabels: CameraLabelCommonType[];
    preplanGroups: GroupInfoCommonType[];
    videoConferenceTerminals: VideoConferenceTerminalCommonType[];
    thirdPlatforms: ThirdPlatformCommonType[];
    customResources: any;
};

/**
 * 导入预案——请求参数类型定义
 * @headers X-version {string}
 * @params preplanItems {PreplanItemCommonType[]} 预案导入集合 （必填）
 */
export type ImportPreplansReqType = {
    'X-version'?: string;
    preplanItems: PreplanItemCommonType[];
};

/**
 * 获取预案模板——请求参数类型定义
 * @headers X-version {string}
 */
export type GetPreplanTemplateReqType = {
    'X-version'?: string;
};

/**
 * 按条件获取分组预案集合（分组包括（推荐、其他））——请求参数类型定义
 * @headers X-version {string}
 * @params eventTypeId {string} 事件类型ID,Empty为所有类型
 * @params eventPriority {number} 事件优先级值,Empty为所有类型
 * @params areaCode {string} 区域码，Empty为所有
 * @params prefixAreaCodes {any[]} 区域码前缀集合，集合不空，以该集合为准，配合“IsContainCurrentAreCodePreplan”
 * @params isMatchNullAreaCode {boolean} 是否匹配空区域码的预案
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量
 */
export type EtsSearchPreplanGroupReqType = {
    'X-version'?: string;
    eventTypeId?: string;
    eventPriority?: number;
    areaCode?: string;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 按条件获取分组预案集合（分组包括（推荐、其他））——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PreplanGroupingOutCommonType} 记录
 */
export type EtsSearchPreplanGroupResType = {
    totalCount: number;
    records: PreplanGroupingOutCommonType;
};

/**
 * 通过事件ID推荐预案——请求参数类型定义
 * @params EventId {string} 事件ID （必填）
 * @headers X-version {string}
 */
export type GetRecommendPreplanReqType = {
    EventId: string;
    'X-version'?: string;
};

/**
 * 通过事件ID推荐预案——响应参数类型定义
 * @params id {string} 预案ID
 * @params name {string} 预案名称
 * @params eventType {EventTypeInfoCommonType} 适用于哪种事件类型ID
 * @params areaCode {string} 区域码
 * @params eventPriority {number} 适用于哪种事件优先级
 * @params eventAffectRadius {number} 事件影响半径
 * @params dangerousSources {ResourceCommonType[]} 危险源
 * @params keyProtections {ResourceCommonType[]} 重点防护目标
 * @params shelters {ResourceCommonType[]} 避难场所
 * @params warehouses {ResourceCommonType[]} 仓库
 * @params emergencyFacilities {ResourceCommonType[]} 应急设备
 * @params manpowerResources {ResourceCommonType[]} 人力资源
 * @params medicalResources {ResourceCommonType[]} 医疗资源
 * @params pollutionSources {ResourceCommonType[]} 污染源
 * @params textTemplate {string} 文本模板
 * @params sceneParameters {any[]} 情景参数
 * @params directoryRecordId {string} 预案文档储存文件夹ID
 * @params taskTemplate {TaskTemplateInfoCommonType} 关联的任务模板
 * @params associatedGroup {GroupInfoCommonType} 关联的指挥组
 * @params sceneGroup {GroupInfoCommonType} 关联的现场指挥组
 * @params firstResponseLevel {ResponseLevelCommonType} 一级响应级别
 * @params secondResponseLevel {ResponseLevelCommonType} 二级响应级别
 * @params thirdResponseLevel {ResponseLevelCommonType} 三级响应级别
 * @params fourthResponseLevel {ResponseLevelCommonType} 四级响应级别
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params cameraLabels {CameraLabelCommonType[]} 监控标签
 * @params preplanGroups {GroupInfoCommonType[]} 预案组
 * @params videoConferenceTerminals {VideoConferenceTerminalCommonType[]} 视频会议终端
 * @params thirdPlatforms {ThirdPlatformCommonType[]} 业务系统
 * @params customResources {any} 自定义类型
 */
export type GetRecommendPreplanResType = {
    id: string;
    name: string;
    eventType: EventTypeInfoCommonType;
    areaCode: string;
    eventPriority: number;
    eventAffectRadius: number;
    dangerousSources: ResourceCommonType[];
    keyProtections: ResourceCommonType[];
    shelters: ResourceCommonType[];
    warehouses: ResourceCommonType[];
    emergencyFacilities: ResourceCommonType[];
    manpowerResources: ResourceCommonType[];
    medicalResources: ResourceCommonType[];
    pollutionSources: ResourceCommonType[];
    textTemplate: string;
    sceneParameters: any[];
    directoryRecordId: string;
    taskTemplate: TaskTemplateInfoCommonType;
    associatedGroup: GroupInfoCommonType;
    sceneGroup: GroupInfoCommonType;
    firstResponseLevel: ResponseLevelCommonType;
    secondResponseLevel: ResponseLevelCommonType;
    thirdResponseLevel: ResponseLevelCommonType;
    fourthResponseLevel: ResponseLevelCommonType;
    platformId: string;
    resourceId: string;
    cameraLabels: CameraLabelCommonType[];
    preplanGroups: GroupInfoCommonType[];
    videoConferenceTerminals: VideoConferenceTerminalCommonType[];
    thirdPlatforms: ThirdPlatformCommonType[];
    customResources: any;
};

/**
 * 通过反馈Id/反馈资源Id获取任务反馈——请求参数类型定义
 * @params id {string} 反馈Id/反馈资源Id （必填）
 * @params taskId {string} taskId （必填）
 * @headers X-version {string}
 */
export type GetFeedbacksByIdReqType = {
    id: string;
    taskId: string;
    'X-version'?: string;
};

/**
 * 通过反馈Id/反馈资源Id获取任务反馈——响应参数类型定义
 * @params id {string} 反馈Id
 * @params taskId {string} 任务Id
 * @params taskName {string} 任务名
 * @params taskState {TaskStateCommonType} 任务状态
 * @params content {string} 反馈内容
 * @params createdTime {string} 反馈时间
 * @params user {UserInfoCommonType} 反馈用户
 * @params group {GroupInfoCommonType} 反馈用户的组
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params type {TaskFeedbackEntityTypeCommonType} 任务反馈类型, 1-用户反馈|2-系统反馈
 * @params fileGroupId {string} 文件组Id
 */
export type GetFeedbacksByIdResType = {
    id: string;
    taskId: string;
    taskName: string;
    taskState: TaskStateCommonType;
    content: string;
    createdTime: string;
    user: UserInfoCommonType;
    group: GroupInfoCommonType;
    platformId: string;
    resourceId: string;
    type: TaskFeedbackEntityTypeCommonType;
    fileGroupId: string;
};

/**
 * 获取任务下所有反馈——请求参数类型定义
 * @params taskId {string} taskId （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetFeedbacksReqType = {
    taskId: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取任务下所有反馈——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {TaskFeedbackOutCommonType[]} 数据记录
 */
export type GetFeedbacksResType = {
    totalCount: number;
    records: TaskFeedbackOutCommonType[];
};

/**
 * 创建任务反馈——请求参数类型定义
 * @params taskId {string} taskId （必填）
 * @headers X-version {string}
 * @params content {string} 任务反馈内容 （必填）
 * @params fileGroupId {string} 文件组Id
 */
export type AddFeedbacksReqType = {
    taskId: string;
    'X-version'?: string;
    content: string;
    fileGroupId?: string;
};

/**
 * 创建任务反馈——响应参数类型定义
 * @params id {string} 反馈Id
 * @params taskId {string} 任务Id
 * @params taskName {string} 任务名
 * @params taskState {TaskStateCommonType} 任务状态
 * @params content {string} 反馈内容
 * @params createdTime {string} 反馈时间
 * @params user {UserInfoCommonType} 反馈用户
 * @params group {GroupInfoCommonType} 反馈用户的组
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params type {TaskFeedbackEntityTypeCommonType} 任务反馈类型, 1-用户反馈|2-系统反馈
 * @params fileGroupId {string} 文件组Id
 */
export type AddFeedbacksResType = {
    id: string;
    taskId: string;
    taskName: string;
    taskState: TaskStateCommonType;
    content: string;
    createdTime: string;
    user: UserInfoCommonType;
    group: GroupInfoCommonType;
    platformId: string;
    resourceId: string;
    type: TaskFeedbackEntityTypeCommonType;
    fileGroupId: string;
};

/**
 * 导入任务反馈——请求参数类型定义
 * @headers X-version {string}
 * @params taskFeedbackItems {TaskFeedbackItemCommonType[]} 任务反馈导入集合 （必填）
 */
export type ImportTaskFeedbackReqType = {
    'X-version'?: string;
    taskFeedbackItems: TaskFeedbackItemCommonType[];
};

/**
 * 通过任务Id获取任务——请求参数类型定义
 * @params id {string} 任务Id （必填）
 * @headers X-version {string}
 */
export type EtsGetTasksByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 通过任务Id获取任务——响应参数类型定义
 * @params id {string} 任务Id
 * @params name {string} 任务名
 * @params description {string} 任务详情
 * @params associateEventId {string} 任务关联事件
 * @params parentId {string} 父任务 Id
 * @params type {TaskTypeCommonType} 任务类型
 * @params state {TaskStateCommonType} 任务状态
 * @params group {GroupInfoCommonType} 组对象
 * @params groupMembers {UserInfoCommonType[]} 任务组成员
 * @params destination {TaskDestinationCommonType} 任务目的地
 * @params expectStartedTime {string} 预计开始时间
 * @params actualStartedTime {string} 实际开始时间
 * @params expectFinishedTime {string} 预计结束时间
 * @params actualFinishedTime {string} 实际结束时间
 * @params createdTime {string} 任务创建时间
 * @params order {number} 任务顺序
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params updateTime {string} 最新修改时间
 */
export type EtsGetTasksByIdResType = {
    id: string;
    name: string;
    description: string;
    associateEventId: string;
    parentId: string;
    type: TaskTypeCommonType;
    state: TaskStateCommonType;
    group: GroupInfoCommonType;
    groupMembers: UserInfoCommonType[];
    destination: TaskDestinationCommonType;
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
 * 更新指定任务——请求参数类型定义
 * @params id {string} 任务ID （必填）
 * @headers X-version {string}
 * @params name {string} 任务名 （必填）
 * @params description {string} 任务描述
 * @params groupId {string} 组Id
 * @params destination {TaskDestinationCommonType} 任务目的地
 * @params expectStartedTime {string} 预计开始时间
 * @params expectFinishedTime {string} 预计结束时间
 */
export type UpdateTasksReqType = {
    id: string;
    'X-version'?: string;
    name: string;
    description?: string;
    groupId?: string;
    destination?: TaskDestinationCommonType;
    expectStartedTime?: string;
    expectFinishedTime?: string;
};

/**
 * 删除指定任务,如果是父任务会连同子任务一起删除——请求参数类型定义
 * @params id {string} 任务ID （必填）
 * @headers X-version {string}
 */
export type DeleteTasksReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 通过事件ID查询所有任务——请求参数类型定义
 * @params eventId {string} 事件ID （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type EtsGetTasksByEventIdReqType = {
    eventId: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 通过事件ID查询所有任务——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {TaskEntityOutCommonType[]} 数据记录
 */
export type EtsGetTasksByEventIdResType = {
    totalCount: number;
    records: TaskEntityOutCommonType[];
};

/**
 * 创建新的父任务——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 * @params name {string} 任务名 （必填）
 * @params description {string} 任务描述
 * @params groupId {string} 组Id
 * @params destination {TaskDestinationCommonType} 任务目的地
 * @params expectStartedTime {string} 预计开始时间
 * @params expectFinishedTime {string} 预计结束时间
 */
export type AddTasksReqType = {
    eventId: string;
    'X-version'?: string;
    name: string;
    description?: string;
    groupId?: string;
    destination?: TaskDestinationCommonType;
    expectStartedTime?: string;
    expectFinishedTime?: string;
};

/**
 * 创建新的父任务——响应参数类型定义
 * @params id {string} 任务Id
 * @params name {string} 任务名
 * @params description {string} 任务详情
 * @params associateEventId {string} 任务关联事件
 * @params parentId {string} 父任务 Id
 * @params type {TaskTypeCommonType} 任务类型
 * @params state {TaskStateCommonType} 任务状态
 * @params group {GroupInfoCommonType} 组对象
 * @params groupMembers {UserInfoCommonType[]} 任务组成员
 * @params destination {TaskDestinationCommonType} 任务目的地
 * @params expectStartedTime {string} 预计开始时间
 * @params actualStartedTime {string} 实际开始时间
 * @params expectFinishedTime {string} 预计结束时间
 * @params actualFinishedTime {string} 实际结束时间
 * @params createdTime {string} 任务创建时间
 * @params order {number} 任务顺序
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params updateTime {string} 最新修改时间
 */
export type AddTasksResType = {
    id: string;
    name: string;
    description: string;
    associateEventId: string;
    parentId: string;
    type: TaskTypeCommonType;
    state: TaskStateCommonType;
    group: GroupInfoCommonType;
    groupMembers: UserInfoCommonType[];
    destination: TaskDestinationCommonType;
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
 * 模糊查询任务——请求参数类型定义
 * @params keyword {string} 模糊匹配关键字
 * @params EventId {string} 事件ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetTasksReqType = {
    keyword?: string;
    EventId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 模糊查询任务——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {TaskEntityOutCommonType[]} 数据记录
 */
export type GetTasksResType = {
    totalCount: number;
    records: TaskEntityOutCommonType[];
};

/**
 * 通过父任务ID查询子任务——请求参数类型定义
 * @params id {string} 父任务ID （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetSubTasksReqType = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 通过父任务ID查询子任务——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {TaskEntityOutCommonType[]} 数据记录
 */
export type GetSubTasksResType = {
    totalCount: number;
    records: TaskEntityOutCommonType[];
};

/**
 * 获取自身相关任务——请求参数类型定义
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetOwnerTasksReqType = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取自身相关任务——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {TaskEntityOutCommonType[]} 数据记录
 */
export type GetOwnerTasksResType = {
    totalCount: number;
    records: TaskEntityOutCommonType[];
};

/**
 * 导入任务——请求参数类型定义
 * @headers X-version {string}
 * @params importTasks {ImportTaskCommonType[]} 任务 （必填）
 */
export type ImportTasksReqType = {
    'X-version'?: string;
    importTasks: ImportTaskCommonType[];
};

/**
 * 创建新的子任务——请求参数类型定义
 * @params parentId {string} parentId （必填）
 * @headers X-version {string}
 * @params name {string} 任务名 （必填）
 * @params description {string} 任务描述
 * @params groupId {string} 组Id
 * @params destination {TaskDestinationCommonType} 任务目的地
 * @params expectStartedTime {string} 预计开始时间
 * @params expectFinishedTime {string} 预计结束时间
 */
export type AddSubTasksReqType = {
    parentId: string;
    'X-version'?: string;
    name: string;
    description?: string;
    groupId?: string;
    destination?: TaskDestinationCommonType;
    expectStartedTime?: string;
    expectFinishedTime?: string;
};

/**
 * 创建新的子任务——响应参数类型定义
 * @params id {string} 任务Id
 * @params name {string} 任务名
 * @params description {string} 任务详情
 * @params associateEventId {string} 任务关联事件
 * @params parentId {string} 父任务 Id
 * @params type {TaskTypeCommonType} 任务类型
 * @params state {TaskStateCommonType} 任务状态
 * @params group {GroupInfoCommonType} 组对象
 * @params groupMembers {UserInfoCommonType[]} 任务组成员
 * @params destination {TaskDestinationCommonType} 任务目的地
 * @params expectStartedTime {string} 预计开始时间
 * @params actualStartedTime {string} 实际开始时间
 * @params expectFinishedTime {string} 预计结束时间
 * @params actualFinishedTime {string} 实际结束时间
 * @params createdTime {string} 任务创建时间
 * @params order {number} 任务顺序
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 * @params updateTime {string} 最新修改时间
 */
export type AddSubTasksResType = {
    id: string;
    name: string;
    description: string;
    associateEventId: string;
    parentId: string;
    type: TaskTypeCommonType;
    state: TaskStateCommonType;
    group: GroupInfoCommonType;
    groupMembers: UserInfoCommonType[];
    destination: TaskDestinationCommonType;
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
 * 更新任务状态——请求参数类型定义
 * @params taskId {string} taskId （必填）
 * @params state {number}  （必填）
 * @headers X-version {string}
 */
export type UpdateTasksStatusReqType = {
    taskId: string;
    state: number;
    'X-version'?: string;
};

/**
 * 更改任务的排序，需要提交整个事件全部任务的排序，序号由0开始——请求参数类型定义
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}
 * @params taskOrderInfos {TaskOrderInfoInCommonType[]} 任务排序的信息 （必填）
 */
export type UpdateTasksOrderReqType = {
    eventId: string;
    'X-version'?: string;
    taskOrderInfos: TaskOrderInfoInCommonType[];
};

/**
 * 通过任务模板Id获取任务模板——请求参数类型定义
 * @params id {string} 任务模板Id （必填）
 * @headers X-version {string}
 */
export type GetTaskTemplatesByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 通过任务模板Id获取任务模板——响应参数类型定义
 * @params id {string} 模板Id
 * @params name {string} 模板名称
 * @params description {string} 任务模板描述
 * @params parentTaskTempInfos {TaskTempInfoOutCommonType[]} 任务模板信息
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 */
export type GetTaskTemplatesByIdResType = {
    id: string;
    name: string;
    description: string;
    parentTaskTempInfos: TaskTempInfoOutCommonType[];
    platformId: string;
    resourceId: string;
};

/**
 * 更新指定任务模板——请求参数类型定义
 * @params id {string} 需更新的任务模板Id （必填）
 * @headers X-version {string}
 * @params name {string} 任务名称 （必填）
 * @params description {string} 任务详情
 * @params parentTaskTempInfos {TaskTempInfoCommonType[]} 任务模板信息
 */
export type UpdateTaskTemplatesReqType = {
    id: string;
    'X-version'?: string;
    name: string;
    description?: string;
    parentTaskTempInfos?: TaskTempInfoCommonType[];
};

/**
 * 删除指定任务模板——请求参数类型定义
 * @params id {string} 任务模板Id （必填）
 * @headers X-version {string}
 */
export type DeleteTaskTemplatesReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 条件查询任务模板，不带条件时返回所有任务模板——请求参数类型定义
 * @params keyword {string} 关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetTaskTemplatesReqType = {
    keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 条件查询任务模板，不带条件时返回所有任务模板——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {TaskTempOutCommonType[]} 数据记录
 */
export type GetTaskTemplatesResType = {
    totalCount: number;
    records: TaskTempOutCommonType[];
};

/**
 * 创建任务模板——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 任务名称 （必填）
 * @params description {string} 任务详情
 * @params parentTaskTempInfos {TaskTempInfoCommonType[]} 任务模板信息
 */
export type AddTaskTemplatesReqType = {
    'X-version'?: string;
    name: string;
    description?: string;
    parentTaskTempInfos?: TaskTempInfoCommonType[];
};

/**
 * 创建任务模板——响应参数类型定义
 * @params id {string} 模板Id
 * @params name {string} 模板名称
 * @params description {string} 任务模板描述
 * @params parentTaskTempInfos {TaskTempInfoOutCommonType[]} 任务模板信息
 * @params platformId {string} 平台来源ID
 * @params resourceId {string} 外部资源唯一Id
 */
export type AddTaskTemplatesResType = {
    id: string;
    name: string;
    description: string;
    parentTaskTempInfos: TaskTempInfoOutCommonType[];
    platformId: string;
    resourceId: string;
};

/**
 * 导入任务模板——请求参数类型定义
 * @headers X-version {string}
 * @params taskTemplates {ImportTaskTemplateInCommonType[]} 导入任务模板列表
 */
export type ImportTaskTemplatesReqType = {
    'X-version'?: string;
    taskTemplates?: ImportTaskTemplateInCommonType[];
};
