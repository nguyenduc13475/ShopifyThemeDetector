import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';
import Container from './ui/Container';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/50">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Problem */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-red-950/10 border border-red-900/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="text-red-500 w-8 h-8" />
              <h3 className="text-2xl font-bold text-white">The Manual Way</h3>
            </div>
            <p className="text-slate-400 mb-6">
              You see a stunning Shopify store and want to know what theme they are using. Usually, you have to:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                Dig through complex source code (Inspect Element).
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                Search for "Shopify.theme" variables manually.
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                Guess if it's a custom build or a pre-made template.
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                Waste 10-15 minutes per website.
              </li>
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="p-8 rounded-2xl bg-gradient-to-br from-brand-900/20 to-slate-900 border border-brand-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-32 bg-brand-500/10 blur-[80px] rounded-full -z-10" />
            
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="text-brand-400 w-8 h-8" />
              <h3 className="text-2xl font-bold text-white">The Extension Way</h3>
            </div>
            <p className="text-slate-400 mb-6">
              With Shopify Theme Detector, you get instant insights without leaving the tab:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white font-medium">
                <CheckCircle className="w-5 h-5 text-brand-400 shrink-0" />
                One-click automated detection.
              </li>
              <li className="flex items-start gap-3 text-white font-medium">
                <CheckCircle className="w-5 h-5 text-brand-400 shrink-0" />
                Identifies customized themes vs originals.
              </li>
              <li className="flex items-start gap-3 text-white font-medium">
                <CheckCircle className="w-5 h-5 text-brand-400 shrink-0" />
                Provides direct links to the official theme store.
              </li>
              <li className="flex items-start gap-3 text-white font-medium">
                <CheckCircle className="w-5 h-5 text-brand-400 shrink-0" />
                Zero impact on website performance.
              </li>
            </ul>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default ProblemSolution;