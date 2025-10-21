// src/components/headerComponents/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Instagram, Phone, Menu, X } from 'lucide-react';
import ServicesDropdown from './ServicesDropdown';
import MobileMenu from './MobileMenu';

export const Header: React.FC = () => {
  const t = useTranslations('Header');
  const locale = useLocale();
  const pathname = usePathname() || '/';
  // --- BAŞLANGIÇ: DEĞİŞTİRİLEN BÖLÜM (İtalyanca 'it' eklendi) ---
  const basePath = pathname.replace(/^\/(tr|en|ru|it)/, '') || '/';
  // --- BİTİŞ: DEĞİŞTİRİLEN BÖLÜM ---

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Scroll efektini dinleyen useEffect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(prev => (prev !== isScrolled ? isScrolled : prev));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pathname değiştiğinde mobile menüyü kapat
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <div
          className={`
            max-w-screen-xl mx-auto flex items-center justify-between px-4
            transition-[padding] duration-300 ease-in-out
            ${scrolled ? 'py-3' : 'py-5'}
          `}
        >
          {/* Logo + toggle */}
          <div className="flex items-center justify-between w-full sm:w-auto">
            
            <Link href={`/${locale}`} className="flex items-center">
              <Image
                src="/images/image.png"
                alt="Çınar Deri Logo"
                width={140}
                height={40}
                priority
                className="h-8 w-auto sm:h-9"
              />
            </Link>

            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMobileOpen(o => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex space-x-6 items-center">
            <Link
              href={`/${locale}/about`}
              className={`font-medium px-2 py-1 transition text-sm ${
                pathname.startsWith(`/${locale}/about`) ? 'underline text-blue-700' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {t('about')}
            </Link>
            <ServicesDropdown />
            <Link
              href={`/${locale}/ourFactory`}
              className={`font-medium px-2 py-1 transition text-sm ${
                pathname.startsWith(`/${locale}/ourFactory`) ? 'underline text-blue-700' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {t('ourProject')}
            </Link>
            <Link
              href={`/${locale}/blog`}
              className={`font-medium px-2 py-1 transition text-sm ${
                pathname.startsWith(`/${locale}/blog`) ? 'underline text-blue-700' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {t('blog')}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className={`font-medium px-2 py-1 transition text-sm ${
                pathname.startsWith(`/${locale}/contact`) ? 'underline text-blue-700' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {t('contact')}
            </Link>
          </nav>

          {/* Desktop social & locale */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="https://www.instagram.com/rastiposteleather" target="_blank" rel="noopener" className="p-2 text-gray-700 hover:text-gray-200 hover:bg-gray-700 rounded-full">
              <Instagram size={22}/>
            </Link>
            <a href="tel:+905050019528" className="flex items-center text-gray-700 hover:underline px-6">
              <Phone size={18}/><span className="ml-1 text-sm font-bold">0505 001 95 28</span>
            </a>
            <div className="flex px-2 py-1 space-x-2">
              {/* locale switcher */}
              <Link
                href={`/tr${basePath}`}
                className={`
                  flex items-center px-2 py-1 text-sm sm:text-base font-bold rounded-md text-gray-700
                  ${locale === 'tr' ? 'border-2 border-gray-900' : 'border border-transparent hover:border-gray-900'}
                  transition
                `}
              >
                <span className="text-xs sm:text-lg leading-none mr-1">🇹🇷</span> TR
              </Link>
              <Link
                href={`/en${basePath}`}
                className={`
                  flex items-center px-2 py-1 text-sm sm:text-base font-bold rounded-md text-gray-700
                  ${locale === 'en' ? 'border-2 border-gray-900' : 'border border-transparent hover:border-gray-900'}
                  transition
                `}
              >
                <span className="text-xs sm:text-lg leading-none mr-1">🇬🇧</span> EN
              </Link>
              <Link
                href={`/ru${basePath}`}
                className={`
                  flex items-center px-2 py-1 text-sm sm:text-base font-bold rounded-md text-gray-700
                  ${locale === 'ru' ? 'border-2 border-gray-900' : 'border border-transparent hover:border-gray-900'}
                  transition
                `}
              >
                <span className="text-xs sm:text-lg leading-none mr-1">🇷🇺</span> RU
              </Link>
              
              {/* --- BAŞLANGIÇ: YENİ EKLENEN BÖLÜM --- */}
              <Link
                href={`/it${basePath}`}
                className={`
                  flex items-center px-2 py-1 text-sm sm:text-base font-bold rounded-md text-gray-700
                  ${locale === 'it' ? 'border-2 border-gray-900' : 'border border-transparent hover:border-gray-900'}
                  transition
                `}
              >
                <span className="text-xs sm:text-lg leading-none mr-1">🇮🇹</span> IT
              </Link>
              {/* --- BİTİŞ: YENİ EKLENEN BÖLÜM --- */}

            </div>
          </div>
        </div>

        {/* Mobile menu content */}
        <MobileMenu open={mobileOpen} setOpen={setMobileOpen} basePath={basePath} />
      </header>

      {/* placeholder to prevent content shift */}
      <div className={scrolled ? 'h-12 lg:h-12' : 'h-16 lg:h-16'} />
    </>
  );
};