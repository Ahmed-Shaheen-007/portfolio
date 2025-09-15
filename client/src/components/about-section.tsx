import { motion } from "framer-motion";
import { Code, Database, BarChart3, Zap } from "lucide-react";

export default function AboutSection() {
  const coreSkills = [
    { name: 'Python', icon: Code, color: 'text-yellow-500' },
    { name: 'SQL', icon: Database, color: 'text-blue-500' },
    { name: 'Pandas', icon: BarChart3, color: 'text-green-500' },
    { name: 'NumPy', icon: Zap, color: 'text-purple-500' },
    { name: 'Power BI', icon: BarChart3, color: 'text-orange-500' },
    { name: 'Tableau', icon: BarChart3, color: 'text-indigo-500' },
    { name: 'Data Pipelines', icon: Database, color: 'text-cyan-500' },
    { name: 'ETL', icon: Zap, color: 'text-pink-500' }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background section-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 section-title" data-testid="about-title">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Passionate about transforming data into actionable insights
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground" data-testid="about-greeting">
                Hello! I'm Ahmed
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-bio">
                A Computer Science student passionate about transforming raw data into meaningful insights. 
                I specialize in building data pipelines, creating interactive dashboards, and developing 
                scalable data solutions that drive business decisions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-focus">
                My expertise spans data engineering and analysis, with a focus on Python, SQL, and modern 
                visualization tools. I'm constantly learning and working towards a career in machine learning 
                and data science.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <motion.div
                className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </motion.div>
              <motion.div
                className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            className="glass-card gradient-border p-8 rounded-2xl shadow-2xl card-hover"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xl font-semibold text-foreground mb-6 text-center" data-testid="core-tech-title">
              Core Technologies
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {coreSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                    data-testid={`skill-${skill.name.toLowerCase().replace(' ', '-')}`}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors`}>
                      <IconComponent className={`w-4 h-4 ${skill.color}`} />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
