import { Category, Project, Service, SkillData, Testimonial, Step, Certification } from './types';
import { Palette, Globe, Code, Terminal, Cpu, Layout } from 'lucide-react';

export const SKILLS_DATA: SkillData[] = [
  { subject: 'Web Design', A: 95, fullMark: 100 },
  { subject: 'Graphics', A: 92, fullMark: 100 },
  { subject: 'UX / UI', A: 90, fullMark: 100 },
  { subject: 'AI & Automation', A: 78, fullMark: 100 },
  { subject: 'Full-Stack', A: 80, fullMark: 100 },
  { subject: 'Software Fundamentals', A: 85, fullMark: 100 },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Web Design',
    description: 'Designing brand-led, accessible websites that prioritize usability and conversion across devices.',
    icon: Globe
  },
  {
    id: '2',
    title: 'Graphics Design',
    description: 'Crafting clear visual identities, marketing assets, and interface graphics that elevate brand perception.',
    icon: Palette
  },
  {
    id: '3',
    title: 'UX / UI Design',
    description: 'User research and interaction design that produce intuitive, high-converting interfaces.',
    icon: Layout
  },
  {
    id: '4',
    title: 'AI & Automation',
    description: 'Applying automation and AI to streamline workflows and augment product experiences.',
    icon: Cpu
  },
  {
    id: '5',
    title: 'Full-Stack Apps',
    description: 'End-to-end product engineering — from data models and APIs to polished frontend experiences.',
    icon: Code
  },
  
];

export const PROJECTS: Project[] = [
  {
    id: 'trifold-brochure-design',
    title: 'Trifold Brochure Design',
    category: Category.GRAPHICS,
    image: '/projects/a5-trifold-mockup.png',
    description: '',
    technologies: ['Brochure Design']
  },
  {
    id: 'clean-browser-ui',
    title: 'Clean Browser UI',
    category: Category.GRAPHICS,
    image: '/projects/clean-browser-mockup.png',
    description: '',
    technologies: ['UI Design']
  },
  {
    id: 'futuristic-flyer-design',
    title: 'Futuristic Flyer Design',
    category: Category.GRAPHICS,
    image: '/projects/futuristic-floating-flyer-mockup-on-illuminated-platform-with-glowing-modern-background-0482.jpg',
    description: '',
    technologies: ['Flyer Design']
  },
  {
    id: 'ipad-pro-mockup',
    title: 'iPad Pro Mockup',
    category: Category.GRAPHICS,
    image: '/projects/ipad-pro-mockup.png',
    description: '',
    technologies: ['Product Mockup']
  },
  {
    id: 'large-poster-display',
    title: 'Large Poster Display',
    category: Category.GRAPHICS,
    image: '/projects/large-poster-on-wall.png',
    description: '',
    technologies: ['Poster Design']
  },
  {
    id: 'business-card-design',
    title: 'Business Card Design',
    category: Category.GRAPHICS,
    image: '/projects/pastel-light-blocks-business-card-mockup-with-soft-shadows-and-creative-styling-0769.jpg',
    description: '',
    technologies: ['Business Card Design']
  },
  {
    id: 'poster-design',
    title: 'Poster Design',
    category: Category.GRAPHICS,
    image: '/projects/poster-design-mockup.png',
    description: '',
    technologies: ['Poster Design']
  },
  {
    id: 'vertical-flyer-design',
    title: 'Vertical Flyer Design',
    category: Category.GRAPHICS,
    image: '/projects/professional-vertical-flyer-mockup-on-gradient-background-for-marketing-and-advertising-0470.jpg',
    description: '',
    technologies: ['Flyer Design']
  },
  {
    id: 'outdoor-billboard',
    title: 'Outdoor Billboard',
    category: Category.GRAPHICS,
    image: '/projects/sky-outdoor-nillboard-mockup(3).png',
    description: '',
    technologies: ['Billboard Design']
  },
  {
    id: 'ui-ux-design-project',
    title: 'UI/UX Design Project',
    category: Category.WEB_DESIGN,
    image: '/projects/UI UX.png',
    description: '',
    link: 'https://almuhaajirun.vercel.app/',
    technologies: ['UI/UX Design']
  },
  {
    id: 'web-development-project',
    title: 'Web Development Project',
    category: Category.PROGRAMMING,
    image: '/projects/WEB.png',
    description: '',
    link: 'https://almuhaajirun.vercel.app/',
    technologies: ['Web Development']
  }
];

export const PROCESS_STEPS: Step[] = [
  { id: 1, title: 'Discovery', description: 'Detailed assessment of business goals, users, and technical constraints to align scope.' },
  { id: 2, title: 'Strategy', description: 'Define product strategy, architecture, and user flows with measurable outcomes.' },
  { id: 3, title: 'Development', description: 'Iterative implementation using agile sprints, continuous integration and review.' },
  { id: 4, title: 'Launch', description: 'Deploy with monitoring, performance tuning, and post-launch support.' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CTO',
    company: 'TechFlow Inc.',
    content: 'The level of technical expertise and design sensibility brought to our project was unmatched. A true professional.',
    image: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Founder',
    company: 'Orbit Startups',
    content: 'Delivered a complex platform ahead of schedule with code quality that our internal team raved about.',
    image: 'https://picsum.photos/seed/marcus/100/100'
  }
];

export const CERTIFICATIONS: Certification[] = [
  { id: 'c1', image: '/certs/c1.png', url: '/certs/c1.png' },
  { id: 'c2a', image: '/certs/c2a.png', url: '/certs/c2a.png' },
  { id: 'c3', image: '/certs/c3.png', url: '/certs/c3.png' },
  { id: 'c4', image: '/certs/c4.png', url: '/certs/c4.png' },
  { id: 'c5', image: '/certs/c5.png', url: '/certs/c5.png' },
  { id: 'c6', image: '/certs/c6.png', url: '/certs/c6.png' },
  { id: 'c7', image: '/certs/c7.png', url: '/certs/c7.png' }
];

export const TRAINING = {
  enabled: true,
  whatsappUrl: 'https://wa.me/2349012039810?text=I%20want%20to%20register%20for%20the%20training',
  phone: '+234 901 203 9810',
  title: 'Now Offering Professional Training!',
  description: 'Advance your career with our hands-on training programs. We offer courses in: Web Design, Graphics Design, Web Development, and Software Development. Register via WhatsApp to secure your spot!',
  delayMs: 2500,
  showEveryVisit: true
};
// Whether the training CTA should block site interaction when visible (modal).
// Set to `false` to allow continuing to browse while the toast is visible.
export const TRAINING_CONFIG = {
  blockSiteWhenOpen: false,
};
