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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import { RiskChartDataProps, RiskOverviewProps, RiskTypesProps } from "@/components/types"
import RiskPage from "./riskPage"

export default function Page() {
  const [searchLocation, setSearchLocation] = useState<google.maps.places.Place | null>(null)
  const [countyData, setCountyData] = useState<typeof hazard.$inferSelect | null>(null)
  const [selectedOption, setSelectedOption] = useState<string>("risk_index")
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string

  const riskChartData: RiskChartDataProps[] = [
    { 
      name: "National Percentile",
      value: Number(countyData?.nationalRiskIndexScoreComposite?.toFixed(2)) || 0,
    },
    {
      name: `Percentile Within ${countyData?.stateName}`,
      value: Number(countyData?.nationalRiskIndexStatePercentileComposite?.toFixed(2)) || 0,
    }
  ]

  const riskOverviews: RiskOverviewProps[] = [
    {
      name: "Expected Annual Loss",
      value: countyData?.expectedAnnualLossRatingComposite,
    },
    {
      name: "Social Vulnerability",
      value: countyData?.socialVulnerabilityRating,
    },
    {
      name: "Community Resilience",
      value: countyData?.communityResilienceRating,
    }
  ]

  const riskTypes: RiskTypesProps[] = [
    {
      name: "Alavanche",
      rating: countyData?.avalancheExpectedAnnualLossRating,
      score: countyData?.avalancheExpectedAnnualLossScore,
    },
    {
      name: "Coastal Flooding",
      rating: countyData?.coastalFloodingExpectedAnnualLossRating,
      score: countyData?.coastalFloodingExpectedAnnualLossScore,
    },
    {
      name: "Cold Wave",
      rating: countyData?.coldWaveExpectedAnnualLossRating,
      score: countyData?.coldWaveExpectedAnnualLossScore,
    },
    {
      name: "Drought",
      rating: countyData?.droughtExpectedAnnualLossRating,
      score: countyData?.droughtExpectedAnnualLossScore,
    },
    {
      name: "Earthquake",
      rating: countyData?.earthquakeExpectedAnnualLossRating,
      score: countyData?.earthquakeExpectedAnnualLossScore,
    },
    {
      name: "Hail",
      rating: countyData?.hailExpectedAnnualLossRating,
      score: countyData?.hailExpectedAnnualLossScore,
    },
    {
      name: "Heat Wave",
      rating: countyData?.heatWaveExpectedAnnualLossRating,
      score: countyData?.heatWaveExpectedAnnualLossScore,
    },
    {
      name: "Hurricane",
      rating: countyData?.hurricaneExpectedAnnualLossRating,
      score: countyData?.hurricaneExpectedAnnualLossScore,
    },
    {
      name: "Ice Storm",
      rating: countyData?.iceStormExpectedAnnualLossRating,
      score: countyData?.iceStormExpectedAnnualLossScore,
    },
    {
      name: "Landslide",
      rating: countyData?.landslideExpectedAnnualLossRating,
      score: countyData?.landslideExpectedAnnualLossScore,
    },
    {
      name: "Lignhtning",
      rating: countyData?.lightningExpectedAnnualLossRating,
      score: countyData?.lightningExpectedAnnualLossScore,
    },
    {
      name: "Riverine Flooding",
      rating: countyData?.riverineFloodingExpectedAnnualLossRating,
      score: countyData?.riverineFloodingExpectedAnnualLossScore,
    },
    {
      name: "Strong Wind",
      rating: countyData?.strongWindExpectedAnnualLossRating,
      score: countyData?.strongWindExpectedAnnualLossScore,
    },
    {
      name: "Tornado",
      rating: countyData?.tornadoExpectedAnnualLossRating,
      score: countyData?.tornadoExpectedAnnualLossScore,
    },
    {
      name: "Tsunami",
      rating: countyData?.tsunamiExpectedAnnualLossRating,
      score: countyData?.tsunamiExpectedAnnualLossScore,
    },
    {
      name: "Volcanic Alctivity",
      rating: countyData?.volcanicActivityExpectedAnnualLossRating,
      score: countyData?.volcanicActivityExpectedAnnualLossScore,
    },
    {
      name: "Wildfire",
      rating: countyData?.wildfireExpectedAnnualLossRating,
      score: countyData?.wildfireExpectedAnnualLossScore,
    },
    {
      name: "Winter Weather",
      rating: countyData?.winterWeatherExpectedAnnualLossRating,
      score: countyData?.winterWeatherExpectedAnnualLossScore,
    }
  ]
  
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
              {selectedOption === "risk_index" && (
                <RiskPage
                  countyData={countyData}
                  riskChartData={riskChartData}
                  riskOverviews={riskOverviews}
                  riskTypes={riskTypes}
                />
              )}

            </div>
          )}
        </div>
      </div>
    </APIProvider>
  )
}
