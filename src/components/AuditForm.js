"use client";

import { useState } from "react";

export default function AuditForm({ selectedPlan, setSelectedPlan }) {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [loading, setLoading] = useState(false);

  const planDetails = {
    basic: {
      name: "Basic Audit",
      price: "$19",
    },
    detailed: {
      name: "Detailed Audit",
      price: "$49",
    },
  };

  const currentPlan = planDetails[selectedPlan];

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan: selectedPlan,
          url,
          email,
          business,
        }),
      });

      await res.json();

      alert("Redirecting to payment...");
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="audit-form"
      className="bg-gradient-to-b from-gray-50 to-white py-28"
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-2xl md:p-14">
          {/* Heading */}
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-sm">
              Start Your Audit
            </div>

            <h2 className="mt-4 text-4xl font-black text-gray-900">
              Get Your Website Audit
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Enter your details below and receive a professional audit report
              with actionable recommendations.
            </p>
          </div>

          {/* Select Plan */}
          <div className="mt-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Select Your Plan
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {/* BASIC */}
              <button
                type="button"
                onClick={() => setSelectedPlan("basic")}
                className={`rounded-3xl border p-5 text-left transition-all ${
                  selectedPlan === "basic"
                    ? "border-black bg-black text-white shadow-xl"
                    : "border-gray-300 bg-white text-gray-900 hover:border-gray-500"
                }`}
              >
                <div className="flex flex-col">
                  {/* Left */}
                  <p
                    className={`text-sm font-medium ${
                      selectedPlan === "basic"
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    Starter
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-3">
                    <h3
                      className={`text-xl font-black whitespace-nowrap ${
                        selectedPlan === "basic"
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      Basic Audit
                    </h3>

                    <span
                      className={`text-3xl font-black ${
                        selectedPlan === "basic"
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      $19
                    </span>
                  </div>
                </div>
              </button>

              {/* DETAILED */}
              <button
                type="button"
                onClick={() => setSelectedPlan("detailed")}
                className={`relative rounded-3xl border p-5 text-left transition-all ${
                  selectedPlan === "detailed"
                    ? "border-black bg-black text-white shadow-xl"
                    : "border-gray-300 bg-white text-gray-900 hover:border-gray-500"
                }`}
              >
                {/* Badge */}
                <div className="absolute right-5 top-4 rounded-full bg-white px-3 py-1 text-[11px] font-bold tracking-wide text-black shadow-sm">
                  POPULAR
                </div>

                <div>
                  <p
                    className={`text-sm font-medium ${
                      selectedPlan === "detailed"
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    Professional
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-3">
                    <h3
                      className={`text-xl font-black whitespace-nowrap ${
                        selectedPlan === "detailed"
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      Detailed Audit
                    </h3>

                    <span
                      className={`text-3xl font-black ${
                        selectedPlan === "detailed"
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      $49
                    </span>
                  </div>
                </div>
              </button>
            </div>
            ;
          </div>

          {/* Form */}
          <div className="mt-2 space-y-5">
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              type="text"
              placeholder="Website URL"
              className="w-full rounded-2xl border border-gray-300 bg-white p-4 text-gray-900 outline-none transition focus:border-black focus:ring-4 focus:ring-gray-100"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              className="w-full rounded-2xl border border-gray-300 bg-white p-4 text-gray-900 outline-none transition focus:border-black focus:ring-4 focus:ring-gray-100"
            />

            <input
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              type="text"
              placeholder="Business Name (optional)"
              className="w-full rounded-2xl border border-gray-300 bg-white p-4 text-gray-900 outline-none transition focus:border-black focus:ring-4 focus:ring-gray-100"
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full rounded-2xl bg-black py-4 text-lg font-semibold text-white transition hover:bg-gray-800 disabled:opacity-60"
            >
              {loading
                ? "Redirecting..."
                : `Continue to Payment • ${currentPlan.price}`}
            </button>

            <p className="text-center text-sm text-gray-500">
              Secure checkout via Lemon Squeezy • No subscription required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
