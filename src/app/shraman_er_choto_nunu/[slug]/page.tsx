"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { events } from "@/app/data/events";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function Event ({params,}:{params: Promise<{slug: string}>;}) {
  const {slug} = use(params);
  const event = events.find((e)=> e.slug === slug)

  const containerRef = useRef<HTMLDivElement>(null)
  const borderRef1 = useRef<HTMLDivElement>(null)
  const borderRef2 = useRef<HTMLDivElement>(null)
  const borderRef3 = useRef<HTMLDivElement>(null)
  const toprowRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const underlineRef1 = useRef<HTMLDivElement>(null)
  const underlineRef2 = useRef<HTMLDivElement>(null)
  const underlineRef3 = useRef<HTMLDivElement>(null)
  const headingfooterRef = useRef<HTMLDivElement>(null)

  if(!event) notFound();
  
  useGSAP(()=>{
    gsap.from(borderRef1.current, {
      x:500,
      y:60,
      opacity: 0,
      delay: 0.2,
      duration: 0.8,
      ease: "power2.out",
    });

  gsap.from(borderRef2.current, {
    x:-500,
    y:-60,
    opacity: 0,
    delay: 0.2,
    duration: 0.8,
    ease: "power2.out",
  });
    gsap.to(borderRef3.current,{
      y: 3,
      opacity: 1,
      delay:1.2,
      duration:0.5,
      ease:"power2.out"
    });
    gsap.to(titleRef.current, {
      y:-5,
      opacity: 1,
      delay: 0.3,
      duration: 0.8,
      ease:"power3.out",
    });
    gsap.from(underlineRef1.current,{
      opacity:0,
      x:-100,
      delay:0.5,
      duration: 0.8,
    });
    gsap.from(underlineRef3.current,{
      opacity:0,
      x:100,
      delay:0.5,
      duration: 0.8,
    });
    gsap.to(underlineRef2.current,{
      opacity:1,
      scale:0.1,
      rotate:675,
      delay:1.2,
      duration: 1.5,
      ease:"power1.out"
    });
    gsap.to(headingfooterRef.current, {
    opacity:1,
    y: 15,
    duration:0.8,
    delay:0.5,
    ease:"power2.out",
  })
  },[]);
  

  return(
      <>
  <div
    ref={containerRef}
    className="grid 
               grid-cols-1 
               grid-rows-[0.17fr_0.6fr_0.2fr_0.1fr]
               sm:grid-rows-[0.2fr_1.5fr_0.2fr_0.1fr]
               md:grid-cols-[1.0fr_1.15fr]
               md:grid-rows-[0.5fr_3fr_0.2fr]
               gap-y-4 md:gap-y-2 md:gap-x-2
               w-full 
               max-w-7xl 
               mx-auto 
               px-6 
               py-30
               bg-transparent"
  >
    {/* Top Full Width Section */}
    <div
  ref={toprowRef}
  className="md:row-start-1 md:col-span-2 row-start-1 col-start-1 
  rounded-sm border-2 min-h-[160px] relative overflow-hidden shadow-[0_0_25px_rgba(0,255,255,0.15)]"
  style={{
    background: "#0f172a",
    border: "2px solid rgba(56,189,248,0.3)",
  }}
>
  <div className="h-full w-full flex justify-center items-center relative">

    {/* Top Left Corner */}
    <div
      ref={borderRef1}
      className="absolute top-3 left-3 w-10 h-7 
      border-l-4 border-t-4 border-primary/60 shadow-[-8px_-8px_10px_rgba(0,200,255,0.3)]"
    />

    {/* Bottom Right Corner */}
    <div
      ref={borderRef2}
      className="absolute bottom-3 right-3 w-10 h-7 
      border-r-4 border-b-4 border-primary/60 shadow-[8px_8px_10px_rgba(0,200,255,0.3)]"
    />

    {/* Badge */}
    <div
      ref={borderRef3}
      className="absolute top-3 right-3 opacity-0
      border border-primary/60 bg-emerald-100/20
      px-2 py-1 text-cyan-300 text-sm shadow-[0px_0px_10px_rgba(255,255,255,0.5)]"
    >
      🔧 Registrations Open
    </div>
    <div className="flex flex-col items-center justify-center">
      <div ref={titleRef} className="opacity-0 translate-y-15 relative capitalize font-extrabold text-cyan-100 text-3xl lg:text-4xl text-center">
        <h1>{event.title}</h1> 
      </div>
        <div className="absolute mt-2 mb-2 translate-y-4 flex justify-center items-center">
          <div ref={underlineRef1} className="h-[2px] w-40 bg-gradient-to-r translate-x-12 from-transparent via-cyan-400 to-cyan-400 
    shadow-[0_0_10px_rgba(0,255,255,0.7)] "/>
          <div ref={underlineRef2} className="mx-3 w-30 h-30 bg-cyan-400 opacity-0 shadow-[0_0_12px_rgba(0,255,255,0.9)]"/>
          <div ref={underlineRef3} className="h-[2px] w-40 bg-gradient-to-l -translate-x-12 from-transparent via-cyan-400 to-cyan-400 
    shadow-[0_0_10px_rgba(0,255,255,0.7)]"/>
        </div>
        <div ref={headingfooterRef} className="opacity-0 text-sm text-pink-200/80 font-semibold">
          <h3>Event Profile</h3>
        </div>
    </div>

  </div>
</div>

    {/* Left Upper */}
    <div className="relative row-start-2 col-start-1 rounded-sm bg-vanta shadow-[0_0_25px_rgba(0,255,255,0.15)] border-2 border-cyan-400/30 min-h-[300px] flex items-center justify-center">
      <div className="absolute h-[90%] w-[90%]">
        <Image
          src={event.image}
          fill
          alt={event.title}
          className="rounded-sm "
          />
    
      </div>
    </div>

    {/* Left Lower */}
    <div className="row-start-3 col-start-1 rounded-sm border-2 bg-vanta border-emerald-400/30 h-[180px] shadow-[0_0_25px_rgba(0,255,0,0.5)]">
      <div className="relative flex flex-col items-center justify-evenly h-full w-full">
        <button className="h-15 w-[90%] bg-vanta hover:cursor-pointer border-2 capitalize font-bold text-cyan-500 rounded-sm hover:text-emerald-400/80 transition-all duration-400 ease-in-out hover:scale-102 hover:-translate-y-0.5 hover:shadow-[0px_0px_10px_rgba(0,255,0,0.2)] active:scale-100" style={{
    background: "#0f172a",
    border: "2px solid rgba(56,189,248,0.3)",
  }}>
    Register Now !!! </button>
        <button className="h-15 w-[90%] bg-vanta hover:cursor-pointer border-2 capitalize font-bold text-cyan-500 rounded-sm transition-all duration-400 ease-in-out hover:scale-102 hover:text-emerald-300/80 hover:shadow-[0px_0px_10px_rgba(0,255,0,0.2)] hover:-translate-y-0.5 active:scale-100" style={{
    background: "#0f172a",
    border: "2px solid rgba(56,189,248,0.3)",
  }}>Get the Event Details</button>
      </div>
    </div>

    {/* Right Large Section */}
<div className="md:col-start-2 md:row-span-2 col-start-1 row-start-4 rounded-sm bg-vanta border border-cyan-400/30 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,255,0.08)] relative flex justify-center items-center">
  
  <div
    className="relative h-[95%] w-[95%] rounded-sm p-6 flex flex-col gap-6 "
  >

    {/* General Instructions */}
    <div className="border border-cyan-400/20 rounded-sm p-4
    bg-[#020617]/60 shadow-[0_0_10px_rgba(0,255,255,0.1)]">
      <h2 className="text-cyan-300 font-bold text-lg mb-3 tracking-wide">
        General Instructions
      </h2>

      <ul className="list-disc pl-5 text-cyan-100/80 text-sm space-y-2">
        {event.description}
      </ul>
    </div>

    {/* Team Size */}
    <div className="border border-cyan-400/20 rounded-sm p-4
    bg-[#020617]/60 shadow-[0_0_10px_rgba(0,255,255,0.1)]">
      <h2 className="text-cyan-300 font-bold text-lg mb-2 tracking-wide">
        Team Size
      </h2>

      <p className="ml-4 text-cyan-100/80 text-sm">
        {event.team_structure}
      </p>
    </div>

    {/* Prize Pool */}
    <div className="border border-cyan-400/20 rounded-sm p-4
    bg-[#020617]/60 shadow-[0_0_10px_rgba(255,215,0,0.1)]">
      <h2 className="text-cyan-300 font-bold text-lg mb-2 tracking-wide">
        Prize Pool
      </h2>

      <p className="text-yellow-300 text-xl font-bold tracking-wide">
        ₹5,000
      </p>
    </div>

    {/*Event Coordinators*/}
    <div className="border border-cyan-400/20 rounded-sm p-4
    bg-[#020617]/60 shadow-[0_0_10px_rgba(255,215,0,0.1)] mb-8">
      <h2 className="text-cyan-300 font-bold text-lg mb-2 tracking-wide">
        Event Coordinators:
      </h2>

      <p className="ml-4 text-cyan-100 tracking-wide">
        {event.event_coordinators}
      </p>
    </div>

  </div>

</div>
  </div>
</>
  );

}
