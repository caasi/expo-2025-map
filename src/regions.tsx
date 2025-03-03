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
  }
]

export default regions