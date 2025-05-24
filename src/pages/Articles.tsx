import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import newsBackground from '../assets/news.jpg';

const Articles = () => {
  const articles = [
    {
      title: "Switch off- The New Indian Express",
      description: "Many professionals are complaining about burnout, loss of sleep and excessive use of screens which has taken a massive toll on their physical and mental health. Here's how some companies are dealing with digital fatigue. As work from home came to be called as the new normal, people across the globe were pushed to embrace a digital transformation.",
      link: "https://www.newindianexpress.com/cities/bengaluru/2022/may/09/switch-off-2451657.html"
    },
    {
      title: "Portion of Mylasandra lake makes way for road widening",
      description: "As many lakes in the city die a slow death due to neglect, one is being eaten away by an infrastructure project. A portion of the Mylasandra lake on Dr. Vishnuvardhan Road, connecting Kengeri to Uttarahalli, is being used for widening the road by the Bruhat Bengaluru Mahanagara Palike (BBMP). Locals and residents of Mylasandra aired their concerns.",
      link: "https://www.thehindu.com/news/national/karnataka/portion-of-mylasandra-lake-makes-way-for-road-widening/article65320939.ece"
    },
    {
      title: "The pandemic took a huge toll on us",
      description: "The last two years were especially difficult for parents of differently-abled children. COVID-induced lockdowns brought to the fore countless challenges, and adversely affected children with Autism Spectrum Disorder (ASD) and their caregivers with the closure of schools, parks, discontinuation of therapy.",
      link: "https://www.thehindu.com/news/national/karnataka/the-pandemic-took-a-huge-toll-on-us/article65282774.ece"
    }
  ];

  return (
    <div 
      className="min-h-screen py-16 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${newsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg p-8 mb-12 shadow-xl"
        >
          <h1 className="text-4xl font-bold text-center mb-2 text-primary dark:text-white font-serif">
            THE JOURNALIST
          </h1>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-16 font-serif">
            STORIES THAT MATTER • VOICES THAT COUNT
          </p>
          <h2 className="text-3xl font-bold text-center mb-12 text-primary dark:text-white">
            Featured Articles
          </h2>

          <div className="grid gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="newspaper-card rounded-lg p-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-lg border border-gray-200/50 dark:border-gray-600/30 hover:dark:border-gray-500/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h2 className="text-2xl font-bold text-primary dark:text-white font-serif">
                    {article.title}
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 font-serif leading-relaxed">
                  {article.description}
                </p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-accent-dark transition-colors font-serif"
                >
                  Read Full Story
                  <HiExternalLink className="ml-1 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg p-8 text-center shadow-xl"
        >
          <h3 className="text-xl font-bold text-primary dark:text-white mb-4 font-serif">
            More Stories Await
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 font-serif">
            Discover my complete collection of articles and journalistic work on Muckrack.
          </p>
          <a
            href="https://muckrack.com/shrabani-chakraborty/articles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-serif"
          >
            Visit My Muckrack Portfolio
            <HiExternalLink className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Articles; 