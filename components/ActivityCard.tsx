'use client'

import { useState } from 'react'
import { getAssetPath } from '@/lib/utils'
import ImageModal from './ImageModal'

interface Activity {
  id: number
  image: string
  description: string
}

export default function ActivityCard({ activity }: { activity: Activity }) {
  const [showImage, setShowImage] = useState(false)

  return (
    <>
      <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
        {/* 图片区域 */}
        <div 
          className="w-full h-40 sm:h-48 bg-gray-200 cursor-pointer group"
          onClick={() => setShowImage(true)}
        >
          <img
            src={getAssetPath(activity.image)}
            alt={activity.description}
            className="w-full h-full object-cover transition-all duration-300 ease-out
                     group-hover:scale-105 group-hover:shadow-xl"
            loading="lazy"
          />
        </div>
      
        {/* 描述文字 */}
        <div className="p-3 sm:p-4">
          <p className="text-center text-gray-700 text-xs sm:text-sm leading-relaxed">
            {activity.description}
          </p>
        </div>
      </div>

      {/* 图片放大模态框 */}
      <ImageModal
        isOpen={showImage}
        onClose={() => setShowImage(false)}
        imagePath={activity.image}
        alt={activity.description}
      />
    </>
  )
}
