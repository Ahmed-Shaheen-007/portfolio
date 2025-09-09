import { PieChart, Activity, Heart, PiggyBank, Brain, UserCheck, School, ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      icon: UserCheck,
      title: "CAUGHT-IN-CLASS",
      description: "CAUGHT-IN-CLASS is an intelligent classroom attendance system that leverages Python and OpenCV for face recognition. The app automatically detects and records student presence by scanning faces in real time, storing the data securely for easy tracking and reporting. This eliminates manual roll calls and ensures accurate, automated attendance management.",
      tools: [
        { name: "YOLO (You Only Look Once)", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
        { name: "OpenCV", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
        { name: "Python", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
        { name: "NumPy", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
        { name: "Pandas", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" }
      ],
      gradientFrom: "from-yellow-500/20",
      gradientTo: "to-yellow-500/5",
      iconColor: "text-yellow-600 dark:text-yellow-400",
      projectLink: "https://github.com/Ahmed-Shaheen-007/CAUGHT-IN-CLASS",
      sourceLink: "https://github.com/Ahmed-Shaheen-007/CAUGHT-IN-CLASS"
    },
    {
      icon: PiggyBank,
      title: "GDG Hackathon – Easefunds",
      description: "An intelligent personal finance platform designed to help users save money effortlessly. It automatically rounds up transactions, stores spare change in a digital savings box, and uses AI insights to guide users on when to spend and when to save.",
      tools: [
        { name: "Python", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
        { name: "AI/ML Models", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
        { name: "Data Analysis with Pandas", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
        { name: "Flask (for backend prototype)", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" }
      ],
      gradientFrom: "from-green-500/20",
      gradientTo: "to-green-500/5",
      iconColor: "text-green-600 dark:text-green-400",
      projectLink: "https://github.com/Ahmed-Shaheen-007",
      sourceLink: "https://github.com/Ahmed-Shaheen-007"
    },
    {
      icon: Heart,
      title: "VITA – Smart Health Monitoring System",
      description: "A web-based health assistant that extracts and analyzes data from medical reports using OCR and AI logic. It provides automated health insights, interprets lab values, and suggests follow-up actions to support better medical decision-making.",
      tools: [
        { name: "Python", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
        { name: "Flask", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
        { name: "Pandas", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
        { name: "Tesseract OCR", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" }
      ],
      gradientFrom: "from-purple-500/20",
      gradientTo: "to-purple-500/5",
      iconColor: "text-purple-600 dark:text-purple-400",
      projectLink: "https://github.com/Ahmed-Shaheen-007",
      sourceLink: "https://github.com/Ahmed-Shaheen-007"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="bg-card rounded-xl shadow-lg border border-border overflow-hidden card-hover"
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