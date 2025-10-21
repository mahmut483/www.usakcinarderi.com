import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function Introduction() {
  const t = useTranslations('Introduction');
  const locale = useLocale();

  return (
    // 1. Bölüme daha fazla dikey boşluk ve temiz bir arka plan eklendi.
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white">
      {/* Sütunlar arasına daha fazla boşluk eklendi */}
      <div className="items-center grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Sol içerik - Daha güçlü tipografi ve modern renk paleti */}
        <div className="text-slate-800">
          <p className="font-semibold text-blue-600 uppercase tracking-wider mb-4">
            {t('title')}
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter text-slate-900 mb-8">
            {t('title2')}
            <br />
            {t('title3')}
            <br />
            {t('title4')}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            {t('text')}
          </p>

          {/* 2. Butonlar - Modern ve etkileşimli stiller */}
          <div className="flex flex-wrap gap-5">
            <Link
              href={`/${locale}/ourFactory`}
              className="inline-block px-8 py-4 font-semibold bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1"
            >
              {t('button1')}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-block px-8 py-4 font-semibold bg-transparent border-2 border-slate-300 text-slate-700 rounded-xl transition-all duration-300 ease-in-out hover:border-slate-400 hover:text-slate-900 hover:bg-slate-100 hover:-translate-y-1"
            >
              {t('button2')}
            </Link>
          </div>
        </div>

        {/* 3. Sağ görsel - Derinlik ve "tasarım" hissi katıldı */}
        <div className="relative h-full w-full">
          {/* Arkadaki dekoratif şekil */}
          <div className="absolute z-0 w-full h-full bg-slate-100/80 rounded-3xl -rotate-3 transition-transform duration-500 ease-in-out hover:rotate-0" />
          
          {/* Öndeki asıl resim */}
          <div className="relative z-10 group aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/img4.jpg"
              alt="Fabrikamızdan bir görüntü"
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}