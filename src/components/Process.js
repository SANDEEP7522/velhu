import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import Reveal from "./Reveal";
import { processSteps } from "@/cotents";

export default function Process() {
    return (
        <section id="process" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50/60">
            <div className="max-w-[1700px] mx-auto px-2 sm:px-3 lg:px-4">
                <SectionHeading
                    badge="Our Process"
                    title="How We"
                    highlight="Work"
                    description="A proven 4-step process that takes your project from concept to launch with clarity and confidence."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {processSteps.map((item, index) => (
                        <Reveal key={item.step} delay={index * 0.1}>
                            <SpotlightCard className="p-5 sm:p-6 md:p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 card-shadow hover:card-shadow-lg h-full">
                                <div className="text-4xl sm:text-5xl font-bold text-slate-200 mb-3 sm:mb-4 transition-colors duration-300 group-hover:text-primary/30">
                                    {item.step}
                                </div>

                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br from-primary/15 to-accent/15 flex items-center justify-center text-primary mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>

                                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-slate-900 group-hover:text-primary transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    {item.description}
                                </p>

                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px bg-linear-to-r from-primary/40 to-transparent" />
                                )}
                            </SpotlightCard>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
