import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

function Contact() {
  return (
    <section className="bg-background-light/50 dark:bg-background-dark/50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold ">
            Connect With Us
          </h2>
          <p className="mt-4 text-lg">
            Join our community across social media.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-16">
          <a
            className="text-red-600 hover:text-red-700 transition-colors"
            href="#"
            aria-label="YouTube"
          >
            <Youtube className="w-10 h-10" />
          </a>
          <a
            className="text-pink-500 hover:text-pink-600 transition-colors"
            href="#"
            aria-label="Instagram"
          >
            <Instagram className="w-10 h-10" />
          </a>
          <a
            className="text-blue-600 hover:text-blue-700 transition-colors"
            href="#"
            aria-label="Facebook"
          >
            <Facebook className="w-10 h-10" />
          </a>
          <a
            className="text-sky-400 hover:text-sky-500 transition-colors"
            href="#"
            aria-label="Twitter"
          >
            <Twitter className="w-10 h-10" />
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto bg-background-light dark:bg-background-dark rounded-xl shadow-lg p-8">
          <form className="grid grid-cols-1 gap-6">
            <input
              className="form-input w-full rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700  placeholder-gray-400 dark:placeholder-gray-500 h-12 p-4 focus:ring-2 focus:ring-primary transition"
              placeholder="Name"
              type="text"
            />
            <input
              className="form-input w-full rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700  placeholder-gray-400 dark:placeholder-gray-500 h-12 p-4 focus:ring-2 focus:ring-primary transition"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="form-textarea w-full rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700  placeholder-gray-400 dark:placeholder-gray-500 p-4 focus:ring-2 focus:ring-primary transition"
              placeholder="Message"
              rows="5"
            />
            <div className="text-center">
              <button
                className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-all transform hover:scale-105 mx-auto"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
