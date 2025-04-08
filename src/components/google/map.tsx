import {
    useMap,
    Map,
    MapCameraChangedEvent
} from "@vis.gl/react-google-maps"
import { useEffect, useState } from "react"
import geoJSON from "./geojson-counties-fips.json"

interface GoogleMapsProps {
    place: google.maps.places.Place | null
    marker?: google.maps.marker.AdvancedMarkerElement | null
    className?: string
}

interface CameraProps {
    center: {lat: number, lng: number}
    zoom: number
}

const GoogleMaps = ({place, marker, className}: GoogleMapsProps) => { // eslint-disable-line
    const map = useMap()

    map?.data.addGeoJson(geoJSON)
    map?.data.setStyle({
        fillColor: "#9febf5",
        strokeWeight: .4,
        fillOpacity: 0.36
    })

    map?.data.addListener("click", (e: any) => {
        const feature = e.feature
        const fip = feature.getProperty("GEO_ID") as string
        const formattedFip = fip.substring(fip.lastIndexOf("US") + 2)

        console.log(`You clicked on the county ${feature.getProperty("NAME")} with a FIP of ${formattedFip}`)
    })

    const [camera, setCamera] = useState<CameraProps>({center: { lat: 39.8283, lng: -98.5795 }, zoom: 4})

    useEffect(() => {
        if (!map) return

        if (place?.location) {
            setCamera({
                center: {
                    lat: place.location.lat(), 
                    lng: place.location.lng()
                }, 
                zoom: 6
            })
        }
        if (place?.viewport) {
            map.fitBounds(place.viewport)
        }
    }, [map, place])

    return (
        <Map
            // mapId={'61d02bfb9df84225'}
            defaultZoom={camera.zoom}
            defaultCenter={camera.center}
            gestureHandling={'cooperative'}

            className={` ${className ? className : ""}`}
        />
    )
}

export default GoogleMaps