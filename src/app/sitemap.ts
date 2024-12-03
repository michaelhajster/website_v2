import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.xahead.de'
  
  // Main pages
  const mainRoutes = [
    '',
    '/about',
    '/advanced',
    '/foundation',
    '/contact',
    '/impressum',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Info pages
  const infoRoutes = [
    '/info-pages/use-cases',
    '/info-pages/rag',
    '/info-pages/autonomous-agents',
    '/info-pages/applied-ai',
    '/info-pages/ai-literacy',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...mainRoutes, ...infoRoutes]
}
