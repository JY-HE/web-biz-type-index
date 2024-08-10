/**
 * @description 获取符合查询条件的账号
 * @summary Request data types
 * @url [ get ] /api/Accounts
 * @bizName vcsBiz
 */
export type GetAccountsReqTypeByVcs = {
    keyword?: string;
    organization?: string;
    page?: number;
    per_page?: number;
    platformId?: string;
};

/**
 * @description 获取符合查询条件的账号
 * @summary Response data types
 * @url [ get ] /api/Accounts
 * @bizName vcsBiz
 */
export type GetAccountsResTypeByVcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        accountNum: string;
        organizations: Array<string>;
    }>;
};

/**
 * @description 创建账号
 * @summary Request data types
 * @url [ post ] /api/Accounts
 * @bizName vcsBiz
 */
export type PostAccountsReqTypeByVcs = {
    platformID?: string;
    name?: string;
    accountNum?: string;
    password?: string;
    organizations?: Array<string>;
    type?: 0 | 1 | 2 | 3;
};

/**
 * @description 创建账号
 * @summary Response data types
 * @url [ post ] /api/Accounts
 * @bizName vcsBiz
 */
export type PostAccountsResTypeByVcs = {
    id: string;
    name: string;
    accountNum: string;
    organizations: Array<string>;
};

/**
 * @description 通过ID获取账号
 * @summary Request data types
 * @url [ get ] /api/Accounts/{id}
 * @bizName vcsBiz
 */
export type GetAccountsIdReqTypeByVcs = {
    id: string;
    platformId?: string;
};

/**
 * @description 通过ID获取账号
 * @summary Response data types
 * @url [ get ] /api/Accounts/{id}
 * @bizName vcsBiz
 */
export type GetAccountsIdResTypeByVcs = {
    id: string;
    name: string;
    accountNum: string;
    organizations: Array<string>;
};

/**
 * @description 删除账号
 * @summary Request data types
 * @url [ delete ] /api/Accounts/{id}
 * @bizName vcsBiz
 */
export type DeleteAccountsIdReqTypeByVcs = {
    id: string;
    platformId?: string;
};

/**
 * @description 通过账号获取账号详情
 * @summary Request data types
 * @url [ get ] /api/Accounts/name/{name}
 * @bizName vcsBiz
 */
export type GetAccountsNameNameReqTypeByVcs = {
    name: string;
    platformId?: string;
};

/**
 * @description 通过账号获取账号详情
 * @summary Response data types
 * @url [ get ] /api/Accounts/name/{name}
 * @bizName vcsBiz
 */
export type GetAccountsNameNameResTypeByVcs = {
    id: string;
    name: string;
    accountNum: string;
    organizations: Array<string>;
};

/**
 * @description 获取指定id的会议
 * @summary Request data types
 * @url [ get ] /api/Conferences/{id}
 * @bizName vcsBiz
 */
export type GetConferencesIdReqTypeByVcs = {
    id: string;
    platformId?: string;
};

/**
 * @description 获取指定id的会议
 * @summary Response data types
 * @url [ get ] /api/Conferences/{id}
 * @bizName vcsBiz
 */
export type GetConferencesIdResTypeByVcs = {
    id: string;
    number: string;
    name: string;
    password: string;
    startTime: string;
    isEnableShared: boolean;
    sharedUrl: string;
    isEnabledAutoRecording: boolean;
};

/**
 * @description 结束会议
 * @summary Request data types
 * @url [ delete ] /api/Conferences/{id}
 * @bizName vcsBiz
 */
export type DeleteConferencesIdReqTypeByVcs = {
    id: string;
    videoDir?: string;
    platformId?: string;
};

/**
 * @description 通过号码获取对应的会议
 * @summary Request data types
 * @url [ get ] /api/Conferences/number/{number}
 * @bizName vcsBiz
 */
export type GetConferencesNumberNumberReqTypeByVcs = {
    number: string;
    platformId?: string;
};

/**
 * @description 通过号码获取对应的会议
 * @summary Response data types
 * @url [ get ] /api/Conferences/number/{number}
 * @bizName vcsBiz
 */
export type GetConferencesNumberNumberResTypeByVcs = {
    id: string;
    number: string;
    name: string;
    password: string;
    startTime: string;
    isEnableShared: boolean;
    sharedUrl: string;
    isEnabledAutoRecording: boolean;
};

/**
 * @description 通过会议号结束会议
 * @summary Request data types
 * @url [ delete ] /api/Conferences/number/{number}
 * @bizName vcsBiz
 */
export type DeleteConferencesNumberNumberReqTypeByVcs = {
    number: string;
    platformId?: string;
};

/**
 * @description 获取指定id的会议画面布局
 * @summary Request data types
 * @url [ get ] /api/Conferences/{id}/layout
 * @bizName vcsBiz
 */
