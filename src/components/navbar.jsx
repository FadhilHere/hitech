import { useEffect, useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`bg-[#FDFEFF] w-full fixed top-0 left-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo-hitech7.png" alt="HITECH Logo" className="h-[52px] w-auto" />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 items-center mx-auto">
          <a href="/" className="text-[#1F4180] font-bold hover:underline">Home</a>
          <a href="#" className="text-[#1F4180] font-bold hover:underline">Event</a>
          <a href="/" className="text-[#1F4180] font-bold hover:underline">About Us</a>
          <a href="#faq" className="text-[#1F4180] font-bold hover:underline">FAQ</a>
        </div>

        {/* Register button (desktop) */}
        {/* <div className="hidden md:block">
          <a
            href="#register"
            className="ml-4 px-5 py-2 rounded-lg bg-gradient-to-r from-[#1F4180] to-[#306BA1] text-white font-medium shadow hover:opacity-90 transition"
          >
            Regist now →
          </a>
        </div> */}

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#1F4180] text-2xl focus:outline-none">
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu content */}
      {isOpen && (
        <div className="md:hidden bg-[#D6E0F9] px-6 pb-4 space-y-2">
          <a href="#home" className="block text-[#1F4180] font-bold">Home</a>
          <a href="#event" className="block text-[#1F4180] font-bold">Event</a>
          <a href="#about" className="block text-[#1F4180] font-bold">About Us</a>
          <a href="#faq" className="block text-[#1F4180] font-bold">FAQ</a>
          {/* <a
            href="#register"
            className="inline-block mt-2 w-full text-center px-5 py-2 rounded-lg bg-gradient-to-r from-[#1F4180] to-[#306BA1] text-white font-medium shadow hover:opacity-90 transition"
          >
            Regist now →
          </a> */}
        </div>
      )}
    </nav>
  )
}

export default Navbar
