# 实验室静态网站

基于Next.js 14的实验室静态网站项目,可部署到GitHub Pages。

## 项目特点

- ✅ Next.js 14 (App Router)
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ 静态导出
- ✅ JSON数据存储
- ✅ 响应式设计
- ✅ GitHub Pages部署

## 项目结构

```
lab-website/
├── app/                        # 页面路由
│   ├── layout.tsx             # 全局布局
│   ├── page.tsx               # 首页
│   ├── people/page.tsx        # 人员页面
│   ├── topics/page.tsx        # 研究方向页面
│   ├── publications/page.tsx  # 论文页面
│   └── activities/page.tsx    # 活动页面
├── components/                 # 可复用组件
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Carousel.tsx
│   ├── PublicationItem.tsx
│   ├── PersonCard.tsx
│   ├── ActivityCard.tsx
│   └── TopicBlock.tsx
├── config/                     # 配置文件
│   └── site.config.ts         # 网站配置
├── public/                     # 静态资源
│   ├── data/                  # JSON数据
│   │   ├── publications.json
│   │   ├── people.json
│   │   ├── topics.json
│   │   └── activities.json
│   └── images/                # 图片资源
│       ├── logo.svg
│       ├── carousel/
│       ├── people/
│       └── activities/
├── scripts/                    # 工具脚本
│   └── create-placeholders.js # 生成占位图
└── .github/workflows/         # GitHub Actions
    └── deploy.yml             # 部署配置
```

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 生成占位图片

```bash
node scripts/create-placeholders.js
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看网站。

### 4. 构建静态网站

```bash
npm run build
```

构建后的静态文件在 `out/` 目录中。

## 自定义配置

### 网站配置

编辑 `config/site.config.ts` 修改网站基本信息:

```typescript
export const siteConfig = {
  labName: "智能计算实验室",        // 实验室名称
  carouselHeight: 650,              // 轮播图高度
  carouselInterval: 5000,           // 轮播间隔(ms)
  peopleGridCols: 3,                // 人员卡片列数
  activityGridCols: 4,              // 活动卡片列数
  colors: {
    primary: '#3B99E0',             // 主题色
  },
  social: {                         // 社交媒体链接
    xiaohongshu: 'https://...',
    zhihu: 'https://...',
    wechat: 'https://...'
  },
  icp: '京ICP备12345678号-1',      // 备案号
  copyright: '© 2024 实验室'        // 版权信息
}
```

### 数据管理

所有数据存储在 `public/data/` 目录的JSON文件中:

- **publications.json**: 论文数据
- **people.json**: 人员信息
- **topics.json**: 研究方向
- **activities.json**: 活动信息

编辑这些文件即可更新网站内容。

### 图片资源

替换 `public/images/` 目录中的占位图:

- `logo.svg`: 实验室Logo
- `carousel/*.jpg`: 首页轮播图(建议尺寸: 1920×650)
- `people/*.jpg`: 人员头像(建议尺寸: 300×300)
- `activities/*.jpg`: 活动照片(建议尺寸: 400×300)

## 部署到GitHub Pages

### 1. 创建GitHub仓库

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lab-website.git
git push -u origin main
```

### 2. 配置GitHub Pages

1. 进入仓库的 Settings → Pages
2. Source 选择 "GitHub Actions"
3. 推送代码后自动触发部署

### 3. 访问网站

部署成功后,访问:
```
https://YOUR_USERNAME.github.io/lab-website/
```

## 页面说明

### Home (首页)
- 轮播图展示
- 精选论文列表(显示前5篇selected=true的论文)

### People (人员)
- 按类别分组展示:教授、博士后、博士生、硕士生、本科生
- 显示头像、姓名、研究方向、邮箱

### Topics (研究方向)
- 展示实验室研究方向
- 每个方向包含标题和详细描述

### Publications (论文)
- 按年份分组展示所有论文
- 支持PDF和Code链接

### Activities (活动)
- 网格布局展示实验室活动
- 每个活动包含图片和描述

## 技术栈

- **Next.js 16**: React框架
- **TypeScript**: 类型安全
- **Tailwind CSS**: 样式框架
- **GitHub Pages**: 静态托管

## 注意事项

1. 图片建议使用WebP格式以提高加载速度
2. 轮播图建议不超过5张
3. 确保所有链接使用相对路径
4. 部署前检查所有图片资源是否存在

## 后续扩展

- 添加搜索功能
- 接入Headless CMS
- 添加多语言支持
- 添加暗色主题

## License

MIT

