"use client";

import { motion } from "framer-motion";

interface Props {
  value: number;
}

export default function ProgressBar({ value }: Props) {
  return (
    <div className="mt-6">
      <div className="mb-2 flex justify-between text-sm text-zinc-400">
        <span>Progress</span>
        <span>{value}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
        />
      </div>
    </div>
  );
}