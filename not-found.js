import { headers } from 'next/headers';
import NotFoundComponent from './src/app/components/NotFound';
import { getTranslations } from './src/app/utils/i18n';

export default async function NotFound() {
  const headersList = headers();
  const locale = headersList.get('x-locale') || 'en';
  const t = await getTranslations(locale);

  return (
    <main className="flex-grow">
      <NotFoundComponent t={t} locale={locale} />
    </main>
  );
}
