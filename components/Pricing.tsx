import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: "Starter",
    priceMonthly: 0,
    priceYearly: 0,
    description: "Perfect for casual users and dropshippers just starting out.",
    features: [
      "Unlimited Theme Detections",
      "Detect Theme Name & Version",
      "Identify Direct Buy Links",
      "Client-side Analysis",
      "Community Support"
    ],
    buttonText: "Install Free",
    isPopular: false
  },
  {
    name: "Pro Analyst",
    priceMonthly: 12,
    priceYearly: 9,
    description: "For marketers needing deeper insights and competitor data.",
    features: [
      "Everything in Starter",
      "Detect Installed Apps/Plugins",
      "Export Results to CSV",
      "Competitor History Tracking",
      "Priority Email Support",
      "Ad Library Integration"
    ],
    buttonText: "Start 7-Day Trial",
    isPopular: true
  },
  {
    name: "Agency",
    priceMonthly: 39,
    priceYearly: 29,
    description: "Advanced tools for agencies managing multiple stores.",
    features: [
      "Everything in Pro",
      "Bulk Analysis (Up to 100/day)",
      "White-label PDF Reports",
      "API Access",
      "Dedicated Account Manager",
      "Custom Contract & SLA"
    ],
    buttonText: "Contact Sales",
    isPopular: false
  }
];

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-950 -z-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-[120px] -z-10" />

      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Start for free, upgrade when you need more power. No hidden fees.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 bg-slate-800 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <motion.div
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-6 h-6 bg-brand-500 rounded-full shadow-lg"
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Yearly <span className="text-xs text-brand-400 ml-1 font-normal">(Save 25%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative rounded-3xl p-8 border flex flex-col h-full ${
                plan.isPopular 
                  ? 'bg-slate-900/80 border-brand-500 shadow-2xl shadow-brand-900/30' 
                  : 'glass-panel border-slate-800 hover:border-slate-700 transition-colors'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">
                    ${isAnnual ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span className="text-slate-500">/mo</span>
                </div>
                {isAnnual && plan.priceMonthly > 0 && (
                  <p className="text-xs text-brand-400 mt-1">
                    Billed ${plan.priceYearly * 12} yearly
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <Check className="w-5 h-5 text-brand-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.isPopular ? 'primary' : 'outline'} 
                fullWidth
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;