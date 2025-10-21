import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();

  return (
    <footer className="bg-white border-t border-slate-200">
      {/* --- DEĞİŞİKLİK: py-16 -> py-12 --- */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* --- DEĞİŞİKLİK: gap-12 -> gap-10 --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Sütun 1: Logo, Slogan ve Sosyal Medya */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link href={`/${locale}`} className="inline-block">
              <Image
                src="/images/image.png"
                alt="Çınar Deri Logo"
                width={150}
                height={45}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-4 text-slate-600 max-w-xs">{t('slogan')}</p>
            <div className="flex space-x-3 mt-6">
              <a href="https://www.instagram.com/rastiposteleather" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-full transition-colors">
                <Instagram size={20}/>
              </a>
            </div>
          </div>

          {/* Sütun 2: Şirket Linkleri */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">
              {t('deri')}
            </h3>
            {/* --- DEĞİŞİKLİK: space-y-3 -> space-y-2.5 --- */}
            <ul className="space-y-2.5">
              <li><Link href={`/${locale}/blog`} className="text-slate-600 hover:text-blue-600 transition-colors">{t('blog')}</Link></li>
              <li><Link href={`/${locale}/ourFactory`} className="text-slate-600 hover:text-blue-600 transition-colors">{t('projelerimiz')}</Link></li>
              <li><Link href={`/${locale}/digerHizmetler/`} className="text-slate-600 hover:text-blue-600 transition-colors">{t('hizmetlerimiz')}</Link></li>
              <li><Link href={`/${locale}/contact`} className="text-slate-600 hover:text-blue-600 transition-colors">{t('iletisim')}</Link></li>
            </ul>
          </div>

          {/* Sütun 3: Hizmetler Linkleri */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">
              {t('hizmetlerimiz')}
            </h3>
            {/* --- DEĞİŞİKLİK: space-y-3 -> space-y-2.5 --- */}
            <ul className="space-y-2.5">
                <li><Link href={`/${locale}/digerHizmetler/importAndExport`} className="text-slate-600 hover:text-blue-600 transition-colors">{t('cüzdan')}</Link></li>
                <li><Link href={`/${locale}/digerHizmetler/ourLeatherResources`} className="text-slate-600 hover:text-blue-600 transition-colors">{t('kemer')}</Link></li>
                <li><Link href={`/${locale}/digerHizmetler/ourProductionProcess`} className="text-slate-600 hover:text-blue-600 transition-colors">{t('canta')}</Link></li>
                <li><Link href={`/${locale}/digerHizmetler/qualityAndCertifications`} className="text-slate-600 hover:text-blue-600 transition-colors">{t('bakim')}</Link></li>
                <li><Link href={`/${locale}/digerHizmetler/legalComplianceAndEthics`} className="text-slate-600 hover:text-blue-600 transition-colors">{t('gravur')}</Link></li>
                <li><Link href={`/${locale}/digerHizmetler/internationalTrade`} className="text-slate-600 hover:text-blue-600 transition-colors">{t('kurumsal')}</Link></li>
            </ul>
          </div>

          {/* Sütun 4: İletişim */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">
              {t('iletisim')}
            </h3>
            {/* --- DEĞİŞİKLİK: space-y-4 -> space-y-3 --- */}
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>Karma OSB, 107. Cd. No:28, Uşak Merkez/Uşak</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+905050019528" className="hover:text-blue-600">+90 505 001 95 28</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:info@usakcinarderi.com" className="hover:text-blue-600">info@usakcinarderi.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Kısım: Copyright & Karun Medya Logosu */}
        {/* --- DEĞİŞİKLİK: mt-16 -> mt-12 ve pt-8 -> pt-6 --- */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-500 text-center md:text-left">
            {t('altMetin')}
          </p>
          
          <a 
            href="https://karunmedya.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            <Image
              src="/images/karun.png"
              alt="Karun Medya Logo"
              width={120}
              height={30}
            />
          </a>
        </div>

      </div>
    </footer>
  );
}