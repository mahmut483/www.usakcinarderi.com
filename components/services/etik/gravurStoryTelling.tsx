"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GravurStoryTelling = () => {
  const t = useTranslations('Gravur');

  const stories = [
    {
      title: t('storytelling.stories.1.title'),
      description: t('storytelling.stories.1.description'),
      image: '/images/sertifika3.jpg',
    },
    {
      title: t('storytelling.stories.2.title'),
      description: t('storytelling.stories.2.description'),
      image: '/images/geriDonusum.jpg',
    },
    {
      title: t('storytelling.stories.3.title'),
      description: t('storytelling.stories.3.description'),
      image: '/images/sertifika5.jpg',
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-8 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
        {t('storytelling.title')}
      </h2>
      <div className="space-y-16">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col md:flex-row gap-8 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{story.title}</h3>
              <p className="text-gray-600 leading-relaxed">{story.description}</p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GravurStoryTelling; 