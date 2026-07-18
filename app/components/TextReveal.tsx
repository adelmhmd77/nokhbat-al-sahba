'use client';

import { motion } from 'framer-motion';

interface Props {
  text: string;
  className?: string;
}

export default function TextReveal({ text, className = "" }: Props) {

  const words = text.split(" ");

  // typed cubic bezier curve
  const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 90,
      rotateX: -90,
      filter: "blur(12px)",
    },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: .9,
          // cubic bezier easing
          ease: easeCurve,
      },
    },
  };
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
      style={{ perspective: 1000 }}
    >
      {words.map((word, index) => (

        <span
          key={index}
          className="inline-block overflow-hidden mr-3"
        >

          <motion.span
            variants={item}
            className="inline-block"
          >
            {word}
          </motion.span>

        </span>

      ))}
    </motion.h1>
  );
}