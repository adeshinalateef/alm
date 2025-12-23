import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Category, Project } from '../types';
import { ExternalLink, Github, X, Image as ImageIcon } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<Category>(Category.ALL);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === Category.ALL 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-site relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            My <span className="text-secondary">Portfolio</span>
          </h2>
          <p className="text-muted-2 max-w-2xl mx-auto">
            Here are some of my recent projects, showcasing my skills in web development, design, and user experience.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-6 md:mt-0 mb-12">
          {Object.values(Category).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                  : 'bg-card text-muted-2 hover:bg-white/10' 
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative rounded-xl bg-card overflow-hidden cursor-pointer shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-shadow border border-primary/10"
                onClick={() => setSelectedProject(project)}
              >
                <div className="w-full aspect-[4/3] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white font-bold text-xl drop-shadow-md">{project.title}</h4>
                  {project.description && <p className="text-sm text-white/80 line-clamp-2">{project.description}</p>}
                  {project.link && (project.category === Category.WEB_DESIGN || project.category === Category.PROGRAMMING) && (
                    <div className="mt-4">
                      <span className="text-primary font-semibold">View Project &rarr;</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-card w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10 max-h-[95vh] flex flex-col md:flex-row"
              onClick={e => e.stopPropagation()}
            >
              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" width={800} height={600} />
              </div>
              <div className="w-full md:w-1/2 p-8 overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-heading font-bold">{selectedProject.title}</h3>
                  <button onClick={() => setSelectedProject(null)} className="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="Close">
                    <X size={24} />
                  </button>
                </div>
                <p className="text-sm text-muted mb-4">{selectedProject.category}</p>
                {selectedProject.description && <p className="text-muted-2 leading-relaxed mb-6">{selectedProject.description}</p>}
                
                <div>
                  <h4 className="text-lg font-bold mb-3 text-foreground">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(selectedProject.technologies || []).map((tech: string) => (
                      <span key={tech} className="px-3 py-1 bg-background border border-white/10 rounded-full text-xs text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-auto">
                  {selectedProject.link && (
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex-1 px-5 py-3 bg-primary text-white rounded-full font-bold text-center hover:bg-primary/90 transition-colors">
                      Live Project
                    </a>
                  )}
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 px-5 py-3 bg-card border border-white/10 text-white rounded-full font-bold text-center hover:bg-white/10 transition-colors">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;