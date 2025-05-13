import TreatmentsHeader from '@/app/components/TreatmentsHeader';
import TreatmentsSection from '@/app/components/TreatmentsSection';
import WhyUs from '@/app/components/WhyUs';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ContactSection from '@/app/components/ContactSection';
import initTranslations from '@/app/utils/i18n';
import TranslationsProvider from '@/app/components/TranslationsProvider';

export async function generateMetadata({ params: { locale } }) {
  const { t } = await initTranslations(locale, ['content']);

  const ogImage = {
    url: '/images/meta/treatments.jpg',
    width: 1200,
    height: 630,
    alt: t('treatments.meta.title'),
  };

  return {
    title: t('treatments.meta.title'),
    description: t('treatments.meta.description'),
    keywords: t('treatments.meta.keywords', { returnObjects: true }),
    locale,
    path: '/treatments',
    openGraph: {
      type: 'website',
      title: t('treatments.meta.title'),
      description: t('treatments.meta.description'),
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('treatments.meta.title'),
      description: t('treatments.meta.description'),
      images: [ogImage.url],
    },
  };
}

export default async function TreatmentsPage({ params: { locale } }) {
  const { resources } = await initTranslations(locale, ['content']);

  return (
    <TranslationsProvider locale={locale} namespaces={['content']} resources={resources}>
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
