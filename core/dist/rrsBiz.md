
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
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {MainResourceDetailOutCommonType[]} 记录
*/
type MainResourceDetailOutResultCommonType = {
      totalCount?: number;
      records?: MainResourceDetailOutCommonType[];
}


/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {MainResourceOutCommonType[]} 记录
*/
type MainResourceOutResultCommonType = {
      totalCount?: number;
      records?: MainResourceOutCommonType[];
}


/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ResourceDetailOutCommonType[]} 记录
*/
type ResourceDetailOutResultCommonType = {
      totalCount?: number;
      records?: ResourceDetailOutCommonType[];
}


/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ResourceOutCommonType[]} 记录
*/
type ResourceOutResultCommonType = {
      totalCount?: number;
      records?: ResourceOutCommonType[];
}


/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {ResourceTypeOutCommonType[]} 记录
*/
type ResourceTypeOutResultCommonType = {
      totalCount?: number;
      records?: ResourceTypeOutCommonType[];
}


/**
 * 分页查询结果
 * @params totalCount {number} 总数
 * @params records {SimpleResourceOutCommonType[]} 记录
*/
type SimpleResourceOutResultCommonType = {
      totalCount?: number;
      records?: SimpleResourceOutCommonType[];
}


/**
 * 数据类型
*/
type DataHandleTypeCommonType =  0 | 1 ;


/**
 * 支持资源【1支持主体资源，2支持资源，3主体+资源】
*/
type SupportSourcesCommonType =  1 | 2 | 3 ;


/**
 * 所有资源关系查询
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params mainResource {ResourceInfoCommonType} 主体资源
*/
type AllResourceQueryRequestCommonType = {
      pageIndex?: number;
      pageSize?: number;
      mainResource: ResourceInfoCommonType;
}


/**
 * 批量主体详情查询
 * @params mainResources {ResourceInfoCommonType[]} 批量主体
 * @params type {string} 目标资源类型【不传默认查全部挂载资源】
*/
type MainDetailsQueryRequestCommonType = {
      mainResources?: ResourceInfoCommonType[];
      type?: string;
}


/**
 * 主资源
 * @params type {string} 资源类型
 * @params resourceId {string} 资源ID
*/
type MainResourceInCommonType = {
      type: string;
      resourceId: string;
}


/**
 * 关联资源
 * @params type {string} 类型
 * @params resourceIds {any[]} 资源id集合
*/
type RelationshipResourceInCommonType = {
      type: string;
      resourceIds: any[];
}


/**
 * 资源关系查询
 * @params resources {ResourceInfoCommonType[]} 资源ID
 * @params type {string} 目标资源类型【不传默认查全部主体资源】
*/
type ResourceDetailsQueryRequestCommonType = {
      resources: ResourceInfoCommonType[];
      type?: string;
}


/**
 * 资源
 * @params type {string} 资源类型【不存在类型会自动创建】
 * @params resourceId {string} 资源ID
*/
type ResourceInCommonType = {
      type: string;
      resourceId: string;
}


/**
 * 资源信息
 * @params resourceId {string} 资源ID
 * @params type {string} 主体资源类型
*/
type ResourceInfoCommonType = {
      resourceId: string;
      type?: string;
}


/**
 * 资源关系
 * @params resources {RelationshipResourceInCommonType[]} 资源【不存在资源会自动创建】
 * @params mainResource {MainResourceInCommonType} 主体资源【不存在主体资源会自动创建】
*/
type ResourceRelationshipInCommonType = {
      resources: RelationshipResourceInCommonType[];
      mainResource: MainResourceInCommonType;
}


/**
 * 资源查询
 * @params pageIndex {number} 页码, 从1开始
 * @params pageSize {number} 页容量, [1, 128]
 * @params mainResources {ResourceInfoCommonType[]} 主体资源集合
 * @params type {string} 资源类型
 * @params dataHandleType {DataHandleTypeCommonType} 数据处理类型
*/
type ResourceRelationshipQueryRequestCommonType = {
      pageIndex?: number;
      pageSize?: number;
      mainResources: ResourceInfoCommonType[];
      type: string;
      dataHandleType?: DataHandleTypeCommonType;
}


