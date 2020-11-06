# Api接口文档

## 状态组件

### Status

- 参数
  - type -string：类型，必填，可选值为：start、processing、completed、error、abort
  - text -string：文本值，必填。
  - vertical -string：位置，可选。可选值：bottom、top，默认居中

<status type="start" text='开始 start'/>
<status type="processing" text='进行中 processing'/>
<status type="completed" text='已完成 completed'/>
<status type="error" text='错误 error'/>
<status type="abort" text='废弃、终止 abort'/>

```vue
// 默认调用
<status type="abort"/>

// 使用自定义文字
<status type="abort" text="废弃"/>

// 上下标：top 或 bottom，默认居中
<status type="abort" text="废弃" vertical="top"/>
```

## 数据库操作

### mssql数据库链接配置

在 `src/main/index.js` 中进行配置

```js
const mssqlConfig = {
  user: 'sa', // 用户名
  password: 'ht@5117', // 密码
  server: '192.168.16.188', // 数据库服务器
  database: 'htlis_hy_fjsc', // 要操作的数据库名称
  port: 1433, // 数据库端口
  pool: {
    min: 0,
    max: 10,
    idleTimeoutMillis: 3000
  }
}
```

### mssql数据库操作
  
```js
// 数据库操作都是异步的，注意异步操作
// 这里 remote.app 是在渲染进程中使用时需要添加的
const res = await remote.app.mssql.query(`select * from L01_Configs`)
for (let i = 0; i < res.recordset.length; i++) {
  // 查询结果是对象数组
  let userInfo = res.recordset[i]
}
await remote.app.mssql.query(`update L01_Configs set val='xxx' where ConfigID='xxx'`)
```

### sqlite数据库操作

```js
// 查询
const sql = "select * from L04_User"
const res = remote.app.sqlite.exec(sql)

// 新增
remote.app.sqlite.run("INSERT INTO test VALUES (?,?), (?,?)", [1,111,2,222]);

// 删除
remote.app.sqlite.run('delete FROM L04_User')

// 批量操作：批量操作的时候必须使用prepare，以提高性能
let stmt = remote.app.sqlite.prepare('insert into L01_Configs values(?,?,?,?)')
for (let i = 0; i < 100; i++) {
  // 绑定变量
  stmt.bind(['value1', 'value2', 'value3', 'value4'])
  // 执行
  stmt.step()
}
// 释放查询语句
stmt.free()

// sqlite的操作是在内存中进行的，当执行 update、insert操作时，
// 需要把内存中的数据库写回到本地的 sqlite
remote.app.dataBaseUtils.saveSqlite(remote.app.sqlite.export())
```

## 日志记录

- 系统目前支持6个等级的日志：
  - error: 0
  - warn: 1
  - info: 2
  - verbose: 3
  - debug: 4
  - silly: 5

每一个日志等级都实现为一个函数，可以直接调用对应的函数，来表明想要输出日志的重要程度,数字越小级别越高。createLogger方法的level默认值是info，**在本项目中统一默认level调整为error**,即transport只处理error级别的日志

### savelog

日志文件输出路径`static/log/xxx.log`,按日志写入的日期每天生成一个`.log`文件

使用：`savelog(module,isJson).info(message)`

- 参数
  - module -string：当前页面模块名称，必填
  - isJson -boolean：是否将日志显示为Json格式，选填，默认值：false
  - message -string：日志信息，必填

```js
// 显示成对象格式
remote.app.saveLog('登录模块').error('测试登录日志')
// 日志显示结果：
{
  message: '测试登录日志',
  level: 'error',
  label: '登录模块',
  timestamp: '2020-11-06 10:04:15'
}
// 显示成 Json格式
remote.app.saveLog('登录模块',true).error('测试登录日志')
// 日志显示结果：
{
  "message":"测试登录日志",
  "level":"error",
  "label":"登录模块",
  "timestamp":"2020-11-06 10:04:15"
}
```
