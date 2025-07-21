import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-accent font-medium">Premium Web Development</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Plus Frames Limited
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We build cutting-edge web applications and platforms that transform ideas into digital reality. 
            Creators of <span className="text-accent font-semibold">flyness.io</span> and custom solutions for forward-thinking clients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
              View Our Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary hover:bg-primary/5">
              <Code2 className="mr-2 w-4 h-4" />
              Our Services
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-300">
              <h3 className="font-semibold text-lg mb-2">Web Applications</h3>
              <p className="text-muted-foreground">Full-stack development with modern technologies</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-300">
              <h3 className="font-semibold text-lg mb-2">Platform Development</h3>
              <p className="text-muted-foreground">Scalable platforms like flyness.io</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-300">
              <h3 className="font-semibold text-lg mb-2">Custom Solutions</h3>
              <p className="text-muted-foreground">Tailored development for unique requirements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;