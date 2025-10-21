import React from "react";
import { Shield, Zap, CreditCard, Cloud, Bell, Monitor, PieChart, LayoutDashboard } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="relative py-20 px-6 text-white overflow-hidden" style={{
      background: 'radial-gradient(ellipse at center, #3A7C7A 0%, #3A7C7A 50%, rgba(10, 10, 20, 1) 100%), linear-gradient(180deg, #0a0a14 0%, #1a1a2e 50%, #0a0a14 100%)'
    }}>
      {/* Desktop bubble layout - UNCHANGED */}
      <div className="hidden lg:block absolute inset-0">
        <div className="relative w-full h-full max-w-6xl mx-auto">
          <div className="absolute top-13 left-1/2 -translate-x-1/2 flex items-center gap-3 py-3 px-5 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white flex-shrink-0">
              <Shield className="w-5 h-5 text-gray-900" />
            </div>
            <span className="whitespace-nowrap text-sm font-medium pr-1">Fast Response</span>
          </div>
          
          <div className="absolute top-1/4 left-25 -translate-y-1/2 flex items-center gap-3 py-3 px-5 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0">
              <Zap className="w-5 h-5 text-gray-900" />
            </div>
            <span className="whitespace-nowrap text-sm font-medium pr-1">Reliable</span>
          </div>
          
          <div className="absolute top-1/4 right-25 -translate-y-1/2 flex items-center gap-3 py-3 px-5 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 flex-shrink-0">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <span className="whitespace-nowrap text-sm font-medium pr-1">Friendly</span>
          </div>
          
          <div className="absolute top-1/2 left-5 -translate-y-1/2 flex items-center gap-3 py-3 px-5 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white flex-shrink-0">
              <Cloud className="w-5 h-5 text-gray-900" />
            </div>
            <span className="whitespace-nowrap text-sm font-medium pr-1">5 Star</span>
          </div>
          
          <div className="absolute top-1/2 -right-5 -translate-y-1/2 flex items-center gap-3 py-3 px-5 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0">
              <Bell className="w-5 h-5 text-gray-900" />
            </div>
            <span className="whitespace-nowrap text-sm font-medium pr-1">£10 - £20 OFF TODAY!</span>
          </div>
          
          <div className="absolute bottom-45 left-25 flex items-center gap-3 py-3 px-5 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0">
              <Monitor className="w-5 h-5 text-gray-900" />
            </div>
            <span className="whitespace-nowrap text-sm font-medium pr-1">Multi-Device Access</span>
          </div>
          
          <div className="absolute bottom-45 right-25 flex items-center gap-3 py-3 px-5 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white flex-shrink-0">
              <PieChart className="w-5 h-5 text-gray-900" />
            </div>
            <span className="whitespace-nowrap text-sm font-medium pr-1">Budget Insights</span>
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 py-3 px-5 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 flex-shrink-0">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <span className="whitespace-nowrap text-sm font-medium pr-1">Customizable Dashboards</span>
          </div>
        </div>
      </div>

      {/* Tablet bubble layout */}
      <div className="hidden md:block lg:hidden absolute inset-0">
        <div className="relative w-full h-full max-w-4xl mx-auto">
          <div className="absolute top-8 left-1/4 -translate-x-1/2 flex items-center gap-3 py-3 px-4 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white flex-shrink-0">
              <Shield className="w-5 h-5 text-gray-900" />
            </div>
            <span className="whitespace-nowrap text-sm font-medium pr-1">Fast Response</span>
          </div>
          
          <div className="absolute top-8 right-1/4 -translate-x-1/2 flex items-center gap-3 py-3 px-4 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0">
              <Zap className="w-5 h-5 text-gray-900" />
            </div>
            <span className="whitespace-nowrap text-sm font-medium pr-1">Reliable</span>
          </div>
          
          <div className="absolute top-1/4 right-8 flex items-center gap-3 py-3 px-4 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 flex-shrink-0">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <span className="whitespace-nowrap text-sm font-medium pr-1">Friendly</span>
          </div>
          
          <div className="absolute top-1/3 left-8 flex items-center gap-3 py-3 px-4 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white flex-shrink-0">
              <Cloud className="w-5 h-5 text-gray-900" />
            </div>
            <span className="whitespace-nowrap text-sm font-medium pr-1">5 Star</span>
          </div>
          
          <div className="absolute top-1/2 right-8 flex items-center gap-3 py-3 px-4 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0">
              <Bell className="w-5 h-5 text-gray-900" />
            </div>
            <span className="whitespace-nowrap text-sm font-medium pr-1">£10 - £20 OFF TODAY!</span>
          </div>
          
          <div className="absolute bottom-32 left-16 flex items-center gap-3 py-3 px-4 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0">
              <Monitor className="w-5 h-5 text-gray-900" />
            </div>
            <span className="whitespace-nowrap text-sm font-medium pr-1">Multi-Device Access</span>
          </div>
          
          <div className="absolute bottom-32 right-16 flex items-center gap-3 py-3 px-4 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white flex-shrink-0">
              <PieChart className="w-5 h-5 text-gray-900" />
            </div>
            <span className="whitespace-nowrap text-sm font-medium pr-1">Budget Insights</span>
          </div>
          
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3 py-3 px-4 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 flex-shrink-0">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <span className="whitespace-nowrap text-sm font-medium pr-1">Customizable Dashboards</span>
          </div>
        </div>
      </div>

      {/* Mobile bubble layout */}
      <div className="md:hidden absolute inset-0 px-2">
        <div className="relative w-full h-full">
          <div className="absolute top-4 left-2 flex items-center gap-2 py-2 px-3 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white flex-shrink-0">
              <Shield className="w-4 h-4 text-gray-900" />
            </div>
            <span className="whitespace-nowrap text-xs font-medium">Fast Response</span>
          </div>
          
          <div className="absolute top-4 right-2 flex items-center gap-2 py-2 px-3 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0">
              <Zap className="w-4 h-4 text-gray-900" />
            </div>
            <span className="whitespace-nowrap text-xs font-medium">Reliable</span>
          </div>
          
          <div className="absolute top-20 left-2 flex items-center gap-2 py-2 px-3 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 flex-shrink-0">
              <CreditCard className="w-4 h-4 text-white" />
            </div>
            <span className="whitespace-nowrap text-xs font-medium">Friendly</span>
          </div>
          
          <div className="absolute top-20 right-2 flex items-center gap-2 py-2 px-3 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white flex-shrink-0">
              <Cloud className="w-4 h-4 text-gray-900" />
            </div>
            <span className="whitespace-nowrap text-xs font-medium">5 Star</span>
          </div>
          
          <div className="absolute bottom-24 left-2 flex items-center gap-2 py-2 px-3 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0">
              <Bell className="w-4 h-4 text-gray-900" />
            </div>
            <span className="whitespace-nowrap text-xs font-medium">£10 - £20 OFF TODAY!</span>
          </div>
          
          <div className="absolute bottom-24 right-2 flex items-center gap-2 py-2 px-3 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0">
              <Monitor className="w-4 h-4 text-gray-900" />
            </div>
            <span className="whitespace-nowrap text-xs font-medium">Multi-Device Access</span>
          </div>
          
          <div className="absolute bottom-4 left-2 flex items-center gap-2 py-2 px-3 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white flex-shrink-0">
              <PieChart className="w-4 h-4 text-gray-900" />
            </div>
            <span className="whitespace-nowrap text-xs font-medium">Budget Insights</span>
          </div>
          
          <div className="absolute bottom-4 right-2 flex items-center gap-2 py-2 px-3 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all hover:scale-105 hover:bg-gray-800">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 flex-shrink-0">
              <LayoutDashboard className="w-4 h-4 text-white" />
            </div>
            <span className="whitespace-nowrap text-xs font-medium">Customizable </span>
          </div>
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center justify-center min-h-screen">
        <div className="flex items-center gap-2 mb-6">
          <div className="flex">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
          </div>
          <p className="text-white font-semibold tracking-wide text-sm uppercase">Benefits</p>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
          More than<br />management tool
        </h2>
        
        <p className="text-gray-300 text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Our app offers a range of tools designed to help you stay organized, make smarter financial decisions, and achieve your financial goals.
        </p>
        
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-lime-300 transition-all">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-gray-300 text-white rounded-full font-semibold hover:bg-gray-300/10 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}