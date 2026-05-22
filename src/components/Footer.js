export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        <div className="text-center md:text-left">
          <h3 className="text-2xl font-black text-gray-900">AuditPro</h3>
          <p className="mt-2 text-gray-600">
            Website audit reports that improve performance & conversions.
          </p>
        </div>

        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <a href="#pricing" className="hover:text-black">Pricing</a>
          <a href="#audit-form" className="hover:text-black">Get Audit</a>
          <a href="#how" className="hover:text-black">How it works</a>
        </div>

      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        © 2026 AuditPro. All rights reserved.
      </div>
    </footer>
  );
}