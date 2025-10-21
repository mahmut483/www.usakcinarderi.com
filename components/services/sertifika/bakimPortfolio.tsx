import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const BakimPortfolio = () => {
  const t = useTranslations('BakimVeOnarim');

  return (
    <section className="w-full bg-slate-50 flex items-center overflow-hidden py-20 md:py-28">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-6 md:px-8">
        
        {/* Sol: Başlık ve Metin */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:order-1">
          {/* Renkler yeşilden maviye güncellendi */}
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-5">
            {t('hero.tag')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg text-slate-600 max-w-xl">
            {t('hero.description')}
          </p>
        </div>

        {/* Sağ: Görsel */}
        <div className="w-full flex items-center justify-center md:order-2">
          <div className="relative w-full max-w-md">
            {/* Dekoratif Arka Şekil - Rengi yeşilden maviye güncellendi */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-blue-100 rounded-2xl transform -rotate-6 z-0"></div>
            
            {/* Ana Görsel */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg w-full aspect-[4/3] z-10">
              <Image
                src="/images/sertifika2.jpg"
                alt="Çınar Deri El Yapımı Çanta" // Bu alt metnini projenize uygun bir metinle güncellemeyi unutmayın
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BakimPortfolio;