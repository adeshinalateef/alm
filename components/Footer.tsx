import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-site border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-muted-2">
            Designed & Built by Abdul Lateef Adeshina
          </p>
          <p className="text-muted-2">
            <a href="tel:+2349012039810" className="hover:text-primary transition-colors">+234 901 203 9810</a>
            {' · '}
            <a href="https://wa.me/2349012039810" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a>
          </p>
          <p className="text-xs text-muted mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;