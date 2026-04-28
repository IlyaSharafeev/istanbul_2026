const u = (id, w = 700, h = 450) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

// Istanbul skyline — confirmed working
export const FALLBACK = u('1524231757912-21f4fe3a7200')

export const img = {
  // ── Header hero ──────────────────────────────────────
  header: u('1763965367191-6455ef032c79', 1600, 700), // Istanbul skyline panoramic ✅

  // ── Places ───────────────────────────────────────────
  hagiaSophia: u('1524231757912-21f4fe3a7200'),        // Istanbul / Hagia Sophia ✅
  blueMosque:  u('1527838832700-5059252407fa'),         // Blue Mosque ✅
  grandBazaar: u('1662633272262-7615f6aa4081'),         // Grand Bazaar ✅
  balat:       u('1750387354103-7c932c3c5a01'),         // Balat colorful streets ✅
  ortakoy:     u('1759347171702-e9cae049bc01'),         // Ortakoy mosque + Bosphorus ✅
  galata:      u('1746708221016-e36a3c8f7c03'),         // Galata Tower ✅
  istiklal:    u('1715451807224-838228878e35'),          // Istiklal Avenue ✅
  kadikoy:     u('1614038170763-60d9f6bd36f2'),         // Kadikoy market ✅
  topkapi:     u('1752115178206-9561a29012ba'),         // Topkapi Palace ✅
  cistern:     u('1707745212691-1b88478681d8'),          // Basilica Cistern ✅
  emaar:       u('1600425983819-bfa245a64f44'),         // Istanbul cityscape ✅
  kizKulesi:   u('1614714047524-c1ce08ee840c'),         // Maiden's Tower ✅
  bosphorus:   u('1491252476179-5f2566566ab8'),         // Bosphorus ferry ✅
  egyptBazaar: u('1629649407271-2dac934c1f1b'),         // Spice Bazaar ✅

  // ── Food — breakfast / snack ──────────────────────────
  simit:            u('1629029703986-e784a92521a4'),    // Simit rings ✅
  balikEkmek:       u('1574484284002-952d92456975'),    // Fish sandwich ✅
  borek:            u('1561107904-b67f37255e2b'),       // Börek pastry ✅
  turkishBreakfast: u('1580069491658-8220b0e8722d'),   // Turkish breakfast spread ✅

  // ── Food — main ──────────────────────────────────────
  doner:  u('1530469912745-a215c6b256ea'),              // Döner spit ✅
  kofte:  u('1594980796927-5c7310699cb6'),              // Köfte meatballs ✅
  corba:  u('1604579278540-db35e2fa658a'),              // Turkish lentil soup ✅
  kumpit: u('1636799091321-277d21cd307f'),              // Kumpir ✅
  midye:  u('1594804233323-786d5c2ed9fb'),              // Mussels ✅
  fish:   u('1580476262798-bddd9f4b7369'),              // Grilled fish ✅

  // ── Food — sweets ─────────────────────────────────────
  baklava:    u('1598511726623-d2e9996892f0'),          // Baklava ✅
  dondurma:   u('1488900128323-21503983a07e'),          // Dondurma ice cream ✅
  kazandibi:  u('1565958011703-44f9829ba187'),          // Kazandibi pudding
  cheesecake: u('1533134242443-d4fd215305ad'),          // Cheesecake

  // ── Food — drinks ─────────────────────────────────────
  cay:     u('1613987108430-b4bb3863e595'),             // Turkish tea ✅
  coffee:  u('1757079649052-a24c6ab32c64'),             // Turkish coffee ✅
  ayran:   u('1503764654157-72d979d9af2f'),             // Ayran
  salgam:  u('1568702846914-96b305d2aaeb'),             // Salgam
}
