import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { HiMoon, HiSun } from 'react-icons/hi2'
import { FiDownload } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')
  const [theme, setTheme] = useState('dark')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('light', savedTheme === 'light')
  }, [])

  useEffect(() => {
    const handleScrollActive = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      const ids = navLinks.map(link => link.href);
      let currentSection = activeSection;

      for (let i = ids.length - 1; i >= 0; i--) {
        const section = document.querySelector(ids[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          const absoluteTop = rect.top + window.scrollY;
          if (absoluteTop <= scrollPosition) {
            currentSection = ids[i];
            break;
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScrollActive);
    // Call once to set initial state
    handleScrollActive();

    return () => window.removeEventListener('scroll', handleScrollActive);
  }, [activeSection])

  const handleThemeToggle = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
    document.documentElement.classList.toggle('light', nextTheme === 'light')
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="mx-auto max-w-7xl px-4">
        <nav className={`relative flex items-center justify-between rounded-full border border-white/10 bg-black/20 px-8 py-3 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : ''}`}>

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-2xl font-black tracking-tighter text-white">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Karthik.</span>
          </a>

          {/* Center Links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${activeSection === link.href ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <a
              href="/Karthik_Resume___.pdf"
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold text-white transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] md:flex"
            >
              Download CV <FiDownload size={14} />
            </a>



            <button
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-4 right-4 top-24 overflow-hidden rounded-3xl border border-white/10 bg-black/90 p-6 backdrop-blur-2xl lg:hidden shadow-2xl"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-2xl px-4 py-3 text-lg font-medium transition-all ${activeSection === link.href ? 'bg-white/10 text-purple-400' : 'text-slate-300 hover:bg-white/5'
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-4">
                <a
                  href="/Karthik_Resume___.pdf"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-4 text-sm font-bold text-black"
                >
                  Download CV <FiDownload size={18} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar


