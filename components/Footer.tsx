import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-site border-t border-white/5 text-center">
      <div className="container mx-auto px-6">
        <p className="text-muted-2 flex items-center justify-center gap-2">
          Designed & Built by Abdul Lateef Adeshina
        </p>
        <p className="text-muted-2 mt-2">
          <a href="tel:+2349012039810" className="hover:underline">+234 901 203 9810</a> · <a href="https://wa.me/2349012039810" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a>
        </p>
        <p className="text-xs text-gray-600 mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;