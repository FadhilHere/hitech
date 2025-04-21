import {
  FaTrophy,
  FaMedal,
  FaMoneyBillWave,
  FaCertificate,
} from 'react-icons/fa';
import { useEffect, useState } from 'react';

const rewards = [
  {
    title: 'Juara I',
    color: 'text-yellow-300',
    icon: <FaTrophy className="text-5xl text-yellow-300 mb-4" />,
    items: ['Uang Tunai', 'Sertifikat', 'Medali'],
  },
  {
    title: 'Juara II',
    color: 'text-gray-300',
    icon: <FaTrophy className="text-5xl text-gray-300 mb-4" />,
    items: ['Uang Tunai', 'Sertifikat', 'Medali'],
  },
  {
    title: 'Juara III',
    color: 'text-[#cd7f32]',
    icon: <FaTrophy className="text-5xl text-[#cd7f32] mb-4" />,
    items: ['Uang Tunai', 'Sertifikat', 'Medali'],
  },
];

const HadiahPage = () => {
  const [prize, setPrize] = useState(0);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < 14000000) {
        count += 75000;
        setPrize(count);
      } else {
        setPrize(14000000);
        clearInterval(interval);
      }
    }, 30);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1F4180] via-[#173A64] to-[#1F4180] text-white py-20 px-6 font-[Poppins] relative overflow-hidden">
      {/* Logo */}
      <img
        src="/logo-hitech7.png"
        alt="Logo"
        className="mx-auto mb-8 w-20 md:w-24 animate-pulse"
      />

      {/* Background glow */}
      {/* <div className="absolute inset-0 bg-[#00e0ff]/10 blur-[100px] z-0"></div> */}

      {/* Title Section */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-300 animate__animated animate__fadeInDown">
          Benefit & Total Hadiah
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 mx-auto rounded-full mb-6" />

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
            Total Prize Pool
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold text-yellow-300 animate__animated animate__pulse animate__infinite">
            Rp{prize.toLocaleString('id-ID')}
          </p>
          <p className="text-sm text-gray-300 mt-2">
            Dibagikan untuk Juara I, II, dan III
          </p>
        </div>

        {/* Reward Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className="relative bg-[#264a92]/70 p-6 rounded-3xl shadow-2xl backdrop-blur-md hover:scale-105 transition-transform duration-300 group"
            >
              <div className="absolute -top-10 right-2 w-16 h-16">
                <img
                  src={`/maskot${index + 1}.png`}
                  alt={`Maskot ${index + 1}`}
                  className="w-full h-full object-contain animate__animated animate__bounceIn"
                />
              </div>
              {reward.icon}
              <h3 className={`text-xl md:text-2xl font-bold mb-4 ${reward.color}`}>
                {reward.title}
              </h3>
              <ul className="text-left text-gray-100 space-y-3 text-base">
                {reward.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {item === 'Uang Tunai' && (
                      <FaMoneyBillWave className="text-yellow-300" />
                    )}
                    {item === 'Sertifikat' && (
                      <FaCertificate className="text-yellow-300" />
                    )}
                    {item === 'Medali' && <FaMedal className="text-yellow-300" />}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Maskots Bottom */}
      <img
        src="/mascot4.png"
        alt="Maskot Kiri"
        className="absolute bottom-0 left-0 w-28 md:w-36 opacity-50"
      />
      <img
        src="/maskot6.png"
        alt="Maskot Kanan"
        className="absolute bottom-0 right-0 w-28 md:w-36 opacity-50"
      />
    </section>
  );
};

export default HadiahPage;
