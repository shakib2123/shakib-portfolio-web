"use client";
import { createContext, FC, ReactNode, useContext, useState } from "react";

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted((prev) => {
      const newMuteState = !prev;

      const mediaElements =
        document.querySelectorAll<HTMLMediaElement>("audio, video");
      mediaElements.forEach((media) => {
        media.muted = newMuteState;
      });

      return newMuteState;
    });
  };

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) throw new Error("useSound must be used within a SoundProvider");
  return context;
};
