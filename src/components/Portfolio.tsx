import { ExternalLink, Users, Star, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Our Work
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Featured <span className="bg-gradient-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our expertise through real-world applications that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Flyness.io - Featured Project */}
          <Card className="lg:col-span-2 overflow-hidden group hover:shadow-elegant transition-all duration-300 border-primary/20">
            <div className="aspect-video bg-gradient-primary relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-4xl font-display font-bold mb-2">flyness.io</h3>
                  <p className="text-xl opacity-90">Casting & Talent Platform</p>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <Badge className="bg-accent text-accent-foreground">Flagship Product</Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-primary" />
                flyness.io - Global Casting Platform
              </CardTitle>
              <CardDescription className="text-lg">
                Our flagship platform revolutionizing the casting industry. Built from the ground up with React and Node.js, 
                flyness.io handles thousands of users, real-time messaging, video submissions, and secure payment processing. 
                Currently in beta with growing international user base.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">Video Uploads</Badge>
                <Badge variant="secondary">Stripe Integration</Badge>
                <Badge variant="secondary">Socket.io</Badge>
                <Badge variant="secondary">Redis Cache</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>1000+ Beta Users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    <span>Live Platform</span>
                  </div>
                </div>
                <Button className="bg-gradient-primary group">
                  Visit flyness.io
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Projects */}
          <Card className="group hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl">E-commerce Solutions</CardTitle>
              <CardDescription>
                Custom online stores with advanced features, payment integration, and inventory management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Stripe</Badge>
                <Badge variant="secondary">CMS</Badge>
              </div>
              <Button variant="outline" className="w-full group">
                View Case Studies
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl">SaaS Platforms</CardTitle>
              <CardDescription>
                Scalable software-as-a-service solutions with subscription management and analytics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Analytics</Badge>
              </div>
              <Button variant="outline" className="w-full group">
                Explore Solutions
                <ExternalLink className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-accent hover:shadow-glow transition-all duration-300">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;