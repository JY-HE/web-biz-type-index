/**
 * @description 获取组件
 * @summary Request data types
 * @url [ get ] /api/Components/{name}
 * @bizName viscsBiz
 */
export type GetComponentsNameReqTypeByVss = {
    name: string;
    isIncludeThumbnail?: boolean;
    'X-version'?: string;
};

/**
 * @description 获取组件
 * @summary Response data types
 * @url [ get ] /api/Components/{name}
 * @bizName viscsBiz
 */
export type GetComponentsNameResTypeByVss = {
    name: string;
    type: 0 | 1 | 2 | 3;
    labels: Array<{
        id: string;
        type: 0 | 1 | 2;
        text: string;
        relateProjectId: string;
        createTime: string;
    }>;
    supportPlatform: number;
    supportSize: Array<{
        row: number;
        column: number;
    }>;
    configData: any;
    createTime: string;
    thumbnail: string;
};

/**
 * @description 修改组件
 * @summary Request data types
 * @url [ put ] /api/Components/{name}
 * @bizName viscsBiz
 */
export type PutComponentsNameReqTypeByVss = {
    name: string;
    'X-version'?: string;
    type?: 0 | 1 | 2 | 3;
    labelIds?: Array<string>;
    supportPlatform: number;
    supportSize: Array<{
        row: number;
        column: number;
    }>;
    thumbnail?: string;
    configData: any;
};

/**
 * @description 删除组件
 * @summary Request data types
 * @url [ delete ] /api/Components/{name}
 * @bizName viscsBiz
 */
export type DeleteComponentsNameReqTypeByVss = {
    name: string;
    'X-version'?: string;
};

/**
 * @description 搜索组件
 * @summary Request data types
 * @url [ get ] /api/Components
 * @bizName viscsBiz
 */
