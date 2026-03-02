"use client";
import About from "@/components/aboutgrid";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const AbtPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header Reveal
    gsap.from(headerRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.2
    });

    // Background Parallax
    gsap.to(bgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });

    // Vision Section Reveal
    gsap.from(visionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: visionRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

    

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
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
    <div ref={containerRef} className="relative w-full min-h-screen overflow-hidden bg-vanta">
      {/* Parallax Background */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <Image
          src="/bg-new.webp"
          alt="background"
          fill
          className="object-cover opacity-10 blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-vanta via-transparent to-vanta" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <div ref={headerRef} className="text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={itemVariants}
                className="text-6xl md:text-9xl font-black tracking-tighter text-primary drop-shadow-[0_0_30px_rgba(0,229,255,0.4)] mb-4 glitch"
                data-text="TRAJECTORY"
              >
                TRAJECTORY <span className="text-accent underline decoration-primary/30 underline-offset-8">2K26</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-2xl text-accent/60 font-medium tracking-[0.2em] uppercase"
              >
                The Convergence of Motion and Mind
              </motion.p>
            </motion.div>
          </div>
          
          <div className="absolute bottom-10 animate-bounce hidden md:block">
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-primary rounded-full" />
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section ref={visionRef} className="max-w-4xl mx-auto px-6 py-40 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Pioneering the <span className="text-primary">Future</span> of Engineering
          </h2>
          <p className="text-xl text-accent/70 leading-relaxed mb-12">
            Trajectory is more than just a college fest; it's a testament to the relentless spirit of innovation that defines mechanical engineering. Born from the desire to bridge theory and practice, we bring together the brightest minds to solve the challenges of tomorrow.
          </p>
          <div className="h-[2px] w-24 bg-primary mx-auto opacity-50" />
        </section>

        {/* The Grid Section */}
        <section className="w-full py-20">
          <div className="max-w-7xl mx-auto px-6 mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
              LIMITLESS <span className="text-primary">AVENUES</span>
            </h2>
          </div>
          <About />
        </section>

        {/* Footer */}
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AbtPage;
