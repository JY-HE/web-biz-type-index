/**
 * @description 按条件查询操作
 * @summary Request data types
 * @url [ get ] /api/Operation
 * @bizName auditBiz
 */
export type GetOperationReqTypeByAds = {
    key?: string;
    product?: number;
    platformId?: string;
    date_start?: string;
    date_stop?: string;
    sort_field?: string;
    service?: string;
    user_ip?: string;
    usr_id?: string;
    Uri?: string;
    result?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 按条件查询操作
 * @summary Response data types
 * @url [ get ] /api/Operation
 * @bizName auditBiz
 */
export type GetOperationResTypeByAds = {
    totalCount: number;
    records: Array<{
        id: string;
        userId: string;
        account: string;
        dateTime: string;
        remoteAddress: string;
        application: string;
        uri: string;
        method: string;
        type: string;
        status: number;
        result: string;
        product: number;
    }>;
};

/**
 * @description 按条件查询操作
 * @summary Request data types
 * @url [ post ] /api/Operation
 * @bizName auditBiz
 */
export type PostOperationReqTypeByAds = {
    key?: string;
    product?: number;
    platformId?: string;
    date_start?: string;
    date_stop?: string;
    sort_field?: string;
    service?: string;
    user_ip?: string;
    usr_id?: string;
    Uri?: string;
    result?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 按条件查询操作
 * @summary Response data types
 * @url [ post ] /api/Operation
 * @bizName auditBiz
 */
export type PostOperationResTypeByAds = {
    totalCount: number;
    records: Array<{
        id: string;
        userId: string;
        account: string;
        dateTime: string;
        remoteAddress: string;
        application: string;
        uri: string;
        method: string;
        type: string;
        status: number;
        result: string;
        product: number;
    }>;
};

/**
 * @description 通过操作记录ID获取详细操作记录
 * @summary Request data types
 * @url [ get ] /api/Record/{id}
 * @bizName auditBiz
 */
export type GetRecordIdReqTypeByAds = {
    id: string;
    service?: string;
};

/**
 * @description 通过操作记录ID获取详细操作记录
 * @summary Response data types
 * @url [ get ] /api/Record/{id}
 * @bizName auditBiz
 */
export type GetRecordIdResTypeByAds = {
    id: string;
    userId: string;
    account: string;
    userAgent: string;
    dateTime: string;
    remoteAddress: string;
    upAddress: string;
    requestTime: string;
    responseTime: string;
    application: string;
    method: string;
    status: number;
};
