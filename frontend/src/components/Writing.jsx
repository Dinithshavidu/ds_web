import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { posts } from '../data/mock';

const Writing = () => {
  return (
    <section id="writing" className="relative py-24 lg:py-32 px-6 lg:px-10 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-baseline gap-5 mb-3">
          <span className="mono text-[11px] text-[#d4ff3a]">06</span>
          <span className="mono text-[11px] text-white/40 uppercase tracking-widest">Writing</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <h2 className="display text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl">
            Thoughts on craft,
            {' '}<span className="text-[#d4ff3a]">shipping,</span>
            {' '}and everything between.
          </h2>
          <a href="#" className="mono text-[12px] text-white/50 hover:text-[#d4ff3a] inline-flex items-center gap-1.5">
            All writing <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {posts.map((post, i) => (
            <a
              key={i}
              href="#"
              className="group bg-[#0a0a0b] p-8 lg:p-10 hover:bg-white/[0.02] transition-colors flex flex-col gap-6 min-h-[240px]"
            >
              <div className="flex items-center justify-between">
                <span className="mono text-[10px] uppercase tracking-widest text-[#d4ff3a]">
                  {post.tag}
                </span>
                <span className="mono text-[10px] text-white/40">
                  {post.date} · {post.read}
                </span>
              </div>

              <h3 className="display text-2xl lg:text-3xl font-semibold leading-tight max-w-md">
                {post.title}
              </h3>

              <p className="text-white/55 text-[14px] leading-relaxed mt-auto">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-white/50 group-hover:text-[#d4ff3a] transition-colors mono text-[12px]">
                Read article
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
