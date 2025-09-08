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
        <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="hero-title">
          Data Engineer & Data Analyst
        </h1>
        <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto text-blue-100 mb-8" data-testid="hero-tagline">
          Turning raw data into clear insights and scalable solutions.
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
