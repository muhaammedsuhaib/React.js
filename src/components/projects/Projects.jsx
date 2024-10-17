import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    // { name: 'Accordion', details: 'React and ,Tailwind css', link: '/accordion' },
    // { name: 'Counter App', details: 'React and Redux ,Tailwind css', link: '/counter' },
    { name: 'Task Managment', details: 'React and Redux ,Tailwind css', link: '/task-managment' },
    { name: 'Tooltip', details: 'React Tooltip', link: '/tooltip' },
    { name: 'Methods', details: 'Methods using React', link: '/methods' },
    { name: 'Rating', details: 'Rating in using useState', link: '/rating-star' },
    { name: 'Custom Theam', details: 'Select custom theam', link: '/custom' },
  ];

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.details.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          className="bg-white text-gray-900 rounded-3xl shadow-2xl p-8 lg:p-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex items-center mb-8">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-300"
            >
              <FaHome className="text-2xl mr-2" />
              Back to Home
            </button>
          </div>

          <motion.h2
            className="text-4xl lg:text-4xl font-extrabold text-center mb-6 lg:mb-8 leading-tight tracking-wide hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            Projects
          </motion.h2>

          <div className="mb-3">
            <input
              type="text"
              placeholder="Search Projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="overflow-x-auto h-[32vh]">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
                  <th className="py-3 px-6 text-left text-lg font-semibold">Project Name</th>
                  <th className="py-3 px-6 text-left text-lg font-semibold">Project Details</th>
                  <th className="py-3 px-6 text-left text-lg font-semibold">Project Link</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, index) => (
                    <motion.tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100"
                      whileHover={{ backgroundColor: 'rgba(238, 238, 238, 0.8)' }}
                    >
                      <td className="py-4 px-6 text-gray-900">{project.name}</td>
                      <td className="py-4 px-6 text-gray-700">{project.details}</td>
                      <td className="py-4 px-6">
                      <Link
                          to={project.link}
                          className="text-blue-500 hover:underline"
                        >
                          View Project
                        </Link>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="py-4 px-6 text-gray-700 text-center">No projects found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
