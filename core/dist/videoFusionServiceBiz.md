/**
 * 使用状态
 */
type UseStatusCommonType = 0 | 1 | 2;

/**
 * 监控状态
 */
type EnumTypesCameraStatusCommonType = 1 | 2 | 3 | 4;

/**
 * 标签实体
 * @params id {number} 主键
 * @params title {string} 标签标题
 * @params color {string} 标签颜色
 * @params description {string} 标签说明
 */
type LabelOutCommonType = {
    id?: number;
    title?: string;
    color?: string;
    description?: string;
};

/**
 * 监控搜索响应
 * @params id {string} Id
 * @params name {string} 监控名
 * @params aliasName {string} 监控别名
 * @params useStatus {UseStatusCommonType} 节点选中状态。0-未选中1-部分选中2-全选
 * @params originalName {string} 原始名称
 * @params parentId {string} 父Id
 * @params namePath {string} 监控组名路径,如  Root Business Group/本域/化工板块
 * @params idPath {string} Id路径
 * @params status {EnumTypesCameraStatusCommonType} 监控状态，·设备离线，设备可为服务器，NVR，IPC等；2设备在线；3下级域离线后设备离线；4设备在录像，设备一般为 IPC
 * @params groupType {number} 组类型：0是国标组，1是本地组，2是预案组
 * @params labels {LabelOutCommonType[]} 监控标签
 * @params latitude {number} 所在位置的纬度
 * @params longitude {number} 所在位置的经度
 */
