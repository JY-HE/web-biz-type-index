/**
 * @description 获取条件配置
 * @summary Request data types
 * @url [ get ] /api/ConditionTemplates/{id}
 * @bizName ntsBiz
 */
export type GetConditionTemplatesIdReqTypeByNts = {
    id: string;
};

/**
 * @description 获取条件配置
 * @summary Response data types
 * @url [ get ] /api/ConditionTemplates/{id}
 * @bizName ntsBiz
 */
export type GetConditionTemplatesIdResTypeByNts = {
    id: string;
    name: string;
    scene: string;
    conditions: Array<{
        key: string;
        value: string;
        operator: any;
    }>;
    templateIds: Array<string>;
};

/**
 * @description 更新条件配置
 * @summary Request data types
 * @url [ put ] /api/ConditionTemplates/{id}
 * @bizName ntsBiz
 */
export type PutConditionTemplatesIdReqTypeByNts = {
    id: string;
    name?: string;
    scene?: string;
    conditions?: Array<{
        key: string;
        value: string;
        operator: any;
    }>;
    templateIds?: Array<string>;
};

/**
 * @description 删除条件配置
 * @summary Request data types
 * @url [ delete ] /api/ConditionTemplates/{id}
 * @bizName ntsBiz
 */
export type DeleteConditionTemplatesIdReqTypeByNts = {
    id: string;
};

/**
 * @description 搜索条件配置
 * @summary Request data types
 * @url [ get ] /api/ConditionTemplates
 * @bizName ntsBiz
 */
export type GetConditionTemplatesReqTypeByNts = {
    keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 搜索条件配置
 * @summary Response data types
 * @url [ get ] /api/ConditionTemplates
 * @bizName ntsBiz
 */
export type GetConditionTemplatesResTypeByNts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        scene: string;
        conditions: Array<{
            key: string;
            value: string;
            operator: any;
        }>;
        templateIds: Array<string>;
    }>;
};

/**
 * @description 新增条件配置
 * @summary Request data types
 * @url [ post ] /api/ConditionTemplates
 * @bizName ntsBiz
 */
export type PostConditionTemplatesReqTypeByNts = {
    name?: string;
    scene?: string;
    conditions?: Array<{
        key: string;
        value: string;
        operator: any;
    }>;
    templateIds?: Array<string>;
};

/**
 * @description 新增条件配置
 * @summary Response data types
 * @url [ post ] /api/ConditionTemplates
 * @bizName ntsBiz
 */
export type PostConditionTemplatesResTypeByNts = {
    id: string;
    name: string;
    scene: string;
    conditions: Array<{
        key: string;
        value: string;
        operator: any;
    }>;
    templateIds: Array<string>;
};

/**
 * @description 获取i18n
 * @summary Request data types
 * @url [ get ] /api/I18NConfigs/{id}
 * @bizName ntsBiz
 */
export type GetI18NConfigsIdReqTypeByNts = {
    id: string;
};

/**
 * @description 获取i18n
 * @summary Response data types
 * @url [ get ] /api/I18NConfigs/{id}
 * @bizName ntsBiz
 */
export type GetI18NConfigsIdResTypeByNts = {
    id: string;
    key: string;
    languageType: 0 | 1;
    value: Record<string, any>;
};

/**
 * @description 更新i18n
 * @summary Request data types
 * @url [ put ] /api/I18NConfigs/{id}
 * @bizName ntsBiz
 */
export type PutI18NConfigsIdReqTypeByNts = {
    id: string;
    key?: string;
    languageType?: 0 | 1;
    value?: Record<string, any>;
};

/**
 * @description 删除i18n
 * @summary Request data types
 * @url [ delete ] /api/I18NConfigs/{id}
 * @bizName ntsBiz
 */
export type DeleteI18NConfigsIdReqTypeByNts = {
    id: string;
};

/**
 * @description 搜索i18n
 * @summary Request data types
 * @url [ get ] /api/I18NConfigs
 * @bizName ntsBiz
 */
