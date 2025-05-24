import React from 'react';
import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { HiChevronDown } from 'react-icons/hi';
import { FaBriefcase } from 'react-icons/fa';
import Lottie from 'lottie-react';
import experienceAnimation from '../assets/experience-animation.json';
import { educationAnimationConfig } from '../config/animations';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

const Experience = () => {
  const experiences: Experience[] = [
    {
      company: '101REPORTERS',
      role: 'Freelance journalist',
      period: 'Apr 2024 - Current',
      description: [
        'Involves projects addressing rural issues',
        'Issues concerning the lower strata and economically backward section of the society'
      ]
    },
    {
      company: 'INDIGO 91.9 FM',
      role: 'Executive Producer and Creative Writer | Consultant',
      period: 'Sep 2024 - May 2025',
      description: [
        'Curated and produced content for The Morning Show',
        'Delivered voice-overs and conducted outdoor broadcasts',
        'Scripted and created jingles for various clients'
      ]
    },
    {
      company: 'ARCHETYPE',
      role: 'Associate Consultant',
      period: 'Jan 2024 - June 2024',
      description: [
        'Content Writing| Research| Press Release| Media Pitches',
        'B2B Tech Clients - Kyndryl, Pegasystems, Genesys Cloud Services'
      ]
    },
    {
      company: 'RED FM',
      role: 'Creative Producer (Programming)',
      period: 'May 2023 - Sept 2023',
      description: [
        'Created ad copies and video scripts while managing production and outdoor broadcasts, including interviews with Bollywood and sports personalities'
      ]
    },
    {
      company: 'THE NEW INDIAN EXPRESS',
      role: 'Feature Writer (Intern)',
      period: 'April 2022 - May 2022',
      description: [
        'Wrote feature stories for the City Express. Conducted interviews with startup founders, co-founders, and key team members',
        'Managed page 2 of the City Express typically involved in curating content'
      ]
    },
    {
      company: 'THE HINDU',
      role: 'Reporter Intern',
      period: 'March 2022 - April 2022',
      description: [
        'Wrote news articles adhering to The Hindu\'s editorial standards, conducting thorough research and fact-checking',
        'Attended press conferences and participated in newsroom operations, including editorial meetings and story assignments'
      ]
    }
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
            <FaBriefcase className="mr-4 text-5xl text-blue-500 dark:text-blue-400" />
            Professional Experience
          </h1>
          <div className="w-96 h-96 mx-auto mb-8 relative">
            <Lottie
              animationData={experienceAnimation}
              {...educationAnimationConfig}
            />
          </div>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Disclosure>
                {({ open }) => (
                  <div className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                    <Disclosure.Button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400 mr-4">
                          {exp.period}
                        </span>
                        <HiChevronDown
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-5 h-5 text-blue-500 dark:text-blue-400 transition-transform`}
                        />
                      </div>
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-6 py-4">
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 