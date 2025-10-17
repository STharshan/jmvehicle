import React, { useState, useEffect } from "react";
import { Briefcase, Users } from "lucide-react";

const TestimonialCard = ({
    name,
    role,
    company,
    testimonial,
    satisfaction,
    image,
    logo,
}) => (
    <div className="flex-shrink-0 w-90 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
        <div className="flex items-start gap-4 mb-4">
            <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
            <div>
                <h5 className="text-white font-semibold text-lg">{name}</h5>
                <p className="text-white/70">{role}</p>
            </div>
        </div>

        <p className="text-white/90 text-lg leading-relaxed mb-6">{testimonial}</p>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
                <img src={logo} alt={company} className="w-6 h-6 object-cover rounded" />
                <h5 className="text-white font-semibold text-lg">{company}</h5>
            </div>

            <div className="text-right">
                <h2 className="text-white font-bold text-4xl">{satisfaction}/10</h2>
                <p className="text-gray-300 mt-3">Job Satisfaction</p>
            </div>
        </div>
    </div>
);

export default function TalentifyHero() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const testimonials = [
        {
            name: "Jon Bell",
            role: "Data Scientist",
            company: "Code Solutions",
            testimonial:
                "The team at Talentify understood my career goals and helped me secure a fantastic role.",
            satisfaction: 9,
            image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop",
        },
        {
            name: "Tim Chen",
            role: "Senior Software Engineer",
            company: "ABC Solutions",
            testimonial:
                "Talentify helped me land my dream remote developer job in just a few weeks.",
            satisfaction: 9,
            image:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
            logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
        },
        {
            name: "Sarah Maplas",
            role: "Lead UX Designer",
            company: "Creative Studios",
            testimonial:
                "Thanks to Talentify, I found a perfect remote tech role that matches my skills and lifestyle.",
            satisfaction: 8,
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
            logo: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=100&h=100&fit=crop",
        },
        {
            name: "Eniola Bakare",
            role: "Full Stack Developer",
            company: "Abstract Studio",
            testimonial:
                "From start to finish, Talentify made the recruitment process super simple. Highly recommend!",
            satisfaction: 10,
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
            logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&h=100&fit=crop",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setScrollPosition((prev) => (prev + 1) % (testimonials.length * 336));
        }, 50);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a237e] to-[#1e3a8a] text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* ===== Hero Section ===== */}
                <div
                    className="flex flex-col md:flex-row items-center justify-between gap-8"
                    data-aos="fade-up"
                >
                    {/* Left: Text */}
                    <div className="flex-1">
                        <h1 className="text-4xl mt-20 md:text-6xl font-bold leading-tight mb-4">
                            Your gateway to <br /> remote tech careers.
                        </h1>
                        <p className="text-lg text-gray-300 font-semibold max-w-sm mb-20">
                            Connect with top companies and explore roles suited to your skills and career goals.
                        </p>
                    </div>

                    {/* Right: Buttons */}
                    <div className="flex gap-4 mt-26">
                        <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
                            Explore roles
                        </button>
                        <button className="px-4 py-2 bg-black text-white font-semibold rounded-lg shadow hover:bg-gray-200 transition">
                            Hire talent
                        </button>
                    </div>
                </div>

                {/* Testimonials Carousel (unchanged) */}
                <div className="relative mb-10">
                    <div className="overflow-hidden">
                        <div
                            className="flex gap-4 transition-transform duration-75 ease-linear"
                            style={{
                                transform: `translateX(-${scrollPosition}px)`,
                                width: "max-content",
                            }}
                        >
                            {duplicatedTestimonials.map((testimonial, index) => (
                                <TestimonialCard key={index} {...testimonial} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Background Blurs */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl -z-10 transform rotate-12" />
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl -z-10" />
        </div>
    );
}
