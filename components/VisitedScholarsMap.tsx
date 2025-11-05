'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import visitedScholars from '@/public/data/visited-scholars.json'
import 'leaflet/dist/leaflet.css'

interface VisitedScholar {
  id: number
  name: string
  institution: string
  country: string
  city: string
  coordinates: number[]
  visitPeriod: string
  research: string
}

// 动态导入地图组件以避免SSR问题
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
      <div className="text-gray-500">Loading map...</div>
    </div>
  )
})

const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), {
  ssr: false
})

const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), {
  ssr: false
})

const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), {
  ssr: false
})

// 动态导入Leaflet以避免SSR问题
let L: any = null
if (typeof window !== 'undefined') {
  L = require('leaflet')

  // 修复Leaflet默认图标问题
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  })
}

// 自定义红色图标
const getRedIcon = () => {
  if (!L) return null
  return new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
      <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 0C5.596 0 0 5.596 0 12.5c0 12.5 12.5 28.5 12.5 28.5s12.5-16 12.5-28.5C25 5.596 19.404 0 12.5 0z" fill="#ef4444" stroke="#dc2626" stroke-width="2"/>
        <circle cx="12.5" cy="12.5" r="5" fill="white"/>
      </svg>
    `),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]
  })
}

function MapComponent() {
  const [selectedScholar, setSelectedScholar] = useState<VisitedScholar | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
        <div className="text-gray-500">Loading map...</div>
      </div>
    )
  }

  // 计算地图中心点（所有学者的平均坐标）
  const center: [number, number] = visitedScholars.length > 0
    ? [
        visitedScholars.reduce((sum: number, scholar) => sum + scholar.coordinates[1], 0) / visitedScholars.length,
        visitedScholars.reduce((sum: number, scholar) => sum + scholar.coordinates[0], 0) / visitedScholars.length
      ]
    : [20, 0] // 默认中心点

  const redIcon = getRedIcon()

  return (
    <MapContainer
      center={center}
      zoom={2}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
      dragging={true}
      touchZoom={true}
      doubleClickZoom={true}
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* 访问学者标记 */}
      {visitedScholars.map((scholar: VisitedScholar) => (
        <Marker
          key={scholar.id}
          position={[scholar.coordinates[1], scholar.coordinates[0]] as [number, number]}
          icon={redIcon}
          eventHandlers={{
            click: () => setSelectedScholar(scholar),
          }}
        >
          <Popup>
            <div className="p-2 min-w-[200px]">
              <h3 className="font-bold text-gray-800 mb-1">{scholar.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{scholar.institution}</p>
              <p className="text-sm text-gray-600 mb-1">{scholar.city}, {scholar.country}</p>
              <p className="text-sm text-blue-600 mb-1">{scholar.visitPeriod}</p>
              <p className="text-sm text-gray-500">{scholar.research}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default function VisitedScholarsMap() {
  const [selectedScholar, setSelectedScholar] = useState<VisitedScholar | null>(null)

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* 地图容器 */}
      <div className="relative bg-white rounded-lg overflow-hidden shadow-lg touch-none" style={{ height: '400px', minHeight: '300px' }}>
        <MapComponent />
      </div>

      {/* 统计信息 */}
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>Total Visited Scholars: <span className="font-semibold text-blue-600">{visitedScholars.length}</span></p>
        <p>Countries Represented: <span className="font-semibold text-blue-600">
          {new Set(visitedScholars.map((s: VisitedScholar) => s.country)).size}
        </span></p>
      </div>

      {/* 选中学者详细信息 */}
      {selectedScholar && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-bold text-gray-800 mb-2">Selected Scholar</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><span className="font-semibold">Name:</span> {selectedScholar.name}</p>
              <p><span className="font-semibold">Institution:</span> {selectedScholar.institution}</p>
              <p><span className="font-semibold">Location:</span> {selectedScholar.city}, {selectedScholar.country}</p>
            </div>
            <div>
              <p><span className="font-semibold">Visit Period:</span> {selectedScholar.visitPeriod}</p>
              <p><span className="font-semibold">Research:</span> {selectedScholar.research}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}