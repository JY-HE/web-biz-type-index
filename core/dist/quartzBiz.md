
/**
 * job 的模式
*/
type JobModeCommonType =  1 | 2 ;


/**
 * undefined
*/
type TriggerStateCommonType =  0 | 1 | 2 | 3 | 4 | 5 ;


/**
 * 定时任务返回实体
 * @params id {string} 定时任务 Id
 * @params name {string} 定时任务名称
 * @params groupName {string} 定时任务所属组
 * @params mode {JobModeCommonType} 定时任务的模式
 * @params description {string} 定时任务描述
 * @params beginTime {string} 定时任务开始时间
 * @params endTime {string} 定时任务结束时间
 * @params cron {string} 定时任务的 Cron 表达式
 * @params status {TriggerStateCommonType} 任务状态。0-正常 | 1-已停止 | 2-完成 | 3-错误 | 4-阻塞（已有任务执行中）| 5-触发器不存在
 * @params nextExecuteTime {string} 下次执行时间
 * @params bizName {string} 业务名
 * @params bizData {any} 业务数据
 * @params createTime {string} 创建时间
*/
type JobEntityOutCommonType = {
      id?: string;
      name?: string;
      groupName?: string;
      mode?: JobModeCommonType;
      description?: string;
      beginTime?: string;
      endTime?: string;
      cron?: string;
      status?: TriggerStateCommonType;
      nextExecuteTime?: string;
      bizName?: string;
      bizData?: any;
      createTime?: string;
}


/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {JobEntityOutCommonType[]} 记录
*/
type JobEntityOutReqCommonType = {
      totalCount?: number;
      records?: JobEntityOutCommonType[];
}


/**
 * 定时任务入参
 * @params beginTime {string} 定时任务开始时间
 * @params endTime {string} 定时任务结束时间
 * @params cron {string} 定时任务的 Cron 表达式
 * @params name {string} 定时任务名称
 * @params description {string} 定时任务描述
 * @params mode {JobModeCommonType} 定时任务的模式（1-定时|2-手动）
 * @params bizName {string} 业务名
 * @params bizData {any} 业务所需的参数，用于传到 RabbitMq 上
*/
type JobEntityInCommonType = {
      beginTime: string;
      endTime?: string;
      cron?: string;
      name: string;
      description?: string;
      mode?: JobModeCommonType;
      bizName: string;
      bizData: any;
}


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
}


/**
 * 子任务输入实体
 * @params name {string} 子任务名称
 * @params description {string} 子任务描述
 * @params beginTime {string} 定时任务开始时间
 * @params endTime {string} 定时任务结束时间
 * @params cron {string} 定时任务的 Cron 表达式
 * @params bizName {string} 业务名
 * @params bizData {any} 业务所需的参数，用于传到 RabbitMq 上
*/
type SubJobEntityInCommonType = {
      name?: string;
      description?: string;
      beginTime?: string;
      endTime?: string;
      cron?: string;
      bizName?: string;
      bizData?: any;
}


/**
 * 主任务+多子任务
 * @params subJobs {SubJobEntityInCommonType[]} 子任务
 * @params parentJobId {string} 父任务ID
 * @params beginTime {string} 定时任务开始时间
 * @params endTime {string} 定时任务结束时间
 * @params cron {string} 定时任务的 Cron 表达式
 * @params name {string} 定时任务名称
 * @params description {string} 定时任务描述
 * @params mode {JobModeCommonType} 定时任务的模式（1-定时|2-手动）
 * @params bizName {string} 业务名
 * @params bizData {any} 业务所需的参数，用于传到 RabbitMq 上
*/
type JobsEntityInCommonType = {
      subJobs?: SubJobEntityInCommonType[];
      parentJobId?: string;
      beginTime: string;
      endTime?: string;
      cron?: string;
      name: string;
      description?: string;
      mode?: JobModeCommonType;
      bizName: string;
      bizData: any;
}


