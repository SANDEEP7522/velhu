import Reveal from "./Reveal";
import { values, aboutStats, siteMeta } from "@/cotents";

export default function About() {
    return (
        <section id="about" className="relative py-16 sm:py-20 md:py-24 lg:py-32">
            <div className="max-w-[1700px] mx-auto px-2 sm:px-3 lg:px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
                    <Reveal y={32}>
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary-light border border-primary/20 mb-6">
                                About {siteMeta.brand}
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">
                                Your Partner for{" "}
                                <span className="gradient-text">Digital Growth</span>
                            </h2>
                            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                                <strong className="text-slate-900">{siteMeta.brand} Web Solutions</strong> is a
                                modern web development agency dedicated to helping businesses,
                                startups, and institutions build their digital presence. We
                                specialize in creating fast, responsive, and beautifully designed
                                websites that convert visitors into customers.
                            </p>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                                From simple landing pages to complex e-commerce platforms and
                                school portals, our team of skilled designers and developers
                                delivers tailored solutions that align with your goals and
                                budget. We believe every business deserves a professional
                                online presence — and we make it happen.
                            </p>

                            <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:gap-8">
                                {aboutStats.map((stat) => (
                                    <div key={stat.label}>
                                        <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                                        <div className="text-[11px] sm:text-sm text-slate-600 mt-1 leading-tight">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <div className="space-y-4 sm:space-y-5">
                        {values.map((value, idx) => (
                            <Reveal key={value.title} delay={idx * 0.1} y={20}>
                                <div className="group flex gap-3 sm:gap-5 p-4 sm:p-5 md:p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 transition-all duration-500 card-shadow hover:card-shadow-lg">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br from-primary/15 to-accent/15 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        {value.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1 text-slate-900 group-hover:text-primary transition-colors duration-300">
                                            {value.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
