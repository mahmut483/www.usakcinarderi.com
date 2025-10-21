'use client';
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface BlogModalProps {
  post: {
    title: string;
    imageUrl: string;
    date?: string;
    readTime?: string;
    content: string;
  };
  onClose: () => void;
}

export function BlogModal({ post, onClose }: BlogModalProps) {
  const t = useTranslations('Blog');
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);

    const prevFocused = document.activeElement as HTMLElement;
    overlayRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', handleKey);
      prevFocused?.focus();
    };
  }, [onClose]);

  const labelId = 'blog-modal-title';

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelId}
      className={[
        'fixed inset-0 z-50 flex items-center justify-center',
        // Arkaplan: koyu blur + çok hafif mavi halo
        'bg-slate-900/50 backdrop-blur-sm',
        'px-4 sm:px-6'
      ].join(' ')}
      onClick={onClose}
      tabIndex={-1}
    >
      {/* Dekoratif halo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 size-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-sky-200/10" />
      </div>

      <div
        className={[
          'relative w-full max-w-4xl overflow-hidden',
          // Kart yüzeyi: cam hissi, ring + soft shadow
          'rounded-2xl bg-white/95 backdrop-blur ring-1 ring-inset ring-slate-200/70',
          'shadow-[0_20px_80px_rgba(0,0,0,0.18)]',
          'flex flex-col md:flex-row'
        ].join(' ')}
        onClick={e => e.stopPropagation()}
      >
        {/* Kapat butonu (köşede sabit) */}
        <button
          onClick={onClose}
          aria-label={t('close')}
          className={[
            'absolute right-3 top-3 z-10 inline-flex items-center justify-center',
            'size-9 rounded-full bg-white/90 text-slate-700',
            'ring-1 ring-inset ring-slate-200 shadow-sm',
            'hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400'
          ].join(' ')}
        >
          <X className="size-5" />
        </button>

        {/* Görsel bölümü */}
        <div className="relative h-56 w-full md:h-auto md:w-1/2">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {/* Üst parıltı */}
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
        </div>

        {/* İçerik bölümü */}
        <div className="flex flex-1 flex-col md:w-1/2 p-6 md:p-7">
          {/* Başlık */}
          <h2 id={labelId} className="mt-2 text-2xl md:text-[1.7rem] font-extrabold tracking-tight text-slate-900">
            {post.title}
          </h2>

          {/* Tarih ve okuma süresi */}
          {(post.date || post.readTime) && (
            <p className="mt-2 text-sm text-slate-500">
              {post.date}
              {post.date && post.readTime ? ' · ' : ''}
              {post.readTime}
            </p>
          )}

          {/* İçerik metni */}
          <div
            className={[
              'mt-4 flex-1 overflow-y-auto',
              'text-slate-700 leading-relaxed',
              // Uzun metinlerde okunabilirlik
              'prose prose-slate max-w-none prose-p:my-3 prose-img:rounded-xl'
            ].join(' ')}
          >
            {post.content}
          </div>

          {/* Alt kapat butonu */}
          <button
            onClick={onClose}
            className={[
              'mt-6 self-start rounded-lg',
              'border border-slate-200 bg-white px-4 py-2 text-slate-700',
              'hover:bg-slate-50',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400'
            ].join(' ')}
          >
            {t('close')}
          </button>
        </div>
      </div>
    </div>
  );
}
