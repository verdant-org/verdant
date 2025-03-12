import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/base/Header";
import Footer from "@/components/layout/base/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { describe } from "node:test";
// import {APIProvider} from "@vis.gl/react-google-maps"    // Unused -> Not needed in root layout

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verdant - Location Risk Assessment Tool",
  description: "Search locations by risk category and visualize results on an interactive map",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
              <main className="flex-1">
                {children}
              </main>
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
