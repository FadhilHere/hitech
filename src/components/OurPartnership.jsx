import React from "react";

const partners = [
    "maskot1.png",
    "maskot2.png",
    "maskot3.png",
    "maskot5.png",
    "maskot1.png",
    "maskot2.png",
];

const OurPartnership = () => {
    return (
        <section className="bg-gradient-to-b from-[#1F4180] via-[#173A64] to-[#1F4180] py-10 px-6 text-white font-[Poppins]">
            <div className="max-w-screen-xl mx-auto text-center px-6 py-4">
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-[#FFD700]">Our Partnerships</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 place-items-center">
                    {partners.map((src, i) => (
                        <div
                            key={i}
                            className="relative group w-28 h-28 sm:w-40 sm:h-40 md:w-44 md:h-44 transition-transform duration-300 transform hover:scale-110"
                        >
                            <div className="absolute inset-0 rounded-xl bg-white/5 border border-white/10 shadow-xl group-hover:shadow-yellow-400/40 transition-all duration-300"></div>
                            <img
                                src={src}
                                alt={`Partner ${i + 1}`}
                                className="relative z-10 w-full h-full object-contain p-2 sm:p-4 transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurPartnership;
