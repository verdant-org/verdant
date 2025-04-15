export interface ComponentListProps {
    title: string
    href: string 
    description: string
}

export interface ComponentListGroupProps {
    title: string
    items: ComponentListProps[]
}

export interface RiskChartDataProps {
    name: string,
    value: number | null | undefined,
    color?: string,
}

export interface RiskOverviewProps {
    name: string,
    value: string | null | undefined,
}

export interface RiskTypesProps {
    name: string,
    rating: string | null | undefined,
    score: number | null | undefined,
}

export interface RiskTypesProps {
    name: string,
    rating: string | null | undefined,
    score: number | null | undefined,
}

export type LegendMapProps = "Risk Index" | "Expected Annual Loss" | "Community Resilience" | "Social Vulnerability"