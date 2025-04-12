import {
    useMap,
    useMapsLibrary,
    Map,
    MapCameraChangedEvent
} from "@vis.gl/react-google-maps"
import React, { useEffect, useState } from "react"
import geoJSON from "./geojson-counties-fips.json"
import LoadingScreen from "@/components/layout/accessory/LoadingScreen"
import { hazard } from "@/db/schemas"

interface GoogleMapsProps {
    place: google.maps.places.Place | null
    setCountyData?: React.Dispatch<React.SetStateAction<typeof hazard.$inferSelect | null>>
    className?: string
}

interface CameraProps {
    center: {lat: number, lng: number}
    zoom?: number
}

const GoogleMaps = ({place, setCountyData, className}: GoogleMapsProps) => { // eslint-disable-line
    const map = useMap()
    const [geoCodingService, setGeoCodingService] = useState<google.maps.Geocoder | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    map?.data.addGeoJson(geoJSON)
    map?.data.setStyle({
        fillColor: "#9febf5",
        strokeWeight: .4,
        fillOpacity: 0.36
    })

    map?.data.addListener("click", async (e: any) => {
        setIsLoading(true)

        const feature = e.feature
        const fip = feature.getProperty("GEO_ID") as string
        const formattedFip = fip.substring(fip.lastIndexOf("US") + 2)

        const response = await fetch("/api/dataset/hazard", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ fip_code: formattedFip })
        })
        const data = await response.json() 
    
        if (setCountyData) {
            setCountyData(data)
        }

        const { countyName, stateNameAbbreviation } = data

        const geocodedLocation = `${countyName} County ${stateNameAbbreviation}`
    
        if (!geoCodingService) {
            setGeoCodingService(new google.maps.Geocoder())
        }
        
        await geoCodingService?.geocode({ address: geocodedLocation }, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK && results) {
                const location = results[0].geometry.location
                map.setCenter(location)
                map.setZoom(8)
            } else {
                console.error("Geocode was not successful for the following reason: " + status)
            }
        })
        setIsLoading(false)
    })

    const [camera, setCamera] = useState<CameraProps>({center: { lat: 39.8283, lng: -98.5795 }, zoom: 4})

    useEffect(() => {
        setIsLoading(true)
        if (!map) return

        if (place?.location) {
            setCamera({
                center: {
                    lat: place.location.lat(), 
                    lng: place.location.lng()
                }, 
                
            })
        }
        if (place?.viewport) {
            map.fitBounds(place.viewport)
        }
        setIsLoading(false)
    }, [map, place])


    return (
        <div className="relative w-full h-full">
            <Map
                // mapId={'61d02bfb9df84225'}
                defaultZoom={camera.zoom}
                defaultCenter={camera.center}
                gestureHandling={'cooperative'}
                className={`${className ? className : ""}`}
            />
    
            {isLoading && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[40]">
                    <LoadingScreen />
                </div>
            )}
        </div>
    );
}

export default GoogleMaps