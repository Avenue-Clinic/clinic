import initTranslations from '@/app/utils/i18n';
import { generateMetadata as baseGenerateMetadata } from '@/app/utils/generateMetadata';
import BlogContent from '@/app/components/BlogContent';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }, { locale: 'ar' }];
}

export async function generateMetadata({ params: { locale } }) {
  return baseGenerateMetadata({
    pageKey: 'blog',
    locale,
    path: '/blog',
  });
}

export default async function BlogPage({ params: { locale } }) {
  const { resources } = await initTranslations(locale, ['content']);

  return <BlogContent locale={locale} resources={resources} />;
}
