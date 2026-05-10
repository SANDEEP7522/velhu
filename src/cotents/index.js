// =====================================================================
// Centralized content for the Velhu Web Solutions site.
// All sections (Hero, Services, Pricing, Portfolio, Process, About,
// TechStack, Testimonials, Footer, Header) read their data from here.
// =====================================================================

// ---------- Reusable SVG icons (rendered as JSX) ----------------------

const Icon = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props} />
);

export const ServiceIcons = {
  BusinessWebsite: (
    <Icon className="w-6 h-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </Icon>
  ),
  ECommerce: (
    <Icon className="w-6 h-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </Icon>
  ),
  LandingPage: (
    <Icon className="w-6 h-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      />
    </Icon>
  ),
  Portal: (
    <Icon className="w-6 h-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      />
    </Icon>
  ),
};

export const ValueIcons = {
  Bolt: (
    <Icon className="w-6 h-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </Icon>
  ),
  Money: (
    <Icon className="w-6 h-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </Icon>
  ),
  Shield: (
    <Icon className="w-6 h-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </Icon>
  ),
};

export const ProcessIcons = {
  Discovery: (
    <Icon className="w-6 h-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </Icon>
  ),
  Design: (
    <Icon className="w-6 h-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
      />
    </Icon>
  ),
  Code: (
    <Icon className="w-6 h-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </Icon>
  ),
  Launch: (
    <Icon className="w-6 h-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      />
    </Icon>
  ),
};

export const ContactIcons = {
  Mail: (
    <Icon className="w-5 h-5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </Icon>
  ),
  Phone: (
    <Icon className="w-5 h-5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </Icon>
  ),
  Pin: (
    <Icon className="w-5 h-5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </Icon>
  ),
  External: (
    <Icon className="w-4 h-4">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </Icon>
  ),
};

export const SocialIcons = {
  Twitter: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  LinkedIn: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Instagram: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
    </svg>
  ),
};

// ---------- Site metadata --------------------------------------------

export const siteMeta = {
  brand: "Velhu",
  legalName: "Velhu Global Tech Solutions Private Limited",
  url: "https://velhu.dev",
  email: "hello@velhu.dev",
  phone: "+91 75228 14847",
  phoneRaw: "+917522814847",
  phoneHref: "tel:+917522814847",
  whatsappHref: "https://wa.me/917522814847",
  whatsappMessage: "Hi Velhu! I'd like to discuss a project.",
  location: "IT Hub, Sector 62, Noida, Uttar Pradesh, India",
  locationTag:
    "IT Hub, Sector 62, Noida, Uttar Pradesh, India — Serving clients worldwide",
  address: {
    street: "IT Hub, Sector 62",
    city: "Noida",
    region: "Uttar Pradesh",
    country: "IN",
    postalCode: "201309",
  },
  description:
    "Velhu Global Tech Solutions builds high-performance, SEO-optimized websites, e-commerce stores, landing pages, and custom web portals at affordable prices with fast turnaround.",
  foundingDate: "2020-01-01",
  twitter: "@sahuji7522",
  logoIcon: "/projectImg/website_ligo.png",
  heroImage: "/projectImg/laptop-v2.png",
  heroMobileImage: "/projectImg/mobile-v2.png",
};

// ---------- Hero ------------------------------------------------------

export const heroBadge = "Welcome to Velhu Web Solutions";
export const heroEyebrow = "WELCOME TO VELHU WEB SOLUTIONS";
export const heroHeadline = {
  before: "Build",
  highlight: "Premium Websites",
  after: "That Grow Your Business",
};
export const heroSubcopy =
  "We design and develop modern, fast, and SEO-friendly websites that help startups, businesses, and brands stand out online.";

export const heroStats = [
  { value: 150, suffix: "+", label: "Projects Delivered", iconKey: "smile" },
  { value: 50, suffix: "+", label: "Happy Clients", iconKey: "users" },
  { value: 99, suffix: "%", label: "Client Satisfaction", iconKey: "star" },
];

