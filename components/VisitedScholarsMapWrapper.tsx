'use client'

import dynamic from 'next/dynamic'

// 动态导入地图组件,只在需要时加载
const VisitedScholarsMap = dynamic(
  () => import('@/components/VisitedScholarsMap'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
          <p className="text-gray-500">Loading interactive map...</p>
        </div>
      </div>
    )
  }
)

export default function VisitedScholarsMapWrapper() {
  return <VisitedScholarsMap />
}
