/**
 * <br/>
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

/**
 * 实体回调基类
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 * @params bizName {string}
 * @params layoutType {number} 布局类型
 */
type ThemeCallbackCommonType = {
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
    bizName?: string;
    layoutType?: number;
};

/**
 * 专题发布回调
 * @params id {string} 实体Id
 * @params name {string} 实体名称
 * @params operation {EntityOperationCommonType} 实体操作
 * @params bizName {string}
 * @params layoutType {number} 布局类型
 */
type ThemePublishCallbackCommonType = {
    id?: string;
    name?: string;
    operation?: EntityOperationCommonType;
    bizName?: string;
    layoutType?: number;
};

/**
 * 项目导出实体
 * @params id {string} id
 * @params name {string} 项目名称
 * @params title {string} 项目标题
 * @params productId {string} 产品ID
 * @params uiStyle {UIStyleCommonType} 界面风格：0政务蓝，1企业蓝，2能源绿
 * @params mapType {MapTypeCommonType} 地图类型：0平铺，1窗口，2无地图
 * @params layoutType {ProjectLayoutTypeCommonType} 布局类型：0自适应布局，1固定布局
 * @params screenWidth {number} 屏幕宽度
 * @params columnWidth {number} 单列宽度
 * @params leftColumnCount {number} 左侧面板列数
 * @params leftRowCount {number} 左侧面板行数
 * @params rightColumnCount {number} 右侧面板列数
 * @params rightRowCount {number} 右侧面板行数
 * @params isPanelCollapsible {boolean} 是否支持面板收起
 * @params isPanelPaginated {boolean} 是否支持面板翻页
 * @params isMobileLayoutSupported {boolean} 是否支持移动端布局
 * @params mobileLayoutRowCount {number} 移动端布局行数
 * @params componentBackgroundType {ComponentBackgroundTypeCommonType} 组件背景类型：0模块背景，1单列背景
 * @params extension {string} 扩展字段
 * @params createTime {string} 创建时间
 */
type ProjectExportCommonType = {
    id?: string;
    name?: string;
    title?: string;
    productId?: string;
    uiStyle?: UIStyleCommonType;
    mapType?: MapTypeCommonType;
    layoutType?: ProjectLayoutTypeCommonType;
    screenWidth?: number;
    columnWidth?: number;
    leftColumnCount?: number;
    leftRowCount?: number;
    rightColumnCount?: number;
    rightRowCount?: number;
    isPanelCollapsible?: boolean;
    isPanelPaginated?: boolean;
    isMobileLayoutSupported?: boolean;
    mobileLayoutRowCount?: number;
    componentBackgroundType?: ComponentBackgroundTypeCommonType;
    extension?: string;
    createTime?: string;
};

/**
 * 组件背景类型<br/>
0:Module,模块背景; <br/>
1:Column,单列背景; <br/>
2:Gradation,渐变背景; 
*/
type ComponentBackgroundTypeCommonType = 0 | 1 | 2;

/**
 * 组件类型<br/>
0:Header,头部组件; <br/>
1:Side,侧边组件; <br/>
2:Central,中部组件; <br/>
3:Other,其他组件; 
*/
type ComponentTypeCommonType = 0 | 1 | 2 | 3;

/**
 * 标签类型<br/>
0:Domain,领域标签; <br/>
1:Project,项目标签; <br/>
2:Business,业务标签; 
*/
type LabelTypeCommonType = 0 | 1 | 2;

/**
 * 地图类型：0平铺，1窗口，2无地图<br/>
0:Tiled,平铺; <br/>
1:Windowed,窗口; <br/>
2:None,无地图; 
*/
type MapTypeCommonType = 0 | 1 | 2;

/**
 * 布局类型：0自适应布局，1固定布局<br/>
0:Adaptive,自适应布局; <br/>
1:Fixed,固定布局; 
*/
type ProjectLayoutTypeCommonType = 0 | 1;

/**
 * 界面风格：0政务蓝，1企业蓝，2能源绿<br/>
0:PoliticsBlue,政务蓝; <br/>
1:EnterpriseBlue,企业蓝; <br/>
2:EnergyGreen,能源绿; 
*/
type UIStyleCommonType = 0 | 1 | 2;

/**
 * 组件BaseIn
 * @params type {ComponentTypeCommonType} 组件类型
 * @params labelIds {any[]} 标签ID集合
 * @params supportPlatform {number} 适配平台（1PC，2iPad，4手机端）（多选，位运算）
 * @params supportSize {SupportSizeCommonType[]} 适配尺寸
 * @params thumbnail {string} 缩略图 (base64)
 * @params configData {undefined} 组件配置内容
 */
type ComponentBaseInCommonType = {
    type?: ComponentTypeCommonType;
    labelIds?: any[];
    supportPlatform: number;
    supportSize: SupportSizeCommonType[];
    thumbnail?: string;
    configData: undefined;
};

/**
 * 组件In
 * @params type {ComponentTypeCommonType} 组件类型
 * @params labelIds {any[]} 标签ID集合
 * @params supportPlatform {number} 适配平台（1PC，2iPad，4手机端）（多选，位运算）
 * @params supportSize {SupportSizeCommonType[]} 适配尺寸
 * @params thumbnail {string} 缩略图 (base64)
 * @params configData {undefined} 组件配置内容
 * @params name {string} 组件名称
 */
type ComponentInCommonType = {
    type?: ComponentTypeCommonType;
    labelIds?: any[];
    supportPlatform: number;
    supportSize: SupportSizeCommonType[];
    thumbnail?: string;
    configData: undefined;
    name: string;
};

/**
 * 标签搜索
 * @params type {LabelTypeCommonType} 标签类型
 * @params text {any[]} 标签内容
 */
type ComponentLabelCommonType = {
    type?: LabelTypeCommonType;
    text?: any[];
};

/**
 * 组件缩略图In
 * @params thumbnail {string} 缩略图 (base64)
 */
type ComponentThumbnailInCommonType = {
    thumbnail?: string;
};

