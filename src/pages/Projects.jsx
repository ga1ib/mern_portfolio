// Projects.jsx
import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../services/api';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects()
      .then(res => {
        console.log('Fetched projects:', res.data);
        setProjects(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setError('Failed to load projects. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#0B0B2E] text-white px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-xl">Loading projects...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#0B0B2E] text-white px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-xl text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#0B0B2E] text-white px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-xl">No projects found. Check back soon!</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-[#0B0B2E] to-[#1a1a4a] text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            My Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Check out some of my recent work. These projects showcase my skills in web development and problem-solving.
          </p>
        </div>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <ProjectCard
              key={project._id}
              project={{
                title: project.title,
                desc: project.description,
                img: project.imageUrl || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
                url: project.projectUrl
              }}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/ga1ib"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
