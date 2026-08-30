<script setup lang="ts">
const props = withDefaults(defineProps<{
  src: string
  label?: string
}>(), {
  label: 'Lecture deck',
})

const downloadUrl = computed(() => `${props.src}${props.src.includes('?') ? '&' : '?'}download=1`)
</script>

<template>
  <figure class="pdf-deck">
    <div class="pdf-deck__frame">
      <object
        class="pdf-deck__object"
        :data="src"
        type="application/pdf"
        :aria-label="`${label} (PDF)`"
      >
        <iframe
          class="pdf-deck__iframe"
          :src="src"
          :title="label"
        />
      </object>
    </div>
    <figcaption class="pdf-deck__bar">
      <p class="pdf-deck__hint">
        Scroll inside the frame to move through the slides.
      </p>
      <div class="pdf-deck__actions">
        <a
          class="pdf-deck__btn"
          :href="src"
          target="_blank"
          rel="noopener"
        >
          <span aria-hidden="true">&#8599;</span> Open in new tab
        </a>
        <a
          class="pdf-deck__btn pdf-deck__btn--solid"
          :href="downloadUrl"
          :download="src.split('/').pop()"
        >
          <span aria-hidden="true">&#8681;</span> Download PDF
        </a>
      </div>
    </figcaption>
  </figure>
</template>
