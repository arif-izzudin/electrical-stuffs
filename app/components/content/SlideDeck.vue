<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()

const slots = useSlots()

const domSlideCount = ref(0)
const activeIndex = ref(0)
const viewport = ref<HTMLElement | null>(null)
const deckRoot = ref<HTMLElement | null>(null)
const isFullscreen = ref(false)

function countSlides(vnodes: unknown[]): number {
  let count = 0
  for (const raw of vnodes) {
    if (!raw || typeof raw !== 'object') continue
    const vnode = raw as { type: unknown; children: unknown }
    if (typeof vnode.type === 'symbol') {
      if (Array.isArray(vnode.children)) count += countSlides(vnode.children)
      continue
    }
    if (vnode.type) {
      count++
      continue
    }
  }
  return count
}

// MDC resolves each nested slide as an async component wrapper. Count the
// rendered slot nodes during render, then prefer the actual DOM count once mounted.
const slotSlideCount = computed(() => countSlides(slots.default ? slots.default() : []))
const slideCount = computed(() => domSlideCount.value || slotSlideCount.value)

const canPrev = computed(() => activeIndex.value > 0)
const canNext = computed(() => activeIndex.value < slideCount.value - 1)
const progress = computed(() =>
  slideCount.value > 0 ? `${((activeIndex.value + 1) / slideCount.value) * 100}%` : '0%',
)

// --- Navigation -----------------------------------------------------------

function goTo(index: number) {
  const max = Math.max(slideCount.value - 1, 0)
  activeIndex.value = Math.min(Math.max(index, 0), max)
}

function go(delta: number) {
  goTo(activeIndex.value + delta)
}

function applySlideState() {
  const el = viewport.value
  if (!el) return
  const slides = Array.from(el.children).filter(
    child => (child as HTMLElement).classList?.contains('slide'),
  ) as HTMLElement[]
  if (slides.length > 0 && slides.length !== domSlideCount.value) {
    domSlideCount.value = slides.length
  }
  slides.forEach((slide, i) => {
    const active = i === activeIndex.value
    slide.classList.toggle('is-active', active)
    slide.setAttribute('aria-hidden', String(!active))
    slide.setAttribute('aria-label', `Slide ${i + 1} of ${slides.length}`)
    slide.inert = !active
  })
}

function readHash() {
  const match = window.location.hash.match(/^#slide-(\d+)$/)
  if (match) goTo(Number.parseInt(match[1], 10) - 1)
}

function writeHash() {
  const hash = `#slide-${activeIndex.value + 1}`
  if (window.location.hash !== hash) {
    history.replaceState(null, '', hash)
  }
}

// --- Keyboard -------------------------------------------------------------

function onKeydown(event: KeyboardEvent) {
  const target = event.target as HTMLElement | null
  const tag = target?.tagName
  if (
    tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'BUTTON' || tag === 'A'
    || target?.isContentEditable
  ) {
    return
  }
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    go(1)
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault()
    go(-1)
  } else if (isFullscreen.value) {
    if (event.key === 'PageDown') {
      event.preventDefault()
      go(1)
    } else if (event.key === 'PageUp') {
      event.preventDefault()
      go(-1)
    } else if (event.key === 'Home') {
      event.preventDefault()
      goTo(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      goTo(slideCount.value - 1)
    }
  }
}

// --- Touch ----------------------------------------------------------------

let touchStartX = 0
let touchStartY = 0

function onTouchStart(event: TouchEvent) {
  if (event.touches.length === 1) {
    touchStartX = event.touches[0].clientX
    touchStartY = event.touches[0].clientY
  }
}

function onTouchEnd(event: TouchEvent) {
  const dx = event.changedTouches[0].clientX - touchStartX
  const dy = event.changedTouches[0].clientY - touchStartY
  if (Math.abs(dx) > 48 && Math.abs(dx) > 2 * Math.abs(dy)) {
    go(dx < 0 ? 1 : -1)
  }
}

// --- Fullscreen presentation mode -----------------------------------------

function toggleFullscreen() {
  const root = deckRoot.value
  if (!root) return
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {})
  } else {
    root.requestFullscreen?.().catch(() => {})
  }
}

function syncFullscreen() {
  isFullscreen.value = document.fullscreenElement === deckRoot.value
}

// --- Lifecycle ------------------------------------------------------------

onMounted(() => {
  applySlideState()
  readHash()
  window.addEventListener('hashchange', readHash)
  window.addEventListener('keydown', onKeydown)
  document.addEventListener('fullscreenchange', syncFullscreen)
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', readHash)
  window.removeEventListener('keydown', onKeydown)
  document.removeEventListener('fullscreenchange', syncFullscreen)
})

watch(activeIndex, () => {
  writeHash()
  nextTick(applySlideState)
})

onUpdated(applySlideState)
</script>

<template>
  <section
    ref="deckRoot"
    class="slide-deck"
    :aria-label="title || 'Interactive slide presentation'"
    aria-roledescription="carousel"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
  >
    <header class="slide-deck__bar">
      <p class="slide-deck__title">
        <span class="slide-deck__icon" aria-hidden="true">&#9638;</span>
        {{ title || 'Slide Deck' }}
      </p>
      <div class="slide-deck__bar-right">
        <p class="slide-deck__counter" aria-live="polite">
          <span class="slide-deck__counter-current">{{ activeIndex + 1 }}</span>
          <span class="slide-deck__counter-sep">/</span>
          <span class="slide-deck__counter-total">{{ slideCount > 0 ? slideCount : '-' }}</span>
        </p>
        <button
          type="button"
          class="slide-deck__present"
          :aria-pressed="isFullscreen"
          title="Toggle full-screen presentation"
          @click="toggleFullscreen"
        >
          <span aria-hidden="true">&#9974;</span> Present
        </button>
      </div>
    </header>

    <div ref="viewport" class="slide-deck__viewport" :data-active="activeIndex + 1">
      <slot />
    </div>

    <div class="slide-deck__controls">
      <button
        type="button"
        class="slide-deck__btn"
        :disabled="!canPrev"
        aria-label="Previous slide"
        @click="go(-1)"
      >
        <span aria-hidden="true">&#8249;</span> Prev
      </button>
      <div class="slide-deck__progress" role="presentation">
        <div class="slide-deck__progress-fill" :style="{ width: progress }" />
      </div>
      <button
        type="button"
        class="slide-deck__btn slide-deck__btn--next"
        :disabled="!canNext"
        aria-label="Next slide"
        @click="go(1)"
      >
        Next <span aria-hidden="true">&#8250;</span>
      </button>
    </div>
    <p class="slide-deck__hint">
      Navigate with the buttons, arrow keys, or swipe &mdash; press <strong>Present</strong>
      for a full-screen slideshow. Each slide is deep-linkable
      (<code>#slide-2</code>).
    </p>
  </section>
</template>
