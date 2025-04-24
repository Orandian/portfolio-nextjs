"use client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
  onClose: () => void;
  width?:
    | "sm"
    | "md"
    | "base"
    | "large"
    | "extralarge"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl"
    | "10xl";
  mode?: "mobile" | "pc" | "both";
}

const Modal = ({
  isOpen,
  children,
  onClose,
  width = "base",
}: ModalProps) => {
  const widthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    base: "max-w-[300px]",
    large: "max-w-lg",
    extralarge: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    "8xl": "max-w-8xl",
    "9xl": "max-w-9xl",
    "10xl": "max-w-10xl",
    full: "max-w-full",
    screen: "max-w-screen-lg",
  };
  const modalWidthClass = widthClasses[width] || widthClasses.base;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className={`rounded-lg shadow-lg w-full ${modalWidthClass} relative transform transition-transform duration-300 scale-95`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
