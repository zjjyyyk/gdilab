import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from 'next/dynamic';
import localFont from 'next/font/local';
import "./globals.css";
import "./nprogress.css";
import Navbar from '@/components/Navbar'
import TopLoadingBar from '@/components/TopLoadingBar'
import { siteConfig } from '@/config/site.config'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-16" />,
})

const montserrat = localFont({
  src: '../public/fonts/Montserrat-Regular.ttf',
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: siteConfig.labName,
  description: `${siteConfig.labName}官方网站`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        {/* Microsoft Clarity 跟踪代码 */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ua65g7fdc5");
            `,
          }}
        />
        {/* 预连接地图瓦片服务器,加速地图加载 */}
        <link rel="preconnect" href="https://tile.openstreetmap.org" />
        <link rel="preconnect" href="https://basemaps.cartocdn.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
      </head>
      <body className={`min-h-screen flex flex-col ${montserrat.className}`}>
        <Suspense fallback={null}>
          <TopLoadingBar />
        </Suspense>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
