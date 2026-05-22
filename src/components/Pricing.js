export default function Pricing({ setSelectedPlan }) {

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);

    document
      .getElementById("audit-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="bg-gradient-to-b from-white to-gray-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-sm">
            Simple, Transparent Pricing
          </div>

          <h2 className="mt-4 text-4xl font-black text-gray-900 md:text-5xl">
            Pricing Plans
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Get actionable website audit reports in 24–48 hours.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-10 md:grid-cols-2">

          {/* BASIC */}
          <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="inline-flex rounded-full bg-gray-100 px-4 py-1 text-sm font-semibold text-gray-700">
              Starter
            </div>

            <h3 className="mt-6 text-3xl font-black text-gray-900">
              Basic Audit
            </h3>

            <p className="mt-6 text-6xl font-black text-black">
              $19
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li>✔ Performance analysis</li>
              <li>✔ Basic SEO review</li>
              <li>✔ UX / conversion insights</li>
              <li>✔ Top 3–5 issues</li>
              <li>✔ Plain English suggestions</li>
            </ul>

            <button
              onClick={() => handleSelectPlan("basic")}
              className="mt-10 w-full rounded-2xl bg-black py-4 font-semibold text-white transition hover:bg-gray-800"
            >
              Choose Basic
            </button>
          </div>

          {/* PRO */}
          <div className="relative overflow-hidden rounded-3xl bg-black p-10 text-white shadow-2xl transition duration-300 hover:-translate-y-2">

            <div className="absolute right-6 top-6 rounded-full bg-white px-4 py-1 text-xs font-bold tracking-wide text-black">
              MOST POPULAR
            </div>

            <div className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-white">
              Professional
            </div>

            <h3 className="mt-6 text-3xl font-black">
              Detailed Audit
            </h3>

            <p className="mt-6 text-6xl font-black">
              $49
            </p>

            <ul className="mt-10 space-y-4 text-gray-200">
              <li>✔ Everything in Basic</li>
              <li>✔ Deep SEO structure analysis</li>
              <li>✔ Mobile usability review</li>
              <li>✔ Conversion optimization insights</li>
              <li>✔ Priority fix roadmap</li>
            </ul>

            <button
              onClick={() => handleSelectPlan("detailed")}
              className="mt-10 w-full rounded-2xl bg-white py-4 font-semibold text-black transition hover:bg-gray-200"
            >
              Choose Detailed
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}