import {
  FaMoneyBillAlt,
  FaUserGraduate,
  FaCheckCircle,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa"; // Import ikon

const UiUxPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1F4180] to-[#173A64] text-white mt-20 py-20 px-6 font-[Poppins] relative">
      {/* Dekorasi Glow di Latar Belakang */}
      <div className="absolute inset-0 bg-[#00e0ff] opacity-10 blur-[60px] rounded-full z-0 animate__animated animate__fadeIn animate__delay-2s"></div>
      <div className="absolute top-20 right-10 bg-[#ffd700] opacity-10 blur-[80px] w-60 h-60 rounded-full z-0 animate__animated animate__fadeIn animate__delay-3s"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl font-extrabold mb-6 text-yellow-300 animate__animated animate__fadeIn animate__delay-1s glow-text">
          UI/UX Competition
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
          Selamat datang di halaman lomba UI/UX! Temukan informasi lengkap
          mengenai ketentuan lomba, cara pendaftaran, dan file penting lainnya.
          Tunjukkan kreativitasmu dalam merancang antarmuka yang menarik dan
          fungsional!
        </p>

        <div className="bg-white/10 p-8 rounded-3xl shadow-lg backdrop-blur-lg text-left">
          <h2 className="text-3xl font-bold text-yellow-300 mb-6">
            Ketentuan Lomba
          </h2>

          {/* Kartu Ketentuan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center bg-[#1F4180] p-6 rounded-xl shadow-xl text-white space-y-4 hover:scale-105 transition-transform">
              <FaUserGraduate className="text-4xl text-yellow-300" />
              <h3 className="text-xl font-semibold">Peserta</h3>
              <p className="text-center text-gray-200">
                Peserta merupakan pelajar SMA/SMK/MA atau mahasiswa aktif
                D3/D4/S1 di Indonesia.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#1F4180] p-6 rounded-xl shadow-xl text-white space-y-4 hover:scale-105 transition-transform">
              <FaMoneyBillAlt className="text-4xl text-yellow-300" />
              <h3 className="text-xl font-semibold">Biaya Pendaftaran</h3>
              <p className="text-center text-gray-200">
                Rp75.000 (pelajar) <br /> Rp85.000 (mahasiswa) per tim.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#1F4180] p-6 rounded-xl shadow-xl text-white space-y-4 hover:scale-105 transition-transform">
              <FaCheckCircle className="text-4xl text-yellow-300" />
              <h3 className="text-xl font-semibold">Tim</h3>
              <p className="text-center text-gray-200">
                Tim maksimal terdiri dari 3 orang.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#1F4180] p-6 rounded-xl shadow-xl text-white space-y-4 hover:scale-105 transition-transform">
              <FaInstagram className="text-4xl text-yellow-300" />
              <h3 className="text-xl font-semibold">Sosial Media</h3>
              <p className="text-center text-gray-200">
                Wajib follow akun Instagram & Tiktok @hitech7_.
              </p>
            </div>
          </div>

          {/* Tombol "Selengkapnya" untuk Guidebook tanpa Garis Bawah */}
          <div className="mt-8 text-center">
            <a
              href="https://bit.ly/GuidebookUIUXHITECH-7"
              className="text-yellow-300 font-semibold hover:text-yellow-400 transition duration-300 text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              📘 Lihat Ketentuan Lomba Lebih Lengkap di Guidebook
            </a>
          </div>

          <div className="mt-8 flex justify-center animate__animated animate__fadeIn animate__delay-3s">
            <a
              href="https://bit.ly/PENDAFTARANHITECH-7"
              className="bg-yellow-300 text-[#1F4180] font-semibold px-8 py-4 rounded-full hover:bg-yellow-400 transition duration-300 transform hover:scale-105 glow-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
        {/* Contact Person */}
        <div className="mt-12 text-center">
          <div className="bg-white/10 p-6 md:p-10 rounded-3xl shadow-lg backdrop-blur-lg">
            <h2 className="text-2xl font-semibold text-yellow-300 mb-6">
              Contact Person
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center bg-[#1F4180] p-4 rounded-xl shadow-xl text-white space-y-3 hover:scale-105 transition-transform">
                <h3 className="text-lg font-semibold text-yellow-300">
                  Jehan Anisa Humairah
                </h3>
                <p className="text-center text-gray-200 text-sm">
                  <FaWhatsapp className="inline-block text-yellow-300 mr-2" />
                  <a
                    href="https://wa.me/6282285939464"
                    className="text-yellow-300 hover:text-yellow-400"
                  >
                    Chat via WhatsApp
                  </a>
                </p>
              </div>

              <div className="flex flex-col items-center bg-[#1F4180] p-4 rounded-xl shadow-xl text-white space-y-3 hover:scale-105 transition-transform">
                <h3 className="text-lg font-semibold text-yellow-300">
                  Riko Fadhila
                </h3>
                <p className="text-center text-gray-200 text-sm">
                  <FaWhatsapp className="inline-block text-yellow-300 mr-2" />
                  <a
                    href="https://wa.me/6282268853060"
                    className="text-yellow-300 hover:text-yellow-400"
                  >
                    Chat via WhatsApp
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UiUxPage;
