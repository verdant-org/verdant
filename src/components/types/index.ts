export interface ComponentListProps {
    title: string
    href: string 
    description: string
}

export interface ComponentListGroupProps {
    title: string
    items: ComponentListProps[]
}