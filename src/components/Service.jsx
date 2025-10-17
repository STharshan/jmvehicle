import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // Import framer motion

const features = [
  {
    id: "feature-1",
    title: "Spending Summary",
    description: "Track and manage your weekly expenses across different categories with an intuitive dashboard that helps you stay within your spending limits",
    image: "https://framerusercontent.com/images/CPOwwYDC729a7JbuZpZQxasnI1o.png",
  },
  {
    id: "feature-2",
    title: "Clear Expense Insights",
    description: "Visualize your spending habits with our powerful expense tracking tool. Our easy-to-read charts show exactly where your money goes, categorizing major expenses like housing, utilities, and food.",
    image: "https://framerusercontent.com/images/g9UtqL0YK4GoykBSin6XkmmzS7o.png",
  },
  {
    id: "feature-3",
    title: "Real-Time Money Flow",
    description: "Stay informed with instant updates on all your financial movements. Track your incoming payments, outgoing expenses, and pending transactions in one streamlined view.",
    image: "https://framerusercontent.com/images/eBzTXjlMPmC4mDHCS4vWKT6jkQ8.png",
  },
  {
    id: "feature-4",
    title: "Seamless Currency Exchange",
    description: "Convert currencies instantly with our competitive exchange rates and transparent fee structure. Whether you're trading USD, EUR, or other major currencies, get real-time rates.",
    image: "https://framerusercontent.com/images/mCSKN73ZjLiFhtkl2DU0OmJSxXI.png",
  }
];

function ParallaxCard({ feature, index }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ y: 0, scale: 1, opacity: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const cardCenter = rect.top + rect.height / 2;
      const screenCenter = windowHeight / 2;

      // Calculate distance from center of screen
      const distanceFromCenter = cardCenter - screenCenter;
      const maxDistance = windowHeight;

      // Calculate progress (0 when centered, negative above, positive below)
      const progress = distanceFromCenter / maxDistance;

      // Parallax effect - cards move at different speeds based on index
      const parallaxSpeed = 0.3 + (index * 0.1);
      const yOffset = progress * 100 * parallaxSpeed;

      // Scale effect - cards get smaller as they move away from center
      const scaleProgress = Math.abs(progress);
      const scale = Math.max(0.85, 1 - (scaleProgress * 0.15));

      // Opacity - fade in as approaching center
      let opacity = 0;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const visibleProgress = 1 - Math.abs(progress);
        opacity = Math.max(0, Math.min(1, visibleProgress * 1.5));
      }

      // Rotation effect for depth
      const rotation = progress * 2;

      setTransform({ y: yOffset, scale, opacity, rotation });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [index]);

  // Determine layout direction based on index (even -> image left, odd -> image right)
  const isImageLeft = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      className="min-h-screen flex items-center justify-center py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: transform.opacity,
        y: transform.y,
        scale: transform.scale,
        rotateX: transform.rotation,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
      }}
    >
      <div
        className="w-full max-w-2xl transition-all duration-300 ease-out"
        style={{
          transform: `translateY(${transform.y}px) scale(${transform.scale}) rotateX(${transform.rotation}deg)`,
          opacity: transform.opacity,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="backdrop-blur-3xl bg-black/60 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="flex flex-col sm:flex-row">
            {/* Image on the left or right */}
            <div
              className={`relative ${isImageLeft ? "sm:w-1/2" : "sm:w-1/2 order-last"} h-72 sm:h-96 rounded-2xl overflow-hidden m-4 sm:m-6`}
            >
              <img
                src={feature.image}
                alt={`${feature.title} interface`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Content on the opposite side */}
            <div className="p-6 sm:p-8 sm:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen" style={{ perspective: '1000px' }}>
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black pointer-events-none z-0"></div>

      {/* Header Section with Parallax */}
      <div
        ref={headerRef}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center"
        style={{
          opacity: headerTransform.opacity,
          transform: `translateY(${headerTransform.y}px)`,
        }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 mb-6">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-blue-300 text-sm font-medium uppercase tracking-wide">
            The solution
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4 leading-tight">
          Spendwise: Your<br />
          expense control center
        </h2>
      </div>

      {/* Parallax Cards Section */}
      <section className="relative z-10">
        {features.map((feature, index) => (
          <ParallaxCard
            key={feature.id}
            feature={feature}
            index={index}
          />
        ))}
      </section>

      {/* Bottom spacer */}
      <div className="h-screen relative z-10"></div>
    </div>
  );
}
