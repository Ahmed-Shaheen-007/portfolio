import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, CheckCircle, Clock, Star } from "lucide-react";

export default function CertificatesSection() {
  const certificates = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Cloud fundamentals and AWS services overview with hands-on experience in cloud architecture and services.",
      type: "Cloud Computing",
      status: "Completed",
      icon: "☁️",
      progress: 100
    },
    {
      title: "Microsoft Power BI Data Analyst",
      issuer: "Microsoft",
      date: "2025",
      description: "Advanced data visualization and dashboard creation using Power BI for business intelligence solutions.",
      type: "Data Visualization",
      status: "In Progress",
      icon: "📊",
      progress: 75
    },
    {
      title: "Data Engineer Certification",
      issuer: "DataCamp",
      date: "2025",
      description: "Data analysis fundamentals and practical applications with real-world data engineering projects.",
      type: "Data Analysis",
      status: "In Progress",
      icon: "🔧",
      progress: 60
    },
    {
      title: "Python for Data Science",
      issuer: "DataCamp",
      date: "2024",
      description: "Python programming for data analysis and machine learning with comprehensive hands-on projects.",
      type: "Programming",
      status: "Completed",
      icon: "🐍",
      progress: 100
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "In Progress":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Cloud Computing":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case "Data Visualization":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
      case "Data Analysis":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "Programming":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

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

  return (
    <section id="certificates" className="py-24 bg-gradient-to-br from-muted/50 via-background to-muted/30 section-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 section-title" data-testid="certificates-title">
            Certificates & Credentials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto" data-testid="certificates-description">
            Professional certifications and completed courses that validate my expertise in data engineering and analysis.
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="glass-card gradient-border rounded-2xl shadow-2xl p-8 card-hover group relative overflow-hidden"
              data-testid={`certificate-card-${cert.title.toLowerCase().replace(/\s+/g, '-')}`}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
            >
              {/* Certificate Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl">{cert.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors" data-testid={`certificate-title-${index}`}>
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">{cert.issuer}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Calendar className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{cert.date}</span>
                    </div>
                  </div>
                </div>
                <motion.span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(cert.status)} flex items-center space-x-1`}
                  whileHover={{ scale: 1.05 }}
                >
                  {cert.status === "Completed" ? (
                    <CheckCircle className="w-3 h-3" />
                  ) : (
                    <Clock className="w-3 h-3" />
                  )}
                  <span>{cert.status}</span>
                </motion.span>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`certificate-description-${index}`}>
                {cert.description}
              </p>

              {/* Progress Bar for In Progress certificates */}
              {cert.status === "In Progress" && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Progress</span>
                    <span className="text-sm text-muted-foreground">{cert.progress}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cert.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(cert.type)}`}>
                    {cert.type}
                  </span>
                  {cert.status === "Completed" && (
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass-card gradient-border p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">View All Certificates</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Access my complete collection of certificates and credentials on Google Drive.
            </p>
            <motion.a
              href="https://drive.google.com/drive/folders/1FNbomF01IWk2eGE_QLC4FG0C1WEcEZfN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 group"
              data-testid="google-drive-certificates"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
              <span>Open Google Drive</span>
            </motion.a>
            <p className="text-muted-foreground mt-4 text-sm">
              More certifications in progress. Check back for updates!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}