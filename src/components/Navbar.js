import { useState, useRef } from 'react';

// ... (Keep your existing Icon components: HomeIcon, AboutIcon, etc. here) ...
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);
// ... include other icons ...
const AboutIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);


const ExpIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const ProjectIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);

const ContactIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H20a2 2 0 0 1 2 2z"></path>
    <polyline points="22 7 13 13 2 7"></polyline>
  </svg>
);

function Navbar({ onNavClick, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimerRef = useRef(null);

  const sections = [
    { id: 'home', icon: <HomeIcon />, label: 'Home' },
    { id: 'about', icon: <AboutIcon />, label: 'About' },
    { id: 'experience', icon: <ExpIcon />, label: 'Experience' },
    { id: 'projects', icon: <ProjectIcon />, label: 'Projects' },
    { id: 'contact', icon: <ContactIcon />, label: 'Contact' }
  ];

  const menuItems = sections.filter(s => s.id !== activeSection);
  
  // Calculate positions in a quarter-circle arc (North-West)
  // This prevents overflowing off the right/bottom of the screen
  const getPosition = (index, total) => {
    const radius = 100; 
    const startAngle = 180; // Left
    const endAngle = 270;   // Up
    // Distribute items evenly between left and up
    const angle = startAngle + (index * (endAngle - startAngle) / (total - 1));
    const radian = (angle * Math.PI) / 180;
    
    return {
      left: Math.cos(radian) * radius + 'px',
      top: Math.sin(radian) * radius + 'px'
    };
  };

  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <div 
      className="fixed bottom-8 right-8 z-[1000] flex items-center justify-center"
    >
      {/* Satellite Menu */}
      <div 
        className={`absolute w-0 h-0 flex items-center justify-center transition-all duration-500 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {menuItems.map((item, index) => {
          const pos = getPosition(index, menuItems.length);
          
          return (
            <button 
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className={`absolute w-12 h-12 rounded-full bg-black/80 backdrop-blur-md text-white flex items-center justify-center border border-neon-cyan/30 shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)`}
              style={{ 
                transform: isOpen ? `translate(${pos.left}, ${pos.top}) scale(1)` : 'translate(0, 0) scale(0)',
                opacity: isOpen ? 1 : 0,
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
              }}
              title={item.label}
            >
              <div className="hover:text-neon-cyan transition-colors">
                {item.icon}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Toggle Button */}
      <div 
        className={`relative w-16 h-16 rounded-full bg-gradient-to-tr from-purple-900 to-black flex items-center justify-center shadow-[0_0_30px_rgba(138,43,226,0.5)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,255,255,0.6)] hover:scale-105 z-50 border border-white/10`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neon-cyan">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;