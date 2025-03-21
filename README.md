# Expo 2025 Osaka Interactive Map

It's a pain to find pavilions of Expo 2025. So here is a simple interactive map.

The map image is composed by [Mouse Around the World](https://mousearoundtheworld.com/updated-osaka-expo-2025-map/). Please visit him a visit!

## How to Add Regions

Open your devtool and click anywhere on the map. It will output transformed coordinates.

Open `src/regions.tsx`. Append a new region to `regions`. Add those coordinates to the `coords` field.

Here is an example region:

```javascript
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
}
```

## ToDos

- [x] show regions
- [ ] manually create all regions (LLMs are not smart enough for this!)
- [x] minimum i18n support
  - [x] `lang` query
  - [x] fallback to the browser setting
- [ ] a region name toggler to toggle all names
- [ ] search and highlight/active search results

## references

- [Updated Osaka Expo 2025 Map!](https://mousearoundtheworld.com/updated-osaka-expo-2025-map/)
- [国内パビリオン](https://www.expo2025.or.jp/domestic-pv/)
- [海外パビリオン](https://www.expo2025.or.jp/official-participant/)
- [海外パビリオンの出展状況について](https://www.expo2025.or.jp/news/news-20250217-04/)
