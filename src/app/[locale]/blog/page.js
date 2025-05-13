import initTranslations from '@/app/utils/i18n';
import BlogContent from '@/components';

export default async function BlogPage({ params: { locale } }) {
  const { resources } = await initTranslations(locale, ['content']);

  return <BlogContent locale={locale} resources={resources} />;
}
