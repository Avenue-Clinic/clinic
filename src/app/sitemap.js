export default function sitemap() {
  const baseUrl = 'https://qlnca.com';
  const currentDate = new Date().toISOString();
  
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
        lastModified: currentDate,
        changeFrequency: 'daily',
        priority: route === '' ? 1.0 : 0.8,
        // Define language alternates for each URL
        alternates: {
          languages: {
            en: `${baseUrl}/en/${route}`,
            ar: `${baseUrl}/ar/${route}`,
            tr: `${baseUrl}/tr/${route}`,
          },
        },
      };
    });
  });

  // Create robots.txt file to disallow root path
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow: /
Allow: /en/
Allow: /ar/
Allow: /tr/`;

  try {
    const fs = require('fs');
    const dir = './public';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    fs.writeFileSync('./public/robots.txt', robotsTxt);
  } catch (error) {
    console.error('Error writing robots.txt:', error);
  }

  return sitemap;
}
