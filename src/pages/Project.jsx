import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import CarTwo from "../assets/car2.png";
import Bra from "../assets/bra.jpg";
import Anime from "../assets/anime.jpg";
import Team from "../assets/team.jpg";
import Vr from "../assets/vr.jpg";
import CarOne from "../assets/car one.png";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    image: CarTwo,
    title: "Project 1",
    description: "This is the car renting app done in React.",
  },
  {
    id: 2,
    image: Bra,
    title: "Project 2",
    description: "A fashion e-commerce website built with Vue.js.",
  },
  {
    id: 3,
    image: Anime,
    title: "Project 3",
    description: "An anime streaming platform with advanced search features.",
  },
  {
    id: 4,
    image: Team,
    title: "Project 4",
    description: "A team collaboration tool designed for remote work.",
  },
  {
    id: 5,
    image: Vr,
    title: "Project 5",
    description: "A VR experience app showcasing immersive environments.",
  },
  {
    id: 6,
    image: CarOne,
    title: "Project 6",
    description: "An AI-powered vehicle recognition system.",
  },
];

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="project">
      <div className="p-8 dark:bg-gray-950">
        <h2
          className="text-4xl font-bold text-center mb-6 dark:text-gray-200"
          data-aos="fade-up"
        >
          Project
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          data-aos="flip-down"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-white text-black px-4 py-2 rounded-lg shadow-md"
                >
                  Show More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Dialog
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
        >
          <Dialog.Panel className="bg-white dark:bg-gray-950 dark:text-gray-200 p-6 rounded-lg max-w-lg w-full">
            <Dialog.Title className="text-lg font-bold mb-4">
              {selectedProject?.title}
            </Dialog.Title>
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title}
              className="w-full h-40 object-cover mb-4"
            />
            <p className="text-gray-700 dark:text-gray-300">
              {selectedProject?.description}
            </p>
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </Dialog.Panel>
        </Dialog>
      </div>
    </section>
  );
}