export type GetConferencesIdLayoutReqTypeByVcs = {
    id: string;
    platformId?: string;
};

/**
 * @description 获取指定id的会议画面布局
 * @summary Response data types
 * @url [ get ] /api/Conferences/{id}/layout
 * @bizName vcsBiz
 */
export type GetConferencesIdLayoutResTypeByVcs = {
    id: string;
    isEnable: boolean;
    mode: 0 | 1 | 2 | 3;
    layoutType: 1 | 2 | 4 | 9 | 16 | 25 | 36 | 49 | 50 | 80 | 100 | 130 | 170 | 210 | 615 | 716 | 1000;
    videoRound: {
        isEnable: boolean;
        pictureNumber: number;
        roundInterval: number;
    };
    isEnabledSelfView: boolean;
    isEnabledVoiceIncentive: boolean;
    applicationTargets: Array<string>;
    sourceMemberIDs: Array<string>;
    appointScreens: Array<{
        screenNumber: number;
        memberID: string;
    }>;
};

/**
 * @description 设置会议画面布局
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/layout
 * @bizName vcsBiz
 */
export type PutConferencesIdLayoutReqTypeByVcs = {
    id: string;
    platformID?: string;
    layoutType?: 1 | 2 | 4 | 9 | 16 | 25 | 36 | 49 | 50 | 80 | 100 | 130 | 170 | 210 | 615 | 716 | 1000;
    appointScreens?: Array<{
        screenNumber: number;
        memberID: string;
    }>;
    layoutApplicationTargets?: Array<string>;
    sourceMemberIDs?: Array<string>;
    videoRound?: {
        isEnable: boolean;
        pictureNumber: number;
        roundInterval: number;
    };
};

/**
 * @description 获取指定id的会议级联会议画面布局
 * @summary Request data types
 * @url [ get ] /api/Conferences/{id}/layout/cascade
 * @bizName vcsBiz
 */
export type GetConferencesIdLayoutCascadeReqTypeByVcs = {
    id: string;
    platformId?: string;
};

/**
 * @description 获取指定id的会议级联会议画面布局
 * @summary Response data types
 * @url [ get ] /api/Conferences/{id}/layout/cascade
 * @bizName vcsBiz
 */
export type GetConferencesIdLayoutCascadeResTypeByVcs = {
    id: string;
    isEnable: boolean;
    mode: 0 | 1 | 2 | 3;
    layoutType: 1 | 2 | 4 | 9 | 16 | 25 | 36 | 49 | 50 | 80 | 100 | 130 | 170 | 210 | 615 | 716 | 1000;
    videoRound: {
        isEnable: boolean;
        pictureNumber: number;
        roundInterval: number;
    };
    isEnabledSelfView: boolean;
    isEnabledVoiceIncentive: boolean;
    applicationTargets: Array<string>;
    sourceMemberIDs: Array<string>;
    appointScreens: Array<{
        screenNumber: number;
        memberID: string;
    }>;
};

/**
 * @description 设置会议级联画面布局
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/layout/cascade
 * @bizName vcsBiz
 */
export type PutConferencesIdLayoutCascadeReqTypeByVcs = {
    id: string;
    platformID?: string;
    layoutType?: 1 | 2 | 4 | 9 | 16 | 25 | 36 | 49 | 50 | 80 | 100 | 130 | 170 | 210 | 615 | 716 | 1000;
    appointScreens?: Array<{
        screenNumber: number;
        memberID: string;
    }>;
    layoutApplicationTargets?: Array<string>;
    sourceMemberIDs?: Array<string>;
};

/**
 * @description 获取会议中的主持人列表
 * @summary Request data types
 * @url [ get ] /api/Conferences/{id}/presenters
 * @bizName vcsBiz
 */
export type GetConferencesIdPresentersReqTypeByVcs = {
    id: string;
    platformId?: string;
};

/**
 * @description 获取会议中的主持人列表
 * @summary Response data types
 * @url [ get ] /api/Conferences/{id}/presenters
 * @bizName vcsBiz
 */
export type GetConferencesIdPresentersResTypeByVcs = {
    id: string;
    name: string;
    type: 0 | 1 | 2 | 3 | 4;
    phone: string;
    requestUri: string;
    conferenceID: string;
    isPresenter: boolean;
    isMute: boolean;
    isSilence: boolean;
    isBroadcast: boolean;
    isHideScreen: boolean;
    mediaDevice: any;
};

/**
 * @description 获取会议中的成员列表
 * @summary Request data types
 * @url [ get ] /api/Conferences/{id}/conventioneers
 * @bizName vcsBiz
 */
export type GetConferencesIdConventioneersReqTypeByVcs = {
    id: string;
    platformId?: string;
};

