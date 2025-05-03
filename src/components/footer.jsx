import { FaInstagram, FaTiktok, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
// import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Tentang HITECH */}
        <div>
          <div className="flex items-center mb-3">
            <img src="/logo-hitech7.png" alt="HITECH Logo" className="h-10 w-auto" />
          </div>
          <p className="text-sm">
            Hitech adalah sebuah perlombaan nasional yang diselenggarakan oleh HIMASISTIFO Politeknik Caltex Riau.
          </p>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-white font-semibold mb-3">Hubungi Kami</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-white" /> himasistifo@bem.pcr.ac.id
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-white" /> (0761) 53939
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram className="text-white" />
              <a href="https://www.instagram.com/hitech7__" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                @hitech7__
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaTiktok className="text-white" />
              <a href="https://www.tiktok.com/@hitech7__" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                @hitech7__
              </a>
            </li>
          </ul>
        </div>

        {/* Alamat */}
        <div>
          <h3 className="text-white font-semibold mb-3">Alamat</h3>
          <p className="text-sm flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1 text-white" />
            Jl. Umban Sari No.1, Umban Sari, Kec. Rumbai, Kota Pekanbaru, Riau 28265
          </p>
        </div>

        {/* Google Maps */}
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4732.479180524231!2d101.42609689999999!3d0.5709752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ab67086f2e89%3A0x65a24264fec306bb!2sPoliteknik%20Caltex%20Riau!5e1!3m2!1sen!2sid!4v1745245235035!5m2!1sen!2sid"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center">
        <p className="text-sm">
          &copy; 2025 Kabinet Rakshabinaya, Ristek. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
