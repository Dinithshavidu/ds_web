import React from 'react';
import { ArrowUpRight, Award } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  return (
    <section id="work" className="relative py-24 lg:py-32 px-6 lg:px-10 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-baseline gap-5 mb-3">
          <span className="mono text-[11px] text-[#d4ff3a]">04</span>
          <span className="mono text-[11px] text-white/40 uppercase tracking-widest">Selected work</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <h2 className="display text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl">
            Projects I'm proud of,
            {' '}<span className="text-[#d4ff3a]">end to end.</span>
          </h2>
          <a href="#contact" className="mono text-[12px] text-white/50 hover:text-[#d4ff3a] inline-flex items-center gap-1.5">
            Have something in mind? <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {projects.map((p, idx) => (
            <article
              key={p.id}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.015] hover:border-white/15 transition-all duration-500 ${
                idx % 3 === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <a href={p.link} className="block">
                <div className={`relative overflow-hidden ${idx % 3 === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/30 to-transparent" />
                  {p.award && (
                    <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a0a0b]/80 backdrop-blur border border-[#d4ff3a]/30">
                      <Award className="h-3 w-3 text-[#d4ff3a]" />
                      <span className="mono text-[10px] text-[#d4ff3a]">{p.award}</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 mono text-[11px] text-white/60">
                    {p.id} / {p.year}
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="display text-2xl lg:text-3xl font-semibold">
                      .{p.title}
                    </h3>
                    <span className="mt-1 h-9 w-9 rounded-full border border-white/10 inline-flex items-center justify-center shrink-0 group-hover:bg-[#d4ff3a] group-hover:text-[#0a0a0b] group-hover:border-[#d4ff3a] transition-colors">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="text-white/70 text-[15px] mb-5">{p.tagline}</p>
                  <p className="text-white/45 text-sm leading-relaxed mb-6">{p.description}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="mono text-[10px] text-white/60 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5"
                      >
                        {s}
                      </span>
                    ))}
                    <span className="mono text-[10px] text-white/40 ml-auto">
                      {p.role}
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
