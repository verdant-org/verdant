
import {
  useMap,
  Map,
  useApiIsLoaded,
} from "@vis.gl/react-google-maps";
import React, { useEffect, useState, useRef } from "react";
import geoJSON from "./geojson-counties-fips.json";
import LoadingScreen from "@/components/layout/accessory/LoadingScreen";
import { hazard } from "@/db/schemas"

interface GoogleMapsProps {
  place: google.maps.places.Place | null;
  setCountyData?: React.Dispatch<React.SetStateAction<typeof hazard.$inferSelect | null>>;
  className?: string;
  sharedFip?: string | null
}

interface CameraProps {
  center: { lat: number; lng: number };
  zoom?: number;
}


const GoogleMaps = ({ place, setCountyData, className, sharedFip }: GoogleMapsProps) => {
  const map = useMap();
  const isLoaded = useApiIsLoaded();
  const [isLoading, setIsLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  const clickListenerRef = useRef<google.maps.MapsEventListener | null>(null);

  const setMapData = async (fip: string) => {
    if (!map) return;

    setIsLoading(true);
    const response = await fetch("/api/dataset/hazard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fip_code: fip }),
    });

    const data = await response.json();
    setCountyData?.(data);

    const { countyName, stateNameAbbreviation } = data;
    const geocodedLocation = `${countyName} County ${stateNameAbbreviation}`;

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: geocodedLocation }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK && results) {
        const location = results[0].geometry.location;
        map.setCenter(location);
        map.setZoom(8);
      } else {
        console.error("Geocode failed: " + status);
      }
      setIsLoading(false);
    });
  }

  const handleFeatureClick = async (e: google.maps.Data.Feature) => {
    if (!map) return;

    setIsLoading(true);

    const fip = e.getProperty("GEO_ID") as string;
    const formattedFip = fip.substring(fip.lastIndexOf("US") + 2);

    setMapData(formattedFip);
  };

  useEffect(() => {
    if (!map || !isLoaded) return;

    map.data.addGeoJson(geoJSON);
    map.data.setStyle({
      fillColor: "#9febf5",
      strokeWeight: 0.4,
      fillOpacity: 0.36,
    });

    clickListenerRef.current = map.data.addListener("click", (e: any) => handleFeatureClick(e.feature as google.maps.Data.Feature));

    return () => {
      if (clickListenerRef.current) {
        google.maps.event.removeListener(clickListenerRef.current);
      }
    };
  }, [map, isLoaded, setCountyData]);

  useEffect(() => {
    if (!map || !place?.location) return;
  
    const location = place.location;
  
    map.data.forEach((feature) => {
      const geometry = feature.getGeometry();
      if (!geometry) return;
  
      const bounds = new google.maps.LatLngBounds();
      geometry.forEachLatLng((latLng) => bounds.extend(latLng));
  
      if (bounds.contains(location)) {
        handleFeatureClick(feature);
      }
    });
  }, [place, map]);

  useEffect(() => {
    if (!map || !sharedFip || !firstLoad) return;
    setMapData(sharedFip);
    setFirstLoad(false)
  }, [sharedFip, map]);

  if (!isLoaded) return null;

  return (
    <div className="relative w-full h-full">
      <Map
        defaultZoom={4}
        defaultCenter={{ lat: 39.8283, lng: -98.5795 }}
        gestureHandling="cooperative"
        className={className || ""}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[40]">
          <LoadingScreen />
        </div>
      )}
    </div>
  );
};

export default GoogleMaps;