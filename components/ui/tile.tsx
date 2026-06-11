"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Tile({
  children,
  className = "",
}: Props) {
  return (
    <motion.article
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      whileTap={{
        scale: 0.99,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={`
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/50
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-violet-500/30
        hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]
        ${className}
      `}
    >
      {children}
    </motion.article>
  );
}