/**
 * 资源类型
 * @params type {string} Type
 * @params source {SupportSourcesCommonType} 支持资源【1支持主体资源，2支持资源，3主体+资源】
*/
type ResourceTypeInCommonType = {
      type: string;
      source: SupportSourcesCommonType;
}


/**
 * 主体资源详情(带关联资源)
 * @params type {string} 资源类型
 * @params resourceId {string} 主体资源ID
 * @params resources {ResourceBaseOutCommonType[]} 资源
*/
type MainResourceDetailOutCommonType = {
      type?: string;
      resourceId?: string;
      resources?: ResourceBaseOutCommonType[];
}


/**
 * 主资源
 * @params id {string} ID
 * @params type {string} 资源类型
 * @params resourceId {string} 资源ID
*/
type MainResourceOutCommonType = {
      id?: string;
      type?: string;
      resourceId?: string;
}


/**
 * 资源基础信息
 * @params resourceId {string} 资源ID
 * @params type {string} 资源类型
*/
type ResourceBaseOutCommonType = {
      resourceId?: string;
      type?: string;
}


/**
 * 资源详情out
 * @params type {string} 资源类型
 * @params resourceId {string} 资源ID
 * @params mainResources {ResourceBaseOutCommonType[]} 主体资源
*/
type ResourceDetailOutCommonType = {
      type?: string;
      resourceId?: string;
      mainResources?: ResourceBaseOutCommonType[];
}


/**
 * 资源输出
 * @params id {string} ID
 * @params resourceId {string} 资源ID
 * @params type {string} 资源类型ID
*/
type ResourceOutCommonType = {
      id?: string;
      resourceId?: string;
      type?: string;
}


/**
 * 资源类型
 * @params id {string} 资源类型ID
 * @params type {string} 资源类型
 * @params source {SupportSourcesCommonType} 支持资源【1支持主体资源，2支持资源，3主体+资源】
*/
type ResourceTypeOutCommonType = {
      id?: string;
      type?: string;
      source?: SupportSourcesCommonType;
}


/**
 * 简单资源
 * @params id {string} ID
 * @params resourceId {string} 资源ID
*/
type SimpleResourceOutCommonType = {
      id?: string;
      resourceId?: string;
}


----

/**
 * 按条件查询主资源——请求参数类型定义
 * @params type {string} 资源类型 
 * @params page {number} 页码, 从1开始 默认：1 
 * @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetMainResourcesReqType = {
      type?: string;
      page?: number;
      per_page?: number;
}


/**
 * 按条件查询主资源——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {MainResourceOutCommonType[]} 记录
*/
export type GetMainResourcesResType = {
      totalCount: number;
      records: MainResourceOutCommonType[];
}


/**
 * 创建主资源——请求参数类型定义
 * @params type {string} 资源类型 （必填）
 * @params resourceId {string} 资源ID （必填）
*/
export type AddMainResourcesReqType = {
      type: string;
      resourceId: string;
}


/**
 * 创建主资源——响应参数类型定义
 * @params id {string} ID
 * @params type {string} 资源类型
 * @params resourceId {string} 资源ID
*/
export type AddMainResourcesResType = {
      id: string;
      type: string;
      resourceId: string;
}


/**
 * 通过主资源ID获取主资源——请求参数类型定义
 * @params id {string} id （必填）
*/
export type GetMainResByIdReqType = {
      id: string;
}


/**
 * 通过主资源ID获取主资源——响应参数类型定义
 * @params id {string} ID
 * @params type {string} 资源类型
 * @params resourceId {string} 资源ID
*/
export type GetMainResByIdResType = {
      id: string;
      type: string;
      resourceId: string;
}


/**
 * 更新主资源——请求参数类型定义
 * @params id {string} id （必填）
 * @params type {string} 资源类型 （必填）
 * @params resourceId {string} 资源ID （必填）
*/
export type UpdateMainResByIdReqType = {
      id: string;
      type: string;
      resourceId: string;
}


