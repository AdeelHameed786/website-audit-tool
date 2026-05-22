"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import AuditForm from "@/components/AuditForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState("detailed");

  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Pricing setSelectedPlan={setSelectedPlan} />
      <AuditForm selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
      <Footer />
    </main>
  );
}