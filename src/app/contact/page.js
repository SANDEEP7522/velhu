import Contact from "@/components/Contact";
import FAQ, { FaqJsonLd } from "@/components/FAQ";
import { siteMeta, seoFaqs } from "@/cotents";

export const metadata = {
    title: `Contact ${siteMeta.brand} — Web & App Development in Delhi NCR`,
    description: `Get in touch with ${siteMeta.legalName}. Free project quotes within 24 hours. WhatsApp, email, or visit our office in Noida, Delhi NCR.`,
    alternates: { canonical: "/contact" },
    openGraph: {
        title: `Contact ${siteMeta.brand}`,
        description: `Get a free quote for your web or mobile app project.`,
        url: `${siteMeta.url}/contact`,
        type: "website",
    },
};

function ContactJsonLd() {
    const json = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ContactPage",
                "@id": `${siteMeta.url}/contact#contactpage`,
                url: `${siteMeta.url}/contact`,
                name: `Contact ${siteMeta.brand}`,
                breadcrumb: {
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        { "@type": "ListItem", position: 1, name: "Home", item: siteMeta.url },
                        {
                            "@type": "ListItem",
                            position: 2,
                            name: "Contact",
                            item: `${siteMeta.url}/contact`,
                        },
                    ],
                },
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

export default function ContactPage() {
    const faqs = seoFaqs.slice(0, 5);
    return (
        <>
            <ContactJsonLd />
            <FaqJsonLd items={faqs} />
            <section className="pt-28 sm:pt-32 md:pt-36 pb-4 sm:pb-6">
                <div className="max-w-[1700px] mx-auto px-2 sm:px-3 lg:px-4 text-center">
                    <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary-light border border-primary/20 mb-4">
                        Contact Us
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 text-balance">
                        Let&apos;s build something{" "}
                        <span className="gradient-text">amazing together</span>
                    </h1>
                    <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed text-pretty">
                        Tell us about your project — website, ecommerce, mobile app, or custom software. We reply with a fixed quote and timeline within 24 hours. Based in Noida, Delhi NCR.
                    </p>
                </div>
            </section>
            <Contact />
            <FAQ
                items={faqs}
                title="Before you"
                highlight="reach out"
                description="Common questions about pricing, timelines, and what to expect from your first call."
            />
        </>
    );
}