/**
 * 标签
 * @params type {LabelTypeCommonType} 标签类型
 * @params text {string} 标签内容
 */
type LabelInCommonType = {
    type?: LabelTypeCommonType;
    text: string;
};

/**
 *
 * @params beforeThemeId {string} 移入位置前面的专题id
 * @params afterThemeId {string} 移入位置后面的专题id
 */
type MovePositionInCommonType = {
    beforeThemeId?: string;
    afterThemeId?: string;
};

/**
 * 项目基础入参
 * @params name {string} 项目名称
 * @params title {string} 项目标题
 * @params uiStyle {UIStyleCommonType} 界面风格：0政务蓝，1企业蓝，2能源绿，不传默认政务蓝
 * @params mapType {MapTypeCommonType} 地图类型：0平铺，1窗口，2无地图，不传默认平铺
 * @params layoutType {ProjectLayoutTypeCommonType} 布局类型：0自适应布局，1固定布局，不传默认自适应布局
 * @params screenWidth {number} 屏幕宽度
 * @params columnWidth {number} 单列宽度
 * @params leftColumnCount {number} 左侧面板列数
 * @params leftRowCount {number} 左侧面板行数
 * @params rightColumnCount {number} 右侧面板列数
 * @params rightRowCount {number} 右侧面板行数
 * @params isPanelCollapsible {boolean} 是否支持面板收起，默认不支持
 * @params isPanelPaginated {boolean} 是否支持面板翻页，默认不支持
 * @params isMobileLayoutSupported {boolean} 是否支持移动端布局，默认不支持
 * @params mobileLayoutRowCount {number} 移动端布局行数
 * @params componentBackgroundType {ComponentBackgroundTypeCommonType} 组件背景类型：0模块背景，1单列背景，不传默认模块背景
 * @params extension {undefined} 扩展字段
 */
type ProjectBaseInCommonType = {
    name: string;
    title: string;
    uiStyle?: UIStyleCommonType;
    mapType?: MapTypeCommonType;
    layoutType?: ProjectLayoutTypeCommonType;
    screenWidth?: number;
    columnWidth?: number;
    leftColumnCount?: number;
    leftRowCount?: number;
    rightColumnCount?: number;
    rightRowCount?: number;
    isPanelCollapsible?: boolean;
    isPanelPaginated?: boolean;
    isMobileLayoutSupported?: boolean;
    mobileLayoutRowCount?: number;
    componentBackgroundType?: ComponentBackgroundTypeCommonType;
    extension?: undefined;
};

/**
 * 新增项目入参
 * @params name {string} 项目名称
 * @params title {string} 项目标题
 * @params uiStyle {UIStyleCommonType} 界面风格：0政务蓝，1企业蓝，2能源绿，不传默认政务蓝
 * @params mapType {MapTypeCommonType} 地图类型：0平铺，1窗口，2无地图，不传默认平铺
 * @params layoutType {ProjectLayoutTypeCommonType} 布局类型：0自适应布局，1固定布局，不传默认自适应布局
 * @params screenWidth {number} 屏幕宽度
 * @params columnWidth {number} 单列宽度
 * @params leftColumnCount {number} 左侧面板列数
 * @params leftRowCount {number} 左侧面板行数
 * @params rightColumnCount {number} 右侧面板列数
 * @params rightRowCount {number} 右侧面板行数
 * @params isPanelCollapsible {boolean} 是否支持面板收起，默认不支持
 * @params isPanelPaginated {boolean} 是否支持面板翻页，默认不支持
 * @params isMobileLayoutSupported {boolean} 是否支持移动端布局，默认不支持
 * @params mobileLayoutRowCount {number} 移动端布局行数
 * @params componentBackgroundType {ComponentBackgroundTypeCommonType} 组件背景类型：0模块背景，1单列背景，不传默认模块背景
 * @params extension {undefined} 扩展字段
 * @params productId {string} 产品ID
 */
type ProjectInCommonType = {
    name: string;
    title: string;
    uiStyle?: UIStyleCommonType;
    mapType?: MapTypeCommonType;
    layoutType?: ProjectLayoutTypeCommonType;
    screenWidth?: number;
    columnWidth?: number;
    leftColumnCount?: number;
    leftRowCount?: number;
    rightColumnCount?: number;
    rightRowCount?: number;
    isPanelCollapsible?: boolean;
    isPanelPaginated?: boolean;
    isMobileLayoutSupported?: boolean;
    mobileLayoutRowCount?: number;
    componentBackgroundType?: ComponentBackgroundTypeCommonType;
    extension?: undefined;
    productId: string;
};

/**
 * 选择标签In
 * @params labelId {string} 标签Id
 * @params isSelected {boolean} 是否选中
 */
type SelectLabelInCommonType = {
    labelId?: string;
    isSelected?: boolean;
};

/**
 * 支持大小
 * @params row {number} 行
 * @params column {number} 列
 */
type SupportSizeCommonType = {
    row?: number;
    column?: number;
};

/**
 * 新增布局拓展
 * @params configData {undefined} 组件配置内容
 * @params layoutType {number} 布局类型
 */
type ThemeConfigExInCommonType = {
    configData: undefined;
    layoutType?: number;
};

/**
 * 专题In
 * @params configData {undefined} 组件配置内容
 */
type ThemeConfigInCommonType = {
    configData: undefined;
};

/**
 * 专题显示隐藏In
 * @params isHidden {boolean} 是否隐藏
 */
type ThemeHideInCommonType = {
    isHidden?: boolean;
};

/**
 * 专题In
 * @params name {string} 专题名称
 * @params label {any[]} 标签
 * @params relateThemeId {string} 关联DCS专题ID
 * @params themeConfigs {ThemeConfigExInCommonType[]} 可选，同时支持设置布局
 * @params projectId {string} 项目Id
 */
type ThemeInCommonType = {
    name: string;
    label?: any[];
    relateThemeId: string;
    themeConfigs?: ThemeConfigExInCommonType[];
    projectId: string;
};

/**
 * 专题更新
 * @params name {string} 专题名称
 * @params label {any[]} 标签
 */
