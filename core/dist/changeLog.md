
### mmtBiz

|requestTypeName|responsesTypeName|url|methodType|describe|version|
| --------- | --------- | --------- | --------- | --------- | --------- |
|`GradingDispatchReqType`|``|`/api/GradingDispatch`|post|分级调度操作|v1|
|`GetMultimediaTransfersReqType`|`GetMultimediaTransfersResType`|`/api/MultimediaTransfers`|get|查询拍传|v1|
|`AddMultimediaTransfersReqType`|`AddMultimediaTransfersResType`|`/api/MultimediaTransfers`|post|创建拍传|v1|
|`SearchMultimediaTransfersReqType`|`SearchMultimediaTransfersResType`|`/api/MultimediaTransfers/search`|post|查询拍传|v1|
|`GetMultimediaTransfersByIdReqType`|`GetMultimediaTransfersByIdResType`|`/api/MultimediaTransfers/{id}`|get|通过拍传ID获取拍传|v1|
|`DeleteMultimediaTransfersReqType`|``|`/api/MultimediaTransfers/{id}`|delete|删除拍传|v1|
|`CompleteMultimediaTransfersReqType`|``|`/api/MultimediaTransfers/data_completion`|post|拍传数据补全|v1|
|`GetMultimediaTemplatesReqType`|`GetMultimediaTemplatesResType`|`/api/Templates`|get|按条件查询拍传模板|v1|
|`AddMultimediaTemplatesReqType`|`AddMultimediaTemplatesResType`|`/api/Templates`|post|创建拍传模板|v1|
|`GetTemplatesByIdReqType`|`GetTemplatesByIdResType`|`/api/Templates/{id}`|get|通过拍传模板ID获取拍传模板|v1|
|`EditTemplatesReqType`|``|`/api/Templates/{id}`|put|更新拍传模板|v1|
|`DeleteTemplatesReqType`|``|`/api/Templates/{id}`|delete|删除拍传模板|v1|
