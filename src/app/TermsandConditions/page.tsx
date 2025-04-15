"use client"
import Link from "next/link"

export default function TermsAndConditions() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      {/* This is some styling I picked for a gradiant heading with the website logo colors, can be changed */}
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
        Terms and Conditions
      </h1>

      <p className="mb-4">
        Welcome to <span className="font-semibold text-green-700">Verdant</span>. By accessing or using this website, you agree to be bound by these Terms and Conditions. Please read them carefully.
      </p>

      <SectionTitle>Acceptance of Terms</SectionTitle>
      <p className="mb-4">
        By using this Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our{" "}
        <Link href="/PrivacyPolicy" className="underline text-blue-600 hover:text-green-600 transition-colors">Privacy Policy</Link>. If you do not agree, please do not use the Service.
      </p>

      <SectionTitle>Service Description</SectionTitle>
      <p className="mb-4">
        This Service provides environmental risk information, mapping, and related data for educational and informational purposes only. The data and results are provided "as is" and may not be complete or up-to-date.
      </p>

      <SectionTitle>No Professional Advice</SectionTitle>
      <p className="mb-4">
        The information provided by this Service does not constitute legal, financial, or professional advice. You should consult with appropriate professionals before making any decisions based on the information provided.
      </p>

      <SectionTitle>User Responsibilities</SectionTitle>
      <ul className="list-disc pl-6 mb-4">
        <li>You agree to use the Service only for lawful purposes.</li>
        <li>You will not misuse, copy, or redistribute the data or content without permission.</li>
        <li>You are responsible for any activity that occurs under your use of the Service.</li>
      </ul>

      <SectionTitle>Intellectual Property</SectionTitle>
      <p className="mb-4">
        All content, graphics, and code on this website are the property of Verdant or its licensors. Unauthorized use is prohibited.
      </p>

      <SectionTitle>Limitation of Liability</SectionTitle>
      <p className="mb-4">
        To the fullest extent permitted by law, Verdant and its affiliates are not liable for any damages or losses resulting from your use of the Service or reliance on its content.
      </p>

      <SectionTitle>Changes to Terms</SectionTitle>
      <p className="mb-4">
        We reserve the right to update or modify these Terms and Conditions at any time. Changes will be posted on this page. Continued use of the Service after changes constitutes acceptance of the new terms.
      </p>

      <SectionTitle>Contact</SectionTitle>
      <p className="mb-4">
        If you have any questions about these Terms and Conditions, please <Link href="/contact" className="underline text-blue-600 hover:text-green-600 transition-colors">contact us</Link>.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Last updated: April 15, 2025
      </p>
    </div>
  )
}

// Colored left border for section titles, uses the green/blue colors of our logo
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-2xl font-semibold mt-8 mb-2 pl-3 border-l-4"
      style={{
        borderImage: "linear-gradient(to bottom, #38bdf8, #4ade80) 1",
        borderLeftWidth: 6,
        borderLeftStyle: "solid"
      }}
    >
      {children}
    </h2>
  )
}