/**
 * @description 获取会议中的成员列表
 * @summary Response data types
 * @url [ get ] /api/Conferences/{id}/conventioneers
 * @bizName vcsBiz
 */
export type GetConferencesIdConventioneersResTypeByVcs = {
    id: string;
    name: string;
    type: 0 | 1 | 2 | 3 | 4;
    phone: string;
    requestUri: string;
    conferenceID: string;
    isPresenter: boolean;
    isMute: boolean;
    isSilence: boolean;
    isBroadcast: boolean;
    isHideScreen: boolean;
    mediaDevice: any;
};

/**
 * @description 获取邀请记录列表
 * @summary Request data types
 * @url [ get ] /api/Conferences/{id}/conventioneers/inviteRecords
 * @bizName vcsBiz
 */
export type GetConferencesIdConventioneersInviteRecordsReqTypeByVcs = {
    id: string;
    platformId?: string;
};

/**
 * @description 获取邀请记录列表
 * @summary Response data types
 * @url [ get ] /api/Conferences/{id}/conventioneers/inviteRecords
 * @bizName vcsBiz
 */
export type GetConferencesIdConventioneersInviteRecordsResTypeByVcs = {
    callFails: Array<{
        id: string;
        name: string;
        type: 0 | 1 | 2 | 3 | 4;
        phone: string;
        requestUri: string;
        conferenceID: string;
        isPresenter: boolean;
        isMute: boolean;
        isSilence: boolean;
        isBroadcast: boolean;
        isHideScreen: boolean;
        mediaDevice: any;
    }>;
    callSucceeds: Array<{
        id: string;
        name: string;
        type: 0 | 1 | 2 | 3 | 4;
        phone: string;
        requestUri: string;
        conferenceID: string;
        isPresenter: boolean;
        isMute: boolean;
        isSilence: boolean;
        isBroadcast: boolean;
        isHideScreen: boolean;
        mediaDevice: any;
    }>;
};

/**
 * @description 获取会议正在广播画面的成员
 * @summary Request data types
 * @url [ get ] /api/Conferences/{id}/broadcaster
 * @bizName vcsBiz
 */
export type GetConferencesIdBroadcasterReqTypeByVcs = {
    id: string;
    platformId?: string;
};

/**
 * @description 获取会议正在广播画面的成员
 * @summary Response data types
 * @url [ get ] /api/Conferences/{id}/broadcaster
 * @bizName vcsBiz
 */
export type GetConferencesIdBroadcasterResTypeByVcs = {
    id: string;
    name: string;
    type: 0 | 1 | 2 | 3 | 4;
    phone: string;
    requestUri: string;
    conferenceID: string;
    isPresenter: boolean;
    isMute: boolean;
    isSilence: boolean;
    isBroadcast: boolean;
    isHideScreen: boolean;
    mediaDevice: any;
};

/**
 * @description 获取会议中隐藏画面的成员列表
 * @summary Request data types
 * @url [ get ] /api/Conferences/{id}/hide_conventioneers
 * @bizName vcsBiz
 */
export type GetConferencesIdHideConventioneersReqTypeByVcs = {
    id: string;
    platformId?: string;
};

/**
 * @description 获取会议中隐藏画面的成员列表
 * @summary Response data types
 * @url [ get ] /api/Conferences/{id}/hide_conventioneers
 * @bizName vcsBiz
 */
export type GetConferencesIdHideConventioneersResTypeByVcs = {
    id: string;
    name: string;
    type: 0 | 1 | 2 | 3 | 4;
    phone: string;
    requestUri: string;
    conferenceID: string;
    isPresenter: boolean;
    isMute: boolean;
    isSilence: boolean;
    isBroadcast: boolean;
    isHideScreen: boolean;
    mediaDevice: any;
};

/**
 * @description 获取会议的录制状态
 * @summary Request data types
 * @url [ get ] /api/Conferences/{id}/record
 * @bizName vcsBiz
 */
export type GetConferencesIdRecordReqTypeByVcs = {
    id: string;
    platformId?: string;
};

/**
 * @description 获取会议的录制状态
 * @summary Response data types
 * @url [ get ] /api/Conferences/{id}/record
 * @bizName vcsBiz
 */
export type GetConferencesIdRecordResTypeByVcs = {
    status: any;
    lastStopDuration: number;
    lastStartTime: string;
};

/**
 * @description 会议录制
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/record
 * @bizName vcsBiz
 */
export type PutConferencesIdRecordReqTypeByVcs = {
    id: string;
    OperationType?: number;
    platformId?: string;
};

/**
 * @description 获取会议的邀请信息
 * @summary Request data types
 * @url [ get ] /api/Conferences/{id}/invitation
 * @bizName vcsBiz
 */
