import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            I'm always open to new opportunities and collaborations
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-smooth animate-fade-in-up">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary">
                <MessageSquare className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">
              Feel free to connect with me for any reason!
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always looking for new opportunities and experiences in life!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="gap-2 glow-primary transition-smooth hover:scale-105"
                asChild
              >
                <a href="mailto:jenusany@outlook.com">
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="gap-2 border-primary/30 hover:border-primary transition-smooth hover:scale-105"
                asChild
              >
                <a href="https://www.linkedin.com/in/jenusan-yogarajah/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-border text-center">
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
