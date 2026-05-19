import About from "@/components/About";
import CTA from "@/components/CTA";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import { siteMeta } from "@/cotents";

export const metadata = {
    title: `About ${siteMeta.brand} | Website & App Development Team in Delhi NCR`,
    description: `Meet the team behind ${siteMeta.legalName} — a website and mobile app development company in Delhi NCR delivering custom web, ecommerce, and mobile app solutions for clients across India and worldwide.`,
    alternates: { canonical: "/about" },
    openGraph: {
        title: `About ${siteMeta.brand} — Web & App Development Company in Delhi`,
        description: siteMeta.description,
        url: `${siteMeta.url}/about`,
        type: "website",
    },
};

function AboutJsonLd() {
    const json = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": `${siteMeta.url}/about#aboutpage`,
        url: `${siteMeta.url}/about`,
        name: `About ${siteMeta.brand}`,
        about: { "@id": `${siteMeta.url}/#organization` },
        breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: siteMeta.url },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "About",
                    item: `${siteMeta.url}/about`,
                },
            ],
        },
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

export default function AboutPage() {
    return (
        <>
            <AboutJsonLd />
            <section className="pt-28 sm:pt-32 md:pt-36 pb-4 sm:pb-6">
                <div className="max-w-425 mx-auto px-2 sm:px-3 lg:px-4 text-center">
                    <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary-light border border-primary/20 mb-4">
                        About Us
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 text-balance">
                        About <span className="gradient-text">{siteMeta.brand}</span>
                    </h1>
                    <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed text-pretty">
                        {siteMeta.legalName} is a website and mobile app development company based in Noida, Delhi NCR. We help startups, SMEs, and enterprises across Delhi, Gurgaon, Noida and pan-India build digital products that look great, load fast, and rank on Google.
                    </p>
                </div>
            </section>
            <About />
            <Process />
            <TechStack />
            <Testimonials />
            <CTA />
        </>
    );
}
