// src/app/[locale]/blog/page.tsx

import React from 'react';
import { useTranslations } from 'next-intl';
import { BlogPostsClient } from '@/components/blog/BlogPostsClient';

interface Post {
  imageUrl: string;
  title: string;
  excerpt: string;
  content: string;
}

export default function BlogPage() {
  const t = useTranslations('Blog');

  // Metin içeriklerini JSON çevirilerinden alıyoruz
  const imageUrls = [
    '/images/i1.jpg', '/images/dikisMakinesi.jpg', '/images/bicak.jpg', '/images/i2.jpg', '/images/img5.jpg',
    '/images/img6.jpg', '/images/gravur.jpg', '/images/img15.jpg', '/images/img9.jpg', '/images/i0.jpg',
    '/images/img3.jpg', '/images/kemer.jpg', '/images/kitap.jpg', '/images/img13.jpg', '/images/img12.jpg',
    '/images/img4.jpg', '/images/isimli.jpg', '/images/img8.jpg', '/images/canta.jpg', '/images/i2.jpg'
  ];

  const posts: Post[] = imageUrls.map((url, idx) => ({
    imageUrl: url,
    title: t(`posts.${idx}.title`),
    excerpt: t(`posts.${idx}.excerpt`),
    content: t(`posts.${idx}.content`)
  }));

  return (
    <>
      {/* HERO — soğuk beyaz degrade + hafif halo */}
      <div className="relative isolate w-full overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#F5F6F7]">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 size-[64rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-sky-100/10" />
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
        </div>

        <section className="px-6 sm:px-6 md:px-12 lg:px-24 pt-28 md:pt-36 pb-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
            {t('blog')}
          </h1>
          <div className="h-1 w-20 mx-auto rounded bg-sky-600/90 mb-6" />
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-700 max-w-prose mx-auto">
            {t('mainTitle')}
          </p>
        </section>
      </div>

      {/* GRID alanı arkaplanı: beyaz → çok açık gri geçiş */}
      <main className="px-4 sm:px-6 md:px-12 lg:px-24 pt-8 md:pt-12 pb-20 bg-gradient-to-b from-white to-[#F7F8FA]">
        {/* Interaktif içeriği Client Component'e devrediyoruz */}
        <BlogPostsClient posts={posts} />
      </main>
    </>
  );
}
