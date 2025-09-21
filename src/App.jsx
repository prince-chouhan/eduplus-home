import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCarousel from './components/FeatureCarousel';
import DemoSection from './components/DemoSection';
import StatsTestimonials from './components/StatsTestimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeatureCarousel />
      <DemoSection />
      <StatsTestimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;