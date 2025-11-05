import { getAssetPath } from '@/lib/utils'

interface Activity {
  id: number
  image: string
  description: string
}

export default function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* 图片区域 */}
      <div className="w-full h-48 bg-gray-200">
        <img
          src={getAssetPath(activity.image)}
          alt={activity.description}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    
      {/* 描述文字 */}
      <div className="p-4">
        <p className="text-center text-gray-700 text-sm">
          {activity.description}
        </p>
      </div>
    </div>
  )
}
