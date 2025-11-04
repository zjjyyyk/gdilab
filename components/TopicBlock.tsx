interface Topic {
  id: number
  name: string
  description: string
}

export default function TopicBlock({ topic }: { topic: Topic }) {
  return (
    <div className="py-8">
      {/* 主题标题 - 带双下划线装饰 */}
      <h2 className="text-2xl font-bold mb-6 relative inline-block">
        {topic.name}
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
