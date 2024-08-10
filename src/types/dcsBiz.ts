/**
 * @description 获取行业分类列表
 * @summary Response data types
 * @url [ get ] /api/Businesses
 * @bizName dcsBiz
 */
export type GetBusinessesResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        totalMetadataCount: number;
    }>;
};

/**
 * @description 查询质检规则
 * @summary Request data types
 * @url [ get ] /api/CheckRule/Search
 * @bizName dcsBiz
 */
export type GetCheckRuleSearchReqTypeByDcs = {
    Name?: string;
    TypeId?: string;
    UpdateTimeBegin?: string;
    UpdateTimeEnd?: string;
    Updater?: string;
    Sort?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 查询质检规则
 * @summary Response data types
 * @url [ get ] /api/CheckRule/Search
 * @bizName dcsBiz
 */
export type GetCheckRuleSearchResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        resourceId: string;
        createTime: string;
        updateTime: string;
        creator: string;
        updater: string;
        note: string;
        ruleConfig: string;
        ruleTypeId: string;
        relationMetadataIds: Array<string>;
        checkRuleRelationMetadatas: Array<{
            metadataId: string;
            dataItemDescription: {
                title: string;
                name: string;
                description: string;
                type: string;
                defaultValue: string;
                length: string;
                isRequired: boolean;
                isPrimaryKey: boolean;
                checkRulesIds: Array<string>;
            };
        }>;
        checkRuleType: {
            id: string;
            name: string;
            resourceId: string;
            createTime: string;
            updateTime: string;
            creator: string;
            updater: string;
            ruleType: 0 | 1 | 2;
            configTemplate: string;
            description: string;
        };
    }>;
};

/**
 * @description 查询质检规则的关联元数据信息
 * @summary Request data types
 * @url [ get ] /api/CheckRule/{resourceId}/CheckRuleRelationMetadata
 * @bizName dcsBiz
 */
export type GetCheckRuleResourceIdCheckRuleRelationMetadataReqTypeByDcs = {
    resourceId: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 查询质检规则的关联元数据信息
 * @summary Response data types
 * @url [ get ] /api/CheckRule/{resourceId}/CheckRuleRelationMetadata
 * @bizName dcsBiz
 */
export type GetCheckRuleResourceIdCheckRuleRelationMetadataResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        resourceId: string;
        name: string;
        tags: Array<{
            id: string;
            name: string;
            resourceId: string;
            color: string;
            definition: string;
            updater: string;
            updateTime: string;
            tagType: 0 | 1 | 2;
        }>;
        note: string;
    }>;
};

/**
 * @description 添加质检规则
 * @summary Request data types
 * @url [ post ] /api/CheckRule
 * @bizName dcsBiz
 */
export type PostCheckRuleReqTypeByDcs = {
    name: string;
    creator?: string;
    updater?: string;
    note?: string;
    ruleConfig: string;
    ruleTypeId: string;
    relationMetadataIds?: Array<string>;
};

/**
 * @description 添加质检规则
 * @summary Response data types
 * @url [ post ] /api/CheckRule
 * @bizName dcsBiz
 */
export type PostCheckRuleResTypeByDcs = {
    id: string;
    name: string;
    resourceId: string;
    createTime: string;
    updateTime: string;
    creator: string;
    updater: string;
    note: string;
    ruleConfig: string;
    ruleTypeId: string;
    relationMetadataIds: Array<string>;
    checkRuleRelationMetadatas: Array<{
        metadataId: string;
        dataItemDescription: {
            title: string;
            name: string;
            description: string;
            type: string;
            defaultValue: string;
            length: string;
            isRequired: boolean;
            isPrimaryKey: boolean;
            checkRulesIds: Array<string>;
        };
    }>;
    checkRuleType: {
        id: string;
        name: string;
        resourceId: string;
        createTime: string;
        updateTime: string;
        creator: string;
        updater: string;
        ruleType: 0 | 1 | 2;
        configTemplate: string;
        description: string;
    };
};

/**
 * @description 修改质检规则
 * @summary Request data types
 * @url [ put ] /api/CheckRule/{resourceId}
 * @bizName dcsBiz
 */
export type PutCheckRuleResourceIdReqTypeByDcs = {
    resourceId: string;
    id: string;
    name: string;
    createTime?: string;
    updateTime?: string;
    creator?: string;
    updater?: string;
    note?: string;
    ruleConfig: string;
    ruleTypeId: string;
    relationMetadataIds?: Array<string>;
};

/**
 * @description 删除质检规则
 * @summary Request data types
 * @url [ delete ] /api/CheckRule/{resourceId}
 * @bizName dcsBiz
 */
export type DeleteCheckRuleResourceIdReqTypeByDcs = {
    resourceId: string;
};

/**
 * @description 获取质检规则
 * @summary Response data types
 * @url [ get ] /api/CheckRuleType
 * @bizName dcsBiz
 */
export type GetCheckRuleTypeResTypeByDcs = {
    id: string;
    name: string;
    resourceId: string;
    createTime: string;
    updateTime: string;
    creator: string;
    updater: string;
    ruleType: 0 | 1 | 2;
    configTemplate: string;
    description: string;
};

/**
 * @description 按照条件查询质检任务列表
 * @summary Request data types
 * @url [ get ] /api/CheckTaskInfo/Search
 * @bizName dcsBiz
 */
export type GetCheckTaskInfoSearchReqTypeByDcs = {
    Name?: string;
    MetadataName?: string;
    UpdateTimeBegin?: string;
    UpdateTimeEnd?: string;
    ExecuteStatus?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 按照条件查询质检任务列表
 * @summary Response data types
 * @url [ get ] /api/CheckTaskInfo/Search
 * @bizName dcsBiz
 */
export type GetCheckTaskInfoSearchResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        resourceId: string;
        createTime: string;
        updateTime: string;
        creator: string;
        updater: string;
        checkMetadataId: string;
        checkMetadataName: string;
        cronExpression: string;
        note: string;
        allCheckDataCount: number;
        allCheckErrorDataCount: number;
        allCheckCount: number;
        lastCheckDataCount: number;
        checkAvgRating: number;
        lastCheckTime: string;
        timeConsuming: number;
        isErrors: boolean;
    }>;
};

/**
 * @description 按照Id查询质检任务详情信息
 * @summary Request data types
 * @url [ get ] /api/CheckTaskInfo/{id}/Detail
 * @bizName dcsBiz
 */
export type GetCheckTaskInfoIdDetailReqTypeByDcs = {
    id: string;
};

/**
 * @description 按照Id查询质检任务详情信息
 * @summary Response data types
 * @url [ get ] /api/CheckTaskInfo/{id}/Detail
 * @bizName dcsBiz
 */
export type GetCheckTaskInfoIdDetailResTypeByDcs = {
    id: string;
    name: string;
    resourceId: string;
    createTime: string;
    updateTime: string;
    creator: string;
    updater: string;
    checkMetadataId: string;
    checkMetadataName: string;
    cronExpression: string;
    note: string;
    allCheckDataCount: number;
    allCheckErrorDataCount: number;
    allCheckCount: number;
    lastCheckDataCount: number;
    checkAvgRating: number;
    lastCheckTime: string;
    timeConsuming: number;
    isErrors: boolean;
};

/**
 * @description 立即执行作业
 * @summary Request data types
 * @url [ put ] /api/CheckTaskInfo/SingleExecution
 * @bizName dcsBiz
 */
export type PutCheckTaskInfoSingleExecutionReqTypeByDcs = {
    id: string;
};

/**
 * @description 按照条件查询质检任务执行记录列表
 * @summary Request data types
 * @url [ get ] /api/CheckTaskInfo/{id}/CheckTaskExecuteRecord/Search
 * @bizName dcsBiz
 */
export type GetCheckTaskInfoIdCheckTaskExecuteRecordSearchReqTypeByDcs = {
    id: string;
    MetadataId?: string;
    StartTimeBegin?: string;
    StartTimeEnd?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 按照条件查询质检任务执行记录列表
 * @summary Response data types
 * @url [ get ] /api/CheckTaskInfo/{id}/CheckTaskExecuteRecord/Search
 * @bizName dcsBiz
 */
export type GetCheckTaskInfoIdCheckTaskExecuteRecordSearchResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        checkTaskId: string;
        checkRowCount: number;
        checkErrorCount: number;
        checkRating: number;
        startTime: string;
        endTime: string;
        timeConsumer: number;
        checkMetadaName: string;
        isErrors: boolean;
    }>;
};

/**
 * @description 查询质检任务执行记录单个信息
 * @summary Request data types
 * @url [ get ] /api/CheckTaskInfo/CheckTaskExecuteRecord/{id}
 * @bizName dcsBiz
 */
export type GetCheckTaskInfoCheckTaskExecuteRecordIdReqTypeByDcs = {
    id: string;
};

/**
 * @description 查询质检任务执行记录单个信息
 * @summary Response data types
 * @url [ get ] /api/CheckTaskInfo/CheckTaskExecuteRecord/{id}
 * @bizName dcsBiz
 */
export type GetCheckTaskInfoCheckTaskExecuteRecordIdResTypeByDcs = {
    id: string;
    checkTaskId: string;
    checkRowCount: number;
    checkErrorCount: number;
    checkRating: number;
    startTime: string;
    endTime: string;
    timeConsumer: number;
    checkMetadaName: string;
    isErrors: boolean;
};

/**
 * @description 查询质检任务搜索执行记录
 * @summary Request data types
 * @url [ get ] /api/CheckTaskInfo/CheckTaskExecuteRecord/Search
 * @bizName dcsBiz
 */
