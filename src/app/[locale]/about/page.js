import initTranslations from '@/app/utils/i18n';
import AboutHeader from '@/app/components/AboutHeader';
import AboutHero from '@/app/components/AboutHero';
import WhyUs from '@/app/components/WhyUs';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ContactSection from '@/app/components/ContactSection';
import PatientJourneySection from '@/app/components/PatientJourneySection';
import About1 from '@/app/components/About1';
import VisionSection from '@/app/components/VisionSection';
import TranslationsProvider from '@/app/components/TranslationsProvider';
import { generateMetadata as baseGenerateMetadata } from '@/app/utils/generateMetadata';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }, { locale: 'ar' }];
}

export async function generateMetadata({ params: { locale } }) {
  return baseGenerateMetadata({
    pageKey: 'about',
    locale,
    path: '/about',
  });
}

export default async function AboutPage({ params: { locale } }) {
  const { resources } = await initTranslations(locale, ['content']);

  return (
    <TranslationsProvider
      locale={locale}
      namespaces={['content']}
      resources={resources}
    >
      <main>
        <AboutHeader />
        <AboutHero />
        <About1 />
        <VisionSection />
        <PatientJourneySection />
        <WhyUs />
        <TestimonialsSection inverted={true} />
        <ContactSection />
      </main>
    </TranslationsProvider>
  );
}
