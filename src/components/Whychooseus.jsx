import React, { useState, useEffect } from 'react';

const FinancialSuccessSection = () => {
    const [scrollPosition1, setScrollPosition1] = useState(0);
    const [scrollPosition2, setScrollPosition2] = useState(0);

    const countries1 = [
        { name: 'Netherlands', flag: 'https://framerusercontent.com/images/WTAWeUNl1gDlEkbC1Pt7oicn1k.svg' },
        { name: 'France', flag: 'https://framerusercontent.com/images/iFFShor6uPqE7QKBt3A2R22wE6I.svg' },
        { name: 'Ukraine', flag: 'https://framerusercontent.com/images/t31EL2vYJk7l8YOKwIAyMygWLjw.svg' },
    ];

    const countries2 = [
        { name: 'Denmark', flag: 'https://framerusercontent.com/images/H7htWIUuQ9G6y5vhX1vztws4kI.svg' },
        { name: 'Canada', flag: 'https://framerusercontent.com/images/tCGA1mRWAT2QUSP9TF29lq21OY.svg' },
        { name: 'Japan', flag: 'https://framerusercontent.com/images/nqIRB8gpPwQV5Qr0XnENy69cy0.svg' },
        { name: 'USA', flag: 'https://framerusercontent.com/images/UM0g5rBWZP7vPwF1ktVDCjBNRpk.svg' },
    ];

    useEffect(() => {
        const interval1 = setInterval(() => {
            setScrollPosition1((prev) => (prev + 1) % (countries1.length * 150));
        }, 30);

        const interval2 = setInterval(() => {
            setScrollPosition2((prev) => (prev - 1) % (countries2.length * 150));
        }, 30);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
        };
    }, []);

    const RobotIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-full h-full fill-[#D7FE03]">
            <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12h-8V152h8a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z" />
        </svg>
    );

    const UserCheckIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-full h-full fill-[#D7FE03]">
            <path d="M144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17a8,8,0,0,0,12.25,10.3C50.25,181.19,77.91,168,108,168s57.75,13.19,77.87,37.15a8,8,0,0,0,12.25-10.3C183.18,177.07,164.6,164.44,144,157.68ZM56,100a52,52,0,1,1,52,52A52.06,52.06,0,0,1,56,100Zm197.66,33.66-32,32a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,11.32-11.32L216,148.69l26.34-26.35a8,8,0,0,1,11.32,11.32Z" />
        </svg>
    );

    const CountryCard = ({ country }) => (
        <div className="flex items-center gap-3 bg-[#242424] rounded-full px-4 py-3 min-w-max">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img src={country.flag} alt={country.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-white font-bold pr-2">{country.name}</span>
        </div>
    );

    const ProgressBar = ({ label, percentage, color }) => (
        <div className="w-full mb-4">
            <p className="text-white text-sm mb-2 lowercase">{label}</p>
            <div
                className={`border ${color === 'yellow' ? 'border-[#D7FE03]' : 'border-[#8478F0]'
                    } rounded-full h-5 overflow-hidden`}
            >
                <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                        width: `${percentage}%`,
                        background: `linear-gradient(90deg, rgb(0, 0, 0) 0%, ${color === 'yellow' ? 'rgb(215, 254, 3)' : 'rgb(132, 120, 240)'
                            } 100%)`,
                    }}
                />
            </div>
        </div>
    );


    return (
        <section className="bg-black py-12 md:py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-6 h-6">
                            <UserCheckIcon />
                        </div>
                        <p className="text-[#D7FE03] text-sm uppercase tracking-wider">WHY CHOOSE US</p>
                    </div>
                    <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold">Financial Success</h2>
                    <p className="text-white/80 text-base md:text-lg mt-4 max-w-lg mx-auto">
                        We combine cutting-edge technology, personalized insights, and user-friendly features to help you optimize your finances.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {/* AI Analytics Card */}
                    <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-3xl p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 flex-shrink-0">
                                <RobotIcon />
                            </div>
                            <p className="text-white text-lg font-medium">AI-Powered Analytics</p>
                        </div>
                        <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                            Leverage AI to track, analyze, and optimize your spending
                        </h3>
                        <div className='mt-30'>
                            <p className="text-white/70 mb-6">
                                Spot patterns and make smarter financial choices effortlessly.
                            </p>
                            <a
                                href="#analytics"
                                className="group inline-flex items-center justify-center gap-2 bg-[#D7FE03] hover:bg-[#c5ec00] text-black font-medium px-6 py-3 rounded-full transition-all duration-300 border border-[#D7FE03]"
                            >
                                <span className="group-hover:opacity-0 transition-opacity duration-300 px-5">Explore</span>
                                <span className="absolute text-[#D7FE03] opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore</span>
                            </a>
                        </div>
                    </div>

                    {/* Countries Card */}
                    <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-3xl p-6 md:p-8">
                        <h3 className="text-white text-4xl md:text-5xl font-bold mb-2">140+</h3>
                        <p className="text-white/70 mb-6">
                            Our app supports users in over 140 countries, offering global tools to manage and optimize your finances.
                        </p>

                        {/* Country Carousels */}
                        <div className="space-y-3 mt-30">
                            {/* First Carousel - Moving Right */}
                            <div className="overflow-hidden relative">
                                <div
                                    className="flex gap-3 transition-transform"
                                    style={{
                                        transform: `translateX(-${scrollPosition1}px)`,
                                    }}
                                >
                                    {[...countries1, ...countries1, ...countries1, ...countries1].map((country, idx) => (
                                        <CountryCard key={`c1-${idx}`} country={country} />
                                    ))}
                                </div>
                            </div>

                            {/* Second Carousel - Moving Left */}
                            <div className="overflow-hidden relative">
                                <div
                                    className="flex gap-3 transition-transform"
                                    style={{
                                        transform: `translateX(${scrollPosition2}px)`,
                                    }}
                                >
                                    {[...countries2, ...countries2, ...countries2, ...countries2].map((country, idx) => (
                                        <CountryCard key={`c2-${idx}`} country={country} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Statistics Section */}
                    <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-3xl p-6 md:p-8">
                        <div className="mb-6">
                            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Key Statistics</h3>
                            <p className="text-white/70">Our analytics help you save more and reduce expenses with ease.</p>
                        </div>

                        <div className="gap-6 mt-30">
                            <ProgressBar label="spending habits" percentage={45} color="purple" />
                            <ProgressBar label="cost reductions" percentage={40} color="purple" />
                            <ProgressBar label="budget optimization" percentage={40} color="yellow" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FinancialSuccessSection;