export type GetI18NConfigsReqTypeByNts = {
    keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 搜索i18n
 * @summary Response data types
 * @url [ get ] /api/I18NConfigs
 * @bizName ntsBiz
 */
export type GetI18NConfigsResTypeByNts = {
    totalCount: number;
    records: Array<{
        id: string;
        key: string;
        languageType: 0 | 1;
        value: Record<string, any>;
    }>;
};

/**
 * @description 新增i18n
 * @summary Request data types
 * @url [ post ] /api/I18NConfigs
 * @bizName ntsBiz
 */
export type PostI18NConfigsReqTypeByNts = {
    key?: string;
    languageType?: 0 | 1;
    value?: Record<string, any>;
};

/**
 * @description 新增i18n
 * @summary Response data types
 * @url [ post ] /api/I18NConfigs
 * @bizName ntsBiz
 */
export type PostI18NConfigsResTypeByNts = {
    id: string;
    key: string;
    languageType: 0 | 1;
    value: Record<string, any>;
};

/**
 * @description 获取通知配置
 * @summary Request data types
 * @url [ get ] /api/NotifyConfigs/{id}
 * @bizName ntsBiz
 */
export type GetNotifyConfigsIdReqTypeByNts = {
    id: string;
};

/**
 * @description 获取通知配置
 * @summary Response data types
 * @url [ get ] /api/NotifyConfigs/{id}
 * @bizName ntsBiz
 */
export type GetNotifyConfigsIdResTypeByNts = {
    id: string;
    name: string;
    scene: string;
    type: 1 | 2 | 4 | 8 | 16 | 32;
    conditions: Array<{
        key: string;
        value: string;
        operator: any;
    }>;
    isEnable: boolean;
    createTime: string;
    updateTime: string;
    notifyTypes: Array<{
        type: 1 | 2 | 4 | 8 | 16 | 32;
        name: string;
    }>;
    templates: Array<{
        id: string;
        notifyType: 1 | 2 | 4 | 8 | 16 | 32;
        content: string;
        defaultWebHookUrl: string;
        title: string;
        secondTitle: string;
        jumpUrl: string;
        priorityPhoneType: string;
    }>;
    recipients: Array<{
        name: string;
        userId: string;
        mobile: string;
        mail: string;
        groupId: string;
    }>;
};

/**
 * @description 更新通知配置
 * @summary Request data types
 * @url [ put ] /api/NotifyConfigs/{id}
 * @bizName ntsBiz
 */
export type PutNotifyConfigsIdReqTypeByNts = {
    id: string;
    name?: string;
    scene?: string;
    type?: 1 | 2 | 4 | 8 | 16 | 32;
    conditions?: Array<{
        key: string;
        value: string;
        operator: any;
    }>;
    isEnable?: boolean;
    templates?: Array<{
        notifyType: 1 | 2 | 4 | 8 | 16 | 32;
        content: string;
        defaultWebHookUrl: string;
        title: string;
        secondTitle: string;
        jumpUrl: string;
        priorityPhoneType: string;
    }>;
    recipients?: Array<{
        name: string;
        userId: string;
        mobile: string;
        mail: string;
        groupId: string;
    }>;
};

/**
 * @description 删除通知配置
 * @summary Request data types
 * @url [ delete ] /api/NotifyConfigs/{id}
 * @bizName ntsBiz
 */
export type DeleteNotifyConfigsIdReqTypeByNts = {
    id: string;
};

/**
 * @description 搜索通知配置
 * @summary Request data types
 * @url [ get ] /api/NotifyConfigs
 * @bizName ntsBiz
 */
export type GetNotifyConfigsReqTypeByNts = {
    keyword?: string;
    scene?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 搜索通知配置
 * @summary Response data types
 * @url [ get ] /api/NotifyConfigs
 * @bizName ntsBiz
 */
export type GetNotifyConfigsResTypeByNts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        scene: string;
        type: 1 | 2 | 4 | 8 | 16 | 32;
        conditions: Array<{
            key: string;
            value: string;
            operator: any;
        }>;
        isEnable: boolean;
        createTime: string;
        updateTime: string;
        notifyTypes: Array<Record<string, any>>;
    }>;
};

