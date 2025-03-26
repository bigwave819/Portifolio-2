import React, { useEffect } from "react";
import { FaLaptopCode, FaServer, FaMobileAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const skillsData = [
  {
    title: "Frontend Development",
    icon: <FaLaptopCode className="text-8xl mx-auto mb-3" />,
    description:
      "Builds the user interface and experience of web applications using HTML, CSS, and JavaScript."
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-8xl mx-auto mb-3" />,
    description:
      "Builds the logic and database interactions of web applications using modern backend technologies."
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt className="text-8xl mx-auto mb-3" />,
    description:
      "Develops cross-platform mobile applications with intuitive user experiences."
  }
];

const Skills = () => {
  useEffect(() => {
      AOS.init({
        duration: 800,
        offset: 120,
        easing: 'ease-in-out',
      });
    }, []);
  return (
    <div className="min-h-screen flex flex-col items-center text-center py-10 px-6 md:px-12 dark:bg-gray-950 dark:text-gray-200">
      <h1 className="text-3xl md:text-4xl font-bold mb-10" data-aos="fade-up">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl" data-aos="flip-left">
        {skillsData.map((skill, index) => (
          <div key={index} className="bg-gray-200 dark:bg-gray-800 p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-20" data-aos="fade-right">{skill.title}</h2>
            {skill.icon}
            <p className="text-gray-700 dark:text-gray-300 text-2xl mt-10 font-extralight">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
