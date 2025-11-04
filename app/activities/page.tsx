import ActivityCard from '@/components/ActivityCard'
import activitiesData from '../../public/data/activities.json'
import { siteConfig } from '@/config/site.config'

export default function Activities() {
  return (
    <div className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <h1 className="text-center text-gray-800" style={{ fontSize: '24px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>
          Activities
        </h1>
        {/* 装饰块 */}
        <div style={{ clear: 'both', display: 'block', height: '0.7rem', width: '80px', margin: '0px', marginLeft: 'auto', marginRight: 'auto', paddingBottom: '0.3rem', borderBottom: '3px double #3B99E0' }}></div>
      
        {/* 活动网格 */}
        <div 
          className="grid gap-6"
          style={{
            gridTemplateColumns: `repeat(auto-fill, minmax(280px, 1fr))`,
            maxWidth: `${siteConfig.activityGridCols * 300}px`,
            margin: '0 auto',
            marginTop: '30px',
            paddingTop: '30px'
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
