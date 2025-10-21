
import React from 'react';
import { useTranslations } from 'next-intl';
import { Shield, Clock, Star, Heart } from 'lucide-react';

const BakimFeatures = () => {
  const t = useTranslations('BakimVeOnarim');

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('features.items.1.title'),
      description: t('features.items.1.description'),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('features.items.2.title'),
      description: t('features.items.2.description'),
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: t('features.items.3.title'),
      description: t('features.items.3.description'),
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: t('features.items.4.title'),
      description: t('features.items.4.description'),
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-8 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
        {t('features.title')}
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

export default BakimFeatures; 