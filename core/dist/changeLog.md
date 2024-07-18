
### cgsBiz

|requestTypeName|responsesTypeName|url|methodType|describe|version|
| --------- | --------- | --------- | --------- | --------- | --------- |
|`TextToSpeechReqType`|`TextToSpeechResType`|`/api/UniformSpeech`|post|文字转语音|v1|
|`TextTtoRecordNotifyReqType`|`TextTtoRecordNotifyResType`|`/api/UniformSpeech/RecordNotify`|post|文字转语音(语音通知专用)
<remarks>该接口的Rate不支持设置，必须为8000</remarks>|v1|
|``|`GetVoiceInfosResType`|`/api/UniformSpeech/voiceinfos`|get|通过语音信息列表|v1|
