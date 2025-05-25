import TreatmentsHeader from '@/app/components/TreatmentsHeader';
import TreatmentsSection from '@/app/components/TreatmentsSection';
import WhyUs from '@/app/components/WhyUs';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ContactSection from '@/app/components/ContactSection';
import initTranslations from '@/app/utils/i18n';
import TranslationsProvider from '@/app/components/TranslationsProvider';
import { generateMetadata as baseGenerateMetadata } from '@/app/utils/generateMetadata';

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
    pageKey: 'treatments',
    locale,
    path: '/treatments',
  });
}

export default async function TreatmentsPage({ params: { locale } }) {
  const { resources } = await initTranslations(locale, ['content']);

  return (
    <TranslationsProvider
      locale={locale}
      namespaces={['content']}
      resources={resources}
    >
      <main>
        <TreatmentsHeader />
        <TreatmentsSection />
        <WhyUs />
        <div className="bg-white">
          <TestimonialsSection inverted={true} />
        </div>
        <ContactSection />
      </main>
    </TranslationsProvider>
  );
}
