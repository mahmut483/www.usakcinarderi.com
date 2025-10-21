import React from 'react';
import { useTranslations } from 'next-intl';

// 1. Emoji'ler yerine profesyonel, tutarlı SVG ikonlar tanımlıyoruz
const IconCut = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m9.25 2.25.341 1.024a.75.75 0 0 0 .97 1.024l1.024.341 1.024-.341a.75.75 0 0 0 .97-1.024L13.75 2.25l-.341-1.024a.75.75 0 0 0-1.94 0L11.25 2.25 9.25 2.25Z M6.125 4.875l.341 1.024a.75.75 0 0 0 .97 1.024l1.024.341 1.024-.341a.75.75 0 0 0 .97-1.024L10.375 4.875l-.341-1.024a.75.75 0 0 0-1.94 0L7.875 4.875Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a8.962 8.962 0 0 0 5.094-1.686l-1.415-1.415a6 6 0 1 0-7.359-7.359l-1.415-1.415A8.962 8.962 0 0 0 3 12c0 4.97 4.03 9 9 9Z" /></svg>;
const IconPaint = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.47 2.118v-.457a2.25 2.25 0 0 1 1.135-2.012A3 3 0 0 0 9.53 16.122ZM12 3v14.25a1.5 1.5 0 0 0 1.5 1.5h1.5a1.5 1.5 0 0 0 1.5-1.5V3M12 3h3.75m-3.75 0h-3.75" /></svg>;
const IconStitch = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" /></svg>;
const IconFinish = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /></svg>;
const IconCheck = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>;

const BeltProductions = () => {
  const t = useTranslations('BeltAccessory');

  const steps = [
    {
      title: t('production.steps.1.title'),
      desc: t('production.steps.1.description'),
      icon: <IconCut />, // Emoji değiştirildi
      label: t('production.steps.1.label'),
    },
    {
      title: t('production.steps.2.title'),
      desc: t('production.steps.2.description'),
      icon: <IconPaint />, // Emoji değiştirildi
    },
    {
      title: t('production.steps.3.title'),
      desc: t('production.steps.3.description'),
      icon: <IconStitch />, // Emoji değiştirildi
    },
    {
      title: t('production.steps.4.title'),
      desc: t('production.steps.4.description'),
      icon: <IconFinish />, // Emoji değiştirildi
    },
    {
      title: t('production.steps.5.title'),
      desc: t('production.steps.5.description'),
      icon: <IconCheck />, // Emoji değiştirildi
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
                   {/* 2. İkon render'lama kısmı SVG'lere uygun olarak güncellendi */}
                   <div className="text-blue-600 mr-3">{step.icon}</div>
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

export default BeltProductions;