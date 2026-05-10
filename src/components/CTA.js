export default function CTA() {
    return (
        <section aria-label="Call to action" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
            <div className="max-w-425 mx-auto px-2 sm:px-3 lg:px-4">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary via-primary-dark to-accent" />
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                    </div>

                    {/* Grid pattern overlay */}
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10 px-5 py-10 sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-6 max-w-3xl mx-auto text-balance">
                            Ready to Transform Your Digital Presence?
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto mb-7 sm:mb-10 leading-relaxed text-pretty">
                            Let&apos;s discuss your project and explore how we can help you
                            achieve your goals. No commitment, just a friendly conversation.
                        </p>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
                            <button
                                type="button"
                                data-lead-modal
                                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-primary-dark font-semibold text-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl min-h-11"
                            >
                                Start a Project
                                <svg
                                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                            </button>
                            <a
                                href="#work"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300 min-h-11"
                            >
                                See Our Work
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
