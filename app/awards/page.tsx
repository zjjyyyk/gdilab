export default function Awards() {
  const awards = [
    "Best Paper Award at IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2024",
    "Outstanding Research Award from National Science Foundation 2024",
    "Excellence in Innovation Award at International Conference on Machine Learning (ICML) 2023",
    "Young Researcher Award from ACM SIGKDD 2023",
    "Best Student Paper Award at NeurIPS 2023",
    "Distinguished Paper Award at AAAI Conference on Artificial Intelligence 2023",
    "IEEE Outstanding Technical Achievement Award 2022",
    "National Technology Innovation Award (Second Prize) 2022",
    "Best Application Paper Award at ICCV 2022",
    "Outstanding Doctoral Dissertation Award from Computer Science Department 2022",
    "Rising Star Award in Artificial Intelligence 2021",
    "Best Demo Award at SIGGRAPH 2021",
    "Excellence in Research Award from University 2021",
    "Top Cited Paper Award from Journal of Machine Learning Research 2021",
    "Best Paper Honorable Mention at CHI 2020",
    "Innovation Excellence Award from Ministry of Science and Technology 2020",
    "Outstanding Graduate Student Research Award 2020",
    "Best Poster Award at ECCV 2019",
    "Distinguished Achievement Award in Data Science 2019",
    "Young Faculty Award from International Neural Network Society 2019"
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
