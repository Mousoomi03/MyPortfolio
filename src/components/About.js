const skills = {
  languages: ['C#', 'Python', 'Java', 'C/C++', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
  frameworks: ['React', 'ASP.NET Core', 'PyTorch', 'TensorFlow', 'Hugging Face', 'Streamlit'],
  tools: ['Postman', 'VS Code', 'Git', 'GitHub', 'Eclipse'],
  databases: ['MySQL', 'MongoDB', 'AWS', 'Microsoft Azure'],
  certifications: [
    { name: 'AWS Certified Cloud Practitioner', icon: '☁️' },
    { name: 'Microsoft Certified: Azure Administrator Associate', icon: '🔷' },
    { name: 'NPTEL - Entrepreneurship', icon: '🎓' }
  ]
};

function About() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white" id="about">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-neon-purple/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-neon-cyan/20 blur-[120px] rounded-full animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 animate-[pulse_4s_infinite]">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute bg-white rounded-full opacity-60" style={{top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, width: `${Math.random() * 2 + 1}px`, height: `${Math.random() * 2 + 1}px`, animationDelay: `${Math.random() * 5}s`}} />
          ))}
        </div>
      </div>
      
      <div className="w-full max-w-7xl px-4 sm:px-6 py-12 sm:py-20 relative z-10">
      <div className="mb-10 sm:mb-16">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          About <span className="text-neon-purple">Me</span>
        </h2>
        <div className="h-1 w-20 bg-neon-cyan rounded-full mb-4 sm:mb-6"></div>
      </div>

      {/* Who I Am Section */}
      <div className="bg-gray-900/40 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl mb-8 sm:mb-12 group hover:border-neon-cyan/50 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
        
        <div className="relative z-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 group-hover:text-neon-cyan transition-colors">Who I Am</h3>
          <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            <p>
              I'm a <span className="text-neon-cyan font-semibold">Programmer Analyst Trainee at Cognizant</span>, working with .NET and React to develop full-stack web applications. I have knowledge in AI/ML, cloud technologies, and building scalable solutions that solve real-world problems.
            </p>
            <p>
              With certifications in <span className="text-neon-purple font-semibold">AWS Cloud Practitioner</span> and <span className="text-neon-purple font-semibold">Azure Administrator Associate</span>, I bring expertise in both development and cloud infrastructure. I'm passionate about ethical AI and creating accessible technology for diverse learners.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 sm:mb-12">
        <div className="bg-gray-900/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl group hover:border-neon-cyan/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-neon-cyan/10 rounded-lg">
                <svg className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill, i) => (
                <span key={i} className="text-xs font-mono text-neon-cyan bg-neon-cyan/10 px-3 py-1.5 rounded-full border border-neon-cyan/20 hover:bg-neon-cyan/20 hover:scale-105 transition-all duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-900/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl group hover:border-neon-purple/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-neon-purple/10 rounded-lg">
                <svg className="w-6 h-6 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-neon-purple transition-colors">Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill, i) => (
                <span key={i} className="text-xs font-mono text-neon-purple bg-neon-purple/10 px-3 py-1.5 rounded-full border border-neon-purple/20 hover:bg-neon-purple/20 hover:scale-105 transition-all duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-900/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl group hover:border-white/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white transition-colors">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, i) => (
                <span key={i} className="text-xs font-mono text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-900/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl group hover:border-neon-cyan/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-neon-cyan/10 rounded-lg">
                <svg className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">Databases & Cloud</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((skill, i) => (
                <span key={i} className="text-xs font-mono text-neon-cyan bg-neon-cyan/10 px-3 py-1.5 rounded-full border border-neon-cyan/20 hover:bg-neon-cyan/20 hover:scale-105 transition-all duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-gray-900/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl group hover:border-neon-purple/50 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
        
        <div className="relative z-10">
          <h3 className="text-3xl font-bold text-white mb-8 group-hover:text-neon-purple transition-colors">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.certifications.map((cert, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-neon-purple/50 hover:bg-white/10 transition-all duration-300 group/cert">
                <span className="text-2xl">{cert.icon}</span>
                <div className="flex-1">
                  <p className="text-white font-medium group-hover/cert:text-neon-purple transition-colors">{cert.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default About;
