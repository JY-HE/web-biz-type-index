
// 获取业务指标记录信息
methodName: (params, config) => this._getConfig(`/api/BusinessMetrics`, "undefined", params, config), 
// 获取分组列表
methodName: (params, config) => this._getConfig(`/api/CameraGroups`, "undefined", params, config), 
// 添加目录
methodName: (params, config) => this._getConfig(`/api/CameraGroups`, "undefined", params, config), 
// 获取监控和目录集合
methodName: (params, config) => this._getConfig(`/api/CameraGroups/children`, "undefined", params, config), 
// 批量查询监控组信息接口
methodName: (params, config) => this._getConfig(`/api/CameraGroups/batch`, "undefined", params, config), 
// 同级监控组移动
methodName: (params, config) => this._getConfig(`/api/CameraGroups/${params.id}/move`, "undefined", params, config), 
// 根据父Id获取监控组
methodName: (params, config) => this._getConfig(`/api/CameraGroups/${params.id}/children`, "undefined", params, config), 
// 批量添加监控组/监控到下级资源组/预案组/自定义组
methodName: (params, config) => this._getConfig(`/api/CameraGroups/${params.id}/children`, "undefined", params, config), 
// 批量添加监控到预案组或自定义组
methodName: (params, config) => this._getConfig(`/api/CameraGroups/camera/batch`, "undefined", params, config), 
// 监控组搜索
methodName: (params, config) => this._getConfig(`/api/CameraGroups/Search`, "undefined", params, config), 
// 监控组和监控搜索
methodName: (params, config) => this._getConfig(`/api/CameraGroups/advance_search`, "undefined", params, config), 
// 组内移动监控
methodName: (params, config) => this._getConfig(`/api/CameraGroups/${params.id}/camera/move`, "undefined", params, config), 
// 组内监控置顶
methodName: (params, config) => this._getConfig(`/api/CameraGroups/${params.id}/camera/top`, "undefined", params, config), 
// 移除预案组下得下级资源组/预案组/自定义组
methodName: (params, config) => this._getConfig(`/api/CameraGroups/${params.id}/children/${params.subGroupId}`, "undefined", params, config), 
// 下级资源添加组并挂载未分配目录资源
methodName: (params, config) => this._getConfig(`/api/CameraGroups/group`, "undefined", params, config), 
// 获取监控组下监控（包含子组监控）
methodName: (params, config) => this._getConfig(`/api/CameraGroups/subordinates`, "undefined", params, config), 
// 批量添加监控到预案组中（我的资源）
methodName: (params, config) => this._getConfig(`/api/CameraGroups/${params.id}/cameras/batch`, "undefined", params, config), 
// 批量添加目录
methodName: (params, config) => this._getConfig(`/api/CameraGroups/bath`, "undefined", params, config), 
// 移除目录
methodName: (params, config) => this._getConfig(`/api/CameraGroups/${params.id}`, "undefined", params, config), 
// 修改目录
methodName: (params, config) => this._getConfig(`/api/CameraGroups/${params.id}`, "undefined", params, config), 
// 移动目录
methodName: (params, config) => this._getConfig(`/api/CameraGroups/parent/${params.id}`, "undefined", params, config), 
// 挂载目录
methodName: (params, config) => this._getConfig(`/api/CameraGroups/parent/${params.id}`, "undefined", params, config), 
// 添加监控
methodName: (params, config) => this._getConfig(`/api/CameraGroups/camera/parent/${params.id}`, "undefined", params, config), 
// 移动监控
methodName: (params, config) => this._getConfig(`/api/CameraGroups/camera/parent/${params.id}`, "undefined", params, config), 
// 删除监控
methodName: (params, config) => this._getConfig(`/api/CameraGroups/${params.id}/camera`, "undefined", params, config), 
// 获取目录下所有子节点（目录）
数仓使用
methodName: (params, config) => this._getConfig(`/api/CameraGroups/${params.id}/group_children`, "undefined", params, config), 
// 获取目录下所有叶子节点（监控）
数仓使用
methodName: (params, config) => this._getConfig(`/api/CameraGroups/${params.id}/camera_children`, "undefined", params, config), 
// 获取删除记录
methodName: (params, config) => this._getConfig(`/api/CameraOrGroupDeleteRecords`, "undefined", params, config), 
// 获取全部的分组列表。
methodName: (params, config) => this._getConfig(`/api/Cameras/groups`, "undefined", params, config), 
// 创建组(预案组/自定义组)
methodName: (params, config) => this._getConfig(`/api/Cameras/groups`, "undefined", params, config), 
// 分页获取分组下的监控列表
methodName: (params, config) => this._getConfig(`/api/Cameras/groups/${params.groupId}`, "undefined", params, config), 
// 获取监控flv/rtsp播放地址
methodName: (params, config) => this._getConfig(`/api/Cameras/${params.id}/playUrls`, "undefined", params, config), 
// 周边监控查询
methodName: (params, config) => this._getConfig(`/api/Cameras/circle_area`, "undefined", params, config), 
// 获取监控详情
methodName: (params, config) => this._getConfig(`/api/Cameras/${params.id}`, "undefined", params, config), 
// 修改监控
methodName: (params, config) => this._getConfig(`/api/Cameras/${params.id}`, "undefined", params, config), 
// 监控搜索（区域搜索）
methodName: (params, config) => this._getConfig(`/api/Cameras/area_query`, "undefined", params, config), 
// 监控搜索（关键字搜索）
methodName: (params, config) => this._getConfig(`/api/Cameras/search`, "undefined", params, config), 
// 生成监控静态数据cameras.json.gz
methodName: (params, config) => this._getConfig(`/api/Cameras/statics/genarate`, "undefined", params, config), 
// 获取静态资源文件名
methodName: (params, config) => this._getConfig(`/api/Cameras/statics/files`, "undefined", params, config), 
// 监控巡检数据搜索
methodName: (params, config) => this._getConfig(`/api/Cameras/detection/search`, "undefined", params, config), 
// 监控巡检数据下载
methodName: (params, config) => this._getConfig(`/api/Cameras/detection/download`, "undefined", params, config), 
// 修改组,监控组支持修改联系人不支持修改名称和描述，预案组和自定义组支持修改名称和描述不支持修改联系人
methodName: (params, config) => this._getConfig(`/api/Cameras/groups/${params.id}`, "undefined", params, config), 
// 删除组(预案组/自定义组)
methodName: (params, config) => this._getConfig(`/api/Cameras/groups/${params.id}`, "undefined", params, config), 
// 移动监控项(监控或预案组)到指定预案组
methodName: (params, config) => this._getConfig(`/api/Cameras/groups/${params.id}/children`, "undefined", params, config), 
// 预案分组排序接口
methodName: (params, config) => this._getConfig(`/api/Cameras/groups/${params.id}/order`, "undefined", params, config), 
// 提供能够通过监控组直接将组下监控放到预案组中
methodName: (params, config) => this._getConfig(`/api/Cameras/groups/children`, "undefined", params, config), 
// 删除预案组/自定义组下的某个监控
methodName: (params, config) => this._getConfig(`/api/Cameras/groups/${params.groupId}/children/${params.cameraId}`, "undefined", params, config), 
// 获取预案组下被收藏的监控
methodName: (params, config) => this._getConfig(`/api/Cameras/groups/${params.id}/preplan_cameras`, "undefined", params, config), 
// 获取监控所在的预案组
methodName: (params, config) => this._getConfig(`/api/Cameras/${params.id}/preplan_groups`, "undefined", params, config), 
// 监控详情-获取监控历史巡检记录
methodName: (params, config) => this._getConfig(`/api/Cameras/${params.id}/detection_records`, "undefined", params, config), 
// 监控资源-高级搜索
methodName: (params, config) => this._getConfig(`/api/Cameras/advance_search`, "undefined", params, config), 
// 控制云台
methodName: (params, config) => this._getConfig(`/api/Cameras/${params.id}/control`, "undefined", params, config), 
// 下级录像回放控制
methodName: (params, config) => this._getConfig(`/api/Cameras/${params.id}/playback_control`, "undefined", params, config), 
// 监控录像开始
methodName: (params, config) => this._getConfig(`/api/Cameras/${params.id}/videos/start`, "undefined", params, config), 
// 监控录像结束
methodName: (params, config) => this._getConfig(`/api/Cameras/${params.id}/videos/stop`, "undefined", params, config), 
// 监控截图
methodName: (params, config) => this._getConfig(`/api/Cameras/${params.id}/pictures`, "undefined", params, config), 
// 条件查询监控录像列表
methodName: (params, config) => this._getConfig(`/api/Cameras/mediarecords`, "undefined", params, config), 
// 当前用户是否对监控录像中
methodName: (params, config) => this._getConfig(`/api/Cameras/${params.id}/isvideoing`, "undefined", params, config), 
// 当前用户监控录像信息
<remarks>如果用户对监控没有在录像中，则返回404，否则返回具体的录像信息</remarks>
methodName: (params, config) => this._getConfig(`/api/Cameras/${params.id}/recordingInfo`, "undefined", params, config), 
// 获取监控所在的所有收藏组
methodName: (params, config) => this._getConfig(`/api/Cameras/${params.id}/favorite_groups`, "undefined", params, config), 
// 添加监控设备
methodName: (params, config) => this._getConfig(`/api/Cameras`, "undefined", params, config), 
// 监控位置变更
methodName: (params, config) => this._getConfig(`/api/Cameras/${params.id}/location`, "undefined", params, config), 
// 根据标签Id查找监控
methodName: (params, config) => this._getConfig(`/api/Cameras/search/label`, "undefined", params, config), 
// 导入监控（仅支持对经纬度的修改,导入后重新加载静态文件）
methodName: (params, config) => this._getConfig(`/api/Cameras/import`, "undefined", params, config), 
// 根据监控Id集合获取监控信息
methodName: (params, config) => this._getConfig(`/api/Cameras/batch`, "undefined", params, config), 
// 批量获取监控截图文件信息接口
methodName: (params, config) => this._getConfig(`/api/Cameras/images/batch`, "undefined", params, config), 
// 批量设置监控行政区域码
methodName: (params, config) => this._getConfig(`/api/Cameras/areaCode/batch`, "undefined", params, config), 
// 获取行政区域下面的监控
methodName: (params, config) => this._getConfig(`/api/Cameras/areaCode/${params.areaCode}`, "undefined", params, config), 
// 搜索行政区域下的监控
methodName: (params, config) => this._getConfig(`/api/Cameras/areaCode/search`, "undefined", params, config), 
// 获取下级监控录像
methodName: (params, config) => this._getConfig(`/api/Cameras/${params.id}/videos`, "undefined", params, config), 
// 条件查询监控状态变更记录
methodName: (params, config) => this._getConfig(`/api/Cameras/state/records`, "undefined", params, config), 
// 查询监控预置点位列表
methodName: (params, config) => this._getConfig(`/api/Cameras/${params.id}/points`, "undefined", params, config), 
// 添加监控预置点位
methodName: (params, config) => this._getConfig(`/api/Cameras/points`, "undefined", params, config), 
// 删除监控预置点位
methodName: (params, config) => this._getConfig(`/api/Cameras/${params.cameraId}/points/${params.id}`, "undefined", params, config), 
// 运行监控到预置点位
methodName: (params, config) => this._getConfig(`/api/Cameras/${params.cameraId}/points/${params.id}`, "undefined", params, config), 
// 监控/运维/行政区域
methodName: (params, config) => this._getConfig(`/api/Cameras/operation/areacode`, "undefined", params, config), 
// 监控录像开始
methodName: (params, config) => this._getConfig(`/api/CameraVideos`, "undefined", params, config), 
// 监控录像结束
methodName: (params, config) => this._getConfig(`/api/CameraVideos/${params.id}/stop`, "undefined", params, config), 
// 获取国标本级域信息
methodName: (params, config) => this._getConfig(`/api/CurrentDomains`, "undefined", params, config), 
// 暂停巡检
methodName: (params, config) => this._getConfig(`/api/DetectionTasks/${params.id}/pause`, "undefined", params, config), 
// 恢复巡检
methodName: (params, config) => this._getConfig(`/api/DetectionTasks/${params.id}/resume`, "undefined", params, config), 
// 取消巡检
methodName: (params, config) => this._getConfig(`/api/DetectionTasks/${params.id}/stop`, "undefined", params, config), 
// 获取指定巡检任务的所有记录
methodName: (params, config) => this._getConfig(`/api/DetectionTasks/${params.id}/records`, "undefined", params, config), 
// 获取巡检任务详情
methodName: (params, config) => this._getConfig(`/api/DetectionTasks/${params.id}`, "undefined", params, config), 
// 获取所有巡检任务执行情况，可通过 JobId 过滤
methodName: (params, config) => this._getConfig(`/api/DetectionTasks`, "undefined", params, config), 
// 获取最新有效的巡检任务（不是重复执行的任务）
methodName: (params, config) => this._getConfig(`/api/DetectionTasks/newest_effective`, "undefined", params, config), 
// 获取最新有效的巡检任务（不是重复执行的任务）
methodName: (params, config) => this._getConfig(`/api/DetectionTasks/newest_effectives`, "undefined", params, config), 
// 重新巡检
methodName: (params, config) => this._getConfig(`/api/DetectionTasks/records/${params.id}`, "undefined", params, config), 
// 导出巡检记录
methodName: (params, config) => this._getConfig(`/api/DetectionTasks/${params.id}/export`, "undefined", params, config), 
// 导入收藏监控，一般用于设施收藏监控
methodName: (params, config) => this._getConfig(`/api/FavoriteCameraItems/import`, "undefined", params, config), 
// 创建收藏项，包括收藏组和收藏监控. 收藏类型：1-收藏组 2-收藏监控
methodName: (params, config) => this._getConfig(`/api/FavoriteCameraItems`, "undefined", params, config), 
// 条件查询收藏项
methodName: (params, config) => this._getConfig(`/api/FavoriteCameraItems`, "undefined", params, config), 
// 为设施、专题等非人创建收藏监控
methodName: (params, config) => this._getConfig(`/api/FavoriteCameraItems/sub`, "undefined", params, config), 
// 获取根收藏项
methodName: (params, config) => this._getConfig(`/api/FavoriteCameraItems/root`, "undefined", params, config), 
// 获取子收藏项
methodName: (params, config) => this._getConfig(`/api/FavoriteCameraItems/${params.parentId}/children`, "undefined", params, config), 
// 修改收藏项（监控不能修改名称）
methodName: (params, config) => this._getConfig(`/api/FavoriteCameraItems/${params.id}`, "undefined", params, config), 
// 删除收藏组或收藏监控
methodName: (params, config) => this._getConfig(`/api/FavoriteCameraItemTypes/${params.type}/FavoriteCameraItems/${params.id}`, "undefined", params, config), 
// 批量绑定收藏监控，subId为绑定 Id，subType为收藏主体类型，如收藏主体类型为电话填写phone，则subId为电话号码
methodName: (params, config) => this._getConfig(`/api/FavoriteCameraItems/${params.subType}/${params.subId}/batch`, "undefined", params, config), 
// 同步国标下级域
methodName: (params, config) => this._getConfig(`/api/GbConfigs/sync_domain`, "undefined", params, config), 
// 修改国标下级域
methodName: (params, config) => this._getConfig(`/api/GbConfigs/domains/${params.id}`, "undefined", params, config), 
// 查询国标下级域详情
methodName: (params, config) => this._getConfig(`/api/GbConfigs/domains/${params.id}`, "undefined", params, config), 
// 分页查询下级域（同步的详细信息）
methodName: (params, config) => this._getConfig(`/api/GbConfigs/domains`, "undefined", params, config), 
// 添加下级域接口
methodName: (params, config) => this._getConfig(`/api/GbConfigs/domains`, "undefined", params, config), 
// 获取未管理的下级域
methodName: (params, config) => this._getConfig(`/api/GbConfigs/unused_domains`, "undefined", params, config), 
// 批量删除国标下级域
methodName: (params, config) => this._getConfig(`/api/GbConfigs/domains/batch`, "undefined", params, config), 
// 清空下级域所有数据
methodName: (params, config) => this._getConfig(`/api/GbConfigs/domains/${params.id}/data`, "undefined", params, config), 
// 同步历史记录分页查询
methodName: (params, config) => this._getConfig(`/api/GbConfigs/domains/${params.id}/syncTaskHistories`, "undefined", params, config), 
// 同步记录数据多条件查询,传入id为同步任务的id
methodName: (params, config) => this._getConfig(`/api/GbConfigs/domains/syncTaskHistories/${params.id}/records`, "undefined", params, config), 
// 查询过期监控与监控组
methodName: (params, config) => this._getConfig(`/api/GbConfigs/domains/${params.id}/expired`, "undefined", params, config), 
// 删除过期监控与监控组
methodName: (params, config) => this._getConfig(`/api/GbConfigs/domains/${params.id}/expired/batch`, "undefined", params, config), 
// 解决同步冲突
methodName: (params, config) => this._getConfig(`/api/GbConfigs/domains/${params.id}/ResolveConflict`, "undefined", params, config), 
// 分级调度操作
methodName: (params, config) => this._getConfig(`/api/GradingDispatch`, "undefined", params, config), 
// 条件查询视频历史拉流数据
methodName: (params, config) => this._getConfig(`/api/HistoryCameraPulls/search`, "undefined", params, config), 
// 获取指定历史拉流记录的详细信息
methodName: (params, config) => this._getConfig(`/api/HistoryCameraPulls/${params.id}`, "undefined", params, config), 
// 条件查询视频历史拉流数据
methodName: (params, config) => this._getConfig(`/api/HistoryCameraPulls`, "undefined", params, config), 
// 获取所有的标签
methodName: (params, config) => this._getConfig(`/api/Label`, "undefined", params, config), 
// 创建新标签
methodName: (params, config) => this._getConfig(`/api/Label`, "undefined", params, config), 
// 修改指定标签
methodName: (params, config) => this._getConfig(`/api/Label/${params.id}`, "undefined", params, config), 
// 删除指定标签
methodName: (params, config) => this._getConfig(`/api/Label/${params.id}`, "undefined", params, config), 
// 批量删除标签
methodName: (params, config) => this._getConfig(`/api/Label/batch`, "undefined", params, config), 
// 批量设置监控或监控组下监控的标签
methodName: (params, config) => this._getConfig(`/api/Label/camera/batch`, "undefined", params, config), 
// 批量删除监控或监控组下监控的标签
methodName: (params, config) => this._getConfig(`/api/Label/camera/batch`, "undefined", params, config), 
// 导出标签
methodName: (params, config) => this._getConfig(`/api/Label/export`, "undefined", params, config), 
// 导入标签
methodName: (params, config) => this._getConfig(`/api/Label/import`, "undefined", params, config), 
// 分页查询直播列表
methodName: (params, config) => this._getConfig(`/api/Lives`, "undefined", params, config), 
// 主动打开联系人直播
methodName: (params, config) => this._getConfig(`/api/Lives`, "undefined", params, config), 
// 创建直播
methodName: (params, config) => this._getConfig(`/api/Lives`, "undefined", params, config), 
// 主动打开联系人直播，可传入直播标题和描述等信息
methodName: (params, config) => this._getConfig(`/api/Lives/open`, "undefined", params, config), 
// 向指定的直播用户发送互动语音
methodName: (params, config) => this._getConfig(`/api/Lives/${params.stream}`, "undefined", params, config), 
// 获取指定的直播信息
methodName: (params, config) => this._getConfig(`/api/Lives/${params.stream}`, "undefined", params, config), 
// 关闭指定流 Id 的直播
methodName: (params, config) => this._getConfig(`/api/Lives/${params.stream}`, "undefined", params, config), 
// 获取历史直播的录屏信息
methodName: (params, config) => this._getConfig(`/api/Lives/${params.stream}/video_records`, "undefined", params, config), 
// 同步国标下级域
methodName: (params, config) => this._getConfig(`/api/LowerDomains/sync`, "undefined", params, config), 
// 修改国标下级域
methodName: (params, config) => this._getConfig(`/api/LowerDomains/${params.id}`, "undefined", params, config), 
// 查询国标下级域详情
methodName: (params, config) => this._getConfig(`/api/LowerDomains/${params.id}`, "undefined", params, config), 
// 分页查询下级域（同步的详细信息）
methodName: (params, config) => this._getConfig(`/api/LowerDomains`, "undefined", params, config), 
// 添加下级域接口
methodName: (params, config) => this._getConfig(`/api/LowerDomains`, "undefined", params, config), 
// 获取未管理的下级域
methodName: (params, config) => this._getConfig(`/api/LowerDomains/unused_domains`, "undefined", params, config), 
// 同步历史记录分页查询
methodName: (params, config) => this._getConfig(`/api/LowerDomains/${params.id}/syncTaskHistories`, "undefined", params, config), 
// 批量删除国标下级域
methodName: (params, config) => this._getConfig(`/api/LowerDomains/batch`, "undefined", params, config), 
// 清空下级域所有数据
methodName: (params, config) => this._getConfig(`/api/LowerDomains/${params.id}/data`, "undefined", params, config), 
// 查询指定同步历史记录
methodName: (params, config) => this._getConfig(`/api/LowerDomains/syncTaskHistories/${params.id}`, "undefined", params, config), 
// 同步记录数据多条件查询,传入id为同步任务的id
methodName: (params, config) => this._getConfig(`/api/LowerDomains/syncTaskHistories/${params.id}/records`, "undefined", params, config), 
// 查询过期监控与监控组
methodName: (params, config) => this._getConfig(`/api/LowerDomains/${params.id}/expired`, "undefined", params, config), 
// 重新计算过期数据
methodName: (params, config) => this._getConfig(`/api/LowerDomains/${params.id}/expired`, "undefined", params, config), 
// 删除过期监控与监控组
methodName: (params, config) => this._getConfig(`/api/LowerDomains/${params.id}/expired/batch`, "undefined", params, config), 
// 解决同步冲突
methodName: (params, config) => this._getConfig(`/api/LowerDomains/${params.id}/Conflict`, "undefined", params, config), 
// 分页获取下级域状态变更记录
methodName: (params, config) => this._getConfig(`/api/LowerDomains/${params.id}/state/records`, "undefined", params, config), 
// 获取全部媒体服务
methodName: (params, config) => this._getConfig(`/api/MediaServers`, "undefined", params, config), 
// 查询某个流媒体实时拉流记录
methodName: (params, config) => this._getConfig(`/api/MediaSessions`, "undefined", params, config), 
// 结束拉流
methodName: (params, config) => this._getConfig(`/api/MediaSessions`, "undefined", params, config), 
// 查询具体流id的实时拉流详情信息
methodName: (params, config) => this._getConfig(`/api/MediaSessions/${params.id}`, "undefined", params, config), 
// 实时拉流记录统计
methodName: (params, config) => this._getConfig(`/api/MediaSessions/statistics`, "undefined", params, config), 
// 获取服务结点Id
methodName: (params, config) => this._getConfig(`/api/node`, "undefined", params, config), 
// 搜索录像截图操作记录以及文件信息
methodName: (params, config) => this._getConfig(`/api/Recording/search`, "undefined", params, config), 
// 流录制接口
methodName: (params, config) => this._getConfig(`/api/Recording`, "undefined", params, config), 
// 获取当前的流的录制信息状态
methodName: (params, config) => this._getConfig(`/api/Recording`, "undefined", params, config), 
// 录制状态修改
methodName: (params, config) => this._getConfig(`/api/Recording/${params.streamId}/status`, "undefined", params, config), 
// 删除指定id的记录
methodName: (params, config) => this._getConfig(`/api/Recording/${params.id}`, "undefined", params, config), 
// 批量删除
methodName: (params, config) => this._getConfig(`/api/Recording/batch/delete`, "undefined", params, config), 
// 获取信令
methodName: (params, config) => this._getConfig(`/api/Signals`, "undefined", params, config), 
// 修改信令
methodName: (params, config) => this._getConfig(`/api/Signals`, "undefined", params, config), 
// 统计监控总数（包括所有监控总数、质量优、良、差、故障的总数）
methodName: (params, config) => this._getConfig(`/api/Statistics/cameras`, "undefined", params, config), 
// 统计故障监控的总数（包括故障类型统计）
methodName: (params, config) => this._getConfig(`/api/Statistics/cameras/fault`, "undefined", params, config), 
// 统计质量差的监控总数（包括质量差类型统计）
methodName: (params, config) => this._getConfig(`/api/Statistics/cameras/bad`, "undefined", params, config), 
// 统计不同分辨率的监控总数
methodName: (params, config) => this._getConfig(`/api/Statistics/cameras/resolution`, "undefined", params, config), 
// 统计巡检历史走势
methodName: (params, config) => this._getConfig(`/api/Statistics/detectionTasks/history`, "undefined", params, config), 
// 统计质量差的监控总数（包括质量差类型统计）
methodName: (params, config) => this._getConfig(`/api/Statistics/detectionTasks/${params.jobId}/quality`, "undefined", params, config), 
// 统计质量差的监控总数（包括质量差类型统计）
methodName: (params, config) => this._getConfig(`/api/Statistics/detectionTasks/${params.jobId}/bad`, "undefined", params, config), 
// 统计巡检详情不同故障类型监控数量
methodName: (params, config) => this._getConfig(`/api/Statistics/detectionTasks/${params.jobId}/fault`, "undefined", params, config), 
// 该接口提供收藏夹总数(包括子收藏夹)
methodName: (params, config) => this._getConfig(`/api/Statistics/favoriteCameraGroup`, "undefined", params, config), 
// 查询指定job的巡检走势记录
methodName: (params, config) => this._getConfig(`/api/Statistics/detectionTasks/${params.jobId}/history`, "undefined", params, config), 
// 创建监控保活作业
methodName: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs`, "undefined", params, config), 
// 按条件查询保活作业列表
methodName: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs`, "undefined", params, config), 
// 获取指定保活作业
methodName: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs/${params.id}`, "undefined", params, config), 
// 删除保活作业
methodName: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs/${params.id}`, "undefined", params, config), 
// 修改保活作业
methodName: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs/${params.id}`, "undefined", params, config), 
// 修改保活作业的状态
methodName: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs/${params.id}/status`, "undefined", params, config), 
// 获取保活作业的执行任务
methodName: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs/${params.id}/task`, "undefined", params, config), 
// 获取保活作业指定任务的保活记录
methodName: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs/${params.id}/record`, "undefined", params, config), 
// 停止拉流
methodName: (params, config) => this._getConfig(`/api/Tests/camera/${params.id}`, "undefined", params, config), 
// 流保活接口，测试用接口
methodName: (params, config) => this._getConfig(`/api/Tests/StreamKeepAliveJobs/${params.jobId}`, "undefined", params, config), 
// 开始同步自动化测试接口
methodName: (params, config) => this._getConfig(`/api/Tests/Sync`, "undefined", params, config), 
// 推送下级同步数据
methodName: (params, config) => this._getConfig(`/api/Tests/SyncCatalog`, "undefined", params, config), 
// 推送下级同步数据
methodName: (params, config) => this._getConfig(`/api/Tests/IncrementSyncCatalog`, "undefined", params, config), 
// 添加上级域接口
methodName: (params, config) => this._getConfig(`/api/UpperDomains`, "undefined", params, config), 
// 分页查询上级域
methodName: (params, config) => this._getConfig(`/api/UpperDomains`, "undefined", params, config), 
// 修改国标上级域
methodName: (params, config) => this._getConfig(`/api/UpperDomains/${params.id}`, "undefined", params, config), 
// 删除上级域
methodName: (params, config) => this._getConfig(`/api/UpperDomains/${params.id}`, "undefined", params, config), 
// 查询上级域详情
methodName: (params, config) => this._getConfig(`/api/UpperDomains/${params.id}`, "undefined", params, config), 
// 根据同步记录id查询上级域历史同步记录
methodName: (params, config) => this._getConfig(`/api/UpperDomains/syncTaskHistories/${params.id}`, "undefined", params, config), 
// 上级域同步历史记录分页查询
methodName: (params, config) => this._getConfig(`/api/UpperDomains/${params.id}/syncTaskHistories`, "undefined", params, config), 
// 上级域同步记录数据多条件查询,传入id为同步任务的id
methodName: (params, config) => this._getConfig(`/api/UpperDomains/syncTaskHistories/${params.id}/records`, "undefined", params, config), 
// 分页获取上级域状态变更记录
methodName: (params, config) => this._getConfig(`/api/UpperDomains/${params.id}/state/records`, "undefined", params, config), 
// 同步目录给上级(自动化测试用)
methodName: (params, config) => this._getConfig(`/api/UpperDomains/${params.id}/synchronization`, "undefined", params, config), 
// 条件查询监控状态变更上报记录
methodName: (params, config) => this._getConfig(`/api/UpperDomains/cameras/state/records`, "undefined", params, config), 
// 上报监控状态到上级域
methodName: (params, config) => this._getConfig(`/api/UpperDomains/cameras/state/report`, "undefined", params, config), 
// 获取视频会议列表(无法实现)
methodName: (params, config) => this._getConfig(`/api/VideoConferences`, "undefined", params, config), 
// 邀请/取消 摄像头 摄像头ID+会议室号
methodName: (params, config) => this._getConfig(`/api/VideoConferences/${params.conferenceNumber}/invite_camera`, "undefined", params, config), 
// 邀请/取消 直播 联系人ID+会议室号
methodName: (params, config) => this._getConfig(`/api/VideoConferences/${params.conferenceNumber}/invite_live`, "undefined", params, config), 
// 会议直播 推流/取消 会议室号
methodName: (params, config) => this._getConfig(`/api/VideoConferences/${params.conferenceNumber}/to_live`, "undefined", params, config), 
// 获取会议直播直播
methodName: (params, config) => this._getConfig(`/api/VideoConferences/live/${params.conferenceNumber}`, "undefined", params, config), 
// 推流接口
methodName: (params, config) => this._getConfig(`/api/Videos/push`, "undefined", params, config), 

