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
    <div className="py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <h1 className="text-center text-gray-800" style={{ fontSize: '24px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>
          Awards
        </h1>
        {/* 装饰块 */}
        <div style={{ clear: 'both', display: 'block', height: '0.7rem', width: '80px', margin: '0px', marginLeft: 'auto', marginRight: 'auto', paddingBottom: '0.3rem', borderBottom: '3px double #3B99E0' }}></div>
      
        {/* 奖项列表 */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
          <ul className="space-y-3">
            {awards.map((award, index) => (
              <li 
                key={index}
                className="text-gray-700 leading-relaxed"
                style={{ 
                  listStyleType: 'disc',
                  marginLeft: '1.5rem',
                  fontSize: '15px'
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
