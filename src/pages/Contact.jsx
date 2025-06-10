import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_k8e1phc",
        "template_tms1ipc",
        e.target, // Use the form element directly
        "UttnbXkySbM3nczsA"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          // Reset form
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error(error);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="contact">
      <div className="min-h-screen flex flex-col items-center justify-center py-10 px-6 md:px-12 dark:bg-gray-950">
        <h1
          className="text-3xl md:text-4xl font-bold mb-6 dark:text-gray-200"
          data-aos="fade-up"
        >
          Contact
        </h1>

        <form
          className="w-full max-w-lg bg-white dark:bg-gray-900 dark:text-gray-200 border p-6 shadow-md rounded-lg"
          onSubmit={sendEmail}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div data-aos="fade-right">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                value={name}
                name="from_name"
                onChange={(e) => setName(e.target.value)}
                className="border p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700"
                required
              />
            </div>
            <div data-aos="fade-left">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="border p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700"
                required
              />
            </div>
          </div>

          <div className="mb-4" data-aos="fade-up">
            <label htmlFor="subject" className="sr-only">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              value={subject}
              name="subject"
              onChange={(e) => setSubject(e.target.value)}
              className="border p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700"
              required
            />
          </div>

          <div className="mb-4" data-aos="fade-up">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              className="border p-3 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-green-600 text-white cursor-pointer font-bold py-3 px-6 w-full mt-4 hover:bg-green-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
            data-aos="fade-up"
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
