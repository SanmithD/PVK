import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const UseContactStore = create((set) => ({
  isLoading: false,

  submitForm: async (event) => {
    event.preventDefault();
    set({ isLoading: true });

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

      const object = Object.fromEntries(formData);

      const { data } = await axios.post(
        "https://api.web3forms.com/submit",
        object,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (data.success) {
        toast.success("Thank you for your feedback!");
        event.target.reset();
      } else {
        toast.error("Something went wrong! Please try again later.");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      toast.error("Failed to submit form.");
    } finally {
      set({ isLoading: false });
    }
  },
}));
