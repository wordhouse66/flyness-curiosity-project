import { Code, Smartphone, Globe, Database, Zap, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Application Development",
      description: "Full-stack development using modern frameworks like React, Next.js, and Node.js. We build scalable, performant applications tailored to your business needs.",
      features: ["React & Next.js", "Node.js Backend", "Database Design", "API Development"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive web applications that work seamlessly across all devices. Progressive web apps with native-like experiences.",
      features: ["Responsive Design", "PWA Development", "Cross-browser Support", "Performance Optimization"]
    },
    {
      icon: Globe,
      title: "Platform Development",
      description: "Complex platforms like flyness.io with user management, real-time features, and advanced functionality for specific industries.",
      features: ["User Authentication", "Real-time Features", "Payment Integration", "Admin Dashboards"]
    },
    {
      icon: Database,
      title: "Backend & Database",
      description: "Robust backend systems with efficient database design, API development, and cloud infrastructure management.",
      features: ["PostgreSQL & MongoDB", "RESTful APIs", "Cloud Deployment", "Data Migration"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast applications with optimized loading times, SEO-friendly architecture, and superior user experience.",
      features: ["Core Web Vitals", "SEO Optimization", "Caching Strategies", "CDN Integration"]
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Comprehensive security implementation and ongoing maintenance to keep your applications secure and up-to-date.",
      features: ["Security Audits", "Regular Updates", "Monitoring", "Backup Solutions"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-accent/20 text-accent">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Comprehensive <span className="bg-gradient-primary bg-clip-text text-transparent">Development Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end web development solutions that drive business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Need something custom? We love unique challenges.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-lg border border-border/50">
            <Zap className="w-5 h-5 text-accent" />
            <span className="font-medium">Let's discuss your project requirements</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;