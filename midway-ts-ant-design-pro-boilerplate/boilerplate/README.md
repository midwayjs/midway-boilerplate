# {{name}}

> {{description}}

## Development

- 在最外层根目录执行即可，启动后使用 <http://localhost:6001/>打开提示即可，详细可见 [Midway 和 Ant Design Pro 前后端分离方案](https://yuque.antfin-inc.com/midwayjs/midway6/midway-ant-design-pro)
- 更多命令请参照各自 package.json 对应脚本，关于详细的开发教程可以[Ant Design Pro 4](https://pro.ant.design/docs/getting-started-cn)和 [Midway6 TS](https://midway.alibaba-inc.com/midway#/midway/github/midwayjs/midway/docs/guide)

  ```bash
  $ npm i             //汇总安装前后端依赖
  $ npm run start     //启动本地前后端调试
  ```

## Directory

- client [Ant Design Pro 4](https://pro.ant.design/docs/getting-started-cn#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84) 目录说明
- server Midway6 TS 目录说明

```tree
.
├── client                      # 前端 Ant Design Pro 4
│   ├── config/                 # umi 配置，包含路由，构建等配置
│   ├── mock/                   # 本地模拟数据
│   ├── public/
│   │   └── favicon.png         # Favicon
│   ├── src
│   │   ├── assets/             # 本地静态资源
│   │   ├── components/         # 业务通用组件
│   │   ├── e2e/                # 集成测试用例
│   │   ├── layouts/            # 通用布局
│   │   ├── models/             # 全局 dva model
│   │   ├── pages/              # 业务页面入口和常用模板
│   │   ├── services/           # 后台接口服务
│   │   ├── utils/              # 工具库
│   │   ├── global.less         # 全局样式
│   │   └── global.tsx          # 全局 JS
│   └── package.json
├── package.json                # 前后端汇总入口 package.json
└── server/                     # 后端 Midway6 TS
    ├── dist/                   # 编译后目录
    ├── logs/                   # 本地日志目录
    ├── src                     # 源码目录
    │   ├── app                 # 应用层目录
    │   │   ├── controller/     # 应用层 controller 目录
    │   │   ├── public/         # client 打包后静态文件目录
    │   │   └── view/           # 应用层模板
    │   ├── service/            # 服务逻辑层
    │   ├── interface/          # 接口定义文件
    │   ├── config/             # 中间件配置目录
    │   └── app.ts              # 应用扩展文件
    ├── build.sh                # aone 依靠进行编译部署
    ├── one-platform.release    # aone 根据此文件判断部署类型
    └── package.json
```
