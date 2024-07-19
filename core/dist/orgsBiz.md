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
 * 联系人数据校验
 * @params department {DepartmentValidationItemCommonType} 部门
 * @params account {DataLengthValidationItemCommonType} 账号
 * @params name {DataLengthValidationItemCommonType} 姓名
 * @params ipPhone {DataFormatValidationItemCommonType} 分级号码
 * @params mobilePhone {DataFormatValidationItemCommonType} Mobile
 * @params faxPhone {DataFormatValidationItemCommonType} 传真
 * @params workPhone {DataFormatValidationItemCommonType} 工作电话
 * @params homePhone {DataFormatValidationItemCommonType} 家庭号码
 * @params gender {DataFormatValidationItemCommonType} 性别
 * @params mail {DataFormatValidationItemCommonType} 邮箱
 * @params address {DataLengthValidationItemCommonType} 地址
 * @params title {DataLengthValidationItemCommonType} 职位
 * @params weiXin {DataBaseItemCommonType} 企业微信
 * @params weiBo {DataBaseItemCommonType} 微博(钉钉)
 * @params id {DataFormatValidationItemCommonType} 标识ID
 * @params relatedId {DataBaseItemCommonType} 关联Id
 * @params birthDay {DataFormatValidationItemCommonType} 生日
 * @params describe {DataLengthValidationItemCommonType} 描述
 * @params extension {DataLengthValidationItemCommonType} 扩展
 * @params areaCode {DataLengthValidationItemCommonType} 行政区划
 * @params identityKey {DataLengthValidationItemCommonType} 身份KEY
 * @params contactTypeId {DataLengthValidationItemCommonType} 人员类型
 * @params isDataCorrect {boolean} 数据正确
 * @params dataChangeType {DataChangeTypeCommonType} 数据改变类型
 */
type ContactDataValidationCommonType = {
    department?: DepartmentValidationItemCommonType;
    account?: DataLengthValidationItemCommonType;
    name?: DataLengthValidationItemCommonType;
    ipPhone?: DataFormatValidationItemCommonType;
    mobilePhone?: DataFormatValidationItemCommonType;
    faxPhone?: DataFormatValidationItemCommonType;
    workPhone?: DataFormatValidationItemCommonType;
    homePhone?: DataFormatValidationItemCommonType;
    gender?: DataFormatValidationItemCommonType;
    mail?: DataFormatValidationItemCommonType;
    address?: DataLengthValidationItemCommonType;
    title?: DataLengthValidationItemCommonType;
    weiXin?: DataBaseItemCommonType;
    weiBo?: DataBaseItemCommonType;
    id?: DataFormatValidationItemCommonType;
    relatedId?: DataBaseItemCommonType;
    birthDay?: DataFormatValidationItemCommonType;
    describe?: DataLengthValidationItemCommonType;
    extension?: DataLengthValidationItemCommonType;
    areaCode?: DataLengthValidationItemCommonType;
    identityKey?: DataLengthValidationItemCommonType;
    contactTypeId?: DataLengthValidationItemCommonType;
    isDataCorrect?: boolean;
    dataChangeType?: DataChangeTypeCommonType;
};

/**
 * 数据项基类
 * @params originalData {string} 原始数据
 * @params newData {string} 新数据
 * @params isChanged {boolean} 是否改变
 * @params isDataCorrect {boolean} 数据正确
 */
type DataBaseItemCommonType = {
    originalData?: string;
    newData?: string;
    isChanged?: boolean;
    isDataCorrect?: boolean;
};

/**
 * 数据变更类型
 */
type DataChangeTypeCommonType = 0 | 1 | 2 | 3;

/**
 * 数据格式校验项
 * @params isDataCorrect {boolean} 数据正确
 * @params originalData {string} 原始数据
 * @params newData {string} 新数据
 * @params isChanged {boolean} 是否改变
 */
type DataFormatValidationItemCommonType = {
    isDataCorrect?: boolean;
    originalData?: string;
    newData?: string;
    isChanged?: boolean;
};

/**
 * 数据长度校验项
 * @params isDataCorrect {boolean} 数据格式正确
 * @params originalData {string} 原始数据
 * @params newData {string} 新数据
 * @params isChanged {boolean} 是否改变
 */
type DataLengthValidationItemCommonType = {
    isDataCorrect?: boolean;
    originalData?: string;
    newData?: string;
    isChanged?: boolean;
};

/**
 * 部门校验
 * @params isDataCorrect {boolean} 数据格式正确
 * @params originalData {string} 原始数据
 * @params newData {string} 新数据
 * @params isChanged {boolean} 是否改变
 */
type DepartmentValidationItemCommonType = {
    isDataCorrect?: boolean;
    originalData?: string;
    newData?: string;
    isChanged?: boolean;
};

/**
 * 数据统计
 * @params importDataAdd {number} 导入数据新增
 * @params importDataUpdate {number} 导入数据更新
 * @params importDataDelete {number} 导入数据删除
 */
type DataSummaryCommonType = {
    importDataAdd?: number;
    importDataUpdate?: number;
    importDataDelete?: number;
};

/**
 * 导入数据方式
 */
type ImportDataModeCommonType = 0 | 1;

/**
 * 导入数据统计
 * @params importDataTotal {number} 导入数据总数
 * @params importDataSuccessTotal {number} 导入数据成功总数
 * @params successDataSummary {DataSummaryCommonType} 成功的数据统计
 */
type ImportDataSummaryCommonType = {
    importDataTotal?: number;
    importDataSuccessTotal?: number;
    successDataSummary?: DataSummaryCommonType;
};

/**
 * 导入节点类型
 */
type ImportNodeTypeCommonType = 0 | 1 | 2;

/**
 * 导入任务
 * @params id {string} 任务Id
 * @params importTaskStatus {ImportTaskStatusCommonType} 任务状态
 * @params importTaskType {ImportTaskTypeCommonType} 导入任务类型
 * @params descriptor {ImportTaskDescriptorCommonType} 任务参数
 * @params createTaskTime {string} 任务的创建时间
 * @params endTaskTime {string} 任务的结束时间
 * @params dataProgress {number} 数据进度
 * @params importDataSummary {ImportDataSummaryCommonType} 导入结果统计
 */
type ImportTaskCommonType = {
    id?: string;
    importTaskStatus?: ImportTaskStatusCommonType;
    importTaskType?: ImportTaskTypeCommonType;
    descriptor?: ImportTaskDescriptorCommonType;
    createTaskTime?: string;
    endTaskTime?: string;
    dataProgress?: number;
    importDataSummary?: ImportDataSummaryCommonType;
};

/**
 * 导入任务descriptor
 * @params importDataOperatorId {string} 导入数据的操作者
 * @params parentId {string} 导入的部门Id
 * @params fileName {string} 文件名称
 * @params fileSize {number} 文件大小
 * @params workSheet {string} Excel sheet
 * @params importDataMode {ImportDataModeCommonType} 导入数据方式（默认增量）
 * @params importNodeType {ImportNodeTypeCommonType} 导入节点类型（默认当前节点）
 */
type ImportTaskDescriptorCommonType = {
    importDataOperatorId?: string;
    parentId?: string;
    fileName?: string;
    fileSize?: number;
    workSheet?: string;
    importDataMode?: ImportDataModeCommonType;
    importNodeType?: ImportNodeTypeCommonType;
};

/**
 * 导入任务状态
 */
type ImportTaskStatusCommonType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

/**
 * 导出任务类型
 */
type ImportTaskTypeCommonType = 0;

/**
 * 通讯数据
 * @params qq {string} QQ
 * @params weixin {string} 微信
 * @params weibo {string} 微博
 * @params mail {string} 邮箱
 * @params address {string} 地址
 */
type CallDataCommonType = {
    qq?: string;
    weixin?: string;
    weibo?: string;
    mail?: string;
    address?: string;
};

