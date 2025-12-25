import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Sparkles } from 'lucide-react';
import { TRAINING, TRAINING_CONFIG } from '../constants';

const TrainingCTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openIfAllowed = useCallback(() => {
    if (!TRAINING.enabled) return;
    try {
      const hasBeenSeen = typeof window !== 'undefined' ? localStorage.getItem('trainingCtaSeen') : null;
      if (hasBeenSeen && !TRAINING.showEveryVisit) return;
    } catch {
      // localStorage may be blocked; proceed to show
    }
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!TRAINING.enabled) return;

    const hasBeenSeen = typeof window !== 'undefined' ? localStorage.getItem('trainingCtaSeen') : null;
    if (hasBeenSeen && !TRAINING.showEveryVisit) {
      return;
    }

    // Timed trigger
    const timer = setTimeout(() => {
      openIfAllowed();
    }, TRAINING.delayMs);

    // Fallback trigger in case other triggers don't fire (e.g., no scroll/exit-intent)
    const fallback = setTimeout(() => {
      openIfAllowed();
    }, Math.max(TRAINING.delayMs + 10000, 12000));

    // Scroll depth trigger (50%)
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0 && scrollTop / docHeight > 0.5) {
        openIfAllowed();
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Exit-intent trigger (mouse leaves top viewport)
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        openIfAllowed();
        window.removeEventListener('mouseout', onMouseLeave);
      }
    };
    window.addEventListener('mouseout', onMouseLeave);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallback);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mouseout', onMouseLeave);
    };
  }, [openIfAllowed]);

  const handleClose = () => {
    setIsOpen(false);
    try {
      localStorage.setItem('trainingCtaSeen', 'true');
    } catch {}
  };

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
            className="fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-md rounded-2xl backdrop-blur-xl bg-white/10 p-6 shadow-2xl border border-white/20"
          >
            <button
              onClick={handleClose}
              aria-label="Close training promo"
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-white/20 transition"
            >
              <X size={18} />
            </button>

            <div className="flex items-start gap-3 mb-3">
              <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 text-black">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold leading-tight">
                {TRAINING.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-white/80 mb-5">
              {TRAINING.description}
            </p>

            <a
              href={TRAINING.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-5 py-3 rounded-xl font-bold text-center inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black shadow-lg hover:shadow-emerald-500/30 hover:from-emerald-300 hover:to-cyan-300 transition"
            >
              <MessageCircle size={20} />
              Register on WhatsApp
            </a>

            {TRAINING.phone && (
              <p className="mt-3 text-xs text-white/60 text-center">
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