/**
 * 联系人类型<br/>
0:H323,H323终端映射账号; <br/>
1:SIP,电话映射的账号; <br/>
2:User,联系人映射的账号; <br/>
3:RTSP,RTSP链接映射的账号; 
*/
type AccountTypeCommonType = 0 | 1 | 2 | 3;

/**
 * 参会成员类型<br/>
0:Phone,电话; <br/>
1:Account,账号; <br/>
2:Terminal,H323终端; <br/>
3:Rtsp,Rtsp链接; <br/>
4:Other,其他设备; 
*/
type ConventioneerTypeCommonType = 0 | 1 | 2 | 3 | 4;

/**
 * 布局模式<br/>
0:Equality,等分模式; <br/>
1:Presentation,主席模式; <br/>
2:SpeechExcitation,语音激励模式; <br/>
3:Exclusive,单方全屏; 
*/
type LayoutModeCommonType = 0 | 1 | 2 | 3;

/**
 * 画面布局类型<br/>
1:One,单画面; <br/>
2:Two,两画面（等分）; <br/>
4:Four,四画面（等分）; <br/>
9:Nine,九画面（等分; <br/>
16:Sixteen,十六画面（等分）; <br/>
25:TwentyFive,二十五画面（等分）; <br/>
36:ThirtySix,三十六画面（等分）; <br/>
49:FortyNine,四十九画面（等分）; <br/>
50:OnePlusFour,五画面（1+4）; <br/>
80:OnePlusSeven,八画面（1+7）; <br/>
100:OnePlusNine,十画面（1+9）; <br/>
130:OnePlusThirteen,十三画面（1+12）; <br/>
170:OnePlusSixteen,十七画面（1+16）; <br/>
210:OnePlusTwenty,二十一画面（1+20）; <br/>
615:OnePlusFive,六画面（1+5）; <br/>
716:OnePlusSix,七画面（1+6）; <br/>
1000:TwoPlusEight,十画面（2+8）; 
*/
type LayoutTypeCommonType =
    | 1
    | 2
    | 4
    | 9
    | 16
    | 25
    | 36
    | 49
    | 50
    | 80
    | 100
    | 130
    | 170
    | 210
    | 615
    | 716
    | 1000;

/**
 * 组织架构简略信息
 * @params id {string} ID
 * @params name {string} 名称
 */
