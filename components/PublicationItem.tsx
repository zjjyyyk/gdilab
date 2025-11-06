interface Publication {
  id: number
  year: number
  authors: string
  title: string
  venue: string
  pdf?: string | null
  code?: string | null
  class?: string
}

// 分类标签颜色配置
const classColors: Record<string, { bg: string; text: string; border: string }> = {
  'GLLLM': { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300' },
  'CGA': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
  'TGA': { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300' },
  'AGA': { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300' },
}

export default function PublicationItem({ paper }: { paper: Publication }) {
  const classStyle = paper.class ? classColors[paper.class] : null

  return (
    <div className="border border-gray-300 rounded-lg p-2.5 bg-white hover:shadow-md transition-shadow duration-200 relative">
      {/* 右上角分类标签 */}
      {paper.class && classStyle && (
        <div className={`absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded border ${classStyle.bg} ${classStyle.text} ${classStyle.border} text-[10px] font-semibold`}>
          {paper.class}
        </div>
      )}
      
      {/* 内容区域 - 右侧留出标签空间 */}
      <div className="pr-16">
        <p className="my-0.5 text-xs sm:text-sm leading-relaxed">
          <span className="font-semibold text-gray-700">Authors: </span>
          <span className="text-gray-600 break-words">{paper.authors}</span>
        </p>
        <p className="my-0.5 text-xs sm:text-sm leading-relaxed">
          <span className="font-semibold text-gray-700">Title: </span>
          <span className="text-gray-800 break-words font-bold">{paper.title}</span>
        </p>
        <p className="my-0.5 text-xs sm:text-sm leading-relaxed">
          <span className="font-semibold text-gray-700">Venue: </span>
          <span className="text-gray-600">{paper.venue}</span>
        </p>
      
        {(paper.pdf || paper.code) && (
          <div className="flex gap-2.5 sm:gap-3 mt-1.5">
            {paper.pdf && (
              <a 
                href={paper.pdf} 
                className="text-blue-600 hover:underline font-medium text-xs sm:text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                [PDF]
              </a>
            )}
            {paper.code && (
              <a 
                href={paper.code} 
                className="text-blue-600 hover:underline font-medium text-xs sm:text-sm"
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
