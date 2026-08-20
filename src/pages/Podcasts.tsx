import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import YouTube from 'react-youtube';

interface PodcastVideo {
  id: string;
  title: string;
  thumbnail: string;
}

const Podcasts = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedVideo) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedVideo(null);
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedVideo]);

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

  const interviewVideos: PodcastVideo[] = [
    {
      id: 'wexQdSijmtE',
      title: "Vox Pop on Mother's Day | Red FM Bengaluru",
      thumbnail: 'https://img.youtube.com/vi/wexQdSijmtE/maxresdefault.jpg'
    },
    {
      id: 'i7DB0AcrliM',
      title: 'This Resort Replaced Plastic With Bamboo | Sustainable Resort Kathmandu | IITM Bengaluru',
      thumbnail: 'https://img.youtube.com/vi/i7DB0AcrliM/maxresdefault.jpg'
    },
    {
      id: 'vGPYXZyfefM',
      title: 'This Egypt Company Only Hires Certified Egyptologists | Luxury Egypt DMC | IITM Bengaluru',
      thumbnail: 'https://img.youtube.com/vi/vGPYXZyfefM/maxresdefault.jpg'
    },
    {
      id: '8icOASbYZaU',
      title: 'Agents Are Just Starting to Add This State to Their Trips | IITM Bengaluru',
      thumbnail: 'https://img.youtube.com/vi/8icOASbYZaU/maxresdefault.jpg'
    },
    {
      id: 'DCGwnxDMxns',
      title: 'This Tool Turns an Email Into a Full Itinerary | AI Itinerary Builder | IITM Bengaluru',
      thumbnail: 'https://img.youtube.com/vi/DCGwnxDMxns/maxresdefault.jpg'
    },
    {
      id: 'h4WCqHq8F2w',
      title: "Goa's Biggest Visitors Are Now From Within India | Goa Domestic Tourism | IITM Bengaluru",
      thumbnail: 'https://img.youtube.com/vi/h4WCqHq8F2w/maxresdefault.jpg'
    },
    {
      id: 'nX-OEDFln-M',
      title: "This State Has India's Most Tigers | Madhya Pradesh Tourism | IITM Bengaluru",
      thumbnail: 'https://img.youtube.com/vi/nX-OEDFln-M/maxresdefault.jpg'
    }
  ];

  const opts = {
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-white via-blue-50 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <VideoSection
          title="Video Interviews"
          videos={interviewVideos}
          onSelect={setSelectedVideo}
          titlePrefix="Interview"
        />

        <VideoSection
          title="Podcast Episodes"
          videos={podcastVideos}
          onSelect={setSelectedVideo}
          titlePrefix="Episode"
        />
      </div>

      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 z-10 rounded-full bg-white/90 p-2 text-gray-900 shadow-lg transition-colors hover:bg-white dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              aria-label="Close video player"
            >
              <HiX className="h-6 w-6" />
            </button>
            <div className="youtube-container">
              <YouTube
                videoId={selectedVideo}
                opts={opts}
                className="absolute top-0 left-0 w-full h-full"
                iframeClassName="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

interface VideoSectionProps {
  title: string;
  videos: PodcastVideo[];
  onSelect: (videoId: string) => void;
  titlePrefix: string;
}

const VideoSection = ({ title, videos, onSelect, titlePrefix }: VideoSectionProps) => (
  <section className="mb-12 sm:mb-16 last:mb-0">
    <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white">
      {title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
      {videos.map((video, index) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group cursor-pointer"
          onClick={() => onSelect(video.id)}
        >
          <div className="relative rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300">
            <img
              src={video.thumbnail}
              alt={`${titlePrefix} ${index + 1} thumbnail`}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                <svg
                  className="w-6 sm:w-8 h-6 sm:h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
          </div>
          <h3 className="mt-4 text-base sm:text-lg font-semibold text-gray-900 dark:text-white text-center">
            {video.title}
          </h3>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Podcasts; 