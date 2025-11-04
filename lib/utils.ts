// 获取带 basePath 的完整路径
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/demo_labsite' : ''
  return `${basePath}${path}`
}