export type GetCheckTaskInfoCheckTaskExecuteRecordSearchReqTypeByDcs = {
    MetadataId?: string;
    StartTimeBegin?: string;
    StartTimeEnd?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 查询质检任务搜索执行记录
 * @summary Response data types
 * @url [ get ] /api/CheckTaskInfo/CheckTaskExecuteRecord/Search
 * @bizName dcsBiz
 */
export type GetCheckTaskInfoCheckTaskExecuteRecordSearchResTypeByDcs = {
    id: string;
    checkTaskId: string;
    checkRowCount: number;
    checkErrorCount: number;
    checkRating: number;
    startTime: string;
    endTime: string;
    timeConsumer: number;
    checkMetadaName: string;
    isErrors: boolean;
};

/**
 * @description 分页查询质检任务检测详情出错的数据列表
 * @summary Request data types
 * @url [ get ] /api/CheckTaskInfo/CheckTaskExecuteRecord/{id}/Errors
 * @bizName dcsBiz
 */
export type GetCheckTaskInfoCheckTaskExecuteRecordIdErrorsReqTypeByDcs = {
    id: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 分页查询质检任务检测详情出错的数据列表
 * @summary Response data types
 * @url [ get ] /api/CheckTaskInfo/CheckTaskExecuteRecord/{id}/Errors
 * @bizName dcsBiz
 */
export type GetCheckTaskInfoCheckTaskExecuteRecordIdErrorsResTypeByDcs = {
    totalCount: number;
    records: Array<{
        checkTaskExecuteRecordId: string;
        id: string;
        ruleType: 0 | 1 | 2;
        ruleName: string;
        checkStartTime: string;
        checkEndTime: string;
        primaryKey: string;
        fieldName: string;
        fieldTitle: string;
        fieldValue: string;
        configInfo: string;
        isCheckSuccess: boolean;
    }>;
};

/**
 * @description
 * @summary Request data types
 * @url [ get ] /api/DataSource
 * @bizName dcsBiz
 */
export type GetDataSourceReqTypeByDcs = {
    DataSourceName?: string;
    DatabaseName?: string;
    Ip?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description
 * @summary Response data types
 * @url [ get ] /api/DataSource
 * @bizName dcsBiz
 */
export type GetDataSourceResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        resourceId: string;
        host: string;
        port: number;
        account: string;
        password: string;
        schema: string;
        dbType: 0 | 1 | 2 | 3 | 4 | 5;
        updateTIme: string;
    }>;
};

/**
 * @description 添加数据源
 * @summary Request data types
 * @url [ post ] /api/DataSource
 * @bizName dcsBiz
 */
export type PostDataSourceReqTypeByDcs = {
    name: string;
    host: string;
    port: number;
    account: string;
    password: string;
    schema?: string;
    dbType?: 0 | 1 | 2 | 3 | 4 | 5;
    resourceId?: string;
};

/**
 * @description 添加数据源
 * @summary Response data types
 * @url [ post ] /api/DataSource
 * @bizName dcsBiz
 */
export type PostDataSourceResTypeByDcs = {
    id: string;
    name: string;
    resourceId: string;
    host: string;
    port: number;
    account: string;
    password: string;
    schema: string;
    dbType: 0 | 1 | 2 | 3 | 4 | 5;
    updateTIme: string;
};

/**
 * @description 修改数据源
 * @summary Request data types
 * @url [ put ] /api/DataSource/{resourceId}
 * @bizName dcsBiz
 */
export type PutDataSourceResourceIdReqTypeByDcs = {
    resourceId: string;
    name: string;
    host: string;
    port: number;
    account: string;
    password: string;
    schema?: string;
    dbType?: 0 | 1 | 2 | 3 | 4 | 5;
};

/**
 * @description 删除数据源
 * @summary Request data types
 * @url [ delete ] /api/DataSource/{resourceId}
 * @bizName dcsBiz
 */
export type DeleteDataSourceResourceIdReqTypeByDcs = {
    resourceId: string;
};

/**
 * @description 提供数据库信息
 * @summary Request data types
 * @url [ get ] /api/DataSource/{resourceId}/DbInfos
 * @bizName dcsBiz
 */
export type GetDataSourceResourceIdDbInfosReqTypeByDcs = {
    resourceId: string;
};

/**
 * @description 提供数据库信息
 * @summary Response data types
 * @url [ get ] /api/DataSource/{resourceId}/DbInfos
 * @bizName dcsBiz
 */
export type GetDataSourceResourceIdDbInfosResTypeByDcs = {
    totalCount: number;
    records: Array<{
        schema: string;
        tables: Array<string>;
    }>;
};

/**
 * @description 抓取数据源提供的元数据
 * @summary Request data types
 * @url [ post ] /api/DataSource/{resourceId}/DbInfos
 * @bizName dcsBiz
 */
export type PostDataSourceResourceIdDbInfosReqTypeByDcs = {
    resourceId: string;
};

/**
 * @description 抓取数据源提供的元数据
 * @summary Response data types
 * @url [ post ] /api/DataSource/{resourceId}/DbInfos
 * @bizName dcsBiz
 */
export type PostDataSourceResourceIdDbInfosResTypeByDcs = {
    id: string;
    name: string;
    resourceId: string;
    code: string;
    description: string;
    keyWords: string;
    developmentMode: 0;
    updateFrequency: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    createTime: string;
    updateTime: string;
    publishTime: string;
    resourceType: 0;
    administrativeMatters: string;
    resourceStatus: 0 | 1 | 2;
    language: string;
    onlineResourceLink: string;
    sourceSystem: string;
    spaceScope: string;
    timeScope: string;
    openLevel: 0;
    dataItemDescriptions: Array<{
        title: string;
        name: string;
        description: string;
        type: string;
        defaultValue: string;
        length: string;
        isRequired: boolean;
        isPrimaryKey: boolean;
        checkRulesIds: Array<string>;
    }>;
    displayDataItemDescriptions: Array<{
        name: string;
        enableEdit: boolean;
    }>;
    tagIds: Array<string>;
    kettleJobIds: Array<string>;
    businessOut: {
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        totalMetadataCount: number;
    };
    serviceOut: {
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        totalMetadataCount: number;
    };
    domainOut: {
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        totalMetadataCount: number;
    };
    departmentOut: {
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        address: string;
        areaCode: string;
        totalMetadataCount: number;
    };
    districtOut: {
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        code: string;
        totalMetadataCount: number;
    };
    themeOut: {
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        code: string;
        totalMetadataCount: number;
        projectId: string;
    };
    dockInfo: {
        dockStatus: 0 | 1 | 2 | 3;
        logs: Array<string>;
    };
    projectInfo: {
        id: string;
        name: string;
        resourceId: string;
        description: string;
    };
    totalDownloads: number;
    totalViews: number;
    totalDataItems: number;
    fileSize: number;
    fileCount: number;
    dataSize: number;
    checkErrorDataCount: number;
    dataRating: number;
    bindTable: string;
    bindSchema: string;
    dasJobName: string;
    dataSourceId: string;
    selectDataItems: Record<string, any>;
};

/**
 * @description 分页获取行政部门列表
 * @summary Request data types
 * @url [ get ] /api/Departments
 * @bizName dcsBiz
 */
export type GetDepartmentsReqTypeByDcs = {
    keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 分页获取行政部门列表
 * @summary Response data types
 * @url [ get ] /api/Departments
 * @bizName dcsBiz
 */
export type GetDepartmentsResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        address: string;
        areaCode: string;
        totalMetadataCount: number;
    }>;
};

/**
 * @description 新增行政部门
 * @summary Request data types
 * @url [ post ] /api/Departments
 * @bizName dcsBiz
 */
export type PostDepartmentsReqTypeByDcs = {
    name: string;
    parentId?: string;
    description?: string;
    address?: string;
    resourceId?: string;
    areaCode?: string;
};

/**
 * @description 新增行政部门
 * @summary Response data types
 * @url [ post ] /api/Departments
 * @bizName dcsBiz
 */
export type PostDepartmentsResTypeByDcs = {
    id: string;
    name: string;
    resourceId: string;
    parentId: string;
    description: string;
    address: string;
    areaCode: string;
    totalMetadataCount: number;
};

/**
 * @description 获取行政部门详情（支持资源Id）
 * @summary Request data types
 * @url [ get ] /api/Departments/{id}
 * @bizName dcsBiz
 */
export type GetDepartmentsIdReqTypeByDcs = {
    id: string;
};

/**
 * @description 获取行政部门详情（支持资源Id）
 * @summary Response data types
 * @url [ get ] /api/Departments/{id}
 * @bizName dcsBiz
 */
export type GetDepartmentsIdResTypeByDcs = {
    id: string;
    name: string;
    resourceId: string;
    parentId: string;
    description: string;
    address: string;
    areaCode: string;
    totalMetadataCount: number;
};

/**
 * @description 修改行政部门
 * @summary Request data types
 * @url [ put ] /api/Departments/{id}
 * @bizName dcsBiz
 */
export type PutDepartmentsIdReqTypeByDcs = {
    id: string;
    name: string;
    parentId?: string;
    description?: string;
    address?: string;
    resourceId?: string;
    areaCode?: string;
};

/**
 * @description 删除行政部门
 * @summary Request data types
 * @url [ delete ] /api/Departments/{id}
 * @bizName dcsBiz
 */
export type DeleteDepartmentsIdReqTypeByDcs = {
    id: string;
};

/**
 * @description 批量Ids/ResourceIDs获取部门集合
 * @summary Request data types
 * @url [ post ] /api/Departments/batch
 * @bizName dcsBiz
 */
export type PostDepartmentsBatchReqTypeByDcs = {
    pageIndex?: number;
    pageSize?: number;
    ids?: Array<string>;
};

/**
 * @description 批量Ids/ResourceIDs获取部门集合
 * @summary Response data types
 * @url [ post ] /api/Departments/batch
 * @bizName dcsBiz
 */
export type PostDepartmentsBatchResTypeByDcs = {
    totalCount: number;
    records: Array<{
        name: string;
        parentId: string;
        description: string;
        address: string;
        resourceId: string;
        areaCode: string;
        id: string;
    }>;
};

/**
 * @description 导入行政部门
 * @summary Request data types
 * @url [ post ] /api/Departments/import
 * @bizName dcsBiz
 */
export type PostDepartmentsImportReqTypeByDcs = {
    importDepartments: Array<{
        name: string;
        parentId: string;
        description: string;
        address: string;
        resourceId: string;
        areaCode: string;
        id: string;
    }>;
};

/**
 * @description 获取行政区域列表
 * @summary Response data types
 * @url [ get ] /api/Districts
 * @bizName dcsBiz
 */
export type GetDistrictsResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        code: string;
        totalMetadataCount: number;
    }>;
};

/**
 * @description 分页获取领域列表
 * @summary Request data types
 * @url [ get ] /api/Domains
 * @bizName dcsBiz
 */
export type GetDomainsReqTypeByDcs = {
    keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 分页获取领域列表
 * @summary Response data types
 * @url [ get ] /api/Domains
 * @bizName dcsBiz
 */
export type GetDomainsResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        totalMetadataCount: number;
    }>;
};

/**
 * @description 新增领域
 * @summary Request data types
 * @url [ post ] /api/Domains
 * @bizName dcsBiz
 */
export type PostDomainsReqTypeByDcs = {
    name: string;
    resourceId?: string;
    description?: string;
    parentId?: string;
};

