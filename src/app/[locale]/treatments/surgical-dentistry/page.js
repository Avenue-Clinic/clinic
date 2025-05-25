import { generateMetadata as generateMetadataUtil } from '@/app/utils/generateMetadata';
import DentalHero from '@/app/components/DentalHero';
import BenefitsDentalImplants from '@/app/components/BenefitsDentalImplants';
import TransformationSection from '@/app/components/TransformationSection';
import PatientJourneySection from '@/app/components/PatientJourneySection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import LogoShowcase from '@/app/components/LogoShowcase';
import ContactSection from '@/app/components/ContactSection';
import { generateMetadata as baseGenerateMetadata } from '@/app/utils/generateMetadata';
import initTranslations from '@/app/utils/i18n';
import TranslationsProvider from '@/app/components/TranslationsProvider';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'tr' },
    { locale: 'ar' },
  ];
}

export async function generateMetadata({ params: { locale } }) {
  return baseGenerateMetadata({
    pageKey: 'surgical-dentistry',
    locale,
    path: '/treatments/surgical-dentistry',
  });
}

export default async function SurgicalDentistryPage({ params: { locale } }) {
  const { resources } = await initTranslations(locale, ['content']);

  return (
    <TranslationsProvider
      locale={locale}
      namespaces={['content']}
      resources={resources}
    >
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
