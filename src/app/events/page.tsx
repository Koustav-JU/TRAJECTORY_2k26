"use client";

import { motion } from "motion/react";
import EventCard, { EventData } from "@/components/EventCard";
import Footer from "@/components/Footer";

const events: EventData[] = [
  {
    id: "XD-349",
    title: "EVENT-1",
    category: "Simulation",
    desc: "Test your problem-solving skills with complex 3D simulations and scenarios. Model, simulate, and conquer.",
    date: "DAY-01",
    teamSize: "TBD",
    color: "#00ffff",
    index: 0,
    image: "",
  },
  {
    id: "CS-882",
    title: "EVENT-2",
    category: "Engineering",
    desc: "Dive deep into real-world engineering cases and present innovative, data-driven solutions to a panel of judges.",
    date: "DAY-01",
    teamSize: "TBD",
    color: "#ff00ff",
    index: 1,
    image: "",
  },
  {
    id: "RW-731",
    title: "EVENT-3",
    category: "Robotics",
    desc: "Build and battle autonomous robots in an arena-style combat competition. Last bot standing wins.",
    date: "DAY-02",
    teamSize: "TBD",
    color: "#ff4400",
    index: 2,
    image: "",
  },
  {
    id: "CP-417",
    title: "EVENT-4",
    category: "Coding",
    desc: "A fast-paced competitive programming challenge to test your algorithmic skills under extreme time pressure.",
    date: "DAY-01",
    teamSize: "TBD",
    color: "#00ff88",
    index: 3,
    image: "",
  },
  {
    id: "BB-503",
    title: "EVENT-5",
    category: "Structural",
    desc: "Design and construct a model bridge to withstand maximum load using only the provided materials.",
    date: "DAY-02",
    teamSize: "TBD",
    color: "#ffaa00",
    index: 4,
    image: "",
  },
  {
    id: "GL-102",
    title: "EVENT-6",
    category: "Culture & Logic",
    desc: "A rapid-fire quiz covering science, engineering, and general knowledge. Speed and accuracy are everything.",
    date: "DAY-01",
    teamSize: "TBD",
    color: "#ffff00",
    index: 5,
    image: "",
  },
  {
    id: "CD-664",
    title: "EVENT-7",
    category: "Design",
    desc: "Race against the clock to model precision engineering components in CAD software. Every second counts.",
    date: "DAY-02",
    teamSize: "TBD",
    color: "#0088ff",
    index: 6,
    image: "",
  },
  {
    id: "DR-819",
    title: "EVENT-8",
    category: "Aerial Tech",
    desc: "Navigate your custom drone through a high-speed obstacle course. Precision piloting decides the champion.",
    date: "DAY-02",
    teamSize: "TBD",
    color: "#cc00ff",
    index: 7,
    image: "",
  },
  {
    id: "HC-221",
    title: "EVENT-9",
    category: "Innovation",
    desc: "48-hour innovation sprint to build working prototypes for real-world problems. Hack. Build. Ship.",
    date: "DAY-01–02",
    teamSize: "TBD",
    color: "#00E5FF",
    index: 8,
    image: "",
  },
  {
    id: "MX-000",
    title: "EVENT-10",
    category: "Fun",
    desc: "The grand finale. Prepare for the unexpected. Termination imminent. All clearances revoked.",
    date: "DAY-02",
    teamSize: "TBD",
    color: "#ffffff",
    index: 9,
    image: "",
  },
];

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
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const EventsPage = () => {
  return (
    <main className="min-h-screen w-screen bg-[var(--color-vanta)] pt-28 pb-20">
      <div className="w-screen mx-auto px-4 md:px-6">
        {/* Hero / Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-primary/60 uppercase mb-4">
            // TRAJECTORY_2K26
          </p>
          <h1 className="text-5xl md:text-9xl font-black text-white uppercase tracking-[0.1em] md:tracking-[0.15em] mb-6 filter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            EVENT_<span className="text-primary italic">REGISTRY</span>
          </h1>
          <div className="flex items-center justify-center gap-3 md:gap-6">
            <div className="h-[1px] md:h-[2px] w-12 md:w-24 bg-linear-to-r from-transparent via-primary to-transparent" />
            <p className="text-primary font-mono text-[8px] md:text-sm tracking-[0.4em] md:tracking-[0.8em] uppercase opacity-80">
              // FULL_ROSTER_DEPLOYMENT
            </p>
            <div className="h-[1px] md:h-[2px] w-12 md:w-24 bg-linear-to-r from-transparent via-primary to-transparent" />
          </div>
          <p className="mt-6 text-white/40 font-mono text-xs md:text-sm max-w-xl mx-auto tracking-wide">
            10 EVENTS DETECTED &nbsp;·&nbsp; SECTOR_07 &nbsp;·&nbsp; STATUS: ACTIVE
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

        {/* Footer spacing decoration */}
        <div className="flex items-center justify-center gap-6 mt-16 md:mt-24">
          <div className="h-[1px] w-16 bg-linear-to-r from-transparent via-white/10 to-transparent" />
          <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">
            END_OF_REGISTRY
          </span>
          <div className="h-[1px] w-16 bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default EventsPage;
