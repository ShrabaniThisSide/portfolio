import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiEye, HiDocumentText } from 'react-icons/hi';
import Lottie from 'lottie-react';
import resumeCV from '../assets/Shrabani_CV.pdf';

const Resume = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-white via-blue-50 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
          >
            My Resume
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Professional Journey
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Explore my professional experience, skills, and achievements in journalism and media production.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={resumeCV}
                    download="Shrabani_Chakraborty_CV.pdf"
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <HiDownload className="w-5 h-5" />
                    <span>Download CV</span>
                  </motion.a>
                  <motion.a
                    href={resumeCV}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent text-accent dark:text-accent rounded-lg hover:bg-accent/10 transition-colors space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <HiEye className="w-5 h-5" />
                    <span>View CV</span>
                  </motion.a>
                </div>
              </div>

              <motion.div
                className="w-48 h-48 relative"
                animate={{
                  rotate: isHovered ? 360 : 0
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple-500 rounded-full opacity-20 blur-xl animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <HiDocumentText className="w-24 h-24 text-accent" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Skills
              </h3>
              <ul className="space-y-3">
                {[
                  "Journalism & Content Writing",
                  "Media Production",
                  "Radio Broadcasting",
                  "Interview Conducting",
                  "Research & Analysis"
                ].map((skill, index) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Highlights
              </h3>
              <ul className="space-y-3">
                {[
                  "2+ Years of Experience",
                  "Published in Major News Outlets",
                  "Radio Show Production",
                  "Multimedia Storytelling",
                  "Digital Content Strategy"
                ].map((highlight, index) => (
                  <motion.li
                    key={highlight}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume; 