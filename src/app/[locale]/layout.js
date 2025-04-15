// src/app/[locale]/layout.js
import { getDirection, locales, getDictionary } from '../utils/i18n';
import { inter } from '../fonts';
import { notFound } from 'next/navigation';
import Header from '../components/Header';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }) {
  // Check if the locale is supported
  if (!locales.includes(locale)) {
    notFound();
  }

  const dir = getDirection(locale);
  const dictionary = await getDictionary(locale);

  return (
    <html lang={locale} dir={dir} className={inter.variable}>
      <body className={`${dir} font-sans antialiased`}>
        <Header dictionary={dictionary} locale={locale} />
        {children}
      </body>
    </html>
  );
}