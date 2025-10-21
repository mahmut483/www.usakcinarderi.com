import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const HandmadeWalletHero = () => {
  const t = useTranslations('HandmadeWallet');

  return (
    // 1. Arka plan daha yumuşak ve modern bir radial gradient ile değiştirildi.
    <section className="relative w-full overflow-hidden bg-white">
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-100/80 via-white to-white" 
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8 px-6 py-20 lg:py-32">
        
        {/* Sol: Başlık ve metin (Daha güçlü tipografi ve hizalama) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="inline-block mb-4 px-4 py-1.5 bg-orange-200/70 text-orange-800 rounded-full text-sm font-semibold tracking-wide">
            {t('hero.tag')}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 !leading-tight tracking-tighter mb-6">
            {t('hero.title')}
          </h1>
          <p className="max-w-xl text-slate-600 text-lg md:text-xl leading-relaxed">
            {t('hero.description')}
          </p>
        </div>
                
        {/* 2. Sağ: Görsel (Daha dinamik, katmanlı ve etkileşimli) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:-mr-12">
          <div 
            className="
              group relative overflow-hidden rounded-3xl 
              bg-white shadow-2xl shadow-orange-950/20 
              transition-all duration-500 ease-in-out
              hover:shadow-orange-950/30 hover:scale-105 hover:-rotate-1
            "
          >
            <Image
              src="/images/gemi.jpg"
              alt="Çınar Deri El Yapımı Cüzdan"
              width={600}
              height={450}
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HandmadeWalletHero;