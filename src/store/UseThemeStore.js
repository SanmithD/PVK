import { create } from "zustand";

export const UseThemeStore = create((set) =>({
    theme: localStorage.getItem('theme'),

    setTheme: (data) =>{
        set({ theme: data });
        localStorage.setItem("theme",data)
    }
}))