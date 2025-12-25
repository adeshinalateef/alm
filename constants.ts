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
    id: 'portfolio-ui-ux-developer',
    title: 'UI/UX Frontend Developer Portfolio',
    category: Category.WEB_DESIGN_DEVELOPMENT,
    image: 'https://images.pexels.com/photos/29703202/pexels-photo-29703202.png',
    description: 'A modern, responsive portfolio website showcasing frontend development skills with elegant UI/UX design and smooth animations.',
    link: 'https://almuhaajirun.vercel.app/',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 'sollah-project',
    title: 'Sollah',
    category: Category.WEB_DESIGN_DEVELOPMENT,
    image: '/projects/WEB.png',
    description: 'A prayer time management app that allows Muslims to manually update solat times and automatically generates beautiful flyers to share across the community.',
    link: 'https://sollah.netlify.app/',
    technologies: ['React', 'Web Development', 'Automated Design']
  },
  {
    id: 'almuhaajirun-project',
    title: 'Al-Muhaajirun Institute',
    category: Category.WEB_DESIGN_DEVELOPMENT,
    image: '/projects/UI UX.png',
    description: 'An educational institute website dedicated to Islamic knowledge, calling Muslims to seek knowledge and spend in the cause of Allah through Dawah.',
    link: 'https://almuhaajirun.netlify.app/',
    technologies: ['React', 'Web Development', 'UI/UX Design']
  },
  {
    id: 'trifold-brochure-design',
    title: 'Trifold Brochure Design',
    category: Category.GRAPHICS,
    image: '/projects/a5-trifold-mockup.png',
    description: 'Professional trifold brochure with modern layout and compelling visual hierarchy.',
    technologies: ['Brochure Design', 'Print Design']
  },
  {
    id: 'clean-browser-ui',
    title: 'Clean Browser UI',
    category: Category.GRAPHICS,
    image: '/projects/clean-browser-mockup.png',
    description: 'Sleek and intuitive browser interface design with focus on user experience.',
    technologies: ['UI Design', 'Interface Design']
  },
  {
    id: 'futuristic-flyer-design',
    title: 'Futuristic Flyer Design',
    category: Category.GRAPHICS,
    image: '/projects/futuristic-floating-flyer-mockup-on-illuminated-platform-with-glowing-modern-background-0482.jpg',
    description: 'Modern event flyer with vibrant gradients and eye-catching typography.',
    technologies: ['Flyer Design', 'Event Marketing']
  },
  {
    id: 'ipad-pro-mockup',
    title: 'iPad Pro Mockup',
    category: Category.GRAPHICS,
    image: '/projects/ipad-pro-mockup.png',
    description: 'Professional product mockup showcasing digital designs on iPad Pro.',
    technologies: ['Product Mockup', 'Digital Presentation']
  },
  {
    id: 'large-poster-display',
    title: 'Large Poster Display',
    category: Category.GRAPHICS,
    image: '/projects/large-poster-on-wall.png',
    description: 'Impactful poster design with bold imagery and compelling messaging.',
    technologies: ['Poster Design', 'Print Media']
  },
  {
    id: 'business-card-design',
    title: 'Business Card Design',
    category: Category.GRAPHICS,
    image: '/projects/pastel-light-blocks-business-card-mockup-with-soft-shadows-and-creative-styling-0769.jpg',
    description: 'Elegant business card with pastel colors and modern aesthetic.',
    technologies: ['Business Card Design', 'Brand Identity']
  },
  {
    id: 'poster-design',
    title: 'Poster Design',
    category: Category.GRAPHICS,
    image: '/projects/poster-design-mockup.png',
    description: 'Creative poster design combining artistic elements with clear communication.',
    technologies: ['Poster Design', 'Visual Communication']
  },
  {
    id: 'vertical-flyer-design',
    title: 'Vertical Flyer Design',
    category: Category.GRAPHICS,
    image: '/projects/professional-vertical-flyer-mockup-on-gradient-background-for-marketing-and-advertising-0470.jpg',
    description: 'Professional marketing flyer with strategic layout and visual hierarchy.',
    technologies: ['Flyer Design', 'Marketing Materials']
  },
  {
    id: 'outdoor-billboard',
    title: 'Outdoor Billboard',
    category: Category.GRAPHICS,
    image: '/projects/sky-outdoor-nillboard-mockup(3).png',
    description: 'Large-format outdoor advertising design with maximum visual impact.',
    technologies: ['Billboard Design', 'Outdoor Advertising']
  }
    ];export const PROCESS_STEPS: Step[] = [
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
  title: 'Enroll Now: Web, Software, AI & Graphics Design Training',
  description: 'Hands-on training now open! Topics include Web Design, Web Development, Software Development, AI fundamentals, and Graphics Design. Flexible schedules, practical projects, and portfolio-ready outcomes.',
  delayMs: 4000,
  showEveryVisit: false
};
// Whether the training CTA should block site interaction when visible (modal).
// Set to `false` to allow continuing to browse while the toast is visible.
export const TRAINING_CONFIG = {
  blockSiteWhenOpen: false,
};
