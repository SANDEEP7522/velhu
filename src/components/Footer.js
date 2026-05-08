import Image from "next/image";
import Link from "next/link";
import { footerLinks, socials, siteMeta } from "@/cotents";

export default function Footer() {
  return (
    <footer className="relative bg-surface border-t border-border">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-425 mx-auto px-2 sm:px-3 lg:px-4">
        <div className="py-10 sm:py-12 md:py-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12">
          <div className="col-span-2 lg:col-span-2 space-y-4 sm:space-y-5">
            <span className="text-[11px] font-medium text-muted tracking-wide">
              {siteMeta.legalName}
            </span>
            <p className="text-muted text-sm leading-relaxed max-w-sm">
              We build digital experiences that drive growth. From stunning
              websites to powerful web applications, we turn your vision into
              reality.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-xl bg-surface-lighter/50 flex items-center justify-center text-muted hover:text-white hover:bg-primary/20 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-primary-light transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-5 sm:py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center">
          <p className="text-[11px] sm:text-xs text-muted">
            © {new Date().getFullYear()} {siteMeta.legalName}. All rights
            reserved.
          </p>
          <p className="text-[11px] sm:text-xs text-muted">
            Crafted with <span className="text-rose-400">♥</span> for the modern
            web
          </p>
        </div>
      </div>
    </footer>
  );
}
