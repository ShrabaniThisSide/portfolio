import { motion } from 'framer-motion';
import profileImage from '../assets/shrabani-profile.jpg';

interface Skill {
  name: string;
  level: number;
}

const About = () => {
  const skills: Skill[] = [
    { name: 'Writing & Storytelling', level: 95 },
    { name: 'Research & Investigation', level: 90 },
    { name: 'Interviewing', level: 90 },
    { name: 'Video Production (TV)', level: 85 },
    { name: 'On-Camera Presence', level: 85 },
    { name: 'Canva, Media Tools', level: 80 },
    { name: 'Public Speaking', level: 90 },
  ];

  const languages = [
    { name: 'English', level: 'Professional' },
    { name: 'Hindi', level: 'Professional' },
    { name: 'Bengali', level: 'Native' },
    { name: 'Odia', level: 'Professional' },
    { name: 'Kannada', level: 'Beginner' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-16 relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-900/30 dark:to-blue-900/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-200/15 dark:bg-blue-500/10 rounded-full blur-3xl -top-48 -left-24 animate-pulse"></div>
        <div className="absolute w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-purple-200/15 dark:bg-purple-500/10 rounded-full blur-3xl top-96 -right-24 animate-pulse delay-700"></div>
        <div className="absolute w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-pink-200/15 dark:bg-pink-500/10 rounded-full blur-3xl bottom-0 left-1/2 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-8 sm:mb-16">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] sm:h-[500px] lg:h-full flex items-center"
          >
            <div className="w-full max-w-sm mx-auto relative z-10 h-full">
              {/* Animated border container */}
              <motion.div
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-blue-400/30 dark:from-blue-500/30 dark:via-purple-500/30 dark:to-blue-500/30 rounded-2xl opacity-75 blur-lg"
                style={{ zIndex: 0 }}
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 h-full rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-gray-800 ring-1 ring-blue-200/50 dark:ring-blue-500/20"
              >
                <div className="h-full relative group">
                  <img
                    src={profileImage}
                    alt="Shrabani Chakraborty"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
                  {/* Animated overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                  />
                </div>
              </motion.div>
              
              {/* Corner decorative elements - Only show on larger screens */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -top-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 border-2 border-blue-300/70 dark:border-blue-500/70 rounded-lg transform -rotate-6 hidden md:block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/40 to-purple-200/40 dark:from-blue-800/40 dark:to-purple-800/40 rounded-lg" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute -bottom-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 border-2 border-blue-300/70 dark:border-blue-500/70 rounded-lg transform rotate-6 hidden md:block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/40 to-purple-200/40 dark:from-blue-800/40 dark:to-purple-800/40 rounded-lg" />
              </motion.div>
            </div>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg h-full flex flex-col justify-center"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              A passionate journalist and creative producer with a keen eye for compelling narratives. 
              My journey in media spans across print journalism, radio production, and digital storytelling.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              I specialize in crafting engaging content that resonates with audiences across different platforms.
              My work reflects a commitment to authentic storytelling and impactful communication.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Professional Skills */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Professional Skills
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  className="space-y-2"
                >
                  <div className="flex justify-between">
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm sm:text-base text-blue-600 dark:text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Languages
            </h2>
            <div className="grid gap-3 sm:gap-4">
              {languages.map((language) => (
                <motion.div
                  key={language.name}
                  variants={item}
                  className="flex justify-between items-center p-3 sm:p-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg hover:shadow-md transition-shadow"
                >
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{language.name}</span>
                  <span className="text-sm sm:text-base text-blue-600 dark:text-blue-400">{language.level}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 