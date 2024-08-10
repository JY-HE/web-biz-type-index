/**
 * @description 预约会议
 * @summary Request data types
 * @url [ post ] /api/Appointments/conference
 * @bizName edmsBiz
 */
export type PostAppointmentsConferenceReqTypeByEdms = {
    name: string;
    startTime: string;
    remains?: Array<{
        remindType: 0 | 1;
        remindAdvanceMinutes: number;
    }>;
    remindContent?: string;
    conferenceMembers?: Array<{
        id: string;
        name: string;
        isPresenter: boolean;
        phones: Array<{
            number: string;
            type: 0 | 1 | 2 | 3 | 4;
        }>;
    }>;
    priorityInviteType?: 0 | 1 | 2 | 3 | 4;
};

/**
 * @description 预约会议
 * @summary Response data types
 * @url [ post ] /api/Appointments/conference
 * @bizName edmsBiz
 */
export type PostAppointmentsConferenceResTypeByEdms = {
    name: string;
    startTime: string;
    remindContent: string;
    conferenceMembers: Array<{
        id: string;
        name: string;
        isPresenter: boolean;
        phones: Array<{
            number: string;
            type: 0 | 1 | 2 | 3 | 4;
        }>;
    }>;
    jobId: string;
    remains: Array<{
        jobId: string;
        remindType: 0 | 1;
        remindAdvanceMinutes: number;
    }>;
};

/**
 * @description 获取预约列表
 * @summary Request data types
 * @url [ get ] /api/Appointments/conference
 * @bizName edmsBiz
 */
export type GetAppointmentsConferenceReqTypeByEdms = {
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 获取预约列表
 * @summary Response data types
 * @url [ get ] /api/Appointments/conference
 * @bizName edmsBiz
 */
export type GetAppointmentsConferenceResTypeByEdms = {
    totalCount: number;
    records: Array<{
        name: string;
        startTime: string;
        remindContent: string;
        conferenceMembers: Array<{
            id: string;
            name: string;
            isPresenter: boolean;
            phones: Array<{
                number: string;
                type: 0 | 1 | 2 | 3 | 4;
            }>;
        }>;
        jobId: string;
        remains: Array<{
            jobId: string;
            remindType: 0 | 1;
            remindAdvanceMinutes: number;
        }>;
    }>;
};

/**
 * @description 获取预约
 * @summary Request data types
 * @url [ get ] /api/Appointments/conference/{id}
 * @bizName edmsBiz
 */
export type GetAppointmentsConferenceIdReqTypeByEdms = {
    id: string;
};

/**
 * @description 获取预约
 * @summary Response data types
 * @url [ get ] /api/Appointments/conference/{id}
 * @bizName edmsBiz
 */
export type GetAppointmentsConferenceIdResTypeByEdms = {
    name: string;
    startTime: string;
    remindContent: string;
    conferenceMembers: Array<{
        id: string;
        name: string;
        isPresenter: boolean;
        phones: Array<{
            number: string;
            type: 0 | 1 | 2 | 3 | 4;
        }>;
    }>;
    jobId: string;
    remains: Array<{
        jobId: string;
        remindType: 0 | 1;
        remindAdvanceMinutes: number;
    }>;
};

/**
 * @description 更新预约
 * @summary Request data types
 * @url [ put ] /api/Appointments/conference/{id}
 * @bizName edmsBiz
 */
export type PutAppointmentsConferenceIdReqTypeByEdms = {
    id: string;
    name: string;
    startTime: string;
    remains?: Array<{
        remindType: 0 | 1;
        remindAdvanceMinutes: number;
        jobId: string;
    }>;
    remindContent?: string;
    conferenceMembers?: Array<{
        id: string;
        name: string;
        isPresenter: boolean;
        phones: Array<{
            number: string;
            type: 0 | 1 | 2 | 3 | 4;
        }>;
    }>;
    priorityInviteType?: 0 | 1 | 2 | 3 | 4;
};

/**
 * @description 取消预约
 * @summary Request data types
 * @url [ delete ] /api/Appointments/conference/{id}
 * @bizName edmsBiz
 */
export type DeleteAppointmentsConferenceIdReqTypeByEdms = {
    id: string;
};

/**
 * @description 预约语音通知
 * @summary Request data types
 * @url [ post ] /api/Appointments/voice_notify
 * @bizName edmsBiz
 */
export type PostAppointmentsVoiceNotifyReqTypeByEdms = {
    name?: string;
    notifyContent?: string;
    playTimes?: number;
    startTime?: string;
    overTime?: string;
    notifyRepeatType?: 0 | 1 | 2 | 3 | 4;
    priorityNotifyType?: 0 | 1 | 2 | 3 | 4;
    notifiedMembers?: Array<{
        id: string;
        name: string;
        title: string;
        phones: Array<{
            number: string;
            type: 0 | 1 | 2 | 3 | 4;
        }>;
    }>;
};

/**
 * @description 预约语音通知
 * @summary Response data types
 * @url [ post ] /api/Appointments/voice_notify
 * @bizName edmsBiz
 */
export type PostAppointmentsVoiceNotifyResTypeByEdms = {
    jobId: string;
    name: string;
    notifyContent: string;
    playTimes: number;
    startTime: string;
    overTime: string;
    notifyRepeatType: 0 | 1 | 2 | 3 | 4;
    priorityNotifyType: 0 | 1 | 2 | 3 | 4;
    notifiedMembers: Array<{
        id: string;
        name: string;
        title: string;
        phones: Array<{
            number: string;
            type: 0 | 1 | 2 | 3 | 4;
        }>;
    }>;
    executeSchedules: Array<{
        jobId: string;
        executeTime: string;
        isExecuted: boolean;
        periodStart: string;
        periodEnd: string;
    }>;
};

/**
 * @description 获取预约通知
 * @summary Request data types
 * @url [ get ] /api/Appointments/voice_notify
 * @bizName edmsBiz
 */
export type GetAppointmentsVoiceNotifyReqTypeByEdms = {
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 获取预约通知
 * @summary Response data types
 * @url [ get ] /api/Appointments/voice_notify
 * @bizName edmsBiz
 */
export type GetAppointmentsVoiceNotifyResTypeByEdms = {
    totalCount: number;
    records: Array<{
        jobId: string;
        name: string;
        notifyContent: string;
        playTimes: number;
        startTime: string;
        overTime: string;
        notifyRepeatType: 0 | 1 | 2 | 3 | 4;
        priorityNotifyType: 0 | 1 | 2 | 3 | 4;
        notifiedMembers: Array<{
            id: string;
            name: string;
            title: string;
            phones: Array<{
                number: string;
                type: 0 | 1 | 2 | 3 | 4;
            }>;
        }>;
        executeSchedules: Array<{
            jobId: string;
            executeTime: string;
            isExecuted: boolean;
            periodStart: string;
            periodEnd: string;
        }>;
    }>;
};

/**
 * @description 获取语音通知
 * @summary Request data types
 * @url [ get ] /api/Appointments/voice_notify/{id}
 * @bizName edmsBiz
 */
export type GetAppointmentsVoiceNotifyIdReqTypeByEdms = {
    id: string;
};

/**
 * @description 获取语音通知
 * @summary Response data types
 * @url [ get ] /api/Appointments/voice_notify/{id}
 * @bizName edmsBiz
 */
export type GetAppointmentsVoiceNotifyIdResTypeByEdms = {
    jobId: string;
    name: string;
    notifyContent: string;
    playTimes: number;
    startTime: string;
    overTime: string;
    notifyRepeatType: 0 | 1 | 2 | 3 | 4;
    priorityNotifyType: 0 | 1 | 2 | 3 | 4;
    notifiedMembers: Array<{
        id: string;
        name: string;
        title: string;
        phones: Array<{
            number: string;
            type: 0 | 1 | 2 | 3 | 4;
        }>;
    }>;
    executeSchedules: Array<{
        jobId: string;
        executeTime: string;
        isExecuted: boolean;
        periodStart: string;
        periodEnd: string;
    }>;
};

/**
 * @description 更新预约通知
 * @summary Request data types
 * @url [ put ] /api/Appointments/voice_notify/{id}
 * @bizName edmsBiz
 */
export type PutAppointmentsVoiceNotifyIdReqTypeByEdms = {
    id: string;
    name?: string;
    notifyContent?: string;
    playTimes?: number;
    startTime?: string;
    overTime?: string;
    notifyRepeatType?: 0 | 1 | 2 | 3 | 4;
    priorityNotifyType?: 0 | 1 | 2 | 3 | 4;
    notifiedMembers?: Array<{
        id: string;
        name: string;
        title: string;
        phones: Array<{
            number: string;
            type: 0 | 1 | 2 | 3 | 4;
        }>;
    }>;
};

/**
 * @description 取消预约通知
 * @summary Request data types
 * @url [ delete ] /api/Appointments/voice_notify/{id}
 * @bizName edmsBiz
 */
export type DeleteAppointmentsVoiceNotifyIdReqTypeByEdms = {
    id: string;
};

/**
 * @description 修改单次通知
 * @summary Request data types
 * @url [ put ] /api/Appointments/voice_notify/{id}/single
 * @bizName edmsBiz
 */
export type PutAppointmentsVoiceNotifyIdSingleReqTypeByEdms = {
    id: string;
    jobId?: string;
    name?: string;
    notifyContent?: string;
    playTimes?: number;
    startTime?: string;
    priorityNotifyType?: 0 | 1 | 2 | 3 | 4;
    notifiedMembers?: Array<{
        id: string;
        name: string;
        title: string;
        phones: Array<{
            number: string;
            type: 0 | 1 | 2 | 3 | 4;
        }>;
    }>;
    parentJobId?: string;
};

/**
 * @description 获取语音广播
 * @summary Request data types
 * @url [ get ] /api/Broadcasts/{id}
 * @bizName edmsBiz
 */
export type GetBroadcastsIdReqTypeByEdms = {
    id: string;
};

/**
 * @description 获取语音广播
 * @summary Response data types
 * @url [ get ] /api/Broadcasts/{id}
 * @bizName edmsBiz
 */
export type GetBroadcastsIdResTypeByEdms = {
    id: string;
    name: string;
    description: string;
    startTime: string;
    ownerID: string;
    ownerName: string;
    status: number;
    number: string;
    groupID: string;
    password: string;
};

/**
 * @description 结束指定的广播组
 * @summary Request data types
 * @url [ delete ] /api/Broadcasts/{id}
 * @bizName edmsBiz
 */
export type DeleteBroadcastsIdReqTypeByEdms = {
    id: string;
};

/**
 * @description 创建语音广播
 * @summary Request data types
 * @url [ post ] /api/Broadcasts
 * @bizName edmsBiz
 */
export type PostBroadcastsReqTypeByEdms = {
    name?: string;
    description?: string;
    priorityInviteType?: 0 | 1 | 2 | 3 | 4;
    recallStrategy?: {
        isEnableRecall: boolean;
        recallTimes: number;
        recallPeriod: number;
        isForcedHook: boolean;
    };
    groupID?: string;
    isUseConfig?: boolean;
    isBroadcasterQuitEnd?: boolean;
    isAllowJoin?: boolean;
    password?: string;
    number?: string;
    broadcastMembers?: Array<{
        id: string;
        name: string;
        isPresenter: boolean;
        phones: Array<{
            number: string;
            type: 0 | 1 | 2 | 3 | 4;
        }>;
    }>;
};

/**
 * @description 创建语音广播
 * @summary Response data types
 * @url [ post ] /api/Broadcasts
 * @bizName edmsBiz
 */
export type PostBroadcastsResTypeByEdms = {
    id: string;
    name: string;
    description: string;
    startTime: string;
    ownerID: string;
    ownerName: string;
    status: number;
    number: string;
    groupID: string;
    password: string;
};

/**
 * @description 获取广播组
 * @summary Response data types
 * @url [ get ] /api/Broadcasts
 * @bizName edmsBiz
 */
export type GetBroadcastsResTypeByEdms = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        startTime: string;
        ownerID: string;
        ownerName: string;
        status: number;
        number: string;
        groupID: string;
        password: string;
    }>;
};

