import { Award, Target, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We transform innovative ideas into powerful digital solutions that make a real impact."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Every project is crafted with meticulous attention to detail and industry best practices."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We work closely with our clients as true partners throughout the entire development journey."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions for modern challenges."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            About Us
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Building the <span className="bg-gradient-accent bg-clip-text text-transparent">Future of Web</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Plus Frames Limited is a premium web development agency specializing in creating sophisticated 
            digital experiences. Our flagship product, flyness.io, demonstrates our ability to build 
            complex, scalable platforms that serve global communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-semibold">
              Our Story
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a vision to bridge the gap between innovative ideas and exceptional digital execution, 
              Plus Frames Limited has established itself as a trusted partner for businesses seeking high-quality 
              web development solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our expertise gained recognition through the successful development and launch of flyness.io, 
              a comprehensive casting and talent platform that connects performers with opportunities worldwide. 
              This success has positioned us as experts in building complex, user-centric web applications.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-primary/10 text-primary border-primary/20">Full-Stack Development</Badge>
              <Badge className="bg-primary/10 text-primary border-primary/20">Platform Architecture</Badge>
              <Badge className="bg-primary/10 text-primary border-primary/20">User Experience Design</Badge>
              <Badge className="bg-primary/10 text-primary border-primary/20">Performance Optimization</Badge>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-primary rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-display font-bold mb-2">2024</div>
                  <div className="text-lg opacity-90">Established</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-xl flex items-center justify-center">
              <Award className="w-12 h-12 text-accent-foreground" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 p-8 bg-gradient-subtle rounded-2xl border border-border/50">
          <h3 className="text-2xl font-display font-semibold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise and proven track record.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>• Premium Quality</span>
            <span>• Timely Delivery</span>
            <span>• Ongoing Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;