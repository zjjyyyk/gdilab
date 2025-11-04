'use client'
import { useState, useEffect } from 'react'
import { siteConfig } from '@/config/site.config'

export default function Carousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0)

  // 自动切换
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, siteConfig.carouselInterval)
    return () => clearInterval(timer)
  }, [images.length])

  const goToPrevious = () => {
    setCurrent((current - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrent((current + 1) % images.length)
  }

  return (
    <div 
      className="relative w-full overflow-hidden bg-gray-100"
      style={{ maxHeight: `${siteConfig.carouselHeight}px` }}
    >
      {/* 图片 */}
      <div className="relative w-full" style={{ height: `${siteConfig.carouselHeight}px` }}>
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-cover object-center"
        />
      </div>
    
      {/* 前一张按钮 */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-3 transition-all duration-200 shadow-lg"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    
      {/* 下一张按钮 */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-3 transition-all duration-200 shadow-lg"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    
      {/* 指示器 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === current ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
