import ActivityCard from '@/components/ActivityCard'
import TitleDecorator from '@/components/TitleDecorator'
import activitiesData from '../../public/data/activities.json'

export default function Activities() {
  return (
    <div className="py-8 sm:py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <h1 className="text-center text-gray-800 text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Activities
        </h1>
        {/* 装饰块 */}
        <TitleDecorator />
      
        {/* 活动网格 - 响应式布局 */}
        <div 
          className="grid gap-4 sm:gap-6 mt-6 sm:mt-8 pt-4 sm:pt-8"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            maxWidth: '100%',
          }}
        >
          {activitiesData.map((activity: any, index: number) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  )
}
