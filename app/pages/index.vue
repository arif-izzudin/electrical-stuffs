<script setup lang="ts">
const { data: units } = await useAsyncData('unit-index', () =>
  queryCollection('units')
    .order('date', 'ASC')
    .select('path', 'title', 'description', 'category', 'date', 'tags')
    .all(),
)

const published = computed(() => units.value ?? [])

useSeoMeta({
  title: 'Engineering Lecture Decks | Coordinate Systems & Vector Mathematics',
  description:
    'Free lecture decks: rectangular, cylindrical, and spherical coordinate systems and vector operations with step-by-step derivations, worked examples, and downloadable PDFs.',
  ogTitle: 'Engineering Lecture Decks | Coordinate Systems & Vector Mathematics',
  ogDescription:
    'Lecture decks with step-by-step derivations and solved problems on coordinate systems and vector mathematics for engineering students.',
  twitterCard: 'summary',
})
</script>

<template>
  <div class="hub">
    <section class="hero">
      <h1 class="hero__title">Lecture Decks: Coordinate Systems &amp; Vector Mathematics</h1>
      <p class="hero__lead">
        Engineering lecture decks on the web &mdash; read them inline, open full-screen, or
        download the PDFs. Cartesian, cylindrical
        <span class="math-inline">(&rho;, &phi;, z)</span> and spherical
        <span class="math-inline">(r, &theta;, &phi;)</span> coordinate systems plus vector
        operations, with step-by-step derivations and solved problems in the notation standard
        to electromagnetics.
      </p>
    </section>

    <section aria-labelledby="published-units">
      <h2 id="published-units">All Units</h2>
      <div class="hub-grid">
        <NuxtLink
          v-for="unit in published"
          :key="unit.path"
          :to="unit.path"
          class="unit-card"
        >
          <p class="unit-card__category">{{ unit.category }}</p>
          <h3 class="unit-card__title">{{ unit.title }}</h3>
          <p class="unit-card__desc">{{ unit.description }}</p>
          <p class="unit-card__meta">
            <span
              v-for="tag in (unit.tags ?? []).slice(0, 3)"
              :key="tag"
              class="unit-card__tag"
            >
              {{ tag }}
            </span>
          </p>
          <p class="unit-card__cta">Open the deck &rsaquo;</p>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