export type GetConferencesIdInvitationReqTypeByVcs = {
    id: string;
    platformId?: string;
};

/**
 * @description 获取会议的邀请信息
 * @summary Response data types
 * @url [ get ] /api/Conferences/{id}/invitation
 * @bizName vcsBiz
 */
export type GetConferencesIdInvitationResTypeByVcs = {
    sfbJoinUrl: string;
    h323JoinIntranetUrl: string;
    h323JoinExternalUrl: string;
    liveBroadcastJoinUrl: string;
    webRTCJoinIntranetUrl: string;
    webRTCJoinExternaUrl: string;
    sipJoinIntranetUrl: string;
    sipJoinExternaUrl: string;
};

/**
 * @description 邀请电话入会
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/phone
 * @bizName vcsBiz
 */
export type PutConferencesIdPhoneReqTypeByVcs = {
    id: string;
    platformID?: string;
    name?: string;
    number?: string;
};

/**
 * @description 邀请账号入会
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/account
 * @bizName vcsBiz
 */
export type PutConferencesIdAccountReqTypeByVcs = {
    id: string;
    platformID?: string;
    name?: string;
};

/**
 * @description 邀请终端入会
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/terminal
 * @bizName vcsBiz
 */
export type PutConferencesIdTerminalReqTypeByVcs = {
    id: string;
    platformID?: string;
    name?: string;
    number?: string;
    password?: string;
    ip?: string;
    port?: number;
};

/**
 * @description 邀请Rtsp入会
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/rtsp
 * @bizName vcsBiz
 */
export type PutConferencesIdRtspReqTypeByVcs = {
    id: string;
    platformID?: string;
    url?: string;
    name?: string;
    rtspProtocolType?: any;
};

/**
 * @description 邀请其他类型入会
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/other
 * @bizName vcsBiz
 */
export type PutConferencesIdOtherReqTypeByVcs = {
    id: string;
    platformID?: string;
    name?: string;
    type?: 0 | 1 | 2 | 3;
};

/**
 * @description 创建会议
 * @summary Request data types
 * @url [ post ] /api/Conferences
 * @bizName vcsBiz
 */
export type PostConferencesReqTypeByVcs = {
    platformID?: string;
    name?: string;
    password?: string;
    number?: string;
    presenter?: {
        platformID: string;
        name: string;
        accountNum: string;
        password: string;
        organizations: Array<string>;
        type: 0 | 1 | 2 | 3;
    };
    jointPresenters?: Array<{
        platformID: string;
        name: string;
        accountNum: string;
        password: string;
        organizations: Array<string>;
        type: 0 | 1 | 2 | 3;
    }>;
    isEnabledSelfView?: boolean;
    isAutoRecording?: boolean;
    isEnabledMute?: boolean;
    isLayoutSpeechExcitation?: boolean;
    description?: string;
};

/**
 * @description 创建会议
 * @summary Response data types
 * @url [ post ] /api/Conferences
 * @bizName vcsBiz
 */
export type PostConferencesResTypeByVcs = {
    id: string;
    number: string;
    name: string;
    password: string;
    startTime: string;
    isEnableShared: boolean;
    sharedUrl: string;
    isEnabledAutoRecording: boolean;
    isEnabledMute: boolean;
    isLayoutSpeechExcitation: boolean;
    bingSip: string;
};

/**
 * @description 踢出指定成员
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/kick
 * @bizName vcsBiz
 */
export type PutConferencesIdKickReqTypeByVcs = {
    id: string;
    platformID?: string;
};

/**
 * @description 对指定成员(取消)禁言
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/mute
 * @bizName vcsBiz
 */
export type PutConferencesIdMuteReqTypeByVcs = {
    id: string;
    platformID?: string;
    isMute?: boolean;
};

/**
 * @description 对指定成员(取消)静音
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/silence
 * @bizName vcsBiz
 */
export type PutConferencesIdSilenceReqTypeByVcs = {
    id: string;
    platformID?: string;
    isSilence?: boolean;
};

/**
 * @description 对指定成员(取消)隔离
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/isolate
 * @bizName vcsBiz
 */
export type PutConferencesIdIsolateReqTypeByVcs = {
    id: string;
    platformID?: string;
    isIsolate?: boolean;
};

/**
 * @description (取消)广播指定成员画面
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/broadcast
 * @bizName vcsBiz
 */
export type PutConferencesIdBroadcastReqTypeByVcs = {
    id: string;
    platformID?: string;
};

/**
 * @description (取消)隐藏指定成员画面
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/screen
 * @bizName vcsBiz
 */
export type PutConferencesIdScreenReqTypeByVcs = {
    id: string;
    platformID?: string;
    isHideScreen?: boolean;
};

/**
 * @description (取消)设置成员为级联会议室
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/isCascade
 * @bizName vcsBiz
 */
