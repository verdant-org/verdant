"use client"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
        Privacy Policy
      </h1>

      <p className="mb-4">
        This Privacy Policy describes how <span className="font-semibold text-green-700">Verdant</span> collects, uses, and protects your information when you use our website and services.
      </p>

      <SectionTitle>Information We Collect</SectionTitle>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <span className="font-semibold">Personal Information:</span> We do not require you to provide personal information. However, if you contact us, sign up for updates, or create an account, we may collect your name and email address. The BETTER-AUTH authentication framework is used to securely manage emails, passwords, and accounts.
        </li>
        <li>
          <span className="font-semibold">Usage Data:</span> We may collect non-personal information about how you interact with the Service, such as your IP address, browser type, device information, and pages visited. This helps us improve the Service.
        </li>
        <li>
          <span className="font-semibold">Cookies:</span> We may use cookies or similar technologies to enhance your experience and analyze usage.
        </li>
      </ul>

      <SectionTitle>How We Use Your Information</SectionTitle>
      <ul className="list-disc pl-6 mb-4">
        <li>To provide, operate, and improve the Service.</li>
        <li>To respond to your inquiries or requests.</li>
        <li>To analyze usage and trends to improve user experience.</li>
        <li>To send updates or information if you have opted in.</li>
      </ul>

      <SectionTitle>Data Sharing and Disclosure</SectionTitle>
      <ul className="list-disc pl-6 mb-4">
        <li>We do not sell or rent your personal information.</li>
        <li>We may share information with trusted service providers who assist us in operating the Service, subject to confidentiality agreements.</li>
        <li>We may disclose information if required by law or to protect our rights and safety.</li>
      </ul>

      <SectionTitle>Data Security</SectionTitle>
      <p className="mb-4">
        We take reasonable measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure.
      </p>

      <SectionTitle>Third-Party Links</SectionTitle>
      <p className="mb-4">
        Our Service contains links to third-party websites. We are not responsible for the privacy practices or content of those sites. Please review their privacy policies before providing any information.
      </p>

      <SectionTitle>Changes to This Policy</SectionTitle>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Your continued use of the Service constitutes acceptance of the revised policy.
      </p>

      <SectionTitle>Contact Us</SectionTitle>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy, please <Link href="/contact" className="underline text-blue-600 hover:text-green-600 transition-colors">contact us</Link>.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Last updated: April 15, 2025
      </p>
    </div>
  )
}

// Same function to generate the left border with logo colors, if we end up reusing in more areas could maybe move somewhere else
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