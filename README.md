# Mini Platform

奇域小程序前端项目。探索神秘世界，挖掘珍贵宝藏，捕捉稀有宠物，打造属于你的专属国度！

## 项目简介

Mini Platform 是一款基于 Taro + React + TypeScript + MobX 的跨平台收集类游戏小程序。配合后端 Mini API 服务，为用户提供探索世界、收集动植物、工具和食物的完整体验。

## 技术栈

- **框架**: Taro 4.1.2 - 多端统一开发框架，支持微信小程序、H5 等
- **前端库**: React 18.0.0
- **开发语言**: TypeScript 5.1.0
- **状态管理**: MobX 4.8.0 + mobx-react 6.1.4
- **构建工具**: Vite 4.2.0
- **代码规范**: ESLint 8.12.0

## 目录结构

```
mini_platform/
├── src/
│   ├── app.config.ts         # 应用配置（页面路由、窗口配置等）
│   ├── app.css               # 全局样式
│   ├── app.tsx               # 应用入口组件
│   ├── index.html            # HTML 入口
│   │
│   ├── pages/                # 主包页面
│   │   ├── home/             # 首页
│   │   └── login/            # 登录页
│   │
│   ├── explore/              # 探索模块（分包）
│   │   └── mazeWord/         # 迷宫探索页面
│   │
│   ├── book/                 # 图鉴模块（分包）
│   │   ├── list/             # 图鉴列表
│   │   ├── animalAndPlantList/  # 动植物列表
│   │   └── PlantsAndFoodList/  # 工具与食物列表
│   │
│   ├── components/           # 通用组件
│   │   ├── ANButton/         # 按钮组件
│   │   ├── ANCard/           # 卡片组件
│   │   ├── ANIcon/           # 图标组件
│   │   ├── ANInput/          # 输入框组件
│   │   └── ANLoading/        # 加载组件
│   │
│   ├── services/             # API 服务层
│   │   ├── index.ts          # 服务入口
│   │   ├── auth/             # 认证相关服务
│   │   ├── animal.ts         # 动物相关 API
│   │   ├── plant.ts          # 植物相关 API
│   │   ├── tool.ts           # 工具相关 API
│   │   ├── food.ts           # 食物相关 API
│   │   ├── user.ts           # 用户相关 API
│   │   ├── world.ts          # 世界相关 API
│   │   ├── collection.ts     # 图鉴相关 API
│   │   └── wechat.ts         # 微信相关服务
│   │
│   ├── enum/                 # 枚举定义
│   ├── utils/                # 工具函数
│   └── assets/               # 静态资源
│
├── config/                   # Taro 配置
├── types/                    # TypeScript 类型定义
├── .swc/                     # SWC 编译缓存
├── dist/                     # 编译输出目录
├── node_modules/             # 依赖包
│
├── project.config.json       # 微信小程序项目配置
├── project.private.config.json
├── project.tt.json          # 抖音小程序配置
├── .editorconfig             # 编辑器配置
├── babel.config.js           # Babel 配置
├── tsconfig.json            # TypeScript 配置
├── eslintrc.ts              # ESLint 配置
├── package.json             # 项目依赖
├── pnpm-lock.yaml           # pnpm 锁文件
└── .gitignore               # Git 忽略配置
```

## 功能模块

### 1. 用户模块
- 用户登录/注册
- 用户信息管理
- 用户等级系统
- 收集进度展示

### 2. 探索模块 (explore)
- 世界地图浏览
- 迷宫探索游戏
- 不同世界的主题场景

### 3. 图鉴模块 (book)
- 收集图鉴总览
- 动物列表展示（按分类）
- 植物列表展示
- 工具和食物列表
- 收集进度统计

### 4. 核心数据类型
- **动物**: 哺乳动物、鸟类、爬行动物、海洋生物、野生动物
- **植物**: 各种珍稀植物
- **工具**: 捕捉和收集工具
- **食物**: 动植物喜欢的食物/饲料
- **宠物**: 用户的宠物伙伴
- **世界**: 六个主题世界

## 快速开始

### 环境要求

- Node.js >= 16
- pnpm 或 npm

### 安装依赖

```bash
# 使用 pnpm（推荐）
pnpm install

# 或使用 npm
npm install
```

### 开发模式

```bash
# 微信小程序开发
npm run dev:weapp

# H5 开发
npm run dev:h5

# 抖音小程序开发
npm run dev:tt

# 支付宝小程序开发
npm run dev:alipay

# 其他平台...
```

### 生产构建

```bash
# 微信小程序构建
npm run build:weapp

# H5 构建
npm run build:h5

# 其他平台...
```

## 项目特色

### 1. 跨平台支持

基于 Taro 框架，一套代码可以编译到多个平台：
- 微信小程序
- H5 网页
- 抖音小程序
- 支付宝小程序
- QQ 小程序
- 京东小程序
- 等...

### 2. TypeScript 类型安全

全项目使用 TypeScript 开发，提供完整的类型定义和代码提示。

### 3. MobX 状态管理

使用 MobX 进行全局状态管理，简洁高效。

### 4. 组件化开发

封装了通用业务组件（ANButton、ANCard、ANIcon、ANInput、ANLoading），提升开发效率。

### 5. 分包加载

采用小程序分包加载策略，优化首屏加载速度：
- 主包: 首页、登录页
- explore 分包: 探索相关页面
- book 分包: 图鉴相关页面

## 配合后端使用

本项目需要配合后端 API 服务使用：
- 后端项目: [mini_api](https://github.com/liuxiqin677/mini_api)
- 数据库: SQLite
- 后端框架: FastAPI

## 开发指南

### 新增页面

1. 在 `src/pages/` 或分包目录下创建页面文件夹
2. 在 `src/app.config.ts` 中注册页面路由
3. 实现页面组件

### 新增 API 服务

1. 在 `src/services/` 下创建或编辑对应服务文件
2. 在 `src/services/index.ts` 中导出

### 新增通用组件

在 `src/components/` 下创建组件文件夹和文件，遵循 AN 前缀命名规范。

## 项目相关文档

- 后端 API 文档: [API_DOCS.md](https://github.com/liuxiqin677/mini_api/blob/main/API_DOCS.md)
- 数据库设计: [DATA.md](https://github.com/liuxiqin677/mini_api/blob/main/DATA.md)
- 后端项目结构: [PROJECT_STRUCTURE.md](https://github.com/liuxiqin677/mini_api/blob/main/PROJECT_STRUCTURE.md)

## 许可证

MIT License
