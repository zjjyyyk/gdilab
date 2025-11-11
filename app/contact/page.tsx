'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/site.config'
import TitleDecorator from '@/components/TitleDecorator'
import QRCodeModal from '@/components/QRCodeModal'

export default function ContactUs() {
  const [showWechatQR, setShowWechatQR] = useState(false)

  return (
    <>
      <div className="py-8 sm:py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <h1 className="text-center text-gray-800 text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Contact Us
        </h1>
        {/* 装饰块 */}
        <TitleDecorator />
      
        {/* 内容区域 */}
        <div className="mt-6 sm:mt-8 bg-white rounded-lg shadow-sm p-4 sm:p-8">
          <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
            {/* 实验室介绍 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">About Our Lab</h2>
              <p className="text-justify">
                The Graph Data Intelligence Lab is a premier research group at the forefront of graph data science. We are dedicated to pioneering advanced algorithms and systems in areas such as graph machine learning, knowledge graphs, LLM-Graph integration (LLM4Graph/Graph4LLM), vector retrieval, RAG, LLM Agent, spectral graph theory, and AI for Science (AI4Science). By leveraging state-of-the-art facilities and fostering a collaborative culture, we aim to push the boundaries of academic knowledge and create impactful real-world solutions.
              </p>
            </section>

            {/* 联系方式 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Get in Touch</h2>
              <p className="mb-2">
                We welcome your inquiries and collaboration proposals.
                </p>
                <p className="mb-2">
                <strong>Email:</strong> lironghuabit@126.com
              </p>
              <p className="mb-2">
                <strong>Address:</strong> Room 1233, Central Teaching Building, Beijing Institute of Technology (Zhongguancun Campus)
              </p>
              
              </section>
              {/* 联系方式 */}
            <section>
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Follow Us</h2>
                <p className="mb-2">
                  Stay updated with our latest research and news.
                  </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 ml-2 sm:ml-4">
                <a 
                  href={siteConfig.social.xiaohongshu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  📱 Xiaohongshu (小红书)
                </a>
                <a 
                  href={siteConfig.social.zhihu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  📖 Zhihu (知乎)
                </a>
              </div>
              <p className="mb-3 mt-4">
                WeChat Official Account (微信公众号):
              </p>
              <div className="ml-2 sm:ml-4">
                <button
                  onClick={() => setShowWechatQR(true)}
                  className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                >
                  💬 点击查看微信公众号二维码
                </button>
              </div>
              </section>
              
            {/* 招生信息 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Join Our Team</h2>
              <p className="mb-3 text-justify">
                We are continuously seeking highly motivated and talented students to join our dynamic research team. If you are passionate about graph algorithms, graph machine learning, LLM-Graph integration, LLM Agent, RAG, spectral graph theory, and are eager to tackle cutting-edge research challenges, we strongly encourage you to reach out.
              </p>
              <p className="mb-3">
                <strong>We are currently recruiting:</strong>
              </p>
              <ul className="list-disc ml-6 sm:ml-8 space-y-1 sm:space-y-2 mb-3">
                <li>Ph.D. Students (Commencing Fall 2027)</li>
                <li>Master's Students (Commencing Fall 2026)</li>
                <li>Undergraduate Research Assistants</li>
                <li>Visiting Scholars and Postdoctoral Researchers</li>
              </ul>
              <p className="mb-3">
                <strong>What we offer:</strong>
              </p>
              <ul className="list-disc ml-6 sm:ml-8 space-y-1 sm:space-y-2 mb-3">
                <li>Competitive scholarships and stipends</li>
                <li>Access to high-performance computing clusters</li>
                <li>Opportunities to publish in top-tier conferences and journals</li>
                <li>Collaboration with leading international researchers</li>
                <li>A supportive, inclusive, and intellectually stimulating environment</li>
              </ul>
              <p className="text-justify">
                Interested candidates are invited to submit their CV, academic transcripts, and a statement of research interests to <strong>lironghuabit@126.com</strong>. We look forward to hearing from you!
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>

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
