"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Sparkles, Send } from "lucide-react";
import { siteMeta } from "@/cotents";

const STORAGE_KEY = "velhu_lead_modal_dismissed";
const OPEN_DELAY_MS = 8000;

const SERVICE_OPTIONS = [
    "Business Website",
    "E-Commerce Store",
    "Landing Page",
    "Web Portal / SaaS",
    "Redesign / Revamp",
    "Other",
];

const EMPTY_FORM = { name: "", phone: "", service: "", message: "" };

export default function LeadModal() {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState(EMPTY_FORM);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: "", text: "" });

    useEffect(() => {
        if (typeof window === "undefined") return;

        const onTriggerClick = (e) => {
            const trigger = e.target.closest("[data-lead-modal]");
            if (!trigger) return;
            e.preventDefault();
            setOpen(true);
        };
        document.addEventListener("click", onTriggerClick);

        let timer;
        if (sessionStorage.getItem(STORAGE_KEY) !== "1") {
            timer = window.setTimeout(() => setOpen(true), OPEN_DELAY_MS);
        }

        return () => {
            document.removeEventListener("click", onTriggerClick);
            if (timer) window.clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === "Escape") close();
        };
        document.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [open]);

    function close() {
        setOpen(false);
        try {
            sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {}
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const lines = [
            "Hi Velhu! I'd like to discuss a project.",
            "",
            `Name: ${form.name}`,
            `Phone: ${form.phone}`,
        ];
        if (form.service) lines.push(`Service: ${form.service}`);
        if (form.message) lines.push(`Details: ${form.message}`);

        const text = encodeURIComponent(lines.join("\n"));
        const waUrl = `https://wa.me/${siteMeta.phoneRaw.replace(/\D/g, "")}?text=${text}`;

        // Open WhatsApp synchronously inside the click handler so the popup
        // isn't blocked. The email below runs in parallel.
        window.open(waUrl, "_blank", "noopener,noreferrer");

        setLoading(true);
        setStatus({ type: "", text: "" });

        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
        if (!accessKey) {
            setLoading(false);
            setStatus({
                type: "success",
                text: "Opening WhatsApp — we'll reply shortly.",
            });
            setTimeout(close, 1500);
            return;
        }

        const payload = {
            access_key: accessKey,
            subject: `New lead from ${form.name} — ${siteMeta.brand}`,
            from_name: `${siteMeta.brand} Lead Modal`,
            name: form.name,
            phone: form.phone,
            service: form.service,
            message: form.message,
            botcheck: "",
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload),
            }).then((r) => r.json());

            if (res.success) {
                setStatus({
                    type: "success",
                    text: "Thank you! We'll get back to you within 24 hours.",
                });
                setForm(EMPTY_FORM);
                setTimeout(close, 1500);
            } else {
                setStatus({
                    type: "danger",
                    text:
                        res.message ||
                        "WhatsApp opened, but email failed. Please try again.",
                });
            }
        } catch {
            setStatus({
                type: "danger",
                text:
                    "WhatsApp opened, but the email backup failed. Please send it manually.",
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
                    aria-modal="true"
                    role="dialog"
                    aria-labelledby="lead-modal-title"
                >
                    <button
                        type="button"
                        aria-label="Close"
                        onClick={close}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.97 }}
                        transition={{ duration: 0.35, ease: [0.21, 0.6, 0.35, 1] }}
                        className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden"
                    >
                        <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

                        <button
                            type="button"
                            onClick={close}
                            aria-label="Close lead form"
                            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                        >
                            <X className="w-5 h-5" strokeWidth={2.2} />
                        </button>

                        <div className="relative p-6 sm:p-8">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
                                <Sparkles className="w-3 h-3" strokeWidth={2.4} />
                                Free Consultation
                            </span>

                            <h2
                                id="lead-modal-title"
                                className="mt-4 text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 text-balance"
                            >
                                Get a free quote in <span className="gradient-text">24 hours</span>
                            </h2>
                            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                                Tell us what you&apos;re building. We&apos;ll reply on WhatsApp with a tailored plan and pricing — no spam, no obligation.
                            </p>

                            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                                <div>
                                    <label htmlFor="lm-name" className="sr-only">Your name</label>
                                    <input
                                        id="lm-name"
                                        name="name"
                                        type="text"
                                        required
                                        autoComplete="name"
                                        placeholder="Your name"
                                        value={form.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/15 transition-all duration-300 min-h-11"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="lm-phone" className="sr-only">Phone or WhatsApp</label>
                                    <input
                                        id="lm-phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        inputMode="tel"
                                        autoComplete="tel"
                                        pattern="[0-9+\-\s]{7,}"
                                        placeholder="Phone or WhatsApp number"
                                        value={form.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/15 transition-all duration-300 min-h-11"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="lm-service" className="sr-only">What do you need?</label>
                                    <select
                                        id="lm-service"
                                        name="service"
                                        value={form.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base sm:text-sm text-slate-900 focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/15 transition-all duration-300 min-h-11"
                                    >
                                        <option value="">What do you need?</option>
                                        {SERVICE_OPTIONS.map((s) => (
                                            <option key={s} value={s}>{s}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="lm-message" className="sr-only">Project details (optional)</label>
                                    <textarea
                                        id="lm-message"
                                        name="message"
                                        rows={3}
                                        placeholder="Project details (optional)"
                                        value={form.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/15 transition-all duration-300 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-linear-to-r from-primary to-accent text-white font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg min-h-11"
                                >
                                    {loading ? "Sending..." : "Send on WhatsApp"}
                                    {!loading && (
                                        <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.4} />
                                    )}
                                </button>

                                {status.text ? (
                                    <p
                                        role={status.type === "danger" ? "alert" : "status"}
                                        aria-live="polite"
                                        className={`text-[11px] text-center font-medium ${
                                            status.type === "success"
                                                ? "text-emerald-600"
                                                : "text-rose-600"
                                        }`}
                                    >
                                        {status.text}
                                    </p>
                                ) : (
                                    <p className="text-[11px] text-center text-slate-500">
                                        By submitting, you agree to be contacted at the number above.
                                    </p>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
