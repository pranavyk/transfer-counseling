"use client";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#1e1208] border-b border-white/5 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-serif text-xl font-semibold text-[#faf7f0] tracking-tight">
          <svg className="w-6 h-6 text-[#7ab4d4] shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2"/>
            <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2"/>
            {[0,1,2,3,4,5,6,7].map(i => {
              const a = (i * 45 * Math.PI) / 180;
              return <line key={i} x1={24+7*Math.cos(a)} y1={24+7*Math.sin(a)} x2={24+19*Math.cos(a)} y2={24+19*Math.sin(a)} stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>;
            })}
            {[0,1,2,3,4,5,6,7].map(i => {
              const a = (i * 45 * Math.PI) / 180;
              return <circle key={i} cx={24+22*Math.cos(a)} cy={24+22*Math.sin(a)} r="1.5" fill="currentColor"/>;
            })}
          </svg>
          P2<span className="text-[#7ab4d4]">Transfers</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="/deadlines" className="text-sm text-[#c9b8a8] hover:text-[#faf7f0] transition-colors">Timelines</a>
          <a href="/#services" className="text-sm text-[#c9b8a8] hover:text-[#faf7f0] transition-colors">Services</a>
          <a href="/#about" className="text-sm text-[#c9b8a8] hover:text-[#faf7f0] transition-colors">About</a>
          <a href="/#testimonials" className="text-sm text-[#c9b8a8] hover:text-[#faf7f0] transition-colors">Results</a>
          <a href="/#contact" className="bg-[#7ab4d4] text-[#1e1208] text-sm px-5 py-2.5 rounded-full font-semibold hover:bg-[#8fc4e4] transition-colors">
            Work with me
          </a>
        </div>
        <button className="md:hidden text-[#faf7f0]" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 px-6 py-4 flex flex-col gap-4 bg-[#1e1208]">
          <a href="/deadlines" onClick={() => setOpen(false)} className="text-sm text-[#c9b8a8]">Timelines</a>
          <a href="/#services" onClick={() => setOpen(false)} className="text-sm text-[#c9b8a8]">Services</a>
          <a href="/#about" onClick={() => setOpen(false)} className="text-sm text-[#c9b8a8]">About</a>
          <a href="/#testimonials" onClick={() => setOpen(false)} className="text-sm text-[#c9b8a8]">Results</a>
          <a href="/#contact" onClick={() => setOpen(false)} className="bg-[#7ab4d4] text-[#1e1208] text-sm px-5 py-2.5 rounded-full font-semibold text-center">
            Work with me
          </a>
        </div>
      )}
    </nav>
  );
}
