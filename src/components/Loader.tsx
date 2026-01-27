"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import svgData from "@/data/venkateshwara_swamy.json";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Calculate total duration based on path count to ensure full drawing
    // roughly 0.05s per path + initial delay + overlap
    const totalDuration = Math.min(svgData.paths.length * 0.1 + 2, 8) * 600;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, totalDuration);

    return () => clearTimeout(timer);
  }, []);

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.5 },
      },
    },
  } as const;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/90 backdrop-blur-xl"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          <div className="relative flex items-center justify-center w-full h-full p-8">
            {/* Vector Animation Container */}
            <motion.svg
              viewBox="0 0 1536 1024"
              className="absolute inset-0 w-full h-full max-w-[600px] text-[#D4AF37] mx-auto z-10"
              initial="hidden"
              animate="visible"
            >
              {svgData.paths.map((d, i) => (
                <motion.path
                  key={i}
                  d={d}
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="2"
                  variants={pathVariants}
                  // Stagger animation: load one by one
                  custom={i}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                    transition: {
                      pathLength: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: i * 0.05,
                      },
                      opacity: { duration: 0.5, delay: i * 0.05 },
                    },
                  }}
                />
              ))}
            </motion.svg>

            {/* Original Color Image Reveal */}
            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center max-w-[600px] mx-auto opacity-0"
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 1.5, ease: "easeOut" }} // Delay matches roughly when drawing finishes
            >
              <Image
                src="/icons/venkateshwara_swamy.svg"
                alt="Lord Venkateshwara"
                width={1536}
                height={1024}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Decorative Glow */}
            <motion.div
              className="absolute inset-0 z-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 1, duration: 2 }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#D4AF37] blur-[150px] rounded-full mix-blend-screen" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Loader };
