'use client'

import { getAssetPath } from '@/lib/utils'
import Link from 'next/link'

interface FeaturedPublication {
  id: number
  authors: string
  title: string
  venue: string
  year: number
  image: string
  class?: string | null
  pdf?: string | null
  code?: string | null
}

export default function FeaturedPublicationItem({ paper }: { paper: FeaturedPublication }) {
  // 根据 class 返回对应的颜色和全称
  const getClassInfo = (className: string) => {
    const classMap: { [key: string]: { color: string; fullName: string } } = {
      'GLLLM': { 
        color: '#10B981', 
        fullName: 'Graph Learning and Large Language Models' 
      },
      'CGA': { 
        color: '#3B82F6', 
        fullName: 'Combinatorial Graph Mining Algorithms' 
      },
      'AGA': { 
        color: '#F59E0B', 
        fullName: 'Algebraic Graph Mining Algorithms' 
      },
      'TGA': { 
        color: '#8B5CF6', 
        fullName: 'Topological Graph Mining Algorithms' 
      },
    }
    return classMap[className] || { color: '#6B7280', fullName: className }
  }

  return (
    <div className="border border-gray-300 rounded-lg bg-white hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col sm:flex-row w-full max-w-full sm:max-w-[1100px]">
      {/* 左侧图片区域 - 移动端全宽，桌面端固定宽度 */}
      <div className="flex-shrink-0 w-full sm:w-64 md:w-72 h-48 sm:h-auto">
        <img
          src={getAssetPath(paper.image)}
          alt={paper.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      {/* 右侧内容区域 */}
      <div className="flex-1 p-3 sm:p-4 md:pl-8">
        <p className="my-1 text-sm sm:text-base">
          <span className="font-semibold text-gray-700">Authors: </span>
          <span className="text-gray-600 break-words">{paper.authors}</span>
        </p>
        <p className="my-1 text-sm sm:text-base">
          <span className="font-semibold text-gray-700">Title: </span>
          <span className="text-gray-800 break-words font-bold">{paper.title}</span>
        </p>
        <p className="my-1 text-sm sm:text-base">
          <span className="font-semibold text-gray-700">Venue: </span>
          <span className="text-gray-600">{paper.venue}</span>
        </p>
        {paper.class && (
          <div className="my-2">
            <Link href={`/publications?class=${paper.class}`}>
              <span 
                title={getClassInfo(paper.class).fullName}
                className="hover:opacity-80 transition-opacity inline-block px-3 py-1 rounded-md text-white text-xs sm:text-sm font-medium cursor-pointer"
                style={{ 
                  backgroundColor: getClassInfo(paper.class).color,
                }}
              >
                {paper.class}
              </span>
            </Link>
          </div>
        )}
      
        {(paper.pdf || paper.code) && (
          <div className="flex gap-3 sm:gap-4 mt-2">
            {paper.pdf && (
              <a 
                href={paper.pdf} 
                className="text-blue-600 hover:underline font-medium text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                [PDF]
              </a>
            )}
            {paper.code && (
              <a 
                href={paper.code} 
                className="text-blue-600 hover:underline font-medium text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                [Code]
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
