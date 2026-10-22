import { atom } from "jotai";

export type SessionState = {
  userId: string | null;
  accessToken: string | null;
};

export const sessionAtom = atom<SessionState>({
  userId: null,
  accessToken: null,
});