/**
 * @description 获取广播组成员
 * @summary Request data types
 * @url [ get ] /api/Broadcasts/{id}/members
 * @bizName edmsBiz
 */
export type GetBroadcastsIdMembersReqTypeByEdms = {
    id: string;
};

/**
 * @description 获取广播组成员
 * @summary Response data types
 * @url [ get ] /api/Broadcasts/{id}/members
 * @bizName edmsBiz
 */
export type GetBroadcastsIdMembersResTypeByEdms = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        title: string;
        associatedNormalUserID: string;
        phoneNumber: string;
        photoPath: string;
        normalUser: {
            id: string;
            name: string;
            title: string;
            account: string;
            photoPath: string;
            platformId: string;
            platformName: string;
            departments: Array<{
                id: string;
                name: string;
            }>;
            phones: Array<{
                number: string;
                type: string;
            }>;
        };
        lastHangUpTime: string;
        lastTurnOnTime: string;
        reInviteCount: number;
        broadcastGroupID: string;
        isOnline: boolean;
        isBroadcaster: boolean;
        isTalking: boolean;
        operationState: 0 | 1 | 2 | 3 | 4;
    }>;
};

/**
 * @description 呼叫
 * @summary Request data types
 * @url [ put ] /api/CallBiz/call_out
 * @bizName edmsBiz
 */
export type PutCallBizCallOutReqTypeByEdms = {
    caller: string;
    called: string;
};

/**
 * @description 牛信用户呼叫
 * @summary Request data types
 * @url [ put ] /api/CallBiz/nuChat/call_out
 * @bizName edmsBiz
 */
export type PutCallBizNuChatCallOutReqTypeByEdms = {
    caller: string;
    calledNuChatNormalUserId: string;
};

/**
 * @description 强挂指定号码
 * @summary Request data types
 * @url [ put ] /api/CallBiz/forced_hook
 * @bizName edmsBiz
 */
export type PutCallBizForcedHookReqTypeByEdms = {
    phone: string;
};

/**
 * @description 接听排队呼叫
 * @summary Request data types
 * @url [ put ] /api/CallBiz/answer
 * @bizName edmsBiz
 */
export type PutCallBizAnswerReqTypeByEdms = {
    line: string;
    callInPhone: string;
};

/**
 * @description 强插指定号码
 * @summary Request data types
 * @url [ put ] /api/CallBiz/forced_insert
 * @bizName edmsBiz
 */
export type PutCallBizForcedInsertReqTypeByEdms = {
    line: string;
    destination: string;
};

/**
 * @description 强拆指定号码
 * @summary Request data types
 * @url [ put ] /api/CallBiz/forced_release
 * @bizName edmsBiz
 */
export type PutCallBizForcedReleaseReqTypeByEdms = {
    line: string;
    destination: string;
};

/**
 * @description 监听指定号码
 * @summary Request data types
 * @url [ put ] /api/CallBiz/monitor
 * @bizName edmsBiz
 */
export type PutCallBizMonitorReqTypeByEdms = {
    line: string;
    destination: string;
};

/**
 * @description 号码配置
 * @summary Response data types
 * @url [ get ] /api/CallBiz/NumberConfig
 * @bizName edmsBiz
 */
export type GetCallBizNumberConfigResTypeByEdms = {
    outGoingMinLength: number;
    outGoingPrefix: string;
    nonLocalMobileNumberPrefix: string;
    needNonLocalMobileNumberTransformation: boolean;
    mobileNumberLength: number;
    mobilePrefix: string;
    areaCode: string;
};

/**
 * @description 号码转换
 * @summary Request data types
 * @url [ get ] /api/CallBiz/NumberTransform
 * @bizName edmsBiz
 */
export type GetCallBizNumberTransformReqTypeByEdms = {
    originNumber?: string;
};

/**
 * @description 获取所有的上下文信息
 * @summary Request data types
 * @url [ get ] /api/ClientContext
 * @bizName edmsBiz
 */
