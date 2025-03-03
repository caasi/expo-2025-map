interface Region {
  label: string
  names: Partial<Record<string, string>>
  url?: string
  coords: { x: number, y: number }[]
}

const regions: Region[] = [
  {
    label: 'X01',
    names: {
      en: 'Better Co-Being',
      ja: 'Better Co-Being',
      'zh-CN': 'Better Co-Being',
      'zh-TW': 'Better Co-Being'
    },
    url: 'https://co-being.jp/expo2025/',
    coords: [
      { x: 2299.41, y: 1905.33 },
      { x: 2330.27, y: 1893.76 },
      { x: 2380.41, y: 2078.90 },
      { x: 2318.7, y: 2094.33 },
      { x: 2295.56, y: 2036.47 },
      { x: 2264.71, y: 2032.62 },
      { x: 2260.85, y: 1986.33 },
      { x: 2276.28, y: 1978.62 },
      { x: 2291.71, y: 1928.48 },
    ]
  },
  {
    label: 'X02',
    names: {
      en: 'Future of Life',
      ja: 'いのちの未来',
      'zh-CN': '生命的未来',
      'zh-TW': '生命的未來'
    },
    url: 'https://expo2025future-of-life.com/',
    coords: [
      { x: 2266.37, y: 2131.57 },
      { x: 2392.12, y: 2118.99 },
      { x: 2354.4, y: 2241.61 },
      { x: 2260.08, y: 2216.45 },
    ]
  },
  {
    label: 'X03',
    names: {
      en: 'Playground of Life: Jellyfish Pavilion',
      ja: 'いのちの遊び場 クラゲ館',
      'zh-CN': '生命之游乐场水母馆',
      'zh-TW': '生命之遊樂場水母館'
    },
    url: 'https://expo2025-kuragepj.com/',
    coords: [
      { x: 2244.36, y: 2291.91 },
      { x: 2260.08, y: 2282.48 },
      { x: 2310.38, y: 2295.05 },
      { x: 2319.81, y: 2317.06 },
      { x: 2294.66, y: 2370.51 },
      { x: 2275.8, y: 2370.51 },
      { x: 2250.65, y: 2364.22 },
      { x: 2238.07, y: 2342.21 },
      { x: 2234.93, y: 2310.77 },
    ]
  },
  {
    label: 'X04',
    names: {
      en: 'null²',
      ja: 'null²',
      'zh-CN': 'null²',
      'zh-TW': 'null²'
    },
    url: 'https://expo2025.digitalnatureandarts.or.jp/',
    coords: [
      { x: 2206.63, y: 2348.5 },
      { x: 2238.07, y: 2361.07 },
      { x: 2272.66, y: 2389.37 },
      { x: 2278.94, y: 2414.52 },
      { x: 2260.08, y: 2439.67 },
      { x: 2269.51, y: 2445.96 },
      { x: 2263.22, y: 2474.26 },
      { x: 2241.22, y: 2464.82 },
      { x: 2216.07, y: 2439.67 },
      { x: 2200.35, y: 2420.81 },
      { x: 2190.91, y: 2401.95 },
      { x: 2184.63, y: 2383.08 },
      { x: 2194.06, y: 2367.36 },
    ]
  },
  {
    label: 'X05',
    names: {
      en: 'Dynamic Equilibrium of Life',
      ja: 'いのち動的平衡館',
      'zh-CN': '生命动态平衡馆',
      'zh-TW': '生命動態平衡館'
    },
    url: 'https://www.expo2025-fukuoka-shin-ichi.jp/',
    coords: [
      { x: 2002.28, y: 2320.2 },
      { x: 2096.6, y: 2332.78 },
      { x: 2096.6, y: 2357.93 },
      { x: 2058.87, y: 2379.94 },
      { x: 2030.57, y: 2383.08 },
      { x: 2002.28, y: 2364.22 },
    ]
  },
  {
    label: 'X06',
    names: {
      en: 'Live Earth Journey',
      ja: 'いのちめぐる冒険',
      'zh-CN': '围绕生命的冒险',
      'zh-TW': '圍繞生命的冒險'
    },
    url: 'https://shojikawamori.jp/expo2025/',
    coords: [
      { x: 2014.85, y: 2229.03 },
      { x: 2052.58, y: 2229.03 },
      { x: 2087.16, y: 2238.46 },
      { x: 2102.88, y: 2266.76 },
      { x: 2058.87, y: 2295.05 },
      { x: 2002.28, y: 2276.19 },
    ]
  },
  {
    label: 'X07',
    names: {
      en: 'Earth Mart',
      ja: 'Earth Mart',
      'zh-CN': 'Earth Mart',
      'zh-TW': 'Earth Mart'
    },
    url: 'https://expo2025earthmart.jp/',
    coords: [
      { x: 2093.45, y: 1949.22 },
      { x: 2115.46, y: 1958.65 },
      { x: 2090.31, y: 2096.99 },
      { x: 2156.33, y: 2115.85 },
      { x: 2131.18, y: 2163.01 },
      { x: 2043.15, y: 2141 },
    ]
  },
  {
    label: 'X08',
    names: {
      en: 'Dialogue Theater –sign of life–',
      ja: 'Dialogue Theater –いのちのあかし–',
      'zh-CN': 'Dialogue Theater –生命之明志–',
      'zh-TW': 'Dialogue Theater –生命之明志–'
    },
    url: 'https://expo2025-inochinoakashi.com/',
    coords: [
      { x: 2124.89, y: 1974.37 },
      { x: 2197.2, y: 1958.65 },
      { x: 2206.63, y: 2030.96 },
      { x: 2156.33, y: 2034.11 },
      { x: 2156.33, y: 2056.12 },
      { x: 2181.48, y: 2068.69 },
      { x: 2165.76, y: 2109.56 },
      { x: 2102.88, y: 2084.41 },
    ]
  },
  {
    label: 'E01',
    names: {
      en: 'Kansai Pavilion',
      ja: '関西パビリオン',
      'zh-CN': '关西展馆',
      'zh-TW': '關西展館'
    },
    url: 'https://www.expo2025.or.jp/domestic-pv/kansai-pv/',
    coords: [
      { x: 2983.18, y: 1386.46 },
      { x: 3049.2, y: 1373.89 },
      { x: 3096.36, y: 1424.19 },
      { x: 3058.63, y: 1540.51 },
      { x: 3014.62, y: 1559.38 },
      { x: 3008.33, y: 1515.36 },
      { x: 2961.17, y: 1468.2 },
    ]
  },
  {
    label: 'E02',
    names: {
      en: 'Osaka Healthcare Pavilion Nest for Reborn',
      ja: '大阪ヘルスケアパビリオン Nest for Reborn',
      'zh-CN': '大阪保健馆 Nest for Reborn',
      'zh-TW': '大阪保健館 Nest for Reborn'
    },
    url: 'https://www.expo2025.or.jp/domestic-pv/osaka-pv/',
    coords: [
      { x: 3105.79, y: 1465.06 },
      { x: 3218.97, y: 1392.75 },
      { x: 3266.13, y: 1427.33 },
      { x: 3234.69, y: 1512.22 },
      { x: 3215.83, y: 1625.4 },
      { x: 3190.68, y: 1653.7 },
      { x: 3096.36, y: 1619.11 },
      { x: 3055.49, y: 1562.52 },
    ]
  },
  {
    label: 'E03',
    names: {
      en: 'NTT Pavilion',
      ja: 'NTT Pavilion',
      'zh-CN': 'NTT Pavilion',
      'zh-TW': 'NTT Pavilion'
    },
    url: 'https://www.expo2025.or.jp/domestic-pv/ntt/',
    coords: [
      { x: 3275.56, y: 1487.07 },
      { x: 3385.6, y: 1518.51 },
      { x: 3391.89, y: 1575.1 },
      { x: 3363.59, y: 1672.56 },
      { x: 3240.98, y: 1653.7 },
      { x: 3237.84, y: 1600.25 },
      { x: 3250.41, y: 1549.95 },
    ]
  }
]

export default regions