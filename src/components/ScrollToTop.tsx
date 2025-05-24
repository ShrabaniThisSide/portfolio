import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top
    const scrollToTop = () => {
      // Try multiple scroll methods for better cross-browser/device compatibility
      if ('scrollTo' in window) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant' // Use instant instead of smooth for more reliable behavior
        });
      } else {
        // Fallback for older browsers
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0; // For Safari
      }
    };

    // Execute scroll with a slight delay to ensure DOM updates are complete
    setTimeout(scrollToTop, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop; 