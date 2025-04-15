import { hazard } from "@/db/schemas"
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
import { useTheme } from "next-themes"
import Link from "next/link"


interface CommunityPageProps {
    countyData: typeof hazard.$inferSelect
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


export default function CommunityPage({countyData}: CommunityPageProps) {
    const { theme } = useTheme()
    const isDark = theme === "dark"

    const socialChartData = [
        {
            name: "National Percentile",
            value: Number(countyData?.communityResilienceScore?.toFixed(2)),
        },
        {
            name: `Percentile Within ${countyData?.stateName}`,
            value: formatNumber(countyData?.communityResilienceStatePercentile ?  countyData?.communityResilienceStatePercentile * 100 : 0, 2),
        }
    ]

    return (
        <div className="flex flex-col gap-4 w-full pb-4 border-b-2">
            <div className="text-3xl">Community Resilience is <span className="font-bold">{countyData?.communityResilienceRating}</span></div>
            <div className="flex justify-between bg-primary/10 rounded-lg p-2 gap-4 w-full text-lg">
                <div className="">Social Vulnerability Score</div>
                <div className="font-bold">{countyData?.communityResilienceScore?.toFixed(2)}</div>
            </div>
            <ResponsiveContainer width="80%" height={300}>
                <BarChart
                layout="vertical"
                data={socialChartData}
                margin={{ left: 20 }}
                >
                <XAxis type="number" domain={[0, 100]} tick={{fill: `${isDark ? "#ffffff" : "#000000"}`}}/>
                <YAxis dataKey="name" type="category" style={{ fontSize: ".8rem" }}  tick={{fill: `${isDark ? "#ffffff" : "#000000"}`}}/>
                <Tooltip cursor={{fill: `${isDark ? "#3b3b3b" : "#dadada"}`, }} contentStyle={{ backgroundColor: `${isDark ? "#3b3b3b" : "#dadada"}`}}/>
                <Bar dataKey="value" fill={`${isDark ? "#ffffff" : "#000000"}`} barSize={10} />
                </BarChart>
            </ResponsiveContainer>
            <div className="text-lg">
                Communities in <span className="font-bold">{countyData?.countyName}, {countyData?.stateNameAbbreviation} </span> 
                have a <span className="font-bold">{countyData?.communityResilienceRating}</span> ability to prepare for anticipated natural hazards, adapt to changing 
                conditions, and withstand and recover rapidly from disruptions when compared to the rest of the U.S.
            </div>
            <div className="flex flex-col gap-4 w-full items-start">
                <div className="font-bold text-2xl">Calculating Community Resilience</div>
                <div className="">
                    Community Resilience at the County Level using 
                    <Link className="font-bold underline" href="https://sc.edu/study/colleges_schools/artsandsciences/centers_and_institutes/hvri/data_and_resources/bric/index.php"> Basline Resilience Indicators for Communities (HVRI BRIC)</Link> 
                    &nbsp;published by the <Link className="font-bold underline" href="https://www.sc.edu/study/colleges_schools/artsandsciences/centers_and_institutes/hvri/index.php/sovi%C2%AE-0">University of South Carolina's Hazards and Vulnerability Research Institute (HVRI).</Link>
                </div>
                <div className="text-lg">
                    For more information, visit the National Risk Index website's <Link className="font-bold underline" href="https://hazards.fema.gov/nri/community-resilience">Community Resilience</Link> page.
                </div>

            </div>
        </div>
    )
}