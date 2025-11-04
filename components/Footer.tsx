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
              <img src="/xiaohongshu.svg" alt="小红书" className="w-6 h-6 mb-1" />
              <span className="text-xs">小红书</span>
            </a>
            <a 
              href={siteConfig.social.zhihu}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-primary transition-colors"
            >
              <img src="/zhihu.svg" alt="知乎" className="w-6 h-6 mb-1" />
              <span className="text-xs">知乎</span>
            </a>
            <a 
              href={siteConfig.social.wechat}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-primary transition-colors"
            >
              <img src="/wechat.svg" alt="微信公众号" className="w-6 h-6 mb-1" />
              <span className="text-xs">微信公众号</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
