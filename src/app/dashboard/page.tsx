"use client"
import { useState, useEffect } from "react"
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
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { toast } from "sonner"
import { LegendMapProps } from "@/components/types"
import { colorMap } from "@/components/google/colorCode"

export default function Page() {
  const [searchLocation, setSearchLocation] = useState<google.maps.places.Place | null>(null)
  const [countyData, setCountyData] = useState<typeof hazard.$inferSelect | null>(null)
  const [selectedOption, setSelectedOption] = useState<string>("risk_index")
  const [legend, setLegend] = useState<LegendMapProps>("Risk Index")
  const [isAvailable, setIsAvailable] = useState(true)
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const urlFips = searchParams.get("fips") || null

  useEffect(() => {
    const updateUrl = () => {
      if (countyData?.stateCountyFipsCode) {
        const newParams = new URLSearchParams()
        newParams.set("fips", countyData.stateCountyFipsCode)
        router.replace(`${pathname}?${newParams.toString()}`, { scroll: false })
        setIsAvailable(true)
      } else setIsAvailable(false)
    }
    updateUrl()
  }, [countyData])

  function ShareButton() {
    if (!countyData) return null
    const handleClick = () => {
      const url = `${window.location.origin}${pathname}?fips=${countyData.stateCountyFipsCode}`
      navigator.clipboard.writeText(url)
      toast("Link copied to clipboard!")
    }
    return (
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition duration-300"
      >
        Share This County
      </button>
    )
  }

  return (
    <APIProvider apiKey={key}>
      <div className="flex w-full">
        <div className="grow relative">
          <GoogleMaps place={searchLocation} className={`w-full h-[52rem]`} setCountyData={setCountyData} sharedFip={urlFips} legend={legend}/>
          <div className="absolute bottom-14 left-4 bg-background rounded-lg p-4 shadow-lg flex flex-col gap-4">
            <div className="text-lg font-bold border-b-2 pb-4">Map Legend</div>
            <div>{legend}</div>
            {Object.keys(colorMap[legend]).map((key) => (
              <div key={key}>
                <div key={key} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-sm border-2 border-primary" style={{ backgroundColor: colorMap[legend][key as keyof typeof colorMap[LegendMapProps]] }}></div>
                  <div>{key}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 max-w-lg w-full p-4 bg-stone-100 dark:bg-stone-900 h-[52rem] overflow-y-scroll no-scrollbar">
          <div className="text-bold text-xl">Find an Area</div>
          <PlaceAutocomplete onPlaceSelect={setSearchLocation} className="w-full"/>
          <div className="flex flex-col gap-4 w-full items-start my-4">
            <div className="font-bold text-2xl">Change Map Legend</div>
          </div>
          {countyData && isAvailable && (
            <div className="flex flex-col gap-4 w-full items-start">
              <ShareButton />
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="font-bold text-2xl">{countyData.countyName} County</div>
                <div className="text-lg">{countyData.stateName}, United States</div>
              </div>
              <div className="border-b-2 w-full pb-4">
                <Select
                  value={selectedOption}
                  onValueChange={(value) => {
                    setSelectedOption(value)
                    setLegend(value.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) as LegendMapProps)
                  }}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="risk_index">Risk Index</SelectItem>
                      <SelectItem value="expected_annual_loss">Expected Annual Loss</SelectItem>
                      <SelectItem value="social_vulnerability">Social Vulnerability</SelectItem>
                      <SelectItem value="community_resilience">Community Resilience</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {selectedOption === "risk_index" && <RiskPage countyData={countyData}/>}
              {selectedOption === "expected_annual_loss" && <LossPage countyData={countyData}/>}
              {selectedOption === "social_vulnerability" && <SocialPage countyData={countyData}/>}
              {selectedOption === "community_resilience" && <CommunityPage countyData={countyData}/>}
              <div className="flex flex-col gap-4 w-full pb-4 border-b-2">
                <div className="">Do you want to reduce your risk?</div>
                <Link href="https://hazards.fema.gov/nri/take-action" className="font-bold underline" target="_blank">Learn how to take action</Link>
              </div>
            </div>
          )}
          {!isAvailable && (
            <div className="text-lg font-bold text-center text-red-600">This county has not published any hazard information, please try again</div>
          )}
        </div>
      </div>
    </APIProvider>
  )
}