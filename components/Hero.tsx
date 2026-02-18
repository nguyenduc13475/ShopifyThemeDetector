import React from 'react';
import { motion } from 'framer-motion';
import { Chrome, ArrowRight, CheckCircle2, Search } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] -z-10" />

      <Container>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-300 text-sm font-medium mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            v2.0 is now live on Chrome Web Store
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Discover Any <span className="gradient-text">Shopify Theme</span> <br className="hidden md:block" />
            in 1 Second
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto"
          >
            The smartest Google Web Extension to identify Shopify themes, plugins, and technology stacks used by your competitors. Free, fast, and accurate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="w-full sm:w-auto gap-2">
              <Chrome className="w-5 h-5" />
              Add to Chrome - Free
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
              View Demo <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-500"
          >
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-brand-500" /> No Login Required</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-brand-500" /> 100% Free Forever</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-brand-500" /> Safe & Secure</span>
          </motion.div>
        </div>

        {/* Mockup Section */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          {/* Browser Window UI */}
          <div className="rounded-xl overflow-hidden glass-panel shadow-2xl shadow-brand-900/50">
            {/* Browser Header */}
            <div className="bg-slate-900/80 px-4 py-3 border-b border-white/10 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 bg-slate-800/50 rounded-md h-8 flex items-center px-3 text-xs text-slate-400">
                shopifystore.com
              </div>
            </div>
            
            {/* Mockup Content */}
            <div className="relative bg-slate-900 h-[400px] md:h-[500px] w-full overflow-hidden">
                <img 
                    src="https://picsum.photos/1200/800?grayscale" 
                    alt="Shopify Store Background" 
                    className="w-full h-full object-cover opacity-40 blur-[2px]"
                />
                
                {/* Overlay Floating Card (The Extension Popup) */}
                <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute top-8 right-8 w-80 bg-slate-900 rounded-xl border border-brand-500/30 shadow-2xl p-4 z-20"
                >
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                        <div className="w-10 h-10 rounded-lg bg-brand-600 flex items-center justify-center">
                            <Search className="text-white w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-sm">Theme Detector</h3>
                            <p className="text-xs text-green-400">Analysis Complete</p>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Theme Name</p>
                            <p className="text-white font-medium text-lg">Impulse (v7.2.0)</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Status</p>
                            <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/20">Customized</span>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Theme Store</p>
                            <a href="#" className="text-brand-400 hover:text-brand-300 text-sm flex items-center gap-1">
                                View on Shopify <ArrowRight size={12} />
                            </a>
                        </div>
                        <Button size="sm" fullWidth className="mt-2">Download Report</Button>
                    </div>
                </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;