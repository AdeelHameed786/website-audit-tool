export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gray-200/40 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-28 text-center lg:py-36">
        
        {/* Pill */}
        <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-base font-medium text-gray-700 shadow-sm">
          Website Audits for Businesses, Freelancers & Ecommerce Stores
        </div>

        {/* Heading */}
        <h1 className="mx-auto mt-8 text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">
          Discover What’s Hurting Your Website Performance & Conversions
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
          Professional website audit reports with actionable insights on
          performance, SEO, UX, mobile usability, and conversion optimization.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#audit-form"
            className="rounded-2xl bg-black px-8 py-4 text-lg font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
          >
            Get My Website Audit
          </a>

          <a
            href="#pricing"
            className="rounded-2xl border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition hover:bg-gray-50"
          >
            View Pricing
          </a>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-3xl font-black text-gray-900">24–48h</h3>
            <p className="mt-3 text-gray-600">
              Average report delivery time
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-3xl font-black text-gray-900">SEO + UX</h3>
            <p className="mt-3 text-gray-600">
              Actionable recommendations in plain English
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-3xl font-black text-gray-900">
              Mobile Focused
            </h3>
            <p className="mt-3 text-gray-600">
              Identify issues affecting mobile conversions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}