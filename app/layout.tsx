import type { Metadata } from "next";
import { Suspense } from "react";
import localFont from 'next/font/local';
import "./globals.css";
import "./nprogress.css";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TopLoadingBar from '@/components/TopLoadingBar'
import { siteConfig } from '@/config/site.config'

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
