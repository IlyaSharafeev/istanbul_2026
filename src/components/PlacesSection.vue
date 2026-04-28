<script setup>
import { img, FALLBACK } from '../data/images.js'
import AppImg from './AppImg.vue'

const freePlaces = [
  { icon: '🕌', title: 'Айя-София',      meta: '⏰ 9:00–17:00 · 📍 Sultanahmet · 👗 Дресс-код', price: 'Бесплатно', free: true, img: img.hagiaSophia },
  { icon: '🕌', title: 'Голубая мечеть', meta: '⏰ Закрыта во время намаза · 📍 Sultanahmet',    price: 'Бесплатно', free: true, img: img.blueMosque },
  { icon: '🛍', title: 'Гранд Базар',    meta: '⏰ 9:00–19:00, кроме вс · 4000+ лавок',          price: 'Вход бесплатно', free: true, img: img.grandBazaar },
  { icon: '🎨', title: 'Балат',          meta: 'Разноцветные улочки · Лучшее фото утром/вечером', price: 'Бесплатно', free: true, img: img.balat },
  { icon: '⛵', title: 'Ортакой',        meta: 'Мечеть + набережная Босфора · Кумпир ~150–200 лир', price: 'Вход бесплатно', free: true, img: img.ortakoy },
  { icon: '🗼', title: 'Район Галаты',   meta: 'Башня снаружи, улочки, Barnahtan-терраса с видом', price: 'Бесплатно', free: true, img: img.galata },
  { icon: '🚋', title: 'Истикляль + Таксим', meta: '1,4 км · Ретро-трамвай, кафе, магазины', price: 'Бесплатно', free: true, img: img.istiklal },
  { icon: '🏘', title: 'Кадыкёй',       meta: 'Азиатская сторона · Рынок, уличная еда, галереи', price: 'Бесплатно', free: true, img: img.kadikoy },
]

const paidPlaces = [
  { icon: '🏛', title: 'Топкапы',          meta: '⏰ 9:00–18:00 · Дворец султанов · Приходить рано', price: '~600 лир × 2 = ~28 EUR | + Гарем: +300 лир × 2', free: false, img: img.topkapi },
  { icon: '💧', title: 'Базилика Цистерна', meta: '⏰ 9:00–18:30 · 300м от Айя-Софии · Атмосферно',  price: '~500 лир × 2 = ~24 EUR', free: false, img: img.cistern },
  { icon: '🌆', title: 'Emaar SkyView',     meta: '⏰ 10:00–22:00 · 300м · SkyWalk',                  price: '~1400 лир × 2 = ~64 EUR · Бронировать онлайн', free: false, img: img.emaar },
  { icon: '🏛', title: 'Девичья башня',     meta: '⏰ 9:00–22:45 · Паром от Üsküdar · Кафе внутри',   price: '~650 лир × 2 = ~30 EUR', free: false, img: img.kizKulesi },
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
        </div>
      </div>
    </div>
  </div>
</template>
