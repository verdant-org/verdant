"use client"
import { useState } from "react"
import { APIProvider } from "@vis.gl/react-google-maps"
import GoogleMaps from "@/components/google/map"
import { PlaceAutocomplete } from "@/components/google/autocomplete"

export default function Page() {
  const [searchLocation, setSearchLocation] = useState<google.maps.places.Place | null>(null)
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string
  
  return (
    <APIProvider apiKey={key}>
      <div className="flex w-full">
        <div className="grow">
          <GoogleMaps place={searchLocation} className={`w-full h-[52rem]`} />
        </div>
        <div className="flex flex-col items-center gap-4 w-full max-w-xs p-4 bg-stone-100 dark:bg-stone-900">
          <div className="text-bold text-xl">Find an Area</div>
          <PlaceAutocomplete onPlaceSelect={setSearchLocation} className="w-full"/>
        </div>
      </div>
    </APIProvider>
  )
}
