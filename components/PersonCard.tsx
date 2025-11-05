import { getAssetPath } from '@/lib/utils'

interface Person {
  name: string
  photo: string
  research: string
  email?: string | null
  destination?: string | null
}

export default function PersonCard({ person }: { person: Person }) {
  return (
    <div className="flex flex-col items-center text-center p-3 sm:p-4 w-full max-w-[370px]">
      {/* 圆形头像 - 响应式尺寸 */}
      <div className="rounded-full overflow-hidden mb-3 bg-gray-200 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52">
        <img
          src={getAssetPath(person.photo)}
          alt={person.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    
      {/* 姓名 */}
      <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
        {person.name}
      </h3>
    
      {/* 研究方向 */}
      <p className="text-xs sm:text-sm text-gray-600 mb-1">
        {person.research}
      </p>
    
      {/* 毕业去向 (仅 Alumni 显示) */}
      {person.destination && (
        <p className="text-xs sm:text-sm text-gray-600 mb-1">
          <span className="font-semibold">Now at: </span>
          {person.destination}
        </p>
      )}
    
      {/* 邮箱 */}
      {person.email && (
        <a 
          href={`mailto:${person.email}`}
          className="text-xs sm:text-sm text-blue-600 hover:underline break-all"
        >
          {person.email}
        </a>
      )}
    </div>
  )
}
