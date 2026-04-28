const u = (id, w = 700, h = 450) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

// Istanbul fallback — confirmed working
export const FALLBACK = u('1524231757912-21f4fe3a7200')

export const img = {
  // ── Header hero ──────────────────────────────────────
  header: u('1501854140801-50d01698950b', 1600, 700),

  // ── Places ───────────────────────────────────────────
  hagiaSophia: u('1524231757912-21f4fe3a7200'),   // Istanbul skyline ✅
  blueMosque:  u('1527838832700-5059252407fa'),    // Blue Mosque ✅
  grandBazaar: u('1530026405186-ed1f139313f3'),   // Grand Bazaar
  balat:       u('1569751016399-ba4b7c0f4a9f'),   // Colorful streets
  ortakoy:     u('1591878248028-0042b61f18be'),   // Ortakoy / Bosphorus
  galata:      u('1542996074-9d71a836c28c'),      // Galata area
  istiklal:    u('1573843981267-be1480ff72e5'),   // Istanbul street
  kadikoy:     u('1612195583950-b9b3a6d4e154'),   // Kadikoy
  topkapi:     u('1609618086613-1ccf90daacb9'),   // Topkapi
  cistern:     u('1558618666-fcd25c85cd64'),      // Underground water
  emaar:       u('1605122459886-be68ce8a5ccc'),   // Istanbul modern
  kizKulesi:   u('1580619305218-8423a7ef79b4'),   // Tower in water
  bosphorus:   u('1571146227543-e8b17ee0d4e4'),   // Bosphorus view
  egyptBazaar: u('1504870712367-3b8e3c30cd60'),   // Spice market

  // ── Food — breakfast / snack ──────────────────────────
  simit:            u('1549007994-cb92caebd54b'),  // Simit rings ✅
  balikEkmek:       u('1574484284002-952d92456975'), // Fish sandwich
  borek:            u('1518100499017-e33c7d07e33c'), // Pastry / börek
  turkishBreakfast: u('1555126634-323283e090fa'),  // Full breakfast ✅

  // ── Food — main ──────────────────────────────────────
  doner:  u('1561651823-34feb02250e4'),   // Doner ✅
  kofte:  u('1544025162-d76538b8c38a'),   // Meatballs
  corba:  u('1547592166-23ac45744acd'),   // Soup
  kumpit: u('1568901346745-a9d1af7d0228'), // Baked potato
  midye:  u('1534482421-64566f976cfa'),   // Mussels
  fish:   u('1519708227418-a8f5b1f18d70'), // Grilled fish

  // ── Food — sweets ─────────────────────────────────────
  baklava:    u('1598511726623-d2e9996892f0'),  // Baklava ✅
  dondurma:   u('1488900128323-21503983a07e'),  // Ice cream
  kazandibi:  u('1565958011703-44f9829ba187'),  // Pudding
  cheesecake: u('1533134242443-d4fd215305ad'),  // Cheesecake

  // ── Food — drinks ─────────────────────────────────────
  cay:     u('1576092768241-dec231879fc3'),  // Turkish tea ✅
  coffee:  u('1596079890702-33ad53edce32'),  // Turkish coffee
  ayran:   u('1503764654157-72d979d9af2f'),  // Ayran
  salgam:  u('1568702846914-96b305d2aaeb'),  // Salgam
}
