import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default function NotFound() {
  const headersList = headers();
  const locale = headersList.get('x-locale') || 'en';
  redirect(`/${locale}/404`);
}
