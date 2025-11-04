interface Person {
  name: string
  photo: string
  research: string
  email?: string | null
}

export default function PersonCard({ person }: { person: Person }) {
  return (
    <div className="flex flex-col items-center text-center p-4" style={{ width: '370px' }}>
      {/* 圆形头像 */}
      <div className="rounded-full overflow-hidden mb-3 bg-gray-200" style={{ width: '210px', height: '210px' }}>
        <img
          src={person.photo}
          alt={person.name}
          className="w-full h-full object-cover"
        />
      </div>
    
      {/* 姓名 */}
      <h3 className="text-base font-semibold text-gray-800 mb-1">
        {person.name}
      </h3>
    
      {/* 研究方向 */}
      <p className="text-sm text-gray-600 mb-1">
        {person.research}
      </p>
    
      {/* 邮箱 */}
      {person.email && (
        <a 
          href={`mailto:${person.email}`}
          className="text-sm text-primary hover:underline"
        >
          {person.email}
        </a>
      )}
    </div>
  )
}
