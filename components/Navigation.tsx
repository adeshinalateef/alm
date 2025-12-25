import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { TRAINING } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('light') ? 'light' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto theme by West Africa Time (Africa/Lagos): dark 19:00–06:00, light otherwise
  useEffect(() => {
    const fromLagosHour = () => {
      try {
        const fmt = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Africa/Lagos',
          hour: '2-digit',
          hour12: false,
        });
        const parts = fmt.formatToParts(new Date());
        const hourPart = parts.find(p => p.type === 'hour')?.value ?? '12';
        return parseInt(hourPart, 10);
      } catch {
        return new Date().getHours();
      }
    };

    const applyThemeForHour = (h: number) => {
      const isDark = h >= 19 || h < 6; // 7pm–6am
      const newTheme = isDark ? 'dark' : 'light';
      if (newTheme === 'light') {
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
        setTheme('light');
      } else {
        document.documentElement.classList.remove('light');
        localStorage.removeItem('theme');
        setTheme('dark');
      }
    };

    // Only auto-apply if user hasn't explicitly chosen a theme
    const stored = localStorage.getItem('theme');
    if (!stored) {
      applyThemeForHour(fromLagosHour());
    }

    const interval = setInterval(() => {
      if (!localStorage.getItem('theme')) {
        applyThemeForHour(fromLagosHour());
      }
    }, 60 * 1000); // check each minute

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 bg-primary rounded-lg group-hover:rotate-12 transition-transform">
            <Code2 className="text-foreground w-6 h-6" />
          </div>
          <span className="text-xl font-heading font-bold tracking-wide">AlA</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted hover:text-secondary transition-colors relative group text-sm font-medium uppercase tracking-wider"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href={TRAINING.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 btn-primary rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <SiWhatsapp size={16} />
            WhatsApp
          </a>
          {/* Theme toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                const newTheme = theme === 'dark' ? 'light' : 'dark';
                if (newTheme === 'light') {
                  document.documentElement.classList.add('light');
                  localStorage.setItem('theme', 'light');
                } else {
                  document.documentElement.classList.remove('light');
                  localStorage.removeItem('theme');
                }
                setTheme(newTheme);
              }}
              className="p-2 rounded-full btn-ghost hover:bg-white/10 transition-colors"
              title="Toggle theme"
            >
              {theme === 'light' ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100svh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-white/10"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    // Small delay to allow link click to register on mobile before menu closes
                    setTimeout(() => setIsMobileMenuOpen(false), 150);
                  }}
                  className="text-muted hover:text-secondary text-lg font-medium cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
