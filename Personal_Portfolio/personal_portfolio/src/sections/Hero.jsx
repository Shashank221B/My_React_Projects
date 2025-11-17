const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 md:px-6"
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-snug">
        Hi, I’m <span className="text-blue-600">Shashank Chagi</span>
      </h1>

      {/* Profile Image */}
      <img
        src="src/assets/Images/shas_passImg_Circ.png"
        alt="My_ProfileImage"
        className="w-36 h-36 sm:w-44 sm:h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full shadow-lg object-cover mt-2"
      />

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl md:max-w-2xl mb-8 mt-5 px-2">
        A passionate Front-End Developer focused on creating clean, responsive,
        and engaging web experiences using React and modern web technologies.
      </p>

      {/* Button */}
      <a
        href="#project"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all text-base md:text-lg"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
