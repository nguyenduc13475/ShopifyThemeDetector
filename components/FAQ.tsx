import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Container from './ui/Container';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "Is Shopify Theme Detector free?",
    answer: "Yes! The core extension is completely free to use. There are no hidden fees or subscriptions required for standard theme detection."
  },
  {
    question: "Does it collect my data?",
    answer: "Absolutely not. Our extension operates entirely client-side within your browser. We do not track your browsing history or collect personal data."
  },
  {
    question: "Can it detect custom themes?",
    answer: "Yes. The tool can identify if a theme is a customized version of an existing template or a completely custom build. It will label them accordingly."
  },
  {
    question: "Does it work on other browsers?",
    answer: "Currently, we are optimized for Google Chrome and Chromium-based browsers (like Brave and Edge). A Firefox version is in development."
  },
  {
    question: "How accurate is the detection?",
    answer: "We use a multi-point detection algorithm that checks global variables, DOM structures, and asset signatures, resulting in over 99% accuracy."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-900/30">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="rounded-xl border border-slate-800 bg-slate-950/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-medium text-slate-200">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="text-brand-400 w-5 h-5 shrink-0" />
                  ) : (
                    <Plus className="text-slate-500 w-5 h-5 shrink-0" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;