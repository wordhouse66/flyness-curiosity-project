import { ExternalLink, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="font-display font-bold text-xl bg-gradient-primary bg-clip-text text-transparent mb-4">
              Plus Frames Limited
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Premium web development agency creating cutting-edge digital solutions. 
              Builders of flyness.io and custom applications for forward-thinking clients.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@plusframes.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Platform Development</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Mobile Applications</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h3 className="font-semibold mb-4">Portfolio</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a 
                  href="https://flyness.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  flyness.io
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">E-commerce Solutions</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">SaaS Platforms</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">View All Projects</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Plus Frames Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;