"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import logo from "@/assets/s-logo.png";
import Link from "next/link";
import { useSound } from "@/context/sound.context";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const { isMuted } = useSound();

  const [path, setPath] = useState("");

  const url = typeof window !== "undefined" ? window.location.href : "";

  useEffect(() => {
    if (url.includes("#")) {
      const hashPart = url.split("#")[1];
      setPath(hashPart);
    } else {
      setPath("");
    }
  }, [url, path, setPath]);

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

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
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
        id="home"
        className={`fixed top-0 left-0 w-full z-50 py-4 h-[80px] transition-transform duration-300 ${
          scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
        } ${
          scrollY === 0
            ? "bg-transparent shadow-none backdrop-blur-none"
            : "bg-black/15 shadow-xl backdrop-blur-md"
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
              className="w-6 md:w-8"
            />
            <h1 className="text-xl md:text-2xl font-semibold">SHAKIB</h1>
          </Link>

          <MobileNavbar />
          <div className="hidden md:flex items-center gap-4">
            <Link
              href={"/#home"}
              onMouseEnter={playHoverSound}
              className={`p-2 hover:text-primary text-sm ${
                path === "home" ? "text-white" : ""
              }`}
            >
              HOME
            </Link>
            <Link
              href={`/#skills`}
              onMouseEnter={playHoverSound}
              className={`p-2 hover:text-primary text-sm ${
                path === "skills" ? "text-white" : ""
              }`}
            >
              SKILLS
            </Link>
            <Link
              href={`/#projects`}
              onMouseEnter={playHoverSound}
              className={`p-2 hover:text-primary text-sm ${
                path === "projects" ? "text-white" : ""
              }`}
            >
              PROJECTS
            </Link>
            <Link
              href={`/#blog`}
              onMouseEnter={playHoverSound}
              className={`p-2 hover:text-primary text-sm ${
                path === "blog" ? "text-white" : ""
              }`}
            >
              BLOG
            </Link>
            <Link
              href={`/#contact`}
              onMouseEnter={playHoverSound}
              className={`p-2 hover:text-primary text-sm ${
                path === "contact" ? "text-white" : ""
              }`}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </nav>
      <div className="h-[80px]"></div>
    </>
  );
}
