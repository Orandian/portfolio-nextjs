import { create } from "zustand";

interface GameStore {
  isGameMode: boolean;
  toggleGameMode: () => void;
  setGameMode: (value: boolean) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  isGameMode: false,
  toggleGameMode: () => set((state) => ({ isGameMode: !state.isGameMode })),
  setGameMode: (value) => set({ isGameMode: value }),
}));
