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
  const [scrollStackParams, setScrollStackParams] = useState({
    itemDistance: 0,
    itemScale: 0.04,
    stackPosition: "10%",
  });

  useEffect(() => {
    const updateScrollParams = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile
        setScrollStackParams({
          itemDistance: 0,
          itemScale: 0.02,
          stackPosition: "15%",
        });
      } else if (width < 1024) {
        // Tablet
        setScrollStackParams({
          itemDistance: 0,
          itemScale: 0.03,
          stackPosition: "12%",
        });
      } else {
        // Desktop
        setScrollStackParams({
          itemDistance: 0,
          itemScale: 0.04,
          stackPosition: "10%",
        });
      }
    };

    updateScrollParams();
    window.addEventListener("resize", updateScrollParams);
    return () => window.removeEventListener("resize", updateScrollParams);
  }, []);

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
    <div className="bg-black relative min-h-screen" style={{ perspective: "1000px" }}>
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black pointer-events-none z-0"></div>

      {/* Header Section */}
      <header
        ref={headerRef}
        className="relative z-10 py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center text-center px-4 sm:px-6"
        style={{
          opacity: headerTransform.opacity,
          transform: `translateY(${headerTransform.y}px)`,
        }}
      >
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/20 border border-blue-400/30 mb-4 sm:mb-6">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-blue-300 text-xs sm:text-sm font-medium uppercase tracking-wide">
            The solution
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-0 leading-tight max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-4">
          Spendwise: Your <br className="hidden sm:block" /> expense control
          center
        </h2>
      </header>

      {/* Scroll Stack Section */}
      <ScrollStack
        className="relative z-10 -mt-50"
        itemDistance={scrollStackParams.itemDistance}
        itemScale={scrollStackParams.itemScale}
        itemStackDistance={0}
        stackPosition={scrollStackParams.stackPosition}
        scaleEndPosition="100%"
        baseScale={1}
        rotationAmount={0}
        blurAmount={10}
        useWindowScroll={true}
      >
        {features.map((feature, index) => {
          const isImageLeft = index % 2 === 0;

          return (
            <ScrollStackItem key={feature.id}>
              <div
                className="backdrop-blur-3xl bg-black/60 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mx-4 sm:mx-6 md:mx-8 lg:mx-auto max-w-7xl"
                style={{
                  minHeight: "auto",
                }}
              >
                {/* Image */}
                <div
                  className={`relative w-full md:w-1/2 h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-[30rem] rounded-xl sm:rounded-2xl overflow-hidden order-1 ${
                    isImageLeft ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 flex flex-col justify-center text-center md:text-left order-2 ${
                    isImageLeft ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2 sm:mb-3 lg:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
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