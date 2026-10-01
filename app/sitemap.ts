import type { MetadataRoute } from 'next'
import { rehabilitationPages } from '@/lib/rehabilitation'
import { resources } from '@/lib/resources'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://rehabilitame.cl/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://rehabilitame.cl/politica-de-privacidad',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...rehabilitationPages.map(page => ({
      url: `https://rehabilitame.cl/${page.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: 'https://rehabilitame.cl/recursos', changeFrequency: 'monthly', priority: 0.6 },
    ...resources.map(resource => ({
      url: `https://rehabilitame.cl/recursos/${resource.slug}`,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
  ]
}
