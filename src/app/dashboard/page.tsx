"use client"
import { useState } from "react"
import { APIProvider } from "@vis.gl/react-google-maps"
import GoogleMaps from "@/components/google/map"
import { PlaceAutocomplete } from "@/components/google/autocomplete"
import { hazard } from "@/db/schemas"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import RiskPage from "./riskPage"
import LossPage from "./lossPage"
import SocialPage from "./socialPage"
import CommunityPage from "./communityPage"
import Link from "next/link"

export default function Page() {
  const [searchLocation, setSearchLocation] = useState<google.maps.places.Place | null>(null)
  const [countyData, setCountyData] = useState<typeof hazard.$inferSelect | null>(null)
  const [selectedOption, setSelectedOption] = useState<string>("risk_index")
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string
  
  return (
    <APIProvider apiKey={key}>
      <div className="flex w-full">
        <div className="grow">
          <GoogleMaps place={searchLocation} className={`w-full h-[52rem]`} setCountyData={setCountyData}/>
        </div>
        <div className="flex flex-col items-center gap-4 max-w-lg w-full p-4 bg-stone-100 dark:bg-stone-900 h-[52rem] overflow-y-scroll no-scrollbar">
          <div className="text-bold text-xl">Find an Area</div>
          <PlaceAutocomplete onPlaceSelect={setSearchLocation} className="w-full"/>
          {countyData && (
            <div className="flex flex-col gap-4 w-full items-start">
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="font-bold text-2xl">{countyData.countyName} County</div>
                <div className="text-lg">{countyData.stateName}, United States</div>
              </div>
              <div className="border-b-2 w-full pb-4">
                <Select
                    value={selectedOption}
                    onValueChange={(value) => {
                      setSelectedOption(value)
                    }}
                  >
                    <SelectTrigger className="w-[200px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="risk_index" aria-selected>Risk Index</SelectItem>
                        <SelectItem value="expected_annual_loss">Expected Annual Loss</SelectItem>
                        <SelectItem value="social_vulenerability">Social Vulnerability</SelectItem>
                        <SelectItem value="community_resilience">Community Resilience</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
              </div>
              {selectedOption === "risk_index" && <RiskPage countyData={countyData}/>}
              {selectedOption === "expected_annual_loss" && <LossPage countyData={countyData}/>}
              {selectedOption === "social_vulenerability" && <SocialPage countyData={countyData}/>}
              {selectedOption === "community_resilience" && <CommunityPage countyData={countyData}/>}
              <div className="flex flex-col gap-4 w-full pb-4 border-b-2">
                <div className="">Do you want to reduce your risk?</div>
                <Link href="https://hazards.fema.gov/nri/take-action" className="font-bold underline" target="_blank">Learn how to take action</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </APIProvider>
  )
}
