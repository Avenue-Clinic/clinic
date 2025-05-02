import { defaultMetadata } from './metadata';

export function generateMetadata({ 
  title, 
  description, 
  locale = 'en',
  path = '',
  images = [],
  keywords = []
}) {
  const url = new URL(path, defaultMetadata.metadataBase);
  
  return {
    ...defaultMetadata,
    title: title,
    description: description,
    keywords: [...defaultMetadata.keywords, ...keywords],
    alternates: {
      canonical: url.toString(),
      languages: {
        'en': `${url.origin}/en${path}`,
        'tr': `${url.origin}/tr${path}`,
        'ar': `${url.origin}/ar${path}`,
      },
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title,
      description: description,
      url: url.toString(),
      images: images.length > 0 ? images : defaultMetadata.openGraph.images,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title,
      description: description,
      images: images.length > 0 ? images : defaultMetadata.twitter.images,
    },
  };
}
