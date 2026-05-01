import React from 'react';
import { ArrowDown, MapPin, Sparkles } from 'lucide-react';
import { profile, stats } from '../data/mock';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 lg:px-10 overflow-hidden">
      {/* Subtle ambient light */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-[0.06] blur-3xl"
        style={{ background: 'radial-gradient(circle, #d4ff3a 0%, transparent 60%)' }}
      />

      <div className="max-w-[1400px] mx-auto relative">
        {/* Status pill */}
        <div className="flex items-center gap-3 mb-10 fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4ff3a] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4ff3a]" />
            </span>
            <span className="mono text-[11px] text-white/70">
              {profile.available ? 'available for new work' : 'currently booked'}
            </span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-white/40 mono">
            <MapPin className="h-3 w-3" /> {profile.location}
          </div>
        </div>

        {/* Numbered intro, à la briceclain */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="col-span-12 lg:col-span-9">
            <div className="flex items-baseline gap-5 mb-2 fade-up" style={{ animationDelay: '80ms' }}>
              <span className="mono text-[11px] text-[#d4ff3a]">01</span>
              <span className="text-white/50 text-sm">Hello, I'm</span>
            </div>
            <h1 className="display text-[14vw] sm:text-[12vw] lg:text-[9.5vw] leading-[0.92] font-semibold tracking-tight fade-up" style={{ animationDelay: '160ms' }}>
              Dinith<br />
              <span className="inline-flex items-baseline gap-3">
                Shavindu<span className="text-[#d4ff3a]">.</span>
              </span>
            </h1>

            <div className="flex items-baseline gap-5 mt-8 mb-2 fade-up" style={{ animationDelay: '240ms' }}>
              <span className="mono text-[11px] text-[#d4ff3a]">02</span>
              <span className="text-white/50 text-sm">I design</span>
              <Sparkles className="h-4 w-4 text-white/40" />
              <span className="text-white/50 text-sm">and build</span>
            </div>
            <h2 className="display text-3xl sm:text-4xl lg:text-5xl leading-tight text-white/80 max-w-3xl fade-up" style={{ animationDelay: '320ms' }}>
              web products that feel
              {' '}<span className="italic text-[#d4ff3a]">fast,</span>{' '}
              <span className="italic text-[#d4ff3a]">clear,</span> and
              <span className="italic text-[#d4ff3a]"> considered.</span>
            </h2>

            <p className="mt-8 text-white/55 text-base sm:text-lg max-w-2xl leading-relaxed fade-up" style={{ animationDelay: '400ms' }}>
              {profile.bio}
            </p>
          </div>

          {/* Right rail */}
          <div className="col-span-12 lg:col-span-3 flex lg:justify-end fade-up" style={{ animationDelay: '480ms' }}>
            <div className="flex lg:flex-col gap-6 lg:gap-8 mono text-[11px] text-white/40">
              <div>
                <div className="text-white/30 uppercase tracking-widest text-[10px] mb-1">Role</div>
                <div className="text-white/80">{profile.role}</div>
              </div>
              <div>
                <div className="text-white/30 uppercase tracking-widest text-[10px] mb-1">Based in</div>
                <div className="text-white/80">{profile.location}</div>
              </div>
              <div>
                <div className="text-white/30 uppercase tracking-widest text-[10px] mb-1">Email</div>
                <a href={`mailto:${profile.email}`} className="text-white/80 hover:text-[#d4ff3a] link-reveal">
                  {profile.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/5 fade-up" style={{ animationDelay: '560ms' }}>
          {stats.map((s) => (
            <div key={s.label} className="bg-[#0a0a0b] p-6 sm:p-8">
              <div className="display text-3xl sm:text-4xl font-semibold text-white">{s.value}</div>
              <div className="mono text-[11px] text-white/40 mt-2 leading-relaxed">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex items-center gap-3 text-white/40">
          <ArrowDown className="h-4 w-4" />
          <span className="mono text-[11px]">Scroll to explore the work</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
