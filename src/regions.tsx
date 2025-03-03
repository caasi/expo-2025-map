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
  }
]

export default regions