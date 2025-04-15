"use client"

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from '@/components/ui/breadcrumb';

export default function GuidePage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      {/* Breadcrumb navigation */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbPage>Guide</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Environmental Risk Assessment Guide</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to use our platform to assess environmental risks in your area.
        </p>
      </div>

      {/* Table of Contents */}
      <Card className="mb-8 p-6">
        <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#introduction" className="text-blue-600 hover:underline">Introduction</a>
            </li>
            <li>
              <a href="#getting-started" className="text-blue-600 hover:underline">Getting Started</a>
            </li>
            <li>
              <a href="#using-the-dashboard" className="text-blue-600 hover:underline">Using the Dashboard</a>
              <ul className="ml-4 mt-1 space-y-1">
                <li>
                  <a href="#searching-county" className="text-blue-600 hover:underline">Searching for a County</a>
                </li>
                <li>
                  <a href="#interactive-map" className="text-blue-600 hover:underline">Interactive Map</a>
                </li>
                <li>
                  <a href="#search-results" className="text-blue-600 hover:underline">Search Results</a>
                </li>
                <li>
                  <a href="#changing-data" className="text-blue-600 hover:underline">Changing Data Views</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#understanding-risk-data" className="text-blue-600 hover:underline">Understanding Risk Data</a>
              <ul className="ml-4 mt-1 space-y-1">
                <li>
                  <a href="#risk-page" className="text-blue-600 hover:underline">Risk Index</a>
                </li>
                <li>
                  <a href="#loss-page" className="text-blue-600 hover:underline">Expected Annual Loss</a>
                </li>
                <li>
                  <a href="#social-page" className="text-blue-600 hover:underline">Social Vulnerability</a>
                </li>
                <li>
                  <a href="#community-page" className="text-blue-600 hover:underline">Community Resilience</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#profile-management" className="text-blue-600 hover:underline">Profile Management</a>
            </li>
            <li>
              <a href="#advanced-features" className="text-blue-600 hover:underline">Advanced Features</a>
            </li>
          </ul>
        </nav>
      </Card>

      {/* Introduction Section */}
      <section id="introduction" className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Introduction</h2>
        <Separator className="mb-6" />
        <div className="prose max-w-none">
          <p>
            Welcome to our Environmental Risk Assessment platform. This platform is designed to help individuals, 
            organizations, and communities understand the environmental risks in their area and make informed decisions.
          </p>
          <p>
            Our platform aggregates data from various sources to provide comprehensive risk assessments for counties 
            across the continental United States. Whether you're concerned about natural disasters, pollution, or other 
            environmental hazards, our platform can help you understand the risks and plan accordingly.
          </p>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
        <Separator className="mb-6" />
        <div className="prose max-w-none">
          <h3 className="text-2xl font-semibold mb-2">Creating an Account</h3>
          <p>
            To access all features of our platform, you'll need to create an account. Click on the "Sign Up" button 
            in the top right corner of the page and follow the instructions to create your account.
          </p>

          <h3 className="text-2xl font-semibold mb-2 mt-6">Logging In</h3>
          <p>
            If you already have an account, click on the "Sign In" button in the top right corner of the page and 
            enter your credentials to log in.
          </p>

          <h3 className="text-2xl font-semibold mb-2 mt-6">Dashboard Overview</h3>
          <p>
            Once logged in, you'll be directed to your dashboard. Here you can explore environmental risk data for 
            counties across the United States.
          </p>
          
          <div className="my-6 border rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/guide/dashboard.png" 
              alt="Dashboard landing page" 
              width={900} 
              height={600}
              className="w-full"
            />
            <div className="p-4 bg-muted">
              <p className="text-sm font-medium">Dashboard landing page showing the main interface and map.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Using the Dashboard Section */}
      <section id="using-the-dashboard" className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Using the Dashboard</h2>
        <Separator className="mb-6" />
        <div className="prose max-w-none">
          <p>
            The dashboard is your central hub for accessing environmental risk data. Here's how to use it effectively:
          </p>

          <h3 id="searching-county" className="text-2xl font-semibold mb-2 mt-6">Searching for a County</h3>
          <p>
            Use the search panel on the side to search for a specific county. Enter the county name in the search box and select from the dropdown results.
          </p>
          
          <div className="my-6 border rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/guide/using-search.png" 
              alt="Using the search field" 
              width={900} 
              height={600}
              className="w-full"
            />
            <div className="p-4 bg-muted">
              <p className="text-sm font-medium">Using the search field to find a specific county.</p>
            </div>
          </div>

          <h3 id="interactive-map" className="text-2xl font-semibold mb-2 mt-6">Interactive Map</h3>
          <p>
            The interactive Google Maps integration allows you to visually explore different regions. Click on a county on 
            the map to view its risk data.
          </p>
          
          <div className="my-6 border rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/guide/clicking-map.png" 
              alt="Clicking on the map" 
              width={900} 
              height={600}
              className="w-full"
            />
            <div className="p-4 bg-muted">
              <p className="text-sm font-medium">Selecting a county by clicking directly on the map.</p>
            </div>
          </div>

          <h3 id="search-results" className="text-2xl font-semibold mb-2 mt-6">Search Results</h3>
          <p>
            After selecting a county, the dashboard will display detailed environmental risk data for that area. The results include various metrics and visualizations to help you understand the risks.
          </p>
          
          <div className="my-6 border rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/guide/search-results.png" 
              alt="Search results for a county" 
              width={900} 
              height={600}
              className="w-full"
            />
            <div className="p-4 bg-muted">
              <p className="text-sm font-medium">Search results showing detailed risk data for the selected county.</p>
            </div>
          </div>

          <h3 id="changing-data" className="text-2xl font-semibold mb-2 mt-6">Changing Data Views</h3>
          <p>
            You can switch between different data types to view various aspects of environmental risk for the selected county. Use the navigation tabs to change the data view.
          </p>
          
          <div className="my-6 border rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/guide/changing-data.png" 
              alt="Changing the data type displayed" 
              width={900} 
              height={600}
              className="w-full"
            />
            <div className="p-4 bg-muted">
              <p className="text-sm font-medium">Switching between different data types using the navigation tabs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Risk Data Section */}
      <section id="understanding-risk-data" className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Understanding Risk Data</h2>
        <Separator className="mb-6" />
        <div className="prose max-w-none">
          <p>
            Our platform provides comprehensive environmental risk data. Here's what you can find on different pages:
          </p>

          <h3 id="risk-page" className="text-2xl font-semibold mb-2 mt-6">Risk Index</h3>
          <p>
            The Risk Page provides a comprehensive overview of environmental risks in the selected county, including 
            natural disasters, pollution levels, and other hazards. The risk index combines multiple factors to give you a complete picture of environmental risks.
          </p>
          
          <div className="my-6 border rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/guide/risk-index.png" 
              alt="Risk index data" 
              width={900} 
              height={600}
              className="w-full"
            />
            <div className="p-4 bg-muted">
              <p className="text-sm font-medium">Risk index data showing comprehensive environmental risk assessment.</p>
            </div>
          </div>

          <h3 id="loss-page" className="text-2xl font-semibold mb-2 mt-6">Expected Annual Loss</h3>
          <p>
            The Loss Page shows data on expected annual economic losses due to environmental incidents, helping you understand the 
            potential financial impact of environmental risks. This includes property damage, business interruption, and other economic factors.
          </p>
          
          <div className="my-6 border rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/guide/expected-annual-loss.png" 
              alt="Expected annual loss data" 
              width={900} 
              height={600}
              className="w-full"
            />
            <div className="p-4 bg-muted">
              <p className="text-sm font-medium">Expected annual loss data showing potential economic impact of environmental risks.</p>
            </div>
          </div>

          <h3 id="social-page" className="text-2xl font-semibold mb-2 mt-6">Social Vulnerability</h3>
          <p>
            The Social Page focuses on how environmental risks affect different social groups, including vulnerable populations. 
            This data helps identify communities that may need additional resources or support during environmental events.
          </p>
          
          <div className="my-6 border rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/guide/social-vulnerability.png" 
              alt="Social vulnerability data" 
              width={900} 
              height={600}
              className="w-full"
            />
            <div className="p-4 bg-muted">
              <p className="text-sm font-medium">Social vulnerability data showing how environmental risks affect different social groups.</p>
            </div>
          </div>

          <h3 id="community-page" className="text-2xl font-semibold mb-2 mt-6">Community Resilience</h3>
          <p>
            The Community Page provides information on how well communities can withstand and recover from environmental events. 
            This includes data on infrastructure, emergency services, and community preparedness.
          </p>
          
          <div className="my-6 border rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/guide/community-resilience.png" 
              alt="Community resilience data" 
              width={900} 
              height={600}
              className="w-full"
            />
            <div className="p-4 bg-muted">
              <p className="text-sm font-medium">Community resilience data showing how well communities can respond to and recover from environmental events.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Management Section */}
      <section id="profile-management" className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Profile Management</h2>
        <Separator className="mb-6" />
        <div className="prose max-w-none">
          <p>
            Manage your account information and settings through the Profile page. Here's what you can do:
          </p>

          <h3 className="text-2xl font-semibold mb-2 mt-6">Updating Your Information</h3>
          <p>
            Update your personal information, including profile picture, your name, and your password.
          </p>

          <h3 className="text-2xl font-semibold mb-2 mt-6">Organization Settings</h3>
          <p>
            If you're part of an organization, you can manage your organization settings here. This includes adding team members and setting access permissions.
          </p>

          <h3 className="text-2xl font-semibold mb-2 mt-6">Security Settings</h3>
          <p>
            Change your password and manage other security settings to keep your account secure. We recommend updating your password regularly and enabling two-factor authentication if available.
          </p>
        </div>
      </section>

      {/* Need Help Section */}
      <section id="need-help" className="mb-8">
        <Card className="p-6 bg-muted">
          <h2 className="text-2xl font-bold mb-2">Need Additional Help?</h2>
          <p className="mb-4">
            If you need further assistance, please check our <a href="/faq" className="text-blue-600 hover:underline">FAQ page</a> or 
            <a href="/contact" className="text-blue-600 hover:underline"> contact our support team</a>.
          </p>
        </Card>
      </section>
    </div>
  );
}