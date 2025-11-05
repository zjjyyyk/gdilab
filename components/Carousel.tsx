'use client'
import { useState, useEffect } from 'react'
import { siteConfig } from '@/config/site.config'
import { getAssetPath } from '@/lib/utils'

export default function Carousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [autoPlay, setAutoPlay] = useState(true)

  // 自动切换
  useEffect(() => {
    if (!autoPlay) return
    
    const timer = setInterval(() => {
      setDirection('right')
      setCurrent((prev) => (prev + 1) % images.length)
    }, siteConfig.carouselInterval)
    return () => clearInterval(timer)
  }, [images.length, autoPlay])

  const goToPrevious = () => {
    setAutoPlay(false)
    setDirection('left')
    setCurrent((current - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setAutoPlay(false)
    setDirection('right')
    setCurrent((current + 1) % images.length)
  }

  return (
    <div 
      className="relative w-full overflow-hidden bg-gray-100"
    >
      {/* 图片容器 - 响应式高度 */}
      <div className="relative w-full h-48 sm:h-64 md:h-96 lg:h-[600px] xl:h-[700px]">
        <div 
          className="flex h-full"
          style={{ 
            transform: `translateX(-${current * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0"
            >
              <img
                src={getAssetPath(image)}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    
      {/* 前一张按钮 - 移动端更小 */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 sm:p-3 transition-all duration-200 shadow-lg"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    
      {/* 下一张按钮 - 移动端更小 */}
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 sm:p-3 transition-all duration-200 shadow-lg"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    
      {/* 指示器 - 移动端更小 */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoPlay(false)
              setCurrent(index)
            }}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-200 ${
              index === current ? 'bg-white w-6 sm:w-8' : 'bg-white/50 w-1.5 sm:w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
