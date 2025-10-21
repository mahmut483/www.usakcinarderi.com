import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

// Renderlar arasında değişmeyen statik veri dışarı alındı
const IMAGES = [
  '/images/img12.jpg',
  '/images/img6.jpg',
  '/images/img7.jpg',
  '/images/img14.jpg',
] as const;

export default function Headline() {
  const t = useTranslations('Headline');

  return (
    // Ana section, içeriği daraltan max-w-* sınıfı OLMADAN, sadece padding'leri içerir.
    // Bu, orijinal tam genişlikli yapıyı korur.
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 xl:px-24 mt-20 bg-slate-50/75 overflow-hidden">
      
      {/* Üst metin bölümü (Orijinal yapıya sadık) */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 mb-16 md:mb-20">
        
        {/* Başlık - Modern tipografi */}
        <div className="w-full lg:w-3/5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight text-slate-900">
            {t('title')}
            <br />
            {/* Alt başlık için estetik vurgu */}
            <span className="relative inline-block">
              {t('subTitle')}
              <span 
                className="absolute -bottom-2 left-0 h-1.5 w-2/3 bg-blue-500" 
                aria-hidden="true" 
              />
            </span>
          </h1>
        </div>

        {/* Sağ açıklama - Modern renkler */}
        <div className="w-full lg:w-2/5 text-slate-600 text-lg leading-relaxed lg:pt-2">
          <p>{t('rightText')}</p>
        </div>
      </div>

      {/* 
        Görsel Alanı - Mobil için yatay kaydırmalı, büyük ekran için grid.
        Büyük ekranda tam genişliğe yayılan grid yapısı korunur.
      */}
      <div 
        className="
          flex flex-nowrap gap-5 pb-4 -mx-4 px-4  /* Mobil için negatif margin ve padding hilesi */
          overflow-x-auto snap-x snap-mandatory 
          sm:grid sm:grid-cols-2 md:grid-cols-4 sm:gap-6 md:gap-8 
          sm:mx-0 sm:px-0 sm:overflow-visible sm:pb-0 /* Büyük ekranda hileyi sıfırla */
        "
      >
        {IMAGES.map((src, index) => (
          <div
            key={src}
            className="
              w-4/5 flex-shrink-0 snap-center 
              sm:w-full 
              group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2
            "
          >
            <Image
              src={src}
              alt={`Galeri Görsel ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 25vw"
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              quality={90}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </section>
  ); 
}
