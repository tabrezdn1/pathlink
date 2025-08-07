import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import AICopilot from './components/AICopilot';
import TabbedFeatures from './components/TabbedFeatures';
import JobListings from './components/JobListings';
import Testimonial from './components/Testimonial';
import WaitlistCTA from './components/WaitlistCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden w-full max-w-full">
        <Header />
        <Hero />
        <AICopilot />
        <TabbedFeatures />
        <JobListings />
        <Testimonial />
        <WaitlistCTA />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
