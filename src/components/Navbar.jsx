import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { FaGlobe, FaBars, FaTimes } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [showDropdown, setShowDropdown] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    setShowDropdown(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-4 sm:px-6 md:px-10 py-[18px] flex justify-between items-center font-medium">
      {/* Logo */}
     <a href="#" className="flex items-center gap-2">
  <img
    src="/bb.png"
    alt="Logo"
    className="h-10 w-auto object-contain self-center"
  />
  <span className="text-[12px] sm:text-[13px] md:text-[20px] tracking-wide text-pink-400">
    BEYZA BOZKURT
  </span>
</a>

      {/* Masaüstü Menü */}
      <ul className="hidden md:flex gap-6 lg:gap-10 text-gray-800 text-sm md:text-[15px] font-semibold tracking-wide mr-4 lg:mr-6">
        {['home', 'about', 'projects', 'contact'].map((section) => (
          <li key={section} className="group">
            <a
              href={section === 'home' ? '#' : `#${section}`}
              className="relative hover:text-pink-300 transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-pink-300 after:transition-all after:duration-300 group-hover:after:w-full"
            >
              {t(`navbar.${section}`)}
            </a>
          </li>
        ))}
      </ul>

      {/* Sağ Alan (CV + Dil Butonu) */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6 relative flex-shrink-0">
        <a
          href="/FatmaBeyzaBozkurt_CV.pdf"
          download
          className="px-3 py-1.5 lg:px-4 lg:py-2 border border-gray-300 rounded-md text-xs lg:text-sm text-gray-800 hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          {t('navbar.downloadCv') || 'CV İndir'}
        </a>

        {/* Dil Seçici */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center px-3 py-1.5 lg:py-2 border border-gray-300 rounded-md text-xs lg:text-sm text-gray-800 hover:bg-gray-100 transition-colors"
          >
            <FaGlobe className="mr-1" />
            {i18n.language.toUpperCase()}
            <IoMdArrowDropdown className="ml-1" />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow-md z-10">
              <button
                onClick={() => changeLanguage('tr')}
                className="block px-4 py-2 w-full text-left hover:bg-gray-100 text-sm"
              >
                Türkçe
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className="block px-4 py-2 w-full text-left hover:bg-gray-100 text-sm"
              >
                English
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobil Menü Butonu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-xl text-gray-800 focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobil Menü */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/40 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-[80%] max-w-xs h-full bg-white shadow-xl px-6 py-6 z-50 rounded-l-xl animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                <FaTimes />
              </button>
            </div>

            <ul className="flex flex-col gap-5 text-gray-800 font-semibold text-base">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <li key={section}>
                  <a
                    href={section === 'home' ? '#' : `#${section}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="transition-all hover:text-pink-500 hover:scale-105"
                  >
                    {t(`navbar.${section}`)}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="/FatmaBeyzaBozkurt_CV.pdf"
              download
              className="block mt-6 px-4 py-2 border border-gray-300 rounded-md text-sm text-center text-gray-800 hover:bg-pink-50 hover:border-pink-300 transition-all"
            >
              {t('navbar.downloadCv') || 'CV İndir'}
            </a>

            <div className="mt-6 relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-800 hover:bg-gray-100 transition"
              >
                🌐 {i18n.language.toUpperCase()} <IoMdArrowDropdown className="ml-2" />
              </button>

              {showDropdown && (
                <div className="absolute left-0 mt-2 w-full border border-gray-200 rounded-md shadow-lg bg-white z-10">
                  <button
                    onClick={() => changeLanguage('tr')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Türkçe
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    English
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