// Floating stat cards over the hero device mockup
export const heroFloatCards = [
  {
    label: "Website Traffic",
    value: "↑ 48.5%",
    accent: "from-indigo-500 to-blue-500",
    pos: "top-right",
  },
  {
    label: "Page Speed",
    value: "95/100",
    accent: "from-emerald-500 to-teal-500",
    pos: "bottom-left",
  },
  {
    label: "Avg. Session Duration",
    value: "3m 42s",
    accent: "from-violet-500 to-fuchsia-500",
    pos: "bottom-right",
  },
];

// ---------- Header navigation ----------------------------------------

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

// ---------- Services --------------------------------------------------

export const services = [
  {
    iconKey: "code",
    title: "Website Development",
    description:
      "Modern, responsive and fast websites built with latest technologies.",
    tint: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50",
    fg: "text-indigo-600",
  },
  {
    iconKey: "cart",
    title: "E-commerce Development",
    description:
      "Powerful online stores that increase sales and grow your business.",
    tint: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    fg: "text-emerald-600",
  },
  {
    iconKey: "search",
    title: "SEO Optimization",
    description:
      "Rank higher on Google and get more traffic with proven SEO strategies.",
    tint: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    fg: "text-amber-600",
  },
  {
    iconKey: "palette",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive designs that provide the best user experience.",
    tint: "from-rose-500 to-pink-500",
    bg: "bg-rose-50",
    fg: "text-rose-600",
  },
  {
    iconKey: "layers",
    title: "Web App Development",
    description:
      "Scalable and secure web applications tailored to your business needs.",
    tint: "from-sky-500 to-cyan-500",
    bg: "bg-sky-50",
    fg: "text-sky-600",
  },
];

export const serviceFeatures = [
  {
    iconKey: "rocket",
    title: "Fast Delivery",
    description: "On-time project delivery",
    fg: "text-indigo-600",
  },
  {
    iconKey: "tag",
    title: "Affordable Pricing",
    description: "Best quality at low cost",
    fg: "text-blue-600",
  },
  {
    iconKey: "palette",
    title: "Modern Design",
    description: "Clean & professional design",
    fg: "text-violet-600",
  },
  {
    iconKey: "smartphone",
    title: "Mobile Responsive",
    description: "Perfect on all devices",
    fg: "text-cyan-600",
  },
  {
    iconKey: "search",
    title: "SEO Ready",
    description: "Optimized for search engines",
    fg: "text-emerald-600",
  },
  {
    iconKey: "headphones",
    title: "24/7 Support",
    description: "We're always here to help",
    fg: "text-rose-600",
  },
];

// ---------- Pricing plans --------------------------------------------

export const pricingPlans = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "one-time",
    description: "Perfect for individuals and small businesses getting online.",
    features: [
      "Single Page Website",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Contact Form",
      "Social Media Links",
      "1 Month Free Support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "₹9,999",
    period: "one-time",
    description:
      "Ideal for growing businesses that need a strong online presence.",
    badge: "Best Value",
    features: [
      "Up to 7 Pages",
      "Custom UI/UX Design",
      "Advanced SEO Optimization",
      "Blog Integration",
      "Google Analytics Setup",
      "WhatsApp Chat Widget",
      "3 Months Free Support",
      "Performance Optimization",
    ],
    highlighted: true,
    cta: "Get Started",
  },
  {
    name: "Business",
    price: "₹14,999",
    period: "one-time",
    description: "For established businesses needing advanced functionality.",
    features: [
      "Up to 15 Pages",
      "E-Commerce Ready",
      "Payment Gateway Integration",
      "Admin Dashboard",
      "CMS Integration",
      "Email Marketing Setup",
      "6 Months Free Support",
      "Priority Bug Fixes",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "let's talk",
    description: "Tailored solutions for large-scale projects and portals.",
    features: [
      "Unlimited Pages",
      "Custom Web Application",
      "School / News Portal",
      "API & Third-Party Integrations",
      "Dedicated Project Manager",
      "12 Months Support & Maintenance",
      "SLA Guaranteed Uptime",
      "Source Code Ownership",
    ],
    highlighted: false,
    cta: "Contact Us",
  },
];

