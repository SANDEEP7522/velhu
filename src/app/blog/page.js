import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import CTA from "@/components/CTA";
import { siteMeta, blogTopics } from "@/cotents";

export const metadata = {
    title: `Blog — Web Development, SEO & App Development Insights | ${siteMeta.brand}`,
    description:
        "Practical guides on website development, SEO, ecommerce, mobile app development, and digital business growth from Velhu's team in Delhi NCR.",
    alternates: { canonical: "/blog" },
    openGraph: {
        title: `Velhu Blog — Web Development, SEO & App Development`,
        description:
            "Practical guides on web development, SEO, ecommerce and mobile apps.",
        url: `${siteMeta.url}/blog`,
        type: "website",
    },
};

function BlogJsonLd() {
    const json = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": `${siteMeta.url}/blog#blog`,
        url: `${siteMeta.url}/blog`,
        name: `${siteMeta.brand} Blog`,
        description:
            "Practical guides on web development, SEO, ecommerce, and mobile apps.",
        publisher: { "@id": `${siteMeta.url}/#organization` },
        blogPost: blogTopics.map((b) => ({
            "@type": "BlogPosting",
            headline: b.title,
            url: `${siteMeta.url}/blog/${b.slug}`,
            description: b.excerpt,
            articleSection: b.category,
            author: { "@id": `${siteMeta.url}/#organization` },
        })),
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

export default function BlogPage() {
    return (
        <>
            <BlogJsonLd />
            <section className="pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16">
                <div className="max-w-[1700px] mx-auto px-2 sm:px-3 lg:px-4 text-center">
                    <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary-light border border-primary/20 mb-4">
                        Blog
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 text-balance">
                        Insights from the <span className="gradient-text">Velhu team</span>
                    </h1>
                    <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed text-pretty">
                        Practical, opinionated guides on website development, SEO, ecommerce, mobile apps, and digital business growth — written by the team building this stuff every day in Delhi NCR.
                    </p>
                </div>
            </section>

            <section className="pb-16 sm:pb-20 md:pb-24">
                <div className="max-w-[1700px] mx-auto px-2 sm:px-3 lg:px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                        {blogTopics.map((b) => (
                            <article
                                key={b.slug}
                                className="group flex flex-col rounded-2xl bg-white border border-slate-200 hover:border-primary/30 card-shadow hover:card-shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                            >
                                <div className="h-32 sm:h-36 bg-linear-to-br from-primary/15 via-accent/10 to-primary/5 flex items-center justify-center">
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                        {b.category}
                                    </span>
                                </div>
                                <div className="p-5 sm:p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 text-[11px] text-slate-500">
                                        <span className="inline-flex items-center gap-1">
                                            <Tag className="w-3 h-3" strokeWidth={2.4} />
                                            {b.category}
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <Clock className="w-3 h-3" strokeWidth={2.4} />
                                            {b.readTime}
                                        </span>
                                    </div>
                                    <h2 className="mt-3 text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors text-pretty leading-snug">
                                        {b.title}
                                    </h2>
                                    <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1">
                                        {b.excerpt}
                                    </p>
                                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                                        Coming soon
                                        <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>

                    <p className="mt-10 text-center text-xs text-slate-500 inline-flex items-center justify-center gap-1.5 w-full">
                        <Calendar className="w-3.5 h-3.5" strokeWidth={2.4} />
                        New posts publish every two weeks. Subscribe via WhatsApp at {siteMeta.phone} for updates.
                    </p>
                </div>
            </section>

            <CTA />
        </>
    );
}
