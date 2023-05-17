import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="container">
      <Loader />
      <Navbar />
      <Hero />
      <Projects />
      <Aboutme />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
