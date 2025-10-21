"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WalletStoryTelling = () => {
  const t = useTranslations('HandmadeWallet');

  const stories = [
    {
      title: t('storytelling.stories.1.title'),
      description: t('storytelling.stories.1.description'),
      image: '/images/ticaret1.jpg',
    },
    {
      title: t('storytelling.stories.2.title'),
      description: t('storytelling.stories.2.description'),
      image: '/images/ticaret2.jpg',
    },
    {
      title: t('storytelling.stories.3.title'),
      description: t('storytelling.stories.3.description'),
      image: '/images/gemi.jpg',
    },
  ];

  return (
    // 1. Bölüm arka planı ve boşlukları iyileştirildi
    <section className="w-full bg-white py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter mb-16 md:mb-24 text-center">
          {t('storytelling.title')}
        </h2>
        <div className="space-y-24">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }} // Animasyonun tetiklenmesi için daha iyi bir ayar
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col md:flex-row gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* 2. Metin Alanı - Katmanlı ve Dekoratif */}
              <div className="w-full md:w-1/2 relative">
                {/* Arka plan numarası */}
                <div 
                  aria-hidden="true" 
                  className={`absolute top-0 text-8xl lg:text-9xl font-black text-slate-100/80 -z-10 -translate-y-1/3 transition-all duration-300 group-hover:text-slate-200 ${
                    index % 2 === 1 ? 'md:-right-8' : 'md:-left-8'
                  }`}
                >
                  0{index + 1}
                </div>
                <div className="relative">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-5 tracking-tight">
                    {story.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>

              {/* 3. Görsel Alanı - Gelişmiş Stil ve Etkileşim */}
              <div className="w-full md:w-1/2">
                <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-slate-900/10 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-sky-600/10">
                  <Image // Next.js Image bileşeni kullanıldı
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Görsel üzerine gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WalletStoryTelling;