export type GetClientContextReqTypeByEdms = {
    Type?: number;
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 获取所有的上下文信息
 * @summary Response data types
 * @url [ get ] /api/ClientContext
 * @bizName edmsBiz
 */
export type GetClientContextResTypeByEdms = {
    totalCount: number;
    records: Array<{
        loginedUserID: string;
        loginedUserName: string;
        ip: string;
        sessionID: string;
        type: 0 | 1;
        isInvalid: boolean;
        loginTime: string;
        token: string;
    }>;
};

/**
 * @description 踢出当前登录的用户
 * @summary Request data types
 * @url [ put ] /api/ClientContext/kick_out/{type}
 * @bizName edmsBiz
 */
export type PutClientContextKickOutTypeReqTypeByEdms = {
    type: number;
};

/**
 * @description 获取服务结点Id
 * @summary Request data types
 * @url [ post ] /Commands
 * @bizName edmsBiz
 */
export type PostCommandsReqTypeByEdms = {
    cmdText?: string;
};

/**
 * @description 获取语音会议
 * @summary Request data types
 * @url [ get ] /api/Conferences/{id}
 * @bizName edmsBiz
 */
export type GetConferencesIdReqTypeByEdms = {
    id: string;
};

/**
 * @description 获取语音会议
 * @summary Response data types
 * @url [ get ] /api/Conferences/{id}
 * @bizName edmsBiz
 */
export type GetConferencesIdResTypeByEdms = {
    lessMinuteNotifyObject: 0 | 1 | 2;
    masterChangeNotify: 0 | 1 | 2;
    leaveMeetingNotifyObject: 0 | 1 | 2;
    enterMeetingNotifyObject: 0 | 1 | 2;
    masterEnter: string;
    memberEnter: string;
    exitMeeting: string;
    masterChange: string;
    lessOneMinute: string;
    inNotifyVoice: string;
    reportNumberBits: number;
    masterExit: 0 | 1;
    reportLang: 48 | 64;
    meetingTime: number;
    meetingPhone: string;
    needRecord: boolean;
    displayNumber: string;
    appointedConferenceID: number;
    isMuteJoinConference: boolean;
    id: string;
    name: string;
    description: string;
    conferenceId: number;
    conferenceServerId: string;
    conferenceCapacity: number;
    conferenceTime: number;
    state: {
        messageCode: 0 | 1 | 2 | 3 | 4 | 5 | 20001 | 20002 | 30000 | 40000 | 40001;
        id: string;
        name: string;
        conferenceID: number;
        isLock: boolean;
        remainTime: number;
        usedTime: number;
        conferenceRoomState: 0 | 1;
        calledMember: number;
        totalCallMember: number;
        memberStates: Array<{
            conferenceID: string;
            conferenceNumber: number;
            phoneNumber: string;
            isChairMan: boolean;
            isForbid: boolean;
            isolated: boolean;
            state: 0 | 1 | 2 | 3 | 4 | 5;
            isInvited: boolean;
            isSpeaking: boolean;
            isPrivateChat: boolean;
        }>;
    };
    recallStrategy: {
        isEnableRecall: boolean;
        recallTimes: number;
        recallPeriod: number;
        isForcedHook: boolean;
    };
    priorityInviteType: 0 | 1 | 2 | 3 | 4;
    groupID: string;
    isStartByGroup: boolean;
    numberList: string;
    recallConfig: string;
    isEmergency: boolean;
    isInfiniteRecall: boolean;
    startTime: string;
    mode: 0 | 1;
};

/**
 * @description 结束指定会议
 * @summary Request data types
 * @url [ delete ] /api/Conferences/{id}
 * @bizName edmsBiz
 */
export type DeleteConferencesIdReqTypeByEdms = {
    id: string;
};

/**
 * @description 创建会议室
 * @summary Request data types
 * @url [ post ] /api/Conferences
 * @bizName edmsBiz
 */
export type PostConferencesReqTypeByEdms = {
    lessMinuteNotifyObject?: 0 | 1 | 2;
    masterChangeNotify?: 0 | 1 | 2;
    leaveMeetingNotifyObject?: 0 | 1 | 2;
    enterMeetingNotifyObject?: 0 | 1 | 2;
    masterEnter?: string;
    memberEnter?: string;
    exitMeeting?: string;
    masterChange?: string;
    lessOneMinute?: string;
    inNotifyVoice?: string;
    reportNumberBits?: number;
    masterExit?: 0 | 1;
    reportLang?: 48 | 64;
    meetingTime?: number;
    meetingPhone?: string;
    needRecord?: boolean;
    displayNumber?: string;
    appointedConferenceID?: number;
    isMuteJoinConference?: boolean;
    name?: string;
    description?: string;
    conferenceServerId?: string;
    conferenceMembers?: Array<{
        id: string;
        name: string;
        isPresenter: boolean;
        phones: Array<{
            number: string;
            type: 0 | 1 | 2 | 3 | 4;
        }>;
    }>;
    recallStrategy?: {
        isEnableRecall: boolean;
        recallTimes: number;
        recallPeriod: number;
        isForcedHook: boolean;
    };
    priorityInviteType?: 0 | 1 | 2 | 3 | 4;
    groupID?: string;
    conferenceCapacity?: number;
    isEmergency?: boolean;
    mode?: 0 | 1;
};

/**
 * @description 创建会议室
 * @summary Response data types
 * @url [ post ] /api/Conferences
 * @bizName edmsBiz
 */
export type PostConferencesResTypeByEdms = {
    lessMinuteNotifyObject: 0 | 1 | 2;
    masterChangeNotify: 0 | 1 | 2;
    leaveMeetingNotifyObject: 0 | 1 | 2;
    enterMeetingNotifyObject: 0 | 1 | 2;
    masterEnter: string;
    memberEnter: string;
    exitMeeting: string;
    masterChange: string;
    lessOneMinute: string;
    inNotifyVoice: string;
    reportNumberBits: number;
    masterExit: 0 | 1;
    reportLang: 48 | 64;
    meetingTime: number;
    meetingPhone: string;
    needRecord: boolean;
    displayNumber: string;
    appointedConferenceID: number;
    isMuteJoinConference: boolean;
    id: string;
    name: string;
    description: string;
    conferenceId: number;
    conferenceServerId: string;
    conferenceCapacity: number;
    conferenceTime: number;
    state: {
        messageCode: 0 | 1 | 2 | 3 | 4 | 5 | 20001 | 20002 | 30000 | 40000 | 40001;
        id: string;
        name: string;
        conferenceID: number;
        isLock: boolean;
        remainTime: number;
        usedTime: number;
        conferenceRoomState: 0 | 1;
        calledMember: number;
        totalCallMember: number;
        memberStates: Array<{
            conferenceID: string;
            conferenceNumber: number;
            phoneNumber: string;
            isChairMan: boolean;
            isForbid: boolean;
            isolated: boolean;
            state: 0 | 1 | 2 | 3 | 4 | 5;
            isInvited: boolean;
            isSpeaking: boolean;
            isPrivateChat: boolean;
        }>;
    };
    recallStrategy: {
        isEnableRecall: boolean;
        recallTimes: number;
        recallPeriod: number;
        isForcedHook: boolean;
    };
    priorityInviteType: 0 | 1 | 2 | 3 | 4;
    groupID: string;
    isStartByGroup: boolean;
    numberList: string;
    recallConfig: string;
    isEmergency: boolean;
    isInfiniteRecall: boolean;
    startTime: string;
    mode: 0 | 1;
};

/**
 * @description 获取全部会议信息
 * @summary Response data types
 * @url [ get ] /api/Conferences
 * @bizName edmsBiz
 */
export type GetConferencesResTypeByEdms = {
    totalCount: number;
    records: Array<{
        lessMinuteNotifyObject: 0 | 1 | 2;
        masterChangeNotify: 0 | 1 | 2;
        leaveMeetingNotifyObject: 0 | 1 | 2;
        enterMeetingNotifyObject: 0 | 1 | 2;
        masterEnter: string;
        memberEnter: string;
        exitMeeting: string;
        masterChange: string;
        lessOneMinute: string;
        inNotifyVoice: string;
        reportNumberBits: number;
        masterExit: 0 | 1;
        reportLang: 48 | 64;
        meetingTime: number;
        meetingPhone: string;
        needRecord: boolean;
        displayNumber: string;
        appointedConferenceID: number;
        isMuteJoinConference: boolean;
        id: string;
        name: string;
        description: string;
        conferenceId: number;
        conferenceServerId: string;
        conferenceCapacity: number;
        conferenceTime: number;
        state: {
            messageCode: 0 | 1 | 2 | 3 | 4 | 5 | 20001 | 20002 | 30000 | 40000 | 40001;
            id: string;
            name: string;
            conferenceID: number;
            isLock: boolean;
            remainTime: number;
            usedTime: number;
            conferenceRoomState: 0 | 1;
            calledMember: number;
            totalCallMember: number;
            memberStates: Array<{
                conferenceID: string;
                conferenceNumber: number;
                phoneNumber: string;
                isChairMan: boolean;
                isForbid: boolean;
                isolated: boolean;
                state: 0 | 1 | 2 | 3 | 4 | 5;
                isInvited: boolean;
                isSpeaking: boolean;
                isPrivateChat: boolean;
            }>;
        };
        recallStrategy: {
            isEnableRecall: boolean;
            recallTimes: number;
            recallPeriod: number;
            isForcedHook: boolean;
        };
        priorityInviteType: 0 | 1 | 2 | 3 | 4;
        groupID: string;
        isStartByGroup: boolean;
        numberList: string;
        recallConfig: string;
        isEmergency: boolean;
        isInfiniteRecall: boolean;
        startTime: string;
        mode: 0 | 1;
    }>;
};

/**
 * @description 切换会议模式
 * @summary Request data types
 * @url [ put ] /api/Conferences/{id}/mode
 * @bizName edmsBiz
 */
export type PutConferencesIdModeReqTypeByEdms = {
    id: string;
    mode: number;
};

/**
 * @description 获取会议内的成员信息
 * @summary Request data types
 * @url [ get ] /api/Conferences/{id}/members
 * @bizName edmsBiz
 */
export type GetConferencesIdMembersReqTypeByEdms = {
    id: string;
};

/**
 * @description 获取会议内的成员信息
 * @summary Response data types
 * @url [ get ] /api/Conferences/{id}/members
 * @bizName edmsBiz
 */
export type GetConferencesIdMembersResTypeByEdms = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        title: string;
        associatedNormalUserID: string;
        phoneNumber: string;
        photoPath: string;
        normalUser: {
            id: string;
            name: string;
            title: string;
            account: string;
            photoPath: string;
            platformId: string;
            platformName: string;
            departments: Array<{
                id: string;
                name: string;
            }>;
            phones: Array<{
                number: string;
                type: string;
            }>;
        };
        lastHangUpTime: string;
        lastTurnOnTime: string;
        reInviteCount: number;
        conferenceID: string;
        type: 0 | 1 | 2 | 3;
        state: {
            conferenceID: string;
            conferenceNumber: number;
            phoneNumber: string;
            isChairMan: boolean;
            isForbid: boolean;
            isolated: boolean;
            state: 0 | 1 | 2 | 3 | 4 | 5;
            isInvited: boolean;
            isSpeaking: boolean;
            isPrivateChat: boolean;
        };
        onlineState: 0 | 1 | 2 | 3 | 4 | 5;
        operationState: 0 | 1 | 2 | 3 | 4;
    }>;
};

/**
 * @description 获取所有的线路信息
 * @summary Request data types
 * @url [ get ] /api/DataRequestBiz/phonelines
 * @bizName edmsBiz
 */
export type GetDataRequestBizPhonelinesReqTypeByEdms = {
    GroupNumber?: string;
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 获取所有的线路信息
 * @summary Response data types
 * @url [ get ] /api/DataRequestBiz/phonelines
 * @bizName edmsBiz
 */
export type GetDataRequestBizPhonelinesResTypeByEdms = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        path: string;
        lastUpdateTime: string;
        number: string;
        ownerID: string;
        state: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
        usn: string;
        level: number;
        callRegion: number;
        vncId: string;
        connectionState: 0 | 1 | 2;
        protocol: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 24 | 25 | 254 | 255;
        configStatus: 0 | 1 | 2 | 3 | 4 | 5;
        showType: 0 | 1 | 2 | 3 | 4 | 5;
        stationId: string;
        longitude: number;
        latitude: number;
        usageType: string;
        authCode: string;
        owner: {
            id: string;
            name: string;
            title: string;
        };
        dcsId: string;
        groupId: string;
    }>;
};

/**
 * @description 获取所有的线路组
 * @summary Response data types
 * @url [ get ] /api/DataRequestBiz/phoneline_groups
 * @bizName edmsBiz
 */
export type GetDataRequestBizPhonelineGroupsResTypeByEdms = {
    totalCount: number;
    records: Array<{
        groupNumber: string;
        lineNumbers: Array<string>;
    }>;
};

/**
 * @description 按条件查询会议记录
 * @summary Request data types
 * @url [ get ] /api/DataRequestBiz/conference_record
 * @bizName edmsBiz
 */
