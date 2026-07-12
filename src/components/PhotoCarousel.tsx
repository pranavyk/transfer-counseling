"use client";
import Image from "next/image";
import { useState } from "react";

const photos = [
  { src: "/pranav.jpg", alt: "Pranav" },
  { src: "/pranav.jpg", alt: "Pranav" },
  { src: "/pranav.jpg", alt: "Pranav" },
  { src: "/pranav.jpg", alt: "Pranav" },
];

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-12 px-6 bg-[#e8d5b5] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs text-[#b0927a] tracking-widest uppercase mb-6">The person behind the process</p>

        {/* Horizontal scroll strip */}
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="shrink-0 w-40 h-52 md:w-48 md:h-64 rounded-xl overflow-hidden relative ring-2 ring-[#2a1408]/10"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-center saturate-110"
              />
            </div>
          ))}
          {/* Placeholder slots for future photos */}
          {[1, 2].map((i) => (
            <div
              key={`placeholder-${i}`}
              className="shrink-0 w-40 h-52 md:w-48 md:h-64 rounded-xl border-2 border-dashed border-[#c4714a]/30 bg-[#faf7f0]/50 flex items-center justify-center"
            >
              <span className="text-[#c4714a]/40 text-xs text-center px-4">Add photo to /public/photos/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
