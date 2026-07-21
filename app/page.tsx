'use client';

import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Projects from '../src/components/Projects';
import About from '@/src/components/About';
// import Experience from '@/src/components/Experience';
import Contact from '@/src/components/Contact';


export default function Home() {
  return (
    <>
      <Navbar />
      
      <div className="relative min-h-screen pt-16 selection:bg-emerald-500/30">
        <Hero />
        <Projects /> 
         <About />
         {/* <Experience/> */}
        <Contact />
      </div>
    </>
  );
}