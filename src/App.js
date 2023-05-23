import React from 'react';
import Contact from './Components/contact/Contact';
import About from './Components/header/about/About';
import Navbar from './Components/header/Navbar';
import './Components/header/Navbar.css';
import Skills from './Components/header/skills/Skills';
import Qualification from './Components/qualification/Qualification';
import Services from './Components/services/Services';
import Testimonial from './Components/Testimonial/Testimonial';
import Footer from './footer/Footer';
import Project from './projects/Project';
import Home from './home/Home';


function App() {
  return (
    <>
    <Navbar/>
    <main>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Project/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </main>
    </>
  );
}

export default App;
