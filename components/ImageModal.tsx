'use client'

import { useEffect, useState } from 'react'
import { getAssetPath } from '@/lib/utils'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imagePath: string
  alt?: string
}

export default function ImageModal({ isOpen, onClose, imagePath, alt = '' }: ImageModalProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // 检测是否为移动端
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    // 阻止背景滚动
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
    
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  // 移动端：使用可缩放的图片查看器
  if (isMobile) {
    return (
      <div 
        className="fixed inset-0 z-50 overflow-hidden bg-black"
        onClick={onClose}
      >
        <div className="absolute top-4 right-4 z-10 text-white text-sm bg-black bg-opacity-50 px-3 py-2 rounded">
          点击关闭
        </div>
        <div 
          className="w-full h-full overflow-auto"
          style={{ 
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x pan-y pinch-zoom'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <img 
            src={getAssetPath(imagePath)} 
            alt={alt}
            className="min-w-full min-h-full object-contain"
            style={{ 
              touchAction: 'pan-x pan-y pinch-zoom',
              maxWidth: 'none'
            }}
          />
        </div>
      </div>
    )
  }

  // 桌面端：固定65%宽度
  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto"
      onClick={onClose}
      style={{ 
        cursor: 'pointer',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
      }}
      onWheel={(e) => {
        // 阻止滚动事件冒泡到背景
        e.stopPropagation()
      }}
    >
      {/* 内部滚动容器 */}
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="my-auto">
          <img 
            src={getAssetPath(imagePath)} 
            alt={alt}
            className="rounded-lg shadow-2xl"
            style={{ width: '65vw' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    </div>
  )
}
