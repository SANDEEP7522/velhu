"use client";

import { useState } from "react";
import { ContactIcons, budgetOptions, siteMeta } from "@/cotents";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        budget: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! We'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", company: "", budget: "", message: "" });
    };

    return (
        <section id="contact" className="relative py-16 sm:py-20 md:py-24 lg:py-32">
            <div className="max-w-[1700px] mx-auto px-2 sm:px-3 lg:px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
                    <div>
                        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary-light border border-primary/20 mb-4 sm:mb-6">
                            Get In Touch
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">
                            Let&apos;s Build Something{" "}
                            <span className="gradient-text">Amazing Together</span>
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-7 sm:mb-10">
                            Whether you have a project in mind or just want to explore
                            possibilities, we&apos;d love to hear from you. Reach out and
                            let&apos;s start a conversation.
                        </p>

                        <div className="space-y-4">
                            <a href={`mailto:${siteMeta.email}`} className="block group">
                                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white border border-slate-200 hover:border-primary/30 transition-all duration-300 card-shadow hover:card-shadow-lg">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        {ContactIcons.Mail}
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-slate-900">Email Us</div>
                                        <div className="text-sm text-slate-600 group-hover:text-primary transition-colors">{siteMeta.email}</div>
                                    </div>
                                </div>
                            </a>

                            <a href={siteMeta.phoneHref} className="block group">
                                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white border border-slate-200 hover:border-primary/30 transition-all duration-300 card-shadow hover:card-shadow-lg">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        {ContactIcons.Phone}
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-slate-900">Call Us</div>
                                        <div className="text-sm text-slate-600 group-hover:text-primary transition-colors">{siteMeta.phone}</div>
                                    </div>
                                </div>
                            </a>

                            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white border border-slate-200 card-shadow">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    {ContactIcons.Pin}
                                </div>
                                <div className="min-w-0">
                                    <div className="text-sm font-medium text-slate-900">Visit Us</div>
                                    <div className="text-xs sm:text-sm text-slate-600 truncate">{siteMeta.location}</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-8">
                            <div className="rounded-2xl overflow-hidden border border-slate-200 h-40 sm:h-48 md:h-56 relative group card-shadow">
                                <iframe
                                    src="https://www.google.com/maps?q=IT+Hub,+Sector+62,+Noida,+Uttar+Pradesh,+India&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Our Location"
                                    className="grayscale-30 group-hover:grayscale-0 transition-[filter] duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-surface/50 to-transparent pointer-events-none" />
                            </div>
                            <p className="text-xs text-center text-slate-500 mt-3">
                                {siteMeta.locationTag}
                            </p>
                        </div>
                    </div>

                    <div className="p-5 sm:p-6 md:p-8 rounded-2xl bg-white border border-slate-200 card-shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/15 transition-all duration-300 min-h-11"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@company.com"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/15 transition-all duration-300 min-h-11"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your Company"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/15 transition-all duration-300 min-h-11"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                                        Budget Range
                                    </label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base sm:text-sm text-slate-900 focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/15 transition-all duration-300 min-h-11"
                                    >
                                        <option value="" className="bg-white">Select budget</option>
                                        {budgetOptions.map((opt) => (
                                            <option key={opt.value} value={opt.value} className="bg-white">
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                    Project Details
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Tell us about your project, goals, and timeline..."
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/15 transition-all duration-300 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3.5 sm:py-4 rounded-xl bg-linear-to-r from-primary to-accent text-white font-semibold text-sm hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02] min-h-11"
                            >
                                Send Message
                            </button>
                            <p className="text-xs text-center text-slate-500">
                                We&apos;ll get back to you within 24 hours
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
