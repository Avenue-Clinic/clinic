'use client';

import { useTranslation } from 'react-i18next';
import TranslationsProvider from '@/app/components/TranslationsProvider';

export default function BlogContent({ locale, resources }) {
  return (
    <TranslationsProvider locale={locale} namespaces={['content']} resources={resources}>
      <BlogContentInner />
    </TranslationsProvider>
  );
}

function BlogContentInner() {
  const { t } = useTranslation(['content']);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{t('blog.title')}</h1>
      <p className="text-lg">{t('blog.comingSoon')}</p>
    </div>
  );
}
