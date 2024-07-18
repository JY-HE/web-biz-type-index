
### gcsBiz

|requestTypeName|responsesTypeName|url|methodType|describe|version|
| --------- | --------- | --------- | --------- | --------- | --------- |
|`UpdateDeviceReqType`|`CommonResType`|`/api/active_gps/{device}`|put|上报GPS点位|v1|
|`GetActiveGpsReqType`|`GetActiveGpsResType`|`/api/active_gps`|get|查询可视区域内的设备活跃点|v1|
|`GetActiveGpsByDeviceReqType`|`GetActiveGpsByDeviceResType`|`/api/active_gps/{device}/latest`|get|查询指定设备的最新活跃点位|v1|
|`GetActiveGpsDevicesLatestReqType`|`GetActiveGpsDevicesLatestResType`|`/api/active_gps/devices/latest`|get|查询多个指定设备的最新活跃点位|v1|
|`GetHistoryGpsDeviceLatestReqType`|`GetHistoryGpsDeviceLatestResType`|`/api/history_gps/{device}/latest`|get|获取设备最后的Gps点位|v1|
|`GetHistoryGpsByDeviceReqType`|`GetHistoryGpsByDeviceResType`|`/api/history_gps/{device}`|get|查询设备GPS历史轨迹|v1|
|`GetHistoryGpsReqType`|`GetHistoryGpsResType`|`/api/history_gps`|get|查询某区域在某个时段内的所有途经设备|v1|
|`UpdateHistoryGpsReqType`|`CommonResType`|`/api/history_gps`|put|历史点补全|v1|
|`GetDevicesHistoryReqType`|`GetDevicesHistoryResType`|`/api/history_gps/devices`|get|查询某区域在某个时段内的所有途经设备（返回设备Id带类型）|v1|

### cgsBiz

|requestTypeName|responsesTypeName|url|methodType|describe|version|
| --------- | --------- | --------- | --------- | --------- | --------- |
|`TextToSpeechReqType`|`TextToSpeechResType`|`/api/UniformSpeech`|post|文字转语音|v1|
|`TextToRecordNotifyReqType`|`TextToRecordNotifyResType`|`/api/UniformSpeech/RecordNotify`|post|文字转语音(语音通知专用)
<remarks>该接口的Rate不支持设置，必须为8000</remarks>|v1|
|`CommonReqType`|`GetVoiceInfosResType`|`/api/UniformSpeech/voiceinfos`|get|通过语音信息列表|v1|

### mmtBiz

|requestTypeName|responsesTypeName|url|methodType|describe|version|
| --------- | --------- | --------- | --------- | --------- | --------- |
|`GradingDispatchReqType`|`CommonResType`|`/api/GradingDispatch`|post|分级调度操作|v1|
|`GetMultimediaTransfersReqType`|`GetMultimediaTransfersResType`|`/api/MultimediaTransfers`|get|查询拍传|v1|
|`AddMultimediaTransfersReqType`|`AddMultimediaTransfersResType`|`/api/MultimediaTransfers`|post|创建拍传|v1|
|`SearchMultimediaTransfersReqType`|`SearchMultimediaTransfersResType`|`/api/MultimediaTransfers/search`|post|查询拍传|v1|
|`GetMultimediaTransfersByIdReqType`|`GetMultimediaTransfersByIdResType`|`/api/MultimediaTransfers/{id}`|get|通过拍传ID获取拍传|v1|
|`DeleteMultimediaTransfersReqType`|`CommonResType`|`/api/MultimediaTransfers/{id}`|delete|删除拍传|v1|
|`CompleteMultimediaTransfersReqType`|`CommonResType`|`/api/MultimediaTransfers/data_completion`|post|拍传数据补全|v1|
|`GetMultimediaTemplatesReqType`|`GetMultimediaTemplatesResType`|`/api/Templates`|get|按条件查询拍传模板|v1|
|`AddTemplatesReqType`|`AddTemplatesResType`|`/api/Templates`|post|创建拍传模板|v1|
|`GetTemplatesByIdReqType`|`GetTemplatesByIdResType`|`/api/Templates/{id}`|get|通过拍传模板ID获取拍传模板|v1|
|`EditTemplatesReqType`|`CommonResType`|`/api/Templates/{id}`|put|更新拍传模板|v1|
|`DeleteTemplatesReqType`|`CommonResType`|`/api/Templates/{id}`|delete|删除拍传模板|v1|

### auditBiz

