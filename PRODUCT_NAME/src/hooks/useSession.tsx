import { useAtom } from "jotai";
import { sessionAtom } from "@/atoms";

export function useSession() {
  const [session, setSession] = useAtom(sessionAtom);

  function clearSession() {
    setSession({ userId: null, accessToken: null });
  }

  return { session, setSession, clearSession };
}
