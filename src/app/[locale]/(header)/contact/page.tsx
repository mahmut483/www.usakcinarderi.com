// src/app/[locale]/page.tsx
import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import ContactPage from '@/components/contact/contact';

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // 1) Params Promise'ını açıp locale'ı alın
  const { locale } = use(params);

  // 2) Server-side i18n'i başlatın
  setRequestLocale(locale);

  return (
    <div>
        <ContactPage/>
    </div>
  );
}
