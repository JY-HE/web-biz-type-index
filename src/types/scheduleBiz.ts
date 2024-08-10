/**
 * @description 搜索事项时段配置
 * @summary Request data types
 * @url [ get ] /api/MatterTimeConfigs
 * @bizName scheduleBiz
 */
export type GetMatterTimeConfigsReqTypeByScs = {
    keyword?: string;
    Type?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 搜索事项时段配置
 * @summary Response data types
 * @url [ get ] /api/MatterTimeConfigs
 * @bizName scheduleBiz
 */
export type GetMatterTimeConfigsResTypeByScs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        startHour: number;
        startMinute: number;
        endHour: number;
        endMinute: number;
        type: 1 | 2 | 4 | 8 | 16;
    }>;
};

/**
 * @description 新增事项时段配置
 * @summary Request data types
 * @url [ post ] /api/MatterTimeConfigs
 * @bizName scheduleBiz
 */
export type PostMatterTimeConfigsReqTypeByScs = {
    name: string;
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
    type: 1 | 2 | 4 | 8 | 16;
};

/**
 * @description 新增事项时段配置
 * @summary Response data types
 * @url [ post ] /api/MatterTimeConfigs
 * @bizName scheduleBiz
 */
export type PostMatterTimeConfigsResTypeByScs = {
    id: string;
    name: string;
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
    type: 1 | 2 | 4 | 8 | 16;
};

/**
 * @description 获取事项时段配置
 * @summary Request data types
 * @url [ get ] /api/MatterTimeConfigs/{id}
 * @bizName scheduleBiz
 */
export type GetMatterTimeConfigsIdReqTypeByScs = {
    id: string;
};

/**
 * @description 获取事项时段配置
 * @summary Response data types
 * @url [ get ] /api/MatterTimeConfigs/{id}
 * @bizName scheduleBiz
 */
export type GetMatterTimeConfigsIdResTypeByScs = {
    id: string;
    name: string;
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
    type: 1 | 2 | 4 | 8 | 16;
};

/**
 * @description 更新事项时段配置
 * @summary Request data types
 * @url [ put ] /api/MatterTimeConfigs/{id}
 * @bizName scheduleBiz
 */
export type PutMatterTimeConfigsIdReqTypeByScs = {
    id: string;
    name: string;
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
    type: 1 | 2 | 4 | 8 | 16;
};

/**
 * @description 删除事项时段配置
 * @summary Request data types
 * @url [ delete ] /api/MatterTimeConfigs/{id}
 * @bizName scheduleBiz
 */
export type DeleteMatterTimeConfigsIdReqTypeByScs = {
    id: string;
};

/**
 * @description 添加日程事项
 * @summary Request data types
 * @url [ post ] /api/ScheduleMatters
 * @bizName scheduleBiz
 */
export type PostScheduleMattersReqTypeByScs = {
    name: string;
    type: 1 | 2 | 4 | 8 | 16;
    description?: string;
    startTime: string;
    endTime: string;
    repeatType?: 0 | 1 | 2 | 3 | 4;
    repeatOverTime?: string;
    assistMembers?: Array<{
        userId: string;
    }>;
    isRemind?: boolean;
    remindType?: 1 | 2 | 4 | 8 | 16;
    remindAdvanceMinutes?: number;
};

/**
 * @description 添加日程事项
 * @summary Response data types
 * @url [ post ] /api/ScheduleMatters
 * @bizName scheduleBiz
 */
export type PostScheduleMattersResTypeByScs = {
    id: string;
    name: string;
    type: 1 | 2 | 4 | 8 | 16;
    description: string;
    startTime: string;
    endTime: string;
    repeatType: 0 | 1 | 2 | 3 | 4;
    repeatOverTime: string;
    assistMembers: Array<{
        userId: string;
        account: string;
        name: string;
        title: string;
        gender: number;
        description: string;
        mail: string;
        phones: Array<{
            type: string;
            number: string;
        }>;
        departmentIds: Array<string>;
        departments: Array<{
            id: string;
            name: string;
        }>;
        photoPath: string;
    }>;
    isRemind: boolean;
    remindType: 1 | 2 | 4 | 8 | 16;
    remindAdvanceMinutes: number;
    actualSchedules: Array<{
        startTime: string;
        endTime: string;
        isPast: boolean;
    }>;
    ownerId: string;
    subScheduleMatters: Array<{
        id: string;
        startTime: string;
        endTime: string;
    }>;
};

/**
 * @description 搜索日程事项
 * @summary Request data types
 * @url [ get ] /api/ScheduleMatters
 * @bizName scheduleBiz
 */
export type GetScheduleMattersReqTypeByScs = {
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
 * @description 搜索日程事项
 * @summary Response data types
 * @url [ get ] /api/ScheduleMatters
 * @bizName scheduleBiz
 */
export type GetScheduleMattersResTypeByScs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        type: 1 | 2 | 4 | 8 | 16;
        description: string;
        startTime: string;
        endTime: string;
        repeatType: 0 | 1 | 2 | 3 | 4;
        repeatOverTime: string;
        assistMembers: Array<{
            userId: string;
            account: string;
            name: string;
            title: string;
            gender: number;
            description: string;
            mail: string;
            phones: Array<Record<string, any>>;
            departmentIds: Array<string>;
            departments: Array<{
                id: string;
                name: string;
            }>;
            photoPath: string;
        }>;
        isRemind: boolean;
        remindType: 1 | 2 | 4 | 8 | 16;
        remindAdvanceMinutes: number;
        actualSchedules: Array<{
            startTime: string;
            endTime: string;
            isPast: boolean;
        }>;
        ownerId: string;
        subScheduleMatters: Array<Record<string, any>>;
    }>;
};

