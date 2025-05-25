import NotFoundComponent from '../components/NotFound';
import initTranslations from '../utils/i18n';
import { headers } from 'next/headers';

export const metadata = {
  title: '404 - Page Not Found',
};

export default async function NotFound() {
  const headersList = headers();
  const locale = headersList.get('x-locale') || 'en';
  const { t } = await initTranslations(locale, ['not-found']);

  return <NotFoundComponent t={t} locale={locale} />;
}