type ThemeUpdateInCommonType = {
    name: string;
    label?: any[];
};

/**
 * 组件缩略图搜索
 * @params componentNames {any[]} 组件名称集合
 */
type ThumbnailSearchInCommonType = {
    componentNames?: any[];
};

/**
 * 组件基础输出（不包含缩略图）
 * @params name {string} 组件名称
 * @params type {ComponentTypeCommonType} 组件类型
 * @params labels {LabelOutCommonType[]} 标签
 * @params supportPlatform {number} 适配平台（1PC，2iPad，4手机端）（多选，位运算）
 * @params supportSize {SupportSizeCommonType[]} 适配尺寸
 * @params configData {undefined} 组件配置内容
 * @params createTime {string} 创建时间
 */
type ComponentBaseOutCommonType = {
    name?: string;
    type?: ComponentTypeCommonType;
    labels?: LabelOutCommonType[];
    supportPlatform?: number;
    supportSize?: SupportSizeCommonType[];
    configData?: undefined;
    createTime?: string;
};

/**
 * 组件Out
 * @params name {string} 组件名称
 * @params type {ComponentTypeCommonType} 组件类型
 * @params labels {LabelOutCommonType[]} 标签
 * @params supportPlatform {number} 适配平台（1PC，2iPad，4手机端）（多选，位运算）
 * @params supportSize {SupportSizeCommonType[]} 适配尺寸
 * @params configData {undefined} 组件配置内容
 * @params createTime {string} 创建时间
 * @params thumbnail {string} 缩略图 (base64)
 */
type ComponentOutCommonType = {
    name?: string;
    type?: ComponentTypeCommonType;
    labels?: LabelOutCommonType[];
    supportPlatform?: number;
    supportSize?: SupportSizeCommonType[];
    configData?: undefined;
    createTime?: string;
    thumbnail?: string;
};

/**
 * 组件缩略图
 * @params componentName {string} 组件名
 * @params thumbnail {string} 组件缩略图
 */
type ComponentThumbnailOutCommonType = {
    componentName?: string;
    thumbnail?: string;
};

/**
 * 标签
 * @params id {string} 标签ID
 * @params type {LabelTypeCommonType} 标签类型
 * @params text {string} 标签内容
 * @params relateProjectId {string} 关联项目ID
 * @params createTime {string} 创建时间
 */
type LabelOutCommonType = {
    id?: string;
    type?: LabelTypeCommonType;
    text?: string;
    relateProjectId?: string;
    createTime?: string;
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ComponentBaseOutCommonType[]} 记录
 */
type ComponentBaseOutReqCommonType = {
    totalCount?: number;
    records?: ComponentBaseOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ComponentThumbnailOutCommonType[]} 记录
 */
type ComponentThumbnailOutReqCommonType = {
    totalCount?: number;
    records?: ComponentThumbnailOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ProjectOutCommonType[]} 记录
 */
type ProjectOutReqCommonType = {
    totalCount?: number;
    records?: ProjectOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {SearchLabelOutCommonType[]} 记录
 */
type SearchLabelOutReqCommonType = {
    totalCount?: number;
    records?: SearchLabelOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ThemeOutCommonType[]} 记录
 */
type ThemeOutReqCommonType = {
    totalCount?: number;
    records?: ThemeOutCommonType[];
};

/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ThemePublishOutCommonType[]} 记录
 */
type ThemePublishOutReqCommonType = {
    totalCount?: number;
    records?: ThemePublishOutCommonType[];
};

/**
 * 项目出参
 * @params id {string} 项目名称
 * @params name {string} 项目名称
 * @params title {string} 项目标题
 * @params productId {string} 产品ID
 * @params uiStyle {UIStyleCommonType} 界面风格：0政务蓝，1企业蓝，2能源绿
 * @params mapType {MapTypeCommonType} 地图类型：0平铺，1窗口，2无地图
 * @params layoutType {ProjectLayoutTypeCommonType} 布局类型：0自适应布局，1固定布局
 * @params screenWidth {number} 屏幕宽度
 * @params columnWidth {number} 单列宽度
 * @params leftColumnCount {number} 左侧面板列数
 * @params leftRowCount {number} 左侧面板行数
 * @params rightColumnCount {number} 右侧面板列数
 * @params rightRowCount {number} 右侧面板行数
 * @params isPanelCollapsible {boolean} 是否支持面板收起
 * @params isPanelPaginated {boolean} 是否支持面板翻页
 * @params isMobileLayoutSupported {boolean} 是否支持移动端布局
 * @params mobileLayoutRowCount {number} 移动端布局行数
 * @params componentBackgroundType {ComponentBackgroundTypeCommonType} 组件背景类型：0模块背景，1单列背景
 * @params extension {undefined} 扩展字段
 * @params themes {ThemeOutCommonType[]} 专题集合
 */
type ProjectOutCommonType = {
    id?: string;
    name?: string;
    title?: string;
    productId?: string;
    uiStyle?: UIStyleCommonType;
    mapType?: MapTypeCommonType;
    layoutType?: ProjectLayoutTypeCommonType;
    screenWidth?: number;
    columnWidth?: number;
    leftColumnCount?: number;
    leftRowCount?: number;
    rightColumnCount?: number;
    rightRowCount?: number;
    isPanelCollapsible?: boolean;
    isPanelPaginated?: boolean;
    isMobileLayoutSupported?: boolean;
    mobileLayoutRowCount?: number;
    componentBackgroundType?: ComponentBackgroundTypeCommonType;
    extension?: undefined;
    themes?: ThemeOutCommonType[];
};

/**
 * 搜索标签
 * @params id {string} 标签ID
 * @params type {LabelTypeCommonType} 标签类型
 * @params text {string} 标签内容
 * @params relateProjectId {string} 关联项目ID
 * @params createTime {string} 创建时间
 * @params useCount {number} 使用数量
 */
type SearchLabelOutCommonType = {
    id?: string;
    type?: LabelTypeCommonType;
    text?: string;
    relateProjectId?: string;
    createTime?: string;
    useCount?: number;
};

