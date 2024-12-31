"use client";

import { useSound } from "@/context/sound.context";
import { montserrat } from "@/fonts";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import logo from "@/assets/s-logo.png";
import Link from "next/link";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Footer() {
  const { isMuted } = useSound();

  const playClickSound = () => {
    if (!isMuted) {
      const audio = new Audio("/audio/button-click-sound.mp3");
      audio.play();
    }
  };

  const year = new Date().getFullYear();

  return (
    <section className="max-w-screen-xl mx-auto px-3 py-6">
      <Divider className="mb-4 bg-black" />

      <div className="flex justify-between items-center">
        <section className="flex items-center gap-1">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="w-6 md:w-8"
          />
          <h1
            className={`text-xl md:text-2xl text-secondary font-semibold  ${montserrat.className}`}
          >
            SHAKIB
          </h1>
        </section>

        <div className="w-full flex justify-end items-center gap-4">
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
      </div>

      <p className="text-gray-400 text-center mt-4 text-sm md:text-base">
        &copy; {year}. All rights reserved by Shakib Al Furqan.
      </p>
    </section>
  );
}
