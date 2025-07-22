import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Plus Frames Limited delivered exactly what we envisioned for our platform. Their technical expertise and attention to detail throughout the flyness.io development process was exceptional.",
      author: "Sarah Mitchell",
      role: "Casting Director",
      company: "London Theatre Works",
      rating: 5
    },
    {
      quote: "The team's ability to handle complex requirements like real-time video processing and user matching algorithms is impressive. flyness.io has transformed how we connect with talent.",
      author: "Michael Chen",
      role: "Production Manager",
      company: "Independent Film Studio",
      rating: 5
    },
    {
      quote: "Working with Plus Frames was a game-changer. They didn't just build our website - they created a comprehensive digital solution that scales with our business needs.",
      author: "Emma Rodriguez",
      role: "CEO",
      company: "Creative Agency",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-accent/20 text-accent">
            Client Success
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from businesses who've experienced our development expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 p-8 bg-card rounded-2xl border border-border/50">
          <h3 className="text-2xl font-display font-semibold mb-4">
            Join Our Success Stories
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to see your project become the next success story? Let's discuss your vision.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span>• 100% Client Satisfaction</span>
            <span>• Proven Track Record</span>
            <span>• Long-term Partnerships</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;