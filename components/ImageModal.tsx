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
  const [scale, setScale] = useState(1)

  useEffect(() => {
    // 阻止背景滚动
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
      // 重置缩放
      setScale(1)
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

  // 鼠标滚轮缩放
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    const delta = e.deltaY * -0.01
    const newScale = Math.min(Math.max(0.5, scale + delta), 5)
    setScale(newScale)
  }

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center"
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
      }}
      onClick={onClose}
      onWheel={handleWheel}
    >
      {/* 提示文字 */}
      <div className="absolute top-4 right-4 z-10 text-white text-xs sm:text-sm bg-black bg-opacity-50 px-3 py-2 rounded pointer-events-none">
        <span className="hidden sm:inline">滚轮缩放 · </span>点击关闭
      </div>

      {/* 图片容器 */}
      <div 
        className="relative select-none my-auto"
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.1s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={getAssetPath(imagePath)} 
          alt={alt}
          className="rounded-lg shadow-2xl"
          style={{ 
            width: '65vw',
            maxWidth: '1200px',
            height: 'auto'
          }}
          draggable={false}
        />
      </div>

      {/* 缩放控制条 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-full flex items-center gap-3">
        <button
          onClick={(e) => {
            e.stopPropagation()
            setScale(Math.max(0.5, scale - 0.2))
          }}
          className="text-white text-xl w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-20 rounded"
        >
          −
        </button>
        <span className="text-white text-sm min-w-[3rem] text-center">
          {Math.round(scale * 100)}%
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation()
            setScale(Math.min(5, scale + 0.2))
          }}
          className="text-white text-xl w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-20 rounded"
        >
          +
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            setScale(1)
          }}
          className="text-white text-xs ml-2 px-3 py-1 hover:bg-white hover:bg-opacity-20 rounded"
        >
          重置
        </button>
      </div>
    </div>
  )
}
