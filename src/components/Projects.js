import { useState, useRef } from 'react';

const projects = [
  { 
    title: 'Cafe Finder', 
    tech: ['React', 'Google Maps API', 'JavaScript'], 
    desc: 'Interactive cafe discovery app with real-time location search and Google Maps integration.',
    github: 'https://github.com/Mousoomi17/Cafe_Finder',
    live: 'https://cafe-finder-ivory.vercel.app/' 
  },
  { 
    title: 'Ethical AI Monitor', 
    tech: ['PyTorch', 'NLP', 'RoBERTa'], 
    desc: 'AI model classifying social media ethics with 91% accuracy.',
    github: 'https://github.com/Mousoomi03/Ethical-AI-for-Social-Media-Monitoring' 
  },
  { 
    title: 'MindMate Assistant', 
    tech: ['OpenAI', 'Streamlit', 'Python'], 
    desc: 'Neurodiverse learning tool converting video to interactive notes.',
    github: 'https://github.com/Mousoomi03/MindMate' 
  },
  { 
    title: 'Taxi Trip Predictor', 
    tech: ['XGBoost', 'Scikit-learn'], 
    desc: 'Regression models predicting NYC taxi duration via geolocation.',
    github: 'https://github.com/Mousoomi03/predict_taxi_trip_duration' 
  }
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current || isHoveringLink) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHoveringLink(false);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="card-3d relative group h-full"
      style={{ 
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
    >
      <div className="h-full bg-gray-900/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl relative overflow-hidden group-hover:border-neon-cyan/50 transition-colors duration-300">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div className="text-5xl font-bold text-white/5 group-hover:text-neon-cyan/20 transition-colors">0{index + 1}</div>
            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-neon-cyan/20 transition-colors">
              <svg className="w-6 h-6 text-white group-hover:text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
          <p className="text-gray-400 mb-6 line-clamp-3">{project.desc}</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t, i) => (
              <span key={i} className="text-xs font-mono text-neon-purple bg-neon-purple/10 px-3 py-1 rounded-full border border-neon-purple/20">
                {t}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3" onMouseEnter={() => setIsHoveringLink(true)} onMouseLeave={() => setIsHoveringLink(false)}>
            {project.github && (
              <a 
                href={project.github}
                target="_blank" 
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-neon-purple hover:text-white font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(138,43,226,0.4)]"
              >
                GitHub
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            )}
            {project.live && (
              <a 
                href={project.live}
                target="_blank" 
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-neon-cyan hover:text-black font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]"
              >
                Live Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white" id="projects">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-neon-purple/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-neon-cyan/20 blur-[120px] rounded-full animate-pulse delay-1000"></div>

      </div>
      
      <div className="w-full max-w-7xl px-4 sm:px-6 py-12 sm:py-20 relative z-10">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
        <div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4">My <span className="text-neon-purple">Work</span></h2>
          <div className="h-1 w-20 bg-neon-cyan rounded-full"></div>
        </div>
        <p className="text-sm sm:text-base text-gray-400 max-w-sm md:text-right">
          A collection of AI models and full-stack applications solving real problems.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
      </div>
    </section>
  );
}

export default Projects;