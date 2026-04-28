<script setup>
import { img, FALLBACK } from '../data/images.js'
import AppImg from './AppImg.vue'

const m = q => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`

const freePlaces = [
  { icon: '🕌', title: 'Айя-София',      meta: '⏰ 9:00–17:00 · 📍 Sultanahmet · 👗 Дресс-код', price: 'Бесплатно', free: true, img: img.hagiaSophia, maps: m('Hagia Sophia Istanbul') },
  { icon: '🕌', title: 'Голубая мечеть', meta: '⏰ Закрыта во время намаза · 📍 Sultanahmet',    price: 'Бесплатно', free: true, img: img.blueMosque,  maps: m('Blue Mosque Sultan Ahmed Istanbul') },
  { icon: '🛍', title: 'Гранд Базар',    meta: '⏰ 9:00–19:00, кроме вс · 4000+ лавок',          price: 'Вход бесплатно', free: true, img: img.grandBazaar, maps: m('Grand Bazaar Istanbul') },
  { icon: '🎨', title: 'Балат',          meta: 'Разноцветные улочки · Лучшее фото утром/вечером', price: 'Бесплатно', free: true, img: img.balat,       maps: m('Balat Istanbul') },
  { icon: '⛵', title: 'Ортакой',        meta: 'Мечеть + набережная Босфора · Кумпир ~150–200 лир', price: 'Вход бесплатно', free: true, img: img.ortakoy,  maps: m('Ortakoy Mosque Istanbul') },
  { icon: '🗼', title: 'Район Галаты',   meta: 'Башня снаружи, улочки, Barnahtan-терраса с видом', price: 'Бесплатно', free: true, img: img.galata,    maps: m('Galata Tower Istanbul') },
  { icon: '🚋', title: 'Истикляль + Таксим', meta: '1,4 км · Ретро-трамвай, кафе, магазины', price: 'Бесплатно', free: true, img: img.istiklal,        maps: m('Istiklal Avenue Istanbul') },
  { icon: '🏘', title: 'Кадыкёй',       meta: 'Азиатская сторона · Рынок, уличная еда, галереи', price: 'Бесплатно', free: true, img: img.kadikoy,     maps: m('Kadikoy Istanbul') },
]

const paidPlaces = [
  { icon: '🏛', title: 'Топкапы',          meta: '⏰ 9:00–18:00 · Дворец султанов · Приходить рано', price: '~600 лир × 2 = ~28 EUR | + Гарем: +300 лир × 2', free: false, img: img.topkapi,   maps: m('Topkapi Palace Istanbul') },
  { icon: '💧', title: 'Базилика Цистерна', meta: '⏰ 9:00–18:30 · 300м от Айя-Софии · Атмосферно',  price: '~500 лир × 2 = ~24 EUR',                         free: false, img: img.cistern,   maps: m('Basilica Cistern Istanbul') },
  { icon: '🌆', title: 'Emaar SkyView',     meta: '⏰ 10:00–22:00 · 300м · SkyWalk',                  price: '~1400 лир × 2 = ~64 EUR · Бронировать онлайн',   free: false, img: img.emaar,     maps: m('Emaar Square Mall Istanbul') },
  { icon: '🏛', title: 'Девичья башня',     meta: '⏰ 9:00–22:45 · Паром от Üsküdar · Кафе внутри',   price: '~650 лир × 2 = ~30 EUR',                         free: false, img: img.kizKulesi, maps: m('Maiden Tower Kiz Kulesi Istanbul') },
]
</script>

<template>
  <div class="section">
    <p class="sec-title">Все <span>места</span></p>
    <p class="sec-sub">Что смотреть и сколько стоит</p>

    <div class="day-header">🆓 Бесплатные места</div>
    <div class="cards-grid">
      <div class="place-card" v-for="p in freePlaces" :key="p.title">
        <AppImg :src="p.img" :alt="p.title" :fallback="FALLBACK" />
        <div class="place-card-body">
          <h3>{{ p.icon }} {{ p.title }}</h3>
          <div class="place-meta">{{ p.meta }}</div>
          <div class="place-price free">{{ p.price }}</div>
          <a :href="p.maps" target="_blank" rel="noopener" class="maps-link">📍 На карте</a>
        </div>
      </div>
    </div>

    <div class="day-header" style="margin-top:20px">💰 Платные места</div>
    <div class="cards-grid">
      <div class="place-card" v-for="p in paidPlaces" :key="p.title">
        <AppImg :src="p.img" :alt="p.title" :fallback="FALLBACK" />
        <div class="place-card-body">
          <h3>{{ p.icon }} {{ p.title }}</h3>
          <div class="place-meta">{{ p.meta }}</div>
          <div class="place-price">{{ p.price }}</div>
          <a :href="p.maps" target="_blank" rel="noopener" class="maps-link">📍 На карте</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.maps-link {
  display: inline-block;
  margin-top: 10px;
  padding: 6px 14px;
  background: #1a6e3c;
  color: #fff;
  border-radius: 20px;
  font-size: .8rem;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: .02em;
}
.maps-link:active { opacity: .75; }
</style>
