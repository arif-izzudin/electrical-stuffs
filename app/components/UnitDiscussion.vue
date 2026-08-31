<script setup lang="ts">
import Giscus from '@giscus/vue'

const { giscus } = useRuntimeConfig().public as {
  giscus: { repo: string; repoId: string; category: string; categoryId: string }
}
</script>

<template>
  <section class="unit-discussion" aria-label="Community discussion">
    <h2 class="unit-discussion__title">Discussion</h2>
    <p class="unit-discussion__intro">
      Questions, insights, or corrections about this unit? Join the conversation below
      &mdash; sign in with GitHub to post a comment or reply.
    </p>
    <ClientOnly>
      <Giscus
        :repo="giscus.repo"
        :repo-id="giscus.repoId"
        :category="giscus.category"
        :category-id="giscus.categoryId"
        mapping="pathname"
        :strict="true"
        :reactions-enabled="true"
        input-position="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
      <template #fallback>
        <div class="unit-discussion__skeleton" aria-hidden="true"></div>
      </template>
    </ClientOnly>
  </section>
</template>
