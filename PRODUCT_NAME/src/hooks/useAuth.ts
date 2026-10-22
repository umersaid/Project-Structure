import { useMemo } from "react";
import { useAtomValue } from "jotai";
import { sessionAtom } from "@/atoms";

export function useAuth() {
  const session = useAtomValue(sessionAtom);

  return useMemo(
    () => ({
      isAuthenticated: Boolean(session.accessToken),
      userId: session.userId,
    }),
    [session.accessToken, session.userId]
  );
}
