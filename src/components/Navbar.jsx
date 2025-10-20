"use client";
import React from "react";
import { Code2, Lightbulb, Rocket } from "lucide-react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";



const content = [

        {
          stage: "Stage 1",
          title: "Kickoff",
          desc: "We align with you to understand your goals, vision, and expectations through in-depth discussions and thorough research.",
          tags: ["Comprehensive Consultation", "Project Roadmap"],
          icon: <Rocket className="w-5 h-5 text-white" />,
        },
        {
          stage: "Stage 2",
          title: "Execution",
          desc: "With a clear strategy in place, we move into the execution phase, where ideas come to life with real-time collaboration.",
          tags: ["Seamless Integration", "Real-Time Collaboration"],
          icon: <Code2 className="w-5 h-5 text-white" />,
        },
        {
          stage: "Stage 3",
          title: "Handoff",
          desc: "Once the design and development are finalized, we provide assets, documentation, and support for a smooth launch.",
          tags: ["Ongoing Support", "Documentation"],
          icon: <Lightbulb className="w-5 h-5 text-white" />,
          cta: "Book an Appointment",
        },
      ];
    
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
