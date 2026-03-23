import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Gallery from "./components/Gallery";
import "./index.css";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const path = window.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (path === "/resume") return <Resume />;
  if (path === "/gallery") return <Gallery />;

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
