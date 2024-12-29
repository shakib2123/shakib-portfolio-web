"use client";

import { useSound } from "@/context/sound.context";
import React, { useState, useEffect } from "react";
import { MdOutlineArrowUpward } from "react-icons/md";
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isMuted } = useSound();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (!isMuted) {
      const audio = new Audio("/audio/back-to-top.mp3");
      audio.play();
    }
  };

  return (
    <button
      onClick={backToTop}
      className={
        isVisible
          ? "fixed bg-gradient-1 bottom-8 left-8 z-50 shadow-custom-shadow-1 rounded-full p-4 text-primary"
          : "hidden"
      }
    >
      <MdOutlineArrowUpward className="text-xl" />
    </button>
  );
};

export default BackToTopButton;
