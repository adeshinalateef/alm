import { LucideIcon } from 'lucide-react';

export enum Category {
  ALL = 'All',
  WEB_DESIGN = 'Web Design',
  DEVELOPMENT = 'Development',
  PROGRAMMING = 'Programming',
  GRAPHICS = 'Graphics'
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SkillData {
  subject: string;
  A: number;
  fullMark: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
}

export interface Certification {
  id: string;
  image?: string;
  url?: string;
}