/**
 * @description 新增领域
 * @summary Response data types
 * @url [ post ] /api/Domains
 * @bizName dcsBiz
 */
export type PostDomainsResTypeByDcs = {
    id: string;
    name: string;
    resourceId: string;
    parentId: string;
    description: string;
    totalMetadataCount: number;
};

/**
 * @description 获取领域详情（支持资源Id）
 * @summary Request data types
 * @url [ get ] /api/Domains/{id}
 * @bizName dcsBiz
 */
export type GetDomainsIdReqTypeByDcs = {
    id: string;
};

/**
 * @description 获取领域详情（支持资源Id）
 * @summary Response data types
 * @url [ get ] /api/Domains/{id}
 * @bizName dcsBiz
 */
export type GetDomainsIdResTypeByDcs = {
    id: string;
    name: string;
    resourceId: string;
    parentId: string;
    description: string;
    totalMetadataCount: number;
};

/**
 * @description 修改领域
 * @summary Request data types
 * @url [ put ] /api/Domains/{id}
 * @bizName dcsBiz
 */
export type PutDomainsIdReqTypeByDcs = {
    id: string;
    name: string;
    resourceId?: string;
    description?: string;
    parentId?: string;
};

/**
 * @description 删除领域
 * @summary Request data types
 * @url [ delete ] /api/Domains/{id}
 * @bizName dcsBiz
 */
export type DeleteDomainsIdReqTypeByDcs = {
    id: string;
};

/**
 * @description 批量Ids/ResourceIDs获取领域集合
 * @summary Request data types
 * @url [ post ] /api/Domains/batch
 * @bizName dcsBiz
 */
export type PostDomainsBatchReqTypeByDcs = {
    pageIndex?: number;
    pageSize?: number;
    ids?: Array<string>;
};

/**
 * @description 批量Ids/ResourceIDs获取领域集合
 * @summary Response data types
 * @url [ post ] /api/Domains/batch
 * @bizName dcsBiz
 */
export type PostDomainsBatchResTypeByDcs = {
    totalCount: number;
    records: Array<{
        name: string;
        resourceId: string;
        description: string;
        parentId: string;
        id: string;
    }>;
};

/**
 * @description 导入行政部门
 * @summary Request data types
 * @url [ post ] /api/Domains/import
 * @bizName dcsBiz
 */
export type PostDomainsImportReqTypeByDcs = {
    importDomains: Array<{
        name: string;
        resourceId: string;
        description: string;
        parentId: string;
        id: string;
    }>;
};

/**
 * @description 导出数据需求目录
 * @summary Request data types
 * @url [ get ] /api/Export/ExportDataRequestCategory
 * @bizName dcsBiz
 */
export type GetExportExportDataRequestCategoryReqTypeByDcs = {
    projectTagId: string;
};

/**
 * @description 获取ETLJob的实体列表
 * @summary Request data types
 * @url [ get ] /api/KettleJobs
 * @bizName dcsBiz
 */
export type GetKettleJobsReqTypeByDcs = {
    page?: number;
    per_page?: number;
};

/**
 * @description 获取ETLJob的实体列表
 * @summary Response data types
 * @url [ get ] /api/KettleJobs
 * @bizName dcsBiz
 */
export type GetKettleJobsResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        resourceId: string;
        source: string;
        sourceType: 0 | 1 | 2 | 3;
        relateSources: Array<{
            metadataId: string;
            database: string;
            table: string;
            description: string;
        }>;
        destination: string;
        relateDestinations: Array<{
            metadataId: string;
            database: string;
            table: string;
            description: string;
        }>;
        description: string;
        createTime: string;
        updateTime: string;
        startTime: string;
        lastSyncTime: string;
        syncMetadata: string;
        syncMetadataId: string;
        status: string;
        timeConsuming: number;
        errors: number;
        cronExpression: string;
        syncDataCount: number;
        isRun: boolean;
        fileName: string;
        fileInfos: Array<string>;
        tags: Array<string>;
    }>;
};

/**
 * @description 添加EtlJob
 * @summary Request data types
 * @url [ post ] /api/KettleJobs
 * @bizName dcsBiz
 */
export type PostKettleJobsReqTypeByDcs = {
    name?: string;
    resourceId?: string;
    description?: string;
    cron?: string;
    isRun?: boolean;
    tags?: Array<string>;
};

/**
 * @description 添加EtlJob
 * @summary Response data types
 * @url [ post ] /api/KettleJobs
 * @bizName dcsBiz
 */
export type PostKettleJobsResTypeByDcs = {
    id: string;
    name: string;
    resourceId: string;
    source: string;
    sourceType: 0 | 1 | 2 | 3;
    relateSources: Array<{
        metadataId: string;
        database: string;
        table: string;
        description: string;
    }>;
    destination: string;
    relateDestinations: Array<{
        metadataId: string;
        database: string;
        table: string;
        description: string;
    }>;
    description: string;
    createTime: string;
    updateTime: string;
    startTime: string;
    lastSyncTime: string;
    syncMetadata: string;
    syncMetadataId: string;
    status: string;
    timeConsuming: number;
    errors: number;
    cronExpression: string;
    syncDataCount: number;
    isRun: boolean;
    fileName: string;
    fileInfos: Array<string>;
    tags: Array<string>;
};

/**
 * @description 更新EtlJob
 * @summary Request data types
 * @url [ put ] /api/KettleJobs/{resourceId}
 * @bizName dcsBiz
 */
export type PutKettleJobsResourceIdReqTypeByDcs = {
    resourceId: string;
    name?: string;
    description?: string;
    cron?: string;
    isRun?: boolean;
    tags?: Array<string>;
};

/**
 * @description 删除EtlJob
 * @summary Request data types
 * @url [ delete ] /api/KettleJobs/{resourceId}
 * @bizName dcsBiz
 */
export type DeleteKettleJobsResourceIdReqTypeByDcs = {
    resourceId: string;
};

/**
 * @description 查询ETLJob的实体列表
 * @summary Request data types
 * @url [ get ] /api/KettleJobs/Search
 * @bizName dcsBiz
 */
export type GetKettleJobsSearchReqTypeByDcs = {
    KettleJobName?: string;
    Source?: string;
    Destination?: string;
    ExecuteStatus?: number;
    OrderRule?: number;
    SourceType?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 查询ETLJob的实体列表
 * @summary Response data types
 * @url [ get ] /api/KettleJobs/Search
 * @bizName dcsBiz
 */
export type GetKettleJobsSearchResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        resourceId: string;
        source: string;
        sourceType: 0 | 1 | 2 | 3;
        relateSources: Array<{
            metadataId: string;
            database: string;
            table: string;
            description: string;
        }>;
        destination: string;
        relateDestinations: Array<{
            metadataId: string;
            database: string;
            table: string;
            description: string;
        }>;
        description: string;
        createTime: string;
        updateTime: string;
        startTime: string;
        lastSyncTime: string;
        syncMetadata: string;
        syncMetadataId: string;
        status: string;
        timeConsuming: number;
        errors: number;
        cronExpression: string;
        syncDataCount: number;
        isRun: boolean;
        fileName: string;
        fileInfos: Array<string>;
        tags: Array<string>;
    }>;
};

/**
 * @description 刷新状态
 * @summary Response data types
 * @url [ put ] /api/KettleJobs/refresh/status
 * @bizName dcsBiz
 */
export type PutKettleJobsRefreshStatusResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        resourceId: string;
        source: string;
        sourceType: 0 | 1 | 2 | 3;
        relateSources: Array<{
            metadataId: string;
            database: string;
            table: string;
            description: string;
        }>;
        destination: string;
        relateDestinations: Array<{
            metadataId: string;
            database: string;
            table: string;
            description: string;
        }>;
        description: string;
        createTime: string;
        updateTime: string;
        startTime: string;
        lastSyncTime: string;
        syncMetadata: string;
        syncMetadataId: string;
        status: string;
        timeConsuming: number;
        errors: number;
        cronExpression: string;
        syncDataCount: number;
        isRun: boolean;
        fileName: string;
        fileInfos: Array<string>;
        tags: Array<string>;
    }>;
};

/**
 * @description Etl具体信息
 * @summary Request data types
 * @url [ get ] /api/KettleJobs/{id}
 * @bizName dcsBiz
 */
export type GetKettleJobsIdReqTypeByDcs = {
    id: string;
};

/**
 * @description Etl具体信息
 * @summary Response data types
 * @url [ get ] /api/KettleJobs/{id}
 * @bizName dcsBiz
 */
export type GetKettleJobsIdResTypeByDcs = {
    id: string;
    name: string;
    resourceId: string;
    source: string;
    sourceType: 0 | 1 | 2 | 3;
    relateSources: Array<{
        metadataId: string;
        database: string;
        table: string;
        description: string;
    }>;
    destination: string;
    relateDestinations: Array<{
        metadataId: string;
        database: string;
        table: string;
        description: string;
    }>;
    description: string;
    createTime: string;
    updateTime: string;
    startTime: string;
    lastSyncTime: string;
    syncMetadata: string;
    syncMetadataId: string;
    status: string;
    timeConsuming: number;
    errors: number;
    cronExpression: string;
    syncDataCount: number;
    isRun: boolean;
    fileName: string;
    fileInfos: Array<string>;
    tags: Array<string>;
    executeCount: number;
    creator: string;
    updater: string;
    syncAllDataCount: number;
};

/**
 * @description 返回执行记录列表
 * @summary Request data types
 * @url [ get ] /api/KettleJobs/{id}/Records
 * @bizName dcsBiz
 */
