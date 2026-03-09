"use client";

import { motion } from "motion/react";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import { events } from "@/app/data/events";


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};





export default function EventsPage () {

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[var(--color-vanta)] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Hero / Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-primary/60 uppercase mb-4">
            TRAJECTORY_2K26
          </p>

          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-[0.1em] md:tracking-[0.15em] mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] break-words">
            EVENT_<span className="text-primary italic">REGISTRY</span>
          </h1>

          <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap">
            <div className="h-[1px] md:h-[2px] w-12 md:w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <p className="text-primary font-mono text-[8px] md:text-sm tracking-[0.4em] md:tracking-[0.8em] uppercase opacity-80 text-center">
              COMPLETE_MECHANISM_DEPLOYED
            </p>
            <div className="h-[1px] md:h-[2px] w-12 md:w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          <p className="mt-6 text-white/40 font-mono text-xs md:text-sm max-w-2xl mx-auto tracking-wide text-center">
            10 EVENTS DETECTED · PRIMARY_ENGINE_ENGAGED · STATUS: ACTIVE
          </p>
        </div>

        {/* Event Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {events.map((event) => (
            <motion.div key={event.id} variants={cardVariants}>
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer decoration */}
        <div className="flex items-center justify-center gap-6 mt-16 md:mt-24 flex-wrap">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">
            END_OF_REGISTRY
          </span>
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

      </div>

      <Footer />
    </main>
  );
};
