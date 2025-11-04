'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

export default function TopLoadingBar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    NProgress.done()
  }, [pathname, searchParams])

  useEffect(() => {
    const handleStart = () => NProgress.start()
    const handleComplete = () => NProgress.done()

    // 监听链接点击
    const links = document.querySelectorAll('a[href^="/"]')
    links.forEach(link => {
      link.addEventListener('click', handleStart)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleStart)
      })
    }
  }, [])

  return null
}
