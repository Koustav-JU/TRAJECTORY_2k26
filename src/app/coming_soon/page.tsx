"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const LAUNCH_DATE = new Date("2026-04-16T00:00:00");

function getTimeLeft() {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center border border-primary/30 bg-[#0B0F1A]">
        {/* Corner brackets */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
        <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary" />
        <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />
        <span className="text-3xl md:text-5xl font-black text-primary font-mono tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 text-[10px] md:text-xs tracking-widest uppercase text-secondary/70 font-mono">
        {label}
      </span>
    </div>
  );
}

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F1A] flex flex-col items-center justify-center p-6 text-center font-mono relative overflow-hidden text-accent">
      {/* Vertical gradient lines */}
      <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-4 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none" />

      {/* Scan-line overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.5) 2px, rgba(0,229,255,0.5) 3px)",
        }}
      />

      <div className="relative z-10 max-w-3xl w-full mx-auto space-y-10">
        {/* Glitch heading */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="glitch text-5xl md:text-7xl font-black uppercase tracking-tighter text-accent mt-20"
            data-text="COMING SOON"
          >
            COMING SOON
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-primary/70 text-sm md:text-base leading-relaxed"
        >
          Something extraordinary is being forged in the{" "}
          <span className="text-secondary font-bold">[DIGITAL FORGE]</span>.
          <br className="hidden md:block" />
          Prepare your systems — Trajectory 2k26 ignites soon.
        </motion.p>

        {/* Horizontal divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        />

        {/* Countdown timer */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="items-start flex justify-center gap-4 md:gap-8"
        >
          <CountdownUnit value={timeLeft.days} label="Days" />
          <span className="text-primary/50 text-4xl md:text-6xl font-black mt-3 md:mt-5 select-none">:</span>
          <CountdownUnit value={timeLeft.hours} label="Hours" />
        </motion.div>

        {/* Horizontal divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        />

        {/* CTA button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="pt-2"
        >
          <Link
            href="/events"
            className="group relative px-8 py-3 bg-primary text-black font-bold uppercase tracking-widest transition-all hover:bg-secondary hover:text-white hover:scale-105 inline-block"
          >
            <span className="relative z-10">Return to Events</span>
            <div className="absolute inset-0 bg-secondary/50 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </motion.div>
      </div>

      {/* HUD bottom-left */}
      <div className="absolute bottom-6 left-6 text-[10px] text-secondary/40 text-left">
        STATUS: INITIALIZING...<br />
        TARGET: {LAUNCH_DATE.toISOString()}
      </div>

      {/* HUD bottom-right */}
      <div className="absolute bottom-6 right-6 text-[10px] text-secondary/40 text-right uppercase tracking-widest">
        TRAJECTORY_2K26<br />
        STAND BY
      </div>
    </div>
  );
}