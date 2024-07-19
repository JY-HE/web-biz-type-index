/**
 * 告警记录回调
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 * @params bizName {string} 回调业务数据
 * @params areaCode {string} 行政区域码
 * @params assetId {string} 资产 Id
 * @params typeId {string} 类型 Id
 * @params typeIdPath {string} 告警类型Id路径
 * @params typeNamePath {string} 告警类型名称路径
 * @params sourceTypeId {string} 源类型Id
 * @params level {number} 等级
 * @params status {number} 状态
 */
type AlertRecordCallbackCommonType = {
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
    bizName?: string;
    areaCode?: string;
    assetId?: string;
    typeId?: string;
    typeIdPath?: string;
    typeNamePath?: string;
    sourceTypeId?: string;
    level?: number;
    status?: number;
};

/**
 * 告警源类型回调
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 * @params bizName {string}
 */
type AlertSourceTypeCallbackCommonType = {
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
    bizName?: string;
};

/**
 * 告警类型回调
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 * @params bizName {string}
 */
type AlertTypeCallbackCommonType = {
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
    bizName?: string;
};

/**
 * 告警级别
 */
type AlertLevelInCommonType = 1 | 2 | 4 | 8;

/**
 * 告警源
 * @params instance {string} 告警源实例, 比如电话告警的号码
 * @params processorUrl {string} 处理平台 Url
 */
type AlertSourceCommonType = {
    instance?: string;
    processorUrl?: string;
};

/**
 * 告警状态
 */
type AlertStatusCommonType = 0 | 1 | 2;

/**
 * 坐标点
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 */
type CoordinateCommonType = {
    longitude?: number;
    latitude?: number;
};

/**
 * 排序类型
 */
type SortTypeCommonType = 0 | 1;

/**
 * 使用状态
 */
type UseStatusCommonType = 0 | 1 | 2;

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {AlertRecordOutCommonType[]} 记录
 */