/**
 * 删除主资源——请求参数类型定义
 * @params id {string} id （必填）
*/
export type DeleteMainResByIdReqType = {
      id: string;
}


/**
 * 获取主体下所有资源——请求参数类型定义
 * @params pageIndex {number} 页码, 从1开始 
 * @params pageSize {number} 页容量, [1, 128] 
 * @params mainResource {ResourceInfoCommonType} 主体资源 （必填）
*/
export type SearchAllResourceReqType = {
      pageIndex?: number;
      pageSize?: number;
      mainResource: ResourceInfoCommonType;
}


/**
 * 获取主体下所有资源——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ResourceOutCommonType[]} 记录
*/
export type SearchAllResourceResType = {
      totalCount: number;
      records: ResourceOutCommonType[];
}


/**
 * 更新主体下资源关系——请求参数类型定义
 * @params resources {RelationshipResourceInCommonType[]} 资源【不存在资源会自动创建】 （必填）
 * @params mainResource {MainResourceInCommonType} 主体资源【不存在主体资源会自动创建】 （必填）
*/
export type UpdateAllResourceReqType = {
      resources: RelationshipResourceInCommonType[];
      mainResource: MainResourceInCommonType;
}


/**
 * 更新主体下资源关系——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ResourceOutCommonType[]} 记录
*/
export type UpdateAllResourceResType = {
      totalCount: number;
      records: ResourceOutCommonType[];
}


/**
 * 资源查询——请求参数类型定义
 * @params pageIndex {number} 页码, 从1开始 
 * @params pageSize {number} 页容量, [1, 128] 
 * @params mainResources {ResourceInfoCommonType[]} 主体资源集合 （必填）
 * @params type {string} 资源类型 （必填）
 * @params dataHandleType {DataHandleTypeCommonType} 数据处理类型 
*/
export type SearchSingleResourceReqType = {
      pageIndex?: number;
      pageSize?: number;
      mainResources: ResourceInfoCommonType[];
      type: string;
      dataHandleType?: DataHandleTypeCommonType;
}


/**
 * 资源查询——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {SimpleResourceOutCommonType[]} 记录
*/
export type SearchSingleResourceResType = {
      totalCount: number;
      records: SimpleResourceOutCommonType[];
}


/**
 * 批量获取资源详情（带关联主体）——请求参数类型定义
 * @params resources {ResourceInfoCommonType[]} 资源ID （必填）
 * @params type {string} 目标资源类型【不传默认查全部主体资源】 
*/
export type GetResourceDetailsReqType = {
      resources: ResourceInfoCommonType[];
      type?: string;
}


/**
 * 批量获取资源详情（带关联主体）——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ResourceDetailOutCommonType[]} 记录
*/
export type GetResourceDetailsResType = {
      totalCount: number;
      records: ResourceDetailOutCommonType[];
}


/**
 * 批量获取主体资源详情（带关联下资源）——请求参数类型定义
 * @params mainResources {ResourceInfoCommonType[]} 批量主体 
 * @params type {string} 目标资源类型【不传默认查全部挂载资源】 
*/
export type BatchMainDetailsReqType = {
      mainResources?: ResourceInfoCommonType[];
      type?: string;
}


/**
 * 批量获取主体资源详情（带关联下资源）——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {MainResourceDetailOutCommonType[]} 记录
*/
export type BatchMainDetailsResType = {
      totalCount: number;
      records: MainResourceDetailOutCommonType[];
}


/**
 * 绑定资源关系——请求参数类型定义
 * @params resources {RelationshipResourceInCommonType[]} 资源【不存在资源会自动创建】 （必填）
 * @params mainResource {MainResourceInCommonType} 主体资源【不存在主体资源会自动创建】 （必填）
*/
export type BatchResRelationshipsReqType = {
      resources: RelationshipResourceInCommonType[];
      mainResource: MainResourceInCommonType;
}


