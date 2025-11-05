// 获取资源路径
// 使用自定义域名 gdilab.cn 时，直接返回路径
// 如果改回 GitHub Pages 子路径，需要添加 basePath
export function getAssetPath(path: string): string {
  const basePath = '' // 自定义域名不需要 basePath，如改回子路径则设为 '/demo_labsite'
  return `${basePath}${path}`
}