|requestTypeName|responsesTypeName|url|methodType|describe|version|
| --------- | --------- | --------- | --------- | --------- | --------- |
|`GetOperationReqType`|`GetOperationResType`|`/api/Operation`|get|按条件查询操作|v1|
|`SearchOperationReqType`|`SearchOperationResType`|`/api/Operation`|post|按条件查询操作|v1|
|`GetRecordByIdReqType`|`GetRecordByIdResType`|`/api/Record/{id}`|get|通过操作记录ID获取详细操作记录|v1|

### rrsBiz

|requestTypeName|responsesTypeName|url|methodType|describe|version|
| --------- | --------- | --------- | --------- | --------- | --------- |
|`GetMainResourcesReqType`|`GetMainResourcesResType`|`/api/MainResources`|get|按条件查询主资源|v1|
|`AddMainResourcesReqType`|`AddMainResourcesResType`|`/api/MainResources`|post|创建主资源|v1|
|`GetMainResourcesByIdReqType`|`GetMainResourcesByIdResType`|`/api/MainResources/{id}`|get|通过主资源ID获取主资源|v1|
|`UpdateMainResourcesReqType`|`CommonResType`|`/api/MainResources/{id}`|put|更新主资源|v1|
|`DeleteMainResourcesReqType`|`CommonResType`|`/api/MainResources/{id}`|delete|删除主资源|v1|
|`GetAllResourceReqType`|`GetAllResourceResType`|`/api/ResourceRelationships/resource`|post|获取主体下所有资源|v1|
|`UpdateMainLinkResourceReqType`|`UpdateMainLinkResourceResType`|`/api/ResourceRelationships/resource`|put|更新主体下资源关系|v1|
|`GetResourceReqType`|`GetResourceResType`|`/api/ResourceRelationships/resource/single`|post|资源查询|v1|
|`GetResourceDetailsReqType`|`GetResourceDetailsResType`|`/api/ResourceRelationships/resource/details`|post|批量获取资源详情（带关联主体）|v1|
|`BatchGetMainDetailsReqType`|`BatchGetMainDetailsResType`|`/api/ResourceRelationships/main/details`|post|批量获取主体资源详情（带关联下资源）|v1|
|`EditResourceRelationshipsReqType`|`CommonResType`|`/api/ResourceRelationships`|put|绑定资源关系|v1|
|`DeleteResourceRelationshipsReqType`|`CommonResType`|`/api/ResourceRelationships`|post|解绑资源关系|v1|
|`GetResourcesReqType`|`GetResourcesResType`|`/api/Resources`|get|按条件查询资源|v1|
|`AddResourcesReqType`|`AddResourcesResType`|`/api/Resources`|post|创建资源|v1|
|`GetResourcesByIdReqType`|`GetResourcesByIdResType`|`/api/Resources/{id}`|get|通过资源ID获取资源|v1|
|`EditResourcesReqType`|`CommonResType`|`/api/Resources/{id}`|put|更新资源|v1|
|`DeleteResourcesReqType`|`CommonResType`|`/api/Resources/{id}`|delete|删除资源|v1|
|`GetResourceTypesReqType`|`GetResourceTypesResType`|`/api/ResourceTypes`|get|按条件查询资源类型|v1|
|`AddResourceTypeReqType`|`AddResourceTypeResType`|`/api/ResourceTypes`|post|创建资源类型|v1|
|`GetResourceTypeByIdReqType`|`GetResourceTypeByIdResType`|`/api/ResourceTypes/{id}`|get|通过资源类型ID获取资源类型|v1|

### ntsBiz

