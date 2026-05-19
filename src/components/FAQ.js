"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function FAQ({
    id = "faq",
    badge = "FAQ",
    title = "Frequently Asked",
    highlight = "Questions",
    description = "Everything you need to know before you reach out. Don't see your question? Get in touch.",
    items = [],
}) {
    const [openIdx, setOpenIdx] = useState(0);

    if (!items.length) return null;

    return (
        <section
            id={id}
            className="relative py-16 sm:py-20 md:py-24 lg:py-32"
            aria-labelledby={`${id}-heading`}
        >
            <div className="max-w-[1700px] mx-auto px-2 sm:px-3 lg:px-4">
                <SectionHeading
                    badge={badge}
                    title={title}
                    highlight={highlight}
                    description={description}
                />

                <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
                    {items.map((item, i) => {
                        const isOpen = openIdx === i;
                        return (
                            <div
                                key={item.q}
                                className={`rounded-2xl bg-white border transition-all duration-300 card-shadow ${
                                    isOpen
                                        ? "border-primary/30 card-shadow-lg"
                                        : "border-slate-200 hover:border-primary/20"
                                }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIdx(isOpen ? -1 : i)}
                                    aria-expanded={isOpen}
                                    aria-controls={`${id}-panel-${i}`}
                                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                                >
                                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-slate-900 text-pretty">
                                        {item.q}
                                    </h3>
                                    <ChevronDown
                                        className={`w-5 h-5 shrink-0 text-primary transition-transform duration-300 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                        strokeWidth={2.4}
                                    />
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={`${id}-panel-${i}`}
                                            role="region"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.21, 0.6, 0.35, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
                                                {item.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export function FaqJsonLd({ items }) {
    if (!items?.length) return null;
    const json = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
            },
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
