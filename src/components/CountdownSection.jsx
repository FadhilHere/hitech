// CountdownSection.jsx
import React, { useEffect, useState } from "react";

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

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative bg-gradient-to-b from-[#1F4180] via-[#173A64] to-[#1F4180] text-white pt-2 pb-20 px-6 overflow-hidden font-[Poppins]">
            {/* Dekorasi Blur agar menyatu dengan Hero */}
            {/* <div className="absolute w-80 h-80 bg-[#ffd700] opacity-20 rounded-full blur-[120px] top-[-50px] left-[-100px] z-0"></div>
            <div className="absolute w-96 h-96 bg-[#00c6ff] opacity-20 rounded-full blur-[100px] bottom-[-80px] right-[-100px] z-0"></div> */}


            <div className="relative z-10 max-w-screen-xl mx-auto text-center">
                <p className="text-xl text-[#FFD700] mb-4 font-semibold">Pendaftaran dibuka: 14 April – 10 Mei 2025</p>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Registration Closed In:</h1>

                {/* Countdown */}
                <div className="flex justify-center gap-6 mb-8 flex-wrap">
                    {["days", "hours", "minutes", "seconds"].map((unit) => (
                        <div key={unit} className="bg-white/10 border border-[#FFD700] px-4 py-4 rounded-lg min-w-[70px]">
                            <p className="text-4xl font-bold text-[#FFD700]">{timeLeft[unit]}</p>
                            <p className="text-sm uppercase tracking-widest text-white">{unit}</p>
                        </div>
                    ))}
                </div>

                <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                    Jangan lewatkan kesempatan untuk menunjukkan ide brilianmu di Hi-Tech 7! Daftarkan timmu sekarang dan bersiaplah menghadapi tantangan seru yang akan datang.
                </p>

                <a
                    href="#daftar"
                    className="mt-8 inline-block bg-[#FFD700] text-black py-3 px-8 text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300"
                >
                    Daftar Sekarang
                </a>
            </div>
        </section>
    );
};

export default CountdownSection;
