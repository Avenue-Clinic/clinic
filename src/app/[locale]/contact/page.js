import ContactHeader from '@/app/components/ContactHeader';
import ContactCards from '@/app/components/ContactCards';
import ContactMapSection from '@/app/components/ContactMapSection';
import initTranslations from '@/app/utils/i18n';
import TranslationsProvider from '@/app/components/TranslationsProvider';

export default async function Contact({ params: { locale } }) {
  const { resources } = await initTranslations(locale, ['content']);

  return (
    <TranslationsProvider locale={locale} namespaces={['content']} resources={resources}>
      <main>
        <ContactHeader />
        <ContactCards />
        <ContactMapSection />
      </main>
    </TranslationsProvider>
  );
}
