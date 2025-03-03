# Expo 2025 Osaka Interactive Map

It's a pain to find pavilions of Expo 2025. So here is a simple interactive map.

## How to Add Regions

Open `src/regions.tsx`. Append a new region `regions`.

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
- [ ] region name toggler
- [ ] minimum i18n support
  - [ ] `lang` query
  - [ ] fallback to the browser setting
- [ ] search
