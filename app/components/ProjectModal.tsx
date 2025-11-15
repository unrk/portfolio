"use client";

import { useEffect } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  longDescription?: string;
  images: string[];
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  longDescription,
  images,
}: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-black border border-zinc-800 p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-2xl font-bold text-zinc-100 transition-colors hover:bg-zinc-700"
        >
          ×
        </button>

        <h2 className="mb-4 text-3xl font-bold text-zinc-50">
          {title}
        </h2>
        
        <p className="mb-6 text-lg text-zinc-400">
          {description}
        </p>

        {longDescription && (
          <p className="mb-8 text-base leading-relaxed text-zinc-300">
            {longDescription}
          </p>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800"
            >
              <img
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
