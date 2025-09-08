export default function AboutSection() {
  const coreSkills = [
    'Python', 'SQL', 'Pandas', 'NumPy', 
    'Power BI', 'Tableau', 'Data Pipelines', 'ETL'
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="about-title">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground" data-testid="about-greeting">Hello, I'm Ahmed</h3>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-bio">
              Computer Science student, passionate about data, working towards a career in machine learning and data science. I believe that data has the power to solve complex problems and drive meaningful business decisions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-journey">
              My journey in data started with curiosity about patterns and insights hidden in datasets. Today, I combine technical expertise with analytical thinking to build solutions that make data accessible and actionable for businesses.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
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