/**
 * @description 新增通知配置
 * @summary Request data types
 * @url [ post ] /api/NotifyConfigs
 * @bizName ntsBiz
 */
export type PostNotifyConfigsReqTypeByNts = {
    name?: string;
    scene?: string;
    type?: 1 | 2 | 4 | 8 | 16 | 32;
    conditions?: Array<{
        key: string;
        value: string;
        operator: any;
    }>;
    isEnable?: boolean;
    templates?: Array<{
        notifyType: 1 | 2 | 4 | 8 | 16 | 32;
        content: string;
        defaultWebHookUrl: string;
        title: string;
        secondTitle: string;
        jumpUrl: string;
        priorityPhoneType: string;
    }>;
    recipients?: Array<{
        name: string;
        userId: string;
        mobile: string;
        mail: string;
        groupId: string;
    }>;
};

/**
 * @description 新增通知配置
 * @summary Response data types
 * @url [ post ] /api/NotifyConfigs
 * @bizName ntsBiz
 */
export type PostNotifyConfigsResTypeByNts = {
    id: string;
    name: string;
    scene: string;
    type: 1 | 2 | 4 | 8 | 16 | 32;
    conditions: Array<{
        key: string;
        value: string;
        operator: any;
    }>;
    isEnable: boolean;
    createTime: string;
    updateTime: string;
    notifyTypes: Array<{
        type: 1 | 2 | 4 | 8 | 16 | 32;
        name: string;
    }>;
    templates: Array<{
        id: string;
        notifyType: 1 | 2 | 4 | 8 | 16 | 32;
        content: string;
        defaultWebHookUrl: string;
        title: string;
        secondTitle: string;
        jumpUrl: string;
        priorityPhoneType: string;
    }>;
    recipients: Array<{
        name: string;
        userId: string;
        mobile: string;
        mail: string;
        groupId: string;
    }>;
};

/**
 * @description 获取全部通知类型
 * @summary Response data types
 * @url [ get ] /api/NotifyConfigs/types
 * @bizName ntsBiz
 */
export type GetNotifyConfigsTypesResTypeByNts = {
    totalCount: number;
    records: Array<{
        type: 1 | 2 | 4 | 8 | 16 | 32;
        name: string;
    }>;
};

/**
 * @description 启用通知配置
 * @summary Request data types
 * @url [ put ] /api/NotifyConfigs/{id}/enable
 * @bizName ntsBiz
 */
export type PutNotifyConfigsIdEnableReqTypeByNts = {
    id: string;
    isEnable?: boolean;
};

/**
 * @description 获取通知记录
 * @summary Request data types
 * @url [ get ] /api/NotifyRecords/{id}
 * @bizName ntsBiz
 */
export type GetNotifyRecordsIdReqTypeByNts = {
    id: string;
};

/**
 * @description 获取通知记录
 * @summary Response data types
 * @url [ get ] /api/NotifyRecords/{id}
 * @bizName ntsBiz
 */
export type GetNotifyRecordsIdResTypeByNts = {
    id: string;
    content: string;
    type: 1 | 2 | 4 | 8 | 16 | 32;
    sender: string;
    webHookUrl: string;
    title: string;
    scene: string;
    recipient: string;
    traceId: string;
    resultDescription: string;
    status: 0 | 1 | 2;
    arrivalTime: string;
    createTime: string;
};

/**
 * @description 搜索通知记录
 * @summary Request data types
 * @url [ get ] /api/NotifyRecords
 * @bizName ntsBiz
 */
