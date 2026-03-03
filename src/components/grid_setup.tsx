"use client";
import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Grid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Ensure GSAP recalculates positions
    ScrollTrigger.refresh();

    const cards = Array.from(containerRef.current.children) as HTMLDivElement[];
    
    if (cards.length === 0) return;

    // Use fromTo for explicit state control
    gsap.fromTo(cards, 
      { 
        y: 40, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        }
      }
    );

  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className={cn(
        "grid w-full max-w-7xl mx-auto auto-rows-min md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6",
        className,
      )}
    >
      {children}
    </div>
  );
};


const Card = ({
  name,
  className,
  background,
  Icon,
  description,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // Theme styles with CSS transitions for performance
      "from-[#0B0F1A] to-[#111827] bg-linear-to-tr border-x-2 border-y-2 border-primary/20",
      "shadow-[15px_15px_20px_rgba(0,229,255,0.05)]",
      "transition-all duration-300 ease-out transform-gpu",
      "hover:scale-[1.02] hover:shadow-[15px_15px_30px_rgba(0,229,255,0.15)]",
      "hover:border-primary/40",
      className,
    )}
  >
    <div className="absolute inset-0 z-0">{background}</div>
    
    <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-transform duration-300 group-hover:-translate-y-1">
      <Icon className="h-12 w-12 text-primary transition-all duration-300 group-hover:text-accent group-hover:scale-110" />
      <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-primary">
        {name}
      </h3>
      <p className="max-w-lg text-white/70 transition-colors duration-300 group-hover:text-white">
        {description}
      </p>
    </div>

    {/* Subtle hover overlay */}
    <div className="pointer-events-none absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5" />
  </div>
);


export { Card, Grid };
