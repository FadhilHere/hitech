import {
    FaTrophy,
    FaMedal,
    FaMoneyBillWave,
    FaCertificate
  } from 'react-icons/fa';
  import { useEffect, useState } from 'react';
  
  const rewards = [
    {
      title: 'Juara I',
      color: 'text-yellow-300',
      icon: <FaTrophy className="text-5xl text-yellow-300 mb-4" />,
      items: ['Uang Tunai', 'Sertifikat', 'Medali']
    },
    {
      title: 'Juara II',
      color: 'text-gray-300',
      icon: <FaTrophy className="text-5xl text-gray-300 mb-4" />,
      items: ['Uang Tunai', 'Sertifikat', 'Medali']
    },
    {
      title: 'Juara III',
      color: 'text-[#cd7f32]',
      icon: <FaTrophy className="text-5xl text-[#cd7f32] mb-4" />,
      items: ['Uang Tunai', 'Sertifikat', 'Medali']
    }
  ];
  
  const HadiahPage = () => {
    const [prize, setPrize] = useState(0);
  
    // Prize Pool Counter Animation
    useEffect(() => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < 10000000) {
          count += 20000;
          setPrize(count);
        } else {
          setPrize(10000000);
          clearInterval(interval);
        }
      }, 30);
    }, []);
  
    return (
      <section className="min-h-screen bg-gradient-to-b from-[#1F4180] to-[#173A64] text-white py-20 px-6 font-[Poppins] relative overflow-hidden">
        {/* Glow Background */}
        <div className="absolute inset-0 bg-[#00e0ff] opacity-10 blur-[100px] rounded-full z-0"></div>
  
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl font-extrabold mb-8 text-yellow-300 animate__animated animate__fadeInDown">
            Hadiah Kompetisi
          </h1>
  
          {/* Prize Pool */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 animate__animated animate__fadeInDown">
              Total Prize Pool
            </h2>
            <p className="text-4xl md:text-5xl font-extrabold text-yellow-300 animate__animated animate__pulse animate__infinite">
              Rp{prize.toLocaleString('id-ID')}
            </p>
            <p className="text-md text-gray-300 mt-2">
              Dibagikan untuk Juara I, II, dan III
            </p>
          </div>
  
          {/* Reward Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rewards.map((reward, index) => (
              <div
                key={index}
                className="bg-[#264a92] p-6 rounded-3xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {reward.icon}
                <h3 className={`text-2xl font-bold mb-4 ${reward.color}`}>{reward.title}</h3>
                <ul className="text-left text-gray-200 space-y-3">
                  {reward.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      {item === 'Uang Tunai' && (
                        <FaMoneyBillWave className="text-yellow-300" />
                      )}
                      {item === 'Sertifikat' && (
                        <FaCertificate className="text-yellow-300" />
                      )}
                      {item === 'Medali' && (
                        <FaMedal className="text-yellow-300" />
                      )}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HadiahPage;
  