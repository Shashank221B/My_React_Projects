import React from "react";

const About = () => {
  return (
    <div className="h-[80vh] w-full px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Card 1: Introduction */}
      <div className="bg-white shadow-lg rounded-xl p-6 border">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Introduction</h1>

        <ul className="text-lg font-medium list-disc list-inside space-y-2">
          <li>This is a simple and modern shopping platform built using React + Vite.</li>
          <li>A demo e-commerce site built for learning and practicing frontend development.</li>
        </ul>
      </div>

      {/* Card 2: Technologies */}
      <div className="bg-white shadow-lg rounded-xl p-6 border">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Technologies Used</h1>

        <ul className="text-lg font-medium list-disc list-inside space-y-2">
          <li>React + Vite</li>
          <li>React Context API</li>
          <li>Tailwind CSS</li>
          <li>Fake Store API / Local product data</li>
        </ul>
      </div>

      {/* Card 3: Key Features */}
      <div className="bg-white shadow-lg rounded-xl p-6 border">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Key Features</h1>

        <ul className="text-lg font-medium list-disc list-inside space-y-2">
          <li>Browse products</li>
          <li>View product details</li>
          <li>Add/remove items from cart</li>
          <li>Real-time cart total</li>
          <li>Responsive UI</li>
          <li>Search & filter</li>
          <li>Notification popups</li>
        </ul>
      </div>

    </div>
  );
};

export default About;
