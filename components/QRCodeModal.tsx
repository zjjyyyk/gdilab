'use client'

import { useState, useEffect } from 'react'
import { getAssetPath } from '@/lib/utils'

interface QRCodeModalProps {
  isOpen: boolean
  onClose: () => void
  qrCodePath: string
  title?: string
}

export default function QRCodeModal({ isOpen, onClose, qrCodePath, title = '微信公众号' }: QRCodeModalProps) {
  useEffect(() => {
    // 阻止背景滚动
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      style={{ 
        cursor: 'pointer',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}
    >
      {/* 二维码容器 */}
      <div 
        className="relative z-10 bg-white rounded-lg shadow-2xl p-6 max-w-sm w-full"
        style={{ width: '30vw', minWidth: '280px', maxWidth: '400px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-center text-lg font-bold text-gray-800 mb-4">{title}</h3>
        <img 
          src={getAssetPath(qrCodePath)} 
          alt={title}
          className="w-full h-auto rounded-lg"
        />
        <p className="text-center text-sm text-gray-500 mt-4">点击屏幕任意位置关闭</p>
      </div>
    </div>
  )
}