/**
 * 主+多子任务输出
 * @params subJobs {JobEntityOutCommonType[]} 子作业，非必有
 * @params id {string} 定时任务 Id
 * @params name {string} 定时任务名称
 * @params groupName {string} 定时任务所属组
 * @params mode {JobModeCommonType} 定时任务的模式
 * @params description {string} 定时任务描述
 * @params beginTime {string} 定时任务开始时间
 * @params endTime {string} 定时任务结束时间
 * @params cron {string} 定时任务的 Cron 表达式
 * @params status {TriggerStateCommonType} 任务状态。0-正常 | 1-已停止 | 2-完成 | 3-错误 | 4-阻塞（已有任务执行中）| 5-触发器不存在
 * @params nextExecuteTime {string} 下次执行时间
 * @params bizName {string} 业务名
 * @params bizData {any} 业务数据
 * @params createTime {string} 创建时间
*/
type JobsEntityOutCommonType = {
      subJobs?: JobEntityOutCommonType[];
      id?: string;
      name?: string;
      groupName?: string;
      mode?: JobModeCommonType;
      description?: string;
      beginTime?: string;
      endTime?: string;
      cron?: string;
      status?: TriggerStateCommonType;
      nextExecuteTime?: string;
      bizName?: string;
      bizData?: any;
      createTime?: string;
}


/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {JobsEntityOutCommonType[]} 记录
*/
type JobsEntityOutReqCommonType = {
      totalCount?: number;
      records?: JobsEntityOutCommonType[];
}


/**
 * 更新子任务实体
 * @params id {string} 任务Id
 * @params name {string} 子任务名称
 * @params description {string} 子任务描述
 * @params beginTime {string} 定时任务开始时间
 * @params endTime {string} 定时任务结束时间
 * @params cron {string} 定时任务的 Cron 表达式
 * @params bizName {string} 业务名
 * @params bizData {any} 业务所需的参数，用于传到 RabbitMq 上
*/
type SubJobUpdateInCommonType = {
      id?: string;
      name?: string;
      description?: string;
      beginTime?: string;
      endTime?: string;
      cron?: string;
      bizName?: string;
      bizData?: any;
}


/**
 * 更新主任务+多子任务
 * @params subJobs {SubJobUpdateInCommonType[]} 子任务
 * @params beginTime {string} 定时任务开始时间
 * @params endTime {string} 定时任务结束时间
 * @params cron {string} 定时任务的 Cron 表达式
 * @params name {string} 定时任务名称
 * @params description {string} 定时任务描述
 * @params mode {JobModeCommonType} 定时任务的模式（1-定时|2-手动）
 * @params bizName {string} 业务名
 * @params bizData {any} 业务所需的参数，用于传到 RabbitMq 上
*/
type JobsUpdateInCommonType = {
      subJobs?: SubJobUpdateInCommonType[];
      beginTime: string;
      endTime?: string;
      cron?: string;
      name: string;
      description?: string;
      mode?: JobModeCommonType;
      bizName: string;
      bizData: any;
}


----

/**
 * 查询所有定时任务——请求参数类型定义
 * @params Keyword {string} 关键字 
 * @params BizName {string} 业务名 
 * @params page {number} 页码, 从1开始 默认：1 
 * @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetJobsReqType = {
      Keyword?: string;
      BizName?: string;
      page?: number;
      per_page?: number;
}


/**
 * 查询所有定时任务——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {JobEntityOutCommonType[]} 记录
*/
export type GetJobsResType = {
      totalCount: number;
      records: JobEntityOutCommonType[];
}


/**
 * 添加一个定时任务——请求参数类型定义
 * @params beginTime {string} 定时任务开始时间 （必填）
 * @params endTime {string} 定时任务结束时间 
 * @params cron {string} 定时任务的 Cron 表达式 
 * @params name {string} 定时任务名称 （必填）
 * @params description {string} 定时任务描述 
 * @params mode {JobModeCommonType} 定时任务的模式（1-定时|2-手动） 
 * @params bizName {string} 业务名 （必填）
 * @params bizData {any} 业务所需的参数，用于传到 RabbitMq 上 （必填）
*/
export type AddJobsReqType = {
      beginTime: string;
      endTime?: string;
      cron?: string;
      name: string;
      description?: string;
      mode?: JobModeCommonType;
      bizName: string;
      bizData: any;
}


/**
 * 添加一个定时任务——响应参数类型定义
 * @params id {string} 定时任务 Id
 * @params name {string} 定时任务名称
 * @params groupName {string} 定时任务所属组
 * @params mode {JobModeCommonType} 定时任务的模式
 * @params description {string} 定时任务描述
 * @params beginTime {string} 定时任务开始时间
 * @params endTime {string} 定时任务结束时间
 * @params cron {string} 定时任务的 Cron 表达式
 * @params status {TriggerStateCommonType} 任务状态。0-正常 | 1-已停止 | 2-完成 | 3-错误 | 4-阻塞（已有任务执行中）| 5-触发器不存在
 * @params nextExecuteTime {string} 下次执行时间
 * @params bizName {string} 业务名
 * @params bizData {any} 业务数据
 * @params createTime {string} 创建时间
*/
export type AddJobsResType = {
      id: string;
      name: string;
      groupName: string;
      mode: JobModeCommonType;
      description: string;
      beginTime: string;
      endTime: string;
      cron: string;
      status: TriggerStateCommonType;
      nextExecuteTime: string;
      bizName: string;
      bizData: any;
      createTime: string;
}


