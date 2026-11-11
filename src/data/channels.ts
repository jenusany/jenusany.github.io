import type { LucideIcon } from "lucide-react";
import { Briefcase, Cpu, FileText, FolderGit2, Github, Linkedin, Mail, User } from "lucide-react";
import { profile } from "./content";

/** A "section" channel opens a page inside the site; a "link" channel opens an external URL. */
export type Channel = {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  colors: [top: string, bottom: string];
} & ({ kind: "section" } | { kind: "link"; href: string });

export const channels: Channel[] = [
  { id: "about", kind: "section", title: "About Me", tagline: "Pick a world and meet the real me", icon: User, colors: ["#6fd6ff", "#1e88e5"] },
  { id: "projects", kind: "section", title: "Projects", tagline: "Things I've built", icon: FolderGit2, colors: ["#ffc46b", "#f57c00"] },
  { id: "experience", kind: "section", title: "Experience", tagline: "Internships & leadership", icon: Briefcase, colors: ["#86e8dc", "#00897b"] },
  { id: "skills", kind: "section", title: "Skills", tagline: "Languages, frameworks & tools", icon: Cpu, colors: ["#8be8ad", "#2e9e5b"] },
  { id: "resume", kind: "link", href: profile.resume, title: "Resume", tagline: "Opens my resume in a new tab", icon: FileText, colors: ["#e3c2ea", "#8e24aa"] },
  { id: "contact", kind: "section", title: "Contact", tagline: "Let's connect", icon: Mail, colors: ["#ff9a90", "#e53935"] },
  { id: "github", kind: "link", href: profile.github, title: "GitHub", tagline: "Opens my GitHub in a new tab", icon: Github, colors: ["#a3adba", "#2d333b"] },
  { id: "linkedin", kind: "link", href: profile.linkedin, title: "LinkedIn", tagline: "Opens my LinkedIn in a new tab", icon: Linkedin, colors: ["#74bdf7", "#0a66c2"] },
];

export const SLOTS_PER_PAGE = 12;

export const findChannel = (id: string | undefined) => channels.find((c) => c.id === id);

export const channelGradient = (c: Channel) => `linear-gradient(180deg, ${c.colors[0]} 0%, ${c.colors[1]} 100%)`;
