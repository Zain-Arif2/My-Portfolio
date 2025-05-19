import React, { useState, useEffect } from 'react';
import logo from '/images/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
  className={`${isScrolled && !menuOpen ? 'backdrop-blur-lg bg-[#292F36]/70' : 'bg-[#292F36]'}
    fixed w-full flex justify-between items-center py-5 px-5 sm:px-[35px] md:px-10 lg:px-24 top-0 z-[999] transition-all duration-300`}
>

      {/* Logo with link to home */}
      <a href="#home" className="logo">
        <img src={logo} alt="Logo" className="w-[16%] sm:w-[22%]" />
      </a>


      {/* Hamburger Menu */}
      <div
        className="lg:hidden flex flex-col justify-center items-center gap-[5px] cursor-pointer z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={`block w-[26px] h-[4px] bg-white transition-transform duration-300 ease-in-out ${menuOpen ? 'rotate-45 translate-y-[9px]' : ''
            }`}
        />
        <span
          className={`block w-[26px] h-[4px] bg-white transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
        />
        <span
          className={`block w-[26px] h-[4px] bg-white transition-transform duration-300 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''
            }`}
        />
      </div>

      {/* Nav Links */}
      <nav
        className={`${menuOpen
            ? 'fixed inset-0 bg-[#292F36] flex flex-col justify-center items-center gap-6 lg:static lg:flex-row'
            : 'hidden lg:flex lg:gap-[40px]'
          } transition-all duration-300 ease-in-out`}
      >
        {['Home', 'About', 'Tech Stack', 'Projects', 'Contact'].map((item, idx) => (
          <a
            key={idx}
            href={`#${item.toLowerCase().replace(' ', '')}`}
            className="group text-white text-[1.3rem] relative py-[10px] px-2 hover:text-[#12F7D6] text-center"
            onClick={() => setMenuOpen(false)}
          >
            {item}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#12F7D6] transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
