"use client";

import { motion } from "framer-motion";

export default function Reveal({
    children,
    delay = 0,
    y = 24,
    className = "",
    once = true,
    amount = 0.2,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, amount }}
            transition={{ duration: 0.6, delay, ease: [0.21, 0.6, 0.35, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
