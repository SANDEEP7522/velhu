import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import { siteMeta, projects } from "@/cotents";

export const metadata = {
    title: `Portfolio — Website & App Development Projects | ${siteMeta.brand}`,
    description:
        "Explore Velhu's portfolio — 150+ websites, ecommerce stores, mobile apps and custom software projects delivered for clients in Delhi NCR and across India.",
    alternates: { canonical: "/portfolio" },
    openGraph: {
        title: `Our Work — ${siteMeta.brand}`,
        description:
            "Real client projects across web, ecommerce, mobile apps, and custom software.",
        url: `${siteMeta.url}/portfolio`,
        type: "website",
    },
};

function PortfolioJsonLd() {
    const json = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": `${siteMeta.url}/portfolio#collectionpage`,
                url: `${siteMeta.url}/portfolio`,
                name: "Portfolio",
                breadcrumb: {
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        { "@type": "ListItem", position: 1, name: "Home", item: siteMeta.url },
                        {
                            "@type": "ListItem",
                            position: 2,
                            name: "Portfolio",
                            item: `${siteMeta.url}/portfolio`,
                        },
                    ],
                },
            },
            {
                "@type": "ItemList",
                itemListElement: projects.map((p, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    item: {
                        "@type": "CreativeWork",
                        name: p.name,
                        description: p.description,
                        url: p.link || `${siteMeta.url}/portfolio`,
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

export default function PortfolioPage() {
    return (
        <>
            <PortfolioJsonLd />
            {/* <section className="pt-28 sm:pt-32 md:pt-36 pb-4 sm:pb-6">
                <div className="max-w-[1700px] mx-auto px-2 sm:px-3 lg:px-4 text-center">
                    <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary-light border border-primary/20 mb-4">
                        Our Portfolio
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 text-balance">
                        Projects We&apos;re <span className="gradient-text">Proud Of</span>
                    </h1>
                    <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed text-pretty">
                        A selection of recent websites, ecommerce stores, mobile apps and custom software we&apos;ve built for clients in Delhi NCR and across India.
                    </p>
                </div>
            </section> */}
            <Portfolio />
            <CTA />
        </>
    );
}
