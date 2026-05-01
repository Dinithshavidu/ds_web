import React from 'react';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 lg:py-32 px-6 lg:px-10 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-baseline gap-5 mb-3">
          <span className="mono text-[11px] text-[#d4ff3a]">05</span>
          <span className="mono text-[11px] text-white/40 uppercase tracking-widest">Experience</span>
        </div>
        <h2 className="display text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-4xl">
          A path built one
          {' '}<span className="text-[#d4ff3a]">shipped</span>
          {' '}project at a time.
        </h2>

        <div className="mt-16 divide-y divide-white/5 border-y border-white/5">
          {experience.map((item, i) => (
            <div
              key={i}
              className="group grid grid-cols-12 gap-4 lg:gap-10 py-10 lg:py-12 hover:bg-white/[0.015] transition-colors px-2 -mx-2 rounded-lg"
            >
              <div className="col-span-12 lg:col-span-3 flex flex-col gap-2">
                <span className="mono text-[11px] text-[#d4ff3a]">{item.period}</span>
                <span className="mono text-[11px] text-white/40">{item.location}</span>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <h3 className="display text-2xl lg:text-3xl font-semibold mb-1">
                  {item.role}
                </h3>
                <div className="text-white/50 text-sm mb-4">
                  @ <span className="text-[#d4ff3a]">{item.company}</span>
                </div>
                <p className="text-white/65 text-[15px] leading-relaxed">
                  {item.summary}
                </p>
              </div>
              <ul className="col-span-12 lg:col-span-3 flex flex-col gap-2">
                {item.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-[13px] text-white/60">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-[#d4ff3a] shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
