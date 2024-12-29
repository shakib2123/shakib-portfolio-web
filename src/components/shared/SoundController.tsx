"use client";
import { useSound } from "@/context/sound.context";
import { FaVolumeHigh } from "react-icons/fa6";
import { IoVolumeMute } from "react-icons/io5";

export default function SoundController() {
  const { isMuted, toggleMute } = useSound();

  return (
    <button
      onClick={toggleMute}
      className="fixed bg-gradient-1 bottom-24 left-8 z-50 shadow-custom-shadow-1 rounded-full p-4"
    >
      {isMuted ? (
        <IoVolumeMute className="text-xl" />
      ) : (
        <FaVolumeHigh className="text-xl text-primary" />
      )}
    </button>
  );
}
