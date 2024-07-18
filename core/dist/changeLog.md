
### gcsBiz

|requestTypeName|responsesTypeName|url|methodType|describe|version|
| --------- | --------- | --------- | --------- | --------- | --------- |
|`UpdateDeviceReqType`|``|`/api/active_gps/{device}`|put|上报GPS点位|v1|
|`GetActiveGpsReqType`|`GetActiveGpsResType`|`/api/active_gps`|get|查询可视区域内的设备活跃点|v1|
|`GetActiveGpsByDeviceReqType`|`GetActiveGpsByDeviceResType`|`/api/active_gps/{device}/latest`|get|查询指定设备的最新活跃点位|v1|
|`GetActiveGpsDevicesLatestReqType`|`GetActiveGpsDevicesLatestResType`|`/api/active_gps/devices/latest`|get|查询多个指定设备的最新活跃点位|v1|
|`GetHistoryGpsDeviceLatestReqType`|`GetHistoryGpsDeviceLatestResType`|`/api/history_gps/{device}/latest`|get|获取设备最后的Gps点位|v1|
|`GetHistoryGpsByDeviceReqType`|`GetHistoryGpsByDeviceResType`|`/api/history_gps/{device}`|get|查询设备GPS历史轨迹|v1|
|`GetHistoryGpsReqType`|`GetHistoryGpsResType`|`/api/history_gps`|get|查询某区域在某个时段内的所有途经设备|v1|
|`UpdateHistoryGpsReqType`|``|`/api/history_gps`|put|历史点补全|v1|
|`GetDevicesHistoryReqType`|`GetDevicesHistoryResType`|`/api/history_gps/devices`|get|查询某区域在某个时段内的所有途经设备（返回设备Id带类型）|v1|
