import { hazard } from "@/db/schemas"
import { 
    BarChart,
    XAxis,
    YAxis,
    Bar,
    Tooltip,
    ResponsiveContainer,
} from "recharts"
import { useTheme } from "next-themes"
import Link from "next/link"


interface SocialPageProps {
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


export default function SocialPage({countyData}: SocialPageProps) {
    const { theme } = useTheme()
    const isDark = theme === "dark"

    const socialChartData = [
        {
            name: "National Percentile",
            value: Number(countyData?.socialVulnerabilityScore?.toFixed(2)),
        },
        {
            name: `Percentile Within ${countyData?.stateName}`,
            value: formatNumber(countyData?.socialVulnerabilityStatePercentile ?  countyData?.socialVulnerabilityStatePercentile * 100 : 0, 2),
        }
    ]

    return (
        <div className="flex flex-col gap-4 w-full pb-4 border-b-2">
            <div className="text-3xl">Social Vulnerability is <span className="font-bold">{countyData?.socialVulnerabilityRating}</span></div>
            <div className="flex justify-between bg-primary/10 rounded-lg p-2 gap-4 w-full text-lg">
                <div className="">Social Vulnerability Score</div>
                <div className="font-bold">{countyData?.socialVulnerabilityScore?.toFixed(2)}</div>
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
                Social groups in <span className="font-bold">{countyData?.countyName}, {countyData?.stateNameAbbreviation} </span> 
                have a <span className="font-bold">{countyData?.socialVulnerabilityRating}</span> susceptibility to the adverse impacts of natural hazards when compared 
                to the rest of the U.S.
            </div>
            <div className="flex flex-col gap-4 w-full items-start">
                <div className="font-bold text-2xl">Calculating Social Vulnerability</div>
                <div>
                    Social Vulnerability is measured using the <Link className="font-bold underline" href="https://www.atsdr.cdc.gov/place-health/php/svi/index.html">Social Vulnerability Index (SVI)</Link> 
                    published by the <Link className="font-bold underline" href="https://www.cdc.gov/">Centers for Disease Control and Prevention (CDC)</Link>.
                </div>
                <div className="text-lg">
                    For more information, visit the National Risk Index website's <Link className="font-bold underline" href="https://hazards.fema.gov/social-vulnerability" target="_blank">Social Vulnerability</Link> page.
                </div>

            </div>
        </div>
    )
}