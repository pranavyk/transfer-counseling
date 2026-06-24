export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-gray-900 text-gray-400 text-sm">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-semibold text-white">TransferPro</div>
        <div className="text-center">
          Independent transfer counseling · Cupertino, CA · Serving Bay Area students
        </div>
        <div>
          <a href="#contact" className="hover:text-white transition-colors">Book a Call</a>
        </div>
      </div>
    </footer>
  );
}
