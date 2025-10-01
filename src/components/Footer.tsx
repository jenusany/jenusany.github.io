import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display font-bold mb-2 text-gradient">
              Jenusan Yogarajah
            </h3>
            <p className="text-sm text-muted-foreground">
              Computer Science Student • Developer • Builder
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/jenusany" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-smooth hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jenusan-yogarajah/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-smooth hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:jenusany@outlook.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-smooth hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
