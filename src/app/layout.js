import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadModal from "@/components/LeadModal";
import { siteMeta } from "@/cotents";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const TITLE = `Website & Mobile App Development Company in Delhi | ${siteMeta.brand}`;
const DESCRIPTION = siteMeta.description;

export const metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: TITLE,
    template: `%s | ${siteMeta.legalName}`,
  },
  description: DESCRIPTION,
  applicationName: siteMeta.legalName,
  authors: [{ name: siteMeta.legalName, url: siteMeta.url }],
  creator: siteMeta.legalName,
  publisher: siteMeta.legalName,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "website development company in delhi",
    "web development services",
    "website designer in delhi",
    "ecommerce website developer",
    "mobile app development company",
    "android app development",
    "ios app development",
    "seo friendly website design",
    "responsive website design",
    "seo services in delhi",
    "full stack developer",
    "custom website development",
    "app development services india",
    "ui ux design delhi",
    "saas development company",
    "next.js development",
    "react native app development",
    "Velhu",
    "Velhu Global Tech Solutions",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteMeta.url,
    siteName: siteMeta.legalName,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteMeta.legalName} — Modern Web Development Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: siteMeta.twitter,
    site: siteMeta.twitter,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6366f1" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark light",
};

function OrganizationJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": `${siteMeta.url}/#organization`,
        name: siteMeta.legalName,
        alternateName: siteMeta.brand,
        url: siteMeta.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteMeta.url}${siteMeta.logoIcon}`,
          width: 1536,
          height: 1024,
        },
        image: `${siteMeta.url}/opengraph-image`,
        email: siteMeta.email,
        telephone: siteMeta.phone,
        priceRange: "₹₹",
        foundingDate: siteMeta.foundingDate,
        description: siteMeta.description,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteMeta.address.street,
          addressLocality: siteMeta.address.city,
          addressRegion: siteMeta.address.region,
          postalCode: siteMeta.address.postalCode,
          addressCountry: siteMeta.address.country,
        },
        areaServed: (siteMeta.serviceArea || ["India", "Worldwide"]).map(
          (a) => ({ "@type": "Place", name: a })
        ),
        sameAs: [
          "https://x.com/sahuji7522",
          "https://www.linkedin.com/in/sandeep-kumar-sahu-ab9a73303/",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: siteMeta.email,
            telephone: siteMeta.phone,
            contactType: "customer support",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteMeta.url}/#website`,
        url: siteMeta.url,
        name: siteMeta.legalName,
        description: siteMeta.description,
        publisher: { "@id": `${siteMeta.url}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(json).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:px-4 focus:py-2 focus:rounded-md focus:bg-primary focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <LeadModal />
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
