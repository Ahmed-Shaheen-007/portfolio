import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MessageCircle, Send, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Get in touch via email for professional inquiries",
      href: "mailto:ahmed.dev.se@gmail.com",
      bgHover: "group-hover:bg-blue-500/20",
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect with me professionally on LinkedIn",
      href: "https://www.linkedin.com/in/ahmedemad-",
      bgHover: "group-hover:bg-blue-600/20",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-600/10"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "View my projects and source code",
      href: "https://github.com/Ahmed-Shaheen-007",
      bgHover: "group-hover:bg-gray-500/20",
      iconColor: "text-gray-500",
      bgColor: "bg-gray-500/10"
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

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-muted/50 via-background to-muted/30 section-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 section-title" data-testid="contact-title">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto" data-testid="contact-description">
            I'm always interested in discussing data opportunities, collaboration, or just connecting with fellow data enthusiasts. Feel free to reach out!
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-card gradient-border p-8 rounded-2xl shadow-2xl card-hover group relative overflow-hidden"
                data-testid={`contact-${method.title.toLowerCase()}`}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated background */}
                <div className={`absolute inset-0 ${method.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10 text-center">
                  <motion.div
                    className={`w-20 h-20 ${method.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className={`text-3xl ${method.iconColor}`} size={32} />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors" data-testid={`contact-title-${method.title.toLowerCase()}`}>
                    {method.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`contact-description-${method.title.toLowerCase()}`}>
                    {method.description}
                  </p>

                  <motion.div
                    className="inline-flex items-center space-x-2 text-primary font-medium group-hover:text-primary/80 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Get in touch</span>
                    <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </motion.div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Additional Contact Information */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass-card gradient-border p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Let's Start a Conversation</h3>
            </div>
            
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Whether you're looking for a data engineer, want to collaborate on a project, 
              or just want to chat about data science and technology, I'd love to hear from you!
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Response Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:ahmed.dev.se@gmail.com"
                className="btn-primary px-8 py-4 rounded-lg font-semibold text-white flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                <span>Send Email</span>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/ahmedemad-"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg font-semibold text-foreground border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                <span>Connect on LinkedIn</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