export type GetKettleJobsIdRecordsReqTypeByDcs = {
    id: string;
    StartTimeBegin?: string;
    StartTimeEnd?: string;
    ExecuteStatus?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 返回执行记录列表
 * @summary Response data types
 * @url [ get ] /api/KettleJobs/{id}/Records
 * @bizName dcsBiz
 */
export type GetKettleJobsIdRecordsResTypeByDcs = {
    totalCount: number;
    records: Array<{
        idJob: string;
        channelId: string;
        jobName: string;
        status: string;
        linesRead: number;
        linesWritten: number;
        linesUpdated: number;
        linesInput: number;
        linesOutput: number;
        linesRejected: number;
        errors: number;
        startDate: string;
        endDate: string;
        logDate: string;
        depDate: string;
        replayDate: string;
        executingServer: string;
        executingUser: string;
        startJobEntry: string;
        client: string;
        log: string;
        timeConsuming: number;
    }>;
};

/**
 * @description 根据元数据ID返回ETL执行记录
 * @summary Request data types
 * @url [ get ] /api/KettleJobs/Records/Search
 * @bizName dcsBiz
 */
export type GetKettleJobsRecordsSearchReqTypeByDcs = {
    MetadataId?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 根据元数据ID返回ETL执行记录
 * @summary Response data types
 * @url [ get ] /api/KettleJobs/Records/Search
 * @bizName dcsBiz
 */
export type GetKettleJobsRecordsSearchResTypeByDcs = {
    totalCount: number;
    records: Array<{
        idJob: string;
        channelId: string;
        jobName: string;
        status: string;
        linesRead: number;
        linesWritten: number;
        linesUpdated: number;
        linesInput: number;
        linesOutput: number;
        linesRejected: number;
        errors: number;
        startDate: string;
        endDate: string;
        logDate: string;
        depDate: string;
        replayDate: string;
        executingServer: string;
        executingUser: string;
        startJobEntry: string;
        client: string;
        log: string;
        timeConsuming: number;
    }>;
};

/**
 * @description 获取ETL作业的标签
 * @summary Response data types
 * @url [ get ] /api/KettleJobs/Tags
 * @bizName dcsBiz
 */
export type GetKettleJobsTagsResTypeByDcs = {
    tags: Array<string>;
};

/**
 * @description 导出所有资源库的json数据
 * @summary Request data types
 * @url [ post ] /api/KettleJobs/Export
 * @bizName dcsBiz
 */
export type PostKettleJobsExportReqTypeByDcs = {
    fileName?: string;
    tags: Array<string>;
};

/**
 * @description 运行作业
 * @summary Request data types
 * @url [ put ] /api/KettleJobs/{id}/Run
 * @bizName dcsBiz
 */
export type PutKettleJobsIdRunReqTypeByDcs = {
    id: string;
};

/**
 * @description 停止作业
 * @summary Request data types
 * @url [ put ] /api/KettleJobs/{id}/Stop
 * @bizName dcsBiz
 */
export type PutKettleJobsIdStopReqTypeByDcs = {
    id: string;
};

/**
 * @description 立即执行作业
 * @summary Request data types
 * @url [ put ] /api/KettleJobs/SingleExecution
 * @bizName dcsBiz
 */
export type PutKettleJobsSingleExecutionReqTypeByDcs = {
    id: string;
};

/**
 * @description 导出某个ETL作业的前10条执行日志记录
 * @summary Request data types
 * @url [ get ] /api/KettleJobs/{id}/Records/Export
 * @bizName dcsBiz
 */
export type GetKettleJobsIdRecordsExportReqTypeByDcs = {
    id: string;
};

/**
 * @description 导出ETL执行记录的日志记录
 * @summary Request data types
 * @url [ get ] /api/KettleJobs/Records/{id}/Export
 * @bizName dcsBiz
 */
export type GetKettleJobsRecordsIdExportReqTypeByDcs = {
    id: string;
};

/**
 * @description 获取元数据详情
 * @summary Request data types
 * @url [ get ] /api/Metadata/{id}
 * @bizName dcsBiz
 */
export type GetMetadataIdReqTypeByDcs = {
    id: string;
};

/**
 * @description 获取元数据详情
 * @summary Response data types
 * @url [ get ] /api/Metadata/{id}
 * @bizName dcsBiz
 */
export type GetMetadataIdResTypeByDcs = {
    id: string;
    name: string;
    resourceId: string;
    code: string;
    description: string;
    keyWords: string;
    developmentMode: 0;
    updateFrequency: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    createTime: string;
    updateTime: string;
    publishTime: string;
    resourceType: 0;
    administrativeMatters: string;
    resourceStatus: 0 | 1 | 2;
    language: string;
    onlineResourceLink: string;
    sourceSystem: string;
    spaceScope: string;
    timeScope: string;
    openLevel: 0;
    dataItemDescriptions: Array<{
        title: string;
        name: string;
        description: string;
        type: string;
        defaultValue: string;
        length: string;
        isRequired: boolean;
        isPrimaryKey: boolean;
        checkRulesIds: Array<string>;
    }>;
    displayDataItemDescriptions: Array<{
        name: string;
        enableEdit: boolean;
    }>;
    tagIds: Array<string>;
    kettleJobIds: Array<string>;
    businessOut: {
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        totalMetadataCount: number;
    };
    serviceOut: {
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        totalMetadataCount: number;
    };
    domainOut: {
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        totalMetadataCount: number;
    };
    departmentOut: {
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        address: string;
        areaCode: string;
        totalMetadataCount: number;
    };
    districtOut: {
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        code: string;
        totalMetadataCount: number;
    };
    themeOut: {
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        code: string;
        totalMetadataCount: number;
        projectId: string;
    };
    dockInfo: {
        dockStatus: 0 | 1 | 2 | 3;
        logs: Array<string>;
    };
    projectInfo: {
        id: string;
        name: string;
        resourceId: string;
        description: string;
    };
    totalDownloads: number;
    totalViews: number;
    totalDataItems: number;
    fileSize: number;
    fileCount: number;
    dataSize: number;
    checkErrorDataCount: number;
    dataRating: number;
    bindTable: string;
    bindSchema: string;
    dasJobName: string;
    dataSourceId: string;
    selectDataItems: Record<string, any>;
};

/**
 * @description 修改元数据
 * @summary Request data types
 * @url [ put ] /api/Metadata/{id}
 * @bizName dcsBiz
 */
export type PutMetadataIdReqTypeByDcs = {
    id: string;
    name?: string;
    resourceId?: string;
    parentId?: string;
    code?: string;
    description?: string;
    keyWords?: string;
    developmentMode?: 0;
    updateFrequency?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    createTime?: string;
    updateTime?: string;
    publishTime?: string;
    resourceType?: 0;
    administrativeMatters?: string;
    resourceStatus?: 0 | 1 | 2;
    language?: string;
    onlineResourceLink?: string;
    sourceSystem?: string;
    spaceScope?: string;
    timeScope?: string;
    openLevel?: 0;
    dataItemDescriptions?: Array<{
        title: string;
        name: string;
        description: string;
        type: string;
        defaultValue: string;
        length: string;
        isRequired: boolean;
        isPrimaryKey: boolean;
        checkRulesIds: Array<string>;
    }>;
    displayDataItemDescriptions?: Array<{
        name: string;
        enableEdit: boolean;
    }>;
    tagIds?: Array<string>;
    kettleJobIds?: Array<string>;
    businessResourceId?: string;
    serviceResourceId?: string;
    domainResourceId?: string;
    departmentResourceId?: string;
    districtResourceId?: string;
    themeResourceId?: string;
    dockInfo?: {
        dockStatus: 0 | 1 | 2 | 3;
        logs: Array<string>;
    };
    projectInfo?: {
        id: string;
        name: string;
        resourceId: string;
        description: string;
    };
    totalDownloads?: number;
    totalViews?: number;
    totalDataItems?: number;
    fileSize?: number;
    fileCount?: number;
    dataSize?: number;
    checkErrorDataCount?: number;
    dataRating?: number;
    bindTable?: string;
    bindSchema?: string;
    dasJobName?: string;
    dataSourceId?: string;
};

/**
 * @description 删除元数据
 * @summary Request data types
 * @url [ delete ] /api/Metadata/{id}
 * @bizName dcsBiz
 */
export type DeleteMetadataIdReqTypeByDcs = {
    id: string;
};

/**
 * @description 元数据对接统计
 * @summary Response data types
 * @url [ get ] /api/Metadata/dockInfo
 * @bizName dcsBiz
 */
export type GetMetadataDockInfoResTypeByDcs = {
    dockInfoItems: {
        notStart: number;
        inProgress: number;
        finished: number;
        closed: number;
    };
};

/**
 * @description 根据（领域、主题、行业、服务、部门、行政区域）查询元数据（分页）
 * @summary Request data types
 * @url [ get ] /api/Metadata
 * @bizName dcsBiz
 */
export type GetMetadataReqTypeByDcs = {
    TagIds?: Array<string>;
    KeyWord?: string;
    DomainResourceId?: string;
    ThemeResourceId?: string;
    BusinessResourceId?: string;
    DepartmentResourceId?: string;
    DistrictResourceId?: string;
    ServiceResourceId?: string;
    UpdateTimeBegin?: string;
    UpdateTimeEnd?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 根据（领域、主题、行业、服务、部门、行政区域）查询元数据（分页）
 * @summary Response data types
 * @url [ get ] /api/Metadata
 * @bizName dcsBiz
 */
export type GetMetadataResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        resourceId: string;
        code: string;
        description: string;
        keyWords: string;
        developmentMode: 0;
        updateFrequency: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        createTime: string;
        updateTime: string;
        publishTime: string;
        resourceType: 0;
        administrativeMatters: string;
        resourceStatus: 0 | 1 | 2;
        language: string;
        onlineResourceLink: string;
        sourceSystem: string;
        spaceScope: string;
        timeScope: string;
        openLevel: 0;
        dataItemDescriptions: Array<{
            title: string;
            name: string;
            description: string;
            type: string;
            defaultValue: string;
            length: string;
            isRequired: boolean;
            isPrimaryKey: boolean;
            checkRulesIds: Array<string>;
        }>;
        displayDataItemDescriptions: Array<{
            name: string;
            enableEdit: boolean;
        }>;
        tagIds: Array<string>;
        kettleJobIds: Array<string>;
        businessOut: {
            id: string;
            name: string;
            resourceId: string;
            parentId: string;
            description: string;
            totalMetadataCount: number;
        };
        serviceOut: {
            id: string;
            name: string;
            resourceId: string;
            parentId: string;
            description: string;
            totalMetadataCount: number;
        };
        domainOut: {
            id: string;
            name: string;
            resourceId: string;
            parentId: string;
            description: string;
            totalMetadataCount: number;
        };
        departmentOut: {
            id: string;
            name: string;
            resourceId: string;
            parentId: string;
            description: string;
            address: string;
            areaCode: string;
            totalMetadataCount: number;
        };
        districtOut: {
            id: string;
            name: string;
            resourceId: string;
            parentId: string;
            description: string;
            code: string;
            totalMetadataCount: number;
        };
        themeOut: {
            id: string;
            name: string;
            resourceId: string;
            parentId: string;
            description: string;
            code: string;
            totalMetadataCount: number;
            projectId: string;
        };
        dockInfo: {
            dockStatus: 0 | 1 | 2 | 3;
            logs: Array<string>;
        };
        projectInfo: {
            id: string;
            name: string;
            resourceId: string;
            description: string;
        };
        totalDownloads: number;
        totalViews: number;
        totalDataItems: number;
        fileSize: number;
        fileCount: number;
        dataSize: number;
        checkErrorDataCount: number;
        dataRating: number;
        bindTable: string;
        bindSchema: string;
        dasJobName: string;
        dataSourceId: string;
        selectDataItems: Record<string, any>;
    }>;
};

/**
 * @description 添加元数据
 * @summary Request data types
 * @url [ post ] /api/Metadata
 * @bizName dcsBiz
 */
export type PostMetadataReqTypeByDcs = {
    name?: string;
    resourceId?: string;
    parentId?: string;
    code?: string;
    description?: string;
    keyWords?: string;
    developmentMode?: 0;
    updateFrequency?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    createTime?: string;
    updateTime?: string;
    publishTime?: string;
    resourceType?: 0;
    administrativeMatters?: string;
    resourceStatus?: 0 | 1 | 2;
    language?: string;
    onlineResourceLink?: string;
    sourceSystem?: string;
    spaceScope?: string;
    timeScope?: string;
    openLevel?: 0;
    dataItemDescriptions?: Array<{
        title: string;
        name: string;
        description: string;
        type: string;
        defaultValue: string;
        length: string;
        isRequired: boolean;
        isPrimaryKey: boolean;
        checkRulesIds: Array<string>;
    }>;
    displayDataItemDescriptions?: Array<{
        name: string;
        enableEdit: boolean;
    }>;
    tagIds?: Array<string>;
    kettleJobIds?: Array<string>;
    businessResourceId?: string;
    serviceResourceId?: string;
    domainResourceId?: string;
    departmentResourceId?: string;
    districtResourceId?: string;
    themeResourceId?: string;
    dockInfo?: {
        dockStatus: 0 | 1 | 2 | 3;
        logs: Array<string>;
    };
    projectInfo?: {
        id: string;
        name: string;
        resourceId: string;
        description: string;
    };
    totalDownloads?: number;
    totalViews?: number;
    totalDataItems?: number;
    fileSize?: number;
    fileCount?: number;
    dataSize?: number;
    checkErrorDataCount?: number;
    dataRating?: number;
    bindTable?: string;
    bindSchema?: string;
    dasJobName?: string;
    dataSourceId?: string;
};

/**
 * @description 根据（领域、主题、行业、服务、部门、行政区域、标签）查询元数据
 * @summary Request data types
 * @url [ post ] /api/Metadata/FindPageBySearch
 * @bizName dcsBiz
 */
export type PostMetadataFindPageBySearchReqTypeByDcs = {
    pageIndex?: number;
    pageSize?: number;
    keyWord?: string;
    domainResourceId?: string;
    themeResourceId?: string;
    businessResourceId?: string;
    departmentResourceId?: string;
    districtResourceId?: string;
    serviceResourceId?: string;
    updateTimeBegin?: string;
    updateTimeEnd?: string;
    tagIds?: Array<string>;
};

/**
 * @description 根据（领域、主题、行业、服务、部门、行政区域、标签）查询元数据
 * @summary Response data types
 * @url [ post ] /api/Metadata/FindPageBySearch
 * @bizName dcsBiz
 */
export type PostMetadataFindPageBySearchResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        resourceId: string;
        code: string;
        description: string;
        keyWords: string;
        developmentMode: 0;
        updateFrequency: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        createTime: string;
        updateTime: string;
        publishTime: string;
        resourceType: 0;
        administrativeMatters: string;
        resourceStatus: 0 | 1 | 2;
        language: string;
        onlineResourceLink: string;
        sourceSystem: string;
        spaceScope: string;
        timeScope: string;
        openLevel: 0;
        dataItemDescriptions: Array<{
            title: string;
            name: string;
            description: string;
            type: string;
            defaultValue: string;
            length: string;
            isRequired: boolean;
            isPrimaryKey: boolean;
            checkRulesIds: Array<string>;
        }>;
        displayDataItemDescriptions: Array<{
            name: string;
            enableEdit: boolean;
        }>;
        tagIds: Array<string>;
        kettleJobIds: Array<string>;
        businessOut: {
            id: string;
            name: string;
            resourceId: string;
            parentId: string;
            description: string;
            totalMetadataCount: number;
        };
        serviceOut: {
            id: string;
            name: string;
            resourceId: string;
            parentId: string;
            description: string;
            totalMetadataCount: number;
        };
        domainOut: {
            id: string;
            name: string;
            resourceId: string;
            parentId: string;
            description: string;
            totalMetadataCount: number;
        };
        departmentOut: {
            id: string;
            name: string;
            resourceId: string;
            parentId: string;
            description: string;
            address: string;
            areaCode: string;
            totalMetadataCount: number;
        };
        districtOut: {
            id: string;
            name: string;
            resourceId: string;
            parentId: string;
            description: string;
            code: string;
            totalMetadataCount: number;
        };
        themeOut: {
            id: string;
            name: string;
            resourceId: string;
            parentId: string;
            description: string;
            code: string;
            totalMetadataCount: number;
            projectId: string;
        };
        dockInfo: {
            dockStatus: 0 | 1 | 2 | 3;
            logs: Array<string>;
        };
        projectInfo: {
            id: string;
            name: string;
            resourceId: string;
            description: string;
        };
        totalDownloads: number;
        totalViews: number;
        totalDataItems: number;
        fileSize: number;
        fileCount: number;
        dataSize: number;
        checkErrorDataCount: number;
        dataRating: number;
        bindTable: string;
        bindSchema: string;
        dasJobName: string;
        dataSourceId: string;
        selectDataItems: Record<string, any>;
    }>;
};

