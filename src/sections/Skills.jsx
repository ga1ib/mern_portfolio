// Skills.jsx
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "Tailwind CSS", level: 80 },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "RESTful APIs", level: 85 },
        { name: "SQL", level: 70 },
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Responsive Design", level: 85 },
        { name: "Problem Solving", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-900 to-[#0B0B2E] text-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            My Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I've developed expertise in various technologies across the full stack development spectrum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-center text-indigo-400">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-indigo-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
