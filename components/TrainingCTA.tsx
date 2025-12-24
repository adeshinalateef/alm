import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { TRAINING, TRAINING_CONFIG } from '../constants';

const TrainingCTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!TRAINING.enabled) return;

    const hasBeenSeen = localStorage.getItem('trainingCtaSeen');
    if (hasBeenSeen && !TRAINING.showEveryVisit) {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, TRAINING.delayMs);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('trainingCtaSeen', 'true');
  };

  if (!isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-md rounded-2xl glass-panel p-6 shadow-2xl border border-white/10"
        >
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/10"
          >
            <X size={20} />
          </button>
          
          <h3 className="text-2xl font-heading font-bold mb-3">{TRAINING.title}</h3>
          <p className="text-muted mb-6">{TRAINING.description}</p>
          
          <a
            href={TRAINING.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-5 py-3 btn-primary rounded-full font-bold text-center inline-flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            Register on WhatsApp
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TrainingCTA;