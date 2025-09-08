export default function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const offsetTop = aboutSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="hero-name">Ahmed</h1>
        <h2 className="text-2xl md:text-3xl font-light mb-8 text-blue-100" data-testid="hero-title">
          Data Engineer & Data Analyst
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-blue-50" data-testid="hero-intro">
          I help businesses transform raw data into clear insights and scalable solutions. My focus is on data analysis and engineering — from building pipelines to designing dashboards — always delivering results that are practical and actionable.
        </p>
        <div className="mt-10">
          <button
            onClick={scrollToAbout}
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            data-testid="button-learn-more"
          >
            Learn More About Me
          </button>
        </div>
      </div>
    </section>
  );
}
