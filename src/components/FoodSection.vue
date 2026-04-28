<script setup>
import { img } from '../data/images.js'

const breakfast = [
  {
    icon: '🥐', title: 'Симит (Simit)',
    meta: 'Кунжутный бублик — главный завтрак Стамбула. Продаётся на каждом углу с тележек.',
    price: '~10–15 лир (~0,3 EUR)', free: true,
    img: img.simit,
  },
  {
    icon: '🥙', title: 'Балык-экмек',
    meta: 'Рыба-гриль в хлебе прямо с лодок у Галатского моста. Легенда Стамбула — есть обязательно.',
    price: '~150–200 лир (~4 EUR)', free: false,
    img: img.balikEkmek,
  },
  {
    icon: '🧆', title: 'Бёрек (Börek)',
    meta: 'Слоёное тесто с сыром, мясом или шпинатом. В пекарнях — горячий, хрустящий.',
    price: '~50–80 лир (~1–2 EUR)', free: false,
    img: img.borek,
  },
  {
    icon: '🥧', title: 'Турецкий завтрак',
    meta: 'Полный турецкий завтрак: сыры, оливки, мёд, каймак, яйца, помидоры, хлеб. Ищите kahvaltı.',
    price: '~300–500 лир на двоих', free: false,
    img: img.turkishBreakfast,
  },
]

const mains = [
  {
    icon: '🌯', title: 'Дёнер / Кебаб',
    meta: 'Мясо с вертела в лаваше или тарелке. Адана (острый) или Урфа (мягкий) — лучшие варианты.',
    price: '~100–200 лир (~2–5 EUR)',
    img: img.doner,
  },
  {
    icon: '🥩', title: 'Кёфте (Köfte)',
    meta: 'Турецкие котлеты из рубленого мяса. Подаются с хлебом, луком и острым перцем.',
    price: '~150–250 лир (~4–6 EUR)',
    img: img.kofte,
  },
  {
    icon: '🍲', title: 'Чорба (Çorba)',
    meta: 'Турецкий суп — чечевичный (mercimek) самый популярный. Сытно, дёшево, вкусно.',
    price: '~60–100 лир (~1–2 EUR)',
    img: img.corba,
  },
  {
    icon: '🥔', title: 'Кумпир',
    meta: 'Запечённая картошка с множеством начинок. Самый вкусный — в Ортакой, прямо у Босфора.',
    price: '~150–200 лир (~4 EUR) · 📍 Ортакой',
    img: img.kumpit,
  },
  {
    icon: '🦪', title: 'Мидье долма',
    meta: 'Мидии с рисом и специями прямо в ракушке. Уличные торговцы везде — особенно в Кадыкёй.',
    price: '~15–20 лир/шт = ~1 EUR · 📍 Кадыкёй',
    img: img.midye,
  },
  {
    icon: '🐟', title: 'Рыба на Галатском мосту',
    meta: 'Рестораны под Галатским мостом. Свежая рыба, вид на Босфор — туристично, но атмосферно.',
    price: '~300–500 лир (~7–12 EUR)',
    img: img.fish,
  },
]

const sweets = [
  {
    icon: '🍮', title: 'Баклава',
    meta: 'Слоёное тесто с орехами в медовом сиропе. Лучшая — в Karaköy. Бренд Güllüoğlu.',
    price: '~80–150 лир за порцию',
    img: img.baklava,
  },
  {
    icon: '🍦', title: 'Дондурма',
    meta: 'Турецкое мороженое — тягучее, на козьем молоке. Продавцы делают шоу — смешно и вкусно.',
    price: '~50–100 лир',
    img: img.dondurma,
  },
  {
    icon: '🍮', title: 'Казандиби / Мухаллеби',
    meta: 'Турецкий молочный пудинг. Казандиби — с поджаренной корочкой. Найти в muhallebici.',
    price: '~60–100 лир',
    img: img.kazandibi,
  },
  {
    icon: '🧁', title: 'Сан Себастьян чизкейк',
    meta: 'Basque cheesecake стал хитом Стамбула — в кофейнях района Галата и Истикляль.',
    price: '~150–250 лир за кусок',
    img: img.cheesecake,
  },
]

const drinks = [
  {
    icon: '🍵', title: 'Турецкий чай (Çay)',
    meta: 'Крепкий чёрный чай в маленьких стаканчиках. Пьют везде весь день. Угощают бесплатно в магазинах.',
    price: '~20–40 лир / бесплатно', free: true,
    img: img.cay,
  },
  {
    icon: '☕', title: 'Турецкий кофе',
    meta: 'Варится в джезве, подаётся с водой и лукумом. Густой, крепкий. Пить маленькими глотками.',
    price: '~80–150 лир',
    img: img.coffee,
  },
  {
    icon: '🥛', title: 'Айран',
    meta: 'Солёный йогуртовый напиток. Лучший к кебабу и кёфте. В пакетах — очень дёшево.',
    price: '~20–40 лир', free: true,
    img: img.ayran,
  },
  {
    icon: '🍹', title: 'Шалгам (Şalgam)',
    meta: 'Ферментированный сок из репы — специфично, но попробовать стоит. Кисло-острый, фиолетовый.',
    price: '~30–50 лир',
    img: img.salgam,
  },
]
</script>

<template>
  <div class="section">
    <p class="sec-title">Турецкая <span>еда</span></p>
    <p class="sec-sub">Что обязательно попробовать — и где</p>

    <div class="alert green">🍽 В Стамбуле уличная еда дешевле ресторанов в 3–4 раза. Ешьте там, где едят местные — очередь из турков = знак качества.</div>

    <div class="day-header">🥗 Завтрак / Перекус</div>
    <div class="cards-grid">
      <div class="place-card" v-for="f in breakfast" :key="f.title">
        <img :src="f.img" :alt="f.title" loading="lazy" />
        <div class="place-card-body">
          <h3>{{ f.icon }} {{ f.title }}</h3>
          <div class="place-meta">{{ f.meta }}</div>
          <div class="place-price" :class="{ free: f.free }">{{ f.price }}</div>
        </div>
      </div>
    </div>

    <div class="day-header" style="margin-top:24px">🍖 Основные блюда</div>
    <div class="cards-grid">
      <div class="place-card" v-for="f in mains" :key="f.title">
        <img :src="f.img" :alt="f.title" loading="lazy" />
        <div class="place-card-body">
          <h3>{{ f.icon }} {{ f.title }}</h3>
          <div class="place-meta">{{ f.meta }}</div>
          <div class="place-price">{{ f.price }}</div>
        </div>
      </div>
    </div>

    <div class="day-header" style="margin-top:24px">🍰 Сладости — обязательно!</div>
    <div class="cards-grid">
      <div class="place-card" v-for="f in sweets" :key="f.title">
        <img :src="f.img" :alt="f.title" loading="lazy" />
        <div class="place-card-body">
          <h3>{{ f.icon }} {{ f.title }}</h3>
          <div class="place-meta">{{ f.meta }}</div>
          <div class="place-price">{{ f.price }}</div>
        </div>
      </div>
    </div>

    <div class="day-header" style="margin-top:24px">☕ Напитки</div>
    <div class="cards-grid">
      <div class="place-card" v-for="f in drinks" :key="f.title">
        <img :src="f.img" :alt="f.title" loading="lazy" />
        <div class="place-card-body">
          <h3>{{ f.icon }} {{ f.title }}</h3>
          <div class="place-meta">{{ f.meta }}</div>
          <div class="place-price" :class="{ free: f.free }">{{ f.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
