import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card animate-float opacity-50" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto animate-fade-in-up">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/50 text-primary text-sm font-medium mb-4">
            👋 Welcome to my portfolio
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
          <span className="text-gradient">Jenusan Yogarajah</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium">
          1st Year Computer Science Student @ Western University
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Building innovative web applications and exploring the intersection of AI, machine learning, and full-stack development. 
          Passionate about creating impactful solutions that make a difference.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="gap-2 glow-primary transition-smooth hover:scale-105"
            asChild
          >
            <a href="#projects">
              View My Work
              <ArrowDown className="w-4 h-4" />
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="gap-2 border-primary/30 hover:border-primary transition-smooth hover:scale-105"
            asChild
          >
            <a href="#contact">
              Get in Touch
            </a>
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center mt-12 animate-slide-in-right">
          <a 
            href="https://www.linkedin.com/in/jenusan-yogarajah/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-smooth hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/jenusany" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-smooth hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://docs.google.com/document/d/1bzpqLVNPOFrwAKchCN_DUVItJYB-EnVc/edit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-smooth hover:scale-110"
          >
            <FileText className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
