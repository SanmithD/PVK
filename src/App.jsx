import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skeleton from "./components/Skeleton";
import { UseThemeStore } from "./store/UseThemeStore";

const Home = lazy(()=>import('./pages/Home'));
const About = lazy(()=>import('./pages/About'));
const Content = lazy(()=>import('./pages/Videos'));
const Contact = lazy(()=>import('./pages/Contact'));
const Work = lazy(()=>import('./pages/OurWork'));

function App() {
  const { theme } = UseThemeStore();

  return (
    <div data-theme={theme} >
      <Toaster position="top-right" />
      <Navbar/>
      <Suspense fallback={<Skeleton/>} >
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/content" element={<Content/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Suspense>
      <Footer/>
    </div>
  )
}

export default App