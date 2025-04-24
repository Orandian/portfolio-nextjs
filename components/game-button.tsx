"use client";

import { Joystick } from "lucide-react";
import { useGameStore } from "@/store/useGameStore";

const GameButton = () => {
  const { isGameMode, setConfirmModal, setGameMode } = useGameStore();

  return (
    <button
      onClick={() => {
        if (isGameMode) {
          setGameMode(false);
        } else {
          setConfirmModal(true);
        }
      }}
      className={`fixed top-4 right-4 z-50 p-3 rounded-full border transition-all cursor-pointer ${
        isGameMode ? "bg-red-950 border-red-800" : "bg-gray-950 border-gray-600"
      }`}
    >
      <Joystick className="w-6 h-6 text-white" />
    </button>
  );
};

export default GameButton;

