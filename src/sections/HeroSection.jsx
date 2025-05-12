// HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-[#0B0B2E] via-[#1E1E60] to-[#3F3FB3] text-white px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">Galib</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          MERN Stack Developer
        </h2>
        <p className="text-xl sm:text-2xl max-w-2xl mx-auto mb-10 text-gray-200">
          I build modern, responsive, and dynamic web applications with MongoDB, Express, React, and Node.js.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/projects"
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-lg font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 bg-transparent border-2 border-white rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-900 transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDownIcon className="h-8 w-8" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