/**
 * 专题配置详情
 * @params isPublish {boolean} 是否发布
 * @params isHidden {boolean} 是否隐藏
 * @params layoutType {number} 布局类型
 * @params configData {undefined} 组件配置内容
 * @params themeId {string} 专题ID
 * @params name {string} 专题名称
 */
type ThemeConfigDetailOutCommonType = {
    isPublish?: boolean;
    isHidden?: boolean;
    layoutType?: number;
    configData?: undefined;
    themeId?: string;
    name?: string;
};

/**
 * 专题布局Out
 * @params isPublish {boolean} 是否发布
 * @params isHidden {boolean} 是否隐藏
 * @params layoutType {number} 布局类型
 * @params configData {undefined} 组件配置内容
 */
type ThemeConfigOutCommonType = {
    isPublish?: boolean;
    isHidden?: boolean;
    layoutType?: number;
    configData?: undefined;
};

/**
 * 专题
 * @params themeId {string} 专题ID
 * @params name {string} 专题名称
 * @params projectId {string} 项目Id
 * @params relateThemeId {string} 关联DCS专题ID
 * @params label {any[]} 标签
 * @params themeConfigOuts {ThemeConfigOutCommonType[]} 专题
 */
type ThemeOutCommonType = {
    themeId?: string;
    name?: string;
    projectId?: string;
    relateThemeId?: string;
    label?: any[];
    themeConfigOuts?: ThemeConfigOutCommonType[];
};

/**
 * 专题发布历史Out
 * @params id {string} 发布ID
 * @params isValid {boolean} 是否有效
 * @params publisher {string} 发布者
 * @params publisherHeaderImg {string} 发布者头像
 * @params publisherPhotoPath {string} 发布者头像路径
 * @params publishTime {string} 发布时间
 * @params label {any[]} 标签
 * @params configData {undefined} 配置内容
 */
type ThemePublishOutCommonType = {
    id?: string;
    isValid?: boolean;
    publisher?: string;
    publisherHeaderImg?: string;
    publisherPhotoPath?: string;
    publishTime?: string;
    label?: any[];
    configData?: undefined;
};

----

/**
 * 获取组件——请求参数类型定义
 * @params name {string}  （必填）
 * @params isIncludeThumbnail {boolean}
 * @headers X-version {string}
 */
export type GetComponentByNameReqType = {
    name: string;
    isIncludeThumbnail?: boolean;
    'X-version'?: string;
};

/**
 * 获取组件——响应参数类型定义
 * @params name {string} 组件名称
 * @params type {ComponentTypeCommonType} 组件类型
 * @params labels {LabelOutCommonType[]} 标签
 * @params supportPlatform {number} 适配平台（1PC，2iPad，4手机端）（多选，位运算）
 * @params supportSize {SupportSizeCommonType[]} 适配尺寸
 * @params configData {undefined} 组件配置内容
 * @params createTime {string} 创建时间
 * @params thumbnail {string} 缩略图 (base64)
 */
export type GetComponentByNameResType = {
    name: string;
    type: ComponentTypeCommonType;
    labels: LabelOutCommonType[];
    supportPlatform: number;
    supportSize: SupportSizeCommonType[];
    configData: undefined;
    createTime: string;
    thumbnail: string;
};

/**
 * 修改组件——请求参数类型定义
 * @params name {string}  （必填）
 * @headers X-version {string}
 * @params type {ComponentTypeCommonType} 组件类型
 * @params labelIds {any[]} 标签ID集合
 * @params supportPlatform {number} 适配平台（1PC，2iPad，4手机端）（多选，位运算） （必填）
 * @params supportSize {SupportSizeCommonType[]} 适配尺寸 （必填）
 * @params thumbnail {string} 缩略图 (base64)
 * @params configData {undefined} 组件配置内容 （必填）
 */
export type UpdateComponentReqType = {
    name: string;
    'X-version'?: string;
    type?: ComponentTypeCommonType;
    labelIds?: any[];
    supportPlatform: number;
    supportSize: SupportSizeCommonType[];
    thumbnail?: string;
    configData: undefined;
};

/**
 * 删除组件——请求参数类型定义
 * @params name {string}  （必填）
 * @headers X-version {string}
 */
export type DeleteComponentReqType = {
    name: string;
    'X-version'?: string;
};

/**
 * 搜索组件——请求参数类型定义
 * @params keyword {string} 关键词
 * @params type {number} 类型
 * @params supportPlatform {number} 适配平台（1PC，2iPad，4手机端）
 * @params labels {any[]} 标签，举例：[{"type":2,"text":["折线图","列表"]},{"type":0,"text":["交通运输"]}]
 * @params supportRow {number} 支持行
 * @params supportColumn {number} 支持列
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type SearchComponentsReqType = {
    keyword?: string;
    type?: number;
    supportPlatform?: number;
    labels?: any[];
    supportRow?: number;
    supportColumn?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 搜索组件——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ComponentBaseOutCommonType[]} 记录
 */
export type SearchComponentsResType = {
    totalCount: number;
    records: ComponentBaseOutCommonType[];
};

/**
 * 新增组件——请求参数类型定义
 * @headers X-version {string}
 * @params type {ComponentTypeCommonType} 组件类型
 * @params labelIds {any[]} 标签ID集合
 * @params supportPlatform {number} 适配平台（1PC，2iPad，4手机端）（多选，位运算） （必填）
 * @params supportSize {SupportSizeCommonType[]} 适配尺寸 （必填）
 * @params thumbnail {string} 缩略图 (base64)
 * @params configData {undefined} 组件配置内容 （必填）
 * @params name {string} 组件名称 （必填）
 */
export type CreateComponentReqType = {
    'X-version'?: string;
    type?: ComponentTypeCommonType;
    labelIds?: any[];
    supportPlatform: number;
    supportSize: SupportSizeCommonType[];
    thumbnail?: string;
    configData: undefined;
    name: string;
};

