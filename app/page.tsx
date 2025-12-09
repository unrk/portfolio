"use client";

import Link from "next/link";
import { useMusicPlayer } from "./context/MusicContext";
import { Github, Instagram, Music2, Disc3 } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const { openPlayer } = useMusicPlayer();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Developer", "Designer", "Photographer", "Music Lover"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [words.length]);
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/unrk",
      hoverColor: 'oklch(0.85 0.15 85)',
      icon: <Github className="w-6 h-6" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/felixsecretement_",
      hoverColor: 'oklch(0.85 0.15 85)',
      icon: <Instagram className="w-6 h-6" />,
    },
    {
      name: "AppleMusic",
      url: "https://music.apple.com/profile/memoir",
      hoverColor: 'oklch(0.85 0.15 85)',
      icon: <Music2 className="w-6 h-6" />,
    },
    {
      name: "Fav Music",
      url: "#",
      hoverColor: 'oklch(0.85 0.15 85)',
      isAction: true,
      icon: <Disc3 className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-black select-none">
        
        {/* Hero Section / Landing Page */}
        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-zinc-50 sm:text-6xl md:text-7xl">
            Hey, my name is Felix <br />
            and I&apos;m a{" "}
            <span 
              key={currentWordIndex}
              className="inline-block animate-fadeInUp"
              style={{ color: 'oklch(0.85 0.15 85)' }}
            >
              {words[currentWordIndex]}
            </span>
          </h1>
          <p className="mb-12 max-w-2xl text-lg text-zinc-50/70 sm:text-xl">
            My name is Félix, I love photography, design, web development and cybersecurity.
          </p>

          {/* Social Links - Bento Grid */}
          <div className="mb-12 grid grid-cols-2 gap-4 w-full max-w-md">
            {socials.map((social) => {
              const isAction = 'isAction' in social && social.isAction;
              
              if (isAction) {
                return (
                  <button
                    key={social.name}
                    onClick={openPlayer}
                    className="group flex flex-col items-center justify-center gap-3 p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl transition-all duration-300 text-zinc-50"
                    style={{
                      ['--hover-color' as any]: social.hoverColor,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = social.hoverColor;
                      e.currentTarget.style.borderColor = social.hoverColor;
                      e.currentTarget.style.color = 'black';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(24, 24, 27, 0.5)';
                      e.currentTarget.style.borderColor = 'rgb(39, 39, 42)';
                      e.currentTarget.style.color = 'rgb(250, 250, 250)';
                    }}
                  >
                    {social.icon}
                    <span className="font-medium text-sm">{social.name}</span>
                  </button>
                );
              }

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center gap-3 p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl transition-all duration-300 text-zinc-50 "
                  style={{
                    ['--hover-color' as any]: social.hoverColor,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = social.hoverColor;
                    e.currentTarget.style.borderColor = social.hoverColor;
                    e.currentTarget.style.color = 'black';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(24, 24, 27, 0.5)';
                    e.currentTarget.style.borderColor = 'rgb(39, 39, 42)';
                    e.currentTarget.style.color = 'rgb(250, 250, 250)';
                  }}
                >
                  {social.icon}
                  <span className="font-medium text-sm">{social.name}</span>
                </a>
              );
            })}
          </div>

          {/* Projects Button */}
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-lg"
            style={{ 
              backgroundColor: 'oklch(0.85 0.15 85)', 
              color: 'oklch(0.2 0.05 85)'
            }}
          >
            View My Projects
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </section>
    </div>
  );
}
