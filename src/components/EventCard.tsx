"use client";

import Footer from "@/components/Footer"
import { motion } from "motion/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export interface EventData {
  slug: string,
  deadline: string,
  id: number,
  title: string,
  image: string,
  pricepool:string,
  date: string,
  guidelines: React.ReactNode,
  description: string,
  teamSize: string,
  team_structure: React.ReactNode,
  event_coordinators: React.ReactNode,
  gdrive: string,
  register: string,
}

interface EventCardProps {
  event: EventData;
}

const EventCard = ({ event }: EventCardProps) => {

  const router = useRouter();

  const handleClick = (e:HTMLDivElement) => {
    if((e.id === "casecom" || e.id === "modelmatrix")){
      toast("🚧 Registration opens soon!", {
        duration: 3000,
        style: {
          borderRadius: "12px",
          background: "#0f172a",
          color: "#38bdf8",
          border: "1px solid rgba(56,189,248,0.3)",
        },
      });
      router.push("./coming_soon");
    }
    else{
      router.push(`./event/${e.id}`);
    }
    
  };


  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(cardRef.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 90%", // animation starts when card enters viewport
        toggleActions: "play none none none",
      },
    });
  },[]);

  return (
    <motion.div
      ref={cardRef}
      id={event.slug}
      onClick={(e)=>handleClick(e.currentTarget)}
      className="group hover:cursor-pointer relative h-[420px] bg-[#0B0F1A] border border-white/5 rounded-none overflow-hidden transition-[border-color,box-shadow] duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(0,229,255,0.1)]"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top Bar Decoration */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 group-hover:bg-primary/30 transition-colors duration-500" />

      {/* Ghost Number Background */}
      <div className="absolute -right-4 -bottom-4 text-[10rem] font-black text-white/[0.02] group-hover:text-primary/[0.04] transition-colors duration-700 select-none leading-none">
        {event.id}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <img
        src={event.image}
        alt="event"
        className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110"
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0F1A] via-[#0B0F1A]/80 to-transparent" />
      </div>

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
              style={{ boxShadow: `inset 0 0 20px` }}
            >
              <div className="absolute -top-[3px] -left-[3px] w-2 h-2 border-l border-t border-primary" />
              <div className="absolute -bottom-[3px] -right-[3px] w-2 h-2 border-r border-b border-primary" />
            </div>

            {/* Category tag */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-[1px] bg-primary/40" />
              <span className="text-primary font-mono text-[10px] tracking-widest uppercase">
                Engineering
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-black text-cyan-100/80 mb-4 uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
            {event.title}
          </h3>

          {/* Description */}
          <p className="font-semibold text-md text-white/70 leading-relaxed group-hover:text-primary/80 transition-colors duration-500 line-clamp-3">
            {event.description}
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
              {String(event.id * 7 + 13).padStart(2, "0")}
            </div>
            <button className="hover:cursor-pointer text-[10px] font-mono text-primary border border-primary/20 px-4 py-2 hover:bg-primary/10 hover:border-primary/50 transition-colors duration-300">
              REGISTER
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </motion.div>
  );
};

export default EventCard;
