"use client";
import { useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/s-logo.png";

export default function Navbar() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbar!.classList.add(
          "sticky",
          "top-0",
          "bg-black/20",
          "shadow-md",
          "transition-all",
          "duration-300"
        );
      } else {
        navbar!.classList.remove("sticky", "top-0", "bg-white", "shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="navbar" className="py-2">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-16">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
