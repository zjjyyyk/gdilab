import { siteConfig } from '@/config/site.config'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* 备案信息 */}
          <div className="text-sm text-gray-300">
            <p>{siteConfig.copyright}</p>
            <p>{siteConfig.icp}</p>
          </div>
        
          {/* 社交媒体链接 */}
          <div className="flex space-x-8">
            <a 
              href={siteConfig.social.xiaohongshu}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
              <span className="text-xs">小红书</span>
            </a>
            <a 
              href={siteConfig.social.zhihu}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15H8v-5h2v5zm0-6H8V9h2v2zm6 6h-2v-5h2v5zm0-6h-2V9h2v2z"/>
              </svg>
              <span className="text-xs">知乎</span>
            </a>
            <a 
              href={siteConfig.social.wechat}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
              <span className="text-xs">微信公众号</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
