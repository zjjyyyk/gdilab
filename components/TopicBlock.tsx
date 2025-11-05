'use client'

import Link from 'next/link'

interface Topic {
  id: number
  name: string
  abbr?: string
  description: string
}

export default function TopicBlock({ topic }: { topic: Topic }) {
  // 根据简写返回对应的颜色
  const getClassColor = (abbr: string) => {
    const colors: { [key: string]: string } = {
      'GLLLM': '#10B981', // 绿色
      'CGA': '#3B82F6',   // 蓝色
      'AGA': '#F59E0B',   // 橙色
      'TGA': '#8B5CF6',   // 紫色
    }
    return colors[abbr] || '#6B7280'
  }

  return (
    <div className="py-6 sm:py-8">
      {/* 主题标题 - 带双下划线装饰 */}
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 relative inline-block">
        <span className="break-words">{topic.name}</span>
        {topic.abbr && (
          <Link href={`/publications?class=${topic.abbr}`} className="ml-2 sm:ml-3 inline-block align-middle">
            <span 
              className="hover:opacity-80 transition-opacity inline-block px-2 sm:px-3 py-1 rounded-md text-white text-xs sm:text-sm font-medium cursor-pointer"
              style={{ 
                backgroundColor: getClassColor(topic.abbr),
              }}
            >
              {topic.abbr}
            </span>
          </Link>
        )}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
        <span className="absolute bottom-[-4px] left-0 w-full h-1 bg-primary/50"></span>
      </h2>
    
      {/* 描述文本 */}
      <div className="max-w-full sm:max-w-[85%] md:max-w-[70%] mx-auto px-2 sm:px-0">
        <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
          {topic.description}
        </p>
      </div>
    </div>
  )
}
