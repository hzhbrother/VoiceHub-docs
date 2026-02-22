# VoiceHub 文档

这是 [VoiceHub 智能点歌系统](https://github.com/laoshuikaixue/VoiceHub) 的官方文档仓库。

## 📖 关于 VoiceHub

VoiceHub 是一个现代化的智能点歌系统，支持多平台音乐搜索、智能排期管理，提供用户友好的界面设计。基于现代化技术栈构建，是一个稳定可靠的 Web 应用。

### 主要特性

- 🎵 **智能点歌**: 支持多平台音乐搜索和点歌
- 👥 **用户友好**: 直观的界面设计，简单易用
- 🏗️ **现代化架构**: 基于 Nuxt.js + Prisma + PostgreSQL

### 最新功能更新

VoiceHub 持续迭代优化，为用户提供更丰富的功能和更优质的体验。以下是近期更新的主要功能：

- 🎤 **对唱模式**: 歌词页面新增「对唱模式」样式，提升K歌体验
- 🔐 **第三方登录**: 支持「GitHub/Google」登录方式（需绑定站内账号）
- 📺 **B站视频剧集选择**: 新增B站视频剧集选择功能，观看更便捷
- ☁️ **网易云音乐云盘上传**: 新增网易云音乐云盘上传功能，音乐管理更灵活
- 🎶 **网易云音乐上传功能更新**: 优化网易云音乐上传体验
- 🔗 **B站投稿视频跳转**: B站投稿添加视频跳转功能，内容互动更流畅
- 📱 **无密码登录**: 新增无密码登录支持，支持指纹/面容快捷登录（目前仅支持Windows hello/Passkey），更安全更方便

## 🚀 本地开发

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

访问 [http://localhost:3000](http://localhost:3000) 查看文档站点。

### 构建生产版本

```bash
npm run build
```

## 📝 贡献指南

我们欢迎任何形式的贡献！

### 文档结构

```
docs/
├── getting-started/     # 快速开始
├── user-guide/         # 用户指南
├── admin-guide/        # 管理员指南
├── development/        # 开发指南
└── troubleshooting/    # 故障排除
```

### 编写规范

- 使用中文编写文档
- 遵循 Markdown 语法规范
- 添加适当的代码示例
- 保持文档结构清晰

## 🛠️ 技术栈

- [Docusaurus](https://docusaurus.io/) - 文档站点生成器
- [React](https://reactjs.org/) - 前端框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [MDX](https://mdxjs.com/) - Markdown + JSX

## 📄 许可证

本项目基于 [GPL-3.0 许可证](../LICENSE) 开源。

## 🔗 相关链接

- [VoiceHub 主项目](https://github.com/laoshuikaixue/VoiceHub)
- [演示站点](https://voicehub.lao-shui.top)
- [问题反馈](https://github.com/laoshuikaixue/VoiceHub/issues)