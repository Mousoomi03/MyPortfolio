import { useState, useEffect, useRef } from 'react';

// --- Data & Icons ---
const ROLES = [
  { text: 'Developer', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /> },
  { text: 'Coffee Addict', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /> },
  { text: 'Artist', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /> },
  { text: 'Dancer', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /> }
];

const SOCIALS = [
  { href: "https://github.com/Mousoomi03", icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/> },
  { href: "https://linkedin.com", icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/> },
  { href: "https://www.instagram.com/mousoomi_17", icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/> },
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    starsRef.current = Array.from({ length: 50 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 2
    }));
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPct = x / rect.width - 0.5;
    const yPct = y / rect.height - 0.5;
    setRotation({ x: -yPct * 15, y: xPct * 15 });
  };

  const handleMouseLeave = () => setRotation({ x: 0, y: 0 });

  return (
    <section 
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* --- LAYER 1: Dynamic Background (Preserved with Stars) --- */}
      <div className="absolute inset-0 z-0">
        {/* Radial Gradient Ambient Light */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-neon-purple/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-neon-cyan/20 blur-[120px] rounded-full animate-pulse delay-1000"></div>
        
        {/* Twinkling Stars */}
        <div className="absolute inset-0">
            {starsRef.current.map((star, i) => (
                <div 
                  key={i} 
                  className="absolute bg-white rounded-full animate-twinkle"
                  style={{
                    top: `${star.top}%`,
                    left: `${star.left}%`,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    animationDelay: `${star.delay}s`,
                    animationDuration: `${star.duration}s`
                  }}
                />
            ))}
        </div>
      </div>

      {/* --- LAYER 2: Main Content --- */}
      <div 
        ref={containerRef}
        className="relative z-10 w-full max-w-7xl px-5 sm:px-6 lg:px-12 py-10 sm:py-0 flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-8 items-center"
      >
        
        {/* Left: Text & Name */}
        <div className="space-y-4 sm:space-y-8 text-center lg:text-left w-full">
          <div className="space-y-2">
            <h2 className="text-sm sm:text-xl md:text-2xl text-white/70 font-mono tracking-wide">Hello, I am</h2>
            <h1 className="text-[2.5rem] leading-tight sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter">
              <span className="bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                Mousoomi
              </span>
            </h1>
          </div>

          <div className="h-7 sm:h-10 overflow-hidden relative">
            {ROLES.map((role, i) => (
               <div 
                 key={i}
                 className={`absolute top-0 left-0 w-full lg:w-auto flex items-center justify-center lg:justify-start gap-2 sm:gap-3 transition-all duration-500 ease-out transform
                   ${i === roleIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                 `}
               >
                 <svg className="w-4 h-4 sm:w-6 sm:h-6 text-neon-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   {role.icon}
                 </svg>
                 <span className="text-base sm:text-2xl md:text-3xl font-bold text-gray-300">{role.text}</span>
               </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 pt-0 sm:pt-4 justify-center lg:justify-start">
            <a 
              href="/Mousoomi_Shit_RESUME.pdf" 
              className="group relative px-7 sm:px-8 py-3 sm:py-3 rounded-full bg-white/5 border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 backdrop-blur-sm overflow-hidden w-auto"
            >
              <div className="absolute inset-0 bg-neon-cyan/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center gap-2 font-bold text-sm sm:text-base text-white group-hover:text-neon-cyan transition-colors">
                RESUME
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              </span>
            </a>

            <div className="flex gap-3.5 sm:gap-4">
              {SOCIALS.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noreferrer" className="p-2.5 text-gray-400 hover:text-neon-cyan hover:bg-neon-cyan/10 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">{social.icon}</svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: 3D Terminal with Gradient Animation */}
        <div 
          className="relative perspective-1000 w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mr-0 animate-float mt-2 lg:mt-0"
          style={{ perspective: '1000px' }}
        >
          {/* Gradient Border Container */}
          <div 
            className="p-[2px] rounded-xl bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple bg-[length:200%_200%] animate-gradient shadow-neon-cyan transition-transform duration-100 ease-out"
            style={{ 
               transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
               transformStyle: 'preserve-3d'
            }}
          >
            {/* Inner Terminal Background */}
            <div className="w-full bg-[#0d0d0d] rounded-xl overflow-hidden h-full">
              {/* Header */}
              <div className="bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-gray-500 truncate">mousoomi@dev:~/portfolio</div>
              </div>

              {/* Code */}
              <div className="p-4 sm:p-5 md:p-6 font-mono text-[11px] sm:text-xs md:text-sm leading-5 sm:leading-6 md:leading-7">
                 <div className="flex">
                    <span className="text-neon-purple mr-2">const</span>
                    <span className="text-yellow-300">developer</span>
                    <span className="text-white mx-2">=</span>
                    <span className="text-white">{`{`}</span>
                 </div>
                 
                 <div className="pl-6">
                   <div>
                     <span className="text-white">name:</span>
                     <span className="text-green-400 ml-2">'Mousoomi'</span>,
                   </div>
                   <div>
                     <span className="text-white">skills:</span>
                     <span className="text-white ml-2">[</span>
                     <span className="text-orange-400">'React'</span>,
                     <span className="text-orange-400">'C#'</span>,
                     <span className="text-orange-400">'ASP.NET'</span>
                     <span className="text-white">]</span>,
                   </div>
                   <div>
                      <span className="text-white">passion:</span>
                      <span className="text-neon-cyan ml-2">'Building the future'</span>
                   </div>
                 </div>
                 
                 <div className="text-white">{`}`}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;