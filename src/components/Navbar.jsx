import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UseThemeStore } from "../store/UseThemeStore";

function Navbar() {
  const router = useNavigate();
  const { theme, setTheme } = UseThemeStore();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Our Work", path: "/work" },
    { name: "Content", path: "/content" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="relative bg-background-light dark:bg-background-dark">
      <div className="w-full flex justify-between px-6 md:pl-15 py-3 items-center border-b border-gray-500 relative z-10">
        <div className="flex items-center gap-2">
          <img
            src="/logo.jpg"
            alt="logo"
            onClick={() => router("/")}
            className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full cursor-pointer"
          />
          <p className="text-[18px] md:text-2xl font-bold">Point of View Kannada</p>
        </div>

        <div className="hidden md:flex gap-6 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${
                location.pathname === link.path && "text-[#ac2a2a]"
              } hover:text-[#e93b3b] transition font-medium`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>

          <button
            className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-[70px] right-0 bg-white dark:bg-gray-900 shadow-lg rounded-lg w-40 flex flex-col md:hidden z-50">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 ${
                  location.pathname === link.path
                    ? "text-[#ac2a2a] font-semibold"
                    : "text-gray-800 dark:text-gray-200"
                } hover:bg-gray-100 dark:hover:bg-gray-800 transition`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          preserveAspectRatio="none"
          viewBox="0 0 1000 200"
          opacity={0.5}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="navbar-wave" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#e41b1b" />
              <stop offset="100%" stopColor="#FFEB3B" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 C250,200 750,0 1000,100 L1000,200 L0,200 Z"
            fill="url(#navbar-wave)"
          />
        </svg>
      </div>
    </header>
  );
}

export default Navbar;
