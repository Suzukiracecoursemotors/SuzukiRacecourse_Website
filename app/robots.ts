import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    // TODO: Replace with domain constant
    sitemap: 'https://www.Suzukiracecoursemotor.com/sitemap.xml',
  }
}