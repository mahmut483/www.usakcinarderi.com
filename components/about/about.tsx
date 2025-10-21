import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import {
  Scale,
  Rocket,
  LifeBuoy,
  Heart,
  ShieldCheck,
  Lightbulb,
  FileText,
  Clock,
  Puzzle,
  Globe,
} from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('About');
  const sectionImages = ['/images/img2.jpg', '/images/img15.jpg', '/images/img13.jpg', '/images/img4.jpg'];

  return (
    <>
      {/* Üst Kısım: 2025–26 kurumsal “soğuk beyaz” degrade + ince halo */}
      <div
        className={[
          'relative isolate w-full overflow-hidden',
          'bg-gradient-to-b from-[#F8FAFC] via-white to-[#F5F6F7]',
        ].join(' ')}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[64rem] rounded-full blur-3xl bg-sky-100/10" />
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
        </div>

        <section className="px-4 sm:px-6 md:px-12 lg:px-24 pt-28 md:pt-36 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              {t('heading')}
            </h1>
            <div className="mt-5 h-1 w-20 mx-auto rounded bg-sky-500/90" />
            <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-slate-700">
              {t('subheading')}
            </p>
          </div>
        </section>
      </div>

      {/* Hakkımızda: Görsel + Metin */}
      <section
        className={[
          'relative isolate',
          'px-4 sm:px-6 md:px-12 lg:px-24',
          'py-16 md:py-24',
          'bg-gradient-to-b from-white to-[#F7F8FA]',
        ].join(' ')}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Görsel kartı */}
          <div className="relative w-full md:w-1/2">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-b from-white/60 to-transparent"
            />
            <div className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-inset ring-slate-200/70 shadow-[0_12px_60px_rgba(0,0,0,0.06)]">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9]">
                <Image
                  src={sectionImages[0]}
                  alt={t('aboutImageAlt')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Metin */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="uppercase tracking-wide text-sky-700 text-xs sm:text-sm font-medium mb-3">
              {t('aboutSubtitle')}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              {t('aboutTitle')}
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-slate-700">
              {t('aboutText')}
            </p>
          </div>
        </div>
      </section>

      {/* Misyon / Vizyon / Değerler */}
      <section
        className={[
          'relative isolate',
          'px-4 sm:px-6 md:px-12 lg:px-24',
          'py-16 md:py-24',
          'bg-gradient-to-b from-[#F8FAFC] via-white to-[#F5F6F7]',
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: Scale, title: 'missionTitle', text: 'missionText' },
            { icon: Rocket, title: 'visionTitle', text: 'visionText' },
            { icon: LifeBuoy, title: 'valuesTitle', text: 'valuesText' },
          ].map(({ icon: Icon, title, text }, idx) => (
            <article
              key={idx}
              className="group relative isolate rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-inset ring-slate-200/70 p-6 md:p-7 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(0,0,0,0.07)]"
            >
              <div className="mb-4 flex items-center justify-center">
                <div className="inline-flex size-12 items-center justify-center rounded-full bg-sky-100 ring-1 ring-inset ring-sky-200/60">
                  <Icon className="size-6 text-sky-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-slate-900 text-center">
                {t(title)}
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 text-center">
                {t(text)}
              </p>

              {/* Alt ince ayraç */}
              <div
                aria-hidden
                className="mt-6 h-px w-3/5 mx-auto bg-gradient-to-r from-transparent via-slate-200 to-transparent"
              />
            </article>
          ))}
        </div>
      </section>

      {/* Temel Değerler Kartları */}
      <section
        className={[
          'relative isolate',
          'px-4 sm:px-6 md:px-12 lg:px-24',
          'py-16 md:py-24',
          'bg-gradient-to-b from-white to-[#F7F8FA]',
        ].join(' ')}
      >
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            {t('coreValuesHeading')}
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            {t('coreValuesSubheading')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { icon: Heart, title: 'card1Title', text: 'card1Text' },
            { icon: ShieldCheck, title: 'card2Title', text: 'card2Text' },
            { icon: Scale, title: 'card3Title', text: 'card3Text' },
            { icon: Lightbulb, title: 'card4Title', text: 'card4Text' },
            { icon: FileText, title: 'card5Title', text: 'card5Text' },
            { icon: Clock, title: 'card6Title', text: 'card6Text' },
            { icon: Puzzle, title: 'card7Title', text: 'card7Text' },
            { icon: Globe, title: 'card8Title', text: 'card8Text' },
          ].map(({ icon: Icon, title, text }, idx) => (
            <article
              key={idx}
              className="group relative isolate rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-inset ring-slate-200/70 p-6 md:p-7 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(0,0,0,0.07)]"
            >
              <div className="mb-4 flex items-center justify-center">
                <div className="inline-flex size-12 items-center justify-center rounded-full bg-sky-100 ring-1 ring-inset ring-sky-200/60">
                  <Icon className="size-6 text-sky-600" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900 text-center">
                {t(title)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 text-center">
                {t(text)}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