/**
 * 通过电话号码搜素联系人
 * @params phones {any[]} 查询参数（电话集合）
 */
type ContactSearchByPhoneInCommonType = {
    phones?: any[];
};

/**
 * 数据同步上报
 * @params resourceType {ResourceTypeCommonType} 资源类型:Department,Contact
 */
type DataSyncReportInCommonType = {
    resourceType?: ResourceTypeCommonType;
};

/**
 * 移动部门位置
 * @params beforeDepartmentId {string} 移入位置前面的DepartmentId
 * @params afterDepartmentId {string} 移入位置后面的DepartmentId
 */
type MoveDepartmentPositionInCommonType = {
    beforeDepartmentId?: string;
    afterDepartmentId?: string;
};

/**
 * 移除组成员入参
 * @params id {string} 成员Id（必填）
 * @params memberType {MemberTypeCommonType} 成员类型
 */
type RemoveGroupMemberInCommonType = {
    id: string;
    memberType?: MemberTypeCommonType;
};

/**
 * 资源类型
 */
type ResourceTypeCommonType = 1 | 2;

/**
 * 联系人部门变更
 * @params departmentIds {any[]} 人员所属的部门Id集合
 */
type ContactDepartmentChangeInCommonType = {
    departmentIds: any[];
};

/**
 * 组信息
 * @params id {string} 用户组ID
 * @params name {string} 名称（必填）
 * @params description {string} 描述（可选）
 * @params members {GroupMemberInCommonType[]} 组成员Id集合（可选）
 * @params type {number} 组类型(个人组：2，预案组类型：3，临时组：4)
 * @params owner {string} 拥有者（可选）
 * @params relatedId {string} 外部资源Id
 */
type GroupInV2CommonType = {
    id?: string;
    name: string;
    description?: string;
    members?: GroupMemberInCommonType[];
    type?: number;
    owner?: string;
    relatedId?: string;
};

/**
 * 组成员入参
 * @params id {string} 成员Id（必填）
 * @params name {string} 成员名称（选填）
 * @params memberType {MemberTypeCommonType} 成员类型
 */
type GroupMemberInCommonType = {
    id: string;
    name?: string;
    memberType?: MemberTypeCommonType;
};

/**
 * 移动人员位置
 * @params beforeContactId {string} 移入位置前面的ContactId
 * @params afterContactId {string} 移入位置后面的ContactId
 * @params departmentId {string} 移动所在层级的DepartmentId
 */
type MoveContactPositionInCommonType = {
    beforeContactId?: string;
    afterContactId?: string;
    departmentId?: string;
};

/**
 * 移动组内成员位置
 * @params beforeMemberId {string} 移入位置前面的成员Id
 * @params afterMemberId {string} 移入位置后面的成员Id
 * @params groupId {string} 移动所在的组GroupId
 */
type MoveGroupMemberPositionInCommonType = {
    beforeMemberId?: string;
    afterMemberId?: string;
    groupId?: string;
};

/**
 * 移动组位置
 * @params beforeGroupId {string} 移入位置前面的GroupId
 * @params afterGroupId {string} 移入位置后面的GroupId
 */
type MoveGroupPositionCommonType = {
    beforeGroupId?: string;
    afterGroupId?: string;
};

/**
 * 置顶联系人入参
 * @params departmentId {string} 部门Id
 */
type TopContactPositionInCommonType = {
    departmentId?: string;
};

/**
 * 置顶组成员位置
 * @params groupId {string} 移动所在的组GroupId
 */
type TopMemberPositionInCommonType = {
    groupId?: string;
};

/**
 * 更新用户组实体
 * @params name {string} 名称（可选）
 * @params description {string} 描述（可选）
 * @params members {GroupMemberInCommonType[]} 组成员集合（可选）
 * @params owner {string} 拥有者（可选）
 * @params relatedId {string} 外部资源Id
 */
type UpdateGroupInV2CommonType = {
    name?: string;
    description?: string;
    members?: GroupMemberInCommonType[];
    owner?: string;
    relatedId?: string;
};

/**
 * 用户配置
 * @params configType {number} 配置类型(夜服配置：1，语言配置：2，皮肤配置：4，点对点视频通话：8，视频会议：16，语音会议：32，语音通知：64，语音广播：128)
 * @params configInfo {undefined} 配置信息
 */
type UserConfigInCommonType = {
    configType: number;
    configInfo: undefined;
};

/**
 * 联系人基础信息
 * @params id {string} 标识
 * @params name {string} 名称
 * @params account {string} 账号
 * @params description {string} 描述
 * @params gender {number} 性别
 * @params birthday {string} 生日
 * @params title {string} 职位
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params phones {PhoneDataCommonType[]} 电话列表
 * @params callInformation {CallDataCommonType} 通讯信息
 * @params resourceId {string} 分级调度外部资源Id
 * @params platformId {string} 分级调度平台Id
 * @params platformName {string} 分级调度平台名称
 * @params relatedId {string} 关联ID（可选）
 * @params accountState {number} 账号状态
 * @params photoPath {string} 头像路径
 * @params extension {string} 扩展属性
 * @params areaCode {string} 行政区域码
 * @params identityKey {string} 身份Key
 * @params contactTypeId {string} 联系人类型
 */
type ContactBasicOutCommonType = {
    id?: string;
    name?: string;
    account?: string;
    description?: string;
    gender?: number;
    birthday?: string;
    title?: string;
    createTime?: string;
    updateTime?: string;
    phones?: PhoneDataCommonType[];
    callInformation?: CallDataCommonType;
    resourceId?: string;
    platformId?: string;
    platformName?: string;
    relatedId?: string;
    accountState?: number;
    photoPath?: string;
    extension?: string;
    areaCode?: string;
    identityKey?: string;
    contactTypeId?: string;
};

/**
 * 部门基本数据
 * @params id {string} 标识
 * @params name {string} 名称
 * @params description {string} 描述
 * @params parentId {string} 父节点Id
 * @params owner {string} 部门负责人
 * @params platformId {string} 平台Id
 * @params resourceId {string} 资源Id
 * @params typologyNodeId {string} 拓扑节点Id
 * @params relatedId {string} 外部资源Id
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 */
type DepartmentOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
    parentId?: string;
    owner?: string;
    platformId?: string;
    resourceId?: string;
    typologyNodeId?: string;
    relatedId?: string;
    createTime?: string;
    updateTime?: string;
};

/**
 * 组织架构来源
 */
type DepartmentSourceTypeCommonType = 1 | 2 | 3 | 4;

/**
 * 组数据
 * @params id {string} 标识
 * @params name {string} 名称
 * @params description {string} 描述
 * @params parentId {string} 父节点Id
 * @params members {any[]} 组成员Id集合
 * @params type {number} 组类型(个人组：2，预案组类型：3，临时组：4)
 * @params owner {string} 负责人
 * @params relatedId {string} 外部资源Id
 */
type GroupOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
    parentId?: string;
    members?: any[];
    type?: number;
    owner?: string;
    relatedId?: string;
};

/**
 * contactOut
 * @params id {string} 标识
 * @params name {string} 名称
 * @params account {string} 账号
 * @params description {string} 描述
 * @params gender {number} 性别 0:男,1:女（可选）
 * @params title {string} 职位
 * @params photo {string} 头像
 * @params photoPath {string} 头像路径
 * @params phones {PhoneDataCommonType[]} 电话列表
 * @params paths {any[]} 路径
 * @params memberOf {any[]} 所属用户组
 * @params relatedId {string} 外部资源Id
 * @params mail {string} 邮箱
 * @params type {number} 联系人类型：1-人员，2-监控，4-会议终端
 * @params accountState {number} 账号状态
 * @params extension {string} 扩展属性
 * @params areaCode {string} 行政区域码
 * @params identityKey {string} 身份Key
 * @params contactTypeId {string} 联系人类型
 */
type ContactOutCommonType = {
    id?: string;
    name?: string;
    account?: string;
    description?: string;
    gender?: number;
    title?: string;
    photo?: string;
    photoPath?: string;
    phones?: PhoneDataCommonType[];
    paths?: any[];
    memberOf?: any[];
    relatedId?: string;
    mail?: string;
    type?: number;
    accountState?: number;
    extension?: string;
    areaCode?: string;
    identityKey?: string;
    contactTypeId?: string;
};

/**
 * 联系类型输出
 * @params id {string} Id
 * @params name {string} 用户类型名称
 * @params description {string} 用户类型描述
 */
type ContactTypeOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
};

/**
 * 部门基础信息输出对象定义
 * @params id {string} 标识
 * @params name {string} 名称
 * @params parentId {string} 父节点Id
 * @params relatedId {string} 外部资源Id
 */
type DepartmentBaseOutCommonType = {
    id?: string;
    name?: string;
    parentId?: string;
    relatedId?: string;
};

/**
 * 部门详情数据
 * @params id {string} 标识
 * @params name {string} 名称
 * @params description {string} 描述
 * @params parentId {string} 父节点Id
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params owner {ContactOutCommonType} 拥有者
 * @params summary {DepartmentSummaryCommonType} 统计信息
 * @params departmentPath {DepartmentPathCommonType} 部门节点路径
 * @params relatedId {string} 外部资源Id
 * @params level {number} 节点当前层级
 * @params isLeaf {boolean} 是否叶子节点
 * @params isLeafGroup {boolean} 是否叶子组节点
 * @params platformId {string} 平台Id，为空说明是本级资源
 * @params fromPlatformId {string} 数据来源，为空说明是自建数据
 * @params resourceId {string} 资源Id
 * @params typologyNodeId {string} 虚跟Id，不为空说明这个部门是虚跟
 * @params isTyplogyNode {boolean} 是否是虚根
 * @params typologyNodeExtra {any}
 */
type DepartmentDetailOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
    parentId?: string;
    createTime?: string;
    updateTime?: string;
    owner?: ContactOutCommonType;
    summary?: DepartmentSummaryCommonType;
    departmentPath?: DepartmentPathCommonType;
    relatedId?: string;
    level?: number;
    isLeaf?: boolean;
    isLeafGroup?: boolean;
    platformId?: string;
    fromPlatformId?: string;
    resourceId?: string;
    typologyNodeId?: string;
    isTyplogyNode?: boolean;
    typologyNodeExtra?: any;
};

/**
 * 部门输出
 * @params memberCount {number} 成员数量（只包含联系人）
 * @params description {string} 描述
 * @params platformId {string} 平台Id
 * @params resourceId {string} 资源Id
 * @params path {string} 路径
 * @params id {string} 标识
 * @params name {string} 名称
 * @params parentId {string} 父节点Id
 * @params relatedId {string} 外部资源Id
 */
type DepartmentHasStatisticsOutCommonType = {
    memberCount?: number;
    description?: string;
    platformId?: string;
    resourceId?: string;
    path?: string;
    id?: string;
    name?: string;
    parentId?: string;
    relatedId?: string;
};

/**
 * 部门路径输出
 * @params pathInfoItems {DeptPathItemCommonType[]} 路径集合
 */
type DepartmentPathOutCommonType = {
    pathInfoItems?: DeptPathItemCommonType[];
};

/**
 * 根部门返回
 * @params summary {DepartmentSummaryCommonType} 统计信息
 * @params isLeaf {boolean} 是否叶子节点
 * @params isLeafGroup {boolean} 是否叶子组节点
 * @params synchronizeableRequired {boolean}  是否需要同步
 * @params sourceType {DepartmentSourceTypeCommonType} 架构来源(1.本地通讯录 2.内置架构 3.他建架构 4.自建架构)
 * @params typologyNodeId {string} 拓扑Id
 * @params isTyplogyNode {boolean} 是否是一个拓扑节点
 * @params fromPlatformId {string} 同步来源
 * @params level {number} 节点当前层级
 * @params typologyNodeExtra {any} 拓扑的一些附加信息键值对形式,返回给前端
 * @params id {string} 标识
 * @params name {string} 名称
 * @params description {string} 描述
 * @params parentId {string} 父节点Id
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params owner {string} 拥有者
 * @params platformId {string} 平台Id
 * @params resourceId {string} 资源Id
 * @params relatedId {string} 外部资源Id
 */
type DepartmentRootOutCommonType = {
    summary?: DepartmentSummaryCommonType;
    isLeaf?: boolean;
    isLeafGroup?: boolean;
    synchronizeableRequired?: boolean;
    sourceType?: DepartmentSourceTypeCommonType;
    typologyNodeId?: string;
    isTyplogyNode?: boolean;
    fromPlatformId?: string;
    level?: number;
    typologyNodeExtra?: any;
    id?: string;
    name?: string;
    description?: string;
    parentId?: string;
    createTime?: string;
    updateTime?: string;
    owner?: string;
    platformId?: string;
    resourceId?: string;
    relatedId?: string;
};

/**
 * 组详情数据
 * @params id {string} 标识
 * @params name {string} 名称
 * @params description {string} 描述
 * @params parentId {string} 父节点Id
 * @params members {GroupMemberOutCommonType[]} 组成员Id集合
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params owner {string} 拥有者
 * @params type {number} 组类型
 * @params relatedId {string} 外部资源Id
 */
type GroupDetailOutV2CommonType = {
    id?: string;
    name?: string;
    description?: string;
    parentId?: string;
    members?: GroupMemberOutCommonType[];
    createTime?: string;
    updateTime?: string;
    owner?: string;
    type?: number;
    relatedId?: string;
};

/**
 * 人员输出
 * @params memberCount {number} 成员数量
 * @params contactCount {number} 联系人数量
 * @params id {string} 标识
 * @params name {string} 名称
 * @params description {string} 描述
 * @params parentId {string} 父节点Id
 * @params type {number} 组类型(个人组：2，预案组类型：3，临时组：4)
 * @params path {string} 路径
 * @params owner {string} 拥有者
 * @params relatedId {string} 外部资源Id
 */
type GroupHasStatisticsOutCommonType = {
    memberCount?: number;
    contactCount?: number;
    id?: string;
    name?: string;
    description?: string;
    parentId?: string;
    type?: number;
    path?: string;
    owner?: string;
    relatedId?: string;
};

/**
 * 组成员输出
 * @params type {number} 联系人类型：1-人员，2-监控，4-会议终端
 * @params photo {string} 头像
 * @params id {string} 标识
 * @params name {string} 名称
 * @params account {string} 账号
 * @params description {string} 描述
 * @params gender {number} 性别
 * @params birthday {string} 生日
 * @params title {string} 职位
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params phones {PhoneDataCommonType[]} 电话列表
 * @params callInformation {CallDataCommonType} 通讯信息
 * @params resourceId {string} 分级调度外部资源Id
 * @params platformId {string} 分级调度平台Id
 * @params platformName {string} 分级调度平台名称
 * @params relatedId {string} 关联ID（可选）
 * @params accountState {number} 账号状态
 * @params photoPath {string} 头像路径
 * @params extension {string} 扩展属性
 * @params areaCode {string} 行政区域码
 * @params identityKey {string} 身份Key
 * @params contactTypeId {string} 联系人类型
 */
type GroupMemberOutCommonType = {
    type?: number;
    photo?: string;
    id?: string;
    name?: string;
    account?: string;
    description?: string;
    gender?: number;
    birthday?: string;
    title?: string;
    createTime?: string;
    updateTime?: string;
    phones?: PhoneDataCommonType[];
    callInformation?: CallDataCommonType;
    resourceId?: string;
    platformId?: string;
    platformName?: string;
    relatedId?: string;
    accountState?: number;
    photoPath?: string;
    extension?: string;
    areaCode?: string;
    identityKey?: string;
    contactTypeId?: string;
};