type MiniOrganizationCommonType = {
    id?: string;
    name?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {AccountOutCommonType[]} 数据记录
 */
type AccountOutReqCommonType = {
    totalCount?: number;
    records?: AccountOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {MCUDataOutCommonType[]} 数据记录
 */
type MCUDataOutReqCommonType = {
    totalCount?: number;
    records?: MCUDataOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {OrganizationOutCommonType[]} 数据记录
 */
type OrganizationOutReqCommonType = {
    totalCount?: number;
    records?: OrganizationOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {RecordingOutCommonType[]} 数据记录
 */
type RecordingOutReqCommonType = {
    totalCount?: number;
    records?: RecordingOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 数据总条数
 * @params records {TerminalOutCommonType[]} 数据记录
 */
type TerminalOutReqCommonType = {
    totalCount?: number;
    records?: TerminalOutCommonType[];
};

/**
 * 视频会议平台类型<br/>
0:Yealink,亿联会议平台2.X; <br/>
1:Tencent,腾讯会议平台; <br/>
2:YealinkPlus,亿联会议平台4.X; <br/>
3:GMeet,GMeet会议平台; 
*/
type PlatformTypeCommonType = 0 | 1 | 2 | 3;

/**
 * 协议类型<br/>
0:Sip; <br/>
1:H323; <br/>
2:RTSP; <br/>
3:RTMP; 
*/
type ProtocolTypeCommonType = 0 | 1 | 2 | 3;

/**
 * 视频分辨率<br/>
0:HD360P,360P; <br/>
1:HD720P,720P; <br/>
2:HD1080P,1080P; 
*/
type ResolutionCommonType = 0 | 1 | 2;

/**
 * 策略类型<br/>
0:MobilePhone,手机号码邀请策略; <br/>
1:Phone,电话邀请策略; <br/>
2:VideoTerminal,（H323）视频会议终端邀请策略; <br/>
3:Camera,监控邀请策略; <br/>
4:RTSP,rtsp终端的邀请策略; <br/>
5:NuChatApp,牛信app终端的邀请策略; <br/>
6:UnKnow,其他终端的邀请策略; 
*/
type StrategyTypeCommonType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * 字幕相关颜色<br/>
0:Black,黑色; <br/>
1:Red,红色; <br/>
2:Green,绿色; <br/>
3:Yellow,黄色; <br/>
4:Blue,蓝色; <br/>
5:Magenta,品红; <br/>
6:BlueGreen,蓝绿; <br/>
7:White,白色; <br/>
8:Transparent,透明; 
*/
type SubtitleColorCommonType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 * 终端类型<br/>
0:H323,H323终端; <br/>
1:SFB,SFB终端; <br/>
2:SIP,SIP终端; <br/>
3:RTSP,RTSP虚拟的终端; <br/>
4:RTMP,RTMP虚拟的终端; <br/>
-1:All,全部类型; 
*/
type TerminalTypeCommonType = 0 | 1 | 2 | 3 | 4 | -1;

/**
 * 账号
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params name {string} 名称
 * @params accountNum {string} 账号
 * @params password {string} 密码，当密码为空时使用默认密码
 * @params organizations {any[]} 账号所在的组织架构集合
 * @params type {AccountTypeCommonType} 账号类型
 */
type AccountInCommonType = {
    platformID?: string;
    name?: string;
    accountNum?: string;
    password?: string;
    organizations?: any[];
    type?: AccountTypeCommonType;
};

/**
 * 分页查询请求
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params organizationIds {any[]} 组id
 */
type BatchQueryRequestCommonType = {
    platformID?: string;
    organizationIds: any[];
};

/**
 * 级联会议画面布局信息
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params layoutType {LayoutTypeCommonType} 布局类型
 * @params appointScreens {AppointMemberScreenCommonType[]} 有固定布局的画面
 * @params layoutApplicationTargets {any[]} 布局应用对象
 * @params sourceMemberIDs {any[]} 布局显示对象集合
 */
type CascadeConferenceLayoutInCommonType = {
    platformID?: string;
    layoutType?: LayoutTypeCommonType;
    appointScreens?: AppointMemberScreenCommonType[];
    layoutApplicationTargets?: any[];
    sourceMemberIDs?: any[];
};

/**
 * 会议
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params name {string} 会议名称
 * @params password {string} 会议密码
 * @params number {string} 自定义的会议室号码
 * @params presenter {AccountInCommonType} 主持人账号
 * @params jointPresenters {AccountInCommonType[]} 联席主持人
 * @params isEnabledSelfView {boolean} 是否显示本地画面
 * @params isAutoRecording {boolean} 是否自动录制
 * @params isEnabledMute {boolean} 是否入会自动禁言
 * @params isLayoutSpeechExcitation {boolean} 是否演讲者模式
 * @params description {string} 描述
 */
type ConferenceInCommonType = {
    platformID?: string;
    name?: string;
    password?: string;
    number?: string;
    presenter?: AccountInCommonType;
    jointPresenters?: AccountInCommonType[];
    isEnabledSelfView?: boolean;
    isAutoRecording?: boolean;
    isEnabledMute?: boolean;
    isLayoutSpeechExcitation?: boolean;
    description?: string;
};

/**
 * 被邀请的账号
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} id
 * @params name {string} 名称
 */
type InvitedAccountInCommonType = {
    platformID?: string;
    id?: string;
    name?: string;
};

/**
 * 其他邀请类型
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} id(设备的号码)
 * @params name {string} 名称
 * @params type {ProtocolTypeCommonType} 协议类型
 */
type InvitedOtherInCommonType = {
    platformID?: string;
    id?: string;
    name?: string;
    type?: ProtocolTypeCommonType;
};

/**
 * 被邀请的电话
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params name {string} 电话号码
 * @params number {string} 电话号码
 */
type InvitedPhoneInCommonType = {
    platformID?: string;
    name?: string;
    number?: string;
};

/**
 * 被邀请的Rtsp链接
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params url {string} RTSP的Url
 * @params id {string} id（可为空）
 * @params name {string} 名称（可为空）
 * @params rtspProtocolType {RtspProtocolCommonType} rtsp拉流协议
 */
type InvitedRtspInCommonType = {
    platformID?: string;
    url?: string;
    id?: string;
    name?: string;
    rtspProtocolType?: RtspProtocolCommonType;
};

/**
 * 被邀请的终端
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params name {string} 终端名称
 * @params number {string} 终端号码
 * @params password {string} 终端密码
 * @params ip {string} IP
 * @params port {number} 端口
 */
type InvitedTerminalInCommonType = {
    platformID?: string;
    name?: string;
    number?: string;
    password?: string;
    ip?: string;
    port?: number;
};

/**
 * 布局信息
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params layoutType {LayoutTypeCommonType} 布局类型
 * @params appointScreens {AppointMemberScreenCommonType[]} 有固定布局的画面
 * @params layoutApplicationTargets {any[]} 布局应用对象
 * @params sourceMemberIDs {any[]} 布局显示对象集合
 * @params videoRound {VideoRoundCommonType} 视频轮询配置
 */
type LayoutInCommonType = {
    platformID?: string;
    layoutType?: LayoutTypeCommonType;
    appointScreens?: AppointMemberScreenCommonType[];
    layoutApplicationTargets?: any[];
    sourceMemberIDs?: any[];
    videoRound?: VideoRoundCommonType;
};

/**
 * MCU数据
 * @params type {PlatformTypeCommonType} 平台类型
 * @params name {string} MCU名称
 * @params accessKeyID {string} 授权码
 * @params accessKeySecret {string} 秘钥
 * @params domain {string} 拉流地址
 * @params description {string} 描述
 * @params extension {undefined} MCU拓展信息
 */
type MCUDataInCommonType = {
    type?: PlatformTypeCommonType;
    name: string;
    accessKeyID: string;
    accessKeySecret: string;
    domain: string;
    description?: string;
    extension?: undefined;
};

/**
 * 成员基础信息
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} 成员ID
 */
type MemberBasicInfoInCommonType = {
    platformID?: string;
    id?: string;
};

/**
 * 成员是否为级联会议室信息
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} 成员ID
 * @params isCascadeConference {boolean} 是否为级联的会议室
 */
type MemberIsCascadeConferenceInfoInCommonType = {
    platformID?: string;
    id?: string;
    isCascadeConference?: boolean;
};

/**
 * 成员隔离信息
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} 成员ID
 * @params isIsolate {boolean} 是否静音
 */
type MemberIsolateInfoInCommonType = {
    platformID?: string;
    id?: string;
    isIsolate?: boolean;
};

/**
 * 成员禁言信息
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} 成员ID
 * @params isMute {boolean} 是否禁言
 */
type MemberMuteInfoInCommonType = {
    platformID?: string;
    id?: string;
    isMute?: boolean;
};

/**
 * 会场改名信息
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} 成员ID
 * @params displayName {string} 会场名称
 */
type MemberReNameInfoInCommonType = {
    platformID?: string;
    id?: string;
    displayName: string;
};

/**
 * 成员画面隐藏信息
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} 成员ID
 * @params isHideScreen {boolean} 是否隐藏画面
 */
type MemberScreenHideInfoInCommonType = {
    platformID?: string;
    id?: string;
    isHideScreen?: boolean;
};

/**
 * 成员静音信息
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} 成员ID
 * @params isSilence {boolean} 是否静音
 */
type MemberSilenceInfoInCommonType = {
    platformID?: string;
    id?: string;
    isSilence?: boolean;
};

/**
 * 字幕显示位置<br/>
0:Centered; <br/>
1:UpperLeft; <br/>
2:UpperMiddle; <br/>
3:UpperRight; <br/>
4:BottomLeft; <br/>
5:BottomMiddle; <br/>
6:BottomRight; 
*/
type PositionCommonType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * 主持人设置信息
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} 成员ID
 * @params isSetPresenter {boolean} 是否设置为主持人
 */
type PresenterSettingInfoInCommonType = {
    platformID?: string;
    id?: string;
    isSetPresenter?: boolean;
};

/**
 * 录制操作类型<br/>
0:Start,开启录制; <br/>
1:Pause,暂停录制; <br/>
2:Resume,恢复录制; <br/>
3:Stop,停止录制; 
*/
type RecordOperationTypeCommonType = 0 | 1 | 2 | 3;

/**
 * rtsp拉流协议<br/>
0:udp; <br/>
1:tcp; 
*/
type RtspProtocolCommonType = 0 | 1;

/**
 * 字幕信息
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params isEnable {boolean} 是否启用
 * @params content {string} 字幕内容
 * @params fontSize {FontSizeCommonType} 字体大小
 * @params position {PositionCommonType} 字幕显示位置
 * @params fontColor {SubtitleColorCommonType} 字体颜色
 * @params backgroundColor {SubtitleColorCommonType} 背景颜色
 * @params isScroll {boolean} 字幕是否滚动
 */
type SubtitleInCommonType = {
    platformID?: string;
    isEnable?: boolean;
    content?: string;
    fontSize?: FontSizeCommonType;
    position?: PositionCommonType;
    fontColor?: SubtitleColorCommonType;
    backgroundColor?: SubtitleColorCommonType;
    isScroll?: boolean;
};

/**
 * 终端信息
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params name {string} 名称
 * @params type {TerminalTypeCommonType} 终端类型
 * @params organizationId {string} 所属分组
 * @params number {string} 终端号码
 */
type TerminalInCommonType = {
    platformID?: string;
    name: string;
    type?: TerminalTypeCommonType;
    organizationId?: string;
    number: string;
};

/**
 * 视频轮询配置
 * @params isEnable {boolean} 是否使能视频轮巡
 * @params pictureNumber {number} 视频轮巡张数
 * @params roundInterval {number} 轮巡时间间隔（单位：秒）
 */
type VideoRoundCommonType = {
    isEnable?: boolean;
    pictureNumber?: number;
    roundInterval?: number;
};

/**
 * 账号数据
 * @params id {string} id
 * @params name {string} 名称
 * @params accountNum {string} 账号号码
 * @params organizations {any[]} 账号所在的组织架构集合
 */
type AccountOutCommonType = {
    id?: string;
    name?: string;
    accountNum?: string;
    organizations?: any[];
};

/**
 * 有指定成员的画面
 * @params screenNumber {number} 设置固定位置的序号
 * @params memberID {string} 固定位置所设置的成员ID
 */
type AppointMemberScreenCommonType = {
    screenNumber?: number;
    memberID: string;
};

/**
 * 会议数据
 * @params id {string} 会议ID
 * @params number {string} 会议室号
 * @params name {string} 会议名称
 * @params password {string} 会议密码
 * @params startTime {string} 会议开启时间
 * @params isEnableShared {boolean} 是否启用分享
 * @params sharedUrl {string} 分享观看的链接
 * @params isEnabledAutoRecording {boolean} 是否启用自动录制
 */
type ConferenceOutCommonType = {
    id?: string;
    number?: string;
    name?: string;
    password?: string;
    startTime?: string;
    isEnableShared?: boolean;
    sharedUrl?: string;
    isEnabledAutoRecording?: boolean;
};

/**
 * 会议成员数据
 * @params id {string} 成员ID
 * @params name {string} 成员名称
 * @params type {ConventioneerTypeCommonType} 会议成员类型
 * @params phone {string} 用户加入会议使用的号码
 * @params requestUri {string} 用户入会使用的Uri
 * @params conferenceID {string} 所在会议室
 * @params isPresenter {boolean} 是否为主持人
 * @params isMute {boolean} 是否被禁言
 * @params isSilence {boolean} 是否被静音
 * @params isBroadcast {boolean} 是否在广播中
 * @params isHideScreen {boolean} 是否画面被隐藏
 * @params mediaDevice {MediaDeviceCommonType} 媒体信息
 */
type ConventioneerOutCommonType = {
    id?: string;
    name?: string;
    type?: ConventioneerTypeCommonType;
    phone?: string;
    requestUri?: string;
    conferenceID?: string;
    isPresenter?: boolean;
    isMute?: boolean;
    isSilence?: boolean;
    isBroadcast?: boolean;
    isHideScreen?: boolean;
    mediaDevice?: MediaDeviceCommonType;
};

/**
 * 创建会议响应
 * @params id {string} 会议ID
 * @params number {string} 会议室号
 * @params name {string} 会议名称
 * @params password {string} 会议密码
 * @params startTime {string} 会议开启时间
 * @params isEnableShared {boolean} 是否启用分享
 * @params sharedUrl {string} 分享观看的链接
 * @params isEnabledAutoRecording {boolean} 是否启用自动录制
 * @params isEnabledMute {boolean} 是否入会自动禁言
 * @params isLayoutSpeechExcitation {boolean} 是否演讲者模式
 * @params bingSip {string} 会议室绑定的sip号码
 */
type CreatedConferenceOutCommonType = {
    id?: string;
    number?: string;
    name?: string;
    password?: string;
    startTime?: string;
    isEnableShared?: boolean;
    sharedUrl?: string;
    isEnabledAutoRecording?: boolean;
    isEnabledMute?: boolean;
    isLayoutSpeechExcitation?: boolean;
    bingSip?: string;
};

/**
 * 会议邀请数据
 * @params sfbJoinUrl {string} 匿名入会链接
 * @params h323JoinIntranetUrl {string} H323入会内网链接
 * @params h323JoinExternalUrl {string} H323入会外网链接
 * @params liveBroadcastJoinUrl {string} 直播入会链接
 * @params webRTCJoinIntranetUrl {string} webRTC入会内网链接
 * @params webRTCJoinExternaUrl {string} webRTC入会外网链接
 * @params sipJoinIntranetUrl {string} SIP入会内网链接
 * @params sipJoinExternaUrl {string} SIP入会外网链接
 */
type InvitationOutCommonType = {
    sfbJoinUrl?: string;
    h323JoinIntranetUrl?: string;
    h323JoinExternalUrl?: string;
    liveBroadcastJoinUrl?: string;
    webRTCJoinIntranetUrl?: string;
    webRTCJoinExternaUrl?: string;
    sipJoinIntranetUrl?: string;
    sipJoinExternaUrl?: string;
};

/**
 * 成员呼叫记录
 * @params callFails {ConventioneerOutCommonType[]} 呼叫失败
 * @params callSucceeds {ConventioneerOutCommonType[]} 呼叫成功
 */
type InviteRecordOutCommonType = {
    callFails?: ConventioneerOutCommonType[];
    callSucceeds?: ConventioneerOutCommonType[];
};

/**
 * 邀请策略配置数据
 * @params strategyType {StrategyTypeCommonType} 策略类型
 * @params isEnable {boolean} 是否启用
 * @params description {string} 策略描述
 * @params strategies {StrategyConfigCommonType[]} 策略使用平台
 */
type InviteStrategyConfigOutCommonType = {
    strategyType?: StrategyTypeCommonType;
    isEnable?: boolean;
    description?: string;
    strategies?: StrategyConfigCommonType[];
};

/**
 * 画面布局
 * @params id {string} 布局ID
 * @params isEnable {boolean} 是否启用
 * @params mode {LayoutModeCommonType} 布局模式
 * @params layoutType {LayoutTypeCommonType} 布局类型
 * @params videoRound {VideoRoundCommonType} 视频轮询配置
 * @params isEnabledSelfView {boolean} 是否开启自视
 * @params isEnabledVoiceIncentive {boolean} 是否开启语音激励
 * @params applicationTargets {any[]} 布局应用对象
 * @params sourceMemberIDs {any[]} 在布局里显示画面的成员ID
 * @params appointScreens {AppointMemberScreenCommonType[]} 有固定布局的画面
 */
type LayoutOutCommonType = {
    id?: string;
    isEnable?: boolean;
    mode?: LayoutModeCommonType;
    layoutType?: LayoutTypeCommonType;
    videoRound?: VideoRoundCommonType;
    isEnabledSelfView?: boolean;
    isEnabledVoiceIncentive?: boolean;
    applicationTargets?: any[];
    sourceMemberIDs?: any[];
    appointScreens?: AppointMemberScreenCommonType[];
};

/**
 * MCU数据
 * @params id {string} 标识
 * @params type {PlatformTypeCommonType} 平台类型
 * @params name {string} MCU名称
 * @params accessKeyID {string} 授权码
 * @params accessKeySecret {string} 秘钥
 * @params domain {string} IP地址
 * @params description {string} 描述
 * @params extension {undefined} 拓展信息
 */
type MCUDataOutCommonType = {
    id?: string;
    type?: PlatformTypeCommonType;
    name?: string;
    accessKeyID?: string;
    accessKeySecret?: string;
    domain?: string;
    description?: string;
    extension?: undefined;
};

/**
 * 平台类型信息
 * @params type {PlatformTypeCommonType} 平台类型
 * @params name {string} 平台类型名称
 */
type MCUTypeInfoOutCommonType = {
    type?: PlatformTypeCommonType;
    name?: string;
};

/**
 * 媒体信息
 * @params audio {MediaStateCommonType} 音频能力(本地麦克风是否开启)
 * @params video {MediaStateCommonType} 视频能力(本地摄像头是否开启)
 * @params share {MediaStateCommonType} 辅流能力
 */
type MediaDeviceCommonType = {
    audio?: MediaStateCommonType;
    video?: MediaStateCommonType;
    share?: MediaStateCommonType;
};

/**
 *
 * @params isEnable {boolean} 是否可用
 * @params isSendOn {boolean} 是否开启发送媒体流
 */
type MediaStateCommonType = {
    isEnable?: boolean;
    isSendOn?: boolean;
};

/**
 * 组织架构
 * @params id {string} ID
 * @params name {string} 名称
 * @params parentID {string} 上级组织架构ID
 * @params index {number} 序号
 * @params isLeaf {boolean} 是否叶子节点
 * @params totalCount {number} 子终端数量（统计子子孙孙节点数量）
 * @params paths {MiniOrganizationCommonType[]} 路径path
 */
type OrganizationOutCommonType = {
    id?: string;
    name?: string;
    parentID?: string;
    index?: number;
    isLeaf?: boolean;
    totalCount?: number;
    paths?: MiniOrganizationCommonType[];
};

/**
 * 平台host信息
 * @params type {PlatformTypeCommonType} 平台类型
 * @params id {string} 平台ID
 * @params name {string} 平台名称
 * @params host {string} 平台host
 */
type PlatformHostInfoOutCommonType = {
    type?: PlatformTypeCommonType;
    id?: string;
    name?: string;
    host?: string;
};

/**
 * 平台类型信息
 * @params type {PlatformTypeCommonType} 平台类型
 * @params id {string} 平台ID
 * @params name {string} 平台名称
 */
type PlatformInfoOutCommonType = {
    type?: PlatformTypeCommonType;
    id?: string;
    name?: string;
};

/**
 * 录制文件
 * @params id {string} 文件id
 * @params fileName {string} 文件名
 * @params fileType {string} 文件格式，mp4、mp3、txt等
 * @params url {string} url
 */
type RecordingFileOutCommonType = {
    id?: string;
    fileName?: string;
    fileType?: string;
    url?: string;
};

/**
 * 录像文件管理
 * @params id {string} 录制文件id
 * @params name {string} 名称
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束事件
 * @params files {RecordingFileOutCommonType[]} 录制文件数据
 */
type RecordingOutCommonType = {
    id?: string;
    name?: string;
    startTime?: string;
    endTime?: string;
    files?: RecordingFileOutCommonType[];
};

/**
 * 录播状态
 * @params status {RecordStatusCommonType} 录播状态
 * @params lastStopDuration {number} 上一次暂停/停止时的录制时长，单位秒
 * @params lastStartTime {string} 上一次开始/继续录制的时间点(0时区)
 */
type RecordStateOutCommonType = {
    status?: RecordStatusCommonType;
    lastStopDuration?: number;
    lastStartTime?: string;
};

/**
 * 录播状态枚举<br/>
0:Recording,正在录制; <br/>
1:Pause,录制暂停中; <br/>
2:NoStart,未开始录制; <br/>
3:Pending,正在处理; 
*/
type RecordStatusCommonType = 0 | 1 | 2 | 3;

/**
 * 搜索结果
 * @params terminals {TerminalOutReqCommonType} 终端列表
 * @params groups {OrganizationOutReqCommonType} 组列表
 */
type SearchResourceResultCommonType = {
    terminals?: TerminalOutReqCommonType;
    groups?: OrganizationOutReqCommonType;
};

/**
 * 策略配置
 * @params accessKeyId {string} 平台id
 * @params expression {string} 正则表达式
 */
type StrategyConfigCommonType = {
    accessKeyId?: string;
    expression?: string;
};

/**
 * 终端数据
 * @params id {string} 用户ID，即staffId
 * @params name {string} 名称
 * @params type {TerminalTypeCommonType} 类型
 * @params miniOrganization {MiniOrganizationCommonType} 所属分组
 * @params number {string} 号码
 * @params isOnline {boolean} 是否在线
 * @params paths {MiniOrganizationCommonType[]} 路径path
 */
type TerminalOutCommonType = {
    id?: string;
    name?: string;
    type?: TerminalTypeCommonType;
    miniOrganization?: MiniOrganizationCommonType;
    number?: string;
    isOnline?: boolean;
    paths?: MiniOrganizationCommonType[];
};

/**
 * 视频会议配置
 * @params data {undefined} 配置对象-VideoConferenceServiceConfigs
 */
type VideoConferenceConfigOutCommonType = {
    data?: undefined;
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
 *
 * @params data {string}
 */
type TencentCallbackDataCommonType = {
    data?: string;
};

/**
 * 字体大小<br/>
0:Small,小字体; <br/>
1:Medium,中字体; <br/>
2:Large,大字体; 
*/
type FontSizeCommonType = 0 | 1 | 2;


----


/**
 * 获取符合查询条件的账号——请求参数类型定义
 * @params keyword {string} 模糊匹配关键字
 * @params organization {string} 所属组织架构
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type GetAccountsReqType = {
    keyword?: string;
    organization?: string;
    page?: number;
    per_page?: number;
    platformId?: string;
};

/**
 * 获取符合查询条件的账号——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {AccountOutCommonType[]} 数据记录
 */
export type GetAccountsResType = {
    totalCount: number;
    records: AccountOutCommonType[];
};

/**
 * 创建账号——请求参数类型定义
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params name {string} 名称
 * @params accountNum {string} 账号
 * @params password {string} 密码，当密码为空时使用默认密码
 * @params organizations {any[]} 账号所在的组织架构集合
 * @params type {AccountTypeCommonType} 账号类型
 */
export type AddAccountsReqType = {
    platformID?: string;
    name?: string;
    accountNum?: string;
    password?: string;
    organizations?: any[];
    type?: AccountTypeCommonType;
};

/**
 * 创建账号——响应参数类型定义
 * @params id {string} id
 * @params name {string} 名称
 * @params accountNum {string} 账号号码
 * @params organizations {any[]} 账号所在的组织架构集合
 */
export type AddAccountsResType = {
    id: string;
    name: string;
    accountNum: string;
    organizations: any[];
};

/**
 * 通过ID获取账号——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type GetAccountsByIdReqType = {
    id: string;
    platformId?: string;
};

/**
 * 通过ID获取账号——响应参数类型定义
 * @params id {string} id
 * @params name {string} 名称
 * @params accountNum {string} 账号号码
 * @params organizations {any[]} 账号所在的组织架构集合
 */
export type GetAccountsByIdResType = {
    id: string;
    name: string;
    accountNum: string;
    organizations: any[];
};

/**
 * 删除账号——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type DeleteAccountsReqType = {
    id: string;
    platformId?: string;
};

/**
 * 通过账号获取账号详情——请求参数类型定义
 * @params name {string}  （必填）
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type GetAccountsByNameReqType = {
    name: string;
    platformId?: string;
};

/**
 * 通过账号获取账号详情——响应参数类型定义
 * @params id {string} id
 * @params name {string} 名称
 * @params accountNum {string} 账号号码
 * @params organizations {any[]} 账号所在的组织架构集合
 */
export type GetAccountsByNameResType = {
    id: string;
    name: string;
    accountNum: string;
    organizations: any[];
};

/**
 * 获取指定id的会议——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type GetConferencesByIdReqType = {
    id: string;
    platformId?: string;
};

/**
 * 获取指定id的会议——响应参数类型定义
 * @params id {string} 会议ID
 * @params number {string} 会议室号
 * @params name {string} 会议名称
 * @params password {string} 会议密码
 * @params startTime {string} 会议开启时间
 * @params isEnableShared {boolean} 是否启用分享
 * @params sharedUrl {string} 分享观看的链接
 * @params isEnabledAutoRecording {boolean} 是否启用自动录制
 */
export type GetConferencesByIdResType = {
    id: string;
    number: string;
    name: string;
    password: string;
    startTime: string;
    isEnableShared: boolean;
    sharedUrl: string;
    isEnabledAutoRecording: boolean;
};

/**
 * 结束会议——请求参数类型定义
 * @params id {string} id （必填）
 * @params videoDir {string} 录像存放云存储的目录
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type EndConferencesReqType = {
    id: string;
    videoDir?: string;
    platformId?: string;
};

/**
 * 通过号码获取对应的会议——请求参数类型定义
 * @params number {string}  （必填）
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type GetConferencesLayoutByIdReqType = {
    number: string;
    platformId?: string;
};

/**
 * 通过号码获取对应的会议——响应参数类型定义
 * @params id {string} 会议ID
 * @params number {string} 会议室号
 * @params name {string} 会议名称
 * @params password {string} 会议密码
 * @params startTime {string} 会议开启时间
 * @params isEnableShared {boolean} 是否启用分享
 * @params sharedUrl {string} 分享观看的链接
 * @params isEnabledAutoRecording {boolean} 是否启用自动录制
 */
export type GetConferencesLayoutByIdResType = {
    id: string;
    number: string;
    name: string;
    password: string;
    startTime: string;
    isEnableShared: boolean;
    sharedUrl: string;
    isEnabledAutoRecording: boolean;
};

/**
 * 通过会议号结束会议——请求参数类型定义
 * @params number {string}  （必填）
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type EndConferencesByNumberReqType = {
    number: string;
    platformId?: string;
};

/**
 * 获取指定id的会议画面布局——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type GetConferenceLayoutByIdReqType = {
    id: string;
    platformId?: string;
};

/**
 * 获取指定id的会议画面布局——响应参数类型定义
 * @params id {string} 布局ID
 * @params isEnable {boolean} 是否启用
 * @params mode {LayoutModeCommonType} 布局模式
 * @params layoutType {LayoutTypeCommonType} 布局类型
 * @params videoRound {VideoRoundCommonType} 视频轮询配置
 * @params isEnabledSelfView {boolean} 是否开启自视
 * @params isEnabledVoiceIncentive {boolean} 是否开启语音激励
 * @params applicationTargets {any[]} 布局应用对象
 * @params sourceMemberIDs {any[]} 在布局里显示画面的成员ID
 * @params appointScreens {AppointMemberScreenCommonType[]} 有固定布局的画面
 */
export type GetConferenceLayoutByIdResType = {
    id: string;
    isEnable: boolean;
    mode: LayoutModeCommonType;
    layoutType: LayoutTypeCommonType;
    videoRound: VideoRoundCommonType;
    isEnabledSelfView: boolean;
    isEnabledVoiceIncentive: boolean;
    applicationTargets: any[];
    sourceMemberIDs: any[];
    appointScreens: AppointMemberScreenCommonType[];
};

/**
 * 设置会议画面布局——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params layoutType {LayoutTypeCommonType} 布局类型
 * @params appointScreens {AppointMemberScreenCommonType[]} 有固定布局的画面
 * @params layoutApplicationTargets {any[]} 布局应用对象
 * @params sourceMemberIDs {any[]} 布局显示对象集合
 * @params videoRound {VideoRoundCommonType} 视频轮询配置
 */
export type EditConferenceLayoutReqType = {
    id: string;
    platformID?: string;
    layoutType?: LayoutTypeCommonType;
    appointScreens?: AppointMemberScreenCommonType[];
    layoutApplicationTargets?: any[];
    sourceMemberIDs?: any[];
    videoRound?: VideoRoundCommonType;
};

/**
 * 获取指定id的会议级联会议画面布局——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type GetCascadeConferencesLayoutByIdReqType = {
    id: string;
    platformId?: string;
};

/**
 * 获取指定id的会议级联会议画面布局——响应参数类型定义
 * @params id {string} 布局ID
 * @params isEnable {boolean} 是否启用
 * @params mode {LayoutModeCommonType} 布局模式
 * @params layoutType {LayoutTypeCommonType} 布局类型
 * @params videoRound {VideoRoundCommonType} 视频轮询配置
 * @params isEnabledSelfView {boolean} 是否开启自视
 * @params isEnabledVoiceIncentive {boolean} 是否开启语音激励
 * @params applicationTargets {any[]} 布局应用对象
 * @params sourceMemberIDs {any[]} 在布局里显示画面的成员ID
 * @params appointScreens {AppointMemberScreenCommonType[]} 有固定布局的画面
 */
export type GetCascadeConferencesLayoutByIdResType = {
    id: string;
    isEnable: boolean;
    mode: LayoutModeCommonType;
    layoutType: LayoutTypeCommonType;
    videoRound: VideoRoundCommonType;
    isEnabledSelfView: boolean;
    isEnabledVoiceIncentive: boolean;
    applicationTargets: any[];
    sourceMemberIDs: any[];
    appointScreens: AppointMemberScreenCommonType[];
};

/**
 * 设置会议级联画面布局——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params layoutType {LayoutTypeCommonType} 布局类型
 * @params appointScreens {AppointMemberScreenCommonType[]} 有固定布局的画面
 * @params layoutApplicationTargets {any[]} 布局应用对象
 * @params sourceMemberIDs {any[]} 布局显示对象集合
 */
export type EditCascadeConferencesLayoutReqType = {
    id: string;
    platformID?: string;
    layoutType?: LayoutTypeCommonType;
    appointScreens?: AppointMemberScreenCommonType[];
    layoutApplicationTargets?: any[];
    sourceMemberIDs?: any[];
};

/**
 * 获取会议中的主持人列表——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type GetConferencesPresentersReqType = {
    id: string;
    platformId?: string;
};

/**
 * 获取会议中的主持人列表——响应参数类型定义
 * @params id {string} 成员ID
 * @params name {string} 成员名称
 * @params type {ConventioneerTypeCommonType} 会议成员类型
 * @params phone {string} 用户加入会议使用的号码
 * @params requestUri {string} 用户入会使用的Uri
 * @params conferenceID {string} 所在会议室
 * @params isPresenter {boolean} 是否为主持人
 * @params isMute {boolean} 是否被禁言
 * @params isSilence {boolean} 是否被静音
 * @params isBroadcast {boolean} 是否在广播中
 * @params isHideScreen {boolean} 是否画面被隐藏
 * @params mediaDevice {MediaDeviceCommonType} 媒体信息
 */
export type GetConferencesPresentersResType = {
    id: string;
    name: string;
    type: ConventioneerTypeCommonType;
    phone: string;
    requestUri: string;
    conferenceID: string;
    isPresenter: boolean;
    isMute: boolean;
    isSilence: boolean;
    isBroadcast: boolean;
    isHideScreen: boolean;
    mediaDevice: MediaDeviceCommonType;
};

/**
 * 获取会议中的成员列表——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type GetConferencesConventioneersReqType = {
    id: string;
    platformId?: string;
};

/**
 * 获取会议中的成员列表——响应参数类型定义
 * @params id {string} 成员ID
 * @params name {string} 成员名称
 * @params type {ConventioneerTypeCommonType} 会议成员类型
 * @params phone {string} 用户加入会议使用的号码
 * @params requestUri {string} 用户入会使用的Uri
 * @params conferenceID {string} 所在会议室
 * @params isPresenter {boolean} 是否为主持人
 * @params isMute {boolean} 是否被禁言
 * @params isSilence {boolean} 是否被静音
 * @params isBroadcast {boolean} 是否在广播中
 * @params isHideScreen {boolean} 是否画面被隐藏
 * @params mediaDevice {MediaDeviceCommonType} 媒体信息
 */
export type GetConferencesConventioneersResType = {
    id: string;
    name: string;
    type: ConventioneerTypeCommonType;
    phone: string;
    requestUri: string;
    conferenceID: string;
    isPresenter: boolean;
    isMute: boolean;
    isSilence: boolean;
    isBroadcast: boolean;
    isHideScreen: boolean;
    mediaDevice: MediaDeviceCommonType;
};

/**
 * 获取邀请记录列表——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type GetInviteRecordsReqType = {
    id: string;
    platformId?: string;
};

/**
 * 获取邀请记录列表——响应参数类型定义
 * @params callFails {ConventioneerOutCommonType[]} 呼叫失败
 * @params callSucceeds {ConventioneerOutCommonType[]} 呼叫成功
 */
export type GetInviteRecordsResType = {
    callFails: ConventioneerOutCommonType[];
    callSucceeds: ConventioneerOutCommonType[];
};

/**
 * 获取会议正在广播画面的成员——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type GetConferencesBroadcasterReqType = {
    id: string;
    platformId?: string;
};

/**
 * 获取会议正在广播画面的成员——响应参数类型定义
 * @params id {string} 成员ID
 * @params name {string} 成员名称
 * @params type {ConventioneerTypeCommonType} 会议成员类型
 * @params phone {string} 用户加入会议使用的号码
 * @params requestUri {string} 用户入会使用的Uri
 * @params conferenceID {string} 所在会议室
 * @params isPresenter {boolean} 是否为主持人
 * @params isMute {boolean} 是否被禁言
 * @params isSilence {boolean} 是否被静音
 * @params isBroadcast {boolean} 是否在广播中
 * @params isHideScreen {boolean} 是否画面被隐藏
 * @params mediaDevice {MediaDeviceCommonType} 媒体信息
 */
export type GetConferencesBroadcasterResType = {
    id: string;
    name: string;
    type: ConventioneerTypeCommonType;
    phone: string;
    requestUri: string;
    conferenceID: string;
    isPresenter: boolean;
    isMute: boolean;
    isSilence: boolean;
    isBroadcast: boolean;
    isHideScreen: boolean;
    mediaDevice: MediaDeviceCommonType;
};

/**
 * 获取会议中隐藏画面的成员列表——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} platformId
 */
export type GetHideConventioneersReqType = {
    id: string;
    platformId?: string;
};

/**
 * 获取会议中隐藏画面的成员列表——响应参数类型定义
 * @params id {string} 成员ID
 * @params name {string} 成员名称
 * @params type {ConventioneerTypeCommonType} 会议成员类型
 * @params phone {string} 用户加入会议使用的号码
 * @params requestUri {string} 用户入会使用的Uri
 * @params conferenceID {string} 所在会议室
 * @params isPresenter {boolean} 是否为主持人
 * @params isMute {boolean} 是否被禁言
 * @params isSilence {boolean} 是否被静音
 * @params isBroadcast {boolean} 是否在广播中
 * @params isHideScreen {boolean} 是否画面被隐藏
 * @params mediaDevice {MediaDeviceCommonType} 媒体信息
 */
export type GetHideConventioneersResType = {
    id: string;
    name: string;
    type: ConventioneerTypeCommonType;
    phone: string;
    requestUri: string;
    conferenceID: string;
    isPresenter: boolean;
    isMute: boolean;
    isSilence: boolean;
    isBroadcast: boolean;
    isHideScreen: boolean;
    mediaDevice: MediaDeviceCommonType;
};

/**
 * 获取会议的录制状态——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type GetConferencesRecordReqType = {
    id: string;
    platformId?: string;
};

/**
 * 获取会议的录制状态——响应参数类型定义
 * @params status {RecordStatusCommonType} 录播状态
 * @params lastStopDuration {number} 上一次暂停/停止时的录制时长，单位秒
 * @params lastStartTime {string} 上一次开始/继续录制的时间点(0时区)
 */
export type GetConferencesRecordResType = {
    status: RecordStatusCommonType;
    lastStopDuration: number;
    lastStartTime: string;
};

/**
 * 会议录制——请求参数类型定义
 * @params id {string} id （必填）
 * @params OperationType {number} 录制操作
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type RecordConferencesReqType = {
    id: string;
    OperationType?: number;
    platformId?: string;
};

/**
 * 获取会议的邀请信息——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type GetConferencesInvitationReqType = {
    id: string;
    platformId?: string;
};

/**
 * 获取会议的邀请信息——响应参数类型定义
 * @params sfbJoinUrl {string} 匿名入会链接
 * @params h323JoinIntranetUrl {string} H323入会内网链接
 * @params h323JoinExternalUrl {string} H323入会外网链接
 * @params liveBroadcastJoinUrl {string} 直播入会链接
 * @params webRTCJoinIntranetUrl {string} webRTC入会内网链接
 * @params webRTCJoinExternaUrl {string} webRTC入会外网链接
 * @params sipJoinIntranetUrl {string} SIP入会内网链接
 * @params sipJoinExternaUrl {string} SIP入会外网链接
 */
export type GetConferencesInvitationResType = {
    sfbJoinUrl: string;
    h323JoinIntranetUrl: string;
    h323JoinExternalUrl: string;
    liveBroadcastJoinUrl: string;
    webRTCJoinIntranetUrl: string;
    webRTCJoinExternaUrl: string;
    sipJoinIntranetUrl: string;
    sipJoinExternaUrl: string;
};

/**
 * 邀请电话入会——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params name {string} 电话号码
 * @params number {string} 电话号码
 */
export type InviteMeetingByPhoneReqType = {
    id: string;
    platformID?: string;
    name?: string;
    number?: string;
};

/**
 * 邀请账号入会——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} id
 * @params name {string} 名称
 */
export type InviteMeetingByAccountReqType = {
    id: string;
    platformID?: string;
    name?: string;
};

/**
 * 邀请终端入会——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params name {string} 终端名称
 * @params number {string} 终端号码
 * @params password {string} 终端密码
 * @params ip {string} IP
 * @params port {number} 端口
 */
export type InviteMeetingByTerminalReqType = {
    id: string;
    platformID?: string;
    name?: string;
    number?: string;
    password?: string;
    ip?: string;
    port?: number;
};

/**
 * 邀请Rtsp入会——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params url {string} RTSP的Url
 * @params id {string} id（可为空）
 * @params name {string} 名称（可为空）
 * @params rtspProtocolType {RtspProtocolCommonType} rtsp拉流协议
 */
export type InviteMeetingByRtspReqType = {
    id: string;
    platformID?: string;
    url?: string;
    name?: string;
    rtspProtocolType?: RtspProtocolCommonType;
};

/**
 * 邀请其他类型入会——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} id(设备的号码)
 * @params name {string} 名称
 * @params type {ProtocolTypeCommonType} 协议类型
 */
export type InviteMeetingByOtherReqType = {
    id: string;
    platformID?: string;
    name?: string;
    type?: ProtocolTypeCommonType;
};

/**
 * 创建会议——请求参数类型定义
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params name {string} 会议名称
 * @params password {string} 会议密码
 * @params number {string} 自定义的会议室号码
 * @params presenter {AccountInCommonType} 主持人账号
 * @params jointPresenters {AccountInCommonType[]} 联席主持人
 * @params isEnabledSelfView {boolean} 是否显示本地画面
 * @params isAutoRecording {boolean} 是否自动录制
 * @params isEnabledMute {boolean} 是否入会自动禁言
 * @params isLayoutSpeechExcitation {boolean} 是否演讲者模式
 * @params description {string} 描述
 */
export type AddConferencesReqType = {
    platformID?: string;
    name?: string;
    password?: string;
    number?: string;
    presenter?: AccountInCommonType;
    jointPresenters?: AccountInCommonType[];
    isEnabledSelfView?: boolean;
    isAutoRecording?: boolean;
    isEnabledMute?: boolean;
    isLayoutSpeechExcitation?: boolean;
    description?: string;
};

/**
 * 创建会议——响应参数类型定义
 * @params id {string} 会议ID
 * @params number {string} 会议室号
 * @params name {string} 会议名称
 * @params password {string} 会议密码
 * @params startTime {string} 会议开启时间
 * @params isEnableShared {boolean} 是否启用分享
 * @params sharedUrl {string} 分享观看的链接
 * @params isEnabledAutoRecording {boolean} 是否启用自动录制
 * @params isEnabledMute {boolean} 是否入会自动禁言
 * @params isLayoutSpeechExcitation {boolean} 是否演讲者模式
 * @params bingSip {string} 会议室绑定的sip号码
 */
export type AddConferencesResType = {
    id: string;
    number: string;
    name: string;
    password: string;
    startTime: string;
    isEnableShared: boolean;
    sharedUrl: string;
    isEnabledAutoRecording: boolean;
    isEnabledMute: boolean;
    isLayoutSpeechExcitation: boolean;
    bingSip: string;
};

/**
 * 踢出指定成员——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} 成员ID
 */
export type KickConventioneersReqType = {
    id: string;
    platformID?: string;
};

/**
 * 对指定成员(取消)禁言——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} 成员ID
 * @params isMute {boolean} 是否禁言
 */
export type SetConventioneersMuteReqType = {
    id: string;
    platformID?: string;
    isMute?: boolean;
};

/**
 * 对指定成员(取消)静音——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} 成员ID
 * @params isSilence {boolean} 是否静音
 */
export type SetConventioneersSilenceReqType = {
    id: string;
    platformID?: string;
    isSilence?: boolean;
};

/**
 * 对指定成员(取消)隔离——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} 成员ID
 * @params isIsolate {boolean} 是否静音
 */
export type SetConventioneersIsolateReqType = {
    id: string;
    platformID?: string;
    isIsolate?: boolean;
};

/**
 * (取消)广播指定成员画面——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} 成员ID
 */
export type SetConventioneersBroadcastReqType = {
    id: string;
    platformID?: string;
};

/**
 * (取消)隐藏指定成员画面——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} 成员ID
 * @params isHideScreen {boolean} 是否隐藏画面
 */
export type SetConventioneersScreenReqType = {
    id: string;
    platformID?: string;
    isHideScreen?: boolean;
};

/**
 * (取消)设置成员为级联会议室——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} 成员ID
 * @params isCascadeConference {boolean} 是否为级联的会议室
 */
export type EditConferenceCascadeReqType = {
    id: string;
    platformID?: string;
    isCascadeConference?: boolean;
};

/**
 * 设置会议画面默认布局——请求参数类型定义
 * @params id {string} id （必填）
 */
export type SetConferencesDefaultLayoutReqType = {
    id: string;
};

/**
 * (取消)设置会议字幕——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params isEnable {boolean} 是否启用
 * @params content {string} 字幕内容
 * @params fontSize {FontSizeCommonType} 字体大小
 * @params position {PositionCommonType} 字幕显示位置
 * @params fontColor {SubtitleColorCommonType} 字体颜色
 * @params backgroundColor {SubtitleColorCommonType} 背景颜色
 * @params isScroll {boolean} 字幕是否滚动
 */
export type SetConferencesSubtitleReqType = {
    id: string;
    platformID?: string;
    isEnable?: boolean;
    content?: string;
    fontSize?: FontSizeCommonType;
    position?: PositionCommonType;
    fontColor?: SubtitleColorCommonType;
    backgroundColor?: SubtitleColorCommonType;
    isScroll?: boolean;
};

/**
 * 设置会议主持人——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} 成员ID
 * @params isSetPresenter {boolean} 是否设置为主持人
 */
export type OpenConferencesLiveReqType = {
    id: string;
    platformID?: string;
    isSetPresenter?: boolean;
};

/**
 * 开启会议直播——请求参数类型定义
 * @params id {string} id （必填）
 * @params IsEnable {boolean} 是否开启会议直播
 * @params Address {string} 直播地址
 * @params Resolution {number} 直播分辨率
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type OpenConferenceLiveReqType = {
    id: string;
    IsEnable?: boolean;
    Address?: string;
    Resolution?: number;
    platformId?: string;
};

/**
 * 会议保活——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} 平台Id
 */
export type KeepaliveConferencesReqType = {
    id: string;
    platformId?: string;
};

/**
 * 会场改名——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} 成员ID
 * @params displayName {string} 会场名称 （必填）
 */
export type EditConferenceNameReqType = {
    id: string;
    platformID?: string;
    displayName: string;
};

/**
 * 打开摄像头——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} 成员ID
 */
export type OpenConferenceCameraReqType = {
    id: string;
    platformID?: string;
};

/**
 * 关闭摄像头——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} 成员ID
 */
export type CloseConferenceCameraReqType = {
    id: string;
    platformID?: string;
};

/**
 * 设为焦点——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params id {string} 成员ID
 */
export type SetConferenceFocusReqType = {
    id: string;
    platformID?: string;
};

/**
 * 获取MCU类型信息——响应参数类型定义
 * @params type {PlatformTypeCommonType} 平台类型
 * @params name {string} 平台类型名称
 */
export type GetMcuTypeResType = {
    type: PlatformTypeCommonType;
    name: string;
};

/**
 * 获取符合查询条件的MCU——请求参数类型定义
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type GetMcuDataReqType = {
    page?: number;
    per_page?: number;
    platformId?: string;
};

/**
 * 获取符合查询条件的MCU——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {MCUDataOutCommonType[]} 数据记录
 */
export type GetMcuDataResType = {
    totalCount: number;
    records: MCUDataOutCommonType[];
};

/**
 * 创建MCU——请求参数类型定义
 * @params type {PlatformTypeCommonType} 平台类型
 * @params name {string} MCU名称 （必填）
 * @params accessKeyID {string} 授权码 （必填）
 * @params accessKeySecret {string} 秘钥 （必填）
 * @params domain {string} 拉流地址 （必填）
 * @params description {string} 描述
 * @params extension {undefined} MCU拓展信息
 */
export type AddMcuDataReqType = {
    type?: PlatformTypeCommonType;
    name: string;
    accessKeyID: string;
    accessKeySecret: string;
    domain: string;
    description?: string;
    extension?: undefined;
};

/**
 * 创建MCU——响应参数类型定义
 * @params id {string} 标识
 * @params type {PlatformTypeCommonType} 平台类型
 * @params name {string} MCU名称
 * @params accessKeyID {string} 授权码
 * @params accessKeySecret {string} 秘钥
 * @params domain {string} IP地址
 * @params description {string} 描述
 * @params extension {undefined} 拓展信息
 */
export type AddMcuDataResType = {
    id: string;
    type: PlatformTypeCommonType;
    name: string;
    accessKeyID: string;
    accessKeySecret: string;
    domain: string;
    description: string;
    extension: undefined;
};

/**
 * 通过ID获取MCU——请求参数类型定义
 * @params id {string} id （必填）
 */
export type GetMcuDataByIdReqType = {
    id: string;
};

/**
 * 通过ID获取MCU——响应参数类型定义
 * @params id {string} 标识
 * @params type {PlatformTypeCommonType} 平台类型
 * @params name {string} MCU名称
 * @params accessKeyID {string} 授权码
 * @params accessKeySecret {string} 秘钥
 * @params domain {string} IP地址
 * @params description {string} 描述
 * @params extension {undefined} 拓展信息
 */
export type GetMcuDataByIdResType = {
    id: string;
    type: PlatformTypeCommonType;
    name: string;
    accessKeyID: string;
    accessKeySecret: string;
    domain: string;
    description: string;
    extension: undefined;
};

/**
 * 更新MCU——请求参数类型定义
 * @params id {string} id （必填）
 * @params type {PlatformTypeCommonType} 平台类型
 * @params name {string} MCU名称 （必填）
 * @params accessKeyID {string} 授权码 （必填）
 * @params accessKeySecret {string} 秘钥 （必填）
 * @params domain {string} 拉流地址 （必填）
 * @params description {string} 描述
 * @params extension {undefined} MCU拓展信息
 */
export type EditMcuDataReqType = {
    id: string;
    type?: PlatformTypeCommonType;
    name: string;
    accessKeyID: string;
    accessKeySecret: string;
    domain: string;
    description?: string;
    extension?: undefined;
};

/**
 * 删除MCU——请求参数类型定义
 * @params id {string} id （必填）
 */
export type DeleteMcuDataReqType = {
    id: string;
};

/**
 * 获取当前的会议平台——响应参数类型定义
 * @params type {PlatformTypeCommonType} 平台类型
 * @params id {string} 平台ID
 * @params name {string} 平台名称
 */
export type GetDefaultPlatformDataResType = {
    type: PlatformTypeCommonType;
    id: string;
    name: string;
};

/**
 * 切换当前的会议平台——请求参数类型定义
 * @params platformType {number} 0: yms 2X; 2: yms 4X; 3: GMeet （必填）
 */
export type SwitchPlatformReqType = {
    platformType: number;
};

/**
 * 通过ID获取平台信息——请求参数类型定义
 * @params type {number}  （必填）
 * @params id {string} id （必填）
 */
export type GetPlatformDataByIdReqType = {
    type: number;
    id: string;
};

/**
 * 通过ID获取平台信息——响应参数类型定义
 * @params type {PlatformTypeCommonType} 平台类型
 * @params id {string} 平台ID
 * @params name {string} 平台名称
 */
export type GetPlatformDataByIdResType = {
    type: PlatformTypeCommonType;
    id: string;
    name: string;
};

/**
 * 通过IP获取平台信息——请求参数类型定义
 * @params type {number}  （必填）
 * @params ip {string}  （必填）
 */
export type GetPlatformDataByIpReqType = {
    type: number;
    ip: string;
};

/**
 * 通过IP获取平台信息——响应参数类型定义
 * @params type {PlatformTypeCommonType} 平台类型
 * @params id {string} 平台ID
 * @params name {string} 平台名称
 */
export type GetPlatformDataByIpResType = {
    type: PlatformTypeCommonType;
    id: string;
    name: string;
};

/**
 * 获取全部平台信息——响应参数类型定义
 * @params type {PlatformTypeCommonType} 平台类型
 * @params id {string} 平台ID
 * @params name {string} 平台名称
 */
export type GetPlatformDataResType = {
    type: PlatformTypeCommonType;
    id: string;
    name: string;
};

/**
 * 获取全部平台的host信息——响应参数类型定义
 * @params type {PlatformTypeCommonType} 平台类型
 * @params id {string} 平台ID
 * @params name {string} 平台名称
 * @params host {string} 平台host
 */
export type GetPlatformDataHostResType = {
    type: PlatformTypeCommonType;
    id: string;
    name: string;
    host: string;
};

/**
 * 获取全部邀请策略——响应参数类型定义
 * @params strategyType {StrategyTypeCommonType} 策略类型
 * @params isEnable {boolean} 是否启用
 * @params description {string} 策略描述
 * @params strategies {StrategyConfigCommonType[]} 策略使用平台
 */
export type GetPlatformStrategyResType = {
    strategyType: StrategyTypeCommonType;
    isEnable: boolean;
    description: string;
    strategies: StrategyConfigCommonType[];
};

/**
 * 获取视频会议配置——响应参数类型定义
 * @params data {undefined} 配置对象-VideoConferenceServiceConfigs
 */
export type GetPlatformConfigResType = {
    data: undefined;
};

/**
 * 通过条件查找录制文件——请求参数类型定义
 * @params keyword {string} 模糊匹配关键字
 * @params StartTime {string} 开始时间 （必填）
 * @params EndTime {string} 结束时间 （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type GetRecordingsReqType = {
    keyword?: string;
    StartTime: string;
    EndTime: string;
    page?: number;
    per_page?: number;
    platformId?: string;
};

/**
 * 通过条件查找录制文件——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {RecordingOutCommonType[]} 数据记录
 */
export type GetRecordingsResType = {
    totalCount: number;
    records: RecordingOutCommonType[];
};

/**
 * 获取符合查询条件的终端和终端组——请求参数类型定义
 * @params keyword {string} 模糊匹配关键字 （必填）
 * @params MaxTotalCount {number} 最多查询总数 默认：50
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type SearchTerminalAndGroupReqType = {
    keyword: string;
    MaxTotalCount?: number;
    platformId?: string;
};

/**
 * 获取符合查询条件的终端和终端组——响应参数类型定义
 * @params terminals {TerminalOutReqCommonType} 终端列表
 * @params groups {OrganizationOutReqCommonType} 组列表
 */
export type SearchTerminalAndGroupResType = {
    terminals: TerminalOutReqCommonType;
    groups: OrganizationOutReqCommonType;
};

/**
 * 腾讯会议使用事件订阅（Webhook）(加密)——请求参数类型定义
 * @params check_str {string} 需要能够正确响应腾讯会议的请求验证参数
 */
export type TencentConferenceReqType = {
    check_str?: string;
};

/**
 * 腾讯会议信息回调（加密）——请求参数类型定义
 * @params data {string}
 */
export type TencentConferenceCallBackReqType = {
    data?: string;
};

/**
 * 分页查询组织架构下的终端——请求参数类型定义
 * @params id {string} id （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type GetOrganizationTerminalReqType = {
    id: string;
    page?: number;
    per_page?: number;
    platformId?: string;
};

/**
 * 分页查询组织架构下的终端——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {TerminalOutCommonType[]} 数据记录
 */
export type GetOrganizationTerminalResType = {
    totalCount: number;
    records: TerminalOutCommonType[];
};

/**
 * 批量查询组织架构下的终端——请求参数类型定义
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params organizationIds {any[]} 组id （必填）
 */
export type SearchTerminalOrganizationsReqType = {
    platformID?: string;
    organizationIds: any[];
};

/**
 * 批量查询组织架构下的终端——响应参数类型定义
 * @params id {string} 用户ID，即staffId
 * @params name {string} 名称
 * @params type {TerminalTypeCommonType} 类型
 * @params miniOrganization {MiniOrganizationCommonType} 所属分组
 * @params number {string} 号码
 * @params isOnline {boolean} 是否在线
 * @params paths {MiniOrganizationCommonType[]} 路径path
 */
export type SearchTerminalOrganizationsResType = {
    id: string;
    name: string;
    type: TerminalTypeCommonType;
    miniOrganization: MiniOrganizationCommonType;
    number: string;
    isOnline: boolean;
    paths: MiniOrganizationCommonType[];
};

/**
 * 获取指定ID的组织架构——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type VcsGetOrganizationsByIdReqType = {
    id: string;
    platformId?: string;
};

/**
 * 获取指定ID的组织架构——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 名称
 * @params parentID {string} 上级组织架构ID
 * @params index {number} 序号
 * @params isLeaf {boolean} 是否叶子节点
 * @params totalCount {number} 子终端数量（统计子子孙孙节点数量）
 * @params paths {MiniOrganizationCommonType[]} 路径path
 */
export type VcsGetOrganizationsByIdResType = {
    id: string;
    name: string;
    parentID: string;
    index: number;
    isLeaf: boolean;
    totalCount: number;
    paths: MiniOrganizationCommonType[];
};

/**
 * 获取全部组织架构——请求参数类型定义
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type GetOrganizationsReqType = {
    platformId?: string;
};

/**
 * 获取全部组织架构——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 名称
 * @params parentID {string} 上级组织架构ID
 * @params index {number} 序号
 * @params isLeaf {boolean} 是否叶子节点
 * @params totalCount {number} 子终端数量（统计子子孙孙节点数量）
 * @params paths {MiniOrganizationCommonType[]} 路径path
 */
export type GetOrganizationsResType = {
    id: string;
    name: string;
    parentID: string;
    index: number;
    isLeaf: boolean;
    totalCount: number;
    paths: MiniOrganizationCommonType[];
};

/**
 * 获取根组织架构——请求参数类型定义
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type VcsGetRootOrganizationsReqType = {
    platformId?: string;
};

/**
 * 获取根组织架构——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 名称
 * @params parentID {string} 上级组织架构ID
 * @params index {number} 序号
 * @params isLeaf {boolean} 是否叶子节点
 * @params totalCount {number} 子终端数量（统计子子孙孙节点数量）
 * @params paths {MiniOrganizationCommonType[]} 路径path
 */
export type VcsGetRootOrganizationsResType = {
    id: string;
    name: string;
    parentID: string;
    index: number;
    isLeaf: boolean;
    totalCount: number;
    paths: MiniOrganizationCommonType[];
};

/**
 * 获取组织架构下的子组织架构——请求参数类型定义
 * @params parentID {string} parentID （必填）
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type GetChildOrganizationsReqType = {
    parentID: string;
    platformId?: string;
};

/**
 * 获取组织架构下的子组织架构——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 名称
 * @params parentID {string} 上级组织架构ID
 * @params index {number} 序号
 * @params isLeaf {boolean} 是否叶子节点
 * @params totalCount {number} 子终端数量（统计子子孙孙节点数量）
 * @params paths {MiniOrganizationCommonType[]} 路径path
 */
export type GetChildOrganizationsResType = {
    id: string;
    name: string;
    parentID: string;
    index: number;
    isLeaf: boolean;
    totalCount: number;
    paths: MiniOrganizationCommonType[];
};

/**
 * 获取符合查询条件的终端——请求参数类型定义
 * @params keyword {string} 模糊匹配关键字
 * @params type {number} 查找的终端类型
 * @params organization {string} 所属组织架构
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type VcsGetTerminalsReqType = {
    keyword?: string;
    type?: number;
    organization?: string;
    page?: number;
    per_page?: number;
    platformId?: string;
};

/**
 * 获取符合查询条件的终端——响应参数类型定义
 * @params totalCount {number} 数据总条数
 * @params records {TerminalOutCommonType[]} 数据记录
 */
export type VcsGetTerminalsResType = {
    totalCount: number;
    records: TerminalOutCommonType[];
};

/**
 * 创建终端——请求参数类型定义
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params name {string} 名称 （必填）
 * @params type {TerminalTypeCommonType} 终端类型
 * @params organizationId {string} 所属分组
 * @params number {string} 终端号码 （必填）
 */
export type AddTerminalsReqType = {
    platformID?: string;
    name: string;
    type?: TerminalTypeCommonType;
    organizationId?: string;
    number: string;
};

/**
 * 创建终端——响应参数类型定义
 * @params id {string} 用户ID，即staffId
 * @params name {string} 名称
 * @params type {TerminalTypeCommonType} 类型
 * @params miniOrganization {MiniOrganizationCommonType} 所属分组
 * @params number {string} 号码
 * @params isOnline {boolean} 是否在线
 * @params paths {MiniOrganizationCommonType[]} 路径path
 */
export type AddTerminalsResType = {
    id: string;
    name: string;
    type: TerminalTypeCommonType;
    miniOrganization: MiniOrganizationCommonType;
    number: string;
    isOnline: boolean;
    paths: MiniOrganizationCommonType[];
};

/**
 * 通过ID获取终端——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type GetTerminalsByIdReqType = {
    id: string;
    platformId?: string;
};

/**
 * 通过ID获取终端——响应参数类型定义
 * @params id {string} 用户ID，即staffId
 * @params name {string} 名称
 * @params type {TerminalTypeCommonType} 类型
 * @params miniOrganization {MiniOrganizationCommonType} 所属分组
 * @params number {string} 号码
 * @params isOnline {boolean} 是否在线
 * @params paths {MiniOrganizationCommonType[]} 路径path
 */
export type GetTerminalsByIdResType = {
    id: string;
    name: string;
    type: TerminalTypeCommonType;
    miniOrganization: MiniOrganizationCommonType;
    number: string;
    isOnline: boolean;
    paths: MiniOrganizationCommonType[];
};

/**
 * 更新终端——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台）
 * @params name {string} 名称 （必填）
 * @params type {TerminalTypeCommonType} 终端类型
 * @params organizationId {string} 所属分组
 * @params number {string} 终端号码 （必填）
 */
export type VcsEditTerminalReqType = {
    id: string;
    platformID?: string;
    name: string;
    type?: TerminalTypeCommonType;
    organizationId?: string;
    number: string;
};

/**
 * 删除终端——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type VcsDeleteTerminalsReqType = {
    id: string;
    platformId?: string;
};

/**
 * 通过号码获取终端——请求参数类型定义
 * @params number {string}  （必填）
 * @params platformId {string} 平台id（不填使用默认平台）
 */
export type GetTerminalsByNumberReqType = {
    number: string;
    platformId?: string;
};

/**
 * 通过号码获取终端——响应参数类型定义
 * @params id {string} 用户ID，即staffId
 * @params name {string} 名称
 * @params type {TerminalTypeCommonType} 类型
 * @params miniOrganization {MiniOrganizationCommonType} 所属分组
 * @params number {string} 号码
 * @params isOnline {boolean} 是否在线
 * @params paths {MiniOrganizationCommonType[]} 路径path
 */
export type GetTerminalsByNumberResType = {
    id: string;
    name: string;
    type: TerminalTypeCommonType;
    miniOrganization: MiniOrganizationCommonType;
    number: string;
    isOnline: boolean;
    paths: MiniOrganizationCommonType[];
};

/**
 * 亿联平台会议信息回调(2x)——请求参数类型定义
 * @params domain {string}  （必填）
 */
export type YealinkConference2xCallBackReqType = {
    domain: string;
};
