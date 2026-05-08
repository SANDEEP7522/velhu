"use client";

import { MessageCircle } from "lucide-react";
import { siteMeta } from "@/cotents";

export default function WhatsAppButton({
  phone = siteMeta.phoneRaw,
  message = siteMeta.whatsappMessage,
  position = "bottom-right",
  label = "Chat on WhatsApp",
}) {
  const cleanPhone = phone.replace(/[^\d]/g, "");
  const href = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

  const positionClass =
    position === "bottom-left"
      ? "left-4 sm:left-6"
      : "right-4 sm:right-6";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`fixed bottom-4 sm:bottom-6 ${positionClass} z-50 group inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 hover:scale-110 hover:shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40`}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" aria-hidden="true" />
      <MessageCircle className="relative w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.2} aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </a>
  );
}
