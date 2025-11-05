'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import PublicationItem from '@/components/PublicationItem'
import publications from '@/public/data/publications.json'

export default function PublicationsContent() {
  const searchParams = useSearchParams()
  const classParam = searchParams.get('class')
  const [selectedClass, setSelectedClass] = useState<string>('all')
  
  // 从 URL 参数初始化选中的分类
  useEffect(() => {
    if (classParam && ['GLLLM', 'CGA', 'AGA', 'TGA'].includes(classParam)) {
      setSelectedClass(classParam)
    }
  }, [classParam])
  
  // 分类映射
  const classInfo: { [key: string]: { label: string; fullName: string } } = {
    'GLLLM': { 
      label: 'GLLLM', 
      fullName: 'Graph Learning and Large Language Models' 
    },
    'CGA': { 
      label: 'CGA', 
      fullName: 'Combinatorial Graph Mining Algorithms' 
    },
    'AGA': { 
      label: 'AGA', 
      fullName: 'Algebraic Graph Mining Algorithms' 
    },
    'TGA': { 
      label: 'TGA', 
      fullName: 'Topological Graph Mining Algorithms' 
    },
  }
  
  // 根据选中的分类过滤论文
  const filteredPublications = selectedClass === 'all' 
    ? publications 
    : publications.filter((paper: any) => paper.class === selectedClass)
  
  // 按年份分组
  const groupedByYear = filteredPublications.reduce((acc: any, paper: any) => {
    if (!acc[paper.year]) {
      acc[paper.year] = []
    }
    acc[paper.year].push(paper)
    return acc
  }, {} as Record<number, typeof publications>)

  // 年份倒序
  const years = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a))

  return (
    <>
      {/* 分类按钮 - 响应式布局 */}
      <div className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-2 sm:gap-4 px-4">
        <span className="text-gray-600 font-medium text-sm sm:text-base w-full sm:w-auto text-center sm:text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Class Filter:
        </span>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedClass('all')}
            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
              selectedClass === 'all'
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-blue-100'
            }`}
          >
            All
          </button>
          {Object.keys(classInfo).map((classKey) => (
            <button
              key={classKey}
              onClick={() => setSelectedClass(classKey)}
              title={classInfo[classKey].fullName}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
                selectedClass === classKey
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-blue-100'
              }`}
              style={{ cursor: 'pointer' }}
            >
              {classInfo[classKey].label}
            </button>
          ))}
        </div>
      </div>
    
      {/* 按年份展示 */}
      <div className="mt-6 sm:mt-8">
        {years.map((year) => (
          <div key={year} className="mb-6">
            {/* 年份标题 */}
            <h2 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
              {year}
            </h2>
          
            {/* 该年份的所有论文 */}
            <div className="space-y-2">
              {groupedByYear[Number(year)].map((paper: any, index: number) => (
                <PublicationItem key={index} paper={paper} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
