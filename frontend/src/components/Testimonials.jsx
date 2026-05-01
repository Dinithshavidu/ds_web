import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const current = testimonials[idx];

  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);

  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-10 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-baseline gap-5 mb-3">
          <span className="mono text-[11px] text-[#d4ff3a]">07</span>
          <span className="mono text-[11px] text-white/40 uppercase tracking-widest">Testimonials</span>
        </div>
        <h2 className="display text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl mb-16">
          Kind words from people I've
          {' '}<span className="text-[#d4ff3a]">shipped with.</span>
        </h2>

        <div className="relative grid grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="col-span-12 lg:col-span-2">
            <div className="h-14 w-14 rounded-full border border-[#d4ff3a]/30 flex items-center justify-center">
              <Quote className="h-6 w-6 text-[#d4ff3a]" />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <blockquote
              key={idx}
              className="display text-2xl sm:text-3xl lg:text-4xl leading-[1.3] text-white/90 fade-up"
            >
              “{current.quote}”
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#d4ff3a]/30 to-[#d4ff3a]/5 border border-white/10 flex items-center justify-center">
                <span className="mono text-[12px] text-[#d4ff3a]">
                  {current.name.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>
              <div>
                <div className="text-white/90 text-sm font-medium">{current.name}</div>
                <div className="mono text-[11px] text-white/40">{current.role}</div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-2 flex lg:justify-end gap-2 lg:mt-0">
            <button
              onClick={prev}
              className="h-11 w-11 rounded-full border border-white/10 hover:border-[#d4ff3a]/50 hover:text-[#d4ff3a] text-white/60 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="h-11 w-11 rounded-full border border-white/10 hover:border-[#d4ff3a]/50 hover:text-[#d4ff3a] text-white/60 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* pagination dots */}
        <div className="mt-12 flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1 rounded-full transition-all ${
                i === idx ? 'w-10 bg-[#d4ff3a]' : 'w-6 bg-white/10 hover:bg-white/30'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
