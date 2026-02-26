"use client";

import { useState, useEffect } from "react";
import Loading from "@/app/loading";

export default function EntryGate({ children }: { children: React.ReactNode }) {
  const [isEntryComplete, setIsEntryComplete] = useState(false);

  useEffect(() => {
    // Mandatory Entry Sequence (Singularity Gate)
    // 2.5 seconds to smooth load and provide premium intro
    const timer = setTimeout(() => {
      setIsEntryComplete(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isEntryComplete) {
    return <Loading />;
  }

  return <>{children}</>;
}
