import { ArrowRight, Play } from "lucide-react";
import { useEffect } from "react";
import { UseVideoStore } from "../store/UseVideoStore";

function Videos() {
  const { getVideos, videos } = UseVideoStore();

  useEffect(() => {
    getVideos();
  }, []);

  // Take only the latest 10 videos
  const latestVideos = videos?.slice(0, 10);

  return (
    <main className="flex-grow container mx-auto px-6 py-12">
      <section>
        <h1 className="text-4xl font-extrabold mb-8 text-center md:text-left">
          Latest Videos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestVideos?.map((video) => (
            <div
              key={video.videoId}
              className="bg-card-light dark:bg-card-dark rounded-lg shadow-soft overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <a
                className="block"
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="relative">
                  <img
                    alt={video.title}
                    className="w-full h-48 object-cover"
                    src={video.thumbnail}
                  />
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="text-white text-6xl" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg leading-tight mb-2">
                    {video.title}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all text-lg font-semibold shadow-soft"
            href="https://www.youtube.com/@PointofViewKannada"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>View More on YouTube</span>
            <ArrowRight className="text-white" />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Videos;