|requestTypeName|responsesTypeName|url|methodType|describe|version|
| --------- | --------- | --------- | --------- | --------- | --------- |
|`GetConditionTemplateByIdReqType`|`GetConditionTemplateByIdResType`|`/api/ConditionTemplates/{id}`|get|获取条件配置|v1|
|`EditConditionTemplateReqType`|`CommonResType`|`/api/ConditionTemplates/{id}`|put|更新条件配置|v1|
|`DeleteConditionTemplateReqType`|`CommonResType`|`/api/ConditionTemplates/{id}`|delete|删除条件配置|v1|
|`GetConditionTemplatesReqType`|`GetConditionTemplatesResType`|`/api/ConditionTemplates`|get|搜索条件配置|v1|
|`AddConditionTemplateReqType`|`AddConditionTemplateResType`|`/api/ConditionTemplates`|post|新增条件配置|v1|
|`GetI18NConfigByIdReqType`|`GetI18NConfigByIdResType`|`/api/I18NConfigs/{id}`|get|获取i18n|v1|
|`EditI18NConfigReqType`|`CommonResType`|`/api/I18NConfigs/{id}`|put|更新i18n|v1|
|`DeleteI18NConfigReqType`|`CommonResType`|`/api/I18NConfigs/{id}`|delete|删除i18n|v1|
|`GetI18NConfigsReqType`|`GetI18NConfigsResType`|`/api/I18NConfigs`|get|搜索i18n|v1|
|`AddI18NConfigReqType`|`AddI18NConfigResType`|`/api/I18NConfigs`|post|新增i18n|v1|
|`GetNotifyConfigByIdReqType`|`GetNotifyConfigByIdResType`|`/api/NotifyConfigs/{id}`|get|获取通知配置|v1|
|`EditNotifyConfigReqType`|`CommonResType`|`/api/NotifyConfigs/{id}`|put|更新通知配置|v1|
|`DeleteNotifyConfigReqType`|`CommonResType`|`/api/NotifyConfigs/{id}`|delete|删除通知配置|v1|
|`GetNotifyConfigsReqType`|`GetNotifyConfigsResType`|`/api/NotifyConfigs`|get|搜索通知配置|v1|
|`AddNotifyConfigReqType`|`AddNotifyConfigResType`|`/api/NotifyConfigs`|post|新增通知配置|v1|
|`CommonReqType`|`GetNotifyConfigTypesResType`|`/api/NotifyConfigs/types`|get|获取全部通知类型|v1|
|`OpenNotifyConfigReqType`|`CommonResType`|`/api/NotifyConfigs/{id}/enable`|put|启用通知配置|v1|
|`GetNotifyRecordByIdReqType`|`GetNotifyRecordByIdResType`|`/api/NotifyRecords/{id}`|get|获取通知记录|v1|
|`GetNotifyRecordsReqType`|`GetNotifyRecordsResType`|`/api/NotifyRecords`|get|搜索通知记录|v1|
|`GetPlaceholderByIdReqType`|`GetPlaceholderByIdResType`|`/api/Placeholders/{id}`|get|获取占位符|v1|
|`EditPlaceholderReqType`|`CommonResType`|`/api/Placeholders/{id}`|put|更新占位符|v1|
|`DeletePlaceholderReqType`|`CommonResType`|`/api/Placeholders/{id}`|delete|删除占位符|v1|
|`GetPlaceholdersReqType`|`GetPlaceholdersResType`|`/api/Placeholders`|get|搜索占位符|v1|
|`AddPlaceholderReqType`|`AddPlaceholderResType`|`/api/Placeholders`|post|新增占位符|v1|
|`GetSceneByIdReqType`|`GetSceneByIdResType`|`/api/Scenes/{id}`|get|获取Scene|v1|
|`CommonReqType`|`GetScenesResType`|`/api/Scenes`|get|获取场景|v1|
|`AddSceneReqType`|`AddSceneResType`|`/api/Scenes`|post|新增场景|v1|
|`GetSchemeReqType`|`GetSchemeResType`|`/api/Schemes/{id}`|get|获取scheme|v1|
|`EditSchemeReqType`|`CommonResType`|`/api/Schemes/{id}`|put|更新scheme|v1|
|`DeleteSchemeReqType`|`CommonResType`|`/api/Schemes/{id}`|delete|删除scheme|v1|
|`GetSchemesReqType`|`GetSchemesResType`|`/api/Schemes`|get|搜索scheme|v1|
|`AddSchemeReqType`|`AddSchemeResType`|`/api/Schemes`|post|新增scheme|v1|
|`GetTemplateByIdReqType`|`GetTemplateByIdResType`|`/api/Templates/{id}`|get|获取模板|v1|
|`EditTemplateReqType`|`CommonResType`|`/api/Templates/{id}`|put|更新模板|v1|
|`DeleteTemplateReqType`|`CommonResType`|`/api/Templates/{id}`|delete|删除模板|v1|
|`GetTemplatesReqType`|`GetTemplatesResType`|`/api/Templates`|get|搜索模板|v1|
|`AddTemplateReqType`|`AddTemplateResType`|`/api/Templates`|post|新增模板|v1|
|`PostNotificationReqType`|`PostNotificationResType`|`/api/WebHooks`|post|通知|v1|
