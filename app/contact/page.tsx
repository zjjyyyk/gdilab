import { siteConfig } from '@/config/site.config'

export default function ContactUs() {
  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <h1 className="text-center text-gray-800" style={{ fontSize: '24px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>
          Contact Us
        </h1>
        {/* 装饰块 */}
        <div style={{ clear: 'both', display: 'block', height: '0.7rem', width: '80px', margin: '0px', marginLeft: 'auto', marginRight: 'auto', paddingBottom: '0.3rem', borderBottom: '3px double #3B99E0' }}></div>
      
        {/* 内容区域 */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6 text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            {/* 实验室介绍 */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">About Our Lab</h2>
              <p>
                The Graph Data Intelligence Lab is a leading research group dedicated to advancing the frontiers of 
                artificial intelligence, machine learning, and data science. Our research focuses on developing 
                innovative algorithms and systems for graph neural networks, knowledge representation, and 
                intelligent data analysis. With state-of-the-art facilities and a collaborative environment, 
                we strive to make significant contributions to both academic research and real-world applications.
              </p>
            </section>

            {/* 联系方式 */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Get in Touch</h2>
              <p className="mb-2">
                <strong>Email:</strong> contact@gdil.edu.cn
              </p>
              <p className="mb-2">
                <strong>Address:</strong> Room 408, Computer Science Building, University Campus
              </p>
              <p className="mb-3">
                <strong>Follow us on social media:</strong>
              </p>
              <div className="flex gap-4 ml-4">
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
              <h2 className="text-xl font-bold text-gray-800 mb-3">Join Our Team</h2>
              <p className="mb-3">
                We are always looking for talented and motivated students to join our research group! 
                If you are passionate about artificial intelligence, machine learning, or data science, 
                and eager to work on cutting-edge research projects, we encourage you to apply.
              </p>
              <p className="mb-3">
                <strong>We are currently recruiting:</strong>
              </p>
              <ul className="list-disc ml-8 space-y-2 mb-3">
                <li>Ph.D. students (Fall 2025 & Spring 2026)</li>
                <li>Master's students (Fall 2025)</li>
                <li>Undergraduate research assistants</li>
                <li>Visiting scholars and postdoctoral researchers</li>
              </ul>
              <p className="mb-3">
                <strong>What we offer:</strong>
              </p>
              <ul className="list-disc ml-8 space-y-2 mb-3">
                <li>Competitive scholarships and stipends</li>
                <li>Access to high-performance computing resources</li>
                <li>Opportunities to publish in top-tier conferences and journals</li>
                <li>Collaboration with leading researchers worldwide</li>
                <li>Supportive and inclusive research environment</li>
              </ul>
              <p>
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
