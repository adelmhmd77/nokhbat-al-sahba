'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function OpeningAnimation() {

    const [show, setShow] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setShow(false);
        }, 3200);

        return () => clearTimeout(timer);

    }, []);

    return (

        <AnimatePresence>

            {show && (

                <motion.div

                    initial={{ opacity: 1 }}

                    exit={{
                        opacity: 0,
                        transition: {
                            duration: 0.8
                        }
                    }}

                    className="
                    fixed
                    inset-0
                    z-[99999]
                    overflow-hidden
                    bg-[#050608]
                    flex
                    items-center
                    justify-center
                "
                >

                    {/* Glow */}

                    <motion.div

                        initial={{
                            scale: 0,
                            opacity: 0
                        }}

                        animate={{
                            scale: [0, 1, 18],
                            opacity: [0, 1, .15]
                        }}

                        transition={{
                            duration: 2.6,
                            ease: "easeInOut"
                        }}

                        className="
                        absolute
                        h-8
                        w-8
                        rounded-full
                        bg-cyan-300
                        blur-[2px]
                        shadow-[0_0_120px_60px_rgba(34,211,238,.7)]
                    "
                    />

                    {/* Title */}

                    <motion.div

                        initial={{
                            opacity: 0,
                            y: 20
                        }}

                        animate={{
                            opacity: [0, 0, 1, 1],
                            y: [20, 20, 0, 0]
                        }}

                        transition={{
                            duration: 2,
                            delay: .7
                        }}

                        className="relative z-10 text-center space-y-6"

                    >

                        <motion.h2

                            initial={{ letterSpacing: "1em" }}

                            animate={{ letterSpacing: ".35em" }}

                            transition={{ duration: 1.4 }}

                            className="
                            font-mono
                            text-xs
                            uppercase
                            tracking-[.35em]
                            text-cyan-300
                        "

                        >

                            THE TRUSTED ONE

                        </motion.h2>

                        <motion.div

                            initial={{
                                width: 0
                            }}

                            animate={{
                                width: 140
                            }}

                            transition={{
                                delay: 1,
                                duration: .8
                            }}

                            className="mx-auto h-px bg-cyan-400/40"

                        />

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>

    );

}