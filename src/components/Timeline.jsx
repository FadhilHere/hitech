import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import maskot1 from "/maskot1.png";
import maskot2 from "/maskot2.png";
import logo from "/logo-hitech7.png";

const Timeline = () => {
  const events = [
    { title: "Pendaftaran", date: "14 April - 10 Mei 2025", id: 1 },
    { title: "Seminar", date: "10 Mei 2025", id: 2 },
    { title: "Batas Pengumpulan Karya", date: "14 Mei 2025", id: 3 },
    { title: "Pengumuman Finalis", date: "20 Mei 2025", id: 4 },
    { title: "Final", date: "Akan Diumumkan", id: 5 },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [events.length]);

  return (
    <section className="relative bg-gradient-to-b from-[#1F4180] via-[#173A64] to-[#1F4180] text-white py-24 px-4 overflow-hidden">
      {/* Ornamen Kiri */}
      <img
        src={maskot1}
        alt="Ornamen Kiri"
        className="absolute left-40 top-1/4 w-40 pointer-events-none animate-float"
      />
      {/* Ornamen Kanan */}
      <img
        src={maskot2}
        alt="Ornamen Kanan"
        className="absolute right-40 top-1/2 w-40 pointer-events-none animate-float"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-5xl font-extrabold text-center mb-14 tracking-wider">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 object-contain inline-block align-middle"
          />
          <span className="ml-3 align-middle">Timeline</span>
        </h2>

        <div className="relative">
          {/* Garis Tengah */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-300 to-blue-500 rounded-full transform -translate-x-1/2"></div>

          <div className="flex flex-col gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="grid grid-cols-[1fr_auto_1fr] items-center relative transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }} // Trigger when 50% of the item is in view
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="flex justify-end pr-4">
                      <motion.div
                        className={`p-4 rounded-2xl w-52 text-center transition-transform duration-500 ease-in-out shadow-xl backdrop-blur-sm ${activeIndex === index ? 'bg-white/30 scale-105 ring-2 ring-yellow-300' : 'bg-white/10'}`}
                      >
                        <h3 className="text-lg font-bold text-cyan-300">{event.title}</h3>
                        <p className="text-sm text-gray-200">{event.date}</p>
                      </motion.div>
                    </div>
                    <div className="flex justify-center px-2">
                      <motion.div
                        className={`w-10 h-10 text-sm font-bold rounded-full flex items-center justify-center shadow-md ring-4 ring-white ring-opacity-30 transition-transform duration-300 ${activeIndex === index ? 'bg-yellow-300 text-black scale-110' : 'bg-cyan-400 text-[#1F4180]'}`}
                      >
                        {event.id}
                      </motion.div>
                    </div>
                    <div></div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div className="flex justify-center px-2">
                      <motion.div
                        className={`w-10 h-10 text-sm font-bold rounded-full flex items-center justify-center shadow-md ring-4 ring-white ring-opacity-30 transition-transform duration-300 ${activeIndex === index ? 'bg-yellow-300 text-black scale-110' : 'bg-cyan-400 text-[#1F4180]'}`}
                      >
                        {event.id}
                      </motion.div>
                    </div>
                    <div className="flex justify-start pl-4">
                      <motion.div
                        className={`p-4 rounded-2xl w-52 text-center transition-transform duration-500 ease-in-out shadow-xl backdrop-blur-sm ${activeIndex === index ? 'bg-white/30 scale-105 ring-2 ring-yellow-300' : 'bg-white/10'}`}
                      >
                        <h3 className="text-lg font-bold text-cyan-300">{event.title}</h3>
                        <p className="text-sm text-gray-200">{event.date}</p>
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
