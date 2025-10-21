'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { useReducedMotion } from 'framer-motion';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

type Props = { url: string };

// Hook olmayan sabit config (hook sırasını etkilemez)
const PLAYER_CONFIG = {
  file: {
    attributes: {
      preload: 'auto',
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
    },
  },
} as const;

export default function Video({ url }: Props) {
  const t = useTranslations('GalleryItem');
  const reduce = useReducedMotion();

  // CSR güvenliği: yalnızca mount sonrası oynat
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  return (
    <section
      className={[
        'relative isolate overflow-hidden',
        'bg-gradient-to-b from-[#F8FAFC] via-white to-[#F5F6F7]',
        'px-4 sm:px-6 lg:px-12 xl:px-24',
        'pt-12 md:pt-16 pb-16',
      ].join(' ')}
    >
      {/* Dekoratif halo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[60rem] rounded-full blur-3xl bg-sky-100/10" />
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
      </div>

      {/* Başlık ve açıklama */}
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          {t('uretim')}
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
          {t('aciklama')}
        </p>
      </div>

      {/* Video kartı */}
      <div className="max-w-6xl mx-auto">
        <div
          className={[
            'relative w-full aspect-video overflow-hidden',
            'rounded-2xl bg-white/90 backdrop-blur-sm',
            'ring-1 ring-inset ring-slate-200/70',
            'shadow-[0_12px_60px_rgba(0,0,0,0.06)]',
          ].join(' ')}
        >
          {/* İnce iç parıltı */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 to-transparent"
          />
          {/* isMounted false iken bile React ağaç yapısı sabit kalsın diye boş div render ediyoruz */}
          {isMounted ? (
            <ReactPlayer
              key={url}                 // URL değişince güvenli yeniden yükle
              url={url}
              playing={!reduce}         // reduce-motion kullanıcı tercihini saygıla
              loop
              muted
              width="100%"
              height="100%"
              style={{ position: 'absolute', inset: 0 }}
              config={PLAYER_CONFIG}
            />
          ) : (
            <div style={{ position: 'absolute', inset: 0 }} />
          )}
        </div>

        <div
          aria-hidden
          className="mx-auto mt-8 h-px w-2/3 bg-gradient-to-r from-transparent via-slate-200 to-transparent"
        />
      </div>
    </section>
  );
}
