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
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {MatterAssistMemberOutCommonType[]} 记录
 */
type MatterAssistMemberOutReqCommonType = {
    totalCount?: number;
    records?: MatterAssistMemberOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {MatterTimeConfigOutCommonType[]} 记录
 */
type MatterTimeConfigOutReqCommonType = {
    totalCount?: number;
    records?: MatterTimeConfigOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ScheduleMatterOutCommonType[]} 记录
 */
type ScheduleMatterOutReqCommonType = {
    totalCount?: number;
    records?: ScheduleMatterOutCommonType[];
};

/**
* 权限类型<br/>
0:User; <br/>
1:Department; 
*/
type PermissionTypeCommonType = 0 | 1;

/**
* 提醒类型<br/>
1:Sms,短信提醒; <br/>
2:Voice,电话提醒; <br/>
4:ZheZhengDingWorkMsg,浙政钉通知; <br/>
8:YunZhiJiaMsg,云之家通知; <br/>
16:Email,邮件通知; 
*/
type RemindTypeCommonType = 1 | 2 | 4 | 8 | 16;

/**
* 重复类型<br/>
0:None,不重复; <br/>
1:WorkingDay,工作日; <br/>
2:Daily,每日; <br/>
3:Weekly,每周; <br/>
4:PerMonth,每月; 
*/
type RepeatTypeCommonType = 0 | 1 | 2 | 3 | 4;

/**
* 日程事项类型<br/>
1:Normal,个人事项; <br/>
2:Shift,排班; <br/>
4:VideoConference,视频会议预约; <br/>
8:VoiceConference,语音会议预约; <br/>
16:VoiceNotification,语音通知预约; 
*/
type ScheduleTypeCommonType = 1 | 2 | 4 | 8 | 16;

/**
 * 协助人入参
 * @params userId {string} 协作人员id(orgs_user_id)
 */
type MatterAssistMemberInCommonType = {
    userId?: string;
};

/**
 * 事项时段配置
 * @params name {string} 名称
 * @params startHour {number} 开始小时
 * @params startMinute {number} 开始分钟
 * @params endHour {number} 结束小时
 * @params endMinute {number} 结束分钟
 * @params type {ScheduleTypeCommonType} 事项时段类型
 */
type MatterTimeConfigInCommonType = {
    name: string;
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
    type: ScheduleTypeCommonType;
};

/**
 * 日程
 * @params name {string} 名称
 * @params type {ScheduleTypeCommonType} 事项类型
 * @params description {string} 描述
 * @params startTime {string} 日程开始时间
 * @params endTime {string} 日程结束时间
 * @params repeatType {RepeatTypeCommonType} 重复类型
 * @params repeatOverTime {string} 截至时间
 * @params assistMembers {MatterAssistMemberInCommonType[]} 事项协作人
 * @params isRemind {boolean} 是否提醒
 * @params remindType {RemindTypeCommonType} 提醒类型
 * @params remindAdvanceMinutes {number} 提前提醒分钟数
 */
type ScheduleMatterInCommonType = {
    name: string;
    type: ScheduleTypeCommonType;
    description?: string;
    startTime: string;
    endTime: string;
    repeatType?: RepeatTypeCommonType;
    repeatOverTime?: string;
    assistMembers?: MatterAssistMemberInCommonType[];
    isRemind?: boolean;
    remindType?: RemindTypeCommonType;
    remindAdvanceMinutes?: number;
};

/**
 * 修改单一日程
 * @params subId {string} 子日程Id
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 */
type SingleScheduleInCommonType = {
    subId?: string;
    startTime: string;
    endTime: string;
};

/**
 * 实际日程
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params isPast {boolean} 是否过去日程
 */
type ActualScheduleCommonType = {
    startTime?: string;
    endTime?: string;
    isPast?: boolean;
};

/**
 * 部门
 * @params id {string} ID
 * @params name {string} 名称
 */
type DepartmentDataCommonType = {
    id?: string;
    name?: string;
};

/**
 * 事项协作人输出
 * @params userId {string} 协作人员id(orgs_user_id)
 * @params account {string} 账号
 * @params name {string} 名称
 * @params title {string} 职位
 * @params gender {number} 性别
 * @params description {string} 描述
 * @params mail {string} 邮箱
 * @params phones {PhoneDataCommonType[]} 电话列表
 * @params departmentIds {any[]} 协作人员部门id
 * @params departments {DepartmentDataCommonType[]} 协作人所属部门
 * @params photoPath {string} 头像路径
 */
type MatterAssistMemberOutCommonType = {
    userId?: string;
    account?: string;
    name?: string;
    title?: string;
    gender?: number;
    description?: string;
    mail?: string;
    phones?: PhoneDataCommonType[];
    departmentIds?: any[];
    departments?: DepartmentDataCommonType[];
    photoPath?: string;
};

/**
 * 事项时段配置
 * @params id {string} id
 * @params name {string} 名称
 * @params startHour {number} 开始小时
 * @params startMinute {number} 开始分钟
 * @params endHour {number} 结束小时
 * @params endMinute {number} 结束分钟
 * @params type {ScheduleTypeCommonType} 日程事项类型
 */
type MatterTimeConfigOutCommonType = {
    id?: string;
    name?: string;
    startHour?: number;
    startMinute?: number;
    endHour?: number;
    endMinute?: number;
    type?: ScheduleTypeCommonType;
};

/**
 * 电话列表
 * @params type {string} 电话类型
 * @params number {string} 号码
 */
type PhoneDataCommonType = {
    type?: string;
    number?: string;
};

/**
 * 日程输出
 * @params id {string} 日程事项id
 * @params name {string} 名称
 * @params type {ScheduleTypeCommonType} 事项类型
 * @params description {string} 描述
 * @params startTime {string} 日程开始时间
 * @params endTime {string} 日程结束时间
 * @params repeatType {RepeatTypeCommonType} 重复类型
 * @params repeatOverTime {string} 截至时间
 * @params assistMembers {MatterAssistMemberOutCommonType[]} 事项协作人
 * @params isRemind {boolean} 是否提醒
 * @params remindType {RemindTypeCommonType} 提醒类型
 * @params remindAdvanceMinutes {number} 提前提醒分钟数
 * @params actualSchedules {ActualScheduleCommonType[]} 实际日程
 * @params ownerId {string} 日程事项拥有者
 * @params subScheduleMatters {SubScheduleMatterOutCommonType[]} 子日程
 */
type ScheduleMatterOutCommonType = {
    id?: string;
    name?: string;
    type?: ScheduleTypeCommonType;
    description?: string;
    startTime?: string;
    endTime?: string;
    repeatType?: RepeatTypeCommonType;
    repeatOverTime?: string;
    assistMembers?: MatterAssistMemberOutCommonType[];
    isRemind?: boolean;
    remindType?: RemindTypeCommonType;
    remindAdvanceMinutes?: number;
    actualSchedules?: ActualScheduleCommonType[];
    ownerId?: string;
    subScheduleMatters?: SubScheduleMatterOutCommonType[];
};

/**
 * 子日程
 * @params id {string} id
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 */
type SubScheduleMatterOutCommonType = {
    id?: string;
    startTime?: string;
    endTime?: string;
};

----

/**
 * 搜索事项时段配置——请求参数类型定义
 * @params keyword {string} 关键词
 * @params Type {number} 日程事项类型
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetMatterTimeConfigsReqType = {
    keyword?: string;
    Type?: number;
    page?: number;
    per_page?: number;
};

/**
 * 搜索事项时段配置——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {MatterTimeConfigOutCommonType[]} 记录
 */
export type GetMatterTimeConfigsResType = {
    totalCount: number;
    records: MatterTimeConfigOutCommonType[];
};

/**
 * 新增事项时段配置——请求参数类型定义
 * @params name {string} 名称 （必填）
 * @params startHour {number} 开始小时 （必填）
 * @params startMinute {number} 开始分钟 （必填）
 * @params endHour {number} 结束小时 （必填）
 * @params endMinute {number} 结束分钟 （必填）
 * @params type {ScheduleTypeCommonType} 事项时段类型 （必填）
 */
export type AddMatterTimeConfigsReqType = {
    name: string;
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
    type: ScheduleTypeCommonType;
};

/**
 * 新增事项时段配置——响应参数类型定义
 * @params id {string} id
 * @params name {string} 名称
 * @params startHour {number} 开始小时
 * @params startMinute {number} 开始分钟
 * @params endHour {number} 结束小时
 * @params endMinute {number} 结束分钟
 * @params type {ScheduleTypeCommonType} 日程事项类型
 */
export type AddMatterTimeConfigsResType = {
    id: string;
    name: string;
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
    type: ScheduleTypeCommonType;
};

/**
 * 获取事项时段配置——请求参数类型定义
 * @params id {string} id （必填）
 */
export type GetMatterTimeConfigsByIdReqType = {
    id: string;
};

/**
 * 获取事项时段配置——响应参数类型定义
 * @params id {string} id
 * @params name {string} 名称
 * @params startHour {number} 开始小时
 * @params startMinute {number} 开始分钟
 * @params endHour {number} 结束小时
 * @params endMinute {number} 结束分钟
 * @params type {ScheduleTypeCommonType} 日程事项类型
 */
export type GetMatterTimeConfigsByIdResType = {
    id: string;
    name: string;
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
    type: ScheduleTypeCommonType;
};

/**
 * 更新事项时段配置——请求参数类型定义
 * @params id {string} id （必填）
 * @params name {string} 名称 （必填）
 * @params startHour {number} 开始小时 （必填）
 * @params startMinute {number} 开始分钟 （必填）
 * @params endHour {number} 结束小时 （必填）
 * @params endMinute {number} 结束分钟 （必填）
 * @params type {ScheduleTypeCommonType} 事项时段类型 （必填）
 */
export type UpdateMatterTimeConfigsReqType = {
    id: string;
    name: string;
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
    type: ScheduleTypeCommonType;
};

/**
 * 删除事项时段配置——请求参数类型定义
 * @params id {string} id （必填）
 */
export type DeleteMatterTimeConfigsReqType = {
    id: string;
};

/**
 * 添加日程事项——请求参数类型定义
 * @params name {string} 名称 （必填）
 * @params type {ScheduleTypeCommonType} 事项类型 （必填）
 * @params description {string} 描述
 * @params startTime {string} 日程开始时间 （必填）
 * @params endTime {string} 日程结束时间 （必填）
 * @params repeatType {RepeatTypeCommonType} 重复类型
 * @params repeatOverTime {string} 截至时间
 * @params assistMembers {MatterAssistMemberInCommonType[]} 事项协作人
 * @params isRemind {boolean} 是否提醒
 * @params remindType {RemindTypeCommonType} 提醒类型
 * @params remindAdvanceMinutes {number} 提前提醒分钟数
 */
export type AddScheduleMattersReqType = {
    name: string;
    type: ScheduleTypeCommonType;
    description?: string;
    startTime: string;
    endTime: string;
    repeatType?: RepeatTypeCommonType;
    repeatOverTime?: string;
    assistMembers?: MatterAssistMemberInCommonType[];
    isRemind?: boolean;
    remindType?: RemindTypeCommonType;
    remindAdvanceMinutes?: number;
};

/**
 * 添加日程事项——响应参数类型定义
 * @params id {string} 日程事项id
 * @params name {string} 名称
 * @params type {ScheduleTypeCommonType} 事项类型
 * @params description {string} 描述
 * @params startTime {string} 日程开始时间
 * @params endTime {string} 日程结束时间
 * @params repeatType {RepeatTypeCommonType} 重复类型
 * @params repeatOverTime {string} 截至时间
 * @params assistMembers {MatterAssistMemberOutCommonType[]} 事项协作人
 * @params isRemind {boolean} 是否提醒
 * @params remindType {RemindTypeCommonType} 提醒类型
 * @params remindAdvanceMinutes {number} 提前提醒分钟数
 * @params actualSchedules {ActualScheduleCommonType[]} 实际日程
 * @params ownerId {string} 日程事项拥有者
 * @params subScheduleMatters {SubScheduleMatterOutCommonType[]} 子日程
 */
export type AddScheduleMattersResType = {
    id: string;
    name: string;
    type: ScheduleTypeCommonType;
    description: string;
    startTime: string;
    endTime: string;
    repeatType: RepeatTypeCommonType;
    repeatOverTime: string;
    assistMembers: MatterAssistMemberOutCommonType[];
    isRemind: boolean;
    remindType: RemindTypeCommonType;
    remindAdvanceMinutes: number;
    actualSchedules: ActualScheduleCommonType[];
    ownerId: string;
    subScheduleMatters: SubScheduleMatterOutCommonType[];
};

/**
 * 搜索日程事项——请求参数类型定义
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params departmentId {string} 部门ID
 * @params keyword {string} 关键词
 * @params scheduleType {number} 预约类型:个人事项1，排班2，视频会议4，语音会议8，二进制按位与提交，例如：个人事项+排班=3
 * @params permissionType {number} 权限类型
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetScheduleMattersReqType = {
    startTime?: string;
    endTime?: string;
    departmentId?: string;
    keyword?: string;
    scheduleType?: number;
    permissionType?: number;
    page?: number;
    per_page?: number;
};

/**
 * 搜索日程事项——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ScheduleMatterOutCommonType[]} 记录
 */
export type GetScheduleMattersResType = {
    totalCount: number;
    records: ScheduleMatterOutCommonType[];
};

/**
 * 获取日程事项——请求参数类型定义
 * @params id {string} id （必填）
 */
export type GetScheduleMattersByIdReqType = {
    id: string;
};

/**
 * 获取日程事项——响应参数类型定义
 * @params id {string} 日程事项id
 * @params name {string} 名称
 * @params type {ScheduleTypeCommonType} 事项类型
 * @params description {string} 描述
 * @params startTime {string} 日程开始时间
 * @params endTime {string} 日程结束时间
 * @params repeatType {RepeatTypeCommonType} 重复类型
 * @params repeatOverTime {string} 截至时间
 * @params assistMembers {MatterAssistMemberOutCommonType[]} 事项协作人
 * @params isRemind {boolean} 是否提醒
 * @params remindType {RemindTypeCommonType} 提醒类型
 * @params remindAdvanceMinutes {number} 提前提醒分钟数
 * @params actualSchedules {ActualScheduleCommonType[]} 实际日程
 * @params ownerId {string} 日程事项拥有者
 * @params subScheduleMatters {SubScheduleMatterOutCommonType[]} 子日程
 */
export type GetScheduleMattersByIdResType = {
    id: string;
    name: string;
    type: ScheduleTypeCommonType;
    description: string;
    startTime: string;
    endTime: string;
    repeatType: RepeatTypeCommonType;
    repeatOverTime: string;
    assistMembers: MatterAssistMemberOutCommonType[];
    isRemind: boolean;
    remindType: RemindTypeCommonType;
    remindAdvanceMinutes: number;
    actualSchedules: ActualScheduleCommonType[];
    ownerId: string;
    subScheduleMatters: SubScheduleMatterOutCommonType[];
};

/**
 * 更新日程事项——请求参数类型定义
 * @params id {string} id （必填）
 * @params name {string} 名称 （必填）
 * @params type {ScheduleTypeCommonType} 事项类型 （必填）
 * @params description {string} 描述
 * @params startTime {string} 日程开始时间 （必填）
 * @params endTime {string} 日程结束时间 （必填）
 * @params repeatType {RepeatTypeCommonType} 重复类型
 * @params repeatOverTime {string} 截至时间
 * @params assistMembers {MatterAssistMemberInCommonType[]} 事项协作人
 * @params isRemind {boolean} 是否提醒
 * @params remindType {RemindTypeCommonType} 提醒类型
 * @params remindAdvanceMinutes {number} 提前提醒分钟数
 */
export type UpdateScheduleMattersReqType = {
    id: string;
    name: string;
    type: ScheduleTypeCommonType;
    description?: string;
    startTime: string;
    endTime: string;
    repeatType?: RepeatTypeCommonType;
    repeatOverTime?: string;
    assistMembers?: MatterAssistMemberInCommonType[];
    isRemind?: boolean;
    remindType?: RemindTypeCommonType;
    remindAdvanceMinutes?: number;
};

/**
 * 取消日程事项——请求参数类型定义
 * @params id {string} id （必填）
 */
export type DeleteScheduleMatterReqType = {
    id: string;
};

/**
 * 搜索日程协作人——请求参数类型定义
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params departmentId {string} 部门ID
 * @params keyword {string} 关键词
 * @params scheduleType {number} 预约类型:个人事项1，排班2，视频会议4，语音会议8，二进制按位与提交，例如：个人事项+排班=3
 * @params permissionType {number} 权限类型
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type SearchScheduleMemberReqType = {
    startTime?: string;
    endTime?: string;
    departmentId?: string;
    keyword?: string;
    scheduleType?: number;
    permissionType?: number;
    page?: number;
    per_page?: number;
};

/**
 * 搜索日程协作人——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {MatterAssistMemberOutCommonType[]} 记录
 */
export type SearchScheduleMemberResType = {
    totalCount: number;
    records: MatterAssistMemberOutCommonType[];
};

/**
 * 搜索Qts预约事项——请求参数类型定义
 * @params startTime {string} 开始时间
 * @params endTime {string} 结束时间
 * @params departmentId {string} 部门ID
 * @params keyword {string} 关键词
 * @params scheduleType {number} 预约类型:个人事项1，排班2，视频会议4，语音会议8，二进制按位与提交，例如：个人事项+排班=3
 * @params permissionType {number} 权限类型
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetQtsReqType = {
    startTime?: string;
    endTime?: string;
    departmentId?: string;
    keyword?: string;
    scheduleType?: number;
    permissionType?: number;
    page?: number;
    per_page?: number;
};

/**
 * 搜索Qts预约事项——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ScheduleMatterOutCommonType[]} 记录
 */
export type GetQtsResType = {
    totalCount: number;
    records: ScheduleMatterOutCommonType[];
};

/**
 * 修改周期性日程事项的某一日程事项——请求参数类型定义
 * @params id {string} id （必填）
 * @params subId {string} 子日程Id
 * @params startTime {string} 开始时间 （必填）
 * @params endTime {string} 结束时间 （必填）
 */
export type UpdateSingleScheduleMatterReqType = {
    id: string;
    subId?: string;
    startTime: string;
    endTime: string;
};
