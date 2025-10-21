import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Building, ArrowRight } from 'lucide-react';

const BakimCTA = () => {
  const t = useTranslations('BakimVeOnarim');
  const locale = useLocale();

  return (
    // Arka planı beyaz olarak güncellendi, isterseniz bg-slate-50 yapabilirsiniz.
    <section className="w-full py-20 md:py-28 px-6 bg-white">
      {/* Kart stilleri (gölge, yuvarlak köşe, arkaplan) kaldırıldı. Sadece içeriği ortalamak için kullanılıyor. */}
      <div className="max-w-4xl mx-auto text-center">
        
        {/* İkon - Mavi renk paletine güncellendi */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <Building className="w-8 h-8 text-blue-700" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 tracking-tight">
          {t('cta.title')}
        </h2>
        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          {t('cta.description')}
        </p>
        <div className="flex justify-center">
          <Link
            href={`/${locale}/contact`}
            // Buton renkleri yeşilden maviye çevrildi
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md focus:ring-4 focus:ring-blue-300 text-lg"
          >
            {t('cta.contactButton')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BakimCTA;