'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// Renderlar arasında değişmeyen içerik dışarı alındı
const SECTIONS = [
  { titleKey: 'title1', textKey: 'text1', image: '/images/img2.jpg' },
  { titleKey: 'title2', textKey: 'text2', image: '/images/img9.jpg' },
  { titleKey: 'title3', textKey: 'text3', image: '/images/img11.jpg' },
  { titleKey: 'title4', textKey: 'text4', image: '/images/img13.jpg' },
] as const;

export default function StoryTelling() {
  const t = useTranslations('StoryTelling');
  const reduce = useReducedMotion();

  // reduce değiştiğinde tek seferde hesaplanan varyantlar
  const variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.6, ease: 'easeOut' },
    },
  } as const;

  return (
    <section
      className={[
        'relative isolate overflow-hidden',
        'bg-gradient-to-b from-[#F8FAFC] via-white to-[#F5F6F7]',
        'px-4 sm:px-6 lg:px-12 xl:px-24',
        'py-16 md:py-24',
      ].join(' ')}
    >
      {/* Çok hafif halo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 size-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-sky-100/10" />
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl space-y-16 md:space-y-24">
        {SECTIONS.map((section, index) => (
          <motion.div
            key={section.image}
            className={[
              'grid items-center gap-8 md:gap-12',
              index % 2 === 1
                ? 'md:grid-cols-[1fr_1fr]'
                : 'md:grid-cols-[1fr_1fr] md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1',
            ].join(' ')}
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* Görsel kutusu */}
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-b from-white/60 to-transparent"
              />
              <div
                className={[
                  'overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm',
                  'ring-1 ring-inset ring-slate-200/70',
                  'shadow-[0_12px_60px_rgba(0,0,0,0.06)]',
                ].join(' ')}
              >
                <div className="relative w-full aspect-[4/3] sm:aspect-video">
                  <Image
                    src={section.image}
                    alt={t(section.titleKey)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px"
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    quality={90}
                  />
                </div>
              </div>
            </div>

            {/* Metin alanı */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
                {t(section.titleKey)}
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
                {t(section.textKey)}
              </p>

              {/* İnce ayraç */}
              <div
                aria-hidden
                className="mt-8 h-px w-2/3 bg-gradient-to-r from-transparent via-slate-200 to-transparent"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