type AlertRecordOutReqCommonType = {
    totalCount?: number;
    records?: AlertRecordOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {AlertSourceTypeOutCommonType[]} 记录
 */
type AlertSourceTypeOutReqCommonType = {
    totalCount?: number;
    records?: AlertSourceTypeOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {AlertTypeOutCommonType[]} 记录
 */
type AlertTypeOutReqCommonType = {
    totalCount?: number;
    records?: AlertTypeOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {AlertTypeTreeNodeOutCommonType[]} 记录
 */
type AlertTypeTreeNodeOutReqCommonType = {
    totalCount?: number;
    records?: AlertTypeTreeNodeOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {AlertTypeUseStatusOutCommonType[]} 记录
 */
type AlertTypeUseStatusOutReqCommonType = {
    totalCount?: number;
    records?: AlertTypeUseStatusOutCommonType[];
};

/**
 * 告警信息
 * @params name {string} 告警名称
 * @params description {string} 告警描述
 * @params typeId {string} 告警类型 Id
 * @params typeName {string} 告警类型名称
 * @params level {AlertLevelInCommonType} 告警级别
 * @params levelName {string} 告警级别名称
 * @params status {AlertStatusCommonType} 告警状态
 * @params sourceTypeId {string} 告警源类型 Id
 * @params sourceTypeName {string} 告警源类型名称
 * @params source {AlertSourceCommonType} 告警源
 * @params assetId {string} 资产 Id
 * @params assetName {string} 资产名
 * @params startTime {string} 告警产生时间
 * @params endTime {string} 告警消除时间
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params areaCode {string} 行政区域码
 * @params extension {undefined} 扩展字段(Json 字符串)
 * @params resourceId {string} 资源 Id
 */
type AlertInfoEntityInCommonType = {
    name?: string;
    description?: string;
    typeId?: string;
    typeName?: string;
    level?: AlertLevelInCommonType;
    levelName?: string;
    status?: AlertStatusCommonType;
    sourceTypeId?: string;
    sourceTypeName?: string;
    source?: AlertSourceCommonType;
    assetId?: string;
    assetName?: string;
    startTime?: string;
    endTime?: string;
    longitude?: number;
    latitude?: number;
    areaCode?: string;
    extension?: undefined;
    resourceId?: string;
};

/**
 * 高级搜索参数
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params keyword {string} 关键字
 * @params level {number} 告警等级，1-一般 | 2-较大 | 4-重大 | 8-特大
 * @params status {any[]} 告警状态，0-告警中|1-已解决|2-手动解决
 * @params platformId {string} 平台 Id
 * @params ignoreOtherPlatform {boolean} 查询结果是否忽略其他平台数据。
 * @params areaCode {string} 行政区域码
 * @params includeSubTypes {boolean} 是否包含子类型记录。true 时包含子告警类型记录，否则只查当前告警类型记录
 * @params sortType {SortTypeCommonType} 排序类型。0：默认排序，1按照未处理、 已处理排序，然后按照等级降序，最后时间降序排序
 * @params startTime {string} 开始时间（基于告警产生时间查询）
 * @params endTime {string} 结束时间（基于告警产生时间查询）
 * @params typeIds {any[]} 类型 Id
 * @params sourceTypeIds {any[]} 源类型 Id
 * @params assetIds {any[]} 资产 Id
 * @params upLeft {CoordinateCommonType} 左上角坐标
 * @params bottomRight {CoordinateCommonType} 右下角坐标
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 */
type AlertRecordAdvanceQueryRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    keyword?: string;
    level?: number;
    status?: any[];
    platformId?: string;
    ignoreOtherPlatform?: boolean;
    areaCode?: string;
    includeSubTypes?: boolean;
    sortType?: SortTypeCommonType;
    startTime?: string;
    endTime?: string;
    typeIds?: any[];
    sourceTypeIds?: any[];
    assetIds?: any[];
    upLeft?: CoordinateCommonType;
    bottomRight?: CoordinateCommonType;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
};

/**
 * 消除告警入参
 * @params resolverName {string} 消除告警人名称
 * @params resolveMessage {string} 消除告警信息
 */
type AlertRecordDeleteInCommonType = {
    resolverName?: string;
    resolveMessage?: string;
};

/**
 * 告警源类型入参
 * @params name {string} 名字
 */
type AlertSourceTypeInCommonType = {
    name?: string;
};

/**
 * 告警类型创建入参
 * @params name {string} 类型名称
 * @params description {string} 描述
 * @params parentId {string} 父类型 Id
 */
type AlertTypeInCommonType = {
    name?: string;
    description?: string;
    parentId?: string;
};

/**
 * 告警类型路径搜索
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params ids {any[]} 告警类型ID
 */
type AlertTypePathSearchRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    ids?: any[];
};

/**
 * 通过 ID 集合批量查询告警类型请求参数
 * @params ids {any[]} ID 集合
 */
type AlertTypeQueryByIdListRequestCommonType = {
    ids: any[];
};

/**
 * 告警类型选中筛选
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params parentId {string} 父级ID
 * @params selectedIds {any[]} 选择告警类型ID
 */
type AlertTypeSelectRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    parentId?: string;
    selectedIds?: any[];
};

/**
 * 告警类型树搜索接口
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params ids {any[]} 告警类型 Id 列表
 */
type AlertTypeTreeSearchRequestCommonType = {
    pageIndex?: number;
    pageSize?: number;
    ids?: any[];
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
 * ID集合查询
 * @params ids {any[]} id集合
 */
type IdsRequestCommonType = {
    ids?: any[];
};

/**
 * 告警类型ID
 * @params id {string}
 * @params name {string} 类型名称
 * @params description {string} 描述
 * @params parentId {string} 父类型 Id
 * @params path {string} id 路径
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params isDelete {boolean} 删除
 * @params resourceId {string} 资源 Id
 * @params platformId {string} 平台 Id
 */
type ImportAlertTypeInCommonType = {
    id?: string;
    name?: string;
    description?: string;
    parentId?: string;
    path?: string;
    createTime?: string;
    updateTime?: string;
    isDelete?: boolean;
    resourceId?: string;
    platformId?: string;
};

/**
 * 导入告警类型实体
 * @params alertTypes {ImportAlertTypeInCommonType[]} 告警类型
 */
type ImportAlertTypeModelCommonType = {
    alertTypes?: ImportAlertTypeInCommonType[];
};

/**
 * 告警 Webhook 入参
 * @params alerts {AlertInfoEntityInCommonType[]} 告警记录
 */
type WebhookEntityInCommonType = {
    alerts?: AlertInfoEntityInCommonType[];
};

/**
 * 告警记录返回值
 * @params id {number} Id
 * @params name {string} 告警名称
 * @params description {string} 告警描述
 * @params typeId {string} 告警类型 Id
 * @params typeName {string} 告警类型名称
 * @params typeIdPath {string} 告警类型Id 路径
 * @params typeNamePath {string} 告警类型名字路径
 * @params level {number} 告警级别
 * @params status {AlertStatusCommonType} 告警状态
 * @params resolverId {string} 告警消除人 Id
 * @params resolverName {string} 告警消除人名称
 * @params resolveMessage {string} 处置信息
 * @params sourceTypeId {string} 告警源类型 Id
 * @params sourceTypeName {string} 告警源类型名称
 * @params source {AlertSourceCommonType} 告警源
 * @params assetId {string} 资产 Id
 * @params assetName {string} 资产名
 * @params createTime {string} 服务创建记录时间
 * @params updateTime {string} 服务更新记录时间
 * @params startTime {string} 告警源的产生时间
 * @params endTime {string} 告警消除时间
 * @params resourceId {string} 资源 Id
 * @params platformId {string} 平台 Id
 * @params platformName {string} 平台名称
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params areaCode {string} 行政区域码
 * @params extension {undefined} 扩展信息
 */
type AlertRecordOutCommonType = {
    id?: number;
    name?: string;
    description?: string;
    typeId?: string;
    typeName?: string;
    typeIdPath?: string;
    typeNamePath?: string;
    level?: number;
    status?: AlertStatusCommonType;
    resolverId?: string;
    resolverName?: string;
    resolveMessage?: string;
    sourceTypeId?: string;
    sourceTypeName?: string;
    source?: AlertSourceCommonType;
    assetId?: string;
    assetName?: string;
    createTime?: string;
    updateTime?: string;
    startTime?: string;
    endTime?: string;
    resourceId?: string;
    platformId?: string;
    platformName?: string;
    longitude?: number;
    latitude?: number;
    areaCode?: string;
    extension?: undefined;
};

/**
 * 告警源类型返回实体
 * @params id {string} Id
 * @params name {string} 名称
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 */
type AlertSourceTypeOutCommonType = {
    id?: string;
    name?: string;
    createTime?: string;
    updateTime?: string;
};

/**
 * 告警类型返回对象
 * @params id {string} 唯一标识符
 * @params name {string} 类型名称
 * @params description {string} 描述
 * @params parentId {string} 父类型 Id
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params resourceId {string} 资源 Id
 * @params platformId {string} 平台 Id
 * @params idPath {string} Id 路径
 * @params namePath {string} 名字路径
 * @params isLeaf {boolean} 是否为叶子节点
 */
type AlertTypeOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
    parentId?: string;
    createTime?: string;
    updateTime?: string;
    resourceId?: string;
    platformId?: string;
    idPath?: string;
    namePath?: string;
    isLeaf?: boolean;
};

/**
 * 告警类型树节点返回类型
 * @params id {string} ID
 * @params name {string} 名称
 * @params idPath {string} Id 路径
 * @params namePath {string} 名字路径
 * @params isLeaf {boolean} 是否为叶子节点
 */
type AlertTypeTreeNodeOutCommonType = {
    id?: string;
    name?: string;
    idPath?: string;
    namePath?: string;
    isLeaf?: boolean;
};

/**
 * 告警类型选中状态返回类型
 * @params id {string} 唯一标识符
 * @params name {string} 类型名称
 * @params description {string} 描述
 * @params parentId {string} 父类型 Id
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params resourceId {string} 资源 Id
 * @params platformId {string} 平台 Id
 * @params idPath {string} Id 路径
 * @params namePath {string} 名字路径
 * @params isLeaf {boolean} 是否为叶子节点
 * @params useStatus {UseStatusCommonType} 使用状态
 */
type AlertTypeUseStatusOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
    parentId?: string;
    createTime?: string;
    updateTime?: string;
    resourceId?: string;
    platformId?: string;
    idPath?: string;
    namePath?: string;
    isLeaf?: boolean;
    useStatus?: UseStatusCommonType;
};

