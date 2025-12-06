"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface MusicContextType {
  isPlayerOpen: boolean;
  openPlayer: () => void;
  closePlayer: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  return (
    <MusicContext.Provider
      value={{
        isPlayerOpen,
        openPlayer: () => setIsPlayerOpen(true),
        closePlayer: () => setIsPlayerOpen(false),
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusicPlayer() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusicPlayer must be used within MusicProvider");
  }
  return context;
}