/**
 * 组成员输出（简化结构）
 * @params type {number} 联系人类型：1-人员，2-监控，4-会议终端
 * @params id {string} 标识
 */
type GroupMemberSimplifyCommonType = {
    type?: number;
    id?: string;
};

/**
 * 组输出对象定位（简化结构）
 * @params id {string} 标识
 * @params name {string} 名称
 * @params description {string} 描述
 * @params parentId {string} 父节点Id
 * @params type {number} 组类型(个人组：2，预案组类型：3，临时组：4)
 * @params relatedId {string} 外部资源Id
 * @params owner {string} 拥有者
 * @params members {GroupMemberSimplifyCommonType[]} 组成员集合
 * @params membersTotal {number} 成员总数
 * @params statisticsMembers {StatisticsMemberByTypeCommonType[]} 组成员统计（按类型）
 */
type GroupSimplifyOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
    parentId?: string;
    type?: number;
    relatedId?: string;
    owner?: string;
    members?: GroupMemberSimplifyCommonType[];
    membersTotal?: number;
    statisticsMembers?: StatisticsMemberByTypeCommonType[];
};

/**
 *
 * @params departmentsData {DepartmentDetailOutCommonType[]} 部门列表
 * @params contactsData {ContactOutCommonType[]} 联系人列表
 */
type OrganizationMembersOutCommonType = {
    departmentsData?: DepartmentDetailOutCommonType[];
    contactsData?: ContactOutCommonType[];
};

/**
 * 联系人所拥有权限的部门集合
 * @params hasAllPermission {boolean} 是否拥有所有部门权限当查询的departmentId为空时，有效
 * @params items {DepartmentBaseOutCommonType[]} 返回部门集合
 */
type PermissionDepartmentOutCommonType = {
    hasAllPermission?: boolean;
    items?: DepartmentBaseOutCommonType[];
};

/**
 * 搜索带统计结果
 * @params departmentCount {number} 部门的数量
 * @params contactCount {number} 人的数量
 * @params groupCount {number} 组的数量
 * @params departments {DepartmentHasStatisticsOutCommonType[]} 部门列表
 * @params contacts {ContactOutCommonType[]} 联系人列表
 * @params groups {GroupHasStatisticsOutCommonType[]} 用户组列表
 */
type SearchResultHasStatisticsOutCommonType = {
    departmentCount?: number;
    contactCount?: number;
    groupCount?: number;
    departments?: DepartmentHasStatisticsOutCommonType[];
    contacts?: ContactOutCommonType[];
    groups?: GroupHasStatisticsOutCommonType[];
};

/**
 * search out dto
 * @params departments {DepartmentOutCommonType[]} 部门列表
 * @params contacts {ContactOutCommonType[]} 联系人列表
 * @params groups {GroupOutCommonType[]} 用户组列表
 */
type SearchResultOutCommonType = {
    departments?: DepartmentOutCommonType[];
    contacts?: ContactOutCommonType[];
    groups?: GroupOutCommonType[];
};

/**
 * 单个标签统计输出
 * @params statisticsType {number} 统计标签
 * @params count {number} 数量
 */
type StatisticsMemberByTypeCommonType = {
    statisticsType?: number;
    count?: number;
};

/**
 * 任务进度
 * @params id {string} 任务Id
 * @params importTaskStatus {ImportTaskStatusCommonType} 任务状态
 * @params createTaskTime {string} 任务的创建时间
 * @params endTaskTime {string} 任务的结束时间
 * @params fileName {string} 文件名称
 * @params fileSize {number} 文件大小
 * @params importDataMode {ImportDataModeCommonType} 导入数据方式（默认增量）
 * @params dataProgress {number} 数据进度（数据校验或数据导入的进度）
 * @params importDataSummary {ImportDataSummaryCommonType} 导入结果统计
 */
type TaskProgressOutCommonType = {
    id?: string;
    importTaskStatus?: ImportTaskStatusCommonType;
    createTaskTime?: string;
    endTaskTime?: string;
    fileName?: string;
    fileSize?: number;
    importDataMode?: ImportDataModeCommonType;
    dataProgress?: number;
    importDataSummary?: ImportDataSummaryCommonType;
};

/**
 * 上传联系人头像
 * @params id {string} 联系人Id
 * @params photoPath {string} 联系人路径
 */
type UploadUserPhotoOutCommonType = {
    id?: string;
    photoPath?: string;
};

/**
 * 用户配置
 * @params contactId {string} 联系人Id
 * @params configType {number} 配置类型(夜服配置：1，语言配置：2，皮肤配置：4,点对点视频配置：8，视频会议配置：16，语音会议配置：32，语音通知：64，语音广播：128)
 * @params configInfo {undefined} 配置信息
 */
type UserConfigOutCommonType = {
    contactId?: string;
    configType?: number;
    configInfo?: undefined;
};

/**
 * 联系类型添加
 * @params id {string} Id
 * @params name {string} 用户类型名称
 * @params description {string} 用户类型描述
 */
type ContactTypeInCommonType = {
    id?: string;
    name: string;
    description?: string;
};

/**
 * 输入联系人类型
 * @params name {string} 用户类型名称
 * @params description {string} 用户类型描述
 */
type UpdateContactTypeInCommonType = {
    name?: string;
    description?: string;
};

/**
 *
 * @params state {SyncStateCommonType}
 * @params departmentsCount {number}
 * @params contactsCount {number}
 * @params groupsCount {number}
 * @params departmentsData {any}
 * @params contactsData {any}
 * @params groupsData {any}
 */
type SyncProgressCommonType = {
    state?: SyncStateCommonType;
    departmentsCount?: number;
    contactsCount?: number;
    groupsCount?: number;
    departmentsData?: any;
    contactsData?: any;
    groupsData?: any;
};

/**
 * undefined
 */
type SyncStateCommonType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 * 部门节点路径
 * @params departmentId {string} 标识
 * @params path {string} 节点路径：例如：[{"id":"1234567","name":"NodeName1"},{"id":"23456","name":"NodeName2"}]
 * @params rootPath {DeptPathItemCommonType} 根路径
 * @params departmentIDs {any[]} 部门节点ID集合
 * @params pathInfoItems {DeptPathItemCommonType[]} 部门节点集合
 * @params isContainPresetDepartment {boolean} 是否包含预置部门,如果包含，则认为这是一个预置通讯录
 * @params nearestTypologyNodeId {string} 数据产生所在的平台ID
 * @params nearestTypologyNodeName {string} 数据产生所在的平台名称
 */
type DepartmentPathCommonType = {
    departmentId?: string;
    path?: string;
    rootPath?: DeptPathItemCommonType;
    departmentIDs?: any[];
    pathInfoItems?: DeptPathItemCommonType[];
    isContainPresetDepartment?: boolean;
    nearestTypologyNodeId?: string;
    nearestTypologyNodeName?: string;
};

/**
 * 成员类型
 */
type MemberTypeCommonType = 1 | 2 | 4;

/**
 * 统计电话类型下联系人数量
 * @params contactTotal {number} 每种类型下的总数
 * @params phoneType {string} 电话类型
 * @params isCurrentPhoneType {boolean} 是否当前类型
 */
type StatisticsContactByPhoneTypeCommonType = {
    contactTotal?: number;
    phoneType?: string;
    isCurrentPhoneType?: boolean;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ContactBasicOutCommonType[]} 记录
 */
