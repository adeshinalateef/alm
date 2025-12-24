import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';
import LazyImage from './LazyImage';
import { Award } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section className="py-20 bg-site">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            My <span className="text-secondary">Certifications</span>
          </h2>
          <p className="text-muted-2 max-w-2xl mx-auto">
            Professional certifications and credentials showcasing expertise and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-4 rounded-xl border border-white/5 hover:border-primary/30 transition-all group hover:shadow-lg hover:shadow-primary/10"
            >
              {cert.image && (
                <div className="mb-4">
                  <LazyImage 
                    src={cert.image} 
                    alt={`Certificate ${cert.id}`} 
                    className="w-full h-48 object-cover rounded-lg border border-white/5"
                  />
                </div>
              )}
              {cert.url && (
                <div className="mt-4">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors font-medium"
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