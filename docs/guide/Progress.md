# 开发进度

## 任务安排

| 任务名称               | 负责人 | 开发起止时间 | 开发时长 | 任务状态                                  |
| ---------------------- | ------ | ------------ | -------- | ----------------------------------------- |
| 1、技术选型            | 刘英融 |              |          | <status type="completed" text="完成"/>    |
| 2、公共组件            |        |              |          |                                           |
| 2.1 分页组件           | 刘英融 |              |          | <status type="error" text="待优化"/>      |
| 2.2 列表组件           | 刘英融 |              |          | <status type="error" text="待优化"/>      |
| 2.3 状态组件           | 刘英融 | 2020.11.2    | 2h       | <status type="completed" text="已完成"/>  |
| 3、登录                |        |              |          |
| 3.1 登录界面           | 刘英融 |              |          | <status type="completed" text="完成"/>    |
| 3.2 登录验证           | 刘英融 |              |          | <status type="completed" text="完成"/>    |
| 3.3 登录优化           | 刘英融 |              |          | <status type="error" text="待优化"/>      |
| 4、框架                |        |              |          |
| 4.0.1 搭建             | 刘英融 |              |          | <status type="completed" text="完成"/>    |
| 4.0.2 路由搭建         | 刘英融 |              |          | <status text="进行中" type="processing"/> |
| 4.0.3 公共样式、自适应 | 刘英融 |              |          | <status text="进行中" type="processing"/> |
| 4.0.4 注销             | 刘英融 |              |          | <status type="completed" text="完成"/>    |
| 4.1、航次信息          |        |              |          |
| 4.1.1 在线状态         | 刘英融 |              |          | <status type="completed" text="完成"/>    |
| 4.1.2 航次下载         | 刘英融 |              |          | <status type="completed" text="完成"/>    |
| 4.1.3 文件下载         | 刘英融 |              |          | <status text="进行中" type="processing"/> |
| 4.1.4 手机在线状态     | 刘英融 |              |          | <status text="进行中" type="processing"/> |
| 4.1.5 手机下载         | 刘英融 |              |          | <status text="进行中" type="processing"/> |
| 4.2、站位规划          |        |              |          |
| 4.2.1 树状菜单         | 刘英融 |              |          | <status text="进行中" type="processing"/> |
| 4.2.2 菜单栏           | 刘英融 |              |          | <status text="进行中" type="processing"/> |
| 4.2.3 地图             | 刘英融 |              |          | <status text="进行中" type="processing"/> |
| 4.2.4 站位编辑         | 刘英融 |              |          | <status text="进行中" type="processing"/> |
| 4.3、现场作业          |        |              |          | <status text="进行中" type="processing"/> |
| 4.3.1 现场分析         |        |              |          | <status text="进行中" type="processing"/> |
| 4.3.2 sqlite备份还原   | 刘英融 |              |          | <status type="completed" text="完成"/>    |
| 4.3.3 记录单列表       | 刘英融 |              |          | <status type="error" text="待优化"/>      |
| 4.3.4 新增记录单       | 刘英融 |              |          | <status text="进行中" type="processing"/> |
| 4.3.5 选择样品         | 刘英融 |              |          | <status type="error" text="待优化"/>      |
| 4.3.6 打开Excel文件    | 刘英融 |              |          | <status type="completed" text="完成"/>    |
| 4.3.7 记录单生成       | 刘英融 |              |          | <status text="进行中" type="processing"/> |
| 4.3.8 采样数据         |        |              |          | <status text="进行中" type="processing"/> |
| 4.3.9 样品信息         |        |              |          | <status text="进行中" type="processing"/> |
| 4.3.10 回收站          |        |              |          | <status text="进行中" type="processing"/> |
| 4.3.11 数据上传        |        |              |          | <status text="进行中" type="processing"/> |
| 4.3.12 采样数据        |        |              |          | <status text="进行中" type="processing"/> |
| 4.3.13 现场分析        |        |              |          | <status text="进行中" type="processing"/> |
| 4.3.14 历史航次        |        |              |          | <status text="进行中" type="processing"/> |

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
