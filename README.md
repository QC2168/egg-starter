# Egg-Starter

这是一个可以让您在短时间内构建`Api`的框架，它是基于`EggJs`官方的`simple`模板进行二次封装开发

## 功能模块

- [x] 🛠️ 统一错误处理机制
- [x] 🔒 JWT验证模块
- [x] 🧰 集成常用工具函数
- [x] 🔄 更好的路由管理
- [x] 🚀 基于EggJs快速构建Restful Api
- [x] 🌐 纯Javascript
- [x] 🐳 Sequelize Mysql
- [x] 🍭 支持 DB Migration / Model Sync
- [x] 📂 基于文件系统缓存服务
- [x] 📚 集成Swaggar文档
- [x] 🦄 集成Vscode代码片段
- [x] 🔧 ESlint
- [ ] 💪 **这些还不够？ 欢迎您来提**`Issues / PR`

## 如何食用

### 📥拉取代码

克隆最新的代码仓库到您的电脑上

```bash
git clone https://github.com/QC2168/egg-starter
```

### 📦安装依赖

进入项目目录，执行`npm i`进行安装依赖

```bash
npm i
```

> 推荐使用`pnpm`包管理器进行安装依赖

### ⚙️更新配置文件

编辑项目中的`.env.development`文件，修改数据库配置信息

```bash
DB_DIALECT=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=egg_starter
DB_USER=root
DB_PASSWORD=123456
```
> 如果您的设备未安装配置数据库，推荐使用Docker镜像安装数据库，具体查阅docker文档

### 🚀启动服务

```bash
npm run dev
```

默认服务地址为`http://127.0.0.1:7001`

> 如果您想要修改其他端口地址，请编辑`.env.development`文件，修改`PORT`配置项

## 🛠️部署

🚀 [EggJs-应用部署](https://www.eggjs.org/zh-CN/core/deployment) - 确保您的应用可以稳定运行

## 数据库迁移

🗄️ 您可以选用[migrations](https://sequelize.org/docs/v6/other-topics/migrations/)来管理数据库迁移

🔄 也可以直接使用[模型同步](https://sequelize.org/docs/v6/core-concepts/model-basics/#model-synchronization)的方式来生成数据库表（更快更便捷）

💡 👇 开启模型同步的方式，请在`.env.development`文件中配置`DB_MODE=syncDB`即可

```bash
# .env.development
# 是否使用模型同步更新数据库
DB_MODE=syncDB
```

⚠️ 推荐使用数据库迁移的方式，因为模型同步的方式可能会导致数据丢失，且不支持回滚操作！！

## 最后

🎉 感谢您的使用，希望`Egg-Starter`能帮助您快速开发！

最最最后，球球一个`Star` 🌹🌹
