'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import PublicationItem from '@/components/PublicationItem'
import publications from '../../public/data/publications.json'

export default function Publications() {
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
    <div className="py-12 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* 标题 */}
        <h1 className="text-center text-gray-800" style={{ fontSize: '24px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>
          Publications
        </h1>
        {/* 装饰块 */}
        <div style={{ clear: 'both', display: 'block', height: '0.7rem', width: '80px', margin: '0px', marginLeft: 'auto', marginRight: 'auto', paddingBottom: '0.3rem', borderBottom: '3px double #3B99E0' }}></div>
      
        {/* 分类按钮 */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <span className="text-gray-600 font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>Class Filter: &nbsp;</span>
          <button
            onClick={() => setSelectedClass('all')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
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
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
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
      
        {/* 按年份展示 */}
        <div className="mt-8">
          {years.map((year) => (
            <div key={year} className="mb-6">
              {/* 年份标题 */}
              <h2 className="text-xl font-bold mb-3 text-gray-800">
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
      </div>
    </div>
  )
}
