

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';


export default function ProductionGalleryPlaceholder() {
  const t = useTranslations('GalleryItem');

  const galleryImages = [
    '/images/img3.jpg',
    '/images/img5.jpg',
    '/images/img6.jpg',
    '/images/img7.jpg',
    '/images/img8.jpg',
    '/images/img9.jpg',
  ];

  return (
    <section className="py-8 px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Başlık */}
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          {t('uretim')}
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          {t('aciklama')}
        </p>
      </div>

      {/* Galeri */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {galleryImages.map((src, idx) => (
          <div
            key={idx}
            className="relative rounded-lg overflow-hidden aspect-[4/5]"
          >
            <Image
              src={src}
              alt={`Galeri Görsel ${idx + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover"
              priority={idx === 0}
              quality={100}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
