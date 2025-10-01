import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, Heart, Brain } from "lucide-react";

const About = () => {
  const interests = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Love building end-to-end applications with modern technologies"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Fascinated by sentiment analysis and intelligent systems"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Always exploring new technologies and pushing boundaries"
    },
    {
      icon: Heart,
      title: "Problem Solving",
      description: "Passionate about creating solutions that help people"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            More than just code - here's what drives me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-smooth hover:scale-[1.02]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4 text-gradient">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a first-year Computer Science student at Western University, I'm on an exciting journey of continuous learning 
                and growth. My passion for technology started with curiosity about how things work, and has evolved into a 
                commitment to creating meaningful digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in learning by doing - that's why I've already built multiple projects ranging from sentiment analysis 
                tools to productivity apps. Each project teaches me something new and pushes my boundaries.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/40 transition-smooth hover:scale-[1.02]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4 text-gradient">Beyond Code</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, or working on 
                personal projects that solve real-world problems. I'm particularly interested in how AI and machine learning 
                can be applied to everyday challenges.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm always looking for opportunities to collaborate, learn, and grow. Whether it's a hackathon, open source 
                project, or innovative startup idea - I'm all in!
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur border-border hover:border-accent transition-smooth group hover:scale-[1.05]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:glow-primary transition-smooth">
                  <interest.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h4 className="font-display font-semibold mb-2">{interest.title}</h4>
                <p className="text-sm text-muted-foreground">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
