import { Group, Instagram, Video } from "lucide-react";

function About() {
  return (
    <main className="flex-grow container mx-auto px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-2">
          <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-light-surface dark:bg-dark-surface p-8 rounded-xl shadow-soft">
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1.5 bg-gradient-to-br from-primary to-highlight rounded-full"></div>
              <img
                alt="Abhishek Bhat"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-light-bg dark:border-dark-bg"
                src="Abhi.JPG"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">Abhishek Bhat</h1>
              <p className="text-lg text-primary mt-1">
                Member | Explainer | Researcher
              </p>
              <p className="text-sm mt-1">B.Com, CMA US Aspirant</p>
              <p className="mt-3 text-light-subtle dark:text-dark-subtle">
                Main creator of{" "}
                <span className="font-semibold">Point of View Kannada</span>,
                sharing simple insights on finance, career, travel, and everyday
                life. Abhishek’s goal is to make learning easy and inspire new
                perspectives.
              </p>
              <a
                href="https://www.instagram.com/mr_.abhi.18/"
                className="flex items-center gap-2 text-sky-400 mt-2 "
              >
                Follow on <Instagram />{" "}
              </a>
            </div>
          </section>
          <p className="w-[70%] size-1 bg-sky-500 rounded-sm right-0 ml-13 md:ml-0"></p>

          <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-light-surface dark:bg-dark-surface p-8 rounded-xl shadow-soft">
            <div className="md:hidden relative flex-shrink-0">
              <div className="absolute -inset-1.5 bg-gradient-to-br from-primary to-highlight rounded-full"></div>
              <img
                alt="Puneeth"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-light-bg dark:border-dark-bg"
                src="Puneet.jpg"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">Puneeth</h1>
              <p className="text-lg text-primary mt-1">Co-Creator</p>
              <p className="text-sm mt-1">
                Member | Explainer | Topic Selector
              </p>
              <p className="text-sm mt-1">B.Com, CMA US Aspirant</p>
              <p className="mt-3 text-light-subtle dark:text-dark-subtle">
                Co-creator of{" "}
                <span className="font-semibold">Point of View Kannada</span>,
                Puneeth brings fresh perspectives to finance, travel, and
                lifestyle topics. His focus is on making content simple,
                relatable, and engaging for Kannada audiences.
              </p>
              <a href="https://www.instagram.com/_puneeth__.18/" className="flex items-center gap-2 text-sky-400 mt-2">
                Follow on <Instagram />
              </a>
            </div>

            <div className="hidden md:block relative flex-shrink-0">
              <div className="absolute -inset-1.5 bg-gradient-to-br from-primary to-highlight rounded-full"></div>
              <img
                alt="Puneeth"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-light-bg dark:border-dark-bg"
                src="Puneet.jpg"
              />
            </div>
          </section>
          <p className="w-[70%] size-1 bg-sky-500 rounded-sm right-0 ml-15 md:ml-80"></p>

          <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-light-surface dark:bg-dark-surface p-8 rounded-xl shadow-soft">
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1.5 bg-gradient-to-br from-primary to-highlight rounded-full"></div>
              <img
                alt="Kaushal"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-light-bg dark:border-dark-bg"
                src="Kaushal.JPG"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">Kaushal</h1>
              <p className="text-lg text-primary mt-1">
                Cinematographer | Explainer | Editor
              </p>
              <p className="text-sm mt-1">BCA</p>
              <p className="mt-3 text-light-subtle dark:text-dark-subtle">
                Kaushal is a key member of{" "}
                <span className="font-semibold">Point of View Kannada</span>,
                contributing as an explainer and editor. He ensures content is
                clear, polished, and engaging, making complex topics easy to
                understand for Kannada audiences.
              </p>
              <a href="https://www.instagram.com/kaushal0047/" className="flex items-center gap-2 text-sky-400 mt-2">
                Follow on <Instagram />
              </a>
            </div>
          </section>
          <p className="w-[70%] size-1 bg-sky-500 rounded-sm ml-13 md:ml-0"></p>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center">About Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2 mb-8"></div>
          <p className="text-lg text-light-subtle text-center dark:text-dark-subtle leading-relaxed">
            Point of View Kannada is a channel dedicated to exploring everyday
            life, finance, travel, and educational topics through the Kannada
            lens. We aim to simplify complex ideas, offer practical advice, and
            provide inspiration to our audience. Every story we share is crafted
            to help viewers learn, connect, and discover fresh perspectives in a
            way that is simple, engaging, and relatable.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center">Milestones</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2 mb-8"></div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-light-surface dark:bg-dark-surface"></div>

            <div className="relative mt-8">
              <div className="flex items-center relative">
                <div className="w-1/2 pr-8 text-right">
                  <div className="p-6 bg-light-surface dark:bg-dark-surface rounded-lg shadow-soft hover:shadow-lg transition-shadow duration-300">
                    <p className="font-semibold text-lg">
                      Started Point of View Kannada
                    </p>
                    <p className="text-sm text-light-subtle dark:text-dark-subtle">
                      2025
                    </p>
                  </div>
                </div>
                <div className="w-1/2 pl-8"></div>
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-light-bg dark:bg-dark-bg rounded-full flex items-center justify-center border-2 border-primary">
                  <Video className="text-primary" />
                </div>
              </div>
            </div>

            <div className="relative mt-8">
              <div className="flex items-center relative">
                <div className="w-1/2 pr-8"></div>
                <div className="w-1/2 pl-8 text-left">
                  <div className="p-6 bg-light-surface dark:bg-dark-surface rounded-lg shadow-soft hover:shadow-lg transition-shadow duration-300">
                    <p className="font-semibold text-lg">
                      Reached 100K Subscribers
                    </p>
                    <p className="text-sm text-light-subtle dark:text-dark-subtle">
                      2026
                    </p>
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
          <p className="mt-2 text-light-subtle dark:text-dark-subtle">
            - Kuvempu
          </p>
        </section>
      </div>
    </main>
  );
}

export default About;
