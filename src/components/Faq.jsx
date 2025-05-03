import React, { useState } from "react";

const faqs = [
    {
        question: "Apakah peserta dari luar kota dapat mengikuti kompetisi ini?",
        answer: `Tentu saja. Peserta dari luar kota tetap dapat mengikuti seluruh rangkaian kompetisi karena HiTech 7 dilaksanakan dengan format hybrid, yaitu perpaduan antara daring dan luring. Sebagian besar tahapan, seperti pendaftaran, pengumpulan karya, dan seleksi awal, dilakukan secara online.
Untuk peserta dari luar kota yang lolos ke tahap final luring, panitia akan menyediakan informasi lengkap mengenai teknis pelaksanaan, lokasi acara, serta membantu memberikan arahan terkait akomodasi dan kebutuhan logistik lainnya.`,
    },
    {
        question: "Siapa saja yang dapat mengikuti kompetisi ini?",
        answer: `Kompetisi ini terbuka untuk seluruh Siswa SMA/SMK/Sederajat dan mahasiswa aktif dari jenjang Diploma (D3/D4) maupun Sarjana (S1) di seluruh Indonesia.`,
    },
    {
        question: "Bagaimana cara mendaftar?",
        answer: `Pendaftaran dilakukan secara online melalui link formulir yang telah disediakan oleh panitia. Informasi lengkap mengenai tata cara pendaftaran, timeline, dan persyaratan dapat ditemukan dalam guidebook resmi yang dapat diakses melalui media sosial HIMASISTIFO atau laman resmi HiTech 7.`,
    },
    {
        question: "Bagaimana sistem pelaksanaan lomba ini?",
        answer: `HiTech 7 dilaksanakan secara hybrid, yang berarti menggabungkan kegiatan daring dan luring. Mulai dari pendaftaran, workshop, hingga seleksi awal dilakukan secara online. Finalis yang lolos ke babak akhir akan mengikuti tahap final sesuai arahan panitia—baik secara langsung di Politeknik Caltex Riau, maupun melalui media daring untuk peserta dari luar kota.`,
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section id="faq" className="bg-[#1F4180] py-4 px-6 text-white font-[Poppins] min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#FFD700] mb-10 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 rounded-xl overflow-hidden bg-white/5 shadow-md">
                            <button
                                onClick={() => toggleFAQ(i)}
                                className="w-full text-left px-6 py-4 text-lg sm:text-xl font-semibold flex justify-between items-center hover:bg-white/10 transition-colors duration-300"
                            >
                                {faq.question}
                                <span className={`ml-4 transform transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </button>
                            <div
                                className={`px-6 pb-4 text-sm sm:text-base text-white transition-all duration-300 ${openIndex === i ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                    } overflow-hidden`}
                            >
                                {faq.answer.split('\n').map((para, idx) => (
                                    <p key={idx} className="mb-2">{para}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
