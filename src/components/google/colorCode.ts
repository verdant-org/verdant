import fipRatingData from "./fip_map_code.json";
import { LegendMapProps } from "@/components/types"

export const colorMap = {
    "Risk Index": {
        "Very High": "#a03a4a",
        "Relatively High": "#e47a66",
        "Relatively Moderate": "#f1da78",
        "Relatively Low": "#5ca8d1",
        "Very Low": "#37559c",
        "No Rating": "#ffffff",
        "Not Applicable": "#cfcfcf",
        "Insufficient Data": "#666666"
    },
    "Expected Annual Loss": {
        "Very High": "#7a2f00",
        "Relatively High": "#e65100",
        "Relatively Moderate": "#f57c00",
        "Relatively Low": "#ffb74d",
        "Very Low": "#ffe0b2",
        "No Expected Annual Losses": "#ffffff",
        "Not Applicable": "#cfcfcf",
        "Insufficient Data": "#666666"
    },
    "Social Vulnerability": {
        "Very High": "#005a2b",
        "Relatively High": "#2e7d32",
        "Relatively Moderate": "#66bb6a",
        "Relatively Low": "#a5d6a7",
        "Very Low": "#dcedc8",
        "Data Unavailable": "#bdbdbd"
    },
    "Community Resilience": {
        "Very High": "#d8d8f0",
        "Relatively High": "#bcbde5",
        "Relatively Moderate": "#9e9fd9",
        "Relatively Low": "#7571c0",
        "Very Low": "#4b2992",
        "Data Unavailable": "#bdbdbd"
    }
}

export const getColorByFip = (fip: string, legend: LegendMapProps) => {
    const data = fipRatingData.find((item) => item.fip === fip);
    const mapping = colorMap[legend];

    if (!data) return "#ababab";

    const rating = data[legend as keyof typeof data] || "No Rating";
    const color = mapping[rating as keyof typeof mapping];
    return color || "#ababab";

}