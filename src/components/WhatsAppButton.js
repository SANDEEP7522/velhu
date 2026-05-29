"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { siteMeta } from "@/cotents";

export default function WhatsAppButton({
  phone = siteMeta.phoneRaw,
  message = siteMeta.whatsappMessage,
  position = "bottom-right",
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const cleanPhone = phone.replace(/[^\d]/g, "");
  const waHref = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  const telHref = siteMeta.phoneHref || `tel:+${cleanPhone}`;

  const positionClass =
    position === "bottom-left" ? "left-4 sm:left-6" : "right-4 sm:right-6";
  const alignClass = position === "bottom-left" ? "items-start" : "items-end";

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const options = [
    {
      label: "Chat on WhatsApp",
      href: waHref,
      external: true,
      Icon: MessageCircle,
      tint: "bg-[#25D366] shadow-[#25D366]/40",
    },
    {
      label: `Call ${siteMeta.phone}`,
      href: telHref,
      external: false,
      Icon: Phone,
      tint: "bg-primary shadow-primary/40",
    },
  ];

  return (
    <div
      ref={ref}
      className={`fixed bottom-4 sm:bottom-6 ${positionClass} z-50 flex flex-col ${alignClass} gap-3`}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`flex flex-col ${alignClass} gap-3`}
          >
            {options.map((opt, i) => {
              const { Icon } = opt;
              return (
                <motion.a
                  key={opt.label}
                  href={opt.href}
                  {...(opt.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={opt.label}
                  title={opt.label}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.8 }}
                  transition={{ duration: 0.2, delay: i * 0.05, ease: [0.21, 0.6, 0.35, 1] }}
                  className="group inline-flex items-center gap-3"
                >
                  {position !== "bottom-left" && (
                    <span className="order-1 px-3 py-1.5 rounded-full bg-white text-slate-800 text-xs font-semibold shadow-lg whitespace-nowrap">
                      {opt.label}
                    </span>
                  )}
                  <span
                    className={`order-2 inline-flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full text-white shadow-xl ${opt.tint} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
                  </span>
                  {position === "bottom-left" && (
                    <span className="px-3 py-1.5 rounded-full bg-white text-slate-800 text-xs font-semibold shadow-lg whitespace-nowrap">
                      {opt.label}
                    </span>
                  )}
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
        className="relative self-end group inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 hover:scale-110 hover:shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        {!open && (
          <span
            className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
            aria-hidden="true"
          />
        )}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "open"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            {open ? (
              <X className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.4} />
            ) : (
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.2} />
            )}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}
