"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypeWriter() {
  return (
    <>
      <TypeAnimation
        sequence={[
          "Frontend Developer",
          1000,
          "Backend Developer",
          1000,
          "Fullstack Developer",
          1000,
          "Professional Coder",
          1000,
        ]}
        wrapper="span"
        speed={70}
        repeat={Infinity}
      />
    </>
  );
}
