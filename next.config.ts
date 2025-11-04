/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/demo_labsite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/demo_labsite' : '',
  trailingSlash: true,
}

module.exports = nextConfig
