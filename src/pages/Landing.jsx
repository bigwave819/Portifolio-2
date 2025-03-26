import React, { useEffect } from "react";
import Header from "../components/Header";
import Hirwa from "../assets/hirwa2.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Landing = () => {
  useEffect(() => {
      AOS.init({
        duration: 800,
        offset: 120,
        easing: 'ease-in-out',
      });
    }, []);
  return (
    <div className="min-h-screen flex flex-col items-center dark:bg-gray-950 dark:text-gray-200">
      <Header />
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 gap-10 w-full max-w-6xl mt-16" data-aos="fade-up">
        {/* Profile Section */}
        <div className="lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left" data-aos="fade-right">
          <img src={Hirwa} alt="Profile" className="h-40 w-40 rounded-full" />
          <h1 className="text-3xl md:text-5xl font-semibold mt-3" data-aos="fade-right">Hirwa Tresor</h1>
          <h4 className="text-lg md:text-xl text-gray-600 dark:text-gray-400" data-aos="fade-left">Software Engineer</h4>
        </div>
        {/* Description Section */}
        <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-left">
          <p className="text-lg md:text-2xl leading-relaxed">
            Experienced software developer with a strong
            foundation in various programming languages.
            Known for my ability to rapidly learn new
            technologies and adapt to evolving industry
            trends. Proficient in troubleshooting complex
            issues and skilled in optimizing application
            performance to ensure robust and efficient
            software solutions.
          </p>
        </div>
      </div>
      <div className="mt-52 inline-flex space-x-6" data-aos="fade-up-left">
      <FaLinkedin  size={30} className="text-blue-600"/>
      <FaGithub size={30}/>
      <FaSquareInstagram size={30} className="text-pink-600"/>
      </div>
    </div>
  );
};

export default Landing;
