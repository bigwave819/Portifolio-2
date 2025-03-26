import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
        AOS.init({
          duration: 800,
          offset: 120,
          easing: 'ease-in-out',
        });
  }, []);

  return (
    <header className="w-full h-20 flex items-center justify-between px-6 md:px-12 dark:bg-gray-950">
      {/* Logo or Brand */}
      <div></div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-2xl dark:text-gray-200" 
        onClick={() => setMenuOpen(!menuOpen)}
        data-aos="fade-left"
      >
        ☰
      </button>
      
      {/* Navigation Links */}
      <nav className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white dark:bg-gray-950 dark:text-gray-200 md:flex space-x-5 text-center md:text-left ${menuOpen ? "block" : "hidden"}`} data-aos="fade-left">
        <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5 font-normal p-6 md:p-0">
          <li><a href="#about" className="text-2xl block">About</a></li>
          <li><a href="#skills" className="text-2xl block">Skills</a></li>
          <li><a href="#projects" className="text-2xl block">Projects</a></li>
          <li><a href="#contact" className="text-2xl block">Contact</a></li>
        </ul>
      </nav>
      
      {/* Theme Toggle */}
      <button onClick={() => setDarkMode(!darkMode)} className="text-2xl cursor-pointer ml-4" data-aos="fade-right">
        {darkMode ? <FiSun className="text-yellow-500" /> : <FiMoon className="text-gray-800 dark:text-white" />}
      </button>
    </header>
  );
};

export default Header;