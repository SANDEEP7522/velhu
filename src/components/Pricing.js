import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { pricingPlans } from "@/cotents";

export default function Pricing() {
    return (
        <section id="pricing" className="relative py-16 sm:py-20 md:py-24 lg:py-32">
            <div className="max-w-[1700px] mx-auto px-2 sm:px-3 lg:px-4">
                <SectionHeading
                    badge="Pricing Plans"
                    title="Transparent"
                    highlight="Pricing"
                    description="Simple, honest pricing with no hidden costs. Choose the plan that fits your needs and budget."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {pricingPlans.map((plan, idx) => (
                        <Reveal key={plan.name} delay={idx * 0.08} className="h-full">
                            <div
                                className={`group relative flex flex-col p-6 sm:p-7 md:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 h-full ${plan.highlighted
                                    ? "bg-linear-to-b from-indigo-50 to-white border-2 border-primary/30 card-shadow-lg lg:scale-[1.02]"
                                    : "bg-white border border-slate-200 hover:border-primary/30 card-shadow hover:card-shadow-lg"
                                    }`}
                            >
                                {plan.badge && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                        <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-linear-to-r from-primary to-accent text-white shadow-lg shadow-primary/25">
                                            {plan.badge}
                                        </span>
                                    </div>
                                )}

                                <h3 className={`text-lg font-semibold mb-2 ${plan.highlighted ? "text-primary" : "text-slate-900"}`}>
                                    {plan.name}
                                </h3>
                                <p className="text-xs text-muted mb-5">{plan.description}</p>

                                <div className="mb-5 sm:mb-6">
                                    <span className="text-3xl sm:text-4xl font-bold wrap-break-word">{plan.price}</span>
                                    <span className="text-xs sm:text-sm text-muted ml-2 whitespace-nowrap">/ {plan.period}</span>
                                </div>

                                <ul className="space-y-3 mb-8 flex-1">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-2.5 text-sm text-muted"
                                        >
                                            <svg
                                                className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlighted ? "text-accent" : "text-primary-light"}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    className={`w-full py-3 sm:py-3.5 rounded-xl text-center text-sm font-semibold transition-all duration-300 hover:scale-[1.02] min-h-11 inline-flex items-center justify-center ${plan.highlighted
                                        ? "bg-linear-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/30"
                                        : "bg-slate-50 text-slate-900 border border-slate-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                                        }`}
                                >
                                    {plan.cta}
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <p className="text-center text-xs text-muted mt-10">
                    All plans include SSL certificate, domain setup assistance, and basic training. No hidden fees.
                </p>
            </div>
        </section>
    );
}