/**
 * 新增组件——响应参数类型定义
 * @params name {string} 组件名称
 * @params type {ComponentTypeCommonType} 组件类型
 * @params labels {LabelOutCommonType[]} 标签
 * @params supportPlatform {number} 适配平台（1PC，2iPad，4手机端）（多选，位运算）
 * @params supportSize {SupportSizeCommonType[]} 适配尺寸
 * @params configData {undefined} 组件配置内容
 * @params createTime {string} 创建时间
 * @params thumbnail {string} 缩略图 (base64)
 */
export type CreateComponentResType = {
    name: string;
    type: ComponentTypeCommonType;
    labels: LabelOutCommonType[];
    supportPlatform: number;
    supportSize: SupportSizeCommonType[];
    configData: undefined;
    createTime: string;
    thumbnail: string;
};

/**
 * 搜索组件缩略图——请求参数类型定义
 * @headers X-version {string}
 * @params componentNames {any[]} 组件名称集合
 */
export type GetComponentsPosterReqType = {
    'X-version'?: string;
    componentNames?: any[];
};

/**
 * 搜索组件缩略图——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ComponentThumbnailOutCommonType[]} 记录
 */
export type GetComponentsPosterResType = {
    totalCount: number;
    records: ComponentThumbnailOutCommonType[];
};

/**
 * 更新组件缩略图——请求参数类型定义
 * @params name {string}  （必填）
 * @headers X-version {string}
 * @params thumbnail {string} 缩略图 (base64)
 */
export type UpdateComponentsPosterReqType = {
    name: string;
    'X-version'?: string;
    thumbnail?: string;
};

/**
 * 组件选择标签——请求参数类型定义
 * @params name {string}  （必填）
 * @headers X-version {string}
 * @params labelId {string} 标签Id
 * @params isSelected {boolean} 是否选中
 */
export type EditComponentLabelReqType = {
    name: string;
    'X-version'?: string;
    labelId?: string;
    isSelected?: boolean;
};

/**
 * 导出（分页字段无效）——请求参数类型定义
 * @params keyword {string} 关键词
 * @params type {number} 类型
 * @params supportPlatform {number} 适配平台（1PC，2iPad，4手机端）
 * @params labels {any[]} 标签，举例：[{"type":2,"text":["折线图","列表"]},{"type":0,"text":["交通运输"]}]
 * @params supportRow {number} 支持行
 * @params supportColumn {number} 支持列
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type ExportComponentsReqType = {
    keyword?: string;
    type?: number;
    supportPlatform?: number;
    labels?: any[];
    supportRow?: number;
    supportColumn?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 导入——请求参数类型定义
 * @headers X-version {string}
 */
export type ImportComponentsReqType = {
    'X-version'?: string;
};

/**
 * 获取标签——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetLabelByIdReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取标签——响应参数类型定义
 * @params id {string} 标签ID
 * @params type {LabelTypeCommonType} 标签类型
 * @params text {string} 标签内容
 * @params relateProjectId {string} 关联项目ID
 * @params createTime {string} 创建时间
 */
export type GetLabelByIdResType = {
    id: string;
    type: LabelTypeCommonType;
    text: string;
    relateProjectId: string;
    createTime: string;
};

/**
 * 修改标签——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params type {LabelTypeCommonType} 标签类型
 * @params text {string} 标签内容 （必填）
 */
export type EtsEditLabelReqType = {
    id: string;
    'X-version'?: string;
    type?: LabelTypeCommonType;
    text: string;
};

/**
 * 删除标签——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type EtsDeleteLabelReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 搜索标签——请求参数类型定义
 * @params keyword {string} 关键词
 * @params type {number} 类型
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetLabelsReqType = {
    keyword?: string;
    type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 搜索标签——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {SearchLabelOutCommonType[]} 记录
 */
export type GetLabelsResType = {
    totalCount: number;
    records: SearchLabelOutCommonType[];
};

/**
 * 新增标签——请求参数类型定义
 * @headers X-version {string}
 * @params type {LabelTypeCommonType} 标签类型
 * @params text {string} 标签内容 （必填）
 */
export type ViscsAddLabelsReqType = {
    'X-version'?: string;
    type?: LabelTypeCommonType;
    text: string;
};

/**
 * 新增标签——响应参数类型定义
 * @params id {string} 标签ID
 * @params type {LabelTypeCommonType} 标签类型
 * @params text {string} 标签内容
 * @params relateProjectId {string} 关联项目ID
 * @params createTime {string} 创建时间
 */
export type ViscsAddLabelsResType = {
    id: string;
    type: LabelTypeCommonType;
    text: string;
    relateProjectId: string;
    createTime: string;
};

/**
 * 导出——请求参数类型定义
 * @headers X-version {string}
 */
export type ExportLabelsReqType = {
    'X-version'?: string;
};

/**
 * 导入——请求参数类型定义
 * @headers X-version {string}
 */
export type ViscsImportLabelsReqType = {
    'X-version'?: string;
};

/**
 * 获取项目 (isPreview:true =>未发布，isPreview:false =>已发布)——请求参数类型定义
 * @params id {string} id （必填）
 * @params isPreview {boolean}  （必填）
 * @headers X-version {string}
 */
export type GetViscsProjectByIdReqType = {
    id: string;
    isPreview: boolean;
    'X-version'?: string;
};

/**
 * 获取项目 (isPreview:true =>未发布，isPreview:false =>已发布)——响应参数类型定义
 * @params id {string} 项目名称
 * @params name {string} 项目名称
 * @params title {string} 项目标题
 * @params productId {string} 产品ID
 * @params uiStyle {UIStyleCommonType} 界面风格：0政务蓝，1企业蓝，2能源绿
 * @params mapType {MapTypeCommonType} 地图类型：0平铺，1窗口，2无地图
 * @params layoutType {ProjectLayoutTypeCommonType} 布局类型：0自适应布局，1固定布局
 * @params screenWidth {number} 屏幕宽度
 * @params columnWidth {number} 单列宽度
 * @params leftColumnCount {number} 左侧面板列数
 * @params leftRowCount {number} 左侧面板行数
 * @params rightColumnCount {number} 右侧面板列数
 * @params rightRowCount {number} 右侧面板行数
 * @params isPanelCollapsible {boolean} 是否支持面板收起
 * @params isPanelPaginated {boolean} 是否支持面板翻页
 * @params isMobileLayoutSupported {boolean} 是否支持移动端布局
 * @params mobileLayoutRowCount {number} 移动端布局行数
 * @params componentBackgroundType {ComponentBackgroundTypeCommonType} 组件背景类型：0模块背景，1单列背景
 * @params extension {undefined} 扩展字段
 * @params themes {ThemeOutCommonType[]} 专题集合
 */
