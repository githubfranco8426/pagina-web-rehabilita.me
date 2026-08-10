"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { brand } from "@/lib/brand"

const CLINIC_POSITION: [number, number] = [-20.2435143, -70.1358875]

const fixLeafletIcon = () => {
  delete (L.Icon.Default.prototype as any)._getIconUrl

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  })
}

export function ClinicMap() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    fixLeafletIcon()
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-full w-full bg-muted animate-pulse" />
  }

  return (
    <MapContainer
      center={CLINIC_POSITION}
      zoom={16}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={CLINIC_POSITION}>
        <Popup>
          <div className="text-sm">
            <p className="font-medium">{brand.name}</p>
            <p>{brand.contact.address}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
