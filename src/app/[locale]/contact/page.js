import ContactHeader from '@/app/components/ContactHeader';
import ContactCards from '@/app/components/ContactCards';
import ContactMapSection from '@/app/components/ContactMapSection';
import initTranslations from '@/app/utils/i18n';
import TranslationsProvider from '@/app/components/TranslationsProvider';
import { generateMetadata as baseGenerateMetadata } from '@/app/utils/generateMetadata';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }, { locale: 'ar' }];
}

export async function generateMetadata({ params: { locale } }) {
  return baseGenerateMetadata({
    pageKey: 'contact',
    locale,
    path: '/contact',
  });
}

export default async function ContactPage({ params: { locale } }) {
  const { resources } = await initTranslations(locale, ['content']);

  return (
    <TranslationsProvider
      locale={locale}
      namespaces={['content']}
      resources={resources}
    >
      <main>
        <ContactHeader />
        <ContactCards />
        <ContactMapSection />
      </main>
    </TranslationsProvider>
  );
}