// ---------- Process steps --------------------------------------------

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We start by understanding your business, audience, and goals. Through in-depth research and analysis, we craft a tailored strategy that sets the foundation for success.",
    icon: ProcessIcons.Discovery,
  },
  {
    step: "02",
    title: "Design & Prototype",
    description:
      "Our designers create wireframes and high-fidelity prototypes that bring your vision to life. We iterate based on your feedback until the design is perfect.",
    icon: ProcessIcons.Design,
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Our engineers build your product using modern technologies, writing clean, scalable code. Rigorous testing ensures everything works flawlessly.",
    icon: ProcessIcons.Code,
  },
  {
    step: "04",
    title: "Launch & Optimize",
    description:
      "We deploy your project with optimized performance and monitor key metrics. Continuous optimization ensures long-term growth and success.",
    icon: ProcessIcons.Launch,
  },
];

// ---------- About: values + mini stats -------------------------------

export const values = [
  {
    icon: ValueIcons.Bolt,
    title: "Fast Turnaround",
    description:
      "We deliver projects on time, every time. Our streamlined process ensures rapid development without compromising quality.",
  },
  {
    icon: ValueIcons.Money,
    title: "Affordable Pricing",
    description:
      "Premium quality doesn't have to break the bank. We offer competitive pricing plans designed for every budget.",
  },
  {
    icon: ValueIcons.Shield,
    title: "Professional Quality",
    description:
      "Every project meets the highest standards of design, performance, and security. We build websites that impress.",
  },
];

export const aboutStats = [
  { value: "5+", label: "Years in Business" },
  { value: "150+", label: "Websites Delivered" },
  { value: "50+", label: "Happy Clients" },
];

// ---------- Tech Stack ("Technologies We Master") --------------------

// Icons live in /public/icons and are referenced by URL path.
export const techStack = [
  // Tools / Setup
  { name: "VsCode", type: "Tools", imageUrl: "/icons/VsCode.webp" },
  { name: "Git", type: "Version Control", imageUrl: "/icons/git.svg" },
  { name: "GitHub", type: "Version Control", imageUrl: "/icons/github.svg" },

  // Frontend Basics
  { name: "HTML", type: "Frontend", imageUrl: "/icons/html.svg" },
  { name: "CSS", type: "Frontend", imageUrl: "/icons/css.svg" },
  { name: "JavaScript", type: "Frontend", imageUrl: "/icons/javascript.svg" },
  { name: "TypeScript", type: "Language", imageUrl: "/icons/typescript.svg" },

  // Styling
  { name: "Tailwind CSS", type: "Styling", imageUrl: "/icons/tailwindcss.svg" },
  { name: "Sass", type: "Styling", imageUrl: "/icons/sass.svg" },
  { name: "Material-UI", type: "Styling", imageUrl: "/icons/mui.svg" },

  // JS Frameworks / Libraries
  { name: "React", type: "Library", imageUrl: "/icons/react.svg" },
  { name: "Next.js", type: "Framework", imageUrl: "/icons/nextjs.svg" },
  { name: "Redux", type: "State Management", imageUrl: "/icons/redux.svg" },

  // Animation
  { name: "Framer Motion", type: "Animation", imageUrl: "/icons/motion.svg" },

  // Backend
  { name: "Node.js", type: "Backend", imageUrl: "/icons/nodejs.svg" },
  { name: "Express", type: "Backend", imageUrl: "/icons/express.svg" },

  // Database
  { name: "MongoDB", type: "Database", imageUrl: "/icons/mongodb.svg" },
  { name: "MySQL", type: "Database", imageUrl: "/icons/mysql.png" },

  // API Testing
  { name: "Postman", type: "Testing", imageUrl: "/icons/postman.png" },
  { name: "Thunder Client", type: "Testing", imageUrl: "/icons/Thunder-Client.jpg" },

  // Deployment
  { name: "Vercel", type: "Deploying", imageUrl: "/icons/vercel.png" },
  { name: "Netlify", type: "Deploying", imageUrl: "/icons/netlify.png" },
  { name: "Render", type: "Deploying", imageUrl: "/icons/render.jpeg" },
  { name: "AWS", type: "Cloud", imageUrl: "/icons/aws.png" },

  // OS
  { name: "Windows", type: "Tools", imageUrl: "/icons/windows-logo.jpg" },
  { name: "Ubuntu", type: "Tools", imageUrl: "/icons/images.png" },
];

