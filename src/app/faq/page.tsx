"use client"

import { useState } from "react"
import { 
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
 } from "@radix-ui/react-collapsible"
 import { 
    Plus,
    X
  } from "lucide-react"

interface FAQItem {
    question: string
    answer: React.ReactNode
}

const faqs: FAQItem[] = [
    {
        question: "What environmental risk factors does Verdant track?",
        answer: "Verdant tracks multiple environmental risk factors including avalanches, coastal flooding, cold waves, droughts, earthquakes, hail, heat waves, hurricanes, ice storms, landsides, lightning, riverine flooding, strong wind, tornados, tsunamis, volcanic activity, wildfires and winter weather.",
    },
    {
        question: "How frequently is the environmental risk data updated?",
        answer: "Environmental risk data is updated on a monthly basis."
    },
    {
        question: "How do I interpret the risk information shown on the Verdant dashboard?",
        answer: "Risk information is grouped into categories 'Risk Index', 'Expected Annual Loss', 'Social Vulnerability' and 'Community Resilience'. For each of these categories, a rating ranging from 'Very Low' to 'Very High' is provided. Below this, percentiles corresponding to the selected U.S. county relative to the state and national percentiles are provided in a comprehensive bar chart diagram. A more detailed breakdown of the precise quantities which contribute to the calculated rating is included for 'Risk Index' and 'Expected Annual Loss' sections."
    },
    {
        question: "Can I download or export environmental risk data for my selected counties?",
        answer: "No, exporting data from the dashboard is not currently supported. However, you can take screenshots of the dashboard for personal use."
    },
    {
        question: "What sources does Verdant use for environmental risk assessment?",
        answer: (
          <>
            Our data is sourced from the Federal Emergency Management Agency (FEMA), which can be found at{" "}
            <a 
              href="https://hazards.fema.gov/nri/data-resources#csvDownload" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary/80"
            >
              https://hazards.fema.gov
            </a>.
          </>
        )
      },
    {
        question: "What browser requirements are needed for optimal performance of the interactive map?",
        answer: "For optimal performance, we recommend using the latest versions of Chrome, Firefox, Safari, or Edge. The application requires JavaScript to be enabled and works best with WebGL support for map visualizations."
    },
    {
        question: "Is the application accessible on mobile devices or is it desktop-only?",
        answer: "No, the application is not mobile-friendly. It is designed for desktop use only. We recommend using a screen size of at least 1280x800 pixels for the best experience."
    },
    {
        question: "How can I reset my password if I've forgotten it?",
        answer: "To reset your password if you've forgotten it, click on the 'Forgot your password?' link on the login page. You will receive an email with instructions to reset your password."
    },
    {
        question: "Can I receive updates from Verdant on environmental risks in my area?",
        answer: "Yes, to stay informed on the latest changes in environmental risk levels for your area, subscribe to our newsletter which can be found at the bottom of this page."
    }
]

export default function FAQ() {
    const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({})

    const toggleItem = (index: number) => {
        setOpenItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }))
    }


    return (
        <div className="container mx-auto py-12 px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible
                key={index}
                open={openItems[index]}
                onOpenChange={() => toggleItem(index)}
                className="border rounded-lg overflow-hidden"
              >
                <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left bg-muted/20 hover:bg-muted/40 transition-colors">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  {openItems[index] ? (
                    <X className="h-5 w-5 flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 flex-shrink-0" />
                  )}
                </CollapsibleTrigger>

                <CollapsibleContent className="p-4 bg-background border-t">
                  <div className="text-muted-foreground">{faq.answer}</div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      );
}