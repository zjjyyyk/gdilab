import { siteConfig } from '@/config/site.config'
import TitleDecorator from '@/components/TitleDecorator'

export default function ContactUs() {
  return (
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
                The Graph Data Intelligence Lab is a leading research group dedicated to advancing the frontiers of 
                artificial intelligence, machine learning, and data science. Our research focuses on developing 
                innovative algorithms and systems for graph neural networks, knowledge representation, and 
                intelligent data analysis. With state-of-the-art facilities and a collaborative environment, 
                we strive to make significant contributions to both academic research and real-world applications.
              </p>
            </section>

            {/* 联系方式 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Get in Touch</h2>
              <p className="mb-2">
                <strong>Email:</strong> contact@gdil.edu.cn
              </p>
              <p className="mb-2">
                <strong>Address:</strong> Room 408, Computer Science Building, University Campus
              </p>
              <p className="mb-3">
                <strong>Follow us on social media:</strong>
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
                <a 
                  href={siteConfig.social.wechat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  💬 WeChat Official Account
                </a>
              </div>
            </section>

            {/* 招生信息 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Join Our Team</h2>
              <p className="mb-3 text-justify">
                We are always looking for talented and motivated students to join our research group! 
                If you are passionate about artificial intelligence, machine learning, or data science, 
                and eager to work on cutting-edge research projects, we encourage you to apply.
              </p>
              <p className="mb-3">
                <strong>We are currently recruiting:</strong>
              </p>
              <ul className="list-disc ml-6 sm:ml-8 space-y-1 sm:space-y-2 mb-3">
                <li>Ph.D. students (Fall 2025 & Spring 2026)</li>
                <li>Master's students (Fall 2025)</li>
                <li>Undergraduate research assistants</li>
                <li>Visiting scholars and postdoctoral researchers</li>
              </ul>
              <p className="mb-3">
                <strong>What we offer:</strong>
              </p>
              <ul className="list-disc ml-6 sm:ml-8 space-y-1 sm:space-y-2 mb-3">
                <li>Competitive scholarships and stipends</li>
                <li>Access to high-performance computing resources</li>
                <li>Opportunities to publish in top-tier conferences and journals</li>
                <li>Collaboration with leading researchers worldwide</li>
                <li>Supportive and inclusive research environment</li>
              </ul>
              <p className="text-justify">
                Interested candidates are welcome to send their CV, transcripts, and a brief statement of 
                research interests to <strong>contact@gdil.edu.cn</strong>. We look forward to hearing from you!
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
