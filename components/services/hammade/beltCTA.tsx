import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Building, ArrowRight } from 'lucide-react';

const BeltCTA = () => {
  const t = useTranslations('BeltAccessory');
  const locale = useLocale();

  return (
    // 1. Ana Konteyner: Kart yerine, sayfanın doğal akışının bir parçası olan, net sınırlarla ayrılmış bir bölüm.
    <section className="w-full bg-white py-24 sm:py-32 border-t border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        
        {/* 2. Grafiksel Odak Noktası: Markanın kurumsallığını yansıtan, renkli ve büyük bir ikon. */}
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-fuchsia-100 mb-8">
          <Building className="h-9 w-9 text-slate-700" />
        </div>

        {/* 3. Güçlü ve Net Tipografi */}
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          {t('cta.title')}
        </h2>
        <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
          {t('cta.description')}
        </p>

        {/* 4. Yüksek Kontrastlı Eylem Çağrısı Butonu */}
        <div className="mt-10">
          <Link
            href={`/${locale}/contact`}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 text-white font-semibold py-3 px-8 shadow-lg transform transition-all duration-300 hover:bg-slate-800 hover:scale-105 active:scale-100"
          >
            {t('cta.contactButton')}
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BeltCTA;