"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";


export const StickyScroll = ({ content, contentClassName = "" }) => {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={targetRef} className="relative flex flex-col md:flex-row w-full">
      {/* LEFT column — text sections */}
      <div className="flex flex-col md:w-1/2">
        {content.map((item, i) => {
          const start = i / content.length;
          const end = (i + 1) / content.length;
          const opacity = useTransform(
            scrollYProgress,
            [start, end],
            [0.3, 1]
          );
          const y = useTransform(scrollYProgress, [start, end], [50, 0]);

          return (
            <motion.div
              key={i}
              style={{ opacity, y }}
              className="min-h-screen flex flex-col justify-center px-4 md:px-12 py-12"
            >
              <h3 className="text-2xl md:text-4xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* RIGHT column — sticky content */}
      <div
        className={`md:w-1/2 md:sticky md:top-20 h-[60vh] md:h-screen flex items-center justify-center ${contentClassName}`}
      >
        {content.map((item, i) => {
          const start = i / content.length;
          const end = (i + 1) / content.length;
          const opacity = useTransform(
            scrollYProgress,
            [start, end],
            [0, 1]
          );
          const scale = useTransform(scrollYProgress, [start, end], [0.95, 1]);

          return (
            <motion.div
              key={i}
              style={{ opacity, scale }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {item.content}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
