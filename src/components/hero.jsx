// src/components/Hero.tsx
import logo from '/logo-hitech7.png' // ganti path sesuai lokasi logo kamu
import maskot from '/maskot2.png' // ganti path sesuai lokasi logo kamu

const Hero = () => {
  return (
    <section className="pt-28 pb-20 bg-[#1F4180] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-pulsar leading-tight flex flex-wrap justify-center md:justify-start items-center gap-3">
            <span>ARE YOU READY</span>
            <br className="hidden sm:block" />
            <span className="inline-flex items-center gap-3">
              TO COMPETE?
              <img
                src={logo}
                alt="Logo"
                className="w-10 h-10 object-contain inline-block"
              />
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-200 max-w-xl">
            Tantang dirimu di ajang perlombaan paling seru tahun ini! Bawa timmu, tunjukkan ide terbaik, dan menangkan hadiahnya.
          </p>
          <a
            href="#register"
            className="mt-6 inline-block bg-gradient-to-r from-[#64C6F7] to-[#306BA1] text-white font-semibold px-6 py-3 rounded-lg shadow hover:opacity-90 transition"
          >
            Join Now →
          </a>

        </div>

        {/* Mascot Image */}
        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
          <img
            src={maskot} // update path jika perlu
            alt="Hero Mascot"
            className="w-full h-auto object-contain drop-shadow-2xl animate-float"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
