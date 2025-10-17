import React from "react";
import { Shield, Zap, CreditCard, Cloud, Bell, Monitor, PieChart, LayoutDashboard } from "lucide-react";

const benefits = [
  { 
    title: "Top Security", 
    icon: Shield,
    iconColor: "bg-lime-400",
    position: "top-8 left-1/2 -translate-x-1/2"
  },
  { 
    title: "Fast Speed", 
    icon: Zap,
    iconColor: "bg-purple-400",
    position: "top-1/3 left-20 -translate-y-1/2"
  },
  { 
    title: "Fast Transactions", 
    icon: CreditCard,
    iconColor: "bg-gray-700",
    position: "top-1/3 right-20 -translate-y-1/2"
  },
  { 
    title: "Cloud Sync", 
    icon: Cloud,
    iconColor: "bg-lime-400",
    position: "top-1/2 left-16 -translate-y-1/2"
  },
  { 
    title: "Real-Time Alerts", 
    icon: Bell,
    iconColor: "bg-purple-400",
    position: "top-1/2 right-10 -translate-y-1/2"
  },
  { 
    title: "Multi-Device Access", 
    icon: Monitor,
    iconColor: "bg-purple-400",
    position: "bottom-24 left-40"
  },
  { 
    title: "Budget Insights", 
    icon: PieChart,
    iconColor: "bg-lime-400",
    position: "bottom-24 right-40"
  },
  { 
    title: "Customizable Dashboards", 
    icon: LayoutDashboard,
    iconColor: "bg-gray-700",
    position: "bottom-8 left-1/2 -translate-x-1/2"
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative min-h-screen py-20 px-6 text-white overflow-hidden" style={{
      background: 'radial-gradient(ellipse at center, rgba(88, 50, 120, 0.4) 0%, rgba(20, 20, 40, 0.95) 50%, rgba(10, 10, 20, 1) 100%), linear-gradient(180deg, #0a0a14 0%, #1a1a2e 50%, #0a0a14 100%)'
    }}>
      {/* Benefit bubbles positioned around center */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full max-w-6xl mx-auto">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className={`absolute flex items-center gap-3 py-3 px-5 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800 ${item.position}`}
            >
              <div className={`w-10 h-10 flex items-center justify-center rounded-full ${item.iconColor} flex-shrink-0`}>
                <item.icon className="w-5 h-5 text-gray-900" />
              </div>
              <span className="whitespace-nowrap text-sm font-medium pr-1">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center justify-center min-h-screen">
        <div className="flex items-center gap-2 mb-6">
          <div className="flex">
            <div className="w-1 h-1 bg-lime-400 rounded-full"></div>
            <div className="w-1 h-1 bg-lime-400 rounded-full ml-1"></div>
          </div>
          <p className="text-lime-400 font-semibold tracking-wide text-sm uppercase">Benefits</p>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
          More than<br />management tool
        </h2>
        
        <p className="text-gray-300 text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Our app offers a range of tools designed to help you stay organized, make smarter financial decisions, and achieve your financial goals.
        </p>
        
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="px-8 py-3 bg-lime-400 text-gray-900 rounded-full font-semibold hover:bg-lime-300 transition-all">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-purple-400 text-white rounded-full font-semibold hover:bg-purple-400/10 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}