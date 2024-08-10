/**
 * @description 文字转语音
 * @summary Request data types
 * @url [ post ] /api/UniformSpeech
 * @bizName cgsBiz
 */
export type PostUniformSpeechReqTypeByCgs = {
    text: string;
    volume?: number;
    speed?: number;
    voiceName?: string;
    rate?: number;
    lang?: string;
    usingNeural?: boolean;
    waitNeural?: boolean;
    neuralVoiceName?: string;
};

/**
 * @description 文字转语音
 * @summary Response data types
 * @url [ post ] /api/UniformSpeech
 * @bizName cgsBiz
 */
export type PostUniformSpeechResTypeByCgs = {
    id: string;
    filePath: string;
    text: string;
};

/**
 * @description 文字转语音(语音通知专用)
<remarks>该接口的Rate不支持设置，必须为8000</remarks> 
 * @summary Request data types 
 * @url [ post ] /api/UniformSpeech/RecordNotify 
 * @bizName cgsBiz 
 */
export type PostUniformSpeechRecordNotifyReqTypeByCgs = {
    text: string;
    volume?: number;
    speed?: number;
    voiceName?: string;
    rate?: number;
    lang?: string;
    usingNeural?: boolean;
    waitNeural?: boolean;
    neuralVoiceName?: string;
};

/**
 * @description 文字转语音(语音通知专用)
<remarks>该接口的Rate不支持设置，必须为8000</remarks> 
 * @summary Response data types 
 * @url [ post ] /api/UniformSpeech/RecordNotify 
 * @bizName cgsBiz 
 */
export type PostUniformSpeechRecordNotifyResTypeByCgs = {
    id: string;
    filePath: string;
    text: string;
};

/**
 * @description 通过语音信息列表
 * @summary Response data types
 * @url [ get ] /api/UniformSpeech/voiceinfos
 * @bizName cgsBiz
 */
export type GetUniformSpeechVoiceinfosResTypeByCgs = {
    id: string;
    name: string;
    voiceAge: 0 | 10 | 15 | 30 | 65;
    voiceGender: 0 | 1 | 2 | 3;
    culture: string;
    description: string;
};