export type GetViscsProjectByIdResType = {
    id: string;
    name: string;
    title: string;
    productId: string;
    uiStyle: UIStyleCommonType;
    mapType: MapTypeCommonType;
    layoutType: ProjectLayoutTypeCommonType;
    screenWidth: number;
    columnWidth: number;
    leftColumnCount: number;
    leftRowCount: number;
    rightColumnCount: number;
    rightRowCount: number;
    isPanelCollapsible: boolean;
    isPanelPaginated: boolean;
    isMobileLayoutSupported: boolean;
    mobileLayoutRowCount: number;
    componentBackgroundType: ComponentBackgroundTypeCommonType;
    extension: undefined;
    themes: ThemeOutCommonType[];
};

/**
 * 修改项目——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 项目名称 （必填）
 * @params title {string} 项目标题 （必填）
 * @params uiStyle {UIStyleCommonType} 界面风格：0政务蓝，1企业蓝，2能源绿，不传默认政务蓝
 * @params mapType {MapTypeCommonType} 地图类型：0平铺，1窗口，2无地图，不传默认平铺
 * @params layoutType {ProjectLayoutTypeCommonType} 布局类型：0自适应布局，1固定布局，不传默认自适应布局
 * @params screenWidth {number} 屏幕宽度
 * @params columnWidth {number} 单列宽度
 * @params leftColumnCount {number} 左侧面板列数
 * @params leftRowCount {number} 左侧面板行数
 * @params rightColumnCount {number} 右侧面板列数
 * @params rightRowCount {number} 右侧面板行数
 * @params isPanelCollapsible {boolean} 是否支持面板收起，默认不支持
 * @params isPanelPaginated {boolean} 是否支持面板翻页，默认不支持
 * @params isMobileLayoutSupported {boolean} 是否支持移动端布局，默认不支持
 * @params mobileLayoutRowCount {number} 移动端布局行数
 * @params componentBackgroundType {ComponentBackgroundTypeCommonType} 组件背景类型：0模块背景，1单列背景，不传默认模块背景
 * @params extension {undefined} 扩展字段
 */
export type EditViscsProjectReqType = {
    id: string;
    'X-version'?: string;
    name: string;
    title: string;
    uiStyle?: UIStyleCommonType;
    mapType?: MapTypeCommonType;
    layoutType?: ProjectLayoutTypeCommonType;
    screenWidth?: number;
    columnWidth?: number;
    leftColumnCount?: number;
    leftRowCount?: number;
    rightColumnCount?: number;
    rightRowCount?: number;
    isPanelCollapsible?: boolean;
    isPanelPaginated?: boolean;
    isMobileLayoutSupported?: boolean;
    mobileLayoutRowCount?: number;
    componentBackgroundType?: ComponentBackgroundTypeCommonType;
    extension?: undefined;
};

/**
 * 删除项目——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteViscsProjectReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 分页获取项目列表——请求参数类型定义
 * @params keyword {string} 关键字
 * @params page {number} 页码, 从1开始 默认：1
 * @params per_page {number} 页容量, [1, 128] 默认：100
 * @headers X-version {string}
 */
export type GetViscsProjectsReqType = {
    keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * 分页获取项目列表——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ProjectOutCommonType[]} 记录
 */
export type GetViscsProjectsResType = {
    totalCount: number;
    records: ProjectOutCommonType[];
};

/**
 * 新增项目——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 项目名称 （必填）
 * @params title {string} 项目标题 （必填）
 * @params uiStyle {UIStyleCommonType} 界面风格：0政务蓝，1企业蓝，2能源绿，不传默认政务蓝
 * @params mapType {MapTypeCommonType} 地图类型：0平铺，1窗口，2无地图，不传默认平铺
 * @params layoutType {ProjectLayoutTypeCommonType} 布局类型：0自适应布局，1固定布局，不传默认自适应布局
 * @params screenWidth {number} 屏幕宽度
 * @params columnWidth {number} 单列宽度
 * @params leftColumnCount {number} 左侧面板列数
 * @params leftRowCount {number} 左侧面板行数
 * @params rightColumnCount {number} 右侧面板列数
 * @params rightRowCount {number} 右侧面板行数
 * @params isPanelCollapsible {boolean} 是否支持面板收起，默认不支持
 * @params isPanelPaginated {boolean} 是否支持面板翻页，默认不支持
 * @params isMobileLayoutSupported {boolean} 是否支持移动端布局，默认不支持
 * @params mobileLayoutRowCount {number} 移动端布局行数
 * @params componentBackgroundType {ComponentBackgroundTypeCommonType} 组件背景类型：0模块背景，1单列背景，不传默认模块背景
 * @params extension {undefined} 扩展字段
 * @params productId {string} 产品ID （必填）
 */
export type AddViscsProjectReqType = {
    'X-version'?: string;
    name: string;
    title: string;
    uiStyle?: UIStyleCommonType;
    mapType?: MapTypeCommonType;
    layoutType?: ProjectLayoutTypeCommonType;
    screenWidth?: number;
    columnWidth?: number;
    leftColumnCount?: number;
    leftRowCount?: number;
    rightColumnCount?: number;
    rightRowCount?: number;
    isPanelCollapsible?: boolean;
    isPanelPaginated?: boolean;
    isMobileLayoutSupported?: boolean;
    mobileLayoutRowCount?: number;
    componentBackgroundType?: ComponentBackgroundTypeCommonType;
    extension?: undefined;
    productId: string;
};

