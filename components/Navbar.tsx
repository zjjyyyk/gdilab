import Link from 'next/link'
import { siteConfig } from '@/config/site.config'
import { getAssetPath } from '@/lib/utils'

export default function Navbar() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'People', path: '/people' },
    { name: 'Topics', path: '/topics' },
    { name: 'Publications', path: '/publications' },
    { name: 'Activities', path: '/activities' },
    { name: 'Awards', path: '/awards' },
    { name: 'Contact Us', path: '/contact' },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 左侧：Logo和实验室名称 */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src={getAssetPath("/images/logo.svg")}
              alt="Lab Logo" 
              width={40} 
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-semibold text-gray-800">
              {siteConfig.labName}
            </span>
          </Link>
        
          {/* 右侧：导航链接 */}
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
