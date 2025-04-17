import { FaFacebook, FaInstagram, FaXTwitter, FaGithub, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h2 className="text-white text-lg font-semibold"> 
            <span className="text-blue-400">HITECH</span>
          </h2>
          <p className="mt-2">
            Hitech adalah sebuah perlombaan nasional yang diselenggarakan oleh HIMASISTIFO Politeknik Caltex Riau.
          </p>
          <div className="flex gap-4 mt-4 text-xl">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaXTwitter className="hover:text-white cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold">Lorem Ipsum</h3>
          <ul className="mt-2 space-y-2">
            <li>Lorem Ipsum</li> 
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold">Lorem Ipsum</h3>
          <ul className="mt-2 space-y-2">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold">Lorem Ipsum</h3>
          <ul className="mt-2 space-y-2">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold">Lorem Ipsum</h3>
          <ul className="mt-2 space-y-2">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-gray-700 pt-4 px-6">
        <p>&copy; 2025 Kabinet Rakshabinaya, Ristek. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;