export type GetDataRequestBizConferenceRecordReqTypeByEdms = {
    Type?: number;
    KeyWord?: string;
    BeginTime?: string;
    EndTime?: string;
    PlatformId?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 按条件查询会议记录
 * @summary Response data types
 * @url [ get ] /api/DataRequestBiz/conference_record
 * @bizName edmsBiz
 */
export type GetDataRequestBizConferenceRecordResTypeByEdms = {
    totalCount: number;
    records: Array<{
        id: string;
        ownerID: string;
        ownerName: string;
        ownerTitle: string;
        name: string;
        number: string;
        startTime: string;
        endTime: string;
        type: 1 | 2 | 4 | 8;
        description: string;
        groupID: string;
        password: string;
        extension: any;
        participants: any;
    }>;
};

/**
 * @description 通过会议ID获取对应的会议记录
 * @summary Request data types
 * @url [ get ] /api/DataRequestBiz/conference_record/{id}
 * @bizName edmsBiz
 */
export type GetDataRequestBizConferenceRecordIdReqTypeByEdms = {
    id: string;
    platformId?: string;
};

/**
 * @description 通过会议ID获取对应的会议记录
 * @summary Response data types
 * @url [ get ] /api/DataRequestBiz/conference_record/{id}
 * @bizName edmsBiz
 */
export type GetDataRequestBizConferenceRecordIdResTypeByEdms = {
    id: string;
    ownerID: string;
    ownerName: string;
    ownerTitle: string;
    name: string;
    number: string;
    startTime: string;
    endTime: string;
    type: 1 | 2 | 4 | 8;
    description: string;
    groupID: string;
    password: string;
    extension: any;
    participants: any;
};

/**
 * @description 按条件查询通话记录
 * @summary Request data types
 * @url [ get ] /api/DataRequestBiz/call_record
 * @bizName edmsBiz
 */
export type GetDataRequestBizCallRecordReqTypeByEdms = {
    KeyWord?: string;
    CallerNumber?: string;
    CalledNumber?: string;
    CallerName?: string;
    CalledName?: string;
    UserID?: string;
    IsTwoWay?: boolean;
    BeginTime?: string;
    EndTime?: string;
    Type?: number;
    ConferenceID?: string;
    PlatformId?: string;
    Content?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 按条件查询通话记录
 * @summary Response data types
 * @url [ get ] /api/DataRequestBiz/call_record
 * @bizName edmsBiz
 */
export type GetDataRequestBizCallRecordResTypeByEdms = {
    totalCount: number;
    records: Array<{
        id: string;
        callerName: string;
        callerNumber: string;
        callerOwnerTitle: string;
        callerDesc: string;
        calledName: string;
        calledNumber: string;
        calledDesc: string;
        calledOwnerTitle: string;
        callOutTime: string;
        callInTime: string;
        startTime: string;
        endTime: string;
        duration: {
            ticks: number;
            days: number;
            hours: number;
            milliseconds: number;
            minutes: number;
            seconds: number;
            totalDays: number;
            totalHours: number;
            totalMilliseconds: number;
            totalMinutes: number;
            totalSeconds: number;
        };
        type: 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512;
        hasAnswered: boolean;
        hasRecording: boolean;
        recordingPath: string;
        recordingID: string;
        logID: string;
        extension: string;
        isMissRecord: boolean;
        powerItems: string;
        callerOwnerId: string;
        calledOwnerId: string;
        orgsPowerItems: string;
        callVideoId: string;
        resourceId: string;
        platformId: string;
        areaCode: string;
        content: string;
        summary: string;
    }>;
};

/**
 * @description 给通话记录添加录制视频id
 * @summary Request data types
 * @url [ put ] /api/DataRequestBiz/call_record/call_video_id
 * @bizName edmsBiz
 */
export type PutDataRequestBizCallRecordCallVideoIdReqTypeByEdms = {
    callerNumber: string;
    calledNumber: string;
    beginTime: string;
    endTime: string;
    callVideoId: string;
};

/**
 * @description 运维所有通话记录行政区划（历史数据补全运维接口）
 * @summary Request data types
 * @url [ put ] /api/DataRequestBiz/call_record/operation/areacode
 * @bizName edmsBiz
 */
export type PutDataRequestBizCallRecordOperationAreacodeReqTypeByEdms = {
    defaultAreaCode?: string;
    isOnlyQueryAreaCodeEmpty?: boolean;
};

/**
 * @description 通过会议ID获取其对应的通话记录
 * @summary Request data types
 * @url [ get ] /api/DataRequestBiz/call_record/conference
 * @bizName edmsBiz
 */
export type GetDataRequestBizCallRecordConferenceReqTypeByEdms = {
    ConferenceID?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 通过会议ID获取其对应的通话记录
 * @summary Response data types
 * @url [ get ] /api/DataRequestBiz/call_record/conference
 * @bizName edmsBiz
 */
export type GetDataRequestBizCallRecordConferenceResTypeByEdms = {
    totalCount: number;
    records: Array<{
        id: string;
        callerName: string;
        callerNumber: string;
        callerOwnerTitle: string;
        callerDesc: string;
        calledName: string;
        calledNumber: string;
        calledDesc: string;
        calledOwnerTitle: string;
        callOutTime: string;
        callInTime: string;
        startTime: string;
        endTime: string;
        duration: {
            ticks: number;
            days: number;
            hours: number;
            milliseconds: number;
            minutes: number;
            seconds: number;
            totalDays: number;
            totalHours: number;
            totalMilliseconds: number;
            totalMinutes: number;
            totalSeconds: number;
        };
        type: 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512;
        hasAnswered: boolean;
        hasRecording: boolean;
        recordingPath: string;
        recordingID: string;
        logID: string;
        extension: string;
        isMissRecord: boolean;
        powerItems: string;
        callerOwnerId: string;
        calledOwnerId: string;
        orgsPowerItems: string;
        callVideoId: string;
        resourceId: string;
        platformId: string;
        areaCode: string;
        content: string;
        summary: string;
    }>;
};

/**
 * @description 分页获取通话信息
 * @summary Request data types
 * @url [ get ] /api/DataRequestBiz/calling
 * @bizName edmsBiz
 */
export type GetDataRequestBizCallingReqTypeByEdms = {
    Type?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 分页获取通话信息
 * @summary Response data types
 * @url [ get ] /api/DataRequestBiz/calling
 * @bizName edmsBiz
 */
export type GetDataRequestBizCallingResTypeByEdms = {
    totalCount: number;
    records: Array<{
        callingType: string;
        calling: any;
    }>;
};

/**
 * @description 分页获取队列
 * @summary Request data types
 * @url [ get ] /api/DataRequestBiz/queue
 * @bizName edmsBiz
 */
export type GetDataRequestBizQueueReqTypeByEdms = {
    AccessNumber?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 分页获取队列
 * @summary Response data types
 * @url [ get ] /api/DataRequestBiz/queue
 * @bizName edmsBiz
 */
export type GetDataRequestBizQueueResTypeByEdms = {
    totalCount: number;
    records: Array<{
        identifier: string;
        phoneId: string;
        number: string;
        userName: string;
        phoneOwner: {
            id: string;
            name: string;
            title: string;
            account: string;
            photoPath: string;
            platformId: string;
            platformName: string;
            organizations: Array<{
                id: string;
                name: string;
            }>;
        };
        queueSecond: number;
        isHold: boolean;
        isEmergency: boolean;
        isSplitted: boolean;
    }>;
};

/**
 * @description 分页查询电话
 * @summary Request data types
 * @url [ get ] /api/DataRequestBiz/phones
 * @bizName edmsBiz
 */
export type GetDataRequestBizPhonesReqTypeByEdms = {
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 分页查询电话
 * @summary Response data types
 * @url [ get ] /api/DataRequestBiz/phones
 * @bizName edmsBiz
 */
export type GetDataRequestBizPhonesResTypeByEdms = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        path: string;
        lastUpdateTime: string;
        number: string;
        ownerID: string;
        state: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
        usn: string;
        level: number;
        callRegion: number;
        vncId: string;
        connectionState: 0 | 1 | 2;
        protocol: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 24 | 25 | 254 | 255;
        configStatus: 0 | 1 | 2 | 3 | 4 | 5;
        showType: 0 | 1 | 2 | 3 | 4 | 5;
        stationId: string;
        longitude: number;
        latitude: number;
        usageType: string;
        authCode: string;
        owner: {
            id: string;
            name: string;
            title: string;
        };
    }>;
};

/**
 * @description 分页查询外线电话
 * @summary Request data types
 * @url [ get ] /api/DataRequestBiz/thunk_phones
 * @bizName edmsBiz
 */
export type GetDataRequestBizThunkPhonesReqTypeByEdms = {
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 分页查询外线电话
 * @summary Response data types
 * @url [ get ] /api/DataRequestBiz/thunk_phones
 * @bizName edmsBiz
 */
export type GetDataRequestBizThunkPhonesResTypeByEdms = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        path: string;
        lastUpdateTime: string;
        number: string;
        ownerID: string;
        state: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
        usn: string;
        level: number;
        callRegion: number;
        vncId: string;
        connectionState: 0 | 1 | 2;
        protocol: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 24 | 25 | 254 | 255;
        configStatus: 0 | 1 | 2 | 3 | 4 | 5;
        showType: 0 | 1 | 2 | 3 | 4 | 5;
        stationId: string;
        longitude: number;
        latitude: number;
        usageType: string;
        authCode: string;
        owner: {
            id: string;
            name: string;
            title: string;
        };
    }>;
};

/**
 * @description 更新电话位置
 * @summary Request data types
 * @url [ put ] /api/DataRequestBiz/phones/{phoneNumber}/location
 * @bizName edmsBiz
 */
export type PutDataRequestBizPhonesPhoneNumberLocationReqTypeByEdms = {
    phoneNumber: string;
    longitude?: number;
    latitude?: number;
};

/**
 * @description 按条件查询操作日志
 * @summary Request data types
 * @url [ get ] /api/DataRequestBiz/operation_log
 * @bizName edmsBiz
 */
export type GetDataRequestBizOperationLogReqTypeByEdms = {
    StartTime?: string;
    EndTime?: string;
    Type?: number;
    GroupID?: string;
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 按条件查询操作日志
 * @summary Response data types
 * @url [ get ] /api/DataRequestBiz/operation_log
 * @bizName edmsBiz
 */
export type GetDataRequestBizOperationLogResTypeByEdms = {
    totalCount: number;
    records: Array<{
        id: string;
        operator: any;
        source: any;
        destination: any;
        type: 0 | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096 | 16384;
        time: string;
        result: boolean;
        reason: string;
        operation: string;
        groupID: string;
        eventID: string;
    }>;
};

/**
 * @description 演示CustomValidationException
 * @summary Request data types
 * @url [ get ] /api/ExceptionDemo/{resourceId}
 * @bizName edmsBiz
 */
export type GetExceptionDemoResourceIdReqTypeByEdms = {
    resourceId: string;
};

/**
 * @description 演示UnHandleException
 * @summary Request data types
 * @url [ delete ] /api/ExceptionDemo/{resourceId}
 * @bizName edmsBiz
 */
export type DeleteExceptionDemoResourceIdReqTypeByEdms = {
    resourceId: string;
};

/**
 * @description 演示ForbiddenException
 * @summary Request data types
 * @url [ post ] /api/ExceptionDemo
 * @bizName edmsBiz
 */
export type PostExceptionDemoReqTypeByEdms = {
    resourceId: string;
};

/**
 * @description 根据条件查询传真
 * @summary Request data types
 * @url [ get ] /api/Faxes
 * @bizName edmsBiz
 */
export type GetFaxesReqTypeByEdms = {
    BeginTime?: string;
    EndTime?: string;
    Type?: number;
    KeyWord?: string;
    IsRead?: boolean;
    Status?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 根据条件查询传真
 * @summary Response data types
 * @url [ get ] /api/Faxes
 * @bizName edmsBiz
 */
export type GetFaxesResTypeByEdms = {
    totalCount: number;
    records: Array<{
        id: string;
        title: string;
        faxNumber: string;
        internationalCode: string;
        isRead: boolean;
        isSend: boolean;
        longDistanceCode: string;
        memo: string;
        receiveCompany: string;
        receiver: string;
        receiverID: string;
        receiverTitle: string;
        sendCompany: string;
        sender: string;
        senderID: string;
        senderTitle: string;
        sendFirst: boolean;
        sendTime: string;
        status: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
        files: Array<{
            id: string;
            name: string;
            fullPath: string;
            length: number;
        }>;
        extension: string;
    }>;
};

/**
 * @description 发送传真
 * @summary Request data types
 * @url [ post ] /api/Faxes
 * @bizName edmsBiz
 */
export type PostFaxesReqTypeByEdms = {
    Title: string;
    InternationalCode: string;
    PrioritySendType?: number;
    LongDistanceCode: string;
    Memo?: string;
    Receivers: string;
    SendFirst?: boolean;
};

/**
 * @description 发送传真
 * @summary Response data types
 * @url [ post ] /api/Faxes
 * @bizName edmsBiz
 */
export type PostFaxesResTypeByEdms = {
    id: string;
    title: string;
    faxNumber: string;
    internationalCode: string;
    isRead: boolean;
    isSend: boolean;
    longDistanceCode: string;
    memo: string;
    receiveCompany: string;
    receiver: string;
    receiverID: string;
    receiverTitle: string;
    sendCompany: string;
    sender: string;
    senderID: string;
    senderTitle: string;
    sendFirst: boolean;
    sendTime: string;
    status: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    files: Array<{
        id: string;
        name: string;
        fullPath: string;
        length: number;
    }>;
    extension: string;
};

/**
 * @description 获取指定传真
 * @summary Request data types
 * @url [ get ] /api/Faxes/{id}
 * @bizName edmsBiz
 */
export type GetFaxesIdReqTypeByEdms = {
    id: string;
};

/**
 * @description 获取指定传真
 * @summary Response data types
 * @url [ get ] /api/Faxes/{id}
 * @bizName edmsBiz
 */
export type GetFaxesIdResTypeByEdms = {
    id: string;
    title: string;
    faxNumber: string;
    internationalCode: string;
    isRead: boolean;
    isSend: boolean;
    longDistanceCode: string;
    memo: string;
    receiveCompany: string;
    receiver: string;
    receiverID: string;
    receiverTitle: string;
    sendCompany: string;
    sender: string;
    senderID: string;
    senderTitle: string;
    sendFirst: boolean;
    sendTime: string;
    status: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    files: Array<{
        id: string;
        name: string;
        fullPath: string;
        length: number;
    }>;
    extension: string;
};

/**
 * @description 将传真重新发送
 * @summary Request data types
 * @url [ put ] /api/Faxes/{id}/resend
 * @bizName edmsBiz
 */
export type PutFaxesIdResendReqTypeByEdms = {
    id: string;
};

/**
 * @description 分页获取传真草稿
 * @summary Request data types
 * @url [ get ] /api/Faxes/draft
 * @bizName edmsBiz
 */
export type GetFaxesDraftReqTypeByEdms = {
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 分页获取传真草稿
 * @summary Response data types
 * @url [ get ] /api/Faxes/draft
 * @bizName edmsBiz
 */
export type GetFaxesDraftResTypeByEdms = {
    totalCount: number;
    records: Array<{
        id: number;
        title: string;
        internationalCode: string;
        prioritySendType: 0 | 1 | 2 | 3 | 4;
        longDistanceCode: string;
        memo: string;
        senderID: string;
        receivers: Array<{
            id: string;
            name: string;
            title: string;
            phones: Array<{
                number: string;
                type: 0 | 1 | 2 | 3 | 4;
            }>;
        }>;
        sendFirst: boolean;
        saveTime: string;
        files: Array<{
            id: string;
            name: string;
            fullPath: string;
            length: number;
        }>;
        extension: string;
    }>;
};

/**
 * @description 将传真保存至草稿箱
 * @summary Request data types
 * @url [ post ] /api/Faxes/draft
 * @bizName edmsBiz
 */
export type PostFaxesDraftReqTypeByEdms = {
    Title: string;
    InternationalCode: string;
    PrioritySendType?: number;
    LongDistanceCode: string;
    Memo?: string;
    Receivers: string;
    SendFirst?: boolean;
};

/**
 * @description 将传真保存至草稿箱
 * @summary Response data types
 * @url [ post ] /api/Faxes/draft
 * @bizName edmsBiz
 */
export type PostFaxesDraftResTypeByEdms = {
    id: number;
    title: string;
    internationalCode: string;
    prioritySendType: 0 | 1 | 2 | 3 | 4;
    longDistanceCode: string;
    memo: string;
    senderID: string;
    receivers: Array<{
        id: string;
        name: string;
        title: string;
        phones: Array<{
            number: string;
            type: 0 | 1 | 2 | 3 | 4;
        }>;
    }>;
    sendFirst: boolean;
    saveTime: string;
    files: Array<{
        id: string;
        name: string;
        fullPath: string;
        length: number;
    }>;
    extension: string;
};

/**
 * @description 获取指定的传真草稿
 * @summary Request data types
 * @url [ get ] /api/Faxes/draft/{id}
 * @bizName edmsBiz
 */
export type GetFaxesDraftIdReqTypeByEdms = {
    id: number;
};

/**
 * @description 获取指定的传真草稿
 * @summary Response data types
 * @url [ get ] /api/Faxes/draft/{id}
 * @bizName edmsBiz
 */
export type GetFaxesDraftIdResTypeByEdms = {
    id: number;
    title: string;
    internationalCode: string;
    prioritySendType: 0 | 1 | 2 | 3 | 4;
    longDistanceCode: string;
    memo: string;
    senderID: string;
    receivers: Array<{
        id: string;
        name: string;
        title: string;
        phones: Array<{
            number: string;
            type: 0 | 1 | 2 | 3 | 4;
        }>;
    }>;
    sendFirst: boolean;
    saveTime: string;
    files: Array<{
        id: string;
        name: string;
        fullPath: string;
        length: number;
    }>;
    extension: string;
};

/**
 * @description 更新草稿箱内的传真
 * @summary Request data types
 * @url [ put ] /api/Faxes/draft/{id}
 * @bizName edmsBiz
 */
export type PutFaxesDraftIdReqTypeByEdms = {
    id: number;
    Title: string;
    InternationalCode: string;
    PrioritySendType?: number;
    LongDistanceCode: string;
    Memo?: string;
    Receivers: string;
    FilesJson?: string;
    SendFirst?: boolean;
    Extension?: string;
};

/**
 * @description 删除指定的传真草稿
 * @summary Request data types
 * @url [ delete ] /api/Faxes/draft/{id}
 * @bizName edmsBiz
 */
export type DeleteFaxesDraftIdReqTypeByEdms = {
    id: number;
};

/**
 * @description 删除指定的传真草稿
 * @summary Response data types
 * @url [ delete ] /api/Faxes/draft/{id}
 * @bizName edmsBiz
 */
export type DeleteFaxesDraftIdResTypeByEdms = {
    id: number;
    title: string;
    internationalCode: string;
    prioritySendType: 0 | 1 | 2 | 3 | 4;
    longDistanceCode: string;
    memo: string;
    senderID: string;
    receivers: Array<{
        id: string;
        name: string;
        title: string;
        phones: Array<{
            number: string;
            type: 0 | 1 | 2 | 3 | 4;
        }>;
    }>;
    sendFirst: boolean;
    saveTime: string;
    files: Array<{
        id: string;
        name: string;
        fullPath: string;
        length: number;
    }>;
    extension: string;
};

/**
 * @description 将传真草稿进行发送
 * @summary Request data types
 * @url [ put ] /api/Faxes/draft/{id}/send
 * @bizName edmsBiz
 */
export type PutFaxesDraftIdSendReqTypeByEdms = {
    id: number;
};

/**
 * @description 将传真移至回收站
 * @summary Request data types
 * @url [ put ] /api/Faxes/{id}/abandon
 * @bizName edmsBiz
 */
export type PutFaxesIdAbandonReqTypeByEdms = {
    id: string;
};

/**
 * @description 将传真从回收站删除
 * @summary Request data types
 * @url [ delete ] /api/Faxes/{id}/forever
 * @bizName edmsBiz
 */
export type DeleteFaxesIdForeverReqTypeByEdms = {
    id: string;
};

/**
 * @description 将传真从回收站恢复
 * @summary Request data types
 * @url [ put ] /api/Faxes/{id}/recover
 * @bizName edmsBiz
 */
export type PutFaxesIdRecoverReqTypeByEdms = {
    id: string;
};

/**
 * @description 将传真设置为已读
 * @summary Request data types
 * @url [ put ] /api/Faxes/{id}/read
 * @bizName edmsBiz
 */
export type PutFaxesIdReadReqTypeByEdms = {
    id: string;
};

/**
 * @description 更新黑名单
 * @summary Request data types
 * @url [ put ] /api/Faxes/blacklist
 * @bizName edmsBiz
 */
export type PutFaxesBlacklistReqTypeByEdms = {
    isDelete?: boolean;
    number: string;
};

/**
 * @description 分页获取黑名单
 * @summary Request data types
 * @url [ get ] /api/Faxes/blacklist
 * @bizName edmsBiz
 */
export type GetFaxesBlacklistReqTypeByEdms = {
    page?: number;
    per_page?: number;
};

/**
 * @description 分页获取黑名单
 * @summary Response data types
 * @url [ get ] /api/Faxes/blacklist
 * @bizName edmsBiz
 */
export type GetFaxesBlacklistResTypeByEdms = {
    totalCount: number;
    records: Array<string>;
};

/**
 * @description 更新白名单
 * @summary Request data types
 * @url [ put ] /api/Faxes/whitelist
 * @bizName edmsBiz
 */
export type PutFaxesWhitelistReqTypeByEdms = {
    isDelete?: boolean;
    number: string;
};

/**
 * @description 分页获取白名单
 * @summary Request data types
 * @url [ get ] /api/Faxes/whitelist
 * @bizName edmsBiz
 */
export type GetFaxesWhitelistReqTypeByEdms = {
    page?: number;
    per_page?: number;
};

/**
 * @description 分页获取白名单
 * @summary Response data types
 * @url [ get ] /api/Faxes/whitelist
 * @bizName edmsBiz
 */
export type GetFaxesWhitelistResTypeByEdms = {
    totalCount: number;
    records: Array<string>;
};

/**
 * @description 分级调度操作
 * @summary Request data types
 * @url [ post ] /api/GradingDispatch
 * @bizName edmsBiz
 */
export type PostGradingDispatchReqTypeByEdms = {
    version: string;
    id: string;
    bizName: string;
    bizData: any;
    sourceId: string;
    destinationId: string;
    type: number;
    timeout: number;
};

/**
 * @description 查询号码对应的短信会话
 * @summary Request data types
 * @url [ get ] /api/Messages
 * @bizName edmsBiz
 */
export type GetMessagesReqTypeByEdms = {
    phoneNum: string;
};

/**
 * @description 查询号码对应的短信会话
 * @summary Response data types
 * @url [ get ] /api/Messages
 * @bizName edmsBiz
 */
export type GetMessagesResTypeByEdms = {
    id: string;
    isGroupSending: boolean;
    config: {
        needConfirm: boolean;
        isStateMessage: boolean;
        stateMessageValue: number;
        isAreaMessage: boolean;
        longitude: number;
        latitude: number;
        radius: number;
        tag: string;
        stateDingDing: boolean;
        isSendRecord: boolean;
        conversationName: string;
        numberName: string;
    };
    ownSidePhone: string;
    oppositePhones: Array<string>;
    messages: Array<{
        id: string;
        conversationID: string;
        name: string;
        serialNumber: string;
        senderNumber: string;
        sender: {
            id: string;
            name: string;
            title: string;
            account: string;
            photoPath: string;
            platformId: string;
            platformName: string;
            organizations: Array<{
                id: string;
                name: string;
            }>;
        };
        recipientNumber: string;
        recipient: {
            id: string;
            name: string;
            title: string;
            account: string;
            photoPath: string;
            platformId: string;
            platformName: string;
            organizations: Array<{
                id: string;
                name: string;
            }>;
        };
        content: string;
        dateTime: string;
        handled: number;
        isNeedConfirm: boolean;
        confirmTime: string;
        configStr: string;
    }>;
};

/**
 * @description 发送短信
 * @summary Request data types
 * @url [ post ] /api/Messages
 * @bizName edmsBiz
 */
export type PostMessagesReqTypeByEdms = {
    sender?: string;
    receiver?: string;
    content?: string;
};

/**
 * @description 查询短信记录
 * @summary Request data types
 * @url [ get ] /api/Messages/records
 * @bizName edmsBiz
 */
export type GetMessagesRecordsReqTypeByEdms = {
    StartTime: string;
    EndTime: string;
    Keyword?: string;
    PlatformId?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 查询短信记录
 * @summary Response data types
 * @url [ get ] /api/Messages/records
 * @bizName edmsBiz
 */
export type GetMessagesRecordsResTypeByEdms = {
    totalCount: number;
    records: Array<{
        id: string;
        content: string;
        sender: string;
        senderContact: {
            id: string;
            name: string;
            title: string;
            account: string;
            photoPath: string;
            platformId: string;
            platformName: string;
            organizations: Array<{
                id: string;
                name: string;
            }>;
        };
        recipient: string;
        recipientContact: {
            id: string;
            name: string;
            title: string;
            account: string;
            photoPath: string;
            platformId: string;
            platformName: string;
            organizations: Array<{
                id: string;
                name: string;
            }>;
        };
        serialNumber: string;
        conversationID: string;
        handled: 0 | 1 | 2 | 3;
        dateTime: string;
        isNeedConfirm: boolean;
        confirmTime: string;
        areaCode: string;
    }>;
};

/**
 * @description 通过ID获取短信会话
 * @summary Request data types
 * @url [ get ] /api/Messages/{id}
 * @bizName edmsBiz
 */
export type GetMessagesIdReqTypeByEdms = {
    id: string;
};

/**
 * @description 通过ID获取短信会话
 * @summary Response data types
 * @url [ get ] /api/Messages/{id}
 * @bizName edmsBiz
 */
export type GetMessagesIdResTypeByEdms = {
    id: string;
};

/**
 * @description 群发短信
 * @summary Request data types
 * @url [ post ] /api/Messages/group
 * @bizName edmsBiz
 */
export type PostMessagesGroupReqTypeByEdms = {
    senderNumber?: string;
    receiverNumbers: Array<string>;
    content?: string;
};

/**
 * @description 群发短信
 * @summary Response data types
 * @url [ post ] /api/Messages/group
 * @bizName edmsBiz
 */
export type PostMessagesGroupResTypeByEdms = {
    id: string;
};

/**
 * @description 按条件查询短信模板
 * @summary Request data types
 * @url [ get ] /api/Messages/templates
 * @bizName edmsBiz
 */
export type GetMessagesTemplatesReqTypeByEdms = {
    page?: number;
    per_page?: number;
};

/**
 * @description 按条件查询短信模板
 * @summary Response data types
 * @url [ get ] /api/Messages/templates
 * @bizName edmsBiz
 */
export type GetMessagesTemplatesResTypeByEdms = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        stationId: string;
        content: string;
    }>;
};

/**
 * @description 新建短信模板
 * @summary Request data types
 * @url [ post ] /api/Messages/templates
 * @bizName edmsBiz
 */
export type PostMessagesTemplatesReqTypeByEdms = {
    name?: string;
    content?: string;
};

/**
 * @description 新建短信模板
 * @summary Response data types
 * @url [ post ] /api/Messages/templates
 * @bizName edmsBiz
 */
export type PostMessagesTemplatesResTypeByEdms = {
    id: string;
    name: string;
    stationId: string;
    content: string;
};

/**
 * @description 通过ID获取短信模板
 * @summary Request data types
 * @url [ get ] /api/Messages/templates/{id}
 * @bizName edmsBiz
 */
export type GetMessagesTemplatesIdReqTypeByEdms = {
    id: string;
};

/**
 * @description 通过ID获取短信模板
 * @summary Response data types
 * @url [ get ] /api/Messages/templates/{id}
 * @bizName edmsBiz
 */
export type GetMessagesTemplatesIdResTypeByEdms = {
    id: string;
    name: string;
    stationId: string;
    content: string;
};

/**
 * @description 修改短信模板
 * @summary Request data types
 * @url [ put ] /api/Messages/templates/{id}
 * @bizName edmsBiz
 */
export type PutMessagesTemplatesIdReqTypeByEdms = {
    id: string;
    name?: string;
    content?: string;
};

/**
 * @description 删除短信模板
 * @summary Request data types
 * @url [ delete ] /api/Messages/templates/{id}
 * @bizName edmsBiz
 */
export type DeleteMessagesTemplatesIdReqTypeByEdms = {
    id: string;
};

/**
 * @description 修改短信会话名称
 * @summary Request data types
 * @url [ put ] /api/Messages/conversations/{id}
 * @bizName edmsBiz
 */
export type PutMessagesConversationsIdReqTypeByEdms = {
    id: string;
    name: string;
};

/**
 * @description 更新所有短信记录行政区划（历史数据补全运维接口）
 * @summary Request data types
 * @url [ put ] /api/Messages/districts
 * @bizName edmsBiz
 */
export type PutMessagesDistrictsReqTypeByEdms = {
    defaultAreaCode?: string;
    isOnlyQueryAreaCodeEmpty: boolean;
};

/**
 * @description 发送NC短信
 * @summary Request data types
 * @url [ post ] /api/NCMessages
 * @bizName edmsBiz
 */
export type PostNCMessagesReqTypeByEdms = {
    id?: string;
    sender: string;
    recipient: string;
    content: string;
    encoder?: number;
    isStateMessage?: boolean;
    stateMessageValue?: number;
    isAreaMessage?: boolean;
    longitude?: number;
    latitude?: number;
    radius?: number;
};

/**
 * @description 发送NC短信
 * @summary Response data types
 * @url [ post ] /api/NCMessages
 * @bizName edmsBiz
 */
export type PostNCMessagesResTypeByEdms = {
    id: string;
    result: boolean;
    reason: string;
};

/**
 * @description 开启电话值守夜服服务
 * @summary Request data types
 * @url [ put ] /api/NightServices/duty
 * @bizName edmsBiz
 */
export type PutNightServicesDutyReqTypeByEdms = {
    phoneNumber: string;
};

/**
 * @description 开启自动语音夜服服务
 * @summary Request data types
 * @url [ put ] /api/NightServices/auto
 * @bizName edmsBiz
 */
export type PutNightServicesAutoReqTypeByEdms = {
    audioID?: number;
};

/**
 * @description 获取当前用户的夜服状态
 * @summary Response data types
 * @url [ get ] /api/NightServices/user
 * @bizName edmsBiz
 */
export type GetNightServicesUserResTypeByEdms = {
    isOpenNightService: boolean;
    accessNumber: string;
};

/**
 * @description 分页获取线路组夜服状态
 * @summary Request data types
 * @url [ get ] /api/NightServices
 * @bizName edmsBiz
 */
export type GetNightServicesReqTypeByEdms = {
    Keyword?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 分页获取线路组夜服状态
 * @summary Response data types
 * @url [ get ] /api/NightServices
 * @bizName edmsBiz
 */
export type GetNightServicesResTypeByEdms = {
    totalCount: number;
    records: Array<{
        isOpenNightService: boolean;
        accessNumber: string;
    }>;
};

/**
 * @description 通过ID获取Pet
 * @summary Request data types
 * @url [ get ] /api/Petstore/{id}
 * @bizName edmsBiz
 */
export type GetPetstoreIdReqTypeByEdms = {
    id: number;
};

/**
 * @description 通过ID获取Pet
 * @summary Response data types
 * @url [ get ] /api/Petstore/{id}
 * @bizName edmsBiz
 */
export type GetPetstoreIdResTypeByEdms = {
    id: number;
    name: string;
    category: {
        id: number;
        name: string;
        additionalProperties: Record<string, any>;
    };
    photoUrls: Array<string>;
    tags: Array<{
        id: number;
        name: string;
        additionalProperties: Record<string, any>;
    }>;
    status: 0 | 1 | 2;
    additionalProperties: Record<string, any>;
};

/**
 * @description 获取录音通知
 * @summary Request data types
 * @url [ get ] /api/RecordNotifies/{id}
 * @bizName edmsBiz
 */
export type GetRecordNotifiesIdReqTypeByEdms = {
    id: string;
};

/**
 * @description 获取录音通知
 * @summary Response data types
 * @url [ get ] /api/RecordNotifies/{id}
 * @bizName edmsBiz
 */
export type GetRecordNotifiesIdResTypeByEdms = {
    id: string;
    name: string;
    description: string;
    startTime: string;
    number: number;
    fileGroupID: string;
    notifyContent: string;
    ownerID: string;
    ownerName: string;
    notifyGroupType: 0 | 1;
    playType: 0 | 1;
    playTimes: number;
    isAllowUserJoin: boolean;
    password: string;
    status: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    groupID: string;
};

/**
 * @description 结束录音通知
 * @summary Request data types
 * @url [ delete ] /api/RecordNotifies/{id}
 * @bizName edmsBiz
 */
export type DeleteRecordNotifiesIdReqTypeByEdms = {
    id: string;
};

/**
 * @description 创建录音通知
 * @summary Request data types
 * @url [ post ] /api/RecordNotifies
 * @bizName edmsBiz
 */
export type PostRecordNotifiesReqTypeByEdms = {
    name?: string;
    description?: string;
    priorityInviteType?: 0 | 1 | 2 | 3 | 4;
    recallStrategy?: {
        isEnableRecall: boolean;
        recallTimes: number;
        recallPeriod: number;
        isForcedHook: boolean;
    };
    number?: number;
    fileGroupID?: string;
    notifyContent?: string;
    type?: 0 | 1;
    playType?: 0 | 1;
    maxConcurrency?: number;
    playTimes?: number;
    isAllowUserJoin?: boolean;
    password?: string;
    groupID?: string;
    eventID?: string;
    voiceName?: string;
    notifiedMembers?: Array<{
        id: string;
        name: string;
        title: string;
        phones: Array<{
            number: string;
            type: 0 | 1 | 2 | 3 | 4;
        }>;
    }>;
};

/**
 * @description 创建录音通知
 * @summary Response data types
 * @url [ post ] /api/RecordNotifies
 * @bizName edmsBiz
 */
export type PostRecordNotifiesResTypeByEdms = {
    id: string;
    name: string;
    description: string;
    startTime: string;
    number: number;
    fileGroupID: string;
    notifyContent: string;
    ownerID: string;
    ownerName: string;
    notifyGroupType: 0 | 1;
    playType: 0 | 1;
    playTimes: number;
    isAllowUserJoin: boolean;
    password: string;
    status: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    groupID: string;
};

/**
 * @description 获取全部录音通知
 * @summary Request data types
 * @url [ get ] /api/RecordNotifies
 * @bizName edmsBiz
 */
export type GetRecordNotifiesReqTypeByEdms = {
    page?: number;
    per_page?: number;
};

/**
 * @description 获取全部录音通知
 * @summary Response data types
 * @url [ get ] /api/RecordNotifies
 * @bizName edmsBiz
 */
export type GetRecordNotifiesResTypeByEdms = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        description: string;
        startTime: string;
        number: number;
        fileGroupID: string;
        notifyContent: string;
        ownerID: string;
        ownerName: string;
        notifyGroupType: 0 | 1;
        playType: 0 | 1;
        playTimes: number;
        isAllowUserJoin: boolean;
        password: string;
        status: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
        groupID: string;
    }>;
};

/**
 * @description 邀请录音通知成员
 * @summary Request data types
 * @url [ put ] /api/RecordNotifies/{id}/invite
 * @bizName edmsBiz
 */
export type PutRecordNotifiesIdInviteReqTypeByEdms = {
    id: string;
};

/**
 * @description 移除录音通知成员
 * @summary Request data types
 * @url [ put ] /api/RecordNotifies/{id}/remove
 * @bizName edmsBiz
 */
export type PutRecordNotifiesIdRemoveReqTypeByEdms = {
    id: string;
    name?: string;
    title?: string;
    phones?: Array<{
        number: string;
        type: 0 | 1 | 2 | 3 | 4;
    }>;
};

/**
 * @description 获取指定录音通知的通知统计数据
 * @summary Request data types
 * @url [ get ] /api/RecordNotifies/{id}/statistic
 * @bizName edmsBiz
 */
export type GetRecordNotifiesIdStatisticReqTypeByEdms = {
    id: string;
};

/**
 * @description 获取指定录音通知的通知统计数据
 * @summary Response data types
 * @url [ get ] /api/RecordNotifies/{id}/statistic
 * @bizName edmsBiz
 */
export type GetRecordNotifiesIdStatisticResTypeByEdms = {
    totalCount: number;
    beNotifiedCount: number;
    unconfirmedCount: number;
    listeningCount: number;
    confirmedCount: number;
};

/**
 * @description 获取录音通知成员
 * @summary Request data types
 * @url [ get ] /api/RecordNotifies/{id}/members
 * @bizName edmsBiz
 */
export type GetRecordNotifiesIdMembersReqTypeByEdms = {
    id: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 获取录音通知成员
 * @summary Response data types
 * @url [ get ] /api/RecordNotifies/{id}/members
 * @bizName edmsBiz
 */
export type GetRecordNotifiesIdMembersResTypeByEdms = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        title: string;
        associatedNormalUserID: string;
        phoneNumber: string;
        photoPath: string;
        normalUser: {
            id: string;
            name: string;
            title: string;
            account: string;
            photoPath: string;
            platformId: string;
            platformName: string;
            departments: Array<{
                id: string;
                name: string;
            }>;
            phones: Array<{
                number: string;
                type: string;
            }>;
        };
        lastHangUpTime: string;
        lastTurnOnTime: string;
        reInviteCount: number;
        notifyGroupID: string;
        state: 0 | 1 | 2 | 3;
        operationState: 0 | 1 | 2 | 3 | 4 | 5;
        lastConfirmTime: string;
        hasConfirm: boolean;
    }>;
};

/**
 * @description 获取符合查询条件的语音会议服务器
 * @summary Request data types
 * @url [ get ] /api/Servers/conference
 * @bizName edmsBiz
 */
export type GetServersConferenceReqTypeByEdms = {
    page?: number;
    per_page?: number;
};

/**
 * @description 获取符合查询条件的语音会议服务器
 * @summary Response data types
 * @url [ get ] /api/Servers/conference
 * @bizName edmsBiz
 */
export type GetServersConferenceResTypeByEdms = {
    totalCount: number;
    records: Array<{
        lessMinuteNotifyObject: 0 | 1 | 2;
        masterChangeNotify: 0 | 1 | 2;
        leaveMeetingNotifyObject: 0 | 1 | 2;
        enterMeetingNotifyObject: 0 | 1 | 2;
        masterEnter: string;
        memberEnter: string;
        exitMeeting: string;
        masterChange: string;
        lessOneMinute: string;
        inNotifyVoice: string;
        reportNumberBits: number;
        masterExit: 0 | 1;
        reportLang: 48 | 64;
        meetingTime: number;
        meetingPhone: string;
        needRecord: boolean;
        displayNumber: string;
        appointedConferenceID: number;
        isMuteJoinConference: boolean;
        id: string;
        name: string;
        description: string;
        ip: string;
        port: number;
        password: string;
        state: 0 | 1 | 2;
        masterIP: string;
        masterPort: number;
        slaveIP: string;
        slavePort: number;
        longitude: number;
        latitude: number;
    }>;
};

/**
 * @description 创建语音会议服务器
 * @summary Request data types
 * @url [ post ] /api/Servers/conference
 * @bizName edmsBiz
 */
export type PostServersConferenceReqTypeByEdms = {
    lessMinuteNotifyObject?: 0 | 1 | 2;
    masterChangeNotify?: 0 | 1 | 2;
    leaveMeetingNotifyObject?: 0 | 1 | 2;
    enterMeetingNotifyObject?: 0 | 1 | 2;
    masterEnter?: string;
    memberEnter?: string;
    exitMeeting?: string;
    masterChange?: string;
    lessOneMinute?: string;
    inNotifyVoice?: string;
    reportNumberBits?: number;
    masterExit?: 0 | 1;
    reportLang?: 48 | 64;
    meetingTime?: number;
    meetingPhone?: string;
    needRecord?: boolean;
    displayNumber?: string;
    appointedConferenceID?: number;
    isMuteJoinConference?: boolean;
    name: string;
    description?: string;
    ip: string;
    port: number;
    password?: string;
    masterIP?: string;
    masterPort?: number;
    slaveIP?: string;
    slavePort?: number;
    longitude?: number;
    latitude?: number;
};

/**
 * @description 创建语音会议服务器
 * @summary Response data types
 * @url [ post ] /api/Servers/conference
 * @bizName edmsBiz
 */
export type PostServersConferenceResTypeByEdms = {
    lessMinuteNotifyObject: 0 | 1 | 2;
    masterChangeNotify: 0 | 1 | 2;
    leaveMeetingNotifyObject: 0 | 1 | 2;
    enterMeetingNotifyObject: 0 | 1 | 2;
    masterEnter: string;
    memberEnter: string;
    exitMeeting: string;
    masterChange: string;
    lessOneMinute: string;
    inNotifyVoice: string;
    reportNumberBits: number;
    masterExit: 0 | 1;
    reportLang: 48 | 64;
    meetingTime: number;
    meetingPhone: string;
    needRecord: boolean;
    displayNumber: string;
    appointedConferenceID: number;
    isMuteJoinConference: boolean;
    id: string;
    name: string;
    description: string;
    ip: string;
    port: number;
    password: string;
    state: 0 | 1 | 2;
    masterIP: string;
    masterPort: number;
    slaveIP: string;
    slavePort: number;
    longitude: number;
    latitude: number;
};

/**
 * @description 获取对应语音会议服务器
 * @summary Request data types
 * @url [ get ] /api/Servers/conference/{id}
 * @bizName edmsBiz
 */
export type GetServersConferenceIdReqTypeByEdms = {
    id: string;
};

/**
 * @description 获取对应语音会议服务器
 * @summary Response data types
 * @url [ get ] /api/Servers/conference/{id}
 * @bizName edmsBiz
 */
export type GetServersConferenceIdResTypeByEdms = {
    lessMinuteNotifyObject: 0 | 1 | 2;
    masterChangeNotify: 0 | 1 | 2;
    leaveMeetingNotifyObject: 0 | 1 | 2;
    enterMeetingNotifyObject: 0 | 1 | 2;
    masterEnter: string;
    memberEnter: string;
    exitMeeting: string;
    masterChange: string;
    lessOneMinute: string;
    inNotifyVoice: string;
    reportNumberBits: number;
    masterExit: 0 | 1;
    reportLang: 48 | 64;
    meetingTime: number;
    meetingPhone: string;
    needRecord: boolean;
    displayNumber: string;
    appointedConferenceID: number;
    isMuteJoinConference: boolean;
    id: string;
    name: string;
    description: string;
    ip: string;
    port: number;
    password: string;
    state: 0 | 1 | 2;
    masterIP: string;
    masterPort: number;
    slaveIP: string;
    slavePort: number;
    longitude: number;
    latitude: number;
};

/**
 * @description 更新语音会议服务器
 * @summary Request data types
 * @url [ put ] /api/Servers/conference/{id}
 * @bizName edmsBiz
 */
export type PutServersConferenceIdReqTypeByEdms = {
    id: string;
    lessMinuteNotifyObject?: 0 | 1 | 2;
    masterChangeNotify?: 0 | 1 | 2;
    leaveMeetingNotifyObject?: 0 | 1 | 2;
    enterMeetingNotifyObject?: 0 | 1 | 2;
    masterEnter?: string;
    memberEnter?: string;
    exitMeeting?: string;
    masterChange?: string;
    lessOneMinute?: string;
    inNotifyVoice?: string;
    reportNumberBits?: number;
    masterExit?: 0 | 1;
    reportLang?: 48 | 64;
    meetingTime?: number;
    meetingPhone?: string;
    needRecord?: boolean;
    displayNumber?: string;
    appointedConferenceID?: number;
    isMuteJoinConference?: boolean;
    name: string;
    description?: string;
    ip: string;
    port: number;
    password?: string;
    masterIP?: string;
    masterPort?: number;
    slaveIP?: string;
    slavePort?: number;
    longitude?: number;
    latitude?: number;
};

/**
 * @description 删除指定语音会议服务器
 * @summary Request data types
 * @url [ delete ] /api/Servers/conference/{id}
 * @bizName edmsBiz
 */
export type DeleteServersConferenceIdReqTypeByEdms = {
    id: string;
};

/**
 * @description 电话状态订阅
 * @summary Request data types
 * @url [ post ] /api/Subscriptions/phone_state
 * @bizName edmsBiz
 */
export type PostSubscriptionsPhoneStateReqTypeByEdms = {
    id?: string;
    url: string;
    time?: number;
    phones?: Array<string>;
};

/**
 * @description 电话状态订阅
 * @summary Response data types
 * @url [ post ] /api/Subscriptions/phone_state
 * @bizName edmsBiz
 */
export type PostSubscriptionsPhoneStateResTypeByEdms = {
    subscribeId: string;
    expiredTime: string;
};

/**
 * @description 取消电话状态订阅
 * @summary Request data types
 * @url [ post ] /api/Subscriptions/{id}/phone_state
 * @bizName edmsBiz
 */
export type PostSubscriptionsIdPhoneStateReqTypeByEdms = {
    id: string;
};

/**
 * @description 按条件查询文本模板
 * @summary Request data types
 * @url [ get ] /api/TextTemplates
 * @bizName edmsBiz
 */
export type GetTextTemplatesReqTypeByEdms = {
    KeyWord?: string;
    Type?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 按条件查询文本模板
 * @summary Response data types
 * @url [ get ] /api/TextTemplates
 * @bizName edmsBiz
 */
export type GetTextTemplatesResTypeByEdms = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        textTemplateType: 0 | 1 | 2 | -1;
        content: string;
    }>;
};

/**
 * @description 新建文本模板
 * @summary Request data types
 * @url [ post ] /api/TextTemplates
 * @bizName edmsBiz
 */
export type PostTextTemplatesReqTypeByEdms = {
    name: string;
    textTemplateType?: 0 | 1 | 2 | -1;
    content: string;
};

/**
 * @description 新建文本模板
 * @summary Response data types
 * @url [ post ] /api/TextTemplates
 * @bizName edmsBiz
 */
export type PostTextTemplatesResTypeByEdms = {
    id: string;
    name: string;
    textTemplateType: 0 | 1 | 2 | -1;
    content: string;
};

/**
 * @description 通过ID获取文本模板
 * @summary Request data types
 * @url [ get ] /api/TextTemplates/{id}
 * @bizName edmsBiz
 */
export type GetTextTemplatesIdReqTypeByEdms = {
    id: string;
};

/**
 * @description 通过ID获取文本模板
 * @summary Response data types
 * @url [ get ] /api/TextTemplates/{id}
 * @bizName edmsBiz
 */
export type GetTextTemplatesIdResTypeByEdms = {
    id: string;
    name: string;
    textTemplateType: 0 | 1 | 2 | -1;
    content: string;
};

/**
 * @description 修改文本模板
 * @summary Request data types
 * @url [ put ] /api/TextTemplates/{id}
 * @bizName edmsBiz
 */
export type PutTextTemplatesIdReqTypeByEdms = {
    id: string;
    name: string;
    textTemplateType?: 0 | 1 | 2 | -1;
    content: string;
};

/**
 * @description 删除文本模板
 * @summary Request data types
 * @url [ delete ] /api/TextTemplates/{id}
 * @bizName edmsBiz
 */
export type DeleteTextTemplatesIdReqTypeByEdms = {
    id: string;
};

/**
 * @description 获取符合查询条件的VNC设备
 * @summary Request data types
 * @url [ get ] /api/VirtualNCDevices
 * @bizName edmsBiz
 */
export type GetVirtualNCDevicesReqTypeByEdms = {
    page?: number;
    per_page?: number;
};

/**
 * @description 获取符合查询条件的VNC设备
 * @summary Response data types
 * @url [ get ] /api/VirtualNCDevices
 * @bizName edmsBiz
 */
export type GetVirtualNCDevicesResTypeByEdms = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        connectionState: 0 | 1 | 2;
        description: string;
        prefix: string;
        isKeepAlive: boolean;
        timeInterval: number;
        masterNCDevice: {
            id: string;
            ip: string;
            port: number;
            userName: string;
            password: string;
            isSupportDualMode: boolean;
            isSupportTrunkUser: boolean;
        };
        slaveNCDevice: {
            id: string;
            ip: string;
            port: number;
            userName: string;
            password: string;
            isSupportDualMode: boolean;
            isSupportTrunkUser: boolean;
        };
        longitude: number;
        latitude: number;
    }>;
};

