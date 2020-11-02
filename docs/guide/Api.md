# Api接口文档

## 状态组件

Status

> 状态组件，目前提供五个状态

- 参数
  - type -string：类型，必填，可选值为：start、processing、completed、error、abort
  - text -string：文本值，必填。
  - vertical -string：位置，可选。可选值：bottom、top，默认居中

<status type="start" text='开始 start'/>
<status type="processing" text='进行中 processing'/>
<status type="completed" text='已完成 completed'/>
<status type="error" text='错误 error'/>
<status type="abort" text='废弃、终止 abort'/>

- 使用

```vue
// 默认调用
<status type="abort"/>

// 使用自定义文字
<status type="abort" value="废弃"/>

// 上下标：top 或 bottom，默认剧中
<status type="abort" value="废弃" vertical="top"/>
```
