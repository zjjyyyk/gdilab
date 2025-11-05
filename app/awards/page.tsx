import TitleDecorator from '@/components/TitleDecorator'

export default function Awards() {
  const awards = [
    "Young Yangtze River Scholar of the Ministry of Education (2018)",
    "2024 First Prize for Natural Science from the Chinese Institute of Electronics",
    "2023 Second Prize for Natural Science from the China Computer Federation",
    "2024 Gold Medal at the Geneva International Exhibition of Inventions",
    "2024 Gold Medal at the Nuremberg International Invention Fair",
    "2023 Second Prize for National Teaching Achievement Award",
    "2022 First Prize for Beijing Municipal Teaching Achievement Award",
    "One of the 8 Excellent Papers at ICDE 2019",
    "One of the 8 Excellent Papers at ICDE 2018",
    "Supervised doctoral student awarded the 2024 \"CCF Doctoral Dissertation Incentive Program\"",
    "Supervised postdoctoral researcher awarded the 2024 \"Postdoctoral Innovative Talent Support Program\"",
    "2024 OceanBase Database Competition Champion",
    "2025 SIGMOD Programming Contest Runner-up",
    "Supervised student achieved 1st place in the 2022 OGB Challenge for Graph Learning",
    "Supervised student achieved 1st place in the 2021 Galaxbase Graph Data Mining Competition"
  ]

  return (
    <div className="py-8 sm:py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <h1 className="text-center text-gray-800 text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Awards
        </h1>
        {/* 装饰块 */}
        <TitleDecorator />
      
        {/* 奖项列表 */}
        <div className="mt-6 sm:mt-8 bg-white rounded-lg shadow-sm p-4 sm:p-8">
          <ul className="space-y-2 sm:space-y-3">
            {awards.map((award, index) => (
              <li 
                key={index}
                className="text-gray-700 leading-relaxed text-sm sm:text-base ml-5 sm:ml-6"
                style={{ 
                  listStyleType: 'disc',
                }}
              >
                {award}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