/**
 * @description 查询元数据对应库表记录
 * @summary Request data types
 * @url [ post ] /api/Metadata/{id}/Records
 * @bizName dcsBiz
 */
export type PostMetadataIdRecordsReqTypeByDcs = {
    id: string;
    pageIndex?: number;
    pageSize?: number;
    keyword?: string;
    isDisplayColumn?: boolean;
    selectDataItems?: Record<string, any>;
};

/**
 * @description 查询元数据对应库表记录
 * @summary Response data types
 * @url [ post ] /api/Metadata/{id}/Records
 * @bizName dcsBiz
 */
export type PostMetadataIdRecordsResTypeByDcs = {
    totalCount: number;
    records: Array<any>;
};

/**
 * @description 获取全部项目列表
 * @summary Request data types
 * @url [ get ] /api/Projects
 * @bizName dcsBiz
 */
export type GetProjectsReqTypeByDcs = {
    keyword?: string;
};

/**
 * @description 获取全部项目列表
 * @summary Response data types
 * @url [ get ] /api/Projects
 * @bizName dcsBiz
 */
export type GetProjectsResTypeByDcs = {
    id: string;
    name: string;
    resourceId: string;
    parentId: string;
    totalMetadataCount: number;
    description: string;
    themes: Array<{
        id: string;
        name: string;
    }>;
};

/**
 * @description 新增项目
 * @summary Request data types
 * @url [ post ] /api/Projects
 * @bizName dcsBiz
 */
export type PostProjectsReqTypeByDcs = {
    name: string;
    resourceId?: string;
    description?: string;
    parentId?: string;
};

/**
 * @description 新增项目
 * @summary Response data types
 * @url [ post ] /api/Projects
 * @bizName dcsBiz
 */
export type PostProjectsResTypeByDcs = {
    id: string;
    name: string;
    resourceId: string;
    parentId: string;
    totalMetadataCount: number;
    description: string;
    themes: Array<{
        id: string;
        name: string;
    }>;
};

/**
 * @description 获取项目（支持资源Id）
 * @summary Request data types
 * @url [ get ] /api/Projects/{id}
 * @bizName dcsBiz
 */
export type GetProjectsIdReqTypeByDcs = {
    id: string;
};

/**
 * @description 获取项目（支持资源Id）
 * @summary Response data types
 * @url [ get ] /api/Projects/{id}
 * @bizName dcsBiz
 */
export type GetProjectsIdResTypeByDcs = {
    id: string;
    name: string;
    resourceId: string;
    parentId: string;
    totalMetadataCount: number;
    description: string;
    themes: Array<{
        id: string;
        name: string;
    }>;
};

/**
 * @description 修改项目
 * @summary Request data types
 * @url [ put ] /api/Projects/{id}
 * @bizName dcsBiz
 */
export type PutProjectsIdReqTypeByDcs = {
    id: string;
    name: string;
    resourceId?: string;
    description?: string;
    parentId?: string;
};

/**
 * @description 删除项目
 * @summary Request data types
 * @url [ delete ] /api/Projects/{id}
 * @bizName dcsBiz
 */
export type DeleteProjectsIdReqTypeByDcs = {
    id: string;
};

/**
 * @description 获取项目详情（支持资源Id）
 * @summary Request data types
 * @url [ get ] /api/Projects/{id}/detail
 * @bizName dcsBiz
 */
export type GetProjectsIdDetailReqTypeByDcs = {
    id: string;
};

/**
 * @description 获取项目详情（支持资源Id）
 * @summary Response data types
 * @url [ get ] /api/Projects/{id}/detail
 * @bizName dcsBiz
 */
export type GetProjectsIdDetailResTypeByDcs = {
    id: string;
    name: string;
    resourceId: string;
    themes: Array<{
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        projectId: string;
    }>;
    parentId: string;
    description: string;
};

/**
 * @description 导入项目专题
 * @summary Request data types
 * @url [ post ] /api/Projects/import
 * @bizName dcsBiz
 */
export type PostProjectsImportReqTypeByDcs = {
    importProjects: Array<{
        id: string;
        name: string;
        resourceId: string;
        themes: Array<{
            id: string;
            name: string;
            resourceId: string;
            parentId: string;
            description: string;
            projectId: string;
        }>;
        parentId: string;
        description: string;
    }>;
};

/**
 * @description 根据项目Id创建模板资源库
 * @summary Request data types
 * @url [ post ] /api/Projects/{id}/defaultResourceDbs
 * @bizName dcsBiz
 */
export type PostProjectsIdDefaultResourceDbsReqTypeByDcs = {
    id: string;
};

/**
 * @description 查询资源库树
 * @summary Request data types
 * @url [ get ] /api/ResourceDb/tree
 * @bizName dcsBiz
 */
export type GetResourceDbTreeReqTypeByDcs = {
    ProductId?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 查询资源库树
 * @summary Response data types
 * @url [ get ] /api/ResourceDb/tree
 * @bizName dcsBiz
 */
export type GetResourceDbTreeResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        parentId: string;
        index: number;
        dataType: 1 | 2;
        nodeType: 0 | 1;
        resourceId: string;
        number: string;
        productId: string;
    }>;
};