/**
 * @description 创建VNC设备
 * @summary Request data types
 * @url [ post ] /api/VirtualNCDevices
 * @bizName edmsBiz
 */
export type PostVirtualNCDevicesReqTypeByEdms = {
    name: string;
    description?: string;
    prefix?: string;
    isKeepAlive?: boolean;
    timeInterval?: number;
    masterNCDevice: {
        ip: string;
        port: number;
        userName: string;
        password: string;
        isSupportDualMode: boolean;
        isSupportTrunkUser: boolean;
    };
    slaveNCDevice?: {
        ip: string;
        port: number;
        userName: string;
        password: string;
        isSupportDualMode: boolean;
        isSupportTrunkUser: boolean;
    };
    longitude?: number;
    latitude?: number;
};

/**
 * @description 创建VNC设备
 * @summary Response data types
 * @url [ post ] /api/VirtualNCDevices
 * @bizName edmsBiz
 */
export type PostVirtualNCDevicesResTypeByEdms = {
    id: string;
    name: string;
    connectionState: 0 | 1 | 2;
    description: string;
    prefix: string;
    isKeepAlive: boolean;
    timeInterval: number;
    masterNCDevice: {
        id: string;
        ip: string;
        port: number;
        userName: string;
        password: string;
        isSupportDualMode: boolean;
        isSupportTrunkUser: boolean;
    };
    slaveNCDevice: {
        id: string;
        ip: string;
        port: number;
        userName: string;
        password: string;
        isSupportDualMode: boolean;
        isSupportTrunkUser: boolean;
    };
    longitude: number;
    latitude: number;
};