export type GetNotifyRecordsReqTypeByNts = {
    keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 搜索通知记录
 * @summary Response data types
 * @url [ get ] /api/NotifyRecords
 * @bizName ntsBiz
 */
export type GetNotifyRecordsResTypeByNts = {
    totalCount: number;
    records: Array<{
        id: string;
        content: string;
        type: 1 | 2 | 4 | 8 | 16 | 32;
        sender: string;
        webHookUrl: string;
        title: string;
        scene: string;
        recipient: string;
        traceId: string;
        resultDescription: string;
        status: 0 | 1 | 2;
        arrivalTime: string;
        createTime: string;
    }>;
};

/**
 * @description 获取占位符
 * @summary Request data types
 * @url [ get ] /api/Placeholders/{id}
 * @bizName ntsBiz
 */
export type GetPlaceholdersIdReqTypeByNts = {
    id: string;
};

/**
 * @description 获取占位符
 * @summary Response data types
 * @url [ get ] /api/Placeholders/{id}
 * @bizName ntsBiz
 */
export type GetPlaceholdersIdResTypeByNts = {
    id: string;
    name: string;
    type: 0;
    key: string;
    value: string;
    isEnableExpression: boolean;
    replaceExpressions: Array<{
        operator: any;
        value: string;
        replaceValue: string;
    }>;
};

/**
 * @description 更新占位符
 * @summary Request data types
 * @url [ put ] /api/Placeholders/{id}
 * @bizName ntsBiz
 */
export type PutPlaceholdersIdReqTypeByNts = {
    id: string;
    name: string;
    type?: 0;
    key?: string;
    value?: string;
    isEnableExpression?: boolean;
    replaceExpressions?: Array<{
        operator: any;
        value: string;
        replaceValue: string;
    }>;
};

/**
 * @description 删除占位符
 * @summary Request data types
 * @url [ delete ] /api/Placeholders/{id}
 * @bizName ntsBiz
 */
export type DeletePlaceholdersIdReqTypeByNts = {
    id: string;
};

/**
 * @description 搜索占位符
 * @summary Request data types
 * @url [ get ] /api/Placeholders
 * @bizName ntsBiz
 */
export type GetPlaceholdersReqTypeByNts = {
    keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 搜索占位符
 * @summary Response data types
 * @url [ get ] /api/Placeholders
 * @bizName ntsBiz
 */
export type GetPlaceholdersResTypeByNts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        type: 0;
        key: string;
        value: string;
        isEnableExpression: boolean;
        replaceExpressions: Array<{
            operator: any;
            value: string;
            replaceValue: string;
        }>;
    }>;
};

/**
 * @description 新增占位符
 * @summary Request data types
 * @url [ post ] /api/Placeholders
 * @bizName ntsBiz
 */
export type PostPlaceholdersReqTypeByNts = {
    name: string;
    type?: 0;
    key?: string;
    value?: string;
    isEnableExpression?: boolean;
    replaceExpressions?: Array<{
        operator: any;
        value: string;
        replaceValue: string;
    }>;
};

/**
 * @description 新增占位符
 * @summary Response data types
 * @url [ post ] /api/Placeholders
 * @bizName ntsBiz
 */
export type PostPlaceholdersResTypeByNts = {
    id: string;
    name: string;
    type: 0;
    key: string;
    value: string;
    isEnableExpression: boolean;
    replaceExpressions: Array<{
        operator: any;
        value: string;
        replaceValue: string;
    }>;
};

/**
 * @description 获取Scene
 * @summary Request data types
 * @url [ get ] /api/Scenes/{id}
 * @bizName ntsBiz
 */
export type GetScenesIdReqTypeByNts = {
    id: string;
};

/**
 * @description 获取Scene
 * @summary Response data types
 * @url [ get ] /api/Scenes/{id}
 * @bizName ntsBiz
 */
export type GetScenesIdResTypeByNts = {
    id: string;
    name: string;
    tips: string;
    recipientTips: string;
    notifyExample: string;
};

/**
 * @description 获取场景
 * @summary Response data types
 * @url [ get ] /api/Scenes
 * @bizName ntsBiz
 */
export type GetScenesResTypeByNts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        tips: string;
        recipientTips: string;
        notifyExample: string;
    }>;
};

/**
 * @description 新增场景
 * @summary Request data types
 * @url [ post ] /api/Scenes
 * @bizName ntsBiz
 */
export type PostScenesReqTypeByNts = {
    id?: string;
    name?: string;
    tips?: string;
    recipientTips?: string;
    notifyExample?: string;
};

/**
 * @description 新增场景
 * @summary Response data types
 * @url [ post ] /api/Scenes
 * @bizName ntsBiz
 */
