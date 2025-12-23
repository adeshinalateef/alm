import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';
import LazyImage from './LazyImage';
import { Award } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section className="py-20 bg-site">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heading font-bold mb-12 flex items-center gap-3">
          <Award className="text-secondary" />
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-all group"
            >
              {cert.image && (
                <div className="mb-4">
                  <LazyImage 
                    src={cert.image} 
                    alt={`Certificate ${cert.id}`} 
                    className="w-full h-40 object-cover rounded-md border border-white/5"
                  />
                </div>
              )}
              {cert.url && (
                <div className="mt-4">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 font-bold"
                  >
                    View Certificate
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;