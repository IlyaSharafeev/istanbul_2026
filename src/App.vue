<script setup>
import { ref, computed, markRaw } from 'vue'
import { img } from './data/images.js'
import PlanSection     from './components/PlanSection.vue'
import PlacesSection   from './components/PlacesSection.vue'
import KartSection     from './components/KartSection.vue'
import BudgetSection   from './components/BudgetSection.vue'
import FoodSection     from './components/FoodSection.vue'
import ContactsSection from './components/ContactsSection.vue'
import Lightbox        from './components/Lightbox.vue'

const activeTab = ref('plan')
const tabs = [
  { id: 'plan',     icon: '📅', label: 'План' },
  { id: 'places',   icon: '📍', label: 'Места' },
  { id: 'kart',     icon: '🚇', label: 'Карта' },
  { id: 'budget',   icon: '💰', label: 'Бюджет' },
  { id: 'food',     icon: '🍽', label: 'Еда' },
  { id: 'contacts', icon: '📞', label: 'Контакты' },
]

const sectionMap = {
  plan:     markRaw(PlanSection),
  places:   markRaw(PlacesSection),
  kart:     markRaw(KartSection),
  budget:   markRaw(BudgetSection),
  food:     markRaw(FoodSection),
  contacts: markRaw(ContactsSection),
}
const currentSection = computed(() => sectionMap[activeTab.value])

function switchTab(id) {
  activeTab.value = id
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div>
    <!-- HERO HEADER -->
    <header class="hero" :style="{ backgroundImage: `url(${img.header})` }">
      <div class="hero-overlay">
        <span class="flag">🇹🇷</span>
        <h1>Стамбул 2026</h1>
        <p class="sub">Илья &amp; Диана · 13–18 мая</p>
      </div>
    </header>

    <!-- TABS -->
    <nav>
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="{ active: activeTab === tab.id }"
        @click="switchTab(tab.id)"
      >
        <span class="tab-icon">{{ tab.icon }}</span>
        <span class="tab-label">{{ tab.label }}</span>
      </button>
    </nav>

    <!-- CONTENT -->
    <component :is="currentSection" :key="activeTab" />

    <!-- LIGHTBOX -->
    <Lightbox />
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  background-size: cover;
  background-position: center 40%;
  min-height: 260px;
  display: flex;
  align-items: flex-end;
}
.hero-overlay {
  width: 100%;
  padding: 36px 20px 32px;
  background: linear-gradient(to top,
    rgba(26,18,8,.92) 0%,
    rgba(26,18,8,.55) 55%,
    transparent 100%);
  text-align: center;
}
.flag  { font-size: 2rem; display: block; margin-bottom: 10px; }
h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 8vw, 3.6rem);
  font-weight: 900;
  letter-spacing: -.02em;
  color: #e8c96a;
  line-height: 1.1;
}
.sub {
  font-size: .88rem;
  color: rgba(245,240,232,.78);
  margin-top: 8px;
  letter-spacing: .05em;
  text-transform: uppercase;
  font-weight: 300;
}
.tab-icon  { display: block; font-size: 1.1rem; margin-bottom: 2px; }
.tab-label { display: block; }
</style>
