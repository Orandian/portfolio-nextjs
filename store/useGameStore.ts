import { create } from "zustand";

interface GameStore {
  isGameMode: boolean;
  isConfirmModalOpen: boolean;
  toggleGameMode: () => void;
  setGameMode: (value: boolean) => void;
  toggleConfirmModal: () => void;
  setConfirmModal: (value: boolean) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  isGameMode: false,
  isConfirmModalOpen: false,
  toggleGameMode: () => set((state) => ({ isGameMode: !state.isGameMode })),
  setGameMode: (value) => set({ isGameMode: value }),
  toggleConfirmModal: () => set((state) => ({ isConfirmModalOpen: !state.isConfirmModalOpen })),
  setConfirmModal: (value) => set({ isConfirmModalOpen: value }),
}));
