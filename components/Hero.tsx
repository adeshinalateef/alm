import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass-panel border border-white/10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-medium">
              Open to new opportunities
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight">
            Building Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary">
              Masterpieces
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-2 max-w-2xl mx-auto mb-10 leading-relaxed">
            I'm <span className="text-foreground font-medium">Abdul Lateef Adeshina</span>, a multidisciplinary developer & designer crafting immersive web experiences 
            that combine aesthetic excellence with technical robustness.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio"
              className="px-8 py-4 btn-primary rounded-full font-bold transition-colors inline-block text-center"
            >
              Explore My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={"https://wa.me/2349012039810?text=Hello%20Abdul%20Lateef"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 btn-ghost rounded-full hover:bg-white/10 transition-colors inline-flex items-center gap-3"
            >
              <SiWhatsapp size={20} color="#25D366" />
              Message on WhatsApp
            </motion.a>
          </div>

          <div className="flex justify-center gap-6 text-muted-2">
            <motion.a
              whileHover={{ y: -3, color: '#00F0FF' }}
              href="https://github.com/Adeshina02"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <Github size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-muted-2" />
      </motion.div>
    </section>
  );
};

export default Hero;