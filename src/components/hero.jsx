import maskot2 from "/maskot2.png";
import React from "react";
import logo from "/logo-hitech7.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#1F4180] via-[#173A64] to-[#1F4180] text-white pt-36 pb-28 px-6 overflow-hidden font-[Poppins]">
      {/* Dekorasi Blur */}
      <div className="absolute w-80 h-80 bg-[#ffd700] opacity-20 rounded-full blur-[120px] top-[-50px] left-[-100px] z-0"></div>
      <div className="absolute w-96 h-96 bg-[#00c6ff] opacity-20 rounded-full blur-[100px] bottom-[-80px] right-[-100px] z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto gap-12">
        {/* Teks (tanpa kotak) */}
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg animate-fade-in-up">
            Hi-Tech 7
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ffdd57] via-white to-[#00e0ff] drop-shadow animate-fade-in-up delay-100">
            "Connecting Ideas, Creating Impact"
          </h2>

          <p className="text-base md:text-lg mb-8 leading-relaxed text-white/90 drop-shadow-md animate-fade-in-up delay-200">
            Hi-Tech 7 adalah kompetisi Teknologi dan Bisnis terbesar 2025,
            membuka ruang bagi para inovator muda untuk bersinar dalam kategori
            UI/UX, Business Plan, dan Visualisasi Data. Satukan ide, wujudkan dampak
            besar.
          </p>

          <a
            href="#daftar"
            className="bg-[#ffdd57] text-black py-3 px-8 text-lg font-semibold rounded-full shadow-lg hover:bg-[#ffd43b] hover:scale-105 transition-all duration-300 inline-block animate-fade-in-up delay-300"
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

        {/* Maskot */}
        <div className="hidden md:block w-full md:w-1/2 text-center animate-fade-in-up delay-500">
          <img
            src={maskot2}
            alt="Maskot HiTech 7"
            className="w-[85%] h-auto mx-auto drop-shadow-2xl brightness-110 pointer-events-none animate-float"
          />
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
