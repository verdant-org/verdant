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
import { 
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  LabelList,
  Cell,
  ResponsiveContainer,
} from "recharts"
import Link from "next/link"

export default function Page() {
  const [searchLocation, setSearchLocation] = useState<google.maps.places.Place | null>(null)
  const [countyData, setCountyData] = useState<typeof hazard.$inferSelect | null>(null)
  const [selectedOption, setSelectedOption] = useState<string>("risk_index")
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string

  const chartData = [
    { 
      name: "National Percentile",
      value: countyData?.nationalRiskIndexScoreComposite?.toFixed(2) || 0,
    },
    {
      name: `Percentile Within ${countyData?.stateName}`,
      value: countyData?.nationalRiskIndexStatePercentileComposite?.toFixed(2) || 0,
    }
  ]

  const riskOverviews = [
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

  const riskTypes = [
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
                <>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="text-2xl">Risk Index is <div className="font-bold">{countyData.nationalRiskIndexRatingComposite}</div></div>
                    <div className="flex justify-between bg-primary/10 p-2 rounded-lg">
                      <div className="text-base">Nation Risk Score</div>
                      <div className="font-bold">{countyData.nationalRiskIndexScoreComposite?.toFixed(2)}</div>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      layout="vertical"
                      data={chartData}
                      margin={{ left: 20 }}
                    >
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="name" type="category" />
                      <Tooltip />
                      <Bar dataKey="value" fill="#000000" barSize={10} />
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="w-full pb-4 border-b-2">
                    The Risk Index rating is <span className="font-bold">{countyData.nationalRiskIndexRatingComposite}</span> for <span className="font-bold">{countyData.countyName} County, {countyData.stateNameAbbreviation} </span>
                    when compared to the rest of the U.S. 
                  </div>
                  <div className="flex flex-col gap-4 w-full pb-4 border-b-2">
                    <div className="text-2xl font-bold">Risk Index Overview</div>
                    <div>
                      Compared to the rest of the U.S, <span className="text-bold">{countyData.countyName} County, {countyData.stateNameAbbreviation}'s </span>Risk Index components are:
                    </div>
                    <div className=" flex flex-col gap-2 w-full">
                        {riskOverviews.map((risk) => (
                        <div className="flex justify-between bg-primary/10 p-2 rounded-lg">
                          <div className="text-base">{risk.name}</div>
                          <div className="font-bold">{risk.value}</div>
                        </div>
                        ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 w-full pb-4 border-b-2">
                    <div className="text-2xl font-bold">Hazard Type Risk Ratings</div>
                    <div>
                      Compared to the rest of the U.S, <span className="text-bold">{countyData.countyName} County, {countyData.stateNameAbbreviation}'s </span>risk to each hazard type are:
                    </div>
                    <div className=" flex flex-col gap-2 w-full">
                        {riskTypes.map((risk) => (
                        <div className="flex justify-between bg-primary/10 p-2 rounded-lg">
                          <div className="text-base">{risk.name}</div>
                          <div className="flex flex-col items-end">
                            <div className="font-bold">{risk.rating}</div>
                            {risk.score && <div className="font-bold">Score: {risk.score?.toFixed(1)}</div>}
                          </div>
                        </div>
                        ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 w-full pb-4 border-b-2">
                    <div className="text-2xl font-bold">Calculating the Risk Index</div>
                    <div>Risk Index scores are calculated using an equation that combines scores for Expected Annual Loss due to natural hazards, Social Vulnerability and Community Resilience:</div>
                    {/* Implement the calculation thingy later */}
                    <div>Risk Index scores are presented as a composite score for all 18 hazard types, as well as individual scores for each hazard type.</div>
                    <div>For more information, visit the National Risk Index website's Determining Risk page.</div>
                  </div>
                  <div className="flex flex-col gap-4 w-full pb-4 border-b-2">
                    <div className="">Do you want to reduce your risk?</div>
                    <Link href="https://hazards.fema.gov/take-action" className="font-bold underline">Learn how to take action</Link>
                    
                  </div>
                </>
              )}

            </div>
          )}
        </div>
      </div>
    </APIProvider>
  )
}
