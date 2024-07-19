/**
 * <br/>

*/
type RemindTypeCommonType = 0 | 1;

/**
 *
 * @params remindType {RemindTypeCommonType}
 * @params remindAdvanceMinutes {number}
 */
type RemainInCommonType = {
    remindType?: RemindTypeCommonType;
    remindAdvanceMinutes?: number;
};

/**
 * 号码类型<br/>
0:IPPhone,工作电话; <br/>
1:Mobile,手机; <br/>
2:HomePhone,家庭电话; <br/>
3:FacsimileTelephoneNumber,传真号码; <br/>
4:TelephoneNumber,其他电话; 
*/
type PhoneTypeCommonType = 0 | 1 | 2 | 3 | 4;

/**
 *
 * @params number {string}
 * @params type {PhoneTypeCommonType} 号码类型
 */
type PhoneDataCommonType = {
    number?: string;
    type?: PhoneTypeCommonType;
};

/**
 *
 * @params id {string}
 * @params name {string}
 * @params isPresenter {boolean}
 * @params phones {PhoneDataCommonType[]}
 */
type InviteeCommonType = {
    id?: string;
    name?: string;
    isPresenter?: boolean;
    phones?: PhoneDataCommonType[];
};

/**
 *
 * @params name {string}
 * @params startTime {string}
 * @params remains {RemainInCommonType[]}
 * @params remindContent {string}
 * @params conferenceMembers {InviteeCommonType[]}
 * @params priorityInviteType {PhoneTypeCommonType} 号码类型
 */
