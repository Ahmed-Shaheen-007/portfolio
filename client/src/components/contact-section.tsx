import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Get in touch via email",
      href: "mailto:contact@example.com",
      bgHover: "group-hover:bg-primary/20"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect with me professionally",
      href: "https://linkedin.com/in/ahmed-shaheen",
      bgHover: "group-hover:bg-primary/20"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "View my projects and code",
      href: "https://github.com/Ahmed-Shaheen-007",
      bgHover: "group-hover:bg-primary/20"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="contact-title">Get In Touch</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="contact-description">
          I'm always interested in discussing data opportunities, collaboration, or just connecting with fellow data enthusiasts. Feel free to reach out!
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <a 
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-card p-6 rounded-xl shadow-lg border border-border card-hover group"
                data-testid={`contact-${method.title.toLowerCase()}`}
              >
                <div className={`w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 ${method.bgHover} transition-colors`}>
                  <IconComponent className="text-2xl text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`contact-title-${method.title.toLowerCase()}`}>
                  {method.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`contact-description-${method.title.toLowerCase()}`}>
                  {method.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
