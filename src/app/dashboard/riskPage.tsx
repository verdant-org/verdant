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
import { RiskChartDataProps, RiskOverviewProps, RiskTypesProps } from "@/components/types"
import { hazard } from "@/db/schemas"
import Link from "next/link"

interface RiskPageProps {
  countyData: typeof hazard.$inferSelect
  riskChartData: RiskChartDataProps[]
  riskOverviews: RiskOverviewProps[]
  riskTypes: RiskTypesProps[]
}


export default function RiskPage({countyData, riskChartData, riskOverviews, riskTypes}: RiskPageProps) {
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
          <Link href="https://hazards.fema.gov/nri/take-action" className="font-bold underline">Learn how to take action</Link>
          
        </div>
      </>
    )
  }