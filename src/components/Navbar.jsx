"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { cn } from "../components/utils";

export const StickyScroll = ({ content = [], contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);

  const cardLength = content.length;

  // Update active card on scroll
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!cardLength) return;

    const breakpoints = content.map((_, index) => index / cardLength);
    const closestIndex = breakpoints.reduce((acc, bp, index) => {
      return Math.abs(latest - bp) < Math.abs(latest - breakpoints[acc])
        ? index
        : acc;
    }, 0);

    setActiveCard(closestIndex);
  });

  // Background gradients per card
  const backgroundColors = ["#0f172a", "#000000", "#171717"];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan → emerald
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink → indigo
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange → yellow
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    if (cardLength) {
      setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }
  }, [activeCard, cardLength]);

  if (!cardLength) return null; // safely return nothing if content empty

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      {/* Left column: scrollable text */}
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-kg mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Right sticky content */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};
