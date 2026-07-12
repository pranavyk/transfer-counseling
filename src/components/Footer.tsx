export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-[#e8d5b5] bg-[#f0e8d8]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#b0927a]">
        <div className="font-serif font-semibold text-[#2a1408]">
          P2<span className="text-[#7ab4d4]">Transfers</span>
        </div>
        <div className="text-center text-xs">
          Independent transfer counseling · Sunnyvale, CA · Not affiliated with the University of California
        </div>
        <a href="/#contact" className="hover:text-[#2a1408] transition-colors">Work with me →</a>
      </div>
    </footer>
  );
}
