import { Suspense } from 'react'
import PublicationsContent from '@/components/PublicationsContent'
import TitleDecorator from '@/components/TitleDecorator'

export default function Publications() {
  return (
    <div className="py-8 sm:py-12 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* 标题 */}
        <h1 className="text-center text-gray-800 text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Publications
        </h1>
        {/* 装饰块 */}
        <TitleDecorator />
      
        {/* 内容区域 - 包裹在 Suspense 中 */}
        <Suspense fallback={<div className="text-center mt-6 sm:mt-8 text-sm sm:text-base">Loading...</div>}>
          <PublicationsContent />
        </Suspense>
      </div>
    </div>
  )
}
