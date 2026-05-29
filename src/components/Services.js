import Image from "next/image";
import {
    Rocket,
    Tag,
    Palette,
    Smartphone,
    Search,
    Headphones,
} from "lucide-react";
import Reveal from "./Reveal";
import { services, serviceFeatures } from "@/cotents";

const SERVICE_IMAGES = {
    code: "/projectImg/websiteDevelopment.png",
    cart: "/projectImg/E-commerceDevelopment.jpg",
    search: "/projectImg/SEOptimization.jpg",
    palette: "/projectImg/UiUxDesign.png",
    layers: "/projectImg/webappdevelopment.jpg",
};

const FEATURE_ICONS = {
    rocket: Rocket,
    tag: Tag,
    palette: Palette,
    smartphone: Smartphone,
    search: Search,
    headphones: Headphones,
};

function ServiceCard({ service, idx }) {
    const img = SERVICE_IMAGES[service.iconKey];
    return (
        <Reveal delay={idx * 0.06} className="h-full">
            <div className="group relative h-full flex flex-col rounded-2xl bg-white border border-slate-200 card-shadow hover:card-shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                {img ? (
                    <div className={`relative w-full aspect-16/10 ${service.bg} overflow-hidden`}>
                        <Image
                            src={img}
                            alt={`${service.title} — illustration`}
                            fill
                            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                ) : null}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {service.description}
                    </p>
                </div>
            </div>
        </Reveal>
    );
}

function FeatureItem({ feature, idx }) {
    const Icon = FEATURE_ICONS[feature.iconKey] || Rocket;
    return (
        <Reveal delay={idx * 0.05}>
            <div className="flex items-center gap-3 px-2 py-2">
                <div
                    className={`w-10 h-10 rounded-lg bg-white ${feature.fg} flex items-center justify-center shrink-0 card-shadow`}
                >
                    <Icon className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <div className="leading-tight min-w-0">
                    <div className={`text-sm font-bold ${feature.fg} truncate`}>
                        {feature.title}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">
                        {feature.description}
                    </div>
                </div>
            </div>
        </Reveal>
    );
}

export default function Services() {
    return (
        <section
            id="services"
            className="relative py-12 sm:py-16 md:py-20 bg-white"
        >
            <div className="max-w-425 mx-auto px-2 sm:px-3 lg:px-4">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
                    <span className="block text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-primary mb-3">
                        Our Services
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 text-balance">
                        Complete Web Solutions for Your Business
                    </h2>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
                        We offer end-to-end web solutions to help your business grow in the digital world.
                    </p>
                </div>

                {/* 5 service cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
                    {services.map((service, i) => (
                        <ServiceCard key={service.title} service={service} idx={i} />
                    ))}
                </div>

                {/* Features strip */}
                <div className="mt-8 sm:mt-10 rounded-2xl bg-linear-to-r from-indigo-50 via-blue-50 to-cyan-50 border border-slate-200/70 p-4 sm:p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                        {serviceFeatures.map((f, i) => (
                            <FeatureItem key={f.title} feature={f} idx={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
