<script setup>
import { img } from '../data/images.js'
</script>

<template>
  <div class="section">
    <p class="sec-title">Istanbulkart <span>🚇</span></p>
    <p class="sec-sub">Транспортная карта — обязательно взять</p>

    <div class="hero-img-wrap">
      <img :src="img.bosphorus" alt="Стамбул транспорт" loading="lazy" class="kart-hero" />
      <div class="kart-hero-caption">Трамвай, метро, паром, автобус — всё по одной карте</div>
    </div>

    <div class="alert green">✅ Одна карта — весь транспорт: метро, трамвай, автобус, паром, фуникулёр. Можно использовать двоим (по очереди).</div>

    <div class="kart-box">
      <h3>Сколько класть на карту</h3>
      <div class="kart-row"><span>Сама карта (разовая)</span><span>~165 лир = ~4 EUR</span></div>
      <div class="kart-row"><span>1 поездка (метро/трамвай/паром)</span><span>~42 лиры = ~1 EUR</span></div>
      <div class="kart-row"><span>Трамвай 3 дня (~4 поездки/день × 2)</span><span>~1008 лир</span></div>
      <div class="kart-row"><span>Паром туда-обратно × 2</span><span>~168 лир</span></div>
      <div class="kart-row"><span>Запас</span><span>~200 лир</span></div>
      <div class="kart-total">
        <span>Пополнить на двоих</span>
        <span>~1376 лир = ~32 EUR</span>
      </div>
    </div>

    <div class="alert">💡 Купить на машинах <strong>Biletmatik</strong> (жёлтые) прямо на Esenler по приезду. Принимают <strong>только наличные лиры</strong> (банкноты).</div>
    <div class="alert">💡 Альтернатива: бесконтактная карта Visa/MasterCard прямо у турникетов. Без скидок, зато без очередей.</div>

    <div class="info-card">
      <h3>Основные маршруты</h3>
      <div class="info-row">
        <span>Esenler → Sultanahmet</span>
        <span>M1 до Aksaray + T1 трамвай</span>
      </div>
      <div class="info-row">
        <span>Sultanahmet → Ортакой</span>
        <span>T1 до Kabataş + автобус 22</span>
      </div>
      <div class="info-row">
        <span>Sultanahmet → Галата</span>
        <span>T1 до Karaköy (1 остановка)</span>
      </div>
      <div class="info-row">
        <span>Sultanahmet → Таксим</span>
        <span>T1 до Kabataş + фуникулёр F1</span>
      </div>
      <div class="info-row">
        <span>Эминёню → Кадыкёй</span>
        <span>Паром от пристани Eminönü, ~20 мин</span>
      </div>
      <div class="info-row">
        <span>Кадыкёй → Emaar SkyView</span>
        <span>Метро M4 + пересадка</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-img-wrap {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 20px;
}
.kart-hero {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}
.kart-hero-caption {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, rgba(26,18,8,.85), transparent);
  color: #e8c96a;
  font-size: .82rem;
  font-weight: 500;
  letter-spacing: .04em;
  padding: 20px 16px 12px;
  text-align: center;
}
</style>