/**
 * 导出告警类型
 * @params alertTypes {ExportAlertTypeOutCommonType[]} 告警类型
 */
type ExportAlertTypeModelCommonType = {
    alertTypes?: ExportAlertTypeOutCommonType[];
};

/**
 * 告警类型导出实体
 * @params id {string}
 * @params name {string} 类型名称
 * @params description {string} 描述
 * @params parentId {string} 父类型 Id
 * @params path {string} id 路径
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params isDelete {boolean} 删除
 * @params resourceId {string} 资源 Id
 * @params platformId {string} 平台 Id
 */
type ExportAlertTypeOutCommonType = {
    id?: string;
    name?: string;
    description?: string;
    parentId?: string;
    path?: string;
    createTime?: string;
    updateTime?: string;
    isDelete?: boolean;
    resourceId?: string;
    platformId?: string;
};

/**
 * undefined
 */
type EntityOperationCommonType = 0 | 1 | 2;

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

----

/**
 * 查询告警——请求参数类型定义
 * @params TypeId {string} 告警类型 Id
 * @params SourceTypeId {string} 告警源类型 Id
 * @params StartTime {string} 开始时间（基于告警产生时间查询） （必填）
 * @params EndTime {string} 结束时间（基于告警产生时间查询） （必填）
 * @params Keyword {string} 关键字
 * @params Level {number} 告警等级，1-一般 | 2-较大 | 4-重大 | 8-特大
 * @params Status {any[]} 告警状态，0-告警中|1-已解决|2-手动解决
 * @params PlatformId {string} 平台 Id
 * @params IgnoreOtherPlatform {boolean} 查询结果是否忽略其他平台数据。
 * @params AreaCode {string} 行政区域码
 * @params IncludeSubTypes {boolean} 是否包含子类型记录。true 时包含子告警类型记录，否则只查当前告警类型记录
 * @params SortType {number} 排序类型。0：默认排序，1按照未处理、 已处理排序，然后按照等级降序，最后时间降序排序
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetAlertRecordsReqType = {
    TypeId?: string;
    SourceTypeId?: string;
    StartTime: string;
    EndTime: string;
    Keyword?: string;
    Level?: number;
    Status?: any[];
    PlatformId?: string;
    IgnoreOtherPlatform?: boolean;
    AreaCode?: string;
    IncludeSubTypes?: boolean;
    SortType?: number;
    page?: number;
    per_page?: number;
};

/**
 * 查询告警——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AlertRecordOutCommonType[]} 记录
 */
