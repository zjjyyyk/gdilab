import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import "./nprogress.css";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TopLoadingBar from '@/components/TopLoadingBar'
import { siteConfig } from '@/config/site.config'

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
      <body className="min-h-screen flex flex-col" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <TopLoadingBar />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
