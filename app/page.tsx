'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* ── Ambient background glows ── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-teal-600/8 blur-[100px]" />
      </div>

      {/* ── Minimal Nav ── */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-16 py-6">
        <Image src="/logo.svg" alt="Lanxgrow" width={140} height={36} priority />
        <div className="flex items-center gap-4">
          <Link
            href="/pricing"
            className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link
            href="/onboarding"
            className="text-sm font-medium text-slate-950 bg-cyan-400 px-5 py-2 rounded-full hover:bg-cyan-300 transition-colors duration-200"
          >
            Start Free
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-28 md:pt-28 md:pb-36">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-4 py-1.5 rounded-full mb-8 tracking-wide uppercase">
          AI English Coach — Free to Start
        </span>

        <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight max-w-3xl">
          Speak English
          <br />
          <span className="text-cyan-400">With Confidence.</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
          Practice real conversations with your AI English tutor. Get instant
          feedback, gentle corrections, and the confidence to speak in any
          situation.
        </p>

        <Link
          href="/onboarding"
          className="mt-10 inline-flex items-center gap-2 bg-cyan-400 text-slate-950 font-bold text-base px-8 py-4 rounded-full hover:bg-cyan-300 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          Start Free
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M8 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <p className="mt-4 text-xs text-slate-500">No sign-up required. 100% free to start.</p>
      </section>

      {/* ── Features ── */}
      <section className="relative z-10 px-6 md:px-16 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Everything you need to speak better
          </h2>
          <p className="text-center text-slate-400 mb-14 text-base max-w-lg mx-auto">
            Lanxgrow combines AI intelligence with natural conversation to accelerate
            your English fluency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Real Conversation Practice',
                desc: 'Talk like you\'re chatting with a real tutor. No scripts, no boring exercises — just natural conversation.',
              },
              {
                title: 'Instant Gentle Corrections',
                desc: 'Your AI tutor notices grammar mistakes and shows you the right way to say it — without judgment.',
              },
              {
                title: 'AI-Powered Feedback',
                desc: 'Every message you send is analyzed for clarity, fluency, and tone. Improve with every sentence.',
              },
              {
                title: 'Voice Practice (Coming Soon)',
                desc: 'Speak out loud and get real-time pronunciation feedback. Just like having a tutor in your pocket.',
              },
            ].map((f) => (
              <div
                key={f.title}
                className="glass rounded-2xl p-6 flex flex-col gap-3 hover:border-cyan-400/20 transition-all duration-300"
              >
                <div className="w-8 h-0.5 bg-cyan-400 rounded-full" />
                <h3 className="text-base font-semibold text-white leading-snug">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="relative z-10 px-6 md:px-16 pb-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            How it works
          </h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-4">
            {[
              { step: '01', title: 'Tell us your goal', desc: 'Quick 4-step setup. No sign-up, no password. Just your name and what you want to improve.' },
              { step: '02', title: 'Start practicing', desc: 'Chat with Lanxgrow AI in real English. Type or speak — your choice. A new session takes under 2 minutes to start.' },
              { step: '03', title: 'Watch yourself improve', desc: 'See corrections in real time. Build vocabulary. Gain the confidence to speak English anywhere.' },
            ].map((item, i) => (
              <div key={item.step} className="flex-1 relative">
                {i < 2 && (
                  <div className="hidden md:block absolute top-5 right-0 w-full h-px bg-gradient-to-r from-cyan-400/30 to-transparent translate-x-1/2" />
                )}
                <div className="flex flex-col gap-3">
                  <span className="text-4xl font-black text-cyan-400/30">{item.step}</span>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="relative z-10 px-6 md:px-16 pb-28">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Learners love Lanxgrow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: 'Priya Sharma',
                role: 'Software Engineer, Bangalore',
                quote:
                  '“I’ve been using Lanxgrow for 3 weeks and my confidence in meetings has improved so much. The AI corrections are spot on.”',
              },
              {
                name: 'Rahul Gupta',
                role: 'MBA Student, Pune',
                quote:
                  '“Finally an app that feels like talking to a real tutor. No boring grammar lessons — just real practice.”',
              },
              {
                name: 'Ananya Reddy',
                role: 'HR Manager, Hyderabad',
                quote:
                  '“I was scared to speak English at work. Lanxgrow made me realise I just needed more practice. 10/10.”',
              },
            ].map((t) => (
              <div key={t.name} className="glass rounded-2xl p-6 flex flex-col gap-4">
                <p className="text-sm text-slate-300 leading-relaxed italic">{t.quote}</p>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="relative z-10 px-6 md:px-16 pb-28">
        <div className="max-w-2xl mx-auto text-center glass rounded-3xl p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start speaking better today
          </h2>
          <p className="text-slate-400 mb-8">
            Free. No account needed. Just open the app and start talking.
          </p>
          <Link
            href="/onboarding"
            className="inline-flex items-center gap-2 bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-full hover:bg-cyan-300 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Start Free Now
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-white/5 px-6 md:px-16 py-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src="/logo.svg" alt="Lanxgrow" width={120} height={30} />
          <div className="flex items-center gap-6">
            <Link href="/pricing" className="text-sm text-slate-500 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/practice" className="text-sm text-slate-500 hover:text-white transition-colors">
              Practice
            </Link>
            <Link href="/onboarding" className="text-sm text-slate-500 hover:text-white transition-colors">
              Get Started
            </Link>
          </div>
          <p className="text-xs text-slate-600">&copy; {new Date().getFullYear()} Lanxgrow. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
