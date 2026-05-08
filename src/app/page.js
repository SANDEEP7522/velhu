import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import {
  siteMeta,
  services,
  pricingPlans,
  testimonials,
  projects,
} from "@/cotents";

export const metadata = {
  title: "Modern Web Development Agency",
  description: siteMeta.description,
  alternates: { canonical: "/" },
};

function HomeJsonLd() {
  const ratingCount = testimonials.length;
  const ratingValue =
    testimonials.reduce((sum, t) => sum + (t.rating || 0), 0) / ratingCount;

  const json = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteMeta.url}/#business`,
        name: siteMeta.legalName,
        url: siteMeta.url,
        image: `${siteMeta.url}/opengraph-image`,
        description: siteMeta.description,
        priceRange: "₹₹",
        telephone: siteMeta.phone,
        email: siteMeta.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteMeta.address.street,
          addressLocality: siteMeta.address.city,
          addressRegion: siteMeta.address.region,
          postalCode: siteMeta.address.postalCode,
          addressCountry: siteMeta.address.country,
        },
        areaServed: "Worldwide",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: ratingValue.toFixed(1),
          reviewCount: ratingCount,
          bestRating: 5,
          worstRating: 1,
        },
        review: testimonials.map((t) => ({
          "@type": "Review",
          author: { "@type": "Person", name: t.name },
          reviewBody: t.content,
          reviewRating: {
            "@type": "Rating",
            ratingValue: t.rating,
            bestRating: 5,
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${siteMeta.url}/#services`,
        name: "Web Development Services",
        itemListElement: services.map((service, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: { "@id": `${siteMeta.url}/#organization` },
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${siteMeta.url}/#pricing`,
        name: "Web Development Pricing Plans",
        itemListElement: pricingPlans.map((plan, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Offer",
            name: plan.name,
            description: plan.description,
            price: plan.price.replace(/[^\d]/g, "") || undefined,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            seller: { "@id": `${siteMeta.url}/#organization` },
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${siteMeta.url}/#portfolio`,
        name: "Portfolio Projects",
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CreativeWork",
            name: p.name,
            description: p.description,
            url: p.link || undefined,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteMeta.url,
          },
        ],
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

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <Hero />
      <Services />
      <Pricing />
      <Portfolio />
      <About />
      <Process />
      <TechStack />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
