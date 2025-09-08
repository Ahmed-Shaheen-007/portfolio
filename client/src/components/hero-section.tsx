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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center 
                 bg-gradient-to-br from-blue-50 to-white 
                 dark:from-gray-900 dark:to-black overflow-hidden"
    >
      {/* Blobs */}
      <div
        className="absolute top-20 left-10 w-72 h-72 
                   bg-blue-500/40 dark:bg-blue-400/30 
                   rounded-full blur-3xl animate-floatSlow"
      ></div>

      <div
        className="absolute bottom-20 right-10 w-96 h-96 
                   bg-purple-500/40 dark:bg-purple-400/30 
                   rounded-full blur-3xl animate-floatMedium"
      ></div>

      <div
        className="absolute -top-10 right-1/3 w-64 h-64 
                   bg-pink-500/40 dark:bg-pink-400/20 
                   rounded-full blur-2xl animate-floatFast"
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
          data-testid="hero-title"
        >
          Data Engineer & Data Analyst
        </h1>

        <p
          className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-8
                     text-gray-600 dark:text-blue-100"
          data-testid="hero-tagline"
        >
          Turning raw data into clear insights and scalable solutions.
        </p>

        <div className="mt-10">
          <button
            onClick={scrollToAbout}
            className="btn-primary px-10 py-4 rounded-xl font-semibold text-white text-lg shadow-lg"
            data-testid="button-learn-more"
          >
            Learn More About Me
          </button>
        </div>
      </div>
    </section>
  );
}
