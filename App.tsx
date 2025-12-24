import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Certifications from './components/Certifications';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TrainingCTA from './components/TrainingCTA';

const App: React.FC = () => {

  return (
    <div className="bg-site min-h-screen text-foreground selection:bg-secondary selection:text-black">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Certifications />
        <Process />
        <Contact />
      </main>
      <Footer />
      <TrainingCTA />
    </div>
  );
};

export default App;