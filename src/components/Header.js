"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, siteMeta } from "@/cotents";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "glass py-1 shadow-md shadow-slate-900/5"
                : "bg-white/60 backdrop-blur-md border-b border-slate-200/60 py-2"
                }`}
        >
            <div className="max-w-425 mx-auto px-2 sm:px-3 lg:px-4 flex items-center justify-between gap-3">
                <Link
                    href="/"
                    className="flex items-center gap-0 group shrink-0 min-w-0 transition-transform duration-300 hover:scale-[1.03]"
                    aria-label={siteMeta.legalName}
                >
                    <Image
                        src={siteMeta.logoIcon}
                        alt={`${siteMeta.legalName} logo`}
                        width={1536}
                        height={1024}
                        priority
                        sizes="(min-width: 824px) 110px, (min-width: 640px) 96px, 62px"
                        className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto object-contain -mr-2 sm:-mr-2.5"
                    />
                    <span className="flex flex-col leading-tight min-w-0">
                        <span className="text-xl sm:text-2xl md:text-[26px] font-extrabold tracking-tight text-slate-900 leading-none">
                            {siteMeta.brand}
                            <span className="text-primary">.</span>
                        </span>
                        <span className="hidden sm:block text-[10px] md:text-[11px] font-medium text-slate-500 tracking-wide leading-none truncate mt-0.5">
                            {siteMeta.legalName}
                        </span>
                    </span>
                </Link>

                <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
                    {navLinks.map((link, i) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`relative px-2.5 xl:px-3 py-1.5 text-sm font-medium transition-colors duration-300 rounded-md hover:bg-primary/5 ${i === 0
                                ? "text-primary after:absolute after:-bottom-0.5 after:left-2.5 after:right-2.5 after:h-0.5 after:rounded-full after:bg-linear-to-r after:from-primary after:to-accent"
                                : "text-slate-600 hover:text-primary"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <button
                    type="button"
                    data-lead-modal
                    className="hidden lg:inline-flex items-center gap-1.5 px-4 xl:px-5 py-2 text-sm font-semibold rounded-full bg-linear-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 shrink-0"
                >
                    Get Started &rarr;
                </button>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden relative w-7 h-7 flex items-center justify-center rounded-md hover:bg-primary/5 transition-colors shrink-0"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <div className="flex flex-col gap-1 w-4">
                        <span
                            className={`block h-0.5 bg-slate-900 rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
                        />
                        <span
                            className={`block h-0.5 bg-slate-900 rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-0" : ""}`}
                        />
                        <span
                            className={`block h-0.5 bg-slate-900 rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                        />
                    </div>
                </button>
            </div>

            <div
                className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <nav className="glass mx-3 sm:mx-4 mt-3 rounded-2xl p-3 sm:p-4 flex flex-col gap-1 max-h-[75vh] overflow-y-auto" aria-label="Mobile">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-3 text-sm font-medium text-slate-700 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        type="button"
                        data-lead-modal
                        onClick={() => setIsOpen(false)}
                        className="mt-2 px-4 py-3 text-sm font-semibold text-center rounded-full bg-linear-to-r from-primary to-accent text-white"
                    >
                        Get Started
                    </button>
                </nav>
            </div>
        </header>
    );
}
