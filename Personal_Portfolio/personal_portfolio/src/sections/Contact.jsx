import React from "react";
import { Mail, Github, Linkedin, FileDown } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[90vh] scroll-mt-20 flex flex-col items-center justify-center px-4 md:px-6 py-16"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        Contact Me
      </h1>

      <p className="text-base md:text-lg text-gray-600 max-w-xl text-center mb-12 px-2">
        Feel free to reach out for job opportunities, collaborations, or any
        questions. I’d love to connect with you!
      </p>

      {/* Contact Links */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-12 text-lg md:text-xl">
        
        <a
          href="mailto:shashankchagi.31@gmail.com"
          className="flex items-center gap-3 hover:text-blue-600 transition"
        >
          <Mail size={24} /> shashankchagi.31@gmail.com
        </a>

        <a
          href="https://github.com/Shashank221B/My_React_Projects"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-blue-600 transition"
        >
          <Github size={24} /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/shashank-chagi-03b8761ba/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-blue-600 transition"
        >
          <Linkedin size={24} /> LinkedIn
        </a>
      </div>

      {/* Download Resume */}
      <a
        href="/Shashank_Resume.pdf"
        download
        className="mt-4 flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition shadow-lg text-lg"
      >
        <FileDown size={22} /> Download Resume
      </a>
    </section>
  );
};

export default Contact;
