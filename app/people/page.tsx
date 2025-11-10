import PersonCard from '@/components/PersonCard'
import TitleDecorator from '@/components/TitleDecorator'
import peopleData from '../../public/data/people.json'

export default function People() {
  const sections = [
    { key: 'professors', title: 'Professors', data: peopleData.professors },
    // { key: 'postdocs', title: 'Post-Doctors', data: peopleData.postdocs },
    { key: 'phds', title: 'Ph.D. Students', data: peopleData.phds },
    { key: 'masters', title: 'Master Students', data: peopleData.masters },
    { key: 'undergrads', title: 'Undergraduate Students', data: peopleData.undergrads },
    { key: 'alumni', title: 'Alumni', data: peopleData.alumni },
  ]

  return (
    <div className="py-8 sm:py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {sections.map((section) => (
          section.data && section.data.length > 0 && (
            <div key={section.key} className="mb-10 sm:mb-12">
              {/* 标题 */}
              <h2 className="text-center text-gray-800 text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {section.title}
              </h2>
              {/* 装饰块 */}
              <TitleDecorator />
            
              {/* 人员网格 - 响应式布局 */}
              {section.key === 'professors' ? (
                <>
                  {/* 第一位教授单独一行并居中 */}
                  {section.data[0] && (
                    <div className="w-full flex justify-center mt-6 sm:mt-10 pt-2 sm:pt-4">
                      <PersonCard person={section.data[0] as any} />
                    </div>
                  )}

                  {/* 其余教授使用居中的网格 */}
                  {section.data.length > 1 && (
                    <div
                      className="grid gap-4 sm:gap-6 justify-items-center mt-6 sm:mt-10 pt-2 sm:pt-4"
                      style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 370px))',
                        justifyContent: 'center',
                      }}
                    >
                      {section.data.slice(1).map((person: any, idx: number) => (
                        <PersonCard key={idx} person={person as any} />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div
                  className="grid gap-4 sm:gap-6 justify-items-center mt-6 sm:mt-10 pt-2 sm:pt-4"
                  style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 370px))',
                    justifyContent: 'center',
                  }}
                >
                  {section.data.map((person: any, index: number) => (
                    <PersonCard key={index} person={person as any} />
                  ))}
                </div>
              )}
            </div>
          )
        ))}
      </div>
    </div>
  )
}