/**
 * @description 获取对应VNC设备
 * @summary Request data types
 * @url [ get ] /api/VirtualNCDevices/{id}
 * @bizName edmsBiz
 */
export type GetVirtualNCDevicesIdReqTypeByEdms = {
    id: string;
};

/**
 * @description 获取对应VNC设备
 * @summary Response data types
 * @url [ get ] /api/VirtualNCDevices/{id}
 * @bizName edmsBiz
 */
export type GetVirtualNCDevicesIdResTypeByEdms = {
    id: string;
    name: string;
    connectionState: 0 | 1 | 2;
    description: string;
    prefix: string;
    isKeepAlive: boolean;
    timeInterval: number;
    masterNCDevice: {
        id: string;
        ip: string;
        port: number;
        userName: string;
        password: string;
        isSupportDualMode: boolean;
        isSupportTrunkUser: boolean;
    };
    slaveNCDevice: {
        id: string;
        ip: string;
        port: number;
        userName: string;
        password: string;
        isSupportDualMode: boolean;
        isSupportTrunkUser: boolean;
    };
    longitude: number;
    latitude: number;
};

/**
 * @description 更新VNC设备
 * @summary Request data types
 * @url [ put ] /api/VirtualNCDevices/{id}
 * @bizName edmsBiz
 */
