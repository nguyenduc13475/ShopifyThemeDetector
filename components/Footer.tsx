import React from 'react';
import { Zap, Github, Twitter, Linkedin } from 'lucide-react';
import Container from './ui/Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <Container>
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-600 to-indigo-700 flex items-center justify-center">
                <Zap className="text-white w-4 h-4" fill="currentColor" />
              </div>
              <span className="font-bold text-lg text-white">
                Theme<span className="text-brand-400">Detector</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm mb-6">
              The ultimate tool for Shopify research. Analyze themes, stack, and more in seconds.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-brand-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-brand-400 transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Extension Store</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Theme Database</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Shopify Theme Detector. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;