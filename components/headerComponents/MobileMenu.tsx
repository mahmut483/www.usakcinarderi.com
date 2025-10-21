// src/components/headerComponents/MobileMenu.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { Instagram, Phone, ChevronDown, Home, X } from 'lucide-react'; // Home ve X ikonları eklendi
import { useTranslations, useLocale } from 'next-intl';

interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  basePath: string;
}

const services = [
  { href: 'importAndExport', titleKey: 'title1', textKey: 'text1' },
  { href: 'ourLeatherResources', titleKey: 'title2', textKey: 'text2' },
  { href: 'ourProductionProcess', titleKey: 'title3', textKey: 'text3' },
  { href: 'qualityAndCertifications', titleKey: 'title4', textKey: 'text4' },
  { href: 'legalComplianceAndEthics', titleKey: 'title5', textKey: 'text5' },
  { href: 'internationalTrade', titleKey: 'title6', textKey: 'text6' },
];

function shorten(text: string, maxLength = 60) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, setOpen, basePath }) => {
  const t = useTranslations('Header');
  const tServices = useTranslations('Services');
  const locale = useLocale();
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    // 1. Tam ekran overlay container
    <div
      className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ease-in-out ${
        open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Arka plan karartması */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* 2. Sağdan kayan menü paneli */}
      <div
        className={`relative flex flex-col w-full max-w-xs h-full bg-white ml-auto shadow-xl transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* YENİ: Kapatma Butonu */}
        <div className="absolute top-4 right-4">
          <button
            type="button"
            className="p-2 text-gray-500 rounded-full hover:bg-gray-200 hover:text-gray-800 transition-colors"
            onClick={handleClose}
          >
            <X size={24} />
          </button>
        </div>

        {/* Ana navigasyon linkleri */}
        <nav className="flex-grow p-4 pt-16 space-y-2 overflow-y-auto"> {/* pt-16 ile üst boşluk artırıldı */}
          
          {/* YENİ: Ana Sayfa Butonu (İkon) */}
          <Link
            href={`/${locale}/`}
            className="block px-4 py-3 text-gray-800 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            onClick={handleClose}
          >
            <Home size={24} />
          </Link>
        
          <Link
            href={`/${locale}/about`}
            className="block px-4 py-3 text-base font-medium text-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={handleClose}
          >
            {t('about')}
          </Link>

          {/* Hizmetler için modern akordiyon menü */}
          <div>
            <button
              type="button"
              className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
            >
              <span>{t('ourServices')}</span>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  mobileServicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="mt-1 pl-6 border-l-2 border-gray-200 space-y-1">
                 <Link
                    href={`/${locale}/digerHizmetler/`}
                    className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                    onClick={handleClose}
                 >
                    <span className="font-semibold">{t('tumHizmetler')}</span>
                 </Link>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={`/${locale}/digerHizmetler/${service.href}`}
                    className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                    onClick={handleClose}
                  >
                    <span className="font-semibold">{tServices(service.titleKey)}</span>
                    <p className="text-xs text-gray-500">{shorten(tServices(service.textKey), 50)}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href={`/${locale}/ourFactory`}
            className="block px-4 py-3 text-base font-medium text-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={handleClose}
          >
            {t('ourProject')}
          </Link>
          <Link
            href={`/${locale}/blog`}
            className="block px-4 py-3 text-base font-medium text-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={handleClose}
          >
            {t('blog')}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="block px-4 py-3 text-base font-medium text-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={handleClose}
          >
            {t('contact')}
          </Link>
        </nav>

        {/* 3. Footer bölümü */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 space-y-4">
            <div className="flex items-center justify-between">
                <a href="tel:+905050019528" className="flex items-center gap-2 text-blue-600 font-semibold text-sm" onClick={handleClose}>
                    <Phone size={18}/>
                    <span>+90 505 001 95 28</span>
                </a>
                <Link href="https://www.instagram.com/rastiposteleather" className="p-2 text-gray-600 hover:text-pink-600" onClick={handleClose}>
                    <Instagram size={22}/>
                </Link>
            </div>
          
            <div className="grid grid-cols-4 gap-2 text-center text-sm">
                <Link href={`/tr${basePath}`} className={`p-2 rounded-md ${locale === 'tr' ? 'bg-gray-800 text-white' : 'bg-gray-200 hover:bg-gray-300'}`} onClick={handleClose}>🇹🇷</Link>
                <Link href={`/en${basePath}`} className={`p-2 rounded-md ${locale === 'en' ? 'bg-gray-800 text-white' : 'bg-gray-200 hover:bg-gray-300'}`} onClick={handleClose}>🇬🇧</Link>
                <Link href={`/ru${basePath}`} className={`p-2 rounded-md ${locale === 'ru' ? 'bg-gray-800 text-white' : 'bg-gray-200 hover:bg-gray-300'}`} onClick={handleClose}>🇷🇺</Link>
                <Link href={`/it${basePath}`} className={`p-2 rounded-md ${locale === 'it' ? 'bg-gray-800 text-white' : 'bg-gray-200 hover:bg-gray-300'}`} onClick={handleClose}>🇮🇹</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;