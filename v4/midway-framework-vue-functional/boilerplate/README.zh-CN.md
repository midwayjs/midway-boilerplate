# my_midway_project

## 快速入门

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:5173/
```

### 构建与启动

```bash
$ npm run build
$ npm start
```

### 说明

- Midway 服务端位于 `src/server`，对外提供 `/api/*`。
- Vue 应用使用 Vite，直接调用 `src/server/api` 的类型化接口。
- 使用 `npm run lint` 做代码风格检查。
