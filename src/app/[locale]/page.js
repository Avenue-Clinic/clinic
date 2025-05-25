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
import { generateMetadata as baseGenerateMetadata } from '@/app/utils/generateMetadata';

const i18nNamespaces = [
  'content',
  'header',
  'footer',
  'navigation',
  'not-found',
];

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }, { locale: 'ar' }];
}

// Add metadata for SEO
export async function generateMetadata({ params: { locale } }) {
  return baseGenerateMetadata({
    pageKey: 'home',
    locale,
    path: '/',
  });
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
