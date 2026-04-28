<script setup>
import { img, FALLBACK } from '../data/images.js'
import AppImg from './AppImg.vue'

const m = q => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`

const breakfast = [
  { icon: '🥐', title: 'Симит (Simit)',      meta: 'Кунжутный бублик — главный завтрак Стамбула. На каждом углу с тележек.', price: '~10–15 лир (~0,3 EUR)', free: true, img: img.simit },
  { icon: '🥙', title: 'Балык-экмек',        meta: 'Рыба-гриль в хлебе с лодок у Галатского моста. Легенда Стамбула.', price: '~150–200 лир (~4 EUR)', img: img.balikEkmek, maps: m('Balik Ekmek Eminonu Istanbul') },
  { icon: '🧆', title: 'Бёрек (Börek)',      meta: 'Слоёное тесто с сыром, мясом или шпинатом. В пекарнях — горячий, хрустящий.', price: '~50–80 лир (~1–2 EUR)', img: img.borek },
  { icon: '🥧', title: 'Турецкий завтрак',   meta: 'Сыры, оливки, мёд, каймак, яйца, помидоры, хлеб. Ищите kahvaltı.', price: '~300–500 лир на двоих', img: img.turkishBreakfast, maps: m('kahvalti istanbul sultanahmet') },
]
const mains = [
  { icon: '🌯', title: 'Дёнер / Кебаб',      meta: 'Адана (острый) или Урфа (мягкий) — лучшие варианты в лаваше или на тарелке.', price: '~100–200 лир (~2–5 EUR)', img: img.doner },
  { icon: '🥩', title: 'Кёфте (Köfte)',       meta: 'Турецкие котлеты. Подаются с хлебом, луком и острым перцем.', price: '~150–250 лир (~4–6 EUR)', img: img.kofte },
  { icon: '🍲', title: 'Чорба (Çorba)',       meta: 'Чечевичный суп mercimek — самый популярный. Сытно, дёшево, вкусно.', price: '~60–100 лир (~1–2 EUR)', img: img.corba },
  { icon: '🥔', title: 'Кумпир',              meta: 'Запечённая картошка с начинками. Самый вкусный — в Ортакой у Босфора.', price: '~150–200 лир · 📍 Ортакой', img: img.kumpit, maps: m('Kumpir Ortakoy Istanbul') },
  { icon: '🦪', title: 'Мидье долма',         meta: 'Мидии с рисом и специями в ракушке. Особенно в Кадыкёй — есть стоя у лотка.', price: '~15–20 лир/шт · 📍 Кадыкёй', img: img.midye, maps: m('Midye dolma Kadikoy Istanbul') },
  { icon: '🐟', title: 'Рыба / Галатский мост', meta: 'Рестораны под мостом. Свежая рыба, вид на Босфор — туристично, но атмосферно.', price: '~300–500 лир (~7–12 EUR)', img: img.fish, maps: m('Galata Bridge restaurants Istanbul') },
]
const sweets = [
  { icon: '🍮', title: 'Баклава',             meta: 'Слоёное тесто с орехами в сиропе. Лучшая — Güllüoğlu в Karaköy.', price: '~80–150 лир за порцию', img: img.baklava, maps: m('Gulluoglu Baklava Karakoy Istanbul') },
  { icon: '🍦', title: 'Дондурма',            meta: 'Тягучее турецкое мороженое на козьем молоке. Продавцы делают шоу.', price: '~50–100 лир', img: img.dondurma, maps: m('dondurma istanbul istiklal') },
  { icon: '🍮', title: 'Казандиби',           meta: 'Молочный пудинг с поджаренной корочкой. Найти в muhallebici.', price: '~60–100 лир', img: img.kazandibi, maps: m('muhallebici istanbul') },
  { icon: '🧁', title: 'Сан Себастьян чизкейк', meta: 'Basque cheesecake — хит Стамбула. В кофейнях Галаты и Истикляль.', price: '~150–250 лир за кусок', img: img.cheesecake, maps: m('basque cheesecake galata istanbul') },
]
const drinks = [
  { icon: '🍵', title: 'Турецкий чай (Çay)', meta: 'Крепкий в маленьких стаканчиках. Угощают бесплатно в магазинах весь день.', price: '~20–40 лир / бесплатно', free: true, img: img.cay },
  { icon: '☕', title: 'Турецкий кофе',      meta: 'Варится в джезве, с водой и лукумом. Густой, крепкий. Пить маленькими глотками.', price: '~80–150 лир', img: img.coffee },
  { icon: '🥛', title: 'Айран',              meta: 'Солёный йогуртовый напиток. Лучший к кебабу. В пакетах — очень дёшево.', price: '~20–40 лир', free: true, img: img.ayran },
  { icon: '🍹', title: 'Шалгам (Şalgam)',    meta: 'Ферментированный сок из репы — специфично, но попробовать стоит. Фиолетовый.', price: '~30–50 лир', img: img.salgam },
]
</script>

<template>
  <div class="section">
    <p class="sec-title">Турецкая <span>еда</span></p>
    <p class="sec-sub">Что обязательно попробовать — и где</p>

    <div class="alert green">🍽 Уличная еда дешевле ресторанов в 3–4 раза. Ешьте там, где едят местные — очередь из турков = знак качества.</div>

    <div class="day-header">🥗 Завтрак / Перекус</div>
    <div class="cards-grid">
      <div class="place-card" v-for="f in breakfast" :key="f.title">
        <AppImg :src="f.img" :alt="f.title" :fallback="FALLBACK" />
        <div class="place-card-body">
          <h3>{{ f.icon }} {{ f.title }}</h3>
          <div class="place-meta">{{ f.meta }}</div>
          <div class="place-price" :class="{ free: f.free }">{{ f.price }}</div>
          <a v-if="f.maps" :href="f.maps" target="_blank" rel="noopener" class="maps-link">📍 На карте</a>
        </div>
      </div>
    </div>

    <div class="day-header" style="margin-top:20px">🍖 Основные блюда</div>
    <div class="cards-grid">
      <div class="place-card" v-for="f in mains" :key="f.title">
        <AppImg :src="f.img" :alt="f.title" :fallback="FALLBACK" />
        <div class="place-card-body">
          <h3>{{ f.icon }} {{ f.title }}</h3>
          <div class="place-meta">{{ f.meta }}</div>
          <div class="place-price">{{ f.price }}</div>
          <a v-if="f.maps" :href="f.maps" target="_blank" rel="noopener" class="maps-link">📍 На карте</a>
        </div>
      </div>
    </div>

    <div class="day-header" style="margin-top:20px">🍰 Сладости</div>
    <div class="cards-grid">
      <div class="place-card" v-for="f in sweets" :key="f.title">
        <AppImg :src="f.img" :alt="f.title" :fallback="FALLBACK" />
        <div class="place-card-body">
          <h3>{{ f.icon }} {{ f.title }}</h3>
          <div class="place-meta">{{ f.meta }}</div>
          <div class="place-price">{{ f.price }}</div>
          <a v-if="f.maps" :href="f.maps" target="_blank" rel="noopener" class="maps-link">📍 На карте</a>
        </div>
      </div>
    </div>

    <div class="day-header" style="margin-top:20px">☕ Напитки</div>
    <div class="cards-grid">
      <div class="place-card" v-for="f in drinks" :key="f.title">
        <AppImg :src="f.img" :alt="f.title" :fallback="FALLBACK" />
        <div class="place-card-body">
          <h3>{{ f.icon }} {{ f.title }}</h3>
          <div class="place-meta">{{ f.meta }}</div>
          <div class="place-price" :class="{ free: f.free }">{{ f.price }}</div>
        </div>
      </div>
    </div>

    <div class="info-card" style="margin-top:20px">
      <h3>💰 Бюджет на еду</h3>
      <div class="info-row"><span>Завтрак (симит + чай + бёрек)</span><span>~100–150 лир × 2</span></div>
      <div class="info-row"><span>Обед (уличная еда)</span><span>~150–250 лир × 2</span></div>
      <div class="info-row"><span>Ужин (ресторан/рыба)</span><span>~300–500 лир × 2</span></div>
      <div class="info-row"><span>Перекусы и сладости</span><span>~200 лир/день</span></div>
      <div class="info-row" style="font-weight:700"><span>3 дня на двоих</span><span>~66–99 EUR</span></div>
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
