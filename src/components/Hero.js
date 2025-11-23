import { useState, useEffect } from 'react';

function Hero({ mousePos }) {
  const roles = [
    { 
      text: 'Developer', 
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
    },
    { 
      text: 'Coffee Addict', 
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7h-3V4a1 1 0 00-1-1H8a1 1 0 00-1 1v3H4a1 1 0 00-1 1v10a4 4 0 004 4h10a4 4 0 004-4V8a1 1 0 00-1-1zm-1 11a2 2 0 01-2 2H7a2 2 0 01-2-2V9h14v9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 5h10M20 10h2a2 2 0 012 2v2a2 2 0 01-2 2h-2"></path></svg>
    },
    { 
      text: 'Artist', 
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
    },
    { 
      text: 'Dancer', 
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>
    }
  ];
  
  const displayRoles = [...roles, ...roles];
  
  const [currentRole, setCurrentRole] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [robotRotation, setRobotRotation] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedCode, setTypedCode] = useState('');
  
  const codeSnippet = `const developer = {
  name: 'Mousoomi',
  skills: ['C#', 'React', 'ASP.NET Core', 'Java', 'Python'],
  passion: 'Building the future'
  };`;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => {
        const next = prev + 1;
        if (next === roles.length) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentRole(0);
            setTimeout(() => setIsTransitioning(true), 50);
          }, 700);
        }
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= codeSnippet.length) {
        setTypedCode(codeSnippet.slice(0, index));
        index++;
      } else {
        setTimeout(() => {
          index = 0;
          setTypedCode('');
        }, 2000);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setRobotRotation({ x: y * 15, y: x * 15 });
  };

  const handleMouseLeave = () => {
    setRobotRotation({ x: 0, y: 0 });
  };

  const handleSectionMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMousePosition({ x, y });
  };

  return (
    <section 
      className="w-full h-screen flex items-center justify-center relative z-10 px-8 overflow-hidden" 
      id="home"
      onMouseMove={handleSectionMouseMove}
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0">
        {/* Large floating geometric shapes with parallax */}
        <div 
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-neon-cyan/10 blur-3xl animate-pulse transition-transform duration-500 ease-out" 
          style={{ 
            clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`
          }}
        ></div>
        <div 
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-neon-purple/10 blur-3xl animate-spin transition-transform duration-700 ease-out" 
          style={{ 
            animationDuration: '20s',
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            transform: `translate(${mousePosition.x * -60}px, ${mousePosition.y * -60}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/4 right-1/4 w-[550px] h-[550px] bg-neon-cyan/8 blur-3xl animate-pulse transition-transform duration-600 ease-out" 
          style={{ 
            animationDuration: '3s',
            transform: `translate(${mousePosition.x * 35}px, ${mousePosition.y * 35}px) rotate(45deg)`
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 left-1/3 w-[480px] h-[480px] bg-neon-purple/8 blur-3xl transition-transform duration-800 ease-out" 
          style={{ 
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * -25}px) rotate(${mousePosition.x * 10}deg)`
          }}
        ></div>
        <div 
          className="absolute top-1/3 left-1/2 w-[520px] h-[520px] bg-neon-cyan/6 blur-3xl animate-pulse transition-transform duration-900 ease-out" 
          style={{ 
            animationDuration: '4s',
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            transform: `translate(${mousePosition.x * 45}px, ${mousePosition.y * 45}px)`
          }}
        ></div>
        
        {/* Medium floating shapes with parallax */}
        <div 
          className="absolute top-10 right-1/3 w-64 h-64 bg-neon-purple/5 blur-2xl transition-transform duration-500 ease-out"
          style={{ 
            clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * 30}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-10 left-1/4 w-72 h-72 bg-neon-cyan/5 blur-2xl transition-transform duration-600 ease-out"
          style={{ 
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * -35}px) rotate(${mousePosition.x * -15}deg)`
          }}
        ></div>
        
        {/* Floating geometric particles */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-neon-cyan/40 animate-spin" style={{ animationDuration: '8s', clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        <div className="absolute top-3/4 left-1/3 w-20 h-20 border-2 border-neon-purple/40 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/3 right-1/4 w-14 h-14 border-2 border-neon-cyan/40 rotate-45 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border-2 border-neon-purple/40 animate-spin" style={{ animationDuration: '12s', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="absolute top-1/2 right-1/4 w-18 h-18 border-2 border-neon-cyan/30 animate-pulse" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}></div>
        
        {/* Animated grid lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-neon-purple/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-neon-cyan/10 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Left Side: Text */}
        <div className="flex-1 text-left z-20 space-y-8">
          <h1 className="font-bold leading-tight space-y-2">
            <span className="text-2xl md:text-3xl text-white/70 font-normal block">Hello, I am</span>
            <span className="relative inline-block text-7xl md:text-8xl">
              <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan bg-[length:200%_100%] animate-[gradient_3s_ease_infinite] blur-lg opacity-30"></span>
              <span className="relative bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan bg-[length:200%_100%] animate-[gradient_3s_ease_infinite] bg-clip-text text-transparent font-extrabold">
                Mousoomi
              </span>
            </span>
          </h1>
          
          {/* Role with Icon */}
          <div className="h-8 overflow-hidden">
            <div 
              className={`${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
              style={{ transform: `translateY(-${currentRole * 32}px)` }}
            >
              {displayRoles.map((role, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 h-8"
                >
                  <div className="text-neon-cyan">
                    {role.icon}
                  </div>
                  <span className="text-white/90 font-medium text-lg">{role.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Resume Button */}
          <div>
            <a 
              href="/Mousoomi_Shit_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass px-8 py-3 rounded-full text-white font-bold tracking-wider text-sm inline-flex items-center gap-2 hover:scale-105 transition-transform"
            >
              RESUME
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            <a href="https://github.com/Mousoomi03" target="_blank" rel="noreferrer" className="text-white/60 hover:text-neon-cyan hover:scale-110 transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-white/60 hover:text-neon-cyan hover:scale-110 transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-white/60 hover:text-neon-cyan hover:scale-110 transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

        {/* Right Side: Animated Code Terminal */}
        <div 
          className="flex-1 h-[500px] relative flex items-center justify-center" 
          style={{ perspective: '1200px' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 blur-3xl animate-pulse"></div>
          <div 
            className="relative w-full max-w-lg transition-transform duration-300 ease-out" 
            style={{ 
              transformStyle: 'preserve-3d',
              transform: `rotateX(${robotRotation.x}deg) rotateY(${robotRotation.y}deg)`
            }}
          >
            {/* Terminal Window */}
            <div className="bg-black/40 backdrop-blur-xl border-2 border-neon-cyan/40 rounded-2xl shadow-[0_0_50px_rgba(0,255,255,0.3)] overflow-hidden">
              {/* Window Header */}
              <div className="bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border-b border-neon-cyan/30 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(255,0,0,0.5)]"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(255,255,0,0.5)]"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(0,255,0,0.5)]"></div>
                </div>
                <span className="text-neon-cyan text-sm font-mono ml-4">~/portfolio/developer.js</span>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-neon-purple">1</span>
                  <span className="text-neon-purple">const</span>
                  <span className="text-neon-cyan ml-2">developer</span>
                  <span className="text-white"> = {'{'}  </span>
                </div>
                <div className="flex items-start gap-2 mb-2 ml-6">
                  <span className="text-neon-purple">2</span>
                  <span className="text-white ml-2">name:</span>
                  <span className="text-green-400 ml-2">'Mousoomi'</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex items-start gap-2 mb-2 ml-6">
                  <span className="text-neon-purple">3</span>
                  <span className="text-white ml-2">skills:</span>
                  <span className="text-white ml-2">['</span>
                  <span className="text-green-400">React</span>
                  <span className="text-white">', '</span>
                  <span className="text-green-400">Python</span>
                  <span className="text-white">', '</span>
                  <span className="text-green-400">AI/ML</span>
                  <span className="text-white">'],</span>
                </div>
                <div className="flex items-start gap-2 mb-2 ml-6">
                  <span className="text-neon-purple">4</span>
                  <span className="text-white ml-2">passion:</span>
                  <span className="text-green-400 ml-2">'Building the future'</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neon-purple">5</span>
                  <span className="text-white">{'};'}</span>
                  <span className="inline-block w-2 h-5 bg-neon-cyan animate-pulse ml-1 shadow-[0_0_10px_rgba(0,255,255,0.8)]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
