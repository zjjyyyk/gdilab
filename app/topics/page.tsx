import TopicBlock from '@/components/TopicBlock'
import TitleDecorator from '@/components/TitleDecorator'
import topicsData from '../../public/data/topics.json'

export default function Topics() {
  return (
    <div className="py-10 sm:py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* 标题 */}
        <h1 className="text-center text-gray-800 text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Research Topics
        </h1>
        {/* 装饰块 */}
        <TitleDecorator />
      
        {/* 研究主题列表 */}
        <div className="mt-6 sm:mt-8">
          {topicsData.map((topic: any, index: number) => (
            <div key={index}>
              <TopicBlock topic={topic} />
          
              {/* 分割线（最后一个不显示） */}
              {index < topicsData.length - 1 && (
                <hr className="my-8 sm:my-12 border-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
