export default async function sitemap() {
  const baseUrl = 'https://qlnca.com';
  const lastModified = new Date().toISOString();

  // Define all available routes
  const routes = [
    '',                              // home
    'about',
    'blog',
    'treatments',
    'treatments/dental-implants',
    'treatments/hollywood-smile',
    'treatments/dental-veneers',
    'treatments/all-on46-implants',
    'treatments/dental-crowns',
    'treatments/surgical-dentistry',
    'treatments/smile-makeover',
    'contact',
    'gallery'
  ];

  // Create sitemap entries for each route in each language
  const sitemap = routes.flatMap(route => {
    const languages = ['en', 'ar', 'tr'];
    return languages.map(lang => {
      const path = route ? `${lang}/${route}` : lang;
      return {
        url: `${baseUrl}/${path}`,
        lastModified,
        changeFrequency: 'daily',
        priority: route === '' ? 1.0 : 0.8
      };
    });
  });

  return sitemap;
}
