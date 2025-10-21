// src/components/blog/BlogPostsClient.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BlogModal } from './blogModal';
import { useTranslations } from 'next-intl';

interface Post {
  imageUrl: string;
  title: string;
  excerpt: string;
  content: string;
}

interface Props {
  posts: Post[];
}

export function BlogPostsClient({ posts }: Props) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const t = useTranslations('Blog');

  return (
    <>
      {/* Kartlar: 1 → 2 → 3 → 4 kolon; ring + soft shadow; modern oranlar */}
      <div
        className={[
          'mx-auto w-full max-w-7xl',
          'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
          'gap-6 md:gap-8'
        ].join(' ')}
      >
        {posts.map((post, idx) => (
          <article
            key={idx}
            className={[
              'group relative isolate flex flex-col overflow-hidden',
              'rounded-2xl bg-white/90 backdrop-blur-sm',
              'ring-1 ring-inset ring-slate-200/70',
              'shadow-[0_10px_40px_rgba(0,0,0,0.05)]',
              'transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(0,0,0,0.07)]'
            ].join(' ')}
          >
            {/* Görsel: sabit oran ve yumuşak zoom hover */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority={idx < 4}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Metin alanı */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-600 mb-4 flex-1 line-clamp-3">
                {post.excerpt}
              </p>
              <button
                onClick={() => setSelectedIdx(idx)}
                className="self-start text-sky-700 text-sm md:text-[0.95rem] font-medium hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 rounded px-1"
                aria-label={t('devaminiOku')}
              >
                {t('devaminiOku')}
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selectedIdx !== null && (
        <BlogModal
          post={posts[selectedIdx]}
          onClose={() => setSelectedIdx(null)}
        />
      )}
    </>
  );
}
