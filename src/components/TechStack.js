import Image from "next/image";
import { techStack } from "@/cotents";

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

export default function TechStack() {
    return (
        <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden" aria-labelledby="tech-stack-heading">
            <div className="max-w-[1700px] mx-auto px-2 sm:px-3 lg:px-4 mb-8 sm:mb-10 md:mb-12">
                <div className="text-center">
                    <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary-light border border-primary/20 mb-3 sm:mb-4">
                        Tech Stack
                    </span>
                    <h2 id="tech-stack-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                        Technologies We <span className="gradient-text">Master</span>
                    </h2>
                </div>
            </div>

            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-linear-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-linear-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                <div className="flex gap-4 animate-marquee w-max">
                    {techStack.concat(techStack).map((tech, i) => (
                        <TechCard key={`${tech.name}-${i}`} tech={tech} />
                    ))}
                </div>
            </div>
        </section>
    );
}
