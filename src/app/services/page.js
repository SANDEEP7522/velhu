import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CTA from "@/components/CTA";
import FAQ, { FaqJsonLd } from "@/components/FAQ";
import { siteMeta, serviceList, seoFaqs } from "@/cotents";

export const metadata = {
    title: `Web & Mobile App Development Services in Delhi | ${siteMeta.brand}`,
    description:
        "Explore Velhu's full range of digital services — website development, ecommerce, mobile app development (Android & iOS), SEO, UI/UX design, and custom software development for businesses in Delhi NCR and across India.",
    alternates: { canonical: "/services" },
    openGraph: {
        title: `Services — Web & App Development in Delhi NCR | ${siteMeta.brand}`,
        description: siteMeta.description,
        url: `${siteMeta.url}/services`,
        type: "website",
    },
};

function ServicesJsonLd() {
    const json = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": `${siteMeta.url}/services#collectionpage`,
                url: `${siteMeta.url}/services`,
                name: "Services",
                breadcrumb: {
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        { "@type": "ListItem", position: 1, name: "Home", item: siteMeta.url },
                        {
                            "@type": "ListItem",
                            position: 2,
                            name: "Services",
                            item: `${siteMeta.url}/services`,
                        },
                    ],
                },
            },
            {
                "@type": "ItemList",
                itemListElement: serviceList.map((s, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    item: {
                        "@type": "Service",
                        name: s.name,
                        url: `${siteMeta.url}/services/${s.slug}`,
                        description: s.description,
                        provider: { "@id": `${siteMeta.url}/#organization` },
                        areaServed: siteMeta.serviceArea,
                    },
                })),
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

export default function ServicesPage() {
    return (
        <>
            <ServicesJsonLd />
            <FaqJsonLd items={seoFaqs.slice(0, 6)} />

            <section className="pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16">
                <div className="max-w-[1700px] mx-auto px-2 sm:px-3 lg:px-4 text-center">
                    <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary-light border border-primary/20 mb-4">
                        Our Services
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 text-balance">
                        Web & Mobile App{" "}
                        <span className="gradient-text">Development Services</span>
                    </h1>
                    <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed text-pretty">
                        End-to-end digital services for startups, SMEs and enterprises in Delhi NCR and across India — from custom website development and ecommerce stores to Android & iOS apps, SEO, UI/UX design, and custom software.
                    </p>
                </div>
            </section>

            <section className="pb-16 sm:pb-20 md:pb-24">
                <div className="max-w-[1700px] mx-auto px-2 sm:px-3 lg:px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                        {serviceList.map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group relative flex flex-col rounded-2xl bg-white border border-slate-200 hover:border-primary/30 card-shadow hover:card-shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                            >
                                {s.image ? (
                                    <div className="relative w-full aspect-16/10 bg-slate-50 overflow-hidden">
                                        <Image
                                            src={s.image}
                                            alt={`${s.name} — illustration`}
                                            fill
                                            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                ) : null}
                                <div className="p-5 sm:p-6 md:p-7 flex flex-col flex-1">
                                    <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300 text-pretty">
                                        {s.name}
                                    </h2>
                                    <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1 line-clamp-4">
                                        {s.tagline} {s.description.slice(0, 120)}…
                                    </p>
                                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
                                        Learn more
                                        <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <FAQ
                items={seoFaqs.slice(0, 6)}
                title="Common Questions"
                highlight="About Our Services"
                description="Quick answers about timelines, pricing, technology choices, and ownership."
            />
            <CTA />
        </>
    );
}
