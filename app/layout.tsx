import './globals.css'
import type { Metadata } from 'next'
// 关键：补上Link导入
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'OpenMind Forum',
  description: 'OpenMind Global Business Forum Official Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0 min-h-screen font-sans">
        {/* 全局导航栏，所有页面共用 */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between border-b">
          <div className="flex items-center gap-2">
            <div className="flex">
              <span className="bg-blue-600 text-white px-2 py-1 font-bold">OME</span>
              <span className="bg-black text-white px-2 py-1 font-bold">JR</span>
            </div>
            <div className="ml-2">
              <p className="font-semibold">OpenMind Events</p>
              <p className="text-xs text-gray-500">BY JR GROUP</p>
            </div>
          </div>
          <nav className="flex items-center gap-8 text-sm text-gray-800">
            <Link href="/" className="hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/speakers" className="hover:text-blue-600 transition-colors">Speakers</Link>
            <Link href="/agenda" className="hover:text-blue-600 transition-colors">Agenda</Link>
          </nav>
        </header>
        {/* 页面内容自动注入这里 */}
        {children}
      </body>
    </html>
  )
}