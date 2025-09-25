import { Facebook, Instagram, X, Youtube } from "lucide-react";

function Contact() {
  return (
    <section className="relative bg-background-light/50 dark:bg-background-dark/50 py-16 sm:py-24">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-48 sm:h-64"
          preserveAspectRatio="none"
          viewBox="0 0 1000 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="contact-wave-top" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#e41b1b" />
              <stop offset="100%" stopColor="#FFEB3B" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 C250,200 750,0 1000,100 L1000,200 L0,200 Z"
            fill="url(#contact-wave-top)"
            opacity="0.2"
          />
        </svg>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold ">
            Connect With Us
          </h2>
          <p className="mt-4 text-lg">Join our community across social media.</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 mb-16">
          <a
            className="text-red-600 hover:text-red-700 transition-colors"
            href="https://www.youtube.com/@PointofViewKannada"
            target="_blank"
            aria-label="YouTube"
          >
            <Youtube className="w-11 h-11" />
          </a>
          <a
            className="text-pink-500 hover:text-pink-600 transition-colors"
            href="https://www.instagram.com/point.of.view.kannada/"
            target="_blank"
            aria-label="Instagram"
          >
            <Instagram className="w-9 h-9" />
          </a>
          <a
            className="text-blue-600 hover:text-blue-700 transition-colors"
            href="#"
            target="_blank"
            aria-label="Facebook"
          >
            <Facebook className="w-9 h-9" />
          </a>
          <a
            className="text-sky-400 hover:text-sky-500 transition-colors"
            href="#"
            target="_blank"
            aria-label="X"
          >
            <X className="w-10 h-10" />
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto bg-background-light dark:bg-background-dark rounded-xl shadow-lg p-8">
          <form className="grid grid-cols-1 gap-6">
            <input
              className="form-input w-full rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 h-12 p-4 focus:ring-2 focus:ring-primary transition"
              placeholder="Name"
              type="text"
            />
            <input
              className="form-input w-full rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 h-12 p-4 focus:ring-2 focus:ring-primary transition"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="form-textarea w-full rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 p-4 focus:ring-2 focus:ring-primary transition"
              placeholder="Message"
              rows="5"
            />
              <button
                className="flex relative z-50 items-center justify-center rounded-lg cursor-pointer h-12 px-8 bg-blue-500 text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-all transform hover:scale-105 mx-auto"
                type="submit"
              >
                Submit
              </button>
          </form>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-48 sm:h-64"
          preserveAspectRatio="none"
          viewBox="0 0 1000 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="contact-wave-bottom" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#e41b1b" />
              <stop offset="100%" stopColor="#FFEB3B" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 C250,200 750,0 1000,100 L1000,200 L0,200 Z"
            fill="url(#contact-wave-bottom)"
            opacity="0.2"
          />
        </svg>
      </div>
    </section>
  );
}

export default Contact;
