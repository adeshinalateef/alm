import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Sparkles } from 'lucide-react';
import { TRAINING, TRAINING_CONFIG } from '../constants';

const TrainingCTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const appearanceCount = useRef(0);

  const showCTA = useCallback(() => {
    if (appearanceCount.current < 3) {
      setIsOpen(true);
      appearanceCount.current++;
    }
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    if (appearanceCount.current < 3) {
      setTimeout(showCTA, 40000); // 40 seconds
    }
  }, [showCTA]);

  useEffect(() => {
    if (!TRAINING.enabled) return;
    const initialTimeout = setTimeout(showCTA, TRAINING.delayMs);
    return () => clearTimeout(initialTimeout);
  }, [showCTA]);

  useEffect(() => {
    if (!isOpen) return;

    let exitTimer: ReturnType<typeof setTimeout> | null = null;
    const resetTimer = () => {
      if (exitTimer) clearTimeout(exitTimer);
      exitTimer = setTimeout(() => {
        handleClose();
      }, 10000); // 10 seconds
    };

    const handleUserInteraction = () => {
      resetTimer();
    };

    resetTimer();

    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('mousemove', handleUserInteraction);
    window.addEventListener('scroll', handleUserInteraction);
    window.addEventListener('keydown', handleUserInteraction);

    return () => {
      if (exitTimer) clearTimeout(exitTimer);
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('mousemove', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };
  }, [isOpen, handleClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {TRAINING_CONFIG.blockSiteWhenOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={handleClose}
            />
          )}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            className="fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-md rounded-2xl backdrop-blur-xl bg-white/95 dark:bg-gray-800/95 p-8 shadow-2xl border border-white/20"
          >
            <button
              onClick={handleClose}
              aria-label="Close training promo"
              className="absolute top-3 right-3 p-1.5 rounded-full text-gray-800 dark:text-gray-200 hover:bg-white/20 transition"
            >
              <X size={18} />
            </button>

            <div className="flex items-start gap-3 mb-3">
              <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 text-black">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold leading-tight text-gray-800 dark:text-gray-200">
                {TRAINING.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-5">
              {TRAINING.description}
            </p>

            <a
              href={TRAINING.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-5 py-3 rounded-xl font-bold text-center inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black shadow-lg hover:shadow-emerald-500/30 hover:from-emerald-300 hover:to-cyan-300 transition mb-3"
            >
              <MessageCircle size={20} />
              Register on WhatsApp
            </a>

            {TRAINING.phone && (
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 text-center">
                Or call {TRAINING.phone}
              </p>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TrainingCTA;