----

/**
 * 获取业务指标记录信息
 * @headers X-version {string}  
 * @returns
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取分组列表
 * @params GroupType {integer} -1：全部(默认)；0：监控组 1：预案组 2：自定义组 
 * @params OperateGroupType {integer} 操作的目录类型0-下级资源组1-我的资源组2-本地资源组查询根级时传null，查子级时必须带上类型, 类型从父级获取 
 * @params ParentId {string} 父节点id，不填时查询根节点 
 * @params PathPrefix {string} 路径前缀，目录有多个路径时去当前前缀相匹配的路径 
 * @params SelectedIds {array} 被选中的节点，用于计算其父节点是否是全选,半选和未选中 
 * @params UnSelectedIds {array} 被选中的节点，用于计算其父节点是否是全选,半选和未选中 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @sipServiceId {string} 国标下级Id
 *    @syncStatus {integer} 同步状态
 *    @sipServerStatus {integer} 上/下级域状态
 *    @useStatus {integer} 节点选中状态
 *    @isLeafGroup {boolean} 是否为叶子节点组。true 表示叶子节点，不会有子节点
 *    @isLeaf {boolean} 是否为叶子节点。true 表示叶子节点，不会有子节点
 *    @cameraCount {integer} 摄像头总数包含下级分组的摄像头数量
 *    @cameraOnlineCount {integer} 在线摄像头总数包含下级分组的摄像头数量
 *    @selfCameraCount {integer} 自身组的摄像头总数
 *    @selfCameraOnlineCount {integer} 自身在线摄像头总数
 *    @order {integer} 排序字段
 *    @relatedParentId {string} 预案组/自定义组下级的关联父Id
 *    @principalOut {array} 监控负责人信息
 *    @owners {array} 负责人信息
 *    @idPath {string} Id路径
 *    @namePath {string} Name路径
 *    @isUserDefined {integer} 是否人为调整：0-未调整，1-已调整
 *    @cameraQualityStatistics {object} 质量统计
 *    @selfCameraQualityStatistics {object} 质量统计
 *    @cameraResolutionStatistics {object} 分辨率统计
 *    @selfCameraResolutionStatistics {object} 分辨率统计
 *    @id {string} 组Id
 *    @name {string} 组名
 *    @parentId {string} 上级分组Id
 *    @groupType {integer} 分组类型
 *    @description {string} 描述
 *    @lastSyncTime {string} 最新同步时间
 *    @comeFrom {string} 国标下级域Id
 *    @aliasName {string} 目录别名
 *    @operate {integer} 监控或目录操作类型
 *    @position {integer} 位置
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 添加目录
 * @headers X-version {string}  
 * @params name {string} 目录名称 （必填）
 * @params type {integer} 监控组类型枚举(可以人为创建的组类型) 
 * @params parentId {string} 父节点id 
 * @params description {string} 描述信息 
 * @params owners {array} 责任人 
 * @params operateGroupType {integer} 监控组类型枚举(可以人为创建的组类型) 
 * @returns
 *    @id {string} 组Id
 *    @name {string} 组名
 *    @parentId {string} 上级分组Id
 *    @groupType {integer} 分组类型
 *    @description {string} 描述
 *    @lastSyncTime {string} 最新同步时间
 *    @comeFrom {string} 国标下级域Id
 *    @aliasName {string} 目录别名
 *    @operate {integer} 监控或目录操作类型
 *    @position {integer} 位置
*/
async methodName({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取监控和目录集合
 * @params GroupType {integer} -1：全部(默认)；0：监控组 1：预案组 2：自定义组 
 * @params OperateGroupType {integer} 操作的目录类型0-下级资源组1-我的资源组2-本地资源组查询根级时传null，查子级时必须带上类型, 类型从父级获取 
 * @params ParentId {string} 父节点id，不填时查询根节点 
 * @params PathPrefix {string} 路径前缀，目录有多个路径时去当前前缀相匹配的路径 
 * @params SelectedIds {array} 被选中的节点，用于计算其父节点是否是全选,半选和未选中 
 * @params UnSelectedIds {array} 被选中的节点，用于计算其父节点是否是全选,半选和未选中 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 批量查询监控组信息接口
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 同级监控组移动
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params groupId {string} 需要移动的组 （必填）
 * @params afterGroupId {string} 后一个，没有表示移动到后一个 
 * @params beforeGroupId {string} 前一个，没有表示移动到第一个 
 * @returns
*/
async methodName({ id, groupId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id, groupId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 根据父Id获取监控组
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @sipServiceId {string} 国标下级Id
 *    @syncStatus {integer} 同步状态
 *    @sipServerStatus {integer} 上/下级域状态
 *    @useStatus {integer} 节点选中状态
 *    @isLeafGroup {boolean} 是否为叶子节点组。true 表示叶子节点，不会有子节点
 *    @isLeaf {boolean} 是否为叶子节点。true 表示叶子节点，不会有子节点
 *    @cameraCount {integer} 摄像头总数包含下级分组的摄像头数量
 *    @cameraOnlineCount {integer} 在线摄像头总数包含下级分组的摄像头数量
 *    @selfCameraCount {integer} 自身组的摄像头总数
 *    @selfCameraOnlineCount {integer} 自身在线摄像头总数
 *    @order {integer} 排序字段
 *    @relatedParentId {string} 预案组/自定义组下级的关联父Id
 *    @principalOut {array} 监控负责人信息
 *    @owners {array} 负责人信息
 *    @idPath {string} Id路径
 *    @namePath {string} Name路径
 *    @isUserDefined {integer} 是否人为调整：0-未调整，1-已调整
 *    @cameraQualityStatistics {object} 质量统计
 *    @selfCameraQualityStatistics {object} 质量统计
 *    @cameraResolutionStatistics {object} 分辨率统计
 *    @selfCameraResolutionStatistics {object} 分辨率统计
 *    @id {string} 组Id
 *    @name {string} 组名
 *    @parentId {string} 上级分组Id
 *    @groupType {integer} 分组类型
 *    @description {string} 描述
 *    @lastSyncTime {string} 最新同步时间
 *    @comeFrom {string} 国标下级域Id
 *    @aliasName {string} 目录别名
 *    @operate {integer} 监控或目录操作类型
 *    @position {integer} 位置
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 批量添加监控组/监控到下级资源组/预案组/自定义组
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params groupIds {array} 监控组id列表 
 * @params cameraIds {array} 监控id列表 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 批量添加监控到预案组或自定义组
 * @headers X-version {string}  
 * @params cameraIds {array} 监控id列表 （必填）
 * @params groupId {string} 组id （必填）
 * @params groupType {integer} 监控组类型枚举(可以人为创建的组类型) 
 * @returns
*/
async methodName({ cameraIds, groupId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({cameraIds, groupId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 监控组搜索
 * @params Keyword {string} 关键字 （必填）
 * @params GroupType {integer} 资源所属监控组类型,0表示搜索全部，1是国标资源，2是预案资源，4是本地资源，支持多种资源搜索，比如输入5，5=1+4，搜索国标资源和本地资源 
 * @params PathPrefix {string} 路径前缀，目录有多个路径时去当前前缀相匹配的路径 
 * @params SelectedIds {array} 被选中的节点，用于计算其父节点是否是全选,半选和未选中 
 * @params UnSelectedIds {array} 被选中的节点，用于计算其父节点是否是全选,半选和未选中 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ Keyword  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,{params:{Keyword,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 监控组和监控搜索
 * @params Keyword {string} 关键字 
 * @params GroupType {integer} 资源所属监控组类型,0表示搜索全部，1是国标资源，2是预案资源，4是本地资源，支持多种资源搜索，比如输入5，5=1+4，搜索国标资源和本地资源 
 * @params PathPrefix {string} 路径前缀，目录有多个路径时去当前前缀相匹配的路径 
 * @params SelectedIds {array} 被选中的节点，用于计算其父节点是否是全选,半选和未选中 
 * @params UnSelectedIds {array} 被选中的节点，用于计算其父节点是否是全选,半选和未选中 
 * @params Status {integer} 监控状态，0表示搜索全部；1是离线；2是在线；4是下级域离线后设备离线；8是设备在录像，设备一般为 IPC；支持多种资源搜索，比如输入5，5=1+4，搜索离线和下级域离线后设备离线，该参数限制0-15 
 * @params Quality {array} 质量 
 * @params Resolution {array} 分辨率 
 * @params Encode {array} 压缩格式 
 * @params Audio {boolean} 是否有音频 
 * @params LabelIds {array} 标签 
 * @params IsSupportPTZ {boolean} 是否可以进行云台控制true-可以false-不可以null-全部 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @searchGroupOut {object} 分页查询结果
 *    @searchCameraOut {object} 分页查询结果
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 组内移动监控
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params cameraId {string} 需要移动的监控 （必填）
 * @params afterCameraId {string} 后一个，没有表示移动到后一个 
 * @params beforeCameraId {string} 前一个，没有表示移动到第一个 
 * @returns
*/
async methodName({ id, cameraId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id, cameraId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 组内监控置顶
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params cameraId {string} 监控id （必填）
 * @returns
*/
async methodName({ id, cameraId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id, cameraId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 移除预案组下得下级资源组/预案组/自定义组
 * @params id {string} id （必填）
 * @params subGroupId {string} subGroupId （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ id, subGroupId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id, subGroupId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 下级资源添加组并挂载未分配目录资源
 * @headers X-version {string}  
 * @params groupIds {array} 未分配目录中的组id集合 
 * @params cameraIds {array} 未分配目录中的监控id集合 
 * @params name {string} 组名称 （必填）
 * @params parentId {string} 上级组Id （必填）
 * @params description {string} 描述 
 * @params type {integer} 监控组类型枚举(可以人为创建的组类型) 
 * @params owners {array} 责任人 
 * @returns
 *    @sipServiceId {string} 国标下级Id
 *    @syncStatus {integer} 同步状态
 *    @sipServerStatus {integer} 上/下级域状态
 *    @useStatus {integer} 节点选中状态
 *    @isLeafGroup {boolean} 是否为叶子节点组。true 表示叶子节点，不会有子节点
 *    @isLeaf {boolean} 是否为叶子节点。true 表示叶子节点，不会有子节点
 *    @cameraCount {integer} 摄像头总数包含下级分组的摄像头数量
 *    @cameraOnlineCount {integer} 在线摄像头总数包含下级分组的摄像头数量
 *    @selfCameraCount {integer} 自身组的摄像头总数
 *    @selfCameraOnlineCount {integer} 自身在线摄像头总数
 *    @order {integer} 排序字段
 *    @relatedParentId {string} 预案组/自定义组下级的关联父Id
 *    @principalOut {array} 监控负责人信息
 *    @owners {array} 负责人信息
 *    @idPath {string} Id路径
 *    @namePath {string} Name路径
 *    @isUserDefined {integer} 是否人为调整：0-未调整，1-已调整
 *    @cameraQualityStatistics {object} 质量统计
 *    @selfCameraQualityStatistics {object} 质量统计
 *    @cameraResolutionStatistics {object} 分辨率统计
 *    @selfCameraResolutionStatistics {object} 分辨率统计
 *    @id {string} 组Id
 *    @name {string} 组名
 *    @parentId {string} 上级分组Id
 *    @groupType {integer} 分组类型
 *    @description {string} 描述
 *    @lastSyncTime {string} 最新同步时间
 *    @comeFrom {string} 国标下级域Id
 *    @aliasName {string} 目录别名
 *    @operate {integer} 监控或目录操作类型
 *    @position {integer} 位置
*/
async methodName({ name, parentId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({name, parentId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取监控组下监控（包含子组监控）
 * @headers X-version {string}  
 * @params ids {array} 组Id集合 （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ ids  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({ids,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 批量添加监控到预案组中（我的资源）
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params groupIds {array} 监控组id列表 （必填）
 * @params excludeGroupIds {array} 被排除的子节点Id列表 （必填）
 * @params cameraIds {array} 监控id列表 （必填）
 * @params excludeCameraIds {array} 被排除的监控Id列表 （必填）
 * @returns
*/
async methodName({ id, groupIds, excludeGroupIds, cameraIds, excludeCameraIds  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id, groupIds, excludeGroupIds, cameraIds, excludeCameraIds,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 批量添加目录
 * @headers X-version {string}  
 * @params name {string} 目录名称 （必填）
 * @params type {integer} 监控组类型枚举(可以人为创建的组类型) 
 * @params parentId {string} 父节点id 
 * @params description {string} 描述信息 
 * @params owners {array} 责任人 
 * @params operateGroupType {integer} 监控组类型枚举(可以人为创建的组类型) 
 * @returns
 *    @id {string} 组Id
 *    @name {string} 组名
 *    @parentId {string} 上级分组Id
 *    @groupType {integer} 分组类型
 *    @description {string} 描述
 *    @lastSyncTime {string} 最新同步时间
 *    @comeFrom {string} 国标下级域Id
 *    @aliasName {string} 目录别名
 *    @operate {integer} 监控或目录操作类型
 *    @position {integer} 位置
*/
async methodName({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 移除目录
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params parentId {string} 父亲id （必填）
 * @params operateGroupType {integer} 监控组类型枚举(可以人为创建的组类型) 
 * @returns
*/
async methodName({ id, parentId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id, parentId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 修改目录
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 修改后的组名称，下级资源只能修改别名 
 * @params description {string} 修改后的监控描述 
 * @params owners {array} 责任人 
 * @params operateGroupType {integer} 监控组类型枚举(可以人为创建的组类型) 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 移动目录
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params parentId {string} 移动到的目录id （必填）
 * @params operateGroupType {integer} 监控组类型枚举(可以人为创建的组类型) 
 * @returns
*/
async methodName({ id, parentId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id, parentId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 挂载目录
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params groupIds {array} 挂载的目录id 
 * @params operateGroupType {integer} 监控组类型枚举(可以人为创建的组类型) 
 * @returns
 *    @id {string} 组Id
 *    @name {string} 组名
 *    @parentId {string} 上级分组Id
 *    @groupType {integer} 分组类型
 *    @description {string} 描述
 *    @lastSyncTime {string} 最新同步时间
 *    @comeFrom {string} 国标下级域Id
 *    @aliasName {string} 目录别名
 *    @operate {integer} 监控或目录操作类型
 *    @position {integer} 位置
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 添加监控
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params cameraIds {array} 监控id 
 * @params groupId {string} 原始目录id 
 * @params operateGroupType {integer} 监控组类型枚举(可以人为创建的组类型) 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 移动监控
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params cameraIds {array} 监控id 
 * @params groupId {string} 原始目录id 
 * @params operateGroupType {integer} 监控组类型枚举(可以人为创建的组类型) 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 删除监控
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params cameraIds {array} 监控id 
 * @params operateGroupType {integer} 监控组类型枚举(可以人为创建的组类型) 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取目录下所有子节点（目录）
数仓使用
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取目录下所有叶子节点（监控）
数仓使用
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取删除记录
 * @params SipServiceId {string} 所属下级Id 
 * @params SyncTaskId {string} 同步任务Id 
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取全部的分组列表。
 * @params GroupType {integer} -1：全部(默认)；0：监控组 1：预案组 2：自定义组 
 * @params OperateGroupType {integer} 操作的目录类型0-下级资源组1-我的资源组2-本地资源组查询根级时传null，查子级时必须带上类型, 类型从父级获取 
 * @params ParentId {string} 父节点id，不填时查询根节点 
 * @params PathPrefix {string} 路径前缀，目录有多个路径时去当前前缀相匹配的路径 
 * @params SelectedIds {array} 被选中的节点，用于计算其父节点是否是全选,半选和未选中 
 * @params UnSelectedIds {array} 被选中的节点，用于计算其父节点是否是全选,半选和未选中 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 创建组(预案组/自定义组)
 * @headers X-version {string}  
 * @params name {string} 组名称 （必填）
 * @params parentId {string} 上级组Id （必填）
 * @params description {string} 描述 
 * @params type {integer} 监控组类型枚举(可以人为创建的组类型) 
 * @params owners {array} 责任人 
 * @returns
 *    @sipServiceId {string} 国标下级Id
 *    @syncStatus {integer} 同步状态
 *    @sipServerStatus {integer} 上/下级域状态
 *    @useStatus {integer} 节点选中状态
 *    @isLeafGroup {boolean} 是否为叶子节点组。true 表示叶子节点，不会有子节点
 *    @isLeaf {boolean} 是否为叶子节点。true 表示叶子节点，不会有子节点
 *    @cameraCount {integer} 摄像头总数包含下级分组的摄像头数量
 *    @cameraOnlineCount {integer} 在线摄像头总数包含下级分组的摄像头数量
 *    @selfCameraCount {integer} 自身组的摄像头总数
 *    @selfCameraOnlineCount {integer} 自身在线摄像头总数
 *    @order {integer} 排序字段
 *    @relatedParentId {string} 预案组/自定义组下级的关联父Id
 *    @principalOut {array} 监控负责人信息
 *    @owners {array} 负责人信息
 *    @idPath {string} Id路径
 *    @namePath {string} Name路径
 *    @isUserDefined {integer} 是否人为调整：0-未调整，1-已调整
 *    @cameraQualityStatistics {object} 质量统计
 *    @selfCameraQualityStatistics {object} 质量统计
 *    @cameraResolutionStatistics {object} 分辨率统计
 *    @selfCameraResolutionStatistics {object} 分辨率统计
 *    @id {string} 组Id
 *    @name {string} 组名
 *    @parentId {string} 上级分组Id
 *    @groupType {integer} 分组类型
 *    @description {string} 描述
 *    @lastSyncTime {string} 最新同步时间
 *    @comeFrom {string} 国标下级域Id
 *    @aliasName {string} 目录别名
 *    @operate {integer} 监控或目录操作类型
 *    @position {integer} 位置
*/
async methodName({ name, parentId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({name, parentId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 分页获取分组下的监控列表
 * @params groupId {string} groupId （必填）
 * @params KeyWord {string} 关键字 
 * @params Online {boolean} 是否在线 
 * @params Quality {array} 质量 
 * @params Resolution {array} 分辨率 
 * @params VideoEncoder {array} 压缩格式 
 * @params Audio {boolean} 是否有音频 
 * @params LabelIds {array} 标签 
 * @params IsSupportPTZ {boolean} 是否可以进行云台控制true-可以false-不可以null-全部 
 * @params PathPrefix {string} 路径前缀，目录有多个路径时去当前前缀相匹配的路径 
 * @params OperateGroupType {integer} 操作类型0-国标资源1-我的资源2-本地资源 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ groupId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({groupId,...params},{params:{groupId,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取监控flv/rtsp播放地址
 * @params id {string} id （必填）
 * @params PlayUrlShowType {integer} 播放地址返回类型。0-完整url | 1-只有路径和参数 
 * @params PathPrefix {string} 路径前缀，目录有多个路径时去当前前缀相匹配的路径 
 * @headers X-version {string}  
 * @returns
 *    @playUrlType {integer} Url对应的实体类型
 *    @rtspUrl {string} rtsp播放地址
 *    @flvUrl {string} flv播放地址
 *    @wsUrl {string} Ws 协议播放地址
 *    @rtmpUrl {string} rtmp 的协议播放地址
 *    @webRtc {string} wbertc播放地址
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 周边监控查询
 * @headers X-version {string}  
 * @params center {object} 坐标点 （必填）
 * @params radius {number} 半径（单位米） （必填）
 * @params labelIds {array} 监控标签集合 
 * @params sortRule {integer} 排序规则 
 * @params upLeft {object} 坐标点 （必填）
 * @params bottomRight {object} 坐标点 （必填）
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ center, radius, upLeft, bottomRight  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({center, radius, upLeft, bottomRight,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取监控详情
 * @params id {string} id （必填）
 * @params PlayUrlShowType {integer} 播放地址返回类型。0-完整url | 1-只有路径和参数 
 * @params PathPrefix {string} 路径前缀，目录有多个路径时去当前前缀相匹配的路径 
 * @headers X-version {string}  
 * @returns
 *    @extension {object} 扩展信息
 *    @type {integer} 终端类型.  0:国标 1:视频拉流终端 2:视频推流终端 3:视频文件终端
 *    @groupType {integer} 类型组：0-监控组，1-预案组 2-自定义组
 *    @videoEncoder {integer} 视频编码类型
 *    @resolution {integer} 分辨率
 *    @audio {boolean} 是否有音频
 *    @result {integer} 图片质量类型
 *    @resultDetail {object} 图片质量
 *    @namePath {string} 监控名字路径
 *    @idPath {string} 监控ID路径
 *    @order {integer} 排序字段
 *    @detectionCount {integer} 巡检的次数
 *    @faultDetail {integer} 质量故障的错误码：http://git.rdapp.com/product/knowledge-planet/issues/818
 *    @isManual {boolean} 是否是手动设置
 *    @labels {array} 标签
 *    @audioEncodingFormat {string} 音频编码属性
 *    @isSupportPTZ {boolean} 是否可以进行云台控制
 *    @aliasName {string} 监控别名
 *    @originalName {string} 原始名称
 *    @status {integer} 监控状态
 *    @quality {integer} 图片质量类型
 *    @areaCode {string} 行政区域码
 *    @thumbnailID {string} 图片id
 *    @playUrl {object} 返回监控播放Url实体
 *    @longitude {number} 经度
 *    @latitude {number} 纬度
 *    @id {string} ID
 *    @name {string} 名称
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 修改监控
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params aliasName {string} 监控别名 
 * @params quality {integer} 图片质量类型 
 * @params isManual {boolean} True手动检测/ false智能检测，可为null，为null表示不修改 
 * @params labelIds {array} 监控标签id （必填）
 * @params isSupportPTZ {boolean} 是否可以进行云台控制true-可以false-不可以null-不修改 
 * @params longitude {number} 经度 （必填）
 * @params latitude {number} 纬度 （必填）
 * @params areaCode {string} 行政区域码 
 * @returns
*/
async methodName({ id, labelIds, longitude, latitude  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id, labelIds, longitude, latitude,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 监控搜索（区域搜索）
 * @params UpLeft.Longitude {number} 经度 （必填）
 * @params UpLeft.Latitude {number} 纬度 （必填）
 * @params BottomRight.Longitude {number} 经度 （必填）
 * @params BottomRight.Latitude {number} 纬度 （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ UpLeft.Longitude, UpLeft.Latitude, BottomRight.Longitude, BottomRight.Latitude  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,{params:{UpLeft.Longitude, UpLeft.Latitude, BottomRight.Longitude, BottomRight.Latitude,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 监控搜索（关键字搜索）
 * @params Keyword {string} 关键字 （必填）
 * @params GroupType {integer} 组类型(类型组：0-监控组，1-自定义组) 
 * @params MaxCount {integer} 最大返回数据的数量 （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ Keyword, MaxCount  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,{params:{Keyword, MaxCount,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 生成监控静态数据cameras.json.gz
 * @headers X-version {string}  
 * @returns
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取静态资源文件名
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 监控巡检数据搜索
 * @params StartTime {string} 查询开始时间 （必填）
 * @params EndTime {string} 查询结束时间 （必填）
 * @params Keyword {string} 关键字 
 * @params Result {integer} 请求状态 
 * @params StreamId {string} 流 Id 
 * @params DeviceId {string} 终端 Id 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ StartTime, EndTime  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,{params:{StartTime, EndTime,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 监控巡检数据下载
 * @params StartTime {string} 查询开始时间 （必填）
 * @params EndTime {string} 查询结束时间 （必填）
 * @params Keyword {string} 关键字 
 * @params Result {integer} 请求状态 
 * @headers X-version {string}  
 * @returns
*/
async methodName({ StartTime, EndTime  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,{params:{StartTime, EndTime,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 修改组,监控组支持修改联系人不支持修改名称和描述，预案组和自定义组支持修改名称和描述不支持修改联系人
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 修改后的组名称，下级资源只能修改别名 
 * @params description {string} 修改后的监控描述 
 * @params owners {array} 责任人 
 * @params operateGroupType {integer} 监控组类型枚举(可以人为创建的组类型) 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 删除组(预案组/自定义组)
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 移动监控项(监控或预案组)到指定预案组
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params type {integer} 数据类型 （必填）
 * @params sourceItemId {string} 要移动的监控或预案组 Id （必填）
 * @params targetGroupId {string} 目标预案组 Id （必填）
 * @returns
*/
async methodName({ id, type, sourceItemId, targetGroupId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id, type, sourceItemId, targetGroupId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 预案分组排序接口
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params orderBy {array} 排序结果 （必填）
 * @returns
*/
async methodName({ id, orderBy  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id, orderBy,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 提供能够通过监控组直接将组下监控放到预案组中
 * @headers X-version {string}  
 * @params type {integer} 数据类型 
 * @params id {string} 数据id 摄像头id或监控组id （必填）
 * @params groupId {string} 预案组id （必填）
 * @returns
*/
async methodName({ id, groupId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id, groupId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 删除预案组/自定义组下的某个监控
 * @params groupId {string} groupId （必填）
 * @params cameraId {string} cameraId （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ groupId, cameraId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({groupId, cameraId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取预案组下被收藏的监控
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取监控所在的预案组
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 监控详情-获取监控历史巡检记录
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 监控资源-高级搜索
 * @params MaxCountCameraGroup {integer} 监控组最大返回条数 默认：20 
 * @params MaxCountCamera {integer} 监控最大返回条数 默认：50 
 * @params KeyWord {string} 关键字 
 * @params Online {boolean} 是否在线 
 * @params Quality {array} 质量0-UnDetected1-Bad2-Excellent3-Good4-Fault 
 * @params Resolution {array} 分辨率 HD-高清 SD-标清 FullHd-全高清 UHD-超高清 
 * @params Encode {array} 压缩格式0-H2641-H265 
 * @params Audio {boolean} 是否有音频 
 * @params LabelIds {array} 标签 
 * @params IsSupportPTZ {boolean} 是否可以进行云台控制true-可以false-不可以null-全部 
 * @headers X-version {string}  
 * @returns
 *    @cameraGroupSearchOuts {array} 监控组
 *    @cameraSearchOuts {array} 监控
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 控制云台
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params cmdType {integer} 云台控制命令 
 * @params speed {integer} 云台移动速度 
 * @params stop {boolean} stop:true; not stop:false 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 下级录像回放控制
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params cmdType {integer} 录像回放命令 
 * @params multiple {number} 回放控制倍数：0.25，0.5，1，2，4 
 * @params seekTime {integer} 拖动时间：播放录像起点的相对值，取值范围从0到播放录像的终点时间，单位秒，非负值0 从起点播放；100 从录像起点后的100秒处播放； now 从当前位置开始播放 
 * @params streamSessionId {integer} 回放会话ID 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 监控录像开始
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 监控录像结束
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 监控截图
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params picturesTotal {integer} 截图数量最少1张最大10张 
 * @params interval {integer} 每次截图之间的间隔最少1秒最大10秒 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 条件查询监控录像列表
 * @params KeyWord {string} 关键字搜索 
 * @params CameraId {string} 监控id当业务类型时lowerrtp时此属性是必填的，不然无法查询到对应设备的录像记录 
 * @params FileEntityType {integer} 文件类型2-Video1-Picture为null时查全部类型 
 * @params StartTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params UserId {string} 用户 
 * @params IsUnderway {boolean} 监控录制或截图正在进行中的 
 * @params FileRecordIds {array} 文件记录id 
 * @params PlatformId {string} 平台 ID 
 * @params AppName {string} 业务类型rtp-监控meetlive-视频会议subordinatertp-下级监控 
 * @params AssociationId {string} 关联id 
 * @params VideoPictureResult {integer} 是否失败0:返回全部1:返回成功的数据2:返回失败的数据默认为1 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 当前用户是否对监控录像中
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 当前用户监控录像信息
<remarks>如果用户对监控没有在录像中，则返回404，否则返回具体的录像信息</remarks>
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {integer} 唯一标识
 *    @streamId {string} 流id
 *    @associationId {string} 会议号
 *    @createTime {string} 录制开始时间
 *    @status {integer} 视频录制截图操作状态
 *    @createTimeOffset {number} 录制相对时间(单位秒)
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取监控所在的所有收藏组
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 添加监控设备
 * @headers X-version {string}  
 * @params accessType {integer} 相机接入协议类型（0：国标协议，1：onvif协议，2：DVR协议，3：RTSP协议） 
 * @params address {string} 安装地址 
 * @params block {string} 警区（可选） 
 * @params businessgroupid {string} 虚拟组织所属的业务分组ID 
 * @params certifiable {integer} 证书有效标识（有证书的设备必选）缺省为0， 0 无效， 1 有效 
 * @params certnum {string} 证书序列ar号（有证书的设备必选） 
 * @params channelId {integer} 通道号 
 * @params civilcode {string} 行政区域 
 * @params comefrom {string} 相机来自哪里 
 * @params connectType {integer} 直连方式：1 视频直连相机； 0 视频经流媒体连接 
 * @params directiontype {integer} 摄像机监视方位属性 
 * @params downloadspeed {string} 下载倍速范围 
 * @params endtime {string} 证书终止有效期（有证书的设备必选） 
 * @params errcode {integer} 无效原因（有证书且证书无效的设备必选） 
 * @params highDefinition {integer} 是否高清相机 1 高清相机；0 非高清相机 
 * @params ipaddress {string} IP地址 
 * @params isCollection {integer} 是否收藏 值是0和1。0代表未收藏；1代表已收藏，默认是0 
 * @params isPublicnNetwork {integer} 是否公网 
 * @params latitude {number} 纬度 
 * @params longitude {number} 经度 
 * @params mainSubStream {string} 主子流设置 
 * @params manufacture {string} 设备厂商 
 * @params model {string} 设备型号 
 * @params name {string} 名称 （必填）
 * @params onvifAddress {string} onvif 服务地址 （必填）
 * @params orderby {string} 排序依据 
 * @params owner {string} 设备归属 
 * @params parental {integer} 是否有子设备  0没有 1 有 （必填）
 * @params parentid {string} 父节点ID 
 * @params password {string} 密码 
 * @params port {string} 端口 
 * @params positiontype {integer} 摄像机位置类型 
 * @params ptztype {integer} 摄像机类型 1 球机， 2 半球， 3 固定枪机， 4 遥控枪机 
 * @params regionId {string} 对于直接接入本级域的相机，该字段填写本级gcserver的id；如果是下级平台接入的相机，该字段为空值 
 * @params registerway {integer} 注册方式，缺省为1；1 符合sip3261标准的认证注册模式； 2 基于口令的双向认证注册方式； 3 基于数字证书的双向认证注册方式 
 * @params resolution {string} 摄像机支持的分辨率 
 * @params rights {integer} 相机权限 
 * @params roomtype {integer} 摄像机安装位置室外，室内属性 
 * @params safetyway {integer} 信令安全模式（可选）。缺省为0； 0 不采用； 2 S/MIME签名方式； 3 S/MIME加密签名同时采用方式； 4 数字摘要方式 
 * @params secrecy {integer} 保密属性  0不涉密  1涉密 
 * @params status {integer} 1：离线，2：在线 
 * @params streamId {integer} 码流id 
 * @params streamPacketType {integer} 媒体流打包格式 
 * @params supplylighttype {integer} 摄像机补光属性 
 * @params svcspacesupportmode {integer} 空域编码能力 
 * @params userName {string} 用户名 
 * @params usetype {integer} 摄像机用途属性 
 * @params idType {integer} 需要申请id类型 （必填）
 * @params isSupportPTZ {boolean} 是否可以云台控制true-可以false-不可以 
 * @returns
 *    @cameraId {string} 设备Id
 *    @accessType {integer} 相机接入协议类型（0：国标协议，1：onvif协议，2：DVR协议，3：RTSP协议）
 *    @address {string} 安装地址
 *    @block {string} 警区（可选）
 *    @businessgroupid {string} 虚拟组织所属的业务分组ID
 *    @certifiable {integer} 证书有效标识（有证书的设备必选）缺省为0， 0 无效， 1 有效
 *    @certnum {string} 证书序列ar号（有证书的设备必选）
 *    @channelId {integer} 通道号
 *    @civilcode {string} 行政区域
 *    @comefrom {string} 相机来自哪里
 *    @connectType {integer} 直连方式：1 视频直连相机； 0 视频经流媒体连接
 *    @directiontype {integer} 摄像机监视方位属性
 *    @downloadspeed {string} 下载倍速范围
 *    @endtime {string} 证书终止有效期（有证书的设备必选）
 *    @errcode {integer} 无效原因（有证书且证书无效的设备必选）
 *    @highDefinition {integer} 是否高清相机 1 高清相机；0 非高清相机
 *    @ipaddress {string} IP地址
 *    @isCollection {integer} 是否收藏 值是0和1。0代表未收藏；1代表已收藏，默认是0
 *    @isPublicnNetwork {integer} 是否公网
 *    @latitude {number} 纬度
 *    @longitude {number} 经度
 *    @mainSubStream {string} 主子流设置
 *    @manufacture {string} 设备厂商
 *    @model {string} 设备型号
 *    @name {string} 名称
 *    @onvifAddress {string} onvif 服务地址
 *    @orderby {string} 排序依据
 *    @owner {string} 设备归属
 *    @parental {integer} 是否有子设备  0没有 1 有
 *    @parentid {string} 父节点ID
 *    @password {string} 密码
 *    @port {string} 端口
 *    @positiontype {integer} 摄像机位置类型
 *    @ptztype {integer} 摄像机类型 1 球机， 2 半球， 3 固定枪机， 4 遥控枪机
 *    @regionId {string} 对于直接接入本级域的相机，该字段填写本级gcserver的id；如果是下级平台接入的相机，该字段为空值
 *    @registerway {integer} 注册方式，缺省为1；1 符合sip3261标准的认证注册模式； 2 基于口令的双向认证注册方式； 3 基于数字证书的双向认证注册方式
 *    @resolution {string} 摄像机支持的分辨率
 *    @rights {integer} 相机权限
 *    @roomtype {integer} 摄像机安装位置室外，室内属性
 *    @safetyway {integer} 信令安全模式（可选）。缺省为0； 0 不采用； 2 S/MIME签名方式； 3 S/MIME加密签名同时采用方式； 4 数字摘要方式
 *    @secrecy {integer} 保密属性  0不涉密  1涉密
 *    @status {integer} 1：离线，2：在线
 *    @streamId {integer} 码流id
 *    @streamPacketType {integer} 媒体流打包格式
 *    @supplylighttype {integer} 摄像机补光属性
 *    @svcspacesupportmode {integer} 空域编码能力
 *    @userName {string} 用户名
 *    @usetype {integer} 摄像机用途属性
*/
async methodName({ name, onvifAddress, parental, idType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({name, onvifAddress, parental, idType,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 监控位置变更
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params longitude {number} 经度 
 * @params latitude {number} 纬度 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 根据标签Id查找监控
 * @headers X-version {string}  
 * @params labelIds {array} 标签Id 
 * @params keyword {string} 关键字 
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 导入监控（仅支持对经纬度的修改,导入后重新加载静态文件）
 * @headers X-version {string}  
 * @params importCameraLocations {array} 监控 （必填）
 * @returns
*/
async methodName({ importCameraLocations  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({importCameraLocations,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 根据监控Id集合获取监控信息
 * @headers X-version {string}  
 * @params ids {array} 监控Id集合 （必填）
 * @params playUrlShowType {integer} 播放url显示类型 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ ids  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({ids,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 批量获取监控截图文件信息接口
 * @headers X-version {string}  
 * @params ids {array} 监控Id集合 （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ ids  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({ids,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 批量设置监控行政区域码
 * @headers X-version {string}  
 * @params areaCode {string} 区域码 （必填）
 * @params cameraIds {array} 监控id列表 
 * @returns
*/
async methodName({ areaCode  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({areaCode,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取行政区域下面的监控
 * @params areaCode {string}  （必填）
 * @params PlayUrlShowType {integer} url类型0-完整 http、rtsp、ws 播放url，绝对路径1-原始播放 url，不带协议头和 ip，相对路径 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ areaCode  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({areaCode,...params},{params:{areaCode,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 搜索行政区域下的监控
 * @headers X-version {string}  
 * @params prefixAreaCodes {array} 行政区域码前缀集合 
 * @params labelIds {array} 标签id 
 * @params online {boolean} 在线状态 
 * @params keyword {string} 关键字-监控名称 
 * @params playUrlShowType {integer} 播放url显示类型 
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取下级监控录像
 * @params id {string} id （必填）
 * @params StartTime {string} 录制的开始时间 
 * @params EndTime {string} 录制的结束时间 
 * @params Limit {integer} 最大返回数量 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 条件查询监控状态变更记录
 * @params LowerDomainId {string} 下级域Id 
 * @params Online {boolean} 监控在线状态,true-在线，false-离线 
 * @params StateSource {integer} 状态变更来源：0-巡检，1-ZL拉流，2-下级上报 
 * @params StartTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 查询监控预置点位列表
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 添加监控预置点位
 * @headers X-version {string}  
 * @params cameraId {string} 监控Id （必填）
 * @params presetId {integer} 预置点编号 （必填）
 * @params presetName {string} 预置点名称 （必填）
 * @returns
 *    @id {integer} 预置点编号
 *    @name {string} 预置点名称
*/
async methodName({ cameraId, presetId, presetName  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({cameraId, presetId, presetName,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 删除监控预置点位
 * @params cameraId {string} cameraId （必填）
 * @params id {integer} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ cameraId, id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({cameraId, id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 运行监控到预置点位
 * @params cameraId {string} cameraId （必填）
 * @params id {integer} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {integer} 预置点编号
 *    @name {string} 预置点名称
*/
async methodName({ cameraId, id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({cameraId, id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 监控/运维/行政区域
 * @headers X-version {string}  
 * @params groupIds {array} 国标目录ID，运维该目录及其子目录的监控数据默认为空时，处理全部监控 
 * @returns
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 监控录像开始
 * @headers X-version {string}  
 * @params cameraId {string} 监控id （必填）
 * @params subId {string} 业务ID （必填）
 * @returns
 *    @cameraId {string} 监控Id
 *    @cameraName {string} 监控名称
 *    @messages {array} 录像或截图的失败码
 *    @isSucceed {boolean} 是否失败true成功false失败
 *    @appName {string} 业务类型rtp-监控meetlive-视频会议live-事件快报
 *    @fileSize {integer} 文件大小 单位/Byte
 *    @pullUrls {object} 流播放地址
 *    @downloadUrl {object} 下载地址
 *    @name {string} 录制记录的名称
 *    @recordId {integer} 记录id
 *    @createTime {string} 创建时间
 *    @fileId {array} 文件id
 *    @type {integer} 文件类型
 *    @endTime {string} 结束时间
*/
async methodName({ cameraId, subId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({cameraId, subId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 监控录像结束
 * @params id {integer} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取国标本级域信息
 * @headers X-version {string}  
 * @returns
 *    @gbId {string} GB ID
 *    @serverIp {string} 服务器 IP 地址
 *    @sipPort {integer} SIP 端口号
 *    @sipProtocolType {integer} SIP协议类型(0:UDP;1:TCP;2:UDP/TCP同时支持)
 *    @httpPort {integer} HTTP 端口号
 *    @publicNetworkIp {string} 公网 IP 地址
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 暂停巡检
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 恢复巡检
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 取消巡检
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取指定巡检任务的所有记录
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字 
 * @params Quality {integer} 巡检质量 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取巡检任务详情
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 巡检任务Id
 *    @jobId {string} 触发该巡检任务的定时任务Id
 *    @beginTime {string} 开始时间
 *    @endTime {string} 结束时间
 *    @detectionCameraGroupId {string} 进行巡检的监控组
 *    @pullStreamDuration {integer} 拉流时长
 *    @duration {string} 耗时
 *    @remainingDuration {string} 预计剩余耗时
 *    @taskStatus {integer} 巡检任务的状态
 *    @taskExecutedCount {integer} 该定时任务已执行次数
 *    @cameraDetectedCount {integer} 巡检任务已巡检的监控
 *    @cameraAmount {integer} 该任务需巡检的监控总数
 *    @imageAmount {integer} 截图总数
 *    @excellentCameraAmount {integer} 质量优的监控总数
 *    @goodCameraAmount {integer} 质量良的监控总数
 *    @badCameraAmount {integer} 质量差的监控总数
 *    @faultCameraAmount {integer} 故障监控总数
 *    @unDetectionCameraAmount {integer} 未检测监控总数
 *    @progress {integer} 进度
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取所有巡检任务执行情况，可通过 JobId 过滤
 * @params JobId {string} 过滤指定 Job 下的巡检任务 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取最新有效的巡检任务（不是重复执行的任务）
 * @params JobId {string} 过滤指定 Job 下的巡检任务 
 * @params CameraId {string} 巡检任务的监控组Id 
 * @params DetectionType {integer} 巡检任务组类型0监控 1标签 
 * @headers X-version {string}  
 * @returns
 *    @cameraGroupOut {object} 监控组实体
 *    @detectionTaskOut {object} 巡检任务详情
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取最新有效的巡检任务（不是重复执行的任务）
 * @headers X-version {string}  
 * @returns
 *    @cameraGroupOut {object} 监控组实体
 *    @detectionTaskOut {object} 巡检任务详情
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 重新巡检
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params qualities {array} 指定类型0-未检测1-差2-优3-良4-故障 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 导出巡检记录
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params qualities {array} 质量过滤 
 * @params fileName {string} 导出的文件名称 
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 导入收藏监控，一般用于设施收藏监控
 * @headers X-version {string}  
 * @params favoriteCameraImportItems {array} 收藏监控导入数据 
 * @returns
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 创建收藏项，包括收藏组和收藏监控. 收藏类型：1-收藏组 2-收藏监控
 * @headers X-version {string}  
 * @params nameOrId {string} 收藏项是组的时该属性为组名称，收藏项为监控时该属性为监控Id 
 * @params parentId {string} 收藏项父级(如果收藏项是父级，那么其父级则是收藏组) 
 * @params type {integer} 收藏类型 
 * @returns
 *    @id {string} 收藏项的 Id（收藏组 Id 或绑定监控关系的 Id）
 *    @cameraId {string} 收藏监控 Id
 *    @cameraStatus {integer} 监控状态
 *    @status {integer} 监控状态
 *    @name {string} 收藏项名称（只有收藏组有名称）
 *    @originalName {string} 原始名称
 *    @aliasName {string} 监控别名
 *    @parentId {string} 父Id
 *    @type {integer} 收藏类型
 *    @subType {string} 收藏主体类型创建者- creator设施- facility电话- phone路径- route行政区域- district专题- topic
 *    @labels {array} 监控标签
 *    @selfCameraCount {integer} 自身组下监控（不包括子组）
 *    @selfCameraOnlineCount {integer} 自身组下在线监控（不包括子组）
 *    @cameraCount {integer} 监控总数（包括子组）
 *    @cameraOnlineCount {integer} 在线监控总数（包括子组）
 *    @idPath {string} Id路径
 *    @namePath {string} 名字路径
 *    @parentName {string} 父级名称
 *    @result {integer} 图片质量类型
 *    @resolution {integer} 分辨率
 *    @audio {boolean} 是否有音频
 *    @audioEncodingFormat {string} 音频编码属性
 *    @videoEncoder {integer} 视频编码类型
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 条件查询收藏项
 * @params Sub {string} 收藏主体的标识符（用户收藏为 userId | 设施收藏为设施 Id） 
 * @params Type {integer} 收藏项类型(1-收藏监控组 | 2-收藏监控) 
 * @params SubType {string} 收藏主体类型（用户-creator | 设施-facility | 电话-phone | 路径-route | 行政区域-district | 专题-topic） 
 * @params Keyword {string} 关键字搜索 
 * @params LabelIds {array} 标签,只对监控有效，组是没有标签的 
 * @params PlatformId {string} 平台 Id 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 为设施、专题等非人创建收藏监控
 * @headers X-version {string}  
 * @params cameraId {string} 摄像头 Id （必填）
 * @params subId {string} 设施、专题等收藏主体 （必填）
 * @params subType {string} 收藏主体类型 
 * @returns
 *    @id {string} 收藏项的 Id（收藏组 Id 或绑定监控关系的 Id）
 *    @cameraId {string} 收藏监控 Id
 *    @cameraStatus {integer} 监控状态
 *    @status {integer} 监控状态
 *    @name {string} 收藏项名称（只有收藏组有名称）
 *    @originalName {string} 原始名称
 *    @aliasName {string} 监控别名
 *    @parentId {string} 父Id
 *    @type {integer} 收藏类型
 *    @subType {string} 收藏主体类型创建者- creator设施- facility电话- phone路径- route行政区域- district专题- topic
 *    @labels {array} 监控标签
 *    @selfCameraCount {integer} 自身组下监控（不包括子组）
 *    @selfCameraOnlineCount {integer} 自身组下在线监控（不包括子组）
 *    @cameraCount {integer} 监控总数（包括子组）
 *    @cameraOnlineCount {integer} 在线监控总数（包括子组）
 *    @idPath {string} Id路径
 *    @namePath {string} 名字路径
 *    @parentName {string} 父级名称
 *    @result {integer} 图片质量类型
 *    @resolution {integer} 分辨率
 *    @audio {boolean} 是否有音频
 *    @audioEncodingFormat {string} 音频编码属性
 *    @videoEncoder {integer} 视频编码类型
*/
async methodName({ cameraId, subId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({cameraId, subId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取根收藏项
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取子收藏项
 * @params parentId {string} parentId （必填）
 * @params type {integer}  
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ parentId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({parentId,...params},{params:{parentId,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 修改收藏项（监控不能修改名称）
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 仅限于收藏组修改 
 * @params parentId {string} 仅限于收藏监控 
 * @params cameraIds {array} 监控列表，更新收藏组下的监控当收藏类型为收藏组时，此字段有效 
 * @params type {integer} 收藏类型 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 删除收藏组或收藏监控
 * @params type {integer}  （必填）
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ type, id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({type, id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 批量绑定收藏监控，subId为绑定 Id，subType为收藏主体类型，如收藏主体类型为电话填写phone，则subId为电话号码
 * @params subId {string} subId （必填）
 * @params subType {string}  （必填）
 * @headers X-version {string}  
 * @params cameraIds {array} 更新的监控 Id 
 * @returns
*/
async methodName({ subId, subType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({subId, subType,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 同步国标下级域
 * @headers X-version {string}  
 * @params regionId {string} 下级域的国标Id （必填）
 * @params groupId {string} 指定目录Id 
 * @returns
*/
async methodName({ regionId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({regionId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 修改国标下级域
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params heartbeadCycle {integer} 心跳周期 
 * @params heartbeadTimeoutCount {integer} 心跳超时次数 
 * @params ip {string} 下级域的SIP信令IP地址 （必填）
 * @params name {string} 下级域的名称 （必填）
 * @params needAuth {integer} 是否需要认证 
 * @params password {string} 认证密码 
 * @params needMapping {boolean} 启用映射 
 * @params sipMappedAddress {string} 信令映射地址 
 * @params mediaMappedAddress {string} 流媒体映射地址 
 * @params networkType {integer} 上/下级域网络 
 * @params sipPort {integer} 下级域的SIP信令端口号 （必填）
 * @params userName {string} 用户名,建议同gbid 
 * @params rtpRecvType {integer} 国标流媒体收流协议 
 * @params rtpSendType {integer} 国标流媒体向下级发流协议 
 * @params sipTransProtocol {integer} SIP传输协议类型 
 * @params isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知,默认true 
 * @params extension {object} 扩展字段 
 * @returns
*/
async methodName({ id, ip, name, sipPort  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id, ip, name, sipPort,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 查询国标下级域详情
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @activeRegister {boolean} 是否主动注册，对上级平台被动接受注册，填false；对下级平台，需主动向上级发起注册请求，填true
 *    @civilCode {string} 区域编码
 *    @gbId {string} 国标id
 *    @heartBeadCycle {integer} 心跳周期
 *    @heartBeadTimeoutCount {integer} 心跳超时次数
 *    @ip {string} 下级域ip地址
 *    @manufacturer {integer} 厂商类型
 *    @model {string} 型号，可为空
 *    @name {string} 下级域名称
 *    @needAuth {integer} 是否需要认证
 *    @networkType {integer} 网络类型（1：内网，2：公网）
 *    @password {string} 认证密码
 *    @sipPort {integer} 端口
 *    @status {integer} 下级域状态1：设备离线2：设备在线
 *    @type {integer} 用户代理类型，常见类型，IPC:131NVR:118Platform(国标平台):2Encoder:113Decoder:114
 *    @userName {string} 认证用户名
 *    @taskStatus {integer} 同步状态
 *    @timeRemaining {integer} 同步剩余时间，单位/秒
 *    @progress {integer} 同步进度，百分比
 *    @catalogsNum {integer} 信令同步目录数量值
 *    @actualCatalogsNum {integer} 实际同步目录数量
 *    @rtpRecvType {integer} 国标流媒体收流协议
 *    @rtpSendType {integer} 国标流媒体向下级发流协议
 *    @sipTransProtocol {integer} SIP传输协议类型
 *    @isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知
 *    @stateDuration {string} 在线/离线时长
 *    @lastStateChangedTime {string} 最后一次状态变更时间
 *    @extension {object} 扩展字段
 *    @needMapping {boolean} 启用映射
 *    @sipMappedAddress {string} 信令映射地址
 *    @mediaMappedAddress {string} 流媒体映射地址
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 分页查询下级域（同步的详细信息）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 添加下级域接口
 * @headers X-version {string}  
 * @params activeRegister {boolean} 是否主动注册 
 * @params civilcode {string} 区域编码 
 * @params gbId {string} 下级域的国标id （必填）
 * @params heartbeadCycle {integer} 心跳周期 
 * @params heartbeadTimeoutCount {integer} 心跳超时次数 
 * @params ip {string} 下级域的SIP信令IP地址 （必填）
 * @params manufacturer {integer} 厂商，可为空 
 * @params model {string} 型号，可为空 
 * @params name {string} 下级域的名称 （必填）
 * @params needAuth {integer} 是否需要认证 
 * @params password {string} 认证密码 
 * @params needMapping {boolean} 启用映射 
 * @params sipMappedAddress {string} 信令映射地址 
 * @params mediaMappedAddress {string} 流媒体映射地址 
 * @params networkType {integer} 上/下级域网络 
 * @params sipPort {integer} 下级域的SIP信令端口号 （必填）
 * @params type {integer} 用户代理类型 
 * @params userName {string} 用户名,建议同gbid 
 * @params rtpRecvType {integer} 国标流媒体收流协议 
 * @params rtpSendType {integer} 国标流媒体向下级发流协议 
 * @params sipTransProtocol {integer} SIP传输协议类型 
 * @params isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知,默认true 
 * @params extension {object} 扩展字段 
 * @returns
 *    @activeRegister {boolean} 是否主动注册，对上级平台被动接受注册，填false；对下级平台，需主动向上级发起注册请求，填true
 *    @civilCode {string} 区域编码
 *    @gbId {string} 国标id
 *    @heartBeadCycle {integer} 心跳周期
 *    @heartBeadTimeoutCount {integer} 心跳超时次数
 *    @ip {string} 下级域ip地址
 *    @manufacturer {integer} 厂商类型
 *    @model {string} 型号，可为空
 *    @name {string} 下级域名称
 *    @needAuth {integer} 是否需要认证
 *    @networkType {integer} 网络类型（1：内网，2：公网）
 *    @password {string} 认证密码
 *    @sipPort {integer} 端口
 *    @status {integer} 下级域状态1：设备离线2：设备在线
 *    @type {integer} 用户代理类型，常见类型，IPC:131NVR:118Platform(国标平台):2Encoder:113Decoder:114
 *    @userName {string} 认证用户名
 *    @taskStatus {integer} 同步状态
 *    @timeRemaining {integer} 同步剩余时间，单位/秒
 *    @progress {integer} 同步进度，百分比
 *    @catalogsNum {integer} 信令同步目录数量值
 *    @actualCatalogsNum {integer} 实际同步目录数量
 *    @rtpRecvType {integer} 国标流媒体收流协议
 *    @rtpSendType {integer} 国标流媒体向下级发流协议
 *    @sipTransProtocol {integer} SIP传输协议类型
 *    @isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知
 *    @stateDuration {string} 在线/离线时长
 *    @lastStateChangedTime {string} 最后一次状态变更时间
 *    @extension {object} 扩展字段
 *    @needMapping {boolean} 启用映射
 *    @sipMappedAddress {string} 信令映射地址
 *    @mediaMappedAddress {string} 流媒体映射地址
*/
async methodName({ gbId, ip, name, sipPort  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({gbId, ip, name, sipPort,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取未管理的下级域
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 批量删除国标下级域
 * @headers X-version {string}  
 * @params gbIds {array} 下级域Id 
 * @returns
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 清空下级域所有数据
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 同步历史记录分页查询
 * @params id {string} id （必填）
 * @params SyncType {integer} 同步类型0-全量同步1-增量同步2-指定目录同步 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 同步记录数据多条件查询,传入id为同步任务的id
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字 
 * @params UpdateStatus {integer} 变更状态 
 * @params Type {integer} 数据类型1-监控2-目录null-全部 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 查询过期监控与监控组
 * @params id {string} id （必填）
 * @params Type {integer} 类型，摄像头 0 组 1 
 * @params StartTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 删除过期监控与监控组
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params type {integer} 过期记录删除类型 
 * @params records {array} 批量删除数据记录列表 
 * @params timeRange {integer} 删除近几天记录 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 解决同步冲突
 * @params id {integer} id （必填）
 * @headers X-version {string}  
 * @params conflictType {integer} 冲突的类型0-没有冲突1-组冲突2-经纬度冲突3-全都有 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 分级调度操作
 * @headers X-version {string}  
 * @params version {string} 请求版本 （必填）
 * @params id {string} Id （必填）
 * @params bizName {string} 业务名称 （必填）
 * @params bizData {object} 业务数据 （必填）
 * @params sourceId {string} 源平台 Id （必填）
 * @params destinationId {string} 目标平台 Id （必填）
 * @params type {integer} 业务类型：1-Erds|2-Vfs|3-Rms （必填）
 * @params timeout {integer} 请求超时设置(单位：秒) （必填）
 * @returns
*/
async methodName({ version, id, bizName, bizData, sourceId, destinationId, type, timeout  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({version, id, bizName, bizData, sourceId, destinationId, type, timeout,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 条件查询视频历史拉流数据
 * @params Keyword {string} 关键字模糊查询（流媒体名称，终端设备名称或流id） 
 * @params TraceId {string} TraceId 
 * @params BusinessName {string} 业务类型live-事件快报aslive-app人员直播meetlive-会议直播rtp-监控拉流null-默认全部 
 * @params IsSuccess {boolean} 拉流成功或失败true 成功false 失败null 全部 
 * @params StartTime {string} 拉流开始时间 
 * @params EndTime {string} 拉流结束时间 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取指定历史拉流记录的详细信息
 * @params id {string} id （必填）
 * @params Date {string} 指定时间，拉流开始时间， 
 * @headers X-version {string}  
 * @returns
 *    @fps {integer} 视频的帧率， 例：0fps
 *    @resolution {integer} 分辨率
 *    @audioFormat {integer} 音频类型
 *    @client {string} 拉取视频流的客户端信息ip+port
 *    @localSdpInfo {string} 本地sdp消息
 *    @remoteSdpInfo {string} 对端sdp信息
 *    @sdpDescription {string} sdp信息描述
 *    @playUrl {object} 流播放地址
 *    @files {array} 录像记录
 *    @mediaReceiveIp {string} 流媒体接收IP
 *    @mediaReceivePort {integer} 流媒体接收端口
 *    @reStreamId {integer} 复用流Id
 *    @responseInviteTime {integer} 信令时延 单位/毫秒
 *    @terminalIp {string} 终端ip
 *    @terminalPort {integer} 终端端口
 *    @terminalType {integer} 终端协议-1-未知0-GB/T 281811-RTSP2-Onvif4-非标协议5-RTMP6-WebRTC99-其它
 *    @videoRequestFlowRecords {array} 链路追踪记录
 *    @failStreamPath {integer} 流路径
 *    @id {integer} 标识id
 *    @businessName {string} 业务类型 live:事件快报，aslive：app人员直播，meetlive：会议直播
 *    @streamId {string} 流id
 *    @startTime {string} 拉流开始时间
 *    @endTime {string} 拉流结束时间
 *    @deviceId {string} 设备id
 *    @deviceName {string} 设备名称
 *    @mediaServerId {string} 流媒体Id
 *    @mediaServerName {string} 流媒体名称
 *    @firstPullTime {integer} 首次收流时长,响应延时 单位/毫秒
 *    @isSuccess {boolean} 拉流是否成功true 成功false 失败
 *    @failReason {integer} 失败信息
 *    @endReason {string} 结束原因
 *    @videoEncoder {integer} 视频编码类型
 *    @terminal {string} 终端信息ip+port
 *    @traceId {string} TraceId
 *    @areaCode {string} 行政区域码
 *    @userId {string} 用户id
 *    @userName {string} 用户名称
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 条件查询视频历史拉流数据
 * @params StartTime {string} 拉流开始时间 （必填）
 * @params StopTime {string} 拉流停止时间 （必填）
 * @params StreamId {integer} 流媒体 Id 
 * @params DeviceId {string} 终端 Id 
 * @params Keyword {string} 关键字（终端名称的模糊搜索） 
 * @params ClientAddress {string} 客户端请求地址（格式为 ip:port） 
 * @params ReceiveAddress {string} 接收端地址（格式为 ip:port） 
 * @params ForwardAddress {string} 转发地址（格式为 ip:port） 
 * @params Result {integer} 请求结果 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ StartTime, StopTime  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,{params:{StartTime, StopTime,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取所有的标签
 * @params keyWord {string}  
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 创建新标签
 * @headers X-version {string}  
 * @params title {string} 标签标题 （必填）
 * @params color {string} 标签颜色 （必填）
 * @params description {string} 标签说明 
 * @returns
 *    @id {integer} 主键
 *    @title {string} 标签标题
 *    @color {string} 标签颜色
 *    @description {string} 标签说明
*/
async methodName({ title, color  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({title, color,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 修改指定标签
 * @params id {integer} id （必填）
 * @headers X-version {string}  
 * @params title {string} 标签标题 
 * @params color {string} 标签颜色+ 
 * @params description {string} 描述 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 删除指定标签
 * @params id {integer} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 批量删除标签
 * @headers X-version {string}  
 * @params ids {array} 标签id列表,一次请求最多删除1000条，超过1000请分批请求 （必填）
 * @returns
*/
async methodName({ ids  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({ids,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 批量设置监控或监控组下监控的标签
 * @headers X-version {string}  
 * @params labelIds {array} 标签id集合,需要添加的标签id集合 （必填）
 * @params groupIds {array} 监控组id集合,需要被添加监控标签的组，选择后，对应组下的监控会被打上标签 
 * @params cameraIds {array} 监控id集合，对应的监控会打上标签 
 * @returns
*/
async methodName({ labelIds  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({labelIds,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 批量删除监控或监控组下监控的标签
 * @headers X-version {string}  
 * @params labelIds {array} 标签id集合,需要删除的标签id集合 （必填）
 * @params groupIds {array} 监控组id集合,需要被删除监控标签的组，选择后，对应组下的监控会删除对应的标签 
 * @params cameraIds {array} 监控id集合，对应的监控会删除标签 
 * @returns
*/
async methodName({ labelIds  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({labelIds,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 导出标签
 * @headers X-version {string}  
 * @params ids {array} 标签Id集合 （必填）
 * @returns
 *    @label {array} 标签集合
*/
async methodName({ ids  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({ids,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 导入标签
 * @headers X-version {string}  
 * @params label {array} 标签导入业务对象 
 * @returns
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 分页查询直播列表
 * @params ContactId {string} 联系人 Id 
 * @params LiveStatus {integer} 直播状态0-未开始1-直播中2-暂停3-停止（历史）null 查全部状态 
 * @params KeyWord {string} 关键字查询 
 * @params PlayUrlShowType {integer} 播放地址返回类型。0-完整url | 1-只有路径和参数 
 * @params AppName {string} app类型 默认：live 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 主动打开联系人直播
 * @params contactId {string} contactId （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 直播Id:578
 *    @stream {string} 直播stream
 *    @status {integer} 直播状态
 *    @liveType {integer} 直播类型
 *    @title {string} 直播标题
 *    @description {string} 直播描述
 *    @userId {string} 用户Id
 *    @userAccount {string} 用户账号
 *    @userName {string} 用户名称
 *    @createTime {string} 创建时间
 *    @rtmpUrl {string} RtmpUrl
 *    @flvUrl {string} 播放Url
 *    @rtspUrl {string} Rtsp 地址
 *    @wsUrl {string} Ws 地址
 *    @webRtcUrl {string} WebRtc 地址
 *    @relateWsUrl {string} Ws 相对地址
 *    @relateFlvUrl {string} Flv 相对地址
 *    @relateWebRtcUrl {string} WebRtc 相对地址
 *    @isGradingDispatch {boolean} 是否为分级调度的直播回调
 *    @appointment {string} 预约时间
*/
async methodName({ contactId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,{params:{contactId,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 创建直播
 * @headers X-version {string}  
 * @params groupId {string} 直播组 ID，用于指定直播权限，只能组内成员观看直播，默认 0 表示全权限 
 * @params appointment {string} 预约开播时间，默认为当前时间 
 * @params contactName {string} 主播名称 
 * @params contactId {string} 主播Id 
 * @params description {string} 描述 （必填）
 * @params title {string} 直播主题 （必填）
 * @params appName {string} 应用名称事件快报-live会议直播-MeetLive 
 * @returns
 *    @id {string} 直播Id:578
 *    @stream {string} 直播stream
 *    @status {integer} 直播状态
 *    @liveType {integer} 直播类型
 *    @title {string} 直播标题
 *    @description {string} 直播描述
 *    @userId {string} 用户Id
 *    @userAccount {string} 用户账号
 *    @userName {string} 用户名称
 *    @createTime {string} 创建时间
 *    @rtmpUrl {string} RtmpUrl
 *    @flvUrl {string} 播放Url
 *    @rtspUrl {string} Rtsp 地址
 *    @wsUrl {string} Ws 地址
 *    @webRtcUrl {string} WebRtc 地址
 *    @relateWsUrl {string} Ws 相对地址
 *    @relateFlvUrl {string} Flv 相对地址
 *    @relateWebRtcUrl {string} WebRtc 相对地址
 *    @isGradingDispatch {boolean} 是否为分级调度的直播回调
 *    @appointment {string} 预约时间
*/
async methodName({ description, title  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({description, title,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 主动打开联系人直播，可传入直播标题和描述等信息
 * @params contactId {string} contactId （必填）
 * @headers X-version {string}  
 * @params title {string} 直播标题 
 * @params description {string} 直播描述 
 * @returns
 *    @id {string} 直播Id:578
 *    @stream {string} 直播stream
 *    @status {integer} 直播状态
 *    @liveType {integer} 直播类型
 *    @title {string} 直播标题
 *    @description {string} 直播描述
 *    @userId {string} 用户Id
 *    @userAccount {string} 用户账号
 *    @userName {string} 用户名称
 *    @createTime {string} 创建时间
 *    @rtmpUrl {string} RtmpUrl
 *    @flvUrl {string} 播放Url
 *    @rtspUrl {string} Rtsp 地址
 *    @wsUrl {string} Ws 地址
 *    @webRtcUrl {string} WebRtc 地址
 *    @relateWsUrl {string} Ws 相对地址
 *    @relateFlvUrl {string} Flv 相对地址
 *    @relateWebRtcUrl {string} WebRtc 相对地址
 *    @isGradingDispatch {boolean} 是否为分级调度的直播回调
 *    @appointment {string} 预约时间
*/
async methodName({ contactId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,{params:{contactId,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 向指定的直播用户发送互动语音
 * @params stream {string} 直播地址的Stream （必填）
 * @headers X-version {string}  
 * @params base64StrAudio {string} 语音转成的base64字符 
 * @returns
*/
async methodName({ stream  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({stream,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取指定的直播信息
 * @params stream {string} 直播的Stream （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 直播Id:578
 *    @stream {string} 直播stream
 *    @status {integer} 直播状态
 *    @liveType {integer} 直播类型
 *    @title {string} 直播标题
 *    @description {string} 直播描述
 *    @userId {string} 用户Id
 *    @userAccount {string} 用户账号
 *    @userName {string} 用户名称
 *    @createTime {string} 创建时间
 *    @rtmpUrl {string} RtmpUrl
 *    @flvUrl {string} 播放Url
 *    @rtspUrl {string} Rtsp 地址
 *    @wsUrl {string} Ws 地址
 *    @webRtcUrl {string} WebRtc 地址
 *    @relateWsUrl {string} Ws 相对地址
 *    @relateFlvUrl {string} Flv 相对地址
 *    @relateWebRtcUrl {string} WebRtc 相对地址
 *    @isGradingDispatch {boolean} 是否为分级调度的直播回调
 *    @appointment {string} 预约时间
*/
async methodName({ stream  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({stream,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 关闭指定流 Id 的直播
 * @params stream {string} 流 Id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ stream  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({stream,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取历史直播的录屏信息
 * @params stream {string}  （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ stream  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({stream,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 同步国标下级域
 * @headers X-version {string}  
 * @params regionId {string} 下级域的国标Id （必填）
 * @params groupId {string} 指定目录Id 
 * @returns
*/
async methodName({ regionId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({regionId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 修改国标下级域
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params heartbeadCycle {integer} 心跳周期 
 * @params heartbeadTimeoutCount {integer} 心跳超时次数 
 * @params ip {string} 下级域的SIP信令IP地址 （必填）
 * @params name {string} 下级域的名称 （必填）
 * @params needAuth {integer} 是否需要认证 
 * @params password {string} 认证密码 
 * @params needMapping {boolean} 启用映射 
 * @params sipMappedAddress {string} 信令映射地址 
 * @params mediaMappedAddress {string} 流媒体映射地址 
 * @params networkType {integer} 上/下级域网络 
 * @params sipPort {integer} 下级域的SIP信令端口号 （必填）
 * @params userName {string} 用户名,建议同gbid 
 * @params rtpRecvType {integer} 国标流媒体收流协议 
 * @params rtpSendType {integer} 国标流媒体向下级发流协议 
 * @params sipTransProtocol {integer} SIP传输协议类型 
 * @params isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知,默认true 
 * @params extension {object} 扩展字段 
 * @returns
*/
async methodName({ id, ip, name, sipPort  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id, ip, name, sipPort,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 查询国标下级域详情
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @activeRegister {boolean} 是否主动注册，对上级平台被动接受注册，填false；对下级平台，需主动向上级发起注册请求，填true
 *    @civilCode {string} 区域编码
 *    @gbId {string} 国标id
 *    @heartBeadCycle {integer} 心跳周期
 *    @heartBeadTimeoutCount {integer} 心跳超时次数
 *    @ip {string} 下级域ip地址
 *    @manufacturer {integer} 厂商类型
 *    @model {string} 型号，可为空
 *    @name {string} 下级域名称
 *    @needAuth {integer} 是否需要认证
 *    @networkType {integer} 网络类型（1：内网，2：公网）
 *    @password {string} 认证密码
 *    @sipPort {integer} 端口
 *    @status {integer} 下级域状态1：设备离线2：设备在线
 *    @type {integer} 用户代理类型，常见类型，IPC:131NVR:118Platform(国标平台):2Encoder:113Decoder:114
 *    @userName {string} 认证用户名
 *    @taskStatus {integer} 同步状态
 *    @timeRemaining {integer} 同步剩余时间，单位/秒
 *    @progress {integer} 同步进度，百分比
 *    @catalogsNum {integer} 信令同步目录数量值
 *    @actualCatalogsNum {integer} 实际同步目录数量
 *    @rtpRecvType {integer} 国标流媒体收流协议
 *    @rtpSendType {integer} 国标流媒体向下级发流协议
 *    @sipTransProtocol {integer} SIP传输协议类型
 *    @isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知
 *    @stateDuration {string} 在线/离线时长
 *    @lastStateChangedTime {string} 最后一次状态变更时间
 *    @extension {object} 扩展字段
 *    @needMapping {boolean} 启用映射
 *    @sipMappedAddress {string} 信令映射地址
 *    @mediaMappedAddress {string} 流媒体映射地址
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 分页查询下级域（同步的详细信息）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 添加下级域接口
 * @headers X-version {string}  
 * @params activeRegister {boolean} 是否主动注册 
 * @params civilcode {string} 区域编码 
 * @params gbId {string} 下级域的国标id （必填）
 * @params heartbeadCycle {integer} 心跳周期 
 * @params heartbeadTimeoutCount {integer} 心跳超时次数 
 * @params ip {string} 下级域的SIP信令IP地址 （必填）
 * @params manufacturer {integer} 厂商，可为空 
 * @params model {string} 型号，可为空 
 * @params name {string} 下级域的名称 （必填）
 * @params needAuth {integer} 是否需要认证 
 * @params password {string} 认证密码 
 * @params needMapping {boolean} 启用映射 
 * @params sipMappedAddress {string} 信令映射地址 
 * @params mediaMappedAddress {string} 流媒体映射地址 
 * @params networkType {integer} 上/下级域网络 
 * @params sipPort {integer} 下级域的SIP信令端口号 （必填）
 * @params type {integer} 用户代理类型 
 * @params userName {string} 用户名,建议同gbid 
 * @params rtpRecvType {integer} 国标流媒体收流协议 
 * @params rtpSendType {integer} 国标流媒体向下级发流协议 
 * @params sipTransProtocol {integer} SIP传输协议类型 
 * @params isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知,默认true 
 * @params extension {object} 扩展字段 
 * @returns
 *    @activeRegister {boolean} 是否主动注册，对上级平台被动接受注册，填false；对下级平台，需主动向上级发起注册请求，填true
 *    @civilCode {string} 区域编码
 *    @gbId {string} 国标id
 *    @heartBeadCycle {integer} 心跳周期
 *    @heartBeadTimeoutCount {integer} 心跳超时次数
 *    @ip {string} 下级域ip地址
 *    @manufacturer {integer} 厂商类型
 *    @model {string} 型号，可为空
 *    @name {string} 下级域名称
 *    @needAuth {integer} 是否需要认证
 *    @networkType {integer} 网络类型（1：内网，2：公网）
 *    @password {string} 认证密码
 *    @sipPort {integer} 端口
 *    @status {integer} 下级域状态1：设备离线2：设备在线
 *    @type {integer} 用户代理类型，常见类型，IPC:131NVR:118Platform(国标平台):2Encoder:113Decoder:114
 *    @userName {string} 认证用户名
 *    @taskStatus {integer} 同步状态
 *    @timeRemaining {integer} 同步剩余时间，单位/秒
 *    @progress {integer} 同步进度，百分比
 *    @catalogsNum {integer} 信令同步目录数量值
 *    @actualCatalogsNum {integer} 实际同步目录数量
 *    @rtpRecvType {integer} 国标流媒体收流协议
 *    @rtpSendType {integer} 国标流媒体向下级发流协议
 *    @sipTransProtocol {integer} SIP传输协议类型
 *    @isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知
 *    @stateDuration {string} 在线/离线时长
 *    @lastStateChangedTime {string} 最后一次状态变更时间
 *    @extension {object} 扩展字段
 *    @needMapping {boolean} 启用映射
 *    @sipMappedAddress {string} 信令映射地址
 *    @mediaMappedAddress {string} 流媒体映射地址
*/
async methodName({ gbId, ip, name, sipPort  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({gbId, ip, name, sipPort,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取未管理的下级域
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 同步历史记录分页查询
 * @params id {string} id （必填）
 * @params SyncType {integer} 同步类型0-全量同步1-增量同步2-指定目录同步 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 批量删除国标下级域
 * @headers X-version {string}  
 * @params gbIds {array} 下级域Id 
 * @returns
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 清空下级域所有数据
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 查询指定同步历史记录
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @catalogsNum {integer} 信令同步目录数量值
 *    @actualCatalogsNum {integer} 实际同步目录数量
 *    @addNum {integer} 添加数量
 *    @updateNum {integer} 修改数量
 *    @deleteNum {integer} 删除数量
 *    @conflictNum {integer} 冲突数量
 *    @time {string} 同步耗时
 *    @offlineNum {integer} 离线数量
 *    @onlineNum {integer} 在线数量
 *    @cameraTotal {integer} 监控总数
 *    @groupTotal {integer} 监控组总数
 *    @groupId {string} 指定的目录
 *    @groupName {string} 目录名称
 *    @cameraAddNum {integer} 监控添加总数
 *    @cameraUpdateNum {integer} 监控修改总数
 *    @cameraConflictNum {integer} 监控冲突总数
 *    @groupAddNum {integer} 目录添加总数
 *    @groupUpdateNum {integer} 目录修改总数
 *    @groupConflictNum {integer} 目录冲突总数
 *    @groupDeleteNum {integer} 目录未同步总数
 *    @cameraDeleteNum {integer} 监控未同步总数
 *    @timeRemaining {integer} 同步剩余时间，单位/秒
 *    @progress {integer} 同步进度，百分比
 *    @taskId {string} 同步任务id
 *    @startTime {string} 同步任务开始时间
 *    @endTime {string} 同步任务结束时间
 *    @status {integer} 同步状态
 *    @result {integer} 同步结束，0为成功，其他为错误码
 *    @sipServerId {string} 同步上/下级Id
 *    @name {string} 名称
 *    @syncType {integer} 同步类型0-全量同步1-增量同步2-目录同步
 *    @hasConflictData {boolean} 是否有冲突数据
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 同步记录数据多条件查询,传入id为同步任务的id
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字 
 * @params UpdateStatus {integer} 变更状态 
 * @params Type {integer} 数据类型1-监控2-目录null-全部 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 查询过期监控与监控组
 * @params id {string} id （必填）
 * @params Type {integer} 类型，摄像头 0 组 1 
 * @params StartTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 重新计算过期数据
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 删除过期监控与监控组
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params type {integer} 过期记录删除类型 
 * @params records {array} 批量删除数据记录列表 
 * @params timeRange {integer} 删除近几天记录 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 解决同步冲突
 * @params id {integer} id （必填）
 * @headers X-version {string}  
 * @params conflictType {integer} 冲突的类型0-没有冲突1-组冲突2-经纬度冲突3-全都有 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 分页获取下级域状态变更记录
 * @params id {string} id （必填）
 * @params Online {boolean} 是否在线 true：在线，false：离线 
 * @params StartTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取全部媒体服务
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 查询某个流媒体实时拉流记录
 * @params MediaServerId {string} 流媒体服务ID 
 * @params Keyword {string} 终端名称，流媒体名称 
 * @params VideoEncoder {integer} 视频编码0-h2641-h265默认null-全部 
 * @params Resolution {integer} 分辨率0-高清1-标清2-全高清3-超高清默认null-全部 
 * @params BusinessName {string} 业务类型live:事件快报meetlive:会议直播rtp:监控默认null-全部 
 * @params AudioFormat {integer} 音频格式0-无1-G711A2-G711U3-AAC4-OPUS5-未知（其它） 
 * @params Order {string} 排序字段，默认时间排序 默认：CreateTime 
 * @params Desc {boolean} 是否升序，默认false - 降序 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 结束拉流
 * @headers X-version {string}  
 * @params streamId {string} 流id （必填）
 * @params mediaServerId {string} 媒体流id （必填）
 * @returns
*/
async methodName({ streamId, mediaServerId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({streamId, mediaServerId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 查询具体流id的实时拉流详情信息
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @description {string} 描述
 *    @terminalType {integer} 发送数据设备类型-1-未知0：国标类型1：RTSP视频源2：onvif4：vce非标服务视频4：RTMP视频源5：webrtc视频流）
 *    @terminalIp {string} 视频源ip
 *    @terminalPort {integer} 视频源端口
 *    @mediaReceiveIp {string} 流媒体接收IP
 *    @mediaReceivePort {integer} 流媒体接收端口
 *    @receiveStreamType {integer} 流媒体接收码流类型
 *    @receiveTransType {integer} 流媒体接收协议类型（0：国标UDP，1：国标tcp-server，2：国标tcp主动）
 *    @sessionStatus {integer} 链路状态（0：开始，1：执行，2：结束）
 *    @localSdpInfo {string} 针对国标拉流本地sdp消息
 *    @remoteSdpInfo {string} 针对国标拉流远程sdp消息
 *    @sdpDescription {string} sdp信息描述
 *    @fps {integer} 视频的帧率
 *    @playUrl {object} 流播放地址
 *    @businessName {string} 业务类型 live:事件快报，aslive：app人员直播，meetlive：会议直播
 *    @bitRate {integer} 实时码率
 *    @startTime {string} 开始拉流时间
 *    @deviceName {string} 设备名
 *    @deviceId {string} 设备名
 *    @lossPackets {integer} 丢包数
 *    @receivedPackets {integer} 收包总数
 *    @cId {string} 链路ID
 *    @videoEncoder {integer} 视频编码类型
 *    @audioFormat {integer} 音频类型
 *    @totalReaderCount {integer} 观看本视频流的总人数
 *    @mediaServerId {string} 该视频流的媒体id
 *    @mediaServerName {string} 该视频流的媒体名称
 *    @resolution {integer} 分辨率
 *    @clients {array} 客户端拉流信息
 *    @terminal {string} 终端
 *    @stream {string} 流id
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 实时拉流记录统计
 * @headers X-version {string}  
 * @returns
 *    @appLiveCount {integer} 人员直播总数
 *    @cameraCount {integer} 监控总数
 *    @meetLiveCount {integer} 会议直播总数
 *    @onlinePeopleCount {integer} 在线人员总数
 *    @pullStreamCount {integer} 拉流总数
 *    @eventReportCount {integer} 事件快报总数
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取服务结点Id
 * @headers X-version {string}  
 * @returns
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 搜索录像截图操作记录以及文件信息
 * @params KeyWord {string} 关键字搜索 
 * @params CameraId {string} 监控id当业务类型时lowerrtp时此属性是必填的，不然无法查询到对应设备的录像记录 
 * @params FileEntityType {integer} 文件类型2-Video1-Picture为null时查全部类型 
 * @params StartTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params UserId {string} 用户 
 * @params IsUnderway {boolean} 监控录制或截图正在进行中的 
 * @params FileRecordIds {array} 文件记录id 
 * @params PlatformId {string} 平台 ID 
 * @params AppName {string} 业务类型rtp-监控meetlive-视频会议subordinatertp-下级监控 
 * @params AssociationId {string} 关联id 
 * @params VideoPictureResult {integer} 是否失败0:返回全部1:返回成功的数据2:返回失败的数据默认为1 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 流录制接口
 * @headers X-version {string}  
 * @params streamId {string} 会议流id （必填）
 * @params name {string} 名称 
 * @params associationId {string} 关联资源id 
 * @returns
 *    @id {string} 记录id
 *    @streamId {string} 流id
 *    @startTime {string} 开始时间
 *    @endTime {string} 开始时间
 *    @userId {string} 用户id
 *    @files {array} 文件id集合
*/
async methodName({ streamId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({streamId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取当前的流的录制信息状态
 * @params StreamId {string} 关联id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {integer} 唯一标识
 *    @streamId {string} 流id
 *    @associationId {string} 会议号
 *    @createTime {string} 录制开始时间
 *    @status {integer} 视频录制截图操作状态
 *    @createTimeOffset {number} 录制相对时间(单位秒)
*/
async methodName({ StreamId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,{params:{StreamId,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 录制状态修改
 * @params streamId {string} streamId （必填）
 * @headers X-version {string}  
 * @params status {integer} 视频录制截图操作状态 （必填）
 * @returns
*/
async methodName({ streamId, status  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({streamId, status,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 删除指定id的记录
 * @params id {integer} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 批量删除
 * @headers X-version {string}  
 * @params deleteOperationType {integer} 资源删除操作类型 
 * @params ids {array} 需要删除的标识集合 （必填）
 * @params time {integer} 需要删除从当前时间开始前Time天的数据 
 * @returns
*/
async methodName({ ids  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({ids,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取信令
 * @headers X-version {string}  
 * @returns
 *    @isCivilCodeForParent {integer} 行政区划编码是否从父目录，0：使用parentId，1：使用civilcode
 *    @isServerIpFromConfigFile {integer} 本机服务ip是否从配置文件读取0:不从配置文件,1:从配置文件获取
 *    @dbHost {string} 数据库ip
 *    @dbPassword {string} 数据库密码
 *    @dbPort {integer} 数据库端口
 *    @dbSchema {string} 数据库名称
 *    @dbUserName {string} 数据库用户名
 *    @gbDeviceType {integer} 设备类型
 *    @gbHeartbeatInterval {integer} 心跳周期，单位秒
 *    @gbHeartbeatTimeoutTimes {integer} 最大心跳超时次数
 *    @gbPassword {string} 密码
 *    @gbServerId {string} 服务的设备ID，国标标识
 *    @gbServerIp {string} 服务地址
 *    @gbServerPort {integer} 服务端口
 *    @httpPort {integer} http协议端口
 *    @isAuth {integer} 是否需要认证
 *    @localCivilCode {string} 本地行政区划编码
 *    @sipProtocolTransportType {string} sip协议传输类型(udp或tcp，不区分大小写，默认udp)
 *    @threadPoolSize {integer} 线程池的数目，取值范围[16，100]
 *    @websocketPort {integer} websocket端口号
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 修改信令
 * @headers X-version {string}  
 * @params gbServerId {string} 服务的设备ID，国标标识 
 * @params gbServerIp {string} 服务地址 
 * @params gbServerPort {integer} 服务端口 
 * @params sipProtocolTransportType {string} sip协议传输类型(udp或tcp，不区分大小写，默认udp) 
 * @returns
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 统计监控总数（包括所有监控总数、质量优、良、差、故障的总数）
 * @headers X-version {string}  
 * @returns
 *    @amount {integer} 监控总数
 *    @excellent {integer} 质量优的监控总数
 *    @good {integer} 质量良的监控总数
 *    @bad {integer} 质量差的监控总数
 *    @fault {integer} 故障的监控总数
 *    @online {integer} 监控在线总数
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 统计故障监控的总数（包括故障类型统计）
 * @headers X-version {string}  
 * @returns
 *    @amount {integer} 故障监控总数
 *    @noFlow {integer} 无码流故障监控总数
 *    @noResponse {integer} 下级域无响应故障监控总数
 *    @internalError {integer} 国标内部错误
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 统计质量差的监控总数（包括质量差类型统计）
 * @headers X-version {string}  
 * @returns
 *    @amount {integer} 质量差的监控总数
 *    @imageQuality {integer} 图像质量监控总数
 *    @brightness {integer} 亮度监控总数
 *    @color {integer} 颜色监控总数
 *    @contrast {integer} 对比度监控总数
 *    @blur {integer} 模糊
 *    @noiseInterference {integer} 噪声干扰
 *    @scrolling {integer} 滚屏
 *    @shade {integer} 遮挡
 *    @screenFreezing {integer} 画面冻结
 *    @snr {integer} 信噪比
 *    @psnr {integer} 峰值信噪比
 *    @imageDistortion {integer} 图像畸变
 *    @blackScreen {integer} 黑屏
 *    @specialFlowerScreen {integer} 特殊花屏
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 统计不同分辨率的监控总数
 * @headers X-version {string}  
 * @returns
 *    @amount {integer} 监控总数
 *    @hd {integer} 高清
 *    @fullHd {integer} 全高清
 *    @sd {integer} 标清
 *    @uhd {integer} 超高清
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 统计巡检历史走势
 * @params JobId {string} jobid 
 * @params BeginTime {string} 开始时间 （必填）
 * @params EndTime {string} 结束时间 （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ BeginTime, EndTime  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,{params:{BeginTime, EndTime,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 统计质量差的监控总数（包括质量差类型统计）
 * @params jobId {string} jobId （必填）
 * @headers X-version {string}  
 * @returns
 *    @amount {integer} 监控总数
 *    @excellent {integer} 质量优的监控总数
 *    @good {integer} 质量良的监控总数
 *    @bad {integer} 质量差的监控总数
 *    @fault {integer} 故障的监控总数
 *    @online {integer} 监控在线总数
*/
async methodName({ jobId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({jobId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 统计质量差的监控总数（包括质量差类型统计）
 * @params jobId {string} jobId （必填）
 * @headers X-version {string}  
 * @returns
 *    @amount {integer} 质量差的监控总数
 *    @imageQuality {integer} 图像质量监控总数
 *    @brightness {integer} 亮度监控总数
 *    @color {integer} 颜色监控总数
 *    @contrast {integer} 对比度监控总数
 *    @blur {integer} 模糊
 *    @noiseInterference {integer} 噪声干扰
 *    @scrolling {integer} 滚屏
 *    @shade {integer} 遮挡
 *    @screenFreezing {integer} 画面冻结
 *    @snr {integer} 信噪比
 *    @psnr {integer} 峰值信噪比
 *    @imageDistortion {integer} 图像畸变
 *    @blackScreen {integer} 黑屏
 *    @specialFlowerScreen {integer} 特殊花屏
*/
async methodName({ jobId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({jobId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 统计巡检详情不同故障类型监控数量
 * @params jobId {string} jobId （必填）
 * @headers X-version {string}  
 * @returns
 *    @amount {integer} 故障监控总数
 *    @noFlow {integer} 无码流故障监控总数
 *    @noResponse {integer} 下级域无响应故障监控总数
 *    @internalError {integer} 国标内部错误
*/
async methodName({ jobId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({jobId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 该接口提供收藏夹总数(包括子收藏夹)
 * @headers X-version {string}  
 * @returns
 *    @favoriteCameraGroupCount {integer} 收藏夹总数
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 查询指定job的巡检走势记录
 * @params jobId {string} jobId （必填）
 * @params Limit {integer} 查询返回的记录数量 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ jobId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({jobId,...params},{params:{jobId,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 创建监控保活作业
 * @headers X-version {string}  
 * @params jobId {string} 定时任务id （必填）
 * @params type {integer} 巡检类型 0 - 监控组， 1 - 标签 
 * @params taskName {string} 任务名称 （必填）
 * @params businessId {string} 业务对象Id监控Id或标签Id （必填）
 * @params owners {array} 负责人 
 * @params notificationType {integer} 通知类型 （必填）
 * @returns
 *    @jobId {string} 定时任务Id
 *    @status {integer} 保活任务状态
 *    @businessName {string} 对象名称
 *    @businessId {string} 业务对象Id
 *    @cameraTotal {integer} 监控数量
 *    @type {integer} 巡检类型 0 - 监控组， 1 - 标签
 *    @createTime {string} 创建时间
 *    @modifyTime {string} 修改时间
 *    @owners {array} 负责人
 *    @notificationType {integer} 通知类型
 *    @retryTotal {integer} 重试总数
 *    @successesTotal {integer} 保活成功监控总数
 *    @failTotal {integer} 保活失败监控总数
 *    @executionsTotal {integer} 执行总数
 *    @taskName {string} 任务名称
*/
async methodName({ jobId, taskName, businessId, notificationType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({jobId, taskName, businessId, notificationType,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 按条件查询保活作业列表
 * @params JobIds {array} 作业Id集合 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取指定保活作业
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @jobId {string} 定时任务Id
 *    @status {integer} 保活任务状态
 *    @businessName {string} 对象名称
 *    @businessId {string} 业务对象Id
 *    @cameraTotal {integer} 监控数量
 *    @type {integer} 巡检类型 0 - 监控组， 1 - 标签
 *    @createTime {string} 创建时间
 *    @modifyTime {string} 修改时间
 *    @owners {array} 负责人
 *    @notificationType {integer} 通知类型
 *    @retryTotal {integer} 重试总数
 *    @successesTotal {integer} 保活成功监控总数
 *    @failTotal {integer} 保活失败监控总数
 *    @executionsTotal {integer} 执行总数
 *    @taskName {string} 任务名称
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 删除保活作业
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 修改保活作业
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params businessId {string} 保活的业务对象Id监控组Id或标签Id （必填）
 * @params type {integer} 巡检类型 0 - 监控组， 1 - 标签 
 * @params taskName {string} 任务名称 （必填）
 * @params owners {array} 负责人 
 * @params notificationType {integer} 通知类型 （必填）
 * @returns
*/
async methodName({ id, businessId, taskName, notificationType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id, businessId, taskName, notificationType,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 修改保活作业的状态
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params status {integer} 保活任务状态 
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取保活作业的执行任务
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取保活作业指定任务的保活记录
 * @params id {string} id （必填）
 * @params TaskID {string} 保活作业下的任务ID （必填）
 * @params CameraName {string} 监控名称 
 * @params Result {boolean} 状态，0-保活失败1-保活成功 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id, TaskID  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id, TaskID,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 停止拉流
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 流保活接口，测试用接口
 * @params jobId {string} jobId （必填）
 * @headers X-version {string}  
 * @params taskId {string} 任务Id （必填）
 * @params cameraGroupId {string} 需要保活的监控组 （必填）
 * @params keepAliveTime {integer} 保活的最大时长，单位分钟 （必填）
 * @returns
*/
async methodName({ jobId, taskId, cameraGroupId, keepAliveTime  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({jobId, taskId, cameraGroupId, keepAliveTime,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 开始同步自动化测试接口
 * @params id {string} id 
 * @headers X-version {string}  
 * @returns
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 推送下级同步数据
 * @headers X-version {string}  
 * @params cmdType {string} 命令类型 
 * @params taskId {string} 同步任务Id 
 * @params sumNum {string} 信令同步总数 
 * @params sn {string} SN 
 * @params deviceId {string} 下级Id 
 * @params deviceList {array} 设备列表 
 * @returns
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 推送下级同步数据
 * @headers X-version {string}  
 * @params cmdType {string} 命令类型 
 * @params taskId {string} 同步任务Id 
 * @params sumNum {string} 信令同步总数 
 * @params sn {string} SN 
 * @params deviceId {string} 下级Id 
 * @params deviceList {array} 设备列表 
 * @returns
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 添加上级域接口
 * @headers X-version {string}  
 * @params upperId {string} 上级域标识 （必填）
 * @params name {string} 名称 （必填）
 * @params ip {string} Ip地址 （必填）
 * @params port {integer} 端口 （必填）
 * @params sipTransProtocol {integer} SIP传输协议类型 
 * @params status {integer} 上/下级域状态 
 * @params isAuth {boolean} 是否注册认证,false:不认证;true:认证 
 * @params username {string} 注册认证账号 
 * @params password {string} 注册认证密码 
 * @params heartbeatCycle {integer} 心跳周期,单位:秒 
 * @params heartbeatTimeoutCount {integer} 心跳超时最大次数 
 * @params isPublicNetwork {integer} 上/下级域网络 
 * @params sendCatalogTransProtocol {integer} SIP传输协议类型 
 * @params sendCatalogOnceCount {integer} 一次发送目录条数,范围:1-50,仅sendCatalogTransProtocol为TCP时有效 
 * @params roleId {string} 服务的角色Id 
 * @params isRepeat {boolean} 是否支持重复数据上报,false不支持，true支持，默认不支持 
 * @params isExpired {boolean} 是否同步过期监控，false-否，true-是，默认否 
 * @params fullSyncRetainCount {integer} 全量同步保留的记录次数 
 * @params dirSyncRetainCount {integer} 指定目录同步保留的记录次数 
 * @params isUseDbSync {boolean} 是否使用数据库同步 
 * @params isNeedPushFromDomain {boolean} 下级数据推送是否需要推送给上级 
 * @params dbIp {string} 上级数据库Ip 
 * @params dbPort {integer} 上级数据库端口 
 * @params dbName {string} 上级数据库名称 
 * @params dbUser {string} 上级数据库用户名 
 * @params dbPassword {string} 上级数据库密码 
 * @params dbTableName {string} 上级数据库表名称 
 * @params dbIncrementTableName {string} 上级增量同步数据库表名称 
 * @returns
 *    @upperId {string} 上级域标识
 *    @name {string} 名称
 *    @ip {string} Ip地址
 *    @port {integer} 端口
 *    @sipTransProtocol {integer} SIP传输协议类型
 *    @status {integer} 上/下级域状态
 *    @isAuth {boolean} 是否注册认证,0:不认证;1:认证
 *    @username {string} 注册认证账号
 *    @password {string} 注册认证密码
 *    @heartbeatCycle {integer} 心跳周期,单位:秒
 *    @heartbeatTimeoutCount {integer} 心跳超时最大次数
 *    @isPublicNetwork {integer} 上/下级域网络
 *    @sendCatalogTransProtocol {integer} SIP传输协议类型
 *    @sendCatalogOnceCount {integer} 一次发送目录条数,范围:1-50,仅sendCatalogTransProtocol为TCP时有效
 *    @roleId {string} 服务的角色Id
 *    @roleName {string} 角色名称
 *    @taskStatus {integer} 同步状态
 *    @isRepeat {boolean} 是否支持重复数据上报,false不支持，true支持
 *    @isExpired {boolean} 是否同步过期监控，false-否，true-是，默认否
 *    @result {integer} 同步结果0 成功其他都是失败错误码
 *    @stateDuration {string} 状态在/离线时长
 *    @lastStateChangedTime {string} 最后一次状态变更时间
 *    @fullSyncRetainCount {integer} 全量同步保留的记录次数
 *    @dirSyncRetainCount {integer} 指定目录同步保留的记录次数
 *    @isUseDbSync {boolean} 是否使用数据库同步
 *    @isNeedPushFromDomain {boolean} 下级数据推送是否需要推送给上级
 *    @dbIp {string} 上级数据库Ip
 *    @dbPort {integer} 上级数据库端口
 *    @dbName {string} 上级数据库名称
 *    @dbUser {string} 上级数据库用户名
 *    @dbPassword {string} 上级数据库密码
 *    @dbTableName {string} 上级数据库表名称
 *    @dbIncrementTableName {string} 上级增量同步数据库表名称
 *    @lastSyncActualNum {integer} 最后一次实际同步数量
 *    @lastSyncCatalogsNum {integer} 最后一次同步总数量
 *    @timeRemaining {integer} 同步剩余时间，单位/秒
 *    @progress {integer} 同步进度，百分比
*/
async methodName({ upperId, name, ip, port  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({upperId, name, ip, port,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 分页查询上级域
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 修改国标上级域
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 名称 （必填）
 * @params ip {string} Ip地址 （必填）
 * @params port {integer} 端口 （必填）
 * @params sipTransProtocol {integer} SIP传输协议类型 
 * @params status {integer} 上/下级域状态 
 * @params isAuth {boolean} 是否注册认证,false:不认证;true:认证 
 * @params username {string} 注册认证账号 
 * @params password {string} 注册认证密码 
 * @params heartbeatCycle {integer} 心跳周期,单位:秒 
 * @params heartbeatTimeoutCount {integer} 心跳超时最大次数 
 * @params isPublicNetwork {integer} 上/下级域网络 
 * @params sendCatalogTransProtocol {integer} SIP传输协议类型 
 * @params sendCatalogOnceCount {integer} 一次发送目录条数,范围:1-50,仅sendCatalogTransProtocol为TCP时有效 
 * @params roleId {string} 服务的角色Id 
 * @params isRepeat {boolean} 是否支持重复数据上报,false不支持，true支持，默认不支持 
 * @params isExpired {boolean} 是否同步过期监控，false-否，true-是，默认否 
 * @params syncRecordSavedCount {integer} 保留同步记录次数 
 * @params fullSyncRetainCount {integer} 全量同步保留的记录次数 
 * @params dirSyncRetainCount {integer} 指定目录同步保留的记录次数 
 * @params isUseDbSync {boolean} 是否使用数据库同步 
 * @params isNeedPushFromDomain {boolean} 下级数据推送是否需要推送给上级 
 * @params dbIp {string} 上级数据库Ip 
 * @params dbPort {integer} 上级数据库端口 
 * @params dbName {string} 上级数据库名称 
 * @params dbUser {string} 上级数据库用户名 
 * @params dbPassword {string} 上级数据库密码 
 * @params dbTableName {string} 上级数据库表名称 
 * @params dbIncrementTableName {string} 上级增量同步数据库表名称 
 * @returns
*/
async methodName({ id, name, ip, port  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id, name, ip, port,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 删除上级域
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 查询上级域详情
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @lastReportTime {string} 最后一次上报完成时间
 *    @upperId {string} 上级域标识
 *    @name {string} 名称
 *    @ip {string} Ip地址
 *    @port {integer} 端口
 *    @sipTransProtocol {integer} SIP传输协议类型
 *    @status {integer} 上/下级域状态
 *    @isAuth {boolean} 是否注册认证,0:不认证;1:认证
 *    @username {string} 注册认证账号
 *    @password {string} 注册认证密码
 *    @heartbeatCycle {integer} 心跳周期,单位:秒
 *    @heartbeatTimeoutCount {integer} 心跳超时最大次数
 *    @isPublicNetwork {integer} 上/下级域网络
 *    @sendCatalogTransProtocol {integer} SIP传输协议类型
 *    @sendCatalogOnceCount {integer} 一次发送目录条数,范围:1-50,仅sendCatalogTransProtocol为TCP时有效
 *    @roleId {string} 服务的角色Id
 *    @roleName {string} 角色名称
 *    @taskStatus {integer} 同步状态
 *    @isRepeat {boolean} 是否支持重复数据上报,false不支持，true支持
 *    @isExpired {boolean} 是否同步过期监控，false-否，true-是，默认否
 *    @result {integer} 同步结果0 成功其他都是失败错误码
 *    @stateDuration {string} 状态在/离线时长
 *    @lastStateChangedTime {string} 最后一次状态变更时间
 *    @fullSyncRetainCount {integer} 全量同步保留的记录次数
 *    @dirSyncRetainCount {integer} 指定目录同步保留的记录次数
 *    @isUseDbSync {boolean} 是否使用数据库同步
 *    @isNeedPushFromDomain {boolean} 下级数据推送是否需要推送给上级
 *    @dbIp {string} 上级数据库Ip
 *    @dbPort {integer} 上级数据库端口
 *    @dbName {string} 上级数据库名称
 *    @dbUser {string} 上级数据库用户名
 *    @dbPassword {string} 上级数据库密码
 *    @dbTableName {string} 上级数据库表名称
 *    @dbIncrementTableName {string} 上级增量同步数据库表名称
 *    @lastSyncActualNum {integer} 最后一次实际同步数量
 *    @lastSyncCatalogsNum {integer} 最后一次同步总数量
 *    @timeRemaining {integer} 同步剩余时间，单位/秒
 *    @progress {integer} 同步进度，百分比
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 根据同步记录id查询上级域历史同步记录
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @catalogsNum {integer} 信令同步目录数量值
 *    @actualCatalogsNum {integer} 实际同步目录数量
 *    @addNum {integer} 添加数量
 *    @updateNum {integer} 修改数量
 *    @deleteNum {integer} 删除数量
 *    @conflictNum {integer} 冲突数量
 *    @time {string} 同步耗时
 *    @offlineNum {integer} 离线数量
 *    @onlineNum {integer} 在线数量
 *    @cameraTotal {integer} 监控总数
 *    @groupTotal {integer} 监控组总数
 *    @groupId {string} 指定的目录
 *    @groupName {string} 目录名称
 *    @cameraAddNum {integer} 监控添加总数
 *    @cameraUpdateNum {integer} 监控修改总数
 *    @cameraConflictNum {integer} 监控冲突总数
 *    @groupAddNum {integer} 目录添加总数
 *    @groupUpdateNum {integer} 目录修改总数
 *    @groupConflictNum {integer} 目录冲突总数
 *    @groupDeleteNum {integer} 目录未同步总数
 *    @cameraDeleteNum {integer} 监控未同步总数
 *    @timeRemaining {integer} 同步剩余时间，单位/秒
 *    @progress {integer} 同步进度，百分比
 *    @taskId {string} 同步任务id
 *    @startTime {string} 同步任务开始时间
 *    @endTime {string} 同步任务结束时间
 *    @status {integer} 同步状态
 *    @result {integer} 同步结束，0为成功，其他为错误码
 *    @sipServerId {string} 同步上/下级Id
 *    @name {string} 名称
 *    @syncType {integer} 同步类型0-全量同步1-增量同步2-目录同步
 *    @hasConflictData {boolean} 是否有冲突数据
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 上级域同步历史记录分页查询
 * @params id {string} id （必填）
 * @params SyncType {integer} 同步类型0-全量同步1-增量同步2-指定目录同步 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 上级域同步记录数据多条件查询,传入id为同步任务的id
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字 
 * @params UpdateStatus {integer} 变更状态 
 * @params Type {integer} 数据类型1-监控2-目录null-全部 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 分页获取上级域状态变更记录
 * @params id {string} id （必填）
 * @params Online {boolean} 是否在线 true：在线，false：离线 
 * @params StartTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 同步目录给上级(自动化测试用)
 * @params id {string} id （必填）
 * @params groupId {string} groupId 
 * @headers X-version {string}  
 * @returns
*/
async methodName({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 条件查询监控状态变更上报记录
 * @params UpperId {string} 上级域Id 
 * @params Online {boolean} 监控在线状态,true-在线，false-离线 
 * @params ReportResult {boolean} 上报结果:true-上报成功，false-上报失败 
 * @params StartTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 上报监控状态到上级域
 * @headers X-version {string}  
 * @params upperId {string} 上级域Id 
 * @returns
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取视频会议列表(无法实现)
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async methodName(params = {}, config = {}) {
    try {
        const { data } = await this.api.methodName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 邀请/取消 摄像头 摄像头ID+会议室号
 * @params conferenceNumber {string}  （必填）
 * @params cameraId {string} cameraId （必填）
 * @params isInvite {boolean}  默认：true （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ conferenceNumber, cameraId, isInvite  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({conferenceNumber,...params},{params:{conferenceNumber, cameraId, isInvite,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 邀请/取消 直播 联系人ID+会议室号
 * @params conferenceNumber {string}  （必填）
 * @params contactId {string} contactId （必填）
 * @params isInvite {boolean}  默认：true （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ conferenceNumber, contactId, isInvite  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({conferenceNumber,...params},{params:{conferenceNumber, contactId, isInvite,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 会议直播 推流/取消 会议室号
 * @params conferenceNumber {string}  （必填）
 * @params isToLive {boolean}  默认：true （必填）
 * @headers X-version {string}  
 * @returns
*/
async methodName({ conferenceNumber, isToLive  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({conferenceNumber,...params},{params:{conferenceNumber, isToLive,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 获取会议直播直播
 * @params conferenceNumber {string}  （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 直播Id:578
 *    @stream {string} 直播stream
 *    @status {integer} 直播状态
 *    @liveType {integer} 直播类型
 *    @title {string} 直播标题
 *    @description {string} 直播描述
 *    @userId {string} 用户Id
 *    @userAccount {string} 用户账号
 *    @userName {string} 用户名称
 *    @createTime {string} 创建时间
 *    @rtmpUrl {string} RtmpUrl
 *    @flvUrl {string} 播放Url
 *    @rtspUrl {string} Rtsp 地址
 *    @wsUrl {string} Ws 地址
 *    @webRtcUrl {string} WebRtc 地址
 *    @relateWsUrl {string} Ws 相对地址
 *    @relateFlvUrl {string} Flv 相对地址
 *    @relateWebRtcUrl {string} WebRtc 相对地址
 *    @isGradingDispatch {boolean} 是否为分级调度的直播回调
 *    @appointment {string} 预约时间
*/
async methodName({ conferenceNumber  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({conferenceNumber,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}


/**
 * 推流接口
 * @headers X-version {string}  
 * @params targets {array} 推送目标 （必填）
 * @params videos {array} 推送的视频列表 （必填）
 * @params operationType {integer} 操作类型 （必填）
 * @returns
*/
async methodName({ targets, videos, operationType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.methodName({targets, videos, operationType,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ methodName', error);
    }
}

