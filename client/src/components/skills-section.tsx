import { motion } from "framer-motion";
import { BarChart3, Settings, ChartBar, Database, Cloud, Code, TrendingUp, Zap } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: BarChart3,
      title: "Data Analysis",
      skills: ["Statistical Analysis", "Data Mining", "Exploratory Data Analysis", "Predictive Modeling"],
      bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/10",
      iconColor: "text-blue-500",
      borderColor: "border-blue-500/20"
    },
    {
      icon: Settings,
      title: "Data Engineering",
      skills: ["ETL Pipelines", "Data Warehousing", "API Development", "Data Orchestration"],
      bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-500/10",
      iconColor: "text-green-500",
      borderColor: "border-green-500/20"
    },
    {
      icon: ChartBar,
      title: "Visualization & Dashboards",
      skills: ["Power BI", "Tableau", "Interactive Reports", "Data Storytelling"],
      bgColor: "bg-gradient-to-br from-purple-500/20 to-violet-500/10",
      iconColor: "text-purple-500",
      borderColor: "border-purple-500/20"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["SQL (MySQL, PostgreSQL)", "NoSQL (MongoDB)", "Database Design", "Query Optimization"],
      bgColor: "bg-gradient-to-br from-orange-500/20 to-amber-500/10",
      iconColor: "text-orange-500",
      borderColor: "border-orange-500/20"
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: ["AWS Basics", "Google Cloud Platform", "Azure Fundamentals", "Cloud Data Services"],
      bgColor: "bg-gradient-to-br from-indigo-500/20 to-blue-500/10",
      iconColor: "text-indigo-500",
      borderColor: "border-indigo-500/20"
    },
    {
      icon: Code,
      title: "Programming",
      skills: ["Python (Pandas, NumPy)", "R for Statistics", "Git Version Control", "Data Structures"],
      bgColor: "bg-gradient-to-br from-pink-500/20 to-rose-500/10",
      iconColor: "text-pink-500",
      borderColor: "border-pink-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-muted/50 via-background to-muted/30 section-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 section-title" data-testid="skills-title">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for data-driven solutions
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                className="glass-card gradient-border p-8 rounded-2xl shadow-2xl card-hover group relative overflow-hidden"
                data-testid={`skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <motion.div
                      className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className={`text-2xl ${category.iconColor}`} size={32} />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors" data-testid={`skill-title-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {category.title}
                    </h3>
                  </div>
                  
                  <motion.div className="space-y-3" variants={containerVariants}>
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className={`skill-badge bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-lg text-sm text-secondary-foreground text-center border ${category.borderColor} group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300`}
                        data-testid={`skill-badge-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                        variants={skillVariants}
                        whileHover={{ 
                          scale: 1.05,
                          x: 5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <span className="flex items-center justify-center space-x-2">
                          <span>{skill}</span>
                          <TrendingUp className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass-card gradient-border p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Continuous Learning</h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm always exploring new technologies and methodologies in the data space. 
              Currently focusing on machine learning, advanced analytics, and cloud-native data solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
