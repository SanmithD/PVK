import { ArrowRight, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { UseVideoStore } from "../store/UseVideoStore";

function VideoSkeleton({ isOdd }) {
  return (
    <div className="animate-pulse relative mb-12">
      <div className="absolute left-1/2 md:left-1/2 top-6 w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded-full border-4 border-white dark:border-dark-subtle transform -translate-x-1/2 z-10"></div>
      <div
        className={`flex w-full md:w-1/2 ${
          isOdd ? "justify-start md:pr-8" : "justify-end md:pl-8 md:ml-auto"
        }`}
      >
        <div className="flex items-start gap-4 max-w-md w-full">
          <div className="w-3 h-3 bg-gray-300 dark:bg-gray-700 rounded-full mt-2"></div>
          <div className="flex-1">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Videos() {
  const { getVideos, videos } = UseVideoStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideos().finally(() => setLoading(false));
  }, []);

  const latestVideos = videos?.slice(0, 10);

  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 py-12">
      <section>
        <h1 className="text-4xl font-extrabold mb-12 text-center">
          Latest Videos
        </h1>

        <div className="relative max-w-6xl mx-auto">
          {/* Central timeline line */}
          <div className="absolute left-1/2 top-0 w-0.5 h-full bg-primary/30 transform -translate-x-1/2 hidden md:block"></div>

          {loading
            ? Array(6)
                .fill(0)
                .map((_, i) => <VideoSkeleton key={i} isOdd={i % 2 === 0} />)
            : latestVideos?.map((video, index) => {
                const isOdd = index % 2 === 0;
                return (
                  <div key={video.videoId} className="relative mb-12 group">
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-white transform -translate-x-1/2 z-10 shadow-md"></div>

                    {/* Video content - responsive */}
                    <div
                      className={`flex w-full md:w-1/2 ${
                        isOdd
                          ? "justify-start md:pr-8"
                          : "justify-end md:pl-8 md:ml-auto"
                      }`}
                    >
                      <a
                        href={`https://www.youtube.com/watch?v=${video.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block max-w-md w-full"
                      >
                        <div
                          className={`dark:bg-dark-card rounded-lg shadow-soft p-4 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 ${
                            isOdd ? "mr-0 md:mr-4" : "ml-0 md:ml-4"
                          }`}
                        >
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-50 object-cover rounded-lg mb-3 transition-transform duration-300 group-hover:scale-105"
                          />
                          <div>
                            <h3 className="font-bold text-lg leading-snug mb-2 line-clamp-2">
                              {video.title}
                            </h3>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {new Date(video.publishedAt).toLocaleDateString(
                                  "en-IN",
                                  {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                  }
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* Connector line (desktop only) */}
                    <div
                      className={`hidden md:block absolute top-8 w-[10%] h-0.5 bg-primary/40 ${
                        isOdd ? "right-1/2 ml-2" : "left-1/2 ml-2"
                      }`}
                    ></div>
                  </div>
                );
              })}
        </div>

        <div className="mt-16 text-center">
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
