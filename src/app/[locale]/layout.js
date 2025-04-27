// src/app/[locale]/layout.js
import React from 'react';
import { Rubik, Poppins, Plus_Jakarta_Sans } from 'next/font/google';
import Header from '../components/Header';
import { locales } from '../utils/i18n';
import { getDictionary } from '../utils/i18n';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: ['400', '500', '700'],
});

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['400', '500', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '700'],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }) {
  // Validate locale
  if (!locales.includes(locale)) {
    locale = 'en'; // Default to English if locale is not supported
  }

  const dictionary = await getDictionary(locale);
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={`${plusJakartaSans.variable} ${rubik.variable}`} style={{ fontFamily: locale === 'ar' ? 'var(--font-rubik)' : 'var(--font-plus-jakarta-sans)' }}>
      <body className={`${dir} text-lg antialiased`} style={{ fontFamily: locale === 'ar' ? 'var(--font-rubik)' : 'var(--font-plus-jakarta-sans)' }}>
        <Header dictionary={dictionary} locale={locale} />
        {children}
      </body>
    </html>
  );
}