export type PutVirtualNCDevicesIdReqTypeByEdms = {
    id: string;
    name: string;
    description?: string;
    masterNCDevice: {
        ip: string;
        port: number;
        userName: string;
        password: string;
        isSupportDualMode: boolean;
        isSupportTrunkUser: boolean;
    };
    slaveNCDevice?: {
        ip: string;
        port: number;
        userName: string;
        password: string;
        isSupportDualMode: boolean;
        isSupportTrunkUser: boolean;
    };
};

/**
 * @description 删除指定VNC设备
 * @summary Request data types
 * @url [ delete ] /api/VirtualNCDevices/{id}
 * @bizName edmsBiz
 */
export type DeleteVirtualNCDevicesIdReqTypeByEdms = {
    id: string;
};

/**
 * @description 获取对应VNC设备的中继群配置
 * @summary Request data types
 * @url [ get ] /api/VirtualNCDevices/{id}/trunk_group_configs
 * @bizName edmsBiz
 */
export type GetVirtualNCDevicesIdTrunkGroupConfigsReqTypeByEdms = {
    id: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 获取对应VNC设备的中继群配置
 * @summary Response data types
 * @url [ get ] /api/VirtualNCDevices/{id}/trunk_group_configs
 * @bizName edmsBiz
 */
export type GetVirtualNCDevicesIdTrunkGroupConfigsResTypeByEdms = {
    totalCount: number;
    records: Array<{
        trunkGroupNumber: number;
        trunkGroupDescription: string;
        dualSystemAttribute: boolean;
        callAreaInHost: number;
        trunkGroupType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 255;
        callPriority: number;
        maxCall: number;
        effectiveDate: number;
        effectiveTime: string;
        physicalState: 0 | 1 | 2 | 255;
        isEnable: boolean;
    }>;
};

/**
 * @description 修改中继群配置
 * @summary Request data types
 * @url [ put ] /api/VirtualNCDevices/{id}/trunk_group_configs
 * @bizName edmsBiz
 */
export type PutVirtualNCDevicesIdTrunkGroupConfigsReqTypeByEdms = {
    id: string;
    isEnable?: boolean;
    trunkGroupNumber: number;
    dualSystemAttribute?: boolean;
};

/**
 * @description 批量修改中继群配置
 * @summary Request data types
 * @url [ post ] /api/VirtualNCDevices/{id}/trunk_group_configs/batch
 * @bizName edmsBiz
 */
export type PostVirtualNCDevicesIdTrunkGroupConfigsBatchReqTypeByEdms = {
    id: string;
};

/**
 * @description 刷新VNC中继群配置
 * @summary Request data types
 * @url [ put ] /api/VirtualNCDevices/{id}/trunk_group_configs/refresh
 * @bizName edmsBiz
 */
export type PutVirtualNCDevicesIdTrunkGroupConfigsRefreshReqTypeByEdms = {
    id: string;
};

/**
 * @description 刷新VNC号码
 * @summary Request data types
 * @url [ put ] /api/VirtualNCDevices/{id}/phones/refresh
 * @bizName edmsBiz
 */
export type PutVirtualNCDevicesIdPhonesRefreshReqTypeByEdms = {
    id: string;
    filter?: 0 | 1 | 2;
};

/**
 * @description 获取指定VNC下的号码列表
 * @summary Request data types
 * @url [ get ] /api/VirtualNCDevices/{id}/phones
 * @bizName edmsBiz
 */
export type GetVirtualNCDevicesIdPhonesReqTypeByEdms = {
    id: string;
    Keyword?: string;
    IsPhoneLine?: boolean;
    page?: number;
    per_page?: number;
};

/**
 * @description 获取指定VNC下的号码列表
 * @summary Response data types
 * @url [ get ] /api/VirtualNCDevices/{id}/phones
 * @bizName edmsBiz
 */
export type GetVirtualNCDevicesIdPhonesResTypeByEdms = {
    totalCount: number;
    records: Array<{
        id: string;
        number: string;
        state: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
        usn: string;
        level: number;
        callRegion: number;
        connectionState: 0 | 1 | 2;
        protocol: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 24 | 25 | 254 | 255;
        configStatus: 0 | 1 | 2 | 3 | 4 | 5;
        usageType: string;
        isPhoneLine: boolean;
        owner: {
            id: string;
            name: string;
            title: string;
            platformId: string;
            platformName: string;
        };
    }>;
};
