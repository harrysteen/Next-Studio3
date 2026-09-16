export default function sitemap() {
  const baseUrl = 'https://studiodezu.com';

  const routes = [
    '',
    '/about',
    '/work',
    '/contact',
    '/team',
    '/blogs',
    '/articles',
    '/Pontis',
    '/Ecomall',
    '/Leiutis',
    '/Eham',
    '/EvoqueImpact',
    '/HighCloud',
    '/LifeCykul',
    '/Madbox',
    '/Mall360',
    '/NaeemZafar',
    '/TheKshatriyas',
    '/TieSiliconValley',
    '/VenturaPranas',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/work' || route === '/contact' ? 0.8 : 0.7,
  }));
}
