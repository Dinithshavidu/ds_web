import React from 'react';
import { profile } from '../data/mock';

const Footer = () => {
  return (
    <footer className="relative px-6 lg:px-10 pt-20 pb-10 border-t border-white/5 bg-[#0a0a0b]">
      <div className="max-w-[1400px] mx-auto">
        {/* Giant name */}
        <div className="overflow-hidden">
          <h2 className="display font-semibold tracking-tight text-[20vw] leading-none text-white/5 select-none">
            DINITH<span className="text-[#d4ff3a]/40">.</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#d4ff3a] glow" />
              <span className="mono text-[11px] text-white/50">
                {profile.available ? 'available · 2025 — 2026' : 'booked until further notice'}
              </span>
            </div>
            <div className="mono text-[12px] text-white/40">
              © {new Date().getFullYear()} {profile.name}. Designed & built with care in {profile.location.split(',')[0]}.
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 flex flex-wrap md:justify-end gap-x-8 gap-y-3 mono text-[12px]">
            {profile.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#d4ff3a] link-reveal"
              >
                {s.name}
              </a>
            ))}
            <a href={`mailto:${profile.email}`} className="text-white/60 hover:text-[#d4ff3a] link-reveal">
              Email
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mono text-[10px] text-white/30">
          <div>Built with React, Tailwind & a lot of JetBrains Mono.</div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4ff3a] blink" />
            <span>v1.0 · last deploy today</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
