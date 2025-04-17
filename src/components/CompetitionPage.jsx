import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo-hitech7.png";
import uiuxIcon from "/maskot1.png";
import visdatIcon from "/maskot1.png";
import bplanIcon from "/maskot1.png";

const CompetitionsPage = () => {
  return (
    <section className="bg-gradient-to-b from-[#1F4180] via-[#173A64] to-[#1F4180] text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-16 tracking-wider">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 object-contain inline-block align-middle"
          />
          <span className="ml-3 align-middle">Lomba HiTech 7</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {/* Card Template */}
          {[
            {
              to: "/ui-ux",
              icon: uiuxIcon,
              title: "UI/UX",
              desc: "Tantang kreativitasmu dalam merancang antarmuka yang intuitif dan menarik! Cocok untuk kamu yang suka desain & user experience.",
            },
            {
              to: "/visualisasi-data",
              icon: visdatIcon,
              title: "Visualisasi Data",
              desc: "Ubah data jadi cerita menarik dengan visualisasi yang powerful. Cocok buat kamu yang suka data dan storytelling!",
            },
            {
              to: "/business-plan",
              icon: bplanIcon,
              title: "Business Plan",
              desc: "Punya ide bisnis? Tuangkan dalam rencana strategis dan presentasikan ke juri. Cocok untuk calon entrepreneur!",
            },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="flex flex-col justify-between items-center border-2 border-yellow-300 bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-yellow-400/60 hover:scale-[1.03] transition-all duration-300 text-center h-full"
            >
              <div>
                <img src={item.icon} alt={`${item.title} Icon`} className="w-20 h-20 mb-4 mx-auto" />
                <h3 className="text-3xl font-bold text-yellow-300 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.desc}</p>
              </div>
              <button className="mt-6 px-6 py-2 bg-yellow-300 text-[#1F4180] font-semibold rounded-lg hover:bg-yellow-400 transition duration-300">
                Go to {item.title}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionsPage;
