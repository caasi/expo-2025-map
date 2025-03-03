import { MouseEvent, ChangeEvent, useRef, useState } from 'react'
import mapImage from './assets/MAtW_expo_2025.webp'

import regions from './regions'

import './App.css'

function App() {
  const lang = getLanguage()
  const [containerRect, setContainerRect] = useState<DOMRect>(new DOMRect())
  const sizeObserverRef = useRef<ResizeObserver>(new ResizeObserver((entries) => {
    for (const entry of entries) {
      if (entry.contentRect.width !== containerRect.width || entry.contentRect.height !== containerRect.height) {
        setContainerRect(entry.contentRect)
      }
    }
  }))
  const [imageDim, setImageDim] = useState<{ x: number, y: number }>({ x: 1, y: 1 })
  const scale = { x: containerRect.width / imageDim.x, y: containerRect.height / imageDim.y }

  // observe the size of the map container so everything can be scaled properly
  const handleMapRef = (elem: HTMLDivElement | null) => {
    sizeObserverRef.current.disconnect()
    if (!elem) return
    sizeObserverRef.current.observe(elem)
  }

  // update the image dimensions when the image is loaded
  const handleImageRef = (elem: HTMLImageElement | null) => {
    if (!elem) return
    if (imageDim.x !== elem.naturalWidth || imageDim.y !== elem.naturalHeight) {
      setImageDim({
        x: elem.naturalWidth,
        y: elem.naturalHeight
      })
    }
  }

  // output the coordinates of the clicked point so that we can add them to the regions
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const x = roundToTwo((e.clientX - containerRect.left) * scale.x)
    const y = roundToTwo((e.clientY - containerRect.top) * scale.y)
    console.log(`{ x: ${x}, y: ${y} },`)
  }

  // change the language in the query string
  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const url = new URL(window.location.href)
    const lang = e.currentTarget.value
    if (lang === navigator.language) {
      url.searchParams.delete('lang')
      window
        .history
        .pushState({}, '', url.toString())
      return
    }
    url.searchParams.set('lang', lang)
    window
      .history
      .pushState({}, '', url.toString())
  }

  return (
    <div id="app">
      <div id="map" ref={handleMapRef}>
        <img
          ref={handleImageRef}
          src={mapImage}
          alt="Map of the World Expo 2025"
          onClick={handleClick}
        />
        <svg
          id="regions"
          width={containerRect.width}
          height={containerRect.height}
          viewBox={`0 0 ${imageDim.x} ${imageDim.y}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {
            regions.map(region => {
              const center = region.coords.reduce((acc, coord) => {
                acc.x += coord.x
                acc.y += coord.y
                return acc
              }, { x: 0, y: 0 })
              center.x /= region.coords.length
              center.y /= region.coords.length
              return (
                <g key={region.label}>
                  <polygon
                    points={region.coords.map(coord => `${coord.x},${coord.y}`).join(' ')}
                  />
                  <text x={center.x} y={center.y} fontSize={16 / scale.x}>
                    {region.names[lang] || region.names.en}
                  </text>
                </g>
              )
            })
          }
        </svg>
      </div>
      <div id="actions">
        <select value={lang} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="ja">日本語</option>
          <option value="zh-CN">简体中文</option>
          <option value="zh-TW">繁體中文</option>
        </select>
      </div>
    </div>
  )
}

function roundToTwo(num: number) {
  return Math.round((num + Number.EPSILON) * 100) / 100
}

function getLanguage() {
  const query = new URLSearchParams(window.location.search)
  const lang = query.get('lang') ?? navigator.language
  return lang
}

export default App
