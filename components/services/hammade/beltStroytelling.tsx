"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Performans için <img> yerine <Image> kullanıldı

const BeltStoryTelling = () => {
  const t = useTranslations('BeltAccessory');

  const stories = [
    {
      title: t('storytelling.stories.1.title'),
      description: t('storytelling.stories.1.description'),
      image: '/images/ciftlik.jpg',
    },
    {
      title: t('storytelling.stories.2.title'),
      description: t('storytelling.stories.2.description'),
      image: '/images/sertifika2.jpg',
    },
    {
      title: t('storytelling.stories.3.title'),
      description: t('storytelling.stories.3.description'),
      image: '/images/geriDonusum.jpg',
    },
  ];

  return (
    // 1. Ana Konteyner: Daha ferah ve modern bir his için güncellendi.
    <section className="relative w-full bg-white py-24 sm:py-32 overflow-hidden">
      {/* İnce "Aurora" Arka Plan Efekti */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80rem] h-[80rem] bg-gradient-radial from-violet-50/50 to-white/0 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Başlık Alanı */}
        <div className="max-w-3xl mx-auto text-center mb-20 sm:mb-24">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {t('storytelling.title')}
          </h2>
        </div>

        {/* 2. Hikaye Akışı: Daha fazla dikey boşlukla ayrıştırıldı. */}
        <div className="space-y-24">
          {stories.map((story, index) => (
            // 3. Asimetrik Grid Düzeni
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 items-center"
            >
              {/* 4. Görsel Alanı: Katmanlı ve etkileşimli. */}
              <div className={`w-full ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className="group relative w-full max-w-lg mx-auto">
                   <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-violet-200 to-fuchsia-200 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-50 group-hover:rotate-3" />
                   <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/10 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1">
                      <Image
                        src={story.image}
                        alt={story.title}
                        width={700}
                        height={500}
                        className="object-cover w-full aspect-[4/3]"
                      />
                   </div>
                </div>
              </div>

              {/* 5. Metin Alanı: Stilize edilmiş sıra numarası ile. */}
              <div className="relative w-full">
                {/* Dekoratif Sıra Numarası */}
                <span className="absolute -top-12 -left-4 text-[6rem] font-black text-slate-100/80 -z-10">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                  {story.title}
                </h3>
                <p className="text-lg text-slate-600 leading-8">
                  {story.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeltStoryTelling;