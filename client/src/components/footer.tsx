import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Ahmed-Shaheen-007",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ahmedemad-",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      href: "mailto:ahmed.dev.se@gmail.com",
      label: "Email",
      color: "hover:text-red-400"
    }
  ];

  return (
    <footer className="bg-gradient-to-t from-card via-card/95 to-background border-t border-border/50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand */}
          <motion.div
            className="flex items-center justify-center space-x-2 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-2xl font-bold text-foreground">Portfolio</span>
          </motion.div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`text-muted-foreground transition-colors duration-300 ${link.color} p-2 rounded-lg hover:bg-primary/10`}
                  aria-label={link.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent size={24} />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <motion.div
            className="text-muted-foreground text-sm"
            data-testid="footer-copyright"
          >
            <p className="flex items-center justify-center space-x-2">
              <span>© {currentYear}</span>
              <span className="font-semibold text-foreground">Ahmed Shaheen</span>
              <span>•</span>
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="text-red-500"
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.span>
              <span>in Egypt</span>
            </p>
            <p className="mt-2 text-xs opacity-75">
              Data Engineer & Data Analyst • Building the future of data-driven decisions
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
