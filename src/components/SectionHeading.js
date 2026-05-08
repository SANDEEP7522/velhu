export default function SectionHeading({ badge, title, highlight, description }) {
    return (
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 px-2">
            {badge && (
                <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary-light border border-primary/20 mb-3 sm:mb-4">
                    {badge}
                </span>
            )}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 text-balance">
                {title}{" "}
                {highlight && <span className="gradient-text">{highlight}</span>}
            </h2>
            {description && (
                <p className="text-muted text-sm sm:text-base md:text-lg leading-relaxed text-pretty">{description}</p>
            )}
        </div>
    );
}
