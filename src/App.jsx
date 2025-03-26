import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"
import Home from "./pages/Landing"
import Skills from "./pages/Skills"
import Project from "./pages/Project"
import React, { useState, useEffect } from "react";

function App() {

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

  return (
    <div>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
