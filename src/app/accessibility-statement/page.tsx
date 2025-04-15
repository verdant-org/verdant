"use client"
import Link from "next/link"

export default function AccessibilityStatement() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
        Accessibility Statement
      </h1>

      <p className="mb-4">
        At <span className="font-semibold text-green-700 dark:text-green-500">Verdant</span>, we are committed to ensuring that our environmental risk mapping tool is accessible to everyone, regardless of ability or technology.
      </p>

      <SectionTitle>Our Commitment</SectionTitle>
      <p className="mb-4">
        We strive to make our website and services usable by all people, including those with disabilities. Our goal is to conform to the <span className="font-semibold">Web Content Accessibility Guidelines (WCAG) 2.1</span> Level AA, and to continually improve the user experience for everyone.
      </p>

      <SectionTitle>Accessibility Features</SectionTitle>
      <ul className="list-disc pl-6 mb-4">
        <li>Semantic HTML for clear structure and navigation.</li>
        <li>Keyboard navigability for all interactive elements.</li>
        <li>High color contrast and readable font sizes.</li>
        <li>Alt text for all meaningful images and icons.</li>
        <li>Responsive design for use on all devices.</li>
        <li>ARIA labels and roles where appropriate.</li>
      </ul>

      <SectionTitle>Ongoing Efforts</SectionTitle>
      <p className="mb-4">
        We regularly review our website and content to identify and address accessibility issues. We welcome feedback from users to help us improve.
      </p>

      <SectionTitle>Contact Us</SectionTitle>
      <p className="mb-4">
        If you experience any difficulty accessing content on <span className="font-semibold text-green-700 dark:text-green-500">Verdant</span>, or have suggestions for improvement, please <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:text-green-600 dark:hover:text-green-500 transition-colors">contact us</Link>. We value your input and will do our best to address your concerns.
      </p>

      <SectionTitle>Third-Party Content</SectionTitle>
      <p className="mb-4">
        While we strive to ensure accessibility on all parts of our website, some third-party content or features may not fully meet our standards. We encourage you to let us know if you encounter any barriers.
      </p>

      <p className="text-basee text-muted-foreground mt-8">
        Last updated: April 15, 2025
      </p>
    </div>
  )
}

// Same left border with logo colors functions as found under the privacy and terms pages
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