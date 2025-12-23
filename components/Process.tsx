import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-site">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-heading font-bold">My Process</h2>
          <p className="text-muted-2 mt-4">From chaos to clarity.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-primary/20 hidden md:block" />

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Step Content */}
                <div className="flex-1 md:text-right">
                   <div className={`glass-panel p-6 rounded-xl border-l-4 ${index % 2 !== 0 ? 'md:border-l-0 md:border-r-4' : ''} border-primary`}>
                     <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                     <p className="text-muted-2 text-sm">{step.description}</p>
                   </div>
                </div>

                {/* Circle Indicator */}
                <div className="relative z-10 w-12 h-12 rounded-full indicator border-2 flex items-center justify-center shrink-0">
                  <span className="font-bold">{step.id}</span>
                </div>

                {/* Spacer for timeline balance */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;