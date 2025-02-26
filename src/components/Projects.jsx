import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: 'Melanated Sanctuary',
      description: 'A full-stack self-improvement platform with secure user authentication and CRUD operations.',
      link: 'https://ms-frontend-proto.onrender.com/',
      technologies: ['React', 'Flask', 'MySQL', 'Node.js', 'JavaScript'],
    },
    {
      title: 'Prediction and Analysis Using LSTM Neural Networks',
      description: 'A stock price prediction model using LSTM neural networks with a user-friendly GUI.',
      link: 'https://github.com/palmaisaias/Prediction-Model.git',
      technologies: ['Python', 'TensorFlow', 'Tkinter', 'Pandas', 'NumPy'],
    },
    {
      title: 'Canabru Coffee Website',
      description: 'A responsive coffee shop website featuring animations, parallax effects, and interactive maps.',
      link: 'https://canabru-coffee.onrender.com/',
      technologies: ['React.js', 'Bootstrap', 'JavaScript', 'AOS', 'Leaflet'],
    },
    {
      title: 'MoodShelf',
      description: 'An Android app that provides real-time, mood-based book recommendations.',
      link: 'https://github.com/palmaisaias/MoodShelf-App.git',
      technologies: ['Flutter', 'Dart', 'Python', 'AWS', 'MySQL'],
    },
    {
      title: 'Echo: AI-Powered Mental Health Journal',
      description: 'An AI-enhanced journaling platform with sentiment analysis and mood trend visualizations.',
      link: 'https://github.com/palmaisaias/Echo.git',
      technologies: ['Vue.js', 'Node.js', 'Python', 'spaCy', 'MySQL', 'Chart.js'],
    },
    {
      title: 'Fishing Guide',
      description: 'Prototype site for Expedition LLC.',
      link: 'https://reel-fishing-adventures.onrender.com',
      technologies: ['JavaScript', 'CSS', 'HTML', 'Render', 'Tailwind', 'Headless UI'],
    },
    {
      title: 'sportSHEek',
      description: 'Prototype site. A no bs blog for the disinterested sports fan.',
      link: 'https://sportsheek.onrender.com',
      technologies: ['JavaScript', 'CSS', 'HTML', 'Render', 'Tailwind', 'Headless UI'],
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-animated text-center font-sans relative animate-fadeIn"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 animate-slideInUp text-gray-800">
        Projects & Achievements
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 animate-scaleUp"
          >
            <h3 className="text-2xl font-semibold mb-3 text-gray-800 animate-slideInUp">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-4 animate-fadeIn">
              {project.description}
            </p>
            <ul className="flex flex-wrap justify-center space-x-2 mb-4 animate-staggerFadeIn">
              {project.technologies.map((tech, i) => (
                <li
                  key={i}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm mb-2"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <a
              href={project.link}
              className="inline-flex items-center mt-2 text-blue-500 hover:text-blue-700 hover:underline transition-colors animate-highlight"
              target="_blank"
              rel="noreferrer"
            >
              View Project <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-300 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
    </section>
  );
}

export default Projects;