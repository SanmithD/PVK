import axios from "axios";
import { create } from "zustand";

const API_KEY = import.meta.env.VITE_API_KEY; 
const CHANNEL_ID = "UCN1hbKAQ0zew3xQSZBy9ICw";

export const UseVideoStore = create((set) => ({
  isLoading: false,
  videos: null,

  getVideos: async () => {
    set({ isLoading: true });
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`, {
          params: {
            part: "snippet",
            channelId: CHANNEL_ID,
            order: "date",
            maxResults: 10,
            key: API_KEY,
          },
        }
      );
      console.log(res.data);

      const videoData = res.data.items
        .filter(item => item.id.kind === "youtube#video")
        .map(item => ({
          videoId: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          publishedAt: item.snippet.publishedAt,
        }));

      set({ videos: videoData, isLoading: false });
    } catch (error) {
      console.log(error);
      set({ isLoading: false });
    }
  }
}));
