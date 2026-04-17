import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingSidebar from './components/FloatingSidebar';
import AdminDashboard from './components/AdminDashboard';
import projectData from './data.json';
import './index.css';

function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
        setIsAdminOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="app-container glass-theme">
      {/* Background glowing orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      <Navbar onOpenAdmin={() => setIsAdminOpen(true)} />
      <FloatingSidebar />
      <Hero />
      <Projects />
      
      {/* Continuing the dark glass theme for all sections */}
      <About />
      <Skills />
      <Contact />
      <Footer />
      
      <AdminDashboard isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} projects={projectData} />
    </div>
  );
}

export default App;