export type PutConferencesIdIsCascadeReqTypeByVcs = {
    id: string;
    platformID?: string;
    isCascadeConference?: boolean;
};

/**
 * @description 设置会议画面默认布局
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/layout/default
 * @bizName vcsBiz
 */
export type PutConferencesIdLayoutDefaultReqTypeByVcs = {
    id: string;
};

/**
 * @description (取消)设置会议字幕
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/subtitle
 * @bizName vcsBiz
 */
export type PutConferencesIdSubtitleReqTypeByVcs = {
    id: string;
    platformID?: string;
    isEnable?: boolean;
    content?: string;
    fontSize?: any;
    position?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    fontColor?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    backgroundColor?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    isScroll?: boolean;
};

/**
 * @description 设置会议主持人
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/presenter
 * @bizName vcsBiz
 */
export type PutConferencesIdPresenterReqTypeByVcs = {
    id: string;
    platformID?: string;
    isSetPresenter?: boolean;
};

/**
 * @description 开启会议直播
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/live
 * @bizName vcsBiz
 */
export type PutConferencesIdLiveReqTypeByVcs = {
    id: string;
    IsEnable?: boolean;
    Address?: string;
    Resolution?: number;
    platformId?: string;
};

/**
 * @description 会议保活
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/keepalive
 * @bizName vcsBiz
 */
export type PutConferencesIdKeepaliveReqTypeByVcs = {
    id: string;
    platformId?: string;
};

/**
 * @description 会场改名
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/reName
 * @bizName vcsBiz
 */
export type PutConferencesIdReNameReqTypeByVcs = {
    id: string;
    platformID?: string;
    displayName: string;
};

/**
 * @description 打开摄像头
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/openCamera
 * @bizName vcsBiz
 */
export type PutConferencesIdOpenCameraReqTypeByVcs = {
    id: string;
    platformID?: string;
};

/**
 * @description 关闭摄像头
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/closeCamera
 * @bizName vcsBiz
 */
export type PutConferencesIdCloseCameraReqTypeByVcs = {
    id: string;
    platformID?: string;
};

/**
 * @description 设为焦点
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/focus
 * @bizName vcsBiz
 */
export type PutConferencesIdFocusReqTypeByVcs = {
    id: string;
    platformID?: string;
};

/**
 * @description 获取MCU类型信息
 * @summary Response data types
 * @url [ get ] /api/MCUData/type
 * @bizName vcsBiz
 */
export type GetMCUDataTypeResTypeByVcs = {
    type: 0 | 1 | 2 | 3;
    name: string;
};

/**
 * @description 获取符合查询条件的MCU
 * @summary Request data types
 * @url [ get ] /api/MCUData
 * @bizName vcsBiz
 */
export type GetMCUDataReqTypeByVcs = {
    page?: number;
    per_page?: number;
    platformId?: string;
};

/**
 * @description 获取符合查询条件的MCU
 * @summary Response data types
 * @url [ get ] /api/MCUData
 * @bizName vcsBiz
 */
export type GetMCUDataResTypeByVcs = {
    totalCount: number;
    records: Array<{
        id: string;
        type: 0 | 1 | 2 | 3;
        name: string;
        accessKeyID: string;
        accessKeySecret: string;
        domain: string;
        description: string;
        extension: any;
    }>;
};

/**
 * @description 创建MCU
 * @summary Request data types
 * @url [ post ] /api/MCUData
 * @bizName vcsBiz
 */
export type PostMCUDataReqTypeByVcs = {
    type?: 0 | 1 | 2 | 3;
    name: string;
    accessKeyID: string;
    accessKeySecret: string;
    domain: string;
    description?: string;
    extension?: any;
};

/**
 * @description 创建MCU
 * @summary Response data types
 * @url [ post ] /api/MCUData
 * @bizName vcsBiz
 */
export type PostMCUDataResTypeByVcs = {
    id: string;
    type: 0 | 1 | 2 | 3;
    name: string;
    accessKeyID: string;
    accessKeySecret: string;
    domain: string;
    description: string;
    extension: any;
};

/**
 * @description 通过ID获取MCU
 * @summary Request data types
 * @url [ get ] /api/MCUData/{id}
 * @bizName vcsBiz
 */
export type GetMCUDataIdReqTypeByVcs = {
    id: string;
};

/**
 * @description 通过ID获取MCU
 * @summary Response data types
 * @url [ get ] /api/MCUData/{id}
 * @bizName vcsBiz
 */
export type GetMCUDataIdResTypeByVcs = {
    id: string;
    type: 0 | 1 | 2 | 3;
    name: string;
    accessKeyID: string;
    accessKeySecret: string;
    domain: string;
    description: string;
    extension: any;
};

