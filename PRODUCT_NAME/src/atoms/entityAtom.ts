import { atom } from "jotai";

export type EntityFilterState = {
  query: string;
  status: string;
};

export const entityAtom = atom<EntityFilterState>({
  query: "",
  status: "all",
});