type CamerasSearchResponseCommonType = {
    id?: string;
    name?: string;
    aliasName?: string;
    useStatus?: UseStatusCommonType;
    originalName?: string;
    parentId?: string;
    namePath?: string;
    idPath?: string;
    status?: EnumTypesCameraStatusCommonType;
    groupType?: number;
    labels?: LabelOutCommonType[];
    latitude?: number;
    longitude?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {CamerasSearchResponseCommonType[]} 记录
 */
type CamerasSearchResponseReqCommonType = {
    totalCount?: number;
    records?: CamerasSearchResponseCommonType[];
};

/**
 * 监控高级搜索请求
 * @params keyword {string} 关键字
 * @params status {number} 监控状态，0表示搜索全部；1是离线；2是在线；4是下级域离线后设备离线；8是设备在录像，设备一般为 IPC；支持多种资源搜索，比如输入5，5=14，搜索离线和下级域离线后设备离线，该参数限制0-15
 * @params quality {any[]} 质量
 * @params resolution {any[]} 分辨率
 * @params encode {any[]} 压缩格式
 * @params audio {boolean} 是否有音频
 * @params labelIds {any[]} 标签
 * @params isSupportPTZ {boolean} 是否可以进行云台控制true-可以false-不可以null-全部
 * @params groupType {number} 资源所属监控组类型，0表示搜索全部,1是国标资源，2是预案资源，4是本地资源，支持多种资源搜索，比如输入5，5=14，搜索国标资源和本地资源
 * @params areaCode {string} 行政区域
 * @params pathPrefix {string} 路径前缀，目录有多个路径时去当前前缀相匹配的路径
 * @params selectedIds {any[]} 被选中的节点，用于计算其父节点是否是全选,半选和未选中
 * @params unSelectedIds {any[]} 被选中的节点，用于计算其父节点是否是全选,半选和未选中
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量
 */
type CameraAdvanceSearchRequestCommonType = {
    keyword?: string;
    status?: number;
    quality?: any[];
    resolution?: any[];
    encode?: any[];
    audio?: boolean;
    labelIds?: any[];
    isSupportPTZ?: boolean;
    groupType?: number;
    areaCode?: string;
    pathPrefix?: string;
    selectedIds?: any[];
    unSelectedIds?: any[];
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 视频编码类型
 */
type EnumTypesVideoEncoderCommonType = 0 | 1;

/**
 * 分辨率
 */
type EnumTypesResolutionCommonType = 0 | 1 | 2 | 3;

/**
 * 图片质量类型
 */
type EnumTypesQualityCommonType = 0 | 1 | 2 | 3 | 4;

/**
 * 图片质量
 * @params imageQuality {number} 图像质量
 * @params brightness {number} 亮度
 * @params color {number} 颜色
 * @params contrast {number} 对比度
 * @params blur {number} 模糊
 * @params noiseInterference {number} 噪声干扰
 * @params scrolling {number} 滚屏
 * @params shade {number} 遮挡
 * @params screenFreezing {number} 画面冻结
 * @params snr {number} 信噪比
 * @params psnr {number} 峰值信噪比
 * @params imageDistortion {number} 图像畸变
 * @params blackScreen {number} 黑屏
 * @params specialFlowerScreen {number} 特殊花屏
 */
type VideoQualityCommonType = {
    imageQuality?: number;
    brightness?: number;
    color?: number;
    contrast?: number;
    blur?: number;
    noiseInterference?: number;
    scrolling?: number;
    shade?: number;
    screenFreezing?: number;
    snr?: number;
    psnr?: number;
    imageDistortion?: number;
    blackScreen?: number;
    specialFlowerScreen?: number;
};

/**
 * 高级搜索输出
 * @params id {string} 监控Id
 * @params name {string} 监控名称
 * @params aliasName {string} 监控别名
 * @params originalName {string} 监控原始名称
 * @params useStatus {UseStatusCommonType} 节点选中状态。0-未选中1-部分选中2-全选
 * @params status {EnumTypesCameraStatusCommonType} 监控状态
 * @params videoEncoder {EnumTypesVideoEncoderCommonType} 压缩格式
 * @params resolution {EnumTypesResolutionCommonType} 分辨率
 * @params audio {boolean} 是否有音频
 * @params result {EnumTypesQualityCommonType} 质量
 * @params resultDetail {VideoQualityCommonType} 质量详情
 * @params labels {LabelOutCommonType[]} 监控标签
 * @params latitude {number} 所在位置的纬度
 * @params longitude {number} 所在位置的经度
 * @params parentId {string} 所属目录Id
 * @params idPath {string} IdPath
 * @params namePath {string} NamePath
 */
type CameraAdvanceSearchOutCommonType = {
    id?: string;
    name?: string;
    aliasName?: string;
    originalName?: string;
    useStatus?: UseStatusCommonType;
    status?: EnumTypesCameraStatusCommonType;
    videoEncoder?: EnumTypesVideoEncoderCommonType;
    resolution?: EnumTypesResolutionCommonType;
    audio?: boolean;
    result?: EnumTypesQualityCommonType;
    resultDetail?: VideoQualityCommonType;
    labels?: LabelOutCommonType[];
    latitude?: number;
    longitude?: number;
    parentId?: string;
    idPath?: string;
    namePath?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {CameraAdvanceSearchOutCommonType[]} 记录
 */
type CameraAdvanceSearchOutReqCommonType = {
    totalCount?: number;
    records?: CameraAdvanceSearchOutCommonType[];
};

/**
 * SIP传输协议类型
 */
type EnumTypesSipTransProtocolCommonType = 0 | 1;

/**
 * 国标流媒体向下级发流协议
 */
type RtpSendTypeCommonType = 0 | 1 | 2;

/**
 * 国标流媒体收流协议
 */
type EnumTypesRtpRecvTypeCommonType = 0 | 1 | 2;

/**
 * 国标监控终端入参
 * @params lowerDomainId {string} 下级域Id
 * @params videoChannelId {string} 视频通道标识
 * @params ipAddress {string} IP地址
 * @params port {number} 端口
 * @params password {string} 密码
 * @params heartbeatCycle {number} 心跳周期
 * @params maxHeartbeatTimeoutCount {number} 最大心跳超时次数
 * @params sipTransProtocol {EnumTypesSipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params rtpSendType {RtpSendTypeCommonType} 媒体流发送传输类型. 0:UDP 1:TCP被动 2:TCP主动
 * @params rtpRecvType {EnumTypesRtpRecvTypeCommonType} 媒体流接收传输类型. 0:UDP 1:TCP被动 2:TCP主动
 * @params isPublicNetwork {boolean} 是否公网
 * @params isAuth {boolean} 是否启用认证
 * @params name {string} 名称
 * @params parentId {string} 组Id
 * @params aliasName {string} 监控别名
 * @params quality {EnumTypesQualityCommonType} 监控质量
 * @params isManual {boolean} True手动检测/ false智能检测，可为null，为null表示不修改
 * @params labelIds {any[]} 监控标签id
 * @params isSupportPTZ {boolean} 是否可以进行云台控制true-可以false-不可以null-不修改
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params areaCode {string} 行政区域码
 */
type GbCameraTerminalInCommonType = {
    lowerDomainId: string;
    videoChannelId: string;
    ipAddress: string;
    port: number;
    password?: string;
    heartbeatCycle?: number;
    maxHeartbeatTimeoutCount?: number;
    sipTransProtocol?: EnumTypesSipTransProtocolCommonType;
    rtpSendType?: RtpSendTypeCommonType;
    rtpRecvType?: EnumTypesRtpRecvTypeCommonType;
    isPublicNetwork?: boolean;
    isAuth?: boolean;
    name: string;
    parentId: string;
    aliasName?: string;
    quality?: EnumTypesQualityCommonType;
    isManual?: boolean;
    labelIds: any[];
    isSupportPTZ?: boolean;
    longitude: number;
    latitude: number;
    areaCode?: string;
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
 * Url对应的实体类型
 */
type EnumTypesPlayUrlTypeCommonType = 0 | 1 | 2;

/**
 * 返回监控播放Url实体
 * @params playUrlType {EnumTypesPlayUrlTypeCommonType} 类型 0直播，1监控
 * @params rtspUrl {string} rtsp播放地址
 * @params flvUrl {string} flv播放地址
 * @params wsUrl {string} Ws 协议播放地址
 * @params rtmpUrl {string} rtmp 的协议播放地址
 * @params webRtc {string} wbertc播放地址
 */
type PlayUrlOutCommonType = {
    playUrlType?: EnumTypesPlayUrlTypeCommonType;
    rtspUrl?: string;
    flvUrl?: string;
    wsUrl?: string;
    rtmpUrl?: string;
    webRtc?: string;
};

/**
 * 返回监控数据实体
 * @params videoEncoder {EnumTypesVideoEncoderCommonType} 视频编码类型:0为H264，1为H265
 * @params resolution {EnumTypesResolutionCommonType} 分辨率
 * @params audio {boolean} 是否有音频
 * @params result {EnumTypesQualityCommonType} 质量
 * @params resultDetail {VideoQualityCommonType} 质量详情
 * @params namePath {string} 监控名字路径
 * @params idPath {string} 监控ID路径
 * @params order {number} 排序字段
 * @params detectionCount {number} 巡检的次数
 * @params faultDetail {number} 质量故障的错误码：http://git.rdapp.com/product/knowledge-planet/issues/818
 * @params isManual {boolean} 是否是手动设置
 * @params labels {LabelOutCommonType[]} 标签
 * @params audioEncodingFormat {string} 音频编码属性
 * @params isSupportPTZ {boolean} 是否可以进行云台控制
 * @params aliasName {string} 监控别名
 * @params originalName {string} 原始名称
 * @params status {EnumTypesCameraStatusCommonType} 监控状态1-离线2-在线
 * @params quality {EnumTypesQualityCommonType} 监控质量0-未检测1-差2-优3-良4-故障
 * @params areaCode {string} 行政区域码
 * @params thumbnailID {string} 图片id
 * @params playUrl {PlayUrlOutCommonType} 播放地址
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params id {string} ID
 * @params name {string} 名称
 */
type CameraOutCommonType = {
    videoEncoder?: EnumTypesVideoEncoderCommonType;
    resolution?: EnumTypesResolutionCommonType;
    audio?: boolean;
    result?: EnumTypesQualityCommonType;
    resultDetail?: VideoQualityCommonType;
    namePath?: string;
    idPath?: string;
    order?: number;
    detectionCount?: number;
    faultDetail?: number;
    isManual?: boolean;
    labels?: LabelOutCommonType[];
    audioEncodingFormat?: string;
    isSupportPTZ?: boolean;
    aliasName?: string;
    originalName?: string;
    status?: EnumTypesCameraStatusCommonType;
    quality?: EnumTypesQualityCommonType;
    areaCode?: string;
    thumbnailID?: string;
    playUrl?: PlayUrlOutCommonType;
    longitude?: number;
    latitude?: number;
    id?: string;
    name?: string;
};

/**
 * 国标监控终端更新入参
 * @params ipAddress {string} IP地址
 * @params port {number} 端口
 * @params password {string} 密码
 * @params heartbeatCycle {number} 心跳周期
 * @params maxHeartbeatTimeoutCount {number} 最大心跳超时次数
 * @params sipTransProtocol {EnumTypesSipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params rtpSendType {RtpSendTypeCommonType} 媒体流发送传输类型. 0:UDP 1:TCP被动 2:TCP主动
 * @params rtpRecvType {EnumTypesRtpRecvTypeCommonType} 媒体流接收传输类型. 0:UDP 1:TCP被动 2:TCP主动
 * @params isPublicNetwork {boolean} 是否公网
 * @params isAuth {boolean} 是否启用认证
 * @params name {string} 名称
 * @params parentId {string} 组Id
 * @params aliasName {string} 监控别名
 * @params quality {EnumTypesQualityCommonType} 监控质量
 * @params isManual {boolean} True手动检测/ false智能检测，可为null，为null表示不修改
 * @params labelIds {any[]} 监控标签id
 * @params isSupportPTZ {boolean} 是否可以进行云台控制true-可以false-不可以null-不修改
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params areaCode {string} 行政区域码
 */
type UpdateGbCameraTerminalInCommonType = {
    ipAddress: string;
    port: number;
    password?: string;
    heartbeatCycle?: number;
    maxHeartbeatTimeoutCount?: number;
    sipTransProtocol?: EnumTypesSipTransProtocolCommonType;
    rtpSendType?: RtpSendTypeCommonType;
    rtpRecvType?: EnumTypesRtpRecvTypeCommonType;
    isPublicNetwork?: boolean;
    isAuth?: boolean;
    name: string;
    parentId: string;
    aliasName?: string;
    quality?: EnumTypesQualityCommonType;
    isManual?: boolean;
    labelIds: any[];
    isSupportPTZ?: boolean;
    longitude: number;
    latitude: number;
    areaCode?: string;
};

/**
 * 视频拉流终端入参
 * @params pullAddress {string} 拉流地址
 * @params name {string} 名称
 * @params parentId {string} 组Id
 * @params aliasName {string} 监控别名
 * @params quality {EnumTypesQualityCommonType} 监控质量
 * @params isManual {boolean} True手动检测/ false智能检测，可为null，为null表示不修改
 * @params labelIds {any[]} 监控标签id
 * @params isSupportPTZ {boolean} 是否可以进行云台控制true-可以false-不可以null-不修改
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params areaCode {string} 行政区域码
 */
type NonStandardCameraTerminalInCommonType = {
    pullAddress?: string;
    name: string;
    parentId: string;
    aliasName?: string;
    quality?: EnumTypesQualityCommonType;
    isManual?: boolean;
    labelIds: any[];
    isSupportPTZ?: boolean;
    longitude: number;
    latitude: number;
    areaCode?: string;
};

/**
 * 非标监控更新入参
 * @params pullAddress {string} 拉流地址
 * @params name {string} 名称
 * @params parentId {string} 组Id
 * @params aliasName {string} 监控别名
 * @params quality {EnumTypesQualityCommonType} 监控质量
 * @params isManual {boolean} True手动检测/ false智能检测，可为null，为null表示不修改
 * @params labelIds {any[]} 监控标签id
 * @params isSupportPTZ {boolean} 是否可以进行云台控制true-可以false-不可以null-不修改
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params areaCode {string} 行政区域码
 */
type UpdateNonStandardCameraTerminalInCommonType = {
    pullAddress?: string;
    name: string;
    parentId: string;
    aliasName?: string;
    quality?: EnumTypesQualityCommonType;
    isManual?: boolean;
    labelIds: any[];
    isSupportPTZ?: boolean;
    longitude: number;
    latitude: number;
    areaCode?: string;
};

/**
 * 视频文件终端
 * @params fileUrl {string} 视频文件地址
 * @params name {string} 名称
 * @params parentId {string} 组Id
 * @params aliasName {string} 监控别名
 * @params quality {EnumTypesQualityCommonType} 监控质量
 * @params isManual {boolean} True手动检测/ false智能检测，可为null，为null表示不修改
 * @params labelIds {any[]} 监控标签id
 * @params isSupportPTZ {boolean} 是否可以进行云台控制true-可以false-不可以null-不修改
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params areaCode {string} 行政区域码
 */
type VideoFileTerminalInCommonType = {
    fileUrl: string;
    name: string;
    parentId: string;
    aliasName?: string;
    quality?: EnumTypesQualityCommonType;
    isManual?: boolean;
    labelIds: any[];
    isSupportPTZ?: boolean;
    longitude: number;
    latitude: number;
    areaCode?: string;
};

/**
 * 非标监控更新入参
 * @params fileUrl {string} 视频文件地址
 * @params name {string} 名称
 * @params parentId {string} 组Id
 * @params aliasName {string} 监控别名
 * @params quality {EnumTypesQualityCommonType} 监控质量
 * @params isManual {boolean} True手动检测/ false智能检测，可为null，为null表示不修改
 * @params labelIds {any[]} 监控标签id
 * @params isSupportPTZ {boolean} 是否可以进行云台控制true-可以false-不可以null-不修改
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params areaCode {string} 行政区域码
 */
type UpdateVideoFileTerminalInCommonType = {
    fileUrl: string;
    name: string;
    parentId: string;
    aliasName?: string;
    quality?: EnumTypesQualityCommonType;
    isManual?: boolean;
    labelIds: any[];
    isSupportPTZ?: boolean;
    longitude: number;
    latitude: number;
    areaCode?: string;
};

/**
 * 国标Id类型
 */
type GbIdTypeCommonType = 0 | 1 | 2;

/**
 * 生成国标Id的入参
 * @params type {GbIdTypeCommonType} 生成类型. 0: 监控 1-组 2-设备终端
 */
type GenerateGbIdInCommonType = {
    type?: GbIdTypeCommonType;
};

/**
 * 生成国标Id出参
 * @params gbId {string} 国标 Id
 */
type GenerateGbIdOutCommonType = {
    gbId?: string;
};

/**
 * 标签查询的返回结果
 * @params cameraTotal {number} 标签绑定的监控数量
 * @params onlineCameraTotal {number} 在线监控数量
 * @params createdTime {string} 标签创建时间
 * @params id {number} 主键
 * @params title {string} 标签标题
 * @params color {string} 标签颜色
 * @params description {string} 标签说明
 */
type QueryLabelOutCommonType = {
    cameraTotal?: number;
    onlineCameraTotal?: number;
    createdTime?: string;
    id?: number;
    title?: string;
    color?: string;
    description?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {QueryLabelOutCommonType[]} 记录
 */
type QueryLabelOutReqCommonType = {
    totalCount?: number;
    records?: QueryLabelOutCommonType[];
};

/**
 * 音频类型
 */
type EnumTypesAudioFormatCommonType = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * 流路径
 */
type EnumTypesStreamPathCommonType = 0 | 1 | 2 | 3;

/**
 * 媒体流客户端
 * @params clientId {string} 目的方tokenId
 * @params clientIp {string} 目的方IP
 * @params clientPort {number} 目的方端口
 * @params clientType {number} 目的方类型，0：GB，1：GB解码，2：rtsp，3：rtmp，4：flv，5：webrtc
 * @params mediaSendIp {string} 流媒体发送IP
 * @params mediaSendPort {number} 流媒体发送端口
 * @params sendStreamType {number} 流媒体发送码流类型
 * @params sendTransType {number} 流媒体器发送协议类型（0：国标UDP，1：国标tcp-server，2：国标tcp主动）
 * @params failStreamPath {EnumTypesStreamPathCommonType} 流失败的路径，0-终端失败1-流媒体收流失败2-流媒体发送失败3-客户端失败null-流正常
 * @params userId {string} 用户id
 * @params userName {string} 用户名称
 */
type MediaStreamClientCommonType = {
    clientId?: string;
    clientIp?: string;
    clientPort?: number;
    clientType?: number;
    mediaSendIp?: string;
    mediaSendPort?: number;
    sendStreamType?: number;
    sendTransType?: number;
    failStreamPath?: EnumTypesStreamPathCommonType;
    userId?: string;
    userName?: string;
};

/**
 * 流记录基础对象
 * @params businessName {string} 业务类型 live:事件快报，aslive：app人员直播，meetlive：会议直播
 * @params bitRate {number} 实时码率
 * @params startTime {string} 开始拉流时间
 * @params deviceName {string} 设备名
 * @params deviceId {string} 设备名
 * @params lossPackets {number} 丢包数
 * @params receivedPackets {number} 收包总数
 * @params cId {string} 链路ID
 * @params videoEncoder {EnumTypesVideoEncoderCommonType} 视频的编码方式（0：H264，1：H265）
 * @params audioFormat {EnumTypesAudioFormatCommonType} 音频的编码方式（0：无，1：G711A，2：G711U，3：AAC,4：OPUS,5：未知）
 * @params totalReaderCount {number} 观看本视频流的总人数
 * @params mediaServerId {string} 该视频流的媒体id
 * @params mediaServerName {string} 该视频流的媒体名称
 * @params resolution {EnumTypesResolutionCommonType} 分辨率
 * @params clients {MediaStreamClientCommonType[]} 客户端拉流信息
 * @params terminal {string} 终端
 * @params stream {string} 流id
 */
type MediaStreamOutCommonType = {
    businessName?: string;
    bitRate?: number;
    startTime?: string;
    deviceName?: string;
    deviceId?: string;
    lossPackets?: number;
    receivedPackets?: number;
    cId?: string;
    videoEncoder?: EnumTypesVideoEncoderCommonType;
    audioFormat?: EnumTypesAudioFormatCommonType;
    totalReaderCount?: number;
    mediaServerId?: string;
    mediaServerName?: string;
    resolution?: EnumTypesResolutionCommonType;
    clients?: MediaStreamClientCommonType[];
    terminal?: string;
    stream?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {MediaStreamOutCommonType[]} 记录
 */
type MediaStreamOutReqCommonType = {
    totalCount?: number;
    records?: MediaStreamOutCommonType[];
};

/**
 * 类型
 */
type EnumTypesCommonType = 0 | 1 | 2;

/**
 * 下级域状态
 */
type EnumTypesSipServiceStatusCommonType = 1 | 2;

/**
 * 同步状态
 */
type EnumTypesSyncStatusCommonType = 0 | 1 | 2 | 3 | 4;

/**
 * 监控终端类型
 */
type CameraTerminalTypeCommonType = 0 | 1 | 2 | 3;

/**
 * 监控负责人信息
 */
type PrincipalOutCommonType = {
    id?: string;
};

/**
 * 负责人信息
 */
type OwnerCommonType = {
    id?: string;
    name?: string;
    phone?: string;
    email?: string;
    ownerType?: 0 | 1;
    job?: string;
};

/**
 * 当前层质量统计
 */
type CameraQualityStatisticsCommonType = {
    unDetectedCount?: number;
    badCount?: number;
    excellentCount?: number;
    goodCount?: number;
    faultCount?: number;
};

/**
 * 分辨率统计
 */
type CameraResolutionStatisticsCommonType = {
    hdCount?: number;
    sdCount?: number;
    fullHdCount?: number;
    uhdCount?: number;
};

/**
 * 坐标
 */
type CoordinateCommonType = {
    longitude: number;
    latitude: number;
};

----

/**
 * 获取分组列表——请求参数类型定义
 * @params GroupType {number} -1：全部(默认)；0：监控组 1：预案组 2：自定义组
 * @params OperateGroupType {number} 操作的目录类型0-下级资源组1-我的资源组2-本地资源组查询根级时传null，查子级时必须带上类型, 类型从父级获取
 * @params ParentId {string} 父节点id，不填时查询根节点
 * @params PathPrefix {string} 路径前缀，目录有多个路径时去当前前缀相匹配的路径
 * @params SelectedIds {any[]} 被选中的节点，用于计算其父节点是否是全选,半选和未选中
 * @params UnSelectedIds {any[]} 被选中的节点，用于计算其父节点是否是全选,半选和未选中
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetCameraGroupsReqType = {
    GroupType?: number;
    OperateGroupType?: number;
    ParentId?: string;
    PathPrefix?: string;
    SelectedIds?: any[];
    UnSelectedIds?: any[];
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取分组列表——响应参数类型定义
 * @params sipServiceId {string} 国标下级Id
 * @params syncStatus {EnumTypesSyncStatusCommonType} 同步状态
 * @params sipServerStatus {EnumTypesSipServiceStatusCommonType} 下级域状态
 * @params useStatus {EnumTypesCommonType} 节点选中状态。0-未选中1-部分选中2-全选
 * @params isLeafGroup {boolean} 是否为叶子节点组。true 表示叶子节点，不会有子节点
 * @params isLeaf {boolean} 是否为叶子节点。true 表示叶子节点，不会有子节点
 * @params cameraCount {number} 摄像头总数包含下级分组的摄像头数量
 * @params cameraOnlineCount {number} 在线摄像头总数包含下级分组的摄像头数量
 * @params selfCameraCount {number} 自身组的摄像头总数
 * @params selfCameraOnlineCount {number} 自身在线摄像头总数
 * @params order {number} 排序字段
 * @params relatedParentId {string} 预案组/自定义组下级的关联父Id
 * @params principalOut {PrincipalOutCommonType[]} 监控负责人信息
 * @params owners {OwnerCommonType[]} 负责人信息
 * @params idPath {string} Id路径
 * @params namePath {string} Name路径
 * @params isUserDefined {number} 是否人为调整：0-未调整，1-已调整
 * @params cameraQualityStatistics {CameraQualityStatisticsCommonType} 质量统计
 * @params selfCameraQualityStatistics {CameraQualityStatisticsCommonType} 当前层质量统计
 * @params cameraResolutionStatistics {CameraResolutionStatisticsCommonType} 分辨率统计
 * @params selfCameraResolutionStatistics {CameraResolutionStatisticsCommonType} 当前层分辨率统计
 * @params id {string} 组Id
 * @params name {string} 组名
 * @params parentId {string} 上级分组Id
 * @params groupType {number} 分组类型
 * @params description {string} 描述
 * @params lastSyncTime {string} 最新同步时间
 * @params comeFrom {string} 国标下级域Id
 * @params aliasName {string} 目录别名
 * @params operate {EnumTypesCommonType} 操作类型
 * @params position {number} 位置
 */
export type GetCameraGroupsResType = {
    sipServiceId: string;
    syncStatus: EnumTypesSyncStatusCommonType;
    sipServerStatus: EnumTypesSipServiceStatusCommonType;
    useStatus: EnumTypesCommonType;
    isLeafGroup: boolean;
    isLeaf: boolean;
    cameraCount: number;
    cameraOnlineCount: number;
    selfCameraCount: number;
    selfCameraOnlineCount: number;
    order: number;
    relatedParentId: string;
    principalOut: PrincipalOutCommonType[];
    owners: OwnerCommonType[];
    idPath: string;
    namePath: string;
    isUserDefined: number;
    cameraQualityStatistics: CameraQualityStatisticsCommonType;
    selfCameraQualityStatistics: CameraQualityStatisticsCommonType;
    cameraResolutionStatistics: CameraResolutionStatisticsCommonType;
    selfCameraResolutionStatistics: CameraResolutionStatisticsCommonType;
    id: string;
    name: string;
    parentId: string;
    groupType: number;
    description: string;
    lastSyncTime: string;
    comeFrom: string;
    aliasName: string;
    operate: EnumTypesCommonType;
    position: number;
};

/**
 * 添加目录——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 目录名称 （必填）
 * @params type {EnumTypesCommonType} 目录类型0-国标资源1-我的资源2-本地资源
 * @params parentId {string} 父节点id
 * @params description {string} 描述信息
 * @params owners {OwnerCommonType[]} 责任人
 * @params operateGroupType {EnumTypesCommonType} 操作类型0-国标资源1-我的资源2-本地资源
 */
export type AddCameraGroupsReqType = {
    'X-version'?: string;
    name: string;
    type?: EnumTypesCommonType;
    parentId?: string;
    description?: string;
    owners?: OwnerCommonType[];
    operateGroupType?: EnumTypesCommonType;
};

/**
 * 添加目录——响应参数类型定义
 * @params id {string} 组Id
 * @params name {string} 组名
 * @params parentId {string} 上级分组Id
 * @params groupType {number} 分组类型
 * @params description {string} 描述
 * @params lastSyncTime {string} 最新同步时间
 * @params comeFrom {string} 国标下级域Id
 * @params aliasName {string} 目录别名
 * @params operate {EnumTypesCommonType} 操作类型
 * @params position {number} 位置
 */
export type AddCameraGroupsResType = {
    id: string;
    name: string;
    parentId: string;
    groupType: number;
    description: string;
    lastSyncTime: string;
    comeFrom: string;
    aliasName: string;
    operate: EnumTypesCommonType;
    position: number;
};

/**
 * 获取监控和目录集合——请求参数类型定义
 * @params GroupType {number} -1：全部(默认)；0：监控组 1：预案组 2：自定义组
 * @params OperateGroupType {number} 操作的目录类型0-下级资源组1-我的资源组2-本地资源组查询根级时传null，查子级时必须带上类型, 类型从父级获取
 * @params ParentId {string} 父节点id，不填时查询根节点
 * @params PathPrefix {string} 路径前缀，目录有多个路径时去当前前缀相匹配的路径
 * @params SelectedIds {any[]} 被选中的节点，用于计算其父节点是否是全选,半选和未选中
 * @params UnSelectedIds {any[]} 被选中的节点，用于计算其父节点是否是全选,半选和未选中
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetCameraGroupListReqType = {
    GroupType?: number;
    OperateGroupType?: number;
    ParentId?: string;
    PathPrefix?: string;
    SelectedIds?: any[];
    UnSelectedIds?: any[];
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取监控和目录集合——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetCameraGroupListResType = {
    totalCount: number;
    records: any[];
};

/**
 * 批量查询监控组信息接口——请求参数类型定义
 * @headers X-version {string}
 */
export type SearchCameraGroupsReqType = {
    'X-version'?: string;
};

/**
 * 批量查询监控组信息接口——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type SearchCameraGroupsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 同级监控组移动——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params groupId {string} 需要移动的组 （必填）
 * @params afterGroupId {string} 后一个，没有表示移动到后一个
 * @params beforeGroupId {string} 前一个，没有表示移动到第一个
 */
export type MoveCameraGroupReqType = {
    id: string;
    'X-version'?: string;
    groupId: string;
    afterGroupId?: string;
    beforeGroupId?: string;
};

/**
 * 根据父Id获取监控组——请求参数类型定义
 * @params id {string} id （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetChildrenCameraGroupsByIdReqType = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 根据父Id获取监控组——响应参数类型定义
 * @params sipServiceId {string} 国标下级Id
 * @params syncStatus {EnumTypesSyncStatusCommonType} 同步状态
 * @params sipServerStatus {EnumTypesSipServiceStatusCommonType} 下级域状态
 * @params useStatus {EnumTypesCommonType} 节点选中状态。0-未选中1-部分选中2-全选
 * @params isLeafGroup {boolean} 是否为叶子节点组。true 表示叶子节点，不会有子节点
 * @params isLeaf {boolean} 是否为叶子节点。true 表示叶子节点，不会有子节点
 * @params cameraCount {number} 摄像头总数包含下级分组的摄像头数量
 * @params cameraOnlineCount {number} 在线摄像头总数包含下级分组的摄像头数量
 * @params selfCameraCount {number} 自身组的摄像头总数
 * @params selfCameraOnlineCount {number} 自身在线摄像头总数
 * @params order {number} 排序字段
 * @params relatedParentId {string} 预案组/自定义组下级的关联父Id
 * @params principalOut {PrincipalOutCommonType[]} 监控负责人信息
 * @params owners {OwnerCommonType[]} 负责人信息
 * @params idPath {string} Id路径
 * @params namePath {string} Name路径
 * @params isUserDefined {number} 是否人为调整：0-未调整，1-已调整
 * @params cameraQualityStatistics {CameraQualityStatisticsCommonType} 质量统计
 * @params selfCameraQualityStatistics {CameraQualityStatisticsCommonType} 当前层质量统计
 * @params cameraResolutionStatistics {CameraResolutionStatisticsCommonType} 分辨率统计
 * @params selfCameraResolutionStatistics {CameraResolutionStatisticsCommonType} 当前层分辨率统计
 * @params id {string} 组Id
 * @params name {string} 组名
 * @params parentId {string} 上级分组Id
 * @params groupType {number} 分组类型
 * @params description {string} 描述
 * @params lastSyncTime {string} 最新同步时间
 * @params comeFrom {string} 国标下级域Id
 * @params aliasName {string} 目录别名
 * @params operate {EnumTypesCommonType} 操作类型
 * @params position {number} 位置
 */
export type GetChildrenCameraGroupsByIdResType = {
    sipServiceId: string;
    syncStatus: EnumTypesSyncStatusCommonType;
    sipServerStatus: EnumTypesSipServiceStatusCommonType;
    useStatus: EnumTypesCommonType;
    isLeafGroup: boolean;
    isLeaf: boolean;
    cameraCount: number;
    cameraOnlineCount: number;
    selfCameraCount: number;
    selfCameraOnlineCount: number;
    order: number;
    relatedParentId: string;
    principalOut: PrincipalOutCommonType[];
    owners: OwnerCommonType[];
    idPath: string;
    namePath: string;
    isUserDefined: number;
    cameraQualityStatistics: CameraQualityStatisticsCommonType;
    selfCameraQualityStatistics: CameraQualityStatisticsCommonType;
    cameraResolutionStatistics: CameraResolutionStatisticsCommonType;
    selfCameraResolutionStatistics: CameraResolutionStatisticsCommonType;
    id: string;
    name: string;
    parentId: string;
    groupType: number;
    description: string;
    lastSyncTime: string;
    comeFrom: string;
    aliasName: string;
    operate: EnumTypesCommonType;
    position: number;
};

/**
 * 批量添加监控组/监控到下级资源组/预案组/自定义组——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params groupIds {any[]} 监控组id列表
 * @params cameraIds {any[]} 监控id列表
 */
export type BatchAddCameraGroupReqType = {
    id: string;
    'X-version'?: string;
    groupIds?: any[];
    cameraIds?: any[];
};

/**
 * 批量添加监控到预案组或自定义组——请求参数类型定义
 * @headers X-version {string}
 * @params cameraIds {any[]} 监控id列表 （必填）
 * @params groupId {string} 组id （必填）
 * @params groupType {EnumTypesCommonType} 组类型1 Reserve 预案组2 Custom 自定义组
 */
export type BatchAddCameraToGroupReqType = {
    'X-version'?: string;
    cameraIds: any[];
    groupId: string;
    groupType?: EnumTypesCommonType;
};

/**
 * 监控组搜索——请求参数类型定义
 * @params Keyword {string} 关键字 （必填）
 * @params GroupType {number} 资源所属监控组类型,0表示搜索全部，1是国标资源，2是预案资源，4是本地资源，支持多种资源搜索，比如输入5，5=14，搜索国标资源和本地资源
 * @params PathPrefix {string} 路径前缀，目录有多个路径时去当前前缀相匹配的路径
 * @params SelectedIds {any[]} 被选中的节点，用于计算其父节点是否是全选,半选和未选中
 * @params UnSelectedIds {any[]} 被选中的节点，用于计算其父节点是否是全选,半选和未选中
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type QueryCameraGroupsReqType = {
    Keyword: string;
    GroupType?: number;
    PathPrefix?: string;
    SelectedIds?: any[];
    UnSelectedIds?: any[];
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 监控组搜索——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type QueryCameraGroupsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 监控组和监控搜索——请求参数类型定义
 * @params Keyword {string} 关键字
 * @params GroupType {number} 资源所属监控组类型,0表示搜索全部，1是国标资源，2是预案资源，4是本地资源，支持多种资源搜索，比如输入5，5=14，搜索国标资源和本地资源
 * @params PathPrefix {string} 路径前缀，目录有多个路径时去当前前缀相匹配的路径
 * @params SelectedIds {any[]} 被选中的节点，用于计算其父节点是否是全选,半选和未选中
 * @params UnSelectedIds {any[]} 被选中的节点，用于计算其父节点是否是全选,半选和未选中
 * @params Status {number} 监控状态，0表示搜索全部；1是离线；2是在线；4是下级域离线后设备离线；8是设备在录像，设备一般为 IPC；支持多种资源搜索，比如输入5，5=14，搜索离线和下级域离线后设备离线，该参数限制0-15
 * @params Quality {any[]} 质量
 * @params Resolution {any[]} 分辨率
 * @params Encode {any[]} 压缩格式
 * @params Audio {boolean} 是否有音频
 * @params LabelIds {any[]} 标签
 * @params IsSupportPTZ {boolean} 是否可以进行云台控制true-可以false-不可以null-全部
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type SearchGroupAndCameraReqType = {
    Keyword?: string;
    GroupType?: number;
    PathPrefix?: string;
    SelectedIds?: any[];
    UnSelectedIds?: any[];
    Status?: number;
    Quality?: any[];
    Resolution?: any[];
    Encode?: any[];
    Audio?: boolean;
    LabelIds?: any[];
    IsSupportPTZ?: boolean;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 监控组和监控搜索——响应参数类型定义
 * @params searchGroupOut {any[]} 搜索的监控组集合
 * @params searchCameraOut {CameraAdvanceSearchOutReqCommonType} 搜索的监控集合
 */
export type SearchGroupAndCameraResType = {
    searchGroupOut: any[];
    searchCameraOut: CameraAdvanceSearchOutReqCommonType;
};

/**
 * 组内移动监控——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params cameraId {string} 需要移动的监控 （必填）
 * @params afterCameraId {string} 后一个，没有表示移动到后一个
 * @params beforeCameraId {string} 前一个，没有表示移动到第一个
 */
export type MoveCameraReqType = {
    id: string;
    'X-version'?: string;
    cameraId: string;
    afterCameraId?: string;
    beforeCameraId?: string;
};

/**
 * 组内监控置顶——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params cameraId {string} 监控id （必填）
 */
export type MoveCameraTopReqType = {
    id: string;
    'X-version'?: string;
    cameraId: string;
};

/**
 * 移除预案组下得下级资源组/预案组/自定义组——请求参数类型定义
 * @params id {string} id （必填）
 * @params subGroupId {string} subGroupId （必填）
 * @headers X-version {string}
 */
export type DeleteSubGroupReqType = {
    id: string;
    subGroupId: string;
    'X-version'?: string;
};

/**
 * 下级资源添加组并挂载未分配目录资源——请求参数类型定义
 * @headers X-version {string}
 * @params groupIds {any[]} 未分配目录中的组id集合
 * @params cameraIds {any[]} 未分配目录中的监控id集合
 * @params name {string} 组名称 （必填）
 * @params parentId {string} 上级组Id （必填）
 * @params description {string} 描述
 * @params type {EnumTypesCommonType} 组类型
 * @params owners {OwnerCommonType[]} 责任人
 */
export type AddSubGroupReqType = {
    'X-version'?: string;
    groupIds?: any[];
    cameraIds?: any[];
    name: string;
    parentId: string;
    description?: string;
    type?: EnumTypesCommonType;
    owners?: OwnerCommonType[];
};

/**
 * 下级资源添加组并挂载未分配目录资源——响应参数类型定义
 * @params sipServiceId {string} 国标下级Id
 * @params syncStatus {EnumTypesSyncStatusCommonType} 同步状态
 * @params sipServerStatus {EnumTypesSipServiceStatusCommonType} 下级域状态
 * @params useStatus {EnumTypesCommonType} 节点选中状态。0-未选中1-部分选中2-全选
 * @params isLeafGroup {boolean} 是否为叶子节点组。true 表示叶子节点，不会有子节点
 * @params isLeaf {boolean} 是否为叶子节点。true 表示叶子节点，不会有子节点
 * @params cameraCount {number} 摄像头总数包含下级分组的摄像头数量
 * @params cameraOnlineCount {number} 在线摄像头总数包含下级分组的摄像头数量
 * @params selfCameraCount {number} 自身组的摄像头总数
 * @params selfCameraOnlineCount {number} 自身在线摄像头总数
 * @params order {number} 排序字段
 * @params relatedParentId {string} 预案组/自定义组下级的关联父Id
 * @params principalOut {PrincipalOutCommonType[]} 监控负责人信息
 * @params owners {OwnerCommonType[]} 负责人信息
 * @params idPath {string} Id路径
 * @params namePath {string} Name路径
 * @params isUserDefined {number} 是否人为调整：0-未调整，1-已调整
 * @params cameraQualityStatistics {CameraQualityStatisticsCommonType} 质量统计
 * @params selfCameraQualityStatistics {CameraQualityStatisticsCommonType} 当前层质量统计
 * @params cameraResolutionStatistics {CameraResolutionStatisticsCommonType} 分辨率统计
 * @params selfCameraResolutionStatistics {CameraResolutionStatisticsCommonType} 当前层分辨率统计
 * @params id {string} 组Id
 * @params name {string} 组名
 * @params parentId {string} 上级分组Id
 * @params groupType {number} 分组类型
 * @params description {string} 描述
 * @params lastSyncTime {string} 最新同步时间
 * @params comeFrom {string} 国标下级域Id
 * @params aliasName {string} 目录别名
 * @params operate {EnumTypesCommonType} 操作类型
 * @params position {number} 位置
 */
export type AddSubGroupResType = {
    sipServiceId: string;
    syncStatus: EnumTypesSyncStatusCommonType;
    sipServerStatus: EnumTypesSipServiceStatusCommonType;
    useStatus: EnumTypesCommonType;
    isLeafGroup: boolean;
    isLeaf: boolean;
    cameraCount: number;
    cameraOnlineCount: number;
    selfCameraCount: number;
    selfCameraOnlineCount: number;
    order: number;
    relatedParentId: string;
    principalOut: PrincipalOutCommonType[];
    owners: OwnerCommonType[];
    idPath: string;
    namePath: string;
    isUserDefined: number;
    cameraQualityStatistics: CameraQualityStatisticsCommonType;
    selfCameraQualityStatistics: CameraQualityStatisticsCommonType;
    cameraResolutionStatistics: CameraResolutionStatisticsCommonType;
    selfCameraResolutionStatistics: CameraResolutionStatisticsCommonType;
    id: string;
    name: string;
    parentId: string;
    groupType: number;
    description: string;
    lastSyncTime: string;
    comeFrom: string;
    aliasName: string;
    operate: EnumTypesCommonType;
    position: number;
};

/**
 * 获取监控组下监控（包含子组监控）——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} 组Id集合 （必填）
 */
export type GetCameraGroupSubordinatesReqType = {
    'X-version'?: string;
    ids: any[];
};

/**
 * 获取监控组下监控（包含子组监控）——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetCameraGroupSubordinatesResType = {
    totalCount: number;
    records: any[];
};

/**
 * 批量添加监控到预案组中（我的资源）——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params groupIds {any[]} 监控组id列表 （必填）
 * @params excludeGroupIds {any[]} 被排除的子节点Id列表 （必填）
 * @params cameraIds {any[]} 监控id列表 （必填）
 * @params excludeCameraIds {any[]} 被排除的监控Id列表 （必填）
 */
export type BatchAddCamerasToGroupReqType = {
    id: string;
    'X-version'?: string;
    groupIds: any[];
    excludeGroupIds: any[];
    cameraIds: any[];
    excludeCameraIds: any[];
};

/**
 * 批量添加目录——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 目录名称 （必填）
 * @params type {EnumTypesCommonType} 目录类型0-国标资源1-我的资源2-本地资源
 * @params parentId {string} 父节点id
 * @params description {string} 描述信息
 * @params owners {OwnerCommonType[]} 责任人
 * @params operateGroupType {EnumTypesCommonType} 操作类型0-国标资源1-我的资源2-本地资源
 */
export type MultAddCameraGroupsReqType = {
    'X-version'?: string;
    name: string;
    type?: EnumTypesCommonType;
    parentId?: string;
    description?: string;
    owners?: OwnerCommonType[];
    operateGroupType?: EnumTypesCommonType;
};

/**
 * 批量添加目录——响应参数类型定义
 * @params id {string} 组Id
 * @params name {string} 组名
 * @params parentId {string} 上级分组Id
 * @params groupType {number} 分组类型
 * @params description {string} 描述
 * @params lastSyncTime {string} 最新同步时间
 * @params comeFrom {string} 国标下级域Id
 * @params aliasName {string} 目录别名
 * @params operate {EnumTypesCommonType} 操作类型
 * @params position {number} 位置
 */
export type MultAddCameraGroupsResType = {
    id: string;
    name: string;
    parentId: string;
    groupType: number;
    description: string;
    lastSyncTime: string;
    comeFrom: string;
    aliasName: string;
    operate: EnumTypesCommonType;
    position: number;
};

/**
 * 移除目录——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params parentId {string} 父亲id （必填）
 * @params operateGroupType {EnumTypesCommonType} 操作类型0-国标资源1-我的资源2-本地资源
 */
export type RemoveCameraGroupReqType = {
    id: string;
    'X-version'?: string;
    parentId: string;
    operateGroupType?: EnumTypesCommonType;
};

/**
 * 修改目录——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 修改后的组名称，下级资源只能修改别名
 * @params description {string} 修改后的监控描述
 * @params owners {OwnerCommonType[]} 责任人
 * @params operateGroupType {EnumTypesCommonType} 操作类型0-国标资源1-我的资源2-本地资源
 */
export type EditCameraGroupsReqType = {
    id: string;
    'X-version'?: string;
    name?: string;
    description?: string;
    owners?: OwnerCommonType[];
    operateGroupType?: EnumTypesCommonType;
};

/**
 * 移动目录——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params parentId {string} 移动到的目录id （必填）
 * @params operateGroupType {EnumTypesCommonType} 操作类型0-国标资源1-我的资源2-本地资源
 */
export type ChangeCameraGroupReqType = {
    id: string;
    'X-version'?: string;
    parentId: string;
    operateGroupType?: EnumTypesCommonType;
};

/**
 * 挂载目录——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params groupIds {any[]} 挂载的目录id
 * @params operateGroupType {EnumTypesCommonType} 操作类型0-国标资源1-我的资源2-本地资源
 */
export type LinkCameraGroupReqType = {
    id: string;
    'X-version'?: string;
    groupIds?: any[];
    operateGroupType?: EnumTypesCommonType;
};

/**
 * 挂载目录——响应参数类型定义
 * @params id {string} 组Id
 * @params name {string} 组名
 * @params parentId {string} 上级分组Id
 * @params groupType {number} 分组类型
 * @params description {string} 描述
 * @params lastSyncTime {string} 最新同步时间
 * @params comeFrom {string} 国标下级域Id
 * @params aliasName {string} 目录别名
 * @params operate {EnumTypesCommonType} 操作类型
 * @params position {number} 位置
 */
export type LinkCameraGroupResType = {
    id: string;
    name: string;
    parentId: string;
    groupType: number;
    description: string;
    lastSyncTime: string;
    comeFrom: string;
    aliasName: string;
    operate: EnumTypesCommonType;
    position: number;
};

/**
 * 添加监控——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params cameraIds {any[]} 监控id
 * @params groupId {string} 原始目录id
 * @params operateGroupType {EnumTypesCommonType} 操作类型0-国标资源1-我的资源2-本地资源
 */
export type AddGroupCameraReqType = {
    id: string;
    'X-version'?: string;
    cameraIds?: any[];
    groupId?: string;
    operateGroupType?: EnumTypesCommonType;
};

/**
 * 移动监控——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params cameraIds {any[]} 监控id
 * @params groupId {string} 原始目录id
 * @params operateGroupType {EnumTypesCommonType} 操作类型0-国标资源1-我的资源2-本地资源
 */
export type RemoveGroupCameraReqType = {
    id: string;
    'X-version'?: string;
    cameraIds?: any[];
    groupId?: string;
    operateGroupType?: EnumTypesCommonType;
};

/**
 * 删除监控——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params cameraIds {any[]} 监控id
 * @params operateGroupType {EnumTypesCommonType} 操作类型0-国标资源1-我的资源2-本地资源
 */
export type DeleteGroupCameraReqType = {
    id: string;
    'X-version'?: string;
    cameraIds?: any[];
    operateGroupType?: EnumTypesCommonType;
};

/**
 * 获取目录下所有子节点（目录）
数仓使用——请求参数类型定义
 * @params id {string} id （必填）
 * @params page {number} 页码, 从1开始 默认：1 
 * @params per_page {number} 页容量 默认：100 
 * @headers X-version {string}  
*/
export type GetCameraGroupsChildrenReqType = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取目录下所有子节点（目录）
数仓使用——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
*/
export type GetCameraGroupsChildrenResType = {
    totalCount: number;
    records: any[];
};

/**
 * 获取目录下所有叶子节点（监控）
数仓使用——请求参数类型定义
 * @params id {string} id （必填）
 * @params page {number} 页码, 从1开始 默认：1 
 * @params per_page {number} 页容量 默认：100 
 * @headers X-version {string}  
*/
export type GetCameraGroupsLeafReqType = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取目录下所有叶子节点（监控）
数仓使用——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
*/
export type GetCameraGroupsLeafResType = {
    totalCount: number;
    records: any[];
};

/**
 * 获取删除记录——请求参数类型定义
 * @params SipServiceId {string} 所属下级Id
 * @params SyncTaskId {string} 同步任务Id
 * @params Keyword {string} 关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetCameraOrGroupDeleteRecordsReqType = {
    SipServiceId?: string;
    SyncTaskId?: string;
    Keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取删除记录——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetCameraOrGroupDeleteRecordsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 获取全部的分组列表。——请求参数类型定义
 * @params GroupType {number} -1：全部(默认)；0：监控组 1：预案组 2：自定义组
 * @params OperateGroupType {number} 操作的目录类型0-下级资源组1-我的资源组2-本地资源组查询根级时传null，查子级时必须带上类型, 类型从父级获取
 * @params ParentId {string} 父节点id，不填时查询根节点
 * @params PathPrefix {string} 路径前缀，目录有多个路径时去当前前缀相匹配的路径
 * @params SelectedIds {any[]} 被选中的节点，用于计算其父节点是否是全选,半选和未选中
 * @params UnSelectedIds {any[]} 被选中的节点，用于计算其父节点是否是全选,半选和未选中
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetCameraByGroupReqType = {
    GroupType?: number;
    OperateGroupType?: number;
    ParentId?: string;
    PathPrefix?: string;
    SelectedIds?: any[];
    UnSelectedIds?: any[];
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取全部的分组列表。——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetCameraByGroupResType = {
    totalCount: number;
    records: any[];
};

/**
 * 创建组(预案组/自定义组)——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 组名称 （必填）
 * @params parentId {string} 上级组Id （必填）
 * @params description {string} 描述
 * @params type {EnumTypesCommonType} 组类型
 * @params owners {OwnerCommonType[]} 责任人
 */
export type CreateMonitoringPlanGroupReqType = {
    'X-version'?: string;
    name: string;
    parentId: string;
    description?: string;
    type?: EnumTypesCommonType;
    owners?: OwnerCommonType[];
};

/**
 * 创建组(预案组/自定义组)——响应参数类型定义
 * @params sipServiceId {string} 国标下级Id
 * @params syncStatus {EnumTypesSyncStatusCommonType} 同步状态
 * @params sipServerStatus {EnumTypesSipServiceStatusCommonType} 下级域状态
 * @params useStatus {EnumTypesCommonType} 节点选中状态。0-未选中1-部分选中2-全选
 * @params isLeafGroup {boolean} 是否为叶子节点组。true 表示叶子节点，不会有子节点
 * @params isLeaf {boolean} 是否为叶子节点。true 表示叶子节点，不会有子节点
 * @params cameraCount {number} 摄像头总数包含下级分组的摄像头数量
 * @params cameraOnlineCount {number} 在线摄像头总数包含下级分组的摄像头数量
 * @params selfCameraCount {number} 自身组的摄像头总数
 * @params selfCameraOnlineCount {number} 自身在线摄像头总数
 * @params order {number} 排序字段
 * @params relatedParentId {string} 预案组/自定义组下级的关联父Id
 * @params principalOut {PrincipalOutCommonType[]} 监控负责人信息
 * @params owners {OwnerCommonType[]} 负责人信息
 * @params idPath {string} Id路径
 * @params namePath {string} Name路径
 * @params isUserDefined {number} 是否人为调整：0-未调整，1-已调整
 * @params cameraQualityStatistics {CameraQualityStatisticsCommonType} 质量统计
 * @params selfCameraQualityStatistics {CameraQualityStatisticsCommonType} 当前层质量统计
 * @params cameraResolutionStatistics {CameraResolutionStatisticsCommonType} 分辨率统计
 * @params selfCameraResolutionStatistics {CameraResolutionStatisticsCommonType} 当前层分辨率统计
 * @params id {string} 组Id
 * @params name {string} 组名
 * @params parentId {string} 上级分组Id
 * @params groupType {number} 分组类型
 * @params description {string} 描述
 * @params lastSyncTime {string} 最新同步时间
 * @params comeFrom {string} 国标下级域Id
 * @params aliasName {string} 目录别名
 * @params operate {EnumTypesCommonType} 操作类型
 * @params position {number} 位置
 */
export type CreateMonitoringPlanGroupResType = {
    sipServiceId: string;
    syncStatus: EnumTypesSyncStatusCommonType;
    sipServerStatus: EnumTypesSipServiceStatusCommonType;
    useStatus: EnumTypesCommonType;
    isLeafGroup: boolean;
    isLeaf: boolean;
    cameraCount: number;
    cameraOnlineCount: number;
    selfCameraCount: number;
    selfCameraOnlineCount: number;
    order: number;
    relatedParentId: string;
    principalOut: PrincipalOutCommonType[];
    owners: OwnerCommonType[];
    idPath: string;
    namePath: string;
    isUserDefined: number;
    cameraQualityStatistics: CameraQualityStatisticsCommonType;
    selfCameraQualityStatistics: CameraQualityStatisticsCommonType;
    cameraResolutionStatistics: CameraResolutionStatisticsCommonType;
    selfCameraResolutionStatistics: CameraResolutionStatisticsCommonType;
    id: string;
    name: string;
    parentId: string;
    groupType: number;
    description: string;
    lastSyncTime: string;
    comeFrom: string;
    aliasName: string;
    operate: EnumTypesCommonType;
    position: number;
};

/**
 * 分页获取分组下的监控列表——请求参数类型定义
 * @params groupId {string} groupId （必填）
 * @params KeyWord {string} 关键字
 * @params Online {boolean} 是否在线
 * @params Quality {any[]} 质量
 * @params Resolution {any[]} 分辨率
 * @params VideoEncoder {any[]} 压缩格式
 * @params Audio {boolean} 是否有音频
 * @params LabelIds {any[]} 标签
 * @params IsSupportPTZ {boolean} 是否可以进行云台控制true-可以false-不可以null-全部
 * @params PathPrefix {string} 路径前缀，目录有多个路径时去当前前缀相匹配的路径
 * @params OperateGroupType {number} 操作类型0-国标资源1-我的资源2-本地资源
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetCameraListByIdReqType = {
    groupId: string;
    KeyWord?: string;
    Online?: boolean;
    Quality?: any[];
    Resolution?: any[];
    VideoEncoder?: any[];
    Audio?: boolean;
    LabelIds?: any[];
    IsSupportPTZ?: boolean;
    PathPrefix?: string;
    OperateGroupType?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 分页获取分组下的监控列表——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {CameraOutCommonType[]} 记录
 */
export type GetCameraListByIdResType = {
    totalCount: number;
    records: CameraOutCommonType[];
};

/**
 * 获取监控flv/rtsp播放地址——请求参数类型定义
 * @params id {string} id （必填）
 * @params PlayUrlShowType {number} 播放地址返回类型。0-完整url | 1-只有路径和参数
 * @params PathPrefix {string} 路径前缀，目录有多个路径时去当前前缀相匹配的路径
 * @headers X-version {string}
 */
export type GetCameraPlayUrlsByIdReqType = {
    id: string;
    PlayUrlShowType?: number;
    PathPrefix?: string;
    'X-version'?: string;
};

/**
 * 获取监控flv/rtsp播放地址——响应参数类型定义
 * @params playUrlType {EnumTypesPlayUrlTypeCommonType} 类型 0直播，1监控
 * @params rtspUrl {string} rtsp播放地址
 * @params flvUrl {string} flv播放地址
 * @params wsUrl {string} Ws 协议播放地址
 * @params rtmpUrl {string} rtmp 的协议播放地址
 * @params webRtc {string} wbertc播放地址
 */
export type GetCameraPlayUrlsByIdResType = {
    playUrlType: EnumTypesPlayUrlTypeCommonType;
    rtspUrl: string;
    flvUrl: string;
    wsUrl: string;
    rtmpUrl: string;
    webRtc: string;
};

/**
 * 周边监控查询——请求参数类型定义
 * @headers X-version {string}
 * @params center {CoordinateCommonType} 圆心 （必填）
 * @params radius {number} 半径（单位米） （必填）
 * @params labelIds {any[]} 监控标签集合
 * @params sortRule {EnumTypesCommonType} 是否按距离升序排序，默认升序
 * @params upLeft {CoordinateCommonType} 左上角坐标 （必填）
 * @params bottomRight {CoordinateCommonType} 右下角坐标 （必填）
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量
 */
export type SearchCircleAreaCameraReqType = {
    'X-version'?: string;
    center: CoordinateCommonType;
    radius: number;
    labelIds?: any[];
    sortRule?: EnumTypesCommonType;
    upLeft: CoordinateCommonType;
    bottomRight: CoordinateCommonType;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 周边监控查询——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type SearchCircleAreaCameraResType = {
    totalCount: number;
    records: any[];
};

/**
 * 获取监控详情——请求参数类型定义
 * @params id {string} id （必填）
 * @params PlayUrlShowType {number} 播放地址返回类型。0-完整url | 1-只有路径和参数
 * @params PathPrefix {string} 路径前缀，目录有多个路径时去当前前缀相匹配的路径
 * @headers X-version {string}
 */
export type GetCameraByIdReqType = {
    id: string;
    PlayUrlShowType?: number;
    PathPrefix?: string;
    'X-version'?: string;
};

/**
 * 获取监控详情——响应参数类型定义
 * @params extension {any} 扩展信息
 * @params type {CameraTerminalTypeCommonType} 监控终端类型.  0:国标 1:视频拉流终端 2:视频推流终端 3:视频文件终端
 * @params groupType {EnumTypesCommonType} 监控所在类型组：0-监控组，1-预案组 2-自定义组
 * @params videoEncoder {EnumTypesVideoEncoderCommonType} 视频编码类型:0为H264，1为H265
 * @params resolution {EnumTypesResolutionCommonType} 分辨率
 * @params audio {boolean} 是否有音频
 * @params result {EnumTypesQualityCommonType} 质量
 * @params resultDetail {VideoQualityCommonType} 质量详情
 * @params namePath {string} 监控名字路径
 * @params idPath {string} 监控ID路径
 * @params order {number} 排序字段
 * @params detectionCount {number} 巡检的次数
 * @params faultDetail {number} 质量故障的错误码：http://git.rdapp.com/product/knowledge-planet/issues/818
 * @params isManual {boolean} 是否是手动设置
 * @params labels {LabelOutCommonType[]} 标签
 * @params audioEncodingFormat {string} 音频编码属性
 * @params isSupportPTZ {boolean} 是否可以进行云台控制
 * @params aliasName {string} 监控别名
 * @params originalName {string} 原始名称
 * @params status {EnumTypesCameraStatusCommonType} 监控状态1-离线2-在线
 * @params quality {EnumTypesQualityCommonType} 监控质量0-未检测1-差2-优3-良4-故障
 * @params areaCode {string} 行政区域码
 * @params thumbnailID {string} 图片id
 * @params playUrl {PlayUrlOutCommonType} 播放地址
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params id {string} ID
 * @params name {string} 名称
 */
export type GetCameraByIdResType = {
    extension: any;
    type: CameraTerminalTypeCommonType;
    groupType: EnumTypesCommonType;
    videoEncoder: EnumTypesVideoEncoderCommonType;
    resolution: EnumTypesResolutionCommonType;
    audio: boolean;
    result: EnumTypesQualityCommonType;
    resultDetail: VideoQualityCommonType;
    namePath: string;
    idPath: string;
    order: number;
    detectionCount: number;
    faultDetail: number;
    isManual: boolean;
    labels: LabelOutCommonType[];
    audioEncodingFormat: string;
    isSupportPTZ: boolean;
    aliasName: string;
    originalName: string;
    status: EnumTypesCameraStatusCommonType;
    quality: EnumTypesQualityCommonType;
    areaCode: string;
    thumbnailID: string;
    playUrl: PlayUrlOutCommonType;
    longitude: number;
    latitude: number;
    id: string;
    name: string;
};

/**
 * 修改监控——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params aliasName {string} 监控别名
 * @params quality {EnumTypesQualityCommonType} 监控质量
 * @params isManual {boolean} True手动检测/ false智能检测，可为null，为null表示不修改
 * @params labelIds {any[]} 监控标签id （必填）
 * @params isSupportPTZ {boolean} 是否可以进行云台控制true-可以false-不可以null-不修改
 * @params longitude {number} 经度 （必填）
 * @params latitude {number} 纬度 （必填）
 * @params areaCode {string} 行政区域码
 */
export type UpdateGbCameraReqType = {
    id: string;
    'X-version'?: string;
    aliasName?: string;
    quality?: EnumTypesQualityCommonType;
    isManual?: boolean;
    labelIds: any[];
    isSupportPTZ?: boolean;
    longitude: number;
    latitude: number;
    areaCode?: string;
};

/**
 * 监控搜索（区域搜索）——请求参数类型定义
 * @params UpLeft.Longitude {number} 经度 （必填）
 * @params UpLeft.Latitude {number} 纬度 （必填）
 * @params BottomRight.Longitude {number} 经度 （必填）
 * @params BottomRight.Latitude {number} 纬度 （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetCamerasByAreaReqType = {
    UpLeft: CoordinateCommonType;
    BottomRight: CoordinateCommonType;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 监控搜索（区域搜索）——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {CameraOutCommonType[]} 记录
 */
export type GetCamerasByAreaResType = {
    totalCount: number;
    records: CameraOutCommonType[];
};

/**
 * 监控搜索（关键字搜索）——请求参数类型定义
 * @params Keyword {string} 关键字 （必填）
 * @params GroupType {number} 组类型(类型组：0-监控组，1-自定义组)
 * @params MaxCount {number} 最大返回数据的数量 （必填）
 * @headers X-version {string}
 */
export type CameraSearchByKeyReqType = {
    Keyword: string;
    GroupType?: number;
    MaxCount: number;
    'X-version'?: string;
};

/**
 * 监控搜索（关键字搜索）——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {CameraOutCommonType[]} 记录
 */
export type CameraSearchByKeyResType = {
    totalCount: number;
    records: CameraOutCommonType[];
};

/**
 * 生成监控静态数据cameras.json.gz——请求参数类型定义
 * @headers X-version {string}
 */
export type AddGenarateReqType = {
    'X-version'?: string;
};

/**
 * 获取静态资源文件名——请求参数类型定义
 * @headers X-version {string}
 */
export type GetStaticFilesReqType = {
    'X-version'?: string;
};

/**
 * 获取静态资源文件名——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetStaticFilesResType = {
    totalCount: number;
    records: any[];
};

/**
 * 监控巡检数据搜索——请求参数类型定义
 * @params StartTime {string} 查询开始时间 （必填）
 * @params EndTime {string} 查询结束时间 （必填）
 * @params Keyword {string} 关键字
 * @params Result {number} 请求状态
 * @params StreamId {string} 流 Id
 * @params DeviceId {string} 终端 Id
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type SearchDetectionDataReqType = {
    StartTime: string;
    EndTime: string;
    Keyword?: string;
    Result?: number;
    StreamId?: string;
    DeviceId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 监控巡检数据搜索——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type SearchDetectionDataResType = {
    totalCount: number;
    records: any[];
};

/**
 * 监控巡检数据下载——请求参数类型定义
 * @params StartTime {string} 查询开始时间 （必填）
 * @params EndTime {string} 查询结束时间 （必填）
 * @params Keyword {string} 关键字
 * @params Result {number} 请求状态
 * @headers X-version {string}
 */
export type DownloadDetectionDataReqType = {
    StartTime: string;
    EndTime: string;
    Keyword?: string;
    Result?: number;
    'X-version'?: string;
};

/**
 * 修改组,监控组支持修改联系人不支持修改名称和描述，预案组和自定义组支持修改名称和描述不支持修改联系人——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 修改后的组名称，下级资源只能修改别名
 * @params description {string} 修改后的监控描述
 * @params owners {OwnerCommonType[]} 责任人
 * @params operateGroupType {EnumTypesCommonType} 操作类型0-国标资源1-我的资源2-本地资源
 */
export type EditMonitoringPlanGroupReqType = {
    id: string;
    'X-version'?: string;
    name?: string;
    description?: string;
    owners?: OwnerCommonType[];
    operateGroupType?: EnumTypesCommonType;
};

/**
 * 删除组(预案组/自定义组)——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteCameraGroupReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 移动监控项(监控或预案组)到指定预案组——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params type {EnumTypesSipServiceStatusCommonType} 1-监控|2-预案组 （必填）
 * @params sourceItemId {string} 要移动的监控或预案组 Id （必填）
 * @params targetGroupId {string} 目标预案组 Id （必填）
 */
export type RemoveCameraReqType = {
    id: string;
    'X-version'?: string;
    type: EnumTypesSipServiceStatusCommonType;
    sourceItemId: string;
    targetGroupId: string;
};

/**
 * 预案分组排序接口——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params orderBy {any[]} 排序结果 （必填）
 */
export type SortPlansGroupReqType = {
    id: string;
    'X-version'?: string;
    orderBy: any[];
};

/**
 * 提供能够通过监控组直接将组下监控放到预案组中——请求参数类型定义
 * @headers X-version {string}
 * @params type {EnumTypesSipServiceStatusCommonType} 数据类型 1摄像头，2分组
 * @params id {string} 数据id 摄像头id或监控组id （必填）
 * @params groupId {string} 预案组id （必填）
 */
export type CollectionMonitoringToPlanGroupReqType = {
    'X-version'?: string;
    type?: EnumTypesSipServiceStatusCommonType;
    id: string;
    groupId: string;
};

/**
 * 删除预案组/自定义组下的某个监控——请求参数类型定义
 * @params groupId {string} groupId （必填）
 * @params cameraId {string} cameraId （必填）
 * @headers X-version {string}
 */
export type DeletePlanGroupMonitoringReqType = {
    groupId: string;
    cameraId: string;
    'X-version'?: string;
};

/**
 * 获取预案组下被收藏的监控——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetPreplanCamerasReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取预案组下被收藏的监控——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetPreplanCamerasResType = {
    totalCount: number;
    records: any[];
};

/**
 * 获取监控所在的预案组——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetPreplanGroupsByCameraIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取监控所在的预案组——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetPreplanGroupsByCameraIdResType = {
    totalCount: number;
    records: any[];
};

/**
 * 监控详情-获取监控历史巡检记录——请求参数类型定义
 * @params id {string} id （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetCameraDetectionRecordsReqType = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 监控详情-获取监控历史巡检记录——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetCameraDetectionRecordsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 监控资源-高级搜索——请求参数类型定义
 * @params MaxCountCameraGroup {number} 监控组最大返回条数 默认：20
 * @params MaxCountCamera {number} 监控最大返回条数 默认：50
 * @params KeyWord {string} 关键字
 * @params Online {boolean} 是否在线
 * @params Quality {any[]} 质量0-UnDetected1-Bad2-Excellent3-Good4-Fault
 * @params Resolution {any[]} 分辨率 HD-高清 SD-标清 FullHd-全高清 UHD-超高清
 * @params Encode {any[]} 压缩格式0-H2641-H265
 * @params Audio {boolean} 是否有音频
 * @params LabelIds {any[]} 标签
 * @params IsSupportPTZ {boolean} 是否可以进行云台控制true-可以false-不可以null-全部
 * @headers X-version {string}
 */
export type VfsSearchCamerasReqType = {
    MaxCountCameraGroup?: number;
    MaxCountCamera?: number;
    KeyWord?: string;
    Online?: boolean;
    Quality?: any[];
    Resolution?: any[];
    Encode?: any[];
    Audio?: boolean;
    LabelIds?: any[];
    IsSupportPTZ?: boolean;
    'X-version'?: string;
};

/**
 * 监控资源-高级搜索——响应参数类型定义
 * @params cameraGroupSearchOuts {any[]} 监控组
 * @params cameraSearchOuts {any[]} 监控
 */
export type VfsSearchCamerasResType = {
    cameraGroupSearchOuts: any[];
    cameraSearchOuts: any[];
};

/**
 * 控制云台——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params cmdType {number}  云台命令GB28181_PTZ_STOP,                   0 停止GB28181_PTZ_CMD_FOCUS_FAR,          1 放大焦距GB28181_PTZ_CMD_FOCUS_NEAR,         2 缩小焦距GB28181_PTZ_CMD_IRIS_OPEN,          3 打开光圈GB28181_PTZ_CMD_IRIS_CLOSE,         4 关闭光圈GB28181_PTZ_CMD_ZOOM_TELE,          5 缩小视角GB28181_PTZ_CMD_ZOOM_WIDE,          6 放大视角GB28181_PTZ_CMD_UP,                 7 上移GB28181_PTZ_CMD_DOWN,               8 下移GB28181_PTZ_CMD_LEFT,               9 左移GB28181_PTZ_CMD_RIGHT,              10 右移GB28181_PTZ_CMD_LEFT_UP,            11 左上GB28181_PTZ_CMD_LEFT_DOWN,          12 左下GB28181_PTZ_CMD_RIGHT_UP,           13 右上GB28181_PTZ_CMD_RIGHT_DOWN,         14 右下GB28181_PTZ_CMD_GOTO_HOME,          15 移到起始位置GB28181_PTZ_CMD_AUTO_FOCUS,         16 自动聚焦GB28181_PTZ_CMD_AUTO_SCAN,          17 自动左右扫描GB28181_PTZ_CMD_OPEN_WIPER,         18 开启雨刷GB28181_PTZ_CMD_CLOSE_WIPER,        19 关闭雨刷GB28181_PTZ_CMD_SET_PRESET,         20 设置预置点GB28181_PTZ_CMD_GOTO_PRESET,        21 转到预置点GB28181_PTZ_CMD_CLEAR_PRESET,       22 清除预置点
 * @params speed {number} 云台移动速度
 * @params stop {boolean} stop:true; not stop:false
 */
export type ControlCamerasReqType = {
    id: string;
    'X-version'?: string;
    cmdType?: number;
    speed?: number;
    stop?: boolean;
};

/**
 * 下级录像回放控制——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params cmdType {number} 录像回放控制命令
 * @params multiple {number} 回放控制倍数：0.25，0.5，1，2，4
 * @params seekTime {number} 拖动时间：播放录像起点的相对值，取值范围从0到播放录像的终点时间，单位秒，非负值0 从起点播放；100 从录像起点后的100秒处播放； now 从当前位置开始播放
 * @params streamSessionId {number} 回放会话ID
 */
export type SetCameraPlaybackReqType = {
    id: string;
    'X-version'?: string;
    cmdType?: number;
    multiple?: number;
    seekTime?: number;
    streamSessionId?: number;
};

/**
 * 监控录像开始——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type StartVideoRecordingReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 监控录像结束——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type StopVideoRecordingReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 监控截图——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params picturesTotal {number} 截图数量最少1张最大10张
 * @params interval {number} 每次截图之间的间隔最少1秒最大10秒
 */
export type CameraScreenshotReqType = {
    id: string;
    'X-version'?: string;
    picturesTotal?: number;
    interval?: number;
};

/**
 * 条件查询监控录像列表——请求参数类型定义
 * @params KeyWord {string} 关键字搜索
 * @params CameraId {string} 监控id当业务类型时lowerrtp时此属性是必填的，不然无法查询到对应设备的录像记录
 * @params FileEntityType {number} 文件类型2-Video1-Picture为null时查全部类型
 * @params StartTime {string} 开始时间
 * @params EndTime {string} 结束时间
 * @params UserId {string} 用户
 * @params IsUnderway {boolean} 监控录制或截图正在进行中的
 * @params FileRecordIds {any[]} 文件记录id
 * @params PlatformId {string} 平台 ID
 * @params AppName {string} 业务类型rtp-监控meetlive-视频会议subordinatertp-下级监控
 * @params AssociationId {string} 关联id
 * @params VideoPictureResult {number} 是否失败0:返回全部1:返回成功的数据2:返回失败的数据默认为1
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetMediaRecordsReqType = {
    KeyWord?: string;
    CameraId?: string;
    FileEntityType?: number;
    StartTime?: string;
    EndTime?: string;
    UserId?: string;
    IsUnderway?: boolean;
    FileRecordIds?: any[];
    PlatformId?: string;
    AppName?: string;
    AssociationId?: string;
    VideoPictureResult?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 条件查询监控录像列表——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetMediaRecordsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 当前用户是否对监控录像中——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetUserInVideoByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 当前用户监控录像信息
<remarks>如果用户对监控没有在录像中，则返回404，否则返回具体的录像信息</remarks>——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}  
*/
export type GetCameraRecordingInfoReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 当前用户监控录像信息
<remarks>如果用户对监控没有在录像中，则返回404，否则返回具体的录像信息</remarks>——响应参数类型定义
 * @params id {number} 唯一标识
 * @params streamId {string} 流id
 * @params associationId {string} 会议号
 * @params createTime {string} 录制开始时间
 * @params status {CameraTerminalTypeCommonType} 录制状态0-录制中1-暂停2-结束3-未开始
 * @params createTimeOffset {number} 录制相对时间(单位秒)
*/
export type GetCameraRecordingInfoResType = {
    id: number;
    streamId: string;
    associationId: string;
    createTime: string;
    status: CameraTerminalTypeCommonType;
    createTimeOffset: number;
};

/**
 * 获取监控所在的所有收藏组——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetFavoriteGroupsByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取监控所在的所有收藏组——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetFavoriteGroupsByIdResType = {
    totalCount: number;
    records: any[];
};

/**
 * 添加监控设备——请求参数类型定义
 * @headers X-version {string}
 * @params accessType {number} 相机接入协议类型（0：国标协议，1：onvif协议，2：DVR协议，3：RTSP协议）
 * @params address {string} 安装地址
 * @params block {string} 警区（可选）
 * @params businessgroupid {string} 虚拟组织所属的业务分组ID
 * @params certifiable {number} 证书有效标识（有证书的设备必选）缺省为0， 0 无效， 1 有效
 * @params certnum {string} 证书序列ar号（有证书的设备必选）
 * @params channelId {number} 通道号
 * @params civilcode {string} 行政区域
 * @params comefrom {string} 相机来自哪里
 * @params connectType {number} 直连方式：1 视频直连相机； 0 视频经流媒体连接
 * @params directiontype {number} 摄像机监视方位属性
 * @params downloadspeed {string} 下载倍速范围
 * @params endtime {string} 证书终止有效期（有证书的设备必选）
 * @params errcode {number} 无效原因（有证书且证书无效的设备必选）
 * @params highDefinition {number} 是否高清相机 1 高清相机；0 非高清相机
 * @params ipaddress {string} IP地址
 * @params isCollection {number} 是否收藏 值是0和1。0代表未收藏；1代表已收藏，默认是0
 * @params isPublicnNetwork {number} 是否公网
 * @params latitude {number} 纬度
 * @params longitude {number} 经度
 * @params mainSubStream {string} 主子流设置
 * @params manufacture {string} 设备厂商
 * @params model {string} 设备型号
 * @params name {string} 名称 （必填）
 * @params onvifAddress {string} onvif 服务地址 （必填）
 * @params orderby {string} 排序依据
 * @params owner {string} 设备归属
 * @params parental {number} 是否有子设备  0没有 1 有 （必填）
 * @params parentid {string} 父节点ID
 * @params password {string} 密码
 * @params port {string} 端口
 * @params positiontype {number} 摄像机位置类型
 * @params ptztype {number} 摄像机类型 1 球机， 2 半球， 3 固定枪机， 4 遥控枪机
 * @params regionId {string} 对于直接接入本级域的相机，该字段填写本级gcserver的id；如果是下级平台接入的相机，该字段为空值
 * @params registerway {number} 注册方式，缺省为1；1 符合sip3261标准的认证注册模式； 2 基于口令的双向认证注册方式； 3 基于数字证书的双向认证注册方式
 * @params resolution {string} 摄像机支持的分辨率
 * @params rights {number} 相机权限
 * @params roomtype {number} 摄像机安装位置室外，室内属性
 * @params safetyway {number} 信令安全模式（可选）。缺省为0； 0 不采用； 2 S/MIME签名方式； 3 S/MIME加密签名同时采用方式； 4 数字摘要方式
 * @params secrecy {number} 保密属性  0不涉密  1涉密
 * @params status {number} 1：离线，2：在线
 * @params streamId {number} 码流id
 * @params streamPacketType {number} 媒体流打包格式
 * @params supplylighttype {number} 摄像机补光属性
 * @params svcspacesupportmode {number} 空域编码能力
 * @params userName {string} 用户名
 * @params usetype {number} 摄像机用途属性
 * @params idType {number} 需要申请id类型131	VideoId132	Device200	CentralServer202	MediaServer203	ProxyServer215	GroupId600	Innel （必填）
 * @params isSupportPTZ {boolean} 是否可以云台控制true-可以false-不可以
 */
export type AddGbCameraReqType = {
    'X-version'?: string;
    accessType?: number;
    address?: string;
    block?: string;
    businessgroupid?: string;
    certifiable?: number;
    certnum?: string;
    channelId?: number;
    civilcode?: string;
    comefrom?: string;
    connectType?: number;
    directiontype?: number;
    downloadspeed?: string;
    endtime?: string;
    errcode?: number;
    highDefinition?: number;
    ipaddress?: string;
    isCollection?: number;
    isPublicnNetwork?: number;
    latitude?: number;
    longitude?: number;
    mainSubStream?: string;
    manufacture?: string;
    model?: string;
    name: string;
    onvifAddress: string;
    orderby?: string;
    owner?: string;
    parental: number;
    parentid?: string;
    password?: string;
    port?: string;
    positiontype?: number;
    ptztype?: number;
    regionId?: string;
    registerway?: number;
    resolution?: string;
    rights?: number;
    roomtype?: number;
    safetyway?: number;
    secrecy?: number;
    status?: number;
    streamId?: number;
    streamPacketType?: number;
    supplylighttype?: number;
    svcspacesupportmode?: number;
    userName?: string;
    usetype?: number;
    idType: number;
    isSupportPTZ?: boolean;
};

/**
 * 添加监控设备——响应参数类型定义
 * @params cameraId {string} 设备Id
 * @params accessType {number} 相机接入协议类型（0：国标协议，1：onvif协议，2：DVR协议，3：RTSP协议）
 * @params address {string} 安装地址
 * @params block {string} 警区（可选）
 * @params businessgroupid {string} 虚拟组织所属的业务分组ID
 * @params certifiable {number} 证书有效标识（有证书的设备必选）缺省为0， 0 无效， 1 有效
 * @params certnum {string} 证书序列ar号（有证书的设备必选）
 * @params channelId {number} 通道号
 * @params civilcode {string} 行政区域
 * @params comefrom {string} 相机来自哪里
 * @params connectType {number} 直连方式：1 视频直连相机； 0 视频经流媒体连接
 * @params directiontype {number} 摄像机监视方位属性
 * @params downloadspeed {string} 下载倍速范围
 * @params endtime {string} 证书终止有效期（有证书的设备必选）
 * @params errcode {number} 无效原因（有证书且证书无效的设备必选）
 * @params highDefinition {number} 是否高清相机 1 高清相机；0 非高清相机
 * @params ipaddress {string} IP地址
 * @params isCollection {number} 是否收藏 值是0和1。0代表未收藏；1代表已收藏，默认是0
 * @params isPublicnNetwork {number} 是否公网
 * @params latitude {number} 纬度
 * @params longitude {number} 经度
 * @params mainSubStream {string} 主子流设置
 * @params manufacture {string} 设备厂商
 * @params model {string} 设备型号
 * @params name {string} 名称
 * @params onvifAddress {string} onvif 服务地址
 * @params orderby {string} 排序依据
 * @params owner {string} 设备归属
 * @params parental {number} 是否有子设备  0没有 1 有
 * @params parentid {string} 父节点ID
 * @params password {string} 密码
 * @params port {string} 端口
 * @params positiontype {number} 摄像机位置类型
 * @params ptztype {number} 摄像机类型 1 球机， 2 半球， 3 固定枪机， 4 遥控枪机
 * @params regionId {string} 对于直接接入本级域的相机，该字段填写本级gcserver的id；如果是下级平台接入的相机，该字段为空值
 * @params registerway {number} 注册方式，缺省为1；1 符合sip3261标准的认证注册模式； 2 基于口令的双向认证注册方式； 3 基于数字证书的双向认证注册方式
 * @params resolution {string} 摄像机支持的分辨率
 * @params rights {number} 相机权限
 * @params roomtype {number} 摄像机安装位置室外，室内属性
 * @params safetyway {number} 信令安全模式（可选）。缺省为0； 0 不采用； 2 S/MIME签名方式； 3 S/MIME加密签名同时采用方式； 4 数字摘要方式
 * @params secrecy {number} 保密属性  0不涉密  1涉密
 * @params status {number} 1：离线，2：在线
 * @params streamId {number} 码流id
 * @params streamPacketType {number} 媒体流打包格式
 * @params supplylighttype {number} 摄像机补光属性
 * @params svcspacesupportmode {number} 空域编码能力
 * @params userName {string} 用户名
 * @params usetype {number} 摄像机用途属性
 */
export type AddGbCameraResType = {
    cameraId: string;
    accessType: number;
    address: string;
    block: string;
    businessgroupid: string;
    certifiable: number;
    certnum: string;
    channelId: number;
    civilcode: string;
    comefrom: string;
    connectType: number;
    directiontype: number;
    downloadspeed: string;
    endtime: string;
    errcode: number;
    highDefinition: number;
    ipaddress: string;
    isCollection: number;
    isPublicnNetwork: number;
    latitude: number;
    longitude: number;
    mainSubStream: string;
    manufacture: string;
    model: string;
    name: string;
    onvifAddress: string;
    orderby: string;
    owner: string;
    parental: number;
    parentid: string;
    password: string;
    port: string;
    positiontype: number;
    ptztype: number;
    regionId: string;
    registerway: number;
    resolution: string;
    rights: number;
    roomtype: number;
    safetyway: number;
    secrecy: number;
    status: number;
    streamId: number;
    streamPacketType: number;
    supplylighttype: number;
    svcspacesupportmode: number;
    userName: string;
    usetype: number;
};

/**
 * 监控位置变更——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 */
export type EditCameraLocationReqType = {
    id: string;
    'X-version'?: string;
    longitude?: number;
    latitude?: number;
};

/**
 * 根据标签Id查找监控——请求参数类型定义
 * @headers X-version {string}
 * @params labelIds {any[]} 标签Id
 * @params keyword {string} 关键字
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量
 */
export type SearchCamerasByLabelReqType = {
    'X-version'?: string;
    labelIds?: any[];
    keyword?: string;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 根据标签Id查找监控——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {CameraOutCommonType[]} 记录
 */
export type SearchCamerasByLabelResType = {
    totalCount: number;
    records: CameraOutCommonType[];
};

/**
 * 导入监控（仅支持对经纬度的修改,导入后重新加载静态文件）——请求参数类型定义
 * @headers X-version {string}
 * @params importCameraLocations {any[]} 监控 （必填）
 */
export type ImportCamerasReqType = {
    'X-version'?: string;
    importCameraLocations: any[];
};

/**
 * 根据监控Id集合获取监控信息——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} 监控Id集合 （必填）
 * @params playUrlShowType {0 | 1} url类型0-完整 http、rtsp、ws 播放url，绝对路径1-原始播放 url，不带协议头和 ip，相对路径
 */
export type GetCameraInfoByIdsReqType = {
    'X-version'?: string;
    ids: any[];
    playUrlShowType?: 0 | 1;
};

/**
 * 根据监控Id集合获取监控信息——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetCameraInfoByIdsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 批量获取监控截图文件信息接口——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} 监控Id集合 （必填）
 */
export type QueryMonitorScreenshotReqType = {
    'X-version'?: string;
    ids: any[];
};

/**
 * 批量获取监控截图文件信息接口——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type QueryMonitorScreenshotResType = {
    totalCount: number;
    records: any[];
};

/**
 * 批量设置监控行政区域码——请求参数类型定义
 * @headers X-version {string}
 * @params areaCode {string} 区域码 （必填）
 * @params cameraIds {any[]} 监控id列表
 */
export type EditCamerasAreaCodeReqType = {
    'X-version'?: string;
    areaCode: string;
    cameraIds?: any[];
};

/**
 * 获取行政区域下面的监控——请求参数类型定义
 * @params areaCode {string}  （必填）
 * @params PlayUrlShowType {number} url类型0-完整 http、rtsp、ws 播放url，绝对路径1-原始播放 url，不带协议头和 ip，相对路径
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetCamerasByAreaCodeReqType = {
    areaCode: string;
    PlayUrlShowType?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取行政区域下面的监控——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetCamerasByAreaCodeResType = {
    totalCount: number;
    records: any[];
};

/**
 * 搜索行政区域下的监控——请求参数类型定义
 * @headers X-version {string}
 * @params prefixAreaCodes {any[]} 行政区域码前缀集合
 * @params labelIds {any[]} 标签id
 * @params online {boolean} 在线状态
 * @params keyword {string} 关键字-监控名称
 * @params playUrlShowType {0 | 1} url类型0-完整 http、rtsp、ws 播放url，绝对路径1-原始播放 url，不带协议头和 ip，相对路径
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量
 */
export type SearchCamerasByAreaCodeReqType = {
    'X-version'?: string;
    prefixAreaCodes?: any[];
    labelIds?: any[];
    online?: boolean;
    keyword?: string;
    playUrlShowType?: 0 | 1;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 搜索行政区域下的监控——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type SearchCamerasByAreaCodeResType = {
    totalCount: number;
    records: any[];
};

/**
 * 获取下级监控录像——请求参数类型定义
 * @params id {string} id （必填）
 * @params StartTime {string} 录制的开始时间
 * @params EndTime {string} 录制的结束时间
 * @params Limit {number} 最大返回数量
 * @headers X-version {string}
 */
export type VfsGetVideosByIdReqType = {
    id: string;
    StartTime?: string;
    EndTime?: string;
    Limit?: number;
    'X-version'?: string;
};

/**
 * 获取下级监控录像——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type VfsGetVideosByIdResType = {
    totalCount: number;
    records: any[];
};

/**
 * 条件查询监控状态变更记录——请求参数类型定义
 * @params LowerDomainId {string} 下级域Id
 * @params Online {boolean} 监控在线状态,true-在线，false-离线
 * @params StateSource {number} 状态变更来源：0-巡检，1-ZL拉流，2-下级上报
 * @params StartTime {string} 开始时间
 * @params EndTime {string} 结束时间
 * @params Keyword {string} 关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetCameraStateReqType = {
    LowerDomainId?: string;
    Online?: boolean;
    StateSource?: number;
    StartTime?: string;
    EndTime?: string;
    Keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 条件查询监控状态变更记录——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetCameraStateResType = {
    totalCount: number;
    records: any[];
};

/**
 * 查询监控预置点位列表——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetCameraPointsReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 查询监控预置点位列表——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetCameraPointsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 添加监控预置点位——请求参数类型定义
 * @headers X-version {string}
 * @params cameraId {string} 监控Id （必填）
 * @params presetId {number} 预置点编号 （必填）
 * @params presetName {string} 预置点名称 （必填）
 */
export type AddCameraPointsReqType = {
    'X-version'?: string;
    cameraId: string;
    presetId: number;
    presetName: string;
};

/**
 * 添加监控预置点位——响应参数类型定义
 * @params id {number} 预置点编号
 * @params name {string} 预置点名称
 */
export type AddCameraPointsResType = {
    id: number;
    name: string;
};

/**
 * 删除监控预置点位——请求参数类型定义
 * @params cameraId {string} cameraId （必填）
 * @params id {number} id （必填）
 * @headers X-version {string}
 */
export type DeleteCameraPointsReqType = {
    cameraId: string;
    id: number;
    'X-version'?: string;
};

/**
 * 运行监控到预置点位——请求参数类型定义
 * @params cameraId {string} cameraId （必填）
 * @params id {number} id （必填）
 * @headers X-version {string}
 */
export type SetCameraPointsReqType = {
    cameraId: string;
    id: number;
    'X-version'?: string;
};

/**
 * 运行监控到预置点位——响应参数类型定义
 * @params id {number} 预置点编号
 * @params name {string} 预置点名称
 */
export type SetCameraPointsResType = {
    id: number;
    name: string;
};

/**
 * 监控/运维/行政区域——请求参数类型定义
 * @headers X-version {string}
 * @params groupIds {any[]} 国标目录ID，运维该目录及其子目录的监控数据默认为空时，处理全部监控
 */
export type CompleteCameraAreaCodeReqType = {
    'X-version'?: string;
    groupIds?: any[];
};

/**
 * 监控录像开始——请求参数类型定义
 * @headers X-version {string}
 * @params cameraId {string} 监控id （必填）
 * @params subId {string} 业务ID （必填）
 */
export type StartCameraVideoReqType = {
    'X-version'?: string;
    cameraId: string;
    subId: string;
};

/**
 * 监控录像开始——响应参数类型定义
 * @params cameraId {string} 监控Id
 * @params cameraName {string} 监控名称
 * @params messages {any[]} 录像或截图的失败码
 * @params isSucceed {boolean} 是否失败true成功false失败
 * @params appName {string} 业务类型rtp-监控meetlive-视频会议live-事件快报
 * @params fileSize {number} 文件大小 单位/Byte
 * @params pullUrls {any} 播放地址
 * @params downloadUrl {any} 下载地址
 * @params name {string} 录制记录的名称
 * @params recordId {number} 记录id
 * @params createTime {string} 创建时间
 * @params fileId {any[]} 文件id
 * @params type {EnumTypesSyncStatusCommonType} 文件类型0-未知|Unknown1-图片文件|Picture2-视频文件|Video3-音频文件|Audio4-文本文件|Text
 * @params endTime {string} 结束时间
 */
export type StartCameraVideoResType = {
    cameraId: string;
    cameraName: string;
    messages: any[];
    isSucceed: boolean;
    appName: string;
    fileSize: number;
    pullUrls: any;
    downloadUrl: any;
    name: string;
    recordId: number;
    createTime: string;
    fileId: any[];
    type: EnumTypesSyncStatusCommonType;
    endTime: string;
};

/**
 * 监控录像结束——请求参数类型定义
 * @params id {number} id （必填）
 * @headers X-version {string}
 */
export type StopCameraVideoReqType = {
    id: number;
    'X-version'?: string;
};

/**
 * 获取国标本级域信息——请求参数类型定义
 * @headers X-version {string}
 */
export type GetCurrentDomainsReqType = {
    'X-version'?: string;
};

/**
 * 获取国标本级域信息——响应参数类型定义
 * @params gbId {string} GB ID
 * @params serverIp {string} 服务器 IP 地址
 * @params sipPort {number} SIP 端口号
 * @params sipProtocolType {number} SIP协议类型(0:UDP;1:TCP;2:UDP/TCP同时支持)
 * @params httpPort {number} HTTP 端口号
 * @params publicNetworkIp {string} 公网 IP 地址
 */
export type GetCurrentDomainsResType = {
    gbId: string;
    serverIp: string;
    sipPort: number;
    sipProtocolType: number;
    httpPort: number;
    publicNetworkIp: string;
};

/**
 * 暂停巡检——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type PauseDetectionTasksReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 恢复巡检——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type ResumeDetectionTasksReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 取消巡检——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type StopDetectionTasksReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取指定巡检任务的所有记录——请求参数类型定义
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字
 * @params Quality {number} 巡检质量
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetDetectionTaskRecordsReqType = {
    id: string;
    Keyword?: string;
    Quality?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取指定巡检任务的所有记录——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetDetectionTaskRecordsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 获取巡检任务详情——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetDetectionDetailsReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取巡检任务详情——响应参数类型定义
 * @params id {string} 巡检任务Id
 * @params jobId {string} 触发该巡检任务的定时任务Id
 * @params beginTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params detectionCameraGroupId {string} 进行巡检的监控组
 * @params pullStreamDuration {number} 拉流时长
 * @params duration {string} 耗时
 * @params remainingDuration {string} 预计剩余耗时
 * @params taskStatus {EnumTypesSyncStatusCommonType} 巡检任务的状态（0-巡检中|1-巡检结束|2-巡检取消|3-巡检暂停|4-巡检重复）
 * @params taskExecutedCount {number} 该定时任务已执行次数
 * @params cameraDetectedCount {number} 巡检任务已巡检的监控
 * @params cameraAmount {number} 该任务需巡检的监控总数
 * @params imageAmount {number} 截图总数
 * @params excellentCameraAmount {number} 质量优的监控总数
 * @params goodCameraAmount {number} 质量良的监控总数
 * @params badCameraAmount {number} 质量差的监控总数
 * @params faultCameraAmount {number} 故障监控总数
 * @params unDetectionCameraAmount {number} 未检测监控总数
 * @params progress {number} 进度
 */
export type GetDetectionDetailsResType = {
    id: string;
    jobId: string;
    beginTime: string;
    endTime: string;
    detectionCameraGroupId: string;
    pullStreamDuration: number;
    duration: string;
    remainingDuration: string;
    taskStatus: EnumTypesSyncStatusCommonType;
    taskExecutedCount: number;
    cameraDetectedCount: number;
    cameraAmount: number;
    imageAmount: number;
    excellentCameraAmount: number;
    goodCameraAmount: number;
    badCameraAmount: number;
    faultCameraAmount: number;
    unDetectionCameraAmount: number;
    progress: number;
};

/**
 * 获取所有巡检任务执行情况，可通过 JobId 过滤——请求参数类型定义
 * @params JobId {string} 过滤指定 Job 下的巡检任务
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type VfsGetDetectionTasksReqType = {
    JobId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取所有巡检任务执行情况，可通过 JobId 过滤——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type VfsGetDetectionTasksResType = {
    totalCount: number;
    records: any[];
};

/**
 * 获取最新有效的巡检任务（不是重复执行的任务）——请求参数类型定义
 * @params JobId {string} 过滤指定 Job 下的巡检任务
 * @params CameraId {string} 巡检任务的监控组Id
 * @params DetectionType {number} 巡检任务组类型0监控 1标签
 * @headers X-version {string}
 */
export type GetLatestEffectiveReqType = {
    JobId?: string;
    CameraId?: string;
    DetectionType?: number;
    'X-version'?: string;
};

/**
 * 获取最新有效的巡检任务（不是重复执行的任务）——响应参数类型定义
 * @params cameraGroupOut {any} 监控组实体
 * @params detectionTaskOut {any} 巡检任务
 */
export type GetLatestEffectiveResType = {
    cameraGroupOut: any;
    detectionTaskOut: any;
};

/**
 * 获取最新有效的巡检任务（不是重复执行的任务）——请求参数类型定义
 * @headers X-version {string}
 */
export type GetLatestDetectionTasksReqType = {
    'X-version'?: string;
};

/**
 * 获取最新有效的巡检任务（不是重复执行的任务）——响应参数类型定义
 * @params cameraGroupOut {any} 监控组实体
 * @params detectionTaskOut {any} 巡检任务
 */
export type GetLatestDetectionTasksResType = {
    cameraGroupOut: any;
    detectionTaskOut: any;
};

/**
 * 重新巡检——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params qualities {EnumTypesQualityCommonType[]} 指定类型0-未检测1-差2-优3-良4-故障
 */
export type ReplyDetectionTaskReqType = {
    id: string;
    'X-version'?: string;
    qualities?: EnumTypesQualityCommonType[];
};

/**
 * 导出巡检记录——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params qualities {EnumTypesQualityCommonType[]} 质量过滤
 * @params fileName {string} 导出的文件名称
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量
 */
export type ExportDetectionTasksReqType = {
    id: string;
    'X-version'?: string;
    qualities?: EnumTypesQualityCommonType[];
    fileName?: string;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * 导入收藏监控，一般用于设施收藏监控——请求参数类型定义
 * @headers X-version {string}
 * @params favoriteCameraImportItems {any[]} 收藏监控导入数据
 */
export type ImportFavoriteCameraItemsReqType = {
    'X-version'?: string;
    favoriteCameraImportItems?: any[];
};

/**
 * 创建收藏项，包括收藏组和收藏监控. 收藏类型：1-收藏组 2-收藏监控——请求参数类型定义
 * @headers X-version {string}
 * @params nameOrId {string} 收藏项是组的时该属性为组名称，收藏项为监控时该属性为监控Id
 * @params parentId {string} 收藏项父级(如果收藏项是父级，那么其父级则是收藏组)
 * @params type {number} 收藏项类型
 */
export type CreateFavoriteCameraItemReqType = {
    'X-version'?: string;
    nameOrId?: string;
    parentId?: string;
    type?: number;
};

/**
 * 创建收藏项，包括收藏组和收藏监控. 收藏类型：1-收藏组 2-收藏监控——响应参数类型定义
 * @params id {string} 收藏项的 Id（收藏组 Id 或绑定监控关系的 Id）
 * @params cameraId {string} 收藏监控 Id
 * @params cameraStatus {EnumTypesCameraStatusCommonType} 监控状态
 * @params status {EnumTypesCameraStatusCommonType} 监控状态
 * @params name {string} 收藏项名称（只有收藏组有名称）
 * @params originalName {string} 原始名称
 * @params aliasName {string} 监控别名
 * @params parentId {string} 父Id
 * @params type {number} 收藏项类型
 * @params subType {string} 收藏主体类型创建者- creator设施- facility电话- phone路径- route行政区域- district专题- topic
 * @params labels {LabelOutCommonType[]} 监控标签
 * @params selfCameraCount {number} 自身组下监控（不包括子组）
 * @params selfCameraOnlineCount {number} 自身组下在线监控（不包括子组）
 * @params cameraCount {number} 监控总数（包括子组）
 * @params cameraOnlineCount {number} 在线监控总数（包括子组）
 * @params idPath {string} Id路径
 * @params namePath {string} 名字路径
 * @params parentName {string} 父级名称
 * @params result {EnumTypesQualityCommonType} 质量
 * @params resolution {EnumTypesResolutionCommonType} 分辨率
 * @params audio {boolean} 是否有音频
 * @params audioEncodingFormat {string} 音频编码属性
 * @params videoEncoder {EnumTypesVideoEncoderCommonType} 视频编码
 */
export type CreateFavoriteCameraItemResType = {
    id: string;
    cameraId: string;
    cameraStatus: EnumTypesCameraStatusCommonType;
    status: EnumTypesCameraStatusCommonType;
    name: string;
    originalName: string;
    aliasName: string;
    parentId: string;
    type: number;
    subType: string;
    labels: LabelOutCommonType[];
    selfCameraCount: number;
    selfCameraOnlineCount: number;
    cameraCount: number;
    cameraOnlineCount: number;
    idPath: string;
    namePath: string;
    parentName: string;
    result: EnumTypesQualityCommonType;
    resolution: EnumTypesResolutionCommonType;
    audio: boolean;
    audioEncodingFormat: string;
    videoEncoder: EnumTypesVideoEncoderCommonType;
};

/**
 * 条件查询收藏项——请求参数类型定义
 * @params Sub {string} 收藏主体的标识符（用户收藏为 userId | 设施收藏为设施 Id）
 * @params Type {number} 收藏项类型(1-收藏监控组 | 2-收藏监控)
 * @params SubType {string} 收藏主体类型（用户-creator | 设施-facility | 电话-phone | 路径-route | 行政区域-district | 专题-topic）
 * @params Keyword {string} 关键字搜索
 * @params LabelIds {any[]} 标签,只对监控有效，组是没有标签的
 * @params PlatformId {string} 平台 Id
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetFavoriteCameraItemsReqType = {
    Sub?: string;
    Type?: number;
    SubType?: string;
    Keyword?: string;
    LabelIds?: any[];
    PlatformId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 条件查询收藏项——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetFavoriteCameraItemsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 为设施、专题等非人创建收藏监控——请求参数类型定义
 * @headers X-version {string}
 * @params cameraId {string} 摄像头 Id （必填）
 * @params subId {string} 设施、专题等收藏主体 （必填）
 * @params subType {string} 收藏主体类型
 */
export type SaveFavoriteCameraItemsReqType = {
    'X-version'?: string;
    cameraId: string;
    subId: string;
    subType?: string;
};

/**
 * 为设施、专题等非人创建收藏监控——响应参数类型定义
 * @params id {string} 收藏项的 Id（收藏组 Id 或绑定监控关系的 Id）
 * @params cameraId {string} 收藏监控 Id
 * @params cameraStatus {EnumTypesCameraStatusCommonType} 监控状态
 * @params status {EnumTypesCameraStatusCommonType} 监控状态
 * @params name {string} 收藏项名称（只有收藏组有名称）
 * @params originalName {string} 原始名称
 * @params aliasName {string} 监控别名
 * @params parentId {string} 父Id
 * @params type {number} 收藏项类型
 * @params subType {string} 收藏主体类型创建者- creator设施- facility电话- phone路径- route行政区域- district专题- topic
 * @params labels {LabelOutCommonType[]} 监控标签
 * @params selfCameraCount {number} 自身组下监控（不包括子组）
 * @params selfCameraOnlineCount {number} 自身组下在线监控（不包括子组）
 * @params cameraCount {number} 监控总数（包括子组）
 * @params cameraOnlineCount {number} 在线监控总数（包括子组）
 * @params idPath {string} Id路径
 * @params namePath {string} 名字路径
 * @params parentName {string} 父级名称
 * @params result {EnumTypesQualityCommonType} 质量
 * @params resolution {EnumTypesResolutionCommonType} 分辨率
 * @params audio {boolean} 是否有音频
 * @params audioEncodingFormat {string} 音频编码属性
 * @params videoEncoder {EnumTypesVideoEncoderCommonType} 视频编码
 */
export type SaveFavoriteCameraItemsResType = {
    id: string;
    cameraId: string;
    cameraStatus: EnumTypesCameraStatusCommonType;
    status: EnumTypesCameraStatusCommonType;
    name: string;
    originalName: string;
    aliasName: string;
    parentId: string;
    type: number;
    subType: string;
    labels: LabelOutCommonType[];
    selfCameraCount: number;
    selfCameraOnlineCount: number;
    cameraCount: number;
    cameraOnlineCount: number;
    idPath: string;
    namePath: string;
    parentName: string;
    result: EnumTypesQualityCommonType;
    resolution: EnumTypesResolutionCommonType;
    audio: boolean;
    audioEncodingFormat: string;
    videoEncoder: EnumTypesVideoEncoderCommonType;
};

/**
 * 获取根收藏项——请求参数类型定义
 * @headers X-version {string}
 */
export type GetRootFavoriteCameraItemsReqType = {
    'X-version'?: string;
};

/**
 * 获取根收藏项——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetRootFavoriteCameraItemsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 获取子收藏项——请求参数类型定义
 * @params parentId {string} parentId （必填）
 * @params type {number}
 * @headers X-version {string}
 */
export type GetChildrenFavoriteCameraItemsReqType = {
    parentId: string;
    type?: number;
    'X-version'?: string;
};

/**
 * 获取子收藏项——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetChildrenFavoriteCameraItemsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 修改收藏项（监控不能修改名称）——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 仅限于收藏组修改
 * @params parentId {string} 仅限于收藏监控
 * @params cameraIds {any[]} 监控列表，更新收藏组下的监控当收藏类型为收藏组时，此字段有效
 * @params type {number} 收藏项类型
 */
export type EditFavoriteCameraItemReqType = {
    id: string;
    'X-version'?: string;
    name?: string;
    parentId?: string;
    cameraIds?: any[];
    type?: number;
};

/**
 * 删除收藏组或收藏监控——请求参数类型定义
 * @params type {number}  （必填）
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteFavoriteCameraItemReqType = {
    type: number;
    id: string;
    'X-version'?: string;
};

/**
 * 批量绑定收藏监控，subId为绑定 Id，subType为收藏主体类型，如收藏主体类型为电话填写phone，则subId为电话号码——请求参数类型定义
 * @params subId {string} subId （必填）
 * @params subType {string}  （必填）
 * @headers X-version {string}
 * @params cameraIds {any[]} 更新的监控 Id
 */
export type BatchEditFavoriteCameraItemsReqType = {
    subId: string;
    subType: string;
    'X-version'?: string;
    cameraIds?: any[];
};

/**
 * 同步国标下级域——请求参数类型定义
 * @headers X-version {string}
 * @params regionId {string} 下级域的国标Id （必填）
 * @params groupId {string} 指定目录Id
 */
export type SyncGbConfigDomainReqType = {
    'X-version'?: string;
    regionId: string;
    groupId?: string;
};

/**
 * 修改国标下级域——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params heartbeadCycle {number} 心跳周期
 * @params heartbeadTimeoutCount {number} 心跳超时次数
 * @params ip {string} 下级域的SIP信令IP地址 （必填）
 * @params name {string} 下级域的名称 （必填）
 * @params needAuth {number} 是否需要认证
 * @params password {string} 认证密码
 * @params needMapping {boolean} 启用映射
 * @params sipMappedAddress {string} 信令映射地址
 * @params mediaMappedAddress {string} 流媒体映射地址
 * @params networkType {1 | 2} 对接网络类型，1：内网，2：公网默认内网
 * @params sipPort {number} 下级域的SIP信令端口号 （必填）
 * @params userName {string} 用户名,建议同gbid
 * @params rtpRecvType {EnumTypesRtpRecvTypeCommonType} 国标流媒体收流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params rtpSendType {RtpSendTypeCommonType} 国标流媒体向下级发流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params sipTransProtocol {EnumTypesSipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知,默认true
 * @params extension {any} 扩展字段
 */
export type EditGbConfigDomainReqType = {
    id: string;
    'X-version'?: string;
    heartbeadCycle?: number;
    heartbeadTimeoutCount?: number;
    ip: string;
    name: string;
    needAuth?: number;
    password?: string;
    needMapping?: boolean;
    sipMappedAddress?: string;
    mediaMappedAddress?: string;
    networkType?: 1 | 2;
    sipPort: number;
    userName?: string;
    rtpRecvType?: EnumTypesRtpRecvTypeCommonType;
    rtpSendType?: RtpSendTypeCommonType;
    sipTransProtocol?: EnumTypesSipTransProtocolCommonType;
    isStateNotifyFromDomain?: boolean;
    extension?: any;
};

/**
 * 查询国标下级域详情——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetGbConfigDomainByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 查询国标下级域详情——响应参数类型定义
 * @params activeRegister {boolean} 是否主动注册，对上级平台被动接受注册，填false；对下级平台，需主动向上级发起注册请求，填true
 * @params civilCode {string} 区域编码
 * @params gbId {string} 国标id
 * @params heartBeadCycle {number} 心跳周期
 * @params heartBeadTimeoutCount {number} 心跳超时次数
 * @params ip {string} 下级域ip地址
 * @params manufacturer {number} 厂商类型
 * @params model {string} 型号，可为空
 * @params name {string} 下级域名称
 * @params needAuth {number} 是否需要认证
 * @params networkType {number} 网络类型（1：内网，2：公网）
 * @params password {string} 认证密码
 * @params sipPort {number} 端口
 * @params status {number} 下级域状态1：设备离线2：设备在线
 * @params type {number} 用户代理类型，常见类型，IPC:131NVR:118Platform(国标平台):2Encoder:113Decoder:114
 * @params userName {string} 认证用户名
 * @params taskStatus {EnumTypesSyncStatusCommonType} 同步任务状态未开始 0进行中 1 同步完成 2应用中 3 应用完成 4
 * @params timeRemaining {number} 同步剩余时间，单位/秒
 * @params progress {number} 同步进度，百分比
 * @params catalogsNum {number} 信令同步目录数量值
 * @params actualCatalogsNum {number} 实际同步目录数量
 * @params rtpRecvType {EnumTypesRtpRecvTypeCommonType} 国标流媒体收流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params rtpSendType {RtpSendTypeCommonType} 国标流媒体向下级发流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params sipTransProtocol {EnumTypesSipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知
 * @params stateDuration {string} 在线/离线时长
 * @params lastStateChangedTime {string} 最后一次状态变更时间
 * @params extension {any} 扩展字段
 * @params needMapping {boolean} 启用映射
 * @params sipMappedAddress {string} 信令映射地址
 * @params mediaMappedAddress {string} 流媒体映射地址
 */
export type GetGbConfigDomainByIdResType = {
    activeRegister: boolean;
    civilCode: string;
    gbId: string;
    heartBeadCycle: number;
    heartBeadTimeoutCount: number;
    ip: string;
    manufacturer: number;
    model: string;
    name: string;
    needAuth: number;
    networkType: number;
    password: string;
    sipPort: number;
    status: number;
    type: number;
    userName: string;
    taskStatus: EnumTypesSyncStatusCommonType;
    timeRemaining: number;
    progress: number;
    catalogsNum: number;
    actualCatalogsNum: number;
    rtpRecvType: EnumTypesRtpRecvTypeCommonType;
    rtpSendType: RtpSendTypeCommonType;
    sipTransProtocol: EnumTypesSipTransProtocolCommonType;
    isStateNotifyFromDomain: boolean;
    stateDuration: string;
    lastStateChangedTime: string;
    extension: any;
    needMapping: boolean;
    sipMappedAddress: string;
    mediaMappedAddress: string;
};

/**
 * 分页查询下级域（同步的详细信息）——请求参数类型定义
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetGbConfigDomainsReqType = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 分页查询下级域（同步的详细信息）——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetGbConfigDomainsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 添加下级域接口——请求参数类型定义
 * @headers X-version {string}
 * @params activeRegister {boolean} 是否主动注册
 * @params civilcode {string} 区域编码
 * @params gbId {string} 下级域的国标id （必填）
 * @params heartbeadCycle {number} 心跳周期
 * @params heartbeadTimeoutCount {number} 心跳超时次数
 * @params ip {string} 下级域的SIP信令IP地址 （必填）
 * @params manufacturer {number} 厂商，可为空
 * @params model {string} 型号，可为空
 * @params name {string} 下级域的名称 （必填）
 * @params needAuth {number} 是否需要认证
 * @params password {string} 认证密码
 * @params needMapping {boolean} 启用映射
 * @params sipMappedAddress {string} 信令映射地址
 * @params mediaMappedAddress {string} 流媒体映射地址
 * @params networkType {1 | 2} 对接网络类型，1：内网，2：公网默认内网
 * @params sipPort {number} 下级域的SIP信令端口号 （必填）
 * @params type {number} 用户代理类型，IPC:131 国标摄像头NVR:118  国标NVRPlatform(国标平台) :2Encoder:113  国标编码器Decoder:114 国标解码器VCE:300 非标服务视频
 * @params userName {string} 用户名,建议同gbid
 * @params rtpRecvType {EnumTypesRtpRecvTypeCommonType} 国标流媒体收流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params rtpSendType {RtpSendTypeCommonType} 国标流媒体向下级发流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params sipTransProtocol {EnumTypesSipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知,默认true
 * @params extension {any} 扩展字段
 */
export type AddGbConfigDomainsReqType = {
    'X-version'?: string;
    activeRegister?: boolean;
    civilcode?: string;
    gbId: string;
    heartbeadCycle?: number;
    heartbeadTimeoutCount?: number;
    ip: string;
    manufacturer?: number;
    model?: string;
    name: string;
    needAuth?: number;
    password?: string;
    needMapping?: boolean;
    sipMappedAddress?: string;
    mediaMappedAddress?: string;
    networkType?: 1 | 2;
    sipPort: number;
    type?: number;
    userName?: string;
    rtpRecvType?: EnumTypesRtpRecvTypeCommonType;
    rtpSendType?: RtpSendTypeCommonType;
    sipTransProtocol?: EnumTypesSipTransProtocolCommonType;
    isStateNotifyFromDomain?: boolean;
    extension?: any;
};

/**
 * 添加下级域接口——响应参数类型定义
 * @params activeRegister {boolean} 是否主动注册，对上级平台被动接受注册，填false；对下级平台，需主动向上级发起注册请求，填true
 * @params civilCode {string} 区域编码
 * @params gbId {string} 国标id
 * @params heartBeadCycle {number} 心跳周期
 * @params heartBeadTimeoutCount {number} 心跳超时次数
 * @params ip {string} 下级域ip地址
 * @params manufacturer {number} 厂商类型
 * @params model {string} 型号，可为空
 * @params name {string} 下级域名称
 * @params needAuth {number} 是否需要认证
 * @params networkType {number} 网络类型（1：内网，2：公网）
 * @params password {string} 认证密码
 * @params sipPort {number} 端口
 * @params status {number} 下级域状态1：设备离线2：设备在线
 * @params type {number} 用户代理类型，常见类型，IPC:131NVR:118Platform(国标平台):2Encoder:113Decoder:114
 * @params userName {string} 认证用户名
 * @params taskStatus {EnumTypesSyncStatusCommonType} 同步任务状态未开始 0进行中 1 同步完成 2应用中 3 应用完成 4
 * @params timeRemaining {number} 同步剩余时间，单位/秒
 * @params progress {number} 同步进度，百分比
 * @params catalogsNum {number} 信令同步目录数量值
 * @params actualCatalogsNum {number} 实际同步目录数量
 * @params rtpRecvType {EnumTypesRtpRecvTypeCommonType} 国标流媒体收流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params rtpSendType {RtpSendTypeCommonType} 国标流媒体向下级发流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params sipTransProtocol {EnumTypesSipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知
 * @params stateDuration {string} 在线/离线时长
 * @params lastStateChangedTime {string} 最后一次状态变更时间
 * @params extension {any} 扩展字段
 * @params needMapping {boolean} 启用映射
 * @params sipMappedAddress {string} 信令映射地址
 * @params mediaMappedAddress {string} 流媒体映射地址
 */
export type AddGbConfigDomainsResType = {
    activeRegister: boolean;
    civilCode: string;
    gbId: string;
    heartBeadCycle: number;
    heartBeadTimeoutCount: number;
    ip: string;
    manufacturer: number;
    model: string;
    name: string;
    needAuth: number;
    networkType: number;
    password: string;
    sipPort: number;
    status: number;
    type: number;
    userName: string;
    taskStatus: EnumTypesSyncStatusCommonType;
    timeRemaining: number;
    progress: number;
    catalogsNum: number;
    actualCatalogsNum: number;
    rtpRecvType: EnumTypesRtpRecvTypeCommonType;
    rtpSendType: RtpSendTypeCommonType;
    sipTransProtocol: EnumTypesSipTransProtocolCommonType;
    isStateNotifyFromDomain: boolean;
    stateDuration: string;
    lastStateChangedTime: string;
    extension: any;
    needMapping: boolean;
    sipMappedAddress: string;
    mediaMappedAddress: string;
};

/**
 * 获取未管理的下级域——请求参数类型定义
 * @headers X-version {string}
 */
export type GetUnusedDomainsReqType = {
    'X-version'?: string;
};

/**
 * 获取未管理的下级域——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetUnusedDomainsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 批量删除国标下级域——请求参数类型定义
 * @headers X-version {string}
 * @params gbIds {any[]} 下级域Id
 */
export type DeleteDomainsReqType = {
    'X-version'?: string;
    gbIds?: any[];
};

/**
 * 清空下级域所有数据——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type ClearDomainsReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 同步历史记录分页查询——请求参数类型定义
 * @params id {string} id （必填）
 * @params SyncType {number} 同步类型0-全量同步1-增量同步2-指定目录同步
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetSyncTaskHistoriesReqType = {
    id: string;
    SyncType?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 同步历史记录分页查询——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetSyncTaskHistoriesResType = {
    totalCount: number;
    records: any[];
};

/**
 * 同步记录数据多条件查询,传入id为同步任务的id——请求参数类型定义
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字
 * @params UpdateStatus {number} 变更状态
 * @params Type {number} 数据类型1-监控2-目录null-全部
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetSyncTaskHistoriesByIdReqType = {
    id: string;
    Keyword?: string;
    UpdateStatus?: number;
    Type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 同步记录数据多条件查询,传入id为同步任务的id——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetSyncTaskHistoriesByIdResType = {
    totalCount: number;
    records: any[];
};

/**
 * 查询过期监控与监控组——请求参数类型定义
 * @params id {string} id （必填）
 * @params Type {number} 类型，摄像头 0 组 1
 * @params StartTime {string} 开始时间
 * @params EndTime {string} 结束时间
 * @params Keyword {string} 关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetExpiredDomainsReqType = {
    id: string;
    Type?: number;
    StartTime?: string;
    EndTime?: string;
    Keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 查询过期监控与监控组——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetExpiredDomainsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 删除过期监控与监控组——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params type {EnumTypesCommonType} 删除类型，0：批量删除，1：按时间删除，2：全部删除
 * @params records {any[]} 批量删除数据记录列表
 * @params timeRange {number} 删除近几天记录
 */
export type DeleteExpiredDomainsReqType = {
    id: string;
    'X-version'?: string;
    type?: EnumTypesCommonType;
    records?: any[];
    timeRange?: number;
};

/**
 * 解决同步冲突——请求参数类型定义
 * @params id {number} id （必填）
 * @headers X-version {string}
 * @params conflictType {number} 冲突的类型0-没有冲突1-组冲突2-经纬度冲突3-全都有
 */
export type ResolveConflictReqType = {
    id: number;
    'X-version'?: string;
    conflictType?: number;
};

/**
 * 分级调度操作——请求参数类型定义
 * @headers X-version {string}
 * @params version {string} 请求版本 （必填）
 * @params id {string} Id （必填）
 * @params bizName {string} 业务名称 （必填）
 * @params bizData {any} 业务数据 （必填）
 * @params sourceId {string} 源平台 Id （必填）
 * @params destinationId {string} 目标平台 Id （必填）
 * @params type {number} 业务类型：1-Erds|2-Vfs|3-Rms （必填）
 * @params timeout {number} 请求超时设置(单位：秒) （必填）
 */
export type VfsGradingDispatchReqType = {
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
 * 条件查询视频历史拉流数据——请求参数类型定义
 * @params Keyword {string} 关键字模糊查询（流媒体名称，终端设备名称或流id）
 * @params TraceId {string} TraceId
 * @params BusinessName {string} 业务类型live-事件快报aslive-app人员直播meetlive-会议直播rtp-监控拉流null-默认全部
 * @params IsSuccess {boolean} 拉流成功或失败true 成功false 失败null 全部
 * @params StartTime {string} 拉流开始时间
 * @params EndTime {string} 拉流结束时间
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetHistoryCameraPullsReqType = {
    Keyword?: string;
    TraceId?: string;
    BusinessName?: string;
    IsSuccess?: boolean;
    StartTime?: string;
    EndTime?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 条件查询视频历史拉流数据——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetHistoryCameraPullsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 获取指定历史拉流记录的详细信息——请求参数类型定义
 * @params id {string} id （必填）
 * @params Date {string} 指定时间，拉流开始时间，
 * @headers X-version {string}
 */
export type GetHistoryCameraPullsByIdReqType = {
    id: string;
    Date?: string;
    'X-version'?: string;
};

/**
 * 获取指定历史拉流记录的详细信息——响应参数类型定义
 * @params fps {number} 视频的帧率， 例：0fps
 * @params resolution {EnumTypesResolutionCommonType}  分辨率0-高清1-标清2-全高清3-超高清
 * @params audioFormat {EnumTypesAudioFormatCommonType} 音频的编码方式0-无1-G711A2-G711U3-AAC4-OPUS5-未知）
 * @params client {string} 拉取视频流的客户端信息ipport
 * @params localSdpInfo {string} 本地sdp消息
 * @params remoteSdpInfo {string} 对端sdp信息
 * @params sdpDescription {string} sdp信息描述
 * @params playUrl {any} 流播放地址
 * @params files {any[]} 录像记录
 * @params mediaReceiveIp {string} 流媒体接收IP
 * @params mediaReceivePort {number} 流媒体接收端口
 * @params reStreamId {number} 复用流Id
 * @params responseInviteTime {number} 信令时延 单位/毫秒
 * @params terminalIp {string} 终端ip
 * @params terminalPort {number} 终端端口
 * @params terminalType {number} 终端协议-1-未知0-GB/T 281811-RTSP2-Onvif4-非标协议5-RTMP6-WebRTC99-其它
 * @params videoRequestFlowRecords {any[]} 链路追踪记录
 * @params failStreamPath {EnumTypesStreamPathCommonType} 流失败的路径0-终端失败1-流媒体收流失败2-流媒体发送失败3-客户端失败null-流正常
 * @params id {number} 标识id
 * @params businessName {string} 业务类型 live:事件快报，aslive：app人员直播，meetlive：会议直播
 * @params streamId {string} 流id
 * @params startTime {string} 拉流开始时间
 * @params endTime {string} 拉流结束时间
 * @params deviceId {string} 设备id
 * @params deviceName {string} 设备名称
 * @params mediaServerId {string} 流媒体Id
 * @params mediaServerName {string} 流媒体名称
 * @params firstPullTime {number} 首次收流时长,响应延时 单位/毫秒
 * @params isSuccess {boolean} 拉流是否成功true 成功false 失败
 * @params failReason {number} 失败信息
 * @params endReason {string} 结束原因
 * @params videoEncoder {EnumTypesVideoEncoderCommonType} 视频编码类型0-H2641-H265
 * @params terminal {string} 终端信息ipport
 * @params traceId {string} TraceId
 * @params areaCode {string} 行政区域码
 * @params userId {string} 用户id
 * @params userName {string} 用户名称
 */
export type GetHistoryCameraPullsByIdResType = {
    fps: number;
    resolution: EnumTypesResolutionCommonType;
    audioFormat: EnumTypesAudioFormatCommonType;
    client: string;
    localSdpInfo: string;
    remoteSdpInfo: string;
    sdpDescription: string;
    playUrl: any;
    files: any[];
    mediaReceiveIp: string;
    mediaReceivePort: number;
    reStreamId: number;
    responseInviteTime: number;
    terminalIp: string;
    terminalPort: number;
    terminalType: number;
    videoRequestFlowRecords: any[];
    failStreamPath: EnumTypesStreamPathCommonType;
    id: number;
    businessName: string;
    streamId: string;
    startTime: string;
    endTime: string;
    deviceId: string;
    deviceName: string;
    mediaServerId: string;
    mediaServerName: string;
    firstPullTime: number;
    isSuccess: boolean;
    failReason: number;
    endReason: string;
    videoEncoder: EnumTypesVideoEncoderCommonType;
    terminal: string;
    traceId: string;
    areaCode: string;
    userId: string;
    userName: string;
};

/**
 * 条件查询视频历史拉流数据——请求参数类型定义
 * @params StartTime {string} 拉流开始时间 （必填）
 * @params StopTime {string} 拉流停止时间 （必填）
 * @params StreamId {number} 流媒体 Id
 * @params DeviceId {string} 终端 Id
 * @params Keyword {string} 关键字（终端名称的模糊搜索）
 * @params ClientAddress {string} 客户端请求地址（格式为 ip:port）
 * @params ReceiveAddress {string} 接收端地址（格式为 ip:port）
 * @params ForwardAddress {string} 转发地址（格式为 ip:port）
 * @params Result {number} 请求结果
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type SearchHistoryCameraPullsReqType = {
    StartTime: string;
    StopTime: string;
    StreamId?: number;
    DeviceId?: string;
    Keyword?: string;
    ClientAddress?: string;
    ReceiveAddress?: string;
    ForwardAddress?: string;
    Result?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 条件查询视频历史拉流数据——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type SearchHistoryCameraPullsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 获取所有的标签——请求参数类型定义
 * @params keyWord {string}
 * @headers X-version {string}
 */
export type GetAllLabelsV2ReqType = {
    keyWord?: string;
    'X-version'?: string;
};

/**
 * 获取所有的标签——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {QueryLabelOutCommonType[]} 记录
 */
export type GetAllLabelsV2ResType = {
    totalCount: number;
    records: QueryLabelOutCommonType[];
};

/**
 * 创建新标签——请求参数类型定义
 * @headers X-version {string}
 * @params title {string} 标签标题 （必填）
 * @params color {string} 标签颜色 （必填）
 * @params description {string} 标签说明
 */
export type CreateLabelReqType = {
    'X-version'?: string;
    title: string;
    color: string;
    description?: string;
};

/**
 * 创建新标签——响应参数类型定义
 * @params id {number} 主键
 * @params title {string} 标签标题
 * @params color {string} 标签颜色
 * @params description {string} 标签说明
 */
export type CreateLabelResType = {
    id: number;
    title: string;
    color: string;
    description: string;
};

/**
 * 修改指定标签——请求参数类型定义
 * @params id {number} id （必填）
 * @headers X-version {string}
 * @params title {string} 标签标题
 * @params color {string} 标签颜色
 * @params description {string} 描述
 */
export type VfsEditLabelReqType = {
    id: number;
    'X-version'?: string;
    title?: string;
    color?: string;
    description?: string;
};

/**
 * 删除指定标签——请求参数类型定义
 * @params id {number} id （必填）
 * @headers X-version {string}
 */
export type VfsDeleteLabelReqType = {
    id: number;
    'X-version'?: string;
};

/**
 * 批量删除标签——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} 标签id列表,一次请求最多删除1000条，超过1000请分批请求 （必填）
 */
export type BatchDeleteLabelReqType = {
    'X-version'?: string;
    ids: any[];
};

/**
 * 批量设置监控或监控组下监控的标签——请求参数类型定义
 * @headers X-version {string}
 * @params labelIds {any[]} 标签id集合,需要添加的标签id集合 （必填）
 * @params groupIds {any[]} 监控组id集合,需要被添加监控标签的组，选择后，对应组下的监控会被打上标签
 * @params cameraIds {any[]} 监控id集合，对应的监控会打上标签
 */
export type BatchEditCameraLabelReqType = {
    'X-version'?: string;
    labelIds: any[];
    groupIds?: any[];
    cameraIds?: any[];
};

/**
 * 批量删除监控或监控组下监控的标签——请求参数类型定义
 * @headers X-version {string}
 * @params labelIds {any[]} 标签id集合,需要删除的标签id集合 （必填）
 * @params groupIds {any[]} 监控组id集合,需要被删除监控标签的组，选择后，对应组下的监控会删除对应的标签
 * @params cameraIds {any[]} 监控id集合，对应的监控会删除标签
 */
export type BatchDeleteCameraLabelReqType = {
    'X-version'?: string;
    labelIds: any[];
    groupIds?: any[];
    cameraIds?: any[];
};

/**
 * 导出标签——请求参数类型定义
 * @headers X-version {string}
 * @params ids {any[]} 标签Id集合 （必填）
 */
export type ExportLabelReqType = {
    'X-version'?: string;
    ids: any[];
};

/**
 * 导出标签——响应参数类型定义
 * @params label {any[]} 标签集合
 */
export type ExportLabelResType = {
    label: any[];
};

/**
 * 导入标签——请求参数类型定义
 * @headers X-version {string}
 * @params label {any[]} 标签导入业务对象
 */
export type ImportLabelReqType = {
    'X-version'?: string;
    label?: any[];
};

/**
 * 分页查询直播列表——请求参数类型定义
 * @params ContactId {string} 联系人 Id
 * @params LiveStatus {number} 直播状态0-未开始1-直播中2-暂停3-停止（历史）null 查全部状态
 * @params KeyWord {string} 关键字查询
 * @params PlayUrlShowType {number} 播放地址返回类型。0-完整url | 1-只有路径和参数
 * @params AppName {string} app类型 默认：live
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type ObtainLiveReqType = {
    ContactId?: string;
    LiveStatus?: number;
    KeyWord?: string;
    PlayUrlShowType?: number;
    AppName?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 分页查询直播列表——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type ObtainLiveResType = {
    totalCount: number;
    records: any[];
};

/**
 * 主动打开联系人直播——请求参数类型定义
 * @params contactId {string} contactId （必填）
 * @headers X-version {string}
 */
export type OpenLivesReqType = {
    contactId: string;
    'X-version'?: string;
};

/**
 * 主动打开联系人直播——响应参数类型定义
 * @params id {string} 直播Id:578
 * @params stream {string} 直播stream
 * @params status {any} 直播状态
 * @params liveType {any} 流媒体服务类型
 * @params title {string} 直播标题
 * @params description {string} 直播描述
 * @params userId {string} 用户Id
 * @params userAccount {string} 用户账号
 * @params userName {string} 用户名称
 * @params createTime {string} 创建时间
 * @params rtmpUrl {string} RtmpUrl
 * @params flvUrl {string} 播放Url
 * @params rtspUrl {string} Rtsp 地址
 * @params wsUrl {string} Ws 地址
 * @params webRtcUrl {string} WebRtc 地址
 * @params relateWsUrl {string} Ws 相对地址
 * @params relateFlvUrl {string} Flv 相对地址
 * @params relateWebRtcUrl {string} WebRtc 相对地址
 * @params isGradingDispatch {boolean} 是否为分级调度的直播回调
 * @params appointment {string} 预约时间
 */
export type OpenLivesResType = {
    id: string;
    stream: string;
    status: any;
    liveType: any;
    title: string;
    description: string;
    userId: string;
    userAccount: string;
    userName: string;
    createTime: string;
    rtmpUrl: string;
    flvUrl: string;
    rtspUrl: string;
    wsUrl: string;
    webRtcUrl: string;
    relateWsUrl: string;
    relateFlvUrl: string;
    relateWebRtcUrl: string;
    isGradingDispatch: boolean;
    appointment: string;
};

/**
 * 创建直播——请求参数类型定义
 * @headers X-version {string}
 * @params groupId {string} 直播组 ID，用于指定直播权限，只能组内成员观看直播，默认 0 表示全权限
 * @params appointment {string} 预约开播时间，默认为当前时间
 * @params contactName {string} 主播名称
 * @params contactId {string} 主播Id
 * @params description {string} 描述 （必填）
 * @params title {string} 直播主题 （必填）
 * @params appName {string} 应用名称事件快报-live会议直播-MeetLive
 */
export type CreateLivesReqType = {
    'X-version'?: string;
    groupId?: string;
    appointment?: string;
    contactName?: string;
    contactId?: string;
    description: string;
    title: string;
    appName?: string;
};

/**
 * 创建直播——响应参数类型定义
 * @params id {string} 直播Id:578
 * @params stream {string} 直播stream
 * @params status {any} 直播状态
 * @params liveType {any} 流媒体服务类型
 * @params title {string} 直播标题
 * @params description {string} 直播描述
 * @params userId {string} 用户Id
 * @params userAccount {string} 用户账号
 * @params userName {string} 用户名称
 * @params createTime {string} 创建时间
 * @params rtmpUrl {string} RtmpUrl
 * @params flvUrl {string} 播放Url
 * @params rtspUrl {string} Rtsp 地址
 * @params wsUrl {string} Ws 地址
 * @params webRtcUrl {string} WebRtc 地址
 * @params relateWsUrl {string} Ws 相对地址
 * @params relateFlvUrl {string} Flv 相对地址
 * @params relateWebRtcUrl {string} WebRtc 相对地址
 * @params isGradingDispatch {boolean} 是否为分级调度的直播回调
 * @params appointment {string} 预约时间
 */
export type CreateLivesResType = {
    id: string;
    stream: string;
    status: any;
    liveType: any;
    title: string;
    description: string;
    userId: string;
    userAccount: string;
    userName: string;
    createTime: string;
    rtmpUrl: string;
    flvUrl: string;
    rtspUrl: string;
    wsUrl: string;
    webRtcUrl: string;
    relateWsUrl: string;
    relateFlvUrl: string;
    relateWebRtcUrl: string;
    isGradingDispatch: boolean;
    appointment: string;
};

/**
 * 主动打开联系人直播，可传入直播标题和描述等信息——请求参数类型定义
 * @params contactId {string} contactId （必填）
 * @headers X-version {string}
 * @params title {string} 直播标题
 * @params description {string} 直播描述
 */
export type OpenLiveWithInfoReqType = {
    contactId: string;
    'X-version'?: string;
    title?: string;
    description?: string;
};

/**
 * 主动打开联系人直播，可传入直播标题和描述等信息——响应参数类型定义
 * @params id {string} 直播Id:578
 * @params stream {string} 直播stream
 * @params status {any} 直播状态
 * @params liveType {any} 流媒体服务类型
 * @params title {string} 直播标题
 * @params description {string} 直播描述
 * @params userId {string} 用户Id
 * @params userAccount {string} 用户账号
 * @params userName {string} 用户名称
 * @params createTime {string} 创建时间
 * @params rtmpUrl {string} RtmpUrl
 * @params flvUrl {string} 播放Url
 * @params rtspUrl {string} Rtsp 地址
 * @params wsUrl {string} Ws 地址
 * @params webRtcUrl {string} WebRtc 地址
 * @params relateWsUrl {string} Ws 相对地址
 * @params relateFlvUrl {string} Flv 相对地址
 * @params relateWebRtcUrl {string} WebRtc 相对地址
 * @params isGradingDispatch {boolean} 是否为分级调度的直播回调
 * @params appointment {string} 预约时间
 */
export type OpenLiveWithInfoResType = {
    id: string;
    stream: string;
    status: any;
    liveType: any;
    title: string;
    description: string;
    userId: string;
    userAccount: string;
    userName: string;
    createTime: string;
    rtmpUrl: string;
    flvUrl: string;
    rtspUrl: string;
    wsUrl: string;
    webRtcUrl: string;
    relateWsUrl: string;
    relateFlvUrl: string;
    relateWebRtcUrl: string;
    isGradingDispatch: boolean;
    appointment: string;
};

/**
 * 向指定的直播用户发送互动语音——请求参数类型定义
 * @params stream {string} 直播地址的Stream （必填）
 * @headers X-version {string}
 * @params base64StrAudio {string} 语音转成的base64字符
 */
export type SendAudioReqType = {
    stream: string;
    'X-version'?: string;
    base64StrAudio?: string;
};

/**
 * 获取指定的直播信息——请求参数类型定义
 * @params stream {string} 直播的Stream （必填）
 * @headers X-version {string}
 */
export type GetLiveInfoReqType = {
    stream: string;
    'X-version'?: string;
};

/**
 * 获取指定的直播信息——响应参数类型定义
 * @params id {string} 直播Id:578
 * @params stream {string} 直播stream
 * @params status {any} 直播状态
 * @params liveType {any} 流媒体服务类型
 * @params title {string} 直播标题
 * @params description {string} 直播描述
 * @params userId {string} 用户Id
 * @params userAccount {string} 用户账号
 * @params userName {string} 用户名称
 * @params createTime {string} 创建时间
 * @params rtmpUrl {string} RtmpUrl
 * @params flvUrl {string} 播放Url
 * @params rtspUrl {string} Rtsp 地址
 * @params wsUrl {string} Ws 地址
 * @params webRtcUrl {string} WebRtc 地址
 * @params relateWsUrl {string} Ws 相对地址
 * @params relateFlvUrl {string} Flv 相对地址
 * @params relateWebRtcUrl {string} WebRtc 相对地址
 * @params isGradingDispatch {boolean} 是否为分级调度的直播回调
 * @params appointment {string} 预约时间
 */
export type GetLiveInfoResType = {
    id: string;
    stream: string;
    status: any;
    liveType: any;
    title: string;
    description: string;
    userId: string;
    userAccount: string;
    userName: string;
    createTime: string;
    rtmpUrl: string;
    flvUrl: string;
    rtspUrl: string;
    wsUrl: string;
    webRtcUrl: string;
    relateWsUrl: string;
    relateFlvUrl: string;
    relateWebRtcUrl: string;
    isGradingDispatch: boolean;
    appointment: string;
};

/**
 * 关闭指定流 Id 的直播——请求参数类型定义
 * @params stream {string} 流 Id （必填）
 * @headers X-version {string}
 */
export type CloseLiveReqType = {
    stream: string;
    'X-version'?: string;
};

/**
 * 获取历史直播的录屏信息——请求参数类型定义
 * @params stream {string}  （必填）
 * @headers X-version {string}
 */
export type GetVideoRecordsReqType = {
    stream: string;
    'X-version'?: string;
};

/**
 * 获取历史直播的录屏信息——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetVideoRecordsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 同步国标下级域——请求参数类型定义
 * @headers X-version {string}
 * @params regionId {string} 下级域的国标Id （必填）
 * @params groupId {string} 指定目录Id
 */
export type SyncLowerDomainsReqType = {
    'X-version'?: string;
    regionId: string;
    groupId?: string;
};

/**
 * 修改国标下级域——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params heartbeadCycle {number} 心跳周期
 * @params heartbeadTimeoutCount {number} 心跳超时次数
 * @params ip {string} 下级域的SIP信令IP地址 （必填）
 * @params name {string} 下级域的名称 （必填）
 * @params needAuth {number} 是否需要认证
 * @params password {string} 认证密码
 * @params needMapping {boolean} 启用映射
 * @params sipMappedAddress {string} 信令映射地址
 * @params mediaMappedAddress {string} 流媒体映射地址
 * @params networkType {any} 对接网络类型，1：内网，2：公网默认内网
 * @params sipPort {number} 下级域的SIP信令端口号 （必填）
 * @params userName {string} 用户名,建议同gbid
 * @params rtpRecvType {EnumTypesRtpRecvTypeCommonType} 国标流媒体收流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params rtpSendType {RtpSendTypeCommonType} 国标流媒体向下级发流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params sipTransProtocol {EnumTypesSipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知,默认true
 * @params extension {any} 扩展字段
 */
export type EditLowerDomainsReqType = {
    id: string;
    'X-version'?: string;
    heartbeadCycle?: number;
    heartbeadTimeoutCount?: number;
    ip: string;
    name: string;
    needAuth?: number;
    password?: string;
    needMapping?: boolean;
    sipMappedAddress?: string;
    mediaMappedAddress?: string;
    networkType?: any;
    sipPort: number;
    userName?: string;
    rtpRecvType?: EnumTypesRtpRecvTypeCommonType;
    rtpSendType?: RtpSendTypeCommonType;
    sipTransProtocol?: EnumTypesSipTransProtocolCommonType;
    isStateNotifyFromDomain?: boolean;
    extension?: any;
};

/**
 * 查询国标下级域详情——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetLowerDomainByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 查询国标下级域详情——响应参数类型定义
 * @params activeRegister {boolean} 是否主动注册，对上级平台被动接受注册，填false；对下级平台，需主动向上级发起注册请求，填true
 * @params civilCode {string} 区域编码
 * @params gbId {string} 国标id
 * @params heartBeadCycle {number} 心跳周期
 * @params heartBeadTimeoutCount {number} 心跳超时次数
 * @params ip {string} 下级域ip地址
 * @params manufacturer {number} 厂商类型
 * @params model {string} 型号，可为空
 * @params name {string} 下级域名称
 * @params needAuth {number} 是否需要认证
 * @params networkType {number} 网络类型（1：内网，2：公网）
 * @params password {string} 认证密码
 * @params sipPort {number} 端口
 * @params status {number} 下级域状态1：设备离线2：设备在线
 * @params type {number} 用户代理类型，常见类型，IPC:131NVR:118Platform(国标平台):2Encoder:113Decoder:114
 * @params userName {string} 认证用户名
 * @params taskStatus {EnumTypesSyncStatusCommonType} 同步任务状态未开始 0进行中 1 同步完成 2应用中 3 应用完成 4
 * @params timeRemaining {number} 同步剩余时间，单位/秒
 * @params progress {number} 同步进度，百分比
 * @params catalogsNum {number} 信令同步目录数量值
 * @params actualCatalogsNum {number} 实际同步目录数量
 * @params rtpRecvType {EnumTypesRtpRecvTypeCommonType} 国标流媒体收流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params rtpSendType {RtpSendTypeCommonType} 国标流媒体向下级发流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params sipTransProtocol {EnumTypesSipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知
 * @params stateDuration {string} 在线/离线时长
 * @params lastStateChangedTime {string} 最后一次状态变更时间
 * @params extension {any} 扩展字段
 * @params needMapping {boolean} 启用映射
 * @params sipMappedAddress {string} 信令映射地址
 * @params mediaMappedAddress {string} 流媒体映射地址
 */
export type GetLowerDomainByIdResType = {
    activeRegister: boolean;
    civilCode: string;
    gbId: string;
    heartBeadCycle: number;
    heartBeadTimeoutCount: number;
    ip: string;
    manufacturer: number;
    model: string;
    name: string;
    needAuth: number;
    networkType: number;
    password: string;
    sipPort: number;
    status: number;
    type: number;
    userName: string;
    taskStatus: EnumTypesSyncStatusCommonType;
    timeRemaining: number;
    progress: number;
    catalogsNum: number;
    actualCatalogsNum: number;
    rtpRecvType: EnumTypesRtpRecvTypeCommonType;
    rtpSendType: RtpSendTypeCommonType;
    sipTransProtocol: EnumTypesSipTransProtocolCommonType;
    isStateNotifyFromDomain: boolean;
    stateDuration: string;
    lastStateChangedTime: string;
    extension: any;
    needMapping: boolean;
    sipMappedAddress: string;
    mediaMappedAddress: string;
};

/**
 * 分页查询下级域（同步的详细信息）——请求参数类型定义
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetLowerDomainsReqType = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 分页查询下级域（同步的详细信息）——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetLowerDomainsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 添加下级域接口——请求参数类型定义
 * @headers X-version {string}
 * @params activeRegister {boolean} 是否主动注册
 * @params civilcode {string} 区域编码
 * @params gbId {string} 下级域的国标id （必填）
 * @params heartbeadCycle {number} 心跳周期
 * @params heartbeadTimeoutCount {number} 心跳超时次数
 * @params ip {string} 下级域的SIP信令IP地址 （必填）
 * @params manufacturer {number} 厂商，可为空
 * @params model {string} 型号，可为空
 * @params name {string} 下级域的名称 （必填）
 * @params needAuth {number} 是否需要认证
 * @params password {string} 认证密码
 * @params needMapping {boolean} 启用映射
 * @params sipMappedAddress {string} 信令映射地址
 * @params mediaMappedAddress {string} 流媒体映射地址
 * @params networkType {any} 对接网络类型，1：内网，2：公网默认内网
 * @params sipPort {number} 下级域的SIP信令端口号 （必填）
 * @params type {any} 用户代理类型，IPC:131 国标摄像头NVR:118  国标NVRPlatform(国标平台) :2Encoder:113  国标编码器Decoder:114 国标解码器VCE:300 非标服务视频
 * @params userName {string} 用户名,建议同gbid
 * @params rtpRecvType {EnumTypesRtpRecvTypeCommonType} 国标流媒体收流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params rtpSendType {RtpSendTypeCommonType} 国标流媒体向下级发流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params sipTransProtocol {EnumTypesSipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知,默认true
 * @params extension {any} 扩展字段
 */
export type AddLowerDomainReqType = {
    'X-version'?: string;
    activeRegister?: boolean;
    civilcode?: string;
    gbId: string;
    heartbeadCycle?: number;
    heartbeadTimeoutCount?: number;
    ip: string;
    manufacturer?: number;
    model?: string;
    name: string;
    needAuth?: number;
    password?: string;
    needMapping?: boolean;
    sipMappedAddress?: string;
    mediaMappedAddress?: string;
    networkType?: any;
    sipPort: number;
    type?: any;
    userName?: string;
    rtpRecvType?: EnumTypesRtpRecvTypeCommonType;
    rtpSendType?: RtpSendTypeCommonType;
    sipTransProtocol?: EnumTypesSipTransProtocolCommonType;
    isStateNotifyFromDomain?: boolean;
    extension?: any;
};

/**
 * 添加下级域接口——响应参数类型定义
 * @params activeRegister {boolean} 是否主动注册，对上级平台被动接受注册，填false；对下级平台，需主动向上级发起注册请求，填true
 * @params civilCode {string} 区域编码
 * @params gbId {string} 国标id
 * @params heartBeadCycle {number} 心跳周期
 * @params heartBeadTimeoutCount {number} 心跳超时次数
 * @params ip {string} 下级域ip地址
 * @params manufacturer {number} 厂商类型
 * @params model {string} 型号，可为空
 * @params name {string} 下级域名称
 * @params needAuth {number} 是否需要认证
 * @params networkType {number} 网络类型（1：内网，2：公网）
 * @params password {string} 认证密码
 * @params sipPort {number} 端口
 * @params status {number} 下级域状态1：设备离线2：设备在线
 * @params type {number} 用户代理类型，常见类型，IPC:131NVR:118Platform(国标平台):2Encoder:113Decoder:114
 * @params userName {string} 认证用户名
 * @params taskStatus {EnumTypesSyncStatusCommonType} 同步任务状态未开始 0进行中 1 同步完成 2应用中 3 应用完成 4
 * @params timeRemaining {number} 同步剩余时间，单位/秒
 * @params progress {number} 同步进度，百分比
 * @params catalogsNum {number} 信令同步目录数量值
 * @params actualCatalogsNum {number} 实际同步目录数量
 * @params rtpRecvType {EnumTypesRtpRecvTypeCommonType} 国标流媒体收流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params rtpSendType {RtpSendTypeCommonType} 国标流媒体向下级发流协议0:UDP1:TCP被动2:TCP主动默认0
 * @params sipTransProtocol {EnumTypesSipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知
 * @params stateDuration {string} 在线/离线时长
 * @params lastStateChangedTime {string} 最后一次状态变更时间
 * @params extension {any} 扩展字段
 * @params needMapping {boolean} 启用映射
 * @params sipMappedAddress {string} 信令映射地址
 * @params mediaMappedAddress {string} 流媒体映射地址
 */
export type AddLowerDomainResType = {
    activeRegister: boolean;
    civilCode: string;
    gbId: string;
    heartBeadCycle: number;
    heartBeadTimeoutCount: number;
    ip: string;
    manufacturer: number;
    model: string;
    name: string;
    needAuth: number;
    networkType: number;
    password: string;
    sipPort: number;
    status: number;
    type: number;
    userName: string;
    taskStatus: EnumTypesSyncStatusCommonType;
    timeRemaining: number;
    progress: number;
    catalogsNum: number;
    actualCatalogsNum: number;
    rtpRecvType: EnumTypesRtpRecvTypeCommonType;
    rtpSendType: RtpSendTypeCommonType;
    sipTransProtocol: EnumTypesSipTransProtocolCommonType;
    isStateNotifyFromDomain: boolean;
    stateDuration: string;
    lastStateChangedTime: string;
    extension: any;
    needMapping: boolean;
    sipMappedAddress: string;
    mediaMappedAddress: string;
};

/**
 * 获取未管理的下级域——请求参数类型定义
 * @headers X-version {string}
 */
export type GetUnusedLowerDomainsReqType = {
    'X-version'?: string;
};

/**
 * 获取未管理的下级域——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetUnusedLowerDomainsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 同步历史记录分页查询——请求参数类型定义
 * @params id {string} id （必填）
 * @params SyncType {number} 同步类型0-全量同步1-增量同步2-指定目录同步
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetLowerDomainsSyncHistoriesReqType = {
    id: string;
    SyncType?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 同步历史记录分页查询——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetLowerDomainsSyncHistoriesResType = {
    totalCount: number;
    records: any[];
};

/**
 * 批量删除国标下级域——请求参数类型定义
 * @headers X-version {string}
 * @params gbIds {any[]} 下级域Id
 */
export type BatchDeleteLowerDomainsReqType = {
    'X-version'?: string;
    gbIds?: any[];
};

/**
 * 清空下级域所有数据——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type ClearLowerDomainsReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 查询指定同步历史记录——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetSyncTaskHistoryByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 查询指定同步历史记录——响应参数类型定义
 * @params catalogsNum {number} 信令同步目录数量值
 * @params actualCatalogsNum {number} 实际同步目录数量
 * @params addNum {number} 添加数量
 * @params updateNum {number} 修改数量
 * @params deleteNum {number} 删除数量
 * @params conflictNum {number} 冲突数量
 * @params time {string} 同步耗时
 * @params offlineNum {number} 离线数量
 * @params onlineNum {number} 在线数量
 * @params cameraTotal {number} 监控总数
 * @params groupTotal {number} 监控组总数
 * @params groupId {string} 指定的目录
 * @params groupName {string} 目录名称
 * @params cameraAddNum {number} 监控添加总数
 * @params cameraUpdateNum {number} 监控修改总数
 * @params cameraConflictNum {number} 监控冲突总数
 * @params groupAddNum {number} 目录添加总数
 * @params groupUpdateNum {number} 目录修改总数
 * @params groupConflictNum {number} 目录冲突总数
 * @params groupDeleteNum {number} 目录未同步总数
 * @params cameraDeleteNum {number} 监控未同步总数
 * @params timeRemaining {number} 同步剩余时间，单位/秒
 * @params progress {number} 同步进度，百分比
 * @params taskId {string} 同步任务id
 * @params startTime {string} 同步任务开始时间
 * @params endTime {string} 同步任务结束时间
 * @params status {EnumTypesSyncStatusCommonType} 同步状态0-未开始1-同步中2-同步完成3-应用中4-应用完成
 * @params result {number} 同步结束，0为成功，其他为错误码
 * @params sipServerId {string} 同步上/下级Id
 * @params name {string} 名称
 * @params syncType {1 | 2} 同步类型：0-全量同步1-增量同步2-指定目录同步
 * @params hasConflictData {boolean} 是否有冲突数据
 */
export type GetSyncTaskHistoryByIdResType = {
    catalogsNum: number;
    actualCatalogsNum: number;
    addNum: number;
    updateNum: number;
    deleteNum: number;
    conflictNum: number;
    time: string;
    offlineNum: number;
    onlineNum: number;
    cameraTotal: number;
    groupTotal: number;
    groupId: string;
    groupName: string;
    cameraAddNum: number;
    cameraUpdateNum: number;
    cameraConflictNum: number;
    groupAddNum: number;
    groupUpdateNum: number;
    groupConflictNum: number;
    groupDeleteNum: number;
    cameraDeleteNum: number;
    timeRemaining: number;
    progress: number;
    taskId: string;
    startTime: string;
    endTime: string;
    status: EnumTypesSyncStatusCommonType;
    result: number;
    sipServerId: string;
    name: string;
    syncType: 1 | 2;
    hasConflictData: boolean;
};

/**
 * 同步记录数据多条件查询,传入id为同步任务的id——请求参数类型定义
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字
 * @params UpdateStatus {number} 变更状态
 * @params Type {number} 数据类型1-监控2-目录null-全部
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type SearchSyncTaskHistoryReqType = {
    id: string;
    Keyword?: string;
    UpdateStatus?: number;
    Type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 同步记录数据多条件查询,传入id为同步任务的id——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type SearchSyncTaskHistoryResType = {
    totalCount: number;
    records: any[];
};

/**
 * 查询过期监控与监控组——请求参数类型定义
 * @params id {string} id （必填）
 * @params Type {number} 类型，摄像头 0 组 1
 * @params StartTime {string} 开始时间
 * @params EndTime {string} 结束时间
 * @params Keyword {string} 关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetExpiredLowerDomainsReqType = {
    id: string;
    Type?: number;
    StartTime?: string;
    EndTime?: string;
    Keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 查询过期监控与监控组——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetExpiredLowerDomainsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 重新计算过期数据——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type UpdateExpiredLowerDomainsReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 删除过期监控与监控组——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params type {EnumTypesCommonType} 删除类型，0：批量删除，1：按时间删除，2：全部删除
 * @params records {any[]} 批量删除数据记录列表
 * @params timeRange {number} 删除近几天记录
 */
export type BatchDeleteExpiredLowerDomainsReqType = {
    id: string;
    'X-version'?: string;
    type?: EnumTypesCommonType;
    records?: any[];
    timeRange?: number;
};

/**
 * 解决同步冲突——请求参数类型定义
 * @params id {number} id （必填）
 * @headers X-version {string}
 * @params conflictType {number} 冲突的类型0-没有冲突1-组冲突2-经纬度冲突3-全都有
 */
export type ResolveLowerDomainsConflictReqType = {
    id: number;
    'X-version'?: string;
    conflictType?: number;
};

/**
 * 分页获取下级域状态变更记录——请求参数类型定义
 * @params id {string} id （必填）
 * @params Online {boolean} 是否在线 true：在线，false：离线
 * @params StartTime {string} 开始时间
 * @params EndTime {string} 结束时间
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetLowerDomainStateRecordsReqType = {
    id: string;
    Online?: boolean;
    StartTime?: string;
    EndTime?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 分页获取下级域状态变更记录——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetLowerDomainStateRecordsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 获取全部媒体服务——请求参数类型定义
 * @headers X-version {string}
 */
export type GetAllMediaServersReqType = {
    'X-version'?: string;
};

/**
 * 获取全部媒体服务——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetAllMediaServersResType = {
    totalCount: number;
    records: any[];
};

/**
 * 查询某个流媒体实时拉流记录——请求参数类型定义
 * @params MediaServerId {string} 流媒体服务ID
 * @params Keyword {string} 终端名称，流媒体名称
 * @params VideoEncoder {number} 视频编码0-h2641-h265默认null-全部
 * @params Resolution {number} 分辨率0-高清1-标清2-全高清3-超高清默认null-全部
 * @params BusinessName {string} 业务类型live:事件快报meetlive:会议直播rtp:监控默认null-全部
 * @params AudioFormat {number} 音频格式0-无1-G711A2-G711U3-AAC4-OPUS5-未知（其它）
 * @params Order {string} 排序字段，默认时间排序 默认：CreateTime
 * @params Desc {boolean} 是否升序，默认false - 降序
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetMediaSessionsV2ReqType = {
    MediaServerId?: string;
    Keyword?: string;
    VideoEncoder?: number;
    Resolution?: number;
    BusinessName?: string;
    AudioFormat?: number;
    Order?: string;
    Desc?: boolean;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 查询某个流媒体实时拉流记录——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetMediaSessionsV2ResType = {
    totalCount: number;
    records: any[];
};

/**
 * 结束拉流——请求参数类型定义
 * @headers X-version {string}
 * @params streamId {string} 流id （必填）
 * @params mediaServerId {string} 媒体流id （必填）
 */
export type StopMediaSessionsReqType = {
    'X-version'?: string;
    streamId: string;
    mediaServerId: string;
};

/**
 * 查询具体流id的实时拉流详情信息——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetMediaSessionsByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 查询具体流id的实时拉流详情信息——响应参数类型定义
 * @params description {string} 描述
 * @params terminalType {number} 发送数据设备类型-1-未知0：国标类型1：RTSP视频源2：onvif4：vce非标服务视频4：RTMP视频源5：webrtc视频流）
 * @params terminalIp {string} 视频源ip
 * @params terminalPort {number} 视频源端口
 * @params mediaReceiveIp {string} 流媒体接收IP
 * @params mediaReceivePort {number} 流媒体接收端口
 * @params receiveStreamType {number} 流媒体接收码流类型
 * @params receiveTransType {number} 流媒体接收协议类型（0：国标UDP，1：国标tcp-server，2：国标tcp主动）
 * @params sessionStatus {number} 链路状态（0：开始，1：执行，2：结束）
 * @params localSdpInfo {string} 针对国标拉流本地sdp消息
 * @params remoteSdpInfo {string} 针对国标拉流远程sdp消息
 * @params sdpDescription {string} sdp信息描述
 * @params fps {number} 视频的帧率
 * @params playUrl {any} 流播放地址
 * @params businessName {string} 业务类型 live:事件快报，aslive：app人员直播，meetlive：会议直播
 * @params bitRate {number} 实时码率
 * @params startTime {string} 开始拉流时间
 * @params deviceName {string} 设备名
 * @params deviceId {string} 设备名
 * @params lossPackets {number} 丢包数
 * @params receivedPackets {number} 收包总数
 * @params cId {string} 链路ID
 * @params videoEncoder {EnumTypesVideoEncoderCommonType} 视频的编码方式（0：H264，1：H265）
 * @params audioFormat {EnumTypesAudioFormatCommonType} 音频的编码方式（0：无，1：G711A，2：G711U，3：AAC,4：OPUS,5：未知）
 * @params totalReaderCount {number} 观看本视频流的总人数
 * @params mediaServerId {string} 该视频流的媒体id
 * @params mediaServerName {string} 该视频流的媒体名称
 * @params resolution {EnumTypesResolutionCommonType} 分辨率
 * @params clients {MediaStreamClientCommonType[]} 客户端拉流信息
 * @params terminal {string} 终端
 * @params stream {string} 流id
 */
export type GetMediaSessionsByIdResType = {
    description: string;
    terminalType: number;
    terminalIp: string;
    terminalPort: number;
    mediaReceiveIp: string;
    mediaReceivePort: number;
    receiveStreamType: number;
    receiveTransType: number;
    sessionStatus: number;
    localSdpInfo: string;
    remoteSdpInfo: string;
    sdpDescription: string;
    fps: number;
    playUrl: any;
    businessName: string;
    bitRate: number;
    startTime: string;
    deviceName: string;
    deviceId: string;
    lossPackets: number;
    receivedPackets: number;
    cId: string;
    videoEncoder: EnumTypesVideoEncoderCommonType;
    audioFormat: EnumTypesAudioFormatCommonType;
    totalReaderCount: number;
    mediaServerId: string;
    mediaServerName: string;
    resolution: EnumTypesResolutionCommonType;
    clients: MediaStreamClientCommonType[];
    terminal: string;
    stream: string;
};

/**
 * 实时拉流记录统计——请求参数类型定义
 * @headers X-version {string}
 */
export type GetMediaSessionStatisticsReqType = {
    'X-version'?: string;
};

/**
 * 实时拉流记录统计——响应参数类型定义
 * @params appLiveCount {number} 人员直播总数
 * @params cameraCount {number} 监控总数
 * @params meetLiveCount {number} 会议直播总数
 * @params onlinePeopleCount {number} 在线人员总数
 * @params pullStreamCount {number} 拉流总数
 * @params eventReportCount {number} 事件快报总数
 */
export type GetMediaSessionStatisticsResType = {
    appLiveCount: number;
    cameraCount: number;
    meetLiveCount: number;
    onlinePeopleCount: number;
    pullStreamCount: number;
    eventReportCount: number;
};

/**
 * 流录制接口——请求参数类型定义
 * @headers X-version {string}
 * @params streamId {string} 会议流id （必填）
 * @params name {string} 名称
 * @params associationId {string} 关联资源id
 */
export type StartSteamRecordingReqType = {
    'X-version'?: string;
    streamId: string;
    name?: string;
    associationId?: string;
};

/**
 * 流录制接口——响应参数类型定义
 * @params id {string} 记录id
 * @params streamId {string} 流id
 * @params startTime {string} 开始时间
 * @params endTime {string} 开始时间
 * @params userId {string} 用户id
 * @params files {any[]} 文件id集合
 */
export type StartSteamRecordingResType = {
    id: string;
    streamId: string;
    startTime: string;
    endTime: string;
    userId: string;
    files: any[];
};

/**
 * 获取当前的流的录制信息状态——请求参数类型定义
 * @params StreamId {string} 关联id （必填）
 * @headers X-version {string}
 */
export type GetSteamRecordingInfoReqType = {
    StreamId: string;
    'X-version'?: string;
};

/**
 * 获取当前的流的录制信息状态——响应参数类型定义
 * @params id {number} 唯一标识
 * @params streamId {string} 流id
 * @params associationId {string} 会议号
 * @params createTime {string} 录制开始时间
 * @params status {CameraTerminalTypeCommonType} 录制状态0-录制中1-暂停2-结束3-未开始
 * @params createTimeOffset {number} 录制相对时间(单位秒)
 */
export type GetSteamRecordingInfoResType = {
    id: number;
    streamId: string;
    associationId: string;
    createTime: string;
    status: CameraTerminalTypeCommonType;
    createTimeOffset: number;
};

/**
 * 录制状态修改——请求参数类型定义
 * @params streamId {string} streamId （必填）
 * @headers X-version {string}
 * @params status {EnumTypesCommonType} 状态0-进行中1-暂停2-结束 （必填）
 */
export type EditSteamRecordingStatusReqType = {
    streamId: string;
    'X-version'?: string;
    status: EnumTypesCommonType;
};

/**
 * 删除指定id的记录——请求参数类型定义
 * @params id {number} id （必填）
 * @headers X-version {string}
 */
export type DeleteRecordingReqType = {
    id: number;
    'X-version'?: string;
};

/**
 * 批量删除——请求参数类型定义
 * @headers X-version {string}
 * @params deleteOperationType {0  | 1} 删除操作类型0-指定资源删除1-指定时间删除
 * @params ids {any[]} 需要删除的标识集合 （必填）
 * @params time {number} 需要删除从当前时间开始前Time天的数据
 */
export type BatchDeleteRecordingReqType = {
    'X-version'?: string;
    deleteOperationType?: 0 | 1;
    ids: any[];
    time?: number;
};

/**
 * 搜索录像截图操作记录以及文件信息——请求参数类型定义
 * @params KeyWord {string} 关键字搜索
 * @params CameraId {string} 监控id当业务类型时lowerrtp时此属性是必填的，不然无法查询到对应设备的录像记录
 * @params FileEntityType {number} 文件类型2-Video1-Picture为null时查全部类型
 * @params StartTime {string} 开始时间
 * @params EndTime {string} 结束时间
 * @params UserId {string} 用户
 * @params IsUnderway {boolean} 监控录制或截图正在进行中的
 * @params FileRecordIds {any[]} 文件记录id
 * @params PlatformId {string} 平台 ID
 * @params AppName {string} 业务类型rtp-监控meetlive-视频会议subordinatertp-下级监控
 * @params AssociationId {string} 关联id
 * @params VideoPictureResult {number} 是否失败0:返回全部1:返回成功的数据2:返回失败的数据默认为1
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type SearchRecordingReqType = {
    KeyWord?: string;
    CameraId?: string;
    FileEntityType?: number;
    StartTime?: string;
    EndTime?: string;
    UserId?: string;
    IsUnderway?: boolean;
    FileRecordIds?: any[];
    PlatformId?: string;
    AppName?: string;
    AssociationId?: string;
    VideoPictureResult?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 搜索录像截图操作记录以及文件信息——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type SearchRecordingResType = {
    totalCount: number;
    records: any[];
};

/**
 * 获取信令——请求参数类型定义
 * @headers X-version {string}
 */
export type GetSignalsReqType = {
    'X-version'?: string;
};

/**
 * 获取信令——响应参数类型定义
 * @params isCivilCodeForParent {number} 行政区划编码是否从父目录，0：使用parentId，1：使用civilcode
 * @params isServerIpFromConfigFile {number} 本机服务ip是否从配置文件读取0:不从配置文件,1:从配置文件获取
 * @params dbHost {string} 数据库ip
 * @params dbPassword {string} 数据库密码
 * @params dbPort {number} 数据库端口
 * @params dbSchema {string} 数据库名称
 * @params dbUserName {string} 数据库用户名
 * @params gbDeviceType {number} 设备类型
 * @params gbHeartbeatInterval {number} 心跳周期，单位秒
 * @params gbHeartbeatTimeoutTimes {number} 最大心跳超时次数
 * @params gbPassword {string} 密码
 * @params gbServerId {string} 服务的设备ID，国标标识
 * @params gbServerIp {string} 服务地址
 * @params gbServerPort {number} 服务端口
 * @params httpPort {number} http协议端口
 * @params isAuth {number} 是否需要认证
 * @params localCivilCode {string} 本地行政区划编码
 * @params sipProtocolTransportType {string} sip协议传输类型(udp或tcp，不区分大小写，默认udp)
 * @params threadPoolSize {number} 线程池的数目，取值范围[16，100]
 * @params websocketPort {number} websocket端口号
 */
export type GetSignalsResType = {
    isCivilCodeForParent: number;
    isServerIpFromConfigFile: number;
    dbHost: string;
    dbPassword: string;
    dbPort: number;
    dbSchema: string;
    dbUserName: string;
    gbDeviceType: number;
    gbHeartbeatInterval: number;
    gbHeartbeatTimeoutTimes: number;
    gbPassword: string;
    gbServerId: string;
    gbServerIp: string;
    gbServerPort: number;
    httpPort: number;
    isAuth: number;
    localCivilCode: string;
    sipProtocolTransportType: string;
    threadPoolSize: number;
    websocketPort: number;
};

/**
 * 修改信令——请求参数类型定义
 * @headers X-version {string}
 * @params gbServerId {string} 服务的设备ID，国标标识
 * @params gbServerIp {string} 服务地址
 * @params gbServerPort {number} 服务端口
 * @params sipProtocolTransportType {string} sip协议传输类型(udp或tcp，不区分大小写，默认udp)
 */
export type EditSignalsReqType = {
    'X-version'?: string;
    gbServerId?: string;
    gbServerIp?: string;
    gbServerPort?: number;
    sipProtocolTransportType?: string;
};

/**
 * 统计监控总数（包括所有监控总数、质量优、良、差、故障的总数）——请求参数类型定义
 * @headers X-version {string}
 */
export type GetCamerasReqType = {
    'X-version'?: string;
};

/**
 * 统计监控总数（包括所有监控总数、质量优、良、差、故障的总数）——响应参数类型定义
 * @params amount {number} 监控总数
 * @params excellent {number} 质量优的监控总数
 * @params good {number} 质量良的监控总数
 * @params bad {number} 质量差的监控总数
 * @params fault {number} 故障的监控总数
 * @params online {number} 监控在线总数
 */
export type GetCamerasResType = {
    amount: number;
    excellent: number;
    good: number;
    bad: number;
    fault: number;
    online: number;
};

/**
 * 统计故障监控的总数（包括故障类型统计）——请求参数类型定义
 * @headers X-version {string}
 */
export type GetFaultCamerasReqType = {
    'X-version'?: string;
};

/**
 * 统计故障监控的总数（包括故障类型统计）——响应参数类型定义
 * @params amount {number} 故障监控总数
 * @params noFlow {number} 无码流故障监控总数
 * @params noResponse {number} 下级域无响应故障监控总数
 * @params internalError {number} 国标内部错误
 */
export type GetFaultCamerasResType = {
    amount: number;
    noFlow: number;
    noResponse: number;
    internalError: number;
};

/**
 * 统计质量差的监控总数（包括质量差类型统计）——请求参数类型定义
 * @headers X-version {string}
 */
export type GetBadCamerasReqType = {
    'X-version'?: string;
};

/**
 * 统计质量差的监控总数（包括质量差类型统计）——响应参数类型定义
 * @params amount {number} 质量差的监控总数
 * @params imageQuality {number} 图像质量监控总数
 * @params brightness {number} 亮度监控总数
 * @params color {number} 颜色监控总数
 * @params contrast {number} 对比度监控总数
 * @params blur {number} 模糊
 * @params noiseInterference {number} 噪声干扰
 * @params scrolling {number} 滚屏
 * @params shade {number} 遮挡
 * @params screenFreezing {number} 画面冻结
 * @params snr {number} 信噪比
 * @params psnr {number} 峰值信噪比
 * @params imageDistortion {number} 图像畸变
 * @params blackScreen {number} 黑屏
 * @params specialFlowerScreen {number} 特殊花屏
 */
export type GetBadCamerasResType = {
    amount: number;
    imageQuality: number;
    brightness: number;
    color: number;
    contrast: number;
    blur: number;
    noiseInterference: number;
    scrolling: number;
    shade: number;
    screenFreezing: number;
    snr: number;
    psnr: number;
    imageDistortion: number;
    blackScreen: number;
    specialFlowerScreen: number;
};

/**
 * 统计不同分辨率的监控总数——请求参数类型定义
 * @headers X-version {string}
 */
export type GetCamerasResolutionReqType = {
    'X-version'?: string;
};

/**
 * 统计不同分辨率的监控总数——响应参数类型定义
 * @params amount {number} 监控总数
 * @params hd {number} 高清
 * @params fullHd {number} 全高清
 * @params sd {number} 标清
 * @params uhd {number} 超高清
 */
export type GetCamerasResolutionResType = {
    amount: number;
    hd: number;
    fullHd: number;
    sd: number;
    uhd: number;
};

/**
 * 统计巡检历史走势——请求参数类型定义
 * @params JobId {string} jobid
 * @params BeginTime {string} 开始时间 （必填）
 * @params EndTime {string} 结束时间 （必填）
 * @headers X-version {string}
 */
export type GetDetectionTasksHistoryReqType = {
    JobId?: string;
    BeginTime: string;
    EndTime: string;
    'X-version'?: string;
};

/**
 * 统计巡检历史走势——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetDetectionTasksHistoryResType = {
    totalCount: number;
    records: any[];
};

/**
 * 统计质量差的监控总数（包括质量差类型统计）——请求参数类型定义
 * @params jobId {string} jobId （必填）
 * @headers X-version {string}
 */
export type GetCamerasByJobIdReqType = {
    jobId: string;
    'X-version'?: string;
};

/**
 * 统计质量差的监控总数（包括质量差类型统计）——响应参数类型定义
 * @params amount {number} 监控总数
 * @params excellent {number} 质量优的监控总数
 * @params good {number} 质量良的监控总数
 * @params bad {number} 质量差的监控总数
 * @params fault {number} 故障的监控总数
 * @params online {number} 监控在线总数
 */
export type GetCamerasByJobIdResType = {
    amount: number;
    excellent: number;
    good: number;
    bad: number;
    fault: number;
    online: number;
};

/**
 * 统计质量差的监控总数（包括质量差类型统计）——请求参数类型定义
 * @params jobId {string} jobId （必填）
 * @headers X-version {string}
 */
export type GetBadCamerasByJobIdReqType = {
    jobId: string;
    'X-version'?: string;
};

/**
 * 统计质量差的监控总数（包括质量差类型统计）——响应参数类型定义
 * @params amount {number} 质量差的监控总数
 * @params imageQuality {number} 图像质量监控总数
 * @params brightness {number} 亮度监控总数
 * @params color {number} 颜色监控总数
 * @params contrast {number} 对比度监控总数
 * @params blur {number} 模糊
 * @params noiseInterference {number} 噪声干扰
 * @params scrolling {number} 滚屏
 * @params shade {number} 遮挡
 * @params screenFreezing {number} 画面冻结
 * @params snr {number} 信噪比
 * @params psnr {number} 峰值信噪比
 * @params imageDistortion {number} 图像畸变
 * @params blackScreen {number} 黑屏
 * @params specialFlowerScreen {number} 特殊花屏
 */
export type GetBadCamerasByJobIdResType = {
    amount: number;
    imageQuality: number;
    brightness: number;
    color: number;
    contrast: number;
    blur: number;
    noiseInterference: number;
    scrolling: number;
    shade: number;
    screenFreezing: number;
    snr: number;
    psnr: number;
    imageDistortion: number;
    blackScreen: number;
    specialFlowerScreen: number;
};

/**
 * 统计巡检详情不同故障类型监控数量——请求参数类型定义
 * @params jobId {string} jobId （必填）
 * @headers X-version {string}
 */
export type GetFaultCamerasByJobIdReqType = {
    jobId: string;
    'X-version'?: string;
};

/**
 * 统计巡检详情不同故障类型监控数量——响应参数类型定义
 * @params amount {number} 故障监控总数
 * @params noFlow {number} 无码流故障监控总数
 * @params noResponse {number} 下级域无响应故障监控总数
 * @params internalError {number} 国标内部错误
 */
export type GetFaultCamerasByJobIdResType = {
    amount: number;
    noFlow: number;
    noResponse: number;
    internalError: number;
};

/**
 * 该接口提供收藏夹总数(包括子收藏夹)——请求参数类型定义
 * @headers X-version {string}
 */
export type GetFavoriteCameraGroupTotalReqType = {
    'X-version'?: string;
};

/**
 * 该接口提供收藏夹总数(包括子收藏夹)——响应参数类型定义
 * @params favoriteCameraGroupCount {number} 收藏夹总数
 */
export type GetFavoriteCameraGroupTotalResType = {
    favoriteCameraGroupCount: number;
};

/**
 * 查询指定job的巡检走势记录——请求参数类型定义
 * @params jobId {string} jobId （必填）
 * @params Limit {number} 查询返回的记录数量
 * @headers X-version {string}
 */
export type GetDetectionHistoryByJobIdReqType = {
    jobId: string;
    Limit?: number;
    'X-version'?: string;
};

/**
 * 查询指定job的巡检走势记录——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetDetectionHistoryByJobIdResType = {
    totalCount: number;
    records: any[];
};

/**
 * 根据行政区域前缀获取监控统计数据——请求参数类型定义
 * @headers X-version {string}
 * @params prefixAreaCodes {any[]} 行政区域集合 （必填）
 */
export type VfsGetCameraStatisticsByAreaReqType = {
    'X-version'?: string;
    prefixAreaCodes: any[];
};

/**
 * 根据行政区域前缀获取监控统计数据——响应参数类型定义
 * @params prefixAreaCode {string} 行政区域码
 * @params count {number} 监控总数
 */
export type VfsGetCameraStatisticsByAreaResType = {
    prefixAreaCode: string;
    count: number;
};

/**
 * 创建监控保活作业——请求参数类型定义
 * @headers X-version {string}
 * @params jobId {string} 定时任务id （必填）
 * @params type {0 | 1} 类型0-监控1-标签
 * @params taskName {string} 任务名称 （必填）
 * @params businessId {string} 业务对象Id监控Id或标签Id （必填）
 * @params owners {OwnerCommonType[]} 负责人
 * @params notificationType {number} 通知类型 （必填）
 */
export type AddStreamKeepAliveJobReqType = {
    'X-version'?: string;
    jobId: string;
    type?: 0 | 1;
    taskName: string;
    businessId: string;
    owners?: OwnerCommonType[];
    notificationType: number;
};

/**
 * 创建监控保活作业——响应参数类型定义
 * @params jobId {string} 定时任务Id
 * @params status {EnumTypesCommonType} 状态0-未运行1-运行中2-已结束
 * @params businessName {string} 对象名称
 * @params businessId {string} 业务对象Id
 * @params cameraTotal {number} 监控数量
 * @params type {0 | 1} 类型0-监控1-标签
 * @params createTime {string} 创建时间
 * @params modifyTime {string} 修改时间
 * @params owners {OwnerCommonType[]} 负责人
 * @params notificationType {number} 通知类型
 * @params retryTotal {number} 重试总数
 * @params successesTotal {number} 保活成功监控总数
 * @params failTotal {number} 保活失败监控总数
 * @params executionsTotal {number} 执行总数
 * @params taskName {string} 任务名称
 */
export type AddStreamKeepAliveJobResType = {
    jobId: string;
    status: EnumTypesCommonType;
    businessName: string;
    businessId: string;
    cameraTotal: number;
    type: 0 | 1;
    createTime: string;
    modifyTime: string;
    owners: OwnerCommonType[];
    notificationType: number;
    retryTotal: number;
    successesTotal: number;
    failTotal: number;
    executionsTotal: number;
    taskName: string;
};

/**
 * 按条件查询保活作业列表——请求参数类型定义
 * @params JobIds {any[]} 作业Id集合
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type VfsGetStreamKeepAliveJobsReqType = {
    JobIds?: any[];
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 按条件查询保活作业列表——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type VfsGetStreamKeepAliveJobsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 获取指定保活作业——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type VfsGetStreamKeepAliveJobByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取指定保活作业——响应参数类型定义
 * @params jobId {string} 定时任务Id
 * @params status {EnumTypesCommonType} 状态0-未运行1-运行中2-已结束
 * @params businessName {string} 对象名称
 * @params businessId {string} 业务对象Id
 * @params cameraTotal {number} 监控数量
 * @params type {0 | 1} 类型0-监控1-标签
 * @params createTime {string} 创建时间
 * @params modifyTime {string} 修改时间
 * @params owners {OwnerCommonType[]} 负责人
 * @params notificationType {number} 通知类型
 * @params retryTotal {number} 重试总数
 * @params successesTotal {number} 保活成功监控总数
 * @params failTotal {number} 保活失败监控总数
 * @params executionsTotal {number} 执行总数
 * @params taskName {string} 任务名称
 */
export type VfsGetStreamKeepAliveJobByIdResType = {
    jobId: string;
    status: EnumTypesCommonType;
    businessName: string;
    businessId: string;
    cameraTotal: number;
    type: 0 | 1;
    createTime: string;
    modifyTime: string;
    owners: OwnerCommonType[];
    notificationType: number;
    retryTotal: number;
    successesTotal: number;
    failTotal: number;
    executionsTotal: number;
    taskName: string;
};

/**
 * 删除保活作业——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type VfsDeleteStreamKeepAliveJobReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 修改保活作业——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params businessId {string} 保活的业务对象Id监控组Id或标签Id （必填）
 * @params type {0 | 1} 保活类型0-监控组1-标签
 * @params taskName {string} 任务名称 （必填）
 * @params owners {OwnerCommonType[]} 负责人
 * @params notificationType {number} 通知类型 （必填）
 */
export type VfsEditStreamKeepAliveJobReqType = {
    id: string;
    'X-version'?: string;
    businessId: string;
    type?: 0 | 1;
    taskName: string;
    owners?: OwnerCommonType[];
    notificationType: number;
};

/**
 * 修改保活作业的状态——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params status {EnumTypesCommonType} 保活任务状态0-未开始1-进行中2-已结束
 */
export type EditStreamKeepAliveJobStatusReqType = {
    id: string;
    'X-version'?: string;
    status?: EnumTypesCommonType;
};

/**
 * 获取保活作业的执行任务——请求参数类型定义
 * @params id {string} id （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetStreamKeepAliveTasksReqType = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取保活作业的执行任务——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetStreamKeepAliveTasksResType = {
    totalCount: number;
    records: any[];
};

/**
 * 获取保活作业指定任务的保活记录——请求参数类型定义
 * @params id {string} id （必填）
 * @params TaskID {string} 保活作业下的任务ID （必填）
 * @params CameraName {string} 监控名称
 * @params Result {boolean} 状态，0-保活失败1-保活成功
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetStreamKeepAliveRecordsReqType = {
    id: string;
    TaskID: string;
    CameraName?: string;
    Result?: boolean;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取保活作业指定任务的保活记录——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetStreamKeepAliveRecordsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 停止拉流——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type StopCameraByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 流保活接口，测试用接口——请求参数类型定义
 * @params jobId {string} jobId （必填）
 * @headers X-version {string}
 * @params taskId {string} 任务Id （必填）
 * @params cameraGroupId {string} 需要保活的监控组 （必填）
 * @params keepAliveTime {number} 保活的最大时长，单位分钟 （必填）
 */
export type StreamKeepAliveJobsReqType = {
    jobId: string;
    'X-version'?: string;
    taskId: string;
    cameraGroupId: string;
    keepAliveTime: number;
};

/**
 * 开始同步自动化测试接口——请求参数类型定义
 * @params id {string} id
 * @headers X-version {string}
 */
export type SyncTestsReqType = {
    id?: string;
    'X-version'?: string;
};

/**
 * 推送下级同步数据——请求参数类型定义
 * @headers X-version {string}
 * @params cmdType {string} 命令类型
 * @params taskId {string} 同步任务Id
 * @params sumNum {string} 信令同步总数
 * @params sn {string} SN
 * @params deviceId {string} 下级Id
 * @params deviceList {any[]} 设备列表
 */
export type SyncCatalogReqType = {
    'X-version'?: string;
    cmdType?: string;
    taskId?: string;
    sumNum?: string;
    sn?: string;
    deviceId?: string;
    deviceList?: any[];
};

/**
 * 推送下级同步数据——请求参数类型定义
 * @headers X-version {string}
 * @params cmdType {string} 命令类型
 * @params taskId {string} 同步任务Id
 * @params sumNum {string} 信令同步总数
 * @params sn {string} SN
 * @params deviceId {string} 下级Id
 * @params deviceList {any[]} 设备列表
 */
export type IncrementSyncCatalogReqType = {
    'X-version'?: string;
    cmdType?: string;
    taskId?: string;
    sumNum?: string;
    sn?: string;
    deviceId?: string;
    deviceList?: any[];
};

/**
 * 添加上级域接口——请求参数类型定义
 * @headers X-version {string}
 * @params upperId {string} 上级域标识 （必填）
 * @params name {string} 名称 （必填）
 * @params ip {string} Ip地址 （必填）
 * @params port {number} 端口 （必填）
 * @params sipTransProtocol {EnumTypesSipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params status {EnumTypesSipServiceStatusCommonType} 状态：1-离线，2-在线
 * @params isAuth {boolean} 是否注册认证,false:不认证;true:认证
 * @params username {string} 注册认证账号
 * @params password {string} 注册认证密码
 * @params heartbeatCycle {number} 心跳周期,单位:秒
 * @params heartbeatTimeoutCount {number} 心跳超时最大次数
 * @params isPublicNetwork {1 | 2} 是否公网对接,1:不用公网对接;2:公网对接
 * @params sendCatalogTransProtocol {EnumTypesSipTransProtocolCommonType} 目录发送传输协议类型,0:UDP;1:TCP
 * @params sendCatalogOnceCount {number} 一次发送目录条数,范围:1-50,仅sendCatalogTransProtocol为TCP时有效
 * @params roleId {string} 服务的角色Id
 * @params isRepeat {boolean} 是否支持重复数据上报,false不支持，true支持，默认不支持
 * @params isExpired {boolean} 是否同步过期监控，false-否，true-是，默认否
 * @params fullSyncRetainCount {number} 全量同步保留的记录次数
 * @params dirSyncRetainCount {number} 指定目录同步保留的记录次数
 * @params incrementSyncRetainCount {number} 增量同步保留的记录次数
 * @params isUseDbSync {boolean} 是否使用数据库同步
 * @params isNeedPushFromDomain {boolean} 下级数据推送是否需要推送给上级
 * @params dbIp {string} 上级数据库Ip
 * @params dbPort {number} 上级数据库端口
 * @params dbName {string} 上级数据库名称
 * @params dbUser {string} 上级数据库用户名
 * @params dbPassword {string} 上级数据库密码
 * @params dbTableName {string} 上级数据库表名称
 * @params dbIncrementTableName {string} 上级增量同步数据库表名称
 */
export type AddUpperDomainReqType = {
    'X-version'?: string;
    upperId: string;
    name: string;
    ip: string;
    port: number;
    sipTransProtocol?: EnumTypesSipTransProtocolCommonType;
    status?: EnumTypesSipServiceStatusCommonType;
    isAuth?: boolean;
    username?: string;
    password?: string;
    heartbeatCycle?: number;
    heartbeatTimeoutCount?: number;
    isPublicNetwork?: 1 | 2;
    sendCatalogTransProtocol?: EnumTypesSipTransProtocolCommonType;
    sendCatalogOnceCount?: number;
    roleId?: string;
    isRepeat?: boolean;
    isExpired?: boolean;
    fullSyncRetainCount?: number;
    dirSyncRetainCount?: number;
    incrementSyncRetainCount?: number;
    isUseDbSync?: boolean;
    isNeedPushFromDomain?: boolean;
    dbIp?: string;
    dbPort?: number;
    dbName?: string;
    dbUser?: string;
    dbPassword?: string;
    dbTableName?: string;
    dbIncrementTableName?: string;
};

/**
 * 添加上级域接口——响应参数类型定义
 * @params upperId {string} 上级域标识
 * @params name {string} 名称
 * @params ip {string} Ip地址
 * @params port {number} 端口
 * @params sipTransProtocol {EnumTypesSipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params status {EnumTypesSipServiceStatusCommonType} 状态：1-离线，2-在线
 * @params isAuth {boolean} 是否注册认证,0:不认证;1:认证
 * @params username {string} 注册认证账号
 * @params password {string} 注册认证密码
 * @params heartbeatCycle {number} 心跳周期,单位:秒
 * @params heartbeatTimeoutCount {number} 心跳超时最大次数
 * @params isPublicNetwork {1 | 2} 是否公网对接,1:不用公网对接;2:公网对接
 * @params sendCatalogTransProtocol {EnumTypesSipTransProtocolCommonType} 目录发送传输协议类型,0:UDP;1:TCP
 * @params sendCatalogOnceCount {number} 一次发送目录条数,范围:1-50,仅sendCatalogTransProtocol为TCP时有效
 * @params roleId {string} 服务的角色Id
 * @params roleName {string} 角色名称
 * @params taskStatus {EnumTypesSyncStatusCommonType} 任务状态：0-暂未同步，1-同步中，2-已完成
 * @params isRepeat {boolean} 是否支持重复数据上报,false不支持，true支持
 * @params isExpired {boolean} 是否同步过期监控，false-否，true-是，默认否
 * @params result {number} 同步结果0 成功其他都是失败错误码
 * @params stateDuration {string} 状态在/离线时长
 * @params lastStateChangedTime {string} 最后一次状态变更时间
 * @params fullSyncRetainCount {number} 全量同步保留的记录次数
 * @params dirSyncRetainCount {number} 指定目录同步保留的记录次数
 * @params isUseDbSync {boolean} 是否使用数据库同步
 * @params isNeedPushFromDomain {boolean} 下级数据推送是否需要推送给上级
 * @params dbIp {string} 上级数据库Ip
 * @params dbPort {number} 上级数据库端口
 * @params dbName {string} 上级数据库名称
 * @params dbUser {string} 上级数据库用户名
 * @params dbPassword {string} 上级数据库密码
 * @params dbTableName {string} 上级数据库表名称
 * @params dbIncrementTableName {string} 上级增量同步数据库表名称
 * @params lastSyncActualNum {number} 最后一次实际同步数量
 * @params lastSyncCatalogsNum {number} 最后一次同步总数量
 * @params timeRemaining {number} 同步剩余时间，单位/秒
 * @params progress {number} 同步进度，百分比
 */
export type AddUpperDomainResType = {
    upperId: string;
    name: string;
    ip: string;
    port: number;
    sipTransProtocol: EnumTypesSipTransProtocolCommonType;
    status: EnumTypesSipServiceStatusCommonType;
    isAuth: boolean;
    username: string;
    password: string;
    heartbeatCycle: number;
    heartbeatTimeoutCount: number;
    isPublicNetwork: 1 | 2;
    sendCatalogTransProtocol: EnumTypesSipTransProtocolCommonType;
    sendCatalogOnceCount: number;
    roleId: string;
    roleName: string;
    taskStatus: EnumTypesSyncStatusCommonType;
    isRepeat: boolean;
    isExpired: boolean;
    result: number;
    stateDuration: string;
    lastStateChangedTime: string;
    fullSyncRetainCount: number;
    dirSyncRetainCount: number;
    isUseDbSync: boolean;
    isNeedPushFromDomain: boolean;
    dbIp: string;
    dbPort: number;
    dbName: string;
    dbUser: string;
    dbPassword: string;
    dbTableName: string;
    dbIncrementTableName: string;
    lastSyncActualNum: number;
    lastSyncCatalogsNum: number;
    timeRemaining: number;
    progress: number;
};

/**
 * 分页查询上级域——请求参数类型定义
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetUpperDomainsReqType = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 分页查询上级域——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetUpperDomainsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 修改国标上级域——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 名称 （必填）
 * @params ip {string} Ip地址 （必填）
 * @params port {number} 端口 （必填）
 * @params sipTransProtocol {EnumTypesSipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params status {EnumTypesSipServiceStatusCommonType} 状态：1-离线，2-在线
 * @params isAuth {boolean} 是否注册认证,false:不认证;true:认证
 * @params username {string} 注册认证账号
 * @params password {string} 注册认证密码
 * @params heartbeatCycle {number} 心跳周期,单位:秒
 * @params heartbeatTimeoutCount {number} 心跳超时最大次数
 * @params isPublicNetwork {1 | 2} 是否公网对接,1:不用公网对接;2:公网对接
 * @params sendCatalogTransProtocol {EnumTypesSipTransProtocolCommonType} 目录发送传输协议类型,0:UDP;1:TCP
 * @params sendCatalogOnceCount {number} 一次发送目录条数,范围:1-50,仅sendCatalogTransProtocol为TCP时有效
 * @params roleId {string} 服务的角色Id
 * @params isRepeat {boolean} 是否支持重复数据上报,false不支持，true支持，默认不支持
 * @params isExpired {boolean} 是否同步过期监控，false-否，true-是，默认否
 * @params syncRecordSavedCount {number} 保留同步记录次数
 * @params fullSyncRetainCount {number} 全量同步保留的记录次数
 * @params dirSyncRetainCount {number} 指定目录同步保留的记录次数
 * @params incrementSyncRetainCount {number} 增量同步保留的记录次数
 * @params isUseDbSync {boolean} 是否使用数据库同步
 * @params isNeedPushFromDomain {boolean} 下级数据推送是否需要推送给上级
 * @params dbIp {string} 上级数据库Ip
 * @params dbPort {number} 上级数据库端口
 * @params dbName {string} 上级数据库名称
 * @params dbUser {string} 上级数据库用户名
 * @params dbPassword {string} 上级数据库密码
 * @params dbTableName {string} 上级数据库表名称
 * @params dbIncrementTableName {string} 上级增量同步数据库表名称
 */
export type EditUpperDomainReqType = {
    id: string;
    'X-version'?: string;
    name: string;
    ip: string;
    port: number;
    sipTransProtocol?: EnumTypesSipTransProtocolCommonType;
    status?: EnumTypesSipServiceStatusCommonType;
    isAuth?: boolean;
    username?: string;
    password?: string;
    heartbeatCycle?: number;
    heartbeatTimeoutCount?: number;
    isPublicNetwork?: 1 | 2;
    sendCatalogTransProtocol?: EnumTypesSipTransProtocolCommonType;
    sendCatalogOnceCount?: number;
    roleId?: string;
    isRepeat?: boolean;
    isExpired?: boolean;
    syncRecordSavedCount?: number;
    fullSyncRetainCount?: number;
    dirSyncRetainCount?: number;
    incrementSyncRetainCount?: number;
    isUseDbSync?: boolean;
    isNeedPushFromDomain?: boolean;
    dbIp?: string;
    dbPort?: number;
    dbName?: string;
    dbUser?: string;
    dbPassword?: string;
    dbTableName?: string;
    dbIncrementTableName?: string;
};

/**
 * 删除上级域——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteUpperDomainReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 查询上级域详情——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetUpperDomainByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 查询上级域详情——响应参数类型定义
 * @params lastReportTime {string} 最后一次上报完成时间
 * @params upperId {string} 上级域标识
 * @params name {string} 名称
 * @params ip {string} Ip地址
 * @params port {number} 端口
 * @params sipTransProtocol {EnumTypesSipTransProtocolCommonType} SIP传输协议类型0:UDP1:TCP默认UDP
 * @params status {EnumTypesSipServiceStatusCommonType} 状态：1-离线，2-在线
 * @params isAuth {boolean} 是否注册认证,0:不认证;1:认证
 * @params username {string} 注册认证账号
 * @params password {string} 注册认证密码
 * @params heartbeatCycle {number} 心跳周期,单位:秒
 * @params heartbeatTimeoutCount {number} 心跳超时最大次数
 * @params isPublicNetwork {1 | 2} 是否公网对接,1:不用公网对接;2:公网对接
 * @params sendCatalogTransProtocol {EnumTypesSipTransProtocolCommonType} 目录发送传输协议类型,0:UDP;1:TCP
 * @params sendCatalogOnceCount {number} 一次发送目录条数,范围:1-50,仅sendCatalogTransProtocol为TCP时有效
 * @params roleId {string} 服务的角色Id
 * @params roleName {string} 角色名称
 * @params taskStatus {EnumTypesSyncStatusCommonType} 任务状态：0-暂未同步，1-同步中，2-已完成
 * @params isRepeat {boolean} 是否支持重复数据上报,false不支持，true支持
 * @params isExpired {boolean} 是否同步过期监控，false-否，true-是，默认否
 * @params result {number} 同步结果0 成功其他都是失败错误码
 * @params stateDuration {string} 状态在/离线时长
 * @params lastStateChangedTime {string} 最后一次状态变更时间
 * @params fullSyncRetainCount {number} 全量同步保留的记录次数
 * @params dirSyncRetainCount {number} 指定目录同步保留的记录次数
 * @params isUseDbSync {boolean} 是否使用数据库同步
 * @params isNeedPushFromDomain {boolean} 下级数据推送是否需要推送给上级
 * @params dbIp {string} 上级数据库Ip
 * @params dbPort {number} 上级数据库端口
 * @params dbName {string} 上级数据库名称
 * @params dbUser {string} 上级数据库用户名
 * @params dbPassword {string} 上级数据库密码
 * @params dbTableName {string} 上级数据库表名称
 * @params dbIncrementTableName {string} 上级增量同步数据库表名称
 * @params lastSyncActualNum {number} 最后一次实际同步数量
 * @params lastSyncCatalogsNum {number} 最后一次同步总数量
 * @params timeRemaining {number} 同步剩余时间，单位/秒
 * @params progress {number} 同步进度，百分比
 */
export type GetUpperDomainByIdResType = {
    lastReportTime: string;
    upperId: string;
    name: string;
    ip: string;
    port: number;
    sipTransProtocol: EnumTypesSipTransProtocolCommonType;
    status: EnumTypesSipServiceStatusCommonType;
    isAuth: boolean;
    username: string;
    password: string;
    heartbeatCycle: number;
    heartbeatTimeoutCount: number;
    isPublicNetwork: 1 | 2;
    sendCatalogTransProtocol: EnumTypesSipTransProtocolCommonType;
    sendCatalogOnceCount: number;
    roleId: string;
    roleName: string;
    taskStatus: EnumTypesSyncStatusCommonType;
    isRepeat: boolean;
    isExpired: boolean;
    result: number;
    stateDuration: string;
    lastStateChangedTime: string;
    fullSyncRetainCount: number;
    dirSyncRetainCount: number;
    isUseDbSync: boolean;
    isNeedPushFromDomain: boolean;
    dbIp: string;
    dbPort: number;
    dbName: string;
    dbUser: string;
    dbPassword: string;
    dbTableName: string;
    dbIncrementTableName: string;
    lastSyncActualNum: number;
    lastSyncCatalogsNum: number;
    timeRemaining: number;
    progress: number;
};

/**
 * 根据同步记录id查询上级域历史同步记录——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetUpperSyncTaskHistoryByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 根据同步记录id查询上级域历史同步记录——响应参数类型定义
 * @params catalogsNum {number} 信令同步目录数量值
 * @params actualCatalogsNum {number} 实际同步目录数量
 * @params addNum {number} 添加数量
 * @params updateNum {number} 修改数量
 * @params deleteNum {number} 删除数量
 * @params conflictNum {number} 冲突数量
 * @params time {string} 同步耗时
 * @params offlineNum {number} 离线数量
 * @params onlineNum {number} 在线数量
 * @params cameraTotal {number} 监控总数
 * @params groupTotal {number} 监控组总数
 * @params groupId {string} 指定的目录
 * @params groupName {string} 目录名称
 * @params cameraAddNum {number} 监控添加总数
 * @params cameraUpdateNum {number} 监控修改总数
 * @params cameraConflictNum {number} 监控冲突总数
 * @params groupAddNum {number} 目录添加总数
 * @params groupUpdateNum {number} 目录修改总数
 * @params groupConflictNum {number} 目录冲突总数
 * @params groupDeleteNum {number} 目录未同步总数
 * @params cameraDeleteNum {number} 监控未同步总数
 * @params timeRemaining {number} 同步剩余时间，单位/秒
 * @params progress {number} 同步进度，百分比
 * @params taskId {string} 同步任务id
 * @params startTime {string} 同步任务开始时间
 * @params endTime {string} 同步任务结束时间
 * @params status {EnumTypesSyncStatusCommonType} 同步状态0-未开始1-同步中2-同步完成3-应用中4-应用完成
 * @params result {number} 同步结束，0为成功，其他为错误码
 * @params sipServerId {string} 同步上/下级Id
 * @params name {string} 名称
 * @params syncType {EnumTypesCommonType} 同步类型：0-全量同步1-增量同步2-指定目录同步
 * @params hasConflictData {boolean} 是否有冲突数据
 */
export type GetUpperSyncTaskHistoryByIdResType = {
    catalogsNum: number;
    actualCatalogsNum: number;
    addNum: number;
    updateNum: number;
    deleteNum: number;
    conflictNum: number;
    time: string;
    offlineNum: number;
    onlineNum: number;
    cameraTotal: number;
    groupTotal: number;
    groupId: string;
    groupName: string;
    cameraAddNum: number;
    cameraUpdateNum: number;
    cameraConflictNum: number;
    groupAddNum: number;
    groupUpdateNum: number;
    groupConflictNum: number;
    groupDeleteNum: number;
    cameraDeleteNum: number;
    timeRemaining: number;
    progress: number;
    taskId: string;
    startTime: string;
    endTime: string;
    status: EnumTypesSyncStatusCommonType;
    result: number;
    sipServerId: string;
    name: string;
    syncType: EnumTypesCommonType;
    hasConflictData: boolean;
};

/**
 * 上级域同步历史记录分页查询——请求参数类型定义
 * @params id {string} id （必填）
 * @params SyncType {number} 同步类型0-全量同步1-增量同步2-指定目录同步
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetUpperDomainSyncHistoryReqType = {
    id: string;
    SyncType?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 上级域同步历史记录分页查询——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetUpperDomainSyncHistoryResType = {
    totalCount: number;
    records: any[];
};

/**
 * 上级域同步记录数据多条件查询,传入id为同步任务的id——请求参数类型定义
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字
 * @params UpdateStatus {number} 变更状态
 * @params Type {number} 数据类型1-监控2-目录null-全部
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetUpperDomainSyncRecordsReqType = {
    id: string;
    Keyword?: string;
    UpdateStatus?: number;
    Type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 上级域同步记录数据多条件查询,传入id为同步任务的id——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetUpperDomainSyncRecordsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 分页获取上级域状态变更记录——请求参数类型定义
 * @params id {string} id （必填）
 * @params Online {boolean} 是否在线 true：在线，false：离线
 * @params StartTime {string} 开始时间
 * @params EndTime {string} 结束时间
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetUpperDomainStateRecordsReqType = {
    id: string;
    Online?: boolean;
    StartTime?: string;
    EndTime?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 分页获取上级域状态变更记录——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetUpperDomainStateRecordsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 同步目录给上级(自动化测试用)——请求参数类型定义
 * @params id {string} id （必填）
 * @params groupId {string} groupId
 * @headers X-version {string}
 */
export type SynchronizationReqType = {
    id: string;
    groupId?: string;
    'X-version'?: string;
};

/**
 * 条件查询监控状态变更上报记录——请求参数类型定义
 * @params UpperId {string} 上级域Id
 * @params Online {boolean} 监控在线状态,true-在线，false-离线
 * @params ReportResult {boolean} 上报结果:true-上报成功，false-上报失败
 * @params StartTime {string} 开始时间
 * @params EndTime {string} 结束时间
 * @params Keyword {string} 关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 * @headers X-version {string}
 */
export type GetCamerasStateHistoryReqType = {
    UpperId?: string;
    Online?: boolean;
    ReportResult?: boolean;
    StartTime?: string;
    EndTime?: string;
    Keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 条件查询监控状态变更上报记录——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetCamerasStateHistoryResType = {
    totalCount: number;
    records: any[];
};

/**
 * 上报监控状态到上级域——请求参数类型定义
 * @headers X-version {string}
 * @params upperId {string} 上级域Id
 */
export type ReportCameraStateToUpperDomainsReqType = {
    'X-version'?: string;
    upperId?: string;
};

/**
 * 获取视频会议列表(无法实现)——请求参数类型定义
 * @headers X-version {string}
 */
export type GetVideoConferencesReqType = {
    'X-version'?: string;
};

/**
 * 获取视频会议列表(无法实现)——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetVideoConferencesResType = {
    totalCount: number;
    records: any[];
};

/**
 * 邀请/取消 摄像头 摄像头ID会议室号——请求参数类型定义
 * @params conferenceNumber {string}  （必填）
 * @params cameraId {string} cameraId （必填）
 * @params isInvite {boolean}  默认：true （必填）
 * @headers X-version {string}
 */
export type EditInviteCameraReqType = {
    conferenceNumber: string;
    cameraId: string;
    isInvite: boolean;
    'X-version'?: string;
};

/**
 * 邀请/取消 直播 联系人ID会议室号——请求参数类型定义
 * @params conferenceNumber {string}  （必填）
 * @params contactId {string} contactId （必填）
 * @params isInvite {boolean}  默认：true （必填）
 * @headers X-version {string}
 */
export type EditInviteLiveReqType = {
    conferenceNumber: string;
    contactId: string;
    isInvite: boolean;
    'X-version'?: string;
};

/**
 * 会议直播 推流/取消 会议室号——请求参数类型定义
 * @params conferenceNumber {string}  （必填）
 * @params isToLive {boolean}  默认：true （必填）
 * @headers X-version {string}
 */
export type VideoConferenceToLiveReqType = {
    conferenceNumber: string;
    isToLive: boolean;
    'X-version'?: string;
};

/**
 * 获取会议直播直播——请求参数类型定义
 * @params conferenceNumber {string}  （必填）
 * @headers X-version {string}
 */
export type ObtainConferenceLiveReqType = {
    conferenceNumber: string;
    'X-version'?: string;
};

/**
 * 获取会议直播直播——响应参数类型定义
 * @params id {string} 直播Id:578
 * @params stream {string} 直播stream
 * @params status {any} 直播状态
 * @params liveType {any} 流媒体服务类型
 * @params title {string} 直播标题
 * @params description {string} 直播描述
 * @params userId {string} 用户Id
 * @params userAccount {string} 用户账号
 * @params userName {string} 用户名称
 * @params createTime {string} 创建时间
 * @params rtmpUrl {string} RtmpUrl
 * @params flvUrl {string} 播放Url
 * @params rtspUrl {string} Rtsp 地址
 * @params wsUrl {string} Ws 地址
 * @params webRtcUrl {string} WebRtc 地址
 * @params relateWsUrl {string} Ws 相对地址
 * @params relateFlvUrl {string} Flv 相对地址
 * @params relateWebRtcUrl {string} WebRtc 相对地址
 * @params isGradingDispatch {boolean} 是否为分级调度的直播回调
 * @params appointment {string} 预约时间
 */
export type ObtainConferenceLiveResType = {
    id: string;
    stream: string;
    status: any;
    liveType: any;
    title: string;
    description: string;
    userId: string;
    userAccount: string;
    userName: string;
    createTime: string;
    rtmpUrl: string;
    flvUrl: string;
    rtspUrl: string;
    wsUrl: string;
    webRtcUrl: string;
    relateWsUrl: string;
    relateFlvUrl: string;
    relateWebRtcUrl: string;
    isGradingDispatch: boolean;
    appointment: string;
};

/**
 * 推流接口——请求参数类型定义
 * @headers X-version {string}
 * @params targets {any[]} 推送目标 （必填）
 * @params videos {any[]} 推送的视频列表 （必填）
 * @params operationType {1 | 2} 推送操作类型：1-追加 | 2-覆盖 （必填）
 */
export type PushVideosReqType = {
    'X-version'?: string;
    targets: any[];
    videos: any[];
    operationType: 1 | 2;
};
