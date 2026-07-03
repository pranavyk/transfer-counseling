export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-blue-100 bg-[#dde6f4]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-400">
        <div className="font-serif font-semibold text-[#0b1f4a]">
          P2<span className="text-yellow-500">Transfers</span>
        </div>
        <div className="text-center text-xs">
          Independent transfer counseling · Sunnyvale, CA · Not affiliated with the University of California
        </div>
        <a href="/#contact" className="hover:text-[#0b1f4a] transition-colors">Work with me →</a>
      </div>
    </footer>
  );
}
