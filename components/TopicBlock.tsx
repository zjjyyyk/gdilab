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
    <div className="py-8">
      {/* 主题标题 - 带双下划线装饰 */}
      <h2 className="text-2xl font-bold mb-6 relative inline-block">
        {topic.name}
        {topic.abbr && (
          <Link href={`/publications?class=${topic.abbr}`} className="ml-3 inline-block align-middle">
            <span 
              className="hover:opacity-80 transition-opacity"
              style={{ 
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '6px',
                backgroundColor: getClassColor(topic.abbr),
                color: 'white',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                verticalAlign: 'middle'
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
      <div className="max-w-[70%] mx-auto">
        <p className="text-gray-700 leading-relaxed text-justify">
          {topic.description}
        </p>
      </div>
    </div>
  )
}