type VoiceConferenceAppointmentInCommonType = {
    name: string;
    startTime: string;
    remains?: RemainInCommonType[];
    remindContent?: string;
    conferenceMembers?: InviteeCommonType[];
    priorityInviteType?: PhoneTypeCommonType;
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
 * @params jobId {string}
 * @params remindType {RemindTypeCommonType}
 * @params remindAdvanceMinutes {number}
 */
type RemainOutCommonType = {
    jobId?: string;
    remindType?: RemindTypeCommonType;
    remindAdvanceMinutes?: number;
};

/**
 *
 * @params name {string}
 * @params startTime {string}
 * @params remindContent {string}
 * @params conferenceMembers {InviteeCommonType[]}
 * @params jobId {string}
 * @params remains {RemainOutCommonType[]}
 */
type VoiceConferenceAppointmentOutCommonType = {
    name?: string;
    startTime?: string;
    remindContent?: string;
    conferenceMembers?: InviteeCommonType[];
    jobId?: string;
    remains?: RemainOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {VoiceConferenceAppointmentOutCommonType[]} 记录
 */
type VoiceConferenceAppointmentOutReqCommonType = {
    totalCount?: number;
    records?: VoiceConferenceAppointmentOutCommonType[];
};

/**
 *
 * @params remindType {RemindTypeCommonType}
 * @params remindAdvanceMinutes {number}
 * @params jobId {string}
 */
type RemainUpdateInCommonType = {
    remindType?: RemindTypeCommonType;
    remindAdvanceMinutes?: number;
    jobId?: string;
};

/**
 *
 * @params name {string}
 * @params startTime {string}
 * @params remains {RemainUpdateInCommonType[]}
 * @params remindContent {string}
 * @params conferenceMembers {InviteeCommonType[]}
 * @params priorityInviteType {PhoneTypeCommonType} 号码类型
 */
type VoiceConferenceAppointmentUpdateInCommonType = {
    name: string;
    startTime: string;
    remains?: RemainUpdateInCommonType[];
    remindContent?: string;
    conferenceMembers?: InviteeCommonType[];
    priorityInviteType?: PhoneTypeCommonType;
};

/**
 * <br/>

*/
type NotifyRepeatTypeCommonType = 0 | 1 | 2 | 3 | 4;

/**
 *
 * @params id {string}
 * @params name {string}
 * @params title {string}
 * @params phones {PhoneDataCommonType[]}
 */
type NotifiedMemberCommonType = {
    id?: string;
    name?: string;
    title?: string;
    phones?: PhoneDataCommonType[];
};

/**
 *
 * @params name {string}
 * @params notifyContent {string}
 * @params playTimes {number}
 * @params startTime {string}
 * @params overTime {string}
 * @params notifyRepeatType {NotifyRepeatTypeCommonType}
 * @params priorityNotifyType {PhoneTypeCommonType} 号码类型
 * @params notifiedMembers {NotifiedMemberCommonType[]}
 */
type VoiceAppointmentInCommonType = {
    name?: string;
    notifyContent?: string;
    playTimes?: number;
    startTime?: string;
    overTime?: string;
    notifyRepeatType?: NotifyRepeatTypeCommonType;
    priorityNotifyType?: PhoneTypeCommonType;
    notifiedMembers?: NotifiedMemberCommonType[];
};

/**
 *
 * @params jobId {string}
 * @params executeTime {string}
 * @params isExecuted {boolean}
 * @params periodStart {string}
 * @params periodEnd {string}
 */
type ExecuteScheduleCommonType = {
    jobId?: string;
    executeTime?: string;
    isExecuted?: boolean;
    periodStart?: string;
    periodEnd?: string;
};

/**
 *
 * @params jobId {string}
 * @params name {string}
 * @params notifyContent {string}
 * @params playTimes {number}
 * @params startTime {string}
 * @params overTime {string}
 * @params notifyRepeatType {NotifyRepeatTypeCommonType}
 * @params priorityNotifyType {PhoneTypeCommonType} 号码类型
 * @params notifiedMembers {NotifiedMemberCommonType[]}
 * @params executeSchedules {ExecuteScheduleCommonType[]}
 */
type VoiceAppointmentOutCommonType = {
    jobId?: string;
    name?: string;
    notifyContent?: string;
    playTimes?: number;
    startTime?: string;
    overTime?: string;
    notifyRepeatType?: NotifyRepeatTypeCommonType;
    priorityNotifyType?: PhoneTypeCommonType;
    notifiedMembers?: NotifiedMemberCommonType[];
    executeSchedules?: ExecuteScheduleCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {VoiceAppointmentOutCommonType[]} 记录
 */
type VoiceAppointmentOutReqCommonType = {
    totalCount?: number;
    records?: VoiceAppointmentOutCommonType[];
};

/**
 *
 * @params jobId {string}
 * @params name {string}
 * @params notifyContent {string}
 * @params playTimes {number}
 * @params startTime {string}
 * @params priorityNotifyType {PhoneTypeCommonType} 号码类型
 * @params notifiedMembers {NotifiedMemberCommonType[]}
 * @params parentJobId {string}
 */
type SingleVoiceAppointmentInCommonType = {
    jobId?: string;
    name?: string;
    notifyContent?: string;
    playTimes?: number;
    startTime?: string;
    priorityNotifyType?: PhoneTypeCommonType;
    notifiedMembers?: NotifiedMemberCommonType[];
    parentJobId?: string;
};

/**
 * 广播组出参
 * @params id {string} ID
 * @params name {string} 名称
 * @params description {string} 描述
 * @params startTime {string} 开启时间
 * @params ownerID {string} 发起语音广播对应的用户ID
 * @params ownerName {string} 发起语音广播对应的用户名称
 * @params status {number} 广播状态
 * @params number {string} 广播组号
 * @params groupID {string} 广播关联组ID
 * @params password {string} 语音广播密码
 */
type BroadcastGroupOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
    startTime?: string;
    ownerID?: string;
    ownerName?: string;
    status?: number;
    number?: string;
    groupID?: string;
    password?: string;
};

/**
 * 重呼策略
 * @params isEnableRecall {boolean} 是否启用重呼
 * @params recallTimes {number} 重呼次数
 * @params recallPeriod {number} 重呼周期，单位：秒
 * @params isForcedHook {boolean} 是否启用强挂
 */
type RecallStrategyCommonType = {
    isEnableRecall?: boolean;
    recallTimes?: number;
    recallPeriod?: number;
    isForcedHook?: boolean;
};

/**
 * 开启语音广播入参
 * @params name {string} 名称
 * @params description {string} 描述
 * @params priorityInviteType {PhoneTypeCommonType} 号码类型
 * @params recallStrategy {RecallStrategyCommonType} 重呼策略
 * @params groupID {string} 关联组ID
 * @params isUseConfig {boolean} 是否采用配置
 * @params isBroadcasterQuitEnd {boolean} 广播员退出后是否结束广播
 * @params isAllowJoin {boolean} 是否允许用户拨号加入
 * @params password {string} 拨号加入密码
 * @params number {string} 主叫号码
 * @params broadcastMembers {InviteeCommonType[]} 待通知成员
 */
type BroadcastGroupInCommonType = {
    name?: string;
    description?: string;
    priorityInviteType?: PhoneTypeCommonType;
    recallStrategy?: RecallStrategyCommonType;
    groupID?: string;
    isUseConfig?: boolean;
    isBroadcasterQuitEnd?: boolean;
    isAllowJoin?: boolean;
    password?: string;
    number?: string;
    broadcastMembers?: InviteeCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {BroadcastGroupOutCommonType[]} 记录
 */
type BroadcastGroupOutReqCommonType = {
    totalCount?: number;
    records?: BroadcastGroupOutCommonType[];
};

/**
 * 组织架构信息
 * @params id {string} 标识
 * @params name {string} 名称
 */
type OrganizationBasicCommonType = {
    id?: string;
    name?: string;
};

/**
 * 电话基础信息
 * @params number {string} 电话号码
 * @params type {string} 电话类型
 */
type PhoneBasicCommonType = {
    number?: string;
    type?: string;
};

/**
 * 联系人详情
 * @params id {string} ID
 * @params name {string} 名称
 * @params title {string} 职位
 * @params account {string} 账号
 * @params photoPath {string} 头像路径
 * @params platformId {string} 平台Id
 * @params platformName {string} 平台名称
 * @params departments {OrganizationBasicCommonType[]} 所在组织架构
 * @params phones {PhoneBasicCommonType[]} 电话
 */
type ContactDetailCommonType = {
    id?: string;
    name?: string;
    title?: string;
    account?: string;
    photoPath?: string;
    platformId?: string;
    platformName?: string;
    departments?: OrganizationBasicCommonType[];
    phones?: PhoneBasicCommonType[];
};

/**
 * 群组会议成员操作状态<br/>
0:InCall,通话中; <br/>
1:CallIn,呼叫中; <br/>
2:CallFailed,呼叫失败; <br/>
3:NotAnswered,未接听; <br/>
4:HungUp,已挂断; 
*/
type GroupConferenceMemberOperationStateCommonType = 0 | 1 | 2 | 3 | 4;

/**
 * 广播成员
 * @params id {string} ID
 * @params name {string} 名称
 * @params title {string} 职位
 * @params associatedNormalUserID {string} 关联的联系人ID
 * @params phoneNumber {string} 关联电话
 * @params photoPath {string} 头像
 * @params normalUser {ContactDetailCommonType} 联系人基本信息
 * @params lastHangUpTime {string} 最近一次挂断时间
 * @params lastTurnOnTime {string} 最近一次接通时间
 * @params reInviteCount {number} 重新邀请次数
 * @params broadcastGroupID {string} 所在广播组ID
 * @params isOnline {boolean} 是否在广播内
 * @params isBroadcaster {boolean} 是否为广播员
 * @params isTalking {boolean} 是否正在和广播员对讲
 * @params operationState {GroupConferenceMemberOperationStateCommonType} 群组会议成员操作状态
 */
type BroadcastMemberCommonType = {
    id?: string;
    name?: string;
    title?: string;
    associatedNormalUserID?: string;
    phoneNumber?: string;
    photoPath?: string;
    normalUser?: ContactDetailCommonType;
    lastHangUpTime?: string;
    lastTurnOnTime?: string;
    reInviteCount?: number;
    broadcastGroupID?: string;
    isOnline?: boolean;
    isBroadcaster?: boolean;
    isTalking?: boolean;
    operationState?: GroupConferenceMemberOperationStateCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {BroadcastMemberCommonType[]} 记录
 */
type BroadcastMemberReqCommonType = {
    totalCount?: number;
    records?: BroadcastMemberCommonType[];
};

/**
 * <br/>

*/
type EntityOperationCommonType = 0 | 1 | 2;

/**
 * 电话的状态<br/>
0:NotBook; <br/>
1:Unknown; <br/>
2:Fault; <br/>
3:Forbidden; <br/>
4:IDLE; <br/>
5:CallIn; <br/>
6:CallOut; <br/>
7:InCall; <br/>
8:CallOutAttempt; <br/>
9:CallInAttempt; <br/>
10:Releasing; <br/>
11:Vagil; <br/>
12:NoLicense; <br/>
13:Schedule; <br/>
14:Butt; 
*/
type PhoneStateCommonType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

/**
 * 连接状态<br/>
0:Unknow; <br/>
1:Connected; <br/>
2:DisConnected; 
*/
type ConnectionStateCommonType = 0 | 1 | 2;

/**
 * 电话类型<br/>
0:Simulation; <br/>
1:AT0; <br/>
2:E1; <br/>
3:MGCP; <br/>
4:H248; <br/>
5:H323; <br/>
6:SIP; <br/>
7:PHS; <br/>
8:MS; <br/>
9:PLS; <br/>
10:EMTrunk; <br/>
11:EM; <br/>
12:AnalogTrunkUser; <br/>
13:AnalogTrunkGroupUser; <br/>
14:DigitalTrunkUser; <br/>
15:DigitalTrunkGroupUser; <br/>
16:DigitalTrunkDynamicGroup; <br/>
24:WIFI; <br/>
25:Virtual; <br/>
254:SimpleTrunkPhone; <br/>
255:Others; 
*/
type PhoneProtocolCommonType =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 24
    | 25
    | 254
    | 255;

/**
 * 电话配置状态<br/>
0:Normal; <br/>
1:Debt; <br/>
2:Halt; <br/>
3:HaltDebt; <br/>
4:Unknown; <br/>
5:OneWayHalt; 
*/
type PhoneConfigStatusCommonType = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * <br/>
0:FiexdPhone; <br/>
1:MobilePhone; <br/>
2:PHS; <br/>
3:Magnet; <br/>
4:Other; <br/>
5:ClusterVehicle; 
*/
type ShowTypeCommonType = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * 调度用户实体
 * @params id {string} ID
 * @params name {string} 名称
 * @params title {string} 职位
 */
type DispatchUserCommonType = {
    id?: string;
    name?: string;
    title?: string;
};

/**
 *
 * @params id {string} ID
 * @params name {string} 名称
 * @params description {string} 描述
 * @params path {string} 组织架构全路径
 * @params lastUpdateTime {string} 最后更新时间
 * @params number {string} 电话号码
 * @params ownerID {string} 拥有者ID
 * @params state {PhoneStateCommonType} 电话的状态
 * @params usn {string} USN
 * @params level {number} 电话级别
 * @params callRegion {number} 呼叫区
 * @params vncId {string} 所属VNC ID
 * @params connectionState {ConnectionStateCommonType} 连接状态
 * @params protocol {PhoneProtocolCommonType} 电话类型
 * @params configStatus {PhoneConfigStatusCommonType} 电话配置状态
 * @params showType {ShowTypeCommonType} 显示类型
 * @params stationId {string} 所在的站点
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params usageType {string} 使用类型
 * @params authCode {string} 校验
 * @params owner {DispatchUserCommonType} 电话拥有者
 */
type PhoneCommonType = {
    id?: string;
    name?: string;
    description?: string;
    path?: string;
    lastUpdateTime?: string;
    number?: string;
    ownerID?: string;
    state?: PhoneStateCommonType;
    usn?: string;
    level?: number;
    callRegion?: number;
    vncId?: string;
    connectionState?: ConnectionStateCommonType;
    protocol?: PhoneProtocolCommonType;
    configStatus?: PhoneConfigStatusCommonType;
    showType?: ShowTypeCommonType;
    stationId?: string;
    longitude?: number;
    latitude?: number;
    usageType?: string;
    authCode?: string;
    owner?: DispatchUserCommonType;
};

/**
 * 电话数据包装类
 * @params actionType {number} 操作类型
 * @params isSucceed {boolean} 操作是否成功
 * @params errorMessage {string} 失败错误信息
 * @params oldPhoneID {string} 旧电话Id
 * @params actionPhone {PhoneCommonType} 操作的电话
 */
type RefreshPhoneDataCommonType = {
    actionType?: number;
    isSucceed?: boolean;
    errorMessage?: string;
    oldPhoneID?: string;
    actionPhone?: PhoneCommonType;
};

/**
 * 线路组实体
 * @params id {string} ID
 * @params name {string} 名称
 * @params description {string} 描述
 * @params path {string} 组织架构全路径
 * @params lastUpdateTime {string} 最后更新时间
 * @params accessNumber {string} 接入码
 * @params vncId {string} 所属VNC ID
 * @params groupId {string} 线路组ID
 * @params isNightServiceOn {boolean} 是否开启了夜服
 */
type PhoneLineGroupCommonType = {
    id?: string;
    name?: string;
    description?: string;
    path?: string;
    lastUpdateTime?: string;
    accessNumber?: string;
    vncId?: string;
    groupId?: string;
    isNightServiceOn?: boolean;
};

/**
 * 线路组数据包装类
 * @params actionType {number} 操作类型
 * @params isSucceed {boolean} 操作是否成功
 * @params errorMessage {string} 失败错误信息
 * @params actionPhoneLineGroup {PhoneLineGroupCommonType} 操作的线路组
 */
type RefreshPhoneLineGroupDataCommonType = {
    actionType?: number;
    isSucceed?: boolean;
    errorMessage?: string;
    actionPhoneLineGroup?: PhoneLineGroupCommonType;
};

/**
 * NC刷新电话回调实体
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 * @params bizName {string} 回调业务名称
 * @params phoneData {RefreshPhoneDataCommonType[]} 电话集合
 * @params phoneLineGroupData {RefreshPhoneLineGroupDataCommonType[]} 电话线路集合
 * @params percentage {number} 处理百分比
 * @params aborted {boolean} 是否处理中断
 * @params errorMessage {string} 中断原因
 */
type RefreshPhoneCallbackCommonType = {
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
    bizName?: string;
    phoneData?: RefreshPhoneDataCommonType[];
    phoneLineGroupData?: RefreshPhoneLineGroupDataCommonType[];
    percentage?: number;
    aborted?: boolean;
    errorMessage?: string;
};

/**
 * 中继群类型<br/>
0:PRA; <br/>
1:AT0; <br/>
2:SIP; <br/>
3:H323; <br/>
4:ISUP; <br/>
5:TUP; <br/>
6:UPRA; <br/>
7:NoOne; <br/>
8:User; <br/>
9:EM; <br/>
255:Invalid; 
*/
type TrunkGroupTypeCommonType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 255;

/**
 * 中继群物理状态<br/>
0:Normal; <br/>
1:Fault; <br/>
2:Block; <br/>
255:Invalid; 
*/
type PhysicalStateCommonType = 0 | 1 | 2 | 255;

/**
 * 中继群配置信息
 * @params trunkGroupNumber {number} 中继群号
 * @params trunkGroupDescription {string} 中继群描述
 * @params dualSystemAttribute {boolean} 双机设备属性
 * @params callAreaInHost {number} 呼叫区
 * @params trunkGroupType {TrunkGroupTypeCommonType} 中继群类型
 * @params callPriority {number} 优先级
 * @params maxCall {number} 最大呼叫并发数
 * @params effectiveDate {number} 有效日期(8Bit日，7Bit一，6Bit二， 5Bit三， 4Bit四， 3Bit五， 2Bit六， 1Bit未定义)
 * @params effectiveTime {string} 有效时间
 * @params physicalState {PhysicalStateCommonType} 物理状态
 * @params isEnable {boolean} 是否启用
 */
type TrunkGroupConfigCommonType = {
    trunkGroupNumber?: number;
    trunkGroupDescription?: string;
    dualSystemAttribute?: boolean;
    callAreaInHost?: number;
    trunkGroupType?: TrunkGroupTypeCommonType;
    callPriority?: number;
    maxCall?: number;
    effectiveDate?: number;
    effectiveTime?: string;
    physicalState?: PhysicalStateCommonType;
    isEnable?: boolean;
};

/**
 * 刷新中继群配置回调
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 * @params bizName {string} 回调业务名称
 * @params result {boolean} 刷新结果
 * @params configs {TrunkGroupConfigCommonType[]} 中继群配置
 * @params vncId {string} 相关的VNC标识
 */
type RefreshTrunkGroupConfigCallBackCommonType = {
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
    bizName?: string;
    result?: boolean;
    configs?: TrunkGroupConfigCommonType[];
    vncId?: string;
};

/**
 * 传真状态枚举<br/>
0:Prepare; <br/>
1:Sending; <br/>
2:SendFail; <br/>
3:SendSuccess; <br/>
4:ReceiveSuccess; <br/>
5:Delete; <br/>
6:Cancel; <br/>
7:FileNotFound; <br/>
8:ConnectError; 
*/
type FaxStatusCommonType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 *
 * @params id {string}
 * @params name {string}
 * @params fullPath {string}
 * @params length {number}
 */
type FileRecordCommonType = {
    id?: string;
    name?: string;
    fullPath?: string;
    length?: number;
};

/**
 * 传真数据
 * @params id {string} ID
 * @params title {string} 主题
 * @params faxNumber {string} 传真号码
 * @params internationalCode {string} 国际区号
 * @params isRead {boolean} true 已读 / false 未读
 * @params isSend {boolean} 发件/收件 标识true 表示是发件
 * @params longDistanceCode {string} 长途区号
 * @params memo {string} 备注
 * @params receiveCompany {string} 收件人公司
 * @params receiver {string} 收件人
 * @params receiverID {string} 收件人ID
 * @params receiverTitle {string} 收件人职位
 * @params sendCompany {string} 发件人公司
 * @params sender {string} 发件人
 * @params senderID {string} 发件人ID
 * @params senderTitle {string} 发件人职位
 * @params sendFirst {boolean} 是否优先发送
 * @params sendTime {string} 发送时间
 * @params status {FaxStatusCommonType} 发送状态
 * @params files {FileRecordCommonType[]} 传真的文件列表
 * @params extension {string} 拓展字段
 */
type FaxOutCommonType = {
    id?: string;
    title?: string;
    faxNumber?: string;
    internationalCode?: string;
    isRead?: boolean;
    isSend?: boolean;
    longDistanceCode?: string;
    memo?: string;
    receiveCompany?: string;
    receiver?: string;
    receiverID?: string;
    receiverTitle?: string;
    sendCompany?: string;
    sender?: string;
    senderID?: string;
    senderTitle?: string;
    sendFirst?: boolean;
    sendTime?: string;
    status?: FaxStatusCommonType;
    files?: FileRecordCommonType[];
    extension?: string;
};

/**
 * 传真事件类型<br/>
0:Sending,开始发送; <br/>
1:Sent,发送完成; <br/>
2:Received,接收; <br/>
3:Abandoned,传真被移除进回收站; <br/>
4:Recovered,传真从回收站恢复; <br/>
5:Read,传真已读; <br/>
6:ForeverAbandoned,传真被永久删除; 
*/
type FaxEventCommonType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * 传真状态回调实体
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 * @params bizName {string} 回调业务名称
 * @params fax {FaxOutCommonType} 传真对象
 * @params state {FaxEventCommonType} 传真状态
 */
type FaxStateCallbackCommonType = {
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
    bizName?: string;
    fax?: FaxOutCommonType;
    state?: FaxEventCommonType;
};

/**
 *
 * @params phoneNumber {string}
 * @params cameras {any[]}
 */
type PhoneCameraCommonType = {
    phoneNumber?: string;
    cameras?: any[];
};

/**
 * 音视频联动
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 * @params bizName {string} 回调业务名称
 * @params callCameras {PhoneCameraCommonType[]} 绑定监控的号码
 */
type CallVideoCallbackCommonType = {
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
    bizName?: string;
    callCameras?: PhoneCameraCommonType[];
};

/**
 * 夜服状态回调
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 * @params bizName {string} 回调业务名称
 * @params isNightServiceOn {boolean} 是否开启夜服
 * @params accessNumber {string} 夜服操作的线路组的接入码
 * @params groupID {string} 夜服操作的线路组的ID
 * @params operationResult {boolean} 操作结果
 */
type NightServiceStateCallbackCommonType = {
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
    bizName?: string;
    isNightServiceOn?: boolean;
    accessNumber?: string;
    groupID?: string;
    operationResult?: boolean;
};

/**
 * 呼叫入参
 * @params caller {string} 主叫
 * @params called {string} 被叫
 */
type CallOutInCommonType = {
    caller: string;
    called: string;
};

/**
 * 呼叫入参
 * @params caller {string} 主叫
 * @params calledNuChatNormalUserId {string} 被叫用户id
 */
type NuChatCallOutInCommonType = {
    caller: string;
    calledNuChatNormalUserId: string;
};

/**
 * 强挂指定号码
 * @params phone {string} 指定号码
 */
type ForcedHookInCommonType = {
    phone: string;
};

/**
 * 接听入参
 * @params line {string} 用于接听的线路号码
 * @params callInPhone {string} 呼入的号码
 */
type AnswerInCommonType = {
    line: string;
    callInPhone: string;
};

/**
 * 强业务入参
 * @params line {string} 电话线路
 * @params destination {string} 目标电话
 */
type AdvancedCallInCommonType = {
    line: string;
    destination: string;
};

/**
 * 号码配置
 * @params outGoingMinLength {number} 中继出局最小长度
 * @params outGoingPrefix {string} 中继出局前缀
 * @params nonLocalMobileNumberPrefix {string} 非本地号码变换前缀
 * @params needNonLocalMobileNumberTransformation {boolean} 是否需要非本地手机号码变换true: (默认)需要变换,根据AreaCode确定本地区域,然后从号码区域库中找出所有本地号码前缀来判定一个号码是否为本地,非本地号码将自动加上 NonLocalMobileNumberPrefixfalse: 不作任何变换
 * @params mobileNumberLength {number} 手机号码长度
 * @params mobilePrefix {string} 手机前缀
 * @params areaCode {string} 区域码
 */
type NumberConfigCommonType = {
    outGoingMinLength?: number;
    outGoingPrefix?: string;
    nonLocalMobileNumberPrefix?: string;
    needNonLocalMobileNumberTransformation?: boolean;
    mobileNumberLength?: number;
    mobilePrefix?: string;
    areaCode?: string;
};

/**
 * <br/>

*/
type ClientContextTypeCommonType = 0 | 1;

/**
 * 客户端上下文对象
 * @params loginedUserID {string} 登录的联系人ID
 * @params loginedUserName {string} 登录的联系人名称
 * @params ip {string} 登录地址
 * @params sessionID {string} 登录会话ID
 * @params type {ClientContextTypeCommonType} 用户Token,0表示SignalR,1表示TCP
 * @params isInvalid {boolean} 标识该上下文是否为无效的
 * @params loginTime {string} 登录的时间
 * @params token {string} 用户Token
 */
type ClientContextOutCommonType = {
    loginedUserID?: string;
    loginedUserName?: string;
    ip?: string;
    sessionID?: string;
    type?: ClientContextTypeCommonType;
    isInvalid?: boolean;
    loginTime?: string;
    token?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ClientContextOutCommonType[]} 记录
 */
type ClientContextOutReqCommonType = {
    totalCount?: number;
    records?: ClientContextOutCommonType[];
};

/**
 * <br/>

*/
type ClientTypeCommonType = 0 | 1 | 2 | 3;

/**
 * 命令参数In
 * @params cmdText {string} 命令字符串
 */
type CommandInCommonType = {
    cmdText?: string;
};

/**
 * 通知对象<br/>
0:All,通知所有人; <br/>
1:Master,通知主持人; <br/>
2:Secretary,通知会议秘书; 
*/
type NotifyObjectCommonType = 0 | 1 | 2;

/**
 * 退出方式<br/>
0:Continue; <br/>
1:Exit; 
*/
type ExitTypeCommonType = 0 | 1;

/**
 * 区域语言<br/>
48:Chinese; <br/>
64:English; 
*/
type CultureCommonType = 48 | 64;

/**
 * 会议错误码<br/>
0:SUCCESS,操作成功; <br/>
1:GENERAL_FAILURE,一般性错误(在无法确定具体错误原因时使用); <br/>
2:UNSUPPORTED_VERSION,不支持的版本; <br/>
3:TIMEOUT,API执行超时; <br/>
4:ROOM_RELEASE,会议室释放; <br/>
5:INVITE_FAILURE,邀请失败及原因值; <br/>
20001:EXCEED_API_CAPABILITY,超过了最大并发操作次数; <br/>
20002:UNSUPPORTED_COMMAND,不支持的操作或者命令字; <br/>
30000:SERVICE_ALLOC_CMSUNIT_FAIL,会议室资源不足; <br/>
40000:DEVICE_OFFLINE,和设备的通信中断; <br/>
40001:DEVICE_ALLOC_CONF_FAIL,设备资源不够; 
*/
type CODECommonType = 0 | 1 | 2 | 3 | 4 | 5 | 20001 | 20002 | 30000 | 40000 | 40001;

/**
 * <br/>
0:Release,会议室释放; <br/>
1:InUsing,正在使用; 
*/
type RoomStateCommonType = 0 | 1;

/**
 * <br/>
0:Running,通话状态; <br/>
1:CallOut,呼叫正在呼出, 被叫还没有振铃; <br/>
2:Calling,呼叫状态; <br/>
3:Alerting,振铃状态; <br/>
4:Idle,空闲状态; <br/>
5:Unknow,未知状态; 
*/
type ConferenceMemberCallStateCommonType = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * 会议成员状态
 * @params conferenceID {string} 会议室号
 * @params conferenceNumber {number} 会议室号
 * @params phoneNumber {string} 会议室成员号码
 * @params isChairMan {boolean} 标识是否为主持人
 * @params isForbid {boolean} 是否禁言
 * @params isolated {boolean} 是否被隔离
 * @params state {ConferenceMemberCallStateCommonType} 电话状态
 * @params isInvited {boolean} 标识是否邀请成功
 * @params isSpeaking {boolean} 是否正在发言
 * @params isPrivateChat {boolean} 是否正在私聊
 */
type ConferenceMemberStateCommonType = {
    conferenceID?: string;
    conferenceNumber?: number;
    phoneNumber?: string;
    isChairMan?: boolean;
    isForbid?: boolean;
    isolated?: boolean;
    state?: ConferenceMemberCallStateCommonType;
    isInvited?: boolean;
    isSpeaking?: boolean;
    isPrivateChat?: boolean;
};

/**
 *
 * @params messageCode {CODECommonType} 消息码
 * @params id {string} 会议室标识
 * @params name {string} 会议室名称
 * @params conferenceID {number} 会议室号
 * @params isLock {boolean} 是否加锁
 * @params remainTime {number} 剩余时间
 * @params usedTime {number} 已经使用的时间
 * @params conferenceRoomState {RoomStateCommonType} 会议室状态
 * @params calledMember {number} 已经进入会议人数
 * @params totalCallMember {number} 总会议室人数
 * @params memberStates {ConferenceMemberStateCommonType[]} 会议成员状态
 */
type ConferenceStateCommonType = {
    messageCode?: CODECommonType;
    id?: string;
    name?: string;
    conferenceID?: number;
    isLock?: boolean;
    remainTime?: number;
    usedTime?: number;
    conferenceRoomState?: RoomStateCommonType;
    calledMember?: number;
    totalCallMember?: number;
    memberStates?: ConferenceMemberStateCommonType[];
};

/**
 * 语音会议模式 0:自由模式；1：对讲模式<br/>
0:Default,自由模式; <br/>
1:Talkback,对讲模式; 
*/
type ModeCommonType = 0 | 1;

/**
 * 会议数据
 * @params lessMinuteNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterChangeNotify {NotifyObjectCommonType} 通知对象
 * @params leaveMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params enterMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterEnter {string}
 * @params memberEnter {string}
 * @params exitMeeting {string}
 * @params masterChange {string}
 * @params lessOneMinute {string}
 * @params inNotifyVoice {string}
 * @params reportNumberBits {number}
 * @params masterExit {ExitTypeCommonType} 退出方式
 * @params reportLang {CultureCommonType} 区域语言
 * @params meetingTime {number}
 * @params meetingPhone {string}
 * @params needRecord {boolean}
 * @params displayNumber {string}
 * @params appointedConferenceID {number}
 * @params isMuteJoinConference {boolean}
 * @params id {string} ID
 * @params name {string} 名称
 * @params description {string} 描述
 * @params conferenceId {number} 会议ID
 * @params conferenceServerId {string} 当前所在的会议服务器
 * @params conferenceCapacity {number} 会议室容量
 * @params conferenceTime {number} 会议室时长
 * @params state {ConferenceStateCommonType} 会议室状态 // add by liujian 2012-7-17 11:12:13
 * @params recallStrategy {RecallStrategyCommonType} 重呼策略
 * @params priorityInviteType {PhoneTypeCommonType} 号码类型
 * @params groupID {string} 会议关联组ID
 * @params isStartByGroup {boolean} 是否采用组开启
 * @params numberList {string} 号码列表
 * @params recallConfig {string} 重呼配置
 * @params isEmergency {boolean} 是否紧急会议
 * @params isInfiniteRecall {boolean} 是否开启无限重呼
 * @params startTime {string} 会议开启时间
 * @params mode {ModeCommonType} 语音会议模式 0:自由模式；1：对讲模式
 */
type ConferenceCommonType = {
    lessMinuteNotifyObject?: NotifyObjectCommonType;
    masterChangeNotify?: NotifyObjectCommonType;
    leaveMeetingNotifyObject?: NotifyObjectCommonType;
    enterMeetingNotifyObject?: NotifyObjectCommonType;
    masterEnter?: string;
    memberEnter?: string;
    exitMeeting?: string;
    masterChange?: string;
    lessOneMinute?: string;
    inNotifyVoice?: string;
    reportNumberBits?: number;
    masterExit?: ExitTypeCommonType;
    reportLang?: CultureCommonType;
    meetingTime?: number;
    meetingPhone?: string;
    needRecord?: boolean;
    displayNumber?: string;
    appointedConferenceID?: number;
    isMuteJoinConference?: boolean;
    id?: string;
    name?: string;
    description?: string;
    conferenceId?: number;
    conferenceServerId?: string;
    conferenceCapacity?: number;
    conferenceTime?: number;
    state?: ConferenceStateCommonType;
    recallStrategy?: RecallStrategyCommonType;
    priorityInviteType?: PhoneTypeCommonType;
    groupID?: string;
    isStartByGroup?: boolean;
    numberList?: string;
    recallConfig?: string;
    isEmergency?: boolean;
    isInfiniteRecall?: boolean;
    startTime?: string;
    mode?: ModeCommonType;
};

/**
 *
 * @params lessMinuteNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterChangeNotify {NotifyObjectCommonType} 通知对象
 * @params leaveMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params enterMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterEnter {string}
 * @params memberEnter {string}
 * @params exitMeeting {string}
 * @params masterChange {string}
 * @params lessOneMinute {string}
 * @params inNotifyVoice {string}
 * @params reportNumberBits {number}
 * @params masterExit {ExitTypeCommonType} 退出方式
 * @params reportLang {CultureCommonType} 区域语言
 * @params meetingTime {number}
 * @params meetingPhone {string}
 * @params needRecord {boolean}
 * @params displayNumber {string}
 * @params appointedConferenceID {number}
 * @params isMuteJoinConference {boolean}
 * @params name {string}
 * @params description {string}
 * @params conferenceServerId {string}
 * @params conferenceMembers {InviteeCommonType[]}
 * @params recallStrategy {RecallStrategyCommonType} 重呼策略
 * @params priorityInviteType {PhoneTypeCommonType} 号码类型
 * @params groupID {string}
 * @params conferenceCapacity {number}
 * @params isEmergency {boolean}
 * @params mode {ModeCommonType} 语音会议模式 0:自由模式；1：对讲模式
 */
type ConferenceInCommonType = {
    lessMinuteNotifyObject?: NotifyObjectCommonType;
    masterChangeNotify?: NotifyObjectCommonType;
    leaveMeetingNotifyObject?: NotifyObjectCommonType;
    enterMeetingNotifyObject?: NotifyObjectCommonType;
    masterEnter?: string;
    memberEnter?: string;
    exitMeeting?: string;
    masterChange?: string;
    lessOneMinute?: string;
    inNotifyVoice?: string;
    reportNumberBits?: number;
    masterExit?: ExitTypeCommonType;
    reportLang?: CultureCommonType;
    meetingTime?: number;
    meetingPhone?: string;
    needRecord?: boolean;
    displayNumber?: string;
    appointedConferenceID?: number;
    isMuteJoinConference?: boolean;
    name?: string;
    description?: string;
    conferenceServerId?: string;
    conferenceMembers?: InviteeCommonType[];
    recallStrategy?: RecallStrategyCommonType;
    priorityInviteType?: PhoneTypeCommonType;
    groupID?: string;
    conferenceCapacity?: number;
    isEmergency?: boolean;
    mode?: ModeCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ConferenceCommonType[]} 记录
 */
type ConferenceReqCommonType = {
    totalCount?: number;
    records?: ConferenceCommonType[];
};

/**
 * 切换会议模式
 * @params mode {number} 0:自由模式；1：对讲模式
 */
type ChangeConferenceModeInCommonType = {
    mode: number;
};

/**
 * 成员类型<br/>
0:Person,普通用户; <br/>
1:Master,主持人; <br/>
2:Secretary,秘书; <br/>
3:Listener,听众; 
*/
type MemberTypeCommonType = 0 | 1 | 2 | 3;

/**
 * 会议成员
 * @params id {string} ID
 * @params name {string} 名称
 * @params title {string} 职位
 * @params associatedNormalUserID {string} 关联的联系人ID
 * @params phoneNumber {string} 关联电话
 * @params photoPath {string} 头像
 * @params normalUser {ContactDetailCommonType} 联系人基本信息
 * @params lastHangUpTime {string} 最近一次挂断时间
 * @params lastTurnOnTime {string} 最近一次接通时间
 * @params reInviteCount {number} 重新邀请次数
 * @params conferenceID {string} 所在会议室ID
 * @params type {MemberTypeCommonType} 成员类型
 * @params state {ConferenceMemberStateCommonType} 会议成员状态
 * @params onlineState {ConferenceMemberCallStateCommonType} 会议成员是否入会的状态
 * @params operationState {GroupConferenceMemberOperationStateCommonType} 群组会议成员操作状态
 */
type ConferenceMemberCommonType = {
    id?: string;
    name?: string;
    title?: string;
    associatedNormalUserID?: string;
    phoneNumber?: string;
    photoPath?: string;
    normalUser?: ContactDetailCommonType;
    lastHangUpTime?: string;
    lastTurnOnTime?: string;
    reInviteCount?: number;
    conferenceID?: string;
    type?: MemberTypeCommonType;
    state?: ConferenceMemberStateCommonType;
    onlineState?: ConferenceMemberCallStateCommonType;
    operationState?: GroupConferenceMemberOperationStateCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ConferenceMemberCommonType[]} 记录
 */
type ConferenceMemberReqCommonType = {
    totalCount?: number;
    records?: ConferenceMemberCommonType[];
};

/**
 * 线路实体
 * @params id {string} ID
 * @params name {string} 名称
 * @params description {string} 描述
 * @params path {string} 组织架构全路径
 * @params lastUpdateTime {string} 最后更新时间
 * @params number {string} 电话号码
 * @params ownerID {string} 拥有者ID
 * @params state {PhoneStateCommonType} 电话的状态
 * @params usn {string} USN
 * @params level {number} 电话级别
 * @params callRegion {number} 呼叫区
 * @params vncId {string} 所属VNC ID
 * @params connectionState {ConnectionStateCommonType} 连接状态
 * @params protocol {PhoneProtocolCommonType} 电话类型
 * @params configStatus {PhoneConfigStatusCommonType} 电话配置状态
 * @params showType {ShowTypeCommonType} 显示类型
 * @params stationId {string} 所在的站点
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params usageType {string} 使用类型
 * @params authCode {string} 校验
 * @params owner {DispatchUserCommonType} 电话拥有者
 * @params dcsId {string} 所属DCS ID
 * @params groupId {string} 所属线路组ID
 */
type PhoneLineCommonType = {
    id?: string;
    name?: string;
    description?: string;
    path?: string;
    lastUpdateTime?: string;
    number?: string;
    ownerID?: string;
    state?: PhoneStateCommonType;
    usn?: string;
    level?: number;
    callRegion?: number;
    vncId?: string;
    connectionState?: ConnectionStateCommonType;
    protocol?: PhoneProtocolCommonType;
    configStatus?: PhoneConfigStatusCommonType;
    showType?: ShowTypeCommonType;
    stationId?: string;
    longitude?: number;
    latitude?: number;
    usageType?: string;
    authCode?: string;
    owner?: DispatchUserCommonType;
    dcsId?: string;
    groupId?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {PhoneLineCommonType[]} 记录
 */
type PhoneLineReqCommonType = {
    totalCount?: number;
    records?: PhoneLineCommonType[];
};

/**
 * 会议记录类型<br/>
1:VoiceConference; <br/>
2:VideoConference; <br/>
4:Broadcast; <br/>
8:RecordNotify; 
*/
type ConferenceRecordTypeCommonType = 1 | 2 | 4 | 8;

/**
 * 会议记录
 * @params id {string} 会议ID
 * @params ownerID {string} 会议发起人ID
 * @params ownerName {string} 会议发起人名称
 * @params ownerTitle {string} 会议发起人职务
 * @params name {string} 会议名称
 * @params number {string} 会议号码
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params type {ConferenceRecordTypeCommonType} 会议记录类型
 * @params description {string} 描述
 * @params groupID {string} 所属组ID
 * @params password {string} 会议密码
 * @params extension {undefined} 记录拓展信息
 * @params participants {undefined} 参会成员
 */
type ConferenceRecordOutCommonType = {
    id?: string;
    ownerID?: string;
    ownerName?: string;
    ownerTitle?: string;
    name?: string;
    number?: string;
    startTime?: string;
    endTime?: string;
    type?: ConferenceRecordTypeCommonType;
    description?: string;
    groupID?: string;
    password?: string;
    extension?: undefined;
    participants?: undefined;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ConferenceRecordOutCommonType[]} 记录
 */
type ConferenceRecordOutReqCommonType = {
    totalCount?: number;
    records?: ConferenceRecordOutCommonType[];
};

/**
 *
 * @params ticks {number}
 * @params days {number}
 * @params hours {number}
 * @params milliseconds {number}
 * @params minutes {number}
 * @params seconds {number}
 * @params totalDays {number}
 * @params totalHours {number}
 * @params totalMilliseconds {number}
 * @params totalMinutes {number}
 * @params totalSeconds {number}
 */
type TimeSpanCommonType = {
    ticks?: number;
    days?: number;
    hours?: number;
    milliseconds?: number;
    minutes?: number;
    seconds?: number;
    totalDays?: number;
    totalHours?: number;
    totalMilliseconds?: number;
    totalMinutes?: number;
    totalSeconds?: number;
};

/**
 * 通话记录类型<br/>
1:Call; <br/>
2:Queue; <br/>
4:Conference; <br/>
8:Broadcast; <br/>
16:VideoConference; <br/>
32:RecordNotify; <br/>
64:VoiceConferenceRecord; <br/>
128:BroadcastRecord; <br/>
256:VideoConferenceRecord; <br/>
512:RecordNotifyRecord; 
*/
type CallRecordTypeCommonType = 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512;

/**
 * 通话记录实体
 * @params id {string} 通话记录ID
 * @params callerName {string} 主叫姓名
 * @params callerNumber {string} 主叫号码
 * @params callerOwnerTitle {string} 主叫号码拥有者的职位
 * @params callerDesc {string} 主叫描述
 * @params calledName {string} 被叫姓名
 * @params calledNumber {string} 被叫号码
 * @params calledDesc {string} 被叫描述
 * @params calledOwnerTitle {string} 被叫号码拥有者的职位
 * @params callOutTime {string} 主叫呼出时间
 * @params callInTime {string} 被叫呼入时间
 * @params startTime {string} 通话开始时间
 * @params endTime {string} 通话结束时间
 * @params duration {TimeSpanCommonType} 通话持续时间
 * @params type {CallRecordTypeCommonType} 通话记录类型
 * @params hasAnswered {boolean} 通话是否已应答
 * @params hasRecording {boolean} 通话是否有关联录音记录
 * @params recordingPath {string} 存放音视频联动的录像记录 Id 数组
 * @params recordingID {string} 录音记录 Id
 * @params logID {string} 通话相关日志ID
 * @params extension {string} 通话扩展属性
 * @params isMissRecord {boolean} 通话记录是否有丢失的录音记录 //created by linxiaoling at 2016-06-03 09:39:42
 * @params powerItems {string} 该通话记录拥有的权限
 * @params callerOwnerId {string} 主叫 userId
 * @params calledOwnerId {string} 被叫 userId
 * @params orgsPowerItems {string} 该通话记录拥有的组织架构权限
 * @params callVideoId {string} 视频通话录像
 * @params resourceId {string} 资源 Id
 * @params platformId {string} 平台 Id
 * @params areaCode {string} 行政区域
 * @params content {string} 录音内容
 * @params summary {string} 通话内容总结
 */
type CallRecordCommonType = {
    id?: string;
    callerName?: string;
    callerNumber?: string;
    callerOwnerTitle?: string;
    callerDesc?: string;
    calledName?: string;
    calledNumber?: string;
    calledDesc?: string;
    calledOwnerTitle?: string;
    callOutTime?: string;
    callInTime?: string;
    startTime?: string;
    endTime?: string;
    duration?: TimeSpanCommonType;
    type?: CallRecordTypeCommonType;
    hasAnswered?: boolean;
    hasRecording?: boolean;
    recordingPath?: string;
    recordingID?: string;
    logID?: string;
    extension?: string;
    isMissRecord?: boolean;
    powerItems?: string;
    callerOwnerId?: string;
    calledOwnerId?: string;
    orgsPowerItems?: string;
    callVideoId?: string;
    resourceId?: string;
    platformId?: string;
    areaCode?: string;
    content?: string;
    summary?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {CallRecordCommonType[]} 记录
 */
type CallRecordReqCommonType = {
    totalCount?: number;
    records?: CallRecordCommonType[];
};

/**
 * 更新通话记录请求
 * @params callerNumber {string} 主叫号码
 * @params calledNumber {string} 被叫号码
 * @params beginTime {string} 起始时间
 * @params endTime {string} 截止时间
 * @params callVideoId {string} 录制视频组id
 */
type UpdateCallRecordCallVideoIdInCommonType = {
    callerNumber: string;
    calledNumber: string;
    beginTime: string;
    endTime: string;
    callVideoId: string;
};

/**
 * 行政区域运维入参
 * @params defaultAreaCode {string} 默认行政区域，在匹配不到行政区域时以该行政区域为主
 * @params isOnlyQueryAreaCodeEmpty {boolean} 是否只运维行政区域为空的数据
 */
type AreaCodeOperationInCommonType = {
    defaultAreaCode?: string;
    isOnlyQueryAreaCodeEmpty?: boolean;
};

/**
 * 通话信息类型<br/>

*/
type CallingTypeCommonType = 0 | 1 | 2 | 3 | 4 | 5;

/**
 *
 * @params callingType {string}
 * @params calling {undefined}
 */
type CallingWrapperCommonType = {
    callingType?: string;
    calling?: undefined;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {CallingWrapperCommonType[]} 记录
 */
type CallingWrapperReqCommonType = {
    totalCount?: number;
    records?: CallingWrapperCommonType[];
};

/**
 * 带组织架构信息的联系人信息
 * @params id {string} ID
 * @params name {string} 名称
 * @params title {string} 职位
 * @params account {string} 账号
 * @params photoPath {string} 头像路径
 * @params platformId {string} 平台Id
 * @params platformName {string} 平台名称
 * @params organizations {OrganizationBasicCommonType[]} 所在组织架构
 */
type ContactWithOrganizationCommonType = {
    id?: string;
    name?: string;
    title?: string;
    account?: string;
    photoPath?: string;
    platformId?: string;
    platformName?: string;
    organizations?: OrganizationBasicCommonType[];
};

/**
 * 排队呼叫实体
 * @params identifier {string} 呼叫标识
 * @params phoneId {string} 排队电话Id
 * @params number {string} 排队电话号码
 * @params userName {string} 排队电话号码所属联系人名称
 * @params phoneOwner {ContactWithOrganizationCommonType} 排队电话的拥有者
 * @params queueSecond {number} 等待时间
 * @params isHold {boolean} 是否为保持呼叫
 * @params isEmergency {boolean} 是否为紧急呼叫
 * @params isSplitted {boolean} 是否为拆分普通呼叫
 */
type CallStatusCommonType = {
    identifier?: string;
    phoneId?: string;
    number?: string;
    userName?: string;
    phoneOwner?: ContactWithOrganizationCommonType;
    queueSecond?: number;
    isHold?: boolean;
    isEmergency?: boolean;
    isSplitted?: boolean;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {CallStatusCommonType[]} 记录
 */
type CallStatusReqCommonType = {
    totalCount?: number;
    records?: CallStatusCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {PhoneCommonType[]} 记录
 */
type PhoneReqCommonType = {
    totalCount?: number;
    records?: PhoneCommonType[];
};

/**
 * 更新电话位置实体
 * @params longitude {number} 经度
 * @params latitude {number} 维度
 */
type UpdatePhoneLocationInCommonType = {
    longitude?: number;
    latitude?: number;
};

/**
 * 日志类型<br/>
0:All; <br/>
1:Dispatch; <br/>
2:Conference; <br/>
4:Broadcast; <br/>
8:VideoConference; <br/>
16:CreateEntity; <br/>
32:UpdateEntity; <br/>
64:DeleteEntity; <br/>
128:QueryEntity; <br/>
256:SMS; <br/>
512:LoginLogout; <br/>
1024:RecordNotify; <br/>
2048:Event; <br/>
4096:EventTask; <br/>
16384:Others; 
*/
type LogTypeCommonType =
    | 0
    | 1
    | 2
    | 4
    | 8
    | 16
    | 32
    | 64
    | 128
    | 256
    | 512
    | 1024
    | 2048
    | 4096
    | 16384;

/**
 * 操作日志
 * @params id {string} 日志ID
 * @params operator {undefined} 操作者
 * @params source {undefined} 操作源
 * @params destination {undefined} 操作目标
 * @params type {LogTypeCommonType} 日志类型
 * @params time {string} 时间
 * @params result {boolean} 日志结果
 * @params reason {string} 失败原因
 * @params operation {string} 操作行为
 * @params groupID {string} 组
 * @params eventID {string} 事件
 */
type OperationLogRecordOutCommonType = {
    id?: string;
    operator?: undefined;
    source?: undefined;
    destination?: undefined;
    type?: LogTypeCommonType;
    time?: string;
    result?: boolean;
    reason?: string;
    operation?: string;
    groupID?: string;
    eventID?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {OperationLogRecordOutCommonType[]} 记录
 */
type OperationLogRecordOutReqCommonType = {
    totalCount?: number;
    records?: OperationLogRecordOutCommonType[];
};

/**
 * 传真类型<br/>

*/
type FaxRecordTypeCommonType = 0 | 1 | 2;

/**
 * 传真记录状态<br/>

*/
type FaxRecordStatusCommonType = 1 | 2 | 3 | 4;

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {FaxOutCommonType[]} 记录
 */
type FaxOutReqCommonType = {
    totalCount?: number;
    records?: FaxOutCommonType[];
};

/**
 * 传真草稿
 * @params id {number} 记录ID
 * @params title {string} 主题
 * @params internationalCode {string} 国际区号
 * @params prioritySendType {PhoneTypeCommonType} 优先选择发送的电话类型
 * @params longDistanceCode {string} 长途区号
 * @params memo {string} 备注
 * @params senderID {string} 发送人ID
 * @params receivers {NotifiedMemberCommonType[]} 收件人集合
 * @params sendFirst {boolean} 是否优先发送
 * @params saveTime {string} 保存时间
 * @params files {FileRecordCommonType[]} 传真附件集合
 * @params extension {string} 拓展字段
 */
type FaxDraftOutCommonType = {
    id?: number;
    title?: string;
    internationalCode?: string;
    prioritySendType?: PhoneTypeCommonType;
    longDistanceCode?: string;
    memo?: string;
    senderID?: string;
    receivers?: NotifiedMemberCommonType[];
    sendFirst?: boolean;
    saveTime?: string;
    files?: FileRecordCommonType[];
    extension?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {FaxDraftOutCommonType[]} 记录
 */
type FaxDraftOutReqCommonType = {
    totalCount?: number;
    records?: FaxDraftOutCommonType[];
};

/**
 * 传真黑名单号码
 * @params isDelete {boolean} 是否删除黑名单
 * @params number {string} 号码
 */
type FaxBlacklistInCommonType = {
    isDelete?: boolean;
    number: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
type StringReqCommonType = {
    totalCount?: number;
    records?: any[];
};

/**
 * 传真白名单号码
 * @params isDelete {boolean} 是否删除白名单
 * @params number {string} 号码
 */
type FaxWhitelistInCommonType = {
    isDelete?: boolean;
    number: string;
};

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
};

/**
 * 短信配置
 * @params needConfirm {boolean} 是否需要确认
 * @params isStateMessage {boolean} 是否是状态短信
 * @params stateMessageValue {number} 状态短信值
 * @params isAreaMessage {boolean} 是否是区域短信
 * @params longitude {number} 区域经度
 * @params latitude {number} 区域纬度
 * @params radius {number} 区域半径
 * @params tag {string} 自定义标签
 * @params stateDingDing {boolean} 是否钉钉的状态
 * @params isSendRecord {boolean} 是否为发送侧的记录
 * @params conversationName {string} 会话名称
 * @params numberName {string} 发送/接收者名称,当为接收者短信时，则为接收者名称，当为发送者时，则为发送者名称
 */
type MessageConfigCommonType = {
    needConfirm?: boolean;
    isStateMessage?: boolean;
    stateMessageValue?: number;
    isAreaMessage?: boolean;
    longitude?: number;
    latitude?: number;
    radius?: number;
    tag?: string;
    stateDingDing?: boolean;
    isSendRecord?: boolean;
    conversationName?: string;
    numberName?: string;
};

/**
 * 接收的短信
 * @params id {string} ID
 * @params conversationID {string} 会话ID
 * @params name {string} 名称
 * @params serialNumber {string} 短信串号
 * @params senderNumber {string} 发送号码
 * @params sender {ContactWithOrganizationCommonType} 发件人
 * @params recipientNumber {string} 接收号码
 * @params recipient {ContactWithOrganizationCommonType} 收件人
 * @params content {string} 内容
 * @params dateTime {string} 时间
 * @params handled {number} 处理标识
 * @params isNeedConfirm {boolean} 是否需要确认
 * @params confirmTime {string} 确认时间
 * @params configStr {string} 配置Json串
 */
type ShortMessageCommonType = {
    id?: string;
    conversationID?: string;
    name?: string;
    serialNumber?: string;
    senderNumber?: string;
    sender?: ContactWithOrganizationCommonType;
    recipientNumber?: string;
    recipient?: ContactWithOrganizationCommonType;
    content?: string;
    dateTime?: string;
    handled?: number;
    isNeedConfirm?: boolean;
    confirmTime?: string;
    configStr?: string;
};

/**
 * 短信会话
 * @params id {string} 会话Id
 * @params isGroupSending {boolean} 标识此会话是否为群发
 * @params config {MessageConfigCommonType} 短信配置
 * @params ownSidePhone {string} 己方号码
 * @params oppositePhones {any[]} 对端号码
 * @params messages {ShortMessageCommonType[]} 短信列表
 */
type SMSConversationCommonType = {
    id?: string;
    isGroupSending?: boolean;
    config?: MessageConfigCommonType;
    ownSidePhone?: string;
    oppositePhones?: any[];
    messages?: ShortMessageCommonType[];
};

/**
 * 短信信息
 * @params sender {string} 短信发送者
 * @params receiver {string} 短信接收者
 * @params content {string} 短信内容
 */
type MessageInCommonType = {
    sender?: string;
    receiver?: string;
    content?: string;
};

/**
 * 处理标识
<remarks>//created by linlong at 2015-10-08 17:53:58 </remarks><br/>
0:Sending; <br/>
1:Succeed; <br/>
2:Failed; <br/>
3:UnRead; 
*/
type HandleFlagCommonType = 0 | 1 | 2 | 3;

/**
 * 短信返回实体
 * @params id {string} 短信 Id
 * @params content {string} 短信内容
 * @params sender {string} 短信发送者
 * @params senderContact {ContactWithOrganizationCommonType} 发件人
 * @params recipient {string} 短信接收者
 * @params recipientContact {ContactWithOrganizationCommonType} 发件人
 * @params serialNumber {string} 短信序列号(Guid)
 * @params conversationID {string} 短信所处的会话ID
 * @params handled {HandleFlagCommonType} 处理标识(0-发送中|1-发送成功|2-发送失败|3-未读)
 * @params dateTime {string} 时间戳
 * @params isNeedConfirm {boolean} 是否需要确认
 * @params confirmTime {string} 确认时间
 * @params areaCode {string} 行政区划
 */
type MessageOutCommonType = {
    id?: string;
    content?: string;
    sender?: string;
    senderContact?: ContactWithOrganizationCommonType;
    recipient?: string;
    recipientContact?: ContactWithOrganizationCommonType;
    serialNumber?: string;
    conversationID?: string;
    handled?: HandleFlagCommonType;
    dateTime?: string;
    isNeedConfirm?: boolean;
    confirmTime?: string;
    areaCode?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {MessageOutCommonType[]} 记录
 */
type MessageOutReqCommonType = {
    totalCount?: number;
    records?: MessageOutCommonType[];
};

/**
 * 群发短信对象
 * @params id {string} 组消息ID
 */
type GroupMessageOutCommonType = {
    id?: string;
};

/**
 * 群组消息实体
 * @params senderNumber {string} 短信发送者的号码
 * @params receiverNumbers {any[]} 短信接收者
 * @params content {string} 短信内容
 */
type GroupMessageInCommonType = {
    senderNumber?: string;
    receiverNumbers: any[];
    content?: string;
};

/**
 * WCF短信模板实体
 * @params id {string} ID
 * @params name {string} 名称
 * @params stationId {string} 节点ID
 * @params content {string} 模板内容
 */
type MessageTemplateCommonType = {
    id?: string;
    name?: string;
    stationId?: string;
    content?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {MessageTemplateCommonType[]} 记录
 */
type MessageTemplateReqCommonType = {
    totalCount?: number;
    records?: MessageTemplateCommonType[];
};

/**
 * 短信模板对象
 * @params name {string} 模板内容
 * @params content {string} 配置信息
 */
type MessageTemplateInCommonType = {
    name?: string;
    content?: string;
};

/**
 * 更新会话名称入参
 * @params name {string} 短信会话名称
 */
type UpdateSmsConversationInCommonType = {
    name: string;
};

/**
 * 夜服
 * @params phoneNumber {string} 用于夜服值守的号码
 */
type NightServiceInCommonType = {
    phoneNumber: string;
};

/**
 * 自动语音夜服
 * @params audioID {number} 夜服提示语音ID（默认值0x30044031)
 */
type AutoNightServiceInCommonType = {
    audioID?: number;
};

/**
 * 夜服状态
 * @params isOpenNightService {boolean} 是否开启夜服
 * @params accessNumber {string} 开启夜服的线路组接入码
 */
type NightServiceStateOutCommonType = {
    isOpenNightService?: boolean;
    accessNumber?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {NightServiceStateOutCommonType[]} 记录
 */
type NightServiceStateOutReqCommonType = {
    totalCount?: number;
    records?: NightServiceStateOutCommonType[];
};

/**
 *
 * @params id {number}
 * @params name {string}
 * @params additionalProperties {any}
 */
type CategoryCommonType = {
    id?: number;
    name?: string;
    additionalProperties?: any;
};

/**
 *
 * @params id {number}
 * @params name {string}
 * @params additionalProperties {any}
 */
type TagCommonType = {
    id?: number;
    name?: string;
    additionalProperties?: any;
};

/**
 * <br/>

*/
type PetStatusCommonType = 0 | 1 | 2;

/**
 *
 * @params id {number}
 * @params name {string}
 * @params category {CategoryCommonType}
 * @params photoUrls {any[]}
 * @params tags {TagCommonType[]}
 * @params status {PetStatusCommonType} pet status in the store
 * @params additionalProperties {any}
 */
type PetCommonType = {
    id?: number;
    name: string;
    category?: CategoryCommonType;
    photoUrls: any[];
    tags?: TagCommonType[];
    status?: PetStatusCommonType;
    additionalProperties?: any;
};

/**
 * 录音通知组类型
（通过临时组发起的业务，结束后会自动清除NC录音文件）
（通过长期通知组发起的业务，结束后不会清除NC录音文件）<br/>
0:Temporary,应急通知组; <br/>
1:Permanent,长期通知组; 
*/
type RecordNotifyGroupTypeCommonType = 0 | 1;

/**
 * 录音播放模式<br/>
0:Single,每个用户单独播放（用于播放通知）; <br/>
1:United,所有用户一致播放（用于播放背景音乐）; 
*/
type RecordNotifyPlayTypeCommonType = 0 | 1;

/**
 * 录音通知状态<br/>
0:Preparing,准备中; <br/>
1:LackOfFile,缺少音频文件; <br/>
2:UploadingFile,音频文件上传到服务器中; <br/>
3:UploadedFile,音频文件上传完毕; <br/>
4:UploadFileFailed,音频文件上传失败; <br/>
5:Starting,开启录音通知中; <br/>
6:StartFailed,开启录音通知失败; <br/>
7:Playing,循环播放中; <br/>
8:PlayEnd,播放完成; <br/>
9:NoPermission,无License许可; 
*/
type RecordNotifyStatusCommonType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/**
 * 录音通知组
 * @params id {string} ID
 * @params name {string} 名称
 * @params description {string} 描述
 * @params startTime {string} 开启时间
 * @params number {number} 录音通知号(默认为0)
 * @params fileGroupID {string} 录音文件所在文件目录ID
 * @params notifyContent {string} 待通知的文本信息
 * @params ownerID {string} 发起录音通知组对应的用户ID
 * @params ownerName {string} 录音通知组对应的用户名称
 * @params notifyGroupType {RecordNotifyGroupTypeCommonType} 录音通知组类型（通过临时组发起的业务，结束后会自动清除NC录音文件）（通过长期通知组发起的业务，结束后不会清除NC录音文件）
 * @params playType {RecordNotifyPlayTypeCommonType} 录音播放模式
 * @params playTimes {number} 播放次数(为0则循环播放)
 * @params isAllowUserJoin {boolean} 是否允许用户主动加入
 * @params password {string} 加入密码, 为空则不指定密码
 * @params status {RecordNotifyStatusCommonType} 录音通知状态
 * @params groupID {string} 关联组ID
 */
type RecordNotifyGroupCommonType = {
    id?: string;
    name?: string;
    description?: string;
    startTime?: string;
    number?: number;
    fileGroupID?: string;
    notifyContent?: string;
    ownerID?: string;
    ownerName?: string;
    notifyGroupType?: RecordNotifyGroupTypeCommonType;
    playType?: RecordNotifyPlayTypeCommonType;
    playTimes?: number;
    isAllowUserJoin?: boolean;
    password?: string;
    status?: RecordNotifyStatusCommonType;
    groupID?: string;
};

/**
 * 开启录音通知入参
 * @params name {string} 名称
 * @params description {string} 描述
 * @params priorityInviteType {PhoneTypeCommonType} 号码类型
 * @params recallStrategy {RecallStrategyCommonType} 重呼策略
 * @params number {number} 录音通知号(默认为0)
 * @params fileGroupID {string} 录音文件所在目录ID
 * @params notifyContent {string} 待通知的文本信息
 * @params type {RecordNotifyGroupTypeCommonType} 录音通知组类型（通过临时组发起的业务，结束后会自动清除NC录音文件）（通过长期通知组发起的业务，结束后不会清除NC录音文件）
 * @params playType {RecordNotifyPlayTypeCommonType} 录音播放模式
 * @params maxConcurrency {number} 录音通知并发数量，防止信道占用过多导致瘫痪
 * @params playTimes {number} 播放次数(为0则循环播放)
 * @params isAllowUserJoin {boolean} 是否允许用户主动加入
 * @params password {string} 加入密码, 为空则不指定密码
 * @params groupID {string} 关联组ID
 * @params eventID {string} 关联的事件ID
 * @params voiceName {string} 播音员：需从cgs获取具体语音名称，不传则默认使用服务配置TTSAnnouncer：0-女生，1-男生
 * @params notifiedMembers {NotifiedMemberCommonType[]} 待通知成员
 */
type RecordNotifyGroupInCommonType = {
    name?: string;
    description?: string;
    priorityInviteType?: PhoneTypeCommonType;
    recallStrategy?: RecallStrategyCommonType;
    number?: number;
    fileGroupID?: string;
    notifyContent?: string;
    type?: RecordNotifyGroupTypeCommonType;
    playType?: RecordNotifyPlayTypeCommonType;
    maxConcurrency?: number;
    playTimes?: number;
    isAllowUserJoin?: boolean;
    password?: string;
    groupID?: string;
    eventID?: string;
    voiceName?: string;
    notifiedMembers?: NotifiedMemberCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {RecordNotifyGroupCommonType[]} 记录
 */
type RecordNotifyGroupReqCommonType = {
    totalCount?: number;
    records?: RecordNotifyGroupCommonType[];
};

/**
 * 录音通知情况统计
 * @params totalCount {number} 通知总数
 * @params beNotifiedCount {number} 待通知数量
 * @params unconfirmedCount {number} 未确认数量
 * @params listeningCount {number} 接听中数量
 * @params confirmedCount {number} 已确认数量
 */
type RecordNotifyStatisticsOutCommonType = {
    totalCount?: number;
    beNotifiedCount?: number;
    unconfirmedCount?: number;
    listeningCount?: number;
    confirmedCount?: number;
};

/**
 * <br/>
0:Idle,空闲; <br/>
1:Ringing,振铃; <br/>
2:Listening,收听录音通知中; <br/>
3:Exited,退出录音通知组; 
*/
type RecordNotifyMemberStateCommonType = 0 | 1 | 2 | 3;

/**
 * 语音通知成员操作状态<br/>
0:InCall,通话中; <br/>
1:CallIn,呼叫中; <br/>
2:CallFailed,呼叫失败; <br/>
3:NotAnswered,未接听; <br/>
4:HungUp,已挂断; <br/>
5:Confirmed,已确认; 
*/
type RecordNotifyMemberOperationStateCommonType = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * 录音通知成员
 * @params id {string} ID
 * @params name {string} 名称
 * @params title {string} 职位
 * @params associatedNormalUserID {string} 关联的联系人ID
 * @params phoneNumber {string} 关联电话
 * @params photoPath {string} 头像
 * @params normalUser {ContactDetailCommonType} 联系人基本信息
 * @params lastHangUpTime {string} 最近一次挂断时间
 * @params lastTurnOnTime {string} 最近一次接通时间
 * @params reInviteCount {number} 重新邀请次数
 * @params notifyGroupID {string} 所处的录音通知组
 * @params state {RecordNotifyMemberStateCommonType} 成员状态
 * @params operationState {RecordNotifyMemberOperationStateCommonType} 语音通知成员操作状态
 * @params lastConfirmTime {string} 最近一次确认时间
 * @params hasConfirm {boolean} 是否已确认
 */
type RecordNotifyGroupMemberCommonType = {
    id?: string;
    name?: string;
    title?: string;
    associatedNormalUserID?: string;
    phoneNumber?: string;
    photoPath?: string;
    normalUser?: ContactDetailCommonType;
    lastHangUpTime?: string;
    lastTurnOnTime?: string;
    reInviteCount?: number;
    notifyGroupID?: string;
    state?: RecordNotifyMemberStateCommonType;
    operationState?: RecordNotifyMemberOperationStateCommonType;
    lastConfirmTime?: string;
    hasConfirm?: boolean;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {RecordNotifyGroupMemberCommonType[]} 记录
 */
type RecordNotifyGroupMemberReqCommonType = {
    totalCount?: number;
    records?: RecordNotifyGroupMemberCommonType[];
};

/**
 * 会议服务器响应数据
 * @params lessMinuteNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterChangeNotify {NotifyObjectCommonType} 通知对象
 * @params leaveMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params enterMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterEnter {string}
 * @params memberEnter {string}
 * @params exitMeeting {string}
 * @params masterChange {string}
 * @params lessOneMinute {string}
 * @params inNotifyVoice {string}
 * @params reportNumberBits {number}
 * @params masterExit {ExitTypeCommonType} 退出方式
 * @params reportLang {CultureCommonType} 区域语言
 * @params meetingTime {number}
 * @params meetingPhone {string}
 * @params needRecord {boolean}
 * @params displayNumber {string}
 * @params appointedConferenceID {number}
 * @params isMuteJoinConference {boolean}
 * @params id {string} 名称
 * @params name {string} 名称
 * @params description {string} 描述
 * @params ip {string} 服务器地址
 * @params port {number} 服务器端口
 * @params password {string} 服务器密码
 * @params state {ConnectionStateCommonType} 连接状态
 * @params masterIP {string} NC主机地址
 * @params masterPort {number} NC主机端口
 * @params slaveIP {string} NC备机地址
 * @params slavePort {number} NC备机端口
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 */
type ConferenceServerOutCommonType = {
    lessMinuteNotifyObject?: NotifyObjectCommonType;
    masterChangeNotify?: NotifyObjectCommonType;
    leaveMeetingNotifyObject?: NotifyObjectCommonType;
    enterMeetingNotifyObject?: NotifyObjectCommonType;
    masterEnter?: string;
    memberEnter?: string;
    exitMeeting?: string;
    masterChange?: string;
    lessOneMinute?: string;
    inNotifyVoice?: string;
    reportNumberBits?: number;
    masterExit?: ExitTypeCommonType;
    reportLang?: CultureCommonType;
    meetingTime?: number;
    meetingPhone?: string;
    needRecord?: boolean;
    displayNumber?: string;
    appointedConferenceID?: number;
    isMuteJoinConference?: boolean;
    id?: string;
    name?: string;
    description?: string;
    ip?: string;
    port?: number;
    password?: string;
    state?: ConnectionStateCommonType;
    masterIP?: string;
    masterPort?: number;
    slaveIP?: string;
    slavePort?: number;
    longitude?: number;
    latitude?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ConferenceServerOutCommonType[]} 记录
 */
type ConferenceServerOutReqCommonType = {
    totalCount?: number;
    records?: ConferenceServerOutCommonType[];
};

/**
 * 语音会议服务器入参
 * @params lessMinuteNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterChangeNotify {NotifyObjectCommonType} 通知对象
 * @params leaveMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params enterMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterEnter {string}
 * @params memberEnter {string}
 * @params exitMeeting {string}
 * @params masterChange {string}
 * @params lessOneMinute {string}
 * @params inNotifyVoice {string}
 * @params reportNumberBits {number}
 * @params masterExit {ExitTypeCommonType} 退出方式
 * @params reportLang {CultureCommonType} 区域语言
 * @params meetingTime {number}
 * @params meetingPhone {string}
 * @params needRecord {boolean}
 * @params displayNumber {string}
 * @params appointedConferenceID {number}
 * @params isMuteJoinConference {boolean}
 * @params name {string} 名称
 * @params description {string} 描述
 * @params ip {string} 服务器地址
 * @params port {number} 服务器端口
 * @params password {string} 服务器密码
 * @params masterIP {string} NC主机地址
 * @params masterPort {number} NC主机端口
 * @params slaveIP {string} NC备机地址
 * @params slavePort {number} NC备机端口
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 */
type ConferenceServerInCommonType = {
    lessMinuteNotifyObject?: NotifyObjectCommonType;
    masterChangeNotify?: NotifyObjectCommonType;
    leaveMeetingNotifyObject?: NotifyObjectCommonType;
    enterMeetingNotifyObject?: NotifyObjectCommonType;
    masterEnter?: string;
    memberEnter?: string;
    exitMeeting?: string;
    masterChange?: string;
    lessOneMinute?: string;
    inNotifyVoice?: string;
    reportNumberBits?: number;
    masterExit?: ExitTypeCommonType;
    reportLang?: CultureCommonType;
    meetingTime?: number;
    meetingPhone?: string;
    needRecord?: boolean;
    displayNumber?: string;
    appointedConferenceID?: number;
    isMuteJoinConference?: boolean;
    name: string;
    description?: string;
    ip: string;
    port: number;
    password?: string;
    masterIP?: string;
    masterPort?: number;
    slaveIP?: string;
    slavePort?: number;
    longitude?: number;
    latitude?: number;
};

/**
 * 语音会议服务器更新入参
 * @params lessMinuteNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterChangeNotify {NotifyObjectCommonType} 通知对象
 * @params leaveMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params enterMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterEnter {string}
 * @params memberEnter {string}
 * @params exitMeeting {string}
 * @params masterChange {string}
 * @params lessOneMinute {string}
 * @params inNotifyVoice {string}
 * @params reportNumberBits {number}
 * @params masterExit {ExitTypeCommonType} 退出方式
 * @params reportLang {CultureCommonType} 区域语言
 * @params meetingTime {number}
 * @params meetingPhone {string}
 * @params needRecord {boolean}
 * @params displayNumber {string}
 * @params appointedConferenceID {number}
 * @params isMuteJoinConference {boolean}
 * @params name {string} 名称
 * @params description {string} 描述
 * @params ip {string} 服务器地址
 * @params port {number} 服务器端口
 * @params password {string} 服务器密码
 * @params masterIP {string} NC主机地址
 * @params masterPort {number} NC主机端口
 * @params slaveIP {string} NC备机地址
 * @params slavePort {number} NC备机端口
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 */
type UpdateConferenceServerInCommonType = {
    lessMinuteNotifyObject?: NotifyObjectCommonType;
    masterChangeNotify?: NotifyObjectCommonType;
    leaveMeetingNotifyObject?: NotifyObjectCommonType;
    enterMeetingNotifyObject?: NotifyObjectCommonType;
    masterEnter?: string;
    memberEnter?: string;
    exitMeeting?: string;
    masterChange?: string;
    lessOneMinute?: string;
    inNotifyVoice?: string;
    reportNumberBits?: number;
    masterExit?: ExitTypeCommonType;
    reportLang?: CultureCommonType;
    meetingTime?: number;
    meetingPhone?: string;
    needRecord?: boolean;
    displayNumber?: string;
    appointedConferenceID?: number;
    isMuteJoinConference?: boolean;
    name: string;
    description?: string;
    ip: string;
    port: number;
    password?: string;
    masterIP?: string;
    masterPort?: number;
    slaveIP?: string;
    slavePort?: number;
    longitude?: number;
    latitude?: number;
};

/**
 * 电话状态订阅入参
 * @params id {string} 刷新订阅id
 * @params url {string} 订阅消息的服务地址（例如：http://ip:port/openApi/phoneState）
 * @params time {number} 订阅时间,5-43200，单位为分钟，未指定默认为3600
 * @params phones {any[]} 订阅的电话号（例如：["8001","8002","8003"]），不填/空则表示推送所有号码状态，否则只推送订阅的号码
 */
type PhoneStateSubscriberInCommonType = {
    id?: string;
    url: string;
    time?: number;
    phones?: any[];
};

/**
 * 电话状态订阅者响应
 * @params subscribeId {string} 订阅Id，用于取消订阅
 * @params expiredTime {string} 过期时间
 */
type PhoneStateSubscriberOutCommonType = {
    subscribeId?: string;
    expiredTime?: string;
};

/**
 * 模板类型，0：语音通知，1：短信通知，2：即时消息通知<br/>
0:RecordNotify,语音通知; <br/>
1:ShortMessage,短信息; <br/>
2:InstantMessaging,即时消息; <br/>
-1:All,全部; 
*/
type TextTemplateTypeCommonType = 0 | 1 | 2 | -1;

/**
 * 文本模板
 * @params id {string} 主键id
 * @params name {string} 模板名称
 * @params textTemplateType {TextTemplateTypeCommonType} 模板类型
 * @params content {string} 文本内容
 */
type TextTemplateOutCommonType = {
    id?: string;
    name?: string;
    textTemplateType?: TextTemplateTypeCommonType;
    content?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {TextTemplateOutCommonType[]} 记录
 */
type TextTemplateOutReqCommonType = {
    totalCount?: number;
    records?: TextTemplateOutCommonType[];
};

/**
 * 文本模板
 * @params name {string} 模板名称
 * @params textTemplateType {TextTemplateTypeCommonType} 模板类型
 * @params content {string} 文本内容
 */
type TextTemplateInCommonType = {
    name: string;
    textTemplateType?: TextTemplateTypeCommonType;
    content: string;
};

/**
 *
 * @params id {string}
 * @params ip {string}
 * @params port {number}
 * @params userName {string}
 * @params password {string}
 * @params isSupportDualMode {boolean}
 * @params isSupportTrunkUser {boolean}
 */
type NCDeviceOutCommonType = {
    id?: string;
    ip?: string;
    port?: number;
    userName?: string;
    password?: string;
    isSupportDualMode?: boolean;
    isSupportTrunkUser?: boolean;
};

/**
 *
 * @params id {string}
 * @params name {string}
 * @params connectionState {ConnectionStateCommonType} 连接状态
 * @params description {string}
 * @params prefix {string}
 * @params isKeepAlive {boolean}
 * @params timeInterval {number}
 * @params masterNCDevice {NCDeviceOutCommonType}
 * @params slaveNCDevice {NCDeviceOutCommonType}
 * @params longitude {number}
 * @params latitude {number}
 */
type VirtualNCDeviceOutCommonType = {
    id?: string;
    name?: string;
    connectionState?: ConnectionStateCommonType;
    description?: string;
    prefix?: string;
    isKeepAlive?: boolean;
    timeInterval?: number;
    masterNCDevice?: NCDeviceOutCommonType;
    slaveNCDevice?: NCDeviceOutCommonType;
    longitude?: number;
    latitude?: number;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {VirtualNCDeviceOutCommonType[]} 记录
 */
type VirtualNCDeviceOutReqCommonType = {
    totalCount?: number;
    records?: VirtualNCDeviceOutCommonType[];
};

/**
 *
 * @params ip {string}
 * @params port {number}
 * @params userName {string}
 * @params password {string}
 * @params isSupportDualMode {boolean}
 * @params isSupportTrunkUser {boolean}
 */
type NCDeviceInCommonType = {
    ip: string;
    port: number;
    userName?: string;
    password?: string;
    isSupportDualMode?: boolean;
    isSupportTrunkUser?: boolean;
};

/**
 *
 * @params name {string}
 * @params description {string}
 * @params prefix {string}
 * @params isKeepAlive {boolean}
 * @params timeInterval {number}
 * @params masterNCDevice {NCDeviceInCommonType}
 * @params slaveNCDevice {NCDeviceInCommonType}
 * @params longitude {number}
 * @params latitude {number}
 */
type VirtualNCDeviceInCommonType = {
    name: string;
    description?: string;
    prefix?: string;
    isKeepAlive?: boolean;
    timeInterval?: number;
    masterNCDevice: NCDeviceInCommonType;
    slaveNCDevice?: NCDeviceInCommonType;
    longitude?: number;
    latitude?: number;
};

/**
 *
 * @params ip {string}
 * @params port {number}
 * @params userName {string}
 * @params password {string}
 * @params isSupportDualMode {boolean}
 * @params isSupportTrunkUser {boolean}
 */
type UpdateNCDeviceInCommonType = {
    ip: string;
    port: number;
    userName?: string;
    password?: string;
    isSupportDualMode?: boolean;
    isSupportTrunkUser?: boolean;
};

/**
 *
 * @params name {string}
 * @params description {string}
 * @params masterNCDevice {UpdateNCDeviceInCommonType}
 * @params slaveNCDevice {UpdateNCDeviceInCommonType}
 */
type UpdateVirtualNCDeviceInCommonType = {
    name: string;
    description?: string;
    masterNCDevice: UpdateNCDeviceInCommonType;
    slaveNCDevice?: UpdateNCDeviceInCommonType;
};

/**
 *
 * @params trunkGroupNumber {number}
 * @params trunkGroupDescription {string}
 * @params dualSystemAttribute {boolean}
 * @params callAreaInHost {number}
 * @params trunkGroupType {TrunkGroupTypeCommonType} 中继群类型
 * @params callPriority {number}
 * @params maxCall {number}
 * @params effectiveDate {number}
 * @params effectiveTime {string}
 * @params physicalState {PhysicalStateCommonType} 中继群物理状态
 * @params isEnable {boolean}
 */
type TrunkGroupConfigOutCommonType = {
    trunkGroupNumber?: number;
    trunkGroupDescription?: string;
    dualSystemAttribute?: boolean;
    callAreaInHost?: number;
    trunkGroupType?: TrunkGroupTypeCommonType;
    callPriority?: number;
    maxCall?: number;
    effectiveDate?: number;
    effectiveTime?: string;
    physicalState?: PhysicalStateCommonType;
    isEnable?: boolean;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {TrunkGroupConfigOutCommonType[]} 记录
 */
type TrunkGroupConfigOutReqCommonType = {
    totalCount?: number;
    records?: TrunkGroupConfigOutCommonType[];
};

/**
 *
 * @params isEnable {boolean}
 * @params trunkGroupNumber {number}
 * @params dualSystemAttribute {boolean}
 */
type TrunkGroupConfigInCommonType = {
    isEnable?: boolean;
    trunkGroupNumber: number;
    dualSystemAttribute?: boolean;
};

/**
 * <br/>
0:Phone; <br/>
1:PhoneLine; <br/>
2:Both; 
*/
type RefreshFilterCommonType = 0 | 1 | 2;

/**
 *
 * @params filter {RefreshFilterCommonType} 0:Phone; 1:PhoneLine; 2:Both;
 */
type RefreshPhoneConfigInCommonType = {
    filter?: RefreshFilterCommonType;
};

/**
 *
 * @params id {string}
 * @params name {string}
 * @params title {string}
 * @params platformId {string}
 * @params platformName {string}
 */
type ContactCommonType = {
    id?: string;
    name?: string;
    title?: string;
    platformId?: string;
    platformName?: string;
};

/**
 *
 * @params id {string}
 * @params number {string}
 * @params state {PhoneStateCommonType} 电话的状态
 * @params usn {string}
 * @params level {number}
 * @params callRegion {number}
 * @params connectionState {ConnectionStateCommonType} 连接状态
 * @params protocol {PhoneProtocolCommonType} 电话类型
 * @params configStatus {PhoneConfigStatusCommonType} 电话配置状态
 * @params usageType {string}
 * @params isPhoneLine {boolean}
 * @params owner {ContactCommonType}
 */
type PhoneOutCommonType = {
    id?: string;
    number?: string;
    state?: PhoneStateCommonType;
    usn?: string;
    level?: number;
    callRegion?: number;
    connectionState?: ConnectionStateCommonType;
    protocol?: PhoneProtocolCommonType;
    configStatus?: PhoneConfigStatusCommonType;
    usageType?: string;
    isPhoneLine?: boolean;
    owner?: ContactCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {PhoneOutCommonType[]} 记录
 */
type PhoneOutReqCommonType = {
    totalCount?: number;
    records?: PhoneOutCommonType[];
};

----

/**
 * 预约会议——请求参数类型定义
 * @params name {string}  （必填）
 * @params startTime {string}  （必填）
 * @params remains {RemainInCommonType[]}
 * @params remindContent {string}
 * @params conferenceMembers {InviteeCommonType[]}
 * @params priorityInviteType {PhoneTypeCommonType} 号码类型
 */
export type AddAppointmentsConferenceReqType = {
    name: string;
    startTime: string;
    remains?: RemainInCommonType[];
    remindContent?: string;
    conferenceMembers?: InviteeCommonType[];
    priorityInviteType?: PhoneTypeCommonType;
};

/**
 * 预约会议——响应参数类型定义
 * @params name {string}
 * @params startTime {string}
 * @params remindContent {string}
 * @params conferenceMembers {InviteeCommonType[]}
 * @params jobId {string}
 * @params remains {RemainOutCommonType[]}
 */
export type AddAppointmentsConferenceResType = {
    name: string;
    startTime: string;
    remindContent: string;
    conferenceMembers: InviteeCommonType[];
    jobId: string;
    remains: RemainOutCommonType[];
};

/**
 * 获取预约列表——请求参数类型定义
 * @params Keyword {string} 关键词
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetAppointmentsConferenceReqType = {
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * 获取预约列表——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {VoiceConferenceAppointmentOutCommonType[]} 记录
 */
export type GetAppointmentsConferenceResType = {
    totalCount: number;
    records: VoiceConferenceAppointmentOutCommonType[];
};

/**
 * 获取预约——请求参数类型定义
 * @params id {string} id （必填）
 */
export type GetAppointmentsConferenceByIdReqType = {
    id: string;
};

/**
 * 获取预约——响应参数类型定义
 * @params name {string}
 * @params startTime {string}
 * @params remindContent {string}
 * @params conferenceMembers {InviteeCommonType[]}
 * @params jobId {string}
 * @params remains {RemainOutCommonType[]}
 */
export type GetAppointmentsConferenceByIdResType = {
    name: string;
    startTime: string;
    remindContent: string;
    conferenceMembers: InviteeCommonType[];
    jobId: string;
    remains: RemainOutCommonType[];
};

/**
 * 更新预约——请求参数类型定义
 * @params id {string} id （必填）
 * @params name {string}  （必填）
 * @params startTime {string}  （必填）
 * @params remains {RemainUpdateInCommonType[]}
 * @params remindContent {string}
 * @params conferenceMembers {InviteeCommonType[]}
 * @params priorityInviteType {PhoneTypeCommonType} 号码类型
 */
export type EditAppointmentsConferenceReqType = {
    id: string;
    name: string;
    startTime: string;
    remains?: RemainUpdateInCommonType[];
    remindContent?: string;
    conferenceMembers?: InviteeCommonType[];
    priorityInviteType?: PhoneTypeCommonType;
};

/**
 * 取消预约——请求参数类型定义
 * @params id {string} id （必填）
 */
export type DeleteAppointmentsConferenceReqType = {
    id: string;
};

/**
 * 预约语音通知——请求参数类型定义
 * @params name {string}
 * @params notifyContent {string}
 * @params playTimes {number}
 * @params startTime {string}
 * @params overTime {string}
 * @params notifyRepeatType {NotifyRepeatTypeCommonType}
 * @params priorityNotifyType {PhoneTypeCommonType} 号码类型
 * @params notifiedMembers {NotifiedMemberCommonType[]}
 */
export type AddAppointmentsVoiceNotifyReqType = {
    name?: string;
    notifyContent?: string;
    playTimes?: number;
    startTime?: string;
    overTime?: string;
    notifyRepeatType?: NotifyRepeatTypeCommonType;
    priorityNotifyType?: PhoneTypeCommonType;
    notifiedMembers?: NotifiedMemberCommonType[];
};

/**
 * 预约语音通知——响应参数类型定义
 * @params jobId {string}
 * @params name {string}
 * @params notifyContent {string}
 * @params playTimes {number}
 * @params startTime {string}
 * @params overTime {string}
 * @params notifyRepeatType {NotifyRepeatTypeCommonType}
 * @params priorityNotifyType {PhoneTypeCommonType} 号码类型
 * @params notifiedMembers {NotifiedMemberCommonType[]}
 * @params executeSchedules {ExecuteScheduleCommonType[]}
 */
export type AddAppointmentsVoiceNotifyResType = {
    jobId: string;
    name: string;
    notifyContent: string;
    playTimes: number;
    startTime: string;
    overTime: string;
    notifyRepeatType: NotifyRepeatTypeCommonType;
    priorityNotifyType: PhoneTypeCommonType;
    notifiedMembers: NotifiedMemberCommonType[];
    executeSchedules: ExecuteScheduleCommonType[];
};

/**
 * 获取预约通知——请求参数类型定义
 * @params Keyword {string} 关键词
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetAppointmentsVoiceNotifyReqType = {
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * 获取预约通知——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {VoiceAppointmentOutCommonType[]} 记录
 */
export type GetAppointmentsVoiceNotifyResType = {
    totalCount: number;
    records: VoiceAppointmentOutCommonType[];
};

/**
 * 获取语音通知——请求参数类型定义
 * @params id {string} id （必填）
 */
export type GetAppointmentsVoiceNotifyByIdReqType = {
    id: string;
};

/**
 * 获取语音通知——响应参数类型定义
 * @params jobId {string}
 * @params name {string}
 * @params notifyContent {string}
 * @params playTimes {number}
 * @params startTime {string}
 * @params overTime {string}
 * @params notifyRepeatType {NotifyRepeatTypeCommonType}
 * @params priorityNotifyType {PhoneTypeCommonType} 号码类型
 * @params notifiedMembers {NotifiedMemberCommonType[]}
 * @params executeSchedules {ExecuteScheduleCommonType[]}
 */
export type GetAppointmentsVoiceNotifyByIdResType = {
    jobId: string;
    name: string;
    notifyContent: string;
    playTimes: number;
    startTime: string;
    overTime: string;
    notifyRepeatType: NotifyRepeatTypeCommonType;
    priorityNotifyType: PhoneTypeCommonType;
    notifiedMembers: NotifiedMemberCommonType[];
    executeSchedules: ExecuteScheduleCommonType[];
};

/**
 * 更新预约通知——请求参数类型定义
 * @params id {string} id （必填）
 * @params name {string}
 * @params notifyContent {string}
 * @params playTimes {number}
 * @params startTime {string}
 * @params overTime {string}
 * @params notifyRepeatType {NotifyRepeatTypeCommonType}
 * @params priorityNotifyType {PhoneTypeCommonType} 号码类型
 * @params notifiedMembers {NotifiedMemberCommonType[]}
 */
export type EditSingleAppointmentsVoiceNotifyReqType = {
    id: string;
    name?: string;
    notifyContent?: string;
    playTimes?: number;
    startTime?: string;
    overTime?: string;
    notifyRepeatType?: NotifyRepeatTypeCommonType;
    priorityNotifyType?: PhoneTypeCommonType;
    notifiedMembers?: NotifiedMemberCommonType[];
};

/**
 * 取消预约通知——请求参数类型定义
 * @params id {string} id （必填）
 */
export type DeleteAppointmentsVoiceNotifyReqType = {
    id: string;
};

/**
 * 修改单次通知——请求参数类型定义
 * @params id {string} id （必填）
 * @params jobId {string}
 * @params name {string}
 * @params notifyContent {string}
 * @params playTimes {number}
 * @params startTime {string}
 * @params priorityNotifyType {PhoneTypeCommonType} 号码类型
 * @params notifiedMembers {NotifiedMemberCommonType[]}
 * @params parentJobId {string}
 */
export type EditAppointmentsVoiceNotifySingleReqType = {
    id: string;
    jobId?: string;
    name?: string;
    notifyContent?: string;
    playTimes?: number;
    startTime?: string;
    priorityNotifyType?: PhoneTypeCommonType;
    notifiedMembers?: NotifiedMemberCommonType[];
    parentJobId?: string;
};

/**
 * 获取语音广播——请求参数类型定义
 * @params id {string} id （必填）
 */
export type GetBroadcastByIdReqType = {
    id: string;
};

/**
 * 获取语音广播——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 名称
 * @params description {string} 描述
 * @params startTime {string} 开启时间
 * @params ownerID {string} 发起语音广播对应的用户ID
 * @params ownerName {string} 发起语音广播对应的用户名称
 * @params status {number} 广播状态
 * @params number {string} 广播组号
 * @params groupID {string} 广播关联组ID
 * @params password {string} 语音广播密码
 */
export type GetBroadcastByIdResType = {
    id: string;
    name: string;
    description: string;
    startTime: string;
    ownerID: string;
    ownerName: string;
    status: number;
    number: string;
    groupID: string;
    password: string;
};

/**
 * 结束指定的广播组——请求参数类型定义
 * @params id {string} id （必填）
 */
export type CloseBroadcastGroupReqType = {
    id: string;
};

/**
 * 创建语音广播——请求参数类型定义
 * @params name {string} 名称
 * @params description {string} 描述
 * @params priorityInviteType {PhoneTypeCommonType} 号码类型
 * @params recallStrategy {RecallStrategyCommonType} 重呼策略
 * @params groupID {string} 关联组ID
 * @params isUseConfig {boolean} 是否采用配置
 * @params isBroadcasterQuitEnd {boolean} 广播员退出后是否结束广播
 * @params isAllowJoin {boolean} 是否允许用户拨号加入
 * @params password {string} 拨号加入密码
 * @params number {string} 主叫号码
 * @params broadcastMembers {InviteeCommonType[]} 待通知成员
 */
export type AddBroadcastReqType = {
    name?: string;
    description?: string;
    priorityInviteType?: PhoneTypeCommonType;
    recallStrategy?: RecallStrategyCommonType;
    groupID?: string;
    isUseConfig?: boolean;
    isBroadcasterQuitEnd?: boolean;
    isAllowJoin?: boolean;
    password?: string;
    number?: string;
    broadcastMembers?: InviteeCommonType[];
};

/**
 * 创建语音广播——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 名称
 * @params description {string} 描述
 * @params startTime {string} 开启时间
 * @params ownerID {string} 发起语音广播对应的用户ID
 * @params ownerName {string} 发起语音广播对应的用户名称
 * @params status {number} 广播状态
 * @params number {string} 广播组号
 * @params groupID {string} 广播关联组ID
 * @params password {string} 语音广播密码
 */
export type AddBroadcastResType = {
    id: string;
    name: string;
    description: string;
    startTime: string;
    ownerID: string;
    ownerName: string;
    status: number;
    number: string;
    groupID: string;
    password: string;
};

/**
 * 获取广播组——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {BroadcastGroupOutCommonType[]} 记录
 */
export type GetBroadcastGroupResType = {
    totalCount: number;
    records: BroadcastGroupOutCommonType[];
};

/**
 * 获取广播组成员——请求参数类型定义
 * @params id {string} id （必填）
 */
export type GetBroadcastGroupMembersReqType = {
    id: string;
};

/**
 * 获取广播组成员——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {BroadcastMemberCommonType[]} 记录
 */
export type GetBroadcastGroupMembersResType = {
    totalCount: number;
    records: BroadcastMemberCommonType[];
};

/**
 * 呼叫——请求参数类型定义
 * @params caller {string} 主叫 （必填）
 * @params called {string} 被叫 （必填）
 */
export type CallBizReqType = {
    caller: string;
    called: string;
};

/**
 * 牛信用户呼叫——请求参数类型定义
 * @params caller {string} 主叫 （必填）
 * @params calledNuChatNormalUserId {string} 被叫用户id （必填）
 */
export type NuChatCallOutReqType = {
    caller: string;
    calledNuChatNormalUserId: string;
};

/**
 * 强挂指定号码——请求参数类型定义
 * @params phone {string} 指定号码 （必填）
 */
export type ForcedNumberReqType = {
    phone: string;
};

/**
 * 接听排队呼叫——请求参数类型定义
 * @params line {string} 用于接听的线路号码 （必填）
 * @params callInPhone {string} 呼入的号码 （必填）
 */
export type AnswerQueueCallReqType = {
    line: string;
    callInPhone: string;
};

/**
 * 强插指定号码——请求参数类型定义
 * @params line {string} 电话线路 （必填）
 * @params destination {string} 目标电话 （必填）
 */
export type ForcedInsertReqType = {
    line: string;
    destination: string;
};

/**
 * 强拆指定号码——请求参数类型定义
 * @params line {string} 电话线路 （必填）
 * @params destination {string} 目标电话 （必填）
 */
export type ForcedReleaseReqType = {
    line: string;
    destination: string;
};

/**
 * 监听指定号码——请求参数类型定义
 * @params line {string} 电话线路 （必填）
 * @params destination {string} 目标电话 （必填）
 */
export type MonitorCallReqType = {
    line: string;
    destination: string;
};

/**
 * 号码配置——响应参数类型定义
 * @params outGoingMinLength {number} 中继出局最小长度
 * @params outGoingPrefix {string} 中继出局前缀
 * @params nonLocalMobileNumberPrefix {string} 非本地号码变换前缀
 * @params needNonLocalMobileNumberTransformation {boolean} 是否需要非本地手机号码变换true: (默认)需要变换,根据AreaCode确定本地区域,然后从号码区域库中找出所有本地号码前缀来判定一个号码是否为本地,非本地号码将自动加上 NonLocalMobileNumberPrefixfalse: 不作任何变换
 * @params mobileNumberLength {number} 手机号码长度
 * @params mobilePrefix {string} 手机前缀
 * @params areaCode {string} 区域码
 */
export type NumberConfigResType = {
    outGoingMinLength: number;
    outGoingPrefix: string;
    nonLocalMobileNumberPrefix: string;
    needNonLocalMobileNumberTransformation: boolean;
    mobileNumberLength: number;
    mobilePrefix: string;
    areaCode: string;
};

/**
 * 号码转换——请求参数类型定义
 * @params originNumber {string}
 */
export type NumberTransformReqType = {
    originNumber?: string;
};

/**
 * 获取所有的上下文信息——请求参数类型定义
 * @params Type {number} 客户端类型,0表示SignalR,1表示TCP
 * @params Keyword {string} 关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetClientContextReqType = {
    Type?: number;
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * 获取所有的上下文信息——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ClientContextOutCommonType[]} 记录
 */
export type GetClientContextResType = {
    totalCount: number;
    records: ClientContextOutCommonType[];
};

/**
 * 踢出当前登录的用户——请求参数类型定义
 * @params type {number}  （必填）
 */
export type KickOutUserReqType = {
    type: number;
};

/**
 * 获取服务结点Id——请求参数类型定义
 * @params cmdText {string} 命令字符串
 */
export type GetCommandsReqType = {
    cmdText?: string;
};

/**
 * 获取语音会议——请求参数类型定义
 * @params id {string} id （必填）
 */
export type GetConferenceByIdReqType = {
    id: string;
};

/**
 * 获取语音会议——响应参数类型定义
 * @params lessMinuteNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterChangeNotify {NotifyObjectCommonType} 通知对象
 * @params leaveMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params enterMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterEnter {string}
 * @params memberEnter {string}
 * @params exitMeeting {string}
 * @params masterChange {string}
 * @params lessOneMinute {string}
 * @params inNotifyVoice {string}
 * @params reportNumberBits {number}
 * @params masterExit {ExitTypeCommonType} 退出方式
 * @params reportLang {CultureCommonType} 区域语言
 * @params meetingTime {number}
 * @params meetingPhone {string}
 * @params needRecord {boolean}
 * @params displayNumber {string}
 * @params appointedConferenceID {number}
 * @params isMuteJoinConference {boolean}
 * @params id {string} ID
 * @params name {string} 名称
 * @params description {string} 描述
 * @params conferenceId {number} 会议ID
 * @params conferenceServerId {string} 当前所在的会议服务器
 * @params conferenceCapacity {number} 会议室容量
 * @params conferenceTime {number} 会议室时长
 * @params state {ConferenceStateCommonType} 会议室状态 // add by liujian 2012-7-17 11:12:13
 * @params recallStrategy {RecallStrategyCommonType} 重呼策略
 * @params priorityInviteType {PhoneTypeCommonType} 号码类型
 * @params groupID {string} 会议关联组ID
 * @params isStartByGroup {boolean} 是否采用组开启
 * @params numberList {string} 号码列表
 * @params recallConfig {string} 重呼配置
 * @params isEmergency {boolean} 是否紧急会议
 * @params isInfiniteRecall {boolean} 是否开启无限重呼
 * @params startTime {string} 会议开启时间
 * @params mode {ModeCommonType} 语音会议模式 0:自由模式；1：对讲模式
 */
export type GetConferenceByIdResType = {
    lessMinuteNotifyObject: NotifyObjectCommonType;
    masterChangeNotify: NotifyObjectCommonType;
    leaveMeetingNotifyObject: NotifyObjectCommonType;
    enterMeetingNotifyObject: NotifyObjectCommonType;
    masterEnter: string;
    memberEnter: string;
    exitMeeting: string;
    masterChange: string;
    lessOneMinute: string;
    inNotifyVoice: string;
    reportNumberBits: number;
    masterExit: ExitTypeCommonType;
    reportLang: CultureCommonType;
    meetingTime: number;
    meetingPhone: string;
    needRecord: boolean;
    displayNumber: string;
    appointedConferenceID: number;
    isMuteJoinConference: boolean;
    id: string;
    name: string;
    description: string;
    conferenceId: number;
    conferenceServerId: string;
    conferenceCapacity: number;
    conferenceTime: number;
    state: ConferenceStateCommonType;
    recallStrategy: RecallStrategyCommonType;
    priorityInviteType: PhoneTypeCommonType;
    groupID: string;
    isStartByGroup: boolean;
    numberList: string;
    recallConfig: string;
    isEmergency: boolean;
    isInfiniteRecall: boolean;
    startTime: string;
    mode: ModeCommonType;
};

/**
 * 结束指定会议——请求参数类型定义
 * @params id {string} id （必填）
 */
export type CloseConferenceReqType = {
    id: string;
};

/**
 * 创建会议室——请求参数类型定义
 * @params lessMinuteNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterChangeNotify {NotifyObjectCommonType} 通知对象
 * @params leaveMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params enterMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterEnter {string}
 * @params memberEnter {string}
 * @params exitMeeting {string}
 * @params masterChange {string}
 * @params lessOneMinute {string}
 * @params inNotifyVoice {string}
 * @params reportNumberBits {number}
 * @params masterExit {ExitTypeCommonType} 退出方式
 * @params reportLang {CultureCommonType} 区域语言
 * @params meetingTime {number}
 * @params meetingPhone {string}
 * @params needRecord {boolean}
 * @params displayNumber {string}
 * @params appointedConferenceID {number}
 * @params isMuteJoinConference {boolean}
 * @params name {string}
 * @params description {string}
 * @params conferenceServerId {string}
 * @params conferenceMembers {InviteeCommonType[]}
 * @params recallStrategy {RecallStrategyCommonType} 重呼策略
 * @params priorityInviteType {PhoneTypeCommonType} 号码类型
 * @params groupID {string}
 * @params conferenceCapacity {number}
 * @params isEmergency {boolean}
 * @params mode {ModeCommonType} 语音会议模式 0:自由模式；1：对讲模式
 */
export type AddConferenceReqType = {
    lessMinuteNotifyObject?: NotifyObjectCommonType;
    masterChangeNotify?: NotifyObjectCommonType;
    leaveMeetingNotifyObject?: NotifyObjectCommonType;
    enterMeetingNotifyObject?: NotifyObjectCommonType;
    masterEnter?: string;
    memberEnter?: string;
    exitMeeting?: string;
    masterChange?: string;
    lessOneMinute?: string;
    inNotifyVoice?: string;
    reportNumberBits?: number;
    masterExit?: ExitTypeCommonType;
    reportLang?: CultureCommonType;
    meetingTime?: number;
    meetingPhone?: string;
    needRecord?: boolean;
    displayNumber?: string;
    appointedConferenceID?: number;
    isMuteJoinConference?: boolean;
    name?: string;
    description?: string;
    conferenceServerId?: string;
    conferenceMembers?: InviteeCommonType[];
    recallStrategy?: RecallStrategyCommonType;
    priorityInviteType?: PhoneTypeCommonType;
    groupID?: string;
    conferenceCapacity?: number;
    isEmergency?: boolean;
    mode?: ModeCommonType;
};

/**
 * 创建会议室——响应参数类型定义
 * @params lessMinuteNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterChangeNotify {NotifyObjectCommonType} 通知对象
 * @params leaveMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params enterMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterEnter {string}
 * @params memberEnter {string}
 * @params exitMeeting {string}
 * @params masterChange {string}
 * @params lessOneMinute {string}
 * @params inNotifyVoice {string}
 * @params reportNumberBits {number}
 * @params masterExit {ExitTypeCommonType} 退出方式
 * @params reportLang {CultureCommonType} 区域语言
 * @params meetingTime {number}
 * @params meetingPhone {string}
 * @params needRecord {boolean}
 * @params displayNumber {string}
 * @params appointedConferenceID {number}
 * @params isMuteJoinConference {boolean}
 * @params id {string} ID
 * @params name {string} 名称
 * @params description {string} 描述
 * @params conferenceId {number} 会议ID
 * @params conferenceServerId {string} 当前所在的会议服务器
 * @params conferenceCapacity {number} 会议室容量
 * @params conferenceTime {number} 会议室时长
 * @params state {ConferenceStateCommonType} 会议室状态 // add by liujian 2012-7-17 11:12:13
 * @params recallStrategy {RecallStrategyCommonType} 重呼策略
 * @params priorityInviteType {PhoneTypeCommonType} 号码类型
 * @params groupID {string} 会议关联组ID
 * @params isStartByGroup {boolean} 是否采用组开启
 * @params numberList {string} 号码列表
 * @params recallConfig {string} 重呼配置
 * @params isEmergency {boolean} 是否紧急会议
 * @params isInfiniteRecall {boolean} 是否开启无限重呼
 * @params startTime {string} 会议开启时间
 * @params mode {ModeCommonType} 语音会议模式 0:自由模式；1：对讲模式
 */
export type AddConferenceResType = {
    lessMinuteNotifyObject: NotifyObjectCommonType;
    masterChangeNotify: NotifyObjectCommonType;
    leaveMeetingNotifyObject: NotifyObjectCommonType;
    enterMeetingNotifyObject: NotifyObjectCommonType;
    masterEnter: string;
    memberEnter: string;
    exitMeeting: string;
    masterChange: string;
    lessOneMinute: string;
    inNotifyVoice: string;
    reportNumberBits: number;
    masterExit: ExitTypeCommonType;
    reportLang: CultureCommonType;
    meetingTime: number;
    meetingPhone: string;
    needRecord: boolean;
    displayNumber: string;
    appointedConferenceID: number;
    isMuteJoinConference: boolean;
    id: string;
    name: string;
    description: string;
    conferenceId: number;
    conferenceServerId: string;
    conferenceCapacity: number;
    conferenceTime: number;
    state: ConferenceStateCommonType;
    recallStrategy: RecallStrategyCommonType;
    priorityInviteType: PhoneTypeCommonType;
    groupID: string;
    isStartByGroup: boolean;
    numberList: string;
    recallConfig: string;
    isEmergency: boolean;
    isInfiniteRecall: boolean;
    startTime: string;
    mode: ModeCommonType;
};

/**
 * 获取全部会议信息——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ConferenceCommonType[]} 记录
 */
export type GetConferenceResType = {
    totalCount: number;
    records: ConferenceCommonType[];
};

/**
 * 切换会议模式——请求参数类型定义
 * @params id {string} id （必填）
 * @params mode {number} 0:自由模式；1：对讲模式 （必填）
 */
export type ChangeConferenceModeReqType = {
    id: string;
    mode: number;
};

/**
 * 获取会议内的成员信息——请求参数类型定义
 * @params id {string} id （必填）
 */
export type GetConferenceMemberReqType = {
    id: string;
};

/**
 * 获取会议内的成员信息——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ConferenceMemberCommonType[]} 记录
 */
export type GetConferenceMemberResType = {
    totalCount: number;
    records: ConferenceMemberCommonType[];
};

/**
 * 获取所有的线路信息——请求参数类型定义
 * @params GroupNumber {string} 用户组接入码
 * @params Keyword {string} 关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetPhoneLinesReqType = {
    GroupNumber?: string;
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * 获取所有的线路信息——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PhoneLineCommonType[]} 记录
 */
export type GetPhoneLinesResType = {
    totalCount: number;
    records: PhoneLineCommonType[];
};

/**
 * 按条件查询会议记录——请求参数类型定义
 * @params Type {number} 记录类型
 * @params KeyWord {string} 关键字
 * @params BeginTime {string} 起始时间
 * @params EndTime {string} 截止时间
 * @params PlatformId {string} 分级平台Id
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetConferenceRecordReqType = {
    Type?: number;
    KeyWord?: string;
    BeginTime?: string;
    EndTime?: string;
    PlatformId?: string;
    page?: number;
    per_page?: number;
};

/**
 * 按条件查询会议记录——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ConferenceRecordOutCommonType[]} 记录
 */
export type GetConferenceRecordResType = {
    totalCount: number;
    records: ConferenceRecordOutCommonType[];
};

/**
 * 通过会议ID获取对应的会议记录——请求参数类型定义
 * @params id {string} id （必填）
 * @params platformId {string} platformId
 */
export type GetConferenceRecordByIdReqType = {
    id: string;
    platformId?: string;
};

/**
 * 通过会议ID获取对应的会议记录——响应参数类型定义
 * @params id {string} 会议ID
 * @params ownerID {string} 会议发起人ID
 * @params ownerName {string} 会议发起人名称
 * @params ownerTitle {string} 会议发起人职务
 * @params name {string} 会议名称
 * @params number {string} 会议号码
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params type {ConferenceRecordTypeCommonType} 会议记录类型
 * @params description {string} 描述
 * @params groupID {string} 所属组ID
 * @params password {string} 会议密码
 * @params extension {undefined} 记录拓展信息
 * @params participants {undefined} 参会成员
 */
export type GetConferenceRecordByIdResType = {
    id: string;
    ownerID: string;
    ownerName: string;
    ownerTitle: string;
    name: string;
    number: string;
    startTime: string;
    endTime: string;
    type: ConferenceRecordTypeCommonType;
    description: string;
    groupID: string;
    password: string;
    extension: undefined;
    participants: undefined;
};

/**
 * 按条件查询通话记录——请求参数类型定义
 * @params KeyWord {string} 关键字
 * @params CallerNumber {string} 主叫号码
 * @params CalledNumber {string} 被叫号码
 * @params CallerName {string} 主叫名称
 * @params CalledName {string} 被叫名称
 * @params UserID {string} 联系人ID
 * @params IsTwoWay {boolean} 是否双向查询,
 * @params BeginTime {string} 起始时间
 * @params EndTime {string} 截止时间
 * @params Type {number} 记录类型
 * @params ConferenceID {string} 会议ID
 * @params PlatformId {string} 分级平台id
 * @params Content {string} 搜索通话内容
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetCallRecordReqType = {
    KeyWord?: string;
    CallerNumber?: string;
    CalledNumber?: string;
    CallerName?: string;
    CalledName?: string;
    UserID?: string;
    IsTwoWay?: boolean;
    BeginTime?: string;
    EndTime?: string;
    Type?: number;
    ConferenceID?: string;
    PlatformId?: string;
    Content?: string;
    page?: number;
    per_page?: number;
};

/**
 * 按条件查询通话记录——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {CallRecordCommonType[]} 记录
 */
export type GetCallRecordResType = {
    totalCount: number;
    records: CallRecordCommonType[];
};

/**
 * 给通话记录添加录制视频id——请求参数类型定义
 * @params callerNumber {string} 主叫号码 （必填）
 * @params calledNumber {string} 被叫号码 （必填）
 * @params beginTime {string} 起始时间 （必填）
 * @params endTime {string} 截止时间 （必填）
 * @params callVideoId {string} 录制视频组id （必填）
 */
export type AddVideoIdForCallRecordReqType = {
    callerNumber: string;
    calledNumber: string;
    beginTime: string;
    endTime: string;
    callVideoId: string;
};

/**
 * 运维所有通话记录行政区划（历史数据补全运维接口）——请求参数类型定义
 * @params defaultAreaCode {string} 默认行政区域，在匹配不到行政区域时以该行政区域为主
 * @params isOnlyQueryAreaCodeEmpty {boolean} 是否只运维行政区域为空的数据
 */
export type OperationCallRecordAreacodeReqType = {
    defaultAreaCode?: string;
    isOnlyQueryAreaCodeEmpty?: boolean;
};

/**
 * 通过会议ID获取其对应的通话记录——请求参数类型定义
 * @params ConferenceID {string} 会议记录ID
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetCallRecordByConferenceIdReqType = {
    ConferenceID?: string;
    page?: number;
    per_page?: number;
};

/**
 * 通过会议ID获取其对应的通话记录——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {CallRecordCommonType[]} 记录
 */
export type GetCallRecordByConferenceIdResType = {
    totalCount: number;
    records: CallRecordCommonType[];
};

/**
 * 分页获取通话信息——请求参数类型定义
 * @params Type {number} 通话信息类型
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetCallingReqType = {
    Type?: number;
    page?: number;
    per_page?: number;
};

/**
 * 分页获取通话信息——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {CallingWrapperCommonType[]} 记录
 */
export type GetCallingResType = {
    totalCount: number;
    records: CallingWrapperCommonType[];
};

/**
 * 分页获取队列——请求参数类型定义
 * @params AccessNumber {string} 接入码
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetQueueReqType = {
    AccessNumber?: string;
    page?: number;
    per_page?: number;
};

/**
 * 分页获取队列——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {CallStatusCommonType[]} 记录
 */
export type GetQueueResType = {
    totalCount: number;
    records: CallStatusCommonType[];
};

/**
 * 分页查询电话——请求参数类型定义
 * @params Keyword {string} 关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetPhonesReqType = {
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * 分页查询电话——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PhoneCommonType[]} 记录
 */
export type GetPhonesResType = {
    totalCount: number;
    records: PhoneCommonType[];
};

/**
 * 分页查询外线电话——请求参数类型定义
 * @params Keyword {string} 关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetThunkPhonesReqType = {
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * 分页查询外线电话——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PhoneCommonType[]} 记录
 */
export type GetThunkPhonesResType = {
    totalCount: number;
    records: PhoneCommonType[];
};

/**
 * 更新电话位置——请求参数类型定义
 * @params phoneNumber {string}  （必填）
 * @params longitude {number} 经度
 * @params latitude {number} 维度
 */
export type UpdatePhoneLocationReqType = {
    phoneNumber: string;
    longitude?: number;
    latitude?: number;
};

/**
 * 按条件查询操作日志——请求参数类型定义
 * @params StartTime {string} 开始时间
 * @params EndTime {string} 结束时间
 * @params Type {number} 日志类型
 * @params GroupID {string} 日志分组ID
 * @params Keyword {string} 关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetOperationLogReqType = {
    StartTime?: string;
    EndTime?: string;
    Type?: number;
    GroupID?: string;
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * 按条件查询操作日志——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {OperationLogRecordOutCommonType[]} 记录
 */
export type GetOperationLogResType = {
    totalCount: number;
    records: OperationLogRecordOutCommonType[];
};

/**
 * 演示CustomValidationException——请求参数类型定义
 * @params resourceId {string} resourceId （必填）
 */
export type GetExceptionDemoReqType = {
    resourceId: string;
};

/**
 * 演示UnHandleException——请求参数类型定义
 * @params resourceId {string} resourceId （必填）
 */
export type DeleteExceptionDemoReqType = {
    resourceId: string;
};

/**
 * 演示ForbiddenException——请求参数类型定义
 * @params resourceId {string} resourceId （必填）
 */
export type AddExceptionDemoReqType = {
    resourceId: string;
};

/**
 * 根据条件查询传真——请求参数类型定义
 * @params BeginTime {string} 开始时间
 * @params EndTime {string} 结束时间
 * @params Type {number} 传真记录类型
 * @params KeyWord {string} 关键字
 * @params IsRead {boolean} 是否已读
 * @params Status {number} 传真状态
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetFaxListReqType = {
    BeginTime?: string;
    EndTime?: string;
    Type?: number;
    KeyWord?: string;
    IsRead?: boolean;
    Status?: number;
    page?: number;
    per_page?: number;
};

/**
 * 根据条件查询传真——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {FaxOutCommonType[]} 记录
 */
export type GetFaxListResType = {
    totalCount: number;
    records: FaxOutCommonType[];
};

/**
 * 发送传真——请求参数类型定义
 * @params Title {string} 主题 （必填）
 * @params InternationalCode {string} 国际区号 默认：86 （必填）
 * @params PrioritySendType {number} 优先选择发送的电话类型
 * @params LongDistanceCode {string} 长途区号 默认：755 （必填）
 * @params Memo {string} 备注
 * @params Receivers {string}  收件人集合Json字符串 [{ "ID": "213334449028", "Name": "张三", "Title": "游民", "Phones": [{ "Number": "XXX", "Type": 0 }] }, { "ID": "213334449028", "Name": "张三", "Title": "游民", "Phones": [{ "Number": "XXX", "Type": 0 }] }]  （必填）
 * @params SendFirst {boolean} 是否优先发送
 */
export type SendFaxReqType = {
    Title: string;
    InternationalCode: string;
    PrioritySendType?: number;
    LongDistanceCode: string;
    Memo?: string;
    Receivers: string;
    SendFirst?: boolean;
};

/**
 * 发送传真——响应参数类型定义
 * @params id {string} ID
 * @params title {string} 主题
 * @params faxNumber {string} 传真号码
 * @params internationalCode {string} 国际区号
 * @params isRead {boolean} true 已读 / false 未读
 * @params isSend {boolean} 发件/收件 标识true 表示是发件
 * @params longDistanceCode {string} 长途区号
 * @params memo {string} 备注
 * @params receiveCompany {string} 收件人公司
 * @params receiver {string} 收件人
 * @params receiverID {string} 收件人ID
 * @params receiverTitle {string} 收件人职位
 * @params sendCompany {string} 发件人公司
 * @params sender {string} 发件人
 * @params senderID {string} 发件人ID
 * @params senderTitle {string} 发件人职位
 * @params sendFirst {boolean} 是否优先发送
 * @params sendTime {string} 发送时间
 * @params status {FaxStatusCommonType} 发送状态
 * @params files {FileRecordCommonType[]} 传真的文件列表
 * @params extension {string} 拓展字段
 */
export type SendFaxResType = {
    id: string;
    title: string;
    faxNumber: string;
    internationalCode: string;
    isRead: boolean;
    isSend: boolean;
    longDistanceCode: string;
    memo: string;
    receiveCompany: string;
    receiver: string;
    receiverID: string;
    receiverTitle: string;
    sendCompany: string;
    sender: string;
    senderID: string;
    senderTitle: string;
    sendFirst: boolean;
    sendTime: string;
    status: FaxStatusCommonType;
    files: FileRecordCommonType[];
    extension: string;
};

/**
 * 获取指定传真——请求参数类型定义
 * @params id {string} id （必填）
 */
export type GetFaxInfoByIdReqType = {
    id: string;
};

/**
 * 获取指定传真——响应参数类型定义
 * @params id {string} ID
 * @params title {string} 主题
 * @params faxNumber {string} 传真号码
 * @params internationalCode {string} 国际区号
 * @params isRead {boolean} true 已读 / false 未读
 * @params isSend {boolean} 发件/收件 标识true 表示是发件
 * @params longDistanceCode {string} 长途区号
 * @params memo {string} 备注
 * @params receiveCompany {string} 收件人公司
 * @params receiver {string} 收件人
 * @params receiverID {string} 收件人ID
 * @params receiverTitle {string} 收件人职位
 * @params sendCompany {string} 发件人公司
 * @params sender {string} 发件人
 * @params senderID {string} 发件人ID
 * @params senderTitle {string} 发件人职位
 * @params sendFirst {boolean} 是否优先发送
 * @params sendTime {string} 发送时间
 * @params status {FaxStatusCommonType} 发送状态
 * @params files {FileRecordCommonType[]} 传真的文件列表
 * @params extension {string} 拓展字段
 */
export type GetFaxInfoByIdResType = {
    id: string;
    title: string;
    faxNumber: string;
    internationalCode: string;
    isRead: boolean;
    isSend: boolean;
    longDistanceCode: string;
    memo: string;
    receiveCompany: string;
    receiver: string;
    receiverID: string;
    receiverTitle: string;
    sendCompany: string;
    sender: string;
    senderID: string;
    senderTitle: string;
    sendFirst: boolean;
    sendTime: string;
    status: FaxStatusCommonType;
    files: FileRecordCommonType[];
    extension: string;
};

/**
 * 将传真重新发送——请求参数类型定义
 * @params id {string} id （必填）
 */
export type ResendFaxReqType = {
    id: string;
};

/**
 * 分页获取传真草稿——请求参数类型定义
 * @params Keyword {string} 关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetDraftFaxListReqType = {
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * 分页获取传真草稿——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {FaxDraftOutCommonType[]} 记录
 */
export type GetDraftFaxListResType = {
    totalCount: number;
    records: FaxDraftOutCommonType[];
};

/**
 * 将传真保存至草稿箱——请求参数类型定义
 * @params Title {string} 主题 （必填）
 * @params InternationalCode {string} 国际区号 默认：86 （必填）
 * @params PrioritySendType {number} 优先选择发送的电话类型
 * @params LongDistanceCode {string} 长途区号 默认：755 （必填）
 * @params Memo {string} 备注
 * @params Receivers {string}  收件人集合Json字符串 [{ "ID": "213334449028", "Name": "张三", "Title": "游民", "Phones": [{ "Number": "XXX", "Type": 0 }] }, { "ID": "213334449028", "Name": "张三", "Title": "游民", "Phones": [{ "Number": "XXX", "Type": 0 }] }]  （必填）
 * @params SendFirst {boolean} 是否优先发送
 */
export type SaveFaxToDraftReqType = {
    Title: string;
    InternationalCode: string;
    PrioritySendType?: number;
    LongDistanceCode: string;
    Memo?: string;
    Receivers: string;
    SendFirst?: boolean;
};

/**
 * 将传真保存至草稿箱——响应参数类型定义
 * @params id {number} 记录ID
 * @params title {string} 主题
 * @params internationalCode {string} 国际区号
 * @params prioritySendType {PhoneTypeCommonType} 优先选择发送的电话类型
 * @params longDistanceCode {string} 长途区号
 * @params memo {string} 备注
 * @params senderID {string} 发送人ID
 * @params receivers {NotifiedMemberCommonType[]} 收件人集合
 * @params sendFirst {boolean} 是否优先发送
 * @params saveTime {string} 保存时间
 * @params files {FileRecordCommonType[]} 传真附件集合
 * @params extension {string} 拓展字段
 */
export type SaveFaxToDraftResType = {
    id: number;
    title: string;
    internationalCode: string;
    prioritySendType: PhoneTypeCommonType;
    longDistanceCode: string;
    memo: string;
    senderID: string;
    receivers: NotifiedMemberCommonType[];
    sendFirst: boolean;
    saveTime: string;
    files: FileRecordCommonType[];
    extension: string;
};

/**
 * 获取指定的传真草稿——请求参数类型定义
 * @params id {number} id （必填）
 */
export type GetDraftFaxInfoByIdReqType = {
    id: number;
};

/**
 * 获取指定的传真草稿——响应参数类型定义
 * @params id {number} 记录ID
 * @params title {string} 主题
 * @params internationalCode {string} 国际区号
 * @params prioritySendType {PhoneTypeCommonType} 优先选择发送的电话类型
 * @params longDistanceCode {string} 长途区号
 * @params memo {string} 备注
 * @params senderID {string} 发送人ID
 * @params receivers {NotifiedMemberCommonType[]} 收件人集合
 * @params sendFirst {boolean} 是否优先发送
 * @params saveTime {string} 保存时间
 * @params files {FileRecordCommonType[]} 传真附件集合
 * @params extension {string} 拓展字段
 */
export type GetDraftFaxInfoByIdResType = {
    id: number;
    title: string;
    internationalCode: string;
    prioritySendType: PhoneTypeCommonType;
    longDistanceCode: string;
    memo: string;
    senderID: string;
    receivers: NotifiedMemberCommonType[];
    sendFirst: boolean;
    saveTime: string;
    files: FileRecordCommonType[];
    extension: string;
};

/**
 * 更新草稿箱内的传真——请求参数类型定义
 * @params id {number} id （必填）
 * @params Title {string} 主题 （必填）
 * @params InternationalCode {string} 国际区号 默认：86 （必填）
 * @params PrioritySendType {number} 优先选择发送的电话类型
 * @params LongDistanceCode {string} 长途区号 默认：755 （必填）
 * @params Memo {string} 备注
 * @params Receivers {string}  收件人集合Json字符串 [{ "ID": "213334449028", "Name": "张三", "Title": "游民",  "Phones": [{ "Number": "XXX", "Type": 0 }] }, { "ID": "213334449028", "Name": "张三", "Title": "游民",  "Phones": [{ "Number": "XXX", "Type": 0 }] }]  （必填）
 * @params FilesJson {string}  传真附件集合Json字符串 [{ "ID": "asd1236762173617", "Name": "xxxx.pdf", "Length": 10000,"FullPath":"fssfiles/1c04c9a1eb4d4a838759d4c2a0c7b042" }, { "ID": "asd1236762173618", "Name": "xxxx.doc", "Length": 10000,"FullPath":"fssfiles/1c04c9a1eb4d4a838759d4c2a0c7b043" }]
 * @params SendFirst {boolean} 是否优先发送
 * @params Extension {string} 拓展字段
 */
export type UpdateDraftFaxReqType = {
    id: number;
    Title: string;
    InternationalCode: string;
    PrioritySendType?: number;
    LongDistanceCode: string;
    Memo?: string;
    Receivers: string;
    FilesJson?: string;
    SendFirst?: boolean;
    Extension?: string;
};

/**
 * 删除指定的传真草稿——请求参数类型定义
 * @params id {number} id （必填）
 */
export type DeleteDraftFaxReqType = {
    id: number;
};

/**
 * 删除指定的传真草稿——响应参数类型定义
 * @params id {number} 记录ID
 * @params title {string} 主题
 * @params internationalCode {string} 国际区号
 * @params prioritySendType {PhoneTypeCommonType} 优先选择发送的电话类型
 * @params longDistanceCode {string} 长途区号
 * @params memo {string} 备注
 * @params senderID {string} 发送人ID
 * @params receivers {NotifiedMemberCommonType[]} 收件人集合
 * @params sendFirst {boolean} 是否优先发送
 * @params saveTime {string} 保存时间
 * @params files {FileRecordCommonType[]} 传真附件集合
 * @params extension {string} 拓展字段
 */
export type DeleteDraftFaxResType = {
    id: number;
    title: string;
    internationalCode: string;
    prioritySendType: PhoneTypeCommonType;
    longDistanceCode: string;
    memo: string;
    senderID: string;
    receivers: NotifiedMemberCommonType[];
    sendFirst: boolean;
    saveTime: string;
    files: FileRecordCommonType[];
    extension: string;
};

/**
 * 将传真草稿进行发送——请求参数类型定义
 * @params id {number} id （必填）
 */
export type SendDraftFaxReqType = {
    id: number;
};

/**
 * 将传真移至回收站——请求参数类型定义
 * @params id {string} id （必填）
 */
export type MoveFaxToRecycleBinReqType = {
    id: string;
};

/**
 * 将传真从回收站删除——请求参数类型定义
 * @params id {string} id （必填）
 */
export type DeleteRecycleBinFaxReqType = {
    id: string;
};

/**
 * 将传真从回收站恢复——请求参数类型定义
 * @params id {string} id （必填）
 */
export type RecoverRecycleBinFaxReqType = {
    id: string;
};

/**
 * 将传真设置为已读——请求参数类型定义
 * @params id {string} id （必填）
 */
export type ReadFaxReqType = {
    id: string;
};

/**
 * 更新黑名单——请求参数类型定义
 * @params isDelete {boolean} 是否删除黑名单
 * @params number {string} 号码 （必填）
 */
export type UpdateBlackListReqType = {
    isDelete?: boolean;
    number: string;
};

/**
 * 分页获取黑名单——请求参数类型定义
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetBlackListReqType = {
    page?: number;
    per_page?: number;
};

/**
 * 分页获取黑名单——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetBlackListResType = {
    totalCount: number;
    records: any[];
};

/**
 * 更新白名单——请求参数类型定义
 * @params isDelete {boolean} 是否删除白名单
 * @params number {string} 号码 （必填）
 */
export type UpdateWhitelistReqType = {
    isDelete?: boolean;
    number: string;
};

/**
 * 分页获取白名单——请求参数类型定义
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetWhitelistReqType = {
    page?: number;
    per_page?: number;
};

/**
 * 分页获取白名单——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetWhitelistResType = {
    totalCount: number;
    records: any[];
};

/**
 * 分级调度操作——请求参数类型定义
 * @params version {string} 请求版本 （必填）
 * @params id {string} Id （必填）
 * @params bizName {string} 业务名称 （必填）
 * @params bizData {undefined} 业务数据 （必填）
 * @params sourceId {string} 源平台 Id （必填）
 * @params destinationId {string} 目标平台 Id （必填）
 * @params type {number} 业务类型：1-Erds|2-Vfs|3-Rms （必填）
 * @params timeout {number} 请求超时设置(单位：秒) （必填）
 */
export type EdmsGradingDispatchReqType = {
    version: string;
    id: string;
    bizName: string;
    bizData: undefined;
    sourceId: string;
    destinationId: string;
    type: number;
    timeout: number;
};

/**
 * 查询号码对应的短信会话——请求参数类型定义
 * @params phoneNum {string}  （必填）
 */
export type GetMessagesReqType = {
    phoneNum: string;
};

/**
 * 查询号码对应的短信会话——响应参数类型定义
 * @params id {string} 会话Id
 * @params isGroupSending {boolean} 标识此会话是否为群发
 * @params config {MessageConfigCommonType} 短信配置
 * @params ownSidePhone {string} 己方号码
 * @params oppositePhones {any[]} 对端号码
 * @params messages {ShortMessageCommonType[]} 短信列表
 */
export type GetMessagesResType = {
    id: string;
    isGroupSending: boolean;
    config: MessageConfigCommonType;
    ownSidePhone: string;
    oppositePhones: any[];
    messages: ShortMessageCommonType[];
};

/**
 * 发送短信——请求参数类型定义
 * @params sender {string} 短信发送者
 * @params receiver {string} 短信接收者
 * @params content {string} 短信内容
 */
export type PostMessagesReqType = {
    sender?: string;
    receiver?: string;
    content?: string;
};

/**
 * 查询短信记录——请求参数类型定义
 * @params StartTime {string} 开始时间 （必填）
 * @params EndTime {string} 结束时间 （必填）
 * @params Keyword {string} 关键字搜索（搜索短信内容）
 * @params PlatformId {string} 分级平台Id
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetMessageRecordsReqType = {
    StartTime: string;
    EndTime: string;
    Keyword?: string;
    PlatformId?: string;
    page?: number;
    per_page?: number;
};

/**
 * 查询短信记录——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {MessageOutCommonType[]} 记录
 */
export type GetMessageRecordsResType = {
    totalCount: number;
    records: MessageOutCommonType[];
};

/**
 * 通过ID获取短信会话——请求参数类型定义
 * @params id {string} id （必填）
 */
export type GetMessagesByIdReqType = {
    id: string;
};

/**
 * 通过ID获取短信会话——响应参数类型定义
 * @params id {string} 组消息ID
 */
export type GetMessagesByIdResType = {
    id: string;
};

/**
 * 群发短信——请求参数类型定义
 * @params senderNumber {string} 短信发送者的号码
 * @params receiverNumbers {any[]} 短信接收者 （必填）
 * @params content {string} 短信内容
 */
export type PostMessageGroupReqType = {
    senderNumber?: string;
    receiverNumbers: any[];
    content?: string;
};

/**
 * 群发短信——响应参数类型定义
 * @params id {string} 组消息ID
 */
export type PostMessageGroupResType = {
    id: string;
};

/**
 * 按条件查询短信模板——请求参数类型定义
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetMessageTemplatesReqType = {
    page?: number;
    per_page?: number;
};

/**
 * 按条件查询短信模板——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {MessageTemplateCommonType[]} 记录
 */
export type GetMessageTemplatesResType = {
    totalCount: number;
    records: MessageTemplateCommonType[];
};

/**
 * 新建短信模板——请求参数类型定义
 * @params name {string} 模板内容
 * @params content {string} 配置信息
 */
export type AddMessageTemplateReqType = {
    name?: string;
    content?: string;
};

/**
 * 新建短信模板——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 名称
 * @params stationId {string} 节点ID
 * @params content {string} 模板内容
 */
export type AddMessageTemplateResType = {
    id: string;
    name: string;
    stationId: string;
    content: string;
};

/**
 * 通过ID获取短信模板——请求参数类型定义
 * @params id {string} id （必填）
 */
export type GetMessageTemplateByIdReqType = {
    id: string;
};

/**
 * 通过ID获取短信模板——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 名称
 * @params stationId {string} 节点ID
 * @params content {string} 模板内容
 */
export type GetMessageTemplateByIdResType = {
    id: string;
    name: string;
    stationId: string;
    content: string;
};

/**
 * 修改短信模板——请求参数类型定义
 * @params id {string} id （必填）
 * @params name {string} 模板内容
 * @params content {string} 配置信息
 */
export type EditMessageTemplateReqType = {
    id: string;
    name?: string;
    content?: string;
};

/**
 * 删除短信模板——请求参数类型定义
 * @params id {string} id （必填）
 */
export type DeleteMessageTemplateReqType = {
    id: string;
};

/**
 * 修改短信会话名称——请求参数类型定义
 * @params id {string} id （必填）
 * @params name {string} 短信会话名称 （必填）
 */
export type EditMessageSessionNameReqType = {
    id: string;
    name: string;
};

/**
 * 更新所有短信记录行政区划（历史数据补全运维接口）——请求参数类型定义
 * @params defaultAreaCode {string} 默认行政区划编码，若该值为空，默认值则使用配置文件的值
 * @params isOnlyQueryAreaCodeEmpty {boolean} 是否只更新行政区域码为空的联系人 默认：true （必填）
 */
export type EditMessageDistrictReqType = {
    defaultAreaCode?: string;
    isOnlyQueryAreaCodeEmpty: boolean;
};

/**
 * 开启电话值守夜服服务——请求参数类型定义
 * @params phoneNumber {string} 用于夜服值守的号码 （必填）
 */
export type PhoneDutyReqType = {
    phoneNumber: string;
};

/**
 * 开启自动语音夜服服务——请求参数类型定义
 * @params audioID {number} 夜服提示语音ID（默认值0x30044031)
 */
export type AutoVoiceReqType = {
    audioID?: number;
};

/**
 * 获取当前用户的夜服状态——响应参数类型定义
 * @params isOpenNightService {boolean} 是否开启夜服
 * @params accessNumber {string} 开启夜服的线路组接入码
 */
export type GetUserNightServicesStateResType = {
    isOpenNightService: boolean;
    accessNumber: string;
};

/**
 * 分页获取线路组夜服状态——请求参数类型定义
 * @params Keyword {string} 关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetNightServicesStatusReqType = {
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * 分页获取线路组夜服状态——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {NightServiceStateOutCommonType[]} 记录
 */
export type GetNightServicesStatusResType = {
    totalCount: number;
    records: NightServiceStateOutCommonType[];
};

/**
 * 通过ID获取Pet——请求参数类型定义
 * @params id {number} id （必填）
 */
export type GetPetByIdReqType = {
    id: number;
};

/**
 * 通过ID获取Pet——响应参数类型定义
 * @params id {number}
 * @params name {string}
 * @params category {CategoryCommonType}
 * @params photoUrls {any[]}
 * @params tags {TagCommonType[]}
 * @params status {PetStatusCommonType} pet status in the store
 * @params additionalProperties {any}
 */
export type GetPetByIdResType = {
    id: number;
    name: string;
    category: CategoryCommonType;
    photoUrls: any[];
    tags: TagCommonType[];
    status: PetStatusCommonType;
    additionalProperties: any;
};

/**
 * 获取录音通知——请求参数类型定义
 * @params id {string} id （必填）
 */
export type GetRecordNotifiesByIdReqType = {
    id: string;
};

/**
 * 获取录音通知——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 名称
 * @params description {string} 描述
 * @params startTime {string} 开启时间
 * @params number {number} 录音通知号(默认为0)
 * @params fileGroupID {string} 录音文件所在文件目录ID
 * @params notifyContent {string} 待通知的文本信息
 * @params ownerID {string} 发起录音通知组对应的用户ID
 * @params ownerName {string} 录音通知组对应的用户名称
 * @params notifyGroupType {RecordNotifyGroupTypeCommonType} 录音通知组类型（通过临时组发起的业务，结束后会自动清除NC录音文件）（通过长期通知组发起的业务，结束后不会清除NC录音文件）
 * @params playType {RecordNotifyPlayTypeCommonType} 录音播放模式
 * @params playTimes {number} 播放次数(为0则循环播放)
 * @params isAllowUserJoin {boolean} 是否允许用户主动加入
 * @params password {string} 加入密码, 为空则不指定密码
 * @params status {RecordNotifyStatusCommonType} 录音通知状态
 * @params groupID {string} 关联组ID
 */
export type GetRecordNotifiesByIdResType = {
    id: string;
    name: string;
    description: string;
    startTime: string;
    number: number;
    fileGroupID: string;
    notifyContent: string;
    ownerID: string;
    ownerName: string;
    notifyGroupType: RecordNotifyGroupTypeCommonType;
    playType: RecordNotifyPlayTypeCommonType;
    playTimes: number;
    isAllowUserJoin: boolean;
    password: string;
    status: RecordNotifyStatusCommonType;
    groupID: string;
};

/**
 * 结束录音通知——请求参数类型定义
 * @params id {string} id （必填）
 */
export type CloseRecordNotifiesReqType = {
    id: string;
};

/**
 * 创建录音通知——请求参数类型定义
 * @params name {string} 名称
 * @params description {string} 描述
 * @params priorityInviteType {PhoneTypeCommonType} 号码类型
 * @params recallStrategy {RecallStrategyCommonType} 重呼策略
 * @params number {number} 录音通知号(默认为0)
 * @params fileGroupID {string} 录音文件所在目录ID
 * @params notifyContent {string} 待通知的文本信息
 * @params type {RecordNotifyGroupTypeCommonType} 录音通知组类型（通过临时组发起的业务，结束后会自动清除NC录音文件）（通过长期通知组发起的业务，结束后不会清除NC录音文件）
 * @params playType {RecordNotifyPlayTypeCommonType} 录音播放模式
 * @params maxConcurrency {number} 录音通知并发数量，防止信道占用过多导致瘫痪
 * @params playTimes {number} 播放次数(为0则循环播放)
 * @params isAllowUserJoin {boolean} 是否允许用户主动加入
 * @params password {string} 加入密码, 为空则不指定密码
 * @params groupID {string} 关联组ID
 * @params eventID {string} 关联的事件ID
 * @params voiceName {string} 播音员：需从cgs获取具体语音名称，不传则默认使用服务配置TTSAnnouncer：0-女生，1-男生
 * @params notifiedMembers {NotifiedMemberCommonType[]} 待通知成员
 */
export type AddRecordNotifiesReqType = {
    name?: string;
    description?: string;
    priorityInviteType?: PhoneTypeCommonType;
    recallStrategy?: RecallStrategyCommonType;
    number?: number;
    fileGroupID?: string;
    notifyContent?: string;
    type?: RecordNotifyGroupTypeCommonType;
    playType?: RecordNotifyPlayTypeCommonType;
    maxConcurrency?: number;
    playTimes?: number;
    isAllowUserJoin?: boolean;
    password?: string;
    groupID?: string;
    eventID?: string;
    voiceName?: string;
    notifiedMembers?: NotifiedMemberCommonType[];
};

/**
 * 创建录音通知——响应参数类型定义
 * @params id {string} ID
 * @params name {string} 名称
 * @params description {string} 描述
 * @params startTime {string} 开启时间
 * @params number {number} 录音通知号(默认为0)
 * @params fileGroupID {string} 录音文件所在文件目录ID
 * @params notifyContent {string} 待通知的文本信息
 * @params ownerID {string} 发起录音通知组对应的用户ID
 * @params ownerName {string} 录音通知组对应的用户名称
 * @params notifyGroupType {RecordNotifyGroupTypeCommonType} 录音通知组类型（通过临时组发起的业务，结束后会自动清除NC录音文件）（通过长期通知组发起的业务，结束后不会清除NC录音文件）
 * @params playType {RecordNotifyPlayTypeCommonType} 录音播放模式
 * @params playTimes {number} 播放次数(为0则循环播放)
 * @params isAllowUserJoin {boolean} 是否允许用户主动加入
 * @params password {string} 加入密码, 为空则不指定密码
 * @params status {RecordNotifyStatusCommonType} 录音通知状态
 * @params groupID {string} 关联组ID
 */
export type AddRecordNotifiesResType = {
    id: string;
    name: string;
    description: string;
    startTime: string;
    number: number;
    fileGroupID: string;
    notifyContent: string;
    ownerID: string;
    ownerName: string;
    notifyGroupType: RecordNotifyGroupTypeCommonType;
    playType: RecordNotifyPlayTypeCommonType;
    playTimes: number;
    isAllowUserJoin: boolean;
    password: string;
    status: RecordNotifyStatusCommonType;
    groupID: string;
};

/**
 * 获取全部录音通知——请求参数类型定义
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetRecordNotifiesReqType = {
    page?: number;
    per_page?: number;
};

/**
 * 获取全部录音通知——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {RecordNotifyGroupCommonType[]} 记录
 */
export type GetRecordNotifiesResType = {
    totalCount: number;
    records: RecordNotifyGroupCommonType[];
};

/**
 * 邀请录音通知成员——请求参数类型定义
 * @params id {string} id （必填）
 */
export type InviteRecordNotifiesUserReqType = {
    id: string;
};

/**
 * 移除录音通知成员——请求参数类型定义
 * @params id {string} id （必填）
 * @params id {string}
 * @params name {string}
 * @params title {string}
 * @params phones {PhoneDataCommonType[]}
 */
export type RemoveRecordNotifiesUserReqType = {
    id: string;
    name?: string;
    title?: string;
    phones?: PhoneDataCommonType[];
};

/**
 * 获取指定录音通知的通知统计数据——请求参数类型定义
 * @params id {string} id （必填）
 */
export type GetRecordNotifiesTotalReqType = {
    id: string;
};

/**
 * 获取指定录音通知的通知统计数据——响应参数类型定义
 * @params totalCount {number} 通知总数
 * @params beNotifiedCount {number} 待通知数量
 * @params unconfirmedCount {number} 未确认数量
 * @params listeningCount {number} 接听中数量
 * @params confirmedCount {number} 已确认数量
 */
export type GetRecordNotifiesTotalResType = {
    totalCount: number;
    beNotifiedCount: number;
    unconfirmedCount: number;
    listeningCount: number;
    confirmedCount: number;
};

/**
 * 获取录音通知成员——请求参数类型定义
 * @params id {string} id （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetRecordNotifiesMembersReqType = {
    id: string;
    page?: number;
    per_page?: number;
};

/**
 * 获取录音通知成员——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {RecordNotifyGroupMemberCommonType[]} 记录
 */
export type GetRecordNotifiesMembersResType = {
    totalCount: number;
    records: RecordNotifyGroupMemberCommonType[];
};

/**
 * 获取符合查询条件的语音会议服务器——请求参数类型定义
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetConferenceServersReqType = {
    page?: number;
    per_page?: number;
};

/**
 * 获取符合查询条件的语音会议服务器——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ConferenceServerOutCommonType[]} 记录
 */
export type GetConferenceServersResType = {
    totalCount: number;
    records: ConferenceServerOutCommonType[];
};

/**
 * 创建语音会议服务器——请求参数类型定义
 * @params lessMinuteNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterChangeNotify {NotifyObjectCommonType} 通知对象
 * @params leaveMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params enterMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterEnter {string}
 * @params memberEnter {string}
 * @params exitMeeting {string}
 * @params masterChange {string}
 * @params lessOneMinute {string}
 * @params inNotifyVoice {string}
 * @params reportNumberBits {number}
 * @params masterExit {ExitTypeCommonType} 退出方式
 * @params reportLang {CultureCommonType} 区域语言
 * @params meetingTime {number}
 * @params meetingPhone {string}
 * @params needRecord {boolean}
 * @params displayNumber {string}
 * @params appointedConferenceID {number}
 * @params isMuteJoinConference {boolean}
 * @params name {string} 名称 （必填）
 * @params description {string} 描述
 * @params ip {string} 服务器地址 （必填）
 * @params port {number} 服务器端口 （必填）
 * @params password {string} 服务器密码
 * @params masterIP {string} NC主机地址
 * @params masterPort {number} NC主机端口
 * @params slaveIP {string} NC备机地址
 * @params slavePort {number} NC备机端口
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 */
export type AddConferenceServersReqType = {
    lessMinuteNotifyObject?: NotifyObjectCommonType;
    masterChangeNotify?: NotifyObjectCommonType;
    leaveMeetingNotifyObject?: NotifyObjectCommonType;
    enterMeetingNotifyObject?: NotifyObjectCommonType;
    masterEnter?: string;
    memberEnter?: string;
    exitMeeting?: string;
    masterChange?: string;
    lessOneMinute?: string;
    inNotifyVoice?: string;
    reportNumberBits?: number;
    masterExit?: ExitTypeCommonType;
    reportLang?: CultureCommonType;
    meetingTime?: number;
    meetingPhone?: string;
    needRecord?: boolean;
    displayNumber?: string;
    appointedConferenceID?: number;
    isMuteJoinConference?: boolean;
    name: string;
    description?: string;
    ip: string;
    port: number;
    password?: string;
    masterIP?: string;
    masterPort?: number;
    slaveIP?: string;
    slavePort?: number;
    longitude?: number;
    latitude?: number;
};

/**
 * 创建语音会议服务器——响应参数类型定义
 * @params lessMinuteNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterChangeNotify {NotifyObjectCommonType} 通知对象
 * @params leaveMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params enterMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterEnter {string}
 * @params memberEnter {string}
 * @params exitMeeting {string}
 * @params masterChange {string}
 * @params lessOneMinute {string}
 * @params inNotifyVoice {string}
 * @params reportNumberBits {number}
 * @params masterExit {ExitTypeCommonType} 退出方式
 * @params reportLang {CultureCommonType} 区域语言
 * @params meetingTime {number}
 * @params meetingPhone {string}
 * @params needRecord {boolean}
 * @params displayNumber {string}
 * @params appointedConferenceID {number}
 * @params isMuteJoinConference {boolean}
 * @params id {string} 名称
 * @params name {string} 名称
 * @params description {string} 描述
 * @params ip {string} 服务器地址
 * @params port {number} 服务器端口
 * @params password {string} 服务器密码
 * @params state {ConnectionStateCommonType} 连接状态
 * @params masterIP {string} NC主机地址
 * @params masterPort {number} NC主机端口
 * @params slaveIP {string} NC备机地址
 * @params slavePort {number} NC备机端口
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 */
export type AddConferenceServersResType = {
    lessMinuteNotifyObject: NotifyObjectCommonType;
    masterChangeNotify: NotifyObjectCommonType;
    leaveMeetingNotifyObject: NotifyObjectCommonType;
    enterMeetingNotifyObject: NotifyObjectCommonType;
    masterEnter: string;
    memberEnter: string;
    exitMeeting: string;
    masterChange: string;
    lessOneMinute: string;
    inNotifyVoice: string;
    reportNumberBits: number;
    masterExit: ExitTypeCommonType;
    reportLang: CultureCommonType;
    meetingTime: number;
    meetingPhone: string;
    needRecord: boolean;
    displayNumber: string;
    appointedConferenceID: number;
    isMuteJoinConference: boolean;
    id: string;
    name: string;
    description: string;
    ip: string;
    port: number;
    password: string;
    state: ConnectionStateCommonType;
    masterIP: string;
    masterPort: number;
    slaveIP: string;
    slavePort: number;
    longitude: number;
    latitude: number;
};

/**
 * 获取对应语音会议服务器——请求参数类型定义
 * @params id {string} id （必填）
 */
export type GetConferenceServersByIdReqType = {
    id: string;
};

/**
 * 获取对应语音会议服务器——响应参数类型定义
 * @params lessMinuteNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterChangeNotify {NotifyObjectCommonType} 通知对象
 * @params leaveMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params enterMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterEnter {string}
 * @params memberEnter {string}
 * @params exitMeeting {string}
 * @params masterChange {string}
 * @params lessOneMinute {string}
 * @params inNotifyVoice {string}
 * @params reportNumberBits {number}
 * @params masterExit {ExitTypeCommonType} 退出方式
 * @params reportLang {CultureCommonType} 区域语言
 * @params meetingTime {number}
 * @params meetingPhone {string}
 * @params needRecord {boolean}
 * @params displayNumber {string}
 * @params appointedConferenceID {number}
 * @params isMuteJoinConference {boolean}
 * @params id {string} 名称
 * @params name {string} 名称
 * @params description {string} 描述
 * @params ip {string} 服务器地址
 * @params port {number} 服务器端口
 * @params password {string} 服务器密码
 * @params state {ConnectionStateCommonType} 连接状态
 * @params masterIP {string} NC主机地址
 * @params masterPort {number} NC主机端口
 * @params slaveIP {string} NC备机地址
 * @params slavePort {number} NC备机端口
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 */
export type GetConferenceServersByIdResType = {
    lessMinuteNotifyObject: NotifyObjectCommonType;
    masterChangeNotify: NotifyObjectCommonType;
    leaveMeetingNotifyObject: NotifyObjectCommonType;
    enterMeetingNotifyObject: NotifyObjectCommonType;
    masterEnter: string;
    memberEnter: string;
    exitMeeting: string;
    masterChange: string;
    lessOneMinute: string;
    inNotifyVoice: string;
    reportNumberBits: number;
    masterExit: ExitTypeCommonType;
    reportLang: CultureCommonType;
    meetingTime: number;
    meetingPhone: string;
    needRecord: boolean;
    displayNumber: string;
    appointedConferenceID: number;
    isMuteJoinConference: boolean;
    id: string;
    name: string;
    description: string;
    ip: string;
    port: number;
    password: string;
    state: ConnectionStateCommonType;
    masterIP: string;
    masterPort: number;
    slaveIP: string;
    slavePort: number;
    longitude: number;
    latitude: number;
};

/**
 * 更新语音会议服务器——请求参数类型定义
 * @params id {string} id （必填）
 * @params lessMinuteNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterChangeNotify {NotifyObjectCommonType} 通知对象
 * @params leaveMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params enterMeetingNotifyObject {NotifyObjectCommonType} 通知对象
 * @params masterEnter {string}
 * @params memberEnter {string}
 * @params exitMeeting {string}
 * @params masterChange {string}
 * @params lessOneMinute {string}
 * @params inNotifyVoice {string}
 * @params reportNumberBits {number}
 * @params masterExit {ExitTypeCommonType} 退出方式
 * @params reportLang {CultureCommonType} 区域语言
 * @params meetingTime {number}
 * @params meetingPhone {string}
 * @params needRecord {boolean}
 * @params displayNumber {string}
 * @params appointedConferenceID {number}
 * @params isMuteJoinConference {boolean}
 * @params name {string} 名称 （必填）
 * @params description {string} 描述
 * @params ip {string} 服务器地址 （必填）
 * @params port {number} 服务器端口 （必填）
 * @params password {string} 服务器密码
 * @params masterIP {string} NC主机地址
 * @params masterPort {number} NC主机端口
 * @params slaveIP {string} NC备机地址
 * @params slavePort {number} NC备机端口
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 */
export type EditConferenceServersReqType = {
    id: string;
    lessMinuteNotifyObject?: NotifyObjectCommonType;
    masterChangeNotify?: NotifyObjectCommonType;
    leaveMeetingNotifyObject?: NotifyObjectCommonType;
    enterMeetingNotifyObject?: NotifyObjectCommonType;
    masterEnter?: string;
    memberEnter?: string;
    exitMeeting?: string;
    masterChange?: string;
    lessOneMinute?: string;
    inNotifyVoice?: string;
    reportNumberBits?: number;
    masterExit?: ExitTypeCommonType;
    reportLang?: CultureCommonType;
    meetingTime?: number;
    meetingPhone?: string;
    needRecord?: boolean;
    displayNumber?: string;
    appointedConferenceID?: number;
    isMuteJoinConference?: boolean;
    name: string;
    description?: string;
    ip: string;
    port: number;
    password?: string;
    masterIP?: string;
    masterPort?: number;
    slaveIP?: string;
    slavePort?: number;
    longitude?: number;
    latitude?: number;
};

/**
 * 删除指定语音会议服务器——请求参数类型定义
 * @params id {string} id （必填）
 */
export type DeleteConferenceServersReqType = {
    id: string;
};

/**
 * 电话状态订阅——请求参数类型定义
 * @params id {string} 刷新订阅id
 * @params url {string} 订阅消息的服务地址（例如：http://ip:port/openApi/phoneState） （必填）
 * @params time {number} 订阅时间,5-43200，单位为分钟，未指定默认为3600
 * @params phones {any[]} 订阅的电话号（例如：["8001","8002","8003"]），不填/空则表示推送所有号码状态，否则只推送订阅的号码
 */
export type SubscribePhoneStateReqType = {
    id?: string;
    url: string;
    time?: number;
    phones?: any[];
};

/**
 * 电话状态订阅——响应参数类型定义
 * @params subscribeId {string} 订阅Id，用于取消订阅
 * @params expiredTime {string} 过期时间
 */
export type SubscribePhoneStateResType = {
    subscribeId: string;
    expiredTime: string;
};

/**
 * 取消电话状态订阅——请求参数类型定义
 * @params id {string} id （必填）
 */
export type UnsubscribePhoneStateReqType = {
    id: string;
};

/**
 * 按条件查询文本模板——请求参数类型定义
 * @params KeyWord {string} 关键字
 * @params Type {number} 查找的模板类型
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetTextTemplatesReqType = {
    KeyWord?: string;
    Type?: number;
    page?: number;
    per_page?: number;
};

/**
 * 按条件查询文本模板——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TextTemplateOutCommonType[]} 记录
 */
export type GetTextTemplatesResType = {
    totalCount: number;
    records: TextTemplateOutCommonType[];
};

/**
 * 新建文本模板——请求参数类型定义
 * @params name {string} 模板名称 （必填）
 * @params textTemplateType {TextTemplateTypeCommonType} 模板类型
 * @params content {string} 文本内容 （必填）
 */
export type AddTextTemplatesReqType = {
    name: string;
    textTemplateType?: TextTemplateTypeCommonType;
    content: string;
};

/**
 * 新建文本模板——响应参数类型定义
 * @params id {string} 主键id
 * @params name {string} 模板名称
 * @params textTemplateType {TextTemplateTypeCommonType} 模板类型
 * @params content {string} 文本内容
 */
export type AddTextTemplatesResType = {
    id: string;
    name: string;
    textTemplateType: TextTemplateTypeCommonType;
    content: string;
};

/**
 * 通过ID获取文本模板——请求参数类型定义
 * @params id {string} id （必填）
 */
export type GetTextTemplateByIdReqType = {
    id: string;
};

/**
 * 通过ID获取文本模板——响应参数类型定义
 * @params id {string} 主键id
 * @params name {string} 模板名称
 * @params textTemplateType {TextTemplateTypeCommonType} 模板类型
 * @params content {string} 文本内容
 */
export type GetTextTemplateByIdResType = {
    id: string;
    name: string;
    textTemplateType: TextTemplateTypeCommonType;
    content: string;
};

/**
 * 修改文本模板——请求参数类型定义
 * @params id {string} id （必填）
 * @params name {string} 模板名称 （必填）
 * @params textTemplateType {TextTemplateTypeCommonType} 模板类型
 * @params content {string} 文本内容 （必填）
 */
export type EditTextTemplatesReqType = {
    id: string;
    name: string;
    textTemplateType?: TextTemplateTypeCommonType;
    content: string;
};

/**
 * 删除文本模板——请求参数类型定义
 * @params id {string} id （必填）
 */
export type DeleteTextTemplatesReqType = {
    id: string;
};

/**
 * 获取符合查询条件的VNC设备——请求参数类型定义
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetVirtualNCDevicesReqType = {
    page?: number;
    per_page?: number;
};

/**
 * 获取符合查询条件的VNC设备——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {VirtualNCDeviceOutCommonType[]} 记录
 */
export type GetVirtualNCDevicesResType = {
    totalCount: number;
    records: VirtualNCDeviceOutCommonType[];
};

/**
 * 创建VNC设备——请求参数类型定义
 * @params name {string}  （必填）
 * @params description {string}
 * @params prefix {string}
 * @params isKeepAlive {boolean}
 * @params timeInterval {number}
 * @params masterNCDevice {NCDeviceInCommonType}  （必填）
 * @params slaveNCDevice {NCDeviceInCommonType}
 * @params longitude {number}
 * @params latitude {number}
 */
export type AddVirtualNCDevicesReqType = {
    name: string;
    description?: string;
    prefix?: string;
    isKeepAlive?: boolean;
    timeInterval?: number;
    masterNCDevice: NCDeviceInCommonType;
    slaveNCDevice?: NCDeviceInCommonType;
    longitude?: number;
    latitude?: number;
};

/**
 * 创建VNC设备——响应参数类型定义
 * @params id {string}
 * @params name {string}
 * @params connectionState {ConnectionStateCommonType} 连接状态
 * @params description {string}
 * @params prefix {string}
 * @params isKeepAlive {boolean}
 * @params timeInterval {number}
 * @params masterNCDevice {NCDeviceOutCommonType}
 * @params slaveNCDevice {NCDeviceOutCommonType}
 * @params longitude {number}
 * @params latitude {number}
 */
export type AddVirtualNCDevicesResType = {
    id: string;
    name: string;
    connectionState: ConnectionStateCommonType;
    description: string;
    prefix: string;
    isKeepAlive: boolean;
    timeInterval: number;
    masterNCDevice: NCDeviceOutCommonType;
    slaveNCDevice: NCDeviceOutCommonType;
    longitude: number;
    latitude: number;
};

/**
 * 获取对应VNC设备——请求参数类型定义
 * @params id {string} id （必填）
 */
export type GetVirtualNCDevicesByIdReqType = {
    id: string;
};

/**
 * 获取对应VNC设备——响应参数类型定义
 * @params id {string}
 * @params name {string}
 * @params connectionState {ConnectionStateCommonType} 连接状态
 * @params description {string}
 * @params prefix {string}
 * @params isKeepAlive {boolean}
 * @params timeInterval {number}
 * @params masterNCDevice {NCDeviceOutCommonType}
 * @params slaveNCDevice {NCDeviceOutCommonType}
 * @params longitude {number}
 * @params latitude {number}
 */
export type GetVirtualNCDevicesByIdResType = {
    id: string;
    name: string;
    connectionState: ConnectionStateCommonType;
    description: string;
    prefix: string;
    isKeepAlive: boolean;
    timeInterval: number;
    masterNCDevice: NCDeviceOutCommonType;
    slaveNCDevice: NCDeviceOutCommonType;
    longitude: number;
    latitude: number;
};

/**
 * 更新VNC设备——请求参数类型定义
 * @params id {string} id （必填）
 * @params name {string}  （必填）
 * @params description {string}
 * @params masterNCDevice {UpdateNCDeviceInCommonType}  （必填）
 * @params slaveNCDevice {UpdateNCDeviceInCommonType}
 */
export type EditVirtualNCDevicesReqType = {
    id: string;
    name: string;
    description?: string;
    masterNCDevice: UpdateNCDeviceInCommonType;
    slaveNCDevice?: UpdateNCDeviceInCommonType;
};

/**
 * 删除指定VNC设备——请求参数类型定义
 * @params id {string} id （必填）
 */
export type DeleteVirtualNCDevicesReqType = {
    id: string;
};

/**
 * 获取对应VNC设备的中继群配置——请求参数类型定义
 * @params id {string} id （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetVncTrunkGroupConfigsReqType = {
    id: string;
    page?: number;
    per_page?: number;
};

/**
 * 获取对应VNC设备的中继群配置——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {TrunkGroupConfigOutCommonType[]} 记录
 */
export type GetVncTrunkGroupConfigsResType = {
    totalCount: number;
    records: TrunkGroupConfigOutCommonType[];
};

/**
 * 修改中继群配置——请求参数类型定义
 * @params id {string} id （必填）
 * @params isEnable {boolean}
 * @params trunkGroupNumber {number}  （必填）
 * @params dualSystemAttribute {boolean}
 */
export type EditVncTrunkGroupConfigsReqType = {
    id: string;
    isEnable?: boolean;
    trunkGroupNumber: number;
    dualSystemAttribute?: boolean;
};

/**
 * 批量修改中继群配置——请求参数类型定义
 * @params id {string} id （必填）
 */
export type BatchEditNcTrunkGroupConfigsReqType = {
    id: string;
};

/**
 * 刷新VNC中继群配置——请求参数类型定义
 * @params id {string} id （必填）
 */
export type RefreshVncTrunkGroupConfigsReqType = {
    id: string;
};

/**
 * 刷新VNC号码——请求参数类型定义
 * @params id {string} id （必填）
 * @params filter {RefreshFilterCommonType} 0:Phone; 1:PhoneLine; 2:Both;
 */
export type RefreshVncPhonesReqType = {
    id: string;
    filter?: RefreshFilterCommonType;
};

/**
 * 获取指定VNC下的号码列表——请求参数类型定义
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字查询
 * @params IsPhoneLine {boolean} 是否电话线路
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量 默认：100
 */
export type GetVncPhonesReqType = {
    id: string;
    Keyword?: string;
    IsPhoneLine?: boolean;
    page?: number;
    per_page?: number;
};

/**
 * 获取指定VNC下的号码列表——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {PhoneOutCommonType[]} 记录
 */
export type GetVncPhonesResType = {
    totalCount: number;
    records: PhoneOutCommonType[];
};
