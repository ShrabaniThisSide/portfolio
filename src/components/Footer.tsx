import { FaLinkedin, FaInstagram, FaNewspaper } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shrabani-chakraborty-75437b1ab/',
      icon: <FaLinkedin className="h-6 w-6" />,
      className: "text-[#0A66C2] hover:text-[#0A66C2]/90 bg-white rounded-md p-1 transform hover:scale-110 transition-all duration-300"
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shrabani999/reels/',
      icon: <FaInstagram className="h-6 w-6" />,
      className: "text-white hover:text-white bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-md p-1 transform hover:scale-110 transition-all duration-300"
    },
    {
      name: 'Muckrack',
      url: 'https://muckrack.com/shrabani-chakraborty/articles',
      icon: <FaNewspaper className="h-6 w-6" />,
      className: "text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transform hover:scale-110 transition-all duration-300"
    },
  ];

  return (
    <footer className="bg-white dark:bg-primary shadow-inner">
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={link.className}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Shrabani Chakraborty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 