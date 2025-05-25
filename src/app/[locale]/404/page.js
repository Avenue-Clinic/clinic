import NotFoundComponent from '../../components/NotFound';
import initTranslations from '../../utils/i18n';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }, { locale: 'ar' }];
}

export const metadata = {
  title: '404 - Page Not Found',
};

export default async function NotFoundPage({ params }) {
  const { locale } = params;
  const { t } = await initTranslations(locale, ['not-found']);

  return <NotFoundComponent t={t} locale={locale} />;
}
