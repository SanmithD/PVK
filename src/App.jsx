import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skeleton from "./components/Skeleton";
import { UseThemeStore } from "./store/UseThemeStore";

const Home = lazy(()=>import('./pages/Home'));
const About = lazy(()=>import('./pages/About'));
const Work = lazy(()=>import('./pages/Home'));
const Content = lazy(()=>import('./pages/Videos'));
const Contact = lazy(()=>import('./pages/Contact'));

function App() {
  const { theme } = UseThemeStore();

  return (
    <div data-theme={theme} >
      <Navbar/>
      <Suspense fallback={<Skeleton/>} >
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/work" element={<Home/>}/>
          <Route path="/content" element={<Content/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Suspense>
      <Footer/>
    </div>
  )
}

export default App