'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react'; // useEffect ve useReducedMotion kaldırıldı

// Swiper CSS
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// İkonlar
const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

// Render arasında değişmeyen veri
const SLIDES = [
  { id: 0, src: '/images/i0.jpg' },
  { id: 1, src: '/images/img9.jpg' },
  { id: 2, src: '/images/i1.jpg' },
  { id: 3, src: '/images/img2.jpg' },
] as const;

export default function SliderHeadline() {
  const t = useTranslations('SliderHeadline');
  const [activeIndex, setActiveIndex] = useState(0);

  // handleSlideChange fonksiyonu state'i gereksiz yere güncellememek için optimize edildi.
  const handleSlideChange = useCallback((swiper: any) => {
    const nextIndex = swiper.realIndex;
    setActiveIndex(prevIndex => (prevIndex !== nextIndex ? nextIndex : prevIndex));
  }, []);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-slate-900 group/slider">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade, Pagination]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        onSlideChange={handleSlideChange}
        // GÜNCELLENDİ: Autoplay artık doğrudan 4 saniye gecikmeyle çalışıyor.
        autoplay={{ 
          delay: 4000, 
          disableOnInteraction: false 
        }}
        speed={300}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="h-full"
      >
        {SLIDES.map(({ id, src }) => {
          const i = id + 1;
          const isFirst = id === 0;
          return (
            <SwiperSlide key={id} className="relative group/slide">
              {/* 1) Ken Burns -- GÜNCELLENDİ: Animasyon süresi 5000ms yapıldı */}
              <div className="absolute inset-0 scale-125 transition-transform duration-[5000ms] ease-out group-[:is(.swiper-slide-active)]/slide:scale-100">
                <Image
                  src={src}
                  alt={t(`title${i}`)}
                  fill
                  className="object-cover"
                  priority={isFirst}
                  sizes="100vw"
                />
              </div>

              {/* 2) Gradient Overlay */}
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* 3) İçerik */}
              <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white md:p-16 lg:p-24">
                <div className="max-w-3xl">
                  <h2 className="translate-y-8 opacity-0 transition-all duration-700 group-[:is(.swiper-slide-active)]/slide:translate-y-0 group-[:is(.swiper-slide-active)]/slide:opacity-100 group-[:is(.swiper-slide-active)]/slide:delay-200 text-4xl font-extrabold tracking-tighter md:text-6xl lg:text-7xl !leading-tight">
                    {t(`title${i}`)}
                  </h2>
                  <p className="translate-y-8 opacity-0 transition-all duration-700 group-[:is(.swiper-slide-active)]/slide:translate-y-0 group-[:is(.swiper-slide-active)]/slide:opacity-100 group-[:is(.swiper-slide-active)]/slide:delay-400 mt-4 max-w-xl text-lg text-neutral-200/90 md:text-xl">
                    {t(`text${i}`)}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* 4) Özel Kontroller */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <button className="swiper-button-prev-custom pointer-events-auto absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 opacity-0 group-hover/slider:opacity-100">
          <ArrowLeftIcon className="h-6 w-6" />
        </button>
        <button className="swiper-button-next-custom pointer-events-auto absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 opacity-0 group-hover/slider:opacity-100">
          <ArrowRightIcon className="h-6 w-6" />
        </button>

        <div className="swiper-pagination-custom pointer-events-auto absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-x-2">
          {SLIDES.map((slide) => (
            <div
              key={slide.id}
              className={`h-2 rounded-full bg-white transition-all duration-300 ${
                activeIndex === slide.id ? 'w-6 bg-opacity-100' : 'w-2 bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}