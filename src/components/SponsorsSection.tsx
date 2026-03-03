"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type Sponsor = {
  id: string;
  name: string;
};

type Tier = {
  key: string;
  label: string;
  color: string;
  glowColor: string;
  borderClass: string;
  shadowColor: string;
  sponsors: Sponsor[];
};

const tiers: Tier[] = [
  {
    key: "platinum",
    label: "TIER_01 // PLATINUM",
    color: "#00E5FF",
    glowColor: "rgba(0,229,255,0.35)",
    borderClass: "border-primary/30 hover:border-primary/80",
    shadowColor: "rgba(0,229,255,0.2)",
    sponsors: [
      { id: "SP-001", name: "TechCorp Industries" },
      { id: "SP-002", name: "MechaDyne Systems" },
    ],
  },
  {
    key: "gold",
    label: "TIER_02 // GOLD",
    color: "#FFD700",
    glowColor: "rgba(255,215,0,0.35)",
    borderClass: "border-[#FFD700]/30 hover:border-[#FFD700]/80",
    shadowColor: "rgba(255,215,0,0.2)",
    sponsors: [
      { id: "SP-003", name: "Quantum Forge Labs" },
      { id: "SP-004", name: "NexGen Robotics" },
      { id: "SP-005", name: "Apex Engineering Co." },
    ],
  },
  {
    key: "silver",
    label: "TIER_03 // SILVER",
    color: "#C0C0C0",
    glowColor: "rgba(192,192,192,0.25)",
    borderClass: "border-white/20 hover:border-white/60",
    shadowColor: "rgba(192,192,192,0.15)",
    sponsors: [
      { id: "SP-006", name: "SteelMind Analytics" },
      { id: "SP-007", name: "Velocity Dynamics" },
      { id: "SP-008", name: "CoreShift Technologies" },
      { id: "SP-009", name: "Titan Fabrication" },
      { id: "SP-010", name: "PulseWave Innovations" },
    ],
  },
];

const SponsorsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Tier heading animations
      const tierHeadings = gsap.utils.toArray<HTMLElement>(".sponsor-tier-heading");
      tierHeadings.forEach((heading) => {
        gsap.from(heading, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Sponsor card stagger animations per tier
      const tierGroups = gsap.utils.toArray<HTMLElement>(".sponsor-tier-group");
      tierGroups.forEach((group) => {
        const cards = group.querySelectorAll(".sponsor-card");
        gsap.from(cards, {
          y: 50,
          opacity: 0,
          scale: 0.88,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: group,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Continuous floating animation on each card
        cards.forEach((card, idx) => {
          gsap.to(card, {
            y: idx % 2 === 0 ? -8 : 8,
            duration: 2.2 + idx * 0.15,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        });
      });

      // Horizontal scan sweep across the section
      const scanLine = containerRef.current.querySelector(".sponsor-scan-line");
      if (scanLine) {
        gsap.fromTo(
          scanLine,
          { top: "0%" },
          {
            top: "100%",
            duration: 6,
            ease: "none",
            repeat: -1,
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 bg-black overflow-hidden border-t border-white/5"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Horizontal scan line */}
      <div className="sponsor-scan-line absolute left-0 w-full h-[2px] bg-primary/20 pointer-events-none z-10" />

      {/* HUD Corner Brackets */}
      <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-primary/30" />
      <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-primary/30" />
      <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-primary/30" />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-primary/30" />

      <div className="container mx-auto px-4 relative">

        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28">
          <h2 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter filter drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]">
            Past Sponsors
          </h2>
          <p className="text-primary font-mono text-sm mt-4 tracking-[0.3em] uppercase opacity-60">
            // ALLIANCE_PROTOCOL
          </p>
          {/* Decorative gradient dividers */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex-1 max-w-xs h-[1px] bg-gradient-to-r from-transparent to-primary/40" />
            <span className="text-primary/40 font-mono text-[10px] tracking-widest">◆</span>
            <div className="flex-1 max-w-xs h-[1px] bg-gradient-to-l from-transparent to-primary/40" />
          </div>
        </div>

        {/* Tiers */}
        <div className="flex flex-col gap-20">
          {tiers.map((tier) => (
            <div key={tier.key}>
              {/* Tier heading */}
              <div className="sponsor-tier-heading text-center mb-10">
                <span
                  className="font-mono text-xs md:text-sm tracking-[0.4em] uppercase px-4 py-1 border rounded-full"
                  style={{
                    color: tier.color,
                    borderColor: tier.color + "40",
                    textShadow: `0 0 10px ${tier.color}`,
                  }}
                >
                  {tier.label}
                </span>
                <div className="mt-4 flex items-center justify-center gap-3">
                  <div
                    className="flex-1 max-w-sm h-[1px]"
                    style={{
                      background: `linear-gradient(to right, transparent, ${tier.color}50)`,
                    }}
                  />
                  <div
                    className="flex-1 max-w-sm h-[1px]"
                    style={{
                      background: `linear-gradient(to left, transparent, ${tier.color}50)`,
                    }}
                  />
                </div>
              </div>

              {/* Cards grid */}
              <div
                className={`sponsor-tier-group flex flex-wrap justify-center gap-6 ${
                  tier.key === "platinum"
                    ? "max-w-2xl mx-auto"
                    : tier.key === "gold"
                    ? "max-w-4xl mx-auto"
                    : "max-w-5xl mx-auto"
                }`}
              >
                {tier.sponsors.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className={`sponsor-card group relative bg-[#0B0F1A] border ${tier.borderClass} transition-all duration-500 overflow-hidden cursor-default hover:scale-105 ${
                      tier.key === "platinum"
                        ? "w-full sm:w-64 md:w-72 p-8 rounded-2xl"
                        : tier.key === "gold"
                        ? "w-full sm:w-52 md:w-60 p-6 rounded-xl"
                        : "w-full sm:w-40 md:w-48 p-5 rounded-xl"
                    }`}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${tier.shadowColor}`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {/* Scanning line overlay on hover */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity rounded-xl overflow-hidden">
                      <div
                        className="w-full h-[2px] absolute top-0 animate-[scan_4s_linear_infinite]"
                        style={{ background: tier.color }}
                      />
                    </div>

                    {/* Corner accent top-right */}
                    <div
                      className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 transition-colors duration-500 rounded-tr-xl opacity-30 group-hover:opacity-80"
                      style={{ borderColor: tier.color }}
                    />
                    {/* Corner accent bottom-left */}
                    <div
                      className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 transition-colors duration-500 rounded-bl-xl opacity-30 group-hover:opacity-80"
                      style={{ borderColor: tier.color }}
                    />

                    {/* Logo placeholder — data-terminal display */}
                    <div
                      className={`relative z-10 flex items-center justify-center rounded-lg mb-4 font-mono text-center leading-tight select-none ${
                        tier.key === "platinum"
                          ? "h-24 text-[10px]"
                          : tier.key === "gold"
                          ? "h-16 text-[9px]"
                          : "h-12 text-[8px]"
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${tier.color}08, ${tier.color}18)`,
                        border: `1px dashed ${tier.color}25`,
                        color: tier.color + "70",
                        textShadow: `0 0 6px ${tier.color}40`,
                      }}
                    >
                      <span className="uppercase tracking-widest px-2">[ LOGO ]</span>
                    </div>

                    {/* Sponsor name */}
                    <p
                      className="relative z-10 font-mono font-bold uppercase tracking-wider text-center truncate"
                      style={{
                        color: tier.color,
                        fontSize:
                          tier.key === "platinum" ? "0.85rem" : tier.key === "gold" ? "0.75rem" : "0.65rem",
                        textShadow: `0 0 6px ${tier.color}80`,
                      }}
                    >
                      {sponsor.name}
                    </p>

                    {/* ID code */}
                    <p className="relative z-10 text-center font-mono text-white/25 tracking-[0.3em] mt-1"
                      style={{ fontSize: "0.6rem" }}>
                      {sponsor.id}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* End of Registry footer element */}
        <div className="mt-24 text-center flex flex-col items-center gap-4 opacity-30">
          <div className="w-[1px] h-20 bg-gradient-to-b from-primary/50 to-transparent" />
          <span className="text-[10px] font-mono text-primary tracking-[0.5em] uppercase">End of Registry</span>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