// ---------- Testimonials ---------------------------------------------

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, NovaTech",
    content:
      "Velhu transformed our outdated platform into a modern, high-performing SaaS application. The team's attention to detail and technical expertise exceeded our expectations. Our user engagement increased by 300%.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "Founder, UrbanBite",
    content:
      "Working with Velhu was an absolute game-changer. They delivered a complex food delivery platform on time and within budget. Their communication throughout the project was exceptional.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director, GreenLeaf",
    content:
      "The telemedicine platform Velhu built for us has been instrumental in our growth. They understood our vision from day one and delivered a product that both patients and doctors love.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "CTO, Luxe Fashion",
    content:
      "Velhu's expertise in e-commerce is unmatched. They built us a storefront that not only looks premium but also converts. Our online revenue doubled within the first quarter of launch.",
    rating: 5,
  },
  {
    name: "Vash Agarwal",
    role: "Founder, FinPay",
    content:
      "Velhu shipped our fintech dashboard in record time without compromising on security or polish. They asked the right questions and pushed back where it mattered. Genuinely felt like an extension of our team.",
    rating: 5,
  },
  {
    name: "Pawan Kumar",
    role: "Product Manager, EduSpark",
    content:
      "We needed a learning platform that worked beautifully on low-end devices in Tier-2 cities. Velhu nailed the performance budget — pages load in under a second even on 3G. Our completion rates jumped overnight.",
    rating: 5,
  },
  {
    name: "Anupam Gupta",
    role: "Director, Skyline Realty",
    content:
      "Our property listings now look as premium as the homes we sell. Velhu's design sense and SEO work brought in qualified leads from day one. Best money we've spent on the business this year.",
    rating: 5,
  },
  {
    name: "Anurag Singh",
    role: "Co-founder, Wanderly",
    content:
      "Booking flows are make-or-break for travel sites and Velhu got every detail right — from currency switching to mobile checkout. Our cart abandonment dropped by 40% after the relaunch.",
    rating: 5,
  },
  {
    name: "Sachin Verma",
    role: "Owner, Bharat Threads",
    content:
      "I've worked with three agencies before Velhu and none came close. They understood our D2C brand voice, integrated payments and shipping cleanly, and trained my team to manage everything ourselves.",
    rating: 5,
  },
  {
    name: "Ranjeet Yadav",
    role: "CEO, SwiftHaul Logistics",
    content:
      "Velhu built us a tracking portal our customers actually enjoy using. Real-time updates, clean UI, zero downtime since launch. Their support after delivery has been just as solid as the build itself.",
    rating: 5,
  },
];

// ---------- Contact form options -------------------------------------

export const budgetOptions = [
  { value: "under-10k", label: "Under ₹10,000" },
  { value: "10k-25k", label: "₹10,000 - ₹25,000" },
  { value: "25k-50k", label: "₹25,000 - ₹50,000" },
  { value: "50k-1l", label: "₹50,000 - ₹1,00,000" },
  { value: "1l-3l", label: "₹1,00,000 - ₹3,00,000" },
  { value: "3l+", label: "₹3,00,000+" },
];

// ---------- Portfolio projects ---------------------------------------
// NOTE: All project GitHub repository links have been removed as requested.
// Only public live demo links are kept (`link`).
// ---------------------------------------------------------------------

