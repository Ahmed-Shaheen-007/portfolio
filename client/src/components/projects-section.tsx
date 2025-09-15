import { motion } from "framer-motion";
import { Heart, PiggyBank, UserCheck, ExternalLink, Github, Calendar, Star } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      icon: UserCheck,
      title: "CAUGHT-IN-CLASS",
      description: "An intelligent classroom attendance system that leverages Python and OpenCV for face recognition. The app automatically detects and records student presence by scanning faces in real time, storing the data securely for easy tracking and reporting.",
      tools: [
        { name: "YOLO", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
        { name: "OpenCV", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
        { name: "Python", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
        { name: "NumPy", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
        { name: "Pandas", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" }
      ],
      gradientFrom: "from-yellow-500/20",
      gradientTo: "to-yellow-500/5",
      iconColor: "text-yellow-600 dark:text-yellow-400",
      projectLink: "https://github.com/Ahmed-Shaheen-007/CAUGHT-IN-CLASS",
      sourceLink: "https://github.com/Ahmed-Shaheen-007/CAUGHT-IN-CLASS",
      status: "Completed",
      year: "2024"
    },
    {
      icon: PiggyBank,
      title: "GDG Hackathon – Easefunds",
      description: "An intelligent personal finance platform designed to help users save money effortlessly. It automatically rounds up transactions, stores spare change in a digital savings box, and uses AI insights to guide users on when to spend and when to save.",
      tools: [
        { name: "Python", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
        { name: "AI/ML Models", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
        { name: "Data Analysis", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
        { name: "Flask", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" }
      ],
      gradientFrom: "from-green-500/20",
      gradientTo: "to-green-500/5",
      iconColor: "text-green-600 dark:text-green-400",
      projectLink: "https://github.com/Ahmed-Shaheen-007",
      sourceLink: "https://github.com/Ahmed-Shaheen-007",
      status: "Hackathon Winner",
      year: "2024"
    },
    {
      icon: Heart,
      title: "VITA – Smart Health Monitoring",
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
      sourceLink: "https://github.com/Ahmed-Shaheen-007",
      status: "In Progress",
      year: "2024"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "Hackathon Winner":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "In Progress":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-background via-muted/10 to-background section-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 section-title">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A selection of projects that demonstrate my skills in data analysis, engineering, and visualization.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden card-hover group relative"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Project Header with Status */}
                <div className={`h-48 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="text-center relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className={`text-5xl ${project.iconColor} mb-3`} size={48} />
                    </motion.div>
                    <p className="text-sm text-muted-foreground font-medium">{project.title}</p>
                    <div className="flex items-center justify-center space-x-2 mt-2">
                      <Calendar className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                    </div>
                  </div>
                  
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping" />
                    <div className="absolute bottom-4 right-4 w-1 h-1 bg-white rounded-full animate-pulse" />
                    <div className="absolute top-1/2 left-4 w-1 h-1 bg-white rounded-full animate-bounce" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center space-x-2">
                      <Star className="w-4 h-4 text-primary" />
                      <span>Technologies Used</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <motion.span
                          key={toolIndex}
                          className={`${tool.color} px-3 py-1 rounded-full text-xs font-medium tool-badge`}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tool.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-medium text-sm flex items-center space-x-2 group/link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={14} className="group-hover/link:rotate-12 transition-transform" />
                      <span>View Project</span>
                    </motion.a>
                    <motion.a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground font-medium text-sm flex items-center space-x-2 group/link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={14} className="group-hover/link:rotate-12 transition-transform" />
                      <span>Source Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass-card gradient-border p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Interested in my work?</h3>
            <p className="text-muted-foreground mb-6">
              Check out more projects on my GitHub or get in touch to discuss potential collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/Ahmed-Shaheen-007"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3 rounded-lg font-semibold text-white flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                <span>View All Projects</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 rounded-lg font-semibold text-foreground border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Collaborate
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}