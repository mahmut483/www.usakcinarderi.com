import React from 'react';
import { useTranslations } from 'next-intl';

// İkonlar
const IconCut = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.473 9 7.321M7.848 8.473 4.5 12m3.348-3.527L9 9.679m-1.152-.206L12 6l3.348 3.527m-3.348 2.322L9 14.321m-1.152-.206L4.5 12m3.348 2.322L9 12.001m2.152-2.322L12 12m3.848-3.527L15 7.321m-3.152.206L12 6l-3.348 3.527m3.348 2.322L15 14.321m-3.152-.206L12 12m.152-2.322L12 9.679m3.848-1.206L19.5 12m-3.652 2.322L15 12.001m-2.152 2.322L12 12m-3.848 3.527L9 16.679m2.152-.206L12 18l3.348-3.527m-3.348-2.322L9 9.679m-1.152.206L4.5 12" />
  </svg>
);
const IconPaint = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.47 2.118v-.457a2.25 2.25 0 0 1 1.135-2.012A3 3 0 0 0 9.53 16.122ZM12 3v14.25a1.5 1.5 0 0 0 1.5 1.5h1.5a1.5 1.5 0 0 0 1.5-1.5V3M12 3h3.75m-3.75 0h-3.75" />
  </svg>
);
const IconStitch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
  </svg>
);
const IconFinish = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
  </svg>
);
const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const WalletProductionSteps = () => {
  const t = useTranslations('HandmadeWallet');
  const steps = [
    { key: '1', icon: <IconCut /> },
    { key: '2', icon: <IconPaint /> },
    { key: '3', icon: <IconStitch /> },
    { key: '4', icon: <IconFinish /> },
    { key: '5', icon: <IconCheck /> },
  ];

  return (
    <section className="relative w-full bg-white py-24 sm:py-32 overflow-hidden">
      {/* Arka plan efekti */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-radial from-sky-100/50 to-white/0 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="max-w-3xl mx-auto text-center mb-20 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            {t('production.title')}
          </h2>
        </div>

        {/* Zaman çizgisi */}
        <div className="relative">
          <div aria-hidden="true" className="absolute hidden sm:block w-px bg-slate-200 h-full left-1/2 -translate-x-1/2" />

          <ul className="space-y-16">
            {steps.map((step, index) => (
              <li key={index} className="relative">
                <div className="flex flex-col sm:flex-row items-start">
                  {/* Nokta + ikon */}
                  <div className="flex-shrink-0 flex items-center justify-center relative sm:absolute sm:left-1/2 sm:-translate-x-1/2 mb-6 sm:mb-0">
                    <div className="absolute w-12 h-12 bg-sky-500/20 rounded-full blur-lg" />
                    <div className="relative w-10 h-10 rounded-full border-2 border-white bg-sky-500 text-white flex items-center justify-center shadow-md">
                      {step.icon}
                    </div>
                  </div>

                  {/* Kart */}
                  <div
                    className={`
                      w-full sm:w-[calc(50%-2.5rem)] rounded-2xl p-6
                      bg-gray-200 backdrop-blur-xl border border-white/50
                      shadow-lg shadow-slate-900/5
                      transition-all duration-300 ease-out
                      hover:shadow-sky-600/10 hover:scale-[1.02] hover:bg-white
                      ${index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto sm:text-right'}
                    `}
                  >
                    {/* Sadece başlık, “step” ve “label” tamamen kaldırıldı */}
                    <div className={`flex items-baseline mb-3 ${index % 2 !== 0 ? 'sm:justify-end' : ''}`}>
                      <h3 className="text-xl font-bold text-slate-800">
                        {t(`production.steps.${step.key}.title`)}
                      </h3>
                    </div>

                    <p className="text-slate-600 leading-relaxed">
                      {t(`production.steps.${step.key}.description`)}
                    </p>
                    {/* Etiket yok. */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WalletProductionSteps;
