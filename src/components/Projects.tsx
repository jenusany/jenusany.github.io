import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "BuzzBuilder",
      year: "2024",
      description: "A web application for content creators and business owners to manage Instagram posts and analyze engagement. Features a Keras sentiment analysis model backend hosted on AWS EC2 to show how positive/negative comments are, plus comprehensive post performance statistics.",
      tags: ["Python", "Keras", "AWS EC2", "Sentiment Analysis", "React"],
      github: "https://github.com/jenusany/instagram-comment-tool",
      demo: "https://jenusany.github.io/instagram-comment-tool/",
      highlight: true
    },
    {
      title: "LockIn",
      year: "2024",
      description: "A comprehensive student organization platform built with JavaScript, HTML, and CSS. Utilizes Google Firebase for secure cloud storage, enabling students to efficiently manage exams, assignments, and homework across any device.",
      tags: ["JavaScript", "Firebase", "HTML", "CSS", "Cloud Storage"],
      github: "https://github.com/jenusany/LockIn",
      demo: "https://jenusany.github.io/LockIn/index.html"
    },
    {
      title: "3Putt",
      year: "2024",
      description: "A mobile-optimized golf scorecard tracker designed to eliminate the need for physical scorecards. Built with JavaScript to provide golfers with a sleek, organized way to track their scores throughout their games.",
      tags: ["JavaScript", "Mobile-First", "Web App"],
      github: "https://github.com/jenusany/3putt",
      demo: "https://jenusany.github.io/3putt/"
    },
    {
      title: "NBA POTW Data Compilation",
      year: "2023",
      description: "Processes 40+ years of NBA Player of the Week CSV data with 1000+ entries. Compiles historical records into structured, actionable data and renders customizable interactive graphs using JavaFX for easy data manipulation.",
      tags: ["Java", "JavaFX", "Data Visualization", "CSV Processing"],
      github: "https://github.com/jenusany/Data-Compilation-CPT"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Building solutions that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`bg-card/50 backdrop-blur border-border hover:border-primary transition-smooth group hover:scale-[1.02] animate-fade-in ${
                project.highlight ? 'md:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <CardTitle className="text-2xl font-display mb-2 group-hover:text-gradient transition-smooth">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.year}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button 
                        size="icon" 
                        variant="outline"
                        className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-smooth"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button 
                        size="icon" 
                        variant="outline"
                        className="border-accent/30 hover:border-accent hover:bg-accent/10 transition-smooth"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="outline"
                      className="border-primary/30 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