export type GetComponentsReqTypeByVss = {
    keyword?: string;
    type?: number;
    supportPlatform?: number;
    labels?: Array<any>;
    supportRow?: number;
    supportColumn?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 搜索组件
 * @summary Response data types
 * @url [ get ] /api/Components
 * @bizName viscsBiz
 */
export type GetComponentsResTypeByVss = {
    totalCount: number;
    records: Array<{
        name: string;
        type: 0 | 1 | 2 | 3;
        labels: Array<Record<string, any>>;
        supportPlatform: number;
        supportSize: Array<{
            row: number;
            column: number;
        }>;
        configData: any;
        createTime: string;
    }>;
};

/**
 * @description 新增组件
 * @summary Request data types
 * @url [ post ] /api/Components
 * @bizName viscsBiz
 */
export type PostComponentsReqTypeByVss = {
    'X-version'?: string;
    type?: 0 | 1 | 2 | 3;
    labelIds?: Array<string>;
    supportPlatform: number;
    supportSize: Array<{
        row: number;
        column: number;
    }>;
    thumbnail?: string;
    configData: any;
    name: string;
};

/**
 * @description 新增组件
 * @summary Response data types
 * @url [ post ] /api/Components
 * @bizName viscsBiz
 */
export type PostComponentsResTypeByVss = {
    name: string;
    type: 0 | 1 | 2 | 3;
    labels: Array<{
        id: string;
        type: 0 | 1 | 2;
        text: string;
        relateProjectId: string;
        createTime: string;
    }>;
    supportPlatform: number;
    supportSize: Array<{
        row: number;
        column: number;
    }>;
    configData: any;
    createTime: string;
    thumbnail: string;
};

/**
 * @description 搜索组件缩略图
 * @summary Request data types
 * @url [ post ] /api/Components/search/thumbnail
 * @bizName viscsBiz
 */
export type PostComponentsSearchThumbnailReqTypeByVss = {
    'X-version'?: string;
    componentNames?: Array<string>;
};

/**
 * @description 搜索组件缩略图
 * @summary Response data types
 * @url [ post ] /api/Components/search/thumbnail
 * @bizName viscsBiz
 */
export type PostComponentsSearchThumbnailResTypeByVss = {
    totalCount: number;
    records: Array<{
        componentName: string;
        thumbnail: string;
    }>;
};

/**
 * @description 更新组件缩略图
 * @summary Request data types
 * @url [ put ] /api/Components/{name}/thumbnail
 * @bizName viscsBiz
 */
export type PutComponentsNameThumbnailReqTypeByVss = {
    name: string;
    'X-version'?: string;
    thumbnail?: string;
};

/**
 * @description 组件选择标签
 * @summary Request data types
 * @url [ put ] /api/Components/{name}/label
 * @bizName viscsBiz
 */
export type PutComponentsNameLabelReqTypeByVss = {
    name: string;
    'X-version'?: string;
    labelId?: string;
    isSelected?: boolean;
};

/**
 * @description 导出（分页字段无效）
 * @summary Request data types
 * @url [ get ] /api/Components/export
 * @bizName viscsBiz
 */
export type GetComponentsExportReqTypeByVss = {
    keyword?: string;
    type?: number;
    supportPlatform?: number;
    labels?: Array<any>;
    supportRow?: number;
    supportColumn?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 导入
 * @summary Request data types
 * @url [ post ] /api/Components/import
 * @bizName viscsBiz
 */
export type PostComponentsImportReqTypeByVss = {
    'X-version'?: string;
};

/**
 * @description 获取标签
 * @summary Request data types
 * @url [ get ] /api/Labels/{id}
 * @bizName viscsBiz
 */
export type GetLabelsIdReqTypeByVss = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取标签
 * @summary Response data types
 * @url [ get ] /api/Labels/{id}
 * @bizName viscsBiz
 */
export type GetLabelsIdResTypeByVss = {
    id: string;
    type: 0 | 1 | 2;
    text: string;
    relateProjectId: string;
    createTime: string;
};

/**
 * @description 修改标签
 * @summary Request data types
 * @url [ put ] /api/Labels/{id}
 * @bizName viscsBiz
 */
export type PutLabelsIdReqTypeByVss = {
    id: string;
    'X-version'?: string;
    type?: 0 | 1 | 2;
    text: string;
};

/**
 * @description 删除标签
 * @summary Request data types
 * @url [ delete ] /api/Labels/{id}
 * @bizName viscsBiz
 */
export type DeleteLabelsIdReqTypeByVss = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 搜索标签
 * @summary Request data types
 * @url [ get ] /api/Labels
 * @bizName viscsBiz
 */
export type GetLabelsReqTypeByVss = {
    keyword?: string;
    type?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 搜索标签
 * @summary Response data types
 * @url [ get ] /api/Labels
 * @bizName viscsBiz
 */
export type GetLabelsResTypeByVss = {
    totalCount: number;
    records: Array<{
        id: string;
        type: 0 | 1 | 2;
        text: string;
        relateProjectId: string;
        createTime: string;
        useCount: number;
    }>;
};

/**
 * @description 新增标签
 * @summary Request data types
 * @url [ post ] /api/Labels
 * @bizName viscsBiz
 */
export type PostLabelsReqTypeByVss = {
    'X-version'?: string;
    type?: 0 | 1 | 2;
    text: string;
};

/**
 * @description 新增标签
 * @summary Response data types
 * @url [ post ] /api/Labels
 * @bizName viscsBiz
 */
export type PostLabelsResTypeByVss = {
    id: string;
    type: 0 | 1 | 2;
    text: string;
    relateProjectId: string;
    createTime: string;
};

/**
 * @description 导出
 * @summary Request data types
 * @url [ get ] /api/Labels/export
 * @bizName viscsBiz
 */
export type GetLabelsExportReqTypeByVss = {
    'X-version'?: string;
};

/**
 * @description 导入
 * @summary Request data types
 * @url [ post ] /api/Labels/import
 * @bizName viscsBiz
 */
export type PostLabelsImportReqTypeByVss = {
    'X-version'?: string;
};

/**
 * @description 获取项目 (isPreview:true =>未发布，isPreview:false =>已发布-针对项目下专题数据生效)
 * @summary Request data types
 * @url [ get ] /api/Projects/{id}
 * @bizName viscsBiz
 */
export type GetProjectsIdReqTypeByVss = {
    id: string;
    isPreview: boolean;
    'X-version'?: string;
};

/**
 * @description 获取项目 (isPreview:true =>未发布，isPreview:false =>已发布-针对项目下专题数据生效)
 * @summary Response data types
 * @url [ get ] /api/Projects/{id}
 * @bizName viscsBiz
 */
export type GetProjectsIdResTypeByVss = {
    id: string;
    name: string;
    title: string;
    productId: string;
    uiStyle: 0 | 1 | 2;
    mapType: 0 | 1 | 2;
    layoutType: 0 | 1;
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
    componentBackgroundType: 0 | 1 | 2;
    version: number;
    extension: any;
    themes: Array<{
        themeId: string;
        name: string;
        projectId: string;
        relateThemeId: string;
        label: Array<string>;
        themeConfigOuts: Array<{
            isPublish: boolean;
            isHidden: boolean;
            layoutType: number;
            configData: any;
        }>;
    }>;
};

/**
 * @description 修改项目
 * @summary Request data types
 * @url [ put ] /api/Projects/{id}
 * @bizName viscsBiz
 */
export type PutProjectsIdReqTypeByVss = {
    id: string;
    'X-version'?: string;
    name: string;
    title: string;
    uiStyle?: 0 | 1 | 2;
    mapType?: 0 | 1 | 2;
    layoutType?: 0 | 1;
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
    componentBackgroundType?: 0 | 1 | 2;
    version?: number;
    extension?: any;
};

/**
 * @description 删除项目
 * @summary Request data types
 * @url [ delete ] /api/Projects/{id}
 * @bizName viscsBiz
 */
export type DeleteProjectsIdReqTypeByVss = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 分页获取项目列表
 * @summary Request data types
 * @url [ get ] /api/Projects
 * @bizName viscsBiz
 */
export type GetProjectsReqTypeByVss = {
    keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页获取项目列表
 * @summary Response data types
 * @url [ get ] /api/Projects
 * @bizName viscsBiz
 */
export type GetProjectsResTypeByVss = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        title: string;
        productId: string;
        uiStyle: 0 | 1 | 2;
        mapType: 0 | 1 | 2;
        layoutType: 0 | 1;
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
        componentBackgroundType: 0 | 1 | 2;
        version: number;
        extension: any;
        themes: Array<Record<string, any>>;
    }>;
};

/**
 * @description 新增项目
 * @summary Request data types
 * @url [ post ] /api/Projects
 * @bizName viscsBiz
 */
export type PostProjectsReqTypeByVss = {
    'X-version'?: string;
    name: string;
    title: string;
    uiStyle?: 0 | 1 | 2;
    mapType?: 0 | 1 | 2;
    layoutType?: 0 | 1;
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
    componentBackgroundType?: 0 | 1 | 2;
    version?: number;
    extension?: any;
    productId: string;
};

/**
 * @description 新增项目
 * @summary Response data types
 * @url [ post ] /api/Projects
 * @bizName viscsBiz
 */
export type PostProjectsResTypeByVss = {
    id: string;
    name: string;
    title: string;
    productId: string;
    uiStyle: 0 | 1 | 2;
    mapType: 0 | 1 | 2;
    layoutType: 0 | 1;
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
    componentBackgroundType: 0 | 1 | 2;
    version: number;
    extension: any;
    themes: Array<{
        themeId: string;
        name: string;
        projectId: string;
        relateThemeId: string;
        label: Array<string>;
        themeConfigOuts: Array<{
            isPublish: boolean;
            isHidden: boolean;
            layoutType: number;
            configData: any;
        }>;
    }>;
};

/**
 * @description 导出
 * @summary Request data types
 * @url [ get ] /api/Projects/{id}/export
 * @bizName viscsBiz
 */
export type GetProjectsIdExportReqTypeByVss = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 导入
 * @summary Request data types
 * @url [ post ] /api/Projects/import
 * @bizName viscsBiz
 */
export type PostProjectsImportReqTypeByVss = {
    'X-version'?: string;
};

/**
 * @description 导入
 * @summary Response data types
 * @url [ post ] /api/Projects/import
 * @bizName viscsBiz
 */
export type PostProjectsImportResTypeByVss = {
    id: string;
    name: string;
    title: string;
    productId: string;
    uiStyle: any;
    mapType: any;
    layoutType: any;
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
    componentBackgroundType: any;
    version: number;
    extension: string;
    createTime: string;
};

/**
 * @description 获取专题
 * @summary Request data types
 * @url [ get ] /api/Themes/{id}
 * @bizName viscsBiz
 */
export type GetThemesIdReqTypeByVss = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取专题
 * @summary Response data types
 * @url [ get ] /api/Themes/{id}
 * @bizName viscsBiz
 */
export type GetThemesIdResTypeByVss = {
    themeId: string;
    name: string;
    projectId: string;
    relateThemeId: string;
    label: Array<string>;
    themeConfigOuts: Array<{
        isPublish: boolean;
        isHidden: boolean;
        layoutType: number;
        configData: any;
    }>;
};

/**
 * @description 修改专题
 * @summary Request data types
 * @url [ put ] /api/Themes/{id}
 * @bizName viscsBiz
 */
export type PutThemesIdReqTypeByVss = {
    id: string;
    'X-version'?: string;
    name: string;
    label?: Array<string>;
};

/**
 * @description 删除专题
 * @summary Request data types
 * @url [ delete ] /api/Themes/{id}
 * @bizName viscsBiz
 */
export type DeleteThemesIdReqTypeByVss = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 搜索专题
 * @summary Request data types
 * @url [ get ] /api/Themes
 * @bizName viscsBiz
 */
export type GetThemesReqTypeByVss = {
    keyword?: string;
    label?: string;
    isPreview?: boolean;
    'X-version'?: string;
};

/**
 * @description 搜索专题
 * @summary Response data types
 * @url [ get ] /api/Themes
 * @bizName viscsBiz
 */
export type GetThemesResTypeByVss = {
    totalCount: number;
    records: Array<{
        themeId: string;
        name: string;
        projectId: string;
        relateThemeId: string;
        label: Array<string>;
        themeConfigOuts: Array<{
            isPublish: boolean;
            isHidden: boolean;
            layoutType: number;
            configData: any;
        }>;
    }>;
};

/**
 * @description 新增专题
 * @summary Request data types
 * @url [ post ] /api/Themes
 * @bizName viscsBiz
 */
export type PostThemesReqTypeByVss = {
    'X-version'?: string;
    name: string;
    label?: Array<string>;
    relateThemeId: string;
    themeConfigs?: Array<{
        configData: any;
        layoutType: number;
    }>;
    projectId: string;
};

/**
 * @description 新增专题
 * @summary Response data types
 * @url [ post ] /api/Themes
 * @bizName viscsBiz
 */
export type PostThemesResTypeByVss = {
    themeId: string;
    name: string;
    projectId: string;
    relateThemeId: string;
    label: Array<string>;
    themeConfigOuts: Array<{
        isPublish: boolean;
        isHidden: boolean;
        layoutType: number;
        configData: any;
    }>;
};

/**
 * @description 隐藏专题
 * @summary Request data types
 * @url [ put ] /api/Themes/{id}/hide
 * @bizName viscsBiz
 */
export type PutThemesIdHideReqTypeByVss = {
    id: string;
    layoutType?: number;
    'X-version'?: string;
    isHidden?: boolean;
};

/**
 * @description 发布专题
 * @summary Request data types
 * @url [ put ] /api/Themes/{id}/publish
 * @bizName viscsBiz
 */
export type PutThemesIdPublishReqTypeByVss = {
    id: string;
    layoutType: number;
    'X-version'?: string;
};

/**
 * @description 保存专题布局配置
 * @summary Request data types
 * @url [ post ] /api/Themes/{id}/config/{layoutType}
 * @bizName viscsBiz
 */
export type PostThemesIdConfigLayoutTypeReqTypeByVss = {
    id: string;
    layoutType: number;
    'X-version'?: string;
    configData: any;
};

/**
 * @description 保存专题布局配置
 * @summary Response data types
 * @url [ post ] /api/Themes/{id}/config/{layoutType}
 * @bizName viscsBiz
 */
export type PostThemesIdConfigLayoutTypeResTypeByVss = {
    themeId: string;
    name: string;
    projectId: string;
    relateThemeId: string;
    label: Array<string>;
    themeConfigOuts: Array<{
        isPublish: boolean;
        isHidden: boolean;
        layoutType: number;
        configData: any;
    }>;
};

/**
 * @description 删除专题布局配置
 * @summary Request data types
 * @url [ delete ] /api/Themes/{id}/config/{layoutType}
 * @bizName viscsBiz
 */
export type DeleteThemesIdConfigLayoutTypeReqTypeByVss = {
    id: string;
    layoutType: number;
    'X-version'?: string;
};

/**
 * @description 获取专题布局配置
 * @summary Request data types
 * @url [ get ] /api/Themes/{id}/config/{layoutType}
 * @bizName viscsBiz
 */
export type GetThemesIdConfigLayoutTypeReqTypeByVss = {
    id: string;
    layoutType: number;
    isPreview: boolean;
    'X-version'?: string;
};

/**
 * @description 获取专题布局配置
 * @summary Response data types
 * @url [ get ] /api/Themes/{id}/config/{layoutType}
 * @bizName viscsBiz
 */
export type GetThemesIdConfigLayoutTypeResTypeByVss = {
    isPublish: boolean;
    isHidden: boolean;
    layoutType: number;
    configData: any;
    themeId: string;
    name: string;
};

/**
 * @description 导出
 * @summary Request data types
 * @url [ get ] /api/Themes/export
 * @bizName viscsBiz
 */
export type GetThemesExportReqTypeByVss = {
    keyword?: string;
    label?: string;
    isPreview?: boolean;
    'X-version'?: string;
};

/**
 * @description 导入
 * @summary Request data types
 * @url [ post ] /api/Themes/import
 * @bizName viscsBiz
 */
export type PostThemesImportReqTypeByVss = {
    'X-version'?: string;
};

/**
 * @description 移动位置
 * @summary Request data types
 * @url [ put ] /api/Themes/{id}/move
 * @bizName viscsBiz
 */
export type PutThemesIdMoveReqTypeByVss = {
    id: string;
    'X-version'?: string;
    beforeThemeId?: string;
    afterThemeId?: string;
};

/**
 * @description 专题发布历史列表
 * @summary Request data types
 * @url [ get ] /api/Themes/{id}/history/{layoutType}
 * @bizName viscsBiz
 */
export type GetThemesIdHistoryLayoutTypeReqTypeByVss = {
    id: string;
    layoutType: number;
    'X-version'?: string;
};

/**
 * @description 专题发布历史列表
 * @summary Response data types
 * @url [ get ] /api/Themes/{id}/history/{layoutType}
 * @bizName viscsBiz
 */
export type GetThemesIdHistoryLayoutTypeResTypeByVss = {
    totalCount: number;
    records: Array<{
        id: string;
        isValid: boolean;
        publisher: string;
        publisherHeaderImg: string;
        publisherPhotoPath: string;
        publishTime: string;
        label: Array<string>;
        configData: any;
    }>;
};

/**
 * @description 获取历史专题配置
 * @summary Request data types
 * @url [ get ] /api/Themes/history/{historyId}
 * @bizName viscsBiz
 */
export type GetThemesHistoryHistoryIdReqTypeByVss = {
    historyId: string;
    'X-version'?: string;
};

/**
 * @description 获取历史专题配置
 * @summary Response data types
 * @url [ get ] /api/Themes/history/{historyId}
 * @bizName viscsBiz
 */
export type GetThemesHistoryHistoryIdResTypeByVss = {
    isPublish: boolean;
    isHidden: boolean;
    layoutType: number;
    configData: any;
    themeId: string;
    name: string;
};

/**
 * @description 恢复历史版本
 * @summary Request data types
 * @url [ put ] /api/Themes/history/{historyId}/resume
 * @bizName viscsBiz
 */
export type PutThemesHistoryHistoryIdResumeReqTypeByVss = {
    historyId: string;
    'X-version'?: string;
};
