import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-700 pt-20">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full md:h-60 h-100"
          preserveAspectRatio="none"
          viewBox="0 0 1000 200"
          opacity="0.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="footer-wave" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#e41b1b" />
              <stop offset="100%" stopColor="#FFEB3B" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 C250,200 750,0 1000,100 L1000,200 L0,200 Z"
            fill="url(#footer-wave)"
          />
        </svg>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-2xl flex items-center gap-2 font-bold ">
              <img
                src="/logo.jpg"
                alt="logo"
                className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full cursor-pointer"
              />
              <p>Point of View Kannada</p>
            </Link>
            <p className="max-w-sm">
              Bringing thoughtful Kannada content, stories, and perspectives to
              your screen.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2">Pages</h4>
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/work" className="hover:text-primary transition-colors">
              Work
            </Link>
            <Link to="/content" className="hover:text-primary transition-colors">
              Videos
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold mb-2">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-red-600 hover:text-red-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-pink-500 hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-sky-400 hover:text-sky-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:pointofviewkannada@gmail.com"
                className="hover:text-primary transition-colors"
              >
                pointofviewkannada@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8"></div>

        <div className="mt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} POV Kannada. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
