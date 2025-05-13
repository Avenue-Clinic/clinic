import React from 'react';
import initTranslations from '@/app/utils/i18n';
import Hero from '@/app/components/Hero';
import ServicesSection from '@/app/components/ServicesSection';
import AboutSection from '@/app/components/AboutSection';
import TreatmentsSection from '@/app/components/TreatmentsSection';
import ExpertiseSection from '@/app/components/ExpertiseSection';
import WhyUs from '@/app/components/WhyUs';
import PatientJourneySection from '@/app/components/PatientJourneySection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import TransformationSection from '@/app/components/TransformationSection';
import ContactSection from '@/app/components/ContactSection';
import TranslationsProvider from '../components/TranslationsProvider';
import i18nConfig from '../../../i18nConfig';
import { notFound } from 'next/navigation';

const i18nNamespaces = [
  'content',
  'header',
  'footer',
  'navigation',
  'not-found',
];

// Validate locale parameter
export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

// Add metadata for SEO
export async function generateMetadata({ params: { locale } }) {
  const { t } = await initTranslations(locale, ['content']);

  return {
    title: t('content.meta.title'),
    description: t('content.meta.description'),
    alternates: {
      languages: {
        'x-default': '/',
        ...i18nConfig.locales.reduce((acc, l) => {
          acc[l] = `/${l}`;
          return acc;
        }, {}),
      },
    },
  };
}

export default async function Home({ params: { locale } }) {
  // Validate locale
  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }

  // Initialize translations
  const { resources } = await initTranslations(locale, [
    'content',
    'header',
    'footer',
    'navigation',
    'not-found',
  ]);

  // Determine text direction
  const isRTL = locale === 'ar';

  return (
    <TranslationsProvider
      locale={locale}
      namespaces={['content', 'header', 'footer', 'navigation', 'not-found']}
      resources={resources}
    >
      <main className={isRTL ? 'rtl' : 'ltr'}>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <TreatmentsSection />
        <ExpertiseSection />
        <WhyUs />
        <PatientJourneySection />
        <TestimonialsSection />
        <TransformationSection />
        <ContactSection />
      </main>
    </TranslationsProvider>
  );
}
