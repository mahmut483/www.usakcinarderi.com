// src/app/[locale]/hizmetlerimiz/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

export default function ServicesPage() {
  const t = useTranslations('Services');
  const locale = useLocale();

  return (
    <>
      {/* HERO — soğuk beyaz degrade + ince halo */}
      <div className="relative isolate w-full overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#F5F6F7]">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 size-[64rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-sky-100/10" />
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
        </div>

        <section className="px-4 sm:px-6 md:px-12 lg:px-24 pt-28 md:pt-36 pb-16 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              {t('hizmetlerimiz')}
            </h1>
            <div className="mt-5 h-1 w-20 mx-auto rounded bg-sky-500/90" />
            <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-slate-700">
              {t('mainTitle')}
            </p>
          </div>
        </section>
      </div>

      {/* HİZMET KARTLARI — ring + soft shadow, temiz grid */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-16 bg-gradient-to-b from-white to-[#F7F8FA]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Kart 1 */}
          <article className="group relative isolate flex flex-col overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-inset ring-slate-200/70 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(0,0,0,0.07)] scroll-mt-[80px]">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/gemi.jpg"
                alt="Hizmet Görsel 1"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 mb-2">{t('title1')}</h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 flex-1">{t('text1')}</p>
              <div className="mt-4">
                <Link href={`/${locale}/digerHizmetler/importAndExport`} className="text-sky-700 hover:underline underline-offset-4">
                  {t('gozAt')}
                </Link>
              </div>
            </div>
          </article>

          {/* Kart 2 */}
          <article className="group relative isolate flex flex-col overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-inset ring-slate-200/70 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(0,0,0,0.07)] scroll-mt-[80px]">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/fabrika3.jpg"
                alt="Hizmet Görsel 2"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 mb-2">{t('title2')}</h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 flex-1">{t('text2')}</p>
              <div className="mt-4">
                <Link href={`/${locale}/digerHizmetler/ourLeatherResources`} className="text-sky-700 hover:underline underline-offset-4">
                  {t('gozAt')}
                </Link>
              </div>
            </div>
          </article>

          {/* Kart 3 */}
          <article className="group relative isolate flex flex-col overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-inset ring-slate-200/70 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(0,0,0,0.07)] scroll-mt-[80px]">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/dikisMakinesi.jpg"
                alt="Hizmet Görsel 3"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 mb-2">{t('title3')}</h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 flex-1">{t('text3')}</p>
              <div className="mt-4">
                <Link href={`/${locale}/digerHizmetler/ourProductionProcess`} className="text-sky-700 hover:underline underline-offset-4">
                  {t('gozAt')}
                </Link>
              </div>
            </div>
          </article>

          {/* Kart 4 */}
          <article className="group relative isolate flex flex-col overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-inset ring-slate-200/70 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(0,0,0,0.07)] scroll-mt-[80px]">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/sertifika3.jpg"
                alt="Hizmet Görsel 4"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 mb-2">{t('title4')}</h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 flex-1">{t('text4')}</p>
              <div className="mt-4">
                <Link href={`/${locale}/digerHizmetler/qualityAndCertifications`} className="text-sky-700 hover:underline underline-offset-4">
                  {t('gozAt')}
                </Link>
              </div>
            </div>
          </article>

          {/* Kart 5 */}
          <article className="group relative isolate flex flex-col overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-inset ring-slate-200/70 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(0,0,0,0.07)] scroll-mt-[80px]">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/geriDonusum.jpg"
                alt="Hizmet Görsel 5"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 mb-2">{t('title5')}</h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 flex-1">{t('text5')}</p>
              <div className="mt-4">
                <Link href={`/${locale}/digerHizmetler/legalComplianceAndEthics`} className="text-sky-700 hover:underline underline-offset-4">
                  {t('gozAt')}
                </Link>
              </div>
            </div>
          </article>

          {/* Kart 6 */}
          <article className="group relative isolate flex flex-col overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-inset ring-slate-200/70 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(0,0,0,0.07)] scroll-mt-[80px]">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/ticaret1.jpg"
                alt="Hizmet Görsel 6"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 mb-2">{t('title6')}</h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 flex-1">
                {t('text6')}
              </p>
              <div className="mt-4">
                <Link href={`/${locale}/digerHizmetler/internationalTrade`} className="text-sky-700 hover:underline underline-offset-4">
                  {t('gozAt')}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-6xl mx-auto text-center pb-12">
        <Link
          href={`/${locale}/contact`}
          className="inline-block rounded-lg bg-sky-600 px-6 sm:px-8 py-2.5 sm:py-3 text-white font-semibold shadow hover:bg-sky-700 transition"
        >
          {t('button')}
        </Link>
      </div>
    </>
  );
}
