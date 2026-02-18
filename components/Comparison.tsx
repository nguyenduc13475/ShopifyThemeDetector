import React from 'react';
import { Check, X, Minus } from 'lucide-react';
import Container from './ui/Container';
import { ComparisonRow } from '../types';

const rows: ComparisonRow[] = [
  { feature: "Automatic Detection", tool: true, manual: false },
  { feature: "Theme Version Check", tool: true, manual: false },
  { feature: "Detect Custom Builds", tool: true, manual: "Difficult" },
  { feature: "Time Required", tool: "< 1 second", manual: "10-15 mins" },
  { feature: "Direct Buy Links", tool: true, manual: false },
  { feature: "Accuracy", tool: "99.9%", manual: "Varies" },
];

const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why use our extension?</h2>
            <p className="text-slate-400">Stop wasting time searching through source code.</p>
          </div>

          <div className="rounded-2xl border border-slate-800 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900">
                  <th className="p-6 text-slate-400 font-medium w-1/2">Feature</th>
                  <th className="p-6 text-brand-400 font-bold w-1/4 bg-brand-900/10 border-x border-slate-800">Theme Detector</th>
                  <th className="p-6 text-slate-500 font-medium w-1/4">Manual Check</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950">
                {rows.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-900/50 transition-colors">
                    <td className="p-6 text-white font-medium">{row.feature}</td>
                    <td className="p-6 bg-brand-900/5 border-x border-slate-800">
                      {row.tool === true ? (
                        <Check className="text-green-500 w-6 h-6" />
                      ) : (
                        <span className="text-white font-bold">{row.tool}</span>
                      )}
                    </td>
                    <td className="p-6">
                      {row.manual === false ? (
                        <X className="text-red-500 w-6 h-6" />
                      ) : row.manual === "Difficult" ? (
                         <span className="text-yellow-500 font-medium">{row.manual}</span>
                      ) : (
                        <span className="text-slate-500">{row.manual}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Comparison;