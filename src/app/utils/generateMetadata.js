import { defaultMetadata } from './metadata';
import metaData from '@/locales/en/meta-data.json';

export function generateMetadata({ 
  pageKey,
  locale = 'en',
  path = ''
}) {
  const pageMetadata = metaData[pageKey] || {};
  const ogImage = pageMetadata.ogImage || defaultMetadata.openGraph.images[0];
  const baseUrl = defaultMetadata.metadataBase;
  const canonicalUrl = `${baseUrl}${path}`;

  return {
    ...defaultMetadata,
    title: pageMetadata.title || defaultMetadata.title.default,
    description: pageMetadata.description,
    keywords: pageMetadata.keywords,
    authors: pageMetadata.authors,
    creator: pageMetadata.creator,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${baseUrl}${path}`,
        'tr': `${baseUrl}/tr${path}`,
        'ar': `${baseUrl}/ar${path}`,
      },
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: pageMetadata.title,
      description: pageMetadata.description,
      url: canonicalUrl,
      images: [
        {
          url: ogImage.url,
          width: 1200,
          height: 630,
          alt: ogImage.alt
        }
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: pageMetadata.title,
      description: pageMetadata.description,
      images: [ogImage.url],
    },
  };
}
