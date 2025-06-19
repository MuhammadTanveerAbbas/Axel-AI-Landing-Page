import { socials } from "../constants/index.jsx";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0b0f29]">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Axel. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex justify-center gap-6 text-sm">
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 transition-colors duration-300 hover:text-p1"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 transition-colors duration-300 hover:text-p1"
            >
              Terms of Use
            </a>
          </div>

          {/* Social Icons */}
          <ul className="flex justify-center md:justify-end gap-4">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a
                  href={url}
                  aria-label={title}
                  className="block transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={icon}
                    alt={title}
                    className="w-5 h-5 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
