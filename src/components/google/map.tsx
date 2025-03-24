import {
    useMap,
    Map,
    MapCameraChangedEvent
} from "@vis.gl/react-google-maps"
import { useEffect, useState } from "react"

interface GoogleMapsProps {
    place: google.maps.places.PlaceResult | null
    marker?: google.maps.marker.AdvancedMarkerElement | null
    className?: string
}

interface CameraProps {
    center: {lat: number, lng: number}
    zoom: number
}

const GoogleMaps = ({place, marker, className}: GoogleMapsProps) => { // eslint-disable-line
    const map = useMap()

    const [camera, setCamera] = useState<CameraProps>({center: { lat: 39.8283, lng: -98.5795 }, zoom: 4})

    const handleCameraChanged = (e: MapCameraChangedEvent) => {
        setCamera(e.detail)
    }

    useEffect(() => {
        if (!map) return

        if (place?.geometry?.location) {
            setCamera({
                center: {
                    lat: place.geometry.location.lat(), 
                    lng: place.geometry.location.lng()
                }, 
                zoom: 13
            })
        }

        if (place?.geometry?.viewport) {
            map.fitBounds(place.geometry?.viewport)
        }
    }, [map, place])

    return (
        <Map
            mapId={'61d02bfb9df84225'}
            defaultZoom={camera.zoom}
            defaultCenter={camera.center}
            onCameraChanged={handleCameraChanged}
            gestureHandling={'greedy'}
            className={`w-75 h-[600px] ${className ? className : ""}`}
        />
    )
}

export default GoogleMaps