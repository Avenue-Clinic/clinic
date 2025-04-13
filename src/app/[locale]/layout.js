// src/app/[locale]/layout.js
import { getDirection, locales } from '@/app/utils/i18n';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params: { locale } }) {
  // Check if the locale is supported
  if (!locales.includes(locale)) {
    notFound();
  }

  const dir = getDirection(locale);

  return (
    <html lang={locale} dir={dir}>
      <body className={dir}>
        {children}
      </body>
    </html>
  );
}