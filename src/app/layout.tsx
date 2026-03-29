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
    default: "Sumanth Tatipamula — I build things for the web",
    template: "%s | Sumanth Tatipamula",
  },
  description:
    "Personal portfolio of Sumanth Tatipamula — a developer who loves turning complex problems into elegant interfaces. Explore my journey through ServiceNow, Oracle, Amazon, and beyond.",
  keywords: [
    "Sumanth Tatipamula",
    "portfolio",
    "web developer",
    "React",
    "JavaScript",
    "TypeScript",
    "ServiceNow",
    "Oracle",
    "Amazon",
    "full stack",
    "frontend",
  ],
  authors: [{ name: "Sumanth Tatipamula", url: siteUrl }],
  creator: "Sumanth Tatipamula",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Sumanth Tatipamula",
    title: "Sumanth Tatipamula — I build things for the web",
    description:
      "Explore the work and journey of Sumanth Tatipamula — crafting interfaces at ServiceNow, Oracle, and Amazon.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumanth Tatipamula — I build things for the web",
    description:
      "Explore the work and journey of Sumanth Tatipamula — crafting interfaces at ServiceNow, Oracle, and Amazon.",
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
