'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/site.config'
import { getAssetPath } from '@/lib/utils'
import QRCodeModal from '@/components/QRCodeModal'

export default function Footer() {
  const [showWechatQR, setShowWechatQR] = useState(false)

  return (
    <>
      <footer className="bg-gray-800 text-white py-6 sm:py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* 版权信息 */}
            <div className="text-xs sm:text-sm text-gray-300 text-center md:text-left">
              <p>{siteConfig.copyright}</p>
            </div>
          
            {/* 社交媒体链接 */}
            <div className="flex space-x-6 sm:space-x-8">
              <a 
                href={siteConfig.social.xiaohongshu}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:text-primary transition-colors"
              >
                <img src={getAssetPath("/xiaohongshu.svg")} alt="小红书" className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
                <span className="text-xs">小红书</span>
              </a>
              <button 
                onClick={() => setShowWechatQR(true)}
                className="flex flex-col items-center hover:text-primary transition-colors cursor-pointer"
              >
                <img src={getAssetPath("/wechat.svg")} alt="微信公众号" className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
                <span className="text-xs">微信公众号</span>
              </button>
              <a 
                href={siteConfig.social.zhihu}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:text-primary transition-colors"
              >
                <img src={getAssetPath("/zhihu.svg")} alt="知乎" className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
                <span className="text-xs">知乎</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* 微信公众号二维码模态框 */}
      <QRCodeModal 
        isOpen={showWechatQR}
        onClose={() => setShowWechatQR(false)}
        qrCodePath={siteConfig.social.wechatQRCode}
        title="微信公众号"
      />
    </>
  )
}
