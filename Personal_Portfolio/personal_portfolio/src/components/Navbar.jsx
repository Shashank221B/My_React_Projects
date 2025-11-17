import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveringTop, setHoveringTop] = useState(false);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // scrolling DOWN → hide
      } else {
        setShowNavbar(true); // scrolling UP → show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Show navbar when cursor is at top 80px
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY < 80) {
        setHoveringTop(true);
        setShowNavbar(true);
      } else {
        setHoveringTop(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Hover area to bring navbar back */}
      <div className="fixed top-0 left-0 w-full h-10 z-20 pointer-events-none"></div>

      <nav
        className={`sticky top-0 z-30 bg-white/70 backdrop-blur-lg border-b border-gray-300 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold hover:text-orange-400 transition-colors duration-300 cursor-pointer">
            <a href="/">Shashank&apos;s Portfolio</a>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-blue-600 text-xl">About</a>
            <a href="#skills" className="hover:text-blue-600 text-xl">Skills</a>
            <a href="#project" className="hover:text-blue-600 text-xl">Projects</a>
            <a href="#contact" className="hover:text-blue-600 text-xl">Contact</a>
          </div>

          <button
            className="md:hidden text-gray-800 hover:text-orange-400 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center bg-white/90 border-t border-gray-300 py-4 space-y-4">
            {["about", "skills", "project", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 text-lg transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
