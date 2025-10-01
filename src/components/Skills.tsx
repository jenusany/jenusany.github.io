import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Flask", "TensorFlow", "JavaFX"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Firebase", "AWS EC2", "Git", "GitHub"]
    },
    {
      title: "Concepts",
      skills: ["Machine Learning", "Sentiment Analysis", "Full-Stack Dev", "Cloud Deployment"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-smooth hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-semibold mb-4 text-primary">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
