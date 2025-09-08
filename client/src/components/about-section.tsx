export default function AboutSection() {
  const coreSkills = [
    'Python', 'SQL', 'Pandas', 'NumPy', 
    'Power BI', 'Tableau', 'Data Pipelines', 'ETL'
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background section-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="about-title">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground" data-testid="about-greeting">About Me</h3>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-bio">
              Computer Science student passionate about transforming raw data into meaningful insights. I specialize in building data pipelines, creating interactive dashboards, and developing scalable data solutions that drive business decisions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-focus">
              My expertise spans data engineering and analysis, with a focus on Python, SQL, and modern visualization tools. I'm constantly learning and working towards a career in machine learning and data science.
            </p>
          </div>
          
          <div className="glass-card gradient-border p-10 rounded-2xl shadow-2xl card-hover">
            <h4 className="text-xl font-semibold text-foreground mb-6" data-testid="core-tech-title">Core Technologies</h4>
            <div className="grid grid-cols-2 gap-4">
              {coreSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3" data-testid={`skill-${skill.toLowerCase().replace(' ', '-')}`}>
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
