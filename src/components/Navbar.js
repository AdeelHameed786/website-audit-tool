export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        
        {/* Logo */}
        <a
          href="#"
          className="text-3xl font-black tracking-tight text-[#0f172a]"
        >
          AuditPro
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <a
            href="#how"
            className="text-sm font-semibold text-gray-500 transition hover:text-black"
          >
            How It Works
          </a>

          <a
            href="#pricing"
            className="text-sm font-semibold text-gray-500 transition hover:text-black"
          >
            Pricing
          </a>

          <a
            href="#audit-form"
            className="text-sm font-semibold text-gray-500 transition hover:text-black"
          >
            Get Audit
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#audit-form"
          className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Start Audit
        </a>
      </div>
    </header>
  );
}