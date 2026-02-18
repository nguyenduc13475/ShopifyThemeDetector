import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Button from './ui/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[100px] -z-10" />

      <Container>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to uncover your competitor's stack?
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Join thousands of marketers and developers using Shopify Theme Detector to gain a competitive edge.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <Button size="lg" className="px-10 py-4 text-lg shadow-xl shadow-brand-500/20">
                Install Extension - It's Free
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CallToAction;