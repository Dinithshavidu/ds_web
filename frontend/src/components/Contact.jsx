import React, { useState } from 'react';
import { ArrowUpRight, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';
import { profile } from '../data/mock';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill in all fields before sending.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem('dinith_messages') || '[]');
      existing.push({ ...form, sentAt: new Date().toISOString() });
      localStorage.setItem('dinith_messages', JSON.stringify(existing));
      toast.success('Message sent! I\'ll get back to you within 24 hours.', {
        description: `Thanks, ${form.name.split(' ')[0]} — saved locally for now.`,
      });
      setForm({ name: '', email: '', message: '' });
      setLoading(false);
    }, 700);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 px-6 lg:px-10 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-baseline gap-5 mb-3">
          <span className="mono text-[11px] text-[#d4ff3a]">08</span>
          <span className="mono text-[11px] text-white/40 uppercase tracking-widest">Contact</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <h2 className="display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] font-semibold tracking-tight">
              Let's build<br />
              something<br />
              <span className="text-[#d4ff3a]">worth shipping.</span>
            </h2>
            <p className="mt-8 text-white/60 text-base lg:text-lg leading-relaxed max-w-lg">
              Have a product in mind, a gnarly technical problem, or just want to swap notes on engineering?
              {' '}Drop me a line — I read everything.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4 p-5 rounded-xl border border-white/10 hover:border-[#d4ff3a]/40 bg-white/[0.015] transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-[#d4ff3a]/10 flex items-center justify-center text-[#d4ff3a]">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="mono text-[10px] uppercase tracking-widest text-white/40">Email</div>
                  <div className="text-white/90 text-[15px]">{profile.email}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-[#d4ff3a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <div className="grid grid-cols-2 gap-3">
                {profile.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-xl border border-white/10 hover:border-white/30 bg-white/[0.015] transition-colors"
                  >
                    <div>
                      <div className="mono text-[10px] uppercase tracking-widest text-white/40">{s.name}</div>
                      <div className="text-white/80 text-[13px] truncate">{s.handle}</div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-[#d4ff3a] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={submit}
            className="lg:col-span-6 lg:sticky lg:top-24 p-8 lg:p-10 rounded-2xl border border-white/10 bg-white/[0.02]"
          >
            <div className="mono text-[11px] text-white/40 mb-6">
              // new-message.form
            </div>

            <div className="space-y-6">
              <div>
                <label className="mono text-[11px] uppercase tracking-widest text-white/50 mb-2 block">
                  Your name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Jane Doe"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#d4ff3a] pb-3 text-white placeholder-white/25 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="mono text-[11px] uppercase tracking-widest text-white/50 mb-2 block">
                  Your email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="jane@company.com"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#d4ff3a] pb-3 text-white placeholder-white/25 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="mono text-[11px] uppercase tracking-widest text-white/50 mb-2 block">
                  Tell me about your project
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="A few lines about what you're building, timelines, budget…"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#d4ff3a] pb-3 text-white placeholder-white/25 outline-none transition-colors resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#d4ff3a] text-[#0a0a0b] font-semibold hover:bg-white transition-colors disabled:opacity-60"
            >
              {loading ? 'Sending…' : 'Send message'}
              <Send className="h-4 w-4" />
            </button>

            <div className="mono text-[10px] text-white/30 mt-4 text-center">
              Usually replies within 24 hours.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
