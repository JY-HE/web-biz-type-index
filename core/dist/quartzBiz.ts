/**
 * @description 查询所有定时任务
 * @summary Request data types
 * @url [ get ] /api/Jobs
 * @bizName quartzBiz
 */
export type GetJobsReqTypeByQts = {
    Keyword?: string;
    BizName?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 查询所有定时任务
 * @summary Response data types
 * @url [ get ] /api/Jobs
 * @bizName quartzBiz
 */
export type GetJobsResTypeByQts = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        groupName: string;
        mode: 1 | 2;
        description: string;
        beginTime: string;
        endTime: string;
        cron: string;
        status: 0 | 1 | 2 | 3 | 4 | 5;
        nextExecuteTime: string;
        bizName: string;
        bizData: Record<string, any>;
        createTime: string;
    }>;
};

/**
 * @description 添加一个定时任务
 * @summary Request data types
 * @url [ post ] /api/Jobs
 * @bizName quartzBiz
 */
export type PostJobsReqTypeByQts = {
    beginTime: string;
    endTime?: string;
    cron?: string;
    name: string;
    description?: string;
    mode?: 1 | 2;
    bizName: string;
    bizData: Record<string, any>;
};

/**
 * @description 添加一个定时任务
 * @summary Response data types
 * @url [ post ] /api/Jobs
 * @bizName quartzBiz
 */
export type PostJobsResTypeByQts = {
    id: string;
    name: string;
    groupName: string;
    mode: 1 | 2;
    description: string;
    beginTime: string;
    endTime: string;
    cron: string;
    status: 0 | 1 | 2 | 3 | 4 | 5;
    nextExecuteTime: string;
    bizName: string;
    bizData: Record<string, any>;
    createTime: string;
};

/**
 * @description 查询指定定时任务
 * @summary Request data types
 * @url [ get ] /api/Jobs/{id}
 * @bizName quartzBiz
 */
export type GetJobsIdReqTypeByQts = {
    id: string;
};

/**
 * @description 查询指定定时任务
 * @summary Response data types
 * @url [ get ] /api/Jobs/{id}
 * @bizName quartzBiz
 */
export type GetJobsIdResTypeByQts = {
    id: string;
    name: string;
    groupName: string;
    mode: 1 | 2;
    description: string;
    beginTime: string;
    endTime: string;
    cron: string;
    status: 0 | 1 | 2 | 3 | 4 | 5;
    nextExecuteTime: string;
    bizName: string;
    bizData: Record<string, any>;
    createTime: string;
};

/**
 * @description 修改一个定时任务
 * @summary Request data types
 * @url [ put ] /api/Jobs/{id}
 * @bizName quartzBiz
 */
export type PutJobsIdReqTypeByQts = {
    id: string;
    beginTime: string;
    endTime?: string;
    cron?: string;
    name: string;
    description?: string;
    mode?: 1 | 2;
    bizName: string;
    bizData: Record<string, any>;
};

/**
 * @description 删除定时任务
 * @summary Request data types
 * @url [ delete ] /api/Jobs/{id}
 * @bizName quartzBiz
 */
export type DeleteJobsIdReqTypeByQts = {
    id: string;
};

/**
 * @description 立刻执行任务一次
 * @summary Request data types
 * @url [ put ] /api/Jobs/{id}/immediate_execute
 * @bizName quartzBiz
 */
export type PutJobsIdImmediateExecuteReqTypeByQts = {
    id: string;
};

/**
 * @description 停止指定任务
 * @summary Request data types
 * @url [ put ] /api/Jobs/{id}/pause
 * @bizName quartzBiz
 */
export type PutJobsIdPauseReqTypeByQts = {
    id: string;
};

/**
 * @description 恢复指定任务
 * @summary Request data types
 * @url [ put ] /api/Jobs/{id}/resume
 * @bizName quartzBiz
 */
export type PutJobsIdResumeReqTypeByQts = {
    id: string;
};

/**
 * @description 添加作业，包含子作业
 * @summary Request data types
 * @url [ post ] /api/Jobs/multiple
 * @bizName quartzBiz
 */
export type PostJobsMultipleReqTypeByQts = {
    subJobs?: Array<{
        name: string;
        description: string;
        beginTime: string;
        endTime: string;
        cron: string;
        bizName: string;
        bizData: Record<string, any>;
    }>;
    parentJobId?: string;
    beginTime: string;
    endTime?: string;
    cron?: string;
    name: string;
    description?: string;
    mode?: 1 | 2;
    bizName: string;
    bizData: Record<string, any>;
};

