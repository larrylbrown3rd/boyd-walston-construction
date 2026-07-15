import { routes, siteConfig } from '@/lib/seo'

export default function sitemap() {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path === '/' ? '' : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
