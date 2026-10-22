import { atom } from "jotai";

export type UiState = {
  isSidebarOpen: boolean;
  isBusy: boolean;
};

export const uiAtom = atom<UiState>({
  isSidebarOpen: true,
  isBusy: false,
});
