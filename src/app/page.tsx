// DOSYA YOLU: src/app/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Gerekli dil bilgilerini doğrudan buraya yazıyoruz.
const locales = ['tr', 'en', 'ru', 'it'];
const defaultLocale = 'tr';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const browserLanguage = navigator.language.split('-')[0];
    const preferredLocale =
      locales.find((l) => l === browserLanguage) || defaultLocale;
    router.replace(`/${preferredLocale}`);
  }, [router]);

  return <p>Yönlendiriliyorsunuz...</p>;
}