import React, { useState, useEffect } from "react"
import { Map } from "@vis.gl/react-google-maps"

interface GoogleMapProps {
  center?: { lat: number; lng: number }
  zoom?: number
  onCenterChange?: (center: { lat: number; lng: number }) => void
  onZoomChange?: (zoom: number) => void
  newCenter?: { lat: number; lng: number }
  newZoom?: number
}

const GoogleMap = ({
  center = { lat: 39.8283, lng: -98.5795 },
  zoom = 4,
  onCenterChange,
  onZoomChange,
  newCenter,
  newZoom,
}: GoogleMapProps) => {
  const [mapCenter, setMapCenter] = useState(center)
  const [mapZoom, setMapZoom] = useState(zoom)

  const handleCameraChanged = (ev: any) => {
    const updatedCenter = ev.detail.center
    const updatedZoom = ev.detail.zoom

    setMapCenter(updatedCenter)
    setMapZoom(updatedZoom)

    if (onCenterChange) onCenterChange(updatedCenter)
    if (onZoomChange) onZoomChange(updatedZoom)
  }

  useEffect(() => {
    if (newCenter) {
        setMapCenter(newCenter)
    }
    if (newZoom !== undefined) {
        setMapZoom(newZoom)
    }
  }, [newCenter, newZoom])

  return (
    <div className="h-[400px] w-full">
      <Map
        center={mapCenter}
        zoom={mapZoom}
        onCameraChanged={handleCameraChanged}
      />
    </div>
  )
}

export default GoogleMap
