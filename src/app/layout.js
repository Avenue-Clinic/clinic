// src/app/layout.js
import './globals.css';
import { defaultLocale } from './utils/i18n';
import { generateMetadata as generateMetadataUtil } from './utils/generateMetadata';
import { headers } from 'next/headers';
import ScrollToTop from './components/ScrollToTop';

export async function generateMetadata() {
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';
  const currentLocale = headersList.get('x-locale') || defaultLocale;

  const translations = {
    en: {
      title: 'Avenue Dental Clinic',
      template: '%s | Avenue Dental Clinic',
      description:
        'Premier dental care in Istanbul offering implants, cosmetic dentistry, and advanced dental treatments with international standards.',
      keywords: [
        'dental clinic istanbul',
        'dental implants turkey',
        'cosmetic dentistry istanbul',
        'dental treatment turkey',
        'dental tourism istanbul',
        'best dentist turkey',
      ],
    },
    tr: {
      title: 'Avenue Diş Kliniği',
      template: '%s | Avenue Diş Kliniği',
      description:
        "İstanbul'da implant, kozmetik diş hekimliği ve ileri dental tedaviler sunan, uluslararası standartlarda premier diş bakımı.",
      keywords: [
        'istanbul diş kliniği',
        'diş implantı',
        'estetik diş hekimliği',
        'dental tedavi',
        'diş turizmi',
        'en iyi diş hekimi',
      ],
    },
    ar: {
      title: 'عيادة أفينيو للأسنان',
      template: '%s | عيادة أفينيو للأسنان',
      description:
        'رعاية الأسنان المتميزة في اسطنبول، نقدم زراعة الأسنان، طب الأسنان التجميلي، وعلاجات الأسنان المتقدمة بمعايير دولية.',
      keywords: [
        'عيادة أسنان اسطنبول',
        'زراعة الأسنان تركيا',
        'طب الأسنان التجميلي',
        'علاج الأسنان تركيا',
        'سياحة الأسنان',
        'أفضل طبيب أسنان',
      ],
    },
  };

  const ogImage = {
    url: `/images/og-${currentLocale}.jpg`,
    width: 1200,
    height: 630,
    alt: translations[currentLocale].title,
  };

  return generateMetadataUtil({
    title: {
      default: translations[currentLocale].title,
      template: translations[currentLocale].template,
    },
    description: translations[currentLocale].description,
    keywords: translations[currentLocale].keywords,
    locale: currentLocale,
    path: pathname,
    openGraph: {
      type: 'website',
      title: translations[currentLocale].title,
      description: translations[currentLocale].description,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: translations[currentLocale].title,
      description: translations[currentLocale].description,
      images: [ogImage.url],
    },
  });
}

export default function RootLayout({ children }) {
  return (
    <html lang={headers().get('x-locale') || defaultLocale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
