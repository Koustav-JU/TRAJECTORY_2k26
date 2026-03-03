"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Hyperspeed  from "./Hyperspeed";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed/>
        {/* Gradient Overlay for Dystopian Feel */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/20 to-black/90 pointer-events-none" />
        
        {/* Scanning Line */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="w-full h-[1px] bg-primary absolute top-0 animate-[scan_6s_linear_infinite]" />
        </div>
      </div>

      {/* Floating HUD Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute top-20 left-10 md:top-40 md:left-20 font-mono text-[10px] text-primary space-y-2 hidden lg:block"
        >
          <p>LOC_DATA: 22.4989° N, 88.3713° E</p>
          <p>SIG_STAT: STABLE [100%]</p>
          <div className="w-20 h-1 bg-primary/20"><div className="w-2/3 h-full bg-primary" /></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-20 right-10 md:bottom-40 md:right-20 font-mono text-[10px] text-primary text-right space-y-2 hidden lg:block"
        >
          <p>CORE_TEMP: OPTIMAL</p>
          <p>REVOLUTION_CLOCK: 08:14:22:04</p>
          <div className="w-32 h-px bg-primary/40 ml-auto" />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-block px-3 py-1 border border-primary/30 bg-primary/5 rounded-full"
        >
          <span className="text-primary font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase">System Online // Protocol 2k26</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-9xl font-black tracking-tighter text-primary drop-shadow-[0_0_20px_rgba(0,229,255,0.6)] mb-4 glitch"
          data-text="TRAJECTORY"
        >
          TRAJECTORY <span className="text-accent">2K26</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-3xl font-light text-white/90 max-w-3xl mx-auto mb-10 md:mb-14 tracking-wide px-4"
        >
          The Future is Realigned. <br className="hidden md:block" />
          Experience the mechanical revolution.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-8 justify-center items-center"
        >
          <Link
            href={"/events"}
            className="group relative w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 text-xl md:text-2xl font-black text-vanta bg-primary rounded-none hover:bg-secondary hover:text-accent transition-all duration-300 shadow-[0_0_30px_var(--color-primary)] hover:shadow-[0_0_50px_var(--color-secondary)] uppercase tracking-widest clip-path-polygon"
          >
            Explore Events
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary group-hover:border-secondary transition-colors" />
          </Link>
          
          {/* Technical Stats Block */}
          <div className="flex items-center gap-6 px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-left">
              <span className="block text-primary font-mono text-[10px] uppercase opacity-60">Registrations</span>
              <span className="text-white font-black text-2xl">500+</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-left">
              <span className="block text-primary font-mono text-[10px] uppercase opacity-60">Status</span>
              <span className="text-accent font-black text-2xl animate-pulse">LIVE</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
