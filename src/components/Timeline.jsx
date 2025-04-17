import React from "react";

const Timeline = () => {
  const events = [
    { title: "Pendaftaran", date: "14 April - 10 Mei 2025", id: 1 },
    { title: "Seminar", date: "10 Mei 2025", id: 2 },
    {
      title: "Batas Pengumpulan Karya Penilaian Awal",
      date: "14 Mei 2025",
      id: 3,
    },
    { title: "Pengumuman Finalis", date: "20 Mei 2025", id: 4 },
    { title: "Final", date: "24 Mei 2024", id: 5 },
  ];

  return (
    <section className="bg-[#1F4180] text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-wide">
          📅 Timeline
        </h2>

        <div className="relative">
          {/* Garis Tengah */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-300 bg-opacity-40 rounded-full transform -translate-x-1/2"></div>

          <div className="flex flex-col gap-2">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="grid grid-cols-[1fr_auto_1fr] items-center relative animate-fadeInUp transition duration-500"
              >
                {index % 2 === 0 ? (
                  <>
                    {/* Kiri */}
                    <div className="flex justify-end pr-1">
                      <div className="bg-white bg-opacity-10 backdrop-blur-md p-2 rounded-xl shadow-md hover:scale-105 transition text-center w-44">
                        <h3 className="text-sm font-semibold text-cyan-300">
                          {event.title}
                        </h3>
                        <p className="text-xs text-gray-200">{event.date}</p>
                      </div>
                    </div>

                    {/* Titik Tengah */}
                    <div className="flex justify-center px-1">
                      <div className="w-8 h-8 bg-cyan-400 text-[#1F4180] font-bold rounded-full flex items-center justify-center shadow-lg z-10 ring-4 ring-white ring-opacity-30">
                        {event.id}
                      </div>
                    </div>

                    <div></div>
                  </>
                ) : (
                  <>
                    <div></div>

                    {/* Titik Tengah */}
                    <div className="flex justify-center px-1">
                      <div className="w-8 h-8 bg-cyan-400 text-[#1F4180] font-bold rounded-full flex items-center justify-center shadow-lg z-10 ring-4 ring-white ring-opacity-30">
                        {event.id}
                      </div>
                    </div>

                    {/* Kanan */}
                    <div className="flex justify-start pl-1">
                      <div className="bg-white bg-opacity-10 backdrop-blur-md p-2 rounded-xl shadow-md hover:scale-105 transition text-center w-44">
                        <h3 className="text-sm font-semibold text-cyan-300">
                          {event.title}
                        </h3>
                        <p className="text-xs text-gray-200">{event.date}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
