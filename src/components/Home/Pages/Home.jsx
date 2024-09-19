import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const nav=useNavigate();
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600">
      <div className="container mx-auto px-6 py-12 lg:px-16 z-10">
        <motion.div
          className="bg-white text-gray-900 rounded-3xl shadow-2xl p-8 lg:p-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.h1
            className="text-5xl lg:text-6xl font-extrabold text-center mb-6 lg:mb-8 leading-tight tracking-wide hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Welcome to Suhaib's React App
          </motion.h1>

          <motion.p
            className="text-lg lg:text-xl text-center leading-relaxed mb-8 lg:mb-12 text-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Explore Suhaib's collection of React tasks and projects, featuring
            responsive designs, animations, and cutting-edge features.
          </motion.p>

          <motion.div
            className="flex justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-400 text-white text-lg lg:text-xl font-semibold rounded-full shadow-lg hover:from-green-400 hover:to-blue-500 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              onClick={()=>nav('/projects')}
            >
              Explore My Projects
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Skills/Features Section */}
        <div className="mt-16 px-4 py-12 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Skills & Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Skill Card */}
            <motion.div
              className="bg-white text-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">
                <FaReact />
              </div>
              <h3 className="text-2xl font-semibold mb-2">React</h3>
              <p className="text-gray-700">
                Building dynamic and interactive user interfaces with React.
              </p>
            </motion.div>

            {/* Skill Card */}
            <motion.div
              className="bg-white text-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">
                <FaNodeJs />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Node.js</h3>
              <p className="text-gray-700">
                Creating scalable server-side applications with Node.js.
              </p>
            </motion.div>

            {/* Skill Card */}
            <motion.div
              className="bg-white text-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">
                <FaDatabase />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Databases</h3>
              <p className="text-gray-700">
                Managing and querying databases like MongoDB.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
