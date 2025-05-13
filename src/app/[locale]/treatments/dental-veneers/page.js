import initTranslations from '@/app/utils/i18n';
import DentalHero from '@/app/components/DentalHero';
import BenefitsDentalImplants from '@/app/components/BenefitsDentalImplants';
import TransformationSection from '@/app/components/TransformationSection';
import PatientJourneySection from '@/app/components/PatientJourneySection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import LogoShowcase from '@/app/components/LogoShowcase';
import ContactSection from '@/app/components/ContactSection';
import TranslationsProvider from '@/app/components/TranslationsProvider';

export async function generateMetadata({ params: { locale } }) {
  const { t } = await initTranslations(locale, ['content']);

  const ogImage = {
    url: '/images/meta/dental-veneers.jpg',
    width: 1200,
    height: 630,
    alt: t('treatments.dentalVeneers.meta.title'),
  };

  return {
    title: t('treatments.dentalVeneers.meta.title'),
    description: t('treatments.dentalVeneers.meta.description'),
    keywords: t('treatments.dentalVeneers.meta.keywords', { returnObjects: true }),
    locale,
    path: '/treatments/dental-veneers',
    openGraph: {
      type: 'website',
      title: t('treatments.dentalVeneers.meta.title'),
      description: t('treatments.dentalVeneers.meta.description'),
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('treatments.dentalVeneers.meta.title'),
      description: t('treatments.dentalVeneers.meta.description'),
      images: [ogImage.url],
    },
  };
}

export default async function DentalVeneersPage({ params: { locale } }) {
  const { resources } = await initTranslations(locale, ['content']);

  return (
    <TranslationsProvider locale={locale} namespaces={['content']} resources={resources}>
      <main>
        <DentalHero />
        <BenefitsDentalImplants />
        <TransformationSection />
        <PatientJourneySection />
        <TestimonialsSection />
        <LogoShowcase />
        <ContactSection />
      </main>
    </TranslationsProvider>
  );
}
