import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-site relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Let's <span className="text-secondary">Create</span> Something Extraordinary
            </h2>
            <p className="text-muted-2 text-lg mb-10 leading-relaxed">
              Have an idea? I'm currently available for freelance projects and other services. Let's discuss how we can elevate your digital presence.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-2">Email Me</p>
                  <p className="font-medium text-lg">
                    <a href="mailto:adeshinalateef200@gmail.com" className="hover:underline">adeshinalateef200@gmail.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-2">Call / WhatsApp</p>
                  <p className="font-medium text-lg">
                    <a href="tel:+2349012039810" className="hover:underline">+234 901 203 9810</a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-2">Location</p>
                  <p className="font-medium text-lg">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl border border-white/10 space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-card border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="sodeeq"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-card border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="@sodeeq.gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted mb-2">Message</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-card border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                  isSuccess 
                    ? 'bg-green-500 text-white' 
                    : 'btn-primary hover:shadow-lg hover:shadow-primary/25'
                }`}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : isSuccess ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;