import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offsetTop = aboutSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const blobVariants = {
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center 
                 hero-gradient overflow-hidden"
    >
      {/* Enhanced Background Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 
                   bg-gradient-to-r from-blue-500/30 to-cyan-500/20 
                   dark:from-blue-400/40 dark:to-cyan-400/30 
                   rounded-full blur-3xl"
        variants={blobVariants}
        animate="animate"
      />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 
                   bg-gradient-to-r from-purple-500/30 to-pink-500/20 
                   dark:from-purple-400/40 dark:to-pink-400/30 
                   rounded-full blur-3xl"
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />

      <motion.div
        className="absolute -top-10 right-1/3 w-64 h-64 
                   bg-gradient-to-r from-pink-500/20 to-rose-500/15 
                   dark:from-pink-400/30 dark:to-rose-400/20 
                   rounded-full blur-2xl"
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 4 }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 
                     px-4 py-2 rounded-full text-sm font-medium text-primary mb-6"
          variants={itemVariants}
        >
          <Sparkles className="w-4 h-4" />
          <span>Available for opportunities</span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 
                     bg-gradient-to-r from-foreground via-primary to-foreground 
                     bg-clip-text text-transparent"
          data-testid="hero-title"
          variants={itemVariants}
        >
          Data Engineer & Data Analyst
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-8
                     text-muted-foreground"
          data-testid="hero-tagline"
          variants={itemVariants}
        >
          Turning raw data into clear insights and scalable solutions.
          <br />
          <span className="text-primary font-semibold">
            Building the future of data-driven decisions.
          </span>
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={scrollToAbout}
            className="btn-primary px-10 py-4 rounded-xl font-semibold text-white text-lg shadow-lg
                       hover:shadow-xl transition-all duration-300 group"
            data-testid="button-learn-more"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center space-x-2">
              <span>Learn More About Me</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </motion.button>

          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-xl font-semibold text-foreground text-lg
                       border-2 border-primary/20 hover:border-primary/40 
                       hover:bg-primary/5 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
