"use client";

import { RealtimeOrSocketProvider } from "@/context/RealtimeOrSocketProvider";

export function MainProvider({ children }: { children: React.ReactNode }) {
  return <RealtimeOrSocketProvider>{children}</RealtimeOrSocketProvider>;
}
