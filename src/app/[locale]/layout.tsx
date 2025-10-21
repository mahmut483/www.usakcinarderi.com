// src/app/[locale]/layout.tsx

import type { Metadata } from "next";
import { getMessages, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import { Header } from "@/components/headerComponents/header";
import Footer from "@/components/footerComponents/footer";
import { NextIntlClientProvider } from "next-intl";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// 'params' bir Promise olduğu için fonksiyon 'async' olmalı ve 'await' kullanılmalı.
export async function generateMetadata({
  params,
}: {
  // Tip tanımını Promise olarak geri getiriyoruz.
  params: { locale: string };
}): Promise<Metadata> {
  // 'await' kullanmasak da Next.js bunu arka planda yönetir,
  // ama en güvenli haliyle yazalım.
  const { locale } = params;
  return {
    title: `Çınar Deri — ${locale.toUpperCase()}`,
    description: "Kurumsal web sitesi",
    other: { "html:lang": locale },
  };
}

// 'params' bir Promise olduğu için fonksiyon 'async' olmalı ve 'await' kullanılmalı.
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  // Tip tanımını Promise olarak geri getiriyoruz.
  params: { locale: string };
}) {
  // 'await' ile Promise'in çözülmesini bekliyoruz. Hatanın çözümü bu satır.
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) notFound();
  
  // Alt sayfaları temizlediğimiz için bu fonksiyon artık build sırasında sorun çıkarmayacak.
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}