import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Briefcase, ArrowRight } from 'lucide-react'; // Building yerine daha tematik bir ikon

const BagCTA = () => {
  const t = useTranslations('BagPortfolio');
  const locale = useLocale();

  return (
    // 1. Ana Konteyner: Kart yerine, bütünsel bir bölüm.
    <section className="relative w-full bg-white py-24 sm:py-32 overflow-hidden border-t border-slate-100">
      {/* 2. Aurora Arka Planı: Orijinal kırmızı tonunu temel alan, sofistike bir "glow". */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] bg-gradient-radial from-red-100/50 to-white/0 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        
        {/* 3. Grafiksel Odak Noktası: Markanın temasını yansıtan, renkli ve büyük bir ikon. */}
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-100 to-orange-100 mb-8">
          <Briefcase className="h-9 w-9 text-slate-700" />
        </div>

        {/* 4. Güçlü ve Net Tipografi */}
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          {t('cta.title')}
        </h2>
        <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
          {t('cta.description')}
        </p>

        {/* 5. Yüksek Kontrastlı Eylem Çağrısı Butonu */}
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

export default BagCTA;