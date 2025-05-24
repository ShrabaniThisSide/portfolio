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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center text-gray-900 dark:text-white">
            <FaBriefcase className="mr-4 text-4xl sm:text-5xl text-blue-500 dark:text-blue-400" />
            Professional Experience
          </h1>
          <div className="w-72 sm:w-96 h-72 sm:h-96 mx-auto mb-8 relative">
            <Lottie
              animationData={experienceAnimation}
              {...educationAnimationConfig}
            />
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4 sm:space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={item}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="w-full text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                            {exp.company}
                          </h3>
                          <p className="text-sm sm:text-base text-accent">{exp.role}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            {exp.period}
                          </span>
                          <HiChevronDown
                            className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${
                              open ? 'transform rotate-180' : ''
                            }`}
                          />
                        </div>
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-4">
                      <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 list-disc list-inside">
                        {exp.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience; 