/**
 * 通用请求类型
 */
export type CommonReqType = any;

/**
 * 通用响应类型，包含错误信息
 * @params {boolean} hasError 是否有错误
 * @params {number} status 状态码
 * @params {object} response 响应数据
 * @params {string} msg 错误信息
 */
export type CommonResType = {
    hasError: boolean;
    status: number;
    response: object;
    msg: string;
};
