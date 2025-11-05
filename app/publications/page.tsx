import { Suspense } from 'react'
import PublicationsContent from '@/components/PublicationsContent'

export default function Publications() {
  return (
    <div className="py-12 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* 标题 */}
        <h1 className="text-center text-gray-800" style={{ fontSize: '24px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>
          Publications
        </h1>
        {/* 装饰块 */}
        <div style={{ clear: 'both', display: 'block', height: '0.7rem', width: '80px', margin: '0px', marginLeft: 'auto', marginRight: 'auto', paddingBottom: '0.3rem', borderBottom: '3px double #3B99E0' }}></div>
      
        {/* 内容区域 - 包裹在 Suspense 中 */}
        <Suspense fallback={<div className="text-center mt-8">Loading...</div>}>
          <PublicationsContent />
        </Suspense>
      </div>
    </div>
  )
}
