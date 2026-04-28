<script setup>
import { ref } from 'vue'
import { useLightbox } from '../composables/useLightbox.js'

const props = defineProps({
  src:      { type: String, required: true },
  alt:      { type: String, default: '' },
  fallback: { type: String, default: null },
  thumb:    { type: Boolean, default: false },
})

const { open } = useLightbox()

// Teal-to-dark gradient SVG — shown when image fails
const PLACEHOLDER = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="700" height="450"><defs>' +
  '<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
  '<stop offset="0" stop-color="#1a6b6b"/>' +
  '<stop offset="1" stop-color="#1a1208"/>' +
  '</linearGradient></defs>' +
  '<rect width="700" height="450" fill="url(#g)"/></svg>'
)}`

const FALLBACK_ISTANBUL = 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=700&h=450&q=80'

let tries = 0
function onError(e) {
  tries++
  if (tries === 1 && props.fallback) { e.target.src = props.fallback; return }
  if (tries <= 2)                    { e.target.src = FALLBACK_ISTANBUL; return }
  e.target.src = PLACEHOLDER
}
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    loading="lazy"
    :class="['app-img', { thumb }]"
    @error="onError"
    @click="open(src, alt)"
  />
</template>

<style scoped>
.app-img {
  cursor: zoom-in;
  display: block;
  transition: opacity .15s;
  -webkit-tap-highlight-color: transparent;
}
.app-img:active { opacity: .85; }
</style>
