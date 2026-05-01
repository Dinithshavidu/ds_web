import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/mock';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#0a0a0b]/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="h-2.5 w-2.5 rounded-full bg-[#d4ff3a] glow" />
          <span className="display font-semibold text-[15px] tracking-tight">
            Dinith<span className="text-[#d4ff3a]">.</span>
          </span>
          <span className="mono text-[11px] text-white/40 ml-1 hidden sm:inline">
            /{profile.role.toLowerCase().replace(/\s+/g, '-')}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-white/60 hover:text-white transition-colors link-reveal"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-medium px-4 py-2 rounded-full bg-[#d4ff3a] text-[#0a0a0b] hover:bg-white transition-colors"
        >
          Let's talk
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-white/80"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a0a0b] border-t border-white/5">
          <div className="px-6 py-5 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[15px] text-white/80 hover:text-[#d4ff3a]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1.5 text-[14px] font-medium px-4 py-2.5 rounded-full bg-[#d4ff3a] text-[#0a0a0b] w-fit"
            >
              Let's talk <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
