export default function robots() {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
      allow: ['/en/', '/ar/', '/tr/'],
    },
    sitemap: 'https://qlnca.com/sitemap.xml',
  };
}
