"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/s-logo.png";
import Link from "next/link";
import { useSound } from "@/context/sound.context";

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const { isMuted } = useSound();

  const playHoverSound = () => {
    if (!isMuted) {
      const audio = new Audio("/audio/link-hover-and-click.wav");
      audio.play();
    }
  };

  const playClickSound = () => {
    if (!isMuted) {
      const audio = new Audio("/audio/button-click-sound.mp3");
      audio.play();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 py-4 h-[80px] transition-transform duration-300 ${
          scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
        } ${
          scrollY === 0
            ? "bg-transparent shadow-none backdrop-blur-none"
            : "bg-black/20 shadow-xl backdrop-blur-md"
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-2 lg:px-0">
          <Link
            href={"/"}
            onClick={playClickSound}
            className="flex items-center gap-1"
          >
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="w-8"
            />
            <h1 className="text-2xl font-semibold">SHAKIB</h1>
          </Link>

          <div>
            <Link
              href={"/"}
              onMouseEnter={playHoverSound}
              className="p-2 hover:text-primary"
            >
              Home
            </Link>
          </div>
        </div>
      </nav>
      <div className="h-[80px]"></div>
    </>
  );
}