/**
 * 新增项目——响应参数类型定义
 * @params id {string} 项目名称
 * @params name {string} 项目名称
 * @params title {string} 项目标题
 * @params productId {string} 产品ID
 * @params uiStyle {UIStyleCommonType} 界面风格：0政务蓝，1企业蓝，2能源绿
 * @params mapType {MapTypeCommonType} 地图类型：0平铺，1窗口，2无地图
 * @params layoutType {ProjectLayoutTypeCommonType} 布局类型：0自适应布局，1固定布局
 * @params screenWidth {number} 屏幕宽度
 * @params columnWidth {number} 单列宽度
 * @params leftColumnCount {number} 左侧面板列数
 * @params leftRowCount {number} 左侧面板行数
 * @params rightColumnCount {number} 右侧面板列数
 * @params rightRowCount {number} 右侧面板行数
 * @params isPanelCollapsible {boolean} 是否支持面板收起
 * @params isPanelPaginated {boolean} 是否支持面板翻页
 * @params isMobileLayoutSupported {boolean} 是否支持移动端布局
 * @params mobileLayoutRowCount {number} 移动端布局行数
 * @params componentBackgroundType {ComponentBackgroundTypeCommonType} 组件背景类型：0模块背景，1单列背景
 * @params extension {undefined} 扩展字段
 * @params themes {ThemeOutCommonType[]} 专题集合
 */
export type AddViscsProjectResType = {
    id: string;
    name: string;
    title: string;
    productId: string;
    uiStyle: UIStyleCommonType;
    mapType: MapTypeCommonType;
    layoutType: ProjectLayoutTypeCommonType;
    screenWidth: number;
    columnWidth: number;
    leftColumnCount: number;
    leftRowCount: number;
    rightColumnCount: number;
    rightRowCount: number;
    isPanelCollapsible: boolean;
    isPanelPaginated: boolean;
    isMobileLayoutSupported: boolean;
    mobileLayoutRowCount: number;
    componentBackgroundType: ComponentBackgroundTypeCommonType;
    extension: undefined;
    themes: ThemeOutCommonType[];
};

/**
 * 导出——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type ViscsExportProjectReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 导入——请求参数类型定义
 * @headers X-version {string}
 */
export type ViscsImportProjectReqType = {
    'X-version'?: string;
};

/**
 * 导入——响应参数类型定义
 * @params id {string} id
 * @params name {string} 项目名称
 * @params title {string} 项目标题
 * @params productId {string} 产品ID
 * @params uiStyle {UIStyleCommonType} 界面风格：0政务蓝，1企业蓝，2能源绿
 * @params mapType {MapTypeCommonType} 地图类型：0平铺，1窗口，2无地图
 * @params layoutType {ProjectLayoutTypeCommonType} 布局类型：0自适应布局，1固定布局
 * @params screenWidth {number} 屏幕宽度
 * @params columnWidth {number} 单列宽度
 * @params leftColumnCount {number} 左侧面板列数
 * @params leftRowCount {number} 左侧面板行数
 * @params rightColumnCount {number} 右侧面板列数
 * @params rightRowCount {number} 右侧面板行数
 * @params isPanelCollapsible {boolean} 是否支持面板收起
 * @params isPanelPaginated {boolean} 是否支持面板翻页
 * @params isMobileLayoutSupported {boolean} 是否支持移动端布局
 * @params mobileLayoutRowCount {number} 移动端布局行数
 * @params componentBackgroundType {ComponentBackgroundTypeCommonType} 组件背景类型：0模块背景，1单列背景
 * @params extension {string} 扩展字段
 * @params createTime {string} 创建时间
 */
export type ViscsImportProjectResType = {
    id: string;
    name: string;
    title: string;
    productId: string;
    uiStyle: UIStyleCommonType;
    mapType: MapTypeCommonType;
    layoutType: ProjectLayoutTypeCommonType;
    screenWidth: number;
    columnWidth: number;
    leftColumnCount: number;
    leftRowCount: number;
    rightColumnCount: number;
    rightRowCount: number;
    isPanelCollapsible: boolean;
    isPanelPaginated: boolean;
    isMobileLayoutSupported: boolean;
    mobileLayoutRowCount: number;
    componentBackgroundType: ComponentBackgroundTypeCommonType;
    extension: string;
    createTime: string;
};

/**
 * 获取专题——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type GetThemeReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 获取专题——响应参数类型定义
 * @params themeId {string} 专题ID
 * @params name {string} 专题名称
 * @params projectId {string} 项目Id
 * @params relateThemeId {string} 关联DCS专题ID
 * @params label {any[]} 标签
 * @params themeConfigOuts {ThemeConfigOutCommonType[]} 专题
 */
export type GetThemeResType = {
    themeId: string;
    name: string;
    projectId: string;
    relateThemeId: string;
    label: any[];
    themeConfigOuts: ThemeConfigOutCommonType[];
};

/**
 * 修改专题——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params name {string} 专题名称 （必填）
 * @params label {any[]} 标签
 */
export type UpdateThemeReqType = {
    id: string;
    'X-version'?: string;
    name: string;
    label?: any[];
};

/**
 * 删除专题——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 */
export type DeleteViscsThemeReqType = {
    id: string;
    'X-version'?: string;
};

/**
 * 搜索专题——请求参数类型定义
 * @params keyword {string} 关键词
 * @params label {string} 标签
 * @params isPreview {boolean} 只对configData生效 默认：true
 * @headers X-version {string}
 */
export type SearchThemesReqType = {
    keyword?: string;
    label?: string;
    isPreview?: boolean;
    'X-version'?: string;
};

/**
 * 搜索专题——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ThemeOutCommonType[]} 记录
 */
export type SearchThemesResType = {
    totalCount: number;
    records: ThemeOutCommonType[];
};

/**
 * 新增专题——请求参数类型定义
 * @headers X-version {string}
 * @params name {string} 专题名称 （必填）
 * @params label {any[]} 标签
 * @params relateThemeId {string} 关联DCS专题ID （必填）
 * @params themeConfigs {ThemeConfigExInCommonType[]} 可选，同时支持设置布局
 * @params projectId {string} 项目Id （必填）
 */
