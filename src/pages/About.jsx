import React, { useEffect } from "react";
import Hirwa2 from "../assets/hirwa1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section id="about">
      <div className="min-h-screen w-full flex flex-col items-center text-center px-6 md:px-12 py-10 dark:bg-gray-950 dark:text-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold" data-aos="fade-up">
          About
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-10">
          <div
            className="w-full lg:w-1/2 flex justify-center"
            data-aos="fade-right"
          >
            <img
              src={Hirwa2}
              alt="Profile"
              className="h-60 w-60 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-2xl"
            />
          </div>
          <div
            className="w-full lg:w-1/2 text-center lg:text-left"
            data-aos="fade-right"
          >
            <p className="text-3xl md:text-4xl font-bold">About me</p>
            <p
              className="text-lg md:text-2xl font-light mt-4"
              data-aos="fade-left"
            >
              Hey, I am Hirwa Tresor Christian, a skilled software developer
              specializing in frontend and backend development, mobile app
              creation, and a variety of IT solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