/**
 * @description 查询符合条件的资源库
 * @summary Request data types
 * @url [ get ] /api/ResourceDb
 * @bizName dcsBiz
 */
export type GetResourceDbReqTypeByDcs = {
    keyword?: string;
    IsDisplayColumn?: boolean;
    SelectDataItems?: object;
    page?: number;
    per_page?: number;
};

/**
 * @description 查询符合条件的资源库
 * @summary Response data types
 * @url [ get ] /api/ResourceDb
 * @bizName dcsBiz
 */
export type GetResourceDbResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        resourceId: string;
        parentName: string;
        parentId: string;
        resourceDbType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        relationship: {
            metadataId: string;
            metadataName: string;
            metadataDescription: string;
            layerId: string;
        };
        extension: string;
        productId: string;
    }>;
};

/**
 * @description 添加资源库
 * @summary Request data types
 * @url [ post ] /api/ResourceDb
 * @bizName dcsBiz
 */
export type PostResourceDbReqTypeByDcs = {
    name?: string;
    resourceId?: string;
    parentId?: string;
    resourceDbType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    relationship?: {
        metadataId: string;
        metadataName: string;
        metadataDescription: string;
        layerId: string;
    };
    extension?: string;
    productId?: string;
};

/**
 * @description 查询资源库详情
 * @summary Request data types
 * @url [ get ] /api/ResourceDb/{id}
 * @bizName dcsBiz
 */
export type GetResourceDbIdReqTypeByDcs = {
    id: string;
};

/**
 * @description 查询资源库详情
 * @summary Response data types
 * @url [ get ] /api/ResourceDb/{id}
 * @bizName dcsBiz
 */
export type GetResourceDbIdResTypeByDcs = {
    id: string;
    name: string;
    resourceId: string;
    parentName: string;
    parentId: string;
    resourceDbType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    relationship: {
        metadataId: string;
        metadataName: string;
        metadataDescription: string;
        layerId: string;
    };
    extension: string;
    productId: string;
};

/**
 * @description 修改资源库
 * @summary Request data types
 * @url [ put ] /api/ResourceDb/{id}
 * @bizName dcsBiz
 */
export type PutResourceDbIdReqTypeByDcs = {
    id: string;
    name?: string;
    resourceId?: string;
    parentId?: string;
    resourceDbType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    relationship?: {
        metadataId: string;
        metadataName: string;
        metadataDescription: string;
        layerId: string;
    };
    extension?: string;
    productId?: string;
};

/**
 * @description 删除资源库
 * @summary Request data types
 * @url [ delete ] /api/ResourceDb/{id}
 * @bizName dcsBiz
 */
export type DeleteResourceDbIdReqTypeByDcs = {
    id: string;
};

/**
 * @description 批量Ids/ResourceIDs/Numbers获取资源库集合（带元数据和数据源,ps:Number为图层LayerId）
 * @summary Request data types
 * @url [ post ] /api/ResourceDb/search/batch
 * @bizName dcsBiz
 */
export type PostResourceDbSearchBatchReqTypeByDcs = {
    pageIndex?: number;
    pageSize?: number;
    ids?: Array<string>;
    productId?: string;
};

/**
 * @description 批量Ids/ResourceIDs/Numbers获取资源库集合（带元数据和数据源,ps:Number为图层LayerId）
 * @summary Response data types
 * @url [ post ] /api/ResourceDb/search/batch
 * @bizName dcsBiz
 */
export type PostResourceDbSearchBatchResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        resourceId: string;
        name: string;
        parentId: string;
        resourceDbType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        relationship: {
            metadata: {
                name: string;
                resourceId: string;
                parentId: string;
                code: string;
                description: string;
                keyWords: string;
                developmentMode: 0;
                updateFrequency: 0 | 1 | 2 | 3 | 4 | 5 | 6;
                createTime: string;
                updateTime: string;
                publishTime: string;
                resourceType: 0;
                administrativeMatters: string;
                resourceStatus: 0 | 1 | 2;
                language: string;
                onlineResourceLink: string;
                sourceSystem: string;
                spaceScope: string;
                timeScope: string;
                openLevel: 0;
                dataItemDescriptions: Array<{
                    title: string;
                    name: string;
                    description: string;
                    type: string;
                    defaultValue: string;
                    length: string;
                    isRequired: boolean;
                    isPrimaryKey: boolean;
                    checkRulesIds: Array<string>;
                }>;
                displayDataItemDescriptions: Array<{
                    name: string;
                    enableEdit: boolean;
                }>;
                tagIds: Array<string>;
                kettleJobIds: Array<string>;
                businessResourceId: string;
                serviceResourceId: string;
                domainResourceId: string;
                departmentResourceId: string;
                districtResourceId: string;
                themeResourceId: string;
                dockInfo: {
                    dockStatus: 0 | 1 | 2 | 3;
                    logs: Array<string>;
                };
                projectInfo: {
                    id: string;
                    name: string;
                    resourceId: string;
                    description: string;
                };
                totalDownloads: number;
                totalViews: number;
                totalDataItems: number;
                fileSize: number;
                fileCount: number;
                dataSize: number;
                checkErrorDataCount: number;
                dataRating: number;
                bindTable: string;
                bindSchema: string;
                dasJobName: string;
                dataSourceId: string;
                id: string;
                dataSource: {
                    name: string;
                    resourceId: string;
                    host: string;
                    port: number;
                    account: string;
                    password: string;
                    schema: string;
                    dbType: 0 | 1 | 2 | 3 | 4 | 5;
                    updateTIme: string;
                    id: string;
                };
            };
            metadataName: string;
            metadataDescription: string;
            layerId: string;
        };
        extension: string;
        productId: string;
    }>;
};

/**
 * @description 通过productId获取资源库集合（带元数据和数据源）
 * @summary Request data types
 * @url [ post ] /api/ResourceDb/search
 * @bizName dcsBiz
 */
export type PostResourceDbSearchReqTypeByDcs = {
    pageIndex?: number;
    pageSize?: number;
    productId?: string;
};

/**
 * @description 通过productId获取资源库集合（带元数据和数据源）
 * @summary Response data types
 * @url [ post ] /api/ResourceDb/search
 * @bizName dcsBiz
 */
export type PostResourceDbSearchResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        resourceId: string;
        name: string;
        parentId: string;
        resourceDbType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        relationship: {
            metadata: {
                name: string;
                resourceId: string;
                parentId: string;
                code: string;
                description: string;
                keyWords: string;
                developmentMode: 0;
                updateFrequency: 0 | 1 | 2 | 3 | 4 | 5 | 6;
                createTime: string;
                updateTime: string;
                publishTime: string;
                resourceType: 0;
                administrativeMatters: string;
                resourceStatus: 0 | 1 | 2;
                language: string;
                onlineResourceLink: string;
                sourceSystem: string;
                spaceScope: string;
                timeScope: string;
                openLevel: 0;
                dataItemDescriptions: Array<{
                    title: string;
                    name: string;
                    description: string;
                    type: string;
                    defaultValue: string;
                    length: string;
                    isRequired: boolean;
                    isPrimaryKey: boolean;
                    checkRulesIds: Array<string>;
                }>;
                displayDataItemDescriptions: Array<{
                    name: string;
                    enableEdit: boolean;
                }>;
                tagIds: Array<string>;
                kettleJobIds: Array<string>;
                businessResourceId: string;
                serviceResourceId: string;
                domainResourceId: string;
                departmentResourceId: string;
                districtResourceId: string;
                themeResourceId: string;
                dockInfo: {
                    dockStatus: 0 | 1 | 2 | 3;
                    logs: Array<string>;
                };
                projectInfo: {
                    id: string;
                    name: string;
                    resourceId: string;
                    description: string;
                };
                totalDownloads: number;
                totalViews: number;
                totalDataItems: number;
                fileSize: number;
                fileCount: number;
                dataSize: number;
                checkErrorDataCount: number;
                dataRating: number;
                bindTable: string;
                bindSchema: string;
                dasJobName: string;
                dataSourceId: string;
                id: string;
                dataSource: {
                    name: string;
                    resourceId: string;
                    host: string;
                    port: number;
                    account: string;
                    password: string;
                    schema: string;
                    dbType: 0 | 1 | 2 | 3 | 4 | 5;
                    updateTIme: string;
                    id: string;
                };
            };
            metadataName: string;
            metadataDescription: string;
            layerId: string;
        };
        extension: string;
        productId: string;
    }>;
};

/**
 * @description 导出资源库
 * @summary Request data types
 * @url [ post ] /api/ResourceDb/export
 * @bizName dcsBiz
 */
export type PostResourceDbExportReqTypeByDcs = {
    productId?: string;
};

/**
 * @description 导出资源库
 * @summary Response data types
 * @url [ post ] /api/ResourceDb/export
 * @bizName dcsBiz
 */
export type PostResourceDbExportResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        resourceId: string;
        name: string;
        parentId: string;
        resourceDbType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        relationship: {
            metadata: {
                name: string;
                resourceId: string;
                parentId: string;
                code: string;
                description: string;
                keyWords: string;
                developmentMode: 0;
                updateFrequency: 0 | 1 | 2 | 3 | 4 | 5 | 6;
                createTime: string;
                updateTime: string;
                publishTime: string;
                resourceType: 0;
                administrativeMatters: string;
                resourceStatus: 0 | 1 | 2;
                language: string;
                onlineResourceLink: string;
                sourceSystem: string;
                spaceScope: string;
                timeScope: string;
                openLevel: 0;
                dataItemDescriptions: Array<{
                    title: string;
                    name: string;
                    description: string;
                    type: string;
                    defaultValue: string;
                    length: string;
                    isRequired: boolean;
                    isPrimaryKey: boolean;
                    checkRulesIds: Array<string>;
                }>;
                displayDataItemDescriptions: Array<{
                    name: string;
                    enableEdit: boolean;
                }>;
                tagIds: Array<string>;
                kettleJobIds: Array<string>;
                businessResourceId: string;
                serviceResourceId: string;
                domainResourceId: string;
                departmentResourceId: string;
                districtResourceId: string;
                themeResourceId: string;
                dockInfo: {
                    dockStatus: 0 | 1 | 2 | 3;
                    logs: Array<string>;
                };
                projectInfo: {
                    id: string;
                    name: string;
                    resourceId: string;
                    description: string;
                };
                totalDownloads: number;
                totalViews: number;
                totalDataItems: number;
                fileSize: number;
                fileCount: number;
                dataSize: number;
                checkErrorDataCount: number;
                dataRating: number;
                bindTable: string;
                bindSchema: string;
                dasJobName: string;
                dataSourceId: string;
                id: string;
                dataSource: {
                    name: string;
                    resourceId: string;
                    host: string;
                    port: number;
                    account: string;
                    password: string;
                    schema: string;
                    dbType: 0 | 1 | 2 | 3 | 4 | 5;
                    updateTIme: string;
                    id: string;
                };
            };
            metadataName: string;
            metadataDescription: string;
            layerId: string;
        };
        extension: string;
        productId: string;
    }>;
};

