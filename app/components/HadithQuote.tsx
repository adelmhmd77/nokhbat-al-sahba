'use client';

import { motion } from "framer-motion";

interface HadithQuoteProps {
    children: React.ReactNode;
}

export default function HadithQuote({
    children,
}: HadithQuoteProps) {
    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 50,
                scale: .96,
            }}

            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}

            viewport={{
                once: true,
            }}

            transition={{
                duration: .8,
            }}

            className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-cyan-400/15
                bg-gradient-to-br
                from-cyan-500/[0.04]
                via-transparent
                to-transparent
                p-10
                md:p-14
                backdrop-blur-xl
            "

        >

            {/* Glow */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.08),transparent_60%)]" />

            {/* زخرفة فوق */}

            <div className="absolute left-8 top-8 text-3xl text-cyan-400/25">

                ❋

            </div>

            {/* زخرفة تحت */}

            <div className="absolute bottom-8 right-8 rotate-180 text-3xl text-cyan-400/25">

                ❋

            </div>

            {/* الخط */}

            <div className="relative z-10">

                <p
                    className="
                        font-amiri
                        text-3xl
                        leading-[2.3]
                        text-center
                        text-white
                    "
                >

                    {children}

                </p>

            </div>

        </motion.div>

    );
}