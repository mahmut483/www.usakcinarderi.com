import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Building } from 'lucide-react';

const WalletCTA = () => {
  const t = useTranslations('HandmadeWallet');
  const locale = useLocale();

  return (
    <section className="w-full py-24 px-6 sm:px-8 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        {/* Başlık */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
          {t('cta.title')}
        </h2>

        {/* Açıklama */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
          {t('cta.description')}
        </p>

        {/* Buton */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base sm:text-lg py-3 px-8 sm:px-12 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Building className="w-5 h-5" />
            {t('cta.contactButton')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WalletCTA;
