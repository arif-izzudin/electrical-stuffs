<script setup lang="ts">
const route = useRoute()
const path = computed(() => {
  const p = Array.isArray(route.params.slug)
    ? `/${route.params.slug.join('/')}`
    : `/${route.params.slug ?? ''}`
  return p.replace(/\/+$/, '') || '/'
})

const { data: doc } = await useAsyncData(`unit:${path.value}`, () =>
  queryCollection('units').path(path.value).first(),
)

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

const fm: {
  title: string
  description: string
  category: string
  tags: string[]
  date: string
  author: string
  seo: { title: string; description: string; keywords: string[] }
  schemaOrg: { type: string; headline: string; proficiencyLevel: string }
} = doc.value as never

const siteUrl = useRuntimeConfig().public.siteUrl as string
const pageTitle = fm.seo.title || fm.title
const pageDescription = fm.seo.description || fm.description
const keywords = [...new Set([...fm.seo.keywords, ...fm.tags])].join(', ')
const canonicalUrl = siteUrl ? `${siteUrl}${path.value}` : ''

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  keywords,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: 'article',
  articlePublishedTime: fm.date,
  articleAuthor: [fm.author],
  articleTag: fm.tags,
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
})

useHead({
  meta: [{ name: 'author', content: fm.author }],
  link: canonicalUrl
    ? [{ rel: 'canonical', href: canonicalUrl }]
    : [],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': fm.schemaOrg.type || 'TechArticle',
        headline: fm.schemaOrg.headline || fm.title,
        description: pageDescription,
        datePublished: fm.date,
        author: { '@type': 'Person', name: fm.author },
        keywords,
        proficiencyLevel: fm.schemaOrg.proficiencyLevel,
        articleSection: fm.category,
        ...(canonicalUrl
          ? { url: canonicalUrl, mainEntityOfPage: canonicalUrl }
          : {}),
      }),
    },
  ],
})
</script>

<template>
  <article class="article">
    <ContentRenderer v-if="doc" :value="doc" />
  </article>
</template>
