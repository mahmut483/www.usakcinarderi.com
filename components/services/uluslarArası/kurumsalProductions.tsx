
import React from 'react';
import { useTranslations } from 'next-intl';

const KurumsalProductions = () => {
  const t = useTranslations('Kurumsal');

  const steps = [
    {
      title: t('production.steps.1.title'),
      desc: t('production.steps.1.description'),
      icon: '✂️',
      label: t('production.steps.1.label'),
    },
    {
      title: t('production.steps.2.title'),
      desc: t('production.steps.2.description'),
      icon: '🎨',
    },
    {
      title: t('production.steps.3.title'),
      desc: t('production.steps.3.description'),
      icon: '🧵',
    },
    {
      title: t('production.steps.4.title'),
      desc: t('production.steps.4.description'),
      icon: '✨',
    },
    {
      title: t('production.steps.5.title'),
      desc: t('production.steps.5.description'),
      icon: '✅',
      label: t('production.steps.5.label'),
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-8 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
        {t('production.title')}
      </h2>
      <div className="relative flex flex-col items-start">
        {/* Dikey çizgi */}
        <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gray-300 z-0"></div>

        {/* Adımlar */}
        <ul className="relative z-10 w-full">
          {steps.map((step, index) => (
            <li key={index} className="mb-12 flex items-center w-full">
              {/* Adım Numarası/İkonu */}
              <div className="flex-shrink-0 z-10 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold mr-4 md:mr-6">
                {index + 1}
              </div>
              {/* İçerik Kutusu */}
              <div className={`flex-1 rounded-xl shadow-md p-6 bg-white ml-6 md:w-1/2 ${index % 2 === 1 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`}>
                <div className="flex items-center mb-2">
                   <span className="text-2xl mr-3">{step.icon}</span>
                   <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                {step.label && (
                  <span className="mt-3 inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                    {step.label}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default KurumsalProductions; 