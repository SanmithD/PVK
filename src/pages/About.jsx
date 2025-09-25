import { Group, Video } from "lucide-react";

function About() {
  return (
    <main className="flex-grow container mx-auto px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Profile Section */}
        <div className="flex flex-col gap-2">
          {/* Profile 1 */}
          <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-light-surface dark:bg-dark-surface p-8 rounded-xl shadow-soft">
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1.5 bg-gradient-to-br from-primary to-highlight rounded-full"></div>
              <img
                alt="Abhishek Bhat"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-light-bg dark:border-dark-bg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdXHkFXKANmf2uyyQESd-nGIFvgzdyZKhN5zCSBHrifSWH9HJ00x7maObcUtd8Mn70OMxTp0wgip1oCycyJM6UhR6doue3RuHrABOd6N50AGjefvy6b6apCUxcysATfAM3fyxOaMKmWBAuRSVNrNfqA40MDqFalFJ-8Ugvuj6t-Q_fPaRFO3VhHcoPkDVmz8VbCyrJRhC5QZwZ79R-leQy5GSanzSpZWfxVKmzpi9XGjGfTn_wY6Rc6n3iPMKg02mBGOTZK9TvXhA"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold">Abhishek Bhat</h1>
              <p className="text-lg text-primary mt-1">Content Creator</p>
              <p className="mt-4 text-light-subtle dark:text-dark-subtle">
                Abhishek Bhat is a passionate content creator behind Point of View Kannada. 
                He focuses on sharing practical insights on finance, travel, and daily life 
                topics in Kannada. His videos are designed to simplify complex ideas, guide 
                viewers on career choices like CMA US, and inspire exploration of new places 
                and experiences. Abhishek’s goal is to offer content that’s both educational 
                and engaging, encouraging his audience to see the world from different perspectives.
              </p>
            </div>
          </section>

          {/* Profile 2 */}
          <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-light-surface dark:bg-dark-surface p-8 rounded-xl shadow-soft">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold">Puneeth</h1>
              <p className="text-lg text-primary mt-1">Content Creator</p>
              <p className="mt-4 text-light-subtle dark:text-dark-subtle">
                Puneeth is the co-creator at Point of View Kannada, bringing a unique 
                perspective to everyday topics and cultural stories. He specializes in 
                translating complex subjects into easy-to-understand content, making it 
                accessible for Kannada-speaking audiences. From exploring finance tips to 
                sharing travel experiences and lifestyle insights, Puneeth’s approach is 
                practical, relatable, and engaging. His mission is to provide content that 
                educates, entertains, and sparks curiosity among viewers.
              </p>
            </div>
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1.5 bg-gradient-to-br from-primary to-highlight rounded-full"></div>
              <img
                alt="Puneeth"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-light-bg dark:border-dark-bg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdXHkFXKANmf2uyyQESd-nGIFvgzdyZKhN5zCSBHrifSWH9HJ00x7maObcUtd8Mn70OMxTp0wgip1oCycyJM6UhR6doue3RuHrABOd6N50AGjefvy6b6apCUxcysATfAM3fyxOaMKmWBAuRSVNrNfqA40MDqFalFJ-8Ugvuj6t-Q_fPaRFO3VhHcoPkDVmz8VbCyrJRhC5QZwZ79R-leQy5GSanzSpZWfxVKmzpi9XGjGfTn_wY6Rc6n3iPMKg02mBGOTZK9TvXhA"
              />
            </div>
          </section>
        </div>

        {/* About Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center">About Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2 mb-8"></div>
          <p className="text-lg text-light-subtle text-center dark:text-dark-subtle leading-relaxed">
            Point of View Kannada is a channel dedicated to exploring everyday life, 
            finance, travel, and educational topics through the Kannada lens. We aim to 
            simplify complex ideas, offer practical advice, and provide inspiration to 
            our audience. Every story we share is crafted to help viewers learn, connect, 
            and discover fresh perspectives in a way that is simple, engaging, and relatable.
          </p>
        </section>

        {/* Milestones Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center">Milestones</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2 mb-8"></div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-light-surface dark:bg-dark-surface"></div>

            {/* Milestone 1 */}
            <div className="relative mt-8">
              <div className="flex items-center relative">
                <div className="w-1/2 pr-8 text-right">
                  <div className="p-6 bg-light-surface dark:bg-dark-surface rounded-lg shadow-soft hover:shadow-lg transition-shadow duration-300">
                    <p className="font-semibold text-lg">Started Point of View Kannada</p>
                    <p className="text-sm text-light-subtle dark:text-dark-subtle">2025</p>
                  </div>
                </div>
                <div className="w-1/2 pl-8"></div>
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-light-bg dark:bg-dark-bg rounded-full flex items-center justify-center border-2 border-primary">
                  <Video className="text-primary" />
                </div>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="relative mt-8">
              <div className="flex items-center relative">
                <div className="w-1/2 pr-8"></div>
                <div className="w-1/2 pl-8 text-left">
                  <div className="p-6 bg-light-surface dark:bg-dark-surface rounded-lg shadow-soft hover:shadow-lg transition-shadow duration-300">
                    <p className="font-semibold text-lg">Reached 100K Subscribers</p>
                    <p className="text-sm text-light-subtle dark:text-dark-subtle">2026</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-light-bg dark:bg-dark-bg rounded-full flex items-center justify-center border-2 border-primary">
                  <Group className="text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 bg-gradient-to-b from-yellow-400 to-red-600 p-8 rounded-xl text-center">
          <p className="font-kannada text-2xl md:text-3xl font-bold">
            "ಕನ್ನಡವೇ ಸತ್ಯ, ಕನ್ನಡವೇ ನಿತ್ಯ"
          </p>
          <p className="mt-2 text-light-subtle dark:text-dark-subtle">- Kuvempu</p>
        </section>
      </div>
    </main>
  );
}

export default About;
