import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from 'react-icons/fa';
import Lottie from 'lottie-react';
import writingAnimation from '../assets/writing-animation.json';

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary dark:text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm{' '}
              <span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500">
                Shrabani Chakraborty
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300"
            >
              <TypeAnimation
                sequence={[
                  'Journalist',
                  2000,
                  'Creative Producer',
                  2000,
                  'Storyteller',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-medium text-accent"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0"
            >
              A versatile journalist and creative producer with experience in print, radio, and digital media.
              Passionate about storytelling and creating impactful content that resonates with audiences.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link
                to="/resume"
                className="px-6 py-3 bg-accent text-white rounded-lg font-medium flex items-center justify-center gap-2 text-base sm:text-lg hover:bg-accent/90 transform hover:-translate-y-0.5 transition-all"
              >
                View Resume <FaArrowRight className="text-sm" />
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 border-2 border-accent text-accent rounded-lg font-medium flex items-center justify-center gap-2 text-base sm:text-lg hover:bg-accent hover:text-white transform hover:-translate-y-0.5 transition-all"
              >
                Explore Work <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center bg-white/5 rounded-2xl p-4 sm:p-8 backdrop-blur-sm order-first lg:order-last"
          >
            <div className="w-full max-w-[300px] sm:max-w-[400px] aspect-square">
              <Lottie
                animationData={writingAnimation}
                loop={true}
                autoplay={true}
                rendererSettings={{
                  preserveAspectRatio: 'xMidYMid slice'
                }}
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home; 