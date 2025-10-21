import React from 'react';
import { useTranslations } from 'next-intl';
import { CheckCircle, Shield, Zap, Clock } from 'lucide-react';

const BeltProcessing = () => {
  const t = useTranslations('BeltAccessory');

  const features = [
    {
      icon: <CheckCircle className="h-7 w-7 text-sky-600" />,
      title: t('processing.features.1.title'),
      description: t('processing.features.1.description'),
    },
    {
      icon: <Shield className="h-7 w-7 text-sky-600" />,
      title: t('processing.features.2.title'),
      description: t('processing.features.2.description'),
    },
    {
      icon: <Zap className="h-7 w-7 text-sky-600" />,
      title: t('processing.features.3.title'),
      description: t('processing.features.3.description'),
    },
    {
      icon: <Clock className="h-7 w-7 text-sky-600" />,
      title: t('processing.features.4.title'),
      description: t('processing.features.4.description'),
    },
  ];

  return (
    <section className="w-full bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Başlık Alanı */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {t('processing.title')}
          </h2>
        </div>

        {/* 1. Geliştirilmiş Grid Yapısı */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                relative flex flex-col items-start bg-white p-8 rounded-3xl
                shadow-[0px_0px_0px_1px_rgba(0,0,0,0.03),_0px_2px_4px_rgba(0,0,0,0.03),_0px_12px_24px_rgba(0,0,0,0.03)]
                transition-all duration-300 ease-in-out
                hover:shadow-[0px_0px_0px_1px_rgba(14,165,233,0.1),_0px_12px_24px_rgba(14,165,233,0.1)]
                hover:-translate-y-1.5
              "
            >
              {/* 2. Görseldeki gibi "Aura" Efektli İkon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full mb-6 bg-gradient-to-br from-white to-sky-100 ring-1 ring-inset ring-sky-100">
                {feature.icon}
              </div>

              {/* 3. Rafine Edilmiş Tipografi */}
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-base leading-relaxed text-slate-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeltProcessing;