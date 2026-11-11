export const profile = {
  name: "Jenusan Yogarajah",
  headline: "Computer Science Student @ Western University",
  email: "jenusany@outlook.com",
  github: "https://github.com/jenusany",
  linkedin: "https://www.linkedin.com/in/jenusan-yogarajah/",
  resume: "https://docs.google.com/document/d/1bzpqLVNPOFrwAKchCN_DUVItJYB-EnVc/edit",
};

export interface Photo {
  /** Path under public/, e.g. "/photos/dj-1.jpg" */
  src: string;
  alt: string;
  /** CSS object-position: which part stays visible when the photo is cropped. */
  focus?: string;
}

export interface Level {
  level: string;
  title: string;
  when: string;
  text: string;
}

export interface World {
  id: string;
  /** Level number shown on the map block, e.g. "1-2". */
  stage: string;
  name: string;
  emoji: string;
  colors: [top: string, bottom: string];
  tagline: string;
  paragraphs: string[];
  photos: Photo[];
  achievements: string[];
  levels?: Level[];
  link?: { label: string; channel: string };
}

export const player = {
  name: "Jenusan",
  subtitle: "CS @ Western · DJ · Hooper · Head Soph",
};

export const worlds: World[] = [
  {
    id: "soph",
    stage: "1-1",
    name: "Soph Life",
    emoji: "📣",
    colors: ["#ffd36b", "#f39c12"],
    tagline: "3 years of welcoming first-years to Western",
    paragraphs: [
      "For the past three years I've been part of the Science Soph team for Western's orientation program, helping brand-new first-years find their people and feel at home in their first week of university.",
      "In my 4th year I levelled up to Head Soph, helping lead the soph team and plan the programming that welcomes incoming Science students. Watching a group of nervous first-years turn into a crew by the end of the week never gets old.",
    ],
    photos: [
      { src: "/photos/soph-1.jpg", alt: "The Science Soph team posing on a staircase at Western" },
      { src: "/photos/soph-2.jpg", alt: "A group of sophs in front of University College at Western" },
    ],
    achievements: ["3× Science Soph", "Head Soph (4th year)", "VP Internal Affairs, CS Undergrad Society"],
  },
  {
    id: "dj",
    stage: "1-2",
    name: "The DJ Booth",
    emoji: "🎧",
    colors: ["#c99bff", "#6a1b9a"],
    tagline: "Sharing my love for all types of music",
    paragraphs: [
      "When I'm not writing code, there's a good chance I'm behind the decks. I DJ because I love sharing music with people, and I mean all types of music.",
      "No single genre gets to hog the aux. If it gets the room moving, it's going in the set.",
    ],
    photos: [
      { src: "/photos/dj-1.jpg", alt: "Jenusan at an outdoor DJ setup with a laptop and controller", focus: "50% 22%" },
      { src: "/photos/dj-2.jpg", alt: "A DJ set for a crowd at a night event", focus: "50% 62%" },
    ],
    achievements: ["Genre-agnostic", "Crowd-reader", "Aux privileges: permanent"],
  },
  {
    id: "court",
    stage: "1-3",
    name: "The Court",
    emoji: "🏀",
    colors: ["#ffab76", "#d84315"],
    tagline: "Basketball, my whole life",
    paragraphs: [
      "Basketball has been part of my life for as long as I can remember. I've played my whole life, and it's still my favourite way to compete, unwind, and hang out with friends.",
      "These days you can catch me playing intramurals at Western. Same love for the game, now squeezed between lectures and deadlines.",
    ],
    photos: [
      { src: "/photos/hoops-1.jpg", alt: "Jenusan's intramural basketball team in the gym" },
    ],
    achievements: ["Lifelong hooper", "Western intramurals", "Always down for a run"],
  },
  {
    id: "dev",
    stage: "1-4",
    name: "Dev Mode",
    emoji: "💻",
    colors: ["#7fd8ff", "#1565c0"],
    tagline: "The tech side (still fun, I promise)",
    paragraphs: [
      "I came into Western as a Computer Science student figuring things out one assignment at a time, and I've been levelling up ever since: from class projects and hackathon apps to building real tools that teams rely on every day.",
      "Right now I'm a Technology Engineering Intern at CIBC Mellon, where I build automation and internal tools that take manual, error-prone work off people's plates.",
    ],
    photos: [],
    achievements: ["3 internships cleared", "Automation enjoyer", "Full-stack + AI"],
    levels: [
      {
        level: "Lvl 1",
        title: "Joined Western Computer Science",
        when: "Start of university",
        text: "Started my B.Sc. in Computer Science (Honours Specialization), picking up data structures, computer architecture, and a lot of late-night debugging.",
      },
      {
        level: "Lvl 2",
        title: "Web Development Intern, Magnify Access",
        when: "2024",
        text: "First internship! Built frontend features for the WPAS platform that increased accessibility compliance by 15%.",
      },
      {
        level: "Lvl 3",
        title: "Product & Web Development Intern, DataWiz",
        when: "2025",
        text: "Designed and built the company's public website from zero and helped shape its product offerings.",
      },
      {
        level: "Lvl 4",
        title: "Technology Engineering Intern, CIBC Mellon",
        when: "2026 – now",
        text: "Built an automated Duco reconciliation pipeline, an internal management tool, and an AI-powered contract analysis tool.",
      },
    ],
    link: { label: "Enter the Experience castle", channel: "experience" },
  },
];

