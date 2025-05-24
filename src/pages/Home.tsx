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
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-primary dark:text-white leading-tight"
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
              className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 h-20 font-heading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <TypeAnimation
                sequence={[
                  'Journalist',
                  2000,
                  'Creative Producer',
                  2000,
                  'Storyteller',
                  2000,
                  'Podcaster',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-medium"
              />
            </motion.div>

            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Passionate about storytelling and creating impactful content that matters.
              From print journalism to radio production, I bring stories to life through
              compelling narratives and innovative approaches.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link
                to="/resume"
                className="btn btn-primary flex items-center justify-center gap-2 text-lg hover:transform hover:translate-y-[-2px] transition-all"
              >
                View Resume <FaArrowRight className="text-sm" />
              </Link>
              <Link
                to="/about"
                className="btn btn-outline flex items-center justify-center gap-2 text-lg hover:transform hover:translate-y-[-2px] transition-all"
              >
                Explore Work <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[500px] flex items-center justify-center bg-white/5 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="w-full max-w-[400px] aspect-square">
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