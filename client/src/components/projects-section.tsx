import { PieChart, Activity, Brain, ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      icon: PieChart,
      title: "Sales Analytics Dashboard",
      description: "Built an interactive Power BI dashboard analyzing sales performance across multiple regions. Implemented automated data refresh and created KPI tracking that helped increase revenue by 15%.",
      tools: [
        { name: "Power BI", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
        { name: "SQL", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
        { name: "Python", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
        { name: "ETL", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" }
      ],
      gradientFrom: "from-yellow-500/20",
      gradientTo: "to-yellow-500/5",
      iconColor: "text-yellow-600 dark:text-yellow-400",
      projectLink: "https://your-live-demo-link-sales.com",
      sourceLink: "https://github.com/Ahmed-Shaheen-007/sales-analytics"
    },
    {
      icon: Activity,
      title: "Automated Data Pipeline",
      description: "Designed and implemented an automated ETL pipeline processing 100GB+ daily data from multiple sources. Reduced data processing time by 60% and improved data quality with validation checks.",
      tools: [
        { name: "Python", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
        { name: "Apache Airflow", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
        { name: "PostgreSQL", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
        { name: "AWS", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" }
      ],
      gradientFrom: "from-green-500/20",
      gradientTo: "to-green-500/5",
      iconColor: "text-green-600 dark:text-green-400",
      projectLink: "https://your-live-demo-link-pipeline.com",
      sourceLink: "https://github.com/Ahmed-Shaheen-007/data-pipeline"
    },
    {
      icon: Brain,
      title: "Customer Segmentation Analysis",
      description: "Performed advanced customer segmentation using machine learning clustering algorithms. Created actionable insights that improved targeted marketing campaigns by 25% conversion rate.",
      tools: [
        { name: "Python", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
        { name: "Scikit-learn", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
        { name: "Pandas", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
        { name: "Tableau", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" }
      ],
      gradientFrom: "from-purple-500/20",
      gradientTo: "to-purple-500/5",
      iconColor: "text-purple-600 dark:text-purple-400",
      projectLink: "https://your-live-demo-link-segmentation.com",
      sourceLink: "https://github.com/Ahmed-Shaheen-007/customer-segmentation"
    },
    {
      icon: Activity,
      title: "Real-time Stock Analysis",
      description: "Developed a real-time data streaming application for stock market analysis using financial APIs. Created automated alerts and trend analysis with interactive visualizations.",
      tools: [
        { name: "Python", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
        { name: "Pandas", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
        { name: "NumPy", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
        { name: "Streamlit", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" }
      ],
      gradientFrom: "from-blue-500/20",
      gradientTo: "to-blue-500/5",
      iconColor: "text-blue-600 dark:text-blue-400",
      projectLink: "https://your-live-demo-link-stock.com",
      sourceLink: "https://github.com/Ahmed-Shaheen-007/stock-analysis"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background section-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects that demonstrate my skills in data analysis, engineering, and visualization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index} 
                className="glass-card gradient-border rounded-2xl shadow-2xl overflow-hidden card-hover"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center`}>
                  <div className="text-center">
                    <IconComponent className={`text-4xl ${project.iconColor} mb-2`} size={48} />
                    <p className="text-sm text-muted-foreground">{project.title}</p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Tools Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <span 
                          key={toolIndex}
                          className={`${tool.color} px-3 py-1 rounded-full text-xs`}
                        >
                          {tool.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a 
                      href={project.projectLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-medium text-sm flex items-center space-x-1"
                    >
                      <ExternalLink size={14} />
                      <span>View Project</span>
                    </a>
                    <a 
                      href={project.sourceLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground font-medium text-sm flex items-center space-x-1"
                    >
                      <Github size={14} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}