/**
 * 查询指定定时任务——请求参数类型定义
 * @params id {string} id （必填）
*/
export type GetJobsByIdReqType = {
      id: string;
}


/**
 * 查询指定定时任务——响应参数类型定义
 * @params id {string} 定时任务 Id
 * @params name {string} 定时任务名称
 * @params groupName {string} 定时任务所属组
 * @params mode {JobModeCommonType} 定时任务的模式
 * @params description {string} 定时任务描述
 * @params beginTime {string} 定时任务开始时间
 * @params endTime {string} 定时任务结束时间
 * @params cron {string} 定时任务的 Cron 表达式
 * @params status {TriggerStateCommonType} 任务状态。0-正常 | 1-已停止 | 2-完成 | 3-错误 | 4-阻塞（已有任务执行中）| 5-触发器不存在
 * @params nextExecuteTime {string} 下次执行时间
 * @params bizName {string} 业务名
 * @params bizData {any} 业务数据
 * @params createTime {string} 创建时间
*/
export type GetJobsByIdResType = {
      id: string;
      name: string;
      groupName: string;
      mode: JobModeCommonType;
      description: string;
      beginTime: string;
      endTime: string;
      cron: string;
      status: TriggerStateCommonType;
      nextExecuteTime: string;
      bizName: string;
      bizData: any;
      createTime: string;
}


/**
 * 修改一个定时任务——请求参数类型定义
 * @params id {string} id （必填）
 * @params beginTime {string} 定时任务开始时间 （必填）
 * @params endTime {string} 定时任务结束时间 
 * @params cron {string} 定时任务的 Cron 表达式 
 * @params name {string} 定时任务名称 （必填）
 * @params description {string} 定时任务描述 
 * @params mode {JobModeCommonType} 定时任务的模式（1-定时|2-手动） 
 * @params bizName {string} 业务名 （必填）
 * @params bizData {any} 业务所需的参数，用于传到 RabbitMq 上 （必填）
*/
export type UpdateJobsByIdReqType = {
      id: string;
      beginTime: string;
      endTime?: string;
      cron?: string;
      name: string;
      description?: string;
      mode?: JobModeCommonType;
      bizName: string;
      bizData: any;
}


/**
 * 删除定时任务——请求参数类型定义
 * @params id {string} id （必填）
*/
export type DeleteJobsByIdReqType = {
      id: string;
}


/**
 * 立刻执行任务一次——请求参数类型定义
 * @params id {string} id （必填）
*/
export type ExecuteJobsByIdReqType = {
      id: string;
}


/**
 * 停止指定任务——请求参数类型定义
 * @params id {string} id （必填）
*/
export type PauseJobsByIdReqType = {
      id: string;
}


/**
 * 恢复指定任务——请求参数类型定义
 * @params id {string} id （必填）
*/
export type ResumeJobsByIdReqType = {
      id: string;
}


/**
 * 添加作业，包含子作业——请求参数类型定义
 * @params subJobs {SubJobEntityInCommonType[]} 子任务 
 * @params parentJobId {string} 父任务ID 
 * @params beginTime {string} 定时任务开始时间 （必填）
 * @params endTime {string} 定时任务结束时间 
 * @params cron {string} 定时任务的 Cron 表达式 
 * @params name {string} 定时任务名称 （必填）
 * @params description {string} 定时任务描述 
 * @params mode {JobModeCommonType} 定时任务的模式（1-定时|2-手动） 
 * @params bizName {string} 业务名 （必填）
 * @params bizData {any} 业务所需的参数，用于传到 RabbitMq 上 （必填）
*/
export type AddMultipleReqType = {
      subJobs?: SubJobEntityInCommonType[];
      parentJobId?: string;
      beginTime: string;
      endTime?: string;
      cron?: string;
      name: string;
      description?: string;
      mode?: JobModeCommonType;
      bizName: string;
      bizData: any;
}


