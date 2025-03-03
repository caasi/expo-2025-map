import { MouseEvent, useRef, useState } from 'react'
import mapImage from './assets/MAtW_expo_2025.webp'

import regions from './regions'

import './App.css'

function App() {
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

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const x = roundToTwo((e.clientX - containerRect.left) * scale.x)
    const y = roundToTwo((e.clientY - containerRect.top) * scale.y)
    console.log(`{ x: ${x}, y: ${y} },`)
  }

  return (
    <>
      <div id="map" ref={(elem) => {
        sizeObserverRef.current.disconnect()
        if (!elem) return
        sizeObserverRef.current.observe(elem)
      }}>
        <img
          ref={(elem) => {
            if (!elem) return
            if (imageDim.x !== elem.naturalWidth || imageDim.y !== elem.naturalHeight) {
              setImageDim({
                x: elem.naturalWidth,
                y: elem.naturalHeight
              })
            }
          }}
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
                    {region.names.en}
                  </text>
                </g>
              )
            })
          }
        </svg>
      </div>
    </>
  )
}

function roundToTwo(num: number) {
  return Math.round((num + Number.EPSILON) * 100) / 100
}

export default App
