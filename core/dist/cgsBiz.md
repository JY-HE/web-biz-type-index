
/**
 * 文字转语音
 * @params text {string} 需要转换的文字
 * @params volume {number} 音量
 * @params speed {number} 速度
 * @params voiceName {string} 语音名称
 * @params rate {number} 采样率
 * @params lang {string} 语言
 * @params usingNeural {boolean} 使用使用神经网络声音（高质量语音）
 * @params waitNeural {boolean} 是否等待神经网络声音生成再返回如果不等待，将临时返回低质量语音文件，高质量语音将在后台转换后，提供缓存缓存的key为NeuralVoiceName+VoiceName，使用SHA-256哈希算法生成唯一文件名
 * @params neuralVoiceName {string} voice name 如果传入不支持的语音名字，将自动采用默认
*/
type UniformSpeechInCommonType = {
      text: string;
      volume?: number;
      speed?: number;
      voiceName?: string;
      rate?: number;
      lang?: string;
      usingNeural?: boolean;
      waitNeural?: boolean;
      neuralVoiceName?: string;
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
 * 文字转语音结果
 * @params id {string} 转换Id
 * @params filePath {string} 转换后的语音文件相对路径
 * @params text {string} 转语音的文字
*/
type TextToSpeechOutExCommonType = {
      id?: string;
      filePath?: string;
      text?: string;
}


/**
 * undefined
*/
type VoiceAgeCommonType =  0 | 10 | 15 | 30 | 65 ;


/**
 * undefined
*/
type VoiceGenderCommonType =  0 | 1 | 2 | 3 ;


/**
 * 
 * @params id {string} 
 * @params name {string} 
 * @params voiceAge {VoiceAgeCommonType} 
 * @params voiceGender {VoiceGenderCommonType} 
 * @params culture {string} 
 * @params description {string} 
*/
type VoiceInfoCommonType = {
      id?: string;
      name?: string;
      voiceAge?: VoiceAgeCommonType;
      voiceGender?: VoiceGenderCommonType;
      culture?: string;
      description?: string;
}


----

/**
 * 文字转语音——请求参数类型定义
 * @params text {string} 需要转换的文字 （必填）
 * @params volume {number} 音量 
 * @params speed {number} 速度 
 * @params voiceName {string} 语音名称 
 * @params rate {number} 采样率 
 * @params lang {string} 语言 
 * @params usingNeural {boolean} 使用使用神经网络声音（高质量语音） 
 * @params waitNeural {boolean} 是否等待神经网络声音生成再返回如果不等待，将临时返回低质量语音文件，高质量语音将在后台转换后，提供缓存缓存的key为NeuralVoiceName+VoiceName，使用SHA-256哈希算法生成唯一文件名 
 * @params neuralVoiceName {string} voice name 如果传入不支持的语音名字，将自动采用默认 
*/
export type TextToSpeechReqType = {
      text: string;
      volume?: number;
      speed?: number;
      voiceName?: string;
      rate?: number;
      lang?: string;
      usingNeural?: boolean;
      waitNeural?: boolean;
      neuralVoiceName?: string;
}


/**
 * 文字转语音——响应参数类型定义
 * @params id {string} 转换Id
 * @params filePath {string} 转换后的语音文件相对路径
 * @params text {string} 转语音的文字
*/
export type TextToSpeechResType = {
      id: string;
      filePath: string;
      text: string;
}


/**
 * 文字转语音(语音通知专用)
<remarks>该接口的Rate不支持设置，必须为8000</remarks>——请求参数类型定义
 * @params text {string} 需要转换的文字 （必填）
 * @params volume {number} 音量 
 * @params speed {number} 速度 
 * @params voiceName {string} 语音名称 
 * @params rate {number} 采样率 
 * @params lang {string} 语言 
 * @params usingNeural {boolean} 使用使用神经网络声音（高质量语音） 
 * @params waitNeural {boolean} 是否等待神经网络声音生成再返回如果不等待，将临时返回低质量语音文件，高质量语音将在后台转换后，提供缓存缓存的key为NeuralVoiceName+VoiceName，使用SHA-256哈希算法生成唯一文件名 
 * @params neuralVoiceName {string} voice name 如果传入不支持的语音名字，将自动采用默认 
*/
export type TextToRecordNotifyReqType = {
      text: string;
      volume?: number;
      speed?: number;
      voiceName?: string;
      rate?: number;
      lang?: string;
      usingNeural?: boolean;
      waitNeural?: boolean;
      neuralVoiceName?: string;
}


/**
 * 文字转语音(语音通知专用)
<remarks>该接口的Rate不支持设置，必须为8000</remarks>——响应参数类型定义
 * @params id {string} 转换Id
 * @params filePath {string} 转换后的语音文件相对路径
 * @params text {string} 转语音的文字
*/
export type TextToRecordNotifyResType = {
      id: string;
      filePath: string;
      text: string;
}


/**
 * 通过语音信息列表——响应参数类型定义
 * @params id {string} 
 * @params name {string} 
 * @params voiceAge {VoiceAgeCommonType} 
 * @params voiceGender {VoiceGenderCommonType} 
 * @params culture {string} 
 * @params description {string} 
*/
export type GetVoiceInfosResType = {
      id: string;
      name: string;
      voiceAge: VoiceAgeCommonType;
      voiceGender: VoiceGenderCommonType;
      culture: string;
      description: string;
}