/**
 * @description 更新MCU
 * @summary Request data types
 * @url [ put ] /api/MCUData/{id}
 * @bizName vcsBiz
 */
export type PutMCUDataIdReqTypeByVcs = {
    id: string;
    type?: 0 | 1 | 2 | 3;
    name: string;
    accessKeyID: string;
    accessKeySecret: string;
    domain: string;
    description?: string;
    extension?: any;
};

/**
 * @description 删除MCU
 * @summary Request data types
 * @url [ delete ] /api/MCUData/{id}
 * @bizName vcsBiz
 */
export type DeleteMCUDataIdReqTypeByVcs = {
    id: string;
};

/**
 * @description 获取当前的会议平台
 * @summary Response data types
 * @url [ get ] /api/PlatformData/default
 * @bizName vcsBiz
 */
export type GetPlatformDataDefaultResTypeByVcs = {
    type: 0 | 1 | 2 | 3;
    id: string;
    name: string;
};

/**
 * @description 切换当前的会议平台
 * @summary Request data types
 * @url [ post ] /api/PlatformData/default
 * @bizName vcsBiz
 */
export type PostPlatformDataDefaultReqTypeByVcs = {
    platformType: number;
};

/**
 * @description 通过ID获取平台信息
 * @summary Request data types
 * @url [ get ] /api/PlatformData/type/{type}/{id}
 * @bizName vcsBiz
 */
export type GetPlatformDataTypeTypeIdReqTypeByVcs = {
    type: number;
    id: string;
};

/**
 * @description 通过ID获取平台信息
 * @summary Response data types
 * @url [ get ] /api/PlatformData/type/{type}/{id}
 * @bizName vcsBiz
 */
export type GetPlatformDataTypeTypeIdResTypeByVcs = {
    type: 0 | 1 | 2 | 3;
    id: string;
    name: string;
};

/**
 * @description 通过IP获取平台信息
 * @summary Request data types
 * @url [ get ] /api/PlatformData/type/{type}/ip/{ip}
 * @bizName vcsBiz
 */
export type GetPlatformDataTypeTypeIpIpReqTypeByVcs = {
    type: number;
    ip: string;
};

/**
 * @description 通过IP获取平台信息
 * @summary Response data types
 * @url [ get ] /api/PlatformData/type/{type}/ip/{ip}
 * @bizName vcsBiz
 */
export type GetPlatformDataTypeTypeIpIpResTypeByVcs = {
    type: 0 | 1 | 2 | 3;
    id: string;
    name: string;
};

/**
 * @description 获取全部平台信息
 * @summary Response data types
 * @url [ get ] /api/PlatformData
 * @bizName vcsBiz
 */
export type GetPlatformDataResTypeByVcs = {
    type: 0 | 1 | 2 | 3;
    id: string;
    name: string;
};

/**
 * @description 获取全部平台的host信息
 * @summary Response data types
 * @url [ get ] /api/PlatformData/host
 * @bizName vcsBiz
 */
export type GetPlatformDataHostResTypeByVcs = {
    type: 0 | 1 | 2 | 3;
    id: string;
    name: string;
    host: string;
};

/**
 * @description 获取全部邀请策略
 * @summary Response data types
 * @url [ get ] /api/PlatformData/strategy
 * @bizName vcsBiz
 */
export type GetPlatformDataStrategyResTypeByVcs = {
    strategyType: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    isEnable: boolean;
    description: string;
    strategies: Array<{
        accessKeyId: string;
        expression: string;
    }>;
};

/**
 * @description 获取视频会议配置
 * @summary Response data types
 * @url [ get ] /api/PlatformData/config
 * @bizName vcsBiz
 */
export type GetPlatformDataConfigResTypeByVcs = {
    data: any;
};

/**
 * @description 通过条件查找录制文件
 * @summary Request data types
 * @url [ get ] /api/Recordings
 * @bizName vcsBiz
 */
export type GetRecordingsReqTypeByVcs = {
    keyword?: string;
    StartTime: string;
    EndTime: string;
    page?: number;
    per_page?: number;
    platformId?: string;
};

/**
 * @description 通过条件查找录制文件
 * @summary Response data types
 * @url [ get ] /api/Recordings
 * @bizName vcsBiz
 */
export type GetRecordingsResTypeByVcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        startTime: string;
        endTime: string;
        files: Array<{
            id: string;
            fileName: string;
            fileType: string;
            url: string;
        }>;
    }>;
};

/**
 * @description 获取符合查询条件的终端和终端组
 * @summary Request data types
 * @url [ get ] /api/Search
 * @bizName vcsBiz
 */
export type GetSearchReqTypeByVcs = {
    keyword: string;
    MaxTotalCount?: number;
    platformId?: string;
};

/**
 * @description 获取符合查询条件的终端和终端组
 * @summary Response data types
 * @url [ get ] /api/Search
 * @bizName vcsBiz
 */
