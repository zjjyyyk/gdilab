# 网站性能优化方案

## 已实现的优化
✅ 静态站点生成（Static Export）
✅ 字体优化（next/font/local）
✅ 未优化图片（适合静态部署）

## 推荐的优化措施

### 1. 图片优化 ⭐⭐⭐ （影响最大）
**当前问题：**
- 图片可能过大，未压缩
- 未使用现代格式（WebP）

**解决方案：**
```bash
# 安装图片优化工具
npm install --save-dev sharp

# 批量压缩图片（可选）
npm install --save-dev imagemin imagemin-webp
```

**手动压缩：**
- 使用 TinyPNG.com 或 Squoosh.app
- 轮播图：1920x600px, 100-200KB
- 人物照片：400x400px, 20-50KB
- 论文图：400x300px, 30-60KB

### 2. 组件懒加载 ⭐⭐
**实施位置：**
- Carousel 组件（首屏可见，保持即时加载）
- Selected Publications（可懒加载）
- Footer（可懒加载）

### 3. 数据优化 ⭐
**当前：**
- 所有 publications 一次性加载
- 所有 people 一次性加载

**优化：**
- Publications 页面可以分页
- 图片使用 loading="lazy" 属性

### 4. CSS 优化 ⭐
- 移除未使用的 Tailwind 类（已自动）
- 考虑内联关键 CSS

### 5. 缓存策略 ⭐⭐
在 GitHub Pages 上自动处理，但可以：
- 为静态资源添加版本号
- 使用 service worker（PWA）

### 6. 字体优化 ✅
- 已使用 next/font/local
- 使用 font-display: swap

## 立即可做的优化

### A. 图片懒加载
所有非首屏图片添加 loading="lazy"

### B. 减少 Carousel 图片
只保留 3 张高质量压缩的轮播图

### C. 预连接外部资源
如果使用外部链接（GitHub 等）

### D. 启用 Gzip/Brotli
GitHub Pages 已自动启用

## 性能目标
- 首屏加载时间：< 3 秒
- 完全加载时间：< 5 秒
- Lighthouse 分数：> 90

## 测试工具
1. Chrome DevTools > Network
2. PageSpeed Insights
3. WebPageTest.org
4. GTmetrix

## 优先级排序
1. ⭐⭐⭐ 压缩和优化所有图片
2. ⭐⭐ 添加图片懒加载
3. ⭐⭐ 组件代码分割
4. ⭐ 数据分页（如需要）