/**
 * @description 添加作业，包含子作业
 * @summary Response data types
 * @url [ post ] /api/Jobs/multiple
 * @bizName quartzBiz
 */
export type PostJobsMultipleResTypeByQts = {
    subJobs: Array<{
        id: string;
        name: string;
        groupName: string;
        mode: 1 | 2;
        description: string;
        beginTime: string;
        endTime: string;
        cron: string;
        status: 0 | 1 | 2 | 3 | 4 | 5;
        nextExecuteTime: string;
        bizName: string;
        bizData: Record<string, any>;
        createTime: string;
    }>;
    id: string;
    name: string;
    groupName: string;
    mode: 1 | 2;
    description: string;
    beginTime: string;
    endTime: string;
    cron: string;
    status: 0 | 1 | 2 | 3 | 4 | 5;
    nextExecuteTime: string;
    bizName: string;
    bizData: Record<string, any>;
    createTime: string;
};

/**
 * @description 搜索作业，包含子作业
 * @summary Request data types
 * @url [ get ] /api/Jobs/multiple
 * @bizName quartzBiz
 */
export type GetJobsMultipleReqTypeByQts = {
    BizName: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 搜索作业，包含子作业
 * @summary Response data types
 * @url [ get ] /api/Jobs/multiple
 * @bizName quartzBiz
 */
export type GetJobsMultipleResTypeByQts = {
    totalCount: number;
    records: Array<{
        subJobs: Array<{
            id: string;
            name: string;
            groupName: string;
            mode: 1 | 2;
            description: string;
            beginTime: string;
            endTime: string;
            cron: string;
            status: 0 | 1 | 2 | 3 | 4 | 5;
            nextExecuteTime: string;
            bizName: string;
            bizData: Record<string, any>;
            createTime: string;
        }>;
        id: string;
        name: string;
        groupName: string;
        mode: 1 | 2;
        description: string;
        beginTime: string;
        endTime: string;
        cron: string;
        status: 0 | 1 | 2 | 3 | 4 | 5;
        nextExecuteTime: string;
        bizName: string;
        bizData: Record<string, any>;
        createTime: string;
    }>;
};

/**
 * @description 获取作业，包含子作业
 * @summary Request data types
 * @url [ get ] /api/Jobs/multiple/{id}
 * @bizName quartzBiz
 */
export type GetJobsMultipleIdReqTypeByQts = {
    id: string;
};

/**
 * @description 获取作业，包含子作业
 * @summary Response data types
 * @url [ get ] /api/Jobs/multiple/{id}
 * @bizName quartzBiz
 */
export type GetJobsMultipleIdResTypeByQts = {
    subJobs: Array<{
        id: string;
        name: string;
        groupName: string;
        mode: 1 | 2;
        description: string;
        beginTime: string;
        endTime: string;
        cron: string;
        status: 0 | 1 | 2 | 3 | 4 | 5;
        nextExecuteTime: string;
        bizName: string;
        bizData: Record<string, any>;
        createTime: string;
    }>;
    id: string;
    name: string;
    groupName: string;
    mode: 1 | 2;
    description: string;
    beginTime: string;
    endTime: string;
    cron: string;
    status: 0 | 1 | 2 | 3 | 4 | 5;
    nextExecuteTime: string;
    bizName: string;
    bizData: Record<string, any>;
    createTime: string;
};

/**
 * @description 更新作业，包含子作业
 * @summary Request data types
 * @url [ put ] /api/Jobs/multiple/{id}
 * @bizName quartzBiz
 */
export type PutJobsMultipleIdReqTypeByQts = {
    id: string;
    subJobs?: Array<{
        id: string;
        name: string;
        description: string;
        beginTime: string;
        endTime: string;
        cron: string;
        bizName: string;
        bizData: Record<string, any>;
    }>;
    beginTime: string;
    endTime?: string;
    cron?: string;
    name: string;
    description?: string;
    mode?: 1 | 2;
    bizName: string;
    bizData: Record<string, any>;
};

/**
 * @description 删除作业，包含子作业
 * @summary Request data types
 * @url [ delete ] /api/Jobs/multiple/{id}
 * @bizName quartzBiz
 */
export type DeleteJobsMultipleIdReqTypeByQts = {
    id: string;
};