export type GetSearchResTypeByVcs = {
    terminals: {
        totalCount: number;
        records: Array<Record<string, any>>;
    };
    groups: {
        totalCount: number;
        records: Array<Record<string, any>>;
    };
};

/**
 * @description 腾讯会议使用事件订阅（Webhook）(加密)
 * @summary Request data types
 * @url [ get ] /api/TencentConference
 * @bizName vcsBiz
 */
export type GetTencentConferenceReqTypeByVcs = {
    check_str?: string;
};

/**
 * @description 腾讯会议信息回调（加密）
 * @summary Request data types
 * @url [ post ] /api/TencentConference
 * @bizName vcsBiz
 */
export type PostTencentConferenceReqTypeByVcs = {
    data?: string;
};

/**
 * @description 分页查询组织架构下的终端
 * @summary Request data types
 * @url [ get ] /api/TerminalOrganizations/{id}/terminals
 * @bizName vcsBiz
 */
export type GetTerminalOrganizationsIdTerminalsReqTypeByVcs = {
    id: string;
    page?: number;
    per_page?: number;
    platformId?: string;
};

/**
 * @description 分页查询组织架构下的终端
 * @summary Response data types
 * @url [ get ] /api/TerminalOrganizations/{id}/terminals
 * @bizName vcsBiz
 */
export type GetTerminalOrganizationsIdTerminalsResTypeByVcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        type: 0 | 1 | 2 | 3 | 4 | -1;
        miniOrganization: {
            id: string;
            name: string;
        };
        number: string;
        isOnline: boolean;
        paths: Array<{
            id: string;
            name: string;
        }>;
    }>;
};

/**
 * @description 批量查询组织架构下的终端
 * @summary Request data types
 * @url [ post ] /api/TerminalOrganizations/terminals/batch
 * @bizName vcsBiz
 */
export type PostTerminalOrganizationsTerminalsBatchReqTypeByVcs = {
    platformID?: string;
    organizationIds: Array<string>;
};

/**
 * @description 批量查询组织架构下的终端
 * @summary Response data types
 * @url [ post ] /api/TerminalOrganizations/terminals/batch
 * @bizName vcsBiz
 */
export type PostTerminalOrganizationsTerminalsBatchResTypeByVcs = {
    id: string;
    name: string;
    type: 0 | 1 | 2 | 3 | 4 | -1;
    miniOrganization: {
        id: string;
        name: string;
    };
    number: string;
    isOnline: boolean;
    paths: Array<{
        id: string;
        name: string;
    }>;
};

/**
 * @description 获取指定ID的组织架构
 * @summary Request data types
 * @url [ get ] /api/TerminalOrganizations/{id}
 * @bizName vcsBiz
 */
export type GetTerminalOrganizationsIdReqTypeByVcs = {
    id: string;
    platformId?: string;
};

/**
 * @description 获取指定ID的组织架构
 * @summary Response data types
 * @url [ get ] /api/TerminalOrganizations/{id}
 * @bizName vcsBiz
 */
export type GetTerminalOrganizationsIdResTypeByVcs = {
    id: string;
    name: string;
    parentID: string;
    index: number;
    isLeaf: boolean;
    totalCount: number;
    paths: Array<{
        id: string;
        name: string;
    }>;
};

/**
 * @description 获取全部组织架构
 * @summary Request data types
 * @url [ get ] /api/TerminalOrganizations
 * @bizName vcsBiz
 */
export type GetTerminalOrganizationsReqTypeByVcs = {
    platformId?: string;
};

/**
 * @description 获取全部组织架构
 * @summary Response data types
 * @url [ get ] /api/TerminalOrganizations
 * @bizName vcsBiz
 */
export type GetTerminalOrganizationsResTypeByVcs = {
    id: string;
    name: string;
    parentID: string;
    index: number;
    isLeaf: boolean;
    totalCount: number;
    paths: Array<{
        id: string;
        name: string;
    }>;
};

/**
 * @description 获取根组织架构
 * @summary Request data types
 * @url [ get ] /api/TerminalOrganizations/root
 * @bizName vcsBiz
 */
export type GetTerminalOrganizationsRootReqTypeByVcs = {
    platformId?: string;
};

/**
 * @description 获取根组织架构
 * @summary Response data types
 * @url [ get ] /api/TerminalOrganizations/root
 * @bizName vcsBiz
 */
export type GetTerminalOrganizationsRootResTypeByVcs = {
    id: string;
    name: string;
    parentID: string;
    index: number;
    isLeaf: boolean;
    totalCount: number;
    paths: Array<{
        id: string;
        name: string;
    }>;
};

