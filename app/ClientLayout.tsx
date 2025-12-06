"use client";

import { MusicProvider } from "./context/MusicContext";
import MusicPlayer from "./components/MusicPlayer";
import { useMusicPlayer } from "./context/MusicContext";

function MusicPlayerWrapper() {
  const { isPlayerOpen, closePlayer } = useMusicPlayer();
  return <MusicPlayer isOpen={isPlayerOpen} onClose={closePlayer} />;
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MusicProvider>
      {children}
      <MusicPlayerWrapper />
    </MusicProvider>
  );
}
