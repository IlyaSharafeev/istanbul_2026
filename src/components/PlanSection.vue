<script setup>
import { img } from '../data/images.js'
</script>

<template>
  <div class="section">
    <p class="sec-title">Полный <span>план</span></p>
    <p class="sec-sub">От выхода из автобуса до посадки обратно</p>

    <!-- DAY 1 -->
    <div class="day-header">📅 14 мая (чт) — Прибытие</div>
    <div class="timeline">

      <div class="tl-item">
        <div class="tl-dot transit">🚌</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time red">05:00</div>
            <div class="tl-title">Прибытие на Esenler</div>
            <div class="tl-desc">Выходим. Туалет, умыться. Купить Istanbulkart на жёлтых машинах Biletmatik — нужны наличные лиры.</div>
            <div class="tl-tags">
              <span class="tag warn">⚠ Наличные лиры!</span>
              <span class="tag info">Карта ~165 лир × 2</span>
            </div>
          </div>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot transit">🚇</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">05:15</div>
            <div class="tl-title">Esenler → Отель</div>
            <div class="tl-desc">Метро M1 до Aksaray → трамвай T1 до Sultanahmet. Mahhsen Mansion, Neviye Sokak 44.</div>
            <div class="tl-tags">
              <span class="tag info">~30 мин</span>
              <span class="tag paid">~84 лиры</span>
            </div>
          </div>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot sleep">🏨</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time teal">06:00 – 13:00</div>
            <div class="tl-title">Сдать вещи, отдохнуть</div>
            <div class="tl-desc">Check-in с 14:00 — сдать багаж на ресепшн, поспать в кафе или погулять налегке. Тел: +90 532 151 94 17.</div>
            <div class="tl-tags">
              <span class="tag info">Подтв. 6596.628.052 | PIN 3419</span>
            </div>
          </div>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot">🥐</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">09:00</div>
            <div class="tl-title">Завтрак — симит + чай</div>
            <div class="tl-desc">Симит (~10–15 лир) с тележки + стакан чая (~30 лир). Или турецкий завтрак в кафе — сыр, оливки, яйца, мёд (~300 лир на двоих).</div>
            <div class="tl-tags"><span class="tag free">~30–50 лир/чел</span></div>
          </div>
          <img class="tl-thumb" :src="img.simit" alt="Симит" loading="lazy" />
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot">🕌</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">14:00</div>
            <div class="tl-title">Айя-София</div>
            <div class="tl-desc">5 мин пешком от отеля. Дресс-код обязателен. Одна из главных достопримечательностей мира.</div>
            <div class="tl-tags">
              <span class="tag free">Бесплатно</span>
              <span class="tag info">9:00–17:00</span>
            </div>
          </div>
          <img class="tl-thumb" :src="img.hagiaSophia" alt="Айя-София" loading="lazy" />
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot">🕌</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">15:00</div>
            <div class="tl-title">Голубая мечеть</div>
            <div class="tl-desc">Напротив Айя-Софии. Закрыта во время намаза (~30 мин, 5 раз в день).</div>
            <div class="tl-tags"><span class="tag free">Бесплатно</span></div>
          </div>
          <img class="tl-thumb" :src="img.blueMosque" alt="Голубая мечеть" loading="lazy" />
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot">🍽</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">16:00</div>
            <div class="tl-title">Обед — кёфте или дёнер</div>
            <div class="tl-desc">Кёфте с хлебом и айраном в lokanta. Или дёнер-дюрюм в лаваше. Ищите очередь из местных.</div>
            <div class="tl-tags"><span class="tag info">~150–200 лир/чел</span></div>
          </div>
          <img class="tl-thumb" :src="img.doner" alt="Дёнер" loading="lazy" />
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot">🛍</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">17:00</div>
            <div class="tl-title">Гранд Базар</div>
            <div class="tl-desc">4000+ лавок. Специи, украшения, ковры. Торгуйтесь — цены завышают в 2–3 раза.</div>
            <div class="tl-tags">
              <span class="tag free">Вход бесплатно</span>
              <span class="tag info">до 19:00</span>
            </div>
          </div>
          <img class="tl-thumb" :src="img.grandBazaar" alt="Гранд Базар" loading="lazy" />
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot">🌆</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">19:30</div>
            <div class="tl-title">Балат — вечерняя прогулка</div>
            <div class="tl-desc">Разноцветные дома, узкие улочки. Лучшее освещение для фото — вечером. 20 мин на трамвае от Sultanahmet.</div>
            <div class="tl-tags"><span class="tag free">Бесплатно</span></div>
          </div>
          <img class="tl-thumb" :src="img.balat" alt="Балат" loading="lazy" />
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot">🥙</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">21:00</div>
            <div class="tl-title">Ужин — бёрек + чорба</div>
            <div class="tl-desc">Слоёный бёрек с сыром + чечевичный суп (mercimek çorbası). В пекарнях Sultanahmet — дёшево и очень вкусно.</div>
            <div class="tl-tags"><span class="tag info">~150–200 лир/чел</span></div>
          </div>
          <img class="tl-thumb" :src="img.borek" alt="Бёрек" loading="lazy" />
        </div>
      </div>
    </div>

    <!-- DAY 2 -->
    <div class="day-header">📅 15 мая (пт) — Европейская сторона</div>
    <div class="timeline">

      <div class="tl-item">
        <div class="tl-dot">🏛</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">09:00</div>
            <div class="tl-title">Топкапы (опционально)</div>
            <div class="tl-desc">Дворец султанов. Гарем — отдельный билет. Прийти рано — очереди большие.</div>
            <div class="tl-tags">
              <span class="tag paid">~600 лир × 2 (~28 EUR)</span>
              <span class="tag info">+ Гарем 300 лир × 2</span>
            </div>
          </div>
          <img class="tl-thumb" :src="img.topkapi" alt="Топкапы" loading="lazy" />
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot">💧</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">11:00</div>
            <div class="tl-title">Базилика Цистерна (опционально)</div>
            <div class="tl-desc">Подземное водохранилище VI века — атмосферно. 300м от Айя-Софии.</div>
            <div class="tl-tags"><span class="tag paid">~500 лир × 2 (~24 EUR)</span></div>
          </div>
          <img class="tl-thumb" :src="img.cistern" alt="Базилика Цистерна" loading="lazy" />
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot">⛵</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">13:00</div>
            <div class="tl-title">Ортакой</div>
            <div class="tl-desc">Автобус 22E от Kabataş. Мечеть прямо у Босфора.</div>
            <div class="tl-tags"><span class="tag free">Вход бесплатно</span></div>
          </div>
          <img class="tl-thumb" :src="img.ortakoy" alt="Ортакой" loading="lazy" />
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot">🥔</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">13:30</div>
            <div class="tl-title">Кумпир — обязательно!</div>
            <div class="tl-desc">Запечённая картошка с начинками. Есть у воды с видом на мечеть и Босфор. Лучший кумпир в городе.</div>
            <div class="tl-tags"><span class="tag info">~150–200 лир</span></div>
          </div>
          <img class="tl-thumb" :src="img.kumpit" alt="Кумпир" loading="lazy" />
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot">🗼</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">15:30</div>
            <div class="tl-title">Район Галаты — пешком</div>
            <div class="tl-desc">Башня снаружи (не поднимаемся). Улочки, кофейни. Barnahtan — бесплатная терраса с видом на башню.</div>
            <div class="tl-tags"><span class="tag free">Бесплатно</span></div>
          </div>
          <img class="tl-thumb" :src="img.galata" alt="Галата" loading="lazy" />
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot">🍰</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">16:30</div>
            <div class="tl-title">Баклава + чай — Каракёй</div>
            <div class="tl-desc">Güllüoğlu в Karaköy — лучшая пахлава Стамбула. С фисташками или грецким орехом.</div>
            <div class="tl-tags"><span class="tag info">~100–150 лир за порцию</span></div>
          </div>
          <img class="tl-thumb" :src="img.baklava" alt="Баклава" loading="lazy" />
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot">🚋</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">17:30</div>
            <div class="tl-title">Истикляль + Таксим</div>
            <div class="tl-desc">1,4 км пешеходной улицы. Ретро-трамвай, кафе, магазины. Площадь Таксим в конце.</div>
            <div class="tl-tags"><span class="tag free">Бесплатно</span></div>
          </div>
          <img class="tl-thumb" :src="img.istiklal" alt="Истикляль" loading="lazy" />
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot">🥩</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">20:00</div>
            <div class="tl-title">Ужин — кебаб на Истикляль</div>
            <div class="tl-desc">Адана-кебаб или урфа-кебаб с лавашем на боковых улицах. Funicular F2 с Таксима вниз → трамвай T1 до отеля.</div>
            <div class="tl-tags"><span class="tag info">~200–300 лир/чел</span></div>
          </div>
          <img class="tl-thumb" :src="img.kofte" alt="Кебаб" loading="lazy" />
        </div>
      </div>
    </div>

    <!-- DAY 3 -->
    <div class="day-header">📅 16 мая (сб) — Азиатская сторона</div>
    <div class="timeline">

      <div class="tl-item">
        <div class="tl-dot">⛴</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">09:30</div>
            <div class="tl-title">Паром Эминёню → Кадыкёй</div>
            <div class="tl-desc">Пристань Eminönü. ~20 мин. Лучший вид на Стамбул — с воды.</div>
            <div class="tl-tags"><span class="tag info">По Istanbulkart</span></div>
          </div>
          <img class="tl-thumb" :src="img.bosphorus" alt="Паром Босфор" loading="lazy" />
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot">🦪</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">10:00</div>
            <div class="tl-title">Кадыкёй — рынок и завтрак</div>
            <div class="tl-desc">Мидье долма (мидии с рисом) — ~15–20 лир/шт, едят стоя прямо у лотка. Симит + турецкий кофе. Рыбный рынок.</div>
            <div class="tl-tags">
              <span class="tag free">Бесплатно</span>
              <span class="tag info">🦪 Мидье долма — обязательно!</span>
            </div>
          </div>
          <img class="tl-thumb" :src="img.kadikoy" alt="Кадыкёй" loading="lazy" />
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot">🌆</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">13:00</div>
            <div class="tl-title">Emaar SkyView — 300м</div>
            <div class="tl-desc">Метро M4 от Kadıköy. SkyWalk — стеклянный мост снаружи. Бронировать онлайн заранее.</div>
            <div class="tl-tags">
              <span class="tag paid">~1400 лир × 2 (~64 EUR)</span>
              <span class="tag info">до 22:00 | посл. вход 21:15</span>
            </div>
          </div>
          <img class="tl-thumb" :src="img.emaar" alt="Emaar SkyView" loading="lazy" />
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot">🏛</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">15:30</div>
            <div class="tl-title">Девичья башня (Kız Kulesi)</div>
            <div class="tl-desc">Паром от Üsküdar. Смотровая + кафе внутри.</div>
            <div class="tl-tags">
              <span class="tag paid">~650 лир × 2 (~30 EUR)</span>
              <span class="tag info">9:00–22:45</span>
            </div>
          </div>
          <img class="tl-thumb" :src="img.kizKulesi" alt="Девичья башня" loading="lazy" />
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot">⛴</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">17:30</div>
            <div class="tl-title">Паром назад + дондурма</div>
            <div class="tl-desc">От Üsküdar до Eminönü. Купить дондурма у Галатского моста — продавцы делают шоу, мороженое тягучее.</div>
            <div class="tl-tags"><span class="tag info">🍦 ~50–80 лир</span></div>
          </div>
          <img class="tl-thumb" :src="img.dondurma" alt="Дондурма" loading="lazy" />
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot">🐟</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">20:00</div>
            <div class="tl-title">Балык-экмек — ужин у воды</div>
            <div class="tl-desc">Рыба-гриль в хлебе с лодок у Галатского моста. Легенда Стамбула — есть обязательно.</div>
            <div class="tl-tags">
              <span class="tag info">~150–200 лир</span>
              <span class="tag free">📍 Eminönü</span>
            </div>
          </div>
          <img class="tl-thumb" :src="img.balikEkmek" alt="Балык-экмек" loading="lazy" />
        </div>
      </div>
    </div>

    <!-- DAY 4 -->
    <div class="day-header">📅 17 мая (вс) — Выезд</div>
    <div class="timeline">

      <div class="tl-item">
        <div class="tl-dot sleep">🏨</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time teal">до 12:00</div>
            <div class="tl-title">Выселение из отеля</div>
            <div class="tl-desc">Check-out до 12:00. Вещи оставить на ресепшн до вечера.</div>
            <div class="tl-tags"><span class="tag warn">⚠ Строго до 12:00</span></div>
          </div>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot">🛍</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time">12:00 – 17:00</div>
            <div class="tl-title">Египетский базар + набережная</div>
            <div class="tl-desc">Египетский (пряный) базар — специи, сухофрукты, лукум. Лучше Гранд Базара для еды. Последние сувениры.</div>
            <div class="tl-tags"><span class="tag free">Вход бесплатно</span></div>
          </div>
          <img class="tl-thumb" :src="img.egyptBazaar" alt="Египетский базар" loading="lazy" />
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot transit">🚇</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time red">17:30</div>
            <div class="tl-title">Выезд на Esenler</div>
            <div class="tl-desc">Забрать вещи из отеля → трамвай T1 до Aksaray → метро M1 до Esenler. ~40 мин.</div>
            <div class="tl-tags"><span class="tag warn">⚠ Быть до 18:30</span></div>
          </div>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot transit">🚌</div>
        <div class="tl-content">
          <div class="tl-body">
            <div class="tl-time red">19:00</div>
            <div class="tl-title">Автобус → Sunny Beach</div>
            <div class="tl-desc">Платформа 101–102. Прибытие 18 мая ~01:00. Билеты: 14035188 (Илья), 14035189 (Диана).</div>
            <div class="tl-tags">
              <span class="tag warn">⚠ Платф. 101–102</span>
              <span class="tag info">+905 497 681 606</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
