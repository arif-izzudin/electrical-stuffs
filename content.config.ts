import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    units: defineCollection({
      type: 'page',
      source: 'units/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().min(120).max(175),
        category: z.enum(['Electromagnetics', 'Mathematics', 'DSP', 'Power Systems']),
        tags: z.array(z.string()).min(3).max(8),
        date: z.string(),
        pdf: z.string().startsWith('/decks/'),
        author: z.string().default('Engineering Content Architect'),
        seo: z.object({
          title: z.string(),
          description: z.string(),
          keywords: z.array(z.string()).min(3),
        }),
        schemaOrg: z.object({
          type: z.string().default('TechArticle'),
          headline: z.string(),
          proficiencyLevel: z.string(),
        }),
      }),
    }),
  },
})
