import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';

const GravurCTA = () => {
  const t = useTranslations('Gravur');
  const locale = useLocale();

  return (
    <section className="w-full bg-slate-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
          
          {/* Sol: Metin */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              {t('cta.title')}
            </h2>
            <p className="text-slate-600 text-lg md:text-xl max-w-3xl">
              {t('cta.description')}
            </p>
          </div>

          {/* Sağ: Buton */}
          <div className="flex-shrink-0 mt-6 md:mt-0">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg focus:ring-4 focus:ring-blue-300 text-lg"
            >
              {t('cta.contactButton')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GravurCTA;