"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { testimonials, seoFaqs, techStack } from "@/cotents";

function StarRating({ rating }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? "text-amber-400" : "text-slate-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

function ColumnHeading({ badge, title, highlight, description }) {
    return (
        <div className="mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary-light border border-primary/20 mb-3">
                {badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-balance">
                {title} <span className="gradient-text">{highlight}</span>
            </h2>
            {description && (
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
                    {description}
                </p>
            )}
        </div>
    );
}

function TestimonialCard({ t }) {
    return (
        <div className="shrink-0 w-[78vw] sm:w-[44vw] md:w-[36vw] lg:w-[28vw] xl:w-80">
            <div className="relative h-full rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 card-shadow hover:card-shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                <svg
                    className="absolute -top-2 -left-1 w-12 h-12 sm:w-14 sm:h-14 text-primary/10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>
                <div className="relative flex flex-col flex-1">
                    <StarRating rating={t.rating} />
                    <p className="mt-3 text-sm text-slate-700 leading-relaxed text-pretty line-clamp-5 flex-1">
                        &ldquo;{t.content}&rdquo;
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold shadow-md shadow-primary/30 shrink-0">
                            {t.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                            <div className="font-semibold text-sm text-slate-900 truncate">{t.name}</div>
                            <div className="text-[11px] text-slate-500 truncate">{t.role}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TechCard({ tech }) {
    return (
        <div className="group flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white border border-slate-200 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 card-shadow hover:card-shadow-lg shrink-0">
            {tech.imageUrl ? (
                <div className="w-9 h-9 rounded-lg bg-slate-50 p-1.5 flex items-center justify-center shrink-0 border border-slate-100">
                    <Image
                        src={tech.imageUrl}
                        alt=""
                        width={24}
                        height={24}
                        aria-hidden="true"
                        className="w-full h-full object-contain"
                    />
                </div>
            ) : (
                <span className="w-2 h-2 rounded-full bg-linear-to-r from-primary to-accent shrink-0" />
            )}
            <div>
                <div className="text-sm font-semibold text-slate-900 whitespace-nowrap group-hover:text-primary transition-colors duration-300">
                    {tech.name}
                </div>
                <div className="text-xs text-slate-500 whitespace-nowrap">{tech.type}</div>
            </div>
        </div>
    );
}

function FaqItem({ item, isOpen, onToggle, panelId }) {
    return (
        <div
            className={`rounded-2xl bg-white border transition-all duration-300 card-shadow ${
                isOpen
                    ? "border-primary/30 card-shadow-lg"
                    : "border-slate-200 hover:border-primary/20"
            }`}
        >
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 sm:py-4 text-left"
            >
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 text-pretty">
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
                        id={panelId}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.21, 0.6, 0.35, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-slate-600 leading-relaxed text-pretty">
                            {item.a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function TestimonialsFaq({ visibleFaqs = 6 }) {
    const [openIdx, setOpenIdx] = useState(0);
    const fs = seoFaqs.slice(0, visibleFaqs);

    const half = Math.ceil(testimonials.length / 2);
    const firstRow = testimonials.slice(0, half);
    const secondRow = testimonials.slice(half);

    return (
        <section
            id="testimonials"
            aria-labelledby="testimonials-faq-heading"
            className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50/60 overflow-hidden"
        >
            <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <h2 id="testimonials-faq-heading" className="sr-only">
                Testimonials and Frequently Asked Questions
            </h2>

            <div className="relative max-w-[1700px] mx-auto px-2 sm:px-3 lg:px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16">
                    <div className="min-w-0">
                        <ColumnHeading
                            badge="Testimonials"
                            title="What Our Clients"
                            highlight="Say About Us"
                            description="Real feedback from founders, CTOs and marketing leaders we've worked with."
                        />
                        <div className="relative -mx-2 sm:-mx-3 lg:-mx-4 overflow-hidden space-y-4 sm:space-y-5">
                            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 md:w-24 bg-linear-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 md:w-24 bg-linear-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

                            <div
                                className="flex gap-4 sm:gap-5 animate-marquee w-max items-stretch py-2 px-2 sm:px-3 lg:px-4"
                                style={{ animationDuration: "60s" }}
                            >
                                {firstRow.concat(firstRow).map((t, i) => (
                                    <TestimonialCard key={`top-${t.name}-${i}`} t={t} />
                                ))}
                            </div>

                            <div
                                className="flex gap-4 sm:gap-5 animate-marquee w-max items-stretch py-2 px-2 sm:px-3 lg:px-4"
                                style={{
                                    animationDuration: "60s",
                                    animationDirection: "reverse",
                                }}
                            >
                                {secondRow.concat(secondRow).map((t, i) => (
                                    <TestimonialCard key={`bot-${t.name}-${i}`} t={t} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div id="faq">
                        <ColumnHeading
                            badge="FAQ"
                            title="Frequently Asked"
                            highlight="Questions"
                            description="Everything you need to know before you reach out."
                        />
                        <div className="space-y-3 sm:space-y-4">
                            {fs.map((item, i) => (
                                <FaqItem
                                    key={item.q}
                                    item={item}
                                    isOpen={openIdx === i}
                                    onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
                                    panelId={`faq-panel-${i}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    id="tech-stack"
                    aria-labelledby="tech-stack-heading"
                    className="mt-14 sm:mt-16 md:mt-20 lg:mt-24"
                >
                    <div className="text-center mb-8 sm:mb-10">
                        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary-light border border-primary/20 mb-3 sm:mb-4">
                            Tech Stack
                        </span>
                        <h2
                            id="tech-stack-heading"
                            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
                        >
                            Technologies We <span className="gradient-text">Master</span>
                        </h2>
                    </div>

                    <div className="relative -mx-2 sm:-mx-3 lg:-mx-4 overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-linear-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-linear-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
                        <div className="flex gap-4 animate-marquee w-max px-2 sm:px-3 lg:px-4 py-2">
                            {techStack.concat(techStack).map((tech, i) => (
                                <TechCard key={`${tech.name}-${i}`} tech={tech} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
