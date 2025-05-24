import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import Lottie from 'lottie-react';
import educationAnimation from '../assets/education-animation.json';
import { educationAnimationConfig } from '../config/animations';

interface Education {
  institution: string;
  degree: string;
  date: string;
  location: string;
  score: string;
}

const Education = () => {
  const educationData: Education[] = [
    {
      institution: 'COMMITS',
      degree: 'PG Diploma in Journalism and Audio-Visual Communication',
      date: 'Sept 2023',
      location: 'Bengaluru, Karnataka',
      score: '80%',
    },
    {
      institution: 'ACHARYA INSTITUTE OF GRADUATE STUDIES',
      degree: 'B.A. in Journalism, Psychology, Literature',
      date: 'Oct 2021',
      location: 'Bengaluru, Karnataka',
      score: 'CGPA: 8.3',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center text-gray-900 dark:text-white">
            <FaGraduationCap className="mr-4 text-5xl text-blue-500 dark:text-blue-400" />
            Education
          </h1>
          <div className="w-96 h-96 mx-auto mb-8 relative">
            <Lottie
              animationData={educationAnimation}
              {...educationAnimationConfig}
            />
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">{edu.institution}</h3>
              <p className="text-lg mb-2 text-gray-800 dark:text-gray-200">{edu.degree}</p>
              <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                <span>{edu.date}</span>
                <span>{edu.location}</span>
              </div>
              <div className="mt-4 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                Score: {edu.score}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education; 