export type GetAlertRecordsResType = {
    totalCount: number;
    records: AlertRecordOutCommonType[];
};

/**
 * 创建告警记录——请求参数类型定义
 * @params name {string} 告警名称
 * @params description {string} 告警描述
 * @params typeId {string} 告警类型 Id
 * @params typeName {string} 告警类型名称
 * @params level {AlertLevelInCommonType} 告警级别
 * @params levelName {string} 告警级别名称
 * @params status {AlertStatusCommonType} 告警状态
 * @params sourceTypeId {string} 告警源类型 Id
 * @params sourceTypeName {string} 告警源类型名称
 * @params source {AlertSourceCommonType} 告警源
 * @params assetId {string} 资产 Id
 * @params assetName {string} 资产名
 * @params startTime {string} 告警产生时间
 * @params endTime {string} 告警消除时间
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params areaCode {string} 行政区域码
 * @params extension {undefined} 扩展字段(Json 字符串)
 * @params resourceId {string} 资源 Id
 */
export type AddAlertRecordReqType = {
    name?: string;
    description?: string;
    typeId?: string;
    typeName?: string;
    level?: AlertLevelInCommonType;
    levelName?: string;
    status?: AlertStatusCommonType;
    sourceTypeId?: string;
    sourceTypeName?: string;
    source?: AlertSourceCommonType;
    assetId?: string;
    assetName?: string;
    startTime?: string;
    endTime?: string;
    longitude?: number;
    latitude?: number;
    areaCode?: string;
    extension?: undefined;
    resourceId?: string;
};

/**
 * 创建告警记录——响应参数类型定义
 * @params id {number} Id
 * @params name {string} 告警名称
 * @params description {string} 告警描述
 * @params typeId {string} 告警类型 Id
 * @params typeName {string} 告警类型名称
 * @params typeIdPath {string} 告警类型Id 路径
 * @params typeNamePath {string} 告警类型名字路径
 * @params level {number} 告警级别
 * @params status {AlertStatusCommonType} 告警状态
 * @params resolverId {string} 告警消除人 Id
 * @params resolverName {string} 告警消除人名称
 * @params resolveMessage {string} 处置信息
 * @params sourceTypeId {string} 告警源类型 Id
 * @params sourceTypeName {string} 告警源类型名称
 * @params source {AlertSourceCommonType} 告警源
 * @params assetId {string} 资产 Id
 * @params assetName {string} 资产名
 * @params createTime {string} 服务创建记录时间
 * @params updateTime {string} 服务更新记录时间
 * @params startTime {string} 告警源的产生时间
 * @params endTime {string} 告警消除时间
 * @params resourceId {string} 资源 Id
 * @params platformId {string} 平台 Id
 * @params platformName {string} 平台名称
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params areaCode {string} 行政区域码
 * @params extension {undefined} 扩展信息
 */
export type AddAlertRecordResType = {
    id: number;
    name: string;
    description: string;
    typeId: string;
    typeName: string;
    typeIdPath: string;
    typeNamePath: string;
    level: number;
    status: AlertStatusCommonType;
    resolverId: string;
    resolverName: string;
    resolveMessage: string;
    sourceTypeId: string;
    sourceTypeName: string;
    source: AlertSourceCommonType;
    assetId: string;
    assetName: string;
    createTime: string;
    updateTime: string;
    startTime: string;
    endTime: string;
    resourceId: string;
    platformId: string;
    platformName: string;
    longitude: number;
    latitude: number;
    areaCode: string;
    extension: undefined;
};

/**
 * 高级搜索接口——请求参数类型定义
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params keyword {string} 关键字
 * @params level {number} 告警等级，1-一般 | 2-较大 | 4-重大 | 8-特大
 * @params status {any[]} 告警状态，0-告警中|1-已解决|2-手动解决
 * @params platformId {string} 平台 Id
 * @params ignoreOtherPlatform {boolean} 查询结果是否忽略其他平台数据。
 * @params areaCode {string} 行政区域码
 * @params includeSubTypes {boolean} 是否包含子类型记录。true 时包含子告警类型记录，否则只查当前告警类型记录
 * @params sortType {SortTypeCommonType} 排序类型。0：默认排序，1按照未处理、 已处理排序，然后按照等级降序，最后时间降序排序
 * @params startTime {string} 开始时间（基于告警产生时间查询）
 * @params endTime {string} 结束时间（基于告警产生时间查询）
 * @params typeIds {any[]} 类型 Id
 * @params sourceTypeIds {any[]} 源类型 Id
 * @params assetIds {any[]} 资产 Id
 * @params upLeft {CoordinateCommonType} 左上角坐标
 * @params bottomRight {CoordinateCommonType} 右下角坐标
 * @params prefixAreaCodes {any[]} 行政区域前缀
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码
 */
export type SearchAlertRecordsReqType = {
    pageIndex?: number;
    pageSize?: number;
    keyword?: string;
    level?: number;
    status?: any[];
    platformId?: string;
    ignoreOtherPlatform?: boolean;
    areaCode?: string;
    includeSubTypes?: boolean;
    sortType?: SortTypeCommonType;
    startTime?: string;
    endTime?: string;
    typeIds?: any[];
    sourceTypeIds?: any[];
    assetIds?: any[];
    upLeft?: CoordinateCommonType;
    bottomRight?: CoordinateCommonType;
    prefixAreaCodes?: any[];
    isMatchNullAreaCode?: boolean;
};

/**
 * 高级搜索接口——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AlertRecordOutCommonType[]} 记录
 */
export type SearchAlertRecordsResType = {
    totalCount: number;
    records: AlertRecordOutCommonType[];
};

/**
 * 根据 id 获取告警详情——请求参数类型定义
 * @params id {number} id （必填）
 */
export type GetAlertRecordByIdReqType = {
    id: number;
};

/**
 * 根据 id 获取告警详情——响应参数类型定义
 * @params id {number} Id
 * @params name {string} 告警名称
 * @params description {string} 告警描述
 * @params typeId {string} 告警类型 Id
 * @params typeName {string} 告警类型名称
 * @params typeIdPath {string} 告警类型Id 路径
 * @params typeNamePath {string} 告警类型名字路径
 * @params level {number} 告警级别
 * @params status {AlertStatusCommonType} 告警状态
 * @params resolverId {string} 告警消除人 Id
 * @params resolverName {string} 告警消除人名称
 * @params resolveMessage {string} 处置信息
 * @params sourceTypeId {string} 告警源类型 Id
 * @params sourceTypeName {string} 告警源类型名称
 * @params source {AlertSourceCommonType} 告警源
 * @params assetId {string} 资产 Id
 * @params assetName {string} 资产名
 * @params createTime {string} 服务创建记录时间
 * @params updateTime {string} 服务更新记录时间
 * @params startTime {string} 告警源的产生时间
 * @params endTime {string} 告警消除时间
 * @params resourceId {string} 资源 Id
 * @params platformId {string} 平台 Id
 * @params platformName {string} 平台名称
 * @params longitude {number} 经度
 * @params latitude {number} 纬度
 * @params areaCode {string} 行政区域码
 * @params extension {undefined} 扩展信息
 */
