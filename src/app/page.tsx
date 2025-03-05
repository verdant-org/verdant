"use client"

import { useState } from "react"
import Icons from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PlaceAutocomplete from "@/components/google/autocomplete"
import { APIProvider } from "@vis.gl/react-google-maps"
import { Map }from "@vis.gl/react-google-maps"

export default function VerdantHomePage() {
  const [searchLocation, setSearchLocation] = useState<google.maps.places.PlaceResult | null>(null)
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string

  const [mapCenter, setMapCenter] = useState({ lat: 39.8283, lng: -98.5795})
  const [mapZoom, setMapZoom] = useState(4)
  const handleExploreClick = () => {
    if (searchLocation && searchLocation.geometry && searchLocation.geometry.location) {
      setMapCenter({
        lat: searchLocation.geometry.location.lat(),
        lng: searchLocation.geometry.location.lng(),
      })
      setMapZoom(13)
    }
  }

  return (
    <APIProvider apiKey={key}>
      <div className="container mx-auto px-4 py-8">
        <section className="text-center py-20">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Verdant
          </h1>
          <p className="text-2xl mb-8 max-w-3xl mx-auto">
            Uncover the environmental story of any location
          </p>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get instant access to environmental data, natural disaster risks, and endangered species information for any area.
          </p>
          <div className="flex justify-center gap-4 max-w-md mx-auto">
            <PlaceAutocomplete onPlaceSelect={setSearchLocation} className="flex-1"/>
            <Button type="submit" size="lg" onClick={handleExploreClick}>
              <Icons.Search className="mr-2 h-4 w-4" /> Explore
            </Button>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-4">Explore Environmental Risks</h2>
          <div className="h-[400px] w-full">
            <Map
              center={mapCenter}
              zoom={mapZoom}
              onCameraChanged={(ev) =>{
                const newCenter = ev.detail.center
                const newZoom = ev.detail.zoom
                setMapCenter({ lat: newCenter.lat, lng: newCenter.lng})
                setMapZoom(newZoom)
              }}
            />
          </div>
        </section>
        
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">What Verdant Provides</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Icons.Search, title: "Biodiversity Index", description: "Discover the richness of plant and animal species in the area." },
              { icon: Icons.AlertTriangle, title: "Natural Disaster Risk", description: "Assess potential risks from earthquakes, floods, and other natural events." },
              { icon: Icons.Fish, title: "Endangered Species", description: "Learn about threatened flora and fauna in the region." },
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <feature.icon className="w-10 h-10 mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-20 bg-muted rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">See Verdant in Action</h2>
          <div className="max-w-4xl mx-auto bg-background p-8 border-x-8 rounded-3xl lg:border-none lg:rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <div className="rounded-lg flex items-center justify-center">
                <Icons.MapPin className="w-16 h-16" />
              </div>
            </div>
            <p className="text-center text-lg">
              Interact with our demo map powered by Google to see how Verdant provides detailed environmental insights for any location.
            </p>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Verdant</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Comprehensive Data", description: "Access a wide range of environmental indicators in one place." },
              { title: "Real-time Updates", description: "Get the most current information, updated regularly from reliable sources." },
              { title: "Easy to Understand", description: "Complex data presented in clear, visual formats for easy interpretation." },
              { title: "Actionable Insights", description: "Gain knowledge that can inform decision-making and conservation efforts." },
            ].map((reason, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{reason.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Your Environment?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join Verdant today and gain valuable insights into the environmental landscape around you.
          </p>
          <Button size="lg" className="gap-2">
            Start Your Environmental Journey <Icons.Leaf className="w-5 h-5" />
          </Button>
        </section>

        <section className="py-10">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Icons.MapPin, text: "Data for over 1 million locations" },
              { icon: Icons.Cloud, text: "Daily updates from global sources" },
              { icon: Icons.AlertTriangle, text: "Risk assessments for 50+ natural disasters" },
            ].map((fact, index) => (
              <div key={index} className="flex items-center gap-4 bg-muted p-4 rounded-lg">
                <fact.icon className="w-8 h-8" />
                <span className="font-medium">{fact.text}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </APIProvider>
  )
}
