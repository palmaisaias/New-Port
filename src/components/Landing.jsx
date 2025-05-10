import React from 'react';
import isaiasImage from '../assets/images/isaias_image.jpeg';

function Landing() {
  return (
    <section
      id="landing"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-animated px-4 animate-fadeIn font-sans relative"
    >
<img
  src={isaiasImage}
  alt="Portrait of Isaias Palma, Full-Stack Developer"
  className="rounded-full mb-6 animate-spinIn"
  style={{
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    aspectRatio: '1 / 1'
  }}
/>

      <h2 className="text-4xl sm:text-5xl font-semibold mb-4 text-center text-gray-800 transition-all duration-700 ease-in-out animate-slideInUp">
        Hello, I’m Isaias Palma
      </h2>
      <p className="text-lg sm:text-xl text-gray-700 max-w-2xl text-center mb-8 animate-scaleUp">
        I’m a Full-Stack Developer specializing in building exceptional digital experiences.
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600 hover:shadow-lg transition-colors transition-shadow animate-pulseOnce flex items-center"
      >
        View My Work
        <svg
          className="w-5 h-5 ml-2 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>

      {/* Scroll Indicator */}
      <a href="#projects" className="absolute bottom-10 animate-bounce">
        <svg
          className="w-8 h-8 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}

export default Landing;