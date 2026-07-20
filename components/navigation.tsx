'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', sectionId: 'home' },
  { label: 'Speakers', sectionId: 'speakers' },
  { label: 'Agenda', sectionId: 'agenda' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // 通用滚动方法，自动扣除导航80px高度，不会被遮挡
  const scrollToTarget = (id: string) => {
    const targetEl = document.getElementById(id);
    if (!targetEl) return;
    const elRect = targetEl.getBoundingClientRect();
    window.scrollTo({
      top: window.scrollY + elRect.top - 80,
      behavior: 'smooth'
    });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm border-b border-gray-200'
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo 改为按钮，点击滚动到顶部 */}
          <button
            onClick={() => scrollToTarget('home')}
            className="flex items-center gap-3 flex-shrink-0 bg-transparent border-none cursor-pointer"
          >
            <div className="flex items-center">
              <div className="bg-[#2563eb] rounded flex items-center justify-center px-2 py-1.5">
                <span className="text-white font-bold text-sm tracking-wider">OME</span>
              </div>
              <div className="bg-gray-900 rounded flex items-center justify-center px-2 py-1.5 ml-0.5">
                <span className="text-white font-bold text-sm tracking-wider">JR</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-gray-900 font-bold text-sm tracking-tight leading-none block">
                OpenMind Events
              </span>
              <span className="text-[#2563eb] text-[9px] uppercase tracking-widest leading-none">
                By JR Group
              </span>
            </div>
          </button>

          {/* 桌面导航：全部换成按钮 */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => scrollToTarget(link.sectionId)}
                className="px-3 py-2 text-sm font-medium rounded transition-colors text-gray-700 hover:text-gray-900 hover:bg-gray-50 bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* 移动端开关 */}
          <button
            className="lg:hidden text-gray-900 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => scrollToTarget(link.sectionId)}
                className="block w-full text-left px-3 py-2.5 text-sm font-medium rounded transition-colors text-gray-700 hover:text-gray-900 hover:bg-gray-50 bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}