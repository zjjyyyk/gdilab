import Carousel from '@/components/Carousel'
import FeaturedPublicationItem from '@/components/FeaturedPublicationItem'
import TitleDecorator from '@/components/TitleDecorator'
import VisitedScholarsMap from '@/components/VisitedScholarsMap'
import featuredPublications from '../public/data/featured-publications.json'

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

      {/* Visited Scholars Map */}
      <section className="py-8 sm:py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-gray-800 text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Visited Scholars
          </h2>
          {/* 装饰块 */}
          <TitleDecorator />
        
          <div className="mt-6 sm:mt-8">
            <VisitedScholarsMap />
          </div>
        </div>
      </section>
    </div>
  )
}

