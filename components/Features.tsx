import React from 'react';
import { motion } from 'framer-motion';
import { ScanSearch, Zap, Layers, Lock, Smartphone, Database } from 'lucide-react';
import Container from './ui/Container';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Instant Detection",
    description: "Our Smart DOM Scanning technology identifies themes in under 500ms.",
    icon: Zap
  },
  {
    title: "Theme Identification",
    description: "Distinguish between original marketplace themes and custom-coded edits.",
    icon: ScanSearch
  },
  {
    title: "Tech Stack Analysis",
    description: "Discover which plugins and apps are powering the store's functionality.",
    icon: Layers
  },
  {
    title: "Privacy First",
    description: "We analyze client-side only. No personal data is ever collected or stored.",
    icon: Lock
  },
  {
    title: "Responsive Design",
    description: "The extension popup is optimized for all screen sizes and dark mode ready.",
    icon: Smartphone
  },
  {
    title: "Huge Database",
    description: "Matched against a database of 10,000+ official and third-party themes.",
    icon: Database
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Everything you need to <span className="gradient-text">analyze competitors</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Built for developers, marketers, and store owners who need reliable data fast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-panel p-6 rounded-2xl hover:bg-white/10 transition-colors group cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mb-4 group-hover:bg-brand-600 group-hover:border-brand-500 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-brand-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;