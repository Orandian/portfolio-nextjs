"use client";

import Modal from "./modal";
import { useGameStore } from "@/store/useGameStore";

const ConfirmBox = () => {
  const { isConfirmModalOpen, toggleConfirmModal, setGameMode } =
    useGameStore();
  return (
    <Modal isOpen={isConfirmModalOpen} onClose={toggleConfirmModal}>
      <div className="border rounded-lg py-6 px-4 border-gray-600 bg-gray-950">
        <p className="text-xl font-semibold mb-10 text-white text-center">
          Game mode?
        </p>
        <div className="flex justify-around">
          <button
            onClick={toggleConfirmModal}
            className="w-[80px] py-2 text-white rounded-md cursor-pointer border-gray-600 border text-sm"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setGameMode(true);
              toggleConfirmModal();
            }}
            className="w-[80px] py-2 text-white rounded-md cursor-pointer border-gray-600 border bg-gray-900 text-sm"
          >
            Yes
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmBox;
