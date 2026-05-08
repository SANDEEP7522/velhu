import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "@/cotents";

function ProjectCard({ project }) {
    const inner = (
        <>
            <div className={`relative h-44 sm:h-52 md:h-60 ${project.img ? "bg-surface" : `bg-linear-to-br ${project.color}`} p-5 sm:p-6 md:p-8 flex items-end overflow-hidden`}>
                {project.img ? (
                    <>
                        <Image
                            src={project.img}
                            alt={`${project.name} — ${project.category} project screenshot`}
                            fill
                            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                            unoptimized={project.img.startsWith("http")}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                    </>
                ) : (
                    <>
                        <div className="absolute inset-0 opacity-30 transition-transform duration-700 group-hover:scale-110">
                            <div className="absolute top-6 right-6 w-20 h-20 border-2 border-white/30 rounded-xl rotate-12" />
                            <div className="absolute bottom-10 right-20 w-12 h-12 border-2 border-white/20 rounded-lg -rotate-6" />
                            <div className="absolute top-12 left-1/2 w-8 h-8 bg-white/10 rounded-full" />
                        </div>
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                    </>
                )}

                {project.iconUrl && (
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/95 shadow-lg p-2 flex items-center justify-center backdrop-blur-sm z-10">
                        <Image
                            src={project.iconUrl}
                            alt=""
                            width={32}
                            height={32}
                            className="w-full h-full object-contain"
                            aria-hidden="true"
                            referrerPolicy="no-referrer"
                            unoptimized={project.iconUrl.startsWith("http")}
                        />
                    </div>
                )}

                {project.freelance && (
                    <span className="absolute top-4 right-4 sm:top-6 sm:right-6 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-white/90 text-primary-dark shadow z-10">
                        Freelance
                    </span>
                )}

                {project.link && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-primary-dark text-sm font-bold shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                            Open Project
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </div>
                )}

                <div className="relative z-10 max-w-full">
                    {project.category && (
                        <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/20 text-white text-[10px] sm:text-xs font-medium backdrop-blur-sm mb-2 sm:mb-3">
                            {project.category}
                        </span>
                    )}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight drop-shadow-lg text-balance">
                        {project.name}
                    </h3>
                </div>
            </div>

            <div className="p-5 sm:p-6 bg-white flex-1 flex flex-col">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                    {project.techStack?.map((t) => (
                        <span
                            key={t}
                            className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200"
                        >
                            {t}
                        </span>
                    ))}
                </div>
                <div className="mt-auto">
                    {project.link ? (
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                            View Live
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            Private project
                        </span>
                    )}
                </div>
            </div>
        </>
    );

    const sharedClass =
        "group relative block rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 card-shadow hover:card-shadow-lg h-full flex flex-col";

    if (project.link) {
        return (
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.name} in a new tab`}
                className={`${sharedClass} cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
            >
                {inner}
            </a>
        );
    }

    return <div className={sharedClass}>{inner}</div>;
}

export default function Portfolio() {
    return (
        <section id="work" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50/60">
            <div className="max-w-[1700px] mx-auto px-2 sm:px-3 lg:px-4">
                <SectionHeading
                    badge="Our Portfolio"
                    title="Projects We're"
                    highlight="Proud Of"
                    description="A showcase of our recent work across industries — each project crafted with precision and purpose."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {projects.map((project, idx) => (
                        <Reveal key={project.slug} delay={idx * 0.06}>
                            <ProjectCard project={project} />
                        </Reveal>
                    ))}
                </div>

                <div className="text-center mt-8 sm:mt-10 md:mt-12">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 text-sm font-semibold rounded-full border border-slate-200 bg-white text-slate-700 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 min-h-11 card-shadow"
                    >
                        Discuss Your Project
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
