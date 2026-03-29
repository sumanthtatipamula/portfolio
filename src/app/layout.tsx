import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://sumanthtataipamula.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sumanth Tatipamula | Software Developer",
    template: "%s | Sumanth Tatipamula",
  },
  description:
    "Sumanth Tatipamula is a Software Developer with 5+ years of experience at ServiceNow, Oracle, and Amazon. Specializing in React, JavaScript, and full-stack development.",
  keywords: [
    "Sumanth Tatipamula",
    "Software Developer",
    "Software Engineer",
    "React Developer",
    "JavaScript",
    "TypeScript",
    "ServiceNow",
    "Oracle",
    "Amazon",
    "Full Stack Developer",
    "Hyderabad",
    "India",
  ],
  authors: [{ name: "Sumanth Tatipamula", url: siteUrl }],
  creator: "Sumanth Tatipamula",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Sumanth Tatipamula - Portfolio",
    title: "Sumanth Tatipamula | Software Developer",
    description:
      "Software Developer with 5+ years of experience at ServiceNow, Oracle, and Amazon. Crafting exceptional digital experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumanth Tatipamula | Software Developer",
    description:
      "Software Developer with 5+ years of experience at ServiceNow, Oracle, and Amazon.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sumanth Tatipamula",
              url: siteUrl,
              jobTitle: "Software Developer",
              worksFor: {
                "@type": "Organization",
                name: "ServiceNow",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Vasavi College of Engineering",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressCountry: "IN",
              },
              email: "sumanthtatipamula123@gmail.com",
              sameAs: ["https://github.com/sumanthtatipamula"],
              knowsAbout: [
                "React",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "Java",
                "SQL",
                "CSS",
                "HTML",
                "Git",
              ],
            }),
          }}
        />
      </head>
      <body className="font-[var(--font-inter)] antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
