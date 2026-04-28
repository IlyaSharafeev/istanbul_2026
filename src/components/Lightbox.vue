<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useLightbox } from '../composables/useLightbox.js'

const { src, alt, close } = useLightbox()

function onKey(e) { if (e.key === 'Escape') close() }
onMounted(()  => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <Teleport to="body">
    <Transition name="lb">
      <div v-if="src" class="lb-wrap" @click.self="close">
        <button class="lb-close" @click="close" aria-label="Закрыть">✕</button>
        <img :src="src" :alt="alt" class="lb-img" />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lb-wrap {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 16px 16px;
  -webkit-tap-highlight-color: transparent;
}
.lb-img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 0 80px rgba(0,0,0,.6);
  touch-action: pinch-zoom;
}
.lb-close {
  position: absolute;
  top: max(16px, env(safe-area-inset-top));
  right: 16px;
  width: 44px; height: 44px;
  border-radius: 50%;
  background: rgba(255,255,255,.18);
  border: none;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lb-close:active { background: rgba(255,255,255,.3); }

.lb-enter-active, .lb-leave-active { transition: opacity .18s; }
.lb-enter-from,  .lb-leave-to      { opacity: 0; }
</style>
