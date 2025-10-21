import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const BeltAccessory = () => {
  const t = useTranslations('BeltAccessory');

  return (
    <section className="w-full bg-white py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
        
        {/* Sol: Başlık ve metin */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide">
            {t('hero.tag')}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight tracking-tight">
            {t('hero.title')}
          </h1>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-md">
            {t('hero.description')}
          </p>
        </div>

        {/* Sağ: Görsel */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] w-full max-w-md aspect-[4/3] bg-white ring-1 ring-gray-100">
            <Image
              src="/images/fabrika3.jpg"
              alt="Çınar Deri El Yapımı Cüzdan"
              width={600}
              height={450}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500 ease-out"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default BeltAccessory;