/**
 * @description 导入资源库（带元数据和数据源）
 * @summary Request data types
 * @url [ post ] /api/ResourceDb/import
 * @bizName dcsBiz
 */
export type PostResourceDbImportReqTypeByDcs = {
    importResourceDbs?: Array<{
        id: string;
        resourceId: string;
        name: string;
        parentId: string;
        resourceDbType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        relationship: {
            metadata: {
                name: string;
                resourceId: string;
                parentId: string;
                code: string;
                description: string;
                keyWords: string;
                developmentMode: 0;
                updateFrequency: 0 | 1 | 2 | 3 | 4 | 5 | 6;
                createTime: string;
                updateTime: string;
                publishTime: string;
                resourceType: 0;
                administrativeMatters: string;
                resourceStatus: 0 | 1 | 2;
                language: string;
                onlineResourceLink: string;
                sourceSystem: string;
                spaceScope: string;
                timeScope: string;
                openLevel: 0;
                dataItemDescriptions: Array<{
                    title: string;
                    name: string;
                    description: string;
                    type: string;
                    defaultValue: string;
                    length: string;
                    isRequired: boolean;
                    isPrimaryKey: boolean;
                    checkRulesIds: Array<string>;
                }>;
                displayDataItemDescriptions: Array<{
                    name: string;
                    enableEdit: boolean;
                }>;
                tagIds: Array<string>;
                kettleJobIds: Array<string>;
                businessResourceId: string;
                serviceResourceId: string;
                domainResourceId: string;
                departmentResourceId: string;
                districtResourceId: string;
                themeResourceId: string;
                dockInfo: {
                    dockStatus: 0 | 1 | 2 | 3;
                    logs: Array<string>;
                };
                projectInfo: {
                    id: string;
                    name: string;
                    resourceId: string;
                    description: string;
                };
                totalDownloads: number;
                totalViews: number;
                totalDataItems: number;
                fileSize: number;
                fileCount: number;
                dataSize: number;
                checkErrorDataCount: number;
                dataRating: number;
                bindTable: string;
                bindSchema: string;
                dasJobName: string;
                dataSourceId: string;
                id: string;
                dataSource: {
                    name: string;
                    resourceId: string;
                    host: string;
                    port: number;
                    account: string;
                    password: string;
                    schema: string;
                    dbType: 0 | 1 | 2 | 3 | 4 | 5;
                    updateTIme: string;
                    id: string;
                };
            };
            metadataName: string;
            metadataDescription: string;
            layerId: string;
        };
        extension: string;
        productId: string;
    }>;
};

/**
 * @description 聚合资源库为父级
 * @summary Request data types
 * @url [ post ] /api/ResourceDb/children/mergence
 * @bizName dcsBiz
 */
export type PostResourceDbChildrenMergenceReqTypeByDcs = {
    pageIndex?: number;
    pageSize?: number;
    ids?: Array<string>;
    productId?: string;
};

/**
 * @description 聚合资源库为父级
 * @summary Response data types
 * @url [ post ] /api/ResourceDb/children/mergence
 * @bizName dcsBiz
 */
export type PostResourceDbChildrenMergenceResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        resourceId: string;
        number: string;
        idPath: string;
        namePath: string;
        isLeaf: boolean;
    }>;
};

/**
 * @description 查询资源库关联的元数据
 * @summary Request data types
 * @url [ get ] /api/ResourceDb/{id}/Metadata
 * @bizName dcsBiz
 */
export type GetResourceDbIdMetadataReqTypeByDcs = {
    id: string;
};

/**
 * @description 查询资源库关联的元数据
 * @summary Response data types
 * @url [ get ] /api/ResourceDb/{id}/Metadata
 * @bizName dcsBiz
 */
export type GetResourceDbIdMetadataResTypeByDcs = {
    id: string;
    name: string;
    resourceId: string;
    code: string;
    description: string;
    keyWords: string;
    developmentMode: 0;
    updateFrequency: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    createTime: string;
    updateTime: string;
    publishTime: string;
    resourceType: 0;
    administrativeMatters: string;
    resourceStatus: 0 | 1 | 2;
    language: string;
    onlineResourceLink: string;
    sourceSystem: string;
    spaceScope: string;
    timeScope: string;
    openLevel: 0;
    dataItemDescriptions: Array<{
        title: string;
        name: string;
        description: string;
        type: string;
        defaultValue: string;
        length: string;
        isRequired: boolean;
        isPrimaryKey: boolean;
        checkRulesIds: Array<string>;
    }>;
    displayDataItemDescriptions: Array<{
        name: string;
        enableEdit: boolean;
    }>;
    tagIds: Array<string>;
    kettleJobIds: Array<string>;
    businessOut: {
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        totalMetadataCount: number;
    };
    serviceOut: {
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        totalMetadataCount: number;
    };
    domainOut: {
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        totalMetadataCount: number;
    };
    departmentOut: {
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        address: string;
        areaCode: string;
        totalMetadataCount: number;
    };
    districtOut: {
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        code: string;
        totalMetadataCount: number;
    };
    themeOut: {
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        code: string;
        totalMetadataCount: number;
        projectId: string;
    };
    dockInfo: {
        dockStatus: 0 | 1 | 2 | 3;
        logs: Array<string>;
    };
    projectInfo: {
        id: string;
        name: string;
        resourceId: string;
        description: string;
    };
    totalDownloads: number;
    totalViews: number;
    totalDataItems: number;
    fileSize: number;
    fileCount: number;
    dataSize: number;
    checkErrorDataCount: number;
    dataRating: number;
    bindTable: string;
    bindSchema: string;
    dasJobName: string;
    dataSourceId: string;
    selectDataItems: Record<string, any>;
};

/**
 * @description 查询外部数据
 * @summary Request data types
 * @url [ post ] /api/ResourceDb/{id}/ExternalResource/Search
 * @bizName dcsBiz
 */
export type PostResourceDbIdExternalResourceSearchReqTypeByDcs = {
    id: string;
    pageIndex?: number;
    pageSize?: number;
    keyword?: string;
    isDisplayColumn?: boolean;
    selectDataItems?: Record<string, any>;
};

/**
 * @description 查询外部数据
 * @summary Response data types
 * @url [ post ] /api/ResourceDb/{id}/ExternalResource/Search
 * @bizName dcsBiz
 */
export type PostResourceDbIdExternalResourceSearchResTypeByDcs = {
    totalCount: number;
    records: Array<any>;
};

/**
 * @description 统计资源库子项对应的外部数据总量
 * @summary Request data types
 * @url [ get ] /api/ResourceDb/{id}/ExternalResource/Statistic
 * @bizName dcsBiz
 */
export type GetResourceDbIdExternalResourceStatisticReqTypeByDcs = {
    id: string;
    areaCode?: string;
};

/**
 * @description 统计资源库子项对应的外部数据总量
 * @summary Response data types
 * @url [ get ] /api/ResourceDb/{id}/ExternalResource/Statistic
 * @bizName dcsBiz
 */
export type GetResourceDbIdExternalResourceStatisticResTypeByDcs = {
    id: string;
    parentId: string;
    name: string;
    amount: number;
    isLeaf: boolean;
};

/**
 * @description 新增外部数据
 * @summary Request data types
 * @url [ post ] /api/ResourceDb/{id}/ExternalResource
 * @bizName dcsBiz
 */
export type PostResourceDbIdExternalResourceReqTypeByDcs = {
    id: string;
    externalResourceObject: Record<string, any>;
};

/**
 * @description 修改外部数据
 * @summary Request data types
 * @url [ put ] /api/ResourceDb/{id}/ExternalResource
 * @bizName dcsBiz
 */
export type PutResourceDbIdExternalResourceReqTypeByDcs = {
    id: string;
    externalResourceObject: Record<string, any>;
};

/**
 * @description 删除外部数据
 * @summary Request data types
 * @url [ delete ] /api/ResourceDb/{id}/ExternalResource
 * @bizName dcsBiz
 */
export type DeleteResourceDbIdExternalResourceReqTypeByDcs = {
    id: string;
    primaryKey: string;
    primaryValue: string;
};

/**
 * @description 导出资源库条目
 * @summary Request data types
 * @url [ post ] /api/ResourceDb/export/ExternalData
 * @bizName dcsBiz
 */
export type PostResourceDbExportExternalDataReqTypeByDcs = {
    productId?: string;
    resourceDbId?: string;
};

/**
 * @description 导出资源库条目
 * @summary Response data types
 * @url [ post ] /api/ResourceDb/export/ExternalData
 * @bizName dcsBiz
 */
export type PostResourceDbExportExternalDataResTypeByDcs = {
    externalDataEntries: Array<{
        id: string;
        dataSourceId: string;
        externalResourceObjects: Array<{
            externalResourceObject: Record<string, any>;
        }>;
    }>;
    resourceDbs: Array<{
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        resourceDbType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        relationship: {
            metadataId: string;
            metadataName: string;
            metadataDescription: string;
            layerId: string;
        };
        extension: string;
        productId: string;
    }>;
    metadatas: Array<{
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        code: string;
        description: string;
        keyWords: string;
        developmentMode: 0;
        updateFrequency: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        createTime: string;
        updateTime: string;
        publishTime: string;
        resourceType: 0;
        administrativeMatters: string;
        resourceStatus: 0 | 1 | 2;
        language: string;
        onlineResourceLink: string;
        sourceSystem: string;
        spaceScope: string;
        timeScope: string;
        openLevel: 0;
        dataItemDescriptions: Array<{
            title: string;
            name: string;
            description: string;
            type: string;
            defaultValue: string;
            length: string;
            isRequired: boolean;
            isPrimaryKey: boolean;
            checkRulesIds: Array<string>;
        }>;
        displayDataItemDescriptions: Array<{
            name: string;
            enableEdit: boolean;
        }>;
        tagIds: Array<string>;
        kettleJobIds: Array<string>;
        businessResourceId: string;
        serviceResourceId: string;
        domainResourceId: string;
        departmentResourceId: string;
        districtResourceId: string;
        themeResourceId: string;
        dockInfo: {
            dockStatus: 0 | 1 | 2 | 3;
            logs: Array<string>;
        };
        projectInfo: {
            id: string;
            name: string;
            resourceId: string;
            description: string;
        };
        totalDownloads: number;
        totalViews: number;
        totalDataItems: number;
        fileSize: number;
        fileCount: number;
        dataSize: number;
        checkErrorDataCount: number;
        dataRating: number;
        bindTable: string;
        bindSchema: string;
        dasJobName: string;
        dataSourceId: string;
    }>;
    dataSources: Array<{
        id: string;
        name: string;
        resourceId: string;
        host: string;
        port: number;
        account: string;
        password: string;
        schema: string;
        dbType: 0 | 1 | 2 | 3 | 4 | 5;
        updateTIme: string;
    }>;
};

