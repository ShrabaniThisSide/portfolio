import { useState } from 'react';
import { motion } from 'framer-motion';
import YouTube from 'react-youtube';

interface PodcastVideo {
  id: string;
  title: string;
  thumbnail: string;
}

const Podcasts = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const podcastVideos: PodcastVideo[] = [
    {
      id: 'wpKIv5CFh6Q',
      title: 'Episode 1',
      thumbnail: `https://img.youtube.com/vi/wpKIv5CFh6Q/maxresdefault.jpg`
    },
    {
      id: 'AZak73Cu4Z4',
      title: 'Episode 2',
      thumbnail: `https://img.youtube.com/vi/AZak73Cu4Z4/maxresdefault.jpg`
    },
    {
      id: 'sqA3ek14LjU',
      title: 'Episode 3',
      thumbnail: `https://img.youtube.com/vi/sqA3ek14LjU/maxresdefault.jpg`
    },
    {
      id: 'W3JKAdm8484',
      title: 'Episode 4',
      thumbnail: `https://img.youtube.com/vi/W3JKAdm8484/maxresdefault.jpg`
    },
    {
      id: '_-Av2pQ0yfk',
      title: 'Episode 5',
      thumbnail: `https://img.youtube.com/vi/_-Av2pQ0yfk/maxresdefault.jpg`
    },
    {
      id: 'hIcPhhg5Bcg',
      title: 'Episode 6',
      thumbnail: `https://img.youtube.com/vi/hIcPhhg5Bcg/maxresdefault.jpg`
    },
    {
      id: 'FMkyzmxPC58',
      title: 'Episode 7',
      thumbnail: `https://img.youtube.com/vi/FMkyzmxPC58/maxresdefault.jpg`
    },
    {
      id: 'wyKV87A99X8',
      title: 'Episode 8',
      thumbnail: `https://img.youtube.com/vi/wyKV87A99X8/maxresdefault.jpg`
    }
  ];

  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-white via-blue-50 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Podcast Episodes
        </motion.h1>

        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="aspect-w-16 aspect-h-9 bg-black rounded-xl overflow-hidden shadow-2xl">
              <YouTube
                videoId={selectedVideo}
                opts={opts}
                className="w-full h-full"
              />
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {podcastVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300">
                <img
                  src={video.thumbnail}
                  alt={`Episode ${index + 1} thumbnail`}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    <svg
                      className="w-8 h-8 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white text-center">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcasts; 