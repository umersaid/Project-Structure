"use client";

import { createContext, useMemo } from "react";

export type RealtimeContextValue = {
  isConnected: boolean;
};

export const RealtimeContext = createContext<RealtimeContextValue>({
  isConnected: false,
});

export function RealtimeOrSocketProvider({ children }: { children: React.ReactNode }) {
  // TODO: connect websocket or realtime transport.
  const value = useMemo(() => ({ isConnected: false }), []);

  return <RealtimeContext.Provider value={value}>{children}</RealtimeContext.Provider>;
}