/**
 * 添加作业，包含子作业——响应参数类型定义
 * @params subJobs {JobEntityOutCommonType[]} 子作业，非必有
 * @params id {string} 定时任务 Id
 * @params name {string} 定时任务名称
 * @params groupName {string} 定时任务所属组
 * @params mode {JobModeCommonType} 定时任务的模式
 * @params description {string} 定时任务描述
 * @params beginTime {string} 定时任务开始时间
 * @params endTime {string} 定时任务结束时间
 * @params cron {string} 定时任务的 Cron 表达式
 * @params status {TriggerStateCommonType} 任务状态。0-正常 | 1-已停止 | 2-完成 | 3-错误 | 4-阻塞（已有任务执行中）| 5-触发器不存在
 * @params nextExecuteTime {string} 下次执行时间
 * @params bizName {string} 业务名
 * @params bizData {any} 业务数据
 * @params createTime {string} 创建时间
*/
export type AddMultipleResType = {
      subJobs: JobEntityOutCommonType[];
      id: string;
      name: string;
      groupName: string;
      mode: JobModeCommonType;
      description: string;
      beginTime: string;
      endTime: string;
      cron: string;
      status: TriggerStateCommonType;
      nextExecuteTime: string;
      bizName: string;
      bizData: any;
      createTime: string;
}


/**
 * 搜索作业，包含子作业——请求参数类型定义
 * @params BizName {string} 组名 （必填）
 * @params page {number} 页码, 从1开始 默认：1 
 * @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetMultipleReqType = {
      BizName: string;
      page?: number;
      per_page?: number;
}


/**
 * 搜索作业，包含子作业——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {JobsEntityOutCommonType[]} 记录
*/
export type GetMultipleResType = {
      totalCount: number;
      records: JobsEntityOutCommonType[];
}


/**
 * 获取作业，包含子作业——请求参数类型定义
 * @params id {string} id （必填）
*/
export type GetMultipleByIdReqType = {
      id: string;
}


/**
 * 获取作业，包含子作业——响应参数类型定义
 * @params subJobs {JobEntityOutCommonType[]} 子作业，非必有
 * @params id {string} 定时任务 Id
 * @params name {string} 定时任务名称
 * @params groupName {string} 定时任务所属组
 * @params mode {JobModeCommonType} 定时任务的模式
 * @params description {string} 定时任务描述
 * @params beginTime {string} 定时任务开始时间
 * @params endTime {string} 定时任务结束时间
 * @params cron {string} 定时任务的 Cron 表达式
 * @params status {TriggerStateCommonType} 任务状态。0-正常 | 1-已停止 | 2-完成 | 3-错误 | 4-阻塞（已有任务执行中）| 5-触发器不存在
 * @params nextExecuteTime {string} 下次执行时间
 * @params bizName {string} 业务名
 * @params bizData {any} 业务数据
 * @params createTime {string} 创建时间
*/
export type GetMultipleByIdResType = {
      subJobs: JobEntityOutCommonType[];
      id: string;
      name: string;
      groupName: string;
      mode: JobModeCommonType;
      description: string;
      beginTime: string;
      endTime: string;
      cron: string;
      status: TriggerStateCommonType;
      nextExecuteTime: string;
      bizName: string;
      bizData: any;
      createTime: string;
}


/**
 * 更新作业，包含子作业——请求参数类型定义
 * @params id {string} id （必填）
 * @params subJobs {SubJobUpdateInCommonType[]} 子任务 
 * @params beginTime {string} 定时任务开始时间 （必填）
 * @params endTime {string} 定时任务结束时间 
 * @params cron {string} 定时任务的 Cron 表达式 
 * @params name {string} 定时任务名称 （必填）
 * @params description {string} 定时任务描述 
 * @params mode {JobModeCommonType} 定时任务的模式（1-定时|2-手动） 
 * @params bizName {string} 业务名 （必填）
 * @params bizData {any} 业务所需的参数，用于传到 RabbitMq 上 （必填）
*/
export type UpdateMultipleByIdReqType = {
      id: string;
      subJobs?: SubJobUpdateInCommonType[];
      beginTime: string;
      endTime?: string;
      cron?: string;
      name: string;
      description?: string;
      mode?: JobModeCommonType;
      bizName: string;
      bizData: any;
}


/**
 * 删除作业，包含子作业——请求参数类型定义
 * @params id {string} id （必填）
*/
export type DeleteMultipleByIdReqType = {
      id: string;
}

