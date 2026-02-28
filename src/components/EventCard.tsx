"use client";

import { motion } from "motion/react";

export interface EventData {
  id: string;
  title: string;
  category: string;
  desc: string;
  date: string;
  teamSize: string;
  color: string;
  index: number;
}

interface EventCardProps {
  event: EventData;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <motion.div
      className="group relative h-[420px] bg-[#0B0F1A] border border-white/5 rounded-none overflow-hidden transition-[border-color,box-shadow] duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(0,229,255,0.1)]"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top Bar Decoration */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 group-hover:bg-primary/30 transition-colors duration-500" />

      {/* Ghost Number Background */}
      <div className="absolute -right-4 -bottom-4 text-[10rem] font-black text-white/[0.02] group-hover:text-primary/[0.04] transition-colors duration-700 select-none leading-none">
        {event.index + 1}
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${event.color}55 1px, transparent 1px), linear-gradient(90deg, ${event.color}55 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Scanline animation */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div
          className="w-full h-[2px] bg-primary/20 absolute top-0 animate-[scan_3s_linear_infinite]"
          style={{ boxShadow: "0 0 10px var(--color-primary)" }}
        />
      </div>

      {/* Corner Accents */}
      <div className="absolute top-3 left-3 w-3 h-3 border-l border-t border-primary/60" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-r border-b border-primary/60" />

      {/* Shimmer sweep on hover */}
      <div className="absolute top-0 left-[-100%] w-full h-full bg-linear-to-r from-transparent via-white/[0.04] to-transparent group-hover:left-[100%] transition-all duration-1000 pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 p-8 flex flex-col h-full justify-between">
        {/* Header */}
        <div>
          {/* ID Badge row */}
          <div className="flex items-center justify-between mb-5">
            <div
              className="inline-flex items-center justify-center border border-white/10 px-3 py-1 backdrop-blur-sm relative"
              style={{ boxShadow: `inset 0 0 20px ${event.color}11` }}
            >
              <span className="text-[10px] font-mono text-white/70 tracking-[0.2em]">
                {event.id}
              </span>
              <div className="absolute -top-[3px] -left-[3px] w-2 h-2 border-l border-t border-primary" />
              <div className="absolute -bottom-[3px] -right-[3px] w-2 h-2 border-r border-b border-primary" />
            </div>

            {/* Category tag */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-[1px] bg-primary/40" />
              <span className="text-primary font-mono text-[10px] tracking-widest uppercase">
                {event.category}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
            {event.title}
          </h3>

          {/* Description */}
          <p className="text-white/70 text-sm leading-relaxed group-hover:text-primary/80 transition-colors duration-500 line-clamp-3">
            {event.desc}
          </p>
        </div>

        {/* Footer */}
        <div>
          {/* Date & Team */}
          <div className="flex items-center gap-6 mb-5 font-mono text-[10px] text-white/30">
            <span className="text-xs">
              <span className="text-primary/60">DATE: </span>
              {event.date}
            </span>
            <span className="text-xs">
              <span className="text-primary/60">TEAM: </span>
              {event.teamSize}
            </span>
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-between">
            <div className="font-mono text-[10px] text-white/20">
              <span className="text-primary">00:00:</span>
              {String(event.index * 7 + 13).padStart(2, "0")}
            </div>
            <button className="text-[10px] font-mono text-primary border border-primary/20 px-4 py-2 hover:bg-primary/10 hover:border-primary/50 transition-colors duration-300">
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