export type GetAlertRecordByIdResType = {
    id: number;
    name: string;
    description: string;
    typeId: string;
    typeName: string;
    typeIdPath: string;
    typeNamePath: string;
    level: number;
    status: AlertStatusCommonType;
    resolverId: string;
    resolverName: string;
    resolveMessage: string;
    sourceTypeId: string;
    sourceTypeName: string;
    source: AlertSourceCommonType;
    assetId: string;
    assetName: string;
    createTime: string;
    updateTime: string;
    startTime: string;
    endTime: string;
    resourceId: string;
    platformId: string;
    platformName: string;
    longitude: number;
    latitude: number;
    areaCode: string;
    extension: undefined;
};

/**
 * 告警消除——请求参数类型定义
 * @params id {number} id （必填）
 * @params resolverName {string} 消除告警人名称
 * @params resolveMessage {string} 消除告警信息
 */
export type CancelAlertRecordReqType = {
    id: number;
    resolverName?: string;
    resolveMessage?: string;
};

/**
 * 运维所有告警记录行政区划（历史数据补全运维接口）——请求参数类型定义
 * @params defaultAreaCode {string} 默认行政区域，在匹配不到行政区域时以该行政区域为主
 * @params isOnlyQueryAreaCodeEmpty {boolean} 是否只运维行政区域为空的数据
 */
export type OperationAlertRecordsAreacodeReqType = {
    defaultAreaCode?: string;
    isOnlyQueryAreaCodeEmpty?: boolean;
};

/**
 * 查询告警源类型——请求参数类型定义
 * @params Keyword {string} 关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetAlertSourceTypesReqType = {
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * 查询告警源类型——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AlertSourceTypeOutCommonType[]} 记录
 */
export type GetAlertSourceTypesResType = {
    totalCount: number;
    records: AlertSourceTypeOutCommonType[];
};

/**
 * 通过 id 获取告警源类型——请求参数类型定义
 * @params id {string} id （必填）
 */
export type GetAlertSourceTypeByIdReqType = {
    id: string;
};

/**
 * 通过 id 获取告警源类型——响应参数类型定义
 * @params id {string} Id
 * @params name {string} 名称
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 */
export type GetAlertSourceTypeByIdResType = {
    id: string;
    name: string;
    createTime: string;
    updateTime: string;
};

/**
 * 更新告警源类型——请求参数类型定义
 * @params id {string} id （必填）
 * @params name {string} 名字
 */
export type UpdateAlertSourceTypeReqType = {
    id: string;
    name?: string;
};

/**
 * 查询告警类型——请求参数类型定义
 * @params Keyword {string} 关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetAlertTypesReqType = {
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * 查询告警类型——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AlertTypeOutCommonType[]} 记录
 */
export type GetAlertTypesResType = {
    totalCount: number;
    records: AlertTypeOutCommonType[];
};

/**
 * 创建告警类型——请求参数类型定义
 * @params name {string} 类型名称
 * @params description {string} 描述
 * @params parentId {string} 父类型 Id
 */
export type AddAlertTypeReqType = {
    name?: string;
    description?: string;
    parentId?: string;
};

/**
 * 创建告警类型——响应参数类型定义
 * @params id {string} 唯一标识符
 * @params name {string} 类型名称
 * @params description {string} 描述
 * @params parentId {string} 父类型 Id
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params resourceId {string} 资源 Id
 * @params platformId {string} 平台 Id
 * @params idPath {string} Id 路径
 * @params namePath {string} 名字路径
 * @params isLeaf {boolean} 是否为叶子节点
 */
export type AddAlertTypeResType = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    createTime: string;
    updateTime: string;
    resourceId: string;
    platformId: string;
    idPath: string;
    namePath: string;
    isLeaf: boolean;
};

/**
 * 获取根告警类型——请求参数类型定义
 * @params Keyword {string} 关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetRootAlertTypesReqType = {
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * 获取根告警类型——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AlertTypeOutCommonType[]} 记录
 */
export type GetRootAlertTypesResType = {
    totalCount: number;
    records: AlertTypeOutCommonType[];
};

