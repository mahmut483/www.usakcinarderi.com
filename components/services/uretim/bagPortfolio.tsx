import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const BagPortfolio = () => {
  const t = useTranslations('BagPortfolio');

  return (
    // 1. Ana Konteyner: Aurora efekti ve modern boşluklar korunuyor.
    <section className="relative w-full bg-white pt-24 pb-28 sm:pt-32 sm:pb-36 overflow-hidden">
      {/* 2. Aurora Arka Planı: Orijinal kırmızı tonunu temel alan, daha yumuşak bir gradyan. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-0 right-0 w-[80rem] h-[80rem] bg-gradient-radial from-red-100/60 to-white/0 -translate-y-1/4 translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* 3. Asimetrik Grid: Dinamik ve modern düzen. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20 items-center">
          
          {/* Sol: Metin İçeriği. Buton tamamen kaldırıldı. */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="inline-flex items-center rounded-full px-4 py-1.5 mb-5 text-sm font-semibold text-red-800 bg-red-100 ring-1 ring-inset ring-red-200/50">
              {t('hero.tag')}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight !leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-8">
              {t('hero.description')}
            </p>
          </div>

          {/* Sağ: Katmanlı ve Etkileşimli Görsel */}
          <div className="w-full flex items-center justify-center">
             <div className="group relative w-full max-w-lg">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-red-200 to-orange-200 opacity-25 blur-xl transition-all duration-500 group-hover:opacity-60 group-hover:rotate-6" />
                
                <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-red-900/20 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2">
                    <Image
                        src="/images/dikisMakinesi.jpg"
                        alt={t('hero.altText') || "El yapımı çanta üretimi"}
                        width={600}
                        height={450}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BagPortfolio;