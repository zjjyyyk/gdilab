import dynamic from 'next/dynamic'
import Carousel from '@/components/Carousel'
import FeaturedPublicationItem from '@/components/FeaturedPublicationItem'
import TitleDecorator from '@/components/TitleDecorator'
import featuredPublications from '../public/data/featured-publications.json'

// 动态导入地图组件,只在需要时加载
const VisitedScholarsMap = dynamic(
  () => import('@/components/VisitedScholarsMap'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
          <p className="text-gray-500">Loading interactive map...</p>
        </div>
      </div>
    )
  }
)

// 控制学者访问地图模块的显示
const ENABLE_VISITED_SCHOLARS_MAP = true

export default function Home() {
  // 轮播图片
  const carouselImages = [
    '/images/carousel/slide1.jpg',
    '/images/carousel/slide2.jpg',
    '/images/carousel/slide3.jpg',
  ]

  return (
    <div>
      {/* 轮播图 */}
      <Carousel images={carouselImages} />
    
      {/* Selected Publications */}
      <section className="py-8 sm:py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-gray-800 text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Selected Publications
          </h2>
          {/* 装饰块 */}
          <TitleDecorator />
        
          <div className="space-y-3 sm:space-y-2 mt-6 sm:mt-8 flex flex-col items-center">
            {featuredPublications.map((paper: any, index: number) => (
              <FeaturedPublicationItem key={index} paper={paper} />
            ))}
          </div>
        </div>
      </section>

      {/* Visited Scholars Map Section */}
      {ENABLE_VISITED_SCHOLARS_MAP && (
        <section className="relative z-0 bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 标题和装饰 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Visited Scholars
              </h2>
              <TitleDecorator />
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                Our lab welcomes scholars from around the world
              </p>
            </div>

            {/* 地图 */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <VisitedScholarsMap />
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

