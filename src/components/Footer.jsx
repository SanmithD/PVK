import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-700 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-2xl flex items-center gap-2 font-bold ">
              <img
                src="/logo.jpg"
                alt="logo"
                className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full cursor-pointer"
              />
              <p>Point of View Kannada</p>
            </Link>
            <p className=" max-w-sm">
              Bringing thoughtful Kannada content, stories, and perspectives to
              your screen.
            </p>
          </div>

          {/* Pages Navigation */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold  mb-2">Pages</h4>
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/work" className="hover:text-primary transition-colors">
              Work
            </Link>
            <Link
              to="/content"
              className="hover:text-primary transition-colors"
            >
              Videos
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Social Media & Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold  mb-2">Connect</h4>
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
                href="mailto:info@povkannada.com"
                className="hover:text-primary transition-colors"
              >
                info@povkannada.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8"></div>

        {/* Bottom Section */}
        <div className="mt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} POV Kannada. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
