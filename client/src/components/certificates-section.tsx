import { Award, ExternalLink, Download } from "lucide-react";

export default function CertificatesSection() {
  const certificates = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Cloud fundamentals and AWS services overview",
      type: "Cloud Computing",
      status: "Completed"
    },
    {
      title: "Microsoft Power BI Data Analyst",
      issuer: "Microsoft",
      date: "2025",
      description: "Advanced data visualization and dashboard creation",
      type: "Data Visualization",
      status: "In Progress"
    },
    {
      title: "Data Engineer Certification",
      issuer: "DataCamp",
      date: "2025",
      description: "Data analysis fundamentals and practical applications",
      type: "Data Analysis",
      status: "In Progress"
    },
    {
      title: "Python for Data Science",
      issuer: "DataCamp",
      date: "2024",
      description: "Python programming for data analysis and machine learning",
      type: "Programming",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "In Progress":
        return "bg-primary/10 text-primary";
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

  return (
    <section id="certificates" className="py-24 bg-gradient-to-br from-muted/50 via-background to-muted/30 section-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="certificates-title">
            Certificates & Credentials
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto" data-testid="certificates-description">
            Professional certifications and completed courses that validate my expertise in data engineering and analysis.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="glass-card gradient-border rounded-2xl shadow-2xl p-8 card-hover"
              data-testid={`certificate-card-${cert.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground" data-testid={`certificate-title-${index}`}>
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cert.status)}`}>
                  {cert.status}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-4" data-testid={`certificate-description-${index}`}>
                {cert.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs ${getTypeColor(cert.type)}`}>
                    {cert.type}
                  </span>
                  <span className="text-sm text-muted-foreground">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://drive.google.com/drive/folders/1FNbomF01IWk2eGE_QLC4FG0C1WEcEZfN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            data-testid="google-drive-certificates"
          >
            <ExternalLink size={20} />
            <span>View All Certificates</span>
          </a>
          <p className="text-muted-foreground mt-4">
            More certifications in progress. Check back for updates!
          </p>
        </div>
      </div>
    </section>
  );
}