/**
 * @description 导入资源库条目
 * @summary Request data types
 * @url [ post ] /api/ResourceDb/import/ExternalData
 * @bizName dcsBiz
 */
export type PostResourceDbImportExternalDataReqTypeByDcs = {
    externalDataEntries?: Array<{
        id: string;
        dataSourceId: string;
        externalResourceObjects: Array<{
            externalResourceObject: Record<string, any>;
        }>;
    }>;
    resourceDbs?: Array<{
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        resourceDbType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        relationship: {
            metadataId: string;
            metadataName: string;
            metadataDescription: string;
            layerId: string;
        };
        extension: string;
        productId: string;
    }>;
    metadatas?: Array<{
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        code: string;
        description: string;
        keyWords: string;
        developmentMode: 0;
        updateFrequency: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        createTime: string;
        updateTime: string;
        publishTime: string;
        resourceType: 0;
        administrativeMatters: string;
        resourceStatus: 0 | 1 | 2;
        language: string;
        onlineResourceLink: string;
        sourceSystem: string;
        spaceScope: string;
        timeScope: string;
        openLevel: 0;
        dataItemDescriptions: Array<{
            title: string;
            name: string;
            description: string;
            type: string;
            defaultValue: string;
            length: string;
            isRequired: boolean;
            isPrimaryKey: boolean;
            checkRulesIds: Array<string>;
        }>;
        displayDataItemDescriptions: Array<{
            name: string;
            enableEdit: boolean;
        }>;
        tagIds: Array<string>;
        kettleJobIds: Array<string>;
        businessResourceId: string;
        serviceResourceId: string;
        domainResourceId: string;
        departmentResourceId: string;
        districtResourceId: string;
        themeResourceId: string;
        dockInfo: {
            dockStatus: 0 | 1 | 2 | 3;
            logs: Array<string>;
        };
        projectInfo: {
            id: string;
            name: string;
            resourceId: string;
            description: string;
        };
        totalDownloads: number;
        totalViews: number;
        totalDataItems: number;
        fileSize: number;
        fileCount: number;
        dataSize: number;
        checkErrorDataCount: number;
        dataRating: number;
        bindTable: string;
        bindSchema: string;
        dasJobName: string;
        dataSourceId: string;
    }>;
    dataSources?: Array<{
        id: string;
        name: string;
        resourceId: string;
        host: string;
        port: number;
        account: string;
        password: string;
        schema: string;
        dbType: 0 | 1 | 2 | 3 | 4 | 5;
        updateTIme: string;
    }>;
};

/**
 * @description 导出资源库条目Excel模版
 * @summary Request data types
 * @url [ get ] /api/ResourceDb/{id}/export/ExternalData/excel/template
 * @bizName dcsBiz
 */
export type GetResourceDbIdExportExternalDataExcelTemplateReqTypeByDcs = {
    id: string;
};

/**
 * @description Excel导入资源库条目
 * @summary Request data types
 * @url [ post ] /api/ResourceDb/{id}/import/ExternalData/excel
 * @bizName dcsBiz
 */
export type PostResourceDbIdImportExternalDataExcelReqTypeByDcs = {
    id: string;
};

/**
 * @description 批量删除外部数据
 * @summary Request data types
 * @url [ delete ] /api/ResourceDb/{id}/ExternalResource/Batch
 * @bizName dcsBiz
 */
export type DeleteResourceDbIdExternalResourceBatchReqTypeByDcs = {
    id: string;
    primaryKey: string;
    primaryValues: Array<string>;
};

/**
 * @description 获取服务分类列表
 * @summary Response data types
 * @url [ get ] /api/Services
 * @bizName dcsBiz
 */
export type GetServicesResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        totalMetadataCount: number;
    }>;
};

/**
 * @description 返回近30天的同步记录信息
 * @summary Request data types
 * @url [ get ] /api/Statistics/Metadata/ThirtyEtlJobWriteCount
 * @bizName dcsBiz
 */
export type GetStatisticsMetadataThirtyEtlJobWriteCountReqTypeByDcs = {
    id: string;
};

/**
 * @description 返回近30天的同步记录信息
 * @summary Response data types
 * @url [ get ] /api/Statistics/Metadata/ThirtyEtlJobWriteCount
 * @bizName dcsBiz
 */
export type GetStatisticsMetadataThirtyEtlJobWriteCountResTypeByDcs = {
    totalCount: number;
    records: Array<{
        category: string;
        value: number;
    }>;
};

/**
 * @description 返回近30天的执行记录信息
 * @summary Request data types
 * @url [ get ] /api/Statistics/CheckTaskExecuteRecord/LastThirtyTimesRecord
 * @bizName dcsBiz
 */
export type GetStatisticsCheckTaskExecuteRecordLastThirtyTimesRecordReqTypeByDcs = {
    id?: string;
};

/**
 * @description 返回近30天的执行记录信息
 * @summary Response data types
 * @url [ get ] /api/Statistics/CheckTaskExecuteRecord/LastThirtyTimesRecord
 * @bizName dcsBiz
 */
export type GetStatisticsCheckTaskExecuteRecordLastThirtyTimesRecordResTypeByDcs = {
    source: Array<any>;
};

/**
 * @description 返回近30天的执行评分信息
 * @summary Request data types
 * @url [ get ] /api/Statistics/CheckTaskExecuteRecord/LastThirtyTimesRaise
 * @bizName dcsBiz
 */
export type GetStatisticsCheckTaskExecuteRecordLastThirtyTimesRaiseReqTypeByDcs = {
    id?: string;
};

/**
 * @description 返回近30天的执行评分信息
 * @summary Response data types
 * @url [ get ] /api/Statistics/CheckTaskExecuteRecord/LastThirtyTimesRaise
 * @bizName dcsBiz
 */
export type GetStatisticsCheckTaskExecuteRecordLastThirtyTimesRaiseResTypeByDcs = {
    source: Array<any>;
};

/**
 * @description 统计元数据数量
 * @summary Response data types
 * @url [ get ] /api/Statistics/Metadata/Count
 * @bizName dcsBiz
 */
export type GetStatisticsMetadataCountResTypeByDcs = {
    categories: number;
    yesterday: number;
    today: number;
};

/**
 * @description 统计规则数量
 * @summary Response data types
 * @url [ get ] /api/Statistics/CheckRule/Count
 * @bizName dcsBiz
 */
export type GetStatisticsCheckRuleCountResTypeByDcs = {
    categories: number;
    yesterday: number;
    today: number;
};

/**
 * @description 统计元数据的活跃度
 * @summary Request data types
 * @url [ get ] /api/Statistics/Metadata/Activity
 * @bizName dcsBiz
 */
export type GetStatisticsMetadataActivityReqTypeByDcs = {
    timeType: number;
};

/**
 * @description 统计元数据的活跃度
 * @summary Response data types
 * @url [ get ] /api/Statistics/Metadata/Activity
 * @bizName dcsBiz
 */
export type GetStatisticsMetadataActivityResTypeByDcs = {
    category: string;
    value: any;
};

/**
 * @description 获取标签列表
 * @summary Response data types
 * @url [ get ] /api/Tags
 * @bizName dcsBiz
 */
export type GetTagsResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        resourceId: string;
        color: string;
        definition: string;
        updater: string;
        updateTime: string;
        tagType: 0 | 1 | 2;
    }>;
};

/**
 * @description 分页获取专题列表
 * @summary Request data types
 * @url [ get ] /api/Themes
 * @bizName dcsBiz
 */
export type GetThemesReqTypeByDcs = {
    keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 分页获取专题列表
 * @summary Response data types
 * @url [ get ] /api/Themes
 * @bizName dcsBiz
 */
export type GetThemesResTypeByDcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        resourceId: string;
        parentId: string;
        description: string;
        code: string;
        totalMetadataCount: number;
        projectId: string;
    }>;
};

/**
 * @description 新增专题
 * @summary Request data types
 * @url [ post ] /api/Themes
 * @bizName dcsBiz
 */
export type PostThemesReqTypeByDcs = {
    name: string;
    resourceId?: string;
    description?: string;
    parentId?: string;
    code?: string;
    projectId?: string;
};

/**
 * @description 新增专题
 * @summary Response data types
 * @url [ post ] /api/Themes
 * @bizName dcsBiz
 */
export type PostThemesResTypeByDcs = {
    id: string;
    name: string;
    resourceId: string;
    parentId: string;
    description: string;
    code: string;
    totalMetadataCount: number;
    projectId: string;
};

/**
 * @description 获取专题（支持资源Id）
 * @summary Request data types
 * @url [ get ] /api/Themes/{id}
 * @bizName dcsBiz
 */
export type GetThemesIdReqTypeByDcs = {
    id: string;
};

/**
 * @description 获取专题（支持资源Id）
 * @summary Response data types
 * @url [ get ] /api/Themes/{id}
 * @bizName dcsBiz
 */
export type GetThemesIdResTypeByDcs = {
    id: string;
    name: string;
    resourceId: string;
    parentId: string;
    description: string;
    code: string;
    totalMetadataCount: number;
    projectId: string;
};

/**
 * @description 修改专题
 * @summary Request data types
 * @url [ put ] /api/Themes/{id}
 * @bizName dcsBiz
 */
export type PutThemesIdReqTypeByDcs = {
    id: string;
    name: string;
    resourceId?: string;
    description?: string;
    parentId?: string;
    code?: string;
    projectId?: string;
};

/**
 * @description 删除专题
 * @summary Request data types
 * @url [ delete ] /api/Themes/{id}
 * @bizName dcsBiz
 */
export type DeleteThemesIdReqTypeByDcs = {
    id: string;
};
