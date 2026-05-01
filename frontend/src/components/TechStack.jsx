import React from 'react';
import { techStack } from '../data/mock';

const marqueeItems = [
  'React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'FastAPI', 'Go',
  'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Vercel',
  'Framer Motion', 'Figma', 'GraphQL', 'tRPC', 'Stripe',
];

const TechStack = () => {
  return (
    <section id="stack" className="relative py-24 lg:py-32 px-6 lg:px-10 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-baseline gap-5 mb-3">
          <span className="mono text-[11px] text-[#d4ff3a]">03</span>
          <span className="mono text-[11px] text-white/40 uppercase tracking-widest">Tech stack</span>
        </div>
        <h2 className="display text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-4xl">
          The tools I reach for, chosen for
          {' '}<span className="text-[#d4ff3a]">clarity</span>
          {' '}over novelty.
        </h2>

        {/* Categories grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="bg-[#0a0a0b] p-8 lg:p-10 group hover:bg-white/[0.015] transition-colors">
              <div className="flex items-center justify-between mb-6">
                <h3 className="display text-lg font-semibold">
                  .{category}
                </h3>
                <span className="mono text-[11px] text-white/30">
                  {String(items.length).padStart(2, '0')} tools
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[13px] text-white/80 hover:border-[#d4ff3a]/50 hover:text-[#d4ff3a] transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-20 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0b] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0b] to-transparent z-10" />
          <div className="marquee">
            {[...marqueeItems, ...marqueeItems].map((t, i) => (
              <div key={i} className="flex items-center gap-10 px-6 shrink-0">
                <span className="display text-4xl sm:text-5xl text-white/10 hover:text-white/70 transition-colors">
                  {t}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4ff3a]/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
