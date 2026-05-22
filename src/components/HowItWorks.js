const steps = [
  {
    number: "01",
    title: "Submit Website",
    description:
      "Enter your website URL, email address, and business information.",
  },
  {
    number: "02",
    title: "Choose Audit Plan",
    description:
      "Select the audit package that best matches your business needs.",
  },
  {
    number: "03",
    title: "Complete Payment",
    description:
      "Secure checkout via Lemon Squeezy with instant confirmation.",
  },
  {
    number: "04",
    title: "Receive Report",
    description:
      "Get a professional audit report delivered directly to your inbox.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="bg-gradient-to-b from-gray-50 to-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-sm">
            Simple Process
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
            How It Works
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            A simple 4-step process to receive a professional website audit
            packed with actionable improvements.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Number */}
              <div className="text-6xl font-black text-gray-300 transition group-hover:text-black">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}