

import { motion } from "framer-motion";
import Image from "next/image";
export interface Card{
        id: string,
        title:string,
        image: string,
        description: string,
        index: number,
        color: string,
    }

interface CardProps{
    event: Card;
}

const MarqueeCard = ({event}: CardProps) => {
  return (
    <motion.div
      className="group relative h-70 lg:h-90 w-40 lg:w-140 bg-[#0B0F1A] border border-white/5 rounded-none overflow-hidden transition-[border-color,box-shadow] duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(0,229,255,0.1)]"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top Bar Decoration */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-white/5 group-hover:bg-primary/30 transition-colors duration-500" />

      {/* Ghost Number Background */}
      <div className="absolute -right-4 -bottom-4 text-[5rem] lg:text-[10rem] font-black text-white/[0.02] group-hover:text-primary/[0.04] transition-colors duration-700 select-none leading-none">
        {event.index + 1}
      </div>

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[85%] h-[8rem] lg:h-[14rem] rounded-sm overflow-hidden border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.25)] transition-all duration-500 mt-8">

  <Image
    src={`/${event.image}.webp`}
    alt={event.title}
    fill
    className="object-cover transition-transform duration-700 group-hover:scale-105"
  />
    <div className="absolute bottom-3 left-3 w-5 h-5 border-l border-b border-primary/60" />
    <div className="absolute top-3 right-3 w-5 h-5 border-r border-t border-primary/60" />
</div>
      
      {/* Scanline animation */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div
          className="w-full h-[2px] bg-primary/20 absolute top-0 animate-[scan_3s_linear_infinite]"
          style={{ boxShadow: "0 0 10px var(--color-primary)" }}
        />
      </div>

      {/* Corner Accents */}
      <>
        <div className="absolute top-3 left-3 w-3 h-3 border-l border-t border-primary/60" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-r border-b border-primary/60" />
      </>

      {/* Shimmer sweep on hover */}
      <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/4 to-transparent group-hover:left-full transition-all duration-1000 pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 p-8 flex flex-col h-full justify-between">
        {/* Header */}
        <div>
          {/* ID Badge row */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-5">
            <div
              className="inline-flex items-center justify-center border border-white/10 px-3 py-1 backdrop-blur-sm relative"
              style={{ boxShadow: `inset 0 0 20px ${event.color}11` }}
            >
              <span className="text-[7px] lg:text-[10px] font-mono text-white/70 tracking-[0.2em]">
                {event.id}
              </span>
              <div className="absolute -top-0.75 -left-0.75 w-2 h-2 border-l border-t border-primary" />
              <div className="absolute -bottom-0.75 -right-0.75 w-2 h-2 border-r border-b border-primary" />
          </div>

          {/* Description */}
          <p className="text-cyan-200/70 text-center text-[8px] lg:text-[14px] leading-relaxed group-hover:text-primary/80 transition-colors duration-500 line-clamp-3 ml-2">
            {event.description}
          </p>
        </div>
      </div>
      </div>
    </motion.div>
  );
};

export default MarqueeCard;