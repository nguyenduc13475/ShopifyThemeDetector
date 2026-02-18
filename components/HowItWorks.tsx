import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';

const steps = [
  {
    number: "01",
    title: "Install Extension",
    description: "Add Shopify Theme Detector to your Chrome browser from the Web Store. It's free and lightweight."
  },
  {
    number: "02",
    title: "Visit a Store",
    description: "Navigate to any Shopify-powered website you want to analyze. The icon will light up."
  },
  {
    number: "03",
    title: "Click & Reveal",
    description: "Click the extension icon. In less than a second, you'll see the theme name, version, and link."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-900 border-y border-slate-800/50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-slate-400">Reveal the secrets of any store in 3 simple steps.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-800 via-brand-900 to-slate-800 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl flex items-center justify-center mb-6 relative z-10">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-brand-400 to-indigo-600">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;