import { FaFacebook, FaInstagram, FaXTwitter, FaGithub, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-right">
          <div className="flex items-center mb-3">
            <img src="/logo-hitech7.png" alt="HITECH Logo" className="h-10 w-auto" />
          </div>
          <p className="text-sm text-left">
            Hitech adalah sebuah perlombaan nasional yang diselenggarakan oleh HIMASISTIFO Politeknik Caltex Riau.
          </p>
          <div className="flex gap-4 mt-4">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <a
              href="https://instagram.com/hitech7__"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-white cursor-pointer" />
            </a>

            <FaXTwitter className="hover:text-white cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Lorem Ipsum</h3>
          <ul className="space-y-1 text-sm">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Lorem Ipsum</h3>
          <ul className="space-y-1 text-sm">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Lorem Ipsum</h3>
          <ul className="space-y-1 text-sm">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Lorem Ipsum</h3>
          <ul className="space-y-1 text-sm">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-6 text-center">
        <p className="text-sm">&copy; 2025 Kabinet Rakshabinaya, Ristek. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;