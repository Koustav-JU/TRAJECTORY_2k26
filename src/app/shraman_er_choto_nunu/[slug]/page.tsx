"use client";


import { notFound } from "next/navigation";
import { use } from "react";
import { events } from "@/app/data/events";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Event ({params,}:{params: Promise<{slug: string}>;}) {
  const {slug} = use(params);
  const event = events.find((e)=> e.slug === slug)

  const containerRef = useRef<HTMLDivElement>(null)

  if(!event) notFound();

  useGSAP(()=>{

  })
  return(
      <>
  <div
    ref={containerRef}
    className="grid 
               grid-cols-1 
               md:grid-cols-[0.85fr_1.15fr] 
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
    <div className="md:row-start-1 md:col-span-2 rounded-sm border-2 border-cyan-400 bg-vanta min-h-[160px]">
    </div>

    {/* Left Upper */}
    <div className="row-start-2 col-start-1 rounded-sm border-2 bg-vanta border-cyan-100 min-h-[300px]">
    </div>

    {/* Left Lower */}
    <div className="row-start-3 col-start-1 rounded-sm border-2 bg-vanta border-cyan-100 min-h-[180px]">
    </div>

    {/* Right Large Section */}
    <div className="col-start-2 row-span-2 rounded-sm border-2 bg-vanta border-cyan-100 min-h-[450px] overflow-y-scroll" style={{scrollbarWidth: "none"}}>
    </div>
  </div>
</>
  );

}
