import Carousel from '@/components/Carousel'
import FeaturedPublicationItem from '@/components/FeaturedPublicationItem'
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
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-gray-800" style={{ fontSize: '24px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>
            Selected Publications
          </h2>
          {/* 装饰块 */}
          <div style={{ clear: 'both', display: 'block', height: '0.7rem', width: '80px', margin: '0px', marginLeft: 'auto', marginRight: 'auto', paddingBottom: '0.3rem', borderBottom: '3px double #3B99E0' }}></div>
        
          <div className="space-y-2 mt-8" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {featuredPublications.map((paper: any, index: number) => (
              <FeaturedPublicationItem key={index} paper={paper} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

