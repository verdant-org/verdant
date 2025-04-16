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
import { hazard } from "@/db/schemas"
import Link from "next/link";
import { useTheme } from "next-themes";
import { baseTypes } from "./baseTypes"


interface LossPageProps {
  countyData: typeof hazard.$inferSelect
}

function numberWithCommas(x: string) {
    if (x === null || x === undefined) return "0";
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatNumber(num: number | null | undefined, limit: number = 2): string {
    if (num === null || num === undefined) return "0";
    let converted = num.toLocaleString(undefined, { minimumFractionDigits: limit, maximumFractionDigits: limit })

    if (converted.slice(-2) === "00") {
        converted = converted.slice(0, -3);
    } else if (converted.slice(-1) === "0") {
        converted = converted.slice(0, -1);
    }
    if (converted.slice(-1) === ".") {
        converted = converted.slice(0, -1);
    }

    return converted;
}


function calculateBuildingEALRate(
    buildingValue: number | null | undefined,
    totalLoss: number | null | undefined
): string {
    if (buildingValue && totalLoss) {
        const rate = totalLoss / buildingValue;
        return `$1 per $${numberWithCommas(rate.toFixed(2))} of building value`;
    }
    return "$0";
}

function calculatePopulationEALRate(
    population: number | null | undefined,
    totalLoss: number | null | undefined
): string {
    if (population && totalLoss) {
        const rate = totalLoss / population;
        return `1 per ${numberWithCommas(rate.toFixed())} of population`;
    }
    return "0";
}

function calculateAlgriculturalEALRate(
    agriculturalValue: number | null | undefined,
    totalLoss: number | null | undefined
): string {
    if (agriculturalValue && totalLoss) {
        const rate = totalLoss / agriculturalValue;
        return `$1 per $${numberWithCommas(rate.toFixed(2))} of agricultural value`;
    }
    return "$0";
}

export default function LossPage({countyData}: LossPageProps) {
    const { theme } = useTheme()

    const lossChartData = [
        { 
          name: "National Percentile",
          value: Number(countyData?.expectedAnnualLossRateNationalPercentileComposite?.toFixed(2)) || 0,
        },
        {
          name: `Percentile Within ${countyData?.stateName}`,
          value: Number(countyData?.expectedAnnualLossStatePercentileComposite?.toFixed(2)) || 0,
        },
        {
            name: "Overall Annual Loss Score",
            value: Number(countyData?.expectedAnnualLossScoreComposite?.toFixed(2)) || 0,
        }
    ]

    const overviewDetails = [
        {
            name: "Building Expected Annual Loss",
            details: [
                "$ " + numberWithCommas(countyData.expectedAnnualLossBuildingValueComposite?.toFixed(2) as string)
            ]
        },
        {
            name: "Building EAL Rate",
            details: [
                calculateBuildingEALRate(
                    countyData.expectedAnnualLossBuildingValueComposite,
                    countyData.buildingValue
                )
            ]
        },
        {
            name: "Population Expected Annual Loss",
            details: [
                countyData?.expectedAnnualLossPopulationComposite?.toFixed(2) + " Fatalities"
            ]
        },
        {
            name: "Population Expected Annual Loss Rate",
            details: [
                calculatePopulationEALRate(
                    countyData.expectedAnnualLossPopulationComposite,
                    countyData.population
                )
            ]
        },
        {
            name: "Population Equivalence Expected Annual Loss",
            details: [
                "$" + numberWithCommas(countyData?.expectedAnnualLossPopulationEquivalenceComposite?.toFixed(2) as string)
            ]
        },
        {
            name: "Agricultural Expected Annual Loss",
            details: [
                "$" + numberWithCommas(countyData?.expectedAnnualLossAgricultureValueComposite?.toFixed(2) as string)
            ]
        },
        {
            name: "Agricultural Expected Annual Loss Rate",
            details: [
                calculateAlgriculturalEALRate(
                    countyData.expectedAnnualLossAgricultureValueComposite,
                    countyData.agricultureValue
                )
            ]
        }
    ]

    const lossTypes = baseTypes.map(({ key, name }) => {
        const freqRaw = (countyData as any)?.[`${key}AnnualizedFrequency`] as number | undefined;
        const isPercentBased = key === "wildfire" || key === "earthquake";
      
        const frequency = isPercentBased
          ? `${formatNumber((freqRaw || 0) * 100, 3)}% chance per year`
          : `${formatNumber(freqRaw, 1)} events per year`;
      
        return {
          name,
          rating: (countyData as any)?.[`${key}ExpectedAnnualLossRating`],
          score: (countyData as any)?.[`${key}ExpectedAnnualLossScore`],
          exposure: `$${formatNumber((countyData as any)?.[`${key}ExposureTotal`])}`,
          frequency,
          loss: `$${formatNumber((countyData as any)?.[`${key}ExpectedAnnualLossTotal`])}`,
          history: (countyData as any)?.[`${key}HistoricLossRatioTotalRating`],
        };
      });

    const isDark = theme === "dark"

    return (
      <>
        <div className="flex flex-col gap-2 w-full">
          <div className="text-2xl">Expected Annual Loss is <div className="font-bold">{countyData.expectedAnnualLossRatingComposite}</div></div>
          <div className="flex justify-between bg-primary/10 p-2 rounded-lg">
            <div className="text-base">Expected Annual Loss Score</div>
            <div className="font-bold">{countyData.expectedAnnualLossScoreComposite?.toFixed(2)}</div>
          </div>
        </div>
        <ResponsiveContainer width="80%" height={300}>
          <BarChart
            layout="vertical"
            data={lossChartData}
            margin={{ left: 20 }}
          >
            <XAxis type="number" domain={[0, 100]} tick={{fill: `${isDark ? "#ffffff" : "#000000"}`}}/>
            <YAxis dataKey="name" type="category"  style={{ fontSize: ".8rem" }} tick={{fill: `${isDark ? "#ffffff" : "#000000"}`}}/>
            <Tooltip cursor={{fill: `${isDark ? "#3b3b3b" : "#dadada"}`, }} contentStyle={{ backgroundColor: `${isDark ? "#3b3b3b" : "#dadada"}`}}/>
            <Bar dataKey="value" fill={`${isDark ? "#ffffff" : "#000000"}`} barSize={10} />
          </BarChart>
        </ResponsiveContainer>
        <div className="w-full pb-4 border-b-2">
          In <span className="font-bold whitespace-pre">{countyData.countyName} County, {countyData.stateNameAbbreviation}, </span>expected loss each year due to natural hazards 
          is <span className="font-bold">{countyData.expectedAnnualLossRatingComposite}</span> when compared to the rest of the U.S. 
        </div>
        <div className="flex flex-col gap-4 w-full pb-4 border-b-2">
            <div className="text-2xl font-bold">Expected Annual Loss Overview</div>
            <div className="flex justify-between font-bold bg-primary/10 p-2 rounded-lg">
                <div className="">Composite Expected Annual Loss</div>
                <div>$ {numberWithCommas(countyData.expectedAnnualLossTotalComposite?.toFixed(2) as string)}</div>
            </div>
            <div className="flex flex-col gap-2">
                {overviewDetails.map((detail) => (
                    <div className="ml-6 flex justify-between bg-primary/10 p-2 rounded-lg gap-4" key={`${detail.name}-${detail.details[0]}`}>
                        <div className="text-base w-1/2">{detail.name}</div>
                        <div className="flex flex-col items-end w-1/2 text-end">
                            {detail.details.map((d, index) => (
                                <div key={index} className="font-bold">{d}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex flex-col gap-4 w-full pb-4 border-b-2">
            <div className="text-2xl font-bold">Expected Annual Loss Details</div>
            <div>Compared to the rest of the U.S, <span className="text-bold">{countyData.countyName} County, {countyData.stateNameAbbreviation}'s </span>expected annual loss due to each hazard type are:</div>
            <div className="flex flex-col gap-2 w-full">
            {lossTypes.map((loss, index) => (
                <>
                        {loss.score 
                        ? 
                            <div className="border-2 rounded-lg pb-4" key={`${loss.name}-${loss.rating}-lossDetails`}>
                                <div className="flex justify-between bg-primary/10 p-2 rounded-t-lg gap-2" key={`${loss.name}-lossDetails-${index}`}>
                                    <div className="text-base">{loss.name}</div>
                                    <div className="flex flex-col items-end">
                                        <div className="font-bold">{loss.rating}</div>
                                        <div className="font-bold">Score: {loss.score?.toFixed(1)}</div>
                                    </div>
                                </div>
                                <div className="bg-background/20 px-2 rounded-lg flex flex-col gap-2">
                                    <ResponsiveContainer width="100%" height={100}>
                                        <BarChart
                                            layout="vertical"
                                            data={[{
                                                name: loss.name + " Score",
                                                value: Number(loss.score?.toFixed(2)) || 0,
                                            }]}
                                            margin={{ left: 20, top: 10 }}
                                            
                                        >
                                            <XAxis type="number" domain={[0, 100]} tick={{fill: `${isDark ? "#ffffff" : "#000000"}`}}/>
                                            <YAxis dataKey="name" type="category" style={{ fontSize: ".8rem" }} tick={{fill: `${isDark ? "#ffffff" : "#000000"}`}}/>
                                            <Tooltip cursor={{fill: `${isDark ? "#3b3b3b" : "#dadada"}`, }} contentStyle={{ backgroundColor: `${isDark ? "#3b3b3b" : "#dadada"}`}}/>
                                            <Bar dataKey="value" fill={`${isDark ? "#ffffff" : "#000000"}`} barSize={10} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                    <div className="font-bold flex justify-between">
                                        <div>Expected Annual Loss</div>
                                        <div>{loss.loss}</div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="">Exposure</div>
                                        <div className="font-bold">{loss.exposure}</div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="">Frequency</div>
                                        <div className="font-bold">{loss.frequency}</div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="">Historic Loss Ratio</div>
                                        <div className="font-bold">{loss.history}</div>
                                    </div>
                                </div>
                            </div>
                        :
                            <div className="flex justify-between bg-primary/10 p-2 rounded-lg gap-2" key={`${loss.name}-lossDetails-${index}`}>
                                <div className="text-base">{loss.name}</div>
                                <div className="font-bold">{loss.rating}</div>
                            </div>
                        }
                </>
            ))}
            </div>
        </div>
        <div className="flex flex-col gap-2 w-full border-b-2">
            <div className="text-2xl font-bold">Calculating Expected Annual Loss</div>
            <div>Expected Annual Loss scores are calculated using an equation that combines values for exposure, annualized frequency, and historic loss ratios for 18 hazard types:</div>
            <div className="flex flex-col gap-2 w-full border mx-auto font-bold p-8">
                <div className="">Exposure</div>
                <div className="flex items-center gap-4">
                    <div className="text-base">x</div>
                    <div className="text-base">Annual Frequency</div>
                </div>
                <div className="flex items-center gap-4 border-b border-primary pb-4">
                    <div className="text-basee">x</div>
                    <div className="text-base">Historic Loss Ratio</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-base">=</div>
                    <div className="text-base text-orange-600 dark:text-orange-400">Expected Annual Loss</div>
                </div>
            </div>
            <div>Expected Annual Loss scores are presented as a compoosite score for all 18 hazard types, as well as individual scores for each hazard type</div>
            <div>For more information, visit the National Risk Index's Website <Link href="https://hazards.fema.gov/nri/expected-annual-loss" className="font-bold underline" target="_blank">Expected Annual loss</Link> page.</div>
        </div>
      </>
    )
}