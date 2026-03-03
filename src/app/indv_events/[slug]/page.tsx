import { events } from "@/app/data/events";
import { notFound } from "next/navigation";
import SlugComponent from "@/components/slugComponent";

export default async function Event ({params,}:{params: Promise<{slug: string}>;}) {
  const resolvedParameter = await params;
  const event = events.find((e)=> e.slug === resolvedParameter.slug);

  if (!event) return notFound();
  
  return event.title; 
}
