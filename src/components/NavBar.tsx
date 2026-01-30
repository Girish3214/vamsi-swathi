"use client";

import { useScrollThreshold } from "@/hooks/useScrollThreshold";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  brideName: string;
  groomName: string;
  weddingDate: string;
}

const Navbar = ({ brideName, groomName, weddingDate }: NavbarProps) => {
  const showNav = useScrollThreshold(500);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xs border-b border-primary/10
          "
        >
          <div className="content-container h-16 flex items-center justify-between gap-4">
            {/* Left: Names (2 rows always) */}
            <div className="leading-tight flex items-center flex-col">
              <p className="text-base md:text-lg font-heading text-primary">
                {brideName}
              </p>
              <p className="text-base md:text-lg font-heading text-primary">
                {groomName}
              </p>
            </div>

            {/* Right: Date */}
            <div className="text-right shrink-0">
              <p className="text-[10px] md:text-sm uppercase tracking-[0.25em] md:tracking-[0.2em] text-foreground/60">
                {weddingDate}
              </p>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export { Navbar };