/**
 * 获取子告警类型——请求参数类型定义
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 */
export type GetChildAlertTypesReqType = {
    id: string;
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * 获取子告警类型——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AlertTypeOutCommonType[]} 记录
 */
export type GetChildAlertTypesResType = {
    totalCount: number;
    records: AlertTypeOutCommonType[];
};

/**
 * 通过 ID 集合批量获取告警类型——请求参数类型定义
 * @params ids {any[]} ID 集合 （必填）
 */
export type GetAlertTypeInfoByIdsReqType = {
    ids: any[];
};

/**
 * 通过 ID 集合批量获取告警类型——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AlertTypeOutCommonType[]} 记录
 */
export type GetAlertTypeInfoByIdsResType = {
    totalCount: number;
    records: AlertTypeOutCommonType[];
};

/**
 * 根据类型 Id 获取告警类型——请求参数类型定义
 * @params id {string} id （必填）
 */
export type GetAlertTypeByIdReqType = {
    id: string;
};

/**
 * 根据类型 Id 获取告警类型——响应参数类型定义
 * @params id {string} 唯一标识符
 * @params name {string} 类型名称
 * @params description {string} 描述
 * @params parentId {string} 父类型 Id
 * @params createTime {string} 创建时间
 * @params updateTime {string} 更新时间
 * @params resourceId {string} 资源 Id
 * @params platformId {string} 平台 Id
 * @params idPath {string} Id 路径
 * @params namePath {string} 名字路径
 * @params isLeaf {boolean} 是否为叶子节点
 */
export type GetAlertTypeByIdResType = {
    id: string;
    name: string;
    description: string;
    parentId: string;
    createTime: string;
    updateTime: string;
    resourceId: string;
    platformId: string;
    idPath: string;
    namePath: string;
    isLeaf: boolean;
};

/**
 * 聚合告警类型为父级类型——请求参数类型定义
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params ids {any[]} 告警类型ID
 */
export type MergeChildAlertTypeReqType = {
    pageIndex?: number;
    pageSize?: number;
    ids?: any[];
};

/**
 * 聚合告警类型为父级类型——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AlertTypeTreeNodeOutCommonType[]} 记录
 */
export type MergeChildAlertTypeResType = {
    totalCount: number;
    records: AlertTypeTreeNodeOutCommonType[];
};

/**
 * 批量获取所有子告警类型接口（包含子孙级告警类型）——请求参数类型定义
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params ids {any[]} 告警类型 Id 列表
 */
export type GetSubordinateAlertTypesReqType = {
    pageIndex?: number;
    pageSize?: number;
    ids?: any[];
};

/**
 * 批量获取所有子告警类型接口（包含子孙级告警类型）——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AlertTypeOutCommonType[]} 记录
 */
export type GetSubordinateAlertTypesResType = {
    totalCount: number;
    records: AlertTypeOutCommonType[];
};

/**
 * 查询子告警类型（父级Id不传默认查父级）——请求参数类型定义
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params parentId {string} 父级ID
 * @params selectedIds {any[]} 选择告警类型ID
 */
export type SearchSubAlertTypesReqType = {
    pageIndex?: number;
    pageSize?: number;
    parentId?: string;
    selectedIds?: any[];
};

/**
 * 查询子告警类型（父级Id不传默认查父级）——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {AlertTypeUseStatusOutCommonType[]} 记录
 */
export type SearchSubAlertTypesResType = {
    totalCount: number;
    records: AlertTypeUseStatusOutCommonType[];
};

/**
 * 导出告警类型——请求参数类型定义
 * @params ids {any[]} id集合
 */
export type ExportAlertTypesReqType = {
    ids?: any[];
};

/**
 * 导出告警类型——响应参数类型定义
 * @params alertTypes {ExportAlertTypeOutCommonType[]} 告警类型
 */
export type ExportAlertTypesResType = {
    alertTypes: ExportAlertTypeOutCommonType[];
};

/**
 * 导入接口(导入后会重新刷新缓存)——请求参数类型定义
 * @params alertTypes {ImportAlertTypeInCommonType[]} 告警类型
 */
export type ImportAlertTypesReqType = {
    alertTypes?: ImportAlertTypeInCommonType[];
};

/**
 * Webhook 接口——请求参数类型定义
 * @params alerts {AlertInfoEntityInCommonType[]} 告警记录
 */
export type WebHooksReqType = {
    alerts?: AlertInfoEntityInCommonType[];
};
