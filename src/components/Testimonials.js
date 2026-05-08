import SectionHeading from "./SectionHeading";
import { testimonials } from "@/cotents";

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

function TestimonialCard({ t }) {
    return (
        <div className="shrink-0 w-[82vw] sm:w-[44vw] md:w-[32vw] lg:w-[23vw] xl:w-95">
            <div className="relative h-full rounded-2xl sm:rounded-3xl bg-white border border-slate-200 p-5 sm:p-6 md:p-7 card-shadow hover:card-shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                <svg
                    className="absolute -top-2 -left-1 sm:-top-3 sm:-left-2 w-14 h-14 sm:w-20 sm:h-20 text-primary/10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>

                <div className="relative flex flex-col flex-1">
                    <StarRating rating={t.rating} />
                    <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed text-pretty flex-1 line-clamp-6">
                        &ldquo;{t.content}&rdquo;
                    </p>
                    <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-white font-bold shadow-md shadow-primary/30 shrink-0">
                            {t.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                            <div className="font-semibold text-sm text-slate-900 truncate">{t.name}</div>
                            <div className="text-[11px] sm:text-xs text-slate-500 truncate">{t.role}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50/60 overflow-hidden"
        >
            <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-[1700px] mx-auto px-2 sm:px-3 lg:px-4 mb-8 sm:mb-10 md:mb-12">
                <SectionHeading
                    badge="Testimonials"
                    title="What Our Clients"
                    highlight="Say About Us"
                    description="Don't just take our word for it — hear from the founders, CTOs, and marketing leaders we've worked with."
                />
            </div>

            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-linear-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-linear-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

                <div
                    className="flex gap-4 sm:gap-5 md:gap-6 animate-marquee w-max items-stretch py-3"
                    style={{ animationDuration: "60s" }}
                >
                    {testimonials.concat(testimonials).map((t, i) => (
                        <TestimonialCard key={`${t.name}-${i}`} t={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}
