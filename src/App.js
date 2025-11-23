import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash.slice(1) || 'home';
    return hash;
  });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    window.history.pushState(null, '', `#${section}`);
  };

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setActiveSection(hash);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // This function decides which component to show
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero mousePos={mousePos} />;
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero mousePos={mousePos} />;
    }
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <div className="bg-grid"></div>
      
      {/* Floating background objects (Always visible) */}
      <div className="floating-objects">
        <div className="orb-1"></div>
        <div className="orb-2"></div>
      </div>

      {/* Pass the state setter to Navbar so it can change the page */}
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />

      {/* The Main Content Area - Renders only ONE section */}
      <main className="content-viewport">
        <div key={activeSection} className="page-transition">
          {renderSection()}
        </div>
      </main>

      {/* Footer only shows on relevant pages or can be fixed. 
          Let's keep it simple and hide it for now, or render inside specific sections if needed. */}
    </div>
  );
}

export default App;