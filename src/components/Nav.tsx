"use client";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold text-gray-900">
          TransferPro
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Services</a>
          <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</a>
          <a href="#testimonials" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Results</a>
          <a href="#contact" className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Book a Call
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-4 bg-white">
          <a href="#services" onClick={() => setOpen(false)} className="text-sm text-gray-600">Services</a>
          <a href="#about" onClick={() => setOpen(false)} className="text-sm text-gray-600">About</a>
          <a href="#testimonials" onClick={() => setOpen(false)} className="text-sm text-gray-600">Results</a>
          <a href="#contact" onClick={() => setOpen(false)} className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg text-center">
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
