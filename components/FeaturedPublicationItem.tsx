import { getAssetPath } from '@/lib/utils'

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
  // 根据 class 返回对应的颜色
  const getClassColor = (className: string) => {
    const colors: { [key: string]: string } = {
      'class1': '#10B981', // 绿色
      'class2': '#3B82F6', // 蓝色
      'class3': '#F59E0B', // 橙色
    }
    return colors[className] || '#6B7280' // 默认灰色
  }

  return (
    <div className="border border-gray-300 rounded-lg bg-white hover:shadow-md transition-shadow duration-200 overflow-hidden flex" style={{ width: '100%', maxWidth: '1100px' }}>
      {/* 左侧图片区域 */}
      <div className="flex-shrink-0" style={{ width: '270px' }}>
        <img
          src={getAssetPath(paper.image)}
          alt={paper.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* 右侧内容区域 */}
      <div className="flex-1" style={{ padding: '12px 12px 12px 32px' }}>
        <p style={{ margin: '2px 0' }}>
          <span className="font-semibold text-gray-700">Authors: </span>
          <span className="text-gray-600">{paper.authors}</span>
        </p>
        <p style={{ margin: '2px 0' }}>
          <span className="font-semibold text-gray-700">Title: </span>
          <span className="text-gray-800">{paper.title}</span>
        </p>
        <p style={{ margin: '2px 0' }}>
          <span className="font-semibold text-gray-700">Venue: </span>
          <span className="text-gray-600">{paper.venue}</span>
        </p>
        {paper.class && (
          <div style={{ margin: '6px 0' }}>
            <span 
              style={{ 
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '6px',
                backgroundColor: getClassColor(paper.class),
                color: 'white',
                fontSize: '13px',
                fontWeight: '500'
              }}
            >
              {paper.class}
            </span>
          </div>
        )}
      
        {(paper.pdf || paper.code) && (
          <div className="flex gap-4" style={{ marginTop: '4px' }}>
            {paper.pdf && (
              <a 
                href={paper.pdf} 
                className="text-blue-600 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                [PDF]
              </a>
            )}
            {paper.code && (
              <a 
                href={paper.code} 
                className="text-blue-600 hover:underline font-medium"
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