/**
 * @description 获取日程事项
 * @summary Request data types
 * @url [ get ] /api/ScheduleMatters/{id}
 * @bizName scheduleBiz
 */
export type GetScheduleMattersIdReqTypeByScs = {
    id: string;
};

/**
 * @description 获取日程事项
 * @summary Response data types
 * @url [ get ] /api/ScheduleMatters/{id}
 * @bizName scheduleBiz
 */
export type GetScheduleMattersIdResTypeByScs = {
    id: string;
    name: string;
    type: 1 | 2 | 4 | 8 | 16;
    description: string;
    startTime: string;
    endTime: string;
    repeatType: 0 | 1 | 2 | 3 | 4;
    repeatOverTime: string;
    assistMembers: Array<{
        userId: string;
        account: string;
        name: string;
        title: string;
        gender: number;
        description: string;
        mail: string;
        phones: Array<{
            type: string;
            number: string;
        }>;
        departmentIds: Array<string>;
        departments: Array<{
            id: string;
            name: string;
        }>;
        photoPath: string;
    }>;
    isRemind: boolean;
    remindType: 1 | 2 | 4 | 8 | 16;
    remindAdvanceMinutes: number;
    actualSchedules: Array<{
        startTime: string;
        endTime: string;
        isPast: boolean;
    }>;
    ownerId: string;
    subScheduleMatters: Array<{
        id: string;
        startTime: string;
        endTime: string;
    }>;
};

/**
 * @description 更新日程事项
 * @summary Request data types
 * @url [ put ] /api/ScheduleMatters/{id}
 * @bizName scheduleBiz
 */
export type PutScheduleMattersIdReqTypeByScs = {
    id: string;
    name: string;
    type: 1 | 2 | 4 | 8 | 16;
    description?: string;
    startTime: string;
    endTime: string;
    repeatType?: 0 | 1 | 2 | 3 | 4;
    repeatOverTime?: string;
    assistMembers?: Array<{
        userId: string;
    }>;
    isRemind?: boolean;
    remindType?: 1 | 2 | 4 | 8 | 16;
    remindAdvanceMinutes?: number;
};

/**
 * @description 取消日程事项
 * @summary Request data types
 * @url [ delete ] /api/ScheduleMatters/{id}
 * @bizName scheduleBiz
 */
export type DeleteScheduleMattersIdReqTypeByScs = {
    id: string;
};

/**
 * @description 搜索日程协作人
 * @summary Request data types
 * @url [ get ] /api/ScheduleMatters/member
 * @bizName scheduleBiz
 */
export type GetScheduleMattersMemberReqTypeByScs = {
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
 * @description 搜索日程协作人
 * @summary Response data types
 * @url [ get ] /api/ScheduleMatters/member
 * @bizName scheduleBiz
 */
export type GetScheduleMattersMemberResTypeByScs = {
    totalCount: number;
    records: Array<{
        userId: string;
        account: string;
        name: string;
        title: string;
        gender: number;
        description: string;
        mail: string;
        phones: Array<Record<string, any>>;
        departmentIds: Array<string>;
        departments: Array<{
            id: string;
            name: string;
        }>;
        photoPath: string;
    }>;
};

/**
 * @description 搜索Qts预约事项
 * @summary Request data types
 * @url [ get ] /api/ScheduleMatters/other
 * @bizName scheduleBiz
 */
export type GetScheduleMattersOtherReqTypeByScs = {
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
 * @description 搜索Qts预约事项
 * @summary Response data types
 * @url [ get ] /api/ScheduleMatters/other
 * @bizName scheduleBiz
 */
export type GetScheduleMattersOtherResTypeByScs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        type: 1 | 2 | 4 | 8 | 16;
        description: string;
        startTime: string;
        endTime: string;
        repeatType: 0 | 1 | 2 | 3 | 4;
        repeatOverTime: string;
        assistMembers: Array<{
            userId: string;
            account: string;
            name: string;
            title: string;
            gender: number;
            description: string;
            mail: string;
            phones: Array<Record<string, any>>;
            departmentIds: Array<string>;
            departments: Array<{
                id: string;
                name: string;
            }>;
            photoPath: string;
        }>;
        isRemind: boolean;
        remindType: 1 | 2 | 4 | 8 | 16;
        remindAdvanceMinutes: number;
        actualSchedules: Array<{
            startTime: string;
            endTime: string;
            isPast: boolean;
        }>;
        ownerId: string;
        subScheduleMatters: Array<Record<string, any>>;
    }>;
};

/**
 * @description 修改周期性日程事项的某一日程事项
 * @summary Request data types
 * @url [ put ] /api/ScheduleMatters/{id}/single
 * @bizName scheduleBiz
 */
export type PutScheduleMattersIdSingleReqTypeByScs = {
    id: string;
    subId?: string;
    startTime: string;
    endTime: string;
};
