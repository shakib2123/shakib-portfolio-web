"use client";
import { useSound } from "@/context/sound.context";
import Link from "next/link";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function SocialLinks() {
  const { isMuted } = useSound();

  const playClickSound = () => {
    if (!isMuted) {
      const audio = new Audio("/audio/button-click-sound.mp3");
      audio.play();
    }
  };
  return (
    <div className="w-full flex gap-7 items-center mt-[25px]">
      <Link
        href={"/"}
        onClick={playClickSound}
        className="text-xl text-secondary hover:text-primary hover:-translate-y-1 hover:bg-gradient-to-r from-black/30 to-black/30 transition-all duration-300 rounded-lg bg-gradient-1 p-4 shadow-custom-shadow-1"
      >
        <FiFacebook />
      </Link>
      <Link
        href={"/"}
        onClick={playClickSound}
        className="text-xl text-secondary hover:text-primary hover:-translate-y-1 hover:bg-gradient-to-r from-black/30 to-black/30 transition-all duration-300 rounded-lg bg-gradient-1 p-4 shadow-custom-shadow-1"
      >
        <FiTwitter />
      </Link>
      <Link
        href={"/"}
        onClick={playClickSound}
        className="text-xl text-secondary hover:text-primary hover:-translate-y-1 hover:bg-gradient-to-r from-black/30 to-black/30 transition-all duration-300 rounded-lg bg-gradient-1 p-4 shadow-custom-shadow-1"
      >
        <FiLinkedin />
      </Link>
    </div>
  );
}