export const projects = [
  {
    slug: "spa-wellness",
    name: "Serenity Spa — Wellness & Beauty Website",
    category: "Wellness · Beauty",
    img: "https://api.microlink.io/?url=https%3A%2F%2Fspa-lake-eta.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    description:
      "An elegant spa and wellness website featuring a serene, modern UI with smooth scroll animations, service showcases, treatment menus, and an online booking experience designed to convert visitors into clients.",
    link: "https://spa-lake-eta.vercel.app/",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    freelance: true,
    color: "from-teal-500 to-emerald-600",
  },
  {
    slug: "gym",
    name: "GymFit — Modern Fitness Website UI",
    category: "Fitness · UI/UX",
    img: "https://api.microlink.io/?url=https%3A%2F%2Fgym-one-pi.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    description:
      "A modern and responsive gym website UI with a clean white theme and smooth motion animations. Designed to showcase fitness services, membership plans, trainers, and contact options with a strong focus on user experience and conversion-driven design.",
    link: "https://gym-one-pi.vercel.app/",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    freelance: true,
    color: "from-indigo-500 to-purple-600",
  },
  {
    slug: "apihub-digital",
    name: "APIHub Digital — Mock API Platform",
    category: "Developer Tools",
    img: "/projectImg/14.png",
    description:
      "A full-featured mock API platform with 200+ endpoints, 10+ static API categories, and 50,000+ requests served. Developers can explore free & public APIs, generate custom APIs, or use ready-made mocks for testing and projects.",
    link: "https://www.apihub.digital/",
    techStack: ["Next.js", "React", "Node.js", "Tailwind CSS", "MongoDB"],
    freelance: true,
    color: "from-sky-500 to-blue-600",
  },
  {
    slug: "hamsa-institute",
    name: "Hamsa Institute of Occult Science",
    category: "Education",
    // iconUrl: "https://www.sandeep-web.in/favicon.ico",
    img: "/projectImg/15.png",
    description:
      "An institute website empowering minds through knowledge, innovation, and practical excellence. Features course exploration, admissions for the 2026 batch, student dashboard, program listings, and a clean modern UI.",
    link: "https://www.sandeep-web.in/",
    techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    freelance: true,
    color: "from-rose-500 to-pink-600",
  },
  {
    slug: "message-slack-app",
    name: "Message — Slack-style Chat",
    category: "Real-time Messaging",
    img: "/projectImg/10.png",
    description:
      "A Slack-like messaging app built with the MERN stack. Real-time messaging, secure authentication, channel management, and intuitive workspaces for teams and communities.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    color: "from-fuchsia-500 to-violet-600",
  },
  {
    slug: "attendance-management",
    name: "Attendance Management System",
    category: "Web Application",
    img: "/projectImg/01.png",
    description:
      "A full-stack web application that helps organizations track employee or student attendance digitally. Features secure JWT authentication, role-based access, QR-scanner check-ins, and daily/monthly reports.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    slug: "food-ordering-app",
    name: "Full-Stack Food Ordering App",
    category: "Food & Delivery",
    img: "/projectImg/03.png",
    description:
      "A full-stack food delivery app with real-time order tracking, secure payments, and a user-friendly interface — connecting customers with top restaurants for fast, reliable delivery.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe"],
    color: "from-orange-500 to-amber-600",
  },
  {
    slug: "wedding-platform",
    name: "Wedding Planning Platform",
    category: "Lifestyle",
    img: "/projectImg/12.png",
    description:
      "An elegant wedding planning platform with themed categories, vendor management, guest list tools, and a seamless booking experience built with React and modern UI tooling.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    color: "from-pink-500 to-rose-600",
  },
  {
    slug: "cryptocurrency-tracker",
    name: "Cryptocurrency Tracker",
    category: "Finance",
    img: "/projectImg/02.png",
    description:
      "A dynamic cryptocurrency detail page powered by the CoinGecko API. Live price updates, charts, and key market stats in a clean, responsive UI built with Tailwind CSS and DaisyUI.",
    techStack: [
      "React.js",
      "Axios",
      "CoinGecko API",
      "Tailwind CSS",
      "DaisyUI",
    ],
    color: "from-yellow-500 to-orange-600",
  },
];

// ---------- Footer ---------------------------------------------------

export const footerLinks = {
  Services: [
    { name: "Web Development", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "E-Commerce", href: "#services" },
    { name: "SEO Optimization", href: "#services" },
  ],
  Company: [
    { name: "About Us", href: "#about" },
    { name: "Our Work", href: "#work" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
  Resources: [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#work" },
    { name: "FAQs", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

export const socials = [
  {
    name: "Twitter",
    href: "https://x.com/sahuji7522",
    icon: SocialIcons.Twitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sandeep-kumar-sahu-ab9a73303/",
    icon: SocialIcons.LinkedIn,
  },
  { name: "Instagram", href: "#", icon: SocialIcons.Instagram },
];
