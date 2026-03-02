"use client";

import MarqueeCard, {Card} from "./MarqueeCard";
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);


export default function MarqueeSection () {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const [active, setActive] = useState(5);

  const next = () => {
  setActive((prev) => (prev + 1) % 10);
};

const prev = () => {
  setActive((prev) => (prev - 1 + 10) % 10);
};


  useGSAP(() => {
  const cards = gsap.utils.toArray(".card");
  const total = cards.length;

  cards.forEach((card: any, index) => {
    let offset = index - active;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    gsap.to(card, {
      x: offset * 60,
      scale: 1 - Math.abs(offset) * 0.1,
      opacity: 1 - Math.abs(offset) * 0.2,
      zIndex: 100 - Math.abs(offset),
      duration: 0.6,
      ease: "power3.out"
    });
  });
}, [active]);


useEffect(() => {
  gsap.to("#heading", {
    y: -200,
    opacity: 1,
    duration: 1,
    color: "rgba(0,0,255,0.6)",
    scrollTrigger: {
      trigger: "#heading",
      start: "top 80%",
    },
    ease: "power2.out",
  });

  gsap.to("#cards", {
    y:0,
    opacity:1,
    duration:2,
    scrollTrigger:{
      trigger:"#cards",
      start: "top 90%",
    },
    ease: "power3.out",
  });

}, [pathname]);

  const events: Card[] = [
  {
    id: "Inaugraiton Ceremony",
    title: "",
    image: "12",
    description: "With Prof. Suman Chakraborty and Swarnendu Sen",
    index: 0,
    color: "rgba(255,255,255,0.6)",
  },
  {
    id: "Inaugration Ceremony",
    title: "",
    image: "11",
    description: "At Mechanical Engg. Bulding Seminar Hall",
    index: 1,
    color: "",
  },
  {
    id: "CaseCom",
    title: "",
    image: "3",
    description: "Want to showcase your presentaion skills, we’ve got you covered.",
    index: 2,
    color: "",
  },
  {
    id: "Robo League",
    title: "",
    image: "4",
    description: "Buckle up, as you got to flaunt your Mechatronics skills as well",
    index: 3,
    color: "",
  },
  {
    id: "Cricket",
    title: "",
    image: "13",
    description: "Even if you are our beloved Prof, we welcome you <3",
    index: 4,
    color: "",
  },
  {
    id: "Hoverpod",
    title: "",
    image: "6",
    description: "Ever heard of Amphibious Vehicles? Come over",
    index: 5,
    color: "",
  },
  {
    id: "Tarka Vitarka",
    title: "",
    image: "14",
    description: "Good at Debating? We might have something special for you",
    index: 6,
    color: "",
  },
  {
    id: "Model Matrix",
    title: "",
    image: "8",
    description: "Wow! You love designing? Then what are u waiting for?",
    index: 7,
    color: "",
  },
  {
    id: "Prot-egg-t",
    title: "",
    image: "9",
    description: "Save the falling egg from crashing. We'll be waiting...",
    index: 8,
    color: "",
  },
  {
    id: "Hydroblaster",
    title: "",
    image: "2",
    description: "Flex your Knowledge of Fluid Dynamics",
    index: 9,
    color: "",
  },
  
];
  return (
    <div
  className="
    relative w-full h-[520px]
    flex items-center justify-evenly
    overflow-hidden
    bg-gradient-to-tr from-sky-900/30 via-sky-800/20 to-sky-700/10
    backdrop-blur-3xl
    shadow-[0_0_30px_rgba(14,165,233,0.3)]

    border-t-2 border-b-2 border-sky-300/20

    before:absolute before:top-0 before:left-0
    before:h-full before:w-[2px]
    before:bg-gradient-to-b
    before:from-transparent before:via-sky-400 before:to-transparent
    before:opacity-60

    after:absolute after:top-0 after:right-0
    after:h-full after:w-[2px]
    after:bg-gradient-to-b
    after:from-transparent after:via-sky-400 after:to-transparent
    after:opacity-60
  "
  style={{
    boxShadow: `0 0 120px rgba(14,165,233,0.25)`,
  }}
>

      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-sky-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div id="heading" className="
    opacity-0
    absolute
    z-10
    text-center
    px-2 py-2
    rounded-2xl
    backdrop-blur-xl
    bg-white/5
    border border-white/10
    shadow-[0_0_40px_rgba(14,165,233,0.25)]
    before:absolute before:inset-0
    before:rounded-2xl
    before:bg-gradient-to-r
    before:from-sky-400/30
    before:via-transparent
    before:to-purple-500/20
    before:blur-xl
    before:-z-10
  ">
      <h2 className="text-4xl font-bold tracking-wide text-sky-100 drop-shadow-[0_0_15px_rgba(14,165,233,0.6)]">
        Previous <span className="font-extrabold text-cyan-400">Missions</span>
      </h2>
      <p className="mt-4 text-sky-400/70 max-w-2xl mx-auto">
        Push your <span className="text-cyan-300 font-bold">LIMITS</span> with Brand new enhanced edition of <span className="text-cyan-500 font-bold">TRAJECTORY_2k26</span>
      </p>
    </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="hover:cursor-pointer h-12 w-12 text-sky-400 rounded-full bg-sky-900/40 backdrop-blur-md border border-sky-400/30 flex items-center justify-center transition-all duration-300 hover:bg-sky-400 hover:text-white hover:scale-110 hover:shadow-[0_0_25px_rgba(14,165,233,0.7)] active:scale-95 z-50"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      {/* Card Stage */}
      <div
        ref={containerRef}
        id="cards"
        className="opacity-0 translate-y-20 relative w-[70rem] h-ful flex items-center justify-center perspective-distant mt-30"
      >
        {events.map((event: any, index: number) => (
          <div key={index} className="card absolute">
            <MarqueeCard event={event} />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="hover:cursor-pointer h-12 w-12 text-sky-400 rounded-full bg-sky-900/40 backdrop-blur-md border border-sky-400/30 flex items-center justify-center transition-all duration-300 hover:bg-sky-400 hover:text-white hover:scale-110 hover:shadow-[0_0_25px_rgba(14,165,233,0.7)] active:scale-95 z-50"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};