/**
 * @description 获取组织架构下的子组织架构
 * @summary Request data types
 * @url [ get ] /api/TerminalOrganizations/{parentID}/children
 * @bizName vcsBiz
 */
export type GetTerminalOrganizationsParentIDChildrenReqTypeByVcs = {
    parentID: string;
    platformId?: string;
};

/**
 * @description 获取组织架构下的子组织架构
 * @summary Response data types
 * @url [ get ] /api/TerminalOrganizations/{parentID}/children
 * @bizName vcsBiz
 */
export type GetTerminalOrganizationsParentIDChildrenResTypeByVcs = {
    id: string;
    name: string;
    parentID: string;
    index: number;
    isLeaf: boolean;
    totalCount: number;
    paths: Array<{
        id: string;
        name: string;
    }>;
};

/**
 * @description 获取符合查询条件的终端
 * @summary Request data types
 * @url [ get ] /api/Terminals
 * @bizName vcsBiz
 */
export type GetTerminalsReqTypeByVcs = {
    keyword?: string;
    type?: number;
    organization?: string;
    page?: number;
    per_page?: number;
    platformId?: string;
};

/**
 * @description 获取符合查询条件的终端
 * @summary Response data types
 * @url [ get ] /api/Terminals
 * @bizName vcsBiz
 */
export type GetTerminalsResTypeByVcs = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        type: 0 | 1 | 2 | 3 | 4 | -1;
        miniOrganization: {
            id: string;
            name: string;
        };
        number: string;
        isOnline: boolean;
        paths: Array<{
            id: string;
            name: string;
        }>;
    }>;
};

/**
 * @description 创建终端
 * @summary Request data types
 * @url [ post ] /api/Terminals
 * @bizName vcsBiz
 */
export type PostTerminalsReqTypeByVcs = {
    platformID?: string;
    name: string;
    type?: 0 | 1 | 2 | 3 | 4 | -1;
    organizationId?: string;
    number: string;
};

/**
 * @description 创建终端
 * @summary Response data types
 * @url [ post ] /api/Terminals
 * @bizName vcsBiz
 */
export type PostTerminalsResTypeByVcs = {
    id: string;
    name: string;
    type: 0 | 1 | 2 | 3 | 4 | -1;
    miniOrganization: {
        id: string;
        name: string;
    };
    number: string;
    isOnline: boolean;
    paths: Array<{
        id: string;
        name: string;
    }>;
};

/**
 * @description 通过ID获取终端
 * @summary Request data types
 * @url [ get ] /api/Terminals/{id}
 * @bizName vcsBiz
 */
export type GetTerminalsIdReqTypeByVcs = {
    id: string;
    platformId?: string;
};

/**
 * @description 通过ID获取终端
 * @summary Response data types
 * @url [ get ] /api/Terminals/{id}
 * @bizName vcsBiz
 */
export type GetTerminalsIdResTypeByVcs = {
    id: string;
    name: string;
    type: 0 | 1 | 2 | 3 | 4 | -1;
    miniOrganization: {
        id: string;
        name: string;
    };
    number: string;
    isOnline: boolean;
    paths: Array<{
        id: string;
        name: string;
    }>;
};

/**
 * @description 更新终端
 * @summary Request data types
 * @url [ put ] /api/Terminals/{id}
 * @bizName vcsBiz
 */
export type PutTerminalsIdReqTypeByVcs = {
    id: string;
    platformID?: string;
    name: string;
    type?: 0 | 1 | 2 | 3 | 4 | -1;
    organizationId?: string;
    number: string;
};

/**
 * @description 删除终端
 * @summary Request data types
 * @url [ delete ] /api/Terminals/{id}
 * @bizName vcsBiz
 */
export type DeleteTerminalsIdReqTypeByVcs = {
    id: string;
    platformId?: string;
};

/**
 * @description 通过号码获取终端
 * @summary Request data types
 * @url [ get ] /api/Terminals/number/{number}
 * @bizName vcsBiz
 */
export type GetTerminalsNumberNumberReqTypeByVcs = {
    number: string;
    platformId?: string;
};

/**
 * @description 通过号码获取终端
 * @summary Response data types
 * @url [ get ] /api/Terminals/number/{number}
 * @bizName vcsBiz
 */
export type GetTerminalsNumberNumberResTypeByVcs = {
    id: string;
    name: string;
    type: 0 | 1 | 2 | 3 | 4 | -1;
    miniOrganization: {
        id: string;
        name: string;
    };
    number: string;
    isOnline: boolean;
    paths: Array<{
        id: string;
        name: string;
    }>;
};

/**
 * @description 亿联平台会议信息回调(2x)
 * @summary Request data types
 * @url [ post ] /api/YealinkConference/{domain}
 * @bizName vcsBiz
 */
export type PostYealinkConferenceDomainReqTypeByVcs = {
    domain: string;
};
