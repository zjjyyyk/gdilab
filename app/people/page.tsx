import PersonCard from '@/components/PersonCard'
import peopleData from '../../public/data/people.json'
import { siteConfig } from '@/config/site.config'

export default function People() {
  const sections = [
    { key: 'professors', title: 'Professors', data: peopleData.professors },
    { key: 'postdocs', title: 'Post-Doctors', data: peopleData.postdocs },
    { key: 'phds', title: 'Ph.D. Students', data: peopleData.phds },
    { key: 'masters', title: 'Master Students', data: peopleData.masters },
    { key: 'undergrads', title: 'Undergraduate Students', data: peopleData.undergrads },
  ]

  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {sections.map((section) => (
          section.data && section.data.length > 0 && (
            <div key={section.key} className="mb-12">
              {/* 标题 */}
              <h2 className="text-center text-gray-800" style={{ fontSize: '24px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>
                {section.title}
              </h2>
              {/* 装饰块 */}
              <div style={{ clear: 'both', display: 'block', height: '0.7rem', width: '80px', margin: '0px', marginLeft: 'auto', marginRight: 'auto', paddingBottom: '0.3rem', borderBottom: '3px double #3B99E0' }}></div>
            
              {/* 人员网格 */}
              <div 
                className="grid gap-6"
                style={{
                  gridTemplateColumns: `repeat(3, 370px)`,
                  maxWidth: `${siteConfig.peopleGridCols * 400}px`,
                  margin: '0 auto',
                  justifyContent: 'start',
                  marginTop: '10px',
                  paddingTop: '10px'
                }}
              >
                {section.data.map((person: any, index: number) => (
                  <PersonCard key={index} person={person} />
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  )
}