/**
 * 解绑资源关系——请求参数类型定义
 * @params resources {RelationshipResourceInCommonType[]} 资源【不存在资源会自动创建】 （必填）
 * @params mainResource {MainResourceInCommonType} 主体资源【不存在主体资源会自动创建】 （必填）
*/
export type UntieResRelationshipsReqType = {
      resources: RelationshipResourceInCommonType[];
      mainResource: MainResourceInCommonType;
}


/**
 * 按条件查询资源——请求参数类型定义
 * @params type {string} 资源类型 
 * @params page {number} 页码, 从1开始 默认：1 
 * @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetResourcesReqType = {
      type?: string;
      page?: number;
      per_page?: number;
}


/**
 * 按条件查询资源——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ResourceOutCommonType[]} 记录
*/
export type GetResourcesResType = {
      totalCount: number;
      records: ResourceOutCommonType[];
}


/**
 * 创建资源——请求参数类型定义
 * @params type {string} 资源类型【不存在类型会自动创建】 （必填）
 * @params resourceId {string} 资源ID （必填）
*/
export type AddResourcesReqType = {
      type: string;
      resourceId: string;
}


/**
 * 创建资源——响应参数类型定义
 * @params id {string} ID
 * @params resourceId {string} 资源ID
 * @params type {string} 资源类型ID
*/
export type AddResourcesResType = {
      id: string;
      resourceId: string;
      type: string;
}


/**
 * 通过资源ID获取资源——请求参数类型定义
 * @params id {string} id （必填）
*/
export type GetResourcesByIdReqType = {
      id: string;
}


/**
 * 通过资源ID获取资源——响应参数类型定义
 * @params id {string} ID
 * @params resourceId {string} 资源ID
 * @params type {string} 资源类型ID
*/
export type GetResourcesByIdResType = {
      id: string;
      resourceId: string;
      type: string;
}


/**
 * 更新资源——请求参数类型定义
 * @params id {string} id （必填）
 * @params type {string} 资源类型【不存在类型会自动创建】 （必填）
 * @params resourceId {string} 资源ID （必填）
*/
export type UpdateResourcesByIdReqType = {
      id: string;
      type: string;
      resourceId: string;
}


/**
 * 删除资源——请求参数类型定义
 * @params id {string} id （必填）
*/
export type DeleteResourcesByIdReqType = {
      id: string;
}


/**
 * 按条件查询资源类型——请求参数类型定义
 * @params keyword {string} 模糊匹配关键字 
 * @params page {number} 页码, 从1开始 默认：1 
 * @params per_page {number} 页容量, [1, 128] 默认：100 
*/
export type GetResourceTypesReqType = {
      keyword?: string;
      page?: number;
      per_page?: number;
}


/**
 * 按条件查询资源类型——响应参数类型定义
 * @params totalCount {number} 总数
 * @params records {ResourceTypeOutCommonType[]} 记录
*/
export type GetResourceTypesResType = {
      totalCount: number;
      records: ResourceTypeOutCommonType[];
}


/**
 * 创建资源类型——请求参数类型定义
 * @params type {string} Type （必填）
 * @params source {SupportSourcesCommonType} 支持资源【1支持主体资源，2支持资源，3主体+资源】 （必填）
*/
export type AddResourceTypesReqType = {
      type: string;
      source: SupportSourcesCommonType;
}


/**
 * 创建资源类型——响应参数类型定义
 * @params id {string} 资源类型ID
 * @params type {string} 资源类型
 * @params source {SupportSourcesCommonType} 支持资源【1支持主体资源，2支持资源，3主体+资源】
*/
export type AddResourceTypesResType = {
      id: string;
      type: string;
      source: SupportSourcesCommonType;
}


/**
 * 通过资源类型ID获取资源类型——请求参数类型定义
 * @params id {string} id （必填）
*/
export type GetResourceTypesByIdReqType = {
      id: string;
}


/**
 * 通过资源类型ID获取资源类型——响应参数类型定义
 * @params id {string} 资源类型ID
 * @params type {string} 资源类型
 * @params source {SupportSourcesCommonType} 支持资源【1支持主体资源，2支持资源，3主体+资源】
*/
export type GetResourceTypesByIdResType = {
      id: string;
      type: string;
      source: SupportSourcesCommonType;
}

