import React from 'react';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import { Rubik } from 'next/font/google';
import '@fontsource-variable/plus-jakarta-sans';

import './globals.css';
import i18nConfig from '../../../i18nConfig';
import initTranslations from '@/app/utils/i18n';
import { generateMetadata as generateMetadataUtil } from '../utils/generateMetadata';
import ScrollToTop from '../components/ScrollToTop';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TranslationsProvider from '@/app/components/TranslationsProvider';

// Define valid locales for the application
const validLocales = ['en', 'ar', 'tr'];
const defaultLocale = i18nConfig.defaultLocale;

// Configure fonts
const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['400', '500', '700'],
});

export async function generateStaticParams() {
  return validLocales.map((lang) => ({ lang }));
}

// Validate locale parameter
function validateLocale(locale) {
  if (!validLocales.includes(locale)) {
    notFound();
  }
}

export async function generateMetadata() {
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';
  const currentLocale = headersList.get('x-locale') || defaultLocale;
  const namespaces = ['common'];

  const { t } = await initTranslations(currentLocale, namespaces);

  const siteTitle = t('siteTitle', { ns: 'common' });
  const siteTemplate = t('siteTemplate', {
    ns: 'common',
    defaultValue: `%s | ${siteTitle}`,
  });
  const siteDescription = t('siteDescription', { ns: 'common' });
  const siteKeywords = t('siteKeywords', {
    ns: 'common',
    returnObjects: true,
    defaultValue: [],
  });

  const ogImage = {
    url: `/images/og-${currentLocale}.jpg`,
    width: 1200,
    height: 630,
    alt: siteTitle,
  };

  return generateMetadataUtil({
    title: {
      default: siteTitle,
      template: siteTemplate,
    },
    description: siteDescription,
    keywords: siteKeywords,
    locale: currentLocale,
    path: pathname,
    openGraph: {
      type: 'website',
      title: siteTitle,
      description: siteDescription,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: [ogImage.url],
    },
  });
}

export default async function RootLayout({ children, params: { locale } }) {
  validateLocale(locale);
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const fontClasses = locale === 'ar' ? rubik.variable : '';

  const { resources } = await initTranslations(locale, [
    'footer',
    'header',
    'not-found',
    'content',
    'navigation',
  ]);

  return (
    <html lang={locale} dir={dir} className={fontClasses}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${dir} text-lg antialiased font-sans`}>
        <TranslationsProvider
          locale={locale}
          namespaces={['content', 'navigation', 'footer']}
          resources={resources}
        >
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
          <ScrollToTop />
        </TranslationsProvider>
      </body>
    </html>
  );
}