export interface Project {
  title: string;
  year?: string;
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
    title: "Organizem",
    description:
      "A desktop app that scans and analyzes a computer's file system to find large files and unnecessary storage use. Designed for less technical users, it offers an intuitive interface and streamlined file management tools to safely reclaim disk space and keep things organized.",
    tags: ["C++", "Qt", "Desktop App"],
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

export interface Role {
  title: string;
  org: string;
  location: string;
  dates: string;
  points: string[];
}

export const experience: Role[] = [
  {
    title: "Technology Engineering Intern",
    org: "CIBC Mellon",
    location: "Toronto, ON",
    dates: "Jan 2026 – Present",
    points: [
      "Engineered an automated Duco reconciliation pipeline that retrieves, filters, and distributes daily financial data to business stakeholders based on configurable criteria, eliminating a manual process entirely.",
      "Built an internal management tool that digitizes and standardizes a previously manual, error-prone workflow, reducing operational risk and improving process reliability for the business team.",
      "Developed an AI-powered contract analysis tool that extracts key fields from hundreds of contracts into a structured Excel report, significantly cutting manual review time.",
    ],
  },
  {
    title: "Product & Web Development Intern",
    org: "DataWiz Inc.",
    location: "Toronto, ON",
    dates: "May 2025 – Aug 2025",
    points: [
      "Led end-to-end design and development of the company's public-facing website, establishing its online presence from zero.",
      "Contributed to product development by researching and assessing customer needs and helping refine product and service offerings.",
    ],
  },
  {
    title: "Web Development Intern",
    org: "Magnify Access Inc.",
    location: "Toronto, ON",
    dates: "Feb 2024 – May 2024",
    points: [
      "Worked with developers and business stakeholders to enhance the WPAS platform, turning user requirements into frontend solutions that increased accessibility compliance by 15%.",
      "Designed and built a customizable profile management system for the ClearText platform, improving account administration and user experience.",
    ],
  },
];

export const leadership: Role[] = [
  {
    title: "Vice President of Internal Affairs",
    org: "Western University Computer Science Undergraduate Society",
    location: "London, ON",
    dates: "Sep 2025 – Apr 2026",
    points: [
      "Led internal operations and member engagement, coordinating events, managing communications, and supporting collaboration across the executive team.",
    ],
  },
  {
    title: "Orientation Programming Assistant",
    org: "Western University Science Head Soph Team",
    location: "London, ON",
    dates: "Oct 2025 – Present",
    points: [
      "Lead a team of orientation leaders delivering programming and mentorship for incoming students: organizing events, connecting stakeholders, and fostering an inclusive environment.",
    ],
  },
];
