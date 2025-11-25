const experiences = [
  {
    title: 'Programmer Analyst Trainee',
    company: 'Cognizant',
    location: 'Chennai, Tamil Nadu',
    period: 'July 2025 – Present',
    description: [
      'Developing full-stack web apps in .NET & React ecosystems.',
      'Engineering backend services with C# & ASP.NET Core.',
      'Building type-safe frontend interfaces using React & TypeScript.'
    ]
  },
  {
    title: 'Web Developer Intern',
    company: 'Amarilo Plastics Ltd',
    location: 'Lagos, Nigeria',
    period: 'June 2024 – July 2024',
    description: [
      'Revamped company website enhancing UX/UI accessibility.',
      'Analyzed manufacturing data to optimize digital workflows.',
      'Managed financial records utilizing Tally software.'
    ]
  },
  {
    title: 'Data Science Intern',
    company: 'Capabl',
    location: 'Remote',
    period: 'Aug 2023 – Sept 2023',
    description: [
      'Engineered LSTM neural networks for stock price forecasting.',
      'Processed historical data for deep learning pipelines.',
      'Conducted time-series analysis on financial datasets.'
    ]
  }
];

function Experience() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white" id="experience">
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
      
      <div className="w-full max-w-5xl px-4 sm:px-6 py-12 sm:py-20 relative z-10 mx-auto">
      <div className="mb-10 sm:mb-16">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Career <span className="text-neon-cyan">History</span></h2>
        <div className="h-1 w-20 bg-neon-purple rounded-full mb-4 sm:mb-6"></div>
        <p className="text-base sm:text-xl text-gray-400 max-w-2xl">My professional trajectory</p>
      </div>

      <div className="relative">
        {/* Glowing Timeline Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent opacity-50 rounded-full"></div>

        <div className="flex flex-col gap-12 md:gap-24">
          {experiences.map((exp, i) => (
            <div key={i} className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black border-2 border-neon-cyan rounded-full z-10 shadow-[0_0_15px_rgba(0,255,255,0.8)]">
                <div className="absolute inset-1 bg-neon-cyan rounded-full animate-pulse"></div>
              </div>

              {/* Content Spacer */}
              <div className="flex-1 hidden md:block"></div>

              {/* Content Card */}
              <div className="flex-1 w-full pl-10 md:pl-0 md:px-12">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-neon-purple/50 hover:bg-white/10 transition-all duration-300 group">
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-neon-cyan bg-neon-cyan/10 rounded-full border border-neon-cyan/30">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <span className="text-neon-purple font-medium">{exp.company}</span>
                    <span>•</span>
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-neon-cyan rounded-full flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

export default Experience;