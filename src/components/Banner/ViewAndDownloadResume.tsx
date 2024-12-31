"use client";

import { useSound } from "@/context/sound.context";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function ViewAndDownloadResume() {
  const { isMuted } = useSound();

  const playClickSound = () => {
    if (!isMuted) {
      const audio = new Audio("/audio/button-click-sound.mp3");
      audio.play();
    }
  };

  return (
    <section className="pt-10 lg:pt-20 flex items-center gap-3 md:gap-6">
      <Link href="/files/demo.jpeg" target="_blank">
        <Button
          onClick={playClickSound}
          className="bg-[#212428] p-6 md:p-8 text-primary text-medium transition-all duration-100 hover:bg-black/30 shadow-custom-shadow-1 hover:scale-105"
        >
          View Resume
        </Button>
      </Link>

      <Link href="/files/demo.jpeg" download>
        <Button
          onClick={playClickSound}
          className="bg-[#212428] p-6 md:p-8 text-secondary text-medium transition-all duration-100 hover:bg-black/30 shadow-custom-shadow-1 hover:scale-105"
        >
          Download Resume
        </Button>
      </Link>
    </section>
  );
}
