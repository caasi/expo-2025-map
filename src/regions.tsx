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
  },
  {
    label: 'E04',
    names: {
      en: 'Pop-Up Stage Outer East',
      ja: 'ポップアップステージ（東）',
      'zh-CN': '弹出舞台(东)',
      'zh-TW': '彈出舞台(東)'
    },
    coords: [
      { x: 3212.69, y: 1700.85 },
      { x: 3269.28, y: 1697.71 },
      { x: 3269.28, y: 1823.47 },
      { x: 3225.26, y: 1832.9 },
    ]
  },
  {
    label: 'E05',
    names: {
      en: 'Mitsubishi Pavilion',
      ja: '三菱未来館',
      'zh-CN': '三菱未来馆',
      'zh-TW': '三菱未來館'
    },
    url: 'https://www.expo2025.or.jp/domestic-pv/mitsubishi/',
    coords: [
      { x: 3555.37, y: 1990.09 },
      { x: 3659.12, y: 1977.52 },
      { x: 3728.29, y: 2037.25 },
      { x: 3728.29, y: 2074.98 },
      { x: 3665.41, y: 2090.7 },
      { x: 3583.67, y: 2056.12 },
      { x: 3599.39, y: 2071.84 },
      { x: 3555.37, y: 2030.96 },
    ]
  },
  {
    label: 'E06',
    names: {
      en: 'Panasonic Pavilion "Nomo No Kuni"',
      ja: 'パナソニックグループ パビリオン「ノモの国」',
      'zh-CN': '松下集团展馆“野摩之国”',
      'zh-TW': '松下集團展館“野摩之國”'
    },
    url: 'https://www.expo2025.or.jp/domestic-pv/panasonic/',
    coords: [
      { x: 3470.49, y: 1990.09 },
      { x: 3514.5, y: 1961.8 },
      { x: 3621.39, y: 2128.43 },
      { x: 3621.39, y: 2150.43 },
      { x: 3555.37, y: 2188.16 },
      { x: 3542.8, y: 2181.87 },
      { x: 3505.07, y: 2125.28 },
      { x: 3457.91, y: 2037.25 },
      { x: 3464.2, y: 2002.67 },
    ]
  },
  {
    label: 'E07',
    names: {
      en: 'Sumitomo Pavilion',
      ja: '住友館',
      'zh-CN': '住友馆',
      'zh-TW': '住友館'
    },
    url: 'https://www.expo2025.or.jp/domestic-pv/sumitomo/',
    coords: [
      { x: 3250.41, y: 1917.78 },
      { x: 3379.31, y: 1883.2 },
      { x: 3388.74, y: 1971.23 },
      { x: 3288.14, y: 2008.96 },
    ]
  },
  {
    label: 'E08',
    names: {
      en: 'Electric Power Pavilion - Eggs of Possibilities',
      ja: '電力館 可能性のタマゴたち',
      'zh-CN': '电力馆可能的蛋们',
      'zh-TW': '電力館可能的蛋們'
    },
    url: 'https://www.expo2025.or.jp/domestic-pv/electric/',
    coords: [
      { x: 3181.25, y: 1892.63 },
      { x: 3178.1, y: 1902.06 },
      { x: 3222.12, y: 1892.63 },
      { x: 3250.41, y: 1920.93 },
      { x: 3247.27, y: 1968.09 },
      { x: 3237.84, y: 1986.95 },
      { x: 3250.41, y: 1996.38 },
      { x: 3250.41, y: 2034.11 },
      { x: 3231.55, y: 2049.83 },
      { x: 3152.95, y: 2049.83 },
      { x: 3152.95, y: 1952.37 },
      { x: 3156.09, y: 1952.37 },
      { x: 3162.38, y: 1920.93 },
    ]
  },
  {
    label: 'E09',
    names: {
      en: 'Women’s Pavilion',
      ja: 'ウーマンズ パビリオン',
      'zh-CN': '妇女展馆',
      'zh-TW': '婦女展館'
    },
    url: 'https://www.expo2025.or.jp/domestic-pv/womens-pv/',
    coords: [
      { x: 3140.38, y: 2065.55 },
      { x: 3404.46, y: 2062.4 },
      { x: 3404.46, y: 2134.71 },
      { x: 3332.15, y: 2134.71 },
      { x: 3288.14, y: 2109.56 },
      { x: 3237.84, y: 2109.56 },
      { x: 3181.25, y: 2112.71 },
      { x: 3159.24, y: 2128.43 },
      { x: 3137.23, y: 2093.84 },
    ]
  },
  {
    label: 'E10',
    names: {
      en: 'Japan Pavilion',
      ja: '日本館',
      'zh-CN': '日本馆',
      'zh-TW': '日本館'
    },
    url: 'https://www.expo2025.or.jp/domestic-pv/japanese-government/',
    coords: [
      { x: 3178.1, y: 2118.99 },
      { x: 3278.71, y: 2115.85 },
      { x: 3351.02, y: 2153.58 },
      { x: 3395.03, y: 2216.45 },
      { x: 3410.75, y: 2216.45 },
      { x: 3413.9, y: 2288.76 },
      { x: 3429.62, y: 2295.05 },
      { x: 3445.33, y: 2357.93 },
      { x: 3439.05, y: 2383.08 },
      { x: 3385.6, y: 2370.51 },
      { x: 3347.87, y: 2405.09 },
      { x: 3319.58, y: 2379.94 },
      { x: 3278.71, y: 2386.23 },
      { x: 3234.69, y: 2351.64 },
      { x: 3184.39, y: 2348.5 },
      { x: 3159.24, y: 2354.79 },
      { x: 3146.66, y: 2354.79 },
      { x: 3115.22, y: 2295.05 },
      { x: 3118.37, y: 2194.45 },
      { x: 3140.38, y: 2150.43 },
    ]
  },
  {
    label: 'E11',
    names: {
      en: 'EXPO Hall',
      ja: 'EXPO ホール',
      'zh-CN': 'EXPO大厅',
      'zh-TW': 'EXPO大廳'
    },
    url: 'https://www.expo2025.or.jp/expo-map-index/main-facilities/expohall/',
    coords: [
      { x: 3165.53, y: 2357.93 },
      { x: 3218.97, y: 2351.64 },
      { x: 3275.56, y: 2389.37 },
      { x: 3366.74, y: 2420.81 },
      { x: 3369.88, y: 2436.53 },
      { x: 3382.46, y: 2452.25 },
      { x: 3338.44, y: 2587.44 },
      { x: 3181.25, y: 2537.13 },
      { x: 3156.09, y: 2537.13 },
      { x: 3149.81, y: 2521.41 },
      { x: 3127.8, y: 2518.27 },
      { x: 3102.65, y: 2467.97 },
      { x: 3112.08, y: 2411.38 },
      { x: 3140.38, y: 2373.65 },
    ]
  },
  {
    label: 'E12',
    names: {
      en: 'EXPO National Day Hall',
      ja: 'EXPO ナショナルデーホール',
      'zh-CN': 'EXPO国家日大厅',
      'zh-TW': 'EXPO國家日大廳'
    },
    url: 'https://www.expo2025.or.jp/expo-map-index/main-facilities/exponationaldayhall/',
    coords: [
      { x: 2970.6, y: 2622.02 },
      { x: 2989.47, y: 2600.01 },
      { x: 3017.76, y: 2606.3 },
      { x: 3090.07, y: 2578 },
      { x: 3118.37, y: 2590.58 },
      { x: 3127.8, y: 2612.59 },
      { x: 2992.61, y: 2662.89 },
    ]
  },
  {
    label: 'E13',
    names: {
      en: 'East Gallery',
      ja: 'ギャラリー EAST',
      'zh-CN': '画廊EAST',
      'zh-TW': '畫廊EAST'
    },
    coords: [
      { x: 3024.05, y: 2656.6 },
      { x: 3130.94, y: 2618.88 },
      { x: 3137.23, y: 2666.03 },
      { x: 3039.77, y: 2691.18 },
    ]
  },
  {
    label: 'E15',
    names: {
      en: 'Pop-Up Stage South',
      ja: 'ポップアップステージ（南）',
      'zh-CN': '弹出舞台(南)',
      'zh-TW': '彈出舞台(南)'
    },
    coords: [
      { x: 2926.59, y: 2694.33 },
      { x: 3011.47, y: 2666.03 },
      { x: 3033.48, y: 2700.62 },
      { x: 2970.6, y: 2732.06 },
    ]
  },
  {
    label: 'E16',
    names: {
      en: 'Guest House',
      ja: '迎賓館',
      'zh-CN': '迎宾馆',
      'zh-TW': '迎賓館'
    },
    url: 'https://www.expo2025.or.jp/expo-map-index/main-facilities/guesthouse/',
    coords: [
      { x: 3181.25, y: 2615.73 },
      { x: 3354.16, y: 2669.18 },
      { x: 3357.31, y: 2681.75 },
      { x: 3313.29, y: 2820.09 },
      { x: 3291.28, y: 2813.8 },
      { x: 3275.56, y: 2864.1 },
      { x: 3193.82, y: 2845.24 },
      { x: 3190.68, y: 2823.23 },
      { x: 3140.38, y: 2810.65 },
      { x: 3140.38, y: 2791.79 },
      { x: 3146.66, y: 2772.93 },
      { x: 3137.23, y: 2766.64 },
      { x: 3130.94, y: 2754.06 },
    ]
  },
  {
    label: 'S01',
    names: {
      en: 'Commons-C',
      ja: 'コモンズ-C',
      'zh-CN': 'Commons-C',
      'zh-TW': 'Commons-C'
    },
    coords: [
      { x: 1863.95, y: 1760.59 },
      { x: 1999.14, y: 1773.16 },
      { x: 1992.85, y: 1873.77 },
      { x: 1860.8, y: 1864.34 },
    ]
  },
  {
    label: 'S02',
    names: {
      en: 'Republic of Chile Pavilion',
      ja: 'チリ共和国パビリオン',
      'zh-CN': '智利共和国馆',
      'zh-TW': '智利共和國館'
    },
    url: 'https://expo-osaka.prochile.gob.cl/',
    coords: [
      { x: 1813.64, y: 1801.46 },
      { x: 1845.08, y: 1810.89 },
      { x: 1823.08, y: 1880.06 },
      { x: 1797.92, y: 1870.63 },
      { x: 1797.92, y: 1851.76 },
    ]
  }
]

export default regions