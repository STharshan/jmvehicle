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
    <div className="flex-shrink-0 w-90 bg-[#3A7C7A]/5 border border-[#3A7C7A]/10 rounded-3xl p-6 backdrop-blur-sm">
        <div className="flex items-start gap-4 mb-4">
            <img src="/logo.jpeg" alt={name} className="w-16 h-16 rounded-full object-cover" />
            <div>
                <h5 className="text-[#3A7C7A] font-semibold text-lg">{name}</h5>
                <p className="text-[#3A7C7A]/70">Customer</p>
            </div>
        </div>

        <p className="text-[#3A7C7A]/90 text-lg leading-relaxed mb-6">{testimonial}</p>

        <div className="flex items-center justify-between pt-4 border-t border-[#3A7C7A]/10">
            <div className="flex items-center gap-2">
                <img src="/logo.jpeg" alt={company} className="w-6 h-6 object-cover rounded" />
                <h5 className="text-[#3A7C7A] font-semibold text-lg">{company}</h5>
            </div>

            <div className="text-right">
                <h2 className="text-[#3A7C7A] font-bold text-4xl">{satisfaction}/10</h2>
            </div>
        </div>
    </div>
);

export default function TalentifyHero() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const testimonials = [
        {
            name: "John Morley",
            role: "Car Owner",
            company: "Mobile Battery Service",
            testimonial:
                "Kris was quick and efficient and had the problem diagnosed and fixed at the roadside. From contact to completion took just over an hour.",
            satisfaction: 10,
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
            logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&h=100&fit=crop"
        },
        {
            name: "Harry Dunne",
            role: "Driver",
            company: "Mobile Battery Fitter",
            testimonial:
                "Sister in law was in a pickle with her car, battery was dead and old. Found Kris online and thought a mobile fitter was the easiest option. Kris arrived punctually, was polite, respectful and professional. He replaced a broken terminal at no extra cost and tidied up the engine bay too. Very professional job done. I was happy to pay £160 for the excellent service.",
            satisfaction: 9,
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
            logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&h=100&fit=crop"
        },
        {
            name: "Barbara",
            role: "Car Owner",
            company: "Mobile Battery Service",
            testimonial:
                "I needed a new battery fitted at my home ASAP. Contacted them and had an appointment within 2 hours. Chris was very nice and even set my radio up again. Would definitely use them again and recommend to others.",
            satisfaction: 10,
            image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop",
            logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&h=100&fit=crop"
        },
        {
            name: "Jonathan Francis",
            role: "Driver",
            company: "Mobile Battery Rescue",
            testimonial:
                "Came out to rescue me when the RAC were quoting 5 hours! Great service — arrived within 20 minutes. Chris was super helpful and friendly. Back up and running in ten minutes. Really good value as well.",
            satisfaction: 10,
            image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop",
            logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&h=100&fit=crop"
        },
        {
            name: "David hughes",
            role: "Customer",
            company: "Battery Replacement Service",
            testimonial:
                "Could not have asked for better service and prices. Chris pulled us out of a tight spot and more than anything, he’s a top bloke.",
            satisfaction: 10,
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
            logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&h=100&fit=crop"
        },
        {
            name: "Tanya Hughes",
            role: "Family Member",
            company: "Mobile Auto Repair",
            testimonial:
                "My husband and son broke down at the Liverpool dock waiting to board the ferry to the Isle of Man. I called Kris and he arrived quickly, even on a Friday evening. He kept us updated, got the car started, and came again to change the battery. Cleaned everything down and sent pictures of every step. Very reasonable price and excellent service. Thank you Kris!",
            satisfaction: 10,
            image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
            logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&h=100&fit=crop"
        }
    ]


    useEffect(() => {
        const interval = setInterval(() => {
            setScrollPosition((prev) => (prev + 1) % (testimonials.length * 336));
        }, 50);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

    return (
        <div className="bg-white text-[#3A7C7A] overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* ===== Hero Section ===== */}
                <div
                    className="flex flex-col md:flex-row items-center justify-between gap-8"
                    data-aos="fade-up"
                >
                    {/* Left: Text */}
                    <div className="flex-1">
                        <h1 className="text-4xl mt-20 md:text-6xl font-bold leading-tight mb-4">
                            JM VEHICLE ASSIST
                        </h1>
                        <p className="text-lg text-black font-semibold max-w-sm mb-20">
                            FAST | RELIABLE | FRIENDLY | 5 STAR
                            Home | Work | Roadside? We come to you!
                        </p>
                    </div>

                    {/* Right: Buttons */}
                    <div className="flex gap-4 mt-20">
                        <button className="px-5 py-2 bg-[#3A7C7A] text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
                            Request a Quote
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