export type PostScenesResTypeByNts = {
    id: string;
    name: string;
    tips: string;
    recipientTips: string;
    notifyExample: string;
};

/**
 * @description 获取scheme
 * @summary Request data types
 * @url [ get ] /api/Schemes/{id}
 * @bizName ntsBiz
 */
export type GetSchemesIdReqTypeByNts = {
    id: string;
};

/**
 * @description 获取scheme
 * @summary Response data types
 * @url [ get ] /api/Schemes/{id}
 * @bizName ntsBiz
 */
export type GetSchemesIdResTypeByNts = {
    id: string;
    scene: string;
    key: string;
    type: 0 | 1 | 2;
    allowNull: boolean;
    example: string;
    operator: 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512;
    analysisType: 0 | 1;
    isDynamicRangeValue: boolean;
    rangeValues: Array<{
        id: string;
        name: string;
    }>;
    description: string;
};

/**
 * @description 更新scheme
 * @summary Request data types
 * @url [ put ] /api/Schemes/{id}
 * @bizName ntsBiz
 */
export type PutSchemesIdReqTypeByNts = {
    id: string;
    scene?: string;
    key?: string;
    type?: 0 | 1 | 2;
    allowNull?: boolean;
    description?: string;
    example?: string;
    operator?: 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512;
    isDynamicRangeValue?: boolean;
    rangeValue?: any;
};

/**
 * @description 删除scheme
 * @summary Request data types
 * @url [ delete ] /api/Schemes/{id}
 * @bizName ntsBiz
 */
export type DeleteSchemesIdReqTypeByNts = {
    id: string;
};

/**
 * @description 搜索scheme
 * @summary Request data types
 * @url [ get ] /api/Schemes
 * @bizName ntsBiz
 */
