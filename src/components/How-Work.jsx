"use client";
import React, { useEffect, useRef } from "react";
import { Rocket, Code2, Lightbulb } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const containerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const imageRef = useRef(null);
  const lastCardRef = useRef(null);

  const stages = [
    {
      stage: "Stage 1",
      title: "Kickoff",
      desc: "The kickoff stage is where everything begins. We align with you to understand your goals, vision, and expectations through in-depth discussions and thorough research.",
      tags: ["Comprehensive Consultation", "Project Roadmap"],
      icon: <Rocket className="w-5 h-5 text-white" />,
    },
    {
      stage: "Stage 2",
      title: "Execution",
      desc: "With a clear strategy in place, we move into the execution phase, where ideas come to life. Our team works efficiently and collaboratively to implement the plan.",
      tags: ["Seamless Integration", "Real-Time Collaboration"],
      icon: <Code2 className="w-5 h-5 text-white" />,
    },
    {
      stage: "Stage 3",
      title: "Handoff",
      desc: "Once the design and development are finalized, we transition to hand-off — providing assets, documentation, and support for a smooth launch.",
      tags: ["Ongoing Support", "Documentation"],
      icon: <Lightbulb className="w-5 h-5 text-white" />,
      cta: "Book an Appointment",
    },
  ];

  useEffect(() => {
    const leftColumn = leftColumnRef.current;
    const image = imageRef.current;
    const lastCard = lastCardRef.current;
    const container = containerRef.current;

    // Scroll left column smoothly
    gsap.to(leftColumn, {
      yPercent: -100 * (stages.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${window.innerHeight * stages.length}`,
        scrub: 1,
        pin: true,
        pinSpacing: false,
      },
    });

    // Image scroll starts only when bottom of last card meets bottom of image
    ScrollTrigger.create({
      trigger: lastCard,
      start: () =>
        `bottom bottom-=${image.offsetHeight * 0.3}`, // start when last card bottom aligns roughly with bottom of image
      end: () => `+=${image.offsetHeight}`, // image scroll distance
      scrub: 1,
      onUpdate: (self) => {
        gsap.to(image, {
          y: -image.offsetHeight * self.progress,
          ease: "none",
        });
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[1600px] bg-[#090912] text-white py-34 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* LEFT: text + cards scroll together */}
        <div ref={leftColumnRef} className="flex flex-col gap-8">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1 bg-gradient-to-t from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.1)] backdrop-blur-sm mb-6">
              <span className="text-sm text-white/90 tracking-widest uppercase">
                How We Work?
              </span>
              <span className="w-2 h-2 bg-white/70 rounded-full" />
            </div>

            <h2 className="text-5xl md:text-6xl font-semibold leading-tight mb-4">
              We Simplify The Journey
              <br />
              <span className="text-white/60">From Design To Launch.</span>
            </h2>

            <p className="text-gray-400 max-w-xl">
              We make it easy to bring your ideas to life, guiding you from
              concept to a fully launched product.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-8">
            {stages.map((s, i) => (
              <div
                key={i}
                ref={i === stages.length - 1 ? lastCardRef : null}
                className="card relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#0a0a18] to-[#050509] backdrop-blur-lg p-6 hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-600/20 border border-blue-400/20 shadow-[0_0_25px_rgba(0,85,255,0.3)]">
                    {s.icon}
                  </div>
                  <div className="px-3 py-1 text-xs rounded-lg border border-white/10 bg-blue-950/30 text-gray-200">
                    {s.stage}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {s.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs rounded-lg border border-white/10 bg-white/5 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {s.cta && (
                  <a
                    href="/contact"
                    className="inline-block mt-6 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg border border-white/10 shadow-[0_0_30px_rgba(0,85,255,0.5)] transition-all"
                  >
                    {s.cta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: image */}
        <div ref={imageRef} className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,85,255,0.2)]">
            <img
              src="https://framerusercontent.com/images/oUAzCBZlCCsvzmsAiYQ3RDbhyg.jpeg"
              alt="Person working on laptop"
              className="object-cover w-full h-[550px]"
            />
          </div>
         
        </div>
      </div>
    </section>
  );
}
