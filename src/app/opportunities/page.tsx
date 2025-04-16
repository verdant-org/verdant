import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Globe, Database, ExternalLink } from "lucide-react"

export default function EnvironmentalResearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-12">
        <h1 className="text-3xl font-bold mb-4">Government Environmental Research</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Access official research, data, and resources on environmental science and conservation
        </p>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
      </section>
      <section className="py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Globe,
              title: "Climate Research",
              description: "Studies on climate change, weather patterns, and atmospheric conditions",
              link: "https://www.epa.gov/climate-change#:~:text=EPA%20tracks%20and%20reports%20greenhouse,and%20security%20of%20all%20Americans.",
            },
            {
              icon: Database,
              title: "Biodiversity Data",
              description: "Information on ecosystems, species populations, and conservation status",
              link: "https://www.epa.gov/report-environment/diversity-and-biological-balance",
            },
            {
              icon: FileText,
              title: "Environmental Reports",
              description: "Official assessments and policy recommendations on environmental issues",
              link: "https://www.epa.gov/report-environment",
            },
          ].map((category, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <category.icon className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={category.link} target="_blank" rel="noopener noreferrer">
                    View Resources <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="py-8">
        <h2 className="text-xl font-bold mb-6 text-center">Key Research Agencies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Environmental Protection Agency", acronym: "EPA" },
            { name: "National Oceanic and Atmospheric Administration", acronym: "NOAA" },
            { name: "U.S. Geological Survey", acronym: "USGS" },
            { name: "Department of Energy", acronym: "DOE" },
          ].map((agency, index) => (
            <div key={index} className="bg-muted p-4 rounded-lg text-center">
              <h3 className="font-bold text-lg">{agency.acronym}</h3>
              <p className="text-xs text-muted-foreground">{agency.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-8 bg-muted rounded-lg px-6 mt-6">
        <h2 className="text-xl font-bold mb-4 text-center">How to Access Research</h2>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="font-bold text-xs">1</span>
              </div>
              <p>Visit the official government agency websites for direct access to research publications and data</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="font-bold text-xs">2</span>
              </div>
              <p>Use data.gov to search across multiple agencies for environmental datasets</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="font-bold text-xs">3</span>
              </div>
              <p>Check university libraries for access to government research that may require subscriptions</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-8 text-center">
        <Button size="lg" asChild>
          <a href="https://data.gov/" target="_blank" rel="noopener noreferrer">
            Explore Government Data <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </section>
    </div>
  )
}