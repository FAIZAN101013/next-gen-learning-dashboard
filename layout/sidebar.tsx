"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Home, Settings } from "lucide-react";

const links = [
  { icon: Home, label: "Dashboard" },
  { icon: BookOpen, label: "Courses" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <>
      {/* Desktop + Tablet sidebar */}
      <aside className="hidden md:flex w-16 xl:w-56 border-r border-zinc-800 min-h-screen flex-col items-center xl:items-start py-8 px-2 xl:px-4 shrink-0">
        <h2 className="hidden xl:block text-xl font-bold mb-10 px-3">LearnOS</h2>
        <nav className="flex flex-col gap-1 w-full">
          {links.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className="relative flex items-center justify-center xl:justify-start gap-3 w-full rounded-xl p-3 text-left"
            >
              {active === label && (
                <motion.div
                  layoutId="sidebar-highlight"
                  className="absolute inset-0 rounded-xl bg-zinc-800"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <Icon size={20} className="relative z-10 shrink-0" />
              <span className="hidden xl:inline relative z-10 text-sm">{label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-sm py-3 px-4">
        {links.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className="relative flex flex-col items-center gap-1 px-4 py-1"
          >
            {active === label && (
              <motion.div
                layoutId="bottom-highlight"
                className="absolute inset-0 rounded-lg bg-zinc-800"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <Icon
              size={22}
              className={`relative z-10 transition-colors ${
                active === label ? "text-violet-400" : "text-zinc-500"
              }`}
            />
            <span
              className={`relative z-10 text-xs transition-colors ${
                active === label ? "text-violet-400" : "text-zinc-500"
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
}