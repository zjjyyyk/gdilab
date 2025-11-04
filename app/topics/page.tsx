import TopicBlock from '@/components/TopicBlock'
import topicsData from '../../public/data/topics.json'

export default function Topics() {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* 标题 */}
        <h1 className="text-center text-gray-800" style={{ fontSize: '24px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>
          Research Topics
        </h1>
        {/* 装饰块 */}
        <div style={{ clear: 'both', display: 'block', height: '0.7rem', width: '80px', margin: '0px', marginLeft: 'auto', marginRight: 'auto', paddingBottom: '0.3rem', borderBottom: '3px double #3B99E0' }}></div>
      
        {/* 研究主题列表 */}
        <div className="mt-8">
          {topicsData.map((topic: any, index: number) => (
            <div key={index}>
              <TopicBlock topic={topic} />
          
              {/* 分割线（最后一个不显示） */}
              {index < topicsData.length - 1 && (
                <hr className="my-12 border-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
