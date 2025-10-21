// src/app/[locale]/projects/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Wrench, Clipboard, MessageSquare, CheckCircle } from 'lucide-react';
import Video from '../homePage/video/video';

export default function ProjectsPage() {
  const t = useTranslations('Project');
  const locale = useLocale();

  const quickProjects = [
    { key: 'cuzdan',   href: `/${locale}/digerHizmetler/importAndExport`,         image: '/images/gemi.jpg' },
    { key: 'kemer',    href: `/${locale}/digerHizmetler/ourLeatherResources`,     image: '/images/fabrika3.jpg' },
    { key: 'canta',    href: `/${locale}/digerHizmetler/ourProductionProcess`,    image: '/images/dikisMakinesi.jpg' },
    { key: 'bakim',    href: `/${locale}/digerHizmetler/qualityAndCertifications`,image: '/images/i2.jpg' },
    { key: 'gravur',   href: `/${locale}/digerHizmetler/legalComplianceAndEthics`, image: '/images/gravur.jpg' },
    { key: 'kurumsal', href: `/${locale}/digerHizmetler/internationalTrade`,      image: '/images/ticaret1.jpg' },
  ]; 

  // ortak sizes
  const sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

  return (
    <>
      {/* HERO — soğuk beyaz degrade + ince halo */}
      <div className="relative isolate w-full overflow-hidden bg-gradient-to-b bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 size-[64rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-sky-100/10" />
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
        </div>

        <section className="py-16 md:py-20 lg:py-24 pt-28 md:pt-36 px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              {t('projects.featured.title')}
            </h1>
            <div className="mt-5 h-1 w-20 mx-auto rounded bg-sky-500/90" />
            <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-slate-700 max-w-prose mx-auto">
              {t('projects.featured.description')}
            </p>
          </div>
        </section>
      </div>

      {/* ÖNE ÇIKAN 2 PROJE — LCP adayları */}
      <section className="pb-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F7F8FA]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
          {quickProjects.slice(0, 2).map(({ key, href, image }) => (
            <article
              key={key}
              className="group relative isolate flex flex-col overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-inset ring-slate-200/70 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(0,0,0,0.07)]"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={image}
                  alt={t(`projects.list.${key}.title`)}
                  fill
                  sizes={sizes}
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900 mb-2">
                  {t(`projects.list.${key}.title`)}
                </h3>
                <div className="w-10 h-0.5 bg-sky-600/90 rounded-full mb-3" />
                <p className="text-slate-600 text-sm md:text-base leading-relaxed flex-1">
                  {t(`projects.list.${key}.description`)}
                </p>
                <Link
                  href={href}
                  className="mt-6 self-start inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-sky-700 transition-colors"
                >
                  {t('projects.buttons.discover')}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TÜM PROJELER */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
            {t('projects.all.title')}
          </h2>
          <p className="text-slate-600">{t('projects.all.description')}</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {quickProjects.map(({ key, href, image }) => (
            <Link
              key={key}
              href={href}
              className="group relative isolate flex flex-col overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-inset ring-slate-200/70 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative w-full h-44 md:h-48 overflow-hidden">
                <Image
                  src={image}
                  alt={t(`projects.list.${key}.title`)}
                  fill
                  sizes={sizes}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 mb-2">
                  {t(`projects.list.${key}.title`)}
                </h3>
                <div className="w-8 h-0.5 bg-sky-600/90 rounded-full mb-2" />
                <p className="text-slate-600 text-sm md:text-base mb-4">
                  {t(`projects.list.${key}.description`)}
                </p>
                <span className="mt-auto text-sky-700 text-sm font-medium hover:underline underline-offset-4">
                  {t('projects.buttons.more')}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Video bölümü (ayrı bileşen) */}
      <Video url="/videos/vid1.mp4" />

      {/* YAKLAŞIMIMIZ */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F7F8FA]">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Wrench className="mx-auto mb-4 h-12 w-12 text-sky-600" />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            {t('approach.title')}
          </h2>
          <p className="text-slate-700 text-base sm:text-lg">
            {t('approach.description')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { Icon: Clipboard, title: 'approach.steps.discovery.title', desc: 'approach.steps.discovery.description' },
            { Icon: MessageSquare, title: 'approach.steps.communication.title', desc: 'approach.steps.communication.description' },
            { Icon: CheckCircle, title: 'approach.steps.quality.title', desc: 'approach.steps.quality.description' },
          ].map(({ Icon, title, desc }, i) => (
            <article
              key={i}
              className="group relative isolate rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-inset ring-slate-200/70 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(0,0,0,0.07)] text-center"
            >
              <div className="mb-4 flex items-center justify-center">
                <div className="inline-flex size-12 items-center justify-center rounded-full bg-sky-100 ring-1 ring-inset ring-sky-200/60">
                  <Icon className="h-6 w-6 text-sky-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">
                {t(title)}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base">
                {t(desc)}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
