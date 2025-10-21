
import React from 'react';
import { useTranslations } from 'next-intl';
import { CheckCircle, Shield, Zap, Clock } from 'lucide-react';

const BakimProcessing = () => {
  const t = useTranslations('BakimVeOnarim');

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: t('processing.features.1.title'),
      description: t('processing.features.1.description'),
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('processing.features.2.title'),
      description: t('processing.features.2.description'),
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('processing.features.3.title'),
      description: t('processing.features.3.description'),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('processing.features.4.title'),
      description: t('processing.features.4.description'),
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-8 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
        {t('processing.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="text-blue-600 mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BakimProcessing; 