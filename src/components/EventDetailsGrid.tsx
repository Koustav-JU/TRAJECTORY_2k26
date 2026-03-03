"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface EventDetailGridProps {
  slug: string;
}

const EventDetailGrid = ({ slug }: EventDetailGridProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const cards = Array.from(containerRef.current.children) as HTMLDivElement[];

      gsap.from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto] md:grid-rows-2 gap-2 w-full max-w-7xl mx-auto px-6 py-10"
    >
      {/* ── Div 1 — Column 1, Row 1 ── */}
      <div className="group relative col-start-1 row-start-1 min-h-[280px] overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-tr from-[#0B0F1A] to-[#111827] transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.12)]">
        {/* Scanline overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-1"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.04) 2px, rgba(0,229,255,0.04) 4px)",
          }}
        />
        {/* Corner brackets */}
        <div className="absolute top-3 left-3 h-3 w-3 border-t border-l border-primary/40" />
        <div className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-primary/40" />

        <div className="relative z-10 flex h-full flex-col justify-between p-6">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary/60">
              // EVENT_BRIEFING
            </span>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-white md:text-3xl">
              {slug.replace(/-/g, " ").toUpperCase()}
            </h2>
            <div className="mt-2 h-[2px] w-16 bg-gradient-to-r from-primary to-transparent" />
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
            Initializing event data stream. Stand by for full operational details
            on this mission sector.
          </p>
        </div>
      </div>

      {/* ── Div 2 — Column 1, Row 2 (shorter height) ── */}
      <div className="group relative col-start-1 row-start-2 min-h-[160px] md:max-h-[200px] overflow-hidden rounded-xl border border-secondary/20 bg-gradient-to-br from-[#111827] to-[#0B0F1A] transition-all duration-300 hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(0,124,240,0.12)]">
        {/* Glow line */}
        <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

        <div className="relative z-10 flex h-full flex-col justify-center p-6">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-secondary/60">
            // QUICK_STATS
          </span>
          <div className="mt-3 flex items-center gap-6">
            <div>
              <p className="text-2xl font-bold text-white">TBD</p>
              <p className="text-[11px] uppercase tracking-widest text-white/40">
                Date
              </p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="text-2xl font-bold text-white">TBD</p>
              <p className="text-[11px] uppercase tracking-widest text-white/40">
                Team Size
              </p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="text-2xl font-bold text-primary">ACTIVE</p>
              <p className="text-[11px] uppercase tracking-widest text-white/40">
                Status
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Div 3 — Column 2, spanning Row 1 & Row 2 ── */}
      <div className="group relative col-start-1 row-start-3 md:col-start-2 md:row-start-1 md:row-span-2 min-h-[300px] overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-tl from-[#0B0F1A] via-[#111827] to-[#0B0F1A] transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(0,229,255,0.1)]">
        {/* Accent gradient blob */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-secondary/5 blur-3xl" />

        {/* Corner brackets */}
        <div className="absolute top-3 left-3 h-3 w-3 border-t border-l border-primary/40" />
        <div className="absolute top-3 right-3 h-3 w-3 border-t border-r border-primary/40" />
        <div className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-primary/40" />
        <div className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-primary/40" />

        <div className="relative z-10 flex h-full flex-col justify-between p-6">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary/60">
              // MISSION_OVERVIEW
            </span>
            <h3 className="mt-4 text-xl font-bold text-white">
              Event <span className="text-primary">Details</span>
            </h3>
            <div className="mt-1 h-px w-12 bg-primary/30" />
          </div>

          <div className="mt-6 space-y-4">
            <p className="text-sm leading-relaxed text-white/60">
              Full operational parameters for this event sector will be deployed
              shortly. Prepare for an immersive engineering experience that
              pushes boundaries and redefines possibility.
            </p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-sm leading-relaxed text-white/60">
              Stay connected to the Trajectory network for real-time updates,
              team formation protocols, and mission-critical announcements.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_8px_rgba(0,229,255,0.6)]" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-primary/70">
              Signal Active — Awaiting Transmission
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailGrid;