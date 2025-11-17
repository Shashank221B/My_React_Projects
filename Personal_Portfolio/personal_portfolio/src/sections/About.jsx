const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-20 bg-gray-50 px-4 md:px-6 text-center min-h-screen flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        About Me
      </h2>

      <p className="max-w-2xl md:max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg md:text-xl lg:text-2xl px-2">
        I’m a dedicated Front-end developer with a strong focus on building intuitive
        and visually appealing web applications. I enjoy solving real-world problems
        with code and continuously learning modern tools and frameworks.
      </p>
    </section>
  );
};

export default About;
