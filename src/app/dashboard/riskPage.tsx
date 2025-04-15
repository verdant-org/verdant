import { 
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { hazard } from "@/db/schemas"
import { useTheme } from "next-themes"
import Link from "next/link"
import { baseTypes } from "./baseTypes"

interface RiskPageProps {
  countyData: typeof hazard.$inferSelect
}

export default function RiskPage({countyData}: RiskPageProps ) {
  const { theme } = useTheme()
  const isDark = theme === "dark" 

  const riskChartData = [
      { 
        name: "National Percentile",
        value: Number(countyData?.nationalRiskIndexScoreComposite?.toFixed(2)) || 0,
      },
      {
        name: `Percentile Within ${countyData?.stateName}`,
        value: Number(countyData?.nationalRiskIndexStatePercentileComposite?.toFixed(2)) || 0,
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
    
    const riskTypes = baseTypes.map(({ key, name }) => ({
      name,
      rating: (countyData as any)?.[`${key}ExpectedAnnualLossRating`],
      score: (countyData as any)?.[`${key}ExpectedAnnualLossScore`],
    }))

  return (
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
            data={riskChartData}
            margin={{ left: 20 }}
          >
            <XAxis type="number" domain={[0, 100]} tick={{fill: `${isDark ? "#ffffff" : "#000000"}`}}/>
            <YAxis dataKey="name" style={{ fontSize: ".8rem" }} type="category" tick={{fill: `${isDark ? "#ffffff" : "#000000"}`}}/>
            <Tooltip cursor={{fill: `${isDark ? "#3b3b3b" : "#dadada"}`, }} contentStyle={{ backgroundColor: `${isDark ? "#3b3b3b" : "#dadada"}`}}/>
            <Bar dataKey="value" fill={`${isDark ? "#ffffff" : "#000000"}`} barSize={10} />
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
            <div className="flex justify-between bg-primary/10 p-2 rounded-lg" key={`${risk.name}-${risk.value}-riskOverviews`}>
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
            <div className="flex justify-between bg-primary/10 p-2 rounded-lg" key={`${risk.name}-${risk.rating}-riskDetails`}>
              <div className="text-base">{risk.name}</div>
              <div className="flex flex-col items-end">
                <div className="font-bold">{risk.rating}</div>
                {typeof risk.score === "number" && risk.score !== 0 && <div className="font-bold">Score: {risk.score?.toFixed(1)}</div>}
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
        <div>For more information, visit the National Risk Index website's <Link href="https://hazards.fema.gov/determining-risk" className="font-bold underline" target="_blank">Determining Risk</Link> page.</div>
      </div>
    </>
  )
}