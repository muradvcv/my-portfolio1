"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Cursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 25 });
  const springY = useSpring(y, { stiffness: 150, damping: 25 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* MAIN SMALL BUBBLE */}
      <motion.div
        style={{
          translateX: springX,
          translateY: springY,
        }}
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999]"
      >
        <div className="w-full h-full rounded-full border border-cyan-400/80 bg-cyan-400/10" />
      </motion.div>

      {/* OUTER SOFT GLOW */}
      <motion.div
        style={{
          translateX: springX,
          translateY: springY,
        }}
        animate={{
          scale: [1.2, 1.35, 1.2],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998]"
      >
        <div className="w-full h-full rounded-full border border-cyan-300/20 blur-sm" />
      </motion.div>
    </>
  );
}