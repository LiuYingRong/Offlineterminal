# 开发进度

## 任务安排

| 任务名称         | 负责人 | 开发起止时间 | 开发时长 | 是否完成                              |
| ---------------- | ------ | ------------ | -------- | ------------------------------------- |
| 1、技术选型      | 刘英融 |              |          | <Badge text="完成" type="tip"/>       |
| 2、公共组件      |        |              |          |                                       |
| 分页组件         | 刘英融 |              |          | <Badge text="完成" type="tip"/>       |
| 列表组件         | 刘英融 |              |          | <Badge text="完成" type="tip"/>       |
| 3、登录          |        |              |          |
| 登录界面         | 刘英融 |              |          | <Badge text="完成" type="tip"/>       |
| 登录验证         | 刘英融 |              |          | <Badge text="完成" type="tip"/>       |
| 4、框架          |        |              |          |
| 搭建             | 刘英融 |              |          | <Badge text="完成" type="tip"/>       |
| 路由搭建         | 刘英融 |              |          | <Badge text="进行中" type="warning"/> |
| 公共样式、自适应 | 刘英融 |              |          | <Badge text="进行中" type="warning"/> |
| 注销             | 刘英融 |              |          | <Badge text="完成" type="tip"/>       |
| 4.1、航次信息    |        |              |          |
| 在线状态         | 刘英融 |              |          | <Badge text="完成" type="tip"/>       |
| 航次下载         | 刘英融 |              |          | <Badge text="完成" type="tip"/>       |
| 文件下载         | 刘英融 |              |          | <Badge text="进行中" type="warning"/> |
| 手机在线状态     | 刘英融 |              |          | <Badge text="进行中" type="warning"/> |
| 手机下载         | 刘英融 |              |          | <Badge text="进行中" type="warning"/> |
| 4.2、站位规划    |        |              |          |
| 树状菜单         | 刘英融 |              |          | <Badge text="进行中" type="warning"/> |
| 菜单栏           | 刘英融 |              |          | <Badge text="进行中" type="warning"/> |
| 地图             | 刘英融 |              |          | <Badge text="进行中" type="warning"/> |
| 站位编辑         | 刘英融 |              |          | <Badge text="进行中" type="warning"/> |
| 4.2、现场作业    |        |              |          | <Badge text="进行中" type="warning"/> |
| 4.2.1、现场分析  |        |              |          | <Badge text="进行中" type="warning"/> |
| sqlite备份还原   | 刘英融 |              |          | <Badge text="完成" type="tip"/>       |
| 记录单列表       | 刘英融 |              |          | <Badge text="待优化" type="error"/>   |
| 新增记录单       | 刘英融 |              |          | <Badge text="进行中" type="tip"/>     |
| 选择样品         | 刘英融 |              |          | <Badge text="待优化" type="error"/>   |
| 打开Excel文件    | 刘英融 |              |          | <Badge text="完成" type="tip"/>       |
| 记录单生成       | 刘英融 |              |          | <Badge text="进行中" type="tip"/>     |
| 登录验证         | 刘英融 |              |          | <Badge text="完成" type="tip"/>       |
| 4.2.2、采样数据  |        |              |          | <Badge text="进行中" type="warning"/>     |
| 4.2.3、样品信息  |        |              |          | <Badge text="进行中" type="warning"/>     |
| 4.2.4、回收站    |        |              |          | <Badge text="进行中" type="warning"/>     |
| 4.3、数据上传    |        |              |          | <Badge text="进行中" type="warning"/>     |
| 4.3.1、采样数据  |        |              |          | <Badge text="进行中" type="warning"/>     |
| 4.3.2、现场分析  |        |              |          | <Badge text="进行中" type="warning"/>     |
| 4.4、历史航次    |        |              |          | <Badge text="进行中" type="warning"/>     |

> 现场作业和数据上传有很多页面时类似是否能通用列表信息比如采样列表信息，如果一样可以考虑做成组件，但是这个需要你考虑规划好代码

## 已完成开发

1. 登录验证
2. 数据同步（web端同步到离线端）
3. 调用本地软件打开Excel文件
4. sqlite备份还原
5. 数据增删改查
6. 在线状态判定

## 未完成开发

1. 站位规划，离线地图
2. 数据同步（离线端同步到web端）
3. 现场采样记录单生成
4. 采样信息查看等
5. 历史记录
6. 软件更新

## 近期计划

1. 项目梳理
2. 优化整理数据连接、优化数据同步代码
3. 升级UI框架
4. 引入Vuex状态管理
5. ES6语法改写部分代码

## 规划开发

1. 引入TypeScript强类型语言
2. 引入Less或Stylus重写样式
