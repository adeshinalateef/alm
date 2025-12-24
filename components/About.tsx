import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
const SkillRadar = React.lazy(() => import('./SkillRadar'));
import { SKILLS_DATA } from '../constants';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-site relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-6">
             <h2 className="text-4xl font-heading font-bold">
              <span className="text-secondary">Who</span> I Am
            </h2>
            <h3 className="text-2xl font-light text-muted">
              Multidisciplinary design & engineering for web products.
            </h3>
            <p className="text-muted-2 leading-relaxed">
              I design visual identities and build polished web experiences that prioritize usability, performance, and brand clarity. My process blends research, interaction design, and practical engineering to deliver measurable results.
            </p>
            <p className="text-muted-2 leading-relaxed">
              I apply full-stack engineering and automation where it accelerates delivery and improves reliability — including pragmatic use of AI when it adds real value.
            </p>
            <p className="text-muted-2 leading-relaxed">
              Based in Lagos, Nigeria, I collaborate with startups and established teams to turn concepts into high-quality, performant products.
            </p>

            <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/10">
              {[
                { label: 'Years Exp.', value: '5+' },
                { label: 'Projects', value: '40+' },
                { label: 'Clients', value: '25+' },
              ].map((stat, idx) => (
                <div key={idx}>
                  <h4 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h4>
                  <p className="text-sm text-muted-2 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>

            <a 
              href="#contact" 
              className="flex items-center gap-2 text-secondary font-medium hover:text-foreground transition-colors group"
            >
              <Download size={18} />
              <span>Download Resume</span>
              <span className="block h-0.5 w-0 bg-secondary transition-all group-hover:w-full"></span>
            </a>
          </div>

          {/* Right Chart */}
          <div className="h-[400px] glass-panel rounded-2xl p-4 flex items-center justify-center relative overflow-hidden">
             {/* Decorative gradient behind chart */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 pointer-events-none" />
            
            <Suspense fallback={<div className="text-muted-2">Loading chart…</div>}>
              <SkillRadar />
            </Suspense>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;