type ContactBasicOutReqCommonType = {
    totalCount?: number;
    records?: ContactBasicOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {DepartmentOutCommonType[]} 记录
 */
type DepartmentOutReqCommonType = {
    totalCount?: number;
    records?: DepartmentOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {GroupOutCommonType[]} 记录
 */
type GroupOutReqCommonType = {
    totalCount?: number;
    records?: GroupOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ContactOutCommonType[]} 记录
 */
type ContactOutReqCommonType = {
    totalCount?: number;
    records?: ContactOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {DepartmentRootOutCommonType[]} 记录
 */
type DepartmentRootOutReqCommonType = {
    totalCount?: number;
    records?: DepartmentRootOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {GroupMemberOutCommonType[]} 记录
 */
type GroupMemberOutReqCommonType = {
    totalCount?: number;
    records?: GroupMemberOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {GroupSimplifyOutCommonType[]} 记录
 */
type GroupSimplifyOutReqCommonType = {
    totalCount?: number;
    records?: GroupSimplifyOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {UserConfigOutCommonType[]} 记录
 */
type UserConfigOutReqCommonType = {
    totalCount?: number;
    records?: UserConfigOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {OrganizationMembersOutCommonType} 记录
 */
type OrganizationMembersOutReqCommonType = {
    totalCount?: number;
    records?: OrganizationMembersOutCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {SearchResultHasStatisticsOutCommonType} 记录
 */
type SearchResultHasStatisticsOutReqCommonType = {
    totalCount?: number;
    records?: SearchResultHasStatisticsOutCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {SearchResultOutCommonType} 记录
 */
type SearchResultOutReqCommonType = {
    totalCount?: number;
    records?: SearchResultOutCommonType;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params addTotalCount {number} Add总数
 * @params updateTotalCount {number} Update总数
 * @params deleteTotalCount {number} Delete总数
 * @params records {ContactDataValidationCommonType[]} 记录
 */
type ContactDataValidationReqCommonType = {
    totalCount?: number;
    addTotalCount?: number;
    updateTotalCount?: number;
    deleteTotalCount?: number;
    records?: ContactDataValidationCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params currentRecords {ContactOutReqCommonType} 记录
 * @params statistics {StatisticsContactByPhoneTypeCommonType[]} 统计数量
 */
type StatisticsContactByPhoneTypeReqCommonType = {
    totalCount?: number;
    currentRecords?: ContactOutReqCommonType;
    statistics?: StatisticsContactByPhoneTypeCommonType[];
};

/**
 * 查询类型
 */
type QueryTypeCommonType = 0 | 1 | 2;

/**
 * 电话数据
 * @params type {string} 电话类型 telephoneNumber：办公电话，ipPhone：IP话机，homePhone：家庭电话，facsimileTelephoneNumber：传真号码，mobile：手机，pttNumber：对讲号码
 * @params number {string} 号码
 */
type PhoneDataCommonType = {
    type?: string;
    number?: string;
};

/**
 * 统计信息
 * @params memberCount {number} 所有部门成员，包含子部门的成员
 * @params subDepartmentCount {number} 子部门数量
 */
type DepartmentSummaryCommonType = {
    memberCount?: number;
    subDepartmentCount?: number;
};

/**
 * 部门路径信息
 * @params id {string} 部门Id
 * @params name {string} 部门名称
 * @params typologyNodeId {string} 拓扑Id
 */
type DeptPathItemCommonType = {
    id?: string;
    name?: string;
    typologyNodeId?: string;
};

/**
 * 导出任务状态
 */
type ExportTaskStatusCommonType = 1 | 2 | 3;

/**
 * 导出任务类型
 */
type ExportTaskTypeCommonType = 1 | 2;

/**
 * 导出后缀类型
 */
type ExportFileTypeCommonType = 0 | 1;

/**
 * 任务descriptor
 * @params exportFileType 导出后缀类型
 * @params currentUserId 当前操作的人员Id
 */
type ExportTaskDescriptorCommonType = {
    exportFileType?: ExportFileTypeCommonType;
    currentUserId?: string;
};

----

/**
 * 新建联系人——请求参数类型定义
 * @params pid {string} 父节点ID （必填）
 * @headers X-version {string}
 * @params id {string} 联系人ID(可选)
 * @params name {string} 名称（必填） （必填）
 * @params account {string} 账号（必填） （必填）
 * @params password {string} 密码（必填），密码长度8-30位大小写字母数字特殊符号 （必填）
 * @params description {string} 描述（可选）
 * @params gender {number} 性别 0:男,1:女（可选）
 * @params birthday {string} 生日（可选）
 * @params photo {string} 头像（可选）
 * @params department {string} 部门（可选）
 * @params title {string} 职位（可选）
 * @params relatedId {string} 关联ID（可选）
 * @params phones {PhoneDataCommonType[]} 电话列表
 * @params callInformation {CallDataCommonType} 通讯信息（可选）
 * @params departmentIds {any[]} 父节点Id集合（包含全部的）
 * @params extension {string} 扩展属性
 * @params areaCode {string} 行政区域码
 * @params identityKey {string} 身份Key
 * @params contactTypeId {string} 联系人类型
 */
export type AddContactUserReqType = {
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
    phones?: PhoneDataCommonType[];
    callInformation?: CallDataCommonType;
    departmentIds?: any[];
    extension?: string;
    areaCode?: string;
    identityKey?: string;
    contactTypeId?: string;
};

/**
 * 新建联系人——响应参数类型定义
 * @params department {string} 部门
 * @params parentId {string} 所在部门ID
 * @params departmentIds {any[]} 父节点Id集合（包含全部的）
 * @params memberOf {any[]} 所属组
 * @params departmentPaths {DepartmentPathCommonType[]} 联系人部门路径
 * @params photo {string} 头像
 * @params id {string} 标识
 * @params name {string} 名称
 * @params account {string} 账号
 * @params description {string} 描述
 * @params gender {number} 性别
 * @params birthday {string} 生日
 * @params title {string} 职位
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params phones {PhoneDataCommonType[]} 电话列表
 * @params callInformation {CallDataCommonType} 通讯信息
 * @params resourceId {string} 分级调度外部资源Id
 * @params platformId {string} 分级调度平台Id
 * @params platformName {string} 分级调度平台名称
 * @params relatedId {string} 关联ID（可选）
 * @params accountState {number} 账号状态
 * @params photoPath {string} 头像路径
 * @params extension {string} 扩展属性
 * @params areaCode {string} 行政区域码
 * @params identityKey {string} 身份Key
 * @params contactTypeId {string} 联系人类型
 */
export type AddContactUserResType = {
    department: string;
    parentId: string;
    departmentIds: any[];
    memberOf: any[];
    departmentPaths: DepartmentPathCommonType[];
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
    phones: PhoneDataCommonType[];
    callInformation: CallDataCommonType;
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
 * 查询联系人详情——请求参数类型定义
 * @params id {string} Id标识|账号|外部资源Id （必填）
 * @headers X-version {string}
 */
export type GetUserInfoReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 查询联系人详情——响应参数类型定义
 * @params department {string} 部门
 * @params parentId {string} 所在部门ID
 * @params departmentIds {any[]} 父节点Id集合（包含全部的）
 * @params memberOf {any[]} 所属组
 * @params departmentPaths {DepartmentPathCommonType[]} 联系人部门路径
 * @params photo {string} 头像
 * @params id {string} 标识
 * @params name {string} 名称
 * @params account {string} 账号
 * @params description {string} 描述
 * @params gender {number} 性别
 * @params birthday {string} 生日
 * @params title {string} 职位
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params phones {PhoneDataCommonType[]} 电话列表
 * @params callInformation {CallDataCommonType} 通讯信息
 * @params resourceId {string} 分级调度外部资源Id
 * @params platformId {string} 分级调度平台Id
 * @params platformName {string} 分级调度平台名称
 * @params relatedId {string} 关联ID（可选）
 * @params accountState {number} 账号状态
 * @params photoPath {string} 头像路径
 * @params extension {string} 扩展属性
 * @params areaCode {string} 行政区域码
 * @params identityKey {string} 身份Key
 * @params contactTypeId {string} 联系人类型
 */
export type GetUserInfoResType = {
    department: string;
    parentId: string;
    departmentIds: any[];
    memberOf: any[];
    departmentPaths: DepartmentPathCommonType[];
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
    phones: PhoneDataCommonType[];
    callInformation: CallDataCommonType;
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
 * 编辑联系人——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 名称（可选）
 * @params description {string} 描述（可选）
 * @params gender {number} 性别 0:男,1:女（可选）
 * @params birthday {string} 生日（可选）
 * @params photo {string} 头像（可选）
 * @params department {string} 部门（可选）
 * @params title {string} 职位（可选）
 * @params phones {PhoneDataCommonType[]} 电话列表
 * @params callInformation {CallDataCommonType} 通讯信息（可选）
 * @params relatedId {string} 关联ID（可选）
 * @params extension {string} 扩展属性
 * @params areaCode {string} 行政区域码
 * @params identityKey {string} 身份Key
 * @params contactTypeId {string} 联系人类型
 */
export type UpdateContactUserReqType = {
    id: string;
    'X-version'?: string;
    name?: string;
    description?: string;
    gender?: number;
    birthday?: string;
    photo?: string;
    department?: string;
    title?: string;
    phones?: PhoneDataCommonType[];
    callInformation?: CallDataCommonType;
    relatedId?: string;
    extension?: string;
    areaCode?: string;
    identityKey?: string;
    contactTypeId?: string;
};

/**
 * 删除联系人——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteContactUserReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 变更密码——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params oldPassword {string} 旧密码（必填），密码长度8-30位大小写字母数字特殊符号 （必填）
 * @params newPassword {string} 新密码（必填），密码长度8-30位大小写字母数字特殊符号 （必填）
 */
export type UpdateContactUserPasswordReqType = {
    id: string;
    'X-version'?: string;
    oldPassword: string;
    newPassword: string;
};

/**
 * 密码重置——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type ResetPasswordReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 查询联系人详情——请求参数类型定义
 * @headers X-version {string}
 * @params uniqueId {string} 唯一标识（Id标识|账号|外部资源Id） （必填）
 */
export type GetContractDetailsReqType = {
    'X-version'?: string;
    uniqueId: string;
};

/**
 * 查询联系人详情——响应参数类型定义
 * @params department {string} 部门
 * @params parentId {string} 所在部门ID
 * @params departmentIds {any[]} 父节点Id集合（包含全部的）
 * @params memberOf {any[]} 所属组
 * @params departmentPaths {DepartmentPathCommonType[]} 联系人部门路径
 * @params photo {string} 头像
 * @params id {string} 标识
 * @params name {string} 名称
 * @params account {string} 账号
 * @params description {string} 描述
 * @params gender {number} 性别
 * @params birthday {string} 生日
 * @params title {string} 职位
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params phones {PhoneDataCommonType[]} 电话列表
 * @params callInformation {CallDataCommonType} 通讯信息
 * @params resourceId {string} 分级调度外部资源Id
 * @params platformId {string} 分级调度平台Id
 * @params platformName {string} 分级调度平台名称
 * @params relatedId {string} 关联ID（可选）
 * @params accountState {number} 账号状态
 * @params photoPath {string} 头像路径
 * @params extension {string} 扩展属性
 * @params areaCode {string} 行政区域码
 * @params identityKey {string} 身份Key
 * @params contactTypeId {string} 联系人类型
 */
export type GetContractDetailsResType = {
    department: string;
    parentId: string;
    departmentIds: any[];
    memberOf: any[];
    departmentPaths: DepartmentPathCommonType[];
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
    phones: PhoneDataCommonType[];
    callInformation: CallDataCommonType;
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
 * Xls组织架构文件导入——请求参数类型定义
 * @params pid {string} pid
 * @params workSheet {string}
 * @params syncResourceChanged {boolean}
 * @headers X-version {string}
 */
export type ImportOrganizationXlsReqType = {
    pid?: string;
    workSheet?: string;
    syncResourceChanged?: boolean;
    'X-version'?: string;
};

/**
 * 导出组织架构——请求参数类型定义
 * @params pid {string} 导出组织架构父ID （必填）
 * @params exportFileType {number} 导出文件类型 0:Excel 1:Json
 * @headers X-version {string}
 */
export type ExportOrganizationReqType = {
    pid: string;
    exportFileType?: number;
    'X-version'?: string;
};

/**
 * 导出组织架构——响应参数类型定义
 * @params id {string} 任务Id
 * @params status {ExportTaskStatusCommonType} 任务状态
 * @params type {ExportTaskTypeCommonType} 任务类型
 * @params descriptor {ExportTaskDescriptorCommonType} 任务参数
 * @params createTimestamp {number} 任务的创建时间
 * @params exportFileSuffix {string} 文件后缀
 * @params exportFilePath {string} 导入文件路径
 * @params errorMessage {string} 错误信息
 */
export type ExportOrganizationResType = {
    id: string;
    status: ExportTaskStatusCommonType;
    type: ExportTaskTypeCommonType;
    descriptor: ExportTaskDescriptorCommonType;
    createTimestamp: number;
    exportFileSuffix: string;
    exportFilePath: string;
    errorMessage: string;
};

/**
 * 导出预案组——请求参数类型定义
 * @params exportFileType {number} 导出文件类型 0:Excel 1:Json
 * @params groupId {string} 导出的组Id（Id为空则导出所有预案组）
 * @headers X-version {string}
 */
export type ExportPlanGroupReqType = {
    exportFileType?: number;
    groupId?: string;
    'X-version'?: string;
};

/**
 * 导出预案组——响应参数类型定义
 * @params id {string} 任务Id
 * @params status {ExportTaskStatusCommonType} 任务状态
 * @params type {ExportTaskTypeCommonType} 任务类型
 * @params descriptor {ExportTaskDescriptorCommonType} 任务参数
 * @params createTimestamp {number} 任务的创建时间
 * @params exportFileSuffix {string} 文件后缀
 * @params exportFilePath {string} 导入文件路径
 * @params errorMessage {string} 错误信息
 */
export type ExportPlanGroupResType = {
    id: string;
    status: ExportTaskStatusCommonType;
    type: ExportTaskTypeCommonType;
    descriptor: ExportTaskDescriptorCommonType;
    createTimestamp: number;
    exportFileSuffix: string;
    exportFilePath: string;
    errorMessage: string;
};

/**
 * 获取导出任务——请求参数类型定义
 * @params taskId {string} taskId （必填）
 * @headers X-version {string}
 */
export type GetExportTaskReqType = {
    taskId: string;
    'X-version'?: string;
};

/**
 * 获取导出任务——响应参数类型定义
 * @params id {string} 任务Id
 * @params status {ExportTaskStatusCommonType} 任务状态
 * @params type {ExportTaskTypeCommonType} 任务类型
 * @params descriptor {ExportTaskDescriptorCommonType} 任务参数
 * @params createTimestamp {number} 任务的创建时间
 * @params exportFileSuffix {string} 文件后缀
 * @params exportFilePath {string} 导入文件路径
 * @params errorMessage {string} 错误信息
 */
export type GetExportTaskResType = {
    id: string;
    status: ExportTaskStatusCommonType;
    type: ExportTaskTypeCommonType;
    descriptor: ExportTaskDescriptorCommonType;
    createTimestamp: number;
    exportFileSuffix: string;
    exportFilePath: string;
    errorMessage: string;
};

/**
 * 获取导出文件——请求参数类型定义
 * @params taskId {string} taskId （必填）
 * @headers X-version {string}
 */
export type GetExportFileInfoReqType = {
    taskId: string;
    'X-version'?: string;
};

/**
 * 获取导出文件——响应参数类型定义
 * @params id {string} 任务Id
 * @params status {ExportTaskStatusCommonType} 任务状态
 * @params type {ExportTaskTypeCommonType} 任务类型
 * @params descriptor {ExportTaskDescriptorCommonType} 任务参数
 * @params createTimestamp {number} 任务的创建时间
 * @params exportFileSuffix {string} 文件后缀
 * @params exportFilePath {string} 导入文件路径
 * @params errorMessage {string} 错误信息
 */
export type GetExportFileInfoResType = {
    id: string;
    status: ExportTaskStatusCommonType;
    type: ExportTaskTypeCommonType;
    descriptor: ExportTaskDescriptorCommonType;
    createTimestamp: number;
    exportFileSuffix: string;
    exportFilePath: string;
    errorMessage: string;
};

/**
 * 预案组文件导入——请求参数类型定义
 * @params pid {string} 父节点ID,带2可挂载跟节点 默认：2 （必填）
 * @params importFileType {number} 导入文件类型 0:Excel 1:Json
 * @params workSheet {string} Excel的Sheet页名称
 * @headers X-version {string}
 */
export type ImportPlanGroupReqType = {
    pid: string;
    importFileType?: number;
    workSheet?: string;
    'X-version'?: string;
};

/**
 * 添加收藏夹——请求参数类型定义
 * @headers X-version {string}
 * @params id {string} 收藏夹ID
 * @params name {string} 名称（必填） （必填）
 * @params description {string} 描述（可选）
 * @params members {any[]} 组成员Id集合（可选）
 * @params relatedId {string} 外部资源Id
 */
export type AddUserFavoritesReqType = {
    'X-version'?: string;
    id?: string;
    name: string;
    description?: string;
    members?: any[];
    relatedId?: string;
};

/**
 * 添加收藏夹——响应参数类型定义
 * @params id {string} 标识
 * @params name {string} 名称
 * @params description {string} 描述
 * @params parentId {string} 父节点Id
 * @params members {ContactOutCommonType[]} 组成员Id集合
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params owner {string} 拥有者
 * @params type {number} 组类型
 * @params relatedId {string} 外部资源Id
 */
export type AddUserFavoritesResType = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    members: ContactOutCommonType[];
    createTime: string;
    updateTime: string;
    owner: string;
    type: number;
    relatedId: string;
};

/**
 * 获取当前用户收藏夹——请求参数类型定义
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetCurrentUserFavoritesReqType = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 获取当前用户收藏夹——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {GroupOutCommonType[]} 记录
 */
export type GetCurrentUserFavoritesResType = {
    totalCount: number;
    records: GroupOutCommonType[];
};

/**
 * 删除收藏夹——请求参数类型定义
 * @params favoriteId {string} 收藏夹ID （必填）
 * @headers X-version {string}
 */
export type DeleteUserFavoritesReqType = {
    favoriteId: string;
    'X-version'?: string;
};

/**
 * 更新收藏夹(收藏夹联系人以此次更新为主,不带成员不变更)——请求参数类型定义
 * @params favoriteId {string} 收藏夹ID （必填）
 * @headers X-version {string}
 * @params name {string} 名称（可选）
 * @params description {string} 描述（可选）
 * @params members {any[]} 组成员Id集合（可选）
 * @params relatedId {string} 外部资源Id
 */
export type UpdateUserFavoritesReqType = {
    favoriteId: string;
    'X-version'?: string;
    name?: string;
    description?: string;
    members?: any[];
    relatedId?: string;
};

/**
 * 查询收藏夹详情——请求参数类型定义
 * @params favoriteId {string} 收藏夹ID （必填）
 * @headers X-version {string}
 */
export type GetCurrentUserFavoritesInfoReqType = {
    favoriteId: string;
    'X-version'?: string;
};

/**
 * 查询收藏夹详情——响应参数类型定义
 * @params id {string} 标识
 * @params name {string} 名称
 * @params description {string} 描述
 * @params parentId {string} 父节点Id
 * @params members {ContactOutCommonType[]} 组成员Id集合
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params owner {string} 拥有者
 * @params type {number} 组类型
 * @params relatedId {string} 外部资源Id
 */
export type GetCurrentUserFavoritesInfoResType = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    members: ContactOutCommonType[];
    createTime: string;
    updateTime: string;
    owner: string;
    type: number;
    relatedId: string;
};

/**
 * 添加收藏夹联系人——请求参数类型定义
 * @params favoriteId {string} favoriteId （必填）
 * @headers X-version {string}
 */
export type AddUserFavoritesContactReqType = {
    favoriteId: string;
    'X-version'?: string;
};

/**
 * 添加收藏夹联系人——响应参数类型定义
 * @params id {string} 标识
 * @params name {string} 名称
 * @params description {string} 描述
 * @params parentId {string} 父节点Id
 * @params members {any[]} 组成员Id集合
 * @params type {number} 组类型(个人组：2，预案组类型：3，临时组：4)
 * @params owner {string} 负责人
 * @params relatedId {string} 外部资源Id
 */
export type AddUserFavoritesContactResType = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    members: any[];
    type: number;
    owner: string;
    relatedId: string;
};

/**
 * 更新收藏夹联系人(收藏夹联系人以此次更新为主)——请求参数类型定义
 * @params favoriteId {string} 收藏夹ID （必填）
 * @headers X-version {string}
 */
export type UpdateUserFavoritesContactReqType = {
    favoriteId: string;
    'X-version'?: string;
};

/**
 * 查询收藏夹联系人——请求参数类型定义
 * @params favoriteId {string} 收藏夹ID （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetUserFavoritesContactReqType = {
    favoriteId: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 查询收藏夹联系人——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetUserFavoritesContactResType = {
    totalCount: number;
    records: any[];
};

/**
 * 新建组——请求参数类型定义
 * @params pid {string} pid 默认：2 （必填）
 * @headers X-version {string}
 * @params id {string} 用户组ID
 * @params name {string} 名称（必填） （必填）
 * @params description {string} 描述（可选）
 * @params members {any[]} 组成员Id集合（可选）
 * @params type {number} 组类型(个人组：2，预案组类型：3，临时组：4)
 * @params owner {string} 拥有者（可选）
 * @params relatedId {string} 外部资源Id
 */
export type CreateGroupV2ReqType = {
    pid: string;
    'X-version'?: string;
    id?: string;
    name: string;
    description?: string;
    members?: any[];
    type?: number;
    owner?: string;
    relatedId?: string;
};

/**
 * 新建组——响应参数类型定义
 * @params id {string} 标识
 * @params name {string} 名称
 * @params description {string} 描述
 * @params parentId {string} 父节点Id
 * @params members {ContactOutCommonType[]} 组成员Id集合
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params owner {string} 拥有者
 * @params type {number} 组类型
 * @params relatedId {string} 外部资源Id
 */
export type CreateGroupV2ResType = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    members: ContactOutCommonType[];
    createTime: string;
    updateTime: string;
    owner: string;
    type: number;
    relatedId: string;
};

/**
 * 删除组——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteGroupReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 更新组——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 名称（可选）
 * @params description {string} 描述（可选）
 * @params members {any[]} 组成员Id集合（可选）
 * @params owner {string} 拥有者（可选）
 * @params relatedId {string} 外部资源Id
 */
export type UpdateGroupV2ReqType = {
    id: string;
    'X-version'?: string;
    name?: string;
    description?: string;
    members?: any[];
    owner?: string;
    relatedId?: string;
};

/**
 * 查询组详情——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetGroupInfoReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 查询组详情——响应参数类型定义
 * @params id {string} 标识
 * @params name {string} 名称
 * @params description {string} 描述
 * @params parentId {string} 父节点Id
 * @params members {ContactOutCommonType[]} 组成员Id集合
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params owner {string} 拥有者
 * @params type {number} 组类型
 * @params relatedId {string} 外部资源Id
 */
export type GetGroupInfoResType = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    members: ContactOutCommonType[];
    createTime: string;
    updateTime: string;
    owner: string;
    type: number;
    relatedId: string;
};

/**
 * 查询所有组——请求参数类型定义
 * @params Type {number} 组类型(所有类型组：0（预案组和个人组），个人组：2，预案组类型：3，临时组：4) 默认：3
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetAllGroupsV2ReqType = {
    Type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 查询所有组——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {GroupOutCommonType[]} 记录
 */
export type GetAllGroupsV2ResType = {
    totalCount: number;
    records: GroupOutCommonType[];
};

/**
 * 查询组详情——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetGroupDetailsReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 查询组详情——响应参数类型定义
 * @params id {string} 标识
 * @params name {string} 名称
 * @params description {string} 描述
 * @params parentId {string} 父节点Id
 * @params members {any[]} 组成员Id集合
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params owner {string} 拥有者
 * @params type {number} 组类型
 * @params relatedId {string} 外部资源Id
 */
export type GetGroupDetailsResType = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    members: any[];
    createTime: string;
    updateTime: string;
    owner: string;
    type: number;
    relatedId: string;
};

/**
 * 添加组成员——请求参数类型定义
 * @params groupId {string} 组ID （必填）
 * @headers X-version {string}
 */
export type AddGroupMembersReqType = {
    groupId: string;
    'X-version'?: string;
};

/**
 * 添加组成员——响应参数类型定义
 * @params id {string} 标识
 * @params name {string} 名称
 * @params description {string} 描述
 * @params parentId {string} 父节点Id
 * @params members {any[]} 组成员Id集合
 * @params type {number} 组类型(个人组：2，预案组类型：3，临时组：4)
 * @params owner {string} 负责人
 * @params relatedId {string} 外部资源Id
 */
export type AddGroupMembersResType = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    members: any[];
    type: number;
    owner: string;
    relatedId: string;
};

/**
 * 更新组成员——请求参数类型定义
 * @params groupId {string} 组ID （必填）
 * @headers X-version {string}
 */
export type UpdateGroupMembersReqType = {
    groupId: string;
    'X-version'?: string;
};

/**
 * 查询组成员——请求参数类型定义
 * @params groupId {string} 组ID （必填）
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetGroupMembersReqType = {
    groupId: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 查询组成员——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetGroupMembersResType = {
    totalCount: number;
    records: any[];
};

/**
 * 新建部门——请求参数类型定义
 * @params pid {string} pid 默认：1 （必填）
 * @headers X-version {string}
 * @params id {string} 部门ID(可选)
 * @params name {string} 名称(必填) （必填）
 * @params description {string} 描述(可选)
 * @params owner {string} 拥有者(可选)
 * @params typologyNodeId {string} 拓扑节点Id，如果不为空那么该节点为虚根
 * @params typologyNodeExtra {any} 拓扑附加信息,json格式
 * @params relatedId {string} 外部资源Id
 */
export type AddOrganizationsReqType = {
    pid: string;
    'X-version'?: string;
    id?: string;
    name: string;
    description?: string;
    owner?: string;
    typologyNodeId?: string;
    typologyNodeExtra?: any;
    relatedId?: string;
};

/**
 * 新建部门——响应参数类型定义
 * @params synchronizeableRequired {boolean}  是否需要同步
 * @params sourceType {DepartmentSourceTypeCommonType} 架构来源(1.本地通讯录 2.内置架构 3.他建架构 4.自建架构)
 * @params typologyNodeId {string} 拓扑Id
 * @params isTyplogyNode {boolean} 是否是一个拓扑节点
 * @params fromPlatformId {string} 同步来源
 * @params level {number} 节点当前层级
 * @params typologyNodeExtra {any} 拓扑的一些附加信息键值对形式,返回给前端
 * @params id {string} 标识
 * @params name {string} 名称
 * @params description {string} 描述
 * @params parentId {string} 父节点Id
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params owner {string} 拥有者
 * @params platformId {string} 平台Id
 * @params resourceId {string} 资源Id
 * @params relatedId {string} 外部资源Id
 */
export type AddOrganizationsResType = {
    synchronizeableRequired: boolean;
    sourceType: DepartmentSourceTypeCommonType;
    typologyNodeId: string;
    isTyplogyNode: boolean;
    fromPlatformId: string;
    level: number;
    typologyNodeExtra: any;
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
 * 删除部门——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteOrganizationsReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 更新部门——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 名称（可选） （必填）
 * @params description {string} 描述(可选)
 * @params owner {string} 拥有者(可选)
 * @params relatedId {string} 外部资源Id
 */
export type UpdateOrganizationsReqType = {
    id: string;
    'X-version'?: string;
    name: string;
    description?: string;
    owner?: string;
    relatedId?: string;
};

/**
 * 查询部门详情——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetOrganizationsByIdV2ReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 查询部门详情——响应参数类型定义
 * @params id {string} 标识
 * @params name {string} 名称
 * @params description {string} 描述
 * @params parentId {string} 父节点Id
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params owner {string} 拥有者
 * @params platformId {string} 平台Id
 * @params resourceId {string} 资源Id
 * @params relatedId {string} 外部资源Id
 */
export type GetOrganizationsByIdV2ResType = {
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
 * 删除部门下所以节点——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteAllOrganizationsReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 查询Root部门——请求参数类型定义
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, MaxValue] 默认：100
 * @headers X-version {string}
 */
export type OrgsGetRootOrganizationsReqType = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 查询Root部门——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {DepartmentRootOutCommonType[]} 记录
 */
export type OrgsGetRootOrganizationsResType = {
    totalCount: number;
    records: DepartmentRootOutCommonType[];
};

/**
 * 分页查询部门及成员——请求参数类型定义
 * @params pid {string} pid （必填）
 * @params Type {number} 默认为0查所有,1为查部门，2为查联系人
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetAllDepartmentsMembersV2ReqType = {
    pid: string;
    Type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 分页查询部门及成员——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetAllDepartmentsMembersV2ResType = {
    totalCount: number;
    records: any[];
};

/**
 * 分页查询部门——请求参数类型定义
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetOrganizationsDepartmentsReqType = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 分页查询部门——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {DepartmentOutCommonType[]} 记录
 */
export type GetOrganizationsDepartmentsResType = {
    totalCount: number;
    records: DepartmentOutCommonType[];
};

/**
 * 分页查询联系人——请求参数类型定义
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, MaxValue] 默认：100
 * @headers X-version {string}
 */
export type GetFrequentContactsReqType = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 分页查询联系人——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {any[]} 记录
 */
export type GetFrequentContactsResType = {
    totalCount: number;
    records: any[];
};

/**
 * 生成签名的密钥——请求参数类型定义
 * @headers X-version {string}
 */
export type CreateGenerateKeyPairReqType = {
    'X-version'?: string;
};

/**
 * 生成签名的密钥——响应参数类型定义
 * @params keyPairId {string}
 * @params keyPairVersion {number}
 * @params pubKey {string}
 * @params p10 {string}
 * @params transId {string}
 */
export type CreateGenerateKeyPairResType = {
    keyPairId: string;
    keyPairVersion: number;
    pubKey: string;
    p10: string;
    transId: string;
};

/**
 * 生成加密解密的主密钥——请求参数类型定义
 * @headers X-version {string}
 */
export type CreateGenerateMainKeyReqType = {
    'X-version'?: string;
};

/**
 * 联系人密文转换——请求参数类型定义
 * @headers X-version {string}
 */
export type TransformContactDataReqType = {
    'X-version'?: string;
};

/**
 * 搜索——请求参数类型定义
 * @params ParentId {string} 基于哪个节点进行搜索,空则从最跟处开始检索
 * @params KeyWord {string} 关键字
 * @params Type {number} 默认为0查所有,1为查部门，2为查联系人
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, MaxValue] 默认：100
 * @headers X-version {string}
 */
export type SearchKeyWordOrPidV2ReqType = {
    ParentId?: string;
    KeyWord?: string;
    Type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 搜索——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {OrganizationOutCommonType} 记录
 */
export type SearchKeyWordOrPidV2ResType = {
    totalCount: number;
    records: any[];
};
