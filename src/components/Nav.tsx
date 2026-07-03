"use client";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#0b1f4a]/95 backdrop-blur-sm border-b border-white/10 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-lg font-bold text-white tracking-tight">
          P2<span className="text-yellow-400">Transfers</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="/#services" className="text-sm text-blue-200 hover:text-white transition-colors">Services</a>
          <a href="/#about" className="text-sm text-blue-200 hover:text-white transition-colors">About</a>
          <a href="/#testimonials" className="text-sm text-blue-200 hover:text-white transition-colors">Results</a>
          <a href="/deadlines" className="text-sm text-blue-200 hover:text-white transition-colors">Deadlines</a>
          <a href="/#contact" className="bg-yellow-400 text-[#0b1f4a] text-sm px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
            Book a Call
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4 bg-[#0b1f4a]">
          <a href="/#services" onClick={() => setOpen(false)} className="text-sm text-blue-200">Services</a>
          <a href="/#about" onClick={() => setOpen(false)} className="text-sm text-blue-200">About</a>
          <a href="/#testimonials" onClick={() => setOpen(false)} className="text-sm text-blue-200">Results</a>
          <a href="/deadlines" onClick={() => setOpen(false)} className="text-sm text-blue-200">Deadlines</a>
          <a href="/#contact" onClick={() => setOpen(false)} className="bg-yellow-400 text-[#0b1f4a] text-sm px-4 py-2 rounded-lg font-semibold text-center">
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