export type GetSchemesReqTypeByNts = {
    scene?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 搜索scheme
 * @summary Response data types
 * @url [ get ] /api/Schemes
 * @bizName ntsBiz
 */
export type GetSchemesResTypeByNts = {
    totalCount: number;
    records: Array<{
        id: string;
        scene: string;
        key: string;
        type: 0 | 1 | 2;
        allowNull: boolean;
        example: string;
        operator: 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512;
        analysisType: 0 | 1;
        isDynamicRangeValue: boolean;
        rangeValues: Array<{
            id: string;
            name: string;
        }>;
        description: string;
    }>;
};

/**
 * @description 新增scheme
 * @summary Request data types
 * @url [ post ] /api/Schemes
 * @bizName ntsBiz
 */
export type PostSchemesReqTypeByNts = {
    scene?: string;
    key?: string;
    type?: 0 | 1 | 2;
    allowNull?: boolean;
    description?: string;
    example?: string;
    operator?: 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512;
    isDynamicRangeValue?: boolean;
    rangeValue?: any;
};

/**
 * @description 新增scheme
 * @summary Response data types
 * @url [ post ] /api/Schemes
 * @bizName ntsBiz
 */
export type PostSchemesResTypeByNts = {
    id: string;
    scene: string;
    key: string;
    type: 0 | 1 | 2;
    allowNull: boolean;
    example: string;
    operator: 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512;
    analysisType: 0 | 1;
    isDynamicRangeValue: boolean;
    rangeValues: Array<{
        id: string;
        name: string;
    }>;
    description: string;
};

/**
 * @description 获取模板
 * @summary Request data types
 * @url [ get ] /api/Templates/{id}
 * @bizName ntsBiz
 */
export type GetTemplatesIdReqTypeByNts = {
    id: string;
};

/**
 * @description 获取模板
 * @summary Response data types
 * @url [ get ] /api/Templates/{id}
 * @bizName ntsBiz
 */
export type GetTemplatesIdResTypeByNts = {
    id: string;
    scene: string;
    notifyType: 1 | 2 | 4 | 8 | 16 | 32;
    content: string;
    isEnable: boolean;
    isDefault: boolean;
    sender: string;
    defaultWebHookUrl: string;
    title: string;
    secondTitle: string;
    jumpUrl: string;
    recipients: Array<{
        name: string;
        userId: string;
        mobile: string;
        mail: string;
        groupId: string;
    }>;
    priorityPhoneType: string;
};

/**
 * @description 更新模板
 * @summary Request data types
 * @url [ put ] /api/Templates/{id}
 * @bizName ntsBiz
 */
export type PutTemplatesIdReqTypeByNts = {
    id: string;
    scene: string;
    notifyType?: 1 | 2 | 4 | 8 | 16 | 32;
    content: string;
    isEnable?: boolean;
    isDefault?: boolean;
    sender?: string;
    defaultWebHookUrl?: string;
    title?: string;
    secondTitle?: string;
    jumpUrl?: string;
    recipients?: Array<{
        name: string;
        userId: string;
        mobile: string;
        mail: string;
        groupId: string;
    }>;
    priorityPhoneType?: string;
};

/**
 * @description 删除模板
 * @summary Request data types
 * @url [ delete ] /api/Templates/{id}
 * @bizName ntsBiz
 */
export type DeleteTemplatesIdReqTypeByNts = {
    id: string;
};

/**
 * @description 搜索模板
 * @summary Request data types
 * @url [ get ] /api/Templates
 * @bizName ntsBiz
 */
export type GetTemplatesReqTypeByNts = {
    keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 搜索模板
 * @summary Response data types
 * @url [ get ] /api/Templates
 * @bizName ntsBiz
 */
export type GetTemplatesResTypeByNts = {
    totalCount: number;
    records: Array<{
        id: string;
        scene: string;
        notifyType: 1 | 2 | 4 | 8 | 16 | 32;
        content: string;
        isEnable: boolean;
        isDefault: boolean;
        sender: string;
        defaultWebHookUrl: string;
        title: string;
        secondTitle: string;
        jumpUrl: string;
        recipients: Array<{
            name: string;
            userId: string;
            mobile: string;
            mail: string;
            groupId: string;
        }>;
        priorityPhoneType: string;
    }>;
};

/**
 * @description 新增模板
 * @summary Request data types
 * @url [ post ] /api/Templates
 * @bizName ntsBiz
 */
export type PostTemplatesReqTypeByNts = {
    scene: string;
    notifyType?: 1 | 2 | 4 | 8 | 16 | 32;
    content: string;
    isEnable?: boolean;
    isDefault?: boolean;
    sender?: string;
    defaultWebHookUrl?: string;
    title?: string;
    secondTitle?: string;
    jumpUrl?: string;
    recipients?: Array<{
        name: string;
        userId: string;
        mobile: string;
        mail: string;
        groupId: string;
    }>;
    priorityPhoneType?: string;
};

/**
 * @description 新增模板
 * @summary Response data types
 * @url [ post ] /api/Templates
 * @bizName ntsBiz
 */
export type PostTemplatesResTypeByNts = {
    id: string;
    scene: string;
    notifyType: 1 | 2 | 4 | 8 | 16 | 32;
    content: string;
    isEnable: boolean;
    isDefault: boolean;
    sender: string;
    defaultWebHookUrl: string;
    title: string;
    secondTitle: string;
    jumpUrl: string;
    recipients: Array<{
        name: string;
        userId: string;
        mobile: string;
        mail: string;
        groupId: string;
    }>;
    priorityPhoneType: string;
};

/**
 * @description 通知
 * @summary Request data types
 * @url [ post ] /api/WebHooks
 * @bizName ntsBiz
 */
export type PostWebHooksReqTypeByNts = {
    scene?: string;
    notifyType?: 1 | 2 | 4 | 8 | 16 | 32;
    notifyContent?: Record<string, any>;
    recipients?: Array<{
        name: string;
        userId: string;
        mobile: string;
        mail: string;
        groupId: string;
    }>;
    jumpUrl?: string;
    title?: string;
    data?: Record<string, any>;
    id?: string;
    source?: string;
    sendOperation?: 0 | 1;
    bizId?: string;
};

/**
 * @description 通知
 * @summary Response data types
 * @url [ post ] /api/WebHooks
 * @bizName ntsBiz
 */
export type PostWebHooksResTypeByNts = {
    taskId: string;
    message: string;
    success: boolean;
};
