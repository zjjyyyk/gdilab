/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // 使用自定义域名 gdilab.cn 时不需要 basePath
  // 如果改回 GitHub Pages 子路径，取消注释下面两行
  // basePath: process.env.NODE_ENV === 'production' ? '/demo_labsite' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/demo_labsite' : '',
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
}

module.exports = nextConfig
