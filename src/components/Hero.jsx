import { Instagram, Play } from "lucide-react";

function Hero() {
  return (
    <section className="relative bg-background-light dark:bg-background-dark">
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1000 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wave-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#e41b1b" />
              <stop offset="100%" stopColor="#FFEB3B" />
            </linearGradient>
          </defs>
          <path
            d="M0,250 C150,100 350,400 500,250 S650,100 850,250 S1000,100 1000,250 L1000,500 L0,500 Z"
            fill="url(#wave-gradient)"
          />
          <path
            d="M0,300 C200,150 400,450 550,300 S700,150 800,300 S1000,200 1000,300 L1000,500 L0,500 Z"
            fill="url(#wave-gradient)"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Point of View Kannada –{" "}
              <span className="text-primary">Stories with Perspective</span>
            </h1>
            <p className="text-lg ">
              Explore the world through a Kannada lens. We bring you insightful
              stories, engaging content, and a fresh perspective on current
              events and cultural narratives.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="https://www.youtube.com/@PointofViewKannada" target="_blank" className="flex items-center justify-center rounded-lg h-12 px-6 bg-red-800 cursor-pointer text-white text-base font-bold shadow-lg hover:bg-red-500 transition-all transform hover:scale-105">
                <span className="flex items-center gap-2">Watch on YouTube <Play/> </span>
              </a>
              <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] text-white text-base font-bold shadow-lg hover:opacity-90 transition-all transform hover:scale-105">
                <span className="flex items-center gap-2">Follow on Instagram <Instagram/> </span>
              </button>
            </div>
          </div>

          {/* Image or Illustration Placeholder */}
          <div>{/* Add an image/illustration here if needed */}</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
