import React, { useEffect, useState } from "react";
import logo from "/logo-hitech7.png";
const CountdownSection = () => {
    const calculateTimeLeft = () => {
        const deadline = new Date("2025-05-09T23:59:00");
        const now = new Date();
        const difference = deadline.getTime() - now.getTime();

        let timeLeft = {
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00",
        };

        if (difference > 0) {
            timeLeft = {
                days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
                hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
                minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
                seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isHolding, setIsHolding] = useState(false);
    const text = "Are you ready? Come join us!";

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting && !isHolding) {
                if (index < text.length) {
                    setDisplayedText((prev) => prev + text.charAt(index));
                    setIndex((prev) => prev + 1);
                } else {
                    setIsHolding(true);
                    setTimeout(() => {
                        setIsHolding(false);
                        setIsDeleting(true);
                    }, 2000);
                }
            } else if (isDeleting) {
                if (index > 0) {
                    setDisplayedText((prev) => prev.slice(0, prev.length - 1));
                    setIndex((prev) => prev - 1);
                } else {
                    setIsDeleting(false);
                }
            }
        }, isDeleting ? 30 : 50);

        return () => clearTimeout(timeout);
    }, [index, isDeleting, isHolding, text]);

    return (
        <section className="relative bg-gradient-to-b from-[#1F4180] via-[#173A64] to-[#1F4180] text-white pt-2 pb-20 px-6 overflow-hidden font-[Poppins]">
            <div className="relative z-10 max-w-screen-xl mx-auto text-center">
                <p className="text-xl text-[#FFD700] mb-4 font-semibold">Pendaftaran dibuka: 14 April – 10 Mei 2025</p>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Registration Closed In:</h1>

                {/* Countdown */}
                <div className="flex justify-center gap-6 mb-8 flex-wrap">
                    {["days", "hours", "minutes", "seconds"].map((unit) => (
                        <div
                            key={unit}
                            className="bg-white/10 border border-[#FFD700] px-6 py-4 rounded-lg flex items-center justify-center min-w-[90px] h-[100px] flex-col"
                        >
                            <p className="text-4xl font-bold text-[#FFD700]">{timeLeft[unit]}</p>
                            <p className="text-sm uppercase tracking-widest text-white mt-2">{unit}</p>
                        </div>
                    ))}
                </div>

                {/* Typing Animation */}
                <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-mono whitespace-pre-wrap">
                    {displayedText}
                    <span className="animate-blink text-[#FFD700]">|</span>
                </p>

                <a
                    href="https://bit.ly/PENDAFTARANHITECH-7"
                    className="bg-[#ffdd57] text-black mt-4 py-3 px-8 text-lg font-semibold rounded-full shadow-lg hover:bg-[#ffd43b] hover:scale-105 transition-all duration-300 inline-block animate-fade-in-up delay-300"
                >
                    <span className="flex items-center justify-center">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-6 h-6 mr-2 object-contain "
                        />
                        Daftar Sekarang
                    </span>
                </a>
            </div>
        </section>
    );
};

export default CountdownSection;
