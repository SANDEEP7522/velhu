"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
    motion,
    useInView,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import {
    ArrowRight,
    Phone,
    Smile,
    Users,
    Star,
    Award,
    Sparkles,
    Zap,
    Shield,
    Search,
    CheckCircle2,
    PlayCircle,
} from "lucide-react";
import {
    heroEyebrow,
    heroHeadline,
    heroSubcopy,
    heroStats,
    siteMeta,
} from "@/cotents";

const STAT_ICON = {
    smile: Smile,
    users: Users,
    award: Award,
    star: Star,
};

const STAT_TINTS = [
    "bg-amber-50 text-amber-600",
    "bg-blue-50 text-blue-600",
    "bg-emerald-50 text-emerald-600",
    "bg-orange-50 text-orange-600",
];

function CountUp({ to, suffix = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.4 });
    const mv = useMotionValue(0);
    const spring = useSpring(mv, { stiffness: 70, damping: 18 });
    const display = useTransform(spring, (v) =>
        Math.round(v).toLocaleString()
    );

    useEffect(() => {
        if (inView) mv.set(to);
    }, [inView, mv, to]);

    return (
        <span ref={ref} className="inline-flex items-baseline">
            <motion.span>{display}</motion.span>
            <span>{suffix}</span>
        </span>
    );
}

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section
            id="home"
            className="relative pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 overflow-hidden"
        >
            <div className="noise" />
            {/* Multi-layered ambient backdrop */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-200/40 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.55, 0.4] }}
                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-200/40 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.4, 0.25] }}
                    transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-0 right-1/4 w-80 h-80 bg-fuchsia-200/30 rounded-full blur-3xl"
                />
                {/* Subtle global grid */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                        maskImage:
                            "radial-gradient(ellipse 70% 50% at 50% 30%, #000 30%, transparent 75%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 70% 50% at 50% 30%, #000 30%, transparent 75%)",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-425 mx-auto px-2 sm:px-3 lg:px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                    {/* LEFT — Copy + CTAs + stats */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            animate={mounted ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase bg-white/80 backdrop-blur-sm text-primary border border-indigo-200 card-shadow"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <Sparkles className="w-3 h-3" strokeWidth={2.4} />
                            {heroEyebrow}
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={mounted ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 text-balance"
                        >
                            {heroHeadline.before}{" "}
                            <span className="gradient-text">{heroHeadline.highlight}</span>
                            <br className="hidden sm:block" />{" "}
                            {heroHeadline.after}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={mounted ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-600 max-w-xl leading-relaxed text-pretty"
                        >
                            {heroSubcopy}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={mounted ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4"
                        >
                            <a
                                href="#contact"
                                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-linear-to-r from-primary to-blue-600 text-white text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 min-h-11"
                            >
                                Get Free Quote
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.4} />
                            </a>
                            <button
                                type="button"
                                data-lead-modal
                                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white text-slate-900 text-sm font-semibold border border-slate-200 card-shadow hover:border-primary/40 hover:text-primary hover:-translate-y-0.5 transition-all duration-300 min-h-11"
                            >
                                <Phone className="w-4 h-4 text-primary" strokeWidth={2.4} />
                                Book Consultation
                            </button>
                            <a
                                href="#work"
                                className="group inline-flex items-center justify-center gap-1.5 px-2 py-3.5 text-sm font-semibold text-slate-600 hover:text-primary transition-colors duration-300"
                            >
                                <PlayCircle className="w-4 h-4 group-hover:scale-110 transition-transform" strokeWidth={2} />
                                Watch Demo
                            </a>
                        </motion.div>

                        {/* Trust signals strip */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={mounted ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.55 }}
                            className="mt-6 sm:mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500"
                        >
                            <div className="flex items-center gap-1.5">
                                <div className="flex -space-x-2">
                                    {["from-indigo-400 to-blue-500", "from-emerald-400 to-teal-500", "from-rose-400 to-pink-500", "from-amber-400 to-orange-500"].map((g, i) => (
                                        <div
                                            key={i}
                                            className={`w-6 h-6 rounded-full bg-linear-to-br ${g} border-2 border-white text-white text-[9px] font-bold flex items-center justify-center shadow-sm`}
                                        >
                                            {["S", "P", "M", "A"][i]}
                                        </div>
                                    ))}
                                </div>
                                <span className="font-medium text-slate-700 ml-1">50+ Happy Clients</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="flex items-center gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" strokeWidth={0} />
                                    ))}
                                </div>
                                <span className="font-semibold text-slate-700">5.0</span>
                                <span className="text-slate-400">on Google</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" strokeWidth={2.5} />
                                <span className="font-medium text-slate-700">No setup fee</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={mounted ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 max-w-xl"
                        >
                            {heroStats.map((stat, i) => {
                                const SIcon = STAT_ICON[stat.iconKey] || Smile;
                                return (
                                    <motion.div
                                        key={stat.label}
                                        whileHover={{ y: -3 }}
                                        className="flex items-center gap-2.5 sm:gap-3"
                                    >
                                        <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full ${STAT_TINTS[i]} flex items-center justify-center shrink-0`}>
                                            <SIcon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.2} />
                                        </div>
                                        <div className="leading-tight min-w-0">
                                            <div className="text-base sm:text-xl font-bold text-slate-900">
                                                <CountUp to={stat.value} suffix={stat.suffix} />
                                            </div>
                                            <div className="text-[10px] sm:text-xs text-slate-500 truncate">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* RIGHT — Hero image with orbital chips, halo, and sparkles */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={mounted ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.6, 0.35, 1] }}
                        className="relative w-full max-w-2xl mx-auto lg:max-w-none"
                    >
                        {/* === Multi-layer halo behind image === */}
                        <motion.div
                            animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.85, 0.6] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square rounded-full bg-linear-to-br from-indigo-200/50 via-sky-200/40 to-cyan-100/30 blur-3xl -z-10"
                        />
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] aspect-square rounded-full border-2 border-dashed border-indigo-200/50 -z-10"
                        />
                        <motion.div
                            animate={{ rotate: [360, 0] }}
                            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full border border-cyan-200/40 -z-10"
                        />

                        {/* Dot grid accent (drift) */}
                        <motion.div
                            animate={{ y: [0, -6, 0], opacity: [0.45, 0.65, 0.45] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-2 -right-2 w-32 h-24 -z-10"
                            style={{
                                backgroundImage:
                                    "radial-gradient(currentColor 1px, transparent 1px)",
                                backgroundSize: "12px 12px",
                                color: "#94a3b8",
                            }}
                        />

                        {/* === Sparkle particles === */}
                        {[
                            { top: "8%", left: "8%", size: "w-3 h-3", color: "text-amber-400", dur: 3 },
                            { top: "18%", right: "4%", size: "w-2.5 h-2.5", color: "text-cyan-400", dur: 4 },
                            { bottom: "20%", left: "2%", size: "w-3 h-3", color: "text-fuchsia-400", dur: 3.5 },
                            { bottom: "8%", right: "12%", size: "w-2 h-2", color: "text-indigo-400", dur: 5 },
                            { top: "50%", left: "-3%", size: "w-2 h-2", color: "text-emerald-400", dur: 4.5 },
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    scale: [0.6, 1.2, 0.6],
                                    opacity: [0.3, 1, 0.3],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: s.dur,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.4,
                                }}
                                className="absolute z-10"
                                style={{
                                    top: s.top,
                                    bottom: s.bottom,
                                    left: s.left,
                                    right: s.right,
                                }}
                            >
                                <Sparkles className={`${s.size} ${s.color}`} strokeWidth={2.5} />
                            </motion.div>
                        ))}

                        {/* === Floating hero image (laptop) === */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.02 }}
                            className="relative w-full"
                        >
                            <Image
                                src={siteMeta.heroImage}
                                alt="Velhu website shown on a laptop — modern, fast, SEO-friendly home screen"
                                width={1600}
                                height={1100}
                                priority
                                sizes="(min-width: 1024px) 600px, 100vw"
                                className="w-full h-auto object-contain drop-shadow-2xl"
                            />

                            {/* === Floating mobile mockup overlay === */}
                            <motion.div
                                animate={{ y: [0, -8, 0], rotate: [0, -1.5, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                                whileHover={{ scale: 1.05 }}
                                className="absolute -bottom-4 -right-2 sm:bottom-2 sm:-right-4 w-[34%] sm:w-[32%] z-10"
                            >
                                <Image
                                    src={siteMeta.heroMobileImage}
                                    alt="Velhu website shown on a mobile device — responsive, mobile-friendly home screen"
                                    width={800}
                                    height={1200}
                                    priority
                                    sizes="(min-width: 1024px) 200px, 30vw"
                                    className="w-full h-auto object-contain drop-shadow-2xl"
                                />
                            </motion.div>
                        </motion.div>

                        {/* === Orbital chip badges around image === */}
                        {/* Top-left: SEO Ready */}
                        <motion.div
                            initial={{ opacity: 0, x: -20, y: -20 }}
                            animate={mounted ? { opacity: 1, x: 0, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="absolute top-4 -left-2 sm:left-0 z-20"
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                whileHover={{ scale: 1.08 }}
                                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-200 card-shadow-lg"
                            >
                                <div className="w-7 h-7 rounded-full bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shrink-0">
                                    <Search className="w-3.5 h-3.5" strokeWidth={2.5} />
                                </div>
                                <div className="leading-tight pr-1">
                                    <div className="text-[10px] font-bold text-slate-900">SEO Ready</div>
                                    <div className="text-[9px] text-slate-500">Rank higher</div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Mid-left: Lightning Fast */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={mounted ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.85 }}
                            className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-4 z-20 hidden sm:block"
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0], rotate: [0, -2, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                whileHover={{ scale: 1.08 }}
                                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-200 card-shadow-lg"
                            >
                                <div className="w-7 h-7 rounded-full bg-linear-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white shrink-0">
                                    <Zap className="w-3.5 h-3.5" strokeWidth={2.5} fill="currentColor" />
                                </div>
                                <div className="leading-tight pr-1">
                                    <div className="text-[10px] font-bold text-slate-900">Lightning Fast</div>
                                    <div className="text-[9px] text-slate-500">95+ PageSpeed</div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Bottom-left: Secure */}
                        <motion.div
                            initial={{ opacity: 0, x: -20, y: 20 }}
                            animate={mounted ? { opacity: 1, x: 0, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            className="absolute bottom-6 -left-2 sm:left-2 z-20"
                        >
                            <motion.div
                                animate={{ y: [0, -7, 0] }}
                                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                whileHover={{ scale: 1.08 }}
                                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-200 card-shadow-lg"
                            >
                                <div className="w-7 h-7 rounded-full bg-linear-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white shrink-0">
                                    <Shield className="w-3.5 h-3.5" strokeWidth={2.5} />
                                </div>
                                <div className="leading-tight pr-1">
                                    <div className="text-[10px] font-bold text-slate-900">100% Secure</div>
                                    <div className="text-[9px] text-slate-500">SSL + WAF</div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Top-right corner: Live status */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={mounted ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="absolute top-1 right-2 sm:top-3 sm:right-4 z-20"
                        >
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 card-shadow"
                            >
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                                </span>
                                <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-wider">
                                    Available
                                </span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
