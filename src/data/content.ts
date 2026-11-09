export const profile = {
  name: "Jenusan Yogarajah",
  headline: "Computer Science Student @ Western University",
  email: "jenusany@outlook.com",
  github: "https://github.com/jenusany",
  linkedin: "https://www.linkedin.com/in/jenusan-yogarajah/",
  resume: "https://docs.google.com/document/d/1bzpqLVNPOFrwAKchCN_DUVItJYB-EnVc/edit",
};

export const about = {
  journey:
    "Hi, I'm Jenusan, a Computer Science student at Western University with a passion for building tools that make life simpler and more engaging. I enjoy working on projects that blend creativity with problem-solving, from hackathon apps to data-driven tools. Beyond coding, I'm active in my community, organizing events and supporting peers through leadership roles. I'm always eager to learn, collaborate, and create something impactful.",
  beyondCode:
    "When I'm not building projects, you'll probably find me organizing events with my student community, brainstorming creative ideas, or connecting with people. I enjoy taking on leadership roles that bring others together and create memorable experiences. Outside of school and tech, I like exploring new challenges, staying active, and finding ways to give back.",
  interests: [
    { title: "Full-Stack Development", description: "Building end-to-end applications with modern technologies" },
    { title: "AI & Machine Learning", description: "Fascinated by artificial intelligence and intelligent systems" },
    { title: "Innovation", description: "Always exploring new technologies and pushing boundaries" },
    { title: "Problem Solving", description: "Creating solutions that help people" },
  ],
};

export interface Project {
  title: string;
  year: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "BuzzBuilder",
    year: "2024",
    description:
      "A web app for content creators and business owners to manage Instagram posts and analyze engagement. A Keras sentiment-analysis model hosted on AWS EC2 scores how positive or negative comments are, alongside detailed post performance stats.",
    tags: ["Python", "Keras", "AWS EC2", "Sentiment Analysis", "React"],
    github: "https://github.com/jenusany/instagram-comment-tool",
    demo: "https://jenusany.github.io/instagram-comment-tool/",
  },
  {
    title: "LockIn",
    year: "2024",
    description:
      "A student organization platform built with JavaScript, HTML, and CSS. Uses Google Firebase for secure cloud storage so students can manage exams, assignments, and homework across any device.",
    tags: ["JavaScript", "Firebase", "HTML", "CSS"],
    github: "https://github.com/jenusany/LockIn",
    demo: "https://jenusany.github.io/LockIn/index.html",
  },
  {
    title: "3Putt",
    year: "2024",
    description:
      "A mobile-first golf scorecard tracker that replaces paper scorecards, giving golfers a sleek, organized way to track scores through a round.",
    tags: ["JavaScript", "Mobile-First", "Web App"],
    github: "https://github.com/jenusany/3putt",
    demo: "https://jenusany.github.io/3putt/",
  },
  {
    title: "NBA POTW Data Compilation",
    year: "2023",
    description:
      "Processes 40+ years of NBA Player of the Week data (1000+ entries) into structured records and renders customizable interactive graphs with JavaFX.",
    tags: ["Java", "JavaFX", "Data Visualization", "CSV"],
    github: "https://github.com/jenusany/Data-Compilation-CPT",
  },
];

export const skills = [
  { title: "Languages", items: ["Python", "Java", "C", "C++", "SQL", "JavaScript", "TypeScript", "HTML", "CSS"] },
  { title: "Frameworks & Libraries", items: ["React", "Flask", "TensorFlow", "JavaFX"] },
  { title: "Tools & Platforms", items: ["Firebase", "AWS EC2", "Git", "GitHub"] },
  { title: "Concepts", items: ["Machine Learning", "Sentiment Analysis", "Full-Stack Dev", "Cloud Deployment"] },
];
