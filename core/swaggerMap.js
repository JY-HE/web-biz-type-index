/*
 * @Description: 各个服务接口数据源
 */
module.exports = {
    gcsBiz: {
        label: 'GPS点位服务',
        url: 'http://newdev.rdapp.com:53839/docs/v1/gcs-api.json',
        primaryName: 'GCSServer',
        address: '10.8.109.235',
        port: '7319',
    },
    cgsBiz: {
        label: '认知服务(文字转语音)',
        url: 'http://newdev.rdapp.com:53839/docs/v1/CognitiveService-API.json',
        primaryName: 'CognitiveServer',
        address: '10.8.109.235',
        port: '3378',
    },
    mmtBiz: {
        label: '拍传服务',
        url: 'http://newdev.rdapp.com:53839/docs/v1/MultimediaTransferService-API.json',
        primaryName: 'MultimediaTransferService',
        address: '10.8.109.235',
        port: '17599',
    },
    // aggsBiz: {
    //     label: '聚合查询服务',
    //     url: 'http://newdev.rdapp.com:53839/docs/v1/AggregationService-API.json',
    //     primaryName: 'AggregationServer',
    //     address: '10.8.109.235',
    //     port: '3885',
    // },
    // authBiz: {
    //     label: '认证授权服务',
    //     url: 'http://newdev.rdapp.com:53839/swagger/v1/swagger.json',
    //     primaryName: 'AuthenticationService',
    //     address: '10.8.109.232',
    //     port: '9810',
    // },
    // edmsBiz: {
    //     label: '调度服务',
    //     url: 'http://10.8.109.235:3333/docs/v1/EDMSV5-API.json',
    //     primaryName: 'EDMSV5',
    //     address: '10.8.109.235',
    //     port: '3333',
    // },
    // orgsBiz: {
    //     label: '组织架构服务',
    //     url: { v1: 'http://newdev.rdapp.com:53839/docs/v1/OrganizationService-API.json', v2: 'http://newdev.rdapp.com:53839/docs/v2/OrganizationService-API.json' },
    //     primaryName: 'ORGSServer',
    //     address: '10.8.109.232',
    //     port: '10270',
    //     version: 2,
    // },
    // eventBiz: {
    //     label: '事件服务',
    //     url: 'http://newdev.rdapp.com:53839/docs/v1/EventService-API.json',
    //     primaryName: 'EventServer',
    //     address: '10.8.109.235',
    //     port: '3088',
    // },
    // viscsBiz: {
    //     label: '可视化配置服务',
    //     url: 'http://newdev.rdapp.com:53839/docs/v1/VisualConfigurationService-API.json',
    //     primaryName: 'VisualConfigurationService',
    //     address: '10.8.109.231',
    //     port: '12360',
    // },
    // alarmBiz: {
    //     label: '告警服务',
    //     url: 'http://newdev.rdapp.com:53839/docs/v1/AlarmService-API.json',
    //     primaryName: 'AlarmService',
    //     address: '10.8.109.235',
    //     port: '20173',
    // },
    quartzBiz: {
        label: '定时任务服务',
        url: 'http://10.8.109.235:5198/docs/v1/QuartzService-API.json',
    },
    // geoDataBiz: {
    //     label: '地理数据服务',
    //     url: 'http://10.8.109.238:3098/docs/v1/GeoDataService-API.json',
    //     primaryName: 'GeoDataServer',
    //     address: '10.8.109.238',
    //     port: '3098',
    // },
    // fileStorageBiz: {
    //     label: '文件存储服务',
    //     url: 'http://newdev.rdapp.com:53839/docs/v1/FileStorageService-API.json',
    //     primaryName: 'FileStorageService',
    //     address: '10.8.109.235',
    //     port: '17591',
    // },
    // geoAnalysisBiz: {
    //     label: '地理分析服务',
    //     url: 'http://newdev.rdapp.com:53839/docs/v1/GeoAnalysisService-API.json',
    //     primaryName: 'GeoAnalysisServer',
    //     address: '10.8.109.235',
    //     port: '3099',
    // },
    // preplanAnalysisBiz: {
    //     label: '预案分析服务',
    //     url: 'http://10.8.109.235:3089/docs/v1/PreplanAnalysisService-API.json',
    //     primaryName: 'PreplanAnalysisServer',
    //     address: '10.8.109.235',
    //     port: '3089',
    // },
    // modelAnalysisBiz: {
    //     label: '模型分析服务',
    //     url: { v1: 'http://newdev.rdapp.com:53839/docs/v1/ModelAnalysisService-API.json', v2: 'http://newdev.rdapp.com:53839/docs/v2/ModelAnalysisService-API.json' },
    //     primaryName: 'ModelAnalysisService',
    //     address: '10.8.109.235',
    //     port: '20175',
    // },
    // videoFusionServiceBiz: {
    //     label: '视频融合服务',
    //     url: { v1: 'http://newdev.rdapp.com:53839/docs/v1/VideoFusionService-API.json', v2: 'http://newdev.rdapp.com:53839/docs/v2/VideoFusionService-API.json' },
    //     primaryName: 'VideoFusionServer',
    //     address: '10.8.109.235',
    //     port: '3078',
    // },
    // vcsBiz: {
    //     label: '视频会商服务',
    //     url: 'http://newdev.rdapp.com:53839/docs/v1/VideoConferenceService-API.json',
    //     primaryName: 'VideoConferenceServer',
    //     address: '10.8.109.235',
    //     port: '41303',
    // },
    auditBiz: {
        label: '审计服务',
        url: 'http://10.8.109.233:32537/docs/v1/AuditingService-API.json',
        primaryName: 'AuditingService',
        address: '10.8.109.233',
        port: '32537',
    },
    // assetBiz: {
    //     label: '资产服务',
    //     // url: 'http://10.8.109.242:13735/docs/v1/AssetService-API.json',
    //     // url: 'http://10.8.109.233:13735/docs/v1/AssetService-API.json',
    //     url: 'http://newdev.rdapp.com:53839/docs/v1/AssetService-API.json',
    //     primaryName: 'AssetService',
    //     address: '10.8.109.235',
    //     port: '13735',
    // },
    // alertsPlatformBiz: {
    //     label: '告警平台服务',
    //     url: 'http://newdev.rdapp.com:53839/docs/v1/AlertsPlatformService-API.json',
    //     primaryName: 'AlertsPlatformServer',
    //     address: '10.8.109.235',
    //     port: '20080',
    // },
    // // 不维护biz模块
    // facilityBiz: {
    //     label: '地理数据服务',
    //     url: 'http://10.8.109.238:3098/docs/v1/GeoDataService-API.json',
    //     primaryName: 'GeoDataServer',
    //     address: '10.8.109.233',
    //     port: '3098',
    // },
    // // dasBiz: {
    // //   label: '元数据服务',
    // //   url: 'http://10.8.109.219:9000/docs/v1/Main-API.json',
    // // },
    // scheduleBiz: {
    //     label: '日程服务',
    //     url: 'http://newdev.rdapp.com:53839/docs/v1/ScheduleService-API.json',
    //     primaryName: 'ScheduleService',
    //     address: '10.8.109.235',
    //     port: '38839',
    // },
    rrsBiz: {
        label: '资源关联服务',
        url: 'http://newdev.rdapp.com:53839/docs/v1/ResourceRelationshipService-API.json',
        primaryName: 'ResourceRelationshipService',
        address: '10.8.109.235',
        port: '54229',
    },
    dcsBiz: {
        label: '数据中台服务',
        url: 'http://newdev.rdapp.com:53839/docs/v1/DataCenterService-API.json',
        primaryName: 'DataCenterServer',
        address: '10.8.109.235',
        port: '3079',
    },
    ntsBiz: {
        label: '通知服务',
        url: 'http://newdev.rdapp.com:53839/docs/v1/NotificationService-API.json',
        primaryName: 'NotificationService',
        address: '10.8.109.235',
        port: '50078',
    },
};
