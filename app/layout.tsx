import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import EmailSetupGuide from "@/components/email-setup-guide"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MDS Thamu - Full Stack Web Developer Portfolio | MERN Stack Developer India",
  description:
    "Professional portfolio of MDS Thamu, a skilled Full Stack Web Developer specializing in MERN Stack development. Expert in React.js, Node.js, MongoDB. Hire the best freelance web developer in India for modern web applications.",
  keywords: [
    "MDS Thamu",
    "MDS Thamu Portfolio",
    "Full Stack Web Developer",
    "Web Developer Portfolio India",
    "React Developer Portfolio",
    "MERN Stack Developer",
    "Node.js Developer India",
    "Freelance Web Developer",
    "Professional Portfolio Website",
    "Resume of Web Developer",
    "HTML CSS JavaScript Developer",
    "React.js Frontend Developer",
    "Node.js Backend Developer",
    "MongoDB Full Stack Developer",
    "MERN Stack Projects",
    "Responsive Web Design",
    "API Integration Developer",
    "Modern Web Applications",
    "Construction Website Developer",
    "E-commerce Website in React",
    "Portfolio Website React Developer",
    "Contact Form with MongoDB",
    "Personal Website Design Developer",
    "Web App Development Services",
    "Dynamic Website Developer India",
    "Hire Web Developer India",
    "Best Developer for Freelance Projects",
  ].join(", "),
  authors: [{ name: "MDS Thamu", url: "https://mdsthamu.com" }],
  creator: "MDS Thamu",
  publisher: "MDS Thamu",
  robots: "index, follow",
  openGraph: {
    title: "MDS Thamu - Full Stack Web Developer Portfolio | MERN Stack Developer India",
    description:
      "Professional Full Stack Web Developer specializing in MERN Stack. Expert in React.js, Node.js, MongoDB. Building modern, responsive web applications. Hire the best freelance web developer in India.",
    type: "website",
    url: "https://mdsthamu.com",
    siteName: "MDS Thamu Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/images/mds-thamu-profile.jpg",
        width: 1200,
        height: 630,
        alt: "MDS Thamu - Full Stack Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MDS Thamu - Full Stack Web Developer Portfolio",
    description:
      "Professional Full Stack Web Developer specializing in MERN Stack. Expert in React.js, Node.js, MongoDB.",
    creator: "@mdsthamu",
    images: ["/images/mds-thamu-profile.jpg"],
  },
  alternates: {
    canonical: "https://mdsthamu.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://mdsthamu.com" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="language" content="English" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "MDS Thamu",
              jobTitle: "Full Stack Web Developer",
              description: "Professional Full Stack Web Developer specializing in MERN Stack development",
              url: "https://mdsthamu.com",
              sameAs: [
                "https://linkedin.com/in/mdsthamu",
                "https://github.com/mdsthamu",
                "https://twitter.com/mdsthamu",
              ],
              knowsAbout: [
                "React.js",
                "Node.js",
                "MongoDB",
                "JavaScript",
                "HTML",
                "CSS",
                "MERN Stack",
                "Full Stack Development",
                "Web Development",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
        <EmailSetupGuide />
      </body>
    </html>
  )
}
