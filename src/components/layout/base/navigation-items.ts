import { ComponentListProps, ComponentListGroupProps } from "@/components/types"

export const companyComponents: ComponentListProps[] = [
  {
    title: "About Us",
    href: "/about",
    description: "Learn more about our website and purpose"
  },
  {
    title: "Contact Us",
    href: "/contact",
    description: "Reach out to us and find further assistance"
  },
  {
    title: "Opportunities",
    href: "/opportunities",
    description: "Find potential collaboration and partnernship opportunities with us"
  }
]

export const resourceComponents: ComponentListProps[] = [
  {
    title: "Frequency Asked Questions",
    href: "/frequently-asked-questions",
    description: "Search for frequently asked questions for our website"
  },
  {
    title: "Guide",
    href: "/guide",
    description: "Learn how to navigate and use the resources for our website"
  },
  {
    title: "Documentation",
    href: "https://github.com/verdant-org/verdant",
    description: "Find out the technical information and utilities used for our application"
  },
]

export const agreementComponents: ComponentListProps[] = [
  {
    title: "Terms and Conditions",
    href: "/terms-and-conditions",
    description: "Read the terms and conditions for using our website"
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
    description: "Learn how we handle and protect your personal information"
  },
  {
    title: "Accessibility Statement",
    href: "/accessibility-statement",
    description: "Find out how we ensure our website is accessible to everyone"
  }
]

export default [
    {
        title: "Company",
        items: companyComponents
    },
    {
        title: "Resources",
        items: resourceComponents
    },
    {
        title: "Agreements",
        items: agreementComponents
    }
] as ComponentListGroupProps[]