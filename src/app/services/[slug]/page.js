import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Code2 } from "lucide-react";
import CTA from "@/components/CTA";
import FAQ, { FaqJsonLd } from "@/components/FAQ";
import { siteMeta, serviceList, seoFaqs } from "@/cotents";

export function generateStaticParams() {
    return serviceList.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = serviceList.find((s) => s.slug === slug);
    if (!service) return {};
    return {
        title: service.title,
        description: service.description,
        keywords: service.keywords,
        alternates: { canonical: `/services/${service.slug}` },
        openGraph: {
            title: service.title,
            description: service.description,
            url: `${siteMeta.url}/services/${service.slug}`,
            type: "website",
        },
    };
}

function ServiceJsonLd({ service }) {
    const url = `${siteMeta.url}/services/${service.slug}`;
    const json = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": `${url}#service`,
                name: service.name,
                serviceType: service.name,
                description: service.description,
                provider: { "@id": `${siteMeta.url}/#organization` },
                areaServed: (siteMeta.serviceArea || ["India"]).map((a) => ({
                    "@type": "Place",
                    name: a,
                })),
                url,
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: siteMeta.url },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Services",
                        item: `${siteMeta.url}/services`,
                    },
                    { "@type": "ListItem", position: 3, name: service.name, item: url },
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

export default async function ServicePage({ params }) {
    const { slug } = await params;
    const service = serviceList.find((s) => s.slug === slug);
    if (!service) notFound();

    const related = (service.relatedServices || [])
        .map((rs) => serviceList.find((s) => s.slug === rs))
        .filter(Boolean);

    const faqs = seoFaqs.slice(0, 6);

    return (
        <>
            <ServiceJsonLd service={service} />
            <FaqJsonLd items={faqs} />

            <section className="pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-12">
                <div className="max-w-[1700px] mx-auto px-2 sm:px-3 lg:px-4">
                    <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
                        <Link href="/" className="hover:text-primary transition-colors">
                            Home
                        </Link>
                        <span className="mx-1.5">/</span>
                        <Link href="/services" className="hover:text-primary transition-colors">
                            Services
                        </Link>
                        <span className="mx-1.5">/</span>
                        <span className="text-slate-700 font-medium">{service.name}</span>
                    </nav>

                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary-light border border-primary/20 mb-4">
                            {service.name}
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 text-balance">
                            {service.h1}
                        </h1>
                        <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-primary font-medium text-pretty">
                            {service.tagline}
                        </p>
                        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed text-pretty">
                            {service.description}
                        </p>
                        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-primary to-accent text-white text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 min-h-11"
                            >
                                Get a free quote
                                <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                            </Link>
                            <Link
                                href="/portfolio"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 text-sm font-semibold border border-slate-200 card-shadow hover:border-primary/40 hover:text-primary transition-all duration-300 min-h-11"
                            >
                                See our work
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-16 md:py-20 bg-slate-50/60">
                <div className="max-w-[1700px] mx-auto px-2 sm:px-3 lg:px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-balance">
                                Why choose Velhu for {service.name.toLowerCase()}?
                            </h2>
                            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                                We&apos;re a full-service team based in Noida / Delhi NCR with 150+ projects delivered for clients across Delhi, Gurgaon, Noida, and pan-India. Every project ships with clean code, SEO-friendly architecture, and post-launch support.
                            </p>
                            <ul className="mt-6 space-y-3">
                                {service.benefits.map((b) => (
                                    <li key={b} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.4} />
                                        <span className="text-pretty">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-balance">
                                Technologies we use
                            </h2>
                            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                                Production-grade tools chosen per project to balance performance, scalability, and cost.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2.5">
                                {service.technologies.map((t) => (
                                    <span
                                        key={t}
                                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 card-shadow"
                                    >
                                        <Code2 className="w-3.5 h-3.5 text-primary" strokeWidth={2.4} />
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-10 rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 card-shadow">
                                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                                    Serving Delhi NCR & beyond
                                </h3>
                                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                                    Velhu provides {service.name.toLowerCase()} services across Delhi, New Delhi, Noida, Gurgaon, Ghaziabad, Faridabad and the wider Delhi NCR region. We also work remotely with clients across India and worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {related.length > 0 && (
                <section className="py-12 sm:py-16 md:py-20">
                    <div className="max-w-[1700px] mx-auto px-2 sm:px-3 lg:px-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-center text-balance">
                            Related <span className="gradient-text">services</span>
                        </h2>
                        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
                            {related.map((r) => (
                                <Link
                                    key={r.slug}
                                    href={`/services/${r.slug}`}
                                    className="group p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 card-shadow hover:card-shadow-lg hover:-translate-y-1 transition-all duration-300"
                                >
                                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                                        {r.name}
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-600 line-clamp-2">{r.tagline}</p>
                                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                                        Explore
                                        <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <FAQ
                items={faqs}
                title="Got"
                highlight="Questions?"
                description={`Quick answers about our ${service.name.toLowerCase()} services, pricing, and timelines.`}
            />
            <CTA />
        </>
    );
}