export type CreateThemeReqType = {
    'X-version'?: string;
    name: string;
    label?: any[];
    relateThemeId: string;
    themeConfigs?: ThemeConfigExInCommonType[];
    projectId: string;
};

/**
 * 新增专题——响应参数类型定义
 * @params themeId {string} 专题ID
 * @params name {string} 专题名称
 * @params projectId {string} 项目Id
 * @params relateThemeId {string} 关联DCS专题ID
 * @params label {any[]} 标签
 * @params themeConfigOuts {ThemeConfigOutCommonType[]} 专题
 */
export type CreateThemeResType = {
    themeId: string;
    name: string;
    projectId: string;
    relateThemeId: string;
    label: any[];
    themeConfigOuts: ThemeConfigOutCommonType[];
};

/**
 * 隐藏专题——请求参数类型定义
 * @params id {string} id （必填）
 * @params layoutType {number} 默认隐藏专题不全布局
 * @headers X-version {string}
 * @params isHidden {boolean} 是否隐藏
 */
export type HiddenThemeReqType = {
    id: string;
    layoutType?: number;
    'X-version'?: string;
    isHidden?: boolean;
};

/**
 * 发布专题——请求参数类型定义
 * @params id {string} id （必填）
 * @params layoutType {number}  （必填）
 * @headers X-version {string}
 */
export type PublishThemesReqType = {
    id: string;
    layoutType: number;
    'X-version'?: string;
};

/**
 * 保存专题布局配置——请求参数类型定义
 * @params id {string} id （必填）
 * @params layoutType {number}  （必填）
 * @headers X-version {string}
 * @params configData {undefined} 组件配置内容 （必填）
 */
export type SaveThemeLayoutConfigReqType = {
    id: string;
    layoutType: number;
    'X-version'?: string;
    configData: undefined;
};

/**
 * 保存专题布局配置——响应参数类型定义
 * @params themeId {string} 专题ID
 * @params name {string} 专题名称
 * @params projectId {string} 项目Id
 * @params relateThemeId {string} 关联DCS专题ID
 * @params label {any[]} 标签
 * @params themeConfigOuts {ThemeConfigOutCommonType[]} 专题
 */
export type SaveThemeLayoutConfigResType = {
    themeId: string;
    name: string;
    projectId: string;
    relateThemeId: string;
    label: any[];
    themeConfigOuts: ThemeConfigOutCommonType[];
};

/**
 * 删除专题布局配置——请求参数类型定义
 * @params id {string} id （必填）
 * @params layoutType {number}  （必填）
 * @headers X-version {string}
 */
export type DeleteThemeLayoutConfigReqType = {
    id: string;
    layoutType: number;
    'X-version'?: string;
};

/**
 * 获取专题布局配置——请求参数类型定义
 * @params id {string} id （必填）
 * @params layoutType {number}  （必填）
 * @params isPreview {boolean}  （必填）
 * @headers X-version {string}
 */
export type GetThemeLayoutConfigReqType = {
    id: string;
    layoutType: number;
    isPreview: boolean;
    'X-version'?: string;
};

/**
 * 获取专题布局配置——响应参数类型定义
 * @params isPublish {boolean} 是否发布
 * @params isHidden {boolean} 是否隐藏
 * @params layoutType {number} 布局类型
 * @params configData {undefined} 组件配置内容
 * @params themeId {string} 专题ID
 * @params name {string} 专题名称
 */
export type GetThemeLayoutConfigResType = {
    isPublish: boolean;
    isHidden: boolean;
    layoutType: number;
    configData: undefined;
    themeId: string;
    name: string;
};

/**
 * 导出——请求参数类型定义
 * @params keyword {string} 关键词
 * @params label {string} 标签
 * @params isPreview {boolean} 只对configData生效 默认：true
 * @headers X-version {string}
 */
export type ExportThemesReqType = {
    keyword?: string;
    label?: string;
    isPreview?: boolean;
    'X-version'?: string;
};

/**
 * 导入——请求参数类型定义
 * @headers X-version {string}
 */
export type ImportThemesReqType = {
    'X-version'?: string;
};

/**
 * 移动位置——请求参数类型定义
 * @params id {string} id （必填）
 * @headers X-version {string}
 * @params beforeThemeId {string} 移入位置前面的专题id
 * @params afterThemeId {string} 移入位置后面的专题id
 */
export type MoveThemeReqType = {
    id: string;
    'X-version'?: string;
    beforeThemeId?: string;
    afterThemeId?: string;
};

/**
 * 专题发布历史列表——请求参数类型定义
 * @params id {string} id （必填）
 * @params layoutType {number}  （必填）
 * @headers X-version {string}
 */
export type GetHistoryRecordsReqType = {
    id: string;
    layoutType: number;
    'X-version'?: string;
};

/**
 * 专题发布历史列表——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ThemePublishOutCommonType[]} 记录
 */
export type GetHistoryRecordsResType = {
    totalCount: number;
    records: ThemePublishOutCommonType[];
};

/**
 * 获取历史专题配置——请求参数类型定义
 * @params historyId {string} historyId （必填）
 * @headers X-version {string}
 */
export type GetHistoryThemeReqType = {
    historyId: string;
    'X-version'?: string;
};

/**
 * 获取历史专题配置——响应参数类型定义
 * @params isPublish {boolean} 是否发布
 * @params isHidden {boolean} 是否隐藏
 * @params layoutType {number} 布局类型
 * @params configData {undefined} 组件配置内容
 * @params themeId {string} 专题ID
 * @params name {string} 专题名称
 */
export type GetHistoryThemeResType = {
    isPublish: boolean;
    isHidden: boolean;
    layoutType: number;
    configData: undefined;
    themeId: string;
    name: string;
};

/**
 * 恢复历史版本——请求参数类型定义
 * @params historyId {string} historyId （必填）
 * @headers X-version {string}
 */
export type ResumeHistoryThemeReqType = {
    historyId: string;
    'X-version'?: string;
};
