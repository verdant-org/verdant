"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Users, BarChart, Globe, Award, BookOpen, Building, Handshake } from "lucide-react"
import Link from "next/link"
import { SignedIn, SignedOut } from "@/lib/auth-components"

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">About Verdant</h1>
        <p className="text-2xl mb-8 max-w-3xl mx-auto">
          Our mission is to make environmental data accessible, understandable, and actionable
        </p>
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </div>
      </section>

      <section className="py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-4">
              Verdant began with a simple question: Why is it so difficult to access comprehensive environmental data
              about the places we live, work, and care about?
            </p>
            <p className="text-lg mb-4">
              Founded in 2021 by a team of environmental scientists, data specialists, and concerned citizens, Verdant
              was created to bridge the gap between complex environmental datasets and everyday users.
            </p>
            <p className="text-lg">
              What started as a passion project has grown into a comprehensive platform that serves individuals,
              communities, researchers, and policymakers across the United States.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-8 flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute inset-0 flex items-center justify-center">
                <Leaf className="w-24 h-24 text-primary" />
              </div>
              <div className="absolute inset-0 border-4 border-primary/20 rounded-lg transform rotate-6"></div>
              <div className="absolute inset-0 border-4 border-primary/40 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted rounded-lg px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: "Environmental Transparency",
              description:
                "We believe everyone has the right to understand the environmental conditions of their surroundings.",
            },
            {
              icon: BookOpen,
              title: "Data-Driven Education",
              description: "We're committed to translating complex environmental science into accessible knowledge.",
            },
            {
              icon: Award,
              title: "Scientific Integrity",
              description: "We uphold the highest standards of accuracy and reliability in all the data we provide.",
            },
          ].map((value, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="text-center mb-10">
          <p className="text-lg max-w-3xl mx-auto">
            Verdant brings together experts from environmental science, data analytics, software development, and user
            experience design to create a platform that makes environmental data accessible to all.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: "Jason Tolen", role: "Fullstack Developer", image: "/placeholder.svg?height=200&width=200" },
            { name: "Among Allani", role: "Fullstack Developer", image: "/placeholder.svg?height=200&width=200" },
            { name: "Carlo Fraley", role: "Fullstack Developer", image: "/placeholder.svg?height=200&width=200" },
            { name: "Preston Hemmy", role: "Fullstack Developer", image: "/placeholder.svg?height=200&width=200" },
          ].map((member, index) => (
            <Card key={index}>
              <CardContent className="pt-6 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-muted rounded-lg px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-4">How We Collect Data</h3>
            <p className="mb-4">Verdant aggregates information from multiple authoritative sources, including:</p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Federal environmental agencies</li>
              <li>State conservation departments</li>
              <li>Academic research institutions</li>
              <li>Verified citizen science initiatives</li>
              <li>International environmental organizations</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">How We Ensure Quality</h3>
            <p className="mb-4">Our rigorous verification process includes:</p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Multi-source cross-validation</li>
              <li>Regular data refreshes and updates</li>
              <li>Expert review by our scientific advisory board</li>
              <li>Transparent sourcing and methodology</li>
              <li>Continuous feedback integration</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto">
                <BarChart className="w-12 h-12 text-primary mx-auto" />
              </div>
              <CardTitle className="text-4xl font-bold">250K+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Environmental assessments provided</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto">
                <Building className="w-12 h-12 text-primary mx-auto" />
              </div>
              <CardTitle className="text-4xl font-bold">3,000+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Counties with detailed data coverage</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto">
                <Handshake className="w-12 h-12 text-primary mx-auto" />
              </div>
              <CardTitle className="text-4xl font-bold">15+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Natural disaster analysis</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us in Our Mission</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether you're an individual concerned about your local environment or an organization looking to leverage our
          data, Verdant is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2">
            <SignedIn>
                Explore Now <Leaf className="w-5 h-5" />
              </SignedIn>
              <SignedOut>
                Start Exploring for Free <Leaf className="w-5 h-5" />
              </SignedOut>
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
           <Link href="/contact">Contact Us</Link> <Users className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

  