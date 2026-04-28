<script setup>
import { img } from '../data/images.js'
</script>

<template>
  <div class="section">
    <p class="sec-title">Контакты <span>&amp;</span> данные</p>
    <p class="sec-sub">Всё важное в одном месте</p>

    <div class="alert red">⚠ Обратный автобус 17 мая в 19:00 — быть на Esenler до 18:30. Платформа 101–102.</div>

    <!-- hero image -->
    <div class="contacts-hero">
      <img :src="img.hagiaSophia" alt="Стамбул" loading="lazy" />
      <div class="contacts-hero-text">Mahhsen Mansion · Sultanahmet</div>
    </div>

    <div class="contact-card">
      <div class="contact-name">🏨 Mahhsen Mansion Oldcity</div>
      <div class="contact-detail">
        <strong>Адрес:</strong> Neviye Sokak 44, Fatih, Istanbul<br />
        <strong>Тел:</strong> +90 532 151 94 17<br />
        <strong>Check-in:</strong> с 14:00 · <strong>Check-out:</strong> до 12:00<br />
        <strong>Подтверждение:</strong> 6596.628.052 · <strong>PIN:</strong> 3419
      </div>
    </div>

    <div class="contact-card">
      <div class="contact-name">🚌 Автобус ТУДА — 13 мая</div>
      <div class="contact-detail">
        <strong>Отправление:</strong> 21:55 Sunny Beach<br />
        <strong>Прибытие:</strong> 14 мая ~05:00 Esenler<br />
        <strong>Билеты:</strong> 14035186 (Илья) · 14035187 (Диана)<br />
        <strong>⚠ Быть на остановке до 21:25</strong><br />
        <strong>Тел ArdaTur:</strong> +359 897 930 446
      </div>
    </div>

    <div class="contact-card">
      <div class="contact-name">🚌 Автобус НАЗАД — 17 мая</div>
      <div class="contact-detail">
        <strong>Отправление:</strong> 19:00 Esenler · <strong>Платформа 101–102</strong><br />
        <strong>Прибытие:</strong> 18 мая ~01:00 Sunny Beach<br />
        <strong>Билеты:</strong> 14035188 (Илья) · 14035189 (Диана)<br />
        <strong>⚠ Быть до 18:30</strong><br />
        <strong>Тел ArdaTur:</strong> +905 497 681 606
      </div>
    </div>

    <div class="contact-card">
      <div class="contact-name">📞 Infobus Helpline</div>
      <div class="contact-detail"><strong>+359 249 12 325</strong></div>
    </div>

    <div class="info-card" style="margin-top:8px">
      <h3>🗓 Важные даты</h3>
      <div class="info-row"><span>13 мая, 21:55</span><span>Выезд из Sunny Beach</span></div>
      <div class="info-row"><span>14 мая, ~05:00</span><span>Прибытие Стамбул (Esenler)</span></div>
      <div class="info-row"><span>14–17 мая</span><span>Стамбул 🇹🇷</span></div>
      <div class="info-row"><span>17 мая, до 12:00</span><span>Check-out из отеля</span></div>
      <div class="info-row"><span>17 мая, до 18:30</span><span>Быть на Esenler</span></div>
      <div class="info-row"><span>17 мая, 19:00</span><span>Отправление в Sunny Beach</span></div>
      <div class="info-row"><span>18 мая, ~01:00</span><span>Прибытие Sunny Beach</span></div>
    </div>
  </div>
</template>

<style scoped>
.contacts-hero {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 20px;
}
.contacts-hero img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}
.contacts-hero-text {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, rgba(26,18,8,.85), transparent);
  color: #e8c96a;
  font-size: .82rem;
  font-weight: 500;
  letter-spacing: .04em;
  padding: 24px 16px 12px;
  text-align: center;
}
</style>
