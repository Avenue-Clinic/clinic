import { redirect } from 'next/navigation';
import i18nConfig from '../../i18nConfig';

export default function NotFound() {
  // Redirect to default locale's 404 page
  redirect(`/${i18nConfig.defaultLocale}/not-found`);
}
