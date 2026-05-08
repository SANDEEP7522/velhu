"use client";

import { useRef } from "react";

export default function SpotlightCard({ as: Tag = "div", className = "", children, ...rest }) {
    const ref = useRef(null);

    const handleMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    return (
        <Tag
            ref={ref}
            onMouseMove={handleMove}
            className={`spotlight group relative ${className}`}
            {...rest}
        >
            {children}
            <span className="shimmer-overlay" aria-hidden="true" />
        </Tag>
    );
}
