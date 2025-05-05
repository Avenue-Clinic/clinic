import { redirect } from 'next/navigation';
import { defaultLocale } from './utils/i18n';

// This page serves as a redirection point for the root URL
export default function RootPage() {
  // Redirect to the default locale (English)
  // This happens server-side and is SEO-friendly
  redirect(`/${defaultLocale}`);
}
