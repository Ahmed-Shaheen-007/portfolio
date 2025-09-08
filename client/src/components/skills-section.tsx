import { BarChart3, Settings, ChartBar, Database, Cloud, Code } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: BarChart3,
      title: "Data Analysis",
      skills: ["Statistical Analysis", "Data Mining", "Exploratory Data Analysis"],
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Settings,
      title: "Data Engineering",
      skills: ["ETL Pipelines", "Data Warehousing", "API Development"],
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: ChartBar,
      title: "Visualization & Dashboards",
      skills: ["Power BI", "Tableau", "Interactive Reports"],
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["SQL (MySQL, PostgreSQL)", "NoSQL (MongoDB)", "Database Design"],
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: ["AWS Basics", "Google Cloud Platform", "Azure Fundamentals"],
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Code,
      title: "Programming",
      skills: ["Python (Pandas, NumPy)", "R for Statistics", "Git Version Control"],
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="skills-title">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index} 
                className="bg-card p-8 rounded-xl shadow-lg border border-border card-hover"
                data-testid={`skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`text-2xl ${category.iconColor}`} size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground" data-testid={`skill-title-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="skill-badge bg-secondary px-3 py-2 rounded-lg text-sm text-secondary-foreground text-center"
                      data-testid={`skill-badge-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
