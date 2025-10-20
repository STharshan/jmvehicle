"use client";
import React, { useRef, useEffect, useState } from "react";
import ScrollStack, { ScrollStackItem } from "./check";
import "../components/card.css";

const features = [
  {
    id: "feature-1",
    title: "Spending Summary",
    description:
      "Track and manage your weekly expenses across different categories with an intuitive dashboard that helps you stay within your spending limits.",
    image:
      "https://framerusercontent.com/images/CPOwwYDC729a7JbuZpZQxasnI1o.png",
  },
  {
    id: "feature-2",
    title: "Clear Expense Insights",
    description:
      "Visualize your spending habits with our powerful expense tracking tool. Easy-to-read charts show exactly where your money goes, categorizing expenses like housing, utilities, and food.",
    image:
      "https://framerusercontent.com/images/g9UtqL0YK4GoykBSin6XkmmzS7o.png",
  },
  {
    id: "feature-3",
    title: "Real-Time Money Flow",
    description:
      "Stay informed with instant updates on all your financial movements. Track incoming payments, outgoing expenses, and pending transactions in one streamlined view.",
    image:
      "https://framerusercontent.com/images/eBzTXjlMPmC4mDHCS4vWKT6jkQ8.png",
  },
  {
    id: "feature-4",
    title: "Seamless Currency Exchange",
    description:
      "Convert currencies instantly with our competitive exchange rates and transparent fee structure. Get real-time rates for USD, EUR, and other major currencies.",
    image:
      "https://framerusercontent.com/images/mCSKN73ZjLiFhtkl2DU0OmJSxXI.png",
  },
];

export default function ExpenseControlCenter() {
  const headerRef = useRef(null);
  const [headerTransform, setHeaderTransform] = useState({ opacity: 1, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      const rect = headerRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / window.innerHeight));

      setHeaderTransform({
        opacity: 1 - progress,
        y: progress * 100,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black relative" style={{ perspective: "1000px" }}>
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black pointer-events-none z-0"></div>

      {/* Header Section */}
      <header
        ref={headerRef}
        className="relative z-10 py-10 flex flex-col items-center justify-center text-center px-4" // reduced top/bottom padding
        style={{
          opacity: headerTransform.opacity,
          transform: `translateY(${headerTransform.y}px)`,
        }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 mb-4">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-blue-300 text-sm font-medium uppercase tracking-wide">
            The solution
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-0 leading-tight">
          Spendwise: Your<br /> expense control center
        </h2>
      </header>

      {/* Scroll Stack Section */}
      <ScrollStack
        className="relative z-10 mt-[-4rem]" // pull cards closer to header
        itemDistance={500} // reduced from 400
        itemScale={0.04}
        itemStackDistance={0}
        stackPosition="10%"
        scaleEndPosition="100%"
        baseScale={1}
        rotationAmount={0}
        blurAmount={100}
        useWindowScroll={true}
      >
        {features.map((feature, index) => {
          const isImageLeft = index % 2 === 0;
          return (
            <ScrollStackItem key={feature.id}>
              <div
                className="-mt-30 backdrop-blur-3xl bg-black/60 border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6"
                style={{
                  minHeight: "56rem", // reduced height
                  display: "flex",
                  flexDirection: isImageLeft ? "row" : "row-reverse",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1.5rem", // smaller text-image gap
                }}
              >
                {/* Image */}
                <div className="relative w-1/2 h-[48rem] rounded-2xl overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="w-1/2 flex flex-col justify-center text-left">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollStackItem>
          );
        })}
      </ScrollStack>
    </div>
  );
}
