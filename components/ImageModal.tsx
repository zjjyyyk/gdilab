'use client'

import { useEffect } from 'react'
import { getAssetPath } from '@/lib/utils'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imagePath: string
  alt?: string
}

export default function ImageModal({ isOpen, onClose, imagePath, alt = '' }: ImageModalProps) {
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
