<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <section class="slide" role="group" aria-roledescription="slide">
    <h3 v-if="title" class="slide__title">{{ title }}</h3>
    <div class="slide__content">
      <slot />
    </div>
  </section>
</template>
