import {
    ClipboardList,
    CalendarCheck,
    Palette,
    Code2,
    CheckCircle2,
    Rocket,
    Wrench,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { processSteps } from "@/cotents";

const ICONS = {
    clipboard: ClipboardList,
    calendar: CalendarCheck,
    palette: Palette,
    code: Code2,
    check: CheckCircle2,
    rocket: Rocket,
    wrench: Wrench,
};

function StepNode({ step, index, total }) {
    const Icon = ICONS[step.iconKey] || ClipboardList;
    const isLast = index === total - 1;

    return (
        <Reveal delay={index * 0.08}>
            <div className="relative group">
                {/* Vertical connector (mobile only) — sits to the left of the circle, runs to the next step */}
                {!isLast && (
                    <div
                        aria-hidden="true"
                        className="lg:hidden absolute left-7 sm:left-8 top-16 sm:top-18 -bottom-8 w-0.5 bg-linear-to-b from-primary/40 via-primary/20 to-primary/40"
                    />
                )}

                <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0">
                    {/* Circle */}
                    <div className="relative shrink-0 z-10">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300 ring-4 ring-white">
                            <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" strokeWidth={2.2} />
                        </div>
                        <span className="absolute -bottom-1.5 -right-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border-2 border-primary text-primary text-[10px] sm:text-xs font-bold flex items-center justify-center shadow-sm">
                            {step.step}
                        </span>
                    </div>

                    {/* Content */}
                    <div className="lg:mt-5 lg:text-center min-w-0">
                        <h3 className="text-sm sm:text-base lg:text-base font-bold text-slate-900 group-hover:text-primary transition-colors duration-300 text-balance">
                            {step.title}
                        </h3>
                        <p className="mt-1.5 lg:mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed text-pretty line-clamp-4 lg:line-clamp-5">
                            {step.description}
                        </p>
                    </div>
                </div>
            </div>
        </Reveal>
    );
}

export default function Process() {
    const total = processSteps.length;

    return (
        <section
            id="process"
            className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50/60 overflow-hidden"
        >
            <div className="max-w-[1700px] mx-auto px-2 sm:px-3 lg:px-4">
                <SectionHeading
                    badge="Our Process"
                    title="How We"
                    highlight="Work"
                    description={`A proven ${total}-step process that takes your project from idea to launch — and keeps it growing after.`}
                />

                <div className="relative mt-10 sm:mt-12 md:mt-16">
                    {/* Horizontal connector (desktop only) — single line behind the circles */}
                    <div
                        aria-hidden="true"
                        className="hidden lg:block absolute top-10 left-[7%] right-[7%] h-0.5 bg-linear-to-r from-primary/30 via-primary/50 to-primary/30"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-7 gap-y-8 lg:gap-y-0 lg:gap-x-3 xl:gap-x-4">
                        {processSteps.map((step, i) => (
                            <StepNode key={step.step} step={step} index={i} total={total} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
