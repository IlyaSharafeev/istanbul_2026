import { ref } from 'vue'

const src = ref(null)
const alt = ref('')

export function useLightbox() {
  function open(imgSrc, imgAlt = '') {
    src.value = imgSrc.replace(/&w=\d+/, '&w=1400').replace(/&h=\d+/, '&h=900')
    alt.value = imgAlt
    document.body.style.overflow = 'hidden'
  }
  function close() {
    src.value = null
    document.body.style.overflow = ''
  }
  return { src, alt, open, close }
}
