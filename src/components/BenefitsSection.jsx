import React from "react";

const benefits = [
  { title: "Top Security", iconColor: "bg-lime-400", position: "top-0 left-1/2 -translate-x-1/2" },
  { title: "Fast Speed", iconColor: "bg-purple-400", position: "top-1/4 left-0 md:top-1/4 md:left-0 -translate-y-1/2" },
  { title: "Fast Transactions", iconColor: "bg-gray-800", position: "top-1/4 right-0 md:top-1/4 md:right-0 -translate-y-1/2" },
  { title: "Cloud Sync", iconColor: "bg-lime-400", position: "bottom-1/4 left-0 md:bottom-1/4 md:left-0 translate-y-1/2" },
  { title: "Real-Time Alerts", iconColor: "bg-purple-400", position: "bottom-1/4 right-0 md:bottom-1/4 md:right-0 translate-y-1/2" },
  { title: "Multi-Device Access", iconColor: "bg-purple-400", position: "bottom-0 left-1/3 md:bottom-0 md:left-1/3" },
  { title: "Budget Insights", iconColor: "bg-lime-400", position: "bottom-0 right-1/3 md:bottom-0 md:right-1/3" },
  { title: "Customizable Dashboards", iconColor: "bg-gray-800", position: "bottom-0 left-1/2 -translate-x-1/2" },
];

export default function BenefitsSection() {
  return (
    <section className="relative py-54 px-6 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Center content */}
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="text-lime-400 font-bold mb-2 tracking-widest">BENEFITS</p>
        <h3 className="text-4xl md:text-5xl font-bold mb-4">More than a management tool</h3>
        <p className="text-gray-300 mb-8">
          Our app offers a range of tools designed to help you stay organized, make smarter financial decisions, and achieve your financial goals.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#pricing"
            className="px-6 py-3 bg-lime-400 rounded-full font-semibold text-black hover:opacity-90 transition"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="px-6 py-3 border border-lime-400 rounded-full font-semibold hover:bg-lime-400 hover:text-black transition"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Benefit bubbles */}
      <div className="absolute inset-0">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className={`absolute flex items-center gap-3 p-4 rounded-3xl bg-gray-800 shadow-lg transition-transform hover:scale-105 ${item.position} text-sm md:text-base`}
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${item.iconColor} flex-shrink-0`}>
              <span className="text-white font-bold text-lg">{item.title.charAt(0)}</span>
            </div>
            <span className="